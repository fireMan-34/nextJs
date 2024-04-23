import Link from "next/link";

let renderCount = 0;
/** 模板只会调用一次相对于调用者 */
export default function ({ children, ...props }: { children: React.ReactNode, [props: string]: any }) {
  renderCount+=1;
  return (
    <div>
      <h2>About Layout</h2>
      <div className="inline-flex gap-2">
          <Link href={"/about"}>
          <span className="hover:text-yellow-500">主页</span>
        </Link>
        <Link href={"/about/detail"}>
          <span className="hover:text-yellow-500">主页详情</span>
        </Link>
        <span className="text-red-500">count: {renderCount}</span>
      </div>
      {children}
    </div>
  );
}
