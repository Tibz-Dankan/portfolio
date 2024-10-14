"use strict";

import { render } from "z-js-framework";
import Home from "./pages/home";

const root = document.getElementById("root");

const routes = [
  {
    route: "/",
    component: Home,
  },
];

render(root, routes);
