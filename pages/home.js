import { html, useEffect, useState } from "z-js-framework";

export default function Home() {
  const [count, setCount] = useState(0);

  const UI = html`
    <main class="w-full flex-col">
      <nav
        class="flex items-center bg-[rgba(0,0,0,0.0)] justify-between
        gap-4 py-4 px-4 sm:px-8 lg:px-12 2xl:px-32"
      >
        <h1 class="font-bold text-2xl text-gray-100">Tibesigwa Dankan</h1>
        <ul class="flex items-center justify-end gap-2">
          <li>
            <img
              src="/public/icons/github.svg"
              alt="Github Icon"
              class="size-6 fill-gray-100"
            />
          </li>
          <li>
            <img
              src="/public/icons/linkedin.svg"
              alt="LinkedIn Icon"
              class="size-6"
            />
          </li>
          <li>
            <img
              src="/public/icons/twitter.svg"
              alt="Twitter Icon"
              class="size-6"
            />
          </li>
          <li>
            <img
              src="/public/icons/gmail.svg"
              alt="Gmail Icon"
              class="size-6"
            />
          </li>
        </ul>
      </nav>
      <header
        class="w-full flex items-center bg-[rgba(0,0,0,0.0)] justify-center
         gap-32 py-4 px-4 sm:px-8 lg:px-12 2xl:px-32 h-[80vh]"
      >
        <div class="w-full flex items-center justify-center">
          Animated messages
        </div>
        <div class="w-full flex items-center justify-center">
          <img src="profile" alt="profile" />
        </div>
      </header>
      <div class="w-full flex items-center justify-center">
        Animated diagrams
      </div>
      <div class="w-full flex items-center justify-center">projects</div>
      <footer class="w-full flex items-center justify-center">Footer</footer>
    </main>
  `;

  return UI;
}
