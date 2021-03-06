!function (t, e, n, i) {
    "use strict";
    function a(t) {
        return("string" == typeof t || t instanceof String) && (t = t.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g, "")), t
    }

    var s = function (e) {
        for (var n = e.length; n--;)0 === t("head").has("." + e[n]).length && t("head").append('<meta class="' + e[n] + '">')
    };
    s(["foundation-mq-small", "foundation-mq-medium", "foundation-mq-large", "foundation-mq-xlarge", "foundation-mq-xxlarge", "foundation-data-attribute-namespace"]), t(function () {
        "undefined" != typeof FastClick && "undefined" != typeof n.body && FastClick.attach(n.body)
    });
    var o = function (e, i) {
        if ("string" == typeof e) {
            if (i) {
                var a;
                return a = i.jquery ? i[0] : i, t(a.querySelectorAll(e))
            }
            return t(n.querySelectorAll(e))
        }
        return t(e, i)
    }, r = function (t) {
        var e = [];
        return t || e.push("data"), this.namespace.length > 0 && e.push(this.namespace), e.push(this.name), e.join("-")
    }, s = function (e) {
        for (var n = e.length; n--;)0 === t("head").has("." + e[n]).length && t("head").append('<meta class="' + e[n] + '">')
    }, u = function (t) {
        for (var e = t.split("-"), n = e.length, i = []; n--;)0 !== n ? i.push(e[n]) : this.namespace.length > 0 ? i.push(this.namespace, e[n]) : i.push(e[n]);
        return i.reverse().join("-")
    }, l = function (e, n) {
        var i = this, a = !o(this).data(this.attr_name(!0));
        return"string" == typeof e ? this[e].call(this, n) : (o(this.scope).is("[" + this.attr_name() + "]") ? (o(this.scope).data(this.attr_name(!0) + "-init", t.extend({}, this.settings, n || e, this.data_options(o(this.scope)))), a && this.events(this.scope)) : o("[" + this.attr_name() + "]", this.scope).each(function () {
            var a = !o(this).data(i.attr_name(!0) + "-init");
            o(this).data(i.attr_name(!0) + "-init", t.extend({}, i.settings, n || e, i.data_options(o(this)))), a && i.events(this)
        }), void 0)
    }, c = function (t, e) {
        function n() {
            e(t[0])
        }

        function i() {
            if (this.one("load", n), /MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
                var t = this.attr("src"), e = t.match(/\?/) ? "&" : "?";
                e += "random=" + (new Date).getTime(), this.attr("src", t + e)
            }
        }

        return t.attr("src") ? (t[0].complete || 4 === t[0].readyState ? n() : i.call(t), void 0) : (n(), void 0)
    };
    e.matchMedia = e.matchMedia || function (t) {
        var e, n = t.documentElement, i = n.firstElementChild || n.firstChild, a = t.createElement("body"), s = t.createElement("div");
        return s.id = "mq-test-1", s.style.cssText = "position:absolute;top:-100em", a.style.background = "none", a.appendChild(s), function (t) {
            return s.innerHTML = '&shy;<style media="' + t + '"> #mq-test-1 { width: 42px; }</style>', n.insertBefore(a, i), e = 42 === s.offsetWidth, n.removeChild(a), {matches: e, media: t}
        }
    }(n), function () {
        function t() {
            n && (s(t), jQuery.fx.tick())
        }

        for (var n, i = 0, a = ["webkit", "moz"], s = e.requestAnimationFrame, o = e.cancelAnimationFrame; i < a.length && !s; i++)s = e[a[i] + "RequestAnimationFrame"], o = o || e[a[i] + "CancelAnimationFrame"] || e[a[i] + "CancelRequestAnimationFrame"];
        s ? (e.requestAnimationFrame = s, e.cancelAnimationFrame = o, jQuery.fx.timer = function (e) {
            e() && jQuery.timers.push(e) && !n && (n = !0, t())
        }, jQuery.fx.stop = function () {
            n = !1
        }) : (e.requestAnimationFrame = function (t) {
            var n = (new Date).getTime(), a = Math.max(0, 16 - (n - i)), s = e.setTimeout(function () {
                t(n + a)
            }, a);
            return i = n + a, s
        }, e.cancelAnimationFrame = function (t) {
            clearTimeout(t)
        })
    }(jQuery), e.Foundation = {name: "Foundation", version: "5.1.1", media_queries: {small: o(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""), medium: o(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""), large: o(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""), xlarge: o(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""), xxlarge: o(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, "")}, stylesheet: t("<style></style>").appendTo("head")[0].sheet, global: {namespace: ""}, init: function (t, e, n, i, a) {
        var s = [t, n, i, a], r = [];
        if (this.rtl = /rtl/i.test(o("html").attr("dir")), this.scope = t || this.scope, this.set_namespace(), e && "string" == typeof e && !/reflow/i.test(e))this.libs.hasOwnProperty(e) && r.push(this.init_lib(e, s)); else for (var u in this.libs)r.push(this.init_lib(u, e));
        return t
    }, init_lib: function (t, e) {
        return this.libs.hasOwnProperty(t) ? (this.patch(this.libs[t]), e && e.hasOwnProperty(t) ? this.libs[t].init.apply(this.libs[t], [this.scope, e[t]]) : (e = e instanceof Array ? e : Array(e), this.libs[t].init.apply(this.libs[t], e))) : function () {
        }
    }, patch: function (t) {
        t.scope = this.scope, t.namespace = this.global.namespace, t.rtl = this.rtl, t.data_options = this.utils.data_options, t.attr_name = r, t.add_namespace = u, t.bindings = l, t.S = this.utils.S
    }, inherit: function (t, e) {
        for (var n = e.split(" "), i = n.length; i--;)this.utils.hasOwnProperty(n[i]) && (t[n[i]] = this.utils[n[i]])
    }, set_namespace: function () {
        var e = t(".foundation-data-attribute-namespace").css("font-family");
        /false/i.test(e) || (this.global.namespace = e)
    }, libs: {}, utils: {S: o, throttle: function (t, e) {
        var n = null;
        return function () {
            var i = this, a = arguments;
            clearTimeout(n), n = setTimeout(function () {
                t.apply(i, a)
            }, e)
        }
    }, debounce: function (t, e, n) {
        var i, a;
        return function () {
            var s = this, o = arguments, r = function () {
                i = null, n || (a = t.apply(s, o))
            }, u = n && !i;
            return clearTimeout(i), i = setTimeout(r, e), u && (a = t.apply(s, o)), a
        }
    }, data_options: function (e) {
        function n(t) {
            return!isNaN(t - 0) && null !== t && "" !== t && t !== !1 && t !== !0
        }

        function i(e) {
            return"string" == typeof e ? t.trim(e) : e
        }

        var a, s, o, r = {}, u = function (t) {
            var e = Foundation.global.namespace;
            return e.length > 0 ? t.data(e + "-options") : t.data("options")
        }, l = u(e);
        if ("object" == typeof l)return l;
        for (o = (l || ":").split(";"), a = o.length; a--;)s = o[a].split(":"), /true/i.test(s[1]) && (s[1] = !0), /false/i.test(s[1]) && (s[1] = !1), n(s[1]) && (s[1] = parseInt(s[1], 10)), 2 === s.length && s[0].length > 0 && (r[i(s[0])] = i(s[1]));
        return r
    }, register_media: function (e, n) {
        Foundation.media_queries[e] === i && (t("head").append('<meta class="' + n + '">'), Foundation.media_queries[e] = a(t("." + n).css("font-family")))
    }, add_custom_rule: function (t, e) {
        if (e === i)Foundation.stylesheet.insertRule(t, Foundation.stylesheet.cssRules.length); else {
            var n = Foundation.media_queries[e];
            n !== i && Foundation.stylesheet.insertRule("@media " + Foundation.media_queries[e] + "{ " + t + " }")
        }
    }, image_loaded: function (t, e) {
        var n = this, i = t.length;
        t.each(function () {
            c(n.S(this), function () {
                i -= 1, 0 == i && e(t)
            })
        })
    }, random_str: function (t) {
        var e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
        t || (t = Math.floor(Math.random() * e.length));
        for (var n = ""; t--;)n += e[Math.floor(Math.random() * e.length)];
        return n
    }}}, t.fn.foundation = function () {
        var t = Array.prototype.slice.call(arguments, 0);
        return this.each(function () {
            return Foundation.init.apply(Foundation, [this].concat(t)), this
        })
    }
}(jQuery, this, this.document);