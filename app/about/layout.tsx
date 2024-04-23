import Link from "next/link";

let renderCount = 0;
/** 模板只会调用一次相对于调用者 */
export default async function ({
  children,
  ...props
}: {
  children: React.ReactNode;
  [props: string]: any;
}) {
  await new Promise((resolve) => {
    setTimeout(() => {
      renderCount++;
      resolve(null);
    });
  });

  return (
    <div>
      <h2>About Layout</h2>
      <div className="w-full">
        <nav className="flex justify-center w-full gap-8">
          <Link href={"/about"} className="hover:text-yellow-500">
            主页
          </Link>
          <Link href={"/about/detail"} className="hover:text-yellow-500">
            详情
          </Link>
          <span>Layout run Count: <b>{renderCount}</b></span>
        </nav>
      </div>
      {children}
    </div>
  );
}
