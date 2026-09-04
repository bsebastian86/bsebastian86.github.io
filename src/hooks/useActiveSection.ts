import { useEffect, useState } from 'react'

const SECTION_IDS = ['about', 'experience', 'process', 'contact'] as const

export function useActiveSection() {
  const [active, setActive] = useState<(typeof SECTION_IDS)[number]>('about')

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    )

    if (!sections.length) return

    const update = () => {
      const last = sections[sections.length - 1]
      const reachedBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4

      if (reachedBottom) {
        setActive(last.id as (typeof SECTION_IDS)[number])
        return
      }

      const marker = window.innerHeight * 0.28
      let current = sections[0].id as (typeof SECTION_IDS)[number]

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= marker) {
          current = section.id as (typeof SECTION_IDS)[number]
        }
      }

      setActive(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return active
}
