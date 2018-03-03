//import Welcome from "./components/Welcome";
import Orbs from "./components/orbs/index.js";
import Email from "./components/email-form/index.js";

const components = new Map();
//components.set("Welcome", Welcome);
components.set("Orbs", Orbs);
components.set("Email", Email);

const componentFactory = componentName => {
  return components.get(componentName);
};

export default componentFactory;
