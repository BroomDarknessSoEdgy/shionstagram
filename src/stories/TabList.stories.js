import TabList from '../components/TabList'

export default {
    title: 'Instagram/TabList',
    component: TabList,
    argTypes: {}
}

const Template = (args) => ({
  components: { TabList },
  setup() {
    return { args };
  },
  template: '<tab-list v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
}