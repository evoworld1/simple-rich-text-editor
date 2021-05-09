let buttons = document.querySelectorAll(".toolbar-btn");
for (let button of buttons) {
  button.addEventListener("click", () => {
    let cmd = button.dataset["command"];
    document.execCommand(cmd, false, null);
  });
}

const exportJson = () => {
  let outputToSave = document.querySelector(".editable-text").innerHTML;
  const data = { content: outputToSave };
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
