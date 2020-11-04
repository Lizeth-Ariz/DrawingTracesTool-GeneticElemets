// https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths

import { SVG } from "@svgdotjs/svg.js";

// canvas Data
const canvaW = 500,
  canvaH = 200;
const scale = 1;

// invoke Data
let adnX = 0;
let adnY = 100;
let adnSize = canvaW;
let adnScalar = 1000; //bp on adn track
let separation = 0;
let x = 0; //leftPosition

// riboswitch data
let name = "riboswitch";
let size = 10;
let strand = "revers"; // default forward

var draw = SVG().addTo("#riboswitch").size(canvaW, canvaH);
draw
  .line(adnX, adnY, canvaW, adnY)
  .stroke({ color: "#f06", width: 2, linecap: "round" });

// riboswitch data
let color = "green";
let opacity = 1;
let stroke = { color: "#000", width: 1, linecap: "round", linejoin: "round" };
let sizeP = (size * adnSize) / adnScalar;
if (sizeP <= 20) {
  sizeP = 20;
}

let hline = 1;
if (sizeP >= 20) {
  hline = sizeP / 2 - 9;
}

var altura = 60 + separation;

var body = draw.path(
  "M 0,0 v " +
    altura +
    " h -" +
    hline +
    " v 5 h " +
    sizeP +
    " v -5 h -" +
    hline +
    " v " +
    -altura
);
let bodyX = x + adnX;
let bodyY = adnY - altura - 5;
body.fill(color).move(bodyX, bodyY);
body.stroke(stroke);
body.opacity(opacity);

var head = draw.path(
  "M 0,0 v 0 c 3.92467,-2.58104 6.63901,-6.13644 7.20008,-10.80012 l 9.14425,-4.37876 c 1.42935,0.40589 2.95449,0.31099 4.3225,-0.26895 3.31023,-1.40895 4.85186,-5.23431 3.44359,-8.54482 -1.40895,-3.31119 -5.23558,-4.85302 -8.54657,-3.44359 -1.56071,0.66486 -2.80056,1.91226 -3.45591,3.47699 l -7.00846,3.09906 c -2.82997,-4.98758 -8.11898,-8.07267 -13.85349,-8.08076 v 0 c -5.97645,0.006 -11.44813,3.35249 -14.17691,8.66963 l -6.84675,-3.04808 c -0.0709,-0.24923 -0.15661,-0.494 -0.25664,-0.73302 -1.40897,-3.31022 -5.23432,-4.85185 -8.54483,-3.44359 -3.31119,1.40895 -4.85303,5.23559 -3.44359,8.54658 1.25369,2.93501 4.44902,4.5297 7.54813,3.76703 l 9.27431,4.38228 c 0.61115,4.33052 3.63944,8.26071 7.20009,10.80012"
);
let headX = adnX + x + (hline - 25);
let headY = adnY - altura - 34;
head.fill(color).move(headX, headY);
head.stroke(stroke);
head.opacity(opacity);

if (strand === "reverse") {
  var group = draw.group();
  group.add(head);
  group.add(body);
  group.rotate(180).move(x + adnX + (hline - 25), headY - altura - 34);
}
