
embed_code = "https://www.youtube.com/embed/"

index = 0

lista = [
    "ihfVY0XSaWo",
    "3uuAw7Gb55A",
    "pzeOCnZ-ym0",
    "tRHDuLXIi1Y",
    "w85z3VWSIy8",
    "bFIaKLE8-Cs",
    "4wfOzIE3esM",
    "uW8VGnBARUg",
    "gybLVAlP0xQ",
    "AXeAVDM2xUA",
    "0OEEaEdomJE",
    "SQu2IB-aOFo",
    "qBsyWm3B9zQ",
    "InWeW-UHagU",
    "XqAAEOHba58",
    "a_JD5gFczPY",
    "14c-nHpmkhM",
    "x9njb2k7DCo",
    "QO71wxP-KZE",
    "3KHmYkyokVc",
    "jyXs5DEfGV4",
    "Amq5ThRepSE"
]

$(window).load(function(){
    $("#videoFrame").height( $("#videoFrame").width()*(510.0/854.0) );
});

function onLoad(){
    console.log("teszt");
}

function next_btn(){
    console.log("Hello World!");
    document.getElementById('videoFrame').src = embed_code + lista[index++];
};