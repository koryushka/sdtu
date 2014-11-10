!function (n, a) {
    "use strict";
    Foundation.libs.offcanvas = {name: "offcanvas", version: "5.2.0", settings: {}, init: function () {
        this.events()
    }, events: function () {
        var t = this.S;
        t(this.scope).off(".offcanvas").on("click.fndtn.offcanvas", ".left-off-canvas-toggle",function (n) {
            n.preventDefault(), t(this).closest(".off-canvas-wrap").toggleClass("move-right")
        }).on("click.fndtn.offcanvas", ".exit-off-canvas",function (n) {
            n.preventDefault(), t(".off-canvas-wrap").removeClass("move-right")
        }).on("click.fndtn.offcanvas", ".left-off-canvas-menu a",function (o) {
            o.preventDefault();
            var f = n(this).attr("href");
            t(".off-canvas-wrap").on("transitionend webkitTransitionEnd oTransitionEnd", function () {
                a.location = f, t(".off-canvas-wrap").off("transitionend webkitTransitionEnd oTransitionEnd")
            }), t(".off-canvas-wrap").removeClass("move-right")
        }).on("click.fndtn.offcanvas", ".right-off-canvas-toggle",function (n) {
            n.preventDefault(), t(this).closest(".off-canvas-wrap").toggleClass("move-left")
        }).on("click.fndtn.offcanvas", ".exit-off-canvas",function (n) {
            n.preventDefault(), t(".off-canvas-wrap").removeClass("move-left")
        }).on("click.fndtn.offcanvas", ".right-off-canvas-menu a", function (o) {
            o.preventDefault();
            var f = n(this).attr("href");
            t(".off-canvas-wrap").on("transitionend webkitTransitionEnd oTransitionEnd", function () {
                a.location = f, t(".off-canvas-wrap").off("transitionend webkitTransitionEnd oTransitionEnd")
            }), t(".off-canvas-wrap").removeClass("move-left")
        })
    }, reflow: function () {
    }}
}(jQuery, this, this.document);