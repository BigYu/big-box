import $ from 'zeptojs';
import iSlider from 'islider.js';
import TinyTyper from 'tinytyper';
import getList from './getList.js';
import paragraphs from '../data/text.yml';
import './style/index.scss';

console.log(getList(paragraphs.length + 1));

new iSlider(document.getElementById("iSlider-wrapper"), getList(paragraphs.length + 1), {
  isAutoplay: 0,
  isLooping: 0,
  isOverspread: 1,
  animateTime: 800,
  isVertical: 0,
  animateType: 'flip',
  onSlideChanged: (index, el) => {
    if (index > 0 && index <= paragraphs.length) {
      new TinyTyper(el, {
        text: paragraphs[index - 1] || '',
        textClass: `page-text-${index}`,
        cursorClass: `page-text-cursor-${index}`,
        blinkSpeed: 0.09,
      });
    } else if (index > paragraphs.length) {
      new TinyTyper(el);
    }
  }
});
