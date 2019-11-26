(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SkedTape"] = factory();
	else
		root["SkedTape"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/lodash.clone/index.js":
/*!********************************************!*\
  !*** ./node_modules/lodash.clone/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      if (isHostObject(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys(value);
  }
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */
function clone(value) {
  return baseClone(value, false, true);
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = clone;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash.difference/index.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash.difference/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array ? array.length : 0;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  if (value !== value) {
    return baseFindIndex(array, baseIsNaN, fromIndex);
  }
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Checks if a cache value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values ? values.length : 0;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order of result values is determined by the
 * order they occur in the first array.
 *
 * **Note:** Unlike `_.pullAll`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.without, _.xor
 * @example
 *
 * _.difference([2, 1], [2, 3]);
 * // => [1]
 */
var difference = baseRest(function(array, values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
    : [];
});

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

module.exports = difference;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash.intersection/index.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash.intersection/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array ? array.length : 0;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  if (value !== value) {
    return baseFindIndex(array, baseIsNaN, fromIndex);
  }
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Checks if a cache value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values ? values.length : 0;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of methods like `_.intersection`, without support
 * for iteratee shorthands, that accepts an array of arrays to inspect.
 *
 * @private
 * @param {Array} arrays The arrays to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of shared values.
 */
function baseIntersection(arrays, iteratee, comparator) {
  var includes = comparator ? arrayIncludesWith : arrayIncludes,
      length = arrays[0].length,
      othLength = arrays.length,
      othIndex = othLength,
      caches = Array(othLength),
      maxLength = Infinity,
      result = [];

  while (othIndex--) {
    var array = arrays[othIndex];
    if (othIndex && iteratee) {
      array = arrayMap(array, baseUnary(iteratee));
    }
    maxLength = nativeMin(array.length, maxLength);
    caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
      ? new SetCache(othIndex && array)
      : undefined;
  }
  array = arrays[0];

  var index = -1,
      seen = caches[0];

  outer:
  while (++index < length && result.length < maxLength) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (!(seen
          ? cacheHas(seen, computed)
          : includes(result, computed, comparator)
        )) {
      othIndex = othLength;
      while (--othIndex) {
        var cache = caches[othIndex];
        if (!(cache
              ? cacheHas(cache, computed)
              : includes(arrays[othIndex], computed, comparator))
            ) {
          continue outer;
        }
      }
      if (seen) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Casts `value` to an empty array if it's not an array like object.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array|Object} Returns the cast array-like object.
 */
function castArrayLikeObject(value) {
  return isArrayLikeObject(value) ? value : [];
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates an array of unique values that are included in all given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order of result values is determined by the
 * order they occur in the first array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of intersecting values.
 * @example
 *
 * _.intersection([2, 1], [2, 3]);
 * // => [2]
 */
var intersection = baseRest(function(arrays) {
  var mapped = arrayMap(arrays, castArrayLikeObject);
  return (mapped.length && mapped[0] === arrays[0])
    ? baseIntersection(mapped)
    : [];
});

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

module.exports = intersection;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/SkedEventCollisionError.ts":
/*!****************************************!*\
  !*** ./src/SkedEventCollisionError.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SkedEventCollisionError = /** @class */ (function (_super) {
    __extends(SkedEventCollisionError, _super);
    function SkedEventCollisionError(eventId) {
        var _this = _super.call(this) || this;
        _this.eventId = eventId;
        _this.name = 'SkedEventCollisionError';
        _this.message = 'Collision with entry #' + eventId;
        // Use V8's native method if available, otherwise fallback
        if ('captureStackTrace' in Error) {
            Error.captureStackTrace(_this, SkedEventCollisionError);
        }
        else {
            _this.stack = (new Error()).stack;
        }
        return _this;
    }
    return SkedEventCollisionError;
}(Error));
/* harmony default export */ __webpack_exports__["default"] = (SkedEventCollisionError);


/***/ }),

/***/ "./src/SkedTape.sass":
/*!***************************!*\
  !*** ./src/SkedTape.sass ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/SkedTape.ts":
/*!*************************!*\
  !*** ./src/SkedTape.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.clone */ "./node_modules/lodash.clone/index.js");
/* harmony import */ var lodash_clone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_clone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/helpers.ts");
/* harmony import */ var _SkedEventCollisionError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SkedEventCollisionError */ "./src/SkedEventCollisionError.ts");
/* harmony import */ var _SmoothScroller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SmoothScroller */ "./src/SmoothScroller.ts");
/* harmony import */ var _VNode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./VNode */ "./src/VNode.ts");
/* harmony import */ var _VTree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./VTree */ "./src/VTree.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};






var CURRENT_TZ_OFFSET = new Date().getTimezoneOffset();
function createElement(tagName, props, children) {
    return new _VNode__WEBPACK_IMPORTED_MODULE_4__["default"](tagName, props, children);
}
var DefaultFormatters = {
    /**
     * Formats the date.
     *
     * Note, since the component itself invokes the function with a single
     * argument, when overriding the function you should provide only the first
     * one. The sole purpose of the rest of them is to be used from the derived
     * function for convenience.
     *
     * @param {Date} date The date to format.
     * @param {'m'|'l'} endian Date format endianess ('m' - US, 'l' - EU).
     *                         Default value is 'm'.
     * @param {String} delim Date component delimiter.
     *                       Default - '/' or '.' depending on `endian`'s value.
     */
    date: function (date, endian, delim) {
        if (endian === void 0) { endian = 'm'; }
        delim = delim || (endian === 'm' ? '/' : '.');
        var nums = [date.getDate(), date.getMonth() + 1, date.getFullYear()];
        if (endian === 'm') {
            nums = [nums[1], nums[0], nums[2]];
        }
        return nums.join(delim);
    },
    roundDuration: function (ms) {
        return ms;
    },
    duration: function (ms, opts) {
        var h = Math.floor(ms / _helpers__WEBPACK_IMPORTED_MODULE_1__["MS_PER_HOUR"]);
        var m = Math.floor((ms % _helpers__WEBPACK_IMPORTED_MODULE_1__["MS_PER_HOUR"]) / _helpers__WEBPACK_IMPORTED_MODULE_1__["MS_PER_MINUTE"]);
        var hrs = (opts && opts.hrs) || (h > 1 ? 'hrs' : 'hr');
        var min = (opts && opts.min) || (m > 1 ? 'mins' : 'min');
        var format = h ? h + hrs : '';
        format += h && m ? ' ' : '';
        format += m ? m + min : '';
        return format;
    },
    hours: function (hours) {
        return (hours < 10 ? '0' : '') + hours + ':00';
    },
    time: function (date) {
        var h = date.getHours();
        var m = date.getMinutes();
        return (h < 10 ? '0' + h : h) + ':' + (m < 10 ? '0' + m : m);
    },
};
/**
 * Schedule tape widget.
 */
