<template>
  <div class="work card">
    <div class="image">
      <img :src="image_url" alt="">
    </div>
    <p class="label">{{ label }}</p>
    <p class="desc">{{ desc }}</p>
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
.work {
  font-size: 1rem;
  align-items: center;
  text-align: center;
  height: 500px;
}

.image {
  height: 60%;
  img {
    height: 100%;
    width: auto;
    margin: auto;
  }
}
</style>
