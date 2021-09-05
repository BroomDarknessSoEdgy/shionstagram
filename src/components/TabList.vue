<template>
    <div class="tablist" role="tablist">
        <a class="selected first-tab" role="tab">
            <span>Posts</span>
        </a>
        <a role="tab">
            <span>TAGGED</span>
        </a>
    </div>
</template>

<script>
export default {
  name: 'TabList',
  props: {
  }
}
</script>

<style scoped>
div {
    display: flex;
}

.tablist {
    border-top: 1px solid rgba(219, 219, 219, 1);
    align-items: center;
    justify-content: center;
    flex-direction: row;
}

a {
    cursor: pointer;
    height: 52px;
    justify-content: center;
    text-transform: uppercase;
    display: flex;
    flex-direction: row;
    text-decoration: none;
}

span {
    align-items: center;
    margin: auto;
}

.selected {
    border-top: 1px solid #262626;
}

.first-tab {
    margin-right: 60px;
}

</style>