var SkedTape = /** @class */ (function (_super) {
    __extends(SkedTape, _super);
    function SkedTape(opts) {
        var _this = _super.call(this, opts.el) || this;
        _this.caption = '';
        _this.locations = [];
        _this.events = [];
        _this.format = DefaultFormatters;
        _this.lastEventId = 0;
        _this.dndEnabled = false;
        _this.dummyEvent = null;
        _this.zoom = 1;
        _this.minZoom = 0.5;
        _this.maxZoom = 10;
        _this.zoomStep = 0.5;
        _this.baseHourWidth = 96;
        _this.showEventTime = false;
        _this.showEventDuration = false;
        _this.showDates = true;
        _this.minIntervalBetween = 0;
        _this.minTimeGapShown = 1 * _helpers__WEBPACK_IMPORTED_MODULE_1__["MS_PER_MINUTE"];
        _this.maxTimeGapShown = 60 * _helpers__WEBPACK_IMPORTED_MODULE_1__["MS_PER_MINUTE"] - 1;
        _this.tooSmallInterval = false;
        _this.scrollWithYWheel = false;
        _this.sorting = false;
        _this.orderBy = 'order';
        _this.snapToMins = 1;
        _this.rmbCancelsDrag = true;
        _this.tzOffset = CURRENT_TZ_OFFSET;
        _this.timeIndicatorSerifs = false;
        _this.showIntermission = false;
        _this.intermissionRange = [1, 60];
        _this.lastPicked = null;
        _this.listeners = [];
        _this.locationClasses = function (location, canAdd) {
            return canAdd !== false ? [] : ['sked-tape__location--forbidden'];
        };
        _this.renderLocationContent = function (location, createElement) {
            return location.name;
        };
        _this.renderEventContent = function (event, createElement) {
            var children = [event.name];
            if (_this.showEventTime || _this.showEventDuration) {
                var duration = _this.format.roundDuration(event.end.getTime() - event.start.getTime());
                if (_this.showEventTime) {
                    var end = new Date(event.start.getTime() + duration);
                    children = children.concat([
                        createElement('br'),
                        _this.format.time(event.start) + ' - ' + _this.format.time(end),
                    ]);
                }
                if (_this.showEventDuration) {
                    children = children.concat([
                        createElement('br'),
                        _this.format.duration(duration),
                    ]);
                }
            }
            return children;
        };
        Object.assign(_this, opts);
        if (opts.formatters) {
            _this.format = __assign(__assign({}, DefaultFormatters), opts.formatters);
        }
        _this.registerEventHandlers();
        return _this;
    }
    SkedTape.prototype.destroy = function () {
        this.cleanup();
        this.root.innerHTML = '';
        Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["removeClass"])(this.root, 'sked-tape sked-tape--has-dates');
    };
    Object.defineProperty(SkedTape.prototype, "isDnDEnabled", {
        /**
         * Returns whether Drag and Drop events enabled.
         */
        get: function () {
            return this.dndEnabled;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Turns on/off Drag and Drop for events.
     */
    SkedTape.prototype.enableDnD = function (on) {
        if (on === void 0) { on = true; }
        if (on !== this.dndEnabled) {
            if (on) {
                this.dndEnabled = true;
            }
            else {
                if (this.dummyEvent) {
                    this.cancelEventDrag();
                }
                this.dndEnabled = false;
            }
        }
    };
    SkedTape.prototype.setTimespan = function (start, end, _a) {
        var _b = (_a === void 0 ? {} : _a).rerender, rerender = _b === void 0 ? true : _b;
        if (start > end) {
            throw new Error('Invalid time range: ' + JSON.stringify([start, end]));
        }
        this.start = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["floorHours"])(start);
        this.end = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["ceilHours"])(end);
        if (rerender) {
            this.scheduleRerender();
        }
    };
    /**
     * A shorthand for `setTimespan()` that sets timespan between some
     * specified hours (optional) of a particular date.
     */
    SkedTape.prototype.setDate = function (date, minHours, maxHours, opts) {
        if (minHours === void 0) { minHours = 0; }
        if (maxHours === void 0) { maxHours = 24; }
        var midnight = new Date(date);
        midnight.setHours(0, 0, 0, 0);
        var start = new Date(midnight);
        start.setHours(minHours);
        var end;
        if (maxHours && maxHours !== 24) {
            end = new Date(midnight.getTime());
            end.setHours(maxHours);
        }
        else {
            end = new Date(midnight.getTime() + _helpers__WEBPACK_IMPORTED_MODULE_1__["MS_PER_DAY"]);
        }
        this.setTimespan(start, end, opts);
    };
    SkedTape.prototype.getZoom = function () {
        return this.zoom;
    };
    SkedTape.prototype.setZoom = function (zoom) {
        this.zoom = Math.max(Math.min(zoom, this.maxZoom), this.minZoom);
        this.refs.canvas.style.width = this.computeCanvasWidth() + 'px';
        (zoom >= 1 ? _helpers__WEBPACK_IMPORTED_MODULE_1__["removeClass"] : _helpers__WEBPACK_IMPORTED_MODULE_1__["addClass"])(this.root, 'sked-tape--condensed');
    };
    SkedTape.prototype.resetZoom = function () {
        this.setZoom(1);
    };
    SkedTape.prototype.zoomIn = function (inc) {
        this.setZoom(this.zoom + (inc || this.zoomStep));
    };
    SkedTape.prototype.zoomOut = function (dec) {
        this.setZoom(this.zoom - (dec || this.zoomStep));
    };
    SkedTape.prototype.locationExists = function (id) {
        return !!this.locations.find(function (location) { return location.id === id; });
    };
    SkedTape.prototype.setLocations = function (locations, _a) {
        var _b = (_a === void 0 ? {} : _a).rerender, rerender = _b === void 0 ? true : _b;
        var locationIds = locations.map(function (location) { return location.id; });
        var deletedLocationIds = this.locations
            .map(function (location) { return location.id; })
            .filter(function (id) { return locationIds.indexOf(id) < 0; });
        this.locations = [];
        for (var _i = 0, locations_1 = locations; _i < locations_1.length; _i++) {
            var location_1 = locations_1[_i];
            this.addLocation(location_1, { rerender: false });
        }
        this.events = this.events
            .filter(function (event) { return deletedLocationIds.indexOf(event.locationId) >= 0; });
        if (rerender) {
            this.scheduleRerender();
        }
    };
    SkedTape.prototype.addLocation = function (location, _a) {
        var _b = (_a === void 0 ? {} : _a).rerender, rerender = _b === void 0 ? true : _b;
        this.locations.push({
            id: location.id,
            name: location.name,
            order: location.order || 0,
            tzOffset: location.tzOffset,
            userData: location.userData ? __assign({}, location.userData) : {},
        });
        if (rerender) {
            this.scheduleRerender();
        }
    };
    SkedTape.prototype.removeLocation = function (id, _a) {
        var _b = (_a === void 0 ? {} : _a).rerender, rerender = _b === void 0 ? true : _b;
        var index = this.locations.findIndex(function (location) { return location.id === id; });
        if (index < 0) {
            throw new Error("Cannot find location #" + id);
        }
        this.locations.splice(index, 1);
        if (rerender) {
            this.scheduleRerender();
        }
    };
    SkedTape.prototype.getLocation = function (id) {
        return this.locations.find(function (location) { return location.id === id; });
    };
    SkedTape.prototype.getLocations = function () {
        if (this.sorting && this.orderBy === 'name') {
            return this.locations.sort(function (a, b) {
                var aName = a.name.toLocaleLowerCase();
                var bName = b.name.toLocaleLowerCase();
                return aName.localeCompare(bName);
            });
        }
        else if (this.sorting && this.orderBy === 'order') {
            return this.locations.sort(function (a, b) { return a.order - b.order; });
        }
        else {
            return this.locations;
        }
    };
    SkedTape.prototype.collide = function (event) {
        var _this = this;
        if (event.start && event.end) {
            return this.events.find(function (iEvent) { return (event.locationId === iEvent.locationId &&
                Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["gapBetween"])(event, iEvent) < _this.minIntervalBetween); });
        }
        return null;
    };
    SkedTape.prototype.putEvent = function (event, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.mayIntersect, mayIntersect = _c === void 0 ? false : _c, _d = _b.rerender, rerender = _d === void 0 ? true : _d;
        if (!this.locationExists(event.locationId)) {
            throw new Error('Unknown location #' + event.locationId);
        }
        if (event.start > event.end) {
            throw new Error('Invalid time range: ' +
                JSON.stringify([event.start, event.end]));
        }
        var newEvent = {
            active: event.active || false,
            className: event.className || null,
            data: event.data ? lodash_clone__WEBPACK_IMPORTED_MODULE_0___default()(event.data) : {},
            disabled: event.disabled || false,
            end: new Date(event.end),
            id: event.id ? event.id : ++this.lastEventId,
            locationId: event.locationId,
            name: event.name,
            start: new Date(event.start),
            url: event.url || null,
            userData: event.userData ? lodash_clone__WEBPACK_IMPORTED_MODULE_0___default()(event.userData) : {},
        };
        if (!mayIntersect) {
            var collided = this.collide(newEvent);
            if (collided) {
                throw new _SkedEventCollisionError__WEBPACK_IMPORTED_MODULE_2__["default"](collided.id);
            }
        }
        var index = this.events.findIndex(function (iEvent) { return iEvent.id === newEvent.id; });
        if (index >= 0) {
            this.events[index] = newEvent;
        }
        else {
            this.events.push(newEvent);
        }
        if (rerender) {
            this.scheduleRerender();
        }
        return newEvent;
    };
    SkedTape.prototype.putEvents = function (events, opts) {
        for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
            var event_1 = events_1[_i];
            this.putEvent(event_1, opts);
        }
    };
    SkedTape.prototype.setEvents = function (events, opts) {
        this.events = [];
        this.putEvents(events, opts);
    };
    SkedTape.prototype.removeEvent = function (eventId, _a) {
        var _b = (_a === void 0 ? {} : _a).rerender, rerender = _b === void 0 ? true : _b;
        var index = this.events.findIndex(function (event) { return event.id === eventId; });
        if (index >= 0) {
            this.events.splice(index, 1);
            if (rerender) {
                this.scheduleRerender();
            }
            return true;
        }
        return false;
    };
    SkedTape.prototype.getEvents = function () {
        return this.events;
    };
    SkedTape.prototype.getEvent = function (id) {
        return this.events.find(function (event) { return event.id === id; });
    };
    /**
     * Returns event intersection list for a specified location.
     */
    SkedTape.prototype.getIntersections = function (locationId) {
        var intersections = [];
        var occupied = function (intersection) {
            for (var _i = 0, intersections_1 = intersections; _i < intersections_1.length; _i++) {
                var iIntersection = intersections_1[_i];
                if (intersection.start.getTime() === iIntersection.start.getTime() &&
                    intersection.end.getTime() === iIntersection.end.getTime()) {
                    return true;
                }
            }
            return false;
        };
        for (var i = 0; i < this.events.length; i++) {
            var iEvent = this.events[i];
            if (iEvent.locationId === locationId) {
                for (var j = i + 1; j < this.events.length; ++j) {
                    var jEvent = this.events[j];
                    if (jEvent.locationId === locationId) {
                        var intersection = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["rangesIntersection"])(iEvent, jEvent);
                        if (intersection && !occupied(intersection)) {
                            // Intersection found and the exact time
                            // is unique (for rendering optimization purposes)
                            intersection.events = [iEvent, jEvent];
                            intersections.push(intersection);
                        }
                    }
                }
            }
        }
        return intersections;
    };
    SkedTape.prototype.dragEvent = function (eventId) {
        // Skip if some event is being dragged right now
        if (!this.isAdding()) {
            var event_2 = this.getEvent(eventId);
            // Make sure the event is allowed to be draggable
            if (!this.onEventBeforeDrag || this.onEventBeforeDrag(event_2)) {
                if (this.onEventDrag) {
                    this.onEventDrag(event_2);
                }
                this.removeEvent(eventId, { rerender: false }); // Remove it from the data
                // Rerender the row
                var location_2 = this.getLocation(event_2.locationId);
                var events = this.filterLocationEvents(location_2.id);
                this.materializePartial(this.renderEventRow(location_2, events));
                this.dragNewEvent({
                    draggedEvent: event_2,
                    duration: event_2.end.getTime() - event_2.start.getTime(),
                    id: event_2.id,
                    name: event_2.name,
                    userData: event_2.userData ? __assign({}, event_2.userData) : {},
                });
            }
        }
    };
    SkedTape.prototype.dragNewEvent = function (dummyEvent) {
        this.dummyEvent = dummyEvent;
        // Place on the last mouse position on the timeline
        if (this.lastPicked) {
            this.moveDummyEvent(this.lastPicked);
        }
        // TODO: Observer pattern would be better here
        // Rerender the locations in order to apply some classes if needed
        this.materializePartial(this.renderLocations());
    };
    SkedTape.prototype.cancelEventDrag = function () {
        if (this.dummyEvent) {
            // Put the dragged event back onto the timeline
            var event_3 = this.dummyEvent.draggedEvent || null;
            if (event_3) {
                this.putEvent(event_3, { mayIntersect: true });
                var location_3 = this.getLocation(event_3.locationId);
                var events = this.filterLocationEvents(location_3.id);
                this.materializePartial(this.renderEventRow(location_3, events));
            }
            if (this.onEventDragCancel) {
                this.onEventDragCancel(event_3);
            }
            // Clean up the dummy
            this.dematerializePartial('dummyEvent');
            delete this.dummyEvent;
        }
        // TODO: Observer pattern would be better here
        // Rerender the locations in order to apply some classes if needed
        this.materializePartial(this.renderLocations());
    };
    SkedTape.prototype.isAdding = function () {
        return !!this.dummyEvent;
    };
    SkedTape.prototype.setSnapToMins = function (mins) {
        this.snapToMins = mins;
    };
    SkedTape.prototype.completeEventDrag = function () {
        var event = this.dummyEvent;
        // Check for collisions
        if (this.collide(event) || isNaN(event.locationId) || !event.start) {
            if (this.onEventDropRefusal) {
                this.onEventDropRefusal(event);
            }
            return;
        }
        // Add event if the operation hasn't been canceled by any event handler
        if (!this.onEventBeforeDrop || this.onEventBeforeDrop(event)) {
            // At this step there something may have changed by
            // the callback above, so here we do the collision check again.
            try {
                this.dematerializePartial('dummyEvent');
                delete this.dummyEvent;
                // We've checked the locationId to be non NaN above
                var newEvent = this.putEvent(event);
                // Rerender the row of events
                var location_4 = this.getLocation(event.locationId);
                var events = this.filterLocationEvents(location_4.id);
                this.materializePartial(this.renderEventRow(location_4, events));
                if (this.onEventDrop) {
                    this.onEventDrop(newEvent);
                }
                // TODO: Observer pattern would be better here
                // Rerender the locations in order to apply some classes if needed
                this.materializePartial(this.renderLocations());
            }
            catch (e) {
                if (!(e instanceof _SkedEventCollisionError__WEBPACK_IMPORTED_MODULE_2__["default"])) {
                    throw e;
                }
                if (this.onEventDropRefusal) {
                    this.onEventDropRefusal(event);
                }
            }
        }
    };
    /**
     * Mutates dummyEvent to conform a position info.
     *
     * @param picked The position info returned by the pick() function.
     */
    SkedTape.prototype.moveDummyEvent = function (picked) {
        var event = this.dummyEvent;
        var start = picked.date;
        if (this.snapToMins) {
            var hr = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["floorHours"])(start);
            var left = (start.getTime() - hr.getTime()) / _helpers__WEBPACK_IMPORTED_MODULE_1__["MS_PER_MINUTE"];
            var lower = Math.floor(left / this.snapToMins) * this.snapToMins;
            var min = left - lower < this.snapToMins / 2 ? lower : lower + this.snapToMins;
            start = new Date(hr.getTime() + Math.round(min * _helpers__WEBPACK_IMPORTED_MODULE_1__["MS_PER_MINUTE"]));
        }
        event.start = start;
        event.end = new Date(start.getTime() + event.duration);
        if (picked.locationId) {
            var location_5 = this.getLocation(picked.locationId);
            if (!this.canAddIntoLocation || this.canAddIntoLocation(location_5, event)) {
                if (picked.locationId !== event.locationId) {
                    if (this.beforeAddIntoLocation) {
                        this.beforeAddIntoLocation(location_5, event);
                    }
                    event.locationId = picked.locationId;
                    var vNode = this.renderDummyEvent(event);
                    this.dematerializePartial('dummyEvent');
                    this.materializeNewChild('eventRow' + event.locationId, vNode);
                }
                else if (!this.refs.dummyEvent) {
                    var vNode = this.renderDummyEvent(event);
                    this.dematerializePartial('dummyEvent');
                    this.materializeNewChild('eventRow' + event.locationId, vNode);
                }
                else {
                    var vNode = this.renderDummyEvent(event);
                    this.materializePartial(vNode);
                }
            }
        }
    };
    SkedTape.prototype.findEventsAtTime = function (date, locationId) {
        var time = date.getTime();
        return this.getEvents().filter(function (event) { return (event.locationId === locationId &&
            event.start.getTime() <= time && event.end.getTime() >= time); });
    };
    SkedTape.prototype.pick = function (e) {
        var timeline = this.refs.timeline;
        var scalar = (e.pageX - Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["getElementOffset"])(timeline).left) / timeline.clientWidth;
        var time = this.start.getTime() + scalar * (this.end.getTime() - this.start.getTime());
        var rowEl = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["closest"])(e.target, '.sked-tape__event-row');
        return {
            date: new Date(Math.round(time)),
            locationId: rowEl ? parseInt(rowEl.dataset.locationId, 10) : undefined,
        };
    };
    SkedTape.prototype.registerEventHandlers = function () {
        this.registerEventHandler('click', '.sked-tape__event', this.handleEventClick.bind(this));
        this.registerEventHandler('contextmenu', '.sked-tape__event', this.handleEventContextMenu.bind(this));
        this.registerEventHandler('click', '.sked-tape__timeline-wrap', this.handleTimelineClick.bind(this));
        this.registerEventHandler('contextmenu', '.sked-tape__timeline-wrap', this.handleTimelineContextMenu.bind(this));
        this.registerEventHandler('mousemove', '.sked-tape__timeline-wrap', this.handleMouseMove.bind(this));
        this.registerEventHandler('keydown', '.sked-tape__time-frame', this.handleKeyDown.bind(this));
        this.registerEventHandler('wheel', '.sked-tape__time-frame', this.handleWheel.bind(this));
        this.registerEventHandler('click', '.sked-tape__intersection', this.handleIntersectionClick.bind(this));
        this.registerEventHandler('contextmenu', '.sked-tape__intersection', this.handleIntersectionContextMenu.bind(this));
    };
    SkedTape.prototype.unregisterEventHandlers = function () {
        for (var _i = 0, _a = this.listeners; _i < _a.length; _i++) {
            var listener = _a[_i];
            this.root.removeEventListener(listener.type, listener.listener);
        }
        this.listeners = [];
    };
    SkedTape.prototype.registerEventHandler = function (type, selector, handler) {
        var listener = function (event) {
            var currentTarget = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["closest"])(event.target, selector);
            if (currentTarget) {
                handler(event, currentTarget);
            }
        };
        this.listeners.push({ listener: listener, type: type });
        this.root.addEventListener(type, listener);
    };
    SkedTape.prototype.handleEventClick = function (mouseEvent, currentTarget) {
        var eventId = parseInt(currentTarget.dataset.eventId, 10);
        if (this.dndEnabled) {
            this.dragEvent(eventId);
        }
        else if (this.onEventClick) {
            this.onEventClick(this.getEvent(eventId), mouseEvent);
        }
    };
    SkedTape.prototype.handleEventContextMenu = function (mouseEvent, currentTarget) {
        mouseEvent.preventDefault();
        if (this.rmbCancelsDrag && this.isAdding()) {
            this.cancelEventDrag();
        }
        else if (this.onEventMenu) {
            var eventId = parseInt(currentTarget.dataset.eventId, 10);
            this.onEventMenu(this.getEvent(eventId), mouseEvent);
        }
    };
    SkedTape.prototype.handleIntersectionClick = function (mouseEvent) {
        if (this.onIntersectionClick) {
            var pointData = this.pick(mouseEvent);
            var events = this.findEventsAtTime(pointData.date, pointData.locationId);
            this.onIntersectionClick(events, pointData, mouseEvent);
        }
    };
    SkedTape.prototype.handleIntersectionContextMenu = function (mouseEvent) {
        mouseEvent.preventDefault();
        if (this.rmbCancelsDrag && this.isAdding()) {
            this.cancelEventDrag();
        }
        else if (this.onIntersectionMenu) {
            var pointData = this.pick(mouseEvent);
            var events = this.findEventsAtTime(pointData.date, pointData.locationId);
            this.onIntersectionMenu(events, pointData, mouseEvent);
        }
    };
    SkedTape.prototype.handleTimelineClick = function (mouseEvent) {
        if (!Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["eventFromSkedEvent"])(mouseEvent)) {
            if (this.dummyEvent && this.dummyEvent.locationId) {
                this.completeEventDrag();
            }
            else if (!this.dummyEvent && this.onTimelineClick) {
                this.onTimelineClick(mouseEvent, this.pick(mouseEvent));
            }
        }
    };
    SkedTape.prototype.handleTimelineContextMenu = function (mouseEvent) {
        if (!Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["eventFromSkedEvent"])(mouseEvent)) {
            mouseEvent.preventDefault();
            if (this.rmbCancelsDrag && this.isAdding()) {
                this.cancelEventDrag();
            }
            else if (this.onTimelineMenu) {
                this.onTimelineMenu(mouseEvent, this.pick(mouseEvent));
            }
        }
    };
    SkedTape.prototype.handleMouseMove = function (mouseEvent) {
        this.lastPicked = this.pick(mouseEvent);
        if (this.dummyEvent) {
            this.moveDummyEvent(this.lastPicked);
        }
    };
    SkedTape.prototype.handleKeyDown = function (kbdEvent) {
        if (kbdEvent.key === '+') {
            this.zoomIn();
        }
        else if (kbdEvent.key === '-') {
            this.zoomOut();
        }
    };
    SkedTape.prototype.handleWheel = function (wheelEvent) {
        if (wheelEvent.ctrlKey) {
            wheelEvent.preventDefault();
            wheelEvent.stopPropagation();
            if (wheelEvent.deltaY < 0) {
                this.zoomIn();
            }
            else {
                this.zoomOut();
            }
        }
        else if (!wheelEvent.shiftKey && this.scrollWithYWheel) {
            wheelEvent.preventDefault();
            wheelEvent.stopPropagation();
            var frame = this.refs.frame;
            this.smoothScroller.addScrollBy({
                left: (wheelEvent.deltaY > 0 ? 1 : -1) * frame.clientWidth * 0.9,
            });
        }
    };
    SkedTape.prototype.isGapTooSmall = function (events) {
        if (this.tooSmallInterval !== false) {
            var lastEndTime = 0;
            for (var _i = 0, events_2 = events; _i < events_2.length; _i++) {
                var event_4 = events_2[_i];
                if (event_4.start.getTime() - lastEndTime <= this.tooSmallInterval) {
                    return true;
                }
                lastEndTime = event_4.end.getTime();
            }
        }
        return false;
    };
    SkedTape.prototype.computeEventWidth = function (event) {
        // Clamp to timeline edge
        var eventEnd = this.end < event.end ? this.end : event.end;
        var durationHours = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["getDurationHours"])(event.start, eventEnd);
        return durationHours / Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["getDurationHours"])(this.start, this.end) * 100 + '%';
    };
    SkedTape.prototype.computeEventOffset = function (event) {
        var hoursBeforeEvent = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["getDurationHours"])(this.start, event.start);
        return hoursBeforeEvent / Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["getDurationHours"])(this.start, this.end) * 100 + '%';
    };
    SkedTape.prototype.findEventJustBefore = function (event) {
        return this.events.reduce(function (found, iEvent) { return ((iEvent.locationId === event.locationId && // the same location
            iEvent.end < event.start && // ends before
            (!found || found.end < iEvent.end) // comes after the found one
        )
            ? iEvent : found); }, null);
    };
    SkedTape.prototype.findEventJustAfter = function (event) {
        return this.events.reduce(function (found, iEvent) { return ((iEvent.locationId === event.locationId && // the same location
            iEvent.start > event.end && // starts after
            (!found || found.start > iEvent.start) // comes before the found one
        )
            ? iEvent : found); }, null);
    };
    SkedTape.prototype.filterLocationEvents = function (locationId) {
        var _this = this;
        return this.events
            .filter(function (event) { return (event.locationId === locationId &&
            event.end > _this.start &&
            event.start < _this.end); })
            // Sort the events by time ascending in order that the gap
            // between each two of them may be determined in a cycle.
            .sort(function (a, b) { return a.start.getTime() - b.start.getTime(); });
    };
    SkedTape.prototype.getTimelineSpan = function () {
        return this.end.getTime() - this.start.getTime();
    };
    SkedTape.prototype.computeCanvasWidth = function () {
        var base = this.getTimelineSpan() / _helpers__WEBPACK_IMPORTED_MODULE_1__["MS_PER_HOUR"] * this.baseHourWidth;
        return Math.round(base * this.zoom);
    };
    SkedTape.prototype.cleanup = function () {
        if (this.indicatorTimeout) {
            clearInterval(this.indicatorTimeout);
            delete this.indicatorTimeout;
        }
        this.unregisterEventHandlers();
        this.unscheduleRerender();
    };
    SkedTape.prototype.renderLocation = function (location) {
        var canAdd;
        if (this.isAdding()) {
            canAdd = !this.canAddIntoLocation || this.canAddIntoLocation(location, this.dummyEvent);
        }
        var classes = this.locationClasses(location, canAdd);
        classes = classes instanceof Array ? classes : [classes];
        return createElement('div', {
            className: classes.concat('sked-tape__location').join(' '),
            dataset: { id: location.id },
            title: location.name,
        }, createElement('div', { className: 'sked-tape__location-text' }, this.renderLocationContent(location, createElement)));
    };
    SkedTape.prototype.renderLocations = function () {
        return createElement('div', {
            className: 'sked-tape__locations',
            ref: 'locations',
        }, this.getLocations().map(this.renderLocation.bind(this)));
    };
    SkedTape.prototype.renderAside = function () {
        return createElement('div', { className: 'sked-tape__aside' }, [
            createElement('div', { className: 'sked-tape__caption' }, this.caption),
            this.renderLocations(),
        ]);
    };
    SkedTape.prototype.renderEvent = function (event, classes) {
        if (classes === void 0) { classes = []; }
        var BE_CLASS = 'sked-tape__event';
        classes.push(BE_CLASS);
        if (event.className) {
            classes.push(event.className);
        }
        if (event.disabled) {
            classes.push(BE_CLASS + '--disabled');
        }
        if (event.active) {
            classes.push(BE_CLASS + '--active');
        }
        var isAnchor = !!event.url && !event.disabled;
        var props = {
            className: classes.join(' '),
            dataset: __assign({ eventId: event.id }, (event.data || {})),
            style: {
                left: this.computeEventOffset(event),
                width: this.computeEventWidth(event),
            },
            title: event.name,
        };
        if (isAnchor) {
            props.href = event.url;
        }
        return createElement(isAnchor ? 'a' : 'div', props, createElement('div', { className: 'sked-tape__center' }, this.renderEventContent(event, createElement)));
    };
    SkedTape.prototype.renderEvents = function (events) {
        var _this = this;
        return events.map(function (event, index) {
            var classes = [];
            // Check the gap is too small among the nearest events
            var nearestEvents = events.slice(Math.max(index - 1, 0), index + 2);
            if (_this.isGapTooSmall(nearestEvents)) {
                classes.push('sked-tape__event--low-gap');
            }
            else if (Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["countRangesIntersections"])(nearestEvents) > 0) {
                // We just have no a specific class for that yet...
                classes.push('sked-tape__event--low-gap');
            }
            return _this.renderEvent(event, classes);
        }, this);
    };
    SkedTape.prototype.renderTimeIndicator = function (location) {
        var indicatorClasses = ['sked-tape__indicator'];
        if (this.timeIndicatorSerifs) {
            indicatorClasses.push('sked-tape__indicator--serifs');
        }
        var style = {};
        var tzOffset = location.tzOffset === undefined ? this.tzOffset : location.tzOffset;
        var tzDiff = tzOffset - CURRENT_TZ_OFFSET;
        var now = new Date().getTime() - tzDiff * _helpers__WEBPACK_IMPORTED_MODULE_1__["MS_PER_MINUTE"];
        var start = this.start.getTime();
        var end = this.end.getTime();
        if (now >= start && now <= end) {
            style.left = 100 * (now - start) / (end - start) + '%';
        }
        else {
            style.display = 'none';
        }
        return createElement('div', {
            className: indicatorClasses.join(' '),
            ref: 'timeIndicator' + location.id,
            style: style,
        });
    };
    SkedTape.prototype.renderGap = function (gap, start, end) {
        var block = { start: start, end: end };
        return createElement('div', {
            className: 'sked-tape__gap',
            style: {
                left: this.computeEventOffset(block),
                width: this.computeEventWidth(block),
            },
        }, createElement('span', { className: 'sked-tape__gap-text' }, Math.round(gap / _helpers__WEBPACK_IMPORTED_MODULE_1__["MS_PER_MINUTE"]) + ''));
    };
    SkedTape.prototype.renderGaps = function (events, intersections) {
        var lastEndTime = 0;
        var lastEnd;
        var gaps = [];
        var _loop_1 = function (event_5) {
            // whether the event intersects with some other
            var intersects = !!intersections.find(function (intersection) { return !!intersection.events.find(function (iEvent) { return iEvent.id === event_5.id; }); });
            var gap = event_5.start.getTime() - lastEndTime;
            if (gap >= this_1.minTimeGapShown && gap <= this_1.maxTimeGapShown && !intersects) {
                gaps.push(this_1.renderGap(gap, lastEnd, event_5.start));
            }
            lastEnd = event_5.end;
            lastEndTime = lastEnd.getTime();
        };
        var this_1 = this;
        for (var _i = 0, events_3 = events; _i < events_3.length; _i++) {
            var event_5 = events_3[_i];
            _loop_1(event_5);
        }
        return gaps;
    };
    SkedTape.prototype.renderIntersections = function (intersections) {
        var _this = this;
        return intersections
            .filter(function (i) { return i.end >= _this.start && i.start <= _this.end; })
            .map(function (intersection) { return createElement('div', {
            className: 'sked-tape__intersection',
            dataset: { events: intersection.events },
            style: {
                left: _this.computeEventOffset(intersection),
                width: _this.computeEventWidth(intersection),
            },
        }); });
    };
    SkedTape.prototype.renderDummyEvent = function (event) {
        var leftText = [this.format.time(event.start)];
        var rightText = [this.format.time(event.end)];
        if (this.showIntermission) {
            var prevEvent = this.findEventJustBefore(event);
            if (prevEvent) {
                var interval = (event.start.getTime() - prevEvent.end.getTime()) / _helpers__WEBPACK_IMPORTED_MODULE_1__["MS_PER_MINUTE"];
                if (interval >= this.intermissionRange[0] &&
                    interval <= this.intermissionRange[1]) {
                    leftText = leftText.concat(createElement('br'), this.format.duration(interval * _helpers__WEBPACK_IMPORTED_MODULE_1__["MS_PER_MINUTE"]));
                }
            }
            var nextEvent = this.findEventJustAfter(event);
            if (nextEvent) {
                var interval = (nextEvent.start.getTime() - event.end.getTime()) / _helpers__WEBPACK_IMPORTED_MODULE_1__["MS_PER_MINUTE"];
                if (interval >= this.intermissionRange[0] &&
                    interval <= this.intermissionRange[1]) {
                    rightText = rightText.concat(createElement('br'), this.format.duration(interval * _helpers__WEBPACK_IMPORTED_MODULE_1__["MS_PER_MINUTE"]));
                }
            }
        }
        var timeClass = 'sked-tape__dummy-event-time';
        var leftClass = timeClass + ' ' + timeClass + '--left';
        var rightClass = timeClass + ' ' + timeClass + '--right';
        return createElement('div', {
            className: 'sked-tape__dummy-event',
            ref: 'dummyEvent',
            style: {
                left: this.computeEventOffset(event),
                width: this.computeEventWidth(event),
            },
        }, [
            createElement('div', { className: leftClass }, leftText),
            createElement('div', { className: rightClass }, rightText),
        ]);
    };
    SkedTape.prototype.renderEventRow = function (location, events) {
        var intersections = this.getIntersections(location.id);
        var indicatorNode = this.renderTimeIndicator(location);
        var eventNodes = this.renderEvents(events);
        var gapNodes = this.renderGaps(events, intersections);
        var intersectionNodes = this.renderIntersections(intersections);
        var dummyEventNode = [];
        if (this.dummyEvent && this.dummyEvent.locationId === location.id) {
            dummyEventNode = this.renderDummyEvent(this.dummyEvent);
        }
        return createElement('li', {
            className: 'sked-tape__event-row',
            dataset: { locationId: location.id },
            ref: 'eventRow' + location.id,
        }, [indicatorNode].concat(eventNodes, gapNodes, intersectionNodes, dummyEventNode));
    };
    SkedTape.prototype.renderTimeline = function () {
        var _this = this;
        var locations = this.getLocations();
        // Array of array of events. The outer array is mapped from locations.
        var eventsByRows = locations.map(function (location) { return _this.filterLocationEvents(location.id); });
        return createElement('ul', {
            className: 'sked-tape__timeline',
            ref: 'timeline',
        }, locations.map(function (location, i) { return _this.renderEventRow(location, eventsByRows[i]); }));
    };
    SkedTape.prototype.renderHours = function () {
        var _this = this;
        var timePoints = [];
        var tick = new Date(this.start);
        while (tick.getTime() <= this.end.getTime()) {
            timePoints.push(new Date(tick));
            tick.setTime(tick.getTime() + 60 * 60 * 1000);
        }
        var lastTimePoint = timePoints.pop();
        return createElement('div', { className: 'sked-tape__hours' }, createElement('ul', null, timePoints.map(function (timePoint, index) {
            var times = [];
            for (var i = 0; i < (index === timePoints.length - 1 ? 2 : 1); i++) {
                var hour = i === 0 ? timePoint.getHours() : lastTimePoint.getHours();
                times.push(createElement('time', { datetime: (i === 0 ? timePoint : lastTimePoint).toISOString() }, _this.format.hours(hour === 24 ? 0 : hour)));
            }
            return createElement('li', null, times);
        })));
    };
    SkedTape.prototype.renderDates = function () {
        var firstMidnight = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["getMidnightAfter"])(this.start);
        var lastMidnight = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["getMidnightBefore"])(this.end);
        var queue = [];
        if (firstMidnight > lastMidnight) {
            // The range is within the same day
            queue.push({ weight: 1, text: this.format.date(this.start) });
        }
        else {
            queue.push({
                text: this.format.date(this.start),
                weight: Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["getMsToMidnight"])(this.start) / _helpers__WEBPACK_IMPORTED_MODULE_1__["MS_PER_DAY"],
            });
            for (var day = new Date(firstMidnight); day < lastMidnight;) {
                day.setTime(day.getTime() + 1000);
                queue.push({ weight: 1, text: this.format.date(day) });
                day.setTime(day.getTime() + _helpers__WEBPACK_IMPORTED_MODULE_1__["MS_PER_DAY"] - 1000);
            }
            queue.push({
                text: this.format.date(this.end),
                weight: Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["getMsFromMidnight"])(this.end) / _helpers__WEBPACK_IMPORTED_MODULE_1__["MS_PER_DAY"],
            });
        }
        var totalWeight = queue.reduce(function (total, item) { return total + item.weight; }, 0);
        var duration = this.end.getTime() - this.start.getTime();
        return createElement('ul', { className: 'sked-tape__dates' }, queue.map(function (item) {
            var proportion = item.weight / totalWeight;
            var classes = ['sked-tape__date'];
            if (proportion * duration <= _helpers__WEBPACK_IMPORTED_MODULE_1__["SHORT_DURATION"]) {
                classes.push('sked-tape__date--short');
            }
            return createElement('li', {
                className: classes.join(' '),
                style: { width: (proportion * 100).toFixed(10) + '%' },
                title: item.text,
            });
        }));
    };
    SkedTape.prototype.renderGrid = function () {
        var n = Math.floor((this.end.getTime() - this.start.getTime()) / _helpers__WEBPACK_IMPORTED_MODULE_1__["MS_PER_HOUR"]);
        var lis = [];
        while (n-- > 0) {
            lis.push(createElement('li'));
        }
        return createElement('ul', { className: 'sked-tape__grid' }, lis);
    };
    SkedTape.prototype.renderTimeWrap = function (oldScroll) {
        var hours = this.renderHours();
        return createElement('div', { className: 'sked-tape__time-wrap' }, createElement('div', {
            className: 'sked-tape__time-frame',
            ref: 'frame',
            scrollLeft: oldScroll || 0,
            tabIndex: 0,
        }, createElement('div', {
            className: 'sked-tape__time-canvas',
            ref: 'canvas',
            style: {
                width: this.computeCanvasWidth() + 'px',
            },
        }, (this.showDates ? [this.renderDates()] : []).concat([
            hours,
            createElement('div', { className: 'sked-tape__timeline-wrap' }, [
                this.renderGrid(),
                this.renderTimeline(),
            ]),
            hours.clone(),
        ]))));
    };
    SkedTape.prototype.render = function (_a) {
        var _this = this;
        var _b = (_a === void 0 ? {} : _a).preserveScroll, preserveScroll = _b === void 0 ? true : _b;
        var oldScrollLeft = 0;
        if (preserveScroll && this.refs.frame) {
            oldScrollLeft = this.refs.frame.scrollLeft;
        }
        this.cleanup();
        var classes = ['sked-tape'];
        if (this.showDates) {
            classes.push('sked-tape--has-dates');
        }
        if (this.zoom < 1) {
            classes.push('sked-tape--condensed');
        }
        var vRoot = createElement('div', { className: classes.join(' ') }, [
            this.renderAside(),
            this.renderTimeWrap(oldScrollLeft),
        ]);
        this.materialize(vRoot);
        if (!this.smoothScroller) {
            this.smoothScroller = new _SmoothScroller__WEBPACK_IMPORTED_MODULE_3__["default"](this.refs.frame);
        }
        else {
            this.smoothScroller.resetElement(this.refs.frame);
        }
        this.registerEventHandlers();
        this.indicatorTimeout = setInterval(function () {
            for (var _i = 0, _a = _this.locations; _i < _a.length; _i++) {
                var location_6 = _a[_i];
                _this.materializePartial(_this.renderTimeIndicator(location_6));
            }
        }, 1000);
    };
    SkedTape.prototype.scheduleRerender = function () {
        var _this = this;
        if (!this.animFrameId) {
            if (window.requestAnimationFrame) {
                this.animFrameId = requestAnimationFrame(function () {
                    delete _this.animFrameId;
                    _this.render();
                });
            }
            else {
                this.animFrameId = setTimeout(function () {
                    delete _this.animFrameId;
                    _this.render();
                }, 0);
            }
        }
    };
    SkedTape.prototype.unscheduleRerender = function () {
        if (this.animFrameId) {
            if (window.cancelAnimationFrame) {
                cancelAnimationFrame(this.animFrameId);
            }
            else {
                clearTimeout(this.animFrameId);
            }
            delete this.animFrameId;
        }
    };
    SkedTape.format = DefaultFormatters;
    return SkedTape;
}(_VTree__WEBPACK_IMPORTED_MODULE_5__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (SkedTape);


/***/ }),

