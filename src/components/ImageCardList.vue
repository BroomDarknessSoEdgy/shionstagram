<template>
    <article>
        <div class="image-row" :key="index" v-for="(subset, index) in imageSet">
            <div :key="image.id" v-for="image in subset">
                <div class="admin-menu">
                    <button v-on:click="() => hideItem(image.id)"></button>   
                </div>
                <image-card :src="image.location" />
            </div>
        </div>
    </article>
</template>

<script>
import ImageCard from './ImageCard.vue'

export default {
  name: 'ImageCardList',
  props: {
      imageSet: Array,
      admin: Boolean,
      token: String,
  },
  components: {
      ImageCard,
  },
  methods: {
      hideItem: function (id) {
        fetch('https://shionstagram.com/api/admin/message', {
            method: 'POST',
            body: JSON.stringify({
                token: this.token,
                id,
                approved: false,
            })
        })
            .then(response => response.json())
            .then(data => {
                this.rawMessages = data.rows;
            })
      }
  }
}
</script>

<style scoped>
div {
    display: flex;
    flex-direction: row;
}

article {
    display: flex;
    flex-direction: column;
    margin: auto;
}

.image-row {
    margin-bottom: 28px;
}

.admin-menu {
    padding: 15px;
}
</style>