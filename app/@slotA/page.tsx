import Link from "next/link";

interface NavItem {
  text: string;
  href: string;
}

const navs: NavItem[] = [
  { text: "首頁", href: "/" },
  { text: "关于", href: "/about" },
  { text: "道具", href: "/items" },
  { text: "任務", href: "/" },
  { text: "用戶", href: "/user" },
  { text: "mod", href: "/" },
];

export default function SlotA({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed bottom-0 w-full h-8 flex gap-2 items-center text-white z-20 scroll-auto overflow-auto text-center border-teal-100 border-t shadow-sm shadow-pink-50">
      {navs.map((navItem) => (
        <Link key={navItem.href + navItem.text} className="basis-16 flex-shrink-0" href={navItem.href}>{navItem.text}</Link>
      ))}
    </div>
  );
}
