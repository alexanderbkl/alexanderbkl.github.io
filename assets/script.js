(function() {
    const C = document.createElement("link").relList;
    if (C && C.supports && C.supports("modulepreload"))
        return;
    for (const R of document.querySelectorAll('link[rel="modulepreload"]'))
        v(R);
    new MutationObserver(R => {
        for (const Z of R)
            if (Z.type === "childList")
                for (const il of Z.addedNodes)
                    il.tagName === "LINK" && il.rel === "modulepreload" && v(il)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function Q(R) {
        const Z = {};
        return R.integrity && (Z.integrity = R.integrity),
        R.referrerPolicy && (Z.referrerPolicy = R.referrerPolicy),
        R.crossOrigin === "use-credentials" ? Z.credentials = "include" : R.crossOrigin === "anonymous" ? Z.credentials = "omit" : Z.credentials = "same-origin",
        Z
    }
    function v(R) {
        if (R.ep)
            return;
        R.ep = !0;
        const Z = Q(R);
        fetch(R.href, Z)
    }
}
)();
function Mo(A) {
    return A && A.__esModule && Object.prototype.hasOwnProperty.call(A, "default") ? A.default : A
}
var ci = {
    exports: {}
}
  , ze = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ho;
function Im() {
    if (ho)
        return ze;
    ho = 1;
    var A = Symbol.for("react.transitional.element")
      , C = Symbol.for("react.fragment");
    function Q(v, R, Z) {
        var il = null;
        if (Z !== void 0 && (il = "" + Z),
        R.key !== void 0 && (il = "" + R.key),
        "key"in R) {
            Z = {};
            for (var gl in R)
                gl !== "key" && (Z[gl] = R[gl])
        } else
            Z = R;
        return R = Z.ref,
        {
            $$typeof: A,
            type: v,
            key: il,
            ref: R !== void 0 ? R : null,
            props: Z
        }
    }
    return ze.Fragment = C,
    ze.jsx = Q,
    ze.jsxs = Q,
    ze
}
var go;
function Pm() {
    return go || (go = 1,
    ci.exports = Im()),
    ci.exports
}
var X = Pm()
  , fi = {
    exports: {}
}
  , j = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ro;
function ld() {
    if (ro)
        return j;
    ro = 1;
    var A = Symbol.for("react.transitional.element")
      , C = Symbol.for("react.portal")
      , Q = Symbol.for("react.fragment")
      , v = Symbol.for("react.strict_mode")
      , R = Symbol.for("react.profiler")
      , Z = Symbol.for("react.consumer")
      , il = Symbol.for("react.context")
      , gl = Symbol.for("react.forward_ref")
      , U = Symbol.for("react.suspense")
      , E = Symbol.for("react.memo")
      , V = Symbol.for("react.lazy")
      , x = Symbol.for("react.activity")
      , tl = Symbol.iterator;
    function Dl(y) {
        return y === null || typeof y != "object" ? null : (y = tl && y[tl] || y["@@iterator"],
        typeof y == "function" ? y : null)
    }
    var rl = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , jl = Object.assign
      , Nt = {};
    function kl(y, T, p) {
        this.props = y,
        this.context = T,
        this.refs = Nt,
        this.updater = p || rl
    }
    kl.prototype.isReactComponent = {},
    kl.prototype.setState = function(y, T) {
        if (typeof y != "object" && typeof y != "function" && y != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, y, T, "setState")
    }
    ,
    kl.prototype.forceUpdate = function(y) {
        this.updater.enqueueForceUpdate(this, y, "forceUpdate")
    }
    ;
    function $t() {}
    $t.prototype = kl.prototype;
    function ql(y, T, p) {
        this.props = y,
        this.context = T,
        this.refs = Nt,
        this.updater = p || rl
    }
    var ct = ql.prototype = new $t;
    ct.constructor = ql,
    jl(ct, kl.prototype),
    ct.isPureReactComponent = !0;
    var At = Array.isArray;
    function Gl() {}
    var k = {
        H: null,
        A: null,
        T: null,
        S: null
    }
      , Xl = Object.prototype.hasOwnProperty;
    function _t(y, T, p) {
        var O = p.ref;
        return {
            $$typeof: A,
            type: y,
            key: T,
            ref: O !== void 0 ? O : null,
            props: p
        }
    }
    function Za(y, T) {
        return _t(y.type, T, y.props)
    }
    function pt(y) {
        return typeof y == "object" && y !== null && y.$$typeof === A
    }
    function Ql(y) {
        var T = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + y.replace(/[=:]/g, function(p) {
            return T[p]
        })
    }
    var Ea = /\/+/g;
    function xt(y, T) {
        return typeof y == "object" && y !== null && y.key != null ? Ql("" + y.key) : T.toString(36)
    }
    function bt(y) {
        switch (y.status) {
        case "fulfilled":
            return y.value;
        case "rejected":
            throw y.reason;
        default:
            switch (typeof y.status == "string" ? y.then(Gl, Gl) : (y.status = "pending",
            y.then(function(T) {
                y.status === "pending" && (y.status = "fulfilled",
                y.value = T)
            }, function(T) {
                y.status === "pending" && (y.status = "rejected",
                y.reason = T)
            })),
            y.status) {
            case "fulfilled":
                return y.value;
            case "rejected":
                throw y.reason
            }
        }
        throw y
    }
    function S(y, T, p, O, Y) {
        var L = typeof y;
        (L === "undefined" || L === "boolean") && (y = null);
        var ll = !1;
        if (y === null)
            ll = !0;
        else
            switch (L) {
            case "bigint":
            case "string":
            case "number":
                ll = !0;
                break;
            case "object":
                switch (y.$$typeof) {
                case A:
                case C:
                    ll = !0;
                    break;
                case V:
                    return ll = y._init,
                    S(ll(y._payload), T, p, O, Y)
                }
            }
        if (ll)
            return Y = Y(y),
            ll = O === "" ? "." + xt(y, 0) : O,
            At(Y) ? (p = "",
            ll != null && (p = ll.replace(Ea, "$&/") + "/"),
            S(Y, T, p, "", function(Ou) {
                return Ou
            })) : Y != null && (pt(Y) && (Y = Za(Y, p + (Y.key == null || y && y.key === Y.key ? "" : ("" + Y.key).replace(Ea, "$&/") + "/") + ll)),
            T.push(Y)),
            1;
        ll = 0;
        var Yl = O === "" ? "." : O + ":";
        if (At(y))
            for (var Sl = 0; Sl < y.length; Sl++)
                O = y[Sl],
                L = Yl + xt(O, Sl),
                ll += S(O, T, p, L, Y);
        else if (Sl = Dl(y),
        typeof Sl == "function")
            for (y = Sl.call(y),
            Sl = 0; !(O = y.next()).done; )
                O = O.value,
                L = Yl + xt(O, Sl++),
                ll += S(O, T, p, L, Y);
        else if (L === "object") {
            if (typeof y.then == "function")
                return S(bt(y), T, p, O, Y);
            throw T = String(y),
            Error("Objects are not valid as a React child (found: " + (T === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : T) + "). If you meant to render a collection of children, use an array instead.")
        }
        return ll
    }
    function _(y, T, p) {
        if (y == null)
            return y;
        var O = []
          , Y = 0;
        return S(y, O, "", "", function(L) {
            return T.call(p, L, Y++)
        }),
        O
    }
    function q(y) {
        if (y._status === -1) {
            var T = y._result;
            T = T(),
            T.then(function(p) {
                (y._status === 0 || y._status === -1) && (y._status = 1,
                y._result = p)
            }, function(p) {
                (y._status === 0 || y._status === -1) && (y._status = 2,
                y._result = p)
            }),
            y._status === -1 && (y._status = 0,
            y._result = T)
        }
        if (y._status === 1)
            return y._result.default;
        throw y._result
    }
    var el = typeof reportError == "function" ? reportError : function(y) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var T = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y),
                error: y
            });
            if (!window.dispatchEvent(T))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", y);
            return
        }
        console.error(y)
    }
      , sl = {
        map: _,
        forEach: function(y, T, p) {
            _(y, function() {
                T.apply(this, arguments)
            }, p)
        },
        count: function(y) {
            var T = 0;
            return _(y, function() {
                T++
            }),
            T
        },
        toArray: function(y) {
            return _(y, function(T) {
                return T
            }) || []
        },
        only: function(y) {
            if (!pt(y))
                throw Error("React.Children.only expected to receive a single React element child.");
            return y
        }
    };
    return j.Activity = x,
    j.Children = sl,
    j.Component = kl,
    j.Fragment = Q,
    j.Profiler = R,
    j.PureComponent = ql,
    j.StrictMode = v,
    j.Suspense = U,
    j.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = k,
    j.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(y) {
            return k.H.useMemoCache(y)
        }
    },
    j.cache = function(y) {
        return function() {
            return y.apply(null, arguments)
        }
    }
    ,
    j.cacheSignal = function() {
        return null
    }
    ,
    j.cloneElement = function(y, T, p) {
        if (y == null)
            throw Error("The argument must be a React element, but you passed " + y + ".");
        var O = jl({}, y.props)
          , Y = y.key;
        if (T != null)
            for (L in T.key !== void 0 && (Y = "" + T.key),
            T)
                !Xl.call(T, L) || L === "key" || L === "__self" || L === "__source" || L === "ref" && T.ref === void 0 || (O[L] = T[L]);
        var L = arguments.length - 2;
        if (L === 1)
            O.children = p;
        else if (1 < L) {
            for (var ll = Array(L), Yl = 0; Yl < L; Yl++)
                ll[Yl] = arguments[Yl + 2];
            O.children = ll
        }
        return _t(y.type, Y, O)
    }
    ,
    j.createContext = function(y) {
        return y = {
            $$typeof: il,
            _currentValue: y,
            _currentValue2: y,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        y.Provider = y,
        y.Consumer = {
            $$typeof: Z,
            _context: y
        },
        y
    }
    ,
    j.createElement = function(y, T, p) {
        var O, Y = {}, L = null;
        if (T != null)
            for (O in T.key !== void 0 && (L = "" + T.key),
            T)
                Xl.call(T, O) && O !== "key" && O !== "__self" && O !== "__source" && (Y[O] = T[O]);
        var ll = arguments.length - 2;
        if (ll === 1)
            Y.children = p;
        else if (1 < ll) {
            for (var Yl = Array(ll), Sl = 0; Sl < ll; Sl++)
                Yl[Sl] = arguments[Sl + 2];
            Y.children = Yl
        }
        if (y && y.defaultProps)
            for (O in ll = y.defaultProps,
            ll)
                Y[O] === void 0 && (Y[O] = ll[O]);
        return _t(y, L, Y)
    }
    ,
    j.createRef = function() {
        return {
            current: null
        }
    }
    ,
    j.forwardRef = function(y) {
        return {
            $$typeof: gl,
            render: y
        }
    }
    ,
    j.isValidElement = pt,
    j.lazy = function(y) {
        return {
            $$typeof: V,
            _payload: {
                _status: -1,
                _result: y
            },
            _init: q
        }
    }
    ,
    j.memo = function(y, T) {
        return {
            $$typeof: E,
            type: y,
            compare: T === void 0 ? null : T
        }
    }
    ,
    j.startTransition = function(y) {
        var T = k.T
          , p = {};
        k.T = p;
        try {
            var O = y()
              , Y = k.S;
            Y !== null && Y(p, O),
            typeof O == "object" && O !== null && typeof O.then == "function" && O.then(Gl, el)
        } catch (L) {
            el(L)
        } finally {
            T !== null && p.types !== null && (T.types = p.types),
            k.T = T
        }
    }
    ,
    j.unstable_useCacheRefresh = function() {
        return k.H.useCacheRefresh()
    }
    ,
    j.use = function(y) {
        return k.H.use(y)
    }
    ,
    j.useActionState = function(y, T, p) {
        return k.H.useActionState(y, T, p)
    }
    ,
    j.useCallback = function(y, T) {
        return k.H.useCallback(y, T)
    }
    ,
    j.useContext = function(y) {
        return k.H.useContext(y)
    }
    ,
    j.useDebugValue = function() {}
    ,
    j.useDeferredValue = function(y, T) {
        return k.H.useDeferredValue(y, T)
    }
    ,
    j.useEffect = function(y, T) {
        return k.H.useEffect(y, T)
    }
    ,
    j.useEffectEvent = function(y) {
        return k.H.useEffectEvent(y)
    }
    ,
    j.useId = function() {
        return k.H.useId()
    }
    ,
    j.useImperativeHandle = function(y, T, p) {
        return k.H.useImperativeHandle(y, T, p)
    }
    ,
    j.useInsertionEffect = function(y, T) {
        return k.H.useInsertionEffect(y, T)
    }
    ,
    j.useLayoutEffect = function(y, T) {
        return k.H.useLayoutEffect(y, T)
    }
    ,
    j.useMemo = function(y, T) {
        return k.H.useMemo(y, T)
    }
    ,
    j.useOptimistic = function(y, T) {
        return k.H.useOptimistic(y, T)
    }
    ,
    j.useReducer = function(y, T, p) {
        return k.H.useReducer(y, T, p)
    }
    ,
    j.useRef = function(y) {
        return k.H.useRef(y)
    }
    ,
    j.useState = function(y) {
        return k.H.useState(y)
    }
    ,
    j.useSyncExternalStore = function(y, T, p) {
        return k.H.useSyncExternalStore(y, T, p)
    }
    ,
    j.useTransition = function() {
        return k.H.useTransition()
    }
    ,
    j.version = "19.2.1",
    j
}
var So;
function mi() {
    return So || (So = 1,
    fi.exports = ld()),
    fi.exports
}
var rt = mi();
const td = Mo(rt);
var ii = {
    exports: {}
}
  , Te = {}
  , si = {
    exports: {}
}
  , yi = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bo;
function ad() {
    return bo || (bo = 1,
    (function(A) {
        function C(S, _) {
            var q = S.length;
            S.push(_);
            l: for (; 0 < q; ) {
                var el = q - 1 >>> 1
                  , sl = S[el];
                if (0 < R(sl, _))
                    S[el] = _,
                    S[q] = sl,
                    q = el;
                else
                    break l
            }
        }
        function Q(S) {
            return S.length === 0 ? null : S[0]
        }
        function v(S) {
            if (S.length === 0)
                return null;
            var _ = S[0]
              , q = S.pop();
            if (q !== _) {
                S[0] = q;
                l: for (var el = 0, sl = S.length, y = sl >>> 1; el < y; ) {
                    var T = 2 * (el + 1) - 1
                      , p = S[T]
                      , O = T + 1
                      , Y = S[O];
                    if (0 > R(p, q))
                        O < sl && 0 > R(Y, p) ? (S[el] = Y,
                        S[O] = q,
                        el = O) : (S[el] = p,
                        S[T] = q,
                        el = T);
                    else if (O < sl && 0 > R(Y, q))
                        S[el] = Y,
                        S[O] = q,
                        el = O;
                    else
                        break l
                }
            }
            return _
        }
        function R(S, _) {
            var q = S.sortIndex - _.sortIndex;
            return q !== 0 ? q : S.id - _.id
        }
        if (A.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
            var Z = performance;
            A.unstable_now = function() {
                return Z.now()
            }
        } else {
            var il = Date
              , gl = il.now();
            A.unstable_now = function() {
                return il.now() - gl
            }
        }
        var U = []
          , E = []
          , V = 1
          , x = null
          , tl = 3
          , Dl = !1
          , rl = !1
          , jl = !1
          , Nt = !1
          , kl = typeof setTimeout == "function" ? setTimeout : null
          , $t = typeof clearTimeout == "function" ? clearTimeout : null
          , ql = typeof setImmediate < "u" ? setImmediate : null;
        function ct(S) {
            for (var _ = Q(E); _ !== null; ) {
                if (_.callback === null)
                    v(E);
                else if (_.startTime <= S)
                    v(E),
                    _.sortIndex = _.expirationTime,
                    C(U, _);
                else
                    break;
                _ = Q(E)
            }
        }
        function At(S) {
            if (jl = !1,
            ct(S),
            !rl)
                if (Q(U) !== null)
                    rl = !0,
                    Gl || (Gl = !0,
                    Ql());
                else {
                    var _ = Q(E);
                    _ !== null && bt(At, _.startTime - S)
                }
        }
        var Gl = !1
          , k = -1
          , Xl = 5
          , _t = -1;
        function Za() {
            return Nt ? !0 : !(A.unstable_now() - _t < Xl)
        }
        function pt() {
            if (Nt = !1,
            Gl) {
                var S = A.unstable_now();
                _t = S;
                var _ = !0;
                try {
                    l: {
                        rl = !1,
                        jl && (jl = !1,
                        $t(k),
                        k = -1),
                        Dl = !0;
                        var q = tl;
                        try {
                            t: {
                                for (ct(S),
                                x = Q(U); x !== null && !(x.expirationTime > S && Za()); ) {
                                    var el = x.callback;
                                    if (typeof el == "function") {
                                        x.callback = null,
                                        tl = x.priorityLevel;
                                        var sl = el(x.expirationTime <= S);
                                        if (S = A.unstable_now(),
                                        typeof sl == "function") {
                                            x.callback = sl,
                                            ct(S),
                                            _ = !0;
                                            break t
                                        }
                                        x === Q(U) && v(U),
                                        ct(S)
                                    } else
                                        v(U);
                                    x = Q(U)
                                }
                                if (x !== null)
                                    _ = !0;
                                else {
                                    var y = Q(E);
                                    y !== null && bt(At, y.startTime - S),
                                    _ = !1
                                }
                            }
                            break l
                        } finally {
                            x = null,
                            tl = q,
                            Dl = !1
                        }
                        _ = void 0
                    }
                } finally {
                    _ ? Ql() : Gl = !1
                }
            }
        }
        var Ql;
        if (typeof ql == "function")
            Ql = function() {
                ql(pt)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var Ea = new MessageChannel
              , xt = Ea.port2;
            Ea.port1.onmessage = pt,
            Ql = function() {
                xt.postMessage(null)
            }
        } else
            Ql = function() {
                kl(pt, 0)
            }
            ;
        function bt(S, _) {
            k = kl(function() {
                S(A.unstable_now())
            }, _)
        }
        A.unstable_IdlePriority = 5,
        A.unstable_ImmediatePriority = 1,
        A.unstable_LowPriority = 4,
        A.unstable_NormalPriority = 3,
        A.unstable_Profiling = null,
        A.unstable_UserBlockingPriority = 2,
        A.unstable_cancelCallback = function(S) {
            S.callback = null
        }
        ,
        A.unstable_forceFrameRate = function(S) {
            0 > S || 125 < S ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Xl = 0 < S ? Math.floor(1e3 / S) : 5
        }
        ,
        A.unstable_getCurrentPriorityLevel = function() {
            return tl
        }
        ,
        A.unstable_next = function(S) {
            switch (tl) {
            case 1:
            case 2:
            case 3:
                var _ = 3;
                break;
            default:
                _ = tl
            }
            var q = tl;
            tl = _;
            try {
                return S()
            } finally {
                tl = q
            }
        }
        ,
        A.unstable_requestPaint = function() {
            Nt = !0
        }
        ,
        A.unstable_runWithPriority = function(S, _) {
            switch (S) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                S = 3
            }
            var q = tl;
            tl = S;
            try {
                return _()
            } finally {
                tl = q
            }
        }
        ,
        A.unstable_scheduleCallback = function(S, _, q) {
            var el = A.unstable_now();
            switch (typeof q == "object" && q !== null ? (q = q.delay,
            q = typeof q == "number" && 0 < q ? el + q : el) : q = el,
            S) {
            case 1:
                var sl = -1;
                break;
            case 2:
                sl = 250;
                break;
            case 5:
                sl = 1073741823;
                break;
            case 4:
                sl = 1e4;
                break;
            default:
                sl = 5e3
            }
            return sl = q + sl,
            S = {
                id: V++,
                callback: _,
                priorityLevel: S,
                startTime: q,
                expirationTime: sl,
                sortIndex: -1
            },
            q > el ? (S.sortIndex = q,
            C(E, S),
            Q(U) === null && S === Q(E) && (jl ? ($t(k),
            k = -1) : jl = !0,
            bt(At, q - el))) : (S.sortIndex = sl,
            C(U, S),
            rl || Dl || (rl = !0,
            Gl || (Gl = !0,
            Ql()))),
            S
        }
        ,
        A.unstable_shouldYield = Za,
        A.unstable_wrapCallback = function(S) {
            var _ = tl;
            return function() {
                var q = tl;
                tl = _;
                try {
                    return S.apply(this, arguments)
                } finally {
                    tl = q
                }
            }
        }
    }
    )(yi)),
    yi
}
var zo;
function ud() {
    return zo || (zo = 1,
    si.exports = ad()),
    si.exports
}
var oi = {
    exports: {}
}
  , Cl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var To;
function ed() {
    if (To)
        return Cl;
    To = 1;
    var A = mi();
    function C(U) {
        var E = "https://react.dev/errors/" + U;
        if (1 < arguments.length) {
            E += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var V = 2; V < arguments.length; V++)
                E += "&args[]=" + encodeURIComponent(arguments[V])
        }
        return "Minified React error #" + U + "; visit " + E + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function Q() {}
    var v = {
        d: {
            f: Q,
            r: function() {
                throw Error(C(522))
            },
            D: Q,
            C: Q,
            L: Q,
            m: Q,
            X: Q,
            S: Q,
            M: Q
        },
        p: 0,
        findDOMNode: null
    }
      , R = Symbol.for("react.portal");
    function Z(U, E, V) {
        var x = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: R,
            key: x == null ? null : "" + x,
            children: U,
            containerInfo: E,
            implementation: V
        }
    }
    var il = A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function gl(U, E) {
        if (U === "font")
            return "";
        if (typeof E == "string")
            return E === "use-credentials" ? E : ""
    }
    return Cl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = v,
    Cl.createPortal = function(U, E) {
        var V = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!E || E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11)
            throw Error(C(299));
        return Z(U, E, null, V)
    }
    ,
    Cl.flushSync = function(U) {
        var E = il.T
          , V = v.p;
        try {
            if (il.T = null,
            v.p = 2,
            U)
                return U()
        } finally {
            il.T = E,
            v.p = V,
            v.d.f()
        }
    }
    ,
    Cl.preconnect = function(U, E) {
        typeof U == "string" && (E ? (E = E.crossOrigin,
        E = typeof E == "string" ? E === "use-credentials" ? E : "" : void 0) : E = null,
        v.d.C(U, E))
    }
    ,
    Cl.prefetchDNS = function(U) {
        typeof U == "string" && v.d.D(U)
    }
    ,
    Cl.preinit = function(U, E) {
        if (typeof U == "string" && E && typeof E.as == "string") {
            var V = E.as
              , x = gl(V, E.crossOrigin)
              , tl = typeof E.integrity == "string" ? E.integrity : void 0
              , Dl = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
            V === "style" ? v.d.S(U, typeof E.precedence == "string" ? E.precedence : void 0, {
                crossOrigin: x,
                integrity: tl,
                fetchPriority: Dl
            }) : V === "script" && v.d.X(U, {
                crossOrigin: x,
                integrity: tl,
                fetchPriority: Dl,
                nonce: typeof E.nonce == "string" ? E.nonce : void 0
            })
        }
    }
    ,
    Cl.preinitModule = function(U, E) {
        if (typeof U == "string")
            if (typeof E == "object" && E !== null) {
                if (E.as == null || E.as === "script") {
                    var V = gl(E.as, E.crossOrigin);
                    v.d.M(U, {
                        crossOrigin: V,
                        integrity: typeof E.integrity == "string" ? E.integrity : void 0,
                        nonce: typeof E.nonce == "string" ? E.nonce : void 0
                    })
                }
            } else
                E == null && v.d.M(U)
    }
    ,
    Cl.preload = function(U, E) {
        if (typeof U == "string" && typeof E == "object" && E !== null && typeof E.as == "string") {
            var V = E.as
              , x = gl(V, E.crossOrigin);
            v.d.L(U, V, {
                crossOrigin: x,
                integrity: typeof E.integrity == "string" ? E.integrity : void 0,
                nonce: typeof E.nonce == "string" ? E.nonce : void 0,
                type: typeof E.type == "string" ? E.type : void 0,
                fetchPriority: typeof E.fetchPriority == "string" ? E.fetchPriority : void 0,
                referrerPolicy: typeof E.referrerPolicy == "string" ? E.referrerPolicy : void 0,
                imageSrcSet: typeof E.imageSrcSet == "string" ? E.imageSrcSet : void 0,
                imageSizes: typeof E.imageSizes == "string" ? E.imageSizes : void 0,
                media: typeof E.media == "string" ? E.media : void 0
            })
        }
    }
    ,
    Cl.preloadModule = function(U, E) {
        if (typeof U == "string")
            if (E) {
                var V = gl(E.as, E.crossOrigin);
                v.d.m(U, {
                    as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0,
                    crossOrigin: V,
                    integrity: typeof E.integrity == "string" ? E.integrity : void 0
                })
            } else
                v.d.m(U)
    }
    ,
    Cl.requestFormReset = function(U) {
        v.d.r(U)
    }
    ,
    Cl.unstable_batchedUpdates = function(U, E) {
        return U(E)
    }
    ,
    Cl.useFormState = function(U, E, V) {
        return il.H.useFormState(U, E, V)
    }
    ,
    Cl.useFormStatus = function() {
        return il.H.useHostTransitionStatus()
    }
    ,
    Cl.version = "19.2.1",
    Cl
}
var Eo;
function nd() {
    if (Eo)
        return oi.exports;
    Eo = 1;
    function A() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A)
            } catch (C) {
                console.error(C)
            }
    }
    return A(),
    oi.exports = ed(),
    oi.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ao;
