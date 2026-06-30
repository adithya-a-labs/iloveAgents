import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { getGroundedReasons } from '../../lib/agentRecommendation/explanations'

const providerLabel = (provider) => ({ openai: 'OpenAI', anthropic: 'Anthropic', gemini: 'Gemini', any: 'Any Provider' }[provider] || provider)

export default function RecommendationResultCard({ result }) {
  const { agent, score } = result
  const reasons = getGroundedReasons(result)

  return (
    <article className="rounded-xl border p-4 dark:bg-surface-card dark:border-border bg-white border-gray-200">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h4 className="font-bold dark:text-text-primary text-gray-900">{agent.name}</h4>
          <div className="flex flex-wrap gap-2 mt-2 text-[11px]">
            {agent.category && <span className="px-2 py-1 rounded-full bg-accent/10 text-accent">{agent.category}</span>}
            {(agent.provider || agent.defaultProvider) && <span className="px-2 py-1 rounded-full dark:bg-surface-input bg-gray-100 dark:text-text-secondary text-gray-600">{providerLabel(agent.provider || agent.defaultProvider)}</span>}
          </div>
        </div>
        <div className="text-right shrink-0">
          <div className="text-xl font-bold text-accent">{Math.round(score)}%</div>
          <div className="text-[11px] dark:text-text-muted text-gray-400">match</div>
        </div>
      </div>
      <p className="text-sm dark:text-text-secondary text-gray-600 mt-3">{agent.description}</p>
      <div className="mt-4">
        <h5 className="text-xs font-bold uppercase tracking-wider dark:text-text-muted text-gray-400 mb-2">Why this agent?</h5>
        <ul className="space-y-1.5">
          {reasons.map((reason) => <li key={reason} className="text-xs dark:text-text-secondary text-gray-600">• {reason}</li>)}
        </ul>
      </div>
      <Link to={`/agent/${agent.id}`} className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-accent hover:text-accent-hover">
        Open Agent <ArrowRight size={14} />
      </Link>
    </article>
  )
}
