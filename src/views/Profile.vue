<template>
    <div>
       <site-header></site-header> 
        <profile-card :avatarSrc="avatarSrc" :name="name" :stat1="stat1" :stat2="stat2" :stat3="stat3" :description="description" ></profile-card>
        <div class="card-list">
            <image-card-list :imageSet="imageSet" :admin="admin" :token="token"></image-card-list>
        </div>
    </div>
</template>

<script>
import SiteHeader from '../components/SiteHeader.vue'
import ProfileCard from '../components/ProfileCard.vue'
import ImageCardList from '../components/ImageCardList.vue'

export default {
  name: 'Profile',
  mounted() {
      if (this.admin) {
          if (!this.token) location.replace('/api/connect/discord');
      }

      fetch('https://shionstagram.com/api/messages')
        .then(response => response.json())
        .then(data => {
            this.rawMessages = data.rows;
        });
  },
  components: {
      SiteHeader,
      ProfileCard,
      ImageCardList,
  },
  props: {
      token: String,
      admin: Boolean,
  },
  data: () => ({
    avatarSrc: 'https://yt3.ggpht.com/AyUL9W0ltc_aJr_MysuZBx8hRfb1SIVNREgU9kiOO-lqmdhYkEsllmhagertVIwHwa3UAAKy=s88-c-k-c0x00ffffff-no-rj',
    name: 'Shion Murasaki',
    stat1: '0 posts',
    stat2: '1,000,000 followers',
    stat3: '0 following',
    description: 'Murasaki Shion Shionstagram account.',
    rawMessages: []
  }),
  computed: {
      imageSet: function () {
          const images = [[]];
          let row = 0;
          this.rawMessages.forEach((message, i) => {
              if (i % 3 === 0) {
                  images.push([message]);
                  row = row + 1;
              } else {
                  images[row].push(message);
              }
          });
          return images;
      }
  }
}
</script>

<style scoped>
.card-list {
    display: flex;
    justify-content: center;
}
</style>


