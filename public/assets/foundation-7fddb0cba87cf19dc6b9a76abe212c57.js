!function (t, e, i, s) {
    "use strict";
    function n(t) {
        return("string" == typeof t || t instanceof String) && (t = t.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g, "")), t
    }

    var a = function (e) {
        for (var i = e.length; i--;)0 === t("head").has("." + e[i]).length && t("head").append('<meta class="' + e[i] + '">')
    };
    a(["foundation-mq-small", "foundation-mq-medium", "foundation-mq-large", "foundation-mq-xlarge", "foundation-mq-xxlarge", "foundation-data-attribute-namespace"]), t(function () {
        "undefined" != typeof FastClick && "undefined" != typeof i.body && FastClick.attach(i.body)
    });
    var o = function (e, s) {
        if ("string" == typeof e) {
            if (s) {
                var n;
                return n = s.jquery ? s[0] : s, t(n.querySelectorAll(e))
            }
            return t(i.querySelectorAll(e))
        }
        return t(e, s)
    }, r = function (t) {
        var e = [];
        return t || e.push("data"), this.namespace.length > 0 && e.push(this.namespace), e.push(this.name), e.join("-")
    }, a = function (e) {
        for (var i = e.length; i--;)0 === t("head").has("." + e[i]).length && t("head").append('<meta class="' + e[i] + '">')
    }, l = function (t) {
        for (var e = t.split("-"), i = e.length, s = []; i--;)0 !== i ? s.push(e[i]) : this.namespace.length > 0 ? s.push(this.namespace, e[i]) : s.push(e[i]);
        return s.reverse().join("-")
    }, d = function (e, i) {
        var s = this, n = !o(this).data(this.attr_name(!0));
        return"string" == typeof e ? this[e].call(this, i) : (o(this.scope).is("[" + this.attr_name() + "]") ? (o(this.scope).data(this.attr_name(!0) + "-init", t.extend({}, this.settings, i || e, this.data_options(o(this.scope)))), n && this.events(this.scope)) : o("[" + this.attr_name() + "]", this.scope).each(function () {
            var n = !o(this).data(s.attr_name(!0) + "-init");
            o(this).data(s.attr_name(!0) + "-init", t.extend({}, s.settings, i || e, s.data_options(o(this)))), n && s.events(this)
        }), void 0)
    }, c = function (t, e) {
        function i() {
            e(t[0])
        }

        function s() {
            if (this.one("load", i), /MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
                var t = this.attr("src"), e = t.match(/\?/) ? "&" : "?";
                e += "random=" + (new Date).getTime(), this.attr("src", t + e)
            }
        }

        return t.attr("src") ? (t[0].complete || 4 === t[0].readyState ? i() : s.call(t), void 0) : (i(), void 0)
    };
    e.matchMedia = e.matchMedia || function (t) {
        var e, i = t.documentElement, s = i.firstElementChild || i.firstChild, n = t.createElement("body"), a = t.createElement("div");
        return a.id = "mq-test-1", a.style.cssText = "position:absolute;top:-100em", n.style.background = "none", n.appendChild(a), function (t) {
            return a.innerHTML = '&shy;<style media="' + t + '"> #mq-test-1 { width: 42px; }</style>', i.insertBefore(n, s), e = 42 === a.offsetWidth, i.removeChild(n), {matches: e, media: t}
        }
    }(i), function () {
        function t() {
            i && (a(t), jQuery.fx.tick())
        }

        for (var i, s = 0, n = ["webkit", "moz"], a = e.requestAnimationFrame, o = e.cancelAnimationFrame; s < n.length && !a; s++)a = e[n[s] + "RequestAnimationFrame"], o = o || e[n[s] + "CancelAnimationFrame"] || e[n[s] + "CancelRequestAnimationFrame"];
        a ? (e.requestAnimationFrame = a, e.cancelAnimationFrame = o, jQuery.fx.timer = function (e) {
            e() && jQuery.timers.push(e) && !i && (i = !0, t())
        }, jQuery.fx.stop = function () {
            i = !1
        }) : (e.requestAnimationFrame = function (t) {
            var i = (new Date).getTime(), n = Math.max(0, 16 - (i - s)), a = e.setTimeout(function () {
                t(i + n)
            }, n);
            return s = i + n, a
        }, e.cancelAnimationFrame = function (t) {
            clearTimeout(t)
        })
    }(jQuery), e.Foundation = {name: "Foundation", version: "5.1.1", media_queries: {small: o(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""), medium: o(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""), large: o(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""), xlarge: o(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""), xxlarge: o(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, "")}, stylesheet: t("<style></style>").appendTo("head")[0].sheet, global: {namespace: ""}, init: function (t, e, i, s, n) {
        var a = [t, i, s, n], r = [];
        if (this.rtl = /rtl/i.test(o("html").attr("dir")), this.scope = t || this.scope, this.set_namespace(), e && "string" == typeof e && !/reflow/i.test(e))this.libs.hasOwnProperty(e) && r.push(this.init_lib(e, a)); else for (var l in this.libs)r.push(this.init_lib(l, e));
        return t
    }, init_lib: function (t, e) {
        return this.libs.hasOwnProperty(t) ? (this.patch(this.libs[t]), e && e.hasOwnProperty(t) ? this.libs[t].init.apply(this.libs[t], [this.scope, e[t]]) : (e = e instanceof Array ? e : Array(e), this.libs[t].init.apply(this.libs[t], e))) : function () {
        }
    }, patch: function (t) {
        t.scope = this.scope, t.namespace = this.global.namespace, t.rtl = this.rtl, t.data_options = this.utils.data_options, t.attr_name = r, t.add_namespace = l, t.bindings = d, t.S = this.utils.S
    }, inherit: function (t, e) {
        for (var i = e.split(" "), s = i.length; s--;)this.utils.hasOwnProperty(i[s]) && (t[i[s]] = this.utils[i[s]])
    }, set_namespace: function () {
        var e = t(".foundation-data-attribute-namespace").css("font-family");
        /false/i.test(e) || (this.global.namespace = e)
    }, libs: {}, utils: {S: o, throttle: function (t, e) {
        var i = null;
        return function () {
            var s = this, n = arguments;
            clearTimeout(i), i = setTimeout(function () {
                t.apply(s, n)
            }, e)
        }
    }, debounce: function (t, e, i) {
        var s, n;
        return function () {
            var a = this, o = arguments, r = function () {
                s = null, i || (n = t.apply(a, o))
            }, l = i && !s;
            return clearTimeout(s), s = setTimeout(r, e), l && (n = t.apply(a, o)), n
        }
    }, data_options: function (e) {
        function i(t) {
            return!isNaN(t - 0) && null !== t && "" !== t && t !== !1 && t !== !0
        }

        function s(e) {
            return"string" == typeof e ? t.trim(e) : e
        }

        var n, a, o, r = {}, l = function (t) {
            var e = Foundation.global.namespace;
            return e.length > 0 ? t.data(e + "-options") : t.data("options")
        }, d = l(e);
        if ("object" == typeof d)return d;
        for (o = (d || ":").split(";"), n = o.length; n--;)a = o[n].split(":"), /true/i.test(a[1]) && (a[1] = !0), /false/i.test(a[1]) && (a[1] = !1), i(a[1]) && (a[1] = parseInt(a[1], 10)), 2 === a.length && a[0].length > 0 && (r[s(a[0])] = s(a[1]));
        return r
    }, register_media: function (e, i) {
        Foundation.media_queries[e] === s && (t("head").append('<meta class="' + i + '">'), Foundation.media_queries[e] = n(t("." + i).css("font-family")))
    }, add_custom_rule: function (t, e) {
        if (e === s)Foundation.stylesheet.insertRule(t, Foundation.stylesheet.cssRules.length); else {
            var i = Foundation.media_queries[e];
            i !== s && Foundation.stylesheet.insertRule("@media " + Foundation.media_queries[e] + "{ " + t + " }")
        }
    }, image_loaded: function (t, e) {
        var i = this, s = t.length;
        t.each(function () {
            c(i.S(this), function () {
                s -= 1, 0 == s && e(t)
            })
        })
    }, random_str: function (t) {
        var e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
        t || (t = Math.floor(Math.random() * e.length));
        for (var i = ""; t--;)i += e[Math.floor(Math.random() * e.length)];
        return i
    }}}, t.fn.foundation = function () {
        var t = Array.prototype.slice.call(arguments, 0);
        return this.each(function () {
            return Foundation.init.apply(Foundation, [this].concat(t)), this
        })
    }
}(jQuery, this, this.document), function (t, e, i) {
    "use strict";
    Foundation.libs.abide = {name: "abide", version: "5.1.1", settings: {live_validate: !0, focus_on_invalid: !0, error_labels: !0, timeout: 1e3, patterns: {alpha: /^[a-zA-Z]+$/, alpha_numeric: /^[a-zA-Z0-9]+$/, integer: /^\d+$/, number: /-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?/, password: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/, cvv: /^([0-9]){3,4}$/, email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, url: /(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?/, domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/, datetime: /([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))/, date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))/, time: /(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}/, dateISO: /\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}/, month_day_year: /(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/, color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/}}, timer: null, init: function (t, e, i) {
        this.bindings(e, i)
    }, events: function (e) {
        {
            var i = this, s = i.S(e).attr("novalidate", "novalidate");
            s.data(this.attr_name(!0) + "-init")
        }
        this.invalid_attr = this.add_namespace("data-invalid"), s.off(".abide").on("submit.fndtn.abide validate.fndtn.abide",function (t) {
            var e = /ajax/i.test(i.S(this).attr(i.attr_name()));
            return i.validate(i.S(this).find("input, textarea, select").get(), t, e)
        }).on("reset",function () {
            return i.reset(t(this))
        }).find("input, textarea, select").off(".abide").on("blur.fndtn.abide change.fndtn.abide",function (t) {
            i.validate([this], t)
        }).on("keydown.fndtn.abide", function (e) {
            var s = t(this).closest("form").data("abide-init");
            s.live_validate === !0 && (clearTimeout(i.timer), i.timer = setTimeout(function () {
                i.validate([this], e)
            }.bind(this), s.timeout))
        })
    }, reset: function (e) {
        e.removeAttr(this.invalid_attr), t(this.invalid_attr, e).removeAttr(this.invalid_attr), t(".error", e).not("small").removeClass("error")
    }, validate: function (t, e, i) {
        for (var s = this.parse_patterns(t), n = s.length, a = this.S(t[0]).closest("form"), o = /submit/.test(e.type), r = 0; n > r; r++)if (!s[r] && (o || i))return this.settings.focus_on_invalid && t[r].focus(), a.trigger("invalid"), this.S(t[r]).closest("form").attr(this.invalid_attr, ""), !1;
        return(o || i) && a.trigger("valid"), a.removeAttr(this.invalid_attr), i ? !1 : !0
    }, parse_patterns: function (t) {
        for (var e = t.length, i = []; e--;)i.push(this.pattern(t[e]));
        return this.check_validation_and_apply_styles(i)
    }, pattern: function (t) {
        var e = t.getAttribute("type"), i = "string" == typeof t.getAttribute("required"), s = t.getAttribute("pattern") || "";
        return this.settings.patterns.hasOwnProperty(s) && s.length > 0 ? [t, this.settings.patterns[s], i] : s.length > 0 ? [t, new RegExp(s), i] : this.settings.patterns.hasOwnProperty(e) ? [t, this.settings.patterns[e], i] : (s = /.*/, [t, s, i])
    }, check_validation_and_apply_styles: function (e) {
        for (var i = e.length, s = []; i--;) {
            var n, a = e[i][0], o = e[i][2], r = a.value, l = this.S(a).parent(), d = a.getAttribute(this.add_namespace("data-equalto")), c = "radio" === a.type, h = "checkbox" === a.type, u = this.S('label[for="' + a.getAttribute("id") + '"]'), f = o ? a.value.length > 0 : !0;
            n = l.is("label") ? l.parent() : l, c && o ? s.push(this.valid_radio(a, o)) : h && o ? s.push(this.valid_checkbox(a, o)) : d && o ? s.push(this.valid_equal(a, o, n)) : e[i][1].test(r) && f || !o && a.value.length < 1 ? (this.S(a).removeAttr(this.invalid_attr), n.removeClass("error"), u.length > 0 && this.settings.error_labels && u.removeClass("error"), s.push(!0), t(a).triggerHandler("valid")) : (this.S(a).attr(this.invalid_attr, ""), n.addClass("error"), u.length > 0 && this.settings.error_labels && u.addClass("error"), s.push(!1), t(a).triggerHandler("invalid"))
        }
        return s
    }, valid_checkbox: function (t, e) {
        var t = this.S(t), i = t.is(":checked") || !e;
        return i ? t.removeAttr(this.invalid_attr).parent().removeClass("error") : t.attr(this.invalid_attr, "").parent().addClass("error"), i
    }, valid_radio: function (t) {
        for (var e = t.getAttribute("name"), s = i.getElementsByName(e), n = s.length, a = !1, o = 0; n > o; o++)s[o].checked && (a = !0);
        for (var o = 0; n > o; o++)a ? this.S(s[o]).removeAttr(this.invalid_attr).parent().removeClass("error") : this.S(s[o]).attr(this.invalid_attr, "").parent().addClass("error");
        return a
    }, valid_equal: function (t, e, s) {
        var n = i.getElementById(t.getAttribute(this.add_namespace("data-equalto"))).value, a = t.value, o = n === a;
        return o ? (this.S(t).removeAttr(this.invalid_attr), s.removeClass("error")) : (this.S(t).attr(this.invalid_attr, ""), s.addClass("error")), o
    }}
}(jQuery, this, this.document), function (t) {
    "use strict";
    Foundation.libs.accordion = {name: "accordion", version: "5.1.1", settings: {active_class: "active", toggleable: !0}, init: function (t, e, i) {
        this.bindings(e, i)
    }, events: function () {
        var e = this, i = this.S;
        i(this.scope).off(".fndtn.accordion").on("click.fndtn.accordion", "[" + this.attr_name() + "] > dd > a", function (s) {
            var n = i(this).closest("[" + e.attr_name() + "]"), a = i("#" + this.href.split("#")[1]), o = i("dd > .content", n), r = t("> dd", n), l = n.data(e.attr_name(!0) + "-init"), d = i("dd > .content." + l.active_class, n), c = i("dd." + l.active_class, n);
            return s.preventDefault(), d[0] == a[0] && l.toggleable ? (c.toggleClass(l.active_class, !1), a.toggleClass(l.active_class, !1)) : (o.removeClass(l.active_class), r.removeClass(l.active_class), a.addClass(l.active_class).parent().addClass(l.active_class), void 0)
        })
    }, off: function () {
    }, reflow: function () {
    }}
}(jQuery, this, this.document), function (t) {
    "use strict";
    Foundation.libs.alert = {name: "alert", version: "5.1.1", settings: {animation: "fadeOut", speed: 300, callback: function () {
    }}, init: function (t, e, i) {
        this.bindings(e, i)
    }, events: function () {
        var e = this, i = this.S;
        t(this.scope).off(".alert").on("click.fndtn.alert", "[" + this.attr_name() + "] a.close", function (t) {
            var s = i(this).closest("[" + e.attr_name() + "]"), n = s.data(e.attr_name(!0) + "-init") || e.settings;
            t.preventDefault(), s[n.animation](n.speed, function () {
                i(this).trigger("closed").remove(), n.callback()
            })
        })
    }, reflow: function () {
    }}
}(jQuery, this, this.document), function (t, e, i, s) {
    "use strict";
    Foundation.libs.clearing = {name: "clearing", version: "5.1.1", settings: {templates: {viewing: '<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><div class="clearing-touch-label"></div><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a><a href="#" class="clearing-main-next"><span></span></a></div>'}, close_selectors: ".clearing-close", touch_label: "&larr;&nbsp;Swipe to Advance&nbsp;&rarr;", init: !1, locked: !1}, init: function (t, e, i) {
        var s = this;
        Foundation.inherit(this, "throttle image_loaded"), this.bindings(e, i), s.S(this.scope).is("[" + this.attr_name() + "]") ? this.assemble(s.S("li", this.scope)) : s.S("[" + this.attr_name() + "]", this.scope).each(function () {
            s.assemble(s.S("li", this))
        })
    }, events: function (t) {
        var i = this, s = i.S;
        s(this.scope).off(".clearing").on("click.fndtn.clearing", "ul[" + this.attr_name() + "] li",function (t, e, n) {
            var e = e || s(this), n = n || e, a = e.next("li"), o = e.closest("[" + i.attr_name() + "]").data(i.attr_name(!0) + "-init"), r = s(t.target);
            t.preventDefault(), o || (i.init(), o = e.closest("[" + i.attr_name() + "]").data(i.attr_name(!0) + "-init")), n.hasClass("visible") && e[0] === n[0] && a.length > 0 && i.is_open(e) && (n = a, r = s("img", n)), i.open(r, e, n), i.update_paddles(n)
        }).on("click.fndtn.clearing", ".clearing-main-next",function (t) {
            i.nav(t, "next")
        }).on("click.fndtn.clearing", ".clearing-main-prev",function (t) {
            i.nav(t, "prev")
        }).on("click.fndtn.clearing", this.settings.close_selectors,function (t) {
            Foundation.libs.clearing.close(t, this)
        }).on("keydown.fndtn.clearing", function (t) {
            i.keydown(t)
        }), s(e).off(".clearing").on("resize.fndtn.clearing", function () {
            i.resize()
        }), this.swipe_events(t)
    }, swipe_events: function () {
        var t = this, e = t.S;
        e(this.scope).on("touchstart.fndtn.clearing", ".visible-img",function (t) {
            t.touches || (t = t.originalEvent);
            var i = {start_page_x: t.touches[0].pageX, start_page_y: t.touches[0].pageY, start_time: (new Date).getTime(), delta_x: 0, is_scrolling: s};
            e(this).data("swipe-transition", i), t.stopPropagation()
        }).on("touchmove.fndtn.clearing", ".visible-img",function (i) {
            if (i.touches || (i = i.originalEvent), !(i.touches.length > 1 || i.scale && 1 !== i.scale)) {
                var s = e(this).data("swipe-transition");
                if ("undefined" == typeof s && (s = {}), s.delta_x = i.touches[0].pageX - s.start_page_x, "undefined" == typeof s.is_scrolling && (s.is_scrolling = !!(s.is_scrolling || Math.abs(s.delta_x) < Math.abs(i.touches[0].pageY - s.start_page_y))), !s.is_scrolling && !s.active) {
                    i.preventDefault();
                    var n = s.delta_x < 0 ? "next" : "prev";
                    s.active = !0, t.nav(i, n)
                }
            }
        }).on("touchend.fndtn.clearing", ".visible-img", function (t) {
            e(this).data("swipe-transition", {}), t.stopPropagation()
        })
    }, assemble: function (e) {
        var i = e.parent();
        if (!i.parent().hasClass("carousel")) {
            i.after('<div id="foundationClearingHolder"></div>');
            var s = this.S("#foundationClearingHolder"), n = i.data(this.attr_name(!0) + "-init"), a = i.detach(), o = {grid: '<div class="carousel">' + a[0].outerHTML + "</div>", viewing: n.templates.viewing}, r = '<div class="clearing-assembled"><div>' + o.viewing + o.grid + "</div></div>", l = this.settings.touch_label;
            Modernizr.touch && (r = t(r).find(".clearing-touch-label").html(l).end()), s.after(r).remove()
        }
    }, open: function (t, e, i) {
        var s = this, n = i.closest(".clearing-assembled"), a = s.S("div", n).first(), o = s.S(".visible-img", a), r = s.S("img", o).not(t), l = s.S(".clearing-touch-label", a);
        this.locked() || (r.attr("src", this.load(t)).css("visibility", "hidden"), this.image_loaded(r, function () {
            r.css("visibility", "visible"), n.addClass("clearing-blackout"), a.addClass("clearing-container"), o.show(), this.fix_height(i).caption(s.S(".clearing-caption", o), t).center_and_label(r, l).shift(e, i, function () {
                i.siblings().removeClass("visible"), i.addClass("visible")
            })
        }.bind(this)))
    }, close: function (e, i) {
        e.preventDefault();
        var s, n, a = function (t) {
            return/blackout/.test(t.selector) ? t : t.closest(".clearing-blackout")
        }(t(i));
        return i === e.target && a && (s = t("div", a).first(), n = t(".visible-img", s), this.settings.prev_index = 0, t("ul[" + this.attr_name() + "]", a).attr("style", "").closest(".clearing-blackout").removeClass("clearing-blackout"), s.removeClass("clearing-container"), n.hide()), !1
    }, is_open: function (t) {
        return t.parent().prop("style").length > 0
    }, keydown: function (e) {
        var i = t("ul[" + this.attr_name() + "]", ".clearing-blackout"), s = this.rtl ? 37 : 39, n = this.rtl ? 39 : 37, a = 27;
        e.which === s && this.go(i, "next"), e.which === n && this.go(i, "prev"), e.which === a && this.S("a.clearing-close").trigger("click")
    }, nav: function (e, i) {
        var s = t("ul[" + this.attr_name() + "]", ".clearing-blackout");
        e.preventDefault(), this.go(s, i)
    }, resize: function () {
        var e = t("img", ".clearing-blackout .visible-img"), i = t(".clearing-touch-label", ".clearing-blackout");
        e.length && this.center_and_label(e, i)
    }, fix_height: function (t) {
        var e = t.parent().children(), i = this;
        return e.each(function () {
            var t = i.S(this), e = t.find("img");
            t.height() > e.outerHeight() && t.addClass("fix-height")
        }).closest("ul").width(100 * e.length + "%"), this
    }, update_paddles: function (t) {
        var e = t.closest(".carousel").siblings(".visible-img");
        t.next().length > 0 ? this.S(".clearing-main-next", e).removeClass("disabled") : this.S(".clearing-main-next", e).addClass("disabled"), t.prev().length > 0 ? this.S(".clearing-main-prev", e).removeClass("disabled") : this.S(".clearing-main-prev", e).addClass("disabled")
    }, center_and_label: function (t, e) {
        return this.rtl ? (t.css({marginRight: -(t.outerWidth() / 2), marginTop: -(t.outerHeight() / 2), left: "auto", right: "50%"}), e.css({marginRight: -(e.outerWidth() / 2), marginTop: -(t.outerHeight() / 2) - e.outerHeight() - 10, left: "auto", right: "50%"})) : (t.css({marginLeft: -(t.outerWidth() / 2), marginTop: -(t.outerHeight() / 2)}), e.css({marginLeft: -(e.outerWidth() / 2), marginTop: -(t.outerHeight() / 2) - e.outerHeight() - 10})), this
    }, load: function (t) {
        if ("A" === t[0].nodeName)var e = t.attr("href"); else var e = t.parent().attr("href");
        return this.preload(t), e ? e : t.attr("src")
    }, preload: function (t) {
        this.img(t.closest("li").next()).img(t.closest("li").prev())
    }, img: function (t) {
        if (t.length) {
            var e = new Image, i = this.S("a", t);
            e.src = i.length ? i.attr("href") : this.S("img", t).attr("src")
        }
        return this
    }, caption: function (t, e) {
        var i = e.data("caption");
        return i ? t.html(i).show() : t.text("").hide(), this
    }, go: function (t, e) {
        var i = this.S(".visible", t), s = i[e]();
        s.length && this.S("img", s).trigger("click", [i, s])
    }, shift: function (t, e, i) {
        var s, n = e.parent(), a = this.settings.prev_index || e.index(), o = this.direction(n, t, e), r = this.rtl ? "right" : "left", l = parseInt(n.css("left"), 10), d = e.outerWidth(), c = {};
        e.index() === a || /skip/.test(o) ? /skip/.test(o) && (s = e.index() - this.settings.up_count, this.lock(), s > 0 ? (c[r] = -(s * d), n.animate(c, 300, this.unlock())) : (c[r] = 0, n.animate(c, 300, this.unlock()))) : /left/.test(o) ? (this.lock(), c[r] = l + d, n.animate(c, 300, this.unlock())) : /right/.test(o) && (this.lock(), c[r] = l - d, n.animate(c, 300, this.unlock())), i()
    }, direction: function (t, e, i) {
        var s, n = this.S("li", t), a = n.outerWidth() + n.outerWidth() / 4, o = Math.floor(this.S(".clearing-container").outerWidth() / a) - 1, r = n.index(i);
        return this.settings.up_count = o, s = this.adjacent(this.settings.prev_index, r) ? r > o && r > this.settings.prev_index ? "right" : r > o - 1 && r <= this.settings.prev_index ? "left" : !1 : "skip", this.settings.prev_index = r, s
    }, adjacent: function (t, e) {
        for (var i = e + 1; i >= e - 1; i--)if (i === t)return!0;
        return!1
    }, lock: function () {
        this.settings.locked = !0
    }, unlock: function () {
        this.settings.locked = !1
    }, locked: function () {
        return this.settings.locked
    }, off: function () {
        this.S(this.scope).off(".fndtn.clearing"), this.S(e).off(".fndtn.clearing")
    }, reflow: function () {
        this.init()
    }}
}(jQuery, this, this.document), function (t, e) {
    "use strict";
    Foundation.libs.dropdown = {name: "dropdown", version: "5.1.1", settings: {active_class: "open", is_hover: !1, opened: function () {
    }, closed: function () {
    }}, init: function (t, e, i) {
        Foundation.inherit(this, "throttle"), this.bindings(e, i)
    }, events: function () {
        var i = this, s = i.S;
        s(this.scope).off(".dropdown").on("click.fndtn.dropdown", "[" + this.attr_name() + "]",function (t) {
            var e = s(this).data(i.attr_name(!0) + "-init") || i.settings;
            t.preventDefault(), (!e.is_hover || Modernizr.touch) && i.toggle(s(this))
        }).on("mouseenter.fndtn.dropdown", "[" + this.attr_name() + "], [" + this.attr_name() + "-content]",function (t) {
            var e = s(this);
            if (clearTimeout(i.timeout), e.data(i.data_attr()))var n = s("#" + e.data(i.data_attr())), a = e; else {
                var n = e;
                a = s("[" + i.attr_name() + "='" + n.attr("id") + "']")
            }
            var o = a.data(i.attr_name(!0) + "-init") || i.settings;
            s(t.target).data(i.data_attr()) && o.is_hover && i.closeall.call(i), o.is_hover && i.open.apply(i, [n, a])
        }).on("mouseleave.fndtn.dropdown", "[" + this.attr_name() + "], [" + this.attr_name() + "-content]",function () {
            var t = s(this);
            i.timeout = setTimeout(function () {
                if (t.data(i.data_attr())) {
                    var e = t.data(i.data_attr(!0) + "-init") || i.settings;
                    e.is_hover && i.close.call(i, s("#" + t.data(i.data_attr())))
                } else {
                    var n = s("[" + i.attr_name() + '="' + s(this).attr("id") + '"]'), e = n.data(i.attr_name(!0) + "-init") || i.settings;
                    e.is_hover && i.close.call(i, t)
                }
            }.bind(this), 150)
        }).on("click.fndtn.dropdown",function (e) {
            var n = s(e.target).closest("[" + i.attr_name() + "-content]");
            if (!s(e.target).data(i.data_attr()) && !s(e.target).parent().data(i.data_attr()))return!s(e.target).data("revealId") && n.length > 0 && (s(e.target).is("[" + i.attr_name() + "-content]") || t.contains(n.first()[0], e.target)) ? (e.stopPropagation(), void 0) : (i.close.call(i, s("[" + i.attr_name() + "-content]")), void 0)
        }).on("opened.fndtn.dropdown", "[" + i.attr_name() + "-content]",function () {
            i.settings.opened.call(this)
        }).on("closed.fndtn.dropdown", "[" + i.attr_name() + "-content]", function () {
            i.settings.closed.call(this)
        }), s(e).off(".dropdown").on("resize.fndtn.dropdown", i.throttle(function () {
            i.resize.call(i)
        }, 50)).trigger("resize")
    }, close: function (t) {
        var e = this;
        t.each(function () {
            e.S(this).hasClass(e.settings.active_class) && (e.S(this).css(Foundation.rtl ? "right" : "left", "-99999px").removeClass(e.settings.active_class), e.S(this).trigger("closed"))
        })
    }, closeall: function () {
        var e = this;
        t.each(e.S("[" + this.attr_name() + "-content]"), function () {
            e.close.call(e, e.S(this))
        })
    }, open: function (t, e) {
        this.css(t.addClass(this.settings.active_class), e), t.trigger("opened")
    }, data_attr: function () {
        return this.namespace.length > 0 ? this.namespace + "-" + this.name : this.name
    }, toggle: function (t) {
        var e = this.S("#" + t.data(this.data_attr()));
        0 !== e.length && (this.close.call(this, this.S("[" + this.attr_name() + "-content]").not(e)), e.hasClass(this.settings.active_class) ? this.close.call(this, e) : (this.close.call(this, this.S("[" + this.attr_name() + "-content]")), this.open.call(this, e, t)))
    }, resize: function () {
        var t = this.S("[" + this.attr_name() + "-content].open"), e = this.S("[" + this.attr_name() + "='" + t.attr("id") + "']");
        t.length && e.length && this.css(t, e)
    }, css: function (t, i) {
        var s = t.offsetParent(), n = i.offset();
        if (n.top -= s.offset().top, n.left -= s.offset().left, this.small())t.css({position: "absolute", width: "95%", "max-width": "none", top: n.top + i.outerHeight()}), t.css(Foundation.rtl ? "right" : "left", "2.5%"); else {
            if (!Foundation.rtl && this.S(e).width() > t.outerWidth() + i.offset().left) {
                var a = n.left;
                t.hasClass("right") && t.removeClass("right")
            } else {
                t.hasClass("right") || t.addClass("right");
                var a = n.left - (t.outerWidth() - i.outerWidth())
            }
            t.attr("style", "").css({position: "absolute", top: n.top + i.outerHeight(), left: a})
        }
        return t
    }, small: function () {
        return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
    }, off: function () {
        this.S(this.scope).off(".fndtn.dropdown"), this.S("html, body").off(".fndtn.dropdown"), this.S(e).off(".fndtn.dropdown"), this.S("[data-dropdown-content]").off(".fndtn.dropdown"), this.settings.init = !1
    }, reflow: function () {
    }}
}(jQuery, this, this.document), function (t, e) {
    "use strict";
    Foundation.libs.interchange = {name: "interchange", version: "5.1.1", cache: {}, images_loaded: !1, nodes_loaded: !1, settings: {load_attr: "interchange", named_queries: {"default": "only screen", small: Foundation.media_queries.small, medium: Foundation.media_queries.medium, large: Foundation.media_queries.large, xlarge: Foundation.media_queries.xlarge, xxlarge: Foundation.media_queries.xxlarge, landscape: "only screen and (orientation: landscape)", portrait: "only screen and (orientation: portrait)", retina: "only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"}, directives: {replace: function (e, i, s) {
        if (/IMG/.test(e[0].nodeName)) {
            var n = e[0].src;
            if (new RegExp(i, "i").test(n))return;
            return e[0].src = i, s(e[0].src)
        }
        var a = e.data(this.data_attr + "-last-path");
        if (a != i)return t.get(i, function (t) {
            e.html(t), e.data(this.data_attr + "-last-path", i), s()
        })
    }}}, init: function (e, i, s) {
        Foundation.inherit(this, "throttle random_str"), this.data_attr = this.set_data_attr(), t.extend(!0, this.settings, i, s), this.bindings(i, s), this.load("images"), this.load("nodes")
    }, events: function () {
        var i = this;
        return t(e).off(".interchange").on("resize.fndtn.interchange", i.throttle(function () {
            i.resize()
        }, 50)), this
    }, resize: function () {
        var e = this.cache;
        if (!this.images_loaded || !this.nodes_loaded)return setTimeout(t.proxy(this.resize, this), 50), void 0;
        for (var i in e)if (e.hasOwnProperty(i)) {
            var s = this.results(i, e[i]);
            s && this.settings.directives[s.scenario[1]].call(this, s.el, s.scenario[0], function () {
                if (arguments[0]instanceof Array)var t = arguments[0]; else var t = Array.prototype.slice.call(arguments, 0);
                s.el.trigger(s.scenario[1], t)
            })
        }
    }, results: function (t, e) {
        var i = e.length;
        if (i > 0)for (var s = this.S("[" + this.add_namespace("data-uuid") + '="' + t + '"]'); i--;) {
            var n, a = e[i][2];
            if (n = this.settings.named_queries.hasOwnProperty(a) ? matchMedia(this.settings.named_queries[a]) : matchMedia(a), n.matches)return{el: s, scenario: e[i]}
        }
        return!1
    }, load: function (t, e) {
        return("undefined" == typeof this["cached_" + t] || e) && this["update_" + t](), this["cached_" + t]
    }, update_images: function () {
        var t = this.S("img[" + this.data_attr + "]"), e = t.length, i = e, s = 0, n = this.data_attr;
        for (this.cache = {}, this.cached_images = [], this.images_loaded = 0 === e; i--;) {
            if (s++, t[i]) {
                var a = t[i].getAttribute(n) || "";
                a.length > 0 && this.cached_images.push(t[i])
            }
            s === e && (this.images_loaded = !0, this.enhance("images"))
        }
        return this
    }, update_nodes: function () {
        var t = this.S("[" + this.data_attr + "]").not("img"), e = t.length, i = e, s = 0, n = this.data_attr;
        for (this.cached_nodes = [], this.nodes_loaded = 0 === e; i--;) {
            s++;
            var a = t[i].getAttribute(n) || "";
            a.length > 0 && this.cached_nodes.push(t[i]), s === e && (this.nodes_loaded = !0, this.enhance("nodes"))
        }
        return this
    }, enhance: function (i) {
        for (var s = this["cached_" + i].length; s--;)this.object(t(this["cached_" + i][s]));
        return t(e).trigger("resize")
    }, parse_params: function (t, e, i) {
        return[this.trim(t), this.convert_directive(e), this.trim(i)]
    }, convert_directive: function (t) {
        var e = this.trim(t);
        return e.length > 0 ? e : "replace"
    }, object: function (t) {
        var e = this.parse_data_attr(t), i = [], s = e.length;
        if (s > 0)for (; s--;) {
            var n = e[s].split(/\((.*?)(\))$/);
            if (n.length > 1) {
                var a = n[0].split(","), o = this.parse_params(a[0], a[1], n[1]);
                i.push(o)
            }
        }
        return this.store(t, i)
    }, uuid: function (t) {
        function e() {
            return s.random_str(6)
        }

        var i = t || "-", s = this;
        return e() + e() + i + e() + i + e() + i + e() + i + e() + e() + e()
    }, store: function (t, e) {
        var i = this.uuid(), s = t.data(this.add_namespace("uuid", !0));
        return this.cache[s] ? this.cache[s] : (t.attr(this.add_namespace("data-uuid"), i), this.cache[i] = e)
    }, trim: function (e) {
        return"string" == typeof e ? t.trim(e) : e
    }, set_data_attr: function (t) {
        return t ? this.namespace.length > 0 ? this.namespace + "-" + this.settings.load_attr : this.settings.load_attr : this.namespace.length > 0 ? "data-" + this.namespace + "-" + this.settings.load_attr : "data-" + this.settings.load_attr
    }, parse_data_attr: function (t) {
        for (var e = t.attr(this.attr_name()).split(/\[(.*?)\]/), i = e.length, s = []; i--;)e[i].replace(/[\W\d]+/, "").length > 4 && s.push(e[i]);
        return s
    }, reflow: function () {
        this.load("images", !0), this.load("nodes", !0)
    }}
}(jQuery, this, this.document), function (t, e, i, s) {
    "use strict";
    Foundation.libs.joyride = {name: "joyride", version: "5.1.1", defaults: {expose: !1, modal: !0, tip_location: "bottom", nub_position: "auto", scroll_speed: 1500, scroll_animation: "linear", timer: 0, start_timer_on_click: !0, start_offset: 0, next_button: !0, tip_animation: "fade", pause_after: [], exposed: [], tip_animation_fade_speed: 300, cookie_monster: !1, cookie_name: "joyride", cookie_domain: !1, cookie_expires: 365, tip_container: "body", tip_location_patterns: {top: ["bottom"], bottom: [], left: ["right", "top", "bottom"], right: ["left", "top", "bottom"]}, post_ride_callback: function () {
    }, post_step_callback: function () {
    }, pre_step_callback: function () {
    }, pre_ride_callback: function () {
    }, post_expose_callback: function () {
    }, template: {link: '<a href="#close" class="joyride-close-tip">&times;</a>', timer: '<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>', tip: '<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>', wrapper: '<div class="joyride-content-wrapper"></div>', button: '<a href="#" class="small button joyride-next-tip"></a>', modal: '<div class="joyride-modal-bg"></div>', expose: '<div class="joyride-expose-wrapper"></div>', expose_cover: '<div class="joyride-expose-cover"></div>'}, expose_add_class: ""}, init: function (t, e, i) {
        Foundation.inherit(this, "throttle random_str"), this.settings = this.defaults, this.bindings(e, i)
    }, events: function () {
        var i = this;
        t(this.scope).off(".joyride").on("click.fndtn.joyride", ".joyride-next-tip, .joyride-modal-bg", function (t) {
            t.preventDefault(), this.settings.$li.next().length < 1 ? this.end() : this.settings.timer > 0 ? (clearTimeout(this.settings.automate), this.hide(), this.show(), this.startTimer()) : (this.hide(), this.show())
        }.bind(this)).on("click.fndtn.joyride", ".joyride-close-tip", function (t) {
            t.preventDefault(), this.end()
        }.bind(this)), t(e).off(".joyride").on("resize.fndtn.joyride", i.throttle(function () {
            if (t("[" + i.attr_name() + "]").length > 0 && i.settings.$next_tip) {
                if (i.settings.exposed.length > 0) {
                    var e = t(i.settings.exposed);
                    e.each(function () {
                        var e = t(this);
                        i.un_expose(e), i.expose(e)
                    })
                }
                i.is_phone() ? i.pos_phone() : i.pos_default(!1, !0)
            }
        }, 100))
    }, start: function () {
        var e = this, i = t("[" + this.attr_name() + "]", this.scope), s = ["timer", "scrollSpeed", "startOffset", "tipAnimationFadeSpeed", "cookieExpires"], n = s.length;
        !i.length > 0 || (this.settings.init || this.events(), this.settings = i.data(this.attr_name(!0) + "-init"), this.settings.$content_el = i, this.settings.$body = t(this.settings.tip_container), this.settings.body_offset = t(this.settings.tip_container).position(), this.settings.$tip_content = this.settings.$content_el.find("> li"), this.settings.paused = !1, this.settings.attempts = 0, "function" != typeof t.cookie && (this.settings.cookie_monster = !1), (!this.settings.cookie_monster || this.settings.cookie_monster && !t.cookie(this.settings.cookie_name)) && (this.settings.$tip_content.each(function (i) {
            var a = t(this);
            this.settings = t.extend({}, e.defaults, e.data_options(a));
            for (var o = n; o--;)e.settings[s[o]] = parseInt(e.settings[s[o]], 10);
            e.create({$li: a, index: i})
        }), !this.settings.start_timer_on_click && this.settings.timer > 0 ? (this.show("init"), this.startTimer()) : this.show("init")))
    }, resume: function () {
        this.set_li(), this.show()
    }, tip_template: function (e) {
        var i, s;
        return e.tip_class = e.tip_class || "", i = t(this.settings.template.tip).addClass(e.tip_class), s = t.trim(t(e.li).html()) + this.button_text(e.button_text) + this.settings.template.link + this.timer_instance(e.index), i.append(t(this.settings.template.wrapper)), i.first().attr(this.add_namespace("data-index"), e.index), t(".joyride-content-wrapper", i).append(s), i[0]
    }, timer_instance: function (e) {
        var i;
        return i = 0 === e && this.settings.start_timer_on_click && this.settings.timer > 0 || 0 === this.settings.timer ? "" : t(this.settings.template.timer)[0].outerHTML
    }, button_text: function (e) {
        return this.settings.next_button ? (e = t.trim(e) || "Next", e = t(this.settings.template.button).append(e)[0].outerHTML) : e = "", e
    }, create: function (e) {
        console.log(e.$li);
        var i = e.$li.attr(this.add_namespace("data-button")) || e.$li.attr(this.add_namespace("data-text")), s = e.$li.attr("class"), n = t(this.tip_template({tip_class: s, index: e.index, button_text: i, li: e.$li}));
        t(this.settings.tip_container).append(n)
    }, show: function (e) {
        var i = null;
        this.settings.$li === s || -1 === t.inArray(this.settings.$li.index(), this.settings.pause_after) ? (this.settings.paused ? this.settings.paused = !1 : this.set_li(e), this.settings.attempts = 0, this.settings.$li.length && this.settings.$target.length > 0 ? (e && (this.settings.pre_ride_callback(this.settings.$li.index(), this.settings.$next_tip), this.settings.modal && this.show_modal()), this.settings.pre_step_callback(this.settings.$li.index(), this.settings.$next_tip), this.settings.modal && this.settings.expose && this.expose(), this.settings.tip_settings = t.extend({}, this.settings, this.data_options(this.settings.$li)), this.settings.timer = parseInt(this.settings.timer, 10), this.settings.tip_settings.tip_location_pattern = this.settings.tip_location_patterns[this.settings.tip_settings.tip_location], /body/i.test(this.settings.$target.selector) || this.scroll_to(), this.is_phone() ? this.pos_phone(!0) : this.pos_default(!0), i = this.settings.$next_tip.find(".joyride-timer-indicator"), /pop/i.test(this.settings.tip_animation) ? (i.width(0), this.settings.timer > 0 ? (this.settings.$next_tip.show(), setTimeout(function () {
            i.animate({width: i.parent().width()}, this.settings.timer, "linear")
        }.bind(this), this.settings.tip_animation_fade_speed)) : this.settings.$next_tip.show()) : /fade/i.test(this.settings.tip_animation) && (i.width(0), this.settings.timer > 0 ? (this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed).show(), setTimeout(function () {
            i.animate({width: i.parent().width()}, this.settings.timer, "linear")
        }.bind(this), this.settings.tip_animation_fadeSpeed)) : this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed)), this.settings.$current_tip = this.settings.$next_tip) : this.settings.$li && this.settings.$target.length < 1 ? this.show() : this.end()) : this.settings.paused = !0
    }, is_phone: function () {
        return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
    }, hide: function () {
        this.settings.modal && this.settings.expose && this.un_expose(), this.settings.modal || t(".joyride-modal-bg").hide(), this.settings.$current_tip.css("visibility", "hidden"), setTimeout(t.proxy(function () {
            this.hide(), this.css("visibility", "visible")
        }, this.settings.$current_tip), 0), this.settings.post_step_callback(this.settings.$li.index(), this.settings.$current_tip)
    }, set_li: function (t) {
        t ? (this.settings.$li = this.settings.$tip_content.eq(this.settings.start_offset), this.set_next_tip(), this.settings.$current_tip = this.settings.$next_tip) : (this.settings.$li = this.settings.$li.next(), this.set_next_tip()), this.set_target()
    }, set_next_tip: function () {
        this.settings.$next_tip = t(".joyride-tip-guide").eq(this.settings.$li.index()), this.settings.$next_tip.data("closed", "")
    }, set_target: function () {
        console.log(this.add_namespace("data-class"));
        var e = this.settings.$li.attr(this.add_namespace("data-class")), s = this.settings.$li.attr(this.add_namespace("data-id")), n = function () {
            return s ? t(i.getElementById(s)) : e ? t("." + e).first() : t("body")
        };
        console.log(e, s), this.settings.$target = n()
    }, scroll_to: function () {
        var i, s;
        i = t(e).height() / 2, s = Math.ceil(this.settings.$target.offset().top - i + this.settings.$next_tip.outerHeight()), 0 != s && t("html, body").animate({scrollTop: s}, this.settings.scroll_speed, "swing")
    }, paused: function () {
        return-1 === t.inArray(this.settings.$li.index() + 1, this.settings.pause_after)
    }, restart: function () {
        this.hide(), this.settings.$li = s, this.show("init")
    }, pos_default: function (i, s) {
        var n = (Math.ceil(t(e).height() / 2), this.settings.$next_tip.offset(), this.settings.$next_tip.find(".joyride-nub")), a = Math.ceil(n.outerWidth() / 2), o = Math.ceil(n.outerHeight() / 2), r = i || !1;
        r && (this.settings.$next_tip.css("visibility", "hidden"), this.settings.$next_tip.show()), "undefined" == typeof s && (s = !1), /body/i.test(this.settings.$target.selector) ? this.settings.$li.length && this.pos_modal(n) : (this.bottom() ? (this.rtl ? this.settings.$next_tip.css({top: this.settings.$target.offset().top + o + this.settings.$target.outerHeight(), left: this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth()}) : this.settings.$next_tip.css({top: this.settings.$target.offset().top + o + this.settings.$target.outerHeight(), left: this.settings.$target.offset().left}), this.nub_position(n, this.settings.tip_settings.nub_position, "top")) : this.top() ? (this.rtl ? this.settings.$next_tip.css({top: this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - o, left: this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth()}) : this.settings.$next_tip.css({top: this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - o, left: this.settings.$target.offset().left}), this.nub_position(n, this.settings.tip_settings.nub_position, "bottom")) : this.right() ? (this.settings.$next_tip.css({top: this.settings.$target.offset().top, left: this.outerWidth(this.settings.$target) + this.settings.$target.offset().left + a}), this.nub_position(n, this.settings.tip_settings.nub_position, "left")) : this.left() && (this.settings.$next_tip.css({top: this.settings.$target.offset().top, left: this.settings.$target.offset().left - this.outerWidth(this.settings.$next_tip) - a}), this.nub_position(n, this.settings.tip_settings.nub_position, "right")), !this.visible(this.corners(this.settings.$next_tip)) && this.settings.attempts < this.settings.tip_settings.tip_location_pattern.length && (n.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"), this.settings.tip_settings.tip_location = this.settings.tip_settings.tip_location_pattern[this.settings.attempts], this.settings.attempts++, this.pos_default())), r && (this.settings.$next_tip.hide(), this.settings.$next_tip.css("visibility", "visible"))
    }, pos_phone: function (e) {
        var i = this.settings.$next_tip.outerHeight(), s = (this.settings.$next_tip.offset(), this.settings.$target.outerHeight()), n = t(".joyride-nub", this.settings.$next_tip), a = Math.ceil(n.outerHeight() / 2), o = e || !1;
        n.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"), o && (this.settings.$next_tip.css("visibility", "hidden"), this.settings.$next_tip.show()), /body/i.test(this.settings.$target.selector) ? this.settings.$li.length && this.pos_modal(n) : this.top() ? (this.settings.$next_tip.offset({top: this.settings.$target.offset().top - i - a}), n.addClass("bottom")) : (this.settings.$next_tip.offset({top: this.settings.$target.offset().top + s + a}), n.addClass("top")), o && (this.settings.$next_tip.hide(), this.settings.$next_tip.css("visibility", "visible"))
    }, pos_modal: function (t) {
        this.center(), t.hide(), this.show_modal()
    }, show_modal: function () {
        if (!this.settings.$next_tip.data("closed")) {
            var e = t(".joyride-modal-bg");
            e.length < 1 && t("body").append(this.settings.template.modal).show(), /pop/i.test(this.settings.tip_animation) ? e.show() : e.fadeIn(this.settings.tip_animation_fade_speed)
        }
    }, expose: function () {
        var i, s, n, a, o, r = "expose-" + this.random_str(6);
        if (arguments.length > 0 && arguments[0]instanceof t)n = arguments[0]; else {
            if (!this.settings.$target || /body/i.test(this.settings.$target.selector))return!1;
            n = this.settings.$target
        }
        return n.length < 1 ? (e.console && console.error("element not valid", n), !1) : (i = t(this.settings.template.expose), this.settings.$body.append(i), i.css({top: n.offset().top, left: n.offset().left, width: n.outerWidth(!0), height: n.outerHeight(!0)}), s = t(this.settings.template.expose_cover), a = {zIndex: n.css("z-index"), position: n.css("position")}, o = null == n.attr("class") ? "" : n.attr("class"), n.css("z-index", parseInt(i.css("z-index")) + 1), "static" == a.position && n.css("position", "relative"), n.data("expose-css", a), n.data("orig-class", o), n.attr("class", o + " " + this.settings.expose_add_class), s.css({top: n.offset().top, left: n.offset().left, width: n.outerWidth(!0), height: n.outerHeight(!0)}), this.settings.modal && this.show_modal(), this.settings.$body.append(s), i.addClass(r), s.addClass(r), n.data("expose", r), this.settings.post_expose_callback(this.settings.$li.index(), this.settings.$next_tip, n), this.add_exposed(n), void 0)
    }, un_expose: function () {
        var i, s, n, a, o, r = !1;
        if (arguments.length > 0 && arguments[0]instanceof t)s = arguments[0]; else {
            if (!this.settings.$target || /body/i.test(this.settings.$target.selector))return!1;
            s = this.settings.$target
        }
        return s.length < 1 ? (e.console && console.error("element not valid", s), !1) : (i = s.data("expose"), n = t("." + i), arguments.length > 1 && (r = arguments[1]), r === !0 ? t(".joyride-expose-wrapper,.joyride-expose-cover").remove() : n.remove(), a = s.data("expose-css"), "auto" == a.zIndex ? s.css("z-index", "") : s.css("z-index", a.zIndex), a.position != s.css("position") && ("static" == a.position ? s.css("position", "") : s.css("position", a.position)), o = s.data("orig-class"), s.attr("class", o), s.removeData("orig-classes"), s.removeData("expose"), s.removeData("expose-z-index"), this.remove_exposed(s), void 0)
    }, add_exposed: function (e) {
        this.settings.exposed = this.settings.exposed || [], e instanceof t || "object" == typeof e ? this.settings.exposed.push(e[0]) : "string" == typeof e && this.settings.exposed.push(e)
    }, remove_exposed: function (e) {
        var i, s;
        for (e instanceof t ? i = e[0] : "string" == typeof e && (i = e), this.settings.exposed = this.settings.exposed || [], s = this.settings.exposed.length; s--;)if (this.settings.exposed[s] == i)return this.settings.exposed.splice(s, 1), void 0
    }, center: function () {
        var i = t(e);
        return this.settings.$next_tip.css({top: (i.height() - this.settings.$next_tip.outerHeight()) / 2 + i.scrollTop(), left: (i.width() - this.settings.$next_tip.outerWidth()) / 2 + i.scrollLeft()}), !0
    }, bottom: function () {
        return/bottom/i.test(this.settings.tip_settings.tip_location)
    }, top: function () {
        return/top/i.test(this.settings.tip_settings.tip_location)
    }, right: function () {
        return/right/i.test(this.settings.tip_settings.tip_location)
    }, left: function () {
        return/left/i.test(this.settings.tip_settings.tip_location)
    }, corners: function (i) {
        var s = t(e), n = s.height() / 2, a = Math.ceil(this.settings.$target.offset().top - n + this.settings.$next_tip.outerHeight()), o = s.width() + s.scrollLeft(), r = s.height() + a, l = s.height() + s.scrollTop(), d = s.scrollTop();
        return d > a && (d = 0 > a ? 0 : a), r > l && (l = r), [i.offset().top < d, o < i.offset().left + i.outerWidth(), l < i.offset().top + i.outerHeight(), s.scrollLeft() > i.offset().left]
    }, visible: function (t) {
        for (var e = t.length; e--;)if (t[e])return!1;
        return!0
    }, nub_position: function (t, e, i) {
        "auto" === e ? t.addClass(i) : t.addClass(e)
    }, startTimer: function () {
        this.settings.$li.length ? this.settings.automate = setTimeout(function () {
            this.hide(), this.show(), this.startTimer()
        }.bind(this), this.settings.timer) : clearTimeout(this.settings.automate)
    }, end: function () {
        this.settings.cookie_monster && t.cookie(this.settings.cookie_name, "ridden", {expires: this.settings.cookie_expires, domain: this.settings.cookie_domain}), this.settings.timer > 0 && clearTimeout(this.settings.automate), this.settings.modal && this.settings.expose && this.un_expose(), this.settings.$next_tip.data("closed", !0), t(".joyride-modal-bg").hide(), this.settings.$current_tip.hide(), this.settings.post_step_callback(this.settings.$li.index(), this.settings.$current_tip), this.settings.post_ride_callback(this.settings.$li.index(), this.settings.$current_tip), t(".joyride-tip-guide").remove()
    }, off: function () {
        t(this.scope).off(".joyride"), t(e).off(".joyride"), t(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(".joyride"), t(".joyride-tip-guide, .joyride-modal-bg").remove(), clearTimeout(this.settings.automate), this.settings = {}
    }, reflow: function () {
    }}
}(jQuery, this, this.document), function (t, e) {
    "use strict";
    Foundation.libs["magellan-expedition"] = {name: "magellan-expedition", version: "5.1.1", settings: {active_class: "active", threshold: 0, destination_threshold: 20, throttle_delay: 30}, init: function (t, e, i) {
        Foundation.inherit(this, "throttle"), this.bindings(e, i)
    }, events: function () {
        var i = this, s = i.S, n = i.settings;
        i.set_expedition_position(), s(i.scope).off(".magellan").on("click.fndtn.magellan", "[" + i.add_namespace("data-magellan-arrival") + '] a[href^="#"]',function (s) {
            s.preventDefault();
            var n = t(this).closest("[" + i.attr_name() + "]"), a = (n.data("magellan-expedition-init"), this.hash.split("#").join("")), o = t("a[name=" + a + "]");
            0 === o.length && (o = t("#" + a));
            var r = o.offset().top;
            "fixed" === n.css("position") && (r -= n.outerHeight()), t("html, body").stop().animate({scrollTop: r}, 700, "swing", function () {
                e.location.hash = "#" + a
            })
        }).on("scroll.fndtn.magellan", i.throttle(this.check_for_arrivals.bind(this), n.throttle_delay)).on("resize.fndtn.magellan", i.throttle(this.set_expedition_position.bind(this), n.throttle_delay))
    }, check_for_arrivals: function () {
        var t = this;
        t.update_arrivals(), t.update_expedition_positions()
    }, set_expedition_position: function () {
        var e = this;
        t("[" + this.attr_name() + "=fixed]", e.scope).each(function () {
            var i, s = t(this), n = s.attr("styles");
            s.attr("style", ""), i = s.offset().top, s.data(e.data_attr("magellan-top-offset"), i), s.attr("style", n)
        })
    }, update_expedition_positions: function () {
        var i = this, s = t(e).scrollTop();
        t("[" + this.attr_name() + "=fixed]", i.scope).each(function () {
            var e = t(this), n = e.data("magellan-top-offset");
            if (s >= n) {
                var a = e.prev("[" + i.add_namespace("data-magellan-expedition-clone") + "]");
                0 === a.length && (a = e.clone(), a.removeAttr(i.attr_name()), a.attr(i.add_namespace("data-magellan-expedition-clone"), ""), e.before(a)), e.css({position: "fixed", top: 0})
            } else e.prev("[" + i.add_namespace("data-magellan-expedition-clone") + "]").remove(), e.attr("style", "")
        })
    }, update_arrivals: function () {
        var i = this, s = t(e).scrollTop();
        t("[" + this.attr_name() + "]", i.scope).each(function () {
            var e = t(this), n = n = e.data(i.attr_name(!0) + "-init"), a = i.offsets(e, s), o = e.find("[" + i.add_namespace("data-magellan-arrival") + "]"), r = !1;
            a.each(function (t, s) {
                if (s.viewport_offset >= s.top_offset) {
                    var a = e.find("[" + i.add_namespace("data-magellan-arrival") + "]");
                    return a.not(s.arrival).removeClass(n.active_class), s.arrival.addClass(n.active_class), r = !0, !0
                }
            }), r || o.removeClass(n.active_class)
        })
    }, offsets: function (e, i) {
        var s = this, n = e.data(s.attr_name(!0) + "-init"), a = i + n.destination_threshold;
        return e.find("[" + s.add_namespace("data-magellan-arrival") + "]").map(function () {
            var e = t(this).data(s.data_attr("magellan-arrival")), i = t("[" + s.add_namespace("data-magellan-destination") + "=" + e + "]");
            if (i.length > 0) {
                var n = i.offset().top;
                return{destination: i, arrival: t(this), top_offset: n, viewport_offset: a}
            }
        }).sort(function (t, e) {
            return t.top_offset < e.top_offset ? -1 : t.top_offset > e.top_offset ? 1 : 0
        })
    }, data_attr: function (t) {
        return this.namespace.length > 0 ? this.namespace + "-" + t : t
    }, off: function () {
        this.S(this.scope).off(".magellan"), this.S(e).off(".magellan")
    }, reflow: function () {
        var e = this;
        t("[" + e.add_namespace("data-magellan-expedition-clone") + "]", e.scope).remove()
    }}
}(jQuery, this, this.document), function () {
    "use strict";
    Foundation.libs.offcanvas = {name: "offcanvas", version: "5.1.1", settings: {}, init: function () {
        this.events()
    }, events: function () {
        var t = this.S;
        t(this.scope).off(".offcanvas").on("click.fndtn.offcanvas", ".left-off-canvas-toggle",function (e) {
            e.preventDefault(), t(this).closest(".off-canvas-wrap").toggleClass("move-right")
        }).on("click.fndtn.offcanvas", ".exit-off-canvas",function (e) {
            e.preventDefault(), t(".off-canvas-wrap").removeClass("move-right")
        }).on("click.fndtn.offcanvas", ".right-off-canvas-toggle",function (e) {
            e.preventDefault(), t(this).closest(".off-canvas-wrap").toggleClass("move-left")
        }).on("click.fndtn.offcanvas", ".exit-off-canvas", function (e) {
            e.preventDefault(), t(".off-canvas-wrap").removeClass("move-left")
        })
    }, reflow: function () {
    }}
}(jQuery, this, this.document), function (t, e, i, s) {
    "use strict";
    var n = function () {
    }, a = function (n, a) {
        if (n.hasClass(a.slides_container_class))return this;
        var d, c, h, u, f, p, g = this, _ = n, m = 0, v = !1;
        g.slides = function () {
            return _.children(a.slide_selector)
        }, g.slides().first().addClass(a.active_slide_class), g.update_slide_number = function (e) {
            a.slide_number && (c.find("span:first").text(parseInt(e) + 1), c.find("span:last").text(g.slides().length)), a.bullets && (h.children().removeClass(a.bullets_active_class), t(h.children().get(e)).addClass(a.bullets_active_class))
        }, g.update_active_link = function (e) {
            var i = t('a[data-orbit-link="' + g.slides().eq(e).attr("data-orbit-slide") + '"]');
            i.siblings().removeClass(a.bullets_active_class), i.addClass(a.bullets_active_class)
        }, g.build_markup = function () {
            _.wrap('<div class="' + a.container_class + '"></div>'), d = _.parent(), _.addClass(a.slides_container_class), a.navigation_arrows && (d.append(t('<a href="#"><span></span></a>').addClass(a.prev_class)), d.append(t('<a href="#"><span></span></a>').addClass(a.next_class))), a.timer && (u = t("<div>").addClass(a.timer_container_class), u.append("<span>"), u.append(t("<div>").addClass(a.timer_progress_class)), u.addClass(a.timer_paused_class), d.append(u)), a.slide_number && (c = t("<div>").addClass(a.slide_number_class), c.append("<span></span> " + a.slide_number_text + " <span></span>"), d.append(c)), a.bullets && (h = t("<ol>").addClass(a.bullets_container_class), d.append(h), h.wrap('<div class="orbit-bullets-container"></div>'), g.slides().each(function (e) {
                var i = t("<li>").attr("data-orbit-slide", e);
                h.append(i)
            })), a.stack_on_small && d.addClass(a.stack_on_small_class)
        }, g._goto = function (e, i) {
            if (e === m)return!1;
            "object" == typeof p && p.restart();
            var s = g.slides(), n = "next";
            if (v = !0, m > e && (n = "prev"), e >= s.length) {
                if (!a.circular)return!1;
                e = 0
            } else if (0 > e) {
                if (!a.circular)return!1;
                e = s.length - 1
            }
            var o = t(s.get(m)), r = t(s.get(e));
            o.css("zIndex", 2), o.removeClass(a.active_slide_class), r.css("zIndex", 4).addClass(a.active_slide_class), _.trigger("before-slide-change.fndtn.orbit"), a.before_slide_change(), g.update_active_link(e);
            var l = function () {
                var t = function () {
                    m = e, v = !1, i === !0 && (p = g.create_timer(), p.start()), g.update_slide_number(m), _.trigger("after-slide-change.fndtn.orbit", [
                        {slide_number: m, total_slides: s.length}
                    ]), a.after_slide_change(m, s.length)
                };
                _.height() != r.height() && a.variable_height ? _.animate({height: r.height()}, 250, "linear", t) : t()
            };
            if (1 === s.length)return l(), !1;
            var d = function () {
                "next" === n && f.next(o, r, l), "prev" === n && f.prev(o, r, l)
            };
            r.height() > _.height() && a.variable_height ? _.animate({height: r.height()}, 250, "linear", d) : d()
        }, g.next = function (t) {
            t.stopImmediatePropagation(), t.preventDefault(), g._goto(m + 1)
        }, g.prev = function (t) {
            t.stopImmediatePropagation(), t.preventDefault(), g._goto(m - 1)
        }, g.link_custom = function (e) {
            e.preventDefault();
            var i = t(this).attr("data-orbit-link");
            if ("string" == typeof i && "" != (i = t.trim(i))) {
                var s = d.find("[data-orbit-slide=" + i + "]");
                -1 != s.index() && g._goto(s.index())
            }
        }, g.link_bullet = function () {
            var e = t(this).attr("data-orbit-slide");
            if ("string" == typeof e && "" != (e = t.trim(e)))if (isNaN(parseInt(e))) {
                var i = d.find("[data-orbit-slide=" + e + "]");
                -1 != i.index() && g._goto(i.index() + 1)
            } else g._goto(parseInt(e))
        }, g.timer_callback = function () {
            g._goto(m + 1, !0)
        }, g.compute_dimensions = function () {
            var e = t(g.slides().get(m)), i = e.height();
            a.variable_height || g.slides().each(function () {
                t(this).height() > i && (i = t(this).height())
            }), _.height(i)
        }, g.create_timer = function () {
            var t = new o(d.find("." + a.timer_container_class), a, g.timer_callback);
            return t
        }, g.stop_timer = function () {
            "object" == typeof p && p.stop()
        }, g.toggle_timer = function () {
            var t = d.find("." + a.timer_container_class);
            t.hasClass(a.timer_paused_class) ? ("undefined" == typeof p && (p = g.create_timer()), p.start()) : "object" == typeof p && p.stop()
        }, g.init = function () {
            g.build_markup(), a.timer && (p = g.create_timer(), Foundation.utils.image_loaded(this.slides().children("img"), p.start)), f = new l(a, _), "slide" === a.animation && (f = new r(a, _)), d.on("click", "." + a.next_class, g.next), d.on("click", "." + a.prev_class, g.prev), d.on("click", "[data-orbit-slide]", g.link_bullet), d.on("click", g.toggle_timer), a.swipe && d.on("touchstart.fndtn.orbit",function (t) {
                t.touches || (t = t.originalEvent);
                var e = {start_page_x: t.touches[0].pageX, start_page_y: t.touches[0].pageY, start_time: (new Date).getTime(), delta_x: 0, is_scrolling: s};
                d.data("swipe-transition", e), t.stopPropagation()
            }).on("touchmove.fndtn.orbit",function (t) {
                if (t.touches || (t = t.originalEvent), !(t.touches.length > 1 || t.scale && 1 !== t.scale)) {
                    var e = d.data("swipe-transition");
                    if ("undefined" == typeof e && (e = {}), e.delta_x = t.touches[0].pageX - e.start_page_x, "undefined" == typeof e.is_scrolling && (e.is_scrolling = !!(e.is_scrolling || Math.abs(e.delta_x) < Math.abs(t.touches[0].pageY - e.start_page_y))), !e.is_scrolling && !e.active) {
                        t.preventDefault();
                        var i = e.delta_x < 0 ? m + 1 : m - 1;
                        e.active = !0, g._goto(i)
                    }
                }
            }).on("touchend.fndtn.orbit", function (t) {
                d.data("swipe-transition", {}), t.stopPropagation()
            }), d.on("mouseenter.fndtn.orbit",function () {
                a.timer && a.pause_on_hover && g.stop_timer()
            }).on("mouseleave.fndtn.orbit", function () {
                a.timer && a.resume_on_mouseout && p.start()
            }), t(i).on("click", "[data-orbit-link]", g.link_custom), t(e).on("resize", g.compute_dimensions), Foundation.utils.image_loaded(this.slides().children("img"), g.compute_dimensions), Foundation.utils.image_loaded(this.slides().children("img"), function () {
                d.prev(".preloader").css("display", "none"), g.update_slide_number(0), g.update_active_link(0), _.trigger("ready.fndtn.orbit")
            })
        }, g.init()
    }, o = function (t, e, i) {
        var s, n, a = this, o = e.timer_speed, r = t.find("." + e.timer_progress_class), l = -1;
        this.update_progress = function (t) {
            var e = r.clone();
            e.attr("style", ""), e.css("width", t + "%"), r.replaceWith(e), r = e
        }, this.restart = function () {
            clearTimeout(n), t.addClass(e.timer_paused_class), l = -1, a.update_progress(0)
        }, this.start = function () {
            return t.hasClass(e.timer_paused_class) ? (l = -1 === l ? o : l, t.removeClass(e.timer_paused_class), s = (new Date).getTime(), r.animate({width: "100%"}, l, "linear"), n = setTimeout(function () {
                a.restart(), i()
            }, l), t.trigger("timer-started.fndtn.orbit"), void 0) : !0
        }, this.stop = function () {
            if (t.hasClass(e.timer_paused_class))return!0;
            clearTimeout(n), t.addClass(e.timer_paused_class);
            var i = (new Date).getTime();
            l -= i - s;
            var r = 100 - l / o * 100;
            a.update_progress(r), t.trigger("timer-stopped.fndtn.orbit")
        }
    }, r = function (e) {
        var i = e.animation_speed, s = 1 === t("html[dir=rtl]").length, n = s ? "marginRight" : "marginLeft", a = {};
        a[n] = "0%", this.next = function (t, e, s) {
            t.animate({marginLeft: "-100%"}, i), e.animate(a, i, function () {
                t.css(n, "100%"), s()
            })
        }, this.prev = function (t, e, s) {
            t.animate({marginLeft: "100%"}, i), e.css(n, "-100%"), e.animate(a, i, function () {
                t.css(n, "100%"), s()
            })
        }
    }, l = function (e) {
        {
            var i = e.animation_speed;
            1 === t("html[dir=rtl]").length
        }
        this.next = function (t, e, s) {
            e.css({margin: "0%", opacity: "0.01"}), e.animate({opacity: "1"}, i, "linear", function () {
                t.css("margin", "100%"), s()
            })
        }, this.prev = function (t, e, s) {
            e.css({margin: "0%", opacity: "0.01"}), e.animate({opacity: "1"}, i, "linear", function () {
                t.css("margin", "100%"), s()
            })
        }
    };
    Foundation.libs = Foundation.libs || {}, Foundation.libs.orbit = {name: "orbit", version: "5.1.1", settings: {animation: "slide", timer_speed: 1e4, pause_on_hover: !0, resume_on_mouseout: !1, animation_speed: 500, stack_on_small: !1, navigation_arrows: !0, slide_number: !0, slide_number_text: "of", container_class: "orbit-container", stack_on_small_class: "orbit-stack-on-small", next_class: "orbit-next", prev_class: "orbit-prev", timer_container_class: "orbit-timer", timer_paused_class: "paused", timer_progress_class: "orbit-progress", slides_container_class: "orbit-slides-container", slide_selector: "*", bullets_container_class: "orbit-bullets", bullets_active_class: "active", slide_number_class: "orbit-slide-number", caption_class: "orbit-caption", active_slide_class: "active", orbit_transition_class: "orbit-transitioning", bullets: !0, circular: !0, timer: !0, variable_height: !1, swipe: !0, before_slide_change: n, after_slide_change: n}, init: function (t, e, i) {
        this.bindings(e, i)
    }, events: function (t) {
        var e = new a(this.S(t), this.S(t).data("orbit-init"));
        this.S(t).data(self.name + "-instance", e)
    }, reflow: function () {
        var t = this;
        if (t.S(t.scope).is("[data-orbit]")) {
            var e = t.S(t.scope), i = e.data(t.name + "-instance");
            i.compute_dimensions()
        } else t.S("[data-orbit]", t.scope).each(function (e, i) {
            var s = t.S(i), n = (t.data_options(s), s.data(t.name + "-instance"));
            n.compute_dimensions()
        })
    }}
}(jQuery, this, this.document), function (t, e, i, s) {
    "use strict";
    Foundation.libs.reveal = {name: "reveal", version: "5.1.1", locked: !1, settings: {animation: "fadeAndPop", animation_speed: 250, close_on_background_click: !0, close_on_esc: !0, dismiss_modal_class: "close-reveal-modal", bg_class: "reveal-modal-bg", open: function () {
    }, opened: function () {
    }, close: function () {
    }, closed: function () {
    }, bg: t(".reveal-modal-bg"), css: {open: {opacity: 0, visibility: "visible", display: "block"}, close: {opacity: 1, visibility: "hidden", display: "none"}}}, init: function (e, i, s) {
        t.extend(!0, this.settings, i, s), this.bindings(i, s)
    }, events: function () {
        var t = this, e = t.S;
        return e(this.scope).off(".reveal").on("click.fndtn.reveal", "[" + this.add_namespace("data-reveal-id") + "]", function (i) {
            if (i.preventDefault(), !t.locked) {
                var s = e(this), n = s.data(t.data_attr("reveal-ajax"));
                if (t.locked = !0, "undefined" == typeof n)t.open.call(t, s); else {
                    var a = n === !0 ? s.attr("href") : n;
                    t.open.call(t, s, {url: a})
                }
            }
        }), e(i).on("click.fndtn.reveal", this.close_targets(), function (i) {
            if (i.preventDefault(), !t.locked) {
                var s = e("[" + t.attr_name() + "].open").data(t.attr_name(!0) + "-init"), n = e(i.target)[0] === e("." + s.bg_class)[0];
                if (n && !s.close_on_background_click)return;
                t.locked = !0, t.close.call(t, n ? e("[" + t.attr_name() + "].open") : e(this).closest("[" + t.attr_name() + "]"))
            }
        }), e("[" + t.attr_name() + "]", this.scope).length > 0 ? e(this.scope).on("open.fndtn.reveal", this.settings.open).on("opened.fndtn.reveal", this.settings.opened).on("opened.fndtn.reveal", this.open_video).on("close.fndtn.reveal", this.settings.close).on("closed.fndtn.reveal", this.settings.closed).on("closed.fndtn.reveal", this.close_video) : e(this.scope).on("open.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.open).on("opened.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.opened).on("opened.fndtn.reveal", "[" + t.attr_name() + "]", this.open_video).on("close.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.close).on("closed.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.closed).on("closed.fndtn.reveal", "[" + t.attr_name() + "]", this.close_video), !0
    }, key_up_on: function () {
        var t = this;
        return t.S("body").off("keyup.fndtn.reveal").on("keyup.fndtn.reveal", function (e) {
            var i = t.S("[" + t.attr_name() + "].open"), s = i.data(t.attr_name(!0) + "-init");
            s && 27 === e.which && s.close_on_esc && !t.locked && t.close.call(t, i)
        }), !0
    }, key_up_off: function () {
        return this.S("body").off("keyup.fndtn.reveal"), !0
    }, open: function (e, i) {
        var s = this;
        if (e)if ("undefined" != typeof e.selector)var n = s.S("#" + e.data(s.data_attr("reveal-id"))); else {
            var n = s.S(this.scope);
            i = e
        } else var n = s.S(this.scope);
        var a = n.data(s.attr_name(!0) + "-init");
        if (!n.hasClass("open")) {
            var o = s.S("[" + s.attr_name() + "].open");
            if ("undefined" == typeof n.data("css-top") && n.data("css-top", parseInt(n.css("top"), 10)).data("offset", this.cache_offset(n)), this.key_up_on(n), n.trigger("open"), o.length < 1 && this.toggle_bg(n), "string" == typeof i && (i = {url: i}), "undefined" != typeof i && i.url) {
                var r = "undefined" != typeof i.success ? i.success : null;
                t.extend(i, {success: function (e, i, l) {
                    if (t.isFunction(r) && r(e, i, l), n.html(e), s.S(n).foundation("section", "reflow"), o.length > 0) {
                        var d = o.data(s.attr_name(!0));
                        s.hide(o, d.css.close)
                    }
                    s.show(n, a.css.open)
                }}), t.ajax(i)
            } else {
                if (o.length > 0) {
                    var l = o.data(s.attr_name(!0) + "-init");
                    this.hide(o, l.css.close)
                }
                this.show(n, a.css.open)
            }
        }
    }, close: function (t) {
        var t = t && t.length ? t : this.S(this.scope), e = this.S("[" + this.attr_name() + "].open"), i = t.data(this.attr_name(!0) + "-init");
        e.length > 0 && (this.locked = !0, this.key_up_off(t), t.trigger("close"), this.toggle_bg(t), this.hide(e, i.css.close, i))
    }, close_targets: function () {
        var t = "." + this.settings.dismiss_modal_class;
        return this.settings.close_on_background_click ? t + ", ." + this.settings.bg_class : t
    }, toggle_bg: function (e) {
        e.data(this.attr_name(!0));
        0 === this.S("." + this.settings.bg_class).length && (this.settings.bg = t("<div />", {"class": this.settings.bg_class}).appendTo("body")), this.settings.bg.filter(":visible").length > 0 ? this.hide(this.settings.bg) : this.show(this.settings.bg)
    }, show: function (i, s) {
        if (s) {
            var n = i.data(this.attr_name(!0) + "-init");
            if (0 === i.parent("body").length) {
                var a = i.wrap('<div style="display: none;" />').parent(), o = this.settings.rootElement || "body";
                i.on("closed.fndtn.reveal.wrapped", function () {
                    i.detach().appendTo(a), i.unwrap().unbind("closed.fndtn.reveal.wrapped")
                }), i.detach().appendTo(o)
            }
            if (/pop/i.test(n.animation)) {
                s.top = t(e).scrollTop() - i.data("offset") + "px";
                var r = {top: t(e).scrollTop() + i.data("css-top") + "px", opacity: 1};
                return setTimeout(function () {
                    return i.css(s).animate(r, n.animation_speed, "linear", function () {
                        this.locked = !1, i.trigger("opened")
                    }.bind(this)).addClass("open")
                }.bind(this), n.animation_speed / 2)
            }
            if (/fade/i.test(n.animation)) {
                var r = {opacity: 1};
                return setTimeout(function () {
                    return i.css(s).animate(r, n.animation_speed, "linear", function () {
                        this.locked = !1, i.trigger("opened")
                    }.bind(this)).addClass("open")
                }.bind(this), n.animation_speed / 2)
            }
            return i.css(s).show().css({opacity: 1}).addClass("open").trigger("opened")
        }
        var n = this.settings;
        return/fade/i.test(n.animation) ? i.fadeIn(n.animation_speed / 2) : (this.locked = !1, i.show())
    }, hide: function (i, s) {
        if (s) {
            var n = i.data(this.attr_name(!0) + "-init");
            if (/pop/i.test(n.animation)) {
                var a = {top: -t(e).scrollTop() - i.data("offset") + "px", opacity: 0};
                return setTimeout(function () {
                    return i.animate(a, n.animation_speed, "linear", function () {
                        this.locked = !1, i.css(s).trigger("closed")
                    }.bind(this)).removeClass("open")
                }.bind(this), n.animation_speed / 2)
            }
            if (/fade/i.test(n.animation)) {
                var a = {opacity: 0};
                return setTimeout(function () {
                    return i.animate(a, n.animation_speed, "linear", function () {
                        this.locked = !1, i.css(s).trigger("closed")
                    }.bind(this)).removeClass("open")
                }.bind(this), n.animation_speed / 2)
            }
            return i.hide().css(s).removeClass("open").trigger("closed")
        }
        var n = this.settings;
        return/fade/i.test(n.animation) ? i.fadeOut(n.animation_speed / 2) : i.hide()
    }, close_video: function (e) {
        var i = t(".flex-video", e.target), s = t("iframe", i);
        s.length > 0 && (s.attr("data-src", s[0].src), s.attr("src", "about:blank"), i.hide())
    }, open_video: function (e) {
        var i = t(".flex-video", e.target), n = i.find("iframe");
        if (n.length > 0) {
            var a = n.attr("data-src");
            if ("string" == typeof a)n[0].src = n.attr("data-src"); else {
                var o = n[0].src;
                n[0].src = s, n[0].src = o
            }
            i.show()
        }
    }, data_attr: function (t) {
        return this.namespace.length > 0 ? this.namespace + "-" + t : t
    }, cache_offset: function (t) {
        var e = t.show().height() + parseInt(t.css("top"), 10);
        return t.hide(), e
    }, off: function () {
        t(this.scope).off(".fndtn.reveal")
    }, reflow: function () {
    }}
}(jQuery, this, this.document), function () {
    "use strict";
    Foundation.libs.tab = {name: "tab", version: "5.1.1", settings: {active_class: "active", callback: function () {
    }}, init: function (t, e, i) {
        this.bindings(e, i)
    }, events: function () {
        var t = this, e = this.S;
        e(this.scope).off(".tab").on("click.fndtn.tab", "[" + this.attr_name() + "] > dd > a", function (i) {
            i.preventDefault(), i.stopPropagation();
            var s = e(this).parent(), n = s.closest("[" + t.attr_name() + "]"), a = e("#" + this.href.split("#")[1]), o = s.siblings(), r = n.data(t.attr_name(!0) + "-init");
            e(this).data(t.data_attr("tab-content")) && (a = e("#" + e(this).data(t.data_attr("tab-content")).split("#")[1])), s.addClass(r.active_class).triggerHandler("opened"), o.removeClass(r.active_class), a.siblings().removeClass(r.active_class).end().addClass(r.active_class), r.callback(s), n.triggerHandler("toggled", [s])
        })
    }, data_attr: function (t) {
        return this.namespace.length > 0 ? this.namespace + "-" + t : t
    }, off: function () {
    }, reflow: function () {
    }}
}(jQuery, this, this.document), function (t, e, i) {
    "use strict";
    Foundation.libs.tooltip = {name: "tooltip", version: "5.1.1", settings: {additional_inheritable_classes: [], tooltip_class: ".tooltip", append_to: "body", touch_close_text: "Tap To Close", disable_for_touch: !1, hover_delay: 200, tip_template: function (t, e) {
        return'<span data-selector="' + t + '" class="' + Foundation.libs.tooltip.settings.tooltip_class.substring(1) + '">' + e + '<span class="nub"></span></span>'
    }}, cache: {}, init: function (t, e, i) {
        Foundation.inherit(this, "random_str"), this.bindings(e, i)
    }, events: function () {
        var e = this, s = e.S;
        Modernizr.touch ? s(i).off(".tooltip").on("click.fndtn.tooltip touchstart.fndtn.tooltip touchend.fndtn.tooltip", "[" + this.attr_name() + "]:not(a)",function (i) {
            var n = t.extend({}, e.settings, e.data_options(s(this)));
            n.disable_for_touch || (i.preventDefault(), s(n.tooltip_class).hide(), e.showOrCreateTip(s(this)))
        }).on("click.fndtn.tooltip touchstart.fndtn.tooltip touchend.fndtn.tooltip", this.settings.tooltip_class, function (t) {
            t.preventDefault(), s(this).fadeOut(150)
        }) : s(i).off(".tooltip").on("mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip", "[" + this.attr_name() + "]", function (t) {
            var i = s(this);
            /enter|over/i.test(t.type) ? this.timer = setTimeout(function () {
                e.showOrCreateTip(i)
            }.bind(this), e.settings.hover_delay) : ("mouseout" === t.type || "mouseleave" === t.type) && (clearTimeout(this.timer), e.hide(i))
        })
    }, showOrCreateTip: function (t) {
        var e = this.getTip(t);
        return e && e.length > 0 ? this.show(t) : this.create(t)
    }, getTip: function (t) {
        var e = this.selector(t), i = null;
        return e && (i = this.S('span[data-selector="' + e + '"]' + this.settings.tooltip_class)), "object" == typeof i ? i : !1
    }, selector: function (t) {
        var e = t.attr("id"), i = t.attr(this.attr_name()) || t.attr("data-selector");
        return(e && e.length < 1 || !e) && "string" != typeof i && (i = "tooltip" + this.random_str(6), t.attr("data-selector", i)), e && e.length > 0 ? e : i
    }, create: function (e) {
        var i = t(this.settings.tip_template(this.selector(e), t("<div></div>").html(e.attr("title")).html())), s = this.inheritable_classes(e);
        i.addClass(s).appendTo(this.settings.append_to), Modernizr.touch && i.append('<span class="tap-to-close">' + this.settings.touch_close_text + "</span>"), e.removeAttr("title").attr("title", ""), this.show(e)
    }, reposition: function (t, e, i) {
        var s, n, a, o, r;
        if (e.css("visibility", "hidden").show(), s = t.data("width"), n = e.children(".nub"), a = n.outerHeight(), o = n.outerHeight(), this.small() ? e.css({width: "100%"}) : e.css({width: s ? s : "auto"}), r = function (t, e, i, s, n) {
            return t.css({top: e ? e : "auto", bottom: s ? s : "auto", left: n ? n : "auto", right: i ? i : "auto"}).end()
        }, r(e, t.offset().top + t.outerHeight() + 10, "auto", "auto", t.offset().left), this.small())r(e, t.offset().top + t.outerHeight() + 10, "auto", "auto", 12.5, this.S(this.scope).width()), e.addClass("tip-override"), r(n, -a, "auto", "auto", t.offset().left + 10); else {
            var l = t.offset().left;
            Foundation.rtl && (l = t.offset().left + t.outerWidth() - e.outerWidth()), r(e, t.offset().top + t.outerHeight() + 10, "auto", "auto", l), e.removeClass("tip-override"), n.removeAttr("style"), i && i.indexOf("tip-top") > -1 ? r(e, t.offset().top - e.outerHeight() - 10, "auto", "auto", l).removeClass("tip-override") : i && i.indexOf("tip-left") > -1 ? r(e, t.offset().top + t.outerHeight() / 2 - e.outerHeight() / 2, "auto", "auto", t.offset().left - e.outerWidth() - a).removeClass("tip-override") : i && i.indexOf("tip-right") > -1 && r(e, t.offset().top + t.outerHeight() / 2 - e.outerHeight() / 2, "auto", "auto", t.offset().left + t.outerWidth() + a).removeClass("tip-override")
        }
        e.css("visibility", "visible").hide()
    }, small: function () {
        return matchMedia(Foundation.media_queries.small).matches
    }, inheritable_classes: function (e) {
        var i = ["tip-top", "tip-left", "tip-bottom", "tip-right", "radius", "round"].concat(this.settings.additional_inheritable_classes), s = e.attr("class"), n = s ? t.map(s.split(" "),function (e) {
            return-1 !== t.inArray(e, i) ? e : void 0
        }).join(" ") : "";
        return t.trim(n)
    }, show: function (t) {
        var e = this.getTip(t);
        return this.reposition(t, e, t.attr("class")), e.fadeIn(150)
    }, hide: function (t) {
        var e = this.getTip(t);
        return e.fadeOut(150)
    }, reload: function () {
        var e = t(this);
        return e.data("fndtn-tooltips") ? e.foundationTooltips("destroy").foundationTooltips("init") : e.foundationTooltips("init")
    }, off: function () {
        this.S(this.scope).off(".fndtn.tooltip"), this.S(this.settings.tooltip_class).each(function (e) {
            t("[" + this.attr_name() + "]").get(e).attr("title", t(this).text())
        }).remove()
    }, reflow: function () {
    }}
}(jQuery, this, this.document), function (t, e, i) {
    "use strict";
    Foundation.libs.topbar = {name: "topbar", version: "5.1.1", settings: {index: 0, sticky_class: "sticky", custom_back_text: !0, back_text: "Back", is_hover: !0, mobile_show_parent_link: !1, scrolltop: !0}, init: function (e, i, s) {
        Foundation.inherit(this, "add_custom_rule register_media throttle");
        var n = this;
        n.register_media("topbar", "foundation-mq-topbar"), this.bindings(i, s), n.S("[" + this.attr_name() + "]", this.scope).each(function () {
            {
                var e = n.S(this), i = e.data(n.attr_name(!0) + "-init");
                n.S("section", this), t("> ul", this).first()
            }
            e.data("index", 0);
            var s = e.parent();
            s.hasClass("fixed") || s.hasClass(i.sticky_class) ? (n.settings.sticky_class = i.sticky_class, n.settings.sticky_topbar = e, e.data("height", s.outerHeight()), e.data("stickyoffset", s.offset().top)) : e.data("height", e.outerHeight()), i.assembled || n.assemble(e), i.is_hover ? n.S(".has-dropdown", e).addClass("not-click") : n.S(".has-dropdown", e).removeClass("not-click"), n.add_custom_rule(".f-topbar-fixed { padding-top: " + e.data("height") + "px }"), s.hasClass("fixed") && n.S("body").addClass("f-topbar-fixed")
        })
    }, toggle: function (i) {
        var s = this;
        if (i)var n = s.S(i).closest("[" + this.attr_name() + "]"); else var n = s.S("[" + this.attr_name() + "]");
        var a = n.data(this.attr_name(!0) + "-init"), o = s.S("section, .section", n);
        s.breakpoint() && (s.rtl ? (o.css({right: "0%"}), t(">.name", o).css({right: "100%"})) : (o.css({left: "0%"}), t(">.name", o).css({left: "100%"})), s.S("li.moved", o).removeClass("moved"), n.data("index", 0), n.toggleClass("expanded").css("height", "")), a.scrolltop ? n.hasClass("expanded") ? n.parent().hasClass("fixed") && (a.scrolltop ? (n.parent().removeClass("fixed"), n.addClass("fixed"), s.S("body").removeClass("f-topbar-fixed"), e.scrollTo(0, 0)) : n.parent().removeClass("expanded")) : n.hasClass("fixed") && (n.parent().addClass("fixed"), n.removeClass("fixed"), s.S("body").addClass("f-topbar-fixed")) : (n.parent().hasClass(s.settings.sticky_class) && n.parent().addClass("fixed"), n.parent().hasClass("fixed") && (n.hasClass("expanded") ? (n.addClass("fixed"), n.parent().addClass("expanded"), s.S("body").addClass("f-topbar-fixed")) : (n.removeClass("fixed"), n.parent().removeClass("expanded"), s.update_sticky_positioning())))
    }, timer: null, events: function () {
        var t = this, i = this.S;
        i(this.scope).off(".topbar").on("click.fndtn.topbar", "[" + this.attr_name() + "] .toggle-topbar",function (e) {
            e.preventDefault(), t.toggle(this)
        }).on("click.fndtn.topbar", "[" + this.attr_name() + "] li.has-dropdown",function (e) {
            var s = i(this), n = i(e.target), a = s.closest("[" + t.attr_name() + "]"), o = a.data(t.attr_name(!0) + "-init");
            return n.data("revealId") ? (t.toggle(), void 0) : (t.breakpoint() || (!o.is_hover || Modernizr.touch) && (e.stopImmediatePropagation(), s.hasClass("hover") ? (s.removeClass("hover").find("li").removeClass("hover"), s.parents("li.hover").removeClass("hover")) : (s.addClass("hover"), "A" === n[0].nodeName && n.parent().hasClass("has-dropdown") && e.preventDefault())), void 0)
        }).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown>a", function (e) {
            if (t.breakpoint()) {
                e.preventDefault();
                var s = i(this), n = s.closest("[" + t.attr_name() + "]"), a = n.find("section, .section"), o = (s.next(".dropdown").outerHeight(), s.closest("li"));
                n.data("index", n.data("index") + 1), o.addClass("moved"), t.rtl ? (a.css({right: -(100 * n.data("index")) + "%"}), a.find(">.name").css({right: 100 * n.data("index") + "%"})) : (a.css({left: -(100 * n.data("index")) + "%"}), a.find(">.name").css({left: 100 * n.data("index") + "%"})), n.css("height", s.siblings("ul").outerHeight(!0) + n.data("height"))
            }
        }), i(e).off(".topbar").on("resize.fndtn.topbar", t.throttle(function () {
            t.resize.call(t)
        }, 50)).trigger("resize"), i("body").off(".topbar").on("click.fndtn.topbar touchstart.fndtn.topbar", function (e) {
            var s = i(e.target).closest("li").closest("li.hover");
            s.length > 0 || i("[" + t.attr_name() + "] li").removeClass("hover")
        }), i(this.scope).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown .back", function (e) {
            e.preventDefault();
            var s = i(this), n = s.closest("[" + t.attr_name() + "]"), a = n.find("section, .section"), o = (n.data(t.attr_name(!0) + "-init"), s.closest("li.moved")), r = o.parent();
            n.data("index", n.data("index") - 1), t.rtl ? (a.css({right: -(100 * n.data("index")) + "%"}), a.find(">.name").css({right: 100 * n.data("index") + "%"})) : (a.css({left: -(100 * n.data("index")) + "%"}), a.find(">.name").css({left: 100 * n.data("index") + "%"})), 0 === n.data("index") ? n.css("height", "") : n.css("height", r.outerHeight(!0) + n.data("height")), setTimeout(function () {
                o.removeClass("moved")
            }, 300)
        })
    }, resize: function () {
        var t = this;
        t.S("[" + this.attr_name() + "]").each(function () {
            var e, s = t.S(this), n = (s.data(t.attr_name(!0) + "-init"), s.parent("." + t.settings.sticky_class));
            if (!t.breakpoint()) {
                var a = s.hasClass("expanded");
                s.css("height", "").removeClass("expanded").find("li").removeClass("hover"), a && t.toggle(s)
            }
            n.length > 0 && (n.hasClass("fixed") ? (n.removeClass("fixed"), e = n.offset().top, t.S(i.body).hasClass("f-topbar-fixed") && (e -= s.data("height")), s.data("stickyoffset", e), n.addClass("fixed")) : (e = n.offset().top, s.data("stickyoffset", e)))
        })
    }, breakpoint: function () {
        return!matchMedia(Foundation.media_queries.topbar).matches
    }, assemble: function (e) {
        {
            var i = this, s = e.data(this.attr_name(!0) + "-init"), n = i.S("section", e);
            t("> ul", e).first()
        }
        n.detach(), i.S(".has-dropdown>a", n).each(function () {
            var e = i.S(this), n = e.siblings(".dropdown"), a = e.attr("href");
            if (!n.find(".title.back").length) {
                if (s.mobile_show_parent_link && a && a.length > 1)var o = t('<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li><li><a class="parent-link js-generated" href="' + a + '">' + e.text() + "</a></li>"); else var o = t('<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li>');
                1 == s.custom_back_text ? t("h5>a", o).html(s.back_text) : t("h5>a", o).html("&laquo; " + e.html()), n.prepend(o)
            }
        }), n.appendTo(e), this.sticky(), this.assembled(e)
    }, assembled: function (e) {
        e.data(this.attr_name(!0), t.extend({}, e.data(this.attr_name(!0)), {assembled: !0}))
    }, height: function (e) {
        var i = 0, s = this;
        return t("> li", e).each(function () {
            i += s.S(this).outerHeight(!0)
        }), i
    }, sticky: function () {
        var t = (this.S(e), this);
        this.S(e).on("scroll", function () {
            t.update_sticky_positioning()
        })
    }, update_sticky_positioning: function () {
        var t = "." + this.settings.sticky_class, i = this.S(e), s = this;
        if (s.S(t).length > 0) {
            var n = this.settings.sticky_topbar.data("stickyoffset");
            s.S(t).hasClass("expanded") || (i.scrollTop() > n ? s.S(t).hasClass("fixed") || (s.S(t).addClass("fixed"), s.S("body").addClass("f-topbar-fixed")) : i.scrollTop() <= n && s.S(t).hasClass("fixed") && (s.S(t).removeClass("fixed"), s.S("body").removeClass("f-topbar-fixed")))
        }
    }, off: function () {
        this.S(this.scope).off(".fndtn.topbar"), this.S(e).off(".fndtn.topbar")
    }, reflow: function () {
    }}
}(jQuery, this, this.document), function (t, e) {
    "use strict";
    Foundation.libs.equalizer = {name: "equalizer", version: "5.1.1", settings: {use_tallest: !0, before_height_change: t.noop, after_height_change: t.noop}, init: function (t, e, i) {
        this.bindings(e, i), this.reflow()
    }, events: function () {
        this.S(e).off(".equalizer").on("resize.fndtn.equalizer", function () {
            this.reflow()
        }.bind(this))
    }, equalize: function (e) {
        var i = !1, s = e.find("[" + this.attr_name() + "-watch]"), n = s.first().offset().top, a = e.data(this.attr_name(!0) + "-init");
        if (0 !== s.length && (a.before_height_change(), e.trigger("before-height-change"), s.height("inherit"), s.each(function () {
            var e = t(this);
            e.offset().top !== n && (i = !0)
        }), !i)) {
            var o = s.map(function () {
                return t(this).outerHeight()
            });
            if (a.use_tallest) {
                var r = Math.max.apply(null, o);
                s.height(r)
            } else {
                var l = Math.min.apply(null, o);
                s.height(l)
            }
            a.after_height_change(), e.trigger("after-height-change")
        }
    }, reflow: function () {
        var e = this;
        this.S("[" + this.attr_name() + "]", this.scope).each(function () {
            e.equalize(t(this))
        })
    }}
}(jQuery, this, this.document);