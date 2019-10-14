
 function GetDates(startDate, daysToAdd) {
    var aryDates = [];

    for (var i = 0; i <= daysToAdd; i++) {
        var currentDate = new Date();
        currentDate.setDate(startDate.getDate() + i);
        aryDates.push(currentDate.getDate() + "/" + MonthAsString(currentDate.getMonth()) +' '+DayAsString(currentDate.getDay()));
    }

    return aryDates;
}

function MonthAsString(monthIndex) {
    var d = new Date();
    var month = new Array();
    month[0] = "01";
    month[1] = "02";
    month[2] = "03";
    month[3] = "04";
    month[4] = "05";
    month[5] = "06";
    month[6] = "07";
    month[7] = "08";
    month[8] = "09";
    month[9] = "10";
    month[10] = "11";
    month[11] = "12";

    return month[monthIndex];
}

function DayAsString(dayIndex) {
    var weekdays = new Array(7);
    weekdays[0] = "Pzr";
    weekdays[1] = "Pts";
    weekdays[2] = "Sal";
    weekdays[3] = "Crs";
    weekdays[4] = "Prs";
    weekdays[5] = "Cum";
    weekdays[6] = "Cts";

    return weekdays[dayIndex];
}

var startDate = new Date();
var aryDates = GetDates(startDate, 7);
document.getElementById("1gun").innerHTML = "Bugün";
document.getElementById("gun1demo").innerHTML = aryDates[0];
document.getElementById("2gun").innerHTML = "Yarın";
document.getElementById("gun2demo").innerHTML = aryDates[1];
document.getElementById("3gun").innerHTML = aryDates[2];
document.getElementById("gun3demo").innerHTML = aryDates[2];
document.getElementById("4gun").innerHTML = aryDates[3];
document.getElementById("gun4demo").innerHTML = aryDates[3];
document.getElementById("5gun").innerHTML = aryDates[4];
document.getElementById("gun5demo").innerHTML = aryDates[4];
document.getElementById("6gun").innerHTML = aryDates[5];
document.getElementById("gun6demo").innerHTML = aryDates[5];
document.getElementById("7gun").innerHTML = aryDates[6];
document.getElementById("gun7demo").innerHTML = aryDates[6];

$("#imageUpload").click(function(){
$("#image").click()
return false
})
$("#image").change(function(){
$("#imageSubmit").click()
})


$("#hizmetEkleButon").click(function(){
    $("#hizmetAd").show();
    $("#hizmetFiyat").show();
    $("#hizmetEkleButon").hide();
    $("#hizmetEkleİnput").show();
    return false
});


$("#personEkleButon").click(function(){
    $("#personAd").show();
    $("#personSoyad").show();
    $("#personEkleButon").hide();
    $("#personEkleİnput").show();
    return false
});

/*-------------- GUN 1 BAŞLANGIÇ --------------- */

