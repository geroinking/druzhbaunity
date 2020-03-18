"use strict";
// shows and hides blocks in gallery
let shoHideDruzhba = () => {
    btn1.addEventListener('click', () => {
      druzhba001.forEach(content => {
          content.style.display = 'block';
        },
        druzhba002.forEach(content => {
          content.style.display = 'none';
        }));
    });
  
    btn2.addEventListener('click', () => {
      druzhba001.forEach(content => {
          content.style.display = 'none';
        },
        druzhba002.forEach(content => {
          content.style.display = 'block';
        }));
    });
  };
  
  shoHideDruzhba();

  // shows Faded elements residents/artists in gallery
druzhbaButton.addEventListener('click', () => {
  console.log(druzhbaButton);
});