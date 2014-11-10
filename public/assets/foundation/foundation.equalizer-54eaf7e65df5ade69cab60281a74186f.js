!function (t, e) {
    "use strict";
    Foundation.libs.equalizer = {name: "equalizer", version: "5.1.1", settings: {use_tallest: !0, before_height_change: t.noop, after_height_change: t.noop}, init: function (t, e, i) {
        this.bindings(e, i), this.reflow()
    }, events: function () {
        this.S(e).off(".equalizer").on("resize.fndtn.equalizer", function () {
            this.reflow()
        }.bind(this))
    }, equalize: function (e) {
        var i = !1, n = e.find("[" + this.attr_name() + "-watch]"), h = n.first().offset().top, a = e.data(this.attr_name(!0) + "-init");
        if (0 !== n.length && (a.before_height_change(), e.trigger("before-height-change"), n.height("inherit"), n.each(function () {
            var e = t(this);
            e.offset().top !== h && (i = !0)
        }), !i)) {
            var r = n.map(function () {
                return t(this).outerHeight()
            });
            if (a.use_tallest) {
                var s = Math.max.apply(null, r);
                n.height(s)
            } else {
                var o = Math.min.apply(null, r);
                n.height(o)
            }
            a.after_height_change(), e.trigger("after-height-change")
        }
    }, reflow: function () {
        var e = this;
        this.S("[" + this.attr_name() + "]", this.scope).each(function () {
            e.equalize(t(this))
        })
    }}
}(jQuery, this, this.document);