$("#gun1 button").click(function(){
if (this.className == "btn btn-default btn-lg btn-success"){
this.className = "btn btn-default btn-lg btn-danger";
}
else if(this.className == "btn btn-default btn-lg btn-danger"){
  this.className = "btn btn-default btn-lg btn-success";
}
if($(this).data("id") == "08:00"){
    if(this.className == "btn btn-default btn-lg btn-success"){
    $("#1gun8").val("btn btn-default btn-lg btn-success")
    }else {
    $("#1gun8").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "08:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
   $("#1gun830").val("btn btn-default btn-lg btn-success")
    }else {
    $("#1gun830").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "09:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#1gun9").val("btn btn-default btn-lg btn-success")
    }else {
    $("#1gun9").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "09:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#1gun930").val("btn btn-default btn-lg btn-success")
    }else {
    $("#1gun930").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "10:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#1gun10").val("btn btn-default btn-lg btn-success")
    }else {
    $("#1gun10").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "10:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#1gun1030").val("btn btn-default btn-lg btn-success")
    }else {
    $("#1gun1030").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "11:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#1gun11").val("btn btn-default btn-lg btn-success")
    }else {
    $("#1gun11").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "11:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#1gun1130").val("btn btn-default btn-lg btn-success")
    }else {
    $("#1gun1130").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "12:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#1gun12").val("btn btn-default btn-lg btn-success")
    }else {
    $("#1gun12").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "12:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#1gun1230").val("btn btn-default btn-lg btn-success")
    }else {
    $("#1gun1230").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "13:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#1gun13").val("btn btn-default btn-lg btn-success")
    }else {
    $("#1gun13").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "13:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#1gun1330").val("btn btn-default btn-lg btn-success")
    }else {
    $("#1gun1330").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "14:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#1gun14").val("btn btn-default btn-lg btn-success")
    }else {
    $("#1gun14").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "14:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#1gun1430").val("btn btn-default btn-lg btn-success")
    }else {
    $("#1gun1430").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "15:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#1gun15").val("btn btn-default btn-lg btn-success")
    }else {
    $("#1gun15").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "15:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#1gun1530").val("btn btn-default btn-lg btn-success")
    }else {
    $("#1gun1530").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "16:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#1gun16").val("btn btn-default btn-lg btn-success")
    }else {
    $("#1gun16").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "16:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#1gun1630").val("btn btn-default btn-lg btn-success")
    }else {
    $("#1gun1630").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "17:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#1gun17").val("btn btn-default btn-lg btn-success")
    }else {
    $("#1gun17").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "17:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#1gun1730").val("btn btn-default btn-lg btn-success")
    }else {
    $("#1gun1730").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "18:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#1gun18").val("btn btn-default btn-lg btn-success")
    }else {
    $("#1gun18").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "18:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#1gun1830").val("btn btn-default btn-lg btn-success")
    }else {
    $("#1gun1830").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "19:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#1gun19").val("btn btn-default btn-lg btn-success")
    }else {
    $("#1gun19").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "19:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#1gun1930").val("btn btn-default btn-lg btn-success")
    }else {
    $("#1gun1930").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "20:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#1gun20").val("btn btn-default btn-lg btn-success")
    }else {
    $("#1gun20").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "20:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#1gun2030").val("btn btn-default btn-lg btn-success")
    }else {
    $("#1gun2030").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "21:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#1gun21").val("btn btn-default btn-lg btn-success")
    }else {
    $("#1gun21").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "21:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#1gun2130").val("btn btn-default btn-lg btn-success")
    }else {
    $("#1gun2130").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "22:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#1gun22").val("btn btn-default btn-lg btn-success")
    }else {
    $("#1gun22  ").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "22:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#1gun2230").val("btn btn-default btn-lg btn-success")
    }else {
    $("#1gun2230").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "23:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#1gun23").val("btn btn-default btn-lg btn-success")
    }else {
    $("#1gun23").val("btn btn-default btn-lg btn-danger")
    }
}
});

/*----------------------------------- GUN 2 BAŞLANGIÇ-----------------------------*/


