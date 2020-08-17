<template>
  <div class="title-section">
    <div class="bg-img">
      <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="100%" id="blobSvg">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color: rgb(243, 243, 243);"></stop>
            <stop offset="100%" style="stop-color: rgb(219, 219, 219);"></stop>
          </linearGradient>
        </defs>
        <path id="blob" d="M428,302Q430,354,391.5,391Q353,428,301.5,456.5Q250,485,192,467.5Q134,450,86.5,411Q39,372,27.5,311Q16,250,28.5,189.5Q41,129,98,107.5Q155,86,202.5,46.5Q250,7,302.5,37.5Q355,68,404.5,100Q454,132,440,191Q426,250,428,302Z" fill="url(#gradient)"></path>
      </svg>
    </div>
    <hero />
    <sub-title />
    <div class="button">
      <a href="#">
        <button class="btn" type="button" name="button" onClick="ga('send', 'event', 'sp', 'tel', 'test');">GAテスト用ボタン</button>
      </a>
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
.title-section {
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.bg-img {
  position: absolute;
  width: 25%;
  z-index: -99;
  left: 0;
  right: 0;
  margin: auto;
  margin-top: 21vh;
}
</style>
