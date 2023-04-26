const commonStyles = `font-family:Verdana,Geneva,DejaVu Sans,sans-serif;font-size:11px;line-height:12px;color:#fff;text-shadow:0 1px rgba(1,1,1,.3)`
const labelStyles = `${commonStyles};border-radius:3px 0 0 3px;padding:4px 4px 4px 6px;background:linear-gradient(180deg,#5F5F5F,#4D4D4D)`
const messageStyles = `${commonStyles};border-radius: 0 3px 3px 0;padding:4px 6px 4px`
const clearStyles = `background:unset;border-radius:unset;padding:unset`

const createGradientStyles = (color: string) =>
  `background:linear-gradient(180deg,${lightened(color)},${shaded(color)}`

/**
 * Add rgba(0, 0, 0, .1) to color
 *
 * @see https://poe.com/s/uZHSsLBVxxPXwMMTd0FD
 */
function shaded(hexColor: string) {
  const [r, g, b] = hex2Rgb(hexColor)

  const resultR = Math.round(0.9 * r)
  const resultG = Math.round(0.9 * g)
  const resultB = Math.round(0.9 * b)

  return `rgb(${resultR},${resultG},${resultB})`
}
/**
 * Add rgba(187, 187, 187, .1) to color
 *
 * @see https://poe.com/s/uZHSsLBVxxPXwMMTd0FD
 */
function lightened(hexColor: string) {
  const [r, g, b] = hex2Rgb(hexColor)

  const resultR = Math.round(0.9 * r + 18.7)
  const resultG = Math.round(0.9 * g + 18.7)
  const resultB = Math.round(0.9 * b + 18.7)

  return `rgb(${resultR},${resultG},${resultB})`
}

/**
 * Thanks, GitHub Copilot!
 */
function hex2Rgb(hex: string): [r: number, g: number, b: number] {
  const [r, g, b] = hex.match(/[0-9a-f]{2}/gi)!.map((hex) => parseInt(hex, 16))
  return [r, g, b]
}

export function badge(
  this: Console,
  label: string,
  message: string,
  color = "#97ca00",
) {
  this.log(
    "\n" + "%c" + label + "%c" + message + "%c" + "\n",
    labelStyles,
    `${messageStyles};${createGradientStyles(color)}`,
    clearStyles,
  )
}

export function badges(
  this: Console,
  ...badges: readonly [label: string, message: string, color?: string][]
) {
  const logArgs = [
    "\n" +
      badges
        .map(([label, message]) => "%c" + label + "%c" + message)
        .join("%c ") +
      "%c\n",
  ]

  for (const badge of badges) {
    const color = badge[2] ?? "#97ca00"

    logArgs.push(
      labelStyles,
      `${messageStyles};${createGradientStyles(color)}`,
      clearStyles,
    )
  }
  this.log(...logArgs)
}
