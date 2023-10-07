let Pets = [];
let LocalityPets = [];
let MouseX = 0;
let MouseY = 0;
let isMouseDown = false;
const DELAY = 100;
let testD = 0;
let testd = 1;
let STATE = {};
let GRAVITY = 0.025;

const dialogBox = document.createElement("div");
let bodyContainer = document.createElement("div");
bodyContainer.setAttribute("id", "theraplink-container");
// bodyContainer.innerHTML += `<div style="position: absolute; top: 0; left: 0; width: 128px; height: 128px; background: pink;"></div>`;
document.body.insertBefore(bodyContainer, document.body.lastChild);

function GetRandXY() {
  let width = 128;
  let height = 128;
  return [
    Math.random() * window.innerWidth - width,
    Math.random() * window.innerHeight - height,
  ];
}

const IMG_URL =
  "https://raw.githubusercontent.com/Thaddeusleewj/MindfulHacks_23/main/extension/images/";
// const IMG_URL =
//   "https://raw.githubusercontent.com/jx06T/PetPal__ChromeExtensions/main/images/";

const QleeTileMap = {
  0: [{ x: 0, y: 0 }],
  1: [
    { x: 0, y: 0 },
    // { x: -128, y: 0 },
    // { x: -256, y: 0 },
  ],
  2: [{ x: -512, y: -140 }],
  3: [{ x: 0, y: -130 }],
  4: [{ x: 0, y: -130 }],
};

class Qlee {
  constructor(x, y, size, id = null) {
    this.id = id;
    this.size = size;
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.d = Math.random() < 0.5 ? 1 : -1; // 1 for right, -1 for left
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
    qlee.classList.add("QLEE");
    qlee.style.width = `${this.width}px`;
    qlee.style.height = `${this.height}px`;
    qlee.style.left = `${this.x}px`;
    qlee.style.top = `${this.y}px`;
    qlee.style.pointerEvents = "auto";
    qlee.style.cursor = "context-menu";
    qlee.style.userSelect = "none";
    qlee.style.filter = "blur(0px) hue-rotate(245deg)";
    qlee.addEventListener("mousedown", (e) => {
      this.startDrag(e, this);
    });
    dialogBox.style.position = "absolute";
    dialogBox.style.top = `-175px`;
    dialogBox.style.left = `150px`;
    dialogBox.style.width = `300px`;
    dialogBox.style.height = `200px`;
    dialogBox.style.background = `pink`;
    dialogBox.style.zIndex = `1`;
    dialogBox.classList.add("hide");
    dialogBox.classList.add("optionGrp");
    let promptBox = document.createElement("div");
    promptBox.innerHTML = "hi";
    let inputDiv = document.createElement("div");
    inputDiv.style.display = "flex";
    inputDiv.style.marginTop = "auto";
    inputDiv.style.width = "100%";
    let inputBox = document.createElement("input");
    inputBox.classList.add("inputBox");
    let inputButt = document.createElement("button");
    inputButt.classList.add("submit");
    inputButt.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"  style="rotate: 45deg" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
</svg>`;
    inputDiv.appendChild(inputBox);
    inputDiv.appendChild(inputButt);
    dialogBox.appendChild(promptBox);
    dialogBox.appendChild(inputDiv);
    async function logMovies() {
      const response = await fetch("http://example.com/movies.json");
      const movies = await response.json();
      console.log(movies);
    }
    logMovies();

    qlee.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      if (e.button == 2) {
        this.changeState(1);
        dialogBox.classList.toggle("hide");
      }
    });

    if (bodyContainer.children.length > 1) {
      bodyContainer.innerHTML = "";
    }
    this.img = qlee;
    qlee.appendChild(dialogBox);
    bodyContainer.appendChild(qlee);
    this.interval;
    this.isDrag = false;
    this.offsetX = 0;
    this.offsetY = 0;
  }

  startDrag(e, qlee) {
    qlee.isDrag = true;
    qlee.offsetX = e.clientX - qlee.img.getBoundingClientRect().left;
    qlee.offsetY = e.clientY - qlee.img.getBoundingClientRect().top;
    qlee.changeState(4);
    e.target.style.zIndex = 999;

    document.addEventListener("mousemove", (e) => {
      qlee.dragItem(e, qlee);
    });
    document.addEventListener("mouseup", (e) => {
      qlee.stopDrag(e, qlee);
    });
  }

  dragItem(e, qlee) {
    if (qlee.isDrag) {
      qlee.img.style.left = e.clientX - qlee.offsetX + "px";
      qlee.y = e.clientY - qlee.offsetY;
    }
  }

  stopDrag(e, qlee) {
    qlee.isDrag = false;
    qlee.img.style.zIndex = "2"; // Reset the z-index
    document.removeEventListener("mousemove", qlee.drag);
    document.removeEventListener("mouseup", qlee.stopDrag);
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
      // this.img.style.left = this.x + "px";
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

function newQlee(data) {
  chrome.storage.local.get(["Pets"]).then((NPets) => {
    LocalityPets = NPets.Pets;
  });
  if (Pets.length > 1) {
    Pets = [];
  }
  Pets.push(new Qlee(...GetRandXY(), Number(data.size), data.id));
}

async function initialPet(count = 0) {
  const result = await chrome.storage.local.get(["isDeactivate"]);
  console.log(result);
  if (result.isDeactivate) {
    if (Pets.length > 1) {
      for (const Pet of Pets) {
        Pet.img.remove();
      }
      Pets = [];
      LocalityPets = [];
    }
    return true;
  }
  const resultP = await chrome.storage.local.get(["Pets"]);

  if (JSON.stringify(LocalityPets) == JSON.stringify(resultP.Pets)) return;
  if (!resultP.Pets) {
    resultP.Pets = [];
  }
  for (const P of resultP.Pets) {
    if (LocalityPets.find((item) => item.id == P.id) == undefined) {
      Pets.push(new Qlee(...GetRandXY(), Number(P.size), P.id));
    }
  }
  LocalityPets = resultP.Pets;

  if (count == 1) {
    const result = await chrome.storage.local.get(["invisible"]);
    // changeState({ sleeping: false, invisible: result.invisible });
  }
}

initialPet(1);
let LastTimestamp = 0;
function step(timestamp) {
  // if (timestamp - LastTimestamp > 50) {
  //   testD += testd;
  //   if (testD > 14) testd = -3;
  //   if (testD < -14) testd = 3;
  for (const Pet of Pets) {
    Pet.move();
    // Pet.set();
    Pet.draw();
  }
  // LastTimestamp = timestamp;
  // }
  window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);

chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  // console.log(request)
  // console.log(sender.tab ? "from " + sender.tab.url : "from the extension");
  // console.log(request.greeting)
  g = request.greeting;
  switch (g) {
    case "NewPet":
      newQlee(request.data);
      break;
    case "GetSTATE":
      sendResponse(STATE);
      return;
    case "ChangeSTATE":
      changeState(request.data);
      break;
    case "isDeactivate":
      for (const Pet of Pets) {
        Pet.img.remove();
      }
      Pets = [];
      // initialPet();
      break;
  }

  sendResponse({ ok: "ok" });
});

function removeQlee() {
  bodyContainer.innerHTML += ``;
}

// document.addEventListener("mousemove", (event) => {
//   MouseX = event.clientX;
//   MouseY = event.clientY;
// });

// document.addEventListener("mousedown", function (event) {
//   isMouseDown = true;
// });

// document.addEventListener("mouseup", function (event) {
//   isMouseDown = false;
// });
