!function (t, e) {
    "use strict";
    Foundation.libs.interchange = {name: "interchange", version: "5.2.0", cache: {}, images_loaded: !1, nodes_loaded: !1, settings: {load_attr: "interchange", named_queries: {"default": Foundation.media_queries.small, small: Foundation.media_queries.small, medium: Foundation.media_queries.medium, large: Foundation.media_queries.large, xlarge: Foundation.media_queries.xlarge, xxlarge: Foundation.media_queries.xxlarge, landscape: "only screen and (orientation: landscape)", portrait: "only screen and (orientation: portrait)", retina: "only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"}, directives: {replace: function (e, a, i) {
        if (/IMG/.test(e[0].nodeName)) {
            var n = e[0].src;
            if (new RegExp(a, "i").test(n))return;
            return e[0].src = a, i(e[0].src)
        }
        var s = e.data(this.data_attr + "-last-path");
        if (s != a) {
            var r = "/^.(.jpg|.jpeg|.png|.gif|.tiff|.bmp)??|#?./";
            return new RegExp(r, "i").test(a) ? (t(e).css("background-image", "url(" + a + ")"), e.data("interchange-last-path", a), i(a)) : t.get(a, function (t) {
                e.html(t), e.data(this.data_attr + "-last-path", a), i()
            })
        }
    }}}, init: function (e, a, i) {
        Foundation.inherit(this, "throttle random_str"), this.data_attr = this.set_data_attr(), t.extend(!0, this.settings, a, i), this.bindings(a, i), this.load("images"), this.load("nodes")
    }, get_media_hash: function () {
        var t = "";
        for (var e in this.settings.named_queries)t += matchMedia(this.settings.named_queries[e]).matches.toString();
        return t
    }, events: function () {
        var a, i = this;
        return t(e).off(".interchange").on("resize.fndtn.interchange", i.throttle(function () {
            var t = i.get_media_hash();
            t !== a && i.resize(), a = t
        }, 50)), this
    }, resize: function () {
        var e = this.cache;
        if (!this.images_loaded || !this.nodes_loaded)return setTimeout(t.proxy(this.resize, this), 50), void 0;
        for (var a in e)if (e.hasOwnProperty(a)) {
            var i = this.results(a, e[a]);
            i && this.settings.directives[i.scenario[1]].call(this, i.el, i.scenario[0], function () {
                if (arguments[0]instanceof Array)var t = arguments[0]; else var t = Array.prototype.slice.call(arguments, 0);
                i.el.trigger(i.scenario[1], t)
            })
        }
    }, results: function (t, e) {
        var a = e.length;
        if (a > 0)for (var i = this.S("[" + this.add_namespace("data-uuid") + '="' + t + '"]'); a--;) {
            var n, s = e[a][2];
            if (n = this.settings.named_queries.hasOwnProperty(s) ? matchMedia(this.settings.named_queries[s]) : matchMedia(s), n.matches)return{el: i, scenario: e[a]}
        }
        return!1
    }, load: function (t, e) {
        return("undefined" == typeof this["cached_" + t] || e) && this["update_" + t](), this["cached_" + t]
    }, update_images: function () {
        var t = this.S("img[" + this.data_attr + "]"), e = t.length, a = e, i = 0, n = this.data_attr;
        for (this.cache = {}, this.cached_images = [], this.images_loaded = 0 === e; a--;) {
            if (i++, t[a]) {
                var s = t[a].getAttribute(n) || "";
                s.length > 0 && this.cached_images.push(t[a])
            }
            i === e && (this.images_loaded = !0, this.enhance("images"))
        }
        return this
    }, update_nodes: function () {
        var t = this.S("[" + this.data_attr + "]").not("img"), e = t.length, a = e, i = 0, n = this.data_attr;
        for (this.cached_nodes = [], this.nodes_loaded = 0 === e; a--;) {
            i++;
            var s = t[a].getAttribute(n) || "";
            s.length > 0 && this.cached_nodes.push(t[a]), i === e && (this.nodes_loaded = !0, this.enhance("nodes"))
        }
        return this
    }, enhance: function (a) {
        for (var i = this["cached_" + a].length; i--;)this.object(t(this["cached_" + a][i]));
        return t(e).trigger("resize")
    }, parse_params: function (t, e, a) {
        return[this.trim(t), this.convert_directive(e), this.trim(a)]
    }, convert_directive: function (t) {
        var e = this.trim(t);
        return e.length > 0 ? e : "replace"
    }, object: function (t) {
        var e = this.parse_data_attr(t), a = [], i = e.length;
        if (i > 0)for (; i--;) {
            var n = e[i].split(/\((.*?)(\))$/);
            if (n.length > 1) {
                var s = n[0].split(","), r = this.parse_params(s[0], s[1], n[1]);
                a.push(r)
            }
        }
        return this.store(t, a)
    }, store: function (t, e) {
        var a = this.random_str(), i = t.data(this.add_namespace("uuid", !0));
        return this.cache[i] ? this.cache[i] : (t.attr(this.add_namespace("data-uuid"), a), this.cache[a] = e)
    }, trim: function (e) {
        return"string" == typeof e ? t.trim(e) : e
    }, set_data_attr: function (t) {
        return t ? this.namespace.length > 0 ? this.namespace + "-" + this.settings.load_attr : this.settings.load_attr : this.namespace.length > 0 ? "data-" + this.namespace + "-" + this.settings.load_attr : "data-" + this.settings.load_attr
    }, parse_data_attr: function (t) {
        for (var e = t.attr(this.attr_name()).split(/\[(.*?)\]/), a = e.length, i = []; a--;)e[a].replace(/[\W\d]+/, "").length > 4 && i.push(e[a]);
        return i
    }, reflow: function () {
        this.load("images", !0), this.load("nodes", !0)
    }}
}(jQuery, this, this.document);