function cd() {
    if (Ao)
        return Te;
    Ao = 1;
    var A = ud()
      , C = mi()
      , Q = nd();
    function v(l) {
        var t = "https://react.dev/errors/" + l;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var a = 2; a < arguments.length; a++)
                t += "&args[]=" + encodeURIComponent(arguments[a])
        }
        return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function R(l) {
        return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11)
    }
    function Z(l) {
        var t = l
          , a = l;
        if (l.alternate)
            for (; t.return; )
                t = t.return;
        else {
            l = t;
            do
                t = l,
                (t.flags & 4098) !== 0 && (a = t.return),
                l = t.return;
            while (l)
        }
        return t.tag === 3 ? a : null
    }
    function il(l) {
        if (l.tag === 13) {
            var t = l.memoizedState;
            if (t === null && (l = l.alternate,
            l !== null && (t = l.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function gl(l) {
        if (l.tag === 31) {
            var t = l.memoizedState;
            if (t === null && (l = l.alternate,
            l !== null && (t = l.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function U(l) {
        if (Z(l) !== l)
            throw Error(v(188))
    }
    function E(l) {
        var t = l.alternate;
        if (!t) {
            if (t = Z(l),
            t === null)
                throw Error(v(188));
            return t !== l ? null : l
        }
        for (var a = l, u = t; ; ) {
            var e = a.return;
            if (e === null)
                break;
            var n = e.alternate;
            if (n === null) {
                if (u = e.return,
                u !== null) {
                    a = u;
                    continue
                }
                break
            }
            if (e.child === n.child) {
                for (n = e.child; n; ) {
                    if (n === a)
                        return U(e),
                        l;
                    if (n === u)
                        return U(e),
                        t;
                    n = n.sibling
                }
                throw Error(v(188))
            }
            if (a.return !== u.return)
                a = e,
                u = n;
            else {
                for (var c = !1, f = e.child; f; ) {
                    if (f === a) {
                        c = !0,
                        a = e,
                        u = n;
                        break
                    }
                    if (f === u) {
                        c = !0,
                        u = e,
                        a = n;
                        break
                    }
                    f = f.sibling
                }
                if (!c) {
                    for (f = n.child; f; ) {
                        if (f === a) {
                            c = !0,
                            a = n,
                            u = e;
                            break
                        }
                        if (f === u) {
                            c = !0,
                            u = n,
                            a = e;
                            break
                        }
                        f = f.sibling
                    }
                    if (!c)
                        throw Error(v(189))
                }
            }
            if (a.alternate !== u)
                throw Error(v(190))
        }
        if (a.tag !== 3)
            throw Error(v(188));
        return a.stateNode.current === a ? l : t
    }
    function V(l) {
        var t = l.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return l;
        for (l = l.child; l !== null; ) {
            if (t = V(l),
            t !== null)
                return t;
            l = l.sibling
        }
        return null
    }
    var x = Object.assign
      , tl = Symbol.for("react.element")
      , Dl = Symbol.for("react.transitional.element")
      , rl = Symbol.for("react.portal")
      , jl = Symbol.for("react.fragment")
      , Nt = Symbol.for("react.strict_mode")
      , kl = Symbol.for("react.profiler")
      , $t = Symbol.for("react.consumer")
      , ql = Symbol.for("react.context")
      , ct = Symbol.for("react.forward_ref")
      , At = Symbol.for("react.suspense")
      , Gl = Symbol.for("react.suspense_list")
      , k = Symbol.for("react.memo")
      , Xl = Symbol.for("react.lazy")
      , _t = Symbol.for("react.activity")
      , Za = Symbol.for("react.memo_cache_sentinel")
      , pt = Symbol.iterator;
    function Ql(l) {
        return l === null || typeof l != "object" ? null : (l = pt && l[pt] || l["@@iterator"],
        typeof l == "function" ? l : null)
    }
    var Ea = Symbol.for("react.client.reference");
    function xt(l) {
        if (l == null)
            return null;
        if (typeof l == "function")
            return l.$$typeof === Ea ? null : l.displayName || l.name || null;
        if (typeof l == "string")
            return l;
        switch (l) {
        case jl:
            return "Fragment";
        case kl:
            return "Profiler";
        case Nt:
            return "StrictMode";
        case At:
            return "Suspense";
        case Gl:
            return "SuspenseList";
        case _t:
            return "Activity"
        }
        if (typeof l == "object")
            switch (l.$$typeof) {
            case rl:
                return "Portal";
            case ql:
                return l.displayName || "Context";
            case $t:
                return (l._context.displayName || "Context") + ".Consumer";
            case ct:
                var t = l.render;
                return l = l.displayName,
                l || (l = t.displayName || t.name || "",
                l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"),
                l;
            case k:
                return t = l.displayName || null,
                t !== null ? t : xt(l.type) || "Memo";
            case Xl:
                t = l._payload,
                l = l._init;
                try {
                    return xt(l(t))
                } catch {}
            }
        return null
    }
    var bt = Array.isArray
      , S = C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , _ = Q.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , q = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , el = []
      , sl = -1;
    function y(l) {
        return {
            current: l
        }
    }
    function T(l) {
        0 > sl || (l.current = el[sl],
        el[sl] = null,
        sl--)
    }
    function p(l, t) {
        sl++,
        el[sl] = l.current,
        l.current = t
    }
    var O = y(null)
      , Y = y(null)
      , L = y(null)
      , ll = y(null);
    function Yl(l, t) {
        switch (p(L, t),
        p(Y, l),
        p(O, null),
        t.nodeType) {
        case 9:
        case 11:
            l = (l = t.documentElement) && (l = l.namespaceURI) ? Yy(l) : 0;
            break;
        default:
            if (l = t.tagName,
            t = t.namespaceURI)
                t = Yy(t),
                l = By(t, l);
            else
                switch (l) {
                case "svg":
                    l = 1;
                    break;
                case "math":
                    l = 2;
                    break;
                default:
                    l = 0
                }
        }
        T(O),
        p(O, l)
    }
    function Sl() {
        T(O),
        T(Y),
        T(L)
    }
    function Ou(l) {
        l.memoizedState !== null && p(ll, l);
        var t = O.current
          , a = By(t, l.type);
        t !== a && (p(Y, l),
        p(O, a))
    }
    function Ee(l) {
        Y.current === l && (T(O),
        T(Y)),
        ll.current === l && (T(ll),
        ge._currentValue = q)
    }
    var Qn, di;
    function Aa(l) {
        if (Qn === void 0)
            try {
                throw Error()
            } catch (a) {
                var t = a.stack.trim().match(/\n( *(at )?)/);
                Qn = t && t[1] || "",
                di = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + Qn + l + di
    }
    var Zn = !1;
    function Vn(l, t) {
        if (!l || Zn)
            return "";
        Zn = !0;
        var a = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var u = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (t) {
                            var z = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(z.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(z, [])
                                } catch (g) {
                                    var h = g
                                }
                                Reflect.construct(l, [], z)
                            } else {
                                try {
                                    z.call()
                                } catch (g) {
                                    h = g
                                }
                                l.call(z.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (g) {
                                h = g
                            }
                            (z = l()) && typeof z.catch == "function" && z.catch(function() {})
                        }
                    } catch (g) {
                        if (g && h && typeof g.stack == "string")
                            return [g.stack, h.stack]
                    }
                    return [null, null]
                }
            };
            u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var e = Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot, "name");
            e && e.configurable && Object.defineProperty(u.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var n = u.DetermineComponentFrameRoot()
              , c = n[0]
              , f = n[1];
            if (c && f) {
                var i = c.split(`
`)
                  , d = f.split(`
`);
                for (e = u = 0; u < i.length && !i[u].includes("DetermineComponentFrameRoot"); )
                    u++;
                for (; e < d.length && !d[e].includes("DetermineComponentFrameRoot"); )
                    e++;
                if (u === i.length || e === d.length)
                    for (u = i.length - 1,
                    e = d.length - 1; 1 <= u && 0 <= e && i[u] !== d[e]; )
                        e--;
                for (; 1 <= u && 0 <= e; u--,
                e--)
                    if (i[u] !== d[e]) {
                        if (u !== 1 || e !== 1)
                            do
                                if (u--,
                                e--,
                                0 > e || i[u] !== d[e]) {
                                    var r = `
` + i[u].replace(" at new ", " at ");
                                    return l.displayName && r.includes("<anonymous>") && (r = r.replace("<anonymous>", l.displayName)),
                                    r
                                }
                            while (1 <= u && 0 <= e);
                        break
                    }
            }
        } finally {
            Zn = !1,
            Error.prepareStackTrace = a
        }
        return (a = l ? l.displayName || l.name : "") ? Aa(a) : ""
    }
    function Uo(l, t) {
        switch (l.tag) {
        case 26:
        case 27:
        case 5:
            return Aa(l.type);
        case 16:
            return Aa("Lazy");
        case 13:
            return l.child !== t && t !== null ? Aa("Suspense Fallback") : Aa("Suspense");
        case 19:
            return Aa("SuspenseList");
        case 0:
        case 15:
            return Vn(l.type, !1);
        case 11:
            return Vn(l.type.render, !1);
        case 1:
            return Vn(l.type, !0);
        case 31:
            return Aa("Activity");
        default:
            return ""
        }
    }
    function vi(l) {
        try {
            var t = ""
              , a = null;
            do
                t += Uo(l, a),
                a = l,
                l = l.return;
            while (l);
            return t
        } catch (u) {
            return `
Error generating stack: ` + u.message + `
` + u.stack
        }
    }
    var Ln = Object.prototype.hasOwnProperty
      , Kn = A.unstable_scheduleCallback
      , Jn = A.unstable_cancelCallback
      , No = A.unstable_shouldYield
      , xo = A.unstable_requestPaint
      , $l = A.unstable_now
      , Ho = A.unstable_getCurrentPriorityLevel
      , hi = A.unstable_ImmediatePriority
      , gi = A.unstable_UserBlockingPriority
      , Ae = A.unstable_NormalPriority
      , Ro = A.unstable_LowPriority
      , ri = A.unstable_IdlePriority
      , qo = A.log
      , Co = A.unstable_setDisableYieldValue
      , Du = null
      , Fl = null;
    function Ft(l) {
        if (typeof qo == "function" && Co(l),
        Fl && typeof Fl.setStrictMode == "function")
            try {
                Fl.setStrictMode(Du, l)
            } catch {}
    }
    var Il = Math.clz32 ? Math.clz32 : Bo
      , jo = Math.log
      , Yo = Math.LN2;
    function Bo(l) {
        return l >>>= 0,
        l === 0 ? 32 : 31 - (jo(l) / Yo | 0) | 0
    }
    var _e = 256
      , pe = 262144
      , Me = 4194304;
    function _a(l) {
        var t = l & 42;
        if (t !== 0)
            return t;
        switch (l & -l) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
            return 64;
        case 128:
            return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
            return l & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return l & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return l & 62914560;
        case 67108864:
            return 67108864;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 0;
        default:
            return l
        }
    }
    function Oe(l, t, a) {
        var u = l.pendingLanes;
        if (u === 0)
            return 0;
        var e = 0
          , n = l.suspendedLanes
          , c = l.pingedLanes;
        l = l.warmLanes;
        var f = u & 134217727;
        return f !== 0 ? (u = f & ~n,
        u !== 0 ? e = _a(u) : (c &= f,
        c !== 0 ? e = _a(c) : a || (a = f & ~l,
        a !== 0 && (e = _a(a))))) : (f = u & ~n,
        f !== 0 ? e = _a(f) : c !== 0 ? e = _a(c) : a || (a = u & ~l,
        a !== 0 && (e = _a(a)))),
        e === 0 ? 0 : t !== 0 && t !== e && (t & n) === 0 && (n = e & -e,
        a = t & -t,
        n >= a || n === 32 && (a & 4194048) !== 0) ? t : e
    }
    function Uu(l, t) {
        return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0
    }
    function Go(l, t) {
        switch (l) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function Si() {
        var l = Me;
        return Me <<= 1,
        (Me & 62914560) === 0 && (Me = 4194304),
        l
    }
    function wn(l) {
        for (var t = [], a = 0; 31 > a; a++)
            t.push(l);
        return t
    }
    function Nu(l, t) {
        l.pendingLanes |= t,
        t !== 268435456 && (l.suspendedLanes = 0,
        l.pingedLanes = 0,
        l.warmLanes = 0)
    }
    function Xo(l, t, a, u, e, n) {
        var c = l.pendingLanes;
        l.pendingLanes = a,
        l.suspendedLanes = 0,
        l.pingedLanes = 0,
        l.warmLanes = 0,
        l.expiredLanes &= a,
        l.entangledLanes &= a,
        l.errorRecoveryDisabledLanes &= a,
        l.shellSuspendCounter = 0;
        var f = l.entanglements
          , i = l.expirationTimes
          , d = l.hiddenUpdates;
        for (a = c & ~a; 0 < a; ) {
            var r = 31 - Il(a)
              , z = 1 << r;
            f[r] = 0,
            i[r] = -1;
            var h = d[r];
            if (h !== null)
                for (d[r] = null,
                r = 0; r < h.length; r++) {
                    var g = h[r];
                    g !== null && (g.lane &= -536870913)
                }
            a &= ~z
        }
        u !== 0 && bi(l, u, 0),
        n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(c & ~t))
    }
    function bi(l, t, a) {
        l.pendingLanes |= t,
        l.suspendedLanes &= ~t;
        var u = 31 - Il(t);
        l.entangledLanes |= t,
        l.entanglements[u] = l.entanglements[u] | 1073741824 | a & 261930
    }
    function zi(l, t) {
        var a = l.entangledLanes |= t;
        for (l = l.entanglements; a; ) {
            var u = 31 - Il(a)
              , e = 1 << u;
            e & t | l[u] & t && (l[u] |= t),
            a &= ~e
        }
    }
    function Ti(l, t) {
        var a = t & -t;
        return a = (a & 42) !== 0 ? 1 : Wn(a),
        (a & (l.suspendedLanes | t)) !== 0 ? 0 : a
    }
    function Wn(l) {
        switch (l) {
        case 2:
            l = 1;
            break;
        case 8:
            l = 4;
            break;
        case 32:
            l = 16;
            break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            l = 128;
            break;
        case 268435456:
            l = 134217728;
            break;
        default:
            l = 0
        }
        return l
    }
    function kn(l) {
        return l &= -l,
        2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function Ei() {
        var l = _.p;
        return l !== 0 ? l : (l = window.event,
        l === void 0 ? 32 : fo(l.type))
    }
    function Ai(l, t) {
        var a = _.p;
        try {
            return _.p = l,
            t()
        } finally {
            _.p = a
        }
    }
    var It = Math.random().toString(36).slice(2)
      , Ul = "__reactFiber$" + It
      , Zl = "__reactProps$" + It
      , Va = "__reactContainer$" + It
      , $n = "__reactEvents$" + It
      , Qo = "__reactListeners$" + It
      , Zo = "__reactHandles$" + It
      , _i = "__reactResources$" + It
      , xu = "__reactMarker$" + It;
    function Fn(l) {
        delete l[Ul],
        delete l[Zl],
        delete l[$n],
        delete l[Qo],
        delete l[Zo]
    }
    function La(l) {
        var t = l[Ul];
        if (t)
            return t;
        for (var a = l.parentNode; a; ) {
            if (t = a[Va] || a[Ul]) {
                if (a = t.alternate,
                t.child !== null || a !== null && a.child !== null)
                    for (l = Ky(l); l !== null; ) {
                        if (a = l[Ul])
                            return a;
                        l = Ky(l)
                    }
                return t
            }
            l = a,
            a = l.parentNode
        }
        return null
    }
    function Ka(l) {
        if (l = l[Ul] || l[Va]) {
            var t = l.tag;
            if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
                return l
        }
        return null
    }
    function Hu(l) {
        var t = l.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return l.stateNode;
        throw Error(v(33))
    }
    function Ja(l) {
        var t = l[_i];
        return t || (t = l[_i] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        t
    }
    function Ml(l) {
        l[xu] = !0
    }
    var pi = new Set
      , Mi = {};
    function pa(l, t) {
        wa(l, t),
        wa(l + "Capture", t)
    }
    function wa(l, t) {
        for (Mi[l] = t,
        l = 0; l < t.length; l++)
            pi.add(t[l])
    }
    var Vo = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , Oi = {}
      , Di = {};
    function Lo(l) {
        return Ln.call(Di, l) ? !0 : Ln.call(Oi, l) ? !1 : Vo.test(l) ? Di[l] = !0 : (Oi[l] = !0,
        !1)
    }
    function De(l, t, a) {
        if (Lo(t))
            if (a === null)
                l.removeAttribute(t);
            else {
                switch (typeof a) {
                case "undefined":
                case "function":
                case "symbol":
                    l.removeAttribute(t);
                    return;
                case "boolean":
                    var u = t.toLowerCase().slice(0, 5);
                    if (u !== "data-" && u !== "aria-") {
                        l.removeAttribute(t);
                        return
                    }
                }
                l.setAttribute(t, "" + a)
            }
    }
    function Ue(l, t, a) {
        if (a === null)
            l.removeAttribute(t);
        else {
            switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                l.removeAttribute(t);
                return
            }
            l.setAttribute(t, "" + a)
        }
    }
    function Ht(l, t, a, u) {
        if (u === null)
            l.removeAttribute(a);
        else {
            switch (typeof u) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                l.removeAttribute(a);
                return
            }
            l.setAttributeNS(t, a, "" + u)
        }
    }
    function ft(l) {
        switch (typeof l) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return l;
        case "object":
            return l;
        default:
            return ""
        }
    }
    function Ui(l) {
        var t = l.type;
        return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }
    function Ko(l, t, a) {
        var u = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
        if (!l.hasOwnProperty(t) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
            var e = u.get
              , n = u.set;
            return Object.defineProperty(l, t, {
                configurable: !0,
                get: function() {
                    return e.call(this)
                },
                set: function(c) {
                    a = "" + c,
                    n.call(this, c)
                }
            }),
            Object.defineProperty(l, t, {
                enumerable: u.enumerable
            }),
            {
                getValue: function() {
                    return a
                },
                setValue: function(c) {
                    a = "" + c
                },
                stopTracking: function() {
                    l._valueTracker = null,
                    delete l[t]
                }
            }
        }
    }
    function In(l) {
        if (!l._valueTracker) {
            var t = Ui(l) ? "checked" : "value";
            l._valueTracker = Ko(l, t, "" + l[t])
        }
    }
    function Ni(l) {
        if (!l)
            return !1;
        var t = l._valueTracker;
        if (!t)
            return !0;
        var a = t.getValue()
          , u = "";
        return l && (u = Ui(l) ? l.checked ? "true" : "false" : l.value),
        l = u,
        l !== a ? (t.setValue(l),
        !0) : !1
    }
    function Ne(l) {
        if (l = l || (typeof document < "u" ? document : void 0),
        typeof l > "u")
            return null;
        try {
            return l.activeElement || l.body
        } catch {
            return l.body
        }
    }
    var Jo = /[\n"\\]/g;
    function it(l) {
        return l.replace(Jo, function(t) {
            return "\\" + t.charCodeAt(0).toString(16) + " "
        })
    }
    function Pn(l, t, a, u, e, n, c, f) {
        l.name = "",
        c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.type = c : l.removeAttribute("type"),
        t != null ? c === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + ft(t)) : l.value !== "" + ft(t) && (l.value = "" + ft(t)) : c !== "submit" && c !== "reset" || l.removeAttribute("value"),
        t != null ? lc(l, c, ft(t)) : a != null ? lc(l, c, ft(a)) : u != null && l.removeAttribute("value"),
        e == null && n != null && (l.defaultChecked = !!n),
        e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"),
        f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.name = "" + ft(f) : l.removeAttribute("name")
    }
    function xi(l, t, a, u, e, n, c, f) {
        if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n),
        t != null || a != null) {
            if (!(n !== "submit" && n !== "reset" || t != null)) {
                In(l);
                return
            }
            a = a != null ? "" + ft(a) : "",
            t = t != null ? "" + ft(t) : a,
            f || t === l.value || (l.value = t),
            l.defaultValue = t
        }
        u = u ?? e,
        u = typeof u != "function" && typeof u != "symbol" && !!u,
        l.checked = f ? l.checked : !!u,
        l.defaultChecked = !!u,
        c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (l.name = c),
        In(l)
    }
    function lc(l, t, a) {
        t === "number" && Ne(l.ownerDocument) === l || l.defaultValue === "" + a || (l.defaultValue = "" + a)
    }
    function Wa(l, t, a, u) {
        if (l = l.options,
        t) {
            t = {};
            for (var e = 0; e < a.length; e++)
                t["$" + a[e]] = !0;
            for (a = 0; a < l.length; a++)
                e = t.hasOwnProperty("$" + l[a].value),
                l[a].selected !== e && (l[a].selected = e),
                e && u && (l[a].defaultSelected = !0)
        } else {
            for (a = "" + ft(a),
            t = null,
            e = 0; e < l.length; e++) {
                if (l[e].value === a) {
                    l[e].selected = !0,
                    u && (l[e].defaultSelected = !0);
                    return
                }
                t !== null || l[e].disabled || (t = l[e])
            }
            t !== null && (t.selected = !0)
        }
    }
    function Hi(l, t, a) {
        if (t != null && (t = "" + ft(t),
        t !== l.value && (l.value = t),
        a == null)) {
            l.defaultValue !== t && (l.defaultValue = t);
            return
        }
        l.defaultValue = a != null ? "" + ft(a) : ""
    }
    function Ri(l, t, a, u) {
        if (t == null) {
            if (u != null) {
                if (a != null)
                    throw Error(v(92));
                if (bt(u)) {
                    if (1 < u.length)
                        throw Error(v(93));
                    u = u[0]
                }
                a = u
            }
            a == null && (a = ""),
            t = a
        }
        a = ft(t),
        l.defaultValue = a,
        u = l.textContent,
        u === a && u !== "" && u !== null && (l.value = u),
        In(l)
    }
    function ka(l, t) {
        if (t) {
            var a = l.firstChild;
            if (a && a === l.lastChild && a.nodeType === 3) {
                a.nodeValue = t;
                return
            }
        }
        l.textContent = t
    }
    var wo = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function qi(l, t, a) {
        var u = t.indexOf("--") === 0;
        a == null || typeof a == "boolean" || a === "" ? u ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : u ? l.setProperty(t, a) : typeof a != "number" || a === 0 || wo.has(t) ? t === "float" ? l.cssFloat = a : l[t] = ("" + a).trim() : l[t] = a + "px"
    }
    function Ci(l, t, a) {
        if (t != null && typeof t != "object")
            throw Error(v(62));
        if (l = l.style,
        a != null) {
            for (var u in a)
                !a.hasOwnProperty(u) || t != null && t.hasOwnProperty(u) || (u.indexOf("--") === 0 ? l.setProperty(u, "") : u === "float" ? l.cssFloat = "" : l[u] = "");
            for (var e in t)
                u = t[e],
                t.hasOwnProperty(e) && a[e] !== u && qi(l, e, u)
        } else
            for (var n in t)
                t.hasOwnProperty(n) && qi(l, n, t[n])
    }
    function tc(l) {
        if (l.indexOf("-") === -1)
            return !1;
        switch (l) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var Wo = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
      , ko = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function xe(l) {
        return ko.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l
    }
    function Rt() {}
    var ac = null;
    function uc(l) {
        return l = l.target || l.srcElement || window,
        l.correspondingUseElement && (l = l.correspondingUseElement),
        l.nodeType === 3 ? l.parentNode : l
    }
    var $a = null
      , Fa = null;
    function ji(l) {
        var t = Ka(l);
        if (t && (l = t.stateNode)) {
            var a = l[Zl] || null;
            l: switch (l = t.stateNode,
            t.type) {
            case "input":
                if (Pn(l, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name),
                t = a.name,
                a.type === "radio" && t != null) {
                    for (a = l; a.parentNode; )
                        a = a.parentNode;
                    for (a = a.querySelectorAll('input[name="' + it("" + t) + '"][type="radio"]'),
                    t = 0; t < a.length; t++) {
                        var u = a[t];
                        if (u !== l && u.form === l.form) {
                            var e = u[Zl] || null;
                            if (!e)
                                throw Error(v(90));
                            Pn(u, e.value, e.defaultValue, e.defaultValue, e.checked, e.defaultChecked, e.type, e.name)
                        }
                    }
                    for (t = 0; t < a.length; t++)
                        u = a[t],
                        u.form === l.form && Ni(u)
                }
                break l;
            case "textarea":
                Hi(l, a.value, a.defaultValue);
                break l;
            case "select":
                t = a.value,
                t != null && Wa(l, !!a.multiple, t, !1)
            }
        }
    }
    var ec = !1;
    function Yi(l, t, a) {
        if (ec)
            return l(t, a);
        ec = !0;
        try {
            var u = l(t);
            return u
        } finally {
            if (ec = !1,
            ($a !== null || Fa !== null) && (bn(),
            $a && (t = $a,
            l = Fa,
            Fa = $a = null,
            ji(t),
            l)))
                for (t = 0; t < l.length; t++)
                    ji(l[t])
        }
    }
    function Ru(l, t) {
        var a = l.stateNode;
        if (a === null)
            return null;
        var u = a[Zl] || null;
        if (u === null)
            return null;
        a = u[t];
        l: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (u = !u.disabled) || (l = l.type,
            u = !(l === "button" || l === "input" || l === "select" || l === "textarea")),
            l = !u;
            break l;
        default:
            l = !1
        }
        if (l)
            return null;
        if (a && typeof a != "function")
            throw Error(v(231, t, typeof a));
        return a
    }
    var qt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , nc = !1;
    if (qt)
        try {
            var qu = {};
            Object.defineProperty(qu, "passive", {
                get: function() {
                    nc = !0
                }
            }),
            window.addEventListener("test", qu, qu),
            window.removeEventListener("test", qu, qu)
        } catch {
            nc = !1
        }
    var Pt = null
      , cc = null
      , He = null;
    function Bi() {
        if (He)
            return He;
        var l, t = cc, a = t.length, u, e = "value"in Pt ? Pt.value : Pt.textContent, n = e.length;
        for (l = 0; l < a && t[l] === e[l]; l++)
            ;
        var c = a - l;
        for (u = 1; u <= c && t[a - u] === e[n - u]; u++)
            ;
        return He = e.slice(l, 1 < u ? 1 - u : void 0)
    }
    function Re(l) {
        var t = l.keyCode;
        return "charCode"in l ? (l = l.charCode,
        l === 0 && t === 13 && (l = 13)) : l = t,
        l === 10 && (l = 13),
        32 <= l || l === 13 ? l : 0
    }
    function qe() {
        return !0
    }
    function Gi() {
        return !1
    }
    function Vl(l) {
        function t(a, u, e, n, c) {
            this._reactName = a,
            this._targetInst = e,
            this.type = u,
            this.nativeEvent = n,
            this.target = c,
            this.currentTarget = null;
            for (var f in l)
                l.hasOwnProperty(f) && (a = l[f],
                this[f] = a ? a(n) : n[f]);
            return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? qe : Gi,
            this.isPropagationStopped = Gi,
            this
        }
        return x(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var a = this.nativeEvent;
                a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1),
                this.isDefaultPrevented = qe)
            },
            stopPropagation: function() {
                var a = this.nativeEvent;
                a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
                this.isPropagationStopped = qe)
            },
            persist: function() {},
            isPersistent: qe
        }),
        t
    }
    var Ma = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(l) {
            return l.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, Ce = Vl(Ma), Cu = x({}, Ma, {
        view: 0,
        detail: 0
    }), $o = Vl(Cu), fc, ic, ju, je = x({}, Cu, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: yc,
        button: 0,
        buttons: 0,
        relatedTarget: function(l) {
            return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget
        },
        movementX: function(l) {
            return "movementX"in l ? l.movementX : (l !== ju && (ju && l.type === "mousemove" ? (fc = l.screenX - ju.screenX,
            ic = l.screenY - ju.screenY) : ic = fc = 0,
            ju = l),
            fc)
        },
        movementY: function(l) {
            return "movementY"in l ? l.movementY : ic
        }
    }), Xi = Vl(je), Fo = x({}, je, {
        dataTransfer: 0
    }), Io = Vl(Fo), Po = x({}, Cu, {
        relatedTarget: 0
    }), sc = Vl(Po), l1 = x({}, Ma, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), t1 = Vl(l1), a1 = x({}, Ma, {
        clipboardData: function(l) {
            return "clipboardData"in l ? l.clipboardData : window.clipboardData
        }
    }), u1 = Vl(a1), e1 = x({}, Ma, {
        data: 0
    }), Qi = Vl(e1), n1 = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, c1 = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, f1 = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function i1(l) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(l) : (l = f1[l]) ? !!t[l] : !1
    }
    function yc() {
        return i1
    }
    var s1 = x({}, Cu, {
        key: function(l) {
            if (l.key) {
                var t = n1[l.key] || l.key;
                if (t !== "Unidentified")
                    return t
            }
            return l.type === "keypress" ? (l = Re(l),
            l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? c1[l.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: yc,
        charCode: function(l) {
            return l.type === "keypress" ? Re(l) : 0
        },
        keyCode: function(l) {
            return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0
        },
        which: function(l) {
            return l.type === "keypress" ? Re(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0
        }
    })
      , y1 = Vl(s1)
      , o1 = x({}, je, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , Zi = Vl(o1)
      , m1 = x({}, Cu, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: yc
    })
      , d1 = Vl(m1)
      , v1 = x({}, Ma, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , h1 = Vl(v1)
      , g1 = x({}, je, {
        deltaX: function(l) {
            return "deltaX"in l ? l.deltaX : "wheelDeltaX"in l ? -l.wheelDeltaX : 0
        },
        deltaY: function(l) {
            return "deltaY"in l ? l.deltaY : "wheelDeltaY"in l ? -l.wheelDeltaY : "wheelDelta"in l ? -l.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , r1 = Vl(g1)
      , S1 = x({}, Ma, {
        newState: 0,
        oldState: 0
    })
      , b1 = Vl(S1)
      , z1 = [9, 13, 27, 32]
      , oc = qt && "CompositionEvent"in window
      , Yu = null;
    qt && "documentMode"in document && (Yu = document.documentMode);
    var T1 = qt && "TextEvent"in window && !Yu
      , Vi = qt && (!oc || Yu && 8 < Yu && 11 >= Yu)
      , Li = " "
      , Ki = !1;
    function Ji(l, t) {
        switch (l) {
        case "keyup":
            return z1.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function wi(l) {
        return l = l.detail,
        typeof l == "object" && "data"in l ? l.data : null
    }
    var Ia = !1;
    function E1(l, t) {
        switch (l) {
        case "compositionend":
            return wi(t);
        case "keypress":
            return t.which !== 32 ? null : (Ki = !0,
            Li);
        case "textInput":
            return l = t.data,
            l === Li && Ki ? null : l;
        default:
            return null
        }
    }
    function A1(l, t) {
        if (Ia)
            return l === "compositionend" || !oc && Ji(l, t) ? (l = Bi(),
            He = cc = Pt = null,
            Ia = !1,
            l) : null;
        switch (l) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length)
                    return t.char;
                if (t.which)
                    return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Vi && t.locale !== "ko" ? null : t.data;
        default:
            return null
        }
    }
    var _1 = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function Wi(l) {
        var t = l && l.nodeName && l.nodeName.toLowerCase();
        return t === "input" ? !!_1[l.type] : t === "textarea"
    }
    function ki(l, t, a, u) {
        $a ? Fa ? Fa.push(u) : Fa = [u] : $a = u,
        t = Mn(t, "onChange"),
        0 < t.length && (a = new Ce("onChange","change",null,a,u),
        l.push({
            event: a,
            listeners: t
        }))
    }
    var Bu = null
      , Gu = null;
    function p1(l) {
        xy(l, 0)
    }
    function Ye(l) {
        var t = Hu(l);
        if (Ni(t))
            return l
    }
    function $i(l, t) {
        if (l === "change")
            return t
    }
    var Fi = !1;
    if (qt) {
        var mc;
        if (qt) {
            var dc = "oninput"in document;
            if (!dc) {
                var Ii = document.createElement("div");
                Ii.setAttribute("oninput", "return;"),
                dc = typeof Ii.oninput == "function"
            }
            mc = dc
        } else
            mc = !1;
        Fi = mc && (!document.documentMode || 9 < document.documentMode)
    }
    function Pi() {
        Bu && (Bu.detachEvent("onpropertychange", l0),
        Gu = Bu = null)
    }
    function l0(l) {
        if (l.propertyName === "value" && Ye(Gu)) {
            var t = [];
            ki(t, Gu, l, uc(l)),
            Yi(p1, t)
        }
    }
    function M1(l, t, a) {
        l === "focusin" ? (Pi(),
        Bu = t,
        Gu = a,
        Bu.attachEvent("onpropertychange", l0)) : l === "focusout" && Pi()
    }
    function O1(l) {
        if (l === "selectionchange" || l === "keyup" || l === "keydown")
            return Ye(Gu)
    }
    function D1(l, t) {
        if (l === "click")
            return Ye(t)
    }
    function U1(l, t) {
        if (l === "input" || l === "change")
            return Ye(t)
    }
    function N1(l, t) {
        return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t
    }
    var Pl = typeof Object.is == "function" ? Object.is : N1;
    function Xu(l, t) {
        if (Pl(l, t))
            return !0;
        if (typeof l != "object" || l === null || typeof t != "object" || t === null)
            return !1;
        var a = Object.keys(l)
          , u = Object.keys(t);
        if (a.length !== u.length)
            return !1;
        for (u = 0; u < a.length; u++) {
            var e = a[u];
            if (!Ln.call(t, e) || !Pl(l[e], t[e]))
                return !1
        }
        return !0
    }
    function t0(l) {
        for (; l && l.firstChild; )
            l = l.firstChild;
        return l
    }
    function a0(l, t) {
        var a = t0(l);
        l = 0;
        for (var u; a; ) {
            if (a.nodeType === 3) {
                if (u = l + a.textContent.length,
                l <= t && u >= t)
                    return {
                        node: a,
                        offset: t - l
                    };
                l = u
            }
            l: {
                for (; a; ) {
                    if (a.nextSibling) {
                        a = a.nextSibling;
                        break l
                    }
                    a = a.parentNode
                }
                a = void 0
            }
            a = t0(a)
        }
    }
    function u0(l, t) {
        return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? u0(l, t.parentNode) : "contains"in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1
    }
    function e0(l) {
        l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
        for (var t = Ne(l.document); t instanceof l.HTMLIFrameElement; ) {
            try {
                var a = typeof t.contentWindow.location.href == "string"
            } catch {
                a = !1
            }
            if (a)
                l = t.contentWindow;
            else
                break;
            t = Ne(l.document)
        }
        return t
    }
    function vc(l) {
        var t = l && l.nodeName && l.nodeName.toLowerCase();
        return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true")
    }
    var x1 = qt && "documentMode"in document && 11 >= document.documentMode
      , Pa = null
      , hc = null
      , Qu = null
      , gc = !1;
    function n0(l, t, a) {
        var u = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
        gc || Pa == null || Pa !== Ne(u) || (u = Pa,
        "selectionStart"in u && vc(u) ? u = {
            start: u.selectionStart,
            end: u.selectionEnd
        } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(),
        u = {
            anchorNode: u.anchorNode,
            anchorOffset: u.anchorOffset,
            focusNode: u.focusNode,
            focusOffset: u.focusOffset
        }),
        Qu && Xu(Qu, u) || (Qu = u,
        u = Mn(hc, "onSelect"),
        0 < u.length && (t = new Ce("onSelect","select",null,t,a),
        l.push({
            event: t,
            listeners: u
        }),
        t.target = Pa)))
    }
    function Oa(l, t) {
        var a = {};
        return a[l.toLowerCase()] = t.toLowerCase(),
        a["Webkit" + l] = "webkit" + t,
        a["Moz" + l] = "moz" + t,
        a
    }
    var lu = {
        animationend: Oa("Animation", "AnimationEnd"),
        animationiteration: Oa("Animation", "AnimationIteration"),
        animationstart: Oa("Animation", "AnimationStart"),
        transitionrun: Oa("Transition", "TransitionRun"),
        transitionstart: Oa("Transition", "TransitionStart"),
        transitioncancel: Oa("Transition", "TransitionCancel"),
        transitionend: Oa("Transition", "TransitionEnd")
    }
      , rc = {}
      , c0 = {};
    qt && (c0 = document.createElement("div").style,
    "AnimationEvent"in window || (delete lu.animationend.animation,
    delete lu.animationiteration.animation,
    delete lu.animationstart.animation),
    "TransitionEvent"in window || delete lu.transitionend.transition);
    function Da(l) {
        if (rc[l])
            return rc[l];
        if (!lu[l])
            return l;
        var t = lu[l], a;
        for (a in t)
            if (t.hasOwnProperty(a) && a in c0)
                return rc[l] = t[a];
        return l
    }
    var f0 = Da("animationend")
      , i0 = Da("animationiteration")
      , s0 = Da("animationstart")
      , H1 = Da("transitionrun")
      , R1 = Da("transitionstart")
      , q1 = Da("transitioncancel")
      , y0 = Da("transitionend")
      , o0 = new Map
      , Sc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Sc.push("scrollEnd");
    function zt(l, t) {
        o0.set(l, t),
        pa(t, [l])
    }
    var Be = typeof reportError == "function" ? reportError : function(l) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var t = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
                error: l
            });
            if (!window.dispatchEvent(t))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", l);
            return
        }
        console.error(l)
    }
      , st = []
      , tu = 0
      , bc = 0;
    function Ge() {
        for (var l = tu, t = bc = tu = 0; t < l; ) {
            var a = st[t];
            st[t++] = null;
            var u = st[t];
            st[t++] = null;
            var e = st[t];
            st[t++] = null;
            var n = st[t];
            if (st[t++] = null,
            u !== null && e !== null) {
                var c = u.pending;
                c === null ? e.next = e : (e.next = c.next,
                c.next = e),
                u.pending = e
            }
            n !== 0 && m0(a, e, n)
        }
    }
    function Xe(l, t, a, u) {
        st[tu++] = l,
        st[tu++] = t,
        st[tu++] = a,
        st[tu++] = u,
        bc |= u,
        l.lanes |= u,
        l = l.alternate,
        l !== null && (l.lanes |= u)
    }
    function zc(l, t, a, u) {
        return Xe(l, t, a, u),
        Qe(l)
    }
    function Ua(l, t) {
        return Xe(l, null, null, t),
        Qe(l)
    }
    function m0(l, t, a) {
        l.lanes |= a;
        var u = l.alternate;
        u !== null && (u.lanes |= a);
        for (var e = !1, n = l.return; n !== null; )
            n.childLanes |= a,
            u = n.alternate,
            u !== null && (u.childLanes |= a),
            n.tag === 22 && (l = n.stateNode,
            l === null || l._visibility & 1 || (e = !0)),
            l = n,
            n = n.return;
        return l.tag === 3 ? (n = l.stateNode,
        e && t !== null && (e = 31 - Il(a),
        l = n.hiddenUpdates,
        u = l[e],
        u === null ? l[e] = [t] : u.push(t),
        t.lane = a | 536870912),
        n) : null
    }
    function Qe(l) {
        if (50 < se)
            throw se = 0,
            Nf = null,
            Error(v(185));
        for (var t = l.return; t !== null; )
            l = t,
            t = l.return;
        return l.tag === 3 ? l.stateNode : null
    }
    var au = {};
    function C1(l, t, a, u) {
        this.tag = l,
        this.key = a,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = u,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function lt(l, t, a, u) {
        return new C1(l,t,a,u)
    }
    function Tc(l) {
        return l = l.prototype,
        !(!l || !l.isReactComponent)
    }
    function Ct(l, t) {
        var a = l.alternate;
        return a === null ? (a = lt(l.tag, t, l.key, l.mode),
        a.elementType = l.elementType,
        a.type = l.type,
        a.stateNode = l.stateNode,
        a.alternate = l,
        l.alternate = a) : (a.pendingProps = t,
        a.type = l.type,
        a.flags = 0,
        a.subtreeFlags = 0,
        a.deletions = null),
        a.flags = l.flags & 65011712,
        a.childLanes = l.childLanes,
        a.lanes = l.lanes,
        a.child = l.child,
        a.memoizedProps = l.memoizedProps,
        a.memoizedState = l.memoizedState,
        a.updateQueue = l.updateQueue,
        t = l.dependencies,
        a.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        },
        a.sibling = l.sibling,
        a.index = l.index,
        a.ref = l.ref,
        a.refCleanup = l.refCleanup,
        a
    }
    function d0(l, t) {
        l.flags &= 65011714;
        var a = l.alternate;
        return a === null ? (l.childLanes = 0,
        l.lanes = t,
        l.child = null,
        l.subtreeFlags = 0,
        l.memoizedProps = null,
        l.memoizedState = null,
        l.updateQueue = null,
        l.dependencies = null,
        l.stateNode = null) : (l.childLanes = a.childLanes,
        l.lanes = a.lanes,
        l.child = a.child,
        l.subtreeFlags = 0,
        l.deletions = null,
        l.memoizedProps = a.memoizedProps,
        l.memoizedState = a.memoizedState,
        l.updateQueue = a.updateQueue,
        l.type = a.type,
        t = a.dependencies,
        l.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }),
        l
    }
    function Ze(l, t, a, u, e, n) {
        var c = 0;
        if (u = l,
        typeof l == "function")
            Tc(l) && (c = 1);
        else if (typeof l == "string")
            c = Xm(l, a, O.current) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
        else
            l: switch (l) {
            case _t:
                return l = lt(31, a, t, e),
                l.elementType = _t,
                l.lanes = n,
                l;
            case jl:
                return Na(a.children, e, n, t);
            case Nt:
                c = 8,
                e |= 24;
                break;
            case kl:
                return l = lt(12, a, t, e | 2),
                l.elementType = kl,
                l.lanes = n,
                l;
            case At:
                return l = lt(13, a, t, e),
                l.elementType = At,
                l.lanes = n,
                l;
            case Gl:
                return l = lt(19, a, t, e),
                l.elementType = Gl,
                l.lanes = n,
                l;
            default:
                if (typeof l == "object" && l !== null)
                    switch (l.$$typeof) {
                    case ql:
                        c = 10;
                        break l;
                    case $t:
                        c = 9;
                        break l;
                    case ct:
                        c = 11;
                        break l;
                    case k:
                        c = 14;
                        break l;
                    case Xl:
                        c = 16,
                        u = null;
                        break l
                    }
                c = 29,
                a = Error(v(130, l === null ? "null" : typeof l, "")),
                u = null
            }
        return t = lt(c, a, t, e),
        t.elementType = l,
        t.type = u,
        t.lanes = n,
        t
    }
    function Na(l, t, a, u) {
        return l = lt(7, l, u, t),
        l.lanes = a,
        l
    }
    function Ec(l, t, a) {
        return l = lt(6, l, null, t),
        l.lanes = a,
        l
    }
    function v0(l) {
        var t = lt(18, null, null, 0);
        return t.stateNode = l,
        t
    }
    function Ac(l, t, a) {
        return t = lt(4, l.children !== null ? l.children : [], l.key, t),
        t.lanes = a,
        t.stateNode = {
            containerInfo: l.containerInfo,
            pendingChildren: null,
            implementation: l.implementation
        },
        t
    }
    var h0 = new WeakMap;
    function yt(l, t) {
        if (typeof l == "object" && l !== null) {
            var a = h0.get(l);
            return a !== void 0 ? a : (t = {
                value: l,
                source: t,
                stack: vi(t)
            },
            h0.set(l, t),
            t)
        }
        return {
            value: l,
            source: t,
            stack: vi(t)
        }
    }
    var uu = []
      , eu = 0
      , Ve = null
      , Zu = 0
      , ot = []
      , mt = 0
      , la = null
      , Mt = 1
      , Ot = "";
    function jt(l, t) {
        uu[eu++] = Zu,
        uu[eu++] = Ve,
        Ve = l,
        Zu = t
    }
    function g0(l, t, a) {
        ot[mt++] = Mt,
        ot[mt++] = Ot,
        ot[mt++] = la,
        la = l;
        var u = Mt;
        l = Ot;
        var e = 32 - Il(u) - 1;
        u &= ~(1 << e),
        a += 1;
        var n = 32 - Il(t) + e;
        if (30 < n) {
            var c = e - e % 5;
            n = (u & (1 << c) - 1).toString(32),
            u >>= c,
            e -= c,
            Mt = 1 << 32 - Il(t) + e | a << e | u,
            Ot = n + l
        } else
            Mt = 1 << n | a << e | u,
            Ot = l
    }
    function _c(l) {
        l.return !== null && (jt(l, 1),
        g0(l, 1, 0))
    }
    function pc(l) {
        for (; l === Ve; )
            Ve = uu[--eu],
            uu[eu] = null,
            Zu = uu[--eu],
            uu[eu] = null;
        for (; l === la; )
            la = ot[--mt],
            ot[mt] = null,
            Ot = ot[--mt],
            ot[mt] = null,
            Mt = ot[--mt],
            ot[mt] = null
    }
    function r0(l, t) {
        ot[mt++] = Mt,
        ot[mt++] = Ot,
        ot[mt++] = la,
        Mt = t.id,
        Ot = t.overflow,
        la = l
    }
    var Nl = null
      , ol = null
      , $ = !1
      , ta = null
      , dt = !1
      , Mc = Error(v(519));
    function aa(l) {
        var t = Error(v(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
        throw Vu(yt(t, l)),
        Mc
    }
    function S0(l) {
        var t = l.stateNode
          , a = l.type
          , u = l.memoizedProps;
        switch (t[Ul] = l,
        t[Zl] = u,
        a) {
        case "dialog":
            J("cancel", t),
            J("close", t);
            break;
        case "iframe":
        case "object":
        case "embed":
            J("load", t);
            break;
        case "video":
        case "audio":
            for (a = 0; a < oe.length; a++)
                J(oe[a], t);
            break;
        case "source":
            J("error", t);
            break;
        case "img":
        case "image":
        case "link":
            J("error", t),
            J("load", t);
            break;
        case "details":
            J("toggle", t);
            break;
        case "input":
            J("invalid", t),
            xi(t, u.value, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name, !0);
            break;
        case "select":
            J("invalid", t);
            break;
        case "textarea":
            J("invalid", t),
            Ri(t, u.value, u.defaultValue, u.children)
        }
        a = u.children,
        typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || u.suppressHydrationWarning === !0 || Cy(t.textContent, a) ? (u.popover != null && (J("beforetoggle", t),
        J("toggle", t)),
        u.onScroll != null && J("scroll", t),
        u.onScrollEnd != null && J("scrollend", t),
        u.onClick != null && (t.onclick = Rt),
        t = !0) : t = !1,
        t || aa(l, !0)
    }
    function b0(l) {
        for (Nl = l.return; Nl; )
            switch (Nl.tag) {
            case 5:
            case 31:
            case 13:
                dt = !1;
                return;
            case 27:
            case 3:
                dt = !0;
                return;
            default:
                Nl = Nl.return
            }
    }
    function nu(l) {
        if (l !== Nl)
            return !1;
        if (!$)
            return b0(l),
            $ = !0,
            !1;
        var t = l.tag, a;
        if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = l.type,
        a = !(a !== "form" && a !== "button") || Kf(l.type, l.memoizedProps)),
        a = !a),
        a && ol && aa(l),
        b0(l),
        t === 13) {
            if (l = l.memoizedState,
            l = l !== null ? l.dehydrated : null,
            !l)
                throw Error(v(317));
            ol = Ly(l)
        } else if (t === 31) {
            if (l = l.memoizedState,
            l = l !== null ? l.dehydrated : null,
            !l)
                throw Error(v(317));
            ol = Ly(l)
        } else
            t === 27 ? (t = ol,
            ga(l.type) ? (l = $f,
            $f = null,
            ol = l) : ol = t) : ol = Nl ? ht(l.stateNode.nextSibling) : null;
        return !0
    }
    function xa() {
        ol = Nl = null,
        $ = !1
    }
    function Oc() {
        var l = ta;
        return l !== null && (wl === null ? wl = l : wl.push.apply(wl, l),
        ta = null),
        l
    }
    function Vu(l) {
        ta === null ? ta = [l] : ta.push(l)
    }
    var Dc = y(null)
      , Ha = null
      , Yt = null;
    function ua(l, t, a) {
        p(Dc, t._currentValue),
        t._currentValue = a
    }
    function Bt(l) {
        l._currentValue = Dc.current,
        T(Dc)
    }
    function Uc(l, t, a) {
        for (; l !== null; ) {
            var u = l.alternate;
            if ((l.childLanes & t) !== t ? (l.childLanes |= t,
            u !== null && (u.childLanes |= t)) : u !== null && (u.childLanes & t) !== t && (u.childLanes |= t),
            l === a)
                break;
            l = l.return
        }
    }
    function Nc(l, t, a, u) {
        var e = l.child;
        for (e !== null && (e.return = l); e !== null; ) {
            var n = e.dependencies;
            if (n !== null) {
                var c = e.child;
                n = n.firstContext;
                l: for (; n !== null; ) {
                    var f = n;
                    n = e;
                    for (var i = 0; i < t.length; i++)
                        if (f.context === t[i]) {
                            n.lanes |= a,
                            f = n.alternate,
                            f !== null && (f.lanes |= a),
                            Uc(n.return, a, l),
                            u || (c = null);
                            break l
                        }
                    n = f.next
                }
            } else if (e.tag === 18) {
                if (c = e.return,
                c === null)
                    throw Error(v(341));
                c.lanes |= a,
                n = c.alternate,
                n !== null && (n.lanes |= a),
                Uc(c, a, l),
                c = null
            } else
                c = e.child;
            if (c !== null)
                c.return = e;
            else
                for (c = e; c !== null; ) {
                    if (c === l) {
                        c = null;
                        break
                    }
                    if (e = c.sibling,
                    e !== null) {
                        e.return = c.return,
                        c = e;
                        break
                    }
                    c = c.return
                }
            e = c
        }
    }
    function cu(l, t, a, u) {
        l = null;
        for (var e = t, n = !1; e !== null; ) {
            if (!n) {
                if ((e.flags & 524288) !== 0)
                    n = !0;
                else if ((e.flags & 262144) !== 0)
                    break
            }
            if (e.tag === 10) {
                var c = e.alternate;
                if (c === null)
                    throw Error(v(387));
                if (c = c.memoizedProps,
                c !== null) {
                    var f = e.type;
                    Pl(e.pendingProps.value, c.value) || (l !== null ? l.push(f) : l = [f])
                }
            } else if (e === ll.current) {
                if (c = e.alternate,
                c === null)
                    throw Error(v(387));
                c.memoizedState.memoizedState !== e.memoizedState.memoizedState && (l !== null ? l.push(ge) : l = [ge])
            }
            e = e.return
        }
        l !== null && Nc(t, l, a, u),
        t.flags |= 262144
    }
    function Le(l) {
        for (l = l.firstContext; l !== null; ) {
            if (!Pl(l.context._currentValue, l.memoizedValue))
                return !0;
            l = l.next
        }
        return !1
    }
    function Ra(l) {
        Ha = l,
        Yt = null,
        l = l.dependencies,
        l !== null && (l.firstContext = null)
    }
    function xl(l) {
        return z0(Ha, l)
    }
    function Ke(l, t) {
        return Ha === null && Ra(l),
        z0(l, t)
    }
    function z0(l, t) {
        var a = t._currentValue;
        if (t = {
            context: t,
            memoizedValue: a,
            next: null
        },
        Yt === null) {
            if (l === null)
                throw Error(v(308));
            Yt = t,
            l.dependencies = {
                lanes: 0,
                firstContext: t
            },
            l.flags |= 524288
        } else
            Yt = Yt.next = t;
        return a
    }
    var j1 = typeof AbortController < "u" ? AbortController : function() {
        var l = []
          , t = this.signal = {
            aborted: !1,
            addEventListener: function(a, u) {
                l.push(u)
            }
        };
        this.abort = function() {
            t.aborted = !0,
            l.forEach(function(a) {
                return a()
            })
        }
    }
      , Y1 = A.unstable_scheduleCallback
      , B1 = A.unstable_NormalPriority
      , Tl = {
        $$typeof: ql,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function xc() {
        return {
            controller: new j1,
            data: new Map,
            refCount: 0
        }
    }
    function Lu(l) {
        l.refCount--,
        l.refCount === 0 && Y1(B1, function() {
            l.controller.abort()
        })
    }
    var Ku = null
      , Hc = 0
      , fu = 0
      , iu = null;
    function G1(l, t) {
        if (Ku === null) {
            var a = Ku = [];
            Hc = 0,
            fu = jf(),
            iu = {
                status: "pending",
                value: void 0,
                then: function(u) {
                    a.push(u)
                }
            }
        }
        return Hc++,
        t.then(T0, T0),
        t
    }
    function T0() {
        if (--Hc === 0 && Ku !== null) {
            iu !== null && (iu.status = "fulfilled");
            var l = Ku;
            Ku = null,
            fu = 0,
            iu = null;
            for (var t = 0; t < l.length; t++)
                (0,
                l[t])()
        }
    }
    function X1(l, t) {
        var a = []
          , u = {
            status: "pending",
            value: null,
            reason: null,
            then: function(e) {
                a.push(e)
            }
        };
        return l.then(function() {
            u.status = "fulfilled",
            u.value = t;
            for (var e = 0; e < a.length; e++)
                (0,
                a[e])(t)
        }, function(e) {
            for (u.status = "rejected",
            u.reason = e,
            e = 0; e < a.length; e++)
                (0,
                a[e])(void 0)
        }),
        u
    }
    var E0 = S.S;
    S.S = function(l, t) {
        ny = $l(),
        typeof t == "object" && t !== null && typeof t.then == "function" && G1(l, t),
        E0 !== null && E0(l, t)
    }
    ;
    var qa = y(null);
    function Rc() {
        var l = qa.current;
        return l !== null ? l : yl.pooledCache
    }
    function Je(l, t) {
        t === null ? p(qa, qa.current) : p(qa, t.pool)
    }
    function A0() {
        var l = Rc();
        return l === null ? null : {
            parent: Tl._currentValue,
            pool: l
        }
    }
    var su = Error(v(460))
      , qc = Error(v(474))
      , we = Error(v(542))
      , We = {
        then: function() {}
    };
    function _0(l) {
        return l = l.status,
        l === "fulfilled" || l === "rejected"
    }
    function p0(l, t, a) {
        switch (a = l[a],
        a === void 0 ? l.push(t) : a !== t && (t.then(Rt, Rt),
        t = a),
        t.status) {
        case "fulfilled":
            return t.value;
        case "rejected":
            throw l = t.reason,
            O0(l),
            l;
        default:
            if (typeof t.status == "string")
                t.then(Rt, Rt);
            else {
                if (l = yl,
                l !== null && 100 < l.shellSuspendCounter)
                    throw Error(v(482));
                l = t,
                l.status = "pending",
                l.then(function(u) {
                    if (t.status === "pending") {
                        var e = t;
                        e.status = "fulfilled",
                        e.value = u
                    }
                }, function(u) {
                    if (t.status === "pending") {
                        var e = t;
                        e.status = "rejected",
                        e.reason = u
                    }
                })
            }
            switch (t.status) {
            case "fulfilled":
                return t.value;
            case "rejected":
                throw l = t.reason,
                O0(l),
                l
            }
            throw ja = t,
            su
        }
    }
    function Ca(l) {
        try {
            var t = l._init;
            return t(l._payload)
        } catch (a) {
            throw a !== null && typeof a == "object" && typeof a.then == "function" ? (ja = a,
            su) : a
        }
    }
    var ja = null;
    function M0() {
        if (ja === null)
            throw Error(v(459));
        var l = ja;
        return ja = null,
        l
    }
    function O0(l) {
        if (l === su || l === we)
            throw Error(v(483))
    }
    var yu = null
      , Ju = 0;
    function ke(l) {
        var t = Ju;
        return Ju += 1,
        yu === null && (yu = []),
        p0(yu, l, t)
    }
    function wu(l, t) {
        t = t.props.ref,
        l.ref = t !== void 0 ? t : null
    }
    function $e(l, t) {
        throw t.$$typeof === tl ? Error(v(525)) : (l = Object.prototype.toString.call(t),
        Error(v(31, l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l)))
    }
    function D0(l) {
        function t(o, s) {
            if (l) {
                var m = o.deletions;
                m === null ? (o.deletions = [s],
                o.flags |= 16) : m.push(s)
            }
        }
        function a(o, s) {
            if (!l)
                return null;
            for (; s !== null; )
                t(o, s),
                s = s.sibling;
            return null
        }
        function u(o) {
            for (var s = new Map; o !== null; )
                o.key !== null ? s.set(o.key, o) : s.set(o.index, o),
                o = o.sibling;
            return s
        }
        function e(o, s) {
            return o = Ct(o, s),
            o.index = 0,
            o.sibling = null,
            o
        }
        function n(o, s, m) {
            return o.index = m,
            l ? (m = o.alternate,
            m !== null ? (m = m.index,
            m < s ? (o.flags |= 67108866,
            s) : m) : (o.flags |= 67108866,
            s)) : (o.flags |= 1048576,
            s)
        }
        function c(o) {
            return l && o.alternate === null && (o.flags |= 67108866),
            o
        }
        function f(o, s, m, b) {
            return s === null || s.tag !== 6 ? (s = Ec(m, o.mode, b),
            s.return = o,
            s) : (s = e(s, m),
            s.return = o,
            s)
        }
        function i(o, s, m, b) {
            var N = m.type;
            return N === jl ? r(o, s, m.props.children, b, m.key) : s !== null && (s.elementType === N || typeof N == "object" && N !== null && N.$$typeof === Xl && Ca(N) === s.type) ? (s = e(s, m.props),
            wu(s, m),
            s.return = o,
            s) : (s = Ze(m.type, m.key, m.props, null, o.mode, b),
            wu(s, m),
            s.return = o,
            s)
        }
        function d(o, s, m, b) {
            return s === null || s.tag !== 4 || s.stateNode.containerInfo !== m.containerInfo || s.stateNode.implementation !== m.implementation ? (s = Ac(m, o.mode, b),
            s.return = o,
            s) : (s = e(s, m.children || []),
            s.return = o,
            s)
        }
        function r(o, s, m, b, N) {
            return s === null || s.tag !== 7 ? (s = Na(m, o.mode, b, N),
            s.return = o,
            s) : (s = e(s, m),
            s.return = o,
            s)
        }
        function z(o, s, m) {
            if (typeof s == "string" && s !== "" || typeof s == "number" || typeof s == "bigint")
                return s = Ec("" + s, o.mode, m),
                s.return = o,
                s;
            if (typeof s == "object" && s !== null) {
                switch (s.$$typeof) {
                case Dl:
                    return m = Ze(s.type, s.key, s.props, null, o.mode, m),
                    wu(m, s),
                    m.return = o,
                    m;
                case rl:
                    return s = Ac(s, o.mode, m),
                    s.return = o,
                    s;
                case Xl:
                    return s = Ca(s),
                    z(o, s, m)
                }
                if (bt(s) || Ql(s))
                    return s = Na(s, o.mode, m, null),
                    s.return = o,
                    s;
                if (typeof s.then == "function")
                    return z(o, ke(s), m);
                if (s.$$typeof === ql)
                    return z(o, Ke(o, s), m);
                $e(o, s)
            }
            return null
        }
        function h(o, s, m, b) {
            var N = s !== null ? s.key : null;
            if (typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint")
                return N !== null ? null : f(o, s, "" + m, b);
            if (typeof m == "object" && m !== null) {
                switch (m.$$typeof) {
                case Dl:
                    return m.key === N ? i(o, s, m, b) : null;
                case rl:
                    return m.key === N ? d(o, s, m, b) : null;
                case Xl:
                    return m = Ca(m),
                    h(o, s, m, b)
                }
                if (bt(m) || Ql(m))
                    return N !== null ? null : r(o, s, m, b, null);
                if (typeof m.then == "function")
                    return h(o, s, ke(m), b);
                if (m.$$typeof === ql)
                    return h(o, s, Ke(o, m), b);
                $e(o, m)
            }
            return null
        }
        function g(o, s, m, b, N) {
            if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint")
                return o = o.get(m) || null,
                f(s, o, "" + b, N);
            if (typeof b == "object" && b !== null) {
                switch (b.$$typeof) {
                case Dl:
                    return o = o.get(b.key === null ? m : b.key) || null,
                    i(s, o, b, N);
                case rl:
                    return o = o.get(b.key === null ? m : b.key) || null,
                    d(s, o, b, N);
                case Xl:
                    return b = Ca(b),
                    g(o, s, m, b, N)
                }
                if (bt(b) || Ql(b))
                    return o = o.get(m) || null,
                    r(s, o, b, N, null);
                if (typeof b.then == "function")
                    return g(o, s, m, ke(b), N);
                if (b.$$typeof === ql)
                    return g(o, s, m, Ke(s, b), N);
                $e(s, b)
            }
            return null
        }
        function M(o, s, m, b) {
            for (var N = null, F = null, D = s, G = s = 0, W = null; D !== null && G < m.length; G++) {
                D.index > G ? (W = D,
                D = null) : W = D.sibling;
                var I = h(o, D, m[G], b);
                if (I === null) {
                    D === null && (D = W);
                    break
                }
                l && D && I.alternate === null && t(o, D),
                s = n(I, s, G),
                F === null ? N = I : F.sibling = I,
                F = I,
                D = W
            }
            if (G === m.length)
                return a(o, D),
                $ && jt(o, G),
                N;
            if (D === null) {
                for (; G < m.length; G++)
                    D = z(o, m[G], b),
                    D !== null && (s = n(D, s, G),
                    F === null ? N = D : F.sibling = D,
                    F = D);
                return $ && jt(o, G),
                N
            }
            for (D = u(D); G < m.length; G++)
                W = g(D, o, G, m[G], b),
                W !== null && (l && W.alternate !== null && D.delete(W.key === null ? G : W.key),
                s = n(W, s, G),
                F === null ? N = W : F.sibling = W,
                F = W);
            return l && D.forEach(function(Ta) {
                return t(o, Ta)
            }),
            $ && jt(o, G),
            N
        }
        function H(o, s, m, b) {
            if (m == null)
                throw Error(v(151));
            for (var N = null, F = null, D = s, G = s = 0, W = null, I = m.next(); D !== null && !I.done; G++,
            I = m.next()) {
                D.index > G ? (W = D,
                D = null) : W = D.sibling;
                var Ta = h(o, D, I.value, b);
                if (Ta === null) {
                    D === null && (D = W);
                    break
                }
                l && D && Ta.alternate === null && t(o, D),
                s = n(Ta, s, G),
                F === null ? N = Ta : F.sibling = Ta,
                F = Ta,
                D = W
            }
            if (I.done)
                return a(o, D),
                $ && jt(o, G),
                N;
            if (D === null) {
                for (; !I.done; G++,
                I = m.next())
                    I = z(o, I.value, b),
                    I !== null && (s = n(I, s, G),
                    F === null ? N = I : F.sibling = I,
                    F = I);
                return $ && jt(o, G),
                N
            }
            for (D = u(D); !I.done; G++,
            I = m.next())
                I = g(D, o, G, I.value, b),
                I !== null && (l && I.alternate !== null && D.delete(I.key === null ? G : I.key),
                s = n(I, s, G),
                F === null ? N = I : F.sibling = I,
                F = I);
            return l && D.forEach(function(Fm) {
                return t(o, Fm)
            }),
            $ && jt(o, G),
            N
        }
        function fl(o, s, m, b) {
            if (typeof m == "object" && m !== null && m.type === jl && m.key === null && (m = m.props.children),
            typeof m == "object" && m !== null) {
                switch (m.$$typeof) {
                case Dl:
                    l: {
                        for (var N = m.key; s !== null; ) {
                            if (s.key === N) {
                                if (N = m.type,
                                N === jl) {
                                    if (s.tag === 7) {
                                        a(o, s.sibling),
                                        b = e(s, m.props.children),
                                        b.return = o,
                                        o = b;
                                        break l
                                    }
                                } else if (s.elementType === N || typeof N == "object" && N !== null && N.$$typeof === Xl && Ca(N) === s.type) {
                                    a(o, s.sibling),
                                    b = e(s, m.props),
                                    wu(b, m),
                                    b.return = o,
                                    o = b;
                                    break l
                                }
                                a(o, s);
                                break
                            } else
                                t(o, s);
                            s = s.sibling
                        }
                        m.type === jl ? (b = Na(m.props.children, o.mode, b, m.key),
                        b.return = o,
                        o = b) : (b = Ze(m.type, m.key, m.props, null, o.mode, b),
                        wu(b, m),
                        b.return = o,
                        o = b)
                    }
                    return c(o);
                case rl:
                    l: {
                        for (N = m.key; s !== null; ) {
                            if (s.key === N)
                                if (s.tag === 4 && s.stateNode.containerInfo === m.containerInfo && s.stateNode.implementation === m.implementation) {
                                    a(o, s.sibling),
                                    b = e(s, m.children || []),
                                    b.return = o,
                                    o = b;
                                    break l
                                } else {
                                    a(o, s);
                                    break
                                }
                            else
                                t(o, s);
                            s = s.sibling
                        }
                        b = Ac(m, o.mode, b),
                        b.return = o,
                        o = b
                    }
                    return c(o);
                case Xl:
                    return m = Ca(m),
                    fl(o, s, m, b)
                }
                if (bt(m))
                    return M(o, s, m, b);
                if (Ql(m)) {
                    if (N = Ql(m),
                    typeof N != "function")
                        throw Error(v(150));
                    return m = N.call(m),
                    H(o, s, m, b)
                }
                if (typeof m.then == "function")
                    return fl(o, s, ke(m), b);
                if (m.$$typeof === ql)
                    return fl(o, s, Ke(o, m), b);
                $e(o, m)
            }
            return typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint" ? (m = "" + m,
            s !== null && s.tag === 6 ? (a(o, s.sibling),
            b = e(s, m),
            b.return = o,
            o = b) : (a(o, s),
            b = Ec(m, o.mode, b),
            b.return = o,
            o = b),
            c(o)) : a(o, s)
        }
        return function(o, s, m, b) {
            try {
                Ju = 0;
                var N = fl(o, s, m, b);
                return yu = null,
                N
            } catch (D) {
                if (D === su || D === we)
                    throw D;
                var F = lt(29, D, null, o.mode);
                return F.lanes = b,
                F.return = o,
                F
            } finally {}
        }
    }
    var Ya = D0(!0)
      , U0 = D0(!1)
      , ea = !1;
    function Cc(l) {
        l.updateQueue = {
            baseState: l.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function jc(l, t) {
        l = l.updateQueue,
        t.updateQueue === l && (t.updateQueue = {
            baseState: l.baseState,
            firstBaseUpdate: l.firstBaseUpdate,
            lastBaseUpdate: l.lastBaseUpdate,
            shared: l.shared,
            callbacks: null
        })
    }
    function na(l) {
        return {
            lane: l,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function ca(l, t, a) {
        var u = l.updateQueue;
        if (u === null)
            return null;
        if (u = u.shared,
        (P & 2) !== 0) {
            var e = u.pending;
            return e === null ? t.next = t : (t.next = e.next,
            e.next = t),
            u.pending = t,
            t = Qe(l),
            m0(l, null, a),
            t
        }
        return Xe(l, u, t, a),
        Qe(l)
    }
    function Wu(l, t, a) {
        if (t = t.updateQueue,
        t !== null && (t = t.shared,
        (a & 4194048) !== 0)) {
            var u = t.lanes;
            u &= l.pendingLanes,
            a |= u,
            t.lanes = a,
            zi(l, a)
        }
    }
    function Yc(l, t) {
        var a = l.updateQueue
          , u = l.alternate;
        if (u !== null && (u = u.updateQueue,
        a === u)) {
            var e = null
              , n = null;
            if (a = a.firstBaseUpdate,
            a !== null) {
                do {
                    var c = {
                        lane: a.lane,
                        tag: a.tag,
                        payload: a.payload,
                        callback: null,
                        next: null
                    };
                    n === null ? e = n = c : n = n.next = c,
                    a = a.next
                } while (a !== null);
                n === null ? e = n = t : n = n.next = t
            } else
                e = n = t;
            a = {
                baseState: u.baseState,
                firstBaseUpdate: e,
                lastBaseUpdate: n,
                shared: u.shared,
                callbacks: u.callbacks
            },
            l.updateQueue = a;
            return
        }
        l = a.lastBaseUpdate,
        l === null ? a.firstBaseUpdate = t : l.next = t,
        a.lastBaseUpdate = t
    }
    var Bc = !1;
    function ku() {
        if (Bc) {
            var l = iu;
            if (l !== null)
                throw l
        }
    }
    function $u(l, t, a, u) {
        Bc = !1;
        var e = l.updateQueue;
        ea = !1;
        var n = e.firstBaseUpdate
          , c = e.lastBaseUpdate
          , f = e.shared.pending;
        if (f !== null) {
            e.shared.pending = null;
            var i = f
              , d = i.next;
            i.next = null,
            c === null ? n = d : c.next = d,
            c = i;
            var r = l.alternate;
            r !== null && (r = r.updateQueue,
            f = r.lastBaseUpdate,
            f !== c && (f === null ? r.firstBaseUpdate = d : f.next = d,
            r.lastBaseUpdate = i))
        }
        if (n !== null) {
            var z = e.baseState;
            c = 0,
            r = d = i = null,
            f = n;
            do {
                var h = f.lane & -536870913
                  , g = h !== f.lane;
                if (g ? (w & h) === h : (u & h) === h) {
                    h !== 0 && h === fu && (Bc = !0),
                    r !== null && (r = r.next = {
                        lane: 0,
                        tag: f.tag,
                        payload: f.payload,
                        callback: null,
                        next: null
                    });
                    l: {
                        var M = l
                          , H = f;
                        h = t;
                        var fl = a;
                        switch (H.tag) {
                        case 1:
                            if (M = H.payload,
                            typeof M == "function") {
                                z = M.call(fl, z, h);
                                break l
                            }
                            z = M;
                            break l;
                        case 3:
                            M.flags = M.flags & -65537 | 128;
                        case 0:
                            if (M = H.payload,
                            h = typeof M == "function" ? M.call(fl, z, h) : M,
                            h == null)
                                break l;
                            z = x({}, z, h);
                            break l;
                        case 2:
                            ea = !0
                        }
                    }
                    h = f.callback,
                    h !== null && (l.flags |= 64,
                    g && (l.flags |= 8192),
                    g = e.callbacks,
                    g === null ? e.callbacks = [h] : g.push(h))
                } else
                    g = {
                        lane: h,
                        tag: f.tag,
                        payload: f.payload,
                        callback: f.callback,
                        next: null
                    },
                    r === null ? (d = r = g,
                    i = z) : r = r.next = g,
                    c |= h;
                if (f = f.next,
                f === null) {
                    if (f = e.shared.pending,
                    f === null)
                        break;
                    g = f,
                    f = g.next,
                    g.next = null,
                    e.lastBaseUpdate = g,
                    e.shared.pending = null
                }
            } while (!0);
            r === null && (i = z),
            e.baseState = i,
            e.firstBaseUpdate = d,
            e.lastBaseUpdate = r,
            n === null && (e.shared.lanes = 0),
            oa |= c,
            l.lanes = c,
            l.memoizedState = z
        }
    }
    function N0(l, t) {
        if (typeof l != "function")
            throw Error(v(191, l));
        l.call(t)
    }
    function x0(l, t) {
        var a = l.callbacks;
        if (a !== null)
            for (l.callbacks = null,
            l = 0; l < a.length; l++)
                N0(a[l], t)
    }
    var ou = y(null)
      , Fe = y(0);
    function H0(l, t) {
        l = wt,
        p(Fe, l),
        p(ou, t),
        wt = l | t.baseLanes
    }
    function Gc() {
        p(Fe, wt),
        p(ou, ou.current)
    }
    function Xc() {
        wt = Fe.current,
        T(ou),
        T(Fe)
    }
    var tt = y(null)
      , vt = null;
    function fa(l) {
        var t = l.alternate;
        p(bl, bl.current & 1),
        p(tt, l),
        vt === null && (t === null || ou.current !== null || t.memoizedState !== null) && (vt = l)
    }
    function Qc(l) {
        p(bl, bl.current),
        p(tt, l),
        vt === null && (vt = l)
    }
    function R0(l) {
        l.tag === 22 ? (p(bl, bl.current),
        p(tt, l),
        vt === null && (vt = l)) : ia()
    }
    function ia() {
        p(bl, bl.current),
        p(tt, tt.current)
    }
    function at(l) {
        T(tt),
        vt === l && (vt = null),
        T(bl)
    }
    var bl = y(0);
    function Ie(l) {
        for (var t = l; t !== null; ) {
            if (t.tag === 13) {
                var a = t.memoizedState;
                if (a !== null && (a = a.dehydrated,
                a === null || Wf(a) || kf(a)))
                    return t
            } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
                if ((t.flags & 128) !== 0)
                    return t
            } else if (t.child !== null) {
                t.child.return = t,
                t = t.child;
                continue
            }
            if (t === l)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === l)
                    return null;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
        return null
    }
    var Gt = 0
      , B = null
      , nl = null
      , El = null
      , Pe = !1
      , mu = !1
      , Ba = !1
      , ln = 0
      , Fu = 0
      , du = null
      , Q1 = 0;
    function vl() {
        throw Error(v(321))
    }
    function Zc(l, t) {
        if (t === null)
            return !1;
        for (var a = 0; a < t.length && a < l.length; a++)
            if (!Pl(l[a], t[a]))
                return !1;
        return !0
    }
    function Vc(l, t, a, u, e, n) {
        return Gt = n,
        B = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        S.H = l === null || l.memoizedState === null ? gs : ef,
        Ba = !1,
        n = a(u, e),
        Ba = !1,
        mu && (n = C0(t, a, u, e)),
        q0(l),
        n
    }
    function q0(l) {
        S.H = le;
        var t = nl !== null && nl.next !== null;
        if (Gt = 0,
        El = nl = B = null,
        Pe = !1,
        Fu = 0,
        du = null,
        t)
            throw Error(v(300));
        l === null || Al || (l = l.dependencies,
        l !== null && Le(l) && (Al = !0))
    }
    function C0(l, t, a, u) {
        B = l;
        var e = 0;
        do {
            if (mu && (du = null),
            Fu = 0,
            mu = !1,
            25 <= e)
                throw Error(v(301));
            if (e += 1,
            El = nl = null,
            l.updateQueue != null) {
                var n = l.updateQueue;
                n.lastEffect = null,
                n.events = null,
                n.stores = null,
                n.memoCache != null && (n.memoCache.index = 0)
            }
            S.H = rs,
            n = t(a, u)
        } while (mu);
        return n
    }
    function Z1() {
        var l = S.H
          , t = l.useState()[0];
        return t = typeof t.then == "function" ? Iu(t) : t,
        l = l.useState()[0],
        (nl !== null ? nl.memoizedState : null) !== l && (B.flags |= 1024),
        t
    }
    function Lc() {
        var l = ln !== 0;
        return ln = 0,
        l
    }
    function Kc(l, t, a) {
        t.updateQueue = l.updateQueue,
        t.flags &= -2053,
        l.lanes &= ~a
    }
    function Jc(l) {
        if (Pe) {
            for (l = l.memoizedState; l !== null; ) {
                var t = l.queue;
                t !== null && (t.pending = null),
                l = l.next
            }
            Pe = !1
        }
        Gt = 0,
        El = nl = B = null,
        mu = !1,
        Fu = ln = 0,
        du = null
    }
    function Bl() {
        var l = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return El === null ? B.memoizedState = El = l : El = El.next = l,
        El
    }
    function zl() {
        if (nl === null) {
            var l = B.alternate;
            l = l !== null ? l.memoizedState : null
        } else
            l = nl.next;
        var t = El === null ? B.memoizedState : El.next;
        if (t !== null)
            El = t,
            nl = l;
        else {
            if (l === null)
                throw B.alternate === null ? Error(v(467)) : Error(v(310));
            nl = l,
            l = {
                memoizedState: nl.memoizedState,
                baseState: nl.baseState,
                baseQueue: nl.baseQueue,
                queue: nl.queue,
                next: null
            },
            El === null ? B.memoizedState = El = l : El = El.next = l
        }
        return El
    }
    function tn() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function Iu(l) {
        var t = Fu;
        return Fu += 1,
        du === null && (du = []),
        l = p0(du, l, t),
        t = B,
        (El === null ? t.memoizedState : El.next) === null && (t = t.alternate,
        S.H = t === null || t.memoizedState === null ? gs : ef),
        l
    }
    function an(l) {
        if (l !== null && typeof l == "object") {
            if (typeof l.then == "function")
                return Iu(l);
            if (l.$$typeof === ql)
                return xl(l)
        }
        throw Error(v(438, String(l)))
    }
    function wc(l) {
        var t = null
          , a = B.updateQueue;
        if (a !== null && (t = a.memoCache),
        t == null) {
            var u = B.alternate;
            u !== null && (u = u.updateQueue,
            u !== null && (u = u.memoCache,
            u != null && (t = {
                data: u.data.map(function(e) {
                    return e.slice()
                }),
                index: 0
            })))
        }
        if (t == null && (t = {
            data: [],
            index: 0
        }),
        a === null && (a = tn(),
        B.updateQueue = a),
        a.memoCache = t,
        a = t.data[t.index],
        a === void 0)
            for (a = t.data[t.index] = Array(l),
            u = 0; u < l; u++)
                a[u] = Za;
        return t.index++,
        a
    }
    function Xt(l, t) {
        return typeof t == "function" ? t(l) : t
    }
    function un(l) {
        var t = zl();
        return Wc(t, nl, l)
    }
    function Wc(l, t, a) {
        var u = l.queue;
        if (u === null)
            throw Error(v(311));
        u.lastRenderedReducer = a;
        var e = l.baseQueue
          , n = u.pending;
        if (n !== null) {
            if (e !== null) {
                var c = e.next;
                e.next = n.next,
                n.next = c
            }
            t.baseQueue = e = n,
            u.pending = null
        }
        if (n = l.baseState,
        e === null)
            l.memoizedState = n;
        else {
            t = e.next;
            var f = c = null
              , i = null
              , d = t
              , r = !1;
            do {
                var z = d.lane & -536870913;
                if (z !== d.lane ? (w & z) === z : (Gt & z) === z) {
                    var h = d.revertLane;
                    if (h === 0)
                        i !== null && (i = i.next = {
                            lane: 0,
                            revertLane: 0,
                            gesture: null,
                            action: d.action,
                            hasEagerState: d.hasEagerState,
                            eagerState: d.eagerState,
                            next: null
                        }),
                        z === fu && (r = !0);
                    else if ((Gt & h) === h) {
                        d = d.next,
                        h === fu && (r = !0);
                        continue
                    } else
                        z = {
                            lane: 0,
                            revertLane: d.revertLane,
                            gesture: null,
                            action: d.action,
                            hasEagerState: d.hasEagerState,
                            eagerState: d.eagerState,
                            next: null
                        },
                        i === null ? (f = i = z,
                        c = n) : i = i.next = z,
                        B.lanes |= h,
                        oa |= h;
                    z = d.action,
                    Ba && a(n, z),
                    n = d.hasEagerState ? d.eagerState : a(n, z)
                } else
                    h = {
                        lane: z,
                        revertLane: d.revertLane,
                        gesture: d.gesture,
                        action: d.action,
                        hasEagerState: d.hasEagerState,
                        eagerState: d.eagerState,
                        next: null
                    },
                    i === null ? (f = i = h,
                    c = n) : i = i.next = h,
                    B.lanes |= z,
                    oa |= z;
                d = d.next
            } while (d !== null && d !== t);
            if (i === null ? c = n : i.next = f,
            !Pl(n, l.memoizedState) && (Al = !0,
            r && (a = iu,
            a !== null)))
                throw a;
            l.memoizedState = n,
            l.baseState = c,
            l.baseQueue = i,
            u.lastRenderedState = n
        }
        return e === null && (u.lanes = 0),
        [l.memoizedState, u.dispatch]
    }
    function kc(l) {
        var t = zl()
          , a = t.queue;
        if (a === null)
            throw Error(v(311));
        a.lastRenderedReducer = l;
        var u = a.dispatch
          , e = a.pending
          , n = t.memoizedState;
        if (e !== null) {
            a.pending = null;
            var c = e = e.next;
            do
                n = l(n, c.action),
                c = c.next;
            while (c !== e);
            Pl(n, t.memoizedState) || (Al = !0),
            t.memoizedState = n,
            t.baseQueue === null && (t.baseState = n),
            a.lastRenderedState = n
        }
        return [n, u]
    }
    function j0(l, t, a) {
        var u = B
          , e = zl()
          , n = $;
        if (n) {
            if (a === void 0)
                throw Error(v(407));
            a = a()
        } else
            a = t();
        var c = !Pl((nl || e).memoizedState, a);
        if (c && (e.memoizedState = a,
        Al = !0),
        e = e.queue,
        Ic(G0.bind(null, u, e, l), [l]),
        e.getSnapshot !== t || c || El !== null && El.memoizedState.tag & 1) {
            if (u.flags |= 2048,
            vu(9, {
                destroy: void 0
            }, B0.bind(null, u, e, a, t), null),
            yl === null)
                throw Error(v(349));
            n || (Gt & 127) !== 0 || Y0(u, t, a)
        }
        return a
    }
    function Y0(l, t, a) {
        l.flags |= 16384,
        l = {
            getSnapshot: t,
            value: a
        },
        t = B.updateQueue,
        t === null ? (t = tn(),
        B.updateQueue = t,
        t.stores = [l]) : (a = t.stores,
        a === null ? t.stores = [l] : a.push(l))
    }
    function B0(l, t, a, u) {
        t.value = a,
        t.getSnapshot = u,
        X0(t) && Q0(l)
    }
    function G0(l, t, a) {
        return a(function() {
            X0(t) && Q0(l)
        })
    }
    function X0(l) {
        var t = l.getSnapshot;
        l = l.value;
        try {
            var a = t();
            return !Pl(l, a)
        } catch {
            return !0
        }
    }
    function Q0(l) {
        var t = Ua(l, 2);
        t !== null && Wl(t, l, 2)
    }
    function $c(l) {
        var t = Bl();
        if (typeof l == "function") {
            var a = l;
            if (l = a(),
            Ba) {
                Ft(!0);
                try {
                    a()
                } finally {
                    Ft(!1)
                }
            }
        }
        return t.memoizedState = t.baseState = l,
        t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Xt,
            lastRenderedState: l
        },
        t
    }
    function Z0(l, t, a, u) {
        return l.baseState = a,
        Wc(l, nl, typeof u == "function" ? u : Xt)
    }
    function V1(l, t, a, u, e) {
        if (cn(l))
            throw Error(v(485));
        if (l = t.action,
        l !== null) {
            var n = {
                payload: e,
                action: l,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(c) {
                    n.listeners.push(c)
                }
            };
            S.T !== null ? a(!0) : n.isTransition = !1,
            u(n),
            a = t.pending,
            a === null ? (n.next = t.pending = n,
            V0(t, n)) : (n.next = a.next,
            t.pending = a.next = n)
        }
    }
    function V0(l, t) {
        var a = t.action
          , u = t.payload
          , e = l.state;
        if (t.isTransition) {
            var n = S.T
              , c = {};
            S.T = c;
            try {
                var f = a(e, u)
                  , i = S.S;
                i !== null && i(c, f),
                L0(l, t, f)
            } catch (d) {
                Fc(l, t, d)
            } finally {
                n !== null && c.types !== null && (n.types = c.types),
                S.T = n
            }
        } else
            try {
                n = a(e, u),
                L0(l, t, n)
            } catch (d) {
                Fc(l, t, d)
            }
    }
    function L0(l, t, a) {
        a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(u) {
            K0(l, t, u)
        }, function(u) {
            return Fc(l, t, u)
        }) : K0(l, t, a)
    }
    function K0(l, t, a) {
        t.status = "fulfilled",
        t.value = a,
        J0(t),
        l.state = a,
        t = l.pending,
        t !== null && (a = t.next,
        a === t ? l.pending = null : (a = a.next,
        t.next = a,
        V0(l, a)))
    }
    function Fc(l, t, a) {
        var u = l.pending;
        if (l.pending = null,
        u !== null) {
            u = u.next;
            do
                t.status = "rejected",
                t.reason = a,
                J0(t),
                t = t.next;
            while (t !== u)
        }
        l.action = null
    }
    function J0(l) {
        l = l.listeners;
        for (var t = 0; t < l.length; t++)
            (0,
            l[t])()
    }
    function w0(l, t) {
        return t
    }
    function W0(l, t) {
        if ($) {
            var a = yl.formState;
            if (a !== null) {
                l: {
                    var u = B;
                    if ($) {
                        if (ol) {
                            t: {
                                for (var e = ol, n = dt; e.nodeType !== 8; ) {
                                    if (!n) {
                                        e = null;
                                        break t
                                    }
                                    if (e = ht(e.nextSibling),
                                    e === null) {
                                        e = null;
                                        break t
                                    }
                                }
                                n = e.data,
                                e = n === "F!" || n === "F" ? e : null
                            }
                            if (e) {
                                ol = ht(e.nextSibling),
                                u = e.data === "F!";
                                break l
                            }
                        }
                        aa(u)
                    }
                    u = !1
                }
                u && (t = a[0])
            }
        }
        return a = Bl(),
        a.memoizedState = a.baseState = t,
        u = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: w0,
            lastRenderedState: t
        },
        a.queue = u,
        a = ds.bind(null, B, u),
        u.dispatch = a,
        u = $c(!1),
        n = uf.bind(null, B, !1, u.queue),
        u = Bl(),
        e = {
            state: t,
            dispatch: null,
            action: l,
            pending: null
        },
        u.queue = e,
        a = V1.bind(null, B, e, n, a),
        e.dispatch = a,
        u.memoizedState = l,
        [t, a, !1]
    }
    function k0(l) {
        var t = zl();
        return $0(t, nl, l)
    }
    function $0(l, t, a) {
        if (t = Wc(l, t, w0)[0],
        l = un(Xt)[0],
        typeof t == "object" && t !== null && typeof t.then == "function")
            try {
                var u = Iu(t)
            } catch (c) {
                throw c === su ? we : c
            }
        else
            u = t;
        t = zl();
        var e = t.queue
          , n = e.dispatch;
        return a !== t.memoizedState && (B.flags |= 2048,
        vu(9, {
            destroy: void 0
        }, L1.bind(null, e, a), null)),
        [u, n, l]
    }
    function L1(l, t) {
        l.action = t
    }
    function F0(l) {
        var t = zl()
          , a = nl;
        if (a !== null)
            return $0(t, a, l);
        zl(),
        t = t.memoizedState,
        a = zl();
        var u = a.queue.dispatch;
        return a.memoizedState = l,
        [t, u, !1]
    }
    function vu(l, t, a, u) {
        return l = {
            tag: l,
            create: a,
            deps: u,
            inst: t,
            next: null
        },
        t = B.updateQueue,
        t === null && (t = tn(),
        B.updateQueue = t),
        a = t.lastEffect,
        a === null ? t.lastEffect = l.next = l : (u = a.next,
        a.next = l,
        l.next = u,
        t.lastEffect = l),
        l
    }
    function I0() {
        return zl().memoizedState
    }
    function en(l, t, a, u) {
        var e = Bl();
        B.flags |= l,
        e.memoizedState = vu(1 | t, {
            destroy: void 0
        }, a, u === void 0 ? null : u)
    }
    function nn(l, t, a, u) {
        var e = zl();
        u = u === void 0 ? null : u;
        var n = e.memoizedState.inst;
        nl !== null && u !== null && Zc(u, nl.memoizedState.deps) ? e.memoizedState = vu(t, n, a, u) : (B.flags |= l,
        e.memoizedState = vu(1 | t, n, a, u))
    }
    function P0(l, t) {
        en(8390656, 8, l, t)
    }
    function Ic(l, t) {
        nn(2048, 8, l, t)
    }
    function K1(l) {
        B.flags |= 4;
        var t = B.updateQueue;
        if (t === null)
            t = tn(),
            B.updateQueue = t,
            t.events = [l];
        else {
            var a = t.events;
            a === null ? t.events = [l] : a.push(l)
        }
    }
    function ls(l) {
        var t = zl().memoizedState;
        return K1({
            ref: t,
            nextImpl: l
        }),
        function() {
            if ((P & 2) !== 0)
                throw Error(v(440));
            return t.impl.apply(void 0, arguments)
        }
    }
    function ts(l, t) {
        return nn(4, 2, l, t)
    }
    function as(l, t) {
        return nn(4, 4, l, t)
    }
    function us(l, t) {
        if (typeof t == "function") {
            l = l();
            var a = t(l);
            return function() {
                typeof a == "function" ? a() : t(null)
            }
        }
        if (t != null)
            return l = l(),
            t.current = l,
            function() {
                t.current = null
            }
    }
    function es(l, t, a) {
        a = a != null ? a.concat([l]) : null,
        nn(4, 4, us.bind(null, t, l), a)
    }
    function Pc() {}
    function ns(l, t) {
        var a = zl();
        t = t === void 0 ? null : t;
        var u = a.memoizedState;
        return t !== null && Zc(t, u[1]) ? u[0] : (a.memoizedState = [l, t],
        l)
    }
    function cs(l, t) {
        var a = zl();
        t = t === void 0 ? null : t;
        var u = a.memoizedState;
        if (t !== null && Zc(t, u[1]))
            return u[0];
        if (u = l(),
        Ba) {
            Ft(!0);
            try {
                l()
            } finally {
                Ft(!1)
            }
        }
        return a.memoizedState = [u, t],
        u
    }
    function lf(l, t, a) {
        return a === void 0 || (Gt & 1073741824) !== 0 && (w & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = a,
        l = fy(),
        B.lanes |= l,
        oa |= l,
        a)
    }
    function fs(l, t, a, u) {
        return Pl(a, t) ? a : ou.current !== null ? (l = lf(l, a, u),
        Pl(l, t) || (Al = !0),
        l) : (Gt & 42) === 0 || (Gt & 1073741824) !== 0 && (w & 261930) === 0 ? (Al = !0,
        l.memoizedState = a) : (l = fy(),
        B.lanes |= l,
        oa |= l,
        t)
    }
    function is(l, t, a, u, e) {
        var n = _.p;
        _.p = n !== 0 && 8 > n ? n : 8;
        var c = S.T
          , f = {};
        S.T = f,
        uf(l, !1, t, a);
        try {
            var i = e()
              , d = S.S;
            if (d !== null && d(f, i),
            i !== null && typeof i == "object" && typeof i.then == "function") {
                var r = X1(i, u);
                Pu(l, t, r, nt(l))
            } else
                Pu(l, t, u, nt(l))
        } catch (z) {
            Pu(l, t, {
                then: function() {},
                status: "rejected",
                reason: z
            }, nt())
        } finally {
            _.p = n,
            c !== null && f.types !== null && (c.types = f.types),
            S.T = c
        }
    }
    function J1() {}
    function tf(l, t, a, u) {
        if (l.tag !== 5)
            throw Error(v(476));
        var e = ss(l).queue;
        is(l, e, t, q, a === null ? J1 : function() {
            return ys(l),
            a(u)
        }
        )
    }
    function ss(l) {
        var t = l.memoizedState;
        if (t !== null)
            return t;
        t = {
            memoizedState: q,
            baseState: q,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Xt,
                lastRenderedState: q
            },
            next: null
        };
        var a = {};
        return t.next = {
            memoizedState: a,
            baseState: a,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Xt,
                lastRenderedState: a
            },
            next: null
        },
        l.memoizedState = t,
        l = l.alternate,
        l !== null && (l.memoizedState = t),
        t
    }
    function ys(l) {
        var t = ss(l);
        t.next === null && (t = l.alternate.memoizedState),
        Pu(l, t.next.queue, {}, nt())
    }
    function af() {
        return xl(ge)
    }
    function os() {
        return zl().memoizedState
    }
    function ms() {
        return zl().memoizedState
    }
    function w1(l) {
        for (var t = l.return; t !== null; ) {
            switch (t.tag) {
            case 24:
            case 3:
                var a = nt();
                l = na(a);
                var u = ca(t, l, a);
                u !== null && (Wl(u, t, a),
                Wu(u, t, a)),
                t = {
                    cache: xc()
                },
                l.payload = t;
                return
            }
            t = t.return
        }
    }
    function W1(l, t, a) {
        var u = nt();
        a = {
            lane: u,
            revertLane: 0,
            gesture: null,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        cn(l) ? vs(t, a) : (a = zc(l, t, a, u),
        a !== null && (Wl(a, l, u),
        hs(a, t, u)))
    }
    function ds(l, t, a) {
        var u = nt();
        Pu(l, t, a, u)
    }
    function Pu(l, t, a, u) {
        var e = {
            lane: u,
            revertLane: 0,
            gesture: null,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (cn(l))
            vs(t, e);
        else {
            var n = l.alternate;
            if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer,
            n !== null))
                try {
                    var c = t.lastRenderedState
                      , f = n(c, a);
                    if (e.hasEagerState = !0,
                    e.eagerState = f,
                    Pl(f, c))
                        return Xe(l, t, e, 0),
                        yl === null && Ge(),
                        !1
                } catch {} finally {}
            if (a = zc(l, t, e, u),
            a !== null)
                return Wl(a, l, u),
                hs(a, t, u),
                !0
        }
        return !1
    }
    function uf(l, t, a, u) {
        if (u = {
            lane: 2,
            revertLane: jf(),
            gesture: null,
            action: u,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        cn(l)) {
            if (t)
                throw Error(v(479))
        } else
            t = zc(l, a, u, 2),
            t !== null && Wl(t, l, 2)
    }
    function cn(l) {
        var t = l.alternate;
        return l === B || t !== null && t === B
    }
    function vs(l, t) {
        mu = Pe = !0;
        var a = l.pending;
        a === null ? t.next = t : (t.next = a.next,
        a.next = t),
        l.pending = t
    }
    function hs(l, t, a) {
        if ((a & 4194048) !== 0) {
            var u = t.lanes;
            u &= l.pendingLanes,
            a |= u,
            t.lanes = a,
            zi(l, a)
        }
    }
    var le = {
        readContext: xl,
        use: an,
        useCallback: vl,
        useContext: vl,
        useEffect: vl,
        useImperativeHandle: vl,
        useLayoutEffect: vl,
        useInsertionEffect: vl,
        useMemo: vl,
        useReducer: vl,
        useRef: vl,
        useState: vl,
        useDebugValue: vl,
        useDeferredValue: vl,
        useTransition: vl,
        useSyncExternalStore: vl,
        useId: vl,
        useHostTransitionStatus: vl,
        useFormState: vl,
        useActionState: vl,
        useOptimistic: vl,
        useMemoCache: vl,
        useCacheRefresh: vl
    };
    le.useEffectEvent = vl;
    var gs = {
        readContext: xl,
        use: an,
        useCallback: function(l, t) {
            return Bl().memoizedState = [l, t === void 0 ? null : t],
            l
        },
        useContext: xl,
        useEffect: P0,
        useImperativeHandle: function(l, t, a) {
            a = a != null ? a.concat([l]) : null,
            en(4194308, 4, us.bind(null, t, l), a)
        },
        useLayoutEffect: function(l, t) {
            return en(4194308, 4, l, t)
        },
        useInsertionEffect: function(l, t) {
            en(4, 2, l, t)
        },
        useMemo: function(l, t) {
            var a = Bl();
            t = t === void 0 ? null : t;
            var u = l();
            if (Ba) {
                Ft(!0);
                try {
                    l()
                } finally {
                    Ft(!1)
                }
            }
            return a.memoizedState = [u, t],
            u
        },
        useReducer: function(l, t, a) {
            var u = Bl();
            if (a !== void 0) {
                var e = a(t);
                if (Ba) {
                    Ft(!0);
                    try {
                        a(t)
                    } finally {
                        Ft(!1)
                    }
                }
            } else
                e = t;
            return u.memoizedState = u.baseState = e,
            l = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: l,
                lastRenderedState: e
            },
            u.queue = l,
            l = l.dispatch = W1.bind(null, B, l),
            [u.memoizedState, l]
        },
        useRef: function(l) {
            var t = Bl();
            return l = {
                current: l
            },
            t.memoizedState = l
        },
        useState: function(l) {
            l = $c(l);
            var t = l.queue
              , a = ds.bind(null, B, t);
            return t.dispatch = a,
            [l.memoizedState, a]
        },
        useDebugValue: Pc,
        useDeferredValue: function(l, t) {
            var a = Bl();
            return lf(a, l, t)
        },
        useTransition: function() {
            var l = $c(!1);
            return l = is.bind(null, B, l.queue, !0, !1),
            Bl().memoizedState = l,
            [!1, l]
        },
        useSyncExternalStore: function(l, t, a) {
            var u = B
              , e = Bl();
            if ($) {
                if (a === void 0)
                    throw Error(v(407));
                a = a()
            } else {
                if (a = t(),
                yl === null)
                    throw Error(v(349));
                (w & 127) !== 0 || Y0(u, t, a)
            }
            e.memoizedState = a;
            var n = {
                value: a,
                getSnapshot: t
            };
            return e.queue = n,
            P0(G0.bind(null, u, n, l), [l]),
            u.flags |= 2048,
            vu(9, {
                destroy: void 0
            }, B0.bind(null, u, n, a, t), null),
            a
        },
        useId: function() {
            var l = Bl()
              , t = yl.identifierPrefix;
            if ($) {
                var a = Ot
                  , u = Mt;
                a = (u & ~(1 << 32 - Il(u) - 1)).toString(32) + a,
                t = "_" + t + "R_" + a,
                a = ln++,
                0 < a && (t += "H" + a.toString(32)),
                t += "_"
            } else
                a = Q1++,
                t = "_" + t + "r_" + a.toString(32) + "_";
            return l.memoizedState = t
        },
        useHostTransitionStatus: af,
        useFormState: W0,
        useActionState: W0,
        useOptimistic: function(l) {
            var t = Bl();
            t.memoizedState = t.baseState = l;
            var a = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return t.queue = a,
            t = uf.bind(null, B, !0, a),
            a.dispatch = t,
            [l, t]
        },
        useMemoCache: wc,
        useCacheRefresh: function() {
            return Bl().memoizedState = w1.bind(null, B)
        },
        useEffectEvent: function(l) {
            var t = Bl()
              , a = {
                impl: l
            };
            return t.memoizedState = a,
            function() {
                if ((P & 2) !== 0)
                    throw Error(v(440));
                return a.impl.apply(void 0, arguments)
            }
        }
    }
      , ef = {
        readContext: xl,
        use: an,
        useCallback: ns,
        useContext: xl,
        useEffect: Ic,
        useImperativeHandle: es,
        useInsertionEffect: ts,
        useLayoutEffect: as,
        useMemo: cs,
        useReducer: un,
        useRef: I0,
        useState: function() {
            return un(Xt)
        },
        useDebugValue: Pc,
        useDeferredValue: function(l, t) {
            var a = zl();
            return fs(a, nl.memoizedState, l, t)
        },
        useTransition: function() {
            var l = un(Xt)[0]
              , t = zl().memoizedState;
            return [typeof l == "boolean" ? l : Iu(l), t]
        },
        useSyncExternalStore: j0,
        useId: os,
        useHostTransitionStatus: af,
        useFormState: k0,
        useActionState: k0,
        useOptimistic: function(l, t) {
            var a = zl();
            return Z0(a, nl, l, t)
        },
        useMemoCache: wc,
        useCacheRefresh: ms
    };
    ef.useEffectEvent = ls;
    var rs = {
        readContext: xl,
        use: an,
        useCallback: ns,
        useContext: xl,
        useEffect: Ic,
        useImperativeHandle: es,
        useInsertionEffect: ts,
        useLayoutEffect: as,
        useMemo: cs,
        useReducer: kc,
        useRef: I0,
        useState: function() {
            return kc(Xt)
        },
        useDebugValue: Pc,
        useDeferredValue: function(l, t) {
            var a = zl();
            return nl === null ? lf(a, l, t) : fs(a, nl.memoizedState, l, t)
        },
        useTransition: function() {
            var l = kc(Xt)[0]
              , t = zl().memoizedState;
            return [typeof l == "boolean" ? l : Iu(l), t]
        },
        useSyncExternalStore: j0,
        useId: os,
        useHostTransitionStatus: af,
        useFormState: F0,
        useActionState: F0,
        useOptimistic: function(l, t) {
            var a = zl();
            return nl !== null ? Z0(a, nl, l, t) : (a.baseState = l,
            [l, a.queue.dispatch])
        },
        useMemoCache: wc,
        useCacheRefresh: ms
    };
    rs.useEffectEvent = ls;
    function nf(l, t, a, u) {
        t = l.memoizedState,
        a = a(u, t),
        a = a == null ? t : x({}, t, a),
        l.memoizedState = a,
        l.lanes === 0 && (l.updateQueue.baseState = a)
    }
    var cf = {
        enqueueSetState: function(l, t, a) {
            l = l._reactInternals;
            var u = nt()
              , e = na(u);
            e.payload = t,
            a != null && (e.callback = a),
            t = ca(l, e, u),
            t !== null && (Wl(t, l, u),
            Wu(t, l, u))
        },
        enqueueReplaceState: function(l, t, a) {
            l = l._reactInternals;
            var u = nt()
              , e = na(u);
            e.tag = 1,
            e.payload = t,
            a != null && (e.callback = a),
            t = ca(l, e, u),
            t !== null && (Wl(t, l, u),
            Wu(t, l, u))
        },
        enqueueForceUpdate: function(l, t) {
            l = l._reactInternals;
            var a = nt()
              , u = na(a);
            u.tag = 2,
            t != null && (u.callback = t),
            t = ca(l, u, a),
            t !== null && (Wl(t, l, a),
            Wu(t, l, a))
        }
    };
    function Ss(l, t, a, u, e, n, c) {
        return l = l.stateNode,
        typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(u, n, c) : t.prototype && t.prototype.isPureReactComponent ? !Xu(a, u) || !Xu(e, n) : !0
    }
    function bs(l, t, a, u) {
        l = t.state,
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, u),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, u),
        t.state !== l && cf.enqueueReplaceState(t, t.state, null)
    }
    function Ga(l, t) {
        var a = t;
        if ("ref"in t) {
            a = {};
            for (var u in t)
                u !== "ref" && (a[u] = t[u])
        }
        if (l = l.defaultProps) {
            a === t && (a = x({}, a));
            for (var e in l)
                a[e] === void 0 && (a[e] = l[e])
        }
        return a
    }
    function zs(l) {
        Be(l)
    }
    function Ts(l) {
        console.error(l)
    }
    function Es(l) {
        Be(l)
    }
    function fn(l, t) {
        try {
            var a = l.onUncaughtError;
            a(t.value, {
                componentStack: t.stack
            })
        } catch (u) {
            setTimeout(function() {
                throw u
            })
        }
    }
    function As(l, t, a) {
        try {
            var u = l.onCaughtError;
            u(a.value, {
                componentStack: a.stack,
                errorBoundary: t.tag === 1 ? t.stateNode : null
            })
        } catch (e) {
            setTimeout(function() {
                throw e
            })
        }
    }
    function ff(l, t, a) {
        return a = na(a),
        a.tag = 3,
        a.payload = {
            element: null
        },
        a.callback = function() {
            fn(l, t)
        }
        ,
        a
    }
    function _s(l) {
        return l = na(l),
        l.tag = 3,
        l
    }
    function ps(l, t, a, u) {
        var e = a.type.getDerivedStateFromError;
        if (typeof e == "function") {
            var n = u.value;
            l.payload = function() {
                return e(n)
            }
            ,
            l.callback = function() {
                As(t, a, u)
            }
        }
        var c = a.stateNode;
        c !== null && typeof c.componentDidCatch == "function" && (l.callback = function() {
            As(t, a, u),
            typeof e != "function" && (ma === null ? ma = new Set([this]) : ma.add(this));
            var f = u.stack;
            this.componentDidCatch(u.value, {
                componentStack: f !== null ? f : ""
            })
        }
        )
    }
    function k1(l, t, a, u, e) {
        if (a.flags |= 32768,
        u !== null && typeof u == "object" && typeof u.then == "function") {
            if (t = a.alternate,
            t !== null && cu(t, a, e, !0),
            a = tt.current,
            a !== null) {
                switch (a.tag) {
                case 31:
                case 13:
                    return vt === null ? zn() : a.alternate === null && hl === 0 && (hl = 3),
                    a.flags &= -257,
                    a.flags |= 65536,
                    a.lanes = e,
                    u === We ? a.flags |= 16384 : (t = a.updateQueue,
                    t === null ? a.updateQueue = new Set([u]) : t.add(u),
                    Rf(l, u, e)),
                    !1;
                case 22:
                    return a.flags |= 65536,
                    u === We ? a.flags |= 16384 : (t = a.updateQueue,
                    t === null ? (t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([u])
                    },
                    a.updateQueue = t) : (a = t.retryQueue,
                    a === null ? t.retryQueue = new Set([u]) : a.add(u)),
                    Rf(l, u, e)),
                    !1
                }
                throw Error(v(435, a.tag))
            }
            return Rf(l, u, e),
            zn(),
            !1
        }
        if ($)
            return t = tt.current,
            t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            t.flags |= 65536,
            t.lanes = e,
            u !== Mc && (l = Error(v(422), {
                cause: u
            }),
            Vu(yt(l, a)))) : (u !== Mc && (t = Error(v(423), {
                cause: u
            }),
            Vu(yt(t, a))),
            l = l.current.alternate,
            l.flags |= 65536,
            e &= -e,
            l.lanes |= e,
            u = yt(u, a),
            e = ff(l.stateNode, u, e),
            Yc(l, e),
            hl !== 4 && (hl = 2)),
            !1;
        var n = Error(v(520), {
            cause: u
        });
        if (n = yt(n, a),
        ie === null ? ie = [n] : ie.push(n),
        hl !== 4 && (hl = 2),
        t === null)
            return !0;
        u = yt(u, a),
        a = t;
        do {
            switch (a.tag) {
            case 3:
                return a.flags |= 65536,
                l = e & -e,
                a.lanes |= l,
                l = ff(a.stateNode, u, l),
                Yc(a, l),
                !1;
            case 1:
                if (t = a.type,
                n = a.stateNode,
                (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (ma === null || !ma.has(n))))
                    return a.flags |= 65536,
                    e &= -e,
                    a.lanes |= e,
                    e = _s(e),
                    ps(e, l, a, u),
                    Yc(a, e),
                    !1
            }
            a = a.return
        } while (a !== null);
        return !1
    }
    var sf = Error(v(461))
      , Al = !1;
    function Hl(l, t, a, u) {
        t.child = l === null ? U0(t, null, a, u) : Ya(t, l.child, a, u)
    }
    function Ms(l, t, a, u, e) {
        a = a.render;
        var n = t.ref;
        if ("ref"in u) {
            var c = {};
            for (var f in u)
                f !== "ref" && (c[f] = u[f])
        } else
            c = u;
        return Ra(t),
        u = Vc(l, t, a, c, n, e),
        f = Lc(),
        l !== null && !Al ? (Kc(l, t, e),
        Qt(l, t, e)) : ($ && f && _c(t),
        t.flags |= 1,
        Hl(l, t, u, e),
        t.child)
    }
    function Os(l, t, a, u, e) {
        if (l === null) {
            var n = a.type;
            return typeof n == "function" && !Tc(n) && n.defaultProps === void 0 && a.compare === null ? (t.tag = 15,
            t.type = n,
            Ds(l, t, n, u, e)) : (l = Ze(a.type, null, u, t, t.mode, e),
            l.ref = t.ref,
            l.return = t,
            t.child = l)
        }
        if (n = l.child,
        !rf(l, e)) {
            var c = n.memoizedProps;
            if (a = a.compare,
            a = a !== null ? a : Xu,
            a(c, u) && l.ref === t.ref)
                return Qt(l, t, e)
        }
        return t.flags |= 1,
        l = Ct(n, u),
        l.ref = t.ref,
        l.return = t,
        t.child = l
    }
    function Ds(l, t, a, u, e) {
        if (l !== null) {
            var n = l.memoizedProps;
            if (Xu(n, u) && l.ref === t.ref)
                if (Al = !1,
                t.pendingProps = u = n,
                rf(l, e))
                    (l.flags & 131072) !== 0 && (Al = !0);
                else
                    return t.lanes = l.lanes,
                    Qt(l, t, e)
        }
        return yf(l, t, a, u, e)
    }
    function Us(l, t, a, u) {
        var e = u.children
          , n = l !== null ? l.memoizedState : null;
        if (l === null && t.stateNode === null && (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        u.mode === "hidden") {
            if ((t.flags & 128) !== 0) {
                if (n = n !== null ? n.baseLanes | a : a,
                l !== null) {
                    for (u = t.child = l.child,
                    e = 0; u !== null; )
                        e = e | u.lanes | u.childLanes,
                        u = u.sibling;
                    u = e & ~n
                } else
                    u = 0,
                    t.child = null;
                return Ns(l, t, n, a, u)
            }
            if ((a & 536870912) !== 0)
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                l !== null && Je(t, n !== null ? n.cachePool : null),
                n !== null ? H0(t, n) : Gc(),
                R0(t);
            else
                return u = t.lanes = 536870912,
                Ns(l, t, n !== null ? n.baseLanes | a : a, a, u)
        } else
            n !== null ? (Je(t, n.cachePool),
            H0(t, n),
            ia(),
            t.memoizedState = null) : (l !== null && Je(t, null),
            Gc(),
            ia());
        return Hl(l, t, e, a),
        t.child
    }
    function te(l, t) {
        return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        t.sibling
    }
    function Ns(l, t, a, u, e) {
        var n = Rc();
        return n = n === null ? null : {
            parent: Tl._currentValue,
            pool: n
        },
        t.memoizedState = {
            baseLanes: a,
            cachePool: n
        },
        l !== null && Je(t, null),
        Gc(),
        R0(t),
        l !== null && cu(l, t, u, !0),
        t.childLanes = e,
        null
    }
    function sn(l, t) {
        return t = on({
            mode: t.mode,
            children: t.children
        }, l.mode),
        t.ref = l.ref,
        l.child = t,
        t.return = l,
        t
    }
    function xs(l, t, a) {
        return Ya(t, l.child, null, a),
        l = sn(t, t.pendingProps),
        l.flags |= 2,
        at(t),
        t.memoizedState = null,
        l
    }
    function $1(l, t, a) {
        var u = t.pendingProps
          , e = (t.flags & 128) !== 0;
        if (t.flags &= -129,
        l === null) {
            if ($) {
                if (u.mode === "hidden")
                    return l = sn(t, u),
                    t.lanes = 536870912,
                    te(null, l);
                if (Qc(t),
                (l = ol) ? (l = Vy(l, dt),
                l = l !== null && l.data === "&" ? l : null,
                l !== null && (t.memoizedState = {
                    dehydrated: l,
                    treeContext: la !== null ? {
                        id: Mt,
                        overflow: Ot
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                a = v0(l),
                a.return = t,
                t.child = a,
                Nl = t,
                ol = null)) : l = null,
                l === null)
                    throw aa(t);
                return t.lanes = 536870912,
                null
            }
            return sn(t, u)
        }
        var n = l.memoizedState;
        if (n !== null) {
            var c = n.dehydrated;
            if (Qc(t),
            e)
                if (t.flags & 256)
                    t.flags &= -257,
                    t = xs(l, t, a);
                else if (t.memoizedState !== null)
                    t.child = l.child,
                    t.flags |= 128,
                    t = null;
                else
                    throw Error(v(558));
            else if (Al || cu(l, t, a, !1),
            e = (a & l.childLanes) !== 0,
            Al || e) {
                if (u = yl,
                u !== null && (c = Ti(u, a),
                c !== 0 && c !== n.retryLane))
                    throw n.retryLane = c,
                    Ua(l, c),
                    Wl(u, l, c),
                    sf;
                zn(),
                t = xs(l, t, a)
            } else
                l = n.treeContext,
                ol = ht(c.nextSibling),
                Nl = t,
                $ = !0,
                ta = null,
                dt = !1,
                l !== null && r0(t, l),
                t = sn(t, u),
                t.flags |= 4096;
            return t
        }
        return l = Ct(l.child, {
            mode: u.mode,
            children: u.children
        }),
        l.ref = t.ref,
        t.child = l,
        l.return = t,
        l
    }
    function yn(l, t) {
        var a = t.ref;
        if (a === null)
            l !== null && l.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof a != "function" && typeof a != "object")
                throw Error(v(284));
            (l === null || l.ref !== a) && (t.flags |= 4194816)
        }
    }
    function yf(l, t, a, u, e) {
        return Ra(t),
        a = Vc(l, t, a, u, void 0, e),
        u = Lc(),
        l !== null && !Al ? (Kc(l, t, e),
        Qt(l, t, e)) : ($ && u && _c(t),
        t.flags |= 1,
        Hl(l, t, a, e),
        t.child)
    }
    function Hs(l, t, a, u, e, n) {
        return Ra(t),
        t.updateQueue = null,
        a = C0(t, u, a, e),
        q0(l),
        u = Lc(),
        l !== null && !Al ? (Kc(l, t, n),
        Qt(l, t, n)) : ($ && u && _c(t),
        t.flags |= 1,
        Hl(l, t, a, n),
        t.child)
    }
    function Rs(l, t, a, u, e) {
        if (Ra(t),
        t.stateNode === null) {
            var n = au
              , c = a.contextType;
            typeof c == "object" && c !== null && (n = xl(c)),
            n = new a(u,n),
            t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null,
            n.updater = cf,
            t.stateNode = n,
            n._reactInternals = t,
            n = t.stateNode,
            n.props = u,
            n.state = t.memoizedState,
            n.refs = {},
            Cc(t),
            c = a.contextType,
            n.context = typeof c == "object" && c !== null ? xl(c) : au,
            n.state = t.memoizedState,
            c = a.getDerivedStateFromProps,
            typeof c == "function" && (nf(t, a, c, u),
            n.state = t.memoizedState),
            typeof a.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (c = n.state,
            typeof n.componentWillMount == "function" && n.componentWillMount(),
            typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(),
            c !== n.state && cf.enqueueReplaceState(n, n.state, null),
            $u(t, u, n, e),
            ku(),
            n.state = t.memoizedState),
            typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            u = !0
        } else if (l === null) {
            n = t.stateNode;
            var f = t.memoizedProps
              , i = Ga(a, f);
            n.props = i;
            var d = n.context
              , r = a.contextType;
            c = au,
            typeof r == "object" && r !== null && (c = xl(r));
            var z = a.getDerivedStateFromProps;
            r = typeof z == "function" || typeof n.getSnapshotBeforeUpdate == "function",
            f = t.pendingProps !== f,
            r || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f || d !== c) && bs(t, n, u, c),
            ea = !1;
            var h = t.memoizedState;
            n.state = h,
            $u(t, u, n, e),
            ku(),
            d = t.memoizedState,
            f || h !== d || ea ? (typeof z == "function" && (nf(t, a, z, u),
            d = t.memoizedState),
            (i = ea || Ss(t, a, i, u, h, d, c)) ? (r || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(),
            typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()),
            typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            t.memoizedProps = u,
            t.memoizedState = d),
            n.props = u,
            n.state = d,
            n.context = c,
            u = i) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            u = !1)
        } else {
            n = t.stateNode,
            jc(l, t),
            c = t.memoizedProps,
            r = Ga(a, c),
            n.props = r,
            z = t.pendingProps,
            h = n.context,
            d = a.contextType,
            i = au,
            typeof d == "object" && d !== null && (i = xl(d)),
            f = a.getDerivedStateFromProps,
            (d = typeof f == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c !== z || h !== i) && bs(t, n, u, i),
            ea = !1,
            h = t.memoizedState,
            n.state = h,
            $u(t, u, n, e),
            ku();
            var g = t.memoizedState;
            c !== z || h !== g || ea || l !== null && l.dependencies !== null && Le(l.dependencies) ? (typeof f == "function" && (nf(t, a, f, u),
            g = t.memoizedState),
            (r = ea || Ss(t, a, r, u, h, g, i) || l !== null && l.dependencies !== null && Le(l.dependencies)) ? (d || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(u, g, i),
            typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(u, g, i)),
            typeof n.componentDidUpdate == "function" && (t.flags |= 4),
            typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || c === l.memoizedProps && h === l.memoizedState || (t.flags |= 4),
            typeof n.getSnapshotBeforeUpdate != "function" || c === l.memoizedProps && h === l.memoizedState || (t.flags |= 1024),
            t.memoizedProps = u,
            t.memoizedState = g),
            n.props = u,
            n.state = g,
            n.context = i,
            u = r) : (typeof n.componentDidUpdate != "function" || c === l.memoizedProps && h === l.memoizedState || (t.flags |= 4),
            typeof n.getSnapshotBeforeUpdate != "function" || c === l.memoizedProps && h === l.memoizedState || (t.flags |= 1024),
            u = !1)
        }
        return n = u,
        yn(l, t),
        u = (t.flags & 128) !== 0,
        n || u ? (n = t.stateNode,
        a = u && typeof a.getDerivedStateFromError != "function" ? null : n.render(),
        t.flags |= 1,
        l !== null && u ? (t.child = Ya(t, l.child, null, e),
        t.child = Ya(t, null, a, e)) : Hl(l, t, a, e),
        t.memoizedState = n.state,
        l = t.child) : l = Qt(l, t, e),
        l
    }
    function qs(l, t, a, u) {
        return xa(),
        t.flags |= 256,
        Hl(l, t, a, u),
        t.child
    }
    var of = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function mf(l) {
        return {
            baseLanes: l,
            cachePool: A0()
        }
    }
    function df(l, t, a) {
        return l = l !== null ? l.childLanes & ~a : 0,
        t && (l |= et),
        l
    }
    function Cs(l, t, a) {
        var u = t.pendingProps, e = !1, n = (t.flags & 128) !== 0, c;
        if ((c = n) || (c = l !== null && l.memoizedState === null ? !1 : (bl.current & 2) !== 0),
        c && (e = !0,
        t.flags &= -129),
        c = (t.flags & 32) !== 0,
        t.flags &= -33,
        l === null) {
            if ($) {
                if (e ? fa(t) : ia(),
                (l = ol) ? (l = Vy(l, dt),
                l = l !== null && l.data !== "&" ? l : null,
                l !== null && (t.memoizedState = {
                    dehydrated: l,
                    treeContext: la !== null ? {
                        id: Mt,
                        overflow: Ot
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                a = v0(l),
                a.return = t,
                t.child = a,
                Nl = t,
                ol = null)) : l = null,
                l === null)
                    throw aa(t);
                return kf(l) ? t.lanes = 32 : t.lanes = 536870912,
                null
            }
            var f = u.children;
            return u = u.fallback,
            e ? (ia(),
            e = t.mode,
            f = on({
                mode: "hidden",
                children: f
            }, e),
            u = Na(u, e, a, null),
            f.return = t,
            u.return = t,
            f.sibling = u,
            t.child = f,
            u = t.child,
            u.memoizedState = mf(a),
            u.childLanes = df(l, c, a),
            t.memoizedState = of,
            te(null, u)) : (fa(t),
            vf(t, f))
        }
        var i = l.memoizedState;
        if (i !== null && (f = i.dehydrated,
        f !== null)) {
            if (n)
                t.flags & 256 ? (fa(t),
                t.flags &= -257,
                t = hf(l, t, a)) : t.memoizedState !== null ? (ia(),
                t.child = l.child,
                t.flags |= 128,
                t = null) : (ia(),
                f = u.fallback,
                e = t.mode,
                u = on({
                    mode: "visible",
                    children: u.children
                }, e),
                f = Na(f, e, a, null),
                f.flags |= 2,
                u.return = t,
                f.return = t,
                u.sibling = f,
                t.child = u,
                Ya(t, l.child, null, a),
                u = t.child,
                u.memoizedState = mf(a),
                u.childLanes = df(l, c, a),
                t.memoizedState = of,
                t = te(null, u));
            else if (fa(t),
            kf(f)) {
                if (c = f.nextSibling && f.nextSibling.dataset,
                c)
                    var d = c.dgst;
                c = d,
                u = Error(v(419)),
                u.stack = "",
                u.digest = c,
                Vu({
                    value: u,
                    source: null,
                    stack: null
                }),
                t = hf(l, t, a)
            } else if (Al || cu(l, t, a, !1),
            c = (a & l.childLanes) !== 0,
            Al || c) {
                if (c = yl,
                c !== null && (u = Ti(c, a),
                u !== 0 && u !== i.retryLane))
                    throw i.retryLane = u,
                    Ua(l, u),
                    Wl(c, l, u),
                    sf;
                Wf(f) || zn(),
                t = hf(l, t, a)
            } else
                Wf(f) ? (t.flags |= 192,
                t.child = l.child,
                t = null) : (l = i.treeContext,
                ol = ht(f.nextSibling),
                Nl = t,
                $ = !0,
                ta = null,
                dt = !1,
                l !== null && r0(t, l),
                t = vf(t, u.children),
                t.flags |= 4096);
            return t
        }
        return e ? (ia(),
        f = u.fallback,
        e = t.mode,
        i = l.child,
        d = i.sibling,
        u = Ct(i, {
            mode: "hidden",
            children: u.children
        }),
        u.subtreeFlags = i.subtreeFlags & 65011712,
        d !== null ? f = Ct(d, f) : (f = Na(f, e, a, null),
        f.flags |= 2),
        f.return = t,
        u.return = t,
        u.sibling = f,
        t.child = u,
        te(null, u),
        u = t.child,
        f = l.child.memoizedState,
        f === null ? f = mf(a) : (e = f.cachePool,
        e !== null ? (i = Tl._currentValue,
        e = e.parent !== i ? {
            parent: i,
            pool: i
        } : e) : e = A0(),
        f = {
            baseLanes: f.baseLanes | a,
            cachePool: e
        }),
        u.memoizedState = f,
        u.childLanes = df(l, c, a),
        t.memoizedState = of,
        te(l.child, u)) : (fa(t),
        a = l.child,
        l = a.sibling,
        a = Ct(a, {
            mode: "visible",
            children: u.children
        }),
        a.return = t,
        a.sibling = null,
        l !== null && (c = t.deletions,
        c === null ? (t.deletions = [l],
        t.flags |= 16) : c.push(l)),
        t.child = a,
        t.memoizedState = null,
        a)
    }
    function vf(l, t) {
        return t = on({
            mode: "visible",
            children: t
        }, l.mode),
        t.return = l,
        l.child = t
    }
    function on(l, t) {
        return l = lt(22, l, null, t),
        l.lanes = 0,
        l
    }
    function hf(l, t, a) {
        return Ya(t, l.child, null, a),
        l = vf(t, t.pendingProps.children),
        l.flags |= 2,
        t.memoizedState = null,
        l
    }
    function js(l, t, a) {
        l.lanes |= t;
        var u = l.alternate;
        u !== null && (u.lanes |= t),
        Uc(l.return, t, a)
    }
    function gf(l, t, a, u, e, n) {
        var c = l.memoizedState;
        c === null ? l.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: u,
            tail: a,
            tailMode: e,
            treeForkCount: n
        } : (c.isBackwards = t,
        c.rendering = null,
        c.renderingStartTime = 0,
        c.last = u,
        c.tail = a,
        c.tailMode = e,
        c.treeForkCount = n)
    }
    function Ys(l, t, a) {
        var u = t.pendingProps
          , e = u.revealOrder
          , n = u.tail;
        u = u.children;
        var c = bl.current
          , f = (c & 2) !== 0;
        if (f ? (c = c & 1 | 2,
        t.flags |= 128) : c &= 1,
        p(bl, c),
        Hl(l, t, u, a),
        u = $ ? Zu : 0,
        !f && l !== null && (l.flags & 128) !== 0)
            l: for (l = t.child; l !== null; ) {
                if (l.tag === 13)
                    l.memoizedState !== null && js(l, a, t);
                else if (l.tag === 19)
                    js(l, a, t);
                else if (l.child !== null) {
                    l.child.return = l,
                    l = l.child;
                    continue
                }
                if (l === t)
                    break l;
                for (; l.sibling === null; ) {
                    if (l.return === null || l.return === t)
                        break l;
                    l = l.return
                }
                l.sibling.return = l.return,
                l = l.sibling
            }
        switch (e) {
        case "forwards":
            for (a = t.child,
            e = null; a !== null; )
                l = a.alternate,
                l !== null && Ie(l) === null && (e = a),
                a = a.sibling;
            a = e,
            a === null ? (e = t.child,
            t.child = null) : (e = a.sibling,
            a.sibling = null),
            gf(t, !1, e, a, n, u);
            break;
        case "backwards":
        case "unstable_legacy-backwards":
            for (a = null,
            e = t.child,
            t.child = null; e !== null; ) {
                if (l = e.alternate,
                l !== null && Ie(l) === null) {
                    t.child = e;
                    break
                }
                l = e.sibling,
                e.sibling = a,
                a = e,
                e = l
            }
            gf(t, !0, a, null, n, u);
            break;
        case "together":
            gf(t, !1, null, null, void 0, u);
            break;
        default:
            t.memoizedState = null
        }
        return t.child
    }
    function Qt(l, t, a) {
        if (l !== null && (t.dependencies = l.dependencies),
        oa |= t.lanes,
        (a & t.childLanes) === 0)
            if (l !== null) {
                if (cu(l, t, a, !1),
                (a & t.childLanes) === 0)
                    return null
            } else
                return null;
        if (l !== null && t.child !== l.child)
            throw Error(v(153));
        if (t.child !== null) {
            for (l = t.child,
            a = Ct(l, l.pendingProps),
            t.child = a,
            a.return = t; l.sibling !== null; )
                l = l.sibling,
                a = a.sibling = Ct(l, l.pendingProps),
                a.return = t;
            a.sibling = null
        }
        return t.child
    }
    function rf(l, t) {
        return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies,
        !!(l !== null && Le(l)))
    }
    function F1(l, t, a) {
        switch (t.tag) {
        case 3:
            Yl(t, t.stateNode.containerInfo),
            ua(t, Tl, l.memoizedState.cache),
            xa();
            break;
        case 27:
        case 5:
            Ou(t);
            break;
        case 4:
            Yl(t, t.stateNode.containerInfo);
            break;
        case 10:
            ua(t, t.type, t.memoizedProps.value);
            break;
        case 31:
            if (t.memoizedState !== null)
                return t.flags |= 128,
                Qc(t),
                null;
            break;
        case 13:
            var u = t.memoizedState;
            if (u !== null)
                return u.dehydrated !== null ? (fa(t),
                t.flags |= 128,
                null) : (a & t.child.childLanes) !== 0 ? Cs(l, t, a) : (fa(t),
                l = Qt(l, t, a),
                l !== null ? l.sibling : null);
            fa(t);
            break;
        case 19:
            var e = (l.flags & 128) !== 0;
            if (u = (a & t.childLanes) !== 0,
            u || (cu(l, t, a, !1),
            u = (a & t.childLanes) !== 0),
            e) {
                if (u)
                    return Ys(l, t, a);
                t.flags |= 128
            }
            if (e = t.memoizedState,
            e !== null && (e.rendering = null,
            e.tail = null,
            e.lastEffect = null),
            p(bl, bl.current),
            u)
                break;
            return null;
        case 22:
            return t.lanes = 0,
            Us(l, t, a, t.pendingProps);
        case 24:
            ua(t, Tl, l.memoizedState.cache)
        }
        return Qt(l, t, a)
    }
    function Bs(l, t, a) {
        if (l !== null)
            if (l.memoizedProps !== t.pendingProps)
                Al = !0;
            else {
                if (!rf(l, a) && (t.flags & 128) === 0)
                    return Al = !1,
                    F1(l, t, a);
                Al = (l.flags & 131072) !== 0
            }
        else
            Al = !1,
            $ && (t.flags & 1048576) !== 0 && g0(t, Zu, t.index);
        switch (t.lanes = 0,
        t.tag) {
        case 16:
            l: {
                var u = t.pendingProps;
                if (l = Ca(t.elementType),
                t.type = l,
                typeof l == "function")
                    Tc(l) ? (u = Ga(l, u),
                    t.tag = 1,
                    t = Rs(null, t, l, u, a)) : (t.tag = 0,
                    t = yf(null, t, l, u, a));
                else {
                    if (l != null) {
                        var e = l.$$typeof;
                        if (e === ct) {
                            t.tag = 11,
                            t = Ms(null, t, l, u, a);
                            break l
                        } else if (e === k) {
                            t.tag = 14,
                            t = Os(null, t, l, u, a);
                            break l
                        }
                    }
                    throw t = xt(l) || l,
                    Error(v(306, t, ""))
                }
            }
            return t;
        case 0:
            return yf(l, t, t.type, t.pendingProps, a);
        case 1:
            return u = t.type,
            e = Ga(u, t.pendingProps),
            Rs(l, t, u, e, a);
        case 3:
            l: {
                if (Yl(t, t.stateNode.containerInfo),
                l === null)
                    throw Error(v(387));
                u = t.pendingProps;
                var n = t.memoizedState;
                e = n.element,
                jc(l, t),
                $u(t, u, null, a);
                var c = t.memoizedState;
                if (u = c.cache,
                ua(t, Tl, u),
                u !== n.cache && Nc(t, [Tl], a, !0),
                ku(),
                u = c.element,
                n.isDehydrated)
                    if (n = {
                        element: u,
                        isDehydrated: !1,
                        cache: c.cache
                    },
                    t.updateQueue.baseState = n,
                    t.memoizedState = n,
                    t.flags & 256) {
                        t = qs(l, t, u, a);
                        break l
                    } else if (u !== e) {
                        e = yt(Error(v(424)), t),
                        Vu(e),
                        t = qs(l, t, u, a);
                        break l
                    } else {
                        switch (l = t.stateNode.containerInfo,
                        l.nodeType) {
                        case 9:
                            l = l.body;
                            break;
                        default:
                            l = l.nodeName === "HTML" ? l.ownerDocument.body : l
                        }
                        for (ol = ht(l.firstChild),
                        Nl = t,
                        $ = !0,
                        ta = null,
                        dt = !0,
                        a = U0(t, null, u, a),
                        t.child = a; a; )
                            a.flags = a.flags & -3 | 4096,
                            a = a.sibling
                    }
                else {
                    if (xa(),
                    u === e) {
                        t = Qt(l, t, a);
                        break l
                    }
                    Hl(l, t, u, a)
                }
                t = t.child
            }
            return t;
        case 26:
            return yn(l, t),
            l === null ? (a = ky(t.type, null, t.pendingProps, null)) ? t.memoizedState = a : $ || (a = t.type,
            l = t.pendingProps,
            u = On(L.current).createElement(a),
            u[Ul] = t,
            u[Zl] = l,
            Rl(u, a, l),
            Ml(u),
            t.stateNode = u) : t.memoizedState = ky(t.type, l.memoizedProps, t.pendingProps, l.memoizedState),
            null;
        case 27:
            return Ou(t),
            l === null && $ && (u = t.stateNode = Jy(t.type, t.pendingProps, L.current),
            Nl = t,
            dt = !0,
            e = ol,
            ga(t.type) ? ($f = e,
            ol = ht(u.firstChild)) : ol = e),
            Hl(l, t, t.pendingProps.children, a),
            yn(l, t),
            l === null && (t.flags |= 4194304),
            t.child;
        case 5:
            return l === null && $ && ((e = u = ol) && (u = Om(u, t.type, t.pendingProps, dt),
            u !== null ? (t.stateNode = u,
            Nl = t,
            ol = ht(u.firstChild),
            dt = !1,
            e = !0) : e = !1),
            e || aa(t)),
            Ou(t),
            e = t.type,
            n = t.pendingProps,
            c = l !== null ? l.memoizedProps : null,
            u = n.children,
            Kf(e, n) ? u = null : c !== null && Kf(e, c) && (t.flags |= 32),
            t.memoizedState !== null && (e = Vc(l, t, Z1, null, null, a),
            ge._currentValue = e),
            yn(l, t),
            Hl(l, t, u, a),
            t.child;
        case 6:
            return l === null && $ && ((l = a = ol) && (a = Dm(a, t.pendingProps, dt),
            a !== null ? (t.stateNode = a,
            Nl = t,
            ol = null,
            l = !0) : l = !1),
            l || aa(t)),
            null;
        case 13:
            return Cs(l, t, a);
        case 4:
            return Yl(t, t.stateNode.containerInfo),
            u = t.pendingProps,
            l === null ? t.child = Ya(t, null, u, a) : Hl(l, t, u, a),
            t.child;
        case 11:
            return Ms(l, t, t.type, t.pendingProps, a);
        case 7:
            return Hl(l, t, t.pendingProps, a),
            t.child;
        case 8:
            return Hl(l, t, t.pendingProps.children, a),
            t.child;
        case 12:
            return Hl(l, t, t.pendingProps.children, a),
            t.child;
        case 10:
            return u = t.pendingProps,
            ua(t, t.type, u.value),
            Hl(l, t, u.children, a),
            t.child;
        case 9:
            return e = t.type._context,
            u = t.pendingProps.children,
            Ra(t),
            e = xl(e),
            u = u(e),
            t.flags |= 1,
            Hl(l, t, u, a),
            t.child;
        case 14:
            return Os(l, t, t.type, t.pendingProps, a);
        case 15:
            return Ds(l, t, t.type, t.pendingProps, a);
        case 19:
            return Ys(l, t, a);
        case 31:
            return $1(l, t, a);
        case 22:
            return Us(l, t, a, t.pendingProps);
        case 24:
            return Ra(t),
            u = xl(Tl),
            l === null ? (e = Rc(),
            e === null && (e = yl,
            n = xc(),
            e.pooledCache = n,
            n.refCount++,
            n !== null && (e.pooledCacheLanes |= a),
            e = n),
            t.memoizedState = {
                parent: u,
                cache: e
            },
            Cc(t),
            ua(t, Tl, e)) : ((l.lanes & a) !== 0 && (jc(l, t),
            $u(t, null, null, a),
            ku()),
            e = l.memoizedState,
            n = t.memoizedState,
            e.parent !== u ? (e = {
                parent: u,
                cache: u
            },
            t.memoizedState = e,
            t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = e),
            ua(t, Tl, u)) : (u = n.cache,
            ua(t, Tl, u),
            u !== e.cache && Nc(t, [Tl], a, !0))),
            Hl(l, t, t.pendingProps.children, a),
            t.child;
        case 29:
            throw t.pendingProps
        }
        throw Error(v(156, t.tag))
    }
    function Zt(l) {
        l.flags |= 4
    }
    function Sf(l, t, a, u, e) {
        if ((t = (l.mode & 32) !== 0) && (t = !1),
        t) {
            if (l.flags |= 16777216,
            (e & 335544128) === e)
                if (l.stateNode.complete)
                    l.flags |= 8192;
                else if (oy())
                    l.flags |= 8192;
                else
                    throw ja = We,
                    qc
        } else
            l.flags &= -16777217
    }
    function Gs(l, t) {
        if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
            l.flags &= -16777217;
        else if (l.flags |= 16777216,
        !lo(t))
            if (oy())
                l.flags |= 8192;
            else
                throw ja = We,
                qc
    }
    function mn(l, t) {
        t !== null && (l.flags |= 4),
        l.flags & 16384 && (t = l.tag !== 22 ? Si() : 536870912,
        l.lanes |= t,
        Su |= t)
    }
    function ae(l, t) {
        if (!$)
            switch (l.tailMode) {
            case "hidden":
                t = l.tail;
                for (var a = null; t !== null; )
                    t.alternate !== null && (a = t),
                    t = t.sibling;
                a === null ? l.tail = null : a.sibling = null;
                break;
            case "collapsed":
                a = l.tail;
                for (var u = null; a !== null; )
                    a.alternate !== null && (u = a),
                    a = a.sibling;
                u === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : u.sibling = null
            }
    }
    function ml(l) {
        var t = l.alternate !== null && l.alternate.child === l.child
          , a = 0
          , u = 0;
        if (t)
            for (var e = l.child; e !== null; )
                a |= e.lanes | e.childLanes,
                u |= e.subtreeFlags & 65011712,
                u |= e.flags & 65011712,
                e.return = l,
                e = e.sibling;
        else
            for (e = l.child; e !== null; )
                a |= e.lanes | e.childLanes,
                u |= e.subtreeFlags,
                u |= e.flags,
                e.return = l,
                e = e.sibling;
        return l.subtreeFlags |= u,
        l.childLanes = a,
        t
    }
    function I1(l, t, a) {
        var u = t.pendingProps;
        switch (pc(t),
        t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return ml(t),
            null;
        case 1:
            return ml(t),
            null;
        case 3:
            return a = t.stateNode,
            u = null,
            l !== null && (u = l.memoizedState.cache),
            t.memoizedState.cache !== u && (t.flags |= 2048),
            Bt(Tl),
            Sl(),
            a.pendingContext && (a.context = a.pendingContext,
            a.pendingContext = null),
            (l === null || l.child === null) && (nu(t) ? Zt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024,
            Oc())),
            ml(t),
            null;
        case 26:
            var e = t.type
              , n = t.memoizedState;
            return l === null ? (Zt(t),
            n !== null ? (ml(t),
            Gs(t, n)) : (ml(t),
            Sf(t, e, null, u, a))) : n ? n !== l.memoizedState ? (Zt(t),
            ml(t),
            Gs(t, n)) : (ml(t),
            t.flags &= -16777217) : (l = l.memoizedProps,
            l !== u && Zt(t),
            ml(t),
            Sf(t, e, l, u, a)),
            null;
        case 27:
            if (Ee(t),
            a = L.current,
            e = t.type,
            l !== null && t.stateNode != null)
                l.memoizedProps !== u && Zt(t);
            else {
                if (!u) {
                    if (t.stateNode === null)
                        throw Error(v(166));
                    return ml(t),
                    null
                }
                l = O.current,
                nu(t) ? S0(t) : (l = Jy(e, u, a),
                t.stateNode = l,
                Zt(t))
            }
            return ml(t),
            null;
        case 5:
            if (Ee(t),
            e = t.type,
            l !== null && t.stateNode != null)
                l.memoizedProps !== u && Zt(t);
            else {
                if (!u) {
                    if (t.stateNode === null)
                        throw Error(v(166));
                    return ml(t),
                    null
                }
                if (n = O.current,
                nu(t))
                    S0(t);
                else {
                    var c = On(L.current);
                    switch (n) {
                    case 1:
                        n = c.createElementNS("http://www.w3.org/2000/svg", e);
                        break;
                    case 2:
                        n = c.createElementNS("http://www.w3.org/1998/Math/MathML", e);
                        break;
                    default:
                        switch (e) {
                        case "svg":
                            n = c.createElementNS("http://www.w3.org/2000/svg", e);
                            break;
                        case "math":
                            n = c.createElementNS("http://www.w3.org/1998/Math/MathML", e);
                            break;
                        case "script":
                            n = c.createElement("div"),
                            n.innerHTML = "<script><\/script>",
                            n = n.removeChild(n.firstChild);
                            break;
                        case "select":
                            n = typeof u.is == "string" ? c.createElement("select", {
                                is: u.is
                            }) : c.createElement("select"),
                            u.multiple ? n.multiple = !0 : u.size && (n.size = u.size);
                            break;
                        default:
                            n = typeof u.is == "string" ? c.createElement(e, {
                                is: u.is
                            }) : c.createElement(e)
                        }
                    }
                    n[Ul] = t,
                    n[Zl] = u;
                    l: for (c = t.child; c !== null; ) {
                        if (c.tag === 5 || c.tag === 6)
                            n.appendChild(c.stateNode);
                        else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                            c.child.return = c,
                            c = c.child;
                            continue
                        }
                        if (c === t)
                            break l;
                        for (; c.sibling === null; ) {
                            if (c.return === null || c.return === t)
                                break l;
                            c = c.return
                        }
                        c.sibling.return = c.return,
                        c = c.sibling
                    }
                    t.stateNode = n;
                    l: switch (Rl(n, e, u),
                    e) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        u = !!u.autoFocus;
                        break l;
                    case "img":
                        u = !0;
                        break l;
                    default:
                        u = !1
                    }
                    u && Zt(t)
                }
            }
            return ml(t),
            Sf(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, a),
            null;
        case 6:
            if (l && t.stateNode != null)
                l.memoizedProps !== u && Zt(t);
            else {
                if (typeof u != "string" && t.stateNode === null)
                    throw Error(v(166));
                if (l = L.current,
                nu(t)) {
                    if (l = t.stateNode,
                    a = t.memoizedProps,
                    u = null,
                    e = Nl,
                    e !== null)
                        switch (e.tag) {
                        case 27:
                        case 5:
                            u = e.memoizedProps
                        }
                    l[Ul] = t,
                    l = !!(l.nodeValue === a || u !== null && u.suppressHydrationWarning === !0 || Cy(l.nodeValue, a)),
                    l || aa(t, !0)
                } else
                    l = On(l).createTextNode(u),
                    l[Ul] = t,
                    t.stateNode = l
            }
            return ml(t),
            null;
        case 31:
            if (a = t.memoizedState,
            l === null || l.memoizedState !== null) {
                if (u = nu(t),
                a !== null) {
                    if (l === null) {
                        if (!u)
                            throw Error(v(318));
                        if (l = t.memoizedState,
                        l = l !== null ? l.dehydrated : null,
                        !l)
                            throw Error(v(557));
                        l[Ul] = t
                    } else
                        xa(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    ml(t),
                    l = !1
                } else
                    a = Oc(),
                    l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = a),
                    l = !0;
                if (!l)
                    return t.flags & 256 ? (at(t),
                    t) : (at(t),
                    null);
                if ((t.flags & 128) !== 0)
                    throw Error(v(558))
            }
            return ml(t),
            null;
        case 13:
            if (u = t.memoizedState,
            l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
                if (e = nu(t),
                u !== null && u.dehydrated !== null) {
                    if (l === null) {
                        if (!e)
                            throw Error(v(318));
                        if (e = t.memoizedState,
                        e = e !== null ? e.dehydrated : null,
                        !e)
                            throw Error(v(317));
                        e[Ul] = t
                    } else
                        xa(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    ml(t),
                    e = !1
                } else
                    e = Oc(),
                    l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e),
                    e = !0;
                if (!e)
                    return t.flags & 256 ? (at(t),
                    t) : (at(t),
                    null)
            }
            return at(t),
            (t.flags & 128) !== 0 ? (t.lanes = a,
            t) : (a = u !== null,
            l = l !== null && l.memoizedState !== null,
            a && (u = t.child,
            e = null,
            u.alternate !== null && u.alternate.memoizedState !== null && u.alternate.memoizedState.cachePool !== null && (e = u.alternate.memoizedState.cachePool.pool),
            n = null,
            u.memoizedState !== null && u.memoizedState.cachePool !== null && (n = u.memoizedState.cachePool.pool),
            n !== e && (u.flags |= 2048)),
            a !== l && a && (t.child.flags |= 8192),
            mn(t, t.updateQueue),
            ml(t),
            null);
        case 4:
            return Sl(),
            l === null && Xf(t.stateNode.containerInfo),
            ml(t),
            null;
        case 10:
            return Bt(t.type),
            ml(t),
            null;
        case 19:
            if (T(bl),
            u = t.memoizedState,
            u === null)
                return ml(t),
                null;
            if (e = (t.flags & 128) !== 0,
            n = u.rendering,
            n === null)
                if (e)
                    ae(u, !1);
                else {
                    if (hl !== 0 || l !== null && (l.flags & 128) !== 0)
                        for (l = t.child; l !== null; ) {
                            if (n = Ie(l),
                            n !== null) {
                                for (t.flags |= 128,
                                ae(u, !1),
                                l = n.updateQueue,
                                t.updateQueue = l,
                                mn(t, l),
                                t.subtreeFlags = 0,
                                l = a,
                                a = t.child; a !== null; )
                                    d0(a, l),
                                    a = a.sibling;
                                return p(bl, bl.current & 1 | 2),
                                $ && jt(t, u.treeForkCount),
                                t.child
                            }
                            l = l.sibling
                        }
                    u.tail !== null && $l() > rn && (t.flags |= 128,
                    e = !0,
                    ae(u, !1),
                    t.lanes = 4194304)
                }
            else {
                if (!e)
                    if (l = Ie(n),
                    l !== null) {
                        if (t.flags |= 128,
                        e = !0,
                        l = l.updateQueue,
                        t.updateQueue = l,
                        mn(t, l),
                        ae(u, !0),
                        u.tail === null && u.tailMode === "hidden" && !n.alternate && !$)
                            return ml(t),
                            null
                    } else
                        2 * $l() - u.renderingStartTime > rn && a !== 536870912 && (t.flags |= 128,
                        e = !0,
                        ae(u, !1),
                        t.lanes = 4194304);
                u.isBackwards ? (n.sibling = t.child,
                t.child = n) : (l = u.last,
                l !== null ? l.sibling = n : t.child = n,
                u.last = n)
            }
            return u.tail !== null ? (l = u.tail,
            u.rendering = l,
            u.tail = l.sibling,
            u.renderingStartTime = $l(),
            l.sibling = null,
            a = bl.current,
            p(bl, e ? a & 1 | 2 : a & 1),
            $ && jt(t, u.treeForkCount),
            l) : (ml(t),
            null);
        case 22:
        case 23:
            return at(t),
            Xc(),
            u = t.memoizedState !== null,
            l !== null ? l.memoizedState !== null !== u && (t.flags |= 8192) : u && (t.flags |= 8192),
            u ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (ml(t),
            t.subtreeFlags & 6 && (t.flags |= 8192)) : ml(t),
            a = t.updateQueue,
            a !== null && mn(t, a.retryQueue),
            a = null,
            l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool),
            u = null,
            t.memoizedState !== null && t.memoizedState.cachePool !== null && (u = t.memoizedState.cachePool.pool),
            u !== a && (t.flags |= 2048),
            l !== null && T(qa),
            null;
        case 24:
            return a = null,
            l !== null && (a = l.memoizedState.cache),
            t.memoizedState.cache !== a && (t.flags |= 2048),
            Bt(Tl),
            ml(t),
            null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(v(156, t.tag))
    }
    function P1(l, t) {
        switch (pc(t),
        t.tag) {
        case 1:
            return l = t.flags,
            l & 65536 ? (t.flags = l & -65537 | 128,
            t) : null;
        case 3:
            return Bt(Tl),
            Sl(),
            l = t.flags,
            (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128,
            t) : null;
        case 26:
        case 27:
        case 5:
            return Ee(t),
            null;
        case 31:
            if (t.memoizedState !== null) {
                if (at(t),
                t.alternate === null)
                    throw Error(v(340));
                xa()
            }
            return l = t.flags,
            l & 65536 ? (t.flags = l & -65537 | 128,
            t) : null;
        case 13:
            if (at(t),
            l = t.memoizedState,
            l !== null && l.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(v(340));
                xa()
            }
            return l = t.flags,
            l & 65536 ? (t.flags = l & -65537 | 128,
            t) : null;
        case 19:
            return T(bl),
            null;
        case 4:
            return Sl(),
            null;
        case 10:
            return Bt(t.type),
            null;
        case 22:
        case 23:
            return at(t),
            Xc(),
            l !== null && T(qa),
            l = t.flags,
            l & 65536 ? (t.flags = l & -65537 | 128,
            t) : null;
        case 24:
            return Bt(Tl),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function Xs(l, t) {
        switch (pc(t),
        t.tag) {
        case 3:
            Bt(Tl),
            Sl();
            break;
        case 26:
        case 27:
        case 5:
            Ee(t);
            break;
        case 4:
            Sl();
            break;
        case 31:
            t.memoizedState !== null && at(t);
            break;
        case 13:
            at(t);
            break;
        case 19:
            T(bl);
            break;
        case 10:
            Bt(t.type);
            break;
        case 22:
        case 23:
            at(t),
            Xc(),
            l !== null && T(qa);
            break;
        case 24:
            Bt(Tl)
        }
    }
    function ue(l, t) {
        try {
            var a = t.updateQueue
              , u = a !== null ? a.lastEffect : null;
            if (u !== null) {
                var e = u.next;
                a = e;
                do {
                    if ((a.tag & l) === l) {
                        u = void 0;
                        var n = a.create
                          , c = a.inst;
                        u = n(),
                        c.destroy = u
                    }
                    a = a.next
                } while (a !== e)
            }
        } catch (f) {
            ul(t, t.return, f)
        }
    }
    function sa(l, t, a) {
        try {
            var u = t.updateQueue
              , e = u !== null ? u.lastEffect : null;
            if (e !== null) {
                var n = e.next;
                u = n;
                do {
                    if ((u.tag & l) === l) {
                        var c = u.inst
                          , f = c.destroy;
                        if (f !== void 0) {
                            c.destroy = void 0,
                            e = t;
                            var i = a
                              , d = f;
                            try {
                                d()
                            } catch (r) {
                                ul(e, i, r)
                            }
                        }
                    }
                    u = u.next
                } while (u !== n)
            }
        } catch (r) {
            ul(t, t.return, r)
        }
    }
    function Qs(l) {
        var t = l.updateQueue;
        if (t !== null) {
            var a = l.stateNode;
            try {
                x0(t, a)
            } catch (u) {
                ul(l, l.return, u)
            }
        }
    }
    function Zs(l, t, a) {
        a.props = Ga(l.type, l.memoizedProps),
        a.state = l.memoizedState;
        try {
            a.componentWillUnmount()
        } catch (u) {
            ul(l, t, u)
        }
    }
    function ee(l, t) {
        try {
            var a = l.ref;
            if (a !== null) {
                switch (l.tag) {
                case 26:
                case 27:
                case 5:
                    var u = l.stateNode;
                    break;
                case 30:
                    u = l.stateNode;
                    break;
                default:
                    u = l.stateNode
                }
                typeof a == "function" ? l.refCleanup = a(u) : a.current = u
            }
        } catch (e) {
            ul(l, t, e)
        }
    }
    function Dt(l, t) {
        var a = l.ref
          , u = l.refCleanup;
        if (a !== null)
            if (typeof u == "function")
                try {
                    u()
                } catch (e) {
                    ul(l, t, e)
                } finally {
                    l.refCleanup = null,
                    l = l.alternate,
                    l != null && (l.refCleanup = null)
                }
            else if (typeof a == "function")
                try {
                    a(null)
                } catch (e) {
                    ul(l, t, e)
                }
            else
                a.current = null
    }
    function Vs(l) {
        var t = l.type
          , a = l.memoizedProps
          , u = l.stateNode;
        try {
            l: switch (t) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                a.autoFocus && u.focus();
                break l;
            case "img":
                a.src ? u.src = a.src : a.srcSet && (u.srcset = a.srcSet)
            }
        } catch (e) {
            ul(l, l.return, e)
        }
    }
    function bf(l, t, a) {
        try {
            var u = l.stateNode;
            Tm(u, l.type, a, t),
            u[Zl] = t
        } catch (e) {
            ul(l, l.return, e)
        }
    }
    function Ls(l) {
        return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && ga(l.type) || l.tag === 4
    }
    function zf(l) {
        l: for (; ; ) {
            for (; l.sibling === null; ) {
                if (l.return === null || Ls(l.return))
                    return null;
                l = l.return
            }
            for (l.sibling.return = l.return,
            l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
                if (l.tag === 27 && ga(l.type) || l.flags & 2 || l.child === null || l.tag === 4)
                    continue l;
                l.child.return = l,
                l = l.child
            }
            if (!(l.flags & 2))
                return l.stateNode
        }
    }
    function Tf(l, t, a) {
        var u = l.tag;
        if (u === 5 || u === 6)
            l = l.stateNode,
            t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(l, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a,
            t.appendChild(l),
            a = a._reactRootContainer,
            a != null || t.onclick !== null || (t.onclick = Rt));
        else if (u !== 4 && (u === 27 && ga(l.type) && (a = l.stateNode,
        t = null),
        l = l.child,
        l !== null))
            for (Tf(l, t, a),
            l = l.sibling; l !== null; )
                Tf(l, t, a),
                l = l.sibling
    }
    function dn(l, t, a) {
        var u = l.tag;
        if (u === 5 || u === 6)
            l = l.stateNode,
            t ? a.insertBefore(l, t) : a.appendChild(l);
        else if (u !== 4 && (u === 27 && ga(l.type) && (a = l.stateNode),
        l = l.child,
        l !== null))
            for (dn(l, t, a),
            l = l.sibling; l !== null; )
                dn(l, t, a),
                l = l.sibling
    }
    function Ks(l) {
        var t = l.stateNode
          , a = l.memoizedProps;
        try {
            for (var u = l.type, e = t.attributes; e.length; )
                t.removeAttributeNode(e[0]);
            Rl(t, u, a),
            t[Ul] = l,
            t[Zl] = a
        } catch (n) {
            ul(l, l.return, n)
        }
    }
    var Vt = !1
      , _l = !1
      , Ef = !1
      , Js = typeof WeakSet == "function" ? WeakSet : Set
      , Ol = null;
    function lm(l, t) {
        if (l = l.containerInfo,
        Vf = qn,
        l = e0(l),
        vc(l)) {
            if ("selectionStart"in l)
                var a = {
                    start: l.selectionStart,
                    end: l.selectionEnd
                };
            else
                l: {
                    a = (a = l.ownerDocument) && a.defaultView || window;
                    var u = a.getSelection && a.getSelection();
                    if (u && u.rangeCount !== 0) {
                        a = u.anchorNode;
                        var e = u.anchorOffset
                          , n = u.focusNode;
                        u = u.focusOffset;
                        try {
                            a.nodeType,
                            n.nodeType
                        } catch {
                            a = null;
                            break l
                        }
                        var c = 0
                          , f = -1
                          , i = -1
                          , d = 0
                          , r = 0
                          , z = l
                          , h = null;
                        t: for (; ; ) {
                            for (var g; z !== a || e !== 0 && z.nodeType !== 3 || (f = c + e),
                            z !== n || u !== 0 && z.nodeType !== 3 || (i = c + u),
                            z.nodeType === 3 && (c += z.nodeValue.length),
                            (g = z.firstChild) !== null; )
                                h = z,
                                z = g;
                            for (; ; ) {
                                if (z === l)
                                    break t;
                                if (h === a && ++d === e && (f = c),
                                h === n && ++r === u && (i = c),
                                (g = z.nextSibling) !== null)
                                    break;
                                z = h,
                                h = z.parentNode
                            }
                            z = g
                        }
                        a = f === -1 || i === -1 ? null : {
                            start: f,
                            end: i
                        }
                    } else
                        a = null
                }
            a = a || {
                start: 0,
                end: 0
            }
        } else
            a = null;
        for (Lf = {
            focusedElem: l,
            selectionRange: a
        },
        qn = !1,
        Ol = t; Ol !== null; )
            if (t = Ol,
            l = t.child,
            (t.subtreeFlags & 1028) !== 0 && l !== null)
                l.return = t,
                Ol = l;
            else
                for (; Ol !== null; ) {
                    switch (t = Ol,
                    n = t.alternate,
                    l = t.flags,
                    t.tag) {
                    case 0:
                        if ((l & 4) !== 0 && (l = t.updateQueue,
                        l = l !== null ? l.events : null,
                        l !== null))
                            for (a = 0; a < l.length; a++)
                                e = l[a],
                                e.ref.impl = e.nextImpl;
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((l & 1024) !== 0 && n !== null) {
                            l = void 0,
                            a = t,
                            e = n.memoizedProps,
                            n = n.memoizedState,
                            u = a.stateNode;
                            try {
                                var M = Ga(a.type, e);
                                l = u.getSnapshotBeforeUpdate(M, n),
                                u.__reactInternalSnapshotBeforeUpdate = l
                            } catch (H) {
                                ul(a, a.return, H)
                            }
                        }
                        break;
                    case 3:
                        if ((l & 1024) !== 0) {
                            if (l = t.stateNode.containerInfo,
                            a = l.nodeType,
                            a === 9)
                                wf(l);
                            else if (a === 1)
                                switch (l.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    wf(l);
                                    break;
                                default:
                                    l.textContent = ""
                                }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        if ((l & 1024) !== 0)
                            throw Error(v(163))
                    }
                    if (l = t.sibling,
                    l !== null) {
                        l.return = t.return,
                        Ol = l;
                        break
                    }
                    Ol = t.return
                }
    }
    function ws(l, t, a) {
        var u = a.flags;
        switch (a.tag) {
        case 0:
        case 11:
        case 15:
            Kt(l, a),
            u & 4 && ue(5, a);
            break;
        case 1:
            if (Kt(l, a),
            u & 4)
                if (l = a.stateNode,
                t === null)
                    try {
                        l.componentDidMount()
                    } catch (c) {
                        ul(a, a.return, c)
                    }
                else {
                    var e = Ga(a.type, t.memoizedProps);
                    t = t.memoizedState;
                    try {
                        l.componentDidUpdate(e, t, l.__reactInternalSnapshotBeforeUpdate)
                    } catch (c) {
                        ul(a, a.return, c)
                    }
                }
            u & 64 && Qs(a),
            u & 512 && ee(a, a.return);
            break;
        case 3:
            if (Kt(l, a),
            u & 64 && (l = a.updateQueue,
            l !== null)) {
                if (t = null,
                a.child !== null)
                    switch (a.child.tag) {
                    case 27:
                    case 5:
                        t = a.child.stateNode;
                        break;
                    case 1:
                        t = a.child.stateNode
                    }
                try {
                    x0(l, t)
                } catch (c) {
                    ul(a, a.return, c)
                }
            }
            break;
        case 27:
            t === null && u & 4 && Ks(a);
        case 26:
        case 5:
            Kt(l, a),
            t === null && u & 4 && Vs(a),
            u & 512 && ee(a, a.return);
            break;
        case 12:
            Kt(l, a);
            break;
        case 31:
            Kt(l, a),
            u & 4 && $s(l, a);
            break;
        case 13:
            Kt(l, a),
            u & 4 && Fs(l, a),
            u & 64 && (l = a.memoizedState,
            l !== null && (l = l.dehydrated,
            l !== null && (a = sm.bind(null, a),
            Um(l, a))));
            break;
        case 22:
            if (u = a.memoizedState !== null || Vt,
            !u) {
                t = t !== null && t.memoizedState !== null || _l,
                e = Vt;
                var n = _l;
                Vt = u,
                (_l = t) && !n ? Jt(l, a, (a.subtreeFlags & 8772) !== 0) : Kt(l, a),
                Vt = e,
                _l = n
            }
            break;
        case 30:
            break;
        default:
            Kt(l, a)
        }
    }
    function Ws(l) {
        var t = l.alternate;
        t !== null && (l.alternate = null,
        Ws(t)),
        l.child = null,
        l.deletions = null,
        l.sibling = null,
        l.tag === 5 && (t = l.stateNode,
        t !== null && Fn(t)),
        l.stateNode = null,
        l.return = null,
        l.dependencies = null,
        l.memoizedProps = null,
        l.memoizedState = null,
        l.pendingProps = null,
        l.stateNode = null,
        l.updateQueue = null
    }
    var dl = null
      , Ll = !1;
    function Lt(l, t, a) {
        for (a = a.child; a !== null; )
            ks(l, t, a),
            a = a.sibling
    }
    function ks(l, t, a) {
        if (Fl && typeof Fl.onCommitFiberUnmount == "function")
            try {
                Fl.onCommitFiberUnmount(Du, a)
            } catch {}
        switch (a.tag) {
        case 26:
            _l || Dt(a, t),
            Lt(l, t, a),
            a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode,
            a.parentNode.removeChild(a));
            break;
        case 27:
            _l || Dt(a, t);
            var u = dl
              , e = Ll;
            ga(a.type) && (dl = a.stateNode,
            Ll = !1),
            Lt(l, t, a),
            de(a.stateNode),
            dl = u,
            Ll = e;
            break;
        case 5:
            _l || Dt(a, t);
        case 6:
            if (u = dl,
            e = Ll,
            dl = null,
            Lt(l, t, a),
            dl = u,
            Ll = e,
            dl !== null)
                if (Ll)
                    try {
                        (dl.nodeType === 9 ? dl.body : dl.nodeName === "HTML" ? dl.ownerDocument.body : dl).removeChild(a.stateNode)
                    } catch (n) {
                        ul(a, t, n)
                    }
                else
                    try {
                        dl.removeChild(a.stateNode)
                    } catch (n) {
                        ul(a, t, n)
                    }
            break;
        case 18:
            dl !== null && (Ll ? (l = dl,
            Qy(l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, a.stateNode),
            Mu(l)) : Qy(dl, a.stateNode));
            break;
        case 4:
            u = dl,
            e = Ll,
            dl = a.stateNode.containerInfo,
            Ll = !0,
            Lt(l, t, a),
            dl = u,
            Ll = e;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            sa(2, a, t),
            _l || sa(4, a, t),
            Lt(l, t, a);
            break;
        case 1:
            _l || (Dt(a, t),
            u = a.stateNode,
            typeof u.componentWillUnmount == "function" && Zs(a, t, u)),
            Lt(l, t, a);
            break;
        case 21:
            Lt(l, t, a);
            break;
        case 22:
            _l = (u = _l) || a.memoizedState !== null,
            Lt(l, t, a),
            _l = u;
            break;
        default:
            Lt(l, t, a)
        }
    }
    function $s(l, t) {
        if (t.memoizedState === null && (l = t.alternate,
        l !== null && (l = l.memoizedState,
        l !== null))) {
            l = l.dehydrated;
            try {
                Mu(l)
            } catch (a) {
                ul(t, t.return, a)
            }
        }
    }
    function Fs(l, t) {
        if (t.memoizedState === null && (l = t.alternate,
        l !== null && (l = l.memoizedState,
        l !== null && (l = l.dehydrated,
        l !== null))))
            try {
                Mu(l)
            } catch (a) {
                ul(t, t.return, a)
            }
    }
    function tm(l) {
        switch (l.tag) {
        case 31:
        case 13:
        case 19:
            var t = l.stateNode;
            return t === null && (t = l.stateNode = new Js),
            t;
        case 22:
            return l = l.stateNode,
            t = l._retryCache,
            t === null && (t = l._retryCache = new Js),
            t;
        default:
            throw Error(v(435, l.tag))
        }
    }
    function vn(l, t) {
        var a = tm(l);
        t.forEach(function(u) {
            if (!a.has(u)) {
                a.add(u);
                var e = ym.bind(null, l, u);
                u.then(e, e)
            }
        })
    }
    function Kl(l, t) {
        var a = t.deletions;
        if (a !== null)
            for (var u = 0; u < a.length; u++) {
                var e = a[u]
                  , n = l
                  , c = t
                  , f = c;
                l: for (; f !== null; ) {
                    switch (f.tag) {
                    case 27:
                        if (ga(f.type)) {
                            dl = f.stateNode,
                            Ll = !1;
                            break l
                        }
                        break;
                    case 5:
                        dl = f.stateNode,
                        Ll = !1;
                        break l;
                    case 3:
                    case 4:
                        dl = f.stateNode.containerInfo,
                        Ll = !0;
                        break l
                    }
                    f = f.return
                }
                if (dl === null)
                    throw Error(v(160));
                ks(n, c, e),
                dl = null,
                Ll = !1,
                n = e.alternate,
                n !== null && (n.return = null),
                e.return = null
            }
        if (t.subtreeFlags & 13886)
            for (t = t.child; t !== null; )
                Is(t, l),
                t = t.sibling
    }
    var Tt = null;
    function Is(l, t) {
        var a = l.alternate
          , u = l.flags;
        switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            Kl(t, l),
            Jl(l),
            u & 4 && (sa(3, l, l.return),
            ue(3, l),
            sa(5, l, l.return));
            break;
        case 1:
            Kl(t, l),
            Jl(l),
            u & 512 && (_l || a === null || Dt(a, a.return)),
            u & 64 && Vt && (l = l.updateQueue,
            l !== null && (u = l.callbacks,
            u !== null && (a = l.shared.hiddenCallbacks,
            l.shared.hiddenCallbacks = a === null ? u : a.concat(u))));
            break;
        case 26:
            var e = Tt;
            if (Kl(t, l),
            Jl(l),
            u & 512 && (_l || a === null || Dt(a, a.return)),
            u & 4) {
                var n = a !== null ? a.memoizedState : null;
                if (u = l.memoizedState,
                a === null)
                    if (u === null)
                        if (l.stateNode === null) {
                            l: {
                                u = l.type,
                                a = l.memoizedProps,
                                e = e.ownerDocument || e;
                                t: switch (u) {
                                case "title":
                                    n = e.getElementsByTagName("title")[0],
                                    (!n || n[xu] || n[Ul] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = e.createElement(u),
                                    e.head.insertBefore(n, e.querySelector("head > title"))),
                                    Rl(n, u, a),
                                    n[Ul] = l,
                                    Ml(n),
                                    u = n;
                                    break l;
                                case "link":
                                    var c = Iy("link", "href", e).get(u + (a.href || ""));
                                    if (c) {
                                        for (var f = 0; f < c.length; f++)
                                            if (n = c[f],
                                            n.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && n.getAttribute("rel") === (a.rel == null ? null : a.rel) && n.getAttribute("title") === (a.title == null ? null : a.title) && n.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                                                c.splice(f, 1);
                                                break t
                                            }
                                    }
                                    n = e.createElement(u),
                                    Rl(n, u, a),
                                    e.head.appendChild(n);
                                    break;
                                case "meta":
                                    if (c = Iy("meta", "content", e).get(u + (a.content || ""))) {
                                        for (f = 0; f < c.length; f++)
                                            if (n = c[f],
                                            n.getAttribute("content") === (a.content == null ? null : "" + a.content) && n.getAttribute("name") === (a.name == null ? null : a.name) && n.getAttribute("property") === (a.property == null ? null : a.property) && n.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && n.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                                                c.splice(f, 1);
                                                break t
                                            }
                                    }
                                    n = e.createElement(u),
                                    Rl(n, u, a),
                                    e.head.appendChild(n);
                                    break;
                                default:
                                    throw Error(v(468, u))
                                }
                                n[Ul] = l,
                                Ml(n),
                                u = n
                            }
                            l.stateNode = u
                        } else
                            Py(e, l.type, l.stateNode);
                    else
                        l.stateNode = Fy(e, u, l.memoizedProps);
                else
                    n !== u ? (n === null ? a.stateNode !== null && (a = a.stateNode,
                    a.parentNode.removeChild(a)) : n.count--,
                    u === null ? Py(e, l.type, l.stateNode) : Fy(e, u, l.memoizedProps)) : u === null && l.stateNode !== null && bf(l, l.memoizedProps, a.memoizedProps)
            }
            break;
        case 27:
            Kl(t, l),
            Jl(l),
            u & 512 && (_l || a === null || Dt(a, a.return)),
            a !== null && u & 4 && bf(l, l.memoizedProps, a.memoizedProps);
            break;
        case 5:
            if (Kl(t, l),
            Jl(l),
            u & 512 && (_l || a === null || Dt(a, a.return)),
            l.flags & 32) {
                e = l.stateNode;
                try {
                    ka(e, "")
                } catch (M) {
                    ul(l, l.return, M)
                }
            }
            u & 4 && l.stateNode != null && (e = l.memoizedProps,
            bf(l, e, a !== null ? a.memoizedProps : e)),
            u & 1024 && (Ef = !0);
            break;
        case 6:
            if (Kl(t, l),
            Jl(l),
            u & 4) {
                if (l.stateNode === null)
                    throw Error(v(162));
                u = l.memoizedProps,
                a = l.stateNode;
                try {
                    a.nodeValue = u
                } catch (M) {
                    ul(l, l.return, M)
                }
            }
            break;
        case 3:
            if (Nn = null,
            e = Tt,
            Tt = Dn(t.containerInfo),
            Kl(t, l),
            Tt = e,
            Jl(l),
            u & 4 && a !== null && a.memoizedState.isDehydrated)
                try {
                    Mu(t.containerInfo)
                } catch (M) {
                    ul(l, l.return, M)
                }
            Ef && (Ef = !1,
            Ps(l));
            break;
        case 4:
            u = Tt,
            Tt = Dn(l.stateNode.containerInfo),
            Kl(t, l),
            Jl(l),
            Tt = u;
            break;
        case 12:
            Kl(t, l),
            Jl(l);
            break;
        case 31:
            Kl(t, l),
            Jl(l),
            u & 4 && (u = l.updateQueue,
            u !== null && (l.updateQueue = null,
            vn(l, u)));
            break;
        case 13:
            Kl(t, l),
            Jl(l),
            l.child.flags & 8192 && l.memoizedState !== null != (a !== null && a.memoizedState !== null) && (gn = $l()),
            u & 4 && (u = l.updateQueue,
            u !== null && (l.updateQueue = null,
            vn(l, u)));
            break;
        case 22:
            e = l.memoizedState !== null;
            var i = a !== null && a.memoizedState !== null
              , d = Vt
              , r = _l;
            if (Vt = d || e,
            _l = r || i,
            Kl(t, l),
            _l = r,
            Vt = d,
            Jl(l),
            u & 8192)
                l: for (t = l.stateNode,
                t._visibility = e ? t._visibility & -2 : t._visibility | 1,
                e && (a === null || i || Vt || _l || Xa(l)),
                a = null,
                t = l; ; ) {
                    if (t.tag === 5 || t.tag === 26) {
                        if (a === null) {
                            i = a = t;
                            try {
                                if (n = i.stateNode,
                                e)
                                    c = n.style,
                                    typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                                else {
                                    f = i.stateNode;
                                    var z = i.memoizedProps.style
                                      , h = z != null && z.hasOwnProperty("display") ? z.display : null;
                                    f.style.display = h == null || typeof h == "boolean" ? "" : ("" + h).trim()
                                }
                            } catch (M) {
                                ul(i, i.return, M)
                            }
                        }
                    } else if (t.tag === 6) {
                        if (a === null) {
                            i = t;
                            try {
                                i.stateNode.nodeValue = e ? "" : i.memoizedProps
                            } catch (M) {
                                ul(i, i.return, M)
                            }
                        }
                    } else if (t.tag === 18) {
                        if (a === null) {
                            i = t;
                            try {
                                var g = i.stateNode;
                                e ? Zy(g, !0) : Zy(i.stateNode, !1)
                            } catch (M) {
                                ul(i, i.return, M)
                            }
                        }
                    } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === l)
                        break l;
                    for (; t.sibling === null; ) {
                        if (t.return === null || t.return === l)
                            break l;
                        a === t && (a = null),
                        t = t.return
                    }
                    a === t && (a = null),
                    t.sibling.return = t.return,
                    t = t.sibling
                }
            u & 4 && (u = l.updateQueue,
            u !== null && (a = u.retryQueue,
            a !== null && (u.retryQueue = null,
            vn(l, a))));
            break;
        case 19:
            Kl(t, l),
            Jl(l),
            u & 4 && (u = l.updateQueue,
            u !== null && (l.updateQueue = null,
            vn(l, u)));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            Kl(t, l),
            Jl(l)
        }
    }
    function Jl(l) {
        var t = l.flags;
        if (t & 2) {
            try {
                for (var a, u = l.return; u !== null; ) {
                    if (Ls(u)) {
                        a = u;
                        break
                    }
                    u = u.return
                }
                if (a == null)
                    throw Error(v(160));
                switch (a.tag) {
                case 27:
                    var e = a.stateNode
                      , n = zf(l);
                    dn(l, n, e);
                    break;
                case 5:
                    var c = a.stateNode;
                    a.flags & 32 && (ka(c, ""),
                    a.flags &= -33);
                    var f = zf(l);
                    dn(l, f, c);
                    break;
                case 3:
                case 4:
                    var i = a.stateNode.containerInfo
                      , d = zf(l);
                    Tf(l, d, i);
                    break;
                default:
                    throw Error(v(161))
                }
            } catch (r) {
                ul(l, l.return, r)
            }
            l.flags &= -3
        }
        t & 4096 && (l.flags &= -4097)
    }
    function Ps(l) {
        if (l.subtreeFlags & 1024)
            for (l = l.child; l !== null; ) {
                var t = l;
                Ps(t),
                t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
                l = l.sibling
            }
    }
    function Kt(l, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null; )
                ws(l, t.alternate, t),
                t = t.sibling
    }
    function Xa(l) {
        for (l = l.child; l !== null; ) {
            var t = l;
            switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                sa(4, t, t.return),
                Xa(t);
                break;
            case 1:
                Dt(t, t.return);
                var a = t.stateNode;
                typeof a.componentWillUnmount == "function" && Zs(t, t.return, a),
                Xa(t);
                break;
            case 27:
                de(t.stateNode);
            case 26:
            case 5:
                Dt(t, t.return),
                Xa(t);
                break;
            case 22:
                t.memoizedState === null && Xa(t);
                break;
            case 30:
                Xa(t);
                break;
            default:
                Xa(t)
            }
            l = l.sibling
        }
    }
    function Jt(l, t, a) {
        for (a = a && (t.subtreeFlags & 8772) !== 0,
        t = t.child; t !== null; ) {
            var u = t.alternate
              , e = l
              , n = t
              , c = n.flags;
            switch (n.tag) {
            case 0:
            case 11:
            case 15:
                Jt(e, n, a),
                ue(4, n);
                break;
            case 1:
                if (Jt(e, n, a),
                u = n,
                e = u.stateNode,
                typeof e.componentDidMount == "function")
                    try {
                        e.componentDidMount()
                    } catch (d) {
                        ul(u, u.return, d)
                    }
                if (u = n,
                e = u.updateQueue,
                e !== null) {
                    var f = u.stateNode;
                    try {
                        var i = e.shared.hiddenCallbacks;
                        if (i !== null)
                            for (e.shared.hiddenCallbacks = null,
                            e = 0; e < i.length; e++)
                                N0(i[e], f)
                    } catch (d) {
                        ul(u, u.return, d)
                    }
                }
                a && c & 64 && Qs(n),
                ee(n, n.return);
                break;
            case 27:
                Ks(n);
            case 26:
            case 5:
                Jt(e, n, a),
                a && u === null && c & 4 && Vs(n),
                ee(n, n.return);
                break;
            case 12:
                Jt(e, n, a);
                break;
            case 31:
                Jt(e, n, a),
                a && c & 4 && $s(e, n);
                break;
            case 13:
                Jt(e, n, a),
                a && c & 4 && Fs(e, n);
                break;
            case 22:
                n.memoizedState === null && Jt(e, n, a),
                ee(n, n.return);
                break;
            case 30:
                break;
            default:
                Jt(e, n, a)
            }
            t = t.sibling
        }
    }
    function Af(l, t) {
        var a = null;
        l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool),
        l = null,
        t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool),
        l !== a && (l != null && l.refCount++,
        a != null && Lu(a))
    }
    function _f(l, t) {
        l = null,
        t.alternate !== null && (l = t.alternate.memoizedState.cache),
        t = t.memoizedState.cache,
        t !== l && (t.refCount++,
        l != null && Lu(l))
    }
    function Et(l, t, a, u) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
                ly(l, t, a, u),
                t = t.sibling
    }
    function ly(l, t, a, u) {
        var e = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            Et(l, t, a, u),
            e & 2048 && ue(9, t);
            break;
        case 1:
            Et(l, t, a, u);
            break;
        case 3:
            Et(l, t, a, u),
            e & 2048 && (l = null,
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            t = t.memoizedState.cache,
            t !== l && (t.refCount++,
            l != null && Lu(l)));
            break;
        case 12:
            if (e & 2048) {
                Et(l, t, a, u),
                l = t.stateNode;
                try {
                    var n = t.memoizedProps
                      , c = n.id
                      , f = n.onPostCommit;
                    typeof f == "function" && f(c, t.alternate === null ? "mount" : "update", l.passiveEffectDuration, -0)
                } catch (i) {
                    ul(t, t.return, i)
                }
            } else
                Et(l, t, a, u);
            break;
        case 31:
            Et(l, t, a, u);
            break;
        case 13:
            Et(l, t, a, u);
            break;
        case 23:
            break;
        case 22:
            n = t.stateNode,
            c = t.alternate,
            t.memoizedState !== null ? n._visibility & 2 ? Et(l, t, a, u) : ne(l, t) : n._visibility & 2 ? Et(l, t, a, u) : (n._visibility |= 2,
            hu(l, t, a, u, (t.subtreeFlags & 10256) !== 0 || !1)),
            e & 2048 && Af(c, t);
            break;
        case 24:
            Et(l, t, a, u),
            e & 2048 && _f(t.alternate, t);
            break;
        default:
            Et(l, t, a, u)
        }
    }
    function hu(l, t, a, u, e) {
        for (e = e && ((t.subtreeFlags & 10256) !== 0 || !1),
        t = t.child; t !== null; ) {
            var n = l
              , c = t
              , f = a
              , i = u
              , d = c.flags;
            switch (c.tag) {
            case 0:
            case 11:
            case 15:
                hu(n, c, f, i, e),
                ue(8, c);
                break;
            case 23:
                break;
            case 22:
                var r = c.stateNode;
                c.memoizedState !== null ? r._visibility & 2 ? hu(n, c, f, i, e) : ne(n, c) : (r._visibility |= 2,
                hu(n, c, f, i, e)),
                e && d & 2048 && Af(c.alternate, c);
                break;
            case 24:
                hu(n, c, f, i, e),
                e && d & 2048 && _f(c.alternate, c);
                break;
            default:
                hu(n, c, f, i, e)
            }
            t = t.sibling
        }
    }
    function ne(l, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; ) {
                var a = l
                  , u = t
                  , e = u.flags;
                switch (u.tag) {
                case 22:
                    ne(a, u),
                    e & 2048 && Af(u.alternate, u);
                    break;
                case 24:
                    ne(a, u),
                    e & 2048 && _f(u.alternate, u);
                    break;
                default:
                    ne(a, u)
                }
                t = t.sibling
            }
    }
    var ce = 8192;
    function gu(l, t, a) {
        if (l.subtreeFlags & ce)
            for (l = l.child; l !== null; )
                ty(l, t, a),
                l = l.sibling
    }
    function ty(l, t, a) {
        switch (l.tag) {
        case 26:
            gu(l, t, a),
            l.flags & ce && l.memoizedState !== null && Qm(a, Tt, l.memoizedState, l.memoizedProps);
            break;
        case 5:
            gu(l, t, a);
            break;
        case 3:
        case 4:
            var u = Tt;
            Tt = Dn(l.stateNode.containerInfo),
            gu(l, t, a),
            Tt = u;
            break;
        case 22:
            l.memoizedState === null && (u = l.alternate,
            u !== null && u.memoizedState !== null ? (u = ce,
            ce = 16777216,
            gu(l, t, a),
            ce = u) : gu(l, t, a));
            break;
        default:
            gu(l, t, a)
        }
    }
    function ay(l) {
        var t = l.alternate;
        if (t !== null && (l = t.child,
        l !== null)) {
            t.child = null;
            do
                t = l.sibling,
                l.sibling = null,
                l = t;
            while (l !== null)
        }
    }
    function fe(l) {
        var t = l.deletions;
        if ((l.flags & 16) !== 0) {
            if (t !== null)
                for (var a = 0; a < t.length; a++) {
                    var u = t[a];
                    Ol = u,
                    ey(u, l)
                }
            ay(l)
        }
        if (l.subtreeFlags & 10256)
            for (l = l.child; l !== null; )
                uy(l),
                l = l.sibling
    }
    function uy(l) {
        switch (l.tag) {
        case 0:
        case 11:
        case 15:
            fe(l),
            l.flags & 2048 && sa(9, l, l.return);
            break;
        case 3:
            fe(l);
            break;
        case 12:
            fe(l);
            break;
        case 22:
            var t = l.stateNode;
            l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3,
            hn(l)) : fe(l);
            break;
        default:
            fe(l)
        }
    }
    function hn(l) {
        var t = l.deletions;
        if ((l.flags & 16) !== 0) {
            if (t !== null)
                for (var a = 0; a < t.length; a++) {
                    var u = t[a];
                    Ol = u,
                    ey(u, l)
                }
            ay(l)
        }
        for (l = l.child; l !== null; ) {
            switch (t = l,
            t.tag) {
            case 0:
            case 11:
            case 15:
                sa(8, t, t.return),
                hn(t);
                break;
            case 22:
                a = t.stateNode,
                a._visibility & 2 && (a._visibility &= -3,
                hn(t));
                break;
            default:
                hn(t)
            }
            l = l.sibling
        }
    }
    function ey(l, t) {
        for (; Ol !== null; ) {
            var a = Ol;
            switch (a.tag) {
            case 0:
            case 11:
            case 15:
                sa(8, a, t);
                break;
            case 23:
            case 22:
                if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
                    var u = a.memoizedState.cachePool.pool;
                    u != null && u.refCount++
                }
                break;
            case 24:
                Lu(a.memoizedState.cache)
            }
            if (u = a.child,
            u !== null)
                u.return = a,
                Ol = u;
            else
                l: for (a = l; Ol !== null; ) {
                    u = Ol;
                    var e = u.sibling
                      , n = u.return;
                    if (Ws(u),
                    u === a) {
                        Ol = null;
                        break l
                    }
                    if (e !== null) {
                        e.return = n,
                        Ol = e;
                        break l
                    }
                    Ol = n
                }
        }
    }
    var am = {
        getCacheForType: function(l) {
            var t = xl(Tl)
              , a = t.data.get(l);
            return a === void 0 && (a = l(),
            t.data.set(l, a)),
            a
        },
        cacheSignal: function() {
            return xl(Tl).controller.signal
        }
    }
      , um = typeof WeakMap == "function" ? WeakMap : Map
      , P = 0
      , yl = null
      , K = null
      , w = 0
      , al = 0
      , ut = null
      , ya = !1
      , ru = !1
      , pf = !1
      , wt = 0
      , hl = 0
      , oa = 0
      , Qa = 0
      , Mf = 0
      , et = 0
      , Su = 0
      , ie = null
      , wl = null
      , Of = !1
      , gn = 0
      , ny = 0
      , rn = 1 / 0
      , Sn = null
      , ma = null
      , pl = 0
      , da = null
      , bu = null
      , Wt = 0
      , Df = 0
      , Uf = null
      , cy = null
      , se = 0
      , Nf = null;
    function nt() {
        return (P & 2) !== 0 && w !== 0 ? w & -w : S.T !== null ? jf() : Ei()
    }
    function fy() {
        if (et === 0)
            if ((w & 536870912) === 0 || $) {
                var l = pe;
                pe <<= 1,
                (pe & 3932160) === 0 && (pe = 262144),
                et = l
            } else
                et = 536870912;
        return l = tt.current,
        l !== null && (l.flags |= 32),
        et
    }
    function Wl(l, t, a) {
        (l === yl && (al === 2 || al === 9) || l.cancelPendingCommit !== null) && (zu(l, 0),
        va(l, w, et, !1)),
        Nu(l, a),
        ((P & 2) === 0 || l !== yl) && (l === yl && ((P & 2) === 0 && (Qa |= a),
        hl === 4 && va(l, w, et, !1)),
        Ut(l))
    }
    function iy(l, t, a) {
        if ((P & 6) !== 0)
            throw Error(v(327));
        var u = !a && (t & 127) === 0 && (t & l.expiredLanes) === 0 || Uu(l, t)
          , e = u ? cm(l, t) : Hf(l, t, !0)
          , n = u;
        do {
            if (e === 0) {
                ru && !u && va(l, t, 0, !1);
                break
            } else {
                if (a = l.current.alternate,
                n && !em(a)) {
                    e = Hf(l, t, !1),
                    n = !1;
                    continue
                }
                if (e === 2) {
                    if (n = t,
                    l.errorRecoveryDisabledLanes & n)
                        var c = 0;
                    else
                        c = l.pendingLanes & -536870913,
                        c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
                    if (c !== 0) {
                        t = c;
                        l: {
                            var f = l;
                            e = ie;
                            var i = f.current.memoizedState.isDehydrated;
                            if (i && (zu(f, c).flags |= 256),
                            c = Hf(f, c, !1),
                            c !== 2) {
                                if (pf && !i) {
                                    f.errorRecoveryDisabledLanes |= n,
                                    Qa |= n,
                                    e = 4;
                                    break l
                                }
                                n = wl,
                                wl = e,
                                n !== null && (wl === null ? wl = n : wl.push.apply(wl, n))
                            }
                            e = c
                        }
                        if (n = !1,
                        e !== 2)
                            continue
                    }
                }
                if (e === 1) {
                    zu(l, 0),
                    va(l, t, 0, !0);
                    break
                }
                l: {
                    switch (u = l,
                    n = e,
                    n) {
                    case 0:
                    case 1:
                        throw Error(v(345));
                    case 4:
                        if ((t & 4194048) !== t)
                            break;
                    case 6:
                        va(u, t, et, !ya);
                        break l;
                    case 2:
                        wl = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(v(329))
                    }
                    if ((t & 62914560) === t && (e = gn + 300 - $l(),
                    10 < e)) {
                        if (va(u, t, et, !ya),
                        Oe(u, 0, !0) !== 0)
                            break l;
                        Wt = t,
                        u.timeoutHandle = Gy(sy.bind(null, u, a, wl, Sn, Of, t, et, Qa, Su, ya, n, "Throttled", -0, 0), e);
                        break l
                    }
                    sy(u, a, wl, Sn, Of, t, et, Qa, Su, ya, n, null, -0, 0)
                }
            }
            break
        } while (!0);
        Ut(l)
    }
    function sy(l, t, a, u, e, n, c, f, i, d, r, z, h, g) {
        if (l.timeoutHandle = -1,
        z = t.subtreeFlags,
        z & 8192 || (z & 16785408) === 16785408) {
            z = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: Rt
            },
            ty(t, n, z);
            var M = (n & 62914560) === n ? gn - $l() : (n & 4194048) === n ? ny - $l() : 0;
            if (M = Zm(z, M),
            M !== null) {
                Wt = n,
                l.cancelPendingCommit = M(ry.bind(null, l, t, n, a, u, e, c, f, i, r, z, null, h, g)),
                va(l, n, c, !d);
                return
            }
        }
        ry(l, t, n, a, u, e, c, f, i)
    }
    function em(l) {
        for (var t = l; ; ) {
            var a = t.tag;
            if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue,
            a !== null && (a = a.stores,
            a !== null)))
                for (var u = 0; u < a.length; u++) {
                    var e = a[u]
                      , n = e.getSnapshot;
                    e = e.value;
                    try {
                        if (!Pl(n(), e))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (a = t.child,
            t.subtreeFlags & 16384 && a !== null)
                a.return = t,
                t = a;
            else {
                if (t === l)
                    break;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === l)
                        return !0;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        }
        return !0
    }
    function va(l, t, a, u) {
        t &= ~Mf,
        t &= ~Qa,
        l.suspendedLanes |= t,
        l.pingedLanes &= ~t,
        u && (l.warmLanes |= t),
        u = l.expirationTimes;
        for (var e = t; 0 < e; ) {
            var n = 31 - Il(e)
              , c = 1 << n;
            u[n] = -1,
            e &= ~c
        }
        a !== 0 && bi(l, a, t)
    }
    function bn() {
        return (P & 6) === 0 ? (ye(0),
        !1) : !0
    }
    function xf() {
        if (K !== null) {
            if (al === 0)
                var l = K.return;
            else
                l = K,
                Yt = Ha = null,
                Jc(l),
                yu = null,
                Ju = 0,
                l = K;
            for (; l !== null; )
                Xs(l.alternate, l),
                l = l.return;
            K = null
        }
    }
    function zu(l, t) {
        var a = l.timeoutHandle;
        a !== -1 && (l.timeoutHandle = -1,
        _m(a)),
        a = l.cancelPendingCommit,
        a !== null && (l.cancelPendingCommit = null,
        a()),
        Wt = 0,
        xf(),
        yl = l,
        K = a = Ct(l.current, null),
        w = t,
        al = 0,
        ut = null,
        ya = !1,
        ru = Uu(l, t),
        pf = !1,
        Su = et = Mf = Qa = oa = hl = 0,
        wl = ie = null,
        Of = !1,
        (t & 8) !== 0 && (t |= t & 32);
        var u = l.entangledLanes;
        if (u !== 0)
            for (l = l.entanglements,
            u &= t; 0 < u; ) {
                var e = 31 - Il(u)
                  , n = 1 << e;
                t |= l[e],
                u &= ~n
            }
        return wt = t,
        Ge(),
        a
    }
    function yy(l, t) {
        B = null,
        S.H = le,
        t === su || t === we ? (t = M0(),
        al = 3) : t === qc ? (t = M0(),
        al = 4) : al = t === sf ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1,
        ut = t,
        K === null && (hl = 1,
        fn(l, yt(t, l.current)))
    }
    function oy() {
        var l = tt.current;
        return l === null ? !0 : (w & 4194048) === w ? vt === null : (w & 62914560) === w || (w & 536870912) !== 0 ? l === vt : !1
    }
    function my() {
        var l = S.H;
        return S.H = le,
        l === null ? le : l
    }
    function dy() {
        var l = S.A;
        return S.A = am,
        l
    }
    function zn() {
        hl = 4,
        ya || (w & 4194048) !== w && tt.current !== null || (ru = !0),
        (oa & 134217727) === 0 && (Qa & 134217727) === 0 || yl === null || va(yl, w, et, !1)
    }
    function Hf(l, t, a) {
        var u = P;
        P |= 2;
        var e = my()
          , n = dy();
        (yl !== l || w !== t) && (Sn = null,
        zu(l, t)),
        t = !1;
        var c = hl;
        l: do
            try {
                if (al !== 0 && K !== null) {
                    var f = K
                      , i = ut;
                    switch (al) {
                    case 8:
                        xf(),
                        c = 6;
                        break l;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        tt.current === null && (t = !0);
                        var d = al;
                        if (al = 0,
                        ut = null,
                        Tu(l, f, i, d),
                        a && ru) {
                            c = 0;
                            break l
                        }
                        break;
                    default:
                        d = al,
                        al = 0,
                        ut = null,
                        Tu(l, f, i, d)
                    }
                }
                nm(),
                c = hl;
                break
            } catch (r) {
                yy(l, r)
            }
        while (!0);
        return t && l.shellSuspendCounter++,
        Yt = Ha = null,
        P = u,
        S.H = e,
        S.A = n,
        K === null && (yl = null,
        w = 0,
        Ge()),
        c
    }
    function nm() {
        for (; K !== null; )
            vy(K)
    }
    function cm(l, t) {
        var a = P;
        P |= 2;
        var u = my()
          , e = dy();
        yl !== l || w !== t ? (Sn = null,
        rn = $l() + 500,
        zu(l, t)) : ru = Uu(l, t);
        l: do
            try {
                if (al !== 0 && K !== null) {
                    t = K;
                    var n = ut;
                    t: switch (al) {
                    case 1:
                        al = 0,
                        ut = null,
                        Tu(l, t, n, 1);
                        break;
                    case 2:
                    case 9:
                        if (_0(n)) {
                            al = 0,
                            ut = null,
                            hy(t);
                            break
                        }
                        t = function() {
                            al !== 2 && al !== 9 || yl !== l || (al = 7),
                            Ut(l)
                        }
                        ,
                        n.then(t, t);
                        break l;
                    case 3:
                        al = 7;
                        break l;
                    case 4:
                        al = 5;
                        break l;
                    case 7:
                        _0(n) ? (al = 0,
                        ut = null,
                        hy(t)) : (al = 0,
                        ut = null,
                        Tu(l, t, n, 7));
                        break;
                    case 5:
                        var c = null;
                        switch (K.tag) {
                        case 26:
                            c = K.memoizedState;
                        case 5:
                        case 27:
                            var f = K;
                            if (c ? lo(c) : f.stateNode.complete) {
                                al = 0,
                                ut = null;
                                var i = f.sibling;
                                if (i !== null)
                                    K = i;
                                else {
                                    var d = f.return;
                                    d !== null ? (K = d,
                                    Tn(d)) : K = null
                                }
                                break t
                            }
                        }
                        al = 0,
                        ut = null,
                        Tu(l, t, n, 5);
                        break;
                    case 6:
                        al = 0,
                        ut = null,
                        Tu(l, t, n, 6);
                        break;
                    case 8:
                        xf(),
                        hl = 6;
                        break l;
                    default:
                        throw Error(v(462))
                    }
                }
                fm();
                break
            } catch (r) {
                yy(l, r)
            }
        while (!0);
        return Yt = Ha = null,
        S.H = u,
        S.A = e,
        P = a,
        K !== null ? 0 : (yl = null,
        w = 0,
        Ge(),
        hl)
    }
    function fm() {
        for (; K !== null && !No(); )
            vy(K)
    }
    function vy(l) {
        var t = Bs(l.alternate, l, wt);
        l.memoizedProps = l.pendingProps,
        t === null ? Tn(l) : K = t
    }
    function hy(l) {
        var t = l
          , a = t.alternate;
        switch (t.tag) {
        case 15:
        case 0:
            t = Hs(a, t, t.pendingProps, t.type, void 0, w);
            break;
        case 11:
            t = Hs(a, t, t.pendingProps, t.type.render, t.ref, w);
            break;
        case 5:
            Jc(t);
        default:
            Xs(a, t),
            t = K = d0(t, wt),
            t = Bs(a, t, wt)
        }
        l.memoizedProps = l.pendingProps,
        t === null ? Tn(l) : K = t
    }
    function Tu(l, t, a, u) {
        Yt = Ha = null,
        Jc(t),
        yu = null,
        Ju = 0;
        var e = t.return;
        try {
            if (k1(l, e, t, a, w)) {
                hl = 1,
                fn(l, yt(a, l.current)),
                K = null;
                return
            }
        } catch (n) {
            if (e !== null)
                throw K = e,
                n;
            hl = 1,
            fn(l, yt(a, l.current)),
            K = null;
            return
        }
        t.flags & 32768 ? ($ || u === 1 ? l = !0 : ru || (w & 536870912) !== 0 ? l = !1 : (ya = l = !0,
        (u === 2 || u === 9 || u === 3 || u === 6) && (u = tt.current,
        u !== null && u.tag === 13 && (u.flags |= 16384))),
        gy(t, l)) : Tn(t)
    }
    function Tn(l) {
        var t = l;
        do {
            if ((t.flags & 32768) !== 0) {
                gy(t, ya);
                return
            }
            l = t.return;
            var a = I1(t.alternate, t, wt);
            if (a !== null) {
                K = a;
                return
            }
            if (t = t.sibling,
            t !== null) {
                K = t;
                return
            }
            K = t = l
        } while (t !== null);
        hl === 0 && (hl = 5)
    }
    function gy(l, t) {
        do {
            var a = P1(l.alternate, l);
            if (a !== null) {
                a.flags &= 32767,
                K = a;
                return
            }
            if (a = l.return,
            a !== null && (a.flags |= 32768,
            a.subtreeFlags = 0,
            a.deletions = null),
            !t && (l = l.sibling,
            l !== null)) {
                K = l;
                return
            }
            K = l = a
        } while (l !== null);
        hl = 6,
        K = null
    }
    function ry(l, t, a, u, e, n, c, f, i) {
        l.cancelPendingCommit = null;
        do
            En();
        while (pl !== 0);
        if ((P & 6) !== 0)
            throw Error(v(327));
        if (t !== null) {
            if (t === l.current)
                throw Error(v(177));
            if (n = t.lanes | t.childLanes,
            n |= bc,
            Xo(l, a, n, c, f, i),
            l === yl && (K = yl = null,
            w = 0),
            bu = t,
            da = l,
            Wt = a,
            Df = n,
            Uf = e,
            cy = u,
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null,
            l.callbackPriority = 0,
            om(Ae, function() {
                return Ey(),
                null
            })) : (l.callbackNode = null,
            l.callbackPriority = 0),
            u = (t.flags & 13878) !== 0,
            (t.subtreeFlags & 13878) !== 0 || u) {
                u = S.T,
                S.T = null,
                e = _.p,
                _.p = 2,
                c = P,
                P |= 4;
                try {
                    lm(l, t, a)
                } finally {
                    P = c,
                    _.p = e,
                    S.T = u
                }
            }
            pl = 1,
            Sy(),
            by(),
            zy()
        }
    }
    function Sy() {
        if (pl === 1) {
            pl = 0;
            var l = da
              , t = bu
              , a = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || a) {
                a = S.T,
                S.T = null;
                var u = _.p;
                _.p = 2;
                var e = P;
                P |= 4;
                try {
                    Is(t, l);
                    var n = Lf
                      , c = e0(l.containerInfo)
                      , f = n.focusedElem
                      , i = n.selectionRange;
                    if (c !== f && f && f.ownerDocument && u0(f.ownerDocument.documentElement, f)) {
                        if (i !== null && vc(f)) {
                            var d = i.start
                              , r = i.end;
                            if (r === void 0 && (r = d),
                            "selectionStart"in f)
                                f.selectionStart = d,
                                f.selectionEnd = Math.min(r, f.value.length);
                            else {
                                var z = f.ownerDocument || document
                                  , h = z && z.defaultView || window;
                                if (h.getSelection) {
                                    var g = h.getSelection()
                                      , M = f.textContent.length
                                      , H = Math.min(i.start, M)
                                      , fl = i.end === void 0 ? H : Math.min(i.end, M);
                                    !g.extend && H > fl && (c = fl,
                                    fl = H,
                                    H = c);
                                    var o = a0(f, H)
                                      , s = a0(f, fl);
                                    if (o && s && (g.rangeCount !== 1 || g.anchorNode !== o.node || g.anchorOffset !== o.offset || g.focusNode !== s.node || g.focusOffset !== s.offset)) {
                                        var m = z.createRange();
                                        m.setStart(o.node, o.offset),
                                        g.removeAllRanges(),
                                        H > fl ? (g.addRange(m),
                                        g.extend(s.node, s.offset)) : (m.setEnd(s.node, s.offset),
                                        g.addRange(m))
                                    }
                                }
                            }
                        }
                        for (z = [],
                        g = f; g = g.parentNode; )
                            g.nodeType === 1 && z.push({
                                element: g,
                                left: g.scrollLeft,
                                top: g.scrollTop
                            });
                        for (typeof f.focus == "function" && f.focus(),
                        f = 0; f < z.length; f++) {
                            var b = z[f];
                            b.element.scrollLeft = b.left,
                            b.element.scrollTop = b.top
                        }
                    }
                    qn = !!Vf,
                    Lf = Vf = null
                } finally {
                    P = e,
                    _.p = u,
                    S.T = a
                }
            }
            l.current = t,
            pl = 2
        }
    }
    function by() {
        if (pl === 2) {
            pl = 0;
            var l = da
              , t = bu
              , a = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || a) {
                a = S.T,
                S.T = null;
                var u = _.p;
                _.p = 2;
                var e = P;
                P |= 4;
                try {
                    ws(l, t.alternate, t)
                } finally {
                    P = e,
                    _.p = u,
                    S.T = a
                }
            }
            pl = 3
        }
    }
    function zy() {
        if (pl === 4 || pl === 3) {
            pl = 0,
            xo();
            var l = da
              , t = bu
              , a = Wt
              , u = cy;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? pl = 5 : (pl = 0,
            bu = da = null,
            Ty(l, l.pendingLanes));
            var e = l.pendingLanes;
            if (e === 0 && (ma = null),
            kn(a),
            t = t.stateNode,
            Fl && typeof Fl.onCommitFiberRoot == "function")
                try {
                    Fl.onCommitFiberRoot(Du, t, void 0, (t.current.flags & 128) === 128)
                } catch {}
            if (u !== null) {
                t = S.T,
                e = _.p,
                _.p = 2,
                S.T = null;
                try {
                    for (var n = l.onRecoverableError, c = 0; c < u.length; c++) {
                        var f = u[c];
                        n(f.value, {
                            componentStack: f.stack
                        })
                    }
                } finally {
                    S.T = t,
                    _.p = e
                }
            }
            (Wt & 3) !== 0 && En(),
            Ut(l),
            e = l.pendingLanes,
            (a & 261930) !== 0 && (e & 42) !== 0 ? l === Nf ? se++ : (se = 0,
            Nf = l) : se = 0,
            ye(0)
        }
    }
    function Ty(l, t) {
        (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache,
        t != null && (l.pooledCache = null,
        Lu(t)))
    }
    function En() {
        return Sy(),
        by(),
        zy(),
        Ey()
    }
    function Ey() {
        if (pl !== 5)
            return !1;
        var l = da
          , t = Df;
        Df = 0;
        var a = kn(Wt)
          , u = S.T
          , e = _.p;
        try {
            _.p = 32 > a ? 32 : a,
            S.T = null,
            a = Uf,
            Uf = null;
            var n = da
              , c = Wt;
            if (pl = 0,
            bu = da = null,
            Wt = 0,
            (P & 6) !== 0)
                throw Error(v(331));
            var f = P;
            if (P |= 4,
            uy(n.current),
            ly(n, n.current, c, a),
            P = f,
            ye(0, !1),
            Fl && typeof Fl.onPostCommitFiberRoot == "function")
                try {
                    Fl.onPostCommitFiberRoot(Du, n)
                } catch {}
            return !0
        } finally {
            _.p = e,
            S.T = u,
            Ty(l, t)
        }
    }
    function Ay(l, t, a) {
        t = yt(a, t),
        t = ff(l.stateNode, t, 2),
        l = ca(l, t, 2),
        l !== null && (Nu(l, 2),
        Ut(l))
    }
    function ul(l, t, a) {
        if (l.tag === 3)
            Ay(l, l, a);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    Ay(t, l, a);
                    break
                } else if (t.tag === 1) {
                    var u = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (ma === null || !ma.has(u))) {
                        l = yt(a, l),
                        a = _s(2),
                        u = ca(t, a, 2),
                        u !== null && (ps(a, u, t, l),
                        Nu(u, 2),
                        Ut(u));
                        break
                    }
                }
                t = t.return
            }
    }
    function Rf(l, t, a) {
        var u = l.pingCache;
        if (u === null) {
            u = l.pingCache = new um;
            var e = new Set;
            u.set(t, e)
        } else
            e = u.get(t),
            e === void 0 && (e = new Set,
            u.set(t, e));
        e.has(a) || (pf = !0,
        e.add(a),
        l = im.bind(null, l, t, a),
        t.then(l, l))
    }
    function im(l, t, a) {
        var u = l.pingCache;
        u !== null && u.delete(t),
        l.pingedLanes |= l.suspendedLanes & a,
        l.warmLanes &= ~a,
        yl === l && (w & a) === a && (hl === 4 || hl === 3 && (w & 62914560) === w && 300 > $l() - gn ? (P & 2) === 0 && zu(l, 0) : Mf |= a,
        Su === w && (Su = 0)),
        Ut(l)
    }
    function _y(l, t) {
        t === 0 && (t = Si()),
        l = Ua(l, t),
        l !== null && (Nu(l, t),
        Ut(l))
    }
    function sm(l) {
        var t = l.memoizedState
          , a = 0;
        t !== null && (a = t.retryLane),
        _y(l, a)
    }
    function ym(l, t) {
        var a = 0;
        switch (l.tag) {
        case 31:
        case 13:
            var u = l.stateNode
              , e = l.memoizedState;
            e !== null && (a = e.retryLane);
            break;
        case 19:
            u = l.stateNode;
            break;
        case 22:
            u = l.stateNode._retryCache;
            break;
        default:
            throw Error(v(314))
        }
        u !== null && u.delete(t),
        _y(l, a)
    }
    function om(l, t) {
        return Kn(l, t)
    }
    var An = null
      , Eu = null
      , qf = !1
      , _n = !1
      , Cf = !1
      , ha = 0;
    function Ut(l) {
        l !== Eu && l.next === null && (Eu === null ? An = Eu = l : Eu = Eu.next = l),
        _n = !0,
        qf || (qf = !0,
        dm())
    }
    function ye(l, t) {
        if (!Cf && _n) {
            Cf = !0;
            do
                for (var a = !1, u = An; u !== null; ) {
                    if (l !== 0) {
                        var e = u.pendingLanes;
                        if (e === 0)
                            var n = 0;
                        else {
                            var c = u.suspendedLanes
                              , f = u.pingedLanes;
                            n = (1 << 31 - Il(42 | l) + 1) - 1,
                            n &= e & ~(c & ~f),
                            n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0
                        }
                        n !== 0 && (a = !0,
                        Dy(u, n))
                    } else
                        n = w,
                        n = Oe(u, u === yl ? n : 0, u.cancelPendingCommit !== null || u.timeoutHandle !== -1),
                        (n & 3) === 0 || Uu(u, n) || (a = !0,
                        Dy(u, n));
                    u = u.next
                }
            while (a);
            Cf = !1
        }
    }
    function mm() {
        py()
    }
    function py() {
        _n = qf = !1;
        var l = 0;
        ha !== 0 && Am() && (l = ha);
        for (var t = $l(), a = null, u = An; u !== null; ) {
            var e = u.next
              , n = My(u, t);
            n === 0 ? (u.next = null,
            a === null ? An = e : a.next = e,
            e === null && (Eu = a)) : (a = u,
            (l !== 0 || (n & 3) !== 0) && (_n = !0)),
            u = e
        }
        pl !== 0 && pl !== 5 || ye(l),
        ha !== 0 && (ha = 0)
    }
    function My(l, t) {
        for (var a = l.suspendedLanes, u = l.pingedLanes, e = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
            var c = 31 - Il(n)
              , f = 1 << c
              , i = e[c];
            i === -1 ? ((f & a) === 0 || (f & u) !== 0) && (e[c] = Go(f, t)) : i <= t && (l.expiredLanes |= f),
            n &= ~f
        }
        if (t = yl,
        a = w,
        a = Oe(l, l === t ? a : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1),
        u = l.callbackNode,
        a === 0 || l === t && (al === 2 || al === 9) || l.cancelPendingCommit !== null)
            return u !== null && u !== null && Jn(u),
            l.callbackNode = null,
            l.callbackPriority = 0;
        if ((a & 3) === 0 || Uu(l, a)) {
            if (t = a & -a,
            t === l.callbackPriority)
                return t;
            switch (u !== null && Jn(u),
            kn(a)) {
            case 2:
            case 8:
                a = gi;
                break;
            case 32:
                a = Ae;
                break;
            case 268435456:
                a = ri;
                break;
            default:
                a = Ae
            }
            return u = Oy.bind(null, l),
            a = Kn(a, u),
            l.callbackPriority = t,
            l.callbackNode = a,
            t
        }
        return u !== null && u !== null && Jn(u),
        l.callbackPriority = 2,
        l.callbackNode = null,
        2
    }
    function Oy(l, t) {
        if (pl !== 0 && pl !== 5)
            return l.callbackNode = null,
            l.callbackPriority = 0,
            null;
        var a = l.callbackNode;
        if (En() && l.callbackNode !== a)
            return null;
        var u = w;
        return u = Oe(l, l === yl ? u : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1),
        u === 0 ? null : (iy(l, u, t),
        My(l, $l()),
        l.callbackNode != null && l.callbackNode === a ? Oy.bind(null, l) : null)
    }
    function Dy(l, t) {
        if (En())
            return null;
        iy(l, t, !0)
    }
    function dm() {
        pm(function() {
            (P & 6) !== 0 ? Kn(hi, mm) : py()
        })
    }
    function jf() {
        if (ha === 0) {
            var l = fu;
            l === 0 && (l = _e,
            _e <<= 1,
            (_e & 261888) === 0 && (_e = 256)),
            ha = l
        }
        return ha
    }
    function Uy(l) {
        return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : xe("" + l)
    }
    function Ny(l, t) {
        var a = t.ownerDocument.createElement("input");
        return a.name = t.name,
        a.value = t.value,
        l.id && a.setAttribute("form", l.id),
        t.parentNode.insertBefore(a, t),
        l = new FormData(l),
        a.parentNode.removeChild(a),
        l
    }
    function vm(l, t, a, u, e) {
        if (t === "submit" && a && a.stateNode === e) {
            var n = Uy((e[Zl] || null).action)
              , c = u.submitter;
            c && (t = (t = c[Zl] || null) ? Uy(t.formAction) : c.getAttribute("formAction"),
            t !== null && (n = t,
            c = null));
            var f = new Ce("action","action",null,u,e);
            l.push({
                event: f,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (u.defaultPrevented) {
                            if (ha !== 0) {
                                var i = c ? Ny(e, c) : new FormData(e);
                                tf(a, {
                                    pending: !0,
                                    data: i,
                                    method: e.method,
                                    action: n
                                }, null, i)
                            }
                        } else
                            typeof n == "function" && (f.preventDefault(),
                            i = c ? Ny(e, c) : new FormData(e),
                            tf(a, {
                                pending: !0,
                                data: i,
                                method: e.method,
                                action: n
                            }, n, i))
                    },
                    currentTarget: e
                }]
            })
        }
    }
    for (var Yf = 0; Yf < Sc.length; Yf++) {
        var Bf = Sc[Yf]
          , hm = Bf.toLowerCase()
          , gm = Bf[0].toUpperCase() + Bf.slice(1);
        zt(hm, "on" + gm)
    }
    zt(f0, "onAnimationEnd"),
    zt(i0, "onAnimationIteration"),
    zt(s0, "onAnimationStart"),
    zt("dblclick", "onDoubleClick"),
    zt("focusin", "onFocus"),
    zt("focusout", "onBlur"),
    zt(H1, "onTransitionRun"),
    zt(R1, "onTransitionStart"),
    zt(q1, "onTransitionCancel"),
    zt(y0, "onTransitionEnd"),
    wa("onMouseEnter", ["mouseout", "mouseover"]),
    wa("onMouseLeave", ["mouseout", "mouseover"]),
    wa("onPointerEnter", ["pointerout", "pointerover"]),
    wa("onPointerLeave", ["pointerout", "pointerover"]),
    pa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    pa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    pa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    pa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    pa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    pa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var oe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , rm = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(oe));
    function xy(l, t) {
        t = (t & 4) !== 0;
        for (var a = 0; a < l.length; a++) {
            var u = l[a]
              , e = u.event;
            u = u.listeners;
            l: {
                var n = void 0;
                if (t)
                    for (var c = u.length - 1; 0 <= c; c--) {
                        var f = u[c]
                          , i = f.instance
                          , d = f.currentTarget;
                        if (f = f.listener,
                        i !== n && e.isPropagationStopped())
                            break l;
                        n = f,
                        e.currentTarget = d;
                        try {
                            n(e)
                        } catch (r) {
                            Be(r)
                        }
                        e.currentTarget = null,
                        n = i
                    }
                else
                    for (c = 0; c < u.length; c++) {
                        if (f = u[c],
                        i = f.instance,
                        d = f.currentTarget,
                        f = f.listener,
                        i !== n && e.isPropagationStopped())
                            break l;
                        n = f,
                        e.currentTarget = d;
                        try {
                            n(e)
                        } catch (r) {
                            Be(r)
                        }
                        e.currentTarget = null,
                        n = i
                    }
            }
        }
    }
    function J(l, t) {
        var a = t[$n];
        a === void 0 && (a = t[$n] = new Set);
        var u = l + "__bubble";
        a.has(u) || (Hy(t, l, 2, !1),
        a.add(u))
    }
    function Gf(l, t, a) {
        var u = 0;
        t && (u |= 4),
        Hy(a, l, u, t)
    }
    var pn = "_reactListening" + Math.random().toString(36).slice(2);
    function Xf(l) {
        if (!l[pn]) {
            l[pn] = !0,
            pi.forEach(function(a) {
                a !== "selectionchange" && (rm.has(a) || Gf(a, !1, l),
                Gf(a, !0, l))
            });
            var t = l.nodeType === 9 ? l : l.ownerDocument;
            t === null || t[pn] || (t[pn] = !0,
            Gf("selectionchange", !1, t))
        }
    }
    function Hy(l, t, a, u) {
        switch (fo(t)) {
        case 2:
            var e = Km;
            break;
        case 8:
            e = Jm;
            break;
        default:
            e = ti
        }
        a = e.bind(null, t, a, l),
        e = void 0,
        !nc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (e = !0),
        u ? e !== void 0 ? l.addEventListener(t, a, {
            capture: !0,
            passive: e
        }) : l.addEventListener(t, a, !0) : e !== void 0 ? l.addEventListener(t, a, {
            passive: e
        }) : l.addEventListener(t, a, !1)
    }
    function Qf(l, t, a, u, e) {
        var n = u;
        if ((t & 1) === 0 && (t & 2) === 0 && u !== null)
            l: for (; ; ) {
                if (u === null)
                    return;
                var c = u.tag;
                if (c === 3 || c === 4) {
                    var f = u.stateNode.containerInfo;
                    if (f === e)
                        break;
                    if (c === 4)
                        for (c = u.return; c !== null; ) {
                            var i = c.tag;
                            if ((i === 3 || i === 4) && c.stateNode.containerInfo === e)
                                return;
                            c = c.return
                        }
                    for (; f !== null; ) {
                        if (c = La(f),
                        c === null)
                            return;
                        if (i = c.tag,
                        i === 5 || i === 6 || i === 26 || i === 27) {
                            u = n = c;
                            continue l
                        }
                        f = f.parentNode
                    }
                }
                u = u.return
            }
        Yi(function() {
            var d = n
              , r = uc(a)
              , z = [];
            l: {
                var h = o0.get(l);
                if (h !== void 0) {
                    var g = Ce
                      , M = l;
                    switch (l) {
                    case "keypress":
                        if (Re(a) === 0)
                            break l;
                    case "keydown":
                    case "keyup":
                        g = y1;
                        break;
                    case "focusin":
                        M = "focus",
                        g = sc;
                        break;
                    case "focusout":
                        M = "blur",
                        g = sc;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        g = sc;
                        break;
                    case "click":
                        if (a.button === 2)
                            break l;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        g = Xi;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        g = Io;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        g = d1;
                        break;
                    case f0:
                    case i0:
                    case s0:
                        g = t1;
                        break;
                    case y0:
                        g = h1;
                        break;
                    case "scroll":
                    case "scrollend":
                        g = $o;
                        break;
                    case "wheel":
                        g = r1;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        g = u1;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        g = Zi;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        g = b1
                    }
                    var H = (t & 4) !== 0
                      , fl = !H && (l === "scroll" || l === "scrollend")
                      , o = H ? h !== null ? h + "Capture" : null : h;
                    H = [];
                    for (var s = d, m; s !== null; ) {
                        var b = s;
                        if (m = b.stateNode,
                        b = b.tag,
                        b !== 5 && b !== 26 && b !== 27 || m === null || o === null || (b = Ru(s, o),
                        b != null && H.push(me(s, b, m))),
                        fl)
                            break;
                        s = s.return
                    }
                    0 < H.length && (h = new g(h,M,null,a,r),
                    z.push({
                        event: h,
                        listeners: H
                    }))
                }
            }
            if ((t & 7) === 0) {
                l: {
                    if (h = l === "mouseover" || l === "pointerover",
                    g = l === "mouseout" || l === "pointerout",
                    h && a !== ac && (M = a.relatedTarget || a.fromElement) && (La(M) || M[Va]))
                        break l;
                    if ((g || h) && (h = r.window === r ? r : (h = r.ownerDocument) ? h.defaultView || h.parentWindow : window,
                    g ? (M = a.relatedTarget || a.toElement,
                    g = d,
                    M = M ? La(M) : null,
                    M !== null && (fl = Z(M),
                    H = M.tag,
                    M !== fl || H !== 5 && H !== 27 && H !== 6) && (M = null)) : (g = null,
                    M = d),
                    g !== M)) {
                        if (H = Xi,
                        b = "onMouseLeave",
                        o = "onMouseEnter",
                        s = "mouse",
                        (l === "pointerout" || l === "pointerover") && (H = Zi,
                        b = "onPointerLeave",
                        o = "onPointerEnter",
                        s = "pointer"),
                        fl = g == null ? h : Hu(g),
                        m = M == null ? h : Hu(M),
                        h = new H(b,s + "leave",g,a,r),
                        h.target = fl,
                        h.relatedTarget = m,
                        b = null,
                        La(r) === d && (H = new H(o,s + "enter",M,a,r),
                        H.target = m,
                        H.relatedTarget = fl,
                        b = H),
                        fl = b,
                        g && M)
                            t: {
                                for (H = Sm,
                                o = g,
                                s = M,
                                m = 0,
                                b = o; b; b = H(b))
                                    m++;
                                b = 0;
                                for (var N = s; N; N = H(N))
                                    b++;
                                for (; 0 < m - b; )
                                    o = H(o),
                                    m--;
                                for (; 0 < b - m; )
                                    s = H(s),
                                    b--;
                                for (; m--; ) {
                                    if (o === s || s !== null && o === s.alternate) {
                                        H = o;
                                        break t
                                    }
                                    o = H(o),
                                    s = H(s)
                                }
                                H = null
                            }
                        else
                            H = null;
                        g !== null && Ry(z, h, g, H, !1),
                        M !== null && fl !== null && Ry(z, fl, M, H, !0)
                    }
                }
                l: {
                    if (h = d ? Hu(d) : window,
                    g = h.nodeName && h.nodeName.toLowerCase(),
                    g === "select" || g === "input" && h.type === "file")
                        var F = $i;
                    else if (Wi(h))
                        if (Fi)
                            F = U1;
                        else {
                            F = O1;
                            var D = M1
                        }
                    else
                        g = h.nodeName,
                        !g || g.toLowerCase() !== "input" || h.type !== "checkbox" && h.type !== "radio" ? d && tc(d.elementType) && (F = $i) : F = D1;
                    if (F && (F = F(l, d))) {
                        ki(z, F, a, r);
                        break l
                    }
                    D && D(l, h, d),
                    l === "focusout" && d && h.type === "number" && d.memoizedProps.value != null && lc(h, "number", h.value)
                }
                switch (D = d ? Hu(d) : window,
                l) {
                case "focusin":
                    (Wi(D) || D.contentEditable === "true") && (Pa = D,
                    hc = d,
                    Qu = null);
                    break;
                case "focusout":
                    Qu = hc = Pa = null;
                    break;
                case "mousedown":
                    gc = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    gc = !1,
                    n0(z, a, r);
                    break;
                case "selectionchange":
                    if (x1)
                        break;
                case "keydown":
                case "keyup":
                    n0(z, a, r)
                }
                var G;
                if (oc)
                    l: {
                        switch (l) {
                        case "compositionstart":
                            var W = "onCompositionStart";
                            break l;
                        case "compositionend":
                            W = "onCompositionEnd";
                            break l;
                        case "compositionupdate":
                            W = "onCompositionUpdate";
                            break l
                        }
                        W = void 0
                    }
                else
                    Ia ? Ji(l, a) && (W = "onCompositionEnd") : l === "keydown" && a.keyCode === 229 && (W = "onCompositionStart");
                W && (Vi && a.locale !== "ko" && (Ia || W !== "onCompositionStart" ? W === "onCompositionEnd" && Ia && (G = Bi()) : (Pt = r,
                cc = "value"in Pt ? Pt.value : Pt.textContent,
                Ia = !0)),
                D = Mn(d, W),
                0 < D.length && (W = new Qi(W,l,null,a,r),
                z.push({
                    event: W,
                    listeners: D
                }),
                G ? W.data = G : (G = wi(a),
                G !== null && (W.data = G)))),
                (G = T1 ? E1(l, a) : A1(l, a)) && (W = Mn(d, "onBeforeInput"),
                0 < W.length && (D = new Qi("onBeforeInput","beforeinput",null,a,r),
                z.push({
                    event: D,
                    listeners: W
                }),
                D.data = G)),
                vm(z, l, d, a, r)
            }
            xy(z, t)
        })
    }
    function me(l, t, a) {
        return {
            instance: l,
            listener: t,
            currentTarget: a
        }
    }
    function Mn(l, t) {
        for (var a = t + "Capture", u = []; l !== null; ) {
            var e = l
              , n = e.stateNode;
            if (e = e.tag,
            e !== 5 && e !== 26 && e !== 27 || n === null || (e = Ru(l, a),
            e != null && u.unshift(me(l, e, n)),
            e = Ru(l, t),
            e != null && u.push(me(l, e, n))),
            l.tag === 3)
                return u;
            l = l.return
        }
        return []
    }
    function Sm(l) {
        if (l === null)
            return null;
        do
            l = l.return;
        while (l && l.tag !== 5 && l.tag !== 27);
        return l || null
    }
    function Ry(l, t, a, u, e) {
        for (var n = t._reactName, c = []; a !== null && a !== u; ) {
            var f = a
              , i = f.alternate
              , d = f.stateNode;
            if (f = f.tag,
            i !== null && i === u)
                break;
            f !== 5 && f !== 26 && f !== 27 || d === null || (i = d,
            e ? (d = Ru(a, n),
            d != null && c.unshift(me(a, d, i))) : e || (d = Ru(a, n),
            d != null && c.push(me(a, d, i)))),
            a = a.return
        }
        c.length !== 0 && l.push({
            event: t,
            listeners: c
        })
    }
    var bm = /\r\n?/g
      , zm = /\u0000|\uFFFD/g;
    function qy(l) {
        return (typeof l == "string" ? l : "" + l).replace(bm, `
`).replace(zm, "")
    }
    function Cy(l, t) {
        return t = qy(t),
        qy(l) === t
    }
    function cl(l, t, a, u, e, n) {
        switch (a) {
        case "children":
            typeof u == "string" ? t === "body" || t === "textarea" && u === "" || ka(l, u) : (typeof u == "number" || typeof u == "bigint") && t !== "body" && ka(l, "" + u);
            break;
        case "className":
            Ue(l, "class", u);
            break;
        case "tabIndex":
            Ue(l, "tabindex", u);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            Ue(l, a, u);
            break;
        case "style":
            Ci(l, u, n);
            break;
        case "data":
            if (t !== "object") {
                Ue(l, "data", u);
                break
            }
        case "src":
        case "href":
            if (u === "" && (t !== "a" || a !== "href")) {
                l.removeAttribute(a);
                break
            }
            if (u == null || typeof u == "function" || typeof u == "symbol" || typeof u == "boolean") {
                l.removeAttribute(a);
                break
            }
            u = xe("" + u),
            l.setAttribute(a, u);
            break;
        case "action":
        case "formAction":
            if (typeof u == "function") {
                l.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof n == "function" && (a === "formAction" ? (t !== "input" && cl(l, t, "name", e.name, e, null),
                cl(l, t, "formEncType", e.formEncType, e, null),
                cl(l, t, "formMethod", e.formMethod, e, null),
                cl(l, t, "formTarget", e.formTarget, e, null)) : (cl(l, t, "encType", e.encType, e, null),
                cl(l, t, "method", e.method, e, null),
                cl(l, t, "target", e.target, e, null)));
            if (u == null || typeof u == "symbol" || typeof u == "boolean") {
                l.removeAttribute(a);
                break
            }
            u = xe("" + u),
            l.setAttribute(a, u);
            break;
        case "onClick":
            u != null && (l.onclick = Rt);
            break;
        case "onScroll":
            u != null && J("scroll", l);
            break;
        case "onScrollEnd":
            u != null && J("scrollend", l);
            break;
        case "dangerouslySetInnerHTML":
            if (u != null) {
                if (typeof u != "object" || !("__html"in u))
                    throw Error(v(61));
                if (a = u.__html,
                a != null) {
                    if (e.children != null)
                        throw Error(v(60));
                    l.innerHTML = a
                }
            }
            break;
        case "multiple":
            l.multiple = u && typeof u != "function" && typeof u != "symbol";
            break;
        case "muted":
            l.muted = u && typeof u != "function" && typeof u != "symbol";
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
            break;
        case "autoFocus":
            break;
        case "xlinkHref":
            if (u == null || typeof u == "function" || typeof u == "boolean" || typeof u == "symbol") {
                l.removeAttribute("xlink:href");
                break
            }
            a = xe("" + u),
            l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            u != null && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, "" + u) : l.removeAttribute(a);
            break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
            u && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, "") : l.removeAttribute(a);
            break;
        case "capture":
        case "download":
            u === !0 ? l.setAttribute(a, "") : u !== !1 && u != null && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, u) : l.removeAttribute(a);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            u != null && typeof u != "function" && typeof u != "symbol" && !isNaN(u) && 1 <= u ? l.setAttribute(a, u) : l.removeAttribute(a);
            break;
        case "rowSpan":
        case "start":
            u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u) ? l.removeAttribute(a) : l.setAttribute(a, u);
            break;
        case "popover":
            J("beforetoggle", l),
            J("toggle", l),
            De(l, "popover", u);
            break;
        case "xlinkActuate":
            Ht(l, "http://www.w3.org/1999/xlink", "xlink:actuate", u);
            break;
        case "xlinkArcrole":
            Ht(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", u);
            break;
        case "xlinkRole":
            Ht(l, "http://www.w3.org/1999/xlink", "xlink:role", u);
            break;
        case "xlinkShow":
            Ht(l, "http://www.w3.org/1999/xlink", "xlink:show", u);
            break;
        case "xlinkTitle":
            Ht(l, "http://www.w3.org/1999/xlink", "xlink:title", u);
            break;
        case "xlinkType":
            Ht(l, "http://www.w3.org/1999/xlink", "xlink:type", u);
            break;
        case "xmlBase":
            Ht(l, "http://www.w3.org/XML/1998/namespace", "xml:base", u);
            break;
        case "xmlLang":
            Ht(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", u);
            break;
        case "xmlSpace":
            Ht(l, "http://www.w3.org/XML/1998/namespace", "xml:space", u);
            break;
        case "is":
            De(l, "is", u);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Wo.get(a) || a,
            De(l, a, u))
        }
    }
    function Zf(l, t, a, u, e, n) {
        switch (a) {
        case "style":
            Ci(l, u, n);
            break;
        case "dangerouslySetInnerHTML":
            if (u != null) {
                if (typeof u != "object" || !("__html"in u))
                    throw Error(v(61));
                if (a = u.__html,
                a != null) {
                    if (e.children != null)
                        throw Error(v(60));
                    l.innerHTML = a
                }
            }
            break;
        case "children":
            typeof u == "string" ? ka(l, u) : (typeof u == "number" || typeof u == "bigint") && ka(l, "" + u);
            break;
        case "onScroll":
            u != null && J("scroll", l);
            break;
        case "onScrollEnd":
            u != null && J("scrollend", l);
            break;
        case "onClick":
            u != null && (l.onclick = Rt);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            if (!Mi.hasOwnProperty(a))
                l: {
                    if (a[0] === "o" && a[1] === "n" && (e = a.endsWith("Capture"),
                    t = a.slice(2, e ? a.length - 7 : void 0),
                    n = l[Zl] || null,
                    n = n != null ? n[a] : null,
                    typeof n == "function" && l.removeEventListener(t, n, e),
                    typeof u == "function")) {
                        typeof n != "function" && n !== null && (a in l ? l[a] = null : l.hasAttribute(a) && l.removeAttribute(a)),
                        l.addEventListener(t, u, e);
                        break l
                    }
                    a in l ? l[a] = u : u === !0 ? l.setAttribute(a, "") : De(l, a, u)
                }
        }
    }
    function Rl(l, t, a) {
        switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "img":
            J("error", l),
            J("load", l);
            var u = !1, e = !1, n;
            for (n in a)
                if (a.hasOwnProperty(n)) {
                    var c = a[n];
                    if (c != null)
                        switch (n) {
                        case "src":
                            u = !0;
                            break;
                        case "srcSet":
                            e = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(v(137, t));
                        default:
                            cl(l, t, n, c, a, null)
                        }
                }
            e && cl(l, t, "srcSet", a.srcSet, a, null),
            u && cl(l, t, "src", a.src, a, null);
            return;
        case "input":
            J("invalid", l);
            var f = n = c = e = null
              , i = null
              , d = null;
            for (u in a)
                if (a.hasOwnProperty(u)) {
                    var r = a[u];
                    if (r != null)
                        switch (u) {
                        case "name":
                            e = r;
                            break;
                        case "type":
                            c = r;
                            break;
                        case "checked":
                            i = r;
                            break;
                        case "defaultChecked":
                            d = r;
                            break;
                        case "value":
                            n = r;
                            break;
                        case "defaultValue":
                            f = r;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (r != null)
                                throw Error(v(137, t));
                            break;
                        default:
                            cl(l, t, u, r, a, null)
                        }
                }
            xi(l, n, f, i, d, c, e, !1);
            return;
        case "select":
            J("invalid", l),
            u = c = n = null;
            for (e in a)
                if (a.hasOwnProperty(e) && (f = a[e],
                f != null))
                    switch (e) {
                    case "value":
                        n = f;
                        break;
                    case "defaultValue":
                        c = f;
                        break;
                    case "multiple":
                        u = f;
                    default:
                        cl(l, t, e, f, a, null)
                    }
            t = n,
            a = c,
            l.multiple = !!u,
            t != null ? Wa(l, !!u, t, !1) : a != null && Wa(l, !!u, a, !0);
            return;
        case "textarea":
            J("invalid", l),
            n = e = u = null;
            for (c in a)
                if (a.hasOwnProperty(c) && (f = a[c],
                f != null))
                    switch (c) {
                    case "value":
                        u = f;
                        break;
                    case "defaultValue":
                        e = f;
                        break;
                    case "children":
                        n = f;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (f != null)
                            throw Error(v(91));
                        break;
                    default:
                        cl(l, t, c, f, a, null)
                    }
            Ri(l, u, e, n);
            return;
        case "option":
            for (i in a)
                if (a.hasOwnProperty(i) && (u = a[i],
                u != null))
                    switch (i) {
                    case "selected":
                        l.selected = u && typeof u != "function" && typeof u != "symbol";
                        break;
                    default:
                        cl(l, t, i, u, a, null)
                    }
            return;
        case "dialog":
            J("beforetoggle", l),
            J("toggle", l),
            J("cancel", l),
            J("close", l);
            break;
        case "iframe":
        case "object":
            J("load", l);
            break;
        case "video":
        case "audio":
            for (u = 0; u < oe.length; u++)
                J(oe[u], l);
            break;
        case "image":
            J("error", l),
            J("load", l);
            break;
        case "details":
            J("toggle", l);
            break;
        case "embed":
        case "source":
        case "link":
            J("error", l),
            J("load", l);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
            for (d in a)
                if (a.hasOwnProperty(d) && (u = a[d],
                u != null))
                    switch (d) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(v(137, t));
                    default:
                        cl(l, t, d, u, a, null)
                    }
            return;
        default:
            if (tc(t)) {
                for (r in a)
                    a.hasOwnProperty(r) && (u = a[r],
                    u !== void 0 && Zf(l, t, r, u, a, void 0));
                return
            }
        }
        for (f in a)
            a.hasOwnProperty(f) && (u = a[f],
            u != null && cl(l, t, f, u, a, null))
    }
    function Tm(l, t, a, u) {
        switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "input":
            var e = null
              , n = null
              , c = null
              , f = null
              , i = null
              , d = null
              , r = null;
            for (g in a) {
                var z = a[g];
                if (a.hasOwnProperty(g) && z != null)
                    switch (g) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        i = z;
                    default:
                        u.hasOwnProperty(g) || cl(l, t, g, null, u, z)
                    }
            }
            for (var h in u) {
                var g = u[h];
                if (z = a[h],
                u.hasOwnProperty(h) && (g != null || z != null))
                    switch (h) {
                    case "type":
                        n = g;
                        break;
                    case "name":
                        e = g;
                        break;
                    case "checked":
                        d = g;
                        break;
                    case "defaultChecked":
                        r = g;
                        break;
                    case "value":
                        c = g;
                        break;
                    case "defaultValue":
                        f = g;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (g != null)
                            throw Error(v(137, t));
                        break;
                    default:
                        g !== z && cl(l, t, h, g, u, z)
                    }
            }
            Pn(l, c, f, i, d, r, n, e);
            return;
        case "select":
            g = c = f = h = null;
            for (n in a)
                if (i = a[n],
                a.hasOwnProperty(n) && i != null)
                    switch (n) {
                    case "value":
                        break;
                    case "multiple":
                        g = i;
                    default:
                        u.hasOwnProperty(n) || cl(l, t, n, null, u, i)
                    }
            for (e in u)
                if (n = u[e],
                i = a[e],
                u.hasOwnProperty(e) && (n != null || i != null))
                    switch (e) {
                    case "value":
                        h = n;
                        break;
                    case "defaultValue":
                        f = n;
                        break;
                    case "multiple":
                        c = n;
                    default:
                        n !== i && cl(l, t, e, n, u, i)
                    }
            t = f,
            a = c,
            u = g,
            h != null ? Wa(l, !!a, h, !1) : !!u != !!a && (t != null ? Wa(l, !!a, t, !0) : Wa(l, !!a, a ? [] : "", !1));
            return;
        case "textarea":
            g = h = null;
            for (f in a)
                if (e = a[f],
                a.hasOwnProperty(f) && e != null && !u.hasOwnProperty(f))
                    switch (f) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        cl(l, t, f, null, u, e)
                    }
            for (c in u)
                if (e = u[c],
                n = a[c],
                u.hasOwnProperty(c) && (e != null || n != null))
                    switch (c) {
                    case "value":
                        h = e;
                        break;
                    case "defaultValue":
                        g = e;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (e != null)
                            throw Error(v(91));
                        break;
                    default:
                        e !== n && cl(l, t, c, e, u, n)
                    }
            Hi(l, h, g);
            return;
        case "option":
            for (var M in a)
                if (h = a[M],
                a.hasOwnProperty(M) && h != null && !u.hasOwnProperty(M))
                    switch (M) {
                    case "selected":
                        l.selected = !1;
                        break;
                    default:
                        cl(l, t, M, null, u, h)
                    }
            for (i in u)
                if (h = u[i],
                g = a[i],
                u.hasOwnProperty(i) && h !== g && (h != null || g != null))
                    switch (i) {
                    case "selected":
                        l.selected = h && typeof h != "function" && typeof h != "symbol";
                        break;
                    default:
                        cl(l, t, i, h, u, g)
                    }
            return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
            for (var H in a)
                h = a[H],
                a.hasOwnProperty(H) && h != null && !u.hasOwnProperty(H) && cl(l, t, H, null, u, h);
            for (d in u)
                if (h = u[d],
                g = a[d],
                u.hasOwnProperty(d) && h !== g && (h != null || g != null))
                    switch (d) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (h != null)
                            throw Error(v(137, t));
                        break;
                    default:
                        cl(l, t, d, h, u, g)
                    }
            return;
        default:
            if (tc(t)) {
                for (var fl in a)
                    h = a[fl],
                    a.hasOwnProperty(fl) && h !== void 0 && !u.hasOwnProperty(fl) && Zf(l, t, fl, void 0, u, h);
                for (r in u)
                    h = u[r],
                    g = a[r],
                    !u.hasOwnProperty(r) || h === g || h === void 0 && g === void 0 || Zf(l, t, r, h, u, g);
                return
            }
        }
        for (var o in a)
            h = a[o],
            a.hasOwnProperty(o) && h != null && !u.hasOwnProperty(o) && cl(l, t, o, null, u, h);
        for (z in u)
            h = u[z],
            g = a[z],
            !u.hasOwnProperty(z) || h === g || h == null && g == null || cl(l, t, z, h, u, g)
    }
    function jy(l) {
        switch (l) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
            return !0;
        default:
            return !1
        }
    }
    function Em() {
        if (typeof performance.getEntriesByType == "function") {
            for (var l = 0, t = 0, a = performance.getEntriesByType("resource"), u = 0; u < a.length; u++) {
                var e = a[u]
                  , n = e.transferSize
                  , c = e.initiatorType
                  , f = e.duration;
                if (n && f && jy(c)) {
                    for (c = 0,
                    f = e.responseEnd,
                    u += 1; u < a.length; u++) {
                        var i = a[u]
                          , d = i.startTime;
                        if (d > f)
                            break;
                        var r = i.transferSize
                          , z = i.initiatorType;
                        r && jy(z) && (i = i.responseEnd,
                        c += r * (i < f ? 1 : (f - d) / (i - d)))
                    }
                    if (--u,
                    t += 8 * (n + c) / (e.duration / 1e3),
                    l++,
                    10 < l)
                        break
                }
            }
            if (0 < l)
                return t / l / 1e6
        }
        return navigator.connection && (l = navigator.connection.downlink,
        typeof l == "number") ? l : 5
    }
    var Vf = null
      , Lf = null;
    function On(l) {
        return l.nodeType === 9 ? l : l.ownerDocument
    }
    function Yy(l) {
        switch (l) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function By(l, t) {
        if (l === 0)
            switch (t) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
            }
        return l === 1 && t === "foreignObject" ? 0 : l
    }
    function Kf(l, t) {
        return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var Jf = null;
    function Am() {
        var l = window.event;
        return l && l.type === "popstate" ? l === Jf ? !1 : (Jf = l,
        !0) : (Jf = null,
        !1)
    }
    var Gy = typeof setTimeout == "function" ? setTimeout : void 0
      , _m = typeof clearTimeout == "function" ? clearTimeout : void 0
      , Xy = typeof Promise == "function" ? Promise : void 0
      , pm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xy < "u" ? function(l) {
        return Xy.resolve(null).then(l).catch(Mm)
    }
    : Gy;
    function Mm(l) {
        setTimeout(function() {
            throw l
        })
    }
    function ga(l) {
        return l === "head"
    }
    function Qy(l, t) {
        var a = t
          , u = 0;
        do {
            var e = a.nextSibling;
            if (l.removeChild(a),
            e && e.nodeType === 8)
                if (a = e.data,
                a === "/$" || a === "/&") {
                    if (u === 0) {
                        l.removeChild(e),
                        Mu(t);
                        return
                    }
                    u--
                } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
                    u++;
                else if (a === "html")
                    de(l.ownerDocument.documentElement);
                else if (a === "head") {
                    a = l.ownerDocument.head,
                    de(a);
                    for (var n = a.firstChild; n; ) {
                        var c = n.nextSibling
                          , f = n.nodeName;
                        n[xu] || f === "SCRIPT" || f === "STYLE" || f === "LINK" && n.rel.toLowerCase() === "stylesheet" || a.removeChild(n),
                        n = c
                    }
                } else
                    a === "body" && de(l.ownerDocument.body);
            a = e
        } while (a);
        Mu(t)
    }
    function Zy(l, t) {
        var a = l;
        l = 0;
        do {
            var u = a.nextSibling;
            if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display,
            a.style.display = "none") : (a.style.display = a._stashedDisplay || "",
            a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue,
            a.nodeValue = "") : a.nodeValue = a._stashedText || ""),
            u && u.nodeType === 8)
                if (a = u.data,
                a === "/$") {
                    if (l === 0)
                        break;
                    l--
                } else
                    a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || l++;
            a = u
        } while (a)
    }
    function wf(l) {
        var t = l.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
            var a = t;
            switch (t = t.nextSibling,
            a.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                wf(a),
                Fn(a);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if (a.rel.toLowerCase() === "stylesheet")
                    continue
            }
            l.removeChild(a)
        }
    }
    function Om(l, t, a, u) {
        for (; l.nodeType === 1; ) {
            var e = a;
            if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!u && (l.nodeName !== "INPUT" || l.type !== "hidden"))
                    break
            } else if (u) {
                if (!l[xu])
                    switch (t) {
                    case "meta":
                        if (!l.hasAttribute("itemprop"))
                            break;
                        return l;
                    case "link":
                        if (n = l.getAttribute("rel"),
                        n === "stylesheet" && l.hasAttribute("data-precedence"))
                            break;
                        if (n !== e.rel || l.getAttribute("href") !== (e.href == null || e.href === "" ? null : e.href) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin) || l.getAttribute("title") !== (e.title == null ? null : e.title))
                            break;
                        return l;
                    case "style":
                        if (l.hasAttribute("data-precedence"))
                            break;
                        return l;
                    case "script":
                        if (n = l.getAttribute("src"),
                        (n !== (e.src == null ? null : e.src) || l.getAttribute("type") !== (e.type == null ? null : e.type) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                            break;
                        return l;
                    default:
                        return l
                    }
            } else if (t === "input" && l.type === "hidden") {
                var n = e.name == null ? null : "" + e.name;
                if (e.type === "hidden" && l.getAttribute("name") === n)
                    return l
            } else
                return l;
            if (l = ht(l.nextSibling),
            l === null)
                break
        }
        return null
    }
    function Dm(l, t, a) {
        if (t === "")
            return null;
        for (; l.nodeType !== 3; )
            if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !a || (l = ht(l.nextSibling),
            l === null))
                return null;
        return l
    }
    function Vy(l, t) {
        for (; l.nodeType !== 8; )
            if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = ht(l.nextSibling),
            l === null))
                return null;
        return l
    }
    function Wf(l) {
        return l.data === "$?" || l.data === "$~"
    }
    function kf(l) {
        return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading"
    }
    function Um(l, t) {
        var a = l.ownerDocument;
        if (l.data === "$~")
            l._reactRetry = t;
        else if (l.data !== "$?" || a.readyState !== "loading")
            t();
        else {
            var u = function() {
                t(),
                a.removeEventListener("DOMContentLoaded", u)
            };
            a.addEventListener("DOMContentLoaded", u),
            l._reactRetry = u
        }
    }
    function ht(l) {
        for (; l != null; l = l.nextSibling) {
            var t = l.nodeType;
            if (t === 1 || t === 3)
                break;
            if (t === 8) {
                if (t = l.data,
                t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
                    break;
                if (t === "/$" || t === "/&")
                    return null
            }
        }
        return l
    }
    var $f = null;
    function Ly(l) {
        l = l.nextSibling;
        for (var t = 0; l; ) {
            if (l.nodeType === 8) {
                var a = l.data;
                if (a === "/$" || a === "/&") {
                    if (t === 0)
                        return ht(l.nextSibling);
                    t--
                } else
                    a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || t++
            }
            l = l.nextSibling
        }
        return null
    }
    function Ky(l) {
        l = l.previousSibling;
        for (var t = 0; l; ) {
            if (l.nodeType === 8) {
                var a = l.data;
                if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
                    if (t === 0)
                        return l;
                    t--
                } else
                    a !== "/$" && a !== "/&" || t++
            }
            l = l.previousSibling
        }
        return null
    }
    function Jy(l, t, a) {
        switch (t = On(a),
        l) {
        case "html":
            if (l = t.documentElement,
            !l)
                throw Error(v(452));
            return l;
        case "head":
            if (l = t.head,
            !l)
                throw Error(v(453));
            return l;
        case "body":
            if (l = t.body,
            !l)
                throw Error(v(454));
            return l;
        default:
            throw Error(v(451))
        }
    }
    function de(l) {
        for (var t = l.attributes; t.length; )
            l.removeAttributeNode(t[0]);
        Fn(l)
    }
    var gt = new Map
      , wy = new Set;
    function Dn(l) {
        return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument
    }
    var kt = _.d;
    _.d = {
        f: Nm,
        r: xm,
        D: Hm,
        C: Rm,
        L: qm,
        m: Cm,
        X: Ym,
        S: jm,
        M: Bm
    };
    function Nm() {
        var l = kt.f()
          , t = bn();
        return l || t
    }
    function xm(l) {
        var t = Ka(l);
        t !== null && t.tag === 5 && t.type === "form" ? ys(t) : kt.r(l)
    }
    var Au = typeof document > "u" ? null : document;
    function Wy(l, t, a) {
        var u = Au;
        if (u && typeof t == "string" && t) {
            var e = it(t);
            e = 'link[rel="' + l + '"][href="' + e + '"]',
            typeof a == "string" && (e += '[crossorigin="' + a + '"]'),
            wy.has(e) || (wy.add(e),
            l = {
                rel: l,
                crossOrigin: a,
                href: t
            },
            u.querySelector(e) === null && (t = u.createElement("link"),
            Rl(t, "link", l),
            Ml(t),
            u.head.appendChild(t)))
        }
    }
    function Hm(l) {
        kt.D(l),
        Wy("dns-prefetch", l, null)
    }
    function Rm(l, t) {
        kt.C(l, t),
        Wy("preconnect", l, t)
    }
    function qm(l, t, a) {
        kt.L(l, t, a);
        var u = Au;
        if (u && l && t) {
            var e = 'link[rel="preload"][as="' + it(t) + '"]';
            t === "image" && a && a.imageSrcSet ? (e += '[imagesrcset="' + it(a.imageSrcSet) + '"]',
            typeof a.imageSizes == "string" && (e += '[imagesizes="' + it(a.imageSizes) + '"]')) : e += '[href="' + it(l) + '"]';
            var n = e;
            switch (t) {
            case "style":
                n = _u(l);
                break;
            case "script":
                n = pu(l)
            }
            gt.has(n) || (l = x({
                rel: "preload",
                href: t === "image" && a && a.imageSrcSet ? void 0 : l,
                as: t
            }, a),
            gt.set(n, l),
            u.querySelector(e) !== null || t === "style" && u.querySelector(ve(n)) || t === "script" && u.querySelector(he(n)) || (t = u.createElement("link"),
            Rl(t, "link", l),
            Ml(t),
            u.head.appendChild(t)))
        }
    }
    function Cm(l, t) {
        kt.m(l, t);
        var a = Au;
        if (a && l) {
            var u = t && typeof t.as == "string" ? t.as : "script"
              , e = 'link[rel="modulepreload"][as="' + it(u) + '"][href="' + it(l) + '"]'
              , n = e;
            switch (u) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                n = pu(l)
            }
            if (!gt.has(n) && (l = x({
                rel: "modulepreload",
                href: l
            }, t),
            gt.set(n, l),
            a.querySelector(e) === null)) {
                switch (u) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (a.querySelector(he(n)))
                        return
                }
                u = a.createElement("link"),
                Rl(u, "link", l),
                Ml(u),
                a.head.appendChild(u)
            }
        }
    }
    function jm(l, t, a) {
        kt.S(l, t, a);
        var u = Au;
        if (u && l) {
            var e = Ja(u).hoistableStyles
              , n = _u(l);
            t = t || "default";
            var c = e.get(n);
            if (!c) {
                var f = {
                    loading: 0,
                    preload: null
                };
                if (c = u.querySelector(ve(n)))
                    f.loading = 5;
                else {
                    l = x({
                        rel: "stylesheet",
                        href: l,
                        "data-precedence": t
                    }, a),
                    (a = gt.get(n)) && Ff(l, a);
                    var i = c = u.createElement("link");
                    Ml(i),
                    Rl(i, "link", l),
                    i._p = new Promise(function(d, r) {
                        i.onload = d,
                        i.onerror = r
                    }
                    ),
                    i.addEventListener("load", function() {
                        f.loading |= 1
                    }),
                    i.addEventListener("error", function() {
                        f.loading |= 2
                    }),
                    f.loading |= 4,
                    Un(c, t, u)
                }
                c = {
                    type: "stylesheet",
                    instance: c,
                    count: 1,
                    state: f
                },
                e.set(n, c)
            }
        }
    }
    function Ym(l, t) {
        kt.X(l, t);
        var a = Au;
        if (a && l) {
            var u = Ja(a).hoistableScripts
              , e = pu(l)
              , n = u.get(e);
            n || (n = a.querySelector(he(e)),
            n || (l = x({
                src: l,
                async: !0
            }, t),
            (t = gt.get(e)) && If(l, t),
            n = a.createElement("script"),
            Ml(n),
            Rl(n, "link", l),
            a.head.appendChild(n)),
            n = {
                type: "script",
                instance: n,
                count: 1,
                state: null
            },
            u.set(e, n))
        }
    }
    function Bm(l, t) {
        kt.M(l, t);
        var a = Au;
        if (a && l) {
            var u = Ja(a).hoistableScripts
              , e = pu(l)
              , n = u.get(e);
            n || (n = a.querySelector(he(e)),
            n || (l = x({
                src: l,
                async: !0,
                type: "module"
            }, t),
            (t = gt.get(e)) && If(l, t),
            n = a.createElement("script"),
            Ml(n),
            Rl(n, "link", l),
            a.head.appendChild(n)),
            n = {
                type: "script",
                instance: n,
                count: 1,
                state: null
            },
            u.set(e, n))
        }
    }
    function ky(l, t, a, u) {
        var e = (e = L.current) ? Dn(e) : null;
        if (!e)
            throw Error(v(446));
        switch (l) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof a.precedence == "string" && typeof a.href == "string" ? (t = _u(a.href),
            a = Ja(e).hoistableStyles,
            u = a.get(t),
            u || (u = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            },
            a.set(t, u)),
            u) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
                l = _u(a.href);
                var n = Ja(e).hoistableStyles
                  , c = n.get(l);
                if (c || (e = e.ownerDocument || e,
                c = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                },
                n.set(l, c),
                (n = e.querySelector(ve(l))) && !n._p && (c.instance = n,
                c.state.loading = 5),
                gt.has(l) || (a = {
                    rel: "preload",
                    as: "style",
                    href: a.href,
                    crossOrigin: a.crossOrigin,
                    integrity: a.integrity,
                    media: a.media,
                    hrefLang: a.hrefLang,
                    referrerPolicy: a.referrerPolicy
                },
                gt.set(l, a),
                n || Gm(e, l, a, c.state))),
                t && u === null)
                    throw Error(v(528, ""));
                return c
            }
            if (t && u !== null)
                throw Error(v(529, ""));
            return null;
        case "script":
            return t = a.async,
            a = a.src,
            typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = pu(a),
            a = Ja(e).hoistableScripts,
            u = a.get(t),
            u || (u = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            },
            a.set(t, u)),
            u) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(v(444, l))
        }
    }
    function _u(l) {
        return 'href="' + it(l) + '"'
    }
    function ve(l) {
        return 'link[rel="stylesheet"][' + l + "]"
    }
    function $y(l) {
        return x({}, l, {
            "data-precedence": l.precedence,
            precedence: null
        })
    }
    function Gm(l, t, a, u) {
        l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? u.loading = 1 : (t = l.createElement("link"),
        u.preload = t,
        t.addEventListener("load", function() {
            return u.loading |= 1
        }),
        t.addEventListener("error", function() {
            return u.loading |= 2
        }),
        Rl(t, "link", a),
        Ml(t),
        l.head.appendChild(t))
    }
    function pu(l) {
        return '[src="' + it(l) + '"]'
    }
    function he(l) {
        return "script[async]" + l
    }
    function Fy(l, t, a) {
        if (t.count++,
        t.instance === null)
            switch (t.type) {
            case "style":
                var u = l.querySelector('style[data-href~="' + it(a.href) + '"]');
                if (u)
                    return t.instance = u,
                    Ml(u),
                    u;
                var e = x({}, a, {
                    "data-href": a.href,
                    "data-precedence": a.precedence,
                    href: null,
                    precedence: null
                });
                return u = (l.ownerDocument || l).createElement("style"),
                Ml(u),
                Rl(u, "style", e),
                Un(u, a.precedence, l),
                t.instance = u;
            case "stylesheet":
                e = _u(a.href);
                var n = l.querySelector(ve(e));
                if (n)
                    return t.state.loading |= 4,
                    t.instance = n,
                    Ml(n),
                    n;
                u = $y(a),
                (e = gt.get(e)) && Ff(u, e),
                n = (l.ownerDocument || l).createElement("link"),
                Ml(n);
                var c = n;
                return c._p = new Promise(function(f, i) {
                    c.onload = f,
                    c.onerror = i
                }
                ),
                Rl(n, "link", u),
                t.state.loading |= 4,
                Un(n, a.precedence, l),
                t.instance = n;
            case "script":
                return n = pu(a.src),
                (e = l.querySelector(he(n))) ? (t.instance = e,
                Ml(e),
                e) : (u = a,
                (e = gt.get(n)) && (u = x({}, a),
                If(u, e)),
                l = l.ownerDocument || l,
                e = l.createElement("script"),
                Ml(e),
                Rl(e, "link", u),
                l.head.appendChild(e),
                t.instance = e);
            case "void":
                return null;
            default:
                throw Error(v(443, t.type))
            }
        else
            t.type === "stylesheet" && (t.state.loading & 4) === 0 && (u = t.instance,
            t.state.loading |= 4,
            Un(u, a.precedence, l));
        return t.instance
    }
    function Un(l, t, a) {
        for (var u = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), e = u.length ? u[u.length - 1] : null, n = e, c = 0; c < u.length; c++) {
            var f = u[c];
            if (f.dataset.precedence === t)
                n = f;
            else if (n !== e)
                break
        }
        n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = a.nodeType === 9 ? a.head : a,
        t.insertBefore(l, t.firstChild))
    }
    function Ff(l, t) {
        l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
        l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
        l.title == null && (l.title = t.title)
    }
    function If(l, t) {
        l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
        l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
        l.integrity == null && (l.integrity = t.integrity)
    }
    var Nn = null;
    function Iy(l, t, a) {
        if (Nn === null) {
            var u = new Map
              , e = Nn = new Map;
            e.set(a, u)
        } else
            e = Nn,
            u = e.get(a),
            u || (u = new Map,
            e.set(a, u));
        if (u.has(l))
            return u;
        for (u.set(l, null),
        a = a.getElementsByTagName(l),
        e = 0; e < a.length; e++) {
            var n = a[e];
            if (!(n[xu] || n[Ul] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
                var c = n.getAttribute(t) || "";
                c = l + c;
                var f = u.get(c);
                f ? f.push(n) : u.set(c, [n])
            }
        }
        return u
    }
    function Py(l, t, a) {
        l = l.ownerDocument || l,
        l.head.insertBefore(a, t === "title" ? l.querySelector("head > title") : null)
    }
    function Xm(l, t, a) {
        if (a === 1 || t.itemProp != null)
            return !1;
        switch (l) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
                break;
            return !0;
        case "link":
            if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
                break;
            switch (t.rel) {
            case "stylesheet":
                return l = t.disabled,
                typeof t.precedence == "string" && l == null;
            default:
                return !0
            }
        case "script":
            if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
                return !0
        }
        return !1
    }
    function lo(l) {
        return !(l.type === "stylesheet" && (l.state.loading & 3) === 0)
    }
    function Qm(l, t, a, u) {
        if (a.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (a.state.loading & 4) === 0) {
            if (a.instance === null) {
                var e = _u(u.href)
                  , n = t.querySelector(ve(e));
                if (n) {
                    t = n._p,
                    t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++,
                    l = xn.bind(l),
                    t.then(l, l)),
                    a.state.loading |= 4,
                    a.instance = n,
                    Ml(n);
                    return
                }
                n = t.ownerDocument || t,
                u = $y(u),
                (e = gt.get(e)) && Ff(u, e),
                n = n.createElement("link"),
                Ml(n);
                var c = n;
                c._p = new Promise(function(f, i) {
                    c.onload = f,
                    c.onerror = i
                }
                ),
                Rl(n, "link", u),
                a.instance = n
            }
            l.stylesheets === null && (l.stylesheets = new Map),
            l.stylesheets.set(a, t),
            (t = a.state.preload) && (a.state.loading & 3) === 0 && (l.count++,
            a = xn.bind(l),
            t.addEventListener("load", a),
            t.addEventListener("error", a))
        }
    }
    var Pf = 0;
    function Zm(l, t) {
        return l.stylesheets && l.count === 0 && Rn(l, l.stylesheets),
        0 < l.count || 0 < l.imgCount ? function(a) {
            var u = setTimeout(function() {
                if (l.stylesheets && Rn(l, l.stylesheets),
                l.unsuspend) {
                    var n = l.unsuspend;
                    l.unsuspend = null,
                    n()
                }
            }, 6e4 + t);
            0 < l.imgBytes && Pf === 0 && (Pf = 62500 * Em());
            var e = setTimeout(function() {
                if (l.waitingForImages = !1,
                l.count === 0 && (l.stylesheets && Rn(l, l.stylesheets),
                l.unsuspend)) {
                    var n = l.unsuspend;
                    l.unsuspend = null,
                    n()
                }
            }, (l.imgBytes > Pf ? 50 : 800) + t);
            return l.unsuspend = a,
            function() {
                l.unsuspend = null,
                clearTimeout(u),
                clearTimeout(e)
            }
        }
        : null
    }
    function xn() {
        if (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
            if (this.stylesheets)
                Rn(this, this.stylesheets);
            else if (this.unsuspend) {
                var l = this.unsuspend;
                this.unsuspend = null,
                l()
            }
        }
    }
    var Hn = null;
    function Rn(l, t) {
        l.stylesheets = null,
        l.unsuspend !== null && (l.count++,
        Hn = new Map,
        t.forEach(Vm, l),
        Hn = null,
        xn.call(l))
    }
    function Vm(l, t) {
        if (!(t.state.loading & 4)) {
            var a = Hn.get(l);
            if (a)
                var u = a.get(null);
            else {
                a = new Map,
                Hn.set(l, a);
                for (var e = l.querySelectorAll("link[data-precedence],style[data-precedence]"), n = 0; n < e.length; n++) {
                    var c = e[n];
                    (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (a.set(c.dataset.precedence, c),
                    u = c)
                }
                u && a.set(null, u)
            }
            e = t.instance,
            c = e.getAttribute("data-precedence"),
            n = a.get(c) || u,
            n === u && a.set(null, e),
            a.set(c, e),
            this.count++,
            u = xn.bind(this),
            e.addEventListener("load", u),
            e.addEventListener("error", u),
            n ? n.parentNode.insertBefore(e, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l,
            l.insertBefore(e, l.firstChild)),
            t.state.loading |= 4
        }
    }
    var ge = {
        $$typeof: ql,
        Provider: null,
        Consumer: null,
        _currentValue: q,
        _currentValue2: q,
        _threadCount: 0
    };
    function Lm(l, t, a, u, e, n, c, f, i) {
        this.tag = 1,
        this.containerInfo = l,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = wn(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = wn(0),
        this.hiddenUpdates = wn(null),
        this.identifierPrefix = u,
        this.onUncaughtError = e,
        this.onCaughtError = n,
        this.onRecoverableError = c,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = i,
        this.incompleteTransitions = new Map
    }
    function to(l, t, a, u, e, n, c, f, i, d, r, z) {
        return l = new Lm(l,t,a,c,i,d,r,z,f),
        t = 1,
        n === !0 && (t |= 24),
        n = lt(3, null, null, t),
        l.current = n,
        n.stateNode = l,
        t = xc(),
        t.refCount++,
        l.pooledCache = t,
        t.refCount++,
        n.memoizedState = {
            element: u,
            isDehydrated: a,
            cache: t
        },
        Cc(n),
        l
    }
    function ao(l) {
        return l ? (l = au,
        l) : au
    }
    function uo(l, t, a, u, e, n) {
        e = ao(e),
        u.context === null ? u.context = e : u.pendingContext = e,
        u = na(t),
        u.payload = {
            element: a
        },
        n = n === void 0 ? null : n,
        n !== null && (u.callback = n),
        a = ca(l, u, t),
        a !== null && (Wl(a, l, t),
        Wu(a, l, t))
    }
    function eo(l, t) {
        if (l = l.memoizedState,
        l !== null && l.dehydrated !== null) {
            var a = l.retryLane;
            l.retryLane = a !== 0 && a < t ? a : t
        }
    }
    function li(l, t) {
        eo(l, t),
        (l = l.alternate) && eo(l, t)
    }
    function no(l) {
        if (l.tag === 13 || l.tag === 31) {
            var t = Ua(l, 67108864);
            t !== null && Wl(t, l, 67108864),
            li(l, 67108864)
        }
    }
    function co(l) {
        if (l.tag === 13 || l.tag === 31) {
            var t = nt();
            t = Wn(t);
            var a = Ua(l, t);
            a !== null && Wl(a, l, t),
            li(l, t)
        }
    }
    var qn = !0;
    function Km(l, t, a, u) {
        var e = S.T;
        S.T = null;
        var n = _.p;
        try {
            _.p = 2,
            ti(l, t, a, u)
        } finally {
            _.p = n,
            S.T = e
        }
    }
    function Jm(l, t, a, u) {
        var e = S.T;
        S.T = null;
        var n = _.p;
        try {
            _.p = 8,
            ti(l, t, a, u)
        } finally {
            _.p = n,
            S.T = e
        }
    }
    function ti(l, t, a, u) {
        if (qn) {
            var e = ai(u);
            if (e === null)
                Qf(l, t, u, Cn, a),
                io(l, u);
            else if (Wm(e, l, t, a, u))
                u.stopPropagation();
            else if (io(l, u),
            t & 4 && -1 < wm.indexOf(l)) {
                for (; e !== null; ) {
                    var n = Ka(e);
                    if (n !== null)
                        switch (n.tag) {
                        case 3:
                            if (n = n.stateNode,
                            n.current.memoizedState.isDehydrated) {
                                var c = _a(n.pendingLanes);
                                if (c !== 0) {
                                    var f = n;
                                    for (f.pendingLanes |= 2,
                                    f.entangledLanes |= 2; c; ) {
                                        var i = 1 << 31 - Il(c);
                                        f.entanglements[1] |= i,
                                        c &= ~i
                                    }
                                    Ut(n),
                                    (P & 6) === 0 && (rn = $l() + 500,
                                    ye(0))
                                }
                            }
                            break;
                        case 31:
                        case 13:
                            f = Ua(n, 2),
                            f !== null && Wl(f, n, 2),
                            bn(),
                            li(n, 2)
                        }
                    if (n = ai(u),
                    n === null && Qf(l, t, u, Cn, a),
                    n === e)
                        break;
                    e = n
                }
                e !== null && u.stopPropagation()
            } else
                Qf(l, t, u, null, a)
        }
    }
    function ai(l) {
        return l = uc(l),
        ui(l)
    }
    var Cn = null;
    function ui(l) {
        if (Cn = null,
        l = La(l),
        l !== null) {
            var t = Z(l);
            if (t === null)
                l = null;
            else {
                var a = t.tag;
                if (a === 13) {
                    if (l = il(t),
                    l !== null)
                        return l;
                    l = null
                } else if (a === 31) {
                    if (l = gl(t),
                    l !== null)
                        return l;
                    l = null
                } else if (a === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated)
                        return t.tag === 3 ? t.stateNode.containerInfo : null;
                    l = null
                } else
                    t !== l && (l = null)
            }
        }
        return Cn = l,
        null
    }
    function fo(l) {
        switch (l) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 8;
        case "message":
            switch (Ho()) {
            case hi:
                return 2;
            case gi:
                return 8;
            case Ae:
            case Ro:
                return 32;
            case ri:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var ei = !1
      , ra = null
      , Sa = null
      , ba = null
      , re = new Map
      , Se = new Map
      , za = []
      , wm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function io(l, t) {
        switch (l) {
        case "focusin":
        case "focusout":
            ra = null;
            break;
        case "dragenter":
        case "dragleave":
            Sa = null;
            break;
        case "mouseover":
        case "mouseout":
            ba = null;
            break;
        case "pointerover":
        case "pointerout":
            re.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Se.delete(t.pointerId)
        }
    }
    function be(l, t, a, u, e, n) {
        return l === null || l.nativeEvent !== n ? (l = {
            blockedOn: t,
            domEventName: a,
            eventSystemFlags: u,
            nativeEvent: n,
            targetContainers: [e]
        },
        t !== null && (t = Ka(t),
        t !== null && no(t)),
        l) : (l.eventSystemFlags |= u,
        t = l.targetContainers,
        e !== null && t.indexOf(e) === -1 && t.push(e),
        l)
    }
    function Wm(l, t, a, u, e) {
        switch (t) {
        case "focusin":
            return ra = be(ra, l, t, a, u, e),
            !0;
        case "dragenter":
            return Sa = be(Sa, l, t, a, u, e),
            !0;
        case "mouseover":
            return ba = be(ba, l, t, a, u, e),
            !0;
        case "pointerover":
            var n = e.pointerId;
            return re.set(n, be(re.get(n) || null, l, t, a, u, e)),
            !0;
        case "gotpointercapture":
            return n = e.pointerId,
            Se.set(n, be(Se.get(n) || null, l, t, a, u, e)),
            !0
        }
        return !1
    }
    function so(l) {
        var t = La(l.target);
        if (t !== null) {
            var a = Z(t);
            if (a !== null) {
                if (t = a.tag,
                t === 13) {
                    if (t = il(a),
                    t !== null) {
                        l.blockedOn = t,
                        Ai(l.priority, function() {
                            co(a)
                        });
                        return
                    }
                } else if (t === 31) {
                    if (t = gl(a),
                    t !== null) {
                        l.blockedOn = t,
                        Ai(l.priority, function() {
                            co(a)
                        });
                        return
                    }
                } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
                    l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
                    return
                }
            }
        }
        l.blockedOn = null
    }
    function jn(l) {
        if (l.blockedOn !== null)
            return !1;
        for (var t = l.targetContainers; 0 < t.length; ) {
            var a = ai(l.nativeEvent);
            if (a === null) {
                a = l.nativeEvent;
                var u = new a.constructor(a.type,a);
                ac = u,
                a.target.dispatchEvent(u),
                ac = null
            } else
                return t = Ka(a),
                t !== null && no(t),
                l.blockedOn = a,
                !1;
            t.shift()
        }
        return !0
    }
    function yo(l, t, a) {
        jn(l) && a.delete(t)
    }
    function km() {
        ei = !1,
        ra !== null && jn(ra) && (ra = null),
        Sa !== null && jn(Sa) && (Sa = null),
        ba !== null && jn(ba) && (ba = null),
        re.forEach(yo),
        Se.forEach(yo)
    }
    function Yn(l, t) {
        l.blockedOn === t && (l.blockedOn = null,
        ei || (ei = !0,
        A.unstable_scheduleCallback(A.unstable_NormalPriority, km)))
    }
    var Bn = null;
    function oo(l) {
        Bn !== l && (Bn = l,
        A.unstable_scheduleCallback(A.unstable_NormalPriority, function() {
            Bn === l && (Bn = null);
            for (var t = 0; t < l.length; t += 3) {
                var a = l[t]
                  , u = l[t + 1]
                  , e = l[t + 2];
                if (typeof u != "function") {
                    if (ui(u || a) === null)
                        continue;
                    break
                }
                var n = Ka(a);
                n !== null && (l.splice(t, 3),
                t -= 3,
                tf(n, {
                    pending: !0,
                    data: e,
                    method: a.method,
                    action: u
                }, u, e))
            }
        }))
    }
    function Mu(l) {
        function t(i) {
            return Yn(i, l)
        }
        ra !== null && Yn(ra, l),
        Sa !== null && Yn(Sa, l),
        ba !== null && Yn(ba, l),
        re.forEach(t),
        Se.forEach(t);
        for (var a = 0; a < za.length; a++) {
            var u = za[a];
            u.blockedOn === l && (u.blockedOn = null)
        }
        for (; 0 < za.length && (a = za[0],
        a.blockedOn === null); )
            so(a),
            a.blockedOn === null && za.shift();
        if (a = (l.ownerDocument || l).$$reactFormReplay,
        a != null)
            for (u = 0; u < a.length; u += 3) {
                var e = a[u]
                  , n = a[u + 1]
                  , c = e[Zl] || null;
                if (typeof n == "function")
                    c || oo(a);
                else if (c) {
                    var f = null;
                    if (n && n.hasAttribute("formAction")) {
                        if (e = n,
                        c = n[Zl] || null)
                            f = c.formAction;
                        else if (ui(e) !== null)
                            continue
                    } else
                        f = c.action;
                    typeof f == "function" ? a[u + 1] = f : (a.splice(u, 3),
                    u -= 3),
                    oo(a)
                }
            }
    }
    function mo() {
        function l(n) {
            n.canIntercept && n.info === "react-transition" && n.intercept({
                handler: function() {
                    return new Promise(function(c) {
                        return e = c
                    }
                    )
                },
                focusReset: "manual",
                scroll: "manual"
            })
        }
        function t() {
            e !== null && (e(),
            e = null),
            u || setTimeout(a, 20)
        }
        function a() {
            if (!u && !navigation.transition) {
                var n = navigation.currentEntry;
                n && n.url != null && navigation.navigate(n.url, {
                    state: n.getState(),
                    info: "react-transition",
                    history: "replace"
                })
            }
        }
        if (typeof navigation == "object") {
            var u = !1
              , e = null;
            return navigation.addEventListener("navigate", l),
            navigation.addEventListener("navigatesuccess", t),
            navigation.addEventListener("navigateerror", t),
            setTimeout(a, 100),
            function() {
                u = !0,
                navigation.removeEventListener("navigate", l),
                navigation.removeEventListener("navigatesuccess", t),
                navigation.removeEventListener("navigateerror", t),
                e !== null && (e(),
                e = null)
            }
        }
    }
    function ni(l) {
        this._internalRoot = l
    }
    Gn.prototype.render = ni.prototype.render = function(l) {
        var t = this._internalRoot;
        if (t === null)
            throw Error(v(409));
        var a = t.current
          , u = nt();
        uo(a, u, l, t, null, null)
    }
    ,
    Gn.prototype.unmount = ni.prototype.unmount = function() {
        var l = this._internalRoot;
        if (l !== null) {
            this._internalRoot = null;
            var t = l.containerInfo;
            uo(l.current, 2, null, l, null, null),
            bn(),
            t[Va] = null
        }
    }
    ;
    function Gn(l) {
        this._internalRoot = l
    }
    Gn.prototype.unstable_scheduleHydration = function(l) {
        if (l) {
            var t = Ei();
            l = {
                blockedOn: null,
                target: l,
                priority: t
            };
            for (var a = 0; a < za.length && t !== 0 && t < za[a].priority; a++)
                ;
            za.splice(a, 0, l),
            a === 0 && so(l)
        }
    }
    ;
    var vo = C.version;
    if (vo !== "19.2.1")
        throw Error(v(527, vo, "19.2.1"));
    _.findDOMNode = function(l) {
        var t = l._reactInternals;
        if (t === void 0)
            throw typeof l.render == "function" ? Error(v(188)) : (l = Object.keys(l).join(","),
            Error(v(268, l)));
        return l = E(t),
        l = l !== null ? V(l) : null,
        l = l === null ? null : l.stateNode,
        l
    }
    ;
    var $m = {
        bundleType: 0,
        version: "19.2.1",
        rendererPackageName: "react-dom",
        currentDispatcherRef: S,
        reconcilerVersion: "19.2.1"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Xn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Xn.isDisabled && Xn.supportsFiber)
            try {
                Du = Xn.inject($m),
                Fl = Xn
            } catch {}
    }
    return Te.createRoot = function(l, t) {
        if (!R(l))
            throw Error(v(299));
        var a = !1
          , u = ""
          , e = zs
          , n = Ts
          , c = Es;
        return t != null && (t.unstable_strictMode === !0 && (a = !0),
        t.identifierPrefix !== void 0 && (u = t.identifierPrefix),
        t.onUncaughtError !== void 0 && (e = t.onUncaughtError),
        t.onCaughtError !== void 0 && (n = t.onCaughtError),
        t.onRecoverableError !== void 0 && (c = t.onRecoverableError)),
        t = to(l, 1, !1, null, null, a, u, null, e, n, c, mo),
        l[Va] = t.current,
        Xf(l),
        new ni(t)
    }
    ,
    Te.hydrateRoot = function(l, t, a) {
        if (!R(l))
            throw Error(v(299));
        var u = !1
          , e = ""
          , n = zs
          , c = Ts
          , f = Es
          , i = null;
        return a != null && (a.unstable_strictMode === !0 && (u = !0),
        a.identifierPrefix !== void 0 && (e = a.identifierPrefix),
        a.onUncaughtError !== void 0 && (n = a.onUncaughtError),
        a.onCaughtError !== void 0 && (c = a.onCaughtError),
        a.onRecoverableError !== void 0 && (f = a.onRecoverableError),
        a.formState !== void 0 && (i = a.formState)),
        t = to(l, 1, !0, t, a ?? null, u, e, i, n, c, f, mo),
        t.context = ao(null),
        a = t.current,
        u = nt(),
        u = Wn(u),
        e = na(u),
        e.callback = null,
        ca(a, e, u),
        a = u,
        t.current.lanes = a,
        Nu(t, a),
        Ut(t),
        l[Va] = t.current,
        Xf(l),
        new Gn(t)
    }
    ,
    Te.version = "19.2.1",
    Te
}
var _o;
function fd() {
    if (_o)
        return ii.exports;
    _o = 1;
    function A() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A)
            } catch (C) {
                console.error(C)
            }
    }
    return A(),
    ii.exports = cd(),
    ii.exports
}
var id = fd();
const sd = Mo(id)
  , yd = () => X.jsxs("div", {
    className: "fixed inset-0 w-full h-full overflow-hidden -z-10 pointer-events-none",
    children: [X.jsx("div", {
        className: "absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"
    }), X.jsx("div", {
        className: "absolute top-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"
    }), X.jsx("div", {
        className: "absolute -bottom-32 left-1/3 w-96 h-96 bg-accent/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"
    }), X.jsx("div", {
        className: "absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"
    })]
});
/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const od = A => A.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , md = A => A.replace(/^([A-Z])|[\s-_]+(\w)/g, (C, Q, v) => v ? v.toUpperCase() : Q.toLowerCase())
  , po = A => {
    const C = md(A);
    return C.charAt(0).toUpperCase() + C.slice(1)
}
  , Oo = (...A) => A.filter( (C, Q, v) => !!C && C.trim() !== "" && v.indexOf(C) === Q).join(" ").trim()
  , dd = A => {
    for (const C in A)
        if (C.startsWith("aria-") || C === "role" || C === "title")
            return !0
}
;
/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var vd = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hd = rt.forwardRef( ({color: A="currentColor", size: C=24, strokeWidth: Q=2, absoluteStrokeWidth: v, className: R="", children: Z, iconNode: il, ...gl}, U) => rt.createElement("svg", {
    ref: U,
    ...vd,
    width: C,
    height: C,
    stroke: A,
    strokeWidth: v ? Number(Q) * 24 / Number(C) : Q,
    className: Oo("lucide", R),
    ...!Z && !dd(gl) && {
        "aria-hidden": "true"
    },
    ...gl
}, [...il.map( ([E,V]) => rt.createElement(E, V)), ...Array.isArray(Z) ? Z : [Z]]));
/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const St = (A, C) => {
    const Q = rt.forwardRef( ({className: v, ...R}, Z) => rt.createElement(hd, {
        ref: Z,
        iconNode: C,
        className: Oo(`lucide-${od(po(A))}`, `lucide-${A}`, v),
        ...R
    }));
    return Q.displayName = po(A),
    Q
}
;
/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gd = [["path", {
    d: "M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z",
    key: "1t2lqe"
}], ["path", {
    d: "M10 21.9V14L2.1 9.1",
    key: "o7czzq"
}], ["path", {
    d: "m10 14 11.9-6.9",
    key: "zm5e20"
}], ["path", {
    d: "M14 19.8v-8.1",
    key: "159ecu"
}], ["path", {
    d: "M18 17.5V9.4",
    key: "11uown"
}]]
  , rd = St("container", gd);
