Blockly.defineBlocksWithJsonArray([
  {
    "type": "event_whenrun",
    "message0": "when run clicked",
    "nextStatement": null,
    "colour": 50,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "sprite_set_x",
    "message0": "set sprite x to %1",
    "args0": [{ "type": "input_value", "name": "X" }],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230
  },
  {
    "type": "sprite_set_y",
    "message0": "set sprite y to %1",
    "args0": [{ "type": "input_value", "name": "Y" }],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230
  },
  {
    "type": "math_random",
    "message0": "pick random %1 to %2",
    "args0": [
      { "type": "input_value", "name": "FROM" },
      { "type": "input_value", "name": "TO" }
    ],
    "output": "Number",
    "colour": 230
  },
  {
    "type": "controls_repeat_ext",
    "message0": "repeat %1 times %2 %3",
    "args0": [
      { "type": "input_value", "name": "TIMES" },
      { "type": "input_dummy" },
      { "type": "input_statement", "name": "DO" }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 120
  }
]);

Blockly.JavaScript['event_whenrun'] = function(block) {
  return '';
};
Blockly.JavaScript['sprite_set_x'] = function(block) {
  const value = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  return `sprite.x = ${value};\n`;
};
Blockly.JavaScript['sprite_set_y'] = function(block) {
  const value = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  return `sprite.y = ${value};\n`;
};
Blockly.JavaScript['math_random'] = function(block) {
  const from = Blockly.JavaScript.valueToCode(block, 'FROM', Blockly.JavaScript.ORDER_NONE);
  const to = Blockly.JavaScript.valueToCode(block, 'TO', Blockly.JavaScript.ORDER_NONE);
  return [`Math.floor(Math.random() * (${to} - ${from} + 1)) + ${from}`, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['controls_repeat_ext'] = function(block) {
  const repeats = Blockly.JavaScript.valueToCode(block, 'TIMES', Blockly.JavaScript.ORDER_ASSIGNMENT);
  const branch = Blockly.JavaScript.statementToCode(block, 'DO');
  return `for (let i = 0; i < ${repeats}; i++) {\n${branch}}\n`;
};
