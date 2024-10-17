"use strict";

import { render } from "z-js-framework";
import Home from "./pages/home";
import Todos from "./pages/todos";

const root = document.getElementById("root");

const routes = [
  {
    route: "/",
    component: Home,
  },
  {
    route: "/todos",
    component: Todos,
  },
];

render(root, routes);
