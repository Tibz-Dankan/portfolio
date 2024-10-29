import { html } from "z-js-framework";

export const ContactForm = () => {
  return html`<div>
    <form action="">
      <div class="flex flex-col gap-2">
        <label for="username" class="text-sm font-medium text-gray-700"
          >Name</label
        >
        <input
          type="text"
          id="name"
          name="name"
          required
          class="p-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your name"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="email" class="text-sm font-medium text-gray-700"
          >Email</label
        >
        <input
          type="email"
          id="email"
          name="email"
          required
          class="p-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="password" class="text-sm font-medium text-gray-700"
          >Message</label
        >
        <textarea
          id="message"
          name="message"
          required
          class="p-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your message"
        />
      </div>
      <div>
        <button
          type="submit"
          class="bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-900 transition duration-300 ease-in-out"
        >
          Sign Up
        </button>
      </div>
    </form>
  </div>`;
};
