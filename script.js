const workspace = Blockly.inject('blocklyDiv', {
  toolbox: document.getElementById('toolbox')
});

// =========================
// 🟢 EVENT BLOCKS
// =========================
Blockly.defineBlocksWithJsonArray([
  {
    type: "when_run",
    message0: "when run clicked",
    nextStatement: null,
    colour: 60,
    tooltip: "Starts the script when Run is clicked",
    hat: "true"
  }
]);

Blockly.JavaScript['when_run'] = () => ''; // Acts as trigger only

// =========================
// 🎮 MOTION BLOCKS
// =========================
Blockly.defineBlocksWithJsonArray([
  {
    type: "move_steps",
    message0: "move %1 steps",
    args0: [{ type: "input_value", name: "STEPS", check: "Number" }],
    previousStatement: null,
    nextStatement: null,
    colour: 230
  },
  {
    type: "turn_right",
    message0: "turn right %1 degrees",
    args0: [{ type: "input_value", name: "DEGREES", check: "Number" }],
    previousStatement: null,
    nextStatement: null,
    colour: 230
  },
  {
    type: "turn_left",
    message0: "turn left %1 degrees",
    args0: [{ type: "input_value", name: "DEGREES", check: "Number" }],
    previousStatement: null,
    nextStatement: null,
    colour: 230
  }
]);

Blockly.JavaScript['move_steps'] = (block) => {
  const steps = Blockly.JavaScript.valueToCode(block, 'STEPS', Blockly.JavaScript.ORDER_NONE) || 0;
  return `console.log("Move", ${steps}, "steps");\n`;
};
Blockly.JavaScript['turn_right'] = (block) => {
  const degrees = Blockly.JavaScript.valueToCode(block, 'DEGREES', Blockly.JavaScript.ORDER_NONE) || 0;
  return `console.log("Turn right", ${degrees}, "degrees");\n`;
};
Blockly.JavaScript['turn_left'] = (block) => {
  const degrees = Blockly.JavaScript.valueToCode(block, 'DEGREES', Blockly.JavaScript.ORDER_NONE) || 0;
  return `console.log("Turn left", ${degrees}, "degrees");\n`;
};

// =========================
// 🗣️ LOOKS BLOCKS
// =========================
Blockly.defineBlocksWithJsonArray([
  {
    type: "say_message",
    message0: "say %1",
    args0: [{ type: "input_value", name: "MSG", check: "String" }],
    previousStatement: null,
    nextStatement: null,
    colour: 160
  }
]);

Blockly.JavaScript['say_message'] = (block) => {
  const msg = Blockly.JavaScript.valueToCode(block, 'MSG', Blockly.JavaScript.ORDER_NONE) || '""';
  return `alert(${msg});\n`;
};

// =========================
// 🕹️ CONTROL BLOCKS
// =========================
Blockly.defineBlocksWithJsonArray([
  {
    type: "wait_seconds",
    message0: "wait %1 seconds",
    args0: [{ type: "input_value", name: "SECS", check: "Nu_]()
