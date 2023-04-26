import { badge, badges } from "./core"

declare global {
  interface Console {
    badge(label: string, message: string, color?: string): void
    badges(...args: [label: string, message: string, color?: string][]): void
  }
}

Object.defineProperty(console, "badge", {
  get: () => badge.bind(console),
})

Object.defineProperty(console, "badges", {
  get: () => badges.bind(console),
})
