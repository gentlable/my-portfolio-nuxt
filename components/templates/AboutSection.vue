<template>
  <div class="about-section">
    <section-title title="About" class="bg-white"/>
    <div class="window outside">
      <!--
      <description desc="Name: Go" class="col" />
      <description desc="Skill: Nuxt.Js" class="col" />
      -->
      <introduction
        :image_url="selfImg"
        label1="Name:"
        desc1="Go"
        label2="Skill:"
        desc2="Nuxt Java"
      />
      <div class="window inside">
        <div class="message">
          * Howdy!<br>
          * I'm Go!<br>
          * Welcome My Page!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from '~/components/atoms/text/SectionTitle.vue'
import Description from '~/components/atoms/text/Description.vue'
import Introduction from '~/components/atoms/card/Introduction.vue'
import selfImg from '~/assets/img/introduction/self-min.jpg'

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
  position: relative;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 1180px;
  margin: auto;
  .window {
    border-radius: 5px;
    border: black 5px solid;
  }
  .outside {
    width: 95%;
    height: 94%;
    margin: 3% 2.5%;
    position: absolute;
    top: 0;
    z-index: -10;
    .inside {
      width: 98%;
      height: 30%;
      margin: auto;
      .message {
        font-family: '8bitFontEn';
        font-size: 2rem;
        padding: 5px 15px;
        line-height: 3.5rem;
      }
    }
  }
  .section-title {
    margin: 0 auto;
  }
  .introduction {
    width: 80%;
    margin: auto;
    margin-top: 3rem;
    background: inherit;
  }
}

@media screen and (min-width: 768px) {
.about-section {
  align-items: center;
  justify-content: center;
  height: 100vh;
  .section-title {
    padding-top: 1rem;
  }
  .introduction {
    width: 80%;
    margin: auto;
    margin-top: 3rem;
    background: inherit;
  }
}
}

@media screen and (max-width: 768px) {
.about-section {
  align-items: center;
  justify-content: center;
  height: 100vh;
  .introduction {
    width: 80%;
    margin: auto;
    margin-top: 3rem;
    background: inherit;
  }
}
}
</style>
