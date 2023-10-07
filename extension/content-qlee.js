let bodyContainer = document.createElement("div");
bodyContainer.setAttribute("id", "theraplink-container");
document.body.insertBefore(bodyContainer, document.body.lastChild);

function GetRandXY() {
  let width = 140;
  let height = 160;
  return [
    Math.random() * (window.innerWidth - width) + width / 2,
    Math.random() * (window.innerHeight - height) + height / 2,
  ];
}

const IMG_URL =
  "https://raw.githubusercontent.com/Thaddeusleewj/MindfulHacks_23/main/extension/images/";
// const IMG_URL =
//   "https://raw.githubusercontent.com/jx06T/PetPal__ChromeExtensions/main/images/";

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
    qlee.style.background = `url("${IMG_URL}spritesheet.png") 0px 0px`;
    qlee.style.zIndex = "2";
    qlee.style.width = "128px";
    qlee.style.height = "130px";
    qlee.style.left = "-64px";
    qlee.style.top = "-128px";
    qlee.style.transform = "translate(661.391px, 715.2px) scaleX(1)";
    qlee.style.pointerEvents = "auto";
    qlee.style.cursor = "context-menu";
    qlee.style.userSelect = "none";
    qlee.style.filter = "hue(245deg)";
    wrapper.appendChild(qlee);
    this.img = wrapper;
    bodyContainer.appendChild(qlee);
  }

  move() {
    
  }
}

function newQlee(data) {
  new Qlee(...GetRandXY(), Number(data.size), data.id);
}

async function initialPet(count = 0) {
  const result = await chrome.storage.local.get(["isDeactivate"]);
  if (result.isDeactivate) {
    return true;
  }
}

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
      ChangeSTATE(request.data);
      break;
    case "isDeactivate":
      initialPet();
      break;
  }

  sendResponse({ ok: "ok" });
});
