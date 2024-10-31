import { serverURL } from "../constants";

export const postContactMessage = async ({ name, email, message }) => {
  const response = await fetch(`${serverURL}/contact/post`, {
    method: "POST",
    body: JSON.stringify({
      name,
      email,
      message,
    }),
    headers: {
      "Content-type": "application/json",
    },
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }
  return await response.json();
};