/***/ "./src/SmoothScroller.ts":
/*!*******************************!*\
  !*** ./src/SmoothScroller.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Does linear interpolation between `a` and `b` by factor `f`.
 */
function lerp(a, b, f) {
    return a + (b - a) * f;
}
/**
 * Clamps value x between a and b.
 */
function clamp(x, a, b) {
    return Math.max(a, Math.min(b, x));
}
/**
 * A cross-browser scrolling controller which gathers srolling messages and
 * combines them appropriately to animation tween to play. In particular it
 * allows to make the 1st mouse wheel scroll horizontally rather than vertically.
 * It also can be used to create a panning effect with the mouse.
 * The object of this class is designed to be aggregated in a controlled
 * component.
 */
var SmoothScroller = /** @class */ (function () {
    function SmoothScroller(el) {
        var _this = this;
        this.el = el;
        this.from = { left: 0, top: 0 };
        this.timerId = null;
        this.startTime = 0;
        this.duration = 100;
        this.onFrame = function () {
            var factor = (Date.now() - _this.startTime) / _this.duration;
            _this.step(factor);
            if (factor < 1) {
                _this.scheduleNextFrame();
            }
            else {
                _this.timerId = null;
                _this.to = null;
            }
        };
    }
    /**
     * Must be called whenever the related element is replaced by some other.
     * For example, it may happen if DOM tree being changed by your frontend
     * framefork (like React / Vue / Angular).
     */
    SmoothScroller.prototype.resetElement = function (el) {
        if (this.el !== el) {
            this.stop();
            this.el = el;
            this.to = null;
        }
    };
    /**
     * Adds some delta to the scroll target and starts playing the animation.
     * The function doesn't stop the existing animation, if any, but goes between
     * them smoothly.
     */
    SmoothScroller.prototype.addScrollBy = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.left, left = _c === void 0 ? 0 : _c, _d = _b.top, top = _d === void 0 ? 0 : _d;
        this.from = {
            left: this.el.scrollLeft,
            top: this.el.scrollTop,
        };
        this.to = {
            left: clamp((this.to ? this.to.left : this.from.left) + left, 0, this.maxScrollLeft),
            top: clamp((this.to ? this.to.top : this.from.left) + top, 0, this.maxScrollTop),
        };
        this.play();
    };
    /**
     * Should be used to safely release the resources involved.
     */
    SmoothScroller.prototype.destroy = function () {
        this.unscheduleNextFrame();
    };
    SmoothScroller.prototype.stop = function (_a) {
        var _b = (_a === void 0 ? {} : _a).goToEnd, goToEnd = _b === void 0 ? false : _b;
        if (goToEnd) {
            this.step(1);
        }
        if (this.timerId) {
            this.unscheduleNextFrame();
        }
        this.from = {
            left: this.el.scrollLeft,
            top: this.el.scrollTop,
        };
    };
    SmoothScroller.prototype.play = function (_a) {
        var _b = (_a === void 0 ? {} : _a).reset, reset = _b === void 0 ? true : _b;
        if (this.to) {
            if (reset) {
                this.startTime = Date.now();
            }
            if (!this.timerId) {
                this.scheduleNextFrame();
            }
        }
    };
    Object.defineProperty(SmoothScroller.prototype, "maxScrollLeft", {
        get: function () {
            return this.el.scrollWidth - this.el.clientWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmoothScroller.prototype, "maxScrollTop", {
        get: function () {
            return this.el.scrollHeight - this.el.clientHeight;
        },
        enumerable: true,
        configurable: true
    });
    SmoothScroller.prototype.stepScrollPos = function (factor) {
        return {
            left: lerp(this.from.left, this.to.left, clamp(factor, 0, 1)),
            top: lerp(this.from.top, this.to.top, clamp(factor, 0, 1)),
        };
    };
    SmoothScroller.prototype.step = function (factor) {
        if (this.to) {
            var scrollPos = this.stepScrollPos(factor);
            this.el.scrollLeft = scrollPos.left;
            this.el.scrollTop = scrollPos.top;
        }
    };
    SmoothScroller.prototype.scheduleNextFrame = function () {
        this.timerId = window.requestAnimationFrame ?
            requestAnimationFrame(this.onFrame) :
            setTimeout(this.onFrame, 1000 / 60);
    };
    SmoothScroller.prototype.unscheduleNextFrame = function () {
        if (this.timerId) {
            if (window.requestAnimationFrame) {
                cancelAnimationFrame(this.timerId);
            }
            else {
                clearTimeout(this.timerId);
            }
            this.timerId = null;
        }
    };
    return SmoothScroller;
}());
/* harmony default export */ __webpack_exports__["default"] = (SmoothScroller);


/***/ }),

