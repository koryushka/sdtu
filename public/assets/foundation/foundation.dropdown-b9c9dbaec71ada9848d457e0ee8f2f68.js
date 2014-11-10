!function (t, n) {
    "use strict";
    Foundation.libs.dropdown = {name: "dropdown", version: "5.1.1", settings: {active_class: "open", is_hover: !1, opened: function () {
    }, closed: function () {
    }}, init: function (t, n, a) {
        Foundation.inherit(this, "throttle"), this.bindings(n, a)
    }, events: function () {
        var a = this, e = a.S;
        e(this.scope).off(".dropdown").on("click.fndtn.dropdown", "[" + this.attr_name() + "]",function (t) {
            var n = e(this).data(a.attr_name(!0) + "-init") || a.settings;
            t.preventDefault(), (!n.is_hover || Modernizr.touch) && a.toggle(e(this))
        }).on("mouseenter.fndtn.dropdown", "[" + this.attr_name() + "], [" + this.attr_name() + "-content]",function (t) {
            var n = e(this);
            if (clearTimeout(a.timeout), n.data(a.data_attr()))var s = e("#" + n.data(a.data_attr())), i = n; else {
                var s = n;
                i = e("[" + a.attr_name() + "='" + s.attr("id") + "']")
            }
            var o = i.data(a.attr_name(!0) + "-init") || a.settings;
            e(t.target).data(a.data_attr()) && o.is_hover && a.closeall.call(a), o.is_hover && a.open.apply(a, [s, i])
        }).on("mouseleave.fndtn.dropdown", "[" + this.attr_name() + "], [" + this.attr_name() + "-content]",function () {
            var t = e(this);
            a.timeout = setTimeout(function () {
                if (t.data(a.data_attr())) {
                    var n = t.data(a.data_attr(!0) + "-init") || a.settings;
                    n.is_hover && a.close.call(a, e("#" + t.data(a.data_attr())))
                } else {
                    var s = e("[" + a.attr_name() + '="' + e(this).attr("id") + '"]'), n = s.data(a.attr_name(!0) + "-init") || a.settings;
                    n.is_hover && a.close.call(a, t)
                }
            }.bind(this), 150)
        }).on("click.fndtn.dropdown",function (n) {
            var s = e(n.target).closest("[" + a.attr_name() + "-content]");
            if (!e(n.target).data(a.data_attr()) && !e(n.target).parent().data(a.data_attr()))return!e(n.target).data("revealId") && s.length > 0 && (e(n.target).is("[" + a.attr_name() + "-content]") || t.contains(s.first()[0], n.target)) ? (n.stopPropagation(), void 0) : (a.close.call(a, e("[" + a.attr_name() + "-content]")), void 0)
        }).on("opened.fndtn.dropdown", "[" + a.attr_name() + "-content]",function () {
            a.settings.opened.call(this)
        }).on("closed.fndtn.dropdown", "[" + a.attr_name() + "-content]", function () {
            a.settings.closed.call(this)
        }), e(n).off(".dropdown").on("resize.fndtn.dropdown", a.throttle(function () {
            a.resize.call(a)
        }, 50)).trigger("resize")
    }, close: function (t) {
        var n = this;
        t.each(function () {
            n.S(this).hasClass(n.settings.active_class) && (n.S(this).css(Foundation.rtl ? "right" : "left", "-99999px").removeClass(n.settings.active_class), n.S(this).trigger("closed"))
        })
    }, closeall: function () {
        var n = this;
        t.each(n.S("[" + this.attr_name() + "-content]"), function () {
            n.close.call(n, n.S(this))
        })
    }, open: function (t, n) {
        this.css(t.addClass(this.settings.active_class), n), t.trigger("opened")
    }, data_attr: function () {
        return this.namespace.length > 0 ? this.namespace + "-" + this.name : this.name
    }, toggle: function (t) {
        var n = this.S("#" + t.data(this.data_attr()));
        0 !== n.length && (this.close.call(this, this.S("[" + this.attr_name() + "-content]").not(n)), n.hasClass(this.settings.active_class) ? this.close.call(this, n) : (this.close.call(this, this.S("[" + this.attr_name() + "-content]")), this.open.call(this, n, t)))
    }, resize: function () {
        var t = this.S("[" + this.attr_name() + "-content].open"), n = this.S("[" + this.attr_name() + "='" + t.attr("id") + "']");
        t.length && n.length && this.css(t, n)
    }, css: function (t, a) {
        var e = t.offsetParent(), s = a.offset();
        if (s.top -= e.offset().top, s.left -= e.offset().left, this.small())t.css({position: "absolute", width: "95%", "max-width": "none", top: s.top + a.outerHeight()}), t.css(Foundation.rtl ? "right" : "left", "2.5%"); else {
            if (!Foundation.rtl && this.S(n).width() > t.outerWidth() + a.offset().left) {
                var i = s.left;
                t.hasClass("right") && t.removeClass("right")
            } else {
                t.hasClass("right") || t.addClass("right");
                var i = s.left - (t.outerWidth() - a.outerWidth())
            }
            t.attr("style", "").css({position: "absolute", top: s.top + a.outerHeight(), left: i})
        }
        return t
    }, small: function () {
        return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
    }, off: function () {
        this.S(this.scope).off(".fndtn.dropdown"), this.S("html, body").off(".fndtn.dropdown"), this.S(n).off(".fndtn.dropdown"), this.S("[data-dropdown-content]").off(".fndtn.dropdown"), this.settings.init = !1
    }, reflow: function () {
    }}
}(jQuery, this, this.document);