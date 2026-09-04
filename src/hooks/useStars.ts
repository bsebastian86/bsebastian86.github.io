import { useEffect } from 'react'

type Star = {
  x: number
  y: number
  z: number
  speed: number
  twinkle: number
  twinkleFast: number
  phase: number
  phaseFast: number
  spark: boolean
}

const FAR = 1
const NEAR = 0.12

function scatter(): Pick<Star, 'x' | 'y' | 'z'> {
  return {
    x: (Math.random() - 0.5) * 2,
    y: (Math.random() - 0.5) * 2,
    z: NEAR + Math.random() * (FAR - NEAR),
  }
}

function makeStars(width: number, height: number): Star[] {
  const count = Math.min(160, Math.max(70, Math.round((width * height) / 11000)))
  const stars: Star[] = []

  for (let i = 0; i < count; i += 1) {
    stars.push({
      ...scatter(),
      speed: 0.045 + Math.random() * 0.05,
      twinkle: 1.1 + Math.random() * 2.2,
      twinkleFast: 3.4 + Math.random() * 4.2,
      phase: Math.random() * Math.PI * 2,
      phaseFast: Math.random() * Math.PI * 2,
      spark: Math.random() > 0.62,
    })
  }

  return stars
}

export function useStars() {
  useEffect(() => {
    const canvas = document.querySelector<HTMLCanvasElement>('.stars-field')
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let frame = 0
    let ratio = 1
    let stars: Star[] = []
    let last = performance.now()

    const resize = () => {
      ratio = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(window.innerWidth * ratio)
      canvas.height = Math.floor(window.innerHeight * ratio)
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      stars = makeStars(window.innerWidth, window.innerHeight)
    }

    const project = (star: Star, z: number, width: number, height: number) => {
      const field = Math.min(width, height) * 0.5
      return {
        x: width / 2 + (star.x / z) * field,
        y: height / 2 + (star.y / z) * field,
      }
    }

    const recycle = (star: Star) => {
      const next = scatter()
      star.x = next.x
      star.y = next.y
      star.z = FAR
    }

    const draw = (time: number, animate: boolean, dt: number) => {
      const width = window.innerWidth
      const height = window.innerHeight

      ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
      ctx.clearRect(0, 0, width, height)

      for (const star of stars) {
        const previousZ = star.z

        if (animate) {
          star.z -= star.speed * dt
          if (star.z <= NEAR) recycle(star)
        }

        const point = project(star, star.z, width, height)
        const closeness = 1 - (star.z - NEAR) / (FAR - NEAR)
        const onScreen =
          point.x > -12 && point.x < width + 12 && point.y > -12 && point.y < height + 12

        if (!onScreen) {
          recycle(star)
          continue
        }

        const pulse = animate
          ? Math.pow(0.5 + 0.5 * Math.sin(time * star.twinkle + star.phase), 2) *
            (0.35 + 0.65 * (0.5 + 0.5 * Math.sin(time * star.twinkleFast + star.phaseFast)))
          : 0.85
        const alpha = (0.08 + closeness * 0.55) * (0.12 + pulse * 0.88)
        const blue = 210 + closeness * 30
        const radius = 0.45 + closeness * 1.7 * (0.7 + pulse * 0.45)

        if (animate && closeness > 0.35) {
          const previous = project(star, Math.min(FAR, previousZ), width, height)
          ctx.beginPath()
          ctx.moveTo(previous.x, previous.y)
          ctx.lineTo(point.x, point.y)
          ctx.strokeStyle = `hsla(${blue}, 80%, 82%, ${alpha * 0.35})`
          ctx.lineWidth = Math.max(0.5, radius * 0.65)
          ctx.stroke()
        }

        ctx.beginPath()
        ctx.arc(point.x, point.y, radius, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${blue}, 80%, ${72 + closeness * 18}%, ${alpha})`
        ctx.fill()

        if (star.spark && pulse > 0.72 && closeness > 0.45) {
          const arm = 1.6 + radius * 1.6 * pulse
          ctx.strokeStyle = `hsla(${blue}, 90%, 88%, ${alpha * 0.65})`
          ctx.lineWidth = 0.6
          ctx.beginPath()
          ctx.moveTo(point.x - arm, point.y)
          ctx.lineTo(point.x + arm, point.y)
          ctx.moveTo(point.x, point.y - arm)
          ctx.lineTo(point.x, point.y + arm)
          ctx.stroke()
        }
      }
    }

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      draw(now / 1000, true, dt)
      frame = window.requestAnimationFrame(tick)
    }

    resize()
    window.addEventListener('resize', resize)

    if (motion.matches) {
      draw(0, false, 0)
      return () => window.removeEventListener('resize', resize)
    }

    last = performance.now()
    frame = window.requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('resize', resize)
      window.cancelAnimationFrame(frame)
    }
  }, [])
}
