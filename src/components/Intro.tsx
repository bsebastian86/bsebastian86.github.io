import type { MouseEvent } from 'react'
import { navLinks } from '../data/projects'
import { useActiveSection } from '../hooks/useActiveSection'
import { EmailIcon, FacebookIcon, GitHubIcon, LinkedInIcon } from './Icons'

function scrollToSection(event: MouseEvent<HTMLAnchorElement>) {
  const id = event.currentTarget.hash.slice(1)
  const section = document.getElementById(id)

  if (!section) return

  event.preventDefault()
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  section.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' })
}

const socials = [
  { href: 'mailto:bsebastian86@gmail.com', label: 'Email', icon: EmailIcon },
  {
    href: 'https://github.com/bsebastian86',
    label: 'GitHub',
    icon: GitHubIcon,
    external: true,
  },
  {
    href: 'https://www.linkedin.com/in/bsebastian86',
    label: 'LinkedIn',
    icon: LinkedInIcon,
    external: true,
  },
  {
    href: 'https://facebook.com/bsebastian86',
    label: 'Facebook',
    icon: FacebookIcon,
    external: true,
  },
]

export function Intro() {
  const active = useActiveSection()

  return (
    <header className="intro">
      <div>
        <div className="intro__identity">
          <img
            className="intro__photo"
            src="/images/avatar.jpg"
            alt="Portrait of Ben Sebastian"
          />
          <div>
            <h1>
              <a href="#about" onClick={scrollToSection}>
                Ben Sebastian
              </a>
            </h1>
            <h2>Front End Engineer</h2>
            <p className="intro__place">Manila, Philippines</p>
          </div>
        </div>
        <p>Front end engineer focused on end-to-end website development.</p>
        <nav className="intro__nav" aria-label="Primary">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={active === link.href.slice(1) ? 'is-active' : undefined}
              onClick={scrollToSection}
            >
              <span className="intro__index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="intro__label">{link.label}</span>
            </a>
          ))}
        </nav>
      </div>
      <ul className="intro__social">
        {socials.map((item) => {
          const Icon = item.icon
          return (
            <li key={item.href}>
              <a
                href={item.href}
                aria-label={item.label}
                {...(item.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                <Icon />
              </a>
            </li>
          )
        })}
      </ul>
    </header>
  )
}
