import { Skill } from "./Skill";

export function Skills() {
  return (
    <div id="skills" className=" scroll-mt-[50px] mb-16">
      
      <h1 className="text-2xl mb-4 text-[#1c1b1f] font-bold dark:text-[#e5e1e6]">
      SKILLS
      </h1>

    <div>
      <Skill>HTML</Skill>
      <Skill>CSS</Skill>
      <Skill>JavaScript</Skill>
      <Skill>Laravel</Skill>
      <Skill>Tailwind CSS</Skill>
    </div>

    </div>
  );
}
