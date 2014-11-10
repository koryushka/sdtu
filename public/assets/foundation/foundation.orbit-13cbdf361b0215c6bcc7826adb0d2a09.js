!function (t, e, i, s) {
    "use strict";
    var a = function () {
    }, n = function (a, n) {
        if (a.hasClass(n.slides_container_class))return this;
        var c, d, _, u, p, m, f = this, g = a, h = 0, v = !1;
        f.slides = function () {
            return g.children(n.slide_selector)
        }, f.slides().first().addClass(n.active_slide_class), f.update_slide_number = function (e) {
            n.slide_number && (d.find("span:first").text(parseInt(e) + 1), d.find("span:last").text(f.slides().length)), n.bullets && (_.children().removeClass(n.bullets_active_class), t(_.children().get(e)).addClass(n.bullets_active_class))
        }, f.update_active_link = function (e) {
            var i = t('a[data-orbit-link="' + f.slides().eq(e).attr("data-orbit-slide") + '"]');
            i.siblings().removeClass(n.bullets_active_class), i.addClass(n.bullets_active_class)
        }, f.build_markup = function () {
            g.wrap('<div class="' + n.container_class + '"></div>'), c = g.parent(), g.addClass(n.slides_container_class), n.navigation_arrows && (c.append(t('<a href="#"><span></span></a>').addClass(n.prev_class)), c.append(t('<a href="#"><span></span></a>').addClass(n.next_class))), n.timer && (u = t("<div>").addClass(n.timer_container_class), u.append("<span>"), u.append(t("<div>").addClass(n.timer_progress_class)), u.addClass(n.timer_paused_class), c.append(u)), n.slide_number && (d = t("<div>").addClass(n.slide_number_class), d.append("<span></span> " + n.slide_number_text + " <span></span>"), c.append(d)), n.bullets && (_ = t("<ol>").addClass(n.bullets_container_class), c.append(_), _.wrap('<div class="orbit-bullets-container"></div>'), f.slides().each(function (e) {
                var i = t("<li>").attr("data-orbit-slide", e);
                _.append(i)
            })), n.stack_on_small && c.addClass(n.stack_on_small_class)
        }, f._goto = function (e, i) {
            if (e === h)return!1;
            "object" == typeof m && m.restart();
            var s = f.slides(), a = "next";
            if (v = !0, h > e && (a = "prev"), e >= s.length) {
                if (!n.circular)return!1;
                e = 0
            } else if (0 > e) {
                if (!n.circular)return!1;
                e = s.length - 1
            }
            var r = t(s.get(h)), o = t(s.get(e));
            r.css("zIndex", 2), r.removeClass(n.active_slide_class), o.css("zIndex", 4).addClass(n.active_slide_class), g.trigger("before-slide-change.fndtn.orbit"), n.before_slide_change(), f.update_active_link(e);
            var l = function () {
                var t = function () {
                    h = e, v = !1, i === !0 && (m = f.create_timer(), m.start()), f.update_slide_number(h), g.trigger("after-slide-change.fndtn.orbit", [
                        {slide_number: h, total_slides: s.length}
                    ]), n.after_slide_change(h, s.length)
                };
                g.height() != o.height() && n.variable_height ? g.animate({height: o.height()}, 250, "linear", t) : t()
            };
            if (1 === s.length)return l(), !1;
            var c = function () {
                "next" === a && p.next(r, o, l), "prev" === a && p.prev(r, o, l)
            };
            o.height() > g.height() && n.variable_height ? g.animate({height: o.height()}, 250, "linear", c) : c()
        }, f.next = function (t) {
            t.stopImmediatePropagation(), t.preventDefault(), f._goto(h + 1)
        }, f.prev = function (t) {
            t.stopImmediatePropagation(), t.preventDefault(), f._goto(h - 1)
        }, f.link_custom = function (e) {
            e.preventDefault();
            var i = t(this).attr("data-orbit-link");
            if ("string" == typeof i && "" != (i = t.trim(i))) {
                var s = c.find("[data-orbit-slide=" + i + "]");
                -1 != s.index() && f._goto(s.index())
            }
        }, f.link_bullet = function () {
            var e = t(this).attr("data-orbit-slide");
            if ("string" == typeof e && "" != (e = t.trim(e)))if (isNaN(parseInt(e))) {
                var i = c.find("[data-orbit-slide=" + e + "]");
                -1 != i.index() && f._goto(i.index() + 1)
            } else f._goto(parseInt(e))
        }, f.timer_callback = function () {
            f._goto(h + 1, !0)
        }, f.compute_dimensions = function () {
            var e = t(f.slides().get(h)), i = e.height();
            n.variable_height || f.slides().each(function () {
                t(this).height() > i && (i = t(this).height())
            }), g.height(i)
        }, f.create_timer = function () {
            var t = new r(c.find("." + n.timer_container_class), n, f.timer_callback);
            return t
        }, f.stop_timer = function () {
            "object" == typeof m && m.stop()
        }, f.toggle_timer = function () {
            var t = c.find("." + n.timer_container_class);
            t.hasClass(n.timer_paused_class) ? ("undefined" == typeof m && (m = f.create_timer()), m.start()) : "object" == typeof m && m.stop()
        }, f.init = function () {
            f.build_markup(), n.timer && (m = f.create_timer(), Foundation.utils.image_loaded(this.slides().children("img"), m.start)), p = new l(n, g), "slide" === n.animation && (p = new o(n, g)), c.on("click", "." + n.next_class, f.next), c.on("click", "." + n.prev_class, f.prev), c.on("click", "[data-orbit-slide]", f.link_bullet), c.on("click", f.toggle_timer), n.swipe && c.on("touchstart.fndtn.orbit",function (t) {
                t.touches || (t = t.originalEvent);
                var e = {start_page_x: t.touches[0].pageX, start_page_y: t.touches[0].pageY, start_time: (new Date).getTime(), delta_x: 0, is_scrolling: s};
                c.data("swipe-transition", e), t.stopPropagation()
            }).on("touchmove.fndtn.orbit",function (t) {
                if (t.touches || (t = t.originalEvent), !(t.touches.length > 1 || t.scale && 1 !== t.scale)) {
                    var e = c.data("swipe-transition");
                    if ("undefined" == typeof e && (e = {}), e.delta_x = t.touches[0].pageX - e.start_page_x, "undefined" == typeof e.is_scrolling && (e.is_scrolling = !!(e.is_scrolling || Math.abs(e.delta_x) < Math.abs(t.touches[0].pageY - e.start_page_y))), !e.is_scrolling && !e.active) {
                        t.preventDefault();
                        var i = e.delta_x < 0 ? h + 1 : h - 1;
                        e.active = !0, f._goto(i)
                    }
                }
            }).on("touchend.fndtn.orbit", function (t) {
                c.data("swipe-transition", {}), t.stopPropagation()
            }), c.on("mouseenter.fndtn.orbit",function () {
                n.timer && n.pause_on_hover && f.stop_timer()
            }).on("mouseleave.fndtn.orbit", function () {
                n.timer && n.resume_on_mouseout && m.start()
            }), t(i).on("click", "[data-orbit-link]", f.link_custom), t(e).on("resize", f.compute_dimensions), Foundation.utils.image_loaded(this.slides().children("img"), f.compute_dimensions), Foundation.utils.image_loaded(this.slides().children("img"), function () {
                c.prev(".preloader").css("display", "none"), f.update_slide_number(0), f.update_active_link(0), g.trigger("ready.fndtn.orbit")
            })
        }, f.init()
    }, r = function (t, e, i) {
        var s, a, n = this, r = e.timer_speed, o = t.find("." + e.timer_progress_class), l = -1;
        this.update_progress = function (t) {
            var e = o.clone();
            e.attr("style", ""), e.css("width", t + "%"), o.replaceWith(e), o = e
        }, this.restart = function () {
            clearTimeout(a), t.addClass(e.timer_paused_class), l = -1, n.update_progress(0)
        }, this.start = function () {
            return t.hasClass(e.timer_paused_class) ? (l = -1 === l ? r : l, t.removeClass(e.timer_paused_class), s = (new Date).getTime(), o.animate({width: "100%"}, l, "linear"), a = setTimeout(function () {
                n.restart(), i()
            }, l), t.trigger("timer-started.fndtn.orbit"), void 0) : !0
        }, this.stop = function () {
            if (t.hasClass(e.timer_paused_class))return!0;
            clearTimeout(a), t.addClass(e.timer_paused_class);
            var i = (new Date).getTime();
            l -= i - s;
            var o = 100 - l / r * 100;
            n.update_progress(o), t.trigger("timer-stopped.fndtn.orbit")
        }
    }, o = function (e) {
        var i = e.animation_speed, s = 1 === t("html[dir=rtl]").length, a = s ? "marginRight" : "marginLeft", n = {};
        n[a] = "0%", this.next = function (t, e, s) {
            t.animate({marginLeft: "-100%"}, i), e.animate(n, i, function () {
                t.css(a, "100%"), s()
            })
        }, this.prev = function (t, e, s) {
            t.animate({marginLeft: "100%"}, i), e.css(a, "-100%"), e.animate(n, i, function () {
                t.css(a, "100%"), s()
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
    Foundation.libs = Foundation.libs || {}, Foundation.libs.orbit = {name: "orbit", version: "5.1.1", settings: {animation: "slide", timer_speed: 1e4, pause_on_hover: !0, resume_on_mouseout: !1, animation_speed: 500, stack_on_small: !1, navigation_arrows: !0, slide_number: !0, slide_number_text: "of", container_class: "orbit-container", stack_on_small_class: "orbit-stack-on-small", next_class: "orbit-next", prev_class: "orbit-prev", timer_container_class: "orbit-timer", timer_paused_class: "paused", timer_progress_class: "orbit-progress", slides_container_class: "orbit-slides-container", slide_selector: "*", bullets_container_class: "orbit-bullets", bullets_active_class: "active", slide_number_class: "orbit-slide-number", caption_class: "orbit-caption", active_slide_class: "active", orbit_transition_class: "orbit-transitioning", bullets: !0, circular: !0, timer: !0, variable_height: !1, swipe: !0, before_slide_change: a, after_slide_change: a}, init: function (t, e, i) {
        this.bindings(e, i)
    }, events: function (t) {
        var e = new n(this.S(t), this.S(t).data("orbit-init"));
        this.S(t).data(self.name + "-instance", e)
    }, reflow: function () {
        var t = this;
        if (t.S(t.scope).is("[data-orbit]")) {
            var e = t.S(t.scope), i = e.data(t.name + "-instance");
            i.compute_dimensions()
        } else t.S("[data-orbit]", t.scope).each(function (e, i) {
            var s = t.S(i), a = (t.data_options(s), s.data(t.name + "-instance"));
            a.compute_dimensions()
        })
    }}
}(jQuery, this, this.document);