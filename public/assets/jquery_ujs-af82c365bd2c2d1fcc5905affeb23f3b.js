!function (e, t) {
    e.rails !== t && e.error("jquery-ujs has already been loaded!");
    var a, n = e(document);
    e.rails = a = {linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]", buttonClickSelector: "button[data-remote]", inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]", formSubmitSelector: "form", formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])", disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]", enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled", requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])", fileInputSelector: "input[type=file]", linkDisableSelector: "a[data-disable-with]", CSRFProtection: function (t) {
        var a = e('meta[name="csrf-token"]').attr("content");
        a && t.setRequestHeader("X-CSRF-Token", a)
    }, refreshCSRFTokens: function () {
        var t = e("meta[name=csrf-token]").attr("content"), a = e("meta[name=csrf-param]").attr("content");
        e('form input[name="' + a + '"]').val(t)
    }, fire: function (t, a, n) {
        var r = e.Event(a);
        return t.trigger(r, n), r.result !== !1
    }, confirm: function (e) {
        return confirm(e)
    }, ajax: function (t) {
        return e.ajax(t)
    }, href: function (e) {
        return e.attr("href")
    }, handleRemote: function (n) {
        var r, i, o, l, s, u, d, c;
        if (a.fire(n, "ajax:before")) {
            if (l = n.data("cross-domain"), s = l === t ? null : l, u = n.data("with-credentials") || null, d = n.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, n.is("form")) {
                r = n.attr("method"), i = n.attr("action"), o = n.serializeArray();
                var m = n.data("ujs:submit-button");
                m && (o.push(m), n.data("ujs:submit-button", null))
            } else n.is(a.inputChangeSelector) ? (r = n.data("method"), i = n.data("url"), o = n.serialize(), n.data("params") && (o = o + "&" + n.data("params"))) : n.is(a.buttonClickSelector) ? (r = n.data("method") || "get", i = n.data("url"), o = n.serialize(), n.data("params") && (o = o + "&" + n.data("params"))) : (r = n.data("method"), i = a.href(n), o = n.data("params") || null);
            c = {type: r || "GET", data: o, dataType: d, beforeSend: function (e, r) {
                return r.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + r.accepts.script), a.fire(n, "ajax:beforeSend", [e, r])
            }, success: function (e, t, a) {
                n.trigger("ajax:success", [e, t, a])
            }, complete: function (e, t) {
                n.trigger("ajax:complete", [e, t])
            }, error: function (e, t, a) {
                n.trigger("ajax:error", [e, t, a])
            }, crossDomain: s}, u && (c.xhrFields = {withCredentials: u}), i && (c.url = i);
            var f = a.ajax(c);
            return n.trigger("ajax:send", f), f
        }
        return!1
    }, handleMethod: function (n) {
        var r = a.href(n), i = n.data("method"), o = n.attr("target"), l = e("meta[name=csrf-token]").attr("content"), s = e("meta[name=csrf-param]").attr("content"), u = e('<form method="post" action="' + r + '"></form>'), d = '<input name="_method" value="' + i + '" type="hidden" />';
        s !== t && l !== t && (d += '<input name="' + s + '" value="' + l + '" type="hidden" />'), o && u.attr("target", o), u.hide().append(d).appendTo("body"), u.submit()
    }, disableFormElements: function (t) {
        t.find(a.disableSelector).each(function () {
            var t = e(this), a = t.is("button") ? "html" : "val";
            t.data("ujs:enable-with", t[a]()), t[a](t.data("disable-with")), t.prop("disabled", !0)
        })
    }, enableFormElements: function (t) {
        t.find(a.enableSelector).each(function () {
            var t = e(this), a = t.is("button") ? "html" : "val";
            t.data("ujs:enable-with") && t[a](t.data("ujs:enable-with")), t.prop("disabled", !1)
        })
    }, allowAction: function (e) {
        var t, n = e.data("confirm"), r = !1;
        return n ? (a.fire(e, "confirm") && (r = a.confirm(n), t = a.fire(e, "confirm:complete", [r])), r && t) : !0
    }, blankInputs: function (t, a, n) {
        var r, i, o = e(), l = a || "input,textarea", s = t.find(l);
        return s.each(function () {
            if (r = e(this), i = r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : r.val(), !i == !n) {
                if (r.is("input[type=radio]") && s.filter('input[type=radio]:checked[name="' + r.attr("name") + '"]').length)return!0;
                o = o.add(r)
            }
        }), o.length ? o : !1
    }, nonBlankInputs: function (e, t) {
        return a.blankInputs(e, t, !0)
    }, stopEverything: function (t) {
        return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
    }, disableElement: function (e) {
        e.data("ujs:enable-with", e.html()), e.html(e.data("disable-with")), e.bind("click.railsDisable", function (e) {
            return a.stopEverything(e)
        })
    }, enableElement: function (e) {
        e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable")
    }}, a.fire(n, "rails:attachBindings") && (e.ajaxPrefilter(function (e, t, n) {
        e.crossDomain || a.CSRFProtection(n)
    }), n.delegate(a.linkDisableSelector, "ajax:complete", function () {
        a.enableElement(e(this))
    }), n.delegate(a.linkClickSelector, "click.rails", function (n) {
        var r = e(this), i = r.data("method"), o = r.data("params"), l = n.metaKey || n.ctrlKey;
        if (!a.allowAction(r))return a.stopEverything(n);
        if (!l && r.is(a.linkDisableSelector) && a.disableElement(r), r.data("remote") !== t) {
            if (l && (!i || "GET" === i) && !o)return!0;
            var s = a.handleRemote(r);
            return s === !1 ? a.enableElement(r) : s.error(function () {
                a.enableElement(r)
            }), !1
        }
        return r.data("method") ? (a.handleMethod(r), !1) : void 0
    }), n.delegate(a.buttonClickSelector, "click.rails", function (t) {
        var n = e(this);
        return a.allowAction(n) ? (a.handleRemote(n), !1) : a.stopEverything(t)
    }), n.delegate(a.inputChangeSelector, "change.rails", function (t) {
        var n = e(this);
        return a.allowAction(n) ? (a.handleRemote(n), !1) : a.stopEverything(t)
    }), n.delegate(a.formSubmitSelector, "submit.rails", function (n) {
        var r = e(this), i = r.data("remote") !== t, o = a.blankInputs(r, a.requiredInputSelector), l = a.nonBlankInputs(r, a.fileInputSelector);
        if (!a.allowAction(r))return a.stopEverything(n);
        if (o && r.attr("novalidate") == t && a.fire(r, "ajax:aborted:required", [o]))return a.stopEverything(n);
        if (i) {
            if (l) {
                setTimeout(function () {
                    a.disableFormElements(r)
                }, 13);
                var s = a.fire(r, "ajax:aborted:file", [l]);
                return s || setTimeout(function () {
                    a.enableFormElements(r)
                }, 13), s
            }
            return a.handleRemote(r), !1
        }
        setTimeout(function () {
            a.disableFormElements(r)
        }, 13)
    }), n.delegate(a.formInputClickSelector, "click.rails", function (t) {
        var n = e(this);
        if (!a.allowAction(n))return a.stopEverything(t);
        var r = n.attr("name"), i = r ? {name: r, value: n.val()} : null;
        n.closest("form").data("ujs:submit-button", i)
    }), n.delegate(a.formSubmitSelector, "ajax:beforeSend.rails", function (t) {
        this == t.target && a.disableFormElements(e(this))
    }), n.delegate(a.formSubmitSelector, "ajax:complete.rails", function (t) {
        this == t.target && a.enableFormElements(e(this))
    }), e(function () {
        a.refreshCSRFTokens()
    }))
}(jQuery);