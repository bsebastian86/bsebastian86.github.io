import { education } from '../data/projects'

export function About() {
  return (
    <section className="section" id="about">
      <h2 className="section__label">About</h2>
      <div className="about">
        <p>
          Passionate <strong>Front End Web Engineer</strong> with a proven track record in{' '}
          <strong>PHP</strong> and <strong>ReactJS</strong>, eager to contribute to the team with
          comprehensive end-to-end website development expertise.
        </p>
        <p>
          I studied at <strong>{education.school}</strong> in {education.location}, completing an{' '}
          {education.degree} in {education.year}. {education.detail}
        </p>
      </div>
    </section>
  )
}
