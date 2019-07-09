/**
 *  Copyright 2019 Sebastian Ryszard Kruk <vectorc2@kruk.me>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 * 
 * @author vectorc2@kruk.me
 */
Blockly.Python['vector_set_screen_image'] = function(block) {
  let variable_robot_var = VectorUtils.getRobotVar(block); 

  var value_image_ref            = Blockly.Python.valueToCode(block, 'image_ref', Blockly.Python.ORDER_ATOMIC);
  var number_duration_sec        = VectorUtils.getNumberFieldAsParam(block, 'DURATION_SEC_VAR', 1.5);
  let checkbox_interrupt_running = VectorUtils.getBoolFieldAsPythonParam(block, 'INTERRUPT_RUNNING_VAR',  'TRUE');
  let checkbox_fill_screen       = VectorUtils.getBoolFieldAsPythonParam(block, 'FILL_SCREEN_VAR',  'TRUE');

  let image_id_label = VectorUtils.getImageMetaAsParam(value_image_ref);

  var code = `set_screen_image(${variable_robot_var}, ${image_id_label}${number_duration_sec}${checkbox_interrupt_running}${checkbox_fill_screen})\n`;
  return code;
};

Blockly.Python['vector_select_image'] = function(block) {
  let meta = VectorUtils.unpackImageMeta(block);
  let code = meta.toString();
  return [code, Blockly.Python.ORDER_NONE];
};