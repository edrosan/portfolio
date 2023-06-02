import { Skill } from "./Skill";
import { Titulo } from "../../common/Titulo";

export function Skills() {
  return (
    <div id="skills" className="mb-16 scroll-mt-[140px] lg:my-16">
      <Titulo>Skills</Titulo>

      <div className="flex flex-wrap gap-2">
        <Skill>HTML</Skill>
        <Skill>CSS</Skill>
        <Skill>JavaScript</Skill>
        <Skill>Laravel</Skill>
        <Skill>Tailwind CSS</Skill>
      </div>
    </div>
  );
}
