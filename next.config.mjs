/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // https://nextjs.org/docs/app/building-your-application/configuring/typescript#typescript-plugin
    typedRoutes: true,
    // 兼容 babel 模式异常
    // forceSwcTransforms: true,
  },
  /** https://github.com/martpie/next-transpile-modules/releases/tag/the-end */
  // next 模块无法进行转换存在异常 默认会确缺失 default 属性
  // transpilePackages: ['next'],
  /**
   * webpack 支持受限
   * https://github.com/vercel/next.js/issues/58905 问题 无法解决 在 IE 11 无法运行
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
  },
  compiler: {
  },
};

export default nextConfig;
