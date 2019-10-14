$(document).ready(function(){

});
        if ($('.image-link').length) {
            $('.image-link').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
        }
        if ($('.image-link2').length) {
            $('.image-link2').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
        }

       var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

        $("#hizmetList button").click(function(){
            $("#hizmetList").hide();
            $("#hizmetSecim").hide();
            $("#serviceDiv").show();
            $("#personSelectDiv").show();
            $("#Personelİnput").val($(this).data("id"));
            var row = $(this).closest("tr");
            var hizmet = row.find('td:eq(0)').text();
            console.log(hizmet)
            $('#hizmetGoster').html(hizmet);
            $('#hizmetOzet').html(hizmet);
            $("#Hizmetİnput").val(hizmet);
                    });

         $("#personSelect").change(function(){
          $("#personSelectDiv").hide();
          $("#timeSelectDiv").show();
          $("#personDiv").show();
          $('#personGoster').html($("#personSelect option:selected").text());
          $('#personOzet').html($("#personSelect option:selected").text());
          if( $(this).val() == "Farketmez"){
          $("#Personelİnput").val(null);
          }else {
          $("#Personelİnput").val($(this).val());
          }


        })
        $("#dateSelectButton button").click(function(){
            tex = $(this).text();
            $("#tarihGoster").html(tex);
            $("#tarihOzet").html(tex);
            if (tex == "Bugün") {
            $("#Tarihİnput").val(aryDates[0]);
            $("#state").val(0);
            }else if( tex == "Yarın"){
            $("#Tarihİnput").val(aryDates[1]);
            $("#state").val(1);
            }else if ( tex == aryDates[2]) {
            $("#Tarihİnput").val(aryDates[2]);
            $("#state").val(2);
            }else if ( tex == aryDates[3]) {
            $("#Tarihİnput").val(aryDates[3]);
            $("#state").val(3);
            }else if ( tex == aryDates[4]) {
            $("#Tarihİnput").val(aryDates[4]);
            $("#state").val(4);
            }else if ( tex == aryDates[5]) {
            $("#Tarihİnput").val(aryDates[5]);
            $("#state").val(5);
            }else if ( tex == aryDates[6]) {
            $("#Tarihİnput").val(aryDates[6]);
            $("#state").val(6);
            }

        });

        $("#timeSelect button").click(function () {
           $("#timeSelectDiv").hide();
          $("#dateDiv").show();
          $("#timeDiv").show();
          $("#ozet").show();
          $("#saatGoster").html($(this).data("id"));
          $("#saatOzet").html($(this).data("id"));
          $("#randevuAl").show();
          $("#Saatİnput").val($(this).data("id"));
        });

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
document.getElementById("2gun").innerHTML = "Yarın";
document.getElementById("3gun").innerHTML = aryDates[2];
document.getElementById("4gun").innerHTML = aryDates[3];
document.getElementById("5gun").innerHTML = aryDates[4];
document.getElementById("6gun").innerHTML = aryDates[5];
document.getElementById("7gun").innerHTML = aryDates[6];

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("1gun").click();
