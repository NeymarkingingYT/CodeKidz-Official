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

Blockly.Blocks['move_sprite'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("move sprite by")
      .appendField(new Blockly.FieldNumber(10), "X")
      .appendField("x and")
      .appendField(new Blockly.FieldNumber(0), "Y")
      .appendField("y");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
  }
};

Blockly.JavaScript['move_sprite'] = function(block) {
  const dx = block.getFieldValue('X');
  const dy = block.getFieldValue('Y');
  return `
    const sprite = document.getElementById("sprite");
    const left = parseInt(sprite.style.left || 0);
    const top = parseInt(sprite.style.top || 0);
    sprite.style.left = (left + ${dx}) + "px";
    sprite.style.top = (top + ${dy}) + "px";
  `;
};

