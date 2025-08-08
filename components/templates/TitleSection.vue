<template>
  <div class="title-section">
    <hero class="black"/>
  </div>
</template>

<script lang="ts">
import Hero from '~/components/atoms/text/Hero.vue'
import SubTitle from '~/components/atoms/text/SubTitle.vue'

export default {
  components: {
    Hero
  }
}
</script>

<style lang="scss" scoped>
.title-section {
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url("/img/firstview_edited-min.png");
  background-repeat: no-repeat;
  background-size: cover;
  .hero {
    margin: 0 auto;
  }
}

@media screen and (min-width: 768px) {
.title-section {
  background-position: center bottom 65%;
  .hero {
    padding-top: 40vh;
  }
}
}
@media screen and (max-width: 768px) {
.title-section {
  background-position: center center;
  .hero {
    padding-top: 80vh;
  }
}
}
</style>
