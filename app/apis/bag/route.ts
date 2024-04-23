import { NextRequest, NextResponse } from "next/server";

/**
 * 
 * @fileoverview [link](https://nextjs.org/docs/app/api-reference/file-conventions/route)
 */

// 自定义请求
export async function GET(request: Request) {
  return NextResponse.json({
    id: Date.now(),
    badge: '包名',
  });
}
