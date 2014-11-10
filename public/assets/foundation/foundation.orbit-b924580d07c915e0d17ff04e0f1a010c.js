!function (e, t, i) {
    "use strict";
    var a = function () {
    }, s = function (a, s) {
        if (a.hasClass(s.slides_container_class))return this;
        var o, c, l, d, _, u = this, m = a, p = 0;
        u.cache = {}, u.slides = function () {
            return m.children(s.slide_selector)
        }, u.slides().first().addClass(s.active_slide_class), u.update_slide_number = function (t) {
            s.slide_number && (c.find("span:first").text(parseInt(t) + 1), c.find("span:last").text(u.slides().length)), s.bullets && (l.children().removeClass(s.bullets_active_class), e(l.children().get(t)).addClass(s.bullets_active_class))
        }, u.update_active_link = function (t) {
            var i = e('a[data-orbit-link="' + u.slides().eq(t).attr("data-orbit-slide") + '"]');
            i.siblings().removeClass(s.bullets_active_class), i.addClass(s.bullets_active_class)
        }, u.build_markup = function () {
            m.wrap('<div class="' + s.container_class + '"></div>'), o = m.parent(), m.addClass(s.slides_container_class), s.navigation_arrows && (o.append(e('<a href="#"><span></span></a>').addClass(s.prev_class)), o.append(e('<a href="#"><span></span></a>').addClass(s.next_class))), s.timer && (d = e("<div>").addClass(s.timer_container_class), d.append("<span>"), d.append(e("<div>").addClass(s.timer_progress_class)), d.addClass(s.timer_paused_class), o.append(d)), s.slide_number && (c = e("<div>").addClass(s.slide_number_class), c.append("<span></span> " + s.slide_number_text + " <span></span>"), o.append(c)), s.bullets && (l = e("<ol>").addClass(s.bullets_container_class), o.append(l), l.wrap('<div class="orbit-bullets-container"></div>'), u.slides().each(function (t) {
                var i = e("<li>").attr("data-orbit-slide", t);
                l.append(i)
            })), s.stack_on_small && o.addClass(s.stack_on_small_class)
        }, u._prepare_direction = function (t) {
            var i = "next";
            p >= t && (i = "prev"), "slide" === s.animation && setTimeout(function () {
                m.removeClass("swipe-prev swipe-next"), "next" === i ? m.addClass("swipe-next") : "prev" === i && m.addClass("swipe-prev")
            }, 0);
            var a = u.slides();
            if (t >= a.length) {
                if (!s.circular)return!1;
                t = 0
            } else if (0 > t) {
                if (!s.circular)return!1;
                t = a.length - 1
            }
            var n = e(a.get(p)), r = e(a.get(t));
            return[i, n, r, t]
        }, u._goto = function (e, t) {
            if (null === e)return!1;
            if (u.cache.animating)return!1;
            if (e === p)return!1;
            "object" == typeof u.cache.timer && u.cache.timer.restart();
            var i = u.slides();
            u.cache.animating = !0;
            var a = u._prepare_direction(e), n = a[0], r = a[1], o = a[2], e = a[3];
            m.trigger("before-slide-change.fndtn.orbit"), s.before_slide_change(), p = e, r.css("transitionDuration", s.animation_speed + "ms"), o.css("transitionDuration", s.animation_speed + "ms");
            var c = function () {
                var a = function () {
                    t === !0 && u.cache.timer.restart(), u.update_slide_number(p), o.addClass(s.active_slide_class), u.update_active_link(e), m.trigger("after-slide-change.fndtn.orbit", [
                        {slide_number: p, total_slides: i.length}
                    ]), s.after_slide_change(p, i.length), setTimeout(function () {
                        u.cache.animating = !1
                    }, 100)
                };
                m.height() != o.height() && s.variable_height ? m.animate({height: o.height()}, 250, "linear", a) : a()
            };
            if (1 === i.length)return c(), !1;
            var l = function () {
                "next" === n && _.next(r, o, c), "prev" === n && _.prev(r, o, c)
            };
            o.height() > m.height() && s.variable_height ? m.animate({height: o.height()}, 250, "linear", l) : l()
        }, u.next = function (e) {
            e.stopImmediatePropagation(), e.preventDefault(), u._prepare_direction(p + 1), setTimeout(function () {
                u._goto(p + 1)
            }, 100)
        }, u.prev = function (e) {
            e.stopImmediatePropagation(), e.preventDefault(), u._prepare_direction(p - 1), setTimeout(function () {
                u._goto(p - 1)
            }, 100)
        }, u.link_custom = function (t) {
            t.preventDefault();
            var i = e(this).attr("data-orbit-link");
            if ("string" == typeof i && "" != (i = e.trim(i))) {
                var a = o.find("[data-orbit-slide=" + i + "]");
                -1 != a.index() && setTimeout(function () {
                    u._goto(a.index())
                }, 100)
            }
        }, u.link_bullet = function () {
            var t = e(this).attr("data-orbit-slide");
            if ("string" == typeof t && "" != (t = e.trim(t)))if (isNaN(parseInt(t))) {
                var i = o.find("[data-orbit-slide=" + t + "]");
                -1 != i.index() && setTimeout(function () {
                    u._goto(i.index() + 1)
                }, 100)
            } else setTimeout(function () {
                u._goto(parseInt(t))
            }, 100)
        }, u.timer_callback = function () {
            u._goto(p + 1, !0)
        }, u.compute_dimensions = function () {
            var t = e(u.slides().get(p)), i = t.height();
            s.variable_height || u.slides().each(function () {
                e(this).height() > i && (i = e(this).height())
            }), m.height(i)
        }, u.create_timer = function () {
            var e = new n(o.find("." + s.timer_container_class), s, u.timer_callback);
            return e
        }, u.stop_timer = function () {
            "object" == typeof u.cache.timer && u.cache.timer.stop()
        }, u.toggle_timer = function () {
            var e = o.find("." + s.timer_container_class);
            e.hasClass(s.timer_paused_class) ? ("undefined" == typeof u.cache.timer && (u.cache.timer = u.create_timer()), u.cache.timer.start()) : "object" == typeof u.cache.timer && u.cache.timer.stop()
        }, u.init = function () {
            u.build_markup(), s.timer && (u.cache.timer = u.create_timer(), Foundation.utils.image_loaded(this.slides().children("img"), u.cache.timer.start)), "fade" === s.animation && m.addClass("fade"), _ = new r(s, m), o.on("click", "." + s.next_class, u.next), o.on("click", "." + s.prev_class, u.prev), o.on("click", "[data-orbit-slide]", u.link_bullet), o.on("click", u.toggle_timer), s.swipe && m.on("touchstart.fndtn.orbit",function (e) {
                e.preventDefault(), e.stopPropagation(), u.cache.animating || (e.touches || (e = e.originalEvent), u.cache.start_page_x = e.touches[0].pageX, u.cache.start_page_y = e.touches[0].pageY, u.cache.start_time = (new Date).getTime(), u.cache.delta_x = 0, u.cache.is_scrolling = null, u.cache.direction = null, u.stop_timer())
            }).on("touchmove.fndtn.orbit",function (e) {
                u.cache.animating || (e.preventDefault(), e.stopPropagation(), requestAnimationFrame(function () {
                    if (e.touches || (e = e.originalEvent), !(e.touches.length > 1 || e.scale && 1 !== e.scale || (u.cache.delta_x = e.touches[0].pageX - u.cache.start_page_x, null === u.cache.is_scrolling && (u.cache.is_scrolling = !!(u.cache.is_scrolling || Math.abs(u.cache.delta_x) < Math.abs(e.touches[0].pageY - u.cache.start_page_y))), u.cache.is_scrolling))) {
                        var t = u.cache.delta_x < 0 ? p + 1 : p - 1;
                        if (u.cache.direction !== t) {
                            var i = u._prepare_direction(t);
                            u.cache.direction = t, u.cache.dir = i[0], u.cache.current = i[1], u.cache.next = i[2]
                        }
                        if ("slide" === s.animation) {
                            var a, n;
                            a = u.cache.delta_x / o.width() * 100, n = a >= 0 ? -(100 - a) : 100 + a, u.cache.current.css("transform", "translate3d(" + a + "%,0,0)"), u.cache.next.css("transform", "translate3d(" + n + "%,0,0)")
                        }
                    }
                }))
            }).on("touchend.fndtn.orbit", function (e) {
                u.cache.animating || (e.preventDefault(), e.stopPropagation(), setTimeout(function () {
                    u._goto(u.cache.direction)
                }, 50))
            }), o.on("mouseenter.fndtn.orbit",function () {
                s.timer && s.pause_on_hover && u.stop_timer()
            }).on("mouseleave.fndtn.orbit", function () {
                s.timer && s.resume_on_mouseout && u.cache.timer.start()
            }), e(i).on("click", "[data-orbit-link]", u.link_custom), e(t).on("resize", u.compute_dimensions), Foundation.utils.image_loaded(this.slides().children("img"), u.compute_dimensions), Foundation.utils.image_loaded(this.slides().children("img"), function () {
                o.prev(".preloader").css("display", "none"), u.update_slide_number(0), u.update_active_link(0), m.trigger("ready.fndtn.orbit")
            })
        }, u.init()
    }, n = function (e, t, i) {
        var a, s, n = this, r = t.timer_speed, o = e.find("." + t.timer_progress_class), c = -1;
        this.update_progress = function (e) {
            var t = o.clone();
            t.attr("style", ""), t.css("width", e + "%"), o.replaceWith(t), o = t
        }, this.restart = function () {
            clearTimeout(s), e.addClass(t.timer_paused_class), c = -1, n.update_progress(0)
        }, this.start = function () {
            return e.hasClass(t.timer_paused_class) ? (c = -1 === c ? r : c, e.removeClass(t.timer_paused_class), a = (new Date).getTime(), o.animate({width: "100%"}, c, "linear"), s = setTimeout(function () {
                n.restart(), i()
            }, c), e.trigger("timer-started.fndtn.orbit"), void 0) : !0
        }, this.stop = function () {
            if (e.hasClass(t.timer_paused_class))return!0;
            clearTimeout(s), e.addClass(t.timer_paused_class);
            var i = (new Date).getTime();
            c -= i - a;
            var o = 100 - c / r * 100;
            n.update_progress(o), e.trigger("timer-stopped.fndtn.orbit")
        }
    }, r = function (e, t) {
        var i = "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend";
        this.next = function (e, a, s) {
            a.on(i, function () {
                a.unbind(i), e.removeClass("active animate-out"), a.removeClass("animate-in"), s()
            }), t.children().css({transform: "", transitionDuration: ""}), e.addClass("animate-out"), a.addClass("animate-in")
        }, this.prev = function (e, t, a) {
            t.on(i, function () {
                t.unbind(i), e.removeClass("active animate-out"), t.removeClass("animate-in"), a()
            }), e.css({transform: "", transitionDuration: ""}).addClass("animate-out"), t.css({transform: "", transitionDuration: ""}).addClass("animate-in")
        }
    };
    Foundation.libs = Foundation.libs || {}, Foundation.libs.orbit = {name: "orbit", version: "5.2.0", settings: {animation: "slide", timer_speed: 1e4, pause_on_hover: !0, resume_on_mouseout: !1, animation_speed: 500, stack_on_small: !1, navigation_arrows: !0, slide_number: !0, slide_number_text: "of", container_class: "orbit-container", stack_on_small_class: "orbit-stack-on-small", next_class: "orbit-next", prev_class: "orbit-prev", timer_container_class: "orbit-timer", timer_paused_class: "paused", timer_progress_class: "orbit-progress", slides_container_class: "orbit-slides-container", slide_selector: "*", bullets_container_class: "orbit-bullets", bullets_active_class: "active", slide_number_class: "orbit-slide-number", caption_class: "orbit-caption", active_slide_class: "active", orbit_transition_class: "orbit-transitioning", bullets: !0, circular: !0, timer: !0, variable_height: !1, swipe: !0, before_slide_change: a, after_slide_change: a}, init: function (e, t, i) {
        this.bindings(t, i)
    }, events: function (e) {
        var t = new s(this.S(e), this.S(e).data("orbit-init"));
        this.S(e).data(self.name + "-instance", t)
    }, reflow: function () {
        var e = this;
        if (e.S(e.scope).is("[data-orbit]")) {
            var t = e.S(e.scope), i = t.data(e.name + "-instance");
            i.compute_dimensions()
        } else e.S("[data-orbit]", e.scope).each(function (t, i) {
            var a = e.S(i), s = (e.data_options(a), a.data(e.name + "-instance"));
            s.compute_dimensions()
        })
    }}
}(jQuery, this, this.document);