/* 민원서식 내려받기 */
/* 
$(".form-tab").click(function (e) {
  var el = $(e.target).closest('li')
  el.siblings('li').removeClass("active");
  el.addClass("active");
});
*/


$(function () {
  $('.form-tab-content > div').hide();
  $('.form-tab-line > ul > li > a').click(function () {
    $('.form-tab-content > div').hide().filter(this.hash).show(); // fadeIn 대신에 show 사용
    $('.form-tab-line > ul > li > a').removeClass('active');
    $(this).addClass('active');
    return false;
  }).filter(':eq(0)').click();
});