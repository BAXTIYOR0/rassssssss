var modal = document.getElementById("rassrochkaModal");
let body = document.getElementsByTagName('body');
let RassrochkaBody = document.querySelector('body')
// Получить кнопку, которая открывает модальный
var btn = document.getElementById("RassrochkaButton");
var btnSecodn = document.getElementById("rassrochkaButtonSecond");
// Получить элемент <span>, который закрывает модальный
var span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на кнопку, откройте модальный
btn.onclick = function () {
   modal.style.display = "block";
   RassrochkaBody.style.height = '100%';
   RassrochkaBody.style.overflow = 'hidden';
}
btnSecodn.onclick = function () {
   modal.style.display = "block";
   RassrochkaBody.style.height = '100%';
   RassrochkaBody.style.overflow = 'hidden';
}
// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.onclick = function () {
   modal.style.display = "none";
   RassrochkaBody.style.height = '100%';
   RassrochkaBody.style.overflow = 'unset';
}

// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function (event) {
   if (event.target == modal) {
      modal.style.display = "none";
      RassrochkaBody.style.height = '100%';
      RassrochkaBody.style.overflow = 'unset';
   }
}


   let lziz = $productImage = localStorage.getItem('productImage').split(',');
   $productImage.toString();
console.log(lziz);
document.getElementById('productImage').src = $productImage[0];
console.log(document.getElementById('productImage'));
let productFirstItem = document.getElementById('productImage2').src = $productImage[0];
document.getElementById('productImageSecond').src = $productImage[3];
let productSecondItem = document.getElementById('productImageSecondItem').src = $productImage[3];
document.getElementById('productImageThird').src = $productImage[4];
let productThirdItem = document.getElementById('productImageThirdItem').src = $productImage[4];
document.getElementById('productImageFourth').src = $productImage[5];
let productFourthItem = document.getElementById('productImageFourthItem').src = $productImage[5];
let itemMoney = document.getElementById('itemMoney');



itemMoney.innerHTML = $productImage[2];
document.getElementById("detailsPrice").innerHTML = $productImage[2]; 

document.getElementById("detailsTitle").innerHTML = $productImage[1]; 
document.getElementById("detailsImg1").src = $productImage[0   ]; 





for (let index = 0; index < document.getElementsByClassName('titles').length; index++) {
   document.getElementsByClassName('titles')[index].innerHTML = $productImage[1];
}

function setSavatProductImage(image, title) {
   localStorage.setItem('SavatproductImage', [image, title]);
}


let qaleysa = $malumotOtvotti = localStorage.getItem('malumotOtvotti')
document.getElementById('malumotlarChiqar').innerHTML = $malumotOtvotti;




let itemtMoneyKredit = document.getElementById('itemtMoneyKredi');

let numsKredit = '';


let arrString = itemMoney.innerHTML.split(' ');
arrString.forEach((item, i) => {
   if (!isNaN(item)) {
      numsKredit += item
   }
})

function shift() {
   let m = Math.round(+numsKredit / 100);
   let h = Math.round(+m * 38);
   let g = Math.round(+h + +numsKredit);
   let n = Math.round(+g / 12);
   return n.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
}

function shiftEvery() {
   let m = Math.round(+numsKredit / 100);
   let h = Math.round(+m * 38);
   let g = Math.round(+h + +numsKredit);
   return g.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
}
if (itemtMoneyKredit) {
   let bolinma = (itemtMoneyKredit.innerHTML = shift());
}

function shiftThreeMonth() {
   let m = Math.round(+numsKredit / 100);
   let h = Math.round(+m * 15);
   let g = Math.round(+h + +numsKredit);
   let n = Math.round(+g / 3);
   return n.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
}

function shiftThreeMonthEvery() {
   let m = Math.round(+numsKredit / 100);
   let h = Math.round(+m * 15);
   let g = Math.round(+h + +numsKredit);
   return g.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");

}

