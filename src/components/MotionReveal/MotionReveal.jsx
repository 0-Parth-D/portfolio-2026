import { useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
}

export function MotionReveal({ children, className, as = 'div', delay = 0 }) {
  const prefersReducedMotion = useReducedMotion()
  const ref = useRef(null)
  const Component = motion[as] || motion.div

  if (prefersReducedMotion) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <Component
      ref={ref}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={containerVariants}
      transition={{ delay }}
    >
      {children}
    </Component>
  )
}

export function MotionItem({ children, className, as = 'div', style }) {
  const prefersReducedMotion = useReducedMotion()
  const Component = motion[as] || motion.div

  if (prefersReducedMotion) {
    const Tag = as
    return (
      <Tag className={className} style={style}>
        {children}
      </Tag>
    )
  }

  return (
    <Component className={className} style={style} variants={itemVariants}>
      {children}
    </Component>
  )
}
