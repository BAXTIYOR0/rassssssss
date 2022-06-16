document.querySelector('#elastic').oninput = function () {
   let val = this.value.trim().toLowerCase();
   // let val = valKot.toLowercase();
   let elasticItems = document.querySelectorAll('.elasticBtn')
   if (val != '') {
      elasticItems.forEach(function (elem) {
         if (elem.innerText.search(val) == -1) {
            elem.classList.remove('hide');
            elem.innerHTML = elem.innerHTML;
         } else {

            elem.classList.add('hide');
            let str = elem.innerText;
            elem.innerHTML = insertMark(str, elem.innerText.search(val), val.length)
         }
      })
   } else {
      elasticItems.forEach(function (elem) {
         elem.classList.remove('hide');
         elem.innerHTML = elem.innerText;

      })
   }
}

function insertMark(string, pos, len) {
   // hello world
   // hello <mark>wo</mark>rld
   // hello+<mark>+wo+</mark>+rld
   return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len);
}

let searchAsidehp = document.querySelector('.elasticQonday');

document.querySelector('#asideSearch').oninput = function () {

   let val = this.value.trim().toLowerCase();
   // let val = valKot.toLowercase();
   let elasticItems = document.querySelectorAll('.elasticBtn')
   if (val != '') {
      elasticItems.forEach(function (elem) {
         if (elem.innerText.search(val) == -1) {
            elem.classList.remove('hide');
            elem.innerHTML = elem.innerHTML;
            searchAsidehp.classList.add('active')
             
         } else {

            elem.classList.add('hide');
            let str = elem.innerText;
            elem.innerHTML = insertMark(str, elem.innerText.search(val), val.length)
            searchAsidehp.classList.remove('active')
         }
      })
   } else {
      elasticItems.forEach(function (elem) {
         elem.classList.remove('hide');
         elem.innerHTML = elem.innerText;
         searchAsidehp.classList.remove('active')
      })
      }
      
   }

function insertMark(string, pos, len) {
   // hello world
   // hello <mark>wo</mark>rld
   // hello+<mark>+wo+</mark>+rld
   return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len);
}



let footerGap = document.querySelector('.footer_gap');
let aFirst = document.createElement('a');
aFirst.href = 'contact.html'
aFirst.classList.add('footer__inner-title1');
aFirst.innerHTML = "Bog'lanish"
footerGap.append(aFirst)

let footerInnerTitle1 = document.querySelectorAll('.footer__inner-title1')[3];
footerInnerTitle1.innerHTML = "To'lov usullari"; 
footerInnerTitle1.href = "price.html";
let footerInnerTitle2 = document.querySelectorAll('.footer__inner-title1')[4];
footerInnerTitle2.innerHTML = "muddatli tolovga sotib olish"; 
footerInnerTitle2.href = "rasrochka.html";
let footerInnerTitle3 = document.querySelectorAll('.footer__inner-title1')[5];
footerInnerTitle3.innerHTML = "yordam"; 
footerInnerTitle3.href = "help.html";

