#!/usr/bin/env python3
"""
Build sitemap.xml at repo root for all canonical pages.

Extensibility: add entries to PAGES as (public_path, source_file).
Future pages (e.g. blog) are auto-included by editing this list only.

Requirements:
- Python 3
- Git (to derive lastmod from commit dates)
"""

import os
import sys
import xml.etree.ElementTree as ET
from datetime import datetime, timezone

BASE_URL = "https://acewerk.com"
OUTPUT = "sitemap.xml"

# List of (public_path, source_file_relative_to_repo_root).
# Add new pages here only; core logic stays the same.
PAGES = [
    ("/", "index.html"),
    ("/services/", "services/index.html"),
    ("/our-team/", "our-team/index.html"),
    ("/contact/", "contact/index.html"),
]

def get_lastmod(repo_root: str, rel_path: str) -> str:
    """
    Return ISO 8601 last-modified timestamp from git log
    of the most recent commit that touched rel_path.
    """
    cmd = ["git", "-C", repo_root, "log", "-1", "--format=%aI", "--", rel_path]
    import subprocess
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode != 0 or not result.stdout.strip():
        raise RuntimeError(
            f"No git history for '{rel_path}' or git command failed: "
            f"{result.stderr.strip()}"
        )
    ts = result.stdout.strip()
    # Normalize to a simple ISO 8601 date+time (no tz offset)
    # %aI gives ISO 8601 with tz; we'll convert to UTC for consistency.
    dt = datetime.fromisoformat(ts)
    dt_utc = dt.astimezone(timezone.utc)
    # Output ISO format without colon in tz for wider compatibility.
    return dt_utc.strftime("%Y-%m-%dT%H:%M:%SZ")


def build_sitemap():
    repo_root = os.path.abspath(
        os.path.join(os.path.dirname(__file__), "..")
    )

    urlset = ET.Element(
        "urlset",
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9",
    )

    for public_path, source_file in PAGES:
        abs_path = os.path.join(repo_root, source_file)

        if not os.path.isfile(abs_path):
            raise FileNotFoundError(
                f"Source file for '{public_path}' not found: {abs_path}"
            )

        loc = BASE_URL + public_path
        lastmod = get_lastmod(repo_root, source_file)

        url = ET.SubElement(urlset, "url")
        loc_el = ET.SubElement(url, "loc")
        loc_el.text = loc

        lastmod_el = ET.SubElement(url, "lastmod")
        lastmod_el.text = lastmod

    # Pretty-print XML
    tree = ET.ElementTree(urlset)
    ET.indent(tree, space="  ", level=0)

    out_path = os.path.join(repo_root, OUTPUT)
    tree.write(
        out_path,
        xml_declaration=True,
        encoding="UTF-8",
        method="xml",
    )

    print(f"sitemap.xml written to {out_path} with {len(PAGES)} URLs")


if __name__ == "__main__":
    try:
        build_sitemap()
    except Exception as e:
        print(f"ERROR: {e}", file=sys.stderr)
        sys.exit(1)
