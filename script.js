let workspace = Blockly.inject('blocklyDiv', {
  toolbox: document.getElementById('toolbox')
});

function runCode() {
  const code = Blockly.JavaScript.workspaceToCode(workspace);
  try {
    new Function(code)();
  } catch (e) {
    alert('Error: ' + e);
  }
}

function saveWorkspace() {
  const xml = Blockly.Xml.workspaceToDom(workspace);
  const xmlText = Blockly.Xml.domToPrettyText(xml);
  localStorage.setItem("codeKidzProject", xmlText);
}

function loadWorkspace() {
  const xmlText = localStorage.getItem("codeKidzProject");
  if (xmlText) {
    const xml = Blockly.Xml.textToDom(xmlText);
    Blockly.Xml.domToWorkspace(xml, workspace);
  }
}
