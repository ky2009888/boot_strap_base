/**
 * 通过立即执行函数模式，进行js模块化开发
 */
var calcu = (function ($) {
  var result = 0;
  var plus = function () {
    var num1 = $("#num1").val();
    var num2 = $("#num2").val();
    result = parseInt(num1) + parseInt(num2);
    $("#result").html(result);
  };
  var minus = function () {
    var num1 = $("#num1").val();
    var num2 = $("#num2").val();
    result = parseInt(num1) - parseInt(num2);
    $("#result").html(result);
  };
  var multiplus = function () {
    var num1 = $("#num1").val();
    var num2 = $("#num2").val();
    result = parseInt(num1) * parseInt(num2);
    $("#result").html(result);
  };
  var divide = function () {
    var num1 = $("#num1").val();
    var num2 = $("#num2").val();
    result = parseInt(num1) / parseInt(num2);
    $("#result").html(result);
  };
  return {
    plus: plus,
    minus: minus,
    multiplus: multiplus,
    divide: divide,
  };
})(jQuery);
