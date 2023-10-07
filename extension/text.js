(() => {
  var e = function (t, n) {
    return (
      (e =
        Object.setPrototypeOf ||
        ({
          __proto__: [],
        } instanceof Array &&
          function (e, t) {
            e.__proto__ = t;
          }) ||
        function (e, t) {
          for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        }),
      e(t, n)
    );
  };
  function t(t, n) {
    if ("function" != typeof n && null !== n)
      throw new TypeError(
        "Class extends value " + String(n) + " is not a constructor or null"
      );
    function r() {
      this.constructor = t;
    }
    e(t, n),
      (t.prototype =
        null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
  }
  function n(e, t, n, r) {
    return new (n || (n = Promise))(function (i, o) {
      function s(e) {
        try {
          u(r.next(e));
        } catch (e) {
          o(e);
        }
      }
      function a(e) {
        try {
          u(r.throw(e));
        } catch (e) {
          o(e);
        }
      }
      function u(e) {
        var t;
        e.done
          ? i(e.value)
          : ((t = e.value),
            t instanceof n
              ? t
              : new n(function (e) {
                  e(t);
                })).then(s, a);
      }
      u((r = r.apply(e, t || [])).next());
    });
  }
  function r(e, t) {
    var n,
      r,
      i,
      o,
      s = {
        label: 0,
        sent: function () {
          if (1 & i[0]) throw i[1];
          return i[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (o = {
        next: a(0),
        throw: a(1),
        return: a(2),
      }),
      "function" == typeof Symbol &&
        (o[Symbol.iterator] = function () {
          return this;
        }),
      o
    );
    function a(o) {
      return function (a) {
        return (function (o) {
          if (n) throw new TypeError("Generator is already executing.");
          for (; s; )
            try {
              if (
                ((n = 1),
                r &&
                  (i =
                    2 & o[0]
                      ? r.return
                      : o[0]
                      ? r.throw || ((i = r.return) && i.call(r), 0)
                      : r.next) &&
                  !(i = i.call(r, o[1])).done)
              )
                return i;
              switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                case 0:
                case 1:
                  i = o;
                  break;
                case 4:
                  return (
                    s.label++,
                    {
                      value: o[1],
                      done: !1,
                    }
                  );
                case 5:
                  s.label++, (r = o[1]), (o = [0]);
                  continue;
                case 7:
                  (o = s.ops.pop()), s.trys.pop();
                  continue;
                default:
                  if (
                    !((i = s.trys),
                    (i = i.length > 0 && i[i.length - 1]) ||
                      (6 !== o[0] && 2 !== o[0]))
                  ) {
                    s = 0;
                    continue;
                  }
                  if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                    s.label = o[1];
                    break;
                  }
                  if (6 === o[0] && s.label < i[1]) {
                    (s.label = i[1]), (i = o);
                    break;
                  }
                  if (i && s.label < i[2]) {
                    (s.label = i[2]), s.ops.push(o);
                    break;
                  }
                  i[2] && s.ops.pop(), s.trys.pop();
                  continue;
              }
              o = t.call(e, s);
            } catch (e) {
              (o = [6, e]), (r = 0);
            } finally {
              n = i = 0;
            }
          if (5 & o[0]) throw o[1];
          return {
            value: o[0] ? o[1] : void 0,
            done: !0,
          };
        })([o, a]);
      };
    }
  }
  Object.create;
  function i(e) {
    var t = "function" == typeof Symbol && Symbol.iterator,
      n = t && e[t],
      r = 0;
    if (n) return n.call(e);
    if (e && "number" == typeof e.length)
      return {
        next: function () {
          return (
            e && r >= e.length && (e = void 0),
            {
              value: e && e[r++],
              done: !e,
            }
          );
        },
      };
    throw new TypeError(
      t ? "Object is not iterable." : "Symbol.iterator is not defined."
    );
  }
  function o(e, t) {
    var n = "function" == typeof Symbol && e[Symbol.iterator];
    if (!n) return e;
    var r,
      i,
      o = n.call(e),
      s = [];
    try {
      for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
        s.push(r.value);
    } catch (e) {
      i = {
        error: e,
      };
    } finally {
      try {
        r && !r.done && (n = o.return) && n.call(o);
      } finally {
        if (i) throw i.error;
      }
    }
    return s;
  }
  function s(e, t, n) {
    if (n || 2 === arguments.length)
      for (var r, i = 0, o = t.length; i < o; i++)
        (!r && i in t) ||
          (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
    return e.concat(r || Array.prototype.slice.call(t));
  }
  function a(e) {
    return this instanceof a ? ((this.v = e), this) : new a(e);
  }
  function u(e, t, n) {
    if (!Symbol.asyncIterator)
      throw new TypeError("Symbol.asyncIterator is not defined.");
    var r,
      i = n.apply(e, t || []),
      o = [];
    return (
      (r = {}),
      s("next"),
      s("throw"),
      s("return"),
      (r[Symbol.asyncIterator] = function () {
        return this;
      }),
      r
    );
    function s(e) {
      i[e] &&
        (r[e] = function (t) {
          return new Promise(function (n, r) {
            o.push([e, t, n, r]) > 1 || u(e, t);
          });
        });
    }
    function u(e, t) {
      try {
        (n = i[e](t)).value instanceof a
          ? Promise.resolve(n.value.v).then(c, l)
          : p(o[0][2], n);
      } catch (e) {
        p(o[0][3], e);
      }
      var n;
    }
    function c(e) {
      u("next", e);
    }
    function l(e) {
      u("throw", e);
    }
    function p(e, t) {
      e(t), o.shift(), o.length && u(o[0][0], o[0][1]);
    }
  }
  function c(e) {
    if (!Symbol.asyncIterator)
      throw new TypeError("Symbol.asyncIterator is not defined.");
    var t,
      n = e[Symbol.asyncIterator];
    return n
      ? n.call(e) 
      : ((e = i(e)),
        (t = {}),
        r("next"),
        r("throw"),
        r("return"),
        (t[Symbol.asyncIterator] = function () {
          return this;
        }),
        t);
    function r(n) {
      t[n] =
        e[n] &&
        function (t) {
          return new Promise(function (r, i) {
            (function (e, t, n, r) {
              Promise.resolve(r).then(function (t) {
                e({
                  value: t,
                  done: n,
                });
              }, t);
            })(r, i, (t = e[n](t)).done, t.value);
          });
        };
    }
  }
  Object.create;
  var l = function (e) {
    return e && "number" == typeof e.length && "function" != typeof e;
  };
  function p(e) {
    return "function" == typeof e;
  }
  function h(e) {
    return p(null == e ? void 0 : e.then);
  }
  function f(e) {
    var t = e(function (e) {
      Error.call(e), (e.stack = new Error().stack);
    });
    return (
      (t.prototype = Object.create(Error.prototype)),
      (t.prototype.constructor = t),
      t
    );
  }
  var d = f(function (e) {
    return function (t) {
      e(this),
        (this.message = t
          ? t.length +
            " errors occurred during unsubscription:\n" +
            t
              .map(function (e, t) {
                return t + 1 + ") " + e.toString();
              })
              .join("\n  ")
          : ""),
        (this.name = "UnsubscriptionError"),
        (this.errors = t);
    };
  });
  function v(e, t) {
    if (e) {
      var n = e.indexOf(t);
      0 <= n && e.splice(n, 1);
    }
  }
  var y = (function () {
      function e(e) {
        (this.initialTeardown = e),
          (this.closed = !1),
          (this._parentage = null),
          (this._finalizers = null);
      }
      var t;
      return (
        (e.prototype.unsubscribe = function () {
          var e, t, n, r, a;
          if (!this.closed) {
            this.closed = !0;
            var u = this._parentage;
            if (u)
              if (((this._parentage = null), Array.isArray(u)))
                try {
                  for (var c = i(u), l = c.next(); !l.done; l = c.next()) {
                    l.value.remove(this);
                  }
                } catch (t) {
                  e = {
                    error: t,
                  };
                } finally {
                  try {
                    l && !l.done && (t = c.return) && t.call(c);
                  } finally {
                    if (e) throw e.error;
                  }
                }
              else u.remove(this);
            var h = this.initialTeardown;
            if (p(h))
              try {
                h();
              } catch (e) {
                a = e instanceof d ? e.errors : [e];
              }
            var f = this._finalizers;
            if (f) {
              this._finalizers = null;
              try {
                for (var v = i(f), y = v.next(); !y.done; y = v.next()) {
                  var m = y.value;
                  try {
                    x(m);
                  } catch (e) {
                    (a = null != a ? a : []),
                      e instanceof d
                        ? (a = s(s([], o(a)), o(e.errors)))
                        : a.push(e);
                  }
                }
              } catch (e) {
                n = {
                  error: e,
                };
              } finally {
                try {
                  y && !y.done && (r = v.return) && r.call(v);
                } finally {
                  if (n) throw n.error;
                }
              }
            }
            if (a) throw new d(a);
          }
        }),
        (e.prototype.add = function (t) {
          var n;
          if (t && t !== this)
            if (this.closed) x(t);
            else {
              if (t instanceof e) {
                if (t.closed || t._hasParent(this)) return;
                t._addParent(this);
              }
              (this._finalizers =
                null !== (n = this._finalizers) && void 0 !== n ? n : []).push(
                t
              );
            }
        }),
        (e.prototype._hasParent = function (e) {
          var t = this._parentage;
          return t === e || (Array.isArray(t) && t.includes(e));
        }),
        (e.prototype._addParent = function (e) {
          var t = this._parentage;
          this._parentage = Array.isArray(t) ? (t.push(e), t) : t ? [t, e] : e;
        }),
        (e.prototype._removeParent = function (e) {
          var t = this._parentage;
          t === e ? (this._parentage = null) : Array.isArray(t) && v(t, e);
        }),
        (e.prototype.remove = function (t) {
          var n = this._finalizers;
          n && v(n, t), t instanceof e && t._removeParent(this);
        }),
        (e.EMPTY = (((t = new e()).closed = !0), t)),
        e
      );
    })(),
    m = y.EMPTY;
  function b(e) {
    return (
      e instanceof y ||
      (e && "closed" in e && p(e.remove) && p(e.add) && p(e.unsubscribe))
    );
  }
  function x(e) {
    p(e) ? e() : e.unsubscribe();
  }
  var g = {
      onUnhandledError: null,
      onStoppedNotification: null,
      Promise: void 0,
      useDeprecatedSynchronousErrorHandling: !1,
      useDeprecatedNextContext: !1,
    },
    w = {
      setTimeout: function (e, t) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        var i = w.delegate;
        return (null == i ? void 0 : i.setTimeout)
          ? i.setTimeout.apply(i, s([e, t], o(n)))
          : setTimeout.apply(void 0, s([e, t], o(n)));
      },
      clearTimeout: function (e) {
        var t = w.delegate;
        return ((null == t ? void 0 : t.clearTimeout) || clearTimeout)(e);
      },
      delegate: void 0,
    };
  function E(e) {
    w.setTimeout(function () {
      var t = g.onUnhandledError;
      if (!t) throw e;
      t(e);
    });
  }
  function S() {}
  var k = A("C", void 0, void 0);
  function I(e) {
    return A("N", e, void 0);
  }
  function A(e, t, n) {
    return {
      kind: e,
      value: t,
      error: n,
    };
  }
  var M = null;
  function T(e) {
    if (g.useDeprecatedSynchronousErrorHandling) {
      var t = !M;
      if (
        (t &&
          (M = {
            errorThrown: !1,
            error: null,
          }),
        e(),
        t)
      ) {
        var n = M,
          r = n.errorThrown,
          i = n.error;
        if (((M = null), r)) throw i;
      }
    } else e();
  }
  var O = (function (e) {
      function n(t) {
        var n = e.call(this) || this;
        return (
          (n.isStopped = !1),
          t ? ((n.destination = t), b(t) && t.add(n)) : (n.destination = P),
          n
        );
      }
      return (
        t(n, e),
        (n.create = function (e, t, n) {
          return new j(e, t, n);
        }),
        (n.prototype.next = function (e) {
          this.isStopped ? $(I(e), this) : this._next(e);
        }),
        (n.prototype.error = function (e) {
          this.isStopped
            ? $(A("E", void 0, e), this)
            : ((this.isStopped = !0), this._error(e));
        }),
        (n.prototype.complete = function () {
          this.isStopped
            ? $(k, this)
            : ((this.isStopped = !0), this._complete());
        }),
        (n.prototype.unsubscribe = function () {
          this.closed ||
            ((this.isStopped = !0),
            e.prototype.unsubscribe.call(this),
            (this.destination = null));
        }),
        (n.prototype._next = function (e) {
          this.destination.next(e);
        }),
        (n.prototype._error = function (e) {
          try {
            this.destination.error(e);
          } finally {
            this.unsubscribe();
          }
        }),
        (n.prototype._complete = function () {
          try {
            this.destination.complete();
          } finally {
            this.unsubscribe();
          }
        }),
        n
      );
    })(y),
    C = Function.prototype.bind;
  function _(e, t) {
    return C.call(e, t);
  }
  var R = (function () {
      function e(e) {
        this.partialObserver = e;
      }
      return (
        (e.prototype.next = function (e) {
          var t = this.partialObserver;
          if (t.next)
            try {
              t.next(e);
            } catch (e) {
              F(e);
            }
        }),
        (e.prototype.error = function (e) {
          var t = this.partialObserver;
          if (t.error)
            try {
              t.error(e);
            } catch (e) {
              F(e);
            }
          else F(e);
        }),
        (e.prototype.complete = function () {
          var e = this.partialObserver;
          if (e.complete)
            try {
              e.complete();
            } catch (e) {
              F(e);
            }
        }),
        e
      );
    })(),
    j = (function (e) {
      function n(t, n, r) {
        var i,
          o,
          s = e.call(this) || this;
        p(t) || !t
          ? (i = {
              next: null != t ? t : void 0,
              error: null != n ? n : void 0,
              complete: null != r ? r : void 0,
            })
          : s && g.useDeprecatedNextContext
          ? (((o = Object.create(t)).unsubscribe = function () {
              return s.unsubscribe();
            }),
            (i = {
              next: t.next && _(t.next, o),
              error: t.error && _(t.error, o),
              complete: t.complete && _(t.complete, o),
            }))
          : (i = t);
        return (s.destination = new R(i)), s;
      }
      return t(n, e), n;
    })(O);
  function F(e) {
    var t;
    g.useDeprecatedSynchronousErrorHandling
      ? ((t = e),
        g.useDeprecatedSynchronousErrorHandling &&
          M &&
          ((M.errorThrown = !0), (M.error = t)))
      : E(e);
  }
  function $(e, t) {
    var n = g.onStoppedNotification;
    n &&
      w.setTimeout(function () {
        return n(e, t);
      });
  }
  var P = {
      closed: !0,
      next: S,
      error: function (e) {
        throw e;
      },
      complete: S,
    },
    X = ("function" == typeof Symbol && Symbol.observable) || "@@observable";
  function N(e) {
    return e;
  }
  function Y() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return B(e);
  }
  function B(e) {
    return 0 === e.length
      ? N
      : 1 === e.length
      ? e[0]
      : function (t) {
          return e.reduce(function (e, t) {
            return t(e);
          }, t);
        };
  }
  var L = (function () {
    function e(e) {
      e && (this._subscribe = e);
    }
    return (
      (e.prototype.lift = function (t) {
        var n = new e();
        return (n.source = this), (n.operator = t), n;
      }),
      (e.prototype.subscribe = function (e, t, n) {
        var r,
          i = this,
          o =
            ((r = e) && r instanceof O) ||
            ((function (e) {
              return e && p(e.next) && p(e.error) && p(e.complete);
            })(r) &&
              b(r))
              ? e
              : new j(e, t, n);
        return (
          T(function () {
            var e = i,
              t = e.operator,
              n = e.source;
            o.add(t ? t.call(o, n) : n ? i._subscribe(o) : i._trySubscribe(o));
          }),
          o
        );
      }),
      (e.prototype._trySubscribe = function (e) {
        try {
          return this._subscribe(e);
        } catch (t) {
          e.error(t);
        }
      }),
      (e.prototype.forEach = function (e, t) {
        var n = this;
        return new (t = q(t))(function (t, r) {
          var i = new j({
            next: function (t) {
              try {
                e(t);
              } catch (e) {
                r(e), i.unsubscribe();
              }
            },
            error: r,
            complete: t,
          });
          n.subscribe(i);
        });
      }),
      (e.prototype._subscribe = function (e) {
        var t;
        return null === (t = this.source) || void 0 === t
          ? void 0
          : t.subscribe(e);
      }),
      (e.prototype[X] = function () {
        return this;
      }),
      (e.prototype.pipe = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return B(e)(this);
      }),
      (e.prototype.toPromise = function (e) {
        var t = this;
        return new (e = q(e))(function (e, n) {
          var r;
          t.subscribe(
            function (e) {
              return (r = e);
            },
            function (e) {
              return n(e);
            },
            function () {
              return e(r);
            }
          );
        });
      }),
      (e.create = function (t) {
        return new e(t);
      }),
      e
    );
  })();
  function q(e) {
    var t;
    return null !== (t = null != e ? e : g.Promise) && void 0 !== t
      ? t
      : Promise;
  }
  function z(e) {
    return p(e[X]);
  }
  function W(e) {
    return (
      Symbol.asyncIterator && p(null == e ? void 0 : e[Symbol.asyncIterator])
    );
  }
  function D(e) {
    return new TypeError(
      "You provided " +
        (null !== e && "object" == typeof e
          ? "an invalid object"
          : "'" + e + "'") +
        " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable."
    );
  }
  var U =
    "function" == typeof Symbol && Symbol.iterator
      ? Symbol.iterator
      : "@@iterator";
  function V(e) {
    return p(null == e ? void 0 : e[U]);
  }
  function J(e) {
    return u(this, arguments, function () {
      var t, n, i;
      return r(this, function (r) {
        switch (r.label) {
          case 0:
            (t = e.getReader()), (r.label = 1);
          case 1:
            r.trys.push([1, , 9, 10]), (r.label = 2);
          case 2:
            return [4, a(t.read())];
          case 3:
            return (
              (n = r.sent()), (i = n.value), n.done ? [4, a(void 0)] : [3, 5]
            );
          case 4:
            return [2, r.sent()];
          case 5:
            return [4, a(i)];
          case 6:
            return [4, r.sent()];
          case 7:
            return r.sent(), [3, 2];
          case 8:
            return [3, 10];
          case 9:
            return t.releaseLock(), [7];
          case 10:
            return [2];
        }
      });
    });
  }
  function H(e) {
    return p(null == e ? void 0 : e.getReader);
  }
  function G(e) {
    if (e instanceof L) return e;
    if (null != e) {
      if (z(e))
        return (
          (o = e),
          new L(function (e) {
            var t = o[X]();
            if (p(t.subscribe)) return t.subscribe(e);
            throw new TypeError(
              "Provided object does not correctly implement Symbol.observable"
            );
          })
        );
      if (l(e))
        return (
          (r = e),
          new L(function (e) {
            for (var t = 0; t < r.length && !e.closed; t++) e.next(r[t]);
            e.complete();
          })
        );
      if (h(e))
        return (
          (n = e),
          new L(function (e) {
            n.then(
              function (t) {
                e.closed || (e.next(t), e.complete());
              },
              function (t) {
                return e.error(t);
              }
            ).then(null, E);
          })
        );
      if (W(e)) return Z(e);
      if (V(e))
        return (
          (t = e),
          new L(function (e) {
            var n, r;
            try {
              for (var o = i(t), s = o.next(); !s.done; s = o.next()) {
                var a = s.value;
                if ((e.next(a), e.closed)) return;
              }
            } catch (e) {
              n = {
                error: e,
              };
            } finally {
              try {
                s && !s.done && (r = o.return) && r.call(o);
              } finally {
                if (n) throw n.error;
              }
            }
            e.complete();
          })
        );
      if (H(e)) return Z(J(e));
    }
    var t, n, r, o;
    throw D(e);
  }
  function Z(e) {
    return new L(function (t) {
      (function (e, t) {
        var i, o, s, a;
        return n(this, void 0, void 0, function () {
          var n, u;
          return r(this, function (r) {
            switch (r.label) {
              case 0:
                r.trys.push([0, 5, 6, 11]), (i = c(e)), (r.label = 1);
              case 1:
                return [4, i.next()];
              case 2:
                if ((o = r.sent()).done) return [3, 4];
                if (((n = o.value), t.next(n), t.closed)) return [2];
                r.label = 3;
              case 3:
                return [3, 1];
              case 4:
                return [3, 11];
              case 5:
                return (
                  (u = r.sent()),
                  (s = {
                    error: u,
                  }),
                  [3, 11]
                );
              case 6:
                return (
                  r.trys.push([6, , 9, 10]),
                  o && !o.done && (a = i.return) ? [4, a.call(i)] : [3, 8]
                );
              case 7:
                r.sent(), (r.label = 8);
              case 8:
                return [3, 10];
              case 9:
                if (s) throw s.error;
                return [7];
              case 10:
                return [7];
              case 11:
                return t.complete(), [2];
            }
          });
        });
      })(e, t).catch(function (e) {
        return t.error(e);
      });
    });
  }
  function K(e) {
    return function (t) {
      if (
        (function (e) {
          return p(null == e ? void 0 : e.lift);
        })(t)
      )
        return t.lift(function (t) {
          try {
            return e(t, this);
          } catch (e) {
            this.error(e);
          }
        });
      throw new TypeError("Unable to lift unknown Observable type");
    };
  }
  function Q(e, t, n, r, i) {
    return new ee(e, t, n, r, i);
  }
  var ee = (function (e) {
    function n(t, n, r, i, o, s) {
      var a = e.call(this, t) || this;
      return (
        (a.onFinalize = o),
        (a.shouldUnsubscribe = s),
        (a._next = n
          ? function (e) {
              try {
                n(e);
              } catch (e) {
                t.error(e);
              }
            }
          : e.prototype._next),
        (a._error = i
          ? function (e) {
              try {
                i(e);
              } catch (e) {
                t.error(e);
              } finally {
                this.unsubscribe();
              }
            }
          : e.prototype._error),
        (a._complete = r
          ? function () {
              try {
                r();
              } catch (e) {
                t.error(e);
              } finally {
                this.unsubscribe();
              }
            }
          : e.prototype._complete),
        a
      );
    }
    return (
      t(n, e),
      (n.prototype.unsubscribe = function () {
        var t;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
          var n = this.closed;
          e.prototype.unsubscribe.call(this),
            !n &&
              (null === (t = this.onFinalize) || void 0 === t || t.call(this));
        }
      }),
      n
    );
  })(O);
  function te(e, t) {
    return K(function (n, r) {
      var i = 0;
      n.subscribe(
        Q(r, function (n) {
          r.next(e.call(t, n, i++));
        })
      );
    });
  }
  function ne(e, t, n, r, i) {
    void 0 === r && (r = 0), void 0 === i && (i = !1);
    var o = t.schedule(function () {
      n(), i ? e.add(this.schedule(null, r)) : this.unsubscribe();
    }, r);
    if ((e.add(o), !i)) return o;
  }
  function re(e, t, n, r, i, o, s, a) {
    var u = [],
      c = 0,
      l = 0,
      p = !1,
      h = function () {
        !p || u.length || c || t.complete();
      },
      f = function (e) {
        return c < r ? d(e) : u.push(e);
      },
      d = function (e) {
        o && t.next(e), c++;
        var a = !1;
        G(n(e, l++)).subscribe(
          Q(
            t,
            function (e) {
              null == i || i(e), o ? f(e) : t.next(e);
            },
            function () {
              a = !0;
            },
            void 0,
            function () {
              if (a)
                try {
                  c--;
                  for (
                    var e = function () {
                      var e = u.shift();
                      s
                        ? ne(t, s, function () {
                            return d(e);
                          })
                        : d(e);
                    };
                    u.length && c < r;

                  )
                    e();
                  h();
                } catch (e) {
                  t.error(e);
                }
            }
          )
        );
      };
    return (
      e.subscribe(
        Q(t, f, function () {
          (p = !0), h();
        })
      ),
      function () {
        null == a || a();
      }
    );
  }
  function ie(e, t, n) {
    return (
      void 0 === n && (n = 1 / 0),
      p(t)
        ? ie(function (n, r) {
            return te(function (e, i) {
              return t(n, e, r, i);
            })(G(e(n, r)));
          }, n)
        : ("number" == typeof t && (n = t),
          K(function (t, r) {
            return re(t, r, e, n);
          }))
    );
  }
  var oe = Array.isArray;
  function se(e) {
    return te(function (t) {
      return (function (e, t) {
        return oe(t) ? e.apply(void 0, s([], o(t))) : e(t);
      })(e, t);
    });
  }
  var ae = ["addListener", "removeListener"],
    ue = ["addEventListener", "removeEventListener"],
    ce = ["on", "off"];
  function le(e, t, n, r) {
    if ((p(n) && ((r = n), (n = void 0)), r)) return le(e, t, n).pipe(se(r));
    var i = o(
        (function (e) {
          return p(e.addEventListener) && p(e.removeEventListener);
        })(e)
          ? ue.map(function (r) {
              return function (i) {
                return e[r](t, i, n);
              };
            })
          : (function (e) {
              return p(e.addListener) && p(e.removeListener);
            })(e)
          ? ae.map(pe(e, t))
          : (function (e) {
              return p(e.on) && p(e.off);
            })(e)
          ? ce.map(pe(e, t))
          : [],
        2
      ),
      s = i[0],
      a = i[1];
    if (!s && l(e))
      return ie(function (e) {
        return le(e, t, n);
      })(G(e));
    if (!s) throw new TypeError("Invalid event target");
    return new L(function (e) {
      var t = function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return e.next(1 < t.length ? t : t[0]);
      };
      return (
        s(t),
        function () {
          return a(t);
        }
      );
    });
  }
  function pe(e, t) {
    return function (n) {
      return function (r) {
        return e[n](t, r);
      };
    };
  }
  var he = f(function (e) {
      return function () {
        e(this),
          (this.name = "ObjectUnsubscribedError"),
          (this.message = "object unsubscribed");
      };
    }),
    fe = (function (e) {
      function n() {
        var t = e.call(this) || this;
        return (
          (t.closed = !1),
          (t.currentObservers = null),
          (t.observers = []),
          (t.isStopped = !1),
          (t.hasError = !1),
          (t.thrownError = null),
          t
        );
      }
      return (
        t(n, e),
        (n.prototype.lift = function (e) {
          var t = new de(this, this);
          return (t.operator = e), t;
        }),
        (n.prototype._throwIfClosed = function () {
          if (this.closed) throw new he();
        }),
        (n.prototype.next = function (e) {
          var t = this;
          T(function () {
            var n, r;
            if ((t._throwIfClosed(), !t.isStopped)) {
              t.currentObservers ||
                (t.currentObservers = Array.from(t.observers));
              try {
                for (
                  var o = i(t.currentObservers), s = o.next();
                  !s.done;
                  s = o.next()
                ) {
                  s.value.next(e);
                }
              } catch (e) {
                n = {
                  error: e,
                };
              } finally {
                try {
                  s && !s.done && (r = o.return) && r.call(o);
                } finally {
                  if (n) throw n.error;
                }
              }
            }
          });
        }),
        (n.prototype.error = function (e) {
          var t = this;
          T(function () {
            if ((t._throwIfClosed(), !t.isStopped)) {
              (t.hasError = t.isStopped = !0), (t.thrownError = e);
              for (var n = t.observers; n.length; ) n.shift().error(e);
            }
          });
        }),
        (n.prototype.complete = function () {
          var e = this;
          T(function () {
            if ((e._throwIfClosed(), !e.isStopped)) {
              e.isStopped = !0;
              for (var t = e.observers; t.length; ) t.shift().complete();
            }
          });
        }),
        (n.prototype.unsubscribe = function () {
          (this.isStopped = this.closed = !0),
            (this.observers = this.currentObservers = null);
        }),
        Object.defineProperty(n.prototype, "observed", {
          get: function () {
            var e;
            return (
              (null === (e = this.observers) || void 0 === e
                ? void 0
                : e.length) > 0
            );
          },
          enumerable: !1,
          configurable: !0,
        }),
        (n.prototype._trySubscribe = function (t) {
          return this._throwIfClosed(), e.prototype._trySubscribe.call(this, t);
        }),
        (n.prototype._subscribe = function (e) {
          return (
            this._throwIfClosed(),
            this._checkFinalizedStatuses(e),
            this._innerSubscribe(e)
          );
        }),
        (n.prototype._innerSubscribe = function (e) {
          var t = this,
            n = this,
            r = n.hasError,
            i = n.isStopped,
            o = n.observers;
          return r || i
            ? m
            : ((this.currentObservers = null),
              o.push(e),
              new y(function () {
                (t.currentObservers = null), v(o, e);
              }));
        }),
        (n.prototype._checkFinalizedStatuses = function (e) {
          var t = this,
            n = t.hasError,
            r = t.thrownError,
            i = t.isStopped;
          n ? e.error(r) : i && e.complete();
        }),
        (n.prototype.asObservable = function () {
          var e = new L();
          return (e.source = this), e;
        }),
        (n.create = function (e, t) {
          return new de(e, t);
        }),
        n
      );
    })(L),
    de = (function (e) {
      function n(t, n) {
        var r = e.call(this) || this;
        return (r.destination = t), (r.source = n), r;
      }
      return (
        t(n, e),
        (n.prototype.next = function (e) {
          var t, n;
          null ===
            (n =
              null === (t = this.destination) || void 0 === t
                ? void 0
                : t.next) ||
            void 0 === n ||
            n.call(t, e);
        }),
        (n.prototype.error = function (e) {
          var t, n;
          null ===
            (n =
              null === (t = this.destination) || void 0 === t
                ? void 0
                : t.error) ||
            void 0 === n ||
            n.call(t, e);
        }),
        (n.prototype.complete = function () {
          var e, t;
          null ===
            (t =
              null === (e = this.destination) || void 0 === e
                ? void 0
                : e.complete) ||
            void 0 === t ||
            t.call(e);
        }),
        (n.prototype._subscribe = function (e) {
          var t, n;
          return null !==
            (n =
              null === (t = this.source) || void 0 === t
                ? void 0
                : t.subscribe(e)) && void 0 !== n
            ? n
            : m;
        }),
        n
      );
    })(fe),
    ve = {
      now: function () {
        return (ve.delegate || Date).now();
      },
      delegate: void 0,
    },
    ye = (function (e) {
      function n(t, n, r) {
        void 0 === t && (t = 1 / 0),
          void 0 === n && (n = 1 / 0),
          void 0 === r && (r = ve);
        var i = e.call(this) || this;
        return (
          (i._bufferSize = t),
          (i._windowTime = n),
          (i._timestampProvider = r),
          (i._buffer = []),
          (i._infiniteTimeWindow = !0),
          (i._infiniteTimeWindow = n === 1 / 0),
          (i._bufferSize = Math.max(1, t)),
          (i._windowTime = Math.max(1, n)),
          i
        );
      }
      return (
        t(n, e),
        (n.prototype.next = function (t) {
          var n = this,
            r = n.isStopped,
            i = n._buffer,
            o = n._infiniteTimeWindow,
            s = n._timestampProvider,
            a = n._windowTime;
          r || (i.push(t), !o && i.push(s.now() + a)),
            this._trimBuffer(),
            e.prototype.next.call(this, t);
        }),
        (n.prototype._subscribe = function (e) {
          this._throwIfClosed(), this._trimBuffer();
          for (
            var t = this._innerSubscribe(e),
              n = this._infiniteTimeWindow,
              r = this._buffer.slice(),
              i = 0;
            i < r.length && !e.closed;
            i += n ? 1 : 2
          )
            e.next(r[i]);
          return this._checkFinalizedStatuses(e), t;
        }),
        (n.prototype._trimBuffer = function () {
          var e = this,
            t = e._bufferSize,
            n = e._timestampProvider,
            r = e._buffer,
            i = e._infiniteTimeWindow,
            o = (i ? 1 : 2) * t;
          if ((t < 1 / 0 && o < r.length && r.splice(0, r.length - o), !i)) {
            for (
              var s = n.now(), a = 0, u = 1;
              u < r.length && r[u] <= s;
              u += 2
            )
              a = u;
            a && r.splice(0, a + 1);
          }
        }),
        n
      );
    })(fe);
  function me(e, t) {
    return (
      void 0 === t && (t = 0),
      K(function (n, r) {
        n.subscribe(
          Q(
            r,
            function (n) {
              return ne(
                r,
                e,
                function () {
                  return r.next(n);
                },
                t
              );
            },
            function () {
              return ne(
                r,
                e,
                function () {
                  return r.complete();
                },
                t
              );
            },
            function (n) {
              return ne(
                r,
                e,
                function () {
                  return r.error(n);
                },
                t
              );
            }
          )
        );
      })
    );
  }
  function be(e, t) {
    return (
      void 0 === t && (t = 0),
      K(function (n, r) {
        r.add(
          e.schedule(function () {
            return n.subscribe(r);
          }, t)
        );
      })
    );
  }
  function xe(e, t) {
    return G(e).pipe(be(t), me(t));
  }
  function ge(e, t) {
    return G(e).pipe(be(t), me(t));
  }
  function we(e, t) {
    return new L(function (n) {
      var r = 0;
      return t.schedule(function () {
        r === e.length
          ? n.complete()
          : (n.next(e[r++]), n.closed || this.schedule());
      });
    });
  }
  function Ee(e, t) {
    return new L(function (n) {
      var r;
      return (
        ne(n, t, function () {
          (r = e[U]()),
            ne(
              n,
              t,
              function () {
                var e, t, i;
                try {
                  (t = (e = r.next()).value), (i = e.done);
                } catch (e) {
                  return void n.error(e);
                }
                i ? n.complete() : n.next(t);
              },
              0,
              !0
            );
        }),
        function () {
          return p(null == r ? void 0 : r.return) && r.return();
        }
      );
    });
  }
  function Se(e, t) {
    if (!e) throw new Error("Iterable cannot be null");
    return new L(function (n) {
      ne(n, t, function () {
        var r = e[Symbol.asyncIterator]();
        ne(
          n,
          t,
          function () {
            r.next().then(function (e) {
              e.done ? n.complete() : n.next(e.value);
            });
          },
          0,
          !0
        );
      });
    });
  }
  function ke(e, t) {
    return Se(J(e), t);
  }
  function Ie(e, t) {
    if (null != e) {
      if (z(e)) return xe(e, t);
      if (l(e)) return we(e, t);
      if (h(e)) return ge(e, t);
      if (W(e)) return Se(e, t);
      if (V(e)) return Ee(e, t);
      if (H(e)) return ke(e, t);
    }
    throw D(e);
  }
  function Ae(e, t) {
    return t ? Ie(e, t) : G(e);
  }
  var Me = new L(function (e) {
    return e.complete();
  });
  function Te(e) {
    return e <= 0
      ? function () {
          return Me;
        }
      : K(function (t, n) {
          var r = 0;
          t.subscribe(
            Q(n, function (t) {
              ++r <= e && (n.next(t), e <= r && n.complete());
            })
          );
        });
  }
  function Oe(e) {
    void 0 === e && (e = {});
    var t = e.connector,
      n =
        void 0 === t
          ? function () {
              return new fe();
            }
          : t,
      r = e.resetOnError,
      i = void 0 === r || r,
      o = e.resetOnComplete,
      s = void 0 === o || o,
      a = e.resetOnRefCountZero,
      u = void 0 === a || a;
    return function (e) {
      var t = null,
        r = null,
        o = null,
        a = 0,
        c = !1,
        l = !1,
        p = function () {
          null == r || r.unsubscribe(), (r = null);
        },
        h = function () {
          p(), (t = o = null), (c = l = !1);
        },
        f = function () {
          var e = t;
          h(), null == e || e.unsubscribe();
        };
      return K(function (e, d) {
        a++, l || c || p();
        var v = (o = null != o ? o : n());
        d.add(function () {
          0 !== --a || l || c || (r = Ce(f, u));
        }),
          v.subscribe(d),
          t ||
            ((t = new j({
              next: function (e) {
                return v.next(e);
              },
              error: function (e) {
                (l = !0), p(), (r = Ce(h, i, e)), v.error(e);
              },
              complete: function () {
                (c = !0), p(), (r = Ce(h, s)), v.complete();
              },
            })),
            Ae(e).subscribe(t));
      })(e);
    };
  }
  function Ce(e, t) {
    for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
    return !0 === t
      ? (e(), null)
      : !1 === t
      ? null
      : t
          .apply(void 0, s([], o(n)))
          .pipe(Te(1))
          .subscribe(function () {
            return e();
          });
  }
  function _e(e, t, n) {
    var r,
      i,
      o,
      s,
      a = !1;
    return (
      e && "object" == typeof e
        ? ((r = e.bufferSize),
          (s = void 0 === r ? 1 / 0 : r),
          (i = e.windowTime),
          (t = void 0 === i ? 1 / 0 : i),
          (a = void 0 !== (o = e.refCount) && o),
          (n = e.scheduler))
        : (s = null != e ? e : 1 / 0),
      Oe({
        connector: function () {
          return new ye(s, t, n);
        },
        resetOnError: !0,
        resetOnComplete: !1,
        resetOnRefCountZero: a,
      })
    );
  }
  function Re(e) {
    return void 0 === e && (e = 1 / 0), ie(N, e);
  }
  function je() {
    return Re(1);
  }
  function Fe(e) {
    return e && p(e.schedule);
  }
  function $e(e) {
    return e[e.length - 1];
  }
  function Pe(e) {
    return p($e(e)) ? e.pop() : void 0;
  }
  function Xe(e) {
    return Fe($e(e)) ? e.pop() : void 0;
  }
  function Ne(e, t) {
    return "number" == typeof $e(e) ? e.pop() : t;
  }
  function Ye() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return je()(Ae(e, Xe(e)));
  }
  function Be() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    var n = Xe(e);
    return K(function (t, r) {
      (n ? Ye(e, t, n) : Ye(e, t)).subscribe(r);
    });
  }
  var Le = {
      now: function () {
        return (Le.delegate || performance).now();
      },
      delegate: void 0,
    },
    qe = {
      schedule: function (e) {
        var t = requestAnimationFrame,
          n = cancelAnimationFrame,
          r = qe.delegate;
        r && ((t = r.requestAnimationFrame), (n = r.cancelAnimationFrame));
        var i = t(function (t) {
          (n = void 0), e(t);
        });
        return new y(function () {
          return null == n ? void 0 : n(i);
        });
      },
      requestAnimationFrame: function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var n = qe.delegate;
        return (
          (null == n ? void 0 : n.requestAnimationFrame) ||
          requestAnimationFrame
        ).apply(void 0, s([], o(e)));
      },
      cancelAnimationFrame: function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var n = qe.delegate;
        return (
          (null == n ? void 0 : n.cancelAnimationFrame) || cancelAnimationFrame
        ).apply(void 0, s([], o(e)));
      },
      delegate: void 0,
    };
  function ze(e) {
    var t = qe.schedule;
    return new L(function (n) {
      var r = new y(),
        i = e || Le,
        o = i.now(),
        s = function (a) {
          var u = i.now();
          n.next({
            timestamp: e ? u : a,
            elapsed: u - o,
          }),
            n.closed || r.add(t(s));
        };
      return r.add(t(s)), r;
    });
  }
  var We = ze();
  function De() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    var n = Xe(e),
      r = Ne(e, 1 / 0),
      i = e;
    return i.length ? (1 === i.length ? G(i[0]) : Re(r)(Ae(i, n))) : Me;
  }
  function Ue() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return Ae(e, Xe(e));
  }
  function Ve(e, t) {
    return (
      void 0 === t && (t = null),
      (t = null != t ? t : e),
      K(function (n, r) {
        var o = [],
          s = 0;
        n.subscribe(
          Q(
            r,
            function (n) {
              var a,
                u,
                c,
                l,
                p = null;
              s++ % t == 0 && o.push([]);
              try {
                for (var h = i(o), f = h.next(); !f.done; f = h.next()) {
                  (m = f.value).push(n),
                    e <= m.length && (p = null != p ? p : []).push(m);
                }
              } catch (e) {
                a = {
                  error: e,
                };
              } finally {
                try {
                  f && !f.done && (u = h.return) && u.call(h);
                } finally {
                  if (a) throw a.error;
                }
              }
              if (p)
                try {
                  for (var d = i(p), y = d.next(); !y.done; y = d.next()) {
                    var m = y.value;
                    v(o, m), r.next(m);
                  }
                } catch (e) {
                  c = {
                    error: e,
                  };
                } finally {
                  try {
                    y && !y.done && (l = d.return) && l.call(d);
                  } finally {
                    if (c) throw c.error;
                  }
                }
            },
            function () {
              var e, t;
              try {
                for (var n = i(o), s = n.next(); !s.done; s = n.next()) {
                  var a = s.value;
                  r.next(a);
                }
              } catch (t) {
                e = {
                  error: t,
                };
              } finally {
                try {
                  s && !s.done && (t = n.return) && t.call(n);
                } finally {
                  if (e) throw e.error;
                }
              }
              r.complete();
            },
            void 0,
            function () {
              o = null;
            }
          )
        );
      })
    );
  }
  function Je(e, t) {
    return (
      void 0 === t && (t = N),
      (e = null != e ? e : He),
      K(function (n, r) {
        var i,
          o = !0;
        n.subscribe(
          Q(r, function (n) {
            var s = t(n);
            (!o && e(i, s)) || ((o = !1), (i = s), r.next(n));
          })
        );
      })
    );
  }
  function He(e, t) {
    return e === t;
  }
  function Ge(e, t) {
    return K(function (n, r) {
      var i = 0;
      n.subscribe(
        Q(r, function (n) {
          return e.call(t, n, i++) && r.next(n);
        })
      );
    });
  }
  function Ze() {
    return K(function (e, t) {
      e.subscribe(Q(t, S));
    });
  }
  var Ke = Array.isArray;
  function Qe(e) {
    return 1 === e.length && Ke(e[0]) ? e[0] : e;
  }
  function et() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    var n = Xe(e),
      r = Ne(e, 1 / 0);
    return (
      (e = Qe(e)),
      K(function (t, i) {
        Re(r)(Ae(s([t], o(e)), n)).subscribe(i);
      })
    );
  }
  function tt() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return et.apply(void 0, s([], o(e)));
  }
  function nt() {
    return K(function (e, t) {
      var n,
        r = !1;
      e.subscribe(
        Q(t, function (e) {
          var i = n;
          (n = e), r && t.next([i, e]), (r = !0);
        })
      );
    });
  }
  function rt(e) {
    return Ge(function (t, n) {
      return e <= n;
    });
  }
  function it(e, t) {
    return K(function (n, r) {
      var i = null,
        o = 0,
        s = !1,
        a = function () {
          return s && !i && r.complete();
        };
      n.subscribe(
        Q(
          r,
          function (n) {
            null == i || i.unsubscribe();
            var s = 0,
              u = o++;
            G(e(n, u)).subscribe(
              (i = Q(
                r,
                function (e) {
                  return r.next(t ? t(n, e, u, s++) : e);
                },
                function () {
                  (i = null), a();
                }
              ))
            );
          },
          function () {
            (s = !0), a();
          }
        )
      );
    });
  }
  function ot(e, t, n) {
    var r =
      p(e) || t || n
        ? {
            next: e,
            error: t,
            complete: n,
          }
        : e;
    return r
      ? K(function (e, t) {
          var n;
          null === (n = r.subscribe) || void 0 === n || n.call(r);
          var i = !0;
          e.subscribe(
            Q(
              t,
              function (e) {
                var n;
                null === (n = r.next) || void 0 === n || n.call(r, e),
                  t.next(e);
              },
              function () {
                var e;
                (i = !1),
                  null === (e = r.complete) || void 0 === e || e.call(r),
                  t.complete();
              },
              function (e) {
                var n;
                (i = !1),
                  null === (n = r.error) || void 0 === n || n.call(r, e),
                  t.error(e);
              },
              function () {
                var e, t;
                i &&
                  (null === (e = r.unsubscribe) || void 0 === e || e.call(r)),
                  null === (t = r.finalize) || void 0 === t || t.call(r);
              }
            )
          );
        })
      : N;
  }
  function st() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    var n = Pe(e);
    return K(function (t, r) {
      for (
        var i = e.length,
          a = new Array(i),
          u = e.map(function () {
            return !1;
          }),
          c = !1,
          l = function (t) {
            G(e[t]).subscribe(
              Q(
                r,
                function (e) {
                  (a[t] = e),
                    c || u[t] || ((u[t] = !0), (c = u.every(N)) && (u = null));
                },
                S
              )
            );
          },
          p = 0;
        p < i;
        p++
      )
        l(p);
      t.subscribe(
        Q(r, function (e) {
          if (c) {
            var t = s([e], o(a));
            r.next(n ? n.apply(void 0, s([], o(t))) : t);
          }
        })
      );
    });
  }
  const at = (e) => e;
  function ut(e) {
    return function () {
      return !e.apply(this, arguments);
    };
  }
  const ct = (e, t, n) => Math.min(Math.max(e, t), n),
    lt = (e, t) => t.includes(e);
  const pt = (e, t = at) => {
    const n = e.reduce((e, n) => e + t(n), 0);
    let r = ((i = 0), (o = n - 1), Math.floor(Math.random() * (o - i + 1) + i));
    var i, o;
    return e.find((e) => (r -= t(e)) < 0);
  };
  function ht(e) {
    return 0 !== e;
  }
  function ft(e, t, n = 0) {
    return e.x >= t.x && e.x <= t.x + t.width && Math.abs(e.y - t.y) <= n;
  }
  function dt(e, t, n = 0) {
    return e.y >= t.y && e.y <= t.y + t.height && Math.abs(e.x - t.x) <= n;
  }
  function vt(e, t, n = 0) {
    return (
      e.y >= t.y && e.y <= t.y + t.height && Math.abs(e.x - t.x - t.width) <= n
    );
  }
  function yt(e, t, n = 0) {
    return (
      e.x >= t.x && e.x <= t.x + t.width && Math.abs(e.y - t.y - t.height) <= n
    );
  }
  function mt(e, t, n = 0) {
    return (
      e.x >= t.x - n &&
      e.x <= t.x + t.width + n &&
      e.y >= t.y - n &&
      e.y <= t.y + t.height + n
    );
  }
  const bt = (e) => (
    "object" == typeof e &&
      null !== e &&
      Object.keys(e).forEach((t) => {
        void 0 === e[t] ? delete e[t] : bt(e[t]);
      }),
    e
  );
  function xt(e, t) {
    const n = Math.abs(e.y - t.y),
      r = Math.abs(e.x - t.x),
      i = Math.abs(e.x - t.x - t.width),
      o = Math.abs(e.y - t.y - t.height),
      s = Math.min(n, r, i, o);
    if (s === n) return "top";
    if (s === r) return "left";
    if (s === i) return "right";
    if (s === o) return "bottom";
    throw new Error("No edge found");
  }
  const gt = "#dd6b20";
  let wt,
    Et,
    St,
    kt,
    It = {},
    At = {},
    Mt = {},
    Tt = 1;
  const Ot = (e, t, n) => {
      (e.style.width = "number" == typeof t ? `${t}px` : t),
        (e.style.height = "number" == typeof n ? `${n}px` : n);
    },
    Ct = (e, t, n) => {
      (e.style.left = -t + "px"), (e.style.top = -n + "px");
    },
    _t = (e, t) => {
      const { x: n, y: r, width: i, height: o } = t;
      Ot(e, i, o), (e.style.backgroundPosition = `${-n}px ${-r}px`);
    },
    Rt = (e, t) => e[t.toLowerCase()] || void 0,
    jt = (e) => {
      let t = e.getAttribute(rn);
      return (
        t || ((t = "" + Tt++), e.setAttribute(rn, t)),
        {
          elemId: t,
          selector: `[${rn}="${t}"]`,
        }
      );
    },
    Ft = (e) => {
      e.setAttribute(on, "true");
    },
    $t = (e) => {
      const t = document.querySelector(`#${e}`);
      t && t.remove();
    },
    Pt = ({
      width: e,
      height: t,
      anchorX: n = 0,
      anchorY: r = 0,
      x: i = 0,
      y: o = 0,
      background: s = "transparent",
      position: a = "fixed",
      id: u = "",
      zIndex: c = 0,
    }) => {
      const l = document.createElement("div");
      return (
        u && ($t(u), (l.id = u)),
        (l.style.position = a),
        (l.style.background = s),
        (l.style.zIndex = "1"),
        Ot(l, e, t),
        Ct(l, n, r),
        ((e, t, n) => {
          e.style.transform = `translate(${t}px, ${n}px)`;
        })(l, i, o),
        c &&
          ((e, t) => {
            void 0 !== t && (e.style.zIndex = `${t}`);
          })(l, c),
        l
      );
    },
    Xt = (e, t) => {
      const { sprite: n, id: r } = e,
        { spritesheet: i, sprites: o } = t,
        s = Rt(o, n),
        a = Pt({
          id: `shimeji-${r}`,
          position: "absolute",
          width: s ? s.width : 0,
          height: s ? s.height : 0,
          background: `url('${i}')`,
        });
      return (
        (a.style.pointerEvents = "auto"),
        s && _t(a, s),
        ((e, t) => {
          t && document.querySelector(t)?.append(e);
        })(a, en),
        (It[r] = a),
        a
      );
    },
    Nt = (e) => {
      $t(`shimeji-${e}`), delete It[e];
    },
    Yt = (e) => {
      Object.entries(e.originalStyleProps).forEach(([t, n]) => {
        e.div.style[t] = n;
      }),
        e.div.removeAttribute(on),
        e.originalParent.insertBefore(e.div, e.placeholder),
        e.placeholder.remove();
    },
    Bt = () => {
      Object.entries(Mt).forEach(([e, { dropDate: t, item: n }]) => {
        t.getTime() + sn < new Date().getTime() && (Yt(n), delete Mt[e]);
      });
    },
    Lt = (e) => {
      wt ||
        ((wt = document.createElement("div")),
        (wt.style.position = "fixed"),
        (wt.style.zIndex = "999999999"),
        (wt.style.left = "0px"),
        (wt.style.bottom = "0px"),
        (wt.style.backgroundColor = "#ffffff"),
        (wt.innerHTML = "fps: ?"),
        (wt.style.pointerEvents = "none"),
        document.body.appendChild(wt)),
        (wt.innerHTML = `fps: ${e}`);
    },
    qt = (e, t) => {
      if (!e)
        return (
          Et && (Et.remove(), (Et = void 0)),
          void document.body.classList.remove("shimeji-select-ie")
        );
      var n;
      Et ||
        ((Et = document.createElement("div")),
        (Et.id = nn),
        (Et.style.position = "fixed"),
        (Et.style.zIndex = "2147483643"),
        (Et.style.boxShadow = `0px 0px 16px ${gt}`),
        (Et.onclick = (e) => {
          e.preventDefault(), e.stopPropagation();
        }),
        document.body.appendChild(Et),
        document.body.classList.add("shimeji-select-ie")),
        (Et.style.left = `${e.x}px`),
        (Et.style.top = `${e.y}px`),
        (Et.style.width = `${e.width}px`),
        (Et.style.height = `${e.height}px`),
        (Et.style.border = "0px"),
        t &&
          (Et.style[
            `border ${((n = t), n.charAt(0).toUpperCase() + n.slice(1))}`
          ] = `4px solid ${gt}`);
    },
    zt = (e, t) => {
      t
        ? (document.body.classList.add("shimeji-pinned"), (St = e))
        : St === e &&
          (document.body.classList.remove("shimeji-pinned"), (St = null));
    },
    Wt = (e, t, n, r) => {
      const { x: i, y: o, sprite: s, anchorX: a, anchorY: u, lookRight: c } = e,
        l = Rt(t.sprites, s);
      l && _t(n, l),
        Ct(n, a, u),
        (n.style.transform = `translate(${i}px, ${o}px) scaleX(${c ? -1 : 1})`),
        (n.style.cursor = r ? "default" : "context-menu"),
        (n.style.userSelect = "none"),
        (n.style.zIndex = e.parentSelector === en ? "2" : "1");
    },
    Dt = (e) => {
      if (!e.carryItem) return;
      const { lookRight: t, carryItem: n } = e,
        { selector: r, x: i, y: o } = n;
      At[r] ||
        ((e) => {
          const t = document.querySelector(e);
          if (!t) return;
          const n = t.parentElement;
          if (!n) return;
          const r = window.getComputedStyle(t),
            i = {
              width: r.width,
              height: r.height,
              position: r.position,
              zIndex: r.zIndex,
              top: r.top,
              right: r.right,
              bottom: r.bottom,
              left: r.left,
              margin: r.margin,
              backdropFilter: r.backdropFilter,
              boxShadow: r.boxShadow,
              borderRadius: r.borderRadius,
            },
            o =
              parseFloat(r.width) +
              parseFloat(r.marginLeft) +
              parseFloat(r.marginRight),
            s =
              parseFloat(r.height) +
              parseFloat(r.marginTop) +
              parseFloat(r.marginBottom),
            a = document.createElement("div");
          (a.id = `shimeji-placeholder-${e}`),
            (a.style.width = o + "px"),
            (a.style.height = s + "px"),
            (a.style.visibility = "hidden"),
            n.insertBefore(a, t),
            (t.style.width = r.width),
            (t.style.height = r.height),
            (t.style.position = "fixed"),
            (t.style.zIndex = "2147483644"),
            (t.style.top = "initial"),
            (t.style.right = "initial"),
            (t.style.bottom = "initial"),
            (t.style.left = "initial"),
            (t.style.margin = "0px"),
            (t.style.backdropFilter = "blur(3px)"),
            (t.style.boxShadow = `0px 0px 16px ${gt}`),
            (t.style.borderRadius = "5px"),
            Ft(t),
            document.body.appendChild(t),
            (At[e] = {
              div: t,
              placeholder: a,
              originalParent: n,
              originalStyleProps: i,
            }),
            At[e];
        })(r),
        (At[r].div.style.left = t ? `${i}px` : "initial"),
        (At[r].div.style.right = t ? "initial" : window.innerWidth - i + "px"),
        (At[r].div.style.bottom = window.innerHeight - o + "px");
    };
  function Ut(e, t, n) {
    return (r) =>
      r.pipe(
        st(n),
        ot(([n, r]) => {
          Wt(n, e, t, r), Dt(n), zt(n.id, r);
        }),
        te(([e]) => e)
      );
  }
  function Vt(e) {
    const t = e.map((e) => e.id.toString()),
      n = e.map((e) => e.carryItem?.selector);
    Object.keys(At).forEach((e) => {
      n.includes(e) ||
        ((Mt[e] = {
          dropDate: new Date(),
          item: At[e],
        }),
        delete At[e]);
    }),
      Bt(),
      Object.keys(It).forEach((e) => {
        t.includes(e) || Nt(parseInt(e, 10));
      });
  }
  function Jt(e, t) {
    const n = tn.replace(/#/, "");
    return new Promise((r) => {
      const i = document.createElement("div");
      (i.id = n),
        (i.style.position = "fixed"),
        e.x < 0.7 * window.innerWidth
          ? (i.style.left = `${e.x + 40}px`)
          : (i.style.right = window.innerWidth - e.x + 40 + "px"),
        (i.style.top = `${e.y}px`),
        (i.style.transform = `translateY(-${
          (e.y / window.innerHeight) * 100
        }%)`),
        (i.style.zIndex = "2147483644"),
        (i.style.maxHeight = "calc(100vh - 50px)"),
        (i.style.width = "auto"),
        (i.style.minWidth = "200"),
        (i.style.maxWidth = "400"),
        (i.style.overflowY = "auto"),
        (i.style.backgroundColor = "rgba(255, 240, 230, 0.9)"),
        (i.style.boxShadow = "0 0 5px -2px rgba(0,0,0,100)"),
        (i.style.fontFamily =
          '"Balsamiq Sans", "Comic Sans MS", "Comic Sans", "Gill Sans", "Arial", sans-serif'),
        (i.style.fontSize = "10pt"),
        (i.style.borderRadius = "5px"),
        (i.style.padding = "0.4em"),
        (i.style.backdropFilter = "blur(20px)"),
        t.forEach((e, t) => {
          if (t > 0) {
            const e = document.createElement("hr");
            (e.style.border = "0"),
              (e.style.height = "1px"),
              (e.style.background = "#333"),
              (e.style.backgroundImage =
                "linear-gradient(to right, #ccc, #333, #ccc)"),
              i.appendChild(e);
          }
          e.forEach((e, t) => {
            const o = document.createElement("div");
            (o.id = ((e) => `${n}-item ${e + 1}`)(t)),
              (o.style.position = "relative"),
              (o.style.padding = "0.5em 1em"),
              (o.style.color = "black"),
              (o.style.borderRadius = "5px"),
              (o.style.display = "flex");
            const s = document.createElement("div");
            if (
              ((s.innerText = e.title),
              (s.style.flexGrow = "1"),
              o.appendChild(s),
              e.rightContent)
            ) {
              const t = document.createElement("div");
              (t.innerText = e.rightContent), o.appendChild(t);
            }
            e.disabled
              ? ((o.style.opacity = "0.5"), (o.style.cursor = "not-allowed"))
              : ((o.style.cursor = "default"),
                o.addEventListener("mouseenter", () => {
                  (o.style.backgroundColor = gt), (o.style.color = "white");
                }),
                o.addEventListener("mouseleave", () => {
                  (o.style.backgroundColor = "transparent"),
                    (o.style.color = "black");
                }),
                o.addEventListener("mousedown", () => {
                  r(e.data);
                })),
              i.appendChild(o);
          });
        }),
        document.body.appendChild(i);
    });
  }
  const Ht = () => {
    !(function (e) {
      const t = document.createElement("style");
      (t.textContent = e), document.head.append(t);
    })(
      `body.shimeji-pinned iframe {\n      pointer-events: none;\n    }\n    body.shimeji-select-ie {\n      cursor: cell !important;\n    }\n    ${tn}::-webkit-scrollbar {\n      width: 6px;\n    }\n    ${tn}::-webkit-scrollbar-thumb {\n      background-color: rgba(30,30,30,0.6);\n      border-radius: 3px;\n    }\n    ${tn}::-webkit-scrollbar-thumb:hover {\n      background: #555;\n    }`
    ),
      (kt = Pt({
        id: en.replace(/#/, ""),
        width: "100vw",
        height: "100vh",
        zIndex: 2147483643,
        x: 0,
        y: 0,
      })),
      document.body.appendChild(kt),
      (kt.style.pointerEvents = "none");
  };
  function Gt(e) {
    if (!e || "" === e) return null;
    const t = document.querySelector(e);
    if (!t) return null;
    return {
      selector: e,
      rect: t.getBoundingClientRect(),
    };
  }
  function Zt(e) {
    const { selector: t } = jt(e);
    return {
      selector: t,
      rect: e.getBoundingClientRect(),
    };
  }
  function Kt(e, t) {
    return new L((n) => {
      n.next([...document.querySelectorAll(e)]);
      const r = new MutationObserver(() => {
        n.next([...document.querySelectorAll(e)]);
      });
      return (
        r.observe(document.body, {
          childList: !0,
          subtree: !0,
          ...t,
        }),
        () => {
          r.disconnect();
        }
      );
    }).pipe(
      Je((e, t) => e.length === t.length && e.every((e) => t.includes(e)))
    );
  }
  const Qt = 40,
    en = "#shimeji-workArea",
    tn = "#shimeji-contextMenu",
    nn = "shimeji-selectIeHighlight",
    rn = "data-shimeji-elem",
    on = "data-shimeji-catch",
    sn = 8e3,
    an = (un ? ze(un) : We).pipe(
      Be({
        elapsed: 0,
      }),
      nt(),
      te(([e, t], n) => {
        const r = t.elapsed - e.elapsed,
          i = r / Qt;
        return {
          elapsed: t.elapsed,
          dt: r,
          dst: i,
          index: n + 1,
        };
      }),
      Be({
        elapsed: 0,
        dt: 0,
        dst: 0,
        index: 0,
      })
    );
  var un;
  const cn = an.pipe(
      rt(1),
      te((e) => Math.round(1e3 / e.dt)),
      Ve(30, 10),
      te((e) => {
        return Math.round((t = e).reduce((e, t) => e + t, 0) / t.length);
        var t;
      })
    ),
    ln = le(document, "keyup"),
    pn = le(document, "mousedown"),
    hn = le(document, "mouseup"),
    fn = le(document, "mousemove"),
    dn = le(window, "resize"),
    vn = (le(window, "beforeunload"), (e) => ln.pipe(Ge((t) => t.key === e))),
    yn = fn.pipe(
      te(({ clientX: e, clientY: t }) => ({
        x: e,
        y: t,
      })),
      Be({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      }),
      _e(1)
    ),
    mn =
      (De(pn.pipe(te(() => !0)), hn.pipe(te(() => !1))).pipe(
        Be(!1),
        Je(),
        _e(1)
      ),
      yn
        .pipe(
          Ve(3, 1),
          Be([
            {
              x: 0,
              y: 0,
            },
            {
              x: 0,
              y: 0,
            },
            {
              x: 0,
              y: 0,
            },
          ]),
          _e(1)
        )
        .pipe(
          te((e) =>
            e.slice(-3).reduce(
              ({ dx: t, dy: n }, r, i) => {
                const o = 0 === i ? r : e[i - 1],
                  s = [0.2, 0.5, 1.1];
                return {
                  dx: t + (r.x - o.x) * s[i],
                  dy: n + (r.y - o.y) * s[i],
                };
              },
              {
                dx: 0,
                dy: 0,
              }
            )
          )
        )),
    bn = dn.pipe(
      Be(1),
      te(() => ({
        width: window.innerWidth,
        height: window.innerHeight,
      })),
      _e(1)
    ),
    xn = ((gn = en),
    new L((e) => {
      const t = document.querySelector(gn);
      e.next(t.getBoundingClientRect());
      const n = new ResizeObserver(([t]) => {
        const { width: n, height: r } = t.target.getBoundingClientRect();
        e.next({
          width: n,
          height: r,
        });
      });
      return (
        n.observe(t),
        () => {
          n.unobserve(t);
        }
      );
    })).pipe(
      te(({ width: e, height: t }) => ({
        x: 0,
        y: 0,
        width: e,
        height: t,
      })),
      _e(1)
    );
  var gn;
  const wn = Ue("#shimeji-ie").pipe(
      it((e) => Kt(e)),
      te((e) => e.map(jt).map(({ selector: e }) => e)[0] || null),
      _e({
        bufferSize: 1,
        refCount: !0,
      })
    ),
    En = Ue(["video", '[jsname="RNNXgb"]', ".c93Gbe", "#box2", "#box3"]).pipe(
      it((e) => Kt(e.join(", "))),
      ot((e) => e.forEach(Ft)),
      Ze()
    ),
    Sn = Kt(`[${on}]`, {
      attributeFilter: [on],
    }).pipe(
      tt(En),
      it((e) => an.pipe(te(() => e.map(Zt)))),
      _e({
        bufferSize: 1,
        refCount: !0,
      })
    ),
    kn = new fe(),
    In = kn.pipe(Ge((e) => "AddShimeji" === e.type)),
    An = kn.pipe(Ge((e) => "RemoveShimeji" === e.type)),
    Mn = kn.pipe(Ge((e) => "AddCharacterSpec" === e.type)),
    Tn = kn.pipe(Ge((e) => "NodeSelected" === e.type));
  var On = (function (e) {
    function n(t) {
      var n = e.call(this) || this;
      return (n._value = t), n;
    }
    return (
      t(n, e),
      Object.defineProperty(n.prototype, "value", {
        get: function () {
          return this.getValue();
        },
        enumerable: !1,
        configurable: !0,
      }),
      (n.prototype._subscribe = function (t) {
        var n = e.prototype._subscribe.call(this, t);
        return !n.closed && t.next(this._value), n;
      }),
      (n.prototype.getValue = function () {
        var e = this,
          t = e.hasError,
          n = e.thrownError,
          r = e._value;
        if (t) throw n;
        return this._throwIfClosed(), r;
      }),
      (n.prototype.next = function (t) {
        e.prototype.next.call(this, (this._value = t));
      }),
      n
    );
  })(fe);
  function Cn(e) {
    return new L(function (t) {
      G(e()).subscribe(t);
    });
  }
  function _n(e) {
    return K(function (t, n) {
      var r,
        i = null,
        o = !1;
      (i = t.subscribe(
        Q(n, void 0, void 0, function (s) {
          (r = G(e(s, _n(e)(t)))),
            i ? (i.unsubscribe(), (i = null), r.subscribe(n)) : (o = !0);
        })
      )),
        o && (i.unsubscribe(), (i = null), r.subscribe(n));
    });
  }
  function Rn(e) {
    return K(function (t, n) {
      try {
        t.subscribe(n);
      } finally {
        n.add(e);
      }
    });
  }
  function jn(e, t, n, r, i) {
    return function (o, s) {
      var a = n,
        u = t,
        c = 0;
      o.subscribe(
        Q(
          s,
          function (t) {
            var n = c++;
            (u = a ? e(u, t, n) : ((a = !0), t)), r && s.next(u);
          },
          i &&
            function () {
              a && s.next(u), s.complete();
            }
        )
      );
    };
  }
  function Fn(e, t) {
    return K(jn(e, t, arguments.length >= 2, !0));
  }
  function $n(e) {
    return K(function (t, n) {
      G(e).subscribe(
        Q(
          n,
          function () {
            return n.complete();
          },
          S
        )
      ),
        !n.closed && t.subscribe(n);
    });
  }
  var Pn = (function (e) {
      function n(t, n) {
        return e.call(this) || this;
      }
      return (
        t(n, e),
        (n.prototype.schedule = function (e, t) {
          return void 0 === t && (t = 0), this;
        }),
        n
      );
    })(y),
    Xn = {
      setInterval: function (e, t) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        var i = Xn.delegate;
        return (null == i ? void 0 : i.setInterval)
          ? i.setInterval.apply(i, s([e, t], o(n)))
          : setInterval.apply(void 0, s([e, t], o(n)));
      },
      clearInterval: function (e) {
        var t = Xn.delegate;
        return ((null == t ? void 0 : t.clearInterval) || clearInterval)(e);
      },
      delegate: void 0,
    },
    Nn = (function (e) {
      function n(t, n) {
        var r = e.call(this, t, n) || this;
        return (r.scheduler = t), (r.work = n), (r.pending = !1), r;
      }
      return (
        t(n, e),
        (n.prototype.schedule = function (e, t) {
          if ((void 0 === t && (t = 0), this.closed)) return this;
          this.state = e;
          var n = this.id,
            r = this.scheduler;
          return (
            null != n && (this.id = this.recycleAsyncId(r, n, t)),
            (this.pending = !0),
            (this.delay = t),
            (this.id = this.id || this.requestAsyncId(r, this.id, t)),
            this
          );
        }),
        (n.prototype.requestAsyncId = function (e, t, n) {
          return (
            void 0 === n && (n = 0), Xn.setInterval(e.flush.bind(e, this), n)
          );
        }),
        (n.prototype.recycleAsyncId = function (e, t, n) {
          if (
            (void 0 === n && (n = 0),
            null != n && this.delay === n && !1 === this.pending)
          )
            return t;
          Xn.clearInterval(t);
        }),
        (n.prototype.execute = function (e, t) {
          if (this.closed) return new Error("executing a cancelled action");
          this.pending = !1;
          var n = this._execute(e, t);
          if (n) return n;
          !1 === this.pending &&
            null != this.id &&
            (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
        }),
        (n.prototype._execute = function (e, t) {
          var n,
            r = !1;
          try {
            this.work(e);
          } catch (e) {
            (r = !0),
              (n = e || new Error("Scheduled action threw falsy error"));
          }
          if (r) return this.unsubscribe(), n;
        }),
        (n.prototype.unsubscribe = function () {
          if (!this.closed) {
            var t = this.id,
              n = this.scheduler,
              r = n.actions;
            (this.work = this.state = this.scheduler = null),
              (this.pending = !1),
              v(r, this),
              null != t && (this.id = this.recycleAsyncId(n, t, null)),
              (this.delay = null),
              e.prototype.unsubscribe.call(this);
          }
        }),
        n
      );
    })(Pn),
    Yn = (function () {
      function e(t, n) {
        void 0 === n && (n = e.now),
          (this.schedulerActionCtor = t),
          (this.now = n);
      }
      return (
        (e.prototype.schedule = function (e, t, n) {
          return (
            void 0 === t && (t = 0),
            new this.schedulerActionCtor(this, e).schedule(n, t)
          );
        }),
        (e.now = ve.now),
        e
      );
    })(),
    Bn = new ((function (e) {
      function n(t, n) {
        void 0 === n && (n = Yn.now);
        var r = e.call(this, t, n) || this;
        return (r.actions = []), (r._active = !1), (r._scheduled = void 0), r;
      }
      return (
        t(n, e),
        (n.prototype.flush = function (e) {
          var t = this.actions;
          if (this._active) t.push(e);
          else {
            var n;
            this._active = !0;
            do {
              if ((n = e.execute(e.state, e.delay))) break;
            } while ((e = t.shift()));
            if (((this._active = !1), n)) {
              for (; (e = t.shift()); ) e.unsubscribe();
              throw n;
            }
          }
        }),
        n
      );
    })(Yn))(Nn),
    Ln = Bn;
  function qn(e, t, n) {
    void 0 === e && (e = 0), void 0 === n && (n = Ln);
    var r = -1;
    return (
      null != t && (Fe(t) ? (n = t) : (r = t)),
      new L(function (t) {
        var i,
          o = (i = e) instanceof Date && !isNaN(i) ? +e - n.now() : e;
        o < 0 && (o = 0);
        var s = 0;
        return n.schedule(function () {
          t.closed ||
            (t.next(s++), 0 <= r ? this.schedule(void 0, r) : t.complete());
        }, o);
      })
    );
  }
  function zn(e) {
    for (var t, n, r = [], o = 1; o < arguments.length; o++)
      r[o - 1] = arguments[o];
    var s = null !== (t = Xe(r)) && void 0 !== t ? t : Bn,
      a = null !== (n = r[0]) && void 0 !== n ? n : null,
      u = r[1] || 1 / 0;
    return K(function (t, n) {
      var r = [],
        o = !1,
        c = function (e) {
          var t = e.buffer;
          e.subs.unsubscribe(), v(r, e), n.next(t), o && l();
        },
        l = function () {
          if (r) {
            var t = new y();
            n.add(t);
            var i = {
              buffer: [],
              subs: t,
            };
            r.push(i),
              ne(
                t,
                s,
                function () {
                  return c(i);
                },
                e
              );
          }
        };
      null !== a && a >= 0 ? ne(n, s, l, a, !0) : (o = !0), l();
      var p = Q(
        n,
        function (e) {
          var t,
            n,
            o = r.slice();
          try {
            for (var s = i(o), a = s.next(); !a.done; a = s.next()) {
              var l = a.value,
                p = l.buffer;
              p.push(e), u <= p.length && c(l);
            }
          } catch (e) {
            t = {
              error: e,
            };
          } finally {
            try {
              a && !a.done && (n = s.return) && n.call(s);
            } finally {
              if (t) throw t.error;
            }
          }
        },
        function () {
          for (; null == r ? void 0 : r.length; ) n.next(r.shift().buffer);
          null == p || p.unsubscribe(), n.complete(), n.unsubscribe();
        },
        void 0,
        function () {
          return (r = null);
        }
      );
      t.subscribe(p);
    });
  }
  function Wn() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    var n = Xe(e);
    return K(function (t, r) {
      je()(Ae(s([t], o(e)), n)).subscribe(r);
    });
  }
  function Dn() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return Wn.apply(void 0, s([], o(e)));
  }
  function Un(e) {
    return te(function () {
      return e;
    });
  }
  function Vn(e, t) {
    return t
      ? function (n) {
          return Ye(t.pipe(Te(1), Ze()), n.pipe(Vn(e)));
        }
      : ie(function (t, n) {
          return e(t, n).pipe(Te(1), Un(t));
        });
  }
  function Jn(e, t) {
    void 0 === t && (t = Bn);
    var n = qn(e, t);
    return Vn(function () {
      return n;
    });
  }
  function Hn(e) {
    return le(e, "mouseup");
  }
  function Gn(e) {
    return le(e, "mousedown");
  }
  function Zn(e, t = 200) {
    const n = Gn(e).pipe(
        it((n) => De(Ue(n).pipe(Jn(t)), Hn(e)).pipe(Te(1))),
        Oe()
      ),
      r = n.pipe(Ge((e) => "mouseup" === e.type)),
      i = n.pipe(Ge((e) => "mouseup" !== e.type)),
      o = i.pipe(it(() => Hn(document).pipe(Te(1))));
    return [
      r,
      De(i.pipe(te(() => !0)), o.pipe(te(() => !1))).pipe(Be(!1), Je()),
    ];
  }
  function Kn(e) {
    return new L((t) => {
      const n = e.subscribe(() => t.complete());
      return () => {
        n.unsubscribe();
      };
    });
  }
  var Qn = "INUMBER",
    er = "IOP1",
    tr = "IOP2",
    nr = "IOP3",
    rr = "IVAR",
    ir = "IVARNAME",
    or = "IFUNCALL",
    sr = "IFUNDEF",
    ar = "IEXPR",
    ur = "IEXPREVAL",
    cr = "IMEMBER",
    lr = "IENDSTATEMENT",
    pr = "IARRAY";
  function hr(e, t) {
    (this.type = e), (this.value = null != t ? t : 0);
  }
  function fr(e) {
    return new hr(er, e);
  }
  function dr(e) {
    return new hr(tr, e);
  }
  function vr(e) {
    return new hr(nr, e);
  }
  function yr(e, t, n, r, i) {
    for (var o, s, a, u, c = [], l = [], p = 0; p < e.length; p++) {
      var h = e[p],
        f = h.type;
      if (f === Qn || f === ir)
        Array.isArray(h.value)
          ? c.push.apply(
              c,
              yr(
                h.value
                  .map(function (e) {
                    return new hr(Qn, e);
                  })
                  .concat(new hr(pr, h.value.length)),
                t,
                n,
                r,
                i
              )
            )
          : c.push(h);
      else if (f === rr && i.hasOwnProperty(h.value))
        (h = new hr(Qn, i[h.value])), c.push(h);
      else if (f === tr && c.length > 1)
        (s = c.pop()),
          (o = c.pop()),
          (u = n[h.value]),
          (h = new hr(Qn, u(o.value, s.value))),
          c.push(h);
      else if (f === nr && c.length > 2)
        (a = c.pop()),
          (s = c.pop()),
          (o = c.pop()),
          "?" === h.value
            ? c.push(o.value ? s.value : a.value)
            : ((u = r[h.value]),
              (h = new hr(Qn, u(o.value, s.value, a.value))),
              c.push(h));
      else if (f === er && c.length > 0)
        (o = c.pop()),
          (u = t[h.value]),
          (h = new hr(Qn, u(o.value))),
          c.push(h);
      else if (f === ar) {
        for (; c.length > 0; ) l.push(c.shift());
        l.push(new hr(ar, yr(h.value, t, n, r, i)));
      } else if (f === cr && c.length > 0)
        (o = c.pop()), c.push(new hr(Qn, o.value[h.value]));
      else {
        for (; c.length > 0; ) l.push(c.shift());
        l.push(h);
      }
    }
    for (; c.length > 0; ) l.push(c.shift());
    return l;
  }
  function mr(e, t, n) {
    for (var r = [], i = 0; i < e.length; i++) {
      var o = e[i],
        s = o.type;
      if (s === rr && o.value === t)
        for (var a = 0; a < n.tokens.length; a++) {
          var u,
            c = n.tokens[a];
          (u =
            c.type === er
              ? fr(c.value)
              : c.type === tr
              ? dr(c.value)
              : c.type === nr
              ? vr(c.value)
              : new hr(c.type, c.value)),
            r.push(u);
        }
      else s === ar ? r.push(new hr(ar, mr(o.value, t, n))) : r.push(o);
    }
    return r;
  }
  function br(e, t, n) {
    var r,
      i,
      o,
      s,
      a,
      u,
      c = [];
    if (gr(e)) return wr(e, n);
    for (var l = e.length, p = 0; p < l; p++) {
      var h = e[p],
        f = h.type;
      if (f === Qn || f === ir) c.push(h.value);
      else if (f === tr)
        (i = c.pop()),
          (r = c.pop()),
          "and" === h.value
            ? c.push(!!r && !!br(i, t, n))
            : "or" === h.value
            ? c.push(!!r || !!br(i, t, n))
            : "=" === h.value
            ? ((s = t.binaryOps[h.value]), c.push(s(r, br(i, t, n), n)))
            : ((s = t.binaryOps[h.value]), c.push(s(wr(r, n), wr(i, n))));
      else if (f === nr)
        (o = c.pop()),
          (i = c.pop()),
          (r = c.pop()),
          "?" === h.value
            ? c.push(br(r ? i : o, t, n))
            : ((s = t.ternaryOps[h.value]),
              c.push(s(wr(r, n), wr(i, n), wr(o, n))));
      else if (f === rr)
        if (h.value in t.functions) c.push(t.functions[h.value]);
        else if (h.value in t.unaryOps && t.parser.isOperatorEnabled(h.value))
          c.push(t.unaryOps[h.value]);
        else {
          var d = n[h.value];
          if (void 0 === d) throw new Error("undefined variable: " + h.value);
          c.push(d);
        }
      else if (f === er)
        (r = c.pop()), (s = t.unaryOps[h.value]), c.push(s(wr(r, n)));
      else if (f === or) {
        for (u = h.value, a = []; u-- > 0; ) a.unshift(wr(c.pop(), n));
        if (!(s = c.pop()).apply || !s.call)
          throw new Error(s + " is not a function");
        c.push(s.apply(void 0, a));
      } else if (f === sr)
        c.push(
          (function () {
            for (var e = c.pop(), r = [], i = h.value; i-- > 0; )
              r.unshift(c.pop());
            var o = c.pop(),
              s = function () {
                for (
                  var i = Object.assign({}, n), o = 0, s = r.length;
                  o < s;
                  o++
                )
                  i[r[o]] = arguments[o];
                return br(e, t, i);
              };
            return (
              Object.defineProperty(s, "name", {
                value: o,
                writable: !1,
              }),
              (n[o] = s),
              s
            );
          })()
        );
      else if (f === ar) c.push(xr(h, t));
      else if (f === ur) c.push(h);
      else if (f === cr) (r = c.pop()), c.push(r[h.value]);
      else if (f === lr) c.pop();
      else {
        if (f !== pr) throw new Error("invalid Expression");
        for (u = h.value, a = []; u-- > 0; ) a.unshift(c.pop());
        c.push(a);
      }
    }
    if (c.length > 1) throw new Error("invalid Expression (parity)");
    return 0 === c[0] ? 0 : wr(c[0], n);
  }
  function xr(e, t, n) {
    return gr(e)
      ? e
      : {
          type: ur,
          value: function (n) {
            return br(e.value, t, n);
          },
        };
  }
  function gr(e) {
    return e && e.type === ur;
  }
  function wr(e, t) {
    return gr(e) ? e.value(t) : e;
  }
  function Er(e, t) {
    for (var n, r, i, o, s, a, u = [], c = 0; c < e.length; c++) {
      var l = e[c],
        p = l.type;
      if (p === Qn)
        "number" == typeof l.value && l.value < 0
          ? u.push("(" + l.value + ")")
          : Array.isArray(l.value)
          ? u.push("[" + l.value.map(Sr).join(", ") + "]")
          : u.push(Sr(l.value));
      else if (p === tr)
        (r = u.pop()),
          (n = u.pop()),
          (o = l.value),
          t
            ? "^" === o
              ? u.push("Math.pow(" + n + ", " + r + ")")
              : "and" === o
              ? u.push("(!!" + n + " && !!" + r + ")")
              : "or" === o
              ? u.push("(!!" + n + " || !!" + r + ")")
              : "||" === o
              ? u.push(
                  "(function(a,b){ return Array.isArray(a) && Array.isArray(b) ? a.concat(b) : String(a) + String(b); }((" +
                    n +
                    "),(" +
                    r +
                    ")))"
                )
              : "==" === o
              ? u.push("(" + n + " === " + r + ")")
              : "!=" === o
              ? u.push("(" + n + " !== " + r + ")")
              : "[" === o
              ? u.push(n + "[(" + r + ") | 0]")
              : u.push("(" + n + " " + o + " " + r + ")")
            : "[" === o
            ? u.push(n + "[" + r + "]")
            : u.push("(" + n + " " + o + " " + r + ")");
      else if (p === nr) {
        if (
          ((i = u.pop()), (r = u.pop()), (n = u.pop()), "?" !== (o = l.value))
        )
          throw new Error("invalid Expression");
        u.push("(" + n + " ? " + r + " : " + i + ")");
      } else if (p === rr || p === ir) u.push(l.value);
      else if (p === er)
        (n = u.pop()),
          "-" === (o = l.value) || "+" === o
            ? u.push("(" + o + n + ")")
            : t
            ? "not" === o
              ? u.push("(!" + n + ")")
              : "!" === o
              ? u.push("fac(" + n + ")")
              : u.push(o + "(" + n + ")")
            : "!" === o
            ? u.push("(" + n + "!)")
            : u.push("(" + o + " " + n + ")");
      else if (p === or) {
        for (a = l.value, s = []; a-- > 0; ) s.unshift(u.pop());
        (o = u.pop()), u.push(o + "(" + s.join(", ") + ")");
      } else if (p === sr) {
        for (r = u.pop(), a = l.value, s = []; a-- > 0; ) s.unshift(u.pop());
        (n = u.pop()),
          t
            ? u.push(
                "(" +
                  n +
                  " = function(" +
                  s.join(", ") +
                  ") { return " +
                  r +
                  " })"
              )
            : u.push("(" + n + "(" + s.join(", ") + ") = " + r + ")");
      } else if (p === cr) (n = u.pop()), u.push(n + "." + l.value);
      else if (p === pr) {
        for (a = l.value, s = []; a-- > 0; ) s.unshift(u.pop());
        u.push("[" + s.join(", ") + "]");
      } else if (p === ar) u.push("(" + Er(l.value, t) + ")");
      else if (p !== lr) throw new Error("invalid Expression");
    }
    return (
      u.length > 1 && (u = t ? [u.join(",")] : [u.join(";")]), String(u[0])
    );
  }
  function Sr(e) {
    return "string" == typeof e
      ? JSON.stringify(e)
          .replace(/\u2028/g, "\\u2028")
          .replace(/\u2029/g, "\\u2029")
      : e;
  }
  function kr(e, t) {
    for (var n = 0; n < e.length; n++) if (e[n] === t) return !0;
    return !1;
  }
  function Ir(e, t, n) {
    for (
      var r = !!(n = n || {}).withMembers, i = null, o = 0;
      o < e.length;
      o++
    ) {
      var s = e[o];
      s.type === rr || s.type === ir
        ? r || kr(t, s.value)
          ? null !== i
            ? (kr(t, i) || t.push(i), (i = s.value))
            : (i = s.value)
          : t.push(s.value)
        : s.type === cr && r && null !== i
        ? (i += "." + s.value)
        : s.type === ar
        ? Ir(s.value, t, n)
        : null !== i && (kr(t, i) || t.push(i), (i = null));
    }
    null === i || kr(t, i) || t.push(i);
  }
  function Ar(e, t) {
    (this.tokens = e),
      (this.parser = t),
      (this.unaryOps = t.unaryOps),
      (this.binaryOps = t.binaryOps),
      (this.ternaryOps = t.ternaryOps),
      (this.functions = t.functions);
  }
  (hr.prototype.toString = function () {
    switch (this.type) {
      case Qn:
      case er:
      case tr:
      case nr:
      case rr:
      case ir:
      case lr:
        return this.value;
      case or:
        return "CALL " + this.value;
      case sr:
        return "DEF " + this.value;
      case pr:
        return "ARRAY " + this.value;
      case cr:
        return "." + this.value;
      default:
        return "Invalid Instruction";
    }
  }),
    (Ar.prototype.simplify = function (e) {
      return (
        (e = e || {}),
        new Ar(
          yr(this.tokens, this.unaryOps, this.binaryOps, this.ternaryOps, e),
          this.parser
        )
      );
    }),
    (Ar.prototype.substitute = function (e, t) {
      return (
        t instanceof Ar || (t = this.parser.parse(String(t))),
        new Ar(mr(this.tokens, e, t), this.parser)
      );
    }),
    (Ar.prototype.evaluate = function (e) {
      return (e = e || {}), br(this.tokens, this, e);
    }),
    (Ar.prototype.toString = function () {
      return Er(this.tokens, !1);
    }),
    (Ar.prototype.symbols = function (e) {
      e = e || {};
      var t = [];
      return Ir(this.tokens, t, e), t;
    }),
    (Ar.prototype.variables = function (e) {
      e = e || {};
      var t = [];
      Ir(this.tokens, t, e);
      var n = this.functions;
      return t.filter(function (e) {
        return !(e in n);
      });
    }),
    (Ar.prototype.toJSFunction = function (e, t) {
      var n = this,
        r = new Function(
          e,
          "with(this.functions) with (this.ternaryOps) with (this.binaryOps) with (this.unaryOps) { return " +
            Er(this.simplify(t).tokens, !0) +
            "; }"
        );
      return function () {
        return r.apply(n, arguments);
      };
    });
  var Mr = "TEOF",
    Tr = "TOP",
    Or = "TNUMBER",
    Cr = "TSTRING",
    _r = "TPAREN",
    Rr = "TBRACKET",
    jr = "TCOMMA",
    Fr = "TNAME",
    $r = "TSEMICOLON";
  function Pr(e, t, n) {
    (this.type = e), (this.value = t), (this.index = n);
  }
  function Xr(e, t) {
    (this.pos = 0),
      (this.current = null),
      (this.unaryOps = e.unaryOps),
      (this.binaryOps = e.binaryOps),
      (this.ternaryOps = e.ternaryOps),
      (this.consts = e.consts),
      (this.expression = t),
      (this.savedPosition = 0),
      (this.savedCurrent = null),
      (this.options = e.options),
      (this.parser = e);
  }
  (Pr.prototype.toString = function () {
    return this.type + ": " + this.value;
  }),
    (Xr.prototype.newToken = function (e, t, n) {
      return new Pr(e, t, null != n ? n : this.pos);
    }),
    (Xr.prototype.save = function () {
      (this.savedPosition = this.pos), (this.savedCurrent = this.current);
    }),
    (Xr.prototype.restore = function () {
      (this.pos = this.savedPosition), (this.current = this.savedCurrent);
    }),
    (Xr.prototype.next = function () {
      return this.pos >= this.expression.length
        ? this.newToken(Mr, "EOF")
        : this.isWhitespace() || this.isComment()
        ? this.next()
        : this.isRadixInteger() ||
          this.isNumber() ||
          this.isOperator() ||
          this.isString() ||
          this.isParen() ||
          this.isBracket() ||
          this.isComma() ||
          this.isSemicolon() ||
          this.isNamedOp() ||
          this.isConst() ||
          this.isName()
        ? this.current
        : void this.parseError(
            'Unknown character "' + this.expression.charAt(this.pos) + '"'
          );
    }),
    (Xr.prototype.isString = function () {
      var e = !1,
        t = this.pos,
        n = this.expression.charAt(t);
      if ("'" === n || '"' === n)
        for (
          var r = this.expression.indexOf(n, t + 1);
          r >= 0 && this.pos < this.expression.length;

        ) {
          if (((this.pos = r + 1), "\\" !== this.expression.charAt(r - 1))) {
            var i = this.expression.substring(t + 1, r);
            (this.current = this.newToken(Cr, this.unescape(i), t)), (e = !0);
            break;
          }
          r = this.expression.indexOf(n, r + 1);
        }
      return e;
    }),
    (Xr.prototype.isParen = function () {
      var e = this.expression.charAt(this.pos);
      return (
        ("(" === e || ")" === e) &&
        ((this.current = this.newToken(_r, e)), this.pos++, !0)
      );
    }),
    (Xr.prototype.isBracket = function () {
      var e = this.expression.charAt(this.pos);
      return (
        !(("[" !== e && "]" !== e) || !this.isOperatorEnabled("[")) &&
        ((this.current = this.newToken(Rr, e)), this.pos++, !0)
      );
    }),
    (Xr.prototype.isComma = function () {
      return (
        "," === this.expression.charAt(this.pos) &&
        ((this.current = this.newToken(jr, ",")), this.pos++, !0)
      );
    }),
    (Xr.prototype.isSemicolon = function () {
      return (
        ";" === this.expression.charAt(this.pos) &&
        ((this.current = this.newToken($r, ";")), this.pos++, !0)
      );
    }),
    (Xr.prototype.isConst = function () {
      for (var e = this.pos, t = e; t < this.expression.length; t++) {
        var n = this.expression.charAt(t);
        if (
          n.toUpperCase() === n.toLowerCase() &&
          (t === this.pos || ("_" !== n && "." !== n && (n < "0" || n > "9")))
        )
          break;
      }
      if (t > e) {
        var r = this.expression.substring(e, t);
        if (r in this.consts)
          return (
            (this.current = this.newToken(Or, this.consts[r])),
            (this.pos += r.length),
            !0
          );
      }
      return !1;
    }),
    (Xr.prototype.isNamedOp = function () {
      for (var e = this.pos, t = e; t < this.expression.length; t++) {
        var n = this.expression.charAt(t);
        if (
          n.toUpperCase() === n.toLowerCase() &&
          (t === this.pos || ("_" !== n && (n < "0" || n > "9")))
        )
          break;
      }
      if (t > e) {
        var r = this.expression.substring(e, t);
        if (
          this.isOperatorEnabled(r) &&
          (r in this.binaryOps || r in this.unaryOps || r in this.ternaryOps)
        )
          return (
            (this.current = this.newToken(Tr, r)), (this.pos += r.length), !0
          );
      }
      return !1;
    }),
    (Xr.prototype.isName = function () {
      for (var e = this.pos, t = e, n = !1; t < this.expression.length; t++) {
        var r = this.expression.charAt(t);
        if (r.toUpperCase() === r.toLowerCase()) {
          if (t === this.pos && ("$" === r || "_" === r)) {
            "_" === r && (n = !0);
            continue;
          }
          if (t === this.pos || !n || ("_" !== r && (r < "0" || r > "9")))
            break;
        } else n = !0;
      }
      if (n) {
        var i = this.expression.substring(e, t);
        return (
          (this.current = this.newToken(Fr, i)), (this.pos += i.length), !0
        );
      }
      return !1;
    }),
    (Xr.prototype.isWhitespace = function () {
      for (
        var e = !1, t = this.expression.charAt(this.pos);
        !(
          (" " !== t && "\t" !== t && "\n" !== t && "\r" !== t) ||
          ((e = !0), this.pos++, this.pos >= this.expression.length)
        );

      )
        t = this.expression.charAt(this.pos);
      return e;
    });
  var Nr = /^[0-9a-f]{4}$/i;
  function Yr(e, t, n) {
    (this.parser = e),
      (this.tokens = t),
      (this.current = null),
      (this.nextToken = null),
      this.next(),
      (this.savedCurrent = null),
      (this.savedNextToken = null),
      (this.allowMemberAccess = !1 !== n.allowMemberAccess);
  }
  (Xr.prototype.unescape = function (e) {
    var t = e.indexOf("\\");
    if (t < 0) return e;
    for (var n = e.substring(0, t); t >= 0; ) {
      var r = e.charAt(++t);
      switch (r) {
        case "'":
          n += "'";
          break;
        case '"':
          n += '"';
          break;
        case "\\":
          n += "\\";
          break;
        case "/":
          n += "/";
          break;
        case "b":
          n += "\b";
          break;
        case "f":
          n += "\f";
          break;
        case "n":
          n += "\n";
          break;
        case "r":
          n += "\r";
          break;
        case "t":
          n += "\t";
          break;
        case "u":
          var i = e.substring(t + 1, t + 5);
          Nr.test(i) || this.parseError("Illegal escape sequence: \\u" + i),
            (n += String.fromCharCode(parseInt(i, 16))),
            (t += 4);
          break;
        default:
          throw this.parseError('Illegal escape sequence: "\\' + r + '"');
      }
      ++t;
      var o = e.indexOf("\\", t);
      (n += e.substring(t, o < 0 ? e.length : o)), (t = o);
    }
    return n;
  }),
    (Xr.prototype.isComment = function () {
      return (
        "/" === this.expression.charAt(this.pos) &&
        "*" === this.expression.charAt(this.pos + 1) &&
        ((this.pos = this.expression.indexOf("*/", this.pos) + 2),
        1 === this.pos && (this.pos = this.expression.length),
        !0)
      );
    }),
    (Xr.prototype.isRadixInteger = function () {
      var e,
        t,
        n = this.pos;
      if (n >= this.expression.length - 2 || "0" !== this.expression.charAt(n))
        return !1;
      if ((++n, "x" === this.expression.charAt(n)))
        (e = 16), (t = /^[0-9a-f]$/i), ++n;
      else {
        if ("b" !== this.expression.charAt(n)) return !1;
        (e = 2), (t = /^[01]$/i), ++n;
      }
      for (var r = !1, i = n; n < this.expression.length; ) {
        var o = this.expression.charAt(n);
        if (!t.test(o)) break;
        n++, (r = !0);
      }
      return (
        r &&
          ((this.current = this.newToken(
            Or,
            parseInt(this.expression.substring(i, n), e)
          )),
          (this.pos = n)),
        r
      );
    }),
    (Xr.prototype.isNumber = function () {
      for (
        var e, t = !1, n = this.pos, r = n, i = n, o = !1, s = !1;
        n < this.expression.length &&
        (((e = this.expression.charAt(n)) >= "0" && e <= "9") ||
          (!o && "." === e));

      )
        "." === e ? (o = !0) : (s = !0), n++, (t = s);
      if ((t && (i = n), "e" === e || "E" === e)) {
        n++;
        for (var a = !0, u = !1; n < this.expression.length; ) {
          if (
            ((e = this.expression.charAt(n)), !a || ("+" !== e && "-" !== e))
          ) {
            if (!(e >= "0" && e <= "9")) break;
            (u = !0), (a = !1);
          } else a = !1;
          n++;
        }
        u || (n = i);
      }
      return (
        t
          ? ((this.current = this.newToken(
              Or,
              parseFloat(this.expression.substring(r, n))
            )),
            (this.pos = n))
          : (this.pos = i),
        t
      );
    }),
    (Xr.prototype.isOperator = function () {
      var e = this.pos,
        t = this.expression.charAt(this.pos);
      if (
        "+" === t ||
        "-" === t ||
        "*" === t ||
        "/" === t ||
        "%" === t ||
        "^" === t ||
        "?" === t ||
        ":" === t ||
        "." === t
      )
        this.current = this.newToken(Tr, t);
      else if ("∙" === t || "•" === t) this.current = this.newToken(Tr, "*");
      else if (">" === t)
        "=" === this.expression.charAt(this.pos + 1)
          ? ((this.current = this.newToken(Tr, ">=")), this.pos++)
          : (this.current = this.newToken(Tr, ">"));
      else if ("<" === t)
        "=" === this.expression.charAt(this.pos + 1)
          ? ((this.current = this.newToken(Tr, "<=")), this.pos++)
          : (this.current = this.newToken(Tr, "<"));
      else if ("|" === t) {
        if ("|" !== this.expression.charAt(this.pos + 1)) return !1;
        (this.current = this.newToken(Tr, "||")), this.pos++;
      } else if ("=" === t)
        "=" === this.expression.charAt(this.pos + 1)
          ? ((this.current = this.newToken(Tr, "==")), this.pos++)
          : (this.current = this.newToken(Tr, t));
      else {
        if ("!" !== t) return !1;
        "=" === this.expression.charAt(this.pos + 1)
          ? ((this.current = this.newToken(Tr, "!=")), this.pos++)
          : (this.current = this.newToken(Tr, t));
      }
      return (
        this.pos++,
        !!this.isOperatorEnabled(this.current.value) || ((this.pos = e), !1)
      );
    }),
    (Xr.prototype.isOperatorEnabled = function (e) {
      return this.parser.isOperatorEnabled(e);
    }),
    (Xr.prototype.getCoordinates = function () {
      var e,
        t = 0,
        n = -1;
      do {
        t++, (e = this.pos - n), (n = this.expression.indexOf("\n", n + 1));
      } while (n >= 0 && n < this.pos);
      return {
        line: t,
        column: e,
      };
    }),
    (Xr.prototype.parseError = function (e) {
      var t = this.getCoordinates();
      throw new Error("parse error [" + t.line + ":" + t.column + "]: " + e);
    }),
    (Yr.prototype.next = function () {
      return (
        (this.current = this.nextToken), (this.nextToken = this.tokens.next())
      );
    }),
    (Yr.prototype.tokenMatches = function (e, t) {
      return (
        void 0 === t ||
        (Array.isArray(t)
          ? kr(t, e.value)
          : "function" == typeof t
          ? t(e)
          : e.value === t)
      );
    }),
    (Yr.prototype.save = function () {
      (this.savedCurrent = this.current),
        (this.savedNextToken = this.nextToken),
        this.tokens.save();
    }),
    (Yr.prototype.restore = function () {
      this.tokens.restore(),
        (this.current = this.savedCurrent),
        (this.nextToken = this.savedNextToken);
    }),
    (Yr.prototype.accept = function (e, t) {
      return (
        !(this.nextToken.type !== e || !this.tokenMatches(this.nextToken, t)) &&
        (this.next(), !0)
      );
    }),
    (Yr.prototype.expect = function (e, t) {
      if (!this.accept(e, t)) {
        var n = this.tokens.getCoordinates();
        throw new Error(
          "parse error [" + n.line + ":" + n.column + "]: Expected " + (t || e)
        );
      }
    }),
    (Yr.prototype.parseAtom = function (e) {
      var t = this.tokens.unaryOps;
      if (
        this.accept(Fr) ||
        this.accept(Tr, function (e) {
          return e.value in t;
        })
      )
        e.push(new hr(rr, this.current.value));
      else if (this.accept(Or)) e.push(new hr(Qn, this.current.value));
      else if (this.accept(Cr)) e.push(new hr(Qn, this.current.value));
      else if (this.accept(_r, "("))
        this.parseExpression(e), this.expect(_r, ")");
      else {
        if (!this.accept(Rr, "["))
          throw new Error("unexpected " + this.nextToken);
        if (this.accept(Rr, "]")) e.push(new hr(pr, 0));
        else {
          var n = this.parseArrayList(e);
          e.push(new hr(pr, n));
        }
      }
    }),
    (Yr.prototype.parseExpression = function (e) {
      var t = [];
      this.parseUntilEndStatement(e, t) ||
        (this.parseVariableAssignmentExpression(t),
        this.parseUntilEndStatement(e, t) || this.pushExpression(e, t));
    }),
    (Yr.prototype.pushExpression = function (e, t) {
      for (var n = 0, r = t.length; n < r; n++) e.push(t[n]);
    }),
    (Yr.prototype.parseUntilEndStatement = function (e, t) {
      return (
        !!this.accept($r) &&
        (!this.nextToken ||
          this.nextToken.type === Mr ||
          (this.nextToken.type === _r && ")" === this.nextToken.value) ||
          t.push(new hr(lr)),
        this.nextToken.type !== Mr && this.parseExpression(t),
        e.push(new hr(ar, t)),
        !0)
      );
    }),
    (Yr.prototype.parseArrayList = function (e) {
      for (var t = 0; !this.accept(Rr, "]"); )
        for (this.parseExpression(e), ++t; this.accept(jr); )
          this.parseExpression(e), ++t;
      return t;
    }),
    (Yr.prototype.parseVariableAssignmentExpression = function (e) {
      for (this.parseConditionalExpression(e); this.accept(Tr, "="); ) {
        var t = e.pop(),
          n = [],
          r = e.length - 1;
        if (t.type !== or) {
          if (t.type !== rr && t.type !== cr)
            throw new Error("expected variable for assignment");
          this.parseVariableAssignmentExpression(n),
            e.push(new hr(ir, t.value)),
            e.push(new hr(ar, n)),
            e.push(dr("="));
        } else {
          if (!this.tokens.isOperatorEnabled("()="))
            throw new Error("function definition is not permitted");
          for (var i = 0, o = t.value + 1; i < o; i++) {
            var s = r - i;
            e[s].type === rr && (e[s] = new hr(ir, e[s].value));
          }
          this.parseVariableAssignmentExpression(n),
            e.push(new hr(ar, n)),
            e.push(new hr(sr, t.value));
        }
      }
    }),
    (Yr.prototype.parseConditionalExpression = function (e) {
      for (this.parseOrExpression(e); this.accept(Tr, "?"); ) {
        var t = [],
          n = [];
        this.parseConditionalExpression(t),
          this.expect(Tr, ":"),
          this.parseConditionalExpression(n),
          e.push(new hr(ar, t)),
          e.push(new hr(ar, n)),
          e.push(vr("?"));
      }
    }),
    (Yr.prototype.parseOrExpression = function (e) {
      for (this.parseAndExpression(e); this.accept(Tr, "or"); ) {
        var t = [];
        this.parseAndExpression(t), e.push(new hr(ar, t)), e.push(dr("or"));
      }
    }),
    (Yr.prototype.parseAndExpression = function (e) {
      for (this.parseComparison(e); this.accept(Tr, "and"); ) {
        var t = [];
        this.parseComparison(t), e.push(new hr(ar, t)), e.push(dr("and"));
      }
    });
  var Br = ["==", "!=", "<", "<=", ">=", ">", "in"];
  Yr.prototype.parseComparison = function (e) {
    for (this.parseAddSub(e); this.accept(Tr, Br); ) {
      var t = this.current;
      this.parseAddSub(e), e.push(dr(t.value));
    }
  };
  var Lr = ["+", "-", "||"];
  Yr.prototype.parseAddSub = function (e) {
    for (this.parseTerm(e); this.accept(Tr, Lr); ) {
      var t = this.current;
      this.parseTerm(e), e.push(dr(t.value));
    }
  };
  var qr = ["*", "/", "%"];
  function zr(e, t) {
    return Number(e) + Number(t);
  }
  function Wr(e, t) {
    return e - t;
  }
  function Dr(e, t) {
    return e * t;
  }
  function Ur(e, t) {
    return e / t;
  }
  function Vr(e, t) {
    return e % t;
  }
  function Jr(e, t) {
    return Array.isArray(e) && Array.isArray(t) ? e.concat(t) : "" + e + t;
  }
  function Hr(e, t) {
    return e === t;
  }
  function Gr(e, t) {
    return e !== t;
  }
  function Zr(e, t) {
    return e > t;
  }
  function Kr(e, t) {
    return e < t;
  }
  function Qr(e, t) {
    return e >= t;
  }
  function ei(e, t) {
    return e <= t;
  }
  function ti(e, t) {
    return Boolean(e && t);
  }
  function ni(e, t) {
    return Boolean(e || t);
  }
  function ri(e, t) {
    return kr(t, e);
  }
  function ii(e) {
    return (Math.exp(e) - Math.exp(-e)) / 2;
  }
  function oi(e) {
    return (Math.exp(e) + Math.exp(-e)) / 2;
  }
  function si(e) {
    return e === 1 / 0
      ? 1
      : e === -1 / 0
      ? -1
      : (Math.exp(e) - Math.exp(-e)) / (Math.exp(e) + Math.exp(-e));
  }
  function ai(e) {
    return e === -1 / 0 ? e : Math.log(e + Math.sqrt(e * e + 1));
  }
  function ui(e) {
    return Math.log(e + Math.sqrt(e * e - 1));
  }
  function ci(e) {
    return Math.log((1 + e) / (1 - e)) / 2;
  }
  function li(e) {
    return Math.log(e) * Math.LOG10E;
  }
  function pi(e) {
    return -e;
  }
  function hi(e) {
    return !e;
  }
  function fi(e) {
    return e < 0 ? Math.ceil(e) : Math.floor(e);
  }
  function di(e) {
    return Math.random() * (e || 1);
  }
  function vi(e) {
    return bi(e + 1);
  }
  (Yr.prototype.parseTerm = function (e) {
    for (this.parseFactor(e); this.accept(Tr, qr); ) {
      var t = this.current;
      this.parseFactor(e), e.push(dr(t.value));
    }
  }),
    (Yr.prototype.parseFactor = function (e) {
      var t = this.tokens.unaryOps;
      if (
        (this.save(),
        this.accept(Tr, function (e) {
          return e.value in t;
        }))
      ) {
        if ("-" !== this.current.value && "+" !== this.current.value) {
          if (this.nextToken.type === _r && "(" === this.nextToken.value)
            return this.restore(), void this.parseExponential(e);
          if (
            this.nextToken.type === $r ||
            this.nextToken.type === jr ||
            this.nextToken.type === Mr ||
            (this.nextToken.type === _r && ")" === this.nextToken.value)
          )
            return this.restore(), void this.parseAtom(e);
        }
        var n = this.current;
        this.parseFactor(e), e.push(fr(n.value));
      } else this.parseExponential(e);
    }),
    (Yr.prototype.parseExponential = function (e) {
      for (this.parsePostfixExpression(e); this.accept(Tr, "^"); )
        this.parseFactor(e), e.push(dr("^"));
    }),
    (Yr.prototype.parsePostfixExpression = function (e) {
      for (this.parseFunctionCall(e); this.accept(Tr, "!"); ) e.push(fr("!"));
    }),
    (Yr.prototype.parseFunctionCall = function (e) {
      var t = this.tokens.unaryOps;
      if (
        this.accept(Tr, function (e) {
          return e.value in t;
        })
      ) {
        var n = this.current;
        this.parseAtom(e), e.push(fr(n.value));
      } else
        for (this.parseMemberExpression(e); this.accept(_r, "("); )
          if (this.accept(_r, ")")) e.push(new hr(or, 0));
          else {
            var r = this.parseArgumentList(e);
            e.push(new hr(or, r));
          }
    }),
    (Yr.prototype.parseArgumentList = function (e) {
      for (var t = 0; !this.accept(_r, ")"); )
        for (this.parseExpression(e), ++t; this.accept(jr); )
          this.parseExpression(e), ++t;
      return t;
    }),
    (Yr.prototype.parseMemberExpression = function (e) {
      for (this.parseAtom(e); this.accept(Tr, ".") || this.accept(Rr, "["); ) {
        var t = this.current;
        if ("." === t.value) {
          if (!this.allowMemberAccess)
            throw new Error('unexpected ".", member access is not permitted');
          this.expect(Fr), e.push(new hr(cr, this.current.value));
        } else {
          if ("[" !== t.value) throw new Error("unexpected symbol: " + t.value);
          if (!this.tokens.isOperatorEnabled("["))
            throw new Error('unexpected "[]", arrays are disabled');
          this.parseExpression(e), this.expect(Rr, "]"), e.push(dr("["));
        }
      }
    });
  var yi = 4.7421875,
    mi = [
      0.9999999999999971, 57.15623566586292, -59.59796035547549,
      14.136097974741746, -0.4919138160976202, 3399464998481189e-20,
      4652362892704858e-20, -9837447530487956e-20, 0.0001580887032249125,
      -0.00021026444172410488, 0.00021743961811521265, -0.0001643181065367639,
      8441822398385275e-20, -26190838401581408e-21, 36899182659531625e-22,
    ];
  function bi(e) {
    var t, n;
    if (
      (function (e) {
        return isFinite(e) && e === Math.round(e);
      })(e)
    ) {
      if (e <= 0) return isFinite(e) ? 1 / 0 : NaN;
      if (e > 171) return 1 / 0;
      for (var r = e - 2, i = e - 1; r > 1; ) (i *= r), r--;
      return 0 === i && (i = 1), i;
    }
    if (e < 0.5) return Math.PI / (Math.sin(Math.PI * e) * bi(1 - e));
    if (e >= 171.35) return 1 / 0;
    if (e > 85) {
      var o = e * e,
        s = o * e,
        a = s * e,
        u = a * e;
      return (
        Math.sqrt((2 * Math.PI) / e) *
        Math.pow(e / Math.E, e) *
        (1 +
          1 / (12 * e) +
          1 / (288 * o) -
          139 / (51840 * s) -
          571 / (2488320 * a) +
          163879 / (209018880 * u) +
          5246819 / (75246796800 * u * e))
      );
    }
    --e, (n = mi[0]);
    for (var c = 1; c < mi.length; ++c) n += mi[c] / (e + c);
    return (
      (t = e + yi + 0.5),
      Math.sqrt(2 * Math.PI) * Math.pow(t, e + 0.5) * Math.exp(-t) * n
    );
  }
  function xi(e) {
    return Array.isArray(e) ? e.length : String(e).length;
  }
  function gi() {
    for (var e = 0, t = 0, n = 0; n < arguments.length; n++) {
      var r,
        i = Math.abs(arguments[n]);
      t < i
        ? ((e = e * (r = t / i) * r + 1), (t = i))
        : (e += i > 0 ? (r = i / t) * r : i);
    }
    return t === 1 / 0 ? 1 / 0 : t * Math.sqrt(e);
  }
  function wi(e, t, n) {
    return e ? t : n;
  }
  function Ei(e, t) {
    return void 0 === t || 0 == +t
      ? Math.round(e)
      : ((e = +e),
        (t = -+t),
        isNaN(e) || "number" != typeof t || t % 1 != 0
          ? NaN
          : ((e = e.toString().split("e")),
            +(
              (e = (e = Math.round(+(e[0] + "e" + (e[1] ? +e[1] - t : -t))))
                .toString()
                .split("e"))[0] +
              "e" +
              (e[1] ? +e[1] + t : t)
            )));
  }
  function Si(e, t, n) {
    return n && (n[e] = t), t;
  }
  function ki(e, t) {
    return e[0 | t];
  }
  function Ii(e) {
    return 1 === arguments.length && Array.isArray(e)
      ? Math.max.apply(Math, e)
      : Math.max.apply(Math, arguments);
  }
  function Ai(e) {
    return 1 === arguments.length && Array.isArray(e)
      ? Math.min.apply(Math, e)
      : Math.min.apply(Math, arguments);
  }
  function Mi(e, t) {
    if ("function" != typeof e)
      throw new Error("First argument to map is not a function");
    if (!Array.isArray(t))
      throw new Error("Second argument to map is not an array");
    return t.map(function (t, n) {
      return e(t, n);
    });
  }
  function Ti(e, t, n) {
    if ("function" != typeof e)
      throw new Error("First argument to fold is not a function");
    if (!Array.isArray(n))
      throw new Error("Second argument to fold is not an array");
    return n.reduce(function (t, n, r) {
      return e(t, n, r);
    }, t);
  }
  function Oi(e, t) {
    if ("function" != typeof e)
      throw new Error("First argument to filter is not a function");
    if (!Array.isArray(t))
      throw new Error("Second argument to filter is not an array");
    return t.filter(function (t, n) {
      return e(t, n);
    });
  }
  function Ci(e, t) {
    if (!Array.isArray(t) && "string" != typeof t)
      throw new Error("Second argument to indexOf is not a string or array");
    return t.indexOf(e);
  }
  function _i(e, t) {
    if (!Array.isArray(t))
      throw new Error("Second argument to join is not an array");
    return t.join(e);
  }
  function Ri(e) {
    return (e > 0) - (e < 0) || +e;
  }
  var ji = 1 / 3;
  function Fi(e) {
    return e < 0 ? -Math.pow(-e, ji) : Math.pow(e, ji);
  }
  function $i(e) {
    return Math.exp(e) - 1;
  }
  function Pi(e) {
    return Math.log(1 + e);
  }
  function Xi(e) {
    return Math.log(e) / Math.LN2;
  }
  function Ni(e) {
    (this.options = e || {}),
      (this.unaryOps = {
        sin: Math.sin,
        cos: Math.cos,
        tan: Math.tan,
        asin: Math.asin,
        acos: Math.acos,
        atan: Math.atan,
        sinh: Math.sinh || ii,
        cosh: Math.cosh || oi,
        tanh: Math.tanh || si,
        asinh: Math.asinh || ai,
        acosh: Math.acosh || ui,
        atanh: Math.atanh || ci,
        sqrt: Math.sqrt,
        cbrt: Math.cbrt || Fi,
        log: Math.log,
        log2: Math.log2 || Xi,
        ln: Math.log,
        lg: Math.log10 || li,
        log10: Math.log10 || li,
        expm1: Math.expm1 || $i,
        log1p: Math.log1p || Pi,
        abs: Math.abs,
        ceil: Math.ceil,
        floor: Math.floor,
        round: Math.round,
        trunc: Math.trunc || fi,
        "-": pi,
        "+": Number,
        exp: Math.exp,
        not: hi,
        length: xi,
        "!": vi,
        sign: Math.sign || Ri,
      }),
      (this.binaryOps = {
        "+": zr,
        "-": Wr,
        "*": Dr,
        "/": Ur,
        "%": Vr,
        "^": Math.pow,
        "||": Jr,
        "==": Hr,
        "!=": Gr,
        ">": Zr,
        "<": Kr,
        ">=": Qr,
        "<=": ei,
        and: ti,
        or: ni,
        in: ri,
        "=": Si,
        "[": ki,
      }),
      (this.ternaryOps = {
        "?": wi,
      }),
      (this.functions = {
        random: di,
        fac: vi,
        min: Ai,
        max: Ii,
        hypot: Math.hypot || gi,
        pyt: Math.hypot || gi,
        pow: Math.pow,
        atan2: Math.atan2,
        if: wi,
        gamma: bi,
        roundTo: Ei,
        map: Mi,
        fold: Ti,
        filter: Oi,
        indexOf: Ci,
        join: _i,
      }),
      (this.consts = {
        E: Math.E,
        PI: Math.PI,
        true: !0,
        false: !1,
      });
  }
  (Ni.prototype.parse = function (e) {
    var t = [],
      n = new Yr(this, new Xr(this, e), {
        allowMemberAccess: this.options.allowMemberAccess,
      });
    return n.parseExpression(t), n.expect(Mr, "EOF"), new Ar(t, this);
  }),
    (Ni.prototype.evaluate = function (e, t) {
      return this.parse(e).evaluate(t);
    });
  var Yi = new Ni();
  (Ni.parse = function (e) {
    return Yi.parse(e);
  }),
    (Ni.evaluate = function (e, t) {
      return Yi.parse(e).evaluate(t);
    });
  var Bi = {
    "+": "add",
    "-": "subtract",
    "*": "multiply",
    "/": "divide",
    "%": "remainder",
    "^": "power",
    "!": "factorial",
    "<": "comparison",
    ">": "comparison",
    "<=": "comparison",
    ">=": "comparison",
    "==": "comparison",
    "!=": "comparison",
    "||": "concatenate",
    and: "logical",
    or: "logical",
    not: "logical",
    "?": "conditional",
    ":": "conditional",
    "=": "assignment",
    "[": "array",
    "()=": "fndef",
  };
  Ni.prototype.isOperatorEnabled = function (e) {
    var t = (function (e) {
        return Bi.hasOwnProperty(e) ? Bi[e] : e;
      })(e),
      n = this.options.operators || {};
    return !(t in n) || !!n[t];
  };
  const Li = {
      operators: {
        add: !0,
        concatenate: !0,
        conditional: !0,
        divide: !0,
        factorial: !1,
        multiply: !0,
        power: !0,
        remainder: !0,
        subtract: !0,
        floor: !0,
        logical: !0,
        comparison: !0,
        in: !1,
        assignment: !1,
      },
    },
    qi = (e) => {
      const t = e
        .replace(/^(\#|\$)\{/, "")
        .replace(/\}$/, "")
        .replace(/\&\&/g, " and ")
        .replace(/\|\|/g, " or ")
        .replace(/\!(?!\=)/g, " not ")
        .replace(/floor(?!\()/g, "ground")
        .replace(/Math\.random\(/g, "random(")
        .replace(/Math\.random(?!\()/g, "random()")
        .replace(/Math\.min\(/g, "min(")
        .replace(/Math\.max\(/g, "max(")
        .replace(/Math\.abs\(/g, "abs(")
        .replace(/Mascot\./gi, "global.mascot.")
        .replace(/TargetX/gi, "global.targetX")
        .replace(/TargetY/gi, "global.targetY")
        .replace(/FootX/gi, "global.footX")
        .replace(/FootY/gi, "global.footY")
        .replace(/Gap/gi, "global.gap")
        .replace(/MaxCount/gi, "global.maxCount");
      return new Ni(Li).parse(t);
    },
    zi = (e) => {
      try {
        const t = qi(e);
        return (e) =>
          t.evaluate({
            global: e,
          });
      } catch (e) {
        return (e) => !1;
      }
    },
    Wi = (e, t) => {
      try {
        return qi(e).evaluate({
          global: t,
        });
      } catch (e) {
        return 0;
      }
    },
    Di = (e, t) => {
      try {
        return !!qi(e).evaluate({
          global: t,
        });
      } catch (e) {
        return !1;
      }
    },
    Ui = (e, t) => e.every((e) => Di(e, t));
  function Vi([e, t, n, r, i, o, s]) {
    const a = o
      ? o.rect
      : {
          x: -100,
          y: -100,
          width: 0,
          height: 0,
        };
    return {
      gap: 0,
      maxCount: 999,
      mascot: {
        totalCount: s,
        anchor: {
          x: e.x,
          y: e.y,
        },
        lookRight: e.lookRight,
        environment: {
          cursor: {
            x: t.x,
            y: t.y,
            dx: n.dx,
            dy: n.dy,
          },
          screen: {
            width: r.width,
            height: r.height,
          },
          ground: {
            isOn: (e) => e.y === i.height,
          },
          floor: {
            isOn: (e) => e.y === i.height,
          },
          ceiling: {
            isOn: (e) => e.y === i.y,
          },
          workArea: {
            left: i.x,
            right: i.x + i.width,
            top: i.y,
            bottom: i.y + i.height,
            width: i.width,
            height: i.height,
            topBorder: {
              isOn: (e) => e.y === i.y,
            },
            leftBorder: {
              isOn: (e) => e.x === i.x,
            },
            rightBorder: {
              isOn: (e) => e.x === i.x + i.width,
            },
            bottomBorder: {
              isOn: (e) => e.y === i.y + i.height,
            },
          },
          activeIE: {
            visible: a.width > 0 && a.height > 0,
            left: a.x,
            right: a.x + a.width,
            top: a.y,
            bottom: a.y + a.height,
            width: a.width,
            height: a.height,
            topBorder: {
              isOn: (e) => e.y === a.y,
            },
            leftBorder: {
              isOn: (e) => e.x === a.x,
            },
            rightBorder: {
              isOn: (e) => e.x === a.x + a.width,
            },
            bottomBorder: {
              isOn: (e) => e.y === a.y + a.height,
            },
          },
        },
      },
    };
  }
  const Ji = (e, t, n) => {
    const r = e
      .filter(
        (e) =>
          !e.hidden &&
          !lt(e.name, ["Fall", "Thrown", "PullUp", "Divided"]) &&
          (!lt(e.name, ["SitAndFaceMouse", "SitAndSpinHead", "Tripped"]) ||
            t.mascot.environment.workArea.bottomBorder.isOn(n))
      )
      .map((e) => {
        return {
          title:
            ((n = e.name),
            ((r = n),
            r
              .replace(/([A-Z]+)([A-Z][a-z])/g, " $1 $2")
              .replace(/([a-z\d])([A-Z])/g, "$1 $2")
              .replace(/([a-zA-Z])(\d)/g, "$1 $2")
              .trim())
              .replace(/IE/g, "element")
              .toLowerCase()
              .replace("work area", "window")
              .replace("floor", "f̲l̲o̲o̲r̲")
              .replace("bottom", "b̲o̲t̲t̲o̲m̲")
              .replace("ceiling", "⌈ceiling⌉")
              .replace("walk", "𝘸𝘢𝘭𝘬")
              .replace("jump", "𝐣𝐮𝐦𝐩")
              .replace("throw", "𝘁𝗵𝗿𝗼𝘄")
              .replace("exit!", "remove")
              .replace("dragged", "pin to mouse")
              .replace("b̲o̲t̲t̲o̲m̲ left", "left")
              .replace("b̲o̲t̲t̲o̲m̲ right", "right")
              .replace("pull up shimeji", "pull up shimeji*")
              .replace("split into two", "split into two*")),
          disabled: !Ui(e.conditions, t),
          data: e,
          groupIndex:
            0 === e.groupIndex ? (0 === e.frequency ? 1 : 2) : e.groupIndex + 3,
          rightContent: ["JumpTo...", "ThrowElement..."].includes(e.name)
            ? "[select]"
            : void 0,
        };
        var n, r;
      })
      .sort((e, t) => e.groupIndex - t.groupIndex);
    var i, o;
    return Object.values(
      ((i = r),
      (o = (e) => e.groupIndex),
      i.reduce((e, t) => {
        const n = o(t);
        return (e[n] = e[n] || []).push(t), e;
      }, {}))
    )
      .filter((e) => e.some((e) => !e.disabled))
      .reverse();
  };
  function Hi(e, t, n, r, i) {
    const o = le(e, "contextmenu").pipe(
        ot((e) => e.preventDefault()),
        Ze()
      ),
      s = n.pipe(tt(o)),
      a = s.pipe(
        it(() =>
          De(
            Gn(document).pipe(Ge(ut((e) => e.target?.matches(tn)))),
            vn("Escape")
          ).pipe(
            Te(1),
            ot(() => {
              document.querySelector(tn)?.remove();
            })
          )
        )
      );
    return [
      De(s.pipe(te(() => !0)), a.pipe(te(() => !1))).pipe(Be(!1), Je()),
      s.pipe(
        st(r, i),
        it(([e, n, r]) => Ae(Jt(e, Ji(t.behaviors, n, r))))
      ),
    ];
  }
  var Gi = Array.isArray,
    Zi = Object.getPrototypeOf,
    Ki = Object.prototype,
    Qi = Object.keys;
  function eo(e) {
    if (1 === e.length) {
      var t = e[0];
      if (Gi(t))
        return {
          args: t,
          keys: null,
        };
      if ((r = t) && "object" == typeof r && Zi(r) === Ki) {
        var n = Qi(t);
        return {
          args: n.map(function (e) {
            return t[e];
          }),
          keys: n,
        };
      }
    }
    var r;
    return {
      args: e,
      keys: null,
    };
  }
  function to(e, t) {
    return e.reduce(function (e, n, r) {
      return (e[n] = t[r]), e;
    }, {});
  }
  function no() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    var n = Xe(e),
      r = Pe(e),
      i = eo(e),
      o = i.args,
      s = i.keys;
    if (0 === o.length) return Ae([], n);
    var a = new L(
      ro(
        o,
        n,
        s
          ? function (e) {
              return to(s, e);
            }
          : N
      )
    );
    return r ? a.pipe(se(r)) : a;
  }
  function ro(e, t, n) {
    return (
      void 0 === n && (n = N),
      function (r) {
        io(
          t,
          function () {
            for (
              var i = e.length,
                o = new Array(i),
                s = i,
                a = i,
                u = function (i) {
                  io(
                    t,
                    function () {
                      var u = Ae(e[i], t),
                        c = !1;
                      u.subscribe(
                        Q(
                          r,
                          function (e) {
                            (o[i] = e),
                              c || ((c = !0), a--),
                              a || r.next(n(o.slice()));
                          },
                          function () {
                            --s || r.complete();
                          }
                        )
                      );
                    },
                    r
                  );
                },
                c = 0;
              c < i;
              c++
            )
              u(c);
          },
          r
        );
      }
    );
  }
  function io(e, t, n) {
    e ? ne(n, e, t) : t();
  }
  function oo() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    var n = Pe(e);
    return n
      ? Y(oo.apply(void 0, s([], o(e))), se(n))
      : K(function (t, n) {
          ro(s([t], o(Qe(e))))(n);
        });
  }
  function so() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return oo.apply(void 0, s([], o(e)));
  }
  function ao(e, t) {
    return p(t) ? ie(e, t, 1) : ie(e, 1);
  }
  function uo(e, t) {
    var n = p(e)
        ? e
        : function () {
            return e;
          },
      r = function (e) {
        return e.error(n());
      };
    return new L(
      t
        ? function (e) {
            return t.schedule(r, 0, e);
          }
        : r
    );
  }
  var co = f(function (e) {
    return function () {
      e(this),
        (this.name = "EmptyError"),
        (this.message = "no elements in sequence");
    };
  });
  function lo() {
    return new co();
  }
  function po(e, t, n) {
    return qn((e.evaluatedDuration ?? 0) * Qt).pipe(
      st(n),
      ot(([, n]) =>
        kn.next({
          type: "AddShimeji",
          props: {
            specId: t.id,
            x: n.x + (e.evaluatedBornX ?? 0),
            y: n.y + (e.evaluatedBornY ?? 0),
            behaviorName: e.bornBehavior,
            parentSelector: n.parentSelector,
          },
        })
      ),
      te(() => ({}))
    );
  }
  function ho(e) {
    return an.pipe(
      st(yn),
      te(([e, t]) => ({
        fx: t.x,
        fy: t.y + 120,
        footX: t.x,
        dx: 0,
        dst: e.dst,
      })),
      Fn(({ footX: e, dx: t }, { fx: n, fy: r, dst: i }) => {
        const o = 0.8 * (t + 0.1 * (n - e)) * i;
        return {
          fx: n,
          fy: r,
          footX: e + o,
          dx: o,
          dst: i,
        };
      }),
      te(({ fx: e, fy: t, footX: n }) => ({
        parentSelector: en,
        lookRight: !1,
        fx: e,
        fy: t,
        footX: n,
      })),
      $n(
        ((t = document),
        le(t, "mousedown", {
          capture: !0,
        })).pipe(
          ot((e) => {
            e.stopPropagation(), e.preventDefault();
          })
        )
      )
    );
    var t;
  }
  function fo(e) {
    return e.pipe(
      rt(1),
      Te(1),
      ot((e) =>
        kn.next({
          type: "RemoveShimeji",
          id: e.id,
        })
      ),
      te(() => ({}))
    );
  }
  function vo(e, t) {
    return (
      void 0 === t && (t = !1),
      K(function (n, r) {
        var i = 0;
        n.subscribe(
          Q(r, function (n) {
            var o = e(n, i++);
            (o || t) && r.next(n), !o && r.complete();
          })
        );
      })
    );
  }
  const yo = 5;
  function mo(e, t) {
    const n = e.evaluatedInitialVx || 0,
      r = e.evaluatedInitialVy || 0,
      i = e.evaluatedResistanceX || 0.05,
      o = e.evaluatedResistanceY || 0.01,
      s = e.evaluatedGravity || 2;
    return no([t, an]).pipe(
      st(xn, Sn),
      vo(
        ut(
          ([[e], t], r) =>
            r > 0 &&
            (e.y >= t.height ||
              (n < 0 && e.x <= t.x) ||
              (n > 0 && e.x >= t.width) ||
              (e.parentSelector !== en && r > yo))
        )
      ),
      te(([[e, t], a, u], c) => {
        const l = e.vy * t.dst * 2,
          p = u.find((t) => ft(e, t.rect, l)),
          h = c > yo && !!p,
          f = h ? p.selector : en;
        return {
          fx: ct(e.x + e.vx * t.dst, a.x, a.width),
          fy: h ? p.rect.y : Math.min(e.y + e.vy * t.dst, a.height),
          vx: 0 === c ? n : e.vx * (1 - i * t.dst),
          vy: 0 === c ? r : e.vy * (1 - o * t.dst) + s * t.dst,
          parentSelector: f,
        };
      })
    );
  }
  function bo(e, t, n) {
    return mo(e, t).pipe(
      st(t, n),
      te(([t, n, r]) => ({
        ...t,
        carryItem: r
          ? {
              selector: r.selector,
              x: n.x + (e.evaluatedIeOffsetX ?? 0),
              y: n.y + (e.evaluatedIeOffsetY ?? 0),
            }
          : null,
      }))
    );
  }
  function xo(e, t, n) {
    const r = e.evaluatedVelocity || 20,
      i = e.evaluatedTargetX || 0,
      o = e.evaluatedTargetY || 0;
    return no([t, an, n]).pipe(
      vo(([e], t) => 0 === t || e.x !== i || e.y !== o),
      te(([e, t, n], s) => {
        const a = (function () {
            const t = i - e.x,
              n = o - e.y,
              s = Math.sqrt(t * t + n * n);
            if (0 === s) return e;
            const a = (r * t) / s,
              u = (r * n) / s;
            return {
              x: Math[i < e.x ? "max" : "min"](e.x + a, i),
              y: Math[o < e.y ? "max" : "min"](e.y + u, o),
            };
          })(),
          u = r * t.dst * 2,
          c = n && mt(a, n.rect, u) ? n.selector : en;
        return {
          fx: a.x,
          fy: a.y,
          parentSelector: c,
        };
      })
    );
  }
  function go(e, t) {
    return t.pipe(
      Te(1),
      te((t) => ({
        lookRight: e.evaluatedLookRight,
      }))
    );
  }
  function wo(e, t, n) {
    return t.pipe(
      st(n),
      vo(
        ([t, n]) =>
          e.evaluatedTargetX !== t.x &&
          e.evaluatedTargetY !== t.y &&
          !!n &&
          mt(t, n.rect, 1),
        !0
      ),
      te(() => ({}))
    );
  }
  function Eo(e, t, n) {
    return t.pipe(
      vo((t) => e.evaluatedTargetX !== t.x && e.evaluatedTargetY !== t.y),
      st(n),
      te(([t, n]) => ({
        carryItem: n
          ? {
              selector: n.selector,
              x: t.x + (e.evaluatedIeOffsetX ?? 0),
              y: t.y + (e.evaluatedIeOffsetY ?? 0),
            }
          : null,
      }))
    );
  }
  function So(e, t) {
    return t.pipe(
      Te(1),
      te((t) => ({
        fx: t.x + (e.evaluatedX ?? 0),
        fy: t.y + (e.evaluatedY ?? 0),
      }))
    );
  }
  function ko(e, t = !1) {
    const n = no([e, an]),
      r = new Set([
        ...Object.values(It),
        ...document.querySelectorAll(en),
        ...document.querySelectorAll(tn),
        ...document.querySelectorAll("html, body"),
      ]),
      i = () =>
        Y(
          te(({ clientX: e, clientY: t }) => document.elementFromPoint(e, t)),
          Ge((e) => !!e),
          Ge((e) => !r.has(e))
        ),
      o = fn.pipe(
        ot(() => qt(void 0)),
        i(),
        te((e) => e.getBoundingClientRect()),
        st(fn),
        ot(([e, n]) => {
          const r = t ? xt(n, e) : void 0;
          return qt(e, r);
        }),
        Rn(() => qt(void 0))
      );
    return pn.pipe(
      tt(o.pipe(Ze())),
      rt(1),
      $n(vn("Escape")),
      Te(1),
      ot(() => {
        qt(void 0);
      }),
      i(),
      st(e),
      Be(null),
      it((e) => {
        if (!e)
          return n.pipe(
            te(() => ({
              paused: !0,
            }))
          );
        const [t, r] = e;
        return (
          kn.next({
            type: "NodeSelected",
            shimejiId: r.id,
            node: Zt(t),
          }),
          Ue({})
        );
      })
    );
  }
  function Io(e, t, n) {
    const r = e.evaluatedInitialVx || 32,
      i = e.evaluatedInitialVy || -10,
      o = e.evaluatedGravity || 2;
    return no([t, an]).pipe(
      st(xn, n),
      vo(
        ut(
          ([[e], t], n) =>
            n > 0 &&
            null !== e.carryItem &&
            (e.carryItem.x >= t.width ||
              e.carryItem.x <= t.x ||
              e.carryItem.y >= t.height ||
              e.carryItem.y <= t.y)
        )
      ),
      te(([[e, t], , n], s) => {
        const a = e.lookRight ? 1 : -1,
          u = 0 === s ? r * a : e.vx,
          c = 0 === s ? i : e.vy + o * t.dst,
          l = e.carryItem?.x ?? e.x,
          p = e.carryItem?.y ?? e.y;
        return {
          vx: u,
          vy: c,
          carryItem: n
            ? {
                selector: n.selector,
                x: l + u * t.dst,
                y: p + c * t.dst,
              }
            : null,
        };
      })
    );
  }
  const Ao = (e, t) => {
      const n = t.actions.find((t) => t.name === e.name);
      if (n)
        return {
          ...n,
          ...e,
          type: n.type,
        };
    },
    Mo = (e, t) => {
      const n = t.behaviors.find((t) => t.name === e.name) ?? void 0;
      if (n)
        return {
          ...e,
          type: "Behavior",
          nextBehaviors: n.nextBehaviors ?? [],
        };
    },
    To = (e, t) => {
      const n = e.gap ? Wi(e.gap, t) : 0,
        r = {
          ...t,
          gap: n,
        },
        i = e.targetX ? Wi(e.targetX, r) : void 0,
        o = e.initialVx ? Wi(e.initialVx, r) : void 0;
      return bt({
        ...e,
        type: e.type,
        animations: e.animations ?? [],
        evaluatedCondition: !e.condition || Di(e.condition, r),
        evaluatedLookRight:
          "Wall" === e.borderType
            ? r.mascot.environment.workArea.rightBorder.isOn(r.mascot.anchor) ||
              r.mascot.environment.activeIE.leftBorder.isOn(r.mascot.anchor)
            : "Move" === e.type ||
              "Jump" === e.embedType ||
              "WalkWithIE" === e.embedType
            ? void 0 !== i && i > r.mascot.anchor.x
            : "Fall" === e.embedType || "FallWithIE" === e.embedType
            ? 0 === o || void 0 === o
              ? r.mascot.lookRight
              : o > 0
            : "Look" !== e.embedType || e.lookRight
            ? e.lookRight
              ? Di(e.lookRight, r)
              : r.mascot.lookRight
            : !r.mascot.lookRight,
        evaluatedDuration: e.duration
          ? Wi(e.duration, r)
          : e.animations?.[0]?.poses?.reduce((e, t) => e + t.duration, 0),
        evaluatedTargetX: i,
        evaluatedTargetY: e.targetY ? Wi(e.targetY, r) : void 0,
        evaluatedVelocity: e.velocity ? Wi(e.velocity, r) : void 0,
        evaluatedX: e.x ? Wi(e.x, r) : void 0,
        evaluatedY: e.y ? Wi(e.y, r) : void 0,
        evaluatedInitialVx: o,
        evaluatedInitialVy: e.initialVy ? Wi(e.initialVy, r) : void 0,
        evaluatedResistanceX: e.resistanceX ? Wi(e.resistanceX, r) : void 0,
        evaluatedResistanceY: e.resistanceY ? Wi(e.resistanceY, r) : void 0,
        evaluatedGravity: e.gravity ? Wi(e.gravity, r) : void 0,
        evaluatedBornX: e.bornX ? Wi(e.bornX, r) : void 0,
        evaluatedBornY: e.bornY ? Wi(e.bornY, r) : void 0,
        evaluatedIeOffsetX: e.ieOffsetX ? Wi(e.ieOffsetX, r) : void 0,
        evaluatedIeOffsetY: e.ieOffsetY ? Wi(e.ieOffsetY, r) : void 0,
      });
    };
  function Oo(e, t, n, r, i) {
    return (o) =>
      o.pipe(
        it((o) => {
          function s(t) {
            switch (t.embedType) {
              case "Fall":
                return mo(t, n);
              case "Dragged":
                return ho();
              case "Offset":
                return So(t, n);
              case "Look":
                return go(t, n);
              case "Jump":
                return xo(t, n, r);
              case "Breed":
                return po(t, e, n);
              case "FallWithIE":
                return bo(t, n, r);
              case "WalkWithIE":
                return Eo(t, n, r);
              case "ThrowIE":
                return Io(t, n, r);
              case "SelectIE":
                return ko(n);
              case "SelectEdge":
                return ko(n, !0);
              case "Exit":
                return fo(n);
              case "Reboot":
                return an.pipe(
                  Te(1),
                  st(xn),
                  te(([, e]) => ({
                    paused: !1,
                    fx: e.x + 128 + (e.width - 256) * Math.random(),
                    fy: e.y + 128 + (e.height - 256) * Math.random(),
                    parentSelector: en,
                    carryItem: null,
                    vx: 0,
                    vy: 0,
                  }))
                );
              default:
                return uo(
                  () =>
                    new Error(`Embedded action '${t.name}' is not implemented.`)
                );
            }
          }
          function a(e) {
            switch (e.type) {
              case "Stay":
              case "Animate":
                return qn((e.evaluatedDuration ?? 0) * Qt).pipe(
                  Ge(ht),
                  te(() => ({}))
                );
              case "Move":
                return wo(e, n, i);
              case "Embedded":
                return s(e);
              default:
                return uo(
                  () => new Error(`Action type '${e.type}' is not implemented.`)
                );
            }
          }
          function u(r) {
            return t.pipe(
              Te(1),
              st(n, i),
              ie(([t, i, o]) => {
                if (r.condition && !Di(r.condition, t)) return Me;
                if (
                  !(function () {
                    switch (r.borderType) {
                      case "Wall":
                        return !!o && (dt(i, o.rect, 1) || vt(i, o.rect, 1));
                      case "Floor":
                        return (
                          !!o &&
                          ((o.selector === en && yt(i, o.rect, 1)) ||
                            (o.selector !== en && ft(i, o.rect, 1)))
                        );
                      case "Ceiling":
                        return (
                          !!o &&
                          ((o.selector === en && ft(i, o.rect, 1)) ||
                            (o.selector !== en && yt(i, o.rect, 1)))
                        );
                      default:
                        return !0;
                    }
                  })()
                )
                  return uo(
                    () =>
                      new Error(
                        `BorderType condition is not met for action ${r.name}`
                      )
                  );
                switch (r.type) {
                  case "Sequence":
                    return Ae(r.actions ?? []).pipe(ao((e) => u(e)));
                  case "Select": {
                    const e = r.actions?.find(
                      (e) => !e.condition || Di(e.condition, t)
                    );
                    return e ? u(e) : Me;
                  }
                  case "Reference":
                    const i = Ao(r, e);
                    return i
                      ? u(i)
                      : uo(() => new Error(`Action '${r.name}' not found`));
                  default: {
                    const e = To(r, t);
                    return (
                      r.name,
                      a(e).pipe(
                        Be({
                          action: e,
                        }),
                        Dn(Kn(n.pipe(rt(1))))
                      )
                    );
                  }
                }
              })
            );
          }
          function c(t) {
            switch (t.type) {
              case "Reference":
                const r = Mo(t, e);
                return r
                  ? c(r)
                  : uo(() => new Error(`Behavior '${t.name}' not found`));
              case "Behavior":
                const i = e.actions.find((e) => e.name === t.name);
                return i
                  ? (t.name,
                    u(i).pipe(
                      te((e) => ({
                        ...e,
                        behaviorName: t.name,
                      })),
                      (void 0 ===
                        (n = () =>
                          new Error(
                            `No applicable actions in behavior ${t.name}`
                          )) && (n = lo),
                      K(function (e, t) {
                        var r = !1;
                        e.subscribe(
                          Q(
                            t,
                            function (e) {
                              (r = !0), t.next(e);
                            },
                            function () {
                              return r ? t.complete() : t.error(n());
                            }
                          )
                        );
                      })),
                      Dn(
                        Cn(() =>
                          l(
                            t.nextBehaviors.length
                              ? t.nextBehaviors
                              : e.behaviors
                          )
                        )
                      )
                    ))
                  : uo(() => new Error(`Action '${t.name}' not found`));
            }
            var n;
          }
          function l(n, r = !1) {
            return t.pipe(
              Te(1),
              ie((e) => {
                const t = n.filter((t) => Ui(t.conditions, e)),
                  i = pt(t, (e) => (r ? 1 : e.frequency));
                return i ? c(i) : uo(() => new Error("No applicable behavior"));
              }),
              _n((t) => {
                t.message;
                const n = e.behaviors?.find((e) => "Fall" === e.name);
                return n
                  ? c(n)
                  : uo(() => new Error("Fall behavior not found"));
              })
            );
          }
          return o ? l([o], !0) : l(e.behaviors);
        }),
        _e({
          refCount: !0,
        })
      );
  }
  function Co(e, t, n, r, i, o) {
    return (s) => {
      const a = t.pipe(Oo(e, n, s, r, i)),
        u = a.pipe(
          te(({ action: e }) => e),
          Ge((e) => void 0 !== e)
        ),
        c = u.pipe(
          so(n, a),
          te(([e, t, n]) => ({
            ...t,
            targetX: e.evaluatedTargetX || 0,
            targetY: e.evaluatedTargetY || 0,
            footX: n.footX || 0,
            footY: n.footY || 0,
          }))
        ),
        l = u
          .pipe(
            it(({ animations: e }) => {
              if (0 === e.length) return Ue(void 0);
              if (!e[0]?.condition) return Ue(e[0]);
              const t = e.map((e) => ({
                animation: e,
                checkCondition: zi(e.condition || "true"),
              }));
              return c.pipe(
                te((e) => t.find((t) => t.checkCondition(e))?.animation),
                Je()
              );
            })
          )
          .pipe(
            it((e) => {
              return e && e.poses.length
                ? Ae(e.poses).pipe(
                    ao((e) => Ue(e).pipe(Dn(qn(e.duration * Qt)), Ge(ht))),
                    Dn(Kn(s.pipe(rt(1)))),
                    ((i = 1 / 0),
                    null != t &&
                      ("object" == typeof t
                        ? ((n = t.count),
                          (i = void 0 === n ? 1 / 0 : n),
                          (r = t.delay))
                        : (i = t)),
                    i <= 0
                      ? function () {
                          return Me;
                        }
                      : K(function (e, t) {
                          var n,
                            o = 0,
                            s = function () {
                              if (
                                (null == n || n.unsubscribe(),
                                (n = null),
                                null != r)
                              ) {
                                var e = "number" == typeof r ? qn(r) : G(r(o)),
                                  i = Q(t, function () {
                                    i.unsubscribe(), a();
                                  });
                                e.subscribe(i);
                              } else a();
                            },
                            a = function () {
                              var r = !1;
                              (n = e.subscribe(
                                Q(t, void 0, function () {
                                  ++o < i ? (n ? s() : (r = !0)) : t.complete();
                                })
                              )),
                                r && s();
                            };
                          a();
                        }))
                  )
                : Ue(void 0);
              var t, n, r, i;
            })
          ),
        p = an.pipe(
          st(l, u),
          te(([e, t, n]) =>
            t
              ? {
                  anchorX: t.anchor.x,
                  anchorY: t.anchor.y,
                  sprite: t.sprite,
                  dx: t.velocity.x * e.dst * (n.evaluatedLookRight ? -1 : 1),
                  dy: t.velocity.y * e.dst,
                }
              : void 0
          )
        );
      return s.pipe(
        st(a, p, u, o),
        te(([e, t, n, r, i]) =>
          i || t.paused
            ? e
            : {
                ...e,
                anchorX: n?.anchorX ?? e.anchorX,
                anchorY: n?.anchorY ?? e.anchorY,
                sprite: n?.sprite ?? e.sprite,
                vx: t.vx ?? e.vx,
                vy: t.vy ?? e.vy,
                parentSelector: t.parentSelector ?? e.parentSelector,
                lookRight: t.lookRight ?? r.evaluatedLookRight ?? e.lookRight,
                carryItem: t.carryItem ?? null,
                behaviorName: t.behaviorName ?? e.behaviorName,
                x:
                  t.fx ??
                  (n && 0 !== n.dx
                    ? n.dx < 0
                      ? Math.max(e.x + n.dx, r.evaluatedTargetX ?? -1 / 0)
                      : Math.min(e.x + n.dx, r.evaluatedTargetX ?? 1 / 0)
                    : e.x),
                y:
                  t.fy ??
                  (n && 0 !== n.dy
                    ? n.dy < 0
                      ? Math.max(e.y + n.dy, r.evaluatedTargetY ?? -1 / 0)
                      : Math.min(e.y + n.dy, r.evaluatedTargetY ?? 1 / 0)
                    : e.y),
              }
        )
      );
    };
  }
  const _o = (e, t, n) => {
      const r = new On({
        specId: n.specId,
        id: n.id,
        x: n.x ?? window.innerWidth * Math.random(),
        y: n.y ?? window.innerHeight * Math.random(),
        vx: n.vx ?? 0,
        vy: n.vy ?? 0,
        sprite: n.sprite ?? "/shime1.png",
        anchorX: n.anchorX ?? 64,
        anchorY: n.anchorY ?? 64,
        lookRight: n.lookRight ?? !1,
        parentSelector: n.parentSelector ?? en,
        carryItem: n.carryItem ?? null,
        behaviorName: n.behaviorName ?? "Fall",
      });
      return e.pipe(
        te((e) => e[n.specId]),
        Ge((e) => !!e),
        ((i = "id"),
        Je(function (e, t) {
          return o ? o(e[i], t[i]) : e[i] === t[i];
        })),
        st(r),
        it(([e, n]) => {
          const i = Ue(
              e.behaviors
                .filter((e) => e.groupIndex > 0)
                .find((e) => e.name === n.behaviorName)
            ),
            o = r.pipe(
              te((e) => e.behaviorName),
              Je(),
              _e(1)
            ),
            s = Xt(n, e),
            a = r.pipe(
              te((e) => e.parentSelector),
              Je()
            ),
            u = an.pipe(
              st(a),
              te(([e, t]) => Gt(t)),
              _e({
                bufferSize: 1,
                refCount: !0,
              })
            ),
            c = r.pipe(
              te(({ parentSelector: e }) => e),
              Je(),
              te((e) => (e ? document.querySelector(e) : null)),
              it((e) =>
                r.pipe(
                  te(
                    () =>
                      e?.getBoundingClientRect() ?? {
                        width: 0,
                        height: 0,
                        x: -100,
                        y: -100,
                      }
                  ),
                  nt(),
                  te(([e, t]) => ({
                    dx: t.x - e.x,
                    dy: t.y - e.y,
                  })),
                  Be({
                    dx: 0,
                    dy: 0,
                  })
                )
              ),
              _e({
                bufferSize: 1,
                refCount: !0,
              })
            ),
            l = r.pipe(
              te((e) => e.carryItem?.selector ?? ""),
              Je()
            ),
            p = Tn.pipe(
              Ge(({ shimejiId: e }) => e === n.id),
              it(({ node: e }) =>
                Ue(e.selector).pipe(Dn(Kn(o.pipe(rt(2))), Ue(null)))
              ),
              Be(null),
              _e({
                bufferSize: 1,
                refCount: !0,
              })
            ),
            h = an.pipe(
              st(l, p, a, wn),
              te(([e, t, n, r, i]) => t || n || (r !== en ? r : i)),
              te(Gt),
              _e({
                bufferSize: 1,
                refCount: !0,
              })
            ),
            f = r.pipe(st(yn, mn, bn, xn, h, t), te(Vi)),
            [d, v] = Zn(s),
            [y, m] = Hi(s, e, d, f, r),
            b = v.pipe(
              rt(1),
              te((e) => (e ? "Dragged" : "Thrown")),
              it((t) => {
                const n = e.behaviors.find((e) => e.name === t);
                return n ? Ue(n) : Me;
              })
            ),
            x = o.pipe(te((e) => "Dragged" === e)),
            g = De(
              o.pipe(
                zn(1e3),
                Ge((e) => e.length > 10)
              ),
              r.pipe(
                st(xn),
                te(
                  ([{ x: e, y: t }, n]) =>
                    !mt(
                      {
                        x: e,
                        y: t,
                      },
                      n,
                      1
                    )
                ),
                Je(),
                it((e) => (e ? qn(sn) : Me))
              )
            ).pipe(
              it(() => {
                const t = e.behaviors.find((e) => "Reboot" === e.name);
                return (
                  t ||
                    kn.next({
                      type: "RemoveShimeji",
                      id: n.id,
                    }),
                  n.specId,
                  t ? Ue(t) : Me
                );
              })
            ),
            w = De(i, b, m, g),
            E = y;
          return an.pipe(
            st(r),
            te(([, e]) => e),
            Y(
              st(c),
              te(([e, { dx: t, dy: n }]) =>
                e.parentSelector
                  ? {
                      ...e,
                      x: e.x + t,
                      y: e.y + n,
                    }
                  : e
              )
            ),
            Co(e, w, f, h, u, E),
            Ut(e, s, x),
            (e) => {
              let t;
              return e.pipe(
                st(an),
                ot(([, e]) => {
                  t && (t.elapsed, e.elapsed), (t = e);
                }),
                te(([e]) => e)
              );
            },
            ot((e) => r.next(e))
          );
        })
      );
      var i, o;
    },
    Ro = Mn.pipe(
      Fn((e, { spec: t }) => ((e[t.id] = t), e), {}),
      _e(1)
    );
  Ro.subscribe();
  const jo = Cn(() => {
    let e = 1;
    const t = new On(0);
    return In.pipe(
      ie(({ props: n }) => {
        const r = e++,
          i = An.pipe(Ge((e) => e.id === r));
        return (
          t.next(t.value + 1),
          _o(Ro, t, {
            ...n,
            id: r,
          }).pipe(
            $n(i),
            _n((e) => (e?.message, Me)),
            Rn(() => {
              Nt(r), t.next(t.value - 1);
            })
          )
        );
      })
    );
  }).pipe(
    (($o = ({ id: e }) => e),
    (Po = an),
    K(function (e, t) {
      var n = new Set();
      e.subscribe(
        Q(t, function (e) {
          var r = $o ? $o(e) : e;
          n.has(r) || (n.add(r), t.next(e));
        })
      ),
        null == Po ||
          Po.subscribe(
            Q(
              t,
              function () {
                return n.clear();
              },
              S
            )
          );
    })),
    ((Fo = an),
    K(function (e, t) {
      var n = [];
      return (
        e.subscribe(
          Q(
            t,
            function (e) {
              return n.push(e);
            },
            function () {
              t.next(n), t.complete();
            }
          )
        ),
        Fo.subscribe(
          Q(
            t,
            function () {
              var e = n;
              (n = []), t.next(e);
            },
            S
          )
        ),
        function () {
          n = null;
        }
      );
    })),
    ot((e) => Vt(e)),
    _e(1)
  );
  var Fo, $o, Po;
  class Xo {
    latestState = [];
    sendMessage = () => {};
    registerMessageHandler(e) {
      this.sendMessage = e;
    }
    initialize(e = {}) {
      Ht(),
        jo.subscribe((e) => (this.latestState = e)),
        e.showFps && cn.subscribe(Lt);
    }
    addCharacterSpec(e) {
      kn.next({
        type: "AddCharacterSpec",
        spec: this.prepareSpec(e),
      });
    }
    spawnShimeji(e) {
      kn.next({
        type: "AddShimeji",
        props: e,
      });
    }
    removeAllShimejis() {
      this.latestState.forEach(({ id: e }) => {
        kn.next({
          type: "RemoveShimeji",
          id: e,
        });
      });
    }
    removeAllShimejisForSpec(e) {
      this.latestState
        .filter((t) => t.specId === e)
        .forEach(({ id: e }) => {
          kn.next({
            type: "RemoveShimeji",
            id: e,
          });
        });
    }
    removeOneShimejiForSpec(e) {
      const t = this.latestState.find((t) => t.specId === e);
      t &&
        kn.next({
          type: "RemoveShimeji",
          id: t.id,
        });
    }
    getState() {
      return this.latestState.slice();
    }
    prepareSpec(e) {
      const { actions: t, behaviors: n } = e,
        r = t.find((e) => "ThrowIEFromLeft" === e.name),
        i = t.find((e) => "ThrowIEFromRight" === e.name),
        o = t.find((e) => "ThrowIEToLeft" === e.name),
        s = t.find((e) => "ThrowIEToRight" === e.name),
        a = t.find((e) => "Jumping" === e.name),
        u = "mascot.environment.cursor.y - mascot.environment.activeIE.top",
        c = "mascot.environment.activeIE.right - mascot.environment.cursor.x",
        l = "mascot.environment.activeIE.bottom - mascot.environment.cursor.y",
        p = "mascot.environment.cursor.x - mascot.environment.activeIE.left";
      return (
        t.push({
          type: "Sequence",
          name: "ThrowElement...",
          actions: [
            {
              type: "Embedded",
              embedType: "SelectIE",
              name: "Select",
            },
            {
              type: "Select",
              name: "SelectCorner",
              actions: [
                {
                  type: "Sequence",
                  name: "ThrowIEFromLeft",
                  condition:
                    r || s
                      ? "mascot.anchor.x < mascot.environment.activeIE.left + (mascot.environment.activeIE.width / 2)"
                      : "false",
                  actions: [
                    {
                      type: "Reference",
                      name: "Jumping",
                      targetX: "${mascot.environment.activeIE.left}",
                      targetY: "${mascot.environment.activeIE.bottom+64}",
                    },
                    {
                      type: "Reference",
                      name: "Look",
                      lookRight: "true",
                    },
                    {
                      type: "Reference",
                      name: "FallWithIe",
                    },
                    {
                      type: "Reference",
                      name: "WalkWithIe",
                      targetX:
                        "#{Math.max(mascot.environment.workArea.right-400, mascot.anchor.x) + 1}",
                    },
                    {
                      type: "Reference",
                      name: "ThrowIe",
                    },
                  ],
                },
                {
                  type: "Sequence",
                  name: "ThrowIEFromRight",
                  condition:
                    i || o
                      ? "mascot.anchor.x >= mascot.environment.activeIE.left + (mascot.environment.activeIE.width / 2)"
                      : "false",
                  actions: [
                    {
                      type: "Reference",
                      name: "Jumping",
                      targetX: "${mascot.environment.activeIE.right}",
                      targetY: "${mascot.environment.activeIE.bottom+64}",
                    },
                    {
                      type: "Reference",
                      name: "Look",
                      lookRight: "false",
                    },
                    {
                      type: "Reference",
                      name: "FallWithIe",
                    },
                    {
                      type: "Reference",
                      name: "WalkWithIe",
                      targetX:
                        "#{Math.min(mascot.environment.workArea.left+400, mascot.anchor.x) - 1}",
                    },
                    {
                      type: "Reference",
                      name: "ThrowIe",
                    },
                  ],
                },
              ],
            },
          ],
        }),
        t.push({
          type: "Sequence",
          name: "JumpTo...",
          actions: [
            {
              type: "Embedded",
              embedType: "SelectEdge",
              name: "Select",
            },
            {
              type: "Select",
              name: "Select",
              actions: [
                {
                  type: "Reference",
                  name: "Jumping",
                  condition: `#{${u} < Math.min(${l}, Math.min(${p}, ${c}))}`,
                  targetX: "#{mascot.environment.cursor.x}",
                  targetY: "#{mascot.environment.activeIE.top}",
                },
                {
                  type: "Sequence",
                  name: "JumpingToRightEdge",
                  condition: `#{${c} < Math.min(${l}, Math.min(${p}, ${u}))}`,
                  actions: [
                    {
                      type: "Reference",
                      name: "Jumping",
                      targetX: "#{mascot.environment.activeIE.right}",
                      targetY: "#{mascot.environment.cursor.y}",
                    },
                    {
                      type: "Reference",
                      name: "GrabWall",
                      duration: "100+Math.random()*100",
                    },
                  ],
                },
                {
                  type: "Reference",
                  name: "Jumping",
                  condition: `#{${l} < Math.min(${u}, Math.min(${p}, ${c}))}`,
                  targetX: "#{mascot.environment.cursor.x}",
                  targetY: "#{mascot.environment.activeIE.bottom}",
                },
                {
                  type: "Sequence",
                  name: "JumpingToLeftEdge",
                  condition: `#{${p} < Math.min(${l}, Math.min(${u}, ${c}))}`,
                  actions: [
                    {
                      type: "Reference",
                      name: "Jumping",
                      targetX: "#{mascot.environment.activeIE.left}",
                      targetY: "#{mascot.environment.cursor.y}",
                    },
                    {
                      type: "Reference",
                      name: "GrabWall",
                      duration: "100+Math.random()*100",
                    },
                  ],
                },
              ],
            },
          ],
        }),
        t.push({
          type: "Sequence",
          name: "Exit!",
          actions: [
            {
              type: "Reference",
              name: "Dash",
              targetX:
                "#{mascot.anchor.x < mascot.environment.activeIE.left + mascot.environment.activeIE.width / 2 ? mascot.environment.activeIE.left - 1 : mascot.environment.activeIE.right + 1}",
              condition: "mascot.environment.activeIE.top == mascot.anchor.y",
            },
            {
              type: "Embedded",
              name: "Exit",
              embedType: "Exit",
              condition:
                "#{mascot.anchor.x <= 0 || mascot.anchor.x >= mascot.environment.workArea.width}",
            },
            {
              type: "Reference",
              name: "Falling",
              condition:
                "mascot.environment.workArea.bottom != mascot.anchor.y",
            },
            {
              type: "Reference",
              name: "Exit!",
              condition:
                "mascot.environment.workArea.bottom != mascot.anchor.y",
            },
            {
              type: "Reference",
              name: "Dash",
              targetX:
                "#{mascot.anchor.x < mascot.environment.workArea.width / 2 ? -128 : mascot.environment.workArea.width + 128}",
            },
            {
              type: "Embedded",
              name: "Exit",
              embedType: "Exit",
            },
          ],
        }),
        t.push({
          type: "Embedded",
          name: "Reboot",
          embedType: "Reboot",
        }),
        n.push({
          type: "Behavior",
          name: "ThrowElement...",
          frequency: 0,
          nextBehaviors: [],
          conditions: [r || i || o || s ? "true" : "false"],
          groupIndex: 0,
          hidden: !1,
        }),
        n.push({
          type: "Behavior",
          name: "JumpTo...",
          frequency: 0,
          nextBehaviors: [],
          conditions: [a ? "true" : "false"],
          groupIndex: 0,
          hidden: !1,
        }),
        n.push({
          type: "Behavior",
          name: "Exit!",
          frequency: 0,
          nextBehaviors: [],
          conditions: ["true"],
          groupIndex: 0,
          hidden: !1,
        }),
        n.push({
          type: "Behavior",
          name: "Reboot",
          frequency: 0,
          nextBehaviors: [],
          conditions: ["true"],
          groupIndex: 0,
          hidden: !0,
        }),
        {
          ...e,
          actions: t,
          behaviors: n,
        }
      );
    }
  }
  async function No(e, t) {
    const n = await chrome.storage.local.get(e);
    return n[e] ? JSON.parse(n[e]) : t;
  }
  async function Yo(e, t) {
    await chrome.storage.local.set({
      [e]: JSON.stringify(t),
    });
  }
  function Bo(e, t) {
    return new L((n) => {
      No(e, t)
        .then((e) => n.next(e))
        .catch((e) => n.error(e));
      const r = (r, i) => {
        for (let [o, { newValue: s }] of Object.entries(r))
          e === o && "local" === i && n.next(s ? JSON.parse(s) : t);
      };
      return (
        chrome.storage.onChanged.addListener(r),
        () => {
          chrome.storage.onChanged.removeListener(r);
        }
      );
    });
  }
  const Lo = Object.freeze({
      active: !0,
      reportErrors: !1,
    }),
    qo = Object.freeze([]),
    zo = Bo("specs", qo),
    Wo = () =>
      No("settings", Lo).then((e) => ({
        ...Lo,
        ...e,
      })),
    Do = Bo("settings", Lo).pipe(
      te((e) => ({
        ...Lo,
        ...e,
      }))
    ),
    Uo = () => No("lastTabState"),
    Vo = (e) => Yo("lastTabState", e),
    Jo = chrome.runtime.getManifest(),
    Ho = chrome.runtime.id;
  const Go = le(document, "contextmenu").pipe(
      te((e) => ({
        x: e.clientX,
        y: e.clientY,
      })),
      Be(void 0),
      _e(1)
    ),
    Zo = async (e) =>
      e.startsWith("data:image")
        ? await fetch(e)
            .then((e) => e.blob())
            .then((e) => URL.createObjectURL(e))
        : e;
  !(async function () {
    try {
      await (async function () {
        const [e, t, n] = await Promise.all([
          Uo(),
          ((r = {
            type: "getTabId",
          }),
          new Promise((e, t) => {
            chrome.runtime.sendMessage(r, (n) => {
              chrome.runtime.lastError
                ? t(chrome.runtime.lastError)
                : n.success
                ? e(n.result)
                : t(n.error || "Unknown error");
            });
          })),
          Wo(),
        ]);
        var r;
        const i = new Xo();
        i.initialize({
          showFps: !1,
        }),
          i.registerMessageHandler((e) => {
            console.debug(e), e.type;
          }),
          zo.subscribe((e) => {
            e.forEach(async (e) => {
              i.addCharacterSpec({
                ...e,
                spritesheet: await Zo(e.spritesheet),
              });
            });
          }),
          Do.subscribe((e) => {
            e.active || i.removeAllShimejis();
          }),
          Go.subscribe();
        const o = e?.tabId === t ? e : void 0;
        n.active &&
          o?.shimejis.forEach((e) => {
            i.spawnShimeji(e);
          }),
          window.addEventListener(
            "beforeunload",
            async () => {
              const e = i.getState();
              Vo({
                tabId: t,
                shimejis: e,
              }).catch(() => {
                console.debug(
                  "Failed to save shimeji state, because the webpage is not longer connected to the extension. Shimejis will not be restored on next page."
                );
              });
            },
            {
              capture: !0,
            }
          ),
          chrome.runtime.onMessage.addListener((e, t, n) => {
            switch (e.type) {
              case "isConnected":
                n(!0);
                break;
              case "callAnotherShimeji":
                Go.pipe(Te(1)).subscribe((t) => {
                  let n, r;
                  "contextMenu" === e.target && ((n = t?.x), (r = t?.y)),
                    i.spawnShimeji({
                      specId: e.specId,
                      x: n,
                      y: r,
                    });
                });
                break;
              case "removeOneShimejiForSpec":
                i.removeOneShimejiForSpec(e.specId);
                break;
              case "removeAllShimejisForSpec":
                i.removeAllShimejisForSpec(e.specId);
            }
            return !1;
          });
        const s = document.createElement("meta");
        s.setAttribute("name", "shimejiBrowserExtensionId"),
          s.setAttribute("content", Ho),
          s.setAttribute("data-version", Jo.version),
          document.querySelector("head")?.appendChild(s);
      })();
    } catch (e) {
      console.debug("Shimejis failed to load.", e);
    }
  })();
})();
