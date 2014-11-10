!function (t, a, s) {
    "use strict";
    Foundation.libs.topbar = {name: "topbar", version: "5.2.0", settings: {index: 0, sticky_class: "sticky", custom_back_text: !0, back_text: "Back", is_hover: !0, mobile_show_parent_link: !1, scrolltop: !0, sticky_on: "all"}, init: function (a, s, e) {
        Foundation.inherit(this, "add_custom_rule register_media throttle");
        var i = this;
        i.register_media("topbar", "foundation-mq-topbar"), this.bindings(s, e), i.S("[" + this.attr_name() + "]", this.scope).each(function () {
            {
                var a = t(this), s = a.data(i.attr_name(!0) + "-init");
                i.S("section", this), a.children().filter("ul").first()
            }
            a.data("index", 0);
            var e = a.parent();
            e.hasClass("fixed") || i.is_sticky(a, e, s) ? (i.settings.sticky_class = s.sticky_class, i.settings.sticky_topbar = a, a.data("height", e.outerHeight()), a.data("stickyoffset", e.offset().top)) : a.data("height", a.outerHeight()), s.assembled || i.assemble(a), s.is_hover ? i.S(".has-dropdown", a).addClass("not-click") : i.S(".has-dropdown", a).removeClass("not-click"), i.add_custom_rule(".f-topbar-fixed { padding-top: " + a.data("height") + "px }"), e.hasClass("fixed") && i.S("body").addClass("f-topbar-fixed")
        })
    }, is_sticky: function (t, a, s) {
        var e = a.hasClass(s.sticky_class);
        return e && "all" === s.sticky_on ? !0 : e && this.small() && "small" === s.sticky_on ? !0 : e && this.medium() && "medium" === s.sticky_on ? !0 : e && this.large() && "large" === s.sticky_on ? !0 : !1
    }, toggle: function (s) {
        var e = this;
        if (s)var i = e.S(s).closest("[" + this.attr_name() + "]"); else var i = e.S("[" + this.attr_name() + "]");
        var n = i.data(this.attr_name(!0) + "-init"), o = e.S("section, .section", i);
        e.breakpoint() && (e.rtl ? (o.css({right: "0%"}), t(">.name", o).css({right: "100%"})) : (o.css({left: "0%"}), t(">.name", o).css({left: "100%"})), e.S("li.moved", o).removeClass("moved"), i.data("index", 0), i.toggleClass("expanded").css("height", "")), n.scrolltop ? i.hasClass("expanded") ? i.parent().hasClass("fixed") && (n.scrolltop ? (i.parent().removeClass("fixed"), i.addClass("fixed"), e.S("body").removeClass("f-topbar-fixed"), a.scrollTo(0, 0)) : i.parent().removeClass("expanded")) : i.hasClass("fixed") && (i.parent().addClass("fixed"), i.removeClass("fixed"), e.S("body").addClass("f-topbar-fixed")) : (e.is_sticky(i, i.parent(), n) && i.parent().addClass("fixed"), i.parent().hasClass("fixed") && (i.hasClass("expanded") ? (i.addClass("fixed"), i.parent().addClass("expanded"), e.S("body").addClass("f-topbar-fixed")) : (i.removeClass("fixed"), i.parent().removeClass("expanded"), e.update_sticky_positioning())))
    }, timer: null, events: function () {
        var s = this, e = this.S;
        e(this.scope).off(".topbar").on("click.fndtn.topbar", "[" + this.attr_name() + "] .toggle-topbar",function (t) {
            t.preventDefault(), s.toggle(this)
        }).on("click.fndtn.topbar", '.top-bar .top-bar-section li a[href^="#"],[' + this.attr_name() + '] .top-bar-section li a[href^="#"]',function () {
            var a = t(this).closest("li");
            !s.breakpoint() || a.hasClass("back") || a.hasClass("has-dropdown") || s.toggle()
        }).on("click.fndtn.topbar", "[" + this.attr_name() + "] li.has-dropdown",function (t) {
            var a = e(this), i = e(t.target), n = a.closest("[" + s.attr_name() + "]"), o = n.data(s.attr_name(!0) + "-init");
            return i.data("revealId") ? (s.toggle(), void 0) : (s.breakpoint() || (!o.is_hover || Modernizr.touch) && (t.stopImmediatePropagation(), a.hasClass("hover") ? (a.removeClass("hover").find("li").removeClass("hover"), a.parents("li.hover").removeClass("hover")) : (a.addClass("hover"), "A" === i[0].nodeName && i.parent().hasClass("has-dropdown") && t.preventDefault())), void 0)
        }).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown>a", function (t) {
            if (s.breakpoint()) {
                t.preventDefault();
                var a = e(this), i = a.closest("[" + s.attr_name() + "]"), n = i.find("section, .section"), o = (a.next(".dropdown").outerHeight(), a.closest("li"));
                i.data("index", i.data("index") + 1), o.addClass("moved"), s.rtl ? (n.css({right: -(100 * i.data("index")) + "%"}), n.find(">.name").css({right: 100 * i.data("index") + "%"})) : (n.css({left: -(100 * i.data("index")) + "%"}), n.find(">.name").css({left: 100 * i.data("index") + "%"})), i.css("height", a.siblings("ul").outerHeight(!0) + i.data("height"))
            }
        }), e(a).off(".topbar").on("resize.fndtn.topbar", s.throttle(function () {
            s.resize.call(s)
        }, 50)).trigger("resize"), e("body").off(".topbar").on("click.fndtn.topbar touchstart.fndtn.topbar", function (t) {
            var a = e(t.target).closest("li").closest("li.hover");
            a.length > 0 || e("[" + s.attr_name() + "] li").removeClass("hover")
        }), e(this.scope).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown .back", function (t) {
            t.preventDefault();
            var a = e(this), i = a.closest("[" + s.attr_name() + "]"), n = i.find("section, .section"), o = (i.data(s.attr_name(!0) + "-init"), a.closest("li.moved")), r = o.parent();
            i.data("index", i.data("index") - 1), s.rtl ? (n.css({right: -(100 * i.data("index")) + "%"}), n.find(">.name").css({right: 100 * i.data("index") + "%"})) : (n.css({left: -(100 * i.data("index")) + "%"}), n.find(">.name").css({left: 100 * i.data("index") + "%"})), 0 === i.data("index") ? i.css("height", "") : i.css("height", r.outerHeight(!0) + i.data("height")), setTimeout(function () {
                o.removeClass("moved")
            }, 300)
        })
    }, resize: function () {
        var t = this;
        t.S("[" + this.attr_name() + "]").each(function () {
            var a, e = t.S(this), i = e.data(t.attr_name(!0) + "-init"), n = e.parent("." + t.settings.sticky_class);
            if (!t.breakpoint()) {
                var o = e.hasClass("expanded");
                e.css("height", "").removeClass("expanded").find("li").removeClass("hover"), o && t.toggle(e)
            }
            t.is_sticky(e, n, i) && (n.hasClass("fixed") ? (n.removeClass("fixed"), a = n.offset().top, t.S(s.body).hasClass("f-topbar-fixed") && (a -= e.data("height")), e.data("stickyoffset", a), n.addClass("fixed")) : (a = n.offset().top, e.data("stickyoffset", a)))
        })
    }, breakpoint: function () {
        return!matchMedia(Foundation.media_queries.topbar).matches
    }, small: function () {
        return matchMedia(Foundation.media_queries.small).matches
    }, medium: function () {
        return matchMedia(Foundation.media_queries.medium).matches
    }, large: function () {
        return matchMedia(Foundation.media_queries.large).matches
    }, assemble: function (a) {
        {
            var s = this, e = a.data(this.attr_name(!0) + "-init"), i = s.S("section", a);
            t(this).children().filter("ul").first()
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
        if (e.settings.sticky_topbar && e.is_sticky(this.settings.sticky_topbar, this.settings.sticky_topbar.parent(), this.settings)) {
            var i = this.settings.sticky_topbar.data("stickyoffset");
            e.S(t).hasClass("expanded") || (s.scrollTop() > i ? e.S(t).hasClass("fixed") || (e.S(t).addClass("fixed"), e.S("body").addClass("f-topbar-fixed")) : s.scrollTop() <= i && e.S(t).hasClass("fixed") && (e.S(t).removeClass("fixed"), e.S("body").removeClass("f-topbar-fixed")))
        }
    }, off: function () {
        this.S(this.scope).off(".fndtn.topbar"), this.S(a).off(".fndtn.topbar")
    }, reflow: function () {
    }}
}(jQuery, this, this.document);