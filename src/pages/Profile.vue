<template>
    <div>
       <site-header></site-header> 
       <profile-card :avatarSrc="avatarSrc" :name="name" :stat1="stat1" :stat2="stat2" :stat3="stat3" :description="description" ></profile-card>
       <div class="card-list">
           <image-card-list :imageSet="imageSet"></image-card-list>
       </div>
    </div>
</template>

<script>
import SiteHeader from '../components/SiteHeader.vue'
import ProfileCard from '../components/ProfileCard.vue'
import ImageCardList from '../components/ImageCardList.vue'

export default {
  name: 'Profile',
  props: {
  },
  components: {
      SiteHeader,
      ProfileCard,
      ImageCardList,
  },
  data: () => ({
    avatarSrc: 'https://yt3.ggpht.com/AyUL9W0ltc_aJr_MysuZBx8hRfb1SIVNREgU9kiOO-lqmdhYkEsllmhagertVIwHwa3UAAKy=s88-c-k-c0x00ffffff-no-rj',
    name: 'Shion Murasaki',
    stat1: '0 posts',
    stat2: '1,000,000 followers',
    stat3: '0 following',
    description: 'Murasaki Shion Shionstagram account.',
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
  }),
}
</script>

<style scoped>
.card-list {
    display: flex;
    justify-content: center;
}
</style>


