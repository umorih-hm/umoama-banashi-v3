import React from 'react';
import type { Preview } from '@storybook/react';
import '../app/globals.css';
import { NextUIProvider } from '@nextui-org/react';
import I18nProvider from 'next-translate/I18nProvider';
import common from '../locales/ja/common.json';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <NextUIProvider>
          <I18nProvider lang="ja" namespaces={{ common }}>
            <Story />
          </I18nProvider>
        </NextUIProvider>
      );
    },
  ],
};

export default preview;
