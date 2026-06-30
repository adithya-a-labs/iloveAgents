import { CAPABILITY_RULES, TASK_RULES } from './rules'

const normalize = (value) => String(value || '').toLowerCase()
const agentText = (agent) => normalize([agent.name, agent.description, agent.category, agent.provider, agent.defaultProvider, agent.model, agent.outputType].filter(Boolean).join(' '))

const addUnique = (reasons, reason) => {
  if (reason && !reasons.includes(reason)) reasons.push(reason)
}

export function scoreAgent(agent, answers = {}) {
  let score = 0
  const reasons = []
  const text = agentText(agent)
  const taskRule = TASK_RULES[answers.task]

  if (taskRule) {
    if (taskRule.categories.includes(agent.category)) {
      score += 34
      addUnique(reasons, taskRule.reason)
    }
    const keywordHits = taskRule.keywords.filter((keyword) => text.includes(keyword)).length
    if (keywordHits > 0) {
      score += Math.min(28, keywordHits * 7)
      addUnique(reasons, taskRule.reason)
    }
  }

  if (answers.provider && answers.provider !== 'any') {
    if (agent.provider === answers.provider || agent.defaultProvider === answers.provider) {
      score += 16
      addUnique(reasons, 'Aligns with your preferred provider')
    } else if (agent.provider === 'any') {
      score += 8
      addUnique(reasons, 'Compatible with multiple providers')
    }
  }

  if (answers.preference === 'fast-lightweight') {
    if (text.includes('quick') || text.includes('concise') || text.includes('instant')) score += 8
  } else if (answers.preference === 'most-capable') {
    if (text.includes('comprehensive') || text.includes('detailed') || text.includes('advanced') || text.includes('expert')) score += 8
  } else if (answers.preference === 'balanced') {
    score += 3
  }

  ;(answers.capabilities || []).forEach((capability) => {
    const rule = CAPABILITY_RULES[capability]
    if (!rule) return
    const keywordHits = rule.keywords.filter((keyword) => text.includes(keyword)).length
    if (keywordHits > 0) {
      score += Math.min(9, keywordHits * 3)
      addUnique(reasons, rule.reason)
    }
  })

  if (agent.category) addUnique(reasons, `Fits the ${agent.category} category`)
  if (agent.description) addUnique(reasons, 'Description is relevant to your selected goals')

  return { agent, score: Math.min(100, score), reasons }
}

export function getRecommendations(agents, answers, limit) {
  return agents
    .map((agent) => scoreAgent(agent, answers))
    .sort((a, b) => b.score - a.score || a.agent.name.localeCompare(b.agent.name))
    .slice(0, limit)
}
