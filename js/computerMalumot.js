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
aSecond.innerHTML = "Bog'lanish"
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



let itemCardPrice = document.querySelectorAll(".item-card");

itemCardPrice.forEach(priceItemCard => {

    let productQuantityFirst = document.createElement("div");
    productQuantityFirst.classList.add("product__quantity");
    // let smartBasketQuantityItem = document.createElement("div");
    // smartBasketQuantityItem.classList.add("smart-basket__quantity-item");
    // let productFirstButton = document.createElement("button");
    // productFirstButton.classList.add("smart-basket__remove-item");
    // productFirstButton.innerHTML = "-";
    // let productFirstInput = document.createElement("input");
    // productFirstInput.classList.add("smart-basket__product-quantity-state");
    // productFirstInput.min = "1";
    // productFirstInput.step = "1";
    // productFirstInput.pattern = "^[0-9]";
    // productFirstInput.value = "1";
    // let smartBasketAddItem = document.createElement("button");
    // smartBasketAddItem.classList.add("smart-basket__add-item");
    // smartBasketAddItem.innerHTML = "+";
    // smartBasketQuantityItem.append(productFirstButton, productFirstInput, smartBasketAddItem);
    // productQuantityFirst.append(smartBasketQuantityItem);
    priceItemCard.append(productQuantityFirst);


});



let smartBasketWrapper = document.createElement("div");
smartBasketWrapper.classList.add("smart-basket__wrapper");
bodyFirst.append(smartBasketWrapper)
let korzinkaBtnitemCard = document.querySelectorAll(".item-card > .korzinka__btn");

korzinkaBtnitemCard.forEach(korzinkaBtnitemCar => {
    korzinkaBtnitemCar.classList.add("korzinka__btnItem");
    korzinkaBtnitemCar.href = '#';
});


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
























// let lziz = localStorage.getItem('basketItems').split('}');

// lziz.forEach(element => {

//     element.split(': "');


// });









// let ItemCarSecond = document.querySelectorAll('.item-card');
// let KAorachi = document.querySelectorAll('.item-image a');
// KAorachi.forEach(element => {
//     element.href = " "
// });



let ItemCarSecondItemCardImage = document.querySelectorAll('.item-card .item-image a');

ItemCarSecondItemCardImage.forEach(itemCardImg => {
    let hp = itemCardImg.closest(".item-card").innerHTML;

    $(itemCardImg).attr("onclick", function () { return $(this).attr("onclick") + ", itemCardDetails(this.closest('.item-card').innerHTML)" });
});



function itemCardDetails(detail) {
    localStorage.setItem('itemCardDetails', detail);
}





// let elastic = document.querySelector('.liveSearch .elasticSecond .elastic');
// let Keresiz = document.createElement("div")
// let itemCardEleastic = document.querySelectorAll('#sticky-header .container-lg #navFirst .liveSearch .col-lg-3.col-md-4.col-sm-6.d-none');
// itemCardEleastic.forEach(element => {

// });
