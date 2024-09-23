// const MillionLint = require('@million/lint');

const isProduction = process.env.NODE_ENV === 'production';

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: !isProduction,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withBundleAnalyzer(
  withPWA({
    ...nextConfig,
  }),
);

// Ativar caso deseje utilizar o linter million.

// module.exports = MillionLint.next({
//   rsc: true,
// })(
//   withBundleAnalyzer(
//     withPWA({
//       ...nextConfig,
//     }),
//   ),
// );
