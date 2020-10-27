let imgs = [];

// const circle = document.createElement('div');
// document.body.appendChild(circle);
// circle.style = 'position: absolute; width: 50px; height: 50px; border: solid 2px red; border-radius: 50%';


for (let i = 0; i < ((innerHeight / 25) * (innerWidth / 25)); i++) {
  let img = new Image();
  img.src = './star.png';
  img.style = 'width: 25px; height: 25px;';
  document.body.appendChild(img);
  imgs.push(img);
}

// document.querySelectorAll('img').forEach(elem => {
//   elem.addEventListener('mouseenter', e => {
//     console.log(e.offsetX, e.offsetY);
//     // elem.style.transform = `translate(${Math.random() * 50}px, ${Math.random() * 50}px)`;
//   });
// });


// document.body.addEventListener('mousemove', e => {
//   console.log(this.getSelection());
// });

document.body.addEventListener('mouseover', e => {
  let clX = e.clientX;
  let clY = e.clientY;
  // console.log(`clX: ${clX}, clY: ${clY}`);

  document.querySelectorAll('img').forEach((elem) => {
    let elemX = elem.getBoundingClientRect().x;
    let elemY = elem.getBoundingClientRect().y;
    // console.log(`elemY: ${elemY}, elemX: ${elemX}`);

    if ((elemX < clX + 50 && elemX > clX - 50) && (elemY < clY + 50 && elemY > clY - 50)) {
      // elem.style.transform = `translate(${Math.random() * 50}px, ${Math.random() * 50}px)`;

      if ((elemX < clX + 50 && elemX >= clX) && (elemY < clY + 50 && elemY >= clY)) {
        elem.style.transform = `translate(50px, -50px)`;
      } else if ((elemX > clX - 50 && elemX < clX) && (elemY > clY - 50 && elemY < clY)) {
        elem.style.transform = `translate(-50px, 50px)`;
      } else if ((elemX < clX + 50 && elemX >= clX) && (elemY > clY - 50 && elemY < clY)) {
        elem.style.transform = `translate(50px, 50px)`;
      } else if((elemX > clX - 50 && elemX < clX) && (elemY < clY + 50 && elemY >= clY)) {
        elem.style.transform = `translate(-50px, -50px)`;
      }


    } else {
      elem.style.transform = 'translate(0, 0)';
    }
  });


  // circle.style.top = `${clY - circle.offsetHeight / 2}px`;
  // circle.style.left = `${clX - circle.offsetWidth / 2}px`;
  // document.querySelectorAll('img').forEach(elem => {
  //   elem.addEventListener('mouseenter', e => {
  //     let elemX = elem.getBoundingClientRect().x;
  //     let elemY = elem.getBoundingClientRect().y;
  //     console.log(`elemY: ${elemY}, elemX: ${elemX}`);

  //     if ((elemX < clX + 50 && elemX > clX - 50) && (elemY < clY + 50 && elemY > clY - 50)) {
  //       elem.style.transform = `translate(${Math.random() * 50}px, ${Math.random() * 50}px)`;
  //     }
  //   })
  // });

});

