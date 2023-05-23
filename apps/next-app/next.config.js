const removeImports = require('next-remove-imports')();

module.exports = removeImports({
  reactStrictMode: true,
  transpilePackages: ['chanoo-ui', 'react-markdown', '@uiw'],
  experimental: {
    esmExternals: 'loose'
  }
});
