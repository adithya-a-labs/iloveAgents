export const MAX_RECOMMENDATION_RESULTS = 10
export const HIGH_CONFIDENCE_SCORE = 45

export const TASK_OPTIONS = [
  { id: 'coding-development', label: 'Coding & Development', description: 'Build, review, debug, document, or ship software.' },
  { id: 'research-analysis', label: 'Research & Analysis', description: 'Investigate topics, compare options, and summarize findings.' },
  { id: 'writing-content', label: 'Writing & Content', description: 'Draft, rewrite, optimize, or publish content.' },
  { id: 'automation', label: 'Automation', description: 'Create workflows, runbooks, scripts, and repeatable processes.' },
  { id: 'data-analysis', label: 'Data Analysis', description: 'Clean, model, query, or explain data.' },
  { id: 'image-generation', label: 'Image Generation', description: 'Create visual prompts, design assets, and image concepts.' },
  { id: 'learning', label: 'Learning', description: 'Study, practice, explain, and remember concepts.' },
  { id: 'business-productivity', label: 'Business & Productivity', description: 'Plan, sell, hire, negotiate, and organize work.' },
]

export const PROVIDER_OPTIONS = [
  { id: 'any', label: 'No preference', description: 'Recommend the best overall matches.' },
  { id: 'openai', label: 'OpenAI', description: 'Prioritize agents configured for OpenAI.' },
  { id: 'anthropic', label: 'Anthropic', description: 'Prioritize agents configured for Anthropic.' },
  { id: 'gemini', label: 'Gemini', description: 'Prioritize agents configured for Gemini.' },
]

export const PREFERENCE_OPTIONS = [
  { id: 'fast-lightweight', label: 'Fast & lightweight', description: 'Prefer concise, focused agents for quick jobs.' },
  { id: 'balanced', label: 'Balanced', description: 'Balance speed, depth, and flexibility.' },
  { id: 'most-capable', label: 'Most capable', description: 'Prefer deeper, more comprehensive agents.' },
  { id: 'no-preference', label: 'No preference', description: 'Do not adjust ranking for this.' },
]

export const CAPABILITY_OPTIONS = [
  { id: 'tool-calling', label: 'Tool Calling' },
  { id: 'fast-responses', label: 'Fast Responses' },
  { id: 'vision-support', label: 'Vision Support' },
  { id: 'structured-output', label: 'Structured Output' },
  { id: 'open-source', label: 'Open Source' },
  { id: 'frequently-updated', label: 'Frequently Updated' },
]
