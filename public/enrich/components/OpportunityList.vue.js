const template = /*html*/ `
  <table>
    <thead>
      <tr>
        <th v-for="column in columns" :key="column.key">{{ column.label }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
      </tr>
    </tbody>
  </table>
`;

export default {
  name: "OpportunityPage",
  data: () => ({
    columns: [
      { key: "id", label: "ID" },
      { key: "name", label: "Name" },
    ],
    items: [
      { id: 1, name: "list 1" },
      { id: 2, name: "list 2" },
      { id: 3, name: "list 3" },
    ],
  }),
  template,
};
