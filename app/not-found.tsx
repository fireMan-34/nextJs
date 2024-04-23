"use client";
// 页面路由
import { useRouter } from "next/router";
import {
  usePathname,
  useParams,
  // 仅用于客户端
  useRouter as useNavRouter,
  useSearchParams,
  useSelectedLayoutSegment,
  // useSelectedLayoutSegments,
  // useServerInsertedHTML,
} from "next/navigation";

export default function NotFoundPage() {
  // const {} = useRouter();
  const {} = useNavRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = useParams();

  return <main> 
    <dl className="text-center">
      <dt>当前路径</dt>
      <dd>{pathname}</dd>
      <dt>查询参数</dt>
      <dd>{searchParams && JSON.stringify(searchParams, null, 2)}</dd>
      <dt>参数</dt>
      <dd>{params && JSON.stringify(params, null, 2)}</dd>
    </dl>
    <h1 className="text-center text-red-500 text-8xl font-bold">
      404
    </h1>
  </main>;
}
