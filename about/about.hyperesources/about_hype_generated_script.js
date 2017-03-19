//	HYPE.documents["about"]

(function() {
 (function k() {
  function l(a, b, d) {
   var c = !1;
   null == window[a] && (null == window[b] ? (window[b] = [], window[b].push(k), a = document.getElementsByTagName("head")[0], b = document.createElement("script"), c = h, false == !0 && (c = ""), b.type = "text/javascript", b.src = c + "/" + d, a.appendChild(b)) : window[b].push(k), c = !0);
   return c
  }
  var h = "about.hyperesources",
   c = "about",
   e = "about_hype_container";
  if (false == !1) try {
   for (var f = document.getElementsByTagName("script"),
     a = 0; a < f.length; a++) {
    var b = f[a].src,
     d = null != b ? b.indexOf("about_hype_generated_script.js") : -1;
    if (-1 != d) {
     h = b.substr(0, d - 1);
     break
    }
   }
  } catch (n) {}
  if (false == !1 && (a = navigator.userAgent.match(/MSIE (\d+\.\d+)/), a = parseFloat(a && a[1]) || null, a = l("HYPE_576", "HYPE_dtl_576", !0 == (null != a && 10 > a || false == !0) ? "HYPE-576.full.min.js" : "HYPE-576.thin.min.js"), false == !0 && (a = a || l("HYPE_w_576", "HYPE_wdtl_576", "HYPE-576.waypoints.min.js")), a)) return;
  f = window.HYPE.documents;
  if (null != f[c]) {
   b = 1;
   a = c;
   do c = "" + a + "-" + b++; while (null != f[c]);
   d = document.getElementsByTagName("div");
   b = !1;
   for (a = 0; a < d.length; a++)
    if (d[a].id == e && null == d[a].getAttribute("HYP_dn")) {
     var b = 1,
      g = e;
     do e = "" + g + "-" + b++; while (null != document.getElementById(e));
     d[a].id = e;
     b = !0;
     break
    }
   if (!1 == b) return
  }
  b = [];
  b = [];
  d = {};
  g = {};
  for (a = 0; a < b.length; a++) try {
   g[b[a].identifier] = b[a].name, d[b[a].name] = eval("(function(){return " + b[a].source + "})();")
  } catch (m) {
   window.console && window.console.log(m), d[b[a].name] =
    function() {}
  }
  a = new HYPE_576(c, e, {
   "-1": {
    n: "PIE.htc"
   },
   "-2": {
    n: "blank.gif"
   }
  }, h, [], d, [{
   n: "Untitled Scene",
   o: "1",
   X: [0]
  }], [{
   p: "600px",
   U: {},
   c: "#EBEBEB",
   bZ: 180,
   d: 1200,
   cA: false,
   Y: 1200,
   L: [],
   Z: 400,
   v: {
    "154": {
     I: "None",
     x: "visible",
     a: 85,
     bS: 36,
     K: "None",
     j: "absolute",
     b: 122,
     z: 59,
     L: "None",
     k: "div",
     d: 400,
     U: "iframe-htmlwidget.html",
     c: 292,
     e: 0,
     V: 0,
     J: "None",
     W: ""
    },
    "155": {
     I: "None",
     x: "visible",
     a: 464,
     bS: 32,
     K: "None",
     j: "absolute",
     b: 122,
     z: 60,
     L: "None",
     k: "div",
     d: 400,
     U: "iframe-htmlwidget-1.html",
     c: 292,
     e: 0,
     V: "0",
     J: "None",
     W: ""
    },
    "156": {
     I: "None",
     x: "visible",
     a: 822,
     bS: 33,
     K: "None",
     j: "absolute",
     b: 122,
     z: 61,
     L: "None",
     k: "div",
     d: 400,
     U: "iframe-htmlwidget-2.html",
     c: 292,
     e: 0,
     V: "0",
     J: "None",
     W: ""
    }
   },
   A: {
    a: [{
     b: "kTimelineDefaultIdentifier",
     p: 3,
     z: false,
     symbolOid: "2"
    }]
   },
   O: ["154", "155", "156"],
   B: {
    a: [{
     p: 0
    }]
   },
   "_": 0,
   bY: 1,
   n: "Untitled Layout",
   a: 100,
   o: "3",
   T: {
    kTimelineDefaultIdentifier: {
     i: "kTimelineDefaultIdentifier",
     n: "Main Timeline",
     z: 1,
     b: [],
     a: [{
      f: "c",
      y: 0,
      z: 1,
      i: "b",
      e: 0,
      s: 122,
      o: "155"
     }, {
      f: "c",
      y: 0,
      z: 1,
      i: "b",
      e: 0,
      s: 122,
      o: "154"
     }, {
      f: "c",
      y: 0,
      z: 1,
      i: "b",
      e: 0,
      s: 122,
      o: "156"
     }, {
      f: "c",
      y: 0,
      z: 1,
      i: "a",
      e: 464,
      s: 464,
      o: "155"
     }, {
      f: "c",
      y: 0,
      z: 1,
      i: "a",
      e: 85,
      s: 85,
      o: "154"
     }, {
      f: "c",
      y: 0,
      z: 1,
      i: "a",
      e: 822,
      s: 822,
      o: "156"
     }, {
      f: "c",
      y: 0,
      z: 0.07,
      i: "e",
      e: 0,
      s: 0,
      o: "156"
     }, {
      f: "c",
      y: 0,
      z: 0.07,
      i: "e",
      e: 0,
      s: 0,
      o: "155"
     }, {
      f: "c",
      y: 0,
      z: 0.07,
      i: "e",
      e: 0,
      s: 0,
      o: "154"
     }, {
      f: "c",
      y: 0.07,
      z: 0.09,
      i: "e",
      e: 0.41608979430379744,
      s: 0,
      o: "156"
     }, {
      f: "c",
      y: 0.07,
      z: 0.09,
      i: "e",
      e: 0.41608979430379744,
      s: 0,
      o: "155"
     }, {
      f: "c",
      y: 0.07,
      z: 0.09,
      i: "e",
      e: 0.41608979430379744,
      s: 0,
      o: "154"
     }, {
      f: "c",
      y: 0.16,
      z: 0.14,
      i: "e",
      e: 1,
      s: 0.41608979430379744,
      o: "154"
     }, {
      f: "c",
      y: 0.16,
      z: 0.14,
      i: "e",
      e: 1,
      s: 0.41608979430379744,
      o: "155"
     }, {
      f: "c",
      y: 0.16,
      z: 0.14,
      i: "e",
      e: 1,
      s: 0.41608979430379744,
      o: "156"
     }, {
      y: 1,
      i: "b",
      s: 0,
      z: 0,
      o: "155",
      f: "c"
     }, {
      y: 1,
      i: "b",
      s: 0,
      z: 0,
      o: "154",
      f: "c"
     }, {
      y: 1,
      i: "b",
      s: 0,
      z: 0,
      o: "156",
      f: "c"
     }, {
      y: 1,
      i: "a",
      s: 464,
      z: 0,
      o: "155",
      f: "c"
     }, {
      y: 1,
      i: "a",
      s: 85,
      z: 0,
      o: "154",
      f: "c"
     }, {
      y: 1,
      i: "a",
      s: 822,
      z: 0,
      o: "156",
      f: "c"
     }, {
      y: 1,
      i: "e",
      s: 1,
      z: 0,
      o: "154",
      f: "c"
     }, {
      y: 1,
      i: "e",
      s: 1,
      z: 0,
      o: "155",
      f: "c"
     }, {
      y: 1,
      i: "e",
      s: 1,
      z: 0,
      o: "156",
      f: "c"
     }],
     f: 30
    }
   },
   b: 100
  }], {}, g, {}, null, false, true, -1, true, true, false, true);
  f[c] = a.API;
  document.getElementById(e).setAttribute("HYP_dn",
   c);
  a.z_o(this.body)
 })();
})();
