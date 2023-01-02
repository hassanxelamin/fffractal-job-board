module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-next',
    'storybook-addon-next-router',
  ],
  framework: '@storybook/react',
  core: {
    builder: {
      name: '@storybook/builder-webpack5',
      options: {
        lazyCompilation: true,
      },
    },
  },
  features: {
    interactionsDebugger: true,
  },
  staticDirs: ['../public'],
};
