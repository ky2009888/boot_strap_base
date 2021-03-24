//前面必须打上分号.
var user = (function () {
  var username = "tom";
  //通过return的方式将数据抛出去
  return {
    username: username,
  };
})();
