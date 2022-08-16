function GetQueryString(api) {
    var reg = new RegExp("(^|&)" + api + "=([^&]*)(&|$)");
    var r = decodeURI(window.location.search.substr(1)).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  }
  var sname = GetQueryString("uid");
  if (sname != null) {
    var sname_ = decodeURIComponent(sname);
  }
  if (sname!=""){
    if(sname!=null){
        fetch("https://just--test.vercel.app/01?mid="+sname+"&jsonp=jsonp")
        .then(function (a) {
          return a.json();
        })
        .then(function (a) {
          document.getElementById("main").innerHTML = "<h1>UP主信息查询 Bilibili</h1><p>阅读量</p><p>"+a.data.archive.view+"</p><p>喜欢数</p>"+a.data.like+"<p></p><p>播放数</p><p>"+a.data.article.view+"</p>"
        })
        .catch((err) => console.log("error"));
    }
  }