function shiftTenMonth() {
   let m = Math.round(+numsKredit / 100);
   let h = Math.round(+m * 7);
   let g = Math.round(+h + +numsKredit);
   let n = Math.round(+g / 10);
   return n.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
}


function shiftTenMonthEvery() {
   let m = Math.round(+numsKredit / 100);
   let h = Math.round(+m * 7);
   let g = Math.round(+h + +numsKredit);
   return g.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
}



function shiftSexMonth() {
   let m = Math.round(+numsKredit / 100);
   let h = Math.round(+m * 25);
   let g = Math.round(+h + +numsKredit);
   let n = Math.round(+g / 6);
   return n.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
}

function shiftSexMonthEvery() {
   let m = Math.round(+numsKredit / 100);
   let h = Math.round(+m * 25);
   let g = Math.round(+h + +numsKredit);
   return g.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
}



function shiftNineMonth() {
   let m = Math.round(+numsKredit / 100);
   let h = Math.round(+m * 32);
   let g = Math.round(+h + +numsKredit);
   let n = Math.round(+g / 9);
   return n.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
}


function shiftNineMonthEvery() {
   let m = Math.round(+numsKredit / 100);
   let h = Math.round(+m * 32);
   let g = Math.round(+h + +numsKredit);
   return g.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
}

function shiftfifteenMonth() {
   let m = Math.round(+numsKredit / 100);
   let h = Math.round(+m * 50);
   let g = Math.round(+h + +numsKredit);
   let n = Math.round(+g / 15);
   return n.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
}

function shiftfifteenMonthEvery() {
   let m = Math.round(+numsKredit / 100);
   let h = Math.round(+m * 50);
   let g = Math.round(+h + +numsKredit);
   return g.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
}


let oylikRassrochka = document.getElementById('rassrochkaOylikTolov');
let JamiHammsiRassrochka = document.getElementById('JamiHammsiRassrochka');
let oylarRassrochka = document.querySelectorAll('.oylarRassrochka');
let oylarRassrochka1 = document.querySelectorAll('.oylarRassrochka')[0];
let oylarRassrochka2 = document.querySelectorAll('.oylarRassrochka')[1];
let oylarRassrochka3 = document.querySelectorAll('.oylarRassrochka')[2];
let oylarRassrochka5 = document.querySelectorAll('.oylarRassrochka')[3];
let oylarRassrochka6 = document.querySelectorAll('.oylarRassrochka')[4];
if (oylarRassrochka1.classList.contains("active")) {
   oylikRassrochka.innerHTML = shiftThreeMonth();
   JamiHammsiRassrochka.innerHTML = shiftThreeMonthEvery();

}

oylarRassrochka1.addEventListener('click', function () {
   oylarRassrochka1.classList.add('active');
   oylarRassrochka2.classList.remove('active');
   oylarRassrochka3.classList.remove('active');
   oylarRassrochka5.classList.remove('active');
   oylarRassrochka6.classList.remove('active');

   oylikRassrochka.innerHTML = shiftThreeMonth();
   JamiHammsiRassrochka.innerHTML = shiftThreeMonthEvery();

})

oylarRassrochka2.addEventListener('click', function () {
   oylarRassrochka1.classList.remove('active');
   oylarRassrochka2.classList.add('active');
   oylarRassrochka3.classList.remove('active');
   oylarRassrochka5.classList.remove('active');
   oylarRassrochka6.classList.remove('active');

   oylikRassrochka.innerHTML = shiftSexMonth();
   JamiHammsiRassrochka.innerHTML = shiftSexMonthEvery();

})

oylarRassrochka3.addEventListener('click', function () {
   oylarRassrochka1.classList.remove('active');
   oylarRassrochka2.classList.remove('active');
   oylarRassrochka3.classList.add('active');
   oylarRassrochka5.classList.remove('active');
   oylarRassrochka6.classList.remove('active');


   oylikRassrochka.innerHTML = shiftNineMonth();
   JamiHammsiRassrochka.innerHTML = shiftNineMonthEvery();

})

