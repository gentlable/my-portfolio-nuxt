<template>
  <div class="index">
    <div id="p5Canvas">
    </div>
  <!--
    <canvas
      ref="myCanvas"
      id="myCanvas"
      width="480"
      height="320"
    ></canvas>
  -->
  </div>
</template>

<script>
let status = {
  command: 0
}


export default {
  mounted() {
  const script = function (p5) {
    // 移動速度（変位）
    let speed = 2
    // x位置
    let posX = 0

    // instance modeで設定
    p5.setup = _ => {
      // canvas作成(x, y)
      var canvas = p5.createCanvas(600, 500)
      // canvasを特定の要素に設置
      canvas.parent("p5Canvas")
      // 楕円作成(中心x, 中心y, x径, y径,)
      // p5.ellipse(p5.width / 2, p5.height / 2, 100, 100);
    }

    p5.draw = _ => {
      // 背景色
      p5.background(0)

      // コマンドパレット表示
      p5.push()
      p5.translate(0, p5.height / 2)
      p5.ellipse(posX, y, 100, 50)
      p5.pop()
      }
    }
  const P5 = require('p5')
  new P5(script)
  
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.index {
  display: flex;
  justify-content: center;
}
</style>