/***/ "./src/VNode.ts":
/*!**********************!*\
  !*** ./src/VNode.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.clone */ "./node_modules/lodash.clone/index.js");
/* harmony import */ var lodash_clone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_clone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_difference__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash.difference */ "./node_modules/lodash.difference/index.js");
/* harmony import */ var lodash_difference__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_difference__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_intersection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash.intersection */ "./node_modules/lodash.intersection/index.js");
/* harmony import */ var lodash_intersection__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_intersection__WEBPACK_IMPORTED_MODULE_2__);



var INTERNAL_PROPS = ['key', 'ref'];
/**
 * Returns a boolean value indicating whether the property is used by VDom
 * internally and should not be displayed in real DOM.
 */
function isInternalProp(propName) {
    return INTERNAL_PROPS.indexOf(propName) >= 0;
}
/**
 * Resets the property belonging to an instance of HTMLElement to its default value.
 */
function assignDefaultElementProp(elem, propName) {
    switch (propName) {
        case 'style':
            elem.style.cssText = '';
            break;
        case 'dataset':
            for (var _i = 0, _a = Object.keys(elem.dataset); _i < _a.length; _i++) {
                var key = _a[_i];
                delete elem.dataset[key];
            }
            break;
        default:
            elem[propName] = '';
    }
}
/**
 * Assigns the value of some property belonging to an instance of HTMLElement.
 *
 * The main purpose on this function is to unify assigning properties either
 * of string or object type.
 */
