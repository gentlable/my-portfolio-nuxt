<template>
  <div class="works-section">
    <section-title title="Apps" />
    <div class="row">
      <work
        class="col"
        :image_url="actionRecordImg"
        label="ActionRecord"
        link="https://actionrecord-55322.web.app/"
        desc=
          "Design Coding
          Nuxt"
      />
    </div>
  </div>
</template>

<script>
import SectionTitle from '~/components/atoms/text/SectionTitle.vue'
import Description from '~/components/atoms/text/Description.vue'
import Work from '~/components/atoms/card/Work.vue'
import actionRecordImg from '~/assets/img/works/ActionRecord_title.png'

export default {
  components: {
    SectionTitle,
    Work
  },
  data() {
    return {
      actionRecordImg: actionRecordImg
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
    margin: auto;
    padding-top: 20px;
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
