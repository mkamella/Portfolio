import '@testing-library/jest-dom'

// Mock IntersectionObserver for framer-motion whileInView
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
} as unknown as typeof IntersectionObserver