function assignElementProp(elem, propName, value) {
    if (typeof value === 'object') {
        assignDefaultElementProp(elem, propName);
        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
            var key = _a[_i];
            elem[propName][key] = value[key];
        }
    }
    else {
        elem[propName] = value;
    }
}
/**
 * Represents the virtual node.
 */
var VNode = /** @class */ (function () {
    function VNode(tagName, props, children) {
        this.tagName = tagName;
        this.props = props || {};
        this.children = children ? (children instanceof Array ? children : [children]) : [];
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            if (child instanceof VNode) {
                child.parent = this;
            }
        }
    }
    /**
     * Applies changes to the real DOM so that it would match the virtual tree
     * with root at `dstVNode`.
     *
     * The initial hierarchy of `dstNode` must match the virtual hierarchy
     * described by `srcVNode`.
     *
     * During execution, the function updates references to DOM and VDom nodes in
     * the mapping object `refs`. Only the nodes with the `ref` property set are
     * added to the reference map. The value of the property is used as a key in
     * the map.
     */
    VNode.commit = function (dstNode, dstVNode, srcVNode, refs) {
        if (dstVNode.tagName !== srcVNode.tagName) {
            dstVNode.assign(srcVNode);
            var newNode = dstVNode.render(refs);
            dstNode.parentNode.replaceChild(newNode, dstNode);
            return newNode;
        }
        VNode.commitAttributes(dstNode, dstVNode, srcVNode);
        var dstChild = dstNode.firstChild;
        for (var i = 0; i < Math.max(dstVNode.children.length, srcVNode.children.length); i++) {
            // Skip nodes other than element or text (e.g. attribute or entity ref).
            while (dstChild &&
                dstChild.nodeType !== Node.ELEMENT_NODE &&
                dstChild.nodeType !== Node.TEXT_NODE) {
                dstChild = dstChild.nextSibling;
            }
            if (i >= dstVNode.children.length) { // dstVNode has less children
                if (srcVNode.children[i] instanceof VNode) {
                    var vNode = srcVNode.children[i].clone();
                    dstVNode.appendChild(vNode);
                    dstNode.appendChild(vNode.render(refs));
                }
                else {
                    var text = srcVNode.children[i].toString();
                    dstVNode.appendChild(text);
                    dstNode.appendChild(document.createTextNode(text));
                }
            }
            else if (i >= srcVNode.children.length) { // srcVNode has less children
                if (dstVNode.children[i] instanceof VNode) {
                    dstVNode.children[i].unsetRefsOfSubtree(refs);
                }
                dstVNode.removeChildAt(i--);
                var nextChild = dstChild.nextSibling;
                dstNode.removeChild(dstChild);
                dstChild = nextChild;
            }
            else if (dstVNode.children[i] instanceof VNode &&
                srcVNode.children[i] instanceof VNode) {
                // Both source and destination are VNode which implies the dstChild to
                // be an HTMLElement.
                VNode.commit(dstChild, dstVNode.children[i], srcVNode.children[i], refs);
                dstChild = dstChild.nextSibling;
            }
            else {
                if (dstVNode.children[i] !== srcVNode.children[i]) {
                    var newNode = void 0;
                    if (srcVNode.children[i] instanceof VNode) {
                        // The source node is VNode, the destination is not.
                        dstVNode.replaceChildAt(i, srcVNode.children[i].clone());
                        newNode = dstVNode.children[i].render(refs);
                    }
                    else {
                        // The source node is textual the destination is either
                        // VNode or textual node as well but with some other text.
                        if (dstVNode.children[i] instanceof VNode) {
                            dstVNode.children[i].unsetRefsOfSubtree(refs);
                        }
                        dstVNode.children[i] = srcVNode.children[i];
                        newNode = document.createTextNode(srcVNode.children[i]);
                    }
                    dstNode.replaceChild(newNode, dstChild);
                    dstChild = newNode;
                }
                dstChild = dstChild.nextSibling;
            }
        }
        return dstNode;
    };
    /**
     * A helper which applies changes to properties/attributes of an HTMLElement.
     */
    VNode.commitAttributes = function (dstNode, dstVNode, srcVNode) {
        var dstNames = Object.keys(dstVNode.props);
        var srcNames = Object.keys(srcVNode.props);
        var obsoleteNames = lodash_difference__WEBPACK_IMPORTED_MODULE_1___default()(dstNames, srcNames);
        var newNames = lodash_difference__WEBPACK_IMPORTED_MODULE_1___default()(srcNames, dstNames);
        var commonNames = lodash_intersection__WEBPACK_IMPORTED_MODULE_2___default()(srcNames, dstNames);
        for (var _i = 0, obsoleteNames_1 = obsoleteNames; _i < obsoleteNames_1.length; _i++) {
            var name_1 = obsoleteNames_1[_i];
            if (!isInternalProp(name_1)) {
                if (name_1 in dstNode) {
                    assignDefaultElementProp(dstNode, name_1);
                }
                else {
                    dstNode.removeAttribute(name_1);
                }
            }
            delete dstVNode.props[name_1];
        }
        for (var _a = 0, newNames_1 = newNames; _a < newNames_1.length; _a++) {
            var name_2 = newNames_1[_a];
            var value = srcVNode.props[name_2];
            if (!isInternalProp(name_2)) {
                if (name_2 in dstNode) {
                    assignElementProp(dstNode, name_2, value);
                }
                else {
                    dstNode.setAttribute(name_2, value);
                }
            }
            dstVNode.props[name_2] = value;
        }
        for (var _b = 0, commonNames_1 = commonNames; _b < commonNames_1.length; _b++) {
            var name_3 = commonNames_1[_b];
            if (dstVNode.props[name_3] !== srcVNode.props[name_3]) {
                var value = srcVNode.props[name_3];
                if (!isInternalProp(name_3)) {
                    if (name_3 in dstNode) {
                        assignElementProp(dstNode, name_3, value);
                    }
                    else {
                        dstNode.setAttribute(name_3, value);
                    }
                }
                dstVNode.props[name_3] = value;
            }
        }
    };
    VNode.prototype.clone = function () {
        var children = this.children.map(function (child) { return child instanceof VNode ? child.clone() : lodash_clone__WEBPACK_IMPORTED_MODULE_0___default()(child); });
        return new VNode(this.tagName, lodash_clone__WEBPACK_IMPORTED_MODULE_0___default()(this.props), children);
    };
    /**
     * Copies the data of other VNode to this one.
     * The property `parent` remains untouched.
     */
    VNode.prototype.assign = function (vNode) {
        var _this = this;
        this.tagName = vNode.tagName;
        this.props = lodash_clone__WEBPACK_IMPORTED_MODULE_0___default()(vNode.props);
        this.children = vNode.children.map(function (child) {
            if (child instanceof VNode) {
                child = child.clone();
                child.parent = _this;
                return child;
            }
            return lodash_clone__WEBPACK_IMPORTED_MODULE_0___default()(child);
        });
        return this;
    };
    /**
     * Deletes references declared in props of the vNode and it's children from the
     * `refs` map.
     */
    VNode.prototype.unsetRefsOfSubtree = function (refs) {
        if (this.props.ref) {
            delete refs[this.props.ref]; // ref to an element
            delete refs['#' + this.props.ref]; // ref to a vNode
        }
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            if (child instanceof VNode) {
                child.unsetRefsOfSubtree(refs);
            }
        }
    };
    /**
     * Adds a new child item to the end assigning the property `parent` of `VNode`s.
     */
    VNode.prototype.appendChild = function (child) {
        if (child instanceof VNode) {
            child.parent = this;
        }
        this.children.push(child);
    };
    /**
     * Removes the child by its index from the internal array of children.
     * The method assigns `null` to the `parent` of the `VNode`s removed.
     */
    VNode.prototype.removeChildAt = function (index) {
        if (this.children[index] instanceof VNode) {
            this.children[index].parent = null;
        }
        this.children.splice(index, 1);
    };
    VNode.prototype.replaceChildAt = function (index, child) {
        if (child instanceof VNode) {
            child.parent = this;
        }
        this.children[index] = child;
    };
    /**
     * Creates the DOM tree from this virtual node hierarchy.
     */
    VNode.prototype.render = function (refs) {
        var elem = document.createElement(this.tagName);
        if (this.props) {
            // update refs
            if (refs && this.props.ref) {
                refs[this.props.ref] = elem;
                refs['#' + this.props.ref] = this;
            }
            // Create attributes from props
            for (var _i = 0, _a = Object.keys(this.props); _i < _a.length; _i++) {
                var propName = _a[_i];
                if (propName in elem) {
                    if (typeof this.props[propName] !== 'object') {
                        elem[propName] = this.props[propName];
                    }
                    else {
                        for (var _b = 0, _c = Object.keys(this.props[propName]); _b < _c.length; _b++) {
                            var key = _c[_b];
                            elem[propName][key] = this.props[propName][key];
                        }
                    }
                }
                else if (!isInternalProp(propName)) {
                    elem.setAttribute(propName, this.props[propName]);
                }
            }
        }
        for (var _d = 0, _e = this.children; _d < _e.length; _d++) {
            var child = _e[_d];
            if (child instanceof VNode) {
                elem.appendChild(child.render(refs));
            }
            else {
                elem.appendChild(document.createTextNode(child));
            }
        }
        return elem;
    };
    return VNode;
}());
/* harmony default export */ __webpack_exports__["default"] = (VNode);


