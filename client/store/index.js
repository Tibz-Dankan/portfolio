import { createStore } from "z-js-framework";

export const alertStore = createStore({
  showAlert: false,
  type: "",
  message: "alert message here",
});

// alertStore.subScribe((newState) => {
//   console.log("alert updated:", newState);
// });
