import { useState, useEffect } from "react"

export default (ref, threshold = 0.25) => {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const element = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold,
      }
    )
    if (element) {
      setTimeout(() => observer.observe(element), 3500)
    }
    return () => {
      observer.unobserve(element)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, threshold])
  return isIntersecting
}
