export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  backgrounds: {
    default: 'default',
    values: [
      {
        name: 'default',
        value: '#f5f5f5'
      },
      {
        name: 'facebook',
        value: '#3b5998'
      }
    ]
  }
}
