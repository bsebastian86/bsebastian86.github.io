import { processSteps } from '../data/projects'

export function Process() {
  return (
    <section className="section" id="process">
      <h2 className="section__label">Process</h2>
      <ul className="resume-list">
        {processSteps.map((step) => (
          <li key={step.id} className="card card--role">
            <p className="card__meta">{step.number}</p>
            <div className="card__body">
              <h3 className="card__title">{step.title}</h3>
              <p>{step.copy}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