/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sd = [["path", {
    d: "M12 20v2",
    key: "1lh1kg"
}], ["path", {
    d: "M12 2v2",
    key: "tus03m"
}], ["path", {
    d: "M17 20v2",
    key: "1rnc9c"
}], ["path", {
    d: "M17 2v2",
    key: "11trls"
}], ["path", {
    d: "M2 12h2",
    key: "1t8f8n"
}], ["path", {
    d: "M2 17h2",
    key: "7oei6x"
}], ["path", {
    d: "M2 7h2",
    key: "asdhe0"
}], ["path", {
    d: "M20 12h2",
    key: "1q8mjw"
}], ["path", {
    d: "M20 17h2",
    key: "1fpfkl"
}], ["path", {
    d: "M20 7h2",
    key: "1o8tra"
}], ["path", {
    d: "M7 20v2",
    key: "4gnj0m"
}], ["path", {
    d: "M7 2v2",
    key: "1i4yhu"
}], ["rect", {
    x: "4",
    y: "4",
    width: "16",
    height: "16",
    rx: "2",
    key: "1vbyd7"
}], ["rect", {
    x: "8",
    y: "8",
    width: "8",
    height: "8",
    rx: "1",
    key: "z9xiuo"
}]]
  , bd = St("cpu", Sd);
