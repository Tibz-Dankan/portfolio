// BASE URL
let serverURL;

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  serverURL = "http://localhost:5000/api/v1";
} else {
  serverURL = "https://portifolio-3o25.onrender.com/api/v1";
}
export { serverURL };
