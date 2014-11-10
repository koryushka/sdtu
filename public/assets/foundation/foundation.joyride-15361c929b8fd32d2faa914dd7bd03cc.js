!function (t, s, i, e) {
    "use strict";
    Foundation.libs.joyride = {name: "joyride", version: "5.1.1", defaults: {expose: !1, modal: !0, tip_location: "bottom", nub_position: "auto", scroll_speed: 1500, scroll_animation: "linear", timer: 0, start_timer_on_click: !0, start_offset: 0, next_button: !0, tip_animation: "fade", pause_after: [], exposed: [], tip_animation_fade_speed: 300, cookie_monster: !1, cookie_name: "joyride", cookie_domain: !1, cookie_expires: 365, tip_container: "body", tip_location_patterns: {top: ["bottom"], bottom: [], left: ["right", "top", "bottom"], right: ["left", "top", "bottom"]}, post_ride_callback: function () {
    }, post_step_callback: function () {
    }, pre_step_callback: function () {
    }, pre_ride_callback: function () {
    }, post_expose_callback: function () {
    }, template: {link: '<a href="#close" class="joyride-close-tip">&times;</a>', timer: '<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>', tip: '<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>', wrapper: '<div class="joyride-content-wrapper"></div>', button: '<a href="#" class="small button joyride-next-tip"></a>', modal: '<div class="joyride-modal-bg"></div>', expose: '<div class="joyride-expose-wrapper"></div>', expose_cover: '<div class="joyride-expose-cover"></div>'}, expose_add_class: ""}, init: function (t, s, i) {
        Foundation.inherit(this, "throttle random_str"), this.settings = this.defaults, this.bindings(s, i)
    }, events: function () {
        var i = this;
        t(this.scope).off(".joyride").on("click.fndtn.joyride", ".joyride-next-tip, .joyride-modal-bg", function (t) {
            t.preventDefault(), this.settings.$li.next().length < 1 ? this.end() : this.settings.timer > 0 ? (clearTimeout(this.settings.automate), this.hide(), this.show(), this.startTimer()) : (this.hide(), this.show())
        }.bind(this)).on("click.fndtn.joyride", ".joyride-close-tip", function (t) {
            t.preventDefault(), this.end()
        }.bind(this)), t(s).off(".joyride").on("resize.fndtn.joyride", i.throttle(function () {
            if (t("[" + i.attr_name() + "]").length > 0 && i.settings.$next_tip) {
                if (i.settings.exposed.length > 0) {
                    var s = t(i.settings.exposed);
                    s.each(function () {
                        var s = t(this);
                        i.un_expose(s), i.expose(s)
                    })
                }
                i.is_phone() ? i.pos_phone() : i.pos_default(!1, !0)
            }
        }, 100))
    }, start: function () {
        var s = this, i = t("[" + this.attr_name() + "]", this.scope), e = ["timer", "scrollSpeed", "startOffset", "tipAnimationFadeSpeed", "cookieExpires"], n = e.length;
        !i.length > 0 || (this.settings.init || this.events(), this.settings = i.data(this.attr_name(!0) + "-init"), this.settings.$content_el = i, this.settings.$body = t(this.settings.tip_container), this.settings.body_offset = t(this.settings.tip_container).position(), this.settings.$tip_content = this.settings.$content_el.find("> li"), this.settings.paused = !1, this.settings.attempts = 0, "function" != typeof t.cookie && (this.settings.cookie_monster = !1), (!this.settings.cookie_monster || this.settings.cookie_monster && !t.cookie(this.settings.cookie_name)) && (this.settings.$tip_content.each(function (i) {
            var o = t(this);
            this.settings = t.extend({}, s.defaults, s.data_options(o));
            for (var h = n; h--;)s.settings[e[h]] = parseInt(s.settings[e[h]], 10);
            s.create({$li: o, index: i})
        }), !this.settings.start_timer_on_click && this.settings.timer > 0 ? (this.show("init"), this.startTimer()) : this.show("init")))
    }, resume: function () {
        this.set_li(), this.show()
    }, tip_template: function (s) {
        var i, e;
        return s.tip_class = s.tip_class || "", i = t(this.settings.template.tip).addClass(s.tip_class), e = t.trim(t(s.li).html()) + this.button_text(s.button_text) + this.settings.template.link + this.timer_instance(s.index), i.append(t(this.settings.template.wrapper)), i.first().attr(this.add_namespace("data-index"), s.index), t(".joyride-content-wrapper", i).append(e), i[0]
    }, timer_instance: function (s) {
        var i;
        return i = 0 === s && this.settings.start_timer_on_click && this.settings.timer > 0 || 0 === this.settings.timer ? "" : t(this.settings.template.timer)[0].outerHTML
    }, button_text: function (s) {
        return this.settings.next_button ? (s = t.trim(s) || "Next", s = t(this.settings.template.button).append(s)[0].outerHTML) : s = "", s
    }, create: function (s) {
        console.log(s.$li);
        var i = s.$li.attr(this.add_namespace("data-button")) || s.$li.attr(this.add_namespace("data-text")), e = s.$li.attr("class"), n = t(this.tip_template({tip_class: e, index: s.index, button_text: i, li: s.$li}));
        t(this.settings.tip_container).append(n)
    }, show: function (s) {
        var i = null;
        this.settings.$li === e || -1 === t.inArray(this.settings.$li.index(), this.settings.pause_after) ? (this.settings.paused ? this.settings.paused = !1 : this.set_li(s), this.settings.attempts = 0, this.settings.$li.length && this.settings.$target.length > 0 ? (s && (this.settings.pre_ride_callback(this.settings.$li.index(), this.settings.$next_tip), this.settings.modal && this.show_modal()), this.settings.pre_step_callback(this.settings.$li.index(), this.settings.$next_tip), this.settings.modal && this.settings.expose && this.expose(), this.settings.tip_settings = t.extend({}, this.settings, this.data_options(this.settings.$li)), this.settings.timer = parseInt(this.settings.timer, 10), this.settings.tip_settings.tip_location_pattern = this.settings.tip_location_patterns[this.settings.tip_settings.tip_location], /body/i.test(this.settings.$target.selector) || this.scroll_to(), this.is_phone() ? this.pos_phone(!0) : this.pos_default(!0), i = this.settings.$next_tip.find(".joyride-timer-indicator"), /pop/i.test(this.settings.tip_animation) ? (i.width(0), this.settings.timer > 0 ? (this.settings.$next_tip.show(), setTimeout(function () {
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
        var s = this.settings.$li.attr(this.add_namespace("data-class")), e = this.settings.$li.attr(this.add_namespace("data-id")), n = function () {
            return e ? t(i.getElementById(e)) : s ? t("." + s).first() : t("body")
        };
        console.log(s, e), this.settings.$target = n()
    }, scroll_to: function () {
        var i, e;
        i = t(s).height() / 2, e = Math.ceil(this.settings.$target.offset().top - i + this.settings.$next_tip.outerHeight()), 0 != e && t("html, body").animate({scrollTop: e}, this.settings.scroll_speed, "swing")
    }, paused: function () {
        return-1 === t.inArray(this.settings.$li.index() + 1, this.settings.pause_after)
    }, restart: function () {
        this.hide(), this.settings.$li = e, this.show("init")
    }, pos_default: function (i, e) {
        var n = (Math.ceil(t(s).height() / 2), this.settings.$next_tip.offset(), this.settings.$next_tip.find(".joyride-nub")), o = Math.ceil(n.outerWidth() / 2), h = Math.ceil(n.outerHeight() / 2), a = i || !1;
        a && (this.settings.$next_tip.css("visibility", "hidden"), this.settings.$next_tip.show()), "undefined" == typeof e && (e = !1), /body/i.test(this.settings.$target.selector) ? this.settings.$li.length && this.pos_modal(n) : (this.bottom() ? (this.rtl ? this.settings.$next_tip.css({top: this.settings.$target.offset().top + h + this.settings.$target.outerHeight(), left: this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth()}) : this.settings.$next_tip.css({top: this.settings.$target.offset().top + h + this.settings.$target.outerHeight(), left: this.settings.$target.offset().left}), this.nub_position(n, this.settings.tip_settings.nub_position, "top")) : this.top() ? (this.rtl ? this.settings.$next_tip.css({top: this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - h, left: this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth()}) : this.settings.$next_tip.css({top: this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - h, left: this.settings.$target.offset().left}), this.nub_position(n, this.settings.tip_settings.nub_position, "bottom")) : this.right() ? (this.settings.$next_tip.css({top: this.settings.$target.offset().top, left: this.outerWidth(this.settings.$target) + this.settings.$target.offset().left + o}), this.nub_position(n, this.settings.tip_settings.nub_position, "left")) : this.left() && (this.settings.$next_tip.css({top: this.settings.$target.offset().top, left: this.settings.$target.offset().left - this.outerWidth(this.settings.$next_tip) - o}), this.nub_position(n, this.settings.tip_settings.nub_position, "right")), !this.visible(this.corners(this.settings.$next_tip)) && this.settings.attempts < this.settings.tip_settings.tip_location_pattern.length && (n.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"), this.settings.tip_settings.tip_location = this.settings.tip_settings.tip_location_pattern[this.settings.attempts], this.settings.attempts++, this.pos_default())), a && (this.settings.$next_tip.hide(), this.settings.$next_tip.css("visibility", "visible"))
    }, pos_phone: function (s) {
        var i = this.settings.$next_tip.outerHeight(), e = (this.settings.$next_tip.offset(), this.settings.$target.outerHeight()), n = t(".joyride-nub", this.settings.$next_tip), o = Math.ceil(n.outerHeight() / 2), h = s || !1;
        n.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"), h && (this.settings.$next_tip.css("visibility", "hidden"), this.settings.$next_tip.show()), /body/i.test(this.settings.$target.selector) ? this.settings.$li.length && this.pos_modal(n) : this.top() ? (this.settings.$next_tip.offset({top: this.settings.$target.offset().top - i - o}), n.addClass("bottom")) : (this.settings.$next_tip.offset({top: this.settings.$target.offset().top + e + o}), n.addClass("top")), h && (this.settings.$next_tip.hide(), this.settings.$next_tip.css("visibility", "visible"))
    }, pos_modal: function (t) {
        this.center(), t.hide(), this.show_modal()
    }, show_modal: function () {
        if (!this.settings.$next_tip.data("closed")) {
            var s = t(".joyride-modal-bg");
            s.length < 1 && t("body").append(this.settings.template.modal).show(), /pop/i.test(this.settings.tip_animation) ? s.show() : s.fadeIn(this.settings.tip_animation_fade_speed)
        }
    }, expose: function () {
        var i, e, n, o, h, a = "expose-" + this.random_str(6);
        if (arguments.length > 0 && arguments[0]instanceof t)n = arguments[0]; else {
            if (!this.settings.$target || /body/i.test(this.settings.$target.selector))return!1;
            n = this.settings.$target
        }
        return n.length < 1 ? (s.console && console.error("element not valid", n), !1) : (i = t(this.settings.template.expose), this.settings.$body.append(i), i.css({top: n.offset().top, left: n.offset().left, width: n.outerWidth(!0), height: n.outerHeight(!0)}), e = t(this.settings.template.expose_cover), o = {zIndex: n.css("z-index"), position: n.css("position")}, h = null == n.attr("class") ? "" : n.attr("class"), n.css("z-index", parseInt(i.css("z-index")) + 1), "static" == o.position && n.css("position", "relative"), n.data("expose-css", o), n.data("orig-class", h), n.attr("class", h + " " + this.settings.expose_add_class), e.css({top: n.offset().top, left: n.offset().left, width: n.outerWidth(!0), height: n.outerHeight(!0)}), this.settings.modal && this.show_modal(), this.settings.$body.append(e), i.addClass(a), e.addClass(a), n.data("expose", a), this.settings.post_expose_callback(this.settings.$li.index(), this.settings.$next_tip, n), this.add_exposed(n), void 0)
    }, un_expose: function () {
        var i, e, n, o, h, a = !1;
        if (arguments.length > 0 && arguments[0]instanceof t)e = arguments[0]; else {
            if (!this.settings.$target || /body/i.test(this.settings.$target.selector))return!1;
            e = this.settings.$target
        }
        return e.length < 1 ? (s.console && console.error("element not valid", e), !1) : (i = e.data("expose"), n = t("." + i), arguments.length > 1 && (a = arguments[1]), a === !0 ? t(".joyride-expose-wrapper,.joyride-expose-cover").remove() : n.remove(), o = e.data("expose-css"), "auto" == o.zIndex ? e.css("z-index", "") : e.css("z-index", o.zIndex), o.position != e.css("position") && ("static" == o.position ? e.css("position", "") : e.css("position", o.position)), h = e.data("orig-class"), e.attr("class", h), e.removeData("orig-classes"), e.removeData("expose"), e.removeData("expose-z-index"), this.remove_exposed(e), void 0)
    }, add_exposed: function (s) {
        this.settings.exposed = this.settings.exposed || [], s instanceof t || "object" == typeof s ? this.settings.exposed.push(s[0]) : "string" == typeof s && this.settings.exposed.push(s)
    }, remove_exposed: function (s) {
        var i, e;
        for (s instanceof t ? i = s[0] : "string" == typeof s && (i = s), this.settings.exposed = this.settings.exposed || [], e = this.settings.exposed.length; e--;)if (this.settings.exposed[e] == i)return this.settings.exposed.splice(e, 1), void 0
    }, center: function () {
        var i = t(s);
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
        var e = t(s), n = e.height() / 2, o = Math.ceil(this.settings.$target.offset().top - n + this.settings.$next_tip.outerHeight()), h = e.width() + e.scrollLeft(), a = e.height() + o, r = e.height() + e.scrollTop(), p = e.scrollTop();
        return p > o && (p = 0 > o ? 0 : o), a > r && (r = a), [i.offset().top < p, h < i.offset().left + i.outerWidth(), r < i.offset().top + i.outerHeight(), e.scrollLeft() > i.offset().left]
    }, visible: function (t) {
        for (var s = t.length; s--;)if (t[s])return!1;
        return!0
    }, nub_position: function (t, s, i) {
        "auto" === s ? t.addClass(i) : t.addClass(s)
    }, startTimer: function () {
        this.settings.$li.length ? this.settings.automate = setTimeout(function () {
            this.hide(), this.show(), this.startTimer()
        }.bind(this), this.settings.timer) : clearTimeout(this.settings.automate)
    }, end: function () {
        this.settings.cookie_monster && t.cookie(this.settings.cookie_name, "ridden", {expires: this.settings.cookie_expires, domain: this.settings.cookie_domain}), this.settings.timer > 0 && clearTimeout(this.settings.automate), this.settings.modal && this.settings.expose && this.un_expose(), this.settings.$next_tip.data("closed", !0), t(".joyride-modal-bg").hide(), this.settings.$current_tip.hide(), this.settings.post_step_callback(this.settings.$li.index(), this.settings.$current_tip), this.settings.post_ride_callback(this.settings.$li.index(), this.settings.$current_tip), t(".joyride-tip-guide").remove()
    }, off: function () {
        t(this.scope).off(".joyride"), t(s).off(".joyride"), t(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(".joyride"), t(".joyride-tip-guide, .joyride-modal-bg").remove(), clearTimeout(this.settings.automate), this.settings = {}
    }, reflow: function () {
    }}
}(jQuery, this, this.document);