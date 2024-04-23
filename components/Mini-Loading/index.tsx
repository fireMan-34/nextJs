export default function MiniLoading({ hidden }: { hidden: boolean }) {
  return (
    <div className={"flex justify-center items-center" + (hidden ? ' invisible': '')}>
      <div
        className="
      w-8 h-8 box-border bg-white border-white rounded-full relative animate-spin
      after:contents-[''] after:absolute after:w-6 after:h-6 after:bg-gray-950 after:-right-2 after:-top-2
      "
      ></div>
    </div>
  );
}
