function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

var SvgWarp = props => /*#__PURE__*/React.createElement("svg", _extends({}, props, {
  "aria-hidden": !props['aria-label'],
  focusable: "false",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 64 64",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "m 31.999998,0.99999996 c -6.131202,0 -12.124695,1.81811484 -17.222644,5.22445564 C 9.6794032,9.6307607 5.706062,14.472366 3.3597434,20.136784 1.013437,25.801321 0.39952951,32.034349 1.5956646,38.047754 c 1.1961468,6.013525 4.1486103,11.537132 8.4839954,15.872602 4.33547,4.335351 9.859192,7.287864 15.872597,8.483988 6.013404,1.196123 12.24643,0.582204 17.910965,-1.76402 5.664534,-2.346343 10.506019,-6.31971 13.912323,-11.417662 C 61.18185,44.124711 63,38.131217 63,32.00001 62.968642,23.787989 59.692418,15.921259 53.885641,10.114361 48.078745,4.3075461 40.212019,1.0314054 31.999998,0.99999996 Z m 0,4.76923234 c 6.947221,0.031358 13.600893,2.8050244 18.51332,7.7174527 4.912427,4.912429 7.686093,11.566104 7.71745,18.513325 -0.02516,4.556049 -1.215439,9.029946 -3.457692,12.996159 0.479427,-1.788581 0.719915,-3.632844 0.715385,-5.484617 0,-6.229572 -2.474635,-12.203869 -6.879616,-16.608852 -4.404981,-4.404983 -10.379277,-6.879618 -16.608847,-6.879618 -6.229567,0 -12.203865,2.474635 -16.608845,6.879618 -4.40498,4.404983 -6.8796148,10.37928 -6.8796148,16.608852 -0.0046,1.851773 0.235958,3.696036 0.715385,5.484617 C 6.9846686,41.029956 5.794388,36.556059 5.7692303,32.00001 5.8005862,25.052789 8.5742532,18.399114 13.48668,13.486685 18.399107,8.5742567 25.0529,5.8005901 31.999998,5.7692323 Z M 23.653845,54.415402 c -1.402391,-1.603296 -2.313315,-3.576566 -2.623791,-5.683971 -0.310597,-2.107403 -0.0075,-4.25952 0.872887,-6.199167 0.880281,-1.939765 2.300677,-3.584793 4.091285,-4.738471 1.790608,-1.153676 3.875716,-1.767239 6.005772,-1.767239 2.130179,0 4.215166,0.613563 6.005774,1.767239 1.790608,1.153678 3.211004,2.798706 4.091404,4.738471 0.880281,1.939647 1.183365,4.091764 0.872889,6.199167 -0.310596,2.107405 -1.22152,4.080675 -2.623912,5.683971 0,-2.213519 -0.879327,-4.336423 -2.44447,-5.901567 -1.565261,-1.565262 -3.688165,-2.444589 -5.901685,-2.444589 -2.213518,0 -4.336423,0.879327 -5.901565,2.444589 -1.565261,1.565144 -2.444588,3.688048 -2.444588,5.901567 z m 8.346153,-23.250007 c -2.0925,-1.19e-4 -4.164373,0.414089 -6.096149,1.21842 -1.931777,0.804331 -3.685184,1.983047 -5.159235,3.468304 -1.474169,1.48514 -2.639769,3.247371 -3.429553,5.18511 -0.789904,1.937739 -1.188493,4.012594 -1.172755,6.105095 -0.03887,0.84165 0.04137,1.684612 0.238463,2.503846 -2.013451,-2.996985 -3.09237,-6.524072 -3.100001,-10.134618 0,-4.964651 1.972197,-9.726014 5.482708,-13.236528 3.510631,-3.510512 8.271873,-5.48271 13.236522,-5.48271 4.964652,0 9.726013,1.972198 13.236524,5.48271 3.510512,3.510514 5.482709,8.271877 5.482709,13.236528 -0.0076,3.610546 -1.086551,7.137633 -3.100001,10.134618 0.197088,-0.819234 0.277331,-1.662196 0.238461,-2.503846 0.01573,-2.092501 -0.382849,-4.167356 -1.172633,-6.105095 -0.789906,-1.937739 -1.955505,-3.69997 -3.429555,-5.18511 -1.474169,-1.485257 -3.227577,-2.663973 -5.159354,-3.468304 -1.931777,-0.804331 -4.003651,-1.218539 -6.096151,-1.21842 z m -3.576923,23.488469 c 0,-0.707396 0.209847,-1.399054 0.602833,-1.987219 0.392983,-0.588286 0.951699,-1.046728 1.605322,-1.317382 0.653503,-0.270773 1.372703,-0.341596 2.066627,-0.203646 0.693804,0.138068 1.331212,0.478711 1.831384,0.979004 0.500293,0.500173 0.840934,1.137581 0.979004,1.831385 0.13795,0.693924 0.06713,1.413124 -0.203646,2.066628 -0.270654,0.653623 -0.729096,1.212339 -1.31738,1.605323 -0.588166,0.393105 -1.279705,0.602831 -1.987221,0.602831 -0.474179,0.01669 -0.946811,-0.06451 -1.388322,-0.238342 -0.441511,-0.173839 -0.842485,-0.436742 -1.178,-0.772258 -0.335515,-0.335515 -0.598419,-0.736488 -0.772258,-1.178 -0.173838,-0.441512 -0.255035,-0.914143 -0.238343,-1.388324 z",
  fill: "currentColor",
  style: {
    strokeWidth: '1.1923'
  }
}));

export default SvgWarp;