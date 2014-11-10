!function (t, i, e, n) {
    "use strict";
    Foundation.libs.clearing = {name: "clearing", version: "5.2.0", settings: {templates: {viewing: '<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><div class="clearing-touch-label"></div><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a><a href="#" class="clearing-main-next"><span></span></a></div>'}, close_selectors: ".clearing-close", touch_label: "&larr;&nbsp;Swipe to Advance&nbsp;&rarr;", init: !1, locked: !1}, init: function (t, i, e) {
        var n = this;
        Foundation.inherit(this, "throttle image_loaded"), this.bindings(i, e), n.S(this.scope).is("[" + this.attr_name() + "]") ? this.assemble(n.S("li", this.scope)) : n.S("[" + this.attr_name() + "]", this.scope).each(function () {
            n.assemble(n.S("li", this))
        })
    }, events: function (n) {
        var s = this, a = s.S;
        t(".scroll-container").length > 0 && (this.scope = t(".scroll-container")), a(this.scope).off(".clearing").on("click.fndtn.clearing", "ul[" + this.attr_name() + "] li",function (t, i, e) {
            var i = i || a(this), e = e || i, n = i.next("li"), r = i.closest("[" + s.attr_name() + "]").data(s.attr_name(!0) + "-init"), l = a(t.target);
            t.preventDefault(), r || (s.init(), r = i.closest("[" + s.attr_name() + "]").data(s.attr_name(!0) + "-init")), e.hasClass("visible") && i[0] === e[0] && n.length > 0 && s.is_open(i) && (e = n, l = a("img", e)), s.open(l, i, e), s.update_paddles(e)
        }).on("click.fndtn.clearing", ".clearing-main-next",function (t) {
            s.nav(t, "next")
        }).on("click.fndtn.clearing", ".clearing-main-prev",function (t) {
            s.nav(t, "prev")
        }).on("click.fndtn.clearing", this.settings.close_selectors, function (t) {
            Foundation.libs.clearing.close(t, this)
        }), t(e).on("keydown.fndtn.clearing", function (t) {
            s.keydown(t)
        }), a(i).off(".clearing").on("resize.fndtn.clearing", function () {
            s.resize()
        }), this.swipe_events(n)
    }, swipe_events: function () {
        var t = this, i = t.S;
        i(this.scope).on("touchstart.fndtn.clearing", ".visible-img",function (t) {
            t.touches || (t = t.originalEvent);
            var e = {start_page_x: t.touches[0].pageX, start_page_y: t.touches[0].pageY, start_time: (new Date).getTime(), delta_x: 0, is_scrolling: n};
            i(this).data("swipe-transition", e), t.stopPropagation()
        }).on("touchmove.fndtn.clearing", ".visible-img",function (e) {
            if (e.touches || (e = e.originalEvent), !(e.touches.length > 1 || e.scale && 1 !== e.scale)) {
                var n = i(this).data("swipe-transition");
                if ("undefined" == typeof n && (n = {}), n.delta_x = e.touches[0].pageX - n.start_page_x, "undefined" == typeof n.is_scrolling && (n.is_scrolling = !!(n.is_scrolling || Math.abs(n.delta_x) < Math.abs(e.touches[0].pageY - n.start_page_y))), !n.is_scrolling && !n.active) {
                    e.preventDefault();
                    var s = n.delta_x < 0 ? "next" : "prev";
                    n.active = !0, t.nav(e, s)
                }
            }
        }).on("touchend.fndtn.clearing", ".visible-img", function (t) {
            i(this).data("swipe-transition", {}), t.stopPropagation()
        })
    }, assemble: function (i) {
        var e = i.parent();
        if (!e.parent().hasClass("carousel")) {
            e.after('<div id="foundationClearingHolder"></div>');
            var n = this.S("#foundationClearingHolder"), s = e.data(this.attr_name(!0) + "-init"), a = e.detach(), r = {grid: '<div class="carousel">' + a[0].outerHTML + "</div>", viewing: s.templates.viewing}, l = '<div class="clearing-assembled"><div>' + r.viewing + r.grid + "</div></div>", o = this.settings.touch_label;
            Modernizr.touch && (l = t(l).find(".clearing-touch-label").html(o).end()), n.after(l).remove()
        }
    }, open: function (i, n, s) {
        function a() {
            setTimeout(function () {
                this.image_loaded(d, function () {
                    1 !== d.outerWidth() || f ? r.call(this, d) : a.call(this)
                }.bind(this))
            }.bind(this), 50)
        }

        function r(i) {
            var e = t(i);
            i.css("visibility", "visible"), o.css("overflow", "hidden"), c.addClass("clearing-blackout"), h.addClass("clearing-container"), g.show(), this.fix_height(s).caption(l.S(".clearing-caption", g), e).center_and_label(i, u).shift(n, s, function () {
                s.siblings().removeClass("visible"), s.addClass("visible")
            })
        }

        var l = this, o = t(e.body), c = s.closest(".clearing-assembled"), h = t("div", c).first(), g = t(".visible-img", h), d = t("img", g).not(i), u = t(".clearing-touch-label", ".clearing-blackout"), f = !1;
        d.error(function () {
            f = !0
        }), this.locked() || (d.attr("src", this.load(i)).css("visibility", "hidden"), a.call(this))
    }, close: function (i, n) {
        i.preventDefault();
        var s, a, r = function (t) {
            return/blackout/.test(t.selector) ? t : t.closest(".clearing-blackout")
        }(t(n)), l = t(e.body);
        return n === i.target && r && (l.css("overflow", ""), s = t("div", r).first(), a = t(".visible-img", s), this.settings.prev_index = 0, t("ul[" + this.attr_name() + "]", r).attr("style", "").closest(".clearing-blackout").removeClass("clearing-blackout"), s.removeClass("clearing-container"), a.hide()), !1
    }, is_open: function (t) {
        return t.parent().prop("style").length > 0
    }, keydown: function (i) {
        var e = t(".clearing-blackout ul[" + this.attr_name() + "]"), n = this.rtl ? 37 : 39, s = this.rtl ? 39 : 37, a = 27;
        i.which === n && this.go(e, "next"), i.which === s && this.go(e, "prev"), i.which === a && this.S("a.clearing-close").trigger("click")
    }, nav: function (i, e) {
        var n = t("ul[" + this.attr_name() + "]", ".clearing-blackout");
        i.preventDefault(), this.go(n, e)
    }, resize: function () {
        var i = t("img", ".clearing-blackout .visible-img"), e = t(".clearing-touch-label", ".clearing-blackout");
        i.length && this.center_and_label(i, e)
    }, fix_height: function (t) {
        var i = t.parent().children(), e = this;
        return i.each(function () {
            var t = e.S(this), i = t.find("img");
            t.height() > i.outerHeight() && t.addClass("fix-height")
        }).closest("ul").width(100 * i.length + "%"), this
    }, update_paddles: function (t) {
        var i = t.closest(".carousel").siblings(".visible-img");
        t.next().length > 0 ? this.S(".clearing-main-next", i).removeClass("disabled") : this.S(".clearing-main-next", i).addClass("disabled"), t.prev().length > 0 ? this.S(".clearing-main-prev", i).removeClass("disabled") : this.S(".clearing-main-prev", i).addClass("disabled")
    }, center_and_label: function (t, i) {
        return this.rtl ? (t.css({marginRight: -(t.outerWidth() / 2), marginTop: -(t.outerHeight() / 2), left: "auto", right: "50%"}), i.length > 0 && i.css({marginRight: -(i.outerWidth() / 2), marginTop: -(t.outerHeight() / 2) - i.outerHeight() - 10, left: "auto", right: "50%"})) : (t.css({marginLeft: -(t.outerWidth() / 2), marginTop: -(t.outerHeight() / 2)}), i.length > 0 && i.css({marginLeft: -(i.outerWidth() / 2), marginTop: -(t.outerHeight() / 2) - i.outerHeight() - 10})), this
    }, load: function (t) {
        if ("A" === t[0].nodeName)var i = t.attr("href"); else var i = t.parent().attr("href");
        return this.preload(t), i ? i : t.attr("src")
    }, preload: function (t) {
        this.img(t.closest("li").next()).img(t.closest("li").prev())
    }, img: function (t) {
        if (t.length) {
            var i = new Image, e = this.S("a", t);
            i.src = e.length ? e.attr("href") : this.S("img", t).attr("src")
        }
        return this
    }, caption: function (t, i) {
        var e = i.data("caption");
        return e ? t.html(e).show() : t.text("").hide(), this
    }, go: function (t, i) {
        var e = this.S(".visible", t), n = e[i]();
        n.length && this.S("img", n).trigger("click", [e, n])
    }, shift: function (t, i, e) {
        var n, s = i.parent(), a = this.settings.prev_index || i.index(), r = this.direction(s, t, i), l = this.rtl ? "right" : "left", o = parseInt(s.css("left"), 10), c = i.outerWidth(), h = {};
        i.index() === a || /skip/.test(r) ? /skip/.test(r) && (n = i.index() - this.settings.up_count, this.lock(), n > 0 ? (h[l] = -(n * c), s.animate(h, 300, this.unlock())) : (h[l] = 0, s.animate(h, 300, this.unlock()))) : /left/.test(r) ? (this.lock(), h[l] = o + c, s.animate(h, 300, this.unlock())) : /right/.test(r) && (this.lock(), h[l] = o - c, s.animate(h, 300, this.unlock())), e()
    }, direction: function (t, i, e) {
        var n, s = this.S("li", t), a = s.outerWidth() + s.outerWidth() / 4, r = Math.floor(this.S(".clearing-container").outerWidth() / a) - 1, l = s.index(e);
        return this.settings.up_count = r, n = this.adjacent(this.settings.prev_index, l) ? l > r && l > this.settings.prev_index ? "right" : l > r - 1 && l <= this.settings.prev_index ? "left" : !1 : "skip", this.settings.prev_index = l, n
    }, adjacent: function (t, i) {
        for (var e = i + 1; e >= i - 1; e--)if (e === t)return!0;
        return!1
    }, lock: function () {
        this.settings.locked = !0
    }, unlock: function () {
        this.settings.locked = !1
    }, locked: function () {
        return this.settings.locked
    }, off: function () {
        this.S(this.scope).off(".fndtn.clearing"), this.S(i).off(".fndtn.clearing")
    }, reflow: function () {
        this.init()
    }}
}(jQuery, this, this.document);