import constate from 'constate';
import {useMemo, useState, useCallback, useEffect} from 'react';
import {theme as defaultTheme, darkTheme} from '../../stitches.config';

function useLayout() {
	const [theme, setTheme] = useState<'light' | 'dark'>('light');

	const available_themes: Record<string, string> = {
		dark: darkTheme.className,
		light: defaultTheme.toString(), // How to be consistent?
	};

	const html = document.querySelector('html');

	const applyColorMode = (newMode: string) => {
		html.className = available_themes[newMode];
		html.setAttribute('data-color-mode', newMode);
	};

	const changeTheme = useCallback(() => {
		if (theme === 'light') {
			setTheme('dark');
			applyColorMode('dark');

			return;
		}

		if (theme === 'dark') {
			setTheme('light');
			applyColorMode('light');
		}
	}, [theme]);

	return useMemo(
		() => ({
			changeTheme,
			theme,

		}),
		[changeTheme, theme],
	);
}

export const [LayoutProvider, useLayoutContext] = constate(useLayout);
