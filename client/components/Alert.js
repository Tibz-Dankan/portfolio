import { html, useStore, reactive } from "z-js-framework";
import { alertStore } from "../store";

export const Alert = (props) => {
  const type = props.type;
  const [alert, _] = useStore(alertStore);
  // const message = props.message;
  const message = alert.current().message;

  console.log("alert:", alert);
  console.log("message:", message);

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

  // <span class="text-gray-50" ref="alertMessageRef">${message}</span>

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
