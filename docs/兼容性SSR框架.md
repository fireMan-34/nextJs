# 兼容性下限
1. 旧官网兼容版本
  从首页大体布局在 IE9+
2. React  最低兼容 IE9+
3. 新官网兼容版本 IE11+
   1. CSS
      1. object-fit
   2. JS
      1. es5 可支持
      2. react （待定）
4. 工程化兼容性方案
   1. browerslist 
      1.  https://www.npmjs.com/package/browserslist 
      2.  https://www.jianshu.com/p/91157aa64244
      3.  https://browsersl.ist/
      4.  搭配babel转义代码，将老浏览器不支持的新API转义为可运行代码（polyfill）
      5.  搭配Autoprefixer编译CSS代码，自动添加浏览器前缀
   2. postcss-preset-env
      1. https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env
      2. autoprefixer 
         1. https://github.com/postcss/autoprefixer
   3. stylelint (开发工具 CSS 自省) 开发层面约束大于工具层面静默转换
      1. https://github.com/RJWadley/stylelint-no-unsupported-browser-features
   4. eslint (开发工具 JS 自省)
      1. https://github.com/amilajack/eslint-plugin-compat