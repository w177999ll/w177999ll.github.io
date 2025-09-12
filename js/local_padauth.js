!(function () {
  function getCookie(name) {
    var reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`);
    var arr = document.cookie.match(reg);
    if (arr) {
      return unescape(arr[2]);
    }
    return null;
  }

  function a(c) {
    jQuery.ajax({
      type: "GET",
      url:
        "https://long.open.weixin.qq.com/connect/l/qrconnect?uuid=" +
        window.cgiData.uuid +
        "&f=url" +
        (c ? "&last=" + c : ""),
      dataType: "script",
      cache: !1,
      timeout: 6e4,
      success: function (c, d, e) {
        var f = window.wx_errcode,
          g = window.wx_redirecturl,
          h = window.wx_nickname;

        switch (f) {
          case 405:
            document.getElementById("js_login_tips").innerHTML += template(
              "tpl_login_tips",
              {
                wxNickname: h,
              }
            );
            var codeMatch = g.match(/code=([^&]+)/);

            if (codeMatch && codeMatch.length > 1) {
              const code = codeMatch[1];
              // window.location.href = "/login?code=" + code + "&type=weixin";
              jQuery.ajax({
                type: "POST",
                url: "/api/v1/wx_login",
                dataType: "json",
                data: {
                  code: code,
                },
                headers: {
                  Authorization: "Bearer " + getCookie("XY_LOGIN_TOKEN"),
                },
                success: function (res) {
                  if (res.success) {
                    window.location.href = "/gamerole/list";
                  } else {
                    alert(res.message);
                  }
                },
              });
            }
            jQuery(".js_qrscan").hide(),
              jQuery(".js_qrsucc").show(),
              b("65436_60_1");
            break;
          case 404:
            setTimeout(a, 1e3), b("65436_61_1");
            break;
          case 403:
            // (window.location = window.cgiData.appid + "://oauth?code="),
            b("65436_63_1"), window.location.reload();
            // b("65436_62_1");
            break;
          case 402:
            b("65436_63_1"), window.location.reload();
            break;
          case 500:
            b("65436_64_1"), window.location.reload();
            break;
          case 408:
            setTimeout(a, 2e3);
        }
      },
      error: function (c, d, e) {
        var f = window.wx_errcode;
        408 == f ? setTimeout(a, 5e3) : setTimeout(a, 5e3, f), b("65436_65_1");
      },
    });
  }
  function b(a) {
    var b = new Image();
    b.src =
      "//mp.weixin.qq.com/mp/jsmonitor?idkey=" + a + "&t=" + Math.random();
  }
  var c = !1;
  jQuery("#js_qrimg").on("load", function () {
    c || ((c = !0), a());
  }),
    setTimeout(function () {
      c || ((c = !0), a());
    }, 3e3),
    (document.getElementById("js_cancel_login").onclick = function () {
      b("65436_66_1"),
        (window.location.href = window.cgiData.appid + "://oauth11?code=");
    }),
    WeixinJSBridge.invoke(
      "setNavigationBarColor",
      {
        color: "#F3F3F3",
      },
      function (a) {}
    );
})();