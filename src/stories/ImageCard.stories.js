import ImageCard from '../components/ImageCard'

export default {
    title: 'Instagram/ImageCard',
    component: ImageCard,
    argTypes: {}
}

const Template = (args) => ({
  components: { ImageCard },
  setup() {
    return { args };
  },
  template: '<image-card v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  src: 'https://pbs.twimg.com/media/E-huJ66VIAIHmZs?format=jpg'
}