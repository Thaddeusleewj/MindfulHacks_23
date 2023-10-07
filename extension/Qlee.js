class Qlee {
  constructor(x, y, size, id = null) {
    this.id = id;
    this.size = size;
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.d = 1; // 1 for right, -1 for left
    this.speed = 0.35;

    this.destination = [x, y];
    this.distance = 0;
    this.timer = Math.random() * 6 + 4;
    /*
    0 Idle
    1 Move
    2 Sit
    3 Falling
    4 Dragging
    */
    this.state = 0;
    this.touchM = 0;

    const qlee = document.createElement("div");
    qlee.style.position = "absolute";
    qlee.style.background = `url("${IMG_URL}spritesheet.png") 0px 0px`;
    qlee.style.zIndex = "2";
    this.width = 128;
    this.height = 128;
    qlee.style.width = `${this.width}px`;
    qlee.style.height = `${this.height}px`;
    qlee.style.left = `${this.x}px`;
    qlee.style.top = `${this.y}px`;
    qlee.style.pointerEvents = "auto";
    qlee.style.cursor = "context-menu";
    // qlee.style.userSelect = "none";
    qlee.style.filter = "blur(0px) hue-rotate(245deg)";
    this.img = qlee;
    qlee.addEventListener("mousedown", this.startDrag);
    if (bodyContainer.children.length > 0) {
      bodyContainer.innerHTML = "";
    }
    bodyContainer.appendChild(qlee);
    this.interval;
    this.isDrag = false;
    this.offsetX = 0;
    this.offsetY = 0;
  }

  startDrag(e) {
    console.log("START");
    this.isDrag = true;
    this.offsetX = e.clientX - e.target.getBoundingClientRect().left;
    this.offsetY = e.clientY - e.target.getBoundingClientRect().top;
    e.target.style.zIndex = 999;
    document.addEventListener("mousemove", this.dragItem);
    document.addEventListener("mouseup", this.stopDrag);
  }

  dragItem(e) {
    console.log("DRAGGING");
    if (this.isDrag) {
      this.img.style.left = e.clientX - this.offsetX + "px";
      this.img.style.top = e.clientY - this.offsetY + "px";
    }
  }

  stopDrag() {
    console.log("STOP");
    this.isDrag = false;
    this.img.style.zIndex = "2"; // Reset the z-index
    document.removeEventListener("mousemove", drag);
    document.removeEventListener("mouseup", stopDrag);
  }

  draw() {
    this.vy += GRAVITY;
    this.y += this.vy;
    if (this.y + this.height > window.innerHeight) {
      this.y = window.innerHeight - this.height;
      this.changeState(1);
      this.vy = 0;
    } else {
      this.changeState(3);
    }
    this.img.style.top = this.y + "px";
  }

  move() {
    if (this.state == 1) {
      // console.log(this.d);
      // console.log("Move");
      this.x += this.d * this.speed;
      this.img.style.left = this.x + "px";
    }
  }

  changeState(state, duration = 5) {
    if (this.state == state) return;
    if (this.d == 1) {
      this.img.style.transform = "rotateY(180deg)";
    } else {
      this.img.style.transform = "rotateY(0deg)";
    }
    this.state = state;
    let maxCount = QleeTileMap[this.state].length;
    let counter = 0;
    let animateSkin = () => {
      this.img.style.background = `url("${IMG_URL}spritesheet.png") ${
        QleeTileMap[this.state][Math.floor(counter) % maxCount]["x"]
      }px ${QleeTileMap[this.state][Math.floor(counter) % maxCount]["y"]}px`;
      counter += 0.01;
      if (counter > maxCount) {
        counter = 0;
      }
    };
    animateSkin();
    // this.interval = setInterval(animateSkin, 10);
    // setTimeout(() => {
    //   clearInterval(this.interval);
    //   this.interval = null;
    //   this.state = Math.floor(Math.random() * Object.keys(QleeTileMap).length);
    // }, duration * 1000);
  }
}
