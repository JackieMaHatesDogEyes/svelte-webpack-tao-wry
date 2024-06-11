import App from "./App.svelte";


// We have to wait for the DOM to be ready before we can mount our app.
const app = document.addEventListener("DOMContentLoaded", () => { new App({
  target: document.body,
})});

export default app;
