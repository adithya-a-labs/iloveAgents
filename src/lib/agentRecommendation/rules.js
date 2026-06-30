export const TASK_RULES = {
  'coding-development': {
    categories: ['Engineering', 'Developer Tools', 'DevOps', 'Web3'],
    keywords: ['code', 'api', 'bug', 'debug', 'git', 'sql', 'database', 'test', 'review', 'architecture', 'kubernetes', 'docker', 'solidity', 'regex'],
    reason: 'Matches your coding workflow',
  },
  'research-analysis': {
    categories: ['Research', 'Data Science', 'Business', 'Product'],
    keywords: ['research', 'analysis', 'summar', 'compare', 'competitive', 'report', 'pdf', 'market', 'investigate'],
    reason: 'Related to research and summarization',
  },
  'writing-content': {
    categories: ['Marketing', 'Product', 'Sales', 'HR', 'Legal'],
    keywords: ['write', 'writer', 'content', 'blog', 'email', 'linkedin', 'script', 'proposal', 'description', 'policy', 'seo'],
    reason: 'Supports writing and content creation',
  },
  automation: {
    categories: ['DevOps', 'Engineering', 'Productivity'],
    keywords: ['workflow', 'automation', 'pipeline', 'runbook', 'cron', 'schedule', 'incident', 'cicd', 'deploy'],
    reason: 'Fits automation and repeatable workflow needs',
  },
  'data-analysis': {
    categories: ['Data Science', 'Engineering', 'Finance'],
    keywords: ['data', 'dataset', 'sql', 'query', 'etl', 'model', 'experiment', 'analytics', 'cleaning', 'dictionary'],
    reason: 'Matches your data analysis needs',
  },
  'image-generation': {
    categories: ['Design', 'Marketing', 'Gaming'],
    keywords: ['image', 'prompt', 'visual', 'design', 'palette', 'font', 'typography', 'nft', 'game'],
    reason: 'Connects to visual and image-generation work',
  },
  learning: {
    categories: ['Education'],
    keywords: ['study', 'quiz', 'flashcard', 'explain', 'learning', 'roadmap', 'cheatsheet', 'mindmap', 'mnemonic', 'dsa'],
    reason: 'Designed for learning and practice workflows',
  },
  'business-productivity': {
    categories: ['Business', 'Productivity', 'Sales', 'HR', 'Finance', 'Real Estate'],
    keywords: ['business', 'productivity', 'sales', 'budget', 'resume', 'meeting', 'onboarding', 'property', 'salary', 'customer'],
    reason: 'Aligns with business and productivity goals',
  },
}

export const CAPABILITY_RULES = {
  'tool-calling': { keywords: ['tool', 'function', 'api', 'workflow', 'automation'], reason: 'Has text signals related to tool-based workflows' },
  'fast-responses': { keywords: ['quick', 'concise', 'simple', 'instant', 'fast'], reason: 'Has text signals for quick responses' },
  'vision-support': { keywords: ['image', 'visual', 'screenshot', 'pdf', 'design'], reason: 'Has text signals related to visual inputs or outputs' },
  'structured-output': { keywords: ['json', 'structured', 'schema', 'table', 'checklist', 'report', 'format'], reason: 'Matches your structured-output preference' },
  'open-source': { keywords: ['open source', 'community', 'github'], reason: 'Includes text signals related to open-source work' },
  'frequently-updated': { keywords: ['changelog', 'updated', 'latest', 'current', 'release'], reason: 'Has text signals related to updates or change tracking' },
}