/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zd = [["path", {
    d: "M15 3h6v6",
    key: "1q9fwt"
}], ["path", {
    d: "M10 14 21 3",
    key: "gplh6r"
}], ["path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
    key: "a6xqqp"
}]]
  , Td = St("external-link", zd);
/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ed = [["path", {
    d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
    key: "1oefj6"
}], ["path", {
    d: "M14 2v5a1 1 0 0 0 1 1h5",
    key: "wfsgrz"
}], ["path", {
    d: "M10 12.5 8 15l2 2.5",
    key: "1tg20x"
}], ["path", {
    d: "m14 12.5 2 2.5-2 2.5",
    key: "yinavb"
}]]
  , Ad = St("file-code", Ed);
/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _d = [["path", {
    d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
    key: "tonef"
}], ["path", {
    d: "M9 18c-4.51 2-5-2-7-2",
    key: "9comsn"
}]]
  , pd = St("github", _d);
/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Md = [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
    key: "13o1zl"
}], ["path", {
    d: "M2 12h20",
    key: "9i4pu4"
}]]
  , Od = St("globe", Md);
/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dd = [["rect", {
    width: "20",
    height: "20",
    x: "2",
    y: "2",
    rx: "5",
    ry: "5",
    key: "2e1cvw"
}], ["path", {
    d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
    key: "9exkf1"
}], ["line", {
    x1: "17.5",
    x2: "17.51",
    y1: "6.5",
    y2: "6.5",
    key: "r4j83e"
}]]
  , Ud = St("instagram", Dd);
