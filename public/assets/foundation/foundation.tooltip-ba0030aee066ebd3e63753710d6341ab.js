!function (t, e, o) {
    "use strict";
    Foundation.libs.tooltip = {name: "tooltip", version: "5.1.1", settings: {additional_inheritable_classes: [], tooltip_class: ".tooltip", append_to: "body", touch_close_text: "Tap To Close", disable_for_touch: !1, hover_delay: 200, tip_template: function (t, e) {
        return'<span data-selector="' + t + '" class="' + Foundation.libs.tooltip.settings.tooltip_class.substring(1) + '">' + e + '<span class="nub"></span></span>'
    }}, cache: {}, init: function (t, e, o) {
        Foundation.inherit(this, "random_str"), this.bindings(e, o)
    }, events: function () {
        var e = this, i = e.S;
        Modernizr.touch ? i(o).off(".tooltip").on("click.fndtn.tooltip touchstart.fndtn.tooltip touchend.fndtn.tooltip", "[" + this.attr_name() + "]:not(a)",function (o) {
            var s = t.extend({}, e.settings, e.data_options(i(this)));
            s.disable_for_touch || (o.preventDefault(), i(s.tooltip_class).hide(), e.showOrCreateTip(i(this)))
        }).on("click.fndtn.tooltip touchstart.fndtn.tooltip touchend.fndtn.tooltip", this.settings.tooltip_class, function (t) {
            t.preventDefault(), i(this).fadeOut(150)
        }) : i(o).off(".tooltip").on("mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip", "[" + this.attr_name() + "]", function (t) {
            var o = i(this);
            /enter|over/i.test(t.type) ? this.timer = setTimeout(function () {
                e.showOrCreateTip(o)
            }.bind(this), e.settings.hover_delay) : ("mouseout" === t.type || "mouseleave" === t.type) && (clearTimeout(this.timer), e.hide(o))
        })
    }, showOrCreateTip: function (t) {
        var e = this.getTip(t);
        return e && e.length > 0 ? this.show(t) : this.create(t)
    }, getTip: function (t) {
        var e = this.selector(t), o = null;
        return e && (o = this.S('span[data-selector="' + e + '"]' + this.settings.tooltip_class)), "object" == typeof o ? o : !1
    }, selector: function (t) {
        var e = t.attr("id"), o = t.attr(this.attr_name()) || t.attr("data-selector");
        return(e && e.length < 1 || !e) && "string" != typeof o && (o = "tooltip" + this.random_str(6), t.attr("data-selector", o)), e && e.length > 0 ? e : o
    }, create: function (e) {
        var o = t(this.settings.tip_template(this.selector(e), t("<div></div>").html(e.attr("title")).html())), i = this.inheritable_classes(e);
        o.addClass(i).appendTo(this.settings.append_to), Modernizr.touch && o.append('<span class="tap-to-close">' + this.settings.touch_close_text + "</span>"), e.removeAttr("title").attr("title", ""), this.show(e)
    }, reposition: function (t, e, o) {
        var i, s, n, a, r;
        if (e.css("visibility", "hidden").show(), i = t.data("width"), s = e.children(".nub"), n = s.outerHeight(), a = s.outerHeight(), this.small() ? e.css({width: "100%"}) : e.css({width: i ? i : "auto"}), r = function (t, e, o, i, s) {
            return t.css({top: e ? e : "auto", bottom: i ? i : "auto", left: s ? s : "auto", right: o ? o : "auto"}).end()
        }, r(e, t.offset().top + t.outerHeight() + 10, "auto", "auto", t.offset().left), this.small())r(e, t.offset().top + t.outerHeight() + 10, "auto", "auto", 12.5, this.S(this.scope).width()), e.addClass("tip-override"), r(s, -n, "auto", "auto", t.offset().left + 10); else {
            var l = t.offset().left;
            Foundation.rtl && (l = t.offset().left + t.outerWidth() - e.outerWidth()), r(e, t.offset().top + t.outerHeight() + 10, "auto", "auto", l), e.removeClass("tip-override"), s.removeAttr("style"), o && o.indexOf("tip-top") > -1 ? r(e, t.offset().top - e.outerHeight() - 10, "auto", "auto", l).removeClass("tip-override") : o && o.indexOf("tip-left") > -1 ? r(e, t.offset().top + t.outerHeight() / 2 - e.outerHeight() / 2, "auto", "auto", t.offset().left - e.outerWidth() - n).removeClass("tip-override") : o && o.indexOf("tip-right") > -1 && r(e, t.offset().top + t.outerHeight() / 2 - e.outerHeight() / 2, "auto", "auto", t.offset().left + t.outerWidth() + n).removeClass("tip-override")
        }
        e.css("visibility", "visible").hide()
    }, small: function () {
        return matchMedia(Foundation.media_queries.small).matches
    }, inheritable_classes: function (e) {
        var o = ["tip-top", "tip-left", "tip-bottom", "tip-right", "radius", "round"].concat(this.settings.additional_inheritable_classes), i = e.attr("class"), s = i ? t.map(i.split(" "),function (e) {
            return-1 !== t.inArray(e, o) ? e : void 0
        }).join(" ") : "";
        return t.trim(s)
    }, show: function (t) {
        var e = this.getTip(t);
        return this.reposition(t, e, t.attr("class")), e.fadeIn(150)
    }, hide: function (t) {
        var e = this.getTip(t);
        return e.fadeOut(150)
    }, reload: function () {
        var e = t(this);
        return e.data("fndtn-tooltips") ? e.foundationTooltips("destroy").foundationTooltips("init") : e.foundationTooltips("init")
    }, off: function () {
        this.S(this.scope).off(".fndtn.tooltip"), this.S(this.settings.tooltip_class).each(function (e) {
            t("[" + this.attr_name() + "]").get(e).attr("title", t(this).text())
        }).remove()
    }, reflow: function () {
    }}
}(jQuery, this, this.document);