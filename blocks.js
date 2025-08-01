Blockly.Blocks['when_run_clicked'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("when run clicked");
    this.setNextStatement(true, null);
    this.setColour(50);
    this.setTooltip("Starts when the Run button is clicked");
    this.setHelpUrl("");
  }
};


// Additional Custom Blocks
Blockly.Blocks['say_hello'] = {
  init: function() {
    this.appendDummyInput().appendField("say hello");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['say_hello'] = function(block) {
  return 'alert("Hello!");\n';
};

Blockly.Blocks['repeat_5_times'] = {
  init: function() {
    this.appendStatementInput("DO")
        .setCheck(null)
        .appendField("repeat 5 times");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['repeat_5_times'] = function(block) {
  var statements_do = Blockly.JavaScript.statementToCode(block, 'DO');
  var code = 'for (let i = 0; i < 5; i++) {\n' + statements_do + '}\n';
  return code;
};
