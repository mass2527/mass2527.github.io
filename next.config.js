/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: '@mdx-js/react',
  },
});

const nextConfig = withMDX({
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  pageExtensions: ['tsx', 'mdx'],
});

module.exports = nextConfig;
