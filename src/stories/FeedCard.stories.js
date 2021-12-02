import FeedCard from '../components/FeedCard';

export default {
    title: 'Instagram/FeedCard',
    component: FeedCard,
    argTypes: {}
}

const Template = (args) => ({
  components: { FeedCard },
  setup() {
    return { args };
  },
  template: '<feed-card v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
    location: "https://messages.shionstagram.com/d1b18240-0cbf-4055-bb5c-4396445774d2.jpeg",
    avatar: "https://yt3.ggpht.com/AyUL9W0ltc_aJr_MysuZBx8hRfb1SIVNREgU9kiOO-lqmdhYkEsllmhagertVIwHwa3UAAKy=s88-c-k-c0x00ffffff-no-rj",
    twitter: "@shiokko"
}