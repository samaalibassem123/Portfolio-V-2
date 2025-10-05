import PageTitle from "../ui/PageTitle";
import Title from "../ui/Title";

export default function ExperienceSection() {
  return (
    <div className=" h-fit relative pb-10 z-10 ">
      <PageTitle>Experience</PageTitle>
      <div className=" flex sm:flex-row flex-col items-center  w-full z-10 text-black px-7 ">
        {/*Left side */}
        <div className=" flex sm:flex-1  flex-col gap-7 bg-white">
          <Title className=" font-manrope font-bold">
            <a
              href="https://www.addinn-group.com/"
              target="_blank"
              className=" hover:underline transition-all motion-translate-x-in-[-5%] motion-translate-y-in-[0%] motion-opacity-in-[0%] motion-blur-in-[5px] motion-ease-spring-smooth motion-delay-1500"
            >
              Addinn,
            </a>
            <br />
            <span className="motion-translate-x-in-[-5%] motion-translate-y-in-[0%] motion-opacity-in-[0%] motion-blur-in-[5px] motion-ease-spring-smooth motion-delay-1600">
              Angular developer
            </span>
          </Title>
          <span className=" text-sm font-manrope motion-translate-x-in-[-5%] motion-translate-y-in-[0%] motion-opacity-in-[0%] motion-blur-in-[5px] motion-ease-spring-smooth motion-delay-1600">
            Tunis, Northern Urban Centre <br /> July 2025 – Aug 2025 (2 Months)
          </span>
        </div>
        {/*Right side */}
        <div className=" sm:flex-1 p-2 bg-white motion-translate-x-in-[-5%] motion-translate-y-in-[0%] motion-opacity-in-[0%] motion-blur-in-[5px] motion-ease-spring-smooth motion-delay-1700">
          <ul className=" list-disc font-manrope space-y-3 text-lg/8 tracking-wide">
            <li>
              Built and enhanced user interfaces using{" "}
              <span className=" bg-black text-white font-extrabold underline">
                Angular 19
              </span>{" "}
              , leveraging{" "}
              <span className=" bg-black text-white font-extrabold underline">
                PrimeNG
              </span>{" "}
              components to create responsive and accessible UI elements.
            </li>
            <li>
              Styled applications with{" "}
              <span className=" bg-black text-white font-extrabold underline">
                TailwindCSS
              </span>{" "}
              for efficient and modern design implementation.
            </li>
            <li>
              Managed asynchronous data streams and state using{" "}
              <span className=" bg-black text-white font-extrabold underline">
                RxJS
              </span>{" "}
              to ensure smooth and reactive user experiences.
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[1px] h-[100px] bg-black mx-7  top-10 sm:rotate-0  rotate-90"></div>
      <div className=" flex sm:flex-row flex-col items-center  w-full z-10 text-black px-7   ">
        {/*Left side */}
        <div className=" flex flex-1  flex-col gap-7 bg-white">
          <Title className=" font-manrope font-bold">
            <a
              href="https://www.visionage-vfx.com/"
              target="_blank"
              className=" hover:underline transition-all motion-translate-x-in-[-5%] motion-translate-y-in-[0%] motion-opacity-in-[0%] motion-blur-in-[5px] motion-ease-spring-smooth motion-delay-1500"
            >
              Vision Age VFX,
            </a>
            <br />
            <span className="motion-translate-x-in-[-5%] motion-translate-y-in-[0%] motion-opacity-in-[0%] motion-blur-in-[5px] motion-ease-spring-smooth motion-delay-1600">
              React developer
            </span>
          </Title>
          <span className=" text-sm font-manrope motion-translate-x-in-[-5%] motion-translate-y-in-[0%] motion-opacity-in-[0%] motion-blur-in-[5px] motion-ease-spring-smooth motion-delay-1600">
            Remote <br /> Sept 2025 – Nov 2025 (2 Months)
          </span>
        </div>
        {/*Right side */}
        <div className=" flex-1 p-2 bg-white motion-translate-x-in-[-5%] motion-translate-y-in-[0%] motion-opacity-in-[0%] motion-blur-in-[5px] motion-ease-spring-smooth motion-delay-1700 ">
          <ul className=" list-disc font-manrope space-y-3 text-lg/8 tracking-wide">
            <li>
              Developed a professional networking web application inspired by
              LinkedIn using{" "}
              <span className=" bg-black text-white font-extrabold underline">
                React
              </span>
              {" ,"}
              <span className=" bg-black text-white font-extrabold underline">
                shadcn/ui
              </span>
              {" and"}
              <span className=" bg-black text-white font-extrabold underline">
                TailwindCSS
              </span>{" "}
            </li>
            <li>
              Implemented global state management with{" "}
              <span className=" bg-black text-white font-extrabold underline">
                Zustand
              </span>{" "}
              to ensure efficient data flow and scalability.{" "}
            </li>
            <li>
              Converted{" "}
              <span className=" bg-black text-white font-extrabold underline">
                Figma designs
              </span>{" "}
              into responsive, pixel-perfect user interfaces.
            </li>
            <li>
              Applied modern{" "}
              <span className=" bg-black text-white font-extrabold underline">
                UX/UI practices
              </span>{" "}
              and contributed to building a scalable front-end architecture.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
