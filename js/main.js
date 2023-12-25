/** 다국어  **/
$(".lang").click(function () {
  if ($(this).hasClass("on")) { // 클릭한 요소가 clicked이라는 클래스명을 가지고 있을 때
    $(this).removeClass("on");
  } else {
    $(this).addClass("on");
  }
});

$(document).mouseup(function (e) {
  var LayerPopup = $(".lang");
  if (LayerPopup.has(e.target).length === 0) {
    LayerPopup.removeClass("on");
  }
});



/* 메인메뉴 */
var header = document.querySelector('.header'),
  mainMenuList = document.querySelectorAll('.mainmenu > div'),
  subMenu = document.querySelectorAll('.submenu'),
  headerHeight = header.offsetHeight,
  subMenuHeight = 0;

for (var i = 0; i < mainMenuList.length; i++) {
  mainMenuList[i].addEventListener('mouseover', function () {
    /*
      마우스가 올라가 그 그 요소의 자식 요소(ul)의 높이를 변수명 
      subMenuHeight 저장하고 
      header 높이를 headerHeight + subMenuHeight로 변경    
    */
    subMenuHeight = this.querySelector('div').offsetHeight;
    header.style.height = headerHeight + subMenuHeight + 'px';
  });
  mainMenuList[i].addEventListener('mouseout', function () {
    header.style.height = headerHeight + 'px';
  });

}


/* 검색 */
document.addEventListener("DOMContentLoaded", function () {
  const hz = document.querySelector("#hz");
  const toggleFadeButton = document.getElementById("toggleFadeButton");
  const mainheader = document.querySelector(".mainheader");
  const mobilemenu = document.querySelector(".mobile-menu");

  let isFadeVisible = true;


  /** */
  toggleFadeButton.addEventListener("click", function () {
    alert("t1");
    hz.style.transition = "opacity 0.5s ease";

    alert("isFadeVisible : "+isFadeVisible);

    if (isFadeVisible) {
      alert("t11");
      hz.style.opacity = "1";
    } else {
      alert("t12");
      hz.style.opacity = "0";
      hz.style.zIndex = "101";
    }
    alert("!isFadeVisible : "+!isFadeVisible);
    isFadeVisible = !isFadeVisible;
  });

  mainheader.addEventListener("mouseover", function () {
    hz.style.transition = "opacity 0.5s ease";
    if (isFadeVisible) {
      hz.style.opacity = "0";
    }
    isFadeVisible = !isFadeVisible;
  });

  mobilemenu.addEventListener("click", function () {
    hz.style.transition = "opacity 0.5s ease";
    if (isFadeVisible) {
      hz.style.opacity = "0";
    }
    isFadeVisible = !isFadeVisible;
  });
});




document.addEventListener("DOMContentLoaded", function () {
  const hz = document.querySelector("#hz");
  const toggleFadeButton2 = document.getElementById("toggleFadeButton2");
  const mainheader = document.querySelector(".mainheader");
  const mobilemenu = document.querySelector(".mobile-menu");

  let isFadeVisible = true;
  /** */
  toggleFadeButton2.addEventListener("click", function () {
    alert("t2");
    hz.style.transition = "opacity 0.5s ease";
    if (isFadeVisible) {
      hz.style.opacity = "0";
      hz.style.zIndex = "98";
    }
    isFadeVisible = !isFadeVisible;
  });

});

/** search **/
$(".btn_sch").click(function () {
  if ($(this).hasClass("on")) { // 클릭한 요소가 clicked이라는 클래스명을 가지고 있을 때
    $(this).removeClass("on");
  } else {
    $(this).addClass("on");
  }
});

$(".mainheader").mouseover(function () {
  if ($(".btn_sch").hasClass("on")) { // 클릭한 요소가 clicked이라는 클래스명을 가지고 있을 때
    $(".btn_sch").removeClass("on");
  }
});

/* 맞춤서비스 tab */
$(function () {
  $('.tab_content > div').hide();
  $('.tab_nav a').click(function () {
    $('.tab_content > div').hide().filter(this.hash).show();
    $('.tab_nav a').removeClass('active');
    $(this).addClass('active');
    return false;
  }).filter(':eq(0)').click();
});

/* 알림 tab */
$(function () {
  $('.notice_content > div').hide();
  $('.notice_nav a').click(function () {
    $('.notice_content > div').hide().filter(this.hash).show();
    $('.notice_nav a').removeClass('active');
    $(this).addClass('active');
    return false;
  }).filter(':eq(0)').click();
});

/* 전국 검찰청 찾기 */
/** all-office **/
$(".all-office_button>a").click(function(){
  if($(this).hasClass("on")){ // 클릭한 요소가 clicked이라는 클래스명을 가지고 있을 때
    $(this).removeClass("on");
  }else{
    $(this).addClass("on");
  }
});

/** 검찰청 찾아보기**/
const promotionEl = document.querySelector('.all-office_menu')
const promotionToggleBtn = document.querySelector('.all-office_button')
let isHidePromotion = false
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    promotionEl.classList.add('on')
  } else {
    promotionEl.classList.remove('on')
  }
})

/* banner-detail*/

document.addEventListener("DOMContentLoaded", function () {
  const hz = document.querySelector("#detail-layout");
  const toggleFadeButton = document.getElementById("detail-on");
   


  let isFadeVisible = true;
  /** */
  toggleFadeButton.addEventListener("click", function () {
    hz.style.transition = "opacity 0.5s ease";
    if (isFadeVisible) {
      hz.style.opacity = "1";
      hz.style.zIndex = "101";
      hz.style.display = "block";
    } 
    isFadeVisible = !isFadeVisible;
  });

});


document.addEventListener("DOMContentLoaded", function () {
  const hz = document.querySelector("#detail-layout");
  const toggleFadeButton = document.getElementById("detail-out");

  let isFadeVisible = true;
  /** */
  toggleFadeButton.addEventListener("click", function () {
    hz.style.transition=this.style = "opacity 0.5s ease";
    if (isFadeVisible) {
      hz.style.opacity = "0";
    } 
    isFadeVisible = !isFadeVisible;
  });

});

$(".banner-detail").click(function () {
  if ($(".background").hasClass("on")) { // 클릭한 요소가 clicked이라는 클래스명을 가지고 있을 때
    $(".background").removeClass("on");
  } else {
    $(".background").addClass("on");
  }
});

$("#detail-out").click(function () {
  alert("dout");
  if ($(".background").hasClass("on")) { // 클릭한 요소가 clicked이라는 클래스명을 가지고 있을 때
    $(".background").removeClass("on");
  } else {
    $(".background").addClass("on");
  }
});





/* mb - 전체메뉴 */
$(".mobilesidebar-content2").click(function (e) {
  var el = $(e.target).closest('li')
  el.siblings('li').removeClass("active");
  el.addClass("active");
});

/* mb 전체메뉴 */
$(".mobile-sidebar-scroll > label").click(function (e) {
  var el = $(e.target).closest('label')
  el.siblings('label').removeClass("active");
  el.addClass("active");
});


