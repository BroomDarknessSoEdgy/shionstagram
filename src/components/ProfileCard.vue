<template>
    <div class="profile-card-wrapper">
        <Avatar :src="avatarSrc" />
        <section>
            <div class="fist-line">
                <h2>{{name}}</h2>
                <button class="follow-button">Follow</button>
                <button class="context-button">...</button>
            </div>
            <ul class="second-line">
                <li class="first-li">{{stat1}}</li>
                <li class="second-li">{{stat2}}</li>
                <li>{{stat3}}</li>
            </ul>
            <div class="description">{{description}}</div>
        </section>
    </div>
</template>

<script>
import Avatar from './Avatar'

export default {
  name: 'ProfileCard',
  components: {
      Avatar,
  },
  props: {
      avatarSrc: String,
      name: String,
      stat1: String,
      stat2: String,
      stat3: String,
      description: String,
  }
}
</script>

<style scoped>
div {
    display: flex;
}

.profile-card-wrapper {
    flex-direction: row;
    align-items: stretch;
    box-sizing: border-box;
    flex-shrink: 0;
    max-width: 935px;
    margin: auto;
    margin-bottom: 44px;
}

section {
    display: flex;
    flex-basis: 30px;
    flex-grow: 2;
    flex-direction: column;
    padding: 0;
}

h2 {
    font-weight: 300;
    font-size: 28px;
    line-height: 32px;
    margin: -5px, 0, -6px;
    white-space: nowrap;
    margin: 0 0 4px;
}

.first-line {
    align-items: center;
    flex-direction: row;
    margin-bottom: 20px;
    white-space: nowrap;
}

.second-line {
    display: flex;
    align-items: center;
    flex-direction: row;
    white-space: nowrap;
    margin-bottom: 20px;
    list-style: none;
    padding: 0;
}

.first-li {
    margin-right: 40px;
}

.second-li {
    margin-right: 40px;
}

button {
    font-size: 14px;
    line-height: 18px;
    appearance: none;
    padding: 5px 9px;
    background: 0 0;
    border-radius: 4px;
    margin: 0;
}

.follow-button {
    margin-left: 20px;

}

.context-button {
    margin-left: 5px;
    padding: 8px;
}

.description {
    flex-grow: 1;
}
</style>


