import $ from 'zeptojs';
import iSlider from 'islider.js';
import TinyTyper from 'tinytyper';
import getList from './getList.js';
import paragraphs from '../data/text.yml';
import './style/index.scss';

console.log(paragraphs);

new iSlider(document.getElementById("iSlider-wrapper"), getList(paragraphs.length + 1), {
  isAutoplay: 0,
  isLooping: 0,
  isOverspread: 1,
  animateTime: 800,
  isVertical: 0,
  animateType: 'card',
  onSlideChanged: (index, el) => {
    if (index > 0) {
        let typer = new TinyTyper(el, {
        text: paragraphs[index - 1] || '',
      });
    }
  }
});
