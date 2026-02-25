"use client";

import { CirclePlus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  if (
    pathname.endsWith("/add") ||
    pathname.endsWith("/edit") ||
    pathname.endsWith("/view-details")
  ) {
    return null;
  }

  return (
    <header className="lg:px-4 mb-2">
      <div className="flex lg:px-15 justify-between">
        <div>
          <h1 className="font-medium text-4xl">My Task</h1>
        </div>
        <div className="flex">
          <Link href={"/add"} className="self-center">
            <CirclePlus size={30} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
