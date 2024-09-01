"use client"
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {} & React.ComponentProps<typeof Link>;

const NavLink = (props: Props) => {
  const { className, children, ...rest } = props;
  const pathname = usePathname();
  return (
    <Link
      className={clsx("text-slate-500 hover:text-slate-700 font-medium", className )}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default NavLink;
