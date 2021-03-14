<template>
  <div class="index">
    <canvas
      ref="myCanvas"
      id="myCanvas"
      width="480"
      height="320"
    ></canvas>
  </div>
</template>

<script>
import axios from 'axios'
// カンバスを格納
let canvas = null
// コンテキストを格納
let ctx = null
// ボール位置を格納
let x = 400
let y = 150
// ボールの位置変位を格納
let dx = 1;
let dy = 1;
// ボール径
const BALL_RADIUS = 5;
// パドルサイズ
const PADDLE = {
  WIDTH: 75,
  HEIGHT: 10
}
// パドルの座標
let paddleX = 0
let paddleY = 0

// 壊すブロック群
let brickRowCount = 1
let brickColumnCount = 1
let brickWidth = 75
let brickHeight = 20
let brickPadding = 10
let brickOffsetTop = 30
let brickOffsetLeft = 30

// キーボードのフラグ
let rightPressed = false
let leftPressed = false

// 壊すブロック
let bricks = []

// スコア
let score = 0

// ライフ
let lives = 3

// 
let interval = null
export default {
  components: {
  },
  mounted() {
    window.addEventListener('keydown', this.keyDownHandler, false)
    window.addEventListener('keyup', this.keyUpHandler, false)
    document.addEventListener("mousemove", this.mouseMoveHandler, false)
    // カンバスセット
    canvas = this.$refs.myCanvas
    // 2D描画コンテキスト
    ctx = canvas.getContext("2d")

    // ボール初期化
    // x = canvas.width / 2
    // y = canvas.height - 130

    // パドル初期化
    paddleX = (canvas.width + PADDLE.WIDTH) / 2
    paddleY = canvas.height - 30

    // 壊すブロックの配列を生成
    for(let c = 0; c < brickColumnCount; c++) {
      bricks[c] = [];
      for(let r = 0; r < brickRowCount; r++) {
        bricks[c][r] = {x: 0, y: 0, status: 1};
      }
    }

    // 画面描写繰り返し
    // interval = setInterval(() => {
    //   this.draw()
    // }, 10);

    this.draw()
  },
  destroy() {
    window.removeEventListener('keydown', this.keyDownHandler, false)
    window.removeEventListener('keyup', this.keyUpHandler, false)
    clearInterval(interval)
  },
  methods: {
    // 画面全体を描写
    draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      this.drawObject()
      this.drawPaddle()

      // ボールの動き制御
      if(x + dx < BALL_RADIUS || x + dx > canvas.width - BALL_RADIUS) {
        dx = -dx
      }

      if(y + dy < BALL_RADIUS) {
        dy = -dy
      // パドル衝突
      } else if (y + dy > paddleY - BALL_RADIUS && y + dy < paddleY + PADDLE.HEIGHT + BALL_RADIUS) {
        if(x + dx > paddleX - BALL_RADIUS && x + dx < paddleX + PADDLE.WIDTH - BALL_RADIUS) {
          dy = -Math.abs(dy)
        }
      // 画面下にタッチ
      } else if (y + dy > canvas.height - BALL_RADIUS) {
        alert("MISS");
        lives--
        if(!lives) {
          alert('GAME OVER')
          document.location.reload();
          clearInterval(interval);          
        }
        x = 200
        y = 200
        paddleX = (canvas.width-PADDLE.WIDTH)/2
      }
      x += dx
      y += dy

      // パドルの動き制御
      if(paddleX > 0 && leftPressed) {
        paddleX -= 5
      }
      if(paddleX < canvas.width - PADDLE.WIDTH && rightPressed) {
        paddleX += 5
      }

      this.drawBricks()
      this.drawScore()
      this.drawLives()
      this.collisionDetection()

      if(score === brickColumnCount * brickRowCount) {
        alert("GAME CLEAR");
        clearInterval(interval);
      }
      requestAnimationFrame(this.draw)
    },
    // 画面全体を描写
    drawObject() {
      ctx.beginPath();
      ctx.arc(x, y, BALL_RADIUS, 0, Math.PI*2);
      ctx.fillStyle = "#41E0FF";
      ctx.fill();
      ctx.strokeStyle = "#1C1C1C";
      ctx.stroke();
      ctx.closePath();
    },
    // パドルを描写
    drawPaddle() {
      ctx.beginPath();
      ctx.rect(paddleX, paddleY, PADDLE.WIDTH, PADDLE.HEIGHT);
      ctx.fillStyle = "#41E0FF";
      ctx.fill();
      ctx.strokeStyle = "#1C1C1C";
      ctx.stroke();
      ctx.closePath();
    },
    // ブロックを描写
    drawBricks() {
      for(let c = 0; c < brickColumnCount; c++) {
        for(let r = 0; r < brickRowCount; r++) {
          let brickX = (c * (brickWidth+brickPadding)) + brickOffsetLeft;
          let brickY = (r * (brickHeight+brickPadding)) + brickOffsetTop;
          bricks[c][r].x = brickX;
          bricks[c][r].y = brickY;
          if(bricks[c][r].status) {
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            ctx.fillStyle = "#41E0FF";
            ctx.fill();
            ctx.strokeStyle = "#1C1C1C";
            ctx.stroke();
            ctx.closePath();
          }
        }
      }
    },
    // ブロックの衝突検知関数
    collisionDetection() {
      for(let c = 0; c < brickColumnCount; c++) {
        for(let r = 0; r < brickRowCount; r++) {
          let b = bricks[c][r]
          if(b.status) {
            if(x > b.x - BALL_RADIUS
              && x < b.x + brickWidth + BALL_RADIUS
              && y > b.y - BALL_RADIUS
              && y < b.y + brickHeight + BALL_RADIUS
            ) {
              dy = -dy
              b.status = 0
            }
          }
        }
      }
    },
    // スコア描写
    drawScore() {
      score = 0
      for(let c = 0; c < brickColumnCount; c++) {
        for(let r = 0; r < brickRowCount; r++) {
          score += 1 - bricks[c][r].status
        }
      }
      ctx.font = '16px Arial'
      ctx.fillStyle = "#000000"
      ctx.fillText("Score: " + score, 8, 20)
    },
    // ライフ描写
    drawLives() {
      ctx.font = '16px Arial'
      ctx.fillStyle = "#000000"
      ctx.fillText("Lives: " + lives, canvas.width - 65, 20)
    },
    keyDownHandler(e) {
      if(e.key === 'ArrowLeft' || e.key === 'a') {
        leftPressed = true;
      } else if (e.key === 'ArrowRight' || e.key === 'd'){
        rightPressed = true;
      }
    },
    keyUpHandler(e) {
      if(e.key === 'ArrowLeft' || e.key === 'a') {
        leftPressed = false;
      } else if (e.key === 'ArrowRight' || e.key === 'd'){
        rightPressed = false;
      }
    },
    mouseMoveHandler(e) {
      let relativeX = e.clientX - canvas.offsetLeft
      if(relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - PADDLE.WIDTH / 2
      }
    }
  }
}
</script>

<style lang="scss" scoped>
* { 
  padding: 0;
  margin: 0;
}
canvas {
  background: #eee;
  display: block;
  margin: 30px auto;
}
</style>
