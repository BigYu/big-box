const $ = require('zeptojs');
const iSlider = require('islider.js')

let list = [
  { content: './static/images/1.jpg' },
  { content: './static/images/2.jpg' },
  { content: './static/images/3.jpg' },
]

let islider = new iSlider(document.getElementById("iSlider-wrapper"), list, {
    isAutoplay: 1,
    isLooping: 0,
    isOverspread: 1,
    animateTime: 800,
    isVertical: true,
    animateType: 'rotate'
});
