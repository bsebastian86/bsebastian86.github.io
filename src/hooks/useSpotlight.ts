import { useEffect } from 'react'

type Speck = {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  size: number
  hue: number
  spark: boolean
}

export function useSpotlight() {
  useEffect(() => {
    const canvas = document.querySelector<HTMLCanvasElement>('.cursor-field')
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const pointer = window.matchMedia('(pointer: fine)')

    if (!canvas || motion.matches || !pointer.matches) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const specks: Speck[] = []
    let frame = 0
    let lastX = 0
    let lastY = 0
    let lastSpawn = 0
    let hasPointer = false
    let ratio = 1

    const resize = () => {
      ratio = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(window.innerWidth * ratio)
      canvas.height = Math.floor(window.innerHeight * ratio)
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
    }

    const spawn = (x: number, y: number, moving: boolean) => {
      const spread = moving ? 16 : 11
      specks.push({
        x: x + (Math.random() - 0.5) * spread,
        y: y + (Math.random() - 0.5) * spread,
        vx: (Math.random() - 0.5) * (moving ? 0.95 : 0.4),
        vy: moving ? 0.25 + Math.random() * 0.75 : (Math.random() - 0.6) * 0.45,
        life: 1,
        maxLife: moving ? 0.85 + Math.random() * 0.55 : 0.95 + Math.random() * 0.55,
        size: 0.6 + Math.random() * 1.8,
        hue: 210 + Math.random() * 30,
        spark: Math.random() > 0.62,
      })
    }

    const onMove = (event: MouseEvent) => {
      const dx = event.clientX - lastX
      const dy = event.clientY - lastY
      const distance = Math.hypot(dx, dy)
      lastX = event.clientX
      lastY = event.clientY
      hasPointer = true

      const now = performance.now()
      if (distance < 4 && now - lastSpawn < 24) return
      lastSpawn = now

      const count = distance > 22 ? 4 : distance > 10 ? 3 : 2
      for (let i = 0; i < count; i += 1) {
        spawn(event.clientX, event.clientY, true)
      }

      if (specks.length > 90) specks.splice(0, specks.length - 90)
    }

    const tick = () => {
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      const now = performance.now()
      if (hasPointer && now - lastSpawn > 70) {
        lastSpawn = now
        spawn(lastX, lastY, false)
        if (specks.length > 90) specks.splice(0, specks.length - 90)
      }

      for (let i = specks.length - 1; i >= 0; i -= 1) {
        const speck = specks[i]
        speck.life -= 0.016 / speck.maxLife
        speck.x += speck.vx
        speck.y += speck.vy
        speck.vx *= 0.98
        speck.vy += 0.01

        if (speck.life <= 0) {
          specks.splice(i, 1)
          continue
        }

        const alpha = Math.max(0, speck.life) * 0.7
        ctx.beginPath()
        ctx.arc(speck.x, speck.y, speck.size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${speck.hue}, 80%, ${72 + speck.size * 8}%, ${alpha})`
        ctx.fill()

        if (speck.spark) {
          const arm = 1.6 + speck.size * 1.8
          ctx.strokeStyle = `hsla(${speck.hue}, 90%, 88%, ${alpha * 0.65})`
          ctx.lineWidth = 0.6
          ctx.beginPath()
          ctx.moveTo(speck.x - arm, speck.y)
          ctx.lineTo(speck.x + arm, speck.y)
          ctx.moveTo(speck.x, speck.y - arm)
          ctx.lineTo(speck.x, speck.y + arm)
          ctx.stroke()
        }
      }

      frame = window.requestAnimationFrame(tick)
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMove)
    frame = window.requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      window.cancelAnimationFrame(frame)
    }
  }, [])
}
