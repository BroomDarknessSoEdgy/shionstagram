<template>
    <div class="image-card-wrapper">
        <img class="image" sizes="293px" :src="src">
    </div>
</template>

<script>
export default {
  name: 'ImageCard',
  props: {
      src: String,
  }
}
</script>

<style scoped>
.image-card-wrapper {
    margin-right: 28px;
    flex: 1 0 0%;
    display: block;
    width: 293px;
    height: 293px;
    overflow: hidden;

}

.image {
    object-fit: cover;
    width: 100%;
    height: 100%;
}

</style>