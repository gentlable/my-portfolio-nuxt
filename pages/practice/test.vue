<template>
  <div class="test">
    <div ref="image" class="move">
      <img class="image" src="/img/self-min.jpg" alt="">
    </div>
    <div ref="messageWindow" class="message-window">
      <div ref="message" v-show="windowStatus=='message'" class="message">
        message
      </div>
      <div ref="fight" v-show="windowStatus=='fight'" class="message">
        <div class="target choices" @click="attack">
          <span>* </span>
          <span>Go</span>
        </div>
      </div>
      <div ref="act" v-show="windowStatus=='act'" class="message">
        <div class="action choices" @click="attack">
          <span>* </span>
          <span>はなす</span>
        </div>
        <div class="action choices" @click="attack">
          <span>* </span>
          <span>たのむ</span>
        </div>
      </div>
      <div ref="item" v-show="windowStatus=='item'" class="message">
        <div class="item choices" @click="attack">
          <span>* </span>
          <span>コントローラー</span>
        </div>
      </div>
      <div ref="mercy" v-show="windowStatus=='mercy'" class="message">
        <div class="target choices" @click="attack">
          <span>* </span>
          <span>にがす</span>
        </div>
      </div>
    </div>
    <div class="command-container">
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
  return new Promise(resolve => {
    let amplitude = 16
    const interval =  setInterval(() => {
      if(amplitude < 0) {
        amplitude += 2
      } else if (amplitude > 0){
        amplitude -= 2
      } else {
        clearInterval(interval)
        resolve()
      }
      amplitude = -amplitude
      image.style.left = amplitude + "px"
    }, 100)
  })
}

// メッセージウィンドウの幅を変更
async function windowWidthChange(width) {
  return new Promise((resolve) => {
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
        resolve()
      }
    }, 25)
  })
}

// メッセージウィンドウの高さを変更
async function windowHeightChange(height) {
  return new Promise((resolve) => {
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
        resolve()
      }
    }, 25)
  })
}

// 敵の攻撃
async function enemyAttack() {
  await windowWidthChange(300)
  await windowHeightChange(250)
  await new Promise(resolve => setTimeout(resolve, 3000))
  await windowHeightChange(200)
  await windowWidthChange(600)
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
      windowStatus: 'message',
      goLife: 10,
      life: 20
    }
  },
  methods: {
    command(command) {
      this.windowStatus = command
    },
    selectTarget() {

    },
    selectAction() {

    },
    selectItem() {

    },
    selectMercy() {

    },
    async attack() {
      this.windowStatus = ''
      await shakeImage()
      await enemyAttack()
      this.windowStatus = 'message'
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
    width: 600px;
    height: 200px;
    z-index: 10;
    padding: 5px 10px;
    .message {
      color: white;
      font-family: '8bitFontEn';
      font-size: 24px;
      .choices {
        position: relative;
        margin-left: 40px;
        &:hover {
          &::before {
            content: url(/game/icon/heart_icon.png);
            position: absolute;
            left: -40px; 
          }
        }
      }
    }
  }
  .command-container {
    position: absolute;
    bottom: 50px;
  }
}
</style>