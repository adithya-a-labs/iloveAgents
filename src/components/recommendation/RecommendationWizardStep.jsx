export default function RecommendationWizardStep({ title, helper, options, value, values = [], multi = false, onChange }) {
  const isSelected = (id) => (multi ? values.includes(id) : value === id)

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-bold dark:text-text-primary text-gray-900">{title}</h3>
        {helper && <p className="text-sm dark:text-text-secondary text-gray-500 mt-1">{helper}</p>}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {options.map((option) => {
          const selected = isSelected(option.id)
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onChange(option.id)}
              className={`text-left rounded-xl border p-4 transition-all ${
                selected
                  ? 'border-accent bg-accent/10 shadow-lg shadow-accent/10'
                  : 'dark:border-border dark:bg-surface-card bg-white border-gray-200 hover:border-accent/40'
              }`}
            >
              <div className="text-sm font-semibold dark:text-text-primary text-gray-900">{option.label}</div>
              {option.description && <div className="text-xs dark:text-text-secondary text-gray-500 mt-1 leading-relaxed">{option.description}</div>}
            </button>
          )
        })}
      </div>
    </div>
  )
}
