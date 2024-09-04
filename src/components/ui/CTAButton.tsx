import clsx from "clsx";
import Link from "next/link";
import { HiMiniArrowRightCircle } from "react-icons/hi2";

type Props = {
  classNames?: string;
};

const CTAButton = ({ classNames }: Props) => {
  return (
    <Link
      href="/#contact"
      className={clsx(
        "group flex w-fit items-center gap-2 rounded-full bg-blue-500 py-1 pl-4 pr-1 text-white outline-none hover:bg-blue-600",
        classNames,
      )}
    >
      Contact Me{" "}
      <HiMiniArrowRightCircle
        size={28}
        className="transition-transform group-hover:-rotate-45"
      />
    </Link>
  );
};

export default CTAButton;
