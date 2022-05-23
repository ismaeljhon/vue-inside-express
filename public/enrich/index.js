import Vue from "https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.esm.browser.js";
import EnrichPage from "./components/EnrichPage.vue.js";

const template = /*html*/ `
<div>
  <EnrichPage />
</div>
`;
new Vue({
  el: '[vue="enrich-page"]',
  components: {
    EnrichPage,
  },
  template,
  mounted() {},
});
