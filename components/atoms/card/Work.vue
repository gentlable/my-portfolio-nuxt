<template>
  <div class="work card">
    <div class="image">
      <a :href="link">
        <img :src="image_url" alt="">
      </a>
    </div>
    <div class="description">
      <p class="label">{{ label }}</p>
      <p class="desc">{{ desc }}</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    image_url: {
      default: '',
      type: String
    },
    label: {
      default: '',
      type: String
    },
    link: {
      default: '',
      type: String
    },
    desc: {
      default: '',
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.work {
  font-size: 1rem;
  align-items: center;
  text-align: center;
  height: 400px;
  .image {
    height: 80%;
    img {
      height: 100%;
      width: auto;
      margin: auto;
    }
  }
  .description {
    margin-top: 1rem;
  }
}
</style>
