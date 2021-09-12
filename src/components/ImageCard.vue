<template>
    <div class="image-card-wrapper">
        <el-image fit="cover" class="image" sizes="293px" :src="src" lazy />
    </div>
</template>

<script>
import { ElImage } from 'element-plus'

export default {
  name: 'ImageCard',
  props: {
      src: String,
  },
  components: {
      ElImage
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
    width: 100%;
    height: 100%;
}

</style>