"use client";
// 客户端只要声明，当前以及其子模块都会单独打包成一个 bundle 二进制页面

import { useEffect, useState } from "react";
import GetFileInfo from '@/actions/getFileInfo';
import UseComChild from "./useComChild";

export default function useCom() {
  const [c, setC] = useState(0);
  
  useEffect(() => {
    GetFileInfo().then(console.log);
  }, []);

  return (
    <div>
      <dl>
        <dt>使用 Counter 计数器</dt>
        <dd>count: {c}</dd>
        <dd onClick={() => setC(c + 1)}>+</dd>
      </dl>
      <UseComChild />
    </div>
  );
}
