var icons, iconTexts, remove;

remove = function() {
  icons = document.querySelectorAll('.emote_img');
  iconTexts = document.querySelectorAll('.emote_text');
  for (var i = 0; i < icons.length; i++) {
    icons[i].style.display = 'none';
  }
  for (var j = 0; j < iconTexts.length; j++) {
    iconTexts[j].style.display = 'inline';
  }
};

setInterval(remove, 300);
