<template>
  <div class="work">
    <div class="image">
      <a :href="link" target="_blank">
        <img :src="image_url" alt="">
      </a>
    </div>
    <div class="description">
      <p class="label">{{ label }}</p>
      <p class="desc">{{ desc }}</p>
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
    label: {
      default: '',
      type: String
    },
    link: {
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
  align-items: center;
  text-align: center;
  height: 400px;
  .image {
    height: 60%;
    width: fit-content;
    margin: auto;
    img {
      border-radius: 60px;
      height: 100%;
      width: auto;
    }
  }
  .description {
    margin-top: 1rem;
    font-family: '8bitFontEn';
    font-size: 1.5rem;
    .desc {
      white-space: pre-line;
    }
  }
}

@media screen and (min-width: 768px) {

}

@media screen and (max-width: 768px) {
.work {
  align-items: center;
  text-align: center;
  height: 250px;
  .image {
    height: 50%;
    width: fit-content;
    margin: auto;
    img {
      border-radius: 40px;
      height: 100%;
      width: auto;
    }
  }
  .description {
    margin-top: 1rem;
    font-family: '8bitFontEn';
    font-size: 1.25rem;
    .desc {
      white-space: pre-line;
    }
  }
}
}
</style>
