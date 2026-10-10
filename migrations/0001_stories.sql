-- Visitor stories. Created once in Cloudflare D1 (see README section "Stories database").
CREATE TABLE IF NOT EXISTS stories (
  id TEXT PRIMARY KEY,
  created_at INTEGER NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',   -- pending | approved | rejected
  display_name TEXT,                        -- NULL when posted anonymously
  age TEXT,                                 -- under3 | 3-6 | 7-12 | 13-18 | over18 | private | ''
  body TEXT NOT NULL,
  lang TEXT NOT NULL DEFAULT 'ar',
  ip_hash TEXT
);
CREATE INDEX IF NOT EXISTS idx_stories_status ON stories(status, created_at);
CREATE INDEX IF NOT EXISTS idx_stories_ip ON stories(ip_hash, created_at);
