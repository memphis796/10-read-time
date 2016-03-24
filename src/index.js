'use strict';
/* globals numWords, readTime */

const entries = document.querySelectorAll(`.entry`);
const entryInfo = document.querySelectorAll(`.entry__info`);
const posts = document.querySelectorAll(`.entry__content`);
const bodyEl = document.querySelector(`body`);
const postTitle = document.querySelectorAll(`.entry__title`);

const nav = document.createElement(`nav`);
bodyEl.appendChild(nav);


for (let i = 0; i < entryInfo.length; i++) {
  const navlink = document.createElement(`a`);
  nav.appendChild(navlink);

  navlink.setAttribute(`href`, `#${entries[i].id}`);
  navlink.innerText = `${postTitle[i].innerText}`;

  const readtime = document.createElement(`li`);
  readtime.classList.add(`read-time`);
  entryInfo[i].appendChild(readtime);
  readtime.innerText = `${readTime(posts[i].innerText, 200)} mins`;
}
