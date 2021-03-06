!function (t, a, s) {
    "use strict";
    Foundation.libs.topbar = {name: "topbar", version: "5.1.1", settings: {index: 0, sticky_class: "sticky", custom_back_text: !0, back_text: "Back", is_hover: !0, mobile_show_parent_link: !1, scrolltop: !0}, init: function (a, s, e) {
        Foundation.inherit(this, "add_custom_rule register_media throttle");
        var i = this;
        i.register_media("topbar", "foundation-mq-topbar"), this.bindings(s, e), i.S("[" + this.attr_name() + "]", this.scope).each(function () {
            {
                var a = i.S(this), s = a.data(i.attr_name(!0) + "-init");
                i.S("section", this), t("> ul", this).first()
            }
            a.data("index", 0);
            var e = a.parent();
            e.hasClass("fixed") || e.hasClass(s.sticky_class) ? (i.settings.sticky_class = s.sticky_class, i.settings.sticky_topbar = a, a.data("height", e.outerHeight()), a.data("stickyoffset", e.offset().top)) : a.data("height", a.outerHeight()), s.assembled || i.assemble(a), s.is_hover ? i.S(".has-dropdown", a).addClass("not-click") : i.S(".has-dropdown", a).removeClass("not-click"), i.add_custom_rule(".f-topbar-fixed { padding-top: " + a.data("height") + "px }"), e.hasClass("fixed") && i.S("body").addClass("f-topbar-fixed")
        })
    }, toggle: function (s) {
        var e = this;
        if (s)var i = e.S(s).closest("[" + this.attr_name() + "]"); else var i = e.S("[" + this.attr_name() + "]");
        var n = i.data(this.attr_name(!0) + "-init"), o = e.S("section, .section", i);
        e.breakpoint() && (e.rtl ? (o.css({right: "0%"}), t(">.name", o).css({right: "100%"})) : (o.css({left: "0%"}), t(">.name", o).css({left: "100%"})), e.S("li.moved", o).removeClass("moved"), i.data("index", 0), i.toggleClass("expanded").css("height", "")), n.scrolltop ? i.hasClass("expanded") ? i.parent().hasClass("fixed") && (n.scrolltop ? (i.parent().removeClass("fixed"), i.addClass("fixed"), e.S("body").removeClass("f-topbar-fixed"), a.scrollTo(0, 0)) : i.parent().removeClass("expanded")) : i.hasClass("fixed") && (i.parent().addClass("fixed"), i.removeClass("fixed"), e.S("body").addClass("f-topbar-fixed")) : (i.parent().hasClass(e.settings.sticky_class) && i.parent().addClass("fixed"), i.parent().hasClass("fixed") && (i.hasClass("expanded") ? (i.addClass("fixed"), i.parent().addClass("expanded"), e.S("body").addClass("f-topbar-fixed")) : (i.removeClass("fixed"), i.parent().removeClass("expanded"), e.update_sticky_positioning())))
    }, timer: null, events: function () {
        var t = this, s = this.S;
        s(this.scope).off(".topbar").on("click.fndtn.topbar", "[" + this.attr_name() + "] .toggle-topbar",function (a) {
            a.preventDefault(), t.toggle(this)
        }).on("click.fndtn.topbar", "[" + this.attr_name() + "] li.has-dropdown",function (a) {
            var e = s(this), i = s(a.target), n = e.closest("[" + t.attr_name() + "]"), o = n.data(t.attr_name(!0) + "-init");
            return i.data("revealId") ? (t.toggle(), void 0) : (t.breakpoint() || (!o.is_hover || Modernizr.touch) && (a.stopImmediatePropagation(), e.hasClass("hover") ? (e.removeClass("hover").find("li").removeClass("hover"), e.parents("li.hover").removeClass("hover")) : (e.addClass("hover"), "A" === i[0].nodeName && i.parent().hasClass("has-dropdown") && a.preventDefault())), void 0)
        }).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown>a", function (a) {
            if (t.breakpoint()) {
                a.preventDefault();
                var e = s(this), i = e.closest("[" + t.attr_name() + "]"), n = i.find("section, .section"), o = (e.next(".dropdown").outerHeight(), e.closest("li"));
                i.data("index", i.data("index") + 1), o.addClass("moved"), t.rtl ? (n.css({right: -(100 * i.data("index")) + "%"}), n.find(">.name").css({right: 100 * i.data("index") + "%"})) : (n.css({left: -(100 * i.data("index")) + "%"}), n.find(">.name").css({left: 100 * i.data("index") + "%"})), i.css("height", e.siblings("ul").outerHeight(!0) + i.data("height"))
            }
        }), s(a).off(".topbar").on("resize.fndtn.topbar", t.throttle(function () {
            t.resize.call(t)
        }, 50)).trigger("resize"), s("body").off(".topbar").on("click.fndtn.topbar touchstart.fndtn.topbar", function (a) {
            var e = s(a.target).closest("li").closest("li.hover");
            e.length > 0 || s("[" + t.attr_name() + "] li").removeClass("hover")
        }), s(this.scope).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown .back", function (a) {
            a.preventDefault();
            var e = s(this), i = e.closest("[" + t.attr_name() + "]"), n = i.find("section, .section"), o = (i.data(t.attr_name(!0) + "-init"), e.closest("li.moved")), d = o.parent();
            i.data("index", i.data("index") - 1), t.rtl ? (n.css({right: -(100 * i.data("index")) + "%"}), n.find(">.name").css({right: 100 * i.data("index") + "%"})) : (n.css({left: -(100 * i.data("index")) + "%"}), n.find(">.name").css({left: 100 * i.data("index") + "%"})), 0 === i.data("index") ? i.css("height", "") : i.css("height", d.outerHeight(!0) + i.data("height")), setTimeout(function () {
                o.removeClass("moved")
            }, 300)
        })
    }, resize: function () {
        var t = this;
        t.S("[" + this.attr_name() + "]").each(function () {
            var a, e = t.S(this), i = (e.data(t.attr_name(!0) + "-init"), e.parent("." + t.settings.sticky_class));
            if (!t.breakpoint()) {
                var n = e.hasClass("expanded");
                e.css("height", "").removeClass("expanded").find("li").removeClass("hover"), n && t.toggle(e)
            }
            i.length > 0 && (i.hasClass("fixed") ? (i.removeClass("fixed"), a = i.offset().top, t.S(s.body).hasClass("f-topbar-fixed") && (a -= e.data("height")), e.data("stickyoffset", a), i.addClass("fixed")) : (a = i.offset().top, e.data("stickyoffset", a)))
        })
    }, breakpoint: function () {
        return!matchMedia(Foundation.media_queries.topbar).matches
    }, assemble: function (a) {
        {
            var s = this, e = a.data(this.attr_name(!0) + "-init"), i = s.S("section", a);
            t("> ul", a).first()
        }
        i.detach(), s.S(".has-dropdown>a", i).each(function () {
            var a = s.S(this), i = a.siblings(".dropdown"), n = a.attr("href");
            if (!i.find(".title.back").length) {
                if (e.mobile_show_parent_link && n && n.length > 1)var o = t('<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li><li><a class="parent-link js-generated" href="' + n + '">' + a.text() + "</a></li>"); else var o = t('<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li>');
                1 == e.custom_back_text ? t("h5>a", o).html(e.back_text) : t("h5>a", o).html("&laquo; " + a.html()), i.prepend(o)
            }
        }), i.appendTo(a), this.sticky(), this.assembled(a)
    }, assembled: function (a) {
        a.data(this.attr_name(!0), t.extend({}, a.data(this.attr_name(!0)), {assembled: !0}))
    }, height: function (a) {
        var s = 0, e = this;
        return t("> li", a).each(function () {
            s += e.S(this).outerHeight(!0)
        }), s
    }, sticky: function () {
        var t = (this.S(a), this);
        this.S(a).on("scroll", function () {
            t.update_sticky_positioning()
        })
    }, update_sticky_positioning: function () {
        var t = "." + this.settings.sticky_class, s = this.S(a), e = this;
        if (e.S(t).length > 0) {
            var i = this.settings.sticky_topbar.data("stickyoffset");
            e.S(t).hasClass("expanded") || (s.scrollTop() > i ? e.S(t).hasClass("fixed") || (e.S(t).addClass("fixed"), e.S("body").addClass("f-topbar-fixed")) : s.scrollTop() <= i && e.S(t).hasClass("fixed") && (e.S(t).removeClass("fixed"), e.S("body").removeClass("f-topbar-fixed")))
        }
    }, off: function () {
        this.S(this.scope).off(".fndtn.topbar"), this.S(a).off(".fndtn.topbar")
    }, reflow: function () {
    }}
}(jQuery, this, this.document);