$("#gun2 button").click(function(){
console.log(this.className)
if (this.className == "btn btn-default btn-lg btn-success"){
this.className = "btn btn-default btn-lg btn-danger";
}
else if(this.className == "btn btn-default btn-lg btn-danger"){
  this.className = "btn btn-default btn-lg btn-success";
}
if($(this).data("id") == "08:00"){
    if(this.className == "btn btn-default btn-lg btn-success"){
    $("#2gun8").val("btn btn-default btn-lg btn-success")
    }else {
    $("#2gun8").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "08:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#2gun830").val("btn btn-default btn-lg btn-success")
    }else {
    $("#2gun830").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "09:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#2gun9").val("btn btn-default btn-lg btn-success")
    }else {
    $("#2gun9").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "09:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#2gun930").val("btn btn-default btn-lg btn-success")
    }else {
    $("#2gun930").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "10:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#2gun10").val("btn btn-default btn-lg btn-success")
    }else {
    $("#2gun10").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "10:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#2gun1030").val("btn btn-default btn-lg btn-success")
    }else {
    $("#2gun1030").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "11:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#2gun11").val("btn btn-default btn-lg btn-success")
    }else {
    $("#2gun11").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "11:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#2gun1130").val("btn btn-default btn-lg btn-success")
    }else {
    $("#2gun1130").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "12:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#2gun12").val("btn btn-default btn-lg btn-success")
    }else {
    $("#2gun12").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "12:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#2gun1230").val("btn btn-default btn-lg btn-success")
    }else {
    $("#2gun1230").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "13:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#2gun13").val("btn btn-default btn-lg btn-success")
    }else {
    $("#2gun13").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "13:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#2gun1330").val("btn btn-default btn-lg btn-success")
    }else {
    $("#2gun1330").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "14:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#2gun14").val("btn btn-default btn-lg btn-success")
    }else {
    $("#2gun14").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "14:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#2gun1430").val("btn btn-default btn-lg btn-success")
    }else {
    $("#2gun1430").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "15:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#2gun15").val("btn btn-default btn-lg btn-success")
    }else {
    $("#2gun15").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "15:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#2gun1530").val("btn btn-default btn-lg btn-success")
    }else {
    $("#2gun1530").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "16:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#2gun16").val("btn btn-default btn-lg btn-success")
    }else {
    $("#2gun16").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "16:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#2gun1630").val("btn btn-default btn-lg btn-success")
    }else {
    $("#2gun1630").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "17:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#2gun17").val("btn btn-default btn-lg btn-success")
    }else {
    $("#2gun17").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "17:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#2gun1730").val("btn btn-default btn-lg btn-success")
    }else {
    $("#2gun1730").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "18:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#2gun18").val("btn btn-default btn-lg btn-success")
    }else {
    $("#2gun18").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "18:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#2gun1830").val("btn btn-default btn-lg btn-success")
    }else {
    $("#2gun1830").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "19:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#2gun19").val("btn btn-default btn-lg btn-success")
    }else {
    $("#2gun19").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "19:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#2gun1930").val("btn btn-default btn-lg btn-success")
    }else {
    $("#2gun1930").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "20:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#2gun20").val("btn btn-default btn-lg btn-success")
    }else {
    $("#2gun20").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "20:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#2gun2030").val("btn btn-default btn-lg btn-success")
    }else {
    $("#2gun2030").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "21:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#2gun21").val("btn btn-default btn-lg btn-success")
    }else {
    $("#2gun21").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "21:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#2gun2130").val("btn btn-default btn-lg btn-success")
    }else {
    $("#2gun2130").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "22:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#2gun22").val("btn btn-default btn-lg btn-success")
    }else {
    $("#2gun22").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "22:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#2gun2230").val("btn btn-default btn-lg btn-success")
    }else {
    $("#2gun2230").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "23:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#2gun23").val("btn btn-default btn-lg btn-success")
    }else {
    $("#2gun23").val("btn btn-default btn-lg btn-danger")
    }
}
});

/*--------------------- GUN 3 BAŞLANGIÇ ------------------------------*/

