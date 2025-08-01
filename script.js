// Inject Blockly
const workspace = Blockly.inject('blocklyDiv', {
  toolbox: document.getElementById('toolbox')
});

// Custom block definition
Blockly.defineBlocksWithJsonArray([
  {
    "type": "say_hello",
    "message0": "say hello",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 160,
    "tooltip": "Say hello",
    "helpUrl": ""
  }
]);

Blockly.JavaScript['say_hello'] = function(block) {
  return 'console.log("Hello!");\n';
};

// Save/Load
function saveProject() {
  const xml = Blockly.Xml.workspaceToDom(workspace);
  const data = Blockly.Xml.domToText(xml);
  const blob = new Blob([data], { type: 'text/xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.download = 'project.xml';
  a.href = url;
  a.click();
}

function loadProject() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.xml';
  input.onchange = () => {
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const xml = Blockly.Xml.textToDom(reader.result);
      Blockly.Xml.domToWorkspace(xml, workspace);
    };
    reader.readAsText(file);
  };
  input.click();
}
