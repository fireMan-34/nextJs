import { NextRequest, NextResponse } from 'next/server';

export default function (request: NextRequest, response?: NextResponse|void) {
  if (request.url) {
    console.log('路由地址', request.url, '#fff');
  }
}