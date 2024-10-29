import { html } from "z-js-framework";

export const Card = (props) => {
  return html`<div class="p-4 shadow-md rounded-md ${props.class}">
    ${props.children}
  </div>`;
};
