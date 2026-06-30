import RecommendationResultCard from './RecommendationResultCard'
import { HIGH_CONFIDENCE_SCORE } from '../../lib/agentRecommendation/constants'

export default function RecommendationResults({ results, agentsEmpty }) {
  if (agentsEmpty) {
    return (
      <div className="text-center py-10 rounded-xl border dark:bg-surface-card dark:border-border bg-white border-gray-200">
        <h3 className="font-bold dark:text-text-primary text-gray-900">No agents available</h3>
        <p className="text-sm dark:text-text-secondary text-gray-500 mt-1">The agent list is empty, so there are no recommendations to show.</p>
      </div>
    )
  }

  const hasHighConfidence = results.some((result) => result.score >= HIGH_CONFIDENCE_SCORE)

  return (
    <div className="space-y-4">
      {!hasHighConfidence && (
        <div className="rounded-xl border border-amber-400/30 bg-amber-400/10 p-4">
          <h3 className="text-sm font-bold dark:text-text-primary text-gray-900">Closest matches</h3>
          <p className="text-sm dark:text-text-secondary text-gray-600 mt-1">We couldn't find a perfect match, but here are the closest agents based on your preferences.</p>
        </div>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {results.map((result) => <RecommendationResultCard key={result.agent.id} result={result} />)}
      </div>
    </div>
  )
}
