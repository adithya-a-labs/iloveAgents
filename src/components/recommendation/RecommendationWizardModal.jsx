import { useMemo, useState } from 'react'
import { X } from 'lucide-react'
import { useAgents } from '../../lib/useAgents'
import { CAPABILITY_OPTIONS, MAX_RECOMMENDATION_RESULTS, PREFERENCE_OPTIONS, PROVIDER_OPTIONS, TASK_OPTIONS } from '../../lib/agentRecommendation/constants'
import { getRecommendations } from '../../lib/agentRecommendation/scoring'
import RecommendationWizardStep from './RecommendationWizardStep'
import RecommendationResults from './RecommendationResults'

const steps = ['task', 'provider', 'preference', 'capabilities', 'results']

export default function RecommendationWizardModal({ open, onClose }) {
  const { agents } = useAgents()
  const [stepIndex, setStepIndex] = useState(0)
  const [answers, setAnswers] = useState({ task: 'coding-development', provider: 'any', preference: 'balanced', capabilities: [] })
  const progress = ((stepIndex + 1) / steps.length) * 100
  const results = useMemo(() => getRecommendations(agents, answers, MAX_RECOMMENDATION_RESULTS), [agents, answers])

  if (!open) return null

  const setAnswer = (key, value) => setAnswers((prev) => ({ ...prev, [key]: value }))
  const toggleCapability = (id) => setAnswers((prev) => ({
    ...prev,
    capabilities: prev.capabilities.includes(id) ? prev.capabilities.filter((item) => item !== id) : [...prev.capabilities, id],
  }))

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" role="dialog" aria-modal="true">
      <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border dark:bg-[#101014] dark:border-border bg-white border-gray-200 shadow-2xl">
        <div className="sticky top-0 z-10 dark:bg-[#101014]/95 bg-white/95 backdrop-blur border-b dark:border-border border-gray-200 p-5">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div>
              <h2 className="text-xl font-bold dark:text-text-primary text-gray-900">Find my agent</h2>
              <p className="text-sm dark:text-text-secondary text-gray-500">Answer a few questions to rank agents for your workflow.</p>
            </div>
            <button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-surface-input" aria-label="Close recommendation wizard"><X size={18} /></button>
          </div>
          <div className="h-2 rounded-full dark:bg-surface-input bg-gray-100 overflow-hidden" aria-label="Wizard progress">
            <div className="h-full bg-accent transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="p-5">
          {steps[stepIndex] === 'task' && <RecommendationWizardStep title="What do you want help with?" options={TASK_OPTIONS} value={answers.task} onChange={(id) => setAnswer('task', id)} />}
          {steps[stepIndex] === 'provider' && <RecommendationWizardStep title="Do you prefer a provider?" helper="This helps prioritize compatible agents. It won't exclude others." options={PROVIDER_OPTIONS} value={answers.provider} onChange={(id) => setAnswer('provider', id)} />}
          {steps[stepIndex] === 'preference' && <RecommendationWizardStep title="What's most important to you?" options={PREFERENCE_OPTIONS} value={answers.preference} onChange={(id) => setAnswer('preference', id)} />}
          {steps[stepIndex] === 'capabilities' && <RecommendationWizardStep title="Any extra preferences?" helper="These are ranking signals. When metadata is missing, matches use weak text signals only." options={CAPABILITY_OPTIONS} values={answers.capabilities} multi onChange={toggleCapability} />}
          {steps[stepIndex] === 'results' && <RecommendationResults results={results} agentsEmpty={agents.length === 0} />}
        </div>

        <div className="sticky bottom-0 flex justify-between gap-3 p-5 border-t dark:border-border border-gray-200 dark:bg-[#101014]/95 bg-white/95 backdrop-blur">
          <button type="button" onClick={() => stepIndex === 0 ? onClose() : setStepIndex((idx) => idx - 1)} className="px-4 py-2 rounded-lg text-sm font-semibold dark:bg-surface-input bg-gray-100 dark:text-text-secondary text-gray-700">{stepIndex === 0 ? 'Cancel' : 'Back'}</button>
          {stepIndex < steps.length - 1 ? <button type="button" onClick={() => setStepIndex((idx) => idx + 1)} className="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-accent hover:bg-accent-hover">Next</button> : <button type="button" onClick={onClose} className="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-accent hover:bg-accent-hover">Done</button>}
        </div>
      </div>
    </div>
  )
}
