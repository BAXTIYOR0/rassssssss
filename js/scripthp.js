
let buttonSamsungHeight = document.querySelectorAll('.samsung_height')[0],
    buttonSamsungHeightSpan = document.querySelectorAll('.samsung_height-span')[0],
    malumotHeight = document.querySelectorAll('.malumotlar1')[0],
    malumotHeightIco = document.querySelectorAll('.samsung_height_ico')[0],
    malumotHeightIco2 = document.querySelectorAll('.samsung_height_ico2')[0];


buttonSamsungHeight.addEventListener('click', function () {
    buttonSamsungHeight.classList.toggle('active')
    if (buttonSamsungHeight.classList.contains('active')) {
        malumotHeightIco.style.display = 'none'
        malumotHeightIco2.style.display = 'inline-block'
        malumotHeight.style.height = "100%"
        buttonSamsungHeightSpan.textContent = 'yashirish'
    } else{
        malumotHeightIco.style.display = 'inline-block'
        malumotHeightIco2.style.display = 'none'
        malumotHeight.style.height = "325px"
        buttonSamsungHeightSpan.textContent = "Davomini o'qish"
    }
});