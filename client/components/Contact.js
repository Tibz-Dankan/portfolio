import { html, useState, reactive, useEffect } from "z-js-framework";
import { postContactMessage } from "../API/contact";

export const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const nameChangeHandler = (event) => setName(event.target.value);
  const emailChangeHandler = (event) => setEmail(event.target.value);
  const messageChangeHandler = (event) => setMessage(event.target.value);

  const makeContactFieldsEmpty = () => {
    const nameInputField = document.getElementById("name");
    const emailInputField = document.getElementById("email");
    const messageInputField = document.getElementById("message");

    nameInputField.value = "";
    emailInputField.value = "";
    messageInputField.value = "";
  };

  const postContactMessageHandler = async () => {
    const nameValue = name.current();
    const emailValue = email.current();
    const messageValue = message.current();

    console.log("name:", nameValue);
    console.log("email:", emailValue);
    console.log("message:", messageValue);

    if (!nameValue || !emailValue || !messageValue) {
      console.log("Missing name or email or message");
      // TO trigger an alert error
      return;
    }
    if (!emailValue.includes("@")) {
      console.log("Invalid email");
      // TO trigger an alert error
      return;
    }

    try {
      setIsLoading(true);
      setIsSuccessful(false);
      const response = await postContactMessage({
        name: nameValue,
        email: emailValue,
        message: messageValue,
      });
      console.log("response:", response);
      setIsLoading(false);
      setIsSuccessful(true);
    } catch (error) {
      console.log("error:", error.message);
      setIsLoading(false);
    }
  };

  const UI = html`<div>
    <form
      action=""
      class="flex flex-col gap-4 w-[70vw] sm:max-w-[608px] min-h-[54vh]"
    >
      <div class="w-full h-full flex flex-col gap-2">
        <p class="text-gray-300 text-2xl font-semibold">
          Send Dankan a message
        </p>
      </div>
      <div class="w-full h-full flex flex-col gap-2">
        <label for="username" class="text-sm font-medium text-gray-500"
          >Name</label
        >
        <input
          type="text"
          id="name"
          name="name"
          required
          class="p-2 bg-[#212529] border border-blue-300 rounded-md 
          focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-300"
          placeholder="Your name"
          onChange="${nameChangeHandler}"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="email" class="text-sm font-medium text-gray-500"
          >Email</label
        >
        <input
          type="email"
          id="email"
          name="email"
          required
          class="p-2 bg-[#212529] border border-blue-300 rounded-md 
          focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-300"
          placeholder="Your email"
          onChange="${emailChangeHandler}"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="message" class="text-sm font-medium text-gray-500"
          >Message</label
        >
        <textarea
          id="message"
          name="message"
          required
          class="p-2 h-24 bg-[#212529] border border-blue-300 rounded-md 
          focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-300"
          placeholder="Your message"
          onChange="${messageChangeHandler}"
        ></textarea>
      </div>
      <div class="w-full flex justify-end mt-2">
        <button
          type="button"
          class="w-full sm:w-32 bg-blue-800 text-white py-2 px-4 rounded-md
           hover:bg-blue-900 transition duration-300 ease-in-out 
           ${isLoading.current() === true && "disabled:opacity-50"}"
          onClick="${postContactMessageHandler}"
        >
          ${isLoading.current() ? "Submitting.." : "Submit"}
        </button>
      </div>
    </form>
  </div>`;

  useEffect(() => {
    if (!isSuccessful.current()) return;
    makeContactFieldsEmpty();
  }, [isSuccessful]);

  return reactive(() => UI);
};
