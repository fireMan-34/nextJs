"use client";
import MiniLoading from "@/components/Mini-Loading";
import { useFirstCountCount } from "@/hooks/useFirstCountCount";

// 每一次页面 hard route 的时候会更新，一般用于用户级别更新
function AboutTemplate({ children }: { children: React.ReactNode }) {
  const { count, isCountFinish } = useFirstCountCount(3);

  return (
    <div className="mx-auto w-screen max-w-screen-xl">
      <h2 className="flex justify-center items-center gap-8 font-extrabold text-5xl">
        Tempalte Load: {count}
        <MiniLoading hidden={isCountFinish} />
      </h2>
      {children}
    </div>
  );
}

export default AboutTemplate;