oylarRassrochka5.addEventListener('click', function () {
   oylarRassrochka1.classList.remove('active');
   oylarRassrochka2.classList.remove('active');
   oylarRassrochka3.classList.remove('active');
   oylarRassrochka5.classList.add('active');
   oylarRassrochka6.classList.remove('active');

   oylikRassrochka.innerHTML = shift();
   JamiHammsiRassrochka.innerHTML = shiftEvery();


})


oylarRassrochka6.addEventListener('click', function () {
   oylarRassrochka1.classList.remove('active');
   oylarRassrochka2.classList.remove('active');
   oylarRassrochka3.classList.remove('active');
   oylarRassrochka5.classList.remove('active');
   oylarRassrochka6.classList.add('active');
   oylikRassrochka.innerHTML = shiftfifteenMonth();
   JamiHammsiRassrochka.innerHTML = shiftfifteenMonthEvery();

})

let mobileMenu = document.querySelectorAll('.mobile-menu');
let lastElem = mobileMenu[mobileMenu.length - 1];
let acerMobile = document.querySelectorAll('.footer__menu > .has-children-menu > .dropdown > li > a')[0];
acerMobile.innerHTML = "To'lov usullari";
acerMobile.href = "price.html";
let acerMobilesecond = document.querySelectorAll('.footer__menu > .has-children-menu > .dropdown > li > a')[1];
acerMobilesecond.innerHTML = "muddatli tolovga sotib olish";
acerMobilesecond.href = "rasrochka.html";

let acerMobileThird = document.querySelectorAll('.footer__menu > .has-children-menu > .dropdown > li > a')[2];
acerMobileThird.innerHTML = "yordam";
acerMobileThird.href = "help.html";



let aceracer = document.querySelector('.footer__menu > .has-children-menu > .dropdown ');
let aFirstthird = document.createElement('li');
let aSecond = document.createElement('a');
aSecond.href = 'contact.html'
aSecond.classList.add('footer__inner-title1');
aSecond.innerHTML = "Boglanish"
aFirstthird.append(aSecond)
aceracer.append(aFirstthird);





let headerMenu = document.querySelector(".main_nav .cat_menu_container .cat_menu");
let telfonmenu = document.createElement("li");
telfonmenu.classList.add('hassubs');
let telfonmenuAbtn = document.createElement("a");
let telfonmenuAbtnIcon = document.createElement("i");
telfonmenuAbtnIcon.classList.add("fas");
telfonmenuAbtnIcon.classList.add("fa-chevron-right");
telfonmenuAbtn.innerText = "Telefonlar";
let telfonmenuUl = document.createElement("ul");
let samsungSmartfonLi = document.createElement("li");
let appleSmartfonLi = document.createElement("li");
let miSmartfonLi = document.createElement("li");

let samsungSmart = document.createElement("a");
samsungSmart.innerText = "samsung telefonlari"
samsungSmart.href = "samsungsmartPhone.html"
let appleSmart = document.createElement("a");
appleSmart.innerText = "apple telefonlari"
appleSmart.href = "appleSmart.html"
let miSmart = document.createElement("a");
miSmart.innerText = "xiomi telefonlari"
miSmart.href = "xiomi.html"



samsungSmartfonLi.append(samsungSmart);
appleSmartfonLi.append(appleSmart);
miSmartfonLi.append(miSmart);


telfonmenuUl.append(samsungSmartfonLi, appleSmartfonLi, miSmartfonLi);

telfonmenuAbtn.append(telfonmenuAbtnIcon);
telfonmenu.append(telfonmenuAbtn, telfonmenuUl);
headerMenu.append(telfonmenu);





let phoneWindowSmartphone = document.querySelector("aside .mobile-menu .has-children-menu > .dropdown");


