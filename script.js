
embed_code = "https://www.youtube.com/embed/"

end = "QO71wxP-KZE"

index = -1;
good = 0;
bad = 0;
all = 19;

lista = [
    "ihfVY0XSaWo",//1
    "w85z3VWSIy8",//2
    "uW8VGnBARUg",//3
    "pzeOCnZ-ym0",//4
    "tRHDuLXIi1Y",//5
    "x9njb2k7DCo",//ötös szintén
    "14c-nHpmkhM",//6
    "qBsyWm3B9zQ",//7
    "3uuAw7Gb55A",//8
    "4wfOzIE3esM",//9
    "AXeAVDM2xUA",//10
    "Amq5ThRepSE",//11
    "a_JD5gFczPY",//12
    "0OEEaEdomJE",//13
    "bFIaKLE8-Cs",//14
    "3KHmYkyokVc",//15
    "gybLVAlP0xQ",//16
    "SQu2IB-aOFo",//17
    "jyXs5DEfGV4",//18
    "InWeW-UHagU",//19
    "XqAAEOHba58",//20
]

$(window).load(function(){
    $("#videoFrame").height( $("#videoFrame").width()*(510.0/854.0) );
});

function next(){
    index++;
    //document.getElementById('videoFrame').src = embed_code + lista[index];

    corrig = (index > 4)? -1: 0;
    document.getElementById('cim').innerHTML = (index+1+corrig)+". Kérdés"

    if(index == 0){
        document.getElementById('indulhat').style.visibility = "hidden"
        document.getElementById('valasz1').style.visibility = "visible"
        document.getElementById('valasz2').style.visibility = "visible"
    }else if(index == 4){
        document.getElementById('valasz1').style.visibility = "hidden"
        document.getElementById('valasz2').style.visibility = "hidden"

        document.getElementById('kerdes5').style.visibility = "visible"
    }else if (index == 5){
        document.getElementById('valasz1').style.visibility = "visible"
        document.getElementById('valasz2').style.visibility = "visible"

        document.getElementById('kerdes5').style.visibility = "hidden"
    }else if(index == 20){
        document.getElementById('valasz1').style.visibility = "hidden"
        document.getElementById('valasz2').style.visibility = "hidden"
        document.getElementById('cim').innerHTML = "Happy End!"
        document.getElementById('videoFrame').src = embed_code + end;
    }

    document.getElementById('good_percent').style.width = good/all*100+"%"
    document.getElementById('bad_percent').style.width = bad/all*100+"%"
}

function good_btn(){
    good++;
    next();
}

function bad_btn(){
    bad++;
    next();
}
