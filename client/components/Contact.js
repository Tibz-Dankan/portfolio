import { html, useState, reactive, useEffect, getRef } from "z-js-framework";
import { postContactMessage } from "../API/contact";

export const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState({ type: "", message: "" });

  const nameChangeHandler = (event) => setName(event.target.value);
  const emailChangeHandler = (event) => setEmail(event.target.value);
  const messageChangeHandler = (event) => setMessage(event.target.value);

  const postContactMessageHandler = async () => {
    const nameValue = name.current();
    const emailValue = email.current();
    const messageValue = message.current();

    if (!nameValue || !emailValue || !messageValue) {
      setAlert({ type: "error", message: "Missing name or email or message" });
      return;
    }
    if (!emailValue.includes("@")) {
      setAlert({ type: "error", message: "Invalid email" });
      return;
    }

    try {
      setIsLoading(true);
      setIsSuccessful(false);
      setAlert({ type: "", message: "" });
      const response = await postContactMessage({
        name: nameValue,
        email: emailValue,
        message: messageValue,
      });
      console.log("response:", response);
      setAlert({ type: "success", message: response.message });
      setIsLoading(false);
      setIsSuccessful(true);
    } catch (error) {
      console.log("error:", error.message);
      setAlert({ type: "error", message: error.message });
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
      <div class="w-full hidden" ref="alertSuccessRef">
        <div
          class="bg-[#55C57A] w-full rounded-lg p-4 flex items-start justify-start gap-2"
        >
          <span>
            <img
              src="icons/alert/success.svg"
              alt="success Icon"
              class="size-5"
            />
          </span>
          <span
            class="text-gray-50"
            id="alertMessage"
            ref="alertSuccessMessageRef"
          ></span>
        </div>
      </div>
      <div class="w-full hidden" ref="alertErrorRef">
        <div
          class="bg-[#D9534F] w-full rounded-lg p-4 flex items-start justify-start gap-2"
        >
          <span
            ><img src="icons/alert/error.svg" alt="Error Icon" class="size-5"
          /></span>
          <span
            class="text-gray-50"
            id="alertMessage"
            ref="alertErrorMessageRef"
          ></span>
        </div>
      </div>
      <div class="w-full h-full flex flex-col gap-2">
        <label for="username" class="text-sm font-medium text-gray-500"
          >Name</label
        >
        <input
          type="text"
          id="name"
          name="name"
          ref="name"
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
          ref="email"
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
          ref="message"
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
           hover:bg-blue-900 transition duration-300 ease-in-out disabled:cursor-not-allowed"
          onClick="${postContactMessageHandler}"
          ref="contactBtnRef"
        >
          <span ref="contactBtnLabelRef"> Send </span>
          <span ref="contactBtnLoaderRef" class="hidden"> Sending... </span>
        </button>
      </div>
    </form>
  </div>`;

  useEffect(() => {
    const showLoaderHandler = () => {
      const contactBtnRef = getRef("contactBtnRef");
      const contactBtnLabelRef = getRef("contactBtnLabelRef");
      const contactBtnLoaderRef = getRef("contactBtnLoaderRef");

      if (isLoading.current()) {
        contactBtnRef.style.opacity = "50%";
        contactBtnRef.style.cursor = "not-allowed";
        contactBtnLabelRef.style.display = "none";
        contactBtnLoaderRef.style.display = "block";
        return;
      }
      contactBtnRef.style.opacity = "100%";
      contactBtnRef.style.cursor = "pointer";
      contactBtnLabelRef.style.display = "block";
      contactBtnLoaderRef.style.display = "none";
    };
    showLoaderHandler();
  }, [isLoading]);

  useEffect(() => {
    const makeContactFieldsEmpty = () => {
      const nameRef = getRef("name");
      const emailRef = getRef("email");
      const messageRef = getRef("message");

      if (!isSuccessful.current()) return;
      nameRef.value = "";
      emailRef.value = "";
      messageRef.value = "";
      setIsSuccessful(false);
    };
    makeContactFieldsEmpty();
  }, [isSuccessful]);

  useEffect(() => {
    const showNotificationHandler = () => {
      const showAlert = !!alert.current().message;
      const alertSuccess = alert.current().type === "success";
      const alertError = alert.current().type === "error";

      if (alertSuccess && showAlert) {
        const alertSuccessRef = getRef("alertSuccessRef");
        const alertErrorRef = getRef("alertErrorRef");
        const alertSuccessMessageRef = getRef("alertSuccessMessageRef");

        alertSuccessRef.style.display = "block";
        alertErrorRef.style.display = "none";
        alertSuccessMessageRef.innerHTML = alert.current().message;
      }
      if (alertError && showAlert) {
        const alertSuccessRef = getRef("alertSuccessRef");
        const alertErrorRef = getRef("alertErrorRef");
        const alertErrorMessageRef = getRef("alertErrorMessageRef");

        alertSuccessRef.style.display = "none";
        alertErrorRef.style.display = "block";
        alertErrorMessageRef.innerHTML = alert.current().message;
      }
    };

    showNotificationHandler();
  }, [alert]);

  return reactive(() => UI);
};
