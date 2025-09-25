import globals from 'globals'

import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'

import pluginReact from 'eslint-plugin-react'
import { defineConfig } from 'eslint/config'

export default defineConfig([
    {
        files: ['**/*.{js,jsx,ts,tsx}'],

        plugins: {
            '@typescript-eslint': tsPlugin,
            react: pluginReact,
        },
        languageOptions: {
            parser: tsParser,
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        rules: {
            // TypeScript recommended rules
            ...tsPlugin.configs.recommended.rules,

            // React recommended rules
            ...pluginReact.configs.recommended.rules,

            // Example custom rules (optional)
            'no-console': 'warn',
            'react/react-in-jsx-scope': 'off', // Not needed with React 17+
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
])
