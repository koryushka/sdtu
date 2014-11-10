!function (t, a) {
    "use strict";
    Foundation.libs["magellan-expedition"] = {name: "magellan-expedition", version: "5.2.0", settings: {active_class: "active", threshold: 0, destination_threshold: 20, throttle_delay: 30}, init: function (t, a, e) {
        Foundation.inherit(this, "throttle"), this.bindings(a, e)
    }, events: function () {
        var e = this, n = e.S, i = e.settings;
        e.set_expedition_position(), n(e.scope).off(".magellan").on("click.fndtn.magellan", "[" + e.add_namespace("data-magellan-arrival") + '] a[href^="#"]',function (n) {
            n.preventDefault();
            var i = t(this).closest("[" + e.attr_name() + "]"), o = (i.data("magellan-expedition-init"), this.hash.split("#").join("")), s = t("a[name=" + o + "]");
            0 === s.length && (s = t("#" + o));
            var l = s.offset().top;
            "fixed" === i.css("position") && (l -= i.outerHeight()), t("html, body").stop().animate({scrollTop: l}, 700, "swing", function () {
                a.location.hash = "#" + o
            })
        }).on("scroll.fndtn.magellan", e.throttle(this.check_for_arrivals.bind(this), i.throttle_delay)), t(a).on("resize.fndtn.magellan", e.throttle(this.set_expedition_position.bind(this), i.throttle_delay))
    }, check_for_arrivals: function () {
        var t = this;
        t.update_arrivals(), t.update_expedition_positions()
    }, set_expedition_position: function () {
        var a = this;
        t("[" + this.attr_name() + "=fixed]", a.scope).each(function () {
            var e, n = t(this), i = n.attr("styles");
            n.attr("style", ""), e = n.offset().top, n.data(a.data_attr("magellan-top-offset"), e), n.attr("style", i)
        })
    }, update_expedition_positions: function () {
        var e = this, n = t(a).scrollTop();
        t("[" + this.attr_name() + "=fixed]", e.scope).each(function () {
            var a = t(this), i = a.data("magellan-top-offset");
            if (n >= i) {
                var o = a.prev("[" + e.add_namespace("data-magellan-expedition-clone") + "]");
                0 === o.length && (o = a.clone(), o.removeAttr(e.attr_name()), o.attr(e.add_namespace("data-magellan-expedition-clone"), ""), a.before(o)), a.css({position: "fixed", top: 0})
            } else a.prev("[" + e.add_namespace("data-magellan-expedition-clone") + "]").remove(), a.attr("style", "")
        })
    }, update_arrivals: function () {
        var e = this, n = t(a).scrollTop();
        t("[" + this.attr_name() + "]", e.scope).each(function () {
            var a = t(this), i = i = a.data(e.attr_name(!0) + "-init"), o = e.offsets(a, n), s = a.find("[" + e.add_namespace("data-magellan-arrival") + "]"), l = !1;
            o.each(function (t, n) {
                if (n.viewport_offset >= n.top_offset) {
                    var o = a.find("[" + e.add_namespace("data-magellan-arrival") + "]");
                    return o.not(n.arrival).removeClass(i.active_class), n.arrival.addClass(i.active_class), l = !0, !0
                }
            }), l || s.removeClass(i.active_class)
        })
    }, offsets: function (a, e) {
        var n = this, i = a.data(n.attr_name(!0) + "-init"), o = e + i.destination_threshold;
        return a.find("[" + n.add_namespace("data-magellan-arrival") + "]").map(function () {
            var a = t(this).data(n.data_attr("magellan-arrival")), e = t("[" + n.add_namespace("data-magellan-destination") + "=" + a + "]");
            if (e.length > 0) {
                var i = e.offset().top;
                return{destination: e, arrival: t(this), top_offset: i, viewport_offset: o}
            }
        }).sort(function (t, a) {
            return t.top_offset < a.top_offset ? -1 : t.top_offset > a.top_offset ? 1 : 0
        })
    }, data_attr: function (t) {
        return this.namespace.length > 0 ? this.namespace + "-" + t : t
    }, off: function () {
        this.S(this.scope).off(".magellan"), this.S(a).off(".magellan")
    }, reflow: function () {
        var a = this;
        t("[" + a.add_namespace("data-magellan-expedition-clone") + "]", a.scope).remove()
    }}
}(jQuery, this, this.document);