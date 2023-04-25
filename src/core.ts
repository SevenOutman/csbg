export function badge(
  this: Console,
  label: string,
  message: string,
  color = "#97ca00",
) {
  this.log(
    "\n" + "%c" + label + "%c" + message + "%c" + "\n",
    "font-family:Verdana,Geneva,DejaVu Sans,sans-serif;font-size:11px;line-height:12px;color:#fff;text-shadow:0 1px rgba(1,1,1,.3);background: #555;border-top-left-radius:3px;border-bottom-left-radius:3px;padding:4px;padding-left:6px",
    `font-family:Verdana,Geneva,DejaVu Sans,sans-serif;font-size:11px;line-height:12px;color:#fff;text-shadow:0 1px rgba(1,1,1,.3);background: ${color};border-top-right-radius:3px;border-bottom-right-radius:3px;padding:4px;padding-right:6px`,
    "background:unset;border-radius:unset;padding:unset",
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
    logArgs.push(
      "font-family:Verdana,Geneva,DejaVu Sans,sans-serif;font-size:11px;line-height:12px;color:#fff;text-shadow:0 1px rgba(1,1,1,.3);background: #555;border-top-left-radius:3px;border-bottom-left-radius:3px;padding:4px;padding-left:6px",
      `font-family:Verdana,Geneva,DejaVu Sans,sans-serif;font-size:11px;line-height:12px;color:#fff;text-shadow:0 1px rgba(1,1,1,.3);background: ${
        badge[2] ?? "#97ca00"
      };border-top-right-radius:3px;border-bottom-right-radius:3px;padding:4px;padding-right:6px`,
      "background:unset;border-radius:unset;padding:unset",
    )
  }
  this.log(...logArgs)
}
