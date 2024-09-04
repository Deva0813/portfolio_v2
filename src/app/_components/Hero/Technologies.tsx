import { technologies } from "@/constants/images";
import Image from "next/image";

type Props = {};

const Technologies = (props: Props) => {
  return (
    <div className="mt-2 flex w-fit flex-wrap items-center gap-3">
      <Image alt="react" src={technologies.reactjs} width={32} height={32} />
      <Image alt="nextjs" src={technologies.nextjs} width={32} height={32} />
      <Image
        alt="tailwind"
        src={technologies.tailwind}
        width={32}
        height={32}
      />
      <Image
        alt="typescript"
        src={technologies.typescript}
        width={32}
        height={32}
      />
      <Image alt="nodejs" src={technologies.nodejs} width={28} height={28} />
      <Image
        alt="mongodb"
        src={technologies.mongodb}
        width={30}
        height={30}
        className="rounded-full"
      />
      <Image alt="java" src={technologies.java} width={34} height={34} />
    </div>
  );
};

export default Technologies;
