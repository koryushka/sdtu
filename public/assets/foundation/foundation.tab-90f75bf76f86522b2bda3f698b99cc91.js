!function (t, a, e, n) {
    "use strict";
    Foundation.libs.tab = {name: "tab", version: "5.2.0", settings: {active_class: "active", callback: function () {
    }, deep_linking: !1, scroll_to_content: !0}, default_tab_hashes: [], init: function (t, a, e) {
        var n = this, s = this.S;
        this.bindings(a, e), this.handle_location_hash_change(), s("[" + this.attr_name() + "] > dd.active > a", this.scope).each(function () {
            n.default_tab_hashes.push(this.hash)
        })
    }, events: function () {
        var t = this, e = this.S;
        e(this.scope).off(".tab").on("click.fndtn.tab", "[" + this.attr_name() + "] > dd > a", function (a) {
            a.preventDefault(), a.stopPropagation(), t.toggle_active_tab(e(this).parent())
        }), e(a).on("hashchange.fndtn.tab", function (a) {
            a.preventDefault(), t.handle_location_hash_change()
        })
    }, handle_location_hash_change: function () {
        var a = this, e = this.S;
        e("[" + this.attr_name() + "]", this.scope).each(function () {
            var s = e(this).data(a.attr_name(!0) + "-init");
            if (s.deep_linking) {
                var i = a.scope.location.hash;
                if ("" != i) {
                    var o = e(i);
                    if (o.hasClass("content") && o.parent().hasClass("tab-content"))a.toggle_active_tab(t("[" + a.attr_name() + "] > dd > a[href=" + i + "]").parent()); else {
                        var c = o.closest(".content").attr("id");
                        c != n && a.toggle_active_tab(t("[" + a.attr_name() + "] > dd > a[href=#" + c + "]").parent(), i)
                    }
                } else for (var h in a.default_tab_hashes)a.toggle_active_tab(t("[" + a.attr_name() + "] > dd > a[href=" + a.default_tab_hashes[h] + "]").parent())
            }
        })
    }, toggle_active_tab: function (e, s) {
        var i = this.S, o = e.closest("[" + this.attr_name() + "]"), c = e.children("a").first(), h = "#" + c.attr("href").split("#")[1], l = i(h), r = e.siblings(), _ = o.data(this.attr_name(!0) + "-init");
        if (i(this).data(this.data_attr("tab-content")) && (h = "#" + i(this).data(this.data_attr("tab-content")).split("#")[1], l = i(h)), _.deep_linking) {
            var d = t("body,html").scrollTop();
            a.location.hash = s != n ? s : h, _.scroll_to_content ? s == n || s == h ? e.parent()[0].scrollIntoView() : i(h)[0].scrollIntoView() : (s == n || s == h) && t("body,html").scrollTop(d)
        }
        e.addClass(_.active_class).triggerHandler("opened"), r.removeClass(_.active_class), l.siblings().removeClass(_.active_class).end().addClass(_.active_class), _.callback(e), o.triggerHandler("toggled", [e])
    }, data_attr: function (t) {
        return this.namespace.length > 0 ? this.namespace + "-" + t : t
    }, off: function () {
    }, reflow: function () {
    }}
}(jQuery, this, this.document);