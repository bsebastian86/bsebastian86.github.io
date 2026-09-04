import { freelanceProjects, jobs } from '../data/projects'
import { ArrowIcon } from './Icons'

export function Experience() {
  return (
    <section className="section" id="experience">
      <h2 className="section__label">Experience</h2>
      <ul className="resume-list">
        {jobs.map((job) => {
          const title = (
            <>
              {job.role} · {job.company}
              {job.href ? <ArrowIcon /> : null}
            </>
          )

          return (
            <li key={job.id}>
              <article className="card card--role">
                <p className="card__meta">{job.dates}</p>
                <div className="card__body">
                  {job.href ? (
                    <a className="card__title" href={job.href} target="_blank" rel="noreferrer">
                      {title}
                    </a>
                  ) : (
                    <h3 className="card__title">{title}</h3>
                  )}
                  <p className="card__location">{job.location}</p>
                  <ul className="card__bullets">
                    {job.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  {job.tags.length ? (
                    <ul className="pills">
                      {job.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            </li>
          )
        })}
      </ul>

      <h3 className="section__subhead">Freelance</h3>
      <ul className="resume-list">
        {freelanceProjects.map((project) => (
          <li key={project.id}>
            <article className="card">
              <a className="card__title" href={project.href} target="_blank" rel="noreferrer">
                {project.title}
                <ArrowIcon />
              </a>
              <p>{project.summary}</p>
              <ul className="pills">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
