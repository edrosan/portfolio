import iconHtml from "./assets/img/icon-html.svg";
import iconJavascript from "./assets/img/icon-javascript.svg";

export function Proyecto({ img }) {
  return (
    <div className="w-[300px] h-[200px] bg-white border border-gray-200 rounded-lg relative">
      <img className="object-cover w-full h-full rounded-lg" src={img} />

      <div className="absolute bottom-0 h-5 flex  bg-indigo-500 text-zinc-50 w-full rounded-b-lg">
        <span>
          JavaScript
        </span>
        <span>
          HTML
        </span>
      </div>
    </div>
  );
}
