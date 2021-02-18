// 変数定義
let canvas, ctx;
let render, init;
let blob;

class AnimeBlob {
  constructor() {
    console.log("Bolb")
    this.points = [];
  }

  init() {
    console.log("blob.init()")

    // Pointを初期化
    for (let i = 0; i < this.numPoints; i++) {

      // 円形成点初期化
      let point = new Point(this.divisional * (i + 1), this);

      // point.acceleration = -1 + Math.random() * 2;
      this.push(point);
    }
  }

  // アニメーション制御
  render() {
    // console.log("render()")
    let canvas = this.canvas;
    let ctx = this.ctx;
    let position = this.position;
    let pointsArray = this.points;
    let radius = this.radius;
    let points = this.numPoints;
    let divisional = this.divisional;
    let center = this.center;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pointsArray[0].solveWith(pointsArray[points - 1], pointsArray[1]);

    let p0 = pointsArray[points - 1].position;
    let p1 = pointsArray[0].position;
    let _p2 = p1;

    ctx.beginPath();
    ctx.moveTo(center.x, center.y);
    ctx.moveTo((p0.x + p1.x) / 2, (p0.y + p1.y) / 2);

    for (let i = 1; i < points; i++) {

      pointsArray[i].solveWith(pointsArray[i - 1], pointsArray[i + 1] || pointsArray[0]);

      let p2 = pointsArray[i].position;
      var xc = (p1.x + p2.x) / 2;
      var yc = (p1.y + p2.y) / 2;
      ctx.quadraticCurveTo(p1.x, p1.y, xc, yc);
      // ctx.lineTo(p2.x, p2.y);

      ctx.fillStyle = '#000000';
      // ctx.fillRect(p1.x-2.5, p1.y-2.5, 5, 5);

      p1 = p2;
    }

    var xc = (p1.x + _p2.x) / 2;
    var yc = (p1.y + _p2.y) / 2;
    ctx.quadraticCurveTo(p1.x, p1.y, xc, yc);
    // ctx.lineTo(_p2.x, _p2.y);

    // ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.strokeStyle = '#000000';
    // ctx.stroke();

    /*
        ctx.fillStyle = '#000000';
        if(this.mousePos) {
          let angle = Math.atan2(this.mousePos.y, this.mousePos.x) + Math.PI;
          ctx.fillRect(center.x + Math.cos(angle) * this.radius, center.y + Math.sin(angle) * this.radius, 5, 5);
        }
    */
    requestAnimationFrame(this.render.bind(this));
  }

  push(item) {
    if (item instanceof Point) {
      this.points.push(item);
    }
  }

  // 色設定
  set color(value) {
    this._color = value;
  }
  get color() {
    return this._color || 'rgb(0,255,255)';
  }

  set canvas(value) {
    if (value instanceof HTMLElement && value.tagName.toLowerCase() === 'canvas') {
      this._canvas = canvas;
      this.ctx = this._canvas.getContext('2d');
    }
  }
  get canvas() {
    return this._canvas;
  }

  set numPoints(value) {
    if (value > 2) {
      this._points = value;
    }
  }
  get numPoints() {
    return this._points || 32;
  }

  set radius(value) {
    if (value > 0) {
      this._radius = value;
    }
  }
  get radius() {
    return this._radius || 150;
  }

  set position(value) {
    if (typeof value == 'object' && value.x && value.y) {
      this._position = value;
    }
  }
  get position() {
    return this._position || { x: 0.5, y: 0.5 };
  }

  get divisional() {
    return Math.PI * 2 / this.numPoints;
  }

  get center() {
    return { x: this.canvas.width * this.position.x, y: this.canvas.height * this.position.y };
  }

  set running(value) {
    this._running = value === true;
  }
  get running() {
    return this.running !== false;
  }}


// 円形成点のパラメータ設定
class Point {
  constructor(azimuth, parent) {
    console.log("Point")
    this.parent = parent;
    this.azimuth = Math.PI - azimuth;
    this._components = {
      x: Math.cos(this.azimuth),
      y: Math.sin(this.azimuth)
    };

    // 加速度初期値
    this.acceleration = -0 + Math.random() * 0;
  }

  solveWith(leftPoint, rightPoint) {
    this.acceleration = (-0.3 * this.radialEffect + (leftPoint.radialEffect - this.radialEffect) + (rightPoint.radialEffect - this.radialEffect)) * this.elasticity - this.speed * this.friction;
  }

  // 加速度
  set acceleration(value) {
    if (typeof value == 'number') {
      this._acceleration = value;
      this.speed += this._acceleration * 2;
    }
  }
  get acceleration() {
    return this._acceleration || 0;
  }

