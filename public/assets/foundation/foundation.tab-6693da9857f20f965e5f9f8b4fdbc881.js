!function () {
    "use strict";
    Foundation.libs.tab = {name: "tab", version: "5.1.1", settings: {active_class: "active", callback: function () {
    }}, init: function (t, a, s) {
        this.bindings(a, s)
    }, events: function () {
        var t = this, a = this.S;
        a(this.scope).off(".tab").on("click.fndtn.tab", "[" + this.attr_name() + "] > dd > a", function (s) {
            s.preventDefault(), s.stopPropagation();
            var n = a(this).parent(), i = n.closest("[" + t.attr_name() + "]"), e = a("#" + this.href.split("#")[1]), c = n.siblings(), o = i.data(t.attr_name(!0) + "-init");
            a(this).data(t.data_attr("tab-content")) && (e = a("#" + a(this).data(t.data_attr("tab-content")).split("#")[1])), n.addClass(o.active_class).triggerHandler("opened"), c.removeClass(o.active_class), e.siblings().removeClass(o.active_class).end().addClass(o.active_class), o.callback(n), i.triggerHandler("toggled", [n])
        })
    }, data_attr: function (t) {
        return this.namespace.length > 0 ? this.namespace + "-" + t : t
    }, off: function () {
    }, reflow: function () {
    }}
}(jQuery, this, this.document);