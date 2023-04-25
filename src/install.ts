import { printBadge, printBadges } from "./index"

declare global {
  interface Console {
    badge(label: string, message: string, color?: string): void
    badges(...args: [label: string, message: string, color?: string][]): void
  }
}

Object.defineProperty(console, "badge", {
  get: () => printBadge.bind(console),
})

Object.defineProperty(console, "badges", {
  get: () => printBadges.bind(console),
})
