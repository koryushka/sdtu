!function (t) {
    "use strict";
    Foundation.libs.accordion = {name: "accordion", version: "5.2.0", settings: {active_class: "active", toggleable: !0}, init: function (t, s, a) {
        this.bindings(s, a)
    }, events: function () {
        var s = this, a = this.S;
        a(this.scope).off(".fndtn.accordion").on("click.fndtn.accordion", "[" + this.attr_name() + "] dd > a", function (i) {
            var e = a(this).closest("[" + s.attr_name() + "]"), c = a("#" + this.href.split("#")[1]), n = a("dd > .content", e), o = t("> dd", e), l = e.data(s.attr_name(!0) + "-init"), d = a("dd > .content." + l.active_class, e), r = a("dd." + l.active_class, e);
            if (i.preventDefault(), a(this).closest("dl").is(e)) {
                if (d[0] == c[0] && l.toggleable)return r.toggleClass(l.active_class, !1), c.toggleClass(l.active_class, !1);
                n.removeClass(l.active_class), o.removeClass(l.active_class), c.addClass(l.active_class).parent().addClass(l.active_class)
            }
        })
    }, off: function () {
    }, reflow: function () {
    }}
}(jQuery, this, this.document);