let telfonmenuaside = document.createElement("li");
telfonmenuaside.classList.add('has-children-menu');
let spanIcon = document.createElement("span");
spanIcon.classList.add("menu-expand");
let spanIconInner = document.createElement("i");
spanIcon.append(spanIconInner);
let telfonmenuasideAbtn = document.createElement("a");
telfonmenuasideAbtn.innerText = "Telefonlar";
telfonmenuasideAbtn.href = "#";
let telfonmenuasideUl = document.createElement("ul");
telfonmenuasideUl.classList.add("dropdown");
telfonmenuasideUl.classList.add("dropdownphone");
let samsungSmartfonasideLi = document.createElement("li");
let appleSmartfonasideLi = document.createElement("li");
let miSmartfonasideLi = document.createElement("li");

let samsungasideSmart = document.createElement("a");
samsungasideSmart.innerText = "samsung telefonlari"
samsungasideSmart.href = "samsungsmartPhone.html"
let appleasideSmart = document.createElement("a");
appleasideSmart.innerText = "apple telefonlari"
appleasideSmart.href = "appleSmart.html"
let mismartSmart = document.createElement("a");
mismartSmart.innerText = "xiomi telefonlari"
mismartSmart.href = "xiomi.html"

// telfonmenuasideAbtnli.append(telfonmenuasideAbtn)

samsungSmartfonasideLi.append(samsungasideSmart);
appleSmartfonasideLi.append(appleasideSmart);
miSmartfonasideLi.append(mismartSmart);


telfonmenuasideUl.append(samsungSmartfonasideLi, appleSmartfonasideLi, miSmartfonasideLi);

telfonmenuaside.append(telfonmenuasideAbtn, telfonmenuasideUl, spanIcon);
phoneWindowSmartphone.append(telfonmenuaside);











let headerLogo = document.querySelectorAll(".header__logo");
headerLogo.forEach(element => {
    element.innerText = " "
    let img = document.createElement("img");
    img.src = "images/logoImgFirst.jpg";
    element.append(img);
});





let iconKorzin = document.querySelectorAll(".korzinka__btn img")

iconKorzin.forEach(iconkor => {
    iconkor.src = "images/product-card..png";
});




let bodyFirst = document.querySelector("body");
// let smartbarketJs = document.createElement("script");
// smartbarketJs.src = "js/smartbasket.min.js";
// bodyFirst.append(smartbarketJs);


let itemCard = document.querySelectorAll(".item-card");

itemCard.forEach(element => {
    let buttonItem = document.createElement("button");
    buttonItem.classList.add("product__add-to-cart-button");
    // let attributeButton = buttonItem.getAttribute("href")

    let itemCardTitle = element.querySelector(".item-title").innerHTML;
    let itemCardTitleElem = element.querySelector(".item-title");

    let itemCardTitleId = itemCardTitleElem.getAttribute('id');
    // let itemCardTitleHtml = itemCardTitle.substr(1, 2);

    let itemcardPrice = element.querySelector(".item-price").innerHTML;


    let numsKredit = '';


    let arrString = itemcardPrice.split(' ');
    arrString.forEach((item, i) => {
        if (!isNaN(item)) {
            numsKredit += item
        }
    })
    // console.log(numsKredit);

    let itemCardpriceHtml = itemcardPrice.charAt(1);

    let itemCardFirstImg = element.querySelector(".item-image img").src;

    let itemCardImgElem = element.querySelector(".item-image img");

    let itemCardImgId = itemCardImgElem.getAttribute('id');
    // let itemCardImgAtr = itemCardImgId.substr(1, 2);
    // let itemCardImgHtml = itemCardFirstImg.substr(1, 2);


    let itemCardAcerkomp = itemCardTitle;

    let itemCardAcerkompInner = itemCardAcerkomp.split(' ').join('');


    buttonItem.setAttribute('data-sb-id-or-vendor-code', itemCardAcerkompInner);
    buttonItem.setAttribute('data-sb-product-name', itemCardTitle);
    buttonItem.setAttribute('data-sb-product-price', numsKredit);
    buttonItem.setAttribute('data-sb-product-img', itemCardFirstImg);

    let itemCardkorzinaImg = document.createElement("img");
    itemCardkorzinaImg.src = "images/product-card..png";
    let itemCardText = document.createElement("span");
    itemCardText.innerHTML = "savatchaga";
    buttonItem.append(itemCardkorzinaImg, itemCardText);
    element.append(buttonItem);

    // buttonItem.addEventListener("click", setKorzina(itemCardFirstImg, itemCardPrice, itemCardTitle));


    let itemCardItemImageImg = element.querySelector(".item-image img");

    // itemCardItemImageImg.addEventListener("click", itemRoison(itemCardItemImageImg.closest(".item-card")))
});




