import { html } from "z-js-framework";
import { Modal } from "./Modal";
import { ContactForm } from "./Contact";

export const Header = () => {
  const UI = html`<header class="w-full flex-col space-y-16">
    <nav
      class="flex items-center bg-[rgba(0,0,0,0.0)] justify-between
        gap-4 py-4 px-4 sm:px-8 lg:px-12 2xl:px-32"
    >
      <h1 class="font-bold text-xl sm:text-2xl text-gray-100">
        Tibesigwa Dankan
      </h1>
      <ul class="flex items-center justify-end gap-2 sm:gap-4">
        <li>
          <img src="icons/github.svg" alt="Github Icon" class="size-7" />
        </li>
        <li>
          <img src="icons/linkedin.svg" alt="LinkedIn Icon" class="size-6" />
        </li>
        <li>
          <img src="icons/twitter.svg" alt="Twitter Icon" class="size-6" />
        </li>
        <li class="sm:ml-8 hidden sm:block">
          ${Modal({
            openModalElement: html`<button
              type="button"
              class="bg-gray-50 text-[#343a40]
              text-center px-4 py-1 pr-3 rounded-3xl flex items-center justify-center
              gap-1 font-semibold text-lg"
            >
              <span>Contact</span>
              <img
                src="icons/chevron-down-black.svg"
                alt="Chevron Icon"
                class="size-5 rotate-[-90deg]"
              />
            </button>`,
            contentElement: html`<div>${ContactForm()}</div>`,
          })}
        </li>
      </ul>
    </nav>
    <div
      class="w-full flex items-center bg-[rgba(0,0,0,0.0)] justify-center
         gap-32 py-4 px-4 sm:px-8 lg:px-12 2xl:px-32 h-[80vh] z-10"
    >
      <div
        class="w-fulls sm:w-autos h-1/3 sm:h-1/2 flex justify-center gap-4 
        bg-[rgba(248,249,250,0.25)] rounded-lg p-4"
      >
        <div class="flex flex-col justify-center gap-3">
          <p class="text-lg flex flex-col text-[rgba(3,7,30,0.85)]">
            <span class="text-4xl sm:text-6xl md:text-8xl font-bold"
              >FullStack</span
            >
            <span class="text-2xl sm:text-3xl md:text-4xl font-bold"
              >Developer</span
            >
          </p>
          <div class="flex justify-end">
            ${Modal({
              openModalElement: html`<button
                class="w-auto rounded-[28px] px-3 sm:px-4 py-2 sm:py-3 gap-2
                bg-[rgba(3,7,30,0.95)] flex items-center justify-center"
              >
                <span class="text-sm sm:text-lg font-semibold">Message</span>
                <span
                  class="w-auto aspect-[1/1] bg-gray-200 text-gray-800 
                  px-2s py-1s rounded-[50%] flex items-center justify-center p-2"
                >
                  <img
                    src="icons/send.svg"
                    alt="Send Icon"
                    class="size-3 sm:size-4"
                  />
                </span>
              </button>`,
              contentElement: html`<div>${ContactForm()}</div>`,
            })}
          </div>
        </div>
        <img
          src="images/dankan.png"
          alt="profile"
          class="w-auto h-full aspect-[1/1] rounded-[50%]
            shadow-md"
        />
      </div>
    </div>
  </header>`;

  return UI;
};
