/*! For license information please see pornpics.js.LICENSE.txt */
(()=>{
    "use strict";
    var e = {
        667: ()=>{}
        ,
        70: (e,t,a)=>{
            const n = function() {
                function e() {
                    this.listeners = new Map
                }
                return e.prototype.on = function(e, t) {
                    void 0 === this.listeners[e] && (this.listeners[e] = []),
                    this.listeners[e].push(t)
                }
                ,
                e.prototype.trigger = function(e, t) {
                    void 0 !== this.listeners[e] && this.listeners[e].forEach((function(e) {
                        return e(t)
                    }
                    ))
                }
                ,
                e.prototype.off = function(e, t) {
                    if (void 0 !== this.listeners[e]) {
                        var a = this.listeners[e].indexOf(t);
                        -1 !== a && this.listeners[e].splice(a, 1)
                    }
                }
                ,
                e
            }();
            var i;
            !function(e) {
                e.main = "main",
                e.category = "category",
                e.category_recent = "category_recent",
                e.category_recent_2 = "category_recent_2",
                e.category_shemale = "category_shemale",
                e.category_shemale_rotator_maps = "category_shemale_rotator_maps",
                e.category_shemale_recent = "category_shemale_recent",
                e.category_rotator_maps = "category_rotator_maps",
                e.tag_rotator_maps = "tag_rotator_maps",
                e.recent = "recent",
                e.popular = "popular",
                e.tags = "tags",
                e.tags_recent = "tags_recent",
                e.gallery_gc = "gallery_gc",
                e.gallery = "gallery",
                e.gallery_frame = "gallery_frame",
                e.gallery_shemale = "gallery_shemale",
                e.gallery_thumbspw = "gallery_thumbspw",
                e.search = "search",
                e.search_recent = "search_recent",
                e.search_sponsor = "search_sponsor",
                e.models = "models",
                e.models_filters = "models_filters",
                e.channels = "channels",
                e.favorite_new = "favorite_new",
                e.favorite_old = "favorite_old",
                e.favorite_random = "favorite_random",
                e.favorite_channels_new = "favorite_channels_new",
                e.favorite_channels_old = "favorite_channels_old",
                e.favorite_channels_random = "favorite_channels_random",
                e.favorite_models_new = "favorite_models_new",
                e.favorite_models_old = "favorite_models_old",
                e.favorite_models_random = "favorite_models_random",
                e.cam_models = "cam_models",
                e.discounts = "discounts"
            }(i || (i = {}));
            var o = function() {
                function e(e, t, a) {
                    this.ee = e.eventEmitter,
                    this.services = e,
                    this.adBannerManagerController = t,
                    this.config = a,
                    this.init()
                }
                return e.getInstance = function(t, a, n) {
                    return null === this.instance && (this.instance = new e(t,a,n)),
                    this.instance
                }
                ,
                e.prototype.init = function() {
                    this.config.pageType !== i.main && (this.adBannerManagerController.loadHpAdScripts(),
                    this.services.adViewsHistory.checkViewsDataExpire(),
                    this.adBannerManagerController.setUserData(),
                    this.adBannerManagerController.hideOnlyMobileAdContainers())
                }
                ,
                e.prototype.setMainContentContainerAd = function(e) {
                    var t = document.getElementById(this.config.mainThumbContainerId);
                    null !== t && this.adBannerManagerController.setContentContainerAd(e, t)
                }
                ,
                e.prototype.setRelContentContainerAd = function(e) {
                    var t = document.getElementById(this.config.relThumbContainerId);
                    null !== t && this.adBannerManagerController.setContentContainerAd(e, t)
                }
                ,
                e.prototype.setAllContentContainersAdEvents = function(e) {
                    this.adBannerManagerController.setAllContentContainersAdEvents(e)
                }
                ,
                e.prototype.setGEOdata = function(e) {
                    this.adBannerManagerController.setUserGEOData(e)
                }
                ,
                e.prototype.frameTransform = function() {
                    this.services.frameTransform.frameTransform(document.querySelectorAll(".".concat(this.config.adClass)))
                }
                ,
                e.prototype.isAdCapReached = function() {
                    return this.adBannerManagerController.isAdUnitExist()
                }
                ,
                e.instance = null,
                e
            }();
            const s = o;
            var r, l;
            !function(e) {
                e.scriptCall = "scriptCall",
                e.geoCall = "geoCall",
                e.appCall = "appCall"
            }(r || (r = {})),
            function(e) {
                e.mobile = "mobile",
                e.desktop = "desktop"
            }(l || (l = {}));
            var c = function() {
                function e(e, t, a) {
                    this.contentContainerEventTimeoutId = null,
                    this.userGeoData = null,
                    this.userData = null,
                    this.globalCurrentAdCount = 0,
                    this.ee = e.eventEmitter,
                    this.services = e,
                    this.adBannerManager = t,
                    this.config = a,
                    this.contentContainerEventFlag = !1
                }
                return e.prototype.createHpScriptCalls = function() {
                    var e = this
                      , t = document.createElement("script")
                      , a = document.createElement("script");
                    a.id = this.config.hpConfig.hpAdScriptId,
                    a.setAttribute(this.config.hpConfig.hpAdScriptDataAttrName, this.config.hpConfig.hpAdScriptDomain),
                    t.onload = function() {
                        document.body.appendChild(a)
                    }
                    ,
                    t.onerror = function() {
                        document.body.appendChild(a)
                    }
                    ,
                    a.onload = function() {
                        e.callAllIncludeAdFacades(r.scriptCall)
                    }
                    ,
                    t.src = this.config.hpConfig.hpAdBlockScriptPath,
                    a.src = this.config.hpConfig.hpAdScriptPath,
                    document.body.appendChild(t)
                }
                ,
                e.prototype.callAllIncludeAdFacades = function(e) {
                    var t = document.getElementById(this.config.mainThumbContainerId);
                    null !== t && this.setContentContainerAd(e, t);
                    var a = document.getElementById(this.config.relThumbContainerId);
                    null !== a && this.setContentContainerAd(e, a),
                    this.setAllContentContainersAdEvents(e)
                }
                ,
                e.prototype.getAdContainers = function(e) {
                    var t = Array.from(e.querySelectorAll(".".concat(this.config.adClass)));
                    return e.id === this.config.mainThumbContainerId && (t = this.adBannerManager.filterOutArray(t, this.config.adStaticClass)),
                    t = this.adBannerManager.filterOutArray(t, this.config.adIncludedClass),
                    this.services.deviceDetect.isMobile() || (t = this.adBannerManager.filterOutMobileElements(t, this.config.adOnlyMobileClass, this.config.thumbClass, this.config.thumbInactiveClass)),
                    t
                }
                ,
                e.prototype.createHPHTMLAdUnit = function(e) {
                    var t = document.createElement("div");
                    return t.setAttribute("data-hp-id", e.adID),
                    t.setAttribute("data-hp-zone", ""),
                    t
                }
                ,
                e.prototype.createFrameHTMLAdUnit = function(e) {
                    var t = document.createElement("iframe");
                    return t.setAttribute("width", "300"),
                    t.setAttribute("height", "250"),
                    t.setAttribute("src", e.adFrameSpotPath),
                    t.setAttribute("marginwidth", "0"),
                    t.setAttribute("marginheight", "0"),
                    t.setAttribute("frameborder", "0"),
                    t.setAttribute("scrolling", "no"),
                    t.setAttribute("title", "Spot"),
                    t
                }
                ,
                e.prototype.createHTMLAdUnit = function(e) {
                    return e.isHP ? this.createHPHTMLAdUnit(e) : this.createFrameHTMLAdUnit(e)
                }
                ,
                e.prototype.includeContainerAd = function(e) {
                    var t, a = this, n = this.getAdContainers(e);
                    this.globalCurrentAdCount >= this.config.maxAdPerPage || (t = e.id === this.config.relThumbContainerId ? this.adBannerManager.getDeltaCoefficient(this.userData) : this.adBannerManager.getDefaultDelta(this.userData),
                    n.forEach((function(e) {
                        if (!(a.globalCurrentAdCount >= a.config.maxAdPerPage) && (a.services.inViewport.inViewport(e) || !a.services.inViewport.belowTheFold(e, t) && !a.services.inViewport.aboveTheTop(e))) {
                            var n = a.getAdUnit()
                              , i = a.config.defaultAdUnit
                              , o = a.createHTMLAdUnit(n || i);
                            e.appendChild(o),
                            e.classList.add(a.config.adIncludedClass),
                            null !== n && a.services.adViewsHistory.addViewToHistory(n.adAlias),
                            a.globalCurrentAdCount++
                        }
                    }
                    )))
                }
                ,
                e.prototype.getAdUnit = function() {
                    var e = this.adBannerManager.getFilteredAdUnitsByUserData(this.config.adUnits, this.userData);
                    return e = this.adBannerManager.getFilteredAdUnitsByViewsCap(e),
                    this.adBannerManager.chooseAdUnitByWeight(e)
                }
                ,
                e.prototype.loadHpAdScripts = function() {
                    null === document.getElementById(this.config.hpConfig.hpAdScriptId) && this.createHpScriptCalls()
                }
                ,
                e.prototype.setUserData = function() {
                    null === this.userData && (this.userData = {},
                    this.userData.browser = this.services.browserDetect.getBrowserName(),
                    this.services.deviceDetect.isMobile() || this.services.deviceDetect.isTablet() ? this.userData.deviceType = l.mobile : this.userData.deviceType = l.desktop,
                    null === this.userGeoData ? this.userData.userGeoData = null : this.userData.userGeoData = this.userGeoData)
                }
                ,
                e.prototype.setContentContainerAd = function(e, t) {
                    if (this.adBannerManager.setHpScriptsStatus(e),
                    this.adBannerManager.isAllHpScriptsStatusOk()) {
                        this.includeContainerAd(t);
                        try {
                            window.hptRdr.update()
                        } catch (e) {
                            console.error(e)
                        }
                        this.services.frameTransform.frameTransform(document.querySelectorAll(".".concat(this.config.adClass)))
                    }
                }
                ,
                e.prototype.setAllContentContainersAdEvents = function(e) {
                    var t = this;
                    if (this.adBannerManager.setHpScriptsStatus(e),
                    this.adBannerManager.isAllHpScriptsStatusOk() && !this.contentContainerEventFlag) {
                        var a = document.getElementById(this.config.relThumbContainerId)
                          , n = document.getElementById(this.config.mainThumbContainerId);
                        window.addEventListener(this.config.hpConfig.hpAdScriptEvent, (function() {
                            t.services.frameTransform.frameTransform(document.querySelectorAll(".".concat(t.config.adClass)))
                        }
                        )),
                        window.addEventListener("scroll", (function() {
                            t.contentContainerEventTimeoutId && clearTimeout(t.contentContainerEventTimeoutId),
                            t.contentContainerEventTimeoutId = setTimeout((function() {
                                null !== a && t.includeContainerAd(a),
                                null !== n && t.includeContainerAd(n);
                                try {
                                    window.hptRdr.update()
                                } catch (e) {
                                    console.error(e)
                                }
                                t.services.frameTransform.frameTransform(document.querySelectorAll(".".concat(t.config.adClass)))
                            }
                            ), 50)
                        }
                        )),
                        this.contentContainerEventFlag = !0
                    }
                }
                ,
                e.prototype.setUserGEOData = function(e) {
                    this.userGeoData = e,
                    null !== this.userData && (this.userData.userGeoData = this.userGeoData),
                    this.callAllIncludeAdFacades(r.geoCall)
                }
                ,
                e.prototype.hideOnlyMobileAdContainers = function() {
                    if (!this.services.deviceDetect.isMobile()) {
                        var e = document.getElementById(this.config.mainThumbContainerId);
                        if (null !== e) {
                            var t = Array.from(e.querySelectorAll(".".concat(this.config.adClass)));
                            t = this.adBannerManager.filterOutArray(t, this.config.adStaticClass),
                            this.adBannerManager.filterOutMobileElements(t, this.config.adOnlyMobileClass, this.config.thumbClass, this.config.thumbInactiveClass)
                        }
                    }
                }
                ,
                e.prototype.isAdUnitExist = function() {
                    return null !== this.getAdUnit()
                }
                ,
                e
            }();
            const u = c;
            const d = function() {
                function e(e) {
                    this.adUnits = e
                }
                return e.prototype.getAdUnits = function() {
                    return this.adUnits
                }
                ,
                e
            }();
            var p = function(e) {
                this.adStrategyComponent = e
            };
            const m = p;
            var h, g = (h = function(e, t) {
                return h = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var a in t)
                        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
                }
                ,
                h(e, t)
            }
            ,
            function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                function a() {
                    this.constructor = e
                }
                h(e, t),
                e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype,
                new a)
            }
            ), f = function(e) {
                function t(t, a) {
                    var n = e.call(this, t) || this;
                    return n.userGeoData = a,
                    n
                }
                return g(t, e),
                t.prototype.getAdUnits = function() {
                    var e = this
                      , t = this.adStrategyComponent.getAdUnits()
                      , a = [];
                    return t.forEach((function(t) {
                        var n, i = [];
                        t.adStrategies.forEach((function(t) {
                            if (null !== e.userGeoData)
                                t.geoException.includes(e.userGeoData.geoCode) || (0 === t.geo.length || t.geo.includes(e.userGeoData.geoCode)) && i.push(t);
                            else {
                                if (0 !== t.geo.length)
                                    return;
                                i.push(t)
                            }
                        }
                        )),
                        0 !== i.length && ((n = t).adStrategies = i,
                        a.push(n))
                    }
                    )),
                    a
                }
                ,
                t
            }(m);
            const b = f;
            var v = function() {
                var e = function(t, a) {
                    return e = Object.setPrototypeOf || {
                        __proto__: []
                    }instanceof Array && function(e, t) {
                        e.__proto__ = t
                    }
                    || function(e, t) {
                        for (var a in t)
                            Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
                    }
                    ,
                    e(t, a)
                };
                return function(t, a) {
                    if ("function" != typeof a && null !== a)
                        throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                    function n() {
                        this.constructor = t
                    }
                    e(t, a),
                    t.prototype = null === a ? Object.create(a) : (n.prototype = a.prototype,
                    new n)
                }
            }()
              , y = function(e) {
                function t(t, a) {
                    var n = e.call(this, t) || this;
                    return n.deviceType = a,
                    n
                }
                return v(t, e),
                t.prototype.getAdUnits = function() {
                    var e = this
                      , t = this.adStrategyComponent.getAdUnits()
                      , a = [];
                    return t.forEach((function(t) {
                        var n, i = [];
                        t.adStrategies.forEach((function(t) {
                            (0 === t.deviceType.length || t.deviceType.includes(e.deviceType)) && i.push(t)
                        }
                        )),
                        0 !== i.length && ((n = t).adStrategies = i,
                        a.push(n))
                    }
                    )),
                    a
                }
                ,
                t
            }(m);
            const w = y;
            var C = function() {
                var e = function(t, a) {
                    return e = Object.setPrototypeOf || {
                        __proto__: []
                    }instanceof Array && function(e, t) {
                        e.__proto__ = t
                    }
                    || function(e, t) {
                        for (var a in t)
                            Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
                    }
                    ,
                    e(t, a)
                };
                return function(t, a) {
                    if ("function" != typeof a && null !== a)
                        throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                    function n() {
                        this.constructor = t
                    }
                    e(t, a),
                    t.prototype = null === a ? Object.create(a) : (n.prototype = a.prototype,
                    new n)
                }
            }()
              , k = function(e) {
                function t(t, a) {
                    var n = e.call(this, t) || this;
                    return n.browser = a,
                    n
                }
                return C(t, e),
                t.prototype.getAdUnits = function() {
                    var e = this
                      , t = this.adStrategyComponent.getAdUnits()
                      , a = [];
                    return t.forEach((function(t) {
                        var n, i = [];
                        t.adStrategies.forEach((function(t) {
                            t.browserException.includes(e.browser) || (0 === t.browser.length || t.browser.includes(e.browser)) && i.push(t)
                        }
                        )),
                        0 !== i.length && ((n = t).adStrategies = i,
                        a.push(n))
                    }
                    )),
                    a
                }
                ,
                t
            }(m);
            const _ = k;
            var P = function() {
                var e = function(t, a) {
                    return e = Object.setPrototypeOf || {
                        __proto__: []
                    }instanceof Array && function(e, t) {
                        e.__proto__ = t
                    }
                    || function(e, t) {
                        for (var a in t)
                            Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
                    }
                    ,
                    e(t, a)
                };
                return function(t, a) {
                    if ("function" != typeof a && null !== a)
                        throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
                    function n() {
                        this.constructor = t
                    }
                    e(t, a),
                    t.prototype = null === a ? Object.create(a) : (n.prototype = a.prototype,
                    new n)
                }
            }()
              , A = function(e) {
                function t(t, a) {
                    var n = e.call(this, t) || this;
                    return n.weightBuffer = new Map,
                    n.adGroupCount = new Map,
                    n.viewsHistoryService = a,
                    n
                }
                return P(t, e),
                t.prototype.isAdUnitViewsCap = function(e, t) {
                    return this.viewsHistoryService.isViewsCap(e, t)
                }
                ,
                t.prototype.saveAdStrategyWeightAndGroup = function(e, t) {
                    var a = this
                      , n = t.length;
                    0 !== n && t.forEach((function(t) {
                        if (a.weightBuffer.has(t)) {
                            var i = a.weightBuffer.get(t);
                            a.weightBuffer.set(t, Math.round(e / n + i))
                        } else
                            a.weightBuffer.set(t, Math.round(e / n))
                    }
                    ))
                }
                ,
                t.prototype.adGroupCounter = function(e) {
                    var t = this;
                    0 !== e.length && e.forEach((function(e) {
                        e.adStrategies.forEach((function(e) {
                            0 !== e.group.length && e.group.forEach((function(e) {
                                if (t.adGroupCount.has(e)) {
                                    var a = t.adGroupCount.get(e);
                                    t.adGroupCount.set(e, a + 1)
                                } else
                                    t.adGroupCount.set(e, 1)
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype.increaseWeight = function(e) {
                    var t = this;
                    return 0 === this.weightBuffer.size || e.forEach((function(e) {
                        e.adStrategies.forEach((function(a) {
                            0 !== a.group.length && (t.isAdUnitViewsCap(e.adAlias, a.viewsCap) || a.group.forEach((function(e) {
                                var n = t.weightBuffer.get(e)
                                  , i = t.adGroupCount.get(e);
                                void 0 !== n && void 0 !== i && (a.weight = a.weight + n / i)
                            }
                            )))
                        }
                        ))
                    }
                    )),
                    e
                }
                ,
                t.prototype.filterByCap = function(e) {
                    var t = this
                      , a = [];
                    return e.forEach((function(e) {
                        var n, i = [];
                        e.adStrategies.forEach((function(a) {
                            t.isAdUnitViewsCap(e.adAlias, a.viewsCap) ? t.saveAdStrategyWeightAndGroup(a.weight, a.group) : i.push(a)
                        }
                        )),
                        0 !== i.length && ((n = e).adStrategies = i,
                        a.push(n))
                    }
                    )),
                    a
                }
                ,
                t.prototype.getAdUnits = function() {
                    var e = this.adStrategyComponent.getAdUnits()
                      , t = this.filterByCap(e);
                    return 0 === t.length ? t : (this.adGroupCounter(t),
                    t = this.increaseWeight(t))
                }
                ,
                t
            }(m);
            const I = A;
            var T = function() {
                function e(e) {
                    this.hpScriptStatuses = {},
                    this.ee = e.eventEmitter,
                    this.services = e,
                    this.hpScriptStatuses[r.appCall] = !1,
                    this.hpScriptStatuses[r.geoCall] = !1,
                    this.hpScriptStatuses[r.scriptCall] = !1
                }
                return e.prototype.findCeil = function(e, t, a, n) {
                    for (var i; a < n; )
                        t > e[i = a + (n - a >> 1)] ? a = i + 1 : n = i;
                    return a
                }
                ,
                e.prototype.getRandomUnit = function(e, t, a) {
                    var n, i = [];
                    i[0] = t[0];
                    for (var o = 1; o < a; ++o)
                        i[o] = i[o - 1] + t[o];
                    return n = Math.floor(Math.random() * i[a - 1]) + 1,
                    e[this.findCeil(i, n, 0, a - 1)]
                }
                ,
                e.prototype.getAliasesWithWeight = function(e) {
                    var t = [];
                    return e.forEach((function(e) {
                        e.adStrategies.forEach((function(a) {
                            0 !== a.weight && t.push(e.adAlias)
                        }
                        ))
                    }
                    )),
                    t
                }
                ,
                e.prototype.getWeights = function(e) {
                    var t = [];
                    return e.forEach((function(e) {
                        e.adStrategies.forEach((function(e) {
                            0 !== e.weight && t.push(e.weight)
                        }
                        ))
                    }
                    )),
                    t
                }
                ,
                e.prototype.getAdUnitBySortNumber = function(e) {
                    var t = {}
                      , a = -1;
                    return e.forEach((function(e) {
                        e.adStrategies.forEach((function(n) {
                            (-1 === a || n.sortNumber < a) && (a = n.sortNumber,
                            t = e)
                        }
                        ))
                    }
                    )),
                    t
                }
                ,
                e.prototype.setHpScriptsStatus = function(e) {
                    void 0 !== e && e !== r.appCall || (this.hpScriptStatuses[r.appCall] = !0),
                    e === r.geoCall && (this.hpScriptStatuses[r.geoCall] = !0),
                    e === r.scriptCall && (this.hpScriptStatuses[r.scriptCall] = !0)
                }
                ,
                e.prototype.isAllHpScriptsStatusOk = function() {
                    return !!(this.hpScriptStatuses[r.appCall] && this.hpScriptStatuses[r.geoCall] && this.hpScriptStatuses[r.scriptCall])
                }
                ,
                e.prototype.getFilteredAdUnitsByUserData = function(e, t) {
                    var a = new d(e)
                      , n = new b(a,t.userGeoData)
                      , i = new w(n,t.deviceType);
                    return new _(i,t.browser).getAdUnits()
                }
                ,
                e.prototype.getFilteredAdUnitsByViewsCap = function(e) {
                    var t = new d(e);
                    return new I(t,this.services.adViewsHistory).getAdUnits()
                }
                ,
                e.prototype.filterOutArray = function(e, t) {
                    return e.filter((function(e) {
                        return !e.classList.contains(t)
                    }
                    ))
                }
                ,
                e.prototype.filterOutMobileElements = function(e, t, a, n) {
                    return e.filter((function(e) {
                        return e.classList.contains(t) && (e.classList.contains(a) || e.classList.add(a),
                        e.classList.contains(n) || e.classList.add(n)),
                        !e.classList.contains(t)
                    }
                    ))
                }
                ,
                e.prototype.chooseAdUnitByWeight = function(e) {
                    var t = e.length;
                    if (0 === t)
                        return null;
                    if (1 === t)
                        return e[0];
                    var a = this.getAliasesWithWeight(e)
                      , n = this.getWeights(e);
                    if (0 !== a.length) {
                        var i = this.getRandomUnit(a, n, a.length)
                          , o = {};
                        return e.forEach((function(e) {
                            e.adAlias === i && (o = e)
                        }
                        )),
                        o
                    }
                    return this.getAdUnitBySortNumber(e)
                }
                ,
                e.prototype.getDeltaCoefficient = function(e) {
                    var t;
                    return null === e || null === e.userGeoData ? ((this.services.deviceDetect.isMobile() || this.services.deviceDetect.isTablet()) && (t = 3e4),
                    t = 2600) : t = e.userGeoData.lazyLoadDelta,
                    this.services.deviceDetect.isMobile() || this.services.deviceDetect.isTablet() ? t - .91 * t : t - .94 * t
                }
                ,
                e.prototype.getDefaultDelta = function(e) {
                    var t;
                    return null === e || null === e.userGeoData ? ((this.services.deviceDetect.isMobile() || this.services.deviceDetect.isTablet()) && (t = 3e4),
                    t = 2600) : t = e.userGeoData.lazyLoadDelta,
                    t
                }
                ,
                e
            }();
            const E = T;
            var S, N;
            !function(e) {
                e.Android = "android",
                e.iOS = "ios",
                e.Unknown = "unknown",
                e.WindowsPhone = "Windows Phone"
            }(S || (S = {})),
            function(e) {
                e.Linux = "linux",
                e.MacOS = "mac_os",
                e.Unix = "unix",
                e.Unknown = "unknown",
                e.Windows = "windows"
            }(N || (N = {}));
            const D = function() {
                function e() {
                    this.userAgent = navigator.userAgent || navigator.vendor || window.opera || void 0,
                    this.isMobileParam = this.isMobileDevice(),
                    this.isDesktopParam = this.isDesktopDevice(),
                    this.isTabletParam = this.isTabletDevice(),
                    this.mobileOSParam = this.getMobileOS(),
                    this.desktopOSParam = this.getDesktopOS()
                }
                return e.prototype.isMobileDevice = function() {
                    var e = this;
                    return [/(Android)(.+)(Mobile)/i, /BlackBerry/i, /iPhone|iPod/i, /Opera Mini/i, /IEMobile/i].some((function(t) {
                        return e.userAgent.match(t)
                    }
                    ))
                }
                ,
                e.prototype.isTabletDevice = function() {
                    return /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(this.userAgent.toLowerCase())
                }
                ,
                e.prototype.isDesktopDevice = function() {
                    return !this.isMobileDevice() && !this.isTabletDevice()
                }
                ,
                e.prototype.getMobileOS = function() {
                    return this.isMobileDevice() ? /windows phone/i.test(this.userAgent) ? S.WindowsPhone : /android/i.test(this.userAgent) ? S.Android : /iPad|iPhone|iPod/.test(this.userAgent) && !window.MSStream ? S.iOS : S.Unknown : void 0
                }
                ,
                e.prototype.getDesktopOS = function() {
                    return this.isDesktopDevice() ? -1 !== this.userAgent.indexOf("Win") ? N.Windows : -1 !== this.userAgent.indexOf("Mac") ? N.MacOS : -1 !== this.userAgent.indexOf("X11") ? N.Unix : -1 !== this.userAgent.indexOf("Linux") ? N.Linux : N.Unknown : void 0
                }
                ,
                e.prototype.getDeviceOS = function() {
                    var e;
                    return null !== (e = this.getMobileOS()) && void 0 !== e ? e : this.getDesktopOS()
                }
                ,
                e.prototype.supportedScreenOrientation = function() {
                    var e, t;
                    return null !== (t = null !== (e = ((null === screen || void 0 === screen ? void 0 : screen.orientation) || {}).type) && void 0 !== e ? e : screen.mozOrientation) && void 0 !== t ? t : screen.msOrientation
                }
                ,
                e.prototype.safariScreenOrientation = function() {
                    return !(null === screen || void 0 === screen ? void 0 : screen.orientation) && matchMedia("(orientation: portrait)").matches ? "portrait-primary" : "landscape-primary"
                }
                ,
                e.prototype.initialScreenOrientation = function() {
                    var e, t;
                    return null !== (t = null !== (e = this.supportedScreenOrientation()) && void 0 !== e ? e : this.safariScreenOrientation()) && void 0 !== t ? t : "portrait-primary"
                }
                ,
                e.prototype.isMobile = function() {
                    return this.isMobileParam
                }
                ,
                e.prototype.isDesktop = function() {
                    return this.isDesktopParam
                }
                ,
                e.prototype.isTablet = function() {
                    return this.isTabletParam
                }
                ,
                e.prototype.mobileOS = function() {
                    return this.mobileOSParam
                }
                ,
                e.prototype.desktopOS = function() {
                    return this.desktopOSParam
                }
                ,
                e.prototype.isAndroidDevice = function() {
                    return this.getDeviceOS() === S.Android
                }
                ,
                e.prototype.isAppleDevice = function() {
                    return this.getDeviceOS() === S.iOS || this.getDeviceOS() === N.MacOS
                }
                ,
                e.prototype.isUnknownMobileDevice = function() {
                    return this.getDeviceOS() === S.Unknown
                }
                ,
                e.prototype.isWindowsDesktop = function() {
                    return this.getDeviceOS() === N.Windows
                }
                ,
                e.prototype.isLinuxOrUnixDesktop = function() {
                    return this.getDeviceOS() === N.Linux || this.getDeviceOS() === N.Unix
                }
                ,
                e.prototype.isLandscapeOrientation = function() {
                    return ["landscape-primary", "landscape-secondary"].includes(this.initialScreenOrientation())
                }
                ,
                e.prototype.isPortraitOrientation = function() {
                    return ["portrait-primary", "portrait-secondary"].includes(this.initialScreenOrientation())
                }
                ,
                e
            }();
            const x = function() {
                function e() {}
                return e.prototype.offset = function(e) {
                    var t = e.getBoundingClientRect()
                      , a = document.documentElement
                      , n = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
                      , i = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
                    return {
                        top: t.top + i - a.clientTop,
                        left: t.left + n - a.clientLeft
                    }
                }
                ,
                e.prototype.belowTheFold = function(e, t) {
                    return void 0 === t && (t = 0),
                    (window.innerHeight || document.documentElement.clientHeight) + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0) <= this.offset(e).top - t
                }
                ,
                e.prototype.aboveTheTop = function(e, t) {
                    return void 0 === t && (t = 0),
                    (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0) >= this.offset(e).top + e.getBoundingClientRect().height - t
                }
                ,
                e.prototype.rightOfScreen = function(e, t) {
                    return void 0 === t && (t = 0),
                    (window.innerWidth || document.documentElement.clientWidth) + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0) <= this.offset(e).left - t
                }
                ,
                e.prototype.leftOfScreen = function(e, t) {
                    return void 0 === t && (t = 0),
                    (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0) >= this.offset(e).left + e.getBoundingClientRect().width - t
                }
                ,
                e.prototype.inViewport = function(e, t) {
                    return void 0 === t && (t = 0),
                    !(this.rightOfScreen(e, t) || this.leftOfScreen(e, t) || this.belowTheFold(e, t) || this.aboveTheTop(e, t))
                }
                ,
                e
            }();
            var L;
            !function(e) {
                e.chrome = "Google Chrome",
                e.firefox = "Mozilla Firefox",
                e.safari = "Safari",
                e.edge = "Edge",
                e.opera = "Opera",
                e.ie = "Internet Explorer",
                e.unknown = "Unknown browser"
            }(L || (L = {}));
            const M = function() {
                function e() {}
                return e.prototype.getBrowserName = function() {
                    var e = navigator.userAgent;
                    return -1 !== e.indexOf("Chrome") ? L.chrome : -1 !== e.indexOf("Firefox") ? L.firefox : -1 !== e.indexOf("Safari") ? L.safari : -1 !== e.indexOf("Edge") ? L.edge : -1 !== e.indexOf("Opera") || -1 !== e.indexOf("OPR") ? L.opera : -1 !== e.indexOf("Trident") ? L.ie : L.unknown
                }
                ,
                e
            }();
            const B = function() {
                function e() {}
                return e.prototype.getImageWithFormula = function(e) {
                    return e <= 600 ? function(e, t) {
                        return (e - 10) / t
                    }
                    : e >= 601 && e <= 643 ? function(e, t) {
                        return (e - 37) / 2 / t
                    }
                    : e >= 644 && e <= 850 ? function(e, t) {
                        return (e - 46) / 3 / t
                    }
                    : e >= 851 && e <= 943 ? function(e, t) {
                        return (e - 54) / 4 / t
                    }
                    : null
                }
                ,
                e.prototype.setThumbsHeight = function(e, t) {
                    0 !== e.length && e.forEach((function(e) {
                        e.style.height = t.toString() + "px"
                    }
                    ))
                }
                ,
                e.prototype.setFrameScale = function(e, t) {
                    0 !== e.length && e.forEach((function(e) {
                        var a = e.querySelector("iframe");
                        a && (a.style.transform = "scale(".concat(t.toString(), ")"))
                    }
                    ))
                }
                ,
                e.prototype.frameTransform = function(e) {
                    var t = window.innerWidth || document.documentElement.clientWidth
                      , a = e
                      , n = this.getImageWithFormula(t)
                      , i = 250
                      , o = 1;
                    null !== n && (i = Math.round(n(t, 1.2)),
                    o = n(t, 300)),
                    this.setThumbsHeight(a, i),
                    this.setFrameScale(a, o)
                }
                ,
                e
            }();
            var O = function() {
                function e() {
                    this.config = null
                }
                return e.prototype.hoursToMs = function(e) {
                    return 60 * e * 60 * 1e3
                }
                ,
                e.prototype.createNewData = function() {
                    return new Map
                }
                ,
                e.prototype.getDataFromStorage = function(e) {
                    var t = localStorage.getItem(e);
                    if (null === t)
                        return this.createNewData();
                    var a = new Map(Object.entries(JSON.parse(t)));
                    return 0 === a.size ? this.createNewData() : a
                }
                ,
                e.prototype.setDataToStorage = function(e, t) {
                    var a = Object.fromEntries(t);
                    localStorage.setItem(e, JSON.stringify(a))
                }
                ,
                e.prototype.setConfig = function(e) {
                    this.config = e
                }
                ,
                e.prototype.getViewsData = function() {
                    return null !== this.config ? this.getDataFromStorage(this.config.adViewsStorageName) : this.createNewData()
                }
                ,
                e.prototype.setViewsData = function(e) {
                    null !== this.config && this.setDataToStorage(this.config.adViewsStorageName, e)
                }
                ,
                e.prototype.checkViewsDataExpire = function() {
                    var e = this;
                    if (null !== this.config) {
                        var t = this.config.adViewsExpireHours
                          , a = this.getViewsData();
                        if (0 !== a.size) {
                            var n = (new Date).getTime();
                            a.forEach((function(i, o) {
                                n - i.time > e.hoursToMs(t) && a.delete(o)
                            }
                            )),
                            0 === a.size && (a = this.createNewData()),
                            this.setViewsData(a)
                        } else
                            this.setViewsData(this.createNewData())
                    }
                }
                ,
                e.prototype.addViewToHistory = function(e) {
                    var t = this.getViewsData()
                      , a = (new Date).getTime();
                    if (t.has(e)) {
                        var n = t.get(e);
                        n.views += 1,
                        n.time = a,
                        t.set(e, n)
                    } else
                        t.set(e, {
                            views: 1,
                            time: a
                        });
                    this.setViewsData(t)
                }
                ,
                e.prototype.isViewsCap = function(e, t) {
                    if (0 === t)
                        return !0;
                    var a = this.getViewsData();
                    return !!a.has(e) && a.get(e).views >= t
                }
                ,
                e
            }();
            const U = O;
            const j = function() {
                function e(e) {
                    this.config = e
                }
                return e.prototype.isCorrectLangCode = function(e) {
                    return this.config.languageCodes.includes(e)
                }
                ,
                e.prototype.replaceTabName = function() {
                    var e = this;
                    document.querySelectorAll(".".concat(this.config.tabsClass)).forEach((function(t) {
                        var a = t.querySelector("a");
                        null !== a && a.childNodes[0].nodeValue === e.config.searchWord && (a.childNodes[0].nodeValue = e.config.replacementWord)
                    }
                    ))
                }
                ,
                e.prototype.initService = function() {
                    this.isCorrectLangCode(navigator.language) && this.replaceTabName()
                }
                ,
                e
            }();
            var F;
            !function(e) {
                e.stripcash = "s",
                e.jasmin = "j",
                e.imlive = "iml"
            }(F || (F = {}));
            var R = function() {
                function e(e) {
                    this.ee = e.eventEmitter,
                    this.services = e
                }
                return e.prototype.findCeil = function(e, t, a, n) {
                    for (var i; a < n; )
                        t > e[i = a + (n - a >> 1)] ? a = i + 1 : n = i;
                    return a
                }
                ,
                e.prototype.getRandomUnit = function(e, t, a) {
                    var n, i = [];
                    i[0] = t[0];
                    for (var o = 1; o < a; ++o)
                        i[o] = i[o - 1] + t[o];
                    return n = Math.floor(Math.random() * i[a - 1]) + 1,
                    e[this.findCeil(i, n, 0, a - 1)]
                }
                ,
                e.prototype.calculateProbability = function(e) {
                    var t = []
                      , a = [];
                    return t.push(F.stripcash),
                    a.push(e.w.s),
                    t.push(F.jasmin),
                    a.push(e.w.j),
                    t.push(F.imlive),
                    a.push(e.w.iml),
                    this.getRandomUnit(t, a, t.length)
                }
                ,
                e.prototype.getLanguages = function(e) {
                    return void 0 === e || 0 === e.length ? null : Array.isArray(e) ? e.join(",") : null
                }
                ,
                e.prototype.getCategoryFromUrl = function(e, t) {
                    var a = this.getLastLocation(e);
                    return this.findMatchesInCategories(a, t)
                }
                ,
                e.prototype.getCategoryFromQueryString = function(e, t) {
                    var a = this.getQueryString(e);
                    return null === a ? null : this.findMatchesInCategories(a, t)
                }
                ,
                e.prototype.getRandomInt = function(e, t) {
                    return Math.floor(Math.random() * (t - e + 1)) + e
                }
                ,
                e.prototype.getCurrentModel = function(e) {
                    var t, a = null, n = this.calculateProbability(e);
                    switch (n) {
                    case F.stripcash:
                        t = e.data;
                        break;
                    case F.jasmin:
                        t = e.data_j;
                        break;
                    case F.imlive:
                        t = e.data_i;
                        break;
                    default:
                        n = F.stripcash,
                        t = e.data
                    }
                    0 === t.length && (t = e.data,
                    n = F.stripcash);
                    for (var i = 0, o = t; i < o.length; i++) {
                        var s = o[i];
                        if (!this.services.camViewsHistory.checkMatchesInModelHistory(s.id, n)) {
                            this.services.camViewsHistory.updateModelHistory(s.id, n),
                            (a = s).type = n;
                            break
                        }
                    }
                    return null === a && t.length > 0 && ((a = t[0]).type = n,
                    this.services.camViewsHistory.deleteModelHistory(n),
                    this.services.camViewsHistory.updateModelHistory(a.id, a.type)),
                    a
                }
                ,
                e.prototype.prepareModelData = function(e) {
                    var t = {};
                    if (e.a.length > 0) {
                        var a = this.getRandomInt(0, e.a.length - 1);
                        t.image = e.a[a].t,
                        t.height = (300 / e.a[a].k).toFixed(2)
                    } else
                        t.image = e.t,
                        t.height = (300 / e.k).toFixed(2);
                    return t.name = e.n,
                    t.id = e.id.toString(),
                    t.type = e.type,
                    void 0 !== e.l && (t.link = e.l),
                    t
                }
                ,
                e.prototype.isLocalStorageEnable = function() {
                    var e = "test";
                    try {
                        return localStorage.setItem(e, e),
                        localStorage.removeItem(e),
                        !0
                    } catch (e) {
                        return !1
                    }
                }
                ,
                e.prototype.findMatchesInCategories = function(e, t) {
                    for (var a = e.split("-").map((function(e) {
                        return e.toLowerCase()
                    }
                    )), n = 0, i = t; n < i.length; n++)
                        for (var o = i[n], s = 0, r = o.tags; s < r.length; s++) {
                            var l = r[s]
                              , c = l.split("-").map((function(e) {
                                return e.toLowerCase()
                            }
                            ));
                            if (1 === c.length) {
                                if (a.includes(c[0]))
                                    return o.key
                            } else if (a.join("-").includes(l))
                                return o.key
                        }
                    return null
                }
                ,
                e.prototype.getLastLocation = function(e) {
                    var t = e.split("/");
                    return t[t.length - 2]
                }
                ,
                e.prototype.getQueryString = function(e) {
                    var t = new URLSearchParams(e).get("q");
                    return null !== t ? t.replace(/\s+/g, "-") : null
                }
                ,
                e
            }();
            const V = R;
            var H = [i.category_rotator_maps, i.tag_rotator_maps, i.recent, i.popular, i.gallery_gc, i.search]
              , G = function() {
                function e(e, t, a) {
                    this.ee = e.eventEmitter,
                    this.services = e,
                    this.controller = t,
                    this.config = a,
                    this.init()
                }
                return e.getInstance = function(t, a, n) {
                    return null === this.instance && (this.instance = new e(t,a,n)),
                    this.instance
                }
                ,
                e.prototype.init = function() {
                    H.indexOf(this.config.pageType) < 0 || (this.services.camViewsHistory.checkModelHistoryExpire(),
                    this.controller.loadCamBannerData())
                }
                ,
                e.prototype.setGEOdata = function(e) {
                    this.controller.setUserGeo(e.geoCode)
                }
                ,
                e.prototype.getCamBlock = function() {
                    return this.controller.getCamBlock()
                }
                ,
                e.instance = null,
                e
            }();
            const z = G;
            var q = function(e, t, a, n) {
                return new (a || (a = Promise))((function(i, o) {
                    function s(e) {
                        try {
                            l(n.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }
                    function r(e) {
                        try {
                            l(n.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }
                    function l(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value,
                        t instanceof a ? t : new a((function(e) {
                            e(t)
                        }
                        ))).then(s, r)
                    }
                    l((n = n.apply(e, t || [])).next())
                }
                ))
            }
              , W = function(e, t) {
                var a, n, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0])
                            throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: r(0),
                    throw: r(1),
                    return: r(2)
                },
                "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }
                ),
                o;
                function r(r) {
                    return function(l) {
                        return function(r) {
                            if (a)
                                throw new TypeError("Generator is already executing.");
                            for (; o && (o = 0,
                            r[0] && (s = 0)),
                            s; )
                                try {
                                    if (a = 1,
                                    n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n),
                                    0) : n.next) && !(i = i.call(n, r[1])).done)
                                        return i;
                                    switch (n = 0,
                                    i && (r = [2 & r[0], i.value]),
                                    r[0]) {
                                    case 0:
                                    case 1:
                                        i = r;
                                        break;
                                    case 4:
                                        return s.label++,
                                        {
                                            value: r[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++,
                                        n = r[1],
                                        r = [0];
                                        continue;
                                    case 7:
                                        r = s.ops.pop(),
                                        s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = s.trys,
                                        (i = i.length > 0 && i[i.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                            s.label = r[1];
                                            break
                                        }
                                        if (6 === r[0] && s.label < i[1]) {
                                            s.label = i[1],
                                            i = r;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2],
                                            s.ops.push(r);
                                            break
                                        }
                                        i[2] && s.ops.pop(),
                                        s.trys.pop();
                                        continue
                                    }
                                    r = t.call(e, s)
                                } catch (e) {
                                    r = [6, e],
                                    n = 0
                                } finally {
                                    a = i = 0
                                }
                            if (5 & r[0])
                                throw r[1];
                            return {
                                value: r[0] ? r[1] : void 0,
                                done: !0
                            }
                        }([r, l])
                    }
                }
            }
              , J = function() {
                function e(e, t, a) {
                    this.userGEO = null,
                    this.camData = {},
                    this.intervalTimerId = null,
                    this.intervalTimerCounter = 0,
                    this._testFlag = !1,
                    this.ee = e.eventEmitter,
                    this.services = e,
                    this.model = t,
                    this.config = a
                }
                return e.prototype._testView = function(e, t) {
                    this._testFlag && (console.log("".concat(e, " - ")),
                    console.log(t))
                }
                ,
                e.prototype.loadCamBannerData = function() {
                    return q(this, void 0, void 0, (function() {
                        var e;
                        return W(this, (function(t) {
                            switch (t.label) {
                            case 0:
                                return this.setGeoCode(),
                                e = this,
                                [4, this.getCamData()];
                            case 1:
                                return e.camData = t.sent(),
                                this._testView("camData", this.camData),
                                [4, this.startIntervalLoading()];
                            case 2:
                                return t.sent(),
                                [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                e.prototype.setUserGeo = function(e) {
                    this.userGEO = e
                }
                ,
                e.prototype.getCamBlock = function() {
                    if (0 === Object.keys(this.camData).length)
                        return null;
                    var e = this.model.getCurrentModel(this.camData);
                    if (null === e)
                        return null;
                    var t = this.model.prepareModelData(e);
                    return this.camViewsSender(e.type),
                    this.createCamBlock(t)
                }
                ,
                e.prototype.camViewsSender = function(e) {
                    try {
                        fetch(this.config.camViewsStatsEndpoint + e).then()
                    } catch (e) {
                        console.log("Failed to send cam statistics")
                    }
                }
                ,
                e.prototype.setGeoCode = function() {
                    this.model.isLocalStorageEnable() && (this.userGEO = localStorage.getItem(this.config.geoCodeStorageName))
                }
                ,
                e.prototype.getLinkStripcash = function(e) {
                    return this.config.thumbModelsProfilePathSC + e.name
                }
                ,
                e.prototype.getCategoryLinkStripcash = function(e, t) {
                    return this.config.thumbModelsProfilePathSC + e.name + this.config.thumbModelsProfilePathParamCompany + t
                }
                ,
                e.prototype.getLinkImlive = function(e) {
                    return this.config.thumbModelsProfilePathImlive.replace("{model_name}", e.name)
                }
                ,
                e.prototype.getLinkJasmin = function(e) {
                    return void 0 === e.link ? "" : e.link
                }
                ,
                e.prototype.getModelRoomLink = function(e) {
                    var t = ""
                      , a = this.getCategory();
                    switch (e.type) {
                    case F.stripcash:
                        t = this.getLinkStripcash(e),
                        null !== a && (t = this.getCategoryLinkStripcash(e, a));
                        break;
                    case F.imlive:
                        t = this.getLinkImlive(e);
                        break;
                    case F.jasmin:
                        t = this.getLinkJasmin(e)
                    }
                    return t
                }
                ,
                e.prototype.createCamBlock = function(e) {
                    var t = document.createElement("li")
                      , a = document.createElement("a")
                      , n = document.createElement("img")
                      , i = document.createElement("span")
                      , o = document.createElement("div")
                      , s = document.createElement("span");
                    return t.className = "".concat(this.config.thumbWookmarkClass, " ").concat(this.config.thumbModelClass),
                    a.className = this.config.thumbLinkClass,
                    a.href = this.getModelRoomLink(e),
                    a.rel = "nofollow",
                    a.title = e.name,
                    a.target = "_blank",
                    a.setAttribute(this.config.thumbIdAttrName, e.id),
                    void 0 !== e.type ? a.setAttribute(this.config.thumbTypeAttrName, e.type) : a.setAttribute(this.config.thumbTypeAttrName, "null"),
                    n.src = this.config.thumbPixelImagePath,
                    n.setAttribute("data-src", e.image),
                    n.alt = e.name,
                    n.width = Number("300"),
                    n.height = Number(e.height),
                    i.className = "h2",
                    s.innerHTML = e.name,
                    o.innerHTML = "Online",
                    i.appendChild(o),
                    i.appendChild(s),
                    a.appendChild(i),
                    a.appendChild(n),
                    t.appendChild(a),
                    t
                }
                ,
                e.prototype.startIntervalLoading = function() {
                    return q(this, void 0, void 0, (function() {
                        var e = this;
                        return W(this, (function(t) {
                            return this.intervalTimerId = setInterval((function() {
                                return q(e, void 0, void 0, (function() {
                                    var e;
                                    return W(this, (function(t) {
                                        switch (t.label) {
                                        case 0:
                                            return this.intervalTimerCounter++,
                                            this.intervalTimerCounter > this.config.camLoadTimerLimit ? (clearInterval(this.intervalTimerId),
                                            [2]) : (this._testView("camData timer after", this.camData),
                                            e = this,
                                            [4, this.getCamData()]);
                                        case 1:
                                            return e.camData = t.sent(),
                                            this._testView("camData timer before", this.camData),
                                            [2]
                                        }
                                    }
                                    ))
                                }
                                ))
                            }
                            ), this.config.camLoadTimerIntervalMs),
                            [2]
                        }
                        ))
                    }
                    ))
                }
                ,
                e.prototype.getCamData = function() {
                    return q(this, void 0, void 0, (function() {
                        var e, t, a, n, i, o;
                        return W(this, (function(s) {
                            switch (s.label) {
                            case 0:
                                return e = this.model.getLanguages(navigator.languages),
                                t = this.getCategory(),
                                a = this.userGEO,
                                n = [],
                                this._testView("languages", e),
                                this._testView("category", t),
                                this._testView("geoCode", a),
                                n.push("mix=1"),
                                null !== e && n.push("langs=".concat(e)),
                                null !== t && n.push("category=".concat(t)),
                                null !== a && n.push("code=".concat(a)),
                                i = this.config.camDataPath + (n.length > 0 ? "?".concat(n.join("&")) : ""),
                                [4, fetch(i, {
                                    method: "GET",
                                    headers: {
                                        "Content-Type": "application/json"
                                    }
                                })];
                            case 1:
                                return (o = s.sent()).ok ? [4, o.json()] : [2, {}];
                            case 2:
                                return [2, s.sent()]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                e.prototype.getCategory = function() {
                    return "" === location.search ? this.model.getCategoryFromUrl(location.pathname, this.config.camDataProfileCategories) : this.model.getCategoryFromQueryString(location.search, this.config.camDataProfileCategories)
                }
                ,
                e
            }();
            const Y = J;
            var Q = function() {
                function e() {
                    this.config = null
                }
                return e.prototype.setConfig = function(e) {
                    this.config = e
                }
                ,
                e.prototype.updateModelHistory = function(e, t) {
                    if (null !== this.config) {
                        var a = this.getHistoryData(this.config.camViewsStorageName);
                        null === a && (a = this.createNewHistory()),
                        a[t].push(e),
                        a.t = (new Date).getTime(),
                        localStorage.setItem(this.config.camViewsStorageName, JSON.stringify(a))
                    }
                }
                ,
                e.prototype.checkMatchesInModelHistory = function(e, t) {
                    if (null === this.config)
                        return !1;
                    var a = this.getHistoryData(this.config.camViewsStorageName);
                    return null !== a && -1 !== a[t].indexOf(e)
                }
                ,
                e.prototype.checkModelHistoryExpire = function() {
                    if (null !== this.config) {
                        var e = this.getHistoryData(this.config.camViewsStorageName);
                        if (null !== e)
                            (new Date).getTime() - e.t > this.config.camViewsExpireMs && localStorage.removeItem(this.config.camViewsStorageName)
                    }
                }
                ,
                e.prototype.deleteModelHistory = function(e) {
                    if (null !== this.config) {
                        var t = this.getHistoryData(this.config.camViewsStorageName);
                        null !== t && (t[e] = [],
                        localStorage.setItem(this.config.camViewsStorageName, JSON.stringify(t)))
                    }
                }
                ,
                e.prototype.getHistoryData = function(e) {
                    var t = localStorage.getItem(e);
                    return null === t ? null : JSON.parse(t)
                }
                ,
                e.prototype.createNewHistory = function() {
                    var e = {};
                    return e.t = (new Date).getTime(),
                    e[F.stripcash] = [],
                    e[F.jasmin] = [],
                    e[F.imlive] = [],
                    e
                }
                ,
                e
            }();
            const X = Q;
            var K = {
                eventEmitter: new n,
                deviceDetect: new D,
                inViewport: new x,
                browserDetect: new M,
                frameTransform: new B,
                adViewsHistory: new U,
                camViewsHistory: new X,
                sponsorTabsNames: new j({
                    tabsClass: "sponsor-tabs",
                    searchWord: "Meet&Fuck",
                    replacementWord: "Sex Treffen",
                    languageCodes: ["de-AT", "de-CH", "de-DE", "de-LI", "de-LU"]
                })
            };
            const Z = new (function() {
                function e() {
                    this.adBannerManager = null,
                    this.camBannerManager = null
                }
                return e.prototype.intiAutoLaunchNoDependentServices = function() {
                    K.sponsorTabsNames.initService()
                }
                ,
                e.prototype.initAdBannerManager = function(e) {
                    K.adViewsHistory.setConfig(e);
                    var t = new E(K)
                      , a = new u(K,t,e);
                    this.adBannerManager = s.getInstance(K, a, e)
                }
                ,
                e.prototype.initCamBannerManager = function(e) {
                    K.camViewsHistory.setConfig(e);
                    var t = new V(K)
                      , a = new Y(K,t,e);
                    this.camBannerManager = z.getInstance(K, a, e)
                }
                ,
                e
            }());
            var $, ee = {
                pageType: "",
                thumbClass: "thumbwook",
                thumbInactiveClass: "inactive",
                adClass: "r-frame",
                adOnlyMobileClass: "adss-mob",
                adIncludedClass: "r-frame-on",
                adStaticClass: "r-frame-static",
                mainThumbContainerId: "main",
                relThumbContainerId: "rel-main",
                maxAdPerPage: 4,
                hpConfig: {
                    hpAdBlockScriptPath: "https://www.pornpics.com/advertise-57aecc1189.js",
                    hpAdScriptPath: "https://hpacdn.pornpics.com/renderer/renderer.js",
                    hpAdScriptDomain: "hpawd.pornpics.com",
                    hpAdScriptDataAttrName: "data-hpt-url",
                    hpAdScriptId: "hpt-rdr",
                    hpAdScriptEvent: "hp-rendered"
                },
                adViewsStorageName: "_adViewsStorage",
                adViewsExpireHours: 12,
                adUnits: [{
                    adName: "Adnium",
                    adAlias: "adm",
                    adID: "318",
                    isHP: !0,
                    adFrameSpotPath: "",
                    adStrategies: [{
                        geo: [],
                        geoException: ["de", "fr", "br", "in", "eg", "mx"],
                        deviceType: [],
                        browser: [],
                        browserException: [],
                        group: [1],
                        weight: 70,
                        viewsCap: 70,
                        sortNumber: 0
                    }]
                }, {
                    adName: "Adnium",
                    adAlias: "adm2",
                    adID: "318",
                    isHP: !0,
                    adFrameSpotPath: "",
                    adStrategies: [{
                        geo: ["de"],
                        geoException: [],
                        deviceType: [],
                        browser: [],
                        browserException: [],
                        group: [1],
                        weight: 70,
                        viewsCap: 37,
                        sortNumber: 0
                    }]
                }, {
                    adName: "Streamate",
                    adAlias: "sm",
                    adID: "1218",
                    isHP: !0,
                    adFrameSpotPath: "",
                    adStrategies: [{
                        geo: [],
                        geoException: ["br", "in", "eg", "mx"],
                        deviceType: [],
                        browser: [],
                        browserException: [],
                        group: [1],
                        weight: 70,
                        viewsCap: 5,
                        sortNumber: 0
                    }]
                }, {
                    adName: "TrafficStars",
                    adAlias: "ts",
                    adID: "",
                    isHP: !1,
                    adFrameSpotPath: "/ts_23_07.html",
                    adStrategies: [{
                        geo: [],
                        geoException: ["se", "br", "in", "eg", "mx"],
                        deviceType: [],
                        browser: [],
                        browserException: [],
                        group: [2],
                        weight: 10,
                        viewsCap: 4,
                        sortNumber: 0
                    }]
                }, {
                    adName: "MindGeek",
                    adAlias: "mg",
                    adID: "1101",
                    isHP: !0,
                    adFrameSpotPath: "",
                    adStrategies: [{
                        geo: [],
                        geoException: ["br", "in", "eg", "mx"],
                        deviceType: [],
                        browser: [],
                        browserException: [],
                        group: [2],
                        weight: 10,
                        viewsCap: 4,
                        sortNumber: 0
                    }]
                }, {
                    adName: "ExoClick",
                    adAlias: "exo",
                    adID: "334",
                    isHP: !0,
                    adFrameSpotPath: "",
                    adStrategies: [{
                        geo: [],
                        geoException: ["de", "fr", "br", "in", "eg", "mx"],
                        deviceType: [],
                        browser: [],
                        browserException: [],
                        group: [3],
                        weight: 70,
                        viewsCap: 65,
                        sortNumber: 0
                    }]
                }, {
                    adName: "ExoClick",
                    adAlias: "exo2",
                    adID: "333",
                    isHP: !0,
                    adFrameSpotPath: "",
                    adStrategies: [{
                        geo: ["de"],
                        geoException: [],
                        deviceType: [],
                        browser: [],
                        browserException: [],
                        group: [3],
                        weight: 300,
                        viewsCap: 51,
                        sortNumber: 0
                    }]
                }, {
                    adName: "ExoClick",
                    adAlias: "exo3",
                    adID: "334",
                    isHP: !0,
                    adFrameSpotPath: "",
                    adStrategies: [{
                        geo: ["fr"],
                        geoException: [],
                        deviceType: [],
                        browser: [],
                        browserException: [],
                        group: [3],
                        weight: 70,
                        viewsCap: 72,
                        sortNumber: 0
                    }]
                }, {
                    adName: "TrafficHouse",
                    adAlias: "th",
                    adID: "1161",
                    isHP: !0,
                    adFrameSpotPath: "",
                    adStrategies: [{
                        geo: [],
                        geoException: ["br", "in", "eg", "mx"],
                        deviceType: [],
                        browser: [],
                        browserException: [],
                        group: [2],
                        weight: 10,
                        viewsCap: 3,
                        sortNumber: 0
                    }]
                }],
                defaultAdUnit: {
                    adName: "TrafficStars",
                    adAlias: "ts2",
                    adID: "",
                    isHP: !1,
                    adFrameSpotPath: "/ts_21_03.html",
                    adStrategies: [{
                        geo: [],
                        geoException: [],
                        deviceType: [],
                        browser: [],
                        browserException: [],
                        group: [],
                        weight: 0,
                        viewsCap: 0,
                        sortNumber: 0
                    }]
                }
            };
            !function(e) {
                e.blonde = "blonde",
                e.redhead = "redhead",
                e.ebony = "ebony",
                e.latina = "latina",
                e.asian = "asian",
                e.teen = "teen",
                e.mature = "mature",
                e.fat = "fat",
                e.gay = "gay",
                e.shemale = "shemale"
            }($ || ($ = {}));
            var te = {
                pageType: "",
                camDataPath: "/additional_thumbs",
                camDataProfileCategories: [{
                    key: $.shemale,
                    tags: ["shemale", "shemales", "tranny", "trannies", "trans", "tgirl", "sissy", "ladyboy", "ladyboys"]
                }, {
                    key: $.gay,
                    tags: ["gay", "hunk", "twink", "gays", "twinks", "bear", "bears"]
                }, {
                    key: $.teen,
                    tags: ["teen", "teens", "young", "babe", "babes"]
                }],
                camViewsStorageName: "_models_h_2",
                camViewsExpireMs: 9e5,
                camLoadTimerLimit: 20,
                camLoadTimerIntervalMs: 6e4,
                geoCodeStorageName: "_geoCode",
                thumbWookmarkClass: "thumbwook",
                thumbModelClass: "c-model",
                thumbLinkClass: "rel-link",
                thumbModelsProfilePathSC: "https://go.pornpics.chat?userId=353e4188d9a9c1a093c1c9f0924ec9ad933d0e4dc993217fdd17e56b5ac764bd&showModal=signup&targetDomain=pornpics.chat&path=/",
                thumbModelsProfilePathImlive: "https://imlive.com/live-sex-chats/cam-girls/video-chats/{model_name}/?wid=126548693760",
                thumbModelsProfilePathParamCompany: "&campaignId=",
                thumbTypeAttrName: "data-cam-type",
                thumbIdAttrName: "data-cam-id",
                thumbPixelImagePath: "https://static.pornpics.com/style/img/1px.png",
                camViewsStatsEndpoint: "/webcams/st/?t="
            };
            e = a.hmd(e);
            var ae, ne, ie = {};
            ie.botlist = ["mediaget", "jorgee", "analyza", "analyzer", "aggregator", "archive", "archiving", "auto", "bot", "capture", "check", "classify", "clown", "collect", "control", "crawl", "deep[-\\s]?link", "detector", "download(?:s|er)", "extract", "eyes", "fantom", "feed", "fetch", "finder", "gather", "getter", "gopher", "hack", "harvest", "hound", "html2", "http_client", "images", "index", "java/", "leech", "library", "library", "link check", "linkman", "links?\\s?check", "loader", "locate", "locator", "mack", "monitor", "parse", "perl", "phantom", "php/\\d", "program", "python", "rating", "reader", "reaper", "retrieve", "scan", "scrape", "search", "search[-\\s]?engine", "seer", "siphon", "site[-\\s]?check", "site[-\\s]?scan", "sniff", "somewhere", "spider", "spy", "spyder", "sweep", "thumb", "tracker", "url", "utility", "validator", "verifier", "verify", "warez", "web[-\\s]?search", "webinator", "worth", "yahoo", "!Susie", "/www\\.answerbus\\.com", "/www\\.unchaos\\.com", "/www\\.wmtips\\.com", "008/", "192\\.comAgent", "8484 Boston Project", "<http://www\\.sygol\\.com/>", "A-Online Search", "A6-Indexer", "ADmantX", "AVSearch", "Aberja Checkomat", "Abonti", "Aboundex", "Accoona-AI-Agent", "Ad Muncher", "AddThis", "AltaVista Intranet", "Anemone", "Anturis Agent", "Aport", "AppEngine-Google", "Arachmo", "Arachnoidea", "Arachnophilia/", "AspTear", "Avirt Gateway Server", "Azureus", "B-l-i-t-z-B-O-T", "BCKLINKS 1\\.0", "BingPreview", "BMLAUNCHER", "BStop\\.BravoBrian\\.it Agent Detector", "BUbiNG", "BW-C-2", "B_l_i_t_z_B_O_T", "BackStreet Browser", "Big Brother", "Big Fish", "BigBozz/", "BilderSauger", "BlackWidow", "BlogPulseLive", "Blogpulse", "Bookmark Buddy", "Bookmark Renewal", "BorderManager", "BravoBrian", "Browsershots", "BullsEye", "BunnySlippers", "Buscaplus", "Butterfly/", "CC Metadata Scaper", "CE-Preload", "CERN-HTTPD", "CJB\\.NET Proxy", "COAST WebMaster Pro/", "CSE HTML Validator Professional", "Ceramic Tile Installation Guide", "Cerberian Drtrs", "Charlotte", "Chat Catcher/", "CheckWeb", "China Local Browse", "Chitika ContentHit", "Claymont\\.com", "CloudFlare-AlwaysOnline", "CoBITSProbe", "ColdFusion", "Commons-HttpClient", "ContentSmartz", "Covac UPPS Cathan", "Covario-IDS", "Custo x\\.x \\(www\\.netwu\\.com\\)", "CyberPatrol", "DA \\d", "DAP x", "DAUMOA-video", "DBrowse \\d", "DDD", "DISCo Pump x\\.x", "DNS-Tools Header-Analyzer", "DSurf15", "DTAAgent", "DTS Agent", "DataparkSearch", "DepSpid", "DigOut4U", "Digg", "DnloadMage", "DomainAppender", "Download Demon", "Download Druid", "Download Express", "Download Master", "Download Ninja", "Download Wonder", "DownloadDirect", "Download\\.exe", "DreamPassport", "Drupal", "Dual Proxy", "EARTHCOM", "EBrowse \\d", "ESurf15", "Educate Search VxB", "EldoS TimelyWeb/", "ElectricMonk", "EmailWolf", "Embedly/", "Evliya Celebi", "Exalead", "Expired Domain Sleuth", "Exploratodo/", "ExtractorPro", "Extreme Picture Finder", "EyeCatcher", "FDM \\d", "FLATARTS_FAVICO", "FSurf", "FairAd Client", "FastBug", "FavIconizer", "FavOrg", "Faveeo/", "Feedfetcher-Google", "FindAnISP\\.com", "FindLinks", "Flamingo_SearchEngine", "FlashGet", "FlipboardRSS/", "FollowSite", "FollowSite\\.com", "FuseBulb\\.Com", "GTmetrix", "Genieo", "GigablastOpenSource", "Go!Zilla", "GoBeez", "GoForIt\\.com", "GoForIt\\.com", "Goldfire Server", "Google Wireless Transcoder", "Google Favicon", "Google Page Speed Insights", "GroupHigh/", "H010818", "HTTPGet", "HTTPResume", "Hatena Mobile Gateway/", "Hatena Pagetitle Agent/", "Hatena RSS/", "HiDownload", "HitList", "Holmes", "HubSpot Marketing Grader", "HyperixScoop", "IDA", "IEFav172Free", "IODC", "IOI", "ISC Systems iRc Search", "IlTrovatore-Setaccio", "InAGist", "InfoSeek Sidewinder/", "InfoWizards Reciprocal Link System PRO", "Inktomi Search", "Insitor\\.com search", "Insitornaut", "InstallShield DigitalWizard", "Internet Ninja", "InterseekWeb", "JBH Agent 2\\.0", "Jack", "JemmaTheTourist", "JetCar", "Journster", "KDDI-SN22", "Kapere", "Kevin", "KimonoLabs", "KnowItAll", "Kontiki Client", "L\\.webis", "Lachesis", "Larbin", "LibertyW", "Lincoln State Web Browser", "Link Commander", "Link Valet", "LinkExaminer", "LinkPimpin", "LinkProver", "LinkStash", "LinkTiger", "LinkWalker", "Linkguard", "Links2Go", "Lipperhey Link Explorer", "Lipperhey SEO Service", "Lipperhey-Kaus-Australis/", "Look\\.com", "Lovel", "MARTINI", "MFHttpScan", "MSIE or Firefox mutant", "MVAClient", "Mac Finder", "MantraAgent", "MapoftheInternet\\.com", "Marketwave Hit List", "Martini", "Marvin", "MasterSeek", "Mata Hari/", "Mediapartners-Google", "MegaIndex\\.ru", "MegaSheep", "Megite", "Mercator", "MetaProducts Download Express", "MetaURI", "MicroBaz", "Microsoft_Internet_Explorer_5", "Mindjet MindManager", "Missouri College Browse", "Mister Pix", "Mizzu Labs", "Mnogosearch", "Mo College", "MonTools\\.com", "Morning Paper", "Mrcgiguy", "Mulder", "MuscatFerret", "MusicWalker2", "NG-Search", "NORAD National Defence Network", "NetMechanic", "NetSprint", "Netcraft Web Server Survey", "NetcraftSurveyAgent/", "NewsGator", "Norton-Safeweb", "Notifixious", "NutchCVS", "Nymesis", "ODP links", "OSSProxy", "Octopus", "Octora Beta", "OliverPerry", "Onet\\.pl", "Online Website Link Checker", "Oracle Application", "Orbiter", "PBrowse", "PEval", "PSurf15a", "Page Analyzer", "Page Valet/", "Pagebull", "PagmIEDownload", "Panopta v", "PayPal IPN", "Peew", "Perman Surfer", "Pingdom", "Pingoscope", "Pita", "Pizilla", "Ploetz \\+ Zeller", "Plukkie", "Pockey7", "Pogodak", "Poirot", "Pompos", "Port Huron Labs", "PostFavorites", "PostPost", "Powermarks", "Project XP5", "PureSight", "PuxaRapido", "PycURL", "QXW03018", "Qango\\.com Web Directory", "Qseero", "QuepasaCreep", "Qwantify", "REL Link Checker", "RMA/1\\.0", "RSurf15a", "Radian6", "RankSonicSiteAuditor/", "ReGet", "RetrevoPageAnalyzer", "Riddler", "Rival IQ", "RoboPal", "Robosourcer", "SBIder", "SEOCentro", "SEOstats", "SSurf15a", "Scooter", "ScoutAbout", "ScoutJet", "Scrapy", "Scrubby", "SearchSight", "Seeker\\.lookseek\\.com", "Seznam screenshot-generator", "Shagseeker", "ShopWiki", "Siigle Orumcex", "SimplyFast\\.info", "Simpy", "Site Server", "Site24x7", "SiteBar", "SiteCondor", "SiteRecon", "SiteSnagger", "SiteUptime\\.com", "SiteXpert", "SkypeUriPreview", "Snappy", "Sphere Scout", "Sphider", "SquidClamAV_Redirector", "Sqworm", "StackRambler", "StatusCake", "SuperCleaner", "SurfMaster", "SurferF3", "T-H-U-N-D-E-R-S-T-O-N-E", "TSurf15a", "Tagword", "Talkro Web-Shot", "TargetSeek", "Teleport Pro", "Teradex Mapper", "Theophrastus", "TinEye", "Twingly Recon", "Twotrees Reactive Filter", "TygoProwler", "Ultraseek", "Under the Rainbow", "UnwindFetchor", "UofTDB_experiment", "User-Agent: ", "VYU2", "Vagabondo", "Version: xxxx Type:xx", "Vivante Link Checker", "Vonna\\.com b o t\\", "Vortex", "WFARC", "WSN Links", "Wappalyzer", "Watchfire WebXM", "Waypath Scout", "WeSEE:Search", "Web Snooper", "WebCompass", "WebPix", "WebVac", "Webclipping\\.com", "Webglimpse", "Weblog Attitude Diffusion", "Website Explorer", "Websnapr/", "Websquash\\.com", "Webster v0\\.", "Webverzeichnis\\.de", "WhizBang! Lab", "Whizbang", "Wildsoft Surfer", "WinGet", "WinHTTP", "WoW Lemmings Kathune", "WomlpeFactory", "WordPress\\.com mShots", "WorldLight", "XML Sitemaps Generator", "Xenu Link Sleuth", "Xenu's Link Sleuth", "Xylix", "Y!J-ASR", "YandeG", "YandexImages", "YandexMetrika", "Yoleo", "Yoono", "Zao", "Zearchit", "Zippy", "ZnajdzFoto/Image", "ZyBorg", "\\(privoxy/", "^ng/", "aboutthedomain", "accoona", "acoon", "adbeat\\.com", "agada.de", "agadine/", "aiderss/", "airmail\\.etn", "airmail\\net", "aladin/", "alexa site audit", "allrati/", "alyze\\.info", "amzn_assoc", "appie", "arachnode\\.net", "araneo/", "archive-com", "asafaweb\\.com", "asahina-antenna/", "ask[-\\s]?jeeves", "ask\\.24x\\.info", "aspseek/", "assort/", "asterias/", "atomic_email_hunter/", "atomz/", "augurfind", "augurnfind", "avsearch-3\\.0\\(altavista/avc\\)", "beammachine/", "beebwaredirectory/v0\\.01", "bibnum\\.bnf", "bigbrother/", "biglotron", "bilbo/", "binlar", "blaiz-bee/", "bloglines-images/", "bloglines/", "blogsearch/", "blogzice/", "bobby/", "boitho\\.com-dc", "bookdog/x\\.x", "bookmarkbase\\(2/;http://bookmarkbase\\.com\\)", "bpimagewalker/", "bsdseek/", "btwebclient/", "bumblebee@relevare\\.com", "bwh3_user_agent", "calif/", "carleson/", "ccubee/x\\.x", "cfetch/", "cg-eye interactive", "changedetection", "charon/", "checklinks/", "cloakdetect/", "cnet\\.com", "coccoc", "cocoal\\.icio\\.us/", "collage\\.cgi/", "combine/", "combine/x\\.0", "contenttabreceiver", "convera", "copperegg/revealuptime/fremontca", "coralwebprx/", "cosmos", "cougarsearch/", "crowsnest/", "csci_b659/", "curl", "cuwhois/", "datacha0s/", "datafountains/dmoz", "dataprovider", "dbdig\\(http://www\\.prairielandconsulting\\.com\\)", "dc-sakura/x\\.xx", "deepak-usc/isi", "del\\.icio\\.us-thumbnails/", "delegate/", "diagem/", "diamond/x\\.0", "dlman", "dlvr\\.it/", "docomo/", "drupact", "e-sense", "easydl/", "ec2linkfinder", "ecairn\\.com/grabber", "echo!/", "efp@gmx\\.net", "egothor/", "ejupiter\\.com", "enterprise_search/", "envolk", "europarchive\\.org", "eventax/", "exactseek\\.com", "ezooms", "facebookexternalhit", "faedit/", "favcollector/", "feeltiptop\\.com", "fileboost\\.net/", "filtrbox/", "findlink", "findthatfile", "firefly/", "flexum/", "fluffy", "flunky", "focusedsampler/", "forensiq\\.com", "francis/", "freshdownload/x\\.xx", "g00g1e\\.net", "galaxy\\.com", "gazz/x\\.x", "geek-tools\\.org", "genderanalyzer", "genieknows", "geourl/", "getright/", "getrightpro/", "ghostroutehunter/", "gigabaz/", "go!zilla/", "go-ahead-got-it/", "goblin/", "gonzo1", "gonzo2", "gooblog/", "goofer/", "gossamer-threads\\.com", "grapefx/", "gromit/", "grub-client", "gulliver/", "harvest-ng/", "haste/", "hatenascreenshot/", "helix/", "heritrix", "hippias/", "hotmail.com", "htdig", "htmlparser/", "http-header-abfrage/", "http://anonymouse\\.org/", "http://ask\\.24x\\.info/", "http://ozysoftware\\.com/index\\.html", "http://www\\.ip2location\\.com", "http://www\\.monogol\\.de", "http://www\\.sygol\\.com", "http://www\\.timelyweb\\.com/", "http::lite/", "httpunit", "httrack", "hyperestraier/", "iZSearch", "ichiro", "ics \\d", "ideare - SignSite", "idwhois\\.info", "iframely/", "igdeSpyder", "igetter/", "iltrovatore-setaccio/", "imageengine/", "imagewalker/", "incywincy\\(http://www\\.look\\.com\\)", "info@pubblisito\\.com", "infofly/", "infolink/", "infomine/", "inkpeek\\.com", "inspectorwww/", "integrity/", "integromedb", "intelix/", "intelliseek\\.com", "internetlinkagent/", "ips-agent", "iqdb/", "iria/", "irvine/", "isitup\\.org", "isurf", "ivia/", "iwagent/", "j-phone/", "jchecklinks/", "jigsaw/", "kalooga/kalooga-4\\.0-dev-datahouse", "kasparek@naparek\\.cz", "ke_1\\.0/", "kit-fireball/", "knowledge\\.com/", "kulturarw3/", "kummhttp/", "labrador/", "lecodechecker/", "leia/", "libweb/clshttp", "lightningdownload/", "linkalarm/", "linkdex", "linklint-checkonly/", "linkscan/", "linkscan/x\\.x", "linksonar/", "linksweeper/", "loadimpactrload/", "ltx71", "lwp-", "lwp-trivial", "lwp::", "mabontland", "magicwml/", "mail\\.ru/", "mammoth/", "masagool/", "mediasearch/", "metainspector/", "metaspinner/", "metatagsdir/", "miixpc/", "miniflux\\.net", "moget/x\\.x", "mogimogi", "moiNAG", "monkeyagent", "msnptc/", "msproxy/", "multiBlocker browser", "multitext/", "mygetright/", "naofavicon4ie/", "naparek\\.cz\\", "nationaldirectoryaddurl/", "netants/", "netlookout/", "netluchs/", "netpumper/x\\.xx", "netresearchserver", "netwu\\.com", "neutrinoapi/", "newt", "nico/", "noyona_0_1", "nsauditor/", "nutch", "ocelli/", "oegp", "online link validator", "openisearch/", "ow\\.ly", "ownCloud News/", "ozelot/", "page2rss", "panscient", "parasite/", "pavuk/", "pd02_1", "photon/", "picosearch/", "pingspot/", "https://www\\.pinterest\\.com/bot\\.html", "pockey-gethtml/", "pockey-gethtml/x\\.xx", "pockey/x\\.x\\.x", "popdexter/", "postrank", "pricepi\\.com", "privacyfinder/", "prlog\\.ru", "pro-sitemaps\\.com", "protopage/", "proximic", "psycheclone", "puf/", "rabaz", "readability/", "realdownload/", "reaper/", "responsecodetest/", "rico/", "robozilla/", "rotondo/", "rpt-httpclient/", "samualt9", "saucenao/", "scooter/", "scoutant/", "scoutmaster", "searchguild/dmoz/experiment", "semaforo\\.net", "semager/", "semanticdiscovery", "seo-nastroj\\.cz", "siteexplorer\\.info", "sitesucker/", "sitexy\\.com", "skampy/", "skimpy/", "skywalker/", "slarp/", "slider\\.com", "slurp", "slysearch/", "smartdownload/", "smartwit\\.com", "sogou", "sohu agent", "speeddownload/", "speedy", "speng", "spida/", "spinne/", "squidclam", "stamina/", "suchbaer\\.de", "summify", "suzuran", "synapse", "syncit/x\\.x", "szukacz/", "tags2dir\\.com/", "targetblaster\\.com/", "teoma", "therarestparser/", "tkensaku/x\\.x\\(http://www\\.tkensaku\\.com/q\\.html\\)", "truwoGPS", "tuezilla", "tumblr/", "unknownght\\.com", "updated", "uri::fetch/", "urlbase/", "urlresolver", "user-agent=mozilla/", "utorrent/", "vakes/", "vb wininet", "versus", "verzamelgids/", "viking", "vkshare", "voltron", "vonna", "voyager-hc/", "w3c-webcon/", "w3dt\\.net", "wavefire/", "wbsrch\\.com", "wdg_validator/", "web-bekannt", "webauto/", "webbandit/", "webbug/", "webcollage", "webcookies", "webcorp/", "webcraft", "webfetch/", "webgobbler/", "weblight/", "webmastercoffee/", "webminer/x\\.x", "webmon ", "websearch\\.com\\.au/", "webspinne/", "webstat/", "webstripper/", "webtrafficexpress/x\\.0", "webtrends/", "webval/", "webwatchermonitor/", "wf84", "wget", "whatsapp", "whatsmyip\\.org", "whatsup/x\\.x", "whatuseek_winona/", "whoami", "whoiam", "wish-project", "worqmada/", "wotbox", "wusage/x\\.0@boutell\\.com", "wwlib/linux", "www-mechanize/", "www\\.ackerm\\.com", "www\\.alertra\\.com", "www\\.arianna\\.it", "www\\.ba\\.be", "www\\.de\\.com", "www\\.evri\\.com/evrinid", "www\\.gozilla\\.com\\", "www\\.idealobserver\\.com", "www\\.iltrovatore\\.it", "www\\.iskanie\\.com", "www\\.kosmix\\.com", "www\\.megaproxy\\.com", "www\\.moreover\\.com", "www\\.mowser\\.com", "www\\.nearsoftware\\.com", "www\\.ssllabs\\.com", "wwwc/", "wwwoffle/", "wwwster/", "wxDownload Fast", "xirq/", "xrl/", "y!j-srd/", "y!oasis/test", "yacy", "yandex", "yanga", "yarienavoir\\.net/", "yeti", "yoogliFetchAgent", "youtube-dl", "zedzo\\.digest/", "zeus", "developers\\.google\\.com\\/\\+\\/web\\/snippet\\/"],
            ae = jQuery,
            ne = function() {
                var e = {
                    align: "center",
                    autoResize: !0,
                    comparator: null,
                    direction: void 0,
                    ignoreInactiveItems: !0,
                    inactiveClass: "wookmark-inactive",
                    itemSelector: void 0,
                    itemWidth: 0,
                    fillEmptySpace: !1,
                    flexibleWidth: 0,
                    offset: 5,
                    outerOffset: 0,
                    onLayoutChanged: void 0,
                    placeholderClass: "wookmark-placeholder",
                    possibleFilters: [],
                    resizeDelay: 50,
                    verticalOffset: void 0
                };
                function t(e, t) {
                    return function() {
                        return e.apply(t, arguments)
                    }
                }
                var a = function(e) {
                    e()
                };
                function n(e, t) {
                    var a;
                    for (a in t)
                        t.hasOwnProperty(a) && (e.style[a] = t[a])
                }
                function i(e, t) {
                    a((function() {
                        var i, o;
                        for (i = 0; i < e.length; i++)
                            n((o = e[i]).el, o.css);
                        "function" == typeof t && a(t)
                    }
                    ))
                }
                function o(e) {
                    return e.replace(/^\s+|\s+$/g, "").toLowerCase()
                }
                function s(e, t, a) {
                    window.jQuery ? ae(e).off(t, a) : e.removeEventListener ? e.removeEventListener(t, a) : e.detachEvent("on" + t, a)
                }
                function r(e, t, a) {
                    s(e, t, a),
                    window.jQuery ? ae(e).on(t, a) : e.addEventListener ? e.addEventListener(t, a) : e.attachEvent("on" + t, (function() {
                        a.call(e)
                    }
                    ))
                }
                function l(e) {
                    return e.offsetWidth
                }
                function c(e, t) {
                    return e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)","gi").test(e.className)
                }
                function u(e, t) {
                    e.classList ? e.classList.add(t) : e.className += " " + t
                }
                function d(e, t, a, n) {
                    void 0 === n && (n = "wookmark-");
                    var i = e.getAttribute("data-" + n + t);
                    return !0 === a ? parseInt(i, 10) : i
                }
                function p(e, t, a, n) {
                    void 0 === n && (n = "wookmark-"),
                    e.setAttribute("data-" + n + t, a)
                }
                function m(e, t) {
                    return void 0 !== window.getComputedStyle ? window.getComputedStyle(e, null).getPropertyValue(t) : e.currentStyle[t]
                }
                function h(e, t) {
                    var a, n = e.length;
                    for (a = 0; a < n; a++)
                        if (e[a] === t)
                            return a;
                    return -1
                }
                function g(e, a) {
                    a = a || {},
                    "string" == typeof e && (e = document.querySelector(e)),
                    this.container = e,
                    this.columns = this.resizeTimer = null,
                    this.activeItemCount = 0,
                    this.placeholders = [],
                    this.itemHeightsInitialized = !1,
                    this.itemHeightsDirty = !1,
                    this.elementTag = "div",
                    this.initItems = t(this.initItems, this),
                    this.updateOptions = t(this.updateOptions, this),
                    this.onResize = t(this.onResize, this),
                    this.onRefresh = t(this.onRefresh, this),
                    this.getItemWidth = t(this.getItemWidth, this),
                    this.layout = t(this.layout, this),
                    this.layoutFull = t(this.layoutFull, this),
                    this.layoutColumns = t(this.layoutColumns, this),
                    this.filter = t(this.filter, this),
                    this.clear = t(this.clear, this),
                    this.getActiveItems = t(this.getActiveItems, this),
                    this.refreshPlaceholders = t(this.refreshPlaceholders, this),
                    this.sortElements = t(this.sortElements, this),
                    this.updateFilterClasses = t(this.updateFilterClasses, this),
                    this.initItems(),
                    this.container.style.display = "block",
                    this.updateOptions(a),
                    this.updateFilterClasses(),
                    this.autoResize && r(window, "resize", this.onResize),
                    r(this.container, "refreshWookmark", this.onRefresh)
                }
                return g.prototype.initItems = function() {
                    if (void 0 === this.itemSelector) {
                        for (var e, t = [], a = this.container.children, n = a.length; n--; )
                            8 !== (e = a[n]).nodeType && (e.style.display = "",
                            p(e, "id", n, ""),
                            t.unshift(e));
                        this.items = t
                    } else
                        this.items = this.container.querySelectorAll(this.itemSelector);
                    this.items.length && (this.elementTag = this.items[0].tagName),
                    this.itemHeightsDirty = !0
                }
                ,
                g.prototype.updateFilterClasses = function() {
                    for (var e, t, a, n, i, s = this.items.length, r = {}, l = this.possibleFilters, c = l.length; s--; )
                        if (a = this.items[s],
                        (t = JSON.parse(d(a, "filter-class", !1, ""))) && "object" == typeof t)
                            for (e = t.length; e--; )
                                n = o(t[e]),
                                r.hasOwnProperty(n) || (r[n] = []),
                                r[n].push(a);
                    for (; c--; )
                        i = o(l[c]),
                        r.hasOwnProperty(i) || (r[i] = []);
                    this.filterClasses = r
                }
                ,
                g.prototype.updateOptions = function(t) {
                    var a;
                    for (a in this.itemHeightsDirty = !0,
                    t = t || {},
                    e)
                        e.hasOwnProperty(a) && (t.hasOwnProperty(a) ? this[a] = t[a] : this.hasOwnProperty(a) || (this[a] = e[a]));
                    this.verticalOffset = this.verticalOffset || this.offset,
                    this.layout(!0)
                }
                ,
                g.prototype.onResize = function() {
                    clearTimeout(this.resizeTimer),
                    this.itemHeightsDirty = 0 !== this.flexibleWidth,
                    this.resizeTimer = setTimeout(this.layout, this.resizeDelay)
                }
                ,
                g.prototype.onRefresh = function() {
                    this.itemHeightsDirty = !0,
                    this.layout()
                }
                ,
                g.prototype.filter = function(e, t, a) {
                    var n, i, s, r, l, c, p, m = [], g = [];
                    if (t = t || "or",
                    a = a || !1,
                    (e = e || []).length) {
                        for (i = 0; i < e.length; i++)
                            l = o(e[i]),
                            this.filterClasses.hasOwnProperty(l) && m.push(this.filterClasses[l]);
                        if (i = n = m.length,
                        "or" === t || 1 === n)
                            for (; i--; )
                                g = g.concat(m[i]);
                        else if ("and" === t) {
                            for (var f, b, v, y = m[0], w = !0; i--; )
                                m[i].length < y.length && (y = m[i]);
                            for (i = (y = y || []).length; i--; ) {
                                for (b = y[i],
                                s = n,
                                w = !0; s-- && w; )
                                    if (y !== (v = m[s])) {
                                        for (f = !1,
                                        r = v.length; r-- && !f; )
                                            f = v[r] === b;
                                        w &= f
                                    }
                                w && (g = g.concat(y[i]))
                            }
                        }
                        if (n > 1 && (g = function(e) {
                            for (var t, a = {}, n = [], i = e.length; i--; )
                                t = d(e[i], "id", !0, ""),
                                a.hasOwnProperty(t) || (a[t] = 1,
                                n.push(e[i]));
                            return n
                        }(g)),
                        !a)
                            for (i = this.items.length; i--; )
                                -1 === h(g, this.items[i]) && u(this.items[i], this.inactiveClass)
                    } else
                        g = this.items;
                    if (!a) {
                        for (i = g.length; i--; )
                            c = g[i],
                            p = this.inactiveClass,
                            c.classList ? c.classList.remove(p) : c.className = c.className.replace(new RegExp("(^|\\b)" + p.split(" ").join("|") + "(\\b|$)","gi"), " ");
                        this.columns = null,
                        this.layout()
                    }
                    return g
                }
                ,
                g.prototype.refreshPlaceholders = function(e, t) {
                    var a, i, o, s, r, l, c, u = this.container.offsetHeight, p = this.columns.length, h = "";
                    if (this.placeholders.length < p) {
                        for (a = 0; a < p - this.placeholders.length; a++)
                            h += "<" + this.elementTag + ' class="' + this.placeholderClass + '"/>';
                        this.container.insertAdjacentHTML("beforeend", h),
                        this.placeholders = this.container.querySelectorAll("." + this.placeholderClass)
                    }
                    for (s = this.offset + 2 * parseInt(m(this.placeholders[0], "border-left-width"), 10) || 0,
                    s += 2 * parseInt(m(this.placeholders[0], "padding-left"), 10) || 0,
                    a = 0; a < this.placeholders.length; a++)
                        l = this.placeholders[a],
                        i = this.columns[a],
                        a >= p || 0 === i.length ? l.style.display = "none" : (c = d(r = i[i.length - 1], "top", !0, "") + d(r, "height", !0, "") + this.verticalOffset,
                        n(l, {
                            position: "absolute",
                            display: (o = Math.max(0, u - c - s)) > 0 ? "block" : "none",
                            transform: "translate3d(" + (a * e + t) + "px, " + c + "px, 0px)",
                            width: e - s + "px",
                            height: o + "px"
                        }))
                }
                ,
                g.prototype.getActiveItems = function() {
                    var e, t, a = this.inactiveClass, n = [], i = this.items;
                    if (!this.ignoreInactiveItems)
                        return i;
                    for (e = 0; e < i.length; e++)
                        c(t = i[e], a) || n.push(t);
                    return n
                }
                ,
                g.prototype.getItemWidth = function() {
                    var e = this.itemWidth
                      , t = l(this.container) - 2 * this.outerOffset
                      , a = this.flexibleWidth;
                    if ("function" == typeof e && (e = this.itemWidth()),
                    this.items.length > 0 && (void 0 === e || 0 === e && !this.flexibleWidth) ? e = l(this.items[0]) : "string" == typeof e && e.indexOf("%") >= 0 && (e = parseFloat(e) / 100 * t),
                    a) {
                        "function" == typeof a && (a = a()),
                        "string" == typeof a && a.indexOf("%") >= 0 && (a = parseFloat(a) / 100 * t);
                        var n = t + this.offset
                          , i = Math.floor(.5 + n / (a + this.offset))
                          , o = Math.floor(n / (e + this.offset))
                          , s = Math.max(i, o)
                          , r = Math.min(a, Math.floor((t - (s - 1) * this.offset) / s));
                        e = Math.max(e, r)
                    }
                    return e
                }
                ,
                g.prototype.layout = function(e, t) {
                    if (e || null !== this.container.offsetParent) {
                        var a, n, i = this.getItemWidth(), o = i + this.offset, s = l(this.container) - 2 * this.outerOffset, r = Math.floor((s + this.offset) / o), c = 0, u = this.getActiveItems(), d = u.length;
                        if (e || this.itemHeightsDirty || !this.itemHeightsInitialized) {
                            for (var m = 0; m < d; m++)
                                n = u[m],
                                this.flexibleWidth && (n.style.width = i + "px"),
                                p(n, "height", n.offsetHeight, "");
                            this.itemHeightsDirty = !1,
                            this.itemHeightsInitialized = !0
                        }
                        r = Math.max(1, Math.min(r, d)),
                        a = this.outerOffset,
                        "center" === this.align && (a += Math.floor(s - (r * o - this.offset) + .5 >> 1)),
                        this.direction = this.direction || ("right" === this.align ? "right" : "left"),
                        c = e || null === this.columns || this.columns.length !== r || this.activeItemCount !== d ? this.layoutFull(o, r, a) : this.layoutColumns(o, a),
                        this.activeItemCount = d,
                        this.container.style.height = c + "px",
                        this.fillEmptySpace && this.refreshPlaceholders(o, a),
                        void 0 !== this.onLayoutChanged && "function" == typeof this.onLayoutChanged && this.onLayoutChanged(),
                        "function" == typeof t && t()
                    }
                }
                ,
                g.prototype.sortElements = function(e) {
                    return "function" == typeof this.comparator ? e.sort(this.comparator) : e
                }
                ,
                g.prototype.layoutFull = function(e, t, a) {
                    var n, o, s, r, l = 0, m = 0, h = null, g = null, f = [], b = [], v = "left" === this.align, y = this;
                    for (this.columns = [],
                    s = (o = this.sortElements(this.getActiveItems())).length; f.length < t; )
                        f.push(this.outerOffset),
                        this.columns.push([]);
                    for (; m < s; ) {
                        for (n = o[m],
                        h = f[0],
                        g = 0,
                        l = 0; l < t; l++)
                            f[l] < h && (h = f[l],
                            g = l);
                        p(n, "top", h, ""),
                        r = a,
                        (g > 0 || !v) && (r += g * e),
                        b[m] = {
                            el: n,
                            css: {
                                position: "absolute",
                                transform: "translate3d(" + r + "px, " + h + "px, 0px)"
                            }
                        },
                        f[g] += d(n, "height", !0, "") + this.verticalOffset,
                        this.columns[g].push(n),
                        m++
                    }
                    return i(b, (function() {
                        c(y.container, "wookmark-initialised") || u(y.container, "wookmark-initialised")
                    }
                    )),
                    Math.max.apply(Math, f)
                }
                ,
                g.prototype.layoutColumns = function(e, t) {
                    for (var a, n, o, s, r = [], l = [], c = 0, u = 0, m = this.columns.length; m--; ) {
                        for (a = this.outerOffset,
                        r.push(a),
                        n = this.columns[m],
                        s = m * e + t,
                        c = 0; c < n.length; c++,
                        u++)
                            p(o = n[c], "top", a, ""),
                            l[u] = {
                                el: o,
                                css: {
                                    transform: "translate3d(" + s + "px, " + a + "px, 0px)"
                                }
                            },
                            a += d(o, "height", !0, "") + this.verticalOffset;
                        r[m] = a
                    }
                    return i(l, null),
                    Math.max.apply(Math, r)
                }
                ,
                g.prototype.clear = function() {
                    clearTimeout(this.resizeTimer);
                    for (var e = this.placeholders.length; e--; )
                        this.container.removeChild(this.placeholders[e]);
                    s(window, "resize", this.onResize),
                    s(this.container, "refreshWookmark", this.onRefresh)
                }
                ,
                void 0 !== window.jQuery && (jQuery.fn.wookmark = function(e) {
                    var t = this.length;
                    if (void 0 !== e && e.container instanceof jQuery && (e.container = e.container[0]),
                    t > 1)
                        for (; t--; )
                            ae(this).eq(t).wookmark(e);
                    else
                        1 === t && (this.wookmarkInstance ? this.wookmarkInstance.updateOptions(e || {}) : this.wookmarkInstance = new g(this[0],e || {}));
                    return this
                }
                ),
                window.Wookmark = g,
                g
            }
            ,
            "function" == typeof define && a.amdO ? define(ne) : ne(),
            function() {
                var t, n, i, o, s, r, l, c, u, d, p = [];
                n = window.device,
                t = {},
                window.device = t,
                o = window.document.documentElement,
                d = window.navigator.userAgent.toLowerCase(),
                t.ios = function() {
                    return t.iphone() || t.ipod() || t.ipad()
                }
                ,
                t.iphone = function() {
                    return !t.windows() && s("iphone")
                }
                ,
                t.ipod = function() {
                    return s("ipod")
                }
                ,
                t.ipad = function() {
                    return s("ipad")
                }
                ,
                t.android = function() {
                    return !t.windows() && s("android")
                }
                ,
                t.androidPhone = function() {
                    return t.android() && s("mobile")
                }
                ,
                t.androidTablet = function() {
                    return t.android() && !s("mobile")
                }
                ,
                t.blackberry = function() {
                    return s("blackberry") || s("bb10") || s("rim")
                }
                ,
                t.blackberryPhone = function() {
                    return t.blackberry() && !s("tablet")
                }
                ,
                t.blackberryTablet = function() {
                    return t.blackberry() && s("tablet")
                }
                ,
                t.windows = function() {
                    return s("windows")
                }
                ,
                t.windowsPhone = function() {
                    return t.windows() && s("phone")
                }
                ,
                t.windowsTablet = function() {
                    return t.windows() && s("touch") && !t.windowsPhone()
                }
                ,
                t.fxos = function() {
                    return (s("(mobile;") || s("(tablet;")) && s("; rv:")
                }
                ,
                t.fxosPhone = function() {
                    return t.fxos() && s("mobile")
                }
                ,
                t.fxosTablet = function() {
                    return t.fxos() && s("tablet")
                }
                ,
                t.meego = function() {
                    return s("meego")
                }
                ,
                t.cordova = function() {
                    return window.cordova && "file:" === location.protocol
                }
                ,
                t.nodeWebkit = function() {
                    return "object" == typeof window.process
                }
                ,
                t.mobile = function() {
                    return t.androidPhone() || t.iphone() || t.ipod() || t.windowsPhone() || t.blackberryPhone() || t.fxosPhone() || t.meego()
                }
                ,
                t.tablet = function() {
                    return t.ipad() || t.androidTablet() || t.blackberryTablet() || t.windowsTablet() || t.fxosTablet()
                }
                ,
                t.desktop = function() {
                    return !t.tablet() && !t.mobile()
                }
                ,
                t.television = function() {
                    var e;
                    for (p = ["googletv", "viera", "smarttv", "internet.tv", "netcast", "nettv", "appletv", "boxee", "kylo", "roku", "dlnadoc", "roku", "pov_tv", "hbbtv", "ce-html"],
                    e = 0; e < p.length; ) {
                        if (s(p[e]))
                            return !0;
                        e++
                    }
                    return !1
                }
                ,
                t.portrait = function() {
                    return window.innerHeight / window.innerWidth > 1
                }
                ,
                t.landscape = function() {
                    return window.innerHeight / window.innerWidth < 1
                }
                ,
                t.noConflict = function() {
                    return window.device = n,
                    this
                }
                ,
                s = function(e) {
                    return -1 !== d.indexOf(e)
                }
                ,
                l = function(e) {
                    var t;
                    return t = new RegExp(e,"i"),
                    o.className.match(t)
                }
                ,
                i = function(e) {
                    var t = null;
                    l(e) || (t = o.className.replace(/^\s+|\s+$/g, ""),
                    o.className = t + " " + e)
                }
                ,
                u = function(e) {
                    l(e) && (o.className = o.className.replace(" " + e, ""))
                }
                ,
                t.ios() ? t.ipad() ? i("ios ipad tablet") : t.iphone() ? i("ios iphone mobile") : t.ipod() && i("ios ipod mobile") : t.android() ? t.androidTablet() ? i("android tablet") : i("android mobile") : t.blackberry() ? t.blackberryTablet() ? i("blackberry tablet") : i("blackberry mobile") : t.windows() ? t.windowsTablet() ? i("windows tablet") : t.windowsPhone() ? i("windows mobile") : i("desktop") : t.fxos() ? t.fxosTablet() ? i("fxos tablet") : i("fxos mobile") : t.meego() ? i("meego mobile") : t.nodeWebkit() ? i("node-webkit") : t.television() ? i("television") : t.desktop() && i("desktop"),
                t.cordova() && i("cordova"),
                r = function() {
                    t.landscape() ? (u("portrait"),
                    i("landscape")) : (u("landscape"),
                    i("portrait"))
                }
                ,
                c = Object.prototype.hasOwnProperty.call(window, "onorientationchange") ? "orientationchange" : "resize",
                window.addEventListener ? window.addEventListener(c, r, !1) : window.attachEvent ? window.attachEvent(c, r) : window[c] = r,
                r(),
                "function" == typeof define && a.amdO ? define((function() {
                    return t
                }
                )) : e.exports ? e.exports = t : window.device = t
            }
            .call(void 0);
            var oe, se, re, le, ce = {
                channels: {},
                publish: se = function(e) {
                    if (!ce.channels[e])
                        return !1;
                    for (var t = Array.prototype.slice.call(arguments, 1), a = 0, n = ce.channels[e].length; a < n; a++) {
                        var i = ce.channels[e][a];
                        i.callback.apply(i.context, t)
                    }
                    return this
                }
                ,
                subscribe: oe = function(e, t) {
                    return ce.channels[e] || (ce.channels[e] = []),
                    ce.channels[e].push({
                        context: this,
                        callback: t
                    }),
                    this
                }
                ,
                installTo: function(e) {
                    e.subscribe = oe,
                    e.publish = se
                }
            };
            ie.utilities = function(e) {
                var t, a, n = {}, i = {}, o = new RegExp("(" + e.join("|") + ")","ig"), s = null;
                function r(e, t, a) {
                    var n = (a = a || {}).expires;
                    if ("number" == typeof n && n) {
                        var i = new Date;
                        i.setTime(i.getTime() + 1e3 * n),
                        n = a.expires = i
                    }
                    n && n.toUTCString && (a.expires = n.toUTCString());
                    var o = e + "=" + (t = encodeURIComponent(t));
                    for (var s in a) {
                        o += "; " + s;
                        var r = a[s];
                        !0 !== r && (o += "=" + r)
                    }
                    document.cookie = o
                }
                return i.init = function(e) {
                    !function(e) {
                        n.loader = n.loader || e.loader || "",
                        t = document.getElementById(n.loader)
                    }(e = e || {})
                }
                ,
                i.setCookie = function(e, t, a) {
                    r(e, t, a)
                }
                ,
                i.getCookie = function(e) {
                    return function(e) {
                        var t = document.cookie.match(new RegExp("(?:^|; )" + e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
                        return t ? decodeURIComponent(t[1]) : void 0
                    }(e)
                }
                ,
                i.delCookie = function(e) {
                    r(e, "", {
                        expires: -1,
                        path: "/",
                        domain: ""
                    })
                }
                ,
                i.showLoader = function() {
                    t.style.display = "block"
                }
                ,
                i.hideLoader = function() {
                    t.style.display = "none"
                }
                ,
                i.nonFloatingLoader = function() {
                    t.className = ""
                }
                ,
                i.showLineLoader = function(e) {
                    var t = document.getElementById(e + "-loader");
                    null === t ? function(e) {
                        var t = document.createElement("div")
                          , a = document.querySelector("." + e);
                        t.className = n.loader + "-line",
                        t.id = e + "-loader",
                        a.insertBefore(t, a.firstChild)
                    }(e) : t.style.display = "block"
                }
                ,
                i.hideLineLoader = function(e) {
                    !function(e) {
                        document.getElementById(e + "-loader").style.display = "none"
                    }(e)
                }
                ,
                i.getPageType = function() {
                    return a
                }
                ,
                i.setPageType = function(e) {
                    a = e.pageType
                }
                ,
                i.scrollRestoration = function() {
                    "scrollRestoration"in history && (history.scrollRestoration = "auto")
                }
                ,
                i.checkUserAgent = function() {
                    return null === s && (s = o.test(navigator.userAgent.toLowerCase())),
                    s
                }
                ,
                i.getWidth = function() {
                    return e = window,
                    t = document,
                    a = t.documentElement,
                    n = t.getElementsByTagName("body")[0],
                    e.innerWidth || a.clientWidth || n.clientWidth;
                    var e, t, a, n
                }
                ,
                i.getHeight = function() {
                    return e = window,
                    t = document,
                    a = t.documentElement,
                    n = t.getElementsByTagName("body")[0],
                    e.innerHeight || a.clientHeight || n.clientHeight;
                    var e, t, a, n
                }
                ,
                i.isiOSWithiOS12AndBelow = function() {
                    return e = navigator.userAgent,
                    t = /iPhone|iPad|iPod/i.test(e),
                    a = e.match(/OS (\d+)_(\d+)_?(\d+)?/),
                    n = a ? parseInt(a[1], 10) : null,
                    i = e.includes("UCBrowser"),
                    !!(t && null !== n && n <= 12 || i);
                    var e, t, a, n, i
                }
                ,
                i
            }(ie.botlist),
            ie.dropdown = function(e) {
                var t = {}
                  , a = {};
                return a.init = function(a) {
                    (function(e) {
                        t.ddTriggerClass = t.ddTriggerClass || e.ddTriggerClass || "",
                        t.ddContentClass = t.ddContentClass || e.ddContentClass || ""
                    }
                    )(a = a || {}),
                    e("." + t.ddTriggerClass).on("click", (function() {
                        var a, n, i, o;
                        a = e(this),
                        n = a.nextAll("." + t.ddContentClass),
                        i = e("." + t.ddContentClass).not(n),
                        o = e("." + t.ddTriggerClass).not(a),
                        i.slideUp(200),
                        i.removeClass("active"),
                        o.removeClass("active"),
                        n.stop(!0, !1, !0).slideToggle(200, (function() {
                            n.toggleClass("active")
                        }
                        )),
                        a.toggleClass("active")
                    }
                    ))
                }
                ,
                a
            }(jQuery),
            ie.mobDropdown = function(e) {
                var t = {}
                  , a = {};
                function n(a) {
                    var n = a.nextAll("." + t.ddContentClass)
                      , i = e("." + t.ddContentClass).not(n)
                      , o = e("." + t.ddTriggerClass).not(a);
                    i.removeClass("active"),
                    o.removeClass("active"),
                    n.toggleClass("active"),
                    a.toggleClass("active"),
                    function(t) {
                        t.hasClass("nav-button-search") && t.hasClass("active") && e("#search").focus()
                    }(a)
                }
                return a.init = function(a) {
                    (function(e) {
                        t.ddTriggerClass = t.ddTriggerClass || e.ddTriggerClass || "",
                        t.ddContentClass = t.ddContentClass || e.ddContentClass || "",
                        t.placeholderClass = t.placeholderClass || e.placeholderClass || ""
                    }
                    )(a = a || {}),
                    e("." + t.ddTriggerClass).on("click", (function() {
                        n(e(this))
                    }
                    )),
                    e("." + t.placeholderClass).on("click", (function(a) {
                        e(window).width() > 600 || e(a.target).hasClass(t.placeholderClass) && (e("." + t.ddContentClass).removeClass("active"),
                        e("." + t.ddTriggerClass).removeClass("active"))
                    }
                    ))
                }
                ,
                a
            }(jQuery),
            ie.suggest = function(e, t) {
                var a, n = {}, i = {}, o = !1, s = [];
                function r(i) {
                    var s = document.createElement("script")
                      , r = document.createElement("script")
                      , l = document.createElement("script")
                      , c = document.createElement("link")
                      , u = document.createElement("link")
                      , d = e.Deferred()
                      , p = e.Deferred()
                      , m = e.Deferred()
                      , h = e.Deferred()
                      , g = e.Deferred();
                    s.src = n.script1,
                    r.src = n.script2,
                    l.src = n.jqUiScript,
                    u.type = "text/css",
                    u.rel = "stylesheet",
                    u.href = n.css1,
                    c.type = "text/css",
                    c.rel = "stylesheet",
                    c.href = n.jqUiCss,
                    e.when(d, p, m, h, g).done((function() {
                        t.hideLineLoader(i),
                        a.each((function() {
                            var t = e(this);
                            t.find("textarea").tagEditor({
                                delimiter: ",",
                                placeholder: "Enter tags ...",
                                forceLowercase: !1,
                                autocomplete: {
                                    minLength: 2,
                                    source: function(a, i) {
                                        var o = {};
                                        o[t.find("textarea").attr("data-type")] = a.term,
                                        e.getJSON(n.autocomplete, o, (function(e) {
                                            i(e)
                                        }
                                        ))
                                    }
                                }
                            })
                        }
                        )),
                        a.show()
                    }
                    )),
                    s.onload = function() {
                        d.resolve()
                    }
                    ,
                    r.onload = function() {
                        p.resolve()
                    }
                    ,
                    l.onload = function() {
                        m.resolve()
                    }
                    ,
                    c.onload = function() {
                        h.resolve()
                    }
                    ,
                    u.onload = function() {
                        g.resolve()
                    }
                    ,
                    document.body.appendChild(u),
                    document.body.appendChild(c),
                    document.body.appendChild(s),
                    document.body.appendChild(r),
                    document.body.appendChild(l),
                    a.hide(),
                    o = !0
                }
                return i.init = function(i) {
                    (function(t) {
                        n.mainClass = n.mainClass || t.mainClass || "",
                        n.galleryId = n.galleryId || t.galleryId || "",
                        n.script1 = n.script1 || t.script1 || "",
                        n.script2 = n.script2 || t.script2 || "",
                        n.jqUiScript = n.jqUiScript || t.jqUiScript || "",
                        n.css1 = n.css1 || t.css1 || "",
                        n.jqUiCss = n.jqUiCss || t.jqUiCss || "",
                        n.autocomplete = n.autocomplete || t.autocomplete || "",
                        n.suggestedPath = n.suggestedPath || t.suggestedPath || "",
                        a = e("." + n.mainClass),
                        e("." + n.mainClass + "-message")
                    }
                    )(i = i || {}),
                    s.cat = e("#" + n.mainClass + "-cat__area").val(),
                    s.model = e("#" + n.mainClass + "-model__area").val(),
                    e("." + n.mainClass + "-button").on("click", (function() {
                        if (!o) {
                            var a = e(this).next().attr("data-suggest");
                            t.showLineLoader(n.mainClass + "-main-" + a),
                            r(n.mainClass + "-main-" + a)
                        }
                    }
                    )),
                    e("." + n.mainClass + "__send").on("click", (function() {
                        !function(t) {
                            var a = t.parent("." + n.mainClass)
                              , i = a.next()
                              , o = {};
                            o.gallery_id = n.galleryId,
                            o.new_variant = a.find("[name = variant]").val(),
                            o.language = navigator.language,
                            o.old_variant = s[t.siblings("[data-type]").attr("data-type")].replace(/^\s\s*/, "").replace(/\s\s*$/, ""),
                            o.type = t.siblings("[data-type]").attr("data-type"),
                            o.content_type = a.find("textarea").attr("data-content-type"),
                            e.ajax({
                                url: n.suggestedPath + "suggest.php",
                                type: "POST",
                                data: e.param(o),
                                success: function() {}
                            }),
                            a.slideUp(),
                            i.text("Thank you for your contribution.").show(),
                            setTimeout((function() {
                                a.parent().siblings("." + n.mainClass + "-button").trigger("click")
                            }
                            ), 3e3)
                        }(e(this))
                    }
                    ))
                }
                ,
                i
            }(jQuery, ie.utilities),
            ie.suggestV2 = function(e, t) {
                var a, n = {}, i = {}, o = [];
                function s(t) {
                    e(t).remove()
                }
                function r(e, t) {
                    var a = document.createElement("div")
                      , n = document.createElement("span")
                      , i = document.createElement("span")
                      , o = document.createElement("i");
                    a.className = "current-list__item",
                    n.className = "text",
                    i.className = "cross",
                    o.className = "icon icon-cross",
                    n.innerHTML = e.trim(),
                    i.addEventListener("click", (function() {
                        s(this.parentNode),
                        0 === t.children.length && (t.offsetWidth > 0 || t.offsetHeight > 0) && (t.style.display = "none")
                    }
                    )),
                    a.append(n),
                    i.append(o),
                    a.append(i),
                    t.append(a),
                    (!t.offsetWidth > 0 || !t.offsetHeight > 0) && (t.style.display = "block")
                }
                function l(t) {
                    var a = t.value.trim()
                      , i = {};
                    i[t.getAttribute("data-type")] = a,
                    function(t, a) {
                        e.getJSON(n.autocomplete, t, (function(e) {
                            a(e)
                        }
                        ))
                    }(i, (function(i) {
                        !function(t, a, i, o) {
                            var s = document.createDocumentFragment()
                              , r = e(a).find("." + n.mainClass + "-autocomplete");
                            o = o.replace(/^\s*/, "").replace(/\s*$/, "").replace(/\s+/g, " "),
                            t.length > 0 ? r.slideDown(400) : r.slideUp(400);
                            for (var l = 0; l < t.length; l += 1) {
                                var c = t[l]
                                  , u = c.toUpperCase().indexOf(o.toUpperCase())
                                  , d = document.createElement("div");
                                u >= 0 ? (d.innerHTML = 0 === u ? "" : c.substr(0, u),
                                d.innerHTML += "<strong>" + c.substr(u, o.length) + "</strong>",
                                d.innerHTML += c.substr(u + o.length)) : d.innerHTML = c,
                                d.addEventListener("click", (function(t) {
                                    var a = t.currentTarget.innerText || t.currentTarget.textContent;
                                    i.value = a,
                                    i.focus(),
                                    e(i.parentNode.querySelector("." + n.mainClass + "-add")).trigger("click"),
                                    r.slideUp(400)
                                }
                                )),
                                s.appendChild(d)
                            }
                            r.empty(),
                            r.append(s)
                        }(i, t.parentNode, t, a)
                    }
                    ))
                }
                return i.init = function(t) {
                    !function(t) {
                        n.mainClass = n.mainClass || t.mainClass || "",
                        n.galleryId = n.galleryId || t.galleryId || "",
                        n.autocomplete = n.autocomplete || t.autocomplete || "",
                        n.suggestedPath = n.suggestedPath || t.suggestedPath || "",
                        e("." + n.mainClass),
                        e("." + n.mainClass + "-message")
                    }(t = t || {});
                    var i = e("." + n.mainClass + "-input");
                    o.cat = e("#" + n.mainClass + "_source-list__cat").text(),
                    o.model = e("#" + n.mainClass + "_source-list__model").text(),
                    e("." + n.mainClass + "-button").on("click", (function(t) {
                        var a = e(this).next().attr("data-suggest")
                          , i = e("." + n.mainClass + "-main-" + a);
                        t.currentTarget;
                        e("." + n.mainClass + "-button").each((function(t, a) {
                            var n = e(a.parentNode).find("a");
                            e(a).hasClass("active") ? n.animate({
                                opacity: .33
                            }, 500) : n.animate({
                                opacity: 1
                            }, 500)
                        }
                        )),
                        function(t) {
                            var a = t.find(".hidden").text().split(", ")
                              , n = document.createDocumentFragment()
                              , i = e(t.find(".current-list"));
                            i.empty(),
                            0 !== a.length && (1 === a.length && "" === a[0].trim() || (a.forEach((function(e, t) {
                                var a = document.createElement("div")
                                  , i = document.createElement("span")
                                  , o = document.createElement("span")
                                  , r = document.createElement("i");
                                a.className = "current-list__item",
                                i.className = "text",
                                o.className = "cross",
                                r.className = "icon icon-cross",
                                i.innerHTML = e.trim(),
                                o.addEventListener("click", (function() {
                                    s(this.parentNode)
                                }
                                )),
                                a.append(i),
                                o.append(r),
                                a.append(o),
                                n.append(a)
                            }
                            )),
                            i.append(n)))
                        }(i)
                    }
                    )),
                    e("." + n.mainClass + "-add").on("click", (function(e) {
                        !function(e) {
                            var t = e.currentTarget.parentNode
                              , a = t.querySelector("." + n.mainClass + "-input").value.trim()
                              , i = t.querySelector(".suggestions-list");
                            "" !== a && a.length >= 2 && a.length <= 50 && (r(a, i),
                            t.querySelector("." + n.mainClass + "-input").value = "")
                        }(e)
                    }
                    )),
                    i.on("keydown", (function(e) {
                        !function(e) {
                            var t = e.currentTarget
                              , a = t.value.trim()
                              , n = t.parentNode.querySelector(".suggestions-list");
                            13 === e.keyCode && "" !== a && a.length >= 2 && a.length <= 50 && (r(a, n),
                            e.currentTarget.value = "")
                        }(e)
                    }
                    )),
                    i.on("input", (function(e) {
                        !function(e) {
                            var t = e.currentTarget;
                            t.value.trim().length < 2 || (clearTimeout(a),
                            a = setTimeout((function() {
                                l(t)
                            }
                            ), 500))
                        }(e)
                    }
                    )),
                    i.focusout((function(t) {
                        var a = t.currentTarget;
                        e(a.parentNode).find("." + n.mainClass + "-autocomplete").slideUp(400)
                    }
                    )),
                    e("." + n.mainClass + "__send").on("click", (function() {
                        !function(t) {
                            var a = t.parent("." + n.mainClass)
                              , i = a.next()
                              , o = {};
                            o.gallery_id = n.galleryId,
                            o.new_variant = function(e) {
                                var t = e.find(".suggestions-list > div")
                                  , a = []
                                  , n = function(e) {
                                    var t = e.find(".current-list > div")
                                      , a = [];
                                    if (0 === t.length)
                                        return [];
                                    for (var n = 0; n < t.length; n++)
                                        a.push(t[n].innerText || t[n].textContent);
                                    return a
                                }(e);
                                if (0 === t.length && 0 === n.length)
                                    return "";
                                if (0 !== t.length)
                                    for (var i = 0; i < t.length; i++)
                                        a.push(t[i].innerText || t[i].textContent);
                                return n.concat(a).join(", ")
                            }(a),
                            o.language = navigator.language,
                            o.old_variant = a.find(".hidden").text().trim(),
                            o.type = t.siblings("[data-type]").attr("data-type"),
                            o.content_type = a.find(".suggest-2-input").attr("data-content-type"),
                            e.ajax({
                                url: n.suggestedPath + "suggest.php",
                                type: "POST",
                                data: e.param(o),
                                success: function() {}
                            }),
                            a.slideUp(400),
                            i.text("Thank you for your contribution.").show(),
                            setTimeout((function() {
                                a.parent().siblings("." + n.mainClass + "-button").trigger("click")
                            }
                            ), 3e3)
                        }(e(this))
                    }
                    ))
                }
                ,
                i
            }(jQuery, ie.utilities),
            ie.suggestNew = function(e, t) {
                var a = {}
                  , n = {}
                  , i = [];
                function o() {
                    e(".suggest-top-button").on("click", (function() {
                        e("#suggest-form").slideToggle(200)
                    }
                    )),
                    e("." + a.mainClass + "__send").on("click", (function() {
                        !function(t) {
                            var n = e("." + a.mainClass)
                              , i = e("." + a.mainClass + "-message")
                              , o = {}
                              , s = !1;
                            n.each((function(t, n) {
                                var i = e(n);
                                o.gallery_id = a.galleryId,
                                o.new_variant = i.find("[name = variant]").val(),
                                o.type = i.find("textarea").attr("data-type"),
                                o.language = navigator.language,
                                o.old_variant = i.find("[name = oldTitle]").val(),
                                o.content_type = i.find("textarea").attr("data-content-type"),
                                o.new_variant !== o.old_variant && (s = !0,
                                e.ajax({
                                    url: a.suggestedPath + "suggest.php",
                                    type: "POST",
                                    data: e.param(o),
                                    success: function() {}
                                }))
                            }
                            )),
                            s && (e("." + a.mainClass + "__send").hide(0),
                            n.slideUp(),
                            i.text("Thank you for your contribution.").show(),
                            setTimeout((function() {
                                e(".suggest-top-button").trigger("click")
                            }
                            ), 3e3))
                        }(e(this))
                    }
                    ))
                }
                return n.init = function(t) {
                    (function(t) {
                        a.mainClass = a.mainClass || t.mainClass || "",
                        a.galleryId = a.galleryId || t.galleryId || "",
                        a.suggestedPath = a.suggestedPath || t.suggestedPath || "",
                        e("." + a.mainClass),
                        e("." + a.mainClass + "-message")
                    }
                    )(t = t || {}),
                    i.title = e("#" + a.mainClass + "-title__area").val(),
                    o()
                }
                ,
                n
            }(jQuery, ie.utilities),
            ie.inViewPort = function(e) {
                var t = {};
                function a(t, a) {
                    return e(window).height() + e(window).scrollTop() <= e(t).offset().top - a.threshold
                }
                function n(t, a) {
                    return e(window).scrollTop() >= e(t).offset().top + e(t).height() - a.threshold
                }
                function i(t, a) {
                    return e(window).width() + e(window).scrollLeft() <= e(t).offset().left - a.threshold
                }
                function o(t, a) {
                    return e(window).scrollLeft() >= e(t).offset().left + e(t).width() - a.threshold
                }
                return t.belowTheFold = function(e, t) {
                    return null === t && (t = 0),
                    a(e, {
                        threshold: t
                    })
                }
                ,
                t.aboveTheTop = function(e, t) {
                    return null === t && (t = 0),
                    n(e, {
                        threshold: t
                    })
                }
                ,
                t.leftOfScreen = function(e) {
                    return o(e, {
                        threshold: 0
                    })
                }
                ,
                t.rightOfScreen = function(e) {
                    return i(e, {
                        threshold: 0
                    })
                }
                ,
                t.inViewport = function(e, t) {
                    return null == t && (t = 0),
                    !(i(s = e, r = {
                        threshold: t
                    }) || o(s, r) || a(s, r) || n(s, r));
                    var s, r
                }
                ,
                t
            }(jQuery),
            ie.footer = function(e) {
                var t = {}
                  , a = {}
                  , n = !1
                  , i = 100;
                function o() {
                    e.ajax({
                        url: a.filePath,
                        dataType: "html",
                        success: function(e) {
                            !function(e) {
                                document.getElementById(a.containerId).innerHTML = e
                            }(e)
                        }
                    })
                }
                function s() {
                    e(window).on("scroll", (function() {
                        var e;
                        e = document.getElementById(a.containerId),
                        n || e.offsetTop < window.innerHeight + window.pageYOffset + i && e.offsetTop >= 0 && (o(),
                        n = !0)
                    }
                    ))
                }
                return t.init = function(e) {
                    (function(e) {
                        a.containerId = a.containerId || e.containerId || "",
                        a.filePath = a.filePath || e.filePath || ""
                    }
                    )(e = e || {}),
                    s()
                }
                ,
                t
            }(jQuery),
            ie.upButton = function(e) {
                var t, a = {}, n = {}, i = 0, o = 0, s = e(window);
                function r(e) {
                    switch (e) {
                    case "show":
                        t.stop(!0, !0).css("opacity", "0.8").fadeIn("fast");
                        break;
                    case "hide":
                        t.stop(!0, !0).fadeOut("fast")
                    }
                }
                function l() {
                    s.on("scroll", (function() {
                        var t;
                        t = s.scrollTop(),
                        e(window).width() < 750 ? (clearTimeout(o),
                        i < t || t < 50 ? r("hide") : (r("show"),
                        o = setTimeout((function() {
                            r("hide")
                        }
                        ), n.fading)),
                        i = t) : r(t > 20 ? "show" : "hide")
                    }
                    ))
                }
                return a.init = function(a) {
                    (function(e) {
                        n.upButtonId = n.upButtonId || e.upButtonId || "",
                        n.fading = n.fading || e.fading || 6e3
                    }
                    )(a = a || {}),
                    (t = e("#" + n.upButtonId)).on("click", (function() {
                        e("html, body").animate({
                            scrollTop: "0px"
                        }, "fast")
                    }
                    )),
                    l()
                }
                ,
                a
            }(jQuery),
            ie.filters = function(e) {
                var t = {}
                  , a = {};
                return t.init = function(t) {
                    var n, i, o, s, r, l;
                    (function(e) {
                        a.deskFilterId = a.deskFilterId || e.deskFilterId || "",
                        a.insertContainer = a.insertContainer || e.insertContainer || ""
                    }
                    )(t = t || {}),
                    e("#" + a.deskFilterId + ".category-tags").length > 0 && (n = document.createElement("div"),
                    i = document.createElement("div"),
                    o = document.createElement("i"),
                    s = document.createElement("div"),
                    r = document.createElement("span"),
                    l = e("#" + a.deskFilterId + " li a"),
                    n.id = "filter-mob",
                    i.className = "dropdown__trigger filter-mob__button",
                    o.className = "icon icon-funnel",
                    s.className = "navbar navbar-left dropdown__block filter-mob__block",
                    s.setAttribute("role", "menu"),
                    r.innerHTML = "Related Searches:",
                    s.appendChild(r),
                    l.each((function() {
                        var t = document.createElement("a");
                        t.setAttribute("href", e(this).attr("href")),
                        t.setAttribute("role", "menuitem"),
                        t.innerHTML = e(this).text(),
                        s.appendChild(t)
                    }
                    )),
                    i.appendChild(o),
                    n.appendChild(i),
                    n.appendChild(s),
                    e("." + a.insertContainer).append(n)),
                    e("#" + a.deskFilterId + ".search-sponsor-tags").length > 0 && function() {
                        var t = document.createElement("div")
                          , n = document.createElement("a")
                          , i = document.createElement("i")
                          , o = document.createElement("div")
                          , s = e("#" + a.deskFilterId + " li a");
                        t.id = "filter-mob",
                        n.className = "filter-mob__button sponsor-link",
                        n.setAttribute("href", s.attr("href")),
                        n.setAttribute("role", "link"),
                        i.className = "icon icon-external-link",
                        n.appendChild(i),
                        t.appendChild(n),
                        t.appendChild(o),
                        e("." + a.insertContainer).append(t)
                    }()
                }
                ,
                t
            }(jQuery),
            ie.framePosition = function(e, t, a) {
                var n = {}
                  , i = {}
                  , o = t.mobile()
                  , s = e(window);
                function r(t, a, n) {
                    var o, s = t.offset();
                    o = (e(window).width(),
                    1),
                    n.filter("." + i.adIncludedClass).eq(function(e) {
                        var t = (e + 1) % i.frameCount;
                        return 0 !== t ? t - 1 : i.frameCount - 1
                    }(a)).children("iframe").offset({
                        top: s.top + o,
                        left: s.left + o
                    })
                }
                function l(t) {
                    var n;
                    n = o ? e("." + i.adContainer).not("." + i.adContainer + "-static") : e("." + i.adContainer).not("." + i.onlyMobContainer).not("." + i.adContainer + "-static"),
                    "resize" === t.type && n.children("iframe").css("position", "static"),
                    n.each((function(t) {
                        var i = e(this)
                          , s = 0;
                        o && (s = 100),
                        a.inViewport(i, s) && r(i, t, n)
                    }
                    ))
                }
                return n.init = function(e) {
                    (function(e) {
                        i.adContainer = i.adContainer || e.adContainer || "",
                        i.onlyMobContainer = i.onlyMobContainer || e.onlyMobContainer || "",
                        i.frameCount = i.frameCount || e.frameCount || 4,
                        i.adIncludedClass = i.adIncludedClass || e.adIncludedClass
                    }
                    )(e = e || {}),
                    s.on("scroll", (function(e) {
                        l(e)
                    }
                    )),
                    s.on("resize", l)
                }
                ,
                n.initCurrentPosition = function() {
                    var e = {
                        type: ""
                    };
                    l(e)
                }
                ,
                n
            }(jQuery, device, ie.inViewPort),
            ie.adModule = function(e, t, a, n) {
                var i, o, s, r, l, c, u = {}, d = {}, p = 0, m = t.mobile(), h = e(window), g = !1, f = !1, b = !1, v = !1, y = !1, w = 60, C = 20, k = 20, _ = 20, P = "_adCount-main", A = "_adCount-ts", I = "_adCount-rtb", T = "_adCount-mg", E = "_adCount-th", S = "_adCount-ac", N = "_adCount-cr", D = "_adCount-adx";
                function x(e, t, a) {
                    var n, i = [];
                    i[0] = t[0];
                    for (var o = 1; o < a; ++o)
                        i[o] = i[o - 1] + t[o];
                    return n = function(e, t, a, n) {
                        for (var i; a < n; )
                            t > e[i = a + (n - a >> 1)] ? a = i + 1 : n = i;
                        return e[a] >= t ? a : -1
                    }(i, 323567 * Math.random() % i[a - 1] + 1, 0, a - 1),
                    e[n]
                }
                function L(e) {
                    return x(e, [100], 1)
                }
                function M(e, t) {
                    var a = document.createElement("iframe");
                    a.setAttribute("width", "300"),
                    a.setAttribute("height", "250"),
                    a.setAttribute("src", t),
                    a.setAttribute("marginwidth", "0"),
                    a.setAttribute("marginheight", "0"),
                    a.setAttribute("frameborder", "0"),
                    a.setAttribute("scrolling", "no"),
                    a.setAttribute("title", "Spot"),
                    e.append(a),
                    e.addClass(d.adIncludedClass),
                    p += 1
                }
                function B(e) {
                    var t = document.createElement("div");
                    t.setAttribute("data-hp-id", "318"),
                    t.setAttribute("data-hp-zone", ""),
                    e.append(t),
                    e.addClass(d.adIncludedClass),
                    p += 1
                }
                function O(e) {
                    var t = document.createElement("div");
                    t.setAttribute("data-hp-id", "1101"),
                    t.setAttribute("data-hp-zone", ""),
                    e.append(t),
                    e.addClass(d.adIncludedClass),
                    p += 1
                }
                function U(e) {
                    var t = document.createElement("div");
                    t.setAttribute("data-hp-id", "1145"),
                    t.setAttribute("data-hp-zone", ""),
                    e.append(t),
                    e.addClass(d.adIncludedClass),
                    p += 1
                }
                function j(e) {
                    var t = document.createElement("div");
                    t.setAttribute("data-hp-id", "1181"),
                    t.setAttribute("data-hp-zone", ""),
                    e.append(t),
                    e.addClass(d.adIncludedClass),
                    p += 1
                }
                function F(e) {
                    var t = document.createElement("div");
                    t.setAttribute("data-hp-id", "1161"),
                    t.setAttribute("data-hp-zone", ""),
                    e.append(t),
                    e.addClass(d.adIncludedClass),
                    p += 1
                }
                function R(e) {
                    var t = document.createElement("div");
                    t.setAttribute("data-hp-id", "1147"),
                    t.setAttribute("data-hp-zone", ""),
                    e.append(t),
                    e.addClass(d.adIncludedClass),
                    p += 1
                }
                function V(e) {
                    var t = document.createElement("div");
                    t.setAttribute("data-hp-id", "826"),
                    t.setAttribute("data-hp-zone", ""),
                    e.append(t),
                    e.addClass(d.adIncludedClass),
                    p += 1
                }
                function H(e) {
                    var t = localStorage.getItem(e)
                      , a = (new Date).getTime();
                    a - (t = t ? JSON.parse(t) : {
                        t: a,
                        c: 0
                    }).t > 864e5 && (t.t = a,
                    t.c = 0),
                    localStorage.setItem(e, JSON.stringify(t))
                }
                function G(e) {
                    var t = localStorage.getItem(e)
                      , a = (new Date).getTime();
                    (t = t ? JSON.parse(t) : {
                        t: a,
                        c: 0
                    }).c = parseInt(t.c, 10) + 1,
                    localStorage.setItem(e, JSON.stringify(t))
                }
                function z(e, t) {
                    return !(function(e) {
                        var t = localStorage.getItem(e);
                        if (!t)
                            return 0;
                        t = JSON.parse(t);
                        return parseInt(t.c, 10)
                    }(e) < t)
                }
                function q(t) {
                    e("#main ." + d.allDeviceAdContainer).not("." + d.allDeviceAdContainer + "-static").each((function() {
                        var n = e(this)
                          , i = n.hasClass(d.onlyMobileAdClass)
                          , o = "";
                        !m && i && (n.addClass(d.wookmarkClass),
                        n.addClass(d.inactiveClass)),
                        z(P, w) || z(T, k) || z(A, C) || z(D, _) || (o = x(["hp", "mg", "ts", "adx"], [70, 10, 10, 10], 4)),
                        z(P, w) || z(T, k) || z(A, C) || !z(D, _) || (o = x(["hp", "mg", "ts"], [70, 15, 15], 3)),
                        z(P, w) || z(T, k) || !z(A, C) || z(D, _) || (o = x(["hp", "mg", "adx"], [70, 15, 15], 3)),
                        z(P, w) || !z(T, k) || z(A, C) || z(D, _) || (o = x(["hp", "ts", "adx"], [70, 15, 15], 3)),
                        !z(P, w) || z(T, k) || z(A, C) || z(D, _) || (o = x(["mg", "ts", "adx"], [33, 33, 33], 3)),
                        !z(P, w) && !z(T, k) && z(A, C) && z(D, _) && (o = x(["hp", "mg"], [70, 30], 2)),
                        !z(P, w) && z(T, k) && !z(A, C) && z(D, _) && (o = x(["hp", "ts"], [70, 30], 2)),
                        !z(P, w) && z(T, k) && z(A, C) && !z(D, _) && (o = x(["hp", "adx"], [70, 30], 2)),
                        z(P, w) && !z(T, k) && !z(A, C) && z(D, _) && (o = x(["mg", "ts"], [50, 50], 2)),
                        z(P, w) && !z(T, k) && z(A, C) && !z(D, _) && (o = x(["adx", "mg"], [50, 50], 2)),
                        z(P, w) && z(T, k) && !z(A, C) && !z(D, _) && (o = x(["adx", "ts"], [50, 50], 2)),
                        !z(P, w) && z(T, k) && z(A, C) && z(D, _) && (o = "hp"),
                        z(P, w) && z(T, k) && !z(A, C) && z(D, _) && (o = "ts"),
                        z(P, w) && !z(T, k) && z(A, C) && z(D, _) && (o = "mg"),
                        z(P, w) && z(T, k) && z(A, C) && !z(D, _) && (o = "adx"),
                        !n.hasClass(d.adIncludedClass) && p < d.frameCountMax && (m ? (a.inViewport(n) || !ie.inViewPort.belowTheFold(n, t) && !ie.inViewPort.aboveTheTop(n, 0)) && ("hp" !== o || z(P, w) ? "mg" !== o || z(T, k) ? "ts" !== o || z(A, C) ? "adx" !== o || z(D, _) ? z(E, 25) ? z(S, 5) ? z(N, 0) ? z(I, 0) ? V(n) : (V(n),
                        G(I)) : (U(n),
                        G(N)) : (j(n),
                        G(S)) : (F(n),
                        G(E)) : (R(n),
                        G(D)) : (M(n, r[1]),
                        G(A)) : (O(n),
                        G(T)) : (B(n),
                        G(P))) : i || !a.inViewport(n) && (ie.inViewPort.belowTheFold(n, t) || ie.inViewPort.aboveTheTop(n, 0)) || ("hp" !== o || z(P, w) ? "mg" !== o || z(T, k) ? "ts" !== o || z(A, C) ? "adx" !== o || z(D, _) ? z(E, 25) ? z(S, 5) ? z(N, 0) ? z(I, 0) ? V(n) : (V(n),
                        G(I)) : (U(n),
                        G(N)) : (j(n),
                        G(S)) : (F(n),
                        G(E)) : (R(n),
                        G(D)) : (M(n, s[1]),
                        G(A)) : (O(n),
                        G(T)) : (B(n),
                        G(P))))
                    }
                    ))
                }
                function W(t) {
                    e("#rel-main ." + d.allDeviceAdContainer).each((function() {
                        var n = e(this)
                          , i = n.hasClass(d.onlyMobileAdClass)
                          , o = "";
                        !m && i && (n.addClass(d.wookmarkClass),
                        n.addClass(d.inactiveClass)),
                        z(P, w) || z(T, k) || z(A, C) || z(D, _) || (o = x(["hp", "mg", "ts", "adx"], [80, 10, 7, 3], 4)),
                        z(P, w) || z(T, k) || z(A, C) || !z(D, _) || (o = x(["hp", "mg", "ts"], [80, 10, 10], 3)),
                        z(P, w) || z(T, k) || !z(A, C) || z(D, _) || (o = x(["hp", "mg", "adx"], [80, 10, 10], 3)),
                        z(P, w) || !z(T, k) || z(A, C) || z(D, _) || (o = x(["hp", "ts", "adx"], [80, 12, 8], 3)),
                        !z(P, w) || z(T, k) || z(A, C) || z(D, _) || (o = x(["mg", "ts", "adx"], [50, 35, 15], 3)),
                        !z(P, w) && !z(T, k) && z(A, C) && z(D, _) && (o = x(["hp", "mg"], [80, 20], 2)),
                        !z(P, w) && z(T, k) && !z(A, C) && z(D, _) && (o = x(["hp", "ts"], [80, 20], 2)),
                        !z(P, w) && z(T, k) && z(A, C) && !z(D, _) && (o = x(["hp", "adx"], [90, 10], 2)),
                        z(P, w) && !z(T, k) && !z(A, C) && z(D, _) && (o = x(["mg", "ts"], [50, 50], 2)),
                        z(P, w) && !z(T, k) && z(A, C) && !z(D, _) && (o = x(["adx", "mg"], [30, 70], 2)),
                        z(P, w) && z(T, k) && !z(A, C) && !z(D, _) && (o = x(["adx", "ts"], [30, 70], 2)),
                        !z(P, w) && z(T, k) && z(A, C) && z(D, _) && (o = "hp"),
                        z(P, w) && z(T, k) && !z(A, C) && z(D, _) && (o = "ts"),
                        z(P, w) && !z(T, k) && z(A, C) && z(D, _) && (o = "mg"),
                        z(P, w) && z(T, k) && z(A, C) && !z(D, _) && (o = "adx"),
                        !n.hasClass(d.adIncludedClass) && p < d.frameCountMax && (m ? (a.inViewport(n) || !ie.inViewPort.belowTheFold(n, t - .91 * t) && !ie.inViewPort.aboveTheTop(n, 0)) && ("hp" !== o || z(P, w) ? "mg" !== o || z(T, k) ? "ts" !== o || z(A, C) ? "adx" !== o || z(D, _) ? z(E, 25) ? z(S, 5) ? z(N, 0) ? z(I, 0) ? V(n) : (V(n),
                        G(I)) : (U(n),
                        G(N)) : (j(n),
                        G(S)) : (F(n),
                        G(E)) : (R(n),
                        G(D)) : (M(n, r[1]),
                        G(A)) : (O(n),
                        G(T)) : (B(n),
                        G(P))) : i || !a.inViewport(n) && (ie.inViewPort.belowTheFold(n, t - .94 * t) || ie.inViewPort.aboveTheTop(n, 0)) || ("hp" !== o || z(P, w) ? "mg" !== o || z(T, k) ? "ts" !== o || z(A, C) ? "adx" !== o || z(D, _) ? z(E, 25) ? z(S, 5) ? z(N, 0) ? z(I, 0) ? V(n) : (V(n),
                        G(I)) : (U(n),
                        G(N)) : (j(n),
                        G(S)) : (F(n),
                        G(E)) : (R(n),
                        G(D)) : (M(n, s[1]),
                        G(A)) : (O(n),
                        G(T)) : (B(n),
                        G(P))))
                    }
                    ))
                }
                function J() {
                    var t, a, n = e("." + d.allDeviceAdContainer), s = (t = h.width()) <= 600 ? function(e, t) {
                        return (e - 10) / t
                    }
                    : t >= 601 && t <= 643 ? function(e, t) {
                        return (e - 37) / 2 / t
                    }
                    : t >= 644 && t <= 850 ? function(e, t) {
                        return (e - 46) / 3 / t
                    }
                    : t >= 851 && t <= 943 ? function(e, t) {
                        return (e - 54) / 4 / t
                    }
                    : null;
                    null === s ? (i = 250,
                    o = 1) : (i = Math.round(s(h.width(), 1.2)),
                    o = s(h.width(), 300)),
                    n.css("height", i),
                    a = o,
                    n.children("iframe").css({
                        "-webkit-transform": "scale(" + a + ")",
                        "-moz-transform": "scale(" + a + ")",
                        "-ms-transform": "scale(" + a + ")",
                        "-o-transform": "scale(" + a + ")",
                        transform: "scale(" + a + ")"
                    })
                }
                function Y() {
                    var t, a, n, i, o, s = e("#hpt-rdr");
                    0 === s.length ? (t = function() {
                        u.include("scriptCall"),
                        u.includeRelAd("scriptCall"),
                        u.initRelEvents("scriptCall"),
                        u.initMainEvents("scriptCall")
                    }
                    ,
                    a = document.createElement("script"),
                    n = document.createElement("script"),
                    i = e.Deferred(),
                    o = e.Deferred(),
                    n.id = "hpt-rdr",
                    n.setAttribute("data-hpt-url", "hpawd.pornpics.com"),
                    e.when(i, o).done((function() {
                        t()
                    }
                    )),
                    a.onload = function() {
                        document.body.appendChild(n),
                        i.resolve()
                    }
                    ,
                    a.onerror = function() {
                        document.body.appendChild(n),
                        i.resolve()
                    }
                    ,
                    n.onload = function() {
                        o.resolve()
                    }
                    ,
                    a.src = "https://www.pornpics.com/advertise-57aecc1189.js",
                    n.src = "https://hpacdn.pornpics.com/renderer/renderer.js",
                    document.body.appendChild(a)) : s.on("load", (function() {
                        u.include("scriptCall"),
                        u.includeRelAd("scriptCall"),
                        u.initRelEvents("scriptCall"),
                        u.initMainEvents("scriptCall")
                    }
                    ))
                }
                return u.init = function(t) {
                    (function(e) {
                        d.onlyMobileAdClass = d.onlyMobileAdClass || e.onlyMobileAdClass || "",
                        d.allDeviceAdContainer = d.allDeviceAdContainer || e.allDeviceAdContainer || "",
                        d.relBlockId = d.relBlockId || e.relBlockId || "",
                        d.wookmarkClass = d.wookmarkClass || e.wookmarkClass || "",
                        d.inactiveClass = d.inactiveClass || e.inactiveClass || "",
                        d.linkMobile = d.linkMobile || e.linkMobile || "",
                        d.linkDesktop = d.linkDesktop || e.linkDesktop || "",
                        d.relLinkMobile = d.relLinkMobile || e.relLinkMobile || "",
                        d.relLinkDesktop = d.relLinkDesktop || e.relLinkDesktop || "",
                        d.adIncludedClass = d.adIncludedClass || e.adIncludedClass || "",
                        d.frameCountMax = d.frameCountMax || e.frameCountMax || 4,
                        d.pageType = d.pageType || e.pageType || "",
                        "gallery" === d.pageType || "gallery_gc" === d.pageType || "gallery_frame" === d.pageType || "gallery_shemale" === d.pageType || "gallery_thumbspw" === d.pageType ? (s = d.relLinkDesktop,
                        r = d.relLinkMobile) : (s = d.linkDesktop,
                        r = d.linkMobile)
                    }
                    )(t = t || {}),
                    "main" !== d.pageType && (Y(),
                    H(P),
                    H(T),
                    H(E),
                    H(A),
                    H(I),
                    H(N),
                    H(D),
                    H(S),
                    m || e("#main ." + d.allDeviceAdContainer).not("." + d.allDeviceAdContainer + "-static").each((function() {
                        var t = e(this)
                          , a = t.hasClass(d.onlyMobileAdClass);
                        !m && a && (t.addClass(d.wookmarkClass),
                        t.addClass(d.inactiveClass))
                    }
                    )))
                }
                ,
                u.include = function(e) {
                    void 0 === e && (b = !0),
                    "promiseCall" === e && (v = !0),
                    "scriptCall" === e && (y = !0),
                    b && v && y && (q(c.lazyLoadDelta),
                    window.hptRdr.update(),
                    J())
                }
                ,
                u.includeGallery = function() {
                    e("#main ." + d.allDeviceAdContainer).not("." + d.allDeviceAdContainer + "-static").each((function() {
                        var t = e(this)
                          , a = t.hasClass(d.onlyMobileAdClass);
                        !m && a && (t.addClass(d.wookmarkClass),
                        t.addClass(d.inactiveClass)),
                        !t.hasClass(d.adIncludedClass) && p < d.frameCountMax && (m ? M(t, L(r)) : a || M(t, L(s)))
                    }
                    )),
                    J()
                }
                ,
                u.includeLineAd = function(t) {
                    var a, n, i;
                    "" !== (t = t || {}).sponsorText && "" !== t.sponsorLink && e("body").append((a = t,
                    n = document.createElement("div"),
                    i = document.createElement("a"),
                    n.className = "sponsor-line",
                    i.innerHTML = a.sponsorText,
                    i.href = a.sponsorLink,
                    n.appendChild(i),
                    n))
                }
                ,
                u.frameTransform = function() {
                    J()
                }
                ,
                u.includeRelAd = function(e) {
                    void 0 === e && (b = !0),
                    "promiseCall" === e && (v = !0),
                    "scriptCall" === e && (y = !0),
                    b && v && y && (W(c.lazyLoadDelta),
                    window.hptRdr.update(),
                    J())
                }
                ,
                u.initRelEvents = function(t) {
                    void 0 === t && (b = !0),
                    "promiseCall" === t && (v = !0),
                    "scriptCall" === t && (y = !0),
                    b && v && y && e(d.relBlockId).length > 0 && (g || (window.addEventListener("hp-rendered", J),
                    h.on("scroll", (function() {
                        l && clearTimeout(l),
                        l = setTimeout((function() {
                            W(c.lazyLoadDelta),
                            window.hptRdr.update(),
                            J()
                        }
                        ), 50)
                    }
                    )),
                    g = !0))
                }
                ,
                u.initMainEvents = function(t) {
                    void 0 === t && (b = !0),
                    "promiseCall" === t && (v = !0),
                    "scriptCall" === t && (y = !0),
                    b && v && y && 0 === e(d.relBlockId).length && (f || (window.addEventListener("hp-rendered", J),
                    h.on("scroll", (function() {
                        l && clearTimeout(l),
                        l = setTimeout((function() {
                            q(c.lazyLoadDelta),
                            window.hptRdr.update(),
                            J()
                        }
                        ), 50)
                    }
                    )),
                    f = !0))
                }
                ,
                u.setGEOData = function(e) {
                    c = e,
                    u.include("promiseCall"),
                    u.includeRelAd("promiseCall"),
                    u.initRelEvents("promiseCall"),
                    u.initMainEvents("promiseCall")
                }
                ,
                u
            }(jQuery, device, ie.inViewPort, ie.utilities),
            ie.userGEO = function(e) {
                var t = {}
                  , a = {}
                  , n = "_geoCode"
                  , i = {
                    isUnknownLanguage: !1,
                    isBadLanguage: !1,
                    isBadCountry: !1,
                    lazyLoadDelta: 1e4
                }
                  , o = "ve in de fr au ng eg nl ph dz se mm ma be at iq ch mx".split(" ")
                  , s = "af ak am ar as bn bo ee gu ha hi id in ki kn kw lg ml mr nd ne om or pa pk ps rw si sn so sw ta tg ti ur zu".split(" ")
                  , r = "us ca za cz jp ie".split(" ")
                  , l = {
                    codes: ["in"],
                    percentage: 20
                }
                  , c = {
                    hq: {
                        mobile: 35e3,
                        desktop: 4e3
                    },
                    lq: {
                        mobile: 12e3,
                        desktop: 1800
                    },
                    byCountryCode: {
                        us: {
                            mobile: 35e3,
                            desktop: 3800
                        },
                        in: {
                            mobile: 1e4,
                            desktop: 900
                        }
                    },
                    default: {
                        mobile: 3e4,
                        desktop: 2600
                    }
                };
                function u() {
                    return new Promise((function(e) {
                        var t = new XMLHttpRequest;
                        t.open("GET", "/", !0),
                        t.setRequestHeader("X-ALL-INFO", "1"),
                        t.onload = function() {
                            200 === t.status || 304 === t.status ? e(JSON.parse(t.response)) : e("")
                        }
                        ,
                        t.onerror = function() {
                            console.error("GEOService: service is not available."),
                            e("")
                        }
                        ,
                        t.send()
                    }
                    ))
                }
                function d() {
                    return new Promise((function(e) {
                        !function() {
                            var e = "test";
                            try {
                                return localStorage.setItem(e, e),
                                localStorage.removeItem(e),
                                !0
                            } catch (e) {
                                return !1
                            }
                        }() ? u().then((function(t) {
                            var a;
                            a = "" !== t && "-" !== t.country ? t.country.replace("/n", "").toLowerCase() : "",
                            e(a)
                        }
                        )) : new Promise((function(e) {
                            var t = localStorage.getItem(n);
                            t ? e(t) : u().then((function(t) {
                                var a;
                                a = "" !== t && "-" !== t.country ? t.country.replace("/n", "").toLowerCase() : "",
                                e(a)
                            }
                            ))
                        }
                        )).then((function(t) {
                            !function(e) {
                                localStorage.setItem(n, e)
                            }(t),
                            e(t)
                        }
                        ))
                    }
                    ))
                }
                return t.init = function(t) {
                    (function(e) {
                        a.geoComplete = a.geoComplete || e.geoComplete || function() {}
                    }
                    )(t = t || {}),
                    d().then((function(t) {
                        var a, n, l;
                        i.geoCode = t,
                        i.navigatorLanguages = void 0 === (a = navigator.languages) ? navigator.language ? [navigator.language.toLowerCase()] : [] : a.length > 0 ? a.map((function(e) {
                            return e.toLowerCase()
                        }
                        )) : [],
                        i.isBadCountry = function(e) {
                            return o.some((function(t) {
                                return t === e
                            }
                            ))
                        }(i.geoCode),
                        i.isHQCountry = function(e) {
                            return r.some((function(t) {
                                return t === e
                            }
                            ))
                        }(i.geoCode),
                        i.isBadBrowserLanguage = function(e) {
                            return s.some((function(t) {
                                return e.some((function(e) {
                                    return e === t
                                }
                                ))
                            }
                            ))
                        }(i.navigatorLanguages),
                        i.isMobile = (n = !1,
                        l = navigator.userAgent || navigator.vendor || window.opera,
                        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(l) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(l.substr(0, 4))) && (n = !0),
                        n),
                        i.isLGMobile = /lge |lg( g|\/(k|l|u)|50|54|\-[a-w])/i.test((navigator.userAgent || navigator.vendor || window.opera).toLowerCase()),
                        i.lazyLoadDelta = function(e, t, a, n) {
                            var i;
                            return i = c.byCountryCode[e] ? c.byCountryCode[e] : t ? c.lq : a ? c.hq : c.default,
                            n ? i.mobile : i.desktop
                        }(i.geoCode, i.isBadCountry, i.isHQCountry, i.isMobile),
                        i.lazyLoadDelta = (i.isLGMobile,
                        i.isHQCountry,
                        i.lazyLoadDelta),
                        e.adBannerManager.setGEOdata(i),
                        e.camBannerManager.setGEOdata(i)
                    }
                    ))
                }
                ,
                t.getBadCountryCodes = function() {
                    return o
                }
                ,
                t.getBadLanguagesCodes = function() {
                    return s
                }
                ,
                t.getHQCountryCodes = function() {
                    return r
                }
                ,
                t.getExtraBadCountryCodes = function() {
                    return l
                }
                ,
                t.getAdLazyLoadDelta = function() {
                    return 1e4
                }
                ,
                t.getAdLazyLoadDeltaValuesDB = function() {
                    return c
                }
                ,
                t.getBadCountryPercentage = function() {
                    return 20
                }
                ,
                t.getLGMobilePercentage = function() {
                    return 60
                }
                ,
                t.getGEOFromStorage = function() {
                    return localStorage.getItem(n)
                }
                ,
                t
            }(Z),
            ie.nativeAd = function(e, t, a) {
                var n, i = {}, o = {}, s = null, r = 0, l = "_models_h_2";
                function c(e, t, n, o, s) {
                    var r = new XMLHttpRequest
                      , l = function() {
                        var e = navigator.languages;
                        return void 0 === e ? null : Array.isArray(e) && 0 !== e.length ? e.join(",") : null
                    }()
                      , c = ""
                      , u = function() {
                        if ("category_rotator_maps" !== i.pageType)
                            return null;
                        var e = location.pathname;
                        return e = e.split("/"),
                        e[1]
                    }()
                      , d = ""
                      , p = a.getGEOFromStorage()
                      , m = "";
                    void 0 === t && (t = {}),
                    void 0 === s && (s = 3e4),
                    null !== l && (c = "?langs=" + l),
                    null !== u && (d = "" === c ? "?cats=" + u : "&cats=" + u),
                    null !== p && (m = "" === c && "" === d ? "?code=" + p : "&code=" + p),
                    r.open("GET", e + c + d + m, !0),
                    r.setRequestHeader("Content-Type", "application/json"),
                    r.onload = function() {
                        200 === this.status || 304 === this.status ? "function" == typeof n && n(JSON.parse(this.response)) : "function" == typeof o && o()
                    }
                    ,
                    r.onerror = function() {
                        "function" == typeof o && o()
                    }
                    ,
                    r.send()
                }
                function u(e) {
                    s = e.data
                }
                function d(e) {
                    var t = document.createElement("li")
                      , a = document.createElement("a")
                      , n = document.createElement("img")
                      , i = document.createElement("span")
                      , o = document.createElement("div")
                      , s = document.createElement("span");
                    return t.className = "thumbwook c-model",
                    a.className = "rel-link",
                    a.href = "https://go.xxxijmp.com?userId=353e4188d9a9c1a093c1c9f0924ec9ad933d0e4dc993217fdd17e56b5ac764bd&showModal=signup&path=/" + e.name + "&targetDomain=pornpics.chat",
                    a.rel = "nofollow",
                    a.title = e.name,
                    a.target = "_blank",
                    a.setAttribute("data-cam-id", e.id),
                    n.src = "https://static.pornpics.com/style/img/1px.png",
                    n.setAttribute("data-src", e.image),
                    n.alt = e.name,
                    n.width = "300",
                    n.height = e.height,
                    i.className = "h2",
                    s.innerHTML = e.name,
                    o.innerHTML = "Online",
                    i.appendChild(o),
                    i.appendChild(s),
                    a.appendChild(i),
                    a.appendChild(n),
                    t.appendChild(a),
                    t
                }
                function p(e) {
                    var t, a = localStorage.getItem(l);
                    a ? a = JSON.parse(a) : ((t = {}).t = (new Date).getTime(),
                    t.c = [],
                    a = t),
                    a.c.push(e),
                    a.t = (new Date).getTime(),
                    localStorage.setItem(l, JSON.stringify(a))
                }
                function m(e) {
                    var t, a, n, i = {};
                    return 0 === e.a.length ? (i.n = e.n,
                    i.t = e.t,
                    i.k = e.k,
                    i.id = e.id,
                    i) : 1 === e.a.length ? (i.n = e.n,
                    i.t = e.a[0].t,
                    i.k = e.a[0].k,
                    i.id = e.id,
                    i) : (a = 0,
                    n = e.a.length - 1,
                    t = Math.floor(Math.random() * (n - a + 1)) + a,
                    i.n = e.n,
                    i.t = e.a[t].t,
                    i.k = e.a[t].k,
                    i.id = e.id,
                    i)
                }
                function h(e) {
                    for (var t, a, n, i, o = 0; o < e.length; o++)
                        if (n = e[o].id,
                        i = void 0,
                        !(i = localStorage.getItem(l)) || -1 === (i = JSON.parse(i)).c.indexOf(n)) {
                            p(e[o].id),
                            t = d({
                                name: (a = m(e[o])).n,
                                image: a.t,
                                height: (300 / a.k).toFixed(2),
                                id: a.id
                            });
                            break
                        }
                    return void 0 === t && (t = d({
                        name: (a = m(e[0])).n,
                        image: a.t,
                        height: (300 / a.k).toFixed(2),
                        id: a.id
                    }),
                    localStorage.removeItem(l),
                    p(e[0].id)),
                    t
                }
                return o.init = function(e) {
                    switch (function(e) {
                        i.path = e.path || "",
                        i.pageType = e.pageType || ""
                    }(e = e || {}),
                    i.pageType) {
                    case "main":
                    case "channels":
                    case "models":
                    case "models_filters":
                    case "favorite_new":
                    case "favorite_old":
                    case "favorite_random":
                        return void (s = [])
                    }
                    var t;
                    (t = localStorage.getItem(l)) && (t = JSON.parse(t),
                    (new Date).getTime() - t.t > 9e5 && localStorage.removeItem(l)),
                    c(i.path, {}, (function(e) {
                        u(e),
                        n = setInterval((function() {
                            ++r > 20 ? clearInterval(n) : c(i.path, {}, (function(e) {
                                u(e)
                            }
                            ), (function() {
                                s = []
                            }
                            ))
                        }
                        ), 6e4)
                    }
                    ), (function() {
                        s = []
                    }
                    ))
                }
                ,
                o.getNativeBlock = function() {
                    if (0 !== s.length)
                        return h(s)
                }
                ,
                o
            }(jQuery, ie.utilities, ie.userGEO),
            ie.adManager = function(e) {
                var t = {}
                  , a = {}
                  , n = 1;
                return a.init = function(n) {
                    (function(e) {
                        t.adModuleOptions = e.adModuleOptions || "",
                        t.nativeAdOptions = e.nativeAdOptions || ""
                    }
                    )(n = n || {}),
                    a.include = function(t) {
                        e.adBannerManager.setMainContentContainerAd(t)
                    }
                    ,
                    a.includeGallery = function() {}
                    ,
                    a.includeLineAd = function(e) {}
                    ,
                    a.frameTransform = function() {
                        e.adBannerManager.frameTransform()
                    }
                    ,
                    a.includeRelAd = function(t) {
                        e.adBannerManager.setRelContentContainerAd(t)
                    }
                    ,
                    a.initRelEvents = function(t) {
                        e.adBannerManager.setAllContentContainersAdEvents(t)
                    }
                    ,
                    a.initMainEvents = function(t) {
                        e.adBannerManager.setAllContentContainersAdEvents(t)
                    }
                    ,
                    a.setGEOData = function(t) {
                        e.adBannerManager.setGEOdata(t),
                        e.camBannerManager.setGEOdata(t)
                    }
                    ,
                    a.getNativeBlock = function() {
                        return e.camBannerManager.getCamBlock()
                    }
                }
                ,
                a.getMode = function() {
                    return e.adBannerManager.isAdCapReached() ? n % 2 != 0 ? (n++,
                    "banner") : (n++,
                    "native") : "native"
                }
                ,
                a.getModeRel = function() {
                    return e.adBannerManager.isAdCapReached() ? n % 2 != 0 ? (n++,
                    "banner") : (n++,
                    "native") : "native"
                }
                ,
                a
            }(Z),
            ie.userBookmarks = function(e) {
                var t = {}
                  , a = "_user_bookmark"
                  , n = 36e5
                  , i = 2628e6
                  , o = null;
                function s() {
                    var e, t = localStorage.getItem(a);
                    t = function(e) {
                        var t = (new Date).getTime();
                        switch (e.type) {
                        case 0:
                            t - e.time > n && t - e.time <= i ? (e.type = 1,
                            e.time = t) : e.time = t;
                            break;
                        case 1:
                            t - e.time > i ? (e.type = 0,
                            e.time = t) : e.time = t
                        }
                        return e
                    }(t = null === t ? {
                        type: 0,
                        time: (new Date).getTime()
                    } : JSON.parse(t)),
                    e = t,
                    localStorage.setItem(a, JSON.stringify(e)),
                    o = t
                }
                return t.init = function(e) {
                    e = e || {},
                    function() {
                        var e = "test";
                        try {
                            return localStorage.setItem(e, e),
                            localStorage.removeItem(e),
                            !0
                        } catch (e) {
                            return !1
                        }
                    }() && s()
                }
                ,
                t.getUserBookmarkStatus = function() {
                    return null === o ? 0 : o.type
                }
                ,
                t
            }(jQuery),
            ie.captchaV3Feedback = function(e) {
                var t = {}
                  , a = {}
                  , n = !1;
                function i() {
                    var e = document.createElement("script");
                    e.type = "text/javascript",
                    e.src = t.gLink + "?render=" + t.gKey,
                    e.async = !0,
                    e.defer = !0,
                    document.body.appendChild(e)
                }
                function o(e) {
                    return new Promise(((t,a)=>{
                        let n = setInterval((()=>{
                            null !== document.querySelector(e) && (window.clearInterval(n),
                            t())
                        }
                        ), 30)
                    }
                    ))
                }
                function s(e) {
                    grecaptcha.ready((function() {
                        grecaptcha.execute(t.gKey, {
                            action: "homepage"
                        }).then((function(t) {
                            e(t)
                        }
                        ))
                    }
                    ))
                }
                return a.init = function(e) {
                    !function(e) {
                        t.gLink = t.gLink || e.gLink,
                        t.gKey = t.gKey || e.gKey
                    }(e = e || {})
                }
                ,
                a.setCaptcha = function(t) {
                    if (!n)
                        return i(),
                        void o(".grecaptcha-badge").then((()=>{
                            n = !0,
                            s(t)
                        }
                        ));
                    0 !== e(".grecaptcha-badge-2").length ? s(t) : (n = !1,
                    i(),
                    o(".grecaptcha-badge").then((()=>{
                        n = !0,
                        s(t)
                    }
                    )))
                }
                ,
                a.reset = function(e) {
                    return grecaptcha.reset(e)
                }
                ,
                a.getResponse = function(e) {
                    return grecaptcha.getResponse(e)
                }
                ,
                a
            }(jQuery),
            ie.captchaV3 = function(e) {
                var t = {}
                  , a = {}
                  , n = !1;
                function i() {
                    var e = document.createElement("script");
                    e.type = "text/javascript",
                    e.src = t.gLink + "?render=" + t.gKey,
                    e.async = !0,
                    e.defer = !0,
                    document.body.appendChild(e)
                }
                function o(e) {
                    return new Promise(((t,a)=>{
                        let n = setInterval((()=>{
                            null !== document.querySelector(e) && (window.clearInterval(n),
                            t())
                        }
                        ), 30)
                    }
                    ))
                }
                function s(e) {
                    grecaptcha.ready((function() {
                        grecaptcha.execute(t.gKey, {
                            action: "homepage"
                        }).then((function(t) {
                            e(t)
                        }
                        ))
                    }
                    ))
                }
                return a.init = function(e) {
                    !function(e) {
                        t.gLink = t.gLink || e.gLink,
                        t.gKey = t.gKey || e.gKey
                    }(e = e || {})
                }
                ,
                a.setCaptcha = function(t) {
                    if (!n)
                        return i(),
                        void o(".grecaptcha-badge").then((()=>{
                            n = !0,
                            s(t)
                        }
                        ));
                    0 !== e(".grecaptcha-badge").length ? s(t) : (n = !1,
                    i(),
                    o(".grecaptcha-badge").then((()=>{
                        n = !0,
                        s(t)
                    }
                    )))
                }
                ,
                a.reset = function(e) {
                    return grecaptcha.reset(e)
                }
                ,
                a.getResponse = function(e) {
                    return grecaptcha.getResponse(e)
                }
                ,
                a
            }(jQuery),
            ie.modalWindow = function() {
                var e, t = {}, a = {};
                function n() {
                    document.getElementById(a.id).style.display = "none"
                }
                function i(e) {
                    e.target === document.getElementById(a.id) && (document.getElementById(a.id).style.display = "none")
                }
                return t.init = function(e) {
                    !function(e) {
                        a.id = a.id || e.id || "modalWindow",
                        a.class = a.class || e.class || "modal"
                    }(e = e || {})
                }
                ,
                t.show = function(t, o) {
                    !function(t) {
                        if (!e) {
                            var o = document.createElement("div")
                              , s = document.createElement("div")
                              , r = document.createElement("span")
                              , l = document.createElement("div");
                            o.id = a.id,
                            o.className = a.class,
                            t || o.addEventListener("click", i),
                            s.className = a.class + "-window",
                            r.className = a.class + "-close icon icon-cross-2",
                            r.addEventListener("click", n),
                            l.className = a.class + "-content",
                            t || s.appendChild(r),
                            s.appendChild(l),
                            o.appendChild(s),
                            e = o,
                            document.body.appendChild(o)
                        }
                    }(t),
                    o && function(t) {
                        var n = e.querySelector("." + a.class + "-content");
                        n.innerHTML = "",
                        n.appendChild(t)
                    }(o),
                    document.getElementById(a.id).style.display = "block"
                }
                ,
                t.hide = function() {
                    n()
                }
                ,
                t
            }(),
            ie.feedback = function(e, t, a) {
                var n, i = {}, o = {}, s = 0, r = 0, l = e(window);
                function c(e) {
                    switch (e) {
                    case "show":
                        n.stop(!0, !0).fadeIn("fast");
                        break;
                    case "hide":
                        n.stop(!0, !0).fadeOut("fast")
                    }
                }
                function u(t) {
                    t.preventDefault();
                    var a = t.target.form.elements
                      , n = {};
                    if (n.name = a.name.value,
                    n.email = a.email.value,
                    n.message = a.message.value,
                    n.token = a.token.value,
                    "" === n.name || "" === n.message)
                        return d("The name and message fields must be filled."),
                        !1;
                    n.userAgent = window.navigator.userAgent,
                    n.siteLink = window.location.href,
                    n.displaySize = screen.width + "x" + screen.height,
                    n.browserSize = e(window).width() + "x" + e(window).height(),
                    o.sendLink_2 && (e("." + o.formClass + "__button").hide(0),
                    function(t, a) {
                        !function(t, a, n, i) {
                            n || (n = ""),
                            e.ajax({
                                url: t,
                                type: a,
                                dataType: "json",
                                data: n,
                                timeout: 3e3,
                                success: function(e) {
                                    i(e)
                                },
                                error: function() {
                                    i({
                                        status: "error"
                                    })
                                }
                            })
                        }(o.api_is_logged, "POST", "", (function(e) {
                            "error" === e.status && (t.userId = "0"),
                            "ok" === e.status && (e.data.login,
                            t.userId = "0"),
                            a(t)
                        }
                        ))
                    }(n, (function(t) {
                        e.post(o.sendLink_2, e.param(t), (function() {
                            d("Your message has been sent. Thank you!"),
                            o.callback()
                        }
                        ))
                    }
                    )))
                }
                function d(t) {
                    var a = e("." + o.formClass + "__form-message");
                    a.text(t),
                    a.slideDown("fast")
                }
                return o.callback = {},
                i.init = function(t) {
                    (function(e) {
                        o.fbButton = o.fbButton || e.fbButton || "",
                        o.formId = o.formId || e.formId || "feedback",
                        o.formClass = o.formClass || e.formClass || "feedback",
                        o.labelMessage = o.labelMessage || e.labelMessage || "",
                        o.sendLink = o.sendLink || e.sendLink || "",
                        o.sendLink_2 = o.sendLink_2 || e.sendLink_2 || "",
                        o.isLoggedCookieName = o.isLoggedCookieName || e.isLoggedCookieName || "",
                        o.api_is_logged = o.api_is_logged || e.api_is_logged || ""
                    }
                    )(t = t || {}),
                    n = e("#" + o.fbButton),
                    l.on("scroll", (function() {
                        var t;
                        t = l.scrollTop(),
                        e(window).width() < 750 ? (clearTimeout(r),
                        s < t || t < 50 ? c("hide") : (c("show"),
                        r = setTimeout((function() {
                            c("hide")
                        }
                        ), 6e3)),
                        s = t) : c("show")
                    }
                    ))
                }
                ,
                i.getForm = function() {
                    var e, t, n, i, s, r, l, c, d, p;
                    return e = document.createDocumentFragment(),
                    t = document.createElement("form"),
                    n = document.createElement("label"),
                    i = document.createElement("input"),
                    s = document.createElement("input"),
                    r = document.createElement("input"),
                    l = document.createElement("div"),
                    c = document.createElement("textarea"),
                    d = document.createElement("input"),
                    p = document.createElement("div"),
                    t.id = o.formId,
                    n.className = o.formClass + "__label",
                    n.innerText = o.labelMessage,
                    i.className = o.formClass + "__text inpt-default",
                    i.setAttribute("type", "text"),
                    i.setAttribute("placeholder", "Name"),
                    i.setAttribute("name", "name"),
                    s.className = o.formClass + "__text inpt-default",
                    s.setAttribute("type", "email"),
                    s.setAttribute("placeholder", "E-mail (optional)"),
                    s.setAttribute("name", "email"),
                    r.setAttribute("type", "hidden"),
                    r.setAttribute("name", "token"),
                    r.setAttribute("id", "fbtoken"),
                    l.className = o.formClass + "__area",
                    c.setAttribute("placeholder", "Your message"),
                    c.setAttribute("name", "message"),
                    d.className = o.formClass + "__button btn-fill",
                    d.setAttribute("type", "submit"),
                    d.setAttribute("value", "Send feedback"),
                    d.addEventListener("click", u),
                    p.className = o.formClass + "__form-message",
                    a.setCaptcha((function(e) {
                        r.value = e
                    }
                    )),
                    t.appendChild(n),
                    t.appendChild(i),
                    t.appendChild(s),
                    t.appendChild(r),
                    l.appendChild(c),
                    t.appendChild(l),
                    t.appendChild(d),
                    t.appendChild(p),
                    e.appendChild(t),
                    e
                }
                ,
                i.setSendCallback = function(e) {
                    "function" == typeof e && (o.callback = e)
                }
                ,
                i
            }(jQuery, ie.utilities, ie.captchaV3),
            ie.report = function(e, t) {
                var a = {}
                  , n = {};
                e(window);
                function i(t) {
                    t.preventDefault();
                    var a = t.target.form.elements
                      , i = {};
                    if (i.name = a.name.value,
                    i.email = a.email.value,
                    i.message = a.message.value,
                    i.reportType = a.reportType.value,
                    "Report type" === i.reportType)
                        return o("Select the type of report."),
                        !1;
                    i.userAgent = window.navigator.userAgent,
                    i.siteLink = window.location.href,
                    i.displaySize = screen.width + "x" + screen.height,
                    i.browserSize = e(window).width() + "x" + e(window).height(),
                    n.sendLink_2 && (e("." + n.formClass + "__button").hide(0),
                    function(t, a) {
                        !function(t, a, n, i) {
                            n || (n = ""),
                            e.ajax({
                                url: t,
                                type: a,
                                dataType: "json",
                                data: n,
                                timeout: 3e3,
                                success: function(e) {
                                    i(e)
                                },
                                error: function() {
                                    i({
                                        status: "error"
                                    })
                                }
                            })
                        }(n.api_is_logged, "POST", "", (function(e) {
                            "error" === e.status && (t.userId = "0"),
                            "ok" === e.status && (e.data.login,
                            t.userId = "0"),
                            a(t)
                        }
                        ))
                    }(i, (function(t) {
                        e.post(n.sendLink_2, e.param(t), (function() {
                            o("Your report has been sent. Thank you!"),
                            n.callback()
                        }
                        ))
                    }
                    )))
                }
                function o(t) {
                    var a = e("." + n.formClass + "__form-message");
                    a.text(t),
                    a.slideDown("fast")
                }
                return n.callback = {},
                a.init = function(e) {
                    !function(e) {
                        n.fbButton = n.fbButton || e.fbButton || "",
                        n.formId = n.formId || e.formId || "report",
                        n.formClass = n.formClass || e.formClass || "report",
                        n.labelMessage = n.labelMessage || e.labelMessage || "",
                        n.sendLink_2 = n.sendLink_2 || e.sendLink_2 || "",
                        n.isLoggedCookieName = n.isLoggedCookieName || e.isLoggedCookieName || "",
                        n.api_is_logged = n.api_is_logged || e.api_is_logged || ""
                    }(e = e || {})
                }
                ,
                a.getForm = function() {
                    var e, t, a, o, s, r, l, c, u, d, p, m, h, g, f;
                    return e = document.createDocumentFragment(),
                    t = document.createElement("form"),
                    a = document.createElement("label"),
                    o = document.createElement("input"),
                    s = document.createElement("input"),
                    r = document.createElement("div"),
                    l = document.createElement("textarea"),
                    c = document.createElement("input"),
                    u = document.createElement("select"),
                    d = document.createElement("option"),
                    p = document.createElement("option"),
                    m = document.createElement("option"),
                    h = document.createElement("option"),
                    g = document.createElement("option"),
                    f = document.createElement("div"),
                    t.id = n.formId,
                    a.className = n.formClass + "__label",
                    a.innerText = n.labelMessage,
                    o.className = n.formClass + "__text inpt-default",
                    o.setAttribute("type", "text"),
                    o.setAttribute("placeholder", "Name (optional)"),
                    o.setAttribute("name", "name"),
                    s.className = n.formClass + "__text inpt-default",
                    s.setAttribute("type", "email"),
                    s.setAttribute("placeholder", "E-mail (optional)"),
                    s.setAttribute("name", "email"),
                    r.className = n.formClass + "__area",
                    l.setAttribute("placeholder", "Your message"),
                    l.setAttribute("name", "message"),
                    c.className = n.formClass + "__button btn-fill",
                    c.setAttribute("type", "submit"),
                    c.setAttribute("value", "Send Report"),
                    c.addEventListener("click", i),
                    f.className = n.formClass + "__form-message",
                    u.className = n.formClass + "__select select-default",
                    u.setAttribute("name", "reportType"),
                    u.id = "reportType",
                    d.setAttribute("value", "Report type"),
                    d.innerHTML = "Report type",
                    d.setAttribute("selected", "selected"),
                    d.setAttribute("disabled", "disabled"),
                    p.setAttribute("value", "Underage"),
                    p.innerHTML = "Underage",
                    m.setAttribute("value", "Violence/Rape"),
                    m.innerHTML = "Violence/Rape",
                    h.setAttribute("value", "Wrong category"),
                    h.innerHTML = "Wrong category",
                    g.setAttribute("value", "Other"),
                    g.innerHTML = "Other",
                    u.appendChild(d),
                    u.appendChild(p),
                    u.appendChild(m),
                    u.appendChild(h),
                    u.appendChild(g),
                    t.appendChild(a),
                    t.appendChild(o),
                    t.appendChild(s),
                    t.appendChild(u),
                    r.appendChild(l),
                    t.appendChild(r),
                    t.appendChild(c),
                    t.appendChild(f),
                    e.appendChild(t),
                    e
                }
                ,
                a.setSendCallback = function(e) {
                    "function" == typeof e && (n.callback = e)
                }
                ,
                a
            }(jQuery, ie.utilities),
            ie.share = function(e, t) {
                var a = {}
                  , n = {}
                  , i = !1;
                return n.init = function(n) {
                    (function(e) {
                        a.shareButtonClassName = a.shareButtonClassName || e.shareButtonClassName,
                        a.shareContainerClassName = a.shareContainerClassName || e.shareContainerClassName,
                        a.shareLink = a.shareLink || e.shareLink
                    }
                    )(n = n || {}),
                    e("." + a.shareButtonClassName).on("click", (function() {
                        var n = e("." + a.shareContainerClassName);
                        if (!i) {
                            var o = document.createElement("script")
                              , s = document.createElement("div");
                            s.className = "a2a_kit a2a_kit_size_42 a2a_default_style",
                            n.append(s),
                            s.innerHTML = '<a class="a2a_button_twitter"></a>\n<a class="a2a_button_reddit"></a>\n<a class="a2a_button_email"></a>\n<a class="a2a_button_tumblr"></a>\n<a class="a2a_button_facebook"></a>\n<a class="a2a_button_whatsapp"></a>\n<a class="a2a_button_blogger"></a>\n<a class="a2a_button_wechat"></a>\n<a class="a2a_button_telegram"></a>\n<a class="a2a_button_facebook_messenger"></a>\n<a class="a2a_button_skype"></a>\n<a class="a2a_button_print"></a>',
                            o.src = a.shareLink,
                            o.onload = function() {
                                t.hideLineLoader(a.shareContainerClassName)
                            }
                            ,
                            t.showLineLoader(a.shareContainerClassName),
                            document.body.appendChild(o),
                            i = !0
                        }
                        n.slideToggle()
                    }
                    ))
                }
                ,
                n
            }(jQuery, ie.utilities),
            ie.catList = function(e, t) {
                var a = {}
                  , n = {}
                  , i = !1;
                function o() {
                    var n, i, o = "", s = (n = window.location.search,
                    (i = new URLSearchParams(n)).has("region") ? i.get("region") : null);
                    null !== s && (o = "&region=" + s),
                    e.ajax({
                        url: a.filePath + a.lang + o,
                        dataType: "html",
                        success: function(e) {
                            t.hideLineLoader(a.container + "__block"),
                            function(e) {
                                var t, n, i = document.querySelector("." + a.container + "__block");
                                a.lang && "en" !== a.lang ? e.push({
                                    name: "Webcams",
                                    link: "/" + a.lang + "/webcams/",
                                    flag_code: ""
                                }) : e.push({
                                    name: "Webcams",
                                    link: "/webcams/",
                                    flag_code: ""
                                });
                                e.sort((function(e, t) {
                                    var a = e.name.toUpperCase()
                                      , n = t.name.toUpperCase();
                                    return a < n ? -1 : a > n ? 1 : 0
                                }
                                )),
                                t = function(e) {
                                    var t, n, i, o, s, r, l, c = document.createElement("ul");
                                    c.classList = "desktop";
                                    for (var u = 0; u < e.length; u++)
                                        s = e[u],
                                        t = document.createElement("li"),
                                        n = document.createElement("a"),
                                        i = document.createElement("i"),
                                        o = document.createTextNode(s.name),
                                        r = document.createElement("span"),
                                        l = document.createElement("i"),
                                        "" !== s.flag_code && (l.classList = "m-flag flag-icon flag-icon-" + s.flag_code),
                                        n.href = s.link,
                                        r.appendChild(o),
                                        n.appendChild(r),
                                        "" !== s.flag_code && n.appendChild(l),
                                        "Webcams" === s.name && (i.classList = "green-dot",
                                        n.appendChild(i)),
                                        t.appendChild(n),
                                        c.appendChild(t);
                                    t = document.createElement("li"),
                                    n = document.createElement("a"),
                                    o = document.createTextNode("View all"),
                                    a.lang && "en" !== a.lang ? n.href = "/" + a.lang + "/tags/" : n.href = "/tags/";
                                    return n.classList = "cat-all",
                                    n.appendChild(o),
                                    t.appendChild(n),
                                    c.appendChild(t),
                                    c
                                }(e),
                                n = function(e) {
                                    var t, n, i, o, s, r, l, c = document.createElement("ul");
                                    c.classList = "mobile",
                                    t = document.createElement("li"),
                                    n = document.createElement("a"),
                                    i = document.createTextNode("View all"),
                                    a.lang && "en" !== a.lang ? n.href = "/" + a.lang + "/tags/" : n.href = "/tags/";
                                    n.classList = "cat-all",
                                    n.appendChild(i),
                                    t.appendChild(n),
                                    c.appendChild(t);
                                    for (var u = 0; u < e.length; u++)
                                        o = e[u],
                                        t = document.createElement("li"),
                                        n = document.createElement("a"),
                                        s = document.createElement("i"),
                                        i = document.createTextNode(o.name),
                                        r = document.createElement("span"),
                                        l = document.createElement("i"),
                                        "" !== o.flag_code && (l.classList = "m-flag flag-icon flag-icon-" + o.flag_code),
                                        "Webcams" === o.name && (s.classList = "green-dot"),
                                        n.href = o.link,
                                        r.appendChild(i),
                                        n.appendChild(r),
                                        "" !== o.flag_code && n.appendChild(l),
                                        "Webcams" === o.name && n.appendChild(s),
                                        t.appendChild(n),
                                        c.appendChild(t);
                                    return c
                                }(e),
                                i.appendChild(t),
                                i.appendChild(n)
                            }(JSON.parse(e))
                        }
                    })
                }
                return n.init = function(n) {
                    (function(e) {
                        a.container = a.container || e.container,
                        a.filePath = a.filePath || e.filePath,
                        a.lang = a.lang || e.lang
                    }
                    )(n = n || {}),
                    e("." + a.container + "__button").on("click", (function() {
                        i || (t.showLineLoader(a.container + "__block"),
                        i = !0,
                        o())
                    }
                    ))
                }
                ,
                n
            }(jQuery, ie.utilities),
            ie.moreTags = function(e) {
                var t, a, n, i = {}, o = {}, s = "_hide", r = "_show", l = "__button_show", c = "__button_hide";
                function u() {
                    if (n.length < 4)
                        return !1;
                    n.each((function(t) {
                        var a = e(this);
                        t > 3 && a.addClass(s)
                    }
                    )),
                    n.last().after(((a = e("<span class='info-button'></span>")).addClass(l),
                    a.on("click", d),
                    a))
                }
                function d() {
                    n.each((function(t) {
                        var a = e(this);
                        t > 3 && (a.hasClass(s) ? a.toggleClass(s + " " + r) : a.toggleClass(r + " " + s))
                    }
                    )),
                    a.hasClass(l) ? a.toggleClass(l + " " + c) : a.toggleClass(c + " " + l)
                }
                return o.init = function(a) {
                    (function(a) {
                        i.container = i.container || a.container,
                        t = e("." + i.container),
                        n = t.children("a"),
                        s = i.container + s,
                        r = i.container + r,
                        c = i.container + c,
                        l = i.container + l
                    }
                    )(a = a || {}),
                    u()
                }
                ,
                o
            }(jQuery),
            ie.mainGrid = function(e, t, a, n) {
                var i, o, s, r, l, c = {}, u = {}, d = e(window), p = 2, m = {
                    align: "left",
                    itemWidth: 300,
                    autoResize: !1,
                    inactiveClass: u.inactiveClass
                }, h = t.desktop(), g = "https://static.pornpics.com/style/img/image-ph.png";
                function f(t, a) {
                    var n, i = e(window).width(), o = e("." + u.wookmarkThumbClass).not(".stamp-bn-1"), s = e(t), r = e(a);
                    if (i >= 1558)
                        n = 5;
                    else if (i >= 1251 && i < 1558)
                        n = 4;
                    else if (i >= 944 && i < 1251)
                        n = 3;
                    else if (i >= 851 && i < 943)
                        n = 4;
                    else {
                        if (!(i >= 644 && i < 851))
                            return;
                        n = 3
                    }
                    return e(".stamp-bn-1").attr("data-u-id", n),
                    o.each((function(e, t) {
                        var a = e + 1;
                        a < n ? t.setAttribute("data-u-id", a) : t.setAttribute("data-u-id", a + 1)
                    }
                    )),
                    s.attr("data-u-id") - r.attr("data-u-id")
                }
                function b(t, a) {
                    var n, i = e(window).width(), o = e("." + u.wookmarkThumbClass).not(".gp-thumb"), s = o.length + 1, r = e(t), l = e(a);
                    if (i <= 600)
                        return n = s,
                        e(".gp-thumb").attr("data-u-id", n),
                        o.each((function(e, t) {
                            var a = e + 1;
                            a < n ? t.setAttribute("data-u-id", a) : t.setAttribute("data-u-id", a + 1)
                        }
                        )),
                        r.attr("data-u-id") - l.attr("data-u-id")
                }
                function v() {
                    return d.width() > 943 ? (m.itemWidth = 300,
                    m.offset = 7,
                    m.outerOffset = 14,
                    m.flexibleWidth = "0",
                    m.inactiveClass = u.inactiveClass,
                    void (m.comparator = f)) : d.width() > 600 ? (m.itemWidth = 200,
                    m.offset = 7,
                    m.outerOffset = 0,
                    m.flexibleWidth = "50%",
                    m.inactiveClass = u.inactiveClass,
                    void (m.comparator = f)) : (m.itemWidth = 300,
                    m.offset = 6,
                    m.outerOffset = 5,
                    m.flexibleWidth = "100%",
                    m.inactiveClass = u.inactiveClass,
                    void (m.comparator = b))
                }
                function y(e, t, a) {
                    return void 0 === e ? (v(),
                    e = new Wookmark("#" + t,m)) : "added" === a ? (e.initItems(),
                    e.layout(!0),
                    e) : "changed" === a ? (v(),
                    e.updateOptions(m),
                    e) : "refresh" === a ? (e.layout(!0),
                    e) : void 0
                }
                function w(e) {
                    !h && i.hasClass(u.desktopOnlyContainer) ? s.not("." + u.inactiveClass).addClass(u.inactiveClass).hide() : s.filter("." + u.inactiveClass).removeClass(u.inactiveClass).show(),
                    y(undefined, u.listContainer, e),
                    r > 0 && y(undefined, u.relatedContainer, e)
                }
                function C(e) {
                    return e <= 600 ? function(e, t) {
                        return Math.round((e - 10) / t)
                    }
                    : e >= 601 && e <= 643 ? function(e, t) {
                        return Math.round((e - 37) / 2 / t)
                    }
                    : e >= 644 && e <= 850 ? function(e, t) {
                        return Math.round((e - 46) / 3 / t)
                    }
                    : e >= 851 && e <= 943 ? function(e, t) {
                        return Math.round((e - 54) / 4 / t)
                    }
                    : null
                }
                function k() {
                    var t, a, n, i = C(d.width());
                    if (null !== i) {
                        t = (a = e("." + u.wookmarkThumbClass).not("." + u.adClass).not("." + u.playerClass)).length;
                        for (var o = 0; o < t; o++) {
                            var s = a[o];
                            try {
                                n = s.querySelector(".rel-link > img").getAttribute("height")
                            } catch (e) {
                                n = 250
                            }
                            s.style.height = i(d.width(), 600 / n) + "px"
                        }
                    }
                }
                function _() {
                    var t, a, n, i = C(d.width());
                    t = (a = e("." + u.playerClass)).length;
                    for (var o = 0; o < t; o++) {
                        var s = a[o];
                        try {
                            n = s.querySelector("." + u.playerContainerClass).getAttribute("data-gp-height")
                        } catch (e) {
                            n = 250
                        }
                        null !== i ? d.width() <= 600 ? s.style.height = i(d.width(), 300 / n) + 4 + "px" : s.style.height = i(d.width(), 300 / n) + "px" : s.style.height = n + "px"
                    }
                }
                function P(t, a, n, i) {
                    n || (n = ""),
                    e.ajax({
                        url: t,
                        dataType: a,
                        data: n,
                        success: function(e) {
                            i(e)
                        }
                    })
                }
                function A(e) {
                    return h && d.width() > 1557 ? 2 === p || 3 === p || 4 === p ? e % 10 == 5 : (e - 5) % 20 == 0 : 2 === p || 3 === p ? function(e) {
                        return [5, 11, 16, 25, 31, 36, 45, 51, 56, 65, 71, 76].includes(e)
                    }(e) : e % 10 == 5
                }
                function I(e) {
                    var t, a, i = n.getMode();
                    switch (e || i) {
                    case "banner":
                        return t = document.createElement("li"),
                        a = document.createElement("span"),
                        t.className = "thumbwook r-frame",
                        a.className = "h2 ad-text",
                        t.appendChild(a),
                        t;
                    case "native":
                        return n.getNativeBlock()
                    }
                }
                function T(e, t, a) {
                    var n, o = 0, s = document.createDocumentFragment(), r = e.length;
                    if (0 === r)
                        return null;
                    for (; o < r; o += 1) {
                        1 === t && A(o) && null != (n = I()) && s.appendChild(n),
                        2 === t && A(o) && null != (n = I("banner")) && s.appendChild(n);
                        var l, c, u, d = e[o], m = document.createElement("li"), h = document.createElement("a"), g = document.createElement("span"), f = document.createElement("img"), b = document.createElement("span"), v = document.createElement("span"), y = document.createElement("span"), w = document.createElement("i"), C = document.createElement("span");
                        void 0 !== d.noMob && !0 === d.noMob ? m.className = "thumbwook thumb-no-mob" : m.className = "thumbwook",
                        h.className = "rel-link",
                        void 0 !== d.gid && "" !== d.gid && h.setAttribute("data-gid", d.gid),
                        void 0 !== d.tid && h.setAttribute("data-tid", d.tid),
                        void 0 !== d.mid && h.setAttribute("data-mid", d.mid),
                        void 0 !== d.atid && h.setAttribute("data-atid", d.atid),
                        void 0 !== d.position && h.setAttribute("data-index", d.position),
                        void 0 !== d.outLink && !0 === d.outLink && (l = document.createElement("span"),
                        (c = document.createElement("i")).className = "icon icon-external-link",
                        l.className = "out-label",
                        l.appendChild(c)),
                        void 0 !== d.nofollow && !0 === d.nofollow && h.setAttribute("rel", "nofollow"),
                        h.setAttribute("href", d.g_url),
                        void 0 !== a ? (f.setAttribute("src", "https://static.pornpics.com/style/img/1px.png"),
                        f.setAttribute("data-src", d.t_url_460)) : (f.setAttribute("srcset", d.t_url + " 300w, " + d.t_url_460 + " 460w"),
                        f.setAttribute("sizes", "(max-width: 600px) 100vw, (min-width: 600px) 1vw"),
                        f.setAttribute("src", d.t_url)),
                        void 0 !== d.desc && "" !== d.desc ? f.setAttribute("alt", d.desc) : void 0 !== d.title && f.setAttribute("alt", d.title + " Pics"),
                        f.setAttribute("width", 300),
                        f.setAttribute("height", d.h),
                        void 0 !== d.title && "" !== d.title && (g.className = "h2",
                        g.innerHTML = d.title,
                        h.appendChild(g)),
                        void 0 !== d.text && "" !== d.text && (g.className = "h2",
                        g.innerHTML = d.text,
                        h.appendChild(g)),
                        void 0 !== d.stats && ((u = document.createElement("span")).className = "dev-stats",
                        u.innerHTML = d.stats,
                        h.appendChild(u)),
                        void 0 !== d.thumbTitle && "" !== d.thumbTitle && (v.className = "m-name",
                        v.innerText = d.thumbTitle,
                        b.className = "h2 model-h2",
                        b.appendChild(v),
                        h.appendChild(b)),
                        void 0 !== d.gallsCount && "" !== d.gallsCount && (w.className = "icon icon-galleries",
                        y.className = "g-count",
                        y.appendChild(w),
                        C.textContent = " " + d.gallsCount,
                        y.appendChild(C),
                        h.appendChild(y)),
                        h.appendChild(f),
                        void 0 !== d.outLink && !0 === d.outLink && h.appendChild(l),
                        m.appendChild(h),
                        s.appendChild(m)
                    }
                    i.append(s),
                    p++
                }
                function E(e, t) {
                    if ("ok" === e.status) {
                        for (var a = 0, n = document.createDocumentFragment(), o = e.data.length; a < o; a += 1) {
                            var s, r = e.data[a], l = document.createElement("li"), c = document.createElement("a"), u = document.createElement("img"), d = document.createElement("span"), p = r.img;
                            p !== g && ((s = p.split(".com/300")).length > 1 ? p = s.join(".com/460") : 1 === (s = p.split(".com/460")).length && (p = p.split(".com").join(".com/460"))),
                            l.className = "thumbwook",
                            c.className = "rel-link",
                            d.className = "h2 m-name",
                            c.setAttribute("href", r.url),
                            c.setAttribute("data-gid", r.gid),
                            u.setAttribute("src", p),
                            u.setAttribute("title", r.title),
                            u.setAttribute("width", 300),
                            u.setAttribute("height", r.height),
                            void 0 !== t ? (u.setAttribute("src", "https://static.pornpics.com/style/img/1px.png"),
                            u.setAttribute("data-src", p)) : u.setAttribute("src", p),
                            void 0 !== r.name && "" !== r.name && (d.innerHTML = r.name,
                            c.appendChild(d)),
                            c.appendChild(u),
                            l.appendChild(c),
                            n.appendChild(l)
                        }
                        i.append(n)
                    }
                }
                return c.init = function(t) {
                    !function(t) {
                        u.wookmarkThumbClass = u.wookmarkThumbClass || t.wookmarkThumbClass || "",
                        u.listContainer = u.listContainer || t.listContainer || "",
                        i = e("#" + u.listContainer),
                        u.relatedContainer = u.relatedContainer || t.relatedContainer || "",
                        o = e("#" + u.relatedContainer),
                        r = o.length,
                        u.desktopOnlyContainer = u.desktopOnlyContainer || t.desktopOnlyContainer || "",
                        u.desktopOnlyThumb = u.desktopOnlyThumb || t.desktopOnlyThumb || "",
                        s = e("." + u.desktopOnlyThumb),
                        u.adClass = u.adClass || t.adClass || "",
                        u.playerClass = u.playerClass || t.playerClass || "",
                        u.playerContainerClass = u.playerContainerClass || t.playerContainerClass || "",
                        u.inactiveClass = u.inactiveClass || t.inactiveClass || "",
                        u.maxPage = u.maxPage || t.maxPage,
                        u.nextPageLink = u.nextPageLink || t.nextPageLink,
                        u.galleryId = u.galleryId || t.galleryId,
                        u.searchQuery = u.searchQuery || t.searchQuery,
                        u.favoritesNew = u.favoritesNew || t.favoritesNew,
                        u.favoritesOld = u.favoritesOld || t.favoritesOld
                    }(t = t || {})
                }
                ,
                c.hideLoader = function() {
                    a.hideLoader()
                }
                ,
                c.nonFloatingLoader = function() {
                    a.nonFloatingLoader()
                }
                ,
                c.showLoader = function() {
                    a.showLoader()
                }
                ,
                c.applyLayout = function(e) {
                    k(),
                    _(),
                    w(e)
                }
                ,
                c.calcHeights = function() {
                    k(),
                    _()
                }
                ,
                c.getNextPage = function(e, t, a) {
                    P(e, "html", t, (function(e) {
                        !function(e) {
                            i.append(e)
                        }(e),
                        "function" == typeof a && a()
                    }
                    ))
                }
                ,
                c.getNextJsonPage = function(e, t, a, n) {
                    P(e, "json", t, (function(e) {
                        T(e, a),
                        "function" == typeof n && n()
                    }
                    ))
                }
                ,
                c.getNextJsonLazyLoadPage = function(e, t, a, n) {
                    P(e, "json", t, (function(e) {
                        var t;
                        l = setTimeout((function() {
                            clearTimeout(l),
                            t = T(e, a, !0),
                            "function" == typeof n && n(t)
                        }
                        ), 100)
                    }
                    ))
                }
                ,
                c.getNextCamModelsJsonLazyLoadPage = function(e, t, a, n) {
                    P(e, "json", t, (function(e) {
                        var t;
                        t = function(e, t, a) {
                            var n, o = 0, s = document.createDocumentFragment(), r = e.length;
                            if (0 === r)
                                return null;
                            for (; o < r; o += 1) {
                                1 === t && A(o) && null != (n = I()) && s.appendChild(n);
                                var l = e[o]
                                  , c = document.createElement("li")
                                  , u = document.createElement("a")
                                  , d = document.createElement("span")
                                  , m = document.createElement("img");
                                void 0 !== l.noMob && !0 === l.noMob ? c.className = "thumbwook thumb-no-mob" : c.className = "thumbwook",
                                u.className = "rel-link",
                                u.setAttribute("href", "https://go.xxxijmp.com?userId=353e4188d9a9c1a093c1c9f0924ec9ad933d0e4dc993217fdd17e56b5ac764bd&path=/" + l.name),
                                void 0 !== l.cid && "" !== l.cid && u.setAttribute("data-cid", l.cid),
                                u.setAttribute("rel", "nofollow"),
                                u.setAttribute("target", "_blank"),
                                u.setAttribute("title", l.name),
                                m.setAttribute("src", "https://static.pornpics.com/style/img/1px.png"),
                                m.setAttribute("data-src", l.t_url_460),
                                m.setAttribute("alt", l.name),
                                m.setAttribute("width", 300),
                                m.setAttribute("height", l.h),
                                d.className = "h2",
                                d.innerHTML = l.name,
                                u.appendChild(d),
                                u.appendChild(m),
                                c.appendChild(u),
                                s.appendChild(c)
                            }
                            i.append(s),
                            p++
                        }(e, a),
                        "function" == typeof n && n(t)
                    }
                    ))
                }
                ,
                c.getNextModelJsonPage = function(e, t, a, n) {
                    P(e, "json", t, (function(e) {
                        !function(e, t) {
                            for (var a = 0, n = document.createDocumentFragment(), o = e.length; a < o; a += 1) {
                                var s = e[a]
                                  , r = document.createElement("li")
                                  , l = document.createElement("a")
                                  , c = document.createElement("span")
                                  , u = document.createElement("span")
                                  , d = document.createElement("i")
                                  , p = document.createElement("span")
                                  , m = document.createElement("span")
                                  , h = document.createElement("img");
                                r.className = "thumbwook",
                                c.className = "h2",
                                l.className = "rel-link",
                                u.className = "g-count",
                                d.className = "icon",
                                m.className = "m-flag flag-icon flag-icon-" + s.code.toString(),
                                l.setAttribute("href", "https://pornpics.com/?q=" + s.url),
                                l.setAttribute("title", s.name),
                                h.setAttribute("src", s.thumb),
                                h.setAttribute("width", "300"),
                                h.setAttribute("height", s.thumb_height),
                                m.setAttribute("title", s.country_title),
                                1 === s.galleries_in_search.toString() || 0 === s.galleries_in_search.toString() ? u.setAttribute("title", s.galleries_in_search + " gallery") : u.setAttribute("title", s.galleries_in_search + " galleries"),
                                c.innerHTML = s.name,
                                p.innerHTML = s.galleries_in_search,
                                u.appendChild(d),
                                u.appendChild(p),
                                l.appendChild(c),
                                l.appendChild(u),
                                l.appendChild(m),
                                l.appendChild(h),
                                r.appendChild(l),
                                n.appendChild(r)
                            }
                            i.append(n)
                        }(e),
                        "function" == typeof n && n()
                    }
                    ))
                }
                ,
                c.getNextRelPage = function(e, t, a, n) {
                    P(e, "json", t, (function(e) {
                        !function(e, t) {
                            for (var a = 0, n = document.createDocumentFragment(), i = e.length; a < i; a += 1) {
                                if (!(a % 5) && a % 2) {
                                    var s = document.createElement("li")
                                      , r = document.createElement("span");
                                    s.className = "thumbwook r-frame adss-rel",
                                    r.className = "h2 ad-text",
                                    s.appendChild(r),
                                    n.appendChild(s)
                                }
                                var l = e[a]
                                  , c = document.createElement("li")
                                  , u = document.createElement("a")
                                  , d = document.createElement("span")
                                  , p = document.createElement("img");
                                c.className = "thumbwook",
                                d.className = "h2 rel-text",
                                u.className = "rel-link",
                                u.setAttribute("href", l.g_url),
                                u.setAttribute("data-gid", l.gid),
                                p.setAttribute("srcset", l.t_url + " 300w, " + l.t_url_460 + " 460w"),
                                p.setAttribute("sizes", "(max-width: 600px) 100vw, (min-width: 600px) 1vw"),
                                p.setAttribute("src", l.t_url),
                                p.setAttribute("alt", l.desc),
                                p.setAttribute("width", 300),
                                p.setAttribute("height", l.h),
                                u.appendChild(d),
                                u.appendChild(p),
                                c.appendChild(u),
                                n.appendChild(c)
                            }
                            o.append(n)
                        }(e),
                        "function" == typeof n && n()
                    }
                    ))
                }
                ,
                c.getNextRelPageWithoutAd = function(e, t, a) {
                    P(e, "json", t, (function(e) {
                        !function(e) {
                            for (var t = 0, a = document.createDocumentFragment(), n = e.length; t < n; t += 1) {
                                var i = e[t]
                                  , s = document.createElement("li")
                                  , r = document.createElement("a")
                                  , l = document.createElement("span")
                                  , c = document.createElement("img");
                                s.className = "thumbwook",
                                l.className = "h2 rel-text",
                                r.className = "rel-link",
                                r.setAttribute("href", i.g_url),
                                r.setAttribute("data-gid", i.gid),
                                c.setAttribute("srcset", i.t_url + " 300w, " + i.t_url_460 + " 460w"),
                                c.setAttribute("sizes", "(max-width: 600px) 100vw, (min-width: 600px) 1vw"),
                                c.setAttribute("src", i.t_url),
                                c.setAttribute("alt", i.desc),
                                c.setAttribute("width", 300),
                                c.setAttribute("height", i.h),
                                r.appendChild(l),
                                r.appendChild(c),
                                s.appendChild(r),
                                a.appendChild(s)
                            }
                            o.append(a)
                        }(e),
                        "function" == typeof a && a()
                    }
                    ))
                }
                ,
                c.getAllRels = function(e) {}
                ,
                c.getNextFavPage = function(e, t, a) {
                    P(e, "json", t, (function(e) {
                        E(e),
                        "function" == typeof a && a()
                    }
                    ))
                }
                ,
                c.getNextFavLazyLoadPage = function(e, t, a) {
                    P(e + "&t=" + Date.now(), "json", t, (function(e) {
                        E(e, !0),
                        "function" == typeof a && a()
                    }
                    ))
                }
                ,
                c.getNextFavLazyLoadPageWithFlatCover = function(e, t, a, n, i) {
                    P(e + "&t=" + Date.now(), "json", t, (function(e) {
                        var t = function(e, t) {
                            var a = e.data
                              , n = {
                                type: t,
                                cids: []
                            };
                            return 0 === a.length ? null : (a.forEach((function(e) {
                                void 0 !== e.gid && "" !== e.gid && n.cids.push(Number(e.gid))
                            }
                            )),
                            n)
                        }(e, n);
                        !function(e, t, a) {
                            var n = new XMLHttpRequest;
                            "function" != typeof a && (a = function() {}
                            ),
                            n.open("POST", e, !0),
                            n.setRequestHeader("Content-Type", "application/json"),
                            n.onload = function() {
                                200 !== this.status && 304 !== this.status || a(JSON.parse(n.response))
                            }
                            ,
                            n.onerror = function() {}
                            ,
                            n.send(JSON.stringify(t))
                        }(a + "?t=" + Date.now(), t, (function(t) {
                            var a = function(e, t) {
                                var a;
                                if (0 === Object.keys(t).length)
                                    return e;
                                for (var n in t)
                                    -1 !== (a = e.data.findIndex((function(e) {
                                        return e.gid === n.toString()
                                    }
                                    ))) && ("" === t[n].p ? e.data[a].img = g : e.data[a].img = t[n].p,
                                    null === t[n].h ? e.data[a].height = "450" : e.data[a].height = t[n].h.toString());
                                for (var i in e.data)
                                    "" === e.data[i].img && (e.data[i].img = g,
                                    e.data[i].height = "450");
                                return e
                            }(e, t);
                            E(a, !0),
                            "function" == typeof i && i()
                        }
                        ))
                    }
                    ))
                }
                ,
                c.resetHeights = function() {
                    e("." + u.wookmarkThumbClass).not("." + u.adClass).css("height", "auto")
                }
                ,
                c.normalizeMobileGrid = function() {
                    var e, t;
                    e = i.children().first(),
                    t = e.height(),
                    d.width() <= 600 ? (e.hasClass(u.inactiveClass) || e.addClass(u.inactiveClass),
                    i.css("margin-top", t + "px"),
                    e.css({
                        top: "-" + t + "px"
                    })) : (e.hasClass(u.inactiveClass) && e.removeClass(u.inactiveClass),
                    e.css({
                        top: "0px"
                    }),
                    i.css("margin-top", "0px"))
                }
                ,
                c
            }(jQuery, device, ie.utilities, ie.adManager),
            ie.searchHistory = function(e) {
                var t = {}
                  , a = "_user_search_history";
                function n(e) {
                    var t = localStorage.getItem(a);
                    t = t ? function(e, t) {
                        for (var a, n = {}, i = 0; i < e.length; i++)
                            if (e[i].q === t) {
                                a = i;
                                break
                            }
                        return void 0 === a ? (n.t = (new Date).getTime(),
                        n.q = t,
                        n.c = 1,
                        e.push(n),
                        e) : (e[a].c += 1,
                        e[a].t = (new Date).getTime(),
                        e)
                    }(t = JSON.parse(t), e) : function(e) {
                        var t = []
                          , a = {};
                        return a.t = (new Date).getTime(),
                        a.q = e,
                        a.c = 1,
                        t.push(a),
                        t
                    }(e),
                    t = (t = i(t)).splice(0, 60),
                    localStorage.setItem(a, JSON.stringify(t))
                }
                function i(e) {
                    return e.sort((function(e, t) {
                        return e.t > t.t ? -1 : e.t < t.t ? 1 : 0
                    }
                    )),
                    e
                }
                return t.init = function(e) {
                    e = e || {},
                    localStorage.removeItem("_user_search_h")
                }
                ,
                t.saveUserQuery = function(e) {
                    var t = e.replace(/\s+/g, " ").trim().toLowerCase();
                    "" !== t && n(t)
                }
                ,
                t.getHistoryData = function() {
                    var e, t = (e = localStorage.getItem(a)) ? e = JSON.parse(e) : null;
                    return null === t ? null : (t = i(t)).slice(0, 15)
                }
                ,
                t.deleteUserQuery = function(e) {
                    "" !== e && function(e) {
                        var t = localStorage.getItem(a);
                        t && ((t = JSON.parse(t)).forEach((function(a, n) {
                            a.q === e && t.splice(n, 1)
                        }
                        )),
                        t = i(t),
                        localStorage.setItem(a, JSON.stringify(t)))
                    }(e)
                }
                ,
                t.deleteAllUSerQueries = function() {
                    localStorage.removeItem(a)
                }
                ,
                t
            }(jQuery),
            ie.uuid = (re = "_pp-uuid",
            (le = {}).getUUID = function() {
                return function() {
                    var e = localStorage.getItem(re);
                    if (!e)
                        try {
                            crypto.randomUUID || (crypto.randomUUID = function() {
                                var e = new Uint8Array(16);
                                crypto.getRandomValues(e),
                                e[6] = 15 & e[6] | 64,
                                e[8] = 63 & e[8] | 128;
                                var t = Array.prototype.map.call(e, (function(e) {
                                    return ("00" + e.toString(16)).slice(-2)
                                }
                                )).join("");
                                return [t.substr(0, 8), t.substr(8, 4), t.substr(12, 4), t.substr(16, 4), t.substr(20)].join("-")
                            }
                            ),
                            e = crypto.randomUUID()
                        } catch (t) {
                            e = ""
                        }
                    return localStorage.setItem(re, e),
                    e
                }()
            }
            ,
            le),
            ie.search = function(e, t, a, n, i, o) {
                var s, r, l, c, u, d = {}, p = {}, m = {
                    userAgent: navigator.userAgent,
                    referrer: "",
                    lang: "",
                    device: "",
                    domain: location.host.indexOf("www.") && location.host || location.host.replace("www.", ""),
                    type: "stats",
                    input: !0
                }, h = "_bufferStats-search", g = "_stats-search-h", f = "https://live.pornpics.com/asea?rnd=", b = 6e5, v = !1;
                function y(e, t, a) {
                    var n, i, o, s = new XMLHttpRequest, r = f;
                    "function" != typeof t && (t = function() {}
                    ),
                    a && (r = a),
                    s.open("POST", r + (new Date).getTime().toString() + (i = 9999999,
                    o = (n = 1e6) - .5 + Math.random() * (i - n + 1),
                    Math.round(o)), !0),
                    s.setRequestHeader("Content-Type", "application/json"),
                    s.onload = function() {
                        200 === this.status || this.status,
                        t()
                    }
                    ,
                    s.onerror = function() {
                        t()
                    }
                    ,
                    s.send(JSON.stringify(e))
                }
                function w() {
                    var e, t = localStorage.getItem(h);
                    t && ((e = JSON.parse(t)).referrer = document.referrer,
                    e.link = document.location.href,
                    function(e) {
                        var t = localStorage.getItem(g)
                          , a = (new Date).getTime();
                        t = t ? JSON.parse(t) : {
                            t: a,
                            c: {}
                        };
                        t.c[e.cid] = 1,
                        t.t = a,
                        localStorage.setItem(g, JSON.stringify(t))
                    }(t = e),
                    t.subReferrer = document.referrer,
                    null === d.reserveSlugId ? null !== d.slugId && (t.slug = parseInt(d.slugId, 10)) : t.slug = parseInt(d.reserveSlugId, 10),
                    y(t),
                    y(t, (function() {}
                    ), "https://tsd.pornpics.com/?rnd="),
                    y(t, (function() {}
                    ), "https://ulive.pornpics.com/asea?rnd="),
                    localStorage.removeItem(h))
                }
                function C() {
                    var e = localStorage.getItem(g);
                    e && (null !== (e = function(e) {
                        return (new Date).getTime() - e.t > b && (e = null),
                        e
                    }(e = JSON.parse(e))) ? localStorage.setItem(g, JSON.stringify(e)) : localStorage.removeItem(g))
                }
                function k() {
                    m.userAgent,
                    !t.checkUserAgent() && navigator.cookieEnabled && function() {
                        var e = "testLocalStorage";
                        try {
                            return localStorage.setItem(e, e),
                            localStorage.removeItem(e),
                            !0
                        } catch (e) {
                            return !1
                        }
                    }() && (v = !0,
                    C(),
                    w(),
                    m.lang = navigator.language || navigator.userLanguage,
                    a.mobile() ? m.device = "mobile" : m.device = "desktop")
                }
                function _(t) {
                    var a, n, i, o = t.val(), r = document.createElement("div"), l = "" !== d.lang ? "&lang=" + d.lang : "";
                    if (!o)
                        return S(),
                        A(),
                        !1;
                    E(),
                    i = N(o),
                    s = -1,
                    e.get("/autocomplete.php?term=" + i + l, (function(e) {
                        var i;
                        if (A(),
                        void 0 !== m.searchList && (m.searchList = ""),
                        r.id = d.searchMainClass + "-" + d.acMainClass + "__list",
                        r.className = d.acMainClass + "__items",
                        t.after(r),
                        "" === e)
                            return e = [],
                            void A();
                        for (e = JSON.parse(e),
                        n = 0; n < e.length; n += 1) {
                            i = e[n];
                            var s = o.replace(/^\s*/, "").replace(/\s*$/, "").replace(/\s+/g, " ")
                              , l = i.query.toUpperCase().indexOf(s.toUpperCase());
                            a = document.createElement("div"),
                            l >= 0 ? (a.innerHTML = 0 === l ? "" : i.query.substr(0, l),
                            a.innerHTML += "<strong>" + i.query.substr(l, s.length) + "</strong>",
                            a.innerHTML += i.query.substr(l + s.length)) : a.innerHTML = i.query,
                            a.innerHTML += "<input type='hidden' value='" + i.query + "' data-query-link='" + i.link + "'>",
                            a.addEventListener("click", (function() {
                                t.val(this.getElementsByTagName("input")[0].value),
                                t.attr("data-query-link", this.getElementsByTagName("input")[0].getAttribute("data-query-link")),
                                I(),
                                A()
                            }
                            )),
                            r.appendChild(a)
                        }
                    }
                    ))
                }
                function P(e) {
                    if (!e)
                        return !1;
                    !function(e) {
                        for (var t = 0; t < e.length; t++)
                            e[t].classList.remove(d.acMainClass + "__items_active")
                    }(e),
                    s >= e.length && (s = 0),
                    s < 0 && (s = e.length - 1),
                    e[s].classList.add(d.acMainClass + "__items_active")
                }
                function A(e) {
                    for (var t = document.getElementsByClassName(d.acMainClass + "__items"), a = document.getElementById(d.searchMainClass), n = document.querySelector(".nav-button-search"), i = document.querySelector(".icon-search-2"), o = 0; o < t.length; o += 1)
                        e !== t[o] && e !== a && e !== n && e !== i && t[o].parentNode.removeChild(t[o])
                }
                function I() {
                    var t = e("#" + d.searchMainClass)
                      , a = t.val().replace(/\s+/g, " ").trim()
                      , n = function(t) {
                        var a, n = e("#" + d.searchMainClass + "-" + d.acMainClass + "__list");
                        if (t = N(t),
                        a = n.find('[value="' + t + '"]').attr("data-query-link"),
                        void 0 === a || "" === a)
                            return null;
                        return a
                    }(a);
                    if ("" !== a && (void 0 === t.attr("data-query-link") || "" === t.attr("data-query-link")))
                        return T(a),
                        null !== n && (l.attr("action", "https://www.pornpics.com" + n),
                        l.attr("method", "POST")),
                        t.val(a),
                        i.saveUserQuery(t.val()),
                        void l.submit();
                    "" !== a && "" !== t.attr("data-query-link") && (T(a),
                    i.saveUserQuery(t.val()),
                    l.attr("action", "https://www.pornpics.com" + t.attr("data-query-link")),
                    l.attr("method", "POST"),
                    l.submit())
                }
                function T(e) {
                    if (v) {
                        var t = {};
                        t.fp = o.getUUID(),
                        t.cid = function(e) {
                            return e.trim().toLocaleString().replace(new RegExp("[^A-Za-z0-9\\s]","gm"), "").trim().replace(new RegExp("[\\s]+","gm"), " ").replace(new RegExp("[\\s]","gm"), "+")
                        }(e),
                        t.referrer = m.referrer,
                        t.ua = m.userAgent,
                        t.lang = m.lang,
                        t.device = m.device,
                        t.type = "search",
                        t.domain = function(e) {
                            "com" !== (e = e.split("."))[e.length - 1] ? (e[e.length - 1] = "com",
                            e = e.join(".")) : e = e.join(".");
                            return e
                        }(m.domain),
                        t.input = m.input,
                        void 0 !== m.searchList && "" !== m.searchList && (t.searchList = m.searchList),
                        localStorage.setItem(h, JSON.stringify(t))
                    }
                }
                function E() {
                    c.show()
                }
                function S() {
                    c.hide()
                }
                function N(e) {
                    var t = e.replace(/\s+/g, " ").trim()
                      , a = 0
                      , n = [];
                    t = t.split(" ");
                    for (var i = 0; i < t.length; i++) {
                        var o = t[i];
                        if (0 !== o.length) {
                            if (o.length <= 2 && n.push(o),
                            7 === a)
                                break;
                            o.length >= 3 && (a++,
                            n.push(o))
                        }
                    }
                    return n.join(" ")
                }
                function D(e) {
                    var t, a, n, o, r, l, c = e.val(), u = document.createElement("div"), p = i.getHistoryData();
                    if (null !== p)
                        for (o = document.createElement("span"),
                        r = document.createElement("span"),
                        l = document.createElement("span"),
                        r.className = "title",
                        l.className = "clear-all",
                        r.innerHTML = "Recent Searches",
                        l.innerHTML = "Clear All",
                        l.addEventListener("click", (function(t) {
                            i.deleteAllUSerQueries(),
                            D(e)
                        }
                        )),
                        o.appendChild(r),
                        o.appendChild(l),
                        s = -1,
                        A(),
                        u.id = d.searchMainClass + "-" + d.acMainClass + "__list",
                        u.className = d.acMainClass + "__items",
                        e.after(u),
                        u.appendChild(o),
                        d.lang && "en" !== d.lang.toLowerCase() && "/" + d.lang.toLowerCase(),
                        a = 0; a < p.length; a += 1)
                            n = p[a],
                            (t = document.createElement("div")).className = "uh-item",
                            t.innerHTML = n.q.substr(c.length),
                            t.innerHTML += "<input type='hidden' value='" + n.q + "' data-query-link=''>",
                            t.innerHTML += "<span class='cross'><i class='icon icon-cross'></i></span>",
                            t.addEventListener("click", (function() {
                                e.val(this.getElementsByTagName("input")[0].value),
                                I(),
                                A()
                            }
                            )),
                            t.querySelector(".cross").addEventListener("click", (function(t) {
                                t.stopPropagation();
                                var a, n = this.parentNode.getElementsByTagName("input")[0].value;
                                a = n,
                                i.deleteUserQuery(a),
                                D(e)
                            }
                            )),
                            u.appendChild(t)
                }
                function x(t) {
                    var a;
                    a = function(e) {
                        null !== e ? n.getNextJsonLazyLoadPage(d.searchPath + e + "&limit=80&offset=0&lang=" + t.lang, null, 1, (function() {
                            d.adModuleInclude(),
                            d.updateMainGrid(),
                            d.updateLazyLoad(),
                            d.addFavIcons(),
                            d.hideLoader()
                        }
                        )) : d.hideLoader()
                    }
                    ,
                    e.get(d.acPath + "?popular=true&new=true", (function(e) {
                        var t;
                        "" !== e && void 0 !== e ? (t = (e = JSON.parse(e))[Math.floor(Math.random() * e.length)],
                        a(t.query.replace(" ", "+"))) : a("teen")
                    }
                    ))
                }
                return p.init = function(t) {
                    (function(t) {
                        d.searchMainClass = d.searchMainClass || t.searchMainClass,
                        d.acMainClass = d.acMainClass || t.acMainClass,
                        d.acPath = d.acPath || t.acPath,
                        d.adClass = d.adClass || t.adClass,
                        d.thumbContainerID = d.thumbContainerID || t.thumbContainerID,
                        d.searchPath = d.searchPath || t.searchPath,
                        d.updateLazyLoad = d.updateLazyLoad || t.updateLazyLoad,
                        d.updateMainGrid = d.updateMainGrid || t.updateMainGrid,
                        d.hideLoader = d.hideLoader || t.hideLoader,
                        d.addFavIcons = d.addFavIcons || t.addFavIcons,
                        d.adModuleInclude = d.adModuleInclude || t.adModuleInclude,
                        d.slugId = d.slugId || t.slugId,
                        d.reserveSlugId = d.reserveSlugId || t.reserveSlugId,
                        d.lang = d.lang || t.lang,
                        l = e("." + d.searchMainClass)
                    }
                    )(t = t || {}),
                    r = e("#" + d.searchMainClass),
                    k(),
                    r.on("input", (function() {
                        var t = e(this);
                        "" === e(this).val() ? D(e(this)) : (clearTimeout(u),
                        u = setTimeout((function() {
                            _(t)
                        }
                        ), 400))
                    }
                    )),
                    r.on("keydown", (function(e) {
                        !function(e) {
                            var t = document.getElementById(d.searchMainClass + "-" + d.acMainClass + "__list");
                            t && (t = t.getElementsByTagName("div")),
                            40 === e.keyCode ? (s++,
                            P(t)) : 38 === e.keyCode ? (s--,
                            P(t)) : 13 === e.keyCode ? (e.preventDefault(),
                            s > -1 ? t && (t[s].click(),
                            s = -1) : I()) : 27 === e.keyCode && c.trigger("click")
                        }(e)
                    }
                    )),
                    r.on("focus", (function() {
                        "" !== e(this).val() ? _(e(this)) : D(e(this))
                    }
                    )),
                    e(document).on("click", (function(e) {
                        A(e.target)
                    }
                    )),
                    e("." + d.searchMainClass + "__submit").on("click", (function(e) {
                        e.preventDefault(),
                        I()
                    }
                    )),
                    (c = e("<span></span>")).addClass(d.searchMainClass + "__cross icon icon-cross"),
                    c.on("click", (function() {
                        r.val(""),
                        S()
                    }
                    )),
                    e("." + d.searchMainClass).append(c),
                    "" !== r.val() && E()
                }
                ,
                p.searchNoResults = function(t) {
                    e(".r-frame").remove(),
                    function(e, t) {
                        var a = document.createElement("div")
                          , n = document.createElement("div")
                          , i = document.createElement("h2")
                          , o = document.createDocumentFragment()
                          , s = document.getElementById(d.thumbContainerID)
                          , r = s.parentNode;
                        a.className = "no-thumbs-massage",
                        a.innerHTML = t.mainText + " " + e,
                        n.className = "title-section clearfix",
                        i.innerHTML = t.titleText,
                        n.append(i),
                        o.append(a),
                        o.append(n),
                        r.insertBefore(o, s)
                    }(e("h1").text(), t),
                    x(t)
                }
                ,
                p
            }(jQuery, ie.utilities, device, ie.mainGrid, ie.searchHistory, ie.uuid),
            ie.categorySlugHistory = function(e, t, a, n) {
                var i, o, s = {}, r = {}, l = "_stats_category", c = 18e5, u = "mid";
                function d() {
                    var e = "testLocalStorage";
                    try {
                        return localStorage.setItem(e, e),
                        localStorage.removeItem(e),
                        !0
                    } catch (e) {
                        return !1
                    }
                }
                function p(e) {
                    return e.split("_")[0]
                }
                function m(e, t, a) {
                    var n, i, o, r = (new Date).getTime();
                    return void 0 === e && (e = ""),
                    n = p(e),
                    t ? t = JSON.parse(t) : ((t = {}).categories = {},
                    t.galleries = {}),
                    void 0 === t.galleries && (t.galleries = {}),
                    t.categories[n] = a,
                    t.galleries[n] = (i = document.querySelectorAll(".thumbwook.in"),
                    o = i.length - 1,
                    p(i[o].children[0].getAttribute(s.IDAttributeName))),
                    t.categories.t = r,
                    t
                }
                function h() {
                    var e = localStorage.getItem(l);
                    e && (e = JSON.parse(e)).categories && (e = function(e) {
                        return (new Date).getTime() - e.categories.t > c && (e.categories = {},
                        e.galleries = {}),
                        e
                    }(e),
                    localStorage.setItem(l, JSON.stringify(e)))
                }
                function g(e) {
                    !function(e) {
                        document.getElementById(s.wookmarkContainerID).addEventListener("click", (function(t) {
                            for (var a = t.target; a.getAttribute("id") !== s.wookmarkContainerID; ) {
                                if (a.classList.contains(s.wookmarkThumbClass))
                                    return v(),
                                    void f(a, e);
                                a = a.parentNode
                            }
                        }
                        ))
                    }(e)
                }
                function f(e, t) {
                    var a, n;
                    e.classList.contains(s.wookmarkAdClass) || e.classList.contains(s.logoClass) || e.classList.contains(s.wookmarkAdNativeClass) || null !== e.children[0].getAttribute(s.IDAttributeName) && (a = m(e.children[0].getAttribute(s.IDAttributeName), localStorage.getItem(l), t),
                    n = a,
                    localStorage.setItem(l, JSON.stringify(n)))
                }
                function b() {
                    e(window).on("scroll", (function() {
                        v()
                    }
                    ))
                }
                function v() {
                    e("[data-" + u + "]").parent().each((function() {
                        var t = e(this)
                          , a = t.css("height").replace("px", "");
                        a = parseInt(a),
                        n.belowTheFold(t, .6 * a * -1) || n.aboveTheTop(t, 0) || t.hasClass("in") || t.addClass("in")
                    }
                    ))
                }
                function y() {
                    d() && (h(),
                    b(),
                    i = function(e) {
                        var t = localStorage.getItem(l);
                        if (t && (t = JSON.parse(t)).categories)
                            return t.categories[e]
                    }(s.cid),
                    o = function(e) {
                        var t = localStorage.getItem(l);
                        if (t && (t = JSON.parse(t)).galleries)
                            return t.galleries[e]
                    }(s.cid),
                    g(i))
                }
                return r.init = function(e) {
                    switch (function(e) {
                        s.cid = e.id || "",
                        s.wookmarkContainerID = e.wookmarkContainerID,
                        s.wookmarkThumbClass = e.wookmarkThumbClass,
                        s.wookmarkAdClass = e.wookmarkAdClass,
                        s.wookmarkAdNativeClass = e.wookmarkAdNativeClass,
                        s.logoClass = e.logoClass,
                        s.IDAttributeName = e.IDAttributeName
                    }(e = e || {}),
                    t.getPageType()) {
                    case "category_rotator_maps":
                    case "tag_rotator_maps":
                        d() && (h(),
                        v(),
                        b(),
                        g(s.cid));
                        break;
                    case "gallery":
                    case "gallery_frame":
                    case "gallery_shemale":
                    case "gallery_thumbspw":
                    case "gallery_gc":
                        y()
                    }
                }
                ,
                r.getSlugID = function() {
                    return i
                }
                ,
                r.getGalleryId = function() {
                    return o
                }
                ,
                r
            }(jQuery, ie.utilities, device, ie.inViewPort),
            ie.related = function(e, t, a, n, i, o) {
                var s, r, l, c, u, d, p = {}, m = {}, h = !1, g = t.desktop(), f = "_rel_uid", b = 3, v = 1, y = null;
                function w() {
                    return (new Date).getTime().toString() + (t = 9999999,
                    a = (e = 1e6) - .5 + Math.random() * (t - e + 1),
                    Math.round(a));
                    var e, t, a
                }
                function C(e, t, n, i, o, s) {
                    var r, l, c;
                    void 0 === t && (t = {}),
                    void 0 === o && (o = 2e4),
                    void 0 === s && (s = "GET"),
                    e === m.defaultRelPath && (t.uid = (l = new Date,
                    c = a.getCookie(f),
                    l.setHours(l.getHours() + b),
                    void 0 === c && (c = w(),
                    a.setCookie(f, c, {
                        path: "/",
                        domain: "",
                        expires: l
                    })),
                    c)),
                    (r = new XMLHttpRequest).open(s, e, !0),
                    r.setRequestHeader("Content-Type", "application/json"),
                    r.responseType = "json",
                    r.timeout = o,
                    r.onload = function() {
                        200 === this.status || 304 === this.status ? n(r.response, r) : i(r)
                    }
                    ,
                    r.onerror = function() {
                        i(r)
                    }
                    ,
                    r.ontimeout = function() {
                        i(r)
                    }
                    ,
                    r.send(JSON.stringify(t))
                }
                function k(e, t, a, n) {
                    t = void 0 !== t ? t : {};
                    var i = new XMLHttpRequest;
                    i.onload = function() {
                        i.status >= 200 && i.status < 300 ? "function" == typeof a && a(i.response, i) : "function" == typeof n && n(i)
                    }
                    ,
                    i.onerror = function() {
                        "function" == typeof n && n(i)
                    }
                    ,
                    i.ontimeout = function() {
                        "function" == typeof n && n(i)
                    }
                    ,
                    i.open("GET", e + "?" + function(e) {
                        var t = [];
                        for (var a in e)
                            if (e.hasOwnProperty(a)) {
                                var n = e[a];
                                Array.isArray(n) && (n = n.join(","));
                                var i = encodeURIComponent(a)
                                  , o = encodeURIComponent(n);
                                t.push(i + "=" + o)
                            }
                        return t.join("&")
                    }(t), !0),
                    i.responseType = "json",
                    i.timeout = 2e4,
                    i.send(t)
                }
                function _(t) {
                    var a, n, i;
                    m.statsData.page = t,
                    a = m.statsPath,
                    void 0 === (n = m.statsData) && (n = {}),
                    void 0 === (i = "GET") && (i = "GET"),
                    e.ajax({
                        url: a,
                        dataType: "JSON",
                        type: i,
                        data: n
                    })
                }
                function P(e, t, a) {
                    var n, i = document.createElement(e);
                    for (n in t)
                        t.hasOwnProperty(n) && void 0 !== t[n] && i.setAttribute(n, t[n]);
                    return void 0 !== a && (Array.isArray(a) || (a = [a]),
                    a.forEach((function(e) {
                        "string" == typeof e ? i.appendChild(document.createTextNode(e)) : i.appendChild(e)
                    }
                    ))),
                    i
                }
                function A(t) {
                    return g && e(window).width() > 1557 ? 1 === v || 2 === v || 3 === v || 4 === v ? t % 10 == 5 : (t - 5) % 20 == 0 : 1 !== v && 2 !== v && 3 !== v && 4 !== v || !o.adBannerManager.isAdCapReached() ? t % 10 == 5 : function(e) {
                        return [5, 11, 16, 25, 31, 36, 45, 51, 56, 65, 71, 76].includes(e)
                    }(t)
                }
                function I(e) {
                    var t, a = i.getModeRel();
                    switch (e || a) {
                    case "banner":
                        return t = P("span", {
                            class: "h2 ad-text"
                        }),
                        P("li", {
                            class: "thumbwook r-frame adss-rel"
                        }, t);
                    case "native":
                        return i.getNativeBlock()
                    }
                }
                function T(e, t, a, n) {
                    var i, o = (e - 1) * t, l = e * t, c = document.createDocumentFragment();
                    if (void 0 !== s && !(e > a)) {
                        for (; o < l; o += 1) {
                            n || A(o) && null != (i = I()) && c.appendChild(i),
                            2 === n && A(o) && null != (i = I("banner")) && c.appendChild(i);
                            var u, d, p, m, h = s[o];
                            p = P("span", {
                                class: "h2 rel-text"
                            }),
                            m = P("img", {
                                "data-src": h.t_url_460,
                                src: "https://static.pornpics.com/style/img/1px.png",
                                alt: h.desc,
                                width: "300",
                                height: h.h
                            }),
                            d = P("a", {
                                class: "rel-link",
                                href: h.g_url,
                                "data-gid": h.gid,
                                "data-tuuid": h.tuuid
                            }, [p, m]),
                            u = P("li", {
                                class: "thumbwook"
                            }, d),
                            c.appendChild(u)
                        }
                        r.appendChild(c),
                        v++
                    }
                }
                function E(e, t, a, n) {
                    var i, o = (e - 1) * t, l = e * t, c = document.createDocumentFragment();
                    if (void 0 !== s && !(e > a)) {
                        for (; o < l; o += 1) {
                            n || A(o) && null != (i = I()) && c.appendChild(i),
                            2 === n && A(o) && null != (i = I("banner")) && c.appendChild(i);
                            var u, d, p, m, h = s[o];
                            p = P("span", {
                                class: "h2 rel-text"
                            }),
                            m = P("img", {
                                "data-src": h.t_url_460,
                                src: "https://static.pornpics.com/style/img/1px.png",
                                alt: h.desc,
                                width: "300",
                                height: h.h
                            }),
                            d = P("a", {
                                class: "rel-link",
                                href: h.g_url,
                                "data-mid": h.mid,
                                "data-gid": h.gid
                            }, [p, m]),
                            u = P("li", {
                                class: "thumbwook"
                            }, d),
                            c.appendChild(u)
                        }
                        r.appendChild(c),
                        v++
                    }
                }
                function S() {
                    var e;
                    return e = m.defaultRelData.gid.split(""),
                    (e = parseInt(e[e.length - 1])) >= 5 && (e -= 5),
                    e.toString()
                }
                function N(e, t) {
                    C(m.reserveRelPath + "rel" + S() + ".json", {}, (function(a) {
                        c = setTimeout((function() {
                            clearTimeout(c),
                            h = !0,
                            l = (s = a).length / e,
                            m.setMaxPage(l),
                            T(t, e, l),
                            _(t),
                            m.pageAddedCallBack()
                        }
                        ), 100)
                    }
                    ), (function() {}
                    ))
                }
                function D(e, t, a, n) {
                    C(m.reserveRelPath + "rel" + S() + ".json", {}, (function(i) {
                        u = setTimeout((function() {
                            clearTimeout(u),
                            h = !0,
                            l = (s = i).length / e,
                            m.setMaxPage(l),
                            T(1, e * t, l),
                            _(t),
                            m.pageAddedCallBack(),
                            "function" == typeof a && a(),
                            "function" == typeof n && n()
                        }
                        ), 100)
                    }
                    ))
                }
                function x(e, t, a) {
                    C(m.defaultRelPath, m.defaultRelData, (function(n) {
                        d = setTimeout((function() {
                            0 !== n.length ? (clearTimeout(d),
                            h = !0,
                            l = (s = n).length / e,
                            m.setMaxPage(l),
                            T(t, e, l, a),
                            _(t),
                            m.pageAddedCallBack()) : N(e, t)
                        }
                        ), 100)
                    }
                    ), (function() {
                        N(e, t)
                    }
                    ), 3e3, "POST")
                }
                return p.init = function(e) {
                    !function(e) {
                        m.defaultRelPath = m.defaultRelPath || e.defaultRelPath,
                        m.defaultRelData = m.defaultRelData || e.defaultRelData,
                        m.rotatorMapsRelPath = m.rotatorMapsRelPath || e.rotatorMapsRelPath,
                        m.rotatorMapsRelData = m.rotatorMapsRelData || e.rotatorMapsRelData,
                        m.reserveRelPath = m.reserveRelPath || e.reserveRelPath,
                        m.statsPath = m.statsPath || e.statsPath,
                        m.statsData = m.statsData || e.statsData,
                        m.thumbsContainerId = m.thumbsContainerId || e.thumbsContainerId,
                        r = document.getElementById(m.thumbsContainerId),
                        m.pageAddedCallBack = m.pageAddedCallBack || e.pageAddedCallBack,
                        m.setMaxPage = m.setMaxPage || e.setMaxPage,
                        m.lazyloadCallback = m.lazyloadCallback || e.lazyloadCallback,
                        "function" != typeof m.pageAddedCallBack && (m.pageAddedCallBack = function() {}
                        ),
                        "function" != typeof m.setMaxPage && (m.setMaxPage = function() {}
                        )
                    }(e = e || {})
                }
                ,
                p.getNextPage = function(e, t) {
                    var a = n.getSlugID()
                      , i = n.getGalleryId();
                    h ? void 0 !== a ? (m.rotatorMapsRelData.slug = a,
                    m.rotatorMapsRelData.related = i,
                    E(t, e, l),
                    _(t),
                    m.pageAddedCallBack()) : (T(t, e, l),
                    _(t),
                    m.pageAddedCallBack()) : void 0 !== a ? (m.rotatorMapsRelData.slug = a,
                    m.rotatorMapsRelData.related = i,
                    function(e, t) {
                        k(m.rotatorMapsRelPath, m.rotatorMapsRelData, (function(a, n) {
                            null === n.getResponseHeader("X-Additional-Content") ? (h = !0,
                            void 0 !== a.type ? (s = a.results,
                            y = a.type + "_rotator_maps") : s = a,
                            l = s.length / e,
                            m.setMaxPage(l),
                            E(t, e, l),
                            _(t),
                            m.pageAddedCallBack()) : x(e, t)
                        }
                        ), (function(a) {
                            N(e, t)
                        }
                        ))
                    }(e, t)) : x(e, t)
                }
                ,
                p.getPrevPage = function(e, t, a, i, o) {
                    var r = n.getSlugID()
                      , c = n.getGalleryId();
                    void 0 !== r ? (m.rotatorMapsRelData.slug = r,
                    m.rotatorMapsRelData.related = c,
                    function(e, t, a, n, i) {
                        k(m.rotatorMapsRelPath, m.rotatorMapsRelData, (function(o, r) {
                            null === r.getResponseHeader("X-Additional-Content") ? (h = !0,
                            void 0 !== o.type ? (s = o.results,
                            y = o.type + "_rotator_maps") : s = o,
                            l = s.length / e,
                            m.setMaxPage(l),
                            E(1, e * t, l, i),
                            _(t),
                            m.pageAddedCallBack(),
                            "function" == typeof a && a(),
                            "function" == typeof n && n()) : x(e, t, a)
                        }
                        ), (function() {
                            x(e, t, a)
                        }
                        ))
                    }(e, t, a, i, o)) : function(e, t, a, n, i) {
                        C(m.defaultRelPath, m.defaultRelData, (function(o) {
                            0 !== o.length ? (h = !0,
                            l = (s = o).length / e,
                            m.setMaxPage(l),
                            T(1, e * t, l, i),
                            _(t),
                            m.pageAddedCallBack(),
                            "function" == typeof a && a(),
                            "function" == typeof n && n()) : D(e, t, a, n)
                        }
                        ), (function() {
                            D(e, t, a, n)
                        }
                        ), 3e3, "POST")
                    }(e, t, a, i, o)
                }
                ,
                p.getRelatedPageType = function() {
                    return y
                }
                ,
                p
            }(jQuery, device, ie.utilities, ie.categorySlugHistory, ie.adManager, Z),
            ie.captchaV3ForTest = function(e, t) {
                var a = {}
                  , n = {}
                  , i = "_test_uab_1";
                function o(e) {
                    grecaptcha.ready((function() {
                        grecaptcha.execute(a.gKey, {
                            action: "homepage"
                        }).then((function(a) {
                            var n;
                            e(a),
                            (n = new Date).setHours(n.getHours() + 2),
                            t.setCookie(i, "1", {
                                path: "/",
                                domain: "",
                                expires: n
                            })
                        }
                        ))
                    }
                    ))
                }
                return n.init = function(e) {
                    !function(e) {
                        a.gKey = a.gKey || e.gKey
                    }(e = e || {})
                }
                ,
                n.setCaptcha = function(a) {
                    var n;
                    t.getCookie(i) ? a(null) : 0 !== e(".grecaptcha-badge").length ? o(a) : (n = ".grecaptcha-badge",
                    new Promise(((e,t)=>{
                        var a = setInterval((()=>{
                            null !== document.querySelector(n) && (window.clearInterval(a),
                            e())
                        }
                        ), 30)
                    }
                    ))).then((()=>{
                        o(a)
                    }
                    ))
                }
                ,
                n.reset = function(e) {
                    return grecaptcha.reset(e)
                }
                ,
                n.getResponse = function(e) {
                    return grecaptcha.getResponse(e)
                }
                ,
                n
            }(jQuery, ie.utilities),
            ie.gallery = function(e, t) {
                var a = {}
                  , n = {}
                  , i = {};
                function o(t, a, n, i) {
                    n || (n = ""),
                    e.ajax({
                        url: t,
                        type: a,
                        dataType: "json",
                        data: n,
                        success: function(e) {
                            i(e)
                        }
                    })
                }
                function s() {
                    e("." + a.voteClassName).on("click", (function() {
                        !function(e) {
                            var n = "gid=" + a.galleryId
                              , s = new Date;
                            if (e.hasClass("active"))
                                return !1;
                            e.siblings("." + a.voteClassName).hasClass("active") && (n += "&change=true"),
                            s.setDate(s.getDate() + 365),
                            e.hasClass("like") ? o(a.api_like, "GET", n, (function() {
                                e.addClass("active"),
                                e.siblings("." + a.voteClassName).removeClass("active"),
                                i[a.galleryId] = 1,
                                t.setCookie(a.votesCookieName, JSON.stringify(i), {
                                    path: "/",
                                    domain: "",
                                    expires: s
                                })
                            }
                            )) : o(a.api_dislike, "GET", n, (function() {
                                e.addClass("active"),
                                e.siblings("." + a.voteClassName).removeClass("active"),
                                i[a.galleryId] = 0,
                                t.setCookie(a.votesCookieName, JSON.stringify(i), {
                                    path: "/",
                                    domain: "",
                                    expires: s
                                })
                            }
                            ))
                        }(e(this))
                    }
                    ))
                }
                return n.init = function(n) {
                    var r;
                    (function(e) {
                        a.galleryId = a.galleryId || e.galleryId,
                        a.votesCookieName = a.votesCookieName || e.votesCookieName,
                        a.api_get_rate = a.api_get_rate || e.api_get_rate,
                        a.api_like = a.api_like || e.api_like,
                        a.api_dislike = a.api_dislike || e.api_dislike,
                        a.api_allStats = a.api_allStats || e.api_allStats,
                        a.voteClassName = a.voteClassName || e.voteClassName,
                        a.rateClassName = a.rateClassName || e.rateClassName,
                        a.sponsorPath = a.sponsorPath || e.sponsorPath,
                        a.sponsorDescId = a.sponsorDescId || e.sponsorDescId,
                        a.gallInfoButton = a.gallInfoButton || e.gallInfoButton
                    }
                    )(n = n || {}),
                    o(a.api_allStats, "GET", null, (function(t) {
                        "ok" === t.status && (e("." + a.rateClassName).text(Math.round(parseInt(t.data.rate)) + "%"),
                        e(".gall-info-comments .counter").text(t.data.comments_count))
                    }
                    )),
                    void 0 !== (r = t.getCookie(a.votesCookieName)) && (i = JSON.parse(r)),
                    void 0 !== i[a.galleryId] && (1 === i[a.galleryId] ? e("." + a.voteClassName + ".like").addClass("active") : e("." + a.voteClassName + ".dislike").addClass("active")),
                    s(),
                    e("." + a.gallInfoButton).on("click", (function() {
                        e("html, body").animate({
                            scrollTop: e(".to-" + a.gallInfoButton).offset().top - 320 + "px"
                        }, "fast")
                    }
                    ))
                }
                ,
                n.oldBannerInit = function() {
                    e.get(a.sponsorPath, (function(t) {
                        var n = e("#" + a.sponsorDescId)
                          , i = document.createElement("div");
                        n.text(t),
                        i.className = "sponsor-bottom",
                        i.innerText = "Read More",
                        i.addEventListener("click", (function() {
                            n.parent().slideToggle()
                        }
                        )),
                        n.parent().before(i)
                    }
                    ))
                }
                ,
                n
            }(jQuery, ie.utilities),
            ie.galleryPlayer = function(e) {
                var t = {}
                  , a = {}
                  , n = !1
                  , i = !1;
                function o(e, a, o) {
                    if ("" !== t.videoPath && "" !== t.playerID && !0 !== n)
                        if (!0 !== i) {
                            n = !0;
                            var r = document.createElement("script");
                            r.src = t.scriptPath,
                            document.body.append(r),
                            r.onload = function() {
                                n = !1,
                                i = !0,
                                s(e || t.playerID, a || atob(t.videoPath, o))
                            }
                        } else
                            e && a && s(e, a, o)
                }
                function s(e, t, a) {
                    var n, i, o = new Playerjs({
                        id: e,
                        file: t,
                        loop: 1
                    });
                    (o.api("preload"),
                    a) ? o.api("play") : (n = navigator.userAgent.indexOf("Chrome") > -1,
                    i = navigator.userAgent.indexOf("Safari") > -1,
                    n && i || !i || (o.api("play"),
                    a || (setTimeout((function() {
                        o.api("pause")
                    }
                    ), 300),
                    o.api("pause"))))
                }
                return a.init = function(e) {
                    (function(e) {
                        t.videoPath = t.videoPath || e.videoPath,
                        t.playerID = t.playerID || e.playerID || "",
                        t.scriptPath = t.scriptPath || e.scriptPath || ""
                    }
                    )(e = e || {}),
                    o()
                }
                ,
                a.initPlayer = function(e, t, a) {
                    o(e, t, a)
                }
                ,
                a
            }(jQuery),
            ie.ps = function(e, t, a) {
                var n, i, o, s, r, l, c = {}, u = {}, d = !0, p = !1, m = !1;
                function h(t) {
                    !function(t, a, n, i) {
                        n || (n = ""),
                        e.ajax({
                            url: t,
                            type: a,
                            dataType: "json",
                            data: n,
                            success: function(e) {
                                i(e)
                            }
                        })
                    }(c.api_slide_show_mode, "POST", null, (function(e) {
                        t(e)
                    }
                    ))
                }
                function g(t) {
                    for (var a, n, i, o, s = e(t).children().not(".r-frame"), r = s.length, l = [], u = "Brought by <a rel='nofollow' href='/go/" + c.paySite + "'>" + e("#paySiteNormal").text() + "<i class='icon icon-external-link'></i></a>", d = 0; d < r; d++)
                        1 === (a = s[d]).nodeType && "DIV" !== a.children[0].tagName && (i = (n = a.children[0]).getAttribute("data-size").split("x"),
                        o = {
                            src: n.getAttribute("href"),
                            w: parseInt(i[0], 10),
                            h: parseInt(i[1], 10),
                            title: u
                        },
                        a.children.length > 1 && (o.title = a.children[1].innerHTML),
                        n.children.length > 0 && (o.msrc = n.children[0].getAttribute("src")),
                        o.el = a,
                        l.push(o));
                    return l
                }
                function f() {
                    n.hasClass("play") ? l = setInterval((function() {
                        s.next()
                    }
                    ), 5e3) : clearInterval(l),
                    n.toggleClass("play pause")
                }
                function b() {
                    var t;
                    "ok" === c.isLoggedData.status ? h((function(a) {
                        "ok" === a.status && 1 === a.data.asSlideShow ? (t = e(o),
                        e("." + c.galleryButtonId).hide(),
                        t.on("click", "a[data-size]", (function(a) {
                            return a.preventDefault(),
                            y(t.children(".thumbwook:not(.r-frame):not(.gp-thumb)").index(e(this).parent()), o, !0),
                            !1
                        }
                        )),
                        c.callback()) : (v(),
                        e("." + c.galleryButtonId).on("click", (function() {
                            y(0, o, !0)
                        }
                        )))
                    }
                    )) : (v(),
                    e("." + c.galleryButtonId).on("click", (function() {
                        y(0, o, !0)
                    }
                    )))
                }
                function v() {
                    "desktop" != (a.mobile() ? "mobile" : "desktop") && e(o).children(".thumbwook:not(.r-frame)").children("a").attr("target", "_blank")
                }
                function y(t, a, o) {
                    !function(t) {
                        if (m)
                            return void t();
                        if (!d || p)
                            return;
                        e("#ps-loader-layer").show(0),
                        p = !0;
                        var a = document.createElement("script")
                          , n = document.createElement("script")
                          , i = document.createElement("link")
                          , o = document.createElement("link")
                          , s = e.Deferred()
                          , r = e.Deferred()
                          , l = e.Deferred()
                          , u = e.Deferred();
                        a.src = c.js1Path,
                        n.src = c.js2Path,
                        a.setAttribute("defer", ""),
                        n.setAttribute("defer", ""),
                        o.type = "text/css",
                        o.rel = "stylesheet",
                        o.href = c.css1Path,
                        i.type = "text/css",
                        i.rel = "stylesheet",
                        i.href = c.css2Path,
                        e.when(s, r, l, u).done((function() {
                            e("#ps-loader-layer").hide(0),
                            t(),
                            d = !1,
                            p = !1,
                            m = !0
                        }
                        )),
                        a.onload = function() {
                            s.resolve()
                        }
                        ,
                        n.onload = function() {
                            r.resolve()
                        }
                        ,
                        i.onload = function() {
                            l.resolve()
                        }
                        ,
                        o.onload = function() {
                            u.resolve()
                        }
                        ,
                        document.body.appendChild(o),
                        document.body.appendChild(i),
                        document.body.appendChild(a),
                        document.body.appendChild(n)
                    }((function() {
                        !function(e, t, a) {
                            var o, l, c = document.querySelectorAll(".pswp")[0];
                            l = g(t),
                            o = {
                                index: e,
                                maxSpreadZoom: 3,
                                history: !1,
                                closeOnScroll: !1,
                                showHideOpacity: !0,
                                timeToIdle: 0,
                                timeToIdleOutside: 0,
                                clickToCloseNonZoomable: !1,
                                getThumbBoundsFn: function(e) {
                                    var t = l[e].el.getElementsByTagName("img")[0]
                                      , a = window.pageYOffset || document.documentElement.scrollTop
                                      , n = t.getBoundingClientRect();
                                    return {
                                        x: n.left,
                                        y: n.top + a,
                                        w: n.width
                                    }
                                },
                                getDoubleTapZoom: function(e, t) {
                                    return e ? (t.zoomLevel = 2,
                                    2) : t.initialZoomLevel < .6 ? 1 : 1.8
                                }
                            },
                            isNaN(o.index) || (a && (o.showAnimationDuration = 0),
                            (s = new PhotoSwipe(c,PhotoSwipeUI_Default,l,o)).listen("afterChange", (function() {
                                r = s.currItem
                            }
                            )),
                            s.listen("close", (function() {
                                n.hasClass("pause") && f()
                            }
                            )),
                            s.listen("callFavorite", (function() {
                                i.trigger("click.favorite")
                            }
                            )),
                            s.listen("callSlideshow", (function() {
                                f()
                            }
                            )),
                            s.init())
                        }(t, a, o),
                        function() {
                            var e = document.querySelectorAll(".pswp")[0];
                            if (!d)
                                return;
                            t = e,
                            a = function(e) {
                                (e.deltaY || e.detail || e.wheelDelta) > 0 ? s.next() : s.prev()
                            }
                            ,
                            t.addEventListener ? "onwheel"in document ? t.addEventListener("wheel", a) : "onmousewheel"in document ? t.addEventListener("mousewheel", a) : t.addEventListener("MozMousePixelScroll", a) : text.attachEvent("onmousewheel", a);
                            var t, a
                        }()
                    }
                    ))
                }
                return u.init = function(t) {
                    (function(e) {
                        c.isLoggedData = c.isLoggedData || e.isLoggedData,
                        c.paySite = c.paySite || e.paySite,
                        c.gallerySelector = c.gallerySelector || e.gallerySelector,
                        c.galleryButtonId = c.galleryButtonId || e.galleryButtonId,
                        c.api_slide_show_mode = c.api_slide_show_mode || e.api_slide_show_mode,
                        c.psModeCookieName = c.psModeCookieName || e.psModeCookieName,
                        c.callback = e.callback,
                        c.css1Path = c.css1Path || e.css1Path,
                        c.css2Path = c.css2Path || e.css2Path,
                        c.js1Path = c.js1Path || e.js1Path,
                        c.js2Path = c.js2Path || e.js2Path
                    }
                    )(t = t || {}),
                    function() {
                        var e = document.createElement("div");
                        e.className = "pswp pswp-old",
                        e.setAttribute("tabindex", "-1"),
                        e.setAttribute("role", "dialog"),
                        e.setAttribute("aria-hidden", "true");
                        var t = document.createElement("div");
                        t.className = "pswp__bg",
                        e.appendChild(t);
                        var a = document.createElement("div");
                        a.className = "pswp__scroll-wrap",
                        e.appendChild(a);
                        var n = document.createElement("div");
                        n.className = "pswp__container",
                        a.appendChild(n);
                        for (var i = 0; i < 3; i++) {
                            var o = document.createElement("div");
                            o.className = "pswp__item",
                            n.appendChild(o)
                        }
                        var s = document.createElement("div");
                        s.className = "pswp__ui pswp__ui--hidden",
                        a.appendChild(s);
                        var r = document.createElement("div");
                        r.className = "pswp__top-bar",
                        s.appendChild(r);
                        var l = document.createElement("div");
                        l.className = "pswp__counter",
                        r.appendChild(l);
                        for (var c = ["close", "share", "fs", "zoom", "slideshow play icon"], u = ["Close", "Share", "Toggle Fullscreen", "Zoom in/out", "Play/Stop Slideshow"], d = 0; d < c.length; d++) {
                            var p = document.createElement("button");
                            p.className = "pswp__button pswp__button--" + c[d],
                            p.title = u[d],
                            r.appendChild(p)
                        }
                        var m = document.createElement("div");
                        m.className = "pswp__preloader",
                        r.appendChild(m);
                        var h = document.createElement("div");
                        h.className = "pswp__preloader__icn",
                        m.appendChild(h);
                        var g = document.createElement("div");
                        g.className = "pswp__preloader__cut",
                        h.appendChild(g);
                        var f = document.createElement("div");
                        f.className = "pswp__preloader__donut",
                        g.appendChild(f);
                        var b = document.createElement("div");
                        b.className = "pswp__share-modal pswp__share-modal--hidden pswp__single-tap",
                        s.appendChild(b);
                        var v = document.createElement("div");
                        v.className = "pswp__share-tooltip",
                        b.appendChild(v);
                        var y = document.createElement("button");
                        y.className = "pswp__button pswp__button--arrow--left",
                        y.title = "Previous (arrow left)",
                        s.appendChild(y);
                        var w = document.createElement("button");
                        w.className = "pswp__button pswp__button--arrow--right",
                        w.title = "Next (arrow right)",
                        s.appendChild(w);
                        var C = document.createElement("div");
                        C.className = "pswp__caption",
                        s.appendChild(C);
                        var k = document.createElement("div");
                        k.className = "pswp__caption__center",
                        k.textContent = "#lang_brought_by# ",
                        C.appendChild(k),
                        document.body.appendChild(e)
                    }(),
                    o = document.getElementById(c.gallerySelector),
                    n = e(".pswp__button--slideshow"),
                    0 === e("#ps-loader-layer").length && (m = !0),
                    b()
                }
                ,
                u.initPS = function() {
                    b()
                }
                ,
                u.getCurrentItemSrc = function() {
                    return r
                }
                ,
                u
            }(jQuery, ie.utilities, device),
            ie.ps5 = function(e, t, a, n) {
                var i, o, s, r = {}, l = {}, c = "image", u = "button", d = {
                    bgOpacity: 1,
                    initialZoomLevel: "fit",
                    secondaryZoomLevel: 1.5,
                    maxZoomLevel: 2.5
                }, p = "data-gp", m = null, h = !0, g = !1;
                function f() {
                    "desktop" != (a.mobile() ? "mobile" : "desktop") && e("#" + r.gallerySelector).children(".thumbwook:not(.r-frame)").children("a").attr("target", "_blank")
                }
                function b(t) {
                    !function(t, a, n, i) {
                        n || (n = ""),
                        e.ajax({
                            url: t,
                            type: a,
                            dataType: "json",
                            data: n,
                            success: function(e) {
                                i(e)
                            }
                        })
                    }(r.api_slide_show_mode, "POST", null, (function(e) {
                        t(e)
                    }
                    ))
                }
                function v(e, t, a) {
                    var n = a.content.element.querySelector(".ps-gp-container")
                      , i = e / t
                      , o = a.height * i - 10;
                    a.height > 3 * t && (o = 3 * t * i - 10),
                    n.style.width = o + "px"
                }
                function y(t) {
                    if (h && !g) {
                        e("#ps-loader-layer").show(0),
                        g = !0;
                        var a = document.createElement("script")
                          , n = document.createElement("script")
                          , i = document.createElement("link")
                          , o = e.Deferred()
                          , s = e.Deferred()
                          , l = e.Deferred();
                        a.src = r.js1Path,
                        n.src = r.js2Path,
                        a.setAttribute("defer", ""),
                        n.setAttribute("defer", ""),
                        i.type = "text/css",
                        i.rel = "stylesheet",
                        i.href = r.css1Path,
                        e.when(o, s, l).done((function() {
                            e("#ps-loader-layer").hide(0),
                            t(),
                            h = !1,
                            g = !1,
                            !0
                        }
                        )),
                        a.onload = function() {
                            o.resolve()
                        }
                        ,
                        n.onload = function() {
                            s.resolve()
                        }
                        ,
                        i.onload = function() {
                            l.resolve()
                        }
                        ,
                        document.body.appendChild(i),
                        document.body.appendChild(a),
                        document.body.appendChild(n)
                    }
                }
                function w() {
                    o.checkFavButtonStatus(r.galleryId)
                }
                function C(t, a) {
                    y((function() {
                        !function(t, a) {
                            a.pswpModule = PhotoSwipe,
                            m = new PhotoSwipeLightbox(a),
                            m.on("contentActivate", (function(e) {
                                "html" === e.content.type && n.initPlayer(e.content.data.vid, e.content.data.vsrc, !0)
                            }
                            )),
                            m.on("contentResize", (function(e) {
                                "html" === e.content.type && v(e.content.data.vwidth, e.content.data.vheight, e)
                            }
                            )),
                            m.on("bindEvents", (e=>{
                                T(m.pswp.scrollWrap, (function(e) {
                                    E(e)
                                }
                                ))
                            }
                            )),
                            m.on("uiRegister", (function() {
                                m.pswp.ui.registerElement({
                                    name: "custom-caption",
                                    order: 9,
                                    isButton: !1,
                                    appendTo: "root",
                                    html: 'Brought by <a rel="nofollow" href="/go/' + r.paySite + '">' + e("#paySiteNormal").text() + '<i class="icon icon-out"></i></a>'
                                }),
                                m.pswp.ui.registerElement({
                                    name: "slideshow-button",
                                    ariaLabel: "Play/Pause slideshow",
                                    order: 9,
                                    isButton: !0,
                                    html: '<i class="icon icon-play-2 active"></i><i class="icon icon-pause"></i>',
                                    onClick: (e,t)=>{
                                        _(t)
                                    }
                                }),
                                m.pswp.ui.registerElement({
                                    className: "pswp__button--favorite-button gall-info-favorite add",
                                    ariaLabel: "Favorite",
                                    order: 8,
                                    isButton: !0,
                                    html: '<i class="icon icon-favorite-fill"></i>',
                                    onInit: (e,t)=>{
                                        w()
                                    }
                                }),
                                i && (m.pswp.ui.registerElement({
                                    name: "fullscreen-button",
                                    title: "Toggle fullscreen",
                                    order: 9,
                                    isButton: !0,
                                    html: '<i class="icon icon-expand active ps-fs-ex"></i><i class="icon icon-compress ps-fs-comp"></i>',
                                    onClick: (e,t)=>{
                                        P(m.pswp.template)
                                    }
                                }),
                                m.pswp.events.add(document, "keydown", (e=>{
                                    70 === e.keyCode && (P(m.pswp.template),
                                    e.preventDefault())
                                }
                                )))
                            }
                            )),
                            m.on("close", (()=>{
                                clearInterval(s),
                                i && i.isFullscreen() && i.exit()
                            }
                            )),
                            m.on("afterInit", (()=>{
                                document.addEventListener("fullscreenchange", A),
                                document.addEventListener("webkitfullscreenchange", A),
                                document.addEventListener("mozfullscreenchange", A),
                                document.addEventListener("MSFullscreenChange", A)
                            }
                            )),
                            m.init(),
                            m.loadAndOpen(t)
                        }(t, a)
                    }
                    ))
                }
                function k(t, a) {
                    y((function() {
                        !function(t, a) {
                            d.gallery = "#" + r.gallerySelector,
                            d.children = "li > a",
                            a.pswpModule = PhotoSwipe,
                            m = new PhotoSwipeLightbox(a),
                            m.addFilter("itemData", ((e,t)=>{
                                if (void 0 === e.element.dataset.width)
                                    return e;
                                var a = e.element.dataset.width
                                  , n = e.element.dataset.height;
                                return e.vsrc = atob(r.videoPath),
                                e.vwidth = parseInt(a),
                                e.vheight = parseInt(n),
                                e.vid = "gplayer-2",
                                e
                            }
                            )),
                            m.on("contentActivate", (function(e) {
                                "gp-video" === e.content.type && (v(e.content.data.vwidth, e.content.data.vheight, e),
                                n.initPlayer(e.content.data.vid, e.content.data.vsrc, !0))
                            }
                            )),
                            m.on("contentResize", (function(e) {
                                "gp-video" === e.content.type && v(e.content.data.vwidth, e.content.data.vheight, e)
                            }
                            )),
                            m.on("contentLoad", (function(e) {
                                if ("gp-video" === e.content.type) {
                                    e.preventDefault(),
                                    e.content.element = document.createElement("div"),
                                    e.content.element.className = "pswp__content";
                                    var t = document.createElement("div")
                                      , a = document.createElement("div");
                                    t.id = "gplayer-2",
                                    t.style.width = "100%",
                                    t.style.height = "100%",
                                    a.className = "ps-gp-container",
                                    a.appendChild(t),
                                    e.content.element.appendChild(a)
                                }
                            }
                            )),
                            m.on("bindEvents", (e=>{
                                T(m.pswp.scrollWrap, (function(e) {
                                    E(e)
                                }
                                ))
                            }
                            )),
                            m.on("uiRegister", (function() {
                                m.pswp.ui.registerElement({
                                    name: "custom-caption",
                                    order: 9,
                                    isButton: !1,
                                    appendTo: "root",
                                    html: 'Brought by <a rel="nofollow" href="/go/' + r.paySite + '">' + e("#paySiteNormal").text() + '<i class="icon icon-out"></i></a>'
                                }),
                                m.pswp.ui.registerElement({
                                    name: "slideshow-button",
                                    ariaLabel: "Play/Pause slideshow",
                                    order: 9,
                                    isButton: !0,
                                    html: '<i class="icon icon-play-2 active"></i><i class="icon icon-pause"></i>',
                                    onClick: (e,t)=>{
                                        _(t)
                                    }
                                }),
                                m.pswp.ui.registerElement({
                                    className: "pswp__button--favorite-button gall-info-favorite add",
                                    ariaLabel: "Favorite",
                                    order: 8,
                                    isButton: !0,
                                    html: '<i class="icon icon-favorite-fill"></i>',
                                    onInit: (e,t)=>{
                                        w()
                                    }
                                }),
                                i && (m.pswp.ui.registerElement({
                                    name: "fullscreen-button",
                                    title: "Toggle fullscreen",
                                    order: 9,
                                    isButton: !0,
                                    html: '<i class="icon icon-expand active ps-fs-ex"></i><i class="icon icon-compress ps-fs-comp"></i>',
                                    onClick: (e,t)=>{
                                        P(m.pswp.template)
                                    }
                                }),
                                m.pswp.events.add(document, "keydown", (e=>{
                                    70 === e.keyCode && (P(m.pswp.template),
                                    e.preventDefault())
                                }
                                )))
                            }
                            )),
                            m.on("close", (()=>{
                                clearInterval(s),
                                i && i.isFullscreen() && i.exit()
                            }
                            )),
                            m.on("afterInit", (()=>{
                                document.addEventListener("fullscreenchange", A),
                                document.addEventListener("webkitfullscreenchange", A),
                                document.addEventListener("mozfullscreenchange", A),
                                document.addEventListener("MSFullscreenChange", A)
                            }
                            )),
                            m.init(),
                            m.loadAndOpen(t, {
                                gallery: document.querySelector("#" + r.gallerySelector)
                            })
                        }(t, a)
                    }
                    ))
                }
                function _(e) {
                    var t = e.children[0]
                      , a = e.children[1];
                    t.classList.contains("active") ? (t.classList.remove("active"),
                    a.classList.add("active"),
                    function() {
                        if (null === m)
                            return;
                        s = setInterval((function() {
                            m.pswp.next()
                        }
                        ), 5e3)
                    }()) : (a.classList.remove("active"),
                    t.classList.add("active"),
                    function() {
                        if (null === m)
                            return;
                        clearInterval(s)
                    }())
                }
                function P(e) {
                    var t = document.querySelector(".ps-fs-ex")
                      , a = document.querySelector(".ps-fs-comp");
                    i && (i.isFullscreen() ? (i.exit(),
                    setTimeout((function() {
                        a.classList.contains("active") && (a.classList.remove("active"),
                        t.classList.add("active"))
                    }
                    ), 300)) : (i.request(e),
                    setTimeout((function() {
                        t.classList.contains("active") && (t.classList.remove("active"),
                        a.classList.add("active"))
                    }
                    ), 300)))
                }
                function A() {
                    var e = document.querySelector(".ps-fs-ex")
                      , t = document.querySelector(".ps-fs-comp");
                    document.fullscreenElement || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || setTimeout((function() {
                        t.classList.contains("active") && (t.classList.remove("active"),
                        e.classList.add("active"))
                    }
                    ), 300)
                }
                function I() {
                    document.querySelector("." + r.galleryButtonClass).addEventListener("click", (function() {
                        var e, t;
                        null === m ? ((e = d).dataSource = (t = [],
                        document.getElementById(r.gallerySelector).querySelectorAll("li>a").forEach((function(e) {
                            var a = {};
                            null !== e.getAttribute(p) ? (a.html = '<div class="ps-gp-container"><div id="gplayer-2"  style="width: 100%; height:100%;"></div></div>',
                            a.vsrc = atob(r.videoPath),
                            a.vid = "gplayer-2",
                            a.vwidth = parseInt(e.getAttribute("data-width")),
                            a.vheight = parseInt(e.getAttribute("data-height"))) : (a.src = e.href,
                            a.width = parseInt(e.getAttribute("data-pswp-width"), 10),
                            a.height = parseInt(e.getAttribute("data-pswp-height"), 10)),
                            t.push(a)
                        }
                        )),
                        t),
                        C(0, e)) : m.loadAndOpen(0)
                    }
                    ))
                }
                function T(e, t) {
                    e.addEventListener ? "onwheel"in document ? e.addEventListener("wheel", t) : "onmousewheel"in document ? e.addEventListener("mousewheel", t) : e.addEventListener("MozMousePixelScroll", t) : e.attachEvent("onmousewheel", t)
                }
                function E(e) {
                    (e.deltaY || e.detail || e.wheelDelta) > 0 ? m.pswp.next() : m.pswp.prev()
                }
                return l.init = function(t) {
                    var a, n, s, l, p, h, g;
                    (function(t) {
                        r.isLoggedData = r.isLoggedData || t.isLoggedData,
                        r.paySite = r.paySite || t.paySite,
                        r.gallerySelector = r.gallerySelector || t.gallerySelector,
                        r.galleryButtonClass = r.galleryButtonClass || t.galleryButtonClass,
                        r.galleryId = r.galleryId || t.galleryId,
                        r.api_slide_show_mode = r.api_slide_show_mode || t.api_slide_show_mode,
                        r.psModeCookieName = r.psModeCookieName || t.psModeCookieName,
                        r.callback = t.callback,
                        r.css1Path = r.css1Path || t.css1Path,
                        r.css2Path = r.css2Path || t.css2Path,
                        r.js1Path = r.js1Path || t.js1Path,
                        r.js2Path = r.js2Path || t.js2Path,
                        r.js3Path = r.js3Path || t.js3Path,
                        r.videoPath = r.videoPath || t.videoPath,
                        document.getElementById(r.gallerySelector),
                        e(".pswp__button--slideshow"),
                        e(".pswp__button--fav")
                    }
                    )(t = t || {}),
                    o = ie.user,
                    document.fullscreenEnabled ? (n = "requestFullscreen",
                    s = "exitFullscreen",
                    l = "fullscreenElement",
                    p = "fullscreenchange",
                    h = "fullscreenerror") : document.webkitFullscreenEnabled && (n = "webkitRequestFullscreen",
                    s = "webkitExitFullscreen",
                    l = "webkitFullscreenElement",
                    p = "webkitfullscreenchange",
                    h = "webkitfullscreenerror"),
                    n && (a = {
                        request: function(e) {
                            "webkitRequestFullscreen" === n ? e[n](Element.ALLOW_KEYBOARD_INPUT) : e[n]()
                        },
                        exit: function() {
                            return document[s]()
                        },
                        isFullscreen: function() {
                            return document[l]
                        },
                        change: p,
                        error: h
                    }),
                    i = a,
                    g = function(t) {
                        switch (t) {
                        case c:
                            e("." + r.galleryButtonClass).hide(),
                            (n = document.getElementById(r.gallerySelector).querySelectorAll(".thumbwook:not(.r-frame):not(.gp-thumb)")).forEach((function(e, t) {
                                e.addEventListener("click", (function(t) {
                                    t.preventDefault(),
                                    a = d,
                                    null === m && k(parseInt(Array.prototype.slice.call(n).indexOf(e)), a)
                                }
                                ))
                            }
                            ));
                            break;
                        case u:
                            f(),
                            I()
                        }
                        var a, n
                    }
                    ,
                    "ok" === r.isLoggedData.status ? b((function(e) {
                        "ok" === e.status && 1 === e.data.asSlideShow ? g(c) : g(u)
                    }
                    )) : g(u)
                }
                ,
                l.initPS = function() {}
                ,
                l.getCurrentItemSrc = function() {
                    return null === m || void 0 === m.pswp ? "" : m.pswp.currSlide.data.src
                }
                ,
                l.getSlideType = function() {
                    return null === m || void 0 === m.pswp ? "" : m.pswp.currSlide.content.type
                }
                ,
                l
            }(jQuery, ie.utilities, device, ie.galleryPlayer),
            ie.comments = function(e, t, a) {
                var n = {}
                  , i = {}
                  , o = 0
                  , s = 1
                  , r = !1
                  , l = !0;
                function c(t, a, n, i) {
                    n || (n = ""),
                    e.ajax({
                        url: t,
                        type: a,
                        dataType: "json",
                        data: n,
                        success: function(e) {
                            i(e)
                        }
                    })
                }
                function u(t) {
                    var a = e(t)
                      , i = a.parent().prev().text();
                    !function(e) {
                        var t = 0
                          , a = 0;
                        for (; null != e; )
                            t += e.offsetLeft,
                            a += e.offsetTop,
                            e = e.offsetParent;
                        window.scrollTo(t, a)
                    }(e("." + n.commentsFormClass)),
                    e("." + n.commentsFormClass + "__area").val(i).attr("data-id", a.attr("data-id")).trigger("focus"),
                    r = !0
                }
                function d() {
                    var a = document.querySelector("." + n.commentsClass + "__container");
                    t.showLineLoader(n.commentsClass),
                    c(n.api_get_comments + n.galleryId + "/?page=" + s++, "GET", null, (function(i) {
                        if ("ok" === i.status) {
                            0 === i.data.messages.length && 2 === s && e("." + n.commentsClass + "_layer").show(0),
                            i.data.messages.length % 5 == 0 && 0 !== i.data.messages.length ? e("." + n.commentsClass + "__more").show() : e("." + n.commentsClass + "__more").hide();
                            var o = document.createDocumentFragment()
                              , r = i.data.currentUserId
                              , l = n.commentsMessageClass;
                            e.each(i.data.messages, (function(t, a) {
                                var i = document.createElement("div")
                                  , s = document.createElement("div")
                                  , d = document.createElement("div")
                                  , p = document.createElement("div")
                                  , m = document.createElement("div")
                                  , h = document.createElement("div")
                                  , g = document.createElement("a")
                                  , f = document.createElement("a");
                                i.className = l,
                                s.className = l + "__info",
                                d.className = l + "__name",
                                p.className = l + "__time",
                                m.className = l + "__text",
                                h.className = l + "__options",
                                g.className = l + "__edit " + l + "__link",
                                f.className = l + "__report " + l + "__link",
                                i.setAttribute("data-message-id", a.id),
                                g.text = "Edit",
                                g.setAttribute("href", "#"),
                                g.setAttribute("rel", "nofollow"),
                                g.setAttribute("data-id", a.id),
                                g.addEventListener("click", (function(e) {
                                    e.preventDefault(),
                                    u(this)
                                }
                                )),
                                f.text = "Report",
                                f.setAttribute("href", "#"),
                                f.setAttribute("rel", "nofollow"),
                                f.setAttribute("data-id", a.id),
                                f.addEventListener("click", (function(t) {
                                    var a, i, o;
                                    t.preventDefault(),
                                    a = e(this),
                                    i = a.attr("data-id"),
                                    o = a.parent().prev(),
                                    c(n.api_set_as_spam + i, "GET", null, (function(e) {
                                        "ok" === e.status && o.fadeOut(300, (function() {
                                            o.addClass(n.commentsMessageClass + "_alarm"),
                                            o.text("The message was added to spam").fadeIn(300)
                                        }
                                        )),
                                        "error" === e.status && console.log(e.message)
                                    }
                                    ))
                                }
                                )),
                                d.innerHTML = null == a.login ? "Guest" : a.login,
                                p.innerHTML = function(e) {
                                    Date.now || (Date.now = function() {
                                        return (new Date).getTime()
                                    }
                                    );
                                    var t, a = Math.floor(Date.now() / 1e3) - e;
                                    return a < 60 ? "less then 1 minute ago" : a < 3600 ? 1 === (t = parseInt(60 / (3600 / a))) ? t + " minute ago" : t + " minutes ago" : a < 86400 ? 1 === (t = parseInt(24 / (86400 / a))) ? t + " hour ago" : t + " hours ago" : a < 604800 ? 1 === (t = parseInt(7 / (604800 / a))) ? t + " day ago" : t + " days ago" : a < 2419200 ? 1 === (t = parseInt(4 / (2419200 / a))) ? t + " week ago" : t + " weeks ago" : a < 29030400 ? 1 === (t = parseInt(12 / (29030400 / a))) ? t + " month ago" : t + " months ago" : a > 29030400 ? (0 === (t = parseInt(a / 31536e3)) && (t = 1),
                                    1 === t ? t + " year ago" : t + " years ago") : void 0
                                }(a.createdAt) + function(e) {
                                    if ("0" === e)
                                        return " (in moderation)";
                                    return ""
                                }(a.isApproved),
                                "" === a.currentText ? i.className = l + " " + l + "_empty" : m.innerHTML = a.currentText,
                                s.appendChild(d),
                                s.appendChild(p),
                                r === a.userId && h.appendChild(g),
                                "ok" === n.loggedData.status ? a.login !== n.loggedData.data.login && h.appendChild(f) : h.appendChild(f),
                                i.appendChild(s),
                                i.appendChild(m),
                                i.appendChild(h),
                                o.appendChild(i)
                            }
                            )),
                            t.hideLineLoader(n.commentsClass),
                            a.appendChild(o),
                            void 0 !== (d = t.getCookie(n.userCommentsCookieName)) && (d = JSON.parse(d),
                            e("." + n.commentsMessageClass + "_empty").each((function() {
                                var t = e(this);
                                d[t.attr("data-message-id")] && (t.find("." + n.commentsMessageClass + "__text").text(d[t.attr("data-message-id")]),
                                t.removeClass(n.commentsMessageClass + "_empty"))
                            }
                            )))
                        }
                        var d
                    }
                    ))
                }
                function p(a) {
                    var i = e("." + n.commentsFormClass + "__send");
                    switch (a) {
                    case "start":
                        i.prop("disabled", !0),
                        t.showLineLoader("comm-form__captcha");
                        break;
                    case "end":
                        i.prop("disabled", !1),
                        t.hideLineLoader("comm-form__captcha")
                    }
                }
                function m(t) {
                    var i = e("." + n.commentsFormClass + "__area")
                      , s = i.attr("data-id")
                      , d = i.val();
                    p("start"),
                    r ? a.setCaptcha((function(t) {
                        c(n.api_edit_comment + s, "POST", {
                            text: d,
                            "g-recaptcha-response": t
                        }, (function(t) {
                            if (p("end"),
                            "error" !== t.status)
                                "ok" === t.status && (!function(t, a) {
                                    var i = e("[data-message-id='" + a + "']");
                                    h(t, a),
                                    i.find("." + n.commentsMessageClass + "__text").text(t)
                                }(d, s),
                                i.val(""),
                                g(i),
                                "block" !== e(".comments").css("display") && f()),
                                r = !1;
                            else {
                                switch (e(".message-status-error").show(),
                                t.message.code) {
                                case 1:
                                    e(".message-status-error").text("Sorry, the anti-bot check failed. Please try again.");
                                    break;
                                case 2:
                                    e(".message-status-error").text("The message can't be empty");
                                    break;
                                case 3:
                                case 4:
                                    console.log(t.message.text)
                                }
                                setTimeout((function() {
                                    e(".message-status-error").hide(300)
                                }
                                ), 5e3)
                            }
                        }
                        ))
                    }
                    )) : a.setCaptcha((function(t) {
                        c(n.api_add_comment + o + "&galleryId=" + n.galleryId, "POST", {
                            text: d,
                            "g-recaptcha-response": t
                        }, (function(t) {
                            if (p("end"),
                            "error" !== t.status)
                                "ok" === t.status && (h(d, t.data.id),
                                l || (e("." + n.commentsClass + "_layer").hide(0),
                                function(t, a, i) {
                                    var o = n.commentsMessageClass
                                      , s = document.createElement("div")
                                      , r = document.createElement("div")
                                      , l = document.createElement("div")
                                      , c = document.createElement("div")
                                      , d = document.createElement("div")
                                      , p = document.createElement("div")
                                      , m = document.createElement("a");
                                    s.className = o,
                                    r.className = o + "__info",
                                    l.className = o + "__name",
                                    c.className = o + "__time",
                                    d.className = o + "__text",
                                    p.className = o + "__options",
                                    m.className = o + "__edit " + o + "__link",
                                    s.setAttribute("data-message-id", a),
                                    m.text = "Edit",
                                    m.setAttribute("href", "#"),
                                    m.setAttribute("rel", "nofollow"),
                                    m.setAttribute("data-id", a),
                                    m.addEventListener("click", (function(e) {
                                        e.preventDefault(),
                                        u(this)
                                    }
                                    )),
                                    "ok" === n.loggedData.status ? l.innerHTML = n.loggedData.data.login : l.innerHTML = "Guest";
                                    c.innerHTML = "Now",
                                    r.appendChild(l),
                                    r.appendChild(c),
                                    d.innerHTML = t,
                                    "ok" === n.loggedData.status && p.appendChild(m);
                                    s.appendChild(r),
                                    s.appendChild(d),
                                    s.appendChild(p),
                                    i || e("." + n.commentsClass + "__container").prepend(s)
                                }(d, t.data.id, o)),
                                i.val(""),
                                g(i),
                                "block" !== e(".comments").css("display") && f()),
                                o = 0;
                            else {
                                switch (e(".message-status-error").show(),
                                t.message.code) {
                                case 1:
                                    e(".message-status-error").text("Sorry, the anti-bot check failed. Please try again.");
                                    break;
                                case 2:
                                    e(".message-status-error").text("The message can't be empty");
                                    break;
                                case 3:
                                case 4:
                                    console.log(t.message.text)
                                }
                                setTimeout((function() {
                                    e(".message-status-error").hide(300)
                                }
                                ), 5e3)
                            }
                        }
                        ))
                    }
                    ))
                }
                function h(e, a) {
                    var i, o = t.getCookie(n.userCommentsCookieName), s = {};
                    void 0 === o ? ((i = new Date).setMonth(i.getMonth() + 1),
                    s.timeExp = i) : (s = JSON.parse(o),
                    i = new Date(s.timeExp)),
                    s[a] = e,
                    t.setCookie(n.userCommentsCookieName, JSON.stringify(s), {
                        expires: i,
                        path: "/",
                        domain: ""
                    })
                }
                function g(t) {
                    "" === t.val() && e(".comm-from-section").removeClass("active")
                }
                function f() {
                    l && (l = !1,
                    document.querySelector("." + n.commentsClass + "__container").innerHTML = "",
                    d()),
                    e("." + n.commentsClass).slideToggle()
                }
                return i.init = function(t) {
                    (function(e) {
                        n.galleryId = n.galleryId || e.galleryId,
                        n.loggedData = n.loggedData || e.loggedData,
                        n.commButton = n.commButton || e.commButton,
                        n.commentsFormClass = n.commentsFormClass || e.commentsFormClass,
                        n.commentsClass = n.commentsClass || e.commentsClass,
                        n.commentsMessageClass = n.commentsMessageClass || e.commentsMessageClass,
                        n.userCommentsCookieName = n.userCommentsCookieName || e.userCommentsCookieName,
                        n.api_get_comments = n.api_get_comments || e.api_get_comments,
                        n.api_set_as_spam = n.api_set_as_spam || e.api_set_as_spam,
                        n.api_edit_comment = n.api_edit_comment || e.api_edit_comment,
                        n.api_add_comment = n.api_add_comment || e.api_add_comment
                    }
                    )(t = t || {}),
                    e("." + n.commentsFormClass + "__area").focus((function() {
                        e(".comm-from-section").addClass("active")
                    }
                    )),
                    e("." + n.commentsFormClass + "__area").focusout((function() {
                        g(e(this))
                    }
                    )),
                    e("." + n.commentsFormClass + "__send").on("click", (function(e) {
                        m()
                    }
                    )),
                    e("." + n.commButton).on("click", (function() {
                        f()
                    }
                    )),
                    e("." + n.commentsClass + "__more").on("click", (function() {
                        d()
                    }
                    ))
                }
                ,
                i
            }(jQuery, ie.utilities, ie.captchaV3),
            ie.user = function(e, t, a) {
                var n, i, o = {}, s = {}, r = void 0 !== document.body.ontouchstart, l = !1, c = !1, u = [], d = [], p = [], m = null;
                function h(t, a, n, i) {
                    n || (n = ""),
                    e.ajax({
                        url: t + "?rnd=" + (new Date).getTime(),
                        type: a,
                        dataType: "json",
                        data: n,
                        success: function(e) {
                            i(e)
                        }
                    })
                }
                function g() {
                    t.delCookie(o.isLoggedCookieName),
                    t.delCookie(o.galleryIdsCookieName),
                    t.delCookie(o.psmodeCookie)
                }
                function f(e, t) {
                    e.find("li:not('." + o.excludeNativeAdClass + "') > a").each((function() {
                        var e = this;
                        if (!e.querySelector("." + o.favIconClassName)) {
                            var a = document.createElement("i");
                            a.className = o.favIconClassName + " " + t,
                            e.insertBefore(a, e.firstChild)
                        }
                    }
                    ))
                }
                function b(e) {
                    h(o.api_get_gid, "GET", null, (function(t) {
                        "ok" === t.status && (u = !1 === t.data ? [] : t.data,
                        e())
                    }
                    ))
                }
                function v(e) {
                    h(o.api_get_channels_id, "GET", null, (function(t) {
                        "ok" === t.status && (d = !1 === t.data ? [] : t.data,
                        e())
                    }
                    ))
                }
                function y(e) {
                    h(o.api_get_models_id, "GET", null, (function(t) {
                        "ok" === t.status && (p = !1 === t.data ? [] : t.data,
                        e())
                    }
                    ))
                }
                function w(e, t, a) {
                    for (var n = a; n >= 0; n -= 1)
                        if (e[n] === t)
                            return n;
                    return -1
                }
                function C(e, t, a) {
                    -1 !== e.indexOf(a.toString()) ? t.classList.contains(o.individualPageFuvButtonAddClass) && (t.classList.remove(o.individualPageFuvButtonAddClass),
                    t.classList.add(o.individualPageFuvButtonRemoveClass)) : t.classList.contains(o.individualPageFuvButtonRemoveClass) && (t.classList.remove(o.individualPageFuvButtonRemoveClass),
                    t.classList.add(o.individualPageFuvButtonAddClass))
                }
                function k(t) {
                    var a = e("." + o.favButtonClassName)
                      , n = u.length;
                    w(u, t, n) >= 0 && a.removeClass("add").addClass("del")
                }
                function _(e, a, s, r, l, c) {
                    var d;
                    if (e.preventDefault(),
                    "ok" !== n.status)
                        return i(),
                        !1;
                    if (a.hasClass("add")) {
                        if (("gallery" === o.pageType || "gallery_gc" === o.pageType) && a.hasClass(o.favButtonClassName)) {
                            if ("add" === m)
                                return;
                            m = "add"
                        }
                        d = "src=" + s + "&url=" + encodeURIComponent(r) + "&height=" + l + "&gid=" + c,
                        h(o.api_add_gal, "GET", d, (function(e) {
                            "ok" === e.status ? (a.toggleClass("add del"),
                            u.push(c),
                            t.setCookie(o.galleryIdsCookieName, JSON.stringify(u), {
                                path: "/",
                                domain: ""
                            })) : "session was not started code 2" === e.message && (g(),
                            ie.modalWindow.show(!0, ie.loginForm.getForm(!0)))
                        }
                        ))
                    }
                    if (a.hasClass("del")) {
                        if (("gallery" === o.pageType || "gallery_gc" === o.pageType) && a.hasClass(o.favButtonClassName)) {
                            if ("del" === m)
                                return;
                            m = "del"
                        }
                        d = "src=" + s + "&url=" + encodeURIComponent(r) + "&gid=" + c,
                        h(o.api_del_gal, "GET", d, (function(e) {
                            var n;
                            "ok" === e.status ? (a.toggleClass("add del"),
                            -1 !== (n = u.indexOf(c)) && u.splice(n, 1),
                            t.setCookie(o.galleryIdsCookieName, JSON.stringify(u), {
                                path: "/",
                                domain: ""
                            })) : "session was not started code 2" === e.message && (g(),
                            ie.modalWindow.show(!0, ie.loginForm.getForm(!0)))
                        }
                        ))
                    }
                }
                function P() {
                    "ok" === n.status && window.addEventListener("pageshow", (e=>{
                        var t;
                        "models" === o.pageType && y((function() {
                            document.querySelectorAll("." + o.favIconClassName).forEach((function(e) {
                                var t = e.parentElement.getAttribute("data-mid");
                                null !== t && (-1 !== p.indexOf(t) ? e.classList.contains("add") && (e.classList.remove("add"),
                                e.classList.add("del")) : e.classList.contains("del") && (e.classList.remove("del"),
                                e.classList.add("add")))
                            }
                            ))
                        }
                        )),
                        "channels" === o.pageType && v((function() {
                            document.querySelectorAll("." + o.favIconClassName).forEach((function(e) {
                                var t = e.parentElement.getAttribute("data-mid");
                                null !== t && (-1 !== d.indexOf(t) ? e.classList.contains("add") && (e.classList.remove("add"),
                                e.classList.add("del")) : e.classList.contains("del") && (e.classList.remove("del"),
                                e.classList.add("add")))
                            }
                            ))
                        }
                        )),
                        "search" === o.pageType && "channels" === o.pageSubType && (t = document.querySelector("." + o.individualPageFuvButton),
                        v((function() {
                            C(d, t, o.profileID)
                        }
                        ))),
                        "search" === o.pageType && "models" === o.pageSubType && (t = document.querySelector("." + o.individualPageFuvButton),
                        v((function() {
                            C(p, t, o.profileID)
                        }
                        )))
                    }
                    ))
                }
                return s.init = function(e) {
                    !function(e) {
                        o.isLoggedCookieName = o.isLoggedCookieName || e.isLoggedCookieName,
                        o.galleryIdsCookieName = o.galleryIdsCookieName || e.galleryIdsCookieName,
                        o.psmodeCookie = o.psmodeCookie || e.psmodeCookie,
                        o.api_is_logged = o.api_is_logged || e.api_is_logged,
                        o.api_auth = o.api_auth || e.api_auth,
                        o.api_logout = o.api_logout || e.api_logout,
                        o.api_max_page = o.api_max_page || e.api_max_page,
                        o.api_channels_max_page = o.api_channels_max_page || e.api_channels_max_page,
                        o.api_models_max_page = o.api_models_max_page || e.api_models_max_page,
                        o.api_get_gid = o.api_get_gid || e.api_get_gid,
                        o.api_get_channels_id = o.api_get_channels_id || e.api_get_channels_id,
                        o.api_get_models_id = o.api_get_models_id || e.api_get_models_id,
                        o.api_add_gal = o.api_add_gal || e.api_add_gal,
                        o.api_add_channel = o.api_add_channel || e.api_add_channel,
                        o.api_add_model = o.api_add_model || e.api_add_model,
                        o.api_del_gal = o.api_del_gal || e.api_del_gal,
                        o.api_del_channel = o.api_del_channel || e.api_del_channel,
                        o.api_del_model = o.api_del_model || e.api_del_model,
                        o.favIconClassName = o.favIconClassName || e.favIconClassName,
                        o.favButtonClassName = o.favButtonClassName || e.favButtonClassName,
                        o.psFavButtonClassName = o.psFavButtonClassName || e.psFavButtonClassName,
                        o.excludeNativeAdClass = o.excludeNativeAdClass || e.excludeNativeAdClass,
                        o.individualPageFuvButton = o.individualPageFuvButton || e.individualPageFuvButton,
                        o.individualPageFuvButtonAddClass = o.individualPageFuvButtonAddClass || e.individualPageFuvButtonAddClass,
                        o.individualPageFuvButtonRemoveClass = o.individualPageFuvButtonRemoveClass || e.individualPageFuvButtonRemoveClass,
                        o.individualPageTitle = o.individualPageTitle || e.individualPageTitle,
                        o.pageType = o.pageType || e.pageType,
                        o.pageSubType = o.pageSubType || e.pageSubType,
                        o.profileID = o.profileID || e.profileID
                    }(e = e || {})
                }
                ,
                s.getUserStatus = function(e) {
                    "function" == typeof e && function(e) {
                        var a = t.getCookie(o.isLoggedCookieName);
                        void 0 === a ? h(o.api_is_logged, "POST", {
                            withData: !0
                        }, (function(a) {
                            n = a,
                            t.setCookie(o.isLoggedCookieName, JSON.stringify(a), {
                                path: "/",
                                domain: "",
                                expires: 300
                            }),
                            P(),
                            e(n)
                        }
                        )) : (n = JSON.parse(a),
                        P(),
                        e(n))
                    }(e)
                }
                ,
                s.isUserAuth = function() {
                    return "ok" === n.status
                }
                ,
                s.auth = function(t, a) {
                    var n, i = e(t.target).parent();
                    g(),
                    n = "login=" + encodeURIComponent(i.find("[name='login']").val()) + "&password=" + encodeURIComponent(i.find("[name='password']").val()),
                    h(o.api_auth, "POST", n, (function(e) {
                        a(e)
                    }
                    ))
                }
                ,
                s.logout = function() {
                    g()
                }
                ,
                s.getMaxPage = function(e) {
                    h(o.api_max_page, "GET", null, (function(t) {
                        "number" == typeof t ? e(t) : void 0 !== t.message && ("session was not started code 2" === t.message && ie.modalWindow.show(!0, ie.loginForm.getForm(!0)),
                        "User not authorized" === t.message && (g(),
                        location.reload()))
                    }
                    ))
                }
                ,
                s.getChannelsMaxPage = function(e) {
                    h(o.api_channels_max_page, "GET", null, (function(t) {
                        "number" == typeof t ? e(t) : void 0 !== t.message && ("session was not started code 2" === t.message && ie.modalWindow.show(!0, ie.loginForm.getForm(!0)),
                        "User not authorized" === t.message && (g(),
                        location.reload()))
                    }
                    ))
                }
                ,
                s.getModelsMaxPage = function(e) {
                    h(o.api_models_max_page, "GET", null, (function(t) {
                        "number" == typeof t ? e(t) : void 0 !== t.message && ("session was not started code 2" === t.message && ie.modalWindow.show(!0, ie.loginForm.getForm(!0)),
                        "User not authorized" === t.message && (g(),
                        location.reload()))
                    }
                    ))
                }
                ,
                s.addFavIcons = function(t, a) {
                    r || "ok" === n.status && (b((function() {
                        var n, i;
                        f(e("#" + t), a),
                        "add" === a && (n = e("." + o.favIconClassName),
                        i = u.length,
                        n.each((function() {
                            var t = e(this).parent().attr("data-gid");
                            void 0 !== t && w(u, t, i) >= 0 && e(this).removeClass("add").addClass("del")
                        }
                        )))
                    }
                    )),
                    l || (e(document).on("mouseenter", "li > a", (function() {
                        e(this).children("." + o.favIconClassName).css("display", "block")
                    }
                    )),
                    e(document).on("mouseleave", "li > a", (function() {
                        e(this).children("." + o.favIconClassName).css("display", "none")
                    }
                    )),
                    e(document).on("click", "." + o.favIconClassName, (function(t) {
                        var a = e(this)
                          , n = a.nextAll("img").attr("src")
                          , i = a.parent().attr("data-gid")
                          , o = a.parent().attr("href")
                          , s = a.nextAll("img").attr("height");
                        void 0 !== a.nextAll("img").attr("data-src") && (n = a.nextAll("img").attr("data-src")),
                        _(t, a, n, o, s, i)
                    }
                    )),
                    l = !0))
                }
                ,
                s.addFavChannelsIcons = function(t, a) {
                    "ok" === n.status && (v((function() {
                        var n, i;
                        f(e("#" + t), a),
                        "add" === a && (n = e("." + o.favIconClassName),
                        i = d.length,
                        n.each((function() {
                            var t = e(this).parent().attr("data-mid");
                            void 0 !== t && w(d, t, i) >= 0 && e(this).removeClass("add").addClass("del")
                        }
                        )))
                    }
                    )),
                    l || (e(document).on("click", "." + o.favIconClassName, (function(t) {
                        t.stopPropagation();
                        var a = e(this)
                          , s = a.nextAll("img").attr("data-src")
                          , r = a.parent().attr("data-mid") || a.parent().attr("data-gid")
                          , l = a.parent().attr("href")
                          , c = a.nextAll("img").attr("height")
                          , u = a.parent()[0].querySelector(".m-name").textContent;
                        !function(e, t, a, s, r, l, c) {
                            var u;
                            if (e.preventDefault(),
                            "ok" !== n.status)
                                return i(),
                                !1;
                            t.hasClass("add") && (u = "src=" + a + "&url=" + encodeURIComponent(s) + "&height=" + r + "&gid=" + l + "&name=" + c,
                            h(o.api_add_channel, "GET", u, (function(e) {
                                "ok" === e.status ? (t.toggleClass("add del"),
                                d.push(l)) : "session was not started code 2" === e.message && (g(),
                                ie.modalWindow.show(!0, ie.loginForm.getForm(!0)))
                            }
                            ))),
                            t.hasClass("del") && (u = "src=" + a + "&url=" + encodeURIComponent(s) + "&gid=" + l,
                            h(o.api_del_channel, "GET", u, (function(e) {
                                var a;
                                "ok" === e.status ? (t.toggleClass("add del"),
                                -1 !== (a = d.indexOf(l)) && d.splice(a, 1)) : "session was not started code 2" === e.message && (g(),
                                ie.modalWindow.show(!0, ie.loginForm.getForm(!0)))
                            }
                            )))
                        }(t, a, s, l, c, r, u)
                    }
                    )),
                    l = !0))
                }
                ,
                s.addFavModelsIcons = function(t, a) {
                    "ok" === n.status && (y((function() {
                        var n, i;
                        f(e("#" + t), a),
                        "add" === a && (n = e("." + o.favIconClassName),
                        i = p.length,
                        n.each((function() {
                            var t = e(this).parent().attr("data-mid");
                            void 0 !== t && w(p, t, i) >= 0 && e(this).removeClass("add").addClass("del")
                        }
                        )))
                    }
                    )),
                    l || (e(document).on("click", "." + o.favIconClassName, (function(t) {
                        t.stopPropagation();
                        var a = e(this)
                          , s = a.nextAll("img").attr("data-src")
                          , r = a.parent().attr("data-mid") || a.parent().attr("data-gid")
                          , l = a.parent().attr("href")
                          , c = a.nextAll("img").attr("height")
                          , u = a.parent()[0].querySelector(".m-name").textContent;
                        !function(e, t, a, s, r, l, c) {
                            var u;
                            if (e.preventDefault(),
                            "ok" !== n.status)
                                return i(),
                                !1;
                            t.hasClass("add") && (u = "src=" + a + "&url=" + encodeURIComponent(s) + "&height=" + r + "&gid=" + l + "&name=" + c,
                            h(o.api_add_model, "GET", u, (function(e) {
                                "ok" === e.status ? (t.toggleClass("add del"),
                                p.push(l)) : "session was not started code 2" === e.message && (g(),
                                ie.modalWindow.show(!0, ie.loginForm.getForm(!0)))
                            }
                            ))),
                            t.hasClass("del") && (u = "src=" + a + "&url=" + encodeURIComponent(s) + "&gid=" + l,
                            h(o.api_del_model, "GET", u, (function(e) {
                                var a;
                                "ok" === e.status ? (t.toggleClass("add del"),
                                -1 !== (a = p.indexOf(l)) && p.splice(a, 1)) : "session was not started code 2" === e.message && (g(),
                                ie.modalWindow.show(!0, ie.loginForm.getForm(!0)))
                            }
                            )))
                        }(t, a, s, l, c, r, u)
                    }
                    )),
                    l = !0))
                }
                ,
                s.setIndividualPageFavButton = function(t) {
                    var a;
                    "" !== o.profileID && "" !== o.pageSubType && "" !== o.individualPageTitle && ("ok" === n.status && ("models" === o.pageSubType ? y((function() {
                        a = document.querySelector("." + o.individualPageFuvButton),
                        C(p, a, o.profileID)
                    }
                    )) : v((function() {
                        a = document.querySelector("." + o.individualPageFuvButton),
                        C(d, a, o.profileID)
                    }
                    ))),
                    c || (e(document).on("click", "." + o.individualPageFuvButton, (function(a) {
                        if (a.stopPropagation(),
                        "ok" === n.status) {
                            var s = o.profileID
                              , r = location.pathname
                              , l = function(e) {
                                for (var t = e.replace("+", " ").toLowerCase().split(" "), a = 0; a < t.length; a++)
                                    t[a] = t[a].charAt(0).toUpperCase() + t[a].substring(1);
                                return t.join(" ")
                            }(o.individualPageTitle)
                              , c = a.currentTarget;
                            "models" === o.pageSubType ? function(t, a, s, r) {
                                var l;
                                if ("ok" !== n.status)
                                    return i(),
                                    !1;
                                e(t).hasClass("add") && (l = "url=" + encodeURIComponent(a) + "&gid=" + s + "&name=" + r,
                                h(o.api_add_model, "GET", l, (function(a) {
                                    "ok" === a.status ? (e(t).toggleClass("add remove"),
                                    p.push(s)) : "session was not started code 2" === a.message && (g(),
                                    ie.modalWindow.show(!0, ie.loginForm.getForm(!0)))
                                }
                                ))),
                                e(t).hasClass("remove") && (l = "url=" + encodeURIComponent(a) + "&gid=" + s,
                                h(o.api_del_model, "GET", l, (function(a) {
                                    var n;
                                    "ok" === a.status ? (e(t).toggleClass("add remove"),
                                    -1 !== (n = p.indexOf(s)) && p.splice(n, 1)) : "session was not started code 2" === a.message && (g(),
                                    ie.modalWindow.show(!0, ie.loginForm.getForm(!0)))
                                }
                                )))
                            }(c, r, s, l) : function(t, a, s, r) {
                                var l;
                                if ("ok" !== n.status)
                                    return i(),
                                    !1;
                                e(t).hasClass("add") && (l = "url=" + encodeURIComponent(a) + "&gid=" + s + "&name=" + r,
                                h(o.api_add_channel, "GET", l, (function(a) {
                                    "ok" === a.status ? (e(t).toggleClass("add remove"),
                                    p.push(s)) : "session was not started code 2" === a.message && (g(),
                                    ie.modalWindow.show(!0, ie.loginForm.getForm(!0)))
                                }
                                ))),
                                e(t).hasClass("remove") && (l = "url=" + encodeURIComponent(a) + "&gid=" + s,
                                h(o.api_del_channel, "GET", l, (function(a) {
                                    var n;
                                    "ok" === a.status ? (e(t).toggleClass("add remove"),
                                    -1 !== (n = p.indexOf(s)) && p.splice(n, 1)) : "session was not started code 2" === a.message && (g(),
                                    ie.modalWindow.show(!0, ie.loginForm.getForm(!0)))
                                }
                                )))
                            }(c, r, s, l)
                        } else
                            t()
                    }
                    )),
                    c = !0))
                }
                ,
                s.setFuvButtonEvent = function(t, i, s) {
                    if ("ok" === n.status) {
                        var r, l, c = e("#" + t).children("li").eq(0), u = c.find("img").attr("src");
                        void 0 !== c.find("img").attr("data-src") && (u = c.find("img").attr("data-src")),
                        b((function() {
                            k(i)
                        }
                        ))
                    }
                    e(document).on("click.favorite", "." + o.favButtonClassName, (function(d) {
                        if ("ok" !== n.status)
                            return s(),
                            !1;
                        "" !== a.getCurrentItemSrc() && "image" === a.getSlideType() && (c = e("#" + t).find("[href='" + a.getCurrentItemSrc() + "']"),
                        u = c.find("img").attr("src"),
                        void 0 !== c.find("img").attr("data-src") && (u = c.find("img").attr("data-src"))),
                        r = window.location.href,
                        l = c.find("img").attr("height"),
                        _(d, e("." + o.favButtonClassName), u, r, l, i)
                    }
                    ))
                }
                ,
                s.setNoLoginCallback = function(e) {
                    "function" == typeof e && (i = e)
                }
                ,
                s.checkFavButtonStatus = function(e) {
                    "ok" === n.status && b((function() {
                        k(e)
                    }
                    ))
                }
                ,
                s
            }(jQuery, ie.utilities, ie.ps5),
            ie.loginForm = function(e, t) {
                var a, n = {}, i = {}, o = "";
                function s(e) {
                    e.preventDefault(),
                    t.auth(e, (function(e) {
                        if ("ok" === e.status) {
                            if (0 === e.data.is_verified)
                                return void r("Please verify your email. <a href='/email-verification/'>Verify Email</a>");
                            location.reload()
                        } else
                            r("Invalid login and/or password.")
                    }
                    ))
                }
                function r(t) {
                    var a = e("." + i.formClass + "__form-message");
                    a.html(t),
                    a.slideDown("fast")
                }
                return n.init = function(e) {
                    !function(e) {
                        i.formId = i.formId || e.formId || "login-modal",
                        i.formClass = i.formClass || e.formClass || "login-modal",
                        i.lang = i.lang || e.lang || "login-modal",
                        o = i.lang && "en" !== i.lang ? "/" + i.lang : ""
                    }(e = e || {})
                }
                ,
                n.getForm = function(e) {
                    return function(e) {
                        var t = document.createDocumentFragment()
                          , n = document.createElement("form")
                          , r = document.createElement("label")
                          , l = document.createElement("input")
                          , c = document.createElement("input")
                          , u = document.createElement("div")
                          , d = document.createElement("a")
                          , p = document.createElement("a")
                          , m = document.createElement("input")
                          , h = document.createElement("div")
                          , g = document.createElement("a")
                          , f = document.createElement("span");
                        n.id = i.formId,
                        r.className = i.formClass + "__label",
                        r.innerText = e ? "You must be logged in to access this page" : "Login To Your Account",
                        l.className = i.formClass + "__text inpt-default",
                        l.setAttribute("type", "text"),
                        l.setAttribute("placeholder", "Login or Email"),
                        l.setAttribute("name", "login"),
                        l.setAttribute("autocomplete", "username"),
                        c.className = i.formClass + "__text inpt-default",
                        c.setAttribute("type", "password"),
                        c.setAttribute("placeholder", "Password"),
                        c.setAttribute("name", "password"),
                        c.setAttribute("autocomplete", "current-password"),
                        u.className = i.formClass + "__link-block",
                        d.className = i.formClass + "__link",
                        d.setAttribute("href", o + "/password/"),
                        d.innerHTML = "Forgot Password?",
                        p.className = i.formClass + "__link",
                        p.setAttribute("href", o + "/signup/"),
                        p.innerHTML = "Register New Account",
                        m.className = i.formClass + "__button btn-fill",
                        m.setAttribute("type", "submit"),
                        m.setAttribute("value", "Login"),
                        m.addEventListener("click", s),
                        e && (g.className = i.formClass + "__button btn-gallery",
                        g.setAttribute("href", o + "/"),
                        g.innerHTML = "Go to the main page",
                        f.innerHTML = "OR"),
                        h.className = i.formClass + "__form-message",
                        n.appendChild(r),
                        n.appendChild(l),
                        n.appendChild(c),
                        u.appendChild(d),
                        u.appendChild(p),
                        n.appendChild(u),
                        n.appendChild(m),
                        n.appendChild(h),
                        e && (n.appendChild(f),
                        n.appendChild(g)),
                        t.appendChild(n),
                        a = t
                    }(e),
                    a
                }
                ,
                n
            }(jQuery, ie.user),
            ie.randomGallery = function(e, t) {
                var a = {}
                  , n = {};
                function i() {
                    e.ajax({
                        url: n.scriptPath,
                        dataType: "JSON",
                        type: "POST",
                        error: function() {
                            console.log("It has been error while ajax request to logged function")
                        },
                        success: function(a) {
                            var i, o, s, r;
                            "ok" === a.status && (document.location.href = a.link),
                            "captcha" === a.status && (i = document.createElement("span"),
                            o = document.createElement("div"),
                            s = document.createElement("div"),
                            r = document.createElement("div"),
                            s.classList = "loading-modal__spinner",
                            i.className = "antirobot-title",
                            i.innerHTML = "Please wait a bit...",
                            o.className = "antirobot-form",
                            s.appendChild(r),
                            o.appendChild(i),
                            o.appendChild(s),
                            n.modalCallback(!1, o),
                            t.setCaptcha((function(t) {
                                !function(t) {
                                    e.ajax({
                                        url: n.scriptPath,
                                        dataType: "JSON",
                                        type: "POST",
                                        data: {
                                            "g-recaptcha-response": t
                                        },
                                        error: function() {
                                            console.log("It has been error while ajax request to logged function")
                                        },
                                        success: function(t) {
                                            "ok" === t.status && (document.location.href = t.link),
                                            "wrong captcha" === t.error && (e(".antirobot-form .loading-modal__spinner").hide(0),
                                            e(".antirobot-form .antirobot-title").text("Sorry, the anti-bot check failed. Please try again later."))
                                        }
                                    })
                                }(t)
                            }
                            )))
                        }
                    })
                }
                return a.init = function(t) {
                    (function(e) {
                        n.ranButton = n.ranButton || e.ranButton || "",
                        n.ranButton2 = n.ranButton2 || e.ranButton2 || "",
                        n.scriptPath = n.scriptPath || e.scriptPath || ""
                    }
                    )(t = t || {}),
                    e("." + n.ranButton).on("click", (function(e) {
                        e.preventDefault(),
                        i()
                    }
                    )),
                    e("." + n.ranButton2).on("click", (function(e) {
                        e.preventDefault(),
                        i()
                    }
                    ))
                }
                ,
                a.setModalCallback = function(e) {
                    n.modalCallback = e
                }
                ,
                a
            }(jQuery, ie.captchaV3),
            ie.impression = function(e, t, a) {
                var n = {}
                  , i = {};
                function o() {
                    e("[data-" + n.idAttr + "]").parent().each((function() {
                        var a = e(this);
                        t.inViewport(a, 0) && a.addClass(n.inViewClass)
                    }
                    ))
                }
                function s() {
                    e(window).on("scroll", (function() {
                        o()
                    }
                    )),
                    e(document).on("click contextmenu", "[data-" + n.idAttr + "]", (function() {
                        var t, i, s, r;
                        o(),
                        t = e(this),
                        i = e("." + n.inViewClass),
                        s = i.last().index(),
                        r = {},
                        e("[data-" + n.idAttr + "]").parent().not("." + n.inViewClass).each((function() {
                            if (!(e(this).index() <= s))
                                return !1;
                            e(this).addClass(n.inViewClass)
                        }
                        )),
                        r.t = [],
                        (i = e("." + n.inViewClass)).each((function() {
                            r.t.push(e(this).find("[data-" + n.idAttr + "]").attr("data-" + n.idAttr))
                        }
                        )),
                        r.c = t.attr("data-" + n.idAttr),
                        r.u = navigator.userAgent,
                        r.r = window.location.href,
                        r.ct = n.cid,
                        r.ib = n.isBookmark,
                        a.setCookie(n.cookieName, JSON.stringify(r), {
                            path: "/",
                            expires: 600
                        })
                    }
                    ))
                }
                function r() {
                    var t, i, o, s, r = a.getCookie(n.cookieName);
                    void 0 !== r && (t = n.logPath,
                    i = "POST",
                    s = function() {
                        a.delCookie(n.cookieName)
                    }
                    ,
                    (o = r) || (o = ""),
                    e.ajax({
                        url: t,
                        type: i,
                        dataType: "json",
                        data: o,
                        complete: function() {
                            s()
                        }
                    }))
                }
                return i.init = function(e) {
                    switch (function(e) {
                        n.idAttr = e.idAttr,
                        n.inViewClass = e.inViewClass,
                        n.cookieName = e.cookieName,
                        n.logPath = e.logPath,
                        n.cid = e.cid,
                        n.isBookmark = e.isBookmark
                    }(e = e || {}),
                    r(),
                    a.getPageType()) {
                    case "category":
                    case "category_recent_2":
                    case "tags":
                    case "tags_recent":
                        s(),
                        o()
                    }
                }
                ,
                i
            }(jQuery, ie.inViewPort, ie.utilities),
            ie.impressionModels = function(e, t, a) {
                var n = {}
                  , i = {};
                function o(t) {
                    var i = e("." + n.inViewClass)
                      , o = i.last().index()
                      , s = {};
                    e("[data-" + n.idAttr + "]").parent().not("." + n.inViewClass).each((function() {
                        if (!(e(this).index() <= o))
                            return !1;
                        e(this).addClass(n.inViewClass)
                    }
                    )),
                    s.t = [],
                    (i = e("." + n.inViewClass)).each((function() {
                        s.t.push(e(this).find("[data-" + n.idAttr + "]").attr("data-" + n.idAttr))
                    }
                    )),
                    s.c = t.attr("data-" + n.idAttr),
                    s.u = navigator.userAgent,
                    s.r = window.location.href,
                    s.type = function() {
                        switch (a.getPageType()) {
                        case "new-models":
                        case "new-models-filters":
                            return "model";
                        case "new-models-channels":
                            return "channel"
                        }
                    }(),
                    s.ib = n.isBookmark,
                    a.setCookie(n.cookieName, JSON.stringify(s), {
                        path: "/",
                        expires: 600
                    })
                }
                function s() {
                    e("[data-" + n.idAttr + "]").parent().each((function() {
                        var a = e(this);
                        t.inViewport(a, 0) && a.addClass(n.inViewClass)
                    }
                    ))
                }
                function r() {
                    var t, i, o, s, r = a.getCookie(n.cookieName);
                    void 0 !== r && (t = n.logPath,
                    i = "POST",
                    s = function() {
                        a.delCookie(n.cookieName)
                    }
                    ,
                    (o = r) || (o = ""),
                    e.ajax({
                        url: t,
                        type: i,
                        dataType: "json",
                        data: o,
                        complete: function() {
                            s()
                        }
                    }))
                }
                return i.init = function(t) {
                    switch (function(e) {
                        n.idAttr = e.idAttr,
                        n.inViewClass = e.inViewClass,
                        n.cookieName = e.cookieName,
                        n.logPath = e.logPath,
                        n.isBookmark = e.isBookmark
                    }(t = t || {}),
                    r(),
                    a.getPageType()) {
                    case "new-models":
                    case "new-models-filters":
                    case "new-models-channels":
                        e(window).on("scroll", (function() {
                            s()
                        }
                        )),
                        e(document).on("click contextmenu", "[data-" + n.idAttr + "]", (function() {
                            s(),
                            o(e(this))
                        }
                        )),
                        s()
                    }
                }
                ,
                i
            }(jQuery, ie.inViewPort, ie.utilities),
            ie.showsClicks = function(e, t, a, n, i, o, s) {
                var r = {}
                  , l = {}
                  , c = 0
                  , u = 0
                  , d = 0
                  , p = 3e3
                  , m = 100
                  , h = "_stats-main"
                  , g = "_bufferStats-main"
                  , f = "_stats-ref"
                  , b = "_stats-search-h"
                  , v = "_isg"
                  , y = 12e5
                  , w = 1
                  , C = "sc_fp"
                  , k = 72e5
                  , _ = .75
                  , P = []
                  , A = null
                  , I = !1
                  , T = 0
                  , E = null
                  , S = {
                    position: "data-index"
                };
                function N(e) {
                    return a.checkUserAgent()
                }
                function D() {
                    var e = "testLocalStorage";
                    try {
                        return localStorage.setItem(e, e),
                        localStorage.removeItem(e),
                        !0
                    } catch (e) {
                        return !1
                    }
                }
                function x(t, a, n) {
                    var i, o, s, l = new XMLHttpRequest, c = r.statsEndPoint;
                    "function" != typeof a && (a = function() {}
                    ),
                    n && (c = n),
                    l.open("POST", c + (new Date).getTime().toString() + (o = 9999999,
                    s = (i = 1e6) - .5 + Math.random() * (o - i + 1),
                    s = Math.round(s)), !0),
                    l.setRequestHeader("Content-Type", "application/json"),
                    l.onload = function() {
                        200 === this.status || this.status,
                        a()
                    }
                    ,
                    l.onerror = function() {
                        a()
                    }
                    ,
                    e.isEmptyObject(t) && (t = {
                        empty: 0
                    }),
                    l.send(JSON.stringify(t))
                }
                function L(e, t, a) {
                    var n, i, o = e.split(",");
                    return t && (t = JSON.parse(t)),
                    t && (void 0 === t.categories[a] && (t.categories[a] = {}),
                    i = t.categories[a]),
                    t && void 0 !== i.s && (n = i.s),
                    o && n ? (o = Array.prototype.filter.call(o, (function(e) {
                        return !n.includes(e)
                    }
                    )),
                    Array.prototype.join.call(o)) : e
                }
                function M(e, t) {
                    var a = {};
                    return a.t = (new Date).getTime(),
                    a.s = e.split(","),
                    a.c = t.split(","),
                    a
                }
                function B(e) {
                    var t = {};
                    return Array.prototype.filter.call(e, (function(e) {
                        return e in t ? 0 : t[e] = 1
                    }
                    ))
                }
                function O(e) {
                    return -1 !== e.indexOf("google")
                }
                function U() {
                    var e;
                    null !== (e = F()) && (new Date).getTime() - e.time > y && localStorage.removeItem(v)
                }
                function j() {
                    var e;
                    e = {
                        mark: 1,
                        time: (new Date).getTime()
                    },
                    localStorage.setItem(v, JSON.stringify(e))
                }
                function F() {
                    var e = localStorage.getItem(v);
                    return null !== e && (e = JSON.parse(e)),
                    e
                }
                function R() {
                    var e = localStorage.getItem(h);
                    e && (e = JSON.parse(e)).categories && (e = function(e) {
                        var t = (new Date).getTime();
                        for (var a in e.categories)
                            t - e.categories[a].t > k && delete e.categories[a];
                        return e
                    }(e),
                    localStorage.setItem(h, JSON.stringify(e)))
                }
                function V(e) {
                    if (P.lastViewed !== P.viewedAmount) {
                        var t, a = localStorage.getItem(h);
                        if ((t = L(t = Array.prototype.join.call(P.contentIds.slice(P.lastViewed, P.viewedAmount)), a, P.cid)) && q(t),
                        P.lastViewed = P.viewedAmount,
                        P.userAgent && t) {
                            var n = {};
                            n.fp = s.getUUID(),
                            n.referrer = P.referrer,
                            n.ua = P.userAgent,
                            n.lang = P.lang,
                            n.device = P.device,
                            n.cid = P.cid,
                            n.viewed = t,
                            n.type = r.type,
                            n.domain = P.domain,
                            n.bookmark = parseInt(o.getUserBookmarkStatus()),
                            null !== A && "category_rotator_maps" === n.type && I && (I = !1,
                            n.token = A),
                            O(document.referrer) && (U(),
                            null === F() && (n.inpoint = !0,
                            j())),
                            "gallery_gc" === n.type || "gallery" === n.type || "gallery_frame" === n.type || "gallery_thumbspw" === n.type || "gallery_shemale" === n.type ? x(n, (function() {
                                P.contentList.length === P.lastViewed && "function" == typeof e && e()
                            }
                            ), "https://ulive.pornpics.com/asea?rnd=") : "search" === n.type || "search_recent" === n.type || "search_sponsor" === n.type ? (x(n, (function() {}
                            ), "https://usd.pornpics.com/?rnd="),
                            x(G(n), (function() {}
                            )),
                            x(G(n), (function() {
                                P.contentList.length === P.lastViewed && "function" == typeof e && e()
                            }
                            ), "https://ulive.pornpics.com/asea?rnd=")) : "category_rotator_maps" === n.type || "tag_rotator_maps" === n.type ? (x(n, (function() {}
                            ), "https://rsd.pornpics.com/?rnd="),
                            x(n, (function() {}
                            ), "https://ulive.pornpics.com/asea?rnd="),
                            x(n, (function() {
                                P.contentList.length === P.lastViewed && "function" == typeof e && e()
                            }
                            ))) : "main" === n.type ? (x(n, (function() {}
                            ), "https://ulive.pornpics.com/asea?rnd="),
                            x(n, (function() {}
                            ), "https://live.pornpics.com/asea?rnd="),
                            x(n, (function() {
                                P.contentList.length === P.lastViewed && "function" == typeof e && e()
                            }
                            ))) : (x(n, (function() {}
                            ), "https://ulive.pornpics.com/asea?rnd="),
                            x(n, (function() {
                                P.contentList.length === P.lastViewed && "function" == typeof e && e()
                            }
                            )))
                        }
                    }
                }
                function H(e) {
                    var t = {};
                    for (let a in e)
                        t[a] = e[a];
                    return t
                }
                function G(e) {
                    return "" === r.pageSubType || (e.type = r.pageSubType),
                    e
                }
                function z(e) {
                    return void 0 === e.subType || (e.type = e.subType,
                    delete e.subType),
                    e
                }
                function q(e, t) {
                    var a, n = localStorage.getItem(h);
                    void 0 === t && (t = ""),
                    n ? a = void 0 === (n = JSON.parse(n)).categories[P.cid] ? M(e, t) : function(e, t, a) {
                        var n = (new Date).getTime();
                        return t && a.c && (t = B(t = a.c.concat(t.split(","))),
                        a.c = t),
                        e && a.s && (e = B(e = a.s.concat(e.split(","))),
                        a.s = e),
                        a.t = n,
                        a
                    }(e, t, n.categories[P.cid]) : ((n = {}).categories = {},
                    a = M(e, t)),
                    n.categories[P.cid] = a,
                    localStorage.setItem(h, JSON.stringify(n))
                }
                function W() {
                    var e, t, a, n = document.getElementById(r.wookmarkContainerID), i = n.querySelectorAll("." + r.wookmarkThumbClass);
                    (P.contentList = [],
                    P.contentIds = [],
                    P.contentPositions = [],
                    0 !== i.length) && (e = function(e) {
                        var t = [];
                        return e.map((function(e) {
                            var a = e.children[0];
                            try {
                                t.push(a.getAttribute(r.IDAttributeName))
                            } catch (e) {}
                        }
                        )),
                        t
                    }(i = function(e) {
                        return (e = Array.prototype.filter.call(e, (function(e) {
                            return !(e.classList.contains(r.wookmarkAdClass) || e.classList.contains(r.wookmarkAdNativeClass) || e.classList.contains(r.wookmarkPlayerClass) || e.classList.contains(r.logoClass))
                        }
                        ))).sort((function(e, t) {
                            return e.getBoundingClientRect().top + e.offsetHeight - (t.getBoundingClientRect().top + t.offsetHeight)
                        }
                        )),
                        e
                    }(i)),
                    t = function(e, t) {
                        var a = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                          , n = document.documentElement.clientTop || document.body.clientTop || 0
                          , i = Math.floor(a - n);
                        return Array.prototype.map.call(e, (function(e) {
                            return Math.floor(e.getBoundingClientRect().top + i + e.offsetHeight * _)
                        }
                        ))
                    }(i),
                    P.contentList = P.contentList.concat(i),
                    P.contentIds = P.contentIds.concat(e),
                    P.contentPositions = P.contentPositions.concat(t),
                    a = document.documentElement.clientHeight,
                    T = a,
                    V())
                }
                function J() {
                    var e = function(e, t) {
                        var a, n = 0, i = window.pageYOffset + T;
                        for (a = e - 1; a >= 0; a--)
                            if (t[a] < i) {
                                n = a + 1;
                                break
                            }
                        return n
                    }(P.contentList.length, P.contentPositions);
                    P.viewedAmount < e && (P.viewedAmount = e)
                }
                function Y(e) {
                    if (!(e.classList.contains(r.wookmarkAdClass) || e.classList.contains(r.logoClass) || e.classList.contains(r.wookmarkAdNativeClass) || e.classList.contains(r.wookmarkPlayerClass))) {
                        var t, a, i = e.children[0].getAttribute(r.IDAttributeName), l = e.children[0].getAttribute(S.position), c = localStorage.getItem(h);
                        if (P.viewedAmount = function(e, t, a) {
                            var n = t.indexOf(e);
                            return n > a ? n + 1 : a
                        }(i, P.contentIds, P.viewedAmount),
                        t = L(t = Array.prototype.join.call(P.contentIds.slice(P.lastViewed, P.viewedAmount)), c, P.cid),
                        a = function(e, t, a) {
                            var n, i, o = e.split(",");
                            return t && (t = JSON.parse(t)),
                            t && (void 0 === t.categories[a] && (t.categories[a] = {}),
                            i = t.categories[a]),
                            t && void 0 !== i.c && (n = i.c),
                            o && n ? (o = Array.prototype.filter.call(o, (function(e) {
                                return !n.includes(e)
                            }
                            )),
                            Array.prototype.join.call(o)) : e
                        }(i, c, P.cid),
                        (t || a) && q(t, a),
                        P.lastViewed = P.viewedAmount,
                        P.userAgent && a) {
                            var u = {}
                              , d = g;
                            if (u.fp = s.getUUID(),
                            u.referrer = P.referrer,
                            u.ua = P.userAgent,
                            u.lang = P.lang,
                            u.device = P.device,
                            u.cid = P.cid,
                            u.viewed = t,
                            u.clicked = a,
                            u.type = r.type,
                            u.domain = P.domain,
                            u.bookmark = parseInt(o.getUserBookmarkStatus()),
                            function() {
                                var e;
                                if ("search" !== r.type)
                                    return !1;
                                if (null === E) {
                                    if (!(e = localStorage.getItem(b)))
                                        return !1;
                                    e = JSON.parse(e),
                                    E = e
                                }
                                return void 0 !== E.c[P.cid]
                            }() && (u.input = !0),
                            null !== l && (u.index = l),
                            O(document.referrer) && (U(),
                            null === F() && (u.inpoint = !0,
                            j())),
                            "search" !== u.type && "search_sponsor" !== u.type && "search_recent" !== u.type || "" !== r.pageSubType && (u.subType = r.pageSubType),
                            ("gallery_gc" === u.type || "gallery" === u.type || "gallery_frame" === u.type || "gallery_thumbspw" === u.type || "gallery_shemale" === u.type) && n.mobile())
                                return void x(u, (function() {}
                                ), "https://ulive.pornpics.com/asea?rnd=");
                            localStorage.setItem(d, JSON.stringify(u))
                        }
                    }
                }
                function Q() {
                    var e, t, i;
                    !N(P.userAgent) && navigator.cookieEnabled && D() && ((i = localStorage.getItem(g)) && ("gallery_gc" === (e = JSON.parse(i)).type || "gallery" === e.type || "gallery_frame" === e.type || "gallery_thumbspw" === e.type || "gallery_shemale" === e.type ? x(e, (function() {}
                    ), "https://ulive.pornpics.com/asea?rnd=") : "search" === e.type || "search_recent" === e.type || "search_sponsor" === e.type ? (x(z(H(e))),
                    x(z(H(e)), (function() {}
                    ), "https://ulive.pornpics.com/asea?rnd="),
                    x((delete (t = e).subType,
                    t), (function() {}
                    ), "https://usd.pornpics.com/?rnd=")) : "category_rotator_maps" === e.type || "tag_rotator_maps" === e.type ? (x(e, (function() {}
                    ), "https://rsd.pornpics.com/?rnd="),
                    x(e, (function() {}
                    ), "https://ulive.pornpics.com/asea?rnd="),
                    x(e)) : "main" === e.type ? (x(e, (function() {}
                    ), "https://ulive.pornpics.com/asea?rnd="),
                    x(e, (function() {}
                    ), "https://live.pornpics.com/asea?rnd="),
                    x(e, (function() {}
                    ), "https://rsd.pornpics.com/?rnd=")) : (x(e, (function() {}
                    ), "https://ulive.pornpics.com/asea?rnd="),
                    x(e)),
                    localStorage.removeItem(g)),
                    "on" !== r.dontWatchTrigger && "" !== r.pageType && "" !== r.id && ("undefined" !== a.getCookie(C) && a.delCookie(C),
                    R(),
                    function() {
                        var e = a.getCookie(f);
                        if (e)
                            P.referrer = e;
                        else {
                            var t = new Date;
                            t.setHours(t.getHours() + w),
                            P.referrer = document.referrer,
                            a.setCookie(f, P.referrer, {
                                path: "/",
                                domain: "",
                                expires: t
                            })
                        }
                    }(),
                    W(),
                    J(),
                    P.lang = navigator.language || navigator.userLanguage,
                    n.mobile() ? P.device = "mobile" : P.device = "desktop",
                    document.getElementById(r.wookmarkContainerID).addEventListener("click", (function(e) {
                        for (var t = e.target; t.getAttribute("id") !== r.wookmarkContainerID; ) {
                            if (t.classList.contains(r.wookmarkThumbClass)) {
                                if (null !== t.children[0].getAttribute("data-ignore"))
                                    return;
                                return void Y(t)
                            }
                            t = t.parentNode
                        }
                    }
                    )),
                    c = setInterval((function() {
                        V((function() {
                            clearInterval(c)
                        }
                        ))
                    }
                    ), p),
                    window.addEventListener("scroll", (function() {
                        clearTimeout(d),
                        d = setTimeout((function() {
                            J()
                        }
                        ), m)
                    }
                    )),
                    window.addEventListener("resize", (function() {
                        clearTimeout(u),
                        u = setTimeout((function() {
                            W(),
                            J()
                        }
                        ), m)
                    }
                    ))))
                }
                function X(e) {
                    var t = void 0 === e ? "noQuery" : e;
                    return (t = t.split("&date=latest"))[0]
                }
                function K(e) {
                    return e.replace(/\/tags\//gm, "").replace(/\/recent\//gm, "").replace(/\//gm, "").replace(/-/gm, "+")
                }
                function Z(e) {
                    return e.split("/")[2]
                }
                return l.init = function(e) {
                    switch (function(e) {
                        r.id = e.id || "",
                        r.pageType = e.pageType || "",
                        r.statsEndPoint = e.statsEndPoint,
                        r.wookmarkContainerID = e.wookmarkContainerID,
                        r.wookmarkThumbClass = e.wookmarkThumbClass,
                        r.wookmarkAdClass = e.wookmarkAdClass,
                        r.wookmarkAdNativeClass = e.wookmarkAdNativeClass,
                        r.wookmarkPlayerClass = e.wookmarkPlayerClass || "",
                        r.logoClass = e.logoClass,
                        r.IDAttributeName = e.IDAttributeName,
                        r.type = r.pageType,
                        r.dontWatchTrigger = e.dontWatchTrigger || "off",
                        r.pageSubType = e.pageSubType || "",
                        P.cid = r.id,
                        P.userAgent = navigator.userAgent,
                        P.viewedAmount = 0,
                        P.lastViewed = 0,
                        P.contentList = [],
                        P.contentIds = [],
                        P.contentPositions = [],
                        P.referrer = "",
                        P.lang = "",
                        P.device = "",
                        P.domain = location.host.indexOf("www.") && location.host || location.host.replace("www.", ""),
                        P.domain = (t = P.domain,
                        "com" !== (t = t.split("."))[t.length - 1] ? (t[t.length - 1] = "com",
                        t = t.join(".")) : t = t.join("."),
                        t);
                        var t
                    }(e = e || {}),
                    a.getPageType()) {
                    case "search":
                    case "search_recent":
                    case "search_sponsor":
                        P.cid = X(QUERY),
                        r.id = X(QUERY);
                        break;
                    case "tags":
                    case "tags_recent":
                        P.cid = K(document.location.pathname),
                        r.id = K(document.location.pathname);
                        break;
                    case "models_filters":
                        P.cid = Z(document.location.pathname),
                        r.id = Z(document.location.pathname)
                    }
                    switch (Q(),
                    a.getPageType()) {
                    case "category":
                    case "gallery_gc":
                    case "gallery":
                    case "gallery_frame":
                    case "gallery_thumbspw":
                    case "gallery_shemale":
                    case "category_shemale_rotator_maps":
                    case "category_shemale":
                    case "category_shemale_recent":
                    case "category_rotator_maps":
                    case "tag_rotator_maps":
                        !function() {
                            if (!N(P.userAgent) && navigator.cookieEnabled && D() && "" !== r.pageType && "" !== r.id) {
                                var e = {};
                                switch (e.fp = s.getUUID(),
                                e.referrer = P.referrer,
                                e.ua = P.userAgent,
                                e.lang = P.lang,
                                e.device = P.device,
                                e.type = r.type,
                                e.domain = P.domain,
                                e.subReferrer = document.referrer,
                                e.bookmark = o.getUserBookmarkStatus(),
                                a.getPageType()) {
                                case "category":
                                case "category_recent":
                                    e.type = a.getPageType() + "_ue",
                                    e.cid = P.cid,
                                    x(e, (function() {}
                                    ), "https://ulive.pornpics.com/asea?rnd="),
                                    x(e);
                                    break;
                                case "gallery_gc":
                                case "gallery":
                                case "gallery_frame":
                                case "gallery_thumbspw":
                                case "gallery_shemale":
                                    e.type = a.getPageType() + "_ue",
                                    e.cid = P.cid,
                                    x(e, (function() {}
                                    ), "https://ulive.pornpics.com/asea?rnd=");
                                    break;
                                case "category_shemale_rotator_maps":
                                case "category_shemale":
                                case "category_shemale_recent":
                                case "category_rotator_maps":
                                case "tag_rotator_maps":
                                    e.type = e.type + "_ue",
                                    e.cid = P.cid,
                                    x(e, (function() {}
                                    ), "https://ulive.pornpics.com/asea?rnd="),
                                    x(e)
                                }
                            }
                        }()
                    }
                }
                ,
                l.updateShowsClicksWatcher = function() {
                    W(),
                    J()
                }
                ,
                l
            }(jQuery, ie.inViewPort, ie.utilities, device, ie.categorySlugHistory, ie.userBookmarks, ie.uuid),
            ie.showsClicksRel = function(e, t, a, n, i, o, s, r, l) {
                var c = {}
                  , u = {}
                  , d = 0
                  , p = 0
                  , m = 0
                  , h = 3e3
                  , g = 100
                  , f = "_stats-main"
                  , b = "_bufferStats-main-rel"
                  , v = "_stats-ref"
                  , y = 1
                  , w = "sc_fp"
                  , C = 72e5
                  , k = .75
                  , _ = []
                  , P = 0;
                function A(e, t, a) {
                    var n, i, o, s = new XMLHttpRequest, r = c.statsEndPoint;
                    "function" != typeof t && (t = function() {}
                    ),
                    a && (r = a),
                    s.open("POST", r + (new Date).getTime().toString() + (i = 9999999,
                    o = (n = 1e6) - .5 + Math.random() * (i - n + 1),
                    o = Math.round(o)), !0),
                    s.setRequestHeader("Content-Type", "application/json"),
                    s.onload = function() {
                        200 === this.status || this.status,
                        t()
                    }
                    ,
                    s.onerror = function() {
                        t()
                    }
                    ,
                    s.send(JSON.stringify(e))
                }
                function I(e, t, a) {
                    var n, i, o = e.split(",");
                    return t && (t = JSON.parse(t)),
                    t && (void 0 === t.categories[a] && (t.categories[a] = {}),
                    i = t.categories[a]),
                    t && void 0 !== i.s && (n = i.s),
                    o && n ? (o = Array.prototype.filter.call(o, (function(e) {
                        return !n.includes(e)
                    }
                    )),
                    Array.prototype.join.call(o)) : e
                }
                function T(e, t) {
                    var a = {};
                    return a.t = (new Date).getTime(),
                    a.s = e.split(","),
                    a.c = t.split(","),
                    a
                }
                function E(e) {
                    var t = {};
                    return Array.prototype.filter.call(e, (function(e) {
                        return e in t ? 0 : t[e] = 1
                    }
                    ))
                }
                function S() {
                    var e = localStorage.getItem(f);
                    e && (e = JSON.parse(e)).categories && (e = function(e) {
                        var t = (new Date).getTime();
                        for (var a in e.categories)
                            t - e.categories[a].t > C && delete e.categories[a];
                        return e
                    }(e),
                    localStorage.setItem(f, JSON.stringify(e)))
                }
                function N(e) {
                    if (_.lastViewed !== _.viewedAmount) {
                        var t, a = localStorage.getItem(f);
                        if ((t = I(t = Array.prototype.join.call(_.contentIds.slice(_.lastViewed, _.viewedAmount)), a, _.cid)) && D(t),
                        _.lastViewed = _.viewedAmount,
                        _.userAgent && t) {
                            var n = {};
                            n.fp = l.getUUID(),
                            n.referrer = _.referrer,
                            n.ua = _.userAgent,
                            n.lang = _.lang,
                            n.device = _.device,
                            n.cid = _.cid,
                            n.viewed = t,
                            n.domain = _.domain,
                            n.bookmark = parseInt(s.getUserBookmarkStatus()),
                            n.rel = 1,
                            null !== r.getRelatedPageType() ? (n.type = r.getRelatedPageType(),
                            A(n, (function() {}
                            ), c.statsEndPointRSD)) : n.type = c.type,
                            A(n, (function() {}
                            ), "https://ulive.pornpics.com/asea/?rnd="),
                            A(n, (function() {
                                _.contentList.length === _.lastViewed && "function" == typeof e && e()
                            }
                            ))
                        }
                    }
                }
                function D(e, t) {
                    var a, n = localStorage.getItem(f);
                    void 0 === t && (t = ""),
                    n ? a = void 0 === (n = JSON.parse(n)).categories[_.cid] ? T(e, t) : function(e, t, a) {
                        var n = (new Date).getTime();
                        return t && a.c && (t = E(t = a.c.concat(t.split(","))),
                        a.c = t),
                        e && a.s && (e = E(e = a.s.concat(e.split(","))),
                        a.s = e),
                        a.t = n,
                        a
                    }(e, t, n.categories[_.cid]) : ((n = {}).categories = {},
                    a = T(e, t)),
                    n.categories[_.cid] = a,
                    localStorage.setItem(f, JSON.stringify(n))
                }
                function x() {
                    var e, t, a, n = document.getElementById(c.wookmarkContainerID), i = n.querySelectorAll("." + c.wookmarkThumbClass);
                    (_.contentList = [],
                    _.contentIds = [],
                    _.contentPositions = [],
                    0 !== i.length) && (e = function(e) {
                        var t = [];
                        return e.map((function(e) {
                            var a = e.children[0];
                            try {
                                t.push(a.getAttribute(c.IDAttributeName))
                            } catch (e) {}
                        }
                        )),
                        t
                    }(i = function(e) {
                        return (e = Array.prototype.filter.call(e, (function(e) {
                            return !e.classList.contains(c.wookmarkAdClass) && !e.classList.contains(c.wookmarkAdNativeClass) && !e.classList.contains(c.logoClass)
                        }
                        ))).sort((function(e, t) {
                            return e.getBoundingClientRect().top + e.offsetHeight - (t.getBoundingClientRect().top + t.offsetHeight)
                        }
                        )),
                        e
                    }(i)),
                    t = function(e, t) {
                        var a = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                          , n = document.documentElement.clientTop || document.body.clientTop || 0
                          , i = Math.floor(a - n);
                        return Array.prototype.map.call(e, (function(e) {
                            return Math.floor(e.getBoundingClientRect().top + i + e.offsetHeight * k)
                        }
                        ))
                    }(i),
                    _.contentList = _.contentList.concat(i),
                    _.contentIds = _.contentIds.concat(e),
                    _.contentPositions = _.contentPositions.concat(t),
                    a = document.documentElement.clientHeight,
                    P = a,
                    N())
                }
                function L() {
                    var e = function(e, t) {
                        var a, n = 0, i = window.pageYOffset + P;
                        for (a = e - 1; a >= 0; a--)
                            if (t[a] < i) {
                                n = a + 1;
                                break
                            }
                        return n
                    }(_.contentList.length, _.contentPositions);
                    _.viewedAmount < e && (_.viewedAmount = e)
                }
                function M(e) {
                    if (!(e.classList.contains(c.wookmarkAdClass) || e.classList.contains(c.logoClass) || e.classList.contains(c.wookmarkAdNativeClass)) && null != e.children[0].getAttribute(c.IDAttributeName)) {
                        var t, a, n = e.children[0].getAttribute(c.IDAttributeName), i = localStorage.getItem(f);
                        if (_.viewedAmount = function(e, t, a) {
                            var n = t.indexOf(e);
                            return n > a ? n + 1 : a
                        }(n, _.contentIds, _.viewedAmount),
                        t = I(t = Array.prototype.join.call(_.contentIds.slice(_.lastViewed, _.viewedAmount)), i, _.cid),
                        a = function(e, t, a) {
                            var n, i, o = e.split(",");
                            return t && (t = JSON.parse(t)),
                            t && (void 0 === t.categories[a] && (t.categories[a] = {}),
                            i = t.categories[a]),
                            t && void 0 !== i.c && (n = i.c),
                            o && n ? (o = Array.prototype.filter.call(o, (function(e) {
                                return !n.includes(e)
                            }
                            )),
                            Array.prototype.join.call(o)) : e
                        }(n, i, _.cid),
                        (t || a) && D(t, a),
                        _.lastViewed = _.viewedAmount,
                        _.userAgent && a) {
                            var o = {}
                              , u = b;
                            o.fp = l.getUUID(),
                            o.referrer = _.referrer,
                            o.ua = _.userAgent,
                            o.lang = _.lang,
                            o.device = _.device,
                            o.cid = _.cid,
                            o.viewed = t,
                            o.clicked = a,
                            o.domain = _.domain,
                            o.bookmark = parseInt(s.getUserBookmarkStatus()),
                            o.rel = 1,
                            null !== r.getRelatedPageType() ? o.type = r.getRelatedPageType() : o.type = c.type,
                            localStorage.setItem(u, JSON.stringify(o))
                        }
                    }
                }
                function B() {
                    var e, t;
                    (_.userAgent,
                    !a.checkUserAgent() && navigator.cookieEnabled && function() {
                        var e = "testLocalStorage";
                        try {
                            return localStorage.setItem(e, e),
                            localStorage.removeItem(e),
                            !0
                        } catch (e) {
                            return !1
                        }
                    }()) && ((t = localStorage.getItem(b)) && ("gallery_gc" === (e = JSON.parse(t)).type ? (A(e),
                    A(e, (function() {}
                    ), "https://ulive.pornpics.com/asea/?rnd="),
                    delete e.slug,
                    A(e, (function() {}
                    ), "https://live.pornpics.com/gsea/?rnd=")) : (A(e),
                    A(e, (function() {}
                    ), "https://ulive.pornpics.com/asea/?rnd="),
                    A(e, (function() {}
                    ), c.statsEndPointRSD)),
                    localStorage.removeItem(b)),
                    "" !== c.pageType && "" !== c.id && void 0 !== c.id && ("undefined" !== a.getCookie(w) && a.delCookie(w),
                    S(),
                    function() {
                        var e = a.getCookie(v);
                        if (e)
                            _.referrer = e;
                        else {
                            var t = new Date;
                            t.setHours(t.getHours() + y),
                            _.referrer = document.referrer,
                            a.setCookie(v, _.referrer, {
                                path: "/",
                                domain: "",
                                expires: t
                            })
                        }
                    }(),
                    x(),
                    L(),
                    _.lang = navigator.language || navigator.userLanguage,
                    n.mobile() ? _.device = "mobile" : _.device = "desktop",
                    document.getElementById(c.wookmarkContainerID).addEventListener("click", (function(e) {
                        for (var t = e.target; t.getAttribute("id") !== c.wookmarkContainerID; ) {
                            if (t.classList.contains(c.wookmarkThumbClass)) {
                                if (null !== t.children[0].getAttribute("data-ignore"))
                                    return;
                                return void M(t)
                            }
                            t = t.parentNode
                        }
                    }
                    )),
                    d = setInterval((function() {
                        N((function() {
                            clearInterval(d)
                        }
                        ))
                    }
                    ), h),
                    window.addEventListener("scroll", (function() {
                        clearTimeout(m),
                        m = setTimeout((function() {
                            L()
                        }
                        ), g)
                    }
                    )),
                    window.addEventListener("resize", (function() {
                        clearTimeout(p),
                        p = setTimeout((function() {
                            x(),
                            L()
                        }
                        ), g)
                    }
                    ))))
                }
                return u.init = function(e) {
                    (function(e) {
                        c.id = e.id || "",
                        c.pageType = e.pageType || "",
                        c.statsEndPoint = e.statsEndPoint,
                        c.statsEndPointRSD = e.statsEndPointRSD,
                        c.wookmarkContainerID = e.wookmarkContainerID,
                        c.wookmarkThumbClass = e.wookmarkThumbClass,
                        c.wookmarkAdClass = e.wookmarkAdClass,
                        c.wookmarkAdNativeClass = e.wookmarkAdNativeClass,
                        c.logoClass = e.logoClass,
                        c.IDAttributeName = e.IDAttributeName,
                        c.type = c.pageType,
                        _.cid = c.id,
                        _.userAgent = navigator.userAgent,
                        _.viewedAmount = 0,
                        _.lastViewed = 0,
                        _.contentList = [],
                        _.contentIds = [],
                        _.contentPositions = [],
                        _.referrer = "",
                        _.lang = "",
                        _.device = "",
                        _.domain = location.host.indexOf("www.") && location.host || location.host.replace("www.", ""),
                        _.domain = (t = _.domain,
                        "com" !== (t = t.split("."))[t.length - 1] ? (t[t.length - 1] = "com",
                        t = t.join(".")) : t = t.join("."),
                        t);
                        var t
                    }
                    )(e = e || {}),
                    _.cid = i.getSlugID(),
                    c.id = i.getSlugID(),
                    B()
                }
                ,
                u.updateShowsClicksWatcher = function() {
                    void 0 !== c.id && (x(),
                    L())
                }
                ,
                u
            }(jQuery, ie.inViewPort, ie.utilities, device, ie.categorySlugHistory, ie.showsClicks, ie.userBookmarks, ie.related, ie.uuid),
            ie.showsClicksTags = function(e, t, a, n, i, o) {
                var s = {}
                  , r = {}
                  , l = 0
                  , c = "_stats-tags-main"
                  , u = "_bufferStats-tags-main"
                  , d = "_stats--tags-ref"
                  , p = "_stats-search-h"
                  , m = 1
                  , h = "sc_fp"
                  , g = 72e5
                  , f = .75
                  , b = []
                  , v = 0
                  , y = null;
                function w(e, t, a) {
                    var n, i, o, r = new XMLHttpRequest, l = s.statsEndPoint;
                    "function" != typeof t && (t = function() {}
                    ),
                    a && (l = a),
                    r.open("POST", l + (new Date).getTime().toString() + (i = 9999999,
                    o = (n = 1e6) - .5 + Math.random() * (i - n + 1),
                    o = Math.round(o)), !0),
                    r.setRequestHeader("Content-Type", "application/json"),
                    r.onload = function() {
                        200 === this.status || this.status,
                        t()
                    }
                    ,
                    r.onerror = function() {
                        t()
                    }
                    ,
                    r.send(JSON.stringify(e))
                }
                function C(e, t, a) {
                    var n, i, o = e.split(",");
                    return t && (t = JSON.parse(t)),
                    t && (void 0 === t.categories[a] && (t.categories[a] = {}),
                    i = t.categories[a]),
                    t && void 0 !== i.s && (n = i.s),
                    o && n ? (o = Array.prototype.filter.call(o, (function(e) {
                        return !n.includes(e)
                    }
                    )),
                    Array.prototype.join.call(o)) : e
                }
                function k(e, t) {
                    var a = {};
                    return a.t = (new Date).getTime(),
                    a.s = e.split(","),
                    a.c = t.split(","),
                    a
                }
                function _(e) {
                    var t = {};
                    return Array.prototype.filter.call(e, (function(e) {
                        return e in t ? 0 : t[e] = 1
                    }
                    ))
                }
                function P(e) {
                    var t, a, n, i, o = document.getElementById(s.wookmarkContainerID);
                    if (!o.classList.contains("enable-button"))
                        return !0;
                    t = o.querySelectorAll("li"),
                    a = o.querySelectorAll(".submenu-item");
                    for (var r = 0; r < t.length; r++)
                        t[r].classList.contains("slide-button") ? n = r : t[r].querySelector("a").getAttribute("href") === a[e].querySelector("a").getAttribute("href") && (i = r);
                    return n > i
                }
                function A() {
                    var e = localStorage.getItem(c);
                    e && (e = JSON.parse(e)).categories && (e = function(e) {
                        var t = (new Date).getTime();
                        for (var a in e.categories)
                            t - e.categories[a].t > g && delete e.categories[a];
                        return e
                    }(e),
                    localStorage.setItem(c, JSON.stringify(e)))
                }
                function I(e) {
                    if (b.lastViewed !== b.viewedAmount) {
                        var t, a = localStorage.getItem(c);
                        if ((t = C(t = Array.prototype.join.call(b.contentIds.slice(b.lastViewed, b.viewedAmount)), a, b.cid)) && T(t),
                        b.lastViewed = b.viewedAmount,
                        b.userAgent && t) {
                            var n = {};
                            n.fp = o.getUUID(),
                            n.referrer = b.referrer,
                            n.ua = b.userAgent,
                            n.lang = b.lang,
                            n.device = b.device,
                            n.cid = b.cid,
                            n.viewed = t,
                            n.type = s.type,
                            n.domain = b.domain,
                            n.bookmark = parseInt(i.getUserBookmarkStatus()),
                            null === s.reserveSlugId ? null !== s.slugId && (n.cid = s.slugId.toString()) : n.cid = s.reserveSlugId.toString(),
                            w(n, (function() {
                                b.contentList.length === b.lastViewed && "function" == typeof e && e()
                            }
                            ), s.statsEndPoint2)
                        }
                    }
                }
                function T(e, t) {
                    var a, n = localStorage.getItem(c);
                    void 0 === t && (t = ""),
                    n ? a = void 0 === (n = JSON.parse(n)).categories[b.cid] ? k(e, t) : function(e, t, a) {
                        var n = (new Date).getTime();
                        return t && a.c && (t = _(t = a.c.concat(t.split(","))),
                        a.c = t),
                        e && a.s && (e = _(e = a.s.concat(e.split(","))),
                        a.s = e),
                        a.t = n,
                        a
                    }(e, t, n.categories[b.cid]) : ((n = {}).categories = {},
                    a = k(e, t)),
                    n.categories[b.cid] = a,
                    localStorage.setItem(c, JSON.stringify(n))
                }
                function E() {
                    var e, t, a, n = document.getElementById(s.wookmarkContainerID), i = n.querySelectorAll("." + s.wookmarkThumbClass);
                    (b.contentList = [],
                    b.contentIds = [],
                    b.contentPositions = [],
                    0 !== i.length) && (e = function(e) {
                        var t = [];
                        return e.map((function(e) {
                            var a = e.children[0];
                            try {
                                t.push(a.getAttribute(s.IDAttributeName))
                            } catch (e) {}
                        }
                        )),
                        t
                    }(i = function(e) {
                        return (e = Array.prototype.filter.call(e, (function(e) {
                            return !e.classList.contains(s.wookmarkAdClass) && !e.classList.contains(s.wookmarkAdNativeClass) && !e.classList.contains(s.logoClass)
                        }
                        ))).sort((function(e, t) {
                            return e.offsetTop + e.offsetHeight - (t.offsetTop + t.offsetHeight)
                        }
                        )),
                        e
                    }(i)),
                    t = function(e, t) {
                        var a = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                          , n = document.documentElement.clientTop || document.body.clientTop || 0
                          , i = Math.floor(t.getBoundingClientRect().top + a - n);
                        return Array.prototype.map.call(e, (function(e) {
                            return Math.floor(e.offsetTop + i + e.offsetHeight * f)
                        }
                        ))
                    }(i, n),
                    b.contentList = b.contentList.concat(i),
                    b.contentIds = b.contentIds.concat(e),
                    b.contentPositions = b.contentPositions.concat(t),
                    a = document.documentElement.clientHeight,
                    v = a,
                    I())
                }
                function S() {
                    var e = function(e, t) {
                        var a, n = 0, i = window.pageYOffset + v;
                        for (a = e - 1; a >= 0; a--)
                            if (t[a] < i && P(a)) {
                                n = a + 1;
                                break
                            }
                        return n
                    }(b.contentList.length, b.contentPositions);
                    b.viewedAmount < e && (b.viewedAmount = e)
                }
                function N(e) {
                    if (!(e.classList.contains(s.wookmarkAdClass) || e.classList.contains(s.logoClass) || e.classList.contains(s.wookmarkAdNativeClass))) {
                        var t, a, n = e.children[0].getAttribute(s.IDAttributeName), r = localStorage.getItem(c);
                        if (b.viewedAmount = function(e, t, a) {
                            var n = t.indexOf(e);
                            return n > a ? n + 1 : a
                        }(n, b.contentIds, b.viewedAmount),
                        t = C(t = Array.prototype.join.call(b.contentIds.slice(b.lastViewed, b.viewedAmount)), r, b.cid),
                        a = function(e, t, a) {
                            var n, i, o = e.split(",");
                            return t && (t = JSON.parse(t)),
                            t && (void 0 === t.categories[a] && (t.categories[a] = {}),
                            i = t.categories[a]),
                            t && void 0 !== i.c && (n = i.c),
                            o && n ? (o = Array.prototype.filter.call(o, (function(e) {
                                return !n.includes(e)
                            }
                            )),
                            Array.prototype.join.call(o)) : e
                        }(n, r, b.cid),
                        (t || a) && T(t, a),
                        b.lastViewed = b.viewedAmount,
                        b.userAgent && a) {
                            var l = {}
                              , d = u;
                            l.fp = o.getUUID(),
                            l.referrer = b.referrer,
                            l.ua = b.userAgent,
                            l.lang = b.lang,
                            l.device = b.device,
                            l.cid = b.cid,
                            l.viewed = t,
                            l.clicked = a,
                            l.type = s.type,
                            l.domain = b.domain,
                            l.bookmark = i.getUserBookmarkStatus(),
                            null === s.reserveSlugId ? null !== s.slugId && (l.cid = s.slugId.toString()) : l.cid = s.reserveSlugId.toString(),
                            function() {
                                var e;
                                if ("search" !== s.type)
                                    return !1;
                                if (null === y) {
                                    if (!(e = localStorage.getItem(p)))
                                        return !1;
                                    e = JSON.parse(e),
                                    y = e
                                }
                                return void 0 !== y.c[b.cid]
                            }() && (l.input = !0),
                            localStorage.setItem(d, JSON.stringify(l))
                        }
                    }
                }
                function D() {
                    var t;
                    (b.userAgent,
                    !a.checkUserAgent() && navigator.cookieEnabled && function() {
                        var e = "testLocalStorage";
                        try {
                            return localStorage.setItem(e, e),
                            localStorage.removeItem(e),
                            !0
                        } catch (e) {
                            return !1
                        }
                    }()) && ((t = localStorage.getItem(u)) && (w(JSON.parse(t), (function() {}
                    ), s.statsEndPoint2),
                    localStorage.removeItem(u)),
                    "" !== s.pageType && 0 !== e("#tags-section").length && ("undefined" !== a.getCookie(h) && a.delCookie(h),
                    A(),
                    function() {
                        var e = a.getCookie(d);
                        if (e)
                            b.referrer = e;
                        else {
                            var t = new Date;
                            t.setHours(t.getHours() + m),
                            b.referrer = document.referrer,
                            a.setCookie(d, b.referrer, {
                                path: "/",
                                domain: "",
                                expires: t
                            })
                        }
                    }(),
                    E(),
                    S(),
                    b.lang = navigator.language || navigator.userLanguage,
                    n.mobile() ? b.device = "mobile" : b.device = "desktop",
                    document.getElementById(s.wookmarkContainerID).addEventListener("click", (function(e) {
                        for (var t = e.target; t.getAttribute("id") !== s.wookmarkContainerID; ) {
                            if (t.classList.contains(s.wookmarkThumbClass))
                                return void N(t);
                            t = t.parentNode
                        }
                    }
                    )),
                    I((function() {
                        clearInterval(l)
                    }
                    )),
                    document.addEventListener("click", (function(e) {
                        for (var t = e.target; "wrapper" !== t.getAttribute("id"); ) {
                            if (t.classList.contains("slide-button"))
                                return S(),
                                void I((function() {
                                    clearInterval(l)
                                }
                                ));
                            t = t.parentNode
                        }
                    }
                    ))))
                }
                function x(e) {
                    return e.replace(/\/recent\//gm, "").replace(/\/tags\//gm, "").replace(/\//gm, "")
                }
                return r.init = function(e) {
                    switch (function(e) {
                        s.pageType = e.pageType || "",
                        s.statsEndPoint = e.statsEndPoint,
                        s.statsEndPoint2 = e.statsEndPoint2,
                        s.wookmarkContainerID = e.wookmarkContainerID,
                        s.wookmarkThumbClass = e.wookmarkThumbClass,
                        s.wookmarkAdClass = e.wookmarkAdClass,
                        s.wookmarkAdNativeClass = e.wookmarkAdNativeClass,
                        s.logoClass = e.logoClass,
                        s.slugId = e.slugId,
                        s.reserveSlugId = e.reserveSlugId,
                        s.IDAttributeName = e.IDAttributeName,
                        s.type = "tags-all",
                        b.cid = void 0 !== s.pageType ? s.pageType : "",
                        b.userAgent = navigator.userAgent,
                        b.viewedAmount = 0,
                        b.lastViewed = 0,
                        b.contentList = [],
                        b.contentIds = [],
                        b.contentPositions = [],
                        b.referrer = "",
                        b.lang = "",
                        b.device = "",
                        b.domain = location.host.indexOf("www.") && location.host || location.host.replace("www.", ""),
                        b.domain = (t = b.domain,
                        "com" !== (t = t.split("."))[t.length - 1] ? (t[t.length - 1] = "com",
                        t = t.join(".")) : t = t.join("."),
                        t);
                        var t
                    }(e = e || {}),
                    a.getPageType()) {
                    case "category":
                    case "category_rotator_maps":
                    case "tag_rotator_maps":
                        b.cid = x(document.location.pathname),
                        s.pageType = x(document.location.pathname);
                        break;
                    case "popular":
                        b.cid = "popular",
                        s.pageType = "popular";
                        break;
                    case "recent":
                        b.cid = "recent",
                        s.pageType = "recent"
                    }
                    D()
                }
                ,
                r
            }(jQuery, ie.inViewPort, ie.utilities, device, ie.userBookmarks, ie.uuid),
            ie.showsClicksAD = function(e, t, a, n, i) {
                var o = {}
                  , s = {}
                  , r = 0
                  , l = 0
                  , c = 2e3
                  , u = 100
                  , d = "_stats-a-main"
                  , p = "_stats-ref"
                  , m = 1
                  , h = 6e5
                  , g = .75
                  , f = []
                  , b = 0;
                function v(t, a, n) {
                    var i, s, r, l = new XMLHttpRequest, c = o.statsEndPoint;
                    "function" != typeof a && (a = function() {}
                    ),
                    n && (c = n),
                    l.open("POST", c + (new Date).getTime().toString() + (s = 9999999,
                    r = (i = 1e6) - .5 + Math.random() * (s - i + 1),
                    r = Math.round(r)), !0),
                    l.setRequestHeader("Content-Type", "application/json"),
                    l.onload = function() {
                        200 === this.status || this.status,
                        a()
                    }
                    ,
                    l.onerror = function() {
                        a()
                    }
                    ,
                    e.isEmptyObject(t) && (t = {
                        empty: 0
                    }),
                    l.send(JSON.stringify(t))
                }
                function y(e, t, a) {
                    var n, i, o = e.split(",");
                    return t && (t = JSON.parse(t)),
                    t && (void 0 === t.categories[a] && (t.categories[a] = {}),
                    i = t.categories[a]),
                    t && void 0 !== i.s && (n = i.s),
                    o && n ? (o = Array.prototype.filter.call(o, (function(e) {
                        return !n.includes(e)
                    }
                    )),
                    Array.prototype.join.call(o)) : e
                }
                function w(e, t) {
                    var a = {};
                    return a.t = (new Date).getTime(),
                    a.s = e.split(","),
                    a.c = t.split(","),
                    a
                }
                function C(e) {
                    var t = {};
                    return Array.prototype.filter.call(e, (function(e) {
                        return e in t ? 0 : t[e] = 1
                    }
                    ))
                }
                function k() {
                    var e = localStorage.getItem(d);
                    e && (e = JSON.parse(e)).categories && (e = function(e) {
                        var t = (new Date).getTime();
                        for (var a in e.categories)
                            t - e.categories[a].t > h && delete e.categories[a];
                        return e
                    }(e),
                    localStorage.setItem(d, JSON.stringify(e)))
                }
                function _(e) {
                    if (f.lastViewed !== f.viewedAmount) {
                        var t, a = localStorage.getItem(d);
                        if ((t = y(t = Array.prototype.join.call(f.contentIds.slice(f.lastViewed, f.viewedAmount)), a, f.cid)) && P(t),
                        f.lastViewed = f.viewedAmount,
                        f.userAgent && t) {
                            var n = {};
                            n.fp = i.getUUID(),
                            n.referrer = f.referrer,
                            n.ua = f.userAgent,
                            n.lang = f.lang,
                            n.device = f.device,
                            n.cid = f.cid,
                            n.viewed = E(t),
                            n.type = f.type,
                            n.domain = f.domain,
                            v(n, (function() {}
                            ))
                        }
                    }
                }
                function P(e, t) {
                    var a, n = localStorage.getItem(d);
                    void 0 === t && (t = ""),
                    n ? a = void 0 === (n = JSON.parse(n)).categories[f.cid] ? w(e, t) : function(e, t, a) {
                        var n = (new Date).getTime();
                        return t && a.c && (t = C(t = a.c.concat(t.split(","))),
                        a.c = t),
                        e && a.s && (e = C(e = a.s.concat(e.split(","))),
                        a.s = e),
                        a.t = n,
                        a
                    }(e, t, n.categories[f.cid]) : ((n = {}).categories = {},
                    a = w(e, t)),
                    n.categories[f.cid] = a,
                    localStorage.setItem(d, JSON.stringify(n))
                }
                function A() {
                    var e, t, a, n = document.getElementById(o.wookmarkContainerID), i = n.querySelectorAll("." + o.wookmarkThumbClass);
                    (f.contentList = [],
                    f.contentIds = [],
                    f.contentPositions = [],
                    0 !== i.length) && (e = function(e) {
                        var t = [];
                        return e.map((function(e) {
                            var a = e.children[0];
                            try {
                                t.push(a.getAttribute(o.IDAttributeName))
                            } catch (e) {}
                        }
                        )),
                        t
                    }(i = function(e) {
                        return (e = Array.prototype.filter.call(e, (function(e) {
                            return !e.classList.contains("r-frame")
                        }
                        ))).sort((function(e, t) {
                            return e.getBoundingClientRect().top + e.offsetHeight - (t.getBoundingClientRect().top + t.offsetHeight)
                        }
                        )),
                        e
                    }(i)),
                    t = function(e, t) {
                        var a = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                          , n = document.documentElement.clientTop || document.body.clientTop || 0
                          , i = Math.floor(a - n);
                        return Array.prototype.map.call(e, (function(e) {
                            return Math.floor(e.getBoundingClientRect().top + i + e.offsetHeight * g)
                        }
                        ))
                    }(i),
                    f.contentList = f.contentList.concat(i),
                    f.contentIds = f.contentIds.concat(e),
                    f.contentPositions = f.contentPositions.concat(t),
                    a = document.documentElement.clientHeight,
                    b = a,
                    _())
                }
                function I() {
                    var e = function(e, t) {
                        var a, n = 0, i = window.pageYOffset + b;
                        for (a = e - 1; a >= 0; a--)
                            if (t[a] < i) {
                                n = a + 1;
                                break
                            }
                        return n
                    }(f.contentList.length, f.contentPositions);
                    f.viewedAmount < e && (f.viewedAmount = e)
                }
                function T(e) {
                    if (!(e.classList.contains(o.wookmarkAdClass) || e.classList.contains(o.logoClass) || e.classList.contains(o.wookmarkAdNativeClass))) {
                        var t, a, n = e.children[0].getAttribute(o.IDAttributeName), s = localStorage.getItem(d);
                        if (f.viewedAmount = function(e, t, a) {
                            var n = t.indexOf(e);
                            return n > a ? n + 1 : a
                        }(n, f.contentIds, f.viewedAmount),
                        t = y(t = Array.prototype.join.call(f.contentIds.slice(f.lastViewed, f.viewedAmount)), s, f.cid),
                        a = function(e, t, a) {
                            var n, i, o = e.split(",");
                            return t && (t = JSON.parse(t)),
                            t && (void 0 === t.categories[a] && (t.categories[a] = {}),
                            i = t.categories[a]),
                            t && void 0 !== i.c && (n = i.c),
                            o && n ? (o = Array.prototype.filter.call(o, (function(e) {
                                return !n.includes(e)
                            }
                            )),
                            Array.prototype.join.call(o)) : e
                        }(n, s, f.cid),
                        (t || a) && P(t, a),
                        f.lastViewed = f.viewedAmount,
                        f.userAgent && a) {
                            var r = {};
                            r.fp = i.getUUID(),
                            r.referrer = f.referrer,
                            r.ua = f.userAgent,
                            r.lang = f.lang,
                            r.device = f.device,
                            r.cid = f.cid,
                            r.viewed = E(t),
                            r.clicked = E(a),
                            r.type = f.type,
                            r.domain = f.domain,
                            v(r)
                        }
                    }
                }
                function E(e) {
                    var t, a, n, i = [];
                    return void 0 === e || "" === e ? "" : ((e = e.split(",")).forEach((function(e) {
                        var s, r;
                        t = document.querySelector("[" + o.IDAttributeName + '="' + e + '"]'),
                        a = t.querySelector("img"),
                        n = t.getAttribute(o.typeAttributeName),
                        s = "iml" === t.getAttribute("data-cam-type") ? function(e) {
                            var t = new URLSearchParams(e.split("?")[1]);
                            for (const [e,a] of t.entries())
                                if ("fn" === e)
                                    return a
                        }(a.getAttribute("data-src")) : a.getAttribute("data-src").split("?"),
                        r = "iml" === t.getAttribute("data-cam-type") ? s.replace(/_/g, "{underscore}") : s[0].replace(/_/g, "{underscore}"),
                        i.push(e + "_" + r + "{delimiter}" + n)
                    }
                    )),
                    i.join(","))
                }
                function S() {
                    f.userAgent,
                    !a.checkUserAgent() && navigator.cookieEnabled && function() {
                        var e = "testLocalStorage";
                        try {
                            return localStorage.setItem(e, e),
                            localStorage.removeItem(e),
                            !0
                        } catch (e) {
                            return !1
                        }
                    }() && (k(),
                    function() {
                        var e = a.getCookie(p);
                        if (e)
                            f.referrer = e;
                        else {
                            var t = new Date;
                            t.setHours(t.getHours() + m),
                            f.referrer = document.referrer,
                            a.setCookie(p, f.referrer, {
                                path: "/",
                                domain: "",
                                expires: t
                            })
                        }
                    }(),
                    A(),
                    I(),
                    f.lang = navigator.language || navigator.userLanguage,
                    n.mobile() ? f.device = "mobile" : f.device = "desktop",
                    document.getElementById(o.wookmarkContainerID).addEventListener("click", (function(e) {
                        for (var t = e.target; t.getAttribute("id") !== o.wookmarkContainerID; ) {
                            if (t.classList.contains(o.wookmarkThumbClass)) {
                                if (null !== t.children[0].getAttribute("data-ignore"))
                                    return;
                                return void T(t)
                            }
                            t = t.parentNode
                        }
                    }
                    )),
                    setInterval((function() {
                        _()
                    }
                    ), c),
                    window.addEventListener("scroll", (function() {
                        clearTimeout(l),
                        l = setTimeout((function() {
                            I()
                        }
                        ), u)
                    }
                    )),
                    window.addEventListener("resize", (function() {
                        clearTimeout(r),
                        r = setTimeout((function() {
                            A(),
                            I()
                        }
                        ), u)
                    }
                    )))
                }
                return s.init = function(e) {
                    (function(e) {
                        o.statsEndPoint = e.statsEndPoint,
                        o.wookmarkContainerID = e.wookmarkContainerID,
                        o.wookmarkThumbClass = e.wookmarkThumbClass,
                        o.IDAttributeName = e.IDAttributeName,
                        o.typeAttributeName = e.typeAttributeName,
                        o.pageType = e.pageType,
                        f.userAgent = navigator.userAgent,
                        f.cid = "main",
                        f.viewedAmount = 0,
                        f.lastViewed = 0,
                        f.contentList = [],
                        f.contentIds = [],
                        f.contentPositions = [],
                        f.type = o.pageType,
                        f.referrer = "",
                        f.lang = "",
                        f.device = "",
                        f.domain = location.host.indexOf("www.") && location.host || location.host.replace("www.", ""),
                        "cam_models" !== f.type && (f.type = "cam_banners")
                    }
                    )(e = e || {}),
                    S()
                }
                ,
                s.updateShowsClicksWatcher = function() {
                    A(),
                    I()
                }
                ,
                s
            }(jQuery, ie.inViewPort, ie.utilities, device, ie.uuid),
            ie.bannerZoom = function(e) {
                var t, a, n, i, o, s = {}, r = {}, l = e(window);
                function c() {
                    var e, a = t.children("div").width(), s = l.width(), r = t.find("iframe").parent();
                    s <= 600 ? (i = a,
                    n = a / 1.2,
                    o = a / 300) : (i = 300,
                    n = 250,
                    o = 1),
                    r.css({
                        width: i,
                        height: n
                    }),
                    e = o,
                    r.children("iframe").css({
                        "-webkit-transform": "scale(" + e + ")",
                        "-ms-transform": "scale(" + e + ")",
                        transform: "scale(" + e + ")"
                    })
                }
                return r.init = function(n) {
                    (function(a) {
                        s.container = a.container,
                        t = e("." + s.container)
                    }
                    )(n = n || {}),
                    t.length > 0 && (l.on("resize", (function() {
                        clearTimeout(a),
                        a = setTimeout((function() {
                            c()
                        }
                        ), 100)
                    }
                    )),
                    c())
                }
                ,
                r
            }(jQuery),
            ie.goBack = function(e, t) {
                var a, n = {}, i = {}, o = !0;
                /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
                function s() {
                    return (new Date).getTime()
                }
                function r(t, a) {
                    var i = e("#" + a + " ." + n.thumbClass).not("." + n.adClass).index(t)
                      , o = parseInt(i / n.thumbsOnPage) + 1
                      , r = i - (o - 1) * n.thumbsOnPage
                      , l = t.find("img").attr("data-src");
                    history.replaceState({
                        page: o,
                        thumbIndex: r,
                        image: l,
                        parentId: a,
                        time: s()
                    }, "")
                }
                function l(t, i) {
                    if (null !== a) {
                        if (o) {
                            var s;
                            if (s = void 0 !== t ? e("#" + a.parentId + " img[data-src='" + a.image + "']").parents("li") : e("#" + a.parentId + " img[src='" + a.image + "']").parents("li"),
                            o = !1,
                            0 === s.length)
                                return void c();
                            setTimeout((function() {
                                !function(t, a) {
                                    var i = t.offset().top;
                                    e("html, body").animate({
                                        scrollTop: i
                                    }, 0, (function() {
                                        t.animate({
                                            opacity: .4
                                        }, 300, (function() {
                                            t.animate({
                                                opacity: 1
                                            }, 500)
                                        }
                                        )),
                                        c(),
                                        "function" == typeof n.animationCallback && !0 !== a && n.animationCallback()
                                    }
                                    ))
                                }(s, i)
                            }
                            ), 600)
                        }
                    } else
                        c()
                }
                function c() {
                    e(".loading-modal").hide(0)
                }
                function u() {
                    history.replaceState({
                        page: null,
                        thumbIndex: null,
                        image: null,
                        parentId: null,
                        time: null
                    }, null, null)
                }
                function d(e) {
                    null !== a && null !== a.time && Math.floor((s() - a.time) / 6e4) > e && u()
                }
                function p() {
                    window.ppPageShowHandler = function(e) {
                        m(e)
                    }
                    ,
                    window.addEventListener("pageshow", (function(e) {
                        m(e)
                    }
                    ))
                }
                function m(e) {
                    e.persisted && (window.location.reload(),
                    o = !0,
                    l(!0, !0))
                }
                return i.init = function(i) {
                    switch (function(e) {
                        n.thumbClass = e.thumbClass,
                        n.thumbInactiveClass = e.thumbInactiveClass,
                        n.thumbsOnPage = e.thumbsOnPage,
                        n.adClass = e.adClass
                    }(i = i || {}),
                    a = history.state,
                    "scrollRestoration"in history && (history.scrollRestoration = "auto"),
                    t.getPageType()) {
                    case "gallery":
                    case "gallery_gc":
                    case "gallery_shemale":
                    case "gallery_frame":
                    case "gallery_thumbspw":
                        d(1440),
                        p(),
                        e(document).on("click", "#rel-main ." + n.thumbClass, (function() {
                            var t = e(this);
                            r(t, t.parent().attr("id"))
                        }
                        )),
                        e(document).on("click", "#tiles ." + n.thumbClass, (function() {
                            "scrollRestoration"in history && (history.scrollRestoration = "auto"),
                            u()
                        }
                        ));
                        break;
                    case "category":
                    case "category_rotator_maps":
                    case "tags":
                    case "tags_recent":
                    case "tag_rotator_maps":
                    case "main":
                        d(15),
                        p(),
                        e(document).on("click", "." + n.thumbClass, (function() {
                            var t = e(this);
                            t.hasClass("logo-main") || r(t, t.parent().attr("id"))
                        }
                        ));
                        break;
                    case "category_recent":
                    case "recent":
                    case "popular":
                    case "models_filter":
                    case "search":
                    case "search_recent":
                    case "search_sponsor":
                    case "favorite_new":
                    case "favorite_old":
                        d(1440),
                        p(),
                        e(document).on("click", "." + n.thumbClass, (function() {
                            var t = e(this);
                            t.hasClass("logo-main") || r(t, t.parent().attr("id"))
                        }
                        ))
                    }
                }
                ,
                i.getCurrentPage = function() {
                    return null !== history.state && void 0 !== history.state.page ? history.state.page : null
                }
                ,
                i.goToThumb = function(e, t) {
                    "function" == typeof e && (n.animationCallback = e),
                    l(t)
                }
                ,
                i.showLoader = function() {
                    var t, a, n;
                    t = document.createElement("div"),
                    a = document.createElement("div"),
                    n = document.createElement("div"),
                    t.className = "loading-modal",
                    a.className = "loading-modal__spinner",
                    a.appendChild(n),
                    t.appendChild(a),
                    e("body").append(t)
                }
                ,
                i.hideLoader = function() {
                    c()
                }
                ,
                i.pageShowHandler = function(e) {
                    m(e)
                }
                ,
                i
            }(jQuery, ie.utilities),
            ie.goBackGalleryInfo = function(e, t) {
                var a, n = {}, i = {}, o = !0;
                function s() {
                    return (new Date).getTime()
                }
                function r(e) {
                    null !== a && null !== a.time && Math.floor((s() - a.time) / 6e4) > e && history.replaceState({
                        infoLink: null,
                        time: null
                    }, null, null)
                }
                function l() {
                    var t;
                    o && (o = !1,
                    null !== history.state && void 0 !== history.state.infoLink && (t = e("." + n.infoBlockClass).offset().top,
                    e("html, body").animate({
                        scrollTop: t - 320 + "px"
                    }, "fast")))
                }
                function c() {
                    window.addEventListener("pageshow", (function(e) {
                        !function(e) {
                            e.persisted && (window.location.reload(),
                            o = !0,
                            setTimeout((function() {
                                l()
                            }
                            ), 600))
                        }(e)
                    }
                    ))
                }
                return i.init = function(i) {
                    switch (function(e) {
                        n.infoBlockClass = e.infoBlockClass || ""
                    }(i = i || {}),
                    t.getPageType()) {
                    case "gallery":
                    case "gallery_gc":
                    case "gallery_shemale":
                    case "gallery_frame":
                    case "gallery_thumbspw":
                        a = history.state,
                        "scrollRestoration"in history && (history.scrollRestoration = "auto"),
                        c(),
                        r(15),
                        e(document).on("click", "." + n.infoBlockClass + " a", (function() {
                            history.replaceState({
                                infoLink: !0,
                                time: s()
                            }, "")
                        }
                        )),
                        setTimeout((function() {
                            l()
                        }
                        ), 600)
                    }
                }
                ,
                i
            }(jQuery, ie.utilities),
            ie.sponsor = function(e) {
                var t = {}
                  , a = {};
                function n(t, a, n, i) {
                    n || (n = ""),
                    e.ajax({
                        url: t,
                        type: a,
                        dataType: "json",
                        data: n,
                        success: function(e) {
                            i(e)
                        }
                    })
                }
                function i(e) {
                    var t = document.createElement("div")
                      , a = document.getElementsByTagName("BODY")[0];
                    t.id = "paySiteNormal",
                    t.innerHTML = e,
                    t.style.display = "none",
                    a.appendChild(t)
                }
                function o() {
                    e("." + t.endPointClass).addClass("to-gall-info"),
                    null !== document.querySelector("." + t.sponsorLineClass) && n(t.path, "GET", null, (function(a) {
                        0 !== Object.keys(a).length && ("ai" !== t.galleryType ? "sex-doll" !== t.galleryType ? function(a) {
                            var n, o = document.createElement("div"), s = document.createElement("a"), r = document.createElement("div"), l = document.createElement("div"), c = document.createElement("div"), u = document.createElement("div"), d = document.createElement("div"), p = document.createElement("a"), m = document.createElement("i");
                            "" !== t.sponsorPromoLogo ? o.className = "sponsor-type-4 type-promo-of" : o.className = "sponsor-type-4",
                            s.className = "left-side",
                            r.className = "separator",
                            l.className = "right-side",
                            c.className = "text-section",
                            u.className = "text-1",
                            d.className = "text-2",
                            p.className = "button",
                            m.className = "icon icon-out",
                            s.setAttribute("aria-label", a.name),
                            void 0 === a.logo || "" === a.logo && "" === t.sponsorPromoLogo ? s.innerHTML = a.name : "" !== t.sponsorPromoLogo ? (s.style.background = "url(https://hfma.pornpics.com/" + t.sponsorPromoLogo + ")",
                            s.style.backgroundColor = "#" + t.sponsorPromoBG) : (s.style.background = "url(https://hfma.pornpics.com/" + a.logo + ")",
                            s.style.backgroundColor = "#" + a.background),
                            s.href = "/go/" + a.site + t.gallerySponsorID,
                            s.setAttribute("rel", "nofollow"),
                            u.innerHTML = "Get full access to:",
                            "" !== t.sponsorPromoBG ? (n = a.name.substr(0, 9),
                            d.innerHTML = "@<i>" + n + "</i>" + a.name.replace(n, "")) : d.innerHTML = a.name,
                            p.innerHTML = "Join Now",
                            p.href = "/go/" + a.site + t.gallerySponsorID,
                            p.setAttribute("rel", "nofollow"),
                            p.appendChild(m),
                            c.appendChild(u),
                            c.appendChild(d),
                            l.appendChild(c),
                            l.appendChild(p),
                            o.appendChild(s),
                            o.appendChild(r),
                            o.appendChild(l),
                            e("." + t.endPointClass).before(o),
                            i(a.name)
                        }(a) : function(a) {
                            var n = document.createElement("div")
                              , o = document.createElement("a")
                              , s = document.createElement("div")
                              , r = document.createElement("div")
                              , l = document.createElement("div")
                              , c = document.createElement("div")
                              , u = document.createElement("div")
                              , d = document.createElement("a")
                              , p = document.createElement("i");
                            n.className = "sponsor-type-4 gallery-type-sex-doll",
                            o.className = "left-side",
                            s.className = "separator",
                            r.className = "right-side",
                            l.className = "text-section",
                            c.className = "text-1",
                            u.className = "text-2",
                            d.className = "button",
                            p.className = "icon icon-out",
                            o.setAttribute("aria-label", a.name),
                            void 0 === a.logo || "" === a.logo && "" === t.sponsorPromoLogo ? o.innerHTML = a.name : (o.style.background = "url(https://hfma.pornpics.com/" + a.logo + ")",
                            o.style.backgroundColor = "#" + a.background),
                            o.href = "/go/" + a.site + t.gallerySponsorID,
                            o.setAttribute("rel", "nofollow"),
                            c.innerHTML = "Best ❤️sex dolls❤️ on:",
                            u.innerHTML = a.name,
                            d.innerHTML = "View All",
                            d.href = "/go/" + a.site + t.gallerySponsorID,
                            d.setAttribute("rel", "nofollow"),
                            d.appendChild(p),
                            l.appendChild(c),
                            l.appendChild(u),
                            r.appendChild(l),
                            r.appendChild(d),
                            n.appendChild(o),
                            n.appendChild(s),
                            n.appendChild(r),
                            e("." + t.endPointClass).before(n),
                            i(a.name)
                        }(a) : function(a) {
                            var n = document.createElement("div")
                              , o = document.createElement("a")
                              , s = document.createElement("div")
                              , r = document.createElement("div")
                              , l = document.createElement("div")
                              , c = document.createElement("div")
                              , u = document.createElement("div")
                              , d = document.createElement("a")
                              , p = document.createElement("i");
                            n.className = "sponsor-type-4 gallery-type-ai",
                            o.className = "left-side",
                            s.className = "separator",
                            r.className = "right-side",
                            l.className = "text-section",
                            c.className = "text-1",
                            u.className = "text-2",
                            d.className = "button",
                            p.className = "icon icon-out",
                            o.setAttribute("aria-label", a.name),
                            void 0 === a.logo || "" === a.logo && "" === t.sponsorPromoLogo ? o.innerHTML = a.name : (o.style.background = "url(https://hfma.pornpics.com/" + a.logo + ")",
                            o.style.backgroundColor = "#" + a.background),
                            o.href = "/go/" + a.site + t.gallerySponsorID,
                            o.setAttribute("rel", "nofollow"),
                            c.innerHTML = "Create your own girl:",
                            u.innerHTML = "AI Porn Generator",
                            d.innerHTML = "Start Now",
                            d.href = "/go/" + a.site + t.gallerySponsorID,
                            d.setAttribute("rel", "nofollow"),
                            d.appendChild(p),
                            l.appendChild(c),
                            l.appendChild(u),
                            r.appendChild(l),
                            r.appendChild(d),
                            n.appendChild(o),
                            n.appendChild(s),
                            n.appendChild(r),
                            e("." + t.endPointClass).before(n),
                            i("AI Porn Generator")
                        }(a))
                    }
                    ))
                }
                return a.init = function(e) {
                    (function(e) {
                        t.path = e.path,
                        t.stylePath = e.stylePath,
                        t.stylePathData = e.stylePathData,
                        t.endPointClass = e.endPointClass,
                        t.callback = e.callback,
                        t.sponsorLineClass = e.sponsorLineClass,
                        t.sponsorPromoBG = e.sponsorPromoBG,
                        t.sponsorPromoLogo = e.sponsorPromoLogo,
                        t.gallerySponsorID = e.gallerySponsorID,
                        t.galleryType = e.galleryType
                    }
                    )(e = e || {}),
                    o()
                }
                ,
                a
            }(jQuery),
            ie.theme = function(e, t) {
                var a = {}
                  , n = {};
                return n.init = function(n) {
                    (function(e) {
                        a.buttonClass = e.buttonClass,
                        a.cookieName = e.cookieName,
                        a.exDate = e.exDate
                    }
                    )(n = n || {}),
                    e("." + a.buttonClass).on("click", (function() {
                        var n, i;
                        n = t.getCookie(a.cookieName),
                        (i = new Date).setDate(i.getDate() + parseInt(a.exDate)),
                        void 0 === n || 0 === parseInt(n) ? (e("html").addClass("dark"),
                        t.setCookie(a.cookieName, 1, {
                            path: "/",
                            domain: "",
                            expires: i
                        })) : (e("html").removeClass("dark"),
                        t.setCookie(a.cookieName, 0, {
                            path: "/",
                            domain: "",
                            expires: i
                        }))
                    }
                    ))
                }
                ,
                n
            }(jQuery, ie.utilities),
            ie.directUser = function(e, t) {
                var a = {}
                  , n = {}
                  , i = 0;
                function o(e, a) {
                    var n = new Date;
                    n.setDate(n.getDate() + a),
                    t.setCookie(e, 1, {
                        path: "/",
                        domain: "",
                        expires: n
                    })
                }
                return n.init = function(e) {
                    if (function(e) {
                        a.bookmarkCookieName = e.bookmarkCookieName,
                        a.bookmarkCookieExpDays = e.bookmarkCookieExpDays,
                        a.newUserCookieName = e.newUserCookieName,
                        a.newUserCookieExpDays = e.newUserCookieExpDays,
                        a.isUserAuth = e.isUserAuth
                    }(e = e || {}),
                    n = "[object OperaMini]" === Object.prototype.toString.call(window.operamini),
                    s = navigator.userAgent.indexOf(" UCBrowser/") >= 0,
                    n || s)
                        i = 0;
                    else {
                        var n, s;
                        if (a.isUserAuth)
                            return o(a.bookmarkCookieName, a.bookmarkCookieExpDays),
                            void (i = 1);
                        if (void 0 !== t.getCookie(a.newUserCookieName))
                            return o(a.bookmarkCookieName, a.bookmarkCookieExpDays),
                            void (i = 0);
                        if (void 0 !== t.getCookie(a.bookmarkCookieName))
                            return o(a.bookmarkCookieName, a.bookmarkCookieExpDays),
                            void (i = 1);
                        o(a.newUserCookieName, a.newUserCookieExpDays),
                        o(a.bookmarkCookieName, a.bookmarkCookieExpDays),
                        i = 0
                    }
                }
                ,
                n.isBookmark = function() {
                    return i
                }
                ,
                n
            }(jQuery, ie.utilities),
            ie.mobPagiForm = function(e) {
                var t = {}
                  , a = {};
                return a.init = function(a) {
                    (function(e) {
                        t.pagiFormId = e.pagiFormId || ""
                    }
                    )(a = a || {}),
                    null !== document.getElementById(t.pagiFormId) && e("#" + t.pagiFormId).on("submit", (function(a) {
                        a.preventDefault();
                        var n = e("#" + t.pagiFormId + ' input[type="number"]').val()
                          , i = document.location.pathname.split("/")
                          , o = i.length;
                        /^\d+$/.test(i[o - 2]) ? i[o - 2] = n : i.splice(o - 1, 0, n),
                        i = i.join("/"),
                        document.location = i + document.location.search
                    }
                    ))
                }
                ,
                a
            }(jQuery),
            ie.channelsFilters = function(e) {
                var t = {}
                  , a = {};
                function n() {
                    e("." + t.mainClass).on("change", (function(t) {
                        var a = {};
                        a.value = e(this).find(":selected").val(),
                        a.param = e(this).attr("data-filter"),
                        function(t) {
                            var a = {};
                            if (void 0 === t.param)
                                return;
                            if (void 0 === t.value)
                                return;
                            if ("" === t.param || "" === t.value)
                                return;
                            a[t.param] = t.value,
                            location.href = "https://www.pornpics.com/channels/?" + e.param(a)
                        }(a)
                    }
                    ))
                }
                return e.urlParam = function(e) {
                    var t = new RegExp("[?&]" + e + "=([^&#]*)").exec(window.location.search);
                    return null !== t && (t[1] || 0)
                }
                ,
                a.init = function(a) {
                    var i;
                    (function(e) {
                        t.mainClass = e.mainClass,
                        t.filtersCollection = e.filtersCollection,
                        t.categoryList = e.categoryList
                    }
                    )(a = a || {}),
                    i = document.createDocumentFragment(),
                    t.categoryList.map((function(e) {
                        var t = document.createElement("option");
                        t.value = e,
                        t.innerHTML = e,
                        i.appendChild(t)
                    }
                    )),
                    e('[data-filter="c"]').append(i),
                    function() {
                        var a;
                        for (a in t.filtersCollection) {
                            var n = e.urlParam(t.filtersCollection[a]);
                            if (n) {
                                var i = e('[data-filter="' + t.filtersCollection[a] + '"]');
                                n = n.replace("%20", " "),
                                i.find("option").filter('[value="' + n + '"]').attr("selected", "selected")
                            }
                        }
                    }(),
                    n()
                }
                ,
                a
            }(jQuery),
            ie.lazyload = function(e, t) {
                var a, n, i = {}, o = {}, s = !1;
                function r() {
                    s || Array.prototype.forEach.call(a, (function(e, a) {
                        var o = e.querySelector("img");
                        e.offsetTop < window.innerHeight + window.pageYOffset + (t.desktop() ? 700 : 1500) && e.offsetTop >= 0 && (o.src !== o.dataset.src && "https://static.pornpics.com/style/img/1px.png" === o.src && (o.src = o.dataset.src,
                        o.onload = function() {
                            o.classList.add(i.lazyAddedClass)
                        }
                        ),
                        a === n - 1 && (s = !0))
                    }
                    ))
                }
                return o.init = function(t) {
                    (function(t) {
                        i.itemClass = t.itemClass || "",
                        i.lazyAddedClass = t.lazyAddedClass || "",
                        i.logoClass = t.logoClass || "",
                        a = e("." + i.itemClass).not("." + i.logoClass).not(".r-frame").not(".v-frame"),
                        n = a.length
                    }
                    )(t = t || {}),
                    e(window).on("scroll resize", (function() {
                        r()
                    }
                    )),
                    r()
                }
                ,
                o.lazyLoad = function() {
                    r()
                }
                ,
                o
            }(jQuery, device),
            ie.lazyloadNew = function(e, t, a) {
                var n, i = {}, o = {};
                function s() {
                    n = new a({
                        elements_selector: i.itemClass,
                        thresholds: t.desktop() ? "700px 0px" : "200% 0px",
                        class_loading: "ll-loading",
                        class_loaded: "ll-loaded",
                        class_error: "ll-error",
                        callback_error: function(e) {
                            !0 !== e.getAttribute("data-flag") && (e.src = e.getAttribute("data-src") + "?" + Date.now(),
                            e.setAttribute("data-flag", !0),
                            n.update())
                        }
                    })
                }
                function r() {
                    document.addEventListener && window.addEventListener("pageshow", (function(e) {
                        (e.persisted || window.performance && 2 === window.performance.navigation.type) && function() {
                            var e = document.querySelectorAll(".thumbwook a img.ll-loading")
                              , t = document.querySelectorAll(".thumbwook a img.ll-error");
                            if (0 !== e.length)
                                for (var a = 0; a < e.length; a++)
                                    n.load(e[a], !0);
                            if (0 !== t.length)
                                for (a = 0; a < t.length; a++)
                                    n.load(t[a], !0)
                        }()
                    }
                    ))
                }
                return o.init = function(e) {
                    (function(e) {
                        i.itemClass = e.itemClass || ""
                    }
                    )(e = e || {}),
                    s(),
                    r()
                }
                ,
                o.update = function() {
                    void 0 !== n ? n.update() : s()
                }
                ,
                o
            }(jQuery, device, LazyLoad),
            ie.videosBanner = function(e) {
                var t = {}
                  , a = {}
                  , n = 2
                  , i = 0;
                return a.init = function(a) {
                    (function(e) {
                        t.itemClass = e.itemClass || "",
                        t.api_getModels = e.api_getModels || "",
                        t.wookInactiveClass = e.wookInactiveClass || ""
                    }
                    )(a = a || {}),
                    e(window).on("resize", (function() {
                        clearTimeout(i),
                        i = setTimeout((function() {
                            e(window).width() <= 913 ? e("." + t.itemClass).not("." + t.wookInactiveClass).addClass(t.wookInactiveClass) : e("." + t.itemClass + "." + t.wookInactiveClass).removeClass(t.wookInactiveClass)
                        }
                        ), 0)
                    }
                    ))
                }
                ,
                a.setBanners = function() {
                    if (!(e(window).width() <= 913)) {
                        var a = e("." + t.itemClass).not(".added").not(".progress");
                        0 !== a.length && (a.addClass("progress"),
                        function(t, a, n) {
                            e.ajax({
                                url: t,
                                dataType: "JSON",
                                type: "GET",
                                success: function(e) {
                                    "function" == typeof n && n(e, a)
                                }
                            })
                        }(t.api_getModels + "?limit=" + 12 * a.length + "&page=" + n, a, (function(e, t) {
                            t.each((function() {
                                var t, a, n;
                                this.appendChild(function(e) {
                                    var t = document.createDocumentFragment()
                                      , a = document.createElement("a")
                                      , n = document.createElement("img")
                                      , i = document.createElement("span");
                                    return i.innerHTML = "Video",
                                    a.href = "/videos/detail/" + e.video1.id,
                                    n.src = e.video1.thumbImage,
                                    a.appendChild(n),
                                    t.appendChild(i),
                                    t.appendChild(a),
                                    t
                                }({
                                    video1: e.data.videos[(t = 0,
                                    a = 11,
                                    n = t - .5 + Math.random() * (a - t + 1),
                                    n = Math.round(n))]
                                }))
                            }
                            )),
                            t.removeClass("progress"),
                            t.addClass("added")
                        }
                        )),
                        n++)
                    }
                }
                ,
                a
            }(jQuery),
            ie.submenuDropdown = function(e, t) {
                var a = {}
                  , n = {}
                  , i = 2
                  , o = 1
                  , s = 40
                  , r = 90
                  , l = 100
                  , c = null
                  , u = null;
                function d() {
                    0 !== e("." + a.submenuClass).length && (e(window).on("resize", (function() {
                        e("." + a.submenuClass).hasClass("active") ? h() : m()
                    }
                    )),
                    m())
                }
                function p() {
                    0 !== e("." + a.submenuClass).length && (e(window).on("resize", (function() {
                        e("." + a.submenuClass).hasClass("active") ? f() : g()
                    }
                    )),
                    g())
                }
                function m() {
                    var t = y()
                      , a = b();
                    a.firstChild.className = "icon icon-angle-down",
                    e(a).insertBefore(e(t))
                }
                function h() {
                    var t = b();
                    y(),
                    t.firstChild.className = "icon icon-angle-up",
                    e("." + a.submenuClass + " ul").append(t)
                }
                function g() {
                    var t = w()
                      , a = v()
                      , n = b();
                    n.firstChild.className = "icon icon-angle-down",
                    t.dropdown ? (e(a).insertAfter(e(t.lastTag)),
                    e(n).insertAfter(e(a))) : e(a).insertAfter(e(t.lastTag))
                }
                function f() {
                    var t = v()
                      , n = b()
                      , i = e("." + a.submenuClass + " ul");
                    w(),
                    n.firstChild.className = "icon icon-angle-up",
                    i.append(t),
                    i.append(n)
                }
                function b() {
                    if (null !== c)
                        return c;
                    var n = document.createElement("li")
                      , i = document.createElement("i");
                    return n.className = "slide-button",
                    i.className = "icon icon-angle-down",
                    n.append(i),
                    n.addEventListener("click", (function() {
                        var n, i = t.getPageType();
                        "gallery" === i || "gallery_gc" === i || "gallery_frame" === i || "gallery_shemale" === i || "gallery_thumbspw" === i ? (e(this),
                        (n = e("." + a.submenuClass)).hasClass("active") ? (n.removeClass("active"),
                        g()) : (n.addClass("active"),
                        f())) : function() {
                            var t = e("." + a.submenuClass);
                            t.hasClass("active") ? (t.removeClass("active"),
                            m()) : (t.addClass("active"),
                            h())
                        }(e(this))
                    }
                    )),
                    c = n
                }
                function v() {
                    if (null !== u)
                        return u;
                    var e = document.createElement("li")
                      , t = document.createElement("span");
                    return e.className = "submenu-item suggest-top-button",
                    t.innerHTML = "+ Suggest",
                    e.append(t),
                    e.addEventListener("click", (function() {}
                    )),
                    u = e
                }
                function y() {
                    for (var t = e("." + a.itemClass), n = e("." + a.submenuClass), r = n.width(), l = 0, c = 0; c < o; c++)
                        for (var u = 0, d = c === o - 1; l < t.length; l++) {
                            var p = t[l];
                            if ((u += e(p).width() + i) + (d ? s + i : 0) >= r) {
                                d && n.addClass("enable-button");
                                break
                            }
                            n.removeClass("enable-button")
                        }
                    return t[l]
                }
                function w() {
                    for (var t, n = e("." + a.itemClass).not(".suggest-top-button"), c = e("." + a.submenuClass), u = c.width(), d = 0, p = 0, m = e(window).width() > 600 ? r : l, h = 0; h < o; h++) {
                        p = 0;
                        for (var g = h === o - 1; d < n.length; d++) {
                            var f = n[d];
                            if ((p += e(f).width() + i) + (g ? m + i : 0) >= u) {
                                g && (c.addClass("enable-button"),
                                t = 1);
                                break
                            }
                            c.removeClass("enable-button"),
                            t = 2
                        }
                    }
                    switch (t) {
                    case 1:
                        for (; p + m + i + s + i >= u; ) {
                            p -= e(n[d]).width() + i,
                            d--
                        }
                        return {
                            suggest: !0,
                            dropdown: !0,
                            lastTag: n[d]
                        };
                    case 2:
                        return {
                            suggest: !0,
                            dropdown: !1,
                            lastTag: n[d - 1]
                        }
                    }
                }
                return n.init = function(e) {
                    !function(e) {
                        a.submenuClass = e.submenuClass || a.submenuClass,
                        a.itemClass = e.itemClass || a.itemClass,
                        a.buttonClass = e.buttonClass || a.buttonClass
                    }(e = e || {});
                    var n = t.getPageType();
                    "gallery" === n || "gallery_gc" === n || "gallery_frame" === n || "gallery_shemale" === n || "gallery_thumbspw" === n ? p() : d()
                }
                ,
                n
            }(jQuery, ie.utilities),
            ie.adToGrid = function(e, t, a) {
                var n = {}
                  , i = {}
                  , o = null;
                function s() {
                    var e, t, a = document.createElement("li"), i = document.createElement("span");
                    return a.className = n.wookmarkClass + " " + n.allDeviceAdContainer + " " + n.allDeviceAdContainer + "-static " + n.adIncludedClass + " stamp-bn-1",
                    i.className = "h2 ad-text gall-text",
                    a.appendChild(i),
                    a.appendChild((e = n.linkDesktop,
                    (t = document.createElement("iframe")).setAttribute("width", "300"),
                    t.setAttribute("height", "250"),
                    t.setAttribute("src", e + n.sponsorNormalName),
                    t.setAttribute("title", "promo"),
                    t.setAttribute("marginwidth", "0"),
                    t.setAttribute("marginheight", "0"),
                    t.setAttribute("frameborder", "0"),
                    t.setAttribute("scrolling", "no"),
                    t)),
                    a
                }
                function r() {
                    null === o && (o = s()),
                    t.mobile() ? e("#tiles > li.thumbwook:eq(4)").after(o) : e("#tiles").append(o)
                }
                function l() {
                    var t, a;
                    null === o && (t = document.createElement("li"),
                    a = document.createElement("span"),
                    t.className = n.wookmarkClass + " " + n.allDeviceAdContainer + " stamp-bn-1",
                    a.className = "h2 ad-text gall-text",
                    t.appendChild(a),
                    o = t),
                    e("#tiles > li.thumbwook:eq(4)").after(o)
                }
                return i.init = function(a) {
                    (function(e) {
                        n.allDeviceAdContainer = e.allDeviceAdContainer || "",
                        n.relBlockId = e.relBlockId || "",
                        n.mainBlockId = e.mainBlockId || "",
                        n.wookmarkClass = e.wookmarkClass || "",
                        n.adIncludedClass = e.adIncludedClass || "",
                        n.linkDesktop = e.linkDesktop || "",
                        n.bannerTrigger = e.bannerTrigger || "",
                        n.sponsorNormalName = e.sponsorNormalName || "",
                        n.pageType = e.pageType || "",
                        n.pageTypeID = e.pageTypeID || ""
                    }
                    )(a = a || {}),
                    0 === e(n.relBlockId).length || 1 !== n.bannerTrigger || "" === n.sponsorNormalName || null === document.querySelector(".gallery-top-line") ? 0 !== e(n.relBlockId).length && t.mobile() && l() : r()
                }
                ,
                i.reCalcContainerPosition = function() {
                    r()
                }
                ,
                i
            }(jQuery, device, ie.utilities),
            ie.relSearches = function(e, t) {
                var a = {}
                  , n = {};
                function i() {
                    e.ajax({
                        url: a.api_get_queries + a.query,
                        dataType: "JSON",
                        success: function(e) {
                            var n, i, o, s;
                            0 !== e.length && (n = e,
                            i = document.createElement("div"),
                            o = document.createElement("ul"),
                            s = document.createDocumentFragment(),
                            i.classList = "submenu-section clearfix",
                            o.classList = "clearfix",
                            n.forEach((function(e) {
                                var t = document.createElement("li")
                                  , a = document.createElement("a");
                                t.classList = "submenu-item",
                                a.href = "/?q=" + e.q,
                                a.innerHTML = e.name,
                                t.appendChild(a),
                                s.appendChild(t)
                            }
                            )),
                            o.appendChild(s),
                            i.appendChild(o),
                            document.getElementById(a.container).parentNode.insertBefore(i, document.getElementById(a.container)),
                            t.init({}))
                        },
                        error: function() {}
                    })
                }
                return n.init = function(e) {
                    (function(e) {
                        a.query = a.query || e.query,
                        a.container = a.container || e.container,
                        a.api_get_queries = a.api_get_queries || e.api_get_queries
                    }
                    )(e = e || {}),
                    i()
                }
                ,
                n
            }(jQuery, ie.submenuDropdown),
            ie.stripVideo = function(e, t, a) {
                var n, i = {}, o = {}, s = "pp_str_entr", r = 1;
                function l(a) {
                    var n = e("#stripCode + div > div ");
                    0 !== n.length && (n.on("click", (function() {
                        var e, a;
                        e = r,
                        (a = new Date).setDate(a.getDate() + e),
                        t.setCookie(s, 1, {
                            path: "/",
                            domain: "",
                            expires: a
                        })
                    }
                    )),
                    a())
                }
                return o.init = function(o) {
                    (function(e) {
                        i.pageType = e.pageType || "",
                        i.stripParams = e.stripParams || ""
                    }
                    )(o = o || {}),
                    void 0 === t.getCookie(s) && (!a.desktop() || e(window).width() < 1252 || null !== i.stripParams && "search" === i.pageType && (null !== i.stripParams && "" !== i.stripParams && (window.stripParamsObj = i.stripParams,
                    e("body").append("<script id='stripCode'>(function(T,o,t,e,m){var a,b,c=function(v){v.target.remove();var a=o.createElement(t),b=o.getElementsByTagName(t)[0];a.async=1;a.src='//b.dombnrs.com/p2.js';b.parentNode.insertBefore(a,b)};T['TotemToolsObject']=m;T[m]=T[m]||function(){(T[m].q=T[m].q||[]).push(arguments)},T[m].l=1*new Date();a=o.createElement(t),b=o.getElementsByTagName(t)[0];a.async=1;a.addEventListener&&a.addEventListener('error',c);a.src=e;b.parentNode.insertBefore(a,b)})(window,document,'script','//b.dombnrs.com/p2.js','loadTool');\nloadTool('popping', window.stripParamsObj);<\/script>")),
                    n = setInterval((function() {
                        l((function() {
                            clearInterval(n)
                        }
                        ))
                    }
                    ), 1e3)))
                }
                ,
                o
            }(jQuery, ie.utilities, device),
            ie.cookieForm = function(e, t, a) {
                var n = {}
                  , i = "_pp_cpс";
                function o() {
                    localStorage.setItem(i, "1"),
                    document.getElementById("cookie-contract").style.display = "none"
                }
                function s() {
                    !function() {
                        var e = document.createElement("div")
                          , t = document.createElement("div")
                          , a = document.createElement("div")
                          , n = document.createElement("a")
                          , i = document.createElement("strong")
                          , s = document.createElement("span");
                        e.id = "cookie-contract",
                        t.classList = "text left",
                        a.classList = "button right icon icon-cross",
                        a.innerText = "",
                        n.innerText = "About cookie",
                        n.href = "/cookie/",
                        n.rel = "nofollow",
                        i.innerText = "Cookies",
                        s.innerText = " help us deliver our services. By using this website, you agree with our use of cookies. ",
                        a.addEventListener("click", o),
                        t.appendChild(i),
                        t.appendChild(s),
                        t.appendChild(n),
                        e.appendChild(t),
                        e.appendChild(a),
                        document.body.appendChild(e)
                    }()
                }
                return n.init = function(e) {
                    e = e || {},
                    "1" === localStorage.getItem(i) || t.checkUserAgent() || s()
                }
                ,
                n
            }(jQuery, ie.utilities, device),
            ie.adultForm = function(e, t, a) {
                var n = {}
                  , i = "_pp_ppc";
                function o() {
                    localStorage.setItem(i, "1"),
                    e(".video-thumb img").removeClass("img-bluring"),
                    e(".rel-link img").removeClass("img-bluring"),
                    document.querySelector(".ppc-layer").style.display = "none"
                }
                function s() {
                    var t;
                    t = e('<div class="ppc-layer">\n  <div class="ppc-form-wrapper">\n    <div class="ppc-cross">\n      <i class="icon icon-cross"></i>\n    </div>\n    <div class="ppc-form">\n      <div class="title">\n        PornPics is <span>adults only</span> website!\n      </div>\n      <div class="text">\n        <p>PornPics is strictly limited to those over 18 or of legal age in your jurisdiction, whichever is greater.</p>\n        <p>One of our core goals is to help parents restrict access to PornPics for minors, so we have ensured that PornPics is, and remains, fully compliant with the RTA (Restricted to Adults) code. This means that all access to the site can be blocked by simple parental control tools. It is important that responsible parents and guardians take the necessary steps to prevent minors from accessing unsuitable content online, especially age-restricted content.</p>\n        <p>Anyone with a minor in their household or under their supervision should implement basic parental control protections, including computer hardware and device settings, software installation, or ISP filtering services, to block your minors from accessing inappropriate content.</p>\n      </div>\n      <div class="agree">\n       <div class="bottom-text">\n         To enter PornPics you must be 18 or older\n        </div>\n       <div class="button-agree btn-fill">\n          I\'m 18 or older - enter PornPics\n       </div>\n      </div>\n      <div class="ppc-footer">\n        <a href="/privacy/">\n          Read more about our Terms of Use\n        </a>\n      </div>\n    </div>\n  </div>\n</div>'),
                    e(document.body).append(t),
                    e(".ppc-layer").on("click", (function(t) {
                        e(t.target).hasClass("ppc-layer") && o()
                    }
                    )),
                    e(".ppc-cross").on("click", o),
                    e(".button-agree").on("click", o)
                }
                return n.init = function(a) {
                    a = a || {},
                    "1" === localStorage.getItem(i) || t.checkUserAgent() || (e(".video-thumb img").addClass("img-bluring"),
                    e(".rel-link img").addClass("img-bluring"),
                    s())
                }
                ,
                n
            }(jQuery, ie.utilities, device),
            ie.devMode = function(e) {
                var t = {}
                  , a = {}
                  , n = !1
                  , i = "";
                return a.init = function(e) {
                    var a;
                    (function(e) {
                        t.pageType = e.pageType || ""
                    }
                    )(e = e || {}),
                    "category_rotator_maps" !== t.pageType && "tag_rotator_maps" !== t.pageType && "search" !== t.pageType && "search_recent" !== t.pageType && "search_sponsor" !== t.pageType || "" !== (a = location.search) && null !== a.match(/(\?|\&)devstats(.*?)/g) && (n = !0,
                    i = a)
                }
                ,
                a.getMode = function() {
                    return n
                }
                ,
                a.getQuery = function() {
                    return i.replace(/^(\?|\&)/, "&")
                }
                ,
                a
            }(jQuery),
            ie.bfPromo = function(e) {
                var t = {}
                  , a = {};
                function n(e) {
                    var a = function(e) {
                        var a, n = [];
                        for (const i in t.imageNames)
                            Object.prototype.hasOwnProperty.call(t.imageNames, i) && ((a = document.createElement("img")).src = t.sponsorArray[e] + t.imageNames[i],
                            a.className = i,
                            n.push(a));
                        return n
                    }(e);
                    document.getElementById(t.linkId).href = t.linkArray[e],
                    document.getElementById(t.linkId).setAttribute("target", "_blank"),
                    document.getElementById(t.linkId).appendChild(a[1]),
                    document.getElementById(t.linkId).appendChild(a[2]),
                    document.getElementById(t.linkId).appendChild(a[3]),
                    document.getElementById(t.linkId2).href = t.linkArray[e],
                    document.getElementById(t.linkId2).setAttribute("target", "_blank"),
                    document.getElementById(t.linkId2).appendChild(a[0])
                }
                function i() {
                    n(function(e, t) {
                        let a = e - .5 + Math.random() * (t - e + 1);
                        return Math.round(a)
                    }(1, t.sponsorArray.length) - 1)
                }
                return a.init = function(e) {
                    (function(e) {
                        t.linkId = e.linkId || "",
                        t.linkId2 = e.linkId2 || "",
                        t.sponsorId = e.sponsorId || "",
                        t.sponsorId2 = e.sponsorId2 || "",
                        t.linkArray = e.linkArray || [],
                        t.sponsorArray = e.sponsorArray || [],
                        t.imageNames = e.imageNames || {}
                    }
                    )(e = e || {}),
                    null !== document.getElementById(t.linkId) && null !== document.getElementById(t.linkId2) && i()
                }
                ,
                a
            }(jQuery),
            ie.langCookie = function(e, t) {
                var a = {}
                  , n = {}
                  , i = "pp_lang"
                  , o = 1;
                function s() {
                    document.querySelectorAll("." + a.itemClass).forEach((function(e) {
                        e.addEventListener("click", (function(e) {
                            !function(e) {
                                var a = t.getCookie(i)
                                  , n = new Date;
                                if ("" === e || e.length > 3 || e.length < 2)
                                    return;
                                if (void 0 === a || "" === a)
                                    return;
                                if (a === e)
                                    return;
                                n.setFullYear(n.getFullYear() + o),
                                t.setCookie(i, e, {
                                    path: "/",
                                    domain: "",
                                    expires: n
                                })
                            }(e.target.getAttribute(a.attr))
                        }
                        ))
                    }
                    ))
                }
                return n.init = function(e) {
                    (function(e) {
                        a.itemClass = e.itemClass || "",
                        a.attr = e.attr || ""
                    }
                    )(e = e || {}),
                    s()
                }
                ,
                n
            }(jQuery, ie.utilities),
            function(e, t, a) {
                var n, i, o = e(window), s = e(document), r = !1, l = 1, c = 20, u = "", d = t.mobile(), p = o.width(), m = {
                    PAGE_TYPE: "undefined" != typeof PP_PAGE_TYPE ? PP_PAGE_TYPE : "",
                    maxPage: "undefined" == typeof P_MAX ? void 0 : P_MAX,
                    SUBTYPE: "undefined" != typeof PP_SUBTYPE ? PP_SUBTYPE : ""
                }, h = "main", g = "category", f = "category_recent", b = "category_recent_2", v = "category_shemale", y = "category_shemale_rotator_maps", w = "category_shemale_recent", C = "category_rotator_maps", k = "tag_rotator_maps", _ = "recent", P = "popular", A = "tags", I = "tags_recent", T = "gallery_gc", E = "gallery", S = "gallery_frame", N = "gallery_shemale", D = "gallery_thumbspw", x = "search", L = "search_recent", M = "search_sponsor", B = "models", O = "models_filters", U = "channels", j = "favorite_new", F = "favorite_old", R = "favorite_random", V = "favorite_channels_new", H = "favorite_channels_old", G = "favorite_channels_random", z = "favorite_models_new", q = "favorite_models_old", W = "favorite_models_random", J = "cam_models", Y = "initMain", Q = "initCategory", X = "initTags", K = "initCategoryShemale", $ = "initCategoryShemaleRotatorMaps", ae = "initCategoryRotatorMaps", ne = "initGalleryGC", ie = "initGallery", oe = "initSearch", se = "initSearchSponsor", re = "initModels", le = "initChannels", ue = "initFavoriteNew", de = "initFavoriteOld", pe = "initFavoriteRandom", me = "initFavoriteChannelsNew", he = "initFavoriteChannelsOld", ge = "initFavoriteChannelsRandom", fe = "initFavoriteModelsNew", be = "initFavoriteModelsOld", ve = "initFavoriteModelsRandom", ye = "initCamModels", we = "utilitiesInit", Ce = "utilitiesSetPageType", ke = "utilitiesIsIOS12", _e = "mainGridInit", Pe = "mainGridApplyLayout", Ae = "mainGridHideLoader", Ie = "mainGridNonFloating", Te = "mainGridGetNextJsonLazyLoadPage", Ee = "mainGridGetNextCamModelJsonLazyLoadPage", Se = "mainGridGetNextFavLazyLoadPage", Ne = "mainGridGetNextFavLazyLoadPageWithFlatCover", De = "mainGridResetHeights", xe = "lazyLoadNewInit", Le = "lazyLoadNewUpdate", Me = "showsClicksWatcherInit", Be = "showsClicksWatcherUpdate", Oe = "showsClicksTagsWatcherInit", Ue = "showsClicksRelWatcherInit", je = "showsClicksRelWatcherUpdate", Fe = "showsClicksADInit", Re = "showsClicksADUpdate", Ve = "categorySlugHistoryInit", He = "userModuleInit", Ge = "userCheckStatus", ze = "userSetMenu", qe = "userSetAuthEvent", We = "userSetLogoutEvent", Je = "userAddFavIcons", Ye = "userAddFavChannelsIcons", Qe = "userAddFavModelsIcons", Xe = "userGetMaxFavorPage", Ke = "userGetChannelsMaxFavorPage", Ze = "userGetModelsMaxFavorPage", $e = "userSetFuvButtonEvent", et = "userSetIndividualPageFavButton", tt = "directUserInit", at = "impressionInit", nt = "goBackInit", it = "goBackGetCurrentPage", ot = "goBackInitPageEvents", st = "goBackGoToThumb", rt = "goBackShowLoader", lt = "goBackGalleryInfoInit", ct = "adManagerInit", ut = "adManagerInclude", dt = "adManagerIncludeGallery", pt = "adManagerIncludeAdLine", mt = "adManagerFrameTransform", ht = "adManagerIncludeRelAd", gt = "adManagerInitRelEvents", ft = "adManagerInitMainEvents", bt = "stripVideoInit", vt = "userBookmarksInit", yt = "userGEOInit", wt = "newAdModuleInit", Ct = "adToGridInit", kt = "searchNoResults", _t = "relSearchesInit", Pt = "channelsFiltersInit", At = "modalWindowInit", It = "modalWindowShow", Tt = "modalWindowsAllInit", Et = "modalWindowReportInit", St = "loginFormInit", Nt = "loginFormGetForm", Dt = "relatedInit", xt = "relatedGetNextPage", Lt = "relatedGetPrevPage", Mt = "inViewPort", Bt = "psInit", Ot = "ps5Init", Ut = "galleryInit", jt = "galleryOldBannerInit", Ft = "bannerZoomInit", Rt = "sponsorInit", Vt = "moreTagsInit", Ht = "shareInit", Gt = "commentsInit", zt = "suggestInit", qt = "suggestV2Init", Wt = "suggestNewInit", Jt = "filtersInit", Yt = "dropDownInit", Qt = "mobDropDownInit", Xt = "captchaV3Init", Kt = "subMenuDropDownInit", Zt = "setLoadEvent", $t = "setScrollEvent", ea = "setResizeEvent", ta = "loadLastPosition", aa = "setOnScrollCallBack", na = "setRelScrollEvent", ia = "themeInit", oa = "searchHistoryInit", sa = "searchInit", ra = "framePositionInit", la = "catListInit", ca = "upButtonInit", ua = "footerInit", da = "randomGalleryInit", pa = "mobPaginationFormInit", ma = "galleryPlayerInit", ha = "cookieFormInit", ga = "adultFormInit", fa = "devModeInit", ba = "devModeGetMode", va = "bfPromoInit", ya = "langCookieInit", wa = "intiAutoLaunchNoDependentServices", Ca = "initAdBannerManager", ka = "camBannerManagerInit";
                function _a(e) {
                    m.PAGE_TYPE === E || m.PAGE_TYPE === T || m.PAGE_TYPE === N || m.PAGE_TYPE === D || m.PAGE_TYPE === S ? ce.publish(mt) : ce.publish(ut),
                    ce.publish(Pe, "added"),
                    ce.publish(Le),
                    l += 1,
                    void 0 !== e && null === e && (l = m.maxPage + 1),
                    l > m.maxPage ? ce.publish(Ae) : r = !1
                }
                function Pa(e) {
                    if (!r) {
                        var t = window.innerHeight ? window.innerHeight : window.height();
                        (!0 === e || o.scrollTop() + t > s.height() - (d ? 5300 : 1100)) && void 0 !== m.maxPage && l <= m.maxPage && (r = !0,
                        i())
                    }
                }
                function Aa() {
                    var e = location.pathname;
                    return e = (e = e.replace("/", "")).replace("/", "")
                }
                switch ("" === m.PAGE_TYPE && ("undefined" == typeof QUERY ? "undefined" != typeof ID && ("undefined" != typeof GC_TEMPLATE ? m.PAGE_TYPE = "gallery_gc" : m.PAGE_TYPE = "gallery") : m.PAGE_TYPE = "search"),
                m.cid = "undefined" != typeof P_CID ? P_CID : null,
                m.slug = "undefined" != typeof P_SLUG ? P_SLUG : null,
                m.rid = "undefined" != typeof P_RID ? P_RID : null,
                m.galleryId = "undefined" != typeof ID ? ID : null,
                m.paySite = "undefined" != typeof PAYSITE ? PAYSITE : "",
                m.paySiteID = "undefined" != typeof PAYSITE_ID ? PAYSITE_ID : "",
                m.bannerTrigger = "undefined" != typeof PBP ? PBP : "",
                m.galleryBanner = "undefined" != typeof P_BANNERS ? P_BANNERS : null,
                m.searchQuery = "undefined" != typeof QUERY ? QUERY : "",
                m.sponsorLink = "undefined" != typeof SPONSOR_LINK ? SPONSOR_LINK : "",
                m.sponsorText = "undefined" != typeof SPONSOR_TEXT ? SPONSOR_TEXT : "",
                m.modelFilter = "undefined" != typeof PP_MODEL_FILTER ? PP_MODEL_FILTER : "",
                m.stripParams = "undefined" != typeof STRIP_PARAMS ? STRIP_PARAMS : null,
                m.lang = "undefined" != typeof PP_LANG ? PP_LANG : "",
                m.searchNoSuchResultsText = "undefined" != typeof PP_TEXT_SEARCH_1 ? PP_TEXT_SEARCH_1 : "",
                m.searchPopualrSearchesText = "undefined" != typeof PP_TEXT_SEARCH_2 ? PP_TEXT_SEARCH_2 : "",
                m.relConfig = "undefined" != typeof PP_REL_CONF ? PP_REL_CONF : null,
                m.promoSponsorOFBG = "undefined" != typeof PP_S_BG ? PP_S_BG : "",
                m.promoSponsorOFLogo = "undefined" != typeof PP_S_LOGO ? PP_S_LOGO : "",
                m.galleryVideoPath = "undefined" != typeof PP_VIDEO_PATH ? PP_VIDEO_PATH : "",
                m.gallerySponsorID = "undefined" != typeof SPONSOR_GALLERY_ID ? SPONSOR_GALLERY_ID : "",
                m.profileID = "undefined" != typeof PP_PROFILE_ID ? PP_PROFILE_ID : "",
                m.newPS = "undefined" != typeof PP_NEW_PS ? PP_NEW_PS : "",
                m.galleryType = "undefined" != typeof PP_GALLERY_TYPE ? PP_GALLERY_TYPE : "",
                ce.subscribe(Zt, (function() {
                    o.on("load.grid", (function() {
                        o.width() > 1527 && Pa(!0)
                    }
                    ))
                }
                )),
                ce.subscribe($t, (function() {
                    o.on("scroll.grid", (function() {
                        Pa(!1)
                    }
                    ))
                }
                )),
                ce.subscribe(ea, (function() {
                    o.on("resize.grid", (function() {
                        clearTimeout(n),
                        n = setTimeout((function() {
                            var e = o.width();
                            m.PAGE_TYPE === E || m.PAGE_TYPE === T || m.PAGE_TYPE === N || m.PAGE_TYPE === D || m.PAGE_TYPE === S ? ce.publish(mt) : ce.publish(ut),
                            e > 943 && p <= 943 || e <= 943 && p > 943 ? (e > 943 && ce.publish(De),
                            ce.publish(Pe, "changed"),
                            p = o.width()) : ce.publish(Pe, "refresh")
                        }
                        ), 100)
                    }
                    ))
                }
                )),
                ce.subscribe(ta, (function(e, t) {
                    ce.publish(it, (function(a) {
                        var n = a;
                        switch (l = n,
                        ce.publish(rt),
                        m.PAGE_TYPE) {
                        case g:
                            ce.publish(Te, {
                                url: "https://www.pornpics.com/getchank2.php?rid=" + m.rid + "&cat=" + m.cid + "&limit=" + (c * n - 20) + "&offset=20",
                                data: null,
                                adType: 1,
                                callback: function() {
                                    _a(),
                                    e(),
                                    ce.publish(st, {
                                        callback: null,
                                        lazyTrigger: !0
                                    }),
                                    ce.publish(Je, {
                                        container: "tiles",
                                        type: "add"
                                    })
                                }
                            });
                            break;
                        case f:
                            ce.publish(Te, {
                                url: "https://www.pornpics.com/getnext.php?type=recent&cat=" + m.cid + "&limit=" + (c * n - 20) + "&offset=20",
                                data: null,
                                adType: 1,
                                callback: function() {
                                    _a(),
                                    e(),
                                    ce.publish(st, {
                                        callback: null,
                                        lazyTrigger: !0
                                    }),
                                    ce.publish(Je, {
                                        container: "tiles",
                                        type: "add"
                                    })
                                }
                            });
                            break;
                        case y:
                        case C:
                        case k:
                            ce.publish(Te, {
                                url: document.location.pathname + "?limit=" + (c * n - 20) + "&offset=20",
                                data: null,
                                adType: 1,
                                callback: function() {
                                    _a(),
                                    e(),
                                    ce.publish(st, {
                                        callback: null,
                                        lazyTrigger: !0
                                    }),
                                    ce.publish(Je, {
                                        container: "tiles",
                                        type: "add"
                                    })
                                }
                            });
                            break;
                        case A:
                            ce.publish(Te, {
                                url: "https://www.pornpics.com/getchank2.php?rid=" + m.rid + "&cat=" + m.cid + "&limit=" + (c * n - 20) + "&offset=20",
                                data: null,
                                adType: 1,
                                callback: function() {
                                    _a(),
                                    e(),
                                    ce.publish(st, {
                                        callback: null,
                                        lazyTrigger: !0
                                    }),
                                    ce.publish(Je, {
                                        container: "tiles",
                                        type: "add"
                                    })
                                }
                            });
                            break;
                        case I:
                            ce.publish(Te, {
                                url: "https://www.pornpics.com/getchank2.php?rid=" + m.rid + "&cat=" + m.cid + "&limit=" + (c * n - 20) + "&offset=20&recent=1",
                                data: null,
                                adType: 1,
                                callback: function() {
                                    _a(),
                                    e(),
                                    ce.publish(st, {
                                        callback: null,
                                        lazyTrigger: !0
                                    }),
                                    ce.publish(Je, {
                                        container: "tiles",
                                        type: "add"
                                    })
                                }
                            });
                            break;
                        case P:
                        case _:
                            ce.publish(Te, {
                                url: document.location.pathname + "?limit=" + (c * n - 20) + "&offset=20",
                                data: null,
                                adType: 1,
                                callback: function() {
                                    _a(),
                                    e(),
                                    ce.publish(st, {
                                        callback: null,
                                        lazyTrigger: !0
                                    }),
                                    ce.publish(Je, {
                                        container: "tiles",
                                        type: "add"
                                    })
                                }
                            });
                            break;
                        case x:
                        case L:
                        case M:
                            var i = 1;
                            m.PAGE_TYPE === M && (i = 0),
                            ce.publish(Te, {
                                url: "/search/srch.php?q=" + m.searchQuery + "&lang=" + m.lang + "&limit=" + (c * n - 20) + "&offset=20",
                                data: null,
                                adType: i,
                                callback: function() {
                                    _a(),
                                    e(),
                                    ce.publish(st, {
                                        callback: null,
                                        lazyTrigger: !0
                                    }),
                                    ce.publish(Je, {
                                        container: "tiles",
                                        type: "add"
                                    })
                                }
                            });
                            break;
                        case j:
                            ce.publish(Se, {
                                url: "/api/favorites/get_userfav/desc?limit=" + c * n + "&offset=0",
                                data: null,
                                callback: function() {
                                    _a(),
                                    e(),
                                    ce.publish(st, {
                                        callback: null,
                                        lazyTrigger: !0
                                    }),
                                    ce.publish(Je, {
                                        container: "tiles",
                                        type: "del"
                                    }),
                                    2 === l && Pa()
                                }
                            });
                            break;
                        case F:
                            ce.publish(Se, {
                                url: "/api/favorites/get_userfav/asc?limit=" + c * n + "&offset=0",
                                data: null,
                                callback: function() {
                                    _a(),
                                    e(),
                                    ce.publish(st, {
                                        callback: null,
                                        lazyTrigger: !0
                                    }),
                                    ce.publish(Je, {
                                        container: "tiles",
                                        type: "del"
                                    }),
                                    2 === l && Pa()
                                }
                            });
                            break;
                        case V:
                            ce.publish(Ne, {
                                url: "/api/favorites/get_userfav/channels/desc?limit=" + c * n + "&offset=0",
                                data: null,
                                coverUrl: "https://rel.pornpics.com/favorites/",
                                dataType: "channel",
                                callback: function() {
                                    _a(),
                                    e(),
                                    ce.publish(st, {
                                        callback: null,
                                        lazyTrigger: !0
                                    }),
                                    ce.publish(Ye, {
                                        container: "tiles",
                                        type: "del"
                                    }),
                                    2 === l && Pa()
                                }
                            });
                            break;
                        case H:
                            ce.publish(Ne, {
                                url: "/api/favorites/get_userfav/channels/asc?limit=" + c * n + "&offset=0",
                                data: null,
                                coverUrl: "https://rel.pornpics.com/favorites/",
                                dataType: "channel",
                                callback: function() {
                                    _a(),
                                    e(),
                                    ce.publish(st, {
                                        callback: null,
                                        lazyTrigger: !0
                                    }),
                                    ce.publish(Ye, {
                                        container: "tiles",
                                        type: "del"
                                    }),
                                    2 === l && Pa()
                                }
                            });
                            break;
                        case z:
                            ce.publish(Ne, {
                                url: "/api/favorites/get_userfav/models/desc?limit=" + c * n + "&offset=0",
                                data: null,
                                coverUrl: "https://rel.pornpics.com/favorites/",
                                dataType: "model",
                                callback: function() {
                                    _a(),
                                    e(),
                                    ce.publish(st, {
                                        callback: null,
                                        lazyTrigger: !0
                                    }),
                                    ce.publish(Qe, {
                                        container: "tiles",
                                        type: "del"
                                    }),
                                    2 === l && Pa()
                                }
                            });
                            break;
                        case q:
                            ce.publish(Ne, {
                                url: "/api/favorites/get_userfav/models/asc?limit=" + c * n + "&offset=0",
                                data: null,
                                coverUrl: "https://rel.pornpics.com/favorites/",
                                dataType: "model",
                                callback: function() {
                                    _a(),
                                    e(),
                                    ce.publish(st, {
                                        callback: null,
                                        lazyTrigger: !0
                                    }),
                                    ce.publish(Qe, {
                                        container: "tiles",
                                        type: "del"
                                    }),
                                    2 === l && Pa()
                                }
                            });
                            break;
                        case E:
                        case T:
                        case D:
                        case N:
                        case S:
                            ce.publish(Lt, {
                                limit: c,
                                page: l,
                                callback: e,
                                callbackRel: function() {
                                    ce.publish(st, {
                                        callback: t,
                                        lazyTrigger: !0
                                    })
                                }
                            })
                        }
                    }
                    ))
                }
                )),
                ce.subscribe(aa, (function(e) {
                    switch (e) {
                    case g:
                        1 === l && (l = 2),
                        i = function() {
                            ce.publish(Te, {
                                url: "https://www.pornpics.com/getchank2.php?rid=" + m.rid + "&cat=" + m.cid + "&limit=" + "20&offset=" + (l - 1) * c,
                                data: null,
                                adType: 1,
                                callback: function(e) {
                                    _a(e),
                                    ce.publish(Je, {
                                        container: "tiles",
                                        type: "add"
                                    }),
                                    ce.publish(Be),
                                    ce.publish(Re)
                                }
                            })
                        }
                        ;
                        break;
                    case f:
                        1 === l && (l = 2),
                        i = function() {
                            ce.publish(Te, {
                                url: "https://www.pornpics.com/getnext.php?type=recent&cat=" + m.cid + "&limit=" + "20&offset=" + (l - 1) * c,
                                data: null,
                                adType: 1,
                                callback: function(e) {
                                    _a(e),
                                    ce.publish(Je, {
                                        container: "tiles",
                                        type: "add"
                                    }),
                                    ce.publish(Be),
                                    ce.publish(Re)
                                }
                            })
                        }
                        ;
                        break;
                    case b:
                        1 === l && (l = 2),
                        i = function() {
                            ce.publish(Te, {
                                url: "https://www.pornpics.com/getchank2.php?rid=" + m.rid + "NaN&cat=" + m.cid + "&limit=" + "20&offset=" + (l - 1) * c,
                                data: null,
                                adType: 1,
                                callback: function(e) {
                                    _a(e),
                                    ce.publish(Je, {
                                        container: "tiles",
                                        type: "add"
                                    }),
                                    ce.publish(Be),
                                    ce.publish(Re)
                                }
                            })
                        }
                        ;
                        break;
                    case y:
                        1 === l && (l = 2),
                        ce.publish(ba, (function(e, t) {
                            e && (u = t),
                            i = function() {
                                ce.publish(Te, {
                                    url: document.location.pathname + "?limit=" + "20&offset=" + (l - 1) * c + u,
                                    data: null,
                                    adType: 1,
                                    callback: function(e) {
                                        _a(e),
                                        ce.publish(Je, {
                                            container: "tiles",
                                            type: "add"
                                        }),
                                        ce.publish(Be),
                                        ce.publish(Re)
                                    }
                                })
                            }
                        }
                        ));
                        break;
                    case A:
                        1 === l && (l = 2),
                        i = function() {
                            ce.publish(Te, {
                                url: "https://www.pornpics.com/getchank2.php?rid=" + m.rid + "&cat=" + m.cid + "&limit=" + "20&offset=" + (l - 1) * c,
                                data: null,
                                adType: 1,
                                callback: function(e) {
                                    _a(e),
                                    ce.publish(Je, {
                                        container: "tiles",
                                        type: "add"
                                    }),
                                    ce.publish(Be),
                                    ce.publish(Re)
                                }
                            })
                        }
                        ;
                        break;
                    case I:
                        1 === l && (l = 2),
                        i = function() {
                            ce.publish(Te, {
                                url: "https://www.pornpics.com/getchank2.php?rid=" + m.rid + "&cat=" + m.cid + "&limit=" + "20&offset=" + (l - 1) * c + "&recent=1",
                                data: null,
                                adType: 1,
                                callback: function(e) {
                                    _a(e),
                                    ce.publish(Je, {
                                        container: "tiles",
                                        type: "add"
                                    }),
                                    ce.publish(Be),
                                    ce.publish(Re)
                                }
                            })
                        }
                        ;
                        break;
                    case P:
                    case _:
                        1 === l && (l = 2),
                        i = function() {
                            ce.publish(Te, {
                                url: document.location.pathname + "?limit=" + "20&offset=" + (l - 1) * c,
                                data: null,
                                adType: 1,
                                callback: function(e) {
                                    _a(e),
                                    ce.publish(Je, {
                                        container: "tiles",
                                        type: "add"
                                    }),
                                    ce.publish(Be),
                                    ce.publish(Re)
                                }
                            })
                        }
                        ;
                        break;
                    case x:
                        i = function() {
                            var e = 1;
                            1 === l && (l = 2),
                            m.PAGE_TYPE === M && (e = 0),
                            ce.publish(ba, (function(t, a) {
                                t && (u = a),
                                ce.publish(Te, {
                                    url: "/search/srch.php?q=" + m.searchQuery + "&lang=" + m.lang + "&limit=" + "20&offset=" + (l - 1) * c + u,
                                    data: null,
                                    adType: e,
                                    callback: function(e) {
                                        _a(e),
                                        ce.publish(Je, {
                                            container: "tiles",
                                            type: "add"
                                        }),
                                        ce.publish(Be),
                                        ce.publish(Re)
                                    }
                                })
                            }
                            ))
                        }
                        ;
                        break;
                    case j:
                        i = function() {
                            ce.publish(Se, {
                                url: "/api/favorites/get_userfav/desc?limit=20&offset=" + (l - 1) * c,
                                data: null,
                                callback: function() {
                                    _a(),
                                    ce.publish(Je, {
                                        container: "tiles",
                                        type: "del"
                                    }),
                                    2 === l && Pa()
                                }
                            })
                        }
                        ;
                        break;
                    case F:
                        i = function() {
                            ce.publish(Se, {
                                url: "/api/favorites/get_userfav/asc?limit=20&offset=" + (l - 1) * c,
                                data: null,
                                callback: function() {
                                    _a(),
                                    ce.publish(Je, {
                                        container: "tiles",
                                        type: "del"
                                    }),
                                    2 === l && Pa()
                                }
                            })
                        }
                        ;
                        break;
                    case R:
                        i = function() {
                            ce.publish(Se, {
                                url: "/api/favorites/get_random?limit=20&offset=" + (l - 1) * c,
                                data: null,
                                callback: function() {
                                    _a(),
                                    ce.publish(Je, {
                                        container: "tiles",
                                        type: "del"
                                    }),
                                    2 === l && Pa()
                                }
                            })
                        }
                        ;
                        break;
                    case V:
                        i = function() {
                            ce.publish(Ne, {
                                url: "/api/favorites/get_userfav/channels/desc?limit=20&offset=" + (l - 1) * c,
                                data: null,
                                coverUrl: "https://rel.pornpics.com/favorites/",
                                dataType: "channel",
                                callback: function() {
                                    _a(),
                                    ce.publish(Ye, {
                                        container: "tiles",
                                        type: "del"
                                    }),
                                    2 === l && Pa()
                                }
                            })
                        }
                        ;
                        break;
                    case H:
                        i = function() {
                            ce.publish(Ne, {
                                url: "/api/favorites/get_userfav/channels/asc?limit=20&offset=" + (l - 1) * c,
                                data: null,
                                coverUrl: "https://rel.pornpics.com/favorites/",
                                dataType: "channel",
                                callback: function() {
                                    _a(),
                                    ce.publish(Ye, {
                                        container: "tiles",
                                        type: "del"
                                    }),
                                    2 === l && Pa()
                                }
                            })
                        }
                        ;
                        break;
                    case G:
                        i = function() {
                            ce.publish(Ne, {
                                url: "/api/favorites/get_userfav/channels/get_random?limit=20&offset=" + (l - 1) * c,
                                data: null,
                                coverUrl: "https://rel.pornpics.com/favorites/",
                                dataType: "channel",
                                callback: function() {
                                    _a(),
                                    ce.publish(Ye, {
                                        container: "tiles",
                                        type: "del"
                                    }),
                                    2 === l && Pa()
                                }
                            })
                        }
                        ;
                        break;
                    case z:
                        i = function() {
                            ce.publish(Ne, {
                                url: "/api/favorites/get_userfav/models/desc?limit=20&offset=" + (l - 1) * c,
                                data: null,
                                coverUrl: "https://rel.pornpics.com/favorites/",
                                dataType: "model",
                                callback: function() {
                                    _a(),
                                    ce.publish(Qe, {
                                        container: "tiles",
                                        type: "del"
                                    }),
                                    2 === l && Pa()
                                }
                            })
                        }
                        ;
                        break;
                    case q:
                        i = function() {
                            ce.publish(Ne, {
                                url: "/api/favorites/get_userfav/models/asc?limit=20&offset=" + (l - 1) * c,
                                data: null,
                                coverUrl: "https://rel.pornpics.com/favorites/",
                                dataType: "model",
                                callback: function() {
                                    _a(),
                                    ce.publish(Qe, {
                                        container: "tiles",
                                        type: "del"
                                    }),
                                    2 === l && Pa()
                                }
                            })
                        }
                        ;
                        break;
                    case W:
                        i = function() {
                            ce.publish(Ne, {
                                url: "/api/favorites/get_userfav/models/get_random?limit=20&offset=" + (l - 1) * c,
                                data: null,
                                coverUrl: "https://rel.pornpics.com/favorites/",
                                dataType: "model",
                                callback: function() {
                                    _a(),
                                    ce.publish(Qe, {
                                        container: "tiles",
                                        type: "del"
                                    }),
                                    2 === l && Pa()
                                }
                            })
                        }
                        ;
                        break;
                    case E:
                    case T:
                    case D:
                    case N:
                    case S:
                        i = function() {
                            ce.publish(xt, {
                                limit: c,
                                page: l
                            })
                        }
                        ;
                        break;
                    case J:
                        1 === l && (l = 2),
                        i = function() {
                            ce.publish(Ee, {
                                url: document.location.pathname + "?limit=" + "20&offset=" + (l - 1) * c,
                                data: null,
                                adType: 0,
                                callback: function(e) {
                                    _a(e)
                                }
                            })
                        }
                    }
                }
                )),
                ce.subscribe(na, (function() {
                    o.on("scroll.relgrid", (function() {
                        Pa(!0),
                        o.off("scroll.relgrid"),
                        ce.publish($t)
                    }
                    ))
                }
                )),
                ce.subscribe(wa, (function() {
                    Z.intiAutoLaunchNoDependentServices()
                }
                )),
                ce.subscribe(Ca, (function(e) {
                    e.pageType = m.PAGE_TYPE,
                    Z.initAdBannerManager(e)
                }
                )),
                ce.subscribe(ka, (function(e) {
                    e.pageType = m.PAGE_TYPE,
                    Z.initCamBannerManager(e)
                }
                )),
                ce.subscribe(we, (function(e) {
                    a.utilities.init(e)
                }
                )),
                ce.subscribe(Ce, (function(e) {
                    a.utilities.setPageType(e)
                }
                )),
                ce.subscribe(ke, (function(e) {
                    a.utilities.isiOSWithiOS12AndBelow() ? e.oldPS() : e.newPS()
                }
                )),
                ce.subscribe(Ct, (function(e) {
                    a.adToGrid.init(e)
                }
                )),
                ce.subscribe(_e, (function(e) {
                    a.mainGrid.init(e)
                }
                )),
                ce.subscribe(Pe, (function(e) {
                    a.mainGrid.applyLayout(e)
                }
                )),
                ce.subscribe(Ae, (function() {
                    a.mainGrid.hideLoader()
                }
                )),
                ce.subscribe(Ie, (function() {
                    a.mainGrid.nonFloatingLoader()
                }
                )),
                ce.subscribe(Te, (function(e) {
                    a.mainGrid.getNextJsonLazyLoadPage(e.url, e.data, e.adType, e.callback)
                }
                )),
                ce.subscribe(Ee, (function(e) {
                    a.mainGrid.getNextCamModelsJsonLazyLoadPage(e.url, e.data, e.adType, e.callback)
                }
                )),
                ce.subscribe(Se, (function(e) {
                    a.mainGrid.getNextFavLazyLoadPage(e.url, e.data, e.callback)
                }
                )),
                ce.subscribe(Ne, (function(e) {
                    a.mainGrid.getNextFavLazyLoadPageWithFlatCover(e.url, e.data, e.coverUrl, e.dataType, e.callback)
                }
                )),
                ce.subscribe(De, (function() {
                    a.mainGrid.resetHeights()
                }
                )),
                ce.subscribe(xe, (function(e) {
                    a.lazyloadNew.init(e)
                }
                )),
                ce.subscribe(Le, (function() {
                    a.lazyloadNew.update()
                }
                )),
                ce.subscribe(Me, (function(e) {
                    a.showsClicks.init(e)
                }
                )),
                ce.subscribe(Be, (function(e) {
                    a.showsClicks.updateShowsClicksWatcher()
                }
                )),
                ce.subscribe(Oe, (function(e) {
                    a.showsClicksTags.init(e)
                }
                )),
                ce.subscribe(Fe, (function(e) {
                    a.showsClicksAD.init(e)
                }
                )),
                ce.subscribe(Re, (function(e) {
                    a.showsClicksAD.updateShowsClicksWatcher()
                }
                )),
                ce.subscribe(Ue, (function(e) {
                    a.showsClicksRel.init(e)
                }
                )),
                ce.subscribe(je, (function(e) {
                    a.showsClicksRel.updateShowsClicksWatcher()
                }
                )),
                ce.subscribe(Ve, (function(e) {
                    a.categorySlugHistory.init(e)
                }
                )),
                ce.subscribe(He, (function(e) {
                    a.user.init(e)
                }
                )),
                ce.subscribe(Ge, (function(e) {
                    a.user.getUserStatus((function(t) {
                        e(t)
                    }
                    ))
                }
                )),
                ce.subscribe(qe, (function() {
                    e('#login-form button[type="submit"]').on("click", (function(t) {
                        t.preventDefault(),
                        a.user.auth(t, (function(t) {
                            if ("ok" === t.status) {
                                if (0 === t.data.is_verified)
                                    return e("#login-error").css("display", "none"),
                                    e("#login-verify").css("display", "block"),
                                    void e("#verifyEmailButton").css("display", "block");
                                location.reload()
                            } else
                                e("#login-error").css("display", "block"),
                                e("#login-verify").css("display", "none"),
                                e("#verifyEmailButton").css("display", "none")
                        }
                        ))
                    }
                    ))
                }
                )),
                ce.subscribe(We, (function() {
                    e(".user-logout").on("click", (function(e) {
                        a.user.logout()
                    }
                    ))
                }
                )),
                ce.subscribe(ze, (function(t) {
                    if ("ok" === t.status) {
                        if (e(".username-field").html(t.data.login),
                        e(".user-section").addClass("active"),
                        e("#navigation").addClass("user"),
                        void 0 !== t.data.can_upload && 1 === t.data.can_upload) {
                            try {
                                e(".member-upload").removeClass("hide"),
                                e(".member-upload > a").attr("href", e(".member-upload > a").attr("href") + "uploaded-galleries/new-gallery/")
                            } catch (e) {
                                console.log(e)
                            }
                            try {
                                e(".member-galleries").removeClass("hide"),
                                e(".member-galleries > a").attr("href", e(".member-galleries > a").attr("href") + "uploaded-galleries/?page=1")
                            } catch (e) {
                                console.log(e)
                            }
                            try {
                                e(".member-channels").removeClass("hide"),
                                e(".member-channels > a").attr("href", e(".member-channels > a").attr("href") + "created-channels/?page=1")
                            } catch (e) {
                                console.log(e)
                            }
                        }
                    } else
                        e(".login-section").addClass("active"),
                        e("#navigation").addClass("login");
                    ce.publish(qe),
                    ce.publish(We)
                }
                )),
                ce.subscribe(Je, (function(e) {
                    a.user.addFavIcons(e.container, e.type)
                }
                )),
                ce.subscribe(Ye, (function(e) {
                    a.user.addFavChannelsIcons(e.container, e.type)
                }
                )),
                ce.subscribe(Qe, (function(e) {
                    a.user.addFavModelsIcons(e.container, e.type)
                }
                )),
                ce.subscribe(Xe, (function(e) {
                    a.user.getMaxPage((function(t) {
                        m.maxPage = t,
                        0 === m.maxPage && a.utilities.hideLoader(),
                        e()
                    }
                    ))
                }
                )),
                ce.subscribe(Ke, (function(e) {
                    a.user.getChannelsMaxPage((function(t) {
                        m.maxPage = t,
                        0 === m.maxPage && a.utilities.hideLoader(),
                        e()
                    }
                    ))
                }
                )),
                ce.subscribe(Ze, (function(e) {
                    a.user.getModelsMaxPage((function(t) {
                        m.maxPage = t,
                        0 === m.maxPage && a.utilities.hideLoader(),
                        e()
                    }
                    ))
                }
                )),
                ce.subscribe($e, (function(e) {
                    a.user.setFuvButtonEvent(e.container, e.id, e.noLoginError)
                }
                )),
                ce.subscribe(et, (function(e) {
                    a.user.setIndividualPageFavButton(e)
                }
                )),
                ce.subscribe(tt, (function(e) {
                    a.directUser.init(e)
                }
                )),
                ce.subscribe(at, (function(e) {
                    a.impression.init(e)
                }
                )),
                ce.subscribe(nt, (function(e) {
                    a.goBack.init(e)
                }
                )),
                ce.subscribe(it, (function(e) {
                    e(a.goBack.getCurrentPage())
                }
                )),
                ce.subscribe(st, (function(e) {
                    void 0 === e ? a.goBack.goToThumb() : a.goBack.goToThumb(e.callback, e.lazyTrigger)
                }
                )),
                ce.subscribe(rt, (function() {
                    a.goBack.showLoader()
                }
                )),
                ce.subscribe(ot, (function(e) {
                    e()
                }
                )),
                ce.subscribe(lt, (function(e) {
                    a.goBackGalleryInfo.init(e)
                }
                )),
                ce.subscribe(ct, (function(e) {
                    a.adManager.init(e)
                }
                )),
                ce.subscribe(ut, (function() {
                    a.adManager.include()
                }
                )),
                ce.subscribe(dt, (function() {
                    a.adManager.includeGallery()
                }
                )),
                ce.subscribe(pt, (function(e) {
                    a.adManager.includeLineAd(e)
                }
                )),
                ce.subscribe(gt, (function() {
                    a.adManager.initRelEvents()
                }
                )),
                ce.subscribe(ft, (function() {
                    a.adManager.initMainEvents()
                }
                )),
                ce.subscribe(ht, (function() {
                    a.adManager.includeRelAd()
                }
                )),
                ce.subscribe(mt, (function() {
                    a.adManager.frameTransform()
                }
                )),
                ce.subscribe(bt, (function(e) {
                    a.stripVideo.init(e)
                }
                )),
                ce.subscribe(vt, (function() {
                    a.userBookmarks.init()
                }
                )),
                ce.subscribe(yt, (function(e) {
                    a.userGEO.init(e)
                }
                )),
                ce.subscribe(wt, (function(e) {
                    a.newAdModule.init(e)
                }
                )),
                ce.subscribe(_t, (function(e) {
                    a.relSearches.init(e)
                }
                )),
                ce.subscribe(Pt, (function(e) {
                    a.channelsFilters.init(e)
                }
                )),
                ce.subscribe(At, (function(e) {
                    a.modalWindow.init(e)
                }
                )),
                ce.subscribe(It, (function(e) {
                    a.modalWindow.show(e.force, e.form)
                }
                )),
                ce.subscribe(Tt, (function() {
                    a.feedback.init({
                        fbButton: "fb-button",
                        labelMessage: "Hello, we'd love to hear your feedback about our website...",
                        sendLink: "https://www.pornpics.com/email-sender.php",
                        sendLink_2: "https://fdb.pornpics.com/",
                        isLoggedCookieName: "is_logged_3",
                        api_is_logged: "/api/user/is_logged"
                    }),
                    a.feedback.setSendCallback((function() {
                        setTimeout((function() {
                            a.modalWindow.hide()
                        }
                        ), 3e3)
                    }
                    )),
                    e("#fb-button").on("click", (function() {
                        a.modalWindow.show(!1, a.feedback.getForm())
                    }
                    ))
                }
                )),
                ce.subscribe(Et, (function() {
                    a.report.init({
                        fbButton: "fb-button",
                        labelMessage: "Report content",
                        sendLink_2: "https://fdb.pornpics.com/",
                        isLoggedCookieName: "is_logged_3",
                        api_is_logged: "/api/user/is_logged"
                    }),
                    a.report.setSendCallback((function() {
                        setTimeout((function() {
                            a.modalWindow.hide()
                        }
                        ), 3e3)
                    }
                    )),
                    e(".gall-info-report").on("click", (function() {
                        a.modalWindow.show(!1, a.report.getForm())
                    }
                    ))
                }
                )),
                ce.subscribe(St, (function(e) {
                    a.loginForm.init(e)
                }
                )),
                ce.subscribe(Nt, (function(e, t) {
                    t(a.loginForm.getForm(e.force))
                }
                )),
                ce.subscribe(Dt, (function(e) {
                    a.related.init(e)
                }
                )),
                ce.subscribe(xt, (function(e) {
                    a.related.getNextPage(e.limit, e.page)
                }
                )),
                ce.subscribe(Lt, (function(e) {
                    a.related.getPrevPage(e.limit, e.page, e.callback, e.callbackRel, e.adType)
                }
                )),
                ce.subscribe(Mt, (function(e, t) {
                    t(a.inViewPort.inViewport(e.container, e.ind))
                }
                )),
                ce.subscribe(Bt, (function(e) {
                    a.ps.init(e)
                }
                )),
                ce.subscribe(Ot, (function(e) {
                    a.ps5.init(e)
                }
                )),
                ce.subscribe(Ut, (function(e) {
                    a.gallery.init(e)
                }
                )),
                ce.subscribe(jt, (function() {
                    a.gallery.oldBannerInit()
                }
                )),
                ce.subscribe(Ft, (function(e) {
                    a.bannerZoom.init(e)
                }
                )),
                ce.subscribe(Rt, (function(e) {
                    a.sponsor.init(e)
                }
                )),
                ce.subscribe(Vt, (function(e) {
                    a.moreTags.init(e)
                }
                )),
                ce.subscribe(Ht, (function(e) {
                    a.share.init(e)
                }
                )),
                ce.subscribe(Gt, (function(e) {
                    a.comments.init(e)
                }
                )),
                ce.subscribe(zt, (function(e) {
                    a.suggest.init(e)
                }
                )),
                ce.subscribe(qt, (function(e) {
                    a.suggestV2.init(e)
                }
                )),
                ce.subscribe(Wt, (function(e) {
                    a.suggestNew.init(e)
                }
                )),
                ce.subscribe(Jt, (function(e) {
                    a.filters.init(e)
                }
                )),
                ce.subscribe(Yt, (function(e) {
                    a.dropdown.init(e)
                }
                )),
                ce.subscribe(Qt, (function(e) {
                    a.mobDropdown.init(e)
                }
                )),
                ce.subscribe(Xt, (function(e) {
                    a.captchaV3.init(e)
                }
                )),
                ce.subscribe(Kt, (function(e) {
                    a.submenuDropdown.init(e)
                }
                )),
                ce.subscribe(ia, (function(e) {
                    a.theme.init(e)
                }
                )),
                ce.subscribe(sa, (function(e) {
                    a.search.init(e)
                }
                )),
                ce.subscribe(oa, (function(e) {
                    a.searchHistory.init(e)
                }
                )),
                ce.subscribe(kt, (function(e) {
                    a.search.searchNoResults(e)
                }
                )),
                ce.subscribe(ra, (function(e) {
                    a.framePosition.init(e)
                }
                )),
                ce.subscribe(la, (function(e) {
                    a.catList.init(e)
                }
                )),
                ce.subscribe(ca, (function(e) {
                    a.upButton.init(e)
                }
                )),
                ce.subscribe(ua, (function(e) {
                    a.footer.init(e)
                }
                )),
                ce.subscribe(da, (function(e) {
                    a.randomGallery.init(e),
                    a.randomGallery.setModalCallback((function(e, t) {
                        ce.subscribe(It, {
                            force: e,
                            form: t
                        })
                    }
                    ))
                }
                )),
                ce.subscribe(pa, (function(e) {
                    a.mobPagiForm.init(e)
                }
                )),
                ce.subscribe(ma, (function(e) {
                    a.galleryPlayer.init(e)
                }
                )),
                ce.subscribe(ha, (function() {
                    a.cookieForm.init()
                }
                )),
                ce.subscribe(ga, (function() {
                    a.adultForm.init()
                }
                )),
                ce.subscribe(fa, (function(e) {
                    a.devMode.init(e)
                }
                )),
                ce.subscribe(ba, (function(e) {
                    e(a.devMode.getMode(), a.devMode.getQuery())
                }
                )),
                ce.subscribe(va, (function(e) {
                    a.bfPromo.init(e)
                }
                )),
                ce.subscribe(ya, (function(e) {
                    a.langCookie.init(e)
                }
                )),
                ce.subscribe(ya, (function(e) {
                    a.langCookie.init(e)
                }
                )),
                ce.subscribe(Y, (function() {
                    ce.publish(nt, {
                        thumbClass: "thumbwook",
                        thumbInactiveClass: "inactive",
                        adClass: "r-frame",
                        thumbsOnPage: c
                    }),
                    ce.publish(Pe, null),
                    ce.publish(Ie),
                    ce.publish(Ae),
                    ce.publish(xe, {
                        itemClass: ".thumbwook a img"
                    }),
                    ce.publish(Me, {
                        id: "main",
                        pageType: m.PAGE_TYPE,
                        statsEndPoint: "https://rsd.pornpics.com/?rnd=",
                        wookmarkContainerID: "tiles",
                        wookmarkThumbClass: "thumbwook",
                        wookmarkAdClass: "r-frame",
                        wookmarkAdNativeClass: "c-model",
                        logoClass: "logo-main",
                        IDAttributeName: "data-mid"
                    }),
                    ce.publish(ot, (function() {
                        ce.publish(it, (function(e) {
                            null === e ? (ce.publish(Zt),
                            ce.publish($t),
                            console.log("history null")) : (ce.publish($t),
                            ce.publish(st, {
                                callback: null,
                                lazyTrigger: !0
                            }),
                            console.log("history on"))
                        }
                        ))
                    }
                    )),
                    ce.publish(Ge, (function(e) {
                        ce.publish(ze, e),
                        ce.publish(tt, {
                            bookmarkCookieName: "PP_UVM",
                            bookmarkCookieExpDays: 30,
                            newUserCookieName: "PP_UVM_NU",
                            newUserCookieExpDays: 1,
                            isUserAuth: a.user.isUserAuth()
                        }),
                        ce.publish(at, {
                            inViewClass: "imViewOn",
                            idAttr: "tid",
                            cookieName: "imcd",
                            logPath: "/sstats.php",
                            cid: "undefined" == typeof P_CID ? "" : P_CID,
                            isBookmark: a.directUser.isBookmark()
                        })
                    }
                    ))
                }
                )),
                ce.subscribe(Q, (function() {
                    ce.publish(nt, {
                        thumbClass: "thumbwook",
                        thumbInactiveClass: "inactive",
                        adClass: "r-frame",
                        thumbsOnPage: c
                    }),
                    ce.publish(Pe, null),
                    ce.publish(xe, {
                        itemClass: ".thumbwook a img"
                    }),
                    ce.publish(Me, {
                        id: Aa(),
                        pageType: m.PAGE_TYPE,
                        statsEndPoint: "https://live.pornpics.com/asea?rnd=",
                        wookmarkContainerID: "tiles",
                        wookmarkThumbClass: "thumbwook",
                        wookmarkAdClass: "r-frame",
                        wookmarkAdNativeClass: "c-model",
                        logoClass: "logo-main",
                        IDAttributeName: "data-gid"
                    }),
                    ce.publish(Fe, {
                        statsEndPoint: "https://rsd.pornpics.com/?rnd=",
                        wookmarkContainerID: "tiles",
                        wookmarkThumbClass: "c-model",
                        IDAttributeName: "data-cam-id",
                        typeAttributeName: "data-cam-type",
                        pageType: m.PAGE_TYPE
                    }),
                    ce.publish(Oe, {
                        pageType: "",
                        statsEndPoint: "https://live.pornpics.com/asea?rnd=",
                        statsEndPoint2: "https://rsd.pornpics.com/?rnd=",
                        wookmarkContainerID: "tags-section",
                        wookmarkThumbClass: "submenu-item",
                        wookmarkAdClass: "r-frame",
                        wookmarkAdNativeClass: "c-model",
                        logoClass: "logo-main",
                        slugId: m.cid,
                        reserveSlugId: m.slug,
                        IDAttributeName: "data-tag-id"
                    }),
                    ce.publish(ot, (function() {
                        ce.publish(it, (function(e) {
                            return null === e ? (ce.publish(Zt),
                            ce.publish($t),
                            ce.publish(ft),
                            void ce.publish(ut)) : 1 === e ? (ce.publish($t),
                            ce.publish(st, {
                                callback: null,
                                lazyTrigger: !0
                            }),
                            ce.publish(ft),
                            void ce.publish(ut)) : void ce.publish(ta, (function() {
                                ce.publish($t),
                                ce.publish(ft),
                                ce.publish(ut)
                            }
                            ))
                        }
                        ))
                    }
                    )),
                    ce.publish(Ge, (function(e) {
                        ce.publish(ze, e),
                        ce.publish(tt, {
                            bookmarkCookieName: "PP_UVM",
                            bookmarkCookieExpDays: 30,
                            newUserCookieName: "PP_UVM_NU",
                            newUserCookieExpDays: 1,
                            isUserAuth: a.user.isUserAuth()
                        }),
                        ce.publish(at, {
                            inViewClass: "imViewOn",
                            idAttr: "tid",
                            cookieName: "imcd",
                            logPath: "/sstats.php",
                            cid: "undefined" == typeof P_CID ? "" : P_CID,
                            isBookmark: a.directUser.isBookmark()
                        }),
                        ce.publish(Je, {
                            container: "tiles",
                            type: "add"
                        })
                    }
                    ))
                }
                )),
                ce.subscribe(K, (function() {
                    ce.publish(Pe, null),
                    ce.publish(Ae),
                    ce.publish(xe, {
                        itemClass: ".thumbwook a img"
                    }),
                    ce.publish(Me, {
                        id: Aa(),
                        pageType: m.PAGE_TYPE,
                        statsEndPoint: "https://live.pornpics.com/asea?rnd=",
                        wookmarkContainerID: "tiles",
                        wookmarkThumbClass: "thumbwook",
                        wookmarkAdClass: "r-frame",
                        wookmarkAdNativeClass: "c-model",
                        logoClass: "logo-main",
                        IDAttributeName: "data-mid"
                    }),
                    ce.publish(Ge, (function(e) {
                        ce.publish(ze, e),
                        ce.publish(tt, {
                            bookmarkCookieName: "PP_UVM",
                            bookmarkCookieExpDays: 30,
                            newUserCookieName: "PP_UVM_NU",
                            newUserCookieExpDays: 1,
                            isUserAuth: a.user.isUserAuth()
                        }),
                        ce.publish(at, {
                            inViewClass: "imViewOn",
                            idAttr: "tid",
                            cookieName: "imcd",
                            logPath: "/sstats.php",
                            cid: "undefined" == typeof P_CID ? "" : P_CID,
                            isBookmark: a.directUser.isBookmark()
                        })
                    }
                    ))
                }
                )),
                ce.subscribe($, (function() {
                    ce.publish(nt, {
                        thumbClass: "thumbwook",
                        thumbInactiveClass: "inactive",
                        adClass: "r-frame",
                        thumbsOnPage: c
                    }),
                    ce.publish(ut),
                    ce.publish(Pe, null),
                    ce.publish(xe, {
                        itemClass: ".thumbwook a img"
                    }),
                    ce.publish(Me, {
                        id: m.cid,
                        pageType: "rotator_maps",
                        statsEndPoint: "https://live.pornpics.com/asea?rnd=",
                        wookmarkContainerID: "tiles",
                        wookmarkThumbClass: "thumbwook",
                        wookmarkAdClass: "r-frame",
                        wookmarkAdNativeClass: "c-model",
                        logoClass: "logo-main",
                        IDAttributeName: "data-mid"
                    }),
                    ce.publish(ot, (function() {
                        ce.publish(it, (function(e) {
                            return null === e ? (ce.publish(Zt),
                            ce.publish($t),
                            ce.publish(ft),
                            void ce.publish(ut)) : 1 === e ? (ce.publish($t),
                            ce.publish(st, {
                                callback: null,
                                lazyTrigger: !0
                            }),
                            ce.publish(ft),
                            void ce.publish(ut)) : void ce.publish(ta, (function() {
                                ce.publish($t),
                                ce.publish(ft),
                                ce.publish(ut)
                            }
                            ))
                        }
                        ))
                    }
                    )),
                    ce.publish(Ge, (function(e) {
                        ce.publish(ze, e),
                        ce.publish(tt, {
                            bookmarkCookieName: "PP_UVM",
                            bookmarkCookieExpDays: 30,
                            newUserCookieName: "PP_UVM_NU",
                            newUserCookieExpDays: 1,
                            isUserAuth: a.user.isUserAuth()
                        }),
                        ce.publish(at, {
                            inViewClass: "imViewOn",
                            idAttr: "tid",
                            cookieName: "imcd",
                            logPath: "/sstats.php",
                            cid: "undefined" == typeof P_CID ? "" : P_CID,
                            isBookmark: a.directUser.isBookmark()
                        })
                    }
                    ))
                }
                )),
                ce.subscribe(ae, (function() {
                    ce.publish(nt, {
                        thumbClass: "thumbwook",
                        thumbInactiveClass: "inactive",
                        adClass: "r-frame",
                        thumbsOnPage: c
                    }),
                    ce.publish(ut),
                    ce.publish(Pe, null),
                    ce.publish(xe, {
                        itemClass: ".thumbwook a img"
                    }),
                    ce.publish(Ve, {
                        id: m.cid,
                        pageType: m.PAGE_TYPE,
                        wookmarkContainerID: "tiles",
                        wookmarkThumbClass: "thumbwook",
                        wookmarkAdClass: "r-frame",
                        wookmarkAdNativeClass: "c-model",
                        logoClass: "logo-main",
                        IDAttributeName: "data-mid"
                    }),
                    ce.publish(Me, {
                        id: m.cid,
                        pageType: m.PAGE_TYPE,
                        statsEndPoint: "https://live.pornpics.com/asea?rnd=",
                        wookmarkContainerID: "tiles",
                        wookmarkThumbClass: "thumbwook",
                        wookmarkAdClass: "r-frame",
                        wookmarkAdNativeClass: "c-model",
                        logoClass: "logo-main",
                        IDAttributeName: "data-mid"
                    }),
                    ce.publish(Fe, {
                        statsEndPoint: "https://rsd.pornpics.com/?rnd=",
                        wookmarkContainerID: "tiles",
                        wookmarkThumbClass: "c-model",
                        IDAttributeName: "data-cam-id",
                        typeAttributeName: "data-cam-type",
                        pageType: m.PAGE_TYPE
                    }),
                    ce.publish(Oe, {
                        pageType: "",
                        statsEndPoint: "https://live.pornpics.com/asea?rnd=",
                        statsEndPoint2: "https://rsd.pornpics.com/?rnd=",
                        wookmarkContainerID: "tags-section",
                        wookmarkThumbClass: "submenu-item",
                        wookmarkAdClass: "r-frame",
                        wookmarkAdNativeClass: "c-model",
                        logoClass: "logo-main",
                        slugId: m.cid,
                        reserveSlugId: m.slug,
                        IDAttributeName: "data-tag-id"
                    }),
                    ce.publish(ot, (function() {
                        ce.publish(it, (function(e) {
                            return null === e ? (ce.publish(Zt),
                            ce.publish($t),
                            ce.publish(ft),
                            void ce.publish(ut)) : 1 === e ? (ce.publish($t),
                            ce.publish(st, {
                                callback: null,
                                lazyTrigger: !0
                            }),
                            ce.publish(ft),
                            void ce.publish(ut)) : void ce.publish(ta, (function() {
                                ce.publish($t),
                                ce.publish(ft),
                                ce.publish(ut)
                            }
                            ))
                        }
                        ))
                    }
                    )),
                    ce.publish(Ge, (function(e) {
                        ce.publish(ze, e),
                        ce.publish(tt, {
                            bookmarkCookieName: "PP_UVM",
                            bookmarkCookieExpDays: 30,
                            newUserCookieName: "PP_UVM_NU",
                            newUserCookieExpDays: 1,
                            isUserAuth: a.user.isUserAuth()
                        }),
                        ce.publish(at, {
                            inViewClass: "imViewOn",
                            idAttr: "tid",
                            cookieName: "imcd",
                            logPath: "/sstats.php",
                            cid: "undefined" == typeof P_CID ? "" : P_CID,
                            isBookmark: a.directUser.isBookmark()
                        }),
                        ce.publish(Je, {
                            container: "tiles",
                            type: "add"
                        })
                    }
                    ))
                }
                )),
                ce.subscribe(X, (function() {
                    ce.publish(nt, {
                        thumbClass: "thumbwook",
                        thumbInactiveClass: "inactive",
                        adClass: "r-frame",
                        thumbsOnPage: c
                    }),
                    ce.publish(Pe, null),
                    ce.publish(xe, {
                        itemClass: ".thumbwook a img"
                    }),
                    ce.publish(Me, {
                        pageType: m.PAGE_TYPE,
                        statsEndPoint: "https://live.pornpics.com/asea?rnd=",
                        wookmarkContainerID: "tiles",
                        wookmarkThumbClass: "thumbwook",
                        wookmarkAdClass: "r-frame",
                        wookmarkAdNativeClass: "c-model",
                        logoClass: "logo-main",
                        IDAttributeName: "data-gid"
                    }),
                    ce.publish(Fe, {
                        statsEndPoint: "https://rsd.pornpics.com/?rnd=",
                        wookmarkContainerID: "tiles",
                        wookmarkThumbClass: "c-model",
                        IDAttributeName: "data-cam-id",
                        typeAttributeName: "data-cam-type",
                        pageType: m.PAGE_TYPE
                    }),
                    ce.publish(Oe, {
                        pageType: "",
                        statsEndPoint: "https://live.pornpics.com/asea?rnd=",
                        statsEndPoint2: "https://rsd.pornpics.com/?rnd=",
                        wookmarkContainerID: "tags-section",
                        wookmarkThumbClass: "submenu-item",
                        wookmarkAdClass: "r-frame",
                        wookmarkAdNativeClass: "c-model",
                        logoClass: "logo-main",
                        slugId: m.cid,
                        reserveSlugId: m.slug,
                        IDAttributeName: "data-tag-id"
                    }),
                    ce.publish(Oe, {
                        pageType: "",
                        statsEndPoint: "https://live.pornpics.com/asea?rnd=",
                        statsEndPoint2: "https://rsd.pornpics.com/?rnd=",
                        wookmarkContainerID: "tags-section",
                        wookmarkThumbClass: "submenu-item",
                        wookmarkAdClass: "r-frame",
                        wookmarkAdNativeClass: "c-model",
                        logoClass: "logo-main",
                        slugId: m.cid,
                        reserveSlugId: m.slug,
                        IDAttributeName: "data-tag-id"
                    }),
                    ce.publish(ot, (function() {
                        ce.publish(it, (function(e) {
                            return null === e ? (ce.publish(Zt),
                            ce.publish($t),
                            ce.publish(ft),
                            void ce.publish(ut)) : 1 === e ? (ce.publish($t),
                            ce.publish(st, {
                                callback: null,
                                lazyTrigger: !0
                            }),
                            ce.publish(ft),
                            void ce.publish(ut)) : void ce.publish(ta, (function() {
                                ce.publish($t),
                                ce.publish(ft),
                                ce.publish(ut)
                            }
                            ))
                        }
                        ))
                    }
                    )),
                    ce.publish(Ge, (function(e) {
                        ce.publish(ze, e),
                        ce.publish(tt, {
                            bookmarkCookieName: "PP_UVM",
                            bookmarkCookieExpDays: 30,
                            newUserCookieName: "PP_UVM_NU",
                            newUserCookieExpDays: 1,
                            isUserAuth: a.user.isUserAuth()
                        }),
                        ce.publish(at, {
                            inViewClass: "imViewOn",
                            idAttr: "tid",
                            cookieName: "imcd",
                            logPath: "/sstats.php",
                            cid: "undefined" == typeof P_CID ? "" : P_CID,
                            isBookmark: a.directUser.isBookmark()
                        }),
                        ce.publish(Je, {
                            container: "tiles",
                            type: "add"
                        })
                    }
                    ))
                }
                )),
                ce.subscribe(ne, (function() {
                    ce.publish(nt, {
                        thumbClass: "thumbwook",
                        thumbInactiveClass: "inactive",
                        adClass: "r-frame",
                        thumbsOnPage: c
                    }),
                    ce.publish(Pe, null),
                    ce.publish(xe, {
                        itemClass: ".thumbwook a img"
                    }),
                    ce.publish(Ve, {
                        id: m.galleryId,
                        pageType: m.PAGE_TYPE,
                        wookmarkContainerID: "rel-main",
                        wookmarkThumbClass: "thumbwook",
                        wookmarkAdClass: "r-frame",
                        wookmarkAdNativeClass: "c-model",
                        logoClass: "logo-main",
                        IDAttributeName: "data-mid"
                    }),
                    ce.publish(Me, {
                        id: m.galleryId,
                        pageType: m.PAGE_TYPE,
                        statsEndPoint: "https://live.pornpics.com/asea?rnd=",
                        wookmarkContainerID: "tiles",
                        wookmarkThumbClass: "thumbwook",
                        wookmarkAdClass: "r-frame",
                        wookmarkAdNativeClass: "c-model",
                        wookmarkPlayerClass: "gp-thumb",
                        logoClass: "logo-main",
                        IDAttributeName: "data-tid"
                    }),
                    ce.publish(Ue, {
                        id: m.galleryId,
                        pageType: C,
                        statsEndPoint: "https://live.pornpics.com/asea?rnd=",
                        statsEndPointRSD: "https://rsd.pornpics.com/?rnd=",
                        wookmarkContainerID: "rel-main",
                        wookmarkThumbClass: "thumbwook",
                        wookmarkAdClass: "r-frame",
                        wookmarkAdNativeClass: "c-model",
                        logoClass: "logo-main",
                        IDAttributeName: "data-mid"
                    }),
                    ce.publish(Fe, {
                        statsEndPoint: "https://rsd.pornpics.com/?rnd=",
                        wookmarkContainerID: "rel-main",
                        wookmarkThumbClass: "c-model",
                        IDAttributeName: "data-cam-id",
                        typeAttributeName: "data-cam-type",
                        pageType: m.PAGE_TYPE
                    }),
                    ce.publish(Dt, {
                        defaultRelPath: "https://rel.pornpics.com/related/related_json.php",
                        defaultRelData: {
                            data: m.relConfig,
                            lang: m.lang,
                            gid: m.galleryId,
                            limit: 400
                        },
                        rotatorMapsRelPath: "https://www.pornpics.com/gallery-related/",
                        rotatorMapsRelData: {
                            slug: 0,
                            related: m.galleryId,
                            lang: m.lang
                        },
                        reserveRelPath: "https://rel.pornpics.com/related/",
                        statsPath: "https://stats.pornpics.com/add_stat.php",
                        statsData: {
                            referer: encodeURIComponent(document.referrer),
                            page: ""
                        },
                        thumbsContainerId: "rel-main",
                        pageAddedCallBack: function() {
                            ce.publish(je),
                            ce.publish(Re),
                            _a(),
                            ce.publish(Je, {
                                container: "rel-main",
                                type: "add"
                            })
                        },
                        setMaxPage: function(e) {
                            m.maxPage = e
                        },
                        lazyloadCallback: function() {
                            ce.publish(Le)
                        }
                    }),
                    ce.publish(lt, {
                        infoBlockClass: "gallery-info"
                    }),
                    ce.publish(Ge, (function(t) {
                        ce.publish(ze, t),
                        ce.publish(tt, {
                            bookmarkCookieName: "PP_UVM",
                            bookmarkCookieExpDays: 30,
                            newUserCookieName: "PP_UVM_NU",
                            newUserCookieExpDays: 1,
                            isUserAuth: a.user.isUserAuth()
                        }),
                        ce.publish(at, {
                            inViewClass: "imViewOn",
                            idAttr: "tid",
                            cookieName: "imcd",
                            logPath: "/sstats.php",
                            cid: "undefined" == typeof P_CID ? "" : P_CID,
                            isBookmark: a.directUser.isBookmark()
                        }),
                        ce.publish(ot, (function() {
                            ce.publish(it, (function(t) {
                                ce.publish(Mt, {
                                    container: e("#rel-main"),
                                    ind: 0
                                }, (function(e) {
                                    if (null === t)
                                        return e ? (Pa(!0),
                                        ce.publish($t)) : ce.publish(na),
                                        ce.publish(gt),
                                        void ce.publish(ht);
                                    ce.publish(ta, (function() {
                                        ce.publish($t)
                                    }
                                    ), (function() {
                                        ce.publish(gt),
                                        ce.publish(ht)
                                    }
                                    ))
                                }
                                ))
                            }
                            ))
                        }
                        )),
                        ce.publish($e, {
                            container: "tiles",
                            id: m.galleryId,
                            noLoginError: function() {
                                ce.publish(Nt, {
                                    force: !1
                                }, (function(e) {
                                    ce.publish(It, {
                                        force: !1,
                                        form: e
                                    })
                                }
                                ))
                            }
                        }),
                        ce.publish(ma, {
                            videoPath: m.galleryVideoPath,
                            playerID: "gplayer",
                            scriptPath: "https://static.pornpics.com/style/assets/galleryPlayer/gallery.js"
                        }),
                        ce.publish(ke, {
                            oldPS: function() {
                                ce.publish(Bt, {
                                    isLoggedData: t,
                                    paySite: m.paySite,
                                    gallerySelector: "tiles",
                                    galleryButtonId: "gallery-show",
                                    api_slide_show_mode: "/api/user/get_as_slide_show",
                                    psModeCookieName: "psmode",
                                    css1Path: "https://static.pornpics.com/style/assets/photoswipe/css/photoswipe.min.css",
                                    css2Path: "https://static.pornpics.com/style/assets/photoswipe/css/photoswipe-skin.min.css",
                                    js1Path: "https://static.pornpics.com/style/assets/photoswipe/js/photoswipe.min.js",
                                    js2Path: "https://static.pornpics.com/style/assets/photoswipe/js/photoswipe-ui-default.min.js",
                                    callback: function() {
                                        ce.publish(Pe, "refresh")
                                    }
                                })
                            },
                            newPS: function() {
                                ce.publish(Ot, {
                                    isLoggedData: t,
                                    paySite: m.paySite,
                                    gallerySelector: "tiles",
                                    galleryButtonClass: "gallery-show",
                                    galleryId: m.galleryId,
                                    api_slide_show_mode: "/api/user/get_as_slide_show",
                                    psModeCookieName: "psmode",
                                    css1Path: "https://static.pornpics.com/style/assets/photoswipe5/css/photoswipe.min.css",
                                    js2Path: "https://static.pornpics.com/style/assets/photoswipe5/js/photoswipe.umd.min.js",
                                    js1Path: "https://static.pornpics.com/style/assets/photoswipe5/js/photoswipe-lightbox.umd.min.js",
                                    js3Path: "https://static.pornpics.com/style/assets/photoswipe5/js/photoswipe-video-plugin.umd.min.js",
                                    videoPath: m.galleryVideoPath,
                                    callback: function() {
                                        ce.publish(Pe, "refresh")
                                    }
                                })
                            }
                        }),
                        ce.publish(Ut, {
                            galleryId: m.galleryId,
                            votesCookieName: "vote2",
                            api_get_rate: "/api/votes/get_rate",
                            api_like: "/api/votes/like",
                            api_dislike: "/api/votes/dislike",
                            api_allStats: "/api/votes/statistic?gid=" + m.galleryId,
                            voteClassName: "vote",
                            rateClassName: "rate-count",
                            sponsorPath: "https://desc.pornpics.com/" + m.paySite + ".txt",
                            sponsorDescId: "pdesc",
                            gallInfoButton: "gall-info"
                        }),
                        null === m.galleryBanner ? (ce.publish(jt),
                        ce.publish(Ft, {
                            container: "spons-block-2"
                        })) : "" !== m.paySite && "pornpics" !== m.paySite && "Porn Pics" !== m.paySite && ce.publish(Rt, {
                            path: "https://www.pornpics.com/galleries/logo/?site=" + m.paySite,
                            stylePath: "https://css.pornpics.com/style.php",
                            stylePathData: {
                                c: "",
                                t: "",
                                u1: "",
                                u2: "",
                                ar: "",
                                gc: ""
                            },
                            endPointClass: "gallery-info",
                            callback: function() {
                                ce.publish(Ft, {
                                    container: "spons-frame"
                                })
                            },
                            sponsorLineClass: "gallery-top-line",
                            sponsorPromoBG: m.promoSponsorOFBG,
                            sponsorPromoLogo: m.promoSponsorOFLogo,
                            gallerySponsorID: m.gallerySponsorID,
                            galleryType: m.galleryType
                        }),
                        ce.publish(Vt, {
                            container: "tags"
                        }),
                        ce.publish(Ht, {
                            shareButtonClassName: "gall-info-share",
                            shareContainerClassName: "share-main",
                            shareLink: "https://static.addtoany.com/menu/page.js"
                        }),
                        ce.publish(Gt, {
                            galleryId: m.galleryId,
                            loggedData: t,
                            commButton: "gall-info-comments",
                            commentsFormClass: "comm-form",
                            commentsClass: "comments",
                            commentsMessageClass: "comm-message",
                            userCommentsCookieName: "uc",
                            api_get_comments: "/api/comments/get_comments_for_gallery/",
                            api_set_as_spam: "/api/comments/mark_as_spam?commentId=",
                            api_edit_comment: "/api/comments/edit_comment?commentId=",
                            api_add_comment: "/api/comments/add_comment?parentId="
                        }),
                        ce.publish(zt, {
                            mainClass: "suggest",
                            galleryId: m.galleryId,
                            script1: "https://css.pornpics.com/style/assets/tagEditor/js/jquery.caret.min.js",
                            script2: "https://css.pornpics.com/style/assets/tagEditor/js/jquery.tag-editor.min.js",
                            jqUiScript: "https://css.pornpics.com/style/assets/jQueryUi/js/jquery-ui.min.js",
                            css1: "https://css.pornpics.com/style/assets/tagEditor/css/jquery.tag-editor.min.css",
                            jqUiCss: "https://css.pornpics.com/style/assets/jQueryUi/css/jquery-ui.min.css",
                            autocomplete: "https://www.pornpics.com/autocomplete.php",
                            suggestedPath: "https://www.pornpics.com/"
                        }),
                        ce.publish(qt, {
                            mainClass: "suggest-2",
                            galleryId: m.galleryId,
                            jqUiScript: "https://css.pornpics.com/style/assets/jQueryUi/js/jquery-ui.min.js",
                            jqUiCss: "https://css.pornpics.com/style/assets/jQueryUi/css/jquery-ui.min.css",
                            autocomplete: "https://www.pornpics.com/autocomplete.php",
                            suggestedPath: "https://www.pornpics.com/"
                        }),
                        ce.publish(Wt, {
                            mainClass: "suggest-pure",
                            galleryId: m.galleryId,
                            suggestedPath: "https://www.pornpics.com/"
                        }),
                        ce.publish(Ft, {
                            container: "spons-block-2"
                        }),
                        ce.publish(Et)
                    }
                    ))
                }
                )),
                ce.subscribe(ie, (function() {
                    ce.publish(nt, {
                        thumbClass: "thumbwook",
                        thumbInactiveClass: "inactive",
                        adClass: "r-frame",
                        thumbsOnPage: c
                    }),
                    ce.publish(Pe, null),
                    ce.publish(xe, {
                        itemClass: ".thumbwook a img"
                    }),
                    ce.publish(Ve, {
                        id: m.galleryId,
                        pageType: m.PAGE_TYPE,
                        wookmarkContainerID: "rel-main",
                        wookmarkThumbClass: "thumbwook",
                        wookmarkAdClass: "r-frame",
                        wookmarkAdNativeClass: "c-model",
                        logoClass: "logo-main",
                        IDAttributeName: "data-mid"
                    }),
                    ce.publish(Me, {
                        id: m.galleryId,
                        pageType: m.PAGE_TYPE,
                        statsEndPoint: "https://live.pornpics.com/asea?rnd=",
                        wookmarkContainerID: "tiles",
                        wookmarkThumbClass: "thumbwook",
                        wookmarkAdClass: "r-frame",
                        wookmarkAdNativeClass: "c-model",
                        logoClass: "logo-main",
                        IDAttributeName: "data-tid"
                    }),
                    ce.publish(Fe, {
                        statsEndPoint: "https://rsd.pornpics.com/?rnd=",
                        wookmarkContainerID: "rel-main",
                        wookmarkThumbClass: "c-model",
                        IDAttributeName: "data-cam-id",
                        typeAttributeName: "data-cam-type",
                        pageType: m.PAGE_TYPE
                    }),
                    ce.publish(Ue, {
                        id: m.galleryId,
                        pageType: C,
                        statsEndPoint: "https://live.pornpics.com/asea?rnd=",
                        statsEndPointRSD: "https://rsd.pornpics.com/?rnd=",
                        wookmarkContainerID: "rel-main",
                        wookmarkThumbClass: "thumbwook",
                        wookmarkAdClass: "r-frame",
                        wookmarkAdNativeClass: "c-model",
                        logoClass: "logo-main",
                        IDAttributeName: "data-mid"
                    }),
                    ce.publish(Dt, {
                        defaultRelPath: "https://rel.pornpics.com/related/related_json.php",
                        defaultRelData: {
                            cat: m.galleryId,
                            limit: 400
                        },
                        rotatorMapsRelPath: "https://www.pornpics.com/gallery-related/",
                        rotatorMapsRelData: {
                            slug: 0,
                            related: m.galleryId
                        },
                        reserveRelPath: "https://rel.pornpics.com/related/",
                        statsPath: "https://stats.pornpics.com/add_stat.php",
                        statsData: {
                            referer: encodeURIComponent(document.referrer),
                            page: ""
                        },
                        thumbsContainerId: "rel-main",
                        pageAddedCallBack: function() {
                            ce.publish(je),
                            ce.publish(Re),
                            _a()
                        },
                        setMaxPage: function(e) {
                            m.maxPage = e
                        },
                        lazyloadCallback: function() {
                            ce.publish(Le)
                        }
                    }),
                    ce.publish(lt, {
                        infoBlockClass: "gallery-info"
                    }),
                    ce.publish(Ge, (function(t) {
                        ce.publish(ze, t),
                        ce.publish(tt, {
                            bookmarkCookieName: "PP_UVM",
                            bookmarkCookieExpDays: 30,
                            newUserCookieName: "PP_UVM_NU",
                            newUserCookieExpDays: 1,
                            isUserAuth: a.user.isUserAuth()
                        }),
                        ce.publish(at, {
                            inViewClass: "imViewOn",
                            idAttr: "tid",
                            cookieName: "imcd",
                            logPath: "/sstats.php",
                            cid: "undefined" == typeof P_CID ? "" : P_CID,
                            isBookmark: a.directUser.isBookmark()
                        }),
                        ce.publish(Dt, {
                            pageAddedCallBack: function() {
                                _a(),
                                ce.publish(Je, {
                                    container: "rel-main",
                                    type: "add"
                                })
                            }
                        }),
                        ce.publish(ot, (function() {
                            ce.publish(it, (function(t) {
                                ce.publish(Mt, {
                                    container: e("#rel-main"),
                                    ind: 0
                                }, (function(e) {
                                    if (null === t)
                                        return e ? (Pa(!0),
                                        ce.publish($t)) : ce.publish(na),
                                        ce.publish(gt),
                                        void ce.publish(ht);
                                    ce.publish(ta, (function() {
                                        ce.publish($t)
                                    }
                                    ), (function() {
                                        ce.publish(gt),
                                        ce.publish(ht)
                                    }
                                    ))
                                }
                                ))
                            }
                            ))
                        }
                        )),
                        ce.publish($e, {
                            container: "tiles",
                            id: m.galleryId,
                            noLoginError: function() {
                                ce.publish(Nt, {
                                    force: !1
                                }, (function(e) {
                                    ce.publish(It, {
                                        force: !1,
                                        form: e
                                    })
                                }
                                ))
                            }
                        }),
                        ce.publish(Bt, {
                            isLoggedData: t,
                            paySite: m.paySite,
                            gallerySelector: "tiles",
                            galleryButtonId: "gallery-show",
                            api_slide_show_mode: "/api/user/get_as_slide_show",
                            psModeCookieName: "psmode",
                            css1Path: "https://static.pornpics.com/style/assets/photoswipe/css/photoswipe.min.css",
                            css2Path: "https://static.pornpics.com/style/assets/photoswipe/css/photoswipe-skin.min.css",
                            js1Path: "https://static.pornpics.com/style/assets/photoswipe/js/photoswipe.min.js",
                            js2Path: "https://static.pornpics.com/style/assets/photoswipe/js/photoswipe-ui-default.min.js",
                            callback: function() {
                                ce.publish(Pe, "refresh")
                            }
                        }),
                        ce.publish(Ut, {
                            galleryId: m.galleryId,
                            votesCookieName: "vote2",
                            api_get_rate: "/api/votes/get_rate",
                            api_like: "/api/votes/like",
                            api_dislike: "/api/votes/dislike",
                            api_allStats: "/api/votes/statistic?gid=" + m.galleryId,
                            voteClassName: "vote",
                            rateClassName: "info-rate",
                            sponsorPath: "https://desc.pornpics.com/" + m.paySite + ".txt",
                            sponsorDescId: "pdesc",
                            gallInfoButton: "gall-info"
                        }),
                        null === m.galleryBanner ? (ce.publish(jt),
                        ce.publish(Ft, {
                            container: "spons-block-2"
                        })) : "" !== m.paySite && ce.publish(Rt, {
                            path: "https://www.pornpics.com/galleries/logo/?site=" + m.paySite,
                            stylePath: "https://css.pornpics.com/style.php",
                            stylePathData: {
                                c: "",
                                t: "",
                                u1: "",
                                u2: "",
                                ar: "",
                                gc: ""
                            },
                            endPointClass: "gallery-info",
                            callback: function() {
                                ce.publish(Ft, {
                                    container: "spons-frame"
                                })
                            }
                        }),
                        ce.publish(Vt, {
                            container: "tags"
                        }),
                        ce.publish(Ht, {
                            shareButtonClassName: "gall-info-share",
                            shareContainerClassName: "share-main",
                            shareLink: "https://static.addtoany.com/menu/page.js"
                        }),
                        ce.publish(Gt, {
                            galleryId: m.galleryId,
                            loggedData: t,
                            commButton: "gall-info-comments",
                            commentsFormClass: "comm-form",
                            commentsClass: "comments",
                            commentsMessageClass: "comm-message",
                            userCommentsCookieName: "uc",
                            api_get_comments: "/api/comments/get_comments_for_gallery/",
                            api_set_as_spam: "/api/comments/mark_as_spam?commentId=",
                            api_edit_comment: "/api/comments/edit_comment?commentId=",
                            api_add_comment: "/api/comments/add_comment?parentId="
                        }),
                        ce.publish(zt, {
                            mainClass: "suggest",
                            galleryId: m.galleryId,
                            script1: "https://css.pornpics.com/style/assets/tagEditor/js/jquery.caret.min.js",
                            script2: "https://css.pornpics.com/style/assets/tagEditor/js/jquery.tag-editor.min.js",
                            jqUiScript: "https://css.pornpics.com/style/assets/jQueryUi/js/jquery-ui.min.js",
                            css1: "https://css.pornpics.com/style/assets/tagEditor/css/jquery.tag-editor.min.css",
                            jqUiCss: "https://css.pornpics.com/style/assets/jQueryUi/css/jquery-ui.min.css",
                            autocomplete: "https://www.pornpics.com/autocomplete.php",
                            suggestedPath: "https://www.pornpics.com/"
                        }),
                        ce.publish(qt, {
                            mainClass: "suggest-2",
                            galleryId: m.galleryId,
                            jqUiScript: "https://css.pornpics.com/style/assets/jQueryUi/js/jquery-ui.min.js",
                            jqUiCss: "https://css.pornpics.com/style/assets/jQueryUi/css/jquery-ui.min.css",
                            autocomplete: "https://www.pornpics.com/autocomplete.php",
                            suggestedPath: "https://www.pornpics.com/"
                        }),
                        ce.publish(Wt, {
                            mainClass: "suggest-pure",
                            galleryId: m.galleryId,
                            suggestedPath: "https://www.pornpics.com/"
                        }),
                        ce.publish(Ft, {
                            container: "spons-block-2"
                        }),
                        ce.publish(Et)
                    }
                    ))
                }
                )),
                ce.subscribe(oe, (function() {
                    var t = 0 !== e(".thumbwook").not(".r-frame").length
                      , n = "off";
                    e(".thumbwook").not(".r-frame").length < 20 && ce.publish(Ae),
                    ce.publish(nt, {
                        thumbClass: "thumbwook",
                        thumbInactiveClass: "inactive",
                        adClass: "r-frame",
                        thumbsOnPage: c
                    }),
                    ce.publish(Pe, null),
                    ce.publish(xe, {
                        itemClass: ".thumbwook a img"
                    }),
                    t || (ce.publish(kt, {
                        lang: m.lang,
                        mainText: m.searchNoSuchResultsText,
                        titleText: m.searchPopualrSearchesText
                    }),
                    ce.publish(ft),
                    n = "on"),
                    ce.publish(Me, {
                        pageType: m.PAGE_TYPE,
                        pageSubType: m.SUBTYPE,
                        statsEndPoint: "https://live.pornpics.com/asea?rnd=",
                        wookmarkContainerID: "tiles",
                        wookmarkThumbClass: "thumbwook",
                        wookmarkAdClass: "r-frame",
                        wookmarkAdNativeClass: "c-model",
                        logoClass: "logo-main",
                        IDAttributeName: "data-mid",
                        dontWatchTrigger: n
                    }),
                    ce.publish(Fe, {
                        statsEndPoint: "https://rsd.pornpics.com/?rnd=",
                        wookmarkContainerID: "tiles",
                        wookmarkThumbClass: "c-model",
                        IDAttributeName: "data-cam-id",
                        typeAttributeName: "data-cam-type",
                        pageType: m.PAGE_TYPE
                    }),
                    ce.publish(Oe, {
                        pageType: "",
                        statsEndPoint: "https://live.pornpics.com/asea?rnd=",
                        statsEndPoint2: "https://rsd.pornpics.com/?rnd=",
                        wookmarkContainerID: "tags-section",
                        wookmarkThumbClass: "submenu-item",
                        wookmarkAdClass: "r-frame",
                        wookmarkAdNativeClass: "c-model",
                        logoClass: "logo-main",
                        slugId: m.cid,
                        reserveSlugId: m.slug,
                        IDAttributeName: "data-tag-id"
                    }),
                    ce.publish(ot, (function() {
                        ce.publish(it, (function(e) {
                            if (t)
                                return null === e ? (ce.publish(Zt),
                                ce.publish($t),
                                ce.publish(ft),
                                void ce.publish(ut)) : 1 === e ? (ce.publish($t),
                                ce.publish(st, {
                                    callback: null,
                                    lazyTrigger: !0
                                }),
                                ce.publish(ft),
                                void ce.publish(ut)) : void ce.publish(ta, (function() {
                                    ce.publish($t),
                                    ce.publish(ft),
                                    ce.publish(ut)
                                }
                                ))
                        }
                        ))
                    }
                    )),
                    ce.publish(Ge, (function(e) {
                        ce.publish(ze, e),
                        ce.publish(tt, {
                            bookmarkCookieName: "PP_UVM",
                            bookmarkCookieExpDays: 30,
                            newUserCookieName: "PP_UVM_NU",
                            newUserCookieExpDays: 1,
                            isUserAuth: a.user.isUserAuth()
                        }),
                        ce.publish(at, {
                            inViewClass: "imViewOn",
                            idAttr: "tid",
                            cookieName: "imcd",
                            logPath: "/sstats.php",
                            cid: "undefined" == typeof P_CID ? "" : P_CID,
                            isBookmark: a.directUser.isBookmark()
                        }),
                        ce.publish(Je, {
                            container: "tiles",
                            type: "add"
                        }),
                        ce.publish(et, (function() {
                            ce.publish(Nt, {
                                force: !1
                            }, (function(e) {
                                ce.publish(It, {
                                    force: !1,
                                    form: e
                                })
                            }
                            ))
                        }
                        )),
                        ce.publish(bt, {
                            pageType: m.PAGE_TYPE,
                            stripParams: m.stripParams
                        })
                    }
                    ))
                }
                )),
                ce.subscribe(se, (function() {
                    var t = 0 !== e(".thumbwook").not(".r-frame").length
                      , n = "off";
                    e(".thumbwook").not(".r-frame").length < 20 && ce.publish(Ae),
                    ce.publish(nt, {
                        thumbClass: "thumbwook",
                        thumbInactiveClass: "inactive",
                        adClass: "r-frame",
                        thumbsOnPage: c
                    }),
                    ce.publish(Pe, null),
                    ce.publish(xe, {
                        itemClass: ".thumbwook a img"
                    }),
                    t || (ce.publish(kt, {
                        lang: m.lang,
                        mainText: m.searchNoSuchResultsText,
                        titleText: m.searchPopualrSearchesText
                    }),
                    ce.publish(ft),
                    n = "on"),
                    ce.publish(Me, {
                        pageType: "search",
                        pageSubType: m.SUBTYPE,
                        statsEndPoint: "https://live.pornpics.com/asea?rnd=",
                        wookmarkContainerID: "tiles",
                        wookmarkThumbClass: "thumbwook",
                        wookmarkAdClass: "r-frame",
                        wookmarkAdNativeClass: "c-model",
                        logoClass: "logo-main",
                        IDAttributeName: "data-mid",
                        dontWatchTrigger: n
                    }),
                    ce.publish(Fe, {
                        statsEndPoint: "https://rsd.pornpics.com/?rnd=",
                        wookmarkContainerID: "tiles",
                        wookmarkThumbClass: "c-model",
                        IDAttributeName: "data-cam-id",
                        typeAttributeName: "data-cam-type",
                        pageType: m.PAGE_TYPE
                    }),
                    ce.publish(Oe, {
                        pageType: "",
                        statsEndPoint: "https://live.pornpics.com/asea?rnd=",
                        statsEndPoint2: "https://rsd.pornpics.com/?rnd=",
                        wookmarkContainerID: "tags-section",
                        wookmarkThumbClass: "submenu-item",
                        wookmarkAdClass: "r-frame",
                        wookmarkAdNativeClass: "c-model",
                        logoClass: "logo-main",
                        slugId: m.cid,
                        reserveSlugId: m.slug,
                        IDAttributeName: "data-tag-id"
                    }),
                    ce.publish(ot, (function() {
                        ce.publish(it, (function(e) {
                            if (t)
                                return null === e ? (ce.publish(Zt),
                                ce.publish($t),
                                ce.publish(ft),
                                void ce.publish(ut)) : 1 === e ? (ce.publish($t),
                                ce.publish(st, {
                                    callback: null,
                                    lazyTrigger: !0
                                }),
                                ce.publish(ft),
                                void ce.publish(ut)) : void ce.publish(ta, (function() {
                                    ce.publish($t),
                                    ce.publish(ft),
                                    ce.publish(ut)
                                }
                                ))
                        }
                        ))
                    }
                    )),
                    ce.publish(Ge, (function(e) {
                        ce.publish(ze, e),
                        ce.publish(tt, {
                            bookmarkCookieName: "PP_UVM",
                            bookmarkCookieExpDays: 30,
                            newUserCookieName: "PP_UVM_NU",
                            newUserCookieExpDays: 1,
                            isUserAuth: a.user.isUserAuth()
                        }),
                        ce.publish(at, {
                            inViewClass: "imViewOn",
                            idAttr: "tid",
                            cookieName: "imcd",
                            logPath: "/sstats.php",
                            cid: "undefined" == typeof P_CID ? "" : P_CID,
                            isBookmark: a.directUser.isBookmark()
                        }),
                        ce.publish(Je, {
                            container: "tiles",
                            type: "add"
                        }),
                        ce.publish(et, (function() {
                            ce.publish(Nt, {
                                force: !1
                            }, (function(e) {
                                ce.publish(It, {
                                    force: !1,
                                    form: e
                                })
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
                )),
                ce.subscribe(re, (function() {
                    ce.publish(Pe, null),
                    ce.publish(Ae),
                    ce.publish(xe, {
                        itemClass: ".thumbwook a img"
                    }),
                    ce.publish(Me, {
                        id: m.PAGE_TYPE,
                        pageType: m.PAGE_TYPE,
                        statsEndPoint: "https://live.pornpics.com/asea?rnd=",
                        wookmarkContainerID: "tiles",
                        wookmarkThumbClass: "thumbwook",
                        wookmarkAdClass: "r-frame",
                        wookmarkAdNativeClass: "c-model",
                        logoClass: "logo-main",
                        IDAttributeName: "data-mid"
                    }),
                    ce.publish(Ge, (function(e) {
                        ce.publish(ze, e),
                        ce.publish(tt, {
                            bookmarkCookieName: "PP_UVM",
                            bookmarkCookieExpDays: 30,
                            newUserCookieName: "PP_UVM_NU",
                            newUserCookieExpDays: 1,
                            isUserAuth: a.user.isUserAuth()
                        }),
                        ce.publish(at, {
                            inViewClass: "imViewOn",
                            idAttr: "tid",
                            cookieName: "imcd",
                            logPath: "/sstats.php",
                            cid: "undefined" == typeof P_CID ? "" : P_CID,
                            isBookmark: a.directUser.isBookmark()
                        }),
                        ce.publish(Qe, {
                            container: "tiles",
                            type: "add"
                        })
                    }
                    ))
                }
                )),
                ce.subscribe(le, (function() {
                    ce.publish(Pe, null),
                    ce.publish(Ae),
                    ce.publish(xe, {
                        itemClass: ".thumbwook a img"
                    }),
                    ce.publish(Me, {
                        id: m.PAGE_TYPE,
                        pageType: m.PAGE_TYPE,
                        statsEndPoint: "https://live.pornpics.com/asea?rnd=",
                        wookmarkContainerID: "tiles",
                        wookmarkThumbClass: "thumbwook",
                        wookmarkAdClass: "r-frame",
                        wookmarkAdNativeClass: "c-model",
                        logoClass: "logo-main",
                        IDAttributeName: "data-mid"
                    }),
                    ce.publish(Ge, (function(e) {
                        ce.publish(ze, e),
                        ce.publish(tt, {
                            bookmarkCookieName: "PP_UVM",
                            bookmarkCookieExpDays: 30,
                            newUserCookieName: "PP_UVM_NU",
                            newUserCookieExpDays: 1,
                            isUserAuth: a.user.isUserAuth()
                        }),
                        ce.publish(at, {
                            inViewClass: "imViewOn",
                            idAttr: "tid",
                            cookieName: "imcd",
                            logPath: "/sstats.php",
                            cid: "undefined" == typeof P_CID ? "" : P_CID,
                            isBookmark: a.directUser.isBookmark()
                        }),
                        ce.publish(Ye, {
                            container: "tiles",
                            type: "add"
                        })
                    }
                    ))
                }
                )),
                ce.subscribe(ue, (function() {
                    ce.publish(Ge, (function(e) {
                        ce.publish(Me, {
                            pageType: m.PAGE_TYPE,
                            statsEndPoint: "https://live.pornpics.com/asea?rnd=",
                            wookmarkContainerID: "tiles",
                            wookmarkThumbClass: "thumbwook",
                            wookmarkAdClass: "r-frame",
                            wookmarkAdNativeClass: "c-model",
                            logoClass: "logo-main",
                            IDAttributeName: "data-mid"
                        }),
                        ce.publish(tt, {
                            bookmarkCookieName: "PP_UVM",
                            bookmarkCookieExpDays: 30,
                            newUserCookieName: "PP_UVM_NU",
                            newUserCookieExpDays: 1,
                            isUserAuth: a.user.isUserAuth()
                        }),
                        ce.publish(at, {
                            inViewClass: "imViewOn",
                            idAttr: "tid",
                            cookieName: "imcd",
                            logPath: "/sstats.php",
                            cid: "undefined" == typeof P_CID ? "" : P_CID,
                            isBookmark: a.directUser.isBookmark()
                        }),
                        "ok" === e.status ? (ce.publish(ze, e),
                        ce.publish(Xe, (function() {
                            ce.publish(nt, {
                                thumbClass: "thumbwook",
                                thumbInactiveClass: "inactive",
                                adClass: "r-frame",
                                thumbsOnPage: c
                            }),
                            ce.publish(xe, {
                                itemClass: ".thumbwook a img"
                            }),
                            ce.publish(ot, (function() {
                                ce.publish(it, (function(e) {
                                    if (null === e)
                                        return ce.publish(Zt),
                                        ce.publish($t),
                                        void Pa(!0);
                                    ce.publish(ta, (function() {
                                        ce.publish($t)
                                    }
                                    ))
                                }
                                ))
                            }
                            ))
                        }
                        ))) : ce.publish(Nt, {
                            force: !0
                        }, (function(e) {
                            ce.publish(It, {
                                force: !0,
                                form: e
                            })
                        }
                        ))
                    }
                    ))
                }
                )),
                ce.subscribe(de, (function() {
                    ce.publish(Ge, (function(e) {
                        ce.publish(Me, {
                            pageType: m.PAGE_TYPE,
                            statsEndPoint: "https://live.pornpics.com/asea?rnd=",
                            wookmarkContainerID: "tiles",
                            wookmarkThumbClass: "thumbwook",
                            wookmarkAdClass: "r-frame",
                            wookmarkAdNativeClass: "c-model",
                            logoClass: "logo-main",
                            IDAttributeName: "data-mid"
                        }),
                        ce.publish(tt, {
                            bookmarkCookieName: "PP_UVM",
                            bookmarkCookieExpDays: 30,
                            newUserCookieName: "PP_UVM_NU",
                            newUserCookieExpDays: 1,
                            isUserAuth: a.user.isUserAuth()
                        }),
                        ce.publish(at, {
                            inViewClass: "imViewOn",
                            idAttr: "tid",
                            cookieName: "imcd",
                            logPath: "/sstats.php",
                            cid: "undefined" == typeof P_CID ? "" : P_CID,
                            isBookmark: a.directUser.isBookmark()
                        }),
                        "ok" === e.status ? (ce.publish(ze, e),
                        ce.publish(Xe, (function() {
                            ce.publish(nt, {
                                thumbClass: "thumbwook",
                                thumbInactiveClass: "inactive",
                                adClass: "r-frame",
                                thumbsOnPage: c
                            }),
                            ce.publish(xe, {
                                itemClass: ".thumbwook a img"
                            }),
                            ce.publish(ot, (function() {
                                ce.publish(it, (function(e) {
                                    if (null === e)
                                        return ce.publish(Zt),
                                        ce.publish($t),
                                        void Pa(!0);
                                    ce.publish(ta, (function() {
                                        ce.publish($t)
                                    }
                                    ))
                                }
                                ))
                            }
                            ))
                        }
                        ))) : ce.publish(Nt, {
                            force: !0
                        }, (function(e) {
                            ce.publish(It, {
                                force: !0,
                                form: e
                            })
                        }
                        ))
                    }
                    ))
                }
                )),
                ce.subscribe(pe, (function() {
                    ce.publish(Ge, (function(e) {
                        ce.publish(Me, {
                            pageType: m.PAGE_TYPE,
                            statsEndPoint: "https://live.pornpics.com/asea?rnd=",
                            wookmarkContainerID: "tiles",
                            wookmarkThumbClass: "thumbwook",
                            wookmarkAdClass: "r-frame",
                            wookmarkAdNativeClass: "c-model",
                            logoClass: "logo-main",
                            IDAttributeName: "data-mid"
                        }),
                        ce.publish(tt, {
                            bookmarkCookieName: "PP_UVM",
                            bookmarkCookieExpDays: 30,
                            newUserCookieName: "PP_UVM_NU",
                            newUserCookieExpDays: 1,
                            isUserAuth: a.user.isUserAuth()
                        }),
                        ce.publish(at, {
                            inViewClass: "imViewOn",
                            idAttr: "tid",
                            cookieName: "imcd",
                            logPath: "/sstats.php",
                            cid: "undefined" == typeof P_CID ? "" : P_CID,
                            isBookmark: a.directUser.isBookmark()
                        }),
                        "ok" === e.status ? (ce.publish(ze, e),
                        ce.publish(Xe, (function() {
                            ce.publish(nt, {
                                thumbClass: "thumbwook",
                                thumbInactiveClass: "inactive",
                                adClass: "r-frame",
                                thumbsOnPage: c
                            }),
                            ce.publish(xe, {
                                itemClass: ".thumbwook a img"
                            }),
                            ce.publish(Zt),
                            ce.publish($t),
                            Pa(!0)
                        }
                        ))) : ce.publish(Nt, {
                            force: !0
                        }, (function(e) {
                            ce.publish(It, {
                                force: !0,
                                form: e
                            })
                        }
                        ))
                    }
                    ))
                }
                )),
                ce.subscribe(me, (function() {
                    ce.publish(Ge, (function(e) {
                        ce.publish(Me, {
                            pageType: m.PAGE_TYPE,
                            statsEndPoint: "https://live.pornpics.com/asea?rnd=",
                            wookmarkContainerID: "tiles",
                            wookmarkThumbClass: "thumbwook",
                            wookmarkAdClass: "r-frame",
                            wookmarkAdNativeClass: "c-model",
                            logoClass: "logo-main",
                            IDAttributeName: "data-mid"
                        }),
                        ce.publish(tt, {
                            bookmarkCookieName: "PP_UVM",
                            bookmarkCookieExpDays: 30,
                            newUserCookieName: "PP_UVM_NU",
                            newUserCookieExpDays: 1,
                            isUserAuth: a.user.isUserAuth()
                        }),
                        ce.publish(at, {
                            inViewClass: "imViewOn",
                            idAttr: "tid",
                            cookieName: "imcd",
                            logPath: "/sstats.php",
                            cid: "undefined" == typeof P_CID ? "" : P_CID,
                            isBookmark: a.directUser.isBookmark()
                        }),
                        "ok" === e.status ? (ce.publish(ze, e),
                        ce.publish(Ke, (function() {
                            ce.publish(nt, {
                                thumbClass: "thumbwook",
                                thumbInactiveClass: "inactive",
                                adClass: "r-frame",
                                thumbsOnPage: c
                            }),
                            ce.publish(xe, {
                                itemClass: ".thumbwook a img"
                            }),
                            ce.publish(ot, (function() {
                                ce.publish(it, (function(e) {
                                    if (null === e)
                                        return ce.publish(Zt),
                                        ce.publish($t),
                                        void Pa(!0);
                                    ce.publish(ta, (function() {
                                        ce.publish($t)
                                    }
                                    ))
                                }
                                ))
                            }
                            ))
                        }
                        ))) : ce.publish(Nt, {
                            force: !0
                        }, (function(e) {
                            ce.publish(It, {
                                force: !0,
                                form: e
                            })
                        }
                        ))
                    }
                    ))
                }
                )),
                ce.subscribe(he, (function() {
                    ce.publish(Ge, (function(e) {
                        ce.publish(Me, {
                            pageType: m.PAGE_TYPE,
                            statsEndPoint: "https://live.pornpics.com/asea?rnd=",
                            wookmarkContainerID: "tiles",
                            wookmarkThumbClass: "thumbwook",
                            wookmarkAdClass: "r-frame",
                            wookmarkAdNativeClass: "c-model",
                            logoClass: "logo-main",
                            IDAttributeName: "data-mid"
                        }),
                        ce.publish(tt, {
                            bookmarkCookieName: "PP_UVM",
                            bookmarkCookieExpDays: 30,
                            newUserCookieName: "PP_UVM_NU",
                            newUserCookieExpDays: 1,
                            isUserAuth: a.user.isUserAuth()
                        }),
                        ce.publish(at, {
                            inViewClass: "imViewOn",
                            idAttr: "tid",
                            cookieName: "imcd",
                            logPath: "/sstats.php",
                            cid: "undefined" == typeof P_CID ? "" : P_CID,
                            isBookmark: a.directUser.isBookmark()
                        }),
                        "ok" === e.status ? (ce.publish(ze, e),
                        ce.publish(Ke, (function() {
                            ce.publish(nt, {
                                thumbClass: "thumbwook",
                                thumbInactiveClass: "inactive",
                                adClass: "r-frame",
                                thumbsOnPage: c
                            }),
                            ce.publish(xe, {
                                itemClass: ".thumbwook a img"
                            }),
                            ce.publish(ot, (function() {
                                ce.publish(it, (function(e) {
                                    if (null === e)
                                        return ce.publish(Zt),
                                        ce.publish($t),
                                        void Pa(!0);
                                    ce.publish(ta, (function() {
                                        ce.publish($t)
                                    }
                                    ))
                                }
                                ))
                            }
                            ))
                        }
                        ))) : ce.publish(Nt, {
                            force: !0
                        }, (function(e) {
                            ce.publish(It, {
                                force: !0,
                                form: e
                            })
                        }
                        ))
                    }
                    ))
                }
                )),
                ce.subscribe(ge, (function() {
                    ce.publish(Ge, (function(e) {
                        ce.publish(Me, {
                            pageType: m.PAGE_TYPE,
                            statsEndPoint: "https://live.pornpics.com/asea?rnd=",
                            wookmarkContainerID: "tiles",
                            wookmarkThumbClass: "thumbwook",
                            wookmarkAdClass: "r-frame",
                            wookmarkAdNativeClass: "c-model",
                            logoClass: "logo-main",
                            IDAttributeName: "data-mid"
                        }),
                        ce.publish(tt, {
                            bookmarkCookieName: "PP_UVM",
                            bookmarkCookieExpDays: 30,
                            newUserCookieName: "PP_UVM_NU",
                            newUserCookieExpDays: 1,
                            isUserAuth: a.user.isUserAuth()
                        }),
                        ce.publish(at, {
                            inViewClass: "imViewOn",
                            idAttr: "tid",
                            cookieName: "imcd",
                            logPath: "/sstats.php",
                            cid: "undefined" == typeof P_CID ? "" : P_CID,
                            isBookmark: a.directUser.isBookmark()
                        }),
                        "ok" === e.status ? (ce.publish(ze, e),
                        ce.publish(Ke, (function() {
                            ce.publish(nt, {
                                thumbClass: "thumbwook",
                                thumbInactiveClass: "inactive",
                                adClass: "r-frame",
                                thumbsOnPage: c
                            }),
                            ce.publish(xe, {
                                itemClass: ".thumbwook a img"
                            }),
                            ce.publish(Zt),
                            ce.publish($t),
                            Pa(!0)
                        }
                        ))) : ce.publish(Nt, {
                            force: !0
                        }, (function(e) {
                            ce.publish(It, {
                                force: !0,
                                form: e
                            })
                        }
                        ))
                    }
                    ))
                }
                )),
                ce.subscribe(fe, (function() {
                    ce.publish(Ge, (function(e) {
                        ce.publish(Me, {
                            pageType: m.PAGE_TYPE,
                            statsEndPoint: "https://live.pornpics.com/asea?rnd=",
                            wookmarkContainerID: "tiles",
                            wookmarkThumbClass: "thumbwook",
                            wookmarkAdClass: "r-frame",
                            wookmarkAdNativeClass: "c-model",
                            logoClass: "logo-main",
                            IDAttributeName: "data-mid"
                        }),
                        ce.publish(tt, {
                            bookmarkCookieName: "PP_UVM",
                            bookmarkCookieExpDays: 30,
                            newUserCookieName: "PP_UVM_NU",
                            newUserCookieExpDays: 1,
                            isUserAuth: a.user.isUserAuth()
                        }),
                        ce.publish(at, {
                            inViewClass: "imViewOn",
                            idAttr: "tid",
                            cookieName: "imcd",
                            logPath: "/sstats.php",
                            cid: "undefined" == typeof P_CID ? "" : P_CID,
                            isBookmark: a.directUser.isBookmark()
                        }),
                        "ok" === e.status ? (ce.publish(ze, e),
                        ce.publish(Ze, (function() {
                            ce.publish(nt, {
                                thumbClass: "thumbwook",
                                thumbInactiveClass: "inactive",
                                adClass: "r-frame",
                                thumbsOnPage: c
                            }),
                            ce.publish(xe, {
                                itemClass: ".thumbwook a img"
                            }),
                            ce.publish(ot, (function() {
                                ce.publish(it, (function(e) {
                                    if (null === e)
                                        return ce.publish(Zt),
                                        ce.publish($t),
                                        void Pa(!0);
                                    ce.publish(ta, (function() {
                                        ce.publish($t)
                                    }
                                    ))
                                }
                                ))
                            }
                            ))
                        }
                        ))) : ce.publish(Nt, {
                            force: !0
                        }, (function(e) {
                            ce.publish(It, {
                                force: !0,
                                form: e
                            })
                        }
                        ))
                    }
                    ))
                }
                )),
                ce.subscribe(be, (function() {
                    ce.publish(Ge, (function(e) {
                        ce.publish(Me, {
                            pageType: m.PAGE_TYPE,
                            statsEndPoint: "https://live.pornpics.com/asea?rnd=",
                            wookmarkContainerID: "tiles",
                            wookmarkThumbClass: "thumbwook",
                            wookmarkAdClass: "r-frame",
                            wookmarkAdNativeClass: "c-model",
                            logoClass: "logo-main",
                            IDAttributeName: "data-mid"
                        }),
                        ce.publish(tt, {
                            bookmarkCookieName: "PP_UVM",
                            bookmarkCookieExpDays: 30,
                            newUserCookieName: "PP_UVM_NU",
                            newUserCookieExpDays: 1,
                            isUserAuth: a.user.isUserAuth()
                        }),
                        ce.publish(at, {
                            inViewClass: "imViewOn",
                            idAttr: "tid",
                            cookieName: "imcd",
                            logPath: "/sstats.php",
                            cid: "undefined" == typeof P_CID ? "" : P_CID,
                            isBookmark: a.directUser.isBookmark()
                        }),
                        "ok" === e.status ? (ce.publish(ze, e),
                        ce.publish(Ze, (function() {
                            ce.publish(nt, {
                                thumbClass: "thumbwook",
                                thumbInactiveClass: "inactive",
                                adClass: "r-frame",
                                thumbsOnPage: c
                            }),
                            ce.publish(xe, {
                                itemClass: ".thumbwook a img"
                            }),
                            ce.publish(ot, (function() {
                                ce.publish(it, (function(e) {
                                    if (null === e)
                                        return ce.publish(Zt),
                                        ce.publish($t),
                                        void Pa(!0);
                                    ce.publish(ta, (function() {
                                        ce.publish($t)
                                    }
                                    ))
                                }
                                ))
                            }
                            ))
                        }
                        ))) : ce.publish(Nt, {
                            force: !0
                        }, (function(e) {
                            ce.publish(It, {
                                force: !0,
                                form: e
                            })
                        }
                        ))
                    }
                    ))
                }
                )),
                ce.subscribe(ve, (function() {
                    ce.publish(Ge, (function(e) {
                        ce.publish(Me, {
                            pageType: m.PAGE_TYPE,
                            statsEndPoint: "https://live.pornpics.com/asea?rnd=",
                            wookmarkContainerID: "tiles",
                            wookmarkThumbClass: "thumbwook",
                            wookmarkAdClass: "r-frame",
                            wookmarkAdNativeClass: "c-model",
                            logoClass: "logo-main",
                            IDAttributeName: "data-mid"
                        }),
                        ce.publish(tt, {
                            bookmarkCookieName: "PP_UVM",
                            bookmarkCookieExpDays: 30,
                            newUserCookieName: "PP_UVM_NU",
                            newUserCookieExpDays: 1,
                            isUserAuth: a.user.isUserAuth()
                        }),
                        ce.publish(at, {
                            inViewClass: "imViewOn",
                            idAttr: "tid",
                            cookieName: "imcd",
                            logPath: "/sstats.php",
                            cid: "undefined" == typeof P_CID ? "" : P_CID,
                            isBookmark: a.directUser.isBookmark()
                        }),
                        "ok" === e.status ? (ce.publish(ze, e),
                        ce.publish(Ze, (function() {
                            ce.publish(nt, {
                                thumbClass: "thumbwook",
                                thumbInactiveClass: "inactive",
                                adClass: "r-frame",
                                thumbsOnPage: c
                            }),
                            ce.publish(xe, {
                                itemClass: ".thumbwook a img"
                            }),
                            ce.publish(Zt),
                            ce.publish($t),
                            Pa(!0)
                        }
                        ))) : ce.publish(Nt, {
                            force: !0
                        }, (function(e) {
                            ce.publish(It, {
                                force: !0,
                                form: e
                            })
                        }
                        ))
                    }
                    ))
                }
                )),
                ce.subscribe(ye, (function() {
                    ce.publish(nt, {
                        thumbClass: "thumbwook",
                        thumbInactiveClass: "inactive",
                        adClass: "r-frame",
                        thumbsOnPage: c
                    }),
                    ce.publish(Pe, null),
                    ce.publish(xe, {
                        itemClass: ".thumbwook a img"
                    }),
                    ce.publish(Zt),
                    ce.publish($t),
                    ce.publish(Fe, {
                        statsEndPoint: "https://rsd.pornpics.com/?rnd=",
                        wookmarkContainerID: "tiles",
                        wookmarkThumbClass: "thumbwook",
                        IDAttributeName: "data-cid",
                        typeAttributeName: "data-cam-type",
                        pageType: m.PAGE_TYPE
                    }),
                    ce.publish(Ge, (function(e) {
                        ce.publish(ze, e),
                        ce.publish(tt, {
                            bookmarkCookieName: "PP_UVM",
                            bookmarkCookieExpDays: 30,
                            newUserCookieName: "PP_UVM_NU",
                            newUserCookieExpDays: 1,
                            isUserAuth: a.user.isUserAuth()
                        })
                    }
                    ))
                }
                )),
                ce.publish(we, {
                    loader: "loader-css"
                }),
                ce.publish(Ce, {
                    pageType: m.PAGE_TYPE
                }),
                ce.publish(Ct, {
                    allDeviceAdContainer: "r-frame",
                    relBlockId: "#rel-main",
                    mainBlockId: "#main",
                    wookmarkClass: "thumbwook",
                    adIncludedClass: "r-frame-on",
                    linkDesktop: "/api/banner/get/",
                    bannerTrigger: m.bannerTrigger,
                    sponsorNormalName: m.paySite,
                    pageType: m.PAGE_TYPE,
                    paySiteID: m.paySiteID
                }),
                ce.publish(Ca, ee),
                ce.publish(ka, te),
                ce.publish(ct, {
                    adModuleOptions: {
                        onlyMobileAdClass: "adss-mob",
                        allDeviceAdContainer: "r-frame",
                        relBlockId: "#rel-main",
                        wookmarkClass: "thumbwook",
                        inactiveClass: "inactive",
                        linkMobile: ["//stats.hprofits.com/iframe.php?spotID=119&w=300&h=250", "/ts_23_07.html", "/exo_9_05_22.html"],
                        linkDesktop: ["//stats.hprofits.com/iframe.php?spotID=119&w=300&h=250", "/ts_23_07.html", "/exo_9_05_22.html"],
                        relLinkMobile: ["//hd100546b.com/iframe.php?spotID=119&w=300&h=250", "/ts_23_07.html", "/exo_9_05_22.html"],
                        relLinkDesktop: ["//hd100546b.com/iframe.php?spotID=119&w=300&h=250", "/ts_23_07.html", "/exo_9_05_22.html"],
                        adIncludedClass: "r-frame-on",
                        pageType: m.PAGE_TYPE
                    },
                    nativeAdOptions: {
                        path: "/additional_thumbs",
                        pageType: m.PAGE_TYPE
                    }
                }),
                ce.publish(wa),
                ce.publish(vt),
                ce.publish(yt, {}),
                ce.publish(_e, {
                    wookmarkThumbClass: "thumbwook",
                    listContainer: "tiles",
                    relatedContainer: "rel-main",
                    desktopOnlyContainer: "tiles-no-mob",
                    desktopOnlyThumb: "thumb-no-mob",
                    adClass: "r-frame",
                    playerClass: "gp-thumb",
                    playerContainerClass: "gp-container",
                    inactiveClass: "inactive"
                }),
                ce.publish(Jt, {
                    deskFilterId: "filter",
                    insertContainer: "logo-button1"
                }),
                ce.publish(Yt, {
                    ddTriggerClass: "dropdown__trigger",
                    ddContentClass: "dropdown__block"
                }),
                ce.publish(Qt, {
                    ddTriggerClass: "dropdown2__trigger",
                    ddContentClass: "dropdown2__block",
                    placeholderClass: "left-nav-menu"
                }),
                ce.publish(He, {
                    isLoggedCookieName: "is_logged_3",
                    galleryIdsCookieName: "get_gid",
                    psmodeCookie: "psmode",
                    api_is_logged: "/api/user/is_logged",
                    api_auth: "/api/user/auth?lang=" + m.lang,
                    api_logout: "/api/user/logout?lang=" + m.lang,
                    api_max_page: "/api/favorites/get_page_max",
                    api_channels_max_page: "/api/favorites/channels/get_page_max",
                    api_models_max_page: "/api/favorites/models/get_page_max",
                    api_get_gid: "/api/favorites/get_gid",
                    api_get_channels_id: "/api/favorites/get_channel_ids",
                    api_get_models_id: "/api/favorites/get_model_ids",
                    api_add_gal: "/api/favorites/add_gal",
                    api_add_channel: "/api/favorites/add_channel",
                    api_add_model: "/api/favorites/add_model",
                    api_del_gal: "/api/favorites/del_gal",
                    api_del_channel: "/api/favorites/del_channel",
                    api_del_model: "/api/favorites/del_model",
                    favIconClassName: "icon-fav-thumb",
                    favButtonClassName: "gall-info-favorite",
                    psFavButtonClassName: "pswp__button--favorite-button",
                    excludeNativeAdClass: "c-model",
                    individualPageFuvButton: "individual_fav_button",
                    individualPageFuvButtonAddClass: "add",
                    individualPageFuvButtonRemoveClass: "remove",
                    individualPageTitle: m.searchQuery,
                    pageType: m.PAGE_TYPE,
                    pageSubType: m.SUBTYPE,
                    profileID: m.profileID
                }),
                ce.publish(Xt, {
                    gLink: "https://www.google.com/recaptcha/api.js",
                    gKey: "6Lf8bnEUAAAAAKpiY6GN2o0VvtoXXl1-91ikBXM8"
                }),
                ce.publish(At, {}),
                ce.publish(St, {
                    lang: m.lang
                }),
                ce.publish(Kt, {
                    submenuClass: "submenu-section",
                    itemClass: "submenu-item",
                    buttonClass: "slide-button"
                }),
                ce.publish(ea),
                ce.publish(oa, {}),
                ce.publish(sa, {
                    searchMainClass: "search",
                    acMainClass: "autocomplete",
                    acPath: "https://live.pornpics.com/auto/",
                    adClass: "r-frame",
                    thumbContainerID: "main",
                    searchPath: "/search/srch.php?q=",
                    slugId: m.cid,
                    reserveSlugId: m.slug,
                    lang: m.lang,
                    updateLazyLoad: function() {
                        ce.publish(Le)
                    },
                    updateMainGrid: function() {
                        ce.publish(Pe, "added")
                    },
                    hideLoader: function() {
                        ce.publish(Ae)
                    },
                    addFavIcons: function() {
                        ce.publish(Je, {
                            container: "tiles",
                            type: "add"
                        })
                    },
                    adModuleInclude: function() {
                        ce.publish(ut)
                    }
                }),
                ce.publish(fa, {
                    pageType: m.PAGE_TYPE
                }),
                m.PAGE_TYPE) {
                case h:
                    ce.publish(Y);
                    break;
                case g:
                    ce.publish(aa, "category"),
                    ce.publish(Q);
                    break;
                case P:
                    ce.publish(aa, "popular"),
                    ce.publish(Q);
                    break;
                case _:
                    ce.publish(aa, "recent"),
                    ce.publish(Q);
                    break;
                case f:
                    ce.publish(aa, "category_recent"),
                    ce.publish(Q);
                    break;
                case b:
                    ce.publish(aa, "category_recent_2"),
                    ce.publish(Q);
                    break;
                case y:
                    ce.publish(aa, "category_shemale_rotator_maps"),
                    ce.publish($);
                    break;
                case C:
                case k:
                    ce.publish(aa, "category_shemale_rotator_maps"),
                    ce.publish(ae);
                    break;
                case v:
                case w:
                    ce.publish(K);
                    break;
                case A:
                    ce.publish(aa, "tags"),
                    ce.publish(X);
                    break;
                case I:
                    ce.publish(aa, "tags_recent"),
                    ce.publish(X);
                    break;
                case T:
                    ce.publish(aa, "gallery"),
                    ce.publish(ne);
                    break;
                case E:
                case S:
                case N:
                case D:
                    ce.publish(aa, "gallery"),
                    ce.publish(ie);
                    break;
                case x:
                case L:
                    ce.publish(aa, "search"),
                    ce.publish(oe);
                    break;
                case M:
                    ce.publish(aa, "search"),
                    ce.publish(se);
                    break;
                case B:
                case O:
                    ce.publish(re);
                    break;
                case U:
                    ce.publish(le);
                    break;
                case j:
                    ce.publish(aa, "favorite_new"),
                    ce.publish(ue);
                    break;
                case F:
                    ce.publish(aa, "favorite_old"),
                    ce.publish(de);
                    break;
                case R:
                    ce.publish(aa, "favorite_random"),
                    ce.publish(pe);
                    break;
                case V:
                    ce.publish(aa, "favorite_channels_new"),
                    ce.publish(me);
                    break;
                case H:
                    ce.publish(aa, "favorite_channels_old"),
                    ce.publish(he);
                    break;
                case G:
                    ce.publish(aa, "favorite_channels_random"),
                    ce.publish(ge);
                    break;
                case z:
                    ce.publish(aa, "favorite_models_new"),
                    ce.publish(fe);
                    break;
                case q:
                    ce.publish(aa, "favorite_models_old"),
                    ce.publish(be);
                    break;
                case W:
                    ce.publish(aa, "favorite_models_random"),
                    ce.publish(ve);
                    break;
                case J:
                    ce.publish(aa, "cam_models"),
                    ce.publish(ye)
                }
                ce.publish(Tt),
                ce.publish(ia, {
                    buttonClass: "site-theme",
                    cookieName: "PP_THEME",
                    exDate: "365"
                }),
                ce.publish(ya, {
                    itemClass: "alt-lang-item",
                    attr: "data-lang"
                }),
                ce.publish(ra, {
                    adContainer: "r-frame",
                    onlyMobContainer: "adss-mob",
                    adIncludedClass: "r-frame-on"
                }),
                ce.publish(la, {
                    container: "category",
                    filePath: "https://www.pornpics.com/categories-menu?lang=",
                    lang: m.lang
                }),
                ce.publish(ca, {
                    upButtonId: "onTop3"
                }),
                ce.publish(ua, {
                    containerId: "footer",
                    filePath: "/footer/?lang=" + m.lang
                }),
                ce.publish(da, {
                    ranButton: "random-button",
                    ranButton2: "nav-button-random",
                    scriptPath: "https://www.pornpics.com/random/index.php?lang=" + m.lang
                }),
                ce.publish(pa, {
                    pagiFormId: "pagination-form"
                }),
                ce.publish(ga)
            }(jQuery, device, ie)
        }
    }
      , t = {};
    function a(n) {
        var i = t[n];
        if (void 0 !== i)
            return i.exports;
        var o = t[n] = {
            id: n,
            loaded: !1,
            exports: {}
        };
        return e[n](o, o.exports, a),
        o.loaded = !0,
        o.exports
    }
    a.amdO = {},
    a.hmd = e=>((e = Object.create(e)).children || (e.children = []),
    Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: ()=>{
            throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
        }
    }),
    e),
    a(70);
    a(667)
}
)();
