<template>
  <div class="introduction row">
    <div class="description col-6">
      <div class="row">
        <div class="label col">
          {{ label1 }}
        </div>
        <div class="desc col">
          {{ desc1 }}
        </div>
      </div>
      <div class="row">
        <div class="label col">
          {{ label2 }}
        </div>
        <div class="desc col">
          {{ desc2 }}
        </div>
      </div>
    </div>
    <div class="image col-6">
      <img :src="image_url" alt="">
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
    label1: {
      default: '',
      type: String
    },
      desc1: {
      default: '',
      type: String
    },
    label2: {
      default: '',
      type: String
    },
      desc2: {
      default: '',
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.introduction {
  align-items: center;
  text-align: center;
  height: 60%;;
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
    font-size: 2.5rem;
    font-family: "8bitFontEn";
    .row {
      margin: 20px;
      margin-top: 0;
      .label {
        text-align: right;
        height: fit-content;
        padding-right: 20px
      }
      .desc {
        text-align: left;
        height: fit-content;
      }
    }
  }
}
@media screen and (min-width: 768px) {
  
}
@media screen and (max-width: 768px) {
  
}
</style>
