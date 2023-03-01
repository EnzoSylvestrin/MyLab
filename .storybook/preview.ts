import type { Preview } from "@storybook/react";

import '../src/styles/globals.css';

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
      darkClass: ['dark', 'darkbg'],
      lightClass: 'lightbg',
      stylePreview: true,
    },
  },
};

export default preview;
