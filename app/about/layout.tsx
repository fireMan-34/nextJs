'use client';
import { Route } from "next";
import Link from "next/link";
import MiniLoading from "@/components/Mini-Loading";
import { useFirstCountCount } from "@/hooks/useFirstCountCount";

/** 模板只会调用一次相对于调用者 */
export default  function Layout ({
  children,
  simple,
}: {
  children: React.ReactNode;
  simple: React.ReactNode;
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
          <Link href={"/about/detail" as Route} className="hover:text-yellow-500">
            详情
          </Link>
          <span>Layout run Count:{count}</span>
          <MiniLoading hidden={isCountFinish} />
        </nav>
      </div>
      {simple}
      {children}
    </div>
  );
}
