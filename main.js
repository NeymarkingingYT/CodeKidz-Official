let workspace = Blockly.inject('blocklyDiv', {
  toolbox: document.getElementById('toolbox'),
  collapse: true,
  scrollbars: true,
  trashcan: true,
});

document.getElementById("runBtn").addEventListener("click", () => {
  const code = Blockly.JavaScript.workspaceToCode(workspace);
  try {
    eval(code);
  } catch (e) {
    alert("Error: " + e);
  }
});

document.getElementById("saveBtn").addEventListener("click", () => {
  const xml = Blockly.Xml.workspaceToDom(workspace);
  const data = Blockly.Xml.domToPrettyText(xml);
  localStorage.setItem("codekidz_project", data);
});

document.getElementById("loadBtn").addEventListener("click", () => {
  const data = localStorage.getItem("codekidz_project");
  if (data) {
    const xml = Blockly.Xml.textToDom(data);
    Blockly.Xml.domToWorkspace(xml, workspace);
  }
});

document.getElementById("modeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Handle Blockly resizing
const blocklyArea = document.getElementById("blocklyArea");
const blocklyDiv = document.getElementById("blocklyDiv");

const onResize = () => {
  let element = blocklyArea;
  let x = 0;
  let y = 0;
  do {
    x += element.offsetLeft;
    y += element.offsetTop;
    element = element.offsetParent;
  } while (element);
  blocklyDiv.style.left = x + 'px';
  blocklyDiv.style.top = y + 'px';
  blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
  blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
  Blockly.svgResize(workspace);
};

window.addEventListener('resize', onResize, false);
onResize();
