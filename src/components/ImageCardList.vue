<template>
    <article>
        <div class="image-row" :key="index" v-for="(subset, index) in imageSet">
            <div :key="image.id" v-for="image in subset">
                <div v-if="admin" class="admin-menu">
                    <button v-on:click="() => hideItem(image.id)">Hide</button>   
                </div>
                <image-card :src="image.location" />
            </div>
        </div>
    </article>
</template>

<script>
import config from '../config';
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
        fetch(`${config.origin}/api/admin/message`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
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