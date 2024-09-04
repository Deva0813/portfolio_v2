import CTAButton from "@/components/ui/CTAButton";
import { poppins } from "@/fonts/inbuild";
import clsx from "clsx";
import Image from "next/image";
import Technologies from "./Technologies";

type Props = {};

const HeroMain = (props: Props) => {
  return (
    <section id="home" className="scroll-mt-16">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] 2xl:container md:grid-cols-2">
        <div
          className={clsx("grid place-content-center p-5", poppins.className)}
        >
          <p className="text-2xl font-semibold text-gray-800">
            Hi there, I&apos;m
          </p>
          <h1 className="mt-1 text-4xl font-bold text-gray-700">Devanand, </h1>
          <p className="mt-2 bg-gradient-to-r from-sky-500 from-[40%] to-blue-800 bg-clip-text text-2xl font-bold text-gray-900 text-transparent">
            <span className="text-slate-600">I&apos;m a</span> Full Stack
            Developer
          </p>
          <p className="bg-gradient-linear-2 mt-3 bg-clip-text pb-2 text-4xl font-bold text-transparent md:text-5xl md:leading-[3.5rem]">
            Crafting Code, <br />{" "}
            <span className="max-md:text-3xl">Shaping Experiences</span>
          </p>
          {/* <p className={`prose mt-2 text-sm leading-5 text-gray-600 md:max-w-lg ${work_sans.className}`}>
            Explore my portfolio of innovative web solutions. From sleek
            interfaces to powerful back-end systems, each project is a blend of
            creativity and technical skill.
          </p> */}
          <div className="mt-4">
            <p className="text-sm font-medium text-slate-700">Tech Stack:</p>
            <Technologies />
          </div>
          <CTAButton classNames="mt-8" />
        </div>
        <div className="grid place-content-center">
          <Image
            src={"/images/homePic.png"}
            alt="Picture of the author"
            width={308 * 0.85}
            height={656 * 0.85}
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroMain;
