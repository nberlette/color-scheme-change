#!/usr/bin/env node
const { colorSchemeChange } = require('@nberlette/color-scheme-change')
colorSchemeChange(colorScheme => {
  console.log(`Detected color scheme: ${colorScheme}`)
  // now maybe apply some CSS changes...
})