let smartBasketWrapper = document.createElement("div");
smartBasketWrapper.classList.add("smart-basket__wrapper");
bodyFirst.append(smartBasketWrapper)
let korzinkaBtnitemCard = document.querySelectorAll(".item-card > .korzinka__btn");

korzinkaBtnitemCard.forEach(korzinkaBtnitemCar => {
    korzinkaBtnitemCar.classList.add("korzinka__btnItem");
    korzinkaBtnitemCar.href = '#';
});




let asideMain = document.querySelector("aside .alohid .mobile-menu");
// console.log(asideMain.innerHTML);
let mobileMenuSmartphone = document.querySelector("aside .mobile-menu");
let headerContainer = document.querySelector(".header #sticky-header")

let headerContainerLg = document.createElement("div");
headerContainerLg.classList.add("container-lg")


let headerBasketMin = document.createElement("div");
headerBasketMin.classList.add("header__basket-min");
// let smartBasketMin = document.createElement("button");
// smartBasketMin.classList.add("smart-basket__min");

// headerBasketMin.append(smartBasketMin)

let navFirst = headerContainer.querySelector("#navFirst");
let navSecond = headerContainer.querySelector(".headerSeondNav")
let boshDic = document.createElement("div")
headerContainerLg.append(navFirst, navSecond)
let bodyVlienWidth = bodyFirst.clientWidth
if (bodyVlienWidth > 992) {
headerContainerLg.append(headerBasketMin)

}
else{
    mobileMenuSmartphone.append(headerBasketMin);

    headerBasketMin.addEventListener("click", () => {
        let asideBirdan = document.querySelector('.mobile-menu-wrapper');
        asideBirdan.classList.remove("open")
    })
}
headerContainer.append(headerContainerLg); 




// $(function () {
//     $('.smart-basket__wrapper').smbasket({
//         productElement: 'item-card',
//         buttonAddToBasket: 'product__add-to-cart-button',
//         productPrice: 'item-price',
//         productQuantityWrapper: 'product__quantity',
//         smartBasketMinArea: 'smart-basket__min',
//         countryCode: '+998',
//         smartBasketCurrency: "so'm",
//         smartBasketMinIconPath: 'images/shopping-basket-wight.svg',

//         agreement: {
//             isRequired: true,
//             isChecked: true,
//             isLink: 'https://smartlanding.biz',
//         },
//         nameIsRequired: true,
//     });
// });



$(document).ready(function () {
    $('.smart-basket__wrapper').smbasket({
        productElement: 'item-card',
        buttonAddToBasket: 'product__add-to-cart-button',
        productPrice: 'item-price',
        productQuantityWrapper: 'product__quantity',
        smartBasketMinArea: 'header__basket-min',
        countryCode: '+998',
        smartBasketCurrency: "so'm",
        smartBasketMinIconPath: 'images/product-card..png',

        agreement: {
            isRequired: true,
            isChecked: true,
            isLink: 'https://rasskredo.uz',
        },
        namelsRequired: false
    });
});


















// let iphone =  $itemCardDetails = localStorage.getItem('itemCardDetails');

// console.log($itemCardDetails);

// let nosh = document.querySelector('.item-card')

// nosh.innerHTML = $itemCardDetails;  