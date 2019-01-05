const path = require('path')

module.exports = {
  propsParser: require('react-docgen-typescript').parse,
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'styleguide/Wrapper')
  },
  sections: [
    {
      name: 'Introduction',
      content: 'doc/intro.md',
    },
    {
      name: 'Usage',
      content: 'doc/usage.md',
    },
    {
      name: 'Components',
      description: 'All of the components',
      sections: [
        {
          name: 'Buttons',
          components: 'src/buttons/**/*.tsx',
        },
        {
          name: 'Inputs',
          components: 'src/inputs/**/*.tsx',
        },
      ],
      exampleMode: 'expand',
      usageMode: 'expand',
    },
  ],
}
