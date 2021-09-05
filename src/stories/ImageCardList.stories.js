import ImageCardList from '../components/ImageCardList'

export default {
    title: 'Instagram/ImageCardList',
    component: ImageCardList,
    argTypes: {}
}

const Template = (args) => ({
  components: { ImageCardList },
  setup() {
    return { args };
  },
  template: '<image-card-list v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
    imageSet: [
    [
        { label: 'image1', src: 'https://pbs.twimg.com/media/E-huJ66VIAIHmZs?format=jpg' },
        { label: 'image2', src: 'https://pbs.twimg.com/media/E-huJ66VIAIHmZs?format=jpg' },
        { label: 'image3', src: 'https://pbs.twimg.com/media/E-huJ66VIAIHmZs?format=jpg' }
    ],
    [
        { label: 'image1', src: 'https://pbs.twimg.com/media/E-huJ66VIAIHmZs?format=jpg' },
        { label: 'image2', src: 'https://pbs.twimg.com/media/E-huJ66VIAIHmZs?format=jpg' },
        { label: 'image3', src: 'https://pbs.twimg.com/media/E-huJ66VIAIHmZs?format=jpg' }
    ],
    [
        { label: 'image1', src: 'https://pbs.twimg.com/media/E-huJ66VIAIHmZs?format=jpg' },
        { label: 'image2', src: 'https://pbs.twimg.com/media/E-huJ66VIAIHmZs?format=jpg' },
        { label: 'image3', src: 'https://pbs.twimg.com/media/E-huJ66VIAIHmZs?format=jpg' }
    ]
]
}