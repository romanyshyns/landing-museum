'use strict';

document.querySelectorAll('.navigation .bar').forEach((label, index) => {
  label.addEventListener('click', () => {
    document.querySelectorAll('input[name="r"]')[index].checked = true;
  });
});
