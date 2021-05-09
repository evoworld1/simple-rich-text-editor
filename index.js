let buttons = document.querySelectorAll(".toolbar-btn");

for (let button of buttons) {
  button.addEventListener("click", () => {
    let setCommand = button.dataset["command"];
    document.execCommand(setCommand, false, null);
  });
}

//Export JSON file

const exportJson = () => {
  let outputToSave = document.querySelector(".editable-text").innerHTML;
  const data = { outputToSave };
  const a = document.createElement("a");
  a.href = URL.createObjectURL(
    new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    })
  );
  a.setAttribute("download", "text.json");
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

// Local Storage

const populateStorage = () => {
  let outputToSave = document.querySelector(".editable-text").innerHTML;
  const data = { outputToSave };
  localStorage.clear();
  localStorage.setItem("savedOutput", JSON.stringify(data));
};

const loadStorage = () => {
  let output = document.querySelector(".editable-text");
  let savedOutput = localStorage.getItem("savedOutput");
  parsedSavedOutput = JSON.parse(savedOutput);
  outputToSave = parsedSavedOutput;
  output.innerHTML = outputToSave.outputToSave;
};
