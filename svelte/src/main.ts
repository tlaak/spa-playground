import App from "./components/App.svelte";
import "./global.css";

const app = new App({
  target: document.body,
  props: {
    name: "world",
  },
});

export default app;
