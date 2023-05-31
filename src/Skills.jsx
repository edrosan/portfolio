import { Skill } from "./Skill";
import { Titulo } from "./components/Titulo";

export function Skills() {
  return (
    <div id="skills" className=" scroll-mt-[50px] mb-16">
      <Titulo>Skills</Titulo>

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
