!function (t) {
    "use strict";
    Foundation.libs.alert = {name: "alert", version: "5.1.1", settings: {animation: "fadeOut", speed: 300, callback: function () {
    }}, init: function (t, n, i) {
        this.bindings(n, i)
    }, events: function () {
        var n = this, i = this.S;
        t(this.scope).off(".alert").on("click.fndtn.alert", "[" + this.attr_name() + "] a.close", function (t) {
            var e = i(this).closest("[" + n.attr_name() + "]"), a = e.data(n.attr_name(!0) + "-init") || n.settings;
            t.preventDefault(), e[a.animation](a.speed, function () {
                i(this).trigger("closed").remove(), a.callback()
            })
        })
    }, reflow: function () {
    }}
}(jQuery, this, this.document);