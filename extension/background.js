function randId() {
  return (
    Math.random().toString(36).substring(2.9) +
    Math.random().toString(36).substring(2.9)
  );
}

function debug(...d) {
  console.log(d);
}

chrome.contextMenus.onClicked.addListener((info, tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: debug,
    args: [info],
  });
});

chrome.commands.onCommand.addListener((command, tab) => {
  if (command == "NewPet") {
    const aPet = {
      size: Math.floor(Math.random() * 260 + 40),
      color: Math.floor(Math.random() * 360),
      id: randId(),
    };

    chrome.storage.local.get(["Pets"]).then((result) => {
      let pets = result.Pets;
      if (!pets) {
        pets = [];
      }
      pets.push(aPet);
      chrome.storage.local.set({ Pets: pets }).then(() => {});
    });
    chrome.tabs.sendMessage(tab.id, { greeting: "NewPet", data: aPet });
  } else if (command == "isDeactivate") {
    chrome.storage.local.get(["isDeactivate"]).then((result) => {
      isDeactivate = result.isDeactivate;
      chrome.storage.local.set({ isDeactivate: !isDeactivate }).then(() => {});
      chrome.tabs.sendMessage(tab.id, {
        greeting: "isDeactivate",
        data: !isDeactivate,
      });
    });
  } else if (command == "invisible") {
    chrome.storage.local.get(["invisible"]).then((result) => {
      invisibleee = result.invisible;
      chrome.storage.local.set({ invisible: !invisibleee }).then(() => {});
      chrome.tabs.sendMessage(tab.id, {
        greeting: "ChangeSTATE",
        data: { sleeping: null, invisible: !invisibleee },
      });
    });
  }
});
