let yoBobKetSelected = document.querySelector('.yoBobKetSelected')[0];
let yoBobKetSelectedClick = document.querySelector('.yoBobKetSelectedClick')[0];
console.log(yoBobKetSelectedClick);

yoBobKetSelectedClick.addEventListener('click', function () {
  
  yoBobKetSelected.style.display = 'none'
  yoBobKetSelected.style.display = 'inline-block'
  
  // yoBobKetSelectedClick.classList.toggle('active')
  
  // if (yoBobKetSelectedClick.classList.contains('active')) {
  //   yoBobKetSelected.style.display = 'none'
  // } else{
  //   yoBobKetSelected.style.display = 'inline-block'
  // }
});