$("#gun3 button").click(function(){
console.log(this.className)
if (this.className == "btn btn-default btn-lg btn-success"){
this.className = "btn btn-default btn-lg btn-danger";
}
else if(this.className == "btn btn-default btn-lg btn-danger"){
  this.className = "btn btn-default btn-lg btn-success";
}
if($(this).data("id") == "08:00"){
    if(this.className == "btn btn-default btn-lg btn-success"){
    $("#3gun8").val("btn btn-default btn-lg btn-success")
    }else {
    $("#3gun8").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "08:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#3gun830").val("btn btn-default btn-lg btn-success")
    }else {
    $("#3gun830").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "09:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#3gun9").val("btn btn-default btn-lg btn-success")
    }else {
    $("#3gun9").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "09:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#3gun930").val("btn btn-default btn-lg btn-success")
    }else {
    $("#3gun930").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "10:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#3gun10").val("btn btn-default btn-lg btn-success")
    }else {
    $("#3gun10").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "10:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#3gun1030").val("btn btn-default btn-lg btn-success")
    }else {
    $("#3gun1030").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "11:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#3gun11").val("btn btn-default btn-lg btn-success")
    }else {
    $("#3gun11").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "11:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#3gun1130").val("btn btn-default btn-lg btn-success")
    }else {
    $("#3gun1130").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "12:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#3gun12").val("btn btn-default btn-lg btn-success")
    }else {
    $("#3gun12").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "12:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#3gun1230").val("btn btn-default btn-lg btn-success")
    }else {
    $("#3gun1230").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "13:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#3gun13").val("btn btn-default btn-lg btn-success")
    }else {
    $("#3gun13").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "13:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#3gun1330").val("btn btn-default btn-lg btn-success")
    }else {
    $("#3gun1330").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "14:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#3gun14").val("btn btn-default btn-lg btn-success")
    }else {
    $("#3gun14").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "14:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#3gun1430").val("btn btn-default btn-lg btn-success")
    }else {
    $("#3gun1430").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "15:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#3gun15").val("btn btn-default btn-lg btn-success")
    }else {
    $("#3gun15").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "15:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#3gun1530").val("btn btn-default btn-lg btn-success")
    }else {
    $("#3gun1530").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "16:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#3gun16").val("btn btn-default btn-lg btn-success")
    }else {
    $("#3gun16").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "16:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#3gun1630").val("btn btn-default btn-lg btn-success")
    }else {
    $("#3gun1630").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "17:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#3gun17").val("btn btn-default btn-lg btn-success")
    }else {
    $("#3gun17").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "17:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#3gun1730").val("btn btn-default btn-lg btn-success")
    }else {
    $("#3gun1730").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "18:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#3gun18").val("btn btn-default btn-lg btn-success")
    }else {
    $("#3gun18").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "18:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#3gun1830").val("btn btn-default btn-lg btn-success")
    }else {
    $("#3gun1830").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "19:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#3gun19").val("btn btn-default btn-lg btn-success")
    }else {
    $("#3gun19").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "19:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#3gun1930").val("btn btn-default btn-lg btn-success")
    }else {
    $("#3gun1930").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "20:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#3gun20").val("btn btn-default btn-lg btn-success")
    }else {
    $("#3gun20").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "20:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#3gun2030").val("btn btn-default btn-lg btn-success")
    }else {
    $("#3gun2030").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "21:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#3gun21").val("btn btn-default btn-lg btn-success")
    }else {
    $("#3gun21").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "21:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#3gun2130").val("btn btn-default btn-lg btn-success")
    }else {
    $("#3gun2130").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "22:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#3gun22").val("btn btn-default btn-lg btn-success")
    }else {
    $("#3gun22").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "22:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#3gun2230").val("btn btn-default btn-lg btn-success")
    }else {
    $("#3gun2230").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "23:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#3gun23").val("btn btn-default btn-lg btn-success")
    }else {
    $("#3gun23").val("btn btn-default btn-lg btn-danger")
    }
}
});

/* ------------------------ GUN 4 BAŞLANGIÇ ---------------*/

