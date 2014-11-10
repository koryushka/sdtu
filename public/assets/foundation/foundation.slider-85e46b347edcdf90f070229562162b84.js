!function (t, n) {
    "use strict";
    Foundation.libs.slider = {name: "slider", version: "5.2.0", settings: {start: 0, end: 100, step: 1, initial: null, display_selector: "", on_change: function () {
    }}, cache: {}, init: function (t, n, e) {
        Foundation.inherit(this, "throttle"), this.bindings(n, e), this.reflow()
    }, events: function () {
        var e = this;
        t(this.scope).off(".slider").on("mousedown.fndtn.slider touchstart.fndtn.slider pointerdown.fndtn.slider", "[" + e.attr_name() + "] .range-slider-handle",function (n) {
            e.cache.active || e.set_active_slider(t(n.target))
        }).on("mousemove.fndtn.slider touchmove.fndtn.slider pointermove.fndtn.slider",function (t) {
            e.cache.active && (t.preventDefault(), e.calculate_position(e.cache.active, t.pageX || t.originalEvent.touches[0].clientX || t.currentPoint.x))
        }).on("mouseup.fndtn.slider touchend.fndtn.slider pointerup.fndtn.slider",function () {
            e.remove_active_slider()
        }).on("change.fndtn.slider", function () {
            e.settings.on_change
        }), e.S(n).on("resize.fndtn.slider", e.throttle(function () {
            e.reflow()
        }, 300))
    }, set_active_slider: function (t) {
        this.cache.active = t
    }, remove_active_slider: function () {
        this.cache.active = null
    }, calculate_position: function (n, e) {
        var a = this, i = t.extend({}, a.settings, a.data_options(n.parent())), s = (t.data(n[0], "handle_w"), t.data(n[0], "handle_o"), t.data(n[0], "bar_w")), r = t.data(n[0], "bar_o");
        requestAnimationFrame(function () {
            var t = a.limit_to((e - r) / s, 0, 1), o = a.normalized_value(t, i.start, i.end, i.step);
            a.set_ui(n, o)
        })
    }, set_ui: function (n, e) {
        var a = t.extend({}, this.settings, this.data_options(n.parent())), i = t.data(n[0], "handle_w"), s = t.data(n[0], "bar_w"), r = this.normalized_percentage(e, a.start, a.end), o = r * (s - i) - 1, l = 100 * r;
        this.set_translate(n, o), n.siblings(".range-slider-active-segment").css("width", l + "%"), n.parent().attr(this.attr_name(), e), n.parent().trigger("change"), n.parent().children("input[type=hidden]").val(e), "" != a.input_id && t(a.display_selector).each(function () {
            this.hasOwnProperty("value") ? t(this).val(e) : t(this).text(e)
        })
    }, normalized_percentage: function (t, n, e) {
        return t / (e - n)
    }, normalized_value: function (t, n, e, a) {
        var i = e - n, a = a, s = t * i, r = (s - s % a) / a, o = s % a, l = o >= .5 * a ? a : 0;
        return r * a + l
    }, set_translate: function (n, e, a) {
        a ? t(n).css("-webkit-transform", "translateY(" + e + "px)").css("-moz-transform", "translateY(" + e + "px)").css("-ms-transform", "translateY(" + e + "px)").css("-o-transform", "translateY(" + e + "px)").css("transform", "translateY(" + e + "px)") : t(n).css("-webkit-transform", "translateX(" + e + "px)").css("-moz-transform", "translateX(" + e + "px)").css("-ms-transform", "translateX(" + e + "px)").css("-o-transform", "translateX(" + e + "px)").css("transform", "translateX(" + e + "px)")
    }, limit_to: function (t, n, e) {
        return Math.min(Math.max(t, n), e)
    }, initialize_settings: function (n) {
        t.data(n, "bar", t(n).parent()), t.data(n, "bar_o", t(n).parent().offset().left), t.data(n, "bar_w", t(n).parent().outerWidth()), t.data(n, "handle_o", t(n).offset().left), t.data(n, "handle_w", t(n).outerWidth()), t.data(n, "settings", t.extend({}, this.settings, this.data_options(t(n).parent())))
    }, set_initial_position: function (n) {
        var e = t.data(n.children(".range-slider-handle")[0], "settings"), a = e.initial ? e.initial : Math.floor(.5 * (e.end - e.start) / e.step) * e.step, i = n.children(".range-slider-handle");
        this.set_ui(i, a)
    }, set_value: function (n) {
        var e = this;
        t("[" + e.attr_name() + "]", this.scope).each(function () {
            t(this).attr(e.attr_name(), n)
        }), t(this.scope).attr(e.attr_name()) && t(this.scope).attr(e.attr_name(), n), e.reflow()
    }, reflow: function () {
        var n = this;
        n.S("[" + this.attr_name() + "]").each(function () {
            var e = t(this).children(".range-slider-handle")[0], a = t(this).attr(n.attr_name());
            n.initialize_settings(e), a ? n.set_ui(t(e), parseInt(a)) : n.set_initial_position(t(this))
        })
    }}
}(jQuery, this, this.document);