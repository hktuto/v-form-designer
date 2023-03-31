var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value2) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value: value2 }) : obj[key] = value2;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { openBlock, createElementBlock, normalizeClass, renderSlot, reactive, createElementVNode, toDisplayString, createCommentVNode, resolveComponent, normalizeStyle, withModifiers, Fragment, createVNode, createBlock, withCtx, createTextVNode, renderList, pushScopeId, popScopeId, createSlots, watch, ref, onBeforeUnmount, onMounted, onUnmounted, withDirectives, mergeProps, resolveDynamicComponent, normalizeProps, guardReactiveProps, vShow, defineComponent, isVNode } from "vue";
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var axios$2 = { exports: {} };
var bind$2 = function bind2(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};
var bind$1 = bind$2;
var toString = Object.prototype.toString;
function isArray(val) {
  return toString.call(val) === "[object Array]";
}
function isUndefined(val) {
  return typeof val === "undefined";
}
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
}
function isArrayBuffer(val) {
  return toString.call(val) === "[object ArrayBuffer]";
}
function isFormData(val) {
  return typeof FormData !== "undefined" && val instanceof FormData;
}
function isArrayBufferView(val) {
  var result;
  if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
  }
  return result;
}
function isString(val) {
  return typeof val === "string";
}
function isNumber(val) {
  return typeof val === "number";
}
function isObject(val) {
  return val !== null && typeof val === "object";
}
function isPlainObject(val) {
  if (toString.call(val) !== "[object Object]") {
    return false;
  }
  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}
function isDate(val) {
  return toString.call(val) === "[object Date]";
}
function isFile(val) {
  return toString.call(val) === "[object File]";
}
function isBlob(val) {
  return toString.call(val) === "[object Blob]";
}
function isFunction(val) {
  return toString.call(val) === "[object Function]";
}
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}
function isURLSearchParams(val) {
  return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
}
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
}
function isStandardBrowserEnv() {
  if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
    return false;
  }
  return typeof window !== "undefined" && typeof document !== "undefined";
}
function forEach(obj, fn) {
  if (obj === null || typeof obj === "undefined") {
    return;
  }
  if (typeof obj !== "object") {
    obj = [obj];
  }
  if (isArray(obj)) {
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}
function merge() {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }
  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === "function") {
      a[key] = bind$1(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}
function stripBOM(content) {
  if (content.charCodeAt(0) === 65279) {
    content = content.slice(1);
  }
  return content;
}
var utils$d = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isFunction,
  isStream,
  isURLSearchParams,
  isStandardBrowserEnv,
  forEach,
  merge,
  extend,
  trim,
  stripBOM
};
var utils$c = utils$d;
function encode(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var buildURL$2 = function buildURL2(url, params, paramsSerializer) {
  if (!params) {
    return url;
  }
  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils$c.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];
    utils$c.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === "undefined") {
        return;
      }
      if (utils$c.isArray(val)) {
        key = key + "[]";
      } else {
        val = [val];
      }
      utils$c.forEach(val, function parseValue(v) {
        if (utils$c.isDate(v)) {
          v = v.toISOString();
        } else if (utils$c.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + "=" + encode(v));
      });
    });
    serializedParams = parts.join("&");
  }
  if (serializedParams) {
    var hashmarkIndex = url.indexOf("#");
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url;
};
var utils$b = utils$d;
function InterceptorManager$1() {
  this.handlers = [];
}
InterceptorManager$1.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled,
    rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};
InterceptorManager$1.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};
InterceptorManager$1.prototype.forEach = function forEach2(fn) {
  utils$b.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};
var InterceptorManager_1 = InterceptorManager$1;
var utils$a = utils$d;
var normalizeHeaderName$1 = function normalizeHeaderName2(headers, normalizedName) {
  utils$a.forEach(headers, function processHeader(value2, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value2;
      delete headers[name];
    }
  });
};
var enhanceError$2 = function enhanceError2(error, config, code, request2, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request2;
  error.response = response;
  error.isAxiosError = true;
  error.toJSON = function toJSON() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  };
  return error;
};
var enhanceError$1 = enhanceError$2;
var createError$2 = function createError2(message, config, code, request2, response) {
  var error = new Error(message);
  return enhanceError$1(error, config, code, request2, response);
};
var createError$1 = createError$2;
var settle$1 = function settle2(resolve, reject, response) {
  var validateStatus2 = response.config.validateStatus;
  if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
    resolve(response);
  } else {
    reject(createError$1("Request failed with status code " + response.status, response.config, null, response.request, response));
  }
};
var utils$9 = utils$d;
var cookies$1 = utils$9.isStandardBrowserEnv() ? function standardBrowserEnv() {
  return {
    write: function write(name, value2, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + "=" + encodeURIComponent(value2));
      if (utils$9.isNumber(expires)) {
        cookie.push("expires=" + new Date(expires).toGMTString());
      }
      if (utils$9.isString(path)) {
        cookie.push("path=" + path);
      }
      if (utils$9.isString(domain)) {
        cookie.push("domain=" + domain);
      }
      if (secure === true) {
        cookie.push("secure");
      }
      document.cookie = cookie.join("; ");
    },
    read: function read(name) {
      var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove: function remove(name) {
      this.write(name, "", Date.now() - 864e5);
    }
  };
}() : function nonStandardBrowserEnv() {
  return {
    write: function write() {
    },
    read: function read() {
      return null;
    },
    remove: function remove() {
    }
  };
}();
var isAbsoluteURL$1 = function isAbsoluteURL2(url) {
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};
var combineURLs$1 = function combineURLs2(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
};
var isAbsoluteURL = isAbsoluteURL$1;
var combineURLs = combineURLs$1;
var buildFullPath$1 = function buildFullPath2(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};
var utils$8 = utils$d;
var ignoreDuplicateOf = [
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
];
var parseHeaders$1 = function parseHeaders2(headers) {
  var parsed = {};
  var key;
  var val;
  var i;
  if (!headers) {
    return parsed;
  }
  utils$8.forEach(headers.split("\n"), function parser(line) {
    i = line.indexOf(":");
    key = utils$8.trim(line.substr(0, i)).toLowerCase();
    val = utils$8.trim(line.substr(i + 1));
    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === "set-cookie") {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
      }
    }
  });
  return parsed;
};
var utils$7 = utils$d;
var isURLSameOrigin$1 = utils$7.isStandardBrowserEnv() ? function standardBrowserEnv2() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement("a");
  var originURL;
  function resolveURL(url) {
    var href = url;
    if (msie) {
      urlParsingNode.setAttribute("href", href);
      href = urlParsingNode.href;
    }
    urlParsingNode.setAttribute("href", href);
    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
    };
  }
  originURL = resolveURL(window.location.href);
  return function isURLSameOrigin2(requestURL) {
    var parsed = utils$7.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() : function nonStandardBrowserEnv2() {
  return function isURLSameOrigin2() {
    return true;
  };
}();
function Cancel$3(message) {
  this.message = message;
}
Cancel$3.prototype.toString = function toString2() {
  return "Cancel" + (this.message ? ": " + this.message : "");
};
Cancel$3.prototype.__CANCEL__ = true;
var Cancel_1 = Cancel$3;
var utils$6 = utils$d;
var settle = settle$1;
var cookies = cookies$1;
var buildURL$1 = buildURL$2;
var buildFullPath = buildFullPath$1;
var parseHeaders = parseHeaders$1;
var isURLSameOrigin = isURLSameOrigin$1;
var createError = createError$2;
var defaults$4 = defaults_1;
var Cancel$2 = Cancel_1;
var xhr = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;
    var onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }
      if (config.signal) {
        config.signal.removeEventListener("abort", onCanceled);
      }
    }
    if (utils$6.isFormData(requestData)) {
      delete requestHeaders["Content-Type"];
    }
    var request2 = new XMLHttpRequest();
    if (config.auth) {
      var username = config.auth.username || "";
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
      requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
    }
    var fullPath = buildFullPath(config.baseURL, config.url);
    request2.open(config.method.toUpperCase(), buildURL$1(fullPath, config.params, config.paramsSerializer), true);
    request2.timeout = config.timeout;
    function onloadend() {
      if (!request2) {
        return;
      }
      var responseHeaders = "getAllResponseHeaders" in request2 ? parseHeaders(request2.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === "text" || responseType === "json" ? request2.responseText : request2.response;
      var response = {
        data: responseData,
        status: request2.status,
        statusText: request2.statusText,
        headers: responseHeaders,
        config,
        request: request2
      };
      settle(function _resolve(value2) {
        resolve(value2);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);
      request2 = null;
    }
    if ("onloadend" in request2) {
      request2.onloadend = onloadend;
    } else {
      request2.onreadystatechange = function handleLoad() {
        if (!request2 || request2.readyState !== 4) {
          return;
        }
        if (request2.status === 0 && !(request2.responseURL && request2.responseURL.indexOf("file:") === 0)) {
          return;
        }
        setTimeout(onloadend);
      };
    }
    request2.onabort = function handleAbort() {
      if (!request2) {
        return;
      }
      reject(createError("Request aborted", config, "ECONNABORTED", request2));
      request2 = null;
    };
    request2.onerror = function handleError() {
      reject(createError("Network Error", config, null, request2));
      request2 = null;
    };
    request2.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
      var transitional2 = config.transitional || defaults$4.transitional;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, transitional2.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", request2));
      request2 = null;
    };
    if (utils$6.isStandardBrowserEnv()) {
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : void 0;
      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }
    if ("setRequestHeader" in request2) {
      utils$6.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
          delete requestHeaders[key];
        } else {
          request2.setRequestHeader(key, val);
        }
      });
    }
    if (!utils$6.isUndefined(config.withCredentials)) {
      request2.withCredentials = !!config.withCredentials;
    }
    if (responseType && responseType !== "json") {
      request2.responseType = config.responseType;
    }
    if (typeof config.onDownloadProgress === "function") {
      request2.addEventListener("progress", config.onDownloadProgress);
    }
    if (typeof config.onUploadProgress === "function" && request2.upload) {
      request2.upload.addEventListener("progress", config.onUploadProgress);
    }
    if (config.cancelToken || config.signal) {
      onCanceled = function(cancel) {
        if (!request2) {
          return;
        }
        reject(!cancel || cancel && cancel.type ? new Cancel$2("canceled") : cancel);
        request2.abort();
        request2 = null;
      };
      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
      }
    }
    if (!requestData) {
      requestData = null;
    }
    request2.send(requestData);
  });
};
var utils$5 = utils$d;
var normalizeHeaderName = normalizeHeaderName$1;
var enhanceError = enhanceError$2;
var DEFAULT_CONTENT_TYPE = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function setContentTypeIfUnset(headers, value2) {
  if (!utils$5.isUndefined(headers) && utils$5.isUndefined(headers["Content-Type"])) {
    headers["Content-Type"] = value2;
  }
}
function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== "undefined") {
    adapter = xhr;
  } else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") {
    adapter = xhr;
  }
  return adapter;
}
function stringifySafely(rawValue, parser, encoder) {
  if (utils$5.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils$5.trim(rawValue);
    } catch (e) {
      if (e.name !== "SyntaxError") {
        throw e;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
var defaults$3 = {
  transitional: {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  },
  adapter: getDefaultAdapter(),
  transformRequest: [function transformRequest(data2, headers) {
    normalizeHeaderName(headers, "Accept");
    normalizeHeaderName(headers, "Content-Type");
    if (utils$5.isFormData(data2) || utils$5.isArrayBuffer(data2) || utils$5.isBuffer(data2) || utils$5.isStream(data2) || utils$5.isFile(data2) || utils$5.isBlob(data2)) {
      return data2;
    }
    if (utils$5.isArrayBufferView(data2)) {
      return data2.buffer;
    }
    if (utils$5.isURLSearchParams(data2)) {
      setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
      return data2.toString();
    }
    if (utils$5.isObject(data2) || headers && headers["Content-Type"] === "application/json") {
      setContentTypeIfUnset(headers, "application/json");
      return stringifySafely(data2);
    }
    return data2;
  }],
  transformResponse: [function transformResponse(data2) {
    var transitional2 = this.transitional || defaults$3.transitional;
    var silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
    var forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
    if (strictJSONParsing || forcedJSONParsing && utils$5.isString(data2) && data2.length) {
      try {
        return JSON.parse(data2);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === "SyntaxError") {
            throw enhanceError(e, this, "E_JSON_PARSE");
          }
          throw e;
        }
      }
    }
    return data2;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      "Accept": "application/json, text/plain, */*"
    }
  }
};
utils$5.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
  defaults$3.headers[method] = {};
});
utils$5.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
  defaults$3.headers[method] = utils$5.merge(DEFAULT_CONTENT_TYPE);
});
var defaults_1 = defaults$3;
var utils$4 = utils$d;
var defaults$2 = defaults_1;
var transformData$1 = function transformData2(data2, headers, fns) {
  var context = this || defaults$2;
  utils$4.forEach(fns, function transform(fn) {
    data2 = fn.call(context, data2, headers);
  });
  return data2;
};
var isCancel$1 = function isCancel2(value2) {
  return !!(value2 && value2.__CANCEL__);
};
var utils$3 = utils$d;
var transformData = transformData$1;
var isCancel = isCancel$1;
var defaults$1 = defaults_1;
var Cancel$1 = Cancel_1;
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
  if (config.signal && config.signal.aborted) {
    throw new Cancel$1("canceled");
  }
}
var dispatchRequest$1 = function dispatchRequest2(config) {
  throwIfCancellationRequested(config);
  config.headers = config.headers || {};
  config.data = transformData.call(config, config.data, config.headers, config.transformRequest);
  config.headers = utils$3.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
  utils$3.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function cleanHeaderConfig(method) {
    delete config.headers[method];
  });
  var adapter = config.adapter || defaults$1.adapter;
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);
    response.data = transformData.call(config, response.data, response.headers, config.transformResponse);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);
      if (reason && reason.response) {
        reason.response.data = transformData.call(config, reason.response.data, reason.response.headers, config.transformResponse);
      }
    }
    return Promise.reject(reason);
  });
};
var utils$2 = utils$d;
var mergeConfig$2 = function mergeConfig2(config1, config2) {
  config2 = config2 || {};
  var config = {};
  function getMergedValue(target, source2) {
    if (utils$2.isPlainObject(target) && utils$2.isPlainObject(source2)) {
      return utils$2.merge(target, source2);
    } else if (utils$2.isPlainObject(source2)) {
      return utils$2.merge({}, source2);
    } else if (utils$2.isArray(source2)) {
      return source2.slice();
    }
    return source2;
  }
  function mergeDeepProperties(prop) {
    if (!utils$2.isUndefined(config2[prop])) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils$2.isUndefined(config1[prop])) {
      return getMergedValue(void 0, config1[prop]);
    }
  }
  function valueFromConfig2(prop) {
    if (!utils$2.isUndefined(config2[prop])) {
      return getMergedValue(void 0, config2[prop]);
    }
  }
  function defaultToConfig2(prop) {
    if (!utils$2.isUndefined(config2[prop])) {
      return getMergedValue(void 0, config2[prop]);
    } else if (!utils$2.isUndefined(config1[prop])) {
      return getMergedValue(void 0, config1[prop]);
    }
  }
  function mergeDirectKeys(prop) {
    if (prop in config2) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      return getMergedValue(void 0, config1[prop]);
    }
  }
  var mergeMap = {
    "url": valueFromConfig2,
    "method": valueFromConfig2,
    "data": valueFromConfig2,
    "baseURL": defaultToConfig2,
    "transformRequest": defaultToConfig2,
    "transformResponse": defaultToConfig2,
    "paramsSerializer": defaultToConfig2,
    "timeout": defaultToConfig2,
    "timeoutMessage": defaultToConfig2,
    "withCredentials": defaultToConfig2,
    "adapter": defaultToConfig2,
    "responseType": defaultToConfig2,
    "xsrfCookieName": defaultToConfig2,
    "xsrfHeaderName": defaultToConfig2,
    "onUploadProgress": defaultToConfig2,
    "onDownloadProgress": defaultToConfig2,
    "decompress": defaultToConfig2,
    "maxContentLength": defaultToConfig2,
    "maxBodyLength": defaultToConfig2,
    "transport": defaultToConfig2,
    "httpAgent": defaultToConfig2,
    "httpsAgent": defaultToConfig2,
    "cancelToken": defaultToConfig2,
    "socketPath": defaultToConfig2,
    "responseEncoding": defaultToConfig2,
    "validateStatus": mergeDirectKeys
  };
  utils$2.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge2 = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge2(prop);
    utils$2.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
  });
  return config;
};
var data = {
  "version": "0.24.0"
};
var VERSION = data.version;
var validators$1 = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(type, i) {
  validators$1[type] = function validator2(thing) {
    return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
  };
});
var deprecatedWarnings = {};
validators$1.transitional = function transitional(validator2, version, message) {
  function formatMessage(opt, desc) {
    return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
  }
  return function(value2, opt, opts) {
    if (validator2 === false) {
      throw new Error(formatMessage(opt, " has been removed" + (version ? " in " + version : "")));
    }
    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      console.warn(formatMessage(opt, " has been deprecated since v" + version + " and will be removed in the near future"));
    }
    return validator2 ? validator2(value2, opt, opts) : true;
  };
};
function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== "object") {
    throw new TypeError("options must be an object");
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator2 = schema[opt];
    if (validator2) {
      var value2 = options[opt];
      var result = value2 === void 0 || validator2(value2, opt, options);
      if (result !== true) {
        throw new TypeError("option " + opt + " must be " + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error("Unknown option " + opt);
    }
  }
}
var validator$1 = {
  assertOptions,
  validators: validators$1
};
var utils$1 = utils$d;
var buildURL = buildURL$2;
var InterceptorManager = InterceptorManager_1;
var dispatchRequest = dispatchRequest$1;
var mergeConfig$1 = mergeConfig$2;
var validator = validator$1;
var validators = validator.validators;
function Axios$1(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}
Axios$1.prototype.request = function request(config) {
  if (typeof config === "string") {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }
  config = mergeConfig$1(this.defaults, config);
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = "get";
  }
  var transitional2 = config.transitional;
  if (transitional2 !== void 0) {
    validator.assertOptions(transitional2, {
      silentJSONParsing: validators.transitional(validators.boolean),
      forcedJSONParsing: validators.transitional(validators.boolean),
      clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
  }
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
      return;
    }
    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });
  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });
  var promise;
  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, void 0];
    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);
    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }
    return promise;
  }
  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }
  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }
  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }
  return promise;
};
Axios$1.prototype.getUri = function getUri(config) {
  config = mergeConfig$1(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, "");
};
utils$1.forEach(["delete", "get", "head", "options"], function forEachMethodNoData2(method) {
  Axios$1.prototype[method] = function(url, config) {
    return this.request(mergeConfig$1(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});
utils$1.forEach(["post", "put", "patch"], function forEachMethodWithData2(method) {
  Axios$1.prototype[method] = function(url, data2, config) {
    return this.request(mergeConfig$1(config || {}, {
      method,
      url,
      data: data2
    }));
  };
});
var Axios_1 = Axios$1;
var Cancel = Cancel_1;
function CancelToken(executor) {
  if (typeof executor !== "function") {
    throw new TypeError("executor must be a function.");
  }
  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });
  var token = this;
  this.promise.then(function(cancel) {
    if (!token._listeners)
      return;
    var i;
    var l = token._listeners.length;
    for (i = 0; i < l; i++) {
      token._listeners[i](cancel);
    }
    token._listeners = null;
  });
  this.promise.then = function(onfulfilled) {
    var _resolve;
    var promise = new Promise(function(resolve) {
      token.subscribe(resolve);
      _resolve = resolve;
    }).then(onfulfilled);
    promise.cancel = function reject() {
      token.unsubscribe(_resolve);
    };
    return promise;
  };
  executor(function cancel(message) {
    if (token.reason) {
      return;
    }
    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};
CancelToken.prototype.subscribe = function subscribe(listener) {
  if (this.reason) {
    listener(this.reason);
    return;
  }
  if (this._listeners) {
    this._listeners.push(listener);
  } else {
    this._listeners = [listener];
  }
};
CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
  if (!this._listeners) {
    return;
  }
  var index = this._listeners.indexOf(listener);
  if (index !== -1) {
    this._listeners.splice(index, 1);
  }
};
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token,
    cancel
  };
};
var CancelToken_1 = CancelToken;
var spread = function spread2(callback2) {
  return function wrap(arr) {
    return callback2.apply(null, arr);
  };
};
var isAxiosError = function isAxiosError2(payload) {
  return typeof payload === "object" && payload.isAxiosError === true;
};
var utils = utils$d;
var bind = bind$2;
var Axios = Axios_1;
var mergeConfig = mergeConfig$2;
var defaults = defaults_1;
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);
  utils.extend(instance, Axios.prototype, context);
  utils.extend(instance, context);
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };
  return instance;
}
var axios$1 = createInstance(defaults);
axios$1.Axios = Axios;
axios$1.Cancel = Cancel_1;
axios$1.CancelToken = CancelToken_1;
axios$1.isCancel = isCancel$1;
axios$1.VERSION = data.version;
axios$1.all = function all(promises) {
  return Promise.all(promises);
};
axios$1.spread = spread;
axios$1.isAxiosError = isAxiosError;
axios$2.exports = axios$1;
axios$2.exports.default = axios$1;
var require$$0 = axios$2.exports;
var axios = require$$0;
var emitter = {
  data() {
    return {
      vfEvents: {}
    };
  },
  methods: {
    emit$(eventName, data2) {
      if (this.vfEvents[eventName]) {
        this.vfEvents[eventName].forEach((fn) => {
          fn(data2);
        });
      }
    },
    on$(eventName, fn) {
      this.vfEvents[eventName] = this.vfEvents[eventName] || [];
      this.vfEvents[eventName].push(fn);
    },
    off$(eventName, fn) {
      if (this.vfEvents[eventName]) {
        if (fn === void 0 || fn === null) {
          this.vfEvents[eventName].length = 0;
          return;
        }
        for (let i = 0; i < this.vfEvents[eventName].length; i++) {
          if (this.vfEvents[eventName][i] === fn) {
            this.vfEvents[eventName].splice(i, 1);
            break;
          }
        }
      }
    },
    dispatch: function dispatch(componentName, eventName, params) {
      let parent = this.$parent || this.$root;
      let name = parent.$options.componentName;
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;
        if (parent) {
          name = parent.$options.componentName;
        }
      }
      if (parent) {
        if (!!parent.emit$) {
          parent.emit$.call(parent, eventName, params);
          if (componentName === "VFormRender") {
            parent.$emit(eventName, ...params);
          }
        }
      }
    },
    broadcast: function broadcast(componentName, eventName, params) {
      if (!!this.widgetRefList) {
        Object.keys(this.widgetRefList).forEach((refName) => {
          let cmpName = this.widgetRefList[refName].$options.componentName;
          if (cmpName === componentName) {
            let foundRef = this.widgetRefList[refName];
            foundRef.emit$.call(foundRef, eventName, params);
          }
        });
      }
      if (!!this.refList) {
        Object.keys(this.refList).forEach((refName) => {
          let cmpName = this.refList[refName].$options.componentName;
          if (cmpName === componentName) {
            let foundRef = this.refList[refName];
            foundRef.emit$.call(foundRef, eventName, params);
          }
        });
      }
    }
  }
};
var _export_sfc$1 = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$M = {
  name: "container-item-wrapper",
  props: {
    widget: Object
  },
  computed: {
    customClass() {
      return !!this.widget.options.customClass ? this.widget.options.customClass.join(" ") : "";
    }
  }
};
function _sfc_render$M(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["container-wrapper", [$options.customClass]])
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var ContainerItemWrapper = /* @__PURE__ */ _export_sfc$1(_sfc_main$M, [["render", _sfc_render$M]]);
var __glob_0_0$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": ContainerItemWrapper
}, Symbol.toStringTag, { value: "Module" }));
function isDef(value2) {
  return value2 !== void 0 && value2 !== null;
}
function get(object, path) {
  const keys = path.split(".");
  let result = object;
  keys.forEach((key) => {
    result = isDef(result) && isDef(result[key]) ? result[key] : null;
  });
  return result;
}
let locale = reactive({
  lang: localStorage.getItem("v_form_locale") || "zh-CN"
});
function createI18n(options) {
  return {
    messages: options.messages,
    $st(path, ...args) {
      const message = get(this.messages[locale.lang], path);
      return typeof message === "function" ? message(...args) : message !== null ? message : path;
    },
    $st2(path, path2) {
      let messages = this.messages[locale.lang];
      const message = get(messages, path);
      return message !== null ? message : get(messages, path2);
    },
    setLang(lang) {
      locale.lang = lang;
    }
  };
}
var en = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  var English = {
    name: "en",
    el: {
      colorpicker: {
        confirm: "OK",
        clear: "Clear",
        defaultLabel: "color picker",
        description: "current color is {color}. press enter to select a new color."
      },
      datepicker: {
        now: "Now",
        today: "Today",
        cancel: "Cancel",
        clear: "Clear",
        confirm: "OK",
        dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
        monthTablePrompt: "Use the arrow keys and enter to select the month",
        yearTablePrompt: "Use the arrow keys and enter to select the year",
        selectedDate: "Selected date",
        selectDate: "Select date",
        selectTime: "Select time",
        startDate: "Start Date",
        startTime: "Start Time",
        endDate: "End Date",
        endTime: "End Time",
        prevYear: "Previous Year",
        nextYear: "Next Year",
        prevMonth: "Previous Month",
        nextMonth: "Next Month",
        year: "",
        month1: "January",
        month2: "February",
        month3: "March",
        month4: "April",
        month5: "May",
        month6: "June",
        month7: "July",
        month8: "August",
        month9: "September",
        month10: "October",
        month11: "November",
        month12: "December",
        week: "week",
        weeks: {
          sun: "Sun",
          mon: "Mon",
          tue: "Tue",
          wed: "Wed",
          thu: "Thu",
          fri: "Fri",
          sat: "Sat"
        },
        weeksFull: {
          sun: "Sunday",
          mon: "Monday",
          tue: "Tuesday",
          wed: "Wednesday",
          thu: "Thursday",
          fri: "Friday",
          sat: "Saturday"
        },
        months: {
          jan: "Jan",
          feb: "Feb",
          mar: "Mar",
          apr: "Apr",
          may: "May",
          jun: "Jun",
          jul: "Jul",
          aug: "Aug",
          sep: "Sep",
          oct: "Oct",
          nov: "Nov",
          dec: "Dec"
        }
      },
      inputNumber: {
        decrease: "decrease number",
        increase: "increase number"
      },
      select: {
        loading: "Loading",
        noMatch: "No matching data",
        noData: "No data",
        placeholder: "Select"
      },
      dropdown: {
        toggleDropdown: "Toggle Dropdown"
      },
      cascader: {
        noMatch: "No matching data",
        loading: "Loading",
        placeholder: "Select",
        noData: "No data"
      },
      pagination: {
        goto: "Go to",
        pagesize: "/page",
        total: "Total {total}",
        pageClassifier: "",
        deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
      },
      dialog: {
        close: "Close this dialog"
      },
      drawer: {
        close: "Close this dialog"
      },
      messagebox: {
        title: "Message",
        confirm: "OK",
        cancel: "Cancel",
        error: "Illegal input",
        close: "Close this dialog"
      },
      upload: {
        deleteTip: "press delete to remove",
        delete: "Delete",
        preview: "Preview",
        continue: "Continue"
      },
      slider: {
        defaultLabel: "slider between {min} and {max}",
        defaultRangeStartLabel: "pick start value",
        defaultRangeEndLabel: "pick end value"
      },
      table: {
        emptyText: "No Data",
        confirmFilter: "Confirm",
        resetFilter: "Reset",
        clearFilter: "All",
        sumText: "Sum"
      },
      tree: {
        emptyText: "No Data"
      },
      transfer: {
        noMatch: "No matching data",
        noData: "No data",
        titles: ["List 1", "List 2"],
        filterPlaceholder: "Enter keyword",
        noCheckedFormat: "{total} items",
        hasCheckedFormat: "{checked}/{total} checked"
      },
      image: {
        error: "FAILED"
      },
      pageHeader: {
        title: "Back"
      },
      popconfirm: {
        confirmButtonText: "Yes",
        cancelButtonText: "No"
      }
    }
  };
  exports["default"] = English;
})(en);
var enLocaleElement = /* @__PURE__ */ getDefaultExportFromCjs(en);
var zhCn = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  var zhCn2 = {
    name: "zh-cn",
    el: {
      colorpicker: {
        confirm: "\u786E\u5B9A",
        clear: "\u6E05\u7A7A"
      },
      datepicker: {
        now: "\u6B64\u523B",
        today: "\u4ECA\u5929",
        cancel: "\u53D6\u6D88",
        clear: "\u6E05\u7A7A",
        confirm: "\u786E\u5B9A",
        selectDate: "\u9009\u62E9\u65E5\u671F",
        selectTime: "\u9009\u62E9\u65F6\u95F4",
        startDate: "\u5F00\u59CB\u65E5\u671F",
        startTime: "\u5F00\u59CB\u65F6\u95F4",
        endDate: "\u7ED3\u675F\u65E5\u671F",
        endTime: "\u7ED3\u675F\u65F6\u95F4",
        prevYear: "\u524D\u4E00\u5E74",
        nextYear: "\u540E\u4E00\u5E74",
        prevMonth: "\u4E0A\u4E2A\u6708",
        nextMonth: "\u4E0B\u4E2A\u6708",
        year: "\u5E74",
        month1: "1 \u6708",
        month2: "2 \u6708",
        month3: "3 \u6708",
        month4: "4 \u6708",
        month5: "5 \u6708",
        month6: "6 \u6708",
        month7: "7 \u6708",
        month8: "8 \u6708",
        month9: "9 \u6708",
        month10: "10 \u6708",
        month11: "11 \u6708",
        month12: "12 \u6708",
        weeks: {
          sun: "\u65E5",
          mon: "\u4E00",
          tue: "\u4E8C",
          wed: "\u4E09",
          thu: "\u56DB",
          fri: "\u4E94",
          sat: "\u516D"
        },
        months: {
          jan: "\u4E00\u6708",
          feb: "\u4E8C\u6708",
          mar: "\u4E09\u6708",
          apr: "\u56DB\u6708",
          may: "\u4E94\u6708",
          jun: "\u516D\u6708",
          jul: "\u4E03\u6708",
          aug: "\u516B\u6708",
          sep: "\u4E5D\u6708",
          oct: "\u5341\u6708",
          nov: "\u5341\u4E00\u6708",
          dec: "\u5341\u4E8C\u6708"
        }
      },
      select: {
        loading: "\u52A0\u8F7D\u4E2D",
        noMatch: "\u65E0\u5339\u914D\u6570\u636E",
        noData: "\u65E0\u6570\u636E",
        placeholder: "\u8BF7\u9009\u62E9"
      },
      cascader: {
        noMatch: "\u65E0\u5339\u914D\u6570\u636E",
        loading: "\u52A0\u8F7D\u4E2D",
        placeholder: "\u8BF7\u9009\u62E9",
        noData: "\u6682\u65E0\u6570\u636E"
      },
      pagination: {
        goto: "\u524D\u5F80",
        pagesize: "\u6761/\u9875",
        total: "\u5171 {total} \u6761",
        pageClassifier: "\u9875",
        deprecationWarning: "\u4F60\u4F7F\u7528\u4E86\u4E00\u4E9B\u5DF2\u88AB\u5E9F\u5F03\u7684\u7528\u6CD5\uFF0C\u8BF7\u53C2\u8003 el-pagination \u7684\u5B98\u65B9\u6587\u6863"
      },
      messagebox: {
        title: "\u63D0\u793A",
        confirm: "\u786E\u5B9A",
        cancel: "\u53D6\u6D88",
        error: "\u8F93\u5165\u7684\u6570\u636E\u4E0D\u5408\u6CD5!"
      },
      upload: {
        deleteTip: "\u6309 delete \u952E\u53EF\u5220\u9664",
        delete: "\u5220\u9664",
        preview: "\u67E5\u770B\u56FE\u7247",
        continue: "\u7EE7\u7EED\u4E0A\u4F20"
      },
      table: {
        emptyText: "\u6682\u65E0\u6570\u636E",
        confirmFilter: "\u7B5B\u9009",
        resetFilter: "\u91CD\u7F6E",
        clearFilter: "\u5168\u90E8",
        sumText: "\u5408\u8BA1"
      },
      tree: {
        emptyText: "\u6682\u65E0\u6570\u636E"
      },
      transfer: {
        noMatch: "\u65E0\u5339\u914D\u6570\u636E",
        noData: "\u65E0\u6570\u636E",
        titles: ["\u5217\u8868 1", "\u5217\u8868 2"],
        filterPlaceholder: "\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",
        noCheckedFormat: "\u5171 {total} \u9879",
        hasCheckedFormat: "\u5DF2\u9009 {checked}/{total} \u9879"
      },
      image: {
        error: "\u52A0\u8F7D\u5931\u8D25"
      },
      pageHeader: {
        title: "\u8FD4\u56DE"
      },
      popconfirm: {
        confirmButtonText: "\u786E\u5B9A",
        cancelButtonText: "\u53D6\u6D88"
      }
    }
  };
  exports["default"] = zhCn2;
})(zhCn);
var zhLocaleElement = /* @__PURE__ */ getDefaultExportFromCjs(zhCn);
var enLocale = {
  application: {
    "zh-CN": "\u7B80\u4F53\u4E2D\u6587",
    "en-US": "English",
    productTitle: "Online Form Designer",
    github: "GitHub",
    document: "Docs",
    qqGroup: "WeChat Group",
    deployment: "Deployment",
    subscription: "Subscription"
  },
  designer: {
    componentLib: "Components",
    formLib: "Templates",
    containerTitle: "Container",
    dragHandlerHint: "drag container or field to layout center",
    dragAction: "drag",
    basicFieldTitle: "Basic Field",
    advancedFieldTitle: "Advanced Field",
    customFieldTitle: "Customized Field",
    noWidgetHint: "Please select a widget from the left list, drag and drop to this container.",
    widgetLabel: {
      grid: "Grid",
      table: "Table",
      tab: "Tab",
      section: "Section",
      "sub-form": "SubForm",
      "grid-col": "GridCol",
      "table-cell": "TableCell",
      "tab-pane": "TabPane",
      "data-table": "DataTable",
      input: "Input",
      textarea: "Textarea",
      number: "InputNumber",
      radio: "Radio",
      checkbox: "Checkbox",
      select: "Select",
      time: "Time",
      "time-range": "Time range",
      date: "Date",
      "date-range": "Date range",
      switch: "Switch",
      rate: "Rate",
      color: "ColorPicker",
      slider: "Slider",
      "static-text": "Text",
      "html-text": "HTML",
      button: "Button",
      divider: "Divider",
      "picture-upload": "Picture",
      "file-upload": "File",
      "rich-editor": "Rich Editor",
      cascader: "Cascader",
      slot: "Slot",
      custom: "Custom Component"
    },
    hint: {
      selectParentWidget: "Select parent of this widget",
      moveUpWidget: "Move up this widget",
      moveDownWidget: "Move down this widget",
      cloneWidget: "Clone this widget",
      insertRow: "Insert new row",
      insertColumn: "Insert new column",
      remove: "Remove this widget",
      cellSetting: "Cell setting",
      dragHandler: "Drag handler",
      copyField: "Copy field widget",
      onlyFieldWidgetAcceptable: "Only field widget can be dragged into sub-form",
      moveUpFirstChildHint: "First child can not be move up",
      moveDownLastChildHint: "Last child can not be move down",
      closePreview: "Close",
      copyJson: "Copy",
      saveFormJson: "Save As File",
      copyVueCode: "Copy Vue Code",
      copyHtmlCode: "Copy HTML Code",
      copyJsonSuccess: "Copy succeed",
      importJsonSuccess: "Import succeed",
      invalidJsonFormat: "Invalid JSON format",
      jsonVersionMismatch: "Version of JSON mismatch",
      copyJsonFail: "Copy failed",
      copyVueCodeSuccess: "Copy succeed",
      copyVueCodeFail: "Copy failed",
      copyHtmlCodeSuccess: "Copy succeed",
      copyHtmlCodeFail: "Copy failed",
      saveVueCode: "Save Vue File",
      saveHtmlCode: "Save Html File",
      getFormData: "Get Data",
      resetForm: "Reset",
      disableForm: "Disable",
      enableForm: "Enable",
      exportFormData: "Form Data",
      copyFormData: "Copy",
      saveFormData: "Save As File",
      copyVue2SFC: "Copy Vue2",
      copyVue3SFC: "Copy Vue3",
      copySFCFail: "Copy failed",
      copySFCSuccess: "Copy succeed",
      saveVue2SFC: "Save As Vue2",
      saveVue3SFC: "Save As Vue3",
      fileNameForSave: "File name:",
      saveFileTitle: "Save as File",
      fileNameInputPlaceholder: "Enter the file name",
      sampleLoadedSuccess: "Example loaded successfully",
      sampleLoadedFail: "Sample load failed",
      loadFormTemplate: "Load This",
      loadFormTemplateHint: "Are you sure to load this template?",
      loadFormTemplateSuccess: "Load form template success!",
      loadFormTemplateFailed: "Load form template failed.",
      currentNodeCannotBeSelected: "The current node cannot be selected.",
      widgetSetting: "Widget Config",
      formSetting: "Form Config",
      prompt: "Prompt",
      confirm: "OK",
      cancel: "Cancel",
      import: "Import",
      importJsonHint: "The code to be imported should have the following JSON format.",
      invalidOptionsData: "Invalid data of options:",
      lastPaneCannotBeDeleted: "The last pane cannot be deleted.",
      duplicateName: "Duplicate name: ",
      nameRequired: "Name required.",
      numberValidator: "Number",
      letterValidator: "Letter",
      letterAndNumberValidator: "LetterAndNumber",
      mobilePhoneValidator: "MobilePhone",
      emailValidator: "Email",
      urlValidator: "URL",
      noChineseValidator: "Non-Chinese",
      chineseValidator: "Chinese",
      rowspanNotConsistentForMergeEntireRow: "Cells in this row don't have the same rowspan, operation failed.",
      colspanNotConsistentForMergeEntireColumn: "Cells in this column don't have the same colspan, operation failed.",
      rowspanNotConsistentForDeleteEntireRow: "Cells in this row don't have the same rowspan, operation failed.",
      colspanNotConsistentForDeleteEntireColumn: "Cells in this column don't have the same colspan, operation failed.",
      lastColCannotBeDeleted: "The last col cannot be deleted.",
      lastRowCannotBeDeleted: "The last row cannot be deleted."
    },
    toolbar: {
      undoHint: "Undo",
      redoHint: "Redo",
      pcLayout: "PC",
      padLayout: "Pad",
      mobileLayout: "H5",
      nodeTreeHint: "Tree View Of Component Hierarchy",
      nodeTreeTitle: "Tree View Of Component Hierarchy",
      clear: "Clear",
      preview: "Preview",
      importJson: "Import",
      exportJson: "Export",
      exportCode: "Codes",
      generateCode: "Generate Code",
      generateSFC: "Generate SFC"
    },
    setting: {
      basicSetting: "Basic Setting",
      attributeSetting: "Attribute Setting",
      commonSetting: "Common Setting",
      advancedSetting: "Advanced Setting",
      eventSetting: "Event Setting",
      uniqueName: "Unique Name",
      editNameHelp: "Press enter to confirm the modification",
      label: "Label",
      displayType: "Type",
      defaultValue: "Default Value",
      placeholder: "Placeholder",
      startPlaceholder: "Start Placeholder",
      endPlaceholder: "End Placeholder",
      widgetColumnWidth: "Width",
      widgetSize: "Size",
      autoFullWidth: "Auto Full Width",
      showStops: "Show Stops",
      displayStyle: "Display Style",
      inlineLayout: "inline",
      blockLayout: "block",
      buttonStyle: "Show As Button",
      border: "Show Border",
      labelWidth: "Width Of Label",
      rows: "Rows",
      labelHidden: "Hide Label",
      required: "Required",
      requiredHint: "Failure Hint",
      validation: "Validation",
      validationHelp: "Regular expressions supported",
      validationHint: "Validation Hint",
      readonly: "Readonly",
      disabled: "Disabled",
      hidden: "Hidden",
      textContent: "Text",
      htmlContent: "HTML",
      clearable: "Clearable",
      editable: "Editable",
      format: "Format",
      valueFormat: "Value Format",
      showPassword: "Show Reveal",
      filterable: "Filterable",
      allowCreate: "Allow Create",
      remote: "Remote Query",
      automaticDropdown: "Automatic Dropdown",
      multiple: "Multiple",
      multipleLimit: "Multiple Limit",
      checkStrictly: "Any Level Selectable",
      showAllLevels: "Show All Levels",
      contentPosition: "Content Position",
      plain: "Plain",
      round: "Round",
      circle: "Circle",
      icon: "Icon",
      optionsSetting: "Options Setting",
      addOption: "Add Option",
      importOptions: "Import Options",
      resetDefault: "Reset Default",
      uploadSetting: "Upload Setting",
      uploadURL: "Upload URL",
      uploadTip: "Tip Content",
      withCredentials: "Send Cookie",
      multipleSelect: "File Multi-select",
      showFileList: "Show File List",
      limit: "Max Upload Number",
      fileMaxSize: "Max Size(MB)",
      fileTypes: "Upload File Types",
      fileTypesHelp: "Allows to add more file types",
      headers: "Request Headers",
      cellWidth: "Width",
      cellHeight: "Height",
      gridColHeight: "Height Of Col(px)",
      gutter: "Gutter(px)",
      columnSetting: "Cols Setting",
      colsOfGrid: "Cols Of Grid:",
      colSpanTitle: "Spans Of Col",
      colOffsetTitle: "Offset Of Col",
      colPushTitle: "Push Of Col",
      colPullTitle: "Pull Of Col",
      addColumn: "Add Column",
      responsive: "Responsive",
      tabPaneSetting: "Tab Panes",
      addTabPane: "Add Tab Pane",
      paneActive: "Active",
      customLabelIcon: "Custom Label",
      labelIconClass: "Label Icon Class",
      labelIconPosition: "Label Icon Position",
      labelTooltip: "Label Tooltip",
      minValue: "Min Value",
      maxValue: "Max Value",
      precision: "Precision",
      step: "Step",
      controlsPosition: "Controls Position",
      minLength: "Min Length",
      maxLength: "Max Length",
      showWordLimit: "Show Word Limit",
      prefixIcon: "Prefix Icon",
      suffixIcon: "Suffix Icon",
      inputButton: "Input Button Setting",
      appendButton: "Append Button",
      appendButtonDisabled: "Button Disabled",
      appendButtonIcon: "Append Button Icon",
      buttonIcon: "Button Icon",
      switchWidth: "Width of Switch(px)",
      activeText: "Active Text",
      inactiveText: "Inactive Text",
      activeColor: "Active Color",
      inactiveColor: "Inactive Color",
      maxStars: "Stars Max Number",
      lowThreshold: "Low Threshold",
      highThreshold: "High Threshold",
      allowHalf: "Allow Half",
      showText: "Show Text",
      showScore: "Show Score",
      range: "Range",
      vertical: "Vertical",
      showBlankRow: "Show Blank Row",
      showRowNumber: "Show Row Number",
      contentHeight: "Content Area Height",
      insertColumnToLeft: "insert column to left",
      insertColumnToRight: "insert column to right",
      insertRowAbove: "insert row above",
      insertRowBelow: "insert row below",
      mergeLeftColumn: "merge left cell",
      mergeRightColumn: "merge right cell",
      mergeEntireRow: "merge entire row",
      mergeRowAbove: "merge cell above",
      mergeRowBelow: "merge cell below",
      mergeEntireColumn: "merge entire column",
      undoMergeCol: "undo merge column",
      undoMergeRow: "undo merge row",
      deleteEntireCol: "delete entire column",
      deleteEntireRow: "delete entire row",
      widgetName: "Unique Name",
      formSize: "Size",
      labelPosition: "Position Of Label",
      topPosition: "Top",
      leftPosition: "Left",
      labelAlign: "Label Align",
      leftAlign: "Left",
      centerAlign: "Center",
      rightAlign: "Right",
      formCss: "Form CSS",
      addCss: "Edit",
      customClass: "Custom Class",
      globalFunctions: "Global Functions",
      addEventHandler: "Edit",
      editWidgetEventHandler: "Edit Widget Event Handler",
      editFormEventHandler: "Edit Form Event Handler",
      formSFCSetting: "SFC Setting",
      formModelName: "Model Name",
      formRefName: "Ref Name",
      formRulesName: "Rules Name",
      syntaxCheckWarning: "Syntax error in the javascript codes, please check again!"
    }
  }
};
var zhLocale = {
  application: {
    "zh-CN": "\u7B80\u4F53\u4E2D\u6587",
    "en-US": "English",
    productTitle: "\u8868\u5355\u8BBE\u8BA1\u5668",
    github: "GitHub",
    document: "\u6587\u6863",
    qqGroup: "\u6280\u672FWX\u7FA4",
    deployment: "\u79C1\u6709\u90E8\u7F72",
    subscription: "\u8BA2\u9605Pro"
  },
  designer: {
    componentLib: "\u7EC4\u4EF6\u5E93",
    formLib: "\u8868\u5355\u6A21\u677F",
    containerTitle: "\u5BB9\u5668",
    dragHandlerHint: "\u9F20\u6807\u62D6\u62FD\u5BB9\u5668\u7EC4\u4EF6\u6216\u5B57\u6BB5\u7EC4\u4EF6\u5E76\u653E\u7F6E\u4E8E\u8868\u5355\u4E2D",
    dragAction: "\u62D6\u52A8",
    basicFieldTitle: "\u57FA\u7840\u5B57\u6BB5",
    advancedFieldTitle: "\u9AD8\u7EA7\u5B57\u6BB5",
    customFieldTitle: "\u81EA\u5B9A\u4E49\u6269\u5C55\u5B57\u6BB5",
    noWidgetHint: "\u8BF7\u4ECE\u5DE6\u4FA7\u5217\u8868\u4E2D\u9009\u62E9\u4E00\u4E2A\u7EC4\u4EF6, \u7136\u540E\u7528\u9F20\u6807\u62D6\u52A8\u7EC4\u4EF6\u653E\u7F6E\u4E8E\u6B64\u5904.",
    widgetLabel: {
      grid: "\u6805\u683C",
      table: "\u8868\u683C",
      tab: "\u6807\u7B7E\u9875",
      section: "\u533A\u5757",
      "sub-form": "\u5B50\u8868\u5355",
      "grid-col": "\u6805\u683C\u5217",
      "table-cell": "\u5355\u5143\u683C",
      "tab-pane": "\u9009\u9879\u5361\u9875",
      "data-table": "\u6570\u636E\u8868\u683C",
      input: "\u5355\u884C\u8F93\u5165",
      textarea: "\u591A\u884C\u8F93\u5165",
      number: "\u8BA1\u6570\u5668",
      radio: "\u5355\u9009\u9879",
      checkbox: "\u591A\u9009\u9879",
      select: "\u4E0B\u62C9\u9009\u9879",
      time: "\u65F6\u95F4",
      "time-range": "\u65F6\u95F4\u8303\u56F4",
      date: "\u65E5\u671F",
      "date-range": "\u65E5\u671F\u8303\u56F4",
      switch: "\u5F00\u5173",
      rate: "\u8BC4\u5206",
      color: "\u989C\u8272\u9009\u62E9\u5668",
      slider: "\u6ED1\u5757",
      "static-text": "\u9759\u6001\u6587\u5B57",
      "html-text": "HTML",
      button: "\u6309\u94AE",
      divider: "\u5206\u9694\u7EBF",
      "picture-upload": "\u56FE\u7247",
      "file-upload": "\u6587\u4EF6",
      "rich-editor": "\u5BCC\u6587\u672C",
      cascader: "\u7EA7\u8054\u9009\u62E9",
      slot: "\u63D2\u69FD",
      custom: "Custom Component"
    },
    hint: {
      selectParentWidget: "\u9009\u4E2D\u7236\u7EC4\u4EF6",
      moveUpWidget: "\u4E0A\u79FB\u7EC4\u4EF6",
      moveDownWidget: "\u4E0B\u79FB\u7EC4\u4EF6",
      cloneWidget: "\u590D\u5236\u7EC4\u4EF6",
      insertRow: "\u63D2\u5165\u65B0\u884C",
      insertColumn: "\u63D2\u5165\u65B0\u5217",
      remove: "\u79FB\u9664\u7EC4\u4EF6",
      cellSetting: "\u5355\u5143\u683C\u64CD\u4F5C",
      dragHandler: "\u62D6\u62FD\u624B\u67C4",
      copyField: "\u590D\u5236\u5B57\u6BB5\u7EC4\u4EF6",
      onlyFieldWidgetAcceptable: "\u5B50\u8868\u5355\u53EA\u80FD\u63A5\u6536\u5B57\u6BB5\u7EC4\u4EF6",
      moveUpFirstChildHint: "\u5DF2\u7ECF\u79FB\u52A8\u5230\u6700\u4E0A\u9762",
      moveDownLastChildHint: "\u5DF2\u7ECF\u79FB\u52A8\u5230\u6700\u4E0B\u9762",
      closePreview: "\u5173\u95ED",
      copyJson: "\u590D\u5236JSON",
      saveFormJson: "\u4FDD\u5B58\u4E3A\u6587\u4EF6",
      copyVueCode: "\u590D\u5236Vue\u4EE3\u7801",
      copyHtmlCode: "\u590D\u5236HTML\u4EE3\u7801",
      copyJsonSuccess: "\u590D\u5236JSON\u6210\u529F",
      importJsonSuccess: "\u5BFC\u5165JSON\u6210\u529F",
      invalidJsonFormat: "\u65E0\u6548\u7684\u8868\u5355JSON\u683C\u5F0F",
      jsonVersionMismatch: "\u8868\u5355JSON\u7248\u672C\u53F7\u4E0D\u5339\u914D",
      copyJsonFail: "\u590D\u5236JSON\u5931\u8D25",
      copyVueCodeSuccess: "\u590D\u5236Vue\u4EE3\u7801\u6210\u529F",
      copyVueCodeFail: "\u590D\u5236Vue\u4EE3\u7801\u5931\u8D25",
      copyHtmlCodeSuccess: "\u590D\u5236HTML\u4EE3\u7801\u6210\u529F",
      copyHtmlCodeFail: "\u590D\u5236HTML\u4EE3\u7801\u5931\u8D25",
      saveVueCode: "\u4FDD\u5B58Vue\u6587\u4EF6",
      saveHtmlCode: "\u4FDD\u5B58Html\u6587\u4EF6",
      getFormData: "\u83B7\u53D6\u6570\u636E",
      resetForm: "\u91CD\u7F6E\u8868\u5355",
      disableForm: "\u7981\u7528\u7F16\u8F91",
      enableForm: "\u6062\u590D\u7F16\u8F91",
      exportFormData: "\u8868\u5355\u6570\u636E",
      copyFormData: "\u590D\u5236JSON",
      saveFormData: "\u4FDD\u5B58\u4E3A\u6587\u4EF6",
      copyVue2SFC: "\u590D\u5236Vue2\u4EE3\u7801",
      copyVue3SFC: "\u590D\u5236Vue3\u4EE3\u7801",
      copySFCFail: "\u590D\u5236SFC\u4EE3\u7801\u5931\u8D25",
      copySFCSuccess: "\u590D\u5236SFC\u4EE3\u7801\u6210\u529F",
      saveVue2SFC: "\u4FDD\u5B58\u4E3AVue2\u7EC4\u4EF6",
      saveVue3SFC: "\u4FDD\u5B58\u4E3AVue3\u7EC4\u4EF6",
      fileNameForSave: "\u6587\u4EF6\u540D\uFF1A",
      saveFileTitle: "\u4FDD\u5B58\u4E3A\u6587\u4EF6",
      fileNameInputPlaceholder: "\u8BF7\u8F93\u5165\u6587\u4EF6\u540D",
      sampleLoadedSuccess: "\u8868\u5355\u793A\u4F8B\u52A0\u8F7D\u6210\u529F",
      sampleLoadedFail: "\u8868\u5355\u793A\u4F8B\u52A0\u8F7D\u5931\u8D25",
      loadFormTemplate: "\u52A0\u8F7D\u6B64\u6A21\u677F",
      loadFormTemplateHint: "\u662F\u5426\u52A0\u8F7D\u8FD9\u4E2A\u6A21\u677F\uFF1F\u52A0\u8F7D\u540E\u4F1A\u8986\u76D6\u8BBE\u8BA1\u5668\u5F53\u524D\u8868\u5355\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\u201C\u64A4\u9500\u201D\u529F\u80FD\u6062\u590D\u3002",
      loadFormTemplateSuccess: "\u8868\u5355\u6A21\u677F\u52A0\u8F7D\u6210\u529F",
      loadFormTemplateFailed: "\u8868\u5355\u6A21\u677F\u52A0\u8F7D\u5931\u8D25",
      currentNodeCannotBeSelected: "\u5F53\u524D\u7EC4\u4EF6\u8282\u70B9\u4E0D\u53EF\u9009\u62E9",
      widgetSetting: "\u7EC4\u4EF6\u8BBE\u7F6E",
      formSetting: "\u8868\u5355\u8BBE\u7F6E",
      prompt: "\u63D0\u793A",
      confirm: "\u786E\u5B9A",
      cancel: "\u53D6\u6D88",
      import: "\u5BFC\u5165",
      importJsonHint: "\u5BFC\u5165\u7684JSON\u5185\u5BB9\u987B\u7B26\u5408\u4E0B\u8FF0\u683C\u5F0F\uFF0C\u4EE5\u4FDD\u8BC1\u987A\u5229\u5BFC\u5165.",
      invalidOptionsData: "\u65E0\u6548\u7684\u9009\u9879\u6570\u636E:",
      lastPaneCannotBeDeleted: "\u4EC5\u5269\u4E00\u4E2A\u9009\u9879\u5361\u9875\u4E0D\u53EF\u5220\u9664.",
      duplicateName: "\u7EC4\u4EF6\u540D\u79F0\u5DF2\u5B58\u5728: ",
      nameRequired: "\u7EC4\u4EF6\u540D\u79F0\u4E0D\u53EF\u4E3A\u7A7A",
      numberValidator: "\u6570\u5B57",
      letterValidator: "\u5B57\u6BCD",
      letterAndNumberValidator: "\u6570\u5B57\u5B57\u6BCD",
      mobilePhoneValidator: "\u624B\u673A\u53F7\u7801",
      emailValidator: "\u90AE\u7BB1",
      urlValidator: "\u7F51\u5740",
      noChineseValidator: "\u975E\u4E2D\u6587\u5B57\u7B26",
      chineseValidator: "\u4EC5\u4E2D\u6587\u5B57\u7B26",
      rowspanNotConsistentForMergeEntireRow: "\u5B58\u5728\u884C\u9AD8\u4E0D\u4E00\u81F4\u7684\u5355\u5143\u683C, \u65E0\u6CD5\u5408\u5E76\u6574\u884C.",
      colspanNotConsistentForMergeEntireColumn: "\u5B58\u5728\u5217\u5BBD\u4E0D\u4E00\u81F4\u7684\u5355\u5143\u683C, \u65E0\u6CD5\u5408\u5E76\u6574\u5217.",
      rowspanNotConsistentForDeleteEntireRow: "\u5B58\u5728\u884C\u9AD8\u4E0D\u4E00\u81F4\u7684\u5355\u5143\u683C, \u4E0D\u53EF\u5220\u9664\u6574\u884C.",
      colspanNotConsistentForDeleteEntireColumn: "\u5B58\u5728\u5217\u5BBD\u4E0D\u4E00\u81F4\u7684\u5355\u5143\u683C, \u4E0D\u53EF\u5220\u9664\u6574\u5217.",
      lastColCannotBeDeleted: "\u6700\u540E\u4E00\u5217\u4E0D\u53EF\u5220\u9664.",
      lastRowCannotBeDeleted: "\u6700\u540E\u4E00\u884C\u4E0D\u53EF\u5220\u9664."
    },
    toolbar: {
      undoHint: "\u64A4\u9500",
      redoHint: "\u91CD\u505A",
      pcLayout: "PC",
      padLayout: "Pad",
      mobileLayout: "H5",
      nodeTreeHint: "\u7EC4\u4EF6\u5C42\u6B21\u7ED3\u6784\u6811",
      nodeTreeTitle: "\u7EC4\u4EF6\u5C42\u6B21\u7ED3\u6784\u6811",
      clear: "\u6E05\u7A7A",
      preview: "\u9884\u89C8",
      importJson: "\u5BFC\u5165JSON",
      exportJson: "\u5BFC\u51FAJSON",
      exportCode: "\u5BFC\u51FA\u4EE3\u7801",
      generateCode: "\u751F\u6210\u4EE3\u7801",
      generateSFC: "\u751F\u6210SFC"
    },
    setting: {
      basicSetting: "\u57FA\u672C\u5C5E\u6027",
      attributeSetting: "\u5C5E\u6027\u8BBE\u7F6E",
      commonSetting: "\u5E38\u89C1\u5C5E\u6027",
      advancedSetting: "\u9AD8\u7EA7\u5C5E\u6027",
      eventSetting: "\u4E8B\u4EF6\u5C5E\u6027",
      uniqueName: "\u552F\u4E00\u540D\u79F0",
      editNameHelp: "\u4FEE\u6539\u540D\u79F0\u540E\u9700\u6309\u56DE\u8F66\u786E\u8BA4",
      label: "\u6807\u7B7E",
      displayType: "\u663E\u793A\u7C7B\u578B",
      defaultValue: "\u9ED8\u8BA4\u503C",
      placeholder: "\u5360\u4F4D\u5185\u5BB9",
      startPlaceholder: "\u8D77\u59CB\u5360\u4F4D\u5185\u5BB9",
      endPlaceholder: "\u622A\u6B62\u5360\u4F4D\u5185\u5BB9",
      widgetColumnWidth: "\u7EC4\u4EF6\u5217\u5BBD",
      widgetSize: "\u7EC4\u4EF6\u5927\u5C0F",
      autoFullWidth: "\u81EA\u52A8\u62C9\u4F38\u5BBD\u5EA6",
      showStops: "\u663E\u793A\u95F4\u65AD\u70B9",
      displayStyle: "\u663E\u793A\u6837\u5F0F",
      inlineLayout: "\u884C\u5185",
      blockLayout: "\u5757",
      buttonStyle: "\u663E\u793A\u4E3A\u6309\u94AE",
      border: "\u5E26\u6709\u8FB9\u6846",
      labelWidth: "\u6807\u7B7E\u5BBD\u5EA6",
      rows: "\u884C\u6570",
      labelHidden: "\u9690\u85CF\u5B57\u6BB5\u6807\u7B7E",
      required: "\u5FC5\u586B\u5B57\u6BB5",
      requiredHint: "\u5FC5\u586B\u6821\u9A8C\u63D0\u793A",
      validation: "\u5B57\u6BB5\u6821\u9A8C",
      validationHelp: "\u652F\u6301\u8F93\u5165\u6B63\u5219\u8868\u8FBE\u5F0F",
      validationHint: "\u6821\u9A8C\u5931\u8D25\u63D0\u793A",
      readonly: "\u53EA\u8BFB",
      disabled: "\u7981\u7528",
      hidden: "\u9690\u85CF",
      textContent: "\u9759\u6001\u6587\u5B57",
      htmlContent: "HTML",
      clearable: "\u53EF\u6E05\u9664",
      editable: "\u53EF\u8F93\u5165",
      format: "\u663E\u793A\u683C\u5F0F",
      valueFormat: "\u7ED1\u5B9A\u503C\u683C\u5F0F",
      showPassword: "\u53EF\u663E\u793A\u5BC6\u7801",
      filterable: "\u53EF\u641C\u7D22\u9009\u9879",
      allowCreate: "\u5141\u8BB8\u521B\u5EFA\u9009\u9879",
      remote: "\u53EF\u8FDC\u7A0B\u641C\u7D22",
      automaticDropdown: "\u81EA\u52A8\u5F39\u51FA\u9009\u9879",
      multiple: "\u9009\u9879\u53EF\u591A\u9009",
      multipleLimit: "\u591A\u9009\u6570\u91CF\u9650\u5236",
      checkStrictly: "\u4EFB\u610F\u7EA7\u8282\u70B9\u53EF\u9009",
      showAllLevels: "\u663E\u793A\u5B8C\u6574\u8DEF\u5F84",
      contentPosition: "\u6587\u5B57\u4F4D\u7F6E",
      plain: "\u6734\u7D20\u6309\u94AE",
      round: "\u5706\u89D2\u6309\u94AE",
      circle: "\u5706\u5F62\u6309\u94AE",
      icon: "\u56FE\u6807",
      optionsSetting: "\u9009\u9879\u8BBE\u7F6E",
      addOption: "\u589E\u52A0\u9009\u9879",
      importOptions: "\u5BFC\u5165\u9009\u9879",
      resetDefault: "\u91CD\u8BBE\u9009\u4E2D\u9879",
      uploadSetting: "\u4E0A\u4F20\u53C2\u6570\u8BBE\u7F6E",
      uploadURL: "\u4E0A\u4F20\u5730\u5740",
      uploadTip: "\u4E0A\u4F20\u63D0\u793A\u5185\u5BB9",
      withCredentials: "\u53D1\u9001cookie\u51ED\u8BC1",
      multipleSelect: "\u6587\u4EF6\u53EF\u591A\u9009",
      showFileList: "\u663E\u793A\u6587\u4EF6\u5217\u8868",
      limit: "\u6700\u5927\u4E0A\u4F20\u6570\u91CF",
      fileMaxSize: "\u6587\u4EF6\u5927\u5C0F\u9650\u5236(MB)",
      fileTypes: "\u4E0A\u4F20\u6587\u4EF6\u7C7B\u578B",
      fileTypesHelp: "\u652F\u6301\u6DFB\u52A0\u5176\u4ED6\u6587\u4EF6\u7C7B\u578B",
      headers: "\u4E0A\u4F20\u8BF7\u6C42\u5934",
      cellWidth: "\u5BBD\u5EA6",
      cellHeight: "\u9AD8\u5EA6",
      gridColHeight: "\u6805\u683C\u5217\u7EDF\u4E00\u9AD8\u5EA6(px)",
      gutter: "\u6805\u683C\u95F4\u9694(px)",
      columnSetting: "\u6805\u683C\u5C5E\u6027\u8BBE\u7F6E",
      colsOfGrid: "\u5F53\u524D\u6805\u683C\u5217:",
      colSpanTitle: "\u6805\u683C\u5BBD\u5EA6",
      colOffsetTitle: "\u5DE6\u4FA7\u95F4\u9694\u683C\u6570",
      colPushTitle: "\u53F3\u79FB\u6805\u683C\u6570",
      colPullTitle: "\u5DE6\u79FB\u6805\u683C\u6570",
      addColumn: "\u589E\u52A0\u6805\u683C",
      responsive: "\u54CD\u5E94\u5F0F\u5E03\u5C40",
      tabPaneSetting: "\u9009\u9879\u5361\u8BBE\u7F6E",
      addTabPane: "\u589E\u52A0\u9009\u9879\u5361\u9875",
      paneActive: "\u6FC0\u6D3B",
      customLabelIcon: "\u5B9A\u5236\u5B57\u6BB5\u6807\u7B7E",
      labelIconClass: "\u6807\u7B7EIcon\u6837\u5F0F",
      labelIconPosition: "\u6807\u7B7EIcon\u4F4D\u7F6E",
      labelTooltip: "\u6807\u7B7E\u6587\u5B57\u63D0\u793A",
      minValue: "\u6700\u5C0F\u503C",
      maxValue: "\u6700\u5927\u503C",
      precision: "\u7CBE\u5EA6",
      step: "\u589E\u51CF\u6B65\u957F",
      controlsPosition: "\u63A7\u5236\u6309\u94AE\u4F4D\u7F6E",
      minLength: "\u6700\u5C0F\u957F\u5EA6",
      maxLength: "\u6700\u5927\u957F\u5EA6",
      showWordLimit: "\u663E\u793A\u5B57\u6570\u7EDF\u8BA1",
      prefixIcon: "\u5934\u90E8Icon",
      suffixIcon: "\u5C3E\u90E8Icon",
      inputButton: "\u8F93\u5165\u6846\u6309\u94AE\u8BBE\u7F6E",
      appendButton: "\u6DFB\u52A0\u540E\u7F6E\u6309\u94AE",
      appendButtonDisabled: "\u540E\u7F6E\u6309\u94AE\u7981\u7528",
      appendButtonIcon: "\u540E\u7F6E\u6309\u94AEIcon",
      buttonIcon: "\u6309\u94AEIcon",
      switchWidth: "\u5F00\u5173\u5BBD\u5EA6\uFF08\u50CF\u7D20\uFF09",
      activeText: "\u5F00\u542F\u65F6\u6587\u5B57\u63CF\u8FF0",
      inactiveText: "\u5173\u95ED\u65F6\u6587\u5B57\u63CF\u8FF0",
      activeColor: "\u5F00\u542F\u65F6\u80CC\u666F\u8272",
      inactiveColor: "\u5173\u95ED\u65F6\u80CC\u666F\u8272",
      maxStars: "\u6700\u5927\u8BC4\u5206\u503C",
      lowThreshold: "\u4F4E\u5206\u754C\u9650\u503C",
      highThreshold: "\u9AD8\u5206\u754C\u9650\u503C",
      allowHalf: "\u5141\u8BB8\u534A\u9009",
      showText: "\u663E\u793A\u8F85\u52A9\u6587\u5B57",
      showScore: "\u663E\u793A\u5F53\u524D\u5206\u6570",
      range: "\u662F\u5426\u4E3A\u8303\u56F4\u9009\u62E9",
      vertical: "\u662F\u5426\u7AD6\u5411\u663E\u793A",
      showBlankRow: "\u9ED8\u8BA4\u663E\u793A\u65B0\u884C",
      showRowNumber: "\u663E\u793A\u884C\u53F7",
      contentHeight: "\u5185\u5BB9\u533A\u9AD8\u5EA6",
      insertColumnToLeft: "\u63D2\u5165\u5DE6\u4FA7\u5217",
      insertColumnToRight: "\u63D2\u5165\u53F3\u4FA7\u5217",
      insertRowAbove: "\u63D2\u5165\u4E0A\u65B9\u884C",
      insertRowBelow: "\u63D2\u5165\u4E0B\u65B9\u884C",
      mergeLeftColumn: "\u5408\u5E76\u5DE6\u4FA7\u5355\u5143\u683C",
      mergeRightColumn: "\u5408\u5E76\u53F3\u4FA7\u5355\u5143\u683C",
      mergeEntireRow: "\u5408\u5E76\u6574\u884C",
      mergeRowAbove: "\u5408\u5E76\u4E0A\u65B9\u5355\u5143\u683C",
      mergeRowBelow: "\u5408\u5E76\u4E0B\u65B9\u5355\u5143\u683C",
      mergeEntireColumn: "\u5408\u5E76\u6574\u5217",
      undoMergeCol: "\u64A4\u9500\u5217\u5408\u5E76",
      undoMergeRow: "\u64A4\u9500\u884C\u5408\u5E76",
      deleteEntireCol: "\u5220\u9664\u6574\u5217",
      deleteEntireRow: "\u5220\u9664\u6574\u884C",
      widgetName: "\u7EC4\u4EF6\u552F\u4E00\u540D\u79F0",
      formSize: "\u5168\u5C40\u7EC4\u4EF6\u5927\u5C0F",
      labelPosition: "\u6807\u7B7E\u4F4D\u7F6E",
      topPosition: "\u9876\u90E8",
      leftPosition: "\u5DE6\u8FB9",
      labelAlign: "\u5B57\u6BB5\u6807\u7B7E\u5BF9\u9F50",
      leftAlign: "\u5C45\u5DE6",
      centerAlign: "\u5C45\u4E2D",
      rightAlign: "\u5C45\u53F3",
      formCss: "\u8868\u5355\u5168\u5C40CSS",
      addCss: "\u7F16\u5199CSS",
      customClass: "\u81EA\u5B9A\u4E49CSS\u6837\u5F0F",
      globalFunctions: "\u8868\u5355\u5168\u5C40\u51FD\u6570",
      addEventHandler: "\u7F16\u5199\u4EE3\u7801",
      editWidgetEventHandler: "\u7EC4\u4EF6\u4E8B\u4EF6\u5904\u7406",
      editFormEventHandler: "\u8868\u5355\u4E8B\u4EF6\u5904\u7406",
      formSFCSetting: "\u751F\u6210SFC\u8BBE\u7F6E",
      formModelName: "\u6570\u636E\u5BF9\u8C61\u540D\u79F0",
      formRefName: "\u5F15\u7528\u540D\u79F0",
      formRulesName: "\u9A8C\u8BC1\u89C4\u5219\u540D\u79F0",
      syntaxCheckWarning: "JS\u4EE3\u7801\u5B58\u5728\u8BED\u6CD5\u9519\u8BEF\uFF0C\u8BF7\u4ED4\u7EC6\u68C0\u67E5\uFF01"
    }
  }
};
var enLocale_render = {
  render: {
    hint: {
      prompt: "Prompt",
      confirm: "OK",
      cancel: "Cancel",
      selectPlaceholder: "Pick some item",
      timePlaceholder: "Select time",
      startTimePlaceholder: "Start time",
      endTimePlaceholder: "End time",
      datePlaceholder: "Select date",
      startDatePlaceholder: "Start date",
      endDatePlaceholder: "End date",
      blankCellContent: "--",
      uploadError: "Upload error: ",
      uploadExceed: "The maximum number(${uploadLimit}) of file uploads has been exceeded.",
      unsupportedFileType: "Unsupported format: ",
      fileSizeExceed: "File size out of limit: ",
      refNotFound: "Ref not found: ",
      fieldRequired: "Input value should be not null.",
      invalidNumber: "Invalid number format",
      selectFile: " File...",
      downloadFile: "Download",
      removeFile: "Remove",
      validationFailed: "Form validation failed",
      subFormAction: "Action",
      subFormAddAction: "Add",
      subFormAddActionHint: "add new row",
      insertSubFormRow: "insert new row",
      deleteSubFormRow: "delete this row",
      nonSubFormType: "The type of widget don't match sub-form"
    }
  }
};
var zhLocale_render = {
  render: {
    hint: {
      prompt: "\u63D0\u793A",
      confirm: "\u786E\u5B9A",
      cancel: "\u53D6\u6D88",
      selectPlaceholder: "\u8BF7\u9009\u62E9",
      timePlaceholder: "\u9009\u62E9\u65F6\u95F4",
      startTimePlaceholder: "\u8D77\u59CB\u65F6\u95F4",
      endTimePlaceholder: "\u622A\u6B62\u65F6\u95F4",
      datePlaceholder: "\u9009\u62E9\u65E5\u671F",
      startDatePlaceholder: "\u8D77\u59CB\u65E5\u671F",
      endDatePlaceholder: "\u622A\u6B62\u65E5\u671F",
      blankCellContent: "--",
      uploadError: "\u4E0A\u4F20\u9519\u8BEF: ",
      uploadExceed: "\u6700\u5927\u4E0A\u4F20\u6570\u91CF(${uploadLimit})\u5DF2\u8D85\u51FA.",
      unsupportedFileType: "\u4E0D\u652F\u6301\u683C\u5F0F: ",
      fileSizeExceed: "\u6587\u4EF6\u5927\u5C0F\u5DF2\u8D85\u51FA: ",
      refNotFound: "\u7EC4\u4EF6\u672A\u627E\u5230: ",
      fieldRequired: "\u5B57\u6BB5\u503C\u4E0D\u53EF\u4E3A\u7A7A",
      invalidNumber: "\u6570\u636E\u683C\u5F0F\u9519\u8BEF",
      selectFile: " \u9009\u62E9\u6587\u4EF6",
      downloadFile: "\u4E0B\u8F7D",
      removeFile: "\u79FB\u9664",
      validationFailed: "\u8868\u5355\u6570\u636E\u6821\u9A8C\u5931\u8D25",
      subFormAction: "\u64CD\u4F5C",
      subFormAddAction: "\u65B0\u589E",
      subFormAddActionHint: "\u65B0\u589E\u884C",
      insertSubFormRow: "\u63D2\u5165\u884C",
      deleteSubFormRow: "\u5220\u9664\u884C",
      nonSubFormType: "\u7EC4\u4EF6\u7C7B\u578B\u4E0D\u662F\u5B50\u8868\u5355"
    }
  }
};
var enLocale_extension = {
  extension: {
    widgetLabel: {
      card: "Card",
      alert: "Alert",
      "select-group": "Select Group"
    },
    setting: {
      cardFolded: "Folded",
      cardShowFold: "Show Fold",
      cardWidth: "Width Of Card",
      cardShadow: "Shadow",
      alertTitle: "Title",
      alertType: "Type",
      description: "Description",
      closable: "Closable",
      closeText: "Text On Close Btn",
      center: "Center",
      showIcon: "Show Icon",
      effect: "Effect"
    }
  }
};
var zhLocale_extension = {
  extension: {
    widgetLabel: {
      card: "\u5361\u7247",
      alert: "\u63D0\u793A",
      "select-group": "\u5206\u7EC4\u9009\u9879"
    },
    setting: {
      cardFolded: "\u662F\u5426\u6536\u8D77",
      cardShowFold: "\u663E\u793A\u6298\u53E0\u6309\u94AE",
      cardWidth: "\u5361\u7247\u5BBD\u5EA6",
      cardShadow: "\u663E\u793A\u9634\u5F71",
      alertTitle: "\u6807\u9898",
      alertType: "\u7C7B\u578B",
      description: "\u8F85\u52A9\u6027\u6587\u5B57",
      closable: "\u662F\u5426\u53EF\u5173\u95ED",
      closeText: "\u5173\u95ED\u6309\u94AE\u6587\u5B57",
      center: "\u6587\u5B57\u5C45\u4E2D",
      showIcon: "\u663E\u793A\u56FE\u6807",
      effect: "\u663E\u793A\u6548\u679C"
    }
  }
};
const langResources = {
  "en-US": __spreadValues(__spreadValues(__spreadValues(__spreadValues({
    something: {}
  }, enLocaleElement), enLocale), enLocale_render), enLocale_extension),
  "zh-CN": __spreadValues(__spreadValues(__spreadValues(__spreadValues({
    something: {}
  }, zhLocaleElement), zhLocale), zhLocale_render), zhLocale_extension)
};
const i18n = createI18n({
  locale: localStorage.getItem("v_form_locale") || "en-US",
  messages: langResources
});
const changeLocale = function(langName) {
  i18n.setLang(langName);
  localStorage.setItem("v_form_locale", langName);
};
const translate = function(key) {
  return i18n.$st(key);
};
var i18n$1 = {
  methods: {
    i18nt(key) {
      return i18n.$st(key);
    },
    i18n2t(key1, key2) {
      return i18n.$st2(key1, key2);
    }
  }
};
var refMixin = {
  methods: {
    initRefList() {
      if (this.refList !== null && !!this.widget.options.name) {
        this.refList[this.widget.options.name] = this;
      }
    },
    getWidgetRef(widgetName, showError) {
      let foundRef = this.refList[widgetName];
      if (!foundRef && !!showError) {
        this.$message.error(this.i18nt("render.hint.refNotFound") + widgetName);
      }
      return foundRef;
    },
    getFormRef() {
      return this.refList["v_form_ref"];
    },
    getComponentByContainer(con) {
      if (con.type === "grid") {
        return "vf-grid-item";
      }
      return con.type + "-item";
    }
  }
};
var index_vue_vue_type_style_index_0_scoped_true_lang$1 = "";
const _sfc_main$L = {
  name: "SvgIcon",
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String
    },
    title: {
      type: String,
      default: ""
    }
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`;
    },
    svgClass() {
      if (this.className) {
        return "svg-icon " + this.className;
      } else {
        return "svg-icon";
      }
    }
  }
};
const _hoisted_1$n = ["xlink:href"];
const _hoisted_2$h = { key: 0 };
function _sfc_render$L(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    class: normalizeClass($options.svgClass),
    "aria-hidden": "true"
  }, [
    createElementVNode("use", { "xlink:href": $options.iconName }, null, 8, _hoisted_1$n),
    !!$props.title ? (openBlock(), createElementBlock("title", _hoisted_2$h, toDisplayString($props.title), 1)) : createCommentVNode("", true)
  ], 2);
}
var SvgIcon = /* @__PURE__ */ _export_sfc$1(_sfc_main$L, [["render", _sfc_render$L], ["__scopeId", "data-v-47daada2"]]);
var staticContentWrapper_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$K = {
  name: "static-content-wrapper",
  mixins: [i18n$1],
  components: {
    SvgIcon
  },
  props: {
    field: Object,
    designer: Object,
    parentWidget: Object,
    parentList: Array,
    indexOfParentList: Number,
    designState: {
      type: Boolean,
      default: false
    },
    displayStyle: {
      type: String,
      default: "block"
    },
    subFormRowIndex: {
      type: Number,
      default: -1
    },
    subFormColIndex: {
      type: Number,
      default: -1
    },
    subFormRowId: {
      type: String,
      default: ""
    }
  },
  computed: {
    selected() {
      return !!this.designer && this.field.id === this.designer.selectedId;
    },
    customClass() {
      return !!this.field.options.customClass ? this.field.options.customClass.join(" ") : "";
    }
  },
  methods: {
    selectField(field) {
      if (!!this.designer) {
        this.designer.setSelected(field);
        this.designer.emitEvent("field-selected", this.parentWidget);
      }
    },
    selectParentWidget() {
      if (this.parentWidget) {
        this.designer.setSelected(this.parentWidget);
      } else {
        this.designer.clearSelected();
      }
    },
    moveUpWidget() {
      this.designer.moveUpWidget(this.parentList, this.indexOfParentList);
      this.designer.emitHistoryChange();
    },
    moveDownWidget() {
      this.designer.moveDownWidget(this.parentList, this.indexOfParentList);
      this.designer.emitHistoryChange();
    },
    removeFieldWidget() {
      if (!!this.parentList) {
        const fieldRefName = this.designer.selectedWidgetName;
        let nextSelected = null;
        if (this.parentList.length === 1) {
          if (!!this.parentWidget) {
            nextSelected = this.parentWidget;
          }
        } else if (this.parentList.length === 1 + this.indexOfParentList) {
          nextSelected = this.parentList[this.indexOfParentList - 1];
        } else {
          nextSelected = this.parentList[this.indexOfParentList + 1];
        }
        this.$nextTick(() => {
          this.parentList.splice(this.indexOfParentList, 1);
          this.designer.setSelected(nextSelected);
          this.designer.formWidget.deleteWidgetRef(fieldRefName);
          this.designer.emitHistoryChange();
        });
      }
    }
  }
};
const _hoisted_1$m = {
  key: 0,
  class: "field-action"
};
const _hoisted_2$g = ["title"];
const _hoisted_3$e = ["title"];
const _hoisted_4$7 = ["title"];
const _hoisted_5$6 = ["title"];
const _hoisted_6$4 = {
  key: 1,
  class: "drag-handler background-opacity"
};
const _hoisted_7$4 = ["title"];
const _hoisted_8$2 = { key: 0 };
function _sfc_render$K(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_svg_icon = resolveComponent("svg-icon");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["field-wrapper", { "design-time-bottom-margin": !!this.designer }]),
    style: normalizeStyle({ display: $props.displayStyle })
  }, [
    !$props.field.options.hidden || $props.designState === true ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(["static-content-item", [$options.selected ? "selected" : "", $options.customClass]]),
      style: normalizeStyle({ display: $props.displayStyle }),
      onClick: _cache[0] || (_cache[0] = withModifiers(($event) => $options.selectField($props.field), ["stop"]))
    }, [
      renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ], 6)) : createCommentVNode("", true),
    !!this.designer ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
      $props.designer.selectedId === $props.field.id ? (openBlock(), createElementBlock("div", _hoisted_1$m, [
        createElementVNode("i", {
          title: _ctx.$t("designer.hint.selectParentWidget"),
          onClick: _cache[1] || (_cache[1] = withModifiers(($event) => $options.selectParentWidget($props.field), ["stop"]))
        }, [
          createVNode(_component_svg_icon, { "icon-class": "el-back" })
        ], 8, _hoisted_2$g),
        !!$props.parentList && $props.parentList.length > 1 ? (openBlock(), createElementBlock("i", {
          key: 0,
          title: _ctx.$t("designer.hint.moveUpWidget"),
          onClick: _cache[2] || (_cache[2] = withModifiers(($event) => $options.moveUpWidget($props.field), ["stop"]))
        }, [
          createVNode(_component_svg_icon, { "icon-class": "el-move-up" })
        ], 8, _hoisted_3$e)) : createCommentVNode("", true),
        !!$props.parentList && $props.parentList.length > 1 ? (openBlock(), createElementBlock("i", {
          key: 1,
          title: _ctx.$t("designer.hint.moveDownWidget"),
          onClick: _cache[3] || (_cache[3] = withModifiers(($event) => $options.moveDownWidget($props.field), ["stop"]))
        }, [
          createVNode(_component_svg_icon, { "icon-class": "el-move-down" })
        ], 8, _hoisted_4$7)) : createCommentVNode("", true),
        createElementVNode("i", {
          title: _ctx.$t("designer.hint.remove"),
          onClick: _cache[4] || (_cache[4] = withModifiers((...args) => $options.removeFieldWidget && $options.removeFieldWidget(...args), ["stop"]))
        }, [
          createVNode(_component_svg_icon, { "icon-class": "el-delete" })
        ], 8, _hoisted_5$6)
      ])) : createCommentVNode("", true),
      $props.designer.selectedId === $props.field.id ? (openBlock(), createElementBlock("div", _hoisted_6$4, [
        createElementVNode("i", {
          title: _ctx.$t("designer.hint.dragHandler")
        }, [
          createVNode(_component_svg_icon, { "icon-class": "el-drag-move" })
        ], 8, _hoisted_7$4),
        createElementVNode("i", null, toDisplayString(_ctx.$t(`designer.widgetLabel.${$props.field.type}`, `extension.widgetLabel.${$props.field.type}`)), 1),
        $props.field.options.hidden === true ? (openBlock(), createElementBlock("i", _hoisted_8$2, [
          createVNode(_component_svg_icon, { "icon-class": "el-hide" })
        ])) : createCommentVNode("", true)
      ])) : createCommentVNode("", true)
    ], 64)) : createCommentVNode("", true)
  ], 6);
}
var StaticContentWrapper = /* @__PURE__ */ _export_sfc$1(_sfc_main$K, [["render", _sfc_render$K], ["__scopeId", "data-v-2c3a4c20"]]);
var __glob_0_19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": StaticContentWrapper
}, Symbol.toStringTag, { value: "Module" }));
var clipboard = { exports: {} };
/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
(function(module, exports) {
  (function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory();
  })(commonjsGlobal, function() {
    return function() {
      var __webpack_modules__ = {
        686: function(__unused_webpack_module, __webpack_exports__, __webpack_require__2) {
          __webpack_require__2.d(__webpack_exports__, {
            "default": function() {
              return clipboard2;
            }
          });
          var tiny_emitter = __webpack_require__2(279);
          var tiny_emitter_default = /* @__PURE__ */ __webpack_require__2.n(tiny_emitter);
          var listen = __webpack_require__2(370);
          var listen_default = /* @__PURE__ */ __webpack_require__2.n(listen);
          var src_select = __webpack_require__2(817);
          var select_default = /* @__PURE__ */ __webpack_require__2.n(src_select);
          function command(type) {
            try {
              return document.execCommand(type);
            } catch (err) {
              return false;
            }
          }
          var ClipboardActionCut = function ClipboardActionCut2(target) {
            var selectedText = select_default()(target);
            command("cut");
            return selectedText;
          };
          var actions_cut = ClipboardActionCut;
          function createFakeElement(value2) {
            var isRTL = document.documentElement.getAttribute("dir") === "rtl";
            var fakeElement = document.createElement("textarea");
            fakeElement.style.fontSize = "12pt";
            fakeElement.style.border = "0";
            fakeElement.style.padding = "0";
            fakeElement.style.margin = "0";
            fakeElement.style.position = "absolute";
            fakeElement.style[isRTL ? "right" : "left"] = "-9999px";
            var yPosition = window.pageYOffset || document.documentElement.scrollTop;
            fakeElement.style.top = "".concat(yPosition, "px");
            fakeElement.setAttribute("readonly", "");
            fakeElement.value = value2;
            return fakeElement;
          }
          var fakeCopyAction = function fakeCopyAction2(value2, options) {
            var fakeElement = createFakeElement(value2);
            options.container.appendChild(fakeElement);
            var selectedText = select_default()(fakeElement);
            command("copy");
            fakeElement.remove();
            return selectedText;
          };
          var ClipboardActionCopy = function ClipboardActionCopy2(target) {
            var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
              container: document.body
            };
            var selectedText = "";
            if (typeof target === "string") {
              selectedText = fakeCopyAction(target, options);
            } else if (target instanceof HTMLInputElement && !["text", "search", "url", "tel", "password"].includes(target === null || target === void 0 ? void 0 : target.type)) {
              selectedText = fakeCopyAction(target.value, options);
            } else {
              selectedText = select_default()(target);
              command("copy");
            }
            return selectedText;
          };
          var actions_copy = ClipboardActionCopy;
          function _typeof(obj) {
            "@babel/helpers - typeof";
            if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
              _typeof = function _typeof2(obj2) {
                return typeof obj2;
              };
            } else {
              _typeof = function _typeof2(obj2) {
                return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
              };
            }
            return _typeof(obj);
          }
          var ClipboardActionDefault = function ClipboardActionDefault2() {
            var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            var _options$action = options.action, action = _options$action === void 0 ? "copy" : _options$action, container = options.container, target = options.target, text = options.text;
            if (action !== "copy" && action !== "cut") {
              throw new Error('Invalid "action" value, use either "copy" or "cut"');
            }
            if (target !== void 0) {
              if (target && _typeof(target) === "object" && target.nodeType === 1) {
                if (action === "copy" && target.hasAttribute("disabled")) {
                  throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                }
                if (action === "cut" && (target.hasAttribute("readonly") || target.hasAttribute("disabled"))) {
                  throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`);
                }
              } else {
                throw new Error('Invalid "target" value, use a valid Element');
              }
            }
            if (text) {
              return actions_copy(text, {
                container
              });
            }
            if (target) {
              return action === "cut" ? actions_cut(target) : actions_copy(target, {
                container
              });
            }
          };
          var actions_default = ClipboardActionDefault;
          function clipboard_typeof(obj) {
            "@babel/helpers - typeof";
            if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
              clipboard_typeof = function _typeof2(obj2) {
                return typeof obj2;
              };
            } else {
              clipboard_typeof = function _typeof2(obj2) {
                return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
              };
            }
            return clipboard_typeof(obj);
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps)
              _defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              _defineProperties(Constructor, staticProps);
            return Constructor;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError("Super expression must either be null or a function");
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
            if (superClass)
              _setPrototypeOf(subClass, superClass);
          }
          function _setPrototypeOf(o, p) {
            _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
              o2.__proto__ = p2;
              return o2;
            };
            return _setPrototypeOf(o, p);
          }
          function _createSuper(Derived) {
            var hasNativeReflectConstruct = _isNativeReflectConstruct();
            return function _createSuperInternal() {
              var Super = _getPrototypeOf(Derived), result;
              if (hasNativeReflectConstruct) {
                var NewTarget = _getPrototypeOf(this).constructor;
                result = Reflect.construct(Super, arguments, NewTarget);
              } else {
                result = Super.apply(this, arguments);
              }
              return _possibleConstructorReturn(this, result);
            };
          }
          function _possibleConstructorReturn(self2, call) {
            if (call && (clipboard_typeof(call) === "object" || typeof call === "function")) {
              return call;
            }
            return _assertThisInitialized(self2);
          }
          function _assertThisInitialized(self2) {
            if (self2 === void 0) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return self2;
          }
          function _isNativeReflectConstruct() {
            if (typeof Reflect === "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy === "function")
              return true;
            try {
              Date.prototype.toString.call(Reflect.construct(Date, [], function() {
              }));
              return true;
            } catch (e) {
              return false;
            }
          }
          function _getPrototypeOf(o) {
            _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
              return o2.__proto__ || Object.getPrototypeOf(o2);
            };
            return _getPrototypeOf(o);
          }
          function getAttributeValue(suffix, element) {
            var attribute = "data-clipboard-".concat(suffix);
            if (!element.hasAttribute(attribute)) {
              return;
            }
            return element.getAttribute(attribute);
          }
          var Clipboard = /* @__PURE__ */ function(_Emitter) {
            _inherits(Clipboard2, _Emitter);
            var _super = _createSuper(Clipboard2);
            function Clipboard2(trigger, options) {
              var _this;
              _classCallCheck(this, Clipboard2);
              _this = _super.call(this);
              _this.resolveOptions(options);
              _this.listenClick(trigger);
              return _this;
            }
            _createClass(Clipboard2, [{
              key: "resolveOptions",
              value: function resolveOptions() {
                var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                this.action = typeof options.action === "function" ? options.action : this.defaultAction;
                this.target = typeof options.target === "function" ? options.target : this.defaultTarget;
                this.text = typeof options.text === "function" ? options.text : this.defaultText;
                this.container = clipboard_typeof(options.container) === "object" ? options.container : document.body;
              }
            }, {
              key: "listenClick",
              value: function listenClick(trigger) {
                var _this2 = this;
                this.listener = listen_default()(trigger, "click", function(e) {
                  return _this2.onClick(e);
                });
              }
            }, {
              key: "onClick",
              value: function onClick(e) {
                var trigger = e.delegateTarget || e.currentTarget;
                var action = this.action(trigger) || "copy";
                var text = actions_default({
                  action,
                  container: this.container,
                  target: this.target(trigger),
                  text: this.text(trigger)
                });
                this.emit(text ? "success" : "error", {
                  action,
                  text,
                  trigger,
                  clearSelection: function clearSelection() {
                    if (trigger) {
                      trigger.focus();
                    }
                    window.getSelection().removeAllRanges();
                  }
                });
              }
            }, {
              key: "defaultAction",
              value: function defaultAction(trigger) {
                return getAttributeValue("action", trigger);
              }
            }, {
              key: "defaultTarget",
              value: function defaultTarget(trigger) {
                var selector = getAttributeValue("target", trigger);
                if (selector) {
                  return document.querySelector(selector);
                }
              }
            }, {
              key: "defaultText",
              value: function defaultText(trigger) {
                return getAttributeValue("text", trigger);
              }
            }, {
              key: "destroy",
              value: function destroy() {
                this.listener.destroy();
              }
            }], [{
              key: "copy",
              value: function copy(target) {
                var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                  container: document.body
                };
                return actions_copy(target, options);
              }
            }, {
              key: "cut",
              value: function cut(target) {
                return actions_cut(target);
              }
            }, {
              key: "isSupported",
              value: function isSupported() {
                var action = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["copy", "cut"];
                var actions = typeof action === "string" ? [action] : action;
                var support = !!document.queryCommandSupported;
                actions.forEach(function(action2) {
                  support = support && !!document.queryCommandSupported(action2);
                });
                return support;
              }
            }]);
            return Clipboard2;
          }(tiny_emitter_default());
          var clipboard2 = Clipboard;
        },
        828: function(module2) {
          var DOCUMENT_NODE_TYPE = 9;
          if (typeof Element !== "undefined" && !Element.prototype.matches) {
            var proto = Element.prototype;
            proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector;
          }
          function closest(element, selector) {
            while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
              if (typeof element.matches === "function" && element.matches(selector)) {
                return element;
              }
              element = element.parentNode;
            }
          }
          module2.exports = closest;
        },
        438: function(module2, __unused_webpack_exports, __webpack_require__2) {
          var closest = __webpack_require__2(828);
          function _delegate(element, selector, type, callback2, useCapture) {
            var listenerFn = listener.apply(this, arguments);
            element.addEventListener(type, listenerFn, useCapture);
            return {
              destroy: function() {
                element.removeEventListener(type, listenerFn, useCapture);
              }
            };
          }
          function delegate(elements, selector, type, callback2, useCapture) {
            if (typeof elements.addEventListener === "function") {
              return _delegate.apply(null, arguments);
            }
            if (typeof type === "function") {
              return _delegate.bind(null, document).apply(null, arguments);
            }
            if (typeof elements === "string") {
              elements = document.querySelectorAll(elements);
            }
            return Array.prototype.map.call(elements, function(element) {
              return _delegate(element, selector, type, callback2, useCapture);
            });
          }
          function listener(element, selector, type, callback2) {
            return function(e) {
              e.delegateTarget = closest(e.target, selector);
              if (e.delegateTarget) {
                callback2.call(element, e);
              }
            };
          }
          module2.exports = delegate;
        },
        879: function(__unused_webpack_module, exports2) {
          exports2.node = function(value2) {
            return value2 !== void 0 && value2 instanceof HTMLElement && value2.nodeType === 1;
          };
          exports2.nodeList = function(value2) {
            var type = Object.prototype.toString.call(value2);
            return value2 !== void 0 && (type === "[object NodeList]" || type === "[object HTMLCollection]") && "length" in value2 && (value2.length === 0 || exports2.node(value2[0]));
          };
          exports2.string = function(value2) {
            return typeof value2 === "string" || value2 instanceof String;
          };
          exports2.fn = function(value2) {
            var type = Object.prototype.toString.call(value2);
            return type === "[object Function]";
          };
        },
        370: function(module2, __unused_webpack_exports, __webpack_require__2) {
          var is = __webpack_require__2(879);
          var delegate = __webpack_require__2(438);
          function listen(target, type, callback2) {
            if (!target && !type && !callback2) {
              throw new Error("Missing required arguments");
            }
            if (!is.string(type)) {
              throw new TypeError("Second argument must be a String");
            }
            if (!is.fn(callback2)) {
              throw new TypeError("Third argument must be a Function");
            }
            if (is.node(target)) {
              return listenNode(target, type, callback2);
            } else if (is.nodeList(target)) {
              return listenNodeList(target, type, callback2);
            } else if (is.string(target)) {
              return listenSelector(target, type, callback2);
            } else {
              throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
            }
          }
          function listenNode(node, type, callback2) {
            node.addEventListener(type, callback2);
            return {
              destroy: function() {
                node.removeEventListener(type, callback2);
              }
            };
          }
          function listenNodeList(nodeList, type, callback2) {
            Array.prototype.forEach.call(nodeList, function(node) {
              node.addEventListener(type, callback2);
            });
            return {
              destroy: function() {
                Array.prototype.forEach.call(nodeList, function(node) {
                  node.removeEventListener(type, callback2);
                });
              }
            };
          }
          function listenSelector(selector, type, callback2) {
            return delegate(document.body, selector, type, callback2);
          }
          module2.exports = listen;
        },
        817: function(module2) {
          function select(element) {
            var selectedText;
            if (element.nodeName === "SELECT") {
              element.focus();
              selectedText = element.value;
            } else if (element.nodeName === "INPUT" || element.nodeName === "TEXTAREA") {
              var isReadOnly = element.hasAttribute("readonly");
              if (!isReadOnly) {
                element.setAttribute("readonly", "");
              }
              element.select();
              element.setSelectionRange(0, element.value.length);
              if (!isReadOnly) {
                element.removeAttribute("readonly");
              }
              selectedText = element.value;
            } else {
              if (element.hasAttribute("contenteditable")) {
                element.focus();
              }
              var selection = window.getSelection();
              var range = document.createRange();
              range.selectNodeContents(element);
              selection.removeAllRanges();
              selection.addRange(range);
              selectedText = selection.toString();
            }
            return selectedText;
          }
          module2.exports = select;
        },
        279: function(module2) {
          function E() {
          }
          E.prototype = {
            on: function(name, callback2, ctx) {
              var e = this.e || (this.e = {});
              (e[name] || (e[name] = [])).push({
                fn: callback2,
                ctx
              });
              return this;
            },
            once: function(name, callback2, ctx) {
              var self2 = this;
              function listener() {
                self2.off(name, listener);
                callback2.apply(ctx, arguments);
              }
              listener._ = callback2;
              return this.on(name, listener, ctx);
            },
            emit: function(name) {
              var data2 = [].slice.call(arguments, 1);
              var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
              var i = 0;
              var len = evtArr.length;
              for (i; i < len; i++) {
                evtArr[i].fn.apply(evtArr[i].ctx, data2);
              }
              return this;
            },
            off: function(name, callback2) {
              var e = this.e || (this.e = {});
              var evts = e[name];
              var liveEvents = [];
              if (evts && callback2) {
                for (var i = 0, len = evts.length; i < len; i++) {
                  if (evts[i].fn !== callback2 && evts[i].fn._ !== callback2)
                    liveEvents.push(evts[i]);
                }
              }
              liveEvents.length ? e[name] = liveEvents : delete e[name];
              return this;
            }
          };
          module2.exports = E;
          module2.exports.TinyEmitter = E;
        }
      };
      var __webpack_module_cache__ = {};
      function __webpack_require__(moduleId) {
        if (__webpack_module_cache__[moduleId]) {
          return __webpack_module_cache__[moduleId].exports;
        }
        var module2 = __webpack_module_cache__[moduleId] = {
          exports: {}
        };
        __webpack_modules__[moduleId](module2, module2.exports, __webpack_require__);
        return module2.exports;
      }
      !function() {
        __webpack_require__.n = function(module2) {
          var getter = module2 && module2.__esModule ? function() {
            return module2["default"];
          } : function() {
            return module2;
          };
          __webpack_require__.d(getter, { a: getter });
          return getter;
        };
      }();
      !function() {
        __webpack_require__.d = function(exports2, definition) {
          for (var key in definition) {
            if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports2, key)) {
              Object.defineProperty(exports2, key, { enumerable: true, get: definition[key] });
            }
          }
        };
      }();
      !function() {
        __webpack_require__.o = function(obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
      }();
      return __webpack_require__(686);
    }().default;
  });
})(clipboard);
function isNull(value2) {
  return value2 === null || value2 === void 0;
}
const generateId = function() {
  return Math.floor(Math.random() * 1e5 + Math.random() * 2e4 + Math.random() * 5e3);
};
const deepClone = function(origin) {
  if (origin === void 0) {
    return void 0;
  }
  return JSON.parse(JSON.stringify(origin));
};
const insertCustomCssToHead = function(cssCode, formId = "") {
  let head = document.getElementsByTagName("head")[0];
  let oldStyle = document.getElementById("vform-custom-css");
  if (!!oldStyle) {
    head.removeChild(oldStyle);
  }
  if (!!formId) {
    oldStyle = document.getElementById("vform-custom-css-" + formId);
    !!oldStyle && head.removeChild(oldStyle);
  }
  let newStyle = document.createElement("style");
  newStyle.type = "text/css";
  newStyle.rel = "stylesheet";
  newStyle.id = !!formId ? "vform-custom-css-" + formId : "vform-custom-css";
  try {
    newStyle.appendChild(document.createTextNode(cssCode));
  } catch (ex) {
    newStyle.styleSheet.cssText = cssCode;
  }
  head.appendChild(newStyle);
};
const insertGlobalFunctionsToHtml = function(functionsCode, formId = "") {
  let bodyEle = document.getElementsByTagName("body")[0];
  let oldScriptEle = document.getElementById("v_form_global_functions");
  !!oldScriptEle && bodyEle.removeChild(oldScriptEle);
  if (!!formId) {
    oldScriptEle = document.getElementById("v_form_global_functions-" + formId);
    !!oldScriptEle && bodyEle.removeChild(oldScriptEle);
  }
  let newScriptEle = document.createElement("script");
  newScriptEle.id = !!formId ? "v_form_global_functions-" + formId : "v_form_global_functions";
  newScriptEle.type = "text/javascript";
  newScriptEle.innerHTML = functionsCode;
  bodyEle.appendChild(newScriptEle);
};
function traverseFieldWidgets(widgetList, handler, parent = null) {
  if (!widgetList) {
    return;
  }
  widgetList.map((w) => {
    if (w.formItemFlag) {
      handler(w, parent);
    } else if (w.type === "grid") {
      w.cols.map((col) => {
        traverseFieldWidgets(col.widgetList, handler, w);
      });
    } else if (w.type === "table") {
      w.rows.map((row) => {
        row.cols.map((cell) => {
          traverseFieldWidgets(cell.widgetList, handler, w);
        });
      });
    } else if (w.type === "tab") {
      w.tabs.map((tab) => {
        traverseFieldWidgets(tab.widgetList, handler, w);
      });
    } else if (w.type === "sub-form") {
      traverseFieldWidgets(w.widgetList, handler, w);
    } else if (w.category === "container") {
      traverseFieldWidgets(w.widgetList, handler, w);
    }
  });
}
function traverseContainerWidgets(widgetList, handler) {
  if (!widgetList) {
    return;
  }
  widgetList.map((w) => {
    if (w.category === "container") {
      handler(w);
    }
    if (w.type === "grid") {
      w.cols.map((col) => {
        traverseContainerWidgets(col.widgetList, handler);
      });
    } else if (w.type === "table") {
      w.rows.map((row) => {
        row.cols.map((cell) => {
          traverseContainerWidgets(cell.widgetList, handler);
        });
      });
    } else if (w.type === "tab") {
      w.tabs.map((tab) => {
        traverseContainerWidgets(tab.widgetList, handler);
      });
    } else if (w.type === "sub-form") {
      traverseContainerWidgets(w.widgetList, handler);
    } else if (w.category === "container") {
      traverseContainerWidgets(w.widgetList, handler);
    }
  });
}
function handleWidgetForTraverse(widget, handler) {
  if (!!widget.category) {
    traverseFieldWidgetsOfContainer(widget, handler);
  } else if (widget.formItemFlag) {
    handler(widget);
  }
}
function traverseFieldWidgetsOfContainer(con, handler) {
  if (con.type === "grid") {
    con.cols.forEach((col) => {
      col.widgetList.forEach((cw) => {
        handleWidgetForTraverse(cw, handler);
      });
    });
  } else if (con.type === "table") {
    con.rows.forEach((row) => {
      row.cols.forEach((cell) => {
        cell.widgetList.forEach((cw) => {
          handleWidgetForTraverse(cw, handler);
        });
      });
    });
  } else if (con.type === "tab") {
    con.tabs.forEach((tab) => {
      tab.widgetList.forEach((cw) => {
        handleWidgetForTraverse(cw, handler);
      });
    });
  } else if (con.type === "sub-form") {
    con.widgetList.forEach((cw) => {
      handleWidgetForTraverse(cw, handler);
    });
  } else if (con.category === "container") {
    con.widgetList.forEach((cw) => {
      handleWidgetForTraverse(cw, handler);
    });
  }
}
function getAllFieldWidgets(widgetList) {
  if (!widgetList) {
    return [];
  }
  let result = [];
  let handlerFn = (w) => {
    result.push({
      type: w.type,
      name: w.options.name,
      field: w
    });
  };
  traverseFieldWidgets(widgetList, handlerFn);
  return result;
}
function getAllContainerWidgets(widgetList) {
  if (!widgetList) {
    return [];
  }
  let result = [];
  let handlerFn = (w) => {
    result.push({
      type: w.type,
      name: w.options.name,
      container: w
    });
  };
  traverseContainerWidgets(widgetList, handlerFn);
  return result;
}
function getDefaultFormConfig() {
  return {
    modelName: "formData",
    refName: "vForm",
    rulesName: "rules",
    labelWidth: 80,
    labelPosition: "left",
    size: "",
    labelAlign: "label-left-align",
    cssCode: "",
    customClass: [],
    functions: "",
    layoutType: "PC",
    jsonVersion: 3,
    onFormCreated: "",
    onFormMounted: "",
    onFormDataChange: ""
  };
}
function buildDefaultFormJson() {
  return {
    widgetList: [],
    formConfig: deepClone(getDefaultFormConfig())
  };
}
const getRegExp = function(validatorName2) {
  const commonRegExp = {
    number: "/^[-]?\\d+(\\.\\d+)?$/",
    letter: "/^[A-Za-z]+$/",
    letterAndNumber: "/^[A-Za-z0-9]+$/",
    mobilePhone: "/^[1][3-9][0-9]{9}$/",
    letterStartNumberIncluded: "/^[A-Za-z]+[A-Za-z\\d]*$/",
    noChinese: "/^[^\u4E00-\u9FA5]+$/",
    chinese: "/^[\u4E00-\u9FA5]+$/",
    email: "/^([-_A-Za-z0-9.]+)@([_A-Za-z0-9]+\\.)+[A-Za-z0-9]{2,3}$/",
    url: "/^([hH][tT]{2}[pP]:\\/\\/|[hH][tT]{2}[pP][sS]:\\/\\/)(([A-Za-z0-9-~]+)\\.)+([A-Za-z0-9-~\\/])+$/"
  };
  return commonRegExp[validatorName2];
};
const validateFn = function(validatorName, rule, value, callback, defaultErrorMsg) {
  if (isNull(value) || value.length <= 0) {
    callback();
    return;
  }
  const reg = eval(getRegExp(validatorName));
  if (!reg.test(value)) {
    let errTxt = rule.errorMsg || defaultErrorMsg;
    callback(new Error(errTxt));
  } else {
    callback();
  }
};
const FormValidators = {
  number(rule2, value2, callback2) {
    validateFn("number", rule2, value2, callback2, "[" + rule2.label + "]\u5305\u542B\u975E\u6570\u5B57\u5B57\u7B26");
  },
  letter(rule2, value2, callback2) {
    validateFn("letter", rule2, value2, callback2, "[" + rule2.label + "]\u5305\u542B\u975E\u5B57\u6BCD\u5B57\u7B26");
  },
  letterAndNumber(rule2, value2, callback2) {
    validateFn("letterAndNumber", rule2, value2, callback2, "[" + rule2.label + "]\u53EA\u80FD\u8F93\u5165\u5B57\u6BCD\u6216\u6570\u5B57");
  },
  mobilePhone(rule2, value2, callback2) {
    validateFn("mobilePhone", rule2, value2, callback2, "[" + rule2.label + "]\u624B\u673A\u53F7\u7801\u683C\u5F0F\u6709\u8BEF");
  },
  noBlankStart(rule2, value2, callback2) {
  },
  noBlankEnd(rule2, value2, callback2) {
  },
  letterStartNumberIncluded(rule2, value2, callback2) {
    validateFn("letterStartNumberIncluded", rule2, value2, callback2, "[" + rule2.label + "]\u5FC5\u987B\u4EE5\u5B57\u6BCD\u5F00\u5934\uFF0C\u53EF\u5305\u542B\u6570\u5B57");
  },
  noChinese(rule2, value2, callback2) {
    validateFn("noChinese", rule2, value2, callback2, "[" + rule2.label + "]\u4E0D\u53EF\u8F93\u5165\u4E2D\u6587\u5B57\u7B26");
  },
  chinese(rule2, value2, callback2) {
    validateFn("chinese", rule2, value2, callback2, "[" + rule2.label + "]\u53EA\u80FD\u8F93\u5165\u4E2D\u6587\u5B57\u7B26");
  },
  email(rule2, value2, callback2) {
    validateFn("email", rule2, value2, callback2, "[" + rule2.label + "]\u90AE\u7BB1\u683C\u5F0F\u6709\u8BEF");
  },
  url(rule2, value2, callback2) {
    validateFn("url", rule2, value2, callback2, "[" + rule2.label + "]URL\u683C\u5F0F\u6709\u8BEF");
  },
  regExp(rule, value, callback) {
    if (isNull(value) || value.length <= 0) {
      callback();
      return;
    }
    const pattern = eval(rule.regExp);
    if (!pattern.test(value)) {
      let errTxt = rule.errorMsg || "[" + rule.label + "]invalid value";
      callback(new Error(errTxt));
    } else {
      callback();
    }
  }
};
var fieldMixin = {
  inject: ["refList", "getFormConfig", "getGlobalDsv", "globalOptionData", "globalModel", "getOptionData"],
  computed: {
    formConfig() {
      return this.getFormConfig();
    },
    widgetSize() {
      return this.field.options.size || "default";
    },
    subFormName() {
      return !!this.parentWidget ? this.parentWidget.options.name : "";
    },
    subFormItemFlag() {
      return !!this.parentWidget ? this.parentWidget.type === "sub-form" : false;
    },
    formModel: {
      cache: false,
      get() {
        return this.globalModel.formModel;
      }
    }
  },
  methods: {
    getPropName() {
      if (this.subFormItemFlag && !this.designState) {
        return this.subFormName + "." + this.subFormRowIndex + "." + this.field.options.name + "";
      } else {
        return this.field.options.name;
      }
    },
    initFieldModel() {
      if (!this.field.formItemFlag) {
        return;
      }
      if (!!this.subFormItemFlag && !this.designState) {
        let subFormData = this.formModel[this.subFormName];
        if ((subFormData === void 0 || subFormData[this.subFormRowIndex] === void 0 || subFormData[this.subFormRowIndex][this.field.options.name] === void 0) && this.field.options.defaultValue !== void 0) {
          this.fieldModel = this.field.options.defaultValue;
          subFormData[this.subFormRowIndex][this.field.options.name] = this.field.options.defaultValue;
        } else if (subFormData[this.subFormRowIndex][this.field.options.name] === void 0) {
          this.fieldModel = null;
          subFormData[this.subFormRowIndex][this.field.options.name] = null;
        } else {
          this.fieldModel = subFormData[this.subFormRowIndex][this.field.options.name];
        }
        setTimeout(() => {
          this.handleOnChangeForSubForm(this.fieldModel, this.oldFieldValue, subFormData, this.subFormRowId);
        }, 800);
        this.oldFieldValue = deepClone(this.fieldModel);
        this.initFileList();
        return;
      }
      if (this.formModel[this.field.options.name] === void 0 && this.field.options.defaultValue !== void 0) {
        this.fieldModel = this.field.options.defaultValue;
      } else if (this.formModel[this.field.options.name] === void 0) {
        this.formModel[this.field.options.name] = null;
      } else {
        this.fieldModel = this.formModel[this.field.options.name];
      }
      this.oldFieldValue = deepClone(this.fieldModel);
      this.initFileList();
    },
    initFileList() {
      if (this.field.type !== "picture-upload" && this.field.type !== "file-upload" || this.designState === true) {
        return;
      }
      if (!!this.fieldModel) {
        if (Array.isArray(this.fieldModel)) {
          this.fileList = deepClone(this.fieldModel);
        } else {
          this.fileList.splice(0, 0, deepClone(this.fieldModel));
        }
      }
    },
    initEventHandler() {
      this.on$("setFormData", (newFormData) => {
        console.log("formModel of globalModel----------", this.globalModel.formModel);
        if (!this.subFormItemFlag) {
          this.setValue(newFormData[this.field.options.name]);
        }
      });
      this.on$("field-value-changed", (values) => {
        if (!!this.subFormItemFlag) {
          let subFormData = this.formModel[this.subFormName];
          this.handleOnChangeForSubForm(values[0], values[1], subFormData, this.subFormRowId);
        } else {
          this.handleOnChange(values[0], values[1]);
        }
      });
      this.on$("reloadOptionItems", (widgetNames) => {
        if (widgetNames.length === 0 || widgetNames.indexOf(this.field.options.name) > -1) {
          this.initOptionItems(true);
        }
      });
    },
    handleOnCreated() {
      if (!!this.field.options.onCreated) {
        let customFunc = new Function(this.field.options.onCreated);
        customFunc.call(this);
      }
    },
    handleOnMounted() {
      if (!!this.field.options.onMounted) {
        let mountFunc = new Function(this.field.options.onMounted);
        mountFunc.call(this);
      }
    },
    registerToRefList(oldRefName) {
      if (this.refList !== null && !!this.field.options.name) {
        if (this.subFormItemFlag && !this.designState) {
          if (!!oldRefName) {
            delete this.refList[oldRefName + "@row" + this.subFormRowId];
          }
          this.refList[this.field.options.name + "@row" + this.subFormRowId] = this;
        } else {
          if (!!oldRefName) {
            delete this.refList[oldRefName];
          }
          this.refList[this.field.options.name] = this;
        }
      }
    },
    unregisterFromRefList() {
      if (this.refList !== null && !!this.field.options.name) {
        let oldRefName = this.field.options.name;
        if (this.subFormItemFlag && !this.designState) {
          delete this.refList[oldRefName + "@row" + this.subFormRowId];
        } else {
          delete this.refList[oldRefName];
        }
      }
    },
    initOptionItems(keepSelected) {
      if (this.designState) {
        return;
      }
      if (this.field.type === "radio" || this.field.type === "checkbox" || this.field.type === "select" || this.field.type === "cascader") {
        const newOptionItems = this.getOptionData();
        if (!!newOptionItems && newOptionItems.hasOwnProperty(this.field.options.name)) {
          if (!!keepSelected) {
            this.reloadOptions(newOptionItems[this.field.options.name]);
          } else {
            this.loadOptions(newOptionItems[this.field.options.name]);
          }
        }
      }
    },
    refreshDefaultValue() {
      if (this.designState === true && this.field.options.defaultValue !== void 0) {
        this.fieldModel = this.field.options.defaultValue;
      }
    },
    clearFieldRules() {
      if (!this.field.formItemFlag) {
        return;
      }
      this.rules.splice(0, this.rules.length);
    },
    buildFieldRules() {
      if (!this.field.formItemFlag && this.field.options.hidden) {
        return;
      }
      this.rules.splice(0, this.rules.length);
      if (!!this.field.options.required) {
        this.rules.push({
          required: true,
          trigger: ["blur"],
          message: this.field.options.requiredHint || this.i18nt("render.hint.fieldRequired")
        });
      }
      if (!!this.field.options.validation) {
        let vldName = this.field.options.validation;
        if (!!FormValidators[vldName]) {
          this.rules.push({
            validator: FormValidators[vldName],
            trigger: ["blur", "change"],
            label: this.field.options.label,
            errorMsg: this.field.options.validationHint
          });
        } else {
          this.rules.push({
            validator: FormValidators["regExp"],
            trigger: ["blur", "change"],
            regExp: vldName,
            label: this.field.options.label,
            errorMsg: this.field.options.validationHint
          });
        }
      }
      if (!!this.field.options.onValidate) {
        let customFn = (rule2, value2, callback2) => {
          let tmpFunc = new Function("rule", "value", "callback", this.field.options.onValidate);
          return tmpFunc.call(this, rule2, value2, callback2);
        };
        this.rules.push({
          validator: customFn,
          trigger: ["blur", "change"],
          label: this.field.options.label
        });
      }
    },
    disableChangeValidate() {
      if (!this.rules) {
        return;
      }
      this.rules.forEach((rule2) => {
        if (!!rule2.trigger) {
          rule2.trigger.splice(0, rule2.trigger.length);
        }
      });
    },
    enableChangeValidate() {
      if (!this.rules) {
        return;
      }
      this.rules.forEach((rule2) => {
        if (!!rule2.trigger) {
          rule2.trigger.push("blur");
          rule2.trigger.push("change");
        }
      });
    },
    disableOptionOfList(optionList, optionValue) {
      if (!!optionList && optionList.length > 0) {
        optionList.forEach((opt) => {
          if (opt.value === optionValue) {
            opt.disabled = true;
          }
        });
      }
    },
    enableOptionOfList(optionList, optionValue) {
      if (!!optionList && optionList.length > 0) {
        optionList.forEach((opt) => {
          if (opt.value === optionValue) {
            opt.disabled = false;
          }
        });
      }
    },
    emitFieldDataChange(newValue, oldValue) {
      this.emit$("field-value-changed", [newValue, oldValue]);
      this.dispatch("VFormRender", "fieldChange", [this.field.options.name, newValue, oldValue, this.subFormName, this.subFormRowIndex]);
    },
    syncUpdateFormModel(value2) {
      if (!!this.designState) {
        return;
      }
      if (!!this.subFormItemFlag) {
        let subFormData = this.formModel[this.subFormName] || [{}];
        let subFormDataRow = subFormData[this.subFormRowIndex];
        if (!!subFormDataRow) {
          subFormDataRow[this.field.options.name] = value2;
        }
      } else {
        this.formModel[this.field.options.name] = value2;
      }
    },
    handleChangeEvent(value2) {
      this.syncUpdateFormModel(value2);
      this.emitFieldDataChange(value2, this.oldFieldValue);
      this.oldFieldValue = deepClone(value2);
      this.dispatch("VFormRender", "fieldValidation", [this.getPropName()]);
    },
    handleFocusCustomEvent(event) {
      this.oldFieldValue = deepClone(this.fieldModel);
      if (!!this.field.options.onFocus) {
        let customFn = new Function("event", this.field.options.onFocus);
        customFn.call(this, event);
      }
    },
    handleBlurCustomEvent(event) {
      if (!!this.field.options.onBlur) {
        let customFn = new Function("event", this.field.options.onBlur);
        customFn.call(this, event);
      }
    },
    handleInputCustomEvent(value2) {
      this.syncUpdateFormModel(value2);
      this.dispatch("VFormRender", "fieldValidation", [this.getPropName()]);
      if (!!this.field.options.onInput) {
        let customFn = new Function("value", this.field.options.onInput);
        customFn.call(this, value2);
      }
    },
    emitAppendButtonClick() {
      if (!!this.designState) {
        return;
      }
      if (!!this.field.options.onAppendButtonClick) {
        let customFn = new Function(this.field.options.onAppendButtonClick);
        customFn.call(this);
      } else {
        this.dispatch("VFormRender", "appendButtonClick", [this]);
      }
    },
    handleOnChange(val, oldVal) {
      if (!!this.field.options.onChange) {
        let changeFn = new Function("value", "oldValue", this.field.options.onChange);
        changeFn.call(this, val, oldVal);
      }
    },
    handleOnChangeForSubForm(val, oldVal, subFormData, rowId) {
      if (!!this.field.options.onChange) {
        let changeFn = new Function("value", "oldValue", "subFormData", "rowId", this.field.options.onChange);
        changeFn.call(this, val, oldVal, subFormData, rowId);
      }
    },
    handleButtonWidgetClick() {
      if (!!this.designState) {
        return;
      }
      if (!!this.field.options.onClick) {
        let changeFn = new Function(this.field.options.onClick);
        changeFn.call(this);
      } else {
        this.dispatch("VFormRender", "buttonClick", [this]);
      }
    },
    remoteQuery(keyword) {
      if (!!this.field.options.onRemoteQuery) {
        let remoteFn = new Function("keyword", this.field.options.onRemoteQuery);
        remoteFn.call(this, keyword);
      }
    },
    getFormRef() {
      return this.refList["v_form_ref"];
    },
    getWidgetRef(widgetName, showError) {
      let foundRef = this.refList[widgetName];
      if (!foundRef && !!showError) {
        this.$message.error(this.i18nt("render.hint.refNotFound") + widgetName);
      }
      return foundRef;
    },
    getFieldEditor() {
      return this.$refs["fieldEditor"];
    },
    setValue(newValue) {
      if (!!this.field.formItemFlag) {
        let oldValue = deepClone(this.fieldModel);
        this.fieldModel = newValue;
        this.initFileList();
        this.syncUpdateFormModel(newValue);
        this.emitFieldDataChange(newValue, oldValue);
      }
    },
    getValue() {
      {
        return this.fieldModel;
      }
    },
    resetField() {
      let defaultValue = this.field.options.defaultValue;
      this.setValue(defaultValue);
      this.$nextTick(() => {
      });
      if (this.field.type === "picture-upload" || this.field.type === "file-upload") {
        this.$refs["fieldEditor"].clearFiles();
        this.fileList.splice(0, this.fileList.length);
      }
    },
    setWidgetOption(optionName, optionValue) {
      if (this.field.options.hasOwnProperty(optionName)) {
        this.field.options[optionName] = optionValue;
      }
    },
    setReadonly(flag) {
      this.field.options.readonly = flag;
    },
    setDisabled(flag) {
      this.field.options.disabled = flag;
    },
    setAppendButtonVisible(flag) {
      this.field.options.appendButton = flag;
    },
    setAppendButtonDisabled(flag) {
      this.field.options.appendButtonDisabled = flag;
    },
    setHidden(flag) {
      this.field.options.hidden = flag;
      if (!!flag) {
        this.clearFieldRules();
      } else {
        this.buildFieldRules();
      }
    },
    setRequired(flag) {
      this.field.options.required = flag;
      this.buildFieldRules();
    },
    setLabel(newLabel) {
      this.field.options.label = newLabel;
    },
    setPickerOptions(pickerOptions) {
      console.log("setPickerOptions", pickerOptions);
      return false;
    },
    focus() {
      if (!!this.getFieldEditor() && !!this.getFieldEditor().focus) {
        this.getFieldEditor().focus();
      }
    },
    clearSelectedOptions() {
      if (this.field.type !== "checkbox" && this.field.type !== "radio" && this.field.type !== "select") {
        return;
      }
      if (this.field.type === "checkbox" || this.field.type === "select" && this.field.options.multiple) {
        this.fieldModel = [];
      } else {
        this.fieldModel = "";
      }
    },
    loadOptions(options) {
      this.field.options.optionItems = deepClone(options);
    },
    reloadOptions(options) {
      this.field.options.optionItems = deepClone(options);
    },
    disableOption(optionValue) {
      this.disableOptionOfList(this.field.options.optionItems, optionValue);
    },
    enableOption(optionValue) {
      this.enableOptionOfList(this.field.options.optionItems, optionValue);
    },
    getOptionItems() {
      return this.field.options.optionItems;
    },
    setUploadHeader(name, value2) {
      this.uploadHeaders[name] = value2;
    },
    setUploadData(name, value2) {
      this.uploadData[name] = value2;
    },
    setToolbar(customToolbar) {
      this.customToolbar = customToolbar;
    },
    isSubFormItem() {
      return !!this.parentWidget ? this.parentWidget.type === "sub-form" : false;
    },
    addCssClass(className) {
      if (!this.field.options.customClass) {
        this.field.options.customClass = [className];
      } else {
        this.field.options.customClass.push(className);
      }
    },
    removeCssClass(className) {
      if (!this.field.options.customClass) {
        return;
      }
      let foundIdx = -1;
      this.field.options.customClass.map((cc, idx) => {
        if (cc === className) {
          foundIdx = idx;
        }
      });
      if (foundIdx > -1) {
        this.field.options.customClass.splice(foundIdx, 1);
      }
    }
  }
};
var buttonWidget_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$J = {
  name: "button-widget",
  componentName: "FieldWidget",
  mixins: [emitter, fieldMixin, i18n$1],
  props: {
    field: Object,
    parentWidget: Object,
    parentList: Array,
    indexOfParentList: Number,
    designer: Object,
    designState: {
      type: Boolean,
      default: false
    },
    subFormRowIndex: {
      type: Number,
      default: -1
    },
    subFormColIndex: {
      type: Number,
      default: -1
    },
    subFormRowId: {
      type: String,
      default: ""
    }
  },
  components: {
    StaticContentWrapper
  },
  computed: {},
  beforeCreate() {
  },
  created() {
    this.registerToRefList();
    this.initEventHandler();
    this.handleOnCreated();
  },
  mounted() {
    this.handleOnMounted();
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  },
  methods: {}
};
function _sfc_render$J(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_button = resolveComponent("el-button");
  const _component_static_content_wrapper = resolveComponent("static-content-wrapper");
  return openBlock(), createBlock(_component_static_content_wrapper, {
    designer: $props.designer,
    field: $props.field,
    "design-state": $props.designState,
    "display-style": $props.field.options.displayStyle,
    "parent-widget": $props.parentWidget,
    "parent-list": $props.parentList,
    "index-of-parent-list": $props.indexOfParentList,
    "sub-form-row-index": $props.subFormRowIndex,
    "sub-form-col-index": $props.subFormColIndex,
    "sub-form-row-id": $props.subFormRowId
  }, {
    default: withCtx(() => [
      createVNode(_component_el_button, {
        ref: "fieldEditor",
        type: $props.field.options.type,
        size: _ctx.widgetSize,
        plain: $props.field.options.plain,
        round: $props.field.options.round,
        circle: $props.field.options.circle,
        icon: $props.field.options.icon,
        disabled: $props.field.options.disabled,
        onClick: _ctx.handleButtonWidgetClick
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString($props.field.options.label), 1)
        ]),
        _: 1
      }, 8, ["type", "size", "plain", "round", "circle", "icon", "disabled", "onClick"])
    ]),
    _: 1
  }, 8, ["designer", "field", "design-state", "display-style", "parent-widget", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
var buttonWidget = /* @__PURE__ */ _export_sfc$1(_sfc_main$J, [["render", _sfc_render$J], ["__scopeId", "data-v-6f92d10c"]]);
var __glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": buttonWidget
}, Symbol.toStringTag, { value: "Module" }));
var formItemWrapper_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$I = {
  name: "form-item-wrapper",
  mixins: [i18n$1],
  components: {
    SvgIcon
  },
  props: {
    field: Object,
    designer: Object,
    parentWidget: Object,
    parentList: Array,
    indexOfParentList: Number,
    designState: {
      type: Boolean,
      default: false
    },
    subFormRowIndex: {
      type: Number,
      default: -1
    },
    subFormColIndex: {
      type: Number,
      default: -1
    },
    subFormRowId: {
      type: String,
      default: ""
    },
    rules: Array
  },
  inject: ["getFormConfig"],
  computed: {
    formConfig() {
      return this.getFormConfig();
    },
    selected() {
      return !!this.designer && this.field.id === this.designer.selectedId;
    },
    label() {
      if (!!this.field.options.labelHidden) {
        return "";
      }
      return this.field.options.label;
    },
    labelWidth() {
      if (!!this.field.options.labelHidden) {
        return 0;
      }
      if (!!this.field.options.labelWidth) {
        return this.field.options.labelWidth;
      }
      if (!!this.designer) {
        return this.designer.formConfig.labelWidth;
      } else {
        return this.formConfig.labelWidth;
      }
    },
    labelAlign() {
      if (!!this.field.options.labelAlign) {
        return this.field.options.labelAlign;
      }
      if (!!this.designer) {
        return this.designer.formConfig.labelAlign || "label-left-align";
      } else {
        return this.formConfig.labelAlign || "label-left-align";
      }
    },
    customClass() {
      return !!this.field.options.customClass ? this.field.options.customClass.join(" ") : "";
    },
    subFormName() {
      return !!this.parentWidget ? this.parentWidget.options.name : "";
    },
    subFormItemFlag() {
      return !!this.parentWidget ? this.parentWidget.type === "sub-form" : false;
    }
  },
  created() {
  },
  methods: {
    selectField(field) {
      if (!!this.designer) {
        this.designer.setSelected(field);
        this.designer.emitEvent("field-selected", this.parentWidget);
      }
    },
    selectParentWidget() {
      if (this.parentWidget) {
        this.designer.setSelected(this.parentWidget);
      } else {
        this.designer.clearSelected();
      }
    },
    moveUpWidget() {
      this.designer.moveUpWidget(this.parentList, this.indexOfParentList);
      this.designer.emitHistoryChange();
    },
    moveDownWidget() {
      this.designer.moveDownWidget(this.parentList, this.indexOfParentList);
      this.designer.emitHistoryChange();
    },
    removeFieldWidget() {
      if (!!this.parentList) {
        const fieldRefName = this.designer.selectedWidgetName;
        let nextSelected = null;
        if (this.parentList.length === 1) {
          if (!!this.parentWidget) {
            nextSelected = this.parentWidget;
          }
        } else if (this.parentList.length === 1 + this.indexOfParentList) {
          nextSelected = this.parentList[this.indexOfParentList - 1];
        } else {
          nextSelected = this.parentList[this.indexOfParentList + 1];
        }
        this.$nextTick(() => {
          this.parentList.splice(this.indexOfParentList, 1);
          this.designer.setSelected(nextSelected);
          this.designer.formWidget.deleteWidgetRef(fieldRefName);
          this.designer.emitHistoryChange();
        });
      }
    },
    getPropName() {
      if (this.subFormItemFlag && !this.designState) {
        return this.subFormName + "." + this.subFormRowIndex + "." + this.field.options.name + "";
      } else {
        return this.field.options.name;
      }
    }
  }
};
const _hoisted_1$l = {
  key: 0,
  class: "custom-label"
};
const _hoisted_2$f = {
  key: 0,
  class: "field-action"
};
const _hoisted_3$d = ["title"];
const _hoisted_4$6 = ["title"];
const _hoisted_5$5 = ["title"];
const _hoisted_6$3 = ["title"];
const _hoisted_7$3 = {
  key: 1,
  class: "drag-handler background-opacity"
};
const _hoisted_8$1 = ["title"];
const _hoisted_9$1 = { key: 0 };
function _sfc_render$I(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_svg_icon = resolveComponent("svg-icon");
  const _component_el_tooltip = resolveComponent("el-tooltip");
  const _component_el_form_item = resolveComponent("el-form-item");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["field-wrapper", { "design-time-bottom-margin": !!this.designer }])
  }, [
    !!$props.field.formItemFlag && (!$props.field.options.hidden || $props.designState === true) ? (openBlock(), createBlock(_component_el_form_item, {
      key: 0,
      label: _ctx.$t($options.label),
      "label-width": $options.labelWidth + "px",
      title: $props.field.options.labelTooltip,
      rules: $props.rules,
      prop: $options.getPropName(),
      class: normalizeClass([$options.selected ? "selected" : "", $options.labelAlign, $options.customClass, $props.field.options.required ? "required" : ""]),
      onClick: _cache[0] || (_cache[0] = withModifiers(($event) => $options.selectField($props.field), ["stop"]))
    }, {
      label: withCtx(() => [
        !!$props.field.options.labelIconClass ? (openBlock(), createElementBlock("span", _hoisted_1$l, [
          $props.field.options.labelIconPosition === "front" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            !!$props.field.options.labelTooltip ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createVNode(_component_el_tooltip, {
                content: $props.field.options.labelTooltip,
                effect: "light"
              }, {
                default: withCtx(() => [
                  createVNode(_component_svg_icon, {
                    "icon-class": $props.field.options.labelIconClass
                  }, null, 8, ["icon-class"])
                ]),
                _: 1
              }, 8, ["content"]),
              createTextVNode(toDisplayString(_ctx.$t($options.label)), 1)
            ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createVNode(_component_svg_icon, {
                "icon-class": $props.field.options.labelIconClass
              }, null, 8, ["icon-class"]),
              createTextVNode(toDisplayString(_ctx.$t($options.label)), 1)
            ], 64))
          ], 64)) : $props.field.options.labelIconPosition === "rear" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            !!$props.field.options.labelTooltip ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createTextVNode(toDisplayString(_ctx.$t($options.label)), 1),
              createVNode(_component_el_tooltip, {
                content: $props.field.options.labelTooltip,
                effect: "light"
              }, {
                default: withCtx(() => [
                  createVNode(_component_svg_icon, {
                    "icon-class": $props.field.options.labelIconClass
                  }, null, 8, ["icon-class"])
                ]),
                _: 1
              }, 8, ["content"])
            ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createTextVNode(toDisplayString(_ctx.$t($options.label)), 1),
              createVNode(_component_svg_icon, {
                "icon-class": $props.field.options.labelIconClass
              }, null, 8, ["icon-class"])
            ], 64))
          ], 64)) : createCommentVNode("", true)
        ])) : createCommentVNode("", true)
      ]),
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ]),
      _: 3
    }, 8, ["label", "label-width", "title", "rules", "prop", "class"])) : createCommentVNode("", true),
    !!this.designer ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
      $props.designer.selectedId === $props.field.id ? (openBlock(), createElementBlock("div", _hoisted_2$f, [
        createElementVNode("i", {
          title: _ctx.$t("designer.hint.selectParentWidget"),
          onClick: _cache[1] || (_cache[1] = withModifiers(($event) => $options.selectParentWidget($props.field), ["stop"]))
        }, [
          createVNode(_component_svg_icon, { "icon-class": "el-back" })
        ], 8, _hoisted_3$d),
        !!$props.parentList && $props.parentList.length > 1 ? (openBlock(), createElementBlock("i", {
          key: 0,
          title: _ctx.$t("designer.hint.moveUpWidget"),
          onClick: _cache[2] || (_cache[2] = withModifiers(($event) => $options.moveUpWidget($props.field), ["stop"]))
        }, [
          createVNode(_component_svg_icon, { "icon-class": "el-move-up" })
        ], 8, _hoisted_4$6)) : createCommentVNode("", true),
        !!$props.parentList && $props.parentList.length > 1 ? (openBlock(), createElementBlock("i", {
          key: 1,
          title: _ctx.$t("designer.hint.moveDownWidget"),
          onClick: _cache[3] || (_cache[3] = withModifiers(($event) => $options.moveDownWidget($props.field), ["stop"]))
        }, [
          createVNode(_component_svg_icon, { "icon-class": "el-move-down" })
        ], 8, _hoisted_5$5)) : createCommentVNode("", true),
        createElementVNode("i", {
          title: _ctx.$t("designer.hint.remove"),
          onClick: _cache[4] || (_cache[4] = withModifiers((...args) => $options.removeFieldWidget && $options.removeFieldWidget(...args), ["stop"]))
        }, [
          createVNode(_component_svg_icon, { "icon-class": "el-delete" })
        ], 8, _hoisted_6$3)
      ])) : createCommentVNode("", true),
      $props.designer.selectedId === $props.field.id ? (openBlock(), createElementBlock("div", _hoisted_7$3, [
        createElementVNode("i", {
          title: _ctx.$t("designer.hint.dragHandler")
        }, [
          createVNode(_component_svg_icon, { "icon-class": "el-drag-move" })
        ], 8, _hoisted_8$1),
        createElementVNode("i", null, toDisplayString(_ctx.$t(`designer.widgetLabel.${$props.field.type}`, `extension.widgetLabel.${$props.field.type}`)), 1),
        $props.field.options.hidden === true ? (openBlock(), createElementBlock("i", _hoisted_9$1, [
          createVNode(_component_svg_icon, { "icon-class": "el-hide" })
        ])) : createCommentVNode("", true)
      ])) : createCommentVNode("", true)
    ], 64)) : createCommentVNode("", true)
  ], 2);
}
var FormItemWrapper = /* @__PURE__ */ _export_sfc$1(_sfc_main$I, [["render", _sfc_render$I], ["__scopeId", "data-v-6e1ed8ce"]]);
var __glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": FormItemWrapper
}, Symbol.toStringTag, { value: "Module" }));
var cascaderWidget_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$H = {
  name: "cascader-widget",
  componentName: "FieldWidget",
  mixins: [emitter, fieldMixin, i18n$1],
  props: {
    field: Object,
    parentWidget: Object,
    parentList: Array,
    indexOfParentList: Number,
    designer: Object,
    designState: {
      type: Boolean,
      default: false
    },
    subFormRowIndex: {
      type: Number,
      default: -1
    },
    subFormColIndex: {
      type: Number,
      default: -1
    },
    subFormRowId: {
      type: String,
      default: ""
    }
  },
  components: {
    FormItemWrapper
  },
  data() {
    return {
      oldFieldValue: null,
      fieldModel: null,
      rules: []
    };
  },
  computed: {
    showFullPath() {
      return this.field.options.showAllLevels === void 0 || !!this.field.options.showAllLevels;
    }
  },
  beforeCreate() {
  },
  created() {
    this.initOptionItems();
    this.initFieldModel();
    this.registerToRefList();
    this.initEventHandler();
    this.buildFieldRules();
    this.handleOnCreated();
  },
  mounted() {
    this.handleOnMounted();
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  },
  methods: {}
};
const _hoisted_1$k = { class: "full-width-input" };
function _sfc_render$H(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_cascader = resolveComponent("el-cascader");
  const _component_form_item_wrapper = resolveComponent("form-item-wrapper");
  return openBlock(), createBlock(_component_form_item_wrapper, {
    designer: $props.designer,
    field: $props.field,
    rules: $data.rules,
    "design-state": $props.designState,
    "parent-widget": $props.parentWidget,
    "parent-list": $props.parentList,
    "index-of-parent-list": $props.indexOfParentList,
    "sub-form-row-index": $props.subFormRowIndex,
    "sub-form-col-index": $props.subFormColIndex,
    "sub-form-row-id": $props.subFormRowId
  }, {
    default: withCtx(() => [
      createElementVNode("div", _hoisted_1$k, [
        createVNode(_component_el_cascader, {
          ref: "fieldEditor",
          options: $props.field.options.optionItems,
          modelValue: $data.fieldModel,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.fieldModel = $event),
          disabled: $props.field.options.disabled,
          size: _ctx.widgetSize,
          clearable: $props.field.options.clearable,
          filterable: $props.field.options.filterable,
          placeholder: $props.field.options.placeholder || _ctx.$t("render.hint.selectPlaceholder"),
          "show-all-levels": $options.showFullPath,
          props: { checkStrictly: $props.field.options.checkStrictly, multiple: $props.field.options.multiple, expandTrigger: "hover" },
          onFocus: _ctx.handleFocusCustomEvent,
          onBlur: _ctx.handleBlurCustomEvent,
          onChange: _ctx.handleChangeEvent
        }, null, 8, ["options", "modelValue", "disabled", "size", "clearable", "filterable", "placeholder", "show-all-levels", "props", "onFocus", "onBlur", "onChange"])
      ])
    ]),
    _: 1
  }, 8, ["designer", "field", "rules", "design-state", "parent-widget", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
var cascaderWidget = /* @__PURE__ */ _export_sfc$1(_sfc_main$H, [["render", _sfc_render$H], ["__scopeId", "data-v-7de3ff42"]]);
var __glob_0_1$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": cascaderWidget
}, Symbol.toStringTag, { value: "Module" }));
var checkboxWidget_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$G = {
  name: "checkbox-widget",
  componentName: "FieldWidget",
  mixins: [emitter, fieldMixin, i18n$1],
  props: {
    field: Object,
    parentWidget: Object,
    parentList: Array,
    indexOfParentList: Number,
    designer: Object,
    designState: {
      type: Boolean,
      default: false
    },
    subFormRowIndex: {
      type: Number,
      default: -1
    },
    subFormColIndex: {
      type: Number,
      default: -1
    },
    subFormRowId: {
      type: String,
      default: ""
    }
  },
  components: {
    FormItemWrapper
  },
  data() {
    return {
      oldFieldValue: null,
      fieldModel: null,
      rules: []
    };
  },
  computed: {},
  beforeCreate() {
  },
  created() {
    this.initOptionItems();
    this.initFieldModel();
    this.registerToRefList();
    this.initEventHandler();
    this.buildFieldRules();
    this.handleOnCreated();
  },
  mounted() {
    this.handleOnMounted();
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  },
  methods: {}
};
function _sfc_render$G(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_checkbox_button = resolveComponent("el-checkbox-button");
  const _component_el_checkbox = resolveComponent("el-checkbox");
  const _component_el_checkbox_group = resolveComponent("el-checkbox-group");
  const _component_form_item_wrapper = resolveComponent("form-item-wrapper");
  return openBlock(), createBlock(_component_form_item_wrapper, {
    designer: $props.designer,
    field: $props.field,
    rules: $data.rules,
    "design-state": $props.designState,
    "parent-widget": $props.parentWidget,
    "parent-list": $props.parentList,
    "index-of-parent-list": $props.indexOfParentList,
    "sub-form-row-index": $props.subFormRowIndex,
    "sub-form-col-index": $props.subFormColIndex,
    "sub-form-row-id": $props.subFormRowId
  }, {
    default: withCtx(() => [
      createVNode(_component_el_checkbox_group, {
        ref: "fieldEditor",
        modelValue: $data.fieldModel,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.fieldModel = $event),
        disabled: $props.field.options.disabled,
        size: _ctx.widgetSize,
        onChange: _ctx.handleChangeEvent
      }, {
        default: withCtx(() => [
          !!$props.field.options.buttonStyle ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList($props.field.options.optionItems, (item, index) => {
            return openBlock(), createBlock(_component_el_checkbox_button, {
              key: index,
              label: item.value,
              disabled: item.disabled,
              border: $props.field.options.border,
              style: normalizeStyle({ display: $props.field.options.displayStyle })
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(item.label), 1)
              ]),
              _: 2
            }, 1032, ["label", "disabled", "border", "style"]);
          }), 128)) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList($props.field.options.optionItems, (item, index) => {
            return openBlock(), createBlock(_component_el_checkbox, {
              key: index,
              label: item.value,
              disabled: item.disabled,
              border: $props.field.options.border,
              style: normalizeStyle({ display: $props.field.options.displayStyle })
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(item.label), 1)
              ]),
              _: 2
            }, 1032, ["label", "disabled", "border", "style"]);
          }), 128))
        ]),
        _: 1
      }, 8, ["modelValue", "disabled", "size", "onChange"])
    ]),
    _: 1
  }, 8, ["designer", "field", "rules", "design-state", "parent-widget", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
var checkboxWidget = /* @__PURE__ */ _export_sfc$1(_sfc_main$G, [["render", _sfc_render$G], ["__scopeId", "data-v-501920b3"]]);
var __glob_0_2$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": checkboxWidget
}, Symbol.toStringTag, { value: "Module" }));
var colorWidget_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$F = {
  name: "color-widget",
  componentName: "FieldWidget",
  mixins: [emitter, fieldMixin, i18n$1],
  props: {
    field: Object,
    parentWidget: Object,
    parentList: Array,
    indexOfParentList: Number,
    designer: Object,
    designState: {
      type: Boolean,
      default: false
    },
    subFormRowIndex: {
      type: Number,
      default: -1
    },
    subFormColIndex: {
      type: Number,
      default: -1
    },
    subFormRowId: {
      type: String,
      default: ""
    }
  },
  components: {
    FormItemWrapper
  },
  data() {
    return {
      oldFieldValue: null,
      fieldModel: null,
      rules: []
    };
  },
  computed: {},
  beforeCreate() {
  },
  created() {
    this.initFieldModel();
    this.registerToRefList();
    this.initEventHandler();
    this.buildFieldRules();
    this.handleOnCreated();
  },
  mounted() {
    this.handleOnMounted();
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  },
  methods: {}
};
function _sfc_render$F(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_color_picker = resolveComponent("el-color-picker");
  const _component_form_item_wrapper = resolveComponent("form-item-wrapper");
  return openBlock(), createBlock(_component_form_item_wrapper, {
    designer: $props.designer,
    field: $props.field,
    rules: $data.rules,
    "design-state": $props.designState,
    "parent-widget": $props.parentWidget,
    "parent-list": $props.parentList,
    "index-of-parent-list": $props.indexOfParentList,
    "sub-form-row-index": $props.subFormRowIndex,
    "sub-form-col-index": $props.subFormColIndex,
    "sub-form-row-id": $props.subFormRowId
  }, {
    default: withCtx(() => [
      createVNode(_component_el_color_picker, {
        ref: "fieldEditor",
        modelValue: $data.fieldModel,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.fieldModel = $event),
        size: _ctx.widgetSize,
        disabled: $props.field.options.disabled,
        onChange: _ctx.handleChangeEvent
      }, null, 8, ["modelValue", "size", "disabled", "onChange"])
    ]),
    _: 1
  }, 8, ["designer", "field", "rules", "design-state", "parent-widget", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
var colorWidget = /* @__PURE__ */ _export_sfc$1(_sfc_main$F, [["render", _sfc_render$F], ["__scopeId", "data-v-1aa76420"]]);
var __glob_0_3$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": colorWidget
}, Symbol.toStringTag, { value: "Module" }));
var dateRangeWidget_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$E = {
  name: "date-range-widget",
  componentName: "FieldWidget",
  mixins: [emitter, fieldMixin, i18n$1],
  props: {
    field: Object,
    parentWidget: Object,
    parentList: Array,
    indexOfParentList: Number,
    designer: Object,
    designState: {
      type: Boolean,
      default: false
    },
    subFormRowIndex: {
      type: Number,
      default: -1
    },
    subFormColIndex: {
      type: Number,
      default: -1
    },
    subFormRowId: {
      type: String,
      default: ""
    }
  },
  components: {
    FormItemWrapper
  },
  data() {
    return {
      oldFieldValue: null,
      fieldModel: null,
      rules: []
    };
  },
  computed: {},
  beforeCreate() {
  },
  created() {
    this.initFieldModel();
    this.registerToRefList();
    this.initEventHandler();
    this.buildFieldRules();
    this.handleOnCreated();
  },
  mounted() {
    this.handleOnMounted();
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  },
  methods: {}
};
function _sfc_render$E(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_date_picker = resolveComponent("el-date-picker");
  const _component_form_item_wrapper = resolveComponent("form-item-wrapper");
  return openBlock(), createBlock(_component_form_item_wrapper, {
    designer: $props.designer,
    field: $props.field,
    rules: $data.rules,
    "design-state": $props.designState,
    "parent-widget": $props.parentWidget,
    "parent-list": $props.parentList,
    "index-of-parent-list": $props.indexOfParentList,
    "sub-form-row-index": $props.subFormRowIndex,
    "sub-form-col-index": $props.subFormColIndex,
    "sub-form-row-id": $props.subFormRowId
  }, {
    default: withCtx(() => [
      createElementVNode("div", {
        class: normalizeClass([!!$props.field.options.autoFullWidth ? "auto-full-width" : ""])
      }, [
        createVNode(_component_el_date_picker, {
          ref: "fieldEditor",
          type: $props.field.options.type,
          modelValue: $data.fieldModel,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.fieldModel = $event),
          disabled: $props.field.options.disabled,
          readonly: $props.field.options.readonly,
          size: _ctx.widgetSize,
          clearable: $props.field.options.clearable,
          editable: $props.field.options.editable,
          format: $props.field.options.format,
          "value-format": $props.field.options.valueFormat,
          "default-time": $props.field.options.defaultTime,
          "start-placeholder": $props.field.options.startPlaceholder || _ctx.$t("render.hint.startDatePlaceholder"),
          "end-placeholder": $props.field.options.endPlaceholder || _ctx.$t("render.hint.endDatePlaceholder"),
          onFocus: _ctx.handleFocusCustomEvent,
          onBlur: _ctx.handleBlurCustomEvent,
          onChange: _ctx.handleChangeEvent
        }, null, 8, ["type", "modelValue", "disabled", "readonly", "size", "clearable", "editable", "format", "value-format", "default-time", "start-placeholder", "end-placeholder", "onFocus", "onBlur", "onChange"])
      ], 2)
    ]),
    _: 1
  }, 8, ["designer", "field", "rules", "design-state", "parent-widget", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
var dateRangeWidget = /* @__PURE__ */ _export_sfc$1(_sfc_main$E, [["render", _sfc_render$E], ["__scopeId", "data-v-3a8016d4"]]);
var __glob_0_4$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": dateRangeWidget
}, Symbol.toStringTag, { value: "Module" }));
var dateWidget_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$D = {
  name: "date-widget",
  componentName: "FieldWidget",
  mixins: [emitter, fieldMixin, i18n$1],
  props: {
    field: Object,
    parentWidget: Object,
    parentList: Array,
    indexOfParentList: Number,
    designer: Object,
    designState: {
      type: Boolean,
      default: false
    },
    subFormRowIndex: {
      type: Number,
      default: -1
    },
    subFormColIndex: {
      type: Number,
      default: -1
    },
    subFormRowId: {
      type: String,
      default: ""
    }
  },
  components: {
    FormItemWrapper
  },
  data() {
    return {
      oldFieldValue: null,
      fieldModel: null,
      rules: []
    };
  },
  computed: {},
  beforeCreate() {
  },
  created() {
    this.initFieldModel();
    this.registerToRefList();
    this.initEventHandler();
    this.buildFieldRules();
    this.handleOnCreated();
  },
  mounted() {
    this.handleOnMounted();
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  },
  methods: {}
};
function _sfc_render$D(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_date_picker = resolveComponent("el-date-picker");
  const _component_form_item_wrapper = resolveComponent("form-item-wrapper");
  return openBlock(), createBlock(_component_form_item_wrapper, {
    designer: $props.designer,
    field: $props.field,
    rules: $data.rules,
    "design-state": $props.designState,
    "parent-widget": $props.parentWidget,
    "parent-list": $props.parentList,
    "index-of-parent-list": $props.indexOfParentList,
    "sub-form-row-index": $props.subFormRowIndex,
    "sub-form-col-index": $props.subFormColIndex,
    "sub-form-row-id": $props.subFormRowId
  }, {
    default: withCtx(() => [
      createVNode(_component_el_date_picker, {
        ref: "fieldEditor",
        type: $props.field.options.type,
        modelValue: $data.fieldModel,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.fieldModel = $event),
        class: normalizeClass([!!$props.field.options.autoFullWidth ? "auto-full-width" : ""]),
        readonly: $props.field.options.readonly,
        disabled: $props.field.options.disabled,
        size: _ctx.widgetSize,
        clearable: $props.field.options.clearable,
        editable: $props.field.options.editable,
        format: $props.field.options.format,
        "value-format": $props.field.options.valueFormat,
        "default-time": $props.field.options.defaultTime,
        placeholder: $props.field.options.placeholder || _ctx.$t("render.hint.datePlaceholder"),
        onFocus: _ctx.handleFocusCustomEvent,
        onBlur: _ctx.handleBlurCustomEvent,
        onChange: _ctx.handleChangeEvent
      }, null, 8, ["type", "modelValue", "class", "readonly", "disabled", "size", "clearable", "editable", "format", "value-format", "default-time", "placeholder", "onFocus", "onBlur", "onChange"])
    ]),
    _: 1
  }, 8, ["designer", "field", "rules", "design-state", "parent-widget", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
var dateWidget = /* @__PURE__ */ _export_sfc$1(_sfc_main$D, [["render", _sfc_render$D], ["__scopeId", "data-v-875ea7ee"]]);
var __glob_0_5$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": dateWidget
}, Symbol.toStringTag, { value: "Module" }));
var dividerWidget_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$C = {
  name: "divider-widget",
  componentName: "FieldWidget",
  mixins: [emitter, fieldMixin, i18n$1],
  props: {
    field: Object,
    parentWidget: Object,
    parentList: Array,
    indexOfParentList: Number,
    designer: Object,
    designState: {
      type: Boolean,
      default: false
    },
    subFormRowIndex: {
      type: Number,
      default: -1
    },
    subFormColIndex: {
      type: Number,
      default: -1
    },
    subFormRowId: {
      type: String,
      default: ""
    }
  },
  components: {
    StaticContentWrapper
  },
  computed: {},
  beforeCreate() {
  },
  created() {
    this.registerToRefList();
    this.initEventHandler();
    this.handleOnCreated();
  },
  mounted() {
    this.handleOnMounted();
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  },
  methods: {}
};
function _sfc_render$C(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_divider = resolveComponent("el-divider");
  const _component_static_content_wrapper = resolveComponent("static-content-wrapper");
  return openBlock(), createBlock(_component_static_content_wrapper, {
    designer: $props.designer,
    field: $props.field,
    "design-state": $props.designState,
    "parent-widget": $props.parentWidget,
    "parent-list": $props.parentList,
    "index-of-parent-list": $props.indexOfParentList,
    "sub-form-row-index": $props.subFormRowIndex,
    "sub-form-col-index": $props.subFormColIndex,
    "sub-form-row-id": $props.subFormRowId
  }, {
    default: withCtx(() => [
      createVNode(_component_el_divider, {
        ref: "fieldEditor",
        direction: "horizontal",
        "content-position": $props.field.options.contentPosition
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString($props.field.options.label), 1)
        ]),
        _: 1
      }, 8, ["content-position"])
    ]),
    _: 1
  }, 8, ["designer", "field", "design-state", "parent-widget", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
var dividerWidget = /* @__PURE__ */ _export_sfc$1(_sfc_main$C, [["render", _sfc_render$C], ["__scopeId", "data-v-a326e5e0"]]);
var __glob_0_6$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": dividerWidget
}, Symbol.toStringTag, { value: "Module" }));
var fileUploadWidget_vue_vue_type_style_index_0_scoped_true_lang = "";
let selectFileText = "'" + translate("render.hint.selectFile") + "'";
const _sfc_main$B = {
  name: "file-upload-widget",
  componentName: "FieldWidget",
  mixins: [emitter, fieldMixin, i18n$1],
  props: {
    field: Object,
    parentWidget: Object,
    parentList: Array,
    indexOfParentList: Number,
    designer: Object,
    designState: {
      type: Boolean,
      default: false
    },
    subFormRowIndex: {
      type: Number,
      default: -1
    },
    subFormColIndex: {
      type: Number,
      default: -1
    },
    subFormRowId: {
      type: String,
      default: ""
    }
  },
  components: {
    SvgIcon,
    FormItemWrapper
  },
  data() {
    return {
      oldFieldValue: null,
      fieldModel: [],
      rules: [],
      uploadHeaders: {},
      uploadData: {
        key: ""
      },
      fileList: [],
      uploadBtnHidden: false,
      styleVariables: {
        "--select-file-action": selectFileText
      }
    };
  },
  computed: {},
  beforeCreate() {
  },
  created() {
    this.handleUploadHeaders();
    this.initFieldModel();
    this.registerToRefList();
    this.initEventHandler();
    this.buildFieldRules();
    this.handleOnCreated();
  },
  mounted() {
    this.handleOnMounted();
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  },
  methods: {
    handleFileExceed() {
      let uploadLimit = this.field.options.limit;
      this.$message.warning(this.$t("render.hint.uploadExceed").replace("${uploadLimit}", uploadLimit));
    },
    beforeFileUpload(file) {
      if (!!this.field.options && !!this.field.options.fileTypes && this.field.options.fileTypes.length > 0) {
        let fileTypeCheckResult = false;
        let extFileName = file.name.substring(file.name.lastIndexOf(".") + 1);
        if (!!this.field.options && !!this.field.options.fileTypes) {
          let uploadFileTypes = this.field.options.fileTypes;
          if (uploadFileTypes.length > 0) {
            fileTypeCheckResult = uploadFileTypes.some((ft) => {
              return extFileName.toLowerCase() === ft.toLowerCase();
            });
          }
        }
        if (!fileTypeCheckResult) {
          this.$message.error(this.$t("render.hint.unsupportedFileType") + extFileName);
          return false;
        }
      }
      let fileSizeCheckResult = false;
      if (!!this.field.options.fileMaxSize) {
        fileSizeCheckResult = file.size / 1024 / 1024 <= this.field.options.fileMaxSize;
        if (!fileSizeCheckResult) {
          this.$message.error(this.i18nt("render.hint.fileSizeExceed") + this.field.options.fileMaxSize + "MB");
          return false;
        }
      }
      this.uploadData.key = file.name;
      return this.handleOnBeforeUpload(file);
    },
    handleOnBeforeUpload(file) {
      if (!!this.field.options.onBeforeUpload) {
        let bfFunc = new Function("file", this.field.options.onBeforeUpload);
        let result = bfFunc.call(this, file);
        if (typeof result === "boolean") {
          return result;
        } else {
          return true;
        }
      }
      return true;
    },
    updateFieldModelAndEmitDataChangeForUpload(fileList, customResult, defaultResult) {
      let oldValue = deepClone(this.fieldModel);
      if (!!customResult && !!customResult.name && !!customResult.url) {
        this.fieldModel.push({
          name: customResult.name,
          url: customResult.url
        });
      } else if (!!defaultResult && !!defaultResult.name && !!defaultResult.url) {
        this.fieldModel.push({
          name: defaultResult.name,
          url: defaultResult.url
        });
      } else {
        this.fieldModel = deepClone(fileList);
      }
      this.syncUpdateFormModel(this.fieldModel);
      this.emitFieldDataChange(this.fieldModel, oldValue);
    },
    handleFileUpload(res, file, fileList) {
      if (file.status === "success") {
        let customResult = null;
        if (!!this.field.options.onUploadSuccess) {
          let mountFunc = new Function("result", "file", "fileList", this.field.options.onUploadSuccess);
          customResult = mountFunc.call(this, res, file, fileList);
        }
        this.updateFieldModelAndEmitDataChangeForUpload(fileList, customResult, res);
        if (!!customResult && !!customResult.name) {
          file.name = customResult.name;
        } else {
          file.name = file.name || res.name || res.fileName || res.filename;
        }
        if (!!customResult && !!customResult.url) {
          file.url = customResult.url;
        } else {
          file.url = file.url || res.url;
        }
        this.fileList = deepClone(fileList);
        this.uploadBtnHidden = fileList.length >= this.field.options.limit;
      }
    },
    updateFieldModelAndEmitDataChangeForRemove(deletedFileIdx, fileList) {
      let oldValue = deepClone(this.fieldModel);
      this.fieldModel.splice(deletedFileIdx, 1);
      this.syncUpdateFormModel(this.fieldModel);
      this.emitFieldDataChange(this.fieldModel, oldValue);
    },
    removeUploadFile(fileName, fileUrl, fileUid) {
      let foundIdx = -1;
      let foundFile = null;
      this.fileList.forEach((file, idx) => {
        if (file.name === fileName && (file.url === fileUrl || !!fileUid && file.uid === fileUid)) {
          foundIdx = idx;
          foundFile = file;
        }
      });
      if (foundIdx >= 0) {
        this.fileList.splice(foundIdx, 1);
        this.updateFieldModelAndEmitDataChangeForRemove(foundIdx, this.fileList);
        this.uploadBtnHidden = this.fileList.length >= this.field.options.limit;
        if (!!this.field.options.onFileRemove) {
          let customFn = new Function("file", "fileList", this.field.options.onFileRemove);
          customFn.call(this, foundFile, this.fileList);
        }
      }
    },
    handleUploadError(err, file, fileList) {
      if (!!this.field.options.onUploadError) {
        let customFn = new Function("error", "file", "fileList", this.field.options.onUploadError);
        customFn.call(this, err, file, fileList);
      } else {
        this.$message({
          message: this.$t("render.hint.uploadError") + err,
          duration: 3e3,
          type: "error"
        });
      }
    },
    handlePreview(file) {
      this.emit$("filePreview", file);
      this.dispatch("VFormRender", "filePreview", file);
    },
    handleUploadHeaders() {
      console.log({ sessionStorage });
      const cookieToken = sessionStorage.getItem("token");
      console.log({ cookieToken });
      if (cookieToken)
        this.uploadHeaders = { "Authorization": `Bearer ${cookieToken}` };
    },
    getCookie(name) {
      var strCookies = document.cookie;
      var array = strCookies.split(";");
      for (var i = 0; i < array.length; i++) {
        var item = array[i].split("=");
        if (item[0].replace(" ", "") === name) {
          return item[1];
        }
      }
      return null;
    }
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-634475b0"), n = n(), popScopeId(), n);
const _hoisted_1$j = {
  key: 0,
  class: "el-upload__tip"
};
const _hoisted_2$e = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("i", { class: "el-icon-plus avatar-uploader-icon" }, null, -1));
const _hoisted_3$c = { class: "upload-file-list" };
const _hoisted_4$5 = ["title", "onClick"];
const _hoisted_5$4 = ["title", "onClick"];
function _sfc_render$B(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_svg_icon = resolveComponent("svg-icon");
  const _component_el_upload = resolveComponent("el-upload");
  const _component_form_item_wrapper = resolveComponent("form-item-wrapper");
  return openBlock(), createBlock(_component_form_item_wrapper, {
    designer: $props.designer,
    field: $props.field,
    rules: $data.rules,
    "design-state": $props.designState,
    "parent-widget": $props.parentWidget,
    "parent-list": $props.parentList,
    "index-of-parent-list": $props.indexOfParentList,
    "sub-form-row-index": $props.subFormRowIndex,
    "sub-form-col-index": $props.subFormColIndex,
    "sub-form-row-id": $props.subFormRowId
  }, {
    default: withCtx(() => [
      createVNode(_component_el_upload, {
        ref: "fieldEditor",
        disabled: $props.field.options.disabled,
        name: "files",
        style: normalizeStyle($data.styleVariables),
        class: normalizeClass(["dynamicPseudoAfter", { "hideUploadDiv": $data.uploadBtnHidden }]),
        action: $props.field.options.uploadURL,
        headers: $data.uploadHeaders,
        data: $data.uploadData,
        "with-credentials": $props.field.options.withCredentials,
        multiple: $props.field.options.multipleSelect,
        "file-list": $data.fileList,
        "show-file-list": $props.field.options.showFileList,
        limit: $props.field.options.limit,
        "on-exceed": $options.handleFileExceed,
        "before-upload": $options.beforeFileUpload,
        "on-success": $options.handleFileUpload,
        "on-error": $options.handleUploadError
      }, {
        tip: withCtx(() => [
          !!$props.field.options.uploadTip ? (openBlock(), createElementBlock("div", _hoisted_1$j, toDisplayString($props.field.options.uploadTip), 1)) : createCommentVNode("", true)
        ]),
        default: withCtx(() => [
          createVNode(_component_svg_icon, { "icon-class": "el-plus" }),
          _hoisted_2$e
        ]),
        file: withCtx(({ file }) => [
          createElementVNode("div", _hoisted_3$c, [
            createElementVNode("span", {
              class: "upload-file-name",
              title: file.name,
              onClick: ($event) => $options.handlePreview(file)
            }, toDisplayString(file.name), 9, _hoisted_4$5),
            !$props.field.options.disabled ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: "file-action",
              title: _ctx.$t("render.hint.removeFile"),
              onClick: ($event) => $options.removeUploadFile(file.name, file.url, file.uid)
            }, [
              createVNode(_component_svg_icon, { "icon-class": "el-delete" })
            ], 8, _hoisted_5$4)) : createCommentVNode("", true)
          ])
        ]),
        _: 1
      }, 8, ["disabled", "style", "action", "headers", "data", "with-credentials", "multiple", "file-list", "show-file-list", "class", "limit", "on-exceed", "before-upload", "on-success", "on-error"])
    ]),
    _: 1
  }, 8, ["designer", "field", "rules", "design-state", "parent-widget", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
var fileUploadWidget = /* @__PURE__ */ _export_sfc$1(_sfc_main$B, [["render", _sfc_render$B], ["__scopeId", "data-v-634475b0"]]);
var __glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": fileUploadWidget
}, Symbol.toStringTag, { value: "Module" }));
var htmlTextWidget_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$A = {
  name: "html-text-widget",
  componentName: "FieldWidget",
  mixins: [emitter, fieldMixin, i18n$1],
  props: {
    field: Object,
    parentWidget: Object,
    parentList: Array,
    indexOfParentList: Number,
    designer: Object,
    designState: {
      type: Boolean,
      default: false
    },
    subFormRowIndex: {
      type: Number,
      default: -1
    },
    subFormColIndex: {
      type: Number,
      default: -1
    },
    subFormRowId: {
      type: String,
      default: ""
    }
  },
  components: {
    StaticContentWrapper
  },
  computed: {},
  beforeCreate() {
  },
  created() {
    this.registerToRefList();
    this.initEventHandler();
    this.handleOnCreated();
  },
  mounted() {
    this.handleOnMounted();
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  },
  methods: {}
};
const _hoisted_1$i = ["innerHTML"];
function _sfc_render$A(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_static_content_wrapper = resolveComponent("static-content-wrapper");
  return openBlock(), createBlock(_component_static_content_wrapper, {
    designer: $props.designer,
    field: $props.field,
    "design-state": $props.designState,
    "parent-widget": $props.parentWidget,
    "parent-list": $props.parentList,
    "index-of-parent-list": $props.indexOfParentList,
    "sub-form-row-index": $props.subFormRowIndex,
    "sub-form-col-index": $props.subFormColIndex,
    "sub-form-row-id": $props.subFormRowId
  }, {
    default: withCtx(() => [
      createElementVNode("div", {
        ref: "fieldEditor",
        innerHTML: $props.field.options.htmlContent
      }, null, 8, _hoisted_1$i)
    ]),
    _: 1
  }, 8, ["designer", "field", "design-state", "parent-widget", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
var htmlTextWidget = /* @__PURE__ */ _export_sfc$1(_sfc_main$A, [["render", _sfc_render$A], ["__scopeId", "data-v-a0d236d6"]]);
var __glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": htmlTextWidget
}, Symbol.toStringTag, { value: "Module" }));
var inputWidget_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$z = {
  name: "input-widget",
  componentName: "FieldWidget",
  mixins: [emitter, fieldMixin, i18n$1],
  props: {
    field: Object,
    parentWidget: Object,
    parentList: Array,
    indexOfParentList: Number,
    designer: Object,
    designState: {
      type: Boolean,
      default: false
    },
    subFormRowIndex: {
      type: Number,
      default: -1
    },
    subFormColIndex: {
      type: Number,
      default: -1
    },
    subFormRowId: {
      type: String,
      default: ""
    }
  },
  components: {
    FormItemWrapper,
    SvgIcon
  },
  data() {
    return {
      oldFieldValue: null,
      fieldModel: null,
      rules: []
    };
  },
  computed: {
    inputType() {
      if (this.field.options.type === "number") {
        return "text";
      }
      return this.field.options.type;
    }
  },
  beforeCreate() {
  },
  created() {
    this.initFieldModel();
    this.registerToRefList();
    this.initEventHandler();
    this.buildFieldRules();
    this.handleOnCreated();
  },
  mounted() {
    this.handleOnMounted();
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  },
  methods: {}
};
function _sfc_render$z(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_svg_icon = resolveComponent("svg-icon");
  const _component_el_button = resolveComponent("el-button");
  const _component_el_input = resolveComponent("el-input");
  const _component_form_item_wrapper = resolveComponent("form-item-wrapper");
  return openBlock(), createBlock(_component_form_item_wrapper, {
    designer: $props.designer,
    field: $props.field,
    rules: $data.rules,
    "design-state": $props.designState,
    "parent-widget": $props.parentWidget,
    "parent-list": $props.parentList,
    "index-of-parent-list": $props.indexOfParentList,
    "sub-form-row-index": $props.subFormRowIndex,
    "sub-form-col-index": $props.subFormColIndex,
    "sub-form-row-id": $props.subFormRowId
  }, {
    default: withCtx(() => [
      createVNode(_component_el_input, {
        ref: "fieldEditor",
        modelValue: $data.fieldModel,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.fieldModel = $event),
        disabled: $props.field.options.disabled,
        readonly: $props.field.options.readonly,
        size: _ctx.widgetSize,
        class: "hide-spin-button",
        type: $options.inputType,
        "show-password": $props.field.options.showPassword,
        placeholder: $props.field.options.placeholder,
        clearable: $props.field.options.clearable,
        minlength: $props.field.options.minLength,
        maxlength: $props.field.options.maxLength,
        "show-word-limit": $props.field.options.showWordLimit,
        "prefix-icon": $props.field.options.prefixIcon,
        "suffix-icon": $props.field.options.suffixIcon,
        onFocus: _ctx.handleFocusCustomEvent,
        onBlur: _ctx.handleBlurCustomEvent,
        onInput: _ctx.handleInputCustomEvent,
        onChange: _ctx.handleChangeEvent
      }, createSlots({ _: 2 }, [
        $props.field.options.appendButton ? {
          name: "append",
          fn: withCtx(() => [
            createVNode(_component_el_button, {
              disabled: $props.field.options.disabled || $props.field.options.appendButtonDisabled,
              onClick: _ctx.emitAppendButtonClick
            }, {
              default: withCtx(() => [
                createVNode(_component_svg_icon, {
                  "icon-class": $props.field.options.buttonIcon
                }, null, 8, ["icon-class"])
              ]),
              _: 1
            }, 8, ["disabled", "onClick"])
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["modelValue", "disabled", "readonly", "size", "type", "show-password", "placeholder", "clearable", "minlength", "maxlength", "show-word-limit", "prefix-icon", "suffix-icon", "onFocus", "onBlur", "onInput", "onChange"])
    ]),
    _: 1
  }, 8, ["designer", "field", "rules", "design-state", "parent-widget", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
var inputWidget = /* @__PURE__ */ _export_sfc$1(_sfc_main$z, [["render", _sfc_render$z], ["__scopeId", "data-v-b6d96cc0"]]);
var __glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": inputWidget
}, Symbol.toStringTag, { value: "Module" }));
var numberWidget_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$y = {
  name: "number-widget",
  componentName: "FieldWidget",
  mixins: [emitter, fieldMixin, i18n$1],
  props: {
    field: Object,
    parentWidget: Object,
    parentList: Array,
    indexOfParentList: Number,
    designer: Object,
    designState: {
      type: Boolean,
      default: false
    },
    subFormRowIndex: {
      type: Number,
      default: -1
    },
    subFormColIndex: {
      type: Number,
      default: -1
    },
    subFormRowId: {
      type: String,
      default: ""
    }
  },
  components: {
    FormItemWrapper
  },
  data() {
    return {
      oldFieldValue: null,
      fieldModel: null,
      rules: []
    };
  },
  computed: {},
  beforeCreate() {
  },
  created() {
    this.initFieldModel();
    this.registerToRefList();
    this.initEventHandler();
    this.buildFieldRules();
    this.handleOnCreated();
  },
  mounted() {
    this.handleOnMounted();
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  },
  methods: {}
};
function _sfc_render$y(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_input_number = resolveComponent("el-input-number");
  const _component_form_item_wrapper = resolveComponent("form-item-wrapper");
  return openBlock(), createBlock(_component_form_item_wrapper, {
    designer: $props.designer,
    field: $props.field,
    rules: $data.rules,
    "design-state": $props.designState,
    "parent-widget": $props.parentWidget,
    "parent-list": $props.parentList,
    "index-of-parent-list": $props.indexOfParentList,
    "sub-form-row-index": $props.subFormRowIndex,
    "sub-form-col-index": $props.subFormColIndex,
    "sub-form-row-id": $props.subFormRowId
  }, {
    default: withCtx(() => [
      createVNode(_component_el_input_number, {
        ref: "fieldEditor",
        modelValue: $data.fieldModel,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.fieldModel = $event),
        class: "full-width-input",
        disabled: $props.field.options.disabled,
        size: _ctx.widgetSize,
        "controls-position": $props.field.options.controlsPosition,
        placeholder: $props.field.options.placeholder,
        min: $props.field.options.min,
        max: $props.field.options.max,
        precision: $props.field.options.precision,
        step: $props.field.options.step,
        onFocus: _ctx.handleFocusCustomEvent,
        onBlur: _ctx.handleBlurCustomEvent,
        onChange: _ctx.handleChangeEvent
      }, null, 8, ["modelValue", "disabled", "size", "controls-position", "placeholder", "min", "max", "precision", "step", "onFocus", "onBlur", "onChange"])
    ]),
    _: 1
  }, 8, ["designer", "field", "rules", "design-state", "parent-widget", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
var numberWidget = /* @__PURE__ */ _export_sfc$1(_sfc_main$y, [["render", _sfc_render$y], ["__scopeId", "data-v-78aba4ad"]]);
var __glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": numberWidget
}, Symbol.toStringTag, { value: "Module" }));
var pictureUploadWidget_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$x = {
  name: "picture-upload-widget",
  componentName: "FieldWidget",
  mixins: [emitter, fieldMixin, i18n$1],
  props: {
    field: Object,
    parentWidget: Object,
    parentList: Array,
    indexOfParentList: Number,
    designer: Object,
    designState: {
      type: Boolean,
      default: false
    },
    subFormRowIndex: {
      type: Number,
      default: -1
    },
    subFormColIndex: {
      type: Number,
      default: -1
    },
    subFormRowId: {
      type: String,
      default: ""
    }
  },
  components: {
    FormItemWrapper,
    SvgIcon
  },
  data() {
    return {
      oldFieldValue: null,
      fieldModel: [],
      rules: [],
      uploadHeaders: {},
      uploadData: {
        key: ""
      },
      fileList: [],
      fileListBeforeRemove: [],
      uploadBtnHidden: false,
      previewIndex: 1
    };
  },
  computed: {
    previewList() {
      return this.fileList.map((el) => el.url);
    }
  },
  beforeCreate() {
  },
  created() {
    this.handleUploadHeaders();
    this.initFieldModel();
    this.registerToRefList();
    this.initEventHandler();
    this.buildFieldRules();
    this.handleOnCreated();
  },
  mounted() {
    this.handleOnMounted();
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  },
  methods: {
    handlePictureExceed() {
      let uploadLimit = this.field.options.limit;
      this.$message.warning(this.$t("render.hint.uploadExceed").replace("${uploadLimit}", uploadLimit));
    },
    beforePictureUpload(file) {
      if (!!this.field.options && !!this.field.options.fileTypes && this.field.options.fileTypes.length > 0) {
        let fileTypeCheckResult = false;
        if (!!this.field.options && !!this.field.options.fileTypes) {
          let uploadFileTypes = this.field.options.fileTypes;
          if (uploadFileTypes.length > 0) {
            fileTypeCheckResult = uploadFileTypes.some((ft) => {
              return file.type === "image/" + ft;
            });
          }
        }
        if (!fileTypeCheckResult) {
          this.$message.error(this.$t("render.hint.unsupportedFileType") + file.type);
          return false;
        }
      }
      let fileSizeCheckResult = false;
      let uploadFileMaxSize = 5;
      if (!!this.field.options && !!this.field.options.fileMaxSize) {
        uploadFileMaxSize = this.field.options.fileMaxSize;
      }
      fileSizeCheckResult = file.size / 1024 / 1024 <= uploadFileMaxSize;
      if (!fileSizeCheckResult) {
        this.$message.error(this.$("render.hint.fileSizeExceed") + uploadFileMaxSize + "MB");
        return false;
      }
      this.uploadData.key = file.name;
      return this.handleOnBeforeUpload(file);
    },
    handleOnBeforeUpload(file) {
      if (!!this.field.options.onBeforeUpload) {
        let bfFunc = new Function("file", this.field.options.onBeforeUpload);
        let result = bfFunc.call(this, file);
        if (typeof result === "boolean") {
          return result;
        } else {
          return true;
        }
      }
      return true;
    },
    updateFieldModelAndEmitDataChangeForUpload(fileList, customResult, defaultResult) {
      let oldValue = deepClone(this.fieldModel);
      if (!!customResult && !!customResult.name && !!customResult.url) {
        this.fieldModel.push({
          name: customResult.name,
          url: customResult.url
        });
      } else if (!!defaultResult && !!defaultResult.name && !!defaultResult.url) {
        this.fieldModel.push({
          name: defaultResult.name,
          url: defaultResult.url
        });
      } else {
        this.fieldModel = deepClone(fileList);
      }
      this.syncUpdateFormModel(this.fieldModel);
      this.emitFieldDataChange(this.fieldModel, oldValue);
    },
    handlePictureUpload(res, file, fileList) {
      if (file.status === "success") {
        let customResult = null;
        if (!!this.field.options.onUploadSuccess) {
          let customFn = new Function("result", "file", "fileList", this.field.options.onUploadSuccess);
          customResult = customFn.call(this, res, file, fileList);
        }
        this.updateFieldModelAndEmitDataChangeForUpload(fileList, customResult, res);
        this.fileList = deepClone(fileList);
        this.uploadBtnHidden = fileList.length >= this.field.options.limit;
      }
    },
    updateFieldModelAndEmitDataChangeForRemove(file) {
      let oldValue = deepClone(this.fieldModel);
      let foundFileIdx = -1;
      this.fileListBeforeRemove.map((fi, idx) => {
        if (fi.name === file.name && (fi.url === file.url || !!fi.uid && fi.uid === file.uid)) {
          foundFileIdx = idx;
        }
      });
      if (foundFileIdx > -1) {
        this.fieldModel.splice(foundFileIdx, 1);
      }
      this.syncUpdateFormModel(this.fieldModel);
      this.emitFieldDataChange(this.fieldModel, oldValue);
    },
    handleBeforeRemove(fileList) {
      this.fileListBeforeRemove = deepClone(fileList);
    },
    handlePictureRemove(file) {
      this.handleBeforeRemove(this.fileList);
      this.fileList.splice(this.fileList.indexOf(file), 1);
      this.updateFieldModelAndEmitDataChangeForRemove(file);
      let fileList = deepClone(this.fileList);
      this.uploadBtnHidden = fileList.length >= this.field.options.limit;
      if (!!this.field.options.onFileRemove) {
        let customFn = new Function("file", "fileList", this.field.options.onFileRemove);
        customFn.call(this, file, fileList);
      }
    },
    handleUploadError(err, file, fileList) {
      if (!!this.field.options.onUploadError) {
        let customFn = new Function("error", "file", "fileList", this.field.options.onUploadError);
        customFn.call(this, err, file, fileList);
      } else {
        this.$message({
          message: this.$t("render.hint.uploadError") + err,
          duration: 3e3,
          type: "error"
        });
      }
    },
    handlePictureCardPreview({ url }) {
      this.previewIndex = this.previewList.indexOf(url);
      this.$refs["imageRef"].$el.children[0].click();
    },
    handleUploadHeaders() {
      const cookieToken = sessionStorage.getItem("token");
      console.log({ cookieToken });
      if (cookieToken)
        this.uploadHeaders = { "Authorization": `Bearer ${cookieToken}` };
    },
    getCookie(name) {
      var strCookies = document.cookie;
      var array = strCookies.split(";");
      for (var i = 0; i < array.length; i++) {
        var item = array[i].split("=");
        if (item[0].replace(" ", "") === name) {
          return item[1];
        }
      }
      return null;
    }
  }
};
const _hoisted_1$h = { class: "el-upload-list__item-status-label" };
const _hoisted_2$d = {
  class: "el-icon--upload-success",
  style: { "color": "#FFF" }
};
const _hoisted_3$b = { class: "el-upload-list__item-actions" };
const _hoisted_4$4 = ["onClick"];
const _hoisted_5$3 = ["onClick"];
const _hoisted_6$2 = {
  key: 0,
  class: "el-upload__tip"
};
const _hoisted_7$2 = { class: "uploader-icon" };
function _sfc_render$x(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_image = resolveComponent("el-image");
  const _component_svg_icon = resolveComponent("svg-icon");
  const _component_el_upload = resolveComponent("el-upload");
  const _component_form_item_wrapper = resolveComponent("form-item-wrapper");
  return openBlock(), createBlock(_component_form_item_wrapper, {
    designer: $props.designer,
    field: $props.field,
    rules: $data.rules,
    "design-state": $props.designState,
    "parent-widget": $props.parentWidget,
    "parent-list": $props.parentList,
    "index-of-parent-list": $props.indexOfParentList,
    "sub-form-row-index": $props.subFormRowIndex,
    "sub-form-col-index": $props.subFormColIndex,
    "sub-form-row-id": $props.subFormRowId
  }, {
    default: withCtx(() => [
      createVNode(_component_el_upload, {
        ref: "fieldEditor",
        disabled: $props.field.options.disabled,
        name: "files",
        action: $props.field.options.uploadURL,
        headers: $data.uploadHeaders,
        data: $data.uploadData,
        "with-credentials": $props.field.options.withCredentials,
        multiple: $props.field.options.multipleSelect,
        "file-list": $data.fileList,
        "show-file-list": $props.field.options.showFileList,
        "list-type": "picture-card",
        class: normalizeClass({ "hideUploadDiv": $data.uploadBtnHidden }),
        limit: $props.field.options.limit,
        "on-exceed": $options.handlePictureExceed,
        "before-upload": $options.beforePictureUpload,
        "on-preview": $options.handlePictureCardPreview,
        "on-success": $options.handlePictureUpload,
        "on-error": $options.handleUploadError
      }, {
        file: withCtx(({ file }) => [
          createVNode(_component_el_image, {
            ref: "imageRef",
            style: { "width": "100%", "height": "100%" },
            src: file.url,
            "preview-src-list": $options.previewList,
            "initial-index": $data.previewIndex,
            fit: "cover",
            "preview-teleported": ""
          }, null, 8, ["src", "preview-src-list", "initial-index"]),
          createElementVNode("label", _hoisted_1$h, [
            createElementVNode("i", _hoisted_2$d, [
              createVNode(_component_svg_icon, {
                class: "",
                "icon-class": "el-check"
              })
            ])
          ]),
          createElementVNode("span", _hoisted_3$b, [
            createElementVNode("span", {
              class: "el-upload-list__item-preview",
              onClick: ($event) => $options.handlePictureCardPreview(file)
            }, [
              createVNode(_component_svg_icon, { "icon-class": "el-zoom-in" })
            ], 8, _hoisted_4$4),
            createElementVNode("span", {
              class: "el-upload-list__item-delete",
              onClick: ($event) => $options.handlePictureRemove(file)
            }, [
              createVNode(_component_svg_icon, { "icon-class": "el-delete" })
            ], 8, _hoisted_5$3)
          ])
        ]),
        tip: withCtx(() => [
          !!$props.field.options.uploadTip ? (openBlock(), createElementBlock("div", _hoisted_6$2, toDisplayString($props.field.options.uploadTip), 1)) : createCommentVNode("", true)
        ]),
        default: withCtx(() => [
          createElementVNode("div", _hoisted_7$2, [
            createVNode(_component_svg_icon, { "icon-class": "el-plus" })
          ])
        ]),
        _: 1
      }, 8, ["disabled", "action", "headers", "data", "with-credentials", "multiple", "file-list", "show-file-list", "class", "limit", "on-exceed", "before-upload", "on-preview", "on-success", "on-error"])
    ]),
    _: 1
  }, 8, ["designer", "field", "rules", "design-state", "parent-widget", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
var pictureUploadWidget = /* @__PURE__ */ _export_sfc$1(_sfc_main$x, [["render", _sfc_render$x], ["__scopeId", "data-v-3197ffde"]]);
var __glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": pictureUploadWidget
}, Symbol.toStringTag, { value: "Module" }));
var radioWidget_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$w = {
  name: "radio-widget",
  componentName: "FieldWidget",
  mixins: [emitter, fieldMixin, i18n$1],
  props: {
    field: Object,
    parentWidget: Object,
    parentList: Array,
    indexOfParentList: Number,
    designer: Object,
    designState: {
      type: Boolean,
      default: false
    },
    subFormRowIndex: {
      type: Number,
      default: -1
    },
    subFormColIndex: {
      type: Number,
      default: -1
    },
    subFormRowId: {
      type: String,
      default: ""
    }
  },
  components: {
    FormItemWrapper
  },
  data() {
    return {
      oldFieldValue: null,
      fieldModel: null,
      rules: []
    };
  },
  computed: {},
  beforeCreate() {
  },
  created() {
    this.initOptionItems();
    this.initFieldModel();
    this.registerToRefList();
    this.initEventHandler();
    this.buildFieldRules();
    this.handleOnCreated();
  },
  mounted() {
    this.handleOnMounted();
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  },
  methods: {}
};
function _sfc_render$w(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_radio_button = resolveComponent("el-radio-button");
  const _component_el_radio = resolveComponent("el-radio");
  const _component_el_radio_group = resolveComponent("el-radio-group");
  const _component_form_item_wrapper = resolveComponent("form-item-wrapper");
  return openBlock(), createBlock(_component_form_item_wrapper, {
    designer: $props.designer,
    field: $props.field,
    rules: $data.rules,
    "design-state": $props.designState,
    "parent-widget": $props.parentWidget,
    "parent-list": $props.parentList,
    "index-of-parent-list": $props.indexOfParentList,
    "sub-form-row-index": $props.subFormRowIndex,
    "sub-form-col-index": $props.subFormColIndex,
    "sub-form-row-id": $props.subFormRowId
  }, {
    default: withCtx(() => [
      createVNode(_component_el_radio_group, {
        ref: "fieldEditor",
        modelValue: $data.fieldModel,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.fieldModel = $event),
        class: normalizeClass({ "radio-group-block": $props.field.options.displayStyle === "block" }),
        disabled: $props.field.options.disabled,
        size: _ctx.widgetSize,
        onChange: _ctx.handleChangeEvent
      }, {
        default: withCtx(() => [
          !!$props.field.options.buttonStyle ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList($props.field.options.optionItems, (item, index) => {
            return openBlock(), createBlock(_component_el_radio_button, {
              key: index,
              label: item.value,
              disabled: item.disabled,
              border: $props.field.options.border,
              style: normalizeStyle({ display: $props.field.options.displayStyle })
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(item.label), 1)
              ]),
              _: 2
            }, 1032, ["label", "disabled", "border", "style"]);
          }), 128)) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList($props.field.options.optionItems, (item, index) => {
            return openBlock(), createBlock(_component_el_radio, {
              key: index,
              label: item.value,
              disabled: item.disabled,
              border: $props.field.options.border,
              style: normalizeStyle({ display: $props.field.options.displayStyle })
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(item.label), 1)
              ]),
              _: 2
            }, 1032, ["label", "disabled", "border", "style"]);
          }), 128))
        ]),
        _: 1
      }, 8, ["modelValue", "class", "disabled", "size", "onChange"])
    ]),
    _: 1
  }, 8, ["designer", "field", "rules", "design-state", "parent-widget", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
var radioWidget = /* @__PURE__ */ _export_sfc$1(_sfc_main$w, [["render", _sfc_render$w], ["__scopeId", "data-v-5becdb92"]]);
var __glob_0_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": radioWidget
}, Symbol.toStringTag, { value: "Module" }));
var rateWidget_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$v = {
  name: "rate-widget",
  componentName: "FieldWidget",
  mixins: [emitter, fieldMixin, i18n$1],
  props: {
    field: Object,
    parentWidget: Object,
    parentList: Array,
    indexOfParentList: Number,
    designer: Object,
    designState: {
      type: Boolean,
      default: false
    },
    subFormRowIndex: {
      type: Number,
      default: -1
    },
    subFormColIndex: {
      type: Number,
      default: -1
    },
    subFormRowId: {
      type: String,
      default: ""
    }
  },
  components: {
    FormItemWrapper
  },
  data() {
    return {
      oldFieldValue: null,
      fieldModel: null,
      rules: []
    };
  },
  computed: {},
  beforeCreate() {
  },
  created() {
    this.initFieldModel();
    this.registerToRefList();
    this.initEventHandler();
    this.buildFieldRules();
    this.handleOnCreated();
  },
  mounted() {
    this.handleOnMounted();
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  },
  methods: {}
};
function _sfc_render$v(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_rate = resolveComponent("el-rate");
  const _component_form_item_wrapper = resolveComponent("form-item-wrapper");
  return openBlock(), createBlock(_component_form_item_wrapper, {
    designer: $props.designer,
    field: $props.field,
    rules: $data.rules,
    "design-state": $props.designState,
    "parent-widget": $props.parentWidget,
    "parent-list": $props.parentList,
    "index-of-parent-list": $props.indexOfParentList,
    "sub-form-row-index": $props.subFormRowIndex,
    "sub-form-col-index": $props.subFormColIndex,
    "sub-form-row-id": $props.subFormRowId
  }, {
    default: withCtx(() => [
      createVNode(_component_el_rate, {
        ref: "fieldEditor",
        modelValue: $data.fieldModel,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.fieldModel = $event),
        disabled: $props.field.options.disabled,
        max: $props.field.options.max,
        "low-threshold": $props.field.options.lowThreshold,
        "high-threshold": $props.field.options.highThreshold,
        "allow-half": $props.field.options.allowHalf,
        "show-text": $props.field.options.showText,
        "show-score": $props.field.options.showScore,
        onChange: _ctx.handleChangeEvent
      }, null, 8, ["modelValue", "disabled", "max", "low-threshold", "high-threshold", "allow-half", "show-text", "show-score", "onChange"])
    ]),
    _: 1
  }, 8, ["designer", "field", "rules", "design-state", "parent-widget", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
var rateWidget = /* @__PURE__ */ _export_sfc$1(_sfc_main$v, [["render", _sfc_render$v], ["__scopeId", "data-v-e8d5267c"]]);
var __glob_0_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": rateWidget
}, Symbol.toStringTag, { value: "Module" }));
var quill = { exports: {} };
/*!
 * Quill Editor v1.3.7
 * https://quilljs.com/
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */
(function(module, exports) {
  (function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory();
  })(typeof self !== "undefined" ? self : commonjsGlobal, function() {
    return function(modules2) {
      var installedModules = {};
      function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
          return installedModules[moduleId].exports;
        }
        var module2 = installedModules[moduleId] = {
          i: moduleId,
          l: false,
          exports: {}
        };
        modules2[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
        module2.l = true;
        return module2.exports;
      }
      __webpack_require__.m = modules2;
      __webpack_require__.c = installedModules;
      __webpack_require__.d = function(exports2, name, getter) {
        if (!__webpack_require__.o(exports2, name)) {
          Object.defineProperty(exports2, name, {
            configurable: false,
            enumerable: true,
            get: getter
          });
        }
      };
      __webpack_require__.n = function(module2) {
        var getter = module2 && module2.__esModule ? function getDefault() {
          return module2["default"];
        } : function getModuleExports() {
          return module2;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
      };
      __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      __webpack_require__.p = "";
      return __webpack_require__(__webpack_require__.s = 109);
    }([
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", { value: true });
        var container_1 = __webpack_require__(17);
        var format_1 = __webpack_require__(18);
        var leaf_1 = __webpack_require__(19);
        var scroll_1 = __webpack_require__(45);
        var inline_1 = __webpack_require__(46);
        var block_1 = __webpack_require__(47);
        var embed_1 = __webpack_require__(48);
        var text_1 = __webpack_require__(49);
        var attributor_1 = __webpack_require__(12);
        var class_1 = __webpack_require__(32);
        var style_1 = __webpack_require__(33);
        var store_1 = __webpack_require__(31);
        var Registry = __webpack_require__(1);
        var Parchment = {
          Scope: Registry.Scope,
          create: Registry.create,
          find: Registry.find,
          query: Registry.query,
          register: Registry.register,
          Container: container_1.default,
          Format: format_1.default,
          Leaf: leaf_1.default,
          Embed: embed_1.default,
          Scroll: scroll_1.default,
          Block: block_1.default,
          Inline: inline_1.default,
          Text: text_1.default,
          Attributor: {
            Attribute: attributor_1.default,
            Class: class_1.default,
            Style: style_1.default,
            Store: store_1.default
          }
        };
        exports2.default = Parchment;
      },
      function(module2, exports2, __webpack_require__) {
        var __extends = this && this.__extends || function() {
          var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
            d.__proto__ = b;
          } || function(d, b) {
            for (var p in b)
              if (b.hasOwnProperty(p))
                d[p] = b[p];
          };
          return function(d, b) {
            extendStatics(d, b);
            function __() {
              this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
          };
        }();
        Object.defineProperty(exports2, "__esModule", { value: true });
        var ParchmentError = function(_super) {
          __extends(ParchmentError2, _super);
          function ParchmentError2(message) {
            var _this = this;
            message = "[Parchment] " + message;
            _this = _super.call(this, message) || this;
            _this.message = message;
            _this.name = _this.constructor.name;
            return _this;
          }
          return ParchmentError2;
        }(Error);
        exports2.ParchmentError = ParchmentError;
        var attributes = {};
        var classes = {};
        var tags = {};
        var types = {};
        exports2.DATA_KEY = "__blot";
        var Scope;
        (function(Scope2) {
          Scope2[Scope2["TYPE"] = 3] = "TYPE";
          Scope2[Scope2["LEVEL"] = 12] = "LEVEL";
          Scope2[Scope2["ATTRIBUTE"] = 13] = "ATTRIBUTE";
          Scope2[Scope2["BLOT"] = 14] = "BLOT";
          Scope2[Scope2["INLINE"] = 7] = "INLINE";
          Scope2[Scope2["BLOCK"] = 11] = "BLOCK";
          Scope2[Scope2["BLOCK_BLOT"] = 10] = "BLOCK_BLOT";
          Scope2[Scope2["INLINE_BLOT"] = 6] = "INLINE_BLOT";
          Scope2[Scope2["BLOCK_ATTRIBUTE"] = 9] = "BLOCK_ATTRIBUTE";
          Scope2[Scope2["INLINE_ATTRIBUTE"] = 5] = "INLINE_ATTRIBUTE";
          Scope2[Scope2["ANY"] = 15] = "ANY";
        })(Scope = exports2.Scope || (exports2.Scope = {}));
        function create(input, value2) {
          var match = query(input);
          if (match == null) {
            throw new ParchmentError("Unable to create " + input + " blot");
          }
          var BlotClass = match;
          var node = input instanceof Node || input["nodeType"] === Node.TEXT_NODE ? input : BlotClass.create(value2);
          return new BlotClass(node, value2);
        }
        exports2.create = create;
        function find(node, bubble) {
          if (bubble === void 0) {
            bubble = false;
          }
          if (node == null)
            return null;
          if (node[exports2.DATA_KEY] != null)
            return node[exports2.DATA_KEY].blot;
          if (bubble)
            return find(node.parentNode, bubble);
          return null;
        }
        exports2.find = find;
        function query(query2, scope) {
          if (scope === void 0) {
            scope = Scope.ANY;
          }
          var match;
          if (typeof query2 === "string") {
            match = types[query2] || attributes[query2];
          } else if (query2 instanceof Text || query2["nodeType"] === Node.TEXT_NODE) {
            match = types["text"];
          } else if (typeof query2 === "number") {
            if (query2 & Scope.LEVEL & Scope.BLOCK) {
              match = types["block"];
            } else if (query2 & Scope.LEVEL & Scope.INLINE) {
              match = types["inline"];
            }
          } else if (query2 instanceof HTMLElement) {
            var names = (query2.getAttribute("class") || "").split(/\s+/);
            for (var i in names) {
              match = classes[names[i]];
              if (match)
                break;
            }
            match = match || tags[query2.tagName];
          }
          if (match == null)
            return null;
          if (scope & Scope.LEVEL & match.scope && scope & Scope.TYPE & match.scope)
            return match;
          return null;
        }
        exports2.query = query;
        function register() {
          var Definitions = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            Definitions[_i] = arguments[_i];
          }
          if (Definitions.length > 1) {
            return Definitions.map(function(d) {
              return register(d);
            });
          }
          var Definition = Definitions[0];
          if (typeof Definition.blotName !== "string" && typeof Definition.attrName !== "string") {
            throw new ParchmentError("Invalid definition");
          } else if (Definition.blotName === "abstract") {
            throw new ParchmentError("Cannot register abstract class");
          }
          types[Definition.blotName || Definition.attrName] = Definition;
          if (typeof Definition.keyName === "string") {
            attributes[Definition.keyName] = Definition;
          } else {
            if (Definition.className != null) {
              classes[Definition.className] = Definition;
            }
            if (Definition.tagName != null) {
              if (Array.isArray(Definition.tagName)) {
                Definition.tagName = Definition.tagName.map(function(tagName) {
                  return tagName.toUpperCase();
                });
              } else {
                Definition.tagName = Definition.tagName.toUpperCase();
              }
              var tagNames = Array.isArray(Definition.tagName) ? Definition.tagName : [Definition.tagName];
              tagNames.forEach(function(tag) {
                if (tags[tag] == null || Definition.className == null) {
                  tags[tag] = Definition;
                }
              });
            }
          }
          return Definition;
        }
        exports2.register = register;
      },
      function(module2, exports2, __webpack_require__) {
        var diff = __webpack_require__(51);
        var equal = __webpack_require__(11);
        var extend2 = __webpack_require__(3);
        var op = __webpack_require__(20);
        var NULL_CHARACTER = String.fromCharCode(0);
        var Delta = function(ops) {
          if (Array.isArray(ops)) {
            this.ops = ops;
          } else if (ops != null && Array.isArray(ops.ops)) {
            this.ops = ops.ops;
          } else {
            this.ops = [];
          }
        };
        Delta.prototype.insert = function(text, attributes) {
          var newOp = {};
          if (text.length === 0)
            return this;
          newOp.insert = text;
          if (attributes != null && typeof attributes === "object" && Object.keys(attributes).length > 0) {
            newOp.attributes = attributes;
          }
          return this.push(newOp);
        };
        Delta.prototype["delete"] = function(length) {
          if (length <= 0)
            return this;
          return this.push({ "delete": length });
        };
        Delta.prototype.retain = function(length, attributes) {
          if (length <= 0)
            return this;
          var newOp = { retain: length };
          if (attributes != null && typeof attributes === "object" && Object.keys(attributes).length > 0) {
            newOp.attributes = attributes;
          }
          return this.push(newOp);
        };
        Delta.prototype.push = function(newOp) {
          var index = this.ops.length;
          var lastOp = this.ops[index - 1];
          newOp = extend2(true, {}, newOp);
          if (typeof lastOp === "object") {
            if (typeof newOp["delete"] === "number" && typeof lastOp["delete"] === "number") {
              this.ops[index - 1] = { "delete": lastOp["delete"] + newOp["delete"] };
              return this;
            }
            if (typeof lastOp["delete"] === "number" && newOp.insert != null) {
              index -= 1;
              lastOp = this.ops[index - 1];
              if (typeof lastOp !== "object") {
                this.ops.unshift(newOp);
                return this;
              }
            }
            if (equal(newOp.attributes, lastOp.attributes)) {
              if (typeof newOp.insert === "string" && typeof lastOp.insert === "string") {
                this.ops[index - 1] = { insert: lastOp.insert + newOp.insert };
                if (typeof newOp.attributes === "object")
                  this.ops[index - 1].attributes = newOp.attributes;
                return this;
              } else if (typeof newOp.retain === "number" && typeof lastOp.retain === "number") {
                this.ops[index - 1] = { retain: lastOp.retain + newOp.retain };
                if (typeof newOp.attributes === "object")
                  this.ops[index - 1].attributes = newOp.attributes;
                return this;
              }
            }
          }
          if (index === this.ops.length) {
            this.ops.push(newOp);
          } else {
            this.ops.splice(index, 0, newOp);
          }
          return this;
        };
        Delta.prototype.chop = function() {
          var lastOp = this.ops[this.ops.length - 1];
          if (lastOp && lastOp.retain && !lastOp.attributes) {
            this.ops.pop();
          }
          return this;
        };
        Delta.prototype.filter = function(predicate) {
          return this.ops.filter(predicate);
        };
        Delta.prototype.forEach = function(predicate) {
          this.ops.forEach(predicate);
        };
        Delta.prototype.map = function(predicate) {
          return this.ops.map(predicate);
        };
        Delta.prototype.partition = function(predicate) {
          var passed = [], failed = [];
          this.forEach(function(op2) {
            var target = predicate(op2) ? passed : failed;
            target.push(op2);
          });
          return [passed, failed];
        };
        Delta.prototype.reduce = function(predicate, initial) {
          return this.ops.reduce(predicate, initial);
        };
        Delta.prototype.changeLength = function() {
          return this.reduce(function(length, elem) {
            if (elem.insert) {
              return length + op.length(elem);
            } else if (elem.delete) {
              return length - elem.delete;
            }
            return length;
          }, 0);
        };
        Delta.prototype.length = function() {
          return this.reduce(function(length, elem) {
            return length + op.length(elem);
          }, 0);
        };
        Delta.prototype.slice = function(start, end) {
          start = start || 0;
          if (typeof end !== "number")
            end = Infinity;
          var ops = [];
          var iter = op.iterator(this.ops);
          var index = 0;
          while (index < end && iter.hasNext()) {
            var nextOp;
            if (index < start) {
              nextOp = iter.next(start - index);
            } else {
              nextOp = iter.next(end - index);
              ops.push(nextOp);
            }
            index += op.length(nextOp);
          }
          return new Delta(ops);
        };
        Delta.prototype.compose = function(other) {
          var thisIter = op.iterator(this.ops);
          var otherIter = op.iterator(other.ops);
          var ops = [];
          var firstOther = otherIter.peek();
          if (firstOther != null && typeof firstOther.retain === "number" && firstOther.attributes == null) {
            var firstLeft = firstOther.retain;
            while (thisIter.peekType() === "insert" && thisIter.peekLength() <= firstLeft) {
              firstLeft -= thisIter.peekLength();
              ops.push(thisIter.next());
            }
            if (firstOther.retain - firstLeft > 0) {
              otherIter.next(firstOther.retain - firstLeft);
            }
          }
          var delta = new Delta(ops);
          while (thisIter.hasNext() || otherIter.hasNext()) {
            if (otherIter.peekType() === "insert") {
              delta.push(otherIter.next());
            } else if (thisIter.peekType() === "delete") {
              delta.push(thisIter.next());
            } else {
              var length = Math.min(thisIter.peekLength(), otherIter.peekLength());
              var thisOp = thisIter.next(length);
              var otherOp = otherIter.next(length);
              if (typeof otherOp.retain === "number") {
                var newOp = {};
                if (typeof thisOp.retain === "number") {
                  newOp.retain = length;
                } else {
                  newOp.insert = thisOp.insert;
                }
                var attributes = op.attributes.compose(thisOp.attributes, otherOp.attributes, typeof thisOp.retain === "number");
                if (attributes)
                  newOp.attributes = attributes;
                delta.push(newOp);
                if (!otherIter.hasNext() && equal(delta.ops[delta.ops.length - 1], newOp)) {
                  var rest = new Delta(thisIter.rest());
                  return delta.concat(rest).chop();
                }
              } else if (typeof otherOp["delete"] === "number" && typeof thisOp.retain === "number") {
                delta.push(otherOp);
              }
            }
          }
          return delta.chop();
        };
        Delta.prototype.concat = function(other) {
          var delta = new Delta(this.ops.slice());
          if (other.ops.length > 0) {
            delta.push(other.ops[0]);
            delta.ops = delta.ops.concat(other.ops.slice(1));
          }
          return delta;
        };
        Delta.prototype.diff = function(other, index) {
          if (this.ops === other.ops) {
            return new Delta();
          }
          var strings = [this, other].map(function(delta2) {
            return delta2.map(function(op2) {
              if (op2.insert != null) {
                return typeof op2.insert === "string" ? op2.insert : NULL_CHARACTER;
              }
              var prep = delta2 === other ? "on" : "with";
              throw new Error("diff() called " + prep + " non-document");
            }).join("");
          });
          var delta = new Delta();
          var diffResult = diff(strings[0], strings[1], index);
          var thisIter = op.iterator(this.ops);
          var otherIter = op.iterator(other.ops);
          diffResult.forEach(function(component) {
            var length = component[1].length;
            while (length > 0) {
              var opLength = 0;
              switch (component[0]) {
                case diff.INSERT:
                  opLength = Math.min(otherIter.peekLength(), length);
                  delta.push(otherIter.next(opLength));
                  break;
                case diff.DELETE:
                  opLength = Math.min(length, thisIter.peekLength());
                  thisIter.next(opLength);
                  delta["delete"](opLength);
                  break;
                case diff.EQUAL:
                  opLength = Math.min(thisIter.peekLength(), otherIter.peekLength(), length);
                  var thisOp = thisIter.next(opLength);
                  var otherOp = otherIter.next(opLength);
                  if (equal(thisOp.insert, otherOp.insert)) {
                    delta.retain(opLength, op.attributes.diff(thisOp.attributes, otherOp.attributes));
                  } else {
                    delta.push(otherOp)["delete"](opLength);
                  }
                  break;
              }
              length -= opLength;
            }
          });
          return delta.chop();
        };
        Delta.prototype.eachLine = function(predicate, newline) {
          newline = newline || "\n";
          var iter = op.iterator(this.ops);
          var line = new Delta();
          var i = 0;
          while (iter.hasNext()) {
            if (iter.peekType() !== "insert")
              return;
            var thisOp = iter.peek();
            var start = op.length(thisOp) - iter.peekLength();
            var index = typeof thisOp.insert === "string" ? thisOp.insert.indexOf(newline, start) - start : -1;
            if (index < 0) {
              line.push(iter.next());
            } else if (index > 0) {
              line.push(iter.next(index));
            } else {
              if (predicate(line, iter.next(1).attributes || {}, i) === false) {
                return;
              }
              i += 1;
              line = new Delta();
            }
          }
          if (line.length() > 0) {
            predicate(line, {}, i);
          }
        };
        Delta.prototype.transform = function(other, priority) {
          priority = !!priority;
          if (typeof other === "number") {
            return this.transformPosition(other, priority);
          }
          var thisIter = op.iterator(this.ops);
          var otherIter = op.iterator(other.ops);
          var delta = new Delta();
          while (thisIter.hasNext() || otherIter.hasNext()) {
            if (thisIter.peekType() === "insert" && (priority || otherIter.peekType() !== "insert")) {
              delta.retain(op.length(thisIter.next()));
            } else if (otherIter.peekType() === "insert") {
              delta.push(otherIter.next());
            } else {
              var length = Math.min(thisIter.peekLength(), otherIter.peekLength());
              var thisOp = thisIter.next(length);
              var otherOp = otherIter.next(length);
              if (thisOp["delete"]) {
                continue;
              } else if (otherOp["delete"]) {
                delta.push(otherOp);
              } else {
                delta.retain(length, op.attributes.transform(thisOp.attributes, otherOp.attributes, priority));
              }
            }
          }
          return delta.chop();
        };
        Delta.prototype.transformPosition = function(index, priority) {
          priority = !!priority;
          var thisIter = op.iterator(this.ops);
          var offset = 0;
          while (thisIter.hasNext() && offset <= index) {
            var length = thisIter.peekLength();
            var nextType = thisIter.peekType();
            thisIter.next();
            if (nextType === "delete") {
              index -= Math.min(length, index - offset);
              continue;
            } else if (nextType === "insert" && (offset < index || !priority)) {
              index += length;
            }
            offset += length;
          }
          return index;
        };
        module2.exports = Delta;
      },
      function(module2, exports2) {
        var hasOwn = Object.prototype.hasOwnProperty;
        var toStr = Object.prototype.toString;
        var defineProperty = Object.defineProperty;
        var gOPD = Object.getOwnPropertyDescriptor;
        var isArray2 = function isArray3(arr) {
          if (typeof Array.isArray === "function") {
            return Array.isArray(arr);
          }
          return toStr.call(arr) === "[object Array]";
        };
        var isPlainObject2 = function isPlainObject3(obj) {
          if (!obj || toStr.call(obj) !== "[object Object]") {
            return false;
          }
          var hasOwnConstructor = hasOwn.call(obj, "constructor");
          var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, "isPrototypeOf");
          if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
            return false;
          }
          var key;
          for (key in obj) {
          }
          return typeof key === "undefined" || hasOwn.call(obj, key);
        };
        var setProperty = function setProperty2(target, options) {
          if (defineProperty && options.name === "__proto__") {
            defineProperty(target, options.name, {
              enumerable: true,
              configurable: true,
              value: options.newValue,
              writable: true
            });
          } else {
            target[options.name] = options.newValue;
          }
        };
        var getProperty = function getProperty2(obj, name) {
          if (name === "__proto__") {
            if (!hasOwn.call(obj, name)) {
              return void 0;
            } else if (gOPD) {
              return gOPD(obj, name).value;
            }
          }
          return obj[name];
        };
        module2.exports = function extend2() {
          var options, name, src, copy, copyIsArray, clone;
          var target = arguments[0];
          var i = 1;
          var length = arguments.length;
          var deep = false;
          if (typeof target === "boolean") {
            deep = target;
            target = arguments[1] || {};
            i = 2;
          }
          if (target == null || typeof target !== "object" && typeof target !== "function") {
            target = {};
          }
          for (; i < length; ++i) {
            options = arguments[i];
            if (options != null) {
              for (name in options) {
                src = getProperty(target, name);
                copy = getProperty(options, name);
                if (target !== copy) {
                  if (deep && copy && (isPlainObject2(copy) || (copyIsArray = isArray2(copy)))) {
                    if (copyIsArray) {
                      copyIsArray = false;
                      clone = src && isArray2(src) ? src : [];
                    } else {
                      clone = src && isPlainObject2(src) ? src : {};
                    }
                    setProperty(target, { name, newValue: extend2(deep, clone, copy) });
                  } else if (typeof copy !== "undefined") {
                    setProperty(target, { name, newValue: copy });
                  }
                }
              }
            }
          }
          return target;
        };
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        exports2.default = exports2.BlockEmbed = exports2.bubbleFormats = void 0;
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var _get = function get2(object, property, receiver) {
          if (object === null)
            object = Function.prototype;
          var desc = Object.getOwnPropertyDescriptor(object, property);
          if (desc === void 0) {
            var parent = Object.getPrototypeOf(object);
            if (parent === null) {
              return void 0;
            } else {
              return get2(parent, property, receiver);
            }
          } else if ("value" in desc) {
            return desc.value;
          } else {
            var getter = desc.get;
            if (getter === void 0) {
              return void 0;
            }
            return getter.call(receiver);
          }
        };
        var _extend = __webpack_require__(3);
        var _extend2 = _interopRequireDefault(_extend);
        var _quillDelta = __webpack_require__(2);
        var _quillDelta2 = _interopRequireDefault(_quillDelta);
        var _parchment = __webpack_require__(0);
        var _parchment2 = _interopRequireDefault(_parchment);
        var _break = __webpack_require__(16);
        var _break2 = _interopRequireDefault(_break);
        var _inline = __webpack_require__(6);
        var _inline2 = _interopRequireDefault(_inline);
        var _text = __webpack_require__(7);
        var _text2 = _interopRequireDefault(_text);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self2, call) {
          if (!self2) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self2;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
          if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var NEWLINE_LENGTH = 1;
        var BlockEmbed = function(_Parchment$Embed) {
          _inherits(BlockEmbed2, _Parchment$Embed);
          function BlockEmbed2() {
            _classCallCheck(this, BlockEmbed2);
            return _possibleConstructorReturn(this, (BlockEmbed2.__proto__ || Object.getPrototypeOf(BlockEmbed2)).apply(this, arguments));
          }
          _createClass(BlockEmbed2, [{
            key: "attach",
            value: function attach() {
              _get(BlockEmbed2.prototype.__proto__ || Object.getPrototypeOf(BlockEmbed2.prototype), "attach", this).call(this);
              this.attributes = new _parchment2.default.Attributor.Store(this.domNode);
            }
          }, {
            key: "delta",
            value: function delta() {
              return new _quillDelta2.default().insert(this.value(), (0, _extend2.default)(this.formats(), this.attributes.values()));
            }
          }, {
            key: "format",
            value: function format(name, value2) {
              var attribute = _parchment2.default.query(name, _parchment2.default.Scope.BLOCK_ATTRIBUTE);
              if (attribute != null) {
                this.attributes.attribute(attribute, value2);
              }
            }
          }, {
            key: "formatAt",
            value: function formatAt(index, length, name, value2) {
              this.format(name, value2);
            }
          }, {
            key: "insertAt",
            value: function insertAt(index, value2, def) {
              if (typeof value2 === "string" && value2.endsWith("\n")) {
                var block = _parchment2.default.create(Block.blotName);
                this.parent.insertBefore(block, index === 0 ? this : this.next);
                block.insertAt(0, value2.slice(0, -1));
              } else {
                _get(BlockEmbed2.prototype.__proto__ || Object.getPrototypeOf(BlockEmbed2.prototype), "insertAt", this).call(this, index, value2, def);
              }
            }
          }]);
          return BlockEmbed2;
        }(_parchment2.default.Embed);
        BlockEmbed.scope = _parchment2.default.Scope.BLOCK_BLOT;
        var Block = function(_Parchment$Block) {
          _inherits(Block2, _Parchment$Block);
          function Block2(domNode) {
            _classCallCheck(this, Block2);
            var _this2 = _possibleConstructorReturn(this, (Block2.__proto__ || Object.getPrototypeOf(Block2)).call(this, domNode));
            _this2.cache = {};
            return _this2;
          }
          _createClass(Block2, [{
            key: "delta",
            value: function delta() {
              if (this.cache.delta == null) {
                this.cache.delta = this.descendants(_parchment2.default.Leaf).reduce(function(delta2, leaf) {
                  if (leaf.length() === 0) {
                    return delta2;
                  } else {
                    return delta2.insert(leaf.value(), bubbleFormats(leaf));
                  }
                }, new _quillDelta2.default()).insert("\n", bubbleFormats(this));
              }
              return this.cache.delta;
            }
          }, {
            key: "deleteAt",
            value: function deleteAt(index, length) {
              _get(Block2.prototype.__proto__ || Object.getPrototypeOf(Block2.prototype), "deleteAt", this).call(this, index, length);
              this.cache = {};
            }
          }, {
            key: "formatAt",
            value: function formatAt(index, length, name, value2) {
              if (length <= 0)
                return;
              if (_parchment2.default.query(name, _parchment2.default.Scope.BLOCK)) {
                if (index + length === this.length()) {
                  this.format(name, value2);
                }
              } else {
                _get(Block2.prototype.__proto__ || Object.getPrototypeOf(Block2.prototype), "formatAt", this).call(this, index, Math.min(length, this.length() - index - 1), name, value2);
              }
              this.cache = {};
            }
          }, {
            key: "insertAt",
            value: function insertAt(index, value2, def) {
              if (def != null)
                return _get(Block2.prototype.__proto__ || Object.getPrototypeOf(Block2.prototype), "insertAt", this).call(this, index, value2, def);
              if (value2.length === 0)
                return;
              var lines = value2.split("\n");
              var text = lines.shift();
              if (text.length > 0) {
                if (index < this.length() - 1 || this.children.tail == null) {
                  _get(Block2.prototype.__proto__ || Object.getPrototypeOf(Block2.prototype), "insertAt", this).call(this, Math.min(index, this.length() - 1), text);
                } else {
                  this.children.tail.insertAt(this.children.tail.length(), text);
                }
                this.cache = {};
              }
              var block = this;
              lines.reduce(function(index2, line) {
                block = block.split(index2, true);
                block.insertAt(0, line);
                return line.length;
              }, index + text.length);
            }
          }, {
            key: "insertBefore",
            value: function insertBefore(blot, ref2) {
              var head = this.children.head;
              _get(Block2.prototype.__proto__ || Object.getPrototypeOf(Block2.prototype), "insertBefore", this).call(this, blot, ref2);
              if (head instanceof _break2.default) {
                head.remove();
              }
              this.cache = {};
            }
          }, {
            key: "length",
            value: function length() {
              if (this.cache.length == null) {
                this.cache.length = _get(Block2.prototype.__proto__ || Object.getPrototypeOf(Block2.prototype), "length", this).call(this) + NEWLINE_LENGTH;
              }
              return this.cache.length;
            }
          }, {
            key: "moveChildren",
            value: function moveChildren(target, ref2) {
              _get(Block2.prototype.__proto__ || Object.getPrototypeOf(Block2.prototype), "moveChildren", this).call(this, target, ref2);
              this.cache = {};
            }
          }, {
            key: "optimize",
            value: function optimize(context) {
              _get(Block2.prototype.__proto__ || Object.getPrototypeOf(Block2.prototype), "optimize", this).call(this, context);
              this.cache = {};
            }
          }, {
            key: "path",
            value: function path(index) {
              return _get(Block2.prototype.__proto__ || Object.getPrototypeOf(Block2.prototype), "path", this).call(this, index, true);
            }
          }, {
            key: "removeChild",
            value: function removeChild(child) {
              _get(Block2.prototype.__proto__ || Object.getPrototypeOf(Block2.prototype), "removeChild", this).call(this, child);
              this.cache = {};
            }
          }, {
            key: "split",
            value: function split(index) {
              var force = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
              if (force && (index === 0 || index >= this.length() - NEWLINE_LENGTH)) {
                var clone = this.clone();
                if (index === 0) {
                  this.parent.insertBefore(clone, this);
                  return this;
                } else {
                  this.parent.insertBefore(clone, this.next);
                  return clone;
                }
              } else {
                var next = _get(Block2.prototype.__proto__ || Object.getPrototypeOf(Block2.prototype), "split", this).call(this, index, force);
                this.cache = {};
                return next;
              }
            }
          }]);
          return Block2;
        }(_parchment2.default.Block);
        Block.blotName = "block";
        Block.tagName = "P";
        Block.defaultChild = "break";
        Block.allowedChildren = [_inline2.default, _parchment2.default.Embed, _text2.default];
        function bubbleFormats(blot) {
          var formats = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          if (blot == null)
            return formats;
          if (typeof blot.formats === "function") {
            formats = (0, _extend2.default)(formats, blot.formats());
          }
          if (blot.parent == null || blot.parent.blotName == "scroll" || blot.parent.statics.scope !== blot.statics.scope) {
            return formats;
          }
          return bubbleFormats(blot.parent, formats);
        }
        exports2.bubbleFormats = bubbleFormats;
        exports2.BlockEmbed = BlockEmbed;
        exports2.default = Block;
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        exports2.default = exports2.overload = exports2.expandConfig = void 0;
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
          return typeof obj;
        } : function(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        var _slicedToArray = function() {
          function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = void 0;
            try {
              for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);
                if (i && _arr.length === i)
                  break;
              }
            } catch (err) {
              _d = true;
              _e = err;
            } finally {
              try {
                if (!_n && _i["return"])
                  _i["return"]();
              } finally {
                if (_d)
                  throw _e;
              }
            }
            return _arr;
          }
          return function(arr, i) {
            if (Array.isArray(arr)) {
              return arr;
            } else if (Symbol.iterator in Object(arr)) {
              return sliceIterator(arr, i);
            } else {
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
          };
        }();
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        __webpack_require__(50);
        var _quillDelta = __webpack_require__(2);
        var _quillDelta2 = _interopRequireDefault(_quillDelta);
        var _editor = __webpack_require__(14);
        var _editor2 = _interopRequireDefault(_editor);
        var _emitter3 = __webpack_require__(8);
        var _emitter4 = _interopRequireDefault(_emitter3);
        var _module = __webpack_require__(9);
        var _module2 = _interopRequireDefault(_module);
        var _parchment = __webpack_require__(0);
        var _parchment2 = _interopRequireDefault(_parchment);
        var _selection = __webpack_require__(15);
        var _selection2 = _interopRequireDefault(_selection);
        var _extend = __webpack_require__(3);
        var _extend2 = _interopRequireDefault(_extend);
        var _logger = __webpack_require__(10);
        var _logger2 = _interopRequireDefault(_logger);
        var _theme = __webpack_require__(34);
        var _theme2 = _interopRequireDefault(_theme);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _defineProperty(obj, key, value2) {
          if (key in obj) {
            Object.defineProperty(obj, key, { value: value2, enumerable: true, configurable: true, writable: true });
          } else {
            obj[key] = value2;
          }
          return obj;
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        var debug = (0, _logger2.default)("quill");
        var Quill2 = function() {
          _createClass(Quill3, null, [{
            key: "debug",
            value: function debug2(limit) {
              if (limit === true) {
                limit = "log";
              }
              _logger2.default.level(limit);
            }
          }, {
            key: "find",
            value: function find(node) {
              return node.__quill || _parchment2.default.find(node);
            }
          }, {
            key: "import",
            value: function _import(name) {
              if (this.imports[name] == null) {
                debug.error("Cannot import " + name + ". Are you sure it was registered?");
              }
              return this.imports[name];
            }
          }, {
            key: "register",
            value: function register(path, target) {
              var _this = this;
              var overwrite = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
              if (typeof path !== "string") {
                var name = path.attrName || path.blotName;
                if (typeof name === "string") {
                  this.register("formats/" + name, path, target);
                } else {
                  Object.keys(path).forEach(function(key) {
                    _this.register(key, path[key], target);
                  });
                }
              } else {
                if (this.imports[path] != null && !overwrite) {
                  debug.warn("Overwriting " + path + " with", target);
                }
                this.imports[path] = target;
                if ((path.startsWith("blots/") || path.startsWith("formats/")) && target.blotName !== "abstract") {
                  _parchment2.default.register(target);
                } else if (path.startsWith("modules") && typeof target.register === "function") {
                  target.register();
                }
              }
            }
          }]);
          function Quill3(container) {
            var _this2 = this;
            var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            _classCallCheck(this, Quill3);
            this.options = expandConfig(container, options);
            this.container = this.options.container;
            if (this.container == null) {
              return debug.error("Invalid Quill container", container);
            }
            if (this.options.debug) {
              Quill3.debug(this.options.debug);
            }
            var html = this.container.innerHTML.trim();
            this.container.classList.add("ql-container");
            this.container.innerHTML = "";
            this.container.__quill = this;
            this.root = this.addContainer("ql-editor");
            this.root.classList.add("ql-blank");
            this.root.setAttribute("data-gramm", false);
            this.scrollingContainer = this.options.scrollingContainer || this.root;
            this.emitter = new _emitter4.default();
            this.scroll = _parchment2.default.create(this.root, {
              emitter: this.emitter,
              whitelist: this.options.formats
            });
            this.editor = new _editor2.default(this.scroll);
            this.selection = new _selection2.default(this.scroll, this.emitter);
            this.theme = new this.options.theme(this, this.options);
            this.keyboard = this.theme.addModule("keyboard");
            this.clipboard = this.theme.addModule("clipboard");
            this.history = this.theme.addModule("history");
            this.theme.init();
            this.emitter.on(_emitter4.default.events.EDITOR_CHANGE, function(type) {
              if (type === _emitter4.default.events.TEXT_CHANGE) {
                _this2.root.classList.toggle("ql-blank", _this2.editor.isBlank());
              }
            });
            this.emitter.on(_emitter4.default.events.SCROLL_UPDATE, function(source2, mutations) {
              var range = _this2.selection.lastRange;
              var index = range && range.length === 0 ? range.index : void 0;
              modify.call(_this2, function() {
                return _this2.editor.update(null, mutations, index);
              }, source2);
            });
            var contents = this.clipboard.convert(`<div class='ql-editor' style="white-space: normal;">` + html + "<p><br></p></div>");
            this.setContents(contents);
            this.history.clear();
            if (this.options.placeholder) {
              this.root.setAttribute("data-placeholder", this.options.placeholder);
            }
            if (this.options.readOnly) {
              this.disable();
            }
          }
          _createClass(Quill3, [{
            key: "addContainer",
            value: function addContainer(container) {
              var refNode = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
              if (typeof container === "string") {
                var className = container;
                container = document.createElement("div");
                container.classList.add(className);
              }
              this.container.insertBefore(container, refNode);
              return container;
            }
          }, {
            key: "blur",
            value: function blur() {
              this.selection.setRange(null);
            }
          }, {
            key: "deleteText",
            value: function deleteText(index, length, source2) {
              var _this3 = this;
              var _overload = overload(index, length, source2);
              var _overload2 = _slicedToArray(_overload, 4);
              index = _overload2[0];
              length = _overload2[1];
              source2 = _overload2[3];
              return modify.call(this, function() {
                return _this3.editor.deleteText(index, length);
              }, source2, index, -1 * length);
            }
          }, {
            key: "disable",
            value: function disable() {
              this.enable(false);
            }
          }, {
            key: "enable",
            value: function enable() {
              var enabled = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
              this.scroll.enable(enabled);
              this.container.classList.toggle("ql-disabled", !enabled);
            }
          }, {
            key: "focus",
            value: function focus() {
              var scrollTop = this.scrollingContainer.scrollTop;
              this.selection.focus();
              this.scrollingContainer.scrollTop = scrollTop;
              this.scrollIntoView();
            }
          }, {
            key: "format",
            value: function format(name, value2) {
              var _this4 = this;
              var source2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _emitter4.default.sources.API;
              return modify.call(this, function() {
                var range = _this4.getSelection(true);
                var change = new _quillDelta2.default();
                if (range == null) {
                  return change;
                } else if (_parchment2.default.query(name, _parchment2.default.Scope.BLOCK)) {
                  change = _this4.editor.formatLine(range.index, range.length, _defineProperty({}, name, value2));
                } else if (range.length === 0) {
                  _this4.selection.format(name, value2);
                  return change;
                } else {
                  change = _this4.editor.formatText(range.index, range.length, _defineProperty({}, name, value2));
                }
                _this4.setSelection(range, _emitter4.default.sources.SILENT);
                return change;
              }, source2);
            }
          }, {
            key: "formatLine",
            value: function formatLine(index, length, name, value2, source2) {
              var _this5 = this;
              var formats = void 0;
              var _overload3 = overload(index, length, name, value2, source2);
              var _overload4 = _slicedToArray(_overload3, 4);
              index = _overload4[0];
              length = _overload4[1];
              formats = _overload4[2];
              source2 = _overload4[3];
              return modify.call(this, function() {
                return _this5.editor.formatLine(index, length, formats);
              }, source2, index, 0);
            }
          }, {
            key: "formatText",
            value: function formatText(index, length, name, value2, source2) {
              var _this6 = this;
              var formats = void 0;
              var _overload5 = overload(index, length, name, value2, source2);
              var _overload6 = _slicedToArray(_overload5, 4);
              index = _overload6[0];
              length = _overload6[1];
              formats = _overload6[2];
              source2 = _overload6[3];
              return modify.call(this, function() {
                return _this6.editor.formatText(index, length, formats);
              }, source2, index, 0);
            }
          }, {
            key: "getBounds",
            value: function getBounds(index) {
              var length = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
              var bounds = void 0;
              if (typeof index === "number") {
                bounds = this.selection.getBounds(index, length);
              } else {
                bounds = this.selection.getBounds(index.index, index.length);
              }
              var containerBounds = this.container.getBoundingClientRect();
              return {
                bottom: bounds.bottom - containerBounds.top,
                height: bounds.height,
                left: bounds.left - containerBounds.left,
                right: bounds.right - containerBounds.left,
                top: bounds.top - containerBounds.top,
                width: bounds.width
              };
            }
          }, {
            key: "getContents",
            value: function getContents() {
              var index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
              var length = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.getLength() - index;
              var _overload7 = overload(index, length);
              var _overload8 = _slicedToArray(_overload7, 2);
              index = _overload8[0];
              length = _overload8[1];
              return this.editor.getContents(index, length);
            }
          }, {
            key: "getFormat",
            value: function getFormat() {
              var index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.getSelection(true);
              var length = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
              if (typeof index === "number") {
                return this.editor.getFormat(index, length);
              } else {
                return this.editor.getFormat(index.index, index.length);
              }
            }
          }, {
            key: "getIndex",
            value: function getIndex(blot) {
              return blot.offset(this.scroll);
            }
          }, {
            key: "getLength",
            value: function getLength() {
              return this.scroll.length();
            }
          }, {
            key: "getLeaf",
            value: function getLeaf(index) {
              return this.scroll.leaf(index);
            }
          }, {
            key: "getLine",
            value: function getLine(index) {
              return this.scroll.line(index);
            }
          }, {
            key: "getLines",
            value: function getLines() {
              var index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
              var length = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE;
              if (typeof index !== "number") {
                return this.scroll.lines(index.index, index.length);
              } else {
                return this.scroll.lines(index, length);
              }
            }
          }, {
            key: "getModule",
            value: function getModule(name) {
              return this.theme.modules[name];
            }
          }, {
            key: "getSelection",
            value: function getSelection() {
              var focus = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
              if (focus)
                this.focus();
              this.update();
              return this.selection.getRange()[0];
            }
          }, {
            key: "getText",
            value: function getText() {
              var index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
              var length = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.getLength() - index;
              var _overload9 = overload(index, length);
              var _overload10 = _slicedToArray(_overload9, 2);
              index = _overload10[0];
              length = _overload10[1];
              return this.editor.getText(index, length);
            }
          }, {
            key: "hasFocus",
            value: function hasFocus() {
              return this.selection.hasFocus();
            }
          }, {
            key: "insertEmbed",
            value: function insertEmbed(index, embed, value2) {
              var _this7 = this;
              var source2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Quill3.sources.API;
              return modify.call(this, function() {
                return _this7.editor.insertEmbed(index, embed, value2);
              }, source2, index);
            }
          }, {
            key: "insertText",
            value: function insertText(index, text, name, value2, source2) {
              var _this8 = this;
              var formats = void 0;
              var _overload11 = overload(index, 0, name, value2, source2);
              var _overload12 = _slicedToArray(_overload11, 4);
              index = _overload12[0];
              formats = _overload12[2];
              source2 = _overload12[3];
              return modify.call(this, function() {
                return _this8.editor.insertText(index, text, formats);
              }, source2, index, text.length);
            }
          }, {
            key: "isEnabled",
            value: function isEnabled() {
              return !this.container.classList.contains("ql-disabled");
            }
          }, {
            key: "off",
            value: function off() {
              return this.emitter.off.apply(this.emitter, arguments);
            }
          }, {
            key: "on",
            value: function on() {
              return this.emitter.on.apply(this.emitter, arguments);
            }
          }, {
            key: "once",
            value: function once() {
              return this.emitter.once.apply(this.emitter, arguments);
            }
          }, {
            key: "pasteHTML",
            value: function pasteHTML(index, html, source2) {
              this.clipboard.dangerouslyPasteHTML(index, html, source2);
            }
          }, {
            key: "removeFormat",
            value: function removeFormat(index, length, source2) {
              var _this9 = this;
              var _overload13 = overload(index, length, source2);
              var _overload14 = _slicedToArray(_overload13, 4);
              index = _overload14[0];
              length = _overload14[1];
              source2 = _overload14[3];
              return modify.call(this, function() {
                return _this9.editor.removeFormat(index, length);
              }, source2, index);
            }
          }, {
            key: "scrollIntoView",
            value: function scrollIntoView() {
              this.selection.scrollIntoView(this.scrollingContainer);
            }
          }, {
            key: "setContents",
            value: function setContents(delta) {
              var _this10 = this;
              var source2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _emitter4.default.sources.API;
              return modify.call(this, function() {
                delta = new _quillDelta2.default(delta);
                var length = _this10.getLength();
                var deleted = _this10.editor.deleteText(0, length);
                var applied = _this10.editor.applyDelta(delta);
                var lastOp = applied.ops[applied.ops.length - 1];
                if (lastOp != null && typeof lastOp.insert === "string" && lastOp.insert[lastOp.insert.length - 1] === "\n") {
                  _this10.editor.deleteText(_this10.getLength() - 1, 1);
                  applied.delete(1);
                }
                var ret = deleted.compose(applied);
                return ret;
              }, source2);
            }
          }, {
            key: "setSelection",
            value: function setSelection(index, length, source2) {
              if (index == null) {
                this.selection.setRange(null, length || Quill3.sources.API);
              } else {
                var _overload15 = overload(index, length, source2);
                var _overload16 = _slicedToArray(_overload15, 4);
                index = _overload16[0];
                length = _overload16[1];
                source2 = _overload16[3];
                this.selection.setRange(new _selection.Range(index, length), source2);
                if (source2 !== _emitter4.default.sources.SILENT) {
                  this.selection.scrollIntoView(this.scrollingContainer);
                }
              }
            }
          }, {
            key: "setText",
            value: function setText(text) {
              var source2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _emitter4.default.sources.API;
              var delta = new _quillDelta2.default().insert(text);
              return this.setContents(delta, source2);
            }
          }, {
            key: "update",
            value: function update() {
              var source2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _emitter4.default.sources.USER;
              var change = this.scroll.update(source2);
              this.selection.update(source2);
              return change;
            }
          }, {
            key: "updateContents",
            value: function updateContents(delta) {
              var _this11 = this;
              var source2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _emitter4.default.sources.API;
              return modify.call(this, function() {
                delta = new _quillDelta2.default(delta);
                return _this11.editor.applyDelta(delta, source2);
              }, source2, true);
            }
          }]);
          return Quill3;
        }();
        Quill2.DEFAULTS = {
          bounds: null,
          formats: null,
          modules: {},
          placeholder: "",
          readOnly: false,
          scrollingContainer: null,
          strict: true,
          theme: "default"
        };
        Quill2.events = _emitter4.default.events;
        Quill2.sources = _emitter4.default.sources;
        Quill2.version = "1.3.7";
        Quill2.imports = {
          "delta": _quillDelta2.default,
          "parchment": _parchment2.default,
          "core/module": _module2.default,
          "core/theme": _theme2.default
        };
        function expandConfig(container, userConfig) {
          userConfig = (0, _extend2.default)(true, {
            container,
            modules: {
              clipboard: true,
              keyboard: true,
              history: true
            }
          }, userConfig);
          if (!userConfig.theme || userConfig.theme === Quill2.DEFAULTS.theme) {
            userConfig.theme = _theme2.default;
          } else {
            userConfig.theme = Quill2.import("themes/" + userConfig.theme);
            if (userConfig.theme == null) {
              throw new Error("Invalid theme " + userConfig.theme + ". Did you register it?");
            }
          }
          var themeConfig = (0, _extend2.default)(true, {}, userConfig.theme.DEFAULTS);
          [themeConfig, userConfig].forEach(function(config) {
            config.modules = config.modules || {};
            Object.keys(config.modules).forEach(function(module3) {
              if (config.modules[module3] === true) {
                config.modules[module3] = {};
              }
            });
          });
          var moduleNames = Object.keys(themeConfig.modules).concat(Object.keys(userConfig.modules));
          var moduleConfig = moduleNames.reduce(function(config, name) {
            var moduleClass = Quill2.import("modules/" + name);
            if (moduleClass == null) {
              debug.error("Cannot load " + name + " module. Are you sure you registered it?");
            } else {
              config[name] = moduleClass.DEFAULTS || {};
            }
            return config;
          }, {});
          if (userConfig.modules != null && userConfig.modules.toolbar && userConfig.modules.toolbar.constructor !== Object) {
            userConfig.modules.toolbar = {
              container: userConfig.modules.toolbar
            };
          }
          userConfig = (0, _extend2.default)(true, {}, Quill2.DEFAULTS, { modules: moduleConfig }, themeConfig, userConfig);
          ["bounds", "container", "scrollingContainer"].forEach(function(key) {
            if (typeof userConfig[key] === "string") {
              userConfig[key] = document.querySelector(userConfig[key]);
            }
          });
          userConfig.modules = Object.keys(userConfig.modules).reduce(function(config, name) {
            if (userConfig.modules[name]) {
              config[name] = userConfig.modules[name];
            }
            return config;
          }, {});
          return userConfig;
        }
        function modify(modifier, source2, index, shift) {
          if (this.options.strict && !this.isEnabled() && source2 === _emitter4.default.sources.USER) {
            return new _quillDelta2.default();
          }
          var range = index == null ? null : this.getSelection();
          var oldDelta = this.editor.delta;
          var change = modifier();
          if (range != null) {
            if (index === true)
              index = range.index;
            if (shift == null) {
              range = shiftRange(range, change, source2);
            } else if (shift !== 0) {
              range = shiftRange(range, index, shift, source2);
            }
            this.setSelection(range, _emitter4.default.sources.SILENT);
          }
          if (change.length() > 0) {
            var _emitter;
            var args = [_emitter4.default.events.TEXT_CHANGE, change, oldDelta, source2];
            (_emitter = this.emitter).emit.apply(_emitter, [_emitter4.default.events.EDITOR_CHANGE].concat(args));
            if (source2 !== _emitter4.default.sources.SILENT) {
              var _emitter2;
              (_emitter2 = this.emitter).emit.apply(_emitter2, args);
            }
          }
          return change;
        }
        function overload(index, length, name, value2, source2) {
          var formats = {};
          if (typeof index.index === "number" && typeof index.length === "number") {
            if (typeof length !== "number") {
              source2 = value2, value2 = name, name = length, length = index.length, index = index.index;
            } else {
              length = index.length, index = index.index;
            }
          } else if (typeof length !== "number") {
            source2 = value2, value2 = name, name = length, length = 0;
          }
          if ((typeof name === "undefined" ? "undefined" : _typeof(name)) === "object") {
            formats = name;
            source2 = value2;
          } else if (typeof name === "string") {
            if (value2 != null) {
              formats[name] = value2;
            } else {
              source2 = name;
            }
          }
          source2 = source2 || _emitter4.default.sources.API;
          return [index, length, formats, source2];
        }
        function shiftRange(range, index, length, source2) {
          if (range == null)
            return null;
          var start = void 0, end = void 0;
          if (index instanceof _quillDelta2.default) {
            var _map = [range.index, range.index + range.length].map(function(pos) {
              return index.transformPosition(pos, source2 !== _emitter4.default.sources.USER);
            });
            var _map2 = _slicedToArray(_map, 2);
            start = _map2[0];
            end = _map2[1];
          } else {
            var _map3 = [range.index, range.index + range.length].map(function(pos) {
              if (pos < index || pos === index && source2 === _emitter4.default.sources.USER)
                return pos;
              if (length >= 0) {
                return pos + length;
              } else {
                return Math.max(index, pos + length);
              }
            });
            var _map4 = _slicedToArray(_map3, 2);
            start = _map4[0];
            end = _map4[1];
          }
          return new _selection.Range(start, end - start);
        }
        exports2.expandConfig = expandConfig;
        exports2.overload = overload;
        exports2.default = Quill2;
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var _get = function get2(object, property, receiver) {
          if (object === null)
            object = Function.prototype;
          var desc = Object.getOwnPropertyDescriptor(object, property);
          if (desc === void 0) {
            var parent = Object.getPrototypeOf(object);
            if (parent === null) {
              return void 0;
            } else {
              return get2(parent, property, receiver);
            }
          } else if ("value" in desc) {
            return desc.value;
          } else {
            var getter = desc.get;
            if (getter === void 0) {
              return void 0;
            }
            return getter.call(receiver);
          }
        };
        var _text = __webpack_require__(7);
        var _text2 = _interopRequireDefault(_text);
        var _parchment = __webpack_require__(0);
        var _parchment2 = _interopRequireDefault(_parchment);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self2, call) {
          if (!self2) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self2;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
          if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var Inline = function(_Parchment$Inline) {
          _inherits(Inline2, _Parchment$Inline);
          function Inline2() {
            _classCallCheck(this, Inline2);
            return _possibleConstructorReturn(this, (Inline2.__proto__ || Object.getPrototypeOf(Inline2)).apply(this, arguments));
          }
          _createClass(Inline2, [{
            key: "formatAt",
            value: function formatAt(index, length, name, value2) {
              if (Inline2.compare(this.statics.blotName, name) < 0 && _parchment2.default.query(name, _parchment2.default.Scope.BLOT)) {
                var blot = this.isolate(index, length);
                if (value2) {
                  blot.wrap(name, value2);
                }
              } else {
                _get(Inline2.prototype.__proto__ || Object.getPrototypeOf(Inline2.prototype), "formatAt", this).call(this, index, length, name, value2);
              }
            }
          }, {
            key: "optimize",
            value: function optimize(context) {
              _get(Inline2.prototype.__proto__ || Object.getPrototypeOf(Inline2.prototype), "optimize", this).call(this, context);
              if (this.parent instanceof Inline2 && Inline2.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
                var parent = this.parent.isolate(this.offset(), this.length());
                this.moveChildren(parent);
                parent.wrap(this);
              }
            }
          }], [{
            key: "compare",
            value: function compare(self2, other) {
              var selfIndex = Inline2.order.indexOf(self2);
              var otherIndex = Inline2.order.indexOf(other);
              if (selfIndex >= 0 || otherIndex >= 0) {
                return selfIndex - otherIndex;
              } else if (self2 === other) {
                return 0;
              } else if (self2 < other) {
                return -1;
              } else {
                return 1;
              }
            }
          }]);
          return Inline2;
        }(_parchment2.default.Inline);
        Inline.allowedChildren = [Inline, _parchment2.default.Embed, _text2.default];
        Inline.order = [
          "cursor",
          "inline",
          "underline",
          "strike",
          "italic",
          "bold",
          "script",
          "link",
          "code"
        ];
        exports2.default = Inline;
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _parchment = __webpack_require__(0);
        var _parchment2 = _interopRequireDefault(_parchment);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self2, call) {
          if (!self2) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self2;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
          if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var TextBlot = function(_Parchment$Text) {
          _inherits(TextBlot2, _Parchment$Text);
          function TextBlot2() {
            _classCallCheck(this, TextBlot2);
            return _possibleConstructorReturn(this, (TextBlot2.__proto__ || Object.getPrototypeOf(TextBlot2)).apply(this, arguments));
          }
          return TextBlot2;
        }(_parchment2.default.Text);
        exports2.default = TextBlot;
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var _get = function get2(object, property, receiver) {
          if (object === null)
            object = Function.prototype;
          var desc = Object.getOwnPropertyDescriptor(object, property);
          if (desc === void 0) {
            var parent = Object.getPrototypeOf(object);
            if (parent === null) {
              return void 0;
            } else {
              return get2(parent, property, receiver);
            }
          } else if ("value" in desc) {
            return desc.value;
          } else {
            var getter = desc.get;
            if (getter === void 0) {
              return void 0;
            }
            return getter.call(receiver);
          }
        };
        var _eventemitter = __webpack_require__(54);
        var _eventemitter2 = _interopRequireDefault(_eventemitter);
        var _logger = __webpack_require__(10);
        var _logger2 = _interopRequireDefault(_logger);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self2, call) {
          if (!self2) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self2;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
          if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var debug = (0, _logger2.default)("quill:events");
        var EVENTS = ["selectionchange", "mousedown", "mouseup", "click"];
        EVENTS.forEach(function(eventName) {
          document.addEventListener(eventName, function() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            [].slice.call(document.querySelectorAll(".ql-container")).forEach(function(node) {
              if (node.__quill && node.__quill.emitter) {
                var _node$__quill$emitter;
                (_node$__quill$emitter = node.__quill.emitter).handleDOM.apply(_node$__quill$emitter, args);
              }
            });
          });
        });
        var Emitter = function(_EventEmitter) {
          _inherits(Emitter2, _EventEmitter);
          function Emitter2() {
            _classCallCheck(this, Emitter2);
            var _this = _possibleConstructorReturn(this, (Emitter2.__proto__ || Object.getPrototypeOf(Emitter2)).call(this));
            _this.listeners = {};
            _this.on("error", debug.error);
            return _this;
          }
          _createClass(Emitter2, [{
            key: "emit",
            value: function emit() {
              debug.log.apply(debug, arguments);
              _get(Emitter2.prototype.__proto__ || Object.getPrototypeOf(Emitter2.prototype), "emit", this).apply(this, arguments);
            }
          }, {
            key: "handleDOM",
            value: function handleDOM(event) {
              for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              (this.listeners[event.type] || []).forEach(function(_ref) {
                var node = _ref.node, handler = _ref.handler;
                if (event.target === node || node.contains(event.target)) {
                  handler.apply(void 0, [event].concat(args));
                }
              });
            }
          }, {
            key: "listenDOM",
            value: function listenDOM(eventName, node, handler) {
              if (!this.listeners[eventName]) {
                this.listeners[eventName] = [];
              }
              this.listeners[eventName].push({ node, handler });
            }
          }]);
          return Emitter2;
        }(_eventemitter2.default);
        Emitter.events = {
          EDITOR_CHANGE: "editor-change",
          SCROLL_BEFORE_UPDATE: "scroll-before-update",
          SCROLL_OPTIMIZE: "scroll-optimize",
          SCROLL_UPDATE: "scroll-update",
          SELECTION_CHANGE: "selection-change",
          TEXT_CHANGE: "text-change"
        };
        Emitter.sources = {
          API: "api",
          SILENT: "silent",
          USER: "user"
        };
        exports2.default = Emitter;
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        var Module = function Module2(quill2) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          _classCallCheck(this, Module2);
          this.quill = quill2;
          this.options = options;
        };
        Module.DEFAULTS = {};
        exports2.default = Module;
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var levels = ["error", "warn", "log", "info"];
        var level = "warn";
        function debug(method) {
          if (levels.indexOf(method) <= levels.indexOf(level)) {
            var _console;
            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }
            (_console = console)[method].apply(_console, args);
          }
        }
        function namespace(ns) {
          return levels.reduce(function(logger, method) {
            logger[method] = debug.bind(console, method, ns);
            return logger;
          }, {});
        }
        debug.level = namespace.level = function(newLevel) {
          level = newLevel;
        };
        exports2.default = namespace;
      },
      function(module2, exports2, __webpack_require__) {
        var pSlice = Array.prototype.slice;
        var objectKeys = __webpack_require__(52);
        var isArguments = __webpack_require__(53);
        var deepEqual = module2.exports = function(actual, expected, opts) {
          if (!opts)
            opts = {};
          if (actual === expected) {
            return true;
          } else if (actual instanceof Date && expected instanceof Date) {
            return actual.getTime() === expected.getTime();
          } else if (!actual || !expected || typeof actual != "object" && typeof expected != "object") {
            return opts.strict ? actual === expected : actual == expected;
          } else {
            return objEquiv(actual, expected, opts);
          }
        };
        function isUndefinedOrNull(value2) {
          return value2 === null || value2 === void 0;
        }
        function isBuffer2(x) {
          if (!x || typeof x !== "object" || typeof x.length !== "number")
            return false;
          if (typeof x.copy !== "function" || typeof x.slice !== "function") {
            return false;
          }
          if (x.length > 0 && typeof x[0] !== "number")
            return false;
          return true;
        }
        function objEquiv(a, b, opts) {
          var i, key;
          if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
            return false;
          if (a.prototype !== b.prototype)
            return false;
          if (isArguments(a)) {
            if (!isArguments(b)) {
              return false;
            }
            a = pSlice.call(a);
            b = pSlice.call(b);
            return deepEqual(a, b, opts);
          }
          if (isBuffer2(a)) {
            if (!isBuffer2(b)) {
              return false;
            }
            if (a.length !== b.length)
              return false;
            for (i = 0; i < a.length; i++) {
              if (a[i] !== b[i])
                return false;
            }
            return true;
          }
          try {
            var ka = objectKeys(a), kb = objectKeys(b);
          } catch (e) {
            return false;
          }
          if (ka.length != kb.length)
            return false;
          ka.sort();
          kb.sort();
          for (i = ka.length - 1; i >= 0; i--) {
            if (ka[i] != kb[i])
              return false;
          }
          for (i = ka.length - 1; i >= 0; i--) {
            key = ka[i];
            if (!deepEqual(a[key], b[key], opts))
              return false;
          }
          return typeof a === typeof b;
        }
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", { value: true });
        var Registry = __webpack_require__(1);
        var Attributor = function() {
          function Attributor2(attrName, keyName, options) {
            if (options === void 0) {
              options = {};
            }
            this.attrName = attrName;
            this.keyName = keyName;
            var attributeBit = Registry.Scope.TYPE & Registry.Scope.ATTRIBUTE;
            if (options.scope != null) {
              this.scope = options.scope & Registry.Scope.LEVEL | attributeBit;
            } else {
              this.scope = Registry.Scope.ATTRIBUTE;
            }
            if (options.whitelist != null)
              this.whitelist = options.whitelist;
          }
          Attributor2.keys = function(node) {
            return [].map.call(node.attributes, function(item) {
              return item.name;
            });
          };
          Attributor2.prototype.add = function(node, value2) {
            if (!this.canAdd(node, value2))
              return false;
            node.setAttribute(this.keyName, value2);
            return true;
          };
          Attributor2.prototype.canAdd = function(node, value2) {
            var match = Registry.query(node, Registry.Scope.BLOT & (this.scope | Registry.Scope.TYPE));
            if (match == null)
              return false;
            if (this.whitelist == null)
              return true;
            if (typeof value2 === "string") {
              return this.whitelist.indexOf(value2.replace(/["']/g, "")) > -1;
            } else {
              return this.whitelist.indexOf(value2) > -1;
            }
          };
          Attributor2.prototype.remove = function(node) {
            node.removeAttribute(this.keyName);
          };
          Attributor2.prototype.value = function(node) {
            var value2 = node.getAttribute(this.keyName);
            if (this.canAdd(node, value2) && value2) {
              return value2;
            }
            return "";
          };
          return Attributor2;
        }();
        exports2.default = Attributor;
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        exports2.default = exports2.Code = void 0;
        var _slicedToArray = function() {
          function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = void 0;
            try {
              for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);
                if (i && _arr.length === i)
                  break;
              }
            } catch (err) {
              _d = true;
              _e = err;
            } finally {
              try {
                if (!_n && _i["return"])
                  _i["return"]();
              } finally {
                if (_d)
                  throw _e;
              }
            }
            return _arr;
          }
          return function(arr, i) {
            if (Array.isArray(arr)) {
              return arr;
            } else if (Symbol.iterator in Object(arr)) {
              return sliceIterator(arr, i);
            } else {
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
          };
        }();
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var _get = function get2(object, property, receiver) {
          if (object === null)
            object = Function.prototype;
          var desc = Object.getOwnPropertyDescriptor(object, property);
          if (desc === void 0) {
            var parent = Object.getPrototypeOf(object);
            if (parent === null) {
              return void 0;
            } else {
              return get2(parent, property, receiver);
            }
          } else if ("value" in desc) {
            return desc.value;
          } else {
            var getter = desc.get;
            if (getter === void 0) {
              return void 0;
            }
            return getter.call(receiver);
          }
        };
        var _quillDelta = __webpack_require__(2);
        var _quillDelta2 = _interopRequireDefault(_quillDelta);
        var _parchment = __webpack_require__(0);
        var _parchment2 = _interopRequireDefault(_parchment);
        var _block = __webpack_require__(4);
        var _block2 = _interopRequireDefault(_block);
        var _inline = __webpack_require__(6);
        var _inline2 = _interopRequireDefault(_inline);
        var _text = __webpack_require__(7);
        var _text2 = _interopRequireDefault(_text);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self2, call) {
          if (!self2) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self2;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
          if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var Code = function(_Inline) {
          _inherits(Code2, _Inline);
          function Code2() {
            _classCallCheck(this, Code2);
            return _possibleConstructorReturn(this, (Code2.__proto__ || Object.getPrototypeOf(Code2)).apply(this, arguments));
          }
          return Code2;
        }(_inline2.default);
        Code.blotName = "code";
        Code.tagName = "CODE";
        var CodeBlock = function(_Block) {
          _inherits(CodeBlock2, _Block);
          function CodeBlock2() {
            _classCallCheck(this, CodeBlock2);
            return _possibleConstructorReturn(this, (CodeBlock2.__proto__ || Object.getPrototypeOf(CodeBlock2)).apply(this, arguments));
          }
          _createClass(CodeBlock2, [{
            key: "delta",
            value: function delta() {
              var _this3 = this;
              var text = this.domNode.textContent;
              if (text.endsWith("\n")) {
                text = text.slice(0, -1);
              }
              return text.split("\n").reduce(function(delta2, frag) {
                return delta2.insert(frag).insert("\n", _this3.formats());
              }, new _quillDelta2.default());
            }
          }, {
            key: "format",
            value: function format(name, value2) {
              if (name === this.statics.blotName && value2)
                return;
              var _descendant = this.descendant(_text2.default, this.length() - 1), _descendant2 = _slicedToArray(_descendant, 1), text = _descendant2[0];
              if (text != null) {
                text.deleteAt(text.length() - 1, 1);
              }
              _get(CodeBlock2.prototype.__proto__ || Object.getPrototypeOf(CodeBlock2.prototype), "format", this).call(this, name, value2);
            }
          }, {
            key: "formatAt",
            value: function formatAt(index, length, name, value2) {
              if (length === 0)
                return;
              if (_parchment2.default.query(name, _parchment2.default.Scope.BLOCK) == null || name === this.statics.blotName && value2 === this.statics.formats(this.domNode)) {
                return;
              }
              var nextNewline = this.newlineIndex(index);
              if (nextNewline < 0 || nextNewline >= index + length)
                return;
              var prevNewline = this.newlineIndex(index, true) + 1;
              var isolateLength = nextNewline - prevNewline + 1;
              var blot = this.isolate(prevNewline, isolateLength);
              var next = blot.next;
              blot.format(name, value2);
              if (next instanceof CodeBlock2) {
                next.formatAt(0, index - prevNewline + length - isolateLength, name, value2);
              }
            }
          }, {
            key: "insertAt",
            value: function insertAt(index, value2, def) {
              if (def != null)
                return;
              var _descendant3 = this.descendant(_text2.default, index), _descendant4 = _slicedToArray(_descendant3, 2), text = _descendant4[0], offset = _descendant4[1];
              text.insertAt(offset, value2);
            }
          }, {
            key: "length",
            value: function length() {
              var length2 = this.domNode.textContent.length;
              if (!this.domNode.textContent.endsWith("\n")) {
                return length2 + 1;
              }
              return length2;
            }
          }, {
            key: "newlineIndex",
            value: function newlineIndex(searchIndex) {
              var reverse = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
              if (!reverse) {
                var offset = this.domNode.textContent.slice(searchIndex).indexOf("\n");
                return offset > -1 ? searchIndex + offset : -1;
              } else {
                return this.domNode.textContent.slice(0, searchIndex).lastIndexOf("\n");
              }
            }
          }, {
            key: "optimize",
            value: function optimize(context) {
              if (!this.domNode.textContent.endsWith("\n")) {
                this.appendChild(_parchment2.default.create("text", "\n"));
              }
              _get(CodeBlock2.prototype.__proto__ || Object.getPrototypeOf(CodeBlock2.prototype), "optimize", this).call(this, context);
              var next = this.next;
              if (next != null && next.prev === this && next.statics.blotName === this.statics.blotName && this.statics.formats(this.domNode) === next.statics.formats(next.domNode)) {
                next.optimize(context);
                next.moveChildren(this);
                next.remove();
              }
            }
          }, {
            key: "replace",
            value: function replace(target) {
              _get(CodeBlock2.prototype.__proto__ || Object.getPrototypeOf(CodeBlock2.prototype), "replace", this).call(this, target);
              [].slice.call(this.domNode.querySelectorAll("*")).forEach(function(node) {
                var blot = _parchment2.default.find(node);
                if (blot == null) {
                  node.parentNode.removeChild(node);
                } else if (blot instanceof _parchment2.default.Embed) {
                  blot.remove();
                } else {
                  blot.unwrap();
                }
              });
            }
          }], [{
            key: "create",
            value: function create(value2) {
              var domNode = _get(CodeBlock2.__proto__ || Object.getPrototypeOf(CodeBlock2), "create", this).call(this, value2);
              domNode.setAttribute("spellcheck", false);
              return domNode;
            }
          }, {
            key: "formats",
            value: function formats() {
              return true;
            }
          }]);
          return CodeBlock2;
        }(_block2.default);
        CodeBlock.blotName = "code-block";
        CodeBlock.tagName = "PRE";
        CodeBlock.TAB = "  ";
        exports2.Code = Code;
        exports2.default = CodeBlock;
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
          return typeof obj;
        } : function(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        var _slicedToArray = function() {
          function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = void 0;
            try {
              for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);
                if (i && _arr.length === i)
                  break;
              }
            } catch (err) {
              _d = true;
              _e = err;
            } finally {
              try {
                if (!_n && _i["return"])
                  _i["return"]();
              } finally {
                if (_d)
                  throw _e;
              }
            }
            return _arr;
          }
          return function(arr, i) {
            if (Array.isArray(arr)) {
              return arr;
            } else if (Symbol.iterator in Object(arr)) {
              return sliceIterator(arr, i);
            } else {
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
          };
        }();
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var _quillDelta = __webpack_require__(2);
        var _quillDelta2 = _interopRequireDefault(_quillDelta);
        var _op = __webpack_require__(20);
        var _op2 = _interopRequireDefault(_op);
        var _parchment = __webpack_require__(0);
        var _parchment2 = _interopRequireDefault(_parchment);
        var _code = __webpack_require__(13);
        var _code2 = _interopRequireDefault(_code);
        var _cursor = __webpack_require__(24);
        var _cursor2 = _interopRequireDefault(_cursor);
        var _block = __webpack_require__(4);
        var _block2 = _interopRequireDefault(_block);
        var _break = __webpack_require__(16);
        var _break2 = _interopRequireDefault(_break);
        var _clone = __webpack_require__(21);
        var _clone2 = _interopRequireDefault(_clone);
        var _deepEqual = __webpack_require__(11);
        var _deepEqual2 = _interopRequireDefault(_deepEqual);
        var _extend = __webpack_require__(3);
        var _extend2 = _interopRequireDefault(_extend);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _defineProperty(obj, key, value2) {
          if (key in obj) {
            Object.defineProperty(obj, key, { value: value2, enumerable: true, configurable: true, writable: true });
          } else {
            obj[key] = value2;
          }
          return obj;
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        var ASCII = /^[ -~]*$/;
        var Editor = function() {
          function Editor2(scroll) {
            _classCallCheck(this, Editor2);
            this.scroll = scroll;
            this.delta = this.getDelta();
          }
          _createClass(Editor2, [{
            key: "applyDelta",
            value: function applyDelta(delta) {
              var _this = this;
              var consumeNextNewline = false;
              this.scroll.update();
              var scrollLength = this.scroll.length();
              this.scroll.batchStart();
              delta = normalizeDelta(delta);
              delta.reduce(function(index, op) {
                var length = op.retain || op.delete || op.insert.length || 1;
                var attributes = op.attributes || {};
                if (op.insert != null) {
                  if (typeof op.insert === "string") {
                    var text = op.insert;
                    if (text.endsWith("\n") && consumeNextNewline) {
                      consumeNextNewline = false;
                      text = text.slice(0, -1);
                    }
                    if (index >= scrollLength && !text.endsWith("\n")) {
                      consumeNextNewline = true;
                    }
                    _this.scroll.insertAt(index, text);
                    var _scroll$line = _this.scroll.line(index), _scroll$line2 = _slicedToArray(_scroll$line, 2), line = _scroll$line2[0], offset = _scroll$line2[1];
                    var formats = (0, _extend2.default)({}, (0, _block.bubbleFormats)(line));
                    if (line instanceof _block2.default) {
                      var _line$descendant = line.descendant(_parchment2.default.Leaf, offset), _line$descendant2 = _slicedToArray(_line$descendant, 1), leaf = _line$descendant2[0];
                      formats = (0, _extend2.default)(formats, (0, _block.bubbleFormats)(leaf));
                    }
                    attributes = _op2.default.attributes.diff(formats, attributes) || {};
                  } else if (_typeof(op.insert) === "object") {
                    var key = Object.keys(op.insert)[0];
                    if (key == null)
                      return index;
                    _this.scroll.insertAt(index, key, op.insert[key]);
                  }
                  scrollLength += length;
                }
                Object.keys(attributes).forEach(function(name) {
                  _this.scroll.formatAt(index, length, name, attributes[name]);
                });
                return index + length;
              }, 0);
              delta.reduce(function(index, op) {
                if (typeof op.delete === "number") {
                  _this.scroll.deleteAt(index, op.delete);
                  return index;
                }
                return index + (op.retain || op.insert.length || 1);
              }, 0);
              this.scroll.batchEnd();
              return this.update(delta);
            }
          }, {
            key: "deleteText",
            value: function deleteText(index, length) {
              this.scroll.deleteAt(index, length);
              return this.update(new _quillDelta2.default().retain(index).delete(length));
            }
          }, {
            key: "formatLine",
            value: function formatLine(index, length) {
              var _this2 = this;
              var formats = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
              this.scroll.update();
              Object.keys(formats).forEach(function(format) {
                if (_this2.scroll.whitelist != null && !_this2.scroll.whitelist[format])
                  return;
                var lines = _this2.scroll.lines(index, Math.max(length, 1));
                var lengthRemaining = length;
                lines.forEach(function(line) {
                  var lineLength = line.length();
                  if (!(line instanceof _code2.default)) {
                    line.format(format, formats[format]);
                  } else {
                    var codeIndex = index - line.offset(_this2.scroll);
                    var codeLength = line.newlineIndex(codeIndex + lengthRemaining) - codeIndex + 1;
                    line.formatAt(codeIndex, codeLength, format, formats[format]);
                  }
                  lengthRemaining -= lineLength;
                });
              });
              this.scroll.optimize();
              return this.update(new _quillDelta2.default().retain(index).retain(length, (0, _clone2.default)(formats)));
            }
          }, {
            key: "formatText",
            value: function formatText(index, length) {
              var _this3 = this;
              var formats = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
              Object.keys(formats).forEach(function(format) {
                _this3.scroll.formatAt(index, length, format, formats[format]);
              });
              return this.update(new _quillDelta2.default().retain(index).retain(length, (0, _clone2.default)(formats)));
            }
          }, {
            key: "getContents",
            value: function getContents(index, length) {
              return this.delta.slice(index, index + length);
            }
          }, {
            key: "getDelta",
            value: function getDelta() {
              return this.scroll.lines().reduce(function(delta, line) {
                return delta.concat(line.delta());
              }, new _quillDelta2.default());
            }
          }, {
            key: "getFormat",
            value: function getFormat(index) {
              var length = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
              var lines = [], leaves = [];
              if (length === 0) {
                this.scroll.path(index).forEach(function(path) {
                  var _path = _slicedToArray(path, 1), blot = _path[0];
                  if (blot instanceof _block2.default) {
                    lines.push(blot);
                  } else if (blot instanceof _parchment2.default.Leaf) {
                    leaves.push(blot);
                  }
                });
              } else {
                lines = this.scroll.lines(index, length);
                leaves = this.scroll.descendants(_parchment2.default.Leaf, index, length);
              }
              var formatsArr = [lines, leaves].map(function(blots) {
                if (blots.length === 0)
                  return {};
                var formats = (0, _block.bubbleFormats)(blots.shift());
                while (Object.keys(formats).length > 0) {
                  var blot = blots.shift();
                  if (blot == null)
                    return formats;
                  formats = combineFormats((0, _block.bubbleFormats)(blot), formats);
                }
                return formats;
              });
              return _extend2.default.apply(_extend2.default, formatsArr);
            }
          }, {
            key: "getText",
            value: function getText(index, length) {
              return this.getContents(index, length).filter(function(op) {
                return typeof op.insert === "string";
              }).map(function(op) {
                return op.insert;
              }).join("");
            }
          }, {
            key: "insertEmbed",
            value: function insertEmbed(index, embed, value2) {
              this.scroll.insertAt(index, embed, value2);
              return this.update(new _quillDelta2.default().retain(index).insert(_defineProperty({}, embed, value2)));
            }
          }, {
            key: "insertText",
            value: function insertText(index, text) {
              var _this4 = this;
              var formats = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
              text = text.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
              this.scroll.insertAt(index, text);
              Object.keys(formats).forEach(function(format) {
                _this4.scroll.formatAt(index, text.length, format, formats[format]);
              });
              return this.update(new _quillDelta2.default().retain(index).insert(text, (0, _clone2.default)(formats)));
            }
          }, {
            key: "isBlank",
            value: function isBlank() {
              if (this.scroll.children.length == 0)
                return true;
              if (this.scroll.children.length > 1)
                return false;
              var block = this.scroll.children.head;
              if (block.statics.blotName !== _block2.default.blotName)
                return false;
              if (block.children.length > 1)
                return false;
              return block.children.head instanceof _break2.default;
            }
          }, {
            key: "removeFormat",
            value: function removeFormat(index, length) {
              var text = this.getText(index, length);
              var _scroll$line3 = this.scroll.line(index + length), _scroll$line4 = _slicedToArray(_scroll$line3, 2), line = _scroll$line4[0], offset = _scroll$line4[1];
              var suffixLength = 0, suffix = new _quillDelta2.default();
              if (line != null) {
                if (!(line instanceof _code2.default)) {
                  suffixLength = line.length() - offset;
                } else {
                  suffixLength = line.newlineIndex(offset) - offset + 1;
                }
                suffix = line.delta().slice(offset, offset + suffixLength - 1).insert("\n");
              }
              var contents = this.getContents(index, length + suffixLength);
              var diff = contents.diff(new _quillDelta2.default().insert(text).concat(suffix));
              var delta = new _quillDelta2.default().retain(index).concat(diff);
              return this.applyDelta(delta);
            }
          }, {
            key: "update",
            value: function update(change) {
              var mutations = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
              var cursorIndex = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
              var oldDelta = this.delta;
              if (mutations.length === 1 && mutations[0].type === "characterData" && mutations[0].target.data.match(ASCII) && _parchment2.default.find(mutations[0].target)) {
                var textBlot = _parchment2.default.find(mutations[0].target);
                var formats = (0, _block.bubbleFormats)(textBlot);
                var index = textBlot.offset(this.scroll);
                var oldValue = mutations[0].oldValue.replace(_cursor2.default.CONTENTS, "");
                var oldText = new _quillDelta2.default().insert(oldValue);
                var newText = new _quillDelta2.default().insert(textBlot.value());
                var diffDelta = new _quillDelta2.default().retain(index).concat(oldText.diff(newText, cursorIndex));
                change = diffDelta.reduce(function(delta, op) {
                  if (op.insert) {
                    return delta.insert(op.insert, formats);
                  } else {
                    return delta.push(op);
                  }
                }, new _quillDelta2.default());
                this.delta = oldDelta.compose(change);
              } else {
                this.delta = this.getDelta();
                if (!change || !(0, _deepEqual2.default)(oldDelta.compose(change), this.delta)) {
                  change = oldDelta.diff(this.delta, cursorIndex);
                }
              }
              return change;
            }
          }]);
          return Editor2;
        }();
        function combineFormats(formats, combined) {
          return Object.keys(combined).reduce(function(merged, name) {
            if (formats[name] == null)
              return merged;
            if (combined[name] === formats[name]) {
              merged[name] = combined[name];
            } else if (Array.isArray(combined[name])) {
              if (combined[name].indexOf(formats[name]) < 0) {
                merged[name] = combined[name].concat([formats[name]]);
              }
            } else {
              merged[name] = [combined[name], formats[name]];
            }
            return merged;
          }, {});
        }
        function normalizeDelta(delta) {
          return delta.reduce(function(delta2, op) {
            if (op.insert === 1) {
              var attributes = (0, _clone2.default)(op.attributes);
              delete attributes["image"];
              return delta2.insert({ image: op.attributes.image }, attributes);
            }
            if (op.attributes != null && (op.attributes.list === true || op.attributes.bullet === true)) {
              op = (0, _clone2.default)(op);
              if (op.attributes.list) {
                op.attributes.list = "ordered";
              } else {
                op.attributes.list = "bullet";
                delete op.attributes.bullet;
              }
            }
            if (typeof op.insert === "string") {
              var text = op.insert.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
              return delta2.insert(text, op.attributes);
            }
            return delta2.push(op);
          }, new _quillDelta2.default());
        }
        exports2.default = Editor;
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        exports2.default = exports2.Range = void 0;
        var _slicedToArray = function() {
          function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = void 0;
            try {
              for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);
                if (i && _arr.length === i)
                  break;
              }
            } catch (err) {
              _d = true;
              _e = err;
            } finally {
              try {
                if (!_n && _i["return"])
                  _i["return"]();
              } finally {
                if (_d)
                  throw _e;
              }
            }
            return _arr;
          }
          return function(arr, i) {
            if (Array.isArray(arr)) {
              return arr;
            } else if (Symbol.iterator in Object(arr)) {
              return sliceIterator(arr, i);
            } else {
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
          };
        }();
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var _parchment = __webpack_require__(0);
        var _parchment2 = _interopRequireDefault(_parchment);
        var _clone = __webpack_require__(21);
        var _clone2 = _interopRequireDefault(_clone);
        var _deepEqual = __webpack_require__(11);
        var _deepEqual2 = _interopRequireDefault(_deepEqual);
        var _emitter3 = __webpack_require__(8);
        var _emitter4 = _interopRequireDefault(_emitter3);
        var _logger = __webpack_require__(10);
        var _logger2 = _interopRequireDefault(_logger);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _toConsumableArray(arr) {
          if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
              arr2[i] = arr[i];
            }
            return arr2;
          } else {
            return Array.from(arr);
          }
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        var debug = (0, _logger2.default)("quill:selection");
        var Range = function Range2(index) {
          var length = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          _classCallCheck(this, Range2);
          this.index = index;
          this.length = length;
        };
        var Selection = function() {
          function Selection2(scroll, emitter2) {
            var _this = this;
            _classCallCheck(this, Selection2);
            this.emitter = emitter2;
            this.scroll = scroll;
            this.composing = false;
            this.mouseDown = false;
            this.root = this.scroll.domNode;
            this.cursor = _parchment2.default.create("cursor", this);
            this.lastRange = this.savedRange = new Range(0, 0);
            this.handleComposition();
            this.handleDragging();
            this.emitter.listenDOM("selectionchange", document, function() {
              if (!_this.mouseDown) {
                setTimeout(_this.update.bind(_this, _emitter4.default.sources.USER), 1);
              }
            });
            this.emitter.on(_emitter4.default.events.EDITOR_CHANGE, function(type, delta) {
              if (type === _emitter4.default.events.TEXT_CHANGE && delta.length() > 0) {
                _this.update(_emitter4.default.sources.SILENT);
              }
            });
            this.emitter.on(_emitter4.default.events.SCROLL_BEFORE_UPDATE, function() {
              if (!_this.hasFocus())
                return;
              var native = _this.getNativeRange();
              if (native == null)
                return;
              if (native.start.node === _this.cursor.textNode)
                return;
              _this.emitter.once(_emitter4.default.events.SCROLL_UPDATE, function() {
                try {
                  _this.setNativeRange(native.start.node, native.start.offset, native.end.node, native.end.offset);
                } catch (ignored) {
                }
              });
            });
            this.emitter.on(_emitter4.default.events.SCROLL_OPTIMIZE, function(mutations, context) {
              if (context.range) {
                var _context$range = context.range, startNode = _context$range.startNode, startOffset = _context$range.startOffset, endNode = _context$range.endNode, endOffset = _context$range.endOffset;
                _this.setNativeRange(startNode, startOffset, endNode, endOffset);
              }
            });
            this.update(_emitter4.default.sources.SILENT);
          }
          _createClass(Selection2, [{
            key: "handleComposition",
            value: function handleComposition() {
              var _this2 = this;
              this.root.addEventListener("compositionstart", function() {
                _this2.composing = true;
              });
              this.root.addEventListener("compositionend", function() {
                _this2.composing = false;
                if (_this2.cursor.parent) {
                  var range = _this2.cursor.restore();
                  if (!range)
                    return;
                  setTimeout(function() {
                    _this2.setNativeRange(range.startNode, range.startOffset, range.endNode, range.endOffset);
                  }, 1);
                }
              });
            }
          }, {
            key: "handleDragging",
            value: function handleDragging() {
              var _this3 = this;
              this.emitter.listenDOM("mousedown", document.body, function() {
                _this3.mouseDown = true;
              });
              this.emitter.listenDOM("mouseup", document.body, function() {
                _this3.mouseDown = false;
                _this3.update(_emitter4.default.sources.USER);
              });
            }
          }, {
            key: "focus",
            value: function focus() {
              if (this.hasFocus())
                return;
              this.root.focus();
              this.setRange(this.savedRange);
            }
          }, {
            key: "format",
            value: function format(_format, value2) {
              if (this.scroll.whitelist != null && !this.scroll.whitelist[_format])
                return;
              this.scroll.update();
              var nativeRange = this.getNativeRange();
              if (nativeRange == null || !nativeRange.native.collapsed || _parchment2.default.query(_format, _parchment2.default.Scope.BLOCK))
                return;
              if (nativeRange.start.node !== this.cursor.textNode) {
                var blot = _parchment2.default.find(nativeRange.start.node, false);
                if (blot == null)
                  return;
                if (blot instanceof _parchment2.default.Leaf) {
                  var after = blot.split(nativeRange.start.offset);
                  blot.parent.insertBefore(this.cursor, after);
                } else {
                  blot.insertBefore(this.cursor, nativeRange.start.node);
                }
                this.cursor.attach();
              }
              this.cursor.format(_format, value2);
              this.scroll.optimize();
              this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length);
              this.update();
            }
          }, {
            key: "getBounds",
            value: function getBounds(index) {
              var length = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
              var scrollLength = this.scroll.length();
              index = Math.min(index, scrollLength - 1);
              length = Math.min(index + length, scrollLength - 1) - index;
              var node = void 0, _scroll$leaf = this.scroll.leaf(index), _scroll$leaf2 = _slicedToArray(_scroll$leaf, 2), leaf = _scroll$leaf2[0], offset = _scroll$leaf2[1];
              if (leaf == null)
                return null;
              var _leaf$position = leaf.position(offset, true);
              var _leaf$position2 = _slicedToArray(_leaf$position, 2);
              node = _leaf$position2[0];
              offset = _leaf$position2[1];
              var range = document.createRange();
              if (length > 0) {
                range.setStart(node, offset);
                var _scroll$leaf3 = this.scroll.leaf(index + length);
                var _scroll$leaf4 = _slicedToArray(_scroll$leaf3, 2);
                leaf = _scroll$leaf4[0];
                offset = _scroll$leaf4[1];
                if (leaf == null)
                  return null;
                var _leaf$position3 = leaf.position(offset, true);
                var _leaf$position4 = _slicedToArray(_leaf$position3, 2);
                node = _leaf$position4[0];
                offset = _leaf$position4[1];
                range.setEnd(node, offset);
                return range.getBoundingClientRect();
              } else {
                var side = "left";
                var rect = void 0;
                if (node instanceof Text) {
                  if (offset < node.data.length) {
                    range.setStart(node, offset);
                    range.setEnd(node, offset + 1);
                  } else {
                    range.setStart(node, offset - 1);
                    range.setEnd(node, offset);
                    side = "right";
                  }
                  rect = range.getBoundingClientRect();
                } else {
                  rect = leaf.domNode.getBoundingClientRect();
                  if (offset > 0)
                    side = "right";
                }
                return {
                  bottom: rect.top + rect.height,
                  height: rect.height,
                  left: rect[side],
                  right: rect[side],
                  top: rect.top,
                  width: 0
                };
              }
            }
          }, {
            key: "getNativeRange",
            value: function getNativeRange() {
              var selection = document.getSelection();
              if (selection == null || selection.rangeCount <= 0)
                return null;
              var nativeRange = selection.getRangeAt(0);
              if (nativeRange == null)
                return null;
              var range = this.normalizeNative(nativeRange);
              debug.info("getNativeRange", range);
              return range;
            }
          }, {
            key: "getRange",
            value: function getRange() {
              var normalized = this.getNativeRange();
              if (normalized == null)
                return [null, null];
              var range = this.normalizedToRange(normalized);
              return [range, normalized];
            }
          }, {
            key: "hasFocus",
            value: function hasFocus() {
              return document.activeElement === this.root;
            }
          }, {
            key: "normalizedToRange",
            value: function normalizedToRange(range) {
              var _this4 = this;
              var positions = [[range.start.node, range.start.offset]];
              if (!range.native.collapsed) {
                positions.push([range.end.node, range.end.offset]);
              }
              var indexes = positions.map(function(position) {
                var _position = _slicedToArray(position, 2), node = _position[0], offset = _position[1];
                var blot = _parchment2.default.find(node, true);
                var index = blot.offset(_this4.scroll);
                if (offset === 0) {
                  return index;
                } else if (blot instanceof _parchment2.default.Container) {
                  return index + blot.length();
                } else {
                  return index + blot.index(node, offset);
                }
              });
              var end = Math.min(Math.max.apply(Math, _toConsumableArray(indexes)), this.scroll.length() - 1);
              var start = Math.min.apply(Math, [end].concat(_toConsumableArray(indexes)));
              return new Range(start, end - start);
            }
          }, {
            key: "normalizeNative",
            value: function normalizeNative(nativeRange) {
              if (!contains(this.root, nativeRange.startContainer) || !nativeRange.collapsed && !contains(this.root, nativeRange.endContainer)) {
                return null;
              }
              var range = {
                start: { node: nativeRange.startContainer, offset: nativeRange.startOffset },
                end: { node: nativeRange.endContainer, offset: nativeRange.endOffset },
                native: nativeRange
              };
              [range.start, range.end].forEach(function(position) {
                var node = position.node, offset = position.offset;
                while (!(node instanceof Text) && node.childNodes.length > 0) {
                  if (node.childNodes.length > offset) {
                    node = node.childNodes[offset];
                    offset = 0;
                  } else if (node.childNodes.length === offset) {
                    node = node.lastChild;
                    offset = node instanceof Text ? node.data.length : node.childNodes.length + 1;
                  } else {
                    break;
                  }
                }
                position.node = node, position.offset = offset;
              });
              return range;
            }
          }, {
            key: "rangeToNative",
            value: function rangeToNative(range) {
              var _this5 = this;
              var indexes = range.collapsed ? [range.index] : [range.index, range.index + range.length];
              var args = [];
              var scrollLength = this.scroll.length();
              indexes.forEach(function(index, i) {
                index = Math.min(scrollLength - 1, index);
                var node = void 0, _scroll$leaf5 = _this5.scroll.leaf(index), _scroll$leaf6 = _slicedToArray(_scroll$leaf5, 2), leaf = _scroll$leaf6[0], offset = _scroll$leaf6[1];
                var _leaf$position5 = leaf.position(offset, i !== 0);
                var _leaf$position6 = _slicedToArray(_leaf$position5, 2);
                node = _leaf$position6[0];
                offset = _leaf$position6[1];
                args.push(node, offset);
              });
              if (args.length < 2) {
                args = args.concat(args);
              }
              return args;
            }
          }, {
            key: "scrollIntoView",
            value: function scrollIntoView(scrollingContainer) {
              var range = this.lastRange;
              if (range == null)
                return;
              var bounds = this.getBounds(range.index, range.length);
              if (bounds == null)
                return;
              var limit = this.scroll.length() - 1;
              var _scroll$line = this.scroll.line(Math.min(range.index, limit)), _scroll$line2 = _slicedToArray(_scroll$line, 1), first = _scroll$line2[0];
              var last = first;
              if (range.length > 0) {
                var _scroll$line3 = this.scroll.line(Math.min(range.index + range.length, limit));
                var _scroll$line4 = _slicedToArray(_scroll$line3, 1);
                last = _scroll$line4[0];
              }
              if (first == null || last == null)
                return;
              var scrollBounds = scrollingContainer.getBoundingClientRect();
              if (bounds.top < scrollBounds.top) {
                scrollingContainer.scrollTop -= scrollBounds.top - bounds.top;
              } else if (bounds.bottom > scrollBounds.bottom) {
                scrollingContainer.scrollTop += bounds.bottom - scrollBounds.bottom;
              }
            }
          }, {
            key: "setNativeRange",
            value: function setNativeRange(startNode, startOffset) {
              var endNode = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : startNode;
              var endOffset = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : startOffset;
              var force = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
              debug.info("setNativeRange", startNode, startOffset, endNode, endOffset);
              if (startNode != null && (this.root.parentNode == null || startNode.parentNode == null || endNode.parentNode == null)) {
                return;
              }
              var selection = document.getSelection();
              if (selection == null)
                return;
              if (startNode != null) {
                if (!this.hasFocus())
                  this.root.focus();
                var native = (this.getNativeRange() || {}).native;
                if (native == null || force || startNode !== native.startContainer || startOffset !== native.startOffset || endNode !== native.endContainer || endOffset !== native.endOffset) {
                  if (startNode.tagName == "BR") {
                    startOffset = [].indexOf.call(startNode.parentNode.childNodes, startNode);
                    startNode = startNode.parentNode;
                  }
                  if (endNode.tagName == "BR") {
                    endOffset = [].indexOf.call(endNode.parentNode.childNodes, endNode);
                    endNode = endNode.parentNode;
                  }
                  var range = document.createRange();
                  range.setStart(startNode, startOffset);
                  range.setEnd(endNode, endOffset);
                  selection.removeAllRanges();
                  selection.addRange(range);
                }
              } else {
                selection.removeAllRanges();
                this.root.blur();
                document.body.focus();
              }
            }
          }, {
            key: "setRange",
            value: function setRange(range) {
              var force = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
              var source2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _emitter4.default.sources.API;
              if (typeof force === "string") {
                source2 = force;
                force = false;
              }
              debug.info("setRange", range);
              if (range != null) {
                var args = this.rangeToNative(range);
                this.setNativeRange.apply(this, _toConsumableArray(args).concat([force]));
              } else {
                this.setNativeRange(null);
              }
              this.update(source2);
            }
          }, {
            key: "update",
            value: function update() {
              var source2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _emitter4.default.sources.USER;
              var oldRange = this.lastRange;
              var _getRange = this.getRange(), _getRange2 = _slicedToArray(_getRange, 2), lastRange = _getRange2[0], nativeRange = _getRange2[1];
              this.lastRange = lastRange;
              if (this.lastRange != null) {
                this.savedRange = this.lastRange;
              }
              if (!(0, _deepEqual2.default)(oldRange, this.lastRange)) {
                var _emitter;
                if (!this.composing && nativeRange != null && nativeRange.native.collapsed && nativeRange.start.node !== this.cursor.textNode) {
                  this.cursor.restore();
                }
                var args = [_emitter4.default.events.SELECTION_CHANGE, (0, _clone2.default)(this.lastRange), (0, _clone2.default)(oldRange), source2];
                (_emitter = this.emitter).emit.apply(_emitter, [_emitter4.default.events.EDITOR_CHANGE].concat(args));
                if (source2 !== _emitter4.default.sources.SILENT) {
                  var _emitter2;
                  (_emitter2 = this.emitter).emit.apply(_emitter2, args);
                }
              }
            }
          }]);
          return Selection2;
        }();
        function contains(parent, descendant) {
          try {
            descendant.parentNode;
          } catch (e) {
            return false;
          }
          if (descendant instanceof Text) {
            descendant = descendant.parentNode;
          }
          return parent.contains(descendant);
        }
        exports2.Range = Range;
        exports2.default = Selection;
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var _get = function get2(object, property, receiver) {
          if (object === null)
            object = Function.prototype;
          var desc = Object.getOwnPropertyDescriptor(object, property);
          if (desc === void 0) {
            var parent = Object.getPrototypeOf(object);
            if (parent === null) {
              return void 0;
            } else {
              return get2(parent, property, receiver);
            }
          } else if ("value" in desc) {
            return desc.value;
          } else {
            var getter = desc.get;
            if (getter === void 0) {
              return void 0;
            }
            return getter.call(receiver);
          }
        };
        var _parchment = __webpack_require__(0);
        var _parchment2 = _interopRequireDefault(_parchment);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self2, call) {
          if (!self2) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self2;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
          if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var Break = function(_Parchment$Embed) {
          _inherits(Break2, _Parchment$Embed);
          function Break2() {
            _classCallCheck(this, Break2);
            return _possibleConstructorReturn(this, (Break2.__proto__ || Object.getPrototypeOf(Break2)).apply(this, arguments));
          }
          _createClass(Break2, [{
            key: "insertInto",
            value: function insertInto(parent, ref2) {
              if (parent.children.length === 0) {
                _get(Break2.prototype.__proto__ || Object.getPrototypeOf(Break2.prototype), "insertInto", this).call(this, parent, ref2);
              } else {
                this.remove();
              }
            }
          }, {
            key: "length",
            value: function length() {
              return 0;
            }
          }, {
            key: "value",
            value: function value2() {
              return "";
            }
          }], [{
            key: "value",
            value: function value2() {
              return void 0;
            }
          }]);
          return Break2;
        }(_parchment2.default.Embed);
        Break.blotName = "break";
        Break.tagName = "BR";
        exports2.default = Break;
      },
      function(module2, exports2, __webpack_require__) {
        var __extends = this && this.__extends || function() {
          var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
            d.__proto__ = b;
          } || function(d, b) {
            for (var p in b)
              if (b.hasOwnProperty(p))
                d[p] = b[p];
          };
          return function(d, b) {
            extendStatics(d, b);
            function __() {
              this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
          };
        }();
        Object.defineProperty(exports2, "__esModule", { value: true });
        var linked_list_1 = __webpack_require__(44);
        var shadow_1 = __webpack_require__(30);
        var Registry = __webpack_require__(1);
        var ContainerBlot = function(_super) {
          __extends(ContainerBlot2, _super);
          function ContainerBlot2(domNode) {
            var _this = _super.call(this, domNode) || this;
            _this.build();
            return _this;
          }
          ContainerBlot2.prototype.appendChild = function(other) {
            this.insertBefore(other);
          };
          ContainerBlot2.prototype.attach = function() {
            _super.prototype.attach.call(this);
            this.children.forEach(function(child) {
              child.attach();
            });
          };
          ContainerBlot2.prototype.build = function() {
            var _this = this;
            this.children = new linked_list_1.default();
            [].slice.call(this.domNode.childNodes).reverse().forEach(function(node) {
              try {
                var child = makeBlot(node);
                _this.insertBefore(child, _this.children.head || void 0);
              } catch (err) {
                if (err instanceof Registry.ParchmentError)
                  return;
                else
                  throw err;
              }
            });
          };
          ContainerBlot2.prototype.deleteAt = function(index, length) {
            if (index === 0 && length === this.length()) {
              return this.remove();
            }
            this.children.forEachAt(index, length, function(child, offset, length2) {
              child.deleteAt(offset, length2);
            });
          };
          ContainerBlot2.prototype.descendant = function(criteria, index) {
            var _a = this.children.find(index), child = _a[0], offset = _a[1];
            if (criteria.blotName == null && criteria(child) || criteria.blotName != null && child instanceof criteria) {
              return [child, offset];
            } else if (child instanceof ContainerBlot2) {
              return child.descendant(criteria, offset);
            } else {
              return [null, -1];
            }
          };
          ContainerBlot2.prototype.descendants = function(criteria, index, length) {
            if (index === void 0) {
              index = 0;
            }
            if (length === void 0) {
              length = Number.MAX_VALUE;
            }
            var descendants = [];
            var lengthLeft = length;
            this.children.forEachAt(index, length, function(child, index2, length2) {
              if (criteria.blotName == null && criteria(child) || criteria.blotName != null && child instanceof criteria) {
                descendants.push(child);
              }
              if (child instanceof ContainerBlot2) {
                descendants = descendants.concat(child.descendants(criteria, index2, lengthLeft));
              }
              lengthLeft -= length2;
            });
            return descendants;
          };
          ContainerBlot2.prototype.detach = function() {
            this.children.forEach(function(child) {
              child.detach();
            });
            _super.prototype.detach.call(this);
          };
          ContainerBlot2.prototype.formatAt = function(index, length, name, value2) {
            this.children.forEachAt(index, length, function(child, offset, length2) {
              child.formatAt(offset, length2, name, value2);
            });
          };
          ContainerBlot2.prototype.insertAt = function(index, value2, def) {
            var _a = this.children.find(index), child = _a[0], offset = _a[1];
            if (child) {
              child.insertAt(offset, value2, def);
            } else {
              var blot = def == null ? Registry.create("text", value2) : Registry.create(value2, def);
              this.appendChild(blot);
            }
          };
          ContainerBlot2.prototype.insertBefore = function(childBlot, refBlot) {
            if (this.statics.allowedChildren != null && !this.statics.allowedChildren.some(function(child) {
              return childBlot instanceof child;
            })) {
              throw new Registry.ParchmentError("Cannot insert " + childBlot.statics.blotName + " into " + this.statics.blotName);
            }
            childBlot.insertInto(this, refBlot);
          };
          ContainerBlot2.prototype.length = function() {
            return this.children.reduce(function(memo, child) {
              return memo + child.length();
            }, 0);
          };
          ContainerBlot2.prototype.moveChildren = function(targetParent, refNode) {
            this.children.forEach(function(child) {
              targetParent.insertBefore(child, refNode);
            });
          };
          ContainerBlot2.prototype.optimize = function(context) {
            _super.prototype.optimize.call(this, context);
            if (this.children.length === 0) {
              if (this.statics.defaultChild != null) {
                var child = Registry.create(this.statics.defaultChild);
                this.appendChild(child);
                child.optimize(context);
              } else {
                this.remove();
              }
            }
          };
          ContainerBlot2.prototype.path = function(index, inclusive) {
            if (inclusive === void 0) {
              inclusive = false;
            }
            var _a = this.children.find(index, inclusive), child = _a[0], offset = _a[1];
            var position = [[this, index]];
            if (child instanceof ContainerBlot2) {
              return position.concat(child.path(offset, inclusive));
            } else if (child != null) {
              position.push([child, offset]);
            }
            return position;
          };
          ContainerBlot2.prototype.removeChild = function(child) {
            this.children.remove(child);
          };
          ContainerBlot2.prototype.replace = function(target) {
            if (target instanceof ContainerBlot2) {
              target.moveChildren(this);
            }
            _super.prototype.replace.call(this, target);
          };
          ContainerBlot2.prototype.split = function(index, force) {
            if (force === void 0) {
              force = false;
            }
            if (!force) {
              if (index === 0)
                return this;
              if (index === this.length())
                return this.next;
            }
            var after = this.clone();
            this.parent.insertBefore(after, this.next);
            this.children.forEachAt(index, this.length(), function(child, offset, length) {
              child = child.split(offset, force);
              after.appendChild(child);
            });
            return after;
          };
          ContainerBlot2.prototype.unwrap = function() {
            this.moveChildren(this.parent, this.next);
            this.remove();
          };
          ContainerBlot2.prototype.update = function(mutations, context) {
            var _this = this;
            var addedNodes = [];
            var removedNodes = [];
            mutations.forEach(function(mutation) {
              if (mutation.target === _this.domNode && mutation.type === "childList") {
                addedNodes.push.apply(addedNodes, mutation.addedNodes);
                removedNodes.push.apply(removedNodes, mutation.removedNodes);
              }
            });
            removedNodes.forEach(function(node) {
              if (node.parentNode != null && node.tagName !== "IFRAME" && document.body.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_CONTAINED_BY) {
                return;
              }
              var blot = Registry.find(node);
              if (blot == null)
                return;
              if (blot.domNode.parentNode == null || blot.domNode.parentNode === _this.domNode) {
                blot.detach();
              }
            });
            addedNodes.filter(function(node) {
              return node.parentNode == _this.domNode;
            }).sort(function(a, b) {
              if (a === b)
                return 0;
              if (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING) {
                return 1;
              }
              return -1;
            }).forEach(function(node) {
              var refBlot = null;
              if (node.nextSibling != null) {
                refBlot = Registry.find(node.nextSibling);
              }
              var blot = makeBlot(node);
              if (blot.next != refBlot || blot.next == null) {
                if (blot.parent != null) {
                  blot.parent.removeChild(_this);
                }
                _this.insertBefore(blot, refBlot || void 0);
              }
            });
          };
          return ContainerBlot2;
        }(shadow_1.default);
        function makeBlot(node) {
          var blot = Registry.find(node);
          if (blot == null) {
            try {
              blot = Registry.create(node);
            } catch (e) {
              blot = Registry.create(Registry.Scope.INLINE);
              [].slice.call(node.childNodes).forEach(function(child) {
                blot.domNode.appendChild(child);
              });
              if (node.parentNode) {
                node.parentNode.replaceChild(blot.domNode, node);
              }
              blot.attach();
            }
          }
          return blot;
        }
        exports2.default = ContainerBlot;
      },
      function(module2, exports2, __webpack_require__) {
        var __extends = this && this.__extends || function() {
          var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
            d.__proto__ = b;
          } || function(d, b) {
            for (var p in b)
              if (b.hasOwnProperty(p))
                d[p] = b[p];
          };
          return function(d, b) {
            extendStatics(d, b);
            function __() {
              this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
          };
        }();
        Object.defineProperty(exports2, "__esModule", { value: true });
        var attributor_1 = __webpack_require__(12);
        var store_1 = __webpack_require__(31);
        var container_1 = __webpack_require__(17);
        var Registry = __webpack_require__(1);
        var FormatBlot = function(_super) {
          __extends(FormatBlot2, _super);
          function FormatBlot2(domNode) {
            var _this = _super.call(this, domNode) || this;
            _this.attributes = new store_1.default(_this.domNode);
            return _this;
          }
          FormatBlot2.formats = function(domNode) {
            if (typeof this.tagName === "string") {
              return true;
            } else if (Array.isArray(this.tagName)) {
              return domNode.tagName.toLowerCase();
            }
            return void 0;
          };
          FormatBlot2.prototype.format = function(name, value2) {
            var format = Registry.query(name);
            if (format instanceof attributor_1.default) {
              this.attributes.attribute(format, value2);
            } else if (value2) {
              if (format != null && (name !== this.statics.blotName || this.formats()[name] !== value2)) {
                this.replaceWith(name, value2);
              }
            }
          };
          FormatBlot2.prototype.formats = function() {
            var formats = this.attributes.values();
            var format = this.statics.formats(this.domNode);
            if (format != null) {
              formats[this.statics.blotName] = format;
            }
            return formats;
          };
          FormatBlot2.prototype.replaceWith = function(name, value2) {
            var replacement = _super.prototype.replaceWith.call(this, name, value2);
            this.attributes.copy(replacement);
            return replacement;
          };
          FormatBlot2.prototype.update = function(mutations, context) {
            var _this = this;
            _super.prototype.update.call(this, mutations, context);
            if (mutations.some(function(mutation) {
              return mutation.target === _this.domNode && mutation.type === "attributes";
            })) {
              this.attributes.build();
            }
          };
          FormatBlot2.prototype.wrap = function(name, value2) {
            var wrapper = _super.prototype.wrap.call(this, name, value2);
            if (wrapper instanceof FormatBlot2 && wrapper.statics.scope === this.statics.scope) {
              this.attributes.move(wrapper);
            }
            return wrapper;
          };
          return FormatBlot2;
        }(container_1.default);
        exports2.default = FormatBlot;
      },
      function(module2, exports2, __webpack_require__) {
        var __extends = this && this.__extends || function() {
          var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
            d.__proto__ = b;
          } || function(d, b) {
            for (var p in b)
              if (b.hasOwnProperty(p))
                d[p] = b[p];
          };
          return function(d, b) {
            extendStatics(d, b);
            function __() {
              this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
          };
        }();
        Object.defineProperty(exports2, "__esModule", { value: true });
        var shadow_1 = __webpack_require__(30);
        var Registry = __webpack_require__(1);
        var LeafBlot = function(_super) {
          __extends(LeafBlot2, _super);
          function LeafBlot2() {
            return _super !== null && _super.apply(this, arguments) || this;
          }
          LeafBlot2.value = function(domNode) {
            return true;
          };
          LeafBlot2.prototype.index = function(node, offset) {
            if (this.domNode === node || this.domNode.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_CONTAINED_BY) {
              return Math.min(offset, 1);
            }
            return -1;
          };
          LeafBlot2.prototype.position = function(index, inclusive) {
            var offset = [].indexOf.call(this.parent.domNode.childNodes, this.domNode);
            if (index > 0)
              offset += 1;
            return [this.parent.domNode, offset];
          };
          LeafBlot2.prototype.value = function() {
            var _a;
            return _a = {}, _a[this.statics.blotName] = this.statics.value(this.domNode) || true, _a;
          };
          LeafBlot2.scope = Registry.Scope.INLINE_BLOT;
          return LeafBlot2;
        }(shadow_1.default);
        exports2.default = LeafBlot;
      },
      function(module2, exports2, __webpack_require__) {
        var equal = __webpack_require__(11);
        var extend2 = __webpack_require__(3);
        var lib = {
          attributes: {
            compose: function(a, b, keepNull) {
              if (typeof a !== "object")
                a = {};
              if (typeof b !== "object")
                b = {};
              var attributes = extend2(true, {}, b);
              if (!keepNull) {
                attributes = Object.keys(attributes).reduce(function(copy, key2) {
                  if (attributes[key2] != null) {
                    copy[key2] = attributes[key2];
                  }
                  return copy;
                }, {});
              }
              for (var key in a) {
                if (a[key] !== void 0 && b[key] === void 0) {
                  attributes[key] = a[key];
                }
              }
              return Object.keys(attributes).length > 0 ? attributes : void 0;
            },
            diff: function(a, b) {
              if (typeof a !== "object")
                a = {};
              if (typeof b !== "object")
                b = {};
              var attributes = Object.keys(a).concat(Object.keys(b)).reduce(function(attributes2, key) {
                if (!equal(a[key], b[key])) {
                  attributes2[key] = b[key] === void 0 ? null : b[key];
                }
                return attributes2;
              }, {});
              return Object.keys(attributes).length > 0 ? attributes : void 0;
            },
            transform: function(a, b, priority) {
              if (typeof a !== "object")
                return b;
              if (typeof b !== "object")
                return void 0;
              if (!priority)
                return b;
              var attributes = Object.keys(b).reduce(function(attributes2, key) {
                if (a[key] === void 0)
                  attributes2[key] = b[key];
                return attributes2;
              }, {});
              return Object.keys(attributes).length > 0 ? attributes : void 0;
            }
          },
          iterator: function(ops) {
            return new Iterator(ops);
          },
          length: function(op) {
            if (typeof op["delete"] === "number") {
              return op["delete"];
            } else if (typeof op.retain === "number") {
              return op.retain;
            } else {
              return typeof op.insert === "string" ? op.insert.length : 1;
            }
          }
        };
        function Iterator(ops) {
          this.ops = ops;
          this.index = 0;
          this.offset = 0;
        }
        Iterator.prototype.hasNext = function() {
          return this.peekLength() < Infinity;
        };
        Iterator.prototype.next = function(length) {
          if (!length)
            length = Infinity;
          var nextOp = this.ops[this.index];
          if (nextOp) {
            var offset = this.offset;
            var opLength = lib.length(nextOp);
            if (length >= opLength - offset) {
              length = opLength - offset;
              this.index += 1;
              this.offset = 0;
            } else {
              this.offset += length;
            }
            if (typeof nextOp["delete"] === "number") {
              return { "delete": length };
            } else {
              var retOp = {};
              if (nextOp.attributes) {
                retOp.attributes = nextOp.attributes;
              }
              if (typeof nextOp.retain === "number") {
                retOp.retain = length;
              } else if (typeof nextOp.insert === "string") {
                retOp.insert = nextOp.insert.substr(offset, length);
              } else {
                retOp.insert = nextOp.insert;
              }
              return retOp;
            }
          } else {
            return { retain: Infinity };
          }
        };
        Iterator.prototype.peek = function() {
          return this.ops[this.index];
        };
        Iterator.prototype.peekLength = function() {
          if (this.ops[this.index]) {
            return lib.length(this.ops[this.index]) - this.offset;
          } else {
            return Infinity;
          }
        };
        Iterator.prototype.peekType = function() {
          if (this.ops[this.index]) {
            if (typeof this.ops[this.index]["delete"] === "number") {
              return "delete";
            } else if (typeof this.ops[this.index].retain === "number") {
              return "retain";
            } else {
              return "insert";
            }
          }
          return "retain";
        };
        Iterator.prototype.rest = function() {
          if (!this.hasNext()) {
            return [];
          } else if (this.offset === 0) {
            return this.ops.slice(this.index);
          } else {
            var offset = this.offset;
            var index = this.index;
            var next = this.next();
            var rest = this.ops.slice(this.index);
            this.offset = offset;
            this.index = index;
            return [next].concat(rest);
          }
        };
        module2.exports = lib;
      },
      function(module2, exports2) {
        var clone = function() {
          function _instanceof(obj, type) {
            return type != null && obj instanceof type;
          }
          var nativeMap;
          try {
            nativeMap = Map;
          } catch (_) {
            nativeMap = function() {
            };
          }
          var nativeSet;
          try {
            nativeSet = Set;
          } catch (_) {
            nativeSet = function() {
            };
          }
          var nativePromise;
          try {
            nativePromise = Promise;
          } catch (_) {
            nativePromise = function() {
            };
          }
          function clone2(parent, circular, depth, prototype, includeNonEnumerable) {
            if (typeof circular === "object") {
              depth = circular.depth;
              prototype = circular.prototype;
              includeNonEnumerable = circular.includeNonEnumerable;
              circular = circular.circular;
            }
            var allParents = [];
            var allChildren = [];
            var useBuffer = typeof Buffer != "undefined";
            if (typeof circular == "undefined")
              circular = true;
            if (typeof depth == "undefined")
              depth = Infinity;
            function _clone(parent2, depth2) {
              if (parent2 === null)
                return null;
              if (depth2 === 0)
                return parent2;
              var child;
              var proto;
              if (typeof parent2 != "object") {
                return parent2;
              }
              if (_instanceof(parent2, nativeMap)) {
                child = new nativeMap();
              } else if (_instanceof(parent2, nativeSet)) {
                child = new nativeSet();
              } else if (_instanceof(parent2, nativePromise)) {
                child = new nativePromise(function(resolve, reject) {
                  parent2.then(function(value2) {
                    resolve(_clone(value2, depth2 - 1));
                  }, function(err) {
                    reject(_clone(err, depth2 - 1));
                  });
                });
              } else if (clone2.__isArray(parent2)) {
                child = [];
              } else if (clone2.__isRegExp(parent2)) {
                child = new RegExp(parent2.source, __getRegExpFlags(parent2));
                if (parent2.lastIndex)
                  child.lastIndex = parent2.lastIndex;
              } else if (clone2.__isDate(parent2)) {
                child = new Date(parent2.getTime());
              } else if (useBuffer && Buffer.isBuffer(parent2)) {
                if (Buffer.allocUnsafe) {
                  child = Buffer.allocUnsafe(parent2.length);
                } else {
                  child = new Buffer(parent2.length);
                }
                parent2.copy(child);
                return child;
              } else if (_instanceof(parent2, Error)) {
                child = Object.create(parent2);
              } else {
                if (typeof prototype == "undefined") {
                  proto = Object.getPrototypeOf(parent2);
                  child = Object.create(proto);
                } else {
                  child = Object.create(prototype);
                  proto = prototype;
                }
              }
              if (circular) {
                var index = allParents.indexOf(parent2);
                if (index != -1) {
                  return allChildren[index];
                }
                allParents.push(parent2);
                allChildren.push(child);
              }
              if (_instanceof(parent2, nativeMap)) {
                parent2.forEach(function(value2, key) {
                  var keyChild = _clone(key, depth2 - 1);
                  var valueChild = _clone(value2, depth2 - 1);
                  child.set(keyChild, valueChild);
                });
              }
              if (_instanceof(parent2, nativeSet)) {
                parent2.forEach(function(value2) {
                  var entryChild = _clone(value2, depth2 - 1);
                  child.add(entryChild);
                });
              }
              for (var i in parent2) {
                var attrs;
                if (proto) {
                  attrs = Object.getOwnPropertyDescriptor(proto, i);
                }
                if (attrs && attrs.set == null) {
                  continue;
                }
                child[i] = _clone(parent2[i], depth2 - 1);
              }
              if (Object.getOwnPropertySymbols) {
                var symbols = Object.getOwnPropertySymbols(parent2);
                for (var i = 0; i < symbols.length; i++) {
                  var symbol = symbols[i];
                  var descriptor = Object.getOwnPropertyDescriptor(parent2, symbol);
                  if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
                    continue;
                  }
                  child[symbol] = _clone(parent2[symbol], depth2 - 1);
                  if (!descriptor.enumerable) {
                    Object.defineProperty(child, symbol, {
                      enumerable: false
                    });
                  }
                }
              }
              if (includeNonEnumerable) {
                var allPropertyNames = Object.getOwnPropertyNames(parent2);
                for (var i = 0; i < allPropertyNames.length; i++) {
                  var propertyName = allPropertyNames[i];
                  var descriptor = Object.getOwnPropertyDescriptor(parent2, propertyName);
                  if (descriptor && descriptor.enumerable) {
                    continue;
                  }
                  child[propertyName] = _clone(parent2[propertyName], depth2 - 1);
                  Object.defineProperty(child, propertyName, {
                    enumerable: false
                  });
                }
              }
              return child;
            }
            return _clone(parent, depth);
          }
          clone2.clonePrototype = function clonePrototype(parent) {
            if (parent === null)
              return null;
            var c = function() {
            };
            c.prototype = parent;
            return new c();
          };
          function __objToStr(o) {
            return Object.prototype.toString.call(o);
          }
          clone2.__objToStr = __objToStr;
          function __isDate(o) {
            return typeof o === "object" && __objToStr(o) === "[object Date]";
          }
          clone2.__isDate = __isDate;
          function __isArray(o) {
            return typeof o === "object" && __objToStr(o) === "[object Array]";
          }
          clone2.__isArray = __isArray;
          function __isRegExp(o) {
            return typeof o === "object" && __objToStr(o) === "[object RegExp]";
          }
          clone2.__isRegExp = __isRegExp;
          function __getRegExpFlags(re) {
            var flags = "";
            if (re.global)
              flags += "g";
            if (re.ignoreCase)
              flags += "i";
            if (re.multiline)
              flags += "m";
            return flags;
          }
          clone2.__getRegExpFlags = __getRegExpFlags;
          return clone2;
        }();
        if (typeof module2 === "object" && module2.exports) {
          module2.exports = clone;
        }
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _slicedToArray = function() {
          function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = void 0;
            try {
              for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);
                if (i && _arr.length === i)
                  break;
              }
            } catch (err) {
              _d = true;
              _e = err;
            } finally {
              try {
                if (!_n && _i["return"])
                  _i["return"]();
              } finally {
                if (_d)
                  throw _e;
              }
            }
            return _arr;
          }
          return function(arr, i) {
            if (Array.isArray(arr)) {
              return arr;
            } else if (Symbol.iterator in Object(arr)) {
              return sliceIterator(arr, i);
            } else {
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
          };
        }();
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var _get = function get2(object, property, receiver) {
          if (object === null)
            object = Function.prototype;
          var desc = Object.getOwnPropertyDescriptor(object, property);
          if (desc === void 0) {
            var parent = Object.getPrototypeOf(object);
            if (parent === null) {
              return void 0;
            } else {
              return get2(parent, property, receiver);
            }
          } else if ("value" in desc) {
            return desc.value;
          } else {
            var getter = desc.get;
            if (getter === void 0) {
              return void 0;
            }
            return getter.call(receiver);
          }
        };
        var _parchment = __webpack_require__(0);
        var _parchment2 = _interopRequireDefault(_parchment);
        var _emitter = __webpack_require__(8);
        var _emitter2 = _interopRequireDefault(_emitter);
        var _block = __webpack_require__(4);
        var _block2 = _interopRequireDefault(_block);
        var _break = __webpack_require__(16);
        var _break2 = _interopRequireDefault(_break);
        var _code = __webpack_require__(13);
        var _code2 = _interopRequireDefault(_code);
        var _container = __webpack_require__(25);
        var _container2 = _interopRequireDefault(_container);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self2, call) {
          if (!self2) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self2;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
          if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        function isLine(blot) {
          return blot instanceof _block2.default || blot instanceof _block.BlockEmbed;
        }
        var Scroll = function(_Parchment$Scroll) {
          _inherits(Scroll2, _Parchment$Scroll);
          function Scroll2(domNode, config) {
            _classCallCheck(this, Scroll2);
            var _this = _possibleConstructorReturn(this, (Scroll2.__proto__ || Object.getPrototypeOf(Scroll2)).call(this, domNode));
            _this.emitter = config.emitter;
            if (Array.isArray(config.whitelist)) {
              _this.whitelist = config.whitelist.reduce(function(whitelist, format) {
                whitelist[format] = true;
                return whitelist;
              }, {});
            }
            _this.domNode.addEventListener("DOMNodeInserted", function() {
            });
            _this.optimize();
            _this.enable();
            return _this;
          }
          _createClass(Scroll2, [{
            key: "batchStart",
            value: function batchStart() {
              this.batch = true;
            }
          }, {
            key: "batchEnd",
            value: function batchEnd() {
              this.batch = false;
              this.optimize();
            }
          }, {
            key: "deleteAt",
            value: function deleteAt(index, length) {
              var _line = this.line(index), _line2 = _slicedToArray(_line, 2), first = _line2[0], offset = _line2[1];
              var _line3 = this.line(index + length), _line4 = _slicedToArray(_line3, 1), last = _line4[0];
              _get(Scroll2.prototype.__proto__ || Object.getPrototypeOf(Scroll2.prototype), "deleteAt", this).call(this, index, length);
              if (last != null && first !== last && offset > 0) {
                if (first instanceof _block.BlockEmbed || last instanceof _block.BlockEmbed) {
                  this.optimize();
                  return;
                }
                if (first instanceof _code2.default) {
                  var newlineIndex = first.newlineIndex(first.length(), true);
                  if (newlineIndex > -1) {
                    first = first.split(newlineIndex + 1);
                    if (first === last) {
                      this.optimize();
                      return;
                    }
                  }
                } else if (last instanceof _code2.default) {
                  var _newlineIndex = last.newlineIndex(0);
                  if (_newlineIndex > -1) {
                    last.split(_newlineIndex + 1);
                  }
                }
                var ref2 = last.children.head instanceof _break2.default ? null : last.children.head;
                first.moveChildren(last, ref2);
                first.remove();
              }
              this.optimize();
            }
          }, {
            key: "enable",
            value: function enable() {
              var enabled = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
              this.domNode.setAttribute("contenteditable", enabled);
            }
          }, {
            key: "formatAt",
            value: function formatAt(index, length, format, value2) {
              if (this.whitelist != null && !this.whitelist[format])
                return;
              _get(Scroll2.prototype.__proto__ || Object.getPrototypeOf(Scroll2.prototype), "formatAt", this).call(this, index, length, format, value2);
              this.optimize();
            }
          }, {
            key: "insertAt",
            value: function insertAt(index, value2, def) {
              if (def != null && this.whitelist != null && !this.whitelist[value2])
                return;
              if (index >= this.length()) {
                if (def == null || _parchment2.default.query(value2, _parchment2.default.Scope.BLOCK) == null) {
                  var blot = _parchment2.default.create(this.statics.defaultChild);
                  this.appendChild(blot);
                  if (def == null && value2.endsWith("\n")) {
                    value2 = value2.slice(0, -1);
                  }
                  blot.insertAt(0, value2, def);
                } else {
                  var embed = _parchment2.default.create(value2, def);
                  this.appendChild(embed);
                }
              } else {
                _get(Scroll2.prototype.__proto__ || Object.getPrototypeOf(Scroll2.prototype), "insertAt", this).call(this, index, value2, def);
              }
              this.optimize();
            }
          }, {
            key: "insertBefore",
            value: function insertBefore(blot, ref2) {
              if (blot.statics.scope === _parchment2.default.Scope.INLINE_BLOT) {
                var wrapper = _parchment2.default.create(this.statics.defaultChild);
                wrapper.appendChild(blot);
                blot = wrapper;
              }
              _get(Scroll2.prototype.__proto__ || Object.getPrototypeOf(Scroll2.prototype), "insertBefore", this).call(this, blot, ref2);
            }
          }, {
            key: "leaf",
            value: function leaf(index) {
              return this.path(index).pop() || [null, -1];
            }
          }, {
            key: "line",
            value: function line(index) {
              if (index === this.length()) {
                return this.line(index - 1);
              }
              return this.descendant(isLine, index);
            }
          }, {
            key: "lines",
            value: function lines() {
              var index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
              var length = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE;
              var getLines = function getLines2(blot, index2, length2) {
                var lines2 = [], lengthLeft = length2;
                blot.children.forEachAt(index2, length2, function(child, index3, length3) {
                  if (isLine(child)) {
                    lines2.push(child);
                  } else if (child instanceof _parchment2.default.Container) {
                    lines2 = lines2.concat(getLines2(child, index3, lengthLeft));
                  }
                  lengthLeft -= length3;
                });
                return lines2;
              };
              return getLines(this, index, length);
            }
          }, {
            key: "optimize",
            value: function optimize() {
              var mutations = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
              var context = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
              if (this.batch === true)
                return;
              _get(Scroll2.prototype.__proto__ || Object.getPrototypeOf(Scroll2.prototype), "optimize", this).call(this, mutations, context);
              if (mutations.length > 0) {
                this.emitter.emit(_emitter2.default.events.SCROLL_OPTIMIZE, mutations, context);
              }
            }
          }, {
            key: "path",
            value: function path(index) {
              return _get(Scroll2.prototype.__proto__ || Object.getPrototypeOf(Scroll2.prototype), "path", this).call(this, index).slice(1);
            }
          }, {
            key: "update",
            value: function update(mutations) {
              if (this.batch === true)
                return;
              var source2 = _emitter2.default.sources.USER;
              if (typeof mutations === "string") {
                source2 = mutations;
              }
              if (!Array.isArray(mutations)) {
                mutations = this.observer.takeRecords();
              }
              if (mutations.length > 0) {
                this.emitter.emit(_emitter2.default.events.SCROLL_BEFORE_UPDATE, source2, mutations);
              }
              _get(Scroll2.prototype.__proto__ || Object.getPrototypeOf(Scroll2.prototype), "update", this).call(this, mutations.concat([]));
              if (mutations.length > 0) {
                this.emitter.emit(_emitter2.default.events.SCROLL_UPDATE, source2, mutations);
              }
            }
          }]);
          return Scroll2;
        }(_parchment2.default.Scroll);
        Scroll.blotName = "scroll";
        Scroll.className = "ql-editor";
        Scroll.tagName = "DIV";
        Scroll.defaultChild = "block";
        Scroll.allowedChildren = [_block2.default, _block.BlockEmbed, _container2.default];
        exports2.default = Scroll;
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        exports2.SHORTKEY = exports2.default = void 0;
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
          return typeof obj;
        } : function(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        var _slicedToArray = function() {
          function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = void 0;
            try {
              for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);
                if (i && _arr.length === i)
                  break;
              }
            } catch (err) {
              _d = true;
              _e = err;
            } finally {
              try {
                if (!_n && _i["return"])
                  _i["return"]();
              } finally {
                if (_d)
                  throw _e;
              }
            }
            return _arr;
          }
          return function(arr, i) {
            if (Array.isArray(arr)) {
              return arr;
            } else if (Symbol.iterator in Object(arr)) {
              return sliceIterator(arr, i);
            } else {
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
          };
        }();
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var _clone = __webpack_require__(21);
        var _clone2 = _interopRequireDefault(_clone);
        var _deepEqual = __webpack_require__(11);
        var _deepEqual2 = _interopRequireDefault(_deepEqual);
        var _extend = __webpack_require__(3);
        var _extend2 = _interopRequireDefault(_extend);
        var _quillDelta = __webpack_require__(2);
        var _quillDelta2 = _interopRequireDefault(_quillDelta);
        var _op = __webpack_require__(20);
        var _op2 = _interopRequireDefault(_op);
        var _parchment = __webpack_require__(0);
        var _parchment2 = _interopRequireDefault(_parchment);
        var _quill = __webpack_require__(5);
        var _quill2 = _interopRequireDefault(_quill);
        var _logger = __webpack_require__(10);
        var _logger2 = _interopRequireDefault(_logger);
        var _module = __webpack_require__(9);
        var _module2 = _interopRequireDefault(_module);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _defineProperty(obj, key, value2) {
          if (key in obj) {
            Object.defineProperty(obj, key, { value: value2, enumerable: true, configurable: true, writable: true });
          } else {
            obj[key] = value2;
          }
          return obj;
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self2, call) {
          if (!self2) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self2;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
          if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var debug = (0, _logger2.default)("quill:keyboard");
        var SHORTKEY = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey";
        var Keyboard = function(_Module) {
          _inherits(Keyboard2, _Module);
          _createClass(Keyboard2, null, [{
            key: "match",
            value: function match(evt, binding) {
              binding = normalize(binding);
              if (["altKey", "ctrlKey", "metaKey", "shiftKey"].some(function(key) {
                return !!binding[key] !== evt[key] && binding[key] !== null;
              })) {
                return false;
              }
              return binding.key === (evt.which || evt.keyCode);
            }
          }]);
          function Keyboard2(quill2, options) {
            _classCallCheck(this, Keyboard2);
            var _this = _possibleConstructorReturn(this, (Keyboard2.__proto__ || Object.getPrototypeOf(Keyboard2)).call(this, quill2, options));
            _this.bindings = {};
            Object.keys(_this.options.bindings).forEach(function(name) {
              if (name === "list autofill" && quill2.scroll.whitelist != null && !quill2.scroll.whitelist["list"]) {
                return;
              }
              if (_this.options.bindings[name]) {
                _this.addBinding(_this.options.bindings[name]);
              }
            });
            _this.addBinding({ key: Keyboard2.keys.ENTER, shiftKey: null }, handleEnter);
            _this.addBinding({ key: Keyboard2.keys.ENTER, metaKey: null, ctrlKey: null, altKey: null }, function() {
            });
            if (/Firefox/i.test(navigator.userAgent)) {
              _this.addBinding({ key: Keyboard2.keys.BACKSPACE }, { collapsed: true }, handleBackspace);
              _this.addBinding({ key: Keyboard2.keys.DELETE }, { collapsed: true }, handleDelete);
            } else {
              _this.addBinding({ key: Keyboard2.keys.BACKSPACE }, { collapsed: true, prefix: /^.?$/ }, handleBackspace);
              _this.addBinding({ key: Keyboard2.keys.DELETE }, { collapsed: true, suffix: /^.?$/ }, handleDelete);
            }
            _this.addBinding({ key: Keyboard2.keys.BACKSPACE }, { collapsed: false }, handleDeleteRange);
            _this.addBinding({ key: Keyboard2.keys.DELETE }, { collapsed: false }, handleDeleteRange);
            _this.addBinding({ key: Keyboard2.keys.BACKSPACE, altKey: null, ctrlKey: null, metaKey: null, shiftKey: null }, { collapsed: true, offset: 0 }, handleBackspace);
            _this.listen();
            return _this;
          }
          _createClass(Keyboard2, [{
            key: "addBinding",
            value: function addBinding(key) {
              var context = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
              var handler = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
              var binding = normalize(key);
              if (binding == null || binding.key == null) {
                return debug.warn("Attempted to add invalid keyboard binding", binding);
              }
              if (typeof context === "function") {
                context = { handler: context };
              }
              if (typeof handler === "function") {
                handler = { handler };
              }
              binding = (0, _extend2.default)(binding, context, handler);
              this.bindings[binding.key] = this.bindings[binding.key] || [];
              this.bindings[binding.key].push(binding);
            }
          }, {
            key: "listen",
            value: function listen() {
              var _this2 = this;
              this.quill.root.addEventListener("keydown", function(evt) {
                if (evt.defaultPrevented)
                  return;
                var which = evt.which || evt.keyCode;
                var bindings = (_this2.bindings[which] || []).filter(function(binding) {
                  return Keyboard2.match(evt, binding);
                });
                if (bindings.length === 0)
                  return;
                var range = _this2.quill.getSelection();
                if (range == null || !_this2.quill.hasFocus())
                  return;
                var _quill$getLine = _this2.quill.getLine(range.index), _quill$getLine2 = _slicedToArray(_quill$getLine, 2), line = _quill$getLine2[0], offset = _quill$getLine2[1];
                var _quill$getLeaf = _this2.quill.getLeaf(range.index), _quill$getLeaf2 = _slicedToArray(_quill$getLeaf, 2), leafStart = _quill$getLeaf2[0], offsetStart = _quill$getLeaf2[1];
                var _ref = range.length === 0 ? [leafStart, offsetStart] : _this2.quill.getLeaf(range.index + range.length), _ref2 = _slicedToArray(_ref, 2), leafEnd = _ref2[0], offsetEnd = _ref2[1];
                var prefixText = leafStart instanceof _parchment2.default.Text ? leafStart.value().slice(0, offsetStart) : "";
                var suffixText = leafEnd instanceof _parchment2.default.Text ? leafEnd.value().slice(offsetEnd) : "";
                var curContext = {
                  collapsed: range.length === 0,
                  empty: range.length === 0 && line.length() <= 1,
                  format: _this2.quill.getFormat(range),
                  offset,
                  prefix: prefixText,
                  suffix: suffixText
                };
                var prevented = bindings.some(function(binding) {
                  if (binding.collapsed != null && binding.collapsed !== curContext.collapsed)
                    return false;
                  if (binding.empty != null && binding.empty !== curContext.empty)
                    return false;
                  if (binding.offset != null && binding.offset !== curContext.offset)
                    return false;
                  if (Array.isArray(binding.format)) {
                    if (binding.format.every(function(name) {
                      return curContext.format[name] == null;
                    })) {
                      return false;
                    }
                  } else if (_typeof(binding.format) === "object") {
                    if (!Object.keys(binding.format).every(function(name) {
                      if (binding.format[name] === true)
                        return curContext.format[name] != null;
                      if (binding.format[name] === false)
                        return curContext.format[name] == null;
                      return (0, _deepEqual2.default)(binding.format[name], curContext.format[name]);
                    })) {
                      return false;
                    }
                  }
                  if (binding.prefix != null && !binding.prefix.test(curContext.prefix))
                    return false;
                  if (binding.suffix != null && !binding.suffix.test(curContext.suffix))
                    return false;
                  return binding.handler.call(_this2, range, curContext) !== true;
                });
                if (prevented) {
                  evt.preventDefault();
                }
              });
            }
          }]);
          return Keyboard2;
        }(_module2.default);
        Keyboard.keys = {
          BACKSPACE: 8,
          TAB: 9,
          ENTER: 13,
          ESCAPE: 27,
          LEFT: 37,
          UP: 38,
          RIGHT: 39,
          DOWN: 40,
          DELETE: 46
        };
        Keyboard.DEFAULTS = {
          bindings: {
            "bold": makeFormatHandler("bold"),
            "italic": makeFormatHandler("italic"),
            "underline": makeFormatHandler("underline"),
            "indent": {
              key: Keyboard.keys.TAB,
              format: ["blockquote", "indent", "list"],
              handler: function handler(range, context) {
                if (context.collapsed && context.offset !== 0)
                  return true;
                this.quill.format("indent", "+1", _quill2.default.sources.USER);
              }
            },
            "outdent": {
              key: Keyboard.keys.TAB,
              shiftKey: true,
              format: ["blockquote", "indent", "list"],
              handler: function handler(range, context) {
                if (context.collapsed && context.offset !== 0)
                  return true;
                this.quill.format("indent", "-1", _quill2.default.sources.USER);
              }
            },
            "outdent backspace": {
              key: Keyboard.keys.BACKSPACE,
              collapsed: true,
              shiftKey: null,
              metaKey: null,
              ctrlKey: null,
              altKey: null,
              format: ["indent", "list"],
              offset: 0,
              handler: function handler(range, context) {
                if (context.format.indent != null) {
                  this.quill.format("indent", "-1", _quill2.default.sources.USER);
                } else if (context.format.list != null) {
                  this.quill.format("list", false, _quill2.default.sources.USER);
                }
              }
            },
            "indent code-block": makeCodeBlockHandler(true),
            "outdent code-block": makeCodeBlockHandler(false),
            "remove tab": {
              key: Keyboard.keys.TAB,
              shiftKey: true,
              collapsed: true,
              prefix: /\t$/,
              handler: function handler(range) {
                this.quill.deleteText(range.index - 1, 1, _quill2.default.sources.USER);
              }
            },
            "tab": {
              key: Keyboard.keys.TAB,
              handler: function handler(range) {
                this.quill.history.cutoff();
                var delta = new _quillDelta2.default().retain(range.index).delete(range.length).insert("	");
                this.quill.updateContents(delta, _quill2.default.sources.USER);
                this.quill.history.cutoff();
                this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);
              }
            },
            "list empty enter": {
              key: Keyboard.keys.ENTER,
              collapsed: true,
              format: ["list"],
              empty: true,
              handler: function handler(range, context) {
                this.quill.format("list", false, _quill2.default.sources.USER);
                if (context.format.indent) {
                  this.quill.format("indent", false, _quill2.default.sources.USER);
                }
              }
            },
            "checklist enter": {
              key: Keyboard.keys.ENTER,
              collapsed: true,
              format: { list: "checked" },
              handler: function handler(range) {
                var _quill$getLine3 = this.quill.getLine(range.index), _quill$getLine4 = _slicedToArray(_quill$getLine3, 2), line = _quill$getLine4[0], offset = _quill$getLine4[1];
                var formats = (0, _extend2.default)({}, line.formats(), { list: "checked" });
                var delta = new _quillDelta2.default().retain(range.index).insert("\n", formats).retain(line.length() - offset - 1).retain(1, { list: "unchecked" });
                this.quill.updateContents(delta, _quill2.default.sources.USER);
                this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);
                this.quill.scrollIntoView();
              }
            },
            "header enter": {
              key: Keyboard.keys.ENTER,
              collapsed: true,
              format: ["header"],
              suffix: /^$/,
              handler: function handler(range, context) {
                var _quill$getLine5 = this.quill.getLine(range.index), _quill$getLine6 = _slicedToArray(_quill$getLine5, 2), line = _quill$getLine6[0], offset = _quill$getLine6[1];
                var delta = new _quillDelta2.default().retain(range.index).insert("\n", context.format).retain(line.length() - offset - 1).retain(1, { header: null });
                this.quill.updateContents(delta, _quill2.default.sources.USER);
                this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);
                this.quill.scrollIntoView();
              }
            },
            "list autofill": {
              key: " ",
              collapsed: true,
              format: { list: false },
              prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
              handler: function handler(range, context) {
                var length = context.prefix.length;
                var _quill$getLine7 = this.quill.getLine(range.index), _quill$getLine8 = _slicedToArray(_quill$getLine7, 2), line = _quill$getLine8[0], offset = _quill$getLine8[1];
                if (offset > length)
                  return true;
                var value2 = void 0;
                switch (context.prefix.trim()) {
                  case "[]":
                  case "[ ]":
                    value2 = "unchecked";
                    break;
                  case "[x]":
                    value2 = "checked";
                    break;
                  case "-":
                  case "*":
                    value2 = "bullet";
                    break;
                  default:
                    value2 = "ordered";
                }
                this.quill.insertText(range.index, " ", _quill2.default.sources.USER);
                this.quill.history.cutoff();
                var delta = new _quillDelta2.default().retain(range.index - offset).delete(length + 1).retain(line.length() - 2 - offset).retain(1, { list: value2 });
                this.quill.updateContents(delta, _quill2.default.sources.USER);
                this.quill.history.cutoff();
                this.quill.setSelection(range.index - length, _quill2.default.sources.SILENT);
              }
            },
            "code exit": {
              key: Keyboard.keys.ENTER,
              collapsed: true,
              format: ["code-block"],
              prefix: /\n\n$/,
              suffix: /^\s+$/,
              handler: function handler(range) {
                var _quill$getLine9 = this.quill.getLine(range.index), _quill$getLine10 = _slicedToArray(_quill$getLine9, 2), line = _quill$getLine10[0], offset = _quill$getLine10[1];
                var delta = new _quillDelta2.default().retain(range.index + line.length() - offset - 2).retain(1, { "code-block": null }).delete(1);
                this.quill.updateContents(delta, _quill2.default.sources.USER);
              }
            },
            "embed left": makeEmbedArrowHandler(Keyboard.keys.LEFT, false),
            "embed left shift": makeEmbedArrowHandler(Keyboard.keys.LEFT, true),
            "embed right": makeEmbedArrowHandler(Keyboard.keys.RIGHT, false),
            "embed right shift": makeEmbedArrowHandler(Keyboard.keys.RIGHT, true)
          }
        };
        function makeEmbedArrowHandler(key, shiftKey) {
          var _ref3;
          var where = key === Keyboard.keys.LEFT ? "prefix" : "suffix";
          return _ref3 = {
            key,
            shiftKey,
            altKey: null
          }, _defineProperty(_ref3, where, /^$/), _defineProperty(_ref3, "handler", function handler(range) {
            var index = range.index;
            if (key === Keyboard.keys.RIGHT) {
              index += range.length + 1;
            }
            var _quill$getLeaf3 = this.quill.getLeaf(index), _quill$getLeaf4 = _slicedToArray(_quill$getLeaf3, 1), leaf = _quill$getLeaf4[0];
            if (!(leaf instanceof _parchment2.default.Embed))
              return true;
            if (key === Keyboard.keys.LEFT) {
              if (shiftKey) {
                this.quill.setSelection(range.index - 1, range.length + 1, _quill2.default.sources.USER);
              } else {
                this.quill.setSelection(range.index - 1, _quill2.default.sources.USER);
              }
            } else {
              if (shiftKey) {
                this.quill.setSelection(range.index, range.length + 1, _quill2.default.sources.USER);
              } else {
                this.quill.setSelection(range.index + range.length + 1, _quill2.default.sources.USER);
              }
            }
            return false;
          }), _ref3;
        }
        function handleBackspace(range, context) {
          if (range.index === 0 || this.quill.getLength() <= 1)
            return;
          var _quill$getLine11 = this.quill.getLine(range.index), _quill$getLine12 = _slicedToArray(_quill$getLine11, 1), line = _quill$getLine12[0];
          var formats = {};
          if (context.offset === 0) {
            var _quill$getLine13 = this.quill.getLine(range.index - 1), _quill$getLine14 = _slicedToArray(_quill$getLine13, 1), prev = _quill$getLine14[0];
            if (prev != null && prev.length() > 1) {
              var curFormats = line.formats();
              var prevFormats = this.quill.getFormat(range.index - 1, 1);
              formats = _op2.default.attributes.diff(curFormats, prevFormats) || {};
            }
          }
          var length = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(context.prefix) ? 2 : 1;
          this.quill.deleteText(range.index - length, length, _quill2.default.sources.USER);
          if (Object.keys(formats).length > 0) {
            this.quill.formatLine(range.index - length, length, formats, _quill2.default.sources.USER);
          }
          this.quill.focus();
        }
        function handleDelete(range, context) {
          var length = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(context.suffix) ? 2 : 1;
          if (range.index >= this.quill.getLength() - length)
            return;
          var formats = {}, nextLength = 0;
          var _quill$getLine15 = this.quill.getLine(range.index), _quill$getLine16 = _slicedToArray(_quill$getLine15, 1), line = _quill$getLine16[0];
          if (context.offset >= line.length() - 1) {
            var _quill$getLine17 = this.quill.getLine(range.index + 1), _quill$getLine18 = _slicedToArray(_quill$getLine17, 1), next = _quill$getLine18[0];
            if (next) {
              var curFormats = line.formats();
              var nextFormats = this.quill.getFormat(range.index, 1);
              formats = _op2.default.attributes.diff(curFormats, nextFormats) || {};
              nextLength = next.length();
            }
          }
          this.quill.deleteText(range.index, length, _quill2.default.sources.USER);
          if (Object.keys(formats).length > 0) {
            this.quill.formatLine(range.index + nextLength - 1, length, formats, _quill2.default.sources.USER);
          }
        }
        function handleDeleteRange(range) {
          var lines = this.quill.getLines(range);
          var formats = {};
          if (lines.length > 1) {
            var firstFormats = lines[0].formats();
            var lastFormats = lines[lines.length - 1].formats();
            formats = _op2.default.attributes.diff(lastFormats, firstFormats) || {};
          }
          this.quill.deleteText(range, _quill2.default.sources.USER);
          if (Object.keys(formats).length > 0) {
            this.quill.formatLine(range.index, 1, formats, _quill2.default.sources.USER);
          }
          this.quill.setSelection(range.index, _quill2.default.sources.SILENT);
          this.quill.focus();
        }
        function handleEnter(range, context) {
          var _this3 = this;
          if (range.length > 0) {
            this.quill.scroll.deleteAt(range.index, range.length);
          }
          var lineFormats = Object.keys(context.format).reduce(function(lineFormats2, format) {
            if (_parchment2.default.query(format, _parchment2.default.Scope.BLOCK) && !Array.isArray(context.format[format])) {
              lineFormats2[format] = context.format[format];
            }
            return lineFormats2;
          }, {});
          this.quill.insertText(range.index, "\n", lineFormats, _quill2.default.sources.USER);
          this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);
          this.quill.focus();
          Object.keys(context.format).forEach(function(name) {
            if (lineFormats[name] != null)
              return;
            if (Array.isArray(context.format[name]))
              return;
            if (name === "link")
              return;
            _this3.quill.format(name, context.format[name], _quill2.default.sources.USER);
          });
        }
        function makeCodeBlockHandler(indent) {
          return {
            key: Keyboard.keys.TAB,
            shiftKey: !indent,
            format: { "code-block": true },
            handler: function handler(range) {
              var CodeBlock = _parchment2.default.query("code-block");
              var index = range.index, length = range.length;
              var _quill$scroll$descend = this.quill.scroll.descendant(CodeBlock, index), _quill$scroll$descend2 = _slicedToArray(_quill$scroll$descend, 2), block = _quill$scroll$descend2[0], offset = _quill$scroll$descend2[1];
              if (block == null)
                return;
              var scrollIndex = this.quill.getIndex(block);
              var start = block.newlineIndex(offset, true) + 1;
              var end = block.newlineIndex(scrollIndex + offset + length);
              var lines = block.domNode.textContent.slice(start, end).split("\n");
              offset = 0;
              lines.forEach(function(line, i) {
                if (indent) {
                  block.insertAt(start + offset, CodeBlock.TAB);
                  offset += CodeBlock.TAB.length;
                  if (i === 0) {
                    index += CodeBlock.TAB.length;
                  } else {
                    length += CodeBlock.TAB.length;
                  }
                } else if (line.startsWith(CodeBlock.TAB)) {
                  block.deleteAt(start + offset, CodeBlock.TAB.length);
                  offset -= CodeBlock.TAB.length;
                  if (i === 0) {
                    index -= CodeBlock.TAB.length;
                  } else {
                    length -= CodeBlock.TAB.length;
                  }
                }
                offset += line.length + 1;
              });
              this.quill.update(_quill2.default.sources.USER);
              this.quill.setSelection(index, length, _quill2.default.sources.SILENT);
            }
          };
        }
        function makeFormatHandler(format) {
          return {
            key: format[0].toUpperCase(),
            shortKey: true,
            handler: function handler(range, context) {
              this.quill.format(format, !context.format[format], _quill2.default.sources.USER);
            }
          };
        }
        function normalize(binding) {
          if (typeof binding === "string" || typeof binding === "number") {
            return normalize({ key: binding });
          }
          if ((typeof binding === "undefined" ? "undefined" : _typeof(binding)) === "object") {
            binding = (0, _clone2.default)(binding, false);
          }
          if (typeof binding.key === "string") {
            if (Keyboard.keys[binding.key.toUpperCase()] != null) {
              binding.key = Keyboard.keys[binding.key.toUpperCase()];
            } else if (binding.key.length === 1) {
              binding.key = binding.key.toUpperCase().charCodeAt(0);
            } else {
              return null;
            }
          }
          if (binding.shortKey) {
            binding[SHORTKEY] = binding.shortKey;
            delete binding.shortKey;
          }
          return binding;
        }
        exports2.default = Keyboard;
        exports2.SHORTKEY = SHORTKEY;
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _slicedToArray = function() {
          function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = void 0;
            try {
              for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);
                if (i && _arr.length === i)
                  break;
              }
            } catch (err) {
              _d = true;
              _e = err;
            } finally {
              try {
                if (!_n && _i["return"])
                  _i["return"]();
              } finally {
                if (_d)
                  throw _e;
              }
            }
            return _arr;
          }
          return function(arr, i) {
            if (Array.isArray(arr)) {
              return arr;
            } else if (Symbol.iterator in Object(arr)) {
              return sliceIterator(arr, i);
            } else {
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
          };
        }();
        var _get = function get2(object, property, receiver) {
          if (object === null)
            object = Function.prototype;
          var desc = Object.getOwnPropertyDescriptor(object, property);
          if (desc === void 0) {
            var parent = Object.getPrototypeOf(object);
            if (parent === null) {
              return void 0;
            } else {
              return get2(parent, property, receiver);
            }
          } else if ("value" in desc) {
            return desc.value;
          } else {
            var getter = desc.get;
            if (getter === void 0) {
              return void 0;
            }
            return getter.call(receiver);
          }
        };
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var _parchment = __webpack_require__(0);
        var _parchment2 = _interopRequireDefault(_parchment);
        var _text = __webpack_require__(7);
        var _text2 = _interopRequireDefault(_text);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self2, call) {
          if (!self2) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self2;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
          if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var Cursor = function(_Parchment$Embed) {
          _inherits(Cursor2, _Parchment$Embed);
          _createClass(Cursor2, null, [{
            key: "value",
            value: function value2() {
              return void 0;
            }
          }]);
          function Cursor2(domNode, selection) {
            _classCallCheck(this, Cursor2);
            var _this = _possibleConstructorReturn(this, (Cursor2.__proto__ || Object.getPrototypeOf(Cursor2)).call(this, domNode));
            _this.selection = selection;
            _this.textNode = document.createTextNode(Cursor2.CONTENTS);
            _this.domNode.appendChild(_this.textNode);
            _this._length = 0;
            return _this;
          }
          _createClass(Cursor2, [{
            key: "detach",
            value: function detach() {
              if (this.parent != null)
                this.parent.removeChild(this);
            }
          }, {
            key: "format",
            value: function format(name, value2) {
              if (this._length !== 0) {
                return _get(Cursor2.prototype.__proto__ || Object.getPrototypeOf(Cursor2.prototype), "format", this).call(this, name, value2);
              }
              var target = this, index = 0;
              while (target != null && target.statics.scope !== _parchment2.default.Scope.BLOCK_BLOT) {
                index += target.offset(target.parent);
                target = target.parent;
              }
              if (target != null) {
                this._length = Cursor2.CONTENTS.length;
                target.optimize();
                target.formatAt(index, Cursor2.CONTENTS.length, name, value2);
                this._length = 0;
              }
            }
          }, {
            key: "index",
            value: function index(node, offset) {
              if (node === this.textNode)
                return 0;
              return _get(Cursor2.prototype.__proto__ || Object.getPrototypeOf(Cursor2.prototype), "index", this).call(this, node, offset);
            }
          }, {
            key: "length",
            value: function length() {
              return this._length;
            }
          }, {
            key: "position",
            value: function position() {
              return [this.textNode, this.textNode.data.length];
            }
          }, {
            key: "remove",
            value: function remove() {
              _get(Cursor2.prototype.__proto__ || Object.getPrototypeOf(Cursor2.prototype), "remove", this).call(this);
              this.parent = null;
            }
          }, {
            key: "restore",
            value: function restore() {
              if (this.selection.composing || this.parent == null)
                return;
              var textNode = this.textNode;
              var range = this.selection.getNativeRange();
              var restoreText = void 0, start = void 0, end = void 0;
              if (range != null && range.start.node === textNode && range.end.node === textNode) {
                var _ref = [textNode, range.start.offset, range.end.offset];
                restoreText = _ref[0];
                start = _ref[1];
                end = _ref[2];
              }
              while (this.domNode.lastChild != null && this.domNode.lastChild !== this.textNode) {
                this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
              }
              if (this.textNode.data !== Cursor2.CONTENTS) {
                var text = this.textNode.data.split(Cursor2.CONTENTS).join("");
                if (this.next instanceof _text2.default) {
                  restoreText = this.next.domNode;
                  this.next.insertAt(0, text);
                  this.textNode.data = Cursor2.CONTENTS;
                } else {
                  this.textNode.data = text;
                  this.parent.insertBefore(_parchment2.default.create(this.textNode), this);
                  this.textNode = document.createTextNode(Cursor2.CONTENTS);
                  this.domNode.appendChild(this.textNode);
                }
              }
              this.remove();
              if (start != null) {
                var _map = [start, end].map(function(offset) {
                  return Math.max(0, Math.min(restoreText.data.length, offset - 1));
                });
                var _map2 = _slicedToArray(_map, 2);
                start = _map2[0];
                end = _map2[1];
                return {
                  startNode: restoreText,
                  startOffset: start,
                  endNode: restoreText,
                  endOffset: end
                };
              }
            }
          }, {
            key: "update",
            value: function update(mutations, context) {
              var _this2 = this;
              if (mutations.some(function(mutation) {
                return mutation.type === "characterData" && mutation.target === _this2.textNode;
              })) {
                var range = this.restore();
                if (range)
                  context.range = range;
              }
            }
          }, {
            key: "value",
            value: function value2() {
              return "";
            }
          }]);
          return Cursor2;
        }(_parchment2.default.Embed);
        Cursor.blotName = "cursor";
        Cursor.className = "ql-cursor";
        Cursor.tagName = "span";
        Cursor.CONTENTS = "\uFEFF";
        exports2.default = Cursor;
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _parchment = __webpack_require__(0);
        var _parchment2 = _interopRequireDefault(_parchment);
        var _block = __webpack_require__(4);
        var _block2 = _interopRequireDefault(_block);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self2, call) {
          if (!self2) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self2;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
          if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var Container = function(_Parchment$Container) {
          _inherits(Container2, _Parchment$Container);
          function Container2() {
            _classCallCheck(this, Container2);
            return _possibleConstructorReturn(this, (Container2.__proto__ || Object.getPrototypeOf(Container2)).apply(this, arguments));
          }
          return Container2;
        }(_parchment2.default.Container);
        Container.allowedChildren = [_block2.default, _block.BlockEmbed, Container];
        exports2.default = Container;
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        exports2.ColorStyle = exports2.ColorClass = exports2.ColorAttributor = void 0;
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var _get = function get2(object, property, receiver) {
          if (object === null)
            object = Function.prototype;
          var desc = Object.getOwnPropertyDescriptor(object, property);
          if (desc === void 0) {
            var parent = Object.getPrototypeOf(object);
            if (parent === null) {
              return void 0;
            } else {
              return get2(parent, property, receiver);
            }
          } else if ("value" in desc) {
            return desc.value;
          } else {
            var getter = desc.get;
            if (getter === void 0) {
              return void 0;
            }
            return getter.call(receiver);
          }
        };
        var _parchment = __webpack_require__(0);
        var _parchment2 = _interopRequireDefault(_parchment);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self2, call) {
          if (!self2) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self2;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
          if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var ColorAttributor = function(_Parchment$Attributor) {
          _inherits(ColorAttributor2, _Parchment$Attributor);
          function ColorAttributor2() {
            _classCallCheck(this, ColorAttributor2);
            return _possibleConstructorReturn(this, (ColorAttributor2.__proto__ || Object.getPrototypeOf(ColorAttributor2)).apply(this, arguments));
          }
          _createClass(ColorAttributor2, [{
            key: "value",
            value: function value2(domNode) {
              var value3 = _get(ColorAttributor2.prototype.__proto__ || Object.getPrototypeOf(ColorAttributor2.prototype), "value", this).call(this, domNode);
              if (!value3.startsWith("rgb("))
                return value3;
              value3 = value3.replace(/^[^\d]+/, "").replace(/[^\d]+$/, "");
              return "#" + value3.split(",").map(function(component) {
                return ("00" + parseInt(component).toString(16)).slice(-2);
              }).join("");
            }
          }]);
          return ColorAttributor2;
        }(_parchment2.default.Attributor.Style);
        var ColorClass = new _parchment2.default.Attributor.Class("color", "ql-color", {
          scope: _parchment2.default.Scope.INLINE
        });
        var ColorStyle = new ColorAttributor("color", "color", {
          scope: _parchment2.default.Scope.INLINE
        });
        exports2.ColorAttributor = ColorAttributor;
        exports2.ColorClass = ColorClass;
        exports2.ColorStyle = ColorStyle;
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        exports2.sanitize = exports2.default = void 0;
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var _get = function get2(object, property, receiver) {
          if (object === null)
            object = Function.prototype;
          var desc = Object.getOwnPropertyDescriptor(object, property);
          if (desc === void 0) {
            var parent = Object.getPrototypeOf(object);
            if (parent === null) {
              return void 0;
            } else {
              return get2(parent, property, receiver);
            }
          } else if ("value" in desc) {
            return desc.value;
          } else {
            var getter = desc.get;
            if (getter === void 0) {
              return void 0;
            }
            return getter.call(receiver);
          }
        };
        var _inline = __webpack_require__(6);
        var _inline2 = _interopRequireDefault(_inline);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self2, call) {
          if (!self2) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self2;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
          if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var Link = function(_Inline) {
          _inherits(Link2, _Inline);
          function Link2() {
            _classCallCheck(this, Link2);
            return _possibleConstructorReturn(this, (Link2.__proto__ || Object.getPrototypeOf(Link2)).apply(this, arguments));
          }
          _createClass(Link2, [{
            key: "format",
            value: function format(name, value2) {
              if (name !== this.statics.blotName || !value2)
                return _get(Link2.prototype.__proto__ || Object.getPrototypeOf(Link2.prototype), "format", this).call(this, name, value2);
              value2 = this.constructor.sanitize(value2);
              this.domNode.setAttribute("href", value2);
            }
          }], [{
            key: "create",
            value: function create(value2) {
              var node = _get(Link2.__proto__ || Object.getPrototypeOf(Link2), "create", this).call(this, value2);
              value2 = this.sanitize(value2);
              node.setAttribute("href", value2);
              node.setAttribute("rel", "noopener noreferrer");
              node.setAttribute("target", "_blank");
              return node;
            }
          }, {
            key: "formats",
            value: function formats(domNode) {
              return domNode.getAttribute("href");
            }
          }, {
            key: "sanitize",
            value: function sanitize(url) {
              return _sanitize(url, this.PROTOCOL_WHITELIST) ? url : this.SANITIZED_URL;
            }
          }]);
          return Link2;
        }(_inline2.default);
        Link.blotName = "link";
        Link.tagName = "A";
        Link.SANITIZED_URL = "about:blank";
        Link.PROTOCOL_WHITELIST = ["http", "https", "mailto", "tel"];
        function _sanitize(url, protocols) {
          var anchor = document.createElement("a");
          anchor.href = url;
          var protocol = anchor.href.slice(0, anchor.href.indexOf(":"));
          return protocols.indexOf(protocol) > -1;
        }
        exports2.default = Link;
        exports2.sanitize = _sanitize;
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
          return typeof obj;
        } : function(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var _keyboard = __webpack_require__(23);
        var _keyboard2 = _interopRequireDefault(_keyboard);
        var _dropdown = __webpack_require__(107);
        var _dropdown2 = _interopRequireDefault(_dropdown);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        var optionsCounter = 0;
        function toggleAriaAttribute(element, attribute) {
          element.setAttribute(attribute, !(element.getAttribute(attribute) === "true"));
        }
        var Picker = function() {
          function Picker2(select) {
            var _this = this;
            _classCallCheck(this, Picker2);
            this.select = select;
            this.container = document.createElement("span");
            this.buildPicker();
            this.select.style.display = "none";
            this.select.parentNode.insertBefore(this.container, this.select);
            this.label.addEventListener("mousedown", function() {
              _this.togglePicker();
            });
            this.label.addEventListener("keydown", function(event) {
              switch (event.keyCode) {
                case _keyboard2.default.keys.ENTER:
                  _this.togglePicker();
                  break;
                case _keyboard2.default.keys.ESCAPE:
                  _this.escape();
                  event.preventDefault();
                  break;
              }
            });
            this.select.addEventListener("change", this.update.bind(this));
          }
          _createClass(Picker2, [{
            key: "togglePicker",
            value: function togglePicker() {
              this.container.classList.toggle("ql-expanded");
              toggleAriaAttribute(this.label, "aria-expanded");
              toggleAriaAttribute(this.options, "aria-hidden");
            }
          }, {
            key: "buildItem",
            value: function buildItem(option) {
              var _this2 = this;
              var item = document.createElement("span");
              item.tabIndex = "0";
              item.setAttribute("role", "button");
              item.classList.add("ql-picker-item");
              if (option.hasAttribute("value")) {
                item.setAttribute("data-value", option.getAttribute("value"));
              }
              if (option.textContent) {
                item.setAttribute("data-label", option.textContent);
              }
              item.addEventListener("click", function() {
                _this2.selectItem(item, true);
              });
              item.addEventListener("keydown", function(event) {
                switch (event.keyCode) {
                  case _keyboard2.default.keys.ENTER:
                    _this2.selectItem(item, true);
                    event.preventDefault();
                    break;
                  case _keyboard2.default.keys.ESCAPE:
                    _this2.escape();
                    event.preventDefault();
                    break;
                }
              });
              return item;
            }
          }, {
            key: "buildLabel",
            value: function buildLabel() {
              var label = document.createElement("span");
              label.classList.add("ql-picker-label");
              label.innerHTML = _dropdown2.default;
              label.tabIndex = "0";
              label.setAttribute("role", "button");
              label.setAttribute("aria-expanded", "false");
              this.container.appendChild(label);
              return label;
            }
          }, {
            key: "buildOptions",
            value: function buildOptions() {
              var _this3 = this;
              var options = document.createElement("span");
              options.classList.add("ql-picker-options");
              options.setAttribute("aria-hidden", "true");
              options.tabIndex = "-1";
              options.id = "ql-picker-options-" + optionsCounter;
              optionsCounter += 1;
              this.label.setAttribute("aria-controls", options.id);
              this.options = options;
              [].slice.call(this.select.options).forEach(function(option) {
                var item = _this3.buildItem(option);
                options.appendChild(item);
                if (option.selected === true) {
                  _this3.selectItem(item);
                }
              });
              this.container.appendChild(options);
            }
          }, {
            key: "buildPicker",
            value: function buildPicker() {
              var _this4 = this;
              [].slice.call(this.select.attributes).forEach(function(item) {
                _this4.container.setAttribute(item.name, item.value);
              });
              this.container.classList.add("ql-picker");
              this.label = this.buildLabel();
              this.buildOptions();
            }
          }, {
            key: "escape",
            value: function escape() {
              var _this5 = this;
              this.close();
              setTimeout(function() {
                return _this5.label.focus();
              }, 1);
            }
          }, {
            key: "close",
            value: function close() {
              this.container.classList.remove("ql-expanded");
              this.label.setAttribute("aria-expanded", "false");
              this.options.setAttribute("aria-hidden", "true");
            }
          }, {
            key: "selectItem",
            value: function selectItem(item) {
              var trigger = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
              var selected = this.container.querySelector(".ql-selected");
              if (item === selected)
                return;
              if (selected != null) {
                selected.classList.remove("ql-selected");
              }
              if (item == null)
                return;
              item.classList.add("ql-selected");
              this.select.selectedIndex = [].indexOf.call(item.parentNode.children, item);
              if (item.hasAttribute("data-value")) {
                this.label.setAttribute("data-value", item.getAttribute("data-value"));
              } else {
                this.label.removeAttribute("data-value");
              }
              if (item.hasAttribute("data-label")) {
                this.label.setAttribute("data-label", item.getAttribute("data-label"));
              } else {
                this.label.removeAttribute("data-label");
              }
              if (trigger) {
                if (typeof Event === "function") {
                  this.select.dispatchEvent(new Event("change"));
                } else if ((typeof Event === "undefined" ? "undefined" : _typeof(Event)) === "object") {
                  var event = document.createEvent("Event");
                  event.initEvent("change", true, true);
                  this.select.dispatchEvent(event);
                }
                this.close();
              }
            }
          }, {
            key: "update",
            value: function update() {
              var option = void 0;
              if (this.select.selectedIndex > -1) {
                var item = this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex];
                option = this.select.options[this.select.selectedIndex];
                this.selectItem(item);
              } else {
                this.selectItem(null);
              }
              var isActive = option != null && option !== this.select.querySelector("option[selected]");
              this.label.classList.toggle("ql-active", isActive);
            }
          }]);
          return Picker2;
        }();
        exports2.default = Picker;
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _parchment = __webpack_require__(0);
        var _parchment2 = _interopRequireDefault(_parchment);
        var _quill = __webpack_require__(5);
        var _quill2 = _interopRequireDefault(_quill);
        var _block = __webpack_require__(4);
        var _block2 = _interopRequireDefault(_block);
        var _break = __webpack_require__(16);
        var _break2 = _interopRequireDefault(_break);
        var _container = __webpack_require__(25);
        var _container2 = _interopRequireDefault(_container);
        var _cursor = __webpack_require__(24);
        var _cursor2 = _interopRequireDefault(_cursor);
        var _embed = __webpack_require__(35);
        var _embed2 = _interopRequireDefault(_embed);
        var _inline = __webpack_require__(6);
        var _inline2 = _interopRequireDefault(_inline);
        var _scroll = __webpack_require__(22);
        var _scroll2 = _interopRequireDefault(_scroll);
        var _text = __webpack_require__(7);
        var _text2 = _interopRequireDefault(_text);
        var _clipboard = __webpack_require__(55);
        var _clipboard2 = _interopRequireDefault(_clipboard);
        var _history = __webpack_require__(42);
        var _history2 = _interopRequireDefault(_history);
        var _keyboard = __webpack_require__(23);
        var _keyboard2 = _interopRequireDefault(_keyboard);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        _quill2.default.register({
          "blots/block": _block2.default,
          "blots/block/embed": _block.BlockEmbed,
          "blots/break": _break2.default,
          "blots/container": _container2.default,
          "blots/cursor": _cursor2.default,
          "blots/embed": _embed2.default,
          "blots/inline": _inline2.default,
          "blots/scroll": _scroll2.default,
          "blots/text": _text2.default,
          "modules/clipboard": _clipboard2.default,
          "modules/history": _history2.default,
          "modules/keyboard": _keyboard2.default
        });
        _parchment2.default.register(_block2.default, _break2.default, _cursor2.default, _inline2.default, _scroll2.default, _text2.default);
        exports2.default = _quill2.default;
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", { value: true });
        var Registry = __webpack_require__(1);
        var ShadowBlot = function() {
          function ShadowBlot2(domNode) {
            this.domNode = domNode;
            this.domNode[Registry.DATA_KEY] = { blot: this };
          }
          Object.defineProperty(ShadowBlot2.prototype, "statics", {
            get: function() {
              return this.constructor;
            },
            enumerable: true,
            configurable: true
          });
          ShadowBlot2.create = function(value2) {
            if (this.tagName == null) {
              throw new Registry.ParchmentError("Blot definition missing tagName");
            }
            var node;
            if (Array.isArray(this.tagName)) {
              if (typeof value2 === "string") {
                value2 = value2.toUpperCase();
                if (parseInt(value2).toString() === value2) {
                  value2 = parseInt(value2);
                }
              }
              if (typeof value2 === "number") {
                node = document.createElement(this.tagName[value2 - 1]);
              } else if (this.tagName.indexOf(value2) > -1) {
                node = document.createElement(value2);
              } else {
                node = document.createElement(this.tagName[0]);
              }
            } else {
              node = document.createElement(this.tagName);
            }
            if (this.className) {
              node.classList.add(this.className);
            }
            return node;
          };
          ShadowBlot2.prototype.attach = function() {
            if (this.parent != null) {
              this.scroll = this.parent.scroll;
            }
          };
          ShadowBlot2.prototype.clone = function() {
            var domNode = this.domNode.cloneNode(false);
            return Registry.create(domNode);
          };
          ShadowBlot2.prototype.detach = function() {
            if (this.parent != null)
              this.parent.removeChild(this);
            delete this.domNode[Registry.DATA_KEY];
          };
          ShadowBlot2.prototype.deleteAt = function(index, length) {
            var blot = this.isolate(index, length);
            blot.remove();
          };
          ShadowBlot2.prototype.formatAt = function(index, length, name, value2) {
            var blot = this.isolate(index, length);
            if (Registry.query(name, Registry.Scope.BLOT) != null && value2) {
              blot.wrap(name, value2);
            } else if (Registry.query(name, Registry.Scope.ATTRIBUTE) != null) {
              var parent = Registry.create(this.statics.scope);
              blot.wrap(parent);
              parent.format(name, value2);
            }
          };
          ShadowBlot2.prototype.insertAt = function(index, value2, def) {
            var blot = def == null ? Registry.create("text", value2) : Registry.create(value2, def);
            var ref2 = this.split(index);
            this.parent.insertBefore(blot, ref2);
          };
          ShadowBlot2.prototype.insertInto = function(parentBlot, refBlot) {
            if (refBlot === void 0) {
              refBlot = null;
            }
            if (this.parent != null) {
              this.parent.children.remove(this);
            }
            var refDomNode = null;
            parentBlot.children.insertBefore(this, refBlot);
            if (refBlot != null) {
              refDomNode = refBlot.domNode;
            }
            if (this.domNode.parentNode != parentBlot.domNode || this.domNode.nextSibling != refDomNode) {
              parentBlot.domNode.insertBefore(this.domNode, refDomNode);
            }
            this.parent = parentBlot;
            this.attach();
          };
          ShadowBlot2.prototype.isolate = function(index, length) {
            var target = this.split(index);
            target.split(length);
            return target;
          };
          ShadowBlot2.prototype.length = function() {
            return 1;
          };
          ShadowBlot2.prototype.offset = function(root) {
            if (root === void 0) {
              root = this.parent;
            }
            if (this.parent == null || this == root)
              return 0;
            return this.parent.children.offset(this) + this.parent.offset(root);
          };
          ShadowBlot2.prototype.optimize = function(context) {
            if (this.domNode[Registry.DATA_KEY] != null) {
              delete this.domNode[Registry.DATA_KEY].mutations;
            }
          };
          ShadowBlot2.prototype.remove = function() {
            if (this.domNode.parentNode != null) {
              this.domNode.parentNode.removeChild(this.domNode);
            }
            this.detach();
          };
          ShadowBlot2.prototype.replace = function(target) {
            if (target.parent == null)
              return;
            target.parent.insertBefore(this, target.next);
            target.remove();
          };
          ShadowBlot2.prototype.replaceWith = function(name, value2) {
            var replacement = typeof name === "string" ? Registry.create(name, value2) : name;
            replacement.replace(this);
            return replacement;
          };
          ShadowBlot2.prototype.split = function(index, force) {
            return index === 0 ? this : this.next;
          };
          ShadowBlot2.prototype.update = function(mutations, context) {
          };
          ShadowBlot2.prototype.wrap = function(name, value2) {
            var wrapper = typeof name === "string" ? Registry.create(name, value2) : name;
            if (this.parent != null) {
              this.parent.insertBefore(wrapper, this.next);
            }
            wrapper.appendChild(this);
            return wrapper;
          };
          ShadowBlot2.blotName = "abstract";
          return ShadowBlot2;
        }();
        exports2.default = ShadowBlot;
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", { value: true });
        var attributor_1 = __webpack_require__(12);
        var class_1 = __webpack_require__(32);
        var style_1 = __webpack_require__(33);
        var Registry = __webpack_require__(1);
        var AttributorStore = function() {
          function AttributorStore2(domNode) {
            this.attributes = {};
            this.domNode = domNode;
            this.build();
          }
          AttributorStore2.prototype.attribute = function(attribute, value2) {
            if (value2) {
              if (attribute.add(this.domNode, value2)) {
                if (attribute.value(this.domNode) != null) {
                  this.attributes[attribute.attrName] = attribute;
                } else {
                  delete this.attributes[attribute.attrName];
                }
              }
            } else {
              attribute.remove(this.domNode);
              delete this.attributes[attribute.attrName];
            }
          };
          AttributorStore2.prototype.build = function() {
            var _this = this;
            this.attributes = {};
            var attributes = attributor_1.default.keys(this.domNode);
            var classes = class_1.default.keys(this.domNode);
            var styles = style_1.default.keys(this.domNode);
            attributes.concat(classes).concat(styles).forEach(function(name) {
              var attr = Registry.query(name, Registry.Scope.ATTRIBUTE);
              if (attr instanceof attributor_1.default) {
                _this.attributes[attr.attrName] = attr;
              }
            });
          };
          AttributorStore2.prototype.copy = function(target) {
            var _this = this;
            Object.keys(this.attributes).forEach(function(key) {
              var value2 = _this.attributes[key].value(_this.domNode);
              target.format(key, value2);
            });
          };
          AttributorStore2.prototype.move = function(target) {
            var _this = this;
            this.copy(target);
            Object.keys(this.attributes).forEach(function(key) {
              _this.attributes[key].remove(_this.domNode);
            });
            this.attributes = {};
          };
          AttributorStore2.prototype.values = function() {
            var _this = this;
            return Object.keys(this.attributes).reduce(function(attributes, name) {
              attributes[name] = _this.attributes[name].value(_this.domNode);
              return attributes;
            }, {});
          };
          return AttributorStore2;
        }();
        exports2.default = AttributorStore;
      },
      function(module2, exports2, __webpack_require__) {
        var __extends = this && this.__extends || function() {
          var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
            d.__proto__ = b;
          } || function(d, b) {
            for (var p in b)
              if (b.hasOwnProperty(p))
                d[p] = b[p];
          };
          return function(d, b) {
            extendStatics(d, b);
            function __() {
              this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
          };
        }();
        Object.defineProperty(exports2, "__esModule", { value: true });
        var attributor_1 = __webpack_require__(12);
        function match(node, prefix) {
          var className = node.getAttribute("class") || "";
          return className.split(/\s+/).filter(function(name) {
            return name.indexOf(prefix + "-") === 0;
          });
        }
        var ClassAttributor = function(_super) {
          __extends(ClassAttributor2, _super);
          function ClassAttributor2() {
            return _super !== null && _super.apply(this, arguments) || this;
          }
          ClassAttributor2.keys = function(node) {
            return (node.getAttribute("class") || "").split(/\s+/).map(function(name) {
              return name.split("-").slice(0, -1).join("-");
            });
          };
          ClassAttributor2.prototype.add = function(node, value2) {
            if (!this.canAdd(node, value2))
              return false;
            this.remove(node);
            node.classList.add(this.keyName + "-" + value2);
            return true;
          };
          ClassAttributor2.prototype.remove = function(node) {
            var matches = match(node, this.keyName);
            matches.forEach(function(name) {
              node.classList.remove(name);
            });
            if (node.classList.length === 0) {
              node.removeAttribute("class");
            }
          };
          ClassAttributor2.prototype.value = function(node) {
            var result = match(node, this.keyName)[0] || "";
            var value2 = result.slice(this.keyName.length + 1);
            return this.canAdd(node, value2) ? value2 : "";
          };
          return ClassAttributor2;
        }(attributor_1.default);
        exports2.default = ClassAttributor;
      },
      function(module2, exports2, __webpack_require__) {
        var __extends = this && this.__extends || function() {
          var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
            d.__proto__ = b;
          } || function(d, b) {
            for (var p in b)
              if (b.hasOwnProperty(p))
                d[p] = b[p];
          };
          return function(d, b) {
            extendStatics(d, b);
            function __() {
              this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
          };
        }();
        Object.defineProperty(exports2, "__esModule", { value: true });
        var attributor_1 = __webpack_require__(12);
        function camelize(name) {
          var parts = name.split("-");
          var rest = parts.slice(1).map(function(part) {
            return part[0].toUpperCase() + part.slice(1);
          }).join("");
          return parts[0] + rest;
        }
        var StyleAttributor = function(_super) {
          __extends(StyleAttributor2, _super);
          function StyleAttributor2() {
            return _super !== null && _super.apply(this, arguments) || this;
          }
          StyleAttributor2.keys = function(node) {
            return (node.getAttribute("style") || "").split(";").map(function(value2) {
              var arr = value2.split(":");
              return arr[0].trim();
            });
          };
          StyleAttributor2.prototype.add = function(node, value2) {
            if (!this.canAdd(node, value2))
              return false;
            node.style[camelize(this.keyName)] = value2;
            return true;
          };
          StyleAttributor2.prototype.remove = function(node) {
            node.style[camelize(this.keyName)] = "";
            if (!node.getAttribute("style")) {
              node.removeAttribute("style");
            }
          };
          StyleAttributor2.prototype.value = function(node) {
            var value2 = node.style[camelize(this.keyName)];
            return this.canAdd(node, value2) ? value2 : "";
          };
          return StyleAttributor2;
        }(attributor_1.default);
        exports2.default = StyleAttributor;
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        var Theme = function() {
          function Theme2(quill2, options) {
            _classCallCheck(this, Theme2);
            this.quill = quill2;
            this.options = options;
            this.modules = {};
          }
          _createClass(Theme2, [{
            key: "init",
            value: function init() {
              var _this = this;
              Object.keys(this.options.modules).forEach(function(name) {
                if (_this.modules[name] == null) {
                  _this.addModule(name);
                }
              });
            }
          }, {
            key: "addModule",
            value: function addModule(name) {
              var moduleClass = this.quill.constructor.import("modules/" + name);
              this.modules[name] = new moduleClass(this.quill, this.options.modules[name] || {});
              return this.modules[name];
            }
          }]);
          return Theme2;
        }();
        Theme.DEFAULTS = {
          modules: {}
        };
        Theme.themes = {
          "default": Theme
        };
        exports2.default = Theme;
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var _get = function get2(object, property, receiver) {
          if (object === null)
            object = Function.prototype;
          var desc = Object.getOwnPropertyDescriptor(object, property);
          if (desc === void 0) {
            var parent = Object.getPrototypeOf(object);
            if (parent === null) {
              return void 0;
            } else {
              return get2(parent, property, receiver);
            }
          } else if ("value" in desc) {
            return desc.value;
          } else {
            var getter = desc.get;
            if (getter === void 0) {
              return void 0;
            }
            return getter.call(receiver);
          }
        };
        var _parchment = __webpack_require__(0);
        var _parchment2 = _interopRequireDefault(_parchment);
        var _text = __webpack_require__(7);
        var _text2 = _interopRequireDefault(_text);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self2, call) {
          if (!self2) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self2;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
          if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var GUARD_TEXT = "\uFEFF";
        var Embed = function(_Parchment$Embed) {
          _inherits(Embed2, _Parchment$Embed);
          function Embed2(node) {
            _classCallCheck(this, Embed2);
            var _this = _possibleConstructorReturn(this, (Embed2.__proto__ || Object.getPrototypeOf(Embed2)).call(this, node));
            _this.contentNode = document.createElement("span");
            _this.contentNode.setAttribute("contenteditable", false);
            [].slice.call(_this.domNode.childNodes).forEach(function(childNode) {
              _this.contentNode.appendChild(childNode);
            });
            _this.leftGuard = document.createTextNode(GUARD_TEXT);
            _this.rightGuard = document.createTextNode(GUARD_TEXT);
            _this.domNode.appendChild(_this.leftGuard);
            _this.domNode.appendChild(_this.contentNode);
            _this.domNode.appendChild(_this.rightGuard);
            return _this;
          }
          _createClass(Embed2, [{
            key: "index",
            value: function index(node, offset) {
              if (node === this.leftGuard)
                return 0;
              if (node === this.rightGuard)
                return 1;
              return _get(Embed2.prototype.__proto__ || Object.getPrototypeOf(Embed2.prototype), "index", this).call(this, node, offset);
            }
          }, {
            key: "restore",
            value: function restore(node) {
              var range = void 0, textNode = void 0;
              var text = node.data.split(GUARD_TEXT).join("");
              if (node === this.leftGuard) {
                if (this.prev instanceof _text2.default) {
                  var prevLength = this.prev.length();
                  this.prev.insertAt(prevLength, text);
                  range = {
                    startNode: this.prev.domNode,
                    startOffset: prevLength + text.length
                  };
                } else {
                  textNode = document.createTextNode(text);
                  this.parent.insertBefore(_parchment2.default.create(textNode), this);
                  range = {
                    startNode: textNode,
                    startOffset: text.length
                  };
                }
              } else if (node === this.rightGuard) {
                if (this.next instanceof _text2.default) {
                  this.next.insertAt(0, text);
                  range = {
                    startNode: this.next.domNode,
                    startOffset: text.length
                  };
                } else {
                  textNode = document.createTextNode(text);
                  this.parent.insertBefore(_parchment2.default.create(textNode), this.next);
                  range = {
                    startNode: textNode,
                    startOffset: text.length
                  };
                }
              }
              node.data = GUARD_TEXT;
              return range;
            }
          }, {
            key: "update",
            value: function update(mutations, context) {
              var _this2 = this;
              mutations.forEach(function(mutation) {
                if (mutation.type === "characterData" && (mutation.target === _this2.leftGuard || mutation.target === _this2.rightGuard)) {
                  var range = _this2.restore(mutation.target);
                  if (range)
                    context.range = range;
                }
              });
            }
          }]);
          return Embed2;
        }(_parchment2.default.Embed);
        exports2.default = Embed;
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        exports2.AlignStyle = exports2.AlignClass = exports2.AlignAttribute = void 0;
        var _parchment = __webpack_require__(0);
        var _parchment2 = _interopRequireDefault(_parchment);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var config = {
          scope: _parchment2.default.Scope.BLOCK,
          whitelist: ["right", "center", "justify"]
        };
        var AlignAttribute = new _parchment2.default.Attributor.Attribute("align", "align", config);
        var AlignClass = new _parchment2.default.Attributor.Class("align", "ql-align", config);
        var AlignStyle = new _parchment2.default.Attributor.Style("align", "text-align", config);
        exports2.AlignAttribute = AlignAttribute;
        exports2.AlignClass = AlignClass;
        exports2.AlignStyle = AlignStyle;
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        exports2.BackgroundStyle = exports2.BackgroundClass = void 0;
        var _parchment = __webpack_require__(0);
        var _parchment2 = _interopRequireDefault(_parchment);
        var _color = __webpack_require__(26);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var BackgroundClass = new _parchment2.default.Attributor.Class("background", "ql-bg", {
          scope: _parchment2.default.Scope.INLINE
        });
        var BackgroundStyle = new _color.ColorAttributor("background", "background-color", {
          scope: _parchment2.default.Scope.INLINE
        });
        exports2.BackgroundClass = BackgroundClass;
        exports2.BackgroundStyle = BackgroundStyle;
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        exports2.DirectionStyle = exports2.DirectionClass = exports2.DirectionAttribute = void 0;
        var _parchment = __webpack_require__(0);
        var _parchment2 = _interopRequireDefault(_parchment);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var config = {
          scope: _parchment2.default.Scope.BLOCK,
          whitelist: ["rtl"]
        };
        var DirectionAttribute = new _parchment2.default.Attributor.Attribute("direction", "dir", config);
        var DirectionClass = new _parchment2.default.Attributor.Class("direction", "ql-direction", config);
        var DirectionStyle = new _parchment2.default.Attributor.Style("direction", "direction", config);
        exports2.DirectionAttribute = DirectionAttribute;
        exports2.DirectionClass = DirectionClass;
        exports2.DirectionStyle = DirectionStyle;
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        exports2.FontClass = exports2.FontStyle = void 0;
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var _get = function get2(object, property, receiver) {
          if (object === null)
            object = Function.prototype;
          var desc = Object.getOwnPropertyDescriptor(object, property);
          if (desc === void 0) {
            var parent = Object.getPrototypeOf(object);
            if (parent === null) {
              return void 0;
            } else {
              return get2(parent, property, receiver);
            }
          } else if ("value" in desc) {
            return desc.value;
          } else {
            var getter = desc.get;
            if (getter === void 0) {
              return void 0;
            }
            return getter.call(receiver);
          }
        };
        var _parchment = __webpack_require__(0);
        var _parchment2 = _interopRequireDefault(_parchment);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self2, call) {
          if (!self2) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self2;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
          if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var config = {
          scope: _parchment2.default.Scope.INLINE,
          whitelist: ["serif", "monospace"]
        };
        var FontClass = new _parchment2.default.Attributor.Class("font", "ql-font", config);
        var FontStyleAttributor = function(_Parchment$Attributor) {
          _inherits(FontStyleAttributor2, _Parchment$Attributor);
          function FontStyleAttributor2() {
            _classCallCheck(this, FontStyleAttributor2);
            return _possibleConstructorReturn(this, (FontStyleAttributor2.__proto__ || Object.getPrototypeOf(FontStyleAttributor2)).apply(this, arguments));
          }
          _createClass(FontStyleAttributor2, [{
            key: "value",
            value: function value2(node) {
              return _get(FontStyleAttributor2.prototype.__proto__ || Object.getPrototypeOf(FontStyleAttributor2.prototype), "value", this).call(this, node).replace(/["']/g, "");
            }
          }]);
          return FontStyleAttributor2;
        }(_parchment2.default.Attributor.Style);
        var FontStyle = new FontStyleAttributor("font", "font-family", config);
        exports2.FontStyle = FontStyle;
        exports2.FontClass = FontClass;
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        exports2.SizeStyle = exports2.SizeClass = void 0;
        var _parchment = __webpack_require__(0);
        var _parchment2 = _interopRequireDefault(_parchment);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var SizeClass = new _parchment2.default.Attributor.Class("size", "ql-size", {
          scope: _parchment2.default.Scope.INLINE,
          whitelist: ["small", "large", "huge"]
        });
        var SizeStyle = new _parchment2.default.Attributor.Style("size", "font-size", {
          scope: _parchment2.default.Scope.INLINE,
          whitelist: ["10px", "18px", "32px"]
        });
        exports2.SizeClass = SizeClass;
        exports2.SizeStyle = SizeStyle;
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = {
          "align": {
            "": __webpack_require__(76),
            "center": __webpack_require__(77),
            "right": __webpack_require__(78),
            "justify": __webpack_require__(79)
          },
          "background": __webpack_require__(80),
          "blockquote": __webpack_require__(81),
          "bold": __webpack_require__(82),
          "clean": __webpack_require__(83),
          "code": __webpack_require__(58),
          "code-block": __webpack_require__(58),
          "color": __webpack_require__(84),
          "direction": {
            "": __webpack_require__(85),
            "rtl": __webpack_require__(86)
          },
          "float": {
            "center": __webpack_require__(87),
            "full": __webpack_require__(88),
            "left": __webpack_require__(89),
            "right": __webpack_require__(90)
          },
          "formula": __webpack_require__(91),
          "header": {
            "1": __webpack_require__(92),
            "2": __webpack_require__(93)
          },
          "italic": __webpack_require__(94),
          "image": __webpack_require__(95),
          "indent": {
            "+1": __webpack_require__(96),
            "-1": __webpack_require__(97)
          },
          "link": __webpack_require__(98),
          "list": {
            "ordered": __webpack_require__(99),
            "bullet": __webpack_require__(100),
            "check": __webpack_require__(101)
          },
          "script": {
            "sub": __webpack_require__(102),
            "super": __webpack_require__(103)
          },
          "strike": __webpack_require__(104),
          "underline": __webpack_require__(105),
          "video": __webpack_require__(106)
        };
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        exports2.getLastChangeIndex = exports2.default = void 0;
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var _parchment = __webpack_require__(0);
        var _parchment2 = _interopRequireDefault(_parchment);
        var _quill = __webpack_require__(5);
        var _quill2 = _interopRequireDefault(_quill);
        var _module = __webpack_require__(9);
        var _module2 = _interopRequireDefault(_module);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self2, call) {
          if (!self2) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self2;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
          if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var History = function(_Module) {
          _inherits(History2, _Module);
          function History2(quill2, options) {
            _classCallCheck(this, History2);
            var _this = _possibleConstructorReturn(this, (History2.__proto__ || Object.getPrototypeOf(History2)).call(this, quill2, options));
            _this.lastRecorded = 0;
            _this.ignoreChange = false;
            _this.clear();
            _this.quill.on(_quill2.default.events.EDITOR_CHANGE, function(eventName, delta, oldDelta, source2) {
              if (eventName !== _quill2.default.events.TEXT_CHANGE || _this.ignoreChange)
                return;
              if (!_this.options.userOnly || source2 === _quill2.default.sources.USER) {
                _this.record(delta, oldDelta);
              } else {
                _this.transform(delta);
              }
            });
            _this.quill.keyboard.addBinding({ key: "Z", shortKey: true }, _this.undo.bind(_this));
            _this.quill.keyboard.addBinding({ key: "Z", shortKey: true, shiftKey: true }, _this.redo.bind(_this));
            if (/Win/i.test(navigator.platform)) {
              _this.quill.keyboard.addBinding({ key: "Y", shortKey: true }, _this.redo.bind(_this));
            }
            return _this;
          }
          _createClass(History2, [{
            key: "change",
            value: function change(source2, dest) {
              if (this.stack[source2].length === 0)
                return;
              var delta = this.stack[source2].pop();
              this.stack[dest].push(delta);
              this.lastRecorded = 0;
              this.ignoreChange = true;
              this.quill.updateContents(delta[source2], _quill2.default.sources.USER);
              this.ignoreChange = false;
              var index = getLastChangeIndex(delta[source2]);
              this.quill.setSelection(index);
            }
          }, {
            key: "clear",
            value: function clear() {
              this.stack = { undo: [], redo: [] };
            }
          }, {
            key: "cutoff",
            value: function cutoff() {
              this.lastRecorded = 0;
            }
          }, {
            key: "record",
            value: function record(changeDelta, oldDelta) {
              if (changeDelta.ops.length === 0)
                return;
              this.stack.redo = [];
              var undoDelta = this.quill.getContents().diff(oldDelta);
              var timestamp = Date.now();
              if (this.lastRecorded + this.options.delay > timestamp && this.stack.undo.length > 0) {
                var delta = this.stack.undo.pop();
                undoDelta = undoDelta.compose(delta.undo);
                changeDelta = delta.redo.compose(changeDelta);
              } else {
                this.lastRecorded = timestamp;
              }
              this.stack.undo.push({
                redo: changeDelta,
                undo: undoDelta
              });
              if (this.stack.undo.length > this.options.maxStack) {
                this.stack.undo.shift();
              }
            }
          }, {
            key: "redo",
            value: function redo() {
              this.change("redo", "undo");
            }
          }, {
            key: "transform",
            value: function transform(delta) {
              this.stack.undo.forEach(function(change) {
                change.undo = delta.transform(change.undo, true);
                change.redo = delta.transform(change.redo, true);
              });
              this.stack.redo.forEach(function(change) {
                change.undo = delta.transform(change.undo, true);
                change.redo = delta.transform(change.redo, true);
              });
            }
          }, {
            key: "undo",
            value: function undo() {
              this.change("undo", "redo");
            }
          }]);
          return History2;
        }(_module2.default);
        History.DEFAULTS = {
          delay: 1e3,
          maxStack: 100,
          userOnly: false
        };
        function endsWithNewlineChange(delta) {
          var lastOp = delta.ops[delta.ops.length - 1];
          if (lastOp == null)
            return false;
          if (lastOp.insert != null) {
            return typeof lastOp.insert === "string" && lastOp.insert.endsWith("\n");
          }
          if (lastOp.attributes != null) {
            return Object.keys(lastOp.attributes).some(function(attr) {
              return _parchment2.default.query(attr, _parchment2.default.Scope.BLOCK) != null;
            });
          }
          return false;
        }
        function getLastChangeIndex(delta) {
          var deleteLength = delta.reduce(function(length, op) {
            length += op.delete || 0;
            return length;
          }, 0);
          var changeIndex = delta.length() - deleteLength;
          if (endsWithNewlineChange(delta)) {
            changeIndex -= 1;
          }
          return changeIndex;
        }
        exports2.default = History;
        exports2.getLastChangeIndex = getLastChangeIndex;
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        exports2.default = exports2.BaseTooltip = void 0;
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var _get = function get2(object, property, receiver) {
          if (object === null)
            object = Function.prototype;
          var desc = Object.getOwnPropertyDescriptor(object, property);
          if (desc === void 0) {
            var parent = Object.getPrototypeOf(object);
            if (parent === null) {
              return void 0;
            } else {
              return get2(parent, property, receiver);
            }
          } else if ("value" in desc) {
            return desc.value;
          } else {
            var getter = desc.get;
            if (getter === void 0) {
              return void 0;
            }
            return getter.call(receiver);
          }
        };
        var _extend = __webpack_require__(3);
        var _extend2 = _interopRequireDefault(_extend);
        var _quillDelta = __webpack_require__(2);
        var _quillDelta2 = _interopRequireDefault(_quillDelta);
        var _emitter = __webpack_require__(8);
        var _emitter2 = _interopRequireDefault(_emitter);
        var _keyboard = __webpack_require__(23);
        var _keyboard2 = _interopRequireDefault(_keyboard);
        var _theme = __webpack_require__(34);
        var _theme2 = _interopRequireDefault(_theme);
        var _colorPicker = __webpack_require__(59);
        var _colorPicker2 = _interopRequireDefault(_colorPicker);
        var _iconPicker = __webpack_require__(60);
        var _iconPicker2 = _interopRequireDefault(_iconPicker);
        var _picker = __webpack_require__(28);
        var _picker2 = _interopRequireDefault(_picker);
        var _tooltip = __webpack_require__(61);
        var _tooltip2 = _interopRequireDefault(_tooltip);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self2, call) {
          if (!self2) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self2;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
          if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var ALIGNS = [false, "center", "right", "justify"];
        var COLORS = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"];
        var FONTS = [false, "serif", "monospace"];
        var HEADERS = ["1", "2", "3", false];
        var SIZES = ["small", false, "large", "huge"];
        var BaseTheme = function(_Theme) {
          _inherits(BaseTheme2, _Theme);
          function BaseTheme2(quill2, options) {
            _classCallCheck(this, BaseTheme2);
            var _this = _possibleConstructorReturn(this, (BaseTheme2.__proto__ || Object.getPrototypeOf(BaseTheme2)).call(this, quill2, options));
            var listener = function listener2(e) {
              if (!document.body.contains(quill2.root)) {
                return document.body.removeEventListener("click", listener2);
              }
              if (_this.tooltip != null && !_this.tooltip.root.contains(e.target) && document.activeElement !== _this.tooltip.textbox && !_this.quill.hasFocus()) {
                _this.tooltip.hide();
              }
              if (_this.pickers != null) {
                _this.pickers.forEach(function(picker) {
                  if (!picker.container.contains(e.target)) {
                    picker.close();
                  }
                });
              }
            };
            quill2.emitter.listenDOM("click", document.body, listener);
            return _this;
          }
          _createClass(BaseTheme2, [{
            key: "addModule",
            value: function addModule(name) {
              var module3 = _get(BaseTheme2.prototype.__proto__ || Object.getPrototypeOf(BaseTheme2.prototype), "addModule", this).call(this, name);
              if (name === "toolbar") {
                this.extendToolbar(module3);
              }
              return module3;
            }
          }, {
            key: "buildButtons",
            value: function buildButtons(buttons, icons) {
              buttons.forEach(function(button) {
                var className = button.getAttribute("class") || "";
                className.split(/\s+/).forEach(function(name) {
                  if (!name.startsWith("ql-"))
                    return;
                  name = name.slice("ql-".length);
                  if (icons[name] == null)
                    return;
                  if (name === "direction") {
                    button.innerHTML = icons[name][""] + icons[name]["rtl"];
                  } else if (typeof icons[name] === "string") {
                    button.innerHTML = icons[name];
                  } else {
                    var value2 = button.value || "";
                    if (value2 != null && icons[name][value2]) {
                      button.innerHTML = icons[name][value2];
                    }
                  }
                });
              });
            }
          }, {
            key: "buildPickers",
            value: function buildPickers(selects, icons) {
              var _this2 = this;
              this.pickers = selects.map(function(select) {
                if (select.classList.contains("ql-align")) {
                  if (select.querySelector("option") == null) {
                    fillSelect(select, ALIGNS);
                  }
                  return new _iconPicker2.default(select, icons.align);
                } else if (select.classList.contains("ql-background") || select.classList.contains("ql-color")) {
                  var format = select.classList.contains("ql-background") ? "background" : "color";
                  if (select.querySelector("option") == null) {
                    fillSelect(select, COLORS, format === "background" ? "#ffffff" : "#000000");
                  }
                  return new _colorPicker2.default(select, icons[format]);
                } else {
                  if (select.querySelector("option") == null) {
                    if (select.classList.contains("ql-font")) {
                      fillSelect(select, FONTS);
                    } else if (select.classList.contains("ql-header")) {
                      fillSelect(select, HEADERS);
                    } else if (select.classList.contains("ql-size")) {
                      fillSelect(select, SIZES);
                    }
                  }
                  return new _picker2.default(select);
                }
              });
              var update = function update2() {
                _this2.pickers.forEach(function(picker) {
                  picker.update();
                });
              };
              this.quill.on(_emitter2.default.events.EDITOR_CHANGE, update);
            }
          }]);
          return BaseTheme2;
        }(_theme2.default);
        BaseTheme.DEFAULTS = (0, _extend2.default)(true, {}, _theme2.default.DEFAULTS, {
          modules: {
            toolbar: {
              handlers: {
                formula: function formula() {
                  this.quill.theme.tooltip.edit("formula");
                },
                image: function image() {
                  var _this3 = this;
                  var fileInput = this.container.querySelector("input.ql-image[type=file]");
                  if (fileInput == null) {
                    fileInput = document.createElement("input");
                    fileInput.setAttribute("type", "file");
                    fileInput.setAttribute("accept", "image/png, image/gif, image/jpeg, image/bmp, image/x-icon");
                    fileInput.classList.add("ql-image");
                    fileInput.addEventListener("change", function() {
                      if (fileInput.files != null && fileInput.files[0] != null) {
                        var reader = new FileReader();
                        reader.onload = function(e) {
                          var range = _this3.quill.getSelection(true);
                          _this3.quill.updateContents(new _quillDelta2.default().retain(range.index).delete(range.length).insert({ image: e.target.result }), _emitter2.default.sources.USER);
                          _this3.quill.setSelection(range.index + 1, _emitter2.default.sources.SILENT);
                          fileInput.value = "";
                        };
                        reader.readAsDataURL(fileInput.files[0]);
                      }
                    });
                    this.container.appendChild(fileInput);
                  }
                  fileInput.click();
                },
                video: function video() {
                  this.quill.theme.tooltip.edit("video");
                }
              }
            }
          }
        });
        var BaseTooltip = function(_Tooltip) {
          _inherits(BaseTooltip2, _Tooltip);
          function BaseTooltip2(quill2, boundsContainer) {
            _classCallCheck(this, BaseTooltip2);
            var _this4 = _possibleConstructorReturn(this, (BaseTooltip2.__proto__ || Object.getPrototypeOf(BaseTooltip2)).call(this, quill2, boundsContainer));
            _this4.textbox = _this4.root.querySelector('input[type="text"]');
            _this4.listen();
            return _this4;
          }
          _createClass(BaseTooltip2, [{
            key: "listen",
            value: function listen() {
              var _this5 = this;
              this.textbox.addEventListener("keydown", function(event) {
                if (_keyboard2.default.match(event, "enter")) {
                  _this5.save();
                  event.preventDefault();
                } else if (_keyboard2.default.match(event, "escape")) {
                  _this5.cancel();
                  event.preventDefault();
                }
              });
            }
          }, {
            key: "cancel",
            value: function cancel() {
              this.hide();
            }
          }, {
            key: "edit",
            value: function edit2() {
              var mode = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "link";
              var preview = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
              this.root.classList.remove("ql-hidden");
              this.root.classList.add("ql-editing");
              if (preview != null) {
                this.textbox.value = preview;
              } else if (mode !== this.root.getAttribute("data-mode")) {
                this.textbox.value = "";
              }
              this.position(this.quill.getBounds(this.quill.selection.savedRange));
              this.textbox.select();
              this.textbox.setAttribute("placeholder", this.textbox.getAttribute("data-" + mode) || "");
              this.root.setAttribute("data-mode", mode);
            }
          }, {
            key: "restoreFocus",
            value: function restoreFocus() {
              var scrollTop = this.quill.scrollingContainer.scrollTop;
              this.quill.focus();
              this.quill.scrollingContainer.scrollTop = scrollTop;
            }
          }, {
            key: "save",
            value: function save() {
              var value2 = this.textbox.value;
              switch (this.root.getAttribute("data-mode")) {
                case "link": {
                  var scrollTop = this.quill.root.scrollTop;
                  if (this.linkRange) {
                    this.quill.formatText(this.linkRange, "link", value2, _emitter2.default.sources.USER);
                    delete this.linkRange;
                  } else {
                    this.restoreFocus();
                    this.quill.format("link", value2, _emitter2.default.sources.USER);
                  }
                  this.quill.root.scrollTop = scrollTop;
                  break;
                }
                case "video": {
                  value2 = extractVideoUrl(value2);
                }
                case "formula": {
                  if (!value2)
                    break;
                  var range = this.quill.getSelection(true);
                  if (range != null) {
                    var index = range.index + range.length;
                    this.quill.insertEmbed(index, this.root.getAttribute("data-mode"), value2, _emitter2.default.sources.USER);
                    if (this.root.getAttribute("data-mode") === "formula") {
                      this.quill.insertText(index + 1, " ", _emitter2.default.sources.USER);
                    }
                    this.quill.setSelection(index + 2, _emitter2.default.sources.USER);
                  }
                  break;
                }
              }
              this.textbox.value = "";
              this.hide();
            }
          }]);
          return BaseTooltip2;
        }(_tooltip2.default);
        function extractVideoUrl(url) {
          var match = url.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || url.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
          if (match) {
            return (match[1] || "https") + "://www.youtube.com/embed/" + match[2] + "?showinfo=0";
          }
          if (match = url.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) {
            return (match[1] || "https") + "://player.vimeo.com/video/" + match[2] + "/";
          }
          return url;
        }
        function fillSelect(select, values) {
          var defaultValue = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
          values.forEach(function(value2) {
            var option = document.createElement("option");
            if (value2 === defaultValue) {
              option.setAttribute("selected", "selected");
            } else {
              option.setAttribute("value", value2);
            }
            select.appendChild(option);
          });
        }
        exports2.BaseTooltip = BaseTooltip;
        exports2.default = BaseTheme;
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", { value: true });
        var LinkedList = function() {
          function LinkedList2() {
            this.head = this.tail = null;
            this.length = 0;
          }
          LinkedList2.prototype.append = function() {
            var nodes = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              nodes[_i] = arguments[_i];
            }
            this.insertBefore(nodes[0], null);
            if (nodes.length > 1) {
              this.append.apply(this, nodes.slice(1));
            }
          };
          LinkedList2.prototype.contains = function(node) {
            var cur, next = this.iterator();
            while (cur = next()) {
              if (cur === node)
                return true;
            }
            return false;
          };
          LinkedList2.prototype.insertBefore = function(node, refNode) {
            if (!node)
              return;
            node.next = refNode;
            if (refNode != null) {
              node.prev = refNode.prev;
              if (refNode.prev != null) {
                refNode.prev.next = node;
              }
              refNode.prev = node;
              if (refNode === this.head) {
                this.head = node;
              }
            } else if (this.tail != null) {
              this.tail.next = node;
              node.prev = this.tail;
              this.tail = node;
            } else {
              node.prev = null;
              this.head = this.tail = node;
            }
            this.length += 1;
          };
          LinkedList2.prototype.offset = function(target) {
            var index = 0, cur = this.head;
            while (cur != null) {
              if (cur === target)
                return index;
              index += cur.length();
              cur = cur.next;
            }
            return -1;
          };
          LinkedList2.prototype.remove = function(node) {
            if (!this.contains(node))
              return;
            if (node.prev != null)
              node.prev.next = node.next;
            if (node.next != null)
              node.next.prev = node.prev;
            if (node === this.head)
              this.head = node.next;
            if (node === this.tail)
              this.tail = node.prev;
            this.length -= 1;
          };
          LinkedList2.prototype.iterator = function(curNode) {
            if (curNode === void 0) {
              curNode = this.head;
            }
            return function() {
              var ret = curNode;
              if (curNode != null)
                curNode = curNode.next;
              return ret;
            };
          };
          LinkedList2.prototype.find = function(index, inclusive) {
            if (inclusive === void 0) {
              inclusive = false;
            }
            var cur, next = this.iterator();
            while (cur = next()) {
              var length = cur.length();
              if (index < length || inclusive && index === length && (cur.next == null || cur.next.length() !== 0)) {
                return [cur, index];
              }
              index -= length;
            }
            return [null, 0];
          };
          LinkedList2.prototype.forEach = function(callback2) {
            var cur, next = this.iterator();
            while (cur = next()) {
              callback2(cur);
            }
          };
          LinkedList2.prototype.forEachAt = function(index, length, callback2) {
            if (length <= 0)
              return;
            var _a = this.find(index), startNode = _a[0], offset = _a[1];
            var cur, curIndex = index - offset, next = this.iterator(startNode);
            while ((cur = next()) && curIndex < index + length) {
              var curLength = cur.length();
              if (index > curIndex) {
                callback2(cur, index - curIndex, Math.min(length, curIndex + curLength - index));
              } else {
                callback2(cur, 0, Math.min(curLength, index + length - curIndex));
              }
              curIndex += curLength;
            }
          };
          LinkedList2.prototype.map = function(callback2) {
            return this.reduce(function(memo, cur) {
              memo.push(callback2(cur));
              return memo;
            }, []);
          };
          LinkedList2.prototype.reduce = function(callback2, memo) {
            var cur, next = this.iterator();
            while (cur = next()) {
              memo = callback2(memo, cur);
            }
            return memo;
          };
          return LinkedList2;
        }();
        exports2.default = LinkedList;
      },
      function(module2, exports2, __webpack_require__) {
        var __extends = this && this.__extends || function() {
          var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
            d.__proto__ = b;
          } || function(d, b) {
            for (var p in b)
              if (b.hasOwnProperty(p))
                d[p] = b[p];
          };
          return function(d, b) {
            extendStatics(d, b);
            function __() {
              this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
          };
        }();
        Object.defineProperty(exports2, "__esModule", { value: true });
        var container_1 = __webpack_require__(17);
        var Registry = __webpack_require__(1);
        var OBSERVER_CONFIG = {
          attributes: true,
          characterData: true,
          characterDataOldValue: true,
          childList: true,
          subtree: true
        };
        var MAX_OPTIMIZE_ITERATIONS = 100;
        var ScrollBlot = function(_super) {
          __extends(ScrollBlot2, _super);
          function ScrollBlot2(node) {
            var _this = _super.call(this, node) || this;
            _this.scroll = _this;
            _this.observer = new MutationObserver(function(mutations) {
              _this.update(mutations);
            });
            _this.observer.observe(_this.domNode, OBSERVER_CONFIG);
            _this.attach();
            return _this;
          }
          ScrollBlot2.prototype.detach = function() {
            _super.prototype.detach.call(this);
            this.observer.disconnect();
          };
          ScrollBlot2.prototype.deleteAt = function(index, length) {
            this.update();
            if (index === 0 && length === this.length()) {
              this.children.forEach(function(child) {
                child.remove();
              });
            } else {
              _super.prototype.deleteAt.call(this, index, length);
            }
          };
          ScrollBlot2.prototype.formatAt = function(index, length, name, value2) {
            this.update();
            _super.prototype.formatAt.call(this, index, length, name, value2);
          };
          ScrollBlot2.prototype.insertAt = function(index, value2, def) {
            this.update();
            _super.prototype.insertAt.call(this, index, value2, def);
          };
          ScrollBlot2.prototype.optimize = function(mutations, context) {
            var _this = this;
            if (mutations === void 0) {
              mutations = [];
            }
            if (context === void 0) {
              context = {};
            }
            _super.prototype.optimize.call(this, context);
            var records = [].slice.call(this.observer.takeRecords());
            while (records.length > 0)
              mutations.push(records.pop());
            var mark = function(blot, markParent) {
              if (markParent === void 0) {
                markParent = true;
              }
              if (blot == null || blot === _this)
                return;
              if (blot.domNode.parentNode == null)
                return;
              if (blot.domNode[Registry.DATA_KEY].mutations == null) {
                blot.domNode[Registry.DATA_KEY].mutations = [];
              }
              if (markParent)
                mark(blot.parent);
            };
            var optimize = function(blot) {
              if (blot.domNode[Registry.DATA_KEY] == null || blot.domNode[Registry.DATA_KEY].mutations == null) {
                return;
              }
              if (blot instanceof container_1.default) {
                blot.children.forEach(optimize);
              }
              blot.optimize(context);
            };
            var remaining = mutations;
            for (var i = 0; remaining.length > 0; i += 1) {
              if (i >= MAX_OPTIMIZE_ITERATIONS) {
                throw new Error("[Parchment] Maximum optimize iterations reached");
              }
              remaining.forEach(function(mutation) {
                var blot = Registry.find(mutation.target, true);
                if (blot == null)
                  return;
                if (blot.domNode === mutation.target) {
                  if (mutation.type === "childList") {
                    mark(Registry.find(mutation.previousSibling, false));
                    [].forEach.call(mutation.addedNodes, function(node) {
                      var child = Registry.find(node, false);
                      mark(child, false);
                      if (child instanceof container_1.default) {
                        child.children.forEach(function(grandChild) {
                          mark(grandChild, false);
                        });
                      }
                    });
                  } else if (mutation.type === "attributes") {
                    mark(blot.prev);
                  }
                }
                mark(blot);
              });
              this.children.forEach(optimize);
              remaining = [].slice.call(this.observer.takeRecords());
              records = remaining.slice();
              while (records.length > 0)
                mutations.push(records.pop());
            }
          };
          ScrollBlot2.prototype.update = function(mutations, context) {
            var _this = this;
            if (context === void 0) {
              context = {};
            }
            mutations = mutations || this.observer.takeRecords();
            mutations.map(function(mutation) {
              var blot = Registry.find(mutation.target, true);
              if (blot == null)
                return null;
              if (blot.domNode[Registry.DATA_KEY].mutations == null) {
                blot.domNode[Registry.DATA_KEY].mutations = [mutation];
                return blot;
              } else {
                blot.domNode[Registry.DATA_KEY].mutations.push(mutation);
                return null;
              }
            }).forEach(function(blot) {
              if (blot == null || blot === _this || blot.domNode[Registry.DATA_KEY] == null)
                return;
              blot.update(blot.domNode[Registry.DATA_KEY].mutations || [], context);
            });
            if (this.domNode[Registry.DATA_KEY].mutations != null) {
              _super.prototype.update.call(this, this.domNode[Registry.DATA_KEY].mutations, context);
            }
            this.optimize(mutations, context);
          };
          ScrollBlot2.blotName = "scroll";
          ScrollBlot2.defaultChild = "block";
          ScrollBlot2.scope = Registry.Scope.BLOCK_BLOT;
          ScrollBlot2.tagName = "DIV";
          return ScrollBlot2;
        }(container_1.default);
        exports2.default = ScrollBlot;
      },
      function(module2, exports2, __webpack_require__) {
        var __extends = this && this.__extends || function() {
          var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
            d.__proto__ = b;
          } || function(d, b) {
            for (var p in b)
              if (b.hasOwnProperty(p))
                d[p] = b[p];
          };
          return function(d, b) {
            extendStatics(d, b);
            function __() {
              this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
          };
        }();
        Object.defineProperty(exports2, "__esModule", { value: true });
        var format_1 = __webpack_require__(18);
        var Registry = __webpack_require__(1);
        function isEqual(obj1, obj2) {
          if (Object.keys(obj1).length !== Object.keys(obj2).length)
            return false;
          for (var prop in obj1) {
            if (obj1[prop] !== obj2[prop])
              return false;
          }
          return true;
        }
        var InlineBlot = function(_super) {
          __extends(InlineBlot2, _super);
          function InlineBlot2() {
            return _super !== null && _super.apply(this, arguments) || this;
          }
          InlineBlot2.formats = function(domNode) {
            if (domNode.tagName === InlineBlot2.tagName)
              return void 0;
            return _super.formats.call(this, domNode);
          };
          InlineBlot2.prototype.format = function(name, value2) {
            var _this = this;
            if (name === this.statics.blotName && !value2) {
              this.children.forEach(function(child) {
                if (!(child instanceof format_1.default)) {
                  child = child.wrap(InlineBlot2.blotName, true);
                }
                _this.attributes.copy(child);
              });
              this.unwrap();
            } else {
              _super.prototype.format.call(this, name, value2);
            }
          };
          InlineBlot2.prototype.formatAt = function(index, length, name, value2) {
            if (this.formats()[name] != null || Registry.query(name, Registry.Scope.ATTRIBUTE)) {
              var blot = this.isolate(index, length);
              blot.format(name, value2);
            } else {
              _super.prototype.formatAt.call(this, index, length, name, value2);
            }
          };
          InlineBlot2.prototype.optimize = function(context) {
            _super.prototype.optimize.call(this, context);
            var formats = this.formats();
            if (Object.keys(formats).length === 0) {
              return this.unwrap();
            }
            var next = this.next;
            if (next instanceof InlineBlot2 && next.prev === this && isEqual(formats, next.formats())) {
              next.moveChildren(this);
              next.remove();
            }
          };
          InlineBlot2.blotName = "inline";
          InlineBlot2.scope = Registry.Scope.INLINE_BLOT;
          InlineBlot2.tagName = "SPAN";
          return InlineBlot2;
        }(format_1.default);
        exports2.default = InlineBlot;
      },
      function(module2, exports2, __webpack_require__) {
        var __extends = this && this.__extends || function() {
          var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
            d.__proto__ = b;
          } || function(d, b) {
            for (var p in b)
              if (b.hasOwnProperty(p))
                d[p] = b[p];
          };
          return function(d, b) {
            extendStatics(d, b);
            function __() {
              this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
          };
        }();
        Object.defineProperty(exports2, "__esModule", { value: true });
        var format_1 = __webpack_require__(18);
        var Registry = __webpack_require__(1);
        var BlockBlot = function(_super) {
          __extends(BlockBlot2, _super);
          function BlockBlot2() {
            return _super !== null && _super.apply(this, arguments) || this;
          }
          BlockBlot2.formats = function(domNode) {
            var tagName = Registry.query(BlockBlot2.blotName).tagName;
            if (domNode.tagName === tagName)
              return void 0;
            return _super.formats.call(this, domNode);
          };
          BlockBlot2.prototype.format = function(name, value2) {
            if (Registry.query(name, Registry.Scope.BLOCK) == null) {
              return;
            } else if (name === this.statics.blotName && !value2) {
              this.replaceWith(BlockBlot2.blotName);
            } else {
              _super.prototype.format.call(this, name, value2);
            }
          };
          BlockBlot2.prototype.formatAt = function(index, length, name, value2) {
            if (Registry.query(name, Registry.Scope.BLOCK) != null) {
              this.format(name, value2);
            } else {
              _super.prototype.formatAt.call(this, index, length, name, value2);
            }
          };
          BlockBlot2.prototype.insertAt = function(index, value2, def) {
            if (def == null || Registry.query(value2, Registry.Scope.INLINE) != null) {
              _super.prototype.insertAt.call(this, index, value2, def);
            } else {
              var after = this.split(index);
              var blot = Registry.create(value2, def);
              after.parent.insertBefore(blot, after);
            }
          };
          BlockBlot2.prototype.update = function(mutations, context) {
            if (navigator.userAgent.match(/Trident/)) {
              this.build();
            } else {
              _super.prototype.update.call(this, mutations, context);
            }
          };
          BlockBlot2.blotName = "block";
          BlockBlot2.scope = Registry.Scope.BLOCK_BLOT;
          BlockBlot2.tagName = "P";
          return BlockBlot2;
        }(format_1.default);
        exports2.default = BlockBlot;
      },
      function(module2, exports2, __webpack_require__) {
        var __extends = this && this.__extends || function() {
          var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
            d.__proto__ = b;
          } || function(d, b) {
            for (var p in b)
              if (b.hasOwnProperty(p))
                d[p] = b[p];
          };
          return function(d, b) {
            extendStatics(d, b);
            function __() {
              this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
          };
        }();
        Object.defineProperty(exports2, "__esModule", { value: true });
        var leaf_1 = __webpack_require__(19);
        var EmbedBlot = function(_super) {
          __extends(EmbedBlot2, _super);
          function EmbedBlot2() {
            return _super !== null && _super.apply(this, arguments) || this;
          }
          EmbedBlot2.formats = function(domNode) {
            return void 0;
          };
          EmbedBlot2.prototype.format = function(name, value2) {
            _super.prototype.formatAt.call(this, 0, this.length(), name, value2);
          };
          EmbedBlot2.prototype.formatAt = function(index, length, name, value2) {
            if (index === 0 && length === this.length()) {
              this.format(name, value2);
            } else {
              _super.prototype.formatAt.call(this, index, length, name, value2);
            }
          };
          EmbedBlot2.prototype.formats = function() {
            return this.statics.formats(this.domNode);
          };
          return EmbedBlot2;
        }(leaf_1.default);
        exports2.default = EmbedBlot;
      },
      function(module2, exports2, __webpack_require__) {
        var __extends = this && this.__extends || function() {
          var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
            d.__proto__ = b;
          } || function(d, b) {
            for (var p in b)
              if (b.hasOwnProperty(p))
                d[p] = b[p];
          };
          return function(d, b) {
            extendStatics(d, b);
            function __() {
              this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
          };
        }();
        Object.defineProperty(exports2, "__esModule", { value: true });
        var leaf_1 = __webpack_require__(19);
        var Registry = __webpack_require__(1);
        var TextBlot = function(_super) {
          __extends(TextBlot2, _super);
          function TextBlot2(node) {
            var _this = _super.call(this, node) || this;
            _this.text = _this.statics.value(_this.domNode);
            return _this;
          }
          TextBlot2.create = function(value2) {
            return document.createTextNode(value2);
          };
          TextBlot2.value = function(domNode) {
            var text = domNode.data;
            if (text["normalize"])
              text = text["normalize"]();
            return text;
          };
          TextBlot2.prototype.deleteAt = function(index, length) {
            this.domNode.data = this.text = this.text.slice(0, index) + this.text.slice(index + length);
          };
          TextBlot2.prototype.index = function(node, offset) {
            if (this.domNode === node) {
              return offset;
            }
            return -1;
          };
          TextBlot2.prototype.insertAt = function(index, value2, def) {
            if (def == null) {
              this.text = this.text.slice(0, index) + value2 + this.text.slice(index);
              this.domNode.data = this.text;
            } else {
              _super.prototype.insertAt.call(this, index, value2, def);
            }
          };
          TextBlot2.prototype.length = function() {
            return this.text.length;
          };
          TextBlot2.prototype.optimize = function(context) {
            _super.prototype.optimize.call(this, context);
            this.text = this.statics.value(this.domNode);
            if (this.text.length === 0) {
              this.remove();
            } else if (this.next instanceof TextBlot2 && this.next.prev === this) {
              this.insertAt(this.length(), this.next.value());
              this.next.remove();
            }
          };
          TextBlot2.prototype.position = function(index, inclusive) {
            return [this.domNode, index];
          };
          TextBlot2.prototype.split = function(index, force) {
            if (force === void 0) {
              force = false;
            }
            if (!force) {
              if (index === 0)
                return this;
              if (index === this.length())
                return this.next;
            }
            var after = Registry.create(this.domNode.splitText(index));
            this.parent.insertBefore(after, this.next);
            this.text = this.statics.value(this.domNode);
            return after;
          };
          TextBlot2.prototype.update = function(mutations, context) {
            var _this = this;
            if (mutations.some(function(mutation) {
              return mutation.type === "characterData" && mutation.target === _this.domNode;
            })) {
              this.text = this.statics.value(this.domNode);
            }
          };
          TextBlot2.prototype.value = function() {
            return this.text;
          };
          TextBlot2.blotName = "text";
          TextBlot2.scope = Registry.Scope.INLINE_BLOT;
          return TextBlot2;
        }(leaf_1.default);
        exports2.default = TextBlot;
      },
      function(module2, exports2, __webpack_require__) {
        var elem = document.createElement("div");
        elem.classList.toggle("test-class", false);
        if (elem.classList.contains("test-class")) {
          var _toggle = DOMTokenList.prototype.toggle;
          DOMTokenList.prototype.toggle = function(token, force) {
            if (arguments.length > 1 && !this.contains(token) === !force) {
              return force;
            } else {
              return _toggle.call(this, token);
            }
          };
        }
        if (!String.prototype.startsWith) {
          String.prototype.startsWith = function(searchString, position) {
            position = position || 0;
            return this.substr(position, searchString.length) === searchString;
          };
        }
        if (!String.prototype.endsWith) {
          String.prototype.endsWith = function(searchString, position) {
            var subjectString = this.toString();
            if (typeof position !== "number" || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
              position = subjectString.length;
            }
            position -= searchString.length;
            var lastIndex = subjectString.indexOf(searchString, position);
            return lastIndex !== -1 && lastIndex === position;
          };
        }
        if (!Array.prototype.find) {
          Object.defineProperty(Array.prototype, "find", {
            value: function value2(predicate) {
              if (this === null) {
                throw new TypeError("Array.prototype.find called on null or undefined");
              }
              if (typeof predicate !== "function") {
                throw new TypeError("predicate must be a function");
              }
              var list = Object(this);
              var length = list.length >>> 0;
              var thisArg = arguments[1];
              var value3;
              for (var i = 0; i < length; i++) {
                value3 = list[i];
                if (predicate.call(thisArg, value3, i, list)) {
                  return value3;
                }
              }
              return void 0;
            }
          });
        }
        document.addEventListener("DOMContentLoaded", function() {
          document.execCommand("enableObjectResizing", false, false);
          document.execCommand("autoUrlDetect", false, false);
        });
      },
      function(module2, exports2) {
        var DIFF_DELETE = -1;
        var DIFF_INSERT = 1;
        var DIFF_EQUAL = 0;
        function diff_main(text1, text2, cursor_pos) {
          if (text1 == text2) {
            if (text1) {
              return [[DIFF_EQUAL, text1]];
            }
            return [];
          }
          if (cursor_pos < 0 || text1.length < cursor_pos) {
            cursor_pos = null;
          }
          var commonlength = diff_commonPrefix(text1, text2);
          var commonprefix = text1.substring(0, commonlength);
          text1 = text1.substring(commonlength);
          text2 = text2.substring(commonlength);
          commonlength = diff_commonSuffix(text1, text2);
          var commonsuffix = text1.substring(text1.length - commonlength);
          text1 = text1.substring(0, text1.length - commonlength);
          text2 = text2.substring(0, text2.length - commonlength);
          var diffs = diff_compute_(text1, text2);
          if (commonprefix) {
            diffs.unshift([DIFF_EQUAL, commonprefix]);
          }
          if (commonsuffix) {
            diffs.push([DIFF_EQUAL, commonsuffix]);
          }
          diff_cleanupMerge(diffs);
          if (cursor_pos != null) {
            diffs = fix_cursor(diffs, cursor_pos);
          }
          diffs = fix_emoji(diffs);
          return diffs;
        }
        function diff_compute_(text1, text2) {
          var diffs;
          if (!text1) {
            return [[DIFF_INSERT, text2]];
          }
          if (!text2) {
            return [[DIFF_DELETE, text1]];
          }
          var longtext = text1.length > text2.length ? text1 : text2;
          var shorttext = text1.length > text2.length ? text2 : text1;
          var i = longtext.indexOf(shorttext);
          if (i != -1) {
            diffs = [
              [DIFF_INSERT, longtext.substring(0, i)],
              [DIFF_EQUAL, shorttext],
              [DIFF_INSERT, longtext.substring(i + shorttext.length)]
            ];
            if (text1.length > text2.length) {
              diffs[0][0] = diffs[2][0] = DIFF_DELETE;
            }
            return diffs;
          }
          if (shorttext.length == 1) {
            return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
          }
          var hm = diff_halfMatch_(text1, text2);
          if (hm) {
            var text1_a = hm[0];
            var text1_b = hm[1];
            var text2_a = hm[2];
            var text2_b = hm[3];
            var mid_common = hm[4];
            var diffs_a = diff_main(text1_a, text2_a);
            var diffs_b = diff_main(text1_b, text2_b);
            return diffs_a.concat([[DIFF_EQUAL, mid_common]], diffs_b);
          }
          return diff_bisect_(text1, text2);
        }
        function diff_bisect_(text1, text2) {
          var text1_length = text1.length;
          var text2_length = text2.length;
          var max_d = Math.ceil((text1_length + text2_length) / 2);
          var v_offset = max_d;
          var v_length = 2 * max_d;
          var v1 = new Array(v_length);
          var v2 = new Array(v_length);
          for (var x = 0; x < v_length; x++) {
            v1[x] = -1;
            v2[x] = -1;
          }
          v1[v_offset + 1] = 0;
          v2[v_offset + 1] = 0;
          var delta = text1_length - text2_length;
          var front = delta % 2 != 0;
          var k1start = 0;
          var k1end = 0;
          var k2start = 0;
          var k2end = 0;
          for (var d = 0; d < max_d; d++) {
            for (var k1 = -d + k1start; k1 <= d - k1end; k1 += 2) {
              var k1_offset = v_offset + k1;
              var x1;
              if (k1 == -d || k1 != d && v1[k1_offset - 1] < v1[k1_offset + 1]) {
                x1 = v1[k1_offset + 1];
              } else {
                x1 = v1[k1_offset - 1] + 1;
              }
              var y1 = x1 - k1;
              while (x1 < text1_length && y1 < text2_length && text1.charAt(x1) == text2.charAt(y1)) {
                x1++;
                y1++;
              }
              v1[k1_offset] = x1;
              if (x1 > text1_length) {
                k1end += 2;
              } else if (y1 > text2_length) {
                k1start += 2;
              } else if (front) {
                var k2_offset = v_offset + delta - k1;
                if (k2_offset >= 0 && k2_offset < v_length && v2[k2_offset] != -1) {
                  var x2 = text1_length - v2[k2_offset];
                  if (x1 >= x2) {
                    return diff_bisectSplit_(text1, text2, x1, y1);
                  }
                }
              }
            }
            for (var k2 = -d + k2start; k2 <= d - k2end; k2 += 2) {
              var k2_offset = v_offset + k2;
              var x2;
              if (k2 == -d || k2 != d && v2[k2_offset - 1] < v2[k2_offset + 1]) {
                x2 = v2[k2_offset + 1];
              } else {
                x2 = v2[k2_offset - 1] + 1;
              }
              var y2 = x2 - k2;
              while (x2 < text1_length && y2 < text2_length && text1.charAt(text1_length - x2 - 1) == text2.charAt(text2_length - y2 - 1)) {
                x2++;
                y2++;
              }
              v2[k2_offset] = x2;
              if (x2 > text1_length) {
                k2end += 2;
              } else if (y2 > text2_length) {
                k2start += 2;
              } else if (!front) {
                var k1_offset = v_offset + delta - k2;
                if (k1_offset >= 0 && k1_offset < v_length && v1[k1_offset] != -1) {
                  var x1 = v1[k1_offset];
                  var y1 = v_offset + x1 - k1_offset;
                  x2 = text1_length - x2;
                  if (x1 >= x2) {
                    return diff_bisectSplit_(text1, text2, x1, y1);
                  }
                }
              }
            }
          }
          return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
        }
        function diff_bisectSplit_(text1, text2, x, y) {
          var text1a = text1.substring(0, x);
          var text2a = text2.substring(0, y);
          var text1b = text1.substring(x);
          var text2b = text2.substring(y);
          var diffs = diff_main(text1a, text2a);
          var diffsb = diff_main(text1b, text2b);
          return diffs.concat(diffsb);
        }
        function diff_commonPrefix(text1, text2) {
          if (!text1 || !text2 || text1.charAt(0) != text2.charAt(0)) {
            return 0;
          }
          var pointermin = 0;
          var pointermax = Math.min(text1.length, text2.length);
          var pointermid = pointermax;
          var pointerstart = 0;
          while (pointermin < pointermid) {
            if (text1.substring(pointerstart, pointermid) == text2.substring(pointerstart, pointermid)) {
              pointermin = pointermid;
              pointerstart = pointermin;
            } else {
              pointermax = pointermid;
            }
            pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
          }
          return pointermid;
        }
        function diff_commonSuffix(text1, text2) {
          if (!text1 || !text2 || text1.charAt(text1.length - 1) != text2.charAt(text2.length - 1)) {
            return 0;
          }
          var pointermin = 0;
          var pointermax = Math.min(text1.length, text2.length);
          var pointermid = pointermax;
          var pointerend = 0;
          while (pointermin < pointermid) {
            if (text1.substring(text1.length - pointermid, text1.length - pointerend) == text2.substring(text2.length - pointermid, text2.length - pointerend)) {
              pointermin = pointermid;
              pointerend = pointermin;
            } else {
              pointermax = pointermid;
            }
            pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
          }
          return pointermid;
        }
        function diff_halfMatch_(text1, text2) {
          var longtext = text1.length > text2.length ? text1 : text2;
          var shorttext = text1.length > text2.length ? text2 : text1;
          if (longtext.length < 4 || shorttext.length * 2 < longtext.length) {
            return null;
          }
          function diff_halfMatchI_(longtext2, shorttext2, i) {
            var seed = longtext2.substring(i, i + Math.floor(longtext2.length / 4));
            var j = -1;
            var best_common = "";
            var best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b;
            while ((j = shorttext2.indexOf(seed, j + 1)) != -1) {
              var prefixLength = diff_commonPrefix(longtext2.substring(i), shorttext2.substring(j));
              var suffixLength = diff_commonSuffix(longtext2.substring(0, i), shorttext2.substring(0, j));
              if (best_common.length < suffixLength + prefixLength) {
                best_common = shorttext2.substring(j - suffixLength, j) + shorttext2.substring(j, j + prefixLength);
                best_longtext_a = longtext2.substring(0, i - suffixLength);
                best_longtext_b = longtext2.substring(i + prefixLength);
                best_shorttext_a = shorttext2.substring(0, j - suffixLength);
                best_shorttext_b = shorttext2.substring(j + prefixLength);
              }
            }
            if (best_common.length * 2 >= longtext2.length) {
              return [
                best_longtext_a,
                best_longtext_b,
                best_shorttext_a,
                best_shorttext_b,
                best_common
              ];
            } else {
              return null;
            }
          }
          var hm1 = diff_halfMatchI_(longtext, shorttext, Math.ceil(longtext.length / 4));
          var hm2 = diff_halfMatchI_(longtext, shorttext, Math.ceil(longtext.length / 2));
          var hm;
          if (!hm1 && !hm2) {
            return null;
          } else if (!hm2) {
            hm = hm1;
          } else if (!hm1) {
            hm = hm2;
          } else {
            hm = hm1[4].length > hm2[4].length ? hm1 : hm2;
          }
          var text1_a, text1_b, text2_a, text2_b;
          if (text1.length > text2.length) {
            text1_a = hm[0];
            text1_b = hm[1];
            text2_a = hm[2];
            text2_b = hm[3];
          } else {
            text2_a = hm[0];
            text2_b = hm[1];
            text1_a = hm[2];
            text1_b = hm[3];
          }
          var mid_common = hm[4];
          return [text1_a, text1_b, text2_a, text2_b, mid_common];
        }
        function diff_cleanupMerge(diffs) {
          diffs.push([DIFF_EQUAL, ""]);
          var pointer = 0;
          var count_delete = 0;
          var count_insert = 0;
          var text_delete = "";
          var text_insert = "";
          var commonlength;
          while (pointer < diffs.length) {
            switch (diffs[pointer][0]) {
              case DIFF_INSERT:
                count_insert++;
                text_insert += diffs[pointer][1];
                pointer++;
                break;
              case DIFF_DELETE:
                count_delete++;
                text_delete += diffs[pointer][1];
                pointer++;
                break;
              case DIFF_EQUAL:
                if (count_delete + count_insert > 1) {
                  if (count_delete !== 0 && count_insert !== 0) {
                    commonlength = diff_commonPrefix(text_insert, text_delete);
                    if (commonlength !== 0) {
                      if (pointer - count_delete - count_insert > 0 && diffs[pointer - count_delete - count_insert - 1][0] == DIFF_EQUAL) {
                        diffs[pointer - count_delete - count_insert - 1][1] += text_insert.substring(0, commonlength);
                      } else {
                        diffs.splice(0, 0, [
                          DIFF_EQUAL,
                          text_insert.substring(0, commonlength)
                        ]);
                        pointer++;
                      }
                      text_insert = text_insert.substring(commonlength);
                      text_delete = text_delete.substring(commonlength);
                    }
                    commonlength = diff_commonSuffix(text_insert, text_delete);
                    if (commonlength !== 0) {
                      diffs[pointer][1] = text_insert.substring(text_insert.length - commonlength) + diffs[pointer][1];
                      text_insert = text_insert.substring(0, text_insert.length - commonlength);
                      text_delete = text_delete.substring(0, text_delete.length - commonlength);
                    }
                  }
                  if (count_delete === 0) {
                    diffs.splice(pointer - count_insert, count_delete + count_insert, [DIFF_INSERT, text_insert]);
                  } else if (count_insert === 0) {
                    diffs.splice(pointer - count_delete, count_delete + count_insert, [DIFF_DELETE, text_delete]);
                  } else {
                    diffs.splice(pointer - count_delete - count_insert, count_delete + count_insert, [DIFF_DELETE, text_delete], [DIFF_INSERT, text_insert]);
                  }
                  pointer = pointer - count_delete - count_insert + (count_delete ? 1 : 0) + (count_insert ? 1 : 0) + 1;
                } else if (pointer !== 0 && diffs[pointer - 1][0] == DIFF_EQUAL) {
                  diffs[pointer - 1][1] += diffs[pointer][1];
                  diffs.splice(pointer, 1);
                } else {
                  pointer++;
                }
                count_insert = 0;
                count_delete = 0;
                text_delete = "";
                text_insert = "";
                break;
            }
          }
          if (diffs[diffs.length - 1][1] === "") {
            diffs.pop();
          }
          var changes = false;
          pointer = 1;
          while (pointer < diffs.length - 1) {
            if (diffs[pointer - 1][0] == DIFF_EQUAL && diffs[pointer + 1][0] == DIFF_EQUAL) {
              if (diffs[pointer][1].substring(diffs[pointer][1].length - diffs[pointer - 1][1].length) == diffs[pointer - 1][1]) {
                diffs[pointer][1] = diffs[pointer - 1][1] + diffs[pointer][1].substring(0, diffs[pointer][1].length - diffs[pointer - 1][1].length);
                diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
                diffs.splice(pointer - 1, 1);
                changes = true;
              } else if (diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) == diffs[pointer + 1][1]) {
                diffs[pointer - 1][1] += diffs[pointer + 1][1];
                diffs[pointer][1] = diffs[pointer][1].substring(diffs[pointer + 1][1].length) + diffs[pointer + 1][1];
                diffs.splice(pointer + 1, 1);
                changes = true;
              }
            }
            pointer++;
          }
          if (changes) {
            diff_cleanupMerge(diffs);
          }
        }
        var diff = diff_main;
        diff.INSERT = DIFF_INSERT;
        diff.DELETE = DIFF_DELETE;
        diff.EQUAL = DIFF_EQUAL;
        module2.exports = diff;
        function cursor_normalize_diff(diffs, cursor_pos) {
          if (cursor_pos === 0) {
            return [DIFF_EQUAL, diffs];
          }
          for (var current_pos = 0, i = 0; i < diffs.length; i++) {
            var d = diffs[i];
            if (d[0] === DIFF_DELETE || d[0] === DIFF_EQUAL) {
              var next_pos = current_pos + d[1].length;
              if (cursor_pos === next_pos) {
                return [i + 1, diffs];
              } else if (cursor_pos < next_pos) {
                diffs = diffs.slice();
                var split_pos = cursor_pos - current_pos;
                var d_left = [d[0], d[1].slice(0, split_pos)];
                var d_right = [d[0], d[1].slice(split_pos)];
                diffs.splice(i, 1, d_left, d_right);
                return [i + 1, diffs];
              } else {
                current_pos = next_pos;
              }
            }
          }
          throw new Error("cursor_pos is out of bounds!");
        }
        function fix_cursor(diffs, cursor_pos) {
          var norm = cursor_normalize_diff(diffs, cursor_pos);
          var ndiffs = norm[1];
          var cursor_pointer = norm[0];
          var d = ndiffs[cursor_pointer];
          var d_next = ndiffs[cursor_pointer + 1];
          if (d == null) {
            return diffs;
          } else if (d[0] !== DIFF_EQUAL) {
            return diffs;
          } else {
            if (d_next != null && d[1] + d_next[1] === d_next[1] + d[1]) {
              ndiffs.splice(cursor_pointer, 2, d_next, d);
              return merge_tuples(ndiffs, cursor_pointer, 2);
            } else if (d_next != null && d_next[1].indexOf(d[1]) === 0) {
              ndiffs.splice(cursor_pointer, 2, [d_next[0], d[1]], [0, d[1]]);
              var suffix = d_next[1].slice(d[1].length);
              if (suffix.length > 0) {
                ndiffs.splice(cursor_pointer + 2, 0, [d_next[0], suffix]);
              }
              return merge_tuples(ndiffs, cursor_pointer, 3);
            } else {
              return diffs;
            }
          }
        }
        function fix_emoji(diffs) {
          var compact = false;
          var starts_with_pair_end = function(str) {
            return str.charCodeAt(0) >= 56320 && str.charCodeAt(0) <= 57343;
          };
          var ends_with_pair_start = function(str) {
            return str.charCodeAt(str.length - 1) >= 55296 && str.charCodeAt(str.length - 1) <= 56319;
          };
          for (var i = 2; i < diffs.length; i += 1) {
            if (diffs[i - 2][0] === DIFF_EQUAL && ends_with_pair_start(diffs[i - 2][1]) && diffs[i - 1][0] === DIFF_DELETE && starts_with_pair_end(diffs[i - 1][1]) && diffs[i][0] === DIFF_INSERT && starts_with_pair_end(diffs[i][1])) {
              compact = true;
              diffs[i - 1][1] = diffs[i - 2][1].slice(-1) + diffs[i - 1][1];
              diffs[i][1] = diffs[i - 2][1].slice(-1) + diffs[i][1];
              diffs[i - 2][1] = diffs[i - 2][1].slice(0, -1);
            }
          }
          if (!compact) {
            return diffs;
          }
          var fixed_diffs = [];
          for (var i = 0; i < diffs.length; i += 1) {
            if (diffs[i][1].length > 0) {
              fixed_diffs.push(diffs[i]);
            }
          }
          return fixed_diffs;
        }
        function merge_tuples(diffs, start, length) {
          for (var i = start + length - 1; i >= 0 && i >= start - 1; i--) {
            if (i + 1 < diffs.length) {
              var left_d = diffs[i];
              var right_d = diffs[i + 1];
              if (left_d[0] === right_d[1]) {
                diffs.splice(i, 2, [left_d[0], left_d[1] + right_d[1]]);
              }
            }
          }
          return diffs;
        }
      },
      function(module2, exports2) {
        exports2 = module2.exports = typeof Object.keys === "function" ? Object.keys : shim;
        exports2.shim = shim;
        function shim(obj) {
          var keys = [];
          for (var key in obj)
            keys.push(key);
          return keys;
        }
      },
      function(module2, exports2) {
        var supportsArgumentsClass = function() {
          return Object.prototype.toString.call(arguments);
        }() == "[object Arguments]";
        exports2 = module2.exports = supportsArgumentsClass ? supported : unsupported;
        exports2.supported = supported;
        function supported(object) {
          return Object.prototype.toString.call(object) == "[object Arguments]";
        }
        exports2.unsupported = unsupported;
        function unsupported(object) {
          return object && typeof object == "object" && typeof object.length == "number" && Object.prototype.hasOwnProperty.call(object, "callee") && !Object.prototype.propertyIsEnumerable.call(object, "callee") || false;
        }
      },
      function(module2, exports2) {
        var has = Object.prototype.hasOwnProperty, prefix = "~";
        function Events() {
        }
        if (Object.create) {
          Events.prototype = Object.create(null);
          if (!new Events().__proto__)
            prefix = false;
        }
        function EE(fn, context, once) {
          this.fn = fn;
          this.context = context;
          this.once = once || false;
        }
        function EventEmitter() {
          this._events = new Events();
          this._eventsCount = 0;
        }
        EventEmitter.prototype.eventNames = function eventNames() {
          var names = [], events, name;
          if (this._eventsCount === 0)
            return names;
          for (name in events = this._events) {
            if (has.call(events, name))
              names.push(prefix ? name.slice(1) : name);
          }
          if (Object.getOwnPropertySymbols) {
            return names.concat(Object.getOwnPropertySymbols(events));
          }
          return names;
        };
        EventEmitter.prototype.listeners = function listeners(event, exists) {
          var evt = prefix ? prefix + event : event, available = this._events[evt];
          if (exists)
            return !!available;
          if (!available)
            return [];
          if (available.fn)
            return [available.fn];
          for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
            ee[i] = available[i].fn;
          }
          return ee;
        };
        EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
          var evt = prefix ? prefix + event : event;
          if (!this._events[evt])
            return false;
          var listeners = this._events[evt], len = arguments.length, args, i;
          if (listeners.fn) {
            if (listeners.once)
              this.removeListener(event, listeners.fn, void 0, true);
            switch (len) {
              case 1:
                return listeners.fn.call(listeners.context), true;
              case 2:
                return listeners.fn.call(listeners.context, a1), true;
              case 3:
                return listeners.fn.call(listeners.context, a1, a2), true;
              case 4:
                return listeners.fn.call(listeners.context, a1, a2, a3), true;
              case 5:
                return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
              case 6:
                return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
            }
            for (i = 1, args = new Array(len - 1); i < len; i++) {
              args[i - 1] = arguments[i];
            }
            listeners.fn.apply(listeners.context, args);
          } else {
            var length = listeners.length, j;
            for (i = 0; i < length; i++) {
              if (listeners[i].once)
                this.removeListener(event, listeners[i].fn, void 0, true);
              switch (len) {
                case 1:
                  listeners[i].fn.call(listeners[i].context);
                  break;
                case 2:
                  listeners[i].fn.call(listeners[i].context, a1);
                  break;
                case 3:
                  listeners[i].fn.call(listeners[i].context, a1, a2);
                  break;
                case 4:
                  listeners[i].fn.call(listeners[i].context, a1, a2, a3);
                  break;
                default:
                  if (!args)
                    for (j = 1, args = new Array(len - 1); j < len; j++) {
                      args[j - 1] = arguments[j];
                    }
                  listeners[i].fn.apply(listeners[i].context, args);
              }
            }
          }
          return true;
        };
        EventEmitter.prototype.on = function on(event, fn, context) {
          var listener = new EE(fn, context || this), evt = prefix ? prefix + event : event;
          if (!this._events[evt])
            this._events[evt] = listener, this._eventsCount++;
          else if (!this._events[evt].fn)
            this._events[evt].push(listener);
          else
            this._events[evt] = [this._events[evt], listener];
          return this;
        };
        EventEmitter.prototype.once = function once(event, fn, context) {
          var listener = new EE(fn, context || this, true), evt = prefix ? prefix + event : event;
          if (!this._events[evt])
            this._events[evt] = listener, this._eventsCount++;
          else if (!this._events[evt].fn)
            this._events[evt].push(listener);
          else
            this._events[evt] = [this._events[evt], listener];
          return this;
        };
        EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
          var evt = prefix ? prefix + event : event;
          if (!this._events[evt])
            return this;
          if (!fn) {
            if (--this._eventsCount === 0)
              this._events = new Events();
            else
              delete this._events[evt];
            return this;
          }
          var listeners = this._events[evt];
          if (listeners.fn) {
            if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
              if (--this._eventsCount === 0)
                this._events = new Events();
              else
                delete this._events[evt];
            }
          } else {
            for (var i = 0, events = [], length = listeners.length; i < length; i++) {
              if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
                events.push(listeners[i]);
              }
            }
            if (events.length)
              this._events[evt] = events.length === 1 ? events[0] : events;
            else if (--this._eventsCount === 0)
              this._events = new Events();
            else
              delete this._events[evt];
          }
          return this;
        };
        EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
          var evt;
          if (event) {
            evt = prefix ? prefix + event : event;
            if (this._events[evt]) {
              if (--this._eventsCount === 0)
                this._events = new Events();
              else
                delete this._events[evt];
            }
          } else {
            this._events = new Events();
            this._eventsCount = 0;
          }
          return this;
        };
        EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
        EventEmitter.prototype.addListener = EventEmitter.prototype.on;
        EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
          return this;
        };
        EventEmitter.prefixed = prefix;
        EventEmitter.EventEmitter = EventEmitter;
        if (typeof module2 !== "undefined") {
          module2.exports = EventEmitter;
        }
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        exports2.matchText = exports2.matchSpacing = exports2.matchNewline = exports2.matchBlot = exports2.matchAttributor = exports2.default = void 0;
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
          return typeof obj;
        } : function(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        var _slicedToArray = function() {
          function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = void 0;
            try {
              for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);
                if (i && _arr.length === i)
                  break;
              }
            } catch (err) {
              _d = true;
              _e = err;
            } finally {
              try {
                if (!_n && _i["return"])
                  _i["return"]();
              } finally {
                if (_d)
                  throw _e;
              }
            }
            return _arr;
          }
          return function(arr, i) {
            if (Array.isArray(arr)) {
              return arr;
            } else if (Symbol.iterator in Object(arr)) {
              return sliceIterator(arr, i);
            } else {
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
          };
        }();
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var _extend2 = __webpack_require__(3);
        var _extend3 = _interopRequireDefault(_extend2);
        var _quillDelta = __webpack_require__(2);
        var _quillDelta2 = _interopRequireDefault(_quillDelta);
        var _parchment = __webpack_require__(0);
        var _parchment2 = _interopRequireDefault(_parchment);
        var _quill = __webpack_require__(5);
        var _quill2 = _interopRequireDefault(_quill);
        var _logger = __webpack_require__(10);
        var _logger2 = _interopRequireDefault(_logger);
        var _module = __webpack_require__(9);
        var _module2 = _interopRequireDefault(_module);
        var _align = __webpack_require__(36);
        var _background = __webpack_require__(37);
        var _code = __webpack_require__(13);
        var _code2 = _interopRequireDefault(_code);
        var _color = __webpack_require__(26);
        var _direction = __webpack_require__(38);
        var _font = __webpack_require__(39);
        var _size = __webpack_require__(40);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _defineProperty(obj, key, value2) {
          if (key in obj) {
            Object.defineProperty(obj, key, { value: value2, enumerable: true, configurable: true, writable: true });
          } else {
            obj[key] = value2;
          }
          return obj;
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self2, call) {
          if (!self2) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self2;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
          if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var debug = (0, _logger2.default)("quill:clipboard");
        var DOM_KEY = "__ql-matcher";
        var CLIPBOARD_CONFIG = [[Node.TEXT_NODE, matchText], [Node.TEXT_NODE, matchNewline], ["br", matchBreak], [Node.ELEMENT_NODE, matchNewline], [Node.ELEMENT_NODE, matchBlot], [Node.ELEMENT_NODE, matchSpacing], [Node.ELEMENT_NODE, matchAttributor], [Node.ELEMENT_NODE, matchStyles], ["li", matchIndent], ["b", matchAlias.bind(matchAlias, "bold")], ["i", matchAlias.bind(matchAlias, "italic")], ["style", matchIgnore]];
        var ATTRIBUTE_ATTRIBUTORS = [_align.AlignAttribute, _direction.DirectionAttribute].reduce(function(memo, attr) {
          memo[attr.keyName] = attr;
          return memo;
        }, {});
        var STYLE_ATTRIBUTORS = [_align.AlignStyle, _background.BackgroundStyle, _color.ColorStyle, _direction.DirectionStyle, _font.FontStyle, _size.SizeStyle].reduce(function(memo, attr) {
          memo[attr.keyName] = attr;
          return memo;
        }, {});
        var Clipboard = function(_Module) {
          _inherits(Clipboard2, _Module);
          function Clipboard2(quill2, options) {
            _classCallCheck(this, Clipboard2);
            var _this = _possibleConstructorReturn(this, (Clipboard2.__proto__ || Object.getPrototypeOf(Clipboard2)).call(this, quill2, options));
            _this.quill.root.addEventListener("paste", _this.onPaste.bind(_this));
            _this.container = _this.quill.addContainer("ql-clipboard");
            _this.container.setAttribute("contenteditable", true);
            _this.container.setAttribute("tabindex", -1);
            _this.matchers = [];
            CLIPBOARD_CONFIG.concat(_this.options.matchers).forEach(function(_ref) {
              var _ref2 = _slicedToArray(_ref, 2), selector = _ref2[0], matcher = _ref2[1];
              if (!options.matchVisual && matcher === matchSpacing)
                return;
              _this.addMatcher(selector, matcher);
            });
            return _this;
          }
          _createClass(Clipboard2, [{
            key: "addMatcher",
            value: function addMatcher(selector, matcher) {
              this.matchers.push([selector, matcher]);
            }
          }, {
            key: "convert",
            value: function convert(html) {
              if (typeof html === "string") {
                this.container.innerHTML = html.replace(/\>\r?\n +\</g, "><");
                return this.convert();
              }
              var formats = this.quill.getFormat(this.quill.selection.savedRange.index);
              if (formats[_code2.default.blotName]) {
                var text = this.container.innerText;
                this.container.innerHTML = "";
                return new _quillDelta2.default().insert(text, _defineProperty({}, _code2.default.blotName, formats[_code2.default.blotName]));
              }
              var _prepareMatching = this.prepareMatching(), _prepareMatching2 = _slicedToArray(_prepareMatching, 2), elementMatchers = _prepareMatching2[0], textMatchers = _prepareMatching2[1];
              var delta = traverse(this.container, elementMatchers, textMatchers);
              if (deltaEndsWith(delta, "\n") && delta.ops[delta.ops.length - 1].attributes == null) {
                delta = delta.compose(new _quillDelta2.default().retain(delta.length() - 1).delete(1));
              }
              debug.log("convert", this.container.innerHTML, delta);
              this.container.innerHTML = "";
              return delta;
            }
          }, {
            key: "dangerouslyPasteHTML",
            value: function dangerouslyPasteHTML(index, html) {
              var source2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _quill2.default.sources.API;
              if (typeof index === "string") {
                this.quill.setContents(this.convert(index), html);
                this.quill.setSelection(0, _quill2.default.sources.SILENT);
              } else {
                var paste = this.convert(html);
                this.quill.updateContents(new _quillDelta2.default().retain(index).concat(paste), source2);
                this.quill.setSelection(index + paste.length(), _quill2.default.sources.SILENT);
              }
            }
          }, {
            key: "onPaste",
            value: function onPaste(e) {
              var _this2 = this;
              if (e.defaultPrevented || !this.quill.isEnabled())
                return;
              var range = this.quill.getSelection();
              var delta = new _quillDelta2.default().retain(range.index);
              var scrollTop = this.quill.scrollingContainer.scrollTop;
              this.container.focus();
              this.quill.selection.update(_quill2.default.sources.SILENT);
              setTimeout(function() {
                delta = delta.concat(_this2.convert()).delete(range.length);
                _this2.quill.updateContents(delta, _quill2.default.sources.USER);
                _this2.quill.setSelection(delta.length() - range.length, _quill2.default.sources.SILENT);
                _this2.quill.scrollingContainer.scrollTop = scrollTop;
                _this2.quill.focus();
              }, 1);
            }
          }, {
            key: "prepareMatching",
            value: function prepareMatching() {
              var _this3 = this;
              var elementMatchers = [], textMatchers = [];
              this.matchers.forEach(function(pair) {
                var _pair = _slicedToArray(pair, 2), selector = _pair[0], matcher = _pair[1];
                switch (selector) {
                  case Node.TEXT_NODE:
                    textMatchers.push(matcher);
                    break;
                  case Node.ELEMENT_NODE:
                    elementMatchers.push(matcher);
                    break;
                  default:
                    [].forEach.call(_this3.container.querySelectorAll(selector), function(node) {
                      node[DOM_KEY] = node[DOM_KEY] || [];
                      node[DOM_KEY].push(matcher);
                    });
                    break;
                }
              });
              return [elementMatchers, textMatchers];
            }
          }]);
          return Clipboard2;
        }(_module2.default);
        Clipboard.DEFAULTS = {
          matchers: [],
          matchVisual: true
        };
        function applyFormat(delta, format, value2) {
          if ((typeof format === "undefined" ? "undefined" : _typeof(format)) === "object") {
            return Object.keys(format).reduce(function(delta2, key) {
              return applyFormat(delta2, key, format[key]);
            }, delta);
          } else {
            return delta.reduce(function(delta2, op) {
              if (op.attributes && op.attributes[format]) {
                return delta2.push(op);
              } else {
                return delta2.insert(op.insert, (0, _extend3.default)({}, _defineProperty({}, format, value2), op.attributes));
              }
            }, new _quillDelta2.default());
          }
        }
        function computeStyle(node) {
          if (node.nodeType !== Node.ELEMENT_NODE)
            return {};
          var DOM_KEY2 = "__ql-computed-style";
          return node[DOM_KEY2] || (node[DOM_KEY2] = window.getComputedStyle(node));
        }
        function deltaEndsWith(delta, text) {
          var endText = "";
          for (var i = delta.ops.length - 1; i >= 0 && endText.length < text.length; --i) {
            var op = delta.ops[i];
            if (typeof op.insert !== "string")
              break;
            endText = op.insert + endText;
          }
          return endText.slice(-1 * text.length) === text;
        }
        function isLine(node) {
          if (node.childNodes.length === 0)
            return false;
          var style = computeStyle(node);
          return ["block", "list-item"].indexOf(style.display) > -1;
        }
        function traverse(node, elementMatchers, textMatchers) {
          if (node.nodeType === node.TEXT_NODE) {
            return textMatchers.reduce(function(delta, matcher) {
              return matcher(node, delta);
            }, new _quillDelta2.default());
          } else if (node.nodeType === node.ELEMENT_NODE) {
            return [].reduce.call(node.childNodes || [], function(delta, childNode) {
              var childrenDelta = traverse(childNode, elementMatchers, textMatchers);
              if (childNode.nodeType === node.ELEMENT_NODE) {
                childrenDelta = elementMatchers.reduce(function(childrenDelta2, matcher) {
                  return matcher(childNode, childrenDelta2);
                }, childrenDelta);
                childrenDelta = (childNode[DOM_KEY] || []).reduce(function(childrenDelta2, matcher) {
                  return matcher(childNode, childrenDelta2);
                }, childrenDelta);
              }
              return delta.concat(childrenDelta);
            }, new _quillDelta2.default());
          } else {
            return new _quillDelta2.default();
          }
        }
        function matchAlias(format, node, delta) {
          return applyFormat(delta, format, true);
        }
        function matchAttributor(node, delta) {
          var attributes = _parchment2.default.Attributor.Attribute.keys(node);
          var classes = _parchment2.default.Attributor.Class.keys(node);
          var styles = _parchment2.default.Attributor.Style.keys(node);
          var formats = {};
          attributes.concat(classes).concat(styles).forEach(function(name) {
            var attr = _parchment2.default.query(name, _parchment2.default.Scope.ATTRIBUTE);
            if (attr != null) {
              formats[attr.attrName] = attr.value(node);
              if (formats[attr.attrName])
                return;
            }
            attr = ATTRIBUTE_ATTRIBUTORS[name];
            if (attr != null && (attr.attrName === name || attr.keyName === name)) {
              formats[attr.attrName] = attr.value(node) || void 0;
            }
            attr = STYLE_ATTRIBUTORS[name];
            if (attr != null && (attr.attrName === name || attr.keyName === name)) {
              attr = STYLE_ATTRIBUTORS[name];
              formats[attr.attrName] = attr.value(node) || void 0;
            }
          });
          if (Object.keys(formats).length > 0) {
            delta = applyFormat(delta, formats);
          }
          return delta;
        }
        function matchBlot(node, delta) {
          var match = _parchment2.default.query(node);
          if (match == null)
            return delta;
          if (match.prototype instanceof _parchment2.default.Embed) {
            var embed = {};
            var value2 = match.value(node);
            if (value2 != null) {
              embed[match.blotName] = value2;
              delta = new _quillDelta2.default().insert(embed, match.formats(node));
            }
          } else if (typeof match.formats === "function") {
            delta = applyFormat(delta, match.blotName, match.formats(node));
          }
          return delta;
        }
        function matchBreak(node, delta) {
          if (!deltaEndsWith(delta, "\n")) {
            delta.insert("\n");
          }
          return delta;
        }
        function matchIgnore() {
          return new _quillDelta2.default();
        }
        function matchIndent(node, delta) {
          var match = _parchment2.default.query(node);
          if (match == null || match.blotName !== "list-item" || !deltaEndsWith(delta, "\n")) {
            return delta;
          }
          var indent = -1, parent = node.parentNode;
          while (!parent.classList.contains("ql-clipboard")) {
            if ((_parchment2.default.query(parent) || {}).blotName === "list") {
              indent += 1;
            }
            parent = parent.parentNode;
          }
          if (indent <= 0)
            return delta;
          return delta.compose(new _quillDelta2.default().retain(delta.length() - 1).retain(1, { indent }));
        }
        function matchNewline(node, delta) {
          if (!deltaEndsWith(delta, "\n")) {
            if (isLine(node) || delta.length() > 0 && node.nextSibling && isLine(node.nextSibling)) {
              delta.insert("\n");
            }
          }
          return delta;
        }
        function matchSpacing(node, delta) {
          if (isLine(node) && node.nextElementSibling != null && !deltaEndsWith(delta, "\n\n")) {
            var nodeHeight = node.offsetHeight + parseFloat(computeStyle(node).marginTop) + parseFloat(computeStyle(node).marginBottom);
            if (node.nextElementSibling.offsetTop > node.offsetTop + nodeHeight * 1.5) {
              delta.insert("\n");
            }
          }
          return delta;
        }
        function matchStyles(node, delta) {
          var formats = {};
          var style = node.style || {};
          if (style.fontStyle && computeStyle(node).fontStyle === "italic") {
            formats.italic = true;
          }
          if (style.fontWeight && (computeStyle(node).fontWeight.startsWith("bold") || parseInt(computeStyle(node).fontWeight) >= 700)) {
            formats.bold = true;
          }
          if (Object.keys(formats).length > 0) {
            delta = applyFormat(delta, formats);
          }
          if (parseFloat(style.textIndent || 0) > 0) {
            delta = new _quillDelta2.default().insert("	").concat(delta);
          }
          return delta;
        }
        function matchText(node, delta) {
          var text = node.data;
          if (node.parentNode.tagName === "O:P") {
            return delta.insert(text.trim());
          }
          if (text.trim().length === 0 && node.parentNode.classList.contains("ql-clipboard")) {
            return delta;
          }
          if (!computeStyle(node.parentNode).whiteSpace.startsWith("pre")) {
            var replacer = function replacer2(collapse, match) {
              match = match.replace(/[^\u00a0]/g, "");
              return match.length < 1 && collapse ? " " : match;
            };
            text = text.replace(/\r\n/g, " ").replace(/\n/g, " ");
            text = text.replace(/\s\s+/g, replacer.bind(replacer, true));
            if (node.previousSibling == null && isLine(node.parentNode) || node.previousSibling != null && isLine(node.previousSibling)) {
              text = text.replace(/^\s+/, replacer.bind(replacer, false));
            }
            if (node.nextSibling == null && isLine(node.parentNode) || node.nextSibling != null && isLine(node.nextSibling)) {
              text = text.replace(/\s+$/, replacer.bind(replacer, false));
            }
          }
          return delta.insert(text);
        }
        exports2.default = Clipboard;
        exports2.matchAttributor = matchAttributor;
        exports2.matchBlot = matchBlot;
        exports2.matchNewline = matchNewline;
        exports2.matchSpacing = matchSpacing;
        exports2.matchText = matchText;
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var _get = function get2(object, property, receiver) {
          if (object === null)
            object = Function.prototype;
          var desc = Object.getOwnPropertyDescriptor(object, property);
          if (desc === void 0) {
            var parent = Object.getPrototypeOf(object);
            if (parent === null) {
              return void 0;
            } else {
              return get2(parent, property, receiver);
            }
          } else if ("value" in desc) {
            return desc.value;
          } else {
            var getter = desc.get;
            if (getter === void 0) {
              return void 0;
            }
            return getter.call(receiver);
          }
        };
        var _inline = __webpack_require__(6);
        var _inline2 = _interopRequireDefault(_inline);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self2, call) {
          if (!self2) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self2;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
          if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var Bold = function(_Inline) {
          _inherits(Bold2, _Inline);
          function Bold2() {
            _classCallCheck(this, Bold2);
            return _possibleConstructorReturn(this, (Bold2.__proto__ || Object.getPrototypeOf(Bold2)).apply(this, arguments));
          }
          _createClass(Bold2, [{
            key: "optimize",
            value: function optimize(context) {
              _get(Bold2.prototype.__proto__ || Object.getPrototypeOf(Bold2.prototype), "optimize", this).call(this, context);
              if (this.domNode.tagName !== this.statics.tagName[0]) {
                this.replaceWith(this.statics.blotName);
              }
            }
          }], [{
            key: "create",
            value: function create() {
              return _get(Bold2.__proto__ || Object.getPrototypeOf(Bold2), "create", this).call(this);
            }
          }, {
            key: "formats",
            value: function formats() {
              return true;
            }
          }]);
          return Bold2;
        }(_inline2.default);
        Bold.blotName = "bold";
        Bold.tagName = ["STRONG", "B"];
        exports2.default = Bold;
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        exports2.addControls = exports2.default = void 0;
        var _slicedToArray = function() {
          function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = void 0;
            try {
              for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);
                if (i && _arr.length === i)
                  break;
              }
            } catch (err) {
              _d = true;
              _e = err;
            } finally {
              try {
                if (!_n && _i["return"])
                  _i["return"]();
              } finally {
                if (_d)
                  throw _e;
              }
            }
            return _arr;
          }
          return function(arr, i) {
            if (Array.isArray(arr)) {
              return arr;
            } else if (Symbol.iterator in Object(arr)) {
              return sliceIterator(arr, i);
            } else {
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
          };
        }();
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var _quillDelta = __webpack_require__(2);
        var _quillDelta2 = _interopRequireDefault(_quillDelta);
        var _parchment = __webpack_require__(0);
        var _parchment2 = _interopRequireDefault(_parchment);
        var _quill = __webpack_require__(5);
        var _quill2 = _interopRequireDefault(_quill);
        var _logger = __webpack_require__(10);
        var _logger2 = _interopRequireDefault(_logger);
        var _module = __webpack_require__(9);
        var _module2 = _interopRequireDefault(_module);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _defineProperty(obj, key, value2) {
          if (key in obj) {
            Object.defineProperty(obj, key, { value: value2, enumerable: true, configurable: true, writable: true });
          } else {
            obj[key] = value2;
          }
          return obj;
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self2, call) {
          if (!self2) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self2;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
          if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var debug = (0, _logger2.default)("quill:toolbar");
        var Toolbar = function(_Module) {
          _inherits(Toolbar2, _Module);
          function Toolbar2(quill2, options) {
            _classCallCheck(this, Toolbar2);
            var _this = _possibleConstructorReturn(this, (Toolbar2.__proto__ || Object.getPrototypeOf(Toolbar2)).call(this, quill2, options));
            if (Array.isArray(_this.options.container)) {
              var container = document.createElement("div");
              addControls(container, _this.options.container);
              quill2.container.parentNode.insertBefore(container, quill2.container);
              _this.container = container;
            } else if (typeof _this.options.container === "string") {
              _this.container = document.querySelector(_this.options.container);
            } else {
              _this.container = _this.options.container;
            }
            if (!(_this.container instanceof HTMLElement)) {
              var _ret;
              return _ret = debug.error("Container required for toolbar", _this.options), _possibleConstructorReturn(_this, _ret);
            }
            _this.container.classList.add("ql-toolbar");
            _this.controls = [];
            _this.handlers = {};
            Object.keys(_this.options.handlers).forEach(function(format) {
              _this.addHandler(format, _this.options.handlers[format]);
            });
            [].forEach.call(_this.container.querySelectorAll("button, select"), function(input) {
              _this.attach(input);
            });
            _this.quill.on(_quill2.default.events.EDITOR_CHANGE, function(type, range) {
              if (type === _quill2.default.events.SELECTION_CHANGE) {
                _this.update(range);
              }
            });
            _this.quill.on(_quill2.default.events.SCROLL_OPTIMIZE, function() {
              var _this$quill$selection = _this.quill.selection.getRange(), _this$quill$selection2 = _slicedToArray(_this$quill$selection, 1), range = _this$quill$selection2[0];
              _this.update(range);
            });
            return _this;
          }
          _createClass(Toolbar2, [{
            key: "addHandler",
            value: function addHandler(format, handler) {
              this.handlers[format] = handler;
            }
          }, {
            key: "attach",
            value: function attach(input) {
              var _this2 = this;
              var format = [].find.call(input.classList, function(className) {
                return className.indexOf("ql-") === 0;
              });
              if (!format)
                return;
              format = format.slice("ql-".length);
              if (input.tagName === "BUTTON") {
                input.setAttribute("type", "button");
              }
              if (this.handlers[format] == null) {
                if (this.quill.scroll.whitelist != null && this.quill.scroll.whitelist[format] == null) {
                  debug.warn("ignoring attaching to disabled format", format, input);
                  return;
                }
                if (_parchment2.default.query(format) == null) {
                  debug.warn("ignoring attaching to nonexistent format", format, input);
                  return;
                }
              }
              var eventName = input.tagName === "SELECT" ? "change" : "click";
              input.addEventListener(eventName, function(e) {
                var value2 = void 0;
                if (input.tagName === "SELECT") {
                  if (input.selectedIndex < 0)
                    return;
                  var selected = input.options[input.selectedIndex];
                  if (selected.hasAttribute("selected")) {
                    value2 = false;
                  } else {
                    value2 = selected.value || false;
                  }
                } else {
                  if (input.classList.contains("ql-active")) {
                    value2 = false;
                  } else {
                    value2 = input.value || !input.hasAttribute("value");
                  }
                  e.preventDefault();
                }
                _this2.quill.focus();
                var _quill$selection$getR = _this2.quill.selection.getRange(), _quill$selection$getR2 = _slicedToArray(_quill$selection$getR, 1), range = _quill$selection$getR2[0];
                if (_this2.handlers[format] != null) {
                  _this2.handlers[format].call(_this2, value2);
                } else if (_parchment2.default.query(format).prototype instanceof _parchment2.default.Embed) {
                  value2 = prompt("Enter " + format);
                  if (!value2)
                    return;
                  _this2.quill.updateContents(new _quillDelta2.default().retain(range.index).delete(range.length).insert(_defineProperty({}, format, value2)), _quill2.default.sources.USER);
                } else {
                  _this2.quill.format(format, value2, _quill2.default.sources.USER);
                }
                _this2.update(range);
              });
              this.controls.push([format, input]);
            }
          }, {
            key: "update",
            value: function update(range) {
              var formats = range == null ? {} : this.quill.getFormat(range);
              this.controls.forEach(function(pair) {
                var _pair = _slicedToArray(pair, 2), format = _pair[0], input = _pair[1];
                if (input.tagName === "SELECT") {
                  var option = void 0;
                  if (range == null) {
                    option = null;
                  } else if (formats[format] == null) {
                    option = input.querySelector("option[selected]");
                  } else if (!Array.isArray(formats[format])) {
                    var value2 = formats[format];
                    if (typeof value2 === "string") {
                      value2 = value2.replace(/\"/g, '\\"');
                    }
                    option = input.querySelector('option[value="' + value2 + '"]');
                  }
                  if (option == null) {
                    input.value = "";
                    input.selectedIndex = -1;
                  } else {
                    option.selected = true;
                  }
                } else {
                  if (range == null) {
                    input.classList.remove("ql-active");
                  } else if (input.hasAttribute("value")) {
                    var isActive = formats[format] === input.getAttribute("value") || formats[format] != null && formats[format].toString() === input.getAttribute("value") || formats[format] == null && !input.getAttribute("value");
                    input.classList.toggle("ql-active", isActive);
                  } else {
                    input.classList.toggle("ql-active", formats[format] != null);
                  }
                }
              });
            }
          }]);
          return Toolbar2;
        }(_module2.default);
        Toolbar.DEFAULTS = {};
        function addButton(container, format, value2) {
          var input = document.createElement("button");
          input.setAttribute("type", "button");
          input.classList.add("ql-" + format);
          if (value2 != null) {
            input.value = value2;
          }
          container.appendChild(input);
        }
        function addControls(container, groups) {
          if (!Array.isArray(groups[0])) {
            groups = [groups];
          }
          groups.forEach(function(controls) {
            var group = document.createElement("span");
            group.classList.add("ql-formats");
            controls.forEach(function(control) {
              if (typeof control === "string") {
                addButton(group, control);
              } else {
                var format = Object.keys(control)[0];
                var value2 = control[format];
                if (Array.isArray(value2)) {
                  addSelect(group, format, value2);
                } else {
                  addButton(group, format, value2);
                }
              }
            });
            container.appendChild(group);
          });
        }
        function addSelect(container, format, values) {
          var input = document.createElement("select");
          input.classList.add("ql-" + format);
          values.forEach(function(value2) {
            var option = document.createElement("option");
            if (value2 !== false) {
              option.setAttribute("value", value2);
            } else {
              option.setAttribute("selected", "selected");
            }
            input.appendChild(option);
          });
          container.appendChild(input);
        }
        Toolbar.DEFAULTS = {
          container: null,
          handlers: {
            clean: function clean() {
              var _this3 = this;
              var range = this.quill.getSelection();
              if (range == null)
                return;
              if (range.length == 0) {
                var formats = this.quill.getFormat();
                Object.keys(formats).forEach(function(name) {
                  if (_parchment2.default.query(name, _parchment2.default.Scope.INLINE) != null) {
                    _this3.quill.format(name, false);
                  }
                });
              } else {
                this.quill.removeFormat(range, _quill2.default.sources.USER);
              }
            },
            direction: function direction(value2) {
              var align = this.quill.getFormat()["align"];
              if (value2 === "rtl" && align == null) {
                this.quill.format("align", "right", _quill2.default.sources.USER);
              } else if (!value2 && align === "right") {
                this.quill.format("align", false, _quill2.default.sources.USER);
              }
              this.quill.format("direction", value2, _quill2.default.sources.USER);
            },
            indent: function indent(value2) {
              var range = this.quill.getSelection();
              var formats = this.quill.getFormat(range);
              var indent2 = parseInt(formats.indent || 0);
              if (value2 === "+1" || value2 === "-1") {
                var modifier = value2 === "+1" ? 1 : -1;
                if (formats.direction === "rtl")
                  modifier *= -1;
                this.quill.format("indent", indent2 + modifier, _quill2.default.sources.USER);
              }
            },
            link: function link(value2) {
              if (value2 === true) {
                value2 = prompt("Enter link URL:");
              }
              this.quill.format("link", value2, _quill2.default.sources.USER);
            },
            list: function list(value2) {
              var range = this.quill.getSelection();
              var formats = this.quill.getFormat(range);
              if (value2 === "check") {
                if (formats["list"] === "checked" || formats["list"] === "unchecked") {
                  this.quill.format("list", false, _quill2.default.sources.USER);
                } else {
                  this.quill.format("list", "unchecked", _quill2.default.sources.USER);
                }
              } else {
                this.quill.format("list", value2, _quill2.default.sources.USER);
              }
            }
          }
        };
        exports2.default = Toolbar;
        exports2.addControls = addControls;
      },
      function(module2, exports2) {
        module2.exports = '<svg viewbox="0 0 18 18"> <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"></polyline> <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>';
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var _get = function get2(object, property, receiver) {
          if (object === null)
            object = Function.prototype;
          var desc = Object.getOwnPropertyDescriptor(object, property);
          if (desc === void 0) {
            var parent = Object.getPrototypeOf(object);
            if (parent === null) {
              return void 0;
            } else {
              return get2(parent, property, receiver);
            }
          } else if ("value" in desc) {
            return desc.value;
          } else {
            var getter = desc.get;
            if (getter === void 0) {
              return void 0;
            }
            return getter.call(receiver);
          }
        };
        var _picker = __webpack_require__(28);
        var _picker2 = _interopRequireDefault(_picker);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self2, call) {
          if (!self2) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self2;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
          if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var ColorPicker = function(_Picker) {
          _inherits(ColorPicker2, _Picker);
          function ColorPicker2(select, label) {
            _classCallCheck(this, ColorPicker2);
            var _this = _possibleConstructorReturn(this, (ColorPicker2.__proto__ || Object.getPrototypeOf(ColorPicker2)).call(this, select));
            _this.label.innerHTML = label;
            _this.container.classList.add("ql-color-picker");
            [].slice.call(_this.container.querySelectorAll(".ql-picker-item"), 0, 7).forEach(function(item) {
              item.classList.add("ql-primary");
            });
            return _this;
          }
          _createClass(ColorPicker2, [{
            key: "buildItem",
            value: function buildItem(option) {
              var item = _get(ColorPicker2.prototype.__proto__ || Object.getPrototypeOf(ColorPicker2.prototype), "buildItem", this).call(this, option);
              item.style.backgroundColor = option.getAttribute("value") || "";
              return item;
            }
          }, {
            key: "selectItem",
            value: function selectItem(item, trigger) {
              _get(ColorPicker2.prototype.__proto__ || Object.getPrototypeOf(ColorPicker2.prototype), "selectItem", this).call(this, item, trigger);
              var colorLabel = this.label.querySelector(".ql-color-label");
              var value2 = item ? item.getAttribute("data-value") || "" : "";
              if (colorLabel) {
                if (colorLabel.tagName === "line") {
                  colorLabel.style.stroke = value2;
                } else {
                  colorLabel.style.fill = value2;
                }
              }
            }
          }]);
          return ColorPicker2;
        }(_picker2.default);
        exports2.default = ColorPicker;
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var _get = function get2(object, property, receiver) {
          if (object === null)
            object = Function.prototype;
          var desc = Object.getOwnPropertyDescriptor(object, property);
          if (desc === void 0) {
            var parent = Object.getPrototypeOf(object);
            if (parent === null) {
              return void 0;
            } else {
              return get2(parent, property, receiver);
            }
          } else if ("value" in desc) {
            return desc.value;
          } else {
            var getter = desc.get;
            if (getter === void 0) {
              return void 0;
            }
            return getter.call(receiver);
          }
        };
        var _picker = __webpack_require__(28);
        var _picker2 = _interopRequireDefault(_picker);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self2, call) {
          if (!self2) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self2;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
          if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var IconPicker = function(_Picker) {
          _inherits(IconPicker2, _Picker);
          function IconPicker2(select, icons) {
            _classCallCheck(this, IconPicker2);
            var _this = _possibleConstructorReturn(this, (IconPicker2.__proto__ || Object.getPrototypeOf(IconPicker2)).call(this, select));
            _this.container.classList.add("ql-icon-picker");
            [].forEach.call(_this.container.querySelectorAll(".ql-picker-item"), function(item) {
              item.innerHTML = icons[item.getAttribute("data-value") || ""];
            });
            _this.defaultItem = _this.container.querySelector(".ql-selected");
            _this.selectItem(_this.defaultItem);
            return _this;
          }
          _createClass(IconPicker2, [{
            key: "selectItem",
            value: function selectItem(item, trigger) {
              _get(IconPicker2.prototype.__proto__ || Object.getPrototypeOf(IconPicker2.prototype), "selectItem", this).call(this, item, trigger);
              item = item || this.defaultItem;
              this.label.innerHTML = item.innerHTML;
            }
          }]);
          return IconPicker2;
        }(_picker2.default);
        exports2.default = IconPicker;
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        var Tooltip = function() {
          function Tooltip2(quill2, boundsContainer) {
            var _this = this;
            _classCallCheck(this, Tooltip2);
            this.quill = quill2;
            this.boundsContainer = boundsContainer || document.body;
            this.root = quill2.addContainer("ql-tooltip");
            this.root.innerHTML = this.constructor.TEMPLATE;
            if (this.quill.root === this.quill.scrollingContainer) {
              this.quill.root.addEventListener("scroll", function() {
                _this.root.style.marginTop = -1 * _this.quill.root.scrollTop + "px";
              });
            }
            this.hide();
          }
          _createClass(Tooltip2, [{
            key: "hide",
            value: function hide() {
              this.root.classList.add("ql-hidden");
            }
          }, {
            key: "position",
            value: function position(reference) {
              var left = reference.left + reference.width / 2 - this.root.offsetWidth / 2;
              var top = reference.bottom + this.quill.root.scrollTop;
              this.root.style.left = left + "px";
              this.root.style.top = top + "px";
              this.root.classList.remove("ql-flip");
              var containerBounds = this.boundsContainer.getBoundingClientRect();
              var rootBounds = this.root.getBoundingClientRect();
              var shift = 0;
              if (rootBounds.right > containerBounds.right) {
                shift = containerBounds.right - rootBounds.right;
                this.root.style.left = left + shift + "px";
              }
              if (rootBounds.left < containerBounds.left) {
                shift = containerBounds.left - rootBounds.left;
                this.root.style.left = left + shift + "px";
              }
              if (rootBounds.bottom > containerBounds.bottom) {
                var height = rootBounds.bottom - rootBounds.top;
                var verticalShift = reference.bottom - reference.top + height;
                this.root.style.top = top - verticalShift + "px";
                this.root.classList.add("ql-flip");
              }
              return shift;
            }
          }, {
            key: "show",
            value: function show() {
              this.root.classList.remove("ql-editing");
              this.root.classList.remove("ql-hidden");
            }
          }]);
          return Tooltip2;
        }();
        exports2.default = Tooltip;
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _slicedToArray = function() {
          function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = void 0;
            try {
              for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);
                if (i && _arr.length === i)
                  break;
              }
            } catch (err) {
              _d = true;
              _e = err;
            } finally {
              try {
                if (!_n && _i["return"])
                  _i["return"]();
              } finally {
                if (_d)
                  throw _e;
              }
            }
            return _arr;
          }
          return function(arr, i) {
            if (Array.isArray(arr)) {
              return arr;
            } else if (Symbol.iterator in Object(arr)) {
              return sliceIterator(arr, i);
            } else {
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
          };
        }();
        var _get = function get2(object, property, receiver) {
          if (object === null)
            object = Function.prototype;
          var desc = Object.getOwnPropertyDescriptor(object, property);
          if (desc === void 0) {
            var parent = Object.getPrototypeOf(object);
            if (parent === null) {
              return void 0;
            } else {
              return get2(parent, property, receiver);
            }
          } else if ("value" in desc) {
            return desc.value;
          } else {
            var getter = desc.get;
            if (getter === void 0) {
              return void 0;
            }
            return getter.call(receiver);
          }
        };
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var _extend = __webpack_require__(3);
        var _extend2 = _interopRequireDefault(_extend);
        var _emitter = __webpack_require__(8);
        var _emitter2 = _interopRequireDefault(_emitter);
        var _base = __webpack_require__(43);
        var _base2 = _interopRequireDefault(_base);
        var _link = __webpack_require__(27);
        var _link2 = _interopRequireDefault(_link);
        var _selection = __webpack_require__(15);
        var _icons = __webpack_require__(41);
        var _icons2 = _interopRequireDefault(_icons);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self2, call) {
          if (!self2) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self2;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
          if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var TOOLBAR_CONFIG = [[{ header: ["1", "2", "3", false] }], ["bold", "italic", "underline", "link"], [{ list: "ordered" }, { list: "bullet" }], ["clean"]];
        var SnowTheme = function(_BaseTheme) {
          _inherits(SnowTheme2, _BaseTheme);
          function SnowTheme2(quill2, options) {
            _classCallCheck(this, SnowTheme2);
            if (options.modules.toolbar != null && options.modules.toolbar.container == null) {
              options.modules.toolbar.container = TOOLBAR_CONFIG;
            }
            var _this = _possibleConstructorReturn(this, (SnowTheme2.__proto__ || Object.getPrototypeOf(SnowTheme2)).call(this, quill2, options));
            _this.quill.container.classList.add("ql-snow");
            return _this;
          }
          _createClass(SnowTheme2, [{
            key: "extendToolbar",
            value: function extendToolbar(toolbar) {
              toolbar.container.classList.add("ql-snow");
              this.buildButtons([].slice.call(toolbar.container.querySelectorAll("button")), _icons2.default);
              this.buildPickers([].slice.call(toolbar.container.querySelectorAll("select")), _icons2.default);
              this.tooltip = new SnowTooltip(this.quill, this.options.bounds);
              if (toolbar.container.querySelector(".ql-link")) {
                this.quill.keyboard.addBinding({ key: "K", shortKey: true }, function(range, context) {
                  toolbar.handlers["link"].call(toolbar, !context.format.link);
                });
              }
            }
          }]);
          return SnowTheme2;
        }(_base2.default);
        SnowTheme.DEFAULTS = (0, _extend2.default)(true, {}, _base2.default.DEFAULTS, {
          modules: {
            toolbar: {
              handlers: {
                link: function link(value2) {
                  if (value2) {
                    var range = this.quill.getSelection();
                    if (range == null || range.length == 0)
                      return;
                    var preview = this.quill.getText(range);
                    if (/^\S+@\S+\.\S+$/.test(preview) && preview.indexOf("mailto:") !== 0) {
                      preview = "mailto:" + preview;
                    }
                    var tooltip = this.quill.theme.tooltip;
                    tooltip.edit("link", preview);
                  } else {
                    this.quill.format("link", false);
                  }
                }
              }
            }
          }
        });
        var SnowTooltip = function(_BaseTooltip) {
          _inherits(SnowTooltip2, _BaseTooltip);
          function SnowTooltip2(quill2, bounds) {
            _classCallCheck(this, SnowTooltip2);
            var _this2 = _possibleConstructorReturn(this, (SnowTooltip2.__proto__ || Object.getPrototypeOf(SnowTooltip2)).call(this, quill2, bounds));
            _this2.preview = _this2.root.querySelector("a.ql-preview");
            return _this2;
          }
          _createClass(SnowTooltip2, [{
            key: "listen",
            value: function listen() {
              var _this3 = this;
              _get(SnowTooltip2.prototype.__proto__ || Object.getPrototypeOf(SnowTooltip2.prototype), "listen", this).call(this);
              this.root.querySelector("a.ql-action").addEventListener("click", function(event) {
                if (_this3.root.classList.contains("ql-editing")) {
                  _this3.save();
                } else {
                  _this3.edit("link", _this3.preview.textContent);
                }
                event.preventDefault();
              });
              this.root.querySelector("a.ql-remove").addEventListener("click", function(event) {
                if (_this3.linkRange != null) {
                  var range = _this3.linkRange;
                  _this3.restoreFocus();
                  _this3.quill.formatText(range, "link", false, _emitter2.default.sources.USER);
                  delete _this3.linkRange;
                }
                event.preventDefault();
                _this3.hide();
              });
              this.quill.on(_emitter2.default.events.SELECTION_CHANGE, function(range, oldRange, source2) {
                if (range == null)
                  return;
                if (range.length === 0 && source2 === _emitter2.default.sources.USER) {
                  var _quill$scroll$descend = _this3.quill.scroll.descendant(_link2.default, range.index), _quill$scroll$descend2 = _slicedToArray(_quill$scroll$descend, 2), link = _quill$scroll$descend2[0], offset = _quill$scroll$descend2[1];
                  if (link != null) {
                    _this3.linkRange = new _selection.Range(range.index - offset, link.length());
                    var preview = _link2.default.formats(link.domNode);
                    _this3.preview.textContent = preview;
                    _this3.preview.setAttribute("href", preview);
                    _this3.show();
                    _this3.position(_this3.quill.getBounds(_this3.linkRange));
                    return;
                  }
                } else {
                  delete _this3.linkRange;
                }
                _this3.hide();
              });
            }
          }, {
            key: "show",
            value: function show() {
              _get(SnowTooltip2.prototype.__proto__ || Object.getPrototypeOf(SnowTooltip2.prototype), "show", this).call(this);
              this.root.removeAttribute("data-mode");
            }
          }]);
          return SnowTooltip2;
        }(_base.BaseTooltip);
        SnowTooltip.TEMPLATE = ['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join("");
        exports2.default = SnowTheme;
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _core = __webpack_require__(29);
        var _core2 = _interopRequireDefault(_core);
        var _align = __webpack_require__(36);
        var _direction = __webpack_require__(38);
        var _indent = __webpack_require__(64);
        var _blockquote = __webpack_require__(65);
        var _blockquote2 = _interopRequireDefault(_blockquote);
        var _header = __webpack_require__(66);
        var _header2 = _interopRequireDefault(_header);
        var _list = __webpack_require__(67);
        var _list2 = _interopRequireDefault(_list);
        var _background = __webpack_require__(37);
        var _color = __webpack_require__(26);
        var _font = __webpack_require__(39);
        var _size = __webpack_require__(40);
        var _bold = __webpack_require__(56);
        var _bold2 = _interopRequireDefault(_bold);
        var _italic = __webpack_require__(68);
        var _italic2 = _interopRequireDefault(_italic);
        var _link = __webpack_require__(27);
        var _link2 = _interopRequireDefault(_link);
        var _script = __webpack_require__(69);
        var _script2 = _interopRequireDefault(_script);
        var _strike = __webpack_require__(70);
        var _strike2 = _interopRequireDefault(_strike);
        var _underline = __webpack_require__(71);
        var _underline2 = _interopRequireDefault(_underline);
        var _image = __webpack_require__(72);
        var _image2 = _interopRequireDefault(_image);
        var _video = __webpack_require__(73);
        var _video2 = _interopRequireDefault(_video);
        var _code = __webpack_require__(13);
        var _code2 = _interopRequireDefault(_code);
        var _formula = __webpack_require__(74);
        var _formula2 = _interopRequireDefault(_formula);
        var _syntax = __webpack_require__(75);
        var _syntax2 = _interopRequireDefault(_syntax);
        var _toolbar = __webpack_require__(57);
        var _toolbar2 = _interopRequireDefault(_toolbar);
        var _icons = __webpack_require__(41);
        var _icons2 = _interopRequireDefault(_icons);
        var _picker = __webpack_require__(28);
        var _picker2 = _interopRequireDefault(_picker);
        var _colorPicker = __webpack_require__(59);
        var _colorPicker2 = _interopRequireDefault(_colorPicker);
        var _iconPicker = __webpack_require__(60);
        var _iconPicker2 = _interopRequireDefault(_iconPicker);
        var _tooltip = __webpack_require__(61);
        var _tooltip2 = _interopRequireDefault(_tooltip);
        var _bubble = __webpack_require__(108);
        var _bubble2 = _interopRequireDefault(_bubble);
        var _snow = __webpack_require__(62);
        var _snow2 = _interopRequireDefault(_snow);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        _core2.default.register({
          "attributors/attribute/direction": _direction.DirectionAttribute,
          "attributors/class/align": _align.AlignClass,
          "attributors/class/background": _background.BackgroundClass,
          "attributors/class/color": _color.ColorClass,
          "attributors/class/direction": _direction.DirectionClass,
          "attributors/class/font": _font.FontClass,
          "attributors/class/size": _size.SizeClass,
          "attributors/style/align": _align.AlignStyle,
          "attributors/style/background": _background.BackgroundStyle,
          "attributors/style/color": _color.ColorStyle,
          "attributors/style/direction": _direction.DirectionStyle,
          "attributors/style/font": _font.FontStyle,
          "attributors/style/size": _size.SizeStyle
        }, true);
        _core2.default.register({
          "formats/align": _align.AlignClass,
          "formats/direction": _direction.DirectionClass,
          "formats/indent": _indent.IndentClass,
          "formats/background": _background.BackgroundStyle,
          "formats/color": _color.ColorStyle,
          "formats/font": _font.FontClass,
          "formats/size": _size.SizeClass,
          "formats/blockquote": _blockquote2.default,
          "formats/code-block": _code2.default,
          "formats/header": _header2.default,
          "formats/list": _list2.default,
          "formats/bold": _bold2.default,
          "formats/code": _code.Code,
          "formats/italic": _italic2.default,
          "formats/link": _link2.default,
          "formats/script": _script2.default,
          "formats/strike": _strike2.default,
          "formats/underline": _underline2.default,
          "formats/image": _image2.default,
          "formats/video": _video2.default,
          "formats/list/item": _list.ListItem,
          "modules/formula": _formula2.default,
          "modules/syntax": _syntax2.default,
          "modules/toolbar": _toolbar2.default,
          "themes/bubble": _bubble2.default,
          "themes/snow": _snow2.default,
          "ui/icons": _icons2.default,
          "ui/picker": _picker2.default,
          "ui/icon-picker": _iconPicker2.default,
          "ui/color-picker": _colorPicker2.default,
          "ui/tooltip": _tooltip2.default
        }, true);
        exports2.default = _core2.default;
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        exports2.IndentClass = void 0;
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var _get = function get2(object, property, receiver) {
          if (object === null)
            object = Function.prototype;
          var desc = Object.getOwnPropertyDescriptor(object, property);
          if (desc === void 0) {
            var parent = Object.getPrototypeOf(object);
            if (parent === null) {
              return void 0;
            } else {
              return get2(parent, property, receiver);
            }
          } else if ("value" in desc) {
            return desc.value;
          } else {
            var getter = desc.get;
            if (getter === void 0) {
              return void 0;
            }
            return getter.call(receiver);
          }
        };
        var _parchment = __webpack_require__(0);
        var _parchment2 = _interopRequireDefault(_parchment);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self2, call) {
          if (!self2) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self2;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
          if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var IdentAttributor = function(_Parchment$Attributor) {
          _inherits(IdentAttributor2, _Parchment$Attributor);
          function IdentAttributor2() {
            _classCallCheck(this, IdentAttributor2);
            return _possibleConstructorReturn(this, (IdentAttributor2.__proto__ || Object.getPrototypeOf(IdentAttributor2)).apply(this, arguments));
          }
          _createClass(IdentAttributor2, [{
            key: "add",
            value: function add(node, value2) {
              if (value2 === "+1" || value2 === "-1") {
                var indent = this.value(node) || 0;
                value2 = value2 === "+1" ? indent + 1 : indent - 1;
              }
              if (value2 === 0) {
                this.remove(node);
                return true;
              } else {
                return _get(IdentAttributor2.prototype.__proto__ || Object.getPrototypeOf(IdentAttributor2.prototype), "add", this).call(this, node, value2);
              }
            }
          }, {
            key: "canAdd",
            value: function canAdd(node, value2) {
              return _get(IdentAttributor2.prototype.__proto__ || Object.getPrototypeOf(IdentAttributor2.prototype), "canAdd", this).call(this, node, value2) || _get(IdentAttributor2.prototype.__proto__ || Object.getPrototypeOf(IdentAttributor2.prototype), "canAdd", this).call(this, node, parseInt(value2));
            }
          }, {
            key: "value",
            value: function value2(node) {
              return parseInt(_get(IdentAttributor2.prototype.__proto__ || Object.getPrototypeOf(IdentAttributor2.prototype), "value", this).call(this, node)) || void 0;
            }
          }]);
          return IdentAttributor2;
        }(_parchment2.default.Attributor.Class);
        var IndentClass = new IdentAttributor("indent", "ql-indent", {
          scope: _parchment2.default.Scope.BLOCK,
          whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
        });
        exports2.IndentClass = IndentClass;
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _block = __webpack_require__(4);
        var _block2 = _interopRequireDefault(_block);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self2, call) {
          if (!self2) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self2;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
          if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var Blockquote = function(_Block) {
          _inherits(Blockquote2, _Block);
          function Blockquote2() {
            _classCallCheck(this, Blockquote2);
            return _possibleConstructorReturn(this, (Blockquote2.__proto__ || Object.getPrototypeOf(Blockquote2)).apply(this, arguments));
          }
          return Blockquote2;
        }(_block2.default);
        Blockquote.blotName = "blockquote";
        Blockquote.tagName = "blockquote";
        exports2.default = Blockquote;
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var _block = __webpack_require__(4);
        var _block2 = _interopRequireDefault(_block);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self2, call) {
          if (!self2) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self2;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
          if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var Header = function(_Block) {
          _inherits(Header2, _Block);
          function Header2() {
            _classCallCheck(this, Header2);
            return _possibleConstructorReturn(this, (Header2.__proto__ || Object.getPrototypeOf(Header2)).apply(this, arguments));
          }
          _createClass(Header2, null, [{
            key: "formats",
            value: function formats(domNode) {
              return this.tagName.indexOf(domNode.tagName) + 1;
            }
          }]);
          return Header2;
        }(_block2.default);
        Header.blotName = "header";
        Header.tagName = ["H1", "H2", "H3", "H4", "H5", "H6"];
        exports2.default = Header;
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        exports2.default = exports2.ListItem = void 0;
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var _get = function get2(object, property, receiver) {
          if (object === null)
            object = Function.prototype;
          var desc = Object.getOwnPropertyDescriptor(object, property);
          if (desc === void 0) {
            var parent = Object.getPrototypeOf(object);
            if (parent === null) {
              return void 0;
            } else {
              return get2(parent, property, receiver);
            }
          } else if ("value" in desc) {
            return desc.value;
          } else {
            var getter = desc.get;
            if (getter === void 0) {
              return void 0;
            }
            return getter.call(receiver);
          }
        };
        var _parchment = __webpack_require__(0);
        var _parchment2 = _interopRequireDefault(_parchment);
        var _block = __webpack_require__(4);
        var _block2 = _interopRequireDefault(_block);
        var _container = __webpack_require__(25);
        var _container2 = _interopRequireDefault(_container);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _defineProperty(obj, key, value2) {
          if (key in obj) {
            Object.defineProperty(obj, key, { value: value2, enumerable: true, configurable: true, writable: true });
          } else {
            obj[key] = value2;
          }
          return obj;
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self2, call) {
          if (!self2) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self2;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
          if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var ListItem = function(_Block) {
          _inherits(ListItem2, _Block);
          function ListItem2() {
            _classCallCheck(this, ListItem2);
            return _possibleConstructorReturn(this, (ListItem2.__proto__ || Object.getPrototypeOf(ListItem2)).apply(this, arguments));
          }
          _createClass(ListItem2, [{
            key: "format",
            value: function format(name, value2) {
              if (name === List.blotName && !value2) {
                this.replaceWith(_parchment2.default.create(this.statics.scope));
              } else {
                _get(ListItem2.prototype.__proto__ || Object.getPrototypeOf(ListItem2.prototype), "format", this).call(this, name, value2);
              }
            }
          }, {
            key: "remove",
            value: function remove() {
              if (this.prev == null && this.next == null) {
                this.parent.remove();
              } else {
                _get(ListItem2.prototype.__proto__ || Object.getPrototypeOf(ListItem2.prototype), "remove", this).call(this);
              }
            }
          }, {
            key: "replaceWith",
            value: function replaceWith(name, value2) {
              this.parent.isolate(this.offset(this.parent), this.length());
              if (name === this.parent.statics.blotName) {
                this.parent.replaceWith(name, value2);
                return this;
              } else {
                this.parent.unwrap();
                return _get(ListItem2.prototype.__proto__ || Object.getPrototypeOf(ListItem2.prototype), "replaceWith", this).call(this, name, value2);
              }
            }
          }], [{
            key: "formats",
            value: function formats(domNode) {
              return domNode.tagName === this.tagName ? void 0 : _get(ListItem2.__proto__ || Object.getPrototypeOf(ListItem2), "formats", this).call(this, domNode);
            }
          }]);
          return ListItem2;
        }(_block2.default);
        ListItem.blotName = "list-item";
        ListItem.tagName = "LI";
        var List = function(_Container) {
          _inherits(List2, _Container);
          _createClass(List2, null, [{
            key: "create",
            value: function create(value2) {
              var tagName = value2 === "ordered" ? "OL" : "UL";
              var node = _get(List2.__proto__ || Object.getPrototypeOf(List2), "create", this).call(this, tagName);
              if (value2 === "checked" || value2 === "unchecked") {
                node.setAttribute("data-checked", value2 === "checked");
              }
              return node;
            }
          }, {
            key: "formats",
            value: function formats(domNode) {
              if (domNode.tagName === "OL")
                return "ordered";
              if (domNode.tagName === "UL") {
                if (domNode.hasAttribute("data-checked")) {
                  return domNode.getAttribute("data-checked") === "true" ? "checked" : "unchecked";
                } else {
                  return "bullet";
                }
              }
              return void 0;
            }
          }]);
          function List2(domNode) {
            _classCallCheck(this, List2);
            var _this2 = _possibleConstructorReturn(this, (List2.__proto__ || Object.getPrototypeOf(List2)).call(this, domNode));
            var listEventHandler = function listEventHandler2(e) {
              if (e.target.parentNode !== domNode)
                return;
              var format = _this2.statics.formats(domNode);
              var blot = _parchment2.default.find(e.target);
              if (format === "checked") {
                blot.format("list", "unchecked");
              } else if (format === "unchecked") {
                blot.format("list", "checked");
              }
            };
            domNode.addEventListener("touchstart", listEventHandler);
            domNode.addEventListener("mousedown", listEventHandler);
            return _this2;
          }
          _createClass(List2, [{
            key: "format",
            value: function format(name, value2) {
              if (this.children.length > 0) {
                this.children.tail.format(name, value2);
              }
            }
          }, {
            key: "formats",
            value: function formats() {
              return _defineProperty({}, this.statics.blotName, this.statics.formats(this.domNode));
            }
          }, {
            key: "insertBefore",
            value: function insertBefore(blot, ref2) {
              if (blot instanceof ListItem) {
                _get(List2.prototype.__proto__ || Object.getPrototypeOf(List2.prototype), "insertBefore", this).call(this, blot, ref2);
              } else {
                var index = ref2 == null ? this.length() : ref2.offset(this);
                var after = this.split(index);
                after.parent.insertBefore(blot, after);
              }
            }
          }, {
            key: "optimize",
            value: function optimize(context) {
              _get(List2.prototype.__proto__ || Object.getPrototypeOf(List2.prototype), "optimize", this).call(this, context);
              var next = this.next;
              if (next != null && next.prev === this && next.statics.blotName === this.statics.blotName && next.domNode.tagName === this.domNode.tagName && next.domNode.getAttribute("data-checked") === this.domNode.getAttribute("data-checked")) {
                next.moveChildren(this);
                next.remove();
              }
            }
          }, {
            key: "replace",
            value: function replace(target) {
              if (target.statics.blotName !== this.statics.blotName) {
                var item = _parchment2.default.create(this.statics.defaultChild);
                target.moveChildren(item);
                this.appendChild(item);
              }
              _get(List2.prototype.__proto__ || Object.getPrototypeOf(List2.prototype), "replace", this).call(this, target);
            }
          }]);
          return List2;
        }(_container2.default);
        List.blotName = "list";
        List.scope = _parchment2.default.Scope.BLOCK_BLOT;
        List.tagName = ["OL", "UL"];
        List.defaultChild = "list-item";
        List.allowedChildren = [ListItem];
        exports2.ListItem = ListItem;
        exports2.default = List;
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _bold = __webpack_require__(56);
        var _bold2 = _interopRequireDefault(_bold);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self2, call) {
          if (!self2) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self2;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
          if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var Italic = function(_Bold) {
          _inherits(Italic2, _Bold);
          function Italic2() {
            _classCallCheck(this, Italic2);
            return _possibleConstructorReturn(this, (Italic2.__proto__ || Object.getPrototypeOf(Italic2)).apply(this, arguments));
          }
          return Italic2;
        }(_bold2.default);
        Italic.blotName = "italic";
        Italic.tagName = ["EM", "I"];
        exports2.default = Italic;
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var _get = function get2(object, property, receiver) {
          if (object === null)
            object = Function.prototype;
          var desc = Object.getOwnPropertyDescriptor(object, property);
          if (desc === void 0) {
            var parent = Object.getPrototypeOf(object);
            if (parent === null) {
              return void 0;
            } else {
              return get2(parent, property, receiver);
            }
          } else if ("value" in desc) {
            return desc.value;
          } else {
            var getter = desc.get;
            if (getter === void 0) {
              return void 0;
            }
            return getter.call(receiver);
          }
        };
        var _inline = __webpack_require__(6);
        var _inline2 = _interopRequireDefault(_inline);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self2, call) {
          if (!self2) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self2;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
          if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var Script = function(_Inline) {
          _inherits(Script2, _Inline);
          function Script2() {
            _classCallCheck(this, Script2);
            return _possibleConstructorReturn(this, (Script2.__proto__ || Object.getPrototypeOf(Script2)).apply(this, arguments));
          }
          _createClass(Script2, null, [{
            key: "create",
            value: function create(value2) {
              if (value2 === "super") {
                return document.createElement("sup");
              } else if (value2 === "sub") {
                return document.createElement("sub");
              } else {
                return _get(Script2.__proto__ || Object.getPrototypeOf(Script2), "create", this).call(this, value2);
              }
            }
          }, {
            key: "formats",
            value: function formats(domNode) {
              if (domNode.tagName === "SUB")
                return "sub";
              if (domNode.tagName === "SUP")
                return "super";
              return void 0;
            }
          }]);
          return Script2;
        }(_inline2.default);
        Script.blotName = "script";
        Script.tagName = ["SUB", "SUP"];
        exports2.default = Script;
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _inline = __webpack_require__(6);
        var _inline2 = _interopRequireDefault(_inline);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self2, call) {
          if (!self2) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self2;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
          if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var Strike = function(_Inline) {
          _inherits(Strike2, _Inline);
          function Strike2() {
            _classCallCheck(this, Strike2);
            return _possibleConstructorReturn(this, (Strike2.__proto__ || Object.getPrototypeOf(Strike2)).apply(this, arguments));
          }
          return Strike2;
        }(_inline2.default);
        Strike.blotName = "strike";
        Strike.tagName = "S";
        exports2.default = Strike;
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _inline = __webpack_require__(6);
        var _inline2 = _interopRequireDefault(_inline);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self2, call) {
          if (!self2) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self2;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
          if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var Underline = function(_Inline) {
          _inherits(Underline2, _Inline);
          function Underline2() {
            _classCallCheck(this, Underline2);
            return _possibleConstructorReturn(this, (Underline2.__proto__ || Object.getPrototypeOf(Underline2)).apply(this, arguments));
          }
          return Underline2;
        }(_inline2.default);
        Underline.blotName = "underline";
        Underline.tagName = "U";
        exports2.default = Underline;
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var _get = function get2(object, property, receiver) {
          if (object === null)
            object = Function.prototype;
          var desc = Object.getOwnPropertyDescriptor(object, property);
          if (desc === void 0) {
            var parent = Object.getPrototypeOf(object);
            if (parent === null) {
              return void 0;
            } else {
              return get2(parent, property, receiver);
            }
          } else if ("value" in desc) {
            return desc.value;
          } else {
            var getter = desc.get;
            if (getter === void 0) {
              return void 0;
            }
            return getter.call(receiver);
          }
        };
        var _parchment = __webpack_require__(0);
        var _parchment2 = _interopRequireDefault(_parchment);
        var _link = __webpack_require__(27);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self2, call) {
          if (!self2) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self2;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
          if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var ATTRIBUTES = ["alt", "height", "width"];
        var Image = function(_Parchment$Embed) {
          _inherits(Image2, _Parchment$Embed);
          function Image2() {
            _classCallCheck(this, Image2);
            return _possibleConstructorReturn(this, (Image2.__proto__ || Object.getPrototypeOf(Image2)).apply(this, arguments));
          }
          _createClass(Image2, [{
            key: "format",
            value: function format(name, value2) {
              if (ATTRIBUTES.indexOf(name) > -1) {
                if (value2) {
                  this.domNode.setAttribute(name, value2);
                } else {
                  this.domNode.removeAttribute(name);
                }
              } else {
                _get(Image2.prototype.__proto__ || Object.getPrototypeOf(Image2.prototype), "format", this).call(this, name, value2);
              }
            }
          }], [{
            key: "create",
            value: function create(value2) {
              var node = _get(Image2.__proto__ || Object.getPrototypeOf(Image2), "create", this).call(this, value2);
              if (typeof value2 === "string") {
                node.setAttribute("src", this.sanitize(value2));
              }
              return node;
            }
          }, {
            key: "formats",
            value: function formats(domNode) {
              return ATTRIBUTES.reduce(function(formats2, attribute) {
                if (domNode.hasAttribute(attribute)) {
                  formats2[attribute] = domNode.getAttribute(attribute);
                }
                return formats2;
              }, {});
            }
          }, {
            key: "match",
            value: function match(url) {
              return /\.(jpe?g|gif|png)$/.test(url) || /^data:image\/.+;base64/.test(url);
            }
          }, {
            key: "sanitize",
            value: function sanitize(url) {
              return (0, _link.sanitize)(url, ["http", "https", "data"]) ? url : "//:0";
            }
          }, {
            key: "value",
            value: function value2(domNode) {
              return domNode.getAttribute("src");
            }
          }]);
          return Image2;
        }(_parchment2.default.Embed);
        Image.blotName = "image";
        Image.tagName = "IMG";
        exports2.default = Image;
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var _get = function get2(object, property, receiver) {
          if (object === null)
            object = Function.prototype;
          var desc = Object.getOwnPropertyDescriptor(object, property);
          if (desc === void 0) {
            var parent = Object.getPrototypeOf(object);
            if (parent === null) {
              return void 0;
            } else {
              return get2(parent, property, receiver);
            }
          } else if ("value" in desc) {
            return desc.value;
          } else {
            var getter = desc.get;
            if (getter === void 0) {
              return void 0;
            }
            return getter.call(receiver);
          }
        };
        var _block = __webpack_require__(4);
        var _link = __webpack_require__(27);
        var _link2 = _interopRequireDefault(_link);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self2, call) {
          if (!self2) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self2;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
          if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var ATTRIBUTES = ["height", "width"];
        var Video = function(_BlockEmbed) {
          _inherits(Video2, _BlockEmbed);
          function Video2() {
            _classCallCheck(this, Video2);
            return _possibleConstructorReturn(this, (Video2.__proto__ || Object.getPrototypeOf(Video2)).apply(this, arguments));
          }
          _createClass(Video2, [{
            key: "format",
            value: function format(name, value2) {
              if (ATTRIBUTES.indexOf(name) > -1) {
                if (value2) {
                  this.domNode.setAttribute(name, value2);
                } else {
                  this.domNode.removeAttribute(name);
                }
              } else {
                _get(Video2.prototype.__proto__ || Object.getPrototypeOf(Video2.prototype), "format", this).call(this, name, value2);
              }
            }
          }], [{
            key: "create",
            value: function create(value2) {
              var node = _get(Video2.__proto__ || Object.getPrototypeOf(Video2), "create", this).call(this, value2);
              node.setAttribute("frameborder", "0");
              node.setAttribute("allowfullscreen", true);
              node.setAttribute("src", this.sanitize(value2));
              return node;
            }
          }, {
            key: "formats",
            value: function formats(domNode) {
              return ATTRIBUTES.reduce(function(formats2, attribute) {
                if (domNode.hasAttribute(attribute)) {
                  formats2[attribute] = domNode.getAttribute(attribute);
                }
                return formats2;
              }, {});
            }
          }, {
            key: "sanitize",
            value: function sanitize(url) {
              return _link2.default.sanitize(url);
            }
          }, {
            key: "value",
            value: function value2(domNode) {
              return domNode.getAttribute("src");
            }
          }]);
          return Video2;
        }(_block.BlockEmbed);
        Video.blotName = "video";
        Video.className = "ql-video";
        Video.tagName = "IFRAME";
        exports2.default = Video;
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        exports2.default = exports2.FormulaBlot = void 0;
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var _get = function get2(object, property, receiver) {
          if (object === null)
            object = Function.prototype;
          var desc = Object.getOwnPropertyDescriptor(object, property);
          if (desc === void 0) {
            var parent = Object.getPrototypeOf(object);
            if (parent === null) {
              return void 0;
            } else {
              return get2(parent, property, receiver);
            }
          } else if ("value" in desc) {
            return desc.value;
          } else {
            var getter = desc.get;
            if (getter === void 0) {
              return void 0;
            }
            return getter.call(receiver);
          }
        };
        var _embed = __webpack_require__(35);
        var _embed2 = _interopRequireDefault(_embed);
        var _quill = __webpack_require__(5);
        var _quill2 = _interopRequireDefault(_quill);
        var _module = __webpack_require__(9);
        var _module2 = _interopRequireDefault(_module);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self2, call) {
          if (!self2) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self2;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
          if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var FormulaBlot = function(_Embed) {
          _inherits(FormulaBlot2, _Embed);
          function FormulaBlot2() {
            _classCallCheck(this, FormulaBlot2);
            return _possibleConstructorReturn(this, (FormulaBlot2.__proto__ || Object.getPrototypeOf(FormulaBlot2)).apply(this, arguments));
          }
          _createClass(FormulaBlot2, null, [{
            key: "create",
            value: function create(value2) {
              var node = _get(FormulaBlot2.__proto__ || Object.getPrototypeOf(FormulaBlot2), "create", this).call(this, value2);
              if (typeof value2 === "string") {
                window.katex.render(value2, node, {
                  throwOnError: false,
                  errorColor: "#f00"
                });
                node.setAttribute("data-value", value2);
              }
              return node;
            }
          }, {
            key: "value",
            value: function value2(domNode) {
              return domNode.getAttribute("data-value");
            }
          }]);
          return FormulaBlot2;
        }(_embed2.default);
        FormulaBlot.blotName = "formula";
        FormulaBlot.className = "ql-formula";
        FormulaBlot.tagName = "SPAN";
        var Formula = function(_Module) {
          _inherits(Formula2, _Module);
          _createClass(Formula2, null, [{
            key: "register",
            value: function register() {
              _quill2.default.register(FormulaBlot, true);
            }
          }]);
          function Formula2() {
            _classCallCheck(this, Formula2);
            var _this2 = _possibleConstructorReturn(this, (Formula2.__proto__ || Object.getPrototypeOf(Formula2)).call(this));
            if (window.katex == null) {
              throw new Error("Formula module requires KaTeX.");
            }
            return _this2;
          }
          return Formula2;
        }(_module2.default);
        exports2.FormulaBlot = FormulaBlot;
        exports2.default = Formula;
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        exports2.default = exports2.CodeToken = exports2.CodeBlock = void 0;
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var _get = function get2(object, property, receiver) {
          if (object === null)
            object = Function.prototype;
          var desc = Object.getOwnPropertyDescriptor(object, property);
          if (desc === void 0) {
            var parent = Object.getPrototypeOf(object);
            if (parent === null) {
              return void 0;
            } else {
              return get2(parent, property, receiver);
            }
          } else if ("value" in desc) {
            return desc.value;
          } else {
            var getter = desc.get;
            if (getter === void 0) {
              return void 0;
            }
            return getter.call(receiver);
          }
        };
        var _parchment = __webpack_require__(0);
        var _parchment2 = _interopRequireDefault(_parchment);
        var _quill = __webpack_require__(5);
        var _quill2 = _interopRequireDefault(_quill);
        var _module = __webpack_require__(9);
        var _module2 = _interopRequireDefault(_module);
        var _code = __webpack_require__(13);
        var _code2 = _interopRequireDefault(_code);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self2, call) {
          if (!self2) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self2;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
          if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var SyntaxCodeBlock = function(_CodeBlock) {
          _inherits(SyntaxCodeBlock2, _CodeBlock);
          function SyntaxCodeBlock2() {
            _classCallCheck(this, SyntaxCodeBlock2);
            return _possibleConstructorReturn(this, (SyntaxCodeBlock2.__proto__ || Object.getPrototypeOf(SyntaxCodeBlock2)).apply(this, arguments));
          }
          _createClass(SyntaxCodeBlock2, [{
            key: "replaceWith",
            value: function replaceWith(block) {
              this.domNode.textContent = this.domNode.textContent;
              this.attach();
              _get(SyntaxCodeBlock2.prototype.__proto__ || Object.getPrototypeOf(SyntaxCodeBlock2.prototype), "replaceWith", this).call(this, block);
            }
          }, {
            key: "highlight",
            value: function highlight(_highlight) {
              var text = this.domNode.textContent;
              if (this.cachedText !== text) {
                if (text.trim().length > 0 || this.cachedText == null) {
                  this.domNode.innerHTML = _highlight(text);
                  this.domNode.normalize();
                  this.attach();
                }
                this.cachedText = text;
              }
            }
          }]);
          return SyntaxCodeBlock2;
        }(_code2.default);
        SyntaxCodeBlock.className = "ql-syntax";
        var CodeToken = new _parchment2.default.Attributor.Class("token", "hljs", {
          scope: _parchment2.default.Scope.INLINE
        });
        var Syntax = function(_Module) {
          _inherits(Syntax2, _Module);
          _createClass(Syntax2, null, [{
            key: "register",
            value: function register() {
              _quill2.default.register(CodeToken, true);
              _quill2.default.register(SyntaxCodeBlock, true);
            }
          }]);
          function Syntax2(quill2, options) {
            _classCallCheck(this, Syntax2);
            var _this2 = _possibleConstructorReturn(this, (Syntax2.__proto__ || Object.getPrototypeOf(Syntax2)).call(this, quill2, options));
            if (typeof _this2.options.highlight !== "function") {
              throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");
            }
            var timer = null;
            _this2.quill.on(_quill2.default.events.SCROLL_OPTIMIZE, function() {
              clearTimeout(timer);
              timer = setTimeout(function() {
                _this2.highlight();
                timer = null;
              }, _this2.options.interval);
            });
            _this2.highlight();
            return _this2;
          }
          _createClass(Syntax2, [{
            key: "highlight",
            value: function highlight() {
              var _this3 = this;
              if (this.quill.selection.composing)
                return;
              this.quill.update(_quill2.default.sources.USER);
              var range = this.quill.getSelection();
              this.quill.scroll.descendants(SyntaxCodeBlock).forEach(function(code) {
                code.highlight(_this3.options.highlight);
              });
              this.quill.update(_quill2.default.sources.SILENT);
              if (range != null) {
                this.quill.setSelection(range, _quill2.default.sources.SILENT);
              }
            }
          }]);
          return Syntax2;
        }(_module2.default);
        Syntax.DEFAULTS = {
          highlight: function() {
            if (window.hljs == null)
              return null;
            return function(text) {
              var result = window.hljs.highlightAuto(text);
              return result.value;
            };
          }(),
          interval: 1e3
        };
        exports2.CodeBlock = SyntaxCodeBlock;
        exports2.CodeToken = CodeToken;
        exports2.default = Syntax;
      },
      function(module2, exports2) {
        module2.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>';
      },
      function(module2, exports2) {
        module2.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>';
      },
      function(module2, exports2) {
        module2.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>';
      },
      function(module2, exports2) {
        module2.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>';
      },
      function(module2, exports2) {
        module2.exports = '<svg viewbox="0 0 18 18"> <g class="ql-fill ql-color-label"> <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points="5.5 13 9 5 12.5 13"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>';
      },
      function(module2, exports2) {
        module2.exports = '<svg viewbox="0 0 18 18"> <rect class="ql-fill ql-stroke" height=3 width=3 x=4 y=5></rect> <rect class="ql-fill ql-stroke" height=3 width=3 x=11 y=5></rect> <path class="ql-even ql-fill ql-stroke" d=M7,8c0,4.031-3,5-3,5></path> <path class="ql-even ql-fill ql-stroke" d=M14,8c0,4.031-3,5-3,5></path> </svg>';
      },
      function(module2, exports2) {
        module2.exports = '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>';
      },
      function(module2, exports2) {
        module2.exports = '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>';
      },
      function(module2, exports2) {
        module2.exports = '<svg viewbox="0 0 18 18"> <line class="ql-color-label ql-stroke ql-transparent" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points="5.5 11 9 3 12.5 11"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>';
      },
      function(module2, exports2) {
        module2.exports = '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"></polygon> <line class="ql-stroke ql-fill" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>';
      },
      function(module2, exports2) {
        module2.exports = '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"></polygon> <line class="ql-stroke ql-fill" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>';
      },
      function(module2, exports2) {
        module2.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>';
      },
      function(module2, exports2) {
        module2.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>';
      },
      function(module2, exports2) {
        module2.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>';
      },
      function(module2, exports2) {
        module2.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform="translate(24 18) rotate(-180)"/> </svg>';
      },
      function(module2, exports2) {
        module2.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>';
      },
      function(module2, exports2) {
        module2.exports = '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>';
      },
      function(module2, exports2) {
        module2.exports = '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>';
      },
      function(module2, exports2) {
        module2.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>';
      },
      function(module2, exports2) {
        module2.exports = '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>';
      },
      function(module2, exports2) {
        module2.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg>';
      },
      function(module2, exports2) {
        module2.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="5 7 5 11 3 9 5 7"></polyline> </svg>';
      },
      function(module2, exports2) {
        module2.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class="ql-even ql-stroke" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class="ql-even ql-stroke" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>';
      },
      function(module2, exports2) {
        module2.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class="ql-stroke ql-thin" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class="ql-stroke ql-thin" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class="ql-stroke ql-thin" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>';
      },
      function(module2, exports2) {
        module2.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>';
      },
      function(module2, exports2) {
        module2.exports = '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points="3 4 4 5 6 3"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points="3 14 4 15 6 13"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="3 9 4 10 6 8"></polyline> </svg>';
      },
      function(module2, exports2) {
        module2.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>';
      },
      function(module2, exports2) {
        module2.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>';
      },
      function(module2, exports2) {
        module2.exports = '<svg viewbox="0 0 18 18"> <line class="ql-stroke ql-thin" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>';
      },
      function(module2, exports2) {
        module2.exports = '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>';
      },
      function(module2, exports2) {
        module2.exports = '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>';
      },
      function(module2, exports2) {
        module2.exports = '<svg viewbox="0 0 18 18"> <polygon class=ql-stroke points="7 11 9 13 11 11 7 11"></polygon> <polygon class=ql-stroke points="7 7 9 5 11 7 7 7"></polygon> </svg>';
      },
      function(module2, exports2, __webpack_require__) {
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        exports2.default = exports2.BubbleTooltip = void 0;
        var _get = function get2(object, property, receiver) {
          if (object === null)
            object = Function.prototype;
          var desc = Object.getOwnPropertyDescriptor(object, property);
          if (desc === void 0) {
            var parent = Object.getPrototypeOf(object);
            if (parent === null) {
              return void 0;
            } else {
              return get2(parent, property, receiver);
            }
          } else if ("value" in desc) {
            return desc.value;
          } else {
            var getter = desc.get;
            if (getter === void 0) {
              return void 0;
            }
            return getter.call(receiver);
          }
        };
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        var _extend = __webpack_require__(3);
        var _extend2 = _interopRequireDefault(_extend);
        var _emitter = __webpack_require__(8);
        var _emitter2 = _interopRequireDefault(_emitter);
        var _base = __webpack_require__(43);
        var _base2 = _interopRequireDefault(_base);
        var _selection = __webpack_require__(15);
        var _icons = __webpack_require__(41);
        var _icons2 = _interopRequireDefault(_icons);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self2, call) {
          if (!self2) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self2;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
          if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var TOOLBAR_CONFIG = [["bold", "italic", "link"], [{ header: 1 }, { header: 2 }, "blockquote"]];
        var BubbleTheme = function(_BaseTheme) {
          _inherits(BubbleTheme2, _BaseTheme);
          function BubbleTheme2(quill2, options) {
            _classCallCheck(this, BubbleTheme2);
            if (options.modules.toolbar != null && options.modules.toolbar.container == null) {
              options.modules.toolbar.container = TOOLBAR_CONFIG;
            }
            var _this = _possibleConstructorReturn(this, (BubbleTheme2.__proto__ || Object.getPrototypeOf(BubbleTheme2)).call(this, quill2, options));
            _this.quill.container.classList.add("ql-bubble");
            return _this;
          }
          _createClass(BubbleTheme2, [{
            key: "extendToolbar",
            value: function extendToolbar(toolbar) {
              this.tooltip = new BubbleTooltip(this.quill, this.options.bounds);
              this.tooltip.root.appendChild(toolbar.container);
              this.buildButtons([].slice.call(toolbar.container.querySelectorAll("button")), _icons2.default);
              this.buildPickers([].slice.call(toolbar.container.querySelectorAll("select")), _icons2.default);
            }
          }]);
          return BubbleTheme2;
        }(_base2.default);
        BubbleTheme.DEFAULTS = (0, _extend2.default)(true, {}, _base2.default.DEFAULTS, {
          modules: {
            toolbar: {
              handlers: {
                link: function link(value2) {
                  if (!value2) {
                    this.quill.format("link", false);
                  } else {
                    this.quill.theme.tooltip.edit();
                  }
                }
              }
            }
          }
        });
        var BubbleTooltip = function(_BaseTooltip) {
          _inherits(BubbleTooltip2, _BaseTooltip);
          function BubbleTooltip2(quill2, bounds) {
            _classCallCheck(this, BubbleTooltip2);
            var _this2 = _possibleConstructorReturn(this, (BubbleTooltip2.__proto__ || Object.getPrototypeOf(BubbleTooltip2)).call(this, quill2, bounds));
            _this2.quill.on(_emitter2.default.events.EDITOR_CHANGE, function(type, range, oldRange, source2) {
              if (type !== _emitter2.default.events.SELECTION_CHANGE)
                return;
              if (range != null && range.length > 0 && source2 === _emitter2.default.sources.USER) {
                _this2.show();
                _this2.root.style.left = "0px";
                _this2.root.style.width = "";
                _this2.root.style.width = _this2.root.offsetWidth + "px";
                var lines = _this2.quill.getLines(range.index, range.length);
                if (lines.length === 1) {
                  _this2.position(_this2.quill.getBounds(range));
                } else {
                  var lastLine = lines[lines.length - 1];
                  var index = _this2.quill.getIndex(lastLine);
                  var length = Math.min(lastLine.length() - 1, range.index + range.length - index);
                  var _bounds = _this2.quill.getBounds(new _selection.Range(index, length));
                  _this2.position(_bounds);
                }
              } else if (document.activeElement !== _this2.textbox && _this2.quill.hasFocus()) {
                _this2.hide();
              }
            });
            return _this2;
          }
          _createClass(BubbleTooltip2, [{
            key: "listen",
            value: function listen() {
              var _this3 = this;
              _get(BubbleTooltip2.prototype.__proto__ || Object.getPrototypeOf(BubbleTooltip2.prototype), "listen", this).call(this);
              this.root.querySelector(".ql-close").addEventListener("click", function() {
                _this3.root.classList.remove("ql-editing");
              });
              this.quill.on(_emitter2.default.events.SCROLL_OPTIMIZE, function() {
                setTimeout(function() {
                  if (_this3.root.classList.contains("ql-hidden"))
                    return;
                  var range = _this3.quill.getSelection();
                  if (range != null) {
                    _this3.position(_this3.quill.getBounds(range));
                  }
                }, 1);
              });
            }
          }, {
            key: "cancel",
            value: function cancel() {
              this.show();
            }
          }, {
            key: "position",
            value: function position(reference) {
              var shift = _get(BubbleTooltip2.prototype.__proto__ || Object.getPrototypeOf(BubbleTooltip2.prototype), "position", this).call(this, reference);
              var arrow = this.root.querySelector(".ql-tooltip-arrow");
              arrow.style.marginLeft = "";
              if (shift === 0)
                return shift;
              arrow.style.marginLeft = -1 * shift - arrow.offsetWidth / 2 + "px";
            }
          }]);
          return BubbleTooltip2;
        }(_base.BaseTooltip);
        BubbleTooltip.TEMPLATE = ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', "</div>"].join("");
        exports2.BubbleTooltip = BubbleTooltip;
        exports2.default = BubbleTheme;
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = __webpack_require__(63);
      }
    ])["default"];
  });
})(quill);
var Quill = /* @__PURE__ */ getDefaultExportFromCjs(quill.exports);
var quill_core = "";
var quill_snow = "";
var quill_bubble = "";
const defaultOptions = {
  theme: "snow",
  boundary: document.body,
  modules: {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "code-block"],
      [{ header: 1 }, { header: 2 }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ direction: "rtl" }],
      [{ size: ["small", false, "large", "huge"] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }],
      [{ font: [] }],
      [{ align: [] }],
      ["clean"],
      ["link", "image", "video"]
    ]
  },
  placeholder: "Insert content here ...",
  readOnly: false
};
const _sfc_main$u = {
  name: "quill-editor",
  props: {
    content: String,
    value: String,
    disabled: {
      type: Boolean,
      default: false
    },
    options: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  emits: ["ready", "change", "input", "blur", "focus", "update:value"],
  setup(props, context) {
    const state = {
      editorOption: {},
      quill: null
    };
    let _content = "";
    watch(() => props.value, (val) => {
      if (state.quill) {
        if (val && val !== _content) {
          _content = val;
          state.quill.pasteHTML(val);
        } else if (!val) {
          state.quill.setText("");
        }
      }
    });
    watch(() => props.content, (val) => {
      if (state.quill) {
        if (val && val !== _content) {
          _content = val;
          state.quill.pasteHTML(val);
        } else if (!val) {
          state.quill.setText("");
        }
      }
    });
    watch(() => props.disabled, (val) => {
      if (state.quill) {
        state.quill.enable(!val);
      }
    });
    const editor = ref(null);
    const mergeOptions = (def, custom) => {
      for (const key in custom) {
        if (!def[key] || key !== "modules") {
          def[key] = custom[key];
        } else {
          mergeOptions(def[key], custom[key]);
        }
      }
      return def;
    };
    const initialize = () => {
      if (editor.value) {
        state.editorOption = mergeOptions(defaultOptions, props.options);
        state.editorOption.readOnly = props.disabled ? true : false;
        state.quill = new Quill(editor.value, state.editorOption);
        if (props.value) {
          state.quill.pasteHTML(props.value);
        }
        state.quill.on("selection-change", (range) => {
          if (!range) {
            context.emit("blur", state.quill);
          } else {
            context.emit("focus", state.quill);
          }
        });
        state.quill.on("text-change", () => {
          if (props.disabled) {
            state.quill.enable(false);
          }
          let html = editor.value.children[0].innerHTML;
          const quill2 = state.quill;
          const text = state.quill.getText();
          if (html === "<p><br></p>")
            html = "";
          _content = html;
          context.emit("update:value", _content);
          context.emit("change", { html, text, quill: quill2 });
        });
        context.emit("ready", state.quill);
      }
    };
    onBeforeUnmount(() => {
      const editorToolbar = editor.value.previousSibling;
      if (editorToolbar && editorToolbar.className.indexOf("ql-toolbar") > -1) {
        editorToolbar.parentNode.removeChild(editorToolbar);
      }
    });
    onMounted(() => {
      initialize();
    });
    onUnmounted(() => {
      state.quill = null;
    });
    return { editor };
  }
};
const _hoisted_1$g = { ref: "editor" };
function _sfc_render$u(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("section", _hoisted_1$g, null, 512);
}
var quillEditor = /* @__PURE__ */ _export_sfc$1(_sfc_main$u, [["render", _sfc_render$u]]);
quillEditor.install = function(app) {
  app.component(quillEditor.name, quillEditor);
};
var richEditorWidget_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$t = {
  name: "rich-editor-widget",
  componentName: "FieldWidget",
  mixins: [emitter, fieldMixin, i18n$1],
  props: {
    field: Object,
    parentWidget: Object,
    parentList: Array,
    indexOfParentList: Number,
    designer: Object,
    designState: {
      type: Boolean,
      default: false
    },
    subFormRowIndex: {
      type: Number,
      default: -1
    },
    subFormColIndex: {
      type: Number,
      default: -1
    },
    subFormRowId: {
      type: String,
      default: ""
    }
  },
  components: {
    FormItemWrapper,
    quillEditor
  },
  data() {
    return {
      oldFieldValue: null,
      fieldModel: null,
      rules: [],
      customToolbar: [],
      valueChangedFlag: false
    };
  },
  computed: {
    editorOption() {
      return {
        placeholder: this.field.options.placeholder,
        modules: {}
      };
    }
  },
  beforeCreate() {
  },
  created() {
    this.initFieldModel();
    this.registerToRefList();
    this.initEventHandler();
    this.buildFieldRules();
    this.handleOnCreated();
  },
  mounted() {
    this.handleOnMounted();
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  },
  methods: {
    handleRichEditorChangeEvent() {
      this.valueChangedFlag = true;
      this.syncUpdateFormModel(this.fieldModel);
    },
    handleRichEditorFocusEvent() {
      this.oldFieldValue = deepClone(this.fieldModel);
    },
    handleRichEditorBlurEvent() {
      if (this.valueChangedFlag) {
        this.emitFieldDataChange(this.fieldModel, this.oldFieldValue);
        this.valueChangedFlag = false;
      }
    }
  }
};
function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_quill_editor = resolveComponent("quill-editor");
  const _component_form_item_wrapper = resolveComponent("form-item-wrapper");
  return openBlock(), createBlock(_component_form_item_wrapper, {
    designer: $props.designer,
    field: $props.field,
    rules: $data.rules,
    "design-state": $props.designState,
    "parent-widget": $props.parentWidget,
    "parent-list": $props.parentList,
    "index-of-parent-list": $props.indexOfParentList,
    "sub-form-row-index": $props.subFormRowIndex,
    "sub-form-col-index": $props.subFormColIndex,
    "sub-form-row-id": $props.subFormRowId
  }, {
    default: withCtx(() => [
      createElementVNode("div", null, [
        createVNode(_component_quill_editor, {
          value: $data.fieldModel,
          "onUpdate:value": _cache[0] || (_cache[0] = ($event) => $data.fieldModel = $event),
          options: $options.editorOption,
          disabled: $props.field.options.disabled,
          onBlur: $options.handleRichEditorBlurEvent,
          onFocus: $options.handleRichEditorFocusEvent,
          onChange: $options.handleRichEditorChangeEvent,
          style: normalizeStyle(!!$props.field.options.contentHeight ? `height: ${$props.field.options.contentHeight};` : "")
        }, null, 8, ["value", "options", "disabled", "onBlur", "onFocus", "onChange", "style"])
      ])
    ]),
    _: 1
  }, 8, ["designer", "field", "rules", "design-state", "parent-widget", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
var richEditorWidget = /* @__PURE__ */ _export_sfc$1(_sfc_main$t, [["render", _sfc_render$t], ["__scopeId", "data-v-736d97e5"]]);
var __glob_0_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": richEditorWidget
}, Symbol.toStringTag, { value: "Module" }));
var selectWidget_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$s = {
  name: "select-widget",
  componentName: "FieldWidget",
  mixins: [emitter, fieldMixin, i18n$1],
  props: {
    field: Object,
    parentWidget: Object,
    parentList: Array,
    indexOfParentList: Number,
    designer: Object,
    designState: {
      type: Boolean,
      default: false
    },
    subFormRowIndex: {
      type: Number,
      default: -1
    },
    subFormColIndex: {
      type: Number,
      default: -1
    },
    subFormRowId: {
      type: String,
      default: ""
    }
  },
  components: {
    FormItemWrapper
  },
  data() {
    return {
      oldFieldValue: null,
      fieldModel: null,
      rules: []
    };
  },
  computed: {
    allowDefaultFirstOption() {
      return !!this.field.options.filterable && !!this.field.options.allowCreate;
    }
  },
  beforeCreate() {
  },
  created() {
    this.initOptionItems();
    this.initFieldModel();
    this.registerToRefList();
    this.initEventHandler();
    this.buildFieldRules();
    this.handleOnCreated();
  },
  mounted() {
    this.handleOnMounted();
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  },
  methods: {}
};
function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_option = resolveComponent("el-option");
  const _component_el_select = resolveComponent("el-select");
  const _component_form_item_wrapper = resolveComponent("form-item-wrapper");
  return openBlock(), createBlock(_component_form_item_wrapper, {
    designer: $props.designer,
    field: $props.field,
    rules: $data.rules,
    "design-state": $props.designState,
    "parent-widget": $props.parentWidget,
    "parent-list": $props.parentList,
    "index-of-parent-list": $props.indexOfParentList,
    "sub-form-row-index": $props.subFormRowIndex,
    "sub-form-col-index": $props.subFormColIndex,
    "sub-form-row-id": $props.subFormRowId
  }, {
    default: withCtx(() => [
      createVNode(_component_el_select, {
        ref: "fieldEditor",
        modelValue: $data.fieldModel,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.fieldModel = $event),
        class: "full-width-input",
        disabled: $props.field.options.disabled,
        size: _ctx.widgetSize,
        clearable: $props.field.options.clearable,
        filterable: $props.field.options.filterable,
        "allow-create": $props.field.options.allowCreate,
        "default-first-option": $options.allowDefaultFirstOption,
        "automatic-dropdown": $props.field.options.automaticDropdown,
        multiple: $props.field.options.multiple,
        "multiple-limit": $props.field.options.multipleLimit,
        placeholder: _ctx.$t($props.field.options.placeholder) || _ctx.$t("render.hint.selectPlaceholder"),
        remote: $props.field.options.remote,
        "remote-method": _ctx.remoteQuery,
        onFocus: _ctx.handleFocusCustomEvent,
        onBlur: _ctx.handleBlurCustomEvent,
        onChange: _ctx.handleChangeEvent
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList($props.field.options.optionItems, (item) => {
            return openBlock(), createBlock(_component_el_option, {
              key: item.value,
              label: _ctx.$t(item.label),
              value: item.value,
              disabled: item.disabled
            }, null, 8, ["label", "value", "disabled"]);
          }), 128))
        ]),
        _: 1
      }, 8, ["modelValue", "disabled", "size", "clearable", "filterable", "allow-create", "default-first-option", "automatic-dropdown", "multiple", "multiple-limit", "placeholder", "remote", "remote-method", "onFocus", "onBlur", "onChange"])
    ]),
    _: 1
  }, 8, ["designer", "field", "rules", "design-state", "parent-widget", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
var selectWidget = /* @__PURE__ */ _export_sfc$1(_sfc_main$s, [["render", _sfc_render$s], ["__scopeId", "data-v-4206ba6a"]]);
var __glob_0_16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": selectWidget
}, Symbol.toStringTag, { value: "Module" }));
var sliderWidget_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$r = {
  name: "slider-widget",
  componentName: "FieldWidget",
  mixins: [emitter, fieldMixin, i18n$1],
  props: {
    field: Object,
    parentWidget: Object,
    parentList: Array,
    indexOfParentList: Number,
    designer: Object,
    designState: {
      type: Boolean,
      default: false
    },
    subFormRowIndex: {
      type: Number,
      default: -1
    },
    subFormColIndex: {
      type: Number,
      default: -1
    },
    subFormRowId: {
      type: String,
      default: ""
    }
  },
  components: {
    FormItemWrapper
  },
  data() {
    return {
      oldFieldValue: null,
      fieldModel: null,
      rules: []
    };
  },
  computed: {},
  beforeCreate() {
  },
  created() {
    this.initFieldModel();
    this.registerToRefList();
    this.initEventHandler();
    this.buildFieldRules();
    this.handleOnCreated();
  },
  mounted() {
    this.handleOnMounted();
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  },
  methods: {}
};
function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_slider = resolveComponent("el-slider");
  const _component_form_item_wrapper = resolveComponent("form-item-wrapper");
  return openBlock(), createBlock(_component_form_item_wrapper, {
    designer: $props.designer,
    field: $props.field,
    rules: $data.rules,
    "design-state": $props.designState,
    "parent-widget": $props.parentWidget,
    "parent-list": $props.parentList,
    "index-of-parent-list": $props.indexOfParentList,
    "sub-form-row-index": $props.subFormRowIndex,
    "sub-form-col-index": $props.subFormColIndex,
    "sub-form-row-id": $props.subFormRowId
  }, {
    default: withCtx(() => [
      createVNode(_component_el_slider, {
        ref: "fieldEditor",
        modelValue: $data.fieldModel,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.fieldModel = $event),
        disabled: $props.field.options.disabled,
        "show-stops": $props.field.options.showStops,
        min: $props.field.options.min,
        max: $props.field.options.max,
        step: $props.field.options.step,
        range: $props.field.options.range,
        vertical: $props.field.options.vertical,
        onChange: _ctx.handleChangeEvent
      }, null, 8, ["modelValue", "disabled", "show-stops", "min", "max", "step", "range", "vertical", "onChange"])
    ]),
    _: 1
  }, 8, ["designer", "field", "rules", "design-state", "parent-widget", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
var sliderWidget = /* @__PURE__ */ _export_sfc$1(_sfc_main$r, [["render", _sfc_render$r], ["__scopeId", "data-v-e54b3390"]]);
var __glob_0_17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": sliderWidget
}, Symbol.toStringTag, { value: "Module" }));
var slotWidget_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$q = {
  name: "slot-widget",
  componentName: "FieldWidget",
  mixins: [emitter, fieldMixin, i18n$1],
  props: {
    field: Object,
    parentWidget: Object,
    parentList: Array,
    indexOfParentList: Number,
    designer: Object,
    designState: {
      type: Boolean,
      default: false
    },
    subFormRowIndex: {
      type: Number,
      default: -1
    },
    subFormColIndex: {
      type: Number,
      default: -1
    },
    subFormRowId: {
      type: String,
      default: ""
    }
  },
  components: {
    StaticContentWrapper
  },
  computed: {},
  beforeCreate() {
  },
  created() {
    this.registerToRefList();
    this.initEventHandler();
    this.handleOnCreated();
  },
  mounted() {
    this.handleOnMounted();
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  },
  methods: {}
};
const _hoisted_1$f = {
  key: 0,
  class: "slot-title"
};
function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_static_content_wrapper = resolveComponent("static-content-wrapper");
  return openBlock(), createBlock(_component_static_content_wrapper, {
    designer: $props.designer,
    field: $props.field,
    "design-state": $props.designState,
    "parent-widget": $props.parentWidget,
    "parent-list": $props.parentList,
    "index-of-parent-list": $props.indexOfParentList,
    "sub-form-row-index": $props.subFormRowIndex,
    "sub-form-col-index": $props.subFormColIndex,
    "sub-form-row-id": $props.subFormRowId
  }, {
    default: withCtx(() => [
      createElementVNode("div", {
        class: normalizeClass([!!$props.designState ? "slot-wrapper-design" : "slot-wrapper-render"])
      }, [
        renderSlot(_ctx.$slots, $props.field.options.name, { formModel: _ctx.formModel }, void 0, true),
        !!$props.designState ? (openBlock(), createElementBlock("div", _hoisted_1$f, toDisplayString($props.field.options.label), 1)) : createCommentVNode("", true)
      ], 2)
    ]),
    _: 3
  }, 8, ["designer", "field", "design-state", "parent-widget", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
var slotWidget = /* @__PURE__ */ _export_sfc$1(_sfc_main$q, [["render", _sfc_render$q], ["__scopeId", "data-v-1b458525"]]);
var __glob_0_18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": slotWidget
}, Symbol.toStringTag, { value: "Module" }));
var staticTextWidget_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$p = {
  name: "static-text-widget",
  componentName: "FieldWidget",
  mixins: [emitter, fieldMixin, i18n$1],
  props: {
    field: Object,
    parentWidget: Object,
    parentList: Array,
    indexOfParentList: Number,
    designer: Object,
    designState: {
      type: Boolean,
      default: false
    },
    subFormRowIndex: {
      type: Number,
      default: -1
    },
    subFormColIndex: {
      type: Number,
      default: -1
    },
    subFormRowId: {
      type: String,
      default: ""
    }
  },
  components: {
    StaticContentWrapper
  },
  computed: {},
  beforeCreate() {
  },
  created() {
    this.registerToRefList();
    this.initEventHandler();
    this.handleOnCreated();
  },
  mounted() {
    this.handleOnMounted();
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  },
  methods: {}
};
function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_static_content_wrapper = resolveComponent("static-content-wrapper");
  return openBlock(), createBlock(_component_static_content_wrapper, {
    designer: $props.designer,
    field: $props.field,
    "design-state": $props.designState,
    "parent-widget": $props.parentWidget,
    "parent-list": $props.parentList,
    "index-of-parent-list": $props.indexOfParentList,
    "sub-form-row-index": $props.subFormRowIndex,
    "sub-form-col-index": $props.subFormColIndex,
    "sub-form-row-id": $props.subFormRowId
  }, {
    default: withCtx(() => [
      createElementVNode("div", { ref: "fieldEditor" }, toDisplayString($props.field.options.textContent), 513)
    ]),
    _: 1
  }, 8, ["designer", "field", "design-state", "parent-widget", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
var staticTextWidget = /* @__PURE__ */ _export_sfc$1(_sfc_main$p, [["render", _sfc_render$p], ["__scopeId", "data-v-86aee66c"]]);
var __glob_0_20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": staticTextWidget
}, Symbol.toStringTag, { value: "Module" }));
var switchWidget_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$o = {
  name: "switch-widget",
  componentName: "FieldWidget",
  mixins: [emitter, fieldMixin, i18n$1],
  props: {
    field: Object,
    parentWidget: Object,
    parentList: Array,
    indexOfParentList: Number,
    designer: Object,
    designState: {
      type: Boolean,
      default: false
    },
    subFormRowIndex: {
      type: Number,
      default: -1
    },
    subFormColIndex: {
      type: Number,
      default: -1
    },
    subFormRowId: {
      type: String,
      default: ""
    }
  },
  components: {
    FormItemWrapper
  },
  data() {
    return {
      oldFieldValue: null,
      fieldModel: null,
      rules: []
    };
  },
  computed: {},
  beforeCreate() {
  },
  created() {
    this.initFieldModel();
    this.registerToRefList();
    this.initEventHandler();
    this.buildFieldRules();
    this.handleOnCreated();
  },
  mounted() {
    this.handleOnMounted();
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  },
  methods: {}
};
function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_switch = resolveComponent("el-switch");
  const _component_form_item_wrapper = resolveComponent("form-item-wrapper");
  return openBlock(), createBlock(_component_form_item_wrapper, {
    designer: $props.designer,
    field: $props.field,
    rules: $data.rules,
    "design-state": $props.designState,
    "parent-widget": $props.parentWidget,
    "parent-list": $props.parentList,
    "index-of-parent-list": $props.indexOfParentList,
    "sub-form-row-index": $props.subFormRowIndex,
    "sub-form-col-index": $props.subFormColIndex,
    "sub-form-row-id": $props.subFormRowId
  }, {
    default: withCtx(() => [
      createVNode(_component_el_switch, {
        ref: "fieldEditor",
        modelValue: $data.fieldModel,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.fieldModel = $event),
        disabled: $props.field.options.disabled,
        "active-text": $props.field.options.activeText,
        "inactive-text": $props.field.options.inactiveText,
        "active-color": $props.field.options.activeColor,
        "inactive-color": $props.field.options.inactiveColor,
        width: $props.field.options.switchWidth,
        onChange: _ctx.handleChangeEvent
      }, null, 8, ["modelValue", "disabled", "active-text", "inactive-text", "active-color", "inactive-color", "width", "onChange"])
    ]),
    _: 1
  }, 8, ["designer", "field", "rules", "design-state", "parent-widget", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
var switchWidget = /* @__PURE__ */ _export_sfc$1(_sfc_main$o, [["render", _sfc_render$o], ["__scopeId", "data-v-51a90f56"]]);
var __glob_0_21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": switchWidget
}, Symbol.toStringTag, { value: "Module" }));
var textareaWidget_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$n = {
  name: "textarea-widget",
  componentName: "FieldWidget",
  mixins: [emitter, fieldMixin, i18n$1],
  props: {
    field: Object,
    parentWidget: Object,
    parentList: Array,
    indexOfParentList: Number,
    designer: Object,
    designState: {
      type: Boolean,
      default: false
    },
    subFormRowIndex: {
      type: Number,
      default: -1
    },
    subFormColIndex: {
      type: Number,
      default: -1
    },
    subFormRowId: {
      type: String,
      default: ""
    }
  },
  components: {
    FormItemWrapper
  },
  data() {
    return {
      oldFieldValue: null,
      fieldModel: null,
      rules: []
    };
  },
  computed: {},
  beforeCreate() {
  },
  created() {
    this.initFieldModel();
    this.registerToRefList();
    this.initEventHandler();
    this.buildFieldRules();
    this.handleOnCreated();
  },
  mounted() {
    this.handleOnMounted();
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  },
  methods: {}
};
function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_input = resolveComponent("el-input");
  const _component_form_item_wrapper = resolveComponent("form-item-wrapper");
  return openBlock(), createBlock(_component_form_item_wrapper, {
    designer: $props.designer,
    field: $props.field,
    rules: $data.rules,
    "design-state": $props.designState,
    "parent-widget": $props.parentWidget,
    "parent-list": $props.parentList,
    "index-of-parent-list": $props.indexOfParentList,
    "sub-form-row-index": $props.subFormRowIndex,
    "sub-form-col-index": $props.subFormColIndex,
    "sub-form-row-id": $props.subFormRowId
  }, {
    default: withCtx(() => [
      createVNode(_component_el_input, {
        type: "textarea",
        ref: "fieldEditor",
        modelValue: $data.fieldModel,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.fieldModel = $event),
        disabled: $props.field.options.disabled,
        readonly: $props.field.options.readonly,
        size: _ctx.widgetSize,
        placeholder: $props.field.options.placeholder,
        rows: $props.field.options.rows,
        minlength: $props.field.options.minLength,
        maxlength: $props.field.options.maxLength,
        "show-word-limit": $props.field.options.showWordLimit,
        onFocus: _ctx.handleFocusCustomEvent,
        onBlur: _ctx.handleBlurCustomEvent,
        onInput: _ctx.handleInputCustomEvent,
        onChange: _ctx.handleChangeEvent
      }, null, 8, ["modelValue", "disabled", "readonly", "size", "placeholder", "rows", "minlength", "maxlength", "show-word-limit", "onFocus", "onBlur", "onInput", "onChange"])
    ]),
    _: 1
  }, 8, ["designer", "field", "rules", "design-state", "parent-widget", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
var textareaWidget = /* @__PURE__ */ _export_sfc$1(_sfc_main$n, [["render", _sfc_render$n], ["__scopeId", "data-v-07ccea24"]]);
var __glob_0_22 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": textareaWidget
}, Symbol.toStringTag, { value: "Module" }));
var timeRangeWidget_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$m = {
  name: "time-range-widget",
  componentName: "FieldWidget",
  mixins: [emitter, fieldMixin, i18n$1],
  props: {
    field: Object,
    parentWidget: Object,
    parentList: Array,
    indexOfParentList: Number,
    designer: Object,
    designState: {
      type: Boolean,
      default: false
    },
    subFormRowIndex: {
      type: Number,
      default: -1
    },
    subFormColIndex: {
      type: Number,
      default: -1
    },
    subFormRowId: {
      type: String,
      default: ""
    }
  },
  components: {
    FormItemWrapper
  },
  data() {
    return {
      oldFieldValue: null,
      fieldModel: null,
      rules: []
    };
  },
  computed: {},
  beforeCreate() {
  },
  created() {
    this.initFieldModel();
    this.registerToRefList();
    this.initEventHandler();
    this.buildFieldRules();
    this.handleOnCreated();
  },
  mounted() {
    this.handleOnMounted();
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  },
  methods: {}
};
function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_time_picker = resolveComponent("el-time-picker");
  const _component_form_item_wrapper = resolveComponent("form-item-wrapper");
  return openBlock(), createBlock(_component_form_item_wrapper, {
    designer: $props.designer,
    field: $props.field,
    rules: $data.rules,
    "design-state": $props.designState,
    "parent-widget": $props.parentWidget,
    "parent-list": $props.parentList,
    "index-of-parent-list": $props.indexOfParentList,
    "sub-form-row-index": $props.subFormRowIndex,
    "sub-form-col-index": $props.subFormColIndex,
    "sub-form-row-id": $props.subFormRowId
  }, {
    default: withCtx(() => [
      createElementVNode("div", {
        class: normalizeClass([!!$props.field.options.autoFullWidth ? "auto-full-width" : ""])
      }, [
        createVNode(_component_el_time_picker, {
          ref: "fieldEditor",
          "is-range": "",
          modelValue: $data.fieldModel,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.fieldModel = $event),
          class: normalizeClass([!!$props.field.options.autoFullWidth ? "full-width-input" : ""]),
          disabled: $props.field.options.disabled,
          readonly: $props.field.options.readonly,
          size: _ctx.widgetSize,
          clearable: $props.field.options.clearable,
          editable: $props.field.options.editable,
          format: $props.field.options.format,
          "value-format": "HH:mm:ss",
          "start-placeholder": $props.field.options.startPlaceholder || _ctx.$t("render.hint.startTimePlaceholder"),
          "end-placeholder": $props.field.options.endPlaceholder || _ctx.$t("render.hint.endTimePlaceholder"),
          onFocus: _ctx.handleFocusCustomEvent,
          onBlur: _ctx.handleBlurCustomEvent,
          onChange: _ctx.handleChangeEvent
        }, null, 8, ["modelValue", "class", "disabled", "readonly", "size", "clearable", "editable", "format", "start-placeholder", "end-placeholder", "onFocus", "onBlur", "onChange"])
      ], 2)
    ]),
    _: 1
  }, 8, ["designer", "field", "rules", "design-state", "parent-widget", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
var timeRangeWidget = /* @__PURE__ */ _export_sfc$1(_sfc_main$m, [["render", _sfc_render$m], ["__scopeId", "data-v-2b70e154"]]);
var __glob_0_23 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": timeRangeWidget
}, Symbol.toStringTag, { value: "Module" }));
var timeWidget_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$l = {
  name: "time-widget",
  componentName: "FieldWidget",
  mixins: [emitter, fieldMixin, i18n$1],
  props: {
    field: Object,
    parentWidget: Object,
    parentList: Array,
    indexOfParentList: Number,
    designer: Object,
    designState: {
      type: Boolean,
      default: false
    },
    subFormRowIndex: {
      type: Number,
      default: -1
    },
    subFormColIndex: {
      type: Number,
      default: -1
    },
    subFormRowId: {
      type: String,
      default: ""
    }
  },
  components: {
    FormItemWrapper
  },
  data() {
    return {
      oldFieldValue: null,
      fieldModel: null,
      rules: []
    };
  },
  computed: {},
  beforeCreate() {
  },
  created() {
    this.initFieldModel();
    this.registerToRefList();
    this.initEventHandler();
    this.buildFieldRules();
    this.handleOnCreated();
  },
  mounted() {
    this.handleOnMounted();
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  },
  methods: {}
};
function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_time_picker = resolveComponent("el-time-picker");
  const _component_form_item_wrapper = resolveComponent("form-item-wrapper");
  return openBlock(), createBlock(_component_form_item_wrapper, {
    designer: $props.designer,
    field: $props.field,
    rules: $data.rules,
    "design-state": $props.designState,
    "parent-widget": $props.parentWidget,
    "parent-list": $props.parentList,
    "index-of-parent-list": $props.indexOfParentList,
    "sub-form-row-index": $props.subFormRowIndex,
    "sub-form-col-index": $props.subFormColIndex,
    "sub-form-row-id": $props.subFormRowId
  }, {
    default: withCtx(() => [
      createVNode(_component_el_time_picker, {
        ref: "fieldEditor",
        modelValue: $data.fieldModel,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.fieldModel = $event),
        class: normalizeClass([!!$props.field.options.autoFullWidth ? "auto-full-width" : ""]),
        disabled: $props.field.options.disabled,
        readonly: $props.field.options.readonly,
        size: _ctx.widgetSize,
        clearable: $props.field.options.clearable,
        editable: $props.field.options.editable,
        format: $props.field.options.format,
        "value-format": "HH:mm:ss",
        placeholder: $props.field.options.placeholder || _ctx.$t("render.hint.timePlaceholder"),
        onFocus: _ctx.handleFocusCustomEvent,
        onBlur: _ctx.handleBlurCustomEvent,
        onChange: _ctx.handleChangeEvent
      }, null, 8, ["modelValue", "class", "disabled", "readonly", "size", "clearable", "editable", "format", "placeholder", "onFocus", "onBlur", "onChange"])
    ]),
    _: 1
  }, 8, ["designer", "field", "rules", "design-state", "parent-widget", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
var timeWidget = /* @__PURE__ */ _export_sfc$1(_sfc_main$l, [["render", _sfc_render$l], ["__scopeId", "data-v-4f8b3e9b"]]);
var __glob_0_24 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": timeWidget
}, Symbol.toStringTag, { value: "Module" }));
let comps = {};
const modules$1 = { "./button-widget.vue": __glob_0_0, "./cascader-widget.vue": __glob_0_1$1, "./checkbox-widget.vue": __glob_0_2$1, "./color-widget.vue": __glob_0_3$1, "./date-range-widget.vue": __glob_0_4$1, "./date-widget.vue": __glob_0_5$1, "./divider-widget.vue": __glob_0_6$1, "./file-upload-widget.vue": __glob_0_7, "./form-item-wrapper.vue": __glob_0_8, "./html-text-widget.vue": __glob_0_9, "./input-widget.vue": __glob_0_10, "./number-widget.vue": __glob_0_11, "./picture-upload-widget.vue": __glob_0_12, "./radio-widget.vue": __glob_0_13, "./rate-widget.vue": __glob_0_14, "./rich-editor-widget.vue": __glob_0_15, "./select-widget.vue": __glob_0_16, "./slider-widget.vue": __glob_0_17, "./slot-widget.vue": __glob_0_18, "./static-content-wrapper.vue": __glob_0_19, "./static-text-widget.vue": __glob_0_20, "./switch-widget.vue": __glob_0_21, "./textarea-widget.vue": __glob_0_22, "./time-range-widget.vue": __glob_0_23, "./time-widget.vue": __glob_0_24 };
for (const path in modules$1) {
  let cname = modules$1[path].default.name;
  comps[cname] = modules$1[path].default;
}
var gridColItem_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$k = {
  name: "GridColItem",
  componentName: "ContainerItem",
  mixins: [emitter, i18n$1, refMixin],
  components: __spreadValues({}, comps),
  props: {
    widget: Object,
    parentWidget: Object,
    parentList: Array,
    indexOfParentList: Number,
    colHeight: {
      type: String,
      default: null
    }
  },
  inject: ["refList", "globalModel", "getFormConfig", "previewState"],
  data() {
    return {
      layoutProps: {
        span: this.widget.options.span,
        md: this.widget.options.md || 12,
        sm: this.widget.options.sm || 12,
        xs: this.widget.options.xs || 12,
        offset: this.widget.options.offset || 0,
        push: this.widget.options.push || 0,
        pull: this.widget.options.pull || 0
      }
    };
  },
  computed: {
    formConfig() {
      return this.getFormConfig();
    },
    customClass() {
      return this.widget.options.customClass || "";
    },
    colHeightStyle() {
      return !!this.colHeight ? { height: this.colHeight + "px" } : {};
    }
  },
  created() {
    this.initLayoutProps();
    this.initRefList();
  },
  methods: {
    initLayoutProps() {
      if (!!this.widget.options.responsive) {
        if (!!this.previewState) {
          this.layoutProps.md = void 0;
          this.layoutProps.sm = void 0;
          this.layoutProps.xs = void 0;
          let lyType = this.formConfig.layoutType;
          if (lyType === "H5") {
            this.layoutProps.span = this.widget.options.xs || 12;
          } else if (lyType === "Pad") {
            this.layoutProps.span = this.widget.options.sm || 12;
          } else {
            this.layoutProps.span = this.widget.options.md || 12;
          }
        } else {
          this.layoutProps.span = void 0;
        }
      } else {
        this.layoutProps.md = void 0;
        this.layoutProps.sm = void 0;
        this.layoutProps.xs = void 0;
      }
    }
  }
};
const _hoisted_1$e = { class: "blank-cell" };
const _hoisted_2$c = { class: "invisible-content" };
function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_col = resolveComponent("el-col");
  return withDirectives((openBlock(), createBlock(_component_el_col, mergeProps({
    class: ["grid-cell", [$options.customClass]]
  }, $data.layoutProps, {
    style: $options.colHeightStyle,
    key: $props.widget.id
  }), {
    default: withCtx(() => [
      !!$props.widget.widgetList && $props.widget.widgetList.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList($props.widget.widgetList, (subWidget, swIdx) => {
        return openBlock(), createElementBlock(Fragment, null, [
          subWidget.category === "container" ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.getComponentByContainer(subWidget)), {
            widget: subWidget,
            key: swIdx,
            "parent-list": $props.widget.widgetList,
            "index-of-parent-list": swIdx,
            "parent-widget": $props.widget
          }, createSlots({ _: 2 }, [
            renderList(Object.keys(_ctx.$slots), (slot) => {
              return {
                name: slot,
                fn: withCtx((scope) => [
                  renderSlot(_ctx.$slots, slot, normalizeProps(guardReactiveProps(scope)), void 0, true)
                ])
              };
            })
          ]), 1032, ["widget", "parent-list", "index-of-parent-list", "parent-widget"])) : (openBlock(), createBlock(resolveDynamicComponent(subWidget.type + "-widget"), {
            field: subWidget,
            designer: null,
            key: swIdx,
            "parent-list": $props.widget.widgetList,
            "index-of-parent-list": swIdx,
            "parent-widget": $props.widget
          }, createSlots({ _: 2 }, [
            renderList(Object.keys(_ctx.$slots), (slot) => {
              return {
                name: slot,
                fn: withCtx((scope) => [
                  renderSlot(_ctx.$slots, slot, normalizeProps(guardReactiveProps(scope)), void 0, true)
                ])
              };
            })
          ]), 1032, ["field", "parent-list", "index-of-parent-list", "parent-widget"]))
        ], 64);
      }), 256)) : (openBlock(), createBlock(_component_el_col, { key: 1 }, {
        default: withCtx(() => [
          createElementVNode("div", _hoisted_1$e, [
            createElementVNode("span", _hoisted_2$c, toDisplayString(_ctx.$t("render.hint.blankCellContent")), 1)
          ])
        ]),
        _: 1
      }))
    ]),
    _: 3
  }, 16, ["class", "style"])), [
    [vShow, !$props.widget.options.hidden]
  ]);
}
var GridColItem = /* @__PURE__ */ _export_sfc$1(_sfc_main$k, [["render", _sfc_render$k], ["__scopeId", "data-v-8cecd14e"]]);
var __glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": GridColItem
}, Symbol.toStringTag, { value: "Module" }));
var containerItemMixin = {
  inject: ["getFormConfig", "getGlobalDsv"],
  computed: {
    customClass() {
      return this.widget.options.customClass || "";
    },
    formModel: {
      cache: false,
      get() {
        return this.globalModel.formModel;
      }
    }
  },
  mounted() {
    this.callSetHidden();
  },
  methods: {
    unregisterFromRefList() {
      if (this.refList !== null && !!this.widget.options.name) {
        let oldRefName = this.widget.options.name;
        delete this.refList[oldRefName];
      }
    },
    callSetHidden() {
      if (this.widget.options.hidden === true) {
        this.setHidden(true);
      }
    },
    setHidden(flag) {
      this.widget.options.hidden = flag;
      let clearRulesFn = (fieldWidget) => {
        let fwName = fieldWidget.options.name;
        let fwRef = this.getWidgetRef(fwName);
        if (flag && !!fwRef && !!fwRef.clearFieldRules) {
          fwRef.clearFieldRules();
        }
        if (!flag && !!fwRef && !!fwRef.buildFieldRules) {
          fwRef.buildFieldRules();
        }
      };
      traverseFieldWidgetsOfContainer(this.widget, clearRulesFn);
    },
    activeTab(tabIndex) {
      if (tabIndex >= 0 && tabIndex < this.widget.tabs.length) {
        this.widget.tabs.forEach((tp, idx) => {
          tp.options.active = idx === tabIndex;
          if (idx === tabIndex) {
            this.activeTabName = tp.options.name;
          }
        });
      }
    },
    disableTab(tabIndex) {
      if (tabIndex >= 0 && tabIndex < this.widget.tabs.length) {
        this.widget.tabs[tabIndex].options.disabled = true;
      }
    },
    enableTab(tabIndex) {
      if (tabIndex >= 0 && tabIndex < this.widget.tabs.length) {
        this.widget.tabs[tabIndex].options.disabled = false;
      }
    },
    hideTab(tabIndex) {
      if (tabIndex >= 0 && tabIndex < this.widget.tabs.length) {
        this.widget.tabs[tabIndex].options.hidden = true;
      }
    },
    showTab(tabIndex) {
      if (tabIndex >= 0 && tabIndex < this.widget.tabs.length) {
        this.widget.tabs[tabIndex].options.hidden = false;
      }
    },
    setWidgetOption(optionName, optionValue) {
      if (this.widget.options.hasOwnProperty(optionName)) {
        this.widget.options[optionName] = optionValue;
      }
    },
    getSubFormRowCount() {
      return !this.rowIdData ? 0 : this.rowIdData.length;
    },
    disableSubFormRow(rowIndex) {
      this.widget.widgetList.forEach((subWidget) => {
        let swRefName = subWidget.options.name + "@row" + this.rowIdData[rowIndex];
        let foundSW = this.getWidgetRef(swRefName);
        if (!!foundSW) {
          foundSW.setDisabled(true);
        }
      });
    },
    enableSubFormRow(rowIndex) {
      this.widget.widgetList.forEach((subWidget) => {
        let swRefName = subWidget.options.name + "@row" + this.rowIdData[rowIndex];
        let foundSW = this.getWidgetRef(swRefName);
        if (!!foundSW) {
          foundSW.setDisabled(false);
        }
      });
    },
    disableSubForm() {
      if (this.rowIdData.length > 0) {
        this.rowIdData.forEach((dataRow, rIdx) => {
          this.disableSubFormRow(rIdx);
        });
      }
      this.actionDisabled = true;
    },
    enableSubForm() {
      if (this.rowIdData.length > 0) {
        this.rowIdData.forEach((dataRow, rIdx) => {
          this.enableSubFormRow(rIdx);
        });
      }
      this.actionDisabled = false;
    },
    resetSubForm() {
      if (this.widget.type === "sub-form") {
        let subFormModel = this.formModel[this.widget.options.name];
        if (!!subFormModel) {
          subFormModel.splice(0, subFormModel.length);
          this.rowIdData.splice(0, this.rowIdData.length);
        }
        if (this.widget.options.showBlankRow) {
          this.addSubFormRow();
        }
      }
    },
    getSubFormValues(needValidation = true) {
      if (this.widget.type === "sub-form") {
        return this.formModel[this.widget.options.name];
      } else {
        this.$message.error(this.i18nt("render.hint.nonSubFormType"));
      }
    },
    addCssClass(className) {
      if (!this.widget.options.customClass) {
        this.widget.options.customClass = [className];
      } else {
        this.widget.options.customClass.push(className);
      }
    },
    removeCssClass(className) {
      if (!this.widget.options.customClass) {
        return;
      }
      let foundIdx = -1;
      this.widget.options.customClass.map((cc, idx) => {
        if (cc === className) {
          foundIdx = idx;
        }
      });
      if (foundIdx > -1) {
        this.widget.options.customClass.splice(foundIdx, 1);
      }
    }
  }
};
const _sfc_main$j = {
  name: "vf-grid-item",
  componentName: "ContainerItem",
  mixins: [emitter, i18n$1, refMixin, containerItemMixin],
  components: {
    ContainerItemWrapper,
    GridColItem
  },
  props: {
    widget: Object
  },
  inject: ["refList", "sfRefList", "globalModel"],
  created() {
    this.initRefList();
  },
  mounted() {
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  },
  methods: {}
};
function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_grid_col_item = resolveComponent("grid-col-item");
  const _component_el_row = resolveComponent("el-row");
  const _component_container_item_wrapper = resolveComponent("container-item-wrapper");
  return openBlock(), createBlock(_component_container_item_wrapper, { widget: $props.widget }, {
    default: withCtx(() => [
      withDirectives((openBlock(), createBlock(_component_el_row, {
        key: $props.widget.id,
        gutter: $props.widget.options.gutter,
        class: normalizeClass(["grid-container", [_ctx.customClass]]),
        ref: $props.widget.id
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList($props.widget.cols, (colWidget, colIdx) => {
            return openBlock(), createBlock(_component_grid_col_item, {
              key: colIdx,
              widget: colWidget,
              "parent-list": $props.widget.cols,
              "index-of-parent-list": colIdx,
              "parent-widget": $props.widget,
              "col-height": $props.widget.options.colHeight
            }, createSlots({ _: 2 }, [
              renderList(Object.keys(_ctx.$slots), (slot) => {
                return {
                  name: slot,
                  fn: withCtx((scope) => [
                    renderSlot(_ctx.$slots, slot, normalizeProps(guardReactiveProps(scope)))
                  ])
                };
              })
            ]), 1032, ["widget", "parent-list", "index-of-parent-list", "parent-widget", "col-height"]);
          }), 128))
        ]),
        _: 3
      }, 8, ["gutter", "class"])), [
        [vShow, !$props.widget.options.hidden]
      ])
    ]),
    _: 3
  }, 8, ["widget"]);
}
var gridItem = /* @__PURE__ */ _export_sfc$1(_sfc_main$j, [["render", _sfc_render$j]]);
var __glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": gridItem
}, Symbol.toStringTag, { value: "Module" }));
var subFormItem_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$i = {
  name: "sub-form-item",
  componentName: "ContainerItem",
  mixins: [emitter, i18n$1, refMixin, containerItemMixin],
  components: __spreadProps(__spreadValues({
    ContainerItemWrapper
  }, comps), {
    SvgIcon
  }),
  props: {
    widget: Object
  },
  inject: ["refList", "sfRefList", "globalModel"],
  data() {
    return {
      rowIdData: [],
      fieldSchemaData: [],
      actionDisabled: false
    };
  },
  created() {
    this.initRefList();
    this.registerSubFormToRefList();
    this.initRowIdData(true);
    this.initFieldSchemaData();
    this.initEventHandler();
  },
  mounted() {
    this.handleSubFormFirstRowAdd();
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  },
  methods: {
    getLabelAlign(widget, subWidget) {
      return subWidget.options.labelAlign || widget.options.labelAlign;
    },
    registerSubFormToRefList() {
      if (this.widget.type === "sub-form") {
        this.sfRefList[this.widget.options.name] = this;
      }
    },
    initRowIdData(initFlag) {
      if (this.widget.type === "sub-form") {
        this.rowIdData.splice(0, this.rowIdData.length);
        let subFormModel = this.formModel[this.widget.options.name];
        if (!!subFormModel && subFormModel.length > 0) {
          subFormModel.forEach(() => {
            this.rowIdData.push("id" + generateId());
          });
          if (!!initFlag) {
            setTimeout(() => {
              this.handleSubFormRowChange(subFormModel);
            }, 800);
          }
        }
      }
    },
    addToRowIdData() {
      this.rowIdData.push("id" + generateId());
    },
    insertToRowIdData(rowIndex) {
      this.rowIdData.splice(rowIndex, 0, "id" + generateId());
    },
    deleteFromRowIdData(rowIndex) {
      this.rowIdData.splice(rowIndex, 1);
    },
    getRowIdData() {
      return this.rowIdData;
    },
    getWidgetRefOfSubForm(widgetName, rowIndex) {
      let realWidgetName = widgetName + "@row" + this.rowIdData[rowIndex];
      return this.getWidgetRef(realWidgetName);
    },
    initFieldSchemaData() {
      if (this.widget.type !== "sub-form") {
        return;
      }
      let rowLength = this.rowIdData.length;
      this.fieldSchemaData.splice(0, this.fieldSchemaData.length);
      if (rowLength > 0) {
        for (let i = 0; i < rowLength; i++) {
          let fieldSchemas = [];
          this.widget.widgetList.forEach((swItem) => {
            fieldSchemas.push(this.cloneFieldSchema(swItem));
          });
          this.fieldSchemaData.push(fieldSchemas);
        }
      }
    },
    addToFieldSchemaData(rowIndex) {
      let fieldSchemas = [];
      this.widget.widgetList.forEach((swItem) => {
        fieldSchemas.push(this.cloneFieldSchema(swItem));
      });
      if (rowIndex === void 0) {
        this.fieldSchemaData.push(fieldSchemas);
      } else {
        this.fieldSchemaData.splice(rowIndex, 0, fieldSchemas);
      }
    },
    deleteFromFieldSchemaData(rowIndex) {
      this.fieldSchemaData.splice(rowIndex, 1);
    },
    cloneFieldSchema(fieldWidget) {
      let newFieldSchema = deepClone(fieldWidget);
      newFieldSchema.id = fieldWidget.type + generateId();
      return newFieldSchema;
    },
    initEventHandler() {
      if (this.widget.type !== "sub-form") {
        return;
      }
      this.on$("setFormData", (newFormData) => {
        this.initRowIdData(false);
        this.initFieldSchemaData();
        let subFormData = newFormData[this.widget.options.name] || [];
        setTimeout(() => {
          this.handleSubFormRowChange(subFormData);
        }, 800);
      });
    },
    handleSubFormFirstRowAdd() {
      if (this.widget.type !== "sub-form") {
        return;
      }
      if (!!this.widget.options.showBlankRow && this.rowIdData.length === 1) {
        let oldSubFormData = this.formModel[this.widget.options.name] || [];
        this.handleSubFormRowAdd(oldSubFormData, this.rowIdData[0]);
        this.handleSubFormRowChange(oldSubFormData);
      }
    },
    addSubFormRow() {
      let newSubFormDataRow = {};
      this.widget.widgetList.forEach((subFormItem2) => {
        if (!!subFormItem2.formItemFlag) {
          newSubFormDataRow[subFormItem2.options.name] = subFormItem2.options.defaultValue;
        }
      });
      let oldSubFormData = this.formModel[this.widget.options.name] || [];
      oldSubFormData.push(newSubFormDataRow);
      this.addToRowIdData();
      this.addToFieldSchemaData();
      this.handleSubFormRowAdd(oldSubFormData, this.rowIdData[oldSubFormData.length - 1]);
      this.handleSubFormRowChange(oldSubFormData);
    },
    insertSubFormRow(beforeFormRowIndex) {
      let newSubFormDataRow = {};
      this.widget.widgetList.forEach((subFormItem2) => {
        if (!!subFormItem2.formItemFlag) {
          newSubFormDataRow[subFormItem2.options.name] = subFormItem2.options.defaultValue;
        }
      });
      let oldSubFormData = this.formModel[this.widget.options.name] || [];
      oldSubFormData.splice(beforeFormRowIndex, 0, newSubFormDataRow);
      this.insertToRowIdData(beforeFormRowIndex);
      this.addToFieldSchemaData(beforeFormRowIndex);
      this.handleSubFormRowInsert(oldSubFormData, this.rowIdData[beforeFormRowIndex]);
      this.handleSubFormRowChange(oldSubFormData);
    },
    deleteSubFormRow(formRowIndex) {
      this.$confirm(this.$t("render.hint.deleteSubFormRow") + "?", this.$t("render.hint.prompt"), {
        confirmButtonText: this.$t("render.hint.confirm"),
        cancelButtonText: this.$t("render.hint.cancel")
      }).then(() => {
        let oldSubFormData = this.formModel[this.widget.options.name] || [];
        let deletedDataRow = deepClone(oldSubFormData[formRowIndex]);
        oldSubFormData.splice(formRowIndex, 1);
        this.deleteFromRowIdData(formRowIndex);
        this.deleteFromFieldSchemaData(formRowIndex);
        this.handleSubFormRowDelete(oldSubFormData, deletedDataRow);
        this.handleSubFormRowChange(oldSubFormData);
      }).catch(() => {
      });
    },
    handleSubFormRowChange(subFormData) {
      if (!!this.widget.options.onSubFormRowChange) {
        let customFunc = new Function("subFormData", this.widget.options.onSubFormRowChange);
        customFunc.call(this, subFormData);
      }
    },
    handleSubFormRowAdd(subFormData, newRowId) {
      if (!!this.widget.options.onSubFormRowAdd) {
        let customFunc = new Function("subFormData", "newRowId", this.widget.options.onSubFormRowAdd);
        customFunc.call(this, subFormData, newRowId);
      }
    },
    handleSubFormRowInsert(subFormData, newRowId) {
      if (!!this.widget.options.onSubFormRowInsert) {
        let customFunc = new Function("subFormData", "newRowId", this.widget.options.onSubFormRowInsert);
        customFunc.call(this, subFormData, newRowId);
      }
    },
    handleSubFormRowDelete(subFormData, deletedDataRow) {
      if (!!this.widget.options.onSubFormRowDelete) {
        let customFunc = new Function("subFormData", "deletedDataRow", this.widget.options.onSubFormRowDelete);
        customFunc.call(this, subFormData, deletedDataRow);
      }
    }
  }
};
const _hoisted_1$d = { class: "action-header-column" };
const _hoisted_2$b = { class: "action-label" };
const _hoisted_3$a = {
  key: 0,
  class: "custom-label"
};
const _hoisted_4$3 = ["title"];
const _hoisted_5$2 = { class: "sub-form-action-column hide-label" };
const _hoisted_6$1 = { class: "action-button-column" };
const _hoisted_7$1 = {
  key: 0,
  class: "row-number-span"
};
function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_svg_icon = resolveComponent("svg-icon");
  const _component_el_button = resolveComponent("el-button");
  const _component_el_tooltip = resolveComponent("el-tooltip");
  const _component_el_row = resolveComponent("el-row");
  const _component_container_item_wrapper = resolveComponent("container-item-wrapper");
  return openBlock(), createBlock(_component_container_item_wrapper, { widget: $props.widget }, {
    default: withCtx(() => [
      withDirectives((openBlock(), createElementBlock("div", {
        key: $props.widget.id,
        class: "sub-form-container"
      }, [
        createVNode(_component_el_row, { class: "header-row" }, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_1$d, [
              createElementVNode("span", _hoisted_2$b, toDisplayString(_ctx.$t("render.hint.subFormAction")), 1),
              createVNode(_component_el_button, {
                disabled: $data.actionDisabled,
                round: "",
                type: "primary",
                size: "small",
                class: "action-button",
                onClick: $options.addSubFormRow,
                title: _ctx.$t("render.hint.subFormAddActionHint")
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("render.hint.subFormAddAction")), 1),
                  createVNode(_component_svg_icon, { "icon-class": "el-plus" })
                ]),
                _: 1
              }, 8, ["disabled", "onClick", "title"])
            ]),
            (openBlock(true), createElementBlock(Fragment, null, renderList($props.widget.widgetList, (subWidget) => {
              return openBlock(), createElementBlock("div", {
                key: subWidget.id + "thc",
                class: normalizeClass(["field-header-column", [$options.getLabelAlign($props.widget, subWidget), !!subWidget.options.required ? "is-required" : ""]]),
                style: normalizeStyle({ width: subWidget.options.columnWidth })
              }, [
                !!subWidget.options.labelIconClass ? (openBlock(), createElementBlock("span", _hoisted_3$a, [
                  subWidget.options.labelIconPosition === "front" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    !!subWidget.options.labelTooltip ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      createVNode(_component_el_tooltip, {
                        content: subWidget.options.labelTooltip,
                        effect: "light"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_svg_icon, {
                            "icon-class": subWidget.options.labelIconClass
                          }, null, 8, ["icon-class"])
                        ]),
                        _: 2
                      }, 1032, ["content"]),
                      createTextVNode(toDisplayString(subWidget.options.label), 1)
                    ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                      createVNode(_component_svg_icon, {
                        "icon-class": subWidget.options.labelIconClass
                      }, null, 8, ["icon-class"]),
                      createTextVNode(toDisplayString(subWidget.options.label), 1)
                    ], 64))
                  ], 64)) : subWidget.options.labelIconPosition === "rear" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    !!subWidget.options.labelTooltip ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      createTextVNode(toDisplayString(subWidget.options.label), 1),
                      createVNode(_component_el_tooltip, {
                        content: subWidget.options.labelTooltip,
                        effect: "light"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_svg_icon, {
                            "icon-class": subWidget.options.labelIconClass
                          }, null, 8, ["icon-class"])
                        ]),
                        _: 2
                      }, 1032, ["content"])
                    ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                      createTextVNode(toDisplayString(subWidget.options.label), 1),
                      createVNode(_component_svg_icon, {
                        "icon-class": subWidget.options.labelIconClass
                      }, null, 8, ["icon-class"])
                    ], 64))
                  ], 64)) : createCommentVNode("", true)
                ])) : (openBlock(), createElementBlock("span", {
                  key: 1,
                  title: subWidget.options.labelTooltip
                }, toDisplayString(subWidget.options.label), 9, _hoisted_4$3))
              ], 6);
            }), 128))
          ]),
          _: 1
        }),
        (openBlock(true), createElementBlock(Fragment, null, renderList($data.rowIdData, (subFormRowId, sfrIdx) => {
          return openBlock(), createBlock(_component_el_row, {
            class: "sub-form-row",
            key: subFormRowId
          }, {
            default: withCtx(() => [
              createElementVNode("div", _hoisted_5$2, [
                createElementVNode("div", _hoisted_6$1, [
                  createVNode(_component_el_button, {
                    disabled: $data.actionDisabled,
                    circle: "",
                    onClick: ($event) => $options.insertSubFormRow(sfrIdx),
                    title: _ctx.$t("render.hint.insertSubFormRow")
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_svg_icon, { "icon-class": "el-plus" })
                    ]),
                    _: 2
                  }, 1032, ["disabled", "onClick", "title"]),
                  createVNode(_component_el_button, {
                    disabled: $data.actionDisabled,
                    circle: "",
                    onClick: ($event) => $options.deleteSubFormRow(sfrIdx),
                    title: _ctx.$t("render.hint.deleteSubFormRow")
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_svg_icon, { "icon-class": "el-delete" })
                    ]),
                    _: 2
                  }, 1032, ["disabled", "onClick", "title"]),
                  $props.widget.options.showRowNumber ? (openBlock(), createElementBlock("span", _hoisted_7$1, "#" + toDisplayString(sfrIdx + 1), 1)) : createCommentVNode("", true)
                ])
              ]),
              (openBlock(true), createElementBlock(Fragment, null, renderList($props.widget.widgetList, (subWidget, swIdx) => {
                return openBlock(), createElementBlock("div", {
                  key: subWidget.id + "tc" + subFormRowId,
                  class: "sub-form-table-column hide-label",
                  style: normalizeStyle({ width: subWidget.options.columnWidth })
                }, [
                  (openBlock(), createBlock(resolveDynamicComponent(subWidget.type + "-widget"), {
                    field: $data.fieldSchemaData[sfrIdx][swIdx],
                    key: $data.fieldSchemaData[sfrIdx][swIdx].id,
                    "parent-list": $props.widget.widgetList,
                    "index-of-parent-list": swIdx,
                    "parent-widget": $props.widget,
                    "sub-form-row-id": subFormRowId,
                    "sub-form-row-index": sfrIdx,
                    "sub-form-col-index": swIdx
                  }, null, 8, ["field", "parent-list", "index-of-parent-list", "parent-widget", "sub-form-row-id", "sub-form-row-index", "sub-form-col-index"]))
                ], 4);
              }), 128))
            ]),
            _: 2
          }, 1024);
        }), 128))
      ])), [
        [vShow, !$props.widget.options.hidden]
      ])
    ]),
    _: 1
  }, 8, ["widget"]);
}
var subFormItem = /* @__PURE__ */ _export_sfc$1(_sfc_main$i, [["render", _sfc_render$i], ["__scopeId", "data-v-0391bfba"]]);
var __glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": subFormItem
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$h = {
  name: "tab-item",
  componentName: "ContainerItem",
  mixins: [emitter, i18n$1, refMixin, containerItemMixin],
  components: __spreadValues({
    ContainerItemWrapper
  }, comps),
  props: {
    widget: Object
  },
  inject: ["refList", "sfRefList", "globalModel"],
  data() {
    return {
      activeTabName: ""
    };
  },
  computed: {
    visibleTabs() {
      return this.widget.tabs.filter((tp) => {
        return !tp.options.hidden;
      });
    }
  },
  created() {
    this.initRefList();
  },
  mounted() {
    this.initActiveTab();
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  },
  methods: {
    initActiveTab() {
      if (this.widget.type === "tab" && this.widget.tabs.length > 0) {
        let activePanes = this.widget.tabs.filter((tp) => {
          return tp.options.active === true;
        });
        if (activePanes.length > 0) {
          this.activeTabName = activePanes[0].options.name;
        } else {
          this.activeTabName = this.widget.tabs[0].options.name;
        }
      }
    }
  }
};
function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tab_pane = resolveComponent("el-tab-pane");
  const _component_el_tabs = resolveComponent("el-tabs");
  const _component_container_item_wrapper = resolveComponent("container-item-wrapper");
  return openBlock(), createBlock(_component_container_item_wrapper, { widget: $props.widget }, {
    default: withCtx(() => [
      withDirectives((openBlock(), createElementBlock("div", {
        key: $props.widget.id,
        class: "tab-container"
      }, [
        createVNode(_component_el_tabs, {
          modelValue: $data.activeTabName,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.activeTabName = $event),
          type: $props.widget.displayType,
          ref: $props.widget.id,
          class: normalizeClass([_ctx.customClass])
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList($options.visibleTabs, (tab, index) => {
              return openBlock(), createBlock(_component_el_tab_pane, {
                key: index,
                label: tab.options.label,
                disabled: tab.options.disabled,
                name: tab.options.name
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(tab.widgetList, (subWidget, swIdx) => {
                    return openBlock(), createElementBlock(Fragment, null, [
                      subWidget.category === "container" ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.getComponentByContainer(subWidget)), {
                        widget: subWidget,
                        key: swIdx,
                        "parent-list": tab.widgetList,
                        "index-of-parent-list": swIdx,
                        "parent-widget": $props.widget
                      }, createSlots({ _: 2 }, [
                        renderList(Object.keys(_ctx.$slots), (slot) => {
                          return {
                            name: slot,
                            fn: withCtx((scope) => [
                              renderSlot(_ctx.$slots, slot, normalizeProps(guardReactiveProps(scope)))
                            ])
                          };
                        })
                      ]), 1032, ["widget", "parent-list", "index-of-parent-list", "parent-widget"])) : (openBlock(), createBlock(resolveDynamicComponent(subWidget.type + "-widget"), {
                        field: subWidget,
                        key: swIdx,
                        "parent-list": tab.widgetList,
                        "index-of-parent-list": swIdx,
                        "parent-widget": $props.widget
                      }, createSlots({ _: 2 }, [
                        renderList(Object.keys(_ctx.$slots), (slot) => {
                          return {
                            name: slot,
                            fn: withCtx((scope) => [
                              renderSlot(_ctx.$slots, slot, normalizeProps(guardReactiveProps(scope)))
                            ])
                          };
                        })
                      ]), 1032, ["field", "parent-list", "index-of-parent-list", "parent-widget"]))
                    ], 64);
                  }), 256))
                ]),
                _: 2
              }, 1032, ["label", "disabled", "name"]);
            }), 128))
          ]),
          _: 3
        }, 8, ["modelValue", "type", "class"])
      ])), [
        [vShow, !$props.widget.options.hidden]
      ])
    ]),
    _: 3
  }, 8, ["widget"]);
}
var tabItem = /* @__PURE__ */ _export_sfc$1(_sfc_main$h, [["render", _sfc_render$h]]);
var __glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": tabItem
}, Symbol.toStringTag, { value: "Module" }));
var tableCellItem_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$g = {
  name: "TableCellItem",
  componentName: "ContainerItem",
  mixins: [emitter, i18n$1, refMixin],
  components: __spreadValues({}, comps),
  props: {
    widget: Object,
    rowIndex: Number,
    colIndex: Number
  },
  inject: ["refList", "globalModel"],
  computed: {
    customClass() {
      return this.widget.options.customClass || "";
    }
  },
  created() {
  },
  methods: {}
};
const _hoisted_1$c = ["colspan", "rowspan"];
function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("td", {
    class: normalizeClass(["table-cell", [$options.customClass]]),
    colspan: $props.widget.options.colspan || 1,
    rowspan: $props.widget.options.rowspan || 1,
    style: normalizeStyle({ width: $props.widget.options.cellWidth + " !important" || "", height: $props.widget.options.cellHeight + " !important" || "" })
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($props.widget.widgetList, (subWidget, swIdx) => {
      return openBlock(), createElementBlock(Fragment, null, [
        subWidget.category === "container" ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.getComponentByContainer(subWidget)), {
          widget: subWidget,
          key: swIdx,
          "parent-list": $props.widget.widgetList,
          "index-of-parent-list": swIdx,
          "parent-widget": $props.widget
        }, createSlots({ _: 2 }, [
          renderList(Object.keys(_ctx.$slots), (slot) => {
            return {
              name: slot,
              fn: withCtx((scope) => [
                renderSlot(_ctx.$slots, slot, normalizeProps(guardReactiveProps(scope)), void 0, true)
              ])
            };
          })
        ]), 1032, ["widget", "parent-list", "index-of-parent-list", "parent-widget"])) : (openBlock(), createBlock(resolveDynamicComponent(subWidget.type + "-widget"), {
          field: subWidget,
          key: swIdx,
          "parent-list": $props.widget.widgetList,
          "index-of-parent-list": swIdx,
          "parent-widget": $props.widget
        }, createSlots({ _: 2 }, [
          renderList(Object.keys(_ctx.$slots), (slot) => {
            return {
              name: slot,
              fn: withCtx((scope) => [
                renderSlot(_ctx.$slots, slot, normalizeProps(guardReactiveProps(scope)), void 0, true)
              ])
            };
          })
        ]), 1032, ["field", "parent-list", "index-of-parent-list", "parent-widget"]))
      ], 64);
    }), 256))
  ], 14, _hoisted_1$c);
}
var TableCellItem = /* @__PURE__ */ _export_sfc$1(_sfc_main$g, [["render", _sfc_render$g], ["__scopeId", "data-v-ecf77248"]]);
var __glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": TableCellItem
}, Symbol.toStringTag, { value: "Module" }));
var tableItem_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$f = {
  name: "table-item",
  componentName: "ContainerItem",
  mixins: [emitter, i18n$1, refMixin, containerItemMixin],
  components: {
    ContainerItemWrapper,
    TableCellItem
  },
  props: {
    widget: Object
  },
  inject: ["refList", "sfRefList", "globalModel"],
  created() {
    this.initRefList();
  },
  mounted() {
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  },
  methods: {}
};
function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_table_cell_item = resolveComponent("table-cell-item");
  const _component_container_item_wrapper = resolveComponent("container-item-wrapper");
  return openBlock(), createBlock(_component_container_item_wrapper, { widget: $props.widget }, {
    default: withCtx(() => [
      withDirectives((openBlock(), createElementBlock("div", {
        key: $props.widget.id,
        class: "table-container"
      }, [
        createElementVNode("table", {
          ref: $props.widget.id,
          class: normalizeClass(["table-layout", [_ctx.customClass]])
        }, [
          createElementVNode("tbody", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($props.widget.rows, (row, rowIdx) => {
              return openBlock(), createElementBlock("tr", {
                key: row.id
              }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(row.cols, (colWidget, colIdx) => {
                  return openBlock(), createElementBlock(Fragment, null, [
                    !colWidget.merged ? (openBlock(), createBlock(_component_table_cell_item, {
                      widget: colWidget,
                      key: colIdx,
                      "parent-list": $props.widget.cols,
                      "row-index": rowIdx,
                      "col-index": colIdx,
                      "parent-widget": $props.widget
                    }, createSlots({ _: 2 }, [
                      renderList(Object.keys(_ctx.$slots), (slot) => {
                        return {
                          name: slot,
                          fn: withCtx((scope) => [
                            renderSlot(_ctx.$slots, slot, normalizeProps(guardReactiveProps(scope)), void 0, true)
                          ])
                        };
                      })
                    ]), 1032, ["widget", "parent-list", "row-index", "col-index", "parent-widget"])) : createCommentVNode("", true)
                  ], 64);
                }), 256))
              ]);
            }), 128))
          ])
        ], 2)
      ])), [
        [vShow, !$props.widget.options.hidden]
      ])
    ]),
    _: 3
  }, 8, ["widget"]);
}
var tableItem = /* @__PURE__ */ _export_sfc$1(_sfc_main$f, [["render", _sfc_render$f], ["__scopeId", "data-v-656b4452"]]);
var __glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": tableItem
}, Symbol.toStringTag, { value: "Module" }));
const modules = { "./container-item-wrapper.vue": __glob_0_0$1, "./grid-col-item.vue": __glob_0_1, "./grid-item.vue": __glob_0_2, "./sub-form-item.vue": __glob_0_3, "./tab-item.vue": __glob_0_4, "./table-cell-item.vue": __glob_0_5, "./table-item.vue": __glob_0_6 };
var ContainerItems = {
  install(app) {
    for (const path in modules) {
      let cname = modules[path].default.name;
      app.component(cname, modules[path].default);
    }
  }
};
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$e = {
  name: "VFormRender",
  componentName: "VFormRender",
  mixins: [emitter, i18n$1],
  components: __spreadValues({}, comps),
  props: {
    formJson: {
      type: Object,
      default: () => buildDefaultFormJson()
    },
    formData: {
      type: Object,
      default: () => ({})
    },
    optionData: {
      type: Object,
      default: () => ({})
    },
    previewState: {
      type: Boolean,
      default: false
    },
    globalDsv: {
      type: Object,
      default: () => ({})
    }
  },
  provide() {
    return {
      refList: this.widgetRefList,
      sfRefList: this.subFormRefList,
      getFormConfig: () => this.formJsonObj.formConfig,
      getGlobalDsv: () => this.globalDsv,
      globalOptionData: this.optionData,
      getOptionData: () => this.optionData,
      globalModel: {
        formModel: this.formDataModel
      },
      previewState: this.previewState
    };
  },
  data() {
    return {
      formJsonObj: this.formJson,
      formDataModel: {},
      widgetRefList: {},
      subFormRefList: {},
      formId: null,
      externalComponents: {}
    };
  },
  computed: {
    formConfig() {
      return this.formJsonObj.formConfig;
    },
    widgetList() {
      return this.formJsonObj.widgetList;
    },
    labelPosition() {
      if (!!this.formConfig && !!this.formConfig.labelPosition) {
        return this.formConfig.labelPosition;
      }
      return "left";
    },
    labelWidth() {
      if (!!this.formConfig && !!this.formConfig.labelWidth) {
        return this.formConfig.labelWidth + "px";
      }
      return "80px";
    },
    size() {
      if (!!this.formConfig && !!this.formConfig.size) {
        return this.formConfig.size;
      }
      return "default";
    },
    customClass() {
      return !!this.formConfig && !!this.formConfig.customClass ? this.formConfig.customClass : "";
    }
  },
  watch: {},
  created() {
    this.buildFormModel(!this.formJsonObj ? null : this.formJsonObj.widgetList);
    this.initFormObject();
  },
  mounted() {
    this.initLocale();
    this.handleOnMounted();
  },
  methods: {
    initFormObject(insertHtmlCodeFlag = true) {
      this.formId = "vfRender" + generateId();
      if (!!insertHtmlCodeFlag) {
        this.insertCustomStyleAndScriptNode();
      }
      this.addFieldChangeEventHandler();
      this.addFieldValidateEventHandler();
      this.addFilePreviewEventHandler();
      this.registerFormToRefList();
      this.handleOnCreated();
    },
    getContainerWidgetName(widget) {
      if (widget.type === "grid") {
        return "vf-grid-item";
      }
      return widget.type + "-item";
    },
    getWidgetName(widget) {
      return widget.type + "-widget";
    },
    initLocale() {
      let curLocale = localStorage.getItem("v_form_locale") || "zh-CN";
      this.changeLanguage(curLocale);
    },
    insertCustomStyleAndScriptNode() {
      if (!!this.formConfig && !!this.formConfig.cssCode) {
        insertCustomCssToHead(this.formConfig.cssCode, !!this.previewState ? "" : this.formId);
      }
      if (!!this.formConfig && !!this.formConfig.functions) {
        insertGlobalFunctionsToHtml(this.formConfig.functions, !!this.previewState ? "" : this.formId);
      }
    },
    buildFormModel(widgetList) {
      if (!!widgetList && widgetList.length > 0) {
        widgetList.forEach((wItem) => {
          this.buildDataFromWidget(wItem);
        });
      }
    },
    buildDataFromWidget(wItem) {
      if (wItem.category === "container") {
        if (wItem.type === "grid") {
          if (!!wItem.cols && wItem.cols.length > 0) {
            wItem.cols.forEach((childItem) => {
              this.buildDataFromWidget(childItem);
            });
          }
        } else if (wItem.type === "table") {
          if (!!wItem.rows && wItem.rows.length > 0) {
            wItem.rows.forEach((rowItem) => {
              if (!!rowItem.cols && rowItem.cols.length > 0) {
                rowItem.cols.forEach((colItem) => {
                  this.buildDataFromWidget(colItem);
                });
              }
            });
          }
        } else if (wItem.type === "tab") {
          if (!!wItem.tabs && wItem.tabs.length > 0) {
            wItem.tabs.forEach((tabItem2) => {
              if (!!tabItem2.widgetList && tabItem2.widgetList.length > 0) {
                tabItem2.widgetList.forEach((childItem) => {
                  this.buildDataFromWidget(childItem);
                });
              }
            });
          }
        } else if (wItem.type === "sub-form") {
          let subFormName = wItem.options.name;
          if (!this.formData.hasOwnProperty(subFormName)) {
            let subFormDataRow = {};
            if (wItem.options.showBlankRow) {
              wItem.widgetList.forEach((subFormItem2) => {
                if (!!subFormItem2.formItemFlag) {
                  subFormDataRow[subFormItem2.options.name] = subFormItem2.options.defaultValue;
                }
              });
              this.formDataModel[subFormName] = [subFormDataRow];
            } else {
              this.formDataModel[subFormName] = [];
            }
          } else {
            let initialValue = this.formData[subFormName];
            this.formDataModel[subFormName] = deepClone(initialValue);
          }
        } else if (wItem.type === "grid-col" || wItem.type === "table-cell") {
          if (!!wItem.widgetList && wItem.widgetList.length > 0) {
            wItem.widgetList.forEach((childItem) => {
              this.buildDataFromWidget(childItem);
            });
          }
        } else {
          if (!!wItem.widgetList && wItem.widgetList.length > 0) {
            wItem.widgetList.forEach((childItem) => {
              this.buildDataFromWidget(childItem);
            });
          }
        }
      } else if (!!wItem.formItemFlag) {
        if (!this.formData.hasOwnProperty(wItem.options.name)) {
          this.formDataModel[wItem.options.name] = wItem.options.defaultValue;
        } else {
          let initialValue = this.formData[wItem.options.name];
          this.formDataModel[wItem.options.name] = deepClone(initialValue);
        }
      }
    },
    addFieldChangeEventHandler() {
      this.off$("fieldChange");
      this.on$("fieldChange", (fieldName, newValue, oldValue, subFormName, subFormRowIndex) => {
        this.handleFieldDataChange(fieldName, newValue, oldValue, subFormName, subFormRowIndex);
        this.$emit("formChange", fieldName, newValue, oldValue, this.formDataModel, subFormName, subFormRowIndex);
      });
    },
    addFieldValidateEventHandler() {
      this.off$("fieldValidation");
      this.on$("fieldValidation", (fieldName) => {
        this.$refs.renderForm.validateField(fieldName);
      });
    },
    addFilePreviewEventHandler() {
      this.off$("filePreview");
      this.on$("filePreview", (file) => {
        this.$emit("filePreview", file);
      });
    },
    registerFormToRefList() {
      this.widgetRefList["v_form_ref"] = this;
    },
    handleFieldDataChange(fieldName, newValue, oldValue, subFormName, subFormRowIndex) {
      if (!!this.formConfig && !!this.formConfig.onFormDataChange) {
        let customFunc = new Function("fieldName", "newValue", "oldValue", "formModel", "subFormName", "subFormRowIndex", this.formConfig.onFormDataChange);
        customFunc.call(this, fieldName, newValue, oldValue, this.formDataModel, subFormName, subFormRowIndex);
      }
    },
    handleOnCreated() {
      if (!!this.formConfig && !!this.formConfig.onFormCreated) {
        let customFunc = new Function(this.formConfig.onFormCreated);
        customFunc.call(this);
      }
    },
    handleOnMounted() {
      if (!!this.formConfig && !!this.formConfig.onFormMounted) {
        let customFunc = new Function(this.formConfig.onFormMounted);
        customFunc.call(this);
      }
    },
    findWidgetAndSetDisabled(widgetName, disabledFlag) {
      let foundW = this.getWidgetRef(widgetName);
      if (!!foundW) {
        foundW.setDisabled(disabledFlag);
      } else {
        this.findWidgetOfSubFormAndSetDisabled(widgetName, disabledFlag);
      }
    },
    findWidgetOfSubFormAndSetDisabled(widgetName, disabledFlag) {
      this.findWidgetNameInSubForm(widgetName).forEach((wn) => {
        let sw = this.getWidgetRef(wn);
        if (!!sw) {
          sw.setDisabled(disabledFlag);
        }
      });
    },
    findWidgetAndSetHidden(widgetName, hiddenFlag) {
      let foundW = this.getWidgetRef(widgetName);
      if (!!foundW) {
        foundW.setHidden(hiddenFlag);
      } else {
        this.findWidgetOfSubFormAndSetHidden(widgetName, hiddenFlag);
      }
    },
    findWidgetOfSubFormAndSetHidden(widgetName, hiddenFlag) {
      this.findWidgetNameInSubForm(widgetName).forEach((wn) => {
        let sw = this.getWidgetRef(wn);
        if (!!sw) {
          sw.setHidden(hiddenFlag);
        }
      });
    },
    findWidgetNameInSubForm(widgetName) {
      let result = [];
      let subFormName = null;
      let handlerFn = (field, parent) => {
        if (!!field.options && field.options.name === widgetName) {
          subFormName = parent.options.name;
        }
      };
      traverseFieldWidgets(this.widgetList, handlerFn);
      if (!!subFormName) {
        let subFormRef = this.getWidgetRef(subFormName);
        if (!!subFormRef) {
          let rowIds = subFormRef.getRowIdData();
          if (!!rowIds && rowIds.length > 0) {
            rowIds.forEach((rid) => {
              result.push(widgetName + "@row" + rid);
            });
          }
        }
      }
      return result;
    },
    changeLanguage(langName) {
      changeLocale(langName);
    },
    getNativeForm() {
      return this.$refs["renderForm"];
    },
    getFormRef() {
      return this;
    },
    getWidgetRef(widgetName, showError = false) {
      let foundRef = this.widgetRefList[widgetName];
      if (!foundRef && !!showError) {
        this.$message.error(this.$t("render.hint.refNotFound") + widgetName);
      }
      return foundRef;
    },
    clearFormDataModel() {
      for (let pkey in this.formDataModel) {
        delete this.formDataModel[pkey];
      }
    },
    setFormJson(newFormJson) {
      if (!!newFormJson) {
        if (typeof newFormJson === "string" || newFormJson.constructor === Object) {
          let newFormJsonObj = null;
          if (typeof newFormJson === "string") {
            newFormJsonObj = JSON.parse(newFormJson);
          } else {
            newFormJsonObj = newFormJson;
          }
          if (!newFormJsonObj.formConfig || !newFormJsonObj.widgetList) {
            this.$message.error("Invalid format of form json.");
            return;
          }
          this.clearFormDataModel();
          this.buildFormModel(newFormJsonObj.widgetList);
          this.formJsonObj["formConfig"] = newFormJsonObj.formConfig;
          this.formJsonObj["widgetList"] = newFormJsonObj.widgetList;
          this.insertCustomStyleAndScriptNode();
          this.$nextTick(() => {
            this.initFormObject(false);
            this.handleOnMounted();
          });
        } else {
          this.$message.error("Set form json failed.");
        }
      }
    },
    reloadOptionData(widgetNames) {
      let eventParams = [];
      if (!!widgetNames && typeof widgetNames === "string") {
        eventParams = [widgetNames];
      } else if (!!widgetNames && Array.isArray(widgetNames)) {
        eventParams = [...widgetNames];
      }
      this.broadcast("FieldWidget", "reloadOptionItems", eventParams);
    },
    getFormData(needValidation = true) {
      if (!needValidation) {
        return this.formDataModel;
      }
      let callback2 = function nullFunc() {
      };
      let promise = new window.Promise(function(resolve, reject) {
        callback2 = function(formData, error) {
          !error ? resolve(formData) : reject(error);
        };
      });
      this.$refs["renderForm"].validate((valid) => {
        if (valid) {
          callback2(this.formDataModel);
        } else {
          callback2(this.formDataModel, this.$t("render.hint.validationFailed"));
        }
      });
      return promise;
    },
    setFormData(formData) {
      Object.keys(this.formDataModel).forEach((propName) => {
        if (!!formData && formData.hasOwnProperty(propName)) {
          this.formDataModel[propName] = deepClone(formData[propName]);
        }
      });
      this.broadcast("ContainerItem", "setFormData", this.formDataModel);
      this.broadcast("FieldWidget", "setFormData", this.formDataModel);
    },
    getFieldValue(fieldName) {
      let fieldRef = this.getWidgetRef(fieldName);
      if (!!fieldRef && !!fieldRef.getValue) {
        return fieldRef.getValue();
      }
      if (!fieldRef) {
        let result = [];
        this.findWidgetNameInSubForm(fieldName).forEach((wn) => {
          let sw = this.getWidgetRef(wn);
          if (!!sw && !!sw.getValue) {
            result.push(sw.getValue());
          }
        });
        return result;
      }
    },
    setFieldValue(fieldName, fieldValue) {
      let fieldRef = this.getWidgetRef(fieldName);
      if (!!fieldRef && !!fieldRef.setValue) {
        fieldRef.setValue(fieldValue);
      }
      if (!fieldRef) {
        this.findWidgetNameInSubForm(fieldName).forEach((wn) => {
          let sw = this.getWidgetRef(wn);
          if (!!sw && !!sw.setValue) {
            sw.setValue(fieldValue);
          }
        });
      }
    },
    getSubFormValues(subFormName, needValidation = true) {
      let foundSFRef = this.subFormRefList[subFormName];
      return foundSFRef.getSubFormValues(needValidation);
    },
    disableForm() {
      let wNameList = Object.keys(this.widgetRefList);
      wNameList.forEach((wName) => {
        let foundW = this.getWidgetRef(wName);
        if (!!foundW) {
          if (!!foundW.widget && foundW.widget.type === "sub-form") {
            foundW.disableSubForm();
          } else {
            //!!foundW.setDisabled && foundW.setDisabled(true)
            if (!!foundW.setDisabled) {
              foundW.setDisabled(true);
            }
          }
        }
      });
    },
    enableForm() {
      let wNameList = Object.keys(this.widgetRefList);
      wNameList.forEach((wName) => {
        let foundW = this.getWidgetRef(wName);
        if (!!foundW) {
          if (!!foundW.widget && foundW.widget.type === "sub-form") {
            foundW.enableSubForm();
          } else {
            //!!foundW.setDisabled && foundW.setDisabled(false)
            if (!!foundW.setDisabled) {
              foundW.setDisabled(false);
            }
          }
        }
      });
    },
    resetForm() {
      let subFormNames = Object.keys(this.subFormRefList);
      subFormNames.forEach((sfName) => {
        if (!!this.subFormRefList[sfName].resetSubForm) {
          this.subFormRefList[sfName].resetSubForm();
        }
      });
      let wNameList = Object.keys(this.widgetRefList);
      wNameList.forEach((wName) => {
        let foundW = this.getWidgetRef(wName);
        if (!!foundW && !foundW.subFormItemFlag && !!foundW.resetField) {
          foundW.resetField();
        }
      });
      this.$nextTick(() => {
        this.clearValidate();
      });
    },
    clearValidate(props) {
      this.$refs.renderForm.clearValidate(props);
    },
    validateForm(callback2) {
      this.$refs["renderForm"].validate((valid) => {
        callback2(valid);
      });
    },
    validateFields() {
    },
    disableWidgets(widgetNames) {
      if (!!widgetNames) {
        if (typeof widgetNames === "string") {
          this.findWidgetAndSetDisabled(widgetNames, true);
        } else if (Array.isArray(widgetNames)) {
          widgetNames.forEach((wn) => {
            this.findWidgetAndSetDisabled(wn, true);
          });
        }
      }
    },
    enableWidgets(widgetNames) {
      if (!!widgetNames) {
        if (typeof widgetNames === "string") {
          this.findWidgetAndSetDisabled(widgetNames, false);
        } else if (Array.isArray(widgetNames)) {
          widgetNames.forEach((wn) => {
            this.findWidgetAndSetDisabled(wn, false);
          });
        }
      }
    },
    hideWidgets(widgetNames) {
      if (!!widgetNames) {
        if (typeof widgetNames === "string") {
          this.findWidgetAndSetHidden(widgetNames, true);
        } else if (Array.isArray(widgetNames)) {
          widgetNames.forEach((wn) => {
            this.findWidgetAndSetHidden(wn, true);
          });
        }
      }
    },
    showWidgets(widgetNames) {
      if (!!widgetNames) {
        if (typeof widgetNames === "string") {
          this.findWidgetAndSetHidden(widgetNames, false);
        } else if (Array.isArray(widgetNames)) {
          widgetNames.forEach((wn) => {
            this.findWidgetAndSetHidden(wn, false);
          });
        }
      }
    },
    getFieldWidgets() {
      return getAllFieldWidgets(this.formJsonObj.widgetList);
    },
    getContainerWidgets() {
      return getAllContainerWidgets(this.formJsonObj.widgetList);
    },
    addEC(componentName, externalComponent) {
      this.externalComponents[componentName] = externalComponent;
    },
    hasEC(componentName) {
      return this.externalComponents.hasOwnProperty(componentName);
    },
    getEC(componentName) {
      return this.externalComponents[componentName];
    },
    getGlobalDsv() {
      return this.globalDsv;
    }
  }
};
function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_form = resolveComponent("el-form");
  return openBlock(), createBlock(_component_el_form, {
    "label-position": $options.labelPosition,
    size: $options.size,
    class: normalizeClass([[$options.customClass], "render-form"]),
    "label-width": $options.labelWidth,
    "validate-on-rule-change": false,
    model: $data.formDataModel,
    ref: "renderForm",
    onSubmit: _cache[0] || (_cache[0] = withModifiers(() => {
    }, ["prevent"]))
  }, {
    default: withCtx(() => [
      (openBlock(true), createElementBlock(Fragment, null, renderList($options.widgetList, (widget, index) => {
        return openBlock(), createElementBlock(Fragment, null, [
          widget.category === "container" ? (openBlock(), createBlock(resolveDynamicComponent($options.getContainerWidgetName(widget)), {
            widget,
            key: widget.id,
            "parent-list": $options.widgetList,
            "index-of-parent-list": index,
            "parent-widget": null
          }, createSlots({ _: 2 }, [
            renderList(Object.keys(_ctx.$slots), (slot) => {
              return {
                name: slot,
                fn: withCtx((scope) => [
                  renderSlot(_ctx.$slots, slot, normalizeProps(guardReactiveProps(scope)), void 0, true)
                ])
              };
            })
          ]), 1032, ["widget", "parent-list", "index-of-parent-list"])) : (openBlock(), createBlock(resolveDynamicComponent($options.getWidgetName(widget)), {
            field: widget,
            "form-model": $data.formDataModel,
            designer: null,
            key: widget.id,
            "parent-list": $options.widgetList,
            "index-of-parent-list": index,
            "parent-widget": null
          }, createSlots({ _: 2 }, [
            renderList(Object.keys(_ctx.$slots), (slot) => {
              return {
                name: slot,
                fn: withCtx((scope) => [
                  renderSlot(_ctx.$slots, slot, normalizeProps(guardReactiveProps(scope)), void 0, true)
                ])
              };
            })
          ]), 1032, ["field", "form-model", "parent-list", "index-of-parent-list"]))
        ], 64);
      }), 256))
    ]),
    _: 3
  }, 8, ["label-position", "size", "class", "label-width", "model"]);
}
var VFormRender = /* @__PURE__ */ _export_sfc$1(_sfc_main$e, [["render", _sfc_render$e], ["__scopeId", "data-v-cf2815f6"]]);
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$d = defineComponent({
  name: "ArrowDown"
});
const _hoisted_1$b = {
  class: "icon",
  width: "200",
  height: "200",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$a = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M831.872 340.864L512 652.672 192.128 340.864a30.592 30.592 0 00-42.752 0 29.12 29.12 0 000 41.6L489.664 714.24a32 32 0 0044.672 0l340.288-331.712a29.12 29.12 0 000-41.728 30.592 30.592 0 00-42.752 0z"
}, null, -1);
const _hoisted_3$9 = [
  _hoisted_2$a
];
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$b, _hoisted_3$9);
}
var arrowDown = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$d]]);
const _sfc_main$c = defineComponent({
  name: "ArrowUp"
});
const _hoisted_1$a = {
  class: "icon",
  width: "200",
  height: "200",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$9 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M488.832 344.32l-339.84 356.672a32 32 0 000 44.16l.384.384a29.44 29.44 0 0042.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0042.688 0l.384-.384a32 32 0 000-44.16L535.168 344.32a32 32 0 00-46.336 0z"
}, null, -1);
const _hoisted_3$8 = [
  _hoisted_2$9
];
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$a, _hoisted_3$8);
}
var arrowUp = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c]]);
const _sfc_main$b = defineComponent({
  name: "CirclePlus"
});
const _hoisted_1$9 = {
  class: "icon",
  width: "200",
  height: "200",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$8 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M352 480h320a32 32 0 110 64H352a32 32 0 010-64z"
}, null, -1);
const _hoisted_3$7 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M480 672V352a32 32 0 1164 0v320a32 32 0 01-64 0z"
}, null, -1);
const _hoisted_4$2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 100-768 384 384 0 000 768zm0 64a448 448 0 110-896 448 448 0 010 896z"
}, null, -1);
const _hoisted_5$1 = [
  _hoisted_2$8,
  _hoisted_3$7,
  _hoisted_4$2
];
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$9, _hoisted_5$1);
}
var circlePlus = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b]]);
const _sfc_main$a = defineComponent({
  name: "Delete"
});
const _hoisted_1$8 = {
  class: "icon",
  width: "200",
  height: "200",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$7 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M160 256H96a32 32 0 010-64h256V95.936a32 32 0 0132-32h256a32 32 0 0132 32V192h256a32 32 0 110 64h-64v672a32 32 0 01-32 32H192a32 32 0 01-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 01-32-32V416a32 32 0 0164 0v320a32 32 0 01-32 32zm192 0a32 32 0 01-32-32V416a32 32 0 0164 0v320a32 32 0 01-32 32z"
}, null, -1);
const _hoisted_3$6 = [
  _hoisted_2$7
];
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$8, _hoisted_3$6);
}
var _delete = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a]]);
const _sfc_main$9 = defineComponent({
  name: "Edit"
});
const _hoisted_1$7 = {
  class: "icon",
  width: "200",
  height: "200",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$6 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M832 512a32 32 0 1164 0v352a32 32 0 01-32 32H160a32 32 0 01-32-32V160a32 32 0 0132-32h352a32 32 0 010 64H192v640h640V512z"
}, null, -1);
const _hoisted_3$5 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M469.952 554.24l52.8-7.552L847.104 222.4a32 32 0 10-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 010 135.808l-331.84 331.84a32 32 0 01-18.112 9.088L436.8 623.68a32 32 0 01-36.224-36.224l15.104-105.6a32 32 0 019.024-18.112l331.904-331.84a96 96 0 01135.744 0z"
}, null, -1);
const _hoisted_4$1 = [
  _hoisted_2$6,
  _hoisted_3$5
];
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$7, _hoisted_4$1);
}
var edit = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9]]);
const _sfc_main$8 = defineComponent({
  name: "InfoFilled"
});
const _hoisted_1$6 = {
  class: "icon",
  width: "200",
  height: "200",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$5 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 110 896.064A448 448 0 01512 64zm67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344zM590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 01-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 017.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
}, null, -1);
const _hoisted_3$4 = [
  _hoisted_2$5
];
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$6, _hoisted_3$4);
}
var infoFilled = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8]]);
const _sfc_main$7 = defineComponent({
  name: "Minus"
});
const _hoisted_1$5 = {
  class: "icon",
  width: "200",
  height: "200",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$4 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M128 544h768a32 32 0 100-64H128a32 32 0 000 64z"
}, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$4
];
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, _hoisted_3$3);
}
var minus = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7]]);
const _sfc_main$6 = defineComponent({
  name: "Plus"
});
const _hoisted_1$4 = {
  class: "icon",
  width: "200",
  height: "200",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M480 480V128a32 32 0 0164 0v352h352a32 32 0 110 64H544v352a32 32 0 11-64 0V544H128a32 32 0 010-64h352z"
}, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$3
];
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_3$2);
}
var plus = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6]]);
const _sfc_main$5 = defineComponent({
  name: "Search"
});
const _hoisted_1$3 = {
  class: "icon",
  width: "200",
  height: "200",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M795.904 750.72l124.992 124.928a32 32 0 01-45.248 45.248L750.656 795.904a416 416 0 1145.248-45.248zM480 832a352 352 0 100-704 352 352 0 000 704z"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$2
];
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_3$1);
}
var search = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5]]);
function registerIcon(app) {
  app.component("el-icon-edit", edit);
  app.component("el-icon-minus", minus);
  app.component("el-icon-plus", plus);
  app.component("el-icon-info", infoFilled);
  app.component("el-icon-search", search);
  app.component("el-icon-circle-plus-outline", circlePlus);
  app.component("el-icon-delete", _delete);
  app.component("el-icon-arrow-down", arrowDown);
  app.component("el-icon-arrow-up", arrowUp);
}
if (typeof window !== "undefined") {
  let loadSvg = function() {
    var body = document.body;
    var svgDom = document.getElementById("__svg__icons__dom__1679883196419__");
    if (!svgDom) {
      svgDom = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svgDom.style.position = "absolute";
      svgDom.style.width = "0";
      svgDom.style.height = "0";
      svgDom.id = "__svg__icons__dom__1679883196419__";
      svgDom.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      svgDom.setAttribute("xmlns:link", "http://www.w3.org/1999/xlink");
    }
    svgDom.innerHTML = '<symbol class="icon" viewBox="0 0 1024 1024"  id="icon-alert"><path d="M512 85.163a319.573 319.573 0 0 1 319.83 309.333l.17 10.667v174.805l58.88 134.656a53.29 53.29 0 0 1-48.853 74.71L640 789.418a128 128 0 0 1-255.787 7.509l-.213-7.637-201.6.042a53.333 53.333 0 0 1-48.939-74.581L192 580.011V405.163c0-177.28 143.019-320 320-320zm64 704.17-128 .128a64 64 0 0 0 127.701 6.144l.256-6.272zm-64-640.17c-141.653 0-256 114.09-256 256v188.16l-57.344 132.01h627.072L768 593.365V405.717l-.17-9.6A255.488 255.488 0 0 0 512 149.163zM896 352h85.333a32 32 0 0 1 4.352 63.701l-4.352.299H896a32 32 0 0 1-4.352-63.701L896 352zm-853.333 0H128a32 32 0 0 1 4.352 63.701L128 416H42.667a32 32 0 0 1-4.352-63.701l4.352-.299zm921.6-243.2a32 32 0 0 1-2.816 41.685l-3.584 3.115-85.334 64a32 32 0 0 1-41.984-48.085l3.584-3.115 85.334-64a32 32 0 0 1 44.8 6.4zm-859.734-6.4 85.334 64a32 32 0 1 1-38.4 51.2l-85.334-64a32 32 0 1 1 38.4-51.2z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-button"><path d="M912 176v416H732.48v-32H880V208H144v352h175.488v32H112V176z" /><path d="m436.384 788.512.544 2.688a16 16 0 0 0 27.776 5.504l44.032-54.336 56.768 97.664a16 16 0 0 0 21.792 5.856l68.672-39.392 2.368-1.664a16 16 0 0 0 3.52-20.256l-55.904-96.16 68.8-12.064a16 16 0 0 0 6.464-28.8l-256-180.64a16 16 0 0 0-25.12 14.976l36.288 306.624z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-card"><path d="M858.656 864H165.344C109.472 864 64 818.56 64 762.688V261.312C64 205.44 109.472 160 165.344 160h693.312C914.528 160 960 205.44 960 261.312v501.376C960 818.56 914.528 864 858.656 864zM165.344 224C144.736 224 128 240.736 128 261.312v501.376C128 783.264 144.736 800 165.344 800h693.312C879.264 800 896 783.264 896 762.688V261.312C896 240.736 879.264 224 858.656 224H165.344zM800 416H224c-17.664 0-32-14.336-32-32s14.336-32 32-32h576c17.696 0 32 14.336 32 32s-14.304 32-32 32zM320 736h-96c-17.664 0-32-14.304-32-32s14.336-32 32-32h96c17.664 0 32 14.304 32 32s-14.336 32-32 32z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-cascader-field"><path d="M661.377 411.07v64.595H314.175v395.654H871.32V475.665h-48.447V411.07h48.447c35.675 0 64.595 28.92 64.595 64.595v395.654c0 35.675-28.92 64.595-64.595 64.595H314.175c-35.675 0-64.6-28.92-64.6-64.595V475.665c0-35.675 28.925-64.595 64.6-64.595h347.202zm48.448-322.984c35.675 0 64.6 28.92 64.6 64.595v403.73c0 35.676-28.925 64.595-64.6 64.595H362.623v-64.594h347.202V152.68H152.68v403.73h48.447v64.595H152.68c-35.675 0-64.595-28.92-64.595-64.594V152.68c0-35.675 28.92-64.595 64.595-64.595h557.144z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-checkbox-field"><path d="M897.94 896.77c6.259-6.278 10.257-14.835 10.257-24.531V147.672c0-9.118-3.998-18.235-10.257-24.533-6.277-6.258-14.815-9.696-24.51-9.696H149.644c-9.688 0-18.236 3.437-24.503 9.696-6.268 6.297-9.687 15.414-9.687 24.533V872.24c0 9.696 3.42 18.253 9.687 24.53 6.267 6.278 14.815 10.276 24.503 10.276h723.784c9.697 0 18.234-3.998 24.511-10.276zM149.645 61.52h723.784c23.933 0 45.586 9.697 60.98 25.111 15.397 15.974 25.073 37.666 25.073 61.04v724.567c0 23.97-9.676 45.643-25.073 61.056-15.394 15.396-37.047 25.093-60.98 25.093H149.645c-23.364 0-45.017-9.697-60.972-25.093-15.396-15.414-25.082-37.087-25.082-61.056V147.672c0-23.374 9.686-45.065 25.082-61.039 15.955-15.415 37.608-25.112 60.972-25.112z" /><path d="M417.42 698.27a23.556 23.556 0 0 1-16.668-6.9L259.5 550.12c-9.173-9.15-9.173-24.095 0-33.291 9.17-9.147 24.115-9.147 33.288 0l124.583 124.607 312.895-312.917c9.194-9.172 24.14-9.172 33.288 0 9.196 9.172 9.196 24.116 0 33.29L433.992 691.37c-4.618 4.645-10.643 6.9-16.666 6.9h.093z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-color-field"><path d="M619.52 490.667h-.853l-85.334-85.334h.854z" /><path d="M619.52 507.733h-.853a17.067 17.067 0 1 1 0-34.133c9.438 0 17.476 7.646 17.476 17.067s-7.185 17.066-16.623 17.066zM534.187 422.4c-9.438 0-17.494-7.646-17.494-17.067s7.202-17.066 16.64-17.066h.854a17.067 17.067 0 1 1 0 34.133zM192 866.133a34.133 34.133 0 0 1-24.132-58.265l42.666-42.667a34.133 34.133 0 1 1 48.265 48.265l-42.667 42.666A33.963 33.963 0 0 1 192 866.133z" /><path d="m619.52 490.667-.427-.427-84.906-84.907L746.667 192H832v85.333z" /><path d="M662.187 567.467a33.997 33.997 0 0 1-24.133-10.001L467.388 386.799a34.133 34.133 0 0 1 48.281-48.282l170.667 170.667a34.133 34.133 0 0 1-24.15 58.283z" /><path d="M320 806.4h-85.333a17.067 17.067 0 0 1-17.067-17.067V704c0-4.54 1.792-8.875 5-12.066L521.695 392.84a16.52 16.52 0 0 1 3.567-2.731l209.305-210.142a17.117 17.117 0 0 1 12.1-5.018H832a17.067 17.067 0 0 1 17.067 17.067v85.333a17.067 17.067 0 0 1-4.967 12.05L631.62 502.732a17.954 17.954 0 0 1-3.618 2.782L332.066 801.434A17.135 17.135 0 0 1 320 806.4zm-68.267-34.133h61.201l294.093-294.093a16.52 16.52 0 0 1 3.567-2.73l204.34-205.16v-61.217h-61.185L546.287 417.382a17.954 17.954 0 0 1-3.618 2.782L251.733 711.066v61.2z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-custom-component"><path d="M811.008 335.872c-2.048-7.168-11.264-9.216-17.408-4.096L690.176 435.2c-8.192 8.192-20.48 8.192-28.672 0L588.8 362.496c-8.192-8.192-8.192-20.48 0-28.672l104.448-104.448c5.12-5.12 3.072-14.336-4.096-17.408-17.408-4.096-35.84-7.168-54.272-7.168-108.544 0-195.584 94.208-183.296 204.8 2.048 17.408 6.144 32.768 12.288 48.128L225.28 697.344c-27.648 27.648-27.648 73.728 0 101.376 14.336 14.336 32.768 21.504 51.2 21.504s36.864-7.168 51.2-21.504l238.592-238.592c15.36 6.144 31.744 10.24 48.128 12.288 111.616 12.288 204.8-74.752 204.8-183.296 0-18.432-3.072-36.864-8.192-53.248z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-data-table"><path d="M915.692 39.385H108.308c-15.754 0-29.539 13.784-29.539 29.538v98.462c0 15.753 13.785 29.538 29.539 29.538h807.384c15.754 0 29.539-13.785 29.539-29.538V68.923c0-15.754-13.785-29.538-29.539-29.538zM285.538 275.692h-177.23c-15.754 0-29.539 13.785-29.539 29.539v59.077c0 15.754 13.785 29.538 29.539 29.538h177.23c15.754 0 29.539-13.784 29.539-29.538V305.23c0-15.754-13.785-29.539-29.539-29.539zm315.077 0h-177.23c-15.754 0-29.539 13.785-29.539 29.539v59.077c0 15.754 13.785 29.538 29.539 29.538h177.23c15.754 0 29.539-13.784 29.539-29.538V305.23c0-15.754-13.785-29.539-29.539-29.539zm315.077 0h-177.23c-15.754 0-29.539 13.785-29.539 29.539v59.077c0 15.754 13.785 29.538 29.539 29.538h177.23c15.754 0 29.539-13.784 29.539-29.538V305.23c0-15.754-13.785-29.539-29.539-29.539zM285.538 472.615h-177.23c-15.754 0-29.539 13.785-29.539 29.539v59.077c0 15.754 13.785 29.538 29.539 29.538h177.23c15.754 0 29.539-13.784 29.539-29.538v-59.077c0-15.754-13.785-29.539-29.539-29.539zm315.077 0h-177.23c-15.754 0-29.539 13.785-29.539 29.539v59.077c0 15.754 13.785 29.538 29.539 29.538h177.23c15.754 0 29.539-13.784 29.539-29.538v-59.077c0-15.754-13.785-29.539-29.539-29.539zm315.077 0h-177.23c-15.754 0-29.539 13.785-29.539 29.539v59.077c0 15.754 13.785 29.538 29.539 29.538h177.23c15.754 0 29.539-13.784 29.539-29.538v-59.077c0-15.754-13.785-29.539-29.539-29.539zM285.538 669.538h-177.23c-15.754 0-29.539 13.785-29.539 29.539v59.077c0 15.754 13.785 29.538 29.539 29.538h177.23c15.754 0 29.539-13.784 29.539-29.538v-59.077c0-15.754-13.785-29.539-29.539-29.539zm315.077 0h-177.23c-15.754 0-29.539 13.785-29.539 29.539v59.077c0 15.754 13.785 29.538 29.539 29.538h177.23c15.754 0 29.539-13.784 29.539-29.538v-59.077c0-15.754-13.785-29.539-29.539-29.539zm315.077 0h-177.23c-15.754 0-29.539 13.785-29.539 29.539v59.077c0 15.754 13.785 29.538 29.539 29.538h177.23c15.754 0 29.539-13.784 29.539-29.538v-59.077c0-15.754-13.785-29.539-29.539-29.539zM285.538 866.462h-177.23c-15.754 0-29.539 13.784-29.539 29.538v59.077c0 15.754 13.785 29.538 29.539 29.538h177.23c15.754 0 29.539-13.784 29.539-29.538V896c0-15.754-13.785-29.538-29.539-29.538zm315.077 0h-177.23c-15.754 0-29.539 13.784-29.539 29.538v59.077c0 15.754 13.785 29.538 29.539 29.538h177.23c15.754 0 29.539-13.784 29.539-29.538V896c0-15.754-13.785-29.538-29.539-29.538zm315.077 0h-177.23c-15.754 0-29.539 13.784-29.539 29.538v59.077c0 15.754 13.785 29.538 29.539 29.538h177.23c15.754 0 29.539-13.784 29.539-29.538V896c0-15.754-13.785-29.538-29.539-29.538z" /></symbol><symbol class="icon" viewBox="0 0 1132 1024"  id="icon-date-field"><path d="M1023.995 1023.995H107.789C48.262 1023.995 0 975.732 0 916.205V188.63C0 129.105 48.262 80.843 107.789 80.843h80.842v53.894h-80.842c-29.777 0-53.895 24.118-53.895 53.895V296.42H1077.89V188.63c0-29.776-24.117-53.894-53.894-53.894h-80.842V80.842h80.842c59.526 0 107.789 48.262 107.789 107.789v727.575c0 59.526-48.263 107.789-107.79 107.789Zm53.894-673.681H53.894v565.892c0 29.777 24.118 53.894 53.895 53.894h916.206c29.777 0 53.894-24.117 53.894-53.894V350.314ZM794.943 628.086l-3.584 5.632c-3.314 6.306-7.087 12.153-11.237 17.731L646.734 861.476H589.12l98.358-160.875c-.108 0-.216.027-.324.027-66.963 0-121.262-60.335-121.262-134.736 0-74.401 54.299-134.736 121.262-134.736 66.964 0 121.263 60.335 121.263 134.736 0 22.42-5.39 43.25-14.12 61.844l.646.35ZM687.154 485.05c-37.214 0-67.368 36.19-67.368 80.842 0 44.651 30.154 80.842 67.368 80.842 19.052 0 36.164-9.567 48.425-24.819l9.781-16.006c5.66-11.83 9.163-25.385 9.163-40.017 0-44.652-30.154-80.842-67.369-80.842Zm-310.216 21.881-80.734 72.327v-66.991l82.405-80.41h52.062v429.727h-53.733V506.93Zm512.32-291.353c-14.874 0-26.947-12.072-26.947-26.947V26.947C862.311 12.072 874.384 0 889.26 0s26.947 12.072 26.947 26.947v161.684c0 14.875-12.072 26.947-26.947 26.947ZM296.42 80.842h538.944v53.894H296.42V80.842Zm-53.895 134.736c-14.875 0-26.947-12.072-26.947-26.947V26.947C215.578 12.072 227.65 0 242.525 0s26.947 12.072 26.947 26.947v161.684c0 14.875-12.072 26.947-26.947 26.947Z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-date-range-field"><path d="M887.467 192.853H786.773v-73.386c0-10.24-6.826-17.067-17.066-17.067s-17.067 6.827-17.067 17.067v73.386H303.787v-73.386c0-10.24-6.827-17.067-17.067-17.067s-17.067 6.827-17.067 17.067v73.386H168.96c-46.08 0-85.333 37.547-85.333 85.334v558.08c0 46.08 37.546 85.333 85.333 85.333h718.507c46.08 0 85.333-37.547 85.333-85.333v-558.08c0-47.787-37.547-85.334-85.333-85.334zM168.96 226.987h100.693v66.56c0 10.24 6.827 17.066 17.067 17.066s17.067-6.826 17.067-17.066v-66.56h450.56v66.56c0 10.24 6.826 17.066 17.066 17.066s17.067-6.826 17.067-17.066v-66.56h98.987c27.306 0 51.2 22.186 51.2 51.2v88.746H117.76v-88.746c0-29.014 22.187-51.2 51.2-51.2zm718.507 660.48H168.96c-27.307 0-51.2-22.187-51.2-51.2v-435.2h820.907v435.2c0 27.306-22.187 51.2-51.2 51.2z" /><path d="M858.453 493.227H327.68c-10.24 0-17.067 6.826-17.067 17.066V624.64H194.56c-10.24 0-17.067 6.827-17.067 17.067v133.12c0 10.24 6.827 17.066 17.067 17.066H460.8c10.24 0 17.067-6.826 17.067-17.066V660.48h380.586c10.24 0 17.067-6.827 17.067-17.067v-133.12c0-10.24-6.827-17.066-17.067-17.066zM445.44 527.36v97.28h-98.987v-97.28h98.987zm-230.4 131.413h98.987v98.987H215.04v-98.987zm131.413 97.28v-97.28h98.987v97.28h-98.987zm133.12-228.693h97.28v98.987h-97.28V527.36zm131.414 0h98.986v98.987h-98.986V527.36zm230.4 97.28H742.4v-98.987h98.987v98.987z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-divider"><path d="M62.5 491.773h899v74.918h-899v-74.918z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-document"><path d="M979.478 706.382a44.522 44.522 0 0 1-11.843 57.967l-4.363 2.85L569.478 995.06l-5.388 4.764a84.013 84.013 0 0 1-43.943 17.808l-8.102.401c-19.056 0-37.31-6.545-52.046-18.254l-5.432-4.72L60.817 767.2a44.522 44.522 0 0 1-18.61-56.187l2.36-4.63a44.522 44.522 0 0 1 60.816-16.25l405.326 234.54 1.336 1.514 1.335-1.514 405.282-234.54a44.522 44.522 0 0 1 60.86 16.25zm0-222.609a44.522 44.522 0 0 1-11.843 57.968l-4.363 2.849-393.794 227.862-5.388 4.764a84.013 84.013 0 0 1-43.943 17.809l-8.102.4c-19.056 0-37.31-6.544-52.046-18.254l-5.432-4.719L60.817 544.59a44.522 44.522 0 0 1-18.61-56.187l2.36-4.63a44.522 44.522 0 0 1 60.816-16.25l405.326 234.54 1.336 1.514 1.335-1.514 405.282-234.54a44.522 44.522 0 0 1 60.86 16.25zM512 0c18.788 0 36.864 6.1 51.645 17.185l4.586 3.74 403.5 199.68 5.61 6.144c32.501 35.44 32.501 89.89 0 125.329l-5.61 6.144-403.5 199.59-4.541 3.785a86.239 86.239 0 0 1-43.676 16.83l-8.014.356c-18.788 0-36.864-6.1-51.645-17.186l-4.63-3.784L52.269 358.222l-5.61-6.144a92.739 92.739 0 0 1 0-125.329l5.61-6.144 403.456-199.68 4.585-3.74C473 7.702 488.136 1.87 503.986.356z" fill="#008df0" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-drag"><path d="M574.958 267.016h-63.454 204.649L511.213 63.655 307.85 267.016h141.191V456.68H258.688v125.917H449.04V772.95h125.917V582.596h188.875V456.679H574.958V267.016zm-63.704 693.33 189.62-187.396H323.126l188.129 187.395zM71.292 518.891l187.395 189.62v-377.75L71.292 518.892zm692.54-188.13v377.75L952.708 518.89 763.833 330.762z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-file-upload-field"><path d="m676.48 72.96 209.92 211.2 9.6 23.04V928l-32 32H160l-32-32V96l32-32h494.08l22.4 8.96zM640 320h192L640 128v192zM192 128v768h640V384H608l-32-32V128H192zm512 320H320v64h384v-64zM320 576h384v64H320v-64zm384 128H320v64h384v-64z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-github"><path d="M512 0C229.284 0 .142 234.943.142 524.868c0 231.829 146.647 428.553 350.068 497.952 25.593 4.82 34.977-11.389 34.977-25.294 0-12.455-.469-45.47-.725-89.277-142.382 31.735-172.453-70.38-172.453-70.38-23.247-60.57-56.817-76.694-56.817-76.694-46.493-32.588 3.54-31.948 3.54-31.948 51.357 3.71 78.358 54.086 78.358 54.086 45.683 80.191 119.817 57.072 148.993 43.594 4.65-33.911 17.915-57.03 32.503-70.168-113.675-13.223-233.151-58.224-233.151-259.341 0-57.285 19.92-104.163 52.678-140.846-5.246-13.266-22.82-66.627 4.991-138.884 0 0 42.996-14.076 140.76 53.787 40.864-11.644 84.628-17.445 128.179-17.659 43.465.214 87.271 6.015 128.135 17.66 97.68-67.907 140.59-53.788 140.59-53.788 27.939 72.257 10.408 125.618 5.119 138.884 32.844 36.683 52.593 83.56 52.593 140.846 0 201.587-119.647 245.99-233.663 258.957 18.341 16.21 34.72 48.2 34.72 97.21 0 70.168-.639 126.728-.639 143.96 0 14.034 9.214 30.371 35.19 25.21 203.25-69.528 349.77-266.124 349.77-497.867C1023.858 234.943 794.674 0 512 0" fill="#3E75C3" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-grid"><path d="M819.354 921.6h102.4V819.2h-102.4v102.4zm102.4-204.8h-102.4a102.4 102.4 0 0 0-102.4 102.4v102.4a102.4 102.4 0 0 0 102.4 102.4h102.4a102.4 102.4 0 0 0 102.4-102.4V819.2a102.4 102.4 0 0 0-102.4-102.4zm-460.8 204.8h102.4V819.2h-102.4v102.4zm102.4-204.8h-102.4a102.4 102.4 0 0 0-102.4 102.4v102.4a102.4 102.4 0 0 0 102.4 102.4h102.4a102.4 102.4 0 0 0 102.4-102.4V819.2a102.4 102.4 0 0 0-102.4-102.4zm-460.8 204.8h102.4V819.2h-102.4v102.4zm102.4-204.8h-102.4A102.4 102.4 0 0 0 .154 819.2v102.4a102.4 102.4 0 0 0 102.4 102.4h102.4a102.4 102.4 0 0 0 102.4-102.4V819.2a102.4 102.4 0 0 0-102.4-102.4zm614.4-153.6h102.4V460.8h-102.4v102.4zm102.4-204.8h-102.4a102.4 102.4 0 0 0-102.4 102.4v102.4a102.4 102.4 0 0 0 102.4 102.4h102.4a102.4 102.4 0 0 0 102.4-102.4V460.8a102.4 102.4 0 0 0-102.4-102.4zm-460.8 204.8h102.4V460.8h-102.4v102.4zm102.4-204.8h-102.4a102.4 102.4 0 0 0-102.4 102.4v102.4a102.4 102.4 0 0 0 102.4 102.4h102.4a102.4 102.4 0 0 0 102.4-102.4V460.8a102.4 102.4 0 0 0-102.4-102.4zm-460.8 204.8h102.4V460.8h-102.4v102.4zm102.4-204.8h-102.4A102.4 102.4 0 0 0 .154 460.8v102.4a102.4 102.4 0 0 0 102.4 102.4h102.4a102.4 102.4 0 0 0 102.4-102.4V460.8a102.4 102.4 0 0 0-102.4-102.4zm614.4-153.6h102.4V102.4h-102.4v102.4zM921.754 0h-102.4a102.4 102.4 0 0 0-102.4 102.4v102.4a102.4 102.4 0 0 0 102.4 102.4h102.4a102.4 102.4 0 0 0 102.4-102.4V102.4A102.4 102.4 0 0 0 921.754 0zm-460.8 204.8h102.4V102.4h-102.4v102.4zM563.354 0h-102.4a102.4 102.4 0 0 0-102.4 102.4v102.4a102.4 102.4 0 0 0 102.4 102.4h102.4a102.4 102.4 0 0 0 102.4-102.4V102.4A102.4 102.4 0 0 0 563.354 0zm-460.8 204.8h102.4V102.4h-102.4v102.4zM204.954 0h-102.4A102.4 102.4 0 0 0 .154 102.4v102.4a102.4 102.4 0 0 0 102.4 102.4h102.4a102.4 102.4 0 0 0 102.4-102.4V102.4A102.4 102.4 0 0 0 204.954 0z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-html-text"><path d="m137.6 512 204.8-204.8c12.8-12.8 12.8-32 0-44.8-12.8-12.8-32-12.8-44.8 0L70.4 489.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4l227.2 227.2c12.8 12.8 32 12.8 44.8 0 12.8-12.8 12.8-32 0-44.8L137.6 512zm464-339.2c-16-3.2-35.2 6.4-38.4 22.4L396.8 812.8c-3.2 16 6.4 35.2 22.4 38.4 16 3.2 35.2-6.4 38.4-22.4L624 211.2c6.4-16-3.2-35.2-22.4-38.4zm352 316.8L726.4 262.4c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8L886.4 512 681.6 716.8c-12.8 12.8-12.8 32 0 44.8 12.8 12.8 32 12.8 44.8 0l227.2-227.2c6.4-6.4 9.6-16 9.6-22.4 0-9.6-3.2-16-9.6-22.4z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-node-tree"><path d="M332.48 500.864a25.6 25.6 0 1 0 0-51.2H192.384v-184.96a115.2 115.2 0 0 0 89.6-112.128c0-63.488-51.712-115.2-115.2-115.2s-115.2 51.712-115.2 115.2a115.2 115.2 0 0 0 89.6 112.128v696.192a25.6 25.6 0 1 0 51.2 0v-141.12c2.304.192 4.48.512 6.912.512H332.48a25.6 25.6 0 1 0 0-51.2H199.296c-3.456 0-5.504-.448-6.08-.256a29.184 29.184 0 0 1-.896-8.576V500.8h140.16zM102.784 152.64c0-35.264 28.736-64 64-64s64 28.736 64 64-28.736 64-64 64-64-28.736-64-64zm818.432 207.424h-486.4c-28.224 0-51.2 22.976-51.2 51.2v128c0 28.224 22.976 51.2 51.2 51.2h486.4c28.224 0 51.2-22.976 51.2-51.2v-128c0-28.224-22.976-51.2-51.2-51.2zm-486.336 179.2v-128h486.4v128h-486.4zm486.336 140.352h-486.4c-28.224 0-51.2 22.976-51.2 51.2v128c0 28.224 22.976 51.2 51.2 51.2h486.4c28.224 0 51.2-22.976 51.2-51.2v-128c0-28.224-22.976-51.2-51.2-51.2zm-486.336 179.2v-128h486.4v128h-486.4z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-number-field"><path d="M960 1024H64a64 64 0 0 1-64-64V64A64 64 0 0 1 64 0h896a64 64 0 0 1 64 64v896a64 64 0 0 1-64 64zm0-896a64 64 0 0 0-64-64H128a64 64 0 0 0-64 64v768a64 64 0 0 0 64 64h768a64 64 0 0 0 64-64V128zM832 768H704a64 64 0 0 1 0-128h64v-64h-64a64 64 0 0 1 0-128h64v-64h-64a64 64 0 0 1 0-128h128a64 64 0 0 1 64 64v384a64 64 0 0 1-64 64zM512 640a64 64 0 0 1 0 128H384a64 64 0 0 1-64-64V512a64 64 0 0 1 64-64h64v-64h-64a64 64 0 0 1 0-128h128a64 64 0 0 1 64 64v192a64 64 0 0 1-64 64h-64v64h64zM192 768a64 64 0 0 1-64-64V320a64 64 0 0 1 128 0v384a64 64 0 0 1-64 64z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-picture-upload-field"><path d="M896 1024H128C57.312 1024 0 966.688 0 896V128C0 57.312 57.312 0 128 0h768c70.688 0 128 57.312 128 128v768c0 70.688-57.312 128-128 128zm0-64c35.328 0 64-28.672 64-64V639.968l-192-192L494.816 721.12 730.624 960H896zM64 896c0 35.328 28.672 64 64 64h512.032L318.24 638.208 64 865.952V896zm896-768c0-35.328-28.672-64-64-64H128c-35.328 0-64 28.672-64 64v650.752L320 544l129.856 131.552L768 352l192 196.096V128zM256 384c-70.688 0-128-57.312-128-128s57.312-128 128-128 128 57.312 128 128-57.312 128-128 128zm0-192c-35.328 0-64 28.672-64 64s28.672 64 64 64 64-28.672 64-64-28.672-64-64-64z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-radio-field"><path d="M512 65.983C266.08 65.983 65.983 266.08 65.983 512c0 245.952 200.065 446.017 446.017 446.017S958.017 757.952 958.017 512c0-245.92-200.065-446.017-446.017-446.017zm0 828.034c-210.656 0-382.017-171.392-382.017-382.017 0-210.656 171.36-382.017 382.017-382.017 210.625 0 382.017 171.36 382.017 382.017 0 210.625-171.392 382.017-382.017 382.017zM512 352C423.776 352 352 423.776 352 512s71.774 160 160 160 160-71.774 160-160-71.776-160-160-160z" /></symbol><symbol class="icon" viewBox="0 0 1069 1024"  id="icon-rate-field"><path d="m633.73 378.02 9.498 18.688 20.78 2.798 206.616 27.332a11.465 11.465 0 0 1 6.61 19.473L729.966 593.665l-14.893 14.893 3.8 20.683 37.847 204.89a11.465 11.465 0 0 1-16.481 12.296l-185.55-94.58-18.687-9.493-18.487 9.992-183.24 99.35a11.465 11.465 0 0 1-16.784-11.867l32.543-205.796 3.297-20.786-15.192-14.492-151.033-143.484a11.465 11.465 0 0 1 6.1-19.64L399 402.998l20.786-3.296 9.092-18.98 89.713-188.078a11.465 11.465 0 0 1 20.569-.263l94.568 185.635zM496.647 85.52 374.89 340.501l-279.126 44.26a34.395 34.395 0 0 0-18.303 58.908l204.873 194.663-44.169 279.115a34.395 34.395 0 0 0 50.366 35.616l248.4-134.679L788.776 946.66a34.395 34.395 0 0 0 49.437-36.894l-51.306-277.854 199.731-199.909a34.395 34.395 0 0 0-19.828-58.408l-280.118-37.032L558.33 84.713a34.395 34.395 0 0 0-61.682.802z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-redo"><path d="M412.081 346.3h443.415L640.168 133.871c-18.973-18.973-18.973-46.064 0-65.038s44.325-19.884 63.381-.83l291.385 284.591c18.973 18.973 18.973 44.159 0 63.132L703.549 700.649c-18.973 18.973-44.325 18.973-63.381-.083-18.973-18.973-18.973-43.91 0-62.883l215.328-208.534H412.081c-177.3 0-314.335 138.359-314.335 309.364v44.325c0 25.354-16.074 44.325-41.425 44.325s-41.425-18.973-41.425-44.325v-44.325c0-221.709 169.181-392.213 397.185-392.213z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-rich-editor-field"><path d="M313.36 448.094H632.63v31.927H313.36v-31.927ZM313.36 583.784h223.49v31.927H313.36v-31.927ZM313.36 719.474h127.709v31.927h-127.71v-31.927ZM889.412 554.809l-39.955-39.971-39.957-39.941c-7.358-7.358-19.285-7.358-26.642 0l-329.7 329.694a14.08 14.08 0 0 0-4.592 6.873L412.078 932.86a14.158 14.158 0 0 0 3.54 14.079l.99.763.77.982a14.174 14.174 0 0 0 14.062 3.555l121.395-36.495a14.04 14.04 0 0 0 6.938-4.677l329.639-329.63c7.35-7.343 7.35-19.284 0-26.627zM541.136 889.756l-95.198 28.622 28.623-95.235 255.02-255.02 66.6 66.599-255.045 255.034zM856.112 574.78l-46.611 46.611-66.59-66.598 46.605-46.597c3.677-3.68 9.641-3.68 13.319-.016l26.892 26.892 26.384 26.394c3.68 3.68 3.68 9.65.001 13.314z" /><path d="M671.874 224.898v-28.934c0-22.004-17.905-39.909-39.909-39.909H314.026c-22.004 0-39.909 17.905-39.909 39.91v28.933h-104.43v643.564c0 35.26 28.592 63.854 63.855 63.854h127.709v-47.89H249.506c-17.632 0-31.928-14.299-31.928-31.928v-579.71h56.54v10.976c0 22.004 17.904 39.909 39.908 39.909h317.938c22.004 0 39.91-17.905 39.91-39.91V272.79h56.538V437.45h47.89V224.898H671.875zm-47.89 50.884H322.007v-71.836h301.974v71.836z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-section"><path d="M141.074 906.496h741.852c89.581 0 134.583-44.562 134.583-132.846V250.331c0-88.283-45.002-132.845-134.583-132.845H141.074c-89.143.018-134.583 44.16-134.583 132.845V773.67c0 88.704 45.44 132.845 134.583 132.845zm1.28-68.992c-42.861 0-66.852-22.71-66.852-67.291V253.806c0-44.58 23.99-67.292 66.852-67.292h739.292c42.423 0 66.852 22.711 66.852 67.292v516.388c0 44.58-24.43 67.292-66.852 67.292z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-select-field"><path d="M374.784 649.515a32 32 0 0 1 3.072 41.685l-3.115 3.584L225.28 843.947a32 32 0 0 1-37.845 5.504l-3.968-2.56-85.334-64a32 32 0 0 1 34.432-53.76l3.968 2.56 63.147 47.36 129.835-129.622a32 32 0 0 1 45.269.043zm531.37 75.818a32 32 0 0 1 4.31 63.702l-4.31.298h-448a32 32 0 0 1-4.351-63.744l4.352-.256h448zm.513-256a32 32 0 0 1 4.352 63.702l-4.352.298h-448a32 32 0 0 1-4.352-63.701l4.352-.299h448zm-531.84-331.776a32 32 0 0 1 2.986 41.686l-3.114 3.584-149.846 149.205a32 32 0 0 1-37.888 5.419l-3.925-2.56-84.907-64a32 32 0 0 1 34.518-53.675l3.968 2.56 62.72 47.275L329.6 137.472a32 32 0 0 1 45.227.085zm531.328 75.819a32 32 0 0 1 4.309 63.701l-4.31.299H459.35a32 32 0 0 1-4.352-63.744l4.352-.256h446.806z" /></symbol><symbol class="icon" viewBox="0 0 1032 1024"  id="icon-select-group-field"><path d="M.028 590.018V195.496c0-27.484 11.468-38.867 39.207-38.867 263.005-.028 526.01-.028 789.014 0 27.541 0 39.122 11.581 39.122 39.093.028 263.005.028 526.01 0 789.015 0 27.738-11.412 39.235-38.839 39.263H38.444C11.468 1024 0 1012.532 0 985.584c0-131.855.028-263.71.028-395.566zm433.756-370.173H77.933c-14.689 0-14.745.028-14.745 14.83v710.63c0 15.479.028 15.507 15.197 15.507h710.63c15.14 0 15.168-.028 15.168-15.423V234.76c0-14.886-.028-14.914-14.547-14.914-118.608-.028-237.244 0-355.852 0z" fill="#707070" /><path d="M598.095.057h393.42c28.67 0 40.393 11.497 40.393 40.337.057 262.298.057 524.569 0 786.868 0 28.924-11.581 40.195-40.364 40.223-19.66.028-39.32.141-58.98-.056-19.687-.17-33.952-13.333-34.008-31.015-.057-17.993 13.643-31.354 33.274-32.06a398.903 398.903 0 0 1 27.88-.029c7.005.226 9.83-2.768 9.265-9.575-.198-2.486-.029-5-.029-7.514V79.713c0-16.383 0-16.411-16.242-16.411H243.006c-16.468 0-16.468.028-16.496 16.129 0 5.367.141 10.733-.085 16.072-.593 15.112-12.287 27.795-27.286 29.744-14.745 1.892-30.93-7.683-33.33-22.513-4.323-26.495-4.21-53.443 0-79.966C167.87 9.803 179.987 1.385 193.884.227c4.266-.34 8.559-.198 12.853-.198 130.5.028 260.942.028 391.357.028z" fill="#707070" /><path d="M384.437 796.755c-7.457-.028-14.038-2.457-19.518-7.513-13.417-12.316-26.806-24.603-40.082-37.088-41.862-39.376-83.695-78.808-125.444-118.326-8.389-7.937-12.004-17.682-8.445-29.15 3.474-11.27 11.327-17.937 22.823-20.14 10-1.893 18.106 2.09 25.253 8.728 17.512 16.27 35.138 32.456 52.567 48.839 27.597 25.902 55.278 51.691 82.395 78.074 6.525 6.355 10.028 5.14 15.169-.989 58.47-69.77 117.054-139.397 175.666-209.026 28.049-33.33 56.041-66.662 84.288-99.795 11.073-12.965 27.653-14.801 40.252-5.198 12.456 9.491 15.111 26.411 4.237 40.054-21.129 26.496-43.303 52.172-65.11 78.13a319580.675 319580.675 0 0 1-177.869 211.37c-14.49 17.203-29.15 34.236-43.754 51.353-5.875 6.892-13.19 10.79-22.428 10.677z" fill="#707070" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-slider-field"><path d="M951.453 476.844H523.672a131.836 131.836 0 0 0-254.18 0H72.547v70.312h196.945a131.836 131.836 0 0 0 254.18 0h427.781z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-slot-component"><path d="M512 102.4c-212.48 0-384 171.52-384 384s171.52 384 384 384 384-171.52 384-384-171.52-384-384-384zm25.6 716.8v-128c0-15.36-10.24-25.6-25.6-25.6s-25.6 10.24-25.6 25.6v128C322.56 806.4 192 675.84 179.2 512h128c15.36 0 25.6-10.24 25.6-25.6s-10.24-25.6-25.6-25.6h-128C192 296.96 322.56 166.4 486.4 156.16V281.6c0 15.36 10.24 25.6 25.6 25.6s25.6-10.24 25.6-25.6V156.16C701.44 168.96 832 299.52 844.8 460.8h-128c-15.36 0-25.6 10.24-25.6 25.6s10.24 25.6 25.6 25.6h128C832 675.84 701.44 806.4 537.6 819.2z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-slot-field"><path d="M493.969 244.87h36.285q18.031 0 18.031 18.03v217.267q0 18.031-18.031 18.031h-36.285q-18.032 0-18.032-18.031V262.901q0-18.031 18.032-18.031ZM323.45000000000005 525.802h36.286q18.031 0 18.031 18.031v217.266q0 18.031-18.031 18.031H323.45q-18.03 0-18.03-18.03V543.832q0-18.031 18.03-18.031ZM664.2639999999999 525.802h36.286q18.03 0 18.03 18.031v217.266q0 18.031-18.03 18.031h-36.286q-18.031 0-18.031-18.03V543.832q0-18.031 18.031-18.031Z" /><path d="M827.437 122.212H196.563a74.574 74.574 0 0 0-74.35 74.351v630.874a74.574 74.574 0 0 0 74.35 74.35h630.874a74.574 74.574 0 0 0 74.35-74.35V196.563a74.574 74.574 0 0 0-74.35-74.35zm52.09 705.225a52.09 52.09 0 0 1-52.09 52.09H196.563a52.09 52.09 0 0 1-52.09-52.09V196.563a52.09 52.09 0 0 1 52.09-52.09h630.874a52.09 52.09 0 0 1 52.09 52.09z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-static-text"><path d="M213.333 160c-4.821 0-9.472.64-13.824 1.792a32 32 0 0 1-16.554-61.824C192.683 97.408 202.88 96 213.333 96h33.195a32 32 0 0 1 0 64h-33.195zm133.931-32a32 32 0 0 1 32-32h66.347a32 32 0 1 1 0 64h-66.304a32 32 0 0 1-32-32zm199.125 0a32 32 0 0 1 32-32h66.347a32 32 0 0 1 0 64h-66.347a32 32 0 0 1-32-32zm199.083 0a32 32 0 0 1 32-32h33.195c10.453 0 20.65 1.365 30.378 3.968a32 32 0 1 1-16.554 61.867A53.419 53.419 0 0 0 810.667 160h-33.195a32 32 0 0 1-32-32zm-606.293 32.341a32 32 0 0 1 22.613 39.168A53.461 53.461 0 0 0 160 213.333v33.195a32 32 0 0 1-64 0v-33.195c0-10.453 1.365-20.65 3.968-30.378a32 32 0 0 1 39.168-22.614zm745.685 0a32 32 0 0 1 39.168 22.614c2.56 9.728 3.968 19.925 3.968 30.378v33.195a32 32 0 0 1-64 0v-33.195c0-4.821-.64-9.472-1.792-13.824a32 32 0 0 1 22.613-39.168zM128 347.221a32 32 0 0 1 32 32v66.39a32 32 0 1 1-64 0v-66.304a32 32 0 0 1 32-32zm768 0a32 32 0 0 1 32 32v66.39a32 32 0 1 1-64 0v-66.304a32 32 0 0 1 32-32zM128 546.432a32 32 0 0 1 32 32v66.347a32 32 0 0 1-64 0v-66.347a32 32 0 0 1 32-32zm768 0a32 32 0 0 1 32 32v66.347a32 32 0 0 1-64 0v-66.347a32 32 0 0 1 32-32zm0 199.083a32 32 0 0 1 32 32v33.152c0 10.453-1.365 20.65-3.968 30.378a32 32 0 1 1-61.867-16.554c1.195-4.352 1.835-8.96 1.835-13.824v-33.195a32 32 0 0 1 32-32zm-768 0a32 32 0 0 1 32 32v33.152c0 4.821.64 9.472 1.792 13.824a32 32 0 0 1-61.824 16.512A117.461 117.461 0 0 1 96 810.667v-33.195a32 32 0 0 1 32-32zm32.341 139.392a32 32 0 0 1 39.168-22.656 53.814 53.814 0 0 0 13.824 1.792h33.195a32 32 0 0 1 0 64h-33.195c-10.453 0-20.65-1.366-30.378-3.968a32 32 0 0 1-22.614-39.168zm703.318 0a32 32 0 0 1-22.614 39.168c-9.728 2.56-19.925 3.968-30.378 3.968h-33.195a32 32 0 0 1 0-64h33.195c4.821 0 9.472-.64 13.824-1.792a32 32 0 0 1 39.168 22.613zM347.307 896a32 32 0 0 1 32-32h66.346a32 32 0 1 1 0 64h-66.346a32 32 0 0 1-32-32zm199.125 0a32 32 0 0 1 32-32h66.347a32 32 0 0 1 0 64h-66.347a32 32 0 0 1-32-32zM341.333 352a32 32 0 0 0 0 64H480v266.667a32 32 0 0 0 64 0V416h138.667a32 32 0 0 0 0-64H341.333z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-sub-form"><path d="M512 106.667H112a5.333 5.333 0 0 0-5.333 5.333v800a5.333 5.333 0 0 0 5.333 5.333h800a5.333 5.333 0 0 0 5.333-5.333V112a5.333 5.333 0 0 0-5.333-5.333zm0 74.666h325.333a5.333 5.333 0 0 1 5.334 5.334v160a5.333 5.333 0 0 1-5.334 5.333H186.667a5.333 5.333 0 0 1-5.334-5.333v-160a5.333 5.333 0 0 1 5.334-5.334zM597.333 432v405.333a5.333 5.333 0 0 1-5.333 5.334H432a5.333 5.333 0 0 1-5.333-5.334V432a5.333 5.333 0 0 1 5.333-5.333h160a5.333 5.333 0 0 1 5.333 5.333zm-410.666-5.333h160A5.333 5.333 0 0 1 352 432v405.333a5.333 5.333 0 0 1-5.333 5.334h-160a5.333 5.333 0 0 1-5.334-5.334V432a5.333 5.333 0 0 1 5.334-5.333zM672 837.333V432a5.333 5.333 0 0 1 5.333-5.333h160a5.333 5.333 0 0 1 5.334 5.333v405.333a5.333 5.333 0 0 1-5.334 5.334h-160a5.333 5.333 0 0 1-5.333-5.334z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-switch-field"><path d="M692 792H332C182 792 62 672 62 522s120-270 270-270h360c150 0 270 120 270 270 0 147-120 270-270 270zM332 312c-117 0-210 93-210 210s93 210 210 210h360c117 0 210-93 210-210s-93-210-210-210H332z" /><path d="M191 522a150 150 0 1 0 300 0 150 150 0 1 0-300 0z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-tab"><path d="M908.8 1005.44H115.2A101.76 101.76 0 0 1 14.08 903.68V110.72A101.76 101.76 0 0 1 115.2 8.96h296.96a32.64 32.64 0 0 1 32 32V262.4a32 32 0 0 1-32 32 32 32 0 0 1-32-32v-192H115.2a37.76 37.76 0 0 0-37.12 37.76v795.52a37.76 37.76 0 0 0 37.12 37.76h793.6a37.76 37.76 0 0 0 37.12-37.76V267.52a32 32 0 0 1 32-32 32 32 0 0 1 32 32v636.16a101.76 101.76 0 0 1-101.12 101.76z" /><path d="M977.92 299.52a32.64 32.64 0 0 1-32-32v-87.04a37.12 37.12 0 0 0-37.12-37.76H421.12a32 32 0 0 1-32-32 32 32 0 0 1 32-32H908.8a101.76 101.76 0 0 1 101.12 101.76v87.04a32 32 0 0 1-32 32z" /><path d="M977.92 299.52H64a32 32 0 0 1-32-32 32 32 0 0 1 32-32h913.92a32 32 0 0 1 32 32 32 32 0 0 1-32 32z" /><path d="M699.52 299.52a32 32 0 0 1-32-32v-156.8a32 32 0 0 1 64 0v156.8a32 32 0 0 1-32 32z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-table"><path d="M925.586 0H101.369C69.885 0 42.24 28.924 42.24 62.328v902.8c0 33.403 27.645 58.872 59.129 58.872h824.217c31.484 0 56.057-25.469 56.057-58.873V62.328C981.643 28.924 957.198 0 925.586 0zM373.719 735.908V543.932h276.445v191.976zm276.445 42.235v203.494H373.719V778.143zm287.964-276.446h-244.45V298.203h244.45zm-287.964 0H373.719V298.203h276.445zm-319.96 0H85.754V298.203h244.45zm-244.45 42.235h244.45v191.976H85.754zm607.925 0h244.449v191.976h-244.45zM101.369 42.235h824.217c7.807 0 12.542 10.366 12.542 20.093v193.64H85.755V62.328c0-9.727 7.807-20.093 15.614-20.093zM85.755 964.999V778.143h244.449v203.494H101.369c-7.807 0-15.614-6.91-15.614-16.51zm839.83 16.638H693.68V778.143h244.449v186.856c0 9.727-4.607 16.638-12.542 16.638z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-text-field"><path d="M896 224H128c-35.2 0-64 28.8-64 64v448c0 35.2 28.8 64 64 64h768c35.2 0 64-28.8 64-64V288c0-35.2-28.8-64-64-64zm0 480c0 19.2-12.8 32-32 32H160c-19.2 0-32-12.8-32-32V320c0-19.2 12.8-32 32-32h704c19.2 0 32 12.8 32 32v384z" /><path d="M224 352c-19.2 0-32 12.8-32 32v256c0 16 12.8 32 32 32s32-12.8 32-32V384c0-16-12.8-32-32-32z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-textarea-field"><path d="M896.4 173.1H128.9c-35.2 0-49 13.8-49 49v575.6c0 35.2 13.8 49 49 49h767.5c35.2 0 49-13.8 49-49V222.1c0-35.2-13.8-49-49-49zm0 592.6c0 16-12.8 32-32 32H160.9c-19.2 0-32-12.8-32-32V254.1c0-16 12.8-32 32-32h703.5c19.2 0 32 12.8 32 32v511.6z" /><path d="M710.2 766.7h141.5c8.1 0 14.7-6.6 14.7-14.7V610.4c0-1.3-1.6-2-2.6-1.1L709.1 764.1c-1 1-.3 2.6 1.1 2.6zm-503-172.4h-13.5c-10 0-18.2-8.2-18.2-18.2V291.8c0-10.2 8.4-18.6 18.6-18.6h12.8c10.2 0 18.6 8.4 18.6 18.6v284.3c-.1 10-8.3 18.2-18.3 18.2z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-time-field"><path d="M512 39.385A472.615 472.615 0 1 0 984.615 512 472.615 472.615 0 0 0 512 39.385zm0 866.461A393.846 393.846 0 1 1 905.846 512 393.846 393.846 0 0 1 512 905.846zm75.855-373.72A77.154 77.154 0 0 0 590.769 512a78.454 78.454 0 0 0-39.384-67.86V196.923a39.385 39.385 0 0 0-78.77 0V444.14a78.336 78.336 0 0 0 59.55 143.715l70.144 70.144a39.385 39.385 0 0 0 55.69-55.69zM512 551.385A39.385 39.385 0 1 1 551.385 512 39.385 39.385 0 0 1 512 551.385zm315.077-78.77A39.385 39.385 0 1 0 866.462 512a39.385 39.385 0 0 0-39.385-39.385zm-630.154 0A39.385 39.385 0 1 0 236.308 512a39.385 39.385 0 0 0-39.385-39.385zm509.991 234.3a39.385 39.385 0 1 0 55.69 0 39.385 39.385 0 0 0-55.69 0zM317.007 317.006a39.385 39.385 0 1 0-55.73 0 39.385 39.385 0 0 0 55.809.04zM512 787.692a39.385 39.385 0 1 0 39.385 39.385A39.385 39.385 0 0 0 512 787.692zm-250.604-80.778a39.385 39.385 0 1 0 55.69 0 39.385 39.385 0 0 0-55.69-.039zm445.518-445.518a39.385 39.385 0 1 0 55.69 0 39.385 39.385 0 0 0-55.69-.04z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-time-range-field"><path d="M498.596 482.29H345.42v57.308h210.478V274.197h-57.301V482.29zm79.089 162.695h379.88v57.302h-379.88v-57.302zm0 128.78h379.88v57.307h-379.88v-57.307zm0 128.785h379.88v57.307h-379.88V902.55zm0 0" /><path d="M102.523 382.29a28.668 28.668 0 0 0 23.367 2.56l190.81-61.886c15.053-4.883 23.298-21.04 18.415-36.09-4.882-15.052-21.04-23.297-36.093-18.415l-123.346 40c15.994-26.117 35.17-50.538 57.37-72.745 73.768-73.767 171.847-114.388 276.169-114.388 104.32 0 202.395 40.622 276.161 114.388S899.77 407.56 899.77 511.882c0 26.428-2.616 52.45-7.71 77.78h58.303c4.465-25.499 6.709-51.47 6.709-77.78 0-60.45-11.846-119.102-35.205-174.336-22.56-53.335-54.85-101.227-95.969-142.35-41.122-41.122-89.017-73.408-142.348-95.968-55.233-23.361-113.89-35.207-174.334-35.207-60.45 0-119.107 11.846-174.337 35.208-53.335 22.56-101.23 54.846-142.35 95.969-23.98 23.98-44.933 50.278-62.727 78.6l-20.738-105.654c-3.043-15.528-18.105-25.642-33.632-22.6-15.528 3.048-25.643 18.105-22.6 33.637l36.103 183.932a28.666 28.666 0 0 0 13.588 19.178zm23.497 205.652H67.768c5.76 33.679 15.368 66.544 28.79 98.278 22.56 53.334 54.85 101.225 95.972 142.348 41.123 41.123 89.014 73.409 142.349 95.969 54.112 22.888 111.518 34.711 170.668 35.182v-57.324c-102.95-.941-199.595-41.446-272.5-114.349-55.501-55.502-92.237-124.77-107.027-200.104zm0 0" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-undo"><path d="M609.206 396.656H193.504l201.87-199.152c17.787-17.787 17.787-43.185 0-60.973s-41.555-18.641-59.42-.778L62.857 402.557c-17.787 17.787-17.787 41.399 0 59.186L336.03 728.858c17.787 17.787 41.555 17.787 59.42-.078 17.787-17.787 17.787-41.166 0-58.953L193.502 474.326h415.702c166.219 0 311.155 129.712 311.155 290.029v41.555c0 23.769 15.069 41.555 38.836 41.555s38.836-17.787 38.836-41.555v-41.555c0-207.852-175.073-367.7-388.828-367.7z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-vue-sfc"><path d="M454.138 11.176 54.066 174.092c-72.088 29.49-72.088 120.523 0 150.014l400.276 162.916c36.454 14.95 78.847 14.95 115.506 0l400.071-162.814c72.191-29.593 72.089-120.83-.307-150.116L569.746 11.278a155.339 155.339 0 0 0-115.608-.205zm469.19 237.872L532.37 408.585l-7.885 2.457a55.09 55.09 0 0 1-32.562-2.457L100.35 249.048l391.265-159.23a55.09 55.09 0 0 1 40.447 0l391.162 159.23z" fill="#1890FF" /><path d="M498.681 729.911c-20.275 0-40.652-3.788-59.391-11.673L53.76 561.26C20.48 547.847 0 519.89 0 488.558c0-31.436 20.582-59.391 53.862-72.703l36.556-15.053c21.401-8.806 47.103-1.024 57.24 17.408 10.24 18.227 1.025 40.14-20.479 48.947l-36.454 14.95c-3.072 1.229-4.71 3.584-4.71 6.45 0 3.073 1.536 5.12 4.71 6.452l385.326 156.875c14.336 5.939 30.924 5.939 45.362 0L906.74 495.009c3.072-1.229 4.915-3.584 4.915-6.451 0-3.072-1.536-5.222-4.607-6.451l-44.851-18.227c-21.401-8.806-30.412-30.72-20.377-48.947 10.342-18.329 35.84-26.214 57.24-17.407l44.851 18.431c33.177 13.517 53.76 41.267 53.76 72.703 0 31.334-20.48 59.391-53.76 72.703L558.482 718.238a161.585 161.585 0 0 1-59.801 11.673z" fill="#5DE1C8" /><path d="M498.681 966.247c-20.275 0-40.652-3.89-59.391-11.673L53.76 797.597C20.48 784.08 0 756.227 0 724.997c0-31.437 20.582-59.494 53.862-72.806l36.556-14.95c21.401-8.807 47.103-1.024 57.24 17.407 10.24 18.227 1.025 40.14-20.479 48.947l-36.454 14.95c-3.072 1.126-4.71 3.584-4.71 6.451 0 3.072 1.536 5.12 4.71 6.349l385.326 156.977c14.336 5.939 30.924 5.939 45.362 0L906.74 731.14c3.072-1.126 4.915-3.584 4.915-6.349 0-3.072-1.536-5.324-4.607-6.45l-44.851-18.33c-21.401-8.806-30.412-30.72-20.377-48.947 10.342-18.431 35.84-26.214 57.24-17.407l44.851 18.329c33.177 13.517 53.76 41.369 53.76 72.703 0 31.436-20.48 59.494-53.76 72.805l-385.428 157.08a161.585 161.585 0 0 1-59.801 11.673z" fill="#FF7272" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-custom-search"><path d="M863.3 641.94A416.1 416.1 0 0 0 96.7 318.06a416.1 416.1 0 0 0 766.6 323.88zM480 832a352 352 0 1 1 248.9-103.1A349.69 349.69 0 0 1 480 832z" /><path d="m950.63 841.37-96-96a32 32 0 0 0-45.25 45.25l96 96a13.25 13.25 0 1 1-18.75 18.75l-96-96a32 32 0 0 0-45.25 45.25l96 96a77.25 77.25 0 1 0 109.25-109.25z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-el-arrow-down"><path d="M512 714.667c-8.533 0-17.067-2.134-23.467-8.534L147.2 364.8c-12.8-12.8-12.8-32 0-44.8 12.8-12.8 32-12.8 44.8 0l320 317.867 317.867-320c12.8-12.8 32-12.8 44.8 0 12.8 12.8 12.8 32 0 44.8L533.333 704c-4.266 8.533-12.8 10.667-21.333 10.667z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-el-back"><path fill="currentColor" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z" /><path fill="currentColor" d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z" /></symbol><symbol viewBox="0 0 1024 1024"  id="icon-el-check"><path fill="currentColor" d="M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-el-clone"><path d="M774.144 839.68c-.683 36.864-13.483 67.755-38.4 92.672s-55.808 37.717-92.672 38.4H184.32c-36.864-.683-67.755-13.483-92.672-38.4s-37.717-55.808-38.4-92.672V380.928c.683-36.864 13.483-67.755 38.4-92.672s55.808-37.717 92.672-38.4v65.536c-18.432.683-33.792 7.168-46.08 19.456s-18.773 27.648-19.456 46.08V839.68c.683 18.432 7.168 33.792 19.456 46.08s27.648 18.773 46.08 19.456h458.752c18.432-.683 33.792-7.168 46.08-19.456s18.773-27.648 19.456-46.08h65.536zM380.928 118.784c-18.432.683-33.792 7.168-46.08 19.456s-18.773 27.648-19.456 46.08v458.752c.683 18.432 7.168 33.792 19.456 46.08s27.648 18.773 46.08 19.456H839.68c18.432-.683 33.792-7.168 46.08-19.456s18.773-27.648 19.456-46.08V184.32c-.683-18.432-7.168-33.792-19.456-46.08s-27.648-18.773-46.08-19.456H380.928zm0-65.536H839.68c36.864.683 67.755 13.483 92.672 38.4s37.717 55.808 38.4 92.672v458.752c-.683 36.864-13.483 67.755-38.4 92.672s-55.808 37.717-92.672 38.4H380.928c-36.864-.683-67.755-13.483-92.672-38.4s-37.717-55.808-38.4-92.672V184.32c.683-36.864 13.483-67.755 38.4-92.672s55.808-37.717 92.672-38.4z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-el-delete"><path fill="currentColor" d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-el-download"><path d="M896 672c-17.067 0-32 14.933-32 32v128c0 6.4-4.267 10.667-10.667 10.667H170.667c-6.4 0-10.667-4.267-10.667-10.667V704c0-17.067-14.933-32-32-32s-32 14.933-32 32v128c0 40.533 34.133 74.667 74.667 74.667h682.666C893.867 906.667 928 872.533 928 832V704c0-17.067-14.933-32-32-32z" /><path d="M488.533 727.467c6.4 6.4 14.934 8.533 23.467 8.533s17.067-2.133 23.467-8.533L748.8 514.133c12.8-12.8 12.8-32 0-44.8-12.8-12.8-32-12.8-44.8 0L546.133 627.2V170.667c0-17.067-14.933-32-32-32S480 153.6 480 170.667V627.2L322.133 469.333c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l211.2 213.334z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-el-drag-move"><path d="M909.3 506.3 781.7 405.6c-4.7-3.7-11.7-.4-11.7 5.7V476H548V254h64.8c6 0 9.4-7 5.7-11.7L517.7 114.7c-2.9-3.7-8.5-3.7-11.3 0L405.6 242.3c-3.7 4.7-.4 11.7 5.7 11.7H476v222H254v-64.8c0-6-7-9.4-11.7-5.7L114.7 506.3c-3.7 2.9-3.7 8.5 0 11.3l127.5 100.8c4.7 3.7 11.7.4 11.7-5.7V548h222v222h-64.8c-6 0-9.4 7-5.7 11.7l100.8 127.5c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.7-4.7.4-11.7-5.7-11.7H548V548h222v64.8c0 6 7 9.4 11.7 5.7l127.5-100.8c3.7-2.9 3.7-8.5.1-11.4z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-el-form-template"><path d="M298.667 981.333A85.333 85.333 0 0 1 213.333 896V128a85.333 85.333 0 0 1 85.334-85.333h426.666A85.333 85.333 0 0 1 810.667 128v768a85.333 85.333 0 0 1-85.334 85.333zm0-832v725.334A21.333 21.333 0 0 0 320 896h384a21.333 21.333 0 0 0 21.333-21.333V149.333A21.333 21.333 0 0 0 704 128H320a21.333 21.333 0 0 0-21.333 21.333zm640 618.667V256a42.667 42.667 0 0 1 42.666-42.667A42.667 42.667 0 0 1 1024 256v512a42.667 42.667 0 0 1-42.667 42.667A42.667 42.667 0 0 1 938.667 768zM0 768V256a42.667 42.667 0 0 1 42.667-42.667A42.667 42.667 0 0 1 85.333 256v512a42.667 42.667 0 0 1-42.666 42.667A42.667 42.667 0 0 1 0 768z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-el-hide"><path d="M956.8 496c-41.6-70.4-99.2-147.2-176-204.8l105.6-105.6c12.8-12.8 12.8-32 0-44.8s-32-12.8-44.8 0L726.4 256C665.6 214.4 592 192 512 192c-214.4 0-358.4 166.4-444.8 304-6.4 9.6-6.4 22.4 0 32 41.6 70.4 102.4 147.2 176 204.8L134.4 841.6c-12.8 12.8-12.8 32 0 44.8 9.6 6.4 16 9.6 25.6 9.6s16-3.2 22.4-9.6l115.2-115.2C358.4 809.6 432 832 512 832c185.6 0 374.4-128 444.8-307.2 3.2-9.6 3.2-19.2 0-28.8zm-822.4 16C211.2 390.4 336 256 512 256c60.8 0 118.4 16 166.4 44.8l-80 80C576 361.6 544 352 512 352c-89.6 0-160 70.4-160 160 0 32 9.6 64 25.6 89.6L288 691.2C224 640 172.8 572.8 134.4 512zm473.6 0c0 54.4-41.6 96-96 96-16 0-28.8-3.2-41.6-9.6l128-128c6.4 12.8 9.6 25.6 9.6 41.6zm-192 0c0-54.4 41.6-96 96-96 16 0 28.8 3.2 41.6 9.6l-128 128c-6.4-12.8-9.6-25.6-9.6-41.6zm96 256c-60.8 0-118.4-16-166.4-44.8l80-80C448 662.4 480 672 512 672c89.6 0 160-70.4 160-160 0-32-9.6-64-25.6-89.6l89.6-89.6C803.2 384 854.4 451.2 892.8 512 825.6 659.2 665.6 768 512 768z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-el-info"><path d="M512.001 928.997c230.524 0 418.076-187.552 418.075-418.077 0-230.527-187.552-418.077-418.075-418.077S93.924 280.393 93.924 510.92c0 230.525 187.552 418.077 418.077 418.077zM512 301.88c28.86 0 52.26 23.399 52.26 52.263 0 28.858-23.399 52.257-52.26 52.257s-52.26-23.399-52.26-52.257c0-28.863 23.399-52.263 52.26-52.263zm-52.26 209.042c0-28.86 23.399-52.26 52.26-52.26s52.26 23.399 52.26 52.26v156.775c0 28.86-23.399 52.26-52.26 52.26s-52.26-23.399-52.26-52.26V510.922z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-el-insert-column"><path d="M653.184 713.6c12.864-12.864 33.6-12.864 46.528 0 6.4 6.4 3.776 14.72 3.776 23.232a32.675 32.675 0 0 1-9.6 23.104L569.92 886.4c-.128.128-.32.192-.512.32-2.88 2.88-9.536 5.184-13.312 6.784-3.456 1.344-.64 1.856-4.096 2.112-.768 0-1.344.384-2.048.384-.512 0-.896-.256-1.344-.256-3.84-.192-5.76-.896-9.344-2.24-3.264-1.344-6.016-3.52-8.64-5.76-.64-.512-1.472-.768-2.048-1.344L391.232 760c-12.864-12.736-6.976-33.6 5.888-46.4 12.8-12.864 33.6-12.864 46.464 0l105.472 100.352L653.184 713.6zM384 64v576h320V64H384zM128 704v256H64V640h256v320h-62.976L256 704H128m704 0v256h-64V640h256v320h-62.976L960 704H832" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-el-insert-row"><path d="M310.336 653.184c12.864 12.864 12.864 33.6 0 46.528-6.4 6.4-14.72 3.776-23.168 3.776s-16.832-3.264-23.168-9.6L137.6 569.92c-.128-.128-.192-.32-.256-.512-2.88-2.816-5.248-9.536-6.848-13.312-1.344-3.392-1.856-.576-2.112-4.096 0-.768-.384-1.344-.384-2.048 0-.512.256-.896.256-1.344.192-3.84.896-5.76 2.24-9.344 1.344-3.264 3.52-6.016 5.76-8.64.512-.704.768-1.536 1.344-2.112l126.336-137.344c12.8-12.864 33.6-6.976 46.4 5.888 12.864 12.8 12.864 33.6 0 46.464L210.048 548.992l100.288 104.192zM960 384H384v320h576V384zM320 128H64V64h320v256H64v-62.976L320 256V128m0 704H64v-64h320v256H64v-62.976L320 960V832" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-el-menu"><path d="M844.8 883.2h-256c-19.2 0-38.4-19.2-38.4-38.4v-256c0-19.2 19.2-38.4 38.4-38.4h256c19.2 0 38.4 19.2 38.4 38.4v256c0 19.2-19.2 38.4-38.4 38.4zm0-403.2h-256c-19.2 0-38.4-19.2-38.4-38.4v-256c0-19.2 19.2-38.4 38.4-38.4h256c19.2 0 38.4 19.2 38.4 38.4v256c0 19.2-19.2 38.4-38.4 38.4zM435.2 883.2h-256c-19.2 0-38.4-19.2-38.4-38.4v-256c0-19.2 19.2-38.4 38.4-38.4h256c19.2 0 38.4 19.2 38.4 38.4v256c6.4 19.2-12.8 38.4-38.4 38.4zm0-403.2h-256c-19.2 0-38.4-19.2-38.4-38.4v-256c0-19.2 19.2-38.4 38.4-38.4h256c19.2 0 38.4 19.2 38.4 38.4v256c6.4 19.2-12.8 38.4-38.4 38.4z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-el-move-down"><path d="M898.133 512c-12.8-12.8-32-12.8-44.8-2.133L544 800V149.333c0-17.066-14.933-32-32-32s-32 14.934-32 32V800L170.667 509.867c-12.8-12.8-34.134-10.667-44.8 2.133-12.8 12.8-10.667 34.133 2.133 44.8l362.667 341.333c2.133 2.134 6.4 4.267 8.533 6.4 4.267 2.134 6.4 2.134 10.667 2.134s8.533 0 10.666-2.134c4.267-2.133 6.4-4.266 8.534-6.4L891.733 556.8c17.067-12.8 19.2-32 6.4-44.8z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-el-move-up"><path d="M896 467.2 533.333 125.867c-2.133-2.134-6.4-4.267-8.533-6.4-4.267-2.134-6.4-2.134-10.667-2.134s-8.533 0-10.666 2.134c-4.267 2.133-6.4 4.266-8.534 6.4L132.267 467.2c-12.8 12.8-12.8 32-2.134 44.8 12.8 12.8 32 12.8 44.8 2.133L484.267 224v650.667c0 17.066 14.933 32 32 32s32-14.934 32-32V224l305.066 290.133c6.4 6.4 14.934 8.534 21.334 8.534 8.533 0 17.066-4.267 23.466-10.667 12.8-12.8 10.667-32-2.133-44.8z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-el-plus"><path d="M554.667 213.333h-85.334v256h-256v85.334h256v256h85.334v-256h256v-85.334h-256z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-el-set-up"><path d="M217.088 151.552c-18.432.683-33.792 7.168-46.08 19.456s-18.773 27.648-19.456 46.08v589.824c.683 18.432 7.168 33.792 19.456 46.08s27.648 18.773 46.08 19.456h589.824c18.432-.683 33.792-7.168 46.08-19.456s18.773-27.648 19.456-46.08V217.088c-.683-18.432-7.168-33.792-19.456-46.08s-27.648-18.773-46.08-19.456H217.088zm0-65.536h589.824c36.864.683 67.755 13.483 92.672 38.4s37.717 55.808 38.4 92.672v589.824c-.683 36.864-13.483 67.755-38.4 92.672s-55.808 37.717-92.672 38.4H217.088c-36.864-.683-67.755-13.483-92.672-38.4s-37.717-55.808-38.4-92.672V217.088c.683-36.864 13.483-67.755 38.4-92.672s55.808-37.717 92.672-38.4zm163.84 327.68c18.432-.683 33.792-7.168 46.08-19.456s18.432-27.648 18.432-46.08-6.144-33.792-18.432-46.08-27.648-18.432-46.08-18.432-33.792 6.144-46.08 18.432-18.432 27.648-18.432 46.08 6.144 33.792 18.432 46.08 27.648 18.773 46.08 19.456zm0 65.536c-36.864-.683-67.755-13.483-92.672-38.4s-37.717-55.808-38.4-92.672c.683-36.864 13.483-67.755 38.4-92.672s55.808-37.717 92.672-38.4c36.864.683 67.755 13.483 92.672 38.4s37.717 55.808 38.4 92.672c-.683 36.864-13.483 67.755-38.4 92.672s-55.808 37.717-92.672 38.4zm98.304-163.84h262.144c21.845 0 32.768 10.923 32.768 32.768s-10.923 32.768-32.768 32.768H479.232c-21.845 0-32.768-10.923-32.768-32.768s10.923-32.768 32.768-32.768zm163.84 425.984c18.432-.683 33.792-7.168 46.08-19.456s18.432-27.648 18.432-46.08-6.144-33.792-18.432-46.08-27.648-18.432-46.08-18.432-33.792 6.144-46.08 18.432-18.432 27.648-18.432 46.08 6.144 33.792 18.432 46.08 27.648 18.773 46.08 19.456zm0 65.536c-36.864-.683-67.755-13.483-92.672-38.4s-37.717-55.808-38.4-92.672c.683-36.864 13.483-67.755 38.4-92.672s55.808-37.717 92.672-38.4c36.864.683 67.755 13.483 92.672 38.4s37.717 55.808 38.4 92.672c-.683 36.864-13.483 67.755-38.4 92.672s-55.808 37.717-92.672 38.4zm-360.448-163.84h262.144c21.845 0 32.768 10.923 32.768 32.768s-10.923 32.768-32.768 32.768H282.624c-21.845 0-32.768-10.923-32.768-32.768s10.923-32.768 32.768-32.768z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-el-view"><path fill="currentColor" d="M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z" /></symbol><symbol viewBox="0 0 1024 1024"  id="icon-el-zoom-in"><path fill="currentColor" d="m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704zm-32-384v-96a32 32 0 0 1 64 0v96h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96z" /></symbol>';
    body.insertBefore(svgDom, body.firstChild);
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadSvg);
  } else {
    loadSvg();
  }
}
var iconfont = "";
function registerCPEditor(app, uniquePropName, propEditorName, editorComponent) {
  app.component(propEditorName, editorComponent);
}
function registerEPEditor(app, uniquePropName, propEditorName, editorComponent) {
  app.component(propEditorName, editorComponent);
}
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const createInputTextEditor = function(propName, propLabelKey) {
  return {
    props: {
      optionModel: Object
    },
    render(h) {
      return createVNode(resolveComponent("el-form-item"), {
        "label": translate(propLabelKey)
      }, {
        default: () => [createVNode(resolveComponent("el-input"), {
          "type": "text",
          "modelValue": this.optionModel[propName],
          "onUpdate:modelValue": ($event) => this.optionModel[propName] = $event
        }, null)]
      });
    }
  };
};
const createBooleanEditor = function(propName, propLabelKey) {
  return {
    props: {
      optionModel: Object
    },
    render(h) {
      return createVNode(resolveComponent("el-form-item"), {
        "label": translate(propLabelKey)
      }, {
        default: () => [createVNode(resolveComponent("el-switch"), {
          "modelValue": this.optionModel[propName],
          "onUpdate:modelValue": ($event) => this.optionModel[propName] = $event
        }, null)]
      });
    }
  };
};
const createRadioButtonGroupEditor = function(propName, propLabelKey, configs) {
  return {
    props: {
      optionModel: Object
    },
    render(h) {
      let _slot3;
      return createVNode(resolveComponent("el-form-item"), {
        "label": translate(propLabelKey)
      }, {
        default: () => [createVNode(resolveComponent("el-radio-group"), {
          "modelValue": this.optionModel[propName],
          "onUpdate:modelValue": ($event) => this.optionModel[propName] = $event
        }, _isSlot(_slot3 = configs.optionItems.map((item) => {
          return createVNode(resolveComponent("el-radio-button"), {
            "label": item.value
          }, {
            default: () => [item.label]
          });
        })) ? _slot3 : {
          default: () => [_slot3]
        })]
      });
    }
  };
};
const createSelectEditor = function(propName, propLabelKey, configs) {
  return {
    props: {
      optionModel: Object
    },
    render(h) {
      let _slot4;
      return createVNode(resolveComponent("el-form-item"), {
        "label": translate(propLabelKey)
      }, {
        default: () => [createVNode(resolveComponent("el-select"), {
          "modelValue": this.optionModel[propName],
          "onUpdate:modelValue": ($event) => this.optionModel[propName] = $event
        }, _isSlot(_slot4 = configs.optionItems.map((item) => {
          return createVNode(resolveComponent("el-option"), {
            "label": item.label,
            "value": item.value
          }, null);
        })) ? _slot4 : {
          default: () => [_slot4]
        })]
      });
    }
  };
};
const createEventHandlerEditor = function(eventPropName, eventParams) {
  return {
    props: {
      optionModel: Object
    },
    mixins: [emitter],
    methods: {
      editEventHandler() {
        this.dispatch("SettingPanel", "editEventHandler", [eventPropName, [...eventParams]]);
      }
    },
    render(h) {
      let _slot5;
      return createVNode(resolveComponent("el-form-item"), {
        "label": eventPropName,
        "label-width": "150px"
      }, {
        default: () => [createVNode(resolveComponent("el-button"), {
          "type": "info",
          "icon": "el-icon-edit",
          "plain": true,
          "round": true,
          "onClick": this.editEventHandler
        }, _isSlot(_slot5 = translate("designer.setting.addEventHandler")) ? _slot5 : {
          default: () => [_slot5]
        })]
      });
    }
  };
};
var containerMixin = {
  inject: ["getFormConfig", "getGlobalDsv"],
  computed: {
    formConfig() {
      return this.getFormConfig();
    }
  },
  methods: {
    appendTableRow(widget) {
      this.designer.appendTableRow(widget);
    },
    appendTableCol(widget) {
      this.designer.appendTableCol(widget);
    },
    onContainerDragAdd(evt, subList) {
      const newIndex = evt.newIndex;
      if (!!subList[newIndex]) {
        this.designer.setSelected(subList[newIndex]);
      }
      this.designer.emitHistoryChange();
    },
    onContainerDragUpdate() {
      this.designer.emitHistoryChange();
    },
    checkContainerMove(evt) {
      return this.designer.checkWidgetMove(evt);
    },
    selectWidget(widget) {
      this.designer.setSelected(widget);
    },
    selectParentWidget() {
      if (this.parentWidget) {
        this.designer.setSelected(this.parentWidget);
      } else {
        this.designer.clearSelected();
      }
    },
    moveUpWidget() {
      this.designer.moveUpWidget(this.parentList, this.indexOfParentList);
      this.designer.emitHistoryChange();
    },
    moveDownWidget() {
      this.designer.moveDownWidget(this.parentList, this.indexOfParentList);
      this.designer.emitHistoryChange();
    },
    cloneContainer(widget) {
      if (!!this.parentList) {
        let newCon = this.designer.cloneContainer(widget);
        this.parentList.splice(this.indexOfParentList + 1, 0, newCon);
        this.designer.setSelected(newCon);
        this.designer.emitHistoryChange();
      }
    },
    removeWidget() {
      if (!!this.parentList) {
        const widgetRefName = this.designer.selectedWidgetName;
        let nextSelected = null;
        if (this.parentList.length === 1) {
          if (!!this.parentWidget) {
            nextSelected = this.parentWidget;
          }
        } else if (this.parentList.length === 1 + this.indexOfParentList) {
          nextSelected = this.parentList[this.indexOfParentList - 1];
        } else {
          nextSelected = this.parentList[this.indexOfParentList + 1];
        }
        this.$nextTick(() => {
          this.parentList.splice(this.indexOfParentList, 1);
          this.designer.setSelected(nextSelected);
          this.designer.formWidget.deleteWidgetRef(widgetRefName);
          this.designer.emitHistoryChange();
        });
      }
    },
    setWidgetOption(optionName, optionValue) {
      if (this.widget.options.hasOwnProperty(optionName)) {
        this.widget.options[optionName] = optionValue;
      }
    }
  }
};
var containerWrapper_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$4 = {
  name: "container-wrapper",
  mixins: [i18n$1, containerMixin],
  components: {
    SvgIcon
  },
  props: {
    widget: Object,
    parentWidget: Object,
    parentList: Array,
    indexOfParentList: Number,
    designer: Object
  },
  computed: {
    customClass() {
      return !!this.widget.options.customClass ? this.widget.options.customClass.join(" ") : "";
    }
  }
};
const _hoisted_1$2 = {
  key: 0,
  class: "container-action"
};
const _hoisted_2$1 = ["title"];
const _hoisted_3 = ["title"];
const _hoisted_4 = ["title"];
const _hoisted_5 = ["title"];
const _hoisted_6 = ["title"];
const _hoisted_7 = ["title"];
const _hoisted_8 = ["title"];
const _hoisted_9 = {
  key: 1,
  class: "drag-handler"
};
const _hoisted_10 = ["title"];
const _hoisted_11 = { key: 0 };
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_svg_icon = resolveComponent("svg-icon");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["container-wrapper", [$options.customClass]])
  }, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true),
    $props.designer.selectedId === $props.widget.id && !$props.widget.internal ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
      createElementVNode("i", {
        title: _ctx.$t("designer.hint.selectParentWidget"),
        onClick: _cache[0] || (_cache[0] = withModifiers(($event) => _ctx.selectParentWidget($props.widget), ["stop"]))
      }, [
        createVNode(_component_svg_icon, { "icon-class": "el-back" })
      ], 8, _hoisted_2$1),
      !!$props.parentList && $props.parentList.length > 1 ? (openBlock(), createElementBlock("i", {
        key: 0,
        title: _ctx.$t("designer.hint.moveUpWidget"),
        onClick: _cache[1] || (_cache[1] = withModifiers(($event) => _ctx.moveUpWidget(), ["stop"]))
      }, [
        createVNode(_component_svg_icon, { "icon-class": "el-move-up" })
      ], 8, _hoisted_3)) : createCommentVNode("", true),
      !!$props.parentList && $props.parentList.length > 1 ? (openBlock(), createElementBlock("i", {
        key: 1,
        title: _ctx.$t("designer.hint.moveDownWidget"),
        onClick: _cache[2] || (_cache[2] = withModifiers(($event) => _ctx.moveDownWidget(), ["stop"]))
      }, [
        createVNode(_component_svg_icon, { "icon-class": "el-move-down" })
      ], 8, _hoisted_4)) : createCommentVNode("", true),
      $props.widget.type === "table" ? (openBlock(), createElementBlock("i", {
        key: 2,
        title: _ctx.$t("designer.hint.insertRow"),
        onClick: _cache[3] || (_cache[3] = withModifiers(($event) => _ctx.appendTableRow($props.widget), ["stop"]))
      }, [
        createVNode(_component_svg_icon, { "icon-class": "el-insert-row" })
      ], 8, _hoisted_5)) : createCommentVNode("", true),
      $props.widget.type === "table" ? (openBlock(), createElementBlock("i", {
        key: 3,
        title: _ctx.$t("designer.hint.insertColumn"),
        onClick: _cache[4] || (_cache[4] = withModifiers(($event) => _ctx.appendTableCol($props.widget), ["stop"]))
      }, [
        createVNode(_component_svg_icon, { "icon-class": "el-insert-column" })
      ], 8, _hoisted_6)) : createCommentVNode("", true),
      $props.widget.type === "grid" || $props.widget.type === "table" ? (openBlock(), createElementBlock("i", {
        key: 4,
        title: _ctx.$t("designer.hint.cloneWidget"),
        onClick: _cache[5] || (_cache[5] = withModifiers(($event) => _ctx.cloneContainer($props.widget), ["stop"]))
      }, [
        createVNode(_component_svg_icon, { "icon-class": "el-clone" })
      ], 8, _hoisted_7)) : createCommentVNode("", true),
      createElementVNode("i", {
        title: _ctx.$t("designer.hint.remove"),
        onClick: _cache[6] || (_cache[6] = withModifiers((...args) => _ctx.removeWidget && _ctx.removeWidget(...args), ["stop"]))
      }, [
        createVNode(_component_svg_icon, { "icon-class": "el-delete" })
      ], 8, _hoisted_8)
    ])) : createCommentVNode("", true),
    $props.designer.selectedId === $props.widget.id && !$props.widget.internal ? (openBlock(), createElementBlock("div", _hoisted_9, [
      createElementVNode("i", {
        title: _ctx.$t("designer.hint.dragHandler")
      }, [
        createVNode(_component_svg_icon, { "icon-class": "el-drag-move" })
      ], 8, _hoisted_10),
      createElementVNode("i", null, toDisplayString(_ctx.i18n2t(`designer.widgetLabel.${$props.widget.type}`, `extension.widgetLabel.${$props.widget.type}`)), 1),
      $props.widget.options.hidden === true ? (openBlock(), createElementBlock("i", _hoisted_11, [
        createVNode(_component_svg_icon, { "icon-class": "el-hide" })
      ])) : createCommentVNode("", true)
    ])) : createCommentVNode("", true)
  ], 2);
}
var ContainerWrapper = /* @__PURE__ */ _export_sfc$1(_sfc_main$4, [["render", _sfc_render$4], ["__scopeId", "data-v-49d9fa1c"]]);
var refMixinDesign = {
  methods: {
    initRefList() {
      if (this.refList !== null && !!this.widget.options.name) {
        this.refList[this.widget.options.name] = this;
      }
    },
    getWidgetRef(widgetName, showError) {
      let foundRef = this.refList[widgetName];
      if (!foundRef && !!showError) {
        this.$message.error(this.i18nt("render.hint.refNotFound") + widgetName);
      }
      return foundRef;
    },
    registerToRefList(oldRefName) {
      if (this.refList !== null && !!this.widget.options.name) {
        if (!!oldRefName) {
          delete this.refList[oldRefName];
        }
        this.refList[this.widget.options.name] = this;
      }
    }
  }
};
var cardWidget_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$3 = {
  name: "card-widget",
  componentName: "ContainerWidget",
  mixins: [i18n$1, containerMixin, refMixinDesign],
  inject: ["refList"],
  components: __spreadProps(__spreadValues({
    ContainerWrapper
  }, comps), {
    ArrowDown: arrowDown,
    ArrowUp: arrowUp
  }),
  props: {
    widget: Object,
    parentWidget: Object,
    parentList: Array,
    indexOfParentList: Number,
    designer: Object
  },
  computed: {
    selected() {
      return this.widget.id === this.designer.selectedId;
    },
    customClass() {
      return this.widget.options.customClass || "";
    }
  },
  created() {
    this.initRefList();
  },
  methods: {
    checkContainerMove(evt) {
      return true;
    },
    toggleCard() {
      this.widget.options.folded = !this.widget.options.folded;
    },
    setFolded(folded) {
      this.widget.options.folded = !!folded;
    }
  }
};
const _hoisted_1$1 = { class: "clear-fix" };
const _hoisted_2 = { class: "form-widget-list" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ArrowDown = resolveComponent("ArrowDown");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_ArrowUp = resolveComponent("ArrowUp");
  const _component_draggable = resolveComponent("draggable");
  const _component_el_card = resolveComponent("el-card");
  const _component_container_wrapper = resolveComponent("container-wrapper");
  return openBlock(), createBlock(_component_container_wrapper, {
    designer: $props.designer,
    widget: $props.widget,
    "parent-widget": $props.parentWidget,
    "parent-list": $props.parentList,
    "index-of-parent-list": $props.indexOfParentList
  }, {
    default: withCtx(() => [
      (openBlock(), createBlock(_component_el_card, {
        key: $props.widget.id,
        class: normalizeClass(["card-container", [$options.selected ? "selected" : "", !!$props.widget.options.folded ? "folded" : "", $options.customClass]]),
        onClick: _cache[2] || (_cache[2] = withModifiers(($event) => _ctx.selectWidget($props.widget), ["stop"])),
        shadow: $props.widget.options.shadow,
        style: normalizeStyle({ width: $props.widget.options.cardWidth + "!important" || "" })
      }, {
        header: withCtx(() => [
          createElementVNode("div", _hoisted_1$1, [
            createElementVNode("span", null, toDisplayString($props.widget.options.label), 1),
            $props.widget.options.showFold ? (openBlock(), createElementBlock("i", {
              key: 0,
              class: "float-right",
              onClick: _cache[0] || (_cache[0] = (...args) => $options.toggleCard && $options.toggleCard(...args))
            }, [
              !$props.widget.options.folded ? (openBlock(), createBlock(_component_el_icon, { key: 0 }, {
                default: withCtx(() => [
                  createVNode(_component_ArrowDown)
                ]),
                _: 1
              })) : (openBlock(), createBlock(_component_el_icon, { key: 1 }, {
                default: withCtx(() => [
                  createVNode(_component_ArrowUp)
                ]),
                _: 1
              }))
            ])) : createCommentVNode("", true)
          ])
        ]),
        default: withCtx(() => [
          createVNode(_component_draggable, mergeProps({
            list: $props.widget.widgetList,
            "item-key": "id"
          }, { group: "dragGroup", ghostClass: "ghost", animation: 200 }, {
            handle: ".drag-handler",
            tag: "transition-group",
            "component-data": { name: "fade" },
            onAdd: _cache[1] || (_cache[1] = (evt) => _ctx.onContainerDragAdd(evt, $props.widget.widgetList)),
            onUpdate: _ctx.onContainerDragUpdate,
            move: $options.checkContainerMove
          }), {
            item: withCtx(({ element: subWidget, index: swIdx }) => [
              createElementVNode("div", _hoisted_2, [
                subWidget.category === "container" ? (openBlock(), createBlock(resolveDynamicComponent(subWidget.type + "-widget"), {
                  widget: subWidget,
                  designer: $props.designer,
                  key: subWidget.id,
                  "parent-list": $props.widget.widgetList,
                  "index-of-parent-list": swIdx,
                  "parent-widget": $props.widget
                }, null, 8, ["widget", "designer", "parent-list", "index-of-parent-list", "parent-widget"])) : (openBlock(), createBlock(resolveDynamicComponent(subWidget.type + "-widget"), {
                  field: subWidget,
                  designer: $props.designer,
                  key: subWidget.id,
                  "parent-list": $props.widget.widgetList,
                  "index-of-parent-list": swIdx,
                  "parent-widget": $props.widget,
                  "design-state": true
                }, null, 8, ["field", "designer", "parent-list", "index-of-parent-list", "parent-widget"]))
              ])
            ]),
            _: 1
          }, 16, ["list", "onUpdate", "move"])
        ]),
        _: 1
      }, 8, ["shadow", "style", "class"]))
    ]),
    _: 1
  }, 8, ["designer", "widget", "parent-widget", "parent-list", "index-of-parent-list"]);
}
var CardWidget = /* @__PURE__ */ _export_sfc$1(_sfc_main$3, [["render", _sfc_render$3], ["__scopeId", "data-v-78104555"]]);
var cardItem_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$2 = {
  name: "card-item",
  componentName: "ContainerItem",
  mixins: [emitter, i18n$1, refMixin, containerItemMixin],
  components: __spreadProps(__spreadValues({
    ContainerItemWrapper
  }, comps), {
    ArrowDown: arrowDown,
    ArrowUp: arrowUp
  }),
  props: {
    widget: Object
  },
  inject: ["refList", "sfRefList", "globalModel"],
  computed: {
    customClass() {
      return this.widget.options.customClass || "";
    }
  },
  created() {
    this.initRefList();
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  },
  methods: {
    toggleCard() {
      this.widget.options.folded = !this.widget.options.folded;
    }
  }
};
const _hoisted_1 = { class: "clear-fix" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ArrowDown = resolveComponent("ArrowDown");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_ArrowUp = resolveComponent("ArrowUp");
  const _component_el_card = resolveComponent("el-card");
  const _component_container_item_wrapper = resolveComponent("container-item-wrapper");
  return openBlock(), createBlock(_component_container_item_wrapper, { widget: $props.widget }, {
    default: withCtx(() => [
      withDirectives((openBlock(), createBlock(_component_el_card, {
        key: $props.widget.id,
        class: normalizeClass(["card-container", [!!$props.widget.options.folded ? "folded" : "", $options.customClass]]),
        shadow: $props.widget.options.shadow,
        style: normalizeStyle({ width: $props.widget.options.cardWidth + "!important" || "" }),
        ref: $props.widget.id
      }, {
        header: withCtx(() => [
          createElementVNode("div", _hoisted_1, [
            createElementVNode("span", null, toDisplayString($props.widget.options.label), 1),
            $props.widget.options.showFold ? (openBlock(), createElementBlock("i", {
              key: 0,
              class: "float-right",
              onClick: _cache[0] || (_cache[0] = (...args) => $options.toggleCard && $options.toggleCard(...args))
            }, [
              !$props.widget.options.folded ? (openBlock(), createBlock(_component_el_icon, { key: 0 }, {
                default: withCtx(() => [
                  createVNode(_component_ArrowDown)
                ]),
                _: 1
              })) : (openBlock(), createBlock(_component_el_icon, { key: 1 }, {
                default: withCtx(() => [
                  createVNode(_component_ArrowUp)
                ]),
                _: 1
              }))
            ])) : createCommentVNode("", true)
          ])
        ]),
        default: withCtx(() => [
          !!$props.widget.widgetList && $props.widget.widgetList.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList($props.widget.widgetList, (subWidget, swIdx) => {
            return openBlock(), createElementBlock(Fragment, null, [
              subWidget.category === "container" ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.getComponentByContainer(subWidget)), {
                widget: subWidget,
                key: swIdx,
                "parent-list": $props.widget.widgetList,
                "index-of-parent-list": swIdx,
                "parent-widget": $props.widget
              }, createSlots({ _: 2 }, [
                renderList(Object.keys(_ctx.$slots), (slot) => {
                  return {
                    name: slot,
                    fn: withCtx((scope) => [
                      renderSlot(_ctx.$slots, slot, normalizeProps(guardReactiveProps(scope)), void 0, true)
                    ])
                  };
                })
              ]), 1032, ["widget", "parent-list", "index-of-parent-list", "parent-widget"])) : (openBlock(), createBlock(resolveDynamicComponent(subWidget.type + "-widget"), {
                field: subWidget,
                designer: null,
                key: swIdx,
                "parent-list": $props.widget.widgetList,
                "index-of-parent-list": swIdx,
                "parent-widget": $props.widget
              }, createSlots({ _: 2 }, [
                renderList(Object.keys(_ctx.$slots), (slot) => {
                  return {
                    name: slot,
                    fn: withCtx((scope) => [
                      renderSlot(_ctx.$slots, slot, normalizeProps(guardReactiveProps(scope)), void 0, true)
                    ])
                  };
                })
              ]), 1032, ["field", "parent-list", "index-of-parent-list", "parent-widget"]))
            ], 64);
          }), 256)) : createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["class", "shadow", "style"])), [
        [vShow, !$props.widget.options.hidden]
      ])
    ]),
    _: 3
  }, 8, ["widget"]);
}
var CardItem = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-1999fb0d"]]);
var selectGroupWidget_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$1 = {
  name: "select-group-widget",
  componentName: "FieldWidget",
  mixins: [emitter, fieldMixin, i18n$1],
  props: {
    field: Object,
    parentWidget: Object,
    parentList: Array,
    indexOfParentList: Number,
    designer: Object,
    designState: {
      type: Boolean,
      default: false
    },
    subFormRowIndex: {
      type: Number,
      default: -1
    },
    subFormColIndex: {
      type: Number,
      default: -1
    },
    subFormRowId: {
      type: String,
      default: ""
    }
  },
  components: {
    FormItemWrapper
  },
  data() {
    return {
      oldFieldValue: null,
      fieldModel: null,
      rules: []
    };
  },
  computed: {
    allowDefaultFirstOption() {
      return !!this.field.options.filterable && !!this.field.options.allowCreate;
    }
  },
  beforeCreate() {
  },
  created() {
    this.initOptionItems();
    this.initFieldModel();
    this.registerToRefList();
    this.initEventHandler();
    this.buildFieldRules();
    this.handleOnCreated();
  },
  mounted() {
    this.handleOnMounted();
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  },
  methods: {}
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_option = resolveComponent("el-option");
  const _component_el_option_group = resolveComponent("el-option-group");
  const _component_el_select = resolveComponent("el-select");
  const _component_form_item_wrapper = resolveComponent("form-item-wrapper");
  return openBlock(), createBlock(_component_form_item_wrapper, {
    designer: $props.designer,
    field: $props.field,
    rules: $data.rules,
    "design-state": $props.designState,
    "parent-widget": $props.parentWidget,
    "parent-list": $props.parentList,
    "index-of-parent-list": $props.indexOfParentList,
    "sub-form-row-index": $props.subFormRowIndex,
    "sub-form-col-index": $props.subFormColIndex,
    "sub-form-row-id": $props.subFormRowId
  }, {
    default: withCtx(() => [
      createVNode(_component_el_select, {
        ref: "fieldEditor",
        modelValue: $data.fieldModel,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.fieldModel = $event),
        class: normalizeClass(["full-width-input", { "el-input--prefix": $props.field.options.prefixIcon }]),
        disabled: $props.field.options.disabled,
        size: $props.field.options.size,
        clearable: $props.field.options.clearable,
        filterable: $props.field.options.filterable,
        "allow-create": $props.field.options.allowCreate,
        "default-first-option": $options.allowDefaultFirstOption,
        "automatic-dropdown": $props.field.options.automaticDropdown,
        multiple: $props.field.options.multiple,
        "multiple-limit": $props.field.options.multipleLimit,
        placeholder: $props.field.options.placeholder ? _ctx.$t($props.field.options.placeholder) : _ctx.i18nt("render.hint.selectPlaceholder"),
        remote: this.field.options.remote,
        "remote-method": _ctx.remoteQuery,
        onFocus: _ctx.handleFocusCustomEvent,
        onBlur: _ctx.handleBlurCustomEvent,
        onChange: _ctx.handleChangeEvent
      }, {
        default: withCtx(() => [
          $props.field.options.prefixIcon ? (openBlock(), createElementBlock("i", {
            key: 0,
            class: normalizeClass([$props.field.options.prefixIcon, "el-icon--right"])
          }, null, 2)) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList($props.field.options.optionItems, (group) => {
            return openBlock(), createBlock(_component_el_option_group, {
              key: group.label,
              label: group.label
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(group.options, (item) => {
                  return openBlock(), createBlock(_component_el_option, {
                    key: item.value,
                    label: item.label,
                    value: item.value,
                    disabled: item.disabled
                  }, null, 8, ["label", "value", "disabled"]);
                }), 128))
              ]),
              _: 2
            }, 1032, ["label"]);
          }), 128))
        ]),
        _: 1
      }, 8, ["modelValue", "class", "disabled", "size", "clearable", "filterable", "allow-create", "default-first-option", "automatic-dropdown", "multiple", "multiple-limit", "placeholder", "remote", "remote-method", "onFocus", "onBlur", "onChange"])
    ]),
    _: 1
  }, 8, ["designer", "field", "rules", "design-state", "parent-widget", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
var SelectGroupWidget = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-2d8f78ae"]]);
const _sfc_main = {
  name: "alert-widget",
  componentName: "FieldWidget",
  mixins: [emitter, fieldMixin, i18n$1],
  props: {
    field: Object,
    parentWidget: Object,
    parentList: Array,
    indexOfParentList: Number,
    designer: Object,
    designState: {
      type: Boolean,
      default: false
    },
    subFormRowIndex: {
      type: Number,
      default: -1
    },
    subFormColIndex: {
      type: Number,
      default: -1
    },
    subFormRowId: {
      type: String,
      default: ""
    }
  },
  components: {
    StaticContentWrapper
  },
  created() {
    this.registerToRefList();
    this.initEventHandler();
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  },
  methods: {
    handleCloseCustomEvent() {
      if (!!this.field.options.onClose) {
        let changeFn = new Function(this.field.options.onClose);
        changeFn.call(this);
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_alert = resolveComponent("el-alert");
  const _component_static_content_wrapper = resolveComponent("static-content-wrapper");
  return openBlock(), createBlock(_component_static_content_wrapper, {
    designer: $props.designer,
    field: $props.field,
    "design-state": $props.designState,
    "parent-widget": $props.parentWidget,
    "parent-list": $props.parentList,
    "index-of-parent-list": $props.indexOfParentList,
    "sub-form-row-index": $props.subFormRowIndex,
    "sub-form-col-index": $props.subFormColIndex,
    "sub-form-row-id": $props.subFormRowId
  }, {
    default: withCtx(() => [
      createVNode(_component_el_alert, {
        ref: "fieldEditor",
        title: $props.field.options.title,
        type: $props.field.options.type,
        description: $props.field.options.description,
        closable: $props.field.options.closable,
        center: $props.field.options.center,
        "close-text": $props.field.options.closeText,
        "show-icon": $props.field.options.showIcon,
        effect: $props.field.options.effect,
        onClose: $options.handleCloseCustomEvent
      }, null, 8, ["title", "type", "description", "closable", "center", "close-text", "show-icon", "effect", "onClose"])
    ]),
    _: 1
  }, 8, ["designer", "field", "design-state", "parent-widget", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
var AlertWidget = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["render", _sfc_render]]);
const loadExtension = function(app) {
  loadCard(app);
  loadAlertWidget(app);
  loadSelectGroupWidget(app);
};
const loadSelectGroupWidget = (app) => {
  app.component(SelectGroupWidget.name, SelectGroupWidget);
};
const loadCard = (app) => {
  app.component(CardWidget.name, CardWidget);
  app.component(CardItem.name, CardItem);
  registerCPEditor(app, "card-folded", "card-folded-editor", createBooleanEditor("folded", "extension.setting.cardFolded"));
  registerCPEditor(app, "card-showFold", "card-showFold-editor", createBooleanEditor("showFold", "extension.setting.cardShowFold"));
  registerCPEditor(app, "card-cardWidth", "card-cardWidth-editor", createInputTextEditor("cardWidth", "extension.setting.cardWidth"));
  let shadowOptions = [
    { label: "never", value: "never" },
    { label: "hover", value: "hover" },
    { label: "always", value: "always" }
  ];
  registerCPEditor(app, "card-shadow", "card-shadow-editor", createSelectEditor("shadow", "extension.setting.cardShadow", { optionItems: shadowOptions }));
};
const loadAlertWidget = (app) => {
  app.component(AlertWidget.name, AlertWidget);
  registerCPEditor(app, "alert-title", "alert-title-editor", createInputTextEditor("title", "extension.setting.alertTitle"));
  let typeOptions = [
    { label: "success", value: "success" },
    { label: "warning", value: "warning" },
    { label: "info", value: "info" },
    { label: "error", value: "error" }
  ];
  app.component("alert-type-editor", createSelectEditor("type", "extension.setting.alertType", { optionItems: typeOptions }));
  registerCPEditor(app, "alert-description", "alert-description-editor", createInputTextEditor("description", "extension.setting.description"));
  registerCPEditor(app, "alert-closable", "alert-closable-editor", createBooleanEditor("closable", "extension.setting.closable"));
  registerCPEditor(app, "alert-closeText", "alert-closeText-editor", createInputTextEditor("closeText", "extension.setting.closeText"));
  registerCPEditor(app, "alert-center", "alert-center-editor", createBooleanEditor("center", "extension.setting.center"));
  registerCPEditor(app, "alert-showIcon", "alert-showIcon-editor", createBooleanEditor("showIcon", "extension.setting.showIcon"));
  let effectOptions = [
    { label: "light", value: "light" },
    { label: "dark", value: "dark" }
  ];
  registerCPEditor(app, "alert-effect", "alert-effect-editor", createRadioButtonGroupEditor("effect", "extension.setting.effect", { optionItems: effectOptions }));
  registerEPEditor(app, "alert-onClose", "alert-onClose-editor", createEventHandlerEditor("onClose", []));
};
VFormRender.install = function(app) {
  loadExtension(app);
  app.use(ContainerItems);
  registerIcon(app);
  app.component(VFormRender.name, VFormRender);
};
const components = [
  VFormRender
];
const install = (app) => {
  loadExtension(app);
  app.use(ContainerItems);
  registerIcon(app);
  components.forEach((component) => {
    app.component(component.name, component);
  });
  window.axios = axios;
};
var installRender = {
  install,
  VFormRender
};
export { installRender as default };
