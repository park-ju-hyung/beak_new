$("document").ready(function () {
  // 문서의 dom이 준비되면
  // .mySwiper 클래스를 swiper 슬라이더로 만듦
  // 이후에 swiper변수에 할당했기 때문에 스크립트로 제어할 수도 있음.
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    // pagination 기본은 bullet
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // 좌우 화살표 navigation element 지정
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    // 반응형
    breakpoints: {
      // 600px 이하가 되면 슬라이드 간 간격을 0으로
      600: {
        spaceBetween: 0
      },
    },

    on: {
      init: function () {
        $('.swiper-slide').addClass('changed');

        // fraction에 현재 인덱스와 전체 인덱스 표시
        // this.loopedSlides는 loop, slidesPerView: 'auto'일 때 제대로 동작
        $('.custom-fraction .current').text(this.realIndex + 1);
        $('.custom-fraction .all').text(this.loopedSlides);
        // console.log(this);
        // console.log(this.loopedSlides)
      },

      slideChangeTransitionStart: function () {
        // 기본적으로 제공하는 swiper-slide-active 클래스를 이용해
        // css transition 애니메이션 작성 가능하다.
        // 다만 루프 모드일 때에는 루프 픽스를 하며 slide를 바꿔치기를 하는데,
        // 이 때 플리커링이 발생할 수 있다.
        // css transition을 서로 다르게 설정한 changed, changing 클래스를 이용
        $('.swiper-slide').addClass('changing');
        $('.swiper-slide').removeClass('changed');

        // 페이지 넘어갈 때마다 fraction 현재 인덱스 변경
        $('.custom-fraction .current').text(this.realIndex + 1);
      },

      slideChangeTransitionEnd: function () {
        // changing : transition O
        // changed : transition X
        $('.swiper-slide').removeClass('changing');
        $('.swiper-slide').addClass('changed');
      }
    },
  });

  // 슬라이더 할당한 swiper로 슬라이더 제어
  $(".auto-start").on("click", function () {
    // 기본 설정으로 autoplay 시작
    console.log("autoplay start");
    swiper.autoplay.start();
  });

  $(".auto-stop").on("click", function () {
    console.log("autoplay stop");
    swiper.autoplay.stop();
  });
});



/** rolling-banner */
new Swiper('.banner .swiper-container', {
  // direction: 'horizontal', // 수평 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
  spaceBetween: 30, // 슬라이드 사이 여백
  slidesPerView: 4, // 한 번에 보여줄 슬라이드 개수
  // slidesPerGroup: 5, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
    /* 
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    */

  navigation: {
      prevEl: '.banner .swiper-prev',
      nextEl: '.banner .swiper-next'
  }

})