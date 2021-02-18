<template>
  <div class="works-section">
    <section-title title="WORKS" />
    <description desc="制作の記録です。" />
    <div class="row">
      <work
        class="col"
        :image_url="xfaceImg"
        label="株式会社エッグシステムHP製作"
        link="https://eggsystem.co.jp/"
        desc="コーディング"
      />
      <work
        class="col"
        :image_url="connectImg"
        label="マッチングサービスCONNECT製作"
        link="https://connect-b90ab.uc.r.appspot.com/"
        desc="デザイン・コーディング"
      />
    </div>
    <div class="row">
      <work
        class="col"
        :image_url="xfaceImg"
        label="ActionRecord"
        link="https://actionrecord-55322.web.app/"
        desc="アプリ制作"
      />
    </div>
  </div>
</template>

<script>
import SectionTitle from '~/components/atoms/text/SectionTitle.vue'
import Description from '~/components/atoms/text/Description.vue'
import Work from '~/components/atoms/card/Work.vue'
import xfaceImg from '~/assets/img/works/top_pc.jpg'
import connectImg from '~/assets/img/works/connect.png'


export default {
  components: {
    SectionTitle,
    Description,
    Work
  },
  data() {
    return {
      xfaceImg: xfaceImg,
      connectImg: connectImg
    }
  }
}
</script>

<style lang="scss" scoped>
.works-section {
  background: #e6e7ee;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.col {
  margin: 3rem;
  margin-top: 4rem;
}
</style>
