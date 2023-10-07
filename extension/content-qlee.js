// let bodyContainer = document.createElement("div");
// bodyContainer.setAttribute("id", "theraplink-container");
// document.body.insertBefore(bodyContainer, document.body.lastChild);

// function GetRandXY() {
//   let width = 140;
//   let height = 160;
//   return [
//     Math.random() * (window.innerWidth - width) + width / 2,
//     Math.random() * (window.innerHeight - height) + height / 2,
//   ];
// }
const IMG_URL = ""

class Qlee {
  constructor(x, y, size, id = null) {
    this.id = id;
    this.size = size;
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.d = 0; // Direction
    this.speed = 6.5 - this.size / 130;

    this.destination = [x, y];
    this.distance = 0;
    this.timer = Math.random() * 6 + 4;
    this.state = 0;
    this.touchM = 0;

    const wrapper = document.createElement("div");
    const qlee = document.createElement("div");
    wrapper.style.pointerEvents = "auto";
    wrapper.style.width = size + "px";
    wrapper.style.height = size + "px";
    wrapper.style.position = "fixed";
    wrapper.style.left = x + "px";
    wrapper.style.top = y + "px";
    wrapper.style.filter = "blur(0px) hue-rotate(245deg)";

    qlee.style.position = "absolute";
    qlee.style.background =
      'url("./images/spritesheet.png") 0px 0px';
    qlee.style.zIndex = "2";
    qlee.style.width = "128px";
    qlee.style.height = "130px";
    qlee.style.left = "-64px";
    qlee.style.top = "-128px";
    qlee.style.transform = "translate(661.391px, 715.2px) scaleX(1)";
    qlee.style.pointerEvents = "auto";
    qlee.style.cursor = "context-menu";
    qlee.style.userSelect = "none";
    wrapper.appendChild(qlee);
    this.img = wrapper;
    bodyContainer.appendChild(qlee);
  }
}

function newQlee(data) {
  new Qlee(...GetRandXY(), Number(data.size), data.id);
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
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
      ChangeSTATE(request.data);
      break;
    case "isDeactivate":
      initialPet();
      break;
  }
  console.log("hi");
  sendResponse({ ok: "ok" });
});