/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nd = [["path", {
    d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
    key: "c2jq9f"
}], ["rect", {
    width: "4",
    height: "12",
    x: "2",
    y: "9",
    key: "mk3on5"
}], ["circle", {
    cx: "4",
    cy: "4",
    r: "2",
    key: "bt5ra8"
}]]
  , xd = St("linkedin", Nd);
/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hd = [["rect", {
    width: "20",
    height: "8",
    x: "2",
    y: "2",
    rx: "2",
    ry: "2",
    key: "ngkwjq"
}], ["rect", {
    width: "20",
    height: "8",
    x: "2",
    y: "14",
    rx: "2",
    ry: "2",
    key: "iecqi9"
}], ["line", {
    x1: "6",
    x2: "6.01",
    y1: "6",
    y2: "6",
    key: "16zg32"
}], ["line", {
    x1: "6",
    x2: "6.01",
    y1: "18",
    y2: "18",
    key: "nzw8ys"
}]]
  , Rd = St("server", Hd);
/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qd = [["circle", {
    cx: "18",
    cy: "5",
    r: "3",
    key: "gq8acd"
}], ["circle", {
    cx: "6",
    cy: "12",
    r: "3",
    key: "w7nqdw"
}], ["circle", {
    cx: "18",
    cy: "19",
    r: "3",
    key: "1xt0gg"
}], ["line", {
    x1: "8.59",
    x2: "15.42",
    y1: "13.51",
    y2: "17.49",
    key: "47mynk"
}], ["line", {
    x1: "15.41",
    x2: "8.59",
    y1: "6.51",
    y2: "10.49",
    key: "1n3mei"
}]]
  , Cd = St("share-2", qd);
