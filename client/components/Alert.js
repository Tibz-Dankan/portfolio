import { html, reactive } from "z-js-framework";

export const Alert = (props) => {
  const type = props.type;
  const message = props.message;

  let bgColor;
  let icon;

  if (type === "success") {
    bgColor = "bg-[#55C57A]";
    icon = html`<img
      src="icons/alert/success.svg"
      alt="success Icon"
      class="size-5"
    />`;
  }
  if (type === "error") {
    bgColor = "bg-[#D9534F]";
    icon = html`<img
      src="icons/alert/error.svg"
      alt="Error Icon"
      class="size-5"
    />`;
  }

  const UI = html`<div
    class="${bgColor} w-full rounded-lg p-4 flex items-start justify-start gap-2"
  >
    <span>${icon}</span>
    <span class="text-gray-50" id="alertMessage" ref="alertMessageRef"
      >${message}</span
    >
  </div>`;

  return reactive(() => UI);
};