$("#gun4 button").click(function(){
console.log(this.className)
if (this.className == "btn btn-default btn-lg btn-success"){
this.className = "btn btn-default btn-lg btn-danger";
}
else if(this.className == "btn btn-default btn-lg btn-danger"){
  this.className = "btn btn-default btn-lg btn-success";
}
if($(this).data("id") == "08:00"){
    if(this.className == "btn btn-default btn-lg btn-success"){
    $("#4gun8").val("btn btn-default btn-lg btn-success")
    }else {
    $("#4gun8").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "08:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#4gun830").val("btn btn-default btn-lg btn-success")
    }else {
    $("#4gun830").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "09:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#4gun9").val("btn btn-default btn-lg btn-success")
    }else {
    $("#4gun9").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "09:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#4gun930").val("btn btn-default btn-lg btn-success")
    }else {
    $("4gun930").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "10:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#4gun10").val("btn btn-default btn-lg btn-success")
    }else {
    $("#4gun10").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "10:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#4gun1030").val("btn btn-default btn-lg btn-success")
    }else {
    $("#4gun1030").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "11:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#4gun11").val("btn btn-default btn-lg btn-success")
    }else {
    $("#4gun11").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "11:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#4gun1130").val("btn btn-default btn-lg btn-success")
    }else {
    $("#4gun1130").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "12:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#4gun12").val("btn btn-default btn-lg btn-success")
    }else {
    $("#4gun12").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "12:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#4gun1230").val("btn btn-default btn-lg btn-success")
    }else {
    $("#4gun1230").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "13:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#4gun13").val("btn btn-default btn-lg btn-success")
    }else {
    $("#4gun13").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "13:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#4gun1330").val("btn btn-default btn-lg btn-success")
    }else {
    $("#4gun1330").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "14:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#4gun14").val("btn btn-default btn-lg btn-success")
    }else {
    $("#4gun14").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "14:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#4gun1430").val("btn btn-default btn-lg btn-success")
    }else {
    $("#4gun1430").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "15:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#4gun15").val("btn btn-default btn-lg btn-success")
    }else {
    $("#4gun15").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "15:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#4gun1530").val("btn btn-default btn-lg btn-success")
    }else {
    $("#4gun1530").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "16:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#4gun16").val("btn btn-default btn-lg btn-success")
    }else {
    $("#4gun16").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "16:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#4gun1630").val("btn btn-default btn-lg btn-success")
    }else {
    $("#4gun1630").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "17:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#4gun17").val("btn btn-default btn-lg btn-success")
    }else {
    $("#4gun17").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "17:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#4gun1730").val("btn btn-default btn-lg btn-success")
    }else {
    $("#4gun1730").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "18:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#4gun18").val("btn btn-default btn-lg btn-success")
    }else {
    $("#4gun18").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "18:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#4gun1830").val("btn btn-default btn-lg btn-success")
    }else {
    $("#4gun1830").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "19:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#4gun19").val("btn btn-default btn-lg btn-success")
    }else {
    $("#4gun19").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "19:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#4gun1930").val("btn btn-default btn-lg btn-success")
    }else {
    $("#4gun1930").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "20:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#4gun20").val("btn btn-default btn-lg btn-success")
    }else {
    $("#4gun20").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "20:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#4gun2030").val("btn btn-default btn-lg btn-success")
    }else {
    $("#4gun2030").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "21:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#4gun21").val("btn btn-default btn-lg btn-success")
    }else {
    $("#4gun21").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "21:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#4gun2130").val("btn btn-default btn-lg btn-success")
    }else {
    $("#4gun2130").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "22:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#4gun22").val("btn btn-default btn-lg btn-success")
    }else {
    $("#4gun22").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "22:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#4gun2230").val("btn btn-default btn-lg btn-success")
    }else {
    $("#4gun2230").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "23:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#4gun23").val("btn btn-default btn-lg btn-success")
    }else {
    $("#4gun23").val("btn btn-default btn-lg btn-danger")
    }
}
});

/* ------------------------ GUN 5 BAŞLANGIÇ ---------------*/

