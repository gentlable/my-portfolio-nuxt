<template>
  <div class="works-section bg-black">
    <section-title title="Works" />
    <div class="row">
      <work
        class="col"
        :image_url="xfaceImg"
        label="x-faCE HP"
        link="https://eggsystem.co.jp/"
        desc=
          "Coding
          Nuxt"
      />
      <work
        class="col"
        :image_url="renkohImg"
        label="renkohsasaki HP"
        link="https://renkohsasaki.com/"
        desc=
          "Design Coding
          Laravel"
      />
    </div>
  </div>
</template>

<script>
import SectionTitle from '~/components/atoms/text/SectionTitle.vue'
import Description from '~/components/atoms/text/Description.vue'
import Work from '~/components/atoms/card/Work.vue'
import xfaceImg from '~/assets/img/works/x-face_logo.png'
import renkohImg from '~/assets/img/works/renkohsasaki_asobi.png'


export default {
  components: {
    SectionTitle,
    Description,
    Work
  },
  data() {
    return {
      xfaceImg: xfaceImg,
      renkohImg: renkohImg
    }
  }
}
</script>

<style lang="scss" scoped>
.works-section {
  align-items: center;
  justify-content: center;
  height: 100vh;
  .section-title {
    margin: 0 auto;
  }
  .row {
    margin-top: 15vh;
    height: 70vh;
  }
}

@media screen and (min-width: 768px) {

}

@media screen and (max-width: 768px) {
.works-section {
  .section-title {
  }
  .row {
    flex-direction: column;
    margin-top: 5vh;
    height: 80vh;
  }
}

}

</style>
