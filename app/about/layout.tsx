'use client';
import MiniLoading from "@/components/Mini-Loading";
import { useFirstCountCount } from "@/hooks/useFirstCountCount";
import Link from "next/link";

/** 模板只会调用一次相对于调用者 */
export default  function ({
  children,
  ...props
}: {
  children: React.ReactNode;
  [props: string]: any;
}) {
  const { count, isCountFinish } = useFirstCountCount(3);

  return (
    <div>
      <h2>About Layout</h2>
      <div className="w-full">
        <nav className="flex justify-center items-center w-full gap-8 h-12">
          <Link href={"/about"} className="hover:text-yellow-500">
            主页
          </Link>
          <Link href={"/about/detail"} className="hover:text-yellow-500">
            详情
          </Link>
          <span>Layout run Count:{count}</span>
          <MiniLoading hidden={isCountFinish} />
        </nav>
      </div>
      {children}
    </div>
  );
}
