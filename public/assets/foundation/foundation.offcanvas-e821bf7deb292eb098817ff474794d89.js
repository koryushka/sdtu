!function () {
    "use strict";
    Foundation.libs.offcanvas = {name: "offcanvas", version: "5.1.1", settings: {}, init: function () {
        this.events()
    }, events: function () {
        var n = this.S;
        n(this.scope).off(".offcanvas").on("click.fndtn.offcanvas", ".left-off-canvas-toggle",function (f) {
            f.preventDefault(), n(this).closest(".off-canvas-wrap").toggleClass("move-right")
        }).on("click.fndtn.offcanvas", ".exit-off-canvas",function (f) {
            f.preventDefault(), n(".off-canvas-wrap").removeClass("move-right")
        }).on("click.fndtn.offcanvas", ".right-off-canvas-toggle",function (f) {
            f.preventDefault(), n(this).closest(".off-canvas-wrap").toggleClass("move-left")
        }).on("click.fndtn.offcanvas", ".exit-off-canvas", function (f) {
            f.preventDefault(), n(".off-canvas-wrap").removeClass("move-left")
        })
    }, reflow: function () {
    }}
}(jQuery, this, this.document);