/***/ }),

/***/ "./src/VTree.ts":
/*!**********************!*\
  !*** ./src/VTree.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VNode */ "./src/VNode.ts");

/**
 * Represents tree of virtual nodes.
 */
var VTree = /** @class */ (function () {
    function VTree(elem) {
        this.root = elem;
        this.vRoot = new _VNode__WEBPACK_IMPORTED_MODULE_0__["default"](this.root.tagName.toLowerCase());
        this.refs = {};
    }
    VTree.prototype.materialize = function (vNode) {
        this.root = _VNode__WEBPACK_IMPORTED_MODULE_0__["default"].commit(this.root, this.vRoot, vNode, this.refs);
        return this.root;
    };
    /**
     * Rerenders the virtual subtree and alters the corresponding nodes of DOM.
     * You may use this function to update part of VTree.
     */
    VTree.prototype.materializePartial = function (vNode) {
        var ref = vNode.props.ref;
        if (!ref) {
            throw new Error('The vNode given has no ref property');
        }
        var dstVNode = this.refs['#' + ref];
        if (!dstVNode) {
            throw new Error('There is no ref="' + ref + '" defined');
        }
        _VNode__WEBPACK_IMPORTED_MODULE_0__["default"].commit(this.refs[ref], dstVNode, vNode, this.refs);
    };
    /**
     * Rerenders the virtual subtree and alters the corresponding nodes of DOM.
     * You may use this function to update part of VTree by adding a `vNode` to the
     * end of children of the node referenced by `ref`.
     */
    VTree.prototype.materializeNewChild = function (ref, vNode) {
        var dstVNode = this.refs['#' + ref];
        if (!dstVNode) {
            throw new Error('There is no ref="' + ref + '" defined');
        }
        dstVNode.appendChild(vNode);
        this.refs[ref].appendChild(vNode.render(this.refs));
    };
    /**
     * Rerenders the virtual subtree and alters the corresponding nodes of DOM.
     * You may use this function to update part of VTree.
     */
    VTree.prototype.dematerializePartial = function (ref) {
        var dstVNode = this.refs['#' + ref];
        if (dstVNode) {
            // Remove real and virtual nodes from their trees
            var elem = this.refs[ref];
            elem.parentNode.removeChild(elem);
            dstVNode.parent.removeChildAt(dstVNode.parent.children.indexOf(dstVNode));
            // Make sure no refs will remain
            dstVNode.unsetRefsOfSubtree(this.refs);
        }
    };
    return VTree;
}());
/* harmony default export */ __webpack_exports__["default"] = (VTree);