  // 速度
  set speed(value) {
    if (typeof value == 'number') {
      this._speed = value;
      this.radialEffect += this._speed * 5;
    }
  }
  get speed() {
    return this._speed || 0;
  }

  // 半径方向の速度？
  set radialEffect(value) {
    if (typeof value == 'number') {
      this._radialEffect = value;
    }
  }
  get radialEffect() {
    return this._radialEffect || 0;
  }

  // 点の位置
  get position() {
    return {
      x: this.parent.center.x + this.components.x * (this.parent.radius + this.radialEffect),
      y: this.parent.center.y + this.components.y * (this.parent.radius + this.radialEffect) };

  }

  get components() {
    return this._components;
  }

  // 塑性定数
  set elasticity(value) {
    if (typeof value === 'number') {
      this._elasticity = value;
    }
  }
  get elasticity() {
    return this._elasticity || 0.001;
  }

  // 摩擦係数
  set friction(value) {
    if (typeof value === 'number') {
      this._friction = value;
    }
  }
  get friction() {
    return this._friction || 0.0085;
  }}


/*
 * 実処理開始
 */

// blobインスタンス生成
blob = new AnimeBlob()

// 半径設定
blob.radius = 300

// 初期色設定
blob.color = 'rgb(100,100,100)'

// 近似円形成点数設定
blob.numPoints = 64


// 初期表示
init = function () {
  console.log("init function")

  // canvasタグ作成
  canvas = document.createElement('canvas');
  canvas.setAttribute('touch-action', 'none');

  document.body.appendChild(canvas);

  // canvasリサイズ
  let resize = function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  window.addEventListener('resize', resize);
  resize();

  // 初期設定
  let oldMousePoint = { x: 0, y: 0 };

  // 初期設定
  let hover = false;

  // マウスが動いた時のイベント制御
  let mouseMove = function (e) {

    // 円中心
    let pos = blob.center;

    // 中心からマウス位置へのベクトル
    let diff = { x: e.clientX - pos.x, y: e.clientY - pos.y };

    // 中心からマウス位置への距離
    let dist = Math.sqrt(diff.x * diff.x + diff.y * diff.y);

    // 角度
    let angle = null;

    blob.mousePos = { x: pos.x - e.clientX, y: pos.y - e.clientY };

    // マウスが円内にある時の処理
    if (dist < blob.radius && hover === false) {
      // ベクトル設定
      let vector = { x: e.clientX - pos.x, y: e.clientY - pos.y };

      // 角度設定
      angle = Math.atan2(vector.y, vector.x);
      hover = true;

      // 色変化処理
      let color = 0;
      blob.color = '#77FF00'

    // マウスが円外にある時の処理
    } else if (dist > blob.radius && hover === true) {
      let vector = { x: e.clientX - pos.x, y: e.clientY - pos.y };
      angle = Math.atan2(vector.y, vector.x);
      hover = false;
      blob.color = null;
    }

    if (typeof angle == 'number') {

      let nearestPoint = null;

      // アニメーションイベントを発火できる距離?
      let distanceFromPoint = 100;

      //
      blob.points.forEach(point => {

        // メモ point.azimuth ← Math.PI - (blob.divisional * (i + 1))
        // メモ 弧 blob.divisional ← Math.PI * 2 / this.numPoints

        // マウスの最近点算出
        if (Math.abs(angle - point.azimuth) < distanceFromPoint) {
          // console.log(point.azimuth, angle, distanceFromPoint);
          nearestPoint = point;
          distanceFromPoint = Math.abs(angle - point.azimuth);
        }
      })

      // マウス最近点の動きを計算
      if (nearestPoint) {
        // 微分距離ベクトル
        let strength = { x: oldMousePoint.x - e.clientX, y: oldMousePoint.y - e.clientY };
        // ベクトルの大きさを力とする
        strength = Math.sqrt(strength.x * strength.x + strength.y * strength.y) * 10;
        // 力の最大値
        let maxStrength = 200;
        if (strength > maxStrength) strength = maxStrength;
        nearestPoint.acceleration = strength / 100 * (hover ? -1 : 1);
      }
    }

    // マウス位置を追従
    oldMousePoint.x = e.clientX;
    oldMousePoint.y = e.clientY;
  };

  // マウス位置に変化があったときにイベントを呼ぶように
  // window.addEventListener('mousemove', mouseMove);
  window.addEventListener('pointermove', mouseMove);

  blob.canvas = canvas;
  blob.init();
  blob.render();
};

init();
