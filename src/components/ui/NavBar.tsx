import { poppins } from "@/fonts/inbuild";
import Link from "next/link";
import { nav_links } from "../../constants/navigation";
import MobileNav from "./MobileNav";
import NavLink from "./NavLink";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav className={`sticky left-0 top-0 bg-white/70 backdrop-blur-md ${poppins.className}`}>
      <div className="mx-auto grid h-16 grid-flow-col items-center justify-between gap-4 px-4 py-2 2xl:container">
        <div className="">
          <Link href="/" className={`text-2xl font-bold text-slate-800`}>deva.</Link>
        </div>
        <div className="grid grid-flow-col gap-8 max-md:hidden">
          <div className="space-x-6">
            {nav_links.map((link) => (
              <NavLink href={link.path} key={link.path}>
                {link.name}
              </NavLink>
            ))}
          </div>
          <div className="">
            <Link
              href="/"
              className="rounded-full bg-blue-500 px-4 py-1.5 text-white hover:bg-blue-600"
            >
              Resume
            </Link>
          </div>
        </div>
        <MobileNav />
      </div>
    </nav>
  );
};

export default NavBar;