/***/ }),

/***/ "./src/helpers.ts":
/*!************************!*\
  !*** ./src/helpers.ts ***!
  \************************/
/*! exports provided: SECS_PER_DAY, MS_PER_DAY, MS_PER_MINUTE, MS_PER_HOUR, SHORT_DURATION, rangesIntersection, countRangesIntersections, closest, removeClass, addClass, getElementOffset, floorHours, ceilHours, eventFromSkedEvent, getDurationHours, getMsFromMidnight, getMsToMidnight, getMidnightAfter, getMidnightBefore, gapBetween */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECS_PER_DAY", function() { return SECS_PER_DAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MS_PER_DAY", function() { return MS_PER_DAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MS_PER_MINUTE", function() { return MS_PER_MINUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MS_PER_HOUR", function() { return MS_PER_HOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHORT_DURATION", function() { return SHORT_DURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangesIntersection", function() { return rangesIntersection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countRangesIntersections", function() { return countRangesIntersections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return closest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementOffset", function() { return getElementOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floorHours", function() { return floorHours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceilHours", function() { return ceilHours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventFromSkedEvent", function() { return eventFromSkedEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDurationHours", function() { return getDurationHours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMsFromMidnight", function() { return getMsFromMidnight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMsToMidnight", function() { return getMsToMidnight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMidnightAfter", function() { return getMidnightAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMidnightBefore", function() { return getMidnightBefore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gapBetween", function() { return gapBetween; });
var SECS_PER_DAY = 24 * 60 * 60;
var MS_PER_DAY = SECS_PER_DAY * 1000;
var MS_PER_MINUTE = 60 * 1000;
var MS_PER_HOUR = 60 * MS_PER_MINUTE;
var SHORT_DURATION = 2 * MS_PER_HOUR - 1; // < this ? .sked-tape__date--short
function rangesIntersection(a, b) {
    var min = a.start < b.start ? a : b;
    var max = min === a ? b : a;
    // min ends before max starts -> no intersection
    if (min.end < max.start) {
        return null;
    }
    return {
        end: min.end < max.end ? min.end : max.end,
        start: max.start,
    };
}
function countRangesIntersections(ranges) {
    var count = 0;
    for (var i = 1; i < ranges.length; i++) {
        if (rangesIntersection(ranges[i - 1], ranges[i]) !== null) {
            ++count;
        }
    }
    return count;
}
function closest(el, selector) {
    while (el && !el.matches(selector)) {
        el = el.parentElement;
    }
    return el;
}
function removeClass(el, names) {
    var prohibited = names.split(' ');
    var className = el.className
        .split(' ')
        .filter(function (name) { return prohibited.indexOf(name) < 0; })
        .join(' ');
    if (el.className !== className) {
        el.className = className;
    }
}
function addClass(el, names) {
    var prohibited = names.split(' ');
    var className = el.className
        .split(' ')
        .filter(function (name) { return prohibited.indexOf(name) < 0; })
        .concat(prohibited)
        .join(' ');
    if (el.className !== className) {
        el.className = className;
    }
}
function getElementOffset(element) {
    var de = document.documentElement;
    var box = element.getBoundingClientRect();
    var top = box.top + window.pageYOffset - de.clientTop;
    var left = box.left + window.pageXOffset - de.clientLeft;
    return { top: top, left: left };
}
function floorHours(date) {
    var floor = new Date(date);
    floor.setHours(date.getHours(), 0, 0, 0);
    return floor;
}
function ceilHours(date) {
    var floor = floorHours(date);
    if (floor < date) { // not equal
        floor.setTime(floor.getTime() + MS_PER_HOUR);
    }
    return floor;
}
function eventFromSkedEvent(e) {
    return !!closest(e.target, '.sked-tape__event, .sked-tape__intersection');
}
function getDurationHours(start, end) {
    return (end.getTime() - start.getTime()) / MS_PER_HOUR;
}
function getMsFromMidnight(d) {
    var secs = d.getHours() * 60 * 60 + d.getMinutes() * 60 + d.getSeconds();
    return secs * 1000 + d.getMilliseconds();
}
function getMsToMidnight(d) {
    return MS_PER_DAY - getMsFromMidnight(d);
}
function getMidnightAfter(d) {
    d = new Date(d);
    d.setTime(d.getTime() + getMsToMidnight(d));
    return d;
}
function getMidnightBefore(d) {
    d = new Date(d);
    d.setTime(d.getTime() - getMsFromMidnight(d));
    return d;
}
function gapBetween(a, b) {
    var min = a.start < b.start ? a : b;
    var max = min === a ? b : a;
    return max.start.getTime() - min.end.getTime();
}


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SkedTape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SkedTape */ "./src/SkedTape.ts");
/* harmony import */ var _SkedTape_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SkedTape.sass */ "./src/SkedTape.sass");
/* harmony import */ var _SkedTape_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_SkedTape_sass__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (_SkedTape__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=sked-tape.js.map