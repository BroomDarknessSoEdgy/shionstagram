<template>
    <nav>
      <div class="header-content">
        <div class="site-logo">
            <div>
              Shionstagram
            </div>
          </div>
        <div class="site-fake-search">
          <input type="text" placeholder="Search"/>
        </div>
        <div class="site-icon-nav">Icons</div>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'SiteHeader',
  props: {}
}
</script>

<style scoped>
div {
  display: flex;
}

nav {
  height: 54px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
}

.header-content {
  display: flex;
  padding: 0 20px;
  width: 100%;
  max-width: 975px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto;
}

.site-logo {
  flex-grow: 1;
}

.site-fake-search {
  flex-grow: 0;
  flex-shrink: 1;
  width: 215px;
}

.site-icon-nav {
  flex-grow: 1;
  justify-content: flex-end;
  flex: 1 0 0%;
  flex-wrap: wrap;
}
</style>