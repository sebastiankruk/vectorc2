Blockly.Python['vector_say_text_simple'] = function(block) {
  var variable_robot_var = Blockly.Python.variableDB_.getName(block.getFieldValue('robot_var'), Blockly.Variables.NAME_TYPE);
  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);

  var code = `${variable_robot_var}.say_text(${value_text})\n`
  return code;
};
Blockly.Python['vector_say_text'] = function(block) {
  var variable_robot_var = Blockly.Python.variableDB_.getName(block.getFieldValue('robot_var'), Blockly.Variables.NAME_TYPE);
  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  var checkbox_use_vector_voice = GeneratorUtils.getPythonBooleanValue(block, 'use_vector_voice');
  var number_duration_scalar = block.getFieldValue('duration_scalar');

  var code = `${variable_robot_var}.say_text(${value_text}, ${checkbox_use_vector_voice}, ${number_duration_scalar})\n`
  return code;
};