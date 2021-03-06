!function (e, t, n, s) {
    "use strict";
    Foundation.libs.reveal = {name: "reveal", version: "5.1.1", locked: !1, settings: {animation: "fadeAndPop", animation_speed: 250, close_on_background_click: !0, close_on_esc: !0, dismiss_modal_class: "close-reveal-modal", bg_class: "reveal-modal-bg", open: function () {
    }, opened: function () {
    }, close: function () {
    }, closed: function () {
    }, bg: e(".reveal-modal-bg"), css: {open: {opacity: 0, visibility: "visible", display: "block"}, close: {opacity: 1, visibility: "hidden", display: "none"}}}, init: function (t, n, s) {
        e.extend(!0, this.settings, n, s), this.bindings(n, s)
    }, events: function () {
        var e = this, t = e.S;
        return t(this.scope).off(".reveal").on("click.fndtn.reveal", "[" + this.add_namespace("data-reveal-id") + "]", function (n) {
            if (n.preventDefault(), !e.locked) {
                var s = t(this), i = s.data(e.data_attr("reveal-ajax"));
                if (e.locked = !0, "undefined" == typeof i)e.open.call(e, s); else {
                    var a = i === !0 ? s.attr("href") : i;
                    e.open.call(e, s, {url: a})
                }
            }
        }), t(n).on("click.fndtn.reveal", this.close_targets(), function (n) {
            if (n.preventDefault(), !e.locked) {
                var s = t("[" + e.attr_name() + "].open").data(e.attr_name(!0) + "-init"), i = t(n.target)[0] === t("." + s.bg_class)[0];
                if (i && !s.close_on_background_click)return;
                e.locked = !0, e.close.call(e, i ? t("[" + e.attr_name() + "].open") : t(this).closest("[" + e.attr_name() + "]"))
            }
        }), t("[" + e.attr_name() + "]", this.scope).length > 0 ? t(this.scope).on("open.fndtn.reveal", this.settings.open).on("opened.fndtn.reveal", this.settings.opened).on("opened.fndtn.reveal", this.open_video).on("close.fndtn.reveal", this.settings.close).on("closed.fndtn.reveal", this.settings.closed).on("closed.fndtn.reveal", this.close_video) : t(this.scope).on("open.fndtn.reveal", "[" + e.attr_name() + "]", this.settings.open).on("opened.fndtn.reveal", "[" + e.attr_name() + "]", this.settings.opened).on("opened.fndtn.reveal", "[" + e.attr_name() + "]", this.open_video).on("close.fndtn.reveal", "[" + e.attr_name() + "]", this.settings.close).on("closed.fndtn.reveal", "[" + e.attr_name() + "]", this.settings.closed).on("closed.fndtn.reveal", "[" + e.attr_name() + "]", this.close_video), !0
    }, key_up_on: function () {
        var e = this;
        return e.S("body").off("keyup.fndtn.reveal").on("keyup.fndtn.reveal", function (t) {
            var n = e.S("[" + e.attr_name() + "].open"), s = n.data(e.attr_name(!0) + "-init");
            s && 27 === t.which && s.close_on_esc && !e.locked && e.close.call(e, n)
        }), !0
    }, key_up_off: function () {
        return this.S("body").off("keyup.fndtn.reveal"), !0
    }, open: function (t, n) {
        var s = this;
        if (t)if ("undefined" != typeof t.selector)var i = s.S("#" + t.data(s.data_attr("reveal-id"))); else {
            var i = s.S(this.scope);
            n = t
        } else var i = s.S(this.scope);
        var a = i.data(s.attr_name(!0) + "-init");
        if (!i.hasClass("open")) {
            var o = s.S("[" + s.attr_name() + "].open");
            if ("undefined" == typeof i.data("css-top") && i.data("css-top", parseInt(i.css("top"), 10)).data("offset", this.cache_offset(i)), this.key_up_on(i), i.trigger("open"), o.length < 1 && this.toggle_bg(i), "string" == typeof n && (n = {url: n}), "undefined" != typeof n && n.url) {
                var r = "undefined" != typeof n.success ? n.success : null;
                e.extend(n, {success: function (t, n, d) {
                    if (e.isFunction(r) && r(t, n, d), i.html(t), s.S(i).foundation("section", "reflow"), o.length > 0) {
                        var c = o.data(s.attr_name(!0));
                        s.hide(o, c.css.close)
                    }
                    s.show(i, a.css.open)
                }}), e.ajax(n)
            } else {
                if (o.length > 0) {
                    var d = o.data(s.attr_name(!0) + "-init");
                    this.hide(o, d.css.close)
                }
                this.show(i, a.css.open)
            }
        }
    }, close: function (e) {
        var e = e && e.length ? e : this.S(this.scope), t = this.S("[" + this.attr_name() + "].open"), n = e.data(this.attr_name(!0) + "-init");
        t.length > 0 && (this.locked = !0, this.key_up_off(e), e.trigger("close"), this.toggle_bg(e), this.hide(t, n.css.close, n))
    }, close_targets: function () {
        var e = "." + this.settings.dismiss_modal_class;
        return this.settings.close_on_background_click ? e + ", ." + this.settings.bg_class : e
    }, toggle_bg: function (t) {
        t.data(this.attr_name(!0));
        0 === this.S("." + this.settings.bg_class).length && (this.settings.bg = e("<div />", {"class": this.settings.bg_class}).appendTo("body")), this.settings.bg.filter(":visible").length > 0 ? this.hide(this.settings.bg) : this.show(this.settings.bg)
    }, show: function (n, s) {
        if (s) {
            var i = n.data(this.attr_name(!0) + "-init");
            if (0 === n.parent("body").length) {
                var a = n.wrap('<div style="display: none;" />').parent(), o = this.settings.rootElement || "body";
                n.on("closed.fndtn.reveal.wrapped", function () {
                    n.detach().appendTo(a), n.unwrap().unbind("closed.fndtn.reveal.wrapped")
                }), n.detach().appendTo(o)
            }
            if (/pop/i.test(i.animation)) {
                s.top = e(t).scrollTop() - n.data("offset") + "px";
                var r = {top: e(t).scrollTop() + n.data("css-top") + "px", opacity: 1};
                return setTimeout(function () {
                    return n.css(s).animate(r, i.animation_speed, "linear", function () {
                        this.locked = !1, n.trigger("opened")
                    }.bind(this)).addClass("open")
                }.bind(this), i.animation_speed / 2)
            }
            if (/fade/i.test(i.animation)) {
                var r = {opacity: 1};
                return setTimeout(function () {
                    return n.css(s).animate(r, i.animation_speed, "linear", function () {
                        this.locked = !1, n.trigger("opened")
                    }.bind(this)).addClass("open")
                }.bind(this), i.animation_speed / 2)
            }
            return n.css(s).show().css({opacity: 1}).addClass("open").trigger("opened")
        }
        var i = this.settings;
        return/fade/i.test(i.animation) ? n.fadeIn(i.animation_speed / 2) : (this.locked = !1, n.show())
    }, hide: function (n, s) {
        if (s) {
            var i = n.data(this.attr_name(!0) + "-init");
            if (/pop/i.test(i.animation)) {
                var a = {top: -e(t).scrollTop() - n.data("offset") + "px", opacity: 0};
                return setTimeout(function () {
                    return n.animate(a, i.animation_speed, "linear", function () {
                        this.locked = !1, n.css(s).trigger("closed")
                    }.bind(this)).removeClass("open")
                }.bind(this), i.animation_speed / 2)
            }
            if (/fade/i.test(i.animation)) {
                var a = {opacity: 0};
                return setTimeout(function () {
                    return n.animate(a, i.animation_speed, "linear", function () {
                        this.locked = !1, n.css(s).trigger("closed")
                    }.bind(this)).removeClass("open")
                }.bind(this), i.animation_speed / 2)
            }
            return n.hide().css(s).removeClass("open").trigger("closed")
        }
        var i = this.settings;
        return/fade/i.test(i.animation) ? n.fadeOut(i.animation_speed / 2) : n.hide()
    }, close_video: function (t) {
        var n = e(".flex-video", t.target), s = e("iframe", n);
        s.length > 0 && (s.attr("data-src", s[0].src), s.attr("src", "about:blank"), n.hide())
    }, open_video: function (t) {
        var n = e(".flex-video", t.target), i = n.find("iframe");
        if (i.length > 0) {
            var a = i.attr("data-src");
            if ("string" == typeof a)i[0].src = i.attr("data-src"); else {
                var o = i[0].src;
                i[0].src = s, i[0].src = o
            }
            n.show()
        }
    }, data_attr: function (e) {
        return this.namespace.length > 0 ? this.namespace + "-" + e : e
    }, cache_offset: function (e) {
        var t = e.show().height() + parseInt(e.css("top"), 10);
        return e.hide(), t
    }, off: function () {
        e(this.scope).off(".fndtn.reveal")
    }, reflow: function () {
    }}
}(jQuery, this, this.document);