"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Template = void 0;

var _react = _interopRequireWildcard(require("react"));

var _fonts = require("./fonts");

var _styles = require("./styles");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const Template = ({
  metadata: {
    uiPublicUrl,
    locale,
    darkMode,
    injectedMetadata,
    i18n,
    bootstrapScriptUrl,
    strictCsp
  }
}) => {
  const logo = /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1025.475",
    height: "958.891",
    version: "1.1",
    viewBox: "0 0 271.324 253.707"
  }, /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("linearGradient", null, /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0",
    stopColor: "#000",
    stopOpacity: "1"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M0 773.961h935.953V0H0z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M280.046 422.861h4.436v-4.436h-4.436z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M135.711 619.703h291.977V426.025H135.711z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M135.711 619.703H406.33V426.025H135.711z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M158.728 586.608h268.96V426.025h-268.96z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M152.122 441.211h10.843v-10.843h-10.843z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M201.703 565.206h9.952v-9.952h-9.952z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M411.63 477.06h8.469v-8.054h-8.469z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M383.492 550.174h11.349v-11.581h-11.349z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M392.201 557.38h3.304v-3.37h-3.304z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M134.696 541.172h10.493v-10.807h-10.493z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M142.042 500.601h6.94v-7.148h-6.94z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M169.541 476.028h6.022V470.3h-6.022z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M212.274 574.423h13.464v-13.465h-13.464z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M396.747 580.623h16.739v-16.739h-16.739z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M391.806 589.727h7.845v-7.845h-7.845z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M260.795 634.824h16.743v-16.742h-16.743z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M280.606 637.787h7.845v-7.845h-7.845z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M337.038 635.639h11.754v-11.178h-11.754z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M421.976 537.367h7.857v-7.473h-7.857z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M222.066 604.659h5.397v-5.132h-5.397z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M154.296 598.108h11.302V587.36h-11.302z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M173.307 579.72H379.85V462.919H173.307z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M187.746 491.393h2.177v-4.028h-2.177z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M188.189 485.801h29.014v-21.307h-29.014z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M181.309 595.715h176.698v-69.518H181.309z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M370.397 538.593h9.549V528.33h-9.549z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M376.768 461.933H388v-33.696h-11.232z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M358.809 461.933h11.756v-33.12h-11.756z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M338.704 489.466h68.578v-17.737h-68.578z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M369.28 462.853h.715v-.42h-.715z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M374.889 463.382h1.762v-1.077h-1.762z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M368.067 469.324h9.818v-6.784h-9.818z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M201.956 445.192h55.719v-18.515h-55.719z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M278.153 446.59h44.402v-19.841h-44.402z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M519.172 599.41h261.78V426.744h-261.78z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M519.172 599.41h241.26V426.744h-241.26z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M539.692 569.906h241.26V426.744h-241.26z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M551.701 447.449h9.666v-9.667h-9.666z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M584.437 547.903h8.873v-8.872h-8.873z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M786.991 468.311h5.307v-5.048h-5.307z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M711.542 543.151h13.915v-13.233h-13.915z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M733.6 545.077h4.05v-3.851h-4.05z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M502.857 527.361h9.655v-9.182h-9.655z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M507.684 498.325h6.386v-6.073h-6.386z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M553.362 473.492h5.369v-5.106h-5.369z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M574.737 565.541h14.565v-14.566h-14.565z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M763.056 572.686h14.923v-14.923h-14.923z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M749.401 583.469h6.994v-6.994h-6.994z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M620.686 610.55h14.926v-14.927h-14.926z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M638.347 613.191h6.995v-6.994h-6.995z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M698.27 620.515h10.479v-9.965H698.27z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M795.229 513.827h6.029v-5.733h-6.029z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M599.059 593.332h11.398v-10.84h-11.398z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M553.008 587.283h10.075v-9.582h-10.075z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M615.215 565.225h4.436v-4.436h-4.436z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M588.856 458.552h143.351v-11.768H588.856z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M632.664 447.315h21.234v-20.34h-21.234z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M743.635 545.999c0-14.366 11.641-25.999 26.008-25.999 14.356 0 25.998 11.633 25.998 25.999 0 14.356-11.642 25.998-25.998 25.998-14.367 0-26.008-11.642-26.008-25.998"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M758.765 567.113h18.867v-7.528h-18.867z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M777.632 563.8h4.794v-3.256h-4.794z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M746.375 537.407h19.004v-22.321h-19.004z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M773.906 537.407h18.995v-22.321h-18.995z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M0 773.961h935.953V0H0z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M529.936 559.29c0-15.08 12.22-27.29 27.291-27.29 15.069 0 27.289 12.21 27.289 27.29 0 15.07-12.22 27.29-27.289 27.29-15.071 0-27.291-12.22-27.291-27.29"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M532.352 548.084h19.454v-15.33h-19.454z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M562.893 548.084h19.353v-15.33h-19.353z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M543.167 580.745h24.479v-15.086h-24.479z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M522.883 470.007c0-15.91 11.976-28.917 27.876-28.917 15.899 0 26.693 12.176 26.693 28.086 0 15.9-9.852 26.494-25.751 26.494-15.9 0-28.818-9.764-28.818-25.663"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M527.174 457.548h19.267v-14.314h-19.267z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M554.76 457.609h18.822v-14.375H554.76z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M531.226 488.749h13.127v-34.113h-13.127z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M539.944 484.988h3.272v-5.804h-3.272z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M542.261 489.104h20.898v-31.38h-20.898z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M744.574 467.082c0-15.08 12.219-25.992 27.288-25.992 15.071 0 27.29 10.912 27.29 25.992 0 15.07-12.219 27.29-27.29 27.29-15.069 0-27.288-12.22-27.288-27.29"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M751.978 456.504h47.503v-30.833h-47.503z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M762.603 490.035h21.163v-14.344h-21.163z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M634.247 584.482c0-13.916 11.285-25.201 25.211-25.201 13.917 0 27.358 11.288 27.358 25.206 0 13.927-13.441 25.206-27.358 25.206-13.926 0-25.211-11.285-25.211-25.211"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M664.816 575.672h16.123v-12.704h-16.123z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M639.59 575.672h16.038v-12.704H639.59z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M642.658 585.945h9.375v-13.558h-9.375z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M670.228 593.745h10.377v-22.558h-10.377z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M667.237 601.105h3.765v-11.363h-3.765z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M667.102 601.103h.135v-.065h-.135z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M644.392 606.301h23.232v-21.755h-23.232z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M673.946 584.447h2.706v-10.804h-2.706z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M669.211 581.294h2.025v-6.063h-2.025z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M645.733 582.336h3.651v-7.861h-3.651z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M650.811 579.963h1.722V575.5h-1.722z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M650.718 604.221h14.123v-10.508h-14.123z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M666.393 599.583h2.609v-5.381h-2.609z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    id: "clipPath3107",
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M0 773.961h935.953V0H0z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M637.352 503.698h8.8v-26.397h-8.8z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M623.283 503.698h9.21v-25.946h-9.21z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M607.532 525.268h53.725v-13.895h-53.725z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M631.486 504.42h.56v-.33h-.56z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M635.88 504.834h1.381v-.844h-1.381z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M631.092 509.488h6.596v-5.314h-6.596z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M151.271 309.316h250.435V144.133H151.271z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M151.271 309.316h230.804V144.133H151.271z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M170.901 281.091h230.805V144.133H170.901z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M174.811 178.073h9.248v-9.248h-9.248z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M223.547 255.048h7.145v-7.145h-7.145z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M407.482 183.899h5.078v-4.829h-5.078z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M398.139 258.148h13.312v-12.66h-13.312z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M389.786 261.833h3.874v-3.685h-3.874z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M137.63 248.922h7.484v-7.117h-7.484z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M139.005 215.517h6.109v-5.81h-6.109z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M158.149 168.825h5.136v-4.884h-5.136z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M224.494 270.22h11.729v-11.729h-11.729z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M399.04 234.696h14.276V220.42H399.04z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M396.273 242.142h6.692v-6.691h-6.692z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M248.385 319.973h14.279v-14.28h-14.279z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M265.281 322.5h6.691v-6.692h-6.691z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M329.303 319.154h10.025v-9.534h-10.025z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M421.131 237.168h5.767v-5.485h-5.767z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M231.45 310.494h9.038v-8.596h-9.038z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M219.08 316.022h7.051v-6.706h-7.051z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M210.224 310.238h3.974v-3.779h-3.974z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M398.383 210.337h8.785v-8.838h-8.785z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M381.201 182.933h8.788v-8.838h-8.788z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M337.433 212.387h8.788v-8.845h-8.788z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M359.074 199.577h8.784v-8.846h-8.784z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M349.181 159.823h8.785v-8.834h-8.785z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M327.685 177.087h8.774v-8.839h-8.774z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M303.297 162.674h8.787v-8.837h-8.787z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M291.752 186.986h8.779v-8.835h-8.779z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M321.999 221.213h8.784v-8.835h-8.784z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M313.329 204.898h8.779v-8.833h-8.779z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M277.265 223.311h8.784v-8.829h-8.784z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M258.408 210.338h8.771v-8.829h-8.771z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M262.84 185.618h8.777v-8.845h-8.777z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M234.724 167.334h8.785v-8.838h-8.785z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M205.768 174.459h8.787v-8.827h-8.787z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M227.355 192.091h8.777v-8.827h-8.777z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M197.184 210.789h8.775v-8.837h-8.775z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M174.097 186.051h8.796v-8.836h-8.796z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M365.174 307.774h11.166v-11.879h-11.166z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M375.424 281.718h11.724v-4.549h-11.724z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M386.957 282.805h10.205v-19.202h-10.205z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M337.717 271.57h26.463v-18.333h-26.463z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M303.073 298.475h19.981v-19.091h-19.981z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M322.561 299.954h14.089v-8.443h-14.089z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M322.37 291.511h.191v-.886h-.191z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M267.934 284.994h26.248v-23.416h-26.248z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M235.673 278.205h22.325v-9.774h-22.325z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M228.392 287.698h1.288v-.463h-1.288z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M200.837 313.512h27.776v-26.267h-27.776z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    id: "clipPath4719",
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M183.779 262.473h9.446v-28.335h-9.446z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    id: "clipPath4735",
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M168.677 262.473h9.886v-27.851h-9.886z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    id: "clipPath4755",
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M151.77 285.627h57.669v-14.916H151.77z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    id: "clipPath4779",
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M177.483 263.248h.601v-.354h-.601z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    id: "clipPath4795",
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M182.199 263.692h1.482v-.905h-1.482z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    id: "clipPath4811",
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M176.463 268.688h8.256v-5.704h-8.256z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M529.658 305.822h245.381V143.973H529.658z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M529.658 305.822h226.147V143.973H529.658z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M548.893 278.166h226.146V143.973H548.893z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M560.149 163.38h9.061v-9.061h-9.061z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M560.064 287.996h8.317v-8.316h-8.317z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M769.404 182.323h5.983v-5.69h-5.983z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M762.939 171.751h4.385v-4.17h-4.385z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M709.977 253.088h13.043v-12.405h-13.043z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M730.653 254.893h3.796v-3.611h-3.796z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M514.365 238.287h9.05v-8.608h-9.05z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M518.89 211.07h5.986v-5.693h-5.986z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M561.706 187.792h5.033v-4.786h-5.033z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M572.702 300.412h13.653v-13.653h-13.653z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M775.761 249.349h13.989v-13.988h-13.989z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M771.158 232.9h9.207v-9.207h-9.207z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M745.464 290.88h6.556v-6.556h-6.556z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M650.19 329.991h13.99v-13.99h-13.99z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M665.664 319.159h6.556v-6.556h-6.556z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M697.537 325.605h9.822v-9.341h-9.822z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M781.704 218.102h5.651v-5.375h-5.651z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M597.013 328.011h10.684V317.85h-10.684z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M537.765 288.329h9.444v-8.982h-9.444z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M619.684 273.778h4.159v-4.158h-4.159z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M621.262 255.604h53.631V201.41h-53.631z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M695.521 315.154h25.894v-29.727h-25.894z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M694.799 253.973h60.216v-26.831h-60.216z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M537.765 272.337h67.319v-67.319h-67.319z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M535.11 274.181h63.991v-69.317H535.11z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M566.232 192.213h12.643v-42.628h-12.643z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M730.953 176.298h10.07V146.09h-10.07z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M714.853 176.298h10.539v-29.692h-10.539z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M696.828 200.982h61.481v-15.901h-61.481z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M724.24 177.124h.641v-.377h-.641z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M729.269 177.598h1.579v-.965h-1.579z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M723.153 182.924h8.801v-6.081h-8.801z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M0 773.961h935.953V0H0z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M183.779 262.473h9.446v-28.335h-9.446z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M168.677 262.473h9.886v-27.851h-9.886z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M151.77 285.627h57.669v-14.916H151.77z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M177.483 263.248h.601v-.354h-.601z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M182.199 263.692h1.482v-.905h-1.482z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M176.463 268.688h8.256v-5.704h-8.256z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M0 773.961h935.953V0H0z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M183.779 262.473h9.446v-28.335h-9.446z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M168.677 262.473h9.886v-27.851h-9.886z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M151.77 285.627h57.669v-14.916H151.77z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M177.483 263.248h.601v-.354h-.601z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M182.199 263.692h1.482v-.905h-1.482z"
  })), /*#__PURE__*/_react.default.createElement("clipPath", {
    clipPathUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M176.463 268.688h8.256v-5.704h-8.256z"
  }))), /*#__PURE__*/_react.default.createElement("g", {
    transform: "translate(10.459 14.623)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#fff",
    fillOpacity: "1",
    fillRule: "evenodd",
    stroke: "none",
    strokeDasharray: "none",
    strokeMiterlimit: "4",
    strokeOpacity: "1",
    strokeWidth: "16.261",
    d: "M239.07-2.073c-30.824 8.179-61.588 16.208-92.563 23.815-8.555 2.805-15.747 8.753-21.437 15.328-6.63-7.67-15.082-14.277-25.407-16.256-29.572-7.26-58.917-15.066-88.316-22.908-6.793-.578-7.86 7.6-8.934 12.43-2.195 11.325 5.613 22.08 15.743 26.947a71.34 71.34 0 0019.728 7.25c-7.284 17.288-2.642 38.653 11.842 51.09 6.657 5.98 14.956 10.1 23.7 12.295-8.42 14.2-8.655 31.294-6.57 47.117 3.73 19.857 13.682 38.072 24.932 54.805 2.03 3.836 8.029 7.523 11.35 2.998 3.859-.204 6.127-7.009 7.944-2.676 2.41 3.874 9.59-.888 10.586 3.917-1.307 4.748 3.98 7.683 8.222 6.823 4.955 1.035 8.248-3.498 7.14-7.963.28-1.886 3.957-1.824 4.376-.094 3.209 3.59 7.683.868 10.636-1.387 7.235-1.08 9.037-9.485 12.552-14.578 6.832-13.722 14.734-27.16 19.196-41.841 4.406-15.738 2.523-33.383-6.74-47.173 11.038-3.086 21.91-8.307 28.646-17.722 8.814-10.547 11.632-24.774 9.064-37.976-.462-2.629-1.098-5.242-2.105-7.727 13.737-3.078 29.497-9.255 34.437-23.362 2.621-7.521 1.234-16.924-4.535-22.64-1.022-.356-2.391-.58-3.486-.512zM37.178 22.117c20.446 5.747 41.312 10.03 61.637 16.145 1.646.534 6.199 2.438 6.221 2.946C77.003 32.731 48.08 27.603 20.39 18.24c.223-1.37 7.414 1.813 10.197 2.124l6.59 1.755zm193.071-4.55c-3.319 3.274-8.878 3.133-13.093 4.828-19.194 5.344-38.7 9.682-57.81 15.303-5.126 2.195-2.204 9.915 3.053 9.045 11.022-.336 24.504 5.808 25.115 17.868.604 12.98-14.268 20.984-26.22 19.243-11.091-.508-23.025-9.978-20.6-21.658 1.604-7.085 8.328-11.303 14.311-14.686 4.342-3.655-.736-10.217-5.684-8.058-2.236.617-5.047 1.962-1.378-.106 13.856-4.935 28.55-7.271 42.687-11.358 13.217-3.398 26.49-6.89 39.619-10.42zM82.095 46.831c11.051.092 24.042 7.702 22.926 19.812-1.175 12.945-16.627 19.178-28.45 16.984-9.864-1.458-20.287-9.721-18.526-20.322 1.47-10.58 13.94-16.833 24.05-16.474zm42.523 36.433c1.831 4.225 5.852 7.771 9.29 10.066-2.621 4.01-5.71 7.322-8.925 10.82-3.196-3.727-6.663-7.351-9.108-11.6 3.809-2.123 6.26-6.16 8.743-9.286zm32.174 26.737c7.262 6.741 12.348 16.255 12.31 26.178-1.568-9.574-5.723-18.918-12.31-26.178zm-66.196 1.93c-9.068 20.759-6.494 44.605 1.934 65.134-6.635-13.343-11.123-28.84-9.53-43.69.288-7.658 3.916-15.154 7.596-21.443z",
    paintOrder: "stroke markers fill"
  }), /*#__PURE__*/_react.default.createElement("g", {
    clipPath: "url(#clipPath3107)",
    transform: "matrix(.35278 0 0 -.35278 -41.352 253.375)"
  }, /*#__PURE__*/_react.default.createElement("g", {
    transform: "matrix(11.44028 0 0 11.90876 573.986 423.357)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#09060a",
    fillOpacity: "1",
    fillRule: "nonzero",
    stroke: "none",
    d: "M0 0s7.774-5.34 2.635-15.947c-5.141-10.609-6.651-11.619-6.651-11.619h-10.038C-28.521-9.056-18.169 0-18.169 0v.028c1.88-.056 3.959.285 6.208 1.268l2.877-3.317c.1-.1.271-.1.355 0l2.962 3.317C-3.702.398-1.766.028 0 .015z"
  })), /*#__PURE__*/_react.default.createElement("g", {
    transform: "matrix(11.44028 0 0 11.90876 -1593.424 -2692.96)"
  }, /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("g", {
    clipPath: "url(#clipPath4719)",
    opacity: "0.46"
  }, /*#__PURE__*/_react.default.createElement("g", {
    transform: "translate(191.468 245.757)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#fff",
    fillOpacity: "1",
    fillRule: "nonzero",
    stroke: "none",
    d: "M0 0c-5.14-10.608-6.649-11.619-6.649-11.619h-1.039C-6.649-9.981-5.04-7.12-2.605-2.094c5.14 10.609-2.022 16.219-2.022 16.219l-.356.384-2.065 2.207c1.567-.513 3.032-.74 4.414-.754v-.015S5.141 10.607 0 0"
  }))))), /*#__PURE__*/_react.default.createElement("g", {
    transform: "matrix(11.44028 0 0 11.90876 -1593.424 -2692.96)"
  }, /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("g", {
    clipPath: "url(#clipPath4735)",
    opacity: "0.46"
  }, /*#__PURE__*/_react.default.createElement("g", {
    transform: "translate(178.564 234.622)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#fff",
    fillOpacity: "1",
    fillRule: "nonzero",
    stroke: "none",
    d: "M0 0h-2.179c-14.467 18.524-4.13 27.566-4.13 27.566v.029a12.53 12.53 0 012.949.256C-5.098 25.872-12.188 16.075 0 0"
  }))))), /*#__PURE__*/_react.default.createElement("g", {
    transform: "matrix(11.44028 0 0 11.90876 798.792 704.679)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#09060a",
    fillOpacity: "1",
    fillRule: "nonzero",
    stroke: "none",
    d: "M0 0s3.203-5.753-10.152-7.533l.312-.356c3.717-4.513 2.207-11.348-2.99-14.04-1.808-.939-4.129-1.708-6.82-1.679-1.766.013-3.703.383-5.767 1.281l.982 1.097c.128.142.029.37-.17.383-.94.03-2.905.571-3.731 4.23h-.214s-1.651-4.029-3.887-4.215c-.185-.015-.256-.242-.142-.385l.968-1.11c-2.249-.983-4.328-1.324-6.208-1.268-2.506.043-4.657.783-6.365 1.666-5.197 2.692-6.707 9.527-2.976 14.04.185.228.3.356.3.356C-60.203-5.753-56.999 0-56.999 0S-40.04-4.571-35.47-5.454c3.845-.755 6.152-4.328 6.792-5.425.072-.142.271-.142.357 0 .626 1.097 2.932 4.67 6.777 5.425C-16.974-4.571 0 0 0 0"
  })), /*#__PURE__*/_react.default.createElement("g", {
    transform: "matrix(11.44028 0 0 11.90876 -1593.424 -2692.96)"
  }, /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("g", {
    clipPath: "url(#clipPath4755)",
    opacity: "0.46"
  }, /*#__PURE__*/_react.default.createElement("g", {
    transform: "translate(208.25 281.469)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#fff",
    fillOpacity: "1",
    fillRule: "nonzero",
    stroke: "none",
    d: "M0 0c-3.503-.939-16.731-4.442-20.689-5.212-3.845-.768-6.152-4.328-6.779-5.438-.085-.143-.284-.143-.355 0-.641 1.11-2.948 4.67-6.792 5.438C-38.574-4.442-51.802-.939-55.29 0c-2.023 2.05-.855 4.157-.855 4.157s16.958-4.585 21.53-5.468c3.844-.753 6.151-4.313 6.792-5.41.071-.142.27-.142.355 0 .627 1.097 2.934 4.657 6.779 5.41C-16.119-.428.854 4.157.854 4.157S2.021 2.05 0 0"
  }))))), /*#__PURE__*/_react.default.createElement("g", {
    transform: "matrix(11.44028 0 0 11.90876 479.995 453.885)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#f70",
    fillOpacity: "1",
    fillRule: "nonzero",
    stroke: "none",
    d: "M0 0a17.55 17.55 0 012.449-1.268L-.513-4.585c-.085-.1-.256-.1-.355 0l-2.877 3.317C-2.947-.94-2.121-.513-1.281 0A1.22 1.22 0 000 0"
  })), /*#__PURE__*/_react.default.createElement("g", {
    transform: "matrix(11.44028 0 0 11.90876 508.015 438.79)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#f70",
    fillOpacity: "1",
    fillRule: "nonzero",
    stroke: "none",
    d: "M0 0c-.797.327-1.609.755-2.449 1.268a1.22 1.22 0 01-1.281 0A17.52 17.52 0 00-6.194 0l-.968 1.11c-.114.143-.043.37.142.385 2.236.186 3.887 4.215 3.887 4.215h.214c.826-3.659 2.791-4.2 3.731-4.23.199-.013.298-.241.17-.383z"
  })), /*#__PURE__*/_react.default.createElement("g", {
    transform: "matrix(11.44028 0 0 11.90876 -1593.424 -2692.96)"
  }, /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("g", {
    clipPath: "url(#clipPath4779)",
    opacity: "0.18"
  }, /*#__PURE__*/_react.default.createElement("g", {
    transform: "translate(177.483 262.985)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#000",
    fillOpacity: "1",
    fillRule: "nonzero",
    stroke: "none",
    d: "M0 0c.198.082.403.173.602.263a2.954 2.954 0 00-.528-.354z"
  }))))), /*#__PURE__*/_react.default.createElement("g", {
    transform: "matrix(11.44028 0 0 11.90876 -1593.424 -2692.96)"
  }, /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("g", {
    clipPath: "url(#clipPath4795)",
    opacity: "0.18"
  }, /*#__PURE__*/_react.default.createElement("g", {
    transform: "translate(183.68 262.985)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#000",
    fillOpacity: "1",
    fillRule: "nonzero",
    stroke: "none",
    d: "M0 0l-.173-.198a3.397 3.397 0 00-1.308.906C-.979.436-.485.197 0 0"
  }))))), /*#__PURE__*/_react.default.createElement("g", {
    transform: "matrix(11.44028 0 0 11.90876 -1593.424 -2692.96)"
  }, /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("g", {
    clipPath: "url(#clipPath4811)",
    opacity: "0.46"
  }, /*#__PURE__*/_react.default.createElement("g", {
    transform: "translate(184.66 264.08)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#fff",
    fillOpacity: "1",
    fillRule: "nonzero",
    stroke: "none",
    d: "M0 0l-.979-1.095c-.486.198-.98.436-1.482.708-.568.625-1.111 1.605-1.448 3.119h-.215S-5.104.354-6.568-.823l-.008-.009c-.198-.09-.403-.181-.602-.263L-8.141.017c-.115.139-.048.37.14.378 2.231.189 3.886 4.214 3.886 4.214h.214C-3.078.954-1.111.411-.173.387.025.37.132.14 0 0"
  }))))), /*#__PURE__*/_react.default.createElement("g", {
    transform: "matrix(11.44028 0 0 11.90876 508.015 438.79)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeDasharray: "none",
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    strokeMiterlimit: "10",
    strokeOpacity: "1",
    strokeWidth: "2",
    d: "M0 0c2.064-.897 4.001-1.268 5.767-1.281 2.691-.029 5.012.74 6.82 1.679 5.197 2.692 6.707 9.527 2.99 14.04-.199.228 0 0 0 0 13.357 1.78 9.84 7.889 9.84 7.889S8.443 17.756 3.873 16.873c-3.845-.755-6.151-4.328-6.777-5.425-.086-.142-.285-.142-.357 0-.64 1.097-2.947 4.67-6.792 5.425-4.57.883-21.529 5.454-21.529 5.454s-3.503-6.109 9.839-7.889c0 0 .185.228 0 0-3.731-4.513-2.221-11.348 2.976-14.04 1.708-.882 3.859-1.623 6.365-1.666 1.88-.056 3.959.286 6.208 1.268"
  })), /*#__PURE__*/_react.default.createElement("g", {
    transform: "matrix(11.44028 0 0 11.90876 366.129 423.357)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeDasharray: "none",
    strokeLinecap: "butt",
    strokeLinejoin: "miter",
    strokeMiterlimit: "10",
    strokeOpacity: "1",
    strokeWidth: "2",
    d: "M0 0s-10.352-9.056 4.115-27.566h10.038s1.51 1.01 6.651 11.619C25.943-5.34 18.169 0 18.169 0"
  })), /*#__PURE__*/_react.default.createElement("g", {
    transform: "matrix(11.44028 0 0 11.90876 436.123 93.75)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#f70",
    fillOpacity: "1",
    fillRule: "nonzero",
    stroke: "none",
    d: "M0 0c0-.825-.779-1.495-1.741-1.495-.961 0-1.74.67-1.74 1.495 0 .826.779 1.495 1.74 1.495C-.779 1.495 0 .826 0 0"
  })), /*#__PURE__*/_react.default.createElement("g", {
    transform: "matrix(11.44028 0 0 11.90876 475.95 93.75)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#f70",
    fillOpacity: "1",
    fillRule: "nonzero",
    stroke: "none",
    d: "M0 0c0-.825-.779-1.495-1.74-1.495-.962 0-1.741.67-1.741 1.495 0 .826.779 1.495 1.741 1.495C-.779 1.495 0 .826 0 0"
  })), /*#__PURE__*/_react.default.createElement("g", {
    transform: "matrix(11.44028 0 0 12.21426 396.293 94.618)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#f70",
    fillOpacity: "1",
    fillRule: "nonzero",
    stroke: "none",
    d: "M0 0c0-.825-.78-1.495-1.741-1.495-.962 0-1.741.67-1.741 1.495 0 .825.779 1.495 1.741 1.495C-.78 1.495 0 .825 0 0"
  })), /*#__PURE__*/_react.default.createElement("g", {
    transform: "matrix(11.44028 0 0 11.90876 571.305 94.586)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#f70",
    fillOpacity: "1",
    fillRule: "nonzero",
    stroke: "none",
    d: "M0 0c0-.825-.78-1.494-1.741-1.494-.962 0-1.741.669-1.741 1.494 0 .826.779 1.495 1.741 1.495C-.78 1.495 0 .826 0 0"
  })), /*#__PURE__*/_react.default.createElement("g", {
    transform: "matrix(11.44028 0 0 12.21436 609.633 95.63)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#f70",
    fillOpacity: "1",
    fillRule: "nonzero",
    stroke: "none",
    d: "M0 0c0-.825-.779-1.494-1.741-1.494-.961 0-1.74.669-1.74 1.494 0 .826.779 1.495 1.74 1.495C-.779 1.495 0 .826 0 0"
  })), /*#__PURE__*/_react.default.createElement("g", {
    transform: "matrix(11.44028 0 0 11.90876 532.965 94.413)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#f70",
    fillOpacity: "1",
    fillRule: "nonzero",
    stroke: "none",
    d: "M0 0c0-.825-.779-1.495-1.741-1.495-.961 0-1.74.67-1.74 1.495 0 .825.779 1.495 1.74 1.495C-.779 1.495 0 .825 0 0"
  })), /*#__PURE__*/_react.default.createElement("g", {
    transform: "matrix(11.44028 0 0 11.90876 428.302 530.873)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#fff",
    fillOpacity: "1",
    fillRule: "nonzero",
    stroke: "none",
    d: "M0 0c0-3.145-3.177-5.693-7.095-5.693-3.918 0-7.094 2.548-7.094 5.693 0 3.145 3.176 5.693 7.094 5.693S0 3.145 0 0"
  })), /*#__PURE__*/_react.default.createElement("g", {
    transform: "matrix(11.44028 0 0 11.90876 406.002 531.861)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#09060a",
    fillOpacity: "1",
    fillRule: "nonzero",
    stroke: "none",
    d: "M0 0c0-2.458-2.179-4.45-4.865-4.45C-7.553-4.45-9.73-2.458-9.73 0c0 2.457 2.177 4.449 4.865 4.449C-2.179 4.449 0 2.457 0 0"
  })), /*#__PURE__*/_react.default.createElement("g", {
    transform: "matrix(11.44028 0 0 11.90876 357.962 536.7)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#fff",
    fillOpacity: "1",
    fillRule: "nonzero",
    stroke: "none",
    d: "M0 0c0-1.239-.877-2.244-1.96-2.244-1.082 0-1.96 1.005-1.96 2.244 0 1.24.878 2.245 1.96 2.245C-.877 2.245 0 1.24 0 0"
  })), /*#__PURE__*/_react.default.createElement("g", {
    transform: "matrix(11.44028 0 0 11.90876 665.766 530.873)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#fff",
    fillOpacity: "1",
    fillRule: "nonzero",
    stroke: "none",
    d: "M0 0c0-3.145-3.176-5.693-7.094-5.693S-14.188-3.145-14.188 0c0 3.145 3.176 5.693 7.094 5.693S0 3.145 0 0"
  })), /*#__PURE__*/_react.default.createElement("g", {
    transform: "matrix(11.44028 0 0 11.90876 642.372 538.293)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#09060a",
    fillOpacity: "1",
    fillRule: "nonzero",
    stroke: "none",
    d: "M0 0c0-2.458-2.178-4.45-4.864-4.45-2.688 0-4.865 1.992-4.865 4.45 0 2.457 2.177 4.449 4.865 4.449C-2.178 4.449 0 2.457 0 0"
  })), /*#__PURE__*/_react.default.createElement("g", {
    transform: "matrix(11.44028 0 0 11.90876 595.437 536.7)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#fff",
    fillOpacity: "1",
    fillRule: "nonzero",
    stroke: "none",
    d: "M0 0c0-1.239-.878-2.244-1.96-2.244-1.082 0-1.96 1.005-1.96 2.244 0 1.24.878 2.245 1.96 2.245C-.878 2.245 0 1.24 0 0"
  })))));

  return /*#__PURE__*/_react.default.createElement("html", {
    lang: locale
  }, /*#__PURE__*/_react.default.createElement("head", null, /*#__PURE__*/_react.default.createElement("meta", {
    charSet: "utf-8"
  }), /*#__PURE__*/_react.default.createElement("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "IE=edge,chrome=1"
  }), /*#__PURE__*/_react.default.createElement("meta", {
    name: "viewport",
    content: "width=device-width"
  }), /*#__PURE__*/_react.default.createElement("title", null, "Bitergia Analytics"), /*#__PURE__*/_react.default.createElement(_fonts.Fonts, {
    url: uiPublicUrl
  }), /*#__PURE__*/_react.default.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: `${uiPublicUrl}/favicons/apple-touch-icon.png`
  }), /*#__PURE__*/_react.default.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: `${uiPublicUrl}/favicons/favicon-32x32.png`
  }), /*#__PURE__*/_react.default.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: `${uiPublicUrl}/favicons/favicon-16x16.png`
  }), /*#__PURE__*/_react.default.createElement("link", {
    rel: "manifest",
    href: `${uiPublicUrl}/favicons/manifest.json`
  }), /*#__PURE__*/_react.default.createElement("link", {
    rel: "mask-icon",
    color: "#e8488b",
    href: `${uiPublicUrl}/favicons/safari-pinned-tab.svg`
  }), /*#__PURE__*/_react.default.createElement("link", {
    rel: "shortcut icon",
    href: `${uiPublicUrl}/favicons/favicon.ico`
  }), /*#__PURE__*/_react.default.createElement("meta", {
    name: "msapplication-config",
    content: `${uiPublicUrl}/favicons/browserconfig.xml`
  }), /*#__PURE__*/_react.default.createElement("meta", {
    name: "theme-color",
    content: "#ffffff"
  }), /*#__PURE__*/_react.default.createElement(_styles.Styles, {
    darkMode: darkMode
  }), /*#__PURE__*/_react.default.createElement("meta", {
    name: "add-styles-here"
  }), /*#__PURE__*/_react.default.createElement("meta", {
    name: "add-scripts-here"
  })), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/(0, _react.createElement)('kbn-csp', {
    data: JSON.stringify({
      strictCsp
    })
  }), /*#__PURE__*/(0, _react.createElement)('kbn-injected-metadata', {
    data: JSON.stringify(injectedMetadata)
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "kbnWelcomeView",
    id: "kbn_loading_message",
    style: {
      display: 'none'
    },
    "data-test-subj": "kbnLoadingMessage"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "kbnLoaderWrap"
  }, logo, /*#__PURE__*/_react.default.createElement("div", {
    className: "kbnWelcomeText",
    "data-error-message": i18n('core.ui.welcomeErrorMessage', {
      defaultMessage: 'Bitergia Analytics did not load properly. Check the server output for more information.'
    })
  }, i18n('core.ui.welcomeMessage', {
    defaultMessage: 'Loading Bitergia Analytics'
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "kbnProgress"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "kbnWelcomeView",
    id: "kbn_legacy_browser_error",
    style: {
      display: 'none'
    }
  }, logo, /*#__PURE__*/_react.default.createElement("h2", {
    className: "kbnWelcomeTitle"
  }, i18n('core.ui.legacyBrowserTitle', {
    defaultMessage: 'Please upgrade your browser'
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "kbnWelcomeText"
  }, i18n('core.ui.legacyBrowserMessage', {
    defaultMessage: 'This Bitergia Analytics installation has strict security requirements enabled that your current browser does not meet.'
  }))), /*#__PURE__*/_react.default.createElement("script", null, `
            // Since this is an unsafe inline script, this code will not run
            // in browsers that support content security policy(CSP). This is
            // intentional as we check for the existence of __kbnCspNotEnforced__ in
            // bootstrap.
            window.__kbnCspNotEnforced__ = true;
          `), /*#__PURE__*/_react.default.createElement("script", {
    src: bootstrapScriptUrl
  })));
};

exports.Template = Template;