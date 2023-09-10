import constate from 'constate'
import { useMemo, useState, useCallback } from 'react'
import { theme as defaultTheme, darkTheme } from '../../stitches.config'

function useLayout() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const html = document.querySelector('html')

  const applyColorMode = useCallback(
    (newMode: string) => {
      const availableThemes: Record<string, string> = {
        dark: darkTheme.className,
        light: defaultTheme.toString(), // How to be consistent?
      }
      html.className = availableThemes[newMode]
      html.setAttribute('data-color-mode', newMode)
    },
    [html],
  )

  const changeTheme = useCallback(() => {
    if (theme === 'light') {
      setTheme('dark')
      applyColorMode('dark')

      return
    }

    if (theme === 'dark') {
      setTheme('light')
      applyColorMode('light')
    }
  }, [applyColorMode, theme])

  return useMemo(
    () => ({
      changeTheme,
      theme,
    }),
    [changeTheme, theme],
  )
}

export const [LayoutProvider, useLayoutContext] = constate(useLayout)