$("#gun5 button").click(function(){
console.log(this.className)
if (this.className == "btn btn-default btn-lg btn-success"){
this.className = "btn btn-default btn-lg btn-danger";
}
else if(this.className == "btn btn-default btn-lg btn-danger"){
  this.className = "btn btn-default btn-lg btn-success";
}
if($(this).data("id") == "08:00"){
    if(this.className == "btn btn-default btn-lg btn-success"){
    $("#5gun8").val("btn btn-default btn-lg btn-success")
    }else {
    $("#5gun8").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "08:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#5gun830").val("btn btn-default btn-lg btn-success")
    }else {
    $("#5gun830").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "09:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#5gun9").val("btn btn-default btn-lg btn-success")
    }else {
    $("#5gun9").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "09:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#5gun930").val("btn btn-default btn-lg btn-success")
    }else {
    $("5gun930").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "10:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#5gun10").val("btn btn-default btn-lg btn-success")
    }else {
    $("#5gun10").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "10:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#5gun1030").val("btn btn-default btn-lg btn-success")
    }else {
    $("#5gun1030").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "11:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#5gun11").val("btn btn-default btn-lg btn-success")
    }else {
    $("#5gun11").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "11:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#5gun1130").val("btn btn-default btn-lg btn-success")
    }else {
    $("#5gun1130").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "12:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#5gun12").val("btn btn-default btn-lg btn-success")
    }else {
    $("#5gun12").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "12:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#5gun1230").val("btn btn-default btn-lg btn-success")
    }else {
    $("#5gun1230").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "13:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#5gun13").val("btn btn-default btn-lg btn-success")
    }else {
    $("#5gun13").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "13:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#5gun1330").val("btn btn-default btn-lg btn-success")
    }else {
    $("#5gun1330").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "14:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#5gun14").val("btn btn-default btn-lg btn-success")
    }else {
    $("#5gun14").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "14:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#5gun1430").val("btn btn-default btn-lg btn-success")
    }else {
    $("#5gun1430").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "15:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#5gun15").val("btn btn-default btn-lg btn-success")
    }else {
    $("#5gun15").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "15:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#5gun1530").val("btn btn-default btn-lg btn-success")
    }else {
    $("#5gun1530").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "16:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#5gun16").val("btn btn-default btn-lg btn-success")
    }else {
    $("#5gun16").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "16:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#5gun1630").val("btn btn-default btn-lg btn-success")
    }else {
    $("#5gun1630").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "17:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#5gun17").val("btn btn-default btn-lg btn-success")
    }else {
    $("#5gun17").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "17:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#5gun1730").val("btn btn-default btn-lg btn-success")
    }else {
    $("#5gun1730").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "18:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#5gun18").val("btn btn-default btn-lg btn-success")
    }else {
    $("#5gun18").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "18:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#5gun1830").val("btn btn-default btn-lg btn-success")
    }else {
    $("#5gun1830").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "19:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#5gun19").val("btn btn-default btn-lg btn-success")
    }else {
    $("#5gun19").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "19:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#5gun1930").val("btn btn-default btn-lg btn-success")
    }else {
    $("#5gun1930").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "20:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#5gun20").val("btn btn-default btn-lg btn-success")
    }else {
    $("#5gun20").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "20:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#5gun2030").val("btn btn-default btn-lg btn-success")
    }else {
    $("#5gun2030").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "21:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#5gun21").val("btn btn-default btn-lg btn-success")
    }else {
    $("#5gun21").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "21:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#5gun2130").val("btn btn-default btn-lg btn-success")
    }else {
    $("#5gun2130").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "22:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#5gun22").val("btn btn-default btn-lg btn-success")
    }else {
    $("#5gun22").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "22:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#5gun2230").val("btn btn-default btn-lg btn-success")
    }else {
    $("#5gun2230").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "23:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#5gun23").val("btn btn-default btn-lg btn-success")
    }else {
    $("#5gun23").val("btn btn-default btn-lg btn-danger")
    }
}
});

/* ------------------------ GUN 6 BAŞLANGIÇ ---------------*/

