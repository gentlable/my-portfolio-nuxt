<template>
  <div class="about-section">
    <section-title title="ABOUT" />
    <description desc="私について" />
    <introduction
      class="introduction"
      :image_url="selfImg"
      label="廣海真吾"
      desc="自己紹介：楽しい事大好きエンジニア
        大阪府貝塚市出身"
     />
  </div>
</template>

<script>
import SectionTitle from '~/components/atoms/text/SectionTitle.vue'
import Description from '~/components/atoms/text/Description.vue'
import Introduction from '~/components/atoms/card/Introduction.vue'
import selfImg from '~/assets/img/introduction/sam.jpg'

export default {
  components: {
    SectionTitle,
    Description,
    Introduction
  },
  data() {
    return {
      selfImg: selfImg
    }
  }
}
</script>

<style lang="scss" scoped>
.about-section {
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  .introduction {
    width: 80%;
    margin: auto;
    margin-top: 3rem;
    background: inherit;
  }
}

.col {
  margin: 6rem;
  margin-top: 4rem;
}
</style>
