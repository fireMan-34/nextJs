/**
 * @fileoverview  Next.js request middleware
 * 1. Authentication and Authorization 可信授权验证
 * 2. Server-Side Redirects 服务端重定向
 * 3. Path Rewriting 路径重定向
 * 4. Bot Detection 阻止恶意请求
 * 5. Feature Flagging 功能标记
 * **Match Route**
 * 1. next.config.js headers
 * 2. next.config.js redirects
 * 3. middleware  (rewrites, redirects)
 * 4. next.config.js beforeFiles (rewrites)
 * 5. filesytem routes( public, _next/static, pages, app, etc )
 * 6. next.config.js afterfiles (rewrites)
 * 7. dynamic routes (/blog/[slug])
 * 8. next.config.js fallback (rewrites)
 *
 */

import { NextRequest, NextResponse } from "next/server";
import logMiddleware from "@/middlewares/log";

export async function middleware(request: NextRequest) {
  const middlewares = [logMiddleware];
  let res: NextResponse | void = void 0;
  for await (const ware of middlewares) {
    res = await ware(request, res);
  }

  // 条件语句
  if (request.url.includes('/about')) {
    console.log('你竟然访问这个路由，太热了。');
  }

  return res;
}

/**
 * @link {https://nextjs.org/docs/app/building-your-application/routing/middleware}
 */
export const config = {
  matcher: [
    // '/about/:path*',
    // '/((?!api|_next/static|_next/image|favicon.ico).*)',
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
      has: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },

    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
      has: [{ type: "header", key: "x-present" }],
      missing: [{ type: "header", key: "x-missing", value: "prefetch" }],
    },
  ],
};
