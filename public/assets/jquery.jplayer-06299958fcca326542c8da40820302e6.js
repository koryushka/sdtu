!function (t, e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : t.jQuery ? e(t.jQuery) : e(t.Zepto)
}(this, function (t, e) {
    t.fn.jPlayer = function (s) {
        var i = "jPlayer", a = "string" == typeof s, n = Array.prototype.slice.call(arguments, 1), o = this;
        return s = !a && n.length ? t.extend.apply(null, [!0, s].concat(n)) : s, a && "_" === s.charAt(0) ? o : (a ? this.each(function () {
            var a = t(this).data(i), r = a && t.isFunction(a[s]) ? a[s].apply(a, n) : a;
            return r !== a && r !== e ? (o = r, !1) : void 0
        }) : this.each(function () {
            var e = t(this).data(i);
            e ? e.option(s || {}) : t(this).data(i, new t.jPlayer(s, this))
        }), o)
    }, t.jPlayer = function (e, s) {
        if (arguments.length) {
            this.element = t(s), this.options = t.extend(!0, {}, this.options, e);
            var i = this;
            this.element.bind("remove.jPlayer", function () {
                i.destroy()
            }), this._init()
        }
    }, "function" != typeof t.fn.stop && (t.fn.stop = function () {
    }), t.jPlayer.emulateMethods = "load play pause", t.jPlayer.emulateStatus = "src readyState networkState currentTime duration paused ended playbackRate", t.jPlayer.emulateOptions = "muted volume", t.jPlayer.reservedEvent = "ready flashreset resize repeat error warning", t.jPlayer.event = {}, t.each(["ready", "flashreset", "resize", "repeat", "click", "error", "warning", "loadstart", "progress", "suspend", "abort", "emptied", "stalled", "play", "pause", "loadedmetadata", "loadeddata", "waiting", "playing", "canplay", "canplaythrough", "seeking", "seeked", "timeupdate", "ended", "ratechange", "durationchange", "volumechange"], function () {
        t.jPlayer.event[this] = "jPlayer_" + this
    }), t.jPlayer.htmlEvent = ["loadstart", "abort", "emptied", "stalled", "loadedmetadata", "loadeddata", "canplay", "canplaythrough", "ratechange"], t.jPlayer.pause = function () {
        t.each(t.jPlayer.prototype.instances, function (t, e) {
            e.data("jPlayer").status.srcSet && e.jPlayer("pause")
        })
    }, t.jPlayer.timeFormat = {showHour: !1, showMin: !0, showSec: !0, padHour: !1, padMin: !0, padSec: !0, sepHour: ":", sepMin: ":", sepSec: ""};
    var s = function () {
        this.init()
    };
    s.prototype = {init: function () {
        this.options = {timeFormat: t.jPlayer.timeFormat}
    }, time: function (t) {
        t = t && "number" == typeof t ? t : 0;
        var e = new Date(1e3 * t), s = e.getUTCHours(), i = this.options.timeFormat.showHour ? e.getUTCMinutes() : e.getUTCMinutes() + 60 * s, a = this.options.timeFormat.showMin ? e.getUTCSeconds() : e.getUTCSeconds() + 60 * i, n = this.options.timeFormat.padHour && 10 > s ? "0" + s : s, o = this.options.timeFormat.padMin && 10 > i ? "0" + i : i, r = this.options.timeFormat.padSec && 10 > a ? "0" + a : a, l = "";
        return l += this.options.timeFormat.showHour ? n + this.options.timeFormat.sepHour : "", l += this.options.timeFormat.showMin ? o + this.options.timeFormat.sepMin : "", l += this.options.timeFormat.showSec ? r + this.options.timeFormat.sepSec : ""
    }};
    var i = new s;
    t.jPlayer.convertTime = function (t) {
        return i.time(t)
    }, t.jPlayer.uaBrowser = function (t) {
        var e = t.toLowerCase(), s = /(webkit)[ \/]([\w.]+)/, i = /(opera)(?:.*version)?[ \/]([\w.]+)/, a = /(msie) ([\w.]+)/, n = /(mozilla)(?:.*? rv:([\w.]+))?/, o = s.exec(e) || i.exec(e) || a.exec(e) || e.indexOf("compatible") < 0 && n.exec(e) || [];
        return{browser: o[1] || "", version: o[2] || "0"}
    }, t.jPlayer.uaPlatform = function (t) {
        var e = t.toLowerCase(), s = /(ipad|iphone|ipod|android|blackberry|playbook|windows ce|webos)/, i = /(ipad|playbook)/, a = /(android)/, n = /(mobile)/, o = s.exec(e) || [], r = i.exec(e) || !n.exec(e) && a.exec(e) || [];
        return o[1] && (o[1] = o[1].replace(/\s/g, "_")), {platform: o[1] || "", tablet: r[1] || ""}
    }, t.jPlayer.browser = {}, t.jPlayer.platform = {};
    var a = t.jPlayer.uaBrowser(navigator.userAgent);
    a.browser && (t.jPlayer.browser[a.browser] = !0, t.jPlayer.browser.version = a.version);
    var n = t.jPlayer.uaPlatform(navigator.userAgent);
    n.platform && (t.jPlayer.platform[n.platform] = !0, t.jPlayer.platform.mobile = !n.tablet, t.jPlayer.platform.tablet = !!n.tablet), t.jPlayer.getDocMode = function () {
        var e;
        return t.jPlayer.browser.msie && (document.documentMode ? e = document.documentMode : (e = 5, document.compatMode && "CSS1Compat" === document.compatMode && (e = 7))), e
    }, t.jPlayer.browser.documentMode = t.jPlayer.getDocMode(), t.jPlayer.nativeFeatures = {init: function () {
        var t, e, s, i = document, a = i.createElement("video"), n = {w3c: ["fullscreenEnabled", "fullscreenElement", "requestFullscreen", "exitFullscreen", "fullscreenchange", "fullscreenerror"], moz: ["mozFullScreenEnabled", "mozFullScreenElement", "mozRequestFullScreen", "mozCancelFullScreen", "mozfullscreenchange", "mozfullscreenerror"], webkit: ["", "webkitCurrentFullScreenElement", "webkitRequestFullScreen", "webkitCancelFullScreen", "webkitfullscreenchange", ""], webkitVideo: ["webkitSupportsFullscreen", "webkitDisplayingFullscreen", "webkitEnterFullscreen", "webkitExitFullscreen", "", ""]}, o = ["w3c", "moz", "webkit", "webkitVideo"];
        for (this.fullscreen = t = {support: {w3c: !!i[n.w3c[0]], moz: !!i[n.moz[0]], webkit: "function" == typeof i[n.webkit[3]], webkitVideo: "function" == typeof a[n.webkitVideo[2]]}, used: {}}, e = 0, s = o.length; s > e; e++) {
            var r = o[e];
            if (t.support[r]) {
                t.spec = r, t.used[r] = !0;
                break
            }
        }
        if (t.spec) {
            var l = n[t.spec];
            t.api = {fullscreenEnabled: !0, fullscreenElement: function (t) {
                return t = t ? t : i, t[l[1]]
            }, requestFullscreen: function (t) {
                return t[l[2]]()
            }, exitFullscreen: function (t) {
                return t = t ? t : i, t[l[3]]()
            }}, t.event = {fullscreenchange: l[4], fullscreenerror: l[5]}
        } else t.api = {fullscreenEnabled: !1, fullscreenElement: function () {
            return null
        }, requestFullscreen: function () {
        }, exitFullscreen: function () {
        }}, t.event = {}
    }}, t.jPlayer.nativeFeatures.init(), t.jPlayer.focus = null, t.jPlayer.keyIgnoreElementNames = "INPUT TEXTAREA";
    var o = function (e) {
        var s, i = t.jPlayer.focus;
        i && (t.each(t.jPlayer.keyIgnoreElementNames.split(/\s+/g), function (t, i) {
            return e.target.nodeName.toUpperCase() === i.toUpperCase() ? (s = !0, !1) : void 0
        }), s || t.each(i.options.keyBindings, function (s, a) {
            return a && e.which === a.key && t.isFunction(a.fn) ? (e.preventDefault(), a.fn(i), !1) : void 0
        }))
    };
    t.jPlayer.keys = function (e) {
        var s = "keydown.jPlayer";
        t(document.documentElement).unbind(s), e && t(document.documentElement).bind(s, o)
    }, t.jPlayer.keys(!0), t.jPlayer.prototype = {count: 0, version: {script: "2.4.1", needFlash: "2.4.1", flash: "unknown"}, options: {swfPath: "js", solution: "html, flash", supplied: "mp3", preload: "metadata", volume: .8, muted: !1, wmode: "opaque", backgroundColor: "#000000", cssSelectorAncestor: "#jp_container_1", cssSelector: {videoPlay: ".jp-video-play", play: ".jp-play", pause: ".jp-pause", stop: ".jp-stop", seekBar: ".jp-seek-bar", playBar: ".jp-play-bar", mute: ".jp-mute", unmute: ".jp-unmute", volumeBar: ".jp-volume-bar", volumeBarValue: ".jp-volume-bar-value", volumeMax: ".jp-volume-max", currentTime: ".jp-current-time", duration: ".jp-duration", fullScreen: ".jp-full-screen", restoreScreen: ".jp-restore-screen", repeat: ".jp-repeat", repeatOff: ".jp-repeat-off", gui: ".jp-gui", noSolution: ".jp-no-solution"}, smoothPlayBar: !1, fullScreen: !1, fullWindow: !1, autohide: {restored: !1, full: !0, fadeIn: 200, fadeOut: 600, hold: 1e3}, loop: !1, repeat: function (e) {
        e.jPlayer.options.loop ? t(this).unbind(".jPlayerRepeat").bind(t.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function () {
            t(this).jPlayer("play")
        }) : t(this).unbind(".jPlayerRepeat")
    }, nativeVideoControls: {}, noFullWindow: {msie: /msie [0-6]\./, ipad: /ipad.*?os [0-4]\./, iphone: /iphone/, ipod: /ipod/, android_pad: /android [0-3]\.(?!.*?mobile)/, android_phone: /android.*?mobile/, blackberry: /blackberry/, windows_ce: /windows ce/, iemobile: /iemobile/, webos: /webos/}, noVolume: {ipad: /ipad/, iphone: /iphone/, ipod: /ipod/, android_pad: /android(?!.*?mobile)/, android_phone: /android.*?mobile/, blackberry: /blackberry/, windows_ce: /windows ce/, iemobile: /iemobile/, webos: /webos/, playbook: /playbook/}, timeFormat: {}, keyEnabled: !1, audioFullScreen: !1, keyBindings: {play: {key: 32, fn: function (t) {
        t.status.paused ? t.play() : t.pause()
    }}, fullScreen: {key: 13, fn: function (t) {
        (t.status.video || t.options.audioFullScreen) && t._setOption("fullScreen", !t.options.fullScreen)
    }}, muted: {key: 8, fn: function (t) {
        t._muted(!t.options.muted)
    }}, volumeUp: {key: 38, fn: function (t) {
        t.volume(t.options.volume + .1)
    }}, volumeDown: {key: 40, fn: function (t) {
        t.volume(t.options.volume - .1)
    }}}, verticalVolume: !1, idPrefix: "jp", noConflict: "jQuery", emulateHtml: !1, errorAlerts: !1, warningAlerts: !1}, optionsAudio: {size: {width: "0px", height: "0px", cssClass: ""}, sizeFull: {width: "0px", height: "0px", cssClass: ""}}, optionsVideo: {size: {width: "480px", height: "270px", cssClass: "jp-video-270p"}, sizeFull: {width: "100%", height: "100%", cssClass: "jp-video-full"}}, instances: {}, status: {src: "", media: {}, paused: !0, format: {}, formatType: "", waitForPlay: !0, waitForLoad: !0, srcSet: !1, video: !1, seekPercent: 0, currentPercentRelative: 0, currentPercentAbsolute: 0, currentTime: 0, duration: 0, videoWidth: 0, videoHeight: 0, readyState: 0, networkState: 0, playbackRate: 1, ended: 0}, internal: {ready: !1}, solution: {html: !0, flash: !0}, format: {mp3: {codec: 'audio/mpeg; codecs="mp3"', flashCanPlay: !0, media: "audio"}, m4a: {codec: 'audio/mp4; codecs="mp4a.40.2"', flashCanPlay: !0, media: "audio"}, oga: {codec: 'audio/ogg; codecs="vorbis"', flashCanPlay: !1, media: "audio"}, wav: {codec: 'audio/wav; codecs="1"', flashCanPlay: !1, media: "audio"}, webma: {codec: 'audio/webm; codecs="vorbis"', flashCanPlay: !1, media: "audio"}, fla: {codec: "audio/x-flv", flashCanPlay: !0, media: "audio"}, rtmpa: {codec: 'audio/rtmp; codecs="rtmp"', flashCanPlay: !0, media: "audio"}, m4v: {codec: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"', flashCanPlay: !0, media: "video"}, ogv: {codec: 'video/ogg; codecs="theora, vorbis"', flashCanPlay: !1, media: "video"}, webmv: {codec: 'video/webm; codecs="vorbis, vp8"', flashCanPlay: !1, media: "video"}, flv: {codec: "video/x-flv", flashCanPlay: !0, media: "video"}, rtmpv: {codec: 'video/rtmp; codecs="rtmp"', flashCanPlay: !0, media: "video"}}, _init: function () {
        var s = this;
        if (this.element.empty(), this.status = t.extend({}, this.status), this.internal = t.extend({}, this.internal), this.options.timeFormat = t.extend({}, t.jPlayer.timeFormat, this.options.timeFormat), this.internal.cmdsIgnored = t.jPlayer.platform.ipad || t.jPlayer.platform.iphone || t.jPlayer.platform.ipod, this.internal.domNode = this.element.get(0), this.options.keyEnabled && !t.jPlayer.focus && (t.jPlayer.focus = this), this.formats = [], this.solutions = [], this.require = {}, this.htmlElement = {}, this.html = {}, this.html.audio = {}, this.html.video = {}, this.flash = {}, this.css = {}, this.css.cs = {}, this.css.jq = {}, this.ancestorJq = [], this.options.volume = this._limitValue(this.options.volume, 0, 1), t.each(this.options.supplied.toLowerCase().split(","), function (e, i) {
            var a = i.replace(/^\s+|\s+$/g, "");
            if (s.format[a]) {
                var n = !1;
                t.each(s.formats, function (t, e) {
                    return a === e ? (n = !0, !1) : void 0
                }), n || s.formats.push(a)
            }
        }), t.each(this.options.solution.toLowerCase().split(","), function (e, i) {
            var a = i.replace(/^\s+|\s+$/g, "");
            if (s.solution[a]) {
                var n = !1;
                t.each(s.solutions, function (t, e) {
                    return a === e ? (n = !0, !1) : void 0
                }), n || s.solutions.push(a)
            }
        }), this.internal.instance = "jp_" + this.count, this.instances[this.internal.instance] = this.element, this.element.attr("id") || this.element.attr("id", this.options.idPrefix + "_jplayer_" + this.count), this.internal.self = t.extend({}, {id: this.element.attr("id"), jq: this.element}), this.internal.audio = t.extend({}, {id: this.options.idPrefix + "_audio_" + this.count, jq: e}), this.internal.video = t.extend({}, {id: this.options.idPrefix + "_video_" + this.count, jq: e}), this.internal.flash = t.extend({}, {id: this.options.idPrefix + "_flash_" + this.count, jq: e, swf: this.options.swfPath + (".swf" !== this.options.swfPath.toLowerCase().slice(-4) ? (this.options.swfPath && "/" !== this.options.swfPath.slice(-1) ? "/" : "") + "Jplayer.swf" : "")}), this.internal.poster = t.extend({}, {id: this.options.idPrefix + "_poster_" + this.count, jq: e}), t.each(t.jPlayer.event, function (t, i) {
            s.options[t] !== e && (s.element.bind(i + ".jPlayer", s.options[t]), s.options[t] = e)
        }), this.require.audio = !1, this.require.video = !1, t.each(this.formats, function (t, e) {
            s.require[s.format[e].media] = !0
        }), this.options = this.require.video ? t.extend(!0, {}, this.optionsVideo, this.options) : t.extend(!0, {}, this.optionsAudio, this.options), this._setSize(), this.status.nativeVideoControls = this._uaBlocklist(this.options.nativeVideoControls), this.status.noFullWindow = this._uaBlocklist(this.options.noFullWindow), this.status.noVolume = this._uaBlocklist(this.options.noVolume), t.jPlayer.nativeFeatures.fullscreen.api.fullscreenEnabled && this._fullscreenAddEventListeners(), this._restrictNativeVideoControls(), this.htmlElement.poster = document.createElement("img"), this.htmlElement.poster.id = this.internal.poster.id, this.htmlElement.poster.onload = function () {
            (!s.status.video || s.status.waitForPlay) && s.internal.poster.jq.show()
        }, this.element.append(this.htmlElement.poster), this.internal.poster.jq = t("#" + this.internal.poster.id), this.internal.poster.jq.css({width: this.status.width, height: this.status.height}), this.internal.poster.jq.hide(), this.internal.poster.jq.bind("click.jPlayer", function () {
            s._trigger(t.jPlayer.event.click)
        }), this.html.audio.available = !1, this.require.audio && (this.htmlElement.audio = document.createElement("audio"), this.htmlElement.audio.id = this.internal.audio.id, this.html.audio.available = !!this.htmlElement.audio.canPlayType && this._testCanPlayType(this.htmlElement.audio)), this.html.video.available = !1, this.require.video && (this.htmlElement.video = document.createElement("video"), this.htmlElement.video.id = this.internal.video.id, this.html.video.available = !!this.htmlElement.video.canPlayType && this._testCanPlayType(this.htmlElement.video)), this.flash.available = this._checkForFlash(10.1), this.html.canPlay = {}, this.flash.canPlay = {}, t.each(this.formats, function (t, e) {
            s.html.canPlay[e] = s.html[s.format[e].media].available && "" !== s.htmlElement[s.format[e].media].canPlayType(s.format[e].codec), s.flash.canPlay[e] = s.format[e].flashCanPlay && s.flash.available
        }), this.html.desired = !1, this.flash.desired = !1, t.each(this.solutions, function (e, i) {
            if (0 === e)s[i].desired = !0; else {
                var a = !1, n = !1;
                t.each(s.formats, function (t, e) {
                    s[s.solutions[0]].canPlay[e] && ("video" === s.format[e].media ? n = !0 : a = !0)
                }), s[i].desired = s.require.audio && !a || s.require.video && !n
            }
        }), this.html.support = {}, this.flash.support = {}, t.each(this.formats, function (t, e) {
            s.html.support[e] = s.html.canPlay[e] && s.html.desired, s.flash.support[e] = s.flash.canPlay[e] && s.flash.desired
        }), this.html.used = !1, this.flash.used = !1, t.each(this.solutions, function (e, i) {
            t.each(s.formats, function (t, e) {
                return s[i].support[e] ? (s[i].used = !0, !1) : void 0
            })
        }), this._resetActive(), this._resetGate(), this._cssSelectorAncestor(this.options.cssSelectorAncestor), this.html.used || this.flash.used ? this.css.jq.noSolution.length && this.css.jq.noSolution.hide() : (this._error({type: t.jPlayer.error.NO_SOLUTION, context: "{solution:'" + this.options.solution + "', supplied:'" + this.options.supplied + "'}", message: t.jPlayer.errorMsg.NO_SOLUTION, hint: t.jPlayer.errorHint.NO_SOLUTION}), this.css.jq.noSolution.length && this.css.jq.noSolution.show()), this.flash.used) {
            var i, a = "jQuery=" + encodeURI(this.options.noConflict) + "&id=" + encodeURI(this.internal.self.id) + "&vol=" + this.options.volume + "&muted=" + this.options.muted;
            if (t.jPlayer.browser.msie && (Number(t.jPlayer.browser.version) < 9 || t.jPlayer.browser.documentMode < 9)) {
                var n = '<object id="' + this.internal.flash.id + '" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="0" height="0" tabindex="-1"></object>', o = ['<param name="movie" value="' + this.internal.flash.swf + '" />', '<param name="FlashVars" value="' + a + '" />', '<param name="allowScriptAccess" value="always" />', '<param name="bgcolor" value="' + this.options.backgroundColor + '" />', '<param name="wmode" value="' + this.options.wmode + '" />'];
                i = document.createElement(n);
                for (var r = 0; r < o.length; r++)i.appendChild(document.createElement(o[r]))
            } else {
                var l = function (t, e, s) {
                    var i = document.createElement("param");
                    i.setAttribute("name", e), i.setAttribute("value", s), t.appendChild(i)
                };
                i = document.createElement("object"), i.setAttribute("id", this.internal.flash.id), i.setAttribute("name", this.internal.flash.id), i.setAttribute("data", this.internal.flash.swf), i.setAttribute("type", "application/x-shockwave-flash"), i.setAttribute("width", "1"), i.setAttribute("height", "1"), i.setAttribute("tabindex", "-1"), l(i, "flashvars", a), l(i, "allowscriptaccess", "always"), l(i, "bgcolor", this.options.backgroundColor), l(i, "wmode", this.options.wmode)
            }
            this.element.append(i), this.internal.flash.jq = t(i)
        }
        this.html.used && (this.html.audio.available && (this._addHtmlEventListeners(this.htmlElement.audio, this.html.audio), this.element.append(this.htmlElement.audio), this.internal.audio.jq = t("#" + this.internal.audio.id)), this.html.video.available && (this._addHtmlEventListeners(this.htmlElement.video, this.html.video), this.element.append(this.htmlElement.video), this.internal.video.jq = t("#" + this.internal.video.id), this.status.nativeVideoControls ? this.internal.video.jq.css({width: this.status.width, height: this.status.height}) : this.internal.video.jq.css({width: "0px", height: "0px"}), this.internal.video.jq.bind("click.jPlayer", function () {
            s._trigger(t.jPlayer.event.click)
        }))), this.options.emulateHtml && this._emulateHtmlBridge(), this.html.used && !this.flash.used && setTimeout(function () {
            s.internal.ready = !0, s.version.flash = "n/a", s._trigger(t.jPlayer.event.repeat), s._trigger(t.jPlayer.event.ready)
        }, 100), this._updateNativeVideoControls(), this.css.jq.videoPlay.length && this.css.jq.videoPlay.hide(), t.jPlayer.prototype.count++
    }, destroy: function () {
        this.clearMedia(), this._removeUiClass(), this.css.jq.currentTime.length && this.css.jq.currentTime.text(""), this.css.jq.duration.length && this.css.jq.duration.text(""), t.each(this.css.jq, function (t, e) {
            e.length && e.unbind(".jPlayer")
        }), this.internal.poster.jq.unbind(".jPlayer"), this.internal.video.jq && this.internal.video.jq.unbind(".jPlayer"), this._fullscreenRemoveEventListeners(), this === t.jPlayer.focus && (t.jPlayer.focus = null), this.options.emulateHtml && this._destroyHtmlBridge(), this.element.removeData("jPlayer"), this.element.unbind(".jPlayer"), this.element.empty(), delete this.instances[this.internal.instance]
    }, enable: function () {
    }, disable: function () {
    }, _testCanPlayType: function (t) {
        try {
            return t.canPlayType(this.format.mp3.codec), !0
        } catch (e) {
            return!1
        }
    }, _uaBlocklist: function (e) {
        var s = navigator.userAgent.toLowerCase(), i = !1;
        return t.each(e, function (t, e) {
            return e && e.test(s) ? (i = !0, !1) : void 0
        }), i
    }, _restrictNativeVideoControls: function () {
        this.require.audio && this.status.nativeVideoControls && (this.status.nativeVideoControls = !1, this.status.noFullWindow = !0)
    }, _updateNativeVideoControls: function () {
        this.html.video.available && this.html.used && (this.htmlElement.video.controls = this.status.nativeVideoControls, this._updateAutohide(), this.status.nativeVideoControls && this.require.video ? (this.internal.poster.jq.hide(), this.internal.video.jq.css({width: this.status.width, height: this.status.height})) : this.status.waitForPlay && this.status.video && (this.internal.poster.jq.show(), this.internal.video.jq.css({width: "0px", height: "0px"})))
    }, _addHtmlEventListeners: function (e, s) {
        var i = this;
        e.preload = this.options.preload, e.muted = this.options.muted, e.volume = this.options.volume, e.addEventListener("progress", function () {
            s.gate && (i.internal.cmdsIgnored && this.readyState > 0 && (i.internal.cmdsIgnored = !1), i._getHtmlStatus(e), i._updateInterface(), i._trigger(t.jPlayer.event.progress))
        }, !1), e.addEventListener("timeupdate", function () {
            s.gate && (i._getHtmlStatus(e), i._updateInterface(), i._trigger(t.jPlayer.event.timeupdate))
        }, !1), e.addEventListener("durationchange", function () {
            s.gate && (i._getHtmlStatus(e), i._updateInterface(), i._trigger(t.jPlayer.event.durationchange))
        }, !1), e.addEventListener("play", function () {
            s.gate && (i._updateButtons(!0), i._html_checkWaitForPlay(), i._trigger(t.jPlayer.event.play))
        }, !1), e.addEventListener("playing", function () {
            s.gate && (i._updateButtons(!0), i._seeked(), i._trigger(t.jPlayer.event.playing))
        }, !1), e.addEventListener("pause", function () {
            s.gate && (i._updateButtons(!1), i._trigger(t.jPlayer.event.pause))
        }, !1), e.addEventListener("waiting", function () {
            s.gate && (i._seeking(), i._trigger(t.jPlayer.event.waiting))
        }, !1), e.addEventListener("seeking", function () {
            s.gate && (i._seeking(), i._trigger(t.jPlayer.event.seeking))
        }, !1), e.addEventListener("seeked", function () {
            s.gate && (i._seeked(), i._trigger(t.jPlayer.event.seeked))
        }, !1), e.addEventListener("volumechange", function () {
            s.gate && (i.options.volume = e.volume, i.options.muted = e.muted, i._updateMute(), i._updateVolume(), i._trigger(t.jPlayer.event.volumechange))
        }, !1), e.addEventListener("suspend", function () {
            s.gate && (i._seeked(), i._trigger(t.jPlayer.event.suspend))
        }, !1), e.addEventListener("ended", function () {
            s.gate && (t.jPlayer.browser.webkit || (i.htmlElement.media.currentTime = 0), i.htmlElement.media.pause(), i._updateButtons(!1), i._getHtmlStatus(e, !0), i._updateInterface(), i._trigger(t.jPlayer.event.ended))
        }, !1), e.addEventListener("error", function () {
            s.gate && (i._updateButtons(!1), i._seeked(), i.status.srcSet && (clearTimeout(i.internal.htmlDlyCmdId), i.status.waitForLoad = !0, i.status.waitForPlay = !0, i.status.video && !i.status.nativeVideoControls && i.internal.video.jq.css({width: "0px", height: "0px"}), i._validString(i.status.media.poster) && !i.status.nativeVideoControls && i.internal.poster.jq.show(), i.css.jq.videoPlay.length && i.css.jq.videoPlay.show(), i._error({type: t.jPlayer.error.URL, context: i.status.src, message: t.jPlayer.errorMsg.URL, hint: t.jPlayer.errorHint.URL})))
        }, !1), t.each(t.jPlayer.htmlEvent, function (a, n) {
            e.addEventListener(this, function () {
                s.gate && i._trigger(t.jPlayer.event[n])
            }, !1)
        })
    }, _getHtmlStatus: function (t, e) {
        var s = 0, i = 0, a = 0, n = 0;
        isFinite(t.duration) && (this.status.duration = t.duration), s = t.currentTime, i = this.status.duration > 0 ? 100 * s / this.status.duration : 0, "object" == typeof t.seekable && t.seekable.length > 0 ? (a = this.status.duration > 0 ? 100 * t.seekable.end(t.seekable.length - 1) / this.status.duration : 100, n = this.status.duration > 0 ? 100 * t.currentTime / t.seekable.end(t.seekable.length - 1) : 0) : (a = 100, n = i), e && (s = 0, n = 0, i = 0), this.status.seekPercent = a, this.status.currentPercentRelative = n, this.status.currentPercentAbsolute = i, this.status.currentTime = s, this.status.videoWidth = t.videoWidth, this.status.videoHeight = t.videoHeight, this.status.readyState = t.readyState, this.status.networkState = t.networkState, this.status.playbackRate = t.playbackRate, this.status.ended = t.ended
    }, _resetStatus: function () {
        this.status = t.extend({}, this.status, t.jPlayer.prototype.status)
    }, _trigger: function (e, s, i) {
        var a = t.Event(e);
        a.jPlayer = {}, a.jPlayer.version = t.extend({}, this.version), a.jPlayer.options = t.extend(!0, {}, this.options), a.jPlayer.status = t.extend(!0, {}, this.status), a.jPlayer.html = t.extend(!0, {}, this.html), a.jPlayer.flash = t.extend(!0, {}, this.flash), s && (a.jPlayer.error = t.extend({}, s)), i && (a.jPlayer.warning = t.extend({}, i)), this.element.trigger(a)
    }, jPlayerFlashEvent: function (e, s) {
        if (e === t.jPlayer.event.ready)if (this.internal.ready) {
            if (this.flash.gate) {
                if (this.status.srcSet) {
                    var i = this.status.currentTime, a = this.status.paused;
                    this.setMedia(this.status.media), i > 0 && (a ? this.pause(i) : this.play(i))
                }
                this._trigger(t.jPlayer.event.flashreset)
            }
        } else this.internal.ready = !0, this.internal.flash.jq.css({width: "0px", height: "0px"}), this.version.flash = s.version, this.version.needFlash !== this.version.flash && this._error({type: t.jPlayer.error.VERSION, context: this.version.flash, message: t.jPlayer.errorMsg.VERSION + this.version.flash, hint: t.jPlayer.errorHint.VERSION}), this._trigger(t.jPlayer.event.repeat), this._trigger(e);
        if (this.flash.gate)switch (e) {
            case t.jPlayer.event.progress:
                this._getFlashStatus(s), this._updateInterface(), this._trigger(e);
                break;
            case t.jPlayer.event.timeupdate:
                this._getFlashStatus(s), this._updateInterface(), this._trigger(e);
                break;
            case t.jPlayer.event.play:
                this._seeked(), this._updateButtons(!0), this._trigger(e);
                break;
            case t.jPlayer.event.pause:
                this._updateButtons(!1), this._trigger(e);
                break;
            case t.jPlayer.event.ended:
                this._updateButtons(!1), this._trigger(e);
                break;
            case t.jPlayer.event.click:
                this._trigger(e);
                break;
            case t.jPlayer.event.error:
                this.status.waitForLoad = !0, this.status.waitForPlay = !0, this.status.video && this.internal.flash.jq.css({width: "0px", height: "0px"}), this._validString(this.status.media.poster) && this.internal.poster.jq.show(), this.css.jq.videoPlay.length && this.status.video && this.css.jq.videoPlay.show(), this.status.video ? this._flash_setVideo(this.status.media) : this._flash_setAudio(this.status.media), this._updateButtons(!1), this._error({type: t.jPlayer.error.URL, context: s.src, message: t.jPlayer.errorMsg.URL, hint: t.jPlayer.errorHint.URL});
                break;
            case t.jPlayer.event.seeking:
                this._seeking(), this._trigger(e);
                break;
            case t.jPlayer.event.seeked:
                this._seeked(), this._trigger(e);
                break;
            case t.jPlayer.event.ready:
                break;
            default:
                this._trigger(e)
        }
        return!1
    }, _getFlashStatus: function (t) {
        this.status.seekPercent = t.seekPercent, this.status.currentPercentRelative = t.currentPercentRelative, this.status.currentPercentAbsolute = t.currentPercentAbsolute, this.status.currentTime = t.currentTime, this.status.duration = t.duration, this.status.videoWidth = t.videoWidth, this.status.videoHeight = t.videoHeight, this.status.readyState = 4, this.status.networkState = 0, this.status.playbackRate = 1, this.status.ended = !1
    }, _updateButtons: function (t) {
        t === e ? t = !this.status.paused : this.status.paused = !t, this.css.jq.play.length && this.css.jq.pause.length && (t ? (this.css.jq.play.hide(), this.css.jq.pause.show()) : (this.css.jq.play.show(), this.css.jq.pause.hide())), this.css.jq.restoreScreen.length && this.css.jq.fullScreen.length && (this.status.noFullWindow ? (this.css.jq.fullScreen.hide(), this.css.jq.restoreScreen.hide()) : this.options.fullWindow ? (this.css.jq.fullScreen.hide(), this.css.jq.restoreScreen.show()) : (this.css.jq.fullScreen.show(), this.css.jq.restoreScreen.hide())), this.css.jq.repeat.length && this.css.jq.repeatOff.length && (this.options.loop ? (this.css.jq.repeat.hide(), this.css.jq.repeatOff.show()) : (this.css.jq.repeat.show(), this.css.jq.repeatOff.hide()))
    }, _updateInterface: function () {
        this.css.jq.seekBar.length && this.css.jq.seekBar.width(this.status.seekPercent + "%"), this.css.jq.playBar.length && (this.options.smoothPlayBar ? this.css.jq.playBar.stop().animate({width: this.status.currentPercentAbsolute + "%"}, 250, "linear") : this.css.jq.playBar.width(this.status.currentPercentRelative + "%")), this.css.jq.currentTime.length && this.css.jq.currentTime.text(this._convertTime(this.status.currentTime)), this.css.jq.duration.length && this.css.jq.duration.text(this._convertTime(this.status.duration))
    }, _convertTime: s.prototype.time, _seeking: function () {
        this.css.jq.seekBar.length && this.css.jq.seekBar.addClass("jp-seeking-bg")
    }, _seeked: function () {
        this.css.jq.seekBar.length && this.css.jq.seekBar.removeClass("jp-seeking-bg")
    }, _resetGate: function () {
        this.html.audio.gate = !1, this.html.video.gate = !1, this.flash.gate = !1
    }, _resetActive: function () {
        this.html.active = !1, this.flash.active = !1
    }, setMedia: function (e) {
        var s = this, i = !1, a = this.status.media.poster !== e.poster;
        this._resetMedia(), this._resetGate(), this._resetActive(), t.each(this.formats, function (a, n) {
            var o = "video" === s.format[n].media;
            return t.each(s.solutions, function (t, a) {
                if (s[a].support[n] && s._validString(e[n])) {
                    var r = "html" === a;
                    return o ? (r ? (s.html.video.gate = !0, s._html_setVideo(e), s.html.active = !0) : (s.flash.gate = !0, s._flash_setVideo(e), s.flash.active = !0), s.css.jq.videoPlay.length && s.css.jq.videoPlay.show(), s.status.video = !0) : (r ? (s.html.audio.gate = !0, s._html_setAudio(e), s.html.active = !0) : (s.flash.gate = !0, s._flash_setAudio(e), s.flash.active = !0), s.css.jq.videoPlay.length && s.css.jq.videoPlay.hide(), s.status.video = !1), i = !0, !1
                }
            }), i ? !1 : void 0
        }), i ? (this.status.nativeVideoControls && this.html.video.gate || this._validString(e.poster) && (a ? this.htmlElement.poster.src = e.poster : this.internal.poster.jq.show()), this.status.srcSet = !0, this.status.media = t.extend({}, e), this._updateButtons(!1), this._updateInterface()) : this._error({type: t.jPlayer.error.NO_SUPPORT, context: "{supplied:'" + this.options.supplied + "'}", message: t.jPlayer.errorMsg.NO_SUPPORT, hint: t.jPlayer.errorHint.NO_SUPPORT})
    }, _resetMedia: function () {
        this._resetStatus(), this._updateButtons(!1), this._updateInterface(), this._seeked(), this.internal.poster.jq.hide(), clearTimeout(this.internal.htmlDlyCmdId), this.html.active ? this._html_resetMedia() : this.flash.active && this._flash_resetMedia()
    }, clearMedia: function () {
        this._resetMedia(), this.html.active ? this._html_clearMedia() : this.flash.active && this._flash_clearMedia(), this._resetGate(), this._resetActive()
    }, load: function () {
        this.status.srcSet ? this.html.active ? this._html_load() : this.flash.active && this._flash_load() : this._urlNotSetError("load")
    }, focus: function () {
        this.options.keyEnabled && (t.jPlayer.focus = this)
    }, play: function (t) {
        t = "number" == typeof t ? t : 0 / 0, this.status.srcSet ? (this.focus(), this.html.active ? this._html_play(t) : this.flash.active && this._flash_play(t)) : this._urlNotSetError("play")
    }, videoPlay: function () {
        this.play()
    }, pause: function (t) {
        t = "number" == typeof t ? t : 0 / 0, this.status.srcSet ? this.html.active ? this._html_pause(t) : this.flash.active && this._flash_pause(t) : this._urlNotSetError("pause")
    }, pauseOthers: function () {
        var e = this;
        t.each(this.instances, function (t, s) {
            e.element !== s && s.data("jPlayer").status.srcSet && s.jPlayer("pause")
        })
    }, stop: function () {
        this.status.srcSet ? this.html.active ? this._html_pause(0) : this.flash.active && this._flash_pause(0) : this._urlNotSetError("stop")
    }, playHead: function (t) {
        t = this._limitValue(t, 0, 100), this.status.srcSet ? this.html.active ? this._html_playHead(t) : this.flash.active && this._flash_playHead(t) : this._urlNotSetError("playHead")
    }, _muted: function (e) {
        this.options.muted = e, this.html.used && this._html_mute(e), this.flash.used && this._flash_mute(e), this.html.video.gate || this.html.audio.gate || (this._updateMute(e), this._updateVolume(this.options.volume), this._trigger(t.jPlayer.event.volumechange))
    }, mute: function (t) {
        t = t === e ? !0 : !!t, this._muted(t)
    }, unmute: function (t) {
        t = t === e ? !0 : !!t, this._muted(!t)
    }, _updateMute: function (t) {
        t === e && (t = this.options.muted), this.css.jq.mute.length && this.css.jq.unmute.length && (this.status.noVolume ? (this.css.jq.mute.hide(), this.css.jq.unmute.hide()) : t ? (this.css.jq.mute.hide(), this.css.jq.unmute.show()) : (this.css.jq.mute.show(), this.css.jq.unmute.hide()))
    }, volume: function (e) {
        e = this._limitValue(e, 0, 1), this.options.volume = e, this.html.used && this._html_volume(e), this.flash.used && this._flash_volume(e), this.html.video.gate || this.html.audio.gate || (this._updateVolume(e), this._trigger(t.jPlayer.event.volumechange))
    }, volumeBar: function (e) {
        if (this.css.jq.volumeBar.length) {
            var s = t(e.currentTarget), i = s.offset(), a = e.pageX - i.left, n = s.width(), o = s.height() - e.pageY + i.top, r = s.height();
            this.options.verticalVolume ? this.volume(o / r) : this.volume(a / n)
        }
        this.options.muted && this._muted(!1)
    }, volumeBarValue: function () {
    }, _updateVolume: function (t) {
        t === e && (t = this.options.volume), t = this.options.muted ? 0 : t, this.status.noVolume ? (this.css.jq.volumeBar.length && this.css.jq.volumeBar.hide(), this.css.jq.volumeBarValue.length && this.css.jq.volumeBarValue.hide(), this.css.jq.volumeMax.length && this.css.jq.volumeMax.hide()) : (this.css.jq.volumeBar.length && this.css.jq.volumeBar.show(), this.css.jq.volumeBarValue.length && (this.css.jq.volumeBarValue.show(), this.css.jq.volumeBarValue[this.options.verticalVolume ? "height" : "width"](100 * t + "%")), this.css.jq.volumeMax.length && this.css.jq.volumeMax.show())
    }, volumeMax: function () {
        this.volume(1), this.options.muted && this._muted(!1)
    }, _cssSelectorAncestor: function (e) {
        var s = this;
        this.options.cssSelectorAncestor = e, this._removeUiClass(), this.ancestorJq = e ? t(e) : [], e && 1 !== this.ancestorJq.length && this._warning({type: t.jPlayer.warning.CSS_SELECTOR_COUNT, context: e, message: t.jPlayer.warningMsg.CSS_SELECTOR_COUNT + this.ancestorJq.length + " found for cssSelectorAncestor.", hint: t.jPlayer.warningHint.CSS_SELECTOR_COUNT}), this._addUiClass(), t.each(this.options.cssSelector, function (t, e) {
            s._cssSelector(t, e)
        }), this._updateInterface(), this._updateButtons(), this._updateAutohide(), this._updateVolume(), this._updateMute()
    }, _cssSelector: function (e, s) {
        var i = this;
        if ("string" == typeof s)if (t.jPlayer.prototype.options.cssSelector[e]) {
            if (this.css.jq[e] && this.css.jq[e].length && this.css.jq[e].unbind(".jPlayer"), this.options.cssSelector[e] = s, this.css.cs[e] = this.options.cssSelectorAncestor + " " + s, this.css.jq[e] = s ? t(this.css.cs[e]) : [], this.css.jq[e].length) {
                var a = function (s) {
                    s.preventDefault(), i[e](s), t(this).blur()
                };
                this.css.jq[e].bind("click.jPlayer", a)
            }
            s && 1 !== this.css.jq[e].length && this._warning({type: t.jPlayer.warning.CSS_SELECTOR_COUNT, context: this.css.cs[e], message: t.jPlayer.warningMsg.CSS_SELECTOR_COUNT + this.css.jq[e].length + " found for " + e + " method.", hint: t.jPlayer.warningHint.CSS_SELECTOR_COUNT})
        } else this._warning({type: t.jPlayer.warning.CSS_SELECTOR_METHOD, context: e, message: t.jPlayer.warningMsg.CSS_SELECTOR_METHOD, hint: t.jPlayer.warningHint.CSS_SELECTOR_METHOD}); else this._warning({type: t.jPlayer.warning.CSS_SELECTOR_STRING, context: s, message: t.jPlayer.warningMsg.CSS_SELECTOR_STRING, hint: t.jPlayer.warningHint.CSS_SELECTOR_STRING})
    }, seekBar: function (e) {
        if (this.css.jq.seekBar.length) {
            var s = t(e.currentTarget), i = s.offset(), a = e.pageX - i.left, n = s.width(), o = 100 * a / n;
            this.playHead(o)
        }
    }, playBar: function () {
    }, repeat: function () {
        this._loop(!0)
    }, repeatOff: function () {
        this._loop(!1)
    }, _loop: function (e) {
        this.options.loop !== e && (this.options.loop = e, this._updateButtons(), this._trigger(t.jPlayer.event.repeat))
    }, currentTime: function () {
    }, duration: function () {
    }, gui: function () {
    }, noSolution: function () {
    }, option: function (s, i) {
        var a = s;
        if (0 === arguments.length)return t.extend(!0, {}, this.options);
        if ("string" == typeof s) {
            var n = s.split(".");
            if (i === e) {
                for (var o = t.extend(!0, {}, this.options), r = 0; r < n.length; r++) {
                    if (o[n[r]] === e)return this._warning({type: t.jPlayer.warning.OPTION_KEY, context: s, message: t.jPlayer.warningMsg.OPTION_KEY, hint: t.jPlayer.warningHint.OPTION_KEY}), e;
                    o = o[n[r]]
                }
                return o
            }
            a = {};
            for (var l = a, h = 0; h < n.length; h++)h < n.length - 1 ? (l[n[h]] = {}, l = l[n[h]]) : l[n[h]] = i
        }
        return this._setOptions(a), this
    }, _setOptions: function (e) {
        var s = this;
        return t.each(e, function (t, e) {
            s._setOption(t, e)
        }), this
    }, _setOption: function (e, s) {
        var i = this;
        switch (e) {
            case"volume":
                this.volume(s);
                break;
            case"muted":
                this._muted(s);
                break;
            case"cssSelectorAncestor":
                this._cssSelectorAncestor(s);
                break;
            case"cssSelector":
                t.each(s, function (t, e) {
                    i._cssSelector(t, e)
                });
                break;
            case"fullScreen":
                if (this.options[e] !== s) {
                    var a = t.jPlayer.nativeFeatures.fullscreen.used.webkitVideo;
                    (!a || a && !this.status.waitForPlay) && (a || (this.options[e] = s), s ? this._requestFullscreen() : this._exitFullscreen(), a || this._setOption("fullWindow", s))
                }
                break;
            case"fullWindow":
                this.options[e] !== s && (this._removeUiClass(), this.options[e] = s, this._refreshSize());
                break;
            case"size":
                this.options.fullWindow || this.options[e].cssClass === s.cssClass || this._removeUiClass(), this.options[e] = t.extend({}, this.options[e], s), this._refreshSize();
                break;
            case"sizeFull":
                this.options.fullWindow && this.options[e].cssClass !== s.cssClass && this._removeUiClass(), this.options[e] = t.extend({}, this.options[e], s), this._refreshSize();
                break;
            case"autohide":
                this.options[e] = t.extend({}, this.options[e], s), this._updateAutohide();
                break;
            case"loop":
                this._loop(s);
                break;
            case"nativeVideoControls":
                this.options[e] = t.extend({}, this.options[e], s), this.status.nativeVideoControls = this._uaBlocklist(this.options.nativeVideoControls), this._restrictNativeVideoControls(), this._updateNativeVideoControls();
                break;
            case"noFullWindow":
                this.options[e] = t.extend({}, this.options[e], s), this.status.nativeVideoControls = this._uaBlocklist(this.options.nativeVideoControls), this.status.noFullWindow = this._uaBlocklist(this.options.noFullWindow), this._restrictNativeVideoControls(), this._updateButtons();
                break;
            case"noVolume":
                this.options[e] = t.extend({}, this.options[e], s), this.status.noVolume = this._uaBlocklist(this.options.noVolume), this._updateVolume(), this._updateMute();
                break;
            case"emulateHtml":
                this.options[e] !== s && (this.options[e] = s, s ? this._emulateHtmlBridge() : this._destroyHtmlBridge());
                break;
            case"timeFormat":
                this.options[e] = t.extend({}, this.options[e], s);
                break;
            case"keyEnabled":
                this.options[e] = s, s || this !== t.jPlayer.focus || (t.jPlayer.focus = null);
                break;
            case"keyBindings":
                this.options[e] = t.extend(!0, {}, this.options[e], s);
                break;
            case"audioFullScreen":
                this.options[e] = s
        }
        return this
    }, _refreshSize: function () {
        this._setSize(), this._addUiClass(), this._updateSize(), this._updateButtons(), this._updateAutohide(), this._trigger(t.jPlayer.event.resize)
    }, _setSize: function () {
        this.options.fullWindow ? (this.status.width = this.options.sizeFull.width, this.status.height = this.options.sizeFull.height, this.status.cssClass = this.options.sizeFull.cssClass) : (this.status.width = this.options.size.width, this.status.height = this.options.size.height, this.status.cssClass = this.options.size.cssClass), this.element.css({width: this.status.width, height: this.status.height})
    }, _addUiClass: function () {
        this.ancestorJq.length && this.ancestorJq.addClass(this.status.cssClass)
    }, _removeUiClass: function () {
        this.ancestorJq.length && this.ancestorJq.removeClass(this.status.cssClass)
    }, _updateSize: function () {
        this.internal.poster.jq.css({width: this.status.width, height: this.status.height}), !this.status.waitForPlay && this.html.active && this.status.video || this.html.video.available && this.html.used && this.status.nativeVideoControls ? this.internal.video.jq.css({width: this.status.width, height: this.status.height}) : !this.status.waitForPlay && this.flash.active && this.status.video && this.internal.flash.jq.css({width: this.status.width, height: this.status.height})
    }, _updateAutohide: function () {
        var t = this, e = "mousemove.jPlayer", s = ".jPlayerAutohide", i = e + s, a = function () {
            t.css.jq.gui.fadeIn(t.options.autohide.fadeIn, function () {
                clearTimeout(t.internal.autohideId), t.internal.autohideId = setTimeout(function () {
                    t.css.jq.gui.fadeOut(t.options.autohide.fadeOut)
                }, t.options.autohide.hold)
            })
        };
        this.css.jq.gui.length && (this.css.jq.gui.stop(!0, !0), clearTimeout(this.internal.autohideId), this.element.unbind(s), this.css.jq.gui.unbind(s), this.status.nativeVideoControls ? this.css.jq.gui.hide() : this.options.fullWindow && this.options.autohide.full || !this.options.fullWindow && this.options.autohide.restored ? (this.element.bind(i, a), this.css.jq.gui.bind(i, a), this.css.jq.gui.hide()) : this.css.jq.gui.show())
    }, fullScreen: function () {
        this._setOption("fullScreen", !0)
    }, restoreScreen: function () {
        this._setOption("fullScreen", !1)
    }, _fullscreenAddEventListeners: function () {
        var e = this, s = t.jPlayer.nativeFeatures.fullscreen;
        s.api.fullscreenEnabled && s.event.fullscreenchange && ("function" != typeof this.internal.fullscreenchangeHandler && (this.internal.fullscreenchangeHandler = function () {
            e._fullscreenchange()
        }), document.addEventListener(s.event.fullscreenchange, this.internal.fullscreenchangeHandler, !1))
    }, _fullscreenRemoveEventListeners: function () {
        var e = t.jPlayer.nativeFeatures.fullscreen;
        this.internal.fullscreenchangeHandler && document.addEventListener(e.event.fullscreenchange, this.internal.fullscreenchangeHandler, !1)
    }, _fullscreenchange: function () {
        this.options.fullScreen && !t.jPlayer.nativeFeatures.fullscreen.api.fullscreenElement() && this._setOption("fullScreen", !1)
    }, _requestFullscreen: function () {
        var e = this.ancestorJq.length ? this.ancestorJq[0] : this.element[0], s = t.jPlayer.nativeFeatures.fullscreen;
        s.used.webkitVideo && (e = this.htmlElement.video), s.api.fullscreenEnabled && s.api.requestFullscreen(e)
    }, _exitFullscreen: function () {
        var e, s = t.jPlayer.nativeFeatures.fullscreen;
        s.used.webkitVideo && (e = this.htmlElement.video), s.api.fullscreenEnabled && s.api.exitFullscreen(e)
    }, _html_initMedia: function (e) {
        var s = t(this.htmlElement.media).empty();
        t.each(e.track || [], function (t, e) {
            var i = document.createElement("track");
            i.setAttribute("kind", e.kind ? e.kind : ""), i.setAttribute("src", e.src ? e.src : ""), i.setAttribute("srclang", e.srclang ? e.srclang : ""), i.setAttribute("label", e.label ? e.label : ""), e.def && i.setAttribute("default", e.def), s.append(i)
        }), this.htmlElement.media.src = this.status.src, "none" !== this.options.preload && this._html_load(), this._trigger(t.jPlayer.event.timeupdate)
    }, _html_setFormat: function (e) {
        var s = this;
        t.each(this.formats, function (t, i) {
            return s.html.support[i] && e[i] ? (s.status.src = e[i], s.status.format[i] = !0, s.status.formatType = i, !1) : void 0
        })
    }, _html_setAudio: function (t) {
        this._html_setFormat(t), this.htmlElement.media = this.htmlElement.audio, this._html_initMedia(t)
    }, _html_setVideo: function (t) {
        this._html_setFormat(t), this.status.nativeVideoControls && (this.htmlElement.video.poster = this._validString(t.poster) ? t.poster : ""), this.htmlElement.media = this.htmlElement.video, this._html_initMedia(t)
    }, _html_resetMedia: function () {
        this.htmlElement.media && (this.htmlElement.media.id !== this.internal.video.id || this.status.nativeVideoControls || this.internal.video.jq.css({width: "0px", height: "0px"}), this.htmlElement.media.pause())
    }, _html_clearMedia: function () {
        this.htmlElement.media && (this.htmlElement.media.src = "about:blank", this.htmlElement.media.load())
    }, _html_load: function () {
        this.status.waitForLoad && (this.status.waitForLoad = !1, this.htmlElement.media.load()), clearTimeout(this.internal.htmlDlyCmdId)
    }, _html_play: function (t) {
        var e = this, s = this.htmlElement.media;
        if (this._html_load(), isNaN(t))s.play(); else {
            this.internal.cmdsIgnored && s.play();
            try {
                if (s.seekable && !("object" == typeof s.seekable && s.seekable.length > 0))throw 1;
                s.currentTime = t, s.play()
            } catch (i) {
                return this.internal.htmlDlyCmdId = setTimeout(function () {
                    e.play(t)
                }, 250), void 0
            }
        }
        this._html_checkWaitForPlay()
    }, _html_pause: function (t) {
        var e = this, s = this.htmlElement.media;
        if (t > 0 ? this._html_load() : clearTimeout(this.internal.htmlDlyCmdId), s.pause(), !isNaN(t))try {
            if (s.seekable && !("object" == typeof s.seekable && s.seekable.length > 0))throw 1;
            s.currentTime = t
        } catch (i) {
            return this.internal.htmlDlyCmdId = setTimeout(function () {
                e.pause(t)
            }, 250), void 0
        }
        t > 0 && this._html_checkWaitForPlay()
    }, _html_playHead: function (t) {
        var e = this, s = this.htmlElement.media;
        this._html_load();
        try {
            if ("object" == typeof s.seekable && s.seekable.length > 0)s.currentTime = t * s.seekable.end(s.seekable.length - 1) / 100; else {
                if (!(s.duration > 0) || isNaN(s.duration))throw"e";
                s.currentTime = t * s.duration / 100
            }
        } catch (i) {
            return this.internal.htmlDlyCmdId = setTimeout(function () {
                e.playHead(t)
            }, 250), void 0
        }
        this.status.waitForLoad || this._html_checkWaitForPlay()
    }, _html_checkWaitForPlay: function () {
        this.status.waitForPlay && (this.status.waitForPlay = !1, this.css.jq.videoPlay.length && this.css.jq.videoPlay.hide(), this.status.video && (this.internal.poster.jq.hide(), this.internal.video.jq.css({width: this.status.width, height: this.status.height})))
    }, _html_volume: function (t) {
        this.html.audio.available && (this.htmlElement.audio.volume = t), this.html.video.available && (this.htmlElement.video.volume = t)
    }, _html_mute: function (t) {
        this.html.audio.available && (this.htmlElement.audio.muted = t), this.html.video.available && (this.htmlElement.video.muted = t)
    }, _flash_setAudio: function (e) {
        var s = this;
        try {
            t.each(this.formats, function (t, i) {
                if (s.flash.support[i] && e[i]) {
                    switch (i) {
                        case"m4a":
                        case"fla":
                            s._getMovie().fl_setAudio_m4a(e[i]);
                            break;
                        case"mp3":
                            s._getMovie().fl_setAudio_mp3(e[i]);
                            break;
                        case"rtmpa":
                            s._getMovie().fl_setAudio_rtmp(e[i])
                    }
                    return s.status.src = e[i], s.status.format[i] = !0, s.status.formatType = i, !1
                }
            }), "auto" === this.options.preload && (this._flash_load(), this.status.waitForLoad = !1)
        } catch (i) {
            this._flashError(i)
        }
    }, _flash_setVideo: function (e) {
        var s = this;
        try {
            t.each(this.formats, function (t, i) {
                if (s.flash.support[i] && e[i]) {
                    switch (i) {
                        case"m4v":
                        case"flv":
                            s._getMovie().fl_setVideo_m4v(e[i]);
                            break;
                        case"rtmpv":
                            s._getMovie().fl_setVideo_rtmp(e[i])
                    }
                    return s.status.src = e[i], s.status.format[i] = !0, s.status.formatType = i, !1
                }
            }), "auto" === this.options.preload && (this._flash_load(), this.status.waitForLoad = !1)
        } catch (i) {
            this._flashError(i)
        }
    }, _flash_resetMedia: function () {
        this.internal.flash.jq.css({width: "0px", height: "0px"}), this._flash_pause(0 / 0)
    }, _flash_clearMedia: function () {
        try {
            this._getMovie().fl_clearMedia()
        } catch (t) {
            this._flashError(t)
        }
    }, _flash_load: function () {
        try {
            this._getMovie().fl_load()
        } catch (t) {
            this._flashError(t)
        }
        this.status.waitForLoad = !1
    }, _flash_play: function (t) {
        try {
            this._getMovie().fl_play(t)
        } catch (e) {
            this._flashError(e)
        }
        this.status.waitForLoad = !1, this._flash_checkWaitForPlay()
    }, _flash_pause: function (t) {
        try {
            this._getMovie().fl_pause(t)
        } catch (e) {
            this._flashError(e)
        }
        t > 0 && (this.status.waitForLoad = !1, this._flash_checkWaitForPlay())
    }, _flash_playHead: function (t) {
        try {
            this._getMovie().fl_play_head(t)
        } catch (e) {
            this._flashError(e)
        }
        this.status.waitForLoad || this._flash_checkWaitForPlay()
    }, _flash_checkWaitForPlay: function () {
        this.status.waitForPlay && (this.status.waitForPlay = !1, this.css.jq.videoPlay.length && this.css.jq.videoPlay.hide(), this.status.video && (this.internal.poster.jq.hide(), this.internal.flash.jq.css({width: this.status.width, height: this.status.height})))
    }, _flash_volume: function (t) {
        try {
            this._getMovie().fl_volume(t)
        } catch (e) {
            this._flashError(e)
        }
    }, _flash_mute: function (t) {
        try {
            this._getMovie().fl_mute(t)
        } catch (e) {
            this._flashError(e)
        }
    }, _getMovie: function () {
        return document[this.internal.flash.id]
    }, _getFlashPluginVersion: function () {
        var t, e = 0;
        if (window.ActiveXObject)try {
            if (t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) {
                var s = t.GetVariable("$version");
                s && (s = s.split(" ")[1].split(","), e = parseInt(s[0], 10) + "." + parseInt(s[1], 10))
            }
        } catch (i) {
        } else navigator.plugins && navigator.mimeTypes.length > 0 && (t = navigator.plugins["Shockwave Flash"], t && (e = navigator.plugins["Shockwave Flash"].description.replace(/.*\s(\d+\.\d+).*/, "$1")));
        return 1 * e
    }, _checkForFlash: function (t) {
        var e = !1;
        return this._getFlashPluginVersion() >= t && (e = !0), e
    }, _validString: function (t) {
        return t && "string" == typeof t
    }, _limitValue: function (t, e, s) {
        return e > t ? e : t > s ? s : t
    }, _urlNotSetError: function (e) {
        this._error({type: t.jPlayer.error.URL_NOT_SET, context: e, message: t.jPlayer.errorMsg.URL_NOT_SET, hint: t.jPlayer.errorHint.URL_NOT_SET})
    }, _flashError: function (e) {
        var s;
        s = this.internal.ready ? "FLASH_DISABLED" : "FLASH", this._error({type: t.jPlayer.error[s], context: this.internal.flash.swf, message: t.jPlayer.errorMsg[s] + e.message, hint: t.jPlayer.errorHint[s]}), this.internal.flash.jq.css({width: "1px", height: "1px"})
    }, _error: function (e) {
        this._trigger(t.jPlayer.event.error, e), this.options.errorAlerts && this._alert("Error!" + (e.message ? "\n\n" + e.message : "") + (e.hint ? "\n\n" + e.hint : "") + "\n\nContext: " + e.context)
    }, _warning: function (s) {
        this._trigger(t.jPlayer.event.warning, e, s), this.options.warningAlerts && this._alert("Warning!" + (s.message ? "\n\n" + s.message : "") + (s.hint ? "\n\n" + s.hint : "") + "\n\nContext: " + s.context)
    }, _alert: function (t) {
        alert("jPlayer " + this.version.script + " : id='" + this.internal.self.id + "' : " + t)
    }, _emulateHtmlBridge: function () {
        var e = this;
        t.each(t.jPlayer.emulateMethods.split(/\s+/g), function (t, s) {
            e.internal.domNode[s] = function (t) {
                e[s](t)
            }
        }), t.each(t.jPlayer.event, function (s, i) {
            var a = !0;
            t.each(t.jPlayer.reservedEvent.split(/\s+/g), function (t, e) {
                return e === s ? (a = !1, !1) : void 0
            }), a && e.element.bind(i + ".jPlayer.jPlayerHtml", function () {
                e._emulateHtmlUpdate();
                var t = document.createEvent("Event");
                t.initEvent(s, !1, !0), e.internal.domNode.dispatchEvent(t)
            })
        })
    }, _emulateHtmlUpdate: function () {
        var e = this;
        t.each(t.jPlayer.emulateStatus.split(/\s+/g), function (t, s) {
            e.internal.domNode[s] = e.status[s]
        }), t.each(t.jPlayer.emulateOptions.split(/\s+/g), function (t, s) {
            e.internal.domNode[s] = e.options[s]
        })
    }, _destroyHtmlBridge: function () {
        var e = this;
        this.element.unbind(".jPlayerHtml");
        var s = t.jPlayer.emulateMethods + " " + t.jPlayer.emulateStatus + " " + t.jPlayer.emulateOptions;
        t.each(s.split(/\s+/g), function (t, s) {
            delete e.internal.domNode[s]
        })
    }}, t.jPlayer.error = {FLASH: "e_flash", FLASH_DISABLED: "e_flash_disabled", NO_SOLUTION: "e_no_solution", NO_SUPPORT: "e_no_support", URL: "e_url", URL_NOT_SET: "e_url_not_set", VERSION: "e_version"}, t.jPlayer.errorMsg = {FLASH: "jPlayer's Flash fallback is not configured correctly, or a command was issued before the jPlayer Ready event. Details: ", FLASH_DISABLED: "jPlayer's Flash fallback has been disabled by the browser due to the CSS rules you have used. Details: ", NO_SOLUTION: "No solution can be found by jPlayer in this browser. Neither HTML nor Flash can be used.", NO_SUPPORT: "It is not possible to play any media format provided in setMedia() on this browser using your current options.", URL: "Media URL could not be loaded.", URL_NOT_SET: "Attempt to issue media playback commands, while no media url is set.", VERSION: "jPlayer " + t.jPlayer.prototype.version.script + " needs Jplayer.swf version " + t.jPlayer.prototype.version.needFlash + " but found "}, t.jPlayer.errorHint = {FLASH: "Check your swfPath option and that Jplayer.swf is there.", FLASH_DISABLED: "Check that you have not display:none; the jPlayer entity or any ancestor.", NO_SOLUTION: "Review the jPlayer options: support and supplied.", NO_SUPPORT: "Video or audio formats defined in the supplied option are missing.", URL: "Check media URL is valid.", URL_NOT_SET: "Use setMedia() to set the media URL.", VERSION: "Update jPlayer files."}, t.jPlayer.warning = {CSS_SELECTOR_COUNT: "e_css_selector_count", CSS_SELECTOR_METHOD: "e_css_selector_method", CSS_SELECTOR_STRING: "e_css_selector_string", OPTION_KEY: "e_option_key"}, t.jPlayer.warningMsg = {CSS_SELECTOR_COUNT: "The number of css selectors found did not equal one: ", CSS_SELECTOR_METHOD: "The methodName given in jPlayer('cssSelector') is not a valid jPlayer method.", CSS_SELECTOR_STRING: "The methodCssSelector given in jPlayer('cssSelector') is not a String or is empty.", OPTION_KEY: "The option requested in jPlayer('option') is undefined."}, t.jPlayer.warningHint = {CSS_SELECTOR_COUNT: "Check your css selector and the ancestor.", CSS_SELECTOR_METHOD: "Check your method name.", CSS_SELECTOR_STRING: "Check your css selector is a string.", OPTION_KEY: "Check your option name."}
});