/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jd = [["path", {
    d: "M12 19h8",
    key: "baeox8"
}], ["path", {
    d: "m4 17 6-6-6-6",
    key: "1yngyt"
}]]
  , Yd = St("terminal", jd);
/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bd = [["path", {
    d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
    key: "1q2vi4"
}], ["path", {
    d: "m10 15 5-3-5-3z",
    key: "1jp15x"
}]]
  , Gd = St("youtube", Bd)
  , Xd = [{
    name: "Golang",
    icon: Yd,
    color: "text-yellow-400"
}, {
    name: "Node",
    icon: Ad,
    color: "text-yellow-300"
}, {
    name: "Python",
    icon: Rd,
    color: "text-red-500"
}, {
    name: "Docker",
    icon: rd,
    color: "text-blue-500"
}, {
    name: "GCP",
    icon: Od,
    color: "text-orange-500"
}, {
    name: "AWS",
    icon: bd,
    color: "text-gray-200"
}, {
    name: "Open Source",
    icon: Cd,
    color: "text-green-400"
}]
  , Qd = () => X.jsxs("div", {
    className: "w-full py-6",
    children: [X.jsx("h3", {
        className: "text-xl font-semibold text-gray-400 mb-6 text-center uppercase tracking-widest text-sm font-mono",
        children: "Tech Stack"
    }), X.jsx("div", {
        className: "flex flex-wrap justify-center gap-4 md:gap-6",
        children: Xd.map( (A, C) => X.jsxs("div", {
            className: "group relative flex items-center gap-3 px-6 py-3 rounded-full glass-card hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-default border-white/10",
            style: {
                animationDelay: `${C * 100}ms`
            },
            children: [X.jsx(A.icon, {
                className: `w-5 h-5 ${A.color} group-hover:animate-pulse`
            }), X.jsx("span", {
                className: "text-gray-200 font-medium group-hover:text-white transition-colors font-mono text-sm",
                children: A.name
            }), X.jsx("div", {
                className: "absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            })]
        }, A.name))
    })]
})
  , Zd = [{
    name: "GitHub",
    url: "https://github.com/alexanderbkl",
    icon: pd,
    color: "hover:border-gray-200 hover:shadow-gray-200/20 group-hover:text-gray-100",
    username: "@alexanderbkl"
}, {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/alexanderbaikalov/",
    icon: xd,
    color: "hover:border-blue-500 hover:shadow-blue-500/20 group-hover:text-blue-500",
    username: "Alexander Baikalov"
}]
  , Vd = () => X.jsx("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-5xl mx-auto mt-8",
    children: Zd.map(A => X.jsxs("a", {
        href: A.url,
        target: "_blank",
        rel: "noopener noreferrer",
        className: `group glass-card p-6 rounded-2xl flex flex-col items-center justify-center gap-4 transition-all duration-300 border border-white/5 ${A.color} hover:-translate-y-1`,
        children: [X.jsx("div", {
            className: "p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors",
            children: X.jsx(A.icon, {
                className: "w-8 h-8 text-gray-400 transition-colors duration-300"
            })
        }), X.jsxs("div", {
            className: "text-center",
            children: [X.jsx("h3", {
                className: "text-lg font-bold text-gray-200 group-hover:text-white",
                children: A.name
            }), X.jsx("p", {
                className: "text-sm text-gray-500 group-hover:text-gray-400",
                children: A.username
            })]
        }), X.jsx(Td, {
            className: "w-4 h-4 text-gray-600 absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
        })]
    }, A.name))
})
  , Ld = ({segments: A, typingSpeed: C=40}) => {
    const [Q,v] = rt.useState([])
      , [R,Z] = rt.useState(0)
      , [il,gl] = rt.useState(0)
      , [U,E] = rt.useState(!1);
    return rt.useEffect( () => {
        const V = setTimeout( () => E(!0), 500);
        return () => clearTimeout(V)
    }
    , []),
    rt.useEffect( () => {
        if (!U || R >= A.length)
            return;
        const V = setTimeout( () => {
            const x = A[R];
            if (il < x.text.length) {
                const tl = x.text[il];
                v(Dl => {
                    const rl = [...Dl];
                    return rl[R] ? rl[R] = {
                        ...rl[R],
                        text: rl[R].text + tl
                    } : rl[R] = {
                        ...x,
                        text: tl
                    },
                    rl
                }
                ),
                gl(Dl => Dl + 1)
            } else
                Z(tl => tl + 1),
                gl(0)
        }
        , C);
        return () => clearTimeout(V)
    }
    , [R, il, A, C, U]),
    X.jsxs("span", {
        className: "font-mono",
        children: [Q.map( (V, x) => X.jsx("span", {
            className: V.className,
            children: V.text
        }, x)), X.jsx("span", {
            className: "animate-pulse inline-block w-2.5 h-5 bg-primary ml-1 align-middle"
        })]
    })
}
  , Kd = () => {
    const A = [{
        text: '"Passionate about ',
        className: "text-gray-400"
    }, {
        text: "software architecture",
        className: "text-primary font-bold"
    }, {
        text: ", ",
        className: "text-gray-400"
    }, {
        text: "infrastructure",
        className: "text-secondary font-bold"
    }, {
        text: ", and everything related to the ",
        className: "text-gray-400"
    }, {
        text: "tech industry",
        className: "text-accent font-bold"
    }, {
        text: '."',
        className: "text-gray-400"
    }];
    return X.jsxs("div", {
        className: "min-h-screen w-full relative text-gray-100 selection:bg-primary/30 selection:text-white overflow-hidden font-sans",
        children: [X.jsx(yd, {}), X.jsxs("main", {
            className: "container mx-auto px-4 py-12 md:py-20 flex flex-col items-center min-h-screen",
            children: [X.jsxs("div", {
                className: "relative z-10 text-center max-w-4xl mx-auto animate-fade-in mb-8 mt-16 md:mt-24",
                children: [X.jsx("div", {
                    className: "flex flex-col items-center justify-center mb-6",
                    children: X.jsx("h1", {
                        className: "text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 font-mono filter drop-shadow-2xl",
                        children: "</Aleks>"
                    })
                }), X.jsx("div", {
                    className: "max-w-3xl mx-auto px-6 h-20 flex items-center justify-center",
                    children: X.jsx("div", {
                        className: "text-lg mt-auto md:text-xl font-light leading-relaxed",
                        children: X.jsx(Ld, {
                            segments: A,
                            typingSpeed: 40
                        })
                    })
                })]
            }), X.jsx("div", {
                className: "w-16 h-px bg-white/10 mb-8"
            }), X.jsx("section", {
                className: "w-full animate-slide-up relative z-10",
                style: {
                    animationDelay: "0.2s"
                },
                children: X.jsx(Qd, {})
            }), X.jsx("section", {
                className: "w-full animate-slide-up mb-20 relative z-10",
                style: {
                    animationDelay: "0.4s"
                },
                children: X.jsx(Vd, {})
            }), X.jsx("footer", {
                className: "text-center text-gray-600 text-sm mt-auto pb-8 relative z-10 font-mono",
                children: X.jsxs("p", {
                    children: ["© ", new Date().getFullYear(), " Aleks."]
                })
            })]
        })]
    })
}
  , Do = document.getElementById("root");
if (!Do)
    throw new Error("Could not find root element to mount to");
const Jd = sd.createRoot(Do);
Jd.render(X.jsx(td.StrictMode, {
    children: X.jsx(Kd, {})
}));
