import Avatar from '../components/Avatar'

export default {
    title: 'Instagram/Avatar',
    component: Avatar,
    argTypes: {}
}

const Template = (args) => ({
  components: { Avatar },
  setup() {
    return { args };
  },
  template: '<avatar v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
    src: 'https://yt3.ggpht.com/AyUL9W0ltc_aJr_MysuZBx8hRfb1SIVNREgU9kiOO-lqmdhYkEsllmhagertVIwHwa3UAAKy=s88-c-k-c0x00ffffff-no-rj',
}