/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // https://nextjs.org/docs/app/building-your-application/configuring/typescript#typescript-plugin
    typedRoutes: true,
    forceSwcTransforms: true,
  },
  // 修复第三方兼容性问题，不过性能降低很厉害
  /** https://github.com/martpie/next-transpile-modules/releases/tag/the-end */
  transpilePackages: ['next'],
  /**
   * @link {https://nextjs.org/docs/pages/api-reference/next-config-js/webpack}
   * @param {*} config 
   * @param {*} param1 
   * @returns 
   */
  webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
    if (!isServer) {
      // https://github.com/vercel/next.js/issues/10440
      // 不完全修复 IE 11 以上任存在不可识别转译问题，未测试是否存运行
      // config.target = [ 'web', 'es5', 'browserslist' ];
    }
    // config.devtool = "source-map";
    return config;
  }
};

export default nextConfig;
