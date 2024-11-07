import { html } from "z-js-framework";

export const Video = (props) => {
  return html`<div
    class="w-96 h-72 flex items-center justify-center text-gray-100 gap-2"
  >
    <span> ${props.name} </span>
    <span> Video Here </span>
  </div>`;
};
