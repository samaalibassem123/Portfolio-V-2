import { useState } from "react";
import { cn } from "../../utils/cn";
import SmallLabel from "../ui/SmallLabel";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
type TechStack = {
  label: string;
  url: string;
};
type Language = {
  label: string;
  url: string;
};
type LanguageSkill = {
  label: string;
  level: string;
};

const Menu: string[] = ["Technologies", "programming language", "Languages"];

const techStack: TechStack[] = [
  // Frontend
  { label: "React", url: "https://react.dev" },
  { label: "Next.js", url: "https://nextjs.org" },
  { label: "Angular", url: "https://angular.dev" },
  { label: "TailwindCSS", url: "https://tailwindcss.com" },
  { label: "Shadcn/UI", url: "https://ui.shadcn.com" },
  { label: "PrimeNG", url: "https://primeng.org" },
  { label: "Zustand", url: "https://zustand-demo.vercel.app/" },
  { label: "RxJS", url: "https://rxjs.dev/" },
  { label: "Framer Motion", url: "https://motion.dev/" },
  { label: "GSAP", url: "https://gsap.com/" },
  { label: "TanStack Query", url: "https://tanstack.com/query/latest" },
  { label: "TanStack Table", url: "https://tanstack.com/table/latest" },
  // Backend
  { label: "Node.js", url: "https://nodejs.org/" },
  { label: "FastAPI", url: "https://fastapi.tiangolo.com/" },
  { label: "SQLAlchemy", url: "https://www.sqlalchemy.org/" },
  { label: "Alembic", url: "https://alembic.sqlalchemy.org/" },
  { label: "Prisma", url: "https://www.prisma.io/" },
  { label: "LangChain", url: "https://www.langchain.com/" },
  { label: "LangGraph", url: "https://langchain-ai.github.io/langgraph/" },
  { label: "Ollama", url: "https://ollama.ai/" },
  // Data & BI
  { label: "Pandas", url: "https://pandas.pydata.org/" },
  { label: "Scikit-learn", url: "https://scikit-learn.org/" },
  { label: "Streamlit", url: "https://streamlit.io/" },
  { label: "Power BI", url: "https://powerbi.microsoft.com/" },
  {
    label: "SSIS",
    url: "https://learn.microsoft.com/en-us/sql/integration-services/sql-server-integration-services",
  },
  // Databases
  { label: "PostgreSQL", url: "https://www.postgresql.org/" },
  { label: "MySQL", url: "https://www.mysql.com" },
  { label: "SQL Server", url: "https://www.microsoft.com/en-us/sql-server" },
  { label: "MongoDB", url: "https://www.mongodb.com/" },
  { label: "Oracle Database", url: "https://www.oracle.com/database/" },
  { label: "Supabase", url: "https://supabase.com" },
  // DevOps & Tools
  { label: "Docker", url: "https://www.docker.com/" },
  { label: "Git", url: "https://git-scm.com" },
  { label: "GitHub", url: "https://github.com" },
  { label: "GitLab", url: "https://gitlab.com" },
  { label: "Figma", url: "https://www.figma.com/" },
];
const languages: Language[] = [
  { label: "C", url: "https://en.cppreference.com/w/c" },
  { label: "Java", url: "https://dev.java" },
  {
    label: "PL/SQL",
    url: "https://docs.oracle.com/en/database/oracle/oracle-database/21/lnpls/index.html",
  },
  {
    label: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  { label: "TypeScript", url: "https://www.typescriptlang.org" },
  { label: "PHP", url: "https://www.php.net" },
  { label: "Python", url: "https://www.python.org" },
];
const languageSkills: LanguageSkill[] = [
  { label: "Arabic", level: "Native" },
  { label: "English", level: "Intermediate (B2)" },
  { label: "French", level: "Intermediate (B1/B2)" },
];

export default function Footer() {
  const [selectedMenu, setSelectedMenu] = useState<string>("Technologies");

  return (
    <div className=" flex flex-col sm:h-[150px] w-full">
      <NavMenu selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      <ScrollArea className="w-full ">
        <div className="flex gap-2 p-7  items-center xl:justify-center ">
          {selectedMenu === "Technologies" &&
            techStack.map((tech) => (
              <SmallLabel
                className="motion-preset-focus"
                key={tech.url}
                url={tech.url}
              >
                {tech.label}
              </SmallLabel>
            ))}
          {selectedMenu === "programming language" &&
            languages.map((l) => (
              <SmallLabel
                className="motion-preset-focus"
                key={l.url}
                url={l.url}
              >
                {l.label}
              </SmallLabel>
            ))}
          {selectedMenu === "Languages" &&
            languageSkills.map((l) => (
              <SmallLabel className="motion-preset-focus" key={l.label}>
                {l.label} : {l.level}
              </SmallLabel>
            ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}

const NavMenu = ({
  selectedMenu,
  setSelectedMenu,
}: {
  selectedMenu: string;
  setSelectedMenu: (v: string) => void;
}) => {
  return (
    <div className="flex sm:flex-row flex-col  justify-center sm:gap-[100px] w-full">
      {Menu.map((m) => (
        <button
          onClick={() => setSelectedMenu(m)}
          key={m}
          className={cn(
            "sm:text-center text-start font-manrope cursor-pointer h-fit  px-[18px] py-[16px] motion-translate-x-in-[-1%] motion-translate-y-in-[-38%] motion-opacity-in-[0%] motion-blur-in-[5px] motion-delay-1000  ",
            selectedMenu === m && "border-b border-black "
          )}
        >
          {m}
        </button>
      ))}
    </div>
  );
};
