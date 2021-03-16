<template>
  <div class="test">
    <div ref="image" class="move">
      <img class="image" src="/img/self-min.jpg" alt="">
    </div>
    <div ref="messageWindow" class="message-window">
      <div ref="message" v-if="windowStatus=='message'" class="message">
        message
      </div>
      <div ref="fight" v-if="windowStatus=='fight'" class="message">
        fignt
      </div>
      <div ref="act" v-if="windowStatus=='act'" class="message">
        act
      </div>
      <div ref="item" v-if="windowStatus=='item'" class="message">
        item
      </div>
      <div ref="mercy" v-if="windowStatus=='mercy'" class="message">
        mercy
      </div>
    </div>
    <div class="button-container">
      <button @click="command('fight')">
        たたかう
      </button>
      <button @click="command('act')">
        こうどう
      </button>
      <button @click="command('item')">
        アイテム
      </button>
      <button @click="command('mercy')">
        みのがす
      </button>
    </div>
  </div>
</template>

<script>
// 敵イメージ
let image = null
// メッセージウィンドウ
let messageWindow = null 

// 画像を揺らす
function shakeImage() {
  let amplitude = 16
  const interval =  setInterval(() => {
    if(amplitude < 0) {
      amplitude += 2
    } else if (amplitude > 0){
      amplitude -= 2
    } else {
      clearInterval(interval)
    }
    amplitude = -amplitude
    image.style.left = amplitude + "px"
  }, 100)
}

// メッセージウィンドウの幅を変更
function windowWidthChange(width) {
  const offsetWidth = messageWindow.offsetWidth
  let tmpWidth = offsetWidth
  const interval = setInterval(() => {
      messageWindow.style.width = tmpWidth + 'px'
    if (width < offsetWidth && width < tmpWidth) {
      tmpWidth -= 20
    } else if (offsetWidth < width && tmpWidth < width) {
      tmpWidth += 20
    } else {
      clearInterval(interval)
    }
  }, 25)
}
// メッセージウィンドウの高さを変更
function windowHeightChange(height) {
  const offsetHeight = messageWindow.offsetHeight
  let tmpHeight = offsetHeight
  const interval = setInterval(() => {
      messageWindow.style.height = tmpHeight + 'px'
    if (height < offsetHeight && height < tmpHeight) {
      tmpHeight -= 20
    } else if (offsetHeight < height && tmpHeight < height) {
      tmpHeight += 20
    } else {
      clearInterval(interval)
    }
  }, 25)
}
export default {
  mounted() {
    image =  this.$refs.image
    messageWindow = this.$refs.messageWindow
  },
  data() {
    return {
      status: {
        command: '',
        target: '',
        action: '',
        items: '',
        mercy: '',
        message: '',
      },
      windowStatus: 'message'
    }
  },
  methods: {
    command(command) {
      this.windowStatus = command
      // if (command === 'fight') {
      //   this.windowStatus = 
      // } else if (command === 'act') {

      // } else if (command === 'item') {

      // } else if (command === 'mercy') {

      // }
    },
    selectTarget() {

    },
    selectAction() {

    },
    selectItem() {

    },
    selectMercy() {

    },
    attack() {
      shakeImage()
    },
    attackWindow() {
      windowWidthChange(800)
      windowHeightChange(200)
    },
    defaultWindow() {
      windowWidthChange(600)
      windowHeightChange(200)
    },
    shootingWindow() {
      windowWidthChange(300)
      windowHeightChange(300)
    },
  }
}
</script>

<style lang="scss" scoped>
.test {
  background: black;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .move {
    position: relative;
    bottom: 130px;
    .image {
      width: 200px;
    }
  }
  .message-window {
    background: black;
    position: absolute;
    bottom: 140px;
    border: 7px solid white;
    width: 800px;
    height: 200px;
    z-index: 10;
    .message {
      color: white;
      font-family: '8bitFontEn';
      font-size: 24px;
    }
  }
  .button-container {
    position: absolute;
    bottom: 50px;
  }
}
</style>