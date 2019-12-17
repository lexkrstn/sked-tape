(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash/clone"), require("lodash/cloneDeep"), require("lodash/difference"), require("lodash/intersection"), require("lodash/omit"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash/clone", "lodash/cloneDeep", "lodash/difference", "lodash/intersection", "lodash/omit"], factory);
	else if(typeof exports === 'object')
		exports["SkedTape"] = factory(require("lodash/clone"), require("lodash/cloneDeep"), require("lodash/difference"), require("lodash/intersection"), require("lodash/omit"));
	else
		root["SkedTape"] = factory(root["_"]["clone"], root["_"]["cloneDeep"], root["_"]["difference"], root["_"]["intersection"], root["_"]["omit"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_lodash_clone__, __WEBPACK_EXTERNAL_MODULE_lodash_cloneDeep__, __WEBPACK_EXTERNAL_MODULE_lodash_difference__, __WEBPACK_EXTERNAL_MODULE_lodash_intersection__, __WEBPACK_EXTERNAL_MODULE_lodash_omit__) {
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
/* harmony import */ var lodash_clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/clone */ "lodash/clone");
/* harmony import */ var lodash_clone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_clone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/cloneDeep */ "lodash/cloneDeep");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/omit */ "lodash/omit");
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ "./src/helpers.ts");
/* harmony import */ var _SkedEventCollisionError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SkedEventCollisionError */ "./src/SkedEventCollisionError.ts");
/* harmony import */ var _SmoothScroller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SmoothScroller */ "./src/SmoothScroller.ts");
/* harmony import */ var _VNode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./VNode */ "./src/VNode.ts");
/* harmony import */ var _VTree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./VTree */ "./src/VTree.ts");
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
    return new _VNode__WEBPACK_IMPORTED_MODULE_6__["default"](tagName, props, children);
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
        var h = Math.floor(ms / _helpers__WEBPACK_IMPORTED_MODULE_3__["MS_PER_HOUR"]);
        var m = Math.floor((ms % _helpers__WEBPACK_IMPORTED_MODULE_3__["MS_PER_HOUR"]) / _helpers__WEBPACK_IMPORTED_MODULE_3__["MS_PER_MINUTE"]);
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
        _this.dndEnabled = false;
        _this.dateTextWidth = 110;
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
        _this.minTimeGapShown = 1 * _helpers__WEBPACK_IMPORTED_MODULE_3__["MS_PER_MINUTE"];
        _this.maxTimeGapShown = 60 * _helpers__WEBPACK_IMPORTED_MODULE_3__["MS_PER_MINUTE"] - 1;
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
        Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["removeClass"])(this.root, 'sked-tape sked-tape--has-dates');
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
        this.start = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["floorHours"])(start);
        this.end = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["ceilHours"])(end);
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
            end = new Date(midnight.getTime() + _helpers__WEBPACK_IMPORTED_MODULE_3__["MS_PER_DAY"]);
        }
        this.setTimespan(start, end, opts);
    };
    SkedTape.prototype.getZoom = function () {
        return this.zoom;
    };
    SkedTape.prototype.setZoom = function (zoom) {
        this.zoom = Math.max(Math.min(zoom, this.maxZoom), this.minZoom);
        this.refs.canvas.style.width = this.computeCanvasWidth() + 'px';
        (zoom >= 1 ? _helpers__WEBPACK_IMPORTED_MODULE_3__["removeClass"] : _helpers__WEBPACK_IMPORTED_MODULE_3__["addClass"])(this.root, 'sked-tape--condensed');
        // Rerender dates manually here so that they may decide whether it is
        // required for them to be rendered with or without &--short modifier.
        this.materializePartial(this.renderDates());
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
                Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["gapBetween"])(event, iEvent) < _this.minIntervalBetween); });
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
            data: event.data ? lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1___default()(event.data) : {},
            disabled: event.disabled || false,
            end: new Date(event.end),
            id: event.id ? event.id : this.uniqId(),
            locationId: event.locationId,
            name: event.name,
            start: new Date(event.start),
            url: event.url || null,
            userData: event.userData ? lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1___default()(event.userData) : {},
        };
        if (!mayIntersect) {
            var collided = this.collide(newEvent);
            if (collided) {
                throw new _SkedEventCollisionError__WEBPACK_IMPORTED_MODULE_4__["default"](collided.id);
            }
        }
        if (event.id && this.dummyEvent && this.dummyEvent.draggedEvent.id === event.id) {
            this.dummyEvent.draggedEvent = newEvent;
        }
        else {
            var index = this.events.findIndex(function (iEvent) { return iEvent.id === newEvent.id; });
            if (index >= 0) {
                this.events[index] = newEvent;
            }
            else {
                this.events.push(newEvent);
            }
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
                        var intersection = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["rangesIntersection"])(iEvent, jEvent);
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
        // Cancel dragging the event is being dragged right now
        if (this.isDraggingEvent()) {
            this.cancelEventDrag();
        }
        var event = this.getEvent(eventId);
        // Make sure the event is allowed to be draggable
        if (!this.onEventBeforeDrag || this.onEventBeforeDrag(event)) {
            if (this.onEventDrag) {
                this.onEventDrag(event);
            }
            this.removeEvent(eventId, { rerender: false }); // Remove it from the data
            // Rerender the row
            var location_2 = this.getLocation(event.locationId);
            var events = this.filterLocationEvents(location_2.id);
            this.materializePartial(this.renderEventRow(location_2, events));
            this.dragDummyEvent({
                draggedEvent: event,
                duration: event.end.getTime() - event.start.getTime(),
                end: lodash_clone__WEBPACK_IMPORTED_MODULE_0___default()(event.end),
                name: event.name,
                start: lodash_clone__WEBPACK_IMPORTED_MODULE_0___default()(event.start),
                takenFromTimeline: true,
            });
        }
    };
    SkedTape.prototype.dragNewEvent = function (event) {
        // Cancel dragging the event is being dragged right now
        if (this.isDraggingEvent()) {
            this.cancelEventDrag();
        }
        this.dragDummyEvent({
            draggedEvent: __assign(__assign({}, lodash_omit__WEBPACK_IMPORTED_MODULE_2___default()(event, ['duration'])), { end: new Date(this.start.getTime() + event.duration), locationId: 0, start: new Date(this.start) }),
            duration: event.duration,
            name: event.name,
            takenFromTimeline: false,
        });
    };
    SkedTape.prototype.cancelEventDrag = function () {
        if (this.dummyEvent) {
            // Put the dragged event back onto the timeline
            var event_2 = this.dummyEvent.draggedEvent;
            if (this.dummyEvent.takenFromTimeline) {
                this.putEvent(event_2, { mayIntersect: true, rerender: false });
                var location_3 = this.getLocation(event_2.locationId);
                var events = this.filterLocationEvents(location_3.id);
                this.materializePartial(this.renderEventRow(location_3, events));
            }
            if (this.onEventDragCancel) {
                this.onEventDragCancel(event_2);
            }
            // Clean up the dummy
            this.dematerializePartial('dummyEvent');
            delete this.dummyEvent;
            // Rerender the locations in order to apply some classes if needed
            this.materializePartial(this.renderLocations());
        }
    };
    SkedTape.prototype.isDraggingEvent = function () {
        return !!this.dummyEvent;
    };
    SkedTape.prototype.setSnapToMins = function (mins) {
        this.snapToMins = mins;
    };
    SkedTape.prototype.dragDummyEvent = function (dummyEvent) {
        this.dummyEvent = dummyEvent;
        // Place on the last mouse position on the timeline
        if (this.lastPicked) {
            this.moveDummyEvent(this.lastPicked);
        }
        // TODO: Observer pattern would be better here
        // Rerender the locations in order to apply some classes if needed
        this.materializePartial(this.renderLocations());
    };
    SkedTape.prototype.completeEventDrag = function () {
        var event = this.dummyEvent;
        // Check for collisions
        if (isNaN(event.locationId) || !event.start || this.collide(event)) {
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
                var newEvent = this.putEvent(__assign(__assign({}, lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1___default()(event.draggedEvent)), { end: lodash_clone__WEBPACK_IMPORTED_MODULE_0___default()(event.end), locationId: event.locationId, start: lodash_clone__WEBPACK_IMPORTED_MODULE_0___default()(event.start) }));
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
                if (!(e instanceof _SkedEventCollisionError__WEBPACK_IMPORTED_MODULE_4__["default"])) {
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
            var hr = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["floorHours"])(start);
            var left = (start.getTime() - hr.getTime()) / _helpers__WEBPACK_IMPORTED_MODULE_3__["MS_PER_MINUTE"];
            var lower = Math.floor(left / this.snapToMins) * this.snapToMins;
            var min = left - lower < this.snapToMins / 2 ? lower : lower + this.snapToMins;
            start = new Date(hr.getTime() + Math.round(min * _helpers__WEBPACK_IMPORTED_MODULE_3__["MS_PER_MINUTE"]));
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
        var scalar = (e.pageX - Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["getElementOffset"])(timeline).left) / timeline.clientWidth;
        var time = this.start.getTime() + scalar * (this.end.getTime() - this.start.getTime());
        var rowEl = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["closest"])(e.target, '.sked-tape__event-row');
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
            var currentTarget = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["closest"])(event.target, selector);
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
        if (this.rmbCancelsDrag && this.isDraggingEvent()) {
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
        if (this.rmbCancelsDrag && this.isDraggingEvent()) {
            this.cancelEventDrag();
        }
        else if (this.onIntersectionMenu) {
            var pointData = this.pick(mouseEvent);
            var events = this.findEventsAtTime(pointData.date, pointData.locationId);
            this.onIntersectionMenu(events, pointData, mouseEvent);
        }
    };
    SkedTape.prototype.handleTimelineClick = function (mouseEvent) {
        if (!Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["eventFromSkedEvent"])(mouseEvent)) {
            if (this.dummyEvent && this.dummyEvent.locationId) {
                this.completeEventDrag();
            }
            else if (!this.dummyEvent && this.onTimelineClick) {
                this.onTimelineClick(mouseEvent, this.pick(mouseEvent));
            }
        }
    };
    SkedTape.prototype.handleTimelineContextMenu = function (mouseEvent) {
        if (!Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["eventFromSkedEvent"])(mouseEvent)) {
            mouseEvent.preventDefault();
            if (this.rmbCancelsDrag && this.isDraggingEvent()) {
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
        var oldZoom = this.zoom;
        switch (kbdEvent.key) {
            case '+':
                this.zoomIn();
                break;
            case '-':
                this.zoomOut();
                break;
        }
        if (oldZoom !== this.zoom && this.onZoom) {
            this.onZoom(this.zoom);
        }
    };
    SkedTape.prototype.handleWheel = function (wheelEvent) {
        if (wheelEvent.ctrlKey) {
            wheelEvent.preventDefault();
            wheelEvent.stopPropagation();
            var oldZoom = this.zoom;
            if (wheelEvent.deltaY < 0) {
                this.zoomIn();
            }
            else {
                this.zoomOut();
            }
            if (oldZoom !== this.zoom && this.onZoom) {
                this.onZoom(this.zoom);
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
                var event_3 = events_2[_i];
                if (event_3.start.getTime() - lastEndTime <= this.tooSmallInterval) {
                    return true;
                }
                lastEndTime = event_3.end.getTime();
            }
        }
        return false;
    };
    SkedTape.prototype.uniqId = function () {
        return 1 + this.events.reduce(function (id, event) { return Math.max(id, event.id); }, (this.dummyEvent && this.dummyEvent.draggedEvent.id) || 0);
    };
    SkedTape.prototype.computeEventWidth = function (event) {
        // Clamp to timeline edge
        var eventEnd = this.end < event.end ? this.end : event.end;
        var durationHours = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["getDurationHours"])(event.start, eventEnd);
        return durationHours / Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["getDurationHours"])(this.start, this.end) * 100 + '%';
    };
    SkedTape.prototype.computeEventOffset = function (event) {
        var hoursBeforeEvent = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["getDurationHours"])(this.start, event.start);
        return hoursBeforeEvent / Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["getDurationHours"])(this.start, this.end) * 100 + '%';
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
        var base = this.getTimelineSpan() / _helpers__WEBPACK_IMPORTED_MODULE_3__["MS_PER_HOUR"] * this.baseHourWidth;
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
        if (this.isDraggingEvent()) {
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
            else if (Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["countRangesIntersections"])(nearestEvents) > 0) {
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
        var now = new Date().getTime() - tzDiff * _helpers__WEBPACK_IMPORTED_MODULE_3__["MS_PER_MINUTE"];
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
        }, createElement('span', { className: 'sked-tape__gap-text' }, Math.round(gap / _helpers__WEBPACK_IMPORTED_MODULE_3__["MS_PER_MINUTE"]) + ''));
    };
    SkedTape.prototype.renderGaps = function (events, intersections) {
        var lastEndTime = 0;
        var lastEnd;
        var gaps = [];
        var _loop_1 = function (event_4) {
            // whether the event intersects with some other
            var intersects = !!intersections.find(function (intersection) { return !!intersection.events.find(function (iEvent) { return iEvent.id === event_4.id; }); });
            var gap = event_4.start.getTime() - lastEndTime;
            if (gap >= this_1.minTimeGapShown && gap <= this_1.maxTimeGapShown && !intersects) {
                gaps.push(this_1.renderGap(gap, lastEnd, event_4.start));
            }
            lastEnd = event_4.end;
            lastEndTime = lastEnd.getTime();
        };
        var this_1 = this;
        for (var _i = 0, events_3 = events; _i < events_3.length; _i++) {
            var event_4 = events_3[_i];
            _loop_1(event_4);
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
                var interval = (event.start.getTime() - prevEvent.end.getTime()) / _helpers__WEBPACK_IMPORTED_MODULE_3__["MS_PER_MINUTE"];
                if (interval >= this.intermissionRange[0] &&
                    interval <= this.intermissionRange[1]) {
                    leftText = leftText.concat(createElement('br'), this.format.duration(interval * _helpers__WEBPACK_IMPORTED_MODULE_3__["MS_PER_MINUTE"]));
                }
            }
            var nextEvent = this.findEventJustAfter(event);
            if (nextEvent) {
                var interval = (nextEvent.start.getTime() - event.end.getTime()) / _helpers__WEBPACK_IMPORTED_MODULE_3__["MS_PER_MINUTE"];
                if (interval >= this.intermissionRange[0] &&
                    interval <= this.intermissionRange[1]) {
                    rightText = rightText.concat(createElement('br'), this.format.duration(interval * _helpers__WEBPACK_IMPORTED_MODULE_3__["MS_PER_MINUTE"]));
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
        var _this = this;
        var firstMidnight = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["getMidnightAfter"])(this.start);
        var lastMidnight = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["getMidnightBefore"])(this.end);
        var queue = [];
        if (firstMidnight > lastMidnight) {
            // The range is within the same day
            queue.push({ weight: 1, text: this.format.date(this.start) });
        }
        else {
            queue.push({
                text: this.format.date(this.start),
                weight: Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["getMsToMidnight"])(this.start) / _helpers__WEBPACK_IMPORTED_MODULE_3__["MS_PER_DAY"],
            });
            for (var day = new Date(firstMidnight); day < lastMidnight;) {
                day.setTime(day.getTime() + 1000);
                queue.push({ weight: 1, text: this.format.date(day) });
                day.setTime(day.getTime() + _helpers__WEBPACK_IMPORTED_MODULE_3__["MS_PER_DAY"] - 1000);
            }
            queue.push({
                text: this.format.date(this.end),
                weight: Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["getMsFromMidnight"])(this.end) / _helpers__WEBPACK_IMPORTED_MODULE_3__["MS_PER_DAY"],
            });
        }
        var totalWeight = queue.reduce(function (total, item) { return total + item.weight; }, 0);
        var canvasWidth = this.computeCanvasWidth();
        return createElement('ul', { className: 'sked-tape__dates', ref: 'dates' }, queue.map(function (item) {
            var proportion = item.weight / totalWeight;
            var classes = ['sked-tape__date'];
            if (proportion * canvasWidth < _this.dateTextWidth) {
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
        var n = Math.floor((this.end.getTime() - this.start.getTime()) / _helpers__WEBPACK_IMPORTED_MODULE_3__["MS_PER_HOUR"]);
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
            this.smoothScroller = new _SmoothScroller__WEBPACK_IMPORTED_MODULE_5__["default"](this.refs.frame);
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
}(_VTree__WEBPACK_IMPORTED_MODULE_7__["default"]));
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
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/cloneDeep */ "lodash/cloneDeep");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_difference__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/difference */ "lodash/difference");
/* harmony import */ var lodash_difference__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_difference__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_intersection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/intersection */ "lodash/intersection");
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
                dstChild = VNode.commit(dstChild, dstVNode.children[i], srcVNode.children[i], refs);
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
        var children = this.children.map(function (child) { return child instanceof VNode ? child.clone() : lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0___default()(child); });
        return new VNode(this.tagName, lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0___default()(this.props), children);
    };
    /**
     * Copies the data of other VNode to this one.
     * The property `parent` remains untouched.
     */
    VNode.prototype.assign = function (vNode) {
        var _this = this;
        this.tagName = vNode.tagName;
        this.props = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0___default()(vNode.props);
        this.children = vNode.children.map(function (child) {
            if (child instanceof VNode) {
                child = child.clone();
                child.parent = _this;
                return child;
            }
            return lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0___default()(child);
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
/*! exports provided: SECS_PER_DAY, MS_PER_DAY, MS_PER_MINUTE, MS_PER_HOUR, rangesIntersection, countRangesIntersections, closest, removeClass, addClass, getElementOffset, floorHours, ceilHours, eventFromSkedEvent, getDurationHours, getMsFromMidnight, getMsToMidnight, getMidnightAfter, getMidnightBefore, gapBetween */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECS_PER_DAY", function() { return SECS_PER_DAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MS_PER_DAY", function() { return MS_PER_DAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MS_PER_MINUTE", function() { return MS_PER_MINUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MS_PER_HOUR", function() { return MS_PER_HOUR; });
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


/***/ }),

/***/ "lodash/clone":
/*!*****************************************************************************************************************!*\
  !*** external {"commonjs":"lodash/clone","commonjs2":"lodash/clone","amd":"lodash/clone","root":["_","clone"]} ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_clone__;

/***/ }),

/***/ "lodash/cloneDeep":
/*!*********************************************************************************************************************************!*\
  !*** external {"commonjs":"lodash/cloneDeep","commonjs2":"lodash/cloneDeep","amd":"lodash/cloneDeep","root":["_","cloneDeep"]} ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_cloneDeep__;

/***/ }),

/***/ "lodash/difference":
/*!*************************************************************************************************************************************!*\
  !*** external {"commonjs":"lodash/difference","commonjs2":"lodash/difference","amd":"lodash/difference","root":["_","difference"]} ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_difference__;

/***/ }),

/***/ "lodash/intersection":
/*!*********************************************************************************************************************************************!*\
  !*** external {"commonjs":"lodash/intersection","commonjs2":"lodash/intersection","amd":"lodash/intersection","root":["_","intersection"]} ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_intersection__;

/***/ }),

/***/ "lodash/omit":
/*!*************************************************************************************************************!*\
  !*** external {"commonjs":"lodash/omit","commonjs2":"lodash/omit","amd":"lodash/omit","root":["_","omit"]} ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_omit__;

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=sked-tape.js.map