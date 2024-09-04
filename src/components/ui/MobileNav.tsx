"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { nav_links } from "../../constants/navigation";
import { MotionButton, MotionDiv } from "../framer_motion/MotionElements";

type Props = {};

const sidebar = {
  open: (height = 600) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 32px) 32px)`,
    backgroundColor: "#334155",
    transition: {
      type: "spring",
      stiffness: 30,
      restDelta: 6,
    },
  }),
  closed: {
    clipPath: "circle(24px at calc(100% - 32px) 32px)",
    backgroundColor: "#cbd5e1",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const MobileNav = (props: Props) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  return (
    <MotionDiv
      initial={false}
      animate={open ? sidebar.open() : sidebar.closed}
      className="absolute right-0 top-0 h-screen w-full md:hidden"
    >
      <div className="gird h-16 grid-flow-col items-center p-4">
        <div className="">
          <p className={`text-2xl font-semibold text-white`}>deva.</p>
        </div>
        <MotionButton
          whileTap={{ scale: 0.9 }}
          initial={{
            color: "#475569",
          }}
          animate={{
            color: open ? "#fff" : "#475569",
            transition: { duration: 0.5 },
          }}
          onClick={() => setOpen(!open)}
          className="absolute right-5 top-5 text-slate-600"
        >
          {open? <HiXMark strokeWidth={0.5} size={24} /> :<HiBars3 strokeWidth={0.5} size={24} />}
        </MotionButton>
      </div>
      <div className="grid h-[calc(100vh-4rem)] grid-rows-[1fr_auto] p-4">
        <div className="mr-4 mt-6 grid h-fit gap-8">
          {nav_links.map((link) => (
            <MotionButton
              key={link.name}
              onClick={() => {
                router.push(link.path);
                setOpen(false);
              }}
              className="text-end text-4xl font-semibold text-slate-400"
            >
              {link.name}
            </MotionButton>
          ))}
        </div>
        <div className="p-4">
          <p className="text-center text-xs text-slate-400">
            Copyright © {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </MotionDiv>
  );
};

export default MobileNav;