$("#gun6 button").click(function(){
console.log(this.className)
if (this.className == "btn btn-default btn-lg btn-success"){
this.className = "btn btn-default btn-lg btn-danger";
}
else if(this.className == "btn btn-default btn-lg btn-danger"){
  this.className = "btn btn-default btn-lg btn-success";
}
if($(this).data("id") == "08:00"){
    if(this.className == "btn btn-default btn-lg btn-success"){
    $("#6gun8").val("btn btn-default btn-lg btn-success")
    }else {
    $("#6gun8").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "08:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#6gun830").val("btn btn-default btn-lg btn-success")
    }else {
    $("#6gun830").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "09:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#6gun9").val("btn btn-default btn-lg btn-success")
    }else {
    $("#6gun9").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "09:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#6gun930").val("btn btn-default btn-lg btn-success")
    }else {
    $("#6gun930").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "10:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#6gun10").val("btn btn-default btn-lg btn-success")
    }else {
    $("#6gun10").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "10:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#6gun1030").val("btn btn-default btn-lg btn-success")
    }else {
    $("#6gun1030").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "11:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#6gun11").val("btn btn-default btn-lg btn-success")
    }else {
    $("#6gun11").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "11:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#6gun1130").val("btn btn-default btn-lg btn-success")
    }else {
    $("#6gun1130").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "12:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#6gun12").val("btn btn-default btn-lg btn-success")
    }else {
    $("#6gun12").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "12:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#6gun1230").val("btn btn-default btn-lg btn-success")
    }else {
    $("#6gun1230").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "13:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#6gun13").val("btn btn-default btn-lg btn-success")
    }else {
    $("#6gun13").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "13:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#6gun1330").val("btn btn-default btn-lg btn-success")
    }else {
    $("#6gun1330").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "14:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#6gun14").val("btn btn-default btn-lg btn-success")
    }else {
    $("#6gun14").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "14:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#6gun1430").val("btn btn-default btn-lg btn-success")
    }else {
    $("#6gun1430").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "15:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#6gun15").val("btn btn-default btn-lg btn-success")
    }else {
    $("#6gun15").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "15:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#6gun1530").val("btn btn-default btn-lg btn-success")
    }else {
    $("#6gun1530").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "16:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#6gun16").val("btn btn-default btn-lg btn-success")
    }else {
    $("#6gun16").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "16:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#6gun1630").val("btn btn-default btn-lg btn-success")
    }else {
    $("#6gun1630").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "17:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#6gun17").val("btn btn-default btn-lg btn-success")
    }else {
    $("#6gun17").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "17:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#6gun1730").val("btn btn-default btn-lg btn-success")
    }else {
    $("#6gun1730").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "18:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#6gun18").val("btn btn-default btn-lg btn-success")
    }else {
    $("#6gun18").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "18:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#6gun1830").val("btn btn-default btn-lg btn-success")
    }else {
    $("#6gun1830").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "19:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#6gun19").val("btn btn-default btn-lg btn-success")
    }else {
    $("#6gun19").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "19:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#6gun1930").val("btn btn-default btn-lg btn-success")
    }else {
    $("#6gun1930").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "20:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#6gun20").val("btn btn-default btn-lg btn-success")
    }else {
    $("#6gun20").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "20:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#6gun2030").val("btn btn-default btn-lg btn-success")
    }else {
    $("#6gun2030").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "21:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#6gun21").val("btn btn-default btn-lg btn-success")
    }else {
    $("#6gun21").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "21:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#6gun2130").val("btn btn-default btn-lg btn-success")
    }else {
    $("#6gun2130").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "22:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#6gun22").val("btn btn-default btn-lg btn-success")
    }else {
    $("#6gun22").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "22:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#6gun2230").val("btn btn-default btn-lg btn-success")
    }else {
    $("#6gun2230").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "23:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#6gun23").val("btn btn-default btn-lg btn-success")
    }else {
    $("#6gun23").val("btn btn-default btn-lg btn-danger")
    }
}
});

/* ------------------------ GUN 7 BAŞLANGIÇ ---------------*/

