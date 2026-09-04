export function Contact() {
  return (
    <section className="section" id="contact">
      <h2 className="section__label">Contact</h2>
      <p className="contact__lede">
        Want to discuss your ideas for a new project or just want to say hi? It&apos;s all good,
        I&apos;d love to connect with you.
      </p>
      <ul className="resume-list">
        <li>
          <a className="card card--role" href="mailto:bsebastian86@gmail.com">
            <p className="card__meta">Email</p>
            <div className="card__body">
              <span className="card__title">bsebastian86@gmail.com</span>
            </div>
          </a>
        </li>
        <li>
          <a
            className="card card--role"
            href="https://github.com/bsebastian86"
            target="_blank"
            rel="noreferrer"
          >
            <p className="card__meta">GitHub</p>
            <div className="card__body">
              <span className="card__title">github.com/bsebastian86</span>
            </div>
          </a>
        </li>
        <li>
          <a
            className="card card--role"
            href="https://www.linkedin.com/in/bsebastian86"
            target="_blank"
            rel="noreferrer"
          >
            <p className="card__meta">LinkedIn</p>
            <div className="card__body">
              <span className="card__title">linkedin.com/in/bsebastian86</span>
            </div>
          </a>
        </li>
        <li>
          <a
            className="card card--role"
            href="https://facebook.com/bsebastian86"
            target="_blank"
            rel="noreferrer"
          >
            <p className="card__meta">Facebook</p>
            <div className="card__body">
              <span className="card__title">facebook.com/bsebastian86</span>
            </div>
          </a>
        </li>
      </ul>
    </section>
  )
}
