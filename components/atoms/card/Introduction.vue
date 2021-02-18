<template>
  <div class="introduction row">
    <div class="image col-4">
      <img :src="image_url" alt="">
    </div>
    <div class="description col-8">
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
      desc: {
      default: '',
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.introduction {
  font-size: 1rem;
  align-items: center;
  text-align: center;
  height: 400px;
  .image {
    height: 80%;
    vertical-align: middle;
    img {
      display: block;
      height: 80%;
      width: auto;
      margin: auto;
      border-radius: 100%;
    }
  }
  .description {
    margin-top: 1rem;
    .desc {
      white-space: pre-wrap;
    }
  }
}
</style>