$("#gun7 button").click(function(){
console.log(this.className)
if (this.className == "btn btn-default btn-lg btn-success"){
this.className = "btn btn-default btn-lg btn-danger";
}
else if(this.className == "btn btn-default btn-lg btn-danger"){
  this.className = "btn btn-default btn-lg btn-success";
}
if($(this).data("id") == "08:00"){
    if(this.className == "btn btn-default btn-lg btn-success"){
    $("#7gun8").val("btn btn-default btn-lg btn-success")
    }else {
    $("#7gun8").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "08:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#7gun830").val("btn btn-default btn-lg btn-success")
    }else {
    $("#7gun830").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "09:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#7gun9").val("btn btn-default btn-lg btn-success")
    }else {
    $("#7gun9").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "09:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#7gun930").val("btn btn-default btn-lg btn-success")
    }else {
    $("7gun930").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "10:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#7gun10").val("btn btn-default btn-lg btn-success")
    }else {
    $("#7gun10").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "10:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#7gun1030").val("btn btn-default btn-lg btn-success")
    }else {
    $("#7gun1030").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "11:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#7gun11").val("btn btn-default btn-lg btn-success")
    }else {
    $("#7gun11").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "11:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#7gun1130").val("btn btn-default btn-lg btn-success")
    }else {
    $("#7gun1130").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "12:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#7gun12").val("btn btn-default btn-lg btn-success")
    }else {
    $("#7gun12").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "12:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#7gun1230").val("btn btn-default btn-lg btn-success")
    }else {
    $("#7gun1230").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "13:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#7gun13").val("btn btn-default btn-lg btn-success")
    }else {
    $("#7gun13").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "13:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#7gun1330").val("btn btn-default btn-lg btn-success")
    }else {
    $("#7gun1330").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "14:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#7gun14").val("btn btn-default btn-lg btn-success")
    }else {
    $("#7gun14").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "14:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#7gun1430").val("btn btn-default btn-lg btn-success")
    }else {
    $("#7gun1430").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "15:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#7gun15").val("btn btn-default btn-lg btn-success")
    }else {
    $("#7gun15").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "15:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#7gun1530").val("btn btn-default btn-lg btn-success")
    }else {
    $("#7gun1530").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "16:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#7gun16").val("btn btn-default btn-lg btn-success")
    }else {
    $("#7gun16").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "16:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#7gun1630").val("btn btn-default btn-lg btn-success")
    }else {
    $("#7gun1630").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "17:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#7gun17").val("btn btn-default btn-lg btn-success")
    }else {
    $("#7gun17").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "17:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#7gun1730").val("btn btn-default btn-lg btn-success")
    }else {
    $("#7gun1730").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "18:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#7gun18").val("btn btn-default btn-lg btn-success")
    }else {
    $("#7gun18").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "18:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#7gun1830").val("btn btn-default btn-lg btn-success")
    }else {
    $("#7gun1830").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "19:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#7gun19").val("btn btn-default btn-lg btn-success")
    }else {
    $("#7gun19").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "19:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#7gun1930").val("btn btn-default btn-lg btn-success")
    }else {
    $("#7gun1930").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "20:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#7gun20").val("btn btn-default btn-lg btn-success")
    }else {
    $("#7gun20").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "20:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#7gun2030").val("btn btn-default btn-lg btn-success")
    }else {
    $("#7gun2030").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "21:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#7gun21").val("btn btn-default btn-lg btn-success")
    }else {
    $("#7gun21").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "21:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#7gun2130").val("btn btn-default btn-lg btn-success")
    }else {
    $("#7gun2130").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "22:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#7gun22").val("btn btn-default btn-lg btn-success")
    }else {
    $("#7gun22").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "22:30"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#7gun2230").val("btn btn-default btn-lg btn-success")
    }else {
    $("#7gun2230").val("btn btn-default btn-lg btn-danger")
    }
}
else if($(this).data("id") == "23:00"){
if(this.className == "btn btn-default btn-lg btn-success"){
    $("#7gun23").val("btn btn-default btn-lg btn-success")
    }else {
    $("#7gun23").val("btn btn-default btn-lg btn-danger")
    }
}
});

/*---------------------------------------------------------*/

