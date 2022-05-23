const template = /*html*/ `
  <div>
    <hr/>
    <h3>This is an enrich vue page</h3>
    <OpportunityList />
  </div>
`;

import OpportunityList from "./OpportunityList.vue.js";
export default {
  name: "OpportunityTab",
  components: {
    OpportunityList,
  },
  template,
};
