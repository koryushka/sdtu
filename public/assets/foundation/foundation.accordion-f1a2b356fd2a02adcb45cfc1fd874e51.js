!function (t) {
    "use strict";
    Foundation.libs.accordion = {name: "accordion", version: "5.1.1", settings: {active_class: "active", toggleable: !0}, init: function (t, s, a) {
        this.bindings(s, a)
    }, events: function () {
        var s = this, a = this.S;
        a(this.scope).off(".fndtn.accordion").on("click.fndtn.accordion", "[" + this.attr_name() + "] > dd > a", function (i) {
            var e = a(this).closest("[" + s.attr_name() + "]"), n = a("#" + this.href.split("#")[1]), c = a("dd > .content", e), o = t("> dd", e), l = e.data(s.attr_name(!0) + "-init"), d = a("dd > .content." + l.active_class, e), r = a("dd." + l.active_class, e);
            return i.preventDefault(), d[0] == n[0] && l.toggleable ? (r.toggleClass(l.active_class, !1), n.toggleClass(l.active_class, !1)) : (c.removeClass(l.active_class), o.removeClass(l.active_class), n.addClass(l.active_class).parent().addClass(l.active_class), void 0)
        })
    }, off: function () {
    }, reflow: function () {
    }}
}(jQuery, this, this.document);