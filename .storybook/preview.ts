import '../src/styles/globals.css';

import type { Preview } from "@storybook/react";

import { ThemedDocsContainer } from "./DocsContainer";

const preview: Preview = {
  parameters: {
    backgrounds: {
      disable: true
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    darkMode: {
      current: 'dark',
      darkClass: ['dark', 'darkbg'],
      lightClass: 'lightbg',
      stylePreview: true,
    },
    docs: {
      container: ThemedDocsContainer,
    },
  },
};

export default preview;