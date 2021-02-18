<template>
  <div class="">
    <div class="card bg-primary shadow-soft text-center border-light">
      <nuxt-link to="/test">
        testページへ
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Hero from '~/components/atoms/text/Hero.vue'
import SubTitle from '~/components/atoms/text/SubTitle.vue'

export default {
  components: {
    Hero,
    SubTitle
  }
}
</script>

<style lang="scss" scoped>
.card {
  width: 600px;
  margin: auto;
  margin-bottom: 200px;
}
</style>
