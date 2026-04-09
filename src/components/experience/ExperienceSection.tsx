import PageTitle from "../ui/PageTitle";
import Title from "../ui/Title";

export default function ExperienceSection() {
  return (
    <div className=" h-fit relative pb-10 will-change-[transform,filter] backface-hidden">
      <PageTitle>Experience</PageTitle>

      {/* OneTech Business Solutions */}
      <div className=" flex z-30 sm:flex-row flex-col items-center  w-full  text-black px-7 ">
        {/*Left side */}
        <div className=" flex sm:flex-1  flex-col gap-7 bg-white">
          <Title className=" font-manrope font-bold">
            <a
              href="https://onetechbusinesssolutions.com/"
              target="_blank"
              className=" hover:underline  motion-translate-x-in-[-5%] motion-translate-y-in-[0%]  motion-blur-in-[5px] motion-blur-out-0 motion-ease-spring-smooth motion-delay-1500 will-change-[transform,filter] backface-hidden translate-z-0 "
            >
              OneTech Business Solutions,
            </a>
            <br />
            <span className="motion-translate-x-in-[-5%] motion-translate-y-in-[0%]  motion-blur-in-[5px] motion-ease-spring-smooth motion-delay-1600 will-change-[transform,filter] backface-hidden translate-z-0">
              Full-Stack Developer Intern
            </span>
          </Title>
          <span className=" text-sm font-manrope motion-translate-x-in-[-5%] motion-translate-y-in-[0%]  motion-blur-in-[5px] motion-ease-spring-smooth motion-delay-1600 will-change-[transform,filter] backface-hidden translate-z-0">
            Tunis, Tunisia (Hybrid) <br /> Feb 2026 – May 2026 (4 Months)
          </span>
        </div>
        {/*Right side */}
        <div className=" sm:flex-1 p-2 bg-white motion-translate-x-in-[-5%] motion-translate-y-in-[0%]  motion-blur-in-[5px] motion-ease-spring-smooth motion-delay-1700 will-change-[transform,filter] backface-hidden translate-z-0">
          <ul className=" list-disc font-manrope space-y-3 text-lg/8 tracking-wide">
            <li>
              Architected and deployed a full-stack platform with{" "}
              <span className=" bg-black text-white font-extrabold underline">
                React
              </span>
              ,{" "}
              <span className=" bg-black text-white font-extrabold underline">
                FastAPI
              </span>
              ,{" "}
              <span className=" bg-black text-white font-extrabold underline">
                Docker
              </span>
              ,{" "}
              <span className=" bg-black text-white font-extrabold underline">
                SQLAlchemy
              </span>
              , and{" "}
              <span className=" bg-black text-white font-extrabold underline">
                TanStack Query
              </span>
              , implementing a service-oriented architecture for modular
              deployment.
            </li>
            <li>
              Developed an AI HR assistant by integrating{" "}
              <span className=" bg-black text-white font-extrabold underline">
                LangChain
              </span>
              {" and "}
              <span className=" bg-black text-white font-extrabold underline">
                Ollama
              </span>{" "}
              for natural language processing and conversational analytics.
            </li>
            <li>
              Optimized backend performance by integrating workforce records
              from{" "}
              <span className=" bg-black text-white font-extrabold underline">
                BioTime
              </span>{" "}
              and{" "}
              <span className=" bg-black text-white font-extrabold underline">
                EasyProject
              </span>{" "}
              into a centralized PostgreSQL data layer.
            </li>
            <li>
              Delivered unified dashboards and reporting tables with effective
              data visualization for faster KPI tracking.
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[1px] h-[100px] bg-black mx-7  top-10 sm:rotate-0  rotate-90"></div>

      {/* Vision Age VFX */}
      <div className=" z-30 flex sm:flex-row flex-col items-center  w-full  text-black px-7    ">
        {/*Left side */}
        <div className=" flex flex-1  flex-col gap-7 bg-white">
          <Title className=" font-manrope font-bold">
            <a
              href="https://www.visionage-vfx.com/"
              target="_blank"
              className=" hover:underline  motion-translate-x-in-[-5%] motion-translate-y-in-[0%]  motion-blur-in-[5px] motion-ease-spring-smooth motion-delay-1500 will-change-[transform,filter] backface-hidden translate-z-0"
            >
              Vision Age VFX,
            </a>
            <br />
            <span className="motion-translate-x-in-[-5%] motion-translate-y-in-[0%]  motion-blur-in-[5px] motion-ease-spring-smooth motion-delay-1600 will-change-[transform,filter] backface-hidden translate-z-0">
              Full-Stack Developer Intern
            </span>
          </Title>
          <span className=" text-sm font-manrope motion-translate-x-in-[-5%] motion-translate-y-in-[0%]  motion-blur-in-[5px] motion-ease-spring-smooth motion-delay-1600 will-change-[transform,filter] backface-hidden translate-z-0">
            Remote <br /> Sept 2025 – Feb 2026 (6 Months)
          </span>
        </div>
        {/*Right side */}
        <div className=" flex-1 p-2 bg-white motion-translate-x-in-[-5%] motion-translate-y-in-[0%]  motion-blur-in-[5px] motion-ease-spring-smooth motion-delay-1700 will-change-[transform,filter] backface-hidden translate-z-0">
          <ul className=" list-disc font-manrope space-y-3 text-lg/8 tracking-wide">
            <li>
              Launched a marketplace SaaS platform for film services, building a
              scalable web application using{" "}
              <span className=" bg-black text-white font-extrabold underline">
                React
              </span>
              ,{" "}
              <span className=" bg-black text-white font-extrabold underline">
                Next.js
              </span>
              ,{" "}
              <span className=" bg-black text-white font-extrabold underline">
                TypeScript
              </span>
              , and{" "}
              <span className=" bg-black text-white font-extrabold underline">
                TanStack Query
              </span>
              .
            </li>
            <li>
              Engineered responsive UI components using{" "}
              <span className=" bg-black text-white font-extrabold underline">
                shadcn/ui
              </span>
              {" and "}
              <span className=" bg-black text-white font-extrabold underline">
                TailwindCSS
              </span>
              , improving maintainability through modular component
              architecture.
            </li>
            <li>
              Integrated{" "}
              <span className=" bg-black text-white font-extrabold underline">
                Zustand
              </span>{" "}
              state management and REST APIs for project flows, ensuring
              reliability through rigorous debugging.
            </li>
            <li>
              Optimized delivery through version-controlled implementation and
              best engineering practices to support scalable web applications.
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[1px] h-[100px] bg-black mx-7  top-10 sm:rotate-0  rotate-90"></div>

      {/* Addinn Group */}
      <div className=" z-30 flex sm:flex-row flex-col items-center  w-full  text-black px-7    ">
        {/*Left side */}
        <div className=" flex flex-1  flex-col gap-7 bg-white">
          <Title className=" font-manrope font-bold">
            <a
              href="https://www.addinn-group.com/"
              target="_blank"
              className=" hover:underline  motion-translate-x-in-[-5%] motion-translate-y-in-[0%]  motion-blur-in-[5px] motion-ease-spring-smooth motion-delay-1500 will-change-[transform,filter] backface-hidden translate-z-0"
            >
              Addinn Group,
            </a>
            <br />
            <span className="motion-translate-x-in-[-5%] motion-translate-y-in-[0%]  motion-blur-in-[5px] motion-ease-spring-smooth motion-delay-1600 will-change-[transform,filter] backface-hidden translate-z-0">
              Frontend Developer Intern (Angular)
            </span>
          </Title>
          <span className=" text-sm font-manrope motion-translate-x-in-[-5%] motion-translate-y-in-[0%]  motion-blur-in-[5px] motion-ease-spring-smooth motion-delay-1600 will-change-[transform,filter] backface-hidden translate-z-0">
            Tunis, Tunisia (Hybrid) <br /> July 2025 – Aug 2025 (2 Months)
          </span>
        </div>
        {/*Right side */}
        <div className=" flex-1 p-2 bg-white motion-translate-x-in-[-5%] motion-translate-y-in-[0%]  motion-blur-in-[5px] motion-ease-spring-smooth motion-delay-1700 will-change-[transform,filter] backface-hidden translate-z-0">
          <ul className=" list-disc font-manrope space-y-3 text-lg/8 tracking-wide">
            <li>
              Delivered an accident-management platform by collaborating with
              cross-functional teams, ensuring effective communication across
              core insurance workflows.
            </li>
            <li>
              Engineered responsive UI modules using{" "}
              <span className=" bg-black text-white font-extrabold underline">
                TypeScript
              </span>
              {" and "}
              <span className=" bg-black text-white font-extrabold underline">
                RxJS
              </span>
              , utilizing asynchronous programming patterns to manage complex
              data streams.
            </li>
            <li>
              Streamlined claim-handling journeys by integrating REST APIs,
              improving end-user visibility and system reliability across the
              processing lifecycle.
            </li>
            <li>
              Participated in an Agile release process, contributing to code
              reviews and maintaining high standards for clean, modular code.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
