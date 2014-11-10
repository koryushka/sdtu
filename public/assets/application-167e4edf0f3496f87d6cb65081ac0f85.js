function validateFiles(t) {
    var e, i = "This file exceeds the maximum allowed file size (5 MB)", n = "Only image file with extension: .jpg, .jpeg, .ico, .gif or .png is allowed", s = ["jpg", "jpeg", "gif", "png", "ico", "JPG", "JPEG", "GIF", "PNG", "ICO"], a = $(t).data("max-file-size"), o = !1, r = !1;
    $.each(t.files, function () {
        this.size && a && this.size > parseInt(a) && (o = !0), e = this.name.split(".").pop(), -1 == $.inArray(e, s) && (r = !0)
    }), o && (window.alert(i), $(t).val("")), r && (window.alert(n), $(t).val(""))
}
function dynamicBG() {
    var t = new Date, e = t.getMinutes();
    15 > e ? $("#container").addClass("bodystyle1") : e >= 15 && 30 > e ? $("#container").addClass("bodystyle2") : e >= 30 && 45 > e ? $("#container").addClass("bodystyle3") : e >= 45 && 59 >= e && $("#container").addClass("bodystyle4")
}
!function (t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document)throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function (t, e) {
    function i(t) {
        var e = t.length, i = ae.type(t);
        return"function" === i || ae.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    function n(t, e, i) {
        if (ae.isFunction(e))return ae.grep(t, function (t, n) {
            return!!e.call(t, n, t) !== i
        });
        if (e.nodeType)return ae.grep(t, function (t) {
            return t === e !== i
        });
        if ("string" == typeof e) {
            if (pe.test(e))return ae.filter(e, t, i);
            e = ae.filter(e, t)
        }
        return ae.grep(t, function (t) {
            return ae.inArray(t, e) >= 0 !== i
        })
    }

    function s(t, e) {
        do t = t[e]; while (t && 1 !== t.nodeType);
        return t
    }

    function a(t) {
        var e = xe[t] = {};
        return ae.each(t.match(_e) || [], function (t, i) {
            e[i] = !0
        }), e
    }

    function o() {
        me.addEventListener ? (me.removeEventListener("DOMContentLoaded", r, !1), t.removeEventListener("load", r, !1)) : (me.detachEvent("onreadystatechange", r), t.detachEvent("onload", r))
    }

    function r() {
        (me.addEventListener || "load" === event.type || "complete" === me.readyState) && (o(), ae.ready())
    }

    function l(t, e, i) {
        if (void 0 === i && 1 === t.nodeType) {
            var n = "data-" + e.replace(Se, "-$1").toLowerCase();
            if (i = t.getAttribute(n), "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : je.test(i) ? ae.parseJSON(i) : i
                } catch (s) {
                }
                ae.data(t, e, i)
            } else i = void 0
        }
        return i
    }

    function c(t) {
        var e;
        for (e in t)if (("data" !== e || !ae.isEmptyObject(t[e])) && "toJSON" !== e)return!1;
        return!0
    }

    function d(t, e, i, n) {
        if (ae.acceptData(t)) {
            var s, a, o = ae.expando, r = t.nodeType, l = r ? ae.cache : t, c = r ? t[o] : t[o] && o;
            if (c && l[c] && (n || l[c].data) || void 0 !== i || "string" != typeof e)return c || (c = r ? t[o] = X.pop() || ae.guid++ : o), l[c] || (l[c] = r ? {} : {toJSON: ae.noop}), ("object" == typeof e || "function" == typeof e) && (n ? l[c] = ae.extend(l[c], e) : l[c].data = ae.extend(l[c].data, e)), a = l[c], n || (a.data || (a.data = {}), a = a.data), void 0 !== i && (a[ae.camelCase(e)] = i), "string" == typeof e ? (s = a[e], null == s && (s = a[ae.camelCase(e)])) : s = a, s
        }
    }

    function u(t, e, i) {
        if (ae.acceptData(t)) {
            var n, s, a = t.nodeType, o = a ? ae.cache : t, r = a ? t[ae.expando] : ae.expando;
            if (o[r]) {
                if (e && (n = i ? o[r] : o[r].data)) {
                    ae.isArray(e) ? e = e.concat(ae.map(e, ae.camelCase)) : e in n ? e = [e] : (e = ae.camelCase(e), e = e in n ? [e] : e.split(" ")), s = e.length;
                    for (; s--;)delete n[e[s]];
                    if (i ? !c(n) : !ae.isEmptyObject(n))return
                }
                (i || (delete o[r].data, c(o[r]))) && (a ? ae.cleanData([t], !0) : ne.deleteExpando || o != o.window ? delete o[r] : o[r] = null)
            }
        }
    }

    function h() {
        return!0
    }

    function p() {
        return!1
    }

    function f() {
        try {
            return me.activeElement
        } catch (t) {
        }
    }

    function m(t) {
        var e = Oe.split("|"), i = t.createDocumentFragment();
        if (i.createElement)for (; e.length;)i.createElement(e.pop());
        return i
    }

    function g(t, e) {
        var i, n, s = 0, a = typeof t.getElementsByTagName !== Ce ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== Ce ? t.querySelectorAll(e || "*") : void 0;
        if (!a)for (a = [], i = t.childNodes || t; null != (n = i[s]); s++)!e || ae.nodeName(n, e) ? a.push(n) : ae.merge(a, g(n, e));
        return void 0 === e || e && ae.nodeName(t, e) ? ae.merge([t], a) : a
    }

    function v(t) {
        Ae.test(t.type) && (t.defaultChecked = t.checked)
    }

    function y(t, e) {
        return ae.nodeName(t, "table") && ae.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function b(t) {
        return t.type = (null !== ae.find.attr(t, "type")) + "/" + t.type, t
    }

    function _(t) {
        var e = Xe.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function x(t, e) {
        for (var i, n = 0; null != (i = t[n]); n++)ae._data(i, "globalEval", !e || ae._data(e[n], "globalEval"))
    }

    function w(t, e) {
        if (1 === e.nodeType && ae.hasData(t)) {
            var i, n, s, a = ae._data(t), o = ae._data(e, a), r = a.events;
            if (r) {
                delete o.handle, o.events = {};
                for (i in r)for (n = 0, s = r[i].length; s > n; n++)ae.event.add(e, i, r[i][n])
            }
            o.data && (o.data = ae.extend({}, o.data))
        }
    }

    function k(t, e) {
        var i, n, s;
        if (1 === e.nodeType) {
            if (i = e.nodeName.toLowerCase(), !ne.noCloneEvent && e[ae.expando]) {
                s = ae._data(e);
                for (n in s.events)ae.removeEvent(e, n, s.handle);
                e.removeAttribute(ae.expando)
            }
            "script" === i && e.text !== t.text ? (b(e).text = t.text, _(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML), ne.html5Clone && t.innerHTML && !ae.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && Ae.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
        }
    }

    function C(e, i) {
        var n = ae(i.createElement(e)).appendTo(i.body), s = t.getDefaultComputedStyle ? t.getDefaultComputedStyle(n[0]).display : ae.css(n[0], "display");
        return n.detach(), s
    }

    function j(t) {
        var e = me, i = ti[t];
        return i || (i = C(t, e), "none" !== i && i || (Ye = (Ye || ae("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Ye[0].contentWindow || Ye[0].contentDocument).document, e.write(), e.close(), i = C(t, e), Ye.detach()), ti[t] = i), i
    }

    function S(t, e) {
        return{get: function () {
            var i = t();
            if (null != i)return i ? (delete this.get, void 0) : (this.get = e).apply(this, arguments)
        }}
    }

    function T(t, e) {
        if (e in t)return e;
        for (var i = e.charAt(0).toUpperCase() + e.slice(1), n = e, s = pi.length; s--;)if (e = pi[s] + i, e in t)return e;
        return n
    }

    function E(t, e) {
        for (var i, n, s, a = [], o = 0, r = t.length; r > o; o++)n = t[o], n.style && (a[o] = ae._data(n, "olddisplay"), i = n.style.display, e ? (a[o] || "none" !== i || (n.style.display = ""), "" === n.style.display && Pe(n) && (a[o] = ae._data(n, "olddisplay", j(n.nodeName)))) : a[o] || (s = Pe(n), (i && "none" !== i || !s) && ae._data(n, "olddisplay", s ? i : ae.css(n, "display"))));
        for (o = 0; r > o; o++)n = t[o], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? a[o] || "" : "none"));
        return t
    }

    function P(t, e, i) {
        var n = ci.exec(e);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
    }

    function F(t, e, i, n, s) {
        for (var a = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, o = 0; 4 > a; a += 2)"margin" === i && (o += ae.css(t, i + Ee[a], !0, s)), n ? ("content" === i && (o -= ae.css(t, "padding" + Ee[a], !0, s)), "margin" !== i && (o -= ae.css(t, "border" + Ee[a] + "Width", !0, s))) : (o += ae.css(t, "padding" + Ee[a], !0, s), "padding" !== i && (o += ae.css(t, "border" + Ee[a] + "Width", !0, s)));
        return o
    }

    function A(t, e, i) {
        var n = !0, s = "width" === e ? t.offsetWidth : t.offsetHeight, a = ei(t), o = ne.boxSizing() && "border-box" === ae.css(t, "boxSizing", !1, a);
        if (0 >= s || null == s) {
            if (s = ii(t, e, a), (0 > s || null == s) && (s = t.style[e]), si.test(s))return s;
            n = o && (ne.boxSizingReliable() || s === t.style[e]), s = parseFloat(s) || 0
        }
        return s + F(t, e, i || (o ? "border" : "content"), n, a) + "px"
    }

    function q(t, e, i, n, s) {
        return new q.prototype.init(t, e, i, n, s)
    }

    function N() {
        return setTimeout(function () {
            fi = void 0
        }), fi = ae.now()
    }

    function L(t, e) {
        var i, n = {height: t}, s = 0;
        for (e = e ? 1 : 0; 4 > s; s += 2 - e)i = Ee[s], n["margin" + i] = n["padding" + i] = t;
        return e && (n.opacity = n.width = t), n
    }

    function D(t, e, i) {
        for (var n, s = (_i[e] || []).concat(_i["*"]), a = 0, o = s.length; o > a; a++)if (n = s[a].call(i, e, t))return n
    }

    function H(t, e, i) {
        var n, s, a, o, r, l, c, d, u = this, h = {}, p = t.style, f = t.nodeType && Pe(t), m = ae._data(t, "fxshow");
        i.queue || (r = ae._queueHooks(t, "fx"), null == r.unqueued && (r.unqueued = 0, l = r.empty.fire, r.empty.fire = function () {
            r.unqueued || l()
        }), r.unqueued++, u.always(function () {
            u.always(function () {
                r.unqueued--, ae.queue(t, "fx").length || r.empty.fire()
            })
        })), 1 === t.nodeType && ("height"in e || "width"in e) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], c = ae.css(t, "display"), d = j(t.nodeName), "none" === c && (c = d), "inline" === c && "none" === ae.css(t, "float") && (ne.inlineBlockNeedsLayout && "inline" !== d ? p.zoom = 1 : p.display = "inline-block")), i.overflow && (p.overflow = "hidden", ne.shrinkWrapBlocks() || u.always(function () {
            p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
        }));
        for (n in e)if (s = e[n], gi.exec(s)) {
            if (delete e[n], a = a || "toggle" === s, s === (f ? "hide" : "show")) {
                if ("show" !== s || !m || void 0 === m[n])continue;
                f = !0
            }
            h[n] = m && m[n] || ae.style(t, n)
        }
        if (!ae.isEmptyObject(h)) {
            m ? "hidden"in m && (f = m.hidden) : m = ae._data(t, "fxshow", {}), a && (m.hidden = !f), f ? ae(t).show() : u.done(function () {
                ae(t).hide()
            }), u.done(function () {
                var e;
                ae._removeData(t, "fxshow");
                for (e in h)ae.style(t, e, h[e])
            });
            for (n in h)o = D(f ? m[n] : 0, n, u), n in m || (m[n] = o.start, f && (o.end = o.start, o.start = "width" === n || "height" === n ? 1 : 0))
        }
    }

    function O(t, e) {
        var i, n, s, a, o;
        for (i in t)if (n = ae.camelCase(i), s = e[n], a = t[i], ae.isArray(a) && (s = a[1], a = t[i] = a[0]), i !== n && (t[n] = a, delete t[i]), o = ae.cssHooks[n], o && "expand"in o) {
            a = o.expand(a), delete t[n];
            for (i in a)i in t || (t[i] = a[i], e[i] = s)
        } else e[n] = s
    }

    function M(t, e, i) {
        var n, s, a = 0, o = bi.length, r = ae.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (s)return!1;
            for (var e = fi || N(), i = Math.max(0, c.startTime + c.duration - e), n = i / c.duration || 0, a = 1 - n, o = 0, l = c.tweens.length; l > o; o++)c.tweens[o].run(a);
            return r.notifyWith(t, [c, a, i]), 1 > a && l ? i : (r.resolveWith(t, [c]), !1)
        }, c = r.promise({elem: t, props: ae.extend({}, e), opts: ae.extend(!0, {specialEasing: {}}, i), originalProperties: e, originalOptions: i, startTime: fi || N(), duration: i.duration, tweens: [], createTween: function (e, i) {
            var n = ae.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
            return c.tweens.push(n), n
        }, stop: function (e) {
            var i = 0, n = e ? c.tweens.length : 0;
            if (s)return this;
            for (s = !0; n > i; i++)c.tweens[i].run(1);
            return e ? r.resolveWith(t, [c, e]) : r.rejectWith(t, [c, e]), this
        }}), d = c.props;
        for (O(d, c.opts.specialEasing); o > a; a++)if (n = bi[a].call(c, t, d, c.opts))return n;
        return ae.map(d, D, c), ae.isFunction(c.opts.start) && c.opts.start.call(t, c), ae.fx.timer(ae.extend(l, {elem: t, anim: c, queue: c.opts.queue})), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function $(t) {
        return function (e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, s = 0, a = e.toLowerCase().match(_e) || [];
            if (ae.isFunction(i))for (; n = a[s++];)"+" === n.charAt(0) ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }

    function R(t, e, i, n) {
        function s(r) {
            var l;
            return a[r] = !0, ae.each(t[r] || [], function (t, r) {
                var c = r(e, i, n);
                return"string" != typeof c || o || a[c] ? o ? !(l = c) : void 0 : (e.dataTypes.unshift(c), s(c), !1)
            }), l
        }

        var a = {}, o = t === Bi;
        return s(e.dataTypes[0]) || !a["*"] && s("*")
    }

    function W(t, e) {
        var i, n, s = ae.ajaxSettings.flatOptions || {};
        for (n in e)void 0 !== e[n] && ((s[n] ? t : i || (i = {}))[n] = e[n]);
        return i && ae.extend(!0, t, i), t
    }

    function I(t, e, i) {
        for (var n, s, a, o, r = t.contents, l = t.dataTypes; "*" === l[0];)l.shift(), void 0 === s && (s = t.mimeType || e.getResponseHeader("Content-Type"));
        if (s)for (o in r)if (r[o] && r[o].test(s)) {
            l.unshift(o);
            break
        }
        if (l[0]in i)a = l[0]; else {
            for (o in i) {
                if (!l[0] || t.converters[o + " " + l[0]]) {
                    a = o;
                    break
                }
                n || (n = o)
            }
            a = a || n
        }
        return a ? (a !== l[0] && l.unshift(a), i[a]) : void 0
    }

    function z(t, e, i, n) {
        var s, a, o, r, l, c = {}, d = t.dataTypes.slice();
        if (d[1])for (o in t.converters)c[o.toLowerCase()] = t.converters[o];
        for (a = d.shift(); a;)if (t.responseFields[a] && (i[t.responseFields[a]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = a, a = d.shift())if ("*" === a)a = l; else if ("*" !== l && l !== a) {
            if (o = c[l + " " + a] || c["* " + a], !o)for (s in c)if (r = s.split(" "), r[1] === a && (o = c[l + " " + r[0]] || c["* " + r[0]])) {
                o === !0 ? o = c[s] : c[s] !== !0 && (a = r[0], d.unshift(r[1]));
                break
            }
            if (o !== !0)if (o && t["throws"])e = o(e); else try {
                e = o(e)
            } catch (u) {
                return{state: "parsererror", error: o ? u : "No conversion from " + l + " to " + a}
            }
        }
        return{state: "success", data: e}
    }

    function B(t, e, i, n) {
        var s;
        if (ae.isArray(e))ae.each(e, function (e, s) {
            i || Xi.test(t) ? n(t, s) : B(t + "[" + ("object" == typeof s ? e : "") + "]", s, i, n)
        }); else if (i || "object" !== ae.type(e))n(t, e); else for (s in e)B(t + "[" + s + "]", e[s], i, n)
    }

    function V() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {
        }
    }

    function U() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {
        }
    }

    function Z(t) {
        return ae.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
    }

    var X = [], Q = X.slice, K = X.concat, G = X.push, J = X.indexOf, Y = {}, te = Y.toString, ee = Y.hasOwnProperty, ie = "".trim, ne = {}, se = "1.11.0", ae = function (t, e) {
        return new ae.fn.init(t, e)
    }, oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, re = /^-ms-/, le = /-([\da-z])/gi, ce = function (t, e) {
        return e.toUpperCase()
    };
    ae.fn = ae.prototype = {jquery: se, constructor: ae, selector: "", length: 0, toArray: function () {
        return Q.call(this)
    }, get: function (t) {
        return null != t ? 0 > t ? this[t + this.length] : this[t] : Q.call(this)
    }, pushStack: function (t) {
        var e = ae.merge(this.constructor(), t);
        return e.prevObject = this, e.context = this.context, e
    }, each: function (t, e) {
        return ae.each(this, t, e)
    }, map: function (t) {
        return this.pushStack(ae.map(this, function (e, i) {
            return t.call(e, i, e)
        }))
    }, slice: function () {
        return this.pushStack(Q.apply(this, arguments))
    }, first: function () {
        return this.eq(0)
    }, last: function () {
        return this.eq(-1)
    }, eq: function (t) {
        var e = this.length, i = +t + (0 > t ? e : 0);
        return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
    }, end: function () {
        return this.prevObject || this.constructor(null)
    }, push: G, sort: X.sort, splice: X.splice}, ae.extend = ae.fn.extend = function () {
        var t, e, i, n, s, a, o = arguments[0] || {}, r = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof o && (c = o, o = arguments[r] || {}, r++), "object" == typeof o || ae.isFunction(o) || (o = {}), r === l && (o = this, r--); l > r; r++)if (null != (s = arguments[r]))for (n in s)t = o[n], i = s[n], o !== i && (c && i && (ae.isPlainObject(i) || (e = ae.isArray(i))) ? (e ? (e = !1, a = t && ae.isArray(t) ? t : []) : a = t && ae.isPlainObject(t) ? t : {}, o[n] = ae.extend(c, a, i)) : void 0 !== i && (o[n] = i));
        return o
    }, ae.extend({expando: "jQuery" + (se + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
        throw new Error(t)
    }, noop: function () {
    }, isFunction: function (t) {
        return"function" === ae.type(t)
    }, isArray: Array.isArray || function (t) {
        return"array" === ae.type(t)
    }, isWindow: function (t) {
        return null != t && t == t.window
    }, isNumeric: function (t) {
        return t - parseFloat(t) >= 0
    }, isEmptyObject: function (t) {
        var e;
        for (e in t)return!1;
        return!0
    }, isPlainObject: function (t) {
        var e;
        if (!t || "object" !== ae.type(t) || t.nodeType || ae.isWindow(t))return!1;
        try {
            if (t.constructor && !ee.call(t, "constructor") && !ee.call(t.constructor.prototype, "isPrototypeOf"))return!1
        } catch (i) {
            return!1
        }
        if (ne.ownLast)for (e in t)return ee.call(t, e);
        for (e in t);
        return void 0 === e || ee.call(t, e)
    }, type: function (t) {
        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? Y[te.call(t)] || "object" : typeof t
    }, globalEval: function (e) {
        e && ae.trim(e) && (t.execScript || function (e) {
            t.eval.call(t, e)
        })(e)
    }, camelCase: function (t) {
        return t.replace(re, "ms-").replace(le, ce)
    }, nodeName: function (t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    }, each: function (t, e, n) {
        var s, a = 0, o = t.length, r = i(t);
        if (n) {
            if (r)for (; o > a && (s = e.apply(t[a], n), s !== !1); a++); else for (a in t)if (s = e.apply(t[a], n), s === !1)break
        } else if (r)for (; o > a && (s = e.call(t[a], a, t[a]), s !== !1); a++); else for (a in t)if (s = e.call(t[a], a, t[a]), s === !1)break;
        return t
    }, trim: ie && !ie.call("﻿ ") ? function (t) {
        return null == t ? "" : ie.call(t)
    } : function (t) {
        return null == t ? "" : (t + "").replace(oe, "")
    }, makeArray: function (t, e) {
        var n = e || [];
        return null != t && (i(Object(t)) ? ae.merge(n, "string" == typeof t ? [t] : t) : G.call(n, t)), n
    }, inArray: function (t, e, i) {
        var n;
        if (e) {
            if (J)return J.call(e, t, i);
            for (n = e.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++)if (i in e && e[i] === t)return i
        }
        return-1
    }, merge: function (t, e) {
        for (var i = +e.length, n = 0, s = t.length; i > n;)t[s++] = e[n++];
        if (i !== i)for (; void 0 !== e[n];)t[s++] = e[n++];
        return t.length = s, t
    }, grep: function (t, e, i) {
        for (var n, s = [], a = 0, o = t.length, r = !i; o > a; a++)n = !e(t[a], a), n !== r && s.push(t[a]);
        return s
    }, map: function (t, e, n) {
        var s, a = 0, o = t.length, r = i(t), l = [];
        if (r)for (; o > a; a++)s = e(t[a], a, n), null != s && l.push(s); else for (a in t)s = e(t[a], a, n), null != s && l.push(s);
        return K.apply([], l)
    }, guid: 1, proxy: function (t, e) {
        var i, n, s;
        return"string" == typeof e && (s = t[e], e = t, t = s), ae.isFunction(t) ? (i = Q.call(arguments, 2), n = function () {
            return t.apply(e || this, i.concat(Q.call(arguments)))
        }, n.guid = t.guid = t.guid || ae.guid++, n) : void 0
    }, now: function () {
        return+new Date
    }, support: ne}), ae.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
        Y["[object " + e + "]"] = e.toLowerCase()
    });
    var de = function (t) {
        function e(t, e, i, n) {
            var s, a, o, r, l, c, u, f, m, g;
            if ((e ? e.ownerDocument || e : R) !== q && A(e), e = e || q, i = i || [], !t || "string" != typeof t)return i;
            if (1 !== (r = e.nodeType) && 9 !== r)return[];
            if (L && !n) {
                if (s = ye.exec(t))if (o = s[1]) {
                    if (9 === r) {
                        if (a = e.getElementById(o), !a || !a.parentNode)return i;
                        if (a.id === o)return i.push(a), i
                    } else if (e.ownerDocument && (a = e.ownerDocument.getElementById(o)) && M(e, a) && a.id === o)return i.push(a), i
                } else {
                    if (s[2])return Y.apply(i, e.getElementsByTagName(t)), i;
                    if ((o = s[3]) && k.getElementsByClassName && e.getElementsByClassName)return Y.apply(i, e.getElementsByClassName(o)), i
                }
                if (k.qsa && (!D || !D.test(t))) {
                    if (f = u = $, m = e, g = 9 === r && t, 1 === r && "object" !== e.nodeName.toLowerCase()) {
                        for (c = h(t), (u = e.getAttribute("id")) ? f = u.replace(_e, "\\$&") : e.setAttribute("id", f), f = "[id='" + f + "'] ", l = c.length; l--;)c[l] = f + p(c[l]);
                        m = be.test(t) && d(e.parentNode) || e, g = c.join(",")
                    }
                    if (g)try {
                        return Y.apply(i, m.querySelectorAll(g)), i
                    } catch (v) {
                    } finally {
                        u || e.removeAttribute("id")
                    }
                }
            }
            return x(t.replace(le, "$1"), e, i, n)
        }

        function i() {
            function t(i, n) {
                return e.push(i + " ") > C.cacheLength && delete t[e.shift()], t[i + " "] = n
            }

            var e = [];
            return t
        }

        function n(t) {
            return t[$] = !0, t
        }

        function s(t) {
            var e = q.createElement("div");
            try {
                return!!t(e)
            } catch (i) {
                return!1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function a(t, e) {
            for (var i = t.split("|"), n = t.length; n--;)C.attrHandle[i[n]] = e
        }

        function o(t, e) {
            var i = e && t, n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || X) - (~t.sourceIndex || X);
            if (n)return n;
            if (i)for (; i = i.nextSibling;)if (i === e)return-1;
            return t ? 1 : -1
        }

        function r(t) {
            return function (e) {
                var i = e.nodeName.toLowerCase();
                return"input" === i && e.type === t
            }
        }

        function l(t) {
            return function (e) {
                var i = e.nodeName.toLowerCase();
                return("input" === i || "button" === i) && e.type === t
            }
        }

        function c(t) {
            return n(function (e) {
                return e = +e, n(function (i, n) {
                    for (var s, a = t([], i.length, e), o = a.length; o--;)i[s = a[o]] && (i[s] = !(n[s] = i[s]))
                })
            })
        }

        function d(t) {
            return t && typeof t.getElementsByTagName !== Z && t
        }

        function u() {
        }

        function h(t, i) {
            var n, s, a, o, r, l, c, d = B[t + " "];
            if (d)return i ? 0 : d.slice(0);
            for (r = t, l = [], c = C.preFilter; r;) {
                (!n || (s = ce.exec(r))) && (s && (r = r.slice(s[0].length) || r), l.push(a = [])), n = !1, (s = de.exec(r)) && (n = s.shift(), a.push({value: n, type: s[0].replace(le, " ")}), r = r.slice(n.length));
                for (o in C.filter)!(s = fe[o].exec(r)) || c[o] && !(s = c[o](s)) || (n = s.shift(), a.push({value: n, type: o, matches: s}), r = r.slice(n.length));
                if (!n)break
            }
            return i ? r.length : r ? e.error(t) : B(t, l).slice(0)
        }

        function p(t) {
            for (var e = 0, i = t.length, n = ""; i > e; e++)n += t[e].value;
            return n
        }

        function f(t, e, i) {
            var n = e.dir, s = i && "parentNode" === n, a = I++;
            return e.first ? function (e, i, a) {
                for (; e = e[n];)if (1 === e.nodeType || s)return t(e, i, a)
            } : function (e, i, o) {
                var r, l, c = [W, a];
                if (o) {
                    for (; e = e[n];)if ((1 === e.nodeType || s) && t(e, i, o))return!0
                } else for (; e = e[n];)if (1 === e.nodeType || s) {
                    if (l = e[$] || (e[$] = {}), (r = l[n]) && r[0] === W && r[1] === a)return c[2] = r[2];
                    if (l[n] = c, c[2] = t(e, i, o))return!0
                }
            }
        }

        function m(t) {
            return t.length > 1 ? function (e, i, n) {
                for (var s = t.length; s--;)if (!t[s](e, i, n))return!1;
                return!0
            } : t[0]
        }

        function g(t, e, i, n, s) {
            for (var a, o = [], r = 0, l = t.length, c = null != e; l > r; r++)(a = t[r]) && (!i || i(a, n, s)) && (o.push(a), c && e.push(r));
            return o
        }

        function v(t, e, i, s, a, o) {
            return s && !s[$] && (s = v(s)), a && !a[$] && (a = v(a, o)), n(function (n, o, r, l) {
                var c, d, u, h = [], p = [], f = o.length, m = n || _(e || "*", r.nodeType ? [r] : r, []), v = !t || !n && e ? m : g(m, h, t, r, l), y = i ? a || (n ? t : f || s) ? [] : o : v;
                if (i && i(v, y, r, l), s)for (c = g(y, p), s(c, [], r, l), d = c.length; d--;)(u = c[d]) && (y[p[d]] = !(v[p[d]] = u));
                if (n) {
                    if (a || t) {
                        if (a) {
                            for (c = [], d = y.length; d--;)(u = y[d]) && c.push(v[d] = u);
                            a(null, y = [], c, l)
                        }
                        for (d = y.length; d--;)(u = y[d]) && (c = a ? ee.call(n, u) : h[d]) > -1 && (n[c] = !(o[c] = u))
                    }
                } else y = g(y === o ? y.splice(f, y.length) : y), a ? a(null, o, y, l) : Y.apply(o, y)
            })
        }

        function y(t) {
            for (var e, i, n, s = t.length, a = C.relative[t[0].type], o = a || C.relative[" "], r = a ? 1 : 0, l = f(function (t) {
                return t === e
            }, o, !0), c = f(function (t) {
                return ee.call(e, t) > -1
            }, o, !0), d = [function (t, i, n) {
                return!a && (n || i !== E) || ((e = i).nodeType ? l(t, i, n) : c(t, i, n))
            }]; s > r; r++)if (i = C.relative[t[r].type])d = [f(m(d), i)]; else {
                if (i = C.filter[t[r].type].apply(null, t[r].matches), i[$]) {
                    for (n = ++r; s > n && !C.relative[t[n].type]; n++);
                    return v(r > 1 && m(d), r > 1 && p(t.slice(0, r - 1).concat({value: " " === t[r - 2].type ? "*" : ""})).replace(le, "$1"), i, n > r && y(t.slice(r, n)), s > n && y(t = t.slice(n)), s > n && p(t))
                }
                d.push(i)
            }
            return m(d)
        }

        function b(t, i) {
            var s = i.length > 0, a = t.length > 0, o = function (n, o, r, l, c) {
                var d, u, h, p = 0, f = "0", m = n && [], v = [], y = E, b = n || a && C.find.TAG("*", c), _ = W += null == y ? 1 : Math.random() || .1, x = b.length;
                for (c && (E = o !== q && o); f !== x && null != (d = b[f]); f++) {
                    if (a && d) {
                        for (u = 0; h = t[u++];)if (h(d, o, r)) {
                            l.push(d);
                            break
                        }
                        c && (W = _)
                    }
                    s && ((d = !h && d) && p--, n && m.push(d))
                }
                if (p += f, s && f !== p) {
                    for (u = 0; h = i[u++];)h(m, v, o, r);
                    if (n) {
                        if (p > 0)for (; f--;)m[f] || v[f] || (v[f] = G.call(l));
                        v = g(v)
                    }
                    Y.apply(l, v), c && !n && v.length > 0 && p + i.length > 1 && e.uniqueSort(l)
                }
                return c && (W = _, E = y), m
            };
            return s ? n(o) : o
        }

        function _(t, i, n) {
            for (var s = 0, a = i.length; a > s; s++)e(t, i[s], n);
            return n
        }

        function x(t, e, i, n) {
            var s, a, o, r, l, c = h(t);
            if (!n && 1 === c.length) {
                if (a = c[0] = c[0].slice(0), a.length > 2 && "ID" === (o = a[0]).type && k.getById && 9 === e.nodeType && L && C.relative[a[1].type]) {
                    if (e = (C.find.ID(o.matches[0].replace(xe, we), e) || [])[0], !e)return i;
                    t = t.slice(a.shift().value.length)
                }
                for (s = fe.needsContext.test(t) ? 0 : a.length; s-- && (o = a[s], !C.relative[r = o.type]);)if ((l = C.find[r]) && (n = l(o.matches[0].replace(xe, we), be.test(a[0].type) && d(e.parentNode) || e))) {
                    if (a.splice(s, 1), t = n.length && p(a), !t)return Y.apply(i, n), i;
                    break
                }
            }
            return T(t, c)(n, e, !L, i, be.test(t) && d(e.parentNode) || e), i
        }

        var w, k, C, j, S, T, E, P, F, A, q, N, L, D, H, O, M, $ = "sizzle" + -new Date, R = t.document, W = 0, I = 0, z = i(), B = i(), V = i(), U = function (t, e) {
            return t === e && (F = !0), 0
        }, Z = "undefined", X = 1 << 31, Q = {}.hasOwnProperty, K = [], G = K.pop, J = K.push, Y = K.push, te = K.slice, ee = K.indexOf || function (t) {
            for (var e = 0, i = this.length; i > e; e++)if (this[e] === t)return e;
            return-1
        }, ie = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", se = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ae = se.replace("w", "w#"), oe = "\\[" + ne + "*(" + se + ")" + ne + "*(?:([*^$|!~]?=)" + ne + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ae + ")|)|)" + ne + "*\\]", re = ":(" + se + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + oe.replace(3, 8) + ")*)|.*)\\)|)", le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"), ce = new RegExp("^" + ne + "*," + ne + "*"), de = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), he = new RegExp(re), pe = new RegExp("^" + ae + "$"), fe = {ID: new RegExp("^#(" + se + ")"), CLASS: new RegExp("^\\.(" + se + ")"), TAG: new RegExp("^(" + se.replace("w", "w*") + ")"), ATTR: new RegExp("^" + oe), PSEUDO: new RegExp("^" + re), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"), bool: new RegExp("^(?:" + ie + ")$", "i"), needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")}, me = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, ve = /^[^{]+\{\s*\[native \w/, ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, be = /[+~]/, _e = /'|\\/g, xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), we = function (t, e, i) {
            var n = "0x" + e - 65536;
            return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
        };
        try {
            Y.apply(K = te.call(R.childNodes), R.childNodes), K[R.childNodes.length].nodeType
        } catch (ke) {
            Y = {apply: K.length ? function (t, e) {
                J.apply(t, te.call(e))
            } : function (t, e) {
                for (var i = t.length, n = 0; t[i++] = e[n++];);
                t.length = i - 1
            }}
        }
        k = e.support = {}, S = e.isXML = function (t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1
        }, A = e.setDocument = function (t) {
            var e, i = t ? t.ownerDocument || t : R, n = i.defaultView;
            return i !== q && 9 === i.nodeType && i.documentElement ? (q = i, N = i.documentElement, L = !S(i), n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", function () {
                A()
            }, !1) : n.attachEvent && n.attachEvent("onunload", function () {
                A()
            })), k.attributes = s(function (t) {
                return t.className = "i", !t.getAttribute("className")
            }), k.getElementsByTagName = s(function (t) {
                return t.appendChild(i.createComment("")), !t.getElementsByTagName("*").length
            }), k.getElementsByClassName = ve.test(i.getElementsByClassName) && s(function (t) {
                return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
            }), k.getById = s(function (t) {
                return N.appendChild(t).id = $, !i.getElementsByName || !i.getElementsByName($).length
            }), k.getById ? (C.find.ID = function (t, e) {
                if (typeof e.getElementById !== Z && L) {
                    var i = e.getElementById(t);
                    return i && i.parentNode ? [i] : []
                }
            }, C.filter.ID = function (t) {
                var e = t.replace(xe, we);
                return function (t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete C.find.ID, C.filter.ID = function (t) {
                var e = t.replace(xe, we);
                return function (t) {
                    var i = typeof t.getAttributeNode !== Z && t.getAttributeNode("id");
                    return i && i.value === e
                }
            }), C.find.TAG = k.getElementsByTagName ? function (t, e) {
                return typeof e.getElementsByTagName !== Z ? e.getElementsByTagName(t) : void 0
            } : function (t, e) {
                var i, n = [], s = 0, a = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; i = a[s++];)1 === i.nodeType && n.push(i);
                    return n
                }
                return a
            }, C.find.CLASS = k.getElementsByClassName && function (t, e) {
                return typeof e.getElementsByClassName !== Z && L ? e.getElementsByClassName(t) : void 0
            }, H = [], D = [], (k.qsa = ve.test(i.querySelectorAll)) && (s(function (t) {
                t.innerHTML = "<select t=''><option selected=''></option></select>", t.querySelectorAll("[t^='']").length && D.push("[*^$]=" + ne + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || D.push("\\[" + ne + "*(?:value|" + ie + ")"), t.querySelectorAll(":checked").length || D.push(":checked")
            }), s(function (t) {
                var e = i.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && D.push("name" + ne + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || D.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), D.push(",.*:")
            })), (k.matchesSelector = ve.test(O = N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && s(function (t) {
                k.disconnectedMatch = O.call(t, "div"), O.call(t, "[s!='']:x"), H.push("!=", re)
            }), D = D.length && new RegExp(D.join("|")), H = H.length && new RegExp(H.join("|")), e = ve.test(N.compareDocumentPosition), M = e || ve.test(N.contains) ? function (t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t, n = e && e.parentNode;
                return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
            } : function (t, e) {
                if (e)for (; e = e.parentNode;)if (e === t)return!0;
                return!1
            }, U = e ? function (t, e) {
                if (t === e)return F = !0, 0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !k.sortDetached && e.compareDocumentPosition(t) === n ? t === i || t.ownerDocument === R && M(R, t) ? -1 : e === i || e.ownerDocument === R && M(R, e) ? 1 : P ? ee.call(P, t) - ee.call(P, e) : 0 : 4 & n ? -1 : 1)
            } : function (t, e) {
                if (t === e)return F = !0, 0;
                var n, s = 0, a = t.parentNode, r = e.parentNode, l = [t], c = [e];
                if (!a || !r)return t === i ? -1 : e === i ? 1 : a ? -1 : r ? 1 : P ? ee.call(P, t) - ee.call(P, e) : 0;
                if (a === r)return o(t, e);
                for (n = t; n = n.parentNode;)l.unshift(n);
                for (n = e; n = n.parentNode;)c.unshift(n);
                for (; l[s] === c[s];)s++;
                return s ? o(l[s], c[s]) : l[s] === R ? -1 : c[s] === R ? 1 : 0
            }, i) : q
        }, e.matches = function (t, i) {
            return e(t, null, null, i)
        }, e.matchesSelector = function (t, i) {
            if ((t.ownerDocument || t) !== q && A(t), i = i.replace(ue, "='$1']"), !(!k.matchesSelector || !L || H && H.test(i) || D && D.test(i)))try {
                var n = O.call(t, i);
                if (n || k.disconnectedMatch || t.document && 11 !== t.document.nodeType)return n
            } catch (s) {
            }
            return e(i, q, null, [t]).length > 0
        }, e.contains = function (t, e) {
            return(t.ownerDocument || t) !== q && A(t), M(t, e)
        }, e.attr = function (t, e) {
            (t.ownerDocument || t) !== q && A(t);
            var i = C.attrHandle[e.toLowerCase()], n = i && Q.call(C.attrHandle, e.toLowerCase()) ? i(t, e, !L) : void 0;
            return void 0 !== n ? n : k.attributes || !L ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }, e.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function (t) {
            var e, i = [], n = 0, s = 0;
            if (F = !k.detectDuplicates, P = !k.sortStable && t.slice(0), t.sort(U), F) {
                for (; e = t[s++];)e === t[s] && (n = i.push(s));
                for (; n--;)t.splice(i[n], 1)
            }
            return P = null, t
        }, j = e.getText = function (t) {
            var e, i = "", n = 0, s = t.nodeType;
            if (s) {
                if (1 === s || 9 === s || 11 === s) {
                    if ("string" == typeof t.textContent)return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling)i += j(t)
                } else if (3 === s || 4 === s)return t.nodeValue
            } else for (; e = t[n++];)i += j(e);
            return i
        }, C = e.selectors = {cacheLength: 50, createPseudo: n, match: fe, attrHandle: {}, find: {}, relative: {">": {dir: "parentNode", first: !0}, " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: !0}, "~": {dir: "previousSibling"}}, preFilter: {ATTR: function (t) {
            return t[1] = t[1].replace(xe, we), t[3] = (t[4] || t[5] || "").replace(xe, we), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
        }, CHILD: function (t) {
            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
        }, PSEUDO: function (t) {
            var e, i = !t[5] && t[2];
            return fe.CHILD.test(t[0]) ? null : (t[3] && void 0 !== t[4] ? t[2] = t[4] : i && he.test(i) && (e = h(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
        }}, filter: {TAG: function (t) {
            var e = t.replace(xe, we).toLowerCase();
            return"*" === t ? function () {
                return!0
            } : function (t) {
                return t.nodeName && t.nodeName.toLowerCase() === e
            }
        }, CLASS: function (t) {
            var e = z[t + " "];
            return e || (e = new RegExp("(^|" + ne + ")" + t + "(" + ne + "|$)")) && z(t, function (t) {
                return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== Z && t.getAttribute("class") || "")
            })
        }, ATTR: function (t, i, n) {
            return function (s) {
                var a = e.attr(s, t);
                return null == a ? "!=" === i : i ? (a += "", "=" === i ? a === n : "!=" === i ? a !== n : "^=" === i ? n && 0 === a.indexOf(n) : "*=" === i ? n && a.indexOf(n) > -1 : "$=" === i ? n && a.slice(-n.length) === n : "~=" === i ? (" " + a + " ").indexOf(n) > -1 : "|=" === i ? a === n || a.slice(0, n.length + 1) === n + "-" : !1) : !0
            }
        }, CHILD: function (t, e, i, n, s) {
            var a = "nth" !== t.slice(0, 3), o = "last" !== t.slice(-4), r = "of-type" === e;
            return 1 === n && 0 === s ? function (t) {
                return!!t.parentNode
            } : function (e, i, l) {
                var c, d, u, h, p, f, m = a !== o ? "nextSibling" : "previousSibling", g = e.parentNode, v = r && e.nodeName.toLowerCase(), y = !l && !r;
                if (g) {
                    if (a) {
                        for (; m;) {
                            for (u = e; u = u[m];)if (r ? u.nodeName.toLowerCase() === v : 1 === u.nodeType)return!1;
                            f = m = "only" === t && !f && "nextSibling"
                        }
                        return!0
                    }
                    if (f = [o ? g.firstChild : g.lastChild], o && y) {
                        for (d = g[$] || (g[$] = {}), c = d[t] || [], p = c[0] === W && c[1], h = c[0] === W && c[2], u = p && g.childNodes[p]; u = ++p && u && u[m] || (h = p = 0) || f.pop();)if (1 === u.nodeType && ++h && u === e) {
                            d[t] = [W, p, h];
                            break
                        }
                    } else if (y && (c = (e[$] || (e[$] = {}))[t]) && c[0] === W)h = c[1]; else for (; (u = ++p && u && u[m] || (h = p = 0) || f.pop()) && ((r ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++h || (y && ((u[$] || (u[$] = {}))[t] = [W, h]), u !== e)););
                    return h -= s, h === n || h % n === 0 && h / n >= 0
                }
            }
        }, PSEUDO: function (t, i) {
            var s, a = C.pseudos[t] || C.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
            return a[$] ? a(i) : a.length > 1 ? (s = [t, t, "", i], C.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function (t, e) {
                for (var n, s = a(t, i), o = s.length; o--;)n = ee.call(t, s[o]), t[n] = !(e[n] = s[o])
            }) : function (t) {
                return a(t, 0, s)
            }) : a
        }}, pseudos: {not: n(function (t) {
            var e = [], i = [], s = T(t.replace(le, "$1"));
            return s[$] ? n(function (t, e, i, n) {
                for (var a, o = s(t, null, n, []), r = t.length; r--;)(a = o[r]) && (t[r] = !(e[r] = a))
            }) : function (t, n, a) {
                return e[0] = t, s(e, null, a, i), !i.pop()
            }
        }), has: n(function (t) {
            return function (i) {
                return e(t, i).length > 0
            }
        }), contains: n(function (t) {
            return function (e) {
                return(e.textContent || e.innerText || j(e)).indexOf(t) > -1
            }
        }), lang: n(function (t) {
            return pe.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(xe, we).toLowerCase(), function (e) {
                var i;
                do if (i = L ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                return!1
            }
        }), target: function (e) {
            var i = t.location && t.location.hash;
            return i && i.slice(1) === e.id
        }, root: function (t) {
            return t === N
        }, focus: function (t) {
            return t === q.activeElement && (!q.hasFocus || q.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
        }, enabled: function (t) {
            return t.disabled === !1
        }, disabled: function (t) {
            return t.disabled === !0
        }, checked: function (t) {
            var e = t.nodeName.toLowerCase();
            return"input" === e && !!t.checked || "option" === e && !!t.selected
        }, selected: function (t) {
            return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
        }, empty: function (t) {
            for (t = t.firstChild; t; t = t.nextSibling)if (t.nodeType < 6)return!1;
            return!0
        }, parent: function (t) {
            return!C.pseudos.empty(t)
        }, header: function (t) {
            return ge.test(t.nodeName)
        }, input: function (t) {
            return me.test(t.nodeName)
        }, button: function (t) {
            var e = t.nodeName.toLowerCase();
            return"input" === e && "button" === t.type || "button" === e
        }, text: function (t) {
            var e;
            return"input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
        }, first: c(function () {
            return[0]
        }), last: c(function (t, e) {
            return[e - 1]
        }), eq: c(function (t, e, i) {
            return[0 > i ? i + e : i]
        }), even: c(function (t, e) {
            for (var i = 0; e > i; i += 2)t.push(i);
            return t
        }), odd: c(function (t, e) {
            for (var i = 1; e > i; i += 2)t.push(i);
            return t
        }), lt: c(function (t, e, i) {
            for (var n = 0 > i ? i + e : i; --n >= 0;)t.push(n);
            return t
        }), gt: c(function (t, e, i) {
            for (var n = 0 > i ? i + e : i; ++n < e;)t.push(n);
            return t
        })}}, C.pseudos.nth = C.pseudos.eq;
        for (w in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})C.pseudos[w] = r(w);
        for (w in{submit: !0, reset: !0})C.pseudos[w] = l(w);
        return u.prototype = C.filters = C.pseudos, C.setFilters = new u, T = e.compile = function (t, e) {
            var i, n = [], s = [], a = V[t + " "];
            if (!a) {
                for (e || (e = h(t)), i = e.length; i--;)a = y(e[i]), a[$] ? n.push(a) : s.push(a);
                a = V(t, b(s, n))
            }
            return a
        }, k.sortStable = $.split("").sort(U).join("") === $, k.detectDuplicates = !!F, A(), k.sortDetached = s(function (t) {
            return 1 & t.compareDocumentPosition(q.createElement("div"))
        }), s(function (t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || a("type|href|height|width", function (t, e, i) {
            return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), k.attributes && s(function (t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || a("value", function (t, e, i) {
            return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), s(function (t) {
            return null == t.getAttribute("disabled")
        }) || a(ie, function (t, e, i) {
            var n;
            return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }), e
    }(t);
    ae.find = de, ae.expr = de.selectors, ae.expr[":"] = ae.expr.pseudos, ae.unique = de.uniqueSort, ae.text = de.getText, ae.isXMLDoc = de.isXML, ae.contains = de.contains;
    var ue = ae.expr.match.needsContext, he = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, pe = /^.[^:#\[\.,]*$/;
    ae.filter = function (t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? ae.find.matchesSelector(n, t) ? [n] : [] : ae.find.matches(t, ae.grep(e, function (t) {
            return 1 === t.nodeType
        }))
    }, ae.fn.extend({find: function (t) {
        var e, i = [], n = this, s = n.length;
        if ("string" != typeof t)return this.pushStack(ae(t).filter(function () {
            for (e = 0; s > e; e++)if (ae.contains(n[e], this))return!0
        }));
        for (e = 0; s > e; e++)ae.find(t, n[e], i);
        return i = this.pushStack(s > 1 ? ae.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
    }, filter: function (t) {
        return this.pushStack(n(this, t || [], !1))
    }, not: function (t) {
        return this.pushStack(n(this, t || [], !0))
    }, is: function (t) {
        return!!n(this, "string" == typeof t && ue.test(t) ? ae(t) : t || [], !1).length
    }});
    var fe, me = t.document, ge = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ve = ae.fn.init = function (t, e) {
        var i, n;
        if (!t)return this;
        if ("string" == typeof t) {
            if (i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : ge.exec(t), !i || !i[1] && e)return!e || e.jquery ? (e || fe).find(t) : this.constructor(e).find(t);
            if (i[1]) {
                if (e = e instanceof ae ? e[0] : e, ae.merge(this, ae.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : me, !0)), he.test(i[1]) && ae.isPlainObject(e))for (i in e)ae.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                return this
            }
            if (n = me.getElementById(i[2]), n && n.parentNode) {
                if (n.id !== i[2])return fe.find(t);
                this.length = 1, this[0] = n
            }
            return this.context = me, this.selector = t, this
        }
        return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ae.isFunction(t) ? "undefined" != typeof fe.ready ? fe.ready(t) : t(ae) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), ae.makeArray(t, this))
    };
    ve.prototype = ae.fn, fe = ae(me);
    var ye = /^(?:parents|prev(?:Until|All))/, be = {children: !0, contents: !0, next: !0, prev: !0};
    ae.extend({dir: function (t, e, i) {
        for (var n = [], s = t[e]; s && 9 !== s.nodeType && (void 0 === i || 1 !== s.nodeType || !ae(s).is(i));)1 === s.nodeType && n.push(s), s = s[e];
        return n
    }, sibling: function (t, e) {
        for (var i = []; t; t = t.nextSibling)1 === t.nodeType && t !== e && i.push(t);
        return i
    }}), ae.fn.extend({has: function (t) {
        var e, i = ae(t, this), n = i.length;
        return this.filter(function () {
            for (e = 0; n > e; e++)if (ae.contains(this, i[e]))return!0
        })
    }, closest: function (t, e) {
        for (var i, n = 0, s = this.length, a = [], o = ue.test(t) || "string" != typeof t ? ae(t, e || this.context) : 0; s > n; n++)for (i = this[n]; i && i !== e; i = i.parentNode)if (i.nodeType < 11 && (o ? o.index(i) > -1 : 1 === i.nodeType && ae.find.matchesSelector(i, t))) {
            a.push(i);
            break
        }
        return this.pushStack(a.length > 1 ? ae.unique(a) : a)
    }, index: function (t) {
        return t ? "string" == typeof t ? ae.inArray(this[0], ae(t)) : ae.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    }, add: function (t, e) {
        return this.pushStack(ae.unique(ae.merge(this.get(), ae(t, e))))
    }, addBack: function (t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
    }}), ae.each({parent: function (t) {
        var e = t.parentNode;
        return e && 11 !== e.nodeType ? e : null
    }, parents: function (t) {
        return ae.dir(t, "parentNode")
    }, parentsUntil: function (t, e, i) {
        return ae.dir(t, "parentNode", i)
    }, next: function (t) {
        return s(t, "nextSibling")
    }, prev: function (t) {
        return s(t, "previousSibling")
    }, nextAll: function (t) {
        return ae.dir(t, "nextSibling")
    }, prevAll: function (t) {
        return ae.dir(t, "previousSibling")
    }, nextUntil: function (t, e, i) {
        return ae.dir(t, "nextSibling", i)
    }, prevUntil: function (t, e, i) {
        return ae.dir(t, "previousSibling", i)
    }, siblings: function (t) {
        return ae.sibling((t.parentNode || {}).firstChild, t)
    }, children: function (t) {
        return ae.sibling(t.firstChild)
    }, contents: function (t) {
        return ae.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : ae.merge([], t.childNodes)
    }}, function (t, e) {
        ae.fn[t] = function (i, n) {
            var s = ae.map(this, e, i);
            return"Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (s = ae.filter(n, s)), this.length > 1 && (be[t] || (s = ae.unique(s)), ye.test(t) && (s = s.reverse())), this.pushStack(s)
        }
    });
    var _e = /\S+/g, xe = {};
    ae.Callbacks = function (t) {
        t = "string" == typeof t ? xe[t] || a(t) : ae.extend({}, t);
        var e, i, n, s, o, r, l = [], c = !t.once && [], d = function (a) {
            for (i = t.memory && a, n = !0, o = r || 0, r = 0, s = l.length, e = !0; l && s > o; o++)if (l[o].apply(a[0], a[1]) === !1 && t.stopOnFalse) {
                i = !1;
                break
            }
            e = !1, l && (c ? c.length && d(c.shift()) : i ? l = [] : u.disable())
        }, u = {add: function () {
            if (l) {
                var n = l.length;
                !function a(e) {
                    ae.each(e, function (e, i) {
                        var n = ae.type(i);
                        "function" === n ? t.unique && u.has(i) || l.push(i) : i && i.length && "string" !== n && a(i)
                    })
                }(arguments), e ? s = l.length : i && (r = n, d(i))
            }
            return this
        }, remove: function () {
            return l && ae.each(arguments, function (t, i) {
                for (var n; (n = ae.inArray(i, l, n)) > -1;)l.splice(n, 1), e && (s >= n && s--, o >= n && o--)
            }), this
        }, has: function (t) {
            return t ? ae.inArray(t, l) > -1 : !(!l || !l.length)
        }, empty: function () {
            return l = [], s = 0, this
        }, disable: function () {
            return l = c = i = void 0, this
        }, disabled: function () {
            return!l
        }, lock: function () {
            return c = void 0, i || u.disable(), this
        }, locked: function () {
            return!c
        }, fireWith: function (t, i) {
            return!l || n && !c || (i = i || [], i = [t, i.slice ? i.slice() : i], e ? c.push(i) : d(i)), this
        }, fire: function () {
            return u.fireWith(this, arguments), this
        }, fired: function () {
            return!!n
        }};
        return u
    }, ae.extend({Deferred: function (t) {
        var e = [
            ["resolve", "done", ae.Callbacks("once memory"), "resolved"],
            ["reject", "fail", ae.Callbacks("once memory"), "rejected"],
            ["notify", "progress", ae.Callbacks("memory")]
        ], i = "pending", n = {state: function () {
            return i
        }, always: function () {
            return s.done(arguments).fail(arguments), this
        }, then: function () {
            var t = arguments;
            return ae.Deferred(function (i) {
                ae.each(e, function (e, a) {
                    var o = ae.isFunction(t[e]) && t[e];
                    s[a[1]](function () {
                        var t = o && o.apply(this, arguments);
                        t && ae.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[a[0] + "With"](this === n ? i.promise() : this, o ? [t] : arguments)
                    })
                }), t = null
            }).promise()
        }, promise: function (t) {
            return null != t ? ae.extend(t, n) : n
        }}, s = {};
        return n.pipe = n.then, ae.each(e, function (t, a) {
            var o = a[2], r = a[3];
            n[a[1]] = o.add, r && o.add(function () {
                i = r
            }, e[1 ^ t][2].disable, e[2][2].lock), s[a[0]] = function () {
                return s[a[0] + "With"](this === s ? n : this, arguments), this
            }, s[a[0] + "With"] = o.fireWith
        }), n.promise(s), t && t.call(s, s), s
    }, when: function (t) {
        var e, i, n, s = 0, a = Q.call(arguments), o = a.length, r = 1 !== o || t && ae.isFunction(t.promise) ? o : 0, l = 1 === r ? t : ae.Deferred(), c = function (t, i, n) {
            return function (s) {
                i[t] = this, n[t] = arguments.length > 1 ? Q.call(arguments) : s, n === e ? l.notifyWith(i, n) : --r || l.resolveWith(i, n)
            }
        };
        if (o > 1)for (e = new Array(o), i = new Array(o), n = new Array(o); o > s; s++)a[s] && ae.isFunction(a[s].promise) ? a[s].promise().done(c(s, n, a)).fail(l.reject).progress(c(s, i, e)) : --r;
        return r || l.resolveWith(n, a), l.promise()
    }});
    var we;
    ae.fn.ready = function (t) {
        return ae.ready.promise().done(t), this
    }, ae.extend({isReady: !1, readyWait: 1, holdReady: function (t) {
        t ? ae.readyWait++ : ae.ready(!0)
    }, ready: function (t) {
        if (t === !0 ? !--ae.readyWait : !ae.isReady) {
            if (!me.body)return setTimeout(ae.ready);
            ae.isReady = !0, t !== !0 && --ae.readyWait > 0 || (we.resolveWith(me, [ae]), ae.fn.trigger && ae(me).trigger("ready").off("ready"))
        }
    }}), ae.ready.promise = function (e) {
        if (!we)if (we = ae.Deferred(), "complete" === me.readyState)setTimeout(ae.ready); else if (me.addEventListener)me.addEventListener("DOMContentLoaded", r, !1), t.addEventListener("load", r, !1); else {
            me.attachEvent("onreadystatechange", r), t.attachEvent("onload", r);
            var i = !1;
            try {
                i = null == t.frameElement && me.documentElement
            } catch (n) {
            }
            i && i.doScroll && !function s() {
                if (!ae.isReady) {
                    try {
                        i.doScroll("left")
                    } catch (t) {
                        return setTimeout(s, 50)
                    }
                    o(), ae.ready()
                }
            }()
        }
        return we.promise(e)
    };
    var ke, Ce = "undefined";
    for (ke in ae(ne))break;
    ne.ownLast = "0" !== ke, ne.inlineBlockNeedsLayout = !1, ae(function () {
        var t, e, i = me.getElementsByTagName("body")[0];
        i && (t = me.createElement("div"), t.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", e = me.createElement("div"), i.appendChild(t).appendChild(e), typeof e.style.zoom !== Ce && (e.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (ne.inlineBlockNeedsLayout = 3 === e.offsetWidth) && (i.style.zoom = 1)), i.removeChild(t), t = e = null)
    }), function () {
        var t = me.createElement("div");
        if (null == ne.deleteExpando) {
            ne.deleteExpando = !0;
            try {
                delete t.test
            } catch (e) {
                ne.deleteExpando = !1
            }
        }
        t = null
    }(), ae.acceptData = function (t) {
        var e = ae.noData[(t.nodeName + " ").toLowerCase()], i = +t.nodeType || 1;
        return 1 !== i && 9 !== i ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
    };
    var je = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Se = /([A-Z])/g;
    ae.extend({cache: {}, noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"}, hasData: function (t) {
        return t = t.nodeType ? ae.cache[t[ae.expando]] : t[ae.expando], !!t && !c(t)
    }, data: function (t, e, i) {
        return d(t, e, i)
    }, removeData: function (t, e) {
        return u(t, e)
    }, _data: function (t, e, i) {
        return d(t, e, i, !0)
    }, _removeData: function (t, e) {
        return u(t, e, !0)
    }}), ae.fn.extend({data: function (t, e) {
        var i, n, s, a = this[0], o = a && a.attributes;
        if (void 0 === t) {
            if (this.length && (s = ae.data(a), 1 === a.nodeType && !ae._data(a, "parsedAttrs"))) {
                for (i = o.length; i--;)n = o[i].name, 0 === n.indexOf("data-") && (n = ae.camelCase(n.slice(5)), l(a, n, s[n]));
                ae._data(a, "parsedAttrs", !0)
            }
            return s
        }
        return"object" == typeof t ? this.each(function () {
            ae.data(this, t)
        }) : arguments.length > 1 ? this.each(function () {
            ae.data(this, t, e)
        }) : a ? l(a, t, ae.data(a, t)) : void 0
    }, removeData: function (t) {
        return this.each(function () {
            ae.removeData(this, t)
        })
    }}), ae.extend({queue: function (t, e, i) {
        var n;
        return t ? (e = (e || "fx") + "queue", n = ae._data(t, e), i && (!n || ae.isArray(i) ? n = ae._data(t, e, ae.makeArray(i)) : n.push(i)), n || []) : void 0
    }, dequeue: function (t, e) {
        e = e || "fx";
        var i = ae.queue(t, e), n = i.length, s = i.shift(), a = ae._queueHooks(t, e), o = function () {
            ae.dequeue(t, e)
        };
        "inprogress" === s && (s = i.shift(), n--), s && ("fx" === e && i.unshift("inprogress"), delete a.stop, s.call(t, o, a)), !n && a && a.empty.fire()
    }, _queueHooks: function (t, e) {
        var i = e + "queueHooks";
        return ae._data(t, i) || ae._data(t, i, {empty: ae.Callbacks("once memory").add(function () {
            ae._removeData(t, e + "queue"), ae._removeData(t, i)
        })})
    }}), ae.fn.extend({queue: function (t, e) {
        var i = 2;
        return"string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? ae.queue(this[0], t) : void 0 === e ? this : this.each(function () {
            var i = ae.queue(this, t, e);
            ae._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && ae.dequeue(this, t)
        })
    }, dequeue: function (t) {
        return this.each(function () {
            ae.dequeue(this, t)
        })
    }, clearQueue: function (t) {
        return this.queue(t || "fx", [])
    }, promise: function (t, e) {
        var i, n = 1, s = ae.Deferred(), a = this, o = this.length, r = function () {
            --n || s.resolveWith(a, [a])
        };
        for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--;)i = ae._data(a[o], t + "queueHooks"), i && i.empty && (n++, i.empty.add(r));
        return r(), s.promise(e)
    }});
    var Te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Ee = ["Top", "Right", "Bottom", "Left"], Pe = function (t, e) {
        return t = e || t, "none" === ae.css(t, "display") || !ae.contains(t.ownerDocument, t)
    }, Fe = ae.access = function (t, e, i, n, s, a, o) {
        var r = 0, l = t.length, c = null == i;
        if ("object" === ae.type(i)) {
            s = !0;
            for (r in i)ae.access(t, e, r, i[r], !0, a, o)
        } else if (void 0 !== n && (s = !0, ae.isFunction(n) || (o = !0), c && (o ? (e.call(t, n), e = null) : (c = e, e = function (t, e, i) {
            return c.call(ae(t), i)
        })), e))for (; l > r; r++)e(t[r], i, o ? n : n.call(t[r], r, e(t[r], i)));
        return s ? t : c ? e.call(t) : l ? e(t[0], i) : a
    }, Ae = /^(?:checkbox|radio)$/i;
    !function () {
        var t = me.createDocumentFragment(), e = me.createElement("div"), i = me.createElement("input");
        if (e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a>", ne.leadingWhitespace = 3 === e.firstChild.nodeType, ne.tbody = !e.getElementsByTagName("tbody").length, ne.htmlSerialize = !!e.getElementsByTagName("link").length, ne.html5Clone = "<:nav></:nav>" !== me.createElement("nav").cloneNode(!0).outerHTML, i.type = "checkbox", i.checked = !0, t.appendChild(i), ne.appendChecked = i.checked, e.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", ne.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, ne.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function () {
            ne.noCloneEvent = !1
        }), e.cloneNode(!0).click()), null == ne.deleteExpando) {
            ne.deleteExpando = !0;
            try {
                delete e.test
            } catch (n) {
                ne.deleteExpando = !1
            }
        }
        t = e = i = null
    }(), function () {
        var e, i, n = me.createElement("div");
        for (e in{submit: !0, change: !0, focusin: !0})i = "on" + e, (ne[e + "Bubbles"] = i in t) || (n.setAttribute(i, "t"), ne[e + "Bubbles"] = n.attributes[i].expando === !1);
        n = null
    }();
    var qe = /^(?:input|select|textarea)$/i, Ne = /^key/, Le = /^(?:mouse|contextmenu)|click/, De = /^(?:focusinfocus|focusoutblur)$/, He = /^([^.]*)(?:\.(.+)|)$/;
    ae.event = {global: {}, add: function (t, e, i, n, s) {
        var a, o, r, l, c, d, u, h, p, f, m, g = ae._data(t);
        if (g) {
            for (i.handler && (l = i, i = l.handler, s = l.selector), i.guid || (i.guid = ae.guid++), (o = g.events) || (o = g.events = {}), (d = g.handle) || (d = g.handle = function (t) {
                return typeof ae === Ce || t && ae.event.triggered === t.type ? void 0 : ae.event.dispatch.apply(d.elem, arguments)
            }, d.elem = t), e = (e || "").match(_e) || [""], r = e.length; r--;)a = He.exec(e[r]) || [], p = m = a[1], f = (a[2] || "").split(".").sort(), p && (c = ae.event.special[p] || {}, p = (s ? c.delegateType : c.bindType) || p, c = ae.event.special[p] || {}, u = ae.extend({type: p, origType: m, data: n, handler: i, guid: i.guid, selector: s, needsContext: s && ae.expr.match.needsContext.test(s), namespace: f.join(".")}, l), (h = o[p]) || (h = o[p] = [], h.delegateCount = 0, c.setup && c.setup.call(t, n, f, d) !== !1 || (t.addEventListener ? t.addEventListener(p, d, !1) : t.attachEvent && t.attachEvent("on" + p, d))), c.add && (c.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)), s ? h.splice(h.delegateCount++, 0, u) : h.push(u), ae.event.global[p] = !0);
            t = null
        }
    }, remove: function (t, e, i, n, s) {
        var a, o, r, l, c, d, u, h, p, f, m, g = ae.hasData(t) && ae._data(t);
        if (g && (d = g.events)) {
            for (e = (e || "").match(_e) || [""], c = e.length; c--;)if (r = He.exec(e[c]) || [], p = m = r[1], f = (r[2] || "").split(".").sort(), p) {
                for (u = ae.event.special[p] || {}, p = (n ? u.delegateType : u.bindType) || p, h = d[p] || [], r = r[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = a = h.length; a--;)o = h[a], !s && m !== o.origType || i && i.guid !== o.guid || r && !r.test(o.namespace) || n && n !== o.selector && ("**" !== n || !o.selector) || (h.splice(a, 1), o.selector && h.delegateCount--, u.remove && u.remove.call(t, o));
                l && !h.length && (u.teardown && u.teardown.call(t, f, g.handle) !== !1 || ae.removeEvent(t, p, g.handle), delete d[p])
            } else for (p in d)ae.event.remove(t, p + e[c], i, n, !0);
            ae.isEmptyObject(d) && (delete g.handle, ae._removeData(t, "events"))
        }
    }, trigger: function (e, i, n, s) {
        var a, o, r, l, c, d, u, h = [n || me], p = ee.call(e, "type") ? e.type : e, f = ee.call(e, "namespace") ? e.namespace.split(".") : [];
        if (r = d = n = n || me, 3 !== n.nodeType && 8 !== n.nodeType && !De.test(p + ae.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), o = p.indexOf(":") < 0 && "on" + p, e = e[ae.expando] ? e : new ae.Event(p, "object" == typeof e && e), e.isTrigger = s ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : ae.makeArray(i, [e]), c = ae.event.special[p] || {}, s || !c.trigger || c.trigger.apply(n, i) !== !1)) {
            if (!s && !c.noBubble && !ae.isWindow(n)) {
                for (l = c.delegateType || p, De.test(l + p) || (r = r.parentNode); r; r = r.parentNode)h.push(r), d = r;
                d === (n.ownerDocument || me) && h.push(d.defaultView || d.parentWindow || t)
            }
            for (u = 0; (r = h[u++]) && !e.isPropagationStopped();)e.type = u > 1 ? l : c.bindType || p, a = (ae._data(r, "events") || {})[e.type] && ae._data(r, "handle"), a && a.apply(r, i), a = o && r[o], a && a.apply && ae.acceptData(r) && (e.result = a.apply(r, i), e.result === !1 && e.preventDefault());
            if (e.type = p, !s && !e.isDefaultPrevented() && (!c._default || c._default.apply(h.pop(), i) === !1) && ae.acceptData(n) && o && n[p] && !ae.isWindow(n)) {
                d = n[o], d && (n[o] = null), ae.event.triggered = p;
                try {
                    n[p]()
                } catch (m) {
                }
                ae.event.triggered = void 0, d && (n[o] = d)
            }
            return e.result
        }
    }, dispatch: function (t) {
        t = ae.event.fix(t);
        var e, i, n, s, a, o = [], r = Q.call(arguments), l = (ae._data(this, "events") || {})[t.type] || [], c = ae.event.special[t.type] || {};
        if (r[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
            for (o = ae.event.handlers.call(this, t, l), e = 0; (s = o[e++]) && !t.isPropagationStopped();)for (t.currentTarget = s.elem, a = 0; (n = s.handlers[a++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(n.namespace)) && (t.handleObj = n, t.data = n.data, i = ((ae.event.special[n.origType] || {}).handle || n.handler).apply(s.elem, r), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
            return c.postDispatch && c.postDispatch.call(this, t), t.result
        }
    }, handlers: function (t, e) {
        var i, n, s, a, o = [], r = e.delegateCount, l = t.target;
        if (r && l.nodeType && (!t.button || "click" !== t.type))for (; l != this; l = l.parentNode || this)if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
            for (s = [], a = 0; r > a; a++)n = e[a], i = n.selector + " ", void 0 === s[i] && (s[i] = n.needsContext ? ae(i, this).index(l) >= 0 : ae.find(i, this, null, [l]).length), s[i] && s.push(n);
            s.length && o.push({elem: l, handlers: s})
        }
        return r < e.length && o.push({elem: this, handlers: e.slice(r)}), o
    }, fix: function (t) {
        if (t[ae.expando])return t;
        var e, i, n, s = t.type, a = t, o = this.fixHooks[s];
        for (o || (this.fixHooks[s] = o = Le.test(s) ? this.mouseHooks : Ne.test(s) ? this.keyHooks : {}), n = o.props ? this.props.concat(o.props) : this.props, t = new ae.Event(a), e = n.length; e--;)i = n[e], t[i] = a[i];
        return t.target || (t.target = a.srcElement || me), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, o.filter ? o.filter(t, a) : t
    }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: {props: "char charCode key keyCode".split(" "), filter: function (t, e) {
        return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
    }}, mouseHooks: {props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (t, e) {
        var i, n, s, a = e.button, o = e.fromElement;
        return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || me, s = n.documentElement, i = n.body, t.pageX = e.clientX + (s && s.scrollLeft || i && i.scrollLeft || 0) - (s && s.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (s && s.scrollTop || i && i.scrollTop || 0) - (s && s.clientTop || i && i.clientTop || 0)), !t.relatedTarget && o && (t.relatedTarget = o === t.target ? e.toElement : o), t.which || void 0 === a || (t.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), t
    }}, special: {load: {noBubble: !0}, focus: {trigger: function () {
        if (this !== f() && this.focus)try {
            return this.focus(), !1
        } catch (t) {
        }
    }, delegateType: "focusin"}, blur: {trigger: function () {
        return this === f() && this.blur ? (this.blur(), !1) : void 0
    }, delegateType: "focusout"}, click: {trigger: function () {
        return ae.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
    }, _default: function (t) {
        return ae.nodeName(t.target, "a")
    }}, beforeunload: {postDispatch: function (t) {
        void 0 !== t.result && (t.originalEvent.returnValue = t.result)
    }}}, simulate: function (t, e, i, n) {
        var s = ae.extend(new ae.Event, i, {type: t, isSimulated: !0, originalEvent: {}});
        n ? ae.event.trigger(s, null, e) : ae.event.dispatch.call(e, s), s.isDefaultPrevented() && i.preventDefault()
    }}, ae.removeEvent = me.removeEventListener ? function (t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i, !1)
    } : function (t, e, i) {
        var n = "on" + e;
        t.detachEvent && (typeof t[n] === Ce && (t[n] = null), t.detachEvent(n, i))
    }, ae.Event = function (t, e) {
        return this instanceof ae.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && (t.returnValue === !1 || t.getPreventDefault && t.getPreventDefault()) ? h : p) : this.type = t, e && ae.extend(this, e), this.timeStamp = t && t.timeStamp || ae.now(), this[ae.expando] = !0, void 0) : new ae.Event(t, e)
    }, ae.Event.prototype = {isDefaultPrevented: p, isPropagationStopped: p, isImmediatePropagationStopped: p, preventDefault: function () {
        var t = this.originalEvent;
        this.isDefaultPrevented = h, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
    }, stopPropagation: function () {
        var t = this.originalEvent;
        this.isPropagationStopped = h, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
    }, stopImmediatePropagation: function () {
        this.isImmediatePropagationStopped = h, this.stopPropagation()
    }}, ae.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (t, e) {
        ae.event.special[t] = {delegateType: e, bindType: e, handle: function (t) {
            var i, n = this, s = t.relatedTarget, a = t.handleObj;
            return(!s || s !== n && !ae.contains(n, s)) && (t.type = a.origType, i = a.handler.apply(this, arguments), t.type = e), i
        }}
    }), ne.submitBubbles || (ae.event.special.submit = {setup: function () {
        return ae.nodeName(this, "form") ? !1 : (ae.event.add(this, "click._submit keypress._submit", function (t) {
            var e = t.target, i = ae.nodeName(e, "input") || ae.nodeName(e, "button") ? e.form : void 0;
            i && !ae._data(i, "submitBubbles") && (ae.event.add(i, "submit._submit", function (t) {
                t._submit_bubble = !0
            }), ae._data(i, "submitBubbles", !0))
        }), void 0)
    }, postDispatch: function (t) {
        t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && ae.event.simulate("submit", this.parentNode, t, !0))
    }, teardown: function () {
        return ae.nodeName(this, "form") ? !1 : (ae.event.remove(this, "._submit"), void 0)
    }}), ne.changeBubbles || (ae.event.special.change = {setup: function () {
        return qe.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ae.event.add(this, "propertychange._change", function (t) {
            "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
        }), ae.event.add(this, "click._change", function (t) {
            this._just_changed && !t.isTrigger && (this._just_changed = !1), ae.event.simulate("change", this, t, !0)
        })), !1) : (ae.event.add(this, "beforeactivate._change", function (t) {
            var e = t.target;
            qe.test(e.nodeName) && !ae._data(e, "changeBubbles") && (ae.event.add(e, "change._change", function (t) {
                !this.parentNode || t.isSimulated || t.isTrigger || ae.event.simulate("change", this.parentNode, t, !0)
            }), ae._data(e, "changeBubbles", !0))
        }), void 0)
    }, handle: function (t) {
        var e = t.target;
        return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
    }, teardown: function () {
        return ae.event.remove(this, "._change"), !qe.test(this.nodeName)
    }}), ne.focusinBubbles || ae.each({focus: "focusin", blur: "focusout"}, function (t, e) {
        var i = function (t) {
            ae.event.simulate(e, t.target, ae.event.fix(t), !0)
        };
        ae.event.special[e] = {setup: function () {
            var n = this.ownerDocument || this, s = ae._data(n, e);
            s || n.addEventListener(t, i, !0), ae._data(n, e, (s || 0) + 1)
        }, teardown: function () {
            var n = this.ownerDocument || this, s = ae._data(n, e) - 1;
            s ? ae._data(n, e, s) : (n.removeEventListener(t, i, !0), ae._removeData(n, e))
        }}
    }), ae.fn.extend({on: function (t, e, i, n, s) {
        var a, o;
        if ("object" == typeof t) {
            "string" != typeof e && (i = i || e, e = void 0);
            for (a in t)this.on(a, e, i, t[a], s);
            return this
        }
        if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), n === !1)n = p; else if (!n)return this;
        return 1 === s && (o = n, n = function (t) {
            return ae().off(t), o.apply(this, arguments)
        }, n.guid = o.guid || (o.guid = ae.guid++)), this.each(function () {
            ae.event.add(this, t, n, i, e)
        })
    }, one: function (t, e, i, n) {
        return this.on(t, e, i, n, 1)
    }, off: function (t, e, i) {
        var n, s;
        if (t && t.preventDefault && t.handleObj)return n = t.handleObj, ae(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
        if ("object" == typeof t) {
            for (s in t)this.off(s, e, t[s]);
            return this
        }
        return(e === !1 || "function" == typeof e) && (i = e, e = void 0), i === !1 && (i = p), this.each(function () {
            ae.event.remove(this, t, i, e)
        })
    }, trigger: function (t, e) {
        return this.each(function () {
            ae.event.trigger(t, e, this)
        })
    }, triggerHandler: function (t, e) {
        var i = this[0];
        return i ? ae.event.trigger(t, e, i, !0) : void 0
    }});
    var Oe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Me = / jQuery\d+="(?:null|\d+)"/g, $e = new RegExp("<(?:" + Oe + ")[\\s/>]", "i"), Re = /^\s+/, We = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Ie = /<([\w:]+)/, ze = /<tbody/i, Be = /<|&#?\w+;/, Ve = /<(?:script|style|link)/i, Ue = /checked\s*(?:[^=]|=\s*.checked.)/i, Ze = /^$|\/(?:java|ecma)script/i, Xe = /^true\/(.*)/, Qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Ke = {option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]}, Ge = m(me), Je = Ge.appendChild(me.createElement("div"));
    Ke.optgroup = Ke.option, Ke.tbody = Ke.tfoot = Ke.colgroup = Ke.caption = Ke.thead, Ke.th = Ke.td, ae.extend({clone: function (t, e, i) {
        var n, s, a, o, r, l = ae.contains(t.ownerDocument, t);
        if (ne.html5Clone || ae.isXMLDoc(t) || !$e.test("<" + t.nodeName + ">") ? a = t.cloneNode(!0) : (Je.innerHTML = t.outerHTML, Je.removeChild(a = Je.firstChild)), !(ne.noCloneEvent && ne.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ae.isXMLDoc(t)))for (n = g(a), r = g(t), o = 0; null != (s = r[o]); ++o)n[o] && k(s, n[o]);
        if (e)if (i)for (r = r || g(t), n = n || g(a), o = 0; null != (s = r[o]); o++)w(s, n[o]); else w(t, a);
        return n = g(a, "script"), n.length > 0 && x(n, !l && g(t, "script")), n = r = s = null, a
    }, buildFragment: function (t, e, i, n) {
        for (var s, a, o, r, l, c, d, u = t.length, h = m(e), p = [], f = 0; u > f; f++)if (a = t[f], a || 0 === a)if ("object" === ae.type(a))ae.merge(p, a.nodeType ? [a] : a); else if (Be.test(a)) {
            for (r = r || h.appendChild(e.createElement("div")), l = (Ie.exec(a) || ["", ""])[1].toLowerCase(), d = Ke[l] || Ke._default, r.innerHTML = d[1] + a.replace(We, "<$1></$2>") + d[2], s = d[0]; s--;)r = r.lastChild;
            if (!ne.leadingWhitespace && Re.test(a) && p.push(e.createTextNode(Re.exec(a)[0])), !ne.tbody)for (a = "table" !== l || ze.test(a) ? "<table>" !== d[1] || ze.test(a) ? 0 : r : r.firstChild, s = a && a.childNodes.length; s--;)ae.nodeName(c = a.childNodes[s], "tbody") && !c.childNodes.length && a.removeChild(c);
            for (ae.merge(p, r.childNodes), r.textContent = ""; r.firstChild;)r.removeChild(r.firstChild);
            r = h.lastChild
        } else p.push(e.createTextNode(a));
        for (r && h.removeChild(r), ne.appendChecked || ae.grep(g(p, "input"), v), f = 0; a = p[f++];)if ((!n || -1 === ae.inArray(a, n)) && (o = ae.contains(a.ownerDocument, a), r = g(h.appendChild(a), "script"), o && x(r), i))for (s = 0; a = r[s++];)Ze.test(a.type || "") && i.push(a);
        return r = null, h
    }, cleanData: function (t, e) {
        for (var i, n, s, a, o = 0, r = ae.expando, l = ae.cache, c = ne.deleteExpando, d = ae.event.special; null != (i = t[o]); o++)if ((e || ae.acceptData(i)) && (s = i[r], a = s && l[s])) {
            if (a.events)for (n in a.events)d[n] ? ae.event.remove(i, n) : ae.removeEvent(i, n, a.handle);
            l[s] && (delete l[s], c ? delete i[r] : typeof i.removeAttribute !== Ce ? i.removeAttribute(r) : i[r] = null, X.push(s))
        }
    }}), ae.fn.extend({text: function (t) {
        return Fe(this, function (t) {
            return void 0 === t ? ae.text(this) : this.empty().append((this[0] && this[0].ownerDocument || me).createTextNode(t))
        }, null, t, arguments.length)
    }, append: function () {
        return this.domManip(arguments, function (t) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var e = y(this, t);
                e.appendChild(t)
            }
        })
    }, prepend: function () {
        return this.domManip(arguments, function (t) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var e = y(this, t);
                e.insertBefore(t, e.firstChild)
            }
        })
    }, before: function () {
        return this.domManip(arguments, function (t) {
            this.parentNode && this.parentNode.insertBefore(t, this)
        })
    }, after: function () {
        return this.domManip(arguments, function (t) {
            this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
        })
    }, remove: function (t, e) {
        for (var i, n = t ? ae.filter(t, this) : this, s = 0; null != (i = n[s]); s++)e || 1 !== i.nodeType || ae.cleanData(g(i)), i.parentNode && (e && ae.contains(i.ownerDocument, i) && x(g(i, "script")), i.parentNode.removeChild(i));
        return this
    }, empty: function () {
        for (var t, e = 0; null != (t = this[e]); e++) {
            for (1 === t.nodeType && ae.cleanData(g(t, !1)); t.firstChild;)t.removeChild(t.firstChild);
            t.options && ae.nodeName(t, "select") && (t.options.length = 0)
        }
        return this
    }, clone: function (t, e) {
        return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function () {
            return ae.clone(this, t, e)
        })
    }, html: function (t) {
        return Fe(this, function (t) {
            var e = this[0] || {}, i = 0, n = this.length;
            if (void 0 === t)return 1 === e.nodeType ? e.innerHTML.replace(Me, "") : void 0;
            if (!("string" != typeof t || Ve.test(t) || !ne.htmlSerialize && $e.test(t) || !ne.leadingWhitespace && Re.test(t) || Ke[(Ie.exec(t) || ["", ""])[1].toLowerCase()])) {
                t = t.replace(We, "<$1></$2>");
                try {
                    for (; n > i; i++)e = this[i] || {}, 1 === e.nodeType && (ae.cleanData(g(e, !1)), e.innerHTML = t);
                    e = 0
                } catch (s) {
                }
            }
            e && this.empty().append(t)
        }, null, t, arguments.length)
    }, replaceWith: function () {
        var t = arguments[0];
        return this.domManip(arguments, function (e) {
            t = this.parentNode, ae.cleanData(g(this)), t && t.replaceChild(e, this)
        }), t && (t.length || t.nodeType) ? this : this.remove()
    }, detach: function (t) {
        return this.remove(t, !0)
    }, domManip: function (t, e) {
        t = K.apply([], t);
        var i, n, s, a, o, r, l = 0, c = this.length, d = this, u = c - 1, h = t[0], p = ae.isFunction(h);
        if (p || c > 1 && "string" == typeof h && !ne.checkClone && Ue.test(h))return this.each(function (i) {
            var n = d.eq(i);
            p && (t[0] = h.call(this, i, n.html())), n.domManip(t, e)
        });
        if (c && (r = ae.buildFragment(t, this[0].ownerDocument, !1, this), i = r.firstChild, 1 === r.childNodes.length && (r = i), i)) {
            for (a = ae.map(g(r, "script"), b), s = a.length; c > l; l++)n = r, l !== u && (n = ae.clone(n, !0, !0), s && ae.merge(a, g(n, "script"))), e.call(this[l], n, l);
            if (s)for (o = a[a.length - 1].ownerDocument, ae.map(a, _), l = 0; s > l; l++)n = a[l], Ze.test(n.type || "") && !ae._data(n, "globalEval") && ae.contains(o, n) && (n.src ? ae._evalUrl && ae._evalUrl(n.src) : ae.globalEval((n.text || n.textContent || n.innerHTML || "").replace(Qe, "")));
            r = i = null
        }
        return this
    }}), ae.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function (t, e) {
        ae.fn[t] = function (t) {
            for (var i, n = 0, s = [], a = ae(t), o = a.length - 1; o >= n; n++)i = n === o ? this : this.clone(!0), ae(a[n])[e](i), G.apply(s, i.get());
            return this.pushStack(s)
        }
    });
    var Ye, ti = {};
    !function () {
        var t, e, i = me.createElement("div"), n = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = i.getElementsByTagName("a")[0], t.style.cssText = "float:left;opacity:.5", ne.opacity = /^0.5/.test(t.style.opacity), ne.cssFloat = !!t.style.cssFloat, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === i.style.backgroundClip, t = i = null, ne.shrinkWrapBlocks = function () {
            var t, i, s, a;
            if (null == e) {
                if (t = me.getElementsByTagName("body")[0], !t)return;
                a = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", i = me.createElement("div"), s = me.createElement("div"), t.appendChild(i).appendChild(s), e = !1, typeof s.style.zoom !== Ce && (s.style.cssText = n + ";width:1px;padding:1px;zoom:1", s.innerHTML = "<div></div>", s.firstChild.style.width = "5px", e = 3 !== s.offsetWidth), t.removeChild(i), t = i = s = null
            }
            return e
        }
    }();
    var ei, ii, ni = /^margin/, si = new RegExp("^(" + Te + ")(?!px)[a-z%]+$", "i"), ai = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (ei = function (t) {
        return t.ownerDocument.defaultView.getComputedStyle(t, null)
    }, ii = function (t, e, i) {
        var n, s, a, o, r = t.style;
        return i = i || ei(t), o = i ? i.getPropertyValue(e) || i[e] : void 0, i && ("" !== o || ae.contains(t.ownerDocument, t) || (o = ae.style(t, e)), si.test(o) && ni.test(e) && (n = r.width, s = r.minWidth, a = r.maxWidth, r.minWidth = r.maxWidth = r.width = o, o = i.width, r.width = n, r.minWidth = s, r.maxWidth = a)), void 0 === o ? o : o + ""
    }) : me.documentElement.currentStyle && (ei = function (t) {
        return t.currentStyle
    }, ii = function (t, e, i) {
        var n, s, a, o, r = t.style;
        return i = i || ei(t), o = i ? i[e] : void 0, null == o && r && r[e] && (o = r[e]), si.test(o) && !ai.test(e) && (n = r.left, s = t.runtimeStyle, a = s && s.left, a && (s.left = t.currentStyle.left), r.left = "fontSize" === e ? "1em" : o, o = r.pixelLeft + "px", r.left = n, a && (s.left = a)), void 0 === o ? o : o + "" || "auto"
    }), function () {
        function e() {
            var e, i, n = me.getElementsByTagName("body")[0];
            n && (e = me.createElement("div"), i = me.createElement("div"), e.style.cssText = c, n.appendChild(e).appendChild(i), i.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", ae.swap(n, null != n.style.zoom ? {zoom: 1} : {}, function () {
                s = 4 === i.offsetWidth
            }), a = !0, o = !1, r = !0, t.getComputedStyle && (o = "1%" !== (t.getComputedStyle(i, null) || {}).top, a = "4px" === (t.getComputedStyle(i, null) || {width: "4px"}).width), n.removeChild(e), i = n = null)
        }

        var i, n, s, a, o, r, l = me.createElement("div"), c = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", d = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        l.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = l.getElementsByTagName("a")[0], i.style.cssText = "float:left;opacity:.5", ne.opacity = /^0.5/.test(i.style.opacity), ne.cssFloat = !!i.style.cssFloat, l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === l.style.backgroundClip, i = l = null, ae.extend(ne, {reliableHiddenOffsets: function () {
            if (null != n)return n;
            var t, e, i, s = me.createElement("div"), a = me.getElementsByTagName("body")[0];
            if (a)return s.setAttribute("className", "t"), s.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = me.createElement("div"), t.style.cssText = c, a.appendChild(t).appendChild(s), s.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = s.getElementsByTagName("td"), e[0].style.cssText = "padding:0;margin:0;border:0;display:none", i = 0 === e[0].offsetHeight, e[0].style.display = "", e[1].style.display = "none", n = i && 0 === e[0].offsetHeight, a.removeChild(t), s = a = null, n
        }, boxSizing: function () {
            return null == s && e(), s
        }, boxSizingReliable: function () {
            return null == a && e(), a
        }, pixelPosition: function () {
            return null == o && e(), o
        }, reliableMarginRight: function () {
            var e, i, n, s;
            if (null == r && t.getComputedStyle) {
                if (e = me.getElementsByTagName("body")[0], !e)return;
                i = me.createElement("div"), n = me.createElement("div"), i.style.cssText = c, e.appendChild(i).appendChild(n), s = n.appendChild(me.createElement("div")), s.style.cssText = n.style.cssText = d, s.style.marginRight = s.style.width = "0", n.style.width = "1px", r = !parseFloat((t.getComputedStyle(s, null) || {}).marginRight), e.removeChild(i)
            }
            return r
        }})
    }(), ae.swap = function (t, e, i, n) {
        var s, a, o = {};
        for (a in e)o[a] = t.style[a], t.style[a] = e[a];
        s = i.apply(t, n || []);
        for (a in e)t.style[a] = o[a];
        return s
    };
    var oi = /alpha\([^)]*\)/i, ri = /opacity\s*=\s*([^)]*)/, li = /^(none|table(?!-c[ea]).+)/, ci = new RegExp("^(" + Te + ")(.*)$", "i"), di = new RegExp("^([+-])=(" + Te + ")", "i"), ui = {position: "absolute", visibility: "hidden", display: "block"}, hi = {letterSpacing: 0, fontWeight: 400}, pi = ["Webkit", "O", "Moz", "ms"];
    ae.extend({cssHooks: {opacity: {get: function (t, e) {
        if (e) {
            var i = ii(t, "opacity");
            return"" === i ? "1" : i
        }
    }}}, cssNumber: {columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0}, cssProps: {"float": ne.cssFloat ? "cssFloat" : "styleFloat"}, style: function (t, e, i, n) {
        if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
            var s, a, o, r = ae.camelCase(e), l = t.style;
            if (e = ae.cssProps[r] || (ae.cssProps[r] = T(l, r)), o = ae.cssHooks[e] || ae.cssHooks[r], void 0 === i)return o && "get"in o && void 0 !== (s = o.get(t, !1, n)) ? s : l[e];
            if (a = typeof i, "string" === a && (s = di.exec(i)) && (i = (s[1] + 1) * s[2] + parseFloat(ae.css(t, e)), a = "number"), null != i && i === i && ("number" !== a || ae.cssNumber[r] || (i += "px"), ne.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(o && "set"in o && void 0 === (i = o.set(t, i, n)))))try {
                l[e] = "", l[e] = i
            } catch (c) {
            }
        }
    }, css: function (t, e, i, n) {
        var s, a, o, r = ae.camelCase(e);
        return e = ae.cssProps[r] || (ae.cssProps[r] = T(t.style, r)), o = ae.cssHooks[e] || ae.cssHooks[r], o && "get"in o && (a = o.get(t, !0, i)), void 0 === a && (a = ii(t, e, n)), "normal" === a && e in hi && (a = hi[e]), "" === i || i ? (s = parseFloat(a), i === !0 || ae.isNumeric(s) ? s || 0 : a) : a
    }}), ae.each(["height", "width"], function (t, e) {
        ae.cssHooks[e] = {get: function (t, i, n) {
            return i ? 0 === t.offsetWidth && li.test(ae.css(t, "display")) ? ae.swap(t, ui, function () {
                return A(t, e, n)
            }) : A(t, e, n) : void 0
        }, set: function (t, i, n) {
            var s = n && ei(t);
            return P(t, i, n ? F(t, e, n, ne.boxSizing() && "border-box" === ae.css(t, "boxSizing", !1, s), s) : 0)
        }}
    }), ne.opacity || (ae.cssHooks.opacity = {get: function (t, e) {
        return ri.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
    }, set: function (t, e) {
        var i = t.style, n = t.currentStyle, s = ae.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "", a = n && n.filter || i.filter || "";
        i.zoom = 1, (e >= 1 || "" === e) && "" === ae.trim(a.replace(oi, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === e || n && !n.filter) || (i.filter = oi.test(a) ? a.replace(oi, s) : a + " " + s)
    }}), ae.cssHooks.marginRight = S(ne.reliableMarginRight, function (t, e) {
        return e ? ae.swap(t, {display: "inline-block"}, ii, [t, "marginRight"]) : void 0
    }), ae.each({margin: "", padding: "", border: "Width"}, function (t, e) {
        ae.cssHooks[t + e] = {expand: function (i) {
            for (var n = 0, s = {}, a = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++)s[t + Ee[n] + e] = a[n] || a[n - 2] || a[0];
            return s
        }}, ni.test(t) || (ae.cssHooks[t + e].set = P)
    }), ae.fn.extend({css: function (t, e) {
        return Fe(this, function (t, e, i) {
            var n, s, a = {}, o = 0;
            if (ae.isArray(e)) {
                for (n = ei(t), s = e.length; s > o; o++)a[e[o]] = ae.css(t, e[o], !1, n);
                return a
            }
            return void 0 !== i ? ae.style(t, e, i) : ae.css(t, e)
        }, t, e, arguments.length > 1)
    }, show: function () {
        return E(this, !0)
    }, hide: function () {
        return E(this)
    }, toggle: function (t) {
        return"boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
            Pe(this) ? ae(this).show() : ae(this).hide()
        })
    }}), ae.Tween = q, q.prototype = {constructor: q, init: function (t, e, i, n, s, a) {
        this.elem = t, this.prop = i, this.easing = s || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = a || (ae.cssNumber[i] ? "" : "px")
    }, cur: function () {
        var t = q.propHooks[this.prop];
        return t && t.get ? t.get(this) : q.propHooks._default.get(this)
    }, run: function (t) {
        var e, i = q.propHooks[this.prop];
        return this.pos = e = this.options.duration ? ae.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : q.propHooks._default.set(this), this
    }}, q.prototype.init.prototype = q.prototype, q.propHooks = {_default: {get: function (t) {
        var e;
        return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = ae.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
    }, set: function (t) {
        ae.fx.step[t.prop] ? ae.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[ae.cssProps[t.prop]] || ae.cssHooks[t.prop]) ? ae.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
    }}}, q.propHooks.scrollTop = q.propHooks.scrollLeft = {set: function (t) {
        t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
    }}, ae.easing = {linear: function (t) {
        return t
    }, swing: function (t) {
        return.5 - Math.cos(t * Math.PI) / 2
    }}, ae.fx = q.prototype.init, ae.fx.step = {};
    var fi, mi, gi = /^(?:toggle|show|hide)$/, vi = new RegExp("^(?:([+-])=|)(" + Te + ")([a-z%]*)$", "i"), yi = /queueHooks$/, bi = [H], _i = {"*": [function (t, e) {
        var i = this.createTween(t, e), n = i.cur(), s = vi.exec(e), a = s && s[3] || (ae.cssNumber[t] ? "" : "px"), o = (ae.cssNumber[t] || "px" !== a && +n) && vi.exec(ae.css(i.elem, t)), r = 1, l = 20;
        if (o && o[3] !== a) {
            a = a || o[3], s = s || [], o = +n || 1;
            do r = r || ".5", o /= r, ae.style(i.elem, t, o + a); while (r !== (r = i.cur() / n) && 1 !== r && --l)
        }
        return s && (o = i.start = +o || +n || 0, i.unit = a, i.end = s[1] ? o + (s[1] + 1) * s[2] : +s[2]), i
    }]};
    ae.Animation = ae.extend(M, {tweener: function (t, e) {
        ae.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
        for (var i, n = 0, s = t.length; s > n; n++)i = t[n], _i[i] = _i[i] || [], _i[i].unshift(e)
    }, prefilter: function (t, e) {
        e ? bi.unshift(t) : bi.push(t)
    }}), ae.speed = function (t, e, i) {
        var n = t && "object" == typeof t ? ae.extend({}, t) : {complete: i || !i && e || ae.isFunction(t) && t, duration: t, easing: i && e || e && !ae.isFunction(e) && e};
        return n.duration = ae.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in ae.fx.speeds ? ae.fx.speeds[n.duration] : ae.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function () {
            ae.isFunction(n.old) && n.old.call(this), n.queue && ae.dequeue(this, n.queue)
        }, n
    }, ae.fn.extend({fadeTo: function (t, e, i, n) {
        return this.filter(Pe).css("opacity", 0).show().end().animate({opacity: e}, t, i, n)
    }, animate: function (t, e, i, n) {
        var s = ae.isEmptyObject(t), a = ae.speed(e, i, n), o = function () {
            var e = M(this, ae.extend({}, t), a);
            (s || ae._data(this, "finish")) && e.stop(!0)
        };
        return o.finish = o, s || a.queue === !1 ? this.each(o) : this.queue(a.queue, o)
    }, stop: function (t, e, i) {
        var n = function (t) {
            var e = t.stop;
            delete t.stop, e(i)
        };
        return"string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
            var e = !0, s = null != t && t + "queueHooks", a = ae.timers, o = ae._data(this);
            if (s)o[s] && o[s].stop && n(o[s]); else for (s in o)o[s] && o[s].stop && yi.test(s) && n(o[s]);
            for (s = a.length; s--;)a[s].elem !== this || null != t && a[s].queue !== t || (a[s].anim.stop(i), e = !1, a.splice(s, 1));
            (e || !i) && ae.dequeue(this, t)
        })
    }, finish: function (t) {
        return t !== !1 && (t = t || "fx"), this.each(function () {
            var e, i = ae._data(this), n = i[t + "queue"], s = i[t + "queueHooks"], a = ae.timers, o = n ? n.length : 0;
            for (i.finish = !0, ae.queue(this, t, []), s && s.stop && s.stop.call(this, !0), e = a.length; e--;)a[e].elem === this && a[e].queue === t && (a[e].anim.stop(!0), a.splice(e, 1));
            for (e = 0; o > e; e++)n[e] && n[e].finish && n[e].finish.call(this);
            delete i.finish
        })
    }}), ae.each(["toggle", "show", "hide"], function (t, e) {
        var i = ae.fn[e];
        ae.fn[e] = function (t, n, s) {
            return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(L(e, !0), t, n, s)
        }
    }), ae.each({slideDown: L("show"), slideUp: L("hide"), slideToggle: L("toggle"), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function (t, e) {
        ae.fn[t] = function (t, i, n) {
            return this.animate(e, t, i, n)
        }
    }), ae.timers = [], ae.fx.tick = function () {
        var t, e = ae.timers, i = 0;
        for (fi = ae.now(); i < e.length; i++)t = e[i], t() || e[i] !== t || e.splice(i--, 1);
        e.length || ae.fx.stop(), fi = void 0
    }, ae.fx.timer = function (t) {
        ae.timers.push(t), t() ? ae.fx.start() : ae.timers.pop()
    }, ae.fx.interval = 13, ae.fx.start = function () {
        mi || (mi = setInterval(ae.fx.tick, ae.fx.interval))
    }, ae.fx.stop = function () {
        clearInterval(mi), mi = null
    }, ae.fx.speeds = {slow: 600, fast: 200, _default: 400}, ae.fn.delay = function (t, e) {
        return t = ae.fx ? ae.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, i) {
            var n = setTimeout(e, t);
            i.stop = function () {
                clearTimeout(n)
            }
        })
    }, function () {
        var t, e, i, n, s = me.createElement("div");
        s.setAttribute("className", "t"), s.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = s.getElementsByTagName("a")[0], i = me.createElement("select"), n = i.appendChild(me.createElement("option")), e = s.getElementsByTagName("input")[0], t.style.cssText = "top:1px", ne.getSetAttribute = "t" !== s.className, ne.style = /top/.test(t.getAttribute("style")), ne.hrefNormalized = "/a" === t.getAttribute("href"), ne.checkOn = !!e.value, ne.optSelected = n.selected, ne.enctype = !!me.createElement("form").enctype, i.disabled = !0, ne.optDisabled = !n.disabled, e = me.createElement("input"), e.setAttribute("value", ""), ne.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ne.radioValue = "t" === e.value, t = e = i = n = s = null
    }();
    var xi = /\r/g;
    ae.fn.extend({val: function (t) {
        var e, i, n, s = this[0];
        {
            if (arguments.length)return n = ae.isFunction(t), this.each(function (i) {
                var s;
                1 === this.nodeType && (s = n ? t.call(this, i, ae(this).val()) : t, null == s ? s = "" : "number" == typeof s ? s += "" : ae.isArray(s) && (s = ae.map(s, function (t) {
                    return null == t ? "" : t + ""
                })), e = ae.valHooks[this.type] || ae.valHooks[this.nodeName.toLowerCase()], e && "set"in e && void 0 !== e.set(this, s, "value") || (this.value = s))
            });
            if (s)return e = ae.valHooks[s.type] || ae.valHooks[s.nodeName.toLowerCase()], e && "get"in e && void 0 !== (i = e.get(s, "value")) ? i : (i = s.value, "string" == typeof i ? i.replace(xi, "") : null == i ? "" : i)
        }
    }}), ae.extend({valHooks: {option: {get: function (t) {
        var e = ae.find.attr(t, "value");
        return null != e ? e : ae.text(t)
    }}, select: {get: function (t) {
        for (var e, i, n = t.options, s = t.selectedIndex, a = "select-one" === t.type || 0 > s, o = a ? null : [], r = a ? s + 1 : n.length, l = 0 > s ? r : a ? s : 0; r > l; l++)if (i = n[l], !(!i.selected && l !== s || (ne.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && ae.nodeName(i.parentNode, "optgroup"))) {
            if (e = ae(i).val(), a)return e;
            o.push(e)
        }
        return o
    }, set: function (t, e) {
        for (var i, n, s = t.options, a = ae.makeArray(e), o = s.length; o--;)if (n = s[o], ae.inArray(ae.valHooks.option.get(n), a) >= 0)try {
            n.selected = i = !0
        } catch (r) {
            n.scrollHeight
        } else n.selected = !1;
        return i || (t.selectedIndex = -1), s
    }}}}), ae.each(["radio", "checkbox"], function () {
        ae.valHooks[this] = {set: function (t, e) {
            return ae.isArray(e) ? t.checked = ae.inArray(ae(t).val(), e) >= 0 : void 0
        }}, ne.checkOn || (ae.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var wi, ki, Ci = ae.expr.attrHandle, ji = /^(?:checked|selected)$/i, Si = ne.getSetAttribute, Ti = ne.input;
    ae.fn.extend({attr: function (t, e) {
        return Fe(this, ae.attr, t, e, arguments.length > 1)
    }, removeAttr: function (t) {
        return this.each(function () {
            ae.removeAttr(this, t)
        })
    }}), ae.extend({attr: function (t, e, i) {
        var n, s, a = t.nodeType;
        if (t && 3 !== a && 8 !== a && 2 !== a)return typeof t.getAttribute === Ce ? ae.prop(t, e, i) : (1 === a && ae.isXMLDoc(t) || (e = e.toLowerCase(), n = ae.attrHooks[e] || (ae.expr.match.bool.test(e) ? ki : wi)), void 0 === i ? n && "get"in n && null !== (s = n.get(t, e)) ? s : (s = ae.find.attr(t, e), null == s ? void 0 : s) : null !== i ? n && "set"in n && void 0 !== (s = n.set(t, i, e)) ? s : (t.setAttribute(e, i + ""), i) : (ae.removeAttr(t, e), void 0))
    }, removeAttr: function (t, e) {
        var i, n, s = 0, a = e && e.match(_e);
        if (a && 1 === t.nodeType)for (; i = a[s++];)n = ae.propFix[i] || i, ae.expr.match.bool.test(i) ? Ti && Si || !ji.test(i) ? t[n] = !1 : t[ae.camelCase("default-" + i)] = t[n] = !1 : ae.attr(t, i, ""), t.removeAttribute(Si ? i : n)
    }, attrHooks: {type: {set: function (t, e) {
        if (!ne.radioValue && "radio" === e && ae.nodeName(t, "input")) {
            var i = t.value;
            return t.setAttribute("type", e), i && (t.value = i), e
        }
    }}}}), ki = {set: function (t, e, i) {
        return e === !1 ? ae.removeAttr(t, i) : Ti && Si || !ji.test(i) ? t.setAttribute(!Si && ae.propFix[i] || i, i) : t[ae.camelCase("default-" + i)] = t[i] = !0, i
    }}, ae.each(ae.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var i = Ci[e] || ae.find.attr;
        Ci[e] = Ti && Si || !ji.test(e) ? function (t, e, n) {
            var s, a;
            return n || (a = Ci[e], Ci[e] = s, s = null != i(t, e, n) ? e.toLowerCase() : null, Ci[e] = a), s
        } : function (t, e, i) {
            return i ? void 0 : t[ae.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }), Ti && Si || (ae.attrHooks.value = {set: function (t, e, i) {
        return ae.nodeName(t, "input") ? (t.defaultValue = e, void 0) : wi && wi.set(t, e, i)
    }}), Si || (wi = {set: function (t, e, i) {
        var n = t.getAttributeNode(i);
        return n || t.setAttributeNode(n = t.ownerDocument.createAttribute(i)), n.value = e += "", "value" === i || e === t.getAttribute(i) ? e : void 0
    }}, Ci.id = Ci.name = Ci.coords = function (t, e, i) {
        var n;
        return i ? void 0 : (n = t.getAttributeNode(e)) && "" !== n.value ? n.value : null
    }, ae.valHooks.button = {get: function (t, e) {
        var i = t.getAttributeNode(e);
        return i && i.specified ? i.value : void 0
    }, set: wi.set}, ae.attrHooks.contenteditable = {set: function (t, e, i) {
        wi.set(t, "" === e ? !1 : e, i)
    }}, ae.each(["width", "height"], function (t, e) {
        ae.attrHooks[e] = {set: function (t, i) {
            return"" === i ? (t.setAttribute(e, "auto"), i) : void 0
        }}
    })), ne.style || (ae.attrHooks.style = {get: function (t) {
        return t.style.cssText || void 0
    }, set: function (t, e) {
        return t.style.cssText = e + ""
    }});
    var Ei = /^(?:input|select|textarea|button|object)$/i, Pi = /^(?:a|area)$/i;
    ae.fn.extend({prop: function (t, e) {
        return Fe(this, ae.prop, t, e, arguments.length > 1)
    }, removeProp: function (t) {
        return t = ae.propFix[t] || t, this.each(function () {
            try {
                this[t] = void 0, delete this[t]
            } catch (e) {
            }
        })
    }}), ae.extend({propFix: {"for": "htmlFor", "class": "className"}, prop: function (t, e, i) {
        var n, s, a, o = t.nodeType;
        if (t && 3 !== o && 8 !== o && 2 !== o)return a = 1 !== o || !ae.isXMLDoc(t), a && (e = ae.propFix[e] || e, s = ae.propHooks[e]), void 0 !== i ? s && "set"in s && void 0 !== (n = s.set(t, i, e)) ? n : t[e] = i : s && "get"in s && null !== (n = s.get(t, e)) ? n : t[e]
    }, propHooks: {tabIndex: {get: function (t) {
        var e = ae.find.attr(t, "tabindex");
        return e ? parseInt(e, 10) : Ei.test(t.nodeName) || Pi.test(t.nodeName) && t.href ? 0 : -1
    }}}}), ne.hrefNormalized || ae.each(["href", "src"], function (t, e) {
        ae.propHooks[e] = {get: function (t) {
            return t.getAttribute(e, 4)
        }}
    }), ne.optSelected || (ae.propHooks.selected = {get: function (t) {
        var e = t.parentNode;
        return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
    }}), ae.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        ae.propFix[this.toLowerCase()] = this
    }), ne.enctype || (ae.propFix.enctype = "encoding");
    var Fi = /[\t\r\n\f]/g;
    ae.fn.extend({addClass: function (t) {
        var e, i, n, s, a, o, r = 0, l = this.length, c = "string" == typeof t && t;
        if (ae.isFunction(t))return this.each(function (e) {
            ae(this).addClass(t.call(this, e, this.className))
        });
        if (c)for (e = (t || "").match(_e) || []; l > r; r++)if (i = this[r], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Fi, " ") : " ")) {
            for (a = 0; s = e[a++];)n.indexOf(" " + s + " ") < 0 && (n += s + " ");
            o = ae.trim(n), i.className !== o && (i.className = o)
        }
        return this
    }, removeClass: function (t) {
        var e, i, n, s, a, o, r = 0, l = this.length, c = 0 === arguments.length || "string" == typeof t && t;
        if (ae.isFunction(t))return this.each(function (e) {
            ae(this).removeClass(t.call(this, e, this.className))
        });
        if (c)for (e = (t || "").match(_e) || []; l > r; r++)if (i = this[r], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Fi, " ") : "")) {
            for (a = 0; s = e[a++];)for (; n.indexOf(" " + s + " ") >= 0;)n = n.replace(" " + s + " ", " ");
            o = t ? ae.trim(n) : "", i.className !== o && (i.className = o)
        }
        return this
    }, toggleClass: function (t, e) {
        var i = typeof t;
        return"boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : ae.isFunction(t) ? this.each(function (i) {
            ae(this).toggleClass(t.call(this, i, this.className, e), e)
        }) : this.each(function () {
            if ("string" === i)for (var e, n = 0, s = ae(this), a = t.match(_e) || []; e = a[n++];)s.hasClass(e) ? s.removeClass(e) : s.addClass(e); else(i === Ce || "boolean" === i) && (this.className && ae._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : ae._data(this, "__className__") || "")
        })
    }, hasClass: function (t) {
        for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++)if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(Fi, " ").indexOf(e) >= 0)return!0;
        return!1
    }}), ae.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
        ae.fn[e] = function (t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    }), ae.fn.extend({hover: function (t, e) {
        return this.mouseenter(t).mouseleave(e || t)
    }, bind: function (t, e, i) {
        return this.on(t, null, e, i)
    }, unbind: function (t, e) {
        return this.off(t, null, e)
    }, delegate: function (t, e, i, n) {
        return this.on(e, t, i, n)
    }, undelegate: function (t, e, i) {
        return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
    }});
    var Ai = ae.now(), qi = /\?/, Ni = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    ae.parseJSON = function (e) {
        if (t.JSON && t.JSON.parse)return t.JSON.parse(e + "");
        var i, n = null, s = ae.trim(e + "");
        return s && !ae.trim(s.replace(Ni, function (t, e, s, a) {
            return i && e && (n = 0), 0 === n ? t : (i = s || e, n += !a - !s, "")
        })) ? Function("return " + s)() : ae.error("Invalid JSON: " + e)
    }, ae.parseXML = function (e) {
        var i, n;
        if (!e || "string" != typeof e)return null;
        try {
            t.DOMParser ? (n = new DOMParser, i = n.parseFromString(e, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(e))
        } catch (s) {
            i = void 0
        }
        return i && i.documentElement && !i.getElementsByTagName("parsererror").length || ae.error("Invalid XML: " + e), i
    };
    var Li, Di, Hi = /#.*$/, Oi = /([?&])_=[^&]*/, Mi = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, $i = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Ri = /^(?:GET|HEAD)$/, Wi = /^\/\//, Ii = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, zi = {}, Bi = {}, Vi = "*/".concat("*");
    try {
        Di = location.href
    } catch (Ui) {
        Di = me.createElement("a"), Di.href = "", Di = Di.href
    }
    Li = Ii.exec(Di.toLowerCase()) || [], ae.extend({active: 0, lastModified: {}, etag: {}, ajaxSettings: {url: Di, type: "GET", isLocal: $i.test(Li[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: {"*": Vi, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript"}, contents: {xml: /xml/, html: /html/, json: /json/}, responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"}, converters: {"* text": String, "text html": !0, "text json": ae.parseJSON, "text xml": ae.parseXML}, flatOptions: {url: !0, context: !0}}, ajaxSetup: function (t, e) {
        return e ? W(W(t, ae.ajaxSettings), e) : W(ae.ajaxSettings, t)
    }, ajaxPrefilter: $(zi), ajaxTransport: $(Bi), ajax: function (t, e) {
        function i(t, e, i, n) {
            var s, d, v, y, _, w = e;
            2 !== b && (b = 2, r && clearTimeout(r), c = void 0, o = n || "", x.readyState = t > 0 ? 4 : 0, s = t >= 200 && 300 > t || 304 === t, i && (y = I(u, x, i)), y = z(u, y, x, s), s ? (u.ifModified && (_ = x.getResponseHeader("Last-Modified"), _ && (ae.lastModified[a] = _), _ = x.getResponseHeader("etag"), _ && (ae.etag[a] = _)), 204 === t || "HEAD" === u.type ? w = "nocontent" : 304 === t ? w = "notmodified" : (w = y.state, d = y.data, v = y.error, s = !v)) : (v = w, (t || !w) && (w = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (e || w) + "", s ? f.resolveWith(h, [d, w, x]) : f.rejectWith(h, [x, w, v]), x.statusCode(g), g = void 0, l && p.trigger(s ? "ajaxSuccess" : "ajaxError", [x, u, s ? d : v]), m.fireWith(h, [x, w]), l && (p.trigger("ajaxComplete", [x, u]), --ae.active || ae.event.trigger("ajaxStop")))
        }

        "object" == typeof t && (e = t, t = void 0), e = e || {};
        var n, s, a, o, r, l, c, d, u = ae.ajaxSetup({}, e), h = u.context || u, p = u.context && (h.nodeType || h.jquery) ? ae(h) : ae.event, f = ae.Deferred(), m = ae.Callbacks("once memory"), g = u.statusCode || {}, v = {}, y = {}, b = 0, _ = "canceled", x = {readyState: 0, getResponseHeader: function (t) {
            var e;
            if (2 === b) {
                if (!d)for (d = {}; e = Mi.exec(o);)d[e[1].toLowerCase()] = e[2];
                e = d[t.toLowerCase()]
            }
            return null == e ? null : e
        }, getAllResponseHeaders: function () {
            return 2 === b ? o : null
        }, setRequestHeader: function (t, e) {
            var i = t.toLowerCase();
            return b || (t = y[i] = y[i] || t, v[t] = e), this
        }, overrideMimeType: function (t) {
            return b || (u.mimeType = t), this
        }, statusCode: function (t) {
            var e;
            if (t)if (2 > b)for (e in t)g[e] = [g[e], t[e]]; else x.always(t[x.status]);
            return this
        }, abort: function (t) {
            var e = t || _;
            return c && c.abort(e), i(0, e), this
        }};
        if (f.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, u.url = ((t || u.url || Di) + "").replace(Hi, "").replace(Wi, Li[1] + "//"), u.type = e.method || e.type || u.method || u.type, u.dataTypes = ae.trim(u.dataType || "*").toLowerCase().match(_e) || [""], null == u.crossDomain && (n = Ii.exec(u.url.toLowerCase()), u.crossDomain = !(!n || n[1] === Li[1] && n[2] === Li[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (Li[3] || ("http:" === Li[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = ae.param(u.data, u.traditional)), R(zi, u, e, x), 2 === b)return x;
        l = u.global, l && 0 === ae.active++ && ae.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !Ri.test(u.type), a = u.url, u.hasContent || (u.data && (a = u.url += (qi.test(a) ? "&" : "?") + u.data, delete u.data), u.cache === !1 && (u.url = Oi.test(a) ? a.replace(Oi, "$1_=" + Ai++) : a + (qi.test(a) ? "&" : "?") + "_=" + Ai++)), u.ifModified && (ae.lastModified[a] && x.setRequestHeader("If-Modified-Since", ae.lastModified[a]), ae.etag[a] && x.setRequestHeader("If-None-Match", ae.etag[a])), (u.data && u.hasContent && u.contentType !== !1 || e.contentType) && x.setRequestHeader("Content-Type", u.contentType), x.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + Vi + "; q=0.01" : "") : u.accepts["*"]);
        for (s in u.headers)x.setRequestHeader(s, u.headers[s]);
        if (u.beforeSend && (u.beforeSend.call(h, x, u) === !1 || 2 === b))return x.abort();
        _ = "abort";
        for (s in{success: 1, error: 1, complete: 1})x[s](u[s]);
        if (c = R(Bi, u, e, x)) {
            x.readyState = 1, l && p.trigger("ajaxSend", [x, u]), u.async && u.timeout > 0 && (r = setTimeout(function () {
                x.abort("timeout")
            }, u.timeout));
            try {
                b = 1, c.send(v, i)
            } catch (w) {
                if (!(2 > b))throw w;
                i(-1, w)
            }
        } else i(-1, "No Transport");
        return x
    }, getJSON: function (t, e, i) {
        return ae.get(t, e, i, "json")
    }, getScript: function (t, e) {
        return ae.get(t, void 0, e, "script")
    }}), ae.each(["get", "post"], function (t, e) {
        ae[e] = function (t, i, n, s) {
            return ae.isFunction(i) && (s = s || n, n = i, i = void 0), ae.ajax({url: t, type: e, dataType: s, data: i, success: n})
        }
    }), ae.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        ae.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), ae._evalUrl = function (t) {
        return ae.ajax({url: t, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }, ae.fn.extend({wrapAll: function (t) {
        if (ae.isFunction(t))return this.each(function (e) {
            ae(this).wrapAll(t.call(this, e))
        });
        if (this[0]) {
            var e = ae(t, this[0].ownerDocument).eq(0).clone(!0);
            this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;)t = t.firstChild;
                return t
            }).append(this)
        }
        return this
    }, wrapInner: function (t) {
        return ae.isFunction(t) ? this.each(function (e) {
            ae(this).wrapInner(t.call(this, e))
        }) : this.each(function () {
            var e = ae(this), i = e.contents();
            i.length ? i.wrapAll(t) : e.append(t)
        })
    }, wrap: function (t) {
        var e = ae.isFunction(t);
        return this.each(function (i) {
            ae(this).wrapAll(e ? t.call(this, i) : t)
        })
    }, unwrap: function () {
        return this.parent().each(function () {
            ae.nodeName(this, "body") || ae(this).replaceWith(this.childNodes)
        }).end()
    }}), ae.expr.filters.hidden = function (t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !ne.reliableHiddenOffsets() && "none" === (t.style && t.style.display || ae.css(t, "display"))
    }, ae.expr.filters.visible = function (t) {
        return!ae.expr.filters.hidden(t)
    };
    var Zi = /%20/g, Xi = /\[\]$/, Qi = /\r?\n/g, Ki = /^(?:submit|button|image|reset|file)$/i, Gi = /^(?:input|select|textarea|keygen)/i;
    ae.param = function (t, e) {
        var i, n = [], s = function (t, e) {
            e = ae.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
        };
        if (void 0 === e && (e = ae.ajaxSettings && ae.ajaxSettings.traditional), ae.isArray(t) || t.jquery && !ae.isPlainObject(t))ae.each(t, function () {
            s(this.name, this.value)
        }); else for (i in t)B(i, t[i], e, s);
        return n.join("&").replace(Zi, "+")
    }, ae.fn.extend({serialize: function () {
        return ae.param(this.serializeArray())
    }, serializeArray: function () {
        return this.map(function () {
            var t = ae.prop(this, "elements");
            return t ? ae.makeArray(t) : this
        }).filter(function () {
            var t = this.type;
            return this.name && !ae(this).is(":disabled") && Gi.test(this.nodeName) && !Ki.test(t) && (this.checked || !Ae.test(t))
        }).map(function (t, e) {
            var i = ae(this).val();
            return null == i ? null : ae.isArray(i) ? ae.map(i, function (t) {
                return{name: e.name, value: t.replace(Qi, "\r\n")}
            }) : {name: e.name, value: i.replace(Qi, "\r\n")}
        }).get()
    }}), ae.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function () {
        return!this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && V() || U()
    } : V;
    var Ji = 0, Yi = {}, tn = ae.ajaxSettings.xhr();
    t.ActiveXObject && ae(t).on("unload", function () {
        for (var t in Yi)Yi[t](void 0, !0)
    }), ne.cors = !!tn && "withCredentials"in tn, tn = ne.ajax = !!tn, tn && ae.ajaxTransport(function (t) {
        if (!t.crossDomain || ne.cors) {
            var e;
            return{send: function (i, n) {
                var s, a = t.xhr(), o = ++Ji;
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)for (s in t.xhrFields)a[s] = t.xhrFields[s];
                t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (s in i)void 0 !== i[s] && a.setRequestHeader(s, i[s] + "");
                a.send(t.hasContent && t.data || null), e = function (i, s) {
                    var r, l, c;
                    if (e && (s || 4 === a.readyState))if (delete Yi[o], e = void 0, a.onreadystatechange = ae.noop, s)4 !== a.readyState && a.abort(); else {
                        c = {}, r = a.status, "string" == typeof a.responseText && (c.text = a.responseText);
                        try {
                            l = a.statusText
                        } catch (d) {
                            l = ""
                        }
                        r || !t.isLocal || t.crossDomain ? 1223 === r && (r = 204) : r = c.text ? 200 : 404
                    }
                    c && n(r, l, c, a.getAllResponseHeaders())
                }, t.async ? 4 === a.readyState ? setTimeout(e) : a.onreadystatechange = Yi[o] = e : e()
            }, abort: function () {
                e && e(void 0, !0)
            }}
        }
    }), ae.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /(?:java|ecma)script/}, converters: {"text script": function (t) {
        return ae.globalEval(t), t
    }}}), ae.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), ae.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
            var e, i = me.head || ae("head")[0] || me.documentElement;
            return{send: function (n, s) {
                e = me.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function (t, i) {
                    (i || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, i || s(200, "success"))
                }, i.insertBefore(e, i.firstChild)
            }, abort: function () {
                e && e.onload(void 0, !0)
            }}
        }
    });
    var en = [], nn = /(=)\?(?=&|$)|\?\?/;
    ae.ajaxSetup({jsonp: "callback", jsonpCallback: function () {
        var t = en.pop() || ae.expando + "_" + Ai++;
        return this[t] = !0, t
    }}), ae.ajaxPrefilter("json jsonp", function (e, i, n) {
        var s, a, o, r = e.jsonp !== !1 && (nn.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && nn.test(e.data) && "data");
        return r || "jsonp" === e.dataTypes[0] ? (s = e.jsonpCallback = ae.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, r ? e[r] = e[r].replace(nn, "$1" + s) : e.jsonp !== !1 && (e.url += (qi.test(e.url) ? "&" : "?") + e.jsonp + "=" + s), e.converters["script json"] = function () {
            return o || ae.error(s + " was not called"), o[0]
        }, e.dataTypes[0] = "json", a = t[s], t[s] = function () {
            o = arguments
        }, n.always(function () {
            t[s] = a, e[s] && (e.jsonpCallback = i.jsonpCallback, en.push(s)), o && ae.isFunction(a) && a(o[0]), o = a = void 0
        }), "script") : void 0
    }), ae.parseHTML = function (t, e, i) {
        if (!t || "string" != typeof t)return null;
        "boolean" == typeof e && (i = e, e = !1), e = e || me;
        var n = he.exec(t), s = !i && [];
        return n ? [e.createElement(n[1])] : (n = ae.buildFragment([t], e, s), s && s.length && ae(s).remove(), ae.merge([], n.childNodes))
    };
    var sn = ae.fn.load;
    ae.fn.load = function (t, e, i) {
        if ("string" != typeof t && sn)return sn.apply(this, arguments);
        var n, s, a, o = this, r = t.indexOf(" ");
        return r >= 0 && (n = t.slice(r, t.length), t = t.slice(0, r)), ae.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (a = "POST"), o.length > 0 && ae.ajax({url: t, type: a, dataType: "html", data: e}).done(function (t) {
            s = arguments, o.html(n ? ae("<div>").append(ae.parseHTML(t)).find(n) : t)
        }).complete(i && function (t, e) {
            o.each(i, s || [t.responseText, e, t])
        }), this
    }, ae.expr.filters.animated = function (t) {
        return ae.grep(ae.timers,function (e) {
            return t === e.elem
        }).length
    };
    var an = t.document.documentElement;
    ae.offset = {setOffset: function (t, e, i) {
        var n, s, a, o, r, l, c, d = ae.css(t, "position"), u = ae(t), h = {};
        "static" === d && (t.style.position = "relative"), r = u.offset(), a = ae.css(t, "top"), l = ae.css(t, "left"), c = ("absolute" === d || "fixed" === d) && ae.inArray("auto", [a, l]) > -1, c ? (n = u.position(), o = n.top, s = n.left) : (o = parseFloat(a) || 0, s = parseFloat(l) || 0), ae.isFunction(e) && (e = e.call(t, i, r)), null != e.top && (h.top = e.top - r.top + o), null != e.left && (h.left = e.left - r.left + s), "using"in e ? e.using.call(t, h) : u.css(h)
    }}, ae.fn.extend({offset: function (t) {
        if (arguments.length)return void 0 === t ? this : this.each(function (e) {
            ae.offset.setOffset(this, t, e)
        });
        var e, i, n = {top: 0, left: 0}, s = this[0], a = s && s.ownerDocument;
        if (a)return e = a.documentElement, ae.contains(e, s) ? (typeof s.getBoundingClientRect !== Ce && (n = s.getBoundingClientRect()), i = Z(a), {top: n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0), left: n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)}) : n
    }, position: function () {
        if (this[0]) {
            var t, e, i = {top: 0, left: 0}, n = this[0];
            return"fixed" === ae.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ae.nodeName(t[0], "html") || (i = t.offset()), i.top += ae.css(t[0], "borderTopWidth", !0), i.left += ae.css(t[0], "borderLeftWidth", !0)), {top: e.top - i.top - ae.css(n, "marginTop", !0), left: e.left - i.left - ae.css(n, "marginLeft", !0)}
        }
    }, offsetParent: function () {
        return this.map(function () {
            for (var t = this.offsetParent || an; t && !ae.nodeName(t, "html") && "static" === ae.css(t, "position");)t = t.offsetParent;
            return t || an
        })
    }}), ae.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, e) {
        var i = /Y/.test(e);
        ae.fn[t] = function (n) {
            return Fe(this, function (t, n, s) {
                var a = Z(t);
                return void 0 === s ? a ? e in a ? a[e] : a.document.documentElement[n] : t[n] : (a ? a.scrollTo(i ? ae(a).scrollLeft() : s, i ? s : ae(a).scrollTop()) : t[n] = s, void 0)
            }, t, n, arguments.length, null)
        }
    }), ae.each(["top", "left"], function (t, e) {
        ae.cssHooks[e] = S(ne.pixelPosition, function (t, i) {
            return i ? (i = ii(t, e), si.test(i) ? ae(t).position()[e] + "px" : i) : void 0
        })
    }), ae.each({Height: "height", Width: "width"}, function (t, e) {
        ae.each({padding: "inner" + t, content: e, "": "outer" + t}, function (i, n) {
            ae.fn[n] = function (n, s) {
                var a = arguments.length && (i || "boolean" != typeof n), o = i || (n === !0 || s === !0 ? "margin" : "border");
                return Fe(this, function (e, i, n) {
                    var s;
                    return ae.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === n ? ae.css(e, i, o) : ae.style(e, i, n, o)
                }, e, a ? n : void 0, a, null)
            }
        })
    }), ae.fn.size = function () {
        return this.length
    }, ae.fn.andSelf = ae.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return ae
    });
    var on = t.jQuery, rn = t.$;
    return ae.noConflict = function (e) {
        return t.$ === ae && (t.$ = rn), e && t.jQuery === ae && (t.jQuery = on), ae
    }, typeof e === Ce && (t.jQuery = t.$ = ae), ae
}), function (t, e) {
    t.rails !== e && t.error("jquery-ujs has already been loaded!");
    var i, n = t(document);
    t.rails = i = {linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]", buttonClickSelector: "button[data-remote]", inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]", formSubmitSelector: "form", formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])", disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]", enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled", requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])", fileInputSelector: "input[type=file]", linkDisableSelector: "a[data-disable-with]", CSRFProtection: function (e) {
        var i = t('meta[name="csrf-token"]').attr("content");
        i && e.setRequestHeader("X-CSRF-Token", i)
    }, refreshCSRFTokens: function () {
        var e = t("meta[name=csrf-token]").attr("content"), i = t("meta[name=csrf-param]").attr("content");
        t('form input[name="' + i + '"]').val(e)
    }, fire: function (e, i, n) {
        var s = t.Event(i);
        return e.trigger(s, n), s.result !== !1
    }, confirm: function (t) {
        return confirm(t)
    }, ajax: function (e) {
        return t.ajax(e)
    }, href: function (t) {
        return t.attr("href")
    }, handleRemote: function (n) {
        var s, a, o, r, l, c, d, u;
        if (i.fire(n, "ajax:before")) {
            if (r = n.data("cross-domain"), l = r === e ? null : r, c = n.data("with-credentials") || null, d = n.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, n.is("form")) {
                s = n.attr("method"), a = n.attr("action"), o = n.serializeArray();
                var h = n.data("ujs:submit-button");
                h && (o.push(h), n.data("ujs:submit-button", null))
            } else n.is(i.inputChangeSelector) ? (s = n.data("method"), a = n.data("url"), o = n.serialize(), n.data("params") && (o = o + "&" + n.data("params"))) : n.is(i.buttonClickSelector) ? (s = n.data("method") || "get", a = n.data("url"), o = n.serialize(), n.data("params") && (o = o + "&" + n.data("params"))) : (s = n.data("method"), a = i.href(n), o = n.data("params") || null);
            u = {type: s || "GET", data: o, dataType: d, beforeSend: function (t, s) {
                return s.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + s.accepts.script), i.fire(n, "ajax:beforeSend", [t, s])
            }, success: function (t, e, i) {
                n.trigger("ajax:success", [t, e, i])
            }, complete: function (t, e) {
                n.trigger("ajax:complete", [t, e])
            }, error: function (t, e, i) {
                n.trigger("ajax:error", [t, e, i])
            }, crossDomain: l}, c && (u.xhrFields = {withCredentials: c}), a && (u.url = a);
            var p = i.ajax(u);
            return n.trigger("ajax:send", p), p
        }
        return!1
    }, handleMethod: function (n) {
        var s = i.href(n), a = n.data("method"), o = n.attr("target"), r = t("meta[name=csrf-token]").attr("content"), l = t("meta[name=csrf-param]").attr("content"), c = t('<form method="post" action="' + s + '"></form>'), d = '<input name="_method" value="' + a + '" type="hidden" />';
        l !== e && r !== e && (d += '<input name="' + l + '" value="' + r + '" type="hidden" />'), o && c.attr("target", o), c.hide().append(d).appendTo("body"), c.submit()
    }, disableFormElements: function (e) {
        e.find(i.disableSelector).each(function () {
            var e = t(this), i = e.is("button") ? "html" : "val";
            e.data("ujs:enable-with", e[i]()), e[i](e.data("disable-with")), e.prop("disabled", !0)
        })
    }, enableFormElements: function (e) {
        e.find(i.enableSelector).each(function () {
            var e = t(this), i = e.is("button") ? "html" : "val";
            e.data("ujs:enable-with") && e[i](e.data("ujs:enable-with")), e.prop("disabled", !1)
        })
    }, allowAction: function (t) {
        var e, n = t.data("confirm"), s = !1;
        return n ? (i.fire(t, "confirm") && (s = i.confirm(n), e = i.fire(t, "confirm:complete", [s])), s && e) : !0
    }, blankInputs: function (e, i, n) {
        var s, a, o = t(), r = i || "input,textarea", l = e.find(r);
        return l.each(function () {
            if (s = t(this), a = s.is("input[type=checkbox],input[type=radio]") ? s.is(":checked") : s.val(), !a == !n) {
                if (s.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + s.attr("name") + '"]').length)return!0;
                o = o.add(s)
            }
        }), o.length ? o : !1
    }, nonBlankInputs: function (t, e) {
        return i.blankInputs(t, e, !0)
    }, stopEverything: function (e) {
        return t(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
    }, disableElement: function (t) {
        t.data("ujs:enable-with", t.html()), t.html(t.data("disable-with")), t.bind("click.railsDisable", function (t) {
            return i.stopEverything(t)
        })
    }, enableElement: function (t) {
        t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.unbind("click.railsDisable")
    }}, i.fire(n, "rails:attachBindings") && (t.ajaxPrefilter(function (t, e, n) {
        t.crossDomain || i.CSRFProtection(n)
    }), n.delegate(i.linkDisableSelector, "ajax:complete", function () {
        i.enableElement(t(this))
    }), n.delegate(i.linkClickSelector, "click.rails", function (n) {
        var s = t(this), a = s.data("method"), o = s.data("params"), r = n.metaKey || n.ctrlKey;
        if (!i.allowAction(s))return i.stopEverything(n);
        if (!r && s.is(i.linkDisableSelector) && i.disableElement(s), s.data("remote") !== e) {
            if (r && (!a || "GET" === a) && !o)return!0;
            var l = i.handleRemote(s);
            return l === !1 ? i.enableElement(s) : l.error(function () {
                i.enableElement(s)
            }), !1
        }
        return s.data("method") ? (i.handleMethod(s), !1) : void 0
    }), n.delegate(i.buttonClickSelector, "click.rails", function (e) {
        var n = t(this);
        return i.allowAction(n) ? (i.handleRemote(n), !1) : i.stopEverything(e)
    }), n.delegate(i.inputChangeSelector, "change.rails", function (e) {
        var n = t(this);
        return i.allowAction(n) ? (i.handleRemote(n), !1) : i.stopEverything(e)
    }), n.delegate(i.formSubmitSelector, "submit.rails", function (n) {
        var s = t(this), a = s.data("remote") !== e, o = i.blankInputs(s, i.requiredInputSelector), r = i.nonBlankInputs(s, i.fileInputSelector);
        if (!i.allowAction(s))return i.stopEverything(n);
        if (o && s.attr("novalidate") == e && i.fire(s, "ajax:aborted:required", [o]))return i.stopEverything(n);
        if (a) {
            if (r) {
                setTimeout(function () {
                    i.disableFormElements(s)
                }, 13);
                var l = i.fire(s, "ajax:aborted:file", [r]);
                return l || setTimeout(function () {
                    i.enableFormElements(s)
                }, 13), l
            }
            return i.handleRemote(s), !1
        }
        setTimeout(function () {
            i.disableFormElements(s)
        }, 13)
    }), n.delegate(i.formInputClickSelector, "click.rails", function (e) {
        var n = t(this);
        if (!i.allowAction(n))return i.stopEverything(e);
        var s = n.attr("name"), a = s ? {name: s, value: n.val()} : null;
        n.closest("form").data("ujs:submit-button", a)
    }), n.delegate(i.formSubmitSelector, "ajax:beforeSend.rails", function (e) {
        this == e.target && i.disableFormElements(t(this))
    }), n.delegate(i.formSubmitSelector, "ajax:complete.rails", function (e) {
        this == e.target && i.enableFormElements(t(this))
    }), t(function () {
        i.refreshCSRFTokens()
    }))
}(jQuery), function (t, e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : t.jQuery ? e(t.jQuery) : e(t.Zepto)
}(this, function (t, e) {
    t.fn.jPlayer = function (i) {
        var n = "jPlayer", s = "string" == typeof i, a = Array.prototype.slice.call(arguments, 1), o = this;
        return i = !s && a.length ? t.extend.apply(null, [!0, i].concat(a)) : i, s && "_" === i.charAt(0) ? o : (s ? this.each(function () {
            var s = t(this).data(n), r = s && t.isFunction(s[i]) ? s[i].apply(s, a) : s;
            return r !== s && r !== e ? (o = r, !1) : void 0
        }) : this.each(function () {
            var e = t(this).data(n);
            e ? e.option(i || {}) : t(this).data(n, new t.jPlayer(i, this))
        }), o)
    }, t.jPlayer = function (e, i) {
        if (arguments.length) {
            this.element = t(i), this.options = t.extend(!0, {}, this.options, e);
            var n = this;
            this.element.bind("remove.jPlayer", function () {
                n.destroy()
            }), this._init()
        }
    }, "function" != typeof t.fn.stop && (t.fn.stop = function () {
    }), t.jPlayer.emulateMethods = "load play pause", t.jPlayer.emulateStatus = "src readyState networkState currentTime duration paused ended playbackRate", t.jPlayer.emulateOptions = "muted volume", t.jPlayer.reservedEvent = "ready flashreset resize repeat error warning", t.jPlayer.event = {}, t.each(["ready", "flashreset", "resize", "repeat", "click", "error", "warning", "loadstart", "progress", "suspend", "abort", "emptied", "stalled", "play", "pause", "loadedmetadata", "loadeddata", "waiting", "playing", "canplay", "canplaythrough", "seeking", "seeked", "timeupdate", "ended", "ratechange", "durationchange", "volumechange"], function () {
        t.jPlayer.event[this] = "jPlayer_" + this
    }), t.jPlayer.htmlEvent = ["loadstart", "abort", "emptied", "stalled", "loadedmetadata", "loadeddata", "canplay", "canplaythrough", "ratechange"], t.jPlayer.pause = function () {
        t.each(t.jPlayer.prototype.instances, function (t, e) {
            e.data("jPlayer").status.srcSet && e.jPlayer("pause")
        })
    }, t.jPlayer.timeFormat = {showHour: !1, showMin: !0, showSec: !0, padHour: !1, padMin: !0, padSec: !0, sepHour: ":", sepMin: ":", sepSec: ""};
    var i = function () {
        this.init()
    };
    i.prototype = {init: function () {
        this.options = {timeFormat: t.jPlayer.timeFormat}
    }, time: function (t) {
        t = t && "number" == typeof t ? t : 0;
        var e = new Date(1e3 * t), i = e.getUTCHours(), n = this.options.timeFormat.showHour ? e.getUTCMinutes() : e.getUTCMinutes() + 60 * i, s = this.options.timeFormat.showMin ? e.getUTCSeconds() : e.getUTCSeconds() + 60 * n, a = this.options.timeFormat.padHour && 10 > i ? "0" + i : i, o = this.options.timeFormat.padMin && 10 > n ? "0" + n : n, r = this.options.timeFormat.padSec && 10 > s ? "0" + s : s, l = "";
        return l += this.options.timeFormat.showHour ? a + this.options.timeFormat.sepHour : "", l += this.options.timeFormat.showMin ? o + this.options.timeFormat.sepMin : "", l += this.options.timeFormat.showSec ? r + this.options.timeFormat.sepSec : ""
    }};
    var n = new i;
    t.jPlayer.convertTime = function (t) {
        return n.time(t)
    }, t.jPlayer.uaBrowser = function (t) {
        var e = t.toLowerCase(), i = /(webkit)[ \/]([\w.]+)/, n = /(opera)(?:.*version)?[ \/]([\w.]+)/, s = /(msie) ([\w.]+)/, a = /(mozilla)(?:.*? rv:([\w.]+))?/, o = i.exec(e) || n.exec(e) || s.exec(e) || e.indexOf("compatible") < 0 && a.exec(e) || [];
        return{browser: o[1] || "", version: o[2] || "0"}
    }, t.jPlayer.uaPlatform = function (t) {
        var e = t.toLowerCase(), i = /(ipad|iphone|ipod|android|blackberry|playbook|windows ce|webos)/, n = /(ipad|playbook)/, s = /(android)/, a = /(mobile)/, o = i.exec(e) || [], r = n.exec(e) || !a.exec(e) && s.exec(e) || [];
        return o[1] && (o[1] = o[1].replace(/\s/g, "_")), {platform: o[1] || "", tablet: r[1] || ""}
    }, t.jPlayer.browser = {}, t.jPlayer.platform = {};
    var s = t.jPlayer.uaBrowser(navigator.userAgent);
    s.browser && (t.jPlayer.browser[s.browser] = !0, t.jPlayer.browser.version = s.version);
    var a = t.jPlayer.uaPlatform(navigator.userAgent);
    a.platform && (t.jPlayer.platform[a.platform] = !0, t.jPlayer.platform.mobile = !a.tablet, t.jPlayer.platform.tablet = !!a.tablet), t.jPlayer.getDocMode = function () {
        var e;
        return t.jPlayer.browser.msie && (document.documentMode ? e = document.documentMode : (e = 5, document.compatMode && "CSS1Compat" === document.compatMode && (e = 7))), e
    }, t.jPlayer.browser.documentMode = t.jPlayer.getDocMode(), t.jPlayer.nativeFeatures = {init: function () {
        var t, e, i, n = document, s = n.createElement("video"), a = {w3c: ["fullscreenEnabled", "fullscreenElement", "requestFullscreen", "exitFullscreen", "fullscreenchange", "fullscreenerror"], moz: ["mozFullScreenEnabled", "mozFullScreenElement", "mozRequestFullScreen", "mozCancelFullScreen", "mozfullscreenchange", "mozfullscreenerror"], webkit: ["", "webkitCurrentFullScreenElement", "webkitRequestFullScreen", "webkitCancelFullScreen", "webkitfullscreenchange", ""], webkitVideo: ["webkitSupportsFullscreen", "webkitDisplayingFullscreen", "webkitEnterFullscreen", "webkitExitFullscreen", "", ""]}, o = ["w3c", "moz", "webkit", "webkitVideo"];
        for (this.fullscreen = t = {support: {w3c: !!n[a.w3c[0]], moz: !!n[a.moz[0]], webkit: "function" == typeof n[a.webkit[3]], webkitVideo: "function" == typeof s[a.webkitVideo[2]]}, used: {}}, e = 0, i = o.length; i > e; e++) {
            var r = o[e];
            if (t.support[r]) {
                t.spec = r, t.used[r] = !0;
                break
            }
        }
        if (t.spec) {
            var l = a[t.spec];
            t.api = {fullscreenEnabled: !0, fullscreenElement: function (t) {
                return t = t ? t : n, t[l[1]]
            }, requestFullscreen: function (t) {
                return t[l[2]]()
            }, exitFullscreen: function (t) {
                return t = t ? t : n, t[l[3]]()
            }}, t.event = {fullscreenchange: l[4], fullscreenerror: l[5]}
        } else t.api = {fullscreenEnabled: !1, fullscreenElement: function () {
            return null
        }, requestFullscreen: function () {
        }, exitFullscreen: function () {
        }}, t.event = {}
    }}, t.jPlayer.nativeFeatures.init(), t.jPlayer.focus = null, t.jPlayer.keyIgnoreElementNames = "INPUT TEXTAREA";
    var o = function (e) {
        var i, n = t.jPlayer.focus;
        n && (t.each(t.jPlayer.keyIgnoreElementNames.split(/\s+/g), function (t, n) {
            return e.target.nodeName.toUpperCase() === n.toUpperCase() ? (i = !0, !1) : void 0
        }), i || t.each(n.options.keyBindings, function (i, s) {
            return s && e.which === s.key && t.isFunction(s.fn) ? (e.preventDefault(), s.fn(n), !1) : void 0
        }))
    };
    t.jPlayer.keys = function (e) {
        var i = "keydown.jPlayer";
        t(document.documentElement).unbind(i), e && t(document.documentElement).bind(i, o)
    }, t.jPlayer.keys(!0), t.jPlayer.prototype = {count: 0, version: {script: "2.4.1", needFlash: "2.4.1", flash: "unknown"}, options: {swfPath: "js", solution: "html, flash", supplied: "mp3", preload: "metadata", volume: .8, muted: !1, wmode: "opaque", backgroundColor: "#000000", cssSelectorAncestor: "#jp_container_1", cssSelector: {videoPlay: ".jp-video-play", play: ".jp-play", pause: ".jp-pause", stop: ".jp-stop", seekBar: ".jp-seek-bar", playBar: ".jp-play-bar", mute: ".jp-mute", unmute: ".jp-unmute", volumeBar: ".jp-volume-bar", volumeBarValue: ".jp-volume-bar-value", volumeMax: ".jp-volume-max", currentTime: ".jp-current-time", duration: ".jp-duration", fullScreen: ".jp-full-screen", restoreScreen: ".jp-restore-screen", repeat: ".jp-repeat", repeatOff: ".jp-repeat-off", gui: ".jp-gui", noSolution: ".jp-no-solution"}, smoothPlayBar: !1, fullScreen: !1, fullWindow: !1, autohide: {restored: !1, full: !0, fadeIn: 200, fadeOut: 600, hold: 1e3}, loop: !1, repeat: function (e) {
        e.jPlayer.options.loop ? t(this).unbind(".jPlayerRepeat").bind(t.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function () {
            t(this).jPlayer("play")
        }) : t(this).unbind(".jPlayerRepeat")
    }, nativeVideoControls: {}, noFullWindow: {msie: /msie [0-6]\./, ipad: /ipad.*?os [0-4]\./, iphone: /iphone/, ipod: /ipod/, android_pad: /android [0-3]\.(?!.*?mobile)/, android_phone: /android.*?mobile/, blackberry: /blackberry/, windows_ce: /windows ce/, iemobile: /iemobile/, webos: /webos/}, noVolume: {ipad: /ipad/, iphone: /iphone/, ipod: /ipod/, android_pad: /android(?!.*?mobile)/, android_phone: /android.*?mobile/, blackberry: /blackberry/, windows_ce: /windows ce/, iemobile: /iemobile/, webos: /webos/, playbook: /playbook/}, timeFormat: {}, keyEnabled: !1, audioFullScreen: !1, keyBindings: {play: {key: 32, fn: function (t) {
        t.status.paused ? t.play() : t.pause()
    }}, fullScreen: {key: 13, fn: function (t) {
        (t.status.video || t.options.audioFullScreen) && t._setOption("fullScreen", !t.options.fullScreen)
    }}, muted: {key: 8, fn: function (t) {
        t._muted(!t.options.muted)
    }}, volumeUp: {key: 38, fn: function (t) {
        t.volume(t.options.volume + .1)
    }}, volumeDown: {key: 40, fn: function (t) {
        t.volume(t.options.volume - .1)
    }}}, verticalVolume: !1, idPrefix: "jp", noConflict: "jQuery", emulateHtml: !1, errorAlerts: !1, warningAlerts: !1}, optionsAudio: {size: {width: "0px", height: "0px", cssClass: ""}, sizeFull: {width: "0px", height: "0px", cssClass: ""}}, optionsVideo: {size: {width: "480px", height: "270px", cssClass: "jp-video-270p"}, sizeFull: {width: "100%", height: "100%", cssClass: "jp-video-full"}}, instances: {}, status: {src: "", media: {}, paused: !0, format: {}, formatType: "", waitForPlay: !0, waitForLoad: !0, srcSet: !1, video: !1, seekPercent: 0, currentPercentRelative: 0, currentPercentAbsolute: 0, currentTime: 0, duration: 0, videoWidth: 0, videoHeight: 0, readyState: 0, networkState: 0, playbackRate: 1, ended: 0}, internal: {ready: !1}, solution: {html: !0, flash: !0}, format: {mp3: {codec: 'audio/mpeg; codecs="mp3"', flashCanPlay: !0, media: "audio"}, m4a: {codec: 'audio/mp4; codecs="mp4a.40.2"', flashCanPlay: !0, media: "audio"}, oga: {codec: 'audio/ogg; codecs="vorbis"', flashCanPlay: !1, media: "audio"}, wav: {codec: 'audio/wav; codecs="1"', flashCanPlay: !1, media: "audio"}, webma: {codec: 'audio/webm; codecs="vorbis"', flashCanPlay: !1, media: "audio"}, fla: {codec: "audio/x-flv", flashCanPlay: !0, media: "audio"}, rtmpa: {codec: 'audio/rtmp; codecs="rtmp"', flashCanPlay: !0, media: "audio"}, m4v: {codec: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"', flashCanPlay: !0, media: "video"}, ogv: {codec: 'video/ogg; codecs="theora, vorbis"', flashCanPlay: !1, media: "video"}, webmv: {codec: 'video/webm; codecs="vorbis, vp8"', flashCanPlay: !1, media: "video"}, flv: {codec: "video/x-flv", flashCanPlay: !0, media: "video"}, rtmpv: {codec: 'video/rtmp; codecs="rtmp"', flashCanPlay: !0, media: "video"}}, _init: function () {
        var i = this;
        if (this.element.empty(), this.status = t.extend({}, this.status), this.internal = t.extend({}, this.internal), this.options.timeFormat = t.extend({}, t.jPlayer.timeFormat, this.options.timeFormat), this.internal.cmdsIgnored = t.jPlayer.platform.ipad || t.jPlayer.platform.iphone || t.jPlayer.platform.ipod, this.internal.domNode = this.element.get(0), this.options.keyEnabled && !t.jPlayer.focus && (t.jPlayer.focus = this), this.formats = [], this.solutions = [], this.require = {}, this.htmlElement = {}, this.html = {}, this.html.audio = {}, this.html.video = {}, this.flash = {}, this.css = {}, this.css.cs = {}, this.css.jq = {}, this.ancestorJq = [], this.options.volume = this._limitValue(this.options.volume, 0, 1), t.each(this.options.supplied.toLowerCase().split(","), function (e, n) {
            var s = n.replace(/^\s+|\s+$/g, "");
            if (i.format[s]) {
                var a = !1;
                t.each(i.formats, function (t, e) {
                    return s === e ? (a = !0, !1) : void 0
                }), a || i.formats.push(s)
            }
        }), t.each(this.options.solution.toLowerCase().split(","), function (e, n) {
            var s = n.replace(/^\s+|\s+$/g, "");
            if (i.solution[s]) {
                var a = !1;
                t.each(i.solutions, function (t, e) {
                    return s === e ? (a = !0, !1) : void 0
                }), a || i.solutions.push(s)
            }
        }), this.internal.instance = "jp_" + this.count, this.instances[this.internal.instance] = this.element, this.element.attr("id") || this.element.attr("id", this.options.idPrefix + "_jplayer_" + this.count), this.internal.self = t.extend({}, {id: this.element.attr("id"), jq: this.element}), this.internal.audio = t.extend({}, {id: this.options.idPrefix + "_audio_" + this.count, jq: e}), this.internal.video = t.extend({}, {id: this.options.idPrefix + "_video_" + this.count, jq: e}), this.internal.flash = t.extend({}, {id: this.options.idPrefix + "_flash_" + this.count, jq: e, swf: this.options.swfPath + (".swf" !== this.options.swfPath.toLowerCase().slice(-4) ? (this.options.swfPath && "/" !== this.options.swfPath.slice(-1) ? "/" : "") + "Jplayer.swf" : "")}), this.internal.poster = t.extend({}, {id: this.options.idPrefix + "_poster_" + this.count, jq: e}), t.each(t.jPlayer.event, function (t, n) {
            i.options[t] !== e && (i.element.bind(n + ".jPlayer", i.options[t]), i.options[t] = e)
        }), this.require.audio = !1, this.require.video = !1, t.each(this.formats, function (t, e) {
            i.require[i.format[e].media] = !0
        }), this.options = this.require.video ? t.extend(!0, {}, this.optionsVideo, this.options) : t.extend(!0, {}, this.optionsAudio, this.options), this._setSize(), this.status.nativeVideoControls = this._uaBlocklist(this.options.nativeVideoControls), this.status.noFullWindow = this._uaBlocklist(this.options.noFullWindow), this.status.noVolume = this._uaBlocklist(this.options.noVolume), t.jPlayer.nativeFeatures.fullscreen.api.fullscreenEnabled && this._fullscreenAddEventListeners(), this._restrictNativeVideoControls(), this.htmlElement.poster = document.createElement("img"), this.htmlElement.poster.id = this.internal.poster.id, this.htmlElement.poster.onload = function () {
            (!i.status.video || i.status.waitForPlay) && i.internal.poster.jq.show()
        }, this.element.append(this.htmlElement.poster), this.internal.poster.jq = t("#" + this.internal.poster.id), this.internal.poster.jq.css({width: this.status.width, height: this.status.height}), this.internal.poster.jq.hide(), this.internal.poster.jq.bind("click.jPlayer", function () {
            i._trigger(t.jPlayer.event.click)
        }), this.html.audio.available = !1, this.require.audio && (this.htmlElement.audio = document.createElement("audio"), this.htmlElement.audio.id = this.internal.audio.id, this.html.audio.available = !!this.htmlElement.audio.canPlayType && this._testCanPlayType(this.htmlElement.audio)), this.html.video.available = !1, this.require.video && (this.htmlElement.video = document.createElement("video"), this.htmlElement.video.id = this.internal.video.id, this.html.video.available = !!this.htmlElement.video.canPlayType && this._testCanPlayType(this.htmlElement.video)), this.flash.available = this._checkForFlash(10.1), this.html.canPlay = {}, this.flash.canPlay = {}, t.each(this.formats, function (t, e) {
            i.html.canPlay[e] = i.html[i.format[e].media].available && "" !== i.htmlElement[i.format[e].media].canPlayType(i.format[e].codec), i.flash.canPlay[e] = i.format[e].flashCanPlay && i.flash.available
        }), this.html.desired = !1, this.flash.desired = !1, t.each(this.solutions, function (e, n) {
            if (0 === e)i[n].desired = !0; else {
                var s = !1, a = !1;
                t.each(i.formats, function (t, e) {
                    i[i.solutions[0]].canPlay[e] && ("video" === i.format[e].media ? a = !0 : s = !0)
                }), i[n].desired = i.require.audio && !s || i.require.video && !a
            }
        }), this.html.support = {}, this.flash.support = {}, t.each(this.formats, function (t, e) {
            i.html.support[e] = i.html.canPlay[e] && i.html.desired, i.flash.support[e] = i.flash.canPlay[e] && i.flash.desired
        }), this.html.used = !1, this.flash.used = !1, t.each(this.solutions, function (e, n) {
            t.each(i.formats, function (t, e) {
                return i[n].support[e] ? (i[n].used = !0, !1) : void 0
            })
        }), this._resetActive(), this._resetGate(), this._cssSelectorAncestor(this.options.cssSelectorAncestor), this.html.used || this.flash.used ? this.css.jq.noSolution.length && this.css.jq.noSolution.hide() : (this._error({type: t.jPlayer.error.NO_SOLUTION, context: "{solution:'" + this.options.solution + "', supplied:'" + this.options.supplied + "'}", message: t.jPlayer.errorMsg.NO_SOLUTION, hint: t.jPlayer.errorHint.NO_SOLUTION}), this.css.jq.noSolution.length && this.css.jq.noSolution.show()), this.flash.used) {
            var n, s = "jQuery=" + encodeURI(this.options.noConflict) + "&id=" + encodeURI(this.internal.self.id) + "&vol=" + this.options.volume + "&muted=" + this.options.muted;
            if (t.jPlayer.browser.msie && (Number(t.jPlayer.browser.version) < 9 || t.jPlayer.browser.documentMode < 9)) {
                var a = '<object id="' + this.internal.flash.id + '" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="0" height="0" tabindex="-1"></object>', o = ['<param name="movie" value="' + this.internal.flash.swf + '" />', '<param name="FlashVars" value="' + s + '" />', '<param name="allowScriptAccess" value="always" />', '<param name="bgcolor" value="' + this.options.backgroundColor + '" />', '<param name="wmode" value="' + this.options.wmode + '" />'];
                n = document.createElement(a);
                for (var r = 0; r < o.length; r++)n.appendChild(document.createElement(o[r]))
            } else {
                var l = function (t, e, i) {
                    var n = document.createElement("param");
                    n.setAttribute("name", e), n.setAttribute("value", i), t.appendChild(n)
                };
                n = document.createElement("object"), n.setAttribute("id", this.internal.flash.id), n.setAttribute("name", this.internal.flash.id), n.setAttribute("data", this.internal.flash.swf), n.setAttribute("type", "application/x-shockwave-flash"), n.setAttribute("width", "1"), n.setAttribute("height", "1"), n.setAttribute("tabindex", "-1"), l(n, "flashvars", s), l(n, "allowscriptaccess", "always"), l(n, "bgcolor", this.options.backgroundColor), l(n, "wmode", this.options.wmode)
            }
            this.element.append(n), this.internal.flash.jq = t(n)
        }
        this.html.used && (this.html.audio.available && (this._addHtmlEventListeners(this.htmlElement.audio, this.html.audio), this.element.append(this.htmlElement.audio), this.internal.audio.jq = t("#" + this.internal.audio.id)), this.html.video.available && (this._addHtmlEventListeners(this.htmlElement.video, this.html.video), this.element.append(this.htmlElement.video), this.internal.video.jq = t("#" + this.internal.video.id), this.status.nativeVideoControls ? this.internal.video.jq.css({width: this.status.width, height: this.status.height}) : this.internal.video.jq.css({width: "0px", height: "0px"}), this.internal.video.jq.bind("click.jPlayer", function () {
            i._trigger(t.jPlayer.event.click)
        }))), this.options.emulateHtml && this._emulateHtmlBridge(), this.html.used && !this.flash.used && setTimeout(function () {
            i.internal.ready = !0, i.version.flash = "n/a", i._trigger(t.jPlayer.event.repeat), i._trigger(t.jPlayer.event.ready)
        }, 100), this._updateNativeVideoControls(), this.css.jq.videoPlay.length && this.css.jq.videoPlay.hide(), t.jPlayer.prototype.count++
    }, destroy: function () {
        this.clearMedia(), this._removeUiClass(), this.css.jq.currentTime.length && this.css.jq.currentTime.text(""), this.css.jq.duration.length && this.css.jq.duration.text(""), t.each(this.css.jq, function (t, e) {
            e.length && e.unbind(".jPlayer")
        }), this.internal.poster.jq.unbind(".jPlayer"), this.internal.video.jq && this.internal.video.jq.unbind(".jPlayer"), this._fullscreenRemoveEventListeners(), this === t.jPlayer.focus && (t.jPlayer.focus = null), this.options.emulateHtml && this._destroyHtmlBridge(), this.element.removeData("jPlayer"), this.element.unbind(".jPlayer"), this.element.empty(), delete this.instances[this.internal.instance]
    }, enable: function () {
    }, disable: function () {
    }, _testCanPlayType: function (t) {
        try {
            return t.canPlayType(this.format.mp3.codec), !0
        } catch (e) {
            return!1
        }
    }, _uaBlocklist: function (e) {
        var i = navigator.userAgent.toLowerCase(), n = !1;
        return t.each(e, function (t, e) {
            return e && e.test(i) ? (n = !0, !1) : void 0
        }), n
    }, _restrictNativeVideoControls: function () {
        this.require.audio && this.status.nativeVideoControls && (this.status.nativeVideoControls = !1, this.status.noFullWindow = !0)
    }, _updateNativeVideoControls: function () {
        this.html.video.available && this.html.used && (this.htmlElement.video.controls = this.status.nativeVideoControls, this._updateAutohide(), this.status.nativeVideoControls && this.require.video ? (this.internal.poster.jq.hide(), this.internal.video.jq.css({width: this.status.width, height: this.status.height})) : this.status.waitForPlay && this.status.video && (this.internal.poster.jq.show(), this.internal.video.jq.css({width: "0px", height: "0px"})))
    }, _addHtmlEventListeners: function (e, i) {
        var n = this;
        e.preload = this.options.preload, e.muted = this.options.muted, e.volume = this.options.volume, e.addEventListener("progress", function () {
            i.gate && (n.internal.cmdsIgnored && this.readyState > 0 && (n.internal.cmdsIgnored = !1), n._getHtmlStatus(e), n._updateInterface(), n._trigger(t.jPlayer.event.progress))
        }, !1), e.addEventListener("timeupdate", function () {
            i.gate && (n._getHtmlStatus(e), n._updateInterface(), n._trigger(t.jPlayer.event.timeupdate))
        }, !1), e.addEventListener("durationchange", function () {
            i.gate && (n._getHtmlStatus(e), n._updateInterface(), n._trigger(t.jPlayer.event.durationchange))
        }, !1), e.addEventListener("play", function () {
            i.gate && (n._updateButtons(!0), n._html_checkWaitForPlay(), n._trigger(t.jPlayer.event.play))
        }, !1), e.addEventListener("playing", function () {
            i.gate && (n._updateButtons(!0), n._seeked(), n._trigger(t.jPlayer.event.playing))
        }, !1), e.addEventListener("pause", function () {
            i.gate && (n._updateButtons(!1), n._trigger(t.jPlayer.event.pause))
        }, !1), e.addEventListener("waiting", function () {
            i.gate && (n._seeking(), n._trigger(t.jPlayer.event.waiting))
        }, !1), e.addEventListener("seeking", function () {
            i.gate && (n._seeking(), n._trigger(t.jPlayer.event.seeking))
        }, !1), e.addEventListener("seeked", function () {
            i.gate && (n._seeked(), n._trigger(t.jPlayer.event.seeked))
        }, !1), e.addEventListener("volumechange", function () {
            i.gate && (n.options.volume = e.volume, n.options.muted = e.muted, n._updateMute(), n._updateVolume(), n._trigger(t.jPlayer.event.volumechange))
        }, !1), e.addEventListener("suspend", function () {
            i.gate && (n._seeked(), n._trigger(t.jPlayer.event.suspend))
        }, !1), e.addEventListener("ended", function () {
            i.gate && (t.jPlayer.browser.webkit || (n.htmlElement.media.currentTime = 0), n.htmlElement.media.pause(), n._updateButtons(!1), n._getHtmlStatus(e, !0), n._updateInterface(), n._trigger(t.jPlayer.event.ended))
        }, !1), e.addEventListener("error", function () {
            i.gate && (n._updateButtons(!1), n._seeked(), n.status.srcSet && (clearTimeout(n.internal.htmlDlyCmdId), n.status.waitForLoad = !0, n.status.waitForPlay = !0, n.status.video && !n.status.nativeVideoControls && n.internal.video.jq.css({width: "0px", height: "0px"}), n._validString(n.status.media.poster) && !n.status.nativeVideoControls && n.internal.poster.jq.show(), n.css.jq.videoPlay.length && n.css.jq.videoPlay.show(), n._error({type: t.jPlayer.error.URL, context: n.status.src, message: t.jPlayer.errorMsg.URL, hint: t.jPlayer.errorHint.URL})))
        }, !1), t.each(t.jPlayer.htmlEvent, function (s, a) {
            e.addEventListener(this, function () {
                i.gate && n._trigger(t.jPlayer.event[a])
            }, !1)
        })
    }, _getHtmlStatus: function (t, e) {
        var i = 0, n = 0, s = 0, a = 0;
        isFinite(t.duration) && (this.status.duration = t.duration), i = t.currentTime, n = this.status.duration > 0 ? 100 * i / this.status.duration : 0, "object" == typeof t.seekable && t.seekable.length > 0 ? (s = this.status.duration > 0 ? 100 * t.seekable.end(t.seekable.length - 1) / this.status.duration : 100, a = this.status.duration > 0 ? 100 * t.currentTime / t.seekable.end(t.seekable.length - 1) : 0) : (s = 100, a = n), e && (i = 0, a = 0, n = 0), this.status.seekPercent = s, this.status.currentPercentRelative = a, this.status.currentPercentAbsolute = n, this.status.currentTime = i, this.status.videoWidth = t.videoWidth, this.status.videoHeight = t.videoHeight, this.status.readyState = t.readyState, this.status.networkState = t.networkState, this.status.playbackRate = t.playbackRate, this.status.ended = t.ended
    }, _resetStatus: function () {
        this.status = t.extend({}, this.status, t.jPlayer.prototype.status)
    }, _trigger: function (e, i, n) {
        var s = t.Event(e);
        s.jPlayer = {}, s.jPlayer.version = t.extend({}, this.version), s.jPlayer.options = t.extend(!0, {}, this.options), s.jPlayer.status = t.extend(!0, {}, this.status), s.jPlayer.html = t.extend(!0, {}, this.html), s.jPlayer.flash = t.extend(!0, {}, this.flash), i && (s.jPlayer.error = t.extend({}, i)), n && (s.jPlayer.warning = t.extend({}, n)), this.element.trigger(s)
    }, jPlayerFlashEvent: function (e, i) {
        if (e === t.jPlayer.event.ready)if (this.internal.ready) {
            if (this.flash.gate) {
                if (this.status.srcSet) {
                    var n = this.status.currentTime, s = this.status.paused;
                    this.setMedia(this.status.media), n > 0 && (s ? this.pause(n) : this.play(n))
                }
                this._trigger(t.jPlayer.event.flashreset)
            }
        } else this.internal.ready = !0, this.internal.flash.jq.css({width: "0px", height: "0px"}), this.version.flash = i.version, this.version.needFlash !== this.version.flash && this._error({type: t.jPlayer.error.VERSION, context: this.version.flash, message: t.jPlayer.errorMsg.VERSION + this.version.flash, hint: t.jPlayer.errorHint.VERSION}), this._trigger(t.jPlayer.event.repeat), this._trigger(e);
        if (this.flash.gate)switch (e) {
            case t.jPlayer.event.progress:
                this._getFlashStatus(i), this._updateInterface(), this._trigger(e);
                break;
            case t.jPlayer.event.timeupdate:
                this._getFlashStatus(i), this._updateInterface(), this._trigger(e);
                break;
            case t.jPlayer.event.play:
                this._seeked(), this._updateButtons(!0), this._trigger(e);
                break;
            case t.jPlayer.event.pause:
                this._updateButtons(!1), this._trigger(e);
                break;
            case t.jPlayer.event.ended:
                this._updateButtons(!1), this._trigger(e);
                break;
            case t.jPlayer.event.click:
                this._trigger(e);
                break;
            case t.jPlayer.event.error:
                this.status.waitForLoad = !0, this.status.waitForPlay = !0, this.status.video && this.internal.flash.jq.css({width: "0px", height: "0px"}), this._validString(this.status.media.poster) && this.internal.poster.jq.show(), this.css.jq.videoPlay.length && this.status.video && this.css.jq.videoPlay.show(), this.status.video ? this._flash_setVideo(this.status.media) : this._flash_setAudio(this.status.media), this._updateButtons(!1), this._error({type: t.jPlayer.error.URL, context: i.src, message: t.jPlayer.errorMsg.URL, hint: t.jPlayer.errorHint.URL});
                break;
            case t.jPlayer.event.seeking:
                this._seeking(), this._trigger(e);
                break;
            case t.jPlayer.event.seeked:
                this._seeked(), this._trigger(e);
                break;
            case t.jPlayer.event.ready:
                break;
            default:
                this._trigger(e)
        }
        return!1
    }, _getFlashStatus: function (t) {
        this.status.seekPercent = t.seekPercent, this.status.currentPercentRelative = t.currentPercentRelative, this.status.currentPercentAbsolute = t.currentPercentAbsolute, this.status.currentTime = t.currentTime, this.status.duration = t.duration, this.status.videoWidth = t.videoWidth, this.status.videoHeight = t.videoHeight, this.status.readyState = 4, this.status.networkState = 0, this.status.playbackRate = 1, this.status.ended = !1
    }, _updateButtons: function (t) {
        t === e ? t = !this.status.paused : this.status.paused = !t, this.css.jq.play.length && this.css.jq.pause.length && (t ? (this.css.jq.play.hide(), this.css.jq.pause.show()) : (this.css.jq.play.show(), this.css.jq.pause.hide())), this.css.jq.restoreScreen.length && this.css.jq.fullScreen.length && (this.status.noFullWindow ? (this.css.jq.fullScreen.hide(), this.css.jq.restoreScreen.hide()) : this.options.fullWindow ? (this.css.jq.fullScreen.hide(), this.css.jq.restoreScreen.show()) : (this.css.jq.fullScreen.show(), this.css.jq.restoreScreen.hide())), this.css.jq.repeat.length && this.css.jq.repeatOff.length && (this.options.loop ? (this.css.jq.repeat.hide(), this.css.jq.repeatOff.show()) : (this.css.jq.repeat.show(), this.css.jq.repeatOff.hide()))
    }, _updateInterface: function () {
        this.css.jq.seekBar.length && this.css.jq.seekBar.width(this.status.seekPercent + "%"), this.css.jq.playBar.length && (this.options.smoothPlayBar ? this.css.jq.playBar.stop().animate({width: this.status.currentPercentAbsolute + "%"}, 250, "linear") : this.css.jq.playBar.width(this.status.currentPercentRelative + "%")), this.css.jq.currentTime.length && this.css.jq.currentTime.text(this._convertTime(this.status.currentTime)), this.css.jq.duration.length && this.css.jq.duration.text(this._convertTime(this.status.duration))
    }, _convertTime: i.prototype.time, _seeking: function () {
        this.css.jq.seekBar.length && this.css.jq.seekBar.addClass("jp-seeking-bg")
    }, _seeked: function () {
        this.css.jq.seekBar.length && this.css.jq.seekBar.removeClass("jp-seeking-bg")
    }, _resetGate: function () {
        this.html.audio.gate = !1, this.html.video.gate = !1, this.flash.gate = !1
    }, _resetActive: function () {
        this.html.active = !1, this.flash.active = !1
    }, setMedia: function (e) {
        var i = this, n = !1, s = this.status.media.poster !== e.poster;
        this._resetMedia(), this._resetGate(), this._resetActive(), t.each(this.formats, function (s, a) {
            var o = "video" === i.format[a].media;
            return t.each(i.solutions, function (t, s) {
                if (i[s].support[a] && i._validString(e[a])) {
                    var r = "html" === s;
                    return o ? (r ? (i.html.video.gate = !0, i._html_setVideo(e), i.html.active = !0) : (i.flash.gate = !0, i._flash_setVideo(e), i.flash.active = !0), i.css.jq.videoPlay.length && i.css.jq.videoPlay.show(), i.status.video = !0) : (r ? (i.html.audio.gate = !0, i._html_setAudio(e), i.html.active = !0) : (i.flash.gate = !0, i._flash_setAudio(e), i.flash.active = !0), i.css.jq.videoPlay.length && i.css.jq.videoPlay.hide(), i.status.video = !1), n = !0, !1
                }
            }), n ? !1 : void 0
        }), n ? (this.status.nativeVideoControls && this.html.video.gate || this._validString(e.poster) && (s ? this.htmlElement.poster.src = e.poster : this.internal.poster.jq.show()), this.status.srcSet = !0, this.status.media = t.extend({}, e), this._updateButtons(!1), this._updateInterface()) : this._error({type: t.jPlayer.error.NO_SUPPORT, context: "{supplied:'" + this.options.supplied + "'}", message: t.jPlayer.errorMsg.NO_SUPPORT, hint: t.jPlayer.errorHint.NO_SUPPORT})
    }, _resetMedia: function () {
        this._resetStatus(), this._updateButtons(!1), this._updateInterface(), this._seeked(), this.internal.poster.jq.hide(), clearTimeout(this.internal.htmlDlyCmdId), this.html.active ? this._html_resetMedia() : this.flash.active && this._flash_resetMedia()
    }, clearMedia: function () {
        this._resetMedia(), this.html.active ? this._html_clearMedia() : this.flash.active && this._flash_clearMedia(), this._resetGate(), this._resetActive()
    }, load: function () {
        this.status.srcSet ? this.html.active ? this._html_load() : this.flash.active && this._flash_load() : this._urlNotSetError("load")
    }, focus: function () {
        this.options.keyEnabled && (t.jPlayer.focus = this)
    }, play: function (t) {
        t = "number" == typeof t ? t : 0 / 0, this.status.srcSet ? (this.focus(), this.html.active ? this._html_play(t) : this.flash.active && this._flash_play(t)) : this._urlNotSetError("play")
    }, videoPlay: function () {
        this.play()
    }, pause: function (t) {
        t = "number" == typeof t ? t : 0 / 0, this.status.srcSet ? this.html.active ? this._html_pause(t) : this.flash.active && this._flash_pause(t) : this._urlNotSetError("pause")
    }, pauseOthers: function () {
        var e = this;
        t.each(this.instances, function (t, i) {
            e.element !== i && i.data("jPlayer").status.srcSet && i.jPlayer("pause")
        })
    }, stop: function () {
        this.status.srcSet ? this.html.active ? this._html_pause(0) : this.flash.active && this._flash_pause(0) : this._urlNotSetError("stop")
    }, playHead: function (t) {
        t = this._limitValue(t, 0, 100), this.status.srcSet ? this.html.active ? this._html_playHead(t) : this.flash.active && this._flash_playHead(t) : this._urlNotSetError("playHead")
    }, _muted: function (e) {
        this.options.muted = e, this.html.used && this._html_mute(e), this.flash.used && this._flash_mute(e), this.html.video.gate || this.html.audio.gate || (this._updateMute(e), this._updateVolume(this.options.volume), this._trigger(t.jPlayer.event.volumechange))
    }, mute: function (t) {
        t = t === e ? !0 : !!t, this._muted(t)
    }, unmute: function (t) {
        t = t === e ? !0 : !!t, this._muted(!t)
    }, _updateMute: function (t) {
        t === e && (t = this.options.muted), this.css.jq.mute.length && this.css.jq.unmute.length && (this.status.noVolume ? (this.css.jq.mute.hide(), this.css.jq.unmute.hide()) : t ? (this.css.jq.mute.hide(), this.css.jq.unmute.show()) : (this.css.jq.mute.show(), this.css.jq.unmute.hide()))
    }, volume: function (e) {
        e = this._limitValue(e, 0, 1), this.options.volume = e, this.html.used && this._html_volume(e), this.flash.used && this._flash_volume(e), this.html.video.gate || this.html.audio.gate || (this._updateVolume(e), this._trigger(t.jPlayer.event.volumechange))
    }, volumeBar: function (e) {
        if (this.css.jq.volumeBar.length) {
            var i = t(e.currentTarget), n = i.offset(), s = e.pageX - n.left, a = i.width(), o = i.height() - e.pageY + n.top, r = i.height();
            this.options.verticalVolume ? this.volume(o / r) : this.volume(s / a)
        }
        this.options.muted && this._muted(!1)
    }, volumeBarValue: function () {
    }, _updateVolume: function (t) {
        t === e && (t = this.options.volume), t = this.options.muted ? 0 : t, this.status.noVolume ? (this.css.jq.volumeBar.length && this.css.jq.volumeBar.hide(), this.css.jq.volumeBarValue.length && this.css.jq.volumeBarValue.hide(), this.css.jq.volumeMax.length && this.css.jq.volumeMax.hide()) : (this.css.jq.volumeBar.length && this.css.jq.volumeBar.show(), this.css.jq.volumeBarValue.length && (this.css.jq.volumeBarValue.show(), this.css.jq.volumeBarValue[this.options.verticalVolume ? "height" : "width"](100 * t + "%")), this.css.jq.volumeMax.length && this.css.jq.volumeMax.show())
    }, volumeMax: function () {
        this.volume(1), this.options.muted && this._muted(!1)
    }, _cssSelectorAncestor: function (e) {
        var i = this;
        this.options.cssSelectorAncestor = e, this._removeUiClass(), this.ancestorJq = e ? t(e) : [], e && 1 !== this.ancestorJq.length && this._warning({type: t.jPlayer.warning.CSS_SELECTOR_COUNT, context: e, message: t.jPlayer.warningMsg.CSS_SELECTOR_COUNT + this.ancestorJq.length + " found for cssSelectorAncestor.", hint: t.jPlayer.warningHint.CSS_SELECTOR_COUNT}), this._addUiClass(), t.each(this.options.cssSelector, function (t, e) {
            i._cssSelector(t, e)
        }), this._updateInterface(), this._updateButtons(), this._updateAutohide(), this._updateVolume(), this._updateMute()
    }, _cssSelector: function (e, i) {
        var n = this;
        if ("string" == typeof i)if (t.jPlayer.prototype.options.cssSelector[e]) {
            if (this.css.jq[e] && this.css.jq[e].length && this.css.jq[e].unbind(".jPlayer"), this.options.cssSelector[e] = i, this.css.cs[e] = this.options.cssSelectorAncestor + " " + i, this.css.jq[e] = i ? t(this.css.cs[e]) : [], this.css.jq[e].length) {
                var s = function (i) {
                    i.preventDefault(), n[e](i), t(this).blur()
                };
                this.css.jq[e].bind("click.jPlayer", s)
            }
            i && 1 !== this.css.jq[e].length && this._warning({type: t.jPlayer.warning.CSS_SELECTOR_COUNT, context: this.css.cs[e], message: t.jPlayer.warningMsg.CSS_SELECTOR_COUNT + this.css.jq[e].length + " found for " + e + " method.", hint: t.jPlayer.warningHint.CSS_SELECTOR_COUNT})
        } else this._warning({type: t.jPlayer.warning.CSS_SELECTOR_METHOD, context: e, message: t.jPlayer.warningMsg.CSS_SELECTOR_METHOD, hint: t.jPlayer.warningHint.CSS_SELECTOR_METHOD}); else this._warning({type: t.jPlayer.warning.CSS_SELECTOR_STRING, context: i, message: t.jPlayer.warningMsg.CSS_SELECTOR_STRING, hint: t.jPlayer.warningHint.CSS_SELECTOR_STRING})
    }, seekBar: function (e) {
        if (this.css.jq.seekBar.length) {
            var i = t(e.currentTarget), n = i.offset(), s = e.pageX - n.left, a = i.width(), o = 100 * s / a;
            this.playHead(o)
        }
    }, playBar: function () {
    }, repeat: function () {
        this._loop(!0)
    }, repeatOff: function () {
        this._loop(!1)
    }, _loop: function (e) {
        this.options.loop !== e && (this.options.loop = e, this._updateButtons(), this._trigger(t.jPlayer.event.repeat))
    }, currentTime: function () {
    }, duration: function () {
    }, gui: function () {
    }, noSolution: function () {
    }, option: function (i, n) {
        var s = i;
        if (0 === arguments.length)return t.extend(!0, {}, this.options);
        if ("string" == typeof i) {
            var a = i.split(".");
            if (n === e) {
                for (var o = t.extend(!0, {}, this.options), r = 0; r < a.length; r++) {
                    if (o[a[r]] === e)return this._warning({type: t.jPlayer.warning.OPTION_KEY, context: i, message: t.jPlayer.warningMsg.OPTION_KEY, hint: t.jPlayer.warningHint.OPTION_KEY}), e;
                    o = o[a[r]]
                }
                return o
            }
            s = {};
            for (var l = s, c = 0; c < a.length; c++)c < a.length - 1 ? (l[a[c]] = {}, l = l[a[c]]) : l[a[c]] = n
        }
        return this._setOptions(s), this
    }, _setOptions: function (e) {
        var i = this;
        return t.each(e, function (t, e) {
            i._setOption(t, e)
        }), this
    }, _setOption: function (e, i) {
        var n = this;
        switch (e) {
            case"volume":
                this.volume(i);
                break;
            case"muted":
                this._muted(i);
                break;
            case"cssSelectorAncestor":
                this._cssSelectorAncestor(i);
                break;
            case"cssSelector":
                t.each(i, function (t, e) {
                    n._cssSelector(t, e)
                });
                break;
            case"fullScreen":
                if (this.options[e] !== i) {
                    var s = t.jPlayer.nativeFeatures.fullscreen.used.webkitVideo;
                    (!s || s && !this.status.waitForPlay) && (s || (this.options[e] = i), i ? this._requestFullscreen() : this._exitFullscreen(), s || this._setOption("fullWindow", i))
                }
                break;
            case"fullWindow":
                this.options[e] !== i && (this._removeUiClass(), this.options[e] = i, this._refreshSize());
                break;
            case"size":
                this.options.fullWindow || this.options[e].cssClass === i.cssClass || this._removeUiClass(), this.options[e] = t.extend({}, this.options[e], i), this._refreshSize();
                break;
            case"sizeFull":
                this.options.fullWindow && this.options[e].cssClass !== i.cssClass && this._removeUiClass(), this.options[e] = t.extend({}, this.options[e], i), this._refreshSize();
                break;
            case"autohide":
                this.options[e] = t.extend({}, this.options[e], i), this._updateAutohide();
                break;
            case"loop":
                this._loop(i);
                break;
            case"nativeVideoControls":
                this.options[e] = t.extend({}, this.options[e], i), this.status.nativeVideoControls = this._uaBlocklist(this.options.nativeVideoControls), this._restrictNativeVideoControls(), this._updateNativeVideoControls();
                break;
            case"noFullWindow":
                this.options[e] = t.extend({}, this.options[e], i), this.status.nativeVideoControls = this._uaBlocklist(this.options.nativeVideoControls), this.status.noFullWindow = this._uaBlocklist(this.options.noFullWindow), this._restrictNativeVideoControls(), this._updateButtons();
                break;
            case"noVolume":
                this.options[e] = t.extend({}, this.options[e], i), this.status.noVolume = this._uaBlocklist(this.options.noVolume), this._updateVolume(), this._updateMute();
                break;
            case"emulateHtml":
                this.options[e] !== i && (this.options[e] = i, i ? this._emulateHtmlBridge() : this._destroyHtmlBridge());
                break;
            case"timeFormat":
                this.options[e] = t.extend({}, this.options[e], i);
                break;
            case"keyEnabled":
                this.options[e] = i, i || this !== t.jPlayer.focus || (t.jPlayer.focus = null);
                break;
            case"keyBindings":
                this.options[e] = t.extend(!0, {}, this.options[e], i);
                break;
            case"audioFullScreen":
                this.options[e] = i
        }
        return this
    }, _refreshSize: function () {
        this._setSize(), this._addUiClass(), this._updateSize(), this._updateButtons(), this._updateAutohide(), this._trigger(t.jPlayer.event.resize)
    }, _setSize: function () {
        this.options.fullWindow ? (this.status.width = this.options.sizeFull.width, this.status.height = this.options.sizeFull.height, this.status.cssClass = this.options.sizeFull.cssClass) : (this.status.width = this.options.size.width, this.status.height = this.options.size.height, this.status.cssClass = this.options.size.cssClass), this.element.css({width: this.status.width, height: this.status.height})
    }, _addUiClass: function () {
        this.ancestorJq.length && this.ancestorJq.addClass(this.status.cssClass)
    }, _removeUiClass: function () {
        this.ancestorJq.length && this.ancestorJq.removeClass(this.status.cssClass)
    }, _updateSize: function () {
        this.internal.poster.jq.css({width: this.status.width, height: this.status.height}), !this.status.waitForPlay && this.html.active && this.status.video || this.html.video.available && this.html.used && this.status.nativeVideoControls ? this.internal.video.jq.css({width: this.status.width, height: this.status.height}) : !this.status.waitForPlay && this.flash.active && this.status.video && this.internal.flash.jq.css({width: this.status.width, height: this.status.height})
    }, _updateAutohide: function () {
        var t = this, e = "mousemove.jPlayer", i = ".jPlayerAutohide", n = e + i, s = function () {
            t.css.jq.gui.fadeIn(t.options.autohide.fadeIn, function () {
                clearTimeout(t.internal.autohideId), t.internal.autohideId = setTimeout(function () {
                    t.css.jq.gui.fadeOut(t.options.autohide.fadeOut)
                }, t.options.autohide.hold)
            })
        };
        this.css.jq.gui.length && (this.css.jq.gui.stop(!0, !0), clearTimeout(this.internal.autohideId), this.element.unbind(i), this.css.jq.gui.unbind(i), this.status.nativeVideoControls ? this.css.jq.gui.hide() : this.options.fullWindow && this.options.autohide.full || !this.options.fullWindow && this.options.autohide.restored ? (this.element.bind(n, s), this.css.jq.gui.bind(n, s), this.css.jq.gui.hide()) : this.css.jq.gui.show())
    }, fullScreen: function () {
        this._setOption("fullScreen", !0)
    }, restoreScreen: function () {
        this._setOption("fullScreen", !1)
    }, _fullscreenAddEventListeners: function () {
        var e = this, i = t.jPlayer.nativeFeatures.fullscreen;
        i.api.fullscreenEnabled && i.event.fullscreenchange && ("function" != typeof this.internal.fullscreenchangeHandler && (this.internal.fullscreenchangeHandler = function () {
            e._fullscreenchange()
        }), document.addEventListener(i.event.fullscreenchange, this.internal.fullscreenchangeHandler, !1))
    }, _fullscreenRemoveEventListeners: function () {
        var e = t.jPlayer.nativeFeatures.fullscreen;
        this.internal.fullscreenchangeHandler && document.addEventListener(e.event.fullscreenchange, this.internal.fullscreenchangeHandler, !1)
    }, _fullscreenchange: function () {
        this.options.fullScreen && !t.jPlayer.nativeFeatures.fullscreen.api.fullscreenElement() && this._setOption("fullScreen", !1)
    }, _requestFullscreen: function () {
        var e = this.ancestorJq.length ? this.ancestorJq[0] : this.element[0], i = t.jPlayer.nativeFeatures.fullscreen;
        i.used.webkitVideo && (e = this.htmlElement.video), i.api.fullscreenEnabled && i.api.requestFullscreen(e)
    }, _exitFullscreen: function () {
        var e, i = t.jPlayer.nativeFeatures.fullscreen;
        i.used.webkitVideo && (e = this.htmlElement.video), i.api.fullscreenEnabled && i.api.exitFullscreen(e)
    }, _html_initMedia: function (e) {
        var i = t(this.htmlElement.media).empty();
        t.each(e.track || [], function (t, e) {
            var n = document.createElement("track");
            n.setAttribute("kind", e.kind ? e.kind : ""), n.setAttribute("src", e.src ? e.src : ""), n.setAttribute("srclang", e.srclang ? e.srclang : ""), n.setAttribute("label", e.label ? e.label : ""), e.def && n.setAttribute("default", e.def), i.append(n)
        }), this.htmlElement.media.src = this.status.src, "none" !== this.options.preload && this._html_load(), this._trigger(t.jPlayer.event.timeupdate)
    }, _html_setFormat: function (e) {
        var i = this;
        t.each(this.formats, function (t, n) {
            return i.html.support[n] && e[n] ? (i.status.src = e[n], i.status.format[n] = !0, i.status.formatType = n, !1) : void 0
        })
    }, _html_setAudio: function (t) {
        this._html_setFormat(t), this.htmlElement.media = this.htmlElement.audio, this._html_initMedia(t)
    }, _html_setVideo: function (t) {
        this._html_setFormat(t), this.status.nativeVideoControls && (this.htmlElement.video.poster = this._validString(t.poster) ? t.poster : ""), this.htmlElement.media = this.htmlElement.video, this._html_initMedia(t)
    }, _html_resetMedia: function () {
        this.htmlElement.media && (this.htmlElement.media.id !== this.internal.video.id || this.status.nativeVideoControls || this.internal.video.jq.css({width: "0px", height: "0px"}), this.htmlElement.media.pause())
    }, _html_clearMedia: function () {
        this.htmlElement.media && (this.htmlElement.media.src = "about:blank", this.htmlElement.media.load())
    }, _html_load: function () {
        this.status.waitForLoad && (this.status.waitForLoad = !1, this.htmlElement.media.load()), clearTimeout(this.internal.htmlDlyCmdId)
    }, _html_play: function (t) {
        var e = this, i = this.htmlElement.media;
        if (this._html_load(), isNaN(t))i.play(); else {
            this.internal.cmdsIgnored && i.play();
            try {
                if (i.seekable && !("object" == typeof i.seekable && i.seekable.length > 0))throw 1;
                i.currentTime = t, i.play()
            } catch (n) {
                return this.internal.htmlDlyCmdId = setTimeout(function () {
                    e.play(t)
                }, 250), void 0
            }
        }
        this._html_checkWaitForPlay()
    }, _html_pause: function (t) {
        var e = this, i = this.htmlElement.media;
        if (t > 0 ? this._html_load() : clearTimeout(this.internal.htmlDlyCmdId), i.pause(), !isNaN(t))try {
            if (i.seekable && !("object" == typeof i.seekable && i.seekable.length > 0))throw 1;
            i.currentTime = t
        } catch (n) {
            return this.internal.htmlDlyCmdId = setTimeout(function () {
                e.pause(t)
            }, 250), void 0
        }
        t > 0 && this._html_checkWaitForPlay()
    }, _html_playHead: function (t) {
        var e = this, i = this.htmlElement.media;
        this._html_load();
        try {
            if ("object" == typeof i.seekable && i.seekable.length > 0)i.currentTime = t * i.seekable.end(i.seekable.length - 1) / 100; else {
                if (!(i.duration > 0) || isNaN(i.duration))throw"e";
                i.currentTime = t * i.duration / 100
            }
        } catch (n) {
            return this.internal.htmlDlyCmdId = setTimeout(function () {
                e.playHead(t)
            }, 250), void 0
        }
        this.status.waitForLoad || this._html_checkWaitForPlay()
    }, _html_checkWaitForPlay: function () {
        this.status.waitForPlay && (this.status.waitForPlay = !1, this.css.jq.videoPlay.length && this.css.jq.videoPlay.hide(), this.status.video && (this.internal.poster.jq.hide(), this.internal.video.jq.css({width: this.status.width, height: this.status.height})))
    }, _html_volume: function (t) {
        this.html.audio.available && (this.htmlElement.audio.volume = t), this.html.video.available && (this.htmlElement.video.volume = t)
    }, _html_mute: function (t) {
        this.html.audio.available && (this.htmlElement.audio.muted = t), this.html.video.available && (this.htmlElement.video.muted = t)
    }, _flash_setAudio: function (e) {
        var i = this;
        try {
            t.each(this.formats, function (t, n) {
                if (i.flash.support[n] && e[n]) {
                    switch (n) {
                        case"m4a":
                        case"fla":
                            i._getMovie().fl_setAudio_m4a(e[n]);
                            break;
                        case"mp3":
                            i._getMovie().fl_setAudio_mp3(e[n]);
                            break;
                        case"rtmpa":
                            i._getMovie().fl_setAudio_rtmp(e[n])
                    }
                    return i.status.src = e[n], i.status.format[n] = !0, i.status.formatType = n, !1
                }
            }), "auto" === this.options.preload && (this._flash_load(), this.status.waitForLoad = !1)
        } catch (n) {
            this._flashError(n)
        }
    }, _flash_setVideo: function (e) {
        var i = this;
        try {
            t.each(this.formats, function (t, n) {
                if (i.flash.support[n] && e[n]) {
                    switch (n) {
                        case"m4v":
                        case"flv":
                            i._getMovie().fl_setVideo_m4v(e[n]);
                            break;
                        case"rtmpv":
                            i._getMovie().fl_setVideo_rtmp(e[n])
                    }
                    return i.status.src = e[n], i.status.format[n] = !0, i.status.formatType = n, !1
                }
            }), "auto" === this.options.preload && (this._flash_load(), this.status.waitForLoad = !1)
        } catch (n) {
            this._flashError(n)
        }
    }, _flash_resetMedia: function () {
        this.internal.flash.jq.css({width: "0px", height: "0px"}), this._flash_pause(0 / 0)
    }, _flash_clearMedia: function () {
        try {
            this._getMovie().fl_clearMedia()
        } catch (t) {
            this._flashError(t)
        }
    }, _flash_load: function () {
        try {
            this._getMovie().fl_load()
        } catch (t) {
            this._flashError(t)
        }
        this.status.waitForLoad = !1
    }, _flash_play: function (t) {
        try {
            this._getMovie().fl_play(t)
        } catch (e) {
            this._flashError(e)
        }
        this.status.waitForLoad = !1, this._flash_checkWaitForPlay()
    }, _flash_pause: function (t) {
        try {
            this._getMovie().fl_pause(t)
        } catch (e) {
            this._flashError(e)
        }
        t > 0 && (this.status.waitForLoad = !1, this._flash_checkWaitForPlay())
    }, _flash_playHead: function (t) {
        try {
            this._getMovie().fl_play_head(t)
        } catch (e) {
            this._flashError(e)
        }
        this.status.waitForLoad || this._flash_checkWaitForPlay()
    }, _flash_checkWaitForPlay: function () {
        this.status.waitForPlay && (this.status.waitForPlay = !1, this.css.jq.videoPlay.length && this.css.jq.videoPlay.hide(), this.status.video && (this.internal.poster.jq.hide(), this.internal.flash.jq.css({width: this.status.width, height: this.status.height})))
    }, _flash_volume: function (t) {
        try {
            this._getMovie().fl_volume(t)
        } catch (e) {
            this._flashError(e)
        }
    }, _flash_mute: function (t) {
        try {
            this._getMovie().fl_mute(t)
        } catch (e) {
            this._flashError(e)
        }
    }, _getMovie: function () {
        return document[this.internal.flash.id]
    }, _getFlashPluginVersion: function () {
        var t, e = 0;
        if (window.ActiveXObject)try {
            if (t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) {
                var i = t.GetVariable("$version");
                i && (i = i.split(" ")[1].split(","), e = parseInt(i[0], 10) + "." + parseInt(i[1], 10))
            }
        } catch (n) {
        } else navigator.plugins && navigator.mimeTypes.length > 0 && (t = navigator.plugins["Shockwave Flash"], t && (e = navigator.plugins["Shockwave Flash"].description.replace(/.*\s(\d+\.\d+).*/, "$1")));
        return 1 * e
    }, _checkForFlash: function (t) {
        var e = !1;
        return this._getFlashPluginVersion() >= t && (e = !0), e
    }, _validString: function (t) {
        return t && "string" == typeof t
    }, _limitValue: function (t, e, i) {
        return e > t ? e : t > i ? i : t
    }, _urlNotSetError: function (e) {
        this._error({type: t.jPlayer.error.URL_NOT_SET, context: e, message: t.jPlayer.errorMsg.URL_NOT_SET, hint: t.jPlayer.errorHint.URL_NOT_SET})
    }, _flashError: function (e) {
        var i;
        i = this.internal.ready ? "FLASH_DISABLED" : "FLASH", this._error({type: t.jPlayer.error[i], context: this.internal.flash.swf, message: t.jPlayer.errorMsg[i] + e.message, hint: t.jPlayer.errorHint[i]}), this.internal.flash.jq.css({width: "1px", height: "1px"})
    }, _error: function (e) {
        this._trigger(t.jPlayer.event.error, e), this.options.errorAlerts && this._alert("Error!" + (e.message ? "\n\n" + e.message : "") + (e.hint ? "\n\n" + e.hint : "") + "\n\nContext: " + e.context)
    }, _warning: function (i) {
        this._trigger(t.jPlayer.event.warning, e, i), this.options.warningAlerts && this._alert("Warning!" + (i.message ? "\n\n" + i.message : "") + (i.hint ? "\n\n" + i.hint : "") + "\n\nContext: " + i.context)
    }, _alert: function (t) {
        alert("jPlayer " + this.version.script + " : id='" + this.internal.self.id + "' : " + t)
    }, _emulateHtmlBridge: function () {
        var e = this;
        t.each(t.jPlayer.emulateMethods.split(/\s+/g), function (t, i) {
            e.internal.domNode[i] = function (t) {
                e[i](t)
            }
        }), t.each(t.jPlayer.event, function (i, n) {
            var s = !0;
            t.each(t.jPlayer.reservedEvent.split(/\s+/g), function (t, e) {
                return e === i ? (s = !1, !1) : void 0
            }), s && e.element.bind(n + ".jPlayer.jPlayerHtml", function () {
                e._emulateHtmlUpdate();
                var t = document.createEvent("Event");
                t.initEvent(i, !1, !0), e.internal.domNode.dispatchEvent(t)
            })
        })
    }, _emulateHtmlUpdate: function () {
        var e = this;
        t.each(t.jPlayer.emulateStatus.split(/\s+/g), function (t, i) {
            e.internal.domNode[i] = e.status[i]
        }), t.each(t.jPlayer.emulateOptions.split(/\s+/g), function (t, i) {
            e.internal.domNode[i] = e.options[i]
        })
    }, _destroyHtmlBridge: function () {
        var e = this;
        this.element.unbind(".jPlayerHtml");
        var i = t.jPlayer.emulateMethods + " " + t.jPlayer.emulateStatus + " " + t.jPlayer.emulateOptions;
        t.each(i.split(/\s+/g), function (t, i) {
            delete e.internal.domNode[i]
        })
    }}, t.jPlayer.error = {FLASH: "e_flash", FLASH_DISABLED: "e_flash_disabled", NO_SOLUTION: "e_no_solution", NO_SUPPORT: "e_no_support", URL: "e_url", URL_NOT_SET: "e_url_not_set", VERSION: "e_version"}, t.jPlayer.errorMsg = {FLASH: "jPlayer's Flash fallback is not configured correctly, or a command was issued before the jPlayer Ready event. Details: ", FLASH_DISABLED: "jPlayer's Flash fallback has been disabled by the browser due to the CSS rules you have used. Details: ", NO_SOLUTION: "No solution can be found by jPlayer in this browser. Neither HTML nor Flash can be used.", NO_SUPPORT: "It is not possible to play any media format provided in setMedia() on this browser using your current options.", URL: "Media URL could not be loaded.", URL_NOT_SET: "Attempt to issue media playback commands, while no media url is set.", VERSION: "jPlayer " + t.jPlayer.prototype.version.script + " needs Jplayer.swf version " + t.jPlayer.prototype.version.needFlash + " but found "}, t.jPlayer.errorHint = {FLASH: "Check your swfPath option and that Jplayer.swf is there.", FLASH_DISABLED: "Check that you have not display:none; the jPlayer entity or any ancestor.", NO_SOLUTION: "Review the jPlayer options: support and supplied.", NO_SUPPORT: "Video or audio formats defined in the supplied option are missing.", URL: "Check media URL is valid.", URL_NOT_SET: "Use setMedia() to set the media URL.", VERSION: "Update jPlayer files."}, t.jPlayer.warning = {CSS_SELECTOR_COUNT: "e_css_selector_count", CSS_SELECTOR_METHOD: "e_css_selector_method", CSS_SELECTOR_STRING: "e_css_selector_string", OPTION_KEY: "e_option_key"}, t.jPlayer.warningMsg = {CSS_SELECTOR_COUNT: "The number of css selectors found did not equal one: ", CSS_SELECTOR_METHOD: "The methodName given in jPlayer('cssSelector') is not a valid jPlayer method.", CSS_SELECTOR_STRING: "The methodCssSelector given in jPlayer('cssSelector') is not a String or is empty.", OPTION_KEY: "The option requested in jPlayer('option') is undefined."}, t.jPlayer.warningHint = {CSS_SELECTOR_COUNT: "Check your css selector and the ancestor.", CSS_SELECTOR_METHOD: "Check your method name.", CSS_SELECTOR_STRING: "Check your css selector is a string.", OPTION_KEY: "Check your option name."}
}), function (t, e, i, n) {
    "use strict";
    var s = i("html"), a = i(t), o = i(e), r = i.fancybox = function () {
        r.open.apply(this, arguments)
    }, l = navigator.userAgent.match(/msie/i), c = null, d = e.createTouch !== n, u = function (t) {
        return t && t.hasOwnProperty && t instanceof i
    }, h = function (t) {
        return t && "string" === i.type(t)
    }, p = function (t) {
        return h(t) && t.indexOf("%") > 0
    }, f = function (t) {
        return t && !(t.style.overflow && "hidden" === t.style.overflow) && (t.clientWidth && t.scrollWidth > t.clientWidth || t.clientHeight && t.scrollHeight > t.clientHeight)
    }, m = function (t, e) {
        var i = parseInt(t, 10) || 0;
        return e && p(t) && (i = r.getViewport()[e] / 100 * i), Math.ceil(i)
    }, g = function (t, e) {
        return m(t, e) + "px"
    };
    i.extend(r, {version: "2.1.5", defaults: {padding: 15, margin: 20, width: 800, height: 600, minWidth: 100, minHeight: 100, maxWidth: 9999, maxHeight: 9999, pixelRatio: 1, autoSize: !0, autoHeight: !1, autoWidth: !1, autoResize: !0, autoCenter: !d, fitToView: !0, aspectRatio: !1, topRatio: .5, leftRatio: .5, scrolling: "auto", wrapCSS: "", arrows: !0, closeBtn: !0, closeClick: !1, nextClick: !1, mouseWheel: !0, autoPlay: !1, playSpeed: 3e3, preload: 3, modal: !1, loop: !0, ajax: {dataType: "html", headers: {"X-fancyBox": !0}}, iframe: {scrolling: "auto", preload: !0}, swf: {wmode: "transparent", allowfullscreen: "true", allowscriptaccess: "always"}, keys: {next: {13: "left", 34: "up", 39: "left", 40: "up"}, prev: {8: "right", 33: "down", 37: "right", 38: "down"}, close: [27], play: [32], toggle: [70]}, direction: {next: "left", prev: "right"}, scrollOutside: !0, index: 0, type: null, href: null, content: null, title: null, tpl: {wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>', image: '<img class="fancybox-image" src="{href}" alt="" />', iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (l ? ' allowtransparency="true"' : "") + "></iframe>", error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>', closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>', next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>', prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'}, openEffect: "fade", openSpeed: 250, openEasing: "swing", openOpacity: !0, openMethod: "zoomIn", closeEffect: "fade", closeSpeed: 250, closeEasing: "swing", closeOpacity: !0, closeMethod: "zoomOut", nextEffect: "elastic", nextSpeed: 250, nextEasing: "swing", nextMethod: "changeIn", prevEffect: "elastic", prevSpeed: 250, prevEasing: "swing", prevMethod: "changeOut", helpers: {overlay: !0, title: !0}, onCancel: i.noop, beforeLoad: i.noop, afterLoad: i.noop, beforeShow: i.noop, afterShow: i.noop, beforeChange: i.noop, beforeClose: i.noop, afterClose: i.noop}, group: {}, opts: {}, previous: null, coming: null, current: null, isActive: !1, isOpen: !1, isOpened: !1, wrap: null, skin: null, outer: null, inner: null, player: {timer: null, isActive: !1}, ajaxLoad: null, imgPreload: null, transitions: {}, helpers: {}, open: function (t, e) {
        return t && (i.isPlainObject(e) || (e = {}), !1 !== r.close(!0)) ? (i.isArray(t) || (t = u(t) ? i(t).get() : [t]), i.each(t, function (s, a) {
            var o, l, c, d, p, f, m, g = {};
            "object" === i.type(a) && (a.nodeType && (a = i(a)), u(a) ? (g = {href: a.data("fancybox-href") || a.attr("href"), title: a.data("fancybox-title") || a.attr("title"), isDom: !0, element: a}, i.metadata && i.extend(!0, g, a.metadata())) : g = a), o = e.href || g.href || (h(a) ? a : null), l = e.title !== n ? e.title : g.title || "", c = e.content || g.content, d = c ? "html" : e.type || g.type, !d && g.isDom && (d = a.data("fancybox-type"), d || (p = a.prop("class").match(/fancybox\.(\w+)/), d = p ? p[1] : null)), h(o) && (d || (r.isImage(o) ? d = "image" : r.isSWF(o) ? d = "swf" : "#" === o.charAt(0) ? d = "inline" : h(a) && (d = "html", c = a)), "ajax" === d && (f = o.split(/\s+/, 2), o = f.shift(), m = f.shift())), c || ("inline" === d ? o ? c = i(h(o) ? o.replace(/.*(?=#[^\s]+$)/, "") : o) : g.isDom && (c = a) : "html" === d ? c = o : d || o || !g.isDom || (d = "inline", c = a)), i.extend(g, {href: o, type: d, content: c, title: l, selector: m}), t[s] = g
        }), r.opts = i.extend(!0, {}, r.defaults, e), e.keys !== n && (r.opts.keys = e.keys ? i.extend({}, r.defaults.keys, e.keys) : !1), r.group = t, r._start(r.opts.index)) : void 0
    }, cancel: function () {
        var t = r.coming;
        t && !1 !== r.trigger("onCancel") && (r.hideLoading(), r.ajaxLoad && r.ajaxLoad.abort(), r.ajaxLoad = null, r.imgPreload && (r.imgPreload.onload = r.imgPreload.onerror = null), t.wrap && t.wrap.stop(!0, !0).trigger("onReset").remove(), r.coming = null, r.current || r._afterZoomOut(t))
    }, close: function (t) {
        r.cancel(), !1 !== r.trigger("beforeClose") && (r.unbindEvents(), r.isActive && (r.isOpen && t !== !0 ? (r.isOpen = r.isOpened = !1, r.isClosing = !0, i(".fancybox-item, .fancybox-nav").remove(), r.wrap.stop(!0, !0).removeClass("fancybox-opened"), r.transitions[r.current.closeMethod]()) : (i(".fancybox-wrap").stop(!0).trigger("onReset").remove(), r._afterZoomOut())))
    }, play: function (t) {
        var e = function () {
            clearTimeout(r.player.timer)
        }, i = function () {
            e(), r.current && r.player.isActive && (r.player.timer = setTimeout(r.next, r.current.playSpeed))
        }, n = function () {
            e(), o.unbind(".player"), r.player.isActive = !1, r.trigger("onPlayEnd")
        }, s = function () {
            r.current && (r.current.loop || r.current.index < r.group.length - 1) && (r.player.isActive = !0, o.bind({"onCancel.player beforeClose.player": n, "onUpdate.player": i, "beforeLoad.player": e}), i(), r.trigger("onPlayStart"))
        };
        t === !0 || !r.player.isActive && t !== !1 ? s() : n()
    }, next: function (t) {
        var e = r.current;
        e && (h(t) || (t = e.direction.next), r.jumpto(e.index + 1, t, "next"))
    }, prev: function (t) {
        var e = r.current;
        e && (h(t) || (t = e.direction.prev), r.jumpto(e.index - 1, t, "prev"))
    }, jumpto: function (t, e, i) {
        var s = r.current;
        s && (t = m(t), r.direction = e || s.direction[t >= s.index ? "next" : "prev"], r.router = i || "jumpto", s.loop && (0 > t && (t = s.group.length + t % s.group.length), t %= s.group.length), s.group[t] !== n && (r.cancel(), r._start(t)))
    }, reposition: function (t, e) {
        var n, s = r.current, a = s ? s.wrap : null;
        a && (n = r._getPosition(e), t && "scroll" === t.type ? (delete n.position, a.stop(!0, !0).animate(n, 200)) : (a.css(n), s.pos = i.extend({}, s.dim, n)))
    }, update: function (t) {
        var e = t && t.type, i = !e || "orientationchange" === e;
        i && (clearTimeout(c), c = null), r.isOpen && !c && (c = setTimeout(function () {
            var n = r.current;
            n && !r.isClosing && (r.wrap.removeClass("fancybox-tmp"), (i || "load" === e || "resize" === e && n.autoResize) && r._setDimension(), "scroll" === e && n.canShrink || r.reposition(t), r.trigger("onUpdate"), c = null)
        }, i && !d ? 0 : 300))
    }, toggle: function (t) {
        r.isOpen && (r.current.fitToView = "boolean" === i.type(t) ? t : !r.current.fitToView, d && (r.wrap.removeAttr("style").addClass("fancybox-tmp"), r.trigger("onUpdate")), r.update())
    }, hideLoading: function () {
        o.unbind(".loading"), i("#fancybox-loading").remove()
    }, showLoading: function () {
        var t, e;
        r.hideLoading(), t = i('<div id="fancybox-loading"><div></div></div>').click(r.cancel).appendTo("body"), o.bind("keydown.loading", function (t) {
            27 === (t.which || t.keyCode) && (t.preventDefault(), r.cancel())
        }), r.defaults.fixed || (e = r.getViewport(), t.css({position: "absolute", top: .5 * e.h + e.y, left: .5 * e.w + e.x}))
    }, getViewport: function () {
        var e = r.current && r.current.locked || !1, i = {x: a.scrollLeft(), y: a.scrollTop()};
        return e ? (i.w = e[0].clientWidth, i.h = e[0].clientHeight) : (i.w = d && t.innerWidth ? t.innerWidth : a.width(), i.h = d && t.innerHeight ? t.innerHeight : a.height()), i
    }, unbindEvents: function () {
        r.wrap && u(r.wrap) && r.wrap.unbind(".fb"), o.unbind(".fb"), a.unbind(".fb")
    }, bindEvents: function () {
        var t, e = r.current;
        e && (a.bind("orientationchange.fb" + (d ? "" : " resize.fb") + (e.autoCenter && !e.locked ? " scroll.fb" : ""), r.update), t = e.keys, t && o.bind("keydown.fb", function (s) {
            var a = s.which || s.keyCode, o = s.target || s.srcElement;
            return 27 === a && r.coming ? !1 : (s.ctrlKey || s.altKey || s.shiftKey || s.metaKey || o && (o.type || i(o).is("[contenteditable]")) || i.each(t, function (t, o) {
                return e.group.length > 1 && o[a] !== n ? (r[t](o[a]), s.preventDefault(), !1) : i.inArray(a, o) > -1 ? (r[t](), s.preventDefault(), !1) : void 0
            }), void 0)
        }), i.fn.mousewheel && e.mouseWheel && r.wrap.bind("mousewheel.fb", function (t, n, s, a) {
            for (var o = t.target || null, l = i(o), c = !1; l.length && !(c || l.is(".fancybox-skin") || l.is(".fancybox-wrap"));)c = f(l[0]), l = i(l).parent();
            0 === n || c || r.group.length > 1 && !e.canShrink && (a > 0 || s > 0 ? r.prev(a > 0 ? "down" : "left") : (0 > a || 0 > s) && r.next(0 > a ? "up" : "right"), t.preventDefault())
        }))
    }, trigger: function (t, e) {
        var n, s = e || r.coming || r.current;
        if (s) {
            if (i.isFunction(s[t]) && (n = s[t].apply(s, Array.prototype.slice.call(arguments, 1))), n === !1)return!1;
            s.helpers && i.each(s.helpers, function (e, n) {
                n && r.helpers[e] && i.isFunction(r.helpers[e][t]) && r.helpers[e][t](i.extend(!0, {}, r.helpers[e].defaults, n), s)
            }), o.trigger(t)
        }
    }, isImage: function (t) {
        return h(t) && t.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
    }, isSWF: function (t) {
        return h(t) && t.match(/\.(swf)((\?|#).*)?$/i)
    }, _start: function (t) {
        var e, n, s, a, o, l = {};
        if (t = m(t), e = r.group[t] || null, !e)return!1;
        if (l = i.extend(!0, {}, r.opts, e), a = l.margin, o = l.padding, "number" === i.type(a) && (l.margin = [a, a, a, a]), "number" === i.type(o) && (l.padding = [o, o, o, o]), l.modal && i.extend(!0, l, {closeBtn: !1, closeClick: !1, nextClick: !1, arrows: !1, mouseWheel: !1, keys: null, helpers: {overlay: {closeClick: !1}}}), l.autoSize && (l.autoWidth = l.autoHeight = !0), "auto" === l.width && (l.autoWidth = !0), "auto" === l.height && (l.autoHeight = !0), l.group = r.group, l.index = t, r.coming = l, !1 === r.trigger("beforeLoad"))return r.coming = null, void 0;
        if (s = l.type, n = l.href, !s)return r.coming = null, r.current && r.router && "jumpto" !== r.router ? (r.current.index = t, r[r.router](r.direction)) : !1;
        if (r.isActive = !0, ("image" === s || "swf" === s) && (l.autoHeight = l.autoWidth = !1, l.scrolling = "visible"), "image" === s && (l.aspectRatio = !0), "iframe" === s && d && (l.scrolling = "scroll"), l.wrap = i(l.tpl.wrap).addClass("fancybox-" + (d ? "mobile" : "desktop") + " fancybox-type-" + s + " fancybox-tmp " + l.wrapCSS).appendTo(l.parent || "body"), i.extend(l, {skin: i(".fancybox-skin", l.wrap), outer: i(".fancybox-outer", l.wrap), inner: i(".fancybox-inner", l.wrap)}), i.each(["Top", "Right", "Bottom", "Left"], function (t, e) {
            l.skin.css("padding" + e, g(l.padding[t]))
        }), r.trigger("onReady"), "inline" === s || "html" === s) {
            if (!l.content || !l.content.length)return r._error("content")
        } else if (!n)return r._error("href");
        "image" === s ? r._loadImage() : "ajax" === s ? r._loadAjax() : "iframe" === s ? r._loadIframe() : r._afterLoad()
    }, _error: function (t) {
        i.extend(r.coming, {type: "html", autoWidth: !0, autoHeight: !0, minWidth: 0, minHeight: 0, scrolling: "no", hasError: t, content: r.coming.tpl.error}), r._afterLoad()
    }, _loadImage: function () {
        var t = r.imgPreload = new Image;
        t.onload = function () {
            this.onload = this.onerror = null, r.coming.width = this.width / r.opts.pixelRatio, r.coming.height = this.height / r.opts.pixelRatio, r._afterLoad()
        }, t.onerror = function () {
            this.onload = this.onerror = null, r._error("image")
        }, t.src = r.coming.href, t.complete !== !0 && r.showLoading()
    }, _loadAjax: function () {
        var t = r.coming;
        r.showLoading(), r.ajaxLoad = i.ajax(i.extend({}, t.ajax, {url: t.href, error: function (t, e) {
            r.coming && "abort" !== e ? r._error("ajax", t) : r.hideLoading()
        }, success: function (e, i) {
            "success" === i && (t.content = e, r._afterLoad())
        }}))
    }, _loadIframe: function () {
        var t = r.coming, e = i(t.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", d ? "auto" : t.iframe.scrolling).attr("src", t.href);
        i(t.wrap).bind("onReset", function () {
            try {
                i(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
            } catch (t) {
            }
        }), t.iframe.preload && (r.showLoading(), e.one("load", function () {
            i(this).data("ready", 1), d || i(this).bind("load.fb", r.update), i(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), r._afterLoad()
        })), t.content = e.appendTo(t.inner), t.iframe.preload || r._afterLoad()
    }, _preloadImages: function () {
        var t, e, i = r.group, n = r.current, s = i.length, a = n.preload ? Math.min(n.preload, s - 1) : 0;
        for (e = 1; a >= e; e += 1)t = i[(n.index + e) % s], "image" === t.type && t.href && ((new Image).src = t.href)
    }, _afterLoad: function () {
        var t, e, n, s, a, o, l = r.coming, c = r.current, d = "fancybox-placeholder";
        if (r.hideLoading(), l && r.isActive !== !1) {
            if (!1 === r.trigger("afterLoad", l, c))return l.wrap.stop(!0).trigger("onReset").remove(), r.coming = null, void 0;
            switch (c && (r.trigger("beforeChange", c), c.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), r.unbindEvents(), t = l, e = l.content, n = l.type, s = l.scrolling, i.extend(r, {wrap: t.wrap, skin: t.skin, outer: t.outer, inner: t.inner, current: t, previous: c}), a = t.href, n) {
                case"inline":
                case"ajax":
                case"html":
                    t.selector ? e = i("<div>").html(e).find(t.selector) : u(e) && (e.data(d) || e.data(d, i('<div class="' + d + '"></div>').insertAfter(e).hide()), e = e.show().detach(), t.wrap.bind("onReset", function () {
                        i(this).find(e).length && e.hide().replaceAll(e.data(d)).data(d, !1)
                    }));
                    break;
                case"image":
                    e = t.tpl.image.replace("{href}", a);
                    break;
                case"swf":
                    e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + a + '"></param>', o = "", i.each(t.swf, function (t, i) {
                        e += '<param name="' + t + '" value="' + i + '"></param>', o += " " + t + '="' + i + '"'
                    }), e += '<embed src="' + a + '" type="application/x-shockwave-flash" width="100%" height="100%"' + o + "></embed></object>"
            }
            u(e) && e.parent().is(t.inner) || t.inner.append(e), r.trigger("beforeShow"), t.inner.css("overflow", "yes" === s ? "scroll" : "no" === s ? "hidden" : s), r._setDimension(), r.reposition(), r.isOpen = !1, r.coming = null, r.bindEvents(), r.isOpened ? c.prevMethod && r.transitions[c.prevMethod]() : i(".fancybox-wrap").not(t.wrap).stop(!0).trigger("onReset").remove(), r.transitions[r.isOpened ? t.nextMethod : t.openMethod](), r._preloadImages()
        }
    }, _setDimension: function () {
        var t, e, n, s, a, o, l, c, d, u, h, f, v, y, b, _ = r.getViewport(), x = 0, w = !1, k = !1, C = r.wrap, j = r.skin, S = r.inner, T = r.current, E = T.width, P = T.height, F = T.minWidth, A = T.minHeight, q = T.maxWidth, N = T.maxHeight, L = T.scrolling, D = T.scrollOutside ? T.scrollbarWidth : 0, H = T.margin, O = m(H[1] + H[3]), M = m(H[0] + H[2]);
        if (C.add(j).add(S).width("auto").height("auto").removeClass("fancybox-tmp"), t = m(j.outerWidth(!0) - j.width()), e = m(j.outerHeight(!0) - j.height()), n = O + t, s = M + e, a = p(E) ? (_.w - n) * m(E) / 100 : E, o = p(P) ? (_.h - s) * m(P) / 100 : P, "iframe" === T.type) {
            if (y = T.content, T.autoHeight && 1 === y.data("ready"))try {
                y[0].contentWindow.document.location && (S.width(a).height(9999), b = y.contents().find("body"), D && b.css("overflow-x", "hidden"), o = b.outerHeight(!0))
            } catch ($) {
            }
        } else(T.autoWidth || T.autoHeight) && (S.addClass("fancybox-tmp"), T.autoWidth || S.width(a), T.autoHeight || S.height(o), T.autoWidth && (a = S.width()), T.autoHeight && (o = S.height()), S.removeClass("fancybox-tmp"));
        if (E = m(a), P = m(o), d = a / o, F = m(p(F) ? m(F, "w") - n : F), q = m(p(q) ? m(q, "w") - n : q), A = m(p(A) ? m(A, "h") - s : A), N = m(p(N) ? m(N, "h") - s : N), l = q, c = N, T.fitToView && (q = Math.min(_.w - n, q), N = Math.min(_.h - s, N)), f = _.w - O, v = _.h - M, T.aspectRatio ? (E > q && (E = q, P = m(E / d)), P > N && (P = N, E = m(P * d)), F > E && (E = F, P = m(E / d)), A > P && (P = A, E = m(P * d))) : (E = Math.max(F, Math.min(E, q)), T.autoHeight && "iframe" !== T.type && (S.width(E), P = S.height()), P = Math.max(A, Math.min(P, N))), T.fitToView)if (S.width(E).height(P), C.width(E + t), u = C.width(), h = C.height(), T.aspectRatio)for (; (u > f || h > v) && E > F && P > A && !(x++ > 19);)P = Math.max(A, Math.min(N, P - 10)), E = m(P * d), F > E && (E = F, P = m(E / d)), E > q && (E = q, P = m(E / d)), S.width(E).height(P), C.width(E + t), u = C.width(), h = C.height(); else E = Math.max(F, Math.min(E, E - (u - f))), P = Math.max(A, Math.min(P, P - (h - v)));
        D && "auto" === L && o > P && f > E + t + D && (E += D), S.width(E).height(P), C.width(E + t), u = C.width(), h = C.height(), w = (u > f || h > v) && E > F && P > A, k = T.aspectRatio ? l > E && c > P && a > E && o > P : (l > E || c > P) && (a > E || o > P), i.extend(T, {dim: {width: g(u), height: g(h)}, origWidth: a, origHeight: o, canShrink: w, canExpand: k, wPadding: t, hPadding: e, wrapSpace: h - j.outerHeight(!0), skinSpace: j.height() - P}), !y && T.autoHeight && P > A && N > P && !k && S.height("auto")
    }, _getPosition: function (t) {
        var e = r.current, i = r.getViewport(), n = e.margin, s = r.wrap.width() + n[1] + n[3], a = r.wrap.height() + n[0] + n[2], o = {position: "absolute", top: n[0], left: n[3]};
        return e.autoCenter && e.fixed && !t && a <= i.h && s <= i.w ? o.position = "fixed" : e.locked || (o.top += i.y, o.left += i.x), o.top = g(Math.max(o.top, o.top + (i.h - a) * e.topRatio)), o.left = g(Math.max(o.left, o.left + (i.w - s) * e.leftRatio)), o
    }, _afterZoomIn: function () {
        var t = r.current;
        t && (r.isOpen = r.isOpened = !0, r.wrap.css("overflow", "visible").addClass("fancybox-opened"), r.update(), (t.closeClick || t.nextClick && r.group.length > 1) && r.inner.css("cursor", "pointer").bind("click.fb", function (e) {
            i(e.target).is("a") || i(e.target).parent().is("a") || (e.preventDefault(), r[t.closeClick ? "close" : "next"]())
        }), t.closeBtn && i(t.tpl.closeBtn).appendTo(r.skin).bind("click.fb", function (t) {
            t.preventDefault(), r.close()
        }), t.arrows && r.group.length > 1 && ((t.loop || t.index > 0) && i(t.tpl.prev).appendTo(r.outer).bind("click.fb", r.prev), (t.loop || t.index < r.group.length - 1) && i(t.tpl.next).appendTo(r.outer).bind("click.fb", r.next)), r.trigger("afterShow"), t.loop || t.index !== t.group.length - 1 ? r.opts.autoPlay && !r.player.isActive && (r.opts.autoPlay = !1, r.play()) : r.play(!1))
    }, _afterZoomOut: function (t) {
        t = t || r.current, i(".fancybox-wrap").trigger("onReset").remove(), i.extend(r, {group: {}, opts: {}, router: !1, current: null, isActive: !1, isOpened: !1, isOpen: !1, isClosing: !1, wrap: null, skin: null, outer: null, inner: null}), r.trigger("afterClose", t)
    }}), r.transitions = {getOrigPosition: function () {
        var t = r.current, e = t.element, i = t.orig, n = {}, s = 50, a = 50, o = t.hPadding, l = t.wPadding, c = r.getViewport();
        return!i && t.isDom && e.is(":visible") && (i = e.find("img:first"), i.length || (i = e)), u(i) ? (n = i.offset(), i.is("img") && (s = i.outerWidth(), a = i.outerHeight())) : (n.top = c.y + (c.h - a) * t.topRatio, n.left = c.x + (c.w - s) * t.leftRatio), ("fixed" === r.wrap.css("position") || t.locked) && (n.top -= c.y, n.left -= c.x), n = {top: g(n.top - o * t.topRatio), left: g(n.left - l * t.leftRatio), width: g(s + l), height: g(a + o)}
    }, step: function (t, e) {
        var i, n, s, a = e.prop, o = r.current, l = o.wrapSpace, c = o.skinSpace;
        ("width" === a || "height" === a) && (i = e.end === e.start ? 1 : (t - e.start) / (e.end - e.start), r.isClosing && (i = 1 - i), n = "width" === a ? o.wPadding : o.hPadding, s = t - n, r.skin[a](m("width" === a ? s : s - l * i)), r.inner[a](m("width" === a ? s : s - l * i - c * i)))
    }, zoomIn: function () {
        var t = r.current, e = t.pos, n = t.openEffect, s = "elastic" === n, a = i.extend({opacity: 1}, e);
        delete a.position, s ? (e = this.getOrigPosition(), t.openOpacity && (e.opacity = .1)) : "fade" === n && (e.opacity = .1), r.wrap.css(e).animate(a, {duration: "none" === n ? 0 : t.openSpeed, easing: t.openEasing, step: s ? this.step : null, complete: r._afterZoomIn})
    }, zoomOut: function () {
        var t = r.current, e = t.closeEffect, i = "elastic" === e, n = {opacity: .1};
        i && (n = this.getOrigPosition(), t.closeOpacity && (n.opacity = .1)), r.wrap.animate(n, {duration: "none" === e ? 0 : t.closeSpeed, easing: t.closeEasing, step: i ? this.step : null, complete: r._afterZoomOut})
    }, changeIn: function () {
        var t, e = r.current, i = e.nextEffect, n = e.pos, s = {opacity: 1}, a = r.direction, o = 200;
        n.opacity = .1, "elastic" === i && (t = "down" === a || "up" === a ? "top" : "left", "down" === a || "right" === a ? (n[t] = g(m(n[t]) - o), s[t] = "+=" + o + "px") : (n[t] = g(m(n[t]) + o), s[t] = "-=" + o + "px")), "none" === i ? r._afterZoomIn() : r.wrap.css(n).animate(s, {duration: e.nextSpeed, easing: e.nextEasing, complete: r._afterZoomIn})
    }, changeOut: function () {
        var t = r.previous, e = t.prevEffect, n = {opacity: .1}, s = r.direction, a = 200;
        "elastic" === e && (n["down" === s || "up" === s ? "top" : "left"] = ("up" === s || "left" === s ? "-" : "+") + "=" + a + "px"), t.wrap.animate(n, {duration: "none" === e ? 0 : t.prevSpeed, easing: t.prevEasing, complete: function () {
            i(this).trigger("onReset").remove()
        }})
    }}, r.helpers.overlay = {defaults: {closeClick: !0, speedOut: 200, showEarly: !0, css: {}, locked: !d, fixed: !0}, overlay: null, fixed: !1, el: i("html"), create: function (t) {
        t = i.extend({}, this.defaults, t), this.overlay && this.close(), this.overlay = i('<div class="fancybox-overlay"></div>').appendTo(r.coming ? r.coming.parent : t.parent), this.fixed = !1, t.fixed && r.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
    }, open: function (t) {
        var e = this;
        t = i.extend({}, this.defaults, t), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(t), this.fixed || (a.bind("resize.overlay", i.proxy(this.update, this)), this.update()), t.closeClick && this.overlay.bind("click.overlay", function (t) {
            return i(t.target).hasClass("fancybox-overlay") ? (r.isActive ? r.close() : e.close(), !1) : void 0
        }), this.overlay.css(t.css).show()
    }, close: function () {
        var t, e;
        a.unbind("resize.overlay"), this.el.hasClass("fancybox-lock") && (i(".fancybox-margin").removeClass("fancybox-margin"), t = a.scrollTop(), e = a.scrollLeft(), this.el.removeClass("fancybox-lock"), a.scrollTop(t).scrollLeft(e)), i(".fancybox-overlay").remove().hide(), i.extend(this, {overlay: null, fixed: !1})
    }, update: function () {
        var t, i = "100%";
        this.overlay.width(i).height("100%"), l ? (t = Math.max(e.documentElement.offsetWidth, e.body.offsetWidth), o.width() > t && (i = o.width())) : o.width() > a.width() && (i = o.width()), this.overlay.width(i).height(o.height())
    }, onReady: function (t, e) {
        var n = this.overlay;
        i(".fancybox-overlay").stop(!0, !0), n || this.create(t), t.locked && this.fixed && e.fixed && (n || (this.margin = o.height() > a.height() ? i("html").css("margin-right").replace("px", "") : !1), e.locked = this.overlay.append(e.wrap), e.fixed = !1), t.showEarly === !0 && this.beforeShow.apply(this, arguments)
    }, beforeShow: function (t, e) {
        var n, s;
        e.locked && (this.margin !== !1 && (i("*").filter(function () {
            return"fixed" === i(this).css("position") && !i(this).hasClass("fancybox-overlay") && !i(this).hasClass("fancybox-wrap")
        }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), n = a.scrollTop(), s = a.scrollLeft(), this.el.addClass("fancybox-lock"), a.scrollTop(n).scrollLeft(s)), this.open(t)
    }, onUpdate: function () {
        this.fixed || this.update()
    }, afterClose: function (t) {
        this.overlay && !r.coming && this.overlay.fadeOut(t.speedOut, i.proxy(this.close, this))
    }}, r.helpers.title = {defaults: {type: "float", position: "bottom"}, beforeShow: function (t) {
        var e, n, s = r.current, a = s.title, o = t.type;
        if (i.isFunction(a) && (a = a.call(s.element, s)), h(a) && "" !== i.trim(a)) {
            switch (e = i('<div class="fancybox-title fancybox-title-' + o + '-wrap">' + a + "</div>"), o) {
                case"inside":
                    n = r.skin;
                    break;
                case"outside":
                    n = r.wrap;
                    break;
                case"over":
                    n = r.inner;
                    break;
                default:
                    n = r.skin, e.appendTo("body"), l && e.width(e.width()), e.wrapInner('<span class="child"></span>'), r.current.margin[2] += Math.abs(m(e.css("margin-bottom")))
            }
            e["top" === t.position ? "prependTo" : "appendTo"](n)
        }
    }}, i.fn.fancybox = function (t) {
        var e, n = i(this), s = this.selector || "", a = function (a) {
            var o, l, c = i(this).blur(), d = e;
            a.ctrlKey || a.altKey || a.shiftKey || a.metaKey || c.is(".fancybox-wrap") || (o = t.groupAttr || "data-fancybox-group", l = c.attr(o), l || (o = "rel", l = c.get(0)[o]), l && "" !== l && "nofollow" !== l && (c = s.length ? i(s) : n, c = c.filter("[" + o + '="' + l + '"]'), d = c.index(this)), t.index = d, r.open(c, t) !== !1 && a.preventDefault())
        };
        return t = t || {}, e = t.index || 0, s && t.live !== !1 ? o.undelegate(s, "click.fb-start").delegate(s + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", a) : n.unbind("click.fb-start").bind("click.fb-start", a), this.filter("[data-fancybox-start=1]").trigger("click"), this
    }, o.ready(function () {
        var e, a;
        i.scrollbarWidth === n && (i.scrollbarWidth = function () {
            var t = i('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"), e = t.children(), n = e.innerWidth() - e.height(99).innerWidth();
            return t.remove(), n
        }), i.support.fixedPosition === n && (i.support.fixedPosition = function () {
            var t = i('<div style="position:fixed;top:20px;"></div>').appendTo("body"), e = 20 === t[0].offsetTop || 15 === t[0].offsetTop;
            return t.remove(), e
        }()), i.extend(r.defaults, {scrollbarWidth: i.scrollbarWidth(), fixed: i.support.fixedPosition, parent: i("body")}), e = i(t).width(), s.addClass("fancybox-lock-test"), a = i(t).width(), s.removeClass("fancybox-lock-test"), i("<style type='text/css'>.fancybox-margin{margin-right:" + (a - e) + "px;}</style>").appendTo("head")
    })
}(window, document, jQuery), function (t) {
    var e = t.fancybox;
    e.helpers.buttons = {defaults: {skipSingle: !1, position: "top", tpl: '<div id="fancybox-buttons"><ul><li><a class="btnPrev" title="Previous" href="javascript:;"></a></li><li><a class="btnPlay" title="Start slideshow" href="javascript:;"></a></li><li><a class="btnNext" title="Next" href="javascript:;"></a></li><li><a class="btnToggle" title="Toggle size" href="javascript:;"></a></li><li><a class="btnClose" title="Close" href="javascript:;"></a></li></ul></div>'}, list: null, buttons: null, beforeLoad: function (t, e) {
        return t.skipSingle && e.group.length < 2 ? (e.helpers.buttons = !1, e.closeBtn = !0, void 0) : (e.margin["bottom" === t.position ? 2 : 0] += 30, void 0)
    }, onPlayStart: function () {
        this.buttons && this.buttons.play.attr("title", "Pause slideshow").addClass("btnPlayOn")
    }, onPlayEnd: function () {
        this.buttons && this.buttons.play.attr("title", "Start slideshow").removeClass("btnPlayOn")
    }, afterShow: function (i, n) {
        var s = this.buttons;
        s || (this.list = t(i.tpl).addClass(i.position).appendTo("body"), s = {prev: this.list.find(".btnPrev").click(e.prev), next: this.list.find(".btnNext").click(e.next), play: this.list.find(".btnPlay").click(e.play), toggle: this.list.find(".btnToggle").click(e.toggle), close: this.list.find(".btnClose").click(e.close)}), n.index > 0 || n.loop ? s.prev.removeClass("btnDisabled") : s.prev.addClass("btnDisabled"), n.loop || n.index < n.group.length - 1 ? (s.next.removeClass("btnDisabled"), s.play.removeClass("btnDisabled")) : (s.next.addClass("btnDisabled"), s.play.addClass("btnDisabled")), this.buttons = s, this.onUpdate(i, n)
    }, onUpdate: function (t, e) {
        var i;
        this.buttons && (i = this.buttons.toggle.removeClass("btnDisabled btnToggleOn"), e.canShrink ? i.addClass("btnToggleOn") : e.canExpand || i.addClass("btnDisabled"))
    }, beforeClose: function () {
        this.list && this.list.remove(), this.list = null, this.buttons = null
    }}
}(jQuery), function (t) {
    var e = t.fancybox;
    e.helpers.thumbs = {defaults: {width: 50, height: 50, position: "bottom", source: function (e) {
        var i;
        return e.element && (i = t(e.element).find("img").attr("src")), !i && "image" === e.type && e.href && (i = e.href), i
    }}, wrap: null, list: null, width: 0, init: function (e, i) {
        var n, s = this, a = e.width, o = e.height, r = e.source;
        n = "";
        for (var l = 0; l < i.group.length; l++)n += '<li><a style="width:' + a + "px;height:" + o + 'px;" href="javascript:jQuery.fancybox.jumpto(' + l + ');"></a></li>';
        this.wrap = t('<div id="fancybox-thumbs"></div>').addClass(e.position).appendTo("body"), this.list = t("<ul>" + n + "</ul>").appendTo(this.wrap), t.each(i.group, function (e) {
            var n = r(i.group[e]);
            n && t("<img />").load(function () {
                var i, n, r, l = this.width, c = this.height;
                s.list && l && c && (i = l / a, n = c / o, r = s.list.children().eq(e).find("a"), i >= 1 && n >= 1 && (i > n ? (l = Math.floor(l / n), c = o) : (l = a, c = Math.floor(c / i))), t(this).css({width: l, height: c, top: Math.floor(o / 2 - c / 2), left: Math.floor(a / 2 - l / 2)}), r.width(a).height(o), t(this).hide().appendTo(r).fadeIn(300))
            }).attr("src", n)
        }), this.width = this.list.children().eq(0).outerWidth(!0), this.list.width(this.width * (i.group.length + 1)).css("left", Math.floor(.5 * t(window).width() - (i.index * this.width + .5 * this.width)))
    }, beforeLoad: function (t, e) {
        return e.group.length < 2 ? (e.helpers.thumbs = !1, void 0) : (e.margin["top" === t.position ? 0 : 2] += t.height + 15, void 0)
    }, afterShow: function (t, e) {
        this.list ? this.onUpdate(t, e) : this.init(t, e), this.list.children().removeClass("active").eq(e.index).addClass("active")
    }, onUpdate: function (e, i) {
        this.list && this.list.stop(!0).animate({left: Math.floor(.5 * t(window).width() - (i.index * this.width + .5 * this.width))}, 150)
    }, beforeClose: function () {
        this.wrap && this.wrap.remove(), this.wrap = null, this.list = null, this.width = 0
    }}
}(jQuery), function (t) {
    "use strict";
    var e = t.fancybox, i = function (e, i, n) {
        return n = n || "", "object" === t.type(n) && (n = t.param(n, !0)), t.each(i, function (t, i) {
            e = e.replace("$" + t, i || "")
        }), n.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + n), e
    };
    e.helpers.media = {defaults: {youtube: {matcher: /(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i, params: {autoplay: 1, autohide: 1, fs: 1, rel: 0, hd: 1, wmode: "opaque", enablejsapi: 1}, type: "iframe", url: "//www.youtube.com/embed/$3"}, vimeo: {matcher: /(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/, params: {autoplay: 1, hd: 1, show_title: 1, show_byline: 1, show_portrait: 0, fullscreen: 1}, type: "iframe", url: "//player.vimeo.com/video/$1"}, metacafe: {matcher: /metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/, params: {autoPlay: "yes"}, type: "swf", url: function (e, i, n) {
        return n.swf.flashVars = "playerVars=" + t.param(i, !0), "//www.metacafe.com/fplayer/" + e[1] + "/.swf"
    }}, dailymotion: {matcher: /dailymotion.com\/video\/(.*)\/?(.*)/, params: {additionalInfos: 0, autoStart: 1}, type: "swf", url: "//www.dailymotion.com/swf/video/$1"}, twitvid: {matcher: /twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i, params: {autoplay: 0}, type: "iframe", url: "//www.twitvid.com/embed.php?guid=$1"}, twitpic: {matcher: /twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i, type: "image", url: "//twitpic.com/show/full/$1/"}, instagram: {matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i, type: "image", url: "//$1/p/$2/media/?size=l"}, google_maps: {matcher: /maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i, type: "iframe", url: function (t) {
        return"//maps.google." + t[1] + "/" + t[3] + t[4] + "&output=" + (t[4].indexOf("layer=c") > 0 ? "svembed" : "embed")
    }}}, beforeLoad: function (e, n) {
        var s, a, o, r, l = n.href || "", c = !1;
        for (s in e)if (e.hasOwnProperty(s) && (a = e[s], o = l.match(a.matcher))) {
            c = a.type, r = t.extend(!0, {}, a.params, n[s] || (t.isPlainObject(e[s]) ? e[s].params : null)), l = "function" === t.type(a.url) ? a.url.call(this, o, r, n) : i(a.url, o, r);
            break
        }
        c && (n.href = l, n.type = c, n.autoHeight = !1)
    }}
}(jQuery), function (t, e, i, n) {
    "use strict";
    function s(t) {
        return("string" == typeof t || t instanceof String) && (t = t.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g, "")), t
    }

    var a = function (e) {
        for (var i = e.length; i--;)0 === t("head").has("." + e[i]).length && t("head").append('<meta class="' + e[i] + '">')
    };
    a(["foundation-mq-small", "foundation-mq-medium", "foundation-mq-large", "foundation-mq-xlarge", "foundation-mq-xxlarge", "foundation-data-attribute-namespace"]), t(function () {
        "undefined" != typeof FastClick && "undefined" != typeof i.body && FastClick.attach(i.body)
    });
    var o = function (e, n) {
        if ("string" == typeof e) {
            if (n) {
                var s;
                return s = n.jquery ? n[0] : n, t(s.querySelectorAll(e))
            }
            return t(i.querySelectorAll(e))
        }
        return t(e, n)
    }, r = function (t) {
        var e = [];
        return t || e.push("data"), this.namespace.length > 0 && e.push(this.namespace), e.push(this.name), e.join("-")
    }, a = function (e) {
        for (var i = e.length; i--;)0 === t("head").has("." + e[i]).length && t("head").append('<meta class="' + e[i] + '">')
    }, l = function (t) {
        for (var e = t.split("-"), i = e.length, n = []; i--;)0 !== i ? n.push(e[i]) : this.namespace.length > 0 ? n.push(this.namespace, e[i]) : n.push(e[i]);
        return n.reverse().join("-")
    }, c = function (e, i) {
        var n = this, s = !o(this).data(this.attr_name(!0));
        return"string" == typeof e ? this[e].call(this, i) : (o(this.scope).is("[" + this.attr_name() + "]") ? (o(this.scope).data(this.attr_name(!0) + "-init", t.extend({}, this.settings, i || e, this.data_options(o(this.scope)))), s && this.events(this.scope)) : o("[" + this.attr_name() + "]", this.scope).each(function () {
            var s = !o(this).data(n.attr_name(!0) + "-init");
            o(this).data(n.attr_name(!0) + "-init", t.extend({}, n.settings, i || e, n.data_options(o(this)))), s && n.events(this)
        }), void 0)
    }, d = function (t, e) {
        function i() {
            e(t[0])
        }

        function n() {
            if (this.one("load", i), /MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
                var t = this.attr("src"), e = t.match(/\?/) ? "&" : "?";
                e += "random=" + (new Date).getTime(), this.attr("src", t + e)
            }
        }

        return t.attr("src") ? (t[0].complete || 4 === t[0].readyState ? i() : n.call(t), void 0) : (i(), void 0)
    };
    e.matchMedia = e.matchMedia || function (t) {
        var e, i = t.documentElement, n = i.firstElementChild || i.firstChild, s = t.createElement("body"), a = t.createElement("div");
        return a.id = "mq-test-1", a.style.cssText = "position:absolute;top:-100em", s.style.background = "none", s.appendChild(a), function (t) {
            return a.innerHTML = '&shy;<style media="' + t + '"> #mq-test-1 { width: 42px; }</style>', i.insertBefore(s, n), e = 42 === a.offsetWidth, i.removeChild(s), {matches: e, media: t}
        }
    }(i), function () {
        function t() {
            i && (a(t), jQuery.fx.tick())
        }

        for (var i, n = 0, s = ["webkit", "moz"], a = e.requestAnimationFrame, o = e.cancelAnimationFrame; n < s.length && !a; n++)a = e[s[n] + "RequestAnimationFrame"], o = o || e[s[n] + "CancelAnimationFrame"] || e[s[n] + "CancelRequestAnimationFrame"];
        a ? (e.requestAnimationFrame = a, e.cancelAnimationFrame = o, jQuery.fx.timer = function (e) {
            e() && jQuery.timers.push(e) && !i && (i = !0, t())
        }, jQuery.fx.stop = function () {
            i = !1
        }) : (e.requestAnimationFrame = function (t) {
            var i = (new Date).getTime(), s = Math.max(0, 16 - (i - n)), a = e.setTimeout(function () {
                t(i + s)
            }, s);
            return n = i + s, a
        }, e.cancelAnimationFrame = function (t) {
            clearTimeout(t)
        })
    }(jQuery), e.Foundation = {name: "Foundation", version: "5.1.1", media_queries: {small: o(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""), medium: o(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""), large: o(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""), xlarge: o(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""), xxlarge: o(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, "")}, stylesheet: t("<style></style>").appendTo("head")[0].sheet, global: {namespace: ""}, init: function (t, e, i, n, s) {
        var a = [t, i, n, s], r = [];
        if (this.rtl = /rtl/i.test(o("html").attr("dir")), this.scope = t || this.scope, this.set_namespace(), e && "string" == typeof e && !/reflow/i.test(e))this.libs.hasOwnProperty(e) && r.push(this.init_lib(e, a)); else for (var l in this.libs)r.push(this.init_lib(l, e));
        return t
    }, init_lib: function (t, e) {
        return this.libs.hasOwnProperty(t) ? (this.patch(this.libs[t]), e && e.hasOwnProperty(t) ? this.libs[t].init.apply(this.libs[t], [this.scope, e[t]]) : (e = e instanceof Array ? e : Array(e), this.libs[t].init.apply(this.libs[t], e))) : function () {
        }
    }, patch: function (t) {
        t.scope = this.scope, t.namespace = this.global.namespace, t.rtl = this.rtl, t.data_options = this.utils.data_options, t.attr_name = r, t.add_namespace = l, t.bindings = c, t.S = this.utils.S
    }, inherit: function (t, e) {
        for (var i = e.split(" "), n = i.length; n--;)this.utils.hasOwnProperty(i[n]) && (t[i[n]] = this.utils[i[n]])
    }, set_namespace: function () {
        var e = t(".foundation-data-attribute-namespace").css("font-family");
        /false/i.test(e) || (this.global.namespace = e)
    }, libs: {}, utils: {S: o, throttle: function (t, e) {
        var i = null;
        return function () {
            var n = this, s = arguments;
            clearTimeout(i), i = setTimeout(function () {
                t.apply(n, s)
            }, e)
        }
    }, debounce: function (t, e, i) {
        var n, s;
        return function () {
            var a = this, o = arguments, r = function () {
                n = null, i || (s = t.apply(a, o))
            }, l = i && !n;
            return clearTimeout(n), n = setTimeout(r, e), l && (s = t.apply(a, o)), s
        }
    }, data_options: function (e) {
        function i(t) {
            return!isNaN(t - 0) && null !== t && "" !== t && t !== !1 && t !== !0
        }

        function n(e) {
            return"string" == typeof e ? t.trim(e) : e
        }

        var s, a, o, r = {}, l = function (t) {
            var e = Foundation.global.namespace;
            return e.length > 0 ? t.data(e + "-options") : t.data("options")
        }, c = l(e);
        if ("object" == typeof c)return c;
        for (o = (c || ":").split(";"), s = o.length; s--;)a = o[s].split(":"), /true/i.test(a[1]) && (a[1] = !0), /false/i.test(a[1]) && (a[1] = !1), i(a[1]) && (a[1] = parseInt(a[1], 10)), 2 === a.length && a[0].length > 0 && (r[n(a[0])] = n(a[1]));
        return r
    }, register_media: function (e, i) {
        Foundation.media_queries[e] === n && (t("head").append('<meta class="' + i + '">'), Foundation.media_queries[e] = s(t("." + i).css("font-family")))
    }, add_custom_rule: function (t, e) {
        if (e === n)Foundation.stylesheet.insertRule(t, Foundation.stylesheet.cssRules.length); else {
            var i = Foundation.media_queries[e];
            i !== n && Foundation.stylesheet.insertRule("@media " + Foundation.media_queries[e] + "{ " + t + " }")
        }
    }, image_loaded: function (t, e) {
        var i = this, n = t.length;
        t.each(function () {
            d(i.S(this), function () {
                n -= 1, 0 == n && e(t)
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
            var i = this, n = i.S(e).attr("novalidate", "novalidate");
            n.data(this.attr_name(!0) + "-init")
        }
        this.invalid_attr = this.add_namespace("data-invalid"), n.off(".abide").on("submit.fndtn.abide validate.fndtn.abide",function (t) {
            var e = /ajax/i.test(i.S(this).attr(i.attr_name()));
            return i.validate(i.S(this).find("input, textarea, select").get(), t, e)
        }).on("reset",function () {
            return i.reset(t(this))
        }).find("input, textarea, select").off(".abide").on("blur.fndtn.abide change.fndtn.abide",function (t) {
            i.validate([this], t)
        }).on("keydown.fndtn.abide", function (e) {
            var n = t(this).closest("form").data("abide-init");
            n.live_validate === !0 && (clearTimeout(i.timer), i.timer = setTimeout(function () {
                i.validate([this], e)
            }.bind(this), n.timeout))
        })
    }, reset: function (e) {
        e.removeAttr(this.invalid_attr), t(this.invalid_attr, e).removeAttr(this.invalid_attr), t(".error", e).not("small").removeClass("error")
    }, validate: function (t, e, i) {
        for (var n = this.parse_patterns(t), s = n.length, a = this.S(t[0]).closest("form"), o = /submit/.test(e.type), r = 0; s > r; r++)if (!n[r] && (o || i))return this.settings.focus_on_invalid && t[r].focus(), a.trigger("invalid"), this.S(t[r]).closest("form").attr(this.invalid_attr, ""), !1;
        return(o || i) && a.trigger("valid"), a.removeAttr(this.invalid_attr), i ? !1 : !0
    }, parse_patterns: function (t) {
        for (var e = t.length, i = []; e--;)i.push(this.pattern(t[e]));
        return this.check_validation_and_apply_styles(i)
    }, pattern: function (t) {
        var e = t.getAttribute("type"), i = "string" == typeof t.getAttribute("required"), n = t.getAttribute("pattern") || "";
        return this.settings.patterns.hasOwnProperty(n) && n.length > 0 ? [t, this.settings.patterns[n], i] : n.length > 0 ? [t, new RegExp(n), i] : this.settings.patterns.hasOwnProperty(e) ? [t, this.settings.patterns[e], i] : (n = /.*/, [t, n, i])
    }, check_validation_and_apply_styles: function (e) {
        for (var i = e.length, n = []; i--;) {
            var s, a = e[i][0], o = e[i][2], r = a.value, l = this.S(a).parent(), c = a.getAttribute(this.add_namespace("data-equalto")), d = "radio" === a.type, u = "checkbox" === a.type, h = this.S('label[for="' + a.getAttribute("id") + '"]'), p = o ? a.value.length > 0 : !0;
            s = l.is("label") ? l.parent() : l, d && o ? n.push(this.valid_radio(a, o)) : u && o ? n.push(this.valid_checkbox(a, o)) : c && o ? n.push(this.valid_equal(a, o, s)) : e[i][1].test(r) && p || !o && a.value.length < 1 ? (this.S(a).removeAttr(this.invalid_attr), s.removeClass("error"), h.length > 0 && this.settings.error_labels && h.removeClass("error"), n.push(!0), t(a).triggerHandler("valid")) : (this.S(a).attr(this.invalid_attr, ""), s.addClass("error"), h.length > 0 && this.settings.error_labels && h.addClass("error"), n.push(!1), t(a).triggerHandler("invalid"))
        }
        return n
    }, valid_checkbox: function (t, e) {
        var t = this.S(t), i = t.is(":checked") || !e;
        return i ? t.removeAttr(this.invalid_attr).parent().removeClass("error") : t.attr(this.invalid_attr, "").parent().addClass("error"), i
    }, valid_radio: function (t) {
        for (var e = t.getAttribute("name"), n = i.getElementsByName(e), s = n.length, a = !1, o = 0; s > o; o++)n[o].checked && (a = !0);
        for (var o = 0; s > o; o++)a ? this.S(n[o]).removeAttr(this.invalid_attr).parent().removeClass("error") : this.S(n[o]).attr(this.invalid_attr, "").parent().addClass("error");
        return a
    }, valid_equal: function (t, e, n) {
        var s = i.getElementById(t.getAttribute(this.add_namespace("data-equalto"))).value, a = t.value, o = s === a;
        return o ? (this.S(t).removeAttr(this.invalid_attr), n.removeClass("error")) : (this.S(t).attr(this.invalid_attr, ""), n.addClass("error")), o
    }}
}(jQuery, this, this.document), function (t) {
    "use strict";
    Foundation.libs.accordion = {name: "accordion", version: "5.1.1", settings: {active_class: "active", toggleable: !0}, init: function (t, e, i) {
        this.bindings(e, i)
    }, events: function () {
        var e = this, i = this.S;
        i(this.scope).off(".fndtn.accordion").on("click.fndtn.accordion", "[" + this.attr_name() + "] > dd > a", function (n) {
            var s = i(this).closest("[" + e.attr_name() + "]"), a = i("#" + this.href.split("#")[1]), o = i("dd > .content", s), r = t("> dd", s), l = s.data(e.attr_name(!0) + "-init"), c = i("dd > .content." + l.active_class, s), d = i("dd." + l.active_class, s);
            return n.preventDefault(), c[0] == a[0] && l.toggleable ? (d.toggleClass(l.active_class, !1), a.toggleClass(l.active_class, !1)) : (o.removeClass(l.active_class), r.removeClass(l.active_class), a.addClass(l.active_class).parent().addClass(l.active_class), void 0)
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
            var n = i(this).closest("[" + e.attr_name() + "]"), s = n.data(e.attr_name(!0) + "-init") || e.settings;
            t.preventDefault(), n[s.animation](s.speed, function () {
                i(this).trigger("closed").remove(), s.callback()
            })
        })
    }, reflow: function () {
    }}
}(jQuery, this, this.document), function (t, e, i, n) {
    "use strict";
    Foundation.libs.clearing = {name: "clearing", version: "5.1.1", settings: {templates: {viewing: '<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><div class="clearing-touch-label"></div><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a><a href="#" class="clearing-main-next"><span></span></a></div>'}, close_selectors: ".clearing-close", touch_label: "&larr;&nbsp;Swipe to Advance&nbsp;&rarr;", init: !1, locked: !1}, init: function (t, e, i) {
        var n = this;
        Foundation.inherit(this, "throttle image_loaded"), this.bindings(e, i), n.S(this.scope).is("[" + this.attr_name() + "]") ? this.assemble(n.S("li", this.scope)) : n.S("[" + this.attr_name() + "]", this.scope).each(function () {
            n.assemble(n.S("li", this))
        })
    }, events: function (t) {
        var i = this, n = i.S;
        n(this.scope).off(".clearing").on("click.fndtn.clearing", "ul[" + this.attr_name() + "] li",function (t, e, s) {
            var e = e || n(this), s = s || e, a = e.next("li"), o = e.closest("[" + i.attr_name() + "]").data(i.attr_name(!0) + "-init"), r = n(t.target);
            t.preventDefault(), o || (i.init(), o = e.closest("[" + i.attr_name() + "]").data(i.attr_name(!0) + "-init")), s.hasClass("visible") && e[0] === s[0] && a.length > 0 && i.is_open(e) && (s = a, r = n("img", s)), i.open(r, e, s), i.update_paddles(s)
        }).on("click.fndtn.clearing", ".clearing-main-next",function (t) {
            i.nav(t, "next")
        }).on("click.fndtn.clearing", ".clearing-main-prev",function (t) {
            i.nav(t, "prev")
        }).on("click.fndtn.clearing", this.settings.close_selectors,function (t) {
            Foundation.libs.clearing.close(t, this)
        }).on("keydown.fndtn.clearing", function (t) {
            i.keydown(t)
        }), n(e).off(".clearing").on("resize.fndtn.clearing", function () {
            i.resize()
        }), this.swipe_events(t)
    }, swipe_events: function () {
        var t = this, e = t.S;
        e(this.scope).on("touchstart.fndtn.clearing", ".visible-img",function (t) {
            t.touches || (t = t.originalEvent);
            var i = {start_page_x: t.touches[0].pageX, start_page_y: t.touches[0].pageY, start_time: (new Date).getTime(), delta_x: 0, is_scrolling: n};
            e(this).data("swipe-transition", i), t.stopPropagation()
        }).on("touchmove.fndtn.clearing", ".visible-img",function (i) {
            if (i.touches || (i = i.originalEvent), !(i.touches.length > 1 || i.scale && 1 !== i.scale)) {
                var n = e(this).data("swipe-transition");
                if ("undefined" == typeof n && (n = {}), n.delta_x = i.touches[0].pageX - n.start_page_x, "undefined" == typeof n.is_scrolling && (n.is_scrolling = !!(n.is_scrolling || Math.abs(n.delta_x) < Math.abs(i.touches[0].pageY - n.start_page_y))), !n.is_scrolling && !n.active) {
                    i.preventDefault();
                    var s = n.delta_x < 0 ? "next" : "prev";
                    n.active = !0, t.nav(i, s)
                }
            }
        }).on("touchend.fndtn.clearing", ".visible-img", function (t) {
            e(this).data("swipe-transition", {}), t.stopPropagation()
        })
    }, assemble: function (e) {
        var i = e.parent();
        if (!i.parent().hasClass("carousel")) {
            i.after('<div id="foundationClearingHolder"></div>');
            var n = this.S("#foundationClearingHolder"), s = i.data(this.attr_name(!0) + "-init"), a = i.detach(), o = {grid: '<div class="carousel">' + a[0].outerHTML + "</div>", viewing: s.templates.viewing}, r = '<div class="clearing-assembled"><div>' + o.viewing + o.grid + "</div></div>", l = this.settings.touch_label;
            Modernizr.touch && (r = t(r).find(".clearing-touch-label").html(l).end()), n.after(r).remove()
        }
    }, open: function (t, e, i) {
        var n = this, s = i.closest(".clearing-assembled"), a = n.S("div", s).first(), o = n.S(".visible-img", a), r = n.S("img", o).not(t), l = n.S(".clearing-touch-label", a);
        this.locked() || (r.attr("src", this.load(t)).css("visibility", "hidden"), this.image_loaded(r, function () {
            r.css("visibility", "visible"), s.addClass("clearing-blackout"), a.addClass("clearing-container"), o.show(), this.fix_height(i).caption(n.S(".clearing-caption", o), t).center_and_label(r, l).shift(e, i, function () {
                i.siblings().removeClass("visible"), i.addClass("visible")
            })
        }.bind(this)))
    }, close: function (e, i) {
        e.preventDefault();
        var n, s, a = function (t) {
            return/blackout/.test(t.selector) ? t : t.closest(".clearing-blackout")
        }(t(i));
        return i === e.target && a && (n = t("div", a).first(), s = t(".visible-img", n), this.settings.prev_index = 0, t("ul[" + this.attr_name() + "]", a).attr("style", "").closest(".clearing-blackout").removeClass("clearing-blackout"), n.removeClass("clearing-container"), s.hide()), !1
    }, is_open: function (t) {
        return t.parent().prop("style").length > 0
    }, keydown: function (e) {
        var i = t("ul[" + this.attr_name() + "]", ".clearing-blackout"), n = this.rtl ? 37 : 39, s = this.rtl ? 39 : 37, a = 27;
        e.which === n && this.go(i, "next"), e.which === s && this.go(i, "prev"), e.which === a && this.S("a.clearing-close").trigger("click")
    }, nav: function (e, i) {
        var n = t("ul[" + this.attr_name() + "]", ".clearing-blackout");
        e.preventDefault(), this.go(n, i)
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
        var i = this.S(".visible", t), n = i[e]();
        n.length && this.S("img", n).trigger("click", [i, n])
    }, shift: function (t, e, i) {
        var n, s = e.parent(), a = this.settings.prev_index || e.index(), o = this.direction(s, t, e), r = this.rtl ? "right" : "left", l = parseInt(s.css("left"), 10), c = e.outerWidth(), d = {};
        e.index() === a || /skip/.test(o) ? /skip/.test(o) && (n = e.index() - this.settings.up_count, this.lock(), n > 0 ? (d[r] = -(n * c), s.animate(d, 300, this.unlock())) : (d[r] = 0, s.animate(d, 300, this.unlock()))) : /left/.test(o) ? (this.lock(), d[r] = l + c, s.animate(d, 300, this.unlock())) : /right/.test(o) && (this.lock(), d[r] = l - c, s.animate(d, 300, this.unlock())), i()
    }, direction: function (t, e, i) {
        var n, s = this.S("li", t), a = s.outerWidth() + s.outerWidth() / 4, o = Math.floor(this.S(".clearing-container").outerWidth() / a) - 1, r = s.index(i);
        return this.settings.up_count = o, n = this.adjacent(this.settings.prev_index, r) ? r > o && r > this.settings.prev_index ? "right" : r > o - 1 && r <= this.settings.prev_index ? "left" : !1 : "skip", this.settings.prev_index = r, n
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
        var i = this, n = i.S;
        n(this.scope).off(".dropdown").on("click.fndtn.dropdown", "[" + this.attr_name() + "]",function (t) {
            var e = n(this).data(i.attr_name(!0) + "-init") || i.settings;
            t.preventDefault(), (!e.is_hover || Modernizr.touch) && i.toggle(n(this))
        }).on("mouseenter.fndtn.dropdown", "[" + this.attr_name() + "], [" + this.attr_name() + "-content]",function (t) {
            var e = n(this);
            if (clearTimeout(i.timeout), e.data(i.data_attr()))var s = n("#" + e.data(i.data_attr())), a = e; else {
                var s = e;
                a = n("[" + i.attr_name() + "='" + s.attr("id") + "']")
            }
            var o = a.data(i.attr_name(!0) + "-init") || i.settings;
            n(t.target).data(i.data_attr()) && o.is_hover && i.closeall.call(i), o.is_hover && i.open.apply(i, [s, a])
        }).on("mouseleave.fndtn.dropdown", "[" + this.attr_name() + "], [" + this.attr_name() + "-content]",function () {
            var t = n(this);
            i.timeout = setTimeout(function () {
                if (t.data(i.data_attr())) {
                    var e = t.data(i.data_attr(!0) + "-init") || i.settings;
                    e.is_hover && i.close.call(i, n("#" + t.data(i.data_attr())))
                } else {
                    var s = n("[" + i.attr_name() + '="' + n(this).attr("id") + '"]'), e = s.data(i.attr_name(!0) + "-init") || i.settings;
                    e.is_hover && i.close.call(i, t)
                }
            }.bind(this), 150)
        }).on("click.fndtn.dropdown",function (e) {
            var s = n(e.target).closest("[" + i.attr_name() + "-content]");
            if (!n(e.target).data(i.data_attr()) && !n(e.target).parent().data(i.data_attr()))return!n(e.target).data("revealId") && s.length > 0 && (n(e.target).is("[" + i.attr_name() + "-content]") || t.contains(s.first()[0], e.target)) ? (e.stopPropagation(), void 0) : (i.close.call(i, n("[" + i.attr_name() + "-content]")), void 0)
        }).on("opened.fndtn.dropdown", "[" + i.attr_name() + "-content]",function () {
            i.settings.opened.call(this)
        }).on("closed.fndtn.dropdown", "[" + i.attr_name() + "-content]", function () {
            i.settings.closed.call(this)
        }), n(e).off(".dropdown").on("resize.fndtn.dropdown", i.throttle(function () {
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
        var n = t.offsetParent(), s = i.offset();
        if (s.top -= n.offset().top, s.left -= n.offset().left, this.small())t.css({position: "absolute", width: "95%", "max-width": "none", top: s.top + i.outerHeight()}), t.css(Foundation.rtl ? "right" : "left", "2.5%"); else {
            if (!Foundation.rtl && this.S(e).width() > t.outerWidth() + i.offset().left) {
                var a = s.left;
                t.hasClass("right") && t.removeClass("right")
            } else {
                t.hasClass("right") || t.addClass("right");
                var a = s.left - (t.outerWidth() - i.outerWidth())
            }
            t.attr("style", "").css({position: "absolute", top: s.top + i.outerHeight(), left: a})
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
    Foundation.libs.interchange = {name: "interchange", version: "5.1.1", cache: {}, images_loaded: !1, nodes_loaded: !1, settings: {load_attr: "interchange", named_queries: {"default": "only screen", small: Foundation.media_queries.small, medium: Foundation.media_queries.medium, large: Foundation.media_queries.large, xlarge: Foundation.media_queries.xlarge, xxlarge: Foundation.media_queries.xxlarge, landscape: "only screen and (orientation: landscape)", portrait: "only screen and (orientation: portrait)", retina: "only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"}, directives: {replace: function (e, i, n) {
        if (/IMG/.test(e[0].nodeName)) {
            var s = e[0].src;
            if (new RegExp(i, "i").test(s))return;
            return e[0].src = i, n(e[0].src)
        }
        var a = e.data(this.data_attr + "-last-path");
        if (a != i)return t.get(i, function (t) {
            e.html(t), e.data(this.data_attr + "-last-path", i), n()
        })
    }}}, init: function (e, i, n) {
        Foundation.inherit(this, "throttle random_str"), this.data_attr = this.set_data_attr(), t.extend(!0, this.settings, i, n), this.bindings(i, n), this.load("images"), this.load("nodes")
    }, events: function () {
        var i = this;
        return t(e).off(".interchange").on("resize.fndtn.interchange", i.throttle(function () {
            i.resize()
        }, 50)), this
    }, resize: function () {
        var e = this.cache;
        if (!this.images_loaded || !this.nodes_loaded)return setTimeout(t.proxy(this.resize, this), 50), void 0;
        for (var i in e)if (e.hasOwnProperty(i)) {
            var n = this.results(i, e[i]);
            n && this.settings.directives[n.scenario[1]].call(this, n.el, n.scenario[0], function () {
                if (arguments[0]instanceof Array)var t = arguments[0]; else var t = Array.prototype.slice.call(arguments, 0);
                n.el.trigger(n.scenario[1], t)
            })
        }
    }, results: function (t, e) {
        var i = e.length;
        if (i > 0)for (var n = this.S("[" + this.add_namespace("data-uuid") + '="' + t + '"]'); i--;) {
            var s, a = e[i][2];
            if (s = this.settings.named_queries.hasOwnProperty(a) ? matchMedia(this.settings.named_queries[a]) : matchMedia(a), s.matches)return{el: n, scenario: e[i]}
        }
        return!1
    }, load: function (t, e) {
        return("undefined" == typeof this["cached_" + t] || e) && this["update_" + t](), this["cached_" + t]
    }, update_images: function () {
        var t = this.S("img[" + this.data_attr + "]"), e = t.length, i = e, n = 0, s = this.data_attr;
        for (this.cache = {}, this.cached_images = [], this.images_loaded = 0 === e; i--;) {
            if (n++, t[i]) {
                var a = t[i].getAttribute(s) || "";
                a.length > 0 && this.cached_images.push(t[i])
            }
            n === e && (this.images_loaded = !0, this.enhance("images"))
        }
        return this
    }, update_nodes: function () {
        var t = this.S("[" + this.data_attr + "]").not("img"), e = t.length, i = e, n = 0, s = this.data_attr;
        for (this.cached_nodes = [], this.nodes_loaded = 0 === e; i--;) {
            n++;
            var a = t[i].getAttribute(s) || "";
            a.length > 0 && this.cached_nodes.push(t[i]), n === e && (this.nodes_loaded = !0, this.enhance("nodes"))
        }
        return this
    }, enhance: function (i) {
        for (var n = this["cached_" + i].length; n--;)this.object(t(this["cached_" + i][n]));
        return t(e).trigger("resize")
    }, parse_params: function (t, e, i) {
        return[this.trim(t), this.convert_directive(e), this.trim(i)]
    }, convert_directive: function (t) {
        var e = this.trim(t);
        return e.length > 0 ? e : "replace"
    }, object: function (t) {
        var e = this.parse_data_attr(t), i = [], n = e.length;
        if (n > 0)for (; n--;) {
            var s = e[n].split(/\((.*?)(\))$/);
            if (s.length > 1) {
                var a = s[0].split(","), o = this.parse_params(a[0], a[1], s[1]);
                i.push(o)
            }
        }
        return this.store(t, i)
    }, uuid: function (t) {
        function e() {
            return n.random_str(6)
        }

        var i = t || "-", n = this;
        return e() + e() + i + e() + i + e() + i + e() + i + e() + e() + e()
    }, store: function (t, e) {
        var i = this.uuid(), n = t.data(this.add_namespace("uuid", !0));
        return this.cache[n] ? this.cache[n] : (t.attr(this.add_namespace("data-uuid"), i), this.cache[i] = e)
    }, trim: function (e) {
        return"string" == typeof e ? t.trim(e) : e
    }, set_data_attr: function (t) {
        return t ? this.namespace.length > 0 ? this.namespace + "-" + this.settings.load_attr : this.settings.load_attr : this.namespace.length > 0 ? "data-" + this.namespace + "-" + this.settings.load_attr : "data-" + this.settings.load_attr
    }, parse_data_attr: function (t) {
        for (var e = t.attr(this.attr_name()).split(/\[(.*?)\]/), i = e.length, n = []; i--;)e[i].replace(/[\W\d]+/, "").length > 4 && n.push(e[i]);
        return n
    }, reflow: function () {
        this.load("images", !0), this.load("nodes", !0)
    }}
}(jQuery, this, this.document), function (t, e, i, n) {
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
        var e = this, i = t("[" + this.attr_name() + "]", this.scope), n = ["timer", "scrollSpeed", "startOffset", "tipAnimationFadeSpeed", "cookieExpires"], s = n.length;
        !i.length > 0 || (this.settings.init || this.events(), this.settings = i.data(this.attr_name(!0) + "-init"), this.settings.$content_el = i, this.settings.$body = t(this.settings.tip_container), this.settings.body_offset = t(this.settings.tip_container).position(), this.settings.$tip_content = this.settings.$content_el.find("> li"), this.settings.paused = !1, this.settings.attempts = 0, "function" != typeof t.cookie && (this.settings.cookie_monster = !1), (!this.settings.cookie_monster || this.settings.cookie_monster && !t.cookie(this.settings.cookie_name)) && (this.settings.$tip_content.each(function (i) {
            var a = t(this);
            this.settings = t.extend({}, e.defaults, e.data_options(a));
            for (var o = s; o--;)e.settings[n[o]] = parseInt(e.settings[n[o]], 10);
            e.create({$li: a, index: i})
        }), !this.settings.start_timer_on_click && this.settings.timer > 0 ? (this.show("init"), this.startTimer()) : this.show("init")))
    }, resume: function () {
        this.set_li(), this.show()
    }, tip_template: function (e) {
        var i, n;
        return e.tip_class = e.tip_class || "", i = t(this.settings.template.tip).addClass(e.tip_class), n = t.trim(t(e.li).html()) + this.button_text(e.button_text) + this.settings.template.link + this.timer_instance(e.index), i.append(t(this.settings.template.wrapper)), i.first().attr(this.add_namespace("data-index"), e.index), t(".joyride-content-wrapper", i).append(n), i[0]
    }, timer_instance: function (e) {
        var i;
        return i = 0 === e && this.settings.start_timer_on_click && this.settings.timer > 0 || 0 === this.settings.timer ? "" : t(this.settings.template.timer)[0].outerHTML
    }, button_text: function (e) {
        return this.settings.next_button ? (e = t.trim(e) || "Next", e = t(this.settings.template.button).append(e)[0].outerHTML) : e = "", e
    }, create: function (e) {
        console.log(e.$li);
        var i = e.$li.attr(this.add_namespace("data-button")) || e.$li.attr(this.add_namespace("data-text")), n = e.$li.attr("class"), s = t(this.tip_template({tip_class: n, index: e.index, button_text: i, li: e.$li}));
        t(this.settings.tip_container).append(s)
    }, show: function (e) {
        var i = null;
        this.settings.$li === n || -1 === t.inArray(this.settings.$li.index(), this.settings.pause_after) ? (this.settings.paused ? this.settings.paused = !1 : this.set_li(e), this.settings.attempts = 0, this.settings.$li.length && this.settings.$target.length > 0 ? (e && (this.settings.pre_ride_callback(this.settings.$li.index(), this.settings.$next_tip), this.settings.modal && this.show_modal()), this.settings.pre_step_callback(this.settings.$li.index(), this.settings.$next_tip), this.settings.modal && this.settings.expose && this.expose(), this.settings.tip_settings = t.extend({}, this.settings, this.data_options(this.settings.$li)), this.settings.timer = parseInt(this.settings.timer, 10), this.settings.tip_settings.tip_location_pattern = this.settings.tip_location_patterns[this.settings.tip_settings.tip_location], /body/i.test(this.settings.$target.selector) || this.scroll_to(), this.is_phone() ? this.pos_phone(!0) : this.pos_default(!0), i = this.settings.$next_tip.find(".joyride-timer-indicator"), /pop/i.test(this.settings.tip_animation) ? (i.width(0), this.settings.timer > 0 ? (this.settings.$next_tip.show(), setTimeout(function () {
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
        var e = this.settings.$li.attr(this.add_namespace("data-class")), n = this.settings.$li.attr(this.add_namespace("data-id")), s = function () {
            return n ? t(i.getElementById(n)) : e ? t("." + e).first() : t("body")
        };
        console.log(e, n), this.settings.$target = s()
    }, scroll_to: function () {
        var i, n;
        i = t(e).height() / 2, n = Math.ceil(this.settings.$target.offset().top - i + this.settings.$next_tip.outerHeight()), 0 != n && t("html, body").animate({scrollTop: n}, this.settings.scroll_speed, "swing")
    }, paused: function () {
        return-1 === t.inArray(this.settings.$li.index() + 1, this.settings.pause_after)
    }, restart: function () {
        this.hide(), this.settings.$li = n, this.show("init")
    }, pos_default: function (i, n) {
        var s = (Math.ceil(t(e).height() / 2), this.settings.$next_tip.offset(), this.settings.$next_tip.find(".joyride-nub")), a = Math.ceil(s.outerWidth() / 2), o = Math.ceil(s.outerHeight() / 2), r = i || !1;
        r && (this.settings.$next_tip.css("visibility", "hidden"), this.settings.$next_tip.show()), "undefined" == typeof n && (n = !1), /body/i.test(this.settings.$target.selector) ? this.settings.$li.length && this.pos_modal(s) : (this.bottom() ? (this.rtl ? this.settings.$next_tip.css({top: this.settings.$target.offset().top + o + this.settings.$target.outerHeight(), left: this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth()}) : this.settings.$next_tip.css({top: this.settings.$target.offset().top + o + this.settings.$target.outerHeight(), left: this.settings.$target.offset().left}), this.nub_position(s, this.settings.tip_settings.nub_position, "top")) : this.top() ? (this.rtl ? this.settings.$next_tip.css({top: this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - o, left: this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth()}) : this.settings.$next_tip.css({top: this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - o, left: this.settings.$target.offset().left}), this.nub_position(s, this.settings.tip_settings.nub_position, "bottom")) : this.right() ? (this.settings.$next_tip.css({top: this.settings.$target.offset().top, left: this.outerWidth(this.settings.$target) + this.settings.$target.offset().left + a}), this.nub_position(s, this.settings.tip_settings.nub_position, "left")) : this.left() && (this.settings.$next_tip.css({top: this.settings.$target.offset().top, left: this.settings.$target.offset().left - this.outerWidth(this.settings.$next_tip) - a}), this.nub_position(s, this.settings.tip_settings.nub_position, "right")), !this.visible(this.corners(this.settings.$next_tip)) && this.settings.attempts < this.settings.tip_settings.tip_location_pattern.length && (s.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"), this.settings.tip_settings.tip_location = this.settings.tip_settings.tip_location_pattern[this.settings.attempts], this.settings.attempts++, this.pos_default())), r && (this.settings.$next_tip.hide(), this.settings.$next_tip.css("visibility", "visible"))
    }, pos_phone: function (e) {
        var i = this.settings.$next_tip.outerHeight(), n = (this.settings.$next_tip.offset(), this.settings.$target.outerHeight()), s = t(".joyride-nub", this.settings.$next_tip), a = Math.ceil(s.outerHeight() / 2), o = e || !1;
        s.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"), o && (this.settings.$next_tip.css("visibility", "hidden"), this.settings.$next_tip.show()), /body/i.test(this.settings.$target.selector) ? this.settings.$li.length && this.pos_modal(s) : this.top() ? (this.settings.$next_tip.offset({top: this.settings.$target.offset().top - i - a}), s.addClass("bottom")) : (this.settings.$next_tip.offset({top: this.settings.$target.offset().top + n + a}), s.addClass("top")), o && (this.settings.$next_tip.hide(), this.settings.$next_tip.css("visibility", "visible"))
    }, pos_modal: function (t) {
        this.center(), t.hide(), this.show_modal()
    }, show_modal: function () {
        if (!this.settings.$next_tip.data("closed")) {
            var e = t(".joyride-modal-bg");
            e.length < 1 && t("body").append(this.settings.template.modal).show(), /pop/i.test(this.settings.tip_animation) ? e.show() : e.fadeIn(this.settings.tip_animation_fade_speed)
        }
    }, expose: function () {
        var i, n, s, a, o, r = "expose-" + this.random_str(6);
        if (arguments.length > 0 && arguments[0]instanceof t)s = arguments[0]; else {
            if (!this.settings.$target || /body/i.test(this.settings.$target.selector))return!1;
            s = this.settings.$target
        }
        return s.length < 1 ? (e.console && console.error("element not valid", s), !1) : (i = t(this.settings.template.expose), this.settings.$body.append(i), i.css({top: s.offset().top, left: s.offset().left, width: s.outerWidth(!0), height: s.outerHeight(!0)}), n = t(this.settings.template.expose_cover), a = {zIndex: s.css("z-index"), position: s.css("position")}, o = null == s.attr("class") ? "" : s.attr("class"), s.css("z-index", parseInt(i.css("z-index")) + 1), "static" == a.position && s.css("position", "relative"), s.data("expose-css", a), s.data("orig-class", o), s.attr("class", o + " " + this.settings.expose_add_class), n.css({top: s.offset().top, left: s.offset().left, width: s.outerWidth(!0), height: s.outerHeight(!0)}), this.settings.modal && this.show_modal(), this.settings.$body.append(n), i.addClass(r), n.addClass(r), s.data("expose", r), this.settings.post_expose_callback(this.settings.$li.index(), this.settings.$next_tip, s), this.add_exposed(s), void 0)
    }, un_expose: function () {
        var i, n, s, a, o, r = !1;
        if (arguments.length > 0 && arguments[0]instanceof t)n = arguments[0]; else {
            if (!this.settings.$target || /body/i.test(this.settings.$target.selector))return!1;
            n = this.settings.$target
        }
        return n.length < 1 ? (e.console && console.error("element not valid", n), !1) : (i = n.data("expose"), s = t("." + i), arguments.length > 1 && (r = arguments[1]), r === !0 ? t(".joyride-expose-wrapper,.joyride-expose-cover").remove() : s.remove(), a = n.data("expose-css"), "auto" == a.zIndex ? n.css("z-index", "") : n.css("z-index", a.zIndex), a.position != n.css("position") && ("static" == a.position ? n.css("position", "") : n.css("position", a.position)), o = n.data("orig-class"), n.attr("class", o), n.removeData("orig-classes"), n.removeData("expose"), n.removeData("expose-z-index"), this.remove_exposed(n), void 0)
    }, add_exposed: function (e) {
        this.settings.exposed = this.settings.exposed || [], e instanceof t || "object" == typeof e ? this.settings.exposed.push(e[0]) : "string" == typeof e && this.settings.exposed.push(e)
    }, remove_exposed: function (e) {
        var i, n;
        for (e instanceof t ? i = e[0] : "string" == typeof e && (i = e), this.settings.exposed = this.settings.exposed || [], n = this.settings.exposed.length; n--;)if (this.settings.exposed[n] == i)return this.settings.exposed.splice(n, 1), void 0
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
        var n = t(e), s = n.height() / 2, a = Math.ceil(this.settings.$target.offset().top - s + this.settings.$next_tip.outerHeight()), o = n.width() + n.scrollLeft(), r = n.height() + a, l = n.height() + n.scrollTop(), c = n.scrollTop();
        return c > a && (c = 0 > a ? 0 : a), r > l && (l = r), [i.offset().top < c, o < i.offset().left + i.outerWidth(), l < i.offset().top + i.outerHeight(), n.scrollLeft() > i.offset().left]
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
        var i = this, n = i.S, s = i.settings;
        i.set_expedition_position(), n(i.scope).off(".magellan").on("click.fndtn.magellan", "[" + i.add_namespace("data-magellan-arrival") + '] a[href^="#"]',function (n) {
            n.preventDefault();
            var s = t(this).closest("[" + i.attr_name() + "]"), a = (s.data("magellan-expedition-init"), this.hash.split("#").join("")), o = t("a[name=" + a + "]");
            0 === o.length && (o = t("#" + a));
            var r = o.offset().top;
            "fixed" === s.css("position") && (r -= s.outerHeight()), t("html, body").stop().animate({scrollTop: r}, 700, "swing", function () {
                e.location.hash = "#" + a
            })
        }).on("scroll.fndtn.magellan", i.throttle(this.check_for_arrivals.bind(this), s.throttle_delay)).on("resize.fndtn.magellan", i.throttle(this.set_expedition_position.bind(this), s.throttle_delay))
    }, check_for_arrivals: function () {
        var t = this;
        t.update_arrivals(), t.update_expedition_positions()
    }, set_expedition_position: function () {
        var e = this;
        t("[" + this.attr_name() + "=fixed]", e.scope).each(function () {
            var i, n = t(this), s = n.attr("styles");
            n.attr("style", ""), i = n.offset().top, n.data(e.data_attr("magellan-top-offset"), i), n.attr("style", s)
        })
    }, update_expedition_positions: function () {
        var i = this, n = t(e).scrollTop();
        t("[" + this.attr_name() + "=fixed]", i.scope).each(function () {
            var e = t(this), s = e.data("magellan-top-offset");
            if (n >= s) {
                var a = e.prev("[" + i.add_namespace("data-magellan-expedition-clone") + "]");
                0 === a.length && (a = e.clone(), a.removeAttr(i.attr_name()), a.attr(i.add_namespace("data-magellan-expedition-clone"), ""), e.before(a)), e.css({position: "fixed", top: 0})
            } else e.prev("[" + i.add_namespace("data-magellan-expedition-clone") + "]").remove(), e.attr("style", "")
        })
    }, update_arrivals: function () {
        var i = this, n = t(e).scrollTop();
        t("[" + this.attr_name() + "]", i.scope).each(function () {
            var e = t(this), s = s = e.data(i.attr_name(!0) + "-init"), a = i.offsets(e, n), o = e.find("[" + i.add_namespace("data-magellan-arrival") + "]"), r = !1;
            a.each(function (t, n) {
                if (n.viewport_offset >= n.top_offset) {
                    var a = e.find("[" + i.add_namespace("data-magellan-arrival") + "]");
                    return a.not(n.arrival).removeClass(s.active_class), n.arrival.addClass(s.active_class), r = !0, !0
                }
            }), r || o.removeClass(s.active_class)
        })
    }, offsets: function (e, i) {
        var n = this, s = e.data(n.attr_name(!0) + "-init"), a = i + s.destination_threshold;
        return e.find("[" + n.add_namespace("data-magellan-arrival") + "]").map(function () {
            var e = t(this).data(n.data_attr("magellan-arrival")), i = t("[" + n.add_namespace("data-magellan-destination") + "=" + e + "]");
            if (i.length > 0) {
                var s = i.offset().top;
                return{destination: i, arrival: t(this), top_offset: s, viewport_offset: a}
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
}(jQuery, this, this.document), function (t, e, i, n) {
    "use strict";
    var s = function () {
    }, a = function (s, a) {
        if (s.hasClass(a.slides_container_class))return this;
        var c, d, u, h, p, f, m = this, g = s, v = 0, y = !1;
        m.slides = function () {
            return g.children(a.slide_selector)
        }, m.slides().first().addClass(a.active_slide_class), m.update_slide_number = function (e) {
            a.slide_number && (d.find("span:first").text(parseInt(e) + 1), d.find("span:last").text(m.slides().length)), a.bullets && (u.children().removeClass(a.bullets_active_class), t(u.children().get(e)).addClass(a.bullets_active_class))
        }, m.update_active_link = function (e) {
            var i = t('a[data-orbit-link="' + m.slides().eq(e).attr("data-orbit-slide") + '"]');
            i.siblings().removeClass(a.bullets_active_class), i.addClass(a.bullets_active_class)
        }, m.build_markup = function () {
            g.wrap('<div class="' + a.container_class + '"></div>'), c = g.parent(), g.addClass(a.slides_container_class), a.navigation_arrows && (c.append(t('<a href="#"><span></span></a>').addClass(a.prev_class)), c.append(t('<a href="#"><span></span></a>').addClass(a.next_class))), a.timer && (h = t("<div>").addClass(a.timer_container_class), h.append("<span>"), h.append(t("<div>").addClass(a.timer_progress_class)), h.addClass(a.timer_paused_class), c.append(h)), a.slide_number && (d = t("<div>").addClass(a.slide_number_class), d.append("<span></span> " + a.slide_number_text + " <span></span>"), c.append(d)), a.bullets && (u = t("<ol>").addClass(a.bullets_container_class), c.append(u), u.wrap('<div class="orbit-bullets-container"></div>'), m.slides().each(function (e) {
                var i = t("<li>").attr("data-orbit-slide", e);
                u.append(i)
            })), a.stack_on_small && c.addClass(a.stack_on_small_class)
        }, m._goto = function (e, i) {
            if (e === v)return!1;
            "object" == typeof f && f.restart();
            var n = m.slides(), s = "next";
            if (y = !0, v > e && (s = "prev"), e >= n.length) {
                if (!a.circular)return!1;
                e = 0
            } else if (0 > e) {
                if (!a.circular)return!1;
                e = n.length - 1
            }
            var o = t(n.get(v)), r = t(n.get(e));
            o.css("zIndex", 2), o.removeClass(a.active_slide_class), r.css("zIndex", 4).addClass(a.active_slide_class), g.trigger("before-slide-change.fndtn.orbit"), a.before_slide_change(), m.update_active_link(e);
            var l = function () {
                var t = function () {
                    v = e, y = !1, i === !0 && (f = m.create_timer(), f.start()), m.update_slide_number(v), g.trigger("after-slide-change.fndtn.orbit", [
                        {slide_number: v, total_slides: n.length}
                    ]), a.after_slide_change(v, n.length)
                };
                g.height() != r.height() && a.variable_height ? g.animate({height: r.height()}, 250, "linear", t) : t()
            };
            if (1 === n.length)return l(), !1;
            var c = function () {
                "next" === s && p.next(o, r, l), "prev" === s && p.prev(o, r, l)
            };
            r.height() > g.height() && a.variable_height ? g.animate({height: r.height()}, 250, "linear", c) : c()
        }, m.next = function (t) {
            t.stopImmediatePropagation(), t.preventDefault(), m._goto(v + 1)
        }, m.prev = function (t) {
            t.stopImmediatePropagation(), t.preventDefault(), m._goto(v - 1)
        }, m.link_custom = function (e) {
            e.preventDefault();
            var i = t(this).attr("data-orbit-link");
            if ("string" == typeof i && "" != (i = t.trim(i))) {
                var n = c.find("[data-orbit-slide=" + i + "]");
                -1 != n.index() && m._goto(n.index())
            }
        }, m.link_bullet = function () {
            var e = t(this).attr("data-orbit-slide");
            if ("string" == typeof e && "" != (e = t.trim(e)))if (isNaN(parseInt(e))) {
                var i = c.find("[data-orbit-slide=" + e + "]");
                -1 != i.index() && m._goto(i.index() + 1)
            } else m._goto(parseInt(e))
        }, m.timer_callback = function () {
            m._goto(v + 1, !0)
        }, m.compute_dimensions = function () {
            var e = t(m.slides().get(v)), i = e.height();
            a.variable_height || m.slides().each(function () {
                t(this).height() > i && (i = t(this).height())
            }), g.height(i)
        }, m.create_timer = function () {
            var t = new o(c.find("." + a.timer_container_class), a, m.timer_callback);
            return t
        }, m.stop_timer = function () {
            "object" == typeof f && f.stop()
        }, m.toggle_timer = function () {
            var t = c.find("." + a.timer_container_class);
            t.hasClass(a.timer_paused_class) ? ("undefined" == typeof f && (f = m.create_timer()), f.start()) : "object" == typeof f && f.stop()
        }, m.init = function () {
            m.build_markup(), a.timer && (f = m.create_timer(), Foundation.utils.image_loaded(this.slides().children("img"), f.start)), p = new l(a, g), "slide" === a.animation && (p = new r(a, g)), c.on("click", "." + a.next_class, m.next), c.on("click", "." + a.prev_class, m.prev), c.on("click", "[data-orbit-slide]", m.link_bullet), c.on("click", m.toggle_timer), a.swipe && c.on("touchstart.fndtn.orbit",function (t) {
                t.touches || (t = t.originalEvent);
                var e = {start_page_x: t.touches[0].pageX, start_page_y: t.touches[0].pageY, start_time: (new Date).getTime(), delta_x: 0, is_scrolling: n};
                c.data("swipe-transition", e), t.stopPropagation()
            }).on("touchmove.fndtn.orbit",function (t) {
                if (t.touches || (t = t.originalEvent), !(t.touches.length > 1 || t.scale && 1 !== t.scale)) {
                    var e = c.data("swipe-transition");
                    if ("undefined" == typeof e && (e = {}), e.delta_x = t.touches[0].pageX - e.start_page_x, "undefined" == typeof e.is_scrolling && (e.is_scrolling = !!(e.is_scrolling || Math.abs(e.delta_x) < Math.abs(t.touches[0].pageY - e.start_page_y))), !e.is_scrolling && !e.active) {
                        t.preventDefault();
                        var i = e.delta_x < 0 ? v + 1 : v - 1;
                        e.active = !0, m._goto(i)
                    }
                }
            }).on("touchend.fndtn.orbit", function (t) {
                c.data("swipe-transition", {}), t.stopPropagation()
            }), c.on("mouseenter.fndtn.orbit",function () {
                a.timer && a.pause_on_hover && m.stop_timer()
            }).on("mouseleave.fndtn.orbit", function () {
                a.timer && a.resume_on_mouseout && f.start()
            }), t(i).on("click", "[data-orbit-link]", m.link_custom), t(e).on("resize", m.compute_dimensions), Foundation.utils.image_loaded(this.slides().children("img"), m.compute_dimensions), Foundation.utils.image_loaded(this.slides().children("img"), function () {
                c.prev(".preloader").css("display", "none"), m.update_slide_number(0), m.update_active_link(0), g.trigger("ready.fndtn.orbit")
            })
        }, m.init()
    }, o = function (t, e, i) {
        var n, s, a = this, o = e.timer_speed, r = t.find("." + e.timer_progress_class), l = -1;
        this.update_progress = function (t) {
            var e = r.clone();
            e.attr("style", ""), e.css("width", t + "%"), r.replaceWith(e), r = e
        }, this.restart = function () {
            clearTimeout(s), t.addClass(e.timer_paused_class), l = -1, a.update_progress(0)
        }, this.start = function () {
            return t.hasClass(e.timer_paused_class) ? (l = -1 === l ? o : l, t.removeClass(e.timer_paused_class), n = (new Date).getTime(), r.animate({width: "100%"}, l, "linear"), s = setTimeout(function () {
                a.restart(), i()
            }, l), t.trigger("timer-started.fndtn.orbit"), void 0) : !0
        }, this.stop = function () {
            if (t.hasClass(e.timer_paused_class))return!0;
            clearTimeout(s), t.addClass(e.timer_paused_class);
            var i = (new Date).getTime();
            l -= i - n;
            var r = 100 - l / o * 100;
            a.update_progress(r), t.trigger("timer-stopped.fndtn.orbit")
        }
    }, r = function (e) {
        var i = e.animation_speed, n = 1 === t("html[dir=rtl]").length, s = n ? "marginRight" : "marginLeft", a = {};
        a[s] = "0%", this.next = function (t, e, n) {
            t.animate({marginLeft: "-100%"}, i), e.animate(a, i, function () {
                t.css(s, "100%"), n()
            })
        }, this.prev = function (t, e, n) {
            t.animate({marginLeft: "100%"}, i), e.css(s, "-100%"), e.animate(a, i, function () {
                t.css(s, "100%"), n()
            })
        }
    }, l = function (e) {
        {
            var i = e.animation_speed;
            1 === t("html[dir=rtl]").length
        }
        this.next = function (t, e, n) {
            e.css({margin: "0%", opacity: "0.01"}), e.animate({opacity: "1"}, i, "linear", function () {
                t.css("margin", "100%"), n()
            })
        }, this.prev = function (t, e, n) {
            e.css({margin: "0%", opacity: "0.01"}), e.animate({opacity: "1"}, i, "linear", function () {
                t.css("margin", "100%"), n()
            })
        }
    };
    Foundation.libs = Foundation.libs || {}, Foundation.libs.orbit = {name: "orbit", version: "5.1.1", settings: {animation: "slide", timer_speed: 1e4, pause_on_hover: !0, resume_on_mouseout: !1, animation_speed: 500, stack_on_small: !1, navigation_arrows: !0, slide_number: !0, slide_number_text: "of", container_class: "orbit-container", stack_on_small_class: "orbit-stack-on-small", next_class: "orbit-next", prev_class: "orbit-prev", timer_container_class: "orbit-timer", timer_paused_class: "paused", timer_progress_class: "orbit-progress", slides_container_class: "orbit-slides-container", slide_selector: "*", bullets_container_class: "orbit-bullets", bullets_active_class: "active", slide_number_class: "orbit-slide-number", caption_class: "orbit-caption", active_slide_class: "active", orbit_transition_class: "orbit-transitioning", bullets: !0, circular: !0, timer: !0, variable_height: !1, swipe: !0, before_slide_change: s, after_slide_change: s}, init: function (t, e, i) {
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
            var n = t.S(i), s = (t.data_options(n), n.data(t.name + "-instance"));
            s.compute_dimensions()
        })
    }}
}(jQuery, this, this.document), function (t, e, i, n) {
    "use strict";
    Foundation.libs.reveal = {name: "reveal", version: "5.1.1", locked: !1, settings: {animation: "fadeAndPop", animation_speed: 250, close_on_background_click: !0, close_on_esc: !0, dismiss_modal_class: "close-reveal-modal", bg_class: "reveal-modal-bg", open: function () {
    }, opened: function () {
    }, close: function () {
    }, closed: function () {
    }, bg: t(".reveal-modal-bg"), css: {open: {opacity: 0, visibility: "visible", display: "block"}, close: {opacity: 1, visibility: "hidden", display: "none"}}}, init: function (e, i, n) {
        t.extend(!0, this.settings, i, n), this.bindings(i, n)
    }, events: function () {
        var t = this, e = t.S;
        return e(this.scope).off(".reveal").on("click.fndtn.reveal", "[" + this.add_namespace("data-reveal-id") + "]", function (i) {
            if (i.preventDefault(), !t.locked) {
                var n = e(this), s = n.data(t.data_attr("reveal-ajax"));
                if (t.locked = !0, "undefined" == typeof s)t.open.call(t, n); else {
                    var a = s === !0 ? n.attr("href") : s;
                    t.open.call(t, n, {url: a})
                }
            }
        }), e(i).on("click.fndtn.reveal", this.close_targets(), function (i) {
            if (i.preventDefault(), !t.locked) {
                var n = e("[" + t.attr_name() + "].open").data(t.attr_name(!0) + "-init"), s = e(i.target)[0] === e("." + n.bg_class)[0];
                if (s && !n.close_on_background_click)return;
                t.locked = !0, t.close.call(t, s ? e("[" + t.attr_name() + "].open") : e(this).closest("[" + t.attr_name() + "]"))
            }
        }), e("[" + t.attr_name() + "]", this.scope).length > 0 ? e(this.scope).on("open.fndtn.reveal", this.settings.open).on("opened.fndtn.reveal", this.settings.opened).on("opened.fndtn.reveal", this.open_video).on("close.fndtn.reveal", this.settings.close).on("closed.fndtn.reveal", this.settings.closed).on("closed.fndtn.reveal", this.close_video) : e(this.scope).on("open.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.open).on("opened.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.opened).on("opened.fndtn.reveal", "[" + t.attr_name() + "]", this.open_video).on("close.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.close).on("closed.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.closed).on("closed.fndtn.reveal", "[" + t.attr_name() + "]", this.close_video), !0
    }, key_up_on: function () {
        var t = this;
        return t.S("body").off("keyup.fndtn.reveal").on("keyup.fndtn.reveal", function (e) {
            var i = t.S("[" + t.attr_name() + "].open"), n = i.data(t.attr_name(!0) + "-init");
            n && 27 === e.which && n.close_on_esc && !t.locked && t.close.call(t, i)
        }), !0
    }, key_up_off: function () {
        return this.S("body").off("keyup.fndtn.reveal"), !0
    }, open: function (e, i) {
        var n = this;
        if (e)if ("undefined" != typeof e.selector)var s = n.S("#" + e.data(n.data_attr("reveal-id"))); else {
            var s = n.S(this.scope);
            i = e
        } else var s = n.S(this.scope);
        var a = s.data(n.attr_name(!0) + "-init");
        if (!s.hasClass("open")) {
            var o = n.S("[" + n.attr_name() + "].open");
            if ("undefined" == typeof s.data("css-top") && s.data("css-top", parseInt(s.css("top"), 10)).data("offset", this.cache_offset(s)), this.key_up_on(s), s.trigger("open"), o.length < 1 && this.toggle_bg(s), "string" == typeof i && (i = {url: i}), "undefined" != typeof i && i.url) {
                var r = "undefined" != typeof i.success ? i.success : null;
                t.extend(i, {success: function (e, i, l) {
                    if (t.isFunction(r) && r(e, i, l), s.html(e), n.S(s).foundation("section", "reflow"), o.length > 0) {
                        var c = o.data(n.attr_name(!0));
                        n.hide(o, c.css.close)
                    }
                    n.show(s, a.css.open)
                }}), t.ajax(i)
            } else {
                if (o.length > 0) {
                    var l = o.data(n.attr_name(!0) + "-init");
                    this.hide(o, l.css.close)
                }
                this.show(s, a.css.open)
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
    }, show: function (i, n) {
        if (n) {
            var s = i.data(this.attr_name(!0) + "-init");
            if (0 === i.parent("body").length) {
                var a = i.wrap('<div style="display: none;" />').parent(), o = this.settings.rootElement || "body";
                i.on("closed.fndtn.reveal.wrapped", function () {
                    i.detach().appendTo(a), i.unwrap().unbind("closed.fndtn.reveal.wrapped")
                }), i.detach().appendTo(o)
            }
            if (/pop/i.test(s.animation)) {
                n.top = t(e).scrollTop() - i.data("offset") + "px";
                var r = {top: t(e).scrollTop() + i.data("css-top") + "px", opacity: 1};
                return setTimeout(function () {
                    return i.css(n).animate(r, s.animation_speed, "linear", function () {
                        this.locked = !1, i.trigger("opened")
                    }.bind(this)).addClass("open")
                }.bind(this), s.animation_speed / 2)
            }
            if (/fade/i.test(s.animation)) {
                var r = {opacity: 1};
                return setTimeout(function () {
                    return i.css(n).animate(r, s.animation_speed, "linear", function () {
                        this.locked = !1, i.trigger("opened")
                    }.bind(this)).addClass("open")
                }.bind(this), s.animation_speed / 2)
            }
            return i.css(n).show().css({opacity: 1}).addClass("open").trigger("opened")
        }
        var s = this.settings;
        return/fade/i.test(s.animation) ? i.fadeIn(s.animation_speed / 2) : (this.locked = !1, i.show())
    }, hide: function (i, n) {
        if (n) {
            var s = i.data(this.attr_name(!0) + "-init");
            if (/pop/i.test(s.animation)) {
                var a = {top: -t(e).scrollTop() - i.data("offset") + "px", opacity: 0};
                return setTimeout(function () {
                    return i.animate(a, s.animation_speed, "linear", function () {
                        this.locked = !1, i.css(n).trigger("closed")
                    }.bind(this)).removeClass("open")
                }.bind(this), s.animation_speed / 2)
            }
            if (/fade/i.test(s.animation)) {
                var a = {opacity: 0};
                return setTimeout(function () {
                    return i.animate(a, s.animation_speed, "linear", function () {
                        this.locked = !1, i.css(n).trigger("closed")
                    }.bind(this)).removeClass("open")
                }.bind(this), s.animation_speed / 2)
            }
            return i.hide().css(n).removeClass("open").trigger("closed")
        }
        var s = this.settings;
        return/fade/i.test(s.animation) ? i.fadeOut(s.animation_speed / 2) : i.hide()
    }, close_video: function (e) {
        var i = t(".flex-video", e.target), n = t("iframe", i);
        n.length > 0 && (n.attr("data-src", n[0].src), n.attr("src", "about:blank"), i.hide())
    }, open_video: function (e) {
        var i = t(".flex-video", e.target), s = i.find("iframe");
        if (s.length > 0) {
            var a = s.attr("data-src");
            if ("string" == typeof a)s[0].src = s.attr("data-src"); else {
                var o = s[0].src;
                s[0].src = n, s[0].src = o
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
            var n = e(this).parent(), s = n.closest("[" + t.attr_name() + "]"), a = e("#" + this.href.split("#")[1]), o = n.siblings(), r = s.data(t.attr_name(!0) + "-init");
            e(this).data(t.data_attr("tab-content")) && (a = e("#" + e(this).data(t.data_attr("tab-content")).split("#")[1])), n.addClass(r.active_class).triggerHandler("opened"), o.removeClass(r.active_class), a.siblings().removeClass(r.active_class).end().addClass(r.active_class), r.callback(n), s.triggerHandler("toggled", [n])
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
        var e = this, n = e.S;
        Modernizr.touch ? n(i).off(".tooltip").on("click.fndtn.tooltip touchstart.fndtn.tooltip touchend.fndtn.tooltip", "[" + this.attr_name() + "]:not(a)",function (i) {
            var s = t.extend({}, e.settings, e.data_options(n(this)));
            s.disable_for_touch || (i.preventDefault(), n(s.tooltip_class).hide(), e.showOrCreateTip(n(this)))
        }).on("click.fndtn.tooltip touchstart.fndtn.tooltip touchend.fndtn.tooltip", this.settings.tooltip_class, function (t) {
            t.preventDefault(), n(this).fadeOut(150)
        }) : n(i).off(".tooltip").on("mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip", "[" + this.attr_name() + "]", function (t) {
            var i = n(this);
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
        var i = t(this.settings.tip_template(this.selector(e), t("<div></div>").html(e.attr("title")).html())), n = this.inheritable_classes(e);
        i.addClass(n).appendTo(this.settings.append_to), Modernizr.touch && i.append('<span class="tap-to-close">' + this.settings.touch_close_text + "</span>"), e.removeAttr("title").attr("title", ""), this.show(e)
    }, reposition: function (t, e, i) {
        var n, s, a, o, r;
        if (e.css("visibility", "hidden").show(), n = t.data("width"), s = e.children(".nub"), a = s.outerHeight(), o = s.outerHeight(), this.small() ? e.css({width: "100%"}) : e.css({width: n ? n : "auto"}), r = function (t, e, i, n, s) {
            return t.css({top: e ? e : "auto", bottom: n ? n : "auto", left: s ? s : "auto", right: i ? i : "auto"}).end()
        }, r(e, t.offset().top + t.outerHeight() + 10, "auto", "auto", t.offset().left), this.small())r(e, t.offset().top + t.outerHeight() + 10, "auto", "auto", 12.5, this.S(this.scope).width()), e.addClass("tip-override"), r(s, -a, "auto", "auto", t.offset().left + 10); else {
            var l = t.offset().left;
            Foundation.rtl && (l = t.offset().left + t.outerWidth() - e.outerWidth()), r(e, t.offset().top + t.outerHeight() + 10, "auto", "auto", l), e.removeClass("tip-override"), s.removeAttr("style"), i && i.indexOf("tip-top") > -1 ? r(e, t.offset().top - e.outerHeight() - 10, "auto", "auto", l).removeClass("tip-override") : i && i.indexOf("tip-left") > -1 ? r(e, t.offset().top + t.outerHeight() / 2 - e.outerHeight() / 2, "auto", "auto", t.offset().left - e.outerWidth() - a).removeClass("tip-override") : i && i.indexOf("tip-right") > -1 && r(e, t.offset().top + t.outerHeight() / 2 - e.outerHeight() / 2, "auto", "auto", t.offset().left + t.outerWidth() + a).removeClass("tip-override")
        }
        e.css("visibility", "visible").hide()
    }, small: function () {
        return matchMedia(Foundation.media_queries.small).matches
    }, inheritable_classes: function (e) {
        var i = ["tip-top", "tip-left", "tip-bottom", "tip-right", "radius", "round"].concat(this.settings.additional_inheritable_classes), n = e.attr("class"), s = n ? t.map(n.split(" "),function (e) {
            return-1 !== t.inArray(e, i) ? e : void 0
        }).join(" ") : "";
        return t.trim(s)
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
    Foundation.libs.topbar = {name: "topbar", version: "5.1.1", settings: {index: 0, sticky_class: "sticky", custom_back_text: !0, back_text: "Back", is_hover: !0, mobile_show_parent_link: !1, scrolltop: !0}, init: function (e, i, n) {
        Foundation.inherit(this, "add_custom_rule register_media throttle");
        var s = this;
        s.register_media("topbar", "foundation-mq-topbar"), this.bindings(i, n), s.S("[" + this.attr_name() + "]", this.scope).each(function () {
            {
                var e = s.S(this), i = e.data(s.attr_name(!0) + "-init");
                s.S("section", this), t("> ul", this).first()
            }
            e.data("index", 0);
            var n = e.parent();
            n.hasClass("fixed") || n.hasClass(i.sticky_class) ? (s.settings.sticky_class = i.sticky_class, s.settings.sticky_topbar = e, e.data("height", n.outerHeight()), e.data("stickyoffset", n.offset().top)) : e.data("height", e.outerHeight()), i.assembled || s.assemble(e), i.is_hover ? s.S(".has-dropdown", e).addClass("not-click") : s.S(".has-dropdown", e).removeClass("not-click"), s.add_custom_rule(".f-topbar-fixed { padding-top: " + e.data("height") + "px }"), n.hasClass("fixed") && s.S("body").addClass("f-topbar-fixed")
        })
    }, toggle: function (i) {
        var n = this;
        if (i)var s = n.S(i).closest("[" + this.attr_name() + "]"); else var s = n.S("[" + this.attr_name() + "]");
        var a = s.data(this.attr_name(!0) + "-init"), o = n.S("section, .section", s);
        n.breakpoint() && (n.rtl ? (o.css({right: "0%"}), t(">.name", o).css({right: "100%"})) : (o.css({left: "0%"}), t(">.name", o).css({left: "100%"})), n.S("li.moved", o).removeClass("moved"), s.data("index", 0), s.toggleClass("expanded").css("height", "")), a.scrolltop ? s.hasClass("expanded") ? s.parent().hasClass("fixed") && (a.scrolltop ? (s.parent().removeClass("fixed"), s.addClass("fixed"), n.S("body").removeClass("f-topbar-fixed"), e.scrollTo(0, 0)) : s.parent().removeClass("expanded")) : s.hasClass("fixed") && (s.parent().addClass("fixed"), s.removeClass("fixed"), n.S("body").addClass("f-topbar-fixed")) : (s.parent().hasClass(n.settings.sticky_class) && s.parent().addClass("fixed"), s.parent().hasClass("fixed") && (s.hasClass("expanded") ? (s.addClass("fixed"), s.parent().addClass("expanded"), n.S("body").addClass("f-topbar-fixed")) : (s.removeClass("fixed"), s.parent().removeClass("expanded"), n.update_sticky_positioning())))
    }, timer: null, events: function () {
        var t = this, i = this.S;
        i(this.scope).off(".topbar").on("click.fndtn.topbar", "[" + this.attr_name() + "] .toggle-topbar",function (e) {
            e.preventDefault(), t.toggle(this)
        }).on("click.fndtn.topbar", "[" + this.attr_name() + "] li.has-dropdown",function (e) {
            var n = i(this), s = i(e.target), a = n.closest("[" + t.attr_name() + "]"), o = a.data(t.attr_name(!0) + "-init");
            return s.data("revealId") ? (t.toggle(), void 0) : (t.breakpoint() || (!o.is_hover || Modernizr.touch) && (e.stopImmediatePropagation(), n.hasClass("hover") ? (n.removeClass("hover").find("li").removeClass("hover"), n.parents("li.hover").removeClass("hover")) : (n.addClass("hover"), "A" === s[0].nodeName && s.parent().hasClass("has-dropdown") && e.preventDefault())), void 0)
        }).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown>a", function (e) {
            if (t.breakpoint()) {
                e.preventDefault();
                var n = i(this), s = n.closest("[" + t.attr_name() + "]"), a = s.find("section, .section"), o = (n.next(".dropdown").outerHeight(), n.closest("li"));
                s.data("index", s.data("index") + 1), o.addClass("moved"), t.rtl ? (a.css({right: -(100 * s.data("index")) + "%"}), a.find(">.name").css({right: 100 * s.data("index") + "%"})) : (a.css({left: -(100 * s.data("index")) + "%"}), a.find(">.name").css({left: 100 * s.data("index") + "%"})), s.css("height", n.siblings("ul").outerHeight(!0) + s.data("height"))
            }
        }), i(e).off(".topbar").on("resize.fndtn.topbar", t.throttle(function () {
            t.resize.call(t)
        }, 50)).trigger("resize"), i("body").off(".topbar").on("click.fndtn.topbar touchstart.fndtn.topbar", function (e) {
            var n = i(e.target).closest("li").closest("li.hover");
            n.length > 0 || i("[" + t.attr_name() + "] li").removeClass("hover")
        }), i(this.scope).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown .back", function (e) {
            e.preventDefault();
            var n = i(this), s = n.closest("[" + t.attr_name() + "]"), a = s.find("section, .section"), o = (s.data(t.attr_name(!0) + "-init"), n.closest("li.moved")), r = o.parent();
            s.data("index", s.data("index") - 1), t.rtl ? (a.css({right: -(100 * s.data("index")) + "%"}), a.find(">.name").css({right: 100 * s.data("index") + "%"})) : (a.css({left: -(100 * s.data("index")) + "%"}), a.find(">.name").css({left: 100 * s.data("index") + "%"})), 0 === s.data("index") ? s.css("height", "") : s.css("height", r.outerHeight(!0) + s.data("height")), setTimeout(function () {
                o.removeClass("moved")
            }, 300)
        })
    }, resize: function () {
        var t = this;
        t.S("[" + this.attr_name() + "]").each(function () {
            var e, n = t.S(this), s = (n.data(t.attr_name(!0) + "-init"), n.parent("." + t.settings.sticky_class));
            if (!t.breakpoint()) {
                var a = n.hasClass("expanded");
                n.css("height", "").removeClass("expanded").find("li").removeClass("hover"), a && t.toggle(n)
            }
            s.length > 0 && (s.hasClass("fixed") ? (s.removeClass("fixed"), e = s.offset().top, t.S(i.body).hasClass("f-topbar-fixed") && (e -= n.data("height")), n.data("stickyoffset", e), s.addClass("fixed")) : (e = s.offset().top, n.data("stickyoffset", e)))
        })
    }, breakpoint: function () {
        return!matchMedia(Foundation.media_queries.topbar).matches
    }, assemble: function (e) {
        {
            var i = this, n = e.data(this.attr_name(!0) + "-init"), s = i.S("section", e);
            t("> ul", e).first()
        }
        s.detach(), i.S(".has-dropdown>a", s).each(function () {
            var e = i.S(this), s = e.siblings(".dropdown"), a = e.attr("href");
            if (!s.find(".title.back").length) {
                if (n.mobile_show_parent_link && a && a.length > 1)var o = t('<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li><li><a class="parent-link js-generated" href="' + a + '">' + e.text() + "</a></li>"); else var o = t('<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li>');
                1 == n.custom_back_text ? t("h5>a", o).html(n.back_text) : t("h5>a", o).html("&laquo; " + e.html()), s.prepend(o)
            }
        }), s.appendTo(e), this.sticky(), this.assembled(e)
    }, assembled: function (e) {
        e.data(this.attr_name(!0), t.extend({}, e.data(this.attr_name(!0)), {assembled: !0}))
    }, height: function (e) {
        var i = 0, n = this;
        return t("> li", e).each(function () {
            i += n.S(this).outerHeight(!0)
        }), i
    }, sticky: function () {
        var t = (this.S(e), this);
        this.S(e).on("scroll", function () {
            t.update_sticky_positioning()
        })
    }, update_sticky_positioning: function () {
        var t = "." + this.settings.sticky_class, i = this.S(e), n = this;
        if (n.S(t).length > 0) {
            var s = this.settings.sticky_topbar.data("stickyoffset");
            n.S(t).hasClass("expanded") || (i.scrollTop() > s ? n.S(t).hasClass("fixed") || (n.S(t).addClass("fixed"), n.S("body").addClass("f-topbar-fixed")) : i.scrollTop() <= s && n.S(t).hasClass("fixed") && (n.S(t).removeClass("fixed"), n.S("body").removeClass("f-topbar-fixed")))
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
        var i = !1, n = e.find("[" + this.attr_name() + "-watch]"), s = n.first().offset().top, a = e.data(this.attr_name(!0) + "-init");
        if (0 !== n.length && (a.before_height_change(), e.trigger("before-height-change"), n.height("inherit"), n.each(function () {
            var e = t(this);
            e.offset().top !== s && (i = !0)
        }), !i)) {
            var o = n.map(function () {
                return t(this).outerHeight()
            });
            if (a.use_tallest) {
                var r = Math.max.apply(null, o);
                n.height(r)
            } else {
                var l = Math.min.apply(null, o);
                n.height(l)
            }
            a.after_height_change(), e.trigger("after-height-change")
        }
    }, reflow: function () {
        var e = this;
        this.S("[" + this.attr_name() + "]", this.scope).each(function () {
            e.equalize(t(this))
        })
    }}
}(jQuery, this, this.document), function () {
}.call(this), function (t, e, i, n) {
    var s = i("html"), a = i(t), o = i(e), r = i.fancybox = function () {
        r.open.apply(this, arguments)
    }, l = navigator.userAgent.match(/msie/i), c = null, d = e.createTouch !== n, u = function (t) {
        return t && t.hasOwnProperty && t instanceof i
    }, h = function (t) {
        return t && "string" === i.type(t)
    }, p = function (t) {
        return h(t) && 0 < t.indexOf("%")
    }, f = function (t, e) {
        var i = parseInt(t, 10) || 0;
        return e && p(t) && (i *= r.getViewport()[e] / 100), Math.ceil(i)
    }, m = function (t, e) {
        return f(t, e) + "px"
    };
    i.extend(r, {version: "2.1.5", defaults: {padding: 15, margin: 20, width: 800, height: 600, minWidth: 100, minHeight: 100, maxWidth: 9999, maxHeight: 9999, pixelRatio: 1, autoSize: !0, autoHeight: !1, autoWidth: !1, autoResize: !0, autoCenter: !d, fitToView: !0, aspectRatio: !1, topRatio: .5, leftRatio: .5, scrolling: "auto", wrapCSS: "", arrows: !0, closeBtn: !0, closeClick: !1, nextClick: !1, mouseWheel: !0, autoPlay: !1, playSpeed: 3e3, preload: 3, modal: !1, loop: !0, ajax: {dataType: "html", headers: {"X-fancyBox": !0}}, iframe: {scrolling: "auto", preload: !0}, swf: {wmode: "transparent", allowfullscreen: "true", allowscriptaccess: "always"}, keys: {next: {13: "left", 34: "up", 39: "left", 40: "up"}, prev: {8: "right", 33: "down", 37: "right", 38: "down"}, close: [27], play: [32], toggle: [70]}, direction: {next: "left", prev: "right"}, scrollOutside: !0, index: 0, type: null, href: null, content: null, title: null, tpl: {wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>', image: '<img class="fancybox-image" src="{href}" alt="" />', iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (l ? ' allowtransparency="true"' : "") + "></iframe>", error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>', closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>', next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>', prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'}, openEffect: "fade", openSpeed: 250, openEasing: "swing", openOpacity: !0, openMethod: "zoomIn", closeEffect: "fade", closeSpeed: 250, closeEasing: "swing", closeOpacity: !0, closeMethod: "zoomOut", nextEffect: "elastic", nextSpeed: 250, nextEasing: "swing", nextMethod: "changeIn", prevEffect: "elastic", prevSpeed: 250, prevEasing: "swing", prevMethod: "changeOut", helpers: {overlay: !0, title: !0}, onCancel: i.noop, beforeLoad: i.noop, afterLoad: i.noop, beforeShow: i.noop, afterShow: i.noop, beforeChange: i.noop, beforeClose: i.noop, afterClose: i.noop}, group: {}, opts: {}, previous: null, coming: null, current: null, isActive: !1, isOpen: !1, isOpened: !1, wrap: null, skin: null, outer: null, inner: null, player: {timer: null, isActive: !1}, ajaxLoad: null, imgPreload: null, transitions: {}, helpers: {}, open: function (t, e) {
        return t && (i.isPlainObject(e) || (e = {}), !1 !== r.close(!0)) ? (i.isArray(t) || (t = u(t) ? i(t).get() : [t]), i.each(t, function (s, a) {
            var o, l, c, d, p, f = {};
            "object" === i.type(a) && (a.nodeType && (a = i(a)), u(a) ? (f = {href: a.data("fancybox-href") || a.attr("href"), title: a.data("fancybox-title") || a.attr("title"), isDom: !0, element: a}, i.metadata && i.extend(!0, f, a.metadata())) : f = a), o = e.href || f.href || (h(a) ? a : null), l = e.title !== n ? e.title : f.title || "", d = (c = e.content || f.content) ? "html" : e.type || f.type, !d && f.isDom && (d = a.data("fancybox-type"), d || (d = (d = a.prop("class").match(/fancybox\.(\w+)/)) ? d[1] : null)), h(o) && (d || (r.isImage(o) ? d = "image" : r.isSWF(o) ? d = "swf" : "#" === o.charAt(0) ? d = "inline" : h(a) && (d = "html", c = a)), "ajax" === d && (p = o.split(/\s+/, 2), o = p.shift(), p = p.shift())), c || ("inline" === d ? o ? c = i(h(o) ? o.replace(/.*(?=#[^\s]+$)/, "") : o) : f.isDom && (c = a) : "html" === d ? c = o : !d && !o && f.isDom && (d = "inline", c = a)), i.extend(f, {href: o, type: d, content: c, title: l, selector: p}), t[s] = f
        }), r.opts = i.extend(!0, {}, r.defaults, e), e.keys !== n && (r.opts.keys = e.keys ? i.extend({}, r.defaults.keys, e.keys) : !1), r.group = t, r._start(r.opts.index)) : void 0
    }, cancel: function () {
        var t = r.coming;
        t && !1 !== r.trigger("onCancel") && (r.hideLoading(), r.ajaxLoad && r.ajaxLoad.abort(), r.ajaxLoad = null, r.imgPreload && (r.imgPreload.onload = r.imgPreload.onerror = null), t.wrap && t.wrap.stop(!0, !0).trigger("onReset").remove(), r.coming = null, r.current || r._afterZoomOut(t))
    }, close: function (t) {
        r.cancel(), !1 !== r.trigger("beforeClose") && (r.unbindEvents(), r.isActive && (r.isOpen && !0 !== t ? (r.isOpen = r.isOpened = !1, r.isClosing = !0, i(".fancybox-item, .fancybox-nav").remove(), r.wrap.stop(!0, !0).removeClass("fancybox-opened"), r.transitions[r.current.closeMethod]()) : (i(".fancybox-wrap").stop(!0).trigger("onReset").remove(), r._afterZoomOut())))
    }, play: function (t) {
        var e = function () {
            clearTimeout(r.player.timer)
        }, i = function () {
            e(), r.current && r.player.isActive && (r.player.timer = setTimeout(r.next, r.current.playSpeed))
        }, n = function () {
            e(), o.unbind(".player"), r.player.isActive = !1, r.trigger("onPlayEnd")
        };
        !0 === t || !r.player.isActive && !1 !== t ? r.current && (r.current.loop || r.current.index < r.group.length - 1) && (r.player.isActive = !0, o.bind({"onCancel.player beforeClose.player": n, "onUpdate.player": i, "beforeLoad.player": e}), i(), r.trigger("onPlayStart")) : n()
    }, next: function (t) {
        var e = r.current;
        e && (h(t) || (t = e.direction.next), r.jumpto(e.index + 1, t, "next"))
    }, prev: function (t) {
        var e = r.current;
        e && (h(t) || (t = e.direction.prev), r.jumpto(e.index - 1, t, "prev"))
    }, jumpto: function (t, e, i) {
        var s = r.current;
        s && (t = f(t), r.direction = e || s.direction[t >= s.index ? "next" : "prev"], r.router = i || "jumpto", s.loop && (0 > t && (t = s.group.length + t % s.group.length), t %= s.group.length), s.group[t] !== n && (r.cancel(), r._start(t)))
    }, reposition: function (t, e) {
        var n, s = r.current, a = s ? s.wrap : null;
        a && (n = r._getPosition(e), t && "scroll" === t.type ? (delete n.position, a.stop(!0, !0).animate(n, 200)) : (a.css(n), s.pos = i.extend({}, s.dim, n)))
    }, update: function (t) {
        var e = t && t.type, i = !e || "orientationchange" === e;
        i && (clearTimeout(c), c = null), r.isOpen && !c && (c = setTimeout(function () {
            var n = r.current;
            n && !r.isClosing && (r.wrap.removeClass("fancybox-tmp"), (i || "load" === e || "resize" === e && n.autoResize) && r._setDimension(), "scroll" === e && n.canShrink || r.reposition(t), r.trigger("onUpdate"), c = null)
        }, i && !d ? 0 : 300))
    }, toggle: function (t) {
        r.isOpen && (r.current.fitToView = "boolean" === i.type(t) ? t : !r.current.fitToView, d && (r.wrap.removeAttr("style").addClass("fancybox-tmp"), r.trigger("onUpdate")), r.update())
    }, hideLoading: function () {
        o.unbind(".loading"), i("#fancybox-loading").remove()
    }, showLoading: function () {
        var t, e;
        r.hideLoading(), t = i('<div id="fancybox-loading"><div></div></div>').click(r.cancel).appendTo("body"), o.bind("keydown.loading", function (t) {
            27 === (t.which || t.keyCode) && (t.preventDefault(), r.cancel())
        }), r.defaults.fixed || (e = r.getViewport(), t.css({position: "absolute", top: .5 * e.h + e.y, left: .5 * e.w + e.x}))
    }, getViewport: function () {
        var e = r.current && r.current.locked || !1, i = {x: a.scrollLeft(), y: a.scrollTop()};
        return e ? (i.w = e[0].clientWidth, i.h = e[0].clientHeight) : (i.w = d && t.innerWidth ? t.innerWidth : a.width(), i.h = d && t.innerHeight ? t.innerHeight : a.height()), i
    }, unbindEvents: function () {
        r.wrap && u(r.wrap) && r.wrap.unbind(".fb"), o.unbind(".fb"), a.unbind(".fb")
    }, bindEvents: function () {
        var t, e = r.current;
        e && (a.bind("orientationchange.fb" + (d ? "" : " resize.fb") + (e.autoCenter && !e.locked ? " scroll.fb" : ""), r.update), (t = e.keys) && o.bind("keydown.fb", function (s) {
            var a = s.which || s.keyCode, o = s.target || s.srcElement;
            return 27 === a && r.coming ? !1 : (!(s.ctrlKey || s.altKey || s.shiftKey || s.metaKey || o && (o.type || i(o).is("[contenteditable]")) || !i.each(t, function (t, o) {
                return 1 < e.group.length && o[a] !== n ? (r[t](o[a]), s.preventDefault(), !1) : -1 < i.inArray(a, o) ? (r[t](), s.preventDefault(), !1) : void 0
            })), void 0)
        }), i.fn.mousewheel && e.mouseWheel && r.wrap.bind("mousewheel.fb", function (t, n, s, a) {
            for (var o = i(t.target || null), l = !1; o.length && !l && !o.is(".fancybox-skin") && !o.is(".fancybox-wrap");)l = o[0] && !(o[0].style.overflow && "hidden" === o[0].style.overflow) && (o[0].clientWidth && o[0].scrollWidth > o[0].clientWidth || o[0].clientHeight && o[0].scrollHeight > o[0].clientHeight), o = i(o).parent();
            0 !== n && !l && 1 < r.group.length && !e.canShrink && (a > 0 || s > 0 ? r.prev(a > 0 ? "down" : "left") : (0 > a || 0 > s) && r.next(0 > a ? "up" : "right"), t.preventDefault())
        }))
    }, trigger: function (t, e) {
        var n, s = e || r.coming || r.current;
        if (s) {
            if (i.isFunction(s[t]) && (n = s[t].apply(s, Array.prototype.slice.call(arguments, 1))), !1 === n)return!1;
            s.helpers && i.each(s.helpers, function (e, n) {
                n && r.helpers[e] && i.isFunction(r.helpers[e][t]) && r.helpers[e][t](i.extend(!0, {}, r.helpers[e].defaults, n), s)
            }), o.trigger(t)
        }
    }, isImage: function (t) {
        return h(t) && t.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
    }, isSWF: function (t) {
        return h(t) && t.match(/\.(swf)((\?|#).*)?$/i)
    }, _start: function (t) {
        var e, n, s = {};
        if (t = f(t), e = r.group[t] || null, !e)return!1;
        if (s = i.extend(!0, {}, r.opts, e), e = s.margin, n = s.padding, "number" === i.type(e) && (s.margin = [e, e, e, e]), "number" === i.type(n) && (s.padding = [n, n, n, n]), s.modal && i.extend(!0, s, {closeBtn: !1, closeClick: !1, nextClick: !1, arrows: !1, mouseWheel: !1, keys: null, helpers: {overlay: {closeClick: !1}}}), s.autoSize && (s.autoWidth = s.autoHeight = !0), "auto" === s.width && (s.autoWidth = !0), "auto" === s.height && (s.autoHeight = !0), s.group = r.group, s.index = t, r.coming = s, !1 === r.trigger("beforeLoad"))r.coming = null; else {
            if (n = s.type, e = s.href, !n)return r.coming = null, r.current && r.router && "jumpto" !== r.router ? (r.current.index = t, r[r.router](r.direction)) : !1;
            if (r.isActive = !0, ("image" === n || "swf" === n) && (s.autoHeight = s.autoWidth = !1, s.scrolling = "visible"), "image" === n && (s.aspectRatio = !0), "iframe" === n && d && (s.scrolling = "scroll"), s.wrap = i(s.tpl.wrap).addClass("fancybox-" + (d ? "mobile" : "desktop") + " fancybox-type-" + n + " fancybox-tmp " + s.wrapCSS).appendTo(s.parent || "body"), i.extend(s, {skin: i(".fancybox-skin", s.wrap), outer: i(".fancybox-outer", s.wrap), inner: i(".fancybox-inner", s.wrap)}), i.each(["Top", "Right", "Bottom", "Left"], function (t, e) {
                s.skin.css("padding" + e, m(s.padding[t]))
            }), r.trigger("onReady"), "inline" === n || "html" === n) {
                if (!s.content || !s.content.length)return r._error("content")
            } else if (!e)return r._error("href");
            "image" === n ? r._loadImage() : "ajax" === n ? r._loadAjax() : "iframe" === n ? r._loadIframe() : r._afterLoad()
        }
    }, _error: function (t) {
        i.extend(r.coming, {type: "html", autoWidth: !0, autoHeight: !0, minWidth: 0, minHeight: 0, scrolling: "no", hasError: t, content: r.coming.tpl.error}), r._afterLoad()
    }, _loadImage: function () {
        var t = r.imgPreload = new Image;
        t.onload = function () {
            this.onload = this.onerror = null, r.coming.width = this.width / r.opts.pixelRatio, r.coming.height = this.height / r.opts.pixelRatio, r._afterLoad()
        }, t.onerror = function () {
            this.onload = this.onerror = null, r._error("image")
        }, t.src = r.coming.href, !0 !== t.complete && r.showLoading()
    }, _loadAjax: function () {
        var t = r.coming;
        r.showLoading(), r.ajaxLoad = i.ajax(i.extend({}, t.ajax, {url: t.href, error: function (t, e) {
            r.coming && "abort" !== e ? r._error("ajax", t) : r.hideLoading()
        }, success: function (e, i) {
            "success" === i && (t.content = e, r._afterLoad())
        }}))
    }, _loadIframe: function () {
        var t = r.coming, e = i(t.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", d ? "auto" : t.iframe.scrolling).attr("src", t.href);
        i(t.wrap).bind("onReset", function () {
            try {
                i(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
            } catch (t) {
            }
        }), t.iframe.preload && (r.showLoading(), e.one("load", function () {
            i(this).data("ready", 1), d || i(this).bind("load.fb", r.update), i(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), r._afterLoad()
        })), t.content = e.appendTo(t.inner), t.iframe.preload || r._afterLoad()
    }, _preloadImages: function () {
        var t, e, i = r.group, n = r.current, s = i.length, a = n.preload ? Math.min(n.preload, s - 1) : 0;
        for (e = 1; a >= e; e += 1)t = i[(n.index + e) % s], "image" === t.type && t.href && ((new Image).src = t.href)
    }, _afterLoad: function () {
        var t, e, n, s, a, o = r.coming, l = r.current;
        if (r.hideLoading(), o && !1 !== r.isActive)if (!1 === r.trigger("afterLoad", o, l))o.wrap.stop(!0).trigger("onReset").remove(), r.coming = null; else {
            switch (l && (r.trigger("beforeChange", l), l.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), r.unbindEvents(), t = o.content, e = o.type, n = o.scrolling, i.extend(r, {wrap: o.wrap, skin: o.skin, outer: o.outer, inner: o.inner, current: o, previous: l}), s = o.href, e) {
                case"inline":
                case"ajax":
                case"html":
                    o.selector ? t = i("<div>").html(t).find(o.selector) : u(t) && (t.data("fancybox-placeholder") || t.data("fancybox-placeholder", i('<div class="fancybox-placeholder"></div>').insertAfter(t).hide()), t = t.show().detach(), o.wrap.bind("onReset", function () {
                        i(this).find(t).length && t.hide().replaceAll(t.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
                    }));
                    break;
                case"image":
                    t = o.tpl.image.replace("{href}", s);
                    break;
                case"swf":
                    t = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + s + '"></param>', a = "", i.each(o.swf, function (e, i) {
                        t += '<param name="' + e + '" value="' + i + '"></param>', a += " " + e + '="' + i + '"'
                    }), t += '<embed src="' + s + '" type="application/x-shockwave-flash" width="100%" height="100%"' + a + "></embed></object>"
            }
            (!u(t) || !t.parent().is(o.inner)) && o.inner.append(t), r.trigger("beforeShow"), o.inner.css("overflow", "yes" === n ? "scroll" : "no" === n ? "hidden" : n), r._setDimension(), r.reposition(), r.isOpen = !1, r.coming = null, r.bindEvents(), r.isOpened ? l.prevMethod && r.transitions[l.prevMethod]() : i(".fancybox-wrap").not(o.wrap).stop(!0).trigger("onReset").remove(), r.transitions[r.isOpened ? o.nextMethod : o.openMethod](), r._preloadImages()
        }
    }, _setDimension: function () {
        var t, e, n, s, a, o, l, c, d, u = r.getViewport(), h = 0, g = !1, v = !1, g = r.wrap, y = r.skin, b = r.inner, _ = r.current, v = _.width, x = _.height, w = _.minWidth, k = _.minHeight, C = _.maxWidth, j = _.maxHeight, S = _.scrolling, T = _.scrollOutside ? _.scrollbarWidth : 0, E = _.margin, P = f(E[1] + E[3]), F = f(E[0] + E[2]);
        if (g.add(y).add(b).width("auto").height("auto").removeClass("fancybox-tmp"), E = f(y.outerWidth(!0) - y.width()), t = f(y.outerHeight(!0) - y.height()), e = P + E, n = F + t, s = p(v) ? (u.w - e) * f(v) / 100 : v, a = p(x) ? (u.h - n) * f(x) / 100 : x, "iframe" === _.type) {
            if (d = _.content, _.autoHeight && 1 === d.data("ready"))try {
                d[0].contentWindow.document.location && (b.width(s).height(9999), o = d.contents().find("body"), T && o.css("overflow-x", "hidden"), a = o.outerHeight(!0))
            } catch (A) {
            }
        } else(_.autoWidth || _.autoHeight) && (b.addClass("fancybox-tmp"), _.autoWidth || b.width(s), _.autoHeight || b.height(a), _.autoWidth && (s = b.width()), _.autoHeight && (a = b.height()), b.removeClass("fancybox-tmp"));
        if (v = f(s), x = f(a), c = s / a, w = f(p(w) ? f(w, "w") - e : w), C = f(p(C) ? f(C, "w") - e : C), k = f(p(k) ? f(k, "h") - n : k), j = f(p(j) ? f(j, "h") - n : j), o = C, l = j, _.fitToView && (C = Math.min(u.w - e, C), j = Math.min(u.h - n, j)), e = u.w - P, F = u.h - F, _.aspectRatio ? (v > C && (v = C, x = f(v / c)), x > j && (x = j, v = f(x * c)), w > v && (v = w, x = f(v / c)), k > x && (x = k, v = f(x * c))) : (v = Math.max(w, Math.min(v, C)), _.autoHeight && "iframe" !== _.type && (b.width(v), x = b.height()), x = Math.max(k, Math.min(x, j))), _.fitToView)if (b.width(v).height(x), g.width(v + E), u = g.width(), P = g.height(), _.aspectRatio)for (; (u > e || P > F) && v > w && x > k && !(19 < h++);)x = Math.max(k, Math.min(j, x - 10)), v = f(x * c), w > v && (v = w, x = f(v / c)), v > C && (v = C, x = f(v / c)), b.width(v).height(x), g.width(v + E), u = g.width(), P = g.height(); else v = Math.max(w, Math.min(v, v - (u - e))), x = Math.max(k, Math.min(x, x - (P - F)));
        T && "auto" === S && a > x && e > v + E + T && (v += T), b.width(v).height(x), g.width(v + E), u = g.width(), P = g.height(), g = (u > e || P > F) && v > w && x > k, v = _.aspectRatio ? o > v && l > x && s > v && a > x : (o > v || l > x) && (s > v || a > x), i.extend(_, {dim: {width: m(u), height: m(P)}, origWidth: s, origHeight: a, canShrink: g, canExpand: v, wPadding: E, hPadding: t, wrapSpace: P - y.outerHeight(!0), skinSpace: y.height() - x}), !d && _.autoHeight && x > k && j > x && !v && b.height("auto")
    }, _getPosition: function (t) {
        var e = r.current, i = r.getViewport(), n = e.margin, s = r.wrap.width() + n[1] + n[3], a = r.wrap.height() + n[0] + n[2], n = {position: "absolute", top: n[0], left: n[3]};
        return e.autoCenter && e.fixed && !t && a <= i.h && s <= i.w ? n.position = "fixed" : e.locked || (n.top += i.y, n.left += i.x), n.top = m(Math.max(n.top, n.top + (i.h - a) * e.topRatio)), n.left = m(Math.max(n.left, n.left + (i.w - s) * e.leftRatio)), n
    }, _afterZoomIn: function () {
        var t = r.current;
        t && (r.isOpen = r.isOpened = !0, r.wrap.css("overflow", "visible").addClass("fancybox-opened"), r.update(), (t.closeClick || t.nextClick && 1 < r.group.length) && r.inner.css("cursor", "pointer").bind("click.fb", function (e) {
            !i(e.target).is("a") && !i(e.target).parent().is("a") && (e.preventDefault(), r[t.closeClick ? "close" : "next"]())
        }), t.closeBtn && i(t.tpl.closeBtn).appendTo(r.skin).bind("click.fb", function (t) {
            t.preventDefault(), r.close()
        }), t.arrows && 1 < r.group.length && ((t.loop || 0 < t.index) && i(t.tpl.prev).appendTo(r.outer).bind("click.fb", r.prev), (t.loop || t.index < r.group.length - 1) && i(t.tpl.next).appendTo(r.outer).bind("click.fb", r.next)), r.trigger("afterShow"), t.loop || t.index !== t.group.length - 1 ? r.opts.autoPlay && !r.player.isActive && (r.opts.autoPlay = !1, r.play()) : r.play(!1))
    }, _afterZoomOut: function (t) {
        t = t || r.current, i(".fancybox-wrap").trigger("onReset").remove(), i.extend(r, {group: {}, opts: {}, router: !1, current: null, isActive: !1, isOpened: !1, isOpen: !1, isClosing: !1, wrap: null, skin: null, outer: null, inner: null}), r.trigger("afterClose", t)
    }}), r.transitions = {getOrigPosition: function () {
        var t = r.current, e = t.element, i = t.orig, n = {}, s = 50, a = 50, o = t.hPadding, l = t.wPadding, c = r.getViewport();
        return!i && t.isDom && e.is(":visible") && (i = e.find("img:first"), i.length || (i = e)), u(i) ? (n = i.offset(), i.is("img") && (s = i.outerWidth(), a = i.outerHeight())) : (n.top = c.y + (c.h - a) * t.topRatio, n.left = c.x + (c.w - s) * t.leftRatio), ("fixed" === r.wrap.css("position") || t.locked) && (n.top -= c.y, n.left -= c.x), n = {top: m(n.top - o * t.topRatio), left: m(n.left - l * t.leftRatio), width: m(s + l), height: m(a + o)}
    }, step: function (t, e) {
        var i, n, s = e.prop;
        n = r.current;
        var a = n.wrapSpace, o = n.skinSpace;
        ("width" === s || "height" === s) && (i = e.end === e.start ? 1 : (t - e.start) / (e.end - e.start), r.isClosing && (i = 1 - i), n = "width" === s ? n.wPadding : n.hPadding, n = t - n, r.skin[s](f("width" === s ? n : n - a * i)), r.inner[s](f("width" === s ? n : n - a * i - o * i)))
    }, zoomIn: function () {
        var t = r.current, e = t.pos, n = t.openEffect, s = "elastic" === n, a = i.extend({opacity: 1}, e);
        delete a.position, s ? (e = this.getOrigPosition(), t.openOpacity && (e.opacity = .1)) : "fade" === n && (e.opacity = .1), r.wrap.css(e).animate(a, {duration: "none" === n ? 0 : t.openSpeed, easing: t.openEasing, step: s ? this.step : null, complete: r._afterZoomIn})
    }, zoomOut: function () {
        var t = r.current, e = t.closeEffect, i = "elastic" === e, n = {opacity: .1};
        i && (n = this.getOrigPosition(), t.closeOpacity && (n.opacity = .1)), r.wrap.animate(n, {duration: "none" === e ? 0 : t.closeSpeed, easing: t.closeEasing, step: i ? this.step : null, complete: r._afterZoomOut})
    }, changeIn: function () {
        var t, e = r.current, i = e.nextEffect, n = e.pos, s = {opacity: 1}, a = r.direction;
        n.opacity = .1, "elastic" === i && (t = "down" === a || "up" === a ? "top" : "left", "down" === a || "right" === a ? (n[t] = m(f(n[t]) - 200), s[t] = "+=200px") : (n[t] = m(f(n[t]) + 200), s[t] = "-=200px")), "none" === i ? r._afterZoomIn() : r.wrap.css(n).animate(s, {duration: e.nextSpeed, easing: e.nextEasing, complete: r._afterZoomIn})
    }, changeOut: function () {
        var t = r.previous, e = t.prevEffect, n = {opacity: .1}, s = r.direction;
        "elastic" === e && (n["down" === s || "up" === s ? "top" : "left"] = ("up" === s || "left" === s ? "-" : "+") + "=200px"), t.wrap.animate(n, {duration: "none" === e ? 0 : t.prevSpeed, easing: t.prevEasing, complete: function () {
            i(this).trigger("onReset").remove()
        }})
    }}, r.helpers.overlay = {defaults: {closeClick: !0, speedOut: 200, showEarly: !0, css: {}, locked: !d, fixed: !0}, overlay: null, fixed: !1, el: i("html"), create: function (t) {
        t = i.extend({}, this.defaults, t), this.overlay && this.close(), this.overlay = i('<div class="fancybox-overlay"></div>').appendTo(r.coming ? r.coming.parent : t.parent), this.fixed = !1, t.fixed && r.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
    }, open: function (t) {
        var e = this;
        t = i.extend({}, this.defaults, t), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(t), this.fixed || (a.bind("resize.overlay", i.proxy(this.update, this)), this.update()), t.closeClick && this.overlay.bind("click.overlay", function (t) {
            return i(t.target).hasClass("fancybox-overlay") ? (r.isActive ? r.close() : e.close(), !1) : void 0
        }), this.overlay.css(t.css).show()
    }, close: function () {
        var t, e;
        a.unbind("resize.overlay"), this.el.hasClass("fancybox-lock") && (i(".fancybox-margin").removeClass("fancybox-margin"), t = a.scrollTop(), e = a.scrollLeft(), this.el.removeClass("fancybox-lock"), a.scrollTop(t).scrollLeft(e)), i(".fancybox-overlay").remove().hide(), i.extend(this, {overlay: null, fixed: !1})
    }, update: function () {
        var t, i = "100%";
        this.overlay.width(i).height("100%"), l ? (t = Math.max(e.documentElement.offsetWidth, e.body.offsetWidth), o.width() > t && (i = o.width())) : o.width() > a.width() && (i = o.width()), this.overlay.width(i).height(o.height())
    }, onReady: function (t, e) {
        var n = this.overlay;
        i(".fancybox-overlay").stop(!0, !0), n || this.create(t), t.locked && this.fixed && e.fixed && (n || (this.margin = o.height() > a.height() ? i("html").css("margin-right").replace("px", "") : !1), e.locked = this.overlay.append(e.wrap), e.fixed = !1), !0 === t.showEarly && this.beforeShow.apply(this, arguments)
    }, beforeShow: function (t, e) {
        var n, s;
        e.locked && (!1 !== this.margin && (i("*").filter(function () {
            return"fixed" === i(this).css("position") && !i(this).hasClass("fancybox-overlay") && !i(this).hasClass("fancybox-wrap")
        }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), n = a.scrollTop(), s = a.scrollLeft(), this.el.addClass("fancybox-lock"), a.scrollTop(n).scrollLeft(s)), this.open(t)
    }, onUpdate: function () {
        this.fixed || this.update()
    }, afterClose: function (t) {
        this.overlay && !r.coming && this.overlay.fadeOut(t.speedOut, i.proxy(this.close, this))
    }}, r.helpers.title = {defaults: {type: "float", position: "bottom"}, beforeShow: function (t) {
        var e = r.current, n = e.title, s = t.type;
        if (i.isFunction(n) && (n = n.call(e.element, e)), h(n) && "" !== i.trim(n)) {
            switch (e = i('<div class="fancybox-title fancybox-title-' + s + '-wrap">' + n + "</div>"), s) {
                case"inside":
                    s = r.skin;
                    break;
                case"outside":
                    s = r.wrap;
                    break;
                case"over":
                    s = r.inner;
                    break;
                default:
                    s = r.skin, e.appendTo("body"), l && e.width(e.width()), e.wrapInner('<span class="child"></span>'), r.current.margin[2] += Math.abs(f(e.css("margin-bottom")))
            }
            e["top" === t.position ? "prependTo" : "appendTo"](s)
        }
    }}, i.fn.fancybox = function (t) {
        var e, n = i(this), s = this.selector || "", a = function (a) {
            var o, l, c = i(this).blur(), d = e;
            !(a.ctrlKey || a.altKey || a.shiftKey || a.metaKey || c.is(".fancybox-wrap") || (o = t.groupAttr || "data-fancybox-group", l = c.attr(o), l || (o = "rel", l = c.get(0)[o]), l && "" !== l && "nofollow" !== l && (c = s.length ? i(s) : n, c = c.filter("[" + o + '="' + l + '"]'), d = c.index(this)), t.index = d, !1 === r.open(c, t) || !a.preventDefault()))
        };
        return t = t || {}, e = t.index || 0, s && !1 !== t.live ? o.undelegate(s, "click.fb-start").delegate(s + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", a) : n.unbind("click.fb-start").bind("click.fb-start", a), this.filter("[data-fancybox-start=1]").trigger("click"), this
    }, o.ready(function () {
        var e, a;
        if (i.scrollbarWidth === n && (i.scrollbarWidth = function () {
            var t = i('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"), e = t.children(), e = e.innerWidth() - e.height(99).innerWidth();
            return t.remove(), e
        }), i.support.fixedPosition === n) {
            e = i.support, a = i('<div style="position:fixed;top:20px;"></div>').appendTo("body");
            var o = 20 === a[0].offsetTop || 15 === a[0].offsetTop;
            a.remove(), e.fixedPosition = o
        }
        i.extend(r.defaults, {scrollbarWidth: i.scrollbarWidth(), fixed: i.support.fixedPosition, parent: i("body")}), e = i(t).width(), s.addClass("fancybox-lock-test"), a = i(t).width(), s.removeClass("fancybox-lock-test"), i("<style type='text/css'>.fancybox-margin{margin-right:" + (a - e) + "px;}</style>").appendTo("head")
    })
}(window, document, jQuery), function () {
}.call(this), $(document).foundation(), $(document).ready(function () {
    $(".fancybox").fancybox({afterShow: function () {
        $(".fancybox-title").wrapInner("<div />").show(), $(".fancybox-wrap").hover(function () {
            $(".fancybox-title").show()
        }, function () {
            $(".fancybox-title").hide()
        })
    }, openEffect: "elastic", helpers: {title: {type: "over"}, buttons: {}, thumbs: {width: 50, height: 50}, overlay: {css: {background: "rgba(58, 42, 45, 0.95)"}}}})
}), $(function () {
    $("remove_button").click(function () {
        $(this).addClass("invisible").removeClass("visible")
    })
}), $(document).ready(function () {
    var t = $(".upload-preview img");
    $(".file_field").change(function (e) {
        $("#remove_button").addClass("visible").removeClass("invisible");
        var i = $(e.currentTarget), n = i[0].files[0], s = new FileReader;
        s.onload = function (e) {
            image_base64 = e.target.result, t.attr("src", image_base64)
        }, s.readAsDataURL(n)
    })
}), $(document).ready(function () {
    $("#jquery_jplayer_1").jPlayer({ready: function () {
        $(this).jPlayer("setMedia", {m4a: "https://dl.dropboxusercontent.com/1/view/ztab997cp8gfc70/Public/local/music/3_infected_mushroom_-_i_wish_-_brutal_remix_by_skazi_%28zaycev.net%29.mp3", oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"})
    }, swfPath: "/skin", supplied: "m4a, oga"})
}), window.onload = dynamicBG;