import React from "react";
import { createRoot } from "react-dom/client";

// @ts-ignore
import "./main.module.scss";
import "@oh/styles/dist/style.css";
import "@oh/styles/styles.scss";

import { ApplicationComponent } from "modules/application";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(<ApplicationComponent />);
