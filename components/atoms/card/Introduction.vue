<template>
  <div class="introduction row">
    <div class="image col">
      <img :src="image_url" alt="">
    </div>
    <div class="description col">
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
  height: 60%;
  flex-direction: row-reverse;
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
.introduction {
  .image {
    img {
    }
  }
  .description {
    .row {
      .label {
      }
      .desc {
      }
    }
  }
}
}
@media screen and (max-width: 768px) {
.introduction {
  display: block;
  height: 60%;
  .image {
    height: 55%;
    img {
      height: 80%;
    }
  }
  .description {
    font-size: 1.75rem;
    .row {
      margin: 0;
      .label {
      }
      .desc {
      }
    }
  }
}
}
</style>
