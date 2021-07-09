'use strict'

function colorSchemeChange (onChange) {
  if (window === undefined || !window || typeof(window) === undefined) {
    const context = global
  } else {
    const context = window
  }
  const media = context.matchMedia('(prefers-color-scheme: dark)')
  handleChange()

  if ('addEventListener' in media) media.addEventListener('change', handleChange)
  else if ('addListener' in media) media.addListener(handleChange)

  return remove

  function handleChange () {
    onChange(media.matches ? 'dark' : 'light')
  }

  function remove () {
    if ('removeEventListener' in media) media.removeEventListener('change', handleChange)
    else if ('removeListener' in media) media.removeListener(handleChange)
    onChange = null
  }
}

module.exports = colorSchemeChange
