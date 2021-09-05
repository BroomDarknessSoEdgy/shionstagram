import postcss from 'postcss';
import ProfileCard from '../components/ProfileCard'

export default {
    title: 'Instagram/ProfileCard',
    component: ProfileCard,
    argTypes: {}
}

const Template = (args) => ({
  components: { ProfileCard },
  setup() {
    return { args };
  },
  template: '<profile-card v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
    avatarSrc: 'https://yt3.ggpht.com/AyUL9W0ltc_aJr_MysuZBx8hRfb1SIVNREgU9kiOO-lqmdhYkEsllmhagertVIwHwa3UAAKy=s88-c-k-c0x00ffffff-no-rj',
    name: 'Shion Murasaki',
    stat1: '0 posts',
    stat2: '1,000,000 followers',
    stat3: '0 following',
    description: 'Murasaki Shion Shionstagram account.'
}