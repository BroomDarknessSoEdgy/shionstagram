<template>
    <div class="avatar-wrapper">
        <div class="avatar">
            <img class="avatar-img" :alt="alt" :src="src" />
        </div>
    </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    alt: String,
    src: String,
  }
}
</script>

<style scoped>
div {
    display: flex;
}

.avatar-wrapper {
    margin-right: 30px;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
}

.avatar {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    overflow: hidden;
}

.avatar-img {
    height: 150px;
    width: 150px;
}
</style>

