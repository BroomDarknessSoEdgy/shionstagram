import SiteHeader from '../components/SiteHeader.vue'

export default {
    title: 'Instagram/Header',
    component: SiteHeader,
    argTypes: {}
}

const Template = (args) => ({
  components: { SiteHeader },
  setup() {
    return { args };
  },
  template: '<site-header v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {}