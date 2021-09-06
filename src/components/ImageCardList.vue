<template>
    <article>
        <div class="image-row" :key="index" v-for="(subset, index) in imageSet">
            <div :key="image.label" v-for="image in subset">
                <image-card :src="image.src" />
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
  },
  components: {
      ImageCard,
  }
}
</script>
    ImageCard

<style scoped>
div {
    display: flex;
    flex-direction: row;
}

article {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.image-row {
    margin-bottom: 28px;
}
</style>