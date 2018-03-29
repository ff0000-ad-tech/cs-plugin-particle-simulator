/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.NetUtils = exports.TextUtils = exports.ImageUtils = exports.ArrayUtils = exports.ColorUtils = exports.MathUtils = exports.ObjectUtils = exports.DcsUtils = exports.MotionUtils = exports.LocationUtils = void 0;

var _LocationUtils = _interopRequireDefault(__webpack_require__(50));

exports.LocationUtils = _LocationUtils.default;

var _MotionUtils = _interopRequireDefault(__webpack_require__(51));

exports.MotionUtils = _MotionUtils.default;

var _MonetUtils = _interopRequireDefault(__webpack_require__(52));

exports.MonetUtils = _MonetUtils.default;

var DcsUtils = _interopRequireWildcard(__webpack_require__(53));

exports.DcsUtils = DcsUtils;

var ObjectUtils = _interopRequireWildcard(__webpack_require__(54));

exports.ObjectUtils = ObjectUtils;

var MathUtils = _interopRequireWildcard(__webpack_require__(55));

exports.MathUtils = MathUtils;

var ColorUtils = _interopRequireWildcard(__webpack_require__(56));

exports.ColorUtils = ColorUtils;

var ArrayUtils = _interopRequireWildcard(__webpack_require__(57));

exports.ArrayUtils = ArrayUtils;

var ImageUtils = _interopRequireWildcard(__webpack_require__(58));

exports.ImageUtils = ImageUtils;

var TextUtils = _interopRequireWildcard(__webpack_require__(59));

exports.TextUtils = TextUtils;

var NetUtils = _interopRequireWildcard(__webpack_require__(65));

exports.NetUtils = NetUtils;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Vector2D = exports.SimpleNoise2D = exports.ParentTransform = exports.Matrix3D = exports.Matrix2D = void 0;

var _Matrix2D = _interopRequireDefault(__webpack_require__(27));

exports.Matrix2D = _Matrix2D.default;

var _Matrix3D = _interopRequireDefault(__webpack_require__(70));

exports.Matrix3D = _Matrix3D.default;

var _ParentTransform = _interopRequireDefault(__webpack_require__(71));

exports.ParentTransform = _ParentTransform.default;

var _SimpleNoise2D = _interopRequireDefault(__webpack_require__(72));

exports.SimpleNoise2D = _SimpleNoise2D.default;

var _Vector2D = _interopRequireDefault(__webpack_require__(28));

exports.Vector2D = _Vector2D.default;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.mix = void 0;

var mix = function mix(superclass) {
  return new MixinBuilder(superclass);
};

exports.mix = mix;

var MixinBuilder =
/*#__PURE__*/
function () {
  function MixinBuilder(superclass) {
    this.superclass = superclass;
  }

  var _proto = MixinBuilder.prototype;

  _proto.with = function _with() {
    for (var _len = arguments.length, mixins = new Array(_len), _key = 0; _key < _len; _key++) {
      mixins[_key] = arguments[_key];
    }

    return mixins.reduce(function (c, mixin) {
      return mixin(c);
    }, this.superclass);
  };

  return MixinBuilder;
}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.LoaderBase = void 0;

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var LoaderBase = function LoaderBase(superclass) {
  return (
    /*#__PURE__*/
    function (_superclass) {
      _inheritsLoose(_class, _superclass);

      function _class() {
        var _this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _superclass.call.apply(_superclass, [this].concat(args)) || this;
        var arg = arguments && arguments.length > 1 ? arguments[1] : arguments[0] || {};

        var L = _assertThisInitialized(_this);

        L.onComplete = arg.onComplete || function () {};

        L.onFail = arg.onFail || function () {};

        L.onProgress = arg.onProgress || function () {};

        L.name = arg.name || '';
        L.scope = arg.scope || L;
        L.dataRaw;
        L.cacheBuster = arg.cacheBuster || false;
        L._failCalled = false;
        return _this;
      }

      var _proto = _class.prototype;

      _proto._handleFail = function _handleFail() {
        var L = this; // console.log( 'LoaderBase._handleFail()' )

        if (!L._failCalled) {
          L._failCalled = true;
          L.onFail.call(L.scope, L);
          console.log('Loader "' + L.name + '" Fail:', L.url);
        }
      };

      return _class;
    }(superclass)
  );
};

exports.LoaderBase = LoaderBase;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var DateFormatter = _interopRequireWildcard(__webpack_require__(6));

var DateUtils = _interopRequireWildcard(__webpack_require__(13));

var _Timezone = _interopRequireDefault(__webpack_require__(9));

var _adUtils = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/**
	@class TzDate
	@desc
		<a href="https://github.com/ff0000-ad-tech/ad-dates">Github repo</a>
		<br><br>
		
		This class is a wrapper for the Javascript "Date" object.

		<br><br>

		The standard Date object only returns the local time. TzDate returns that local time but adds the ability to 
		get that same date, time, and meridium in ANY timezone, without extra conversions.  Simply ask for anything
		in any timezone and it will return you the adjusted date/time while maintaining the original date.
		
		<br><br>
		
		One thing to understand is the difference between: the timezone the TzDate is being DECLARED in VS the timezone the TzDate is DISPLAYING in.
		When creating a TzDate, you will be providing the date, time, and timezone of the DECLARED time. A way to think of 
		it would be: If you are in Los Angeles, you are in the US/Pacific timezone. So if you look at your calendar and clock
		on the wall, you would enter that date, time and provide the timezone for US/Pacific which is Timezone.PST.  
				
		<codeblock>
			var myDate = new TzDate ({
				datetime : [ '2017-05-18T12:00:00', Timezone.PST ]
			})
			console.log( myDate ); // "Thu May 18 2017 12:00:00 GMT-0700 (PDT)"
			myDate.print(); // "Thu May 18 2017 12:00:00 US/Pacific"
		</codeblock>
		
		<br>
		
		Tracing out a date can get confusing with that end part "GMT-0700 (PDT)". That is how the browser reports the local timezone.
		However, we need to be able to see the date clearly in any timezone.  The print() method allows for a clearer output specifically
		telling you what timezone you have asked for. Lets look at that same date in other timezones:
				
		<codeblock>
			myDate.print( Timezone.MST ); // "Thu May 18 2017 13:00:00 US/Mountain"
			myDate.print( Timezone.EST ); // "Thu May 18 2017 15:00:00 US/Eastern"
		</codeblock>

		<br>

		An important concept to understand is UTC = Universal Time Coordinated. All time is based off of "zero" point, which is also called 
		Greenwich Mean Time.  Let's look at our same time in UTC:

		<codeblock>
			myDate.print( Timezone.UTC ); // "Thu May 18 2017 19:00:00 UTC"
		</codeblock>

		<br>

		You can start to see how the timezones affect time by seeing that noon on the west coast is the same 7 PM (aka 19 hours) at the origin.
		So the time we first declared at the beginning could also be created as any of these other times that we have seen.  Remember that when
		a time is created, no matter what timezone, there is a different way of saying it, but the actual time is just a snap shot of a momnet 
		in time.  Let's look at how we could create the same date different ways:

		<codeblock>
			var myDate_eastern = new TzDate ({
				datetime : [ '2017-05-18T15:00:00', Timezone.EST ]
			})
			myDate_eastern.print(); // "Thu May 18 2017 15:00:00 US/Eastern"
			myDate_eastern.print( Timezone.PST ); // "Thu May 18 2017 12:00:00 US/Pacific"
		</codeblock>

		<br>

		This time, we created the date as if we were on the east coast in the US/Eastern timezone, so the clock on the wall would say 3:00 PM.  
		Notice that all the outputs are all the same, that is because these dates are the same moment, just expressed differently.

		<br><br>

		Sometimes, you will create the date IN a specific timezone, but you always want to see it in another.  Lets take our first date we created.
		We could pass the timezone into the print() method everytime, but that can get repetitive and sometimes you don't have access to that timezone
		later on.  So you can create an outputTimezone for the date, so all methods will return in that timezone:

		<codeblock>
			var myDate = new TzDate ({
				datetime : [ '2017-05-18T12:00:00', Timezone.PST ],
				outputTimezone : Timezone.EST
			})
			myDate.print(); // "Thu May 18 2017 15:00:00 US/Eastern"
		</codeblock>

		<br>

		This can be also changed after the date was created, and again it will always output to that timezone.  BUT, if you pass in a timezone to a method,
		that will take priority:

		<codeblock>
			myDate.outputTimezone = Timezone.PST;
			myDate.print(); // "Thu May 18 2017 12:00:00 US/Pacific"

			myDate.print( Timezone.EST ); // "Thu May 18 2017 15:00:00 US/Eastern"
		</codeblock>

		<br><br>
		
		On to slightly more advanced concepts: ISO dates. Notice that the date strings we have been passing in so far have been in this format:
		
		<br>
		
		<codeblock>
			'2017-05-18T12:00:00' // Year - Month - Day T Hour : Minute : Second 
		</codeblock>
		
		<br>
		
		This is a partial ISO date string.  The last part that is missing is the timezone.  So our first date we created, in proper ISO would actually 
		look like this:

		<br>
		
		<codeblock>
			'2017-05-18T12:00:00-07:00' // Year - Month - Day T Hour : Minute : Second - PST Timezone
		</codeblock>
		
		<br>
		The -07:00 on the end is the timezone of the time.  Think of it like this: The date and time are what you see on that clock and calendar on your wall
		where you are currently standing.  That last part, the timezone, is saying how far FROM the origin (UTC) you are. Lets look at it as a simple math problem.

		<codeblock>
			 (origin zero point) - timezone = (date and time where you are)
								
								UTC - 07:00 = 2017-05-18T12:00:00
		
										UTC = 2017-05-18T12:00:00 + 07:00

										UTC = 2017-05-18T19:00:00+00:00
		</codeblock>

		<br>

		This proper ISO full datetime can be used when creating a TzDate, rather than the array if you are confident of the timezone:

		<codeblock>
			var myDate = new TzDate ({
				datetime : '2017-05-18T12:00:00-07:00'
			})
			myDate.print(); // "Thu May 18 2017 12:00:00 US/Pacific"
		</codeblock>

		<br><br>

		<b>Velvet JSON dates</b>

		<br><br>

		Dates that are in the Velvet JSON will be in proper ISO format AND there will be a timezone provided, like so:

		<codeblock>
		var jsonDateSnippet = {
			datetime : "2017-05-18T19:00:00+00:00",
			timezone : "US/Eastern"
		}
		</codeblock>

		<br>

		This is providing the date/time in UTC and then saying that the dates should be output in US/Eastern timezone.  So we would create our TzDate:

		<codeblock>
			var myDate = new TzDate ({
				datetime : jsonDateSnippet.datetime,
				outputTimezone : jsonDateSnippet.timezone
			})
			myDate.print(); // "Thu May 18 2017 15:00:00 US/Eastern"
		</codeblock>
		
*/
function TzDate(args) {
  args = args || {};

  var _outputTimezone;

  var _dateString = args.datetime;

  if (Array.isArray(_dateString)) {
    _dateString = args.datetime[0];
    _outputTimezone = args.datetime[1];
  }

  if (typeof _dateString === 'string') {
    // make there is a "T" to follow proper ISO format.  No "T" will create Invalid Dates in Safari
    _dateString = _dateString.replace(/(\T|\s)/g, 'T'); // if +/-##:## timzone is set this will define find the corresponding timezone and assign it,
    // thus ignoring the second param if is an Array: [ datetimeString, timezone ]

    var currentTzString = _dateString.match(/(\+|\-)([0-9]{2})\:([0-9]{2})/g);

    if (currentTzString) {
      //var hours = +currentTzString[0].split(':')[0];
      currentTzString = currentTzString[0]; //	console.log( 'hours are:', hours )
      // if ( hours < 0 ){
      // 	var dls = Timezone.getDLS ( new Date ( _dateString ));
      // 	hours -= dls;
      // 	_outputTimezone = Timezone.get ( hours );
      // 	// console.log( ' so the output timezone is:', _outputTimezone )
      // } else if ( hours == 0 ){
      // 	_outputTimezone = Timezone.UTC;
      // } else {
      // 	_outputTimezone = Timezone.get ( hours );
      // }
      //if ( hours == 0 ){

      if (currentTzString == '+00:00') {
        _outputTimezone = _Timezone.default.UTC;
      } else {
        //// if ( hours < 0 ) {
        var dls = _Timezone.default.getDLS(new Date(_dateString)); //	hours -= dls;
        //// }
        //_outputTimezone = Timezone.get ( hours );


        var value = isoTzToNum(currentTzString, dls); //	console.log( '\t\tisoTzToNum:', value, currentTzString)

        _outputTimezone = _Timezone.default.get(value);
      }
    } else {
      if (_outputTimezone) {
        _outputTimezone = _Timezone.default.get(_outputTimezone);

        var offset = _Timezone.default.getDLS(new Date(_dateString));

        _dateString += formatTimezoneISO(_outputTimezone, offset);
      }
    }
  }

  if (args.outputTimezone) {
    _outputTimezone = _Timezone.default.get(args.outputTimezone);
  } else if (adParams.defaultTimezone) {
    _outputTimezone = _Timezone.default.get(adParams.defaultTimezone);
  } //console.log( '_outputTimezone:', _outputTimezone )
  // console.log( '_dateString:', _dateString )


  var T = new Date(_dateString); // ---------------------------------------------------------------------------------------------------------------
  // GETTER | SETTER

  Object.defineProperties(T, {
    /**
    	@memberOf TzDate
    	@var {object|string|number} outputTimezone
    	@desc
    		Getter|Setter : Change the timezone that all methods will default return the date/time in. Does NOT change the date, just how it is output.
    	@example
    		// get
    		console.log( myDate.outputTimezone );
    			// set
    		myDate.outputTimezone = Timezone.EST;
    */
    outputTimezone: {
      get: function get() {
        return _outputTimezone || _Timezone.default.UTC;
      },
      set: function set(value) {
        _outputTimezone = _Timezone.default.get(value);
      }
    }
  }); // ---------------------------------------------------------------------------------------------------------------
  // PUBLIC METHODS

  /**
  	@memberOf TzDate
  	@method clone
  	@desc
  		A shorthand for making a new TzDate with the same datetime and outputTimezone
  	@returns {TzDate}
  	@property {object|string|number} newTimezone
  		Change the outputTimezone of the new reeturned TzDate
  	@example
  		var myCopy = myDate.clone();
  		myCopy.print();
  */

  T.clone = function (newTimezone) {
    newTimezone = newTimezone || T.outputTimezone;
    return new TzDate({
      datetime: T,
      outputTimezone: newTimezone
    });
  };
  /**
  	@memberOf TzDate
  	@method getHoursIn
  	@desc
  		Similar to Date.getHours(), but this will return the hours in a specified timezone, 
  		defaulting to the outputTimezone of the instance
  	@returns {number}
  	@property {object|string|number} inTimezone
  		The timezone at which you would like the hours, if null, will use the outputTimezone
  	@property {boolean} inMilitary
  		Whether the hours should be in military 24 hour or standard 12 hour. true = base 24, false = base 12. Default is false.
  	@example
  		var hours = myDate.getHoursIn ( Timezone.EST, false );
  */


  T.getHoursIn = function (inTimezone, inMilitary) {
    var date = T.getIn(inTimezone);
    var time = date.getHours();

    if (inMilitary != true && time > 12) {
      time = time % 12;
    }

    return time;
  };

  T.format = function (format, args) {
    return DateFormatter.format(T, format, args);
  };
  /**
  	@memberOf TzDate
  	@method getIn
  	@desc
  		If you need the actual TzDate object with the adjust time applied. 
  		<br><span style="color:#ff0000">WARN: This will return a TzDate with a different base time.
  		This method is mostly used by other internal methods and DateSchedule. This should be used with caution.</span>
  	@returns {TzDate}
  	@property {object|string|number} inTimezone
  		The timezone at which you would like the TzDate CHANGED to
  	@example
  		var changedDate = myDate.getIn ( Timezone.EST );
  */


  T.getIn = function (inTimezone) {
    var utcString = T.toISOString().split('.')[0];

    var offset = _Timezone.default.getDLS(T); // var localTimezone = formatTimezoneISO ( Timezone.LOCAL, offset );


    var localTimezone = formatTimezoneISO(_Timezone.default._trueLOCAL, offset);

    var tz = _Timezone.default.get(inTimezone || T.outputTimezone);

    var utcDateAdjusted = new Date(utcString + localTimezone); // var utcDateAdjusted = new TzDate ({
    //  	datetime: utcString + localTimezone,
    // 	outputTimezone: tz
    // });

    var dls = _Timezone.default.getDLS(utcDateAdjusted);

    if (tz.label == _Timezone.default.UTC.label) {
      dls = 0;
    } // console.log( '\t       utcString:', utcString )
    // console.log( '\t   localTimezone:', localTimezone )
    // console.log( '\t              tz:', tz, Timezone.UTC )
    // console.log( '\t             dls:', dls )
    // console.log( '\t          offset:', tz.value + dls )
    // console.log( '\t utcDateAdjusted:', utcDateAdjusted, 'in', tz.label )


    return DateUtils.adjust(utcDateAdjusted, {
      hour: tz.value + dls
    });
  };
  /**
  	@memberOf TzDate
  	@method print
  	@desc
  		Is a shorthand for .toFullDateTime()
  	@returns {string}
  	@property {object|string|number} inTimezone
  		The timezone at which you would like the TzDate printed out as, defaults to outputTimezone.
  	@example
  		myDate.print ( Timezone.EST );
  */


  T.print = function (inTimezone) {
    var fullDateTime = T.toFullDateTime(inTimezone);
    console.log(fullDateTime);
    return fullDateTime;
  };
  /**
  	@memberOf TzDate	
  	@method toFullDateTime
  	@property {Timezone|object|string|number} inTimezone
  		The timezone at which you would like the TzDate printed out as, defaults to outputTimezone.
  	@returns {string}
  	@desc
  		Returns a string in the format of "Weekday Mon DD YYYY HH:MM:SS Timezone"
  */


  T.toFullDateTime = function (inTimezone) {
    inTimezone = inTimezone || T.outputTimezone;
    var utcDateAdjusted = T.getIn(inTimezone);
    var utcDateAdjString = utcDateAdjusted.toString().split('GMT')[0] + inTimezone.label; //console.log( '\t  inTimezone:', inTimezone )
    //console.log( '\t  utcDateAdjusted:', utcDateAdjusted.toString() )
    //console.log( '\t  utcDateAdjString:', utcDateAdjString )

    return utcDateAdjString;
  };
  /**
  	@memberOf TzDate	
  	@method toSimpleDate
  	@property {Timezone|object|string|number} inTimezone
  		The timezone at which you would like the TzDate printed out as, defaults to outputTimezone.
  	@returns {string}
  	@desc
  		Returns a string in the format "MM/DD" 
  */


  T.toSimpleDate = function (inTimezone) {
    var tzDate = T.getIn(inTimezone);
    return tzDate.getMonth() + 1 + '/' + tzDate.getDate();
  };
  /**
  	@memberOf TzDate	
  	@method toDate
  	@property {Timezone|object|string|number} inTimezone
  		The timezone at which you would like the TzDate printed out as, defaults to outputTimezone.
  	@returns {string}
  	@desc
  		Returns a string in the format "MM/DD/YYYY" 
  */


  T.toDate = function (inTimezone) {
    var tzDate = T.getIn(inTimezone);
    return T.toSimpleDate(inTimezone) + '/' + tzDate.getFullYear();
  };
  /**
  	@memberOf TzDate	
  	@method toDateTime
  	@property {Timezone|object|string|number} inTimezone
  		The timezone at which you would like the TzDate printed out as, defaults to outputTimezone.
  	@returns {string}
  	@desc
  		Returns a string in the format "MM/DD/YYYY HH:MMa/p" 
  */


  T.toDateTime = function (inTimezone) {
    return T.toDate(inTimezone) + ' ' + T.toTime(inTimezone);
  };
  /**
  	@memberOf TzDate	
  	@method toSimpleDateTime
  	@property {Timezone|object|string|number} inTimezone
  		The timezone at which you would like the TzDate printed out as, defaults to outputTimezone.
  	@returns {string}
  	@desc
  		Returns a string in the format "MM/DD HH:MM" 
  */


  T.toSimpleDateTime = function () {
    return T.toSimpleDate() + ' ' + T.toTime();
  };
  /**
  	@memberOf TzDate	
  	@method toTime
  	@property {Timezone|object|string|number} inTimezone
  		The timezone at which you would like the TzDate printed out as, defaults to outputTimezone.
  	@returns {string}
  	@desc
  		Returns a string in the format "HH:MM AM/PM" 
  */


  T.toTime = function (inTimezone) {
    return T.toSimpleTime(inTimezone) + ' ' + T.toMeridiem(inTimezone);
  };
  /**
  	@memberOf TzDate	
  	@method toSimpleTime
  	@property {Timezone|object|string|number} inTimezone
  		The timezone at which you would like the TzDate printed out as, defaults to outputTimezone.
  	@property {boolean} inMilitary
  		Whether the hours should be in military 24 hour or standard 12 hour. true = base 24, false = base 12. Default is false.
  	@returns {string}
  	@desc
  		Returns a string in the format "HH:MM" 
  		@example
  		myDate.toSimpleTime();
  		myDate.toSimpleTime ( Timezone.PST );
  		myDate.toSimpleTime ( Timezone.PST, true );
  */


  T.toSimpleTime = function (inTimezone, inMilitary) {
    var tzDate = T.getIn(inTimezone);
    var hours = T.getHoursIn(inTimezone, inMilitary);

    if (hours == 0 && !inMilitary) {
      hours = 12;
    }

    if (inMilitary) {
      hours = _adUtils.TextUtils.pad(hours, 2);
    }

    return hours + ':' + _adUtils.TextUtils.pad(tzDate.getMinutes(), 2);
  };
  /**
  	@memberOf TzDate	
  	@method toMeridiem
  	@property {Timezone|object|string|number} inTimezone
  		The timezone at which you would like the TzDate printed out as, defaults to outputTimezone.
  		@property {boolean} includeTimezone
  		Whether to include the timezone, defaults to false
  	@returns {string}
  	@desc
  		Returns the meridiem "am", "pm" or "am/et", "am/et"
  		@example
  		myDate.toMeridiem();
  		// returns "am" or "pm"
  			myDate.toMeridiem ( Timezone.PST );
  		// returns "am" or "pm", of the datetime in Pacific Timezone
  			myDate.toMeridiem ( Timezone.PST, true );
  		// returns "am/pt" or "pm/pt", of the datetime in Pacific Timezone
  		
  		myDate.toMeridiem ( null, true ); 
  		// returns "am/et" or "pm/et", of the datetime in the outputTimezone
  */


  T.toMeridiem = function (inTimezone, includeTimezone) {
    var tz = inTimezone || T.outputTimezone;
    var tzDate = T.getIn(tz);
    return (tzDate.getHours() >= 12 ? 'pm' : 'am') + (includeTimezone == true ? '/' + tz.abbr : '');
  };
  /**
  	@memberOf TzDate	
  	@method toShortestTime
  	@property {Timezone|object|string|number} inTimezone
  		The timezone at which you would like the TzDate printed out as, defaults to outputTimezone.
  	@property {boolean} inMilitary
  		Whether the hours should be in military 24 hour or standard 12 hour. true = base 24, false = base 12. Default is false.
  	@returns {string}
  	@desc
  		Returns a string in the format "HH:MM", but if there are no minutes will return "HH"
  */


  T.toShortestTime = function (inTimezone, inMilitary) {
    // will remove minutes if they are 0
    var timeStr = T.toSimpleTime(inTimezone, inMilitary);
    var adjustedTime = timeStr.replace(/:00$/g, '');
    return adjustedTime;
  };

  T.toDateTimeISO = function (inTimezone) {
    var date = T.toDate(inTimezone);
    var dateSplit = date.split('/');
    var year = dateSplit[2];

    var month = _adUtils.TextUtils.pad(dateSplit[0], 2);

    var day = _adUtils.TextUtils.pad(dateSplit[1], 2);

    return year + '-' + month + '-' + day + 'T' + T.toSimpleTime(inTimezone, true) + ':00';
  };

  T.toISO = function () {
    return T.toDateTimeISO(T.outputTimezone) + formatTimezoneISO(T.outputTimezone, _Timezone.default.getDLS(T));
  }; // ---------------------------------------------------------------------------------------------------------------
  // PROTECTED PROPERTIES


  T._isTzDate = true; // ---------------------------------------------------------------------------------------------------------------
  // PRIVATE METHODS

  function formatTimezoneISO(timezone, offset) {
    var num = timezone.value + offset;
    var hours = num > 0 ? Math.floor(num) : Math.ceil(num);
    var minutes = num % 1 * 60;
    minutes = num > 0 ? Math.floor(minutes) : Math.ceil(minutes);
    var operator = num < 0 ? '-' : '+';
    return operator + _adUtils.TextUtils.pad(Math.abs(hours), 2) + ':' + _adUtils.TextUtils.pad(Math.abs(minutes), 2);
  }

  function isoTzToNum(str, offset) {
    var split = str.split(':');
    var hours = +split[0];
    var mins = +split[1] / 60; //if ( hours == 1 ) offset = 0; // +01:00

    return hours + mins - offset;
  }

  return T;
}

var _default = TzDate;
exports.default = _default;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.setLanguage = setLanguage;
exports.addLanguage = addLanguage;
exports.getLabels = getLabels;
exports.getNumericSuffixFor = getNumericSuffixFor;
exports.format = format;

var _adUtils = __webpack_require__(0);

var _TzDate = _interopRequireDefault(__webpack_require__(5));

var _labelEnglish = _interopRequireDefault(__webpack_require__(66));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
	@class DateFormatter

	@classdesc
		<a href="https://github.com/ff0000-ad-tech/ad-dates">Github repo</a>
		<br><br>
		
		This class provides a collection of year, month, date labels along with a utility for mananipulating
		a TzDate/Date object.		
*/
var _language = 'english';
var _languageLabels = {};

function setLanguage(value) {
  _language = value || _language;
}

function addLanguage(value) {
  for (var key in value) {
    _languageLabels[key] = value[key];
  }
}

addLanguage(_labelEnglish.default);
/**
	@memberOf DateFormatter	
	@method 
		
	@memberOf DateFormatter	
	@method getLabels
	@property {String} language
		The language that will be used.  Currently only "english" and "spanish".  Defaults to the value set on the class level Dateformatter.langauge
	@returns {TzDate|Date}
	@desc
		Returns an objects that defines labels that date-messaging will use in the ad, used directly by DateSchedule and RecurringSchedule 
*/

function getLabels(language) {
  return _languageLabels[language || _language];
}
/**
	@memberOf DateFormatter	
	@method getNumericSuffixFor
	@property {Number} value
		The date that will be the starting point for adjustment
	@property {Boolean} includeDate
		An Object of time keys to adjust the date with. Positive numbers will increase the time, while negative numbers
		will decrement it. The accepted keys are: week, day, hour, minute, second
	@returns {TzDate|Date}
	@desc
		Returns the same type of Object provided: TzDate returns TzDate, Date returns Date

	<codeblock>
		// adjust the time of a TzDate
		var myTzDate = new TzDate({
			datetime : [ '2017-12-31 12:00:00', Timezone.UTC ]
		})
		var adjustedTzDate = DateFormatter.adjust( myTzDate, { day:-1.5, hour:4.2, minute:90 });
		// Sat Dec 30 2017 05:42:00 UTC


		// adjust the time of a regualar Date object
		var myDate = new Date(2017,0,1)
		var adjustedDate = DateFormatter.adjust( myDate, { day:-1.5, hour:4.2, minute:90 });
		// Fri Dec 30 2016 17:42:00 GMT-0800 (PST)
	</codeblock>
*/


function getNumericSuffixFor(value, includeDate) {
  var value = value.toString();
  var lastNumber = value.slice(value.length - 1);
  var labels = getLabels();
  var output = labels.TH;

  switch (lastNumber) {
    case '1':
      if (value != '11') output = labels.ST;
      break;

    case '2':
      if (value != '12') output = labels.ND;
      break;

    case '3':
      if (value != '13') output = labels.RD;
      break;
  }

  return (includeDate ? value : '') + output;
} // YYYY - 2017
// YY - 17
// MMMM - September
// MMM - Sept
// MM - 09, 10, 11
// M - 9, 10, 11
// DDDD - Monday
// DDD = Mon
// DD - 08, 09, 10 (date)
// D - 8, 9, 10
// o - st, nd, rd, th
// Do - 1st, 2nd, 3rd, 4th
// HH - 0...23 > 09, 10, 11
// H - 0...23 > 9, 10, 11
// hh - 1...12 > 09, 10, 11
// h - 1...12 > 9, 10, 11
// mm - 0...59 > 09, 10, 11
// m - 0...59 > 9, 10, 11
// ss - 0...59 > 09, 10, 11
// s - 0...59 > 9, 10, 11
// T - 7:00, 8:15
// TT - 19:00, 20:15
// t - 7, 8:15
// tt - 19, 20:15
// a - am pm
// z - timezone abbreviation
// ^ - toUpperCase()


function format(tzDate, format, args) {
  // args - language, weekday exceptions, month exceptions
  args = args || {};
  var tz = args.inTimezone || tzDate.outputTimezone;
  var language = args.language;
  var dateIn = tzDate.getIn(tz); //	console.log(".format('" + format + "')")

  var labels = getLabels(language);
  var month = dateIn.getMonth();
  var hours = dateIn.getHours();
  var minutes = dateIn.getMinutes(); // ${YYYY}

  var result = format.replace(/\$\{(.*?)\}/g, function (match, token) {
    //	console.log('match:', match, '| token:', token)
    var output = token;
    var trim = 0; // only used for year

    var padding;
    var needsLabel;
    var upper = false;
    var keep = true;
    var suffix = true; // searches for ^ char for toUpperCase()

    token.replace(/(.+)(\^)/, function (match3, token3) {
      token = token3;
      upper = true; // console.log('\t\t\t', match3, token3)
    }); // check for a set of 2, except Y. flags padding then converts to single character MM > M

    if (token.length == 2) {
      token.replace(/(?![Yo])([a-zA-Z]).*?\1/, function (match2, token2) {
        token = token2.substr(0, 1); // console.log('\t\t', match2, token2, token)

        padding = 2;
      });
    }

    switch (token) {
      case 'YY':
        trim = -2;

      case 'YYYY':
        output = ('' + dateIn.getFullYear()).slice(trim);
        break;

      case 'M':
        output = month + 1;
        break;

      case 'MMM':
        output = labels.MONTHS_ABRV[month];
        break;

      case 'MMMM':
        output = labels.MONTHS_FULL[month];
        break;

      case 'D':
        output = dateIn.getDate();
        break;

      case 'o':
        suffix = false;

      case 'Do':
        output = getNumericSuffixFor(dateIn.getDate(), suffix);
        break;

      case 'DDD':
        output = labels.WEEKDAYS_ABRV[dateIn.getDay()];
        break;

      case 'DDDD':
        output = labels.WEEKDAYS_FULL[dateIn.getDay()];
        break;

      case 'TT':
        // TT - 19:00, 20:15
        keep = minutes > 0;

      case 'tt':
        // tt - 19, 20:15
        output = hours;

        if (keep) {
          output += ':' + _adUtils.TextUtils.pad(minutes, 2);
        }

        break;

      case 't':
        // t - 7, 8:15
        keep = minutes > 0;

      case 'T':
        // T - 7:00, 8:15
        output = hours % 12;
        if (output == 0) output = 12;

        if (keep) {
          output += ':' + _adUtils.TextUtils.pad(minutes, 2);
        }

        break;

      case 'H':
        output = hours;
        break;

      case 'h':
        output = hours % 12;

        if (output == 0) {
          output = 12;
        }

        break;

      case 'm':
        output = minutes;
        break;

      case 's':
        output = dateIn.getSeconds();
        break;

      case 'a':
        output = hours >= 12 ? 'pm' : 'am';
        break;

      case 'z':
        output = tz.abbr;
        break;
    }

    if (padding) {
      output = _adUtils.TextUtils.pad(output, padding);
    }

    if (upper) {
      output = output.toUpperCase();
    } // console.log('\t', match, token, output)


    return output;
  });
  return result;
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

exports.__esModule = true;
exports.createXMLHttpRequest = createXMLHttpRequest;
exports.getFileName = getFileName;
exports.getFontName = getFontName;
exports.getFileType = getFileType;
exports.getFullUrl = getFullUrl;
exports.getUrlPrepend = getUrlPrepend;
exports.getParamsFromData = getParamsFromData;

function createXMLHttpRequest() {
  try {
    return new XMLHttpRequest();
  } catch (e) {}

  try {
    return new ActiveXObject("Msxml2.XMLHTTP");
  } catch (e) {}

  alert("XMLHttpRequest not supported");
  return null;
}

function getFileName(url) {
  var extension = url.lastIndexOf('.');
  var directory = url.lastIndexOf('/') + 1;
  if (directory > extension) extension = undefined;
  return url.substring(directory, extension);
}

function getFontName(url) {
  return url.substring(url.lastIndexOf('/') + 1, url.indexOf('.'));
}

function getFileType(url) {
  url = url || '';

  var _index = url.indexOf('?');

  if (_index > -1) {
    url = url.substr(0, _index);
  }

  var _split = url.match(/[^\\]*\.(\w+)$/);

  var _base64 = url.match(/image\/(jpeg|jpg|png)/);

  var _type = _split ? _split[1] : _base64 ? _base64[1] : 'unknown';

  return _type;
}

function getFullUrl(prepend, file, platformGetUrl) {
  var _prepend = getUrlPrepend(prepend);

  var _url = global.matchProtocolTo(_prepend + _file);

  if (platformGetUrl) {
    _url = platformGetUrl(_url);
  }

  return url;
}

function getUrlPrepend(path) {
  return path ? path.replace(/\/?$/, '/') : '';
}

function getParamsFromData(query) {
  if (typeof query === 'string') {
    /*
     * TODO - check the string is formatted correctly?
     */
    return query;
  } else {
    var queryString = '';

    for (var prop in query) {
      console.log("      prop =", prop);
      queryString += prop + '=' + query[prop] + '&';
    }

    return queryString.substr(0, queryString.length - 1);
  }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

exports.__esModule = true;
exports.LoaderSource = void 0;

var Utils = _interopRequireWildcard(__webpack_require__(7));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var LoaderSource = function LoaderSource(superclass) {
  return (
    /*#__PURE__*/
    function (_superclass) {
      _inheritsLoose(_class, _superclass);

      function _class() {
        var _this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _superclass.call.apply(_superclass, [this].concat(args)) || this;
        var arg = arguments && arguments.length > 1 ? arguments[1] : arguments[0] || {};

        var L = _assertThisInitialized(_this);

        L.url = global.matchProtocolTo(arguments[0] || '');

        if (arg.platformGetUrl) {
          L.platformGetUrl = arg.platformGetUrl;
          L.url = arg.platformGetUrl(L.url);
        }

        L.fileName = arg.id === undefined ? Utils.getFileName(L.url) : arg.id;
        L.fileType = arg.fileType || Utils.getFileType(L.url);
        return _this;
      }

      return _class;
    }(superclass)
  );
};

exports.LoaderSource = LoaderSource;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

/**
	@class Timezone
	@desc
		<a href="https://github.com/ff0000-ad-tech/ad-dates">Github repo</a>
		<br><br>
		
		This class provides constants and methods for accessing Timezone offsets, used by the TzDate class.
*/
var Timezone = new function () {
  var T = this;
  var _pool = ['LOCAL', 'UTC', 'EST', 'CST', 'MST', 'PST', 'AKST', 'AZ', 'HST', 'MEX', 'AEST', 'AEST2'];

  var _local;

  T._trueLOCAL;
  T._tzDiff = [0, 0, 0];
  Object.defineProperties(T, {
    /**
    	@memberOf Timezone	
    	@var {object} LOCAL
    	@desc
    		Timezone constant for the client's machine; object keys: 
    	@example
    		// use as static constant
    		Timezone.LOCAL
    			// returns
    		{ label: 'Local', abbr: 'local', value: ? }
    */
    LOCAL: {
      get: function get() {
        return _local;
      },
      set: function set(val) {
        // console.log( 'LOCAL.set')
        // console.log( '\tval', val )
        var now = new Date();
        var tzOff = now.getTimezoneOffset();
        var hr = Math.floor(tzOff / 60);
        var min = tzOff % 60; //console.log( val.value, Math.floor(val.value), val.value % 1 )

        var valHr = Math.floor(val.value);
        var valMin = val.value % 1 * 60;
        var adjHr = -(valHr + hr);
        var adjMin = -(valMin + min);
        var offset = T.getDLS(now);

        if (val.value == 0) {
          offset = 0; //UTC
        } else if (val.value > 0) {
          // acounts for time in the future from UTC
          adjHr = 24 + adjHr;
        } // console.log( 'hr:', hr, 'min:', min, '| adjHr:', adjHr, 'adjMin:', adjMin, '|val:', val )


        T._tzDiff[0] = adjHr - offset;
        T._tzDiff[1] = adjMin; //	console.log( '\t_tzDiff:', T._tzDiff )

        _local = val;
        console.log('\tTimezone.LOCAL is now:', val);
      }
    },

    /**
    	@memberOf Timezone	
    	@var {object} UTC
    	@desc
    		Timezone constant for Universal Time Coordinated aka Greenwich Mean Time; object keys: 
    	@example
    		// use as static constant
    		Timezone.UTC
    			// returns
    		{ label: 'UTC', abbr: 'utc', value: 0 }
    */
    UTC: {
      get: function get() {
        return {
          label: 'UTC',
          abbr: 'utc',
          value: 0
        };
      }
    },

    /**
    	@memberOf Timezone	
    	@var {object} EST
    	@desc
    		Timezone constant for Eastern Time; object keys: 
    	@example
    		// use as static constant
    		Timezone.EST
    			// returns
    		{ label: 'US/Eastern', abbr: 'et', value: -5 }
    */
    EST: {
      get: function get() {
        return {
          label: 'US/Eastern',
          abbr: 'et',
          value: -5
        };
      }
    },

    /**
    	@memberOf Timezone	
    	@var {object} CST
    	@desc
    		Timezone constant for Central Time, Mexico Time; object keys: 
    	@example
    		// use as static constant
    		Timezone.CST
    			// returns
    		{ label: 'US/Central', abbr: 'ct', value: -6 }
    */
    CST: {
      get: function get() {
        return {
          label: 'US/Central',
          abbr: 'ct',
          value: -6
        };
      }
    },

    /**
    	@memberOf Timezone	
    	@var {object} MST
    	@desc
    		Timezone constant for Mountain Time; object keys: 
    	@example
    		// use as static constant
    		Timezone.MST
    			// returns
    		{ label: 'US/Mountain', abbr: 'mt', value: -7 }
    */
    MST: {
      get: function get() {
        return {
          label: 'US/Mountain',
          abbr: 'mt',
          value: -7
        };
      }
    },

    /**
    	@memberOf Timezone	
    	@var {object} PST
    	@desc
    		Timezone constant for Pacific Time; object keys: 
    	@example
    		// use as static constant
    		Timezone.PST
    			// returns
    		{ label: 'US/Pacific', abbr: 'pt', value: -8 } 
    */
    PST: {
      get: function get() {
        return {
          label: 'US/Pacific',
          abbr: 'pt',
          value: -8
        };
      }
    },

    /**
    	@memberOf Timezone	
    	@var {object} AKST
    	@desc
    		Timezone constant for Alaska Time; object keys: 
    	@example
    		// use as static constant
    		Timezone.AKST
    			// returns
    		{ label: 'US/Alaska', abbr: 'akst', value: -9 }
    */
    AKST: {
      get: function get() {
        return {
          label: 'US/Alaska',
          abbr: 'akst',
          value: -9
        };
      }
    },

    /**
    	@memberOf Timezone	
    	@var {object} AZ
    	@desc
    		Timezone constant for Arizona Time; object keys: 
    	@example
    		// use as static constant
    		Timezone.AZ
    			// returns
    		{ label: 'US/Arizona', abbr: 'az', value: -7 }
    */
    AZ: {
      get: function get() {
        return {
          label: 'US/Arizona',
          abbr: 'az',
          value: -7
        };
      }
    },

    /**
    	@memberOf Timezone	
    	@var {object} HST
    	@desc
    		Timezone constant for Hawaii Time; object keys: 
    	@example
    		// use as static constant
    		Timezone.HST
    			// returns
    		{ label: 'US/Hawaii', abbr: 'hst', value: -10 }
    */
    HST: {
      get: function get() {
        return {
          label: 'US/Hawaii',
          abbr: 'hst',
          value: -10
        };
      }
    },
    // TEMP additions until new solution can be found
    MEX: {
      get: function get() {
        return {
          label: 'America/Mexico_City',
          abbr: 'mx',
          value: -6 // is actually 'ct', but ESPN...

        };
      }
    },
    AEST: {
      get: function get() {
        return {
          label: 'Australia/Brisbane',
          abbr: 'aest',
          value: 10
        };
      }
    },
    AEST2: {
      get: function get() {
        return {
          label: 'Australia/Sydney',
          abbr: 'aest',
          value: 10
        };
      }
    }
  });

  T.init = function () {
    //	console.log( 'LOCAL.get init' )
    var now = new Date();
    var offset = T.getDLS(now);
    var val = -(now.getTimezoneOffset() / 60) - offset;
    _local = {
      label: 'Local',
      abbr: 'local',
      value: val //console.log( '\t_local:', _local )

    };
    var actualTz = T.get(_local.value); //console.log( '\t\tactualTz:', actualTz )

    if (isNaN(actualTz)) {
      _local.label = actualTz.label;
      _local.abbr = actualTz.abbr;
    } else {
      //	console.log( '\t\t\t timezone not found')
      // timezone not found, so get it from
      var dateString = now.toTimeString();
      var tzStr = dateString.split('(')[1];
      tzStr = tzStr.substr(0, tzStr.length - 1); // IE & Edge print timezones as words, not abbreviated, so strip it down to just abbreviation

      tzStr = tzStr.replace(/[a-z\.\s]/g, '');
      _local.label = _local.abbr = tzStr;
      console.log('\t\t\t', _local);
    }

    T._trueLOCAL = _local;
  };
  /**
  	@memberOf Timezone	
  	@method get
  	@property {object|string|number} timezone
  		The timezone constant, label or value of the Timezone object desired.
  	@returns {string}
  	@desc
  		Returns an object with the timezone's label and value 
  */


  T.get = function (timezone) {
    //console.log( 'Timezone.get() >', timezone, '|||', typeof timezone === 'number', isFinite(timezone), Math.floor(timezone) === timezone )
    if (timezone == undefined) return T.LOCAL;

    if (typeof timezone === 'string') {
      // is passing a label, such as 'US/Pacific'
      for (var i = 0; i < _pool.length; i++) {
        if (T[_pool[i]].label == timezone) {
          return T[_pool[i]];
        }
      } // TODO : should have a fail safe


      return null;
    } else if (typeof timezone === 'number' && isFinite(timezone)) {
      // && Math.floor(timezone) === timezone ) {
      // console.log( '\t get by number')
      for (var i = 0; i < _pool.length; i++) {
        if (T[_pool[i]].value === timezone) {
          if (T[_pool[i]].label != 'Local') {
            return T[_pool[i]];
          }
        }
      } //return timezone;


      return {
        label: 'Local',
        abbr: 'Local',
        value: timezone
      };
    } else {
      return timezone;
    }
  };
  /**
  	@memberOf Timezone	
  	@method getDLS
  	@property {Date|TzDate} date
  		The date to check
  	@returns {string}
  	@desc
  		Checks the Daylight Savings offset for a date, then returns either 1 or 0 
  */


  T.getDLS = function (date) {
    var winter = new Date('2011', '01', '01');
    var summer = new Date('2011', '07', '01');
    var winterOffset = winter.getTimezoneOffset();
    var summerOffset = summer.getTimezoneOffset();
    var dateOffset = date.getTimezoneOffset();
    return dateOffset == summerOffset && dateOffset != winterOffset ? 1 : 0;
  };
}();
var _default = Timezone;
exports.default = _default;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Markup = exports.Styles = exports.Align = exports.Clamp = exports.Effects = exports.Ratio = exports.FullScreen = void 0;

var _FullScreen = _interopRequireDefault(__webpack_require__(60));

exports.FullScreen = _FullScreen.default;

var Ratio = _interopRequireWildcard(__webpack_require__(61));

exports.Ratio = Ratio;

var Effects = _interopRequireWildcard(__webpack_require__(62));

exports.Effects = Effects;

var Clamp = _interopRequireWildcard(__webpack_require__(63));

exports.Clamp = Clamp;

var Align = _interopRequireWildcard(__webpack_require__(64));

exports.Align = Align;

var Styles = _interopRequireWildcard(__webpack_require__(11));

exports.Styles = Styles;

var Markup = _interopRequireWildcard(__webpack_require__(12));

exports.Markup = Markup;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.setCss = setCss;
exports.getCss = getCss;
exports.injectStylesheet = injectStylesheet;
exports.addClass = addClass;
exports.removeClass = removeClass;

var Markup = _interopRequireWildcard(__webpack_require__(12));

var _adControl = __webpack_require__(16);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/**
	@class Styles
	@desc
		<a href="https://github.com/ff0000-ad-tech/ad-view">Github repo</a>
		<br><br>
		
		Utilities for CSS style related purposes. 
*/

/**
	@memberof Styles
	@method setCss
	@param {string|element} _target
		id or element to which the style(s) should be applied
	@param {string|object|array} args
		any type of CssDeclaration, an object of key-value pairs, a semicolon separated string of styles, or a separate( key, value )arguments
	@desc
		Sets specified styles on target object.
	@example
		// set multiple styles using a css-string
		Styles.setCss ( myDiv, 'top: 30px; left: 10px' );

		// set multiple styles using a css-object, same as the 'css' property on {@link UIComponent}s
		Styles.setCss ( myDiv, { top:30, left:10 });

		// set a single style, using individual( key, value )args
		Styles.setCss ( myDiv, 'top', 30 );
*/
function setCss(element, args) {
  element = Markup.get(element);
  var cssList = {};

  if (arguments.length > 2) {
    for (var i = 1; i < arguments.length; i += 2) {
      cssList = _adControl.CssManager.conformCssKeyValue(arguments[i], arguments[i + 1]);
    }
  } else if (typeof arguments[1] == 'string') {
    cssList = _adControl.CssManager.conformCssString(arguments[1], element);
  } else {
    cssList = _adControl.CssManager.conformCssObject(arguments[1], element);
  }

  _adControl.CssManager.apply(element, cssList);
}
/**
	@memberof Styles
	@method getCss
	@param {string|element} _target
		id or element to which css style should be applied
	@param {string} key
		css key
	@desc
		Gets a specific style for a particular key.
*/


function getCss(element, key) {
  element = Markup.get(element);
  var cssValue;

  if (key == 'x' || key == 'y') {
    var existingTransform = element.style[_adControl.CssManager.getDeviceKey('transform')];

    var matrix = existingTransform.replace(/[\s\(\)matrix]/g, '').split(',');
    cssValue = matrix.length < 6 ? 0 : +matrix[key == 'x' ? 4 : 5];
  } else {
    var style = window.getComputedStyle(element, null);
    cssValue = style.getPropertyValue(key).replace(/px/, '');
    if (!isNaN(cssValue)) cssValue = parseInt(cssValue, 10);
  }

  return cssValue;
}
/**
	@memberof Styles
	@method injectStylesheet
	@param {string} nodeId
		the id of the &lt;style> node written to the &lt;head>
	@param {string|object|array} styles
		any type of CssDeclaration: an object of key-value pairs, a semicolon separated string of styles, or a separate( key, value )arguments
	@desc
		Creates a new CSS stylesheet node (class, tag, etc) DEFINITION out of the submitted styles. 

	@example
		// selector/CSS string pair
		Styles.injectStylesheet( 'myFirstStyle', 
			'.class-a', 'position:absolute; width:inherit;'
		)

		// selector/CSS string pair: add multiple class declarations to the same node
		Styles.injectStylesheet( 'mySecondStyle', 
			'.class-b', 'position:absolute;',
			'.class-b-top', 'width:inherit; height:inherit;'
		)

		// selector/CSS string pair:  have mulitple classes share the same logic
		Styles.injectStylesheet( 'myThirdStyle', 
			'.class-c, .class-d', 'position:absolute;'
		)

		// selector/CSS string pair: add style to a tag name globally
		Styles.injectStylesheet( 'myFourthStyle', 
			'h1', 'position:absolute;'
		)

		// self-contained CSS string
		var myCssString = '.myClass, h1 { color: blue; margin: 10px; }';
		Styles.injectStylesheet( 'myFifthStyle', myCssString );
*/


function injectStylesheet(nodeId, styles) {
  if (document.getElementById(nodeId)) {
    return;
  }

  var style = document.createElement('style');
  style.type = 'text/css';
  style.id = nodeId; // if only two parameters, assuming styles is CSS string
  // else process as selector/style pair

  var str = arguments.length === 2 ? styles : '';

  if (arguments.length > 2) {
    for (var i = 0; i < arguments.length - 1; i += 2) {
      // strip out the white space after comma
      var names = arguments[i + 1].replace(/\,\s+/g, ',');
      str += names;
      str += ' { ' + (arguments[i + 2] || '') + ' }\n';
    }
  }

  style.innerHTML = str;
  document.getElementsByTagName('head')[0].appendChild(style);
}
/**
	@memberof Styles
	@method addClass
	@param {string|element} target
		id or element to which css style should be added
	@param {string} className
		css class association to be added to this target
	@desc
		Add a CSS class ASSOCIATION to the targeted element.
*/


function addClass(target, className) {
  var element = Markup.get(target); // IE does not support multiple classes being added as arguments, so must loop

  for (var i = 0; i < arguments.length - 1; i++) {
    element.classList.add(arguments[i + 1]);
  }
}
/**
	@memberof Styles
	@method removeClass
	@param {string|element} target
		id or element from which css style should be removed
	@param {string} className
		css class association to be removed from this target
	@desc
		Removes a CSS class ASSOCIATION from the targeted element.
*/


function removeClass(target, className) {
  var element = Markup.get(target);
  element.classList.remove(className);
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.get = get;
exports.getElement = getElement;
exports.removeChildren = removeChildren;
exports.addiFrame = addiFrame;
exports.addSvg = addSvg;
exports.applyToElements = applyToElements;

/**
	@class Markup
	@desc
		<a href="https://github.com/ff0000-ad-tech/ad-view">Github repo</a>
		<br><br>
		
		This object contains utilities relateed to dom elements.
*/

/**
	@memberof Markup
	@method get
	@param {string} selector
		A string selector. It defaults to find the string as an id, or if the string starts with '#'. 
		If starts with '.', it selects by class name. If wrapped with '<>', it selects by tag name.
	@param {element} parent
		Optional parent element to get the element(s) from. Defaults to document.
	@returns {element|HTMLCollection}
		One single element if the selector is an id. With class name or tag name, it returns an HTML collection ( similiar to an array ).
	@desc
		Used to select elements.

	@example
		// get element by its id called 'myId'
		Markup.get( 'myId' );
		
		// same as above
		Markup.get( '#myId' );
		
		// get element by CSS classname 'myClass'
		Markup.get( '.myClass' );
		
		// get elements by tag name 'head'
		Markup.get( '<head>' );
*/
function get(selector, parent) {
  if (typeof selector !== 'string') {
    return selector;
  }

  parent = parent || document;
  selector = selector.trim();

  switch (selector[0]) {
    case '#':
      // id
      return parent.getElementById(selector.slice(1));
      break;

    case '.':
      // class
      return parent.getElementsByClassName(selector.slice(1));
      break;

    case '<':
      // tag
      return parent.getElementsByTagName(selector.slice(1, selector.length - 1));
      break;

    default:
      // default to id for backworad support
      return parent.getElementById(selector);
  }
} // the deprecated syntax 12/28/16


function getElement(selector, parent) {
  return get(selector, parent);
}
/**
	@memberof Markup
	@method removeChildren
	@param {element} _target
		element to be targeted
	@desc
		Removes all the children elements of an element
*/


function removeChildren(_target) {
  var element = get(_target);
  console.log('removeChildren (' + _target + ')');

  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
/* 
	To be deprecated after moving addiFrame and addSvg to UIComponent 
*/
// export function applyContainerCss (_element, _containerData) {
// 	if (!_containerData.css) _containerData.css = {};
// 	if (!_containerData.css.position)
// 		_containerData.css.position = 'absolute';
// 	Styles.setCss(_element, _containerData.css);
// 	Styles.setCss(_element, _containerData.styles);
// }

/**	Method: addIframe()
 Deprecated. Add an iframe to the containerData.target, pointing at containerData.source.  */


function addiFrame(_containerData) {
  var element = document.createElement('iFrame');
  element.id = _containerData.id;
  element.width = _containerData.css.width;
  element.height = _containerData.css.height;
  delete _containerData.css.width;
  delete _containerData.css.height; // iframe properties

  element.setAttribute('src', _containerData.source);
  element.setAttribute('frameborder', '0');
  element.setAttribute('scrolling', 'no');
  element.setAttribute('allowfullscreen', '');
  applyContainerCss(element, _containerData);

  _containerData.target.appendChild(element);

  return element;
}
/**	Method: addSvg()
	Deprecated.

	_containerData			- object with the necessary keys for creating an element. */


function addSvg(_containerData) {
  var nameSpace = 'http://www.w3.org/2000/svg';
  var element = document.createElementNS(nameSpace, 'svg');
  element.setAttribute('height', _containerData.height);
  element.setAttribute('width', _containerData.width);
  var path = document.createElementNS(nameSpace, 'path');
  path.setAttribute('d', _containerData.d);
  path.setAttribute('fill', _containerData.fill);

  if (_containerData.stroke != undefined) {
    path.setAttribute('stroke', _containerData.stroke);
  }

  if (_containerData.strokeWidth != undefined) {
    path.setAttribute('stroke-width', _containerData.strokeWidth);
  }

  element.appendChild(path);
  applyContainerCss(element, _containerData);

  _containerData.target.appendChild(element);

  return element;
}
/**
	@memberof Markup
	@method applyToElements
	@param {object} arg
		See properties for more info:
		@property {object} arg.scope
			the scope of this
		@property {function} arg.method
			the function to use
		@property {element|array} arg.element
			the element(s) to apply the method to, can be a single element or an array
		@property {string|number|array|object} arg.methodArg
			the argument to pass to the method function
	@desc
		Apply a method to multiple elements. Currently assuming the method accepts element as the first argument,
		and a second argument as the setting. 

	@example
		var myElements = Markup.get( '.centered-blocks' );
		Markup.applyToElements({
			scope: Align,
			method: Align.set,
			elements: myElements,
			methodArg: { x: Align.CENTER }
		});
*/


function applyToElements(arg) {
  if (arg.elements.length === undefined) {
    // assume it is a single element
    arg.method.call(arg.scope, arg.elements, arg.methodArg);
  } else {
    // assume it is an array/HTML collection
    var i;

    for (i = 0; i < arg.elements.length; i++) {
      var el = arg.elements[i];
      arg.method.call(arg.scope, el, arg.methodArg);
    }
  }
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getTimeDifference = getTimeDifference;
exports.adjust = adjust;
exports.isPast = isPast;

var DateManager = _interopRequireWildcard(__webpack_require__(14));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// export const MS_PER_SECOND = 1000
// export const MS_PER_MINUTE = 6e4 // 1000 * 60;
// export const MS_PER_HOUR = 36e5 // D.MS_PER_MINUTE * 60;
// export const MS_PER_DAY = 864e5 // D.MS_PER_HOUR * 24;
// export const MS_PER_WEEK = 6048e5 // D.MS_PER_DAY * 7;
var MS_PER = {
  SECOND: 1000,
  MINUTE: 6e4,
  // 1000 * 60;
  HOUR: 36e5,
  // D.MS_PER_MINUTE * 60;
  DAY: 864e5,
  // D.MS_PER_HOUR * 24;
  WEEK: 6048e5 // D.MS_PER_DAY * 7;

  /**
      @memberOf DateUtils
      @method getTimeDifference
      @desc
          Returns an Object of the time remaining until the target date, with the day, hour, minute, second as numbers and output as a string '##:##:##:##'
      @returns {Object}
      @example		
          // to use as a countdown
          var targetDate = new TzDate({
              datetime : ['2017-06-06 11:37:00', Timezone.PST]
          })
  
          // use FrameRate to set a ticker of once a second.
          FrameRate.register ( this, handleCountdown, 1 );
          function handleCountdown(){
              const countdownStr = DateUtils.getTimeDifference(DateManager.getNow(), targetDate)
              if (DateUtils.isPast(targetDate)) {
                  FrameRate.unregister(this, handleCountdown, 1);
              }
          }
  */

};

function getTimeDifference(startTime, endTime) {
  var diff = endTime.getTime() / 1000 - startTime.getTime() / 1000;

  if (diff < 0) {
    diff = 0;
  } // use the const obj instead


  var obj = {
    day: diff / (24 * 60 * 60),
    hour: diff / (60 * 60) % 24,
    minute: diff / 60 % 60,
    second: diff % 60,
    output: ''
  };
  var label = ['day', 'hour', 'minute', 'second'];

  for (var i = 0; i < 4; i++) {
    obj.output += TextUtils.pad(Math.floor(obj[label[i]]), 2);
    if (i < 3) obj.output += ':';
  }
  /*
  obj.output = TextUtils.pad( Math.floor(obj.day), 2 ) + ':' 
  			+ TextUtils.pad( Math.floor(obj.hour), 2 ) + ':'
  			+ TextUtils.pad( Math.floor(obj.minute), 2 ) + ':' 
  			+ TextUtils.pad( Math.floor(obj.second), 2 );
  */


  return obj;
}
/**
	@memberOf DateUtils	
	@method adjust
	@property {TzDate|Date} date
		The date that will be the starting point for adjustment
	@property {Object} times
		An Object of time keys to adjust the date with. Positive numbers will increase the time, while negative numbers
		will decrement it. The accepted keys are: week, day, hour, minute, second
	@returns {TzDate|Date}
	@desc
		Returns the same type of Object provided: TzDate returns TzDate, Date returns Date

	<codeblock>
		// adjust the time of a TzDate
		var myTzDate = new TzDate({
			datetime : [ '2017-12-31 12:00:00', Timezone.UTC ]
		})
		var adjustedTzDate = DateUtils.adjust( myTzDate, { day:-1.5, hour:4.2, minute:90 });
		// Sat Dec 30 2017 05:42:00 UTC


		// adjust the time of a regualar Date object
		var myDate = new Date(2017,0,1)
		var adjustedDate = DateUtils.adjust( myDate, { day:-1.5, hour:4.2, minute:90 });
		// Fri Dec 30 2016 17:42:00 GMT-0800 (PST)
	</codeblock>
*/


function adjust(date, times) {
  var dateAdj;

  if (date._isTzDate) {
    dateAdj = date.clone();
  } else {
    dateAdj = new Date(date);
  }

  for (var key in times) {
    //var cons = 'MS_PER_' + key.toUpperCase()
    var val = MS_PER[key.toUpperCase()];
    var add = times[key] * val; // console.log( 'key:', key, times[key] )
    // console.log( '\tcons:', cons )
    // console.log( '\tval:', val )
    // console.log( '\tadd:', add )

    dateAdj.setTime(dateAdj.getTime() + add);
  } // console.log( 'date:', date )
  // console.log( 'dateAdj:', dateAdj )


  return dateAdj;
}
/** 
    @memberOf DateUtils	
    @method isPast
    @param {Date} date
        date to be compared
    @param {Date} context
        date to compare against, generally {@link DateUtils}
    @returns {boolean}
    @desc
        Returns true for a date that has passed the context.
*/


function isPast(date, context) {
  if (context == undefined) {
    context = DateManager.getNow();
  } // console.log( 'isPast()\n\t', date, '|', date.toFullDateTime(), '\n\t', context, '|', context.toFullDateTime() )
  // make it > and = to account for schedules a time such as 8:00pm vs 8:00pm should comes as true, not needing to set it as 8:00:01pm


  return context.getTime() >= date.getTime();
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.init = init;
exports.getNow = getNow;

var _adUtils = __webpack_require__(0);

var _TzDate = _interopRequireDefault(__webpack_require__(5));

var _Timezone = _interopRequireDefault(__webpack_require__(9));

var DateFormatter = _interopRequireWildcard(__webpack_require__(6));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
	@class DateManager

	@classdesc
		<a href="https://github.com/ff0000-ad-tech/ad-dates">Github repo</a>
		<br><br>
		
		This class initailizes the ads understanding of "now" for use with all other Date oriented classes.		
*/
var _currentDate; // ---------------------------------------------------------------------------------------------------------------
// PUBLIC METHODS

/**
	@memberOf DateManager
	@method init
	@desc
		This function is meant to be called at the very beginning of the ad's lifespan. Automatically, it sets initial time which 
		is used to keep an internal clock that can is used to reference the lifespan of the ad, show countdowns, changes in live states, etc.
		Additional settings on args include:<br>

		<ul>
			<li>dateOverride - optionally overrides the system date with a hard-coded one</li>
			<li>language - optionally sets the default language to be used for date-messaging</li>
		</ul>
*/


function init(args) {
  console.log('DateManager.init()'); // should this use global.getQueryParams() instead?

  var externalDate = _adUtils.NetUtils.getQueryParameterBy('date');

  var dateMode = 'SYSTEM-DATE'; // Call init here to establish LOCAL value

  _Timezone.default.init();

  if (externalDate) {
    _currentDate = externalDate;
    dateMode = 'EXTERNAL-DATE';
  } else if (args.dateOverride && (adParams.environmentId == 'staging' || adParams.environmentId == 'debug')) {
    _currentDate = args.dateOverride();
    dateMode = 'INTERNAL-DATE';
  }

  if (_currentDate) {
    // grab now, extract output timezone
    var now = new _TzDate.default({
      datetime: _currentDate
    });
    console.log('\t_currentDate set |', now.outputTimezone, '|', now, '|', now.toFullDateTime(), '|', now.outputTimezone);
    var tz = now.outputTimezone; //look for a timezone label, only changes the LABEL not the actual timezone value

    var externalTzLabel = _adUtils.NetUtils.getQueryParameterBy('tz');

    if (externalTzLabel) {
      tz.label = tz.abbr = externalTzLabel;
    }

    _Timezone.default.LOCAL = tz;
  } // check for default timezone, used in Velvet preview since segment not loaded


  var externalDefaultTimezone = _adUtils.NetUtils.getQueryParameterBy('ltz');

  if (externalDefaultTimezone) {
    adParams.defaultTimezone = externalDefaultTimezone;
  }

  console.log('-- CURRENT DATE ' + Array(104).join('-'));
  console.log('');
  console.log('    DATE-MODE: ' + dateMode);
  console.log('');
  console.log('     Time for this unit is now assumed to be: ');
  console.log('      ', getNow().toFullDateTime());
  console.log('');

  if (externalDefaultTimezone) {
    console.log('     External default timezone is: ');
    console.log('      ', externalDefaultTimezone);
    console.log('');
  }

  console.log(Array(120).join('-'));

  if (args.language) {
    DateFormatter.setLanguage(args.language);
  }
}
/**
	@memberOf DateManager	
	@method getNow
	@returns {TzDate}
	@desc
		Returns a TzDate representing the exact time it is called.

		You can override system time in the following ways:
		<br>
		<codeblock>
			// in the index
			var adParams = {
				dateSettings: {
					dateOverride : function() { return [ '2016-09-16 14:07:00', Timezone.PST ]; }
				}
			}

			// with a query string:
			// add this to your index file's url:
			?date=2017-05-17T17:45:00+00:00

			// NOTE: the browser address bar will automatically "url encode" some of the characters
			// so full url would look like:
			http:/ /10.0.86.13:4200/build/300x250/index.html?date=2017-05-17T17%3A45%3A00%2B00%3A00
		</codeblock>

		<b>NOTE::</b> <i>Ads built before v2.8.0 (June 2017) use {@link DateUtils} whose query-string format is different.</i>
		<br>
*/


function getNow() {
  var date = _currentDate;

  if (date == undefined) {
    date = new Date().toISOString().split('.')[0] + '+00:00';
  }

  return new _TzDate.default({
    datetime: date,
    outputTimezone: _Timezone.default.LOCAL
  });
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.get = exports.set = void 0;
var setting = {
  debug: false,
  imagePaths: ['img1.jpg', 'img2.png', 'img3.gif'],
  loadedImageNames: [],
  emitterDataFiles: [],
  emitterDataPath: 'js',
  imagePath: 'images',
  adPath: '',
  adWidth: '',
  adHeight: '',
  fps: 60
};

var set = function set(name, val) {
  if (name in setting) {
    setting[name] = val;
  } else {
    console.error("Can't set an undefined key in setting: " + name);
  }
};

exports.set = set;

var get = function get(name) {
  return setting[name];
};

exports.get = get;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.SheetManager = exports.ImageManager = exports.Expandable = exports.Core = exports.ExpandableDcs = exports.CssManager = void 0;

var _CssManager = _interopRequireDefault(__webpack_require__(24));

exports.CssManager = _CssManager.default;

var _ExpandableDcs = _interopRequireDefault(__webpack_require__(73));

exports.ExpandableDcs = _ExpandableDcs.default;

var Core = _interopRequireWildcard(__webpack_require__(74));

exports.Core = Core;

var Expandable = _interopRequireWildcard(__webpack_require__(75));

exports.Expandable = Expandable;

var ImageManager = _interopRequireWildcard(__webpack_require__(29));

exports.ImageManager = ImageManager;

var SheetManager = _interopRequireWildcard(__webpack_require__(80));

exports.SheetManager = SheetManager;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.StaticGenerator = exports.Velvet = exports.Device = void 0;

var _Device = _interopRequireDefault(__webpack_require__(43));

exports.Device = _Device.default;

var Velvet = _interopRequireWildcard(__webpack_require__(44));

exports.Velvet = Velvet;

var StaticGenerator = _interopRequireWildcard(__webpack_require__(69));

exports.StaticGenerator = StaticGenerator;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.LoaderUtils = exports.default = void 0;

var _MixinBuilder = __webpack_require__(3);

var _LoaderBase = __webpack_require__(4);

var Utils = _interopRequireWildcard(__webpack_require__(7));

exports.LoaderUtils = Utils;

var _ImageLoader = _interopRequireDefault(__webpack_require__(45));

exports.ImageLoader = _ImageLoader.default;

var _InlineLoader = _interopRequireDefault(__webpack_require__(46));

exports.InlineLoader = _InlineLoader.default;

var _DataLoader = _interopRequireDefault(__webpack_require__(47));

exports.DataLoader = _DataLoader.default;

var _FontLoader = _interopRequireDefault(__webpack_require__(48));

exports.FontLoader = _FontLoader.default;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Blank = function Blank() {};

var Loader =
/*#__PURE__*/
function (_mix$with) {
  _inheritsLoose(Loader, _mix$with);

  function Loader() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _mix$with.call.apply(_mix$with, [this].concat(args)) || this;
    var arg = arguments && arguments.length > 1 ? arguments[1] : arguments[0] || {};

    var L = _assertThisInitialized(_this);

    L._queue = {};
    L._total = 0;
    L._active = false;
    L._startedCount = 0;
    L.prepend = arg.prepend || '';
    L.platformGetUrl = arg.platformGetUrl;
    L.fileType = arg.fileType || null;
    L.content = [];
    L.crossOrigin = arg.crossOrigin || undefined;
    L.add(arguments[0]);
    return _this;
  }
  /* ---------------------------------------------------------------------------------------------------------------- */
  // PUBLIC

  /**
  	@memberOf Loader
  	@method add
  	@param {string|array|Loader} arg
  		a file, array of files, or Loader instance
  	@desc
  		Add to the load queue: a single or array of files or even another Loader.
  	@example
  		// Single load
  		var imgLoader = new Loader({ name:'img_loader' });
  		
  		// add to that loader
  		imgLoader.add('images/img1.jpg');
  		
  		// add multiple
  		imgLoader.add(['images/img2.jpg', 'images/img3.jpg']);
  	
  		// Nested loads - best practice is to make a loader for one file type
  		var mainLoader = new Loader({ name:'main', onComplete:handleComplete });
  			mainLoader.add( imgLoader );
  		
  		// or just add a new loader instance
  		mainLoader.add( new Loader(['font1.ttf', 'font2.ttf'], { name:'load_fonts' }) );				
  */


  var _proto = Loader.prototype;

  _proto.add = function add(arg) {
    var L = this;

    if (typeof arg === 'string') {
      // single load as first parameter
      L._addSingleLoad(arg);
    } else if (arg instanceof Array) {
      // first parameter is an Array of urls
      for (var i = 0; i < arg.length; i++) {
        L._addSingleLoad(arg[i]);
      }
    } else if (arg instanceof Loader) {
      if (arg.content && arg.content[0] && arg.content[0].fileType == 'fba') {
        L._addFbaSubLoads(arg.content[0]);
      } else {
        L._addSubLoad(arg);
      }
    }
  };
  /**
  	@memberOf Loader
  	@method load
  	@desc
  		Starts the load process.
  	@example
  		// Single load
  		var imgLoader = new Loader({ onComplete:handleComplete });
  		imgLoader.load();				
  */


  _proto.load = function load() {
    var L = this;
    L._active = true;

    if (L._total <= 0) {
      console.log('Loader "' + L.name + '" has NO assets to be loaded.');
    } else {
      var _has = false;
      var _output = '';

      for (var l in L._queue) {
        if (!(L._queue[l] instanceof Loader)) {
          if (!_has) {
            _has = true;
            _output += 'Loader "' + L.name + '" requesting:';
          }

          var fileName = L._queue[l].fileName;
          var extension = L._queue[l].fileType;
          var extensionIndex = fileName.indexOf('.' + extension);
          var fileAndExtension = extensionIndex > -1 ? fileName : fileName + '.' + extension;
          _output += '\n\t -> ' + (L._queue[l].prepend || '') + fileAndExtension;
        }
      }

      if (_has) console.log(_output);
    }

    L._startSingleLoad(0);
  };
  /**	
  	@memberOf Loader
  	@method getAllContent
  	@returns {array}
  		An array of LoaderData Objects with relevant loading information (like an Event Object).  
  		Access the loaded content via the property 'dataRaw': an image, raw Json, raw XML, or font name
  	@desc
  		Get all loaded content from the Loader and all nested Loaders
  	@example
  		var myLoader = new Loader(['img1.jpg', 'img2.jpg', 'img3.jpg'], { onComplete:handleComplete });
  		myLoader.load();
  			function handleComplete( target ) {
  			var myContent = target.getAllContent();
  			console.log( "Content found:", myContent );
  		}
  */


  _proto.getAllContent = function getAllContent() {
    var _found = [];

    function searchSubLoader(content) {
      for (var i = 0; i < content.length; i++) {
        //console.log( "   -> sub:", content[i] )
        if (content[i] instanceof Loader) {
          searchSubLoader(content[i].content);
        } else {
          _found.push(content[i]);
        }
      }
    }

    searchSubLoader(this.content);
    if (_found.length < 1) console.log('No Content found');
    return _found;
  };
  /**	
  	@memberOf Loader
  	@method getAllContentRaw
  	@returns {array}
  		An array of only the raw data: an image, raw Json, raw XML, or font name
  	@desc
  		Get all raw loaded content from the Loader and all nested Loaders, no LoaderData Objects
  	@example
  		var myLoader = new Loader(['img1.jpg', 'img2.jpg', 'img3.jpg'], { onComplete:handleComplete });
  		myLoader.load();
  			function handleComplete( target ) {
  			var myContent = target.getAllContentRaw();
  			console.log( "Content found:", myContent );
  		}
  */


  _proto.getAllContentRaw = function getAllContentRaw() {
    var _content = this.getAllContent();

    for (var i = 0; i < _content.length; i++) {
      _content[i] = _content[i].dataRaw;
    }

    return _content;
  };
  /**	
  	@memberOf Loader
  	@method getLoader
  	@param {string} id
  		the string optionally assigned to the 'name' property or the variable assigned to the Loader instance
  	@returns {Loader}
  	@desc
  		Get the Loader instance from the Loader or any nested Loader
  	@example
  		var mainLoader = new Loader({ name:'main', onComplete:handleLoadComplete });
  		mainLoader.add( new Loader( [ 'font1.ttf', 'font2.ttf' ], { name:'load_fonts', prepend:adParams.commonPath + 'fonts/' }) );
  		mainLoader.add( new Loader( ['Ad_Data.js', 'NetUtils.js'], { name:'load_js', prepend:adParams.corePath + 'utils/' }) );
  		mainLoader.load();
  			function handleLoadComplete( target ) {
  			var fontLoader = target.getLoader('load_fonts');
  		}
  */


  _proto.getLoader = function getLoader(id) {
    var _found = null;

    function searchSubLoader(content) {
      for (var i = 0; i < content.length; i++) {
        //console.log( "   -> sub:", content[i] )
        if (content[i] instanceof Loader) {
          if (content[i] && (content[i].name === id || content[i] === id)) {
            _found = content[i];
          } else {
            searchSubLoader(content[i].content);
          }
        }
      }
    }

    searchSubLoader(this.content);
    if (!_found) console.log('No Loader found of that name');
    return _found;
  };
  /* ------------------------------------------------------------------------------------------------------------- */
  // PRIVATE METHODS


  _proto._addSingleLoad = function _addSingleLoad(url, fbaOverwrite) {
    // console.log('_addSingleLoad()', url, fbaOverwrite)
    var L = this; // fbaOverwrite is an array [ file name, file extension ]

    var fileType = fbaOverwrite ? fbaOverwrite[1] : L.fileType || Utils.getFileType(url);
    var loaderType; // console.log('\t fileType:', fileType)

    switch (fileType) {
      case 'jpg':
      case 'jpeg':
      case 'gif':
      case 'png':
      case 'svg':
        loaderType = _ImageLoader.default;
        break;

      case 'ttf':
      case 'woff':
        loaderType = _FontLoader.default;
        break;

      case 'json':
      case 'fba':
      case 'bin':
      case 'binary':
      case 'svg+xml':
        loaderType = _DataLoader.default;
        break;

      default:
        loaderType = _InlineLoader.default;
    } // either the data as binary OR the file path and name


    var urlChoice = fbaOverwrite ? url : L.prepend + url; // console.log('\t url:', url, '| loaderType:', loaderType)

    var singleLoader = new loaderType(urlChoice, {
      scope: L,
      platformGetUrl: L.platformGetUrl,
      onComplete: L._handleSingleLoadComplete,
      onFail: L._handleFail,
      fileType: fileType,
      cacheBuster: L.cacheBuster,
      crossOrigin: L.crossOrigin
    }); // console.log('\t singleLoader:', singleLoader)
    // from fba, the files are binary, so there is
    // no file name to reference so set it here

    if (fbaOverwrite) {
      singleLoader.fileName = fbaOverwrite[0];
    }

    singleLoader.queueIndex = L._total;
    L._queue[L._total] = singleLoader;
    L._total++; // console.log(L._total, L._queue)
  };

  _proto._addSubLoad = function _addSubLoad(loader) {
    var L = this; //console.log(L.name, '_addSubLoad()')

    loader.onComplete = L._handleSingleLoadComplete.bind(L);
    loader.onProgress = L._handleProgress.bind(L);
    loader.onFail = L._handleFail; //loader.platformGetUrl = L.platformGetUrl;

    loader.queueIndex = L._total;
    L._queue[L._total] = loader;
    L._total++;
  };

  _proto._addFbaSubLoads = function _addFbaSubLoads(loader) {
    // console.log("_addFbaSubLoads()", loader)
    // Conversion between uint8s and uint32s.
    var uint8 = new Uint8Array(4);
    var uint32 = new Uint32Array(uint8.buffer); // start after = signature(8 bytes) + IHDR(25 bytes) + fbAc(16 bytes total, but only 11: size,type,content-1 )

    var idx = 44;
    var chunkTotal = new Uint8Array(loader.dataRaw, idx, 1)[0]; //console.log( 'number of images as chunks:', chunkTotal )
    // skip over rest of fbAc chunk: count value byte + CRC 4 bytes

    idx += 5;

    for (var i = 0; i < chunkTotal; i++) {
      // size, type, content, crc
      // get the size of next chunk as on UintArray
      var sizeOfChunk = new Uint8Array(loader.dataRaw, idx, 4); // Read the length of the current chunk, which is stored as a Uint32.
      // this one has to be a loop, as values get assigned to uint8, that changes buffer of uint32
      // also, the values must be set reversed, henced the count down loop

      var up = 4;

      for (var k = 0; k < 4; k++) {
        //console.log( k, up, sizeOfChunk[k] )
        uint8[--up] = sizeOfChunk[k];
      } // all chunk data NOT including the type


      var length = uint32[0];
      idx += 7; // Get the chunk type in ASCII, only last character really matters

      var type = String.fromCharCode(new Uint8Array(loader.dataRaw, idx++, 1)); //console.log( '\ttype:', type, '\tlength:', length )

      var fileNameLengthArray = new Uint8Array(loader.dataRaw, idx + 3, 1);
      var fileNameLength = fileNameLengthArray[0] || 0; // default to zero incase array fails? maybe unnecessary

      var nameBuffer = new Uint8Array(loader.dataRaw, idx + 4, fileNameLength);
      var fileName = String.fromCharCode.apply(String, nameBuffer); // first add to the file name length 4 bytes: file name length byte count

      fileNameLength += 4; // offset the array start and length by the file name length

      var chunkData = new Uint8Array(loader.dataRaw, idx + fileNameLength, length - fileNameLength); // NOTE: ArrayBuffer.slice() does not exist in IE10, so have to do it manually inline
      //var chunkData = new Uint8Array(chunk.buffer.slice(4))
      // skip over the content AND skip over the CRC value by incrementing by 4 bytes

      idx += length + 4;
      var fileNameSplit = fileName.split('.'); //var blobFileType = '';// 'application/octet-stream';

      var blobFileType = type == 'f' ? 'application/x-font-ttf' : 'image/' + (fileNameSplit[1] == 'svg' ? 'svg+xml' : fileNameSplit[1]);
      var blob = new Blob([chunkData], {
        type: blobFileType
      });
      var url = URL.createObjectURL(blob); // url will be ~ blob:32c3c7af-ef04-414f-a073-685602fe8a28
      //console.log( fileNameSplit, blobFileType, url )

      this._addSingleLoad(url, fileNameSplit);
    }
  };

  _proto._startSingleLoad = function _startSingleLoad(i) {
    var L = this;
    var _inst = L._queue[i]; // console.log(L.name, '_startSingleLoad()', 'index:', i, 'total:', L._total)

    if (L._total == 0) {
      // fire a complete because there are no requests
      L._handleComplete();
    } else {
      if (i < L._total) {
        // console.log( L.name, '_startSingleLoad() ->', _inst )
        if (!(_inst instanceof Loader)) {
          //console.log( _inst.name, 'is a subloader' )
          //} else {
          if (i < L._total - 1) {
            L._startLoadTimeOut(++i);
          }
        }

        _inst.load();
      }
    }
  };

  _proto._startLoadTimeOut = function _startLoadTimeOut(i) {
    var L = this;
    setTimeout(function () {
      L._startSingleLoad(i);
    }, 10);
  };
  /* ------------------------------------------------------------------------------------------------------------- */
  // EVENT HANDLERS


  _proto._handleSingleLoadComplete = function _handleSingleLoadComplete(target) {
    var L = this; // console.log("_handleSingleLoadComplete(), target:", target)

    L.content[target.queueIndex] = target;
    delete L._queue[target.queueIndex];

    L._handleProgress(); // is a nested Loader


    if (target.url == undefined) {
      //console.log( '"' + L.name + '" nested Loader "' + target.name + '" Complete' );
      if (target.queueIndex < L._total - 1) {
        L._startLoadTimeOut(target.queueIndex + 1);
      }
    }
  };

  _proto._handleProgress = function _handleProgress() {
    var L = this;
    var _length = L.content.length;
    var _count = 0;

    for (var i = 0; i < _length; i++) {
      if (L.content[i]) _count++;
    } // console.log(L.name, '_handleProgress()', '_count:', _count, 'total:', L._total)


    var _consecutive = _count;
    var _subProgress = 0;

    if (_count < L._total && L._queue[_count]) {
      _subProgress = L._queue[_count].progress / L._total || 0;
    }

    L.progress = _consecutive / L._total + _subProgress;
    L.rawProgress = _count / L._total + _subProgress;
    L.onProgress.call(L.scope, L); //console.log( 'progress')

    if (_count >= L._total) {
      //console.log( 'Loader calling _handleComplete()')
      L._handleComplete();
    }
  };

  _proto._handleComplete = function _handleComplete() {
    var L = this; // console.log('Loader "' + L.name + '" is Complete')

    L.onComplete.call(L.scope, L);
  };

  return Loader;
}((0, _MixinBuilder.mix)(Blank).with(_LoaderBase.LoaderBase));

exports.default = Loader;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _adUtils = __webpack_require__(0);

var _adGeom = __webpack_require__(2);

var _ParticlesUtils = _interopRequireDefault(__webpack_require__(20));

var _Graphic = _interopRequireDefault(__webpack_require__(21));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
	@class ParticleModel
	@desc
		<a href="https://github.com/ff0000-ad-tech/ad-particles">Github repo</a>
		<br><br>
		
		This ParticleModel class is used along with {@link Particle} and {@link Emitter} class.
*/
var particleId = 0;

var ParticleModel = function ParticleModel(graphic, properties) {
  var self = this;
  self.graphic = graphic;
  self.originalProperties = properties || {};
  self.defaultProperties = {};
  self.properties = self.originalProperties; // hold its own properties
  // but generate for partical to actually use

  self.setDefaultProperties = function (obj) {
    self.defaultProperties = obj;
    self.properties = _adUtils.ObjectUtils.defaults(self.originalProperties, obj, true);
  };

  self.generateIndividualProperties = function () {
    var psu = _ParticlesUtils.default;

    var rn = function rn(obj) {
      return psu.randomNumInRange(obj.value, obj.range);
    };

    var p = self.properties;

    var vel = _adGeom.Vector2D.degreeToVector(rn(p.velocityAngle));

    var scale = rn(p.scale);
    var speed = rn(p.speed);
    var loc = psu.randomVectorInRange(p.origin.value, p.origin.range, p.origin.shape);
    var result = {
      id: particleId,
      lifeSpan: rn(p.lifeSpan),
      location: loc,
      velocity: vel.mult(speed),
      turbulence: p.turbulence,
      maxSpeed: p.maxSpeed,
      acceleration: p.acceleration,
      bounceAmount: p.bounceAmount,
      bodySize: self._getBodySize(scale),
      style: {
        x: location.x,
        y: location.y,
        alpha: rn(p.alpha),
        scale: scale,
        rotation: rn(p.rotation),
        transformOrigin: p.transformOrigin,
        color: _ParticlesUtils.default.randomArrayInRange(p.color.value, p.color.range)
      },
      animations: p.animations
    };
    particleId++;
    return result;
  };

  self._getBodySize = function (scale) {
    if (self.properties.bodySize !== undefined) {
      return self.properties.bodySize * scale;
    }

    if (self.graphic instanceof _Graphic.default.Circle) {
      return self.graphic.width * scale;
    } else {
      return Math.max(self.graphic.width, self.graphic.height) * scale * 0.5;
    }
  };
};

var _default = ParticleModel;
exports.default = _default;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _adUtils = __webpack_require__(0);

var _adGeom = __webpack_require__(2);

var ParticlesUtils = ParticlesUtils || {}; //object

ParticlesUtils = {
  /* Style */
  easyTween: function easyTween(animations, maxDuration, frameCount) {
    var style = {};

    for (var key in animations) {
      var obj = animations[key];
      var steps = obj.steps;
      var duration = obj.duration === 'max' ? maxDuration : obj.duration || maxDuration;
      var perc = obj.loop ? frameCount % duration / duration : frameCount / duration;
      perc = _adUtils.MathUtils.restrict(perc, 0, 1);
      var i;

      for (i = 0; i < steps.length - 1; i++) {
        //check current and next
        var s1 = steps[i];
        var s2 = steps[i + 1];

        if (_adUtils.MathUtils.inRange(perc, s1.s, s2.s)) {
          // val = []
          var val = _adUtils.MathUtils.rel(s1.v, s2.v, s1.s, s2.s, perc);

          style[key] = val;
          break;
        }
      }
    }

    return style;
  },
  randomNumInRange: function randomNumInRange(v, r, increment) {
    if (!!!r) {
      return v;
    }

    increment = increment || 0.01;
    return v + _adUtils.MathUtils.random(-r / 2, r / 2, increment);
  },
  randomArrayInRange: function randomArrayInRange(v, r, increment) {
    increment = increment || 0.01;
    var result = [];
    var i;

    for (i = 0; i < v.length; i++) {
      result.push(this.randomNumInRange(v[i], r[i], increment));
    }

    return result;
  },
  randomVectorInRange: function randomVectorInRange(v, r, shape) {
    var center = new _adGeom.Vector2D(v.x, v.y);
    var rx = r.x / 2;
    var ry = r.y / 2;
    var rnd;

    switch (shape) {
      case 'rect':
        var x = _adUtils.MathUtils.random(-rx, rx, 0.01);

        var y = _adUtils.MathUtils.random(-ry, ry, 0.01);

        rnd = new _adGeom.Vector2D(x, y);
        break;

      case 'oval':
      default:
        var rnd = _adGeom.Vector2D.random();

        rnd.x *= rx * Math.random();
        rnd.y *= ry * Math.random();
    }

    center.add(rnd);
    return center;
  },
  secToFrameCount: function secToFrameCount(v, fps) {
    return ~~(v * fps);
  },
  frameCountToSec: function frameCountToSec(v, fps) {
    return v / fps;
  }
};
var _default = ParticlesUtils;
exports.default = _default;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _adUtils = __webpack_require__(0);

var _class, _temp;

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Graphic = {
  DEFAULTSIZE: 10,
  DEFAULTSTYLE: {
    x: 0,
    y: 0,
    alpha: 1,
    scale: 1,
    rotation: 0,
    transformOrigin: {
      x: 0.5,
      y: 0.5
    },
    color: [255, 0, 0],
    strokeWidth: 0,
    strokeColor: 'rgba(0, 0, 0, 1)'
  }
  /**
  	@class Graphic.Shape
  	@desc
  		The parent class of other Graphic classes. It handles color, alpha, translation, rotation and scaling. 
  
  */

};
Graphic.Shape = (_temp = _class =
/*#__PURE__*/
function () {
  function _class() {
    this.hasPath = true;
  }

  var _proto = _class.prototype;

  _proto.render = function render(ctx, style, frameCount) {
    if (style === void 0) {
      style = {};
    }

    if (frameCount === void 0) {
      frameCount = 0;
    }

    style = _adUtils.ObjectUtils.defaults(style, this.style);
    style.scale = _adUtils.MathUtils.restrict(style.scale, 0, Infinity);
    style.alpha = _adUtils.MathUtils.restrict(style.alpha, 0, 1);
    var w = this.width * style.scale;
    var h = this.height * style.scale;
    style.color = Graphic.Shape.getRGBA(style.color, style.alpha);
    ctx.save();

    if (style.alpha < 1 && !this.hasPath) {
      ctx.globalAlpha = style.alpha;
    }

    ctx.translate(w * -style.transformOrigin.x, h * -style.transformOrigin.y);

    if (style.rotation !== 0) {
      var tw = style.x + w * style.transformOrigin.x;
      var th = style.y + h * style.transformOrigin.y;
      ctx.translate(tw, th);
      ctx.rotate(_adUtils.MathUtils.toRadians(style.rotation));
      ctx.translate(-tw, -th);
    }

    if (this.hasPath) {
      ctx.beginPath();
    }

    this.draw(ctx, style, w, h, frameCount);

    if (this.hasPath) {
      ctx.closePath();
      ctx.fillStyle = style.color;
      ctx.fill();

      if (style.strokeWidth > 0) {
        ctx.lineWidth = style.strokeWidth;
        ctx.strokeStyle = style.strokeColor;
        ctx.stroke();
      }
    }

    ctx.restore();
  };

  return _class;
}(), Object.defineProperty(_class, "getRGBA", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getRGBA(rgb, alpha) {
    var r = ~~_adUtils.MathUtils.restrict(rgb[0], 0, 255);
    var g = ~~_adUtils.MathUtils.restrict(rgb[1], 0, 255);
    var b = ~~_adUtils.MathUtils.restrict(rgb[2], 0, 255);

    var a = _adUtils.MathUtils.restrict(alpha, 0, 1);

    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
  }
}), _temp);
/**
	@class Graphic.Image
	@desc
		A class for rendering images on canvas. The size parameter applys to width. The height
		is calculated base the the image width and height ratio and call draw method of the child class.
*/

Graphic.Image =
/*#__PURE__*/
function (_Graphic$Shape) {
  _inheritsLoose(_class2, _Graphic$Shape);

  function _class2(image, size, style) {
    var _this;

    if (size === void 0) {
      size = image.width;
    }

    if (style === void 0) {
      style = {};
    }

    _this = _Graphic$Shape.call(this) || this;
    _this.hasPath = false;
    _this.image = image;
    _this.width = size;
    _this.height = _this.width * (image.height / image.width);
    _this.style = _adUtils.ObjectUtils.defaults(style, Graphic.DEFAULTSTYLE);
    return _this;
  }

  var _proto2 = _class2.prototype;

  _proto2.draw = function draw(ctx, style, w, h) {
    ctx.drawImage(this.image, style.x, style.y, w, h);
  };

  return _class2;
}(Graphic.Shape);
/**
	@class Graphic.Circle
	@param {number} size
		diameter of the circle
	@param {object} style
		Default to {@link Graphic.DEFAULTSTYLE}
	@desc
		A class for rendering circles on canvas

*/


Graphic.Circle =
/*#__PURE__*/
function (_Graphic$Shape2) {
  _inheritsLoose(_class3, _Graphic$Shape2);

  function _class3(size, style) {
    var _this2;

    if (size === void 0) {
      size = Graphic.DEFAULTSIZE;
    }

    if (style === void 0) {
      style = {};
    }

    _this2 = _Graphic$Shape2.call(this) || this;
    _this2.width = size * 0.5;
    _this2.height = _this2.width;
    _this2.style = _adUtils.ObjectUtils.defaults(style, Graphic.DEFAULTSTYLE);
    return _this2;
  }

  var _proto3 = _class3.prototype;

  _proto3.draw = function draw(ctx, style, w) {
    ctx.arc(style.x + w * 0.5, style.y + w * 0.5, w, 0, Math.PI * 2);
  };

  return _class3;
}(Graphic.Shape);
/**
	@class Graphic.Rect
	@param {number} width
		width of the rectangle
	@param {number} height
		height of the rectangle
	@param {object} style
		Default to {@link Graphic.DEFAULTSTYLE}
	@desc
		A class for rendering rectangles on canvas.

*/


Graphic.Rect =
/*#__PURE__*/
function (_Graphic$Shape3) {
  _inheritsLoose(_class4, _Graphic$Shape3);

  function _class4(width, height, style) {
    var _this3;

    if (width === void 0) {
      width = Graphic.DEFAULTSIZ;
    }

    if (height === void 0) {
      height = Graphic.DEFAULTSIZ;
    }

    if (style === void 0) {
      style = {};
    }

    _this3 = _Graphic$Shape3.call(this) || this;
    _this3.width = width;
    _this3.height = height;
    _this3.style = _adUtils.ObjectUtils.defaults(style, Graphic.DEFAULTSTYLE);
    return _this3;
  }

  var _proto4 = _class4.prototype;

  _proto4.draw = function draw(ctx, style, w, h) {
    ctx.rect(style.x, style.y, w, h);
  };

  return _class4;
}(Graphic.Shape);
/**
	@class Graphic.Sprite
	@param {Image} image
		image of the sprite sheet
	@param {number} size
		display width of per frame
	@param {object} style
		Default to {@link Graphic.DEFAULTSTYLE}
	@param {object} spriteSetting
		Object with the following properties:

		@property {number} frameWidth
			width of per frame 

		@property {number} frameHeight
			height of per frame

		@property {number} frameNumber
			number of total frames

		@property {number} speed
			the speed of the animation

		@property {boolean} loop

	@desc
		A class for rendering spritesheet animation on canvas.

*/


Graphic.Sprite =
/*#__PURE__*/
function (_Graphic$Shape4) {
  _inheritsLoose(_class5, _Graphic$Shape4);

  function _class5(image, size, style, spriteSetting) {
    var _this4;

    if (style === void 0) {
      style = {};
    }

    _this4 = _Graphic$Shape4.call(this) || this;
    _this4.hasPath = false;
    _this4.setting = spriteSetting;
    _this4.image = image;
    _this4.oriWidth = image.width;
    _this4.oriHeight = image.height;
    _this4.width = size || _this4.oriWidth;
    _this4.height = _this4.width * (_this4.setting.frameWidth / _this4.setting.frameHeight);
    _this4.style = _adUtils.ObjectUtils.defaults(style, Graphic.DEFAULTSTYLE);
    _this4.frameLen = ~~(1 / _this4.setting.speed);
    _this4.colNumber = _this4.oriWidth / _this4.setting.frameWidth;
    return _this4;
  }

  var _proto5 = _class5.prototype;

  _proto5.draw = function draw(ctx, style, w, h, frameCount) {
    var frameIndex = ~~(frameCount / this.frameLen);

    if (this.setting.loop) {
      frameIndex = frameIndex % this.setting.frameNumber;
    } else {
      var fn = this.setting.frameNumber - 1;
      frameIndex = frameIndex > fn ? fn : frameIndex;
    }

    var fw = this.setting.frameWidth;
    var fh = this.setting.frameHeight;
    var ratio = w / fw;
    var sx = frameIndex * this.setting.frameWidth % this.oriWidth;
    var sy = ~~(frameIndex / this.colNumber) * this.setting.frameHeight;
    ctx.drawImage(this.image, sx, sy, fw, fh, style.x, style.y, fw * ratio, fh * ratio);
  };

  return _class5;
}(Graphic.Shape);

var _default = Graphic;
exports.default = _default;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Root reference for iframes.
 */

var root;
if (typeof window !== 'undefined') { // Browser window
  root = window;
} else if (typeof self !== 'undefined') { // Web Worker
  root = self;
} else { // Other environments
  console.warn("Using browser-only version of superagent in non-browser environment");
  root = this;
}

var Emitter = __webpack_require__(38);
var RequestBase = __webpack_require__(39);
var isObject = __webpack_require__(23);
var ResponseBase = __webpack_require__(40);
var Agent = __webpack_require__(42);

/**
 * Noop.
 */

function noop(){};

/**
 * Expose `request`.
 */

var request = exports = module.exports = function(method, url) {
  // callback
  if ('function' == typeof url) {
    return new exports.Request('GET', method).end(url);
  }

  // url first
  if (1 == arguments.length) {
    return new exports.Request('GET', method);
  }

  return new exports.Request(method, url);
}

exports.Request = Request;

/**
 * Determine XHR.
 */

request.getXHR = function () {
  if (root.XMLHttpRequest
      && (!root.location || 'file:' != root.location.protocol
          || !root.ActiveXObject)) {
    return new XMLHttpRequest;
  } else {
    try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}
  }
  throw Error("Browser-only version of superagent could not find XHR");
};

/**
 * Removes leading and trailing whitespace, added to support IE.
 *
 * @param {String} s
 * @return {String}
 * @api private
 */

var trim = ''.trim
  ? function(s) { return s.trim(); }
  : function(s) { return s.replace(/(^\s*|\s*$)/g, ''); };

/**
 * Serialize the given `obj`.
 *
 * @param {Object} obj
 * @return {String}
 * @api private
 */

function serialize(obj) {
  if (!isObject(obj)) return obj;
  var pairs = [];
  for (var key in obj) {
    pushEncodedKeyValuePair(pairs, key, obj[key]);
  }
  return pairs.join('&');
}

/**
 * Helps 'serialize' with serializing arrays.
 * Mutates the pairs array.
 *
 * @param {Array} pairs
 * @param {String} key
 * @param {Mixed} val
 */

function pushEncodedKeyValuePair(pairs, key, val) {
  if (val != null) {
    if (Array.isArray(val)) {
      val.forEach(function(v) {
        pushEncodedKeyValuePair(pairs, key, v);
      });
    } else if (isObject(val)) {
      for(var subkey in val) {
        pushEncodedKeyValuePair(pairs, key + '[' + subkey + ']', val[subkey]);
      }
    } else {
      pairs.push(encodeURIComponent(key)
        + '=' + encodeURIComponent(val));
    }
  } else if (val === null) {
    pairs.push(encodeURIComponent(key));
  }
}

/**
 * Expose serialization method.
 */

request.serializeObject = serialize;

/**
  * Parse the given x-www-form-urlencoded `str`.
  *
  * @param {String} str
  * @return {Object}
  * @api private
  */

function parseString(str) {
  var obj = {};
  var pairs = str.split('&');
  var pair;
  var pos;

  for (var i = 0, len = pairs.length; i < len; ++i) {
    pair = pairs[i];
    pos = pair.indexOf('=');
    if (pos == -1) {
      obj[decodeURIComponent(pair)] = '';
    } else {
      obj[decodeURIComponent(pair.slice(0, pos))] =
        decodeURIComponent(pair.slice(pos + 1));
    }
  }

  return obj;
}

/**
 * Expose parser.
 */

request.parseString = parseString;

/**
 * Default MIME type map.
 *
 *     superagent.types.xml = 'application/xml';
 *
 */

request.types = {
  html: 'text/html',
  json: 'application/json',
  xml: 'text/xml',
  urlencoded: 'application/x-www-form-urlencoded',
  'form': 'application/x-www-form-urlencoded',
  'form-data': 'application/x-www-form-urlencoded'
};

/**
 * Default serialization map.
 *
 *     superagent.serialize['application/xml'] = function(obj){
 *       return 'generated xml here';
 *     };
 *
 */

request.serialize = {
  'application/x-www-form-urlencoded': serialize,
  'application/json': JSON.stringify,
};

/**
  * Default parsers.
  *
  *     superagent.parse['application/xml'] = function(str){
  *       return { object parsed from str };
  *     };
  *
  */

request.parse = {
  'application/x-www-form-urlencoded': parseString,
  'application/json': JSON.parse,
};

/**
 * Parse the given header `str` into
 * an object containing the mapped fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parseHeader(str) {
  var lines = str.split(/\r?\n/);
  var fields = {};
  var index;
  var line;
  var field;
  var val;

  for (var i = 0, len = lines.length; i < len; ++i) {
    line = lines[i];
    index = line.indexOf(':');
    if (index === -1) { // could be empty line, just skip it
      continue;
    }
    field = line.slice(0, index).toLowerCase();
    val = trim(line.slice(index + 1));
    fields[field] = val;
  }

  return fields;
}

/**
 * Check if `mime` is json or has +json structured syntax suffix.
 *
 * @param {String} mime
 * @return {Boolean}
 * @api private
 */

function isJSON(mime) {
  // should match /json or +json
  // but not /json-seq
  return /[\/+]json($|[^-\w])/.test(mime);
}

/**
 * Initialize a new `Response` with the given `xhr`.
 *
 *  - set flags (.ok, .error, etc)
 *  - parse header
 *
 * Examples:
 *
 *  Aliasing `superagent` as `request` is nice:
 *
 *      request = superagent;
 *
 *  We can use the promise-like API, or pass callbacks:
 *
 *      request.get('/').end(function(res){});
 *      request.get('/', function(res){});
 *
 *  Sending data can be chained:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' })
 *        .end(function(res){});
 *
 *  Or passed to `.send()`:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' }, function(res){});
 *
 *  Or passed to `.post()`:
 *
 *      request
 *        .post('/user', { name: 'tj' })
 *        .end(function(res){});
 *
 * Or further reduced to a single call for simple cases:
 *
 *      request
 *        .post('/user', { name: 'tj' }, function(res){});
 *
 * @param {XMLHTTPRequest} xhr
 * @param {Object} options
 * @api private
 */

function Response(req) {
  this.req = req;
  this.xhr = this.req.xhr;
  // responseText is accessible only if responseType is '' or 'text' and on older browsers
  this.text = ((this.req.method !='HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text')) || typeof this.xhr.responseType === 'undefined')
     ? this.xhr.responseText
     : null;
  this.statusText = this.req.xhr.statusText;
  var status = this.xhr.status;
  // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
  if (status === 1223) {
    status = 204;
  }
  this._setStatusProperties(status);
  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
  // getResponseHeader still works. so we get content-type even if getting
  // other headers fails.
  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
  this._setHeaderProperties(this.header);

  if (null === this.text && req._responseType) {
    this.body = this.xhr.response;
  } else {
    this.body = this.req.method != 'HEAD'
      ? this._parseBody(this.text ? this.text : this.xhr.response)
      : null;
  }
}

ResponseBase(Response.prototype);

/**
 * Parse the given body `str`.
 *
 * Used for auto-parsing of bodies. Parsers
 * are defined on the `superagent.parse` object.
 *
 * @param {String} str
 * @return {Mixed}
 * @api private
 */

Response.prototype._parseBody = function(str) {
  var parse = request.parse[this.type];
  if (this.req._parser) {
    return this.req._parser(this, str);
  }
  if (!parse && isJSON(this.type)) {
    parse = request.parse['application/json'];
  }
  return parse && str && (str.length || str instanceof Object)
    ? parse(str)
    : null;
};

/**
 * Return an `Error` representative of this response.
 *
 * @return {Error}
 * @api public
 */

Response.prototype.toError = function(){
  var req = this.req;
  var method = req.method;
  var url = req.url;

  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
  var err = new Error(msg);
  err.status = this.status;
  err.method = method;
  err.url = url;

  return err;
};

/**
 * Expose `Response`.
 */

request.Response = Response;

/**
 * Initialize a new `Request` with the given `method` and `url`.
 *
 * @param {String} method
 * @param {String} url
 * @api public
 */

function Request(method, url) {
  var self = this;
  this._query = this._query || [];
  this.method = method;
  this.url = url;
  this.header = {}; // preserves header name case
  this._header = {}; // coerces header names to lowercase
  this.on('end', function(){
    var err = null;
    var res = null;

    try {
      res = new Response(self);
    } catch(e) {
      err = new Error('Parser is unable to parse the response');
      err.parse = true;
      err.original = e;
      // issue #675: return the raw response if the response parsing fails
      if (self.xhr) {
        // ie9 doesn't have 'response' property
        err.rawResponse = typeof self.xhr.responseType == 'undefined' ? self.xhr.responseText : self.xhr.response;
        // issue #876: return the http status code if the response parsing fails
        err.status = self.xhr.status ? self.xhr.status : null;
        err.statusCode = err.status; // backwards-compat only
      } else {
        err.rawResponse = null;
        err.status = null;
      }

      return self.callback(err);
    }

    self.emit('response', res);

    var new_err;
    try {
      if (!self._isResponseOK(res)) {
        new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
      }
    } catch(custom_err) {
      new_err = custom_err; // ok() callback can throw
    }

    // #1000 don't catch errors from the callback to avoid double calling it
    if (new_err) {
      new_err.original = err;
      new_err.response = res;
      new_err.status = res.status;
      self.callback(new_err, res);
    } else {
      self.callback(null, res);
    }
  });
}

/**
 * Mixin `Emitter` and `RequestBase`.
 */

Emitter(Request.prototype);
RequestBase(Request.prototype);

/**
 * Set Content-Type to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.xml = 'application/xml';
 *
 *      request.post('/')
 *        .type('xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 *      request.post('/')
 *        .type('application/xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 * @param {String} type
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.type = function(type){
  this.set('Content-Type', request.types[type] || type);
  return this;
};

/**
 * Set Accept to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.json = 'application/json';
 *
 *      request.get('/agent')
 *        .accept('json')
 *        .end(callback);
 *
 *      request.get('/agent')
 *        .accept('application/json')
 *        .end(callback);
 *
 * @param {String} accept
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.accept = function(type){
  this.set('Accept', request.types[type] || type);
  return this;
};

/**
 * Set Authorization field value with `user` and `pass`.
 *
 * @param {String} user
 * @param {String} [pass] optional in case of using 'bearer' as type
 * @param {Object} options with 'type' property 'auto', 'basic' or 'bearer' (default 'basic')
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.auth = function(user, pass, options){
  if (1 === arguments.length) pass = '';
  if (typeof pass === 'object' && pass !== null) { // pass is optional and can be replaced with options
    options = pass;
    pass = '';
  }
  if (!options) {
    options = {
      type: 'function' === typeof btoa ? 'basic' : 'auto',
    };
  }

  var encoder = function(string) {
    if ('function' === typeof btoa) {
      return btoa(string);
    }
    throw new Error('Cannot use basic auth, btoa is not a function');
  };

  return this._auth(user, pass, options, encoder);
};

/**
 * Add query-string `val`.
 *
 * Examples:
 *
 *   request.get('/shoes')
 *     .query('size=10')
 *     .query({ color: 'blue' })
 *
 * @param {Object|String} val
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.query = function(val){
  if ('string' != typeof val) val = serialize(val);
  if (val) this._query.push(val);
  return this;
};

/**
 * Queue the given `file` as an attachment to the specified `field`,
 * with optional `options` (or filename).
 *
 * ``` js
 * request.post('/upload')
 *   .attach('content', new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
 *   .end(callback);
 * ```
 *
 * @param {String} field
 * @param {Blob|File} file
 * @param {String|Object} options
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.attach = function(field, file, options){
  if (file) {
    if (this._data) {
      throw Error("superagent can't mix .send() and .attach()");
    }

    this._getFormData().append(field, file, options || file.name);
  }
  return this;
};

Request.prototype._getFormData = function(){
  if (!this._formData) {
    this._formData = new root.FormData();
  }
  return this._formData;
};

/**
 * Invoke the callback with `err` and `res`
 * and handle arity check.
 *
 * @param {Error} err
 * @param {Response} res
 * @api private
 */

Request.prototype.callback = function(err, res){
  if (this._shouldRetry(err, res)) {
    return this._retry();
  }

  var fn = this._callback;
  this.clearTimeout();

  if (err) {
    if (this._maxRetries) err.retries = this._retries - 1;
    this.emit('error', err);
  }

  fn(err, res);
};

/**
 * Invoke callback with x-domain error.
 *
 * @api private
 */

Request.prototype.crossDomainError = function(){
  var err = new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
  err.crossDomain = true;

  err.status = this.status;
  err.method = this.method;
  err.url = this.url;

  this.callback(err);
};

// This only warns, because the request is still likely to work
Request.prototype.buffer = Request.prototype.ca = Request.prototype.agent = function(){
  console.warn("This is not supported in browser version of superagent");
  return this;
};

// This throws, because it can't send/receive data as expected
Request.prototype.pipe = Request.prototype.write = function(){
  throw Error("Streaming is not supported in browser version of superagent");
};

/**
 * Check if `obj` is a host object,
 * we don't want to serialize these :)
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */
Request.prototype._isHost = function _isHost(obj) {
  // Native objects stringify to [object File], [object Blob], [object FormData], etc.
  return obj && 'object' === typeof obj && !Array.isArray(obj) && Object.prototype.toString.call(obj) !== '[object Object]';
}

/**
 * Initiate request, invoking callback `fn(res)`
 * with an instanceof `Response`.
 *
 * @param {Function} fn
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.end = function(fn){
  if (this._endCalled) {
    console.warn("Warning: .end() was called twice. This is not supported in superagent");
  }
  this._endCalled = true;

  // store callback
  this._callback = fn || noop;

  // querystring
  this._finalizeQueryString();

  return this._end();
};

Request.prototype._end = function() {
  var self = this;
  var xhr = (this.xhr = request.getXHR());
  var data = this._formData || this._data;

  this._setTimeouts();

  // state change
  xhr.onreadystatechange = function(){
    var readyState = xhr.readyState;
    if (readyState >= 2 && self._responseTimeoutTimer) {
      clearTimeout(self._responseTimeoutTimer);
    }
    if (4 != readyState) {
      return;
    }

    // In IE9, reads to any property (e.g. status) off of an aborted XHR will
    // result in the error "Could not complete the operation due to error c00c023f"
    var status;
    try { status = xhr.status } catch(e) { status = 0; }

    if (!status) {
      if (self.timedout || self._aborted) return;
      return self.crossDomainError();
    }
    self.emit('end');
  };

  // progress
  var handleProgress = function(direction, e) {
    if (e.total > 0) {
      e.percent = e.loaded / e.total * 100;
    }
    e.direction = direction;
    self.emit('progress', e);
  };
  if (this.hasListeners('progress')) {
    try {
      xhr.onprogress = handleProgress.bind(null, 'download');
      if (xhr.upload) {
        xhr.upload.onprogress = handleProgress.bind(null, 'upload');
      }
    } catch(e) {
      // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
      // Reported here:
      // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
    }
  }

  // initiate request
  try {
    if (this.username && this.password) {
      xhr.open(this.method, this.url, true, this.username, this.password);
    } else {
      xhr.open(this.method, this.url, true);
    }
  } catch (err) {
    // see #1149
    return this.callback(err);
  }

  // CORS
  if (this._withCredentials) xhr.withCredentials = true;

  // body
  if (!this._formData && 'GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !this._isHost(data)) {
    // serialize stuff
    var contentType = this._header['content-type'];
    var serialize = this._serializer || request.serialize[contentType ? contentType.split(';')[0] : ''];
    if (!serialize && isJSON(contentType)) {
      serialize = request.serialize['application/json'];
    }
    if (serialize) data = serialize(data);
  }

  // set header fields
  for (var field in this.header) {
    if (null == this.header[field]) continue;

    if (this.header.hasOwnProperty(field))
      xhr.setRequestHeader(field, this.header[field]);
  }

  if (this._responseType) {
    xhr.responseType = this._responseType;
  }

  // send stuff
  this.emit('request', this);

  // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
  // We need null here if data is undefined
  xhr.send(typeof data !== 'undefined' ? data : null);
  return this;
};

request.agent = function() {
  return new Agent();
};

["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"].forEach(function(method) {
  Agent.prototype[method.toLowerCase()] = function(url, fn) {
    var req = new request.Request(method, url);
    this._setDefaults(req);
    if (fn) {
      req.end(fn);
    }
    return req;
  };
});

Agent.prototype.del = Agent.prototype['delete'];

/**
 * GET `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.get = function(url, data, fn) {
  var req = request('GET', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * HEAD `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.head = function(url, data, fn) {
  var req = request('HEAD', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * OPTIONS query to `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.options = function(url, data, fn) {
  var req = request('OPTIONS', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * DELETE `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

function del(url, data, fn) {
  var req = request('DELETE', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
}

request['del'] = del;
request['delete'] = del;

/**
 * PATCH `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.patch = function(url, data, fn) {
  var req = request('PATCH', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * POST `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.post = function(url, data, fn) {
  var req = request('POST', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * PUT `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.put = function(url, data, fn) {
  var req = request('PUT', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if `obj` is an object.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isObject(obj) {
  return null !== obj && 'object' === typeof obj;
}

module.exports = isObject;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _adExternal = __webpack_require__(17);

var _adGeom = __webpack_require__(2);

/**
	@class CssManager
	@desc
		<a href="https://github.com/ff0000-ad-tech/ad-control">Github repo</a>
		<br><br>
		
		This is a css-interface class, which is intended to proxy all css applications. The goal is to accept css in any format( see below ), 
		standardize the keys, conform the values, and rapidly apply the style to the target, specific to the {@link Device} running the ad.<br><br> 

		Generally, you should not need to use this class directly. {@link Styles.setCss} will handle it for you.<br><br>

		However, if your css is not being correctly managed, the first step in debugging is to use {@link CssManager.setDebugFilter}. Pass the id, 
		as a string, of the misbehaving element to see the exact format of the css being applied to it. You can then locate the problem style, try 
		applying it in the browser inspector. Using this approach you should be able to determine what the correction/exception needs to be.<br><br>

		Additional debugging output can be switched on using {@link CssManager.setDebugLevel}. Pass a level( 0 is off, 1 is less, 2 is more ). There will be 
		a lot of output, but it is organized and consistent. You should be able to see exactly what is happening to your declarations. <br><br>

		<b>Types:</b><br>
		<table>
			<tr><td>CssObject</td>	<td>the literal "css" object that is passed to {@link Markup} as containerData.css on the creation of the element</td></tr>
			<tr><td>CssStyleString</td>	<td>a literal string of any number of css styles, passed to {@link Markup} as containerData.styles on the creation of the element</td></tr>
			<tr><td>CssDeclaration</td>	<td>either an object like "{ position: 'absolute' }" or a string like "background-color: #ff0000;"</td></tr>

			<tr><td>CssKey</td>	<td>ex: in "position: absolute;" the css-key would be "position"</td></tr>
			<tr><td>CssValue</td>	<td>ex: in "position: absolute;" the css-value would be "absolute"</td></tr>
			<tr><td>CssList</td>	<td>a standardized list of objects with Device-specific keys and corresponding values</td></tr>
		</table>
		<br>

		<b>Formats:</b><br>
		<table>
			<tr><td>Hyphen</td>	<td>ex: 'border-left', '-webkit-clip-path', '-moz-filter'</td></tr>
			<tr><td>Camel</td>	<td>ex: 'borderLeft', 'webkitClipPath', 'moxFilter'</td></tr>
			<tr><td>Alt</td>	<td>this is to handle arbitrary exceptions, like the "bgImage" key on container-data css objects</td></tr>
		</table>
		<br>

		<b>Key Prefixes:</b><br>
		<table>
			<tr><td>Browser</td>	<td>ex: "-webkit-clip-path" or "webkitClipPath"</td></tr>
			<tr><td>Standard</td>	<td>ex: "clip-path" or "clipPath"</td></tr>
		</table>
*/
var CssManager = function CssManager() {};

Object.defineProperty(CssManager, "debug_level1", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: false
});
Object.defineProperty(CssManager, "debug_level2", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: false
});
Object.defineProperty(CssManager, "filter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: undefined
});
Object.defineProperty(CssManager, "debug_element", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: undefined
});
Object.defineProperty(CssManager, "debug_css_list", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: undefined
});
Object.defineProperty(CssManager, "init", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value() {
    console.log('CssManager.init()');
    this.generateBrowserKeyDictionary();
  }
});
Object.defineProperty(CssManager, "setDebugLevel", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value(level) {
    var C = this;

    switch (parseInt(level)) {
      case 1:
        C.debug_level1 = true;
        C.debug_level2 = false;
        break;

      case 2:
        C.debug_level1 = true;
        C.debug_level2 = true;
        break;

      default:
        C.debug_level1 = false;
        C.debug_level2 = false;
        break;
    }
  }
});
Object.defineProperty(CssManager, "setDebugFilter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value(filter) {
    var C = this;
    console.log('CssManager.setDebugFilter(),', filter);
    C.filter = filter;
    C.debug_level1 = true;
  }
});
Object.defineProperty(CssManager, "ifDebug", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value(debugLevel) {
    var C = this;
    if (!C.filter) return C[debugLevel];else if (C.passDebugFilter() && C[debugLevel]) return true;
  }
});
Object.defineProperty(CssManager, "passDebugFilter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value() {
    var C = this;
    if (C.debug_element) if (C.debug_element.id.indexOf(C.filter) > -1) return true;
    if (C.debug_css_list) for (var i in C.debug_css_list) {
      if (i.indexOf(C.filter) > -1) return true;else if (String(C.debug_css_list[i]).indexOf(C.filter) > -1) return true;
    }
    return false;
  }
});
Object.defineProperty(CssManager, "generateBrowserKeyDictionary", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value() {
    var C = this;
    console.log('CssManager.generateBrowserKeyDictionary()');
    C.deviceKeyDict = {};
    var styles = document.createElement('div').style;

    for (var key in styles) {
      // get prefix
      var prefix = C.getPrefix(key); // key without prefix

      var standardKey = C.standardizeKey(key); //console.log( 'Device.element.style:', key );
      //console.log( ' - standard key:', standardKey );
      // handle exceptions per browser

      switch (_adExternal.Device.browser) {
        case 'safari':
          // use "webkit" prefix, if that's what was returned
          if (prefix == 'webkit') {
            C.deviceKeyDict[standardKey] = C.prependPrefix('webkit', standardKey);
          } else {
            // standard
            // exclude keys that have a "webkit"-equivalent
            if (!(C.prependPrefix('webkit', standardKey) in styles)) {
              C.deviceKeyDict[standardKey] = standardKey;
            }
          }

          break;

        case 'firefox':
          var mozKey = C.prependPrefix('Moz', standardKey);
          var webkitKey = C.prependPrefix('Webkit', standardKey); // use the no-prefix version, if it exists

          if (standardKey in styles) {
            C.deviceKeyDict[standardKey] = standardKey;
          } else if (prefix == 'moz') {
            // use "Moz" if a "webkit"-equivalent exists
            if (C.camelateKey('webkit-' + standardKey) in styles) {
              C.deviceKeyDict[standardKey] = mozKey;
            }
          } else if (prefix == 'webkit') {
            // note: in FF, there seem to be equivalents for all "webkit" vs. "Webkit" properites, so we use "Webkit" to match "Moz" convention....yah, nevermind.
            // use "webkit" if no "Moz"-equivalent exists
            if (!(mozKey in styles)) {
              C.deviceKeyDict[standardKey] = webkitKey;
            }
          }

          break;

        case 'chrome':
        case 'ie':
        default:
          // use the no-prefix version, if it exists
          if (standardKey in styles) {
            C.deviceKeyDict[standardKey] = standardKey;
          } else if (prefix) {
            // otherwise it's a "prefix"-only type of property
            C.deviceKeyDict[standardKey] = C.prependPrefix(prefix, standardKey);
          }

          break;
      }
    }

    console.log(' KEY DICTIONARY:', C.deviceKeyDict);
  }
});
Object.defineProperty(CssManager, "apply", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value(element, cssList) {
    var C = this;
    C.debug_element = element;
    C.debug_css_list = cssList;
    if (C.ifDebug('debug_level1')) console.log('  CssManager.apply()', element.id); // creates a collection of only the transforms

    var transformList = {};

    for (var key in cssList) {
      // has a non-destructive transform update, as generated by keyFormatExceptions()
      if (key.match(/^transform\(/)) transformList[key] = cssList[key];else {
        // standard css-key
        if (C.ifDebug('debug_level1')) console.log('   ' + key + ': ' + cssList[key] + ';');
        element.style[C.getDeviceKey(key)] = cssList[key];
      }
    } // will apply all transforms at once for correct calculation


    C.applyTransforms(element, transformList);
    if (C.ifDebug('debug_level1')) console.log('\n\n');
    C.debug_element = null;
    C.debug_css_list = null;
  }
});
Object.defineProperty(CssManager, "conformCssObject", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value(cssObject, debugElement) {
    var C = this;
    C.debug_element = debugElement;
    if (C.ifDebug('debug_level1')) console.log('CssManager.conformCssObject()', cssObject);
    var cssList = {};

    if (cssObject) {
      for (var key in cssObject) {
        if (C.ifDebug('debug_level2')) console.log('  PARSE( key: ' + key + ', value: ' + cssObject[key] + ' )');
        var declarations = C.conformKeyValue(key, cssObject[key]);

        for (var i in declarations) {
          if (C.ifDebug('debug_level2')) console.log('    CONFORMED DECLARATION:', declarations[i]);
          cssList[declarations[i][0]] = declarations[i][1];
        }
      }
    }

    C.debug_element = null;
    return cssList;
  }
});
Object.defineProperty(CssManager, "conformCssString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value(cssString, debugElement) {
    var C = this;
    C.debug_element = debugElement;
    if (C.ifDebug('debug_level1')) console.log(' CssManager.conformCssString()');
    var cssList = {};

    if (cssString) {
      var declarations = cssString.split(/\s*;\s*/);

      for (var key in declarations) {
        if (declarations[key]) {
          var declarationParts = declarations[key].split(/:(.+)?/);
          if (C.ifDebug('debug_level2')) console.log('  PARSE( key: ' + declarationParts[0] + ', value: ' + declarationParts[1] + ' )');
          var conformedDeclarations = C.conformKeyValue(declarationParts[0], declarationParts[1]);

          for (var i in conformedDeclarations) {
            if (C.ifDebug('debug_level2')) console.log('    CONFORMED DECLARATION:', conformedDeclarations[i]);
            cssList[conformedDeclarations[i][0]] = conformedDeclarations[i][1];
          }
        }
      }
    }

    C.debug_element = null;
    return cssList;
  }
});
Object.defineProperty(CssManager, "conformCssKeyValue", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value(key, _value) {
    var C = this;
    if (C.ifDebug('debug_level1')) console.log(' CssManager.conformCssKeyValue()');
    var cssObject = {};
    cssObject[key] = _value;
    return C.conformCssObject(cssObject);
  }
});
Object.defineProperty(CssManager, "applyTransforms", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value(element, _value2) {
    var C = this;
    if (C.ifDebug('debug_level1')) console.log('    - CssManager.applyTransforms(), ', _value2);
    var matrix2D = new _adGeom.Matrix2D(); // existing transform

    var existingTransform = element.style[C.getDeviceKey('transform')];
    var matrixMatch = existingTransform.match(/matrix[^\)]+\)/);

    if (matrixMatch) {
      matrix2D.setFromCss(matrixMatch[0]);
      if (C.ifDebug('debug_level2')) console.log('       existing matrix:', matrix2D.data);
    }

    if ('transforms' in element) var transforms = element.transforms;else {
      var transforms = {
        tx: 0,
        ty: 0,
        rz: 0,
        sx: 1,
        sy: 1
      };
    }
    var changed = {};

    for (var key in _value2) {
      var transformMethod = key.match(/\(\s([^\s]+)/)[1];
      changed[transformMethod] = _value2[key];
    } // Order matters: rotate, scale, translate
    // first translate the x and y back to zero


    if (changed.tx != undefined) {
      matrix2D.data[2] = 0;
    }

    if (changed.ty != undefined) {
      matrix2D.data[5] = 0;
    }

    if (changed.rz != undefined) {
      var reverse = -transforms.rz;
      matrix2D.rotate(reverse * (Math.PI / 180));
      matrix2D.rotate(changed.rz * (Math.PI / 180));
      transforms.rz = changed.rz;
    }

    if (changed.sx != undefined) {
      var reverse = 1 / transforms.sx;
      matrix2D.scale(reverse, 1);
      matrix2D.scale(changed.sx, 1);
      transforms.sx = changed.sx;
    }

    if (changed.sy != undefined) {
      var reverse = 1 / transforms.sy;
      matrix2D.scale(1, reverse);
      matrix2D.scale(1, changed.sy);
      transforms.sy = changed.sy;
    }

    if (changed.tx != undefined) {
      matrix2D.translate(changed.tx, 0);
      transforms.tx = changed.tx;
    }

    if (changed.ty != undefined) {
      matrix2D.translate(0, changed.ty);
      transforms.ty = changed.ty;
    } // store transforms


    element.transforms = transforms;
    if (C.ifDebug('debug_level2')) console.log('       updated matrix:', matrix2D.data); // apply css matrix

    element.style[C.getDeviceKey('transform')] = matrix2D.getCss();
  }
});
Object.defineProperty(CssManager, "conformKeyValue", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value(key, _value3) {
    var C = this;
    key = String(key).trim();
    _value3 = String(_value3).trim();
    var keyAsStandard = C.standardizeKey(key);
    return C.conformValue(keyAsStandard, _value3);
  }
});
Object.defineProperty(CssManager, "hasPrefix", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value(key) {
    var C = this;
    return key.search(C.matchPrefixRegex()) > -1;
  }
});
Object.defineProperty(CssManager, "getPrefix", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value(key) {
    var C = this;
    var match = key.match(C.matchPrefixRegex());
    return match ? match[1].replace(/-/g, '').toLowerCase() : null;
  }
});
Object.defineProperty(CssManager, "stripPrefix", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value(key) {
    var C = this;
    var keyless = key.replace(C.matchPrefixRegex(), '');
    return keyless.charAt(0).toLowerCase() + keyless.slice(1);
  }
});
Object.defineProperty(CssManager, "getDeviceKey", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value(key) {
    var C = this;
    return key in C.deviceKeyDict ? C.deviceKeyDict[key] : key;
  }
});
Object.defineProperty(CssManager, "prependPrefix", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value(prefix, key) {
    return prefix + key.replace(/^(.)/, function (str) {
      return str.charAt(0).toUpperCase();
    });
  }
});
Object.defineProperty(CssManager, "standardizeKey", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value(key) {
    var C = this;
    key = C.stripPrefix(key); // check if key is an exception

    if (key in C.keyFormatExceptions()) key = C.keyFormatExceptions()[key];else // or procedurally convert to camel
      key = C.camelateKey(key);
    if (C.ifDebug('debug_level2')) console.log('    - result: "' + key + '"');
    return key;
  }
});
Object.defineProperty(CssManager, "camelateKey", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value(key) {
    key = key.replace(/-(.)/g, function (str) {
      return str.charAt(1).toUpperCase();
    });
    return key;
  }
});
Object.defineProperty(CssManager, "keyFormatExceptions", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value() {
    return {
      x: 'transform( tx )',
      translateX: 'transform( tx )',
      y: 'transform( ty )',
      translateY: 'transform( ty )',
      rotate: 'transform( rz )',
      rotation: 'transform( rz )',
      scaleX: 'transform( sx )',
      scaleY: 'transform( sy )',
      scale: 'transform( sx ),transform( sy )'
    };
  }
});
Object.defineProperty(CssManager, "conformValue", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value(key, _value4) {
    var C = this;
    var conformedValues = [];
    var conformedValue; // look for numeric values

    var hasMultipleValues = _value4.match(/\s/);

    var numericValue = _value4.match(C.matchNumberRegex());

    if (!hasMultipleValues && numericValue) {
      if (C.ifDebug('debug_level2')) console.log('   conform value as number');
      conformedValue = Number(numericValue[0]);
      /* get existing unit */

      var unitMatch = _value4.match(/[^0-9\.]+$/);

      if (unitMatch) conformedValue += unitMatch[0];else
        /* assume default unit */
        switch (key) {
          case 'top':
          case 'right':
          case 'bottom':
          case 'left':
          case 'width':
          case 'height':
          case 'fontSize':
          case 'lineHeight':
          case 'padding':
          case 'margin':
          case 'marginRight':
          case 'marginLeft':
          case 'marginTop':
          case 'marginBottom':
          case 'borderRadius':
          case 'borderWidth':
          case 'letterSpacing':
            conformedValue += 'px';
            break;
        }
    } else if (key == 'backgroundImage') {
      // background images - allows for either a stand-alone URL, or proper css like 'url( "http://example.com/image.jpg" );'
      if (C.ifDebug('debug_level2')) console.log('   conform value as background image');
      _value4 = _value4.replace(/^url\(\s*['"]*/, '').replace(/['"]*\s*\)$/, '');
      conformedValue = 'url( "' + _value4 + '" )';
    } else if (key == 'transform') {
      // transform-functions - should be split apart so a single matrix function can be written
      //	faster to just specify the transform exactly via css-object keys: x, y, rotate, scaleX, scaleY
      // && Device.browser == 'ie') {
      if (C.ifDebug('debug_level2')) console.log('   convert "transform" functions to individual transforms');
      var functionRegex = /([a-z0-9]+)\(([^\)]+)\)/gi;

      while (params = functionRegex.exec(_value4)) {
        var args = params[2].replace(/\s/g, '').split(',').map(function (value, index, array) {
          return Number(value.match(C.matchNumberRegex())[0]);
        });

        switch (params[1]) {
          case 'translate':
            conformedValues.push(['transform( tx )', args[0]]);
            conformedValues.push(['transform( ty )', args[1]]);
            break;

          case 'translateX':
            conformedValues.push(['transform( tx )', args[0]]);
            break;

          case 'translateY':
            conformedValues.push(['transform( ty )', args[0]]);
            break;

          case 'rotate':
            conformedValues.push(['transform( rz )', args[0]]);
            break;

          case 'scale':
            conformedValues.push(['transform( sx )', args[0]]);
            conformedValues.push(['transform( sy )', args[1]]);
            break;

          case 'scaleX':
            conformedValues.push(['transform( sx )', args[0]]);
            break;

          case 'scaleY':
            conformedValues.push(['transform( sy )', args[0]]);
            break;
        }
      }
    } else {
      // pass through
      if (C.ifDebug('debug_level2')) console.log('   conform value as string');
      conformedValue = _value4;
    } // create style pair


    if (conformedValue != undefined) {
      if (C.ifDebug('debug_level2')) console.log('    - result: "' + conformedValue + '"'); // split the key will alyways have 1 value, except for scale which has to split to scaleX and scaleY

      var splitKeys = key.split(/\,/);

      for (var i = 0; i < splitKeys.length; i++) {
        conformedValues.push([splitKeys[i], conformedValue]);
      }
    }

    return conformedValues;
  }
});
Object.defineProperty(CssManager, "matchNumberRegex", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value() {
    return /^[+-]?[0-9]*\.?[0-9]+/;
  }
});
Object.defineProperty(CssManager, "matchPrefixRegex", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value() {
    return /^-*(moz-*|webkit-*|ms-*|o-)/i;
  }
});
var _default = CssManager;
exports.default = _default;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.LoaderTicker = void 0;

var Utils = _interopRequireWildcard(__webpack_require__(7));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var LoaderTicker = function LoaderTicker(superclass) {
  return (
    /*#__PURE__*/
    function (_superclass) {
      _inheritsLoose(_class, _superclass);

      function _class() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _superclass.call.apply(_superclass, [this].concat(args)) || this;
      }

      var _proto = _class.prototype;

      _proto._setTicker = function _setTicker(args) {
        var L = this;
        var node = document.createElement('div');
        node.innerHTML = args.content;
        node.style.cssText = args.css || '';
        document.body.appendChild(node);
        var width = args.width != undefined ? args.width : node.offsetWidth;
        node.style.fontFamily = args.font || '';

        var _timeOut = setTimeout(function () {
          clearInterval(_interval);

          L._handleFail();
        }, 5000);

        var _interval = setInterval(function () {
          if (node.offsetWidth != width) {
            clearTimeout(_timeOut);
            clearInterval(_interval);

            L._handleTickerComplete(node);
          }
        }, 10);
      };

      _proto._removeTickerNode = function _removeTickerNode(node) {
        node.parentNode.removeChild(node);
      };

      return _class;
    }(superclass)
  );
};

exports.LoaderTicker = LoaderTicker;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = _default;

var DateManager = _interopRequireWildcard(__webpack_require__(14));

var DateFormatter = _interopRequireWildcard(__webpack_require__(6));

var DateUtils = _interopRequireWildcard(__webpack_require__(13));

var _TzDate = _interopRequireDefault(__webpack_require__(5));

var _Timezone = _interopRequireDefault(__webpack_require__(9));

var _adUtils = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/**
	@class DateSchedule
	@desc
		<a href="https://github.com/ff0000-ad-tech/ad-dates">Github repo</a>
		<br><br>
		
		This class creates a schedule of dates that will be compared agains the currentdate/time. There are 2 ways to use 
		this class: standard and custom.
		
		<br><br>

		<b>AdData.js:</b><br>
		It is recommended that you centralize your schedule in AdData. This way, changes to the schedule can easily 
		be achieved with one common update.<br>

		<br><br>
		
		<b>Standard</b><br>
		This will create a schedule of dates leading up to the target date, which was formerly achieved by using		
		the selectMessageForDate() method.  This standard way will produce a schedule pre-populated with:
		
		<ul>
			<li>DATE - returns the target date, using the toSimpleDateTime() for anything further than a week out from the target</li>
			<li>WEEK - returns the day of the week the target date is, ie Wednesday</li>
			<li>TOMORROW - returns the word "Tomorrow", beginning at midnight the day before the target date</li>
			<li>TODAY - returns the string "Today", beginning at midnight on the target date</li>
			<li>TONIGHT - returns the string "Tonight", beginning at the time set with tonightStartsAt</li>
			<li>NOW - returns the string "Live Now"</li>
			<li>PAST - returns the string "Past", called after NOW plus the eventDuration value</li>
		</ul>

	@param {object} arg
		Settings are passed in via this object, see Properties for more info:

	@property {TzDate} target
		The date that the schedule will count down to
	@property {boolean} isStandard
		If true, will create a standard schedule with default messaging
	@property {number} eventDuration
		In a standard schedule, the amount of minutes after the target time the PAST messaging shows. Defaults to 120 which is 2 hours
	@property {string} tonightStartsAt
		In a standard schedule, when the today message changes to tonight. If the target time is before this value, tonight will never show. Defaults to '17:50' which is 5:30PM
	@property {boolean} hasOneDayOf
		In a standard schedule, will determine if only 'tonight' OR 'today' will show, or if it is possible to have both. For example, in ESPN units, the need is that 
		only one of the options will show at midnight day of the event. So if the event is before the tonightStartsAt value, it will only show 'today', while if it is after
		it will only show 'tonight'.  If this is set to false, it will allow for both following the logic of tonightStartsAt.  Defaults to true.
	@property {object} standardOverrides
		An object to overwrite any of the standard labels. Using the standard keys, apply a new label string or callback function passing in the target date
	
	
		<codeblock>
			// Standard Schedule
			this.schedule = new DateSchedule({
				target : new TzDate ({
					datetime : [ '2015-08-01 20:00:00', Timezone.EST ],
					outputTimezone : Timezone.LOCAL 
				}),
				isStandard : true
			});
			this.schedule.print();

			this.dateMessage = this.schedule.currentLabel;
			this.dateHour = this.schedule.target.toDateTime();
		</codeblock>

		Each standard label can be overridded by either assigning a different string or by passing in a callback function 
		that will return a differently formatted message. Note each callback gets fired at runtime, creating each label.
				
		<codeblock>
			this.schedule = new DateSchedule({
				target : new TzDate ({
					datetime : [ '2015-08-01 20:00:00', Timezone.EST ],
					outputTimezone : Timezone.LOCAL 
				}),
				eventDuration : 120,
				isStandard : true,
				standardOverrides : {
					DATE : function( date ){
						return date.toSimpleDate();
					},
					TOMORROW : 'Tommorow Night!',
					NOW : 'Watch Live Now'
				}
			});
			this.schedule.print();

			this.dateMessage = this.schedule.currentLabel;
			this.dateHour = this.schedule.target.toDateTime();
		</codeblock>

		<br><br>

		<b>Custom</b><br>
		This is used to set a specific list of dates to check now against, returning the latest.

		<codeblock>
			this.schedule = new DateSchedule();
			this.schedule.addDate( 
				new TzDate ({
					datetime : [ '2015-08-01 12:00:00', Timezone.EST ],
					outputTimezone : Timezone.LOCAL 
				}),
				"Hey I'm the first date"
			);
			this.schedule.addDate( 
				new TzDate ({
					datetime : [ '2015-08-05 14:00:00', Timezone.UTC ],
					outputTimezone : Timezone.PST 
				}),
				"I'm the last date"
			);
			this.schedule.print();
		</codeblock>

		The schedule can also be used to call different markup builds.  Use the third param of addDates() to pass in 
		a callback, then simply call it from Control.preMarkup() or where ever makes sense.

		<codeblock>
			this.schedule = new DateSchedule();
			this.schedule.addDate( 
				new TzDate ({
					datetime : [ '2015-08-01 12:00:00', Timezone.EST ],
					outputTimezone : Timezone.LOCAL 
				}),
				"Hey I'm the first date",
				View.buildFromDate0
			);
			this.schedule.addDate( 
				new TzDate ({
					datetime : [ '2015-08-05 14:00:00', Timezone.UTC ],
					outputTimezone : Timezone.PST 
				}),
				"I'm the last date",
				View.buildFromDate1
			);
			this.schedule.print();
		</codeblock>

		<b>build.js:</b><br>
		In <u>build.View</u>, you can write functions that build out the DOM for each of your states. 
		<codeblock>
			this.buildFromDate0 = function() {
				console.log( 'View.buildFromDate0()' );
				// Markup...
			}
			this.buildFromDate1 = function() {
				console.log( 'View.buildFromDate1()' );
				// Markup...
			}
		</codeblock>

		In <u>build.Control</u> or <u>build.buildMarkup</u>, you simply call the callback of the current date on the schedule.  This will
		find the current added date object and fire that callback
		<codeblock>
			var message = adData.schedule.current.callback();
			console.log( message );

			var myTextField = new UITextField({
				target : T,
				id : 'my-textfield',
				css : {
					width : 300,
					height : 90
				},
				fontSize : 30,
				fontFamily : 'template_font',
				format : TextFormat.INLINE,
				alignText : Align.CENTER,
				text : message.label
			});
		</codeblock>
*/
function _default(arg) {
  arg = arg || {};
  var D = this;
  var _dates = [];
  var _labelOverrides = {};

  var _targetDate;

  var _skipToday = false; // used by a recurring schedule to pass the callback to the standard schedule it creates

  var _callback = arg.callback || function () {};

  var _tonightStartsAt = arg.tonightStartsAt || '17:30';

  var _hasOneDayOf = arg.hasOneDayOf != false;

  var _eventDuration = arg.eventDuration || 120; // ---------------------------------------------------------------------------------------------------------------
  // GETTERS


  Object.defineProperties(D, {
    /**
    	@memberOf DateSchedule
    	@var {TzDate} target
    		Getter : The target date of a standard schedule
    	@example
    		mySchedule.target.print();
    */
    target: {
      get: function get() {
        return _targetDate;
      }
    },

    /**
    	@memberOf DateSchedule
    	@var {object} current
    		Getter : An object of the current date, label and optional callback
    	@example
    		mySchedule.current.date;
    		mySchedule.current.label;
    		mySchedule.current.callback();
    */
    current: {
      get: function get() {
        return _dates[D.currentIndex];
      }
    },

    /**
    	@memberOf DateSchedule
    	@var {TzDate} currentDate
    		Getter : Is direct access to the current date, same as mySchedule.current.date
    	@example
    		mySchedule.currentDate;
    */
    currentDate: {
      get: function get() {
        return D.current.date;
      }
    },

    /**
    	@memberOf DateSchedule
    	@var {String} currentLabel
    		Getter : Is direct access to the current label, same as mySchedule.current.label
    	@example
    		mySchedule.currentLabel;
    */
    currentLabel: {
      get: function get() {
        return D.current.label;
      }
    },

    /**
    	@memberOf DateSchedule
    	@var {Number} currentIndex
    		Getter : The index, zero based, of the current date
    	@example
    		mySchedule.currentIndex;
    */
    currentIndex: {
      get: function get() {
        var currentIndex = -1;

        for (var i = 0; i < _dates.length; i++) {
          if (!DateUtils.isPast(_dates[i].date)) {
            break;
          }

          currentIndex = i;
        }

        return currentIndex;
      }
    },
    next: {
      get: function get() {
        return _dates[D.nextIndex];
      }
    },
    nextDate: {
      get: function get() {
        return D.next.date;
      }
    },
    nextLabel: {
      get: function get() {
        return D.next.label;
      }
    },
    nextIndex: {
      get: function get() {
        return _adUtils.MathUtils.restrict(D.currentIndex + 1, 0, _dates.length - 1);
      }
    },

    /**
    	@memberOf DateSchedule
    	@var {Boolean} isLive
    		Getter : When using a standard schedule, whether or not the target date has been passed, but not passed the eventDuration
    	@example
    		mySchedule.isLive;
    */
    isLive: {
      get: function get() {
        var latest = D.current;
        return latest.standardKey == 'NOW';
      }
    },

    /**
    	@memberOf DateSchedule
    	@var {Boolean} isComplete
    		Getter : When using a standard schedule, whether or not the target date and eventDuration has been passed
    	@example
    		mySchedule.isComplete;
    */
    isComplete: {
      get: function get() {
        var latest = D.current;
        return latest.standardKey == 'PAST';
      }
    }
  }); // ---------------------------------------------------------------------------------------------------------------
  // PUBLIC METHODS

  /**
  	@memberof DateSchedule
  	@method addDate
  	@param {TzDate|Date|Object} tzDate
  		Expected to be either a Date object, a TzDate or an Object for creating a date from the target using DateFormatter.adjust() 
  	@param {String|function} label
  		Optionally specify a label as a  String or creeate a function to format the date using the TxDate methods
  	@param {function} callback
  		Optionally a function that can be called when this date is the current. Does NOT auto fire, must me called.
  	@desc
  		Add a date to the schedule, which can be either a TzDate or an object to create a date from the target
  	
  	@example
  		// start with a target date
  			var schedule = new DateSchedule({
  				target : new TzDate ({
  					datetime : [ '2017-08-01 08:00:00', Timezone.EST ],
  					outputTimezone : Timezone.LOCAL 
  				})
  			});
  				// add TzDate
  			schedule.addDate ( 
  				new TzDate ({
  					datetime : '2017-04-01T14:00:00+00:00',
  					outputTimezone : Timezone.EST
  				})
  			);
  				// creates a date 1 day before and 4 hours ahead of the target date
  			schedule.addDate ({ day:-1, hour:4 }); 
  				// uses a callback to get a custom date message
  			schedule.addDate ( 
  				new TzDate ({
  					datetime : '2017-06-01T22:00:00+00:00',
  					outputTimezone : Timezone.LOCAL
  				}),
  				function ( date ){
  					return date.toSimpleTime() + ' ' + date.toMeridiem() + '!!';
  				}
  			);
  				// add a message and a callback
  			schedule.addDate ( 
  				new TzDate ({
  					datetime : '2017-05-01T17:00:00+00:00',
  					outputTimezone : Timezone.PST
  				}),
  				'Custom Message',
  				function(){
  					console.log( 'i am the callback')
  				}
  			);
  				schedule.print();
  			// DateSchedule.print(), length: 7
  			//  - 0 Sat Jan 01 2000 00:00:00 UTC label: 1/1 12:00 am
  			//  - 1 Sat Apr 01 2017 10:00:00 US/Eastern label: undefined
  			//  - 2 Mon May 01 2017 10:00:00 US/Pacific label: Custom Message
  			//  - 3 Thu Jun 01 2017 15:00:00 Local label: 3:00 pm!!
  			//  - 4 Mon Jul 31 2017 09:00:00 Local label: undefined
  			//  - 5 Tue Aug 01 2017 05:00:00 Local label: Live Now
  			//  - 6 Tue Aug 01 2017 07:00:00 Local label: Past				
  		
  */

  D.addDate = function (tzDate, label, callback) {
    var standardKey = arguments[3];
    var dateUTC = tzDate;
    var skipDate = false;
    var makeClone = true;

    if (!tzDate._isTzDate) {
      // is an Object of adjusting values
      // take targetDate and add or subtract from there to create the date
      var clonedDate = _targetDate;

      switch (standardKey) {
        case 'PAST':
          makeClone = false;
          break;

        case 'TONIGHT':
          // construct a date with the tonightStartsAt value
          var reconstructedDate = _targetDate.toDateTimeISO().split('T')[0] + 'T';

          var timeSplit = _tonightStartsAt.split(':');

          for (var i = 0; i < 3; i++) {
            reconstructedDate += _adUtils.TextUtils.pad(timeSplit[i] || 0, 2) + ':';
          }

          reconstructedDate = reconstructedDate.slice(0, -1);
          clonedDate = new _TzDate.default({
            datetime: [reconstructedDate, _targetDate.outputTimezone]
          }); // check if the time is before the tonight starts at, if so, skip this label

          skipDate = clonedDate.getTime() > _targetDate.getTime(); // skip today if you do NOT skip tonight

          _skipToday = !skipDate; // override date with a zeroed out one if you skip today and want only one day of message

          makeClone = _hasOneDayOf && _skipToday;
          break;

        case 'TODAY':
          // check if tonight exists & if hasOneDayOf
          skipDate = _hasOneDayOf && _skipToday;
          break;
      }

      if (makeClone) {
        // copies the target date to display in the local time
        clonedDate = _targetDate.clone(_Timezone.default.LOCAL); // zeros out the dates based on timezone difference

        clonedDate.setHours.apply(clonedDate, _Timezone.default._tzDiff);
      }

      dateUTC = DateUtils.adjust(clonedDate, tzDate); //console.log( '\t >', dateUTC, clonedDate, tzDate )
    }

    if (standardKey) {
      var override = _labelOverrides[standardKey];

      if (override != undefined) {
        label = override;
      } else {
        if (typeof label === 'string') {
          label = DateFormatter.getLabels()[standardKey];
        }
      }
    }

    if (typeof label === 'function') {
      var dateToPass = standardKey && _targetDate ? _targetDate : dateUTC;
      label = label.call(D, dateToPass); //label = label.call ( D, dateUTC );
    }

    if (!skipDate) {
      _dates.push({
        date: dateUTC,
        label: label,
        standardKey: standardKey,
        callback: callback || function () {}
      });

      sortDates();
    }

    return dateUTC;
  };
  /**
  	@memberOf DateSchedule
  	@method print
  	@desc
  		Traces out all dates in order 
  	@example
  		// standard schedule
  			var schedule = new DateSchedule({
  			    target : new TzDate ({
  			        datetime : [ '2017-08-01 20:00:00', Timezone.EST ],
  			        outputTimezone : Timezone.LOCAL 
  			    }), 
  			    isStandard : true
  			});
  				schedule.print()
  			// DateSchedule.print(), length: 7
  			//  - 0 Sat Jan 01 2000 00:00:00 UTC label: 8/1 5:00 pm
  			//  - 1 Tue Jul 25 2017 17:00:00 Local label: Tuesday
  			//  - 2 Mon Jul 31 2017 00:00:00 Local label: Tomorrow
  			//  - 3 Tue Aug 01 2017 00:00:00 Local label: Today
  			//  - 4 Tue Aug 01 2017 10:30:00 Local label: Tonight
  			//  - 5 Tue Aug 01 2017 17:00:00 Local label: Live Now
  			//  - 6 Tue Aug 01 2017 19:00:00 Local label: Past
  		
  */


  D.print = function () {
    console.log('DateSchedule.print(), length:', _dates.length);

    for (var i = 0; i < _dates.length; i++) {
      console.log(' -', i, _dates[i].date.toFullDateTime(), 'label:', _dates[i].label);
    }
  };
  /**
  	@memberOf DateSchedule
  	@method getDates
  	@desc
  		Returns an Array copy of the dates, leaving the original untouched.
  	@returns {Array}		
  	@example
  		schedule.getDates();
  */


  D.getDates = function (includeData) {
    includeData = !!includeData;
    var dates = [];

    for (var i = 0; i < _dates.length; i++) {
      dates.push(includeData ? _dates[i] : _dates[i].date);
    }

    console.log('DateSchedule.getDates(), includeData:', includeData, '|', dates);
    return dates;
  }; // ---------------------------------------------------------------------------------------------------------------
  // PRIVATE METHODS


  function sortDates() {
    function sortOnDateTime(a, b) {
      if (a.date.getTime() < b.date.getTime()) return -1;
      if (a.date.getTime() > b.date.getTime()) return 1;
      return 0;
    }

    _dates.sort(sortOnDateTime);
  } // ---------------------------------------------------------------------------------------------------------------
  // INIT


  var sl = arg.standardOverrides;

  if (sl) {
    for (var key in sl) {
      _labelOverrides[key] = sl[key];
    }
  }

  if (arg.target) {
    _targetDate = D.addDate(arg.target, '', _callback, 'NOW');
    D.addDate({
      minute: _eventDuration
    }, '', _callback, 'PAST');
  } // upcoming, starting point


  D.addDate(new _TzDate.default({
    datetime: '2000-01-01T00:00:00+00:00',
    outputTimezone: _Timezone.default.UTC
  }), function (date) {
    return date.toSimpleDateTime();
  }, _callback, 'DATE');

  if (_targetDate && arg.isStandard == true) {
    D.addDate({}, '', _callback, 'TONIGHT');
    D.addDate({}, '', _callback, 'TODAY');
    D.addDate({
      hour: -24
    }, '', _callback, 'TOMORROW');
    D.addDate({
      hour: -24 * 6
    }, function (date) {
      //var dayNum = date.getDay();
      var dayNum = date.getIn(_targetDate.outputTimezone).getDay();
      return DateFormatter.getLabels().WEEKDAYS_FULL[dayNum];
    }, _callback, 'WEEK');
  }
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

/**
	@class Matrix2D
	@desc
		<a href="https://github.com/ff0000-ad-tech/ad-geom">Github repo</a>
		<br><br>
*/
// Version : Mar 17, 2015 2:15 PM

/*
 * TODO - write Documentation
 *		- convert to  a, c, b, d, tx, ty ?
 *		- inverse?
 */
var Matrix2D = function Matrix2D() {
  var M = this; // initial set identity base matrix array to data

  M.identity = new Float32Array([1, 0, 0, 0, 1, 0]);
  M.data = new Float32Array(M.identity);
};

Matrix2D.prototype = {
  clear: function clear() {
    var M = this; //console.log( M.data instanceof Float32Array )
    //M.data.set ( M.identity );

    M.data = new Float32Array(M.identity);
  },
  rotate: function rotate(radians) {
    var M = this; // copy the identity to be modified

    var _m = new Float32Array(M.identity);

    var c = Math.cos(radians).toFixed(15);
    var s = Math.sin(radians).toFixed(15);
    _m[0] = c;
    _m[1] = s;
    _m[3] = -s;
    _m[4] = c; //  cos(rad),  sin(rad), 0,
    //  -sin(rad), cos(rad), 0,
    //  0,         0,        1

    M.multiply(_m, false);
    return M;
  },
  scale: function scale(x, y) {
    var M = this; // copy the identity to be modified

    var _m = new Float32Array(M.identity);

    _m[0] = x;
    _m[4] = y; //  x, 0, 0,
    //  0, y, 0,
    //  0, 0, 1

    M.multiply(_m, false);
    return M;
  },
  skew: function skew(ax, ay) {
    var M = this; // copy the identity to be modified

    var _m = new Float32Array(M.identity);

    _m[1] = Math.tan(ax);
    _m[3] = Math.tan(ay); //  1,       tan(ax), 0,
    //  tan(ay), 1,       0,
    //  0,       0,       1

    M.multiply(_m);
    return M;
  },
  translate: function translate(x, y) {
    var M = this; // copy the identity to be modified

    var _m = new Float32Array(M.identity);

    _m[2] = x || 0;
    _m[5] = y || 0; //  1, 0, x,
    //  0, 1, y,
    //  0, 0, 1

    M.multiply(_m, true);
    return M;
  },
  multiply: function multiply(m, invert) {
    var M = this; // copy the current matrix data into '_c'

    var _copy = new Float32Array(M.data); // translate multiply needs to be inverted, where others do not


    var a = invert ? m : _copy;
    var b = invert ? _copy : m;

    for (var i = 0; i < 6; i++) {
      var k = Math.floor(i / 3) * 3;
      var q = i % 3; //console.log( i, '-', a[_a], b[_b], a[_a+1], b[_b+3], a[_a+2], b[_b+6] )

      M.data[i] = a[k] * b[q] + a[k + 1] * b[q + 3];
    }

    M.data[2] += a[2];
    M.data[5] += a[5]; // a[0] * b[0] + a[1] * b[3] + a[2] * 0
    // a[0] * b[1] + a[1] * b[4] + a[2] * 0
    // a[0] * b[2] + a[1] * b[5] + a[2] * 1
    // a[3] * b[0] + a[4] * b[3] + a[2] * 0
    // a[3] * b[1] + a[4] * b[4] + a[2] * 0
    // a[3] * b[2] + a[4] * b[5] + a[5] * 1
    // 0
    // 0
    // 1
  },
  setFromCss: function setFromCss(matrixString) {
    var cssMatrix = matrixString.match(/\(([^\)]+)\)/)[1].replace(/\s/g, '').split(',').map(Number);
    this.data = [cssMatrix[0], cssMatrix[1], cssMatrix[4], cssMatrix[2], cssMatrix[3], cssMatrix[5]];
  },
  getCss: function getCss() {
    // a, c, tx
    // b, d, ty
    // 0, 0, 1
    // matrix(a, c, b, d, tx, ty)
    var M = this;
    return 'matrix(' + M.data[0] + ',' + M.data[1] + ',' + M.data[3] + ',' + M.data[4] + ',' + M.data[2] + ',' + M.data[5] + ')';
  } //http://www.wikihow.com/Inverse-a-3X3-Matrix

  /*function getMatrixInverse (m){	
  	var t = [
  		m[0], m[3], m[6], 
  		m[1], m[4], m[7],
  		m[2], m[5], m[8]
  	];
  
  	// 0,  1,  2,
  	// 3,  4,  5,
  	// 6,  7,  8
  
  	// a,  b,  0 
  	// c,  d,  0
  	// tx, ty, 1
  	console.log( m );
  	console.log( t );
  	
  	[
  		m[4],	-m[1],	m[1] * m[5] - m[4] * m[2],
  		-m[3],	m[0],	(m[0] * m[5] - m[3] * m[2]) * -1,
  		0,		0,		m[0] * m[4] - m[3] * m[1]
  	]
  
  	var d11 = m[4]
  	var d12 = - m[1]
  	var d13 = m[1] * m[5] - m[4] * m[2]
  	var d21 = - m[3]
  	var d22 = m[0]
  	var d23 = (m[0] * m[5] - m[3] * m[2]) * -1
  	var d31 = 0 
  	var d32 = 0
  	var d33 = m[0] * m[4] - m[3] * m[1]
  
  	var d11 = t[4]
  	var d12 = - t[3]
  	var d13 = t[3] * t[7] - t[4] * t[6]
  	var d21 = - t[1]
  	var d22 = t[0]
  	var d23 = (t[0] * t[7] - t[1] * t[6]) * -1
  	var d31 = 0 
  	var d32 = 0
  	var d33 = t[0] * t[4] - t[1] * t[3]
  
  	var d11 = t[4] * t[8] - t[5] * t[7]
  	var d12 = (t[3] * t[8] - t[5] * t[6]) * -1
  	var d13 = t[3] * t[7] - t[4] * t[6]
  	var d21 = (t[1] * t[8] - t[2] * t[7]) * -1
  	var d22 = t[0] * t[8] - t[2] * t[6]
  	var d23 = (t[0] * t[7] - t[1] * t[6]) * -1
  	var d31 = t[1] * t[5] - t[2] * t[4]
  	var d32 = (t[0] * t[5] - t[2] * t[3]) * -1
  	var d33 = t[0] * t[4] - t[1] * t[3]
  
  
  
  	return [ d11, d12, d13, d21, d22, d23, d31, d32, d33 ];
  }*/

};
var _default = Matrix2D;
exports.default = _default;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _adUtils = __webpack_require__(0);

/** 
	@class Vector2D
	@param {number} x
	@param {number} y
	@desc
		<a href="https://github.com/ff0000-ad-tech/ad-geom">Github repo</a>
		<br><br>

		A simple 2D Vector classs 
	@example
		var myVector1 = new Vector2D( 0, 320 );
		var myVector2 = new Vector2D( -3, 5.5 );
*/
var Vector2D =
/*#__PURE__*/
function () {
  function Vector2D(x, y) {
    this.x = x || 0;
    this.y = y || 0;
  }
  /** 
  	@memberOf Vector2D
  	@method add
  	@param {Vector2D} v
  	@returns {Vector2D}
  	@desc
  		Adds another vector to itself
  	@example
          	myVector1.add( myVector2 );
  */


  var _proto = Vector2D.prototype;

  _proto.add = function add(v) {
    this.x += v.x;
    this.y += v.y;
    return this;
  };
  /** 
  	@memberOf Vector2D
  	@method sub
  	@param {Vector2D} v
  	@returns {Vector2D}
  	@desc
  		Subtracts another vector from itself
  		@example
          	myVector1.sub( myVector2 );
     */


  _proto.sub = function sub(v) {
    this.x -= v.x;
    this.y -= v.y;
    return this;
  };
  /** 
  	@memberOf Vector2D
  	@method dist
  	@param {Vector2D} v
  	@returns {number} The distance between two vectors as locations
  	@example
          	var distance = myVector.dist( myVector2 );
     */


  _proto.dist = function dist(v) {
    var x = this.x - v.x;
    var y = this.y - v.y;
    return Math.sqrt(x * x + y * y);
  };
  /** 
  	@memberOf Vector2D
  	@method mult
  	@param {number} s 
  	@desc
  		Multiplies X and Y of the vector by s
  	@example
          	myVector.mult( 10.3 );
     */


  _proto.mult = function mult(s) {
    this.x *= s;
    this.y *= s;
    return this;
  };
  /** 
  	@memberOf Vector2D
  	@method div
  	@param {number} s
  	@returns {Vector2D}
  	@desc
  		Divides X and Y of the vector by s
  	@example
          	myVector.div( 2 );
     */


  _proto.div = function div(s) {
    this.x /= s;
    this.y /= s;
    return this;
  };
  /** 
  	@memberOf Vector2D
  	@method limit
  	@param {number} s
  	@returns {Vector2D}
  	@desc
  		Limits the length of the vector if it's longer than s
  	@example
          	myVector.limit( 18.2 );
     */


  _proto.limit = function limit(s) {
    var m = this.length();

    if (m > s) {
      this.mult(s / m);
    }

    return this;
  };
  /** 
  	@memberOf Vector2D
  	@method length
  	@returns {number} The length of the vector.
  	@example
          	var length = myVector.length();
     */


  _proto.length = function length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  };
  /** 
  	@memberOf Vector2D
  	@method normalize
  	@returns {Vector2D}
  	@desc
  		Normalizes the vector( ie scale the vector to length of 1 )
  	@example
          	myVector.normalize();
     */


  _proto.normalize = function normalize() {
    var ratio = 1 / this.length();
    return this.mult(ratio);
  };
  /** 
  	@memberOf Vector2D
  	@method clone
  	@returns {Vector2D}
  	@desc
  		Creates a new Vector2D with and same x and y
  	@example
          	var newVecotor = myVector.clone();
     */


  _proto.clone = function clone() {
    return new Vector2D(this.x, this.y);
  };
  /** 
  	@memberOf Vector2D
  	@method degreeToVector
  	@returns {Vector2D}
  	@desc
  		Converts a degree 0 - 360 to a normalized vector
  	@example
  	    	var myVecotor = Vector2D.degreeToVector( 45 );
  */


  Vector2D.degreeToVector = function degreeToVector(d) {
    var theta = _adUtils.MathUtils.toRadians(d);

    return new Vector2D(Math.cos(theta), Math.sin(theta));
  };
  /** 
  	@memberOf Vector2D
  	@method random
  	@param {number} degreeIncrement
  		Optional, the degree increment of the random vector, defaults to 0.01
  	@returns {Vector2D}
  	@desc
  		Returns a random normalized vector 
  	@example
  		var myVecotor1 = Vector2D.random();
  		var myVecotor2 = Vector2D.random( 1 );
  */


  Vector2D.random = function random(degreeIncrement) {
    var inc = degreeIncrement || 0.01;
    return Vector2D.degreeToVector(_adUtils.MathUtils.random(0, 360, inc));
  };

  return Vector2D;
}();

var _default = Vector2D;
exports.default = _default;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

exports.__esModule = true;
exports.addToLoad = addToLoad;
exports.addLoader = addLoader;
exports.get = get;
exports.available = available;
exports.load = load;
exports.addFbaImages = addFbaImages;

var _adLoad = _interopRequireWildcard(__webpack_require__(18));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/**
	@class ImageManager
	@desc
		<a href="https://github.com/ff0000-ad-tech/ad-control">Github repo</a>
		<br><br>

		This module is used to add/load/manage all Images.

*/
var _pendingImages = [];
var _pendingCanvasImages = [];
var _pendingLoaders = [];
var _nextLoadCallback = [];

var _imageManagerLoader;

var _dict = {};
var _isLoading = false;
var _loaderCount = 0;

var _onComplete = function _onComplete() {};

var _onFail = function _onFail() {};
/* ------------------------------------------------------------------------------------------------------------- */
// PUBLIC METHODS

/**
	@memberOf ImageManager
	@method addToLoad
	@param {string} file
		A filename or path
	@param {object} arg
		Optional. Determines if the image should be loaded with a crossOrigin:'anonymous' for images used in a canvas. An object with one boolean key: forCanvas
	@desc
		Add an image file-path to be loaded.

	@example
		// Add an image from the "images/" folder
		ImageManager.addToLoad( adParams.imagesPath + 'sample.png' );

		// Add an image full path, and get the result key back
		var sampleImageId = ImageManager.addToLoad( 'http://some/full/file/path/sample.png' );

		// Add an image for use with CanvasDrawer, and get the result key back
		// NOTE: The object must be there or images will error when used in Canvas
		var sampleImageId = ImageManager.addToLoad( 'http://some/full/file/path/sample.png', { forCanvas:true });

	@returns
		An "imageId" which can be used to get an image by its id, see: {@link ImageManager.get}
*/


function addToLoad(file, arg) {
  var id = _adLoad.LoaderUtils.getFileName(file);

  if (!available(id, true)) {
    var forCanvas = arg && arg.forCanvas == true; //console.log( 'ImageManager.addToLoad(', id, ') forCanvas:', forCanvas )

    forCanvas ? _pendingCanvasImages.push(file) : _pendingImages.push(file);
  }

  return id;
}
/**
	@memberOf ImageManager
	@method addLoader
	@param {Loader} loader
		A {@link Loader}.
	@desc
		Add a Loader to loaded along with any other queued image requests.

	@example
		ImageManager.addLoader( new Loader(
			assets.images, {
				name: 'imageLocalLoader',
				prepend: adParams.imagesPath
		}));
*/


function addLoader(loader) {
  _pendingLoaders.push(loader);
}
/**
	@memberOf ImageManager
	@method get
	@param {string} imageId
		A String id of an Image
	@desc
		Returns the <<b></b>img> that was created when the requested image was loaded in.

	@example
		ImageManager.get( 'sample' );
*/


function get(imageId) {
  if (_dict[imageId]) return _dict[imageId];else throw new Error("ImageManager : No image named '" + imageId + "' has been loaded");
}
/**
	@memberOf ImageManager
	@method available
	@param {string} imageId
		A String id of an Image
	@desc
		Returns a boolean stating if an image by the given imageID has been loaded

	@example
		ImageManager.available( 'sample' );
*/


function available(imageId, internal) {
  var exists = _dict[imageId] != undefined; // if the image we are trying to load already exists

  if (exists) {
    // if this is an internal use - as in, called from I.addToLoad() or addToDictionary()
    if (internal) console.log('ImageManager.available() -->', true, ': Duplicate Image Id "' + imageId + '". One or more images loading in have the same name. Each Image needs a unique file name.');
  } else {
    // if the image doesn't already exist, we only want to know that if it is not from an internal ImageManager method
    // for example: checking to see if an image exists from build.js
    if (!internal) console.log('ImageManager.available() -->', false, ": No image named '" + imageId + "' has been loaded");
  }

  return exists;
}
/**
	@memberOf ImageManager
	@method load
	@param {function} callback
		Callback to execute when all images are loaded.
	@param {function} onFail
		Optional onFail callback - if not specified a failed load will cause the ad to failover.

	@desc
		Executes load queue, which, on success, will yield all of the requested images available with {@link ImageManager.get}
*/


function load(callback, onFail) {
  _onFail = onFail || global.failAd;

  if (_isLoading) {
    // set up a wait for the first one to finish
    _nextLoadCallback.push(callback);
  } else {
    _imageManagerLoader = new _adLoad.default({
      name: 'imageManagerLoader',
      onComplete: function onComplete(event) {
        _isLoading = false;

        _addToDictionary(event.getAllContentRaw());
      },
      onFail: function onFail(event) {
        _isLoading = false;

        _onFail.call();
      }
    });
    _onComplete = [].concat(callback);
    _nextLoadCallback = []; // extract out the images getting loaded, leaving I._pendingImages able to take more while loading

    var currentPendingImages = _pendingImages.slice();

    _pendingImages = [];

    _imageManagerLoader.add(new _adLoad.default(currentPendingImages, {
      name: 'dynamicImages-' + _loaderCount++,
      fileType: 'jpg'
    }));

    var currentPendingCanvasImages = _pendingCanvasImages.slice();

    _pendingCanvasImages = [];

    _imageManagerLoader.add(new _adLoad.default(currentPendingCanvasImages, {
      name: 'dynamicCanvasImages-' + _loaderCount++,
      fileType: 'jpg',
      crossOrigin: 'anonymous'
    }));

    var currentPendingLoaders = _pendingLoaders.slice();

    _pendingLoaders = [];

    for (var i = 0; i < currentPendingLoaders.length; i++) {
      _imageManagerLoader.add(currentPendingLoaders[i]);
    }

    _isLoading = true;

    _imageManagerLoader.load();
  }
}

function addFbaImages(target) {
  if (target) _addToDictionary(target.getAllContentRaw());
}
/* ------------------------------------------------------------------------------------------------------------- */
// PRIVATE METHODS


function _addToDictionary(content) {
  for (var i = 0; i < content.length; i++) {
    if (content[i] instanceof Image || content[i] instanceof SVGElement) {
      var img = content[i];
      if (!available(content[i].id, true)) _dict[img.id] = img;
    }
  }

  console.log('ImageManager:', _dict);

  for (var i = 0; i < _onComplete.length; i++) {
    _onComplete[i].call();
  }

  if (_nextLoadCallback.length > 0) {
    load(_nextLoadCallback);
  }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.GestureEvent = exports.FrameRateBase = exports.FrameRate = exports.UIEvent = exports.GestureBase = exports.Gesture = void 0;

var _Gesture = _interopRequireDefault(__webpack_require__(76));

exports.Gesture = _Gesture.default;

var _GestureBase = _interopRequireDefault(__webpack_require__(31));

exports.GestureBase = _GestureBase.default;

var _UIEvent = _interopRequireDefault(__webpack_require__(77));

exports.UIEvent = _UIEvent.default;

var _FrameRate = _interopRequireDefault(__webpack_require__(78));

exports.FrameRate = _FrameRate.default;

var _FrameRateBase = _interopRequireDefault(__webpack_require__(33));

exports.FrameRateBase = _FrameRateBase.default;

var GestureEvent = _interopRequireWildcard(__webpack_require__(32));

exports.GestureEvent = GestureEvent;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _adExternal = __webpack_require__(17);

var _adView = __webpack_require__(10);

var GestureEvent = _interopRequireWildcard(__webpack_require__(32));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/**
	@class GestureBase

	@desc
		<a href="https://github.com/ff0000-ad-tech/ad-events">Github repo</a>
		<br><br>
		
		-- INTERNAL MODULE --
		This module is used exclusively by Gesture.  When a dom element has an event listener registered, it creates an instance of this module 
		to hold all the event handlers for the dom element.  Every dom element gets a new GestureBase instance. {@link Gesture}
	
*/
var GestureBase =
/*#__PURE__*/
function () {
  function GestureBase(elem) {
    var G = this;
    G.elem = elem;
    G.hasActiveChildren = true;
    G.debug = false;
    G.eventList = [];
    G._isDragEnabled = false; // isDragging also used for swipe event check

    G._isDragging = false;
    G._give = 2; // offset coordinate for element

    G._oX = 0;
    G._oY = 0; // previous coordinates for drag/swipe

    G._p1X = 0;
    G._p1Y = 0;
    G._p2X = 0;
    G._p2Y = 0; // start coordinate

    G._sX = 0;
    G._sY = 0; // velocity

    G._vX = 0;
    G._vY = 0;
    G._cursor = 'mouse';
    G._start = 'down';
    G._end = 'up';
    G.init();
  }

  var _proto = GestureBase.prototype;

  _proto.init = function init() {
    var G = this;
    if (G.debug) console.log('GestureBase.init()');
    G._handleTouchStart = G._handleTouchStart.bind(G);
    G._handleDown = G._handleDown.bind(G);
    G._handleDrag = G._handleDrag.bind(G);
    G._handleUp = G._handleUp.bind(G);
    G._elemAdd = G.elem.addEventListener.bind(G.elem);
    G._elemRemove = G.elem.removeEventListener.bind(G.elem);

    G._reset();
  }; // replace addEventListener so can flag the event type


  _proto.register = function register(name, handler) {
    var G = this;
    if (G.debug) console.log('GestureBase.register(', name, ')');
    G.eventList.push(name);

    G._checkDragEnabled(); // then actually add the listener


    G._elemAdd(name, handler);
  };

  _proto.unregister = function unregister(name, handler) {
    var G = this;
    if (G.debug) console.log('GestureBase.unregister(', name, ')');
    var index = G.eventList.indexOf(name);

    if (index >= 0) {
      G.eventList.splice(index, 1);
    }

    G._checkDragEnabled();

    G._elemRemove(name, handler);
  };
  /* ------------------------------------------------------------------------------------------------------------- */
  // UTILITY


  _proto._reset = function _reset() {
    var G = this;
    G._cursor = 'mouse';
    G._start = 'down';
    G._end = 'up';
    G.elem.addEventListener('touchstart', G._handleTouchStart); // listen for both touch and mouse, except on iOS devices

    if (_adExternal.Device.os != 'ios') G.elem.addEventListener('mousedown', G._handleDown);
  };

  _proto._checkDragEnabled = function _checkDragEnabled() {
    var G = this;
    var hasDragEventIndex = G.eventList.join('').indexOf('onDrag'); // check if it is a drag, therefore enabling dragability

    G._isDragEnabled = hasDragEventIndex > -1;
  }; // Android stores things like pageX in an array. This scopes the internally used event properly


  _proto._getEventScope = function _getEventScope(event) {
    //if( this.debug ) console.log( 'GestureBase._getEventScope(), event:', event );
    // check for existence of changedTouches instead
    //return ( Device.os == 'android' && event instanceof TouchEvent ) ? event.changedTouches[0] : event ;
    return event.changedTouches ? event.changedTouches[0] : event;
  };
  /* ------------------------------------------------------------------------------------------------------------- */
  // WINDOW EVENT ENABLE


  _proto._add = function _add(type, handler) {
    window.addEventListener(this._cursor + type, handler);
  };

  _proto._remove = function _remove(type, handler) {
    window.removeEventListener(this._cursor + type, handler);
  };
  /* ------------------------------------------------------------------------------------------------------------- */
  // HANLDERS


  _proto._handleDown = function _handleDown(event) {
    var G = this;
    if (G.debug) console.log('GestureBase._handleDown()');
    GestureEvent.startPoint();
    G.elem.removeEventListener('touchstart', G._handleTouchStart);
    if (_adExternal.Device.os != 'ios') G.elem.removeEventListener('mousedown', G._handleDown);
    G._isDragging = false;

    G._add(G._end, G._handleUp);

    G._add('move', G._handleDrag);

    var touch = G._getEventScope(event);

    var mouseX = touch.pageX;
    var mouseY = touch.pageY;
    var elemRect = G.elem.getBoundingClientRect();
    var localOffsetX = mouseX - elemRect.left;
    var localOffsetY = mouseY - elemRect.top;

    var localX = G.elem.x || _adView.Styles.getCss(G.elem, 'x');

    var localY = G.elem.y || _adView.Styles.getCss(G.elem, 'y');

    var globalOffsetX = elemRect.left - localX;
    var globalOffsetY = elemRect.top - localY;
    G._oX = globalOffsetX + localOffsetX;
    G._oY = globalOffsetY + localOffsetY;
    var elemPositionX = mouseX - G._oX;
    var elemPositionY = mouseY - G._oY; // reset the dragging vars

    G._sX = G._p1X = G._p2X = mouseX;
    G._sY = G._p1Y = G._p2Y = mouseY;
    /*console.log( 
    	'\n\t_handleDown()',
    	'| mouse:', mouseX, mouseY, 
    	'| localOffset:', localOffsetX, localOffsetY,
    	'| local:', localX, localY,
    	'| globalOffset:', globalOffsetX, globalOffsetY,
    	'| totalOffset:', G._oX, G._oY,
    	'| elemPosition:', elemPositionX, elemPositionY,
    	'\n\n'
    )*/

    localCreateEvent('onPress');

    function localCreateEvent(name) {
      if (GestureEvent.stopped(name)) return;
      var newEvent = new GestureEvent.Event(name, mouseX, mouseY, localOffsetX, localOffsetY, elemPositionX, elemPositionY);
      if (G.debug) console.log(' -> dispatch', name);
      G.elem.dispatchEvent(newEvent);
    }
  };

  _proto._handleUp = function _handleUp(event, bypass) {
    var G = this;
    if (G.debug) console.log('GestureBase._handleUp()');

    G._remove(G._end, G._handleUp);

    G._remove('move', G._handleDrag);

    var touch = G._getEventScope(event);

    var mouseX = touch.pageX;
    var mouseY = touch.pageY;
    var elemRect = G.elem.getBoundingClientRect();
    var localOffsetX = mouseX - elemRect.left;
    var localOffsetY = mouseY - elemRect.top;
    var elemPositionX = mouseX - G._oX;
    var elemPositionY = mouseY - G._oY;
    var eventName;

    if (bypass !== true) {
      localCreateEvent('onRelease');
    }

    var offsetTop = elemRect.top + window.pageYOffset;
    var offsetBottom = offsetTop + elemRect.height;
    var offsetLeft = elemRect.left + window.pageXOffset;
    var offsetRight = offsetLeft + elemRect.width;

    if (G._isDragging) {
      if (G._isDragEnabled) {
        G._dragEndOrSwipe('onDragStop');
      }

      console.log('  -> No CLICK Fired, was dragging');
    } else {
      if (mouseX > offsetLeft && mouseX < offsetRight && mouseY > offsetTop && mouseY < offsetBottom) {
        localCreateEvent('onSelect');
      }
    }

    function localCreateEvent(name) {
      if (GestureEvent.stopped(name)) return;
      var newEvent = new GestureEvent.Event(name, mouseX, mouseY, localOffsetX, localOffsetY, elemPositionX, elemPositionY, 0, 0, G._vX, G._vY);
      if (G.debug) console.log(' -> dispatch', name);
      G.elem.dispatchEvent(newEvent);
    }

    if (G._isDragging) {
      G._dragEndOrSwipe('onSwipe');
    }

    G._reset(); // this prevents the second mouse down on Android


    event.preventDefault();
    GestureEvent.endPoint();
  };
  /* ------------------------------------------------------------------------------------------------------------- */
  // TOUCH BYPASSING
  // This will stop from both touch and mouse events firing, thus doubling every Gesture Event fired.


  _proto._handleTouchStart = function _handleTouchStart(event) {
    var G = this;
    if (G.debug) console.log('GestureBase._handleTouchStart()'); // Change the native events to listen for the rest of the system

    G._cursor = 'touch';
    G._start = 'start';
    G._end = 'end';

    G._handleDown(event);
  };
  /* ------------------------------------------------------------------------------------------------------------- */
  // DRAG


  _proto._handleDrag = function _handleDrag(event) {
    var G = this;
    if (G.debug) console.log('GestureBase._handleDrag()');

    var touch = G._getEventScope(event);

    var mouseX = touch.pageX;
    var mouseY = touch.pageY;
    var diffx1 = mouseX - G._p1X;
    var diffx2 = mouseX - G._p2X;
    G._vX = (diffx2 - diffx1) / 2 + diffx1;
    var diffy1 = mouseY - G._p1Y;
    var diffy2 = mouseY - G._p2Y;
    G._vY = (diffy2 - diffy1) / 2 + diffy1;
    var elemPositionX = mouseX - G._oX;
    var elemPositionY = mouseY - G._oY;
    var elemRect = G.elem.getBoundingClientRect();
    var localOffsetX = mouseX - elemRect.left;
    var localOffsetY = mouseY - elemRect.top;
    /*console.log( 
    	'\t_handleDrag()',
    	'| mouse:', mouseX, mouseY, 
    	'| totalOffset:', G._oX, G._oY,
    	'| elemPosition:', elemPositionX, elemPositionY,
    	'| velocity:', G._vX, G._vY,
    	'| distance:', G._p1X - G._sX, G._p1Y - G._sY
    )*/

    var eventName;

    if (G._isDragging) {
      if (G._isDragEnabled) {
        localCreateEvent('onDrag');
      }
    } else {
      // check the inital movement to register as dragging or just a click
      if (Math.abs(G._sX - mouseX) > G._give || Math.abs(G._sY - mouseY) > G._give) {
        G._isDragging = true;

        if (G._isDragEnabled) {
          // dispatch when offset distance is exceeded
          localCreateEvent('onDragStart');
        }
      }
    }

    function localCreateEvent(name) {
      if (GestureEvent.stopped(name)) return;
      var newEvent = new GestureEvent.Event(name, mouseX, mouseY, localOffsetX, localOffsetY, elemPositionX, elemPositionY, G._p1X - G._sX, G._p1Y - G._sY, G._vX, G._vY);
      if (G.debug) console.log(' -> dispatch', name);
      G.elem.dispatchEvent(newEvent);
    }

    G._p2X = G._p1X;
    G._p1X = mouseX;
    G._p2Y = G._p1Y;
    G._p1Y = mouseY;
  };
  /* ------------------------------------------------------------------------------------------------------------- */
  // DRAG END | SWIPE


  _proto._dragEndOrSwipe = function _dragEndOrSwipe(type) {
    var G = this;
    if (G.debug) console.log('GestureBase._dragEndOrSwipe()', type);
    if (GestureEvent.stopped(name)) return;
    var elemRect = G.elem.getBoundingClientRect();
    var evt = new GestureEvent.Event(type, G._p1X, G._p1Y, G._p1X - elemRect.left, G._p1Y - elemRect.top, G._p1X - G._oX, G._p1Y - G._oY, // since _xp is assigned after moving, must use _p2X
    G._p2X - G._sX, G._p2Y - G._sY, G._vX, G._vY);
    if (G.debug) console.log(' -> dispatch', type);
    G.elem.dispatchEvent(evt);
  };

  return GestureBase;
}();

var _default = GestureBase;
exports.default = _default;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.startPoint = startPoint;
exports.endPoint = endPoint;
exports.SWIPE = exports.DRAG_STOP = exports.DRAG_START = exports.DRAG = exports.CLICK = exports.RELEASE = exports.PRESS = exports.MOVE = exports.OUT = exports.OVER = exports.stopped = exports.stop = exports.Event = void 0;

/**
	@class GestureEvent
	@desc
		<a href="https://github.com/ff0000-ad-tech/ad-events">Github repo</a>
		<br><br>
		
		This module has custom events to be used with the Gesture module. {@link Gesture}
*/
var _kills = {};
var _eventLooping = false;
/**
			@memberOf GestureEvent
			@class GestureEvent.Event
			@param {string} name
				The event type name
			@param {number} mouseGlobalX
				The mouse x on the page
			@param {number} mouseGlobalY
				The mouse y on the page
			@param {number} mouseLocalX
				The mouse x relative to the element position
			@param {number} mouseLocalY
				The mouse y relative to the element position
			@param {number} elementX
				The element x position
			@param {number} elementY
				The element y position
			@param {number} distanceX
				The distance moved on the x, only used for drags and swipes
			@param {number} distanceY
				The distance moved on the y, only used for drags and swipes
			@param {number} velocityX
				The distance moved on the x since previous event fired, essentially the speed
			@param {number} velocityY
				The distance moved on the y since previous event fired, essentially the speed
			@desc
				Creates a new CustomEvent with properties assigned to it, accessible fomr the passed through event to the handler
				
			@example
				Gesture.add ( myDiv, GestureEvent.CLICK, handleClick );
				function handleClick( event ) {
					console.log( event )
					console.log( 'global mouse:', event.mouse.global.x, event.mouse.global.y )
					console.log( 'local mouse:', event.mouse.local.x, event.mouse.local.y )
					console.log( 'element:', event.element.x, event.element.y )
				}	
				Gesture.add ( dragDiv, GestureEvent.DRAG, handleDrag );
				function handleDrag( event ) {
					console.log( event )
					console.log( 'element:', event.element.x, event.element.y )
					console.log( 'distance:', event.distance.x, event.distance.y )
					console.log( 'velocity:', event.velocity.x, event.velocity.y )
				}					
		*/

function createEvent(name, mouseGlobalX, mouseGlobalY, mouseLocalX, mouseLocalY, elementX, elementY, distanceX, distanceY, velocityX, velocityY) {
  var E = new CustomEvent(name);
  E.mouse = {
    global: {
      x: mouseGlobalX,
      y: mouseGlobalY
    },
    local: {
      x: mouseLocalX,
      y: mouseLocalY
    }
  };
  E.element = {
    x: elementX || 0,
    y: elementY || 0
  };
  E.distance = {
    x: distanceX || 0,
    y: distanceY || 0
  };
  E.velocity = {
    x: velocityX || 0,
    y: velocityY || 0
  };
  E.direction = {
    x: velocityX > 0 ? 'right' : velocityX < 0 ? 'left' : null,
    y: velocityY > 0 ? 'down' : velocityY < 0 ? 'up' : null
  };
  return E;
}

var Event = createEvent;
exports.Event = Event;

function stopBubble(event) {
  if (event) {
    // For IE, it bubbles custom events
    event.stopImmediatePropagation(); // for all other browsers that do not do that

    _kills[event.type] = true; //console.log( '\n\tGestureEvent.stop() of type:', event.type )
  }
}
/**
		@memberOf GestureEvent
		@method stop
		@param {event} event
			The event parameter from the event handler
		@desc
			Stops all future events of the type during the event loop, is a native equivilent to event.stopImmediatePropogation().
			It does NOT remove any listeners, simply stops the event from bubbling up through the chain.
			
		@example
			Gesture.add ( parentDiv, GestureEvent.CLICK, handleParentClick );
			function handleParentClick( event ) {
				// This will not be heard
				console.log( 'parent click heard' )
			}
			
			Gesture.add ( childDiv, GestureEvent.CLICK, handleChildClick );
			function handleChildClick( event ) {
				GestureEvent.stop ( event )
				console.log( 'child click heard' )
			}					
	*/


var stop = stopBubble;
exports.stop = stop;

function isStopped(type) {
  return _kills[type] != undefined;
}

var stopped = isStopped; // A flag for the start of the event loop through all bases

exports.stopped = stopped;

function startPoint() {
  if (!_eventLooping) {
    // the end of event loop has been reached, so reset things
    _eventLooping = true;
    _kills = {};
  }
} // A flag to reset any bubble killing


function endPoint() {
  _eventLooping = false;
}
/**	
	@memberOf GestureEvent	
	@const {string} OVER
	@desc
		Represents a 'mouseover', fired on desktop cursor roll over
	@example
		GestureEvent.OVER
*/


var OVER = 'mouseover';
/**	
	@memberOf GestureEvent	
	@const {string} OUT
	@desc
		Represents a 'mouseout', fired on desktop cursor roll out
	@example
		GestureEvent.OUT
*/

exports.OVER = OVER;
var OUT = 'mouseout';
/**	
	@memberOf GestureEvent	
	@const {string} MOVE
	@desc
		Represents a 'mousemove', fired on desktop cursor move
	@example
		GestureEvent.MOVE
*/

exports.OUT = OUT;
var MOVE = 'mousemove';
/**	
	@memberOf GestureEvent	
	@const {string} PRESS
	@desc
		Represents an 'onPress', fired on mousedown / touch start
	@example
		GestureEvent.PRESS
*/

exports.MOVE = MOVE;
var PRESS = 'onPress';
/**	
	@memberOf GestureEvent	
	@const {string} RELEASE
	@desc
		Represents an 'onRelease', fired on mouseup / touch end
	@example
		GestureEvent.RELEASE
*/

exports.PRESS = PRESS;
var RELEASE = 'onRelease';
/**	
	@memberOf GestureEvent	
	@const {string} CLICK
	@desc
		Represents a 'click', fired on click / touch end
	@example
		GestureEvent.CLICK
*/

exports.RELEASE = RELEASE;
var CLICK = 'onSelect';
/**	
	@memberOf GestureEvent	
	@const {string} DRAG
	@desc
		Represents an 'onDrag', fired after an element is selected and before released. <br>
		Element data objects included: selection position, element position, velocity of move	
	@example
		GestureEvent.DRAG
*/

exports.CLICK = CLICK;
var DRAG = 'onDrag';
/**	
	@memberOf GestureEvent	
	@const {string} DRAG_START
	@desc
		Represents an 'onDragStart', fired after an element is selected, when first moved and before released. <br>
		Element data objects included: selection position, element position
	@example
		Gesture.addEventListener ( myDiv, GestureEvent.DRAG_START, handleDragStart );
		//
		function handleDragStart ( event ){
			// coordinate position of mouse/touch
			console.log( event.position );

			// coordinate position of target element
			console.log( event.element );
		}
*/

exports.DRAG = DRAG;
var DRAG_START = 'onDragStart';
/**	
	@memberOf GestureEvent	
	@const {string} DRAG_STOP
	@desc
		Represents an 'onDragStop', fired after an element is selected, moved, then released. <br>
		Element data objects included: selection position, velocity of last move
	@example
		Gesture.addEventListener ( myDiv, GestureEvent.DRAG_STOP, handleDragStop );
		//
		function handleDragStop ( event ){
			// coordinate position of mouse/touch
			console.log( event.position );

			// velocity, ie change in distance, of target element
			console.log( event.velocity );
		}
*/

exports.DRAG_START = DRAG_START;
var DRAG_STOP = 'onDragStop';
/**	
	@memberOf GestureEvent	
	@const {string} SWIPE
	@desc
		Represents an 'onSwipe', fired just after a DRAG_STOP, but different event properties available. <br>
		Element data objects included: direction, distance, velocity
	@example
		Gesture.addEventListener ( myDiv, GestureEvent.SWIPE, handleSwipe );
		//
		function handleSwipe ( event ){
			// direction of swipe, as strings 
			console.log( event.direction );

			// distance covered from down to release
			console.log( event.distance );

			// velocity, aka speed of swipe
			console.log( event.velocity );
		}
*/

exports.DRAG_STOP = DRAG_STOP;
var SWIPE = 'onSwipe';
exports.SWIPE = SWIPE;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

/* ----------------------------------------------------------------------------------------------------------------------------------------------------------
	Description:
		-- INTERNAL MODULE --
		This module is used exclusively by FrameRate.  When a method is registered, it instantiaties an instance of this module to hold all methods at a 
		specified frames per second.  Every fps gets a new FrameRateBase instance.
	
	---------------------------------------------------------------------------------------------------------------------------------------------------------- */
function FrameRateBase(fps) {
  var F = this;
  F.pool = [];
  F.fps = fps;
  F._frameTime = Math.floor(1000 / F.fps);
  F._prevTime = 0;
  F._startTime = 0;
  F._nextTime = 0;
  F._maxLag = 400;
  F._shiftLag = 30;
  F._paused = false;
  F._prevCallTime = Date.now();
  F.diffTime = 0;
}

FrameRateBase.prototype = {
  resume: function resume() {
    var F = this;

    if (F._isPaused) {
      F._startTime = Date.now();
      F._prevCallTime = F._startTime;
      F._prevTime = F._startTime;
      F._nextTime = 0;
      F._isPaused = false;
    }
  },
  tick: function tick() {
    var F = this;

    if (!F._paused) {
      var call = false;
      var now = Date.now();
      var diffTime = now - F._prevTime;

      if (diffTime > F._maxLag) {
        console.log('...lag');
        F._startTime += diffTime - F._shiftLag;
      }

      F._prevTime = now; //+= F.diffTime;

      var elapsedTime = F._prevTime - F._startTime;
      var future = elapsedTime - F._nextTime;

      if (future > 0) {
        F._nextTime += future >= F._frameTime ? future : F._frameTime;
        call = true; // calculates the difference only from last call, not last tick

        F.diffTime = now - F._prevCallTime;
        F._prevCallTime = now;
      } // handle the callbacks


      if (call) F.dispatch();
    }
  },
  dispatch: function dispatch() {
    var F = this;

    for (var i = 0; i < F.pool.length; i++) {
      var obj = F.pool[i];
      obj.handler.call(obj.from, this);
    }
  }
};
var _default = FrameRateBase;
exports.default = _default;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _adGeom = __webpack_require__(2);

var _ParticleModel = _interopRequireDefault(__webpack_require__(19));

var _ParticlesUtils = _interopRequireDefault(__webpack_require__(20));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
	@class Particle
	@desc
		<a href="https://github.com/ff0000-ad-tech/ad-particles">Github repo</a>
		<br><br>
		
		This Particle class is used along with {@link ParticleModel} and {@link Emitter} class. 
*/
var Particle = function Particle(ctx, model, fps) {
  var self = this; //set up properties

  self.fps = fps;
  self.graphic = model.graphic;
  self.properties = model.generateIndividualProperties();
  self.frameCount = 0;
  self.ctx = ctx;
  self._lifeSpanFrameCount = _ParticlesUtils.default.secToFrameCount(self.properties.lifeSpan, self.fps);
  self._force = new _adGeom.Vector2D(0, 0);

  self._hasAnimation = function () {
    var ani = self.properties.animations;
    var i;

    for (var key in ani) {
      if (ani[key].steps.length > 0) {
        return true;
      }
    }

    return false;
  }.bind(self)();

  self._hasTurbulence = function () {
    var t = self.properties.turbulence;
    return t.rate !== 0 && t.x !== 0 && t.y !== 0;
  }.bind(self)();
};

Particle.prototype = {
  /**
  	@memberof Particle
  	@method update
  	@desc
  		Updates the properties of the particle
     */
  update: function update() {
    var p = this.properties;
    var vel = p.velocity.clone();
    p.velocity.mult(1 + p.acceleration);
    p.velocity.add(this._force);
    p.velocity.limit(p.maxSpeed);
    p.location.add(p.velocity);

    this._force.mult(0);

    if (this._hasTurbulence) {
      if (!this.noiseStart) {
        this.noiseStart = new _adGeom.Vector2D.random();
        this.noiseStart.mult(250);
      }

      var t = p.turbulence;
      this.noiseStart.add(new _adGeom.Vector2D(t.rate, t.rate));

      var n = _adGeom.SimpleNoise2D.get(this.noiseStart.x, this.noiseStart.y);

      p.location.x += n.x * t.xAmplitude;
      p.location.y += n.y * t.yAmplitude;
    }

    p.style.x = p.location.x;
    p.style.y = p.location.y;
    this.frameCount++;
  },

  /** 
  	@memberof Particle
  	@method getAnimationStyle
  	@desc
  		Update the animated style of a particle
     */
  getAnimationStyle: function getAnimationStyle() {
    //TODO: optimize
    var p = this.properties;
    var style = {};

    var sec = _ParticlesUtils.default.frameCountToSec(this.frameCount, this.fps);

    var offsetStyle = _ParticlesUtils.default.easyTween(p.animations, p.lifeSpan, sec); // apply to each key


    for (var key in p.style) {
      if (offsetStyle[key] !== undefined) {
        var val = p.style[key] * offsetStyle[key];
        style[key] = val;
      } else {
        style[key] = p.style[key];
      }
    }

    return style;
  },

  /**
  	@memberof Particle
  	@method render
  	@desc
  		Renders the particle onto the canvas context.
  */
  render: function render() {
    var style = this._hasAnimation ? this.getAnimationStyle() : this.properties.style;
    this.graphic.render(this.ctx, style, this.frameCount);
  },

  /**
  	@memberof Particle
  	@method applyForce
  	@desc
  		Applies force to the particle.
  */
  applyForce: function applyForce(f) {
    this._force.add(f);
  },

  /**
  	@memberof Particle
  	@method isDead
  	@returns {boolean}
  	@desc
  		Returns a boolean of is the particle is dead depending on two situations:
  		<br>
  		<ol>
  			<li>if it has reaches its lifespan, or</li>
  			<li>if it is out of the canvas and if {@link EmitterData.killIfOutOfCanvas} is set to true</li>
  		</ol>
     */
  isDead: function isDead(w, h, k) {
    var p = this.properties;
    var remainingLife = this._lifeSpanFrameCount - this.frameCount;

    if (remainingLife <= 0) {
      return true;
    }

    if (k) {
      var l = p.location;
      var g = this.graphic;
      var size = Math.max(g.width, g.height) * p.style.scale;

      if (l.x - size > w || l.y - size > h || l.x + size < 0 || l.y + size < 0) {
        return true;
      }
    }

    return false;
  },

  /**
  	@memberof Particle
  	@method checkWorld
  	@param {array} w
  		an array that contains left X, right X, top Y, bottom Y as values for the boundary
  	@desc
  		Remains the particle in the defined world boundaries by its body size and bounces it when it hits the boundaries.
  */
  checkWorld: function checkWorld(w) {
    var l = this.properties.location;
    var r = this.properties.bodySize;
    var x1 = w[0] + r;
    var x2 = w[1] - r;
    var y1 = w[2] + r;
    var y2 = w[3] - r;

    if (l.x <= x1) {
      this._checkBorder('x', x1);
    } else if (l.x >= x2) {
      this._checkBorder('x', x2);
    }

    if (l.y <= y1) {
      this._checkBorder('y', y1);
    } else if (l.y >= y2) {
      this._checkBorder('y', y2);
    }
  },

  /**
  	@memberof Particle
  	@method _checkBorder
  	@param {string} axis
  		String 'x' or 'y'
  	@param {number} val - the location of the border on the X or Y axis
  		@desc
  		Check it the particle location reaches the border, if ture, it bounces to it.
  */
  _checkBorder: function _checkBorder(axis, val) {
    //axis: x or y
    var p = this.properties;
    var v = p.velocity;
    var b = p.bounceAmount;

    if (axis === 'x') {
      v.x *= -b;
      v.y *= b;
      p.location.x = val;
    } else {
      v.x *= b;
      v.y *= -b;
      p.location.y = val;
    }
  }
};
var _default = Particle;
exports.default = _default;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var Dom = {
  create: function create(tagName) {
    return document.createElement(tagName);
  },
  addClass: function addClass(el, name) {
    el.classList.add(name);
  },
  removeClass: function removeClass(el, name) {
    el.classList.remove(name);
  },
  getBy: function getBy(name) {
    switch (true) {
      case name[0] === '#':
        //id
        return document.getElementById(name.replace('#', ''));
        break;

      case name[0] === '.':
        //class
        return document.getElementsByClassName(name.replace('.', ''));
        break;

      default:
        //tag
        return document.getElementsByTagName(name);
    }
  },
  setStyle: function setStyle(el, obj) {
    for (var key in obj) {
      el.style[key] = obj[key];
    }
  },
  setGroupStyle: function setGroupStyle(elList, obj) {
    var i;

    for (i = 0; i < elList.length; i++) {
      this.setStyle(elList[i], obj);
    }
  }
};
var _default = Dom;
exports.default = _default;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(37);

var _superagent = _interopRequireDefault(__webpack_require__(22));

var _adControl = __webpack_require__(16);

var _adLoad = __webpack_require__(18);

var _Interface = _interopRequireDefault(__webpack_require__(81));

var _functions = __webpack_require__(89);

var _globalSetting = __webpack_require__(15);

var _Dom = _interopRequireDefault(__webpack_require__(35));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IMAGE_PATH_PATTERN = /([a-zA-Z0-9_.-]*)\.(png|jpg|jpeg)/;
var adSize = (0, _functions.getParamInQueryString)('size'); // TO REMOVE: mock API contnet from Node

var FAKE_API = {
  imagePaths: [],
  emitterDataFiles: [{
    name: 'emitterData.js',
    content: ''
  }, {
    name: 'emitterData123.js',
    content: ''
  }]
};

function updateSetting(_ref) {
  var content = _ref.content,
      adPath = _ref.adPath,
      loadedImageNames = _ref.loadedImageNames;
  var adSizeWH = (0, _functions.parseAdSize)(adPath);
  (0, _globalSetting.set)('adPath', adPath);
  (0, _globalSetting.set)('adWidth', adSizeWH.width);
  (0, _globalSetting.set)('adHeight', adSizeWH.height);
  (0, _globalSetting.set)('imagePaths', content.images);
  (0, _globalSetting.set)('loadedImageNames', loadedImageNames);
  (0, _globalSetting.set)('emitterDataFiles', content.emitterDataFiles);
}

function init(content) {
  if (content.emitterDataFiles.length === 0) {
    var el = _Dom.default.getBy('#data-selector');

    el.classList.add('show-warning', 'show');
    return;
  } // TODO: use the real URL


  var adPath = (0, _functions.mergePath)((0, _functions.getAdPathFromUrl)(), adSize); // const adPath = 'http://localhost:8000/images'
  // const imagePath = mergePath(adPath, get('imagePath'))

  var imagePath = '/images'; // remove gifs from images

  var imagesToLoad = content.imagePaths.filter(function (item) {
    return IMAGE_PATH_PATTERN.test(item);
  });
  imagesToLoad.forEach(function (item) {
    var path = (0, _functions.mergePath)(imagePath, item);

    _adControl.ImageManager.addToLoad(path);
  });

  _adControl.ImageManager.load(function () {
    var names = imagesToLoad.map(function (item) {
      return IMAGE_PATH_PATTERN.exec(item)[1];
    });
    updateSetting({
      content: content,
      adPath: adPath,
      loadedImageNames: names
    });
    window.Interface = new _Interface.default();
  });
}

function formatEmitterData(str) {
  var pattern = /\{(.*)\}/;
  var data = str.replace(/\r?\n|\r|\s/g, '');
  var result = pattern.exec(data);

  if (result) {
    return result[0];
  }

  return '';
} // TO DO: hook up with API


_superagent.default.get("../api/?action=getInfo&size=" + adSize).end(function (err, res) {
  if (err) {
    alert('Erro with API. Unable to proceed');
    return;
  }

  var data = JSON.parse(res.text);
  var result = JSON.parse(data.stdout);
  result.emitterDataFiles = result.emitterDataFiles.map(function (item) {
    return {
      name: item.name,
      content: formatEmitterData(item.content)
    };
  });
  init(result);
});

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * dat-gui JavaScript Controller Library
 * http://code.google.com/p/dat-gui
 *
 * Copyright 2011 Data Arts Team, Google Creative Lab
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */

/** @namespace */
window.dat = window.dat || {};
/** @namespace */

dat.gui = dat.gui || {};
/** @namespace */

dat.utils = dat.utils || {};
/** @namespace */

dat.controllers = dat.controllers || {};
/** @namespace */

dat.dom = dat.dom || {};
/** @namespace */

dat.color = dat.color || {};

dat.utils.css = function () {
  return {
    load: function load(url, doc) {
      doc = doc || document;
      var link = doc.createElement('link');
      link.type = 'text/css';
      link.rel = 'stylesheet';
      link.href = url;
      doc.getElementsByTagName('head')[0].appendChild(link);
    },
    inject: function inject(css, doc) {
      doc = doc || document;
      var injected = document.createElement('style');
      injected.type = 'text/css';
      injected.innerHTML = css;
      doc.getElementsByTagName('head')[0].appendChild(injected);
    }
  };
}();

dat.utils.common = function () {
  var ARR_EACH = Array.prototype.forEach;
  var ARR_SLICE = Array.prototype.slice;
  /**
   * Band-aid methods for things that should be a lot easier in JavaScript.
   * Implementation and structure inspired by underscore.js
   * http://documentcloud.github.com/underscore/
   */

  return {
    BREAK: {},
    extend: function extend(target) {
      this.each(ARR_SLICE.call(arguments, 1), function (obj) {
        for (var key in obj) {
          if (!this.isUndefined(obj[key])) target[key] = obj[key];
        }
      }, this);
      return target;
    },
    defaults: function defaults(target) {
      this.each(ARR_SLICE.call(arguments, 1), function (obj) {
        for (var key in obj) {
          if (this.isUndefined(target[key])) target[key] = obj[key];
        }
      }, this);
      return target;
    },
    compose: function compose() {
      var toCall = ARR_SLICE.call(arguments);
      return function () {
        var args = ARR_SLICE.call(arguments);

        for (var i = toCall.length - 1; i >= 0; i--) {
          args = [toCall[i].apply(this, args)];
        }

        return args[0];
      };
    },
    each: function each(obj, itr, scope) {
      if (!obj) return;

      if (ARR_EACH && obj.forEach && obj.forEach === ARR_EACH) {
        obj.forEach(itr, scope);
      } else if (obj.length === obj.length + 0) {
        // Is number but not NaN
        for (var key = 0, l = obj.length; key < l; key++) {
          if (key in obj && itr.call(scope, obj[key], key) === this.BREAK) return;
        }
      } else {
        for (var key in obj) {
          if (itr.call(scope, obj[key], key) === this.BREAK) return;
        }
      }
    },
    defer: function defer(fnc) {
      setTimeout(fnc, 0);
    },
    toArray: function toArray(obj) {
      if (obj.toArray) return obj.toArray();
      return ARR_SLICE.call(obj);
    },
    isUndefined: function isUndefined(obj) {
      return obj === undefined;
    },
    isNull: function isNull(obj) {
      return obj === null;
    },
    isNaN: function isNaN(obj) {
      return obj !== obj;
    },
    isArray: Array.isArray || function (obj) {
      return obj.constructor === Array;
    },
    isObject: function isObject(obj) {
      return obj === Object(obj);
    },
    isNumber: function isNumber(obj) {
      return obj === obj + 0;
    },
    isString: function isString(obj) {
      return obj === obj + '';
    },
    isBoolean: function isBoolean(obj) {
      return obj === false || obj === true;
    },
    isFunction: function isFunction(obj) {
      return Object.prototype.toString.call(obj) === '[object Function]';
    }
  };
}();

dat.controllers.Controller = function (common) {
  /**
   * @class An "abstract" class that represents a given property of an object.
   *
   * @param {Object} object The object to be manipulated
   * @param {string} property The name of the property to be manipulated
   *
   * @member dat.controllers
   */
  var Controller = function Controller(object, property) {
    this.initialValue = object[property];
    /**
     * Those who extend this class will put their DOM elements in here.
     * @type {DOMElement}
     */

    this.domElement = document.createElement('div');
    /**
     * The object to manipulate
     * @type {Object}
     */

    this.object = object;
    /**
     * The name of the property to manipulate
     * @type {String}
     */

    this.property = property;
    /**
     * The function to be called on change.
     * @type {Function}
     * @ignore
     */

    this.__onChange = undefined;
    /**
     * The function to be called on finishing change.
     * @type {Function}
     * @ignore
     */

    this.__onFinishChange = undefined;
  };

  common.extend(Controller.prototype,
  /** @lends dat.controllers.Controller.prototype */
  {
    /**
     * Specify that a function fire every time someone changes the value with
     * this Controller.
     *
     * @param {Function} fnc This function will be called whenever the value
     * is modified via this Controller.
     * @returns {dat.controllers.Controller} this
     */
    onChange: function onChange(fnc) {
      this.__onChange = fnc;
      return this;
    },

    /**
     * Specify that a function fire every time someone "finishes" changing
     * the value wih this Controller. Useful for values that change
     * incrementally like numbers or strings.
     *
     * @param {Function} fnc This function will be called whenever
     * someone "finishes" changing the value via this Controller.
     * @returns {dat.controllers.Controller} this
     */
    onFinishChange: function onFinishChange(fnc) {
      this.__onFinishChange = fnc;
      return this;
    },

    /**
     * Change the value of <code>object[property]</code>
     *
     * @param {Object} newValue The new value of <code>object[property]</code>
     */
    setValue: function setValue(newValue) {
      this.object[this.property] = newValue;

      if (this.__onChange) {
        this.__onChange.call(this, newValue);
      }

      this.updateDisplay();
      return this;
    },

    /**
     * Gets the value of <code>object[property]</code>
     *
     * @returns {Object} The current value of <code>object[property]</code>
     */
    getValue: function getValue() {
      return this.object[this.property];
    },

    /**
     * Refreshes the visual display of a Controller in order to keep sync
     * with the object's current value.
     * @returns {dat.controllers.Controller} this
     */
    updateDisplay: function updateDisplay() {
      return this;
    },

    /**
     * @returns {Boolean} true if the value has deviated from initialValue
     */
    isModified: function isModified() {
      return this.initialValue !== this.getValue();
    }
  });
  return Controller;
}(dat.utils.common);

dat.dom.dom = function (common) {
  var EVENT_MAP = {
    'HTMLEvents': ['change'],
    'MouseEvents': ['click', 'mousemove', 'mousedown', 'mouseup', 'mouseover'],
    'KeyboardEvents': ['keydown']
  };
  var EVENT_MAP_INV = {};
  common.each(EVENT_MAP, function (v, k) {
    common.each(v, function (e) {
      EVENT_MAP_INV[e] = k;
    });
  });
  var CSS_VALUE_PIXELS = /(\d+(\.\d+)?)px/;

  function cssValueToPixels(val) {
    if (val === '0' || common.isUndefined(val)) return 0;
    var match = val.match(CSS_VALUE_PIXELS);

    if (!common.isNull(match)) {
      return parseFloat(match[1]);
    } // TODO ...ems? %?


    return 0;
  }
  /**
   * @namespace
   * @member dat.dom
   */


  var dom = {
    /**
     * 
     * @param elem
     * @param selectable
     */
    makeSelectable: function makeSelectable(elem, selectable) {
      if (elem === undefined || elem.style === undefined) return;
      elem.onselectstart = selectable ? function () {
        return false;
      } : function () {};
      elem.style.MozUserSelect = selectable ? 'auto' : 'none';
      elem.style.KhtmlUserSelect = selectable ? 'auto' : 'none';
      elem.unselectable = selectable ? 'on' : 'off';
    },

    /**
     *
     * @param elem
     * @param horizontal
     * @param vertical
     */
    makeFullscreen: function makeFullscreen(elem, horizontal, vertical) {
      if (common.isUndefined(horizontal)) horizontal = true;
      if (common.isUndefined(vertical)) vertical = true;
      elem.style.position = 'absolute';

      if (horizontal) {
        elem.style.left = 0;
        elem.style.right = 0;
      }

      if (vertical) {
        elem.style.top = 0;
        elem.style.bottom = 0;
      }
    },

    /**
     *
     * @param elem
     * @param eventType
     * @param params
     */
    fakeEvent: function fakeEvent(elem, eventType, params, aux) {
      params = params || {};
      var className = EVENT_MAP_INV[eventType];

      if (!className) {
        throw new Error('Event type ' + eventType + ' not supported.');
      }

      var evt = document.createEvent(className);

      switch (className) {
        case 'MouseEvents':
          var clientX = params.x || params.clientX || 0;
          var clientY = params.y || params.clientY || 0;
          evt.initMouseEvent(eventType, params.bubbles || false, params.cancelable || true, window, params.clickCount || 1, 0, //screen X
          0, //screen Y
          clientX, //client X
          clientY, //client Y
          false, false, false, false, 0, null);
          break;

        case 'KeyboardEvents':
          var init = evt.initKeyboardEvent || evt.initKeyEvent; // webkit || moz

          common.defaults(params, {
            cancelable: true,
            ctrlKey: false,
            altKey: false,
            shiftKey: false,
            metaKey: false,
            keyCode: undefined,
            charCode: undefined
          });
          init(eventType, params.bubbles || false, params.cancelable, window, params.ctrlKey, params.altKey, params.shiftKey, params.metaKey, params.keyCode, params.charCode);
          break;

        default:
          evt.initEvent(eventType, params.bubbles || false, params.cancelable || true);
          break;
      }

      common.defaults(evt, aux);
      elem.dispatchEvent(evt);
    },

    /**
     *
     * @param elem
     * @param event
     * @param func
     * @param bool
     */
    bind: function bind(elem, event, func, bool) {
      bool = bool || false;
      if (elem.addEventListener) elem.addEventListener(event, func, bool);else if (elem.attachEvent) elem.attachEvent('on' + event, func);
      return dom;
    },

    /**
     *
     * @param elem
     * @param event
     * @param func
     * @param bool
     */
    unbind: function unbind(elem, event, func, bool) {
      bool = bool || false;
      if (elem.removeEventListener) elem.removeEventListener(event, func, bool);else if (elem.detachEvent) elem.detachEvent('on' + event, func);
      return dom;
    },

    /**
     *
     * @param elem
     * @param className
     */
    addClass: function addClass(elem, className) {
      if (elem.className === undefined) {
        elem.className = className;
      } else if (elem.className !== className) {
        var classes = elem.className.split(/ +/);

        if (classes.indexOf(className) == -1) {
          classes.push(className);
          elem.className = classes.join(' ').replace(/^\s+/, '').replace(/\s+$/, '');
        }
      }

      return dom;
    },

    /**
     *
     * @param elem
     * @param className
     */
    removeClass: function removeClass(elem, className) {
      if (className) {
        if (elem.className === undefined) {// elem.className = className;
        } else if (elem.className === className) {
          elem.removeAttribute('class');
        } else {
          var classes = elem.className.split(/ +/);
          var index = classes.indexOf(className);

          if (index != -1) {
            classes.splice(index, 1);
            elem.className = classes.join(' ');
          }
        }
      } else {
        elem.className = undefined;
      }

      return dom;
    },
    hasClass: function hasClass(elem, className) {
      return new RegExp('(?:^|\\s+)' + className + '(?:\\s+|$)').test(elem.className) || false;
    },

    /**
     *
     * @param elem
     */
    getWidth: function getWidth(elem) {
      var style = getComputedStyle(elem);
      return cssValueToPixels(style['border-left-width']) + cssValueToPixels(style['border-right-width']) + cssValueToPixels(style['padding-left']) + cssValueToPixels(style['padding-right']) + cssValueToPixels(style['width']);
    },

    /**
     *
     * @param elem
     */
    getHeight: function getHeight(elem) {
      var style = getComputedStyle(elem);
      return cssValueToPixels(style['border-top-width']) + cssValueToPixels(style['border-bottom-width']) + cssValueToPixels(style['padding-top']) + cssValueToPixels(style['padding-bottom']) + cssValueToPixels(style['height']);
    },

    /**
     *
     * @param elem
     */
    getOffset: function getOffset(elem) {
      var offset = {
        left: 0,
        top: 0
      };

      if (elem.offsetParent) {
        do {
          offset.left += elem.offsetLeft;
          offset.top += elem.offsetTop;
        } while (elem = elem.offsetParent);
      }

      return offset;
    },
    // http://stackoverflow.com/posts/2684561/revisions

    /**
     * 
     * @param elem
     */
    isActive: function isActive(elem) {
      return elem === document.activeElement && (elem.type || elem.href);
    }
  };
  return dom;
}(dat.utils.common);

dat.controllers.OptionController = function (Controller, dom, common) {
  /**
   * @class Provides a select input to alter the property of an object, using a
   * list of accepted values.
   *
   * @extends dat.controllers.Controller
   *
   * @param {Object} object The object to be manipulated
   * @param {string} property The name of the property to be manipulated
   * @param {Object|string[]} options A map of labels to acceptable values, or
   * a list of acceptable string values.
   *
   * @member dat.controllers
   */
  var OptionController = function OptionController(object, property, options) {
    OptionController.superclass.call(this, object, property);

    var _this = this;
    /**
     * The drop down menu
     * @ignore
     */


    this.__select = document.createElement('select');

    if (common.isArray(options)) {
      var map = {};
      common.each(options, function (element) {
        map[element] = element;
      });
      options = map;
    }

    common.each(options, function (value, key) {
      var opt = document.createElement('option');
      opt.innerHTML = key;
      opt.setAttribute('value', value);

      _this.__select.appendChild(opt);
    }); // Acknowledge original value

    this.updateDisplay();
    dom.bind(this.__select, 'change', function () {
      var desiredValue = this.options[this.selectedIndex].value;

      _this.setValue(desiredValue);
    });
    this.domElement.appendChild(this.__select);
  };

  OptionController.superclass = Controller;
  common.extend(OptionController.prototype, Controller.prototype, {
    setValue: function setValue(v) {
      var toReturn = OptionController.superclass.prototype.setValue.call(this, v);

      if (this.__onFinishChange) {
        this.__onFinishChange.call(this, this.getValue());
      }

      return toReturn;
    },
    updateDisplay: function updateDisplay() {
      this.__select.value = this.getValue();
      return OptionController.superclass.prototype.updateDisplay.call(this);
    }
  });
  return OptionController;
}(dat.controllers.Controller, dat.dom.dom, dat.utils.common);

dat.controllers.NumberController = function (Controller, common) {
  /**
   * @class Represents a given property of an object that is a number.
   *
   * @extends dat.controllers.Controller
   *
   * @param {Object} object The object to be manipulated
   * @param {string} property The name of the property to be manipulated
   * @param {Object} [params] Optional parameters
   * @param {Number} [params.min] Minimum allowed value
   * @param {Number} [params.max] Maximum allowed value
   * @param {Number} [params.step] Increment by which to change value
   *
   * @member dat.controllers
   */
  var NumberController = function NumberController(object, property, params) {
    NumberController.superclass.call(this, object, property);
    params = params || {};
    this.__min = params.min;
    this.__max = params.max;
    this.__step = params.step;

    if (common.isUndefined(this.__step)) {
      if (this.initialValue == 0) {
        this.__impliedStep = 0.1; // What are we, psychics?
      } else {
        // Hey Doug, check this out.
        this.__impliedStep = Math.pow(10, Math.floor(Math.log(Math.abs(this.initialValue)) / Math.LN10)) / 10;
      }
    } else {
      this.__impliedStep = this.__step;
    }

    this.__precision = numDecimals(this.__impliedStep);
  };

  NumberController.superclass = Controller;
  common.extend(NumberController.prototype, Controller.prototype,
  /** @lends dat.controllers.NumberController.prototype */
  {
    setValue: function setValue(v) {
      if (this.__min !== undefined && v < this.__min) {
        v = this.__min;
      } else if (this.__max !== undefined && v > this.__max) {
        v = this.__max;
      }

      if (this.__step !== undefined && v % this.__step != 0) {
        v = Math.round(v / this.__step) * this.__step;
      }

      return NumberController.superclass.prototype.setValue.call(this, v);
    },

    /**
     * Specify a minimum value for <code>object[property]</code>.
     *
     * @param {Number} minValue The minimum value for
     * <code>object[property]</code>
     * @returns {dat.controllers.NumberController} this
     */
    min: function min(v) {
      this.__min = v;
      return this;
    },

    /**
     * Specify a maximum value for <code>object[property]</code>.
     *
     * @param {Number} maxValue The maximum value for
     * <code>object[property]</code>
     * @returns {dat.controllers.NumberController} this
     */
    max: function max(v) {
      this.__max = v;
      return this;
    },

    /**
     * Specify a step value that dat.controllers.NumberController
     * increments by.
     *
     * @param {Number} stepValue The step value for
     * dat.controllers.NumberController
     * @default if minimum and maximum specified increment is 1% of the
     * difference otherwise stepValue is 1
     * @returns {dat.controllers.NumberController} this
     */
    step: function step(v) {
      this.__step = v;
      this.__impliedStep = v;
      this.__precision = numDecimals(v);
      return this;
    }
  });

  function numDecimals(x) {
    x = x.toString();

    if (x.indexOf('.') > -1) {
      return x.length - x.indexOf('.') - 1;
    } else {
      return 0;
    }
  }

  return NumberController;
}(dat.controllers.Controller, dat.utils.common);

dat.controllers.NumberControllerBox = function (NumberController, dom, common) {
  /**
   * @class Represents a given property of an object that is a number and
   * provides an input element with which to manipulate it.
   *
   * @extends dat.controllers.Controller
   * @extends dat.controllers.NumberController
   *
   * @param {Object} object The object to be manipulated
   * @param {string} property The name of the property to be manipulated
   * @param {Object} [params] Optional parameters
   * @param {Number} [params.min] Minimum allowed value
   * @param {Number} [params.max] Maximum allowed value
   * @param {Number} [params.step] Increment by which to change value
   *
   * @member dat.controllers
   */
  var NumberControllerBox = function NumberControllerBox(object, property, params) {
    this.__truncationSuspended = false;
    NumberControllerBox.superclass.call(this, object, property, params);

    var _this = this;
    /**
     * {Number} Previous mouse y position
     * @ignore
     */


    var prev_y;
    this.__input = document.createElement('input');

    this.__input.setAttribute('type', 'text'); // Makes it so manually specified values are not truncated.


    dom.bind(this.__input, 'change', onChange);
    dom.bind(this.__input, 'blur', onBlur);
    dom.bind(this.__input, 'mousedown', onMouseDown);
    dom.bind(this.__input, 'keydown', function (e) {
      // When pressing entire, you can be as precise as you want.
      if (e.keyCode === 13) {
        _this.__truncationSuspended = true;
        this.blur();
        _this.__truncationSuspended = false;
      }
    });

    function onChange() {
      var attempted = parseFloat(_this.__input.value);
      if (!common.isNaN(attempted)) _this.setValue(attempted);
    }

    function onBlur() {
      onChange();

      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }

    function onMouseDown(e) {
      dom.bind(window, 'mousemove', onMouseDrag);
      dom.bind(window, 'mouseup', onMouseUp);
      prev_y = e.clientY;
    }

    function onMouseDrag(e) {
      var diff = prev_y - e.clientY;

      _this.setValue(_this.getValue() + diff * _this.__impliedStep);

      prev_y = e.clientY;
    }

    function onMouseUp() {
      dom.unbind(window, 'mousemove', onMouseDrag);
      dom.unbind(window, 'mouseup', onMouseUp);
    }

    this.updateDisplay();
    this.domElement.appendChild(this.__input);
  };

  NumberControllerBox.superclass = NumberController;
  common.extend(NumberControllerBox.prototype, NumberController.prototype, {
    updateDisplay: function updateDisplay() {
      this.__input.value = this.__truncationSuspended ? this.getValue() : roundToDecimal(this.getValue(), this.__precision);
      return NumberControllerBox.superclass.prototype.updateDisplay.call(this);
    }
  });

  function roundToDecimal(value, decimals) {
    var tenTo = Math.pow(10, decimals);
    return Math.round(value * tenTo) / tenTo;
  }

  return NumberControllerBox;
}(dat.controllers.NumberController, dat.dom.dom, dat.utils.common);

dat.controllers.NumberControllerSlider = function (NumberController, dom, css, common, styleSheet) {
  /**
   * @class Represents a given property of an object that is a number, contains
   * a minimum and maximum, and provides a slider element with which to
   * manipulate it. It should be noted that the slider element is made up of
   * <code>&lt;div&gt;</code> tags, <strong>not</strong> the html5
   * <code>&lt;slider&gt;</code> element.
   *
   * @extends dat.controllers.Controller
   * @extends dat.controllers.NumberController
   * 
   * @param {Object} object The object to be manipulated
   * @param {string} property The name of the property to be manipulated
   * @param {Number} minValue Minimum allowed value
   * @param {Number} maxValue Maximum allowed value
   * @param {Number} stepValue Increment by which to change value
   *
   * @member dat.controllers
   */
  var NumberControllerSlider = function NumberControllerSlider(object, property, min, max, step) {
    NumberControllerSlider.superclass.call(this, object, property, {
      min: min,
      max: max,
      step: step
    });

    var _this = this;

    this.__background = document.createElement('div');
    this.__foreground = document.createElement('div');
    dom.bind(this.__background, 'mousedown', onMouseDown);
    dom.addClass(this.__background, 'slider');
    dom.addClass(this.__foreground, 'slider-fg');

    function onMouseDown(e) {
      dom.bind(window, 'mousemove', onMouseDrag);
      dom.bind(window, 'mouseup', onMouseUp);
      onMouseDrag(e);
    }

    function onMouseDrag(e) {
      e.preventDefault();
      var offset = dom.getOffset(_this.__background);
      var width = dom.getWidth(_this.__background);

      _this.setValue(map(e.clientX, offset.left, offset.left + width, _this.__min, _this.__max));

      return false;
    }

    function onMouseUp() {
      dom.unbind(window, 'mousemove', onMouseDrag);
      dom.unbind(window, 'mouseup', onMouseUp);

      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }

    this.updateDisplay();

    this.__background.appendChild(this.__foreground);

    this.domElement.appendChild(this.__background);
  };

  NumberControllerSlider.superclass = NumberController;
  /**
   * Injects default stylesheet for slider elements.
   */

  NumberControllerSlider.useDefaultStyles = function () {
    css.inject(styleSheet);
  };

  common.extend(NumberControllerSlider.prototype, NumberController.prototype, {
    updateDisplay: function updateDisplay() {
      var pct = (this.getValue() - this.__min) / (this.__max - this.__min);

      this.__foreground.style.width = pct * 100 + '%';
      return NumberControllerSlider.superclass.prototype.updateDisplay.call(this);
    }
  });

  function map(v, i1, i2, o1, o2) {
    return o1 + (o2 - o1) * ((v - i1) / (i2 - i1));
  }

  return NumberControllerSlider;
}(dat.controllers.NumberController, dat.dom.dom, dat.utils.css, dat.utils.common, "/**\n * dat-gui JavaScript Controller Library\n * http://code.google.com/p/dat-gui\n *\n * Copyright 2011 Data Arts Team, Google Creative Lab\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n */\n\n.slider {\n  box-shadow: inset 0 2px 4px rgba(0,0,0,0.15);\n  height: 1em;\n  border-radius: 1em;\n  background-color: #eee;\n  padding: 0 0.5em;\n  overflow: hidden;\n}\n\n.slider-fg {\n  padding: 1px 0 2px 0;\n  background-color: #aaa;\n  height: 1em;\n  margin-left: -0.5em;\n  padding-right: 0.5em;\n  border-radius: 1em 0 0 1em;\n}\n\n.slider-fg:after {\n  display: inline-block;\n  border-radius: 1em;\n  background-color: #fff;\n  border:  1px solid #aaa;\n  content: '';\n  float: right;\n  margin-right: -1em;\n  margin-top: -1px;\n  height: 0.9em;\n  width: 0.9em;\n}");

dat.controllers.FunctionController = function (Controller, dom, common) {
  /**
   * @class Provides a GUI interface to fire a specified method, a property of an object.
   *
   * @extends dat.controllers.Controller
   *
   * @param {Object} object The object to be manipulated
   * @param {string} property The name of the property to be manipulated
   *
   * @member dat.controllers
   */
  var FunctionController = function FunctionController(object, property, text) {
    FunctionController.superclass.call(this, object, property);

    var _this = this;

    this.__button = document.createElement('div');
    this.__button.innerHTML = text === undefined ? 'Fire' : text;
    dom.bind(this.__button, 'click', function (e) {
      e.preventDefault();

      _this.fire();

      return false;
    });
    dom.addClass(this.__button, 'button');
    this.domElement.appendChild(this.__button);
  };

  FunctionController.superclass = Controller;
  common.extend(FunctionController.prototype, Controller.prototype, {
    fire: function fire() {
      if (this.__onChange) {
        this.__onChange.call(this);
      }

      if (this.__onFinishChange) {
        this.__onFinishChange.call(this, this.getValue());
      }

      this.getValue().call(this.object);
    }
  });
  return FunctionController;
}(dat.controllers.Controller, dat.dom.dom, dat.utils.common);

dat.controllers.BooleanController = function (Controller, dom, common) {
  /**
   * @class Provides a checkbox input to alter the boolean property of an object.
   * @extends dat.controllers.Controller
   *
   * @param {Object} object The object to be manipulated
   * @param {string} property The name of the property to be manipulated
   *
   * @member dat.controllers
   */
  var BooleanController = function BooleanController(object, property) {
    BooleanController.superclass.call(this, object, property);

    var _this = this;

    this.__prev = this.getValue();
    this.__checkbox = document.createElement('input');

    this.__checkbox.setAttribute('type', 'checkbox');

    dom.bind(this.__checkbox, 'change', onChange, false);
    this.domElement.appendChild(this.__checkbox); // Match original value

    this.updateDisplay();

    function onChange() {
      _this.setValue(!_this.__prev);
    }
  };

  BooleanController.superclass = Controller;
  common.extend(BooleanController.prototype, Controller.prototype, {
    setValue: function setValue(v) {
      var toReturn = BooleanController.superclass.prototype.setValue.call(this, v);

      if (this.__onFinishChange) {
        this.__onFinishChange.call(this, this.getValue());
      }

      this.__prev = this.getValue();
      return toReturn;
    },
    updateDisplay: function updateDisplay() {
      if (this.getValue() === true) {
        this.__checkbox.setAttribute('checked', 'checked');

        this.__checkbox.checked = true;
      } else {
        this.__checkbox.checked = false;
      }

      return BooleanController.superclass.prototype.updateDisplay.call(this);
    }
  });
  return BooleanController;
}(dat.controllers.Controller, dat.dom.dom, dat.utils.common);

dat.color.toString = function (common) {
  return function (color) {
    if (color.a == 1 || common.isUndefined(color.a)) {
      var s = color.hex.toString(16);

      while (s.length < 6) {
        s = '0' + s;
      }

      return '#' + s;
    } else {
      return 'rgba(' + Math.round(color.r) + ',' + Math.round(color.g) + ',' + Math.round(color.b) + ',' + color.a + ')';
    }
  };
}(dat.utils.common);

dat.color.interpret = function (toString, common) {
  var result, toReturn;

  var interpret = function interpret() {
    toReturn = false;
    var original = arguments.length > 1 ? common.toArray(arguments) : arguments[0];
    common.each(INTERPRETATIONS, function (family) {
      if (family.litmus(original)) {
        common.each(family.conversions, function (conversion, conversionName) {
          result = conversion.read(original);

          if (toReturn === false && result !== false) {
            toReturn = result;
            result.conversionName = conversionName;
            result.conversion = conversion;
            return common.BREAK;
          }
        });
        return common.BREAK;
      }
    });
    return toReturn;
  };

  var INTERPRETATIONS = [// Strings
  {
    litmus: common.isString,
    conversions: {
      THREE_CHAR_HEX: {
        read: function read(original) {
          var test = original.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
          if (test === null) return false;
          return {
            space: 'HEX',
            hex: parseInt('0x' + test[1].toString() + test[1].toString() + test[2].toString() + test[2].toString() + test[3].toString() + test[3].toString())
          };
        },
        write: toString
      },
      SIX_CHAR_HEX: {
        read: function read(original) {
          var test = original.match(/^#([A-F0-9]{6})$/i);
          if (test === null) return false;
          return {
            space: 'HEX',
            hex: parseInt('0x' + test[1].toString())
          };
        },
        write: toString
      },
      CSS_RGB: {
        read: function read(original) {
          var test = original.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
          if (test === null) return false;
          return {
            space: 'RGB',
            r: parseFloat(test[1]),
            g: parseFloat(test[2]),
            b: parseFloat(test[3])
          };
        },
        write: toString
      },
      CSS_RGBA: {
        read: function read(original) {
          var test = original.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\,\s*(.+)\s*\)/);
          if (test === null) return false;
          return {
            space: 'RGB',
            r: parseFloat(test[1]),
            g: parseFloat(test[2]),
            b: parseFloat(test[3]),
            a: parseFloat(test[4])
          };
        },
        write: toString
      }
    }
  }, // Numbers
  {
    litmus: common.isNumber,
    conversions: {
      HEX: {
        read: function read(original) {
          return {
            space: 'HEX',
            hex: original,
            conversionName: 'HEX'
          };
        },
        write: function write(color) {
          return color.hex;
        }
      }
    }
  }, // Arrays
  {
    litmus: common.isArray,
    conversions: {
      RGB_ARRAY: {
        read: function read(original) {
          if (original.length != 3) return false;
          return {
            space: 'RGB',
            r: original[0],
            g: original[1],
            b: original[2]
          };
        },
        write: function write(color) {
          return [color.r, color.g, color.b];
        }
      },
      RGBA_ARRAY: {
        read: function read(original) {
          if (original.length != 4) return false;
          return {
            space: 'RGB',
            r: original[0],
            g: original[1],
            b: original[2],
            a: original[3]
          };
        },
        write: function write(color) {
          return [color.r, color.g, color.b, color.a];
        }
      }
    }
  }, // Objects
  {
    litmus: common.isObject,
    conversions: {
      RGBA_OBJ: {
        read: function read(original) {
          if (common.isNumber(original.r) && common.isNumber(original.g) && common.isNumber(original.b) && common.isNumber(original.a)) {
            return {
              space: 'RGB',
              r: original.r,
              g: original.g,
              b: original.b,
              a: original.a
            };
          }

          return false;
        },
        write: function write(color) {
          return {
            r: color.r,
            g: color.g,
            b: color.b,
            a: color.a
          };
        }
      },
      RGB_OBJ: {
        read: function read(original) {
          if (common.isNumber(original.r) && common.isNumber(original.g) && common.isNumber(original.b)) {
            return {
              space: 'RGB',
              r: original.r,
              g: original.g,
              b: original.b
            };
          }

          return false;
        },
        write: function write(color) {
          return {
            r: color.r,
            g: color.g,
            b: color.b
          };
        }
      },
      HSVA_OBJ: {
        read: function read(original) {
          if (common.isNumber(original.h) && common.isNumber(original.s) && common.isNumber(original.v) && common.isNumber(original.a)) {
            return {
              space: 'HSV',
              h: original.h,
              s: original.s,
              v: original.v,
              a: original.a
            };
          }

          return false;
        },
        write: function write(color) {
          return {
            h: color.h,
            s: color.s,
            v: color.v,
            a: color.a
          };
        }
      },
      HSV_OBJ: {
        read: function read(original) {
          if (common.isNumber(original.h) && common.isNumber(original.s) && common.isNumber(original.v)) {
            return {
              space: 'HSV',
              h: original.h,
              s: original.s,
              v: original.v
            };
          }

          return false;
        },
        write: function write(color) {
          return {
            h: color.h,
            s: color.s,
            v: color.v
          };
        }
      }
    }
  }];
  return interpret;
}(dat.color.toString, dat.utils.common);

dat.GUI = dat.gui.GUI = function (css, saveDialogueContents, styleSheet, controllerFactory, Controller, BooleanController, FunctionController, NumberControllerBox, NumberControllerSlider, OptionController, ColorController, requestAnimationFrame, CenteredDiv, dom, common) {
  css.inject(styleSheet);
  /** Outer-most className for GUI's */

  var CSS_NAMESPACE = 'dg';
  var HIDE_KEY_CODE = 72;
  /** The only value shared between the JS and SCSS. Use caution. */

  var CLOSE_BUTTON_HEIGHT = 20;
  var DEFAULT_DEFAULT_PRESET_NAME = 'Default';

  var SUPPORTS_LOCAL_STORAGE = function () {
    try {
      return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
      return false;
    }
  }();

  var SAVE_DIALOGUE;
  /** Have we yet to create an autoPlace GUI? */

  var auto_place_virgin = true;
  /** Fixed position div that auto place GUI's go inside */

  var auto_place_container;
  /** Are we hiding the GUI's ? */

  var hide = false;
  /** GUI's which should be hidden */

  var hideable_guis = [];
  /**
   * A lightweight controller library for JavaScript. It allows you to easily
   * manipulate variables and fire functions on the fly.
   * @class
   *
   * @member dat.gui
   *
   * @param {Object} [params]
   * @param {String} [params.name] The name of this GUI.
   * @param {Object} [params.load] JSON object representing the saved state of
   * this GUI.
   * @param {Boolean} [params.auto=true]
   * @param {dat.gui.GUI} [params.parent] The GUI I'm nested in.
   * @param {Boolean} [params.closed] If true, starts closed
   */

  var GUI = function GUI(params) {
    var _this = this;
    /**
     * Outermost DOM Element
     * @type DOMElement
     */


    this.domElement = document.createElement('div');
    this.__ul = document.createElement('ul');
    this.domElement.appendChild(this.__ul);
    dom.addClass(this.domElement, CSS_NAMESPACE);
    /**
     * Nested GUI's by name
     * @ignore
     */

    this.__folders = {};
    this.__controllers = [];
    /**
     * List of objects I'm remembering for save, only used in top level GUI
     * @ignore
     */

    this.__rememberedObjects = [];
    /**
     * Maps the index of remembered objects to a map of controllers, only used
     * in top level GUI.
     *
     * @private
     * @ignore
     *
     * @example
     * [
     *  {
     *    propertyName: Controller,
     *    anotherPropertyName: Controller
     *  },
     *  {
     *    propertyName: Controller
     *  }
     * ]
     */

    this.__rememberedObjectIndecesToControllers = [];
    this.__listening = [];
    params = params || {}; // Default parameters

    params = common.defaults(params, {
      autoPlace: true,
      width: GUI.DEFAULT_WIDTH
    });
    params = common.defaults(params, {
      resizable: params.autoPlace,
      hideable: params.autoPlace
    });

    if (!common.isUndefined(params.load)) {
      // Explicit preset
      if (params.preset) params.load.preset = params.preset;
    } else {
      params.load = {
        preset: DEFAULT_DEFAULT_PRESET_NAME
      };
    }

    if (common.isUndefined(params.parent) && params.hideable) {
      hideable_guis.push(this);
    } // Only root level GUI's are resizable.


    params.resizable = common.isUndefined(params.parent) && params.resizable;

    if (params.autoPlace && common.isUndefined(params.scrollable)) {
      params.scrollable = true;
    } //    params.scrollable = common.isUndefined(params.parent) && params.scrollable === true;
    // Not part of params because I don't want people passing this in via
    // constructor. Should be a 'remembered' value.


    var use_local_storage = SUPPORTS_LOCAL_STORAGE && localStorage.getItem(getLocalStorageHash(this, 'isLocal')) === 'true';
    var saveToLocalStorage;
    Object.defineProperties(this,
    /** @lends dat.gui.GUI.prototype */
    {
      /**
       * The parent <code>GUI</code>
       * @type dat.gui.GUI
       */
      parent: {
        get: function get() {
          return params.parent;
        }
      },
      scrollable: {
        get: function get() {
          return params.scrollable;
        }
      },

      /**
       * Handles <code>GUI</code>'s element placement for you
       * @type Boolean
       */
      autoPlace: {
        get: function get() {
          return params.autoPlace;
        }
      },

      /**
       * The identifier for a set of saved values
       * @type String
       */
      preset: {
        get: function get() {
          if (_this.parent) {
            return _this.getRoot().preset;
          } else {
            return params.load.preset;
          }
        },
        set: function set(v) {
          if (_this.parent) {
            _this.getRoot().preset = v;
          } else {
            params.load.preset = v;
          }

          setPresetSelectIndex(this);

          _this.revert();
        }
      },

      /**
       * The width of <code>GUI</code> element
       * @type Number
       */
      width: {
        get: function get() {
          return params.width;
        },
        set: function set(v) {
          params.width = v;
          setWidth(_this, v);
        }
      },

      /**
       * The name of <code>GUI</code>. Used for folders. i.e
       * a folder's name
       * @type String
       */
      name: {
        get: function get() {
          return params.name;
        },
        set: function set(v) {
          // TODO Check for collisions among sibling folders
          params.name = v;

          if (title_row_name) {
            title_row_name.innerHTML = params.name;
          }
        }
      },

      /**
       * Whether the <code>GUI</code> is collapsed or not
       * @type Boolean
       */
      closed: {
        get: function get() {
          return params.closed;
        },
        set: function set(v) {
          params.closed = v;

          if (params.closed) {
            dom.addClass(_this.__ul, GUI.CLASS_CLOSED);
          } else {
            dom.removeClass(_this.__ul, GUI.CLASS_CLOSED);
          } // For browsers that aren't going to respect the CSS transition,
          // Lets just check our height against the window height right off
          // the bat.


          this.onResize();

          if (_this.__closeButton) {
            _this.__closeButton.innerHTML = v ? GUI.TEXT_OPEN : GUI.TEXT_CLOSED;
          }
        }
      },

      /**
       * Contains all presets
       * @type Object
       */
      load: {
        get: function get() {
          return params.load;
        }
      },

      /**
       * Determines whether or not to use <a href="https://developer.mozilla.org/en/DOM/Storage#localStorage">localStorage</a> as the means for
       * <code>remember</code>ing
       * @type Boolean
       */
      useLocalStorage: {
        get: function get() {
          return use_local_storage;
        },
        set: function set(bool) {
          if (SUPPORTS_LOCAL_STORAGE) {
            use_local_storage = bool;

            if (bool) {
              dom.bind(window, 'unload', saveToLocalStorage);
            } else {
              dom.unbind(window, 'unload', saveToLocalStorage);
            }

            localStorage.setItem(getLocalStorageHash(_this, 'isLocal'), bool);
          }
        }
      }
    }); // Are we a root level GUI?

    if (common.isUndefined(params.parent)) {
      params.closed = false;
      dom.addClass(this.domElement, GUI.CLASS_MAIN);
      dom.makeSelectable(this.domElement, false); // Are we supposed to be loading locally?

      if (SUPPORTS_LOCAL_STORAGE) {
        if (use_local_storage) {
          _this.useLocalStorage = true;
          var saved_gui = localStorage.getItem(getLocalStorageHash(this, 'gui'));

          if (saved_gui) {
            params.load = JSON.parse(saved_gui);
          }
        }
      }

      this.__closeButton = document.createElement('div');
      this.__closeButton.innerHTML = GUI.TEXT_CLOSED;
      dom.addClass(this.__closeButton, GUI.CLASS_CLOSE_BUTTON);
      this.domElement.appendChild(this.__closeButton);
      dom.bind(this.__closeButton, 'click', function () {
        _this.closed = !_this.closed;
      }); // Oh, you're a nested GUI!
    } else {
      if (params.closed === undefined) {
        params.closed = true;
      }

      var title_row_name = document.createTextNode(params.name);
      dom.addClass(title_row_name, 'controller-name');
      var title_row = addRow(_this, title_row_name);

      var on_click_title = function on_click_title(e) {
        e.preventDefault();
        _this.closed = !_this.closed;
        return false;
      };

      dom.addClass(this.__ul, GUI.CLASS_CLOSED);
      dom.addClass(title_row, 'title');
      dom.bind(title_row, 'click', on_click_title);

      if (!params.closed) {
        this.closed = false;
      }
    }

    if (params.autoPlace) {
      if (common.isUndefined(params.parent)) {
        if (auto_place_virgin) {
          auto_place_container = document.createElement('div');
          dom.addClass(auto_place_container, CSS_NAMESPACE);
          dom.addClass(auto_place_container, GUI.CLASS_AUTO_PLACE_CONTAINER);
          document.body.appendChild(auto_place_container);
          auto_place_virgin = false;
        } // Put it in the dom for you.


        auto_place_container.appendChild(this.domElement); // Apply the auto styles

        dom.addClass(this.domElement, GUI.CLASS_AUTO_PLACE);
      } // Make it not elastic.


      if (!this.parent) setWidth(_this, params.width);
    }

    dom.bind(window, 'resize', function () {
      _this.onResize();
    });
    dom.bind(this.__ul, 'webkitTransitionEnd', function () {
      _this.onResize();
    });
    dom.bind(this.__ul, 'transitionend', function () {
      _this.onResize();
    });
    dom.bind(this.__ul, 'oTransitionEnd', function () {
      _this.onResize();
    });
    this.onResize();

    if (params.resizable) {
      addResizeHandle(this);
    }

    saveToLocalStorage = function saveToLocalStorage() {
      if (SUPPORTS_LOCAL_STORAGE && localStorage.getItem(getLocalStorageHash(_this, 'isLocal')) === 'true') {
        localStorage.setItem(getLocalStorageHash(_this, 'gui'), JSON.stringify(_this.getSaveObject()));
      }
    }; // expose this method publicly


    this.saveToLocalStorageIfPossible = saveToLocalStorage;

    var root = _this.getRoot();

    function resetWidth() {
      var root = _this.getRoot();

      root.width += 1;
      common.defer(function () {
        root.width -= 1;
      });
    }

    if (!params.parent) {
      resetWidth();
    }
  };

  GUI.toggleHide = function () {
    hide = !hide;
    common.each(hideable_guis, function (gui) {
      gui.domElement.style.zIndex = hide ? -999 : 999;
      gui.domElement.style.opacity = hide ? 0 : 1;
    });
  };

  GUI.CLASS_AUTO_PLACE = 'a';
  GUI.CLASS_AUTO_PLACE_CONTAINER = 'ac';
  GUI.CLASS_MAIN = 'main';
  GUI.CLASS_CONTROLLER_ROW = 'cr';
  GUI.CLASS_TOO_TALL = 'taller-than-window';
  GUI.CLASS_CLOSED = 'closed';
  GUI.CLASS_CLOSE_BUTTON = 'close-button';
  GUI.CLASS_DRAG = 'drag';
  GUI.DEFAULT_WIDTH = 245;
  GUI.TEXT_CLOSED = 'Close Controls';
  GUI.TEXT_OPEN = 'Open Controls';
  dom.bind(window, 'keydown', function (e) {
    if (document.activeElement.type !== 'text' && (e.which === HIDE_KEY_CODE || e.keyCode == HIDE_KEY_CODE)) {
      GUI.toggleHide();
    }
  }, false);
  common.extend(GUI.prototype,
  /** @lends dat.gui.GUI */
  {
    /**
     * @param object
     * @param property
     * @returns {dat.controllers.Controller} The new controller that was added.
     * @instance
     */
    add: function add(object, property) {
      return _add(this, object, property, {
        factoryArgs: Array.prototype.slice.call(arguments, 2)
      });
    },

    /**
     * @param object
     * @param property
     * @returns {dat.controllers.ColorController} The new controller that was added.
     * @instance
     */
    addColor: function addColor(object, property) {
      return _add(this, object, property, {
        color: true
      });
    },

    /**
     * @param controller
     * @instance
     */
    remove: function remove(controller) {
      // TODO listening?
      this.__ul.removeChild(controller.__li);

      this.__controllers.slice(this.__controllers.indexOf(controller), 1);

      var _this = this;

      common.defer(function () {
        _this.onResize();
      });
    },
    destroy: function destroy() {
      if (this.autoPlace) {
        auto_place_container.removeChild(this.domElement);
      }
    },

    /**
     * @param name
     * @returns {dat.gui.GUI} The new folder.
     * @throws {Error} if this GUI already has a folder by the specified
     * name
     * @instance
     */
    addFolder: function addFolder(name) {
      // We have to prevent collisions on names in order to have a key
      // by which to remember saved values
      if (this.__folders[name] !== undefined) {
        throw new Error('You already have a folder in this GUI by the' + ' name "' + name + '"');
      }

      var new_gui_params = {
        name: name,
        parent: this
      }; // We need to pass down the autoPlace trait so that we can
      // attach event listeners to open/close folder actions to
      // ensure that a scrollbar appears if the window is too short.

      new_gui_params.autoPlace = this.autoPlace; // Do we have saved appearance data for this folder?

      if (this.load && // Anything loaded?
      this.load.folders && // Was my parent a dead-end?
      this.load.folders[name]) {
        // Did daddy remember me?
        // Start me closed if I was closed
        new_gui_params.closed = this.load.folders[name].closed; // Pass down the loaded data

        new_gui_params.load = this.load.folders[name];
      }

      var gui = new GUI(new_gui_params);
      this.__folders[name] = gui;
      var li = addRow(this, gui.domElement);
      li.id = name;
      dom.addClass(li, 'folder');
      return gui;
    },
    open: function open() {
      this.closed = false;
    },
    close: function close() {
      this.closed = true;
    },
    onResize: function onResize() {
      var root = this.getRoot();

      if (root.scrollable) {
        var top = dom.getOffset(root.__ul).top;
        var h = 0;
        common.each(root.__ul.childNodes, function (node) {
          if (!(root.autoPlace && node === root.__save_row)) h += dom.getHeight(node);
        });

        if (window.innerHeight - top - CLOSE_BUTTON_HEIGHT < h) {
          dom.addClass(root.domElement, GUI.CLASS_TOO_TALL);
          root.__ul.style.height = window.innerHeight - top - CLOSE_BUTTON_HEIGHT + 'px';
        } else {
          dom.removeClass(root.domElement, GUI.CLASS_TOO_TALL);
          root.__ul.style.height = 'auto';
        }
      }

      if (root.__resize_handle) {
        common.defer(function () {
          root.__resize_handle.style.height = root.__ul.offsetHeight + 'px';
        });
      }

      if (root.__closeButton) {
        root.__closeButton.style.width = root.width + 'px';
      }
    },

    /**
     * Mark objects for saving. The order of these objects cannot change as
     * the GUI grows. When remembering new objects, append them to the end
     * of the list.
     *
     * @param {Object...} objects
     * @throws {Error} if not called on a top level GUI.
     * @instance
     */
    remember: function remember() {
      if (common.isUndefined(SAVE_DIALOGUE)) {
        SAVE_DIALOGUE = new CenteredDiv();
        SAVE_DIALOGUE.domElement.innerHTML = saveDialogueContents;
      }

      if (this.parent) {
        throw new Error("You can only call remember on a top level GUI.");
      }

      var _this = this;

      common.each(Array.prototype.slice.call(arguments), function (object) {
        if (_this.__rememberedObjects.length == 0) {
          addSaveMenu(_this);
        }

        if (_this.__rememberedObjects.indexOf(object) == -1) {
          _this.__rememberedObjects.push(object);
        }
      });

      if (this.autoPlace) {
        // Set save row width
        setWidth(this, this.width);
      }
    },

    /**
     * @returns {dat.gui.GUI} the topmost parent GUI of a nested GUI.
     * @instance
     */
    getRoot: function getRoot() {
      var gui = this;

      while (gui.parent) {
        gui = gui.parent;
      }

      return gui;
    },

    /**
     * @returns {Object} a JSON object representing the current state of
     * this GUI as well as its remembered properties.
     * @instance
     */
    getSaveObject: function getSaveObject() {
      var toReturn = this.load;
      toReturn.closed = this.closed; // Am I remembering any values?

      if (this.__rememberedObjects.length > 0) {
        toReturn.preset = this.preset;

        if (!toReturn.remembered) {
          toReturn.remembered = {};
        }

        toReturn.remembered[this.preset] = getCurrentPreset(this);
      }

      toReturn.folders = {};
      common.each(this.__folders, function (element, key) {
        toReturn.folders[key] = element.getSaveObject();
      });
      return toReturn;
    },
    save: function save() {
      if (!this.load.remembered) {
        this.load.remembered = {};
      }

      this.load.remembered[this.preset] = getCurrentPreset(this);
      markPresetModified(this, false);
      this.saveToLocalStorageIfPossible();
    },
    saveAs: function saveAs(presetName) {
      if (!this.load.remembered) {
        // Retain default values upon first save
        this.load.remembered = {};
        this.load.remembered[DEFAULT_DEFAULT_PRESET_NAME] = getCurrentPreset(this, true);
      }

      this.load.remembered[presetName] = getCurrentPreset(this);
      this.preset = presetName;
      addPresetOption(this, presetName, true);
      this.saveToLocalStorageIfPossible();
    },
    revert: function revert(gui) {
      common.each(this.__controllers, function (controller) {
        // Make revert work on Default.
        if (!this.getRoot().load.remembered) {
          controller.setValue(controller.initialValue);
        } else {
          recallSavedValue(gui || this.getRoot(), controller);
        }
      }, this);
      common.each(this.__folders, function (folder) {
        folder.revert(folder);
      });

      if (!gui) {
        markPresetModified(this.getRoot(), false);
      }
    },
    listen: function listen(controller) {
      var init = this.__listening.length == 0;

      this.__listening.push(controller);

      if (init) updateDisplays(this.__listening);
    }
  });

  function _add(gui, object, property, params) {
    if (object[property] === undefined) {
      throw new Error("Object " + object + " has no property \"" + property + "\"");
    }

    var controller;

    if (params.color) {
      controller = new ColorController(object, property);
    } else {
      var factoryArgs = [object, property].concat(params.factoryArgs);
      controller = controllerFactory.apply(gui, factoryArgs);
    }

    if (params.before instanceof Controller) {
      params.before = params.before.__li;
    }

    recallSavedValue(gui, controller);
    dom.addClass(controller.domElement, 'c');
    var name = document.createElement('span');
    dom.addClass(name, 'property-name');
    name.innerHTML = controller.property;
    var container = document.createElement('div');
    container.appendChild(name);
    container.appendChild(controller.domElement);
    var li = addRow(gui, container, params.before);
    var controllerVal = controller.getValue();
    dom.addClass(li, GUI.CLASS_CONTROLLER_ROW);
    dom.addClass(li, typeof controllerVal);

    if (typeof controllerVal === 'string') {
      var firstChr = controllerVal[0];
      var lastChr = controllerVal[controllerVal.length - 1];

      if (firstChr === '[' && lastChr === ']' || firstChr === '{' && lastChr === '}') {
        dom.addClass(li, 'text-box');
      }
    }

    augmentController(gui, li, controller);

    gui.__controllers.push(controller);

    return controller;
  }
  /**
   * Add a row to the end of the GUI or before another row.
   *
   * @param gui
   * @param [dom] If specified, inserts the dom content in the new row
   * @param [liBefore] If specified, places the new row before another row
   */


  function addRow(gui, dom, liBefore) {
    var li = document.createElement('li');
    if (dom) li.appendChild(dom);

    if (liBefore) {
      gui.__ul.insertBefore(li, params.before);
    } else {
      gui.__ul.appendChild(li);
    }

    gui.onResize();
    return li;
  }

  function augmentController(gui, li, controller) {
    controller.__li = li;
    controller.__gui = gui;
    common.extend(controller, {
      options: function options(_options) {
        if (arguments.length > 1) {
          controller.remove();
          return _add(gui, controller.object, controller.property, {
            before: controller.__li.nextElementSibling,
            factoryArgs: [common.toArray(arguments)]
          });
        }

        if (common.isArray(_options) || common.isObject(_options)) {
          controller.remove();
          return _add(gui, controller.object, controller.property, {
            before: controller.__li.nextElementSibling,
            factoryArgs: [_options]
          });
        }
      },
      name: function name(v) {
        controller.__li.firstElementChild.firstElementChild.innerHTML = v;
        return controller;
      },
      listen: function listen() {
        controller.__gui.listen(controller);

        return controller;
      },
      remove: function remove() {
        controller.__gui.remove(controller);

        return controller;
      }
    }); // All sliders should be accompanied by a box.

    if (controller instanceof NumberControllerSlider) {
      var box = new NumberControllerBox(controller.object, controller.property, {
        min: controller.__min,
        max: controller.__max,
        step: controller.__step
      });
      common.each(['updateDisplay', 'onChange', 'onFinishChange'], function (method) {
        var pc = controller[method];
        var pb = box[method];

        controller[method] = box[method] = function () {
          var args = Array.prototype.slice.call(arguments);
          pc.apply(controller, args);
          return pb.apply(box, args);
        };
      });
      dom.addClass(li, 'has-slider');
      controller.domElement.insertBefore(box.domElement, controller.domElement.firstElementChild);
    } else if (controller instanceof NumberControllerBox) {
      var r = function r(returned) {
        // Have we defined both boundaries?
        if (common.isNumber(controller.__min) && common.isNumber(controller.__max)) {
          // Well, then lets just replace this with a slider.
          controller.remove();
          return _add(gui, controller.object, controller.property, {
            before: controller.__li.nextElementSibling,
            factoryArgs: [controller.__min, controller.__max, controller.__step]
          });
        }

        return returned;
      };

      controller.min = common.compose(r, controller.min);
      controller.max = common.compose(r, controller.max);
    } else if (controller instanceof BooleanController) {
      dom.bind(li, 'click', function () {
        dom.fakeEvent(controller.__checkbox, 'click');
      });
      dom.bind(controller.__checkbox, 'click', function (e) {
        e.stopPropagation(); // Prevents double-toggle
      });
    } else if (controller instanceof FunctionController) {
      dom.bind(li, 'click', function () {
        dom.fakeEvent(controller.__button, 'click');
      });
      dom.bind(li, 'mouseover', function () {
        dom.addClass(controller.__button, 'hover');
      });
      dom.bind(li, 'mouseout', function () {
        dom.removeClass(controller.__button, 'hover');
      });
    } else if (controller instanceof ColorController) {
      dom.addClass(li, 'color');
      controller.updateDisplay = common.compose(function (r) {
        li.style.borderLeftColor = controller.__color.toString();
        return r;
      }, controller.updateDisplay);
      controller.updateDisplay();
    }

    controller.setValue = common.compose(function (r) {
      if (gui.getRoot().__preset_select && controller.isModified()) {
        markPresetModified(gui.getRoot(), true);
      }

      return r;
    }, controller.setValue);
  }

  function recallSavedValue(gui, controller) {
    // Find the topmost GUI, that's where remembered objects live.
    var root = gui.getRoot(); // Does the object we're controlling match anything we've been told to
    // remember?

    var matched_index = root.__rememberedObjects.indexOf(controller.object); // Why yes, it does!


    if (matched_index != -1) {
      // Let me fetch a map of controllers for thcommon.isObject.
      var controller_map = root.__rememberedObjectIndecesToControllers[matched_index]; // Ohp, I believe this is the first controller we've created for this
      // object. Lets make the map fresh.

      if (controller_map === undefined) {
        controller_map = {};
        root.__rememberedObjectIndecesToControllers[matched_index] = controller_map;
      } // Keep track of this controller


      controller_map[controller.property] = controller; // Okay, now have we saved any values for this controller?

      if (root.load && root.load.remembered) {
        var preset_map = root.load.remembered; // Which preset are we trying to load?

        var preset;

        if (preset_map[gui.preset]) {
          preset = preset_map[gui.preset];
        } else if (preset_map[DEFAULT_DEFAULT_PRESET_NAME]) {
          // Uhh, you can have the default instead?
          preset = preset_map[DEFAULT_DEFAULT_PRESET_NAME];
        } else {
          // Nada.
          return;
        } // Did the loaded object remember thcommon.isObject?


        if (preset[matched_index] && // Did we remember this particular property?
        preset[matched_index][controller.property] !== undefined) {
          // We did remember something for this guy ...
          var value = preset[matched_index][controller.property]; // And that's what it is.

          controller.initialValue = value;
          controller.setValue(value);
        }
      }
    }
  }

  function getLocalStorageHash(gui, key) {
    // TODO how does this deal with multiple GUI's?
    return document.location.href + '.' + key;
  }

  function addSaveMenu(gui) {
    var div = gui.__save_row = document.createElement('li');
    dom.addClass(gui.domElement, 'has-save');

    gui.__ul.insertBefore(div, gui.__ul.firstChild);

    dom.addClass(div, 'save-row');
    var gears = document.createElement('span');
    gears.innerHTML = '&nbsp;';
    dom.addClass(gears, 'button gears'); // TODO replace with FunctionController

    var button = document.createElement('span');
    button.innerHTML = 'Save';
    dom.addClass(button, 'button');
    dom.addClass(button, 'save');
    var button2 = document.createElement('span');
    button2.innerHTML = 'New';
    dom.addClass(button2, 'button');
    dom.addClass(button2, 'save-as');
    var button3 = document.createElement('span');
    button3.innerHTML = 'Revert';
    dom.addClass(button3, 'button');
    dom.addClass(button3, 'revert');
    var select = gui.__preset_select = document.createElement('select');

    if (gui.load && gui.load.remembered) {
      common.each(gui.load.remembered, function (value, key) {
        addPresetOption(gui, key, key == gui.preset);
      });
    } else {
      addPresetOption(gui, DEFAULT_DEFAULT_PRESET_NAME, false);
    }

    dom.bind(select, 'change', function () {
      for (var index = 0; index < gui.__preset_select.length; index++) {
        gui.__preset_select[index].innerHTML = gui.__preset_select[index].value;
      }

      gui.preset = this.value;
    });
    div.appendChild(select);
    div.appendChild(gears);
    div.appendChild(button);
    div.appendChild(button2);
    div.appendChild(button3);

    if (SUPPORTS_LOCAL_STORAGE) {
      var showHideExplain = function showHideExplain() {
        explain.style.display = gui.useLocalStorage ? 'block' : 'none';
      };

      var saveLocally = document.getElementById('dg-save-locally');
      var explain = document.getElementById('dg-local-explain');
      saveLocally.style.display = 'block';
      var localStorageCheckBox = document.getElementById('dg-local-storage');

      if (localStorage.getItem(getLocalStorageHash(gui, 'isLocal')) === 'true') {
        localStorageCheckBox.setAttribute('checked', 'checked');
      }

      showHideExplain(); // TODO: Use a boolean controller, fool!

      dom.bind(localStorageCheckBox, 'change', function () {
        gui.useLocalStorage = !gui.useLocalStorage;
        showHideExplain();
      });
    }

    var newConstructorTextArea = document.getElementById('dg-new-constructor');
    dom.bind(newConstructorTextArea, 'keydown', function (e) {
      if (e.metaKey && (e.which === 67 || e.keyCode == 67)) {
        SAVE_DIALOGUE.hide();
      }
    });
    dom.bind(gears, 'click', function () {
      newConstructorTextArea.innerHTML = JSON.stringify(gui.getSaveObject(), undefined, 2);
      SAVE_DIALOGUE.show();
      newConstructorTextArea.focus();
      newConstructorTextArea.select();
    });
    dom.bind(button, 'click', function () {
      gui.save();
    });
    dom.bind(button2, 'click', function () {
      var presetName = prompt('Enter a new preset name.');
      if (presetName) gui.saveAs(presetName);
    });
    dom.bind(button3, 'click', function () {
      gui.revert();
    }); //    div.appendChild(button2);
  }

  function addResizeHandle(gui) {
    gui.__resize_handle = document.createElement('div');
    common.extend(gui.__resize_handle.style, {
      width: '6px',
      marginLeft: '-3px',
      height: '200px',
      cursor: 'ew-resize',
      position: 'absolute' //      border: '1px solid blue'

    });
    var pmouseX;
    dom.bind(gui.__resize_handle, 'mousedown', dragStart);
    dom.bind(gui.__closeButton, 'mousedown', dragStart);
    gui.domElement.insertBefore(gui.__resize_handle, gui.domElement.firstElementChild);

    function dragStart(e) {
      e.preventDefault();
      pmouseX = e.clientX;
      dom.addClass(gui.__closeButton, GUI.CLASS_DRAG);
      dom.bind(window, 'mousemove', drag);
      dom.bind(window, 'mouseup', dragStop);
      return false;
    }

    function drag(e) {
      e.preventDefault();
      gui.width += pmouseX - e.clientX;
      gui.onResize();
      pmouseX = e.clientX;
      return false;
    }

    function dragStop() {
      dom.removeClass(gui.__closeButton, GUI.CLASS_DRAG);
      dom.unbind(window, 'mousemove', drag);
      dom.unbind(window, 'mouseup', dragStop);
    }
  }

  function setWidth(gui, w) {
    gui.domElement.style.width = w + 'px'; // Auto placed save-rows are position fixed, so we have to
    // set the width manually if we want it to bleed to the edge

    if (gui.__save_row && gui.autoPlace) {
      gui.__save_row.style.width = w + 'px';
    }

    if (gui.__closeButton) {
      gui.__closeButton.style.width = w + 'px';
    }
  }

  function getCurrentPreset(gui, useInitialValues) {
    var toReturn = {}; // For each object I'm remembering

    common.each(gui.__rememberedObjects, function (val, index) {
      var saved_values = {}; // The controllers I've made for thcommon.isObject by property

      var controller_map = gui.__rememberedObjectIndecesToControllers[index]; // Remember each value for each property

      common.each(controller_map, function (controller, property) {
        saved_values[property] = useInitialValues ? controller.initialValue : controller.getValue();
      }); // Save the values for thcommon.isObject

      toReturn[index] = saved_values;
    });
    return toReturn;
  }

  function addPresetOption(gui, name, setSelected) {
    var opt = document.createElement('option');
    opt.innerHTML = name;
    opt.value = name;

    gui.__preset_select.appendChild(opt);

    if (setSelected) {
      gui.__preset_select.selectedIndex = gui.__preset_select.length - 1;
    }
  }

  function setPresetSelectIndex(gui) {
    for (var index = 0; index < gui.__preset_select.length; index++) {
      if (gui.__preset_select[index].value == gui.preset) {
        gui.__preset_select.selectedIndex = index;
      }
    }
  }

  function markPresetModified(gui, modified) {
    var opt = gui.__preset_select[gui.__preset_select.selectedIndex]; //    console.log('mark', modified, opt);

    if (modified) {
      opt.innerHTML = opt.value + "*";
    } else {
      opt.innerHTML = opt.value;
    }
  }

  function updateDisplays(controllerArray) {
    if (controllerArray.length != 0) {
      requestAnimationFrame(function () {
        updateDisplays(controllerArray);
      });
    }

    common.each(controllerArray, function (c) {
      c.updateDisplay();
    });
  }

  return GUI;
}(dat.utils.css, "<div id=\"dg-save\" class=\"dg dialogue\">\n\n  Here's the new load parameter for your <code>GUI</code>'s constructor:\n\n  <textarea id=\"dg-new-constructor\"></textarea>\n\n  <div id=\"dg-save-locally\">\n\n    <input id=\"dg-local-storage\" type=\"checkbox\"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id=\"dg-local-explain\">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n      \n    </div>\n    \n  </div>\n\n</div>", ".dg {\n  /** Clear list styles */\n  /* Auto-place container */\n  /* Auto-placed GUI's */\n  /* Line items that don't contain folders. */\n  /** Folder names */\n  /** Hides closed items */\n  /** Controller row */\n  /** Name-half (left) */\n  /** Controller-half (right) */\n  /** Controller placement */\n  /** Shorter number boxes when slider is present. */\n  /** Ensure the entire boolean and function row shows a hand */ }\n  .dg ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    clear: both; }\n  .dg.ac {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 0;\n    z-index: 0; }\n  .dg:not(.ac) .main {\n    /** Exclude mains in ac so that we don't hide close button */\n    overflow: hidden; }\n  .dg.main {\n    -webkit-transition: opacity 0.1s linear;\n    -o-transition: opacity 0.1s linear;\n    -moz-transition: opacity 0.1s linear;\n    transition: opacity 0.1s linear; }\n    .dg.main.taller-than-window {\n      overflow-y: auto; }\n      .dg.main.taller-than-window .close-button {\n        opacity: 1;\n        /* TODO, these are style notes */\n        margin-top: -1px;\n        border-top: 1px solid #2c2c2c; }\n    .dg.main ul.closed .close-button {\n      opacity: 1 !important; }\n    .dg.main:hover .close-button,\n    .dg.main .close-button.drag {\n      opacity: 1; }\n    .dg.main .close-button {\n      /*opacity: 0;*/\n      -webkit-transition: opacity 0.1s linear;\n      -o-transition: opacity 0.1s linear;\n      -moz-transition: opacity 0.1s linear;\n      transition: opacity 0.1s linear;\n      border: 0;\n      position: absolute;\n      line-height: 19px;\n      height: 20px;\n      /* TODO, these are style notes */\n      cursor: pointer;\n      text-align: center;\n      background-color: #000; }\n      .dg.main .close-button:hover {\n        background-color: #111; }\n  .dg.a {\n    float: right;\n    margin-right: 15px;\n    overflow-x: hidden; }\n    .dg.a.has-save > ul {\n      margin-top: 27px; }\n      .dg.a.has-save > ul.closed {\n        margin-top: 0; }\n    .dg.a .save-row {\n      position: fixed;\n      top: 0;\n      z-index: 1002; }\n  .dg li {\n    -webkit-transition: height 0.1s ease-out;\n    -o-transition: height 0.1s ease-out;\n    -moz-transition: height 0.1s ease-out;\n    transition: height 0.1s ease-out; }\n  .dg li:not(.folder) {\n    cursor: auto;\n    height: 27px;\n    line-height: 27px;\n    overflow: hidden;\n    padding: 0 4px 0 5px; }\n  .dg li.folder {\n    padding: 0;\n    border-left: 4px solid rgba(0, 0, 0, 0); }\n  .dg li.title {\n    cursor: pointer;\n    margin-left: -4px; }\n  .dg .closed li:not(.title),\n  .dg .closed ul li,\n  .dg .closed ul li > * {\n    height: 0;\n    overflow: hidden;\n    border: 0; }\n  .dg .cr {\n    clear: both;\n    padding-left: 3px;\n    height: 27px; }\n  .dg .property-name {\n    cursor: default;\n    float: left;\n    clear: left;\n    width: 40%;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .dg .c {\n    float: left;\n    width: 60%; }\n  .dg .c input[type=text] {\n    border: 0;\n    margin-top: 4px;\n    padding: 3px;\n    width: 100%;\n    float: right; }\n  .dg .has-slider input[type=text] {\n    width: 30%;\n    /*display: none;*/\n    margin-left: 0; }\n  .dg .slider {\n    float: left;\n    width: 66%;\n    margin-left: -5px;\n    margin-right: 0;\n    height: 19px;\n    margin-top: 4px; }\n  .dg .slider-fg {\n    height: 100%; }\n  .dg .c input[type=checkbox] {\n    margin-top: 9px; }\n  .dg .c select {\n    margin-top: 5px; }\n  .dg .cr.function,\n  .dg .cr.function .property-name,\n  .dg .cr.function *,\n  .dg .cr.boolean,\n  .dg .cr.boolean * {\n    cursor: pointer; }\n  .dg .selector {\n    display: none;\n    position: absolute;\n    margin-left: -9px;\n    margin-top: 23px;\n    z-index: 10; }\n  .dg .c:hover .selector,\n  .dg .selector.drag {\n    display: block; }\n  .dg li.save-row {\n    padding: 0; }\n    .dg li.save-row .button {\n      display: inline-block;\n      padding: 0px 6px; }\n  .dg.dialogue {\n    background-color: #222;\n    width: 460px;\n    padding: 15px;\n    font-size: 13px;\n    line-height: 15px; }\n\n/* TODO Separate style and structure */\n#dg-new-constructor {\n  padding: 10px;\n  color: #222;\n  font-family: Monaco, monospace;\n  font-size: 10px;\n  border: 0;\n  resize: none;\n  box-shadow: inset 1px 1px 1px #888;\n  word-wrap: break-word;\n  margin: 12px 0;\n  display: block;\n  width: 440px;\n  overflow-y: scroll;\n  height: 100px;\n  position: relative; }\n\n#dg-local-explain {\n  display: none;\n  font-size: 11px;\n  line-height: 17px;\n  border-radius: 3px;\n  background-color: #333;\n  padding: 8px;\n  margin-top: 10px; }\n  #dg-local-explain code {\n    font-size: 10px; }\n\n#dat-gui-save-locally {\n  display: none; }\n\n/** Main type */\n.dg {\n  color: #eee;\n  font: 11px 'Lucida Grande', sans-serif;\n  text-shadow: 0 -1px 0 #111;\n  /** Auto place */\n  /* Controller row, <li> */\n  /** Controllers */ }\n  .dg.main {\n    /** Scrollbar */ }\n    .dg.main::-webkit-scrollbar {\n      width: 5px;\n      background: #1a1a1a; }\n    .dg.main::-webkit-scrollbar-corner {\n      height: 0;\n      display: none; }\n    .dg.main::-webkit-scrollbar-thumb {\n      border-radius: 5px;\n      background: #676767; }\n  .dg li:not(.folder) {\n    background: #1a1a1a;\n    border-bottom: 1px solid #2c2c2c; }\n  .dg li.save-row {\n    line-height: 25px;\n    background: #dad5cb;\n    border: 0; }\n    .dg li.save-row select {\n      margin-left: 5px;\n      width: 108px; }\n    .dg li.save-row .button {\n      margin-left: 5px;\n      margin-top: 1px;\n      border-radius: 2px;\n      font-size: 9px;\n      line-height: 7px;\n      padding: 4px 4px 5px 4px;\n      background: #c5bdad;\n      color: #fff;\n      text-shadow: 0 1px 0 #b0a58f;\n      box-shadow: 0 -1px 0 #b0a58f;\n      cursor: pointer; }\n      .dg li.save-row .button.gears {\n        background: #c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;\n        height: 7px;\n        width: 8px; }\n      .dg li.save-row .button:hover {\n        background-color: #bab19e;\n        box-shadow: 0 -1px 0 #b0a58f; }\n  .dg li.folder {\n    border-bottom: 0; }\n  .dg li.title {\n    padding-left: 16px;\n    background: black url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;\n    cursor: pointer;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.2); }\n  .dg .closed li.title {\n    background-image: url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==); }\n  .dg .cr.boolean {\n    border-left: 3px solid #806787; }\n  .dg .cr.function {\n    border-left: 3px solid #e61d5f; }\n  .dg .cr.number {\n    border-left: 3px solid #2fa1d6; }\n    .dg .cr.number input[type=text] {\n      color: #2fa1d6; }\n  .dg .cr.string {\n    border-left: 3px solid #1ed36f; }\n    .dg .cr.string input[type=text] {\n      color: #1ed36f; }\n  .dg .cr.function:hover, .dg .cr.boolean:hover {\n    background: #111; }\n  .dg .c input[type=text] {\n    background: #303030;\n    outline: none; }\n    .dg .c input[type=text]:hover {\n      background: #3c3c3c; }\n    .dg .c input[type=text]:focus {\n      background: #494949;\n      color: #fff; }\n  .dg .c .slider {\n    background: #303030;\n    cursor: ew-resize; }\n  .dg .c .slider-fg {\n    background: #2fa1d6; }\n  .dg .c .slider:hover {\n    background: #3c3c3c; }\n    .dg .c .slider:hover .slider-fg {\n      background: #44abda; }\n", dat.controllers.factory = function (OptionController, NumberControllerBox, NumberControllerSlider, StringController, FunctionController, BooleanController, common) {
  return function (object, property) {
    var initialValue = object[property]; // Providing options?

    if (common.isArray(arguments[2]) || common.isObject(arguments[2])) {
      return new OptionController(object, property, arguments[2]);
    } // Providing a map?


    if (common.isNumber(initialValue)) {
      if (common.isNumber(arguments[2]) && common.isNumber(arguments[3])) {
        // Has min and max.
        return new NumberControllerSlider(object, property, arguments[2], arguments[3]);
      } else {
        return new NumberControllerBox(object, property, {
          min: arguments[2],
          max: arguments[3]
        });
      }
    }

    if (common.isString(initialValue)) {
      var firstChr = initialValue[0];
      var lastchr = initialValue[initialValue.length - 1];
      var isArrayString = firstChr === '[' && lastchr === ']' || firstChr === '{' && lastchr === '}';
      return new StringController(isArrayString, object, property);
    }

    if (common.isFunction(initialValue)) {
      return new FunctionController(object, property, '');
    }

    if (common.isBoolean(initialValue)) {
      return new BooleanController(object, property);
    }
  };
}(dat.controllers.OptionController, dat.controllers.NumberControllerBox, dat.controllers.NumberControllerSlider, dat.controllers.StringController = function (Controller, dom, common) {
  /**
   * @class Provides a text input to alter the string property of an object.
   *
   * @extends dat.controllers.Controller
   *
   * @param {Object} object The object to be manipulated
   * @param {string} property The name of the property to be manipulated
   *
   * @member dat.controllers
   */
  var StringController = function StringController(isArrayString, object, property) {
    StringController.superclass.call(this, object, property);

    var _this = this;

    this.__input = isArrayString ? document.createElement('textarea') : document.createElement('input');

    this.__input.setAttribute('type', 'text');

    if (!isArrayString) {
      dom.bind(this.__input, 'keyup', onChange);
      dom.bind(this.__input, 'change', onChange);
      dom.bind(this.__input, 'blur', onBlur);
      dom.bind(this.__input, 'keydown', function (e) {
        if (e.keyCode === 13) {
          this.blur();
        }
      });
    } else {
      this.__btn = document.createElement('button');
      this.__btn.innerHTML = 'Update';
      dom.bind(this.__btn, 'click', onChange);
    }

    function onChange() {
      _this.setValue(_this.__input.value);

      if (isArrayString) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }

    function onBlur() {
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }

    this.updateDisplay();
    this.domElement.appendChild(this.__input);

    if (isArrayString) {
      this.domElement.appendChild(this.__btn);
    }
  };

  StringController.superclass = Controller;
  common.extend(StringController.prototype, Controller.prototype, {
    updateDisplay: function updateDisplay() {
      // Stops the caret from moving on account of:
      // keyup -> setValue -> updateDisplay
      if (!dom.isActive(this.__input)) {
        this.__input.value = this.getValue();
      }

      return StringController.superclass.prototype.updateDisplay.call(this);
    }
  });
  return StringController;
}(dat.controllers.Controller, dat.dom.dom, dat.utils.common), dat.controllers.FunctionController, dat.controllers.BooleanController, dat.utils.common), dat.controllers.Controller, dat.controllers.BooleanController, dat.controllers.FunctionController, dat.controllers.NumberControllerBox, dat.controllers.NumberControllerSlider, dat.controllers.OptionController, dat.controllers.ColorController = function (Controller, dom, Color, interpret, common) {
  var ColorController = function ColorController(object, property) {
    ColorController.superclass.call(this, object, property);
    this.__color = new Color(this.getValue());
    this.__temp = new Color(0);

    var _this = this;

    this.domElement = document.createElement('div');
    dom.makeSelectable(this.domElement, false);
    this.__selector = document.createElement('div');
    this.__selector.className = 'selector';
    this.__saturation_field = document.createElement('div');
    this.__saturation_field.className = 'saturation-field';
    this.__field_knob = document.createElement('div');
    this.__field_knob.className = 'field-knob';
    this.__field_knob_border = '2px solid ';
    this.__hue_knob = document.createElement('div');
    this.__hue_knob.className = 'hue-knob';
    this.__hue_field = document.createElement('div');
    this.__hue_field.className = 'hue-field';
    this.__input = document.createElement('input');
    this.__input.type = 'text';
    this.__input_textShadow = '0 1px 1px ';
    dom.bind(this.__input, 'keydown', function (e) {
      if (e.keyCode === 13) {
        // on enter
        onBlur.call(this);
      }
    });
    dom.bind(this.__input, 'blur', onBlur);
    dom.bind(this.__selector, 'mousedown', function (e) {
      dom.addClass(this, 'drag').bind(window, 'mouseup', function (e) {
        dom.removeClass(_this.__selector, 'drag');
      });
    });
    var value_field = document.createElement('div');
    common.extend(this.__selector.style, {
      width: '122px',
      height: '102px',
      padding: '3px',
      backgroundColor: '#222',
      boxShadow: '0px 1px 3px rgba(0,0,0,0.3)'
    });
    common.extend(this.__field_knob.style, {
      position: 'absolute',
      width: '12px',
      height: '12px',
      border: this.__field_knob_border + (this.__color.v < .5 ? '#fff' : '#000'),
      boxShadow: '0px 1px 3px rgba(0,0,0,0.5)',
      borderRadius: '12px',
      zIndex: 1
    });
    common.extend(this.__hue_knob.style, {
      position: 'absolute',
      width: '15px',
      height: '2px',
      borderRight: '4px solid #fff',
      zIndex: 1
    });
    common.extend(this.__saturation_field.style, {
      width: '100px',
      height: '100px',
      border: '1px solid #555',
      marginRight: '3px',
      display: 'inline-block',
      cursor: 'pointer'
    });
    common.extend(value_field.style, {
      width: '100%',
      height: '100%',
      background: 'none'
    });
    linearGradient(value_field, 'top', 'rgba(0,0,0,0)', '#000');
    common.extend(this.__hue_field.style, {
      width: '15px',
      height: '100px',
      display: 'inline-block',
      border: '1px solid #555',
      cursor: 'ns-resize'
    });
    hueGradient(this.__hue_field);
    common.extend(this.__input.style, {
      outline: 'none',
      //      width: '120px',
      textAlign: 'center',
      //      padding: '4px',
      //      marginBottom: '6px',
      color: '#fff',
      border: 0,
      fontWeight: 'bold',
      textShadow: this.__input_textShadow + 'rgba(0,0,0,0.7)'
    });
    dom.bind(this.__saturation_field, 'mousedown', fieldDown);
    dom.bind(this.__field_knob, 'mousedown', fieldDown);
    dom.bind(this.__hue_field, 'mousedown', function (e) {
      setH(e);
      dom.bind(window, 'mousemove', setH);
      dom.bind(window, 'mouseup', unbindH);
    });

    function fieldDown(e) {
      setSV(e); // document.body.style.cursor = 'none';

      dom.bind(window, 'mousemove', setSV);
      dom.bind(window, 'mouseup', unbindSV);
    }

    function unbindSV() {
      dom.unbind(window, 'mousemove', setSV);
      dom.unbind(window, 'mouseup', unbindSV); // document.body.style.cursor = 'default';
    }

    function onBlur() {
      var i = interpret(this.value);

      if (i !== false) {
        _this.__color.__state = i;

        _this.setValue(_this.__color.toOriginal());
      } else {
        this.value = _this.__color.toString();
      }
    }

    function unbindH() {
      dom.unbind(window, 'mousemove', setH);
      dom.unbind(window, 'mouseup', unbindH);
    }

    this.__saturation_field.appendChild(value_field);

    this.__selector.appendChild(this.__field_knob);

    this.__selector.appendChild(this.__saturation_field);

    this.__selector.appendChild(this.__hue_field);

    this.__hue_field.appendChild(this.__hue_knob);

    this.domElement.appendChild(this.__input);
    this.domElement.appendChild(this.__selector);
    this.updateDisplay();

    function setSV(e) {
      e.preventDefault();
      var w = dom.getWidth(_this.__saturation_field);
      var o = dom.getOffset(_this.__saturation_field);
      var s = (e.clientX - o.left + document.body.scrollLeft) / w;
      var v = 1 - (e.clientY - o.top + document.body.scrollTop) / w;
      if (v > 1) v = 1;else if (v < 0) v = 0;
      if (s > 1) s = 1;else if (s < 0) s = 0;
      _this.__color.v = v;
      _this.__color.s = s;

      _this.setValue(_this.__color.toOriginal());

      return false;
    }

    function setH(e) {
      e.preventDefault();
      var s = dom.getHeight(_this.__hue_field);
      var o = dom.getOffset(_this.__hue_field);
      var h = 1 - (e.clientY - o.top + document.body.scrollTop) / s;
      if (h > 1) h = 1;else if (h < 0) h = 0;
      _this.__color.h = h * 360;

      _this.setValue(_this.__color.toOriginal());

      return false;
    }
  };

  ColorController.superclass = Controller;
  common.extend(ColorController.prototype, Controller.prototype, {
    updateDisplay: function updateDisplay() {
      var i = interpret(this.getValue());

      if (i !== false) {
        var mismatch = false; // Check for mismatch on the interpreted value.

        common.each(Color.COMPONENTS, function (component) {
          if (!common.isUndefined(i[component]) && !common.isUndefined(this.__color.__state[component]) && i[component] !== this.__color.__state[component]) {
            mismatch = true;
            return {}; // break
          }
        }, this); // If nothing diverges, we keep our previous values
        // for statefulness, otherwise we recalculate fresh

        if (mismatch) {
          common.extend(this.__color.__state, i);
        }
      }

      common.extend(this.__temp.__state, this.__color.__state);
      this.__temp.a = 1;
      var flip = this.__color.v < .5 || this.__color.s > .5 ? 255 : 0;

      var _flip = 255 - flip;

      common.extend(this.__field_knob.style, {
        marginLeft: 100 * this.__color.s - 7 + 'px',
        marginTop: 100 * (1 - this.__color.v) - 7 + 'px',
        backgroundColor: this.__temp.toString(),
        border: this.__field_knob_border + 'rgb(' + flip + ',' + flip + ',' + flip + ')'
      });
      this.__hue_knob.style.marginTop = (1 - this.__color.h / 360) * 100 + 'px';
      this.__temp.s = 1;
      this.__temp.v = 1;
      linearGradient(this.__saturation_field, 'left', '#fff', this.__temp.toString());
      common.extend(this.__input.style, {
        backgroundColor: this.__input.value = this.__color.toString(),
        color: 'rgb(' + flip + ',' + flip + ',' + flip + ')',
        textShadow: this.__input_textShadow + 'rgba(' + _flip + ',' + _flip + ',' + _flip + ',.7)'
      });
    }
  });
  var vendors = ['-moz-', '-o-', '-webkit-', '-ms-', ''];

  function linearGradient(elem, x, a, b) {
    elem.style.background = '';
    common.each(vendors, function (vendor) {
      elem.style.cssText += 'background: ' + vendor + 'linear-gradient(' + x + ', ' + a + ' 0%, ' + b + ' 100%); ';
    });
  }

  function hueGradient(elem) {
    elem.style.background = '';
    elem.style.cssText += 'background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);';
    elem.style.cssText += 'background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
    elem.style.cssText += 'background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
    elem.style.cssText += 'background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
    elem.style.cssText += 'background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
  }

  return ColorController;
}(dat.controllers.Controller, dat.dom.dom, dat.color.Color = function (interpret, math, _toString, common) {
  var Color = function Color() {
    this.__state = interpret.apply(this, arguments);

    if (this.__state === false) {
      throw 'Failed to interpret color arguments';
    }

    this.__state.a = this.__state.a || 1;
  };

  Color.COMPONENTS = ['r', 'g', 'b', 'h', 's', 'v', 'hex', 'a'];
  common.extend(Color.prototype, {
    toString: function toString() {
      return _toString(this);
    },
    toOriginal: function toOriginal() {
      return this.__state.conversion.write(this);
    }
  });
  defineRGBComponent(Color.prototype, 'r', 2);
  defineRGBComponent(Color.prototype, 'g', 1);
  defineRGBComponent(Color.prototype, 'b', 0);
  defineHSVComponent(Color.prototype, 'h');
  defineHSVComponent(Color.prototype, 's');
  defineHSVComponent(Color.prototype, 'v');
  Object.defineProperty(Color.prototype, 'a', {
    get: function get() {
      return this.__state.a;
    },
    set: function set(v) {
      this.__state.a = v;
    }
  });
  Object.defineProperty(Color.prototype, 'hex', {
    get: function get() {
      if (!this.__state.space !== 'HEX') {
        this.__state.hex = math.rgb_to_hex(this.r, this.g, this.b);
      }

      return this.__state.hex;
    },
    set: function set(v) {
      this.__state.space = 'HEX';
      this.__state.hex = v;
    }
  });

  function defineRGBComponent(target, component, componentHexIndex) {
    Object.defineProperty(target, component, {
      get: function get() {
        if (this.__state.space === 'RGB') {
          return this.__state[component];
        }

        recalculateRGB(this, component, componentHexIndex);
        return this.__state[component];
      },
      set: function set(v) {
        if (this.__state.space !== 'RGB') {
          recalculateRGB(this, component, componentHexIndex);
          this.__state.space = 'RGB';
        }

        this.__state[component] = v;
      }
    });
  }

  function defineHSVComponent(target, component) {
    Object.defineProperty(target, component, {
      get: function get() {
        if (this.__state.space === 'HSV') return this.__state[component];
        recalculateHSV(this);
        return this.__state[component];
      },
      set: function set(v) {
        if (this.__state.space !== 'HSV') {
          recalculateHSV(this);
          this.__state.space = 'HSV';
        }

        this.__state[component] = v;
      }
    });
  }

  function recalculateRGB(color, component, componentHexIndex) {
    if (color.__state.space === 'HEX') {
      color.__state[component] = math.component_from_hex(color.__state.hex, componentHexIndex);
    } else if (color.__state.space === 'HSV') {
      common.extend(color.__state, math.hsv_to_rgb(color.__state.h, color.__state.s, color.__state.v));
    } else {
      throw 'Corrupted color state';
    }
  }

  function recalculateHSV(color) {
    var result = math.rgb_to_hsv(color.r, color.g, color.b);
    common.extend(color.__state, {
      s: result.s,
      v: result.v
    });

    if (!common.isNaN(result.h)) {
      color.__state.h = result.h;
    } else if (common.isUndefined(color.__state.h)) {
      color.__state.h = 0;
    }
  }

  return Color;
}(dat.color.interpret, dat.color.math = function () {
  var tmpComponent;
  return {
    hsv_to_rgb: function hsv_to_rgb(h, s, v) {
      var hi = Math.floor(h / 60) % 6;
      var f = h / 60 - Math.floor(h / 60);
      var p = v * (1.0 - s);
      var q = v * (1.0 - f * s);
      var t = v * (1.0 - (1.0 - f) * s);
      var c = [[v, t, p], [q, v, p], [p, v, t], [p, q, v], [t, p, v], [v, p, q]][hi];
      return {
        r: c[0] * 255,
        g: c[1] * 255,
        b: c[2] * 255
      };
    },
    rgb_to_hsv: function rgb_to_hsv(r, g, b) {
      var min = Math.min(r, g, b),
          max = Math.max(r, g, b),
          delta = max - min,
          h,
          s;

      if (max != 0) {
        s = delta / max;
      } else {
        return {
          h: NaN,
          s: 0,
          v: 0
        };
      }

      if (r == max) {
        h = (g - b) / delta;
      } else if (g == max) {
        h = 2 + (b - r) / delta;
      } else {
        h = 4 + (r - g) / delta;
      }

      h /= 6;

      if (h < 0) {
        h += 1;
      }

      return {
        h: h * 360,
        s: s,
        v: max / 255
      };
    },
    rgb_to_hex: function rgb_to_hex(r, g, b) {
      var hex = this.hex_with_component(0, 2, r);
      hex = this.hex_with_component(hex, 1, g);
      hex = this.hex_with_component(hex, 0, b);
      return hex;
    },
    component_from_hex: function component_from_hex(hex, componentIndex) {
      return hex >> componentIndex * 8 & 0xFF;
    },
    hex_with_component: function hex_with_component(hex, componentIndex, value) {
      return value << (tmpComponent = componentIndex * 8) | hex & ~(0xFF << tmpComponent);
    }
  };
}(), dat.color.toString, dat.utils.common), dat.color.interpret, dat.utils.common), dat.utils.requestAnimationFrame = function () {
  /**
   * requirejs version of Paul Irish's RequestAnimationFrame
   * http://paulirish.com/2011/requestanimationframe-for-smart-animating/
   */
  return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback, element) {
    window.setTimeout(callback, 1000 / 60);
  };
}(), dat.dom.CenteredDiv = function (dom, common) {
  var CenteredDiv = function CenteredDiv() {
    this.backgroundElement = document.createElement('div');
    common.extend(this.backgroundElement.style, {
      backgroundColor: 'rgba(0,0,0,0.8)',
      top: 0,
      left: 0,
      display: 'none',
      zIndex: '1000',
      opacity: 0,
      WebkitTransition: 'opacity 0.2s linear'
    });
    dom.makeFullscreen(this.backgroundElement);
    this.backgroundElement.style.position = 'fixed';
    this.domElement = document.createElement('div');
    common.extend(this.domElement.style, {
      position: 'fixed',
      display: 'none',
      zIndex: '1001',
      opacity: 0,
      WebkitTransition: '-webkit-transform 0.2s ease-out, opacity 0.2s linear'
    });
    document.body.appendChild(this.backgroundElement);
    document.body.appendChild(this.domElement);

    var _this = this;

    dom.bind(this.backgroundElement, 'click', function () {
      _this.hide();
    });
  };

  CenteredDiv.prototype.show = function () {
    var _this = this;

    this.backgroundElement.style.display = 'block';
    this.domElement.style.display = 'block';
    this.domElement.style.opacity = 0; //    this.domElement.style.top = '52%';

    this.domElement.style.webkitTransform = 'scale(1.1)';
    this.layout();
    common.defer(function () {
      _this.backgroundElement.style.opacity = 1;
      _this.domElement.style.opacity = 1;
      _this.domElement.style.webkitTransform = 'scale(1)';
    });
  };

  CenteredDiv.prototype.hide = function () {
    var _this = this;

    var hide = function hide() {
      _this.domElement.style.display = 'none';
      _this.backgroundElement.style.display = 'none';
      dom.unbind(_this.domElement, 'webkitTransitionEnd', hide);
      dom.unbind(_this.domElement, 'transitionend', hide);
      dom.unbind(_this.domElement, 'oTransitionEnd', hide);
    };

    dom.bind(this.domElement, 'webkitTransitionEnd', hide);
    dom.bind(this.domElement, 'transitionend', hide);
    dom.bind(this.domElement, 'oTransitionEnd', hide);
    this.backgroundElement.style.opacity = 0; //    this.domElement.style.top = '48%';

    this.domElement.style.opacity = 0;
    this.domElement.style.webkitTransform = 'scale(1.1)';
  };

  CenteredDiv.prototype.layout = function () {
    this.domElement.style.left = window.innerWidth / 2 - dom.getWidth(this.domElement) / 2 + 'px';
    this.domElement.style.top = window.innerHeight / 2 - dom.getHeight(this.domElement) / 2 + 'px';
  };

  function lockScroll(e) {
    console.log(e);
  }

  return CenteredDiv;
}(dat.dom.dom, dat.utils.common), dat.dom.dom, dat.utils.common);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Expose `Emitter`.
 */

if (true) {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module of mixed-in functions shared between node and client code
 */
var isObject = __webpack_require__(23);

/**
 * Expose `RequestBase`.
 */

module.exports = RequestBase;

/**
 * Initialize a new `RequestBase`.
 *
 * @api public
 */

function RequestBase(obj) {
  if (obj) return mixin(obj);
}

/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in RequestBase.prototype) {
    obj[key] = RequestBase.prototype[key];
  }
  return obj;
}

/**
 * Clear previous timeout.
 *
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.clearTimeout = function _clearTimeout(){
  clearTimeout(this._timer);
  clearTimeout(this._responseTimeoutTimer);
  delete this._timer;
  delete this._responseTimeoutTimer;
  return this;
};

/**
 * Override default response body parser
 *
 * This function will be called to convert incoming data into request.body
 *
 * @param {Function}
 * @api public
 */

RequestBase.prototype.parse = function parse(fn){
  this._parser = fn;
  return this;
};

/**
 * Set format of binary response body.
 * In browser valid formats are 'blob' and 'arraybuffer',
 * which return Blob and ArrayBuffer, respectively.
 *
 * In Node all values result in Buffer.
 *
 * Examples:
 *
 *      req.get('/')
 *        .responseType('blob')
 *        .end(callback);
 *
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.responseType = function(val){
  this._responseType = val;
  return this;
};

/**
 * Override default request body serializer
 *
 * This function will be called to convert data set via .send or .attach into payload to send
 *
 * @param {Function}
 * @api public
 */

RequestBase.prototype.serialize = function serialize(fn){
  this._serializer = fn;
  return this;
};

/**
 * Set timeouts.
 *
 * - response timeout is time between sending request and receiving the first byte of the response. Includes DNS and connection time.
 * - deadline is the time from start of the request to receiving response body in full. If the deadline is too short large files may not load at all on slow connections.
 *
 * Value of 0 or false means no timeout.
 *
 * @param {Number|Object} ms or {response, deadline}
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.timeout = function timeout(options){
  if (!options || 'object' !== typeof options) {
    this._timeout = options;
    this._responseTimeout = 0;
    return this;
  }

  for(var option in options) {
    switch(option) {
      case 'deadline':
        this._timeout = options.deadline;
        break;
      case 'response':
        this._responseTimeout = options.response;
        break;
      default:
        console.warn("Unknown timeout option", option);
    }
  }
  return this;
};

/**
 * Set number of retry attempts on error.
 *
 * Failed requests will be retried 'count' times if timeout or err.code >= 500.
 *
 * @param {Number} count
 * @param {Function} [fn]
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.retry = function retry(count, fn){
  // Default to 1 if no count passed or true
  if (arguments.length === 0 || count === true) count = 1;
  if (count <= 0) count = 0;
  this._maxRetries = count;
  this._retries = 0;
  this._retryCallback = fn;
  return this;
};

var ERROR_CODES = [
  'ECONNRESET',
  'ETIMEDOUT',
  'EADDRINFO',
  'ESOCKETTIMEDOUT'
];

/**
 * Determine if a request should be retried.
 * (Borrowed from segmentio/superagent-retry)
 *
 * @param {Error} err
 * @param {Response} [res]
 * @returns {Boolean}
 */
RequestBase.prototype._shouldRetry = function(err, res) {
  if (!this._maxRetries || this._retries++ >= this._maxRetries) {
    return false;
  }
  if (this._retryCallback) {
    try {
      var override = this._retryCallback(err, res);
      if (override === true) return true;
      if (override === false) return false;
      // undefined falls back to defaults
    } catch(e) {
      console.error(e);
    }
  }
  if (res && res.status && res.status >= 500 && res.status != 501) return true;
  if (err) {
    if (err.code && ~ERROR_CODES.indexOf(err.code)) return true;
    // Superagent timeout
    if (err.timeout && err.code == 'ECONNABORTED') return true;
    if (err.crossDomain) return true;
  }
  return false;
};

/**
 * Retry request
 *
 * @return {Request} for chaining
 * @api private
 */

RequestBase.prototype._retry = function() {

  this.clearTimeout();

  // node
  if (this.req) {
    this.req = null;
    this.req = this.request();
  }

  this._aborted = false;
  this.timedout = false;

  return this._end();
};

/**
 * Promise support
 *
 * @param {Function} resolve
 * @param {Function} [reject]
 * @return {Request}
 */

RequestBase.prototype.then = function then(resolve, reject) {
  if (!this._fullfilledPromise) {
    var self = this;
    if (this._endCalled) {
      console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises");
    }
    this._fullfilledPromise = new Promise(function(innerResolve, innerReject) {
      self.end(function(err, res) {
        if (err) innerReject(err);
        else innerResolve(res);
      });
    });
  }
  return this._fullfilledPromise.then(resolve, reject);
};

RequestBase.prototype.catch = function(cb) {
  return this.then(undefined, cb);
};

/**
 * Allow for extension
 */

RequestBase.prototype.use = function use(fn) {
  fn(this);
  return this;
};

RequestBase.prototype.ok = function(cb) {
  if ('function' !== typeof cb) throw Error("Callback required");
  this._okCallback = cb;
  return this;
};

RequestBase.prototype._isResponseOK = function(res) {
  if (!res) {
    return false;
  }

  if (this._okCallback) {
    return this._okCallback(res);
  }

  return res.status >= 200 && res.status < 300;
};

/**
 * Get request header `field`.
 * Case-insensitive.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

RequestBase.prototype.get = function(field){
  return this._header[field.toLowerCase()];
};

/**
 * Get case-insensitive header `field` value.
 * This is a deprecated internal API. Use `.get(field)` instead.
 *
 * (getHeader is no longer used internally by the superagent code base)
 *
 * @param {String} field
 * @return {String}
 * @api private
 * @deprecated
 */

RequestBase.prototype.getHeader = RequestBase.prototype.get;

/**
 * Set header `field` to `val`, or multiple fields with one object.
 * Case-insensitive.
 *
 * Examples:
 *
 *      req.get('/')
 *        .set('Accept', 'application/json')
 *        .set('X-API-Key', 'foobar')
 *        .end(callback);
 *
 *      req.get('/')
 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
 *        .end(callback);
 *
 * @param {String|Object} field
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.set = function(field, val){
  if (isObject(field)) {
    for (var key in field) {
      this.set(key, field[key]);
    }
    return this;
  }
  this._header[field.toLowerCase()] = val;
  this.header[field] = val;
  return this;
};

/**
 * Remove header `field`.
 * Case-insensitive.
 *
 * Example:
 *
 *      req.get('/')
 *        .unset('User-Agent')
 *        .end(callback);
 *
 * @param {String} field
 */
RequestBase.prototype.unset = function(field){
  delete this._header[field.toLowerCase()];
  delete this.header[field];
  return this;
};

/**
 * Write the field `name` and `val`, or multiple fields with one object
 * for "multipart/form-data" request bodies.
 *
 * ``` js
 * request.post('/upload')
 *   .field('foo', 'bar')
 *   .end(callback);
 *
 * request.post('/upload')
 *   .field({ foo: 'bar', baz: 'qux' })
 *   .end(callback);
 * ```
 *
 * @param {String|Object} name
 * @param {String|Blob|File|Buffer|fs.ReadStream} val
 * @return {Request} for chaining
 * @api public
 */
RequestBase.prototype.field = function(name, val) {
  // name should be either a string or an object.
  if (null === name || undefined === name) {
    throw new Error('.field(name, val) name can not be empty');
  }

  if (this._data) {
    console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
  }

  if (isObject(name)) {
    for (var key in name) {
      this.field(key, name[key]);
    }
    return this;
  }

  if (Array.isArray(val)) {
    for (var i in val) {
      this.field(name, val[i]);
    }
    return this;
  }

  // val should be defined now
  if (null === val || undefined === val) {
    throw new Error('.field(name, val) val can not be empty');
  }
  if ('boolean' === typeof val) {
    val = '' + val;
  }
  this._getFormData().append(name, val);
  return this;
};

/**
 * Abort the request, and clear potential timeout.
 *
 * @return {Request}
 * @api public
 */
RequestBase.prototype.abort = function(){
  if (this._aborted) {
    return this;
  }
  this._aborted = true;
  this.xhr && this.xhr.abort(); // browser
  this.req && this.req.abort(); // node
  this.clearTimeout();
  this.emit('abort');
  return this;
};

RequestBase.prototype._auth = function(user, pass, options, base64Encoder) {
  switch (options.type) {
    case 'basic':
      this.set('Authorization', 'Basic ' + base64Encoder(user + ':' + pass));
      break;

    case 'auto':
      this.username = user;
      this.password = pass;
      break;

    case 'bearer': // usage would be .auth(accessToken, { type: 'bearer' })
      this.set('Authorization', 'Bearer ' + user);
      break;
  }
  return this;
};

/**
 * Enable transmission of cookies with x-domain requests.
 *
 * Note that for this to work the origin must not be
 * using "Access-Control-Allow-Origin" with a wildcard,
 * and also must set "Access-Control-Allow-Credentials"
 * to "true".
 *
 * @api public
 */

RequestBase.prototype.withCredentials = function(on) {
  // This is browser-only functionality. Node side is no-op.
  if (on == undefined) on = true;
  this._withCredentials = on;
  return this;
};

/**
 * Set the max redirects to `n`. Does noting in browser XHR implementation.
 *
 * @param {Number} n
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.redirects = function(n){
  this._maxRedirects = n;
  return this;
};

/**
 * Maximum size of buffered response body, in bytes. Counts uncompressed size.
 * Default 200MB.
 *
 * @param {Number} n
 * @return {Request} for chaining
 */
RequestBase.prototype.maxResponseSize = function(n){
  if ('number' !== typeof n) {
    throw TypeError("Invalid argument");
  }
  this._maxResponseSize = n;
  return this;
};

/**
 * Convert to a plain javascript object (not JSON string) of scalar properties.
 * Note as this method is designed to return a useful non-this value,
 * it cannot be chained.
 *
 * @return {Object} describing method, url, and data of this request
 * @api public
 */

RequestBase.prototype.toJSON = function() {
  return {
    method: this.method,
    url: this.url,
    data: this._data,
    headers: this._header,
  };
};

/**
 * Send `data` as the request body, defaulting the `.type()` to "json" when
 * an object is given.
 *
 * Examples:
 *
 *       // manual json
 *       request.post('/user')
 *         .type('json')
 *         .send('{"name":"tj"}')
 *         .end(callback)
 *
 *       // auto json
 *       request.post('/user')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // manual x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send('name=tj')
 *         .end(callback)
 *
 *       // auto x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // defaults to x-www-form-urlencoded
 *      request.post('/user')
 *        .send('name=tobi')
 *        .send('species=ferret')
 *        .end(callback)
 *
 * @param {String|Object} data
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.send = function(data){
  var isObj = isObject(data);
  var type = this._header['content-type'];

  if (this._formData) {
    console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
  }

  if (isObj && !this._data) {
    if (Array.isArray(data)) {
      this._data = [];
    } else if (!this._isHost(data)) {
      this._data = {};
    }
  } else if (data && this._data && this._isHost(this._data)) {
    throw Error("Can't merge these send calls");
  }

  // merge
  if (isObj && isObject(this._data)) {
    for (var key in data) {
      this._data[key] = data[key];
    }
  } else if ('string' == typeof data) {
    // default to x-www-form-urlencoded
    if (!type) this.type('form');
    type = this._header['content-type'];
    if ('application/x-www-form-urlencoded' == type) {
      this._data = this._data
        ? this._data + '&' + data
        : data;
    } else {
      this._data = (this._data || '') + data;
    }
  } else {
    this._data = data;
  }

  if (!isObj || this._isHost(data)) {
    return this;
  }

  // default to json
  if (!type) this.type('json');
  return this;
};

/**
 * Sort `querystring` by the sort function
 *
 *
 * Examples:
 *
 *       // default order
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery()
 *         .end(callback)
 *
 *       // customized sort function
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery(function(a, b){
 *           return a.length - b.length;
 *         })
 *         .end(callback)
 *
 *
 * @param {Function} sort
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.sortQuery = function(sort) {
  // _sort default to true but otherwise can be a function or boolean
  this._sort = typeof sort === 'undefined' ? true : sort;
  return this;
};

/**
 * Compose querystring to append to req.url
 *
 * @api private
 */
RequestBase.prototype._finalizeQueryString = function(){
  var query = this._query.join('&');
  if (query) {
    this.url += (this.url.indexOf('?') >= 0 ? '&' : '?') + query;
  }
  this._query.length = 0; // Makes the call idempotent

  if (this._sort) {
    var index = this.url.indexOf('?');
    if (index >= 0) {
      var queryArr = this.url.substring(index + 1).split('&');
      if ('function' === typeof this._sort) {
        queryArr.sort(this._sort);
      } else {
        queryArr.sort();
      }
      this.url = this.url.substring(0, index) + '?' + queryArr.join('&');
    }
  }
};

// For backwards compat only
RequestBase.prototype._appendQueryString = function() {console.trace("Unsupported");}

/**
 * Invoke callback with timeout error.
 *
 * @api private
 */

RequestBase.prototype._timeoutError = function(reason, timeout, errno){
  if (this._aborted) {
    return;
  }
  var err = new Error(reason + timeout + 'ms exceeded');
  err.timeout = timeout;
  err.code = 'ECONNABORTED';
  err.errno = errno;
  this.timedout = true;
  this.abort();
  this.callback(err);
};

RequestBase.prototype._setTimeouts = function() {
  var self = this;

  // deadline
  if (this._timeout && !this._timer) {
    this._timer = setTimeout(function(){
      self._timeoutError('Timeout of ', self._timeout, 'ETIME');
    }, this._timeout);
  }
  // response timeout
  if (this._responseTimeout && !this._responseTimeoutTimer) {
    this._responseTimeoutTimer = setTimeout(function(){
      self._timeoutError('Response timeout of ', self._responseTimeout, 'ETIMEDOUT');
    }, this._responseTimeout);
  }
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies.
 */

var utils = __webpack_require__(41);

/**
 * Expose `ResponseBase`.
 */

module.exports = ResponseBase;

/**
 * Initialize a new `ResponseBase`.
 *
 * @api public
 */

function ResponseBase(obj) {
  if (obj) return mixin(obj);
}

/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in ResponseBase.prototype) {
    obj[key] = ResponseBase.prototype[key];
  }
  return obj;
}

/**
 * Get case-insensitive `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

ResponseBase.prototype.get = function(field) {
  return this.header[field.toLowerCase()];
};

/**
 * Set header related properties:
 *
 *   - `.type` the content type without params
 *
 * A response of "Content-Type: text/plain; charset=utf-8"
 * will provide you with a `.type` of "text/plain".
 *
 * @param {Object} header
 * @api private
 */

ResponseBase.prototype._setHeaderProperties = function(header){
    // TODO: moar!
    // TODO: make this a util

    // content-type
    var ct = header['content-type'] || '';
    this.type = utils.type(ct);

    // params
    var params = utils.params(ct);
    for (var key in params) this[key] = params[key];

    this.links = {};

    // links
    try {
        if (header.link) {
            this.links = utils.parseLinks(header.link);
        }
    } catch (err) {
        // ignore
    }
};

/**
 * Set flags such as `.ok` based on `status`.
 *
 * For example a 2xx response will give you a `.ok` of __true__
 * whereas 5xx will be __false__ and `.error` will be __true__. The
 * `.clientError` and `.serverError` are also available to be more
 * specific, and `.statusType` is the class of error ranging from 1..5
 * sometimes useful for mapping respond colors etc.
 *
 * "sugar" properties are also defined for common cases. Currently providing:
 *
 *   - .noContent
 *   - .badRequest
 *   - .unauthorized
 *   - .notAcceptable
 *   - .notFound
 *
 * @param {Number} status
 * @api private
 */

ResponseBase.prototype._setStatusProperties = function(status){
    var type = status / 100 | 0;

    // status / class
    this.status = this.statusCode = status;
    this.statusType = type;

    // basics
    this.info = 1 == type;
    this.ok = 2 == type;
    this.redirect = 3 == type;
    this.clientError = 4 == type;
    this.serverError = 5 == type;
    this.error = (4 == type || 5 == type)
        ? this.toError()
        : false;

    // sugar
    this.accepted = 202 == status;
    this.noContent = 204 == status;
    this.badRequest = 400 == status;
    this.unauthorized = 401 == status;
    this.notAcceptable = 406 == status;
    this.forbidden = 403 == status;
    this.notFound = 404 == status;
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Return the mime type for the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

exports.type = function(str){
  return str.split(/ *; */).shift();
};

/**
 * Return header field parameters.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

exports.params = function(str){
  return str.split(/ *; */).reduce(function(obj, str){
    var parts = str.split(/ *= */);
    var key = parts.shift();
    var val = parts.shift();

    if (key && val) obj[key] = val;
    return obj;
  }, {});
};

/**
 * Parse Link header fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

exports.parseLinks = function(str){
  return str.split(/ *, */).reduce(function(obj, str){
    var parts = str.split(/ *; */);
    var url = parts[0].slice(1, -1);
    var rel = parts[1].split(/ *= */)[1].slice(1, -1);
    obj[rel] = url;
    return obj;
  }, {});
};

/**
 * Strip content related fields from `header`.
 *
 * @param {Object} header
 * @return {Object} header
 * @api private
 */

exports.cleanHeader = function(header, changesOrigin){
  delete header['content-type'];
  delete header['content-length'];
  delete header['transfer-encoding'];
  delete header['host'];
  // secuirty
  if (changesOrigin) {
    delete header['authorization'];
    delete header['cookie'];
  }
  return header;
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

function Agent() {
  this._defaults = [];
}

["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects",
 "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert"].forEach(function(fn) {
  /** Default setting for all requests from this agent */
  Agent.prototype[fn] = function(/*varargs*/) {
    this._defaults.push({fn:fn, arguments:arguments});
    return this;
  }
});

Agent.prototype._setDefaults = function(req) {
    this._defaults.forEach(function(def) {
      req[def.fn].apply(req, def.arguments);
    });
};

module.exports = Agent;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
	@class Device
	@desc
		<a href="https://github.com/ff0000-ad-tech/ad-external">Github repo</a>
		<br><br>
		
		Global constant that provide information about the Device on which the code is currently executing
*/
var Device =
/*#__PURE__*/
function () {
  function Device() {}

  _createClass(Device, null, [{
    key: "orientation",

    /**	
    	@memberOf Device	
    	@var {string} agentString
    	@desc
    		Current user agent of browser. */

    /**	
    	@memberOf Device	
    	@var {string} brand
    	@desc
    		Brand of device, possible values are: 
    		<code>microsoft</code>, 
    		<code>apple</code>, 
    		<code>android</code>, 
    		<code>rim</code>, 
    		<code>unknown</code>. 
    */

    /**	
    	@memberOf Device	
    	@var {string} product
    	@desc
    		Brand subtype, possible values are: 
    		<code>windows phone</code>, 
    		<code>windows</code>, 
    		<code>iphone</code>, 
    		<code>ipad</code>, 
    		<code>ipod</code>, 
    		<code>mac</code>, 
    		<code>android</code>, 
    		<code>pixel 2</code>, 
    		<code>blackberry</code>. 
    	*/

    /**	
    	@memberOf Device	
    	@var {string} type
    	@desc
    		Device type, possible values are: 
    		<code>mobile</code>, 
    		<code>tablet</code>, 
    		<code>desktop</code>. 
    		<br><br>
    		Windows > 8 currently returns tablet, currently no way to differentiate from desktop. */

    /**	
    	@memberOf Device	
    	@var {string} os
    	@desc
    		Operating system of device. */

    /**	
    	@memberOf Device	
    	@var {string} osVersion
    	@desc
    		Version of operating system of device. */

    /** 	
    	@memberOf Device	
    	@var {string} browser
    	@desc
    		Brand of browser. */

    /**	
    	@memberOf Device	
    	@var {string} browserVersion
    	@desc
    		Version of browser. 
    */

    /**	
    	@memberOf Device	
    	@var {string} pixelRatio
    	@desc
    		Pixel ratio of device viewport. 
    */

    /** ------------------------------------------------------------------------------------------------------------- */
    // GETTERS

    /**	
    	@memberOf Device	
    	@var {string} orientation
    	@desc
    		Orientaion of device viewport: landscape or portrait. 
    */
    get: function get() {
      return window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';
    }
    /**	
    	@memberOf Device	
    	@var {object} dimensions
    	@property {number} width
    		window inner-width
    	@property {number} height
    		window inner-height
    	@desc
    		The current dimensions of the device's viewport, returns an object with a width and height 
    		value that are direct returns of windowWidth and windowHeight.
    */

  }, {
    key: "dimensions",
    get: function get() {
      return {
        width: window.innerWidth,
        height: window.innerHeight
      };
    }
    /** ------------------------------------------------------------------------------------------------------------- */
    // PUBLIC METHODS

    /**	
    	@memberOf Device	
    	@method init
    	@desc
    		Initializes the module, which is called from within the pipeline.
    */

  }]);

  return Device;
}();

Object.defineProperty(Device, "pixelRatio", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: window.devicePixelRatio || 'unknown'
});
Object.defineProperty(Device, "init", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value() {
    console.log('Device.init()');
    var D = this;
    D.agentString = navigator.userAgent;

    D._getType();

    D._getBrandAndOS();

    D._getBrowser();

    if (D.type !== 'desktop' && D.os === 'windows' && D.osVersion <= 8 && D.browser === 'ie' && D.browserVersion < 12) {
      console.log("You appear to be on Windows 7 or 8 using Internet Explorer 11 or under. You also appear to be on a touchscreen device. We will assume you're actually on a desktop, since it's extremely unlikely you're on a tablet or mobile device using this specific operating system and browser.");
      D.type = 'desktop';
    }

    var line = Array(70).join('-');
    var str = '\n' + line; // str += '\n AGENT:\n\n\t' + D.agentString + '\n'
    // str += '\n  Brand:\t\t\t' + D.brand
    // str += '\n  Product:\t\t\t' + D.product
    // str += '\n  Type:\t\t\t\t' + D.type
    // str += '\n  Os:\t\t\t\t' + D.os + ' - ' + D.osVersion
    // str += '\n  Browser:\t\t\t' + D.browser + ' - ' + D.browserVersion
    // str += '\n  Dimensions: \t\t' + D.dimensions.width + 'x' + D.dimensions.height
    // str += '\n  Orientation:\t\t' + D.orientation
    // str += '\n  Pixel Ratio:\t\t' + D.pixelRatio

    for (var property in D) {
      if (D.hasOwnProperty(property) && typeof D[property] !== 'function') {
        str += '\n' + property + ': ' + D[property];
      }
    }

    str += '\n' + line;
    console.log(str);
  }
});
Object.defineProperty(Device, "_getType", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value() {
    var D = this;
    var hasMobile = /(android|mobile)/gi.exec(D.agentString);
    var hasTablet = /(tablet|touch)/gi.exec(D.agentString);
    var hasIPad = /(ipad)/gi.exec(D.agentString);
    D.type = 'desktop';
    if (hasMobile) D.type = 'mobile';
    if (hasTablet) D.type = 'tablet';
    if (hasIPad) D.type = 'tablet';
  }
});
Object.defineProperty(Device, "_getBrandAndOS", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value() {
    var D = this;
    var apple = D.agentString.match(/ip(hone|od|ad)|mac/gi);

    if (apple) {
      D.brand = 'apple';
      D.product = apple[0].toLowerCase();
      var appleOS = /(OS\s)(\X\s|)([\d\.\_]+)/gi.exec(D.agentString);
      D.os = appleOS[2] == '' ? 'ios' : 'osx';
      D.osVersion = appleOS[3].replace(/\_/g, '.');
      return;
    }

    var android = /(android)\/?\s*([0-9\.]+)/gi.exec(D.agentString);

    if (android) {
      D.brand = D.product = D.os = android[1].toLowerCase();

      D._checkForSpecial('product', ['pixel 2'], D.agentString.split('(')[1].split(')')[0]);

      D.osVersion = android[2];
      return;
    }

    var microsoft = /(windows\snt\s|windows\sphone)\/?\s*([0-9\.]+)/gi.exec(D.agentString);

    if (microsoft) {
      D.brand = 'microsoft';
      D.os = 'windows';

      switch (microsoft[2]) {
        case '5.2':
          D.osVersion = 'xp';
          break;

        case '6.0':
          D.osVersion = 'vista';
          break;

        case '6.1':
          D.osVersion = '7';
          break;

        case '6.2':
          D.osVersion = '8';
          break;

        case '6.3':
          D.osVersion = '8.1';
          break;

        case '10.0':
          D.osVersion = '10';
          break;

        default:
          D.osVersion = microsoft[2];
      }

      D.product = microsoft[1].toLowerCase();

      if (D.product.match(/\snt/i)) {
        D.product = 'pc';
      }

      return;
    } // blackberry


    var blackberry = D.agentString.match(/(blackberry|bb10|playbook)/i);

    if (blackberry) {
      D.brand = D.product = D.os = 'blackberry';
      D.osVersion = /(version)\/?\s*([0-9\.]+)/gi.exec(D.agentString)[2];
    }
  }
});
Object.defineProperty(Device, "_getBrowser", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value() {
    var D = this;
    var browserMatches = /(edge(?=\/))\/?\s*([0-9\.]+)/i.exec(D.agentString); // check for edge first
    // if it's not edge, check for other common browsers

    if (!browserMatches) {
      browserMatches = D.agentString.match(/(fban|fbav|opera|chrome|crios|safari|firefox|msie|trident(?=\/))\/?\s*([0-9\.]+)/i);
    } // if we checked for common browsers and got NOTHING in return, let's just use the device's default browser


    if (!browserMatches || browserMatches.length < 3) {
      console.log('we received no browser data, so we are setting it to the default of the device');

      switch (D.os) {
        case 'ios':
          D.browser = 'safari';
          break;

        case 'windows':
          D.browser = 'trident';
          break;

        default:
          D.browser = 'chrome';
          break;
      }

      D.browserVersion = 'os-default';
      return;
    }

    console.log('we received browser data');
    D.browser = browserMatches[1].toLowerCase();
    D.browserVersion = browserMatches[2];

    switch (D.browser) {
      case 'trident':
        // Check for desktop IE 10
        var versionMatch = /\brv:+(\d+)/g.exec(D.agentString);
        if (versionMatch) D.browserVersion = versionMatch[1];

      case 'msie':
        D.browser = 'ie';
        break;

      case 'crios':
        D.browser = 'chrome';
        break;

      case 'safari':
        var versionMatch = D.agentString.match(/\sversion\/([0-9\.]+)\s/i);
        if (versionMatch) D.browserVersion = versionMatch[1];
        break;

      case 'chrome':
        // check for Opera
        var versionMatch = D.agentString.match(/\b(OPR)\/([0-9\.]+)/i);

        if (versionMatch) {
          D.browser = 'opera';
          D.browserVersion = versionMatch[2];
        }

        break;
    }
  }
});
Object.defineProperty(Device, "_checkForSpecial", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value(targetParam, array, focus) {
    var D = this;
    var param;

    for (var i = 0; i < array.length; i++) {
      param = array[i].toLowerCase();

      if (focus.match(new RegExp(param, 'i'))) {
        D[targetParam] = param;
        break;
      }
    }
  }
});
var _default = Device;
exports.default = _default;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

exports.__esModule = true;
exports.init = init;
exports.get = get;
exports.isPreviewLocation = isPreviewLocation;

var _adLoad = __webpack_require__(18);

var _adDates = __webpack_require__(49);

var _adUtils = __webpack_require__(0);

/**
	@class	Velvet
	@static
	@desc
		<a href="https://github.com/ff0000-ad-tech/ad-external">Github repo</a>
		<br><br>
		
		This object is meant to handle all of our json loading and parsing from the Velvet platform.

		<br><br>

		When testing, changing the date can be a crucial testing step. see DateManager for more information.
*/
var _baseUrlLive = 'https://json.ff0000-cdn.net/';
var _baseUrlPreview = 'https://preview.ff0000-cdn.net/preview/';
var _qaBaseUrlLive = 'https://qa.ff0000-cdn.net/';
var _qaBaseUrlPreview = 'https://qa.velvet.tech/preview/';
var _baseUrlNow = undefined;
var _baseSlugs = undefined;
var _settings = undefined;
var _debug = false;
var _resolved = undefined;
var adDataRaw = {};
/* ------------------------------------------------------------------------------------------------------------- */
// PUBLIC METHODS

/** 
	@memberOf Velvet
	@method init
	@param {object} settings
		see "Properties" for more information
	@property {string} client
		the first "slug" in the url string
	@property {string} locale
		the second "slug" in the url string
	@property {string} segment
		the third "slug" in the url string - this defines the segment, aka the map to which addata will be loaded	
	@property {string} addata
		Optionally, when viewing an addata url, the last "slug" defines which data set id being used. This can be manually set in the ad, mostly jsut for testing purposes
	@desc
		This passes the settings object from parent scope and initialized the class.  In the index is an Object of "slugs" which are 10 digit Strings which 
		are keys for locations of the client, locale, segment of the that data on Velvet cdn.

	@example
		// in the index.html, inside adParams:
		velvet : {
			client 	: "ZcHT9C9y6Z",
			locale	: "whV1g8DKPe",
			segment	: "C4iaBG6CoP",
			//adData 	: "jaScLD8ayE"
		}
*/

function init(settings) {
  console.log('Velvet.init()'); // check if on QA or not first. Must use referrer as window.location.href will not bubble up out of the iframe

  var url = document.referrer;
  var isQA = url.match(/qa\.velvet\.tech/);

  if (isQA) {
    console.log('\tis on qa.velvet.tech');
    _baseUrlLive = _qaBaseUrlLive;
    _baseUrlPreview = _qaBaseUrlPreview;
  }

  if (isPreviewLocation()) {
    console.log('\tPreview requested');
    _baseUrlNow = _baseUrlPreview;
  } else {
    console.log('\tLive requested');
    _baseUrlNow = _baseUrlLive;
  }

  _settings = settings;
  _baseSlugs = _settings.client + '/' + _settings.locale + '/';
  console.log('\tbase url:', _baseUrlNow);
  console.log('\tbase slugs:', _baseSlugs);
  var query = getQueryParams();
  console.log('\tquery:', query);

  if (query.addata) {
    console.log('\t\tAd Data set via query');
    _settings.adData = query.addata;
  }

  return new Promise(function (resolve, reject) {
    _resolved = resolve;
    console.log('\tVelvet.init() Promise');
    _settings.adData ? _loadAdData() : _loadSegment();
  });
}
/** 
	@memberOf Velvet
	@method get
	@param {object|string|boolean} arguments
		The arguments have many possible uses:
		<br>
		1. A String can be a name of a node or a path to a node seperated by a "."
		<br>  
		2. Object followed by a String is used to specify a starting point for the get method to search for the node provided as the 
		second argument on the String.  
		<br>
		3. A boolean of true as the last argument (second for option 1, third for option 2), will have the method search recurrsively through
		the data object for the key. Otherwise, it will only look at the level provided.
		<br>
		See the example.
	@description
		This method is used to get any node from the JSON by name. All nodes in Velvet have a 'type' and 'value'; the return is always the 'value'
	@example
		// sample Velvet JSON data
		{
			title : {
				type : "SingleLineText",
				value  : "WHAT DO YOU SEE?"
			},
			matchup : {
				type : "CollectionSeries",
				value  : [
					game : {
						type : "CollectionSingleItem",
						value : {
							away_team : {
								type : "CollectionSingleItem",
								value : {
									name : {
										type : "SingleLineText",
										value : "USC"
									},
									color :  {
										type : "Color",
										value : "#003da5"
									},
									logo : {
										type : "Image",
										value : {
											content_type : "image/png",
											name : "USC_sg1SohS.png",
											url : "https://us-east.manta.joyent.com/adtech/public/ad_manager/clients/3YLOU2j85h/collections/TCAHAe8v8B/USC_sg1SohS.png"
										}
									}
								}
							},
							home_team : {
								type : "CollectionSingleItem",
								value : {
									name : {
										type : "SingleLineText",
										value : "Standford"
									},
									color :  {
										type : "Color",
										value : "#A80532"
									},
									logo : {
										type : "Image",
										value : {
											content_type : "image/png",
											name : "stanford.png",
											url : "https://us-east.manta.joyent.com/adtech/public/ad_manager/clients/3YLOU2j85h/collections/tLtLMaynyq/stanford.png"
										}
									}
								}
							}
						}
					}
				]
			},
			live_url : {
				type : "URL",
				value : "http://es.pn/2cilNDt?ex_cid=2016_CFB_Banner_3_50005170003"
			}
		}

		// Provide a node name
		var title = Velvet.get ( 'title' );  // "WHAT DO YOU SEE?"

		// Get a collection, such as a team for later use:
		var awayTeam = Velvet.get ( 'away_team', true ); 
		// returns the whole object of the away_team. Since 'away_team' is nested, the true
		// will make the get go recursively through all children to find the node.
		// NOTE: there is only 1 instance of "away_team" so only 1 will return. 
		// However, if there were more matchups, it would return all away teams as an array.  
		// So to target specifically this matchup, call the away team by targeted path.
		// To do so, write out the path using a "." for each child.
		var awayTeam = Velvet.get ( 'matchup.0.game.away_team' );
		// Note that there is no need to use the ".value" key as the system assumes
		// that for you when using Velvet.get().  This returns the object as is, so 
		// if you use it later, you will need to specify the ".value" to read properly

		// OR

		// Use the variable as a starting point for the searching
		var awayTeamName = Velvet.get ( awayTeam, 'name' );  // "USC"
*/


function get() {
  // check if the first arg is a key = 'node' / 'path.node' OR is it a sub object to look within
  var _useRawObject = typeof arguments[0] === 'string';

  var key = arguments[_useRawObject ? 0 : 1];
  var source = _useRawObject ? adDataRaw : arguments[0]; // will it search through all layers? default false

  var recursive = !!arguments[_useRawObject ? 1 : 2];
  if (_debug) console.log(Array(100).join('-') + '\nget(', key, ')\nwithin:', source, '\nrecursive:', recursive);
  var result = []; // strip the original key of all '.values'

  var strippedKey = key.replace(/\.value(\.|)/g, '.').replace(/\.$/, '');
  if (_debug) console.log('\tstrippedKey:', strippedKey); // split the path up, eg: 'grand.parent.child' > [ grand, parent, child ]

  var splits = strippedKey.split('.');
  var anchor; // remove the last value with is the target node

  var targetKey = splits.pop(); // add back in all the '.value' where applicable

  var pathInExpanded = '';

  for (var i = 0; i < splits.length; i++) {
    if (i > 0) pathInExpanded += '.';
    pathInExpanded += splits[i];

    if (isNaN(splits[i])) {
      pathInExpanded += '.value';
    }
  }

  if (_debug) console.log('\tkey:', key, '\n\tsplits:', splits, '\n\tpathInExpanded:', pathInExpanded); // is the a specific path to follow or just a key?

  var _pathed = splits.length > 0;

  if (_pathed) {
    splits = pathInExpanded.split('.'); // extract out the anchor to know where the path starts at, not necessarily at the top

    anchor = splits.shift();
    splits.push(targetKey);
    if (_debug) console.log('\tanchor:', anchor, '\n\tsplits again:', splits);
  }

  function walk(elem) {
    switch (Object.prototype.toString.call(elem)) {
      case '[object Object]':
        walkObject(elem);
        break;

      case '[object Array]':
        walkArray(elem);
        break;
    }
  }

  function walkObject(obj) {
    if (_debug) console.log('walkObject() >', obj); // at this level, just check key? if not found AND recurrsive, then use loop

    for (var param in obj) {
      readProperty(obj, param);
    }
  }

  function walkArray(arr) {
    if (!_pathed && !isNaN(targetKey)) {
      // if looking for an index value of a passed in array
      result.push(arr[targetKey]);
    } else {
      for (var i = 0; i < arr.length; i++) {
        walkObject(arr[i]);
      }
    }
  }

  function properKey(obj) {
    return obj.hasOwnProperty('value') ? obj.value : obj;
  }

  function readProperty(obj, param) {
    if (_debug) console.log('\t\t\t readProperty()', obj, param, '|', anchor, '|', targetKey);

    if (param == targetKey && !_pathed) {
      // if a match is found
      // AND
      // only if no path is set, store it, otherwise it will
      // store false equivelants when recurively going through objects
      result.push(properKey(obj[param]));
    } else if (param == anchor) {
      // if the anchor, eg 'grand', is found, skip to reading the whole path eg 'grand.parent.child'
      var narrowDown = readPropertyPath(splits, obj[param]);
      if (_debug) console.log('param:', param, '\n\tnarrowDown:', narrowDown, '\n\tobj[param]:', obj[param], param);

      if (narrowDown) {
        result.push(properKey(narrowDown));
      }

      return;
    } // only if looping thought recursivley, handle objects or arrays


    if (recursive) {
      walk(obj[param]);
    }
  } // repurposed from ObjectUtils, reads a path 'grand.parent.child' and returns that node on 'child'


  function readPropertyPath(splits, obj) {
    var result = obj || {};
    var i;
    var s;

    for (i = 0; result && (s = splits[i]); i++) {
      result = s in result ? result[s] : undefined;
    }

    return result;
  } // start walking through the top object or array supplied


  walk(source);

  if (result.length == 1) {
    result = result[0];
  } else if (result.length == 0) {
    result = undefined;
  }

  if (_debug) console.log(result);
  return result;
}
/** 
	@memberOf Velvet
	@method isPreviewLocation
	@description
		This method returns true for all the locations that should load PREVIEW.JSON instead of published.json.
		Safeguards are in place so that even an ad in a staging/build-state will load published json, if running in 
		any http(s) locations other than the ones listed. 
*/


function isPreviewLocation() {
  console.log('\n\n Velvet.isPreviewLocation() > queryParams? \n\n');
  var href = window.location.href;
  if (href == undefined || href == null) return false;

  if (queryParams.velvet === 'production') {
    return false;
  } // local locations


  if (href.match(/^file/) || href.match(/manta\.joyent\.com/) || href.match(/ff0000\.com/) || href.match(/adprodtest/) || href.match(/client\-projects\.com/) || href.match(/[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+:[0-9]+/)) {
    return true;
  } // other locations


  return false;
}
/* ------------------------------------------------------------------------------------------------------------- */
// PRIVATE METHODS


function _loadSegment() {
  new _adLoad.DataLoader(_baseUrlNow + _baseSlugs + _settings.segment, {
    name: 'segmentLoader',
    fileType: 'json',
    onComplete: _handleSegmentLoadComplete,
    onFail: global.failAd // scope: V

  }).load();
}

function _loadAdData() {
  // const V = this
  new _adLoad.DataLoader(_baseUrlNow + _baseSlugs + _settings.adData, {
    name: 'velvetAdDataLoader',
    fileType: 'json',
    onComplete: _handleAdDataLoadComplete,
    onFail: global.failAd // scope: V

  }).load();
}
/* ------------------------------------------------------------------------------------------------------------- */
// EVENT HANDLERS


function _handleSegmentLoadComplete(event) {
  var segmentJson = JSON.parse(event.dataRaw);
  console.log('Velvet segment Json:\n', segmentJson); // check if there is a timezone to apply as default to all display times:

  adParams.defaultTimezone = segmentJson.tz;

  if (adParams.defaultTimezone) {
    console.log('\tdefaultTimezone:', adParams.defaultTimezone);
  }

  var timeblocks = segmentJson.timeblocks;

  var now = _adDates.DateManager.getNow();

  console.log('\tnow:', new Date(now)); // sort through timeblocks to find the current

  for (var i = 0; i < timeblocks.length; i++) {
    var startDate = timeblocks[i].time;
    console.log('\t\t>', new Date(startDate));

    if (now < startDate) {
      break;
    }
  }

  var latestIndex = i - 1; //console.log( '\tnow:', new Date(now), '| timeblock:', new Date(startDate), '| latestIndex:', latestIndex )

  if (latestIndex < 0) {
    global.failAd();
    return;
  } else {
    console.log('\tselected timeblock:', timeblocks[latestIndex]);
  }

  var rotation = timeblocks[latestIndex].ad_rotation;
  _settings.adData = _adUtils.MathUtils.randomWeightedKey(rotation);
  console.log('\tselected ad slug:', _settings.adData);

  if (_settings.adData === 'USE_STATIC') {
    useStatic();
    return;
  }

  _loadAdData();
}

function _handleAdDataLoadComplete(event) {
  console.log('Velvet._handleAdDataLoadComplete()');
  adDataRaw = JSON.parse(event.dataRaw);
  console.log('adDataRaw:\n', adDataRaw);

  _resolved();
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _MixinBuilder = __webpack_require__(3);

var _LoaderBase = __webpack_require__(4);

var _LoaderSource = __webpack_require__(8);

var _LoaderTicker = __webpack_require__(25);

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Blank = function Blank() {};

var ImageLoader =
/*#__PURE__*/
function (_mix$with) {
  _inheritsLoose(ImageLoader, _mix$with);

  function ImageLoader() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _mix$with.call.apply(_mix$with, [this].concat(args)) || this;
    var arg = arguments && arguments.length > 1 ? arguments[1] : arguments[0] || {}; // used when only needing to render, such as writing into the DOM as markup <svg>

    _this.renderOnly = !!arg.renderOnly;
    _this.crossOrigin = arg.crossOrigin;
    return _this;
  }

  var _proto = ImageLoader.prototype;

  _proto.load = function load() {
    var I = this;

    if (I.renderOnly) {
      I._setTicker({
        content: I.url,
        width: 0
      });
    } else {
      var img = new Image();
      img.id = I.fileName;
      img.crossOrigin = I.crossOrigin;
      img.onload = I._handleComplete.bind(I);
      img.onerror = I._handleFail;
      img.src = I.url;
    }
  };

  _proto._handleComplete = function _handleComplete(event) {
    var I = this; // console.log('ImageLoader "' + I.name + '" is Complete')

    I.dataRaw = event.target;
    I.onComplete.call(I.scope, I);
  };

  return ImageLoader;
}((0, _MixinBuilder.mix)(Blank).with(_LoaderBase.LoaderBase, _LoaderSource.LoaderSource, _LoaderTicker.LoaderTicker));

exports.default = ImageLoader;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _MixinBuilder = __webpack_require__(3);

var _LoaderBase = __webpack_require__(4);

var _LoaderSource = __webpack_require__(8);

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Blank = function Blank() {};

var InlineLoader =
/*#__PURE__*/
function (_mix$with) {
  _inheritsLoose(InlineLoader, _mix$with);

  function InlineLoader() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _mix$with.call.apply(_mix$with, [this].concat(args)) || this;
  }

  var _proto = InlineLoader.prototype;

  _proto.load = function load() {
    var I = this;
    var elem;

    if (I.fileType == 'css') {
      elem = I._createCssLink();
    } else if (I.fileType == 'html') {
      elem = I._createHtmlLink();
    } else {
      elem = I._createScript();
    }

    elem.charset = 'utf-8';
    elem.onload = I._handleComplete.bind(I);
    elem.onerror = I._handleFail;
    I.fileType == 'css' || I.fileType == 'html' ? elem.href = this.url : elem.src = I.url;
    document.getElementsByTagName('head')[0].appendChild(elem);
  };

  _proto._createCssLink = function _createCssLink() {
    var elem = document.createElement('link');
    elem.rel = 'stylesheet';
    elem.type = 'text/css';
    return elem;
  };

  _proto._createHtmlLink = function _createHtmlLink() {
    var elem = document.createElement('link');
    elem.rel = 'import'; // elem.async = ''

    return elem;
  };

  _proto._createScript = function _createScript() {
    var elem = document.createElement('script');
    elem.type = 'text/javascript';
    return elem;
  };

  _proto._handleComplete = function _handleComplete(event) {
    var I = this; // console.log('InlineLoader "' + I.name + '" is Complete')

    I.dataRaw = event.target;
    I.onComplete.call(I.scope, I);
  };

  return InlineLoader;
}((0, _MixinBuilder.mix)(Blank).with(_LoaderBase.LoaderBase, _LoaderSource.LoaderSource));

exports.default = InlineLoader;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _MixinBuilder = __webpack_require__(3);

var _LoaderBase = __webpack_require__(4);

var _LoaderSource = __webpack_require__(8);

var Utils = _interopRequireWildcard(__webpack_require__(7));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Blank = function Blank() {};

var DataLoader =
/*#__PURE__*/
function (_mix$with) {
  _inheritsLoose(DataLoader, _mix$with);

  function DataLoader() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _mix$with.call.apply(_mix$with, [this].concat(args)) || this;
    var arg = arguments && arguments.length > 1 ? arguments[1] : arguments[0] || {};

    var D = _assertThisInitialized(_this);

    D.method = (arg.method || 'get').toLowerCase();
    D.query = arg.query || null;
    D.responseType = arg.responseType || null;
    return _this;
  }

  var _proto = DataLoader.prototype;

  _proto.load = function load() {
    var D = this; // console.log('DataLoader "' + D.name + '" requesting:\n\t->', D.url)

    var queryString = null;
    var isPost = D.method === 'post';
    D.req = Utils.createXMLHttpRequest();
    if (D.responseType != undefined) D.req.responseType = D.responseType;
    var url = D.url;

    if (D.query) {
      queryString = Utils.getParamsFromData(D.query);
      encodeURIComponent(queryString);

      if (!isPost) {
        url += '?' + queryString;
        queryString = null;
      }
    }

    if (D.cacheBuster) {
      url += D.query && !isPost ? '&' : '?';
      url += 'cb=' + new Date().getTime();
    }

    D.req.onreadystatechange = D._handleStateChange.bind(D);
    D.req.open(D.method, url, true); // Set Mime Type
    // NOTE: responseType has to be set AFTER the XmlHttpRequest.open() is called because IE is terrible

    switch (D.fileType) {
      case 'xml':
        if (D.req.overrideMimeType) D.req.overrideMimeType('text/xml');
        break;

      case 'json':
        if (D.req.overrideMimeType) D.req.overrideMimeType('application/json');
        break;

      case 'fba':
      case 'bin':
      case 'binary':
        D.responseType = D.req.responseType = 'arraybuffer'; //D.req.overrideMimeType( 'text/plain charset=x-user-defined' )

        break;
    }

    if (D.method === 'post') {
      D.req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    }

    D.req.send(queryString);
  };

  _proto._handleStateChange = function _handleStateChange(target) {
    var D = this;

    switch (D.req.readyState) {
      case 3:
        if (this.req.status == 200) {
          D.dataRaw = D.responseType ? D.req.response : D.req.responseText;

          D._handleProgress(D);
        }

        break;

      case 4:
        if (D.req.status == 200) {
          D.dataRaw = D.responseType ? D.req.response : D.req.responseText;

          D._handleComplete(D);
        } else {
          D._handleFail({
            target: target
          });
        }

        break;
    }
  };

  _proto._handleProgress = function _handleProgress() {
    var D = this;
    D.onProgress.call(D.scope, D);
  };

  _proto._handleComplete = function _handleComplete() {
    var D = this; // console.log('DataLoader "' + D.name + '" is Complete')

    D.onComplete.call(D.scope, D);
  };

  return DataLoader;
}((0, _MixinBuilder.mix)(Blank).with(_LoaderBase.LoaderBase, _LoaderSource.LoaderSource));

exports.default = DataLoader;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _MixinBuilder = __webpack_require__(3);

var _LoaderBase = __webpack_require__(4);

var _LoaderSource = __webpack_require__(8);

var _LoaderTicker = __webpack_require__(25);

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Blank = function Blank() {};

var FontLoader =
/*#__PURE__*/
function (_mix$with) {
  _inheritsLoose(FontLoader, _mix$with);

  function FontLoader() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _mix$with.call.apply(_mix$with, [this].concat(args)) || this;
  }

  var _proto = FontLoader.prototype;

  _proto.load = function load() {
    var F = this; // console.log('FontLoader "' + F.name + '" requesting:\n\t->', F.url)

    F.fileName = F.fileName.split('.')[0];
    var assembledFontRule = '@font-face { font-family: ' + F.fileName + '; src: url(' + F.url + ") format('truetype'); }";
    var getSheet = document.getElementById('RED_fontStyleSheet');

    if (getSheet) {
      getSheet.innerHTML += assembledFontRule;
    } else {
      var styleScript = document.createElement('style');
      styleScript.type = 'text/css';
      styleScript.media = 'screen';
      styleScript.id = 'RED_fontStyleSheet';
      styleScript.appendChild(document.createTextNode(assembledFontRule));
      document.getElementsByTagName('head')[0].appendChild(styleScript);
    }

    F._setTicker({
      content: ' !"\\#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~',
      css: 'position:absolute; top:-1000px; font-size:100px; font-family:san-serif; font-variant:normal; font-style:normal; font-weight:normal; letter-spacing:0; white-space:nowrap;',
      font: F.fileName
    });
  };

  _proto._handleTickerComplete = function _handleTickerComplete(node) {
    var F = this; // added timeout to leave a rendered textfield on stage for initial textfields
    // to return proper offsetWidth values

    setTimeout(function () {
      // leave the test textfield temporarily to allow dom
      // to have a reference to rendered characters. hack?
      F._removeTickerNode(node);
    }, 300);

    F._handleComplete();
  };

  _proto._handleComplete = function _handleComplete(event) {
    var F = this; // console.log('FontLoader "' + F.name + '" is Complete')

    F.dataRaw = F.fileName;
    F.onComplete.call(F.scope, F);
  };

  return FontLoader;
}((0, _MixinBuilder.mix)(Blank).with(_LoaderBase.LoaderBase, _LoaderSource.LoaderSource, _LoaderTicker.LoaderTicker));

exports.default = FontLoader;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.DateUtils = exports.DateManager = exports.DateFormatter = exports.spanish = exports.DateSchedule = exports.RecurringSchedule = exports.TzDate = exports.Timezone = void 0;

var _Timezone = _interopRequireDefault(__webpack_require__(9));

exports.Timezone = _Timezone.default;

var _TzDate = _interopRequireDefault(__webpack_require__(5));

exports.TzDate = _TzDate.default;

var _RecurringSchedule = _interopRequireDefault(__webpack_require__(67));

exports.RecurringSchedule = _RecurringSchedule.default;

var _DateSchedule = _interopRequireDefault(__webpack_require__(26));

exports.DateSchedule = _DateSchedule.default;

var _labelSpanish = _interopRequireDefault(__webpack_require__(68));

exports.spanish = _labelSpanish.default;

var DateFormatter = _interopRequireWildcard(__webpack_require__(6));

exports.DateFormatter = DateFormatter;

var DateManager = _interopRequireWildcard(__webpack_require__(14));

exports.DateManager = DateManager;

var DateUtils = _interopRequireWildcard(__webpack_require__(13));

exports.DateUtils = DateUtils;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

/**
	@class LocationUtils
	@desc
		<a href="https://github.com/ff0000-ad-tech/ad-utils">Github repo</a>
		<br><br>
		
		This object contains utilities for interfacing with the device's GPS.
*/
var LocationUtils = new function () {
  this.gpsSuccessCallback;
  this.gpsFailCallback;
  /**
  	@memberOf LocationUtils
  	@method getGPSData
  	@param {function} callbackSuccess
  		upon successful acquisition of device location, this funciton is called with global coordinates.
  	@param {function} callbackFail
  		called if the query fails
  	@desc
  		Queries the device for current location. Asyncronous and dependent on user permission, 
  		so callback functions must be used.
  */

  this.getGPSData = function (callbackSuccess, callbackFail) {
    if (navigator.geolocation) {
      LocationUtils.gpsSuccessCallback = callbackSuccess;
      LocationUtils.gpsFailCallback = callbackFail;
      navigator.geolocation.getCurrentPosition(LocationUtils.onLocationRetrieved, LocationUtils.onLocationFailed);
    } else console.log('geolocation not available');
  };

  this.onLocationRetrieved = function (position) {
    LocationUtils.gpsSuccessCallback(position.coords);
  };

  this.onLocationFailed = function (error) {
    console.log('Error retrieving location data');

    switch (error.code) {
      case 0:
        console.log('0 - unknown error');
        break;

      case 1:
        console.log('1 - permission denied');
        break;

      case 2:
        console.log('2 - position unavailable (error response from locaton');
        break;

      case 3:
        console.log('3 - timed out');
        break;
    }

    if (LocationUtils.gpsFailCallback) LocationUtils.gpsFailCallback(error);
  };
}();
var _default = LocationUtils;
exports.default = _default;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

/**
	@class MotionUtils
	@desc
		<a href="https://github.com/ff0000-ad-tech/ad-utils">Github repo</a>
		<br><br>
		
		This object is for accessing the mobile/tablet's accelerometer for tilt shifting values
*/
var MotionUtils = function () {
  var ax = 0,
      ay = 0;

  var _zeroX = 0,
      _zeroY = 0,
      _isInit = true,
      _negX,
      _posX,
      _negY,
      _posY,
      _multi = 1,
      _callback;
  /* ----------------------------------------------------------------------------------------------- */
  // PUBLIC METHODS

  /**
  	@memberOf MotionUtils
  	@method setSpeedLimits
  	@param {number} negX
  		minimum value returned when tilting left ( will be a negative number )
  	@param {number} posX
  		maximum value returned when tilting right ( will be a positive number )
  	@param {number} negY
  		minimum value returned when tilting backward ( will be a negative number )
  	@param {number} posY
  		maximum value returned when tilting forward ( will be a positive number )
  	@desc
  		Set the minimum and maximum values that can be returned
  */


  function setSpeedLimits(negX, posX, negY, posY) {
    _negX = negX;
    _posX = posX;
    _negY = negY;
    _posY = posY;
  }
  /**
  	@memberOf MotionUtils
  	@method setSpeedMultiplier
  	@param {number} multi
  		a number to multiply the returned value by. Defaults to 1.
  	@desc
  		Set a percentage multiplier to amplify or minimize the returned value.
  */


  function setSpeedMultiplier(multi) {
    _multi = multi <= 0 ? 1 : multi;
  }
  /**
  	@memberOf MotionUtils
  	@method activate
  	@param {function} callback
  		a passed in method that will be called every time a device movement is detected.
  	@desc
  		Starts the listening for a move of the device
  */


  function activate(callback) {
    _callback = callback;
    window.addEventListener('deviceorientation', onOrientation, false);
  }
  /**
  	@memberOf MotionUtils
  	@method deactivate
  	@desc
  		Stops the listening for a move of the device.
   */


  function deactivate() {
    window.removeEventListener('deviceorientation', onOrientation, false);
  }
  /**
  	@memberOf MotionUtils
  	@method callibrate
  	@desc
  		Sets the relative zero position to the current orientation of the device.
   */


  function callibrate() {
    _isInit = true;
  }
  /* ----------------------------------------------------------------------------------------------- */
  // EVENT HANDLERS


  function onOrientation(e) {
    switch (window.orientation) {
      case -90:
        // Landscape, right-side down
        ay = e.gamma;
        ax = -e.beta;
        break;

      case 90:
        // Landscape, left-side down
        ay = -e.gamma;
        ax = e.beta;
        break;

      case 180:
        // Upside-down portrait
        ay = -e.beta;
        ax = -e.gamma;
        break;

      default:
        // Portrait
        ay = e.beta;
        ax = e.gamma;
    }

    if (_isInit) {
      _zeroX = ax;
      _zeroY = ay;
      _isInit = false;
    }

    ax -= _zeroX;
    ay -= _zeroY;
    ax *= _multi;
    ay *= _multi;
    if (_negX && ax < _negX) ax = _negX;
    if (_posX && ax > _posX) ax = _posX;
    if (_negY && ay < _negY) ay = _negY;
    if (_posY && ay > _posY) ay = _posY;

    _callback(ax, ay);
  }
  /* ----------------------------------------------------------------------------------------------- */
  // PUBLIC ACCESS


  return {
    ax: ax,
    ay: ay,
    callibrate: callibrate,
    setSpeedLimits: setSpeedLimits,
    setSpeedMultiplier: setSpeedMultiplier,
    activate: activate,
    deactivate: deactivate
  };
}();

var _default = MotionUtils;
exports.default = _default;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

/**
	@class MonetUtils
	@desc
		Monet utilities.
*/
var MonetUtils = function MonetUtils() {};

Object.defineProperty(MonetUtils, "_data", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: void 0
});
Object.defineProperty(MonetUtils, "_monetTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    text: 'text',
    number: 'value',
    image: 'url',
    video: 'url',
    url: 'url',
    bool: 'value'
  }
});
Object.defineProperty(MonetUtils, "setData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value(integrator) {
    var M = this;
    var promise = integrator.getMonetData();
    promise.then(function (data) {
      M._data = data;
    });
    return promise;
  }
});
Object.defineProperty(MonetUtils, "getDataByKey", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value(key) {
    var M = this;
    var output;
    var outputType;

    for (var type in M._monetTypes) {
      if (M._data.rootAssets[type + '.' + key]) {
        outputType = type;
        output = M._data.rootAssets[type + '.' + key];
        break;
      }
    }

    return output[M._monetTypes[outputType]];
  }
});
var _default = MonetUtils;
exports.default = _default;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.counterWithVars = counterWithVars;
exports.addVideoMetrics = addVideoMetrics;
exports.addYouTubeVideoMetrics = addYouTubeVideoMetrics;

/**
	@class DcsUtils
	@desc
		<a href="https://github.com/ff0000-ad-tech/ad-utils">Github repo</a>
		<br><br>
		
		Doubleclick Studio utilities.
*/
function counterWithVars(str, impression) {
  if (impression) Enabler.reportCustomVariableCount1(str);else Enabler.reportCustomVariableCount2(str);
}
/**
	@memberOf DcsUtils
	@method addVideoMetrics
	@param {VideoPlayer} player 
		The video player instance to track
	@param {string} message
		The message passed as the metric, defaults to 'Video Report 1'
	@desc
		Adds DoubleClick Tracking metrics to a video player.
	@example
		DcsUtils.addVideoMetrics( adData.elements.videoPlayer, 'Intro Video' );
*/


function addVideoMetrics(player, message) {
  Enabler.loadModule(studio.module.ModuleId.VIDEO, function () {
    studio.video.Reporter.attach(message || 'Video Report 1', player instanceof VideoPlayer ? player.screen : player);
  });
}
/**
	@memberOf DcsUtils
	@method addYouTubeVideoMetrics
	@param {VideoPlayer} player 		- The YouTubePlayer instance to track
	@desc
		Adds DoubleClick Tracking metrics to a YouTube video player.  The Enabler counter calls are added to the index when
		a YouTubePlayer is added through Ad App.
		<br><br>

		If manually adding a YouTubePlayer/tracking, the required global vars are:<br>
		<codeblock>
			var trackVideoPlay = function() {
				Enabler.counter( 'YTP Video Play', true )
			}
			var trackVideoReplay = function() {
				Enabler.counter( 'YTP Video Replay', true )
			}
			var trackVideoPause = function() {
				Enabler.counter( 'YTP Video Pause', true )
			}
			var trackVideoComplete = function() {
				Enabler.counter( 'YTP Video Complete', true )
			}
		</codeblock>
		<br><br>

	@example
		DcsUtils.addYouTubeVideoMetrics( adData.elements.mainYouTubePlayer );
*/


function addYouTubeVideoMetrics(player) {
  var p = player.screen;
  p.addEventListener(MediaEvent.PLAY, function () {
    player.isReplay ? trackVideoReplay.call() : trackVideoPlay.call();
  });
  p.addEventListener(MediaEvent.PAUSE, function () {
    if (!player.complete) {
      trackVideoPause.call();
    }
  });
  p.addEventListener(MediaEvent.COMPLETE, function () {
    trackVideoComplete.call();
  });
}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.clone = clone;
exports.defaults = defaults;
exports.objectifier = void 0;

/**
	@class ObjectUtils
	@desc
		<a href="https://github.com/ff0000-ad-tech/ad-utils">Github repo</a>
		<br><br>
		
		Utilities for affecting objects.
*/

/**
	@memberOf ObjectUtils
	@name objectifier
	@property {function} objectifier.get
		{@link ObjectUtils.get}
	@property {function} objectifier.set
		{@link ObjectUtils.set}
	@desc
		This object is parent to a number of utility funcitons
*/
var objectifier = {};
/**
	@memberOf ObjectUtils
	@method get
	@param {string} str
		a data string representing the key of desire property splited by dot. 
		Array index is represented by number. For example, 'myObj.property1.0' means 
		I'm pointing to the [0] element in my propperty1 array inside of myObj. 
	@param {object} ctxObj
		the context object to find the property under, defaults to window
	@desc
		Gets a property with a nested property key string.
		<br><br>
		<b>NOTE!!!</b>
		This method is on the {@link ObjectUtils.objectifier} object!

	@example
		//
		let myObj = {
			prop1: [ 'a', 'b', 'c' ],
			prop2: {
				string: 'I am prop2',
				func: function() {
					alert( '!!' );
				}
			}
		};

		let val = ObjectUtils.objectifier.get( 'prop1.0', myObj );
		// your val should be 'a'

		val = ObjectUtils.objectifier.get( 'prop2.string', myObj );
		// your val should be 'I am prop2'
*/

exports.objectifier = objectifier;

objectifier.get = function (str, ctxObj) {
  if (ctxObj === void 0) {
    ctxObj = window;
  }

  var splits = objectifier._getSplits(str).splits;

  return objectifier._getProperty(splits, ctxObj);
};
/**
	@memberOf ObjectUtils
	@method set
	@param {string} str
		a data string representing the key of desire property splited by dot.
		Array index is represented by number. For example, 'myObj.property1.0' means
		I'm pointing to the [0] element in my propperty1 array inside of myObj.
	@param {any} val
		the value to set for th property
	@param {object} ctxObj
		the context object to find the property under, defaults to window
	@desc
		Sets a property value with a nested property key string.
		<br><br>
		<b>NOTE!!!</b>
		This method is on the {@link ObjectUtils.objectifier} object!
		
	@example
		//
		let myObj = {
			prop1: [ 'a', 'b', 'c' ],
			prop2: {
				string: 'I am prop2'
			}
		};

		ObjectUtils.objectifier.set( 'prop1.0', 123, myObj );
		// myObj.prop1[0] is now 123

		ObjectUtils.objectifier.set( 'prop2.string', 'hello', myObj );
		// myObj.prop2.string is now 'hello'
*/


objectifier.set = function (str, val, ctxObj) {
  if (ctxObj === void 0) {
    ctxObj = window;
  }

  var splitData = objectifier._getSplits(str, true);

  var result = objectifier._getProperty(splitData.splits, ctxObj);

  result[splitData.lastKey] = val;
}; // objectifier._getSplits and objectifier._getProperty  are used internally for objectifier.get and objectifier.set


objectifier._getSplits = function (str, popLast) {
  var splits = str.split('.');
  var lastKey = popLast ? splits.pop() : null;
  return {
    splits: splits,
    lastKey: lastKey
  };
};

objectifier._getProperty = function (splits, obj) {
  if (obj === void 0) {
    obj = {};
  }

  var result = obj;
  var s;

  for (var i = 0; result && (s = splits[i]); i++) {
    result = s in result ? result[s] : undefined;
  }

  return result;
};
/**
	@memberOf ObjectUtils
	@method clone
	@param {object} obj
		object to clone
	@returns {object}
		cloned object
	@desc
		Get a clone of an object without reference.
	@example
		//
		let oldObj = {
			a: 1,
			b: 2
		};

		let newObj = ObjectUtils.clone( oldObj );
		
		newObj.a = 'xyz';

		// oldObj.a is still 1
*/


function clone(obj) {
  if (Object.prototype.toString.call(obj) !== '[object Object]') {
    return obj;
  }

  var result = obj.constructor();

  for (var key in obj) {
    result[key] = clone(obj[key]);
  }

  return result;
}
/**
	@memberOf ObjectUtils
	@method defaults
	@param {object} obj
		an object contains custom properties to overide default properties
	@param {object} defaultObj
		an object contains properties to default to
	@param {boolean} recursive
		flag for if the property check should be executed recursively
		otherwise it will just be one level
	@desc
		Get an object using an object as a default, when a property doesn't in the object,
		it takes it from the default object if it exists. It also checks nested objects. 
		It is useful for setting up an object to store default values. 
	@example
		// our default object as a base set up
		let defaultObj = {
		    name: 'Person',
		    weight: 0,
		    age: 0,
		    gender: 'male',
		    locationDetail: {
		        state: 'CA',
		        city: 'Los Angeles'
		    }
		};
		
		// the custom object
		let customObj = {
		    name: 'Bob',
		    weight: 140,
		    age: 30,
		    locationDetail: {
		        city: 'Santa Monica',
		        street: 'Ocean Park'
		    }
		};

		let result = ObjectUtils.defaults( customObj, defaultObj, true );
		
		// your result object should look like
		{
			name: 'Bob',
		    weight: 140,
		    age: 30,
		    gender: 'male',
		    locationDetail: {
		        state: 'CA',
		        city: 'Santa Monica',
		        street: 'Ocean Park'
		    }
		}

		//if not recursive
		let result = ObjectUtils.defaults( customObj, defaultObj, false );

		// your result object should look like ( notice that it takes the whole locationDetail object )
		{
			name: 'Bob',
		    weight: 140,
		    age: 30,
		    gender: 'male',
		    locationDetail: {
		        city: 'Santa Monica',
		        street: 'Ocean Park'
		    }
		}
*/


function defaults(obj, defaultObj, recursive) {
  if (obj === void 0) {
    obj = {};
  }

  var result = clone(obj);

  for (var key in defaultObj) {
    var item = defaultObj[key];

    if (result[key] === undefined) {
      result[key] = defaultObj[key];
    } else if (recursive) {
      if (Object.prototype.toString.call(item) === '[object Object]') {
        result[key] = defaults(result[key], item, recursive);
      }
    }
  }

  return result;
}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.toRadians = toRadians;
exports.toDegrees = toDegrees;
exports.random = random;
exports.randomBoolean = randomBoolean;
exports.randomWeightedKey = randomWeightedKey;
exports.rel = rel;
exports.inRange = inRange;
exports.isNumber = isNumber;
exports.toNumber = toNumber;
exports.restrict = restrict;
exports.getAnglePoint = getAnglePoint;
exports.getAngle = getAngle;
exports.getDistance = getDistance;

/**
    @module MathUtils
    @desc
				<a href="https://github.com/ff0000-ad-tech/ad-utils">Github repo</a>
				<br><br>
				
        Common math utilities.
*/

/**
		@memberOf MathUtils
		@method toRadians
		@param {number} degree
				An angle value as a degree
		@desc
				Converts an angle value from Degrees to Radians.
*/
function toRadians(degree) {
  return Math.PI / 180.0 * degree;
}
/**
		@memberOf MathUtils
		@method toDegrees
		@param {number} radian
				An angle value as a radian
		@desc
				Converts an angle value from Radians to Degrees.
*/


function toDegrees(radian) {
  return 180.0 / Math.PI * radian;
}
/**
		@memberOf MathUtils
		@method random
		@param {number} a
				the first value to find between
		@param {number} b
				the second value to find between 
		@param {number} increment
				optionaly set the increment of the random number. Defaults to 1
		@desc
				Get a random number between a range of two values, with an option to return to a decimal place. ( Note that
				 due to the inprecision of decimal number calculation in Javascript, you may not get a perfect result when 
				 your increment value is decimal, but the value will be close. A classic Javascript inpreciosn calculation example: 
				 0.1 + 0.2 = 0.30000000000000004 ) 
		@example
				MathUtils.random ( 1, 3, 1 );   // returns 1 or 2 or 3
				MathUtils.random ( 1, 3, 0.5 )  // returns 1, 1.5, 2, 2.5 or 3
*/


function random(a, b, increment) {
  b = b || 0;
  increment = increment != undefined && increment > 0 ? increment : 1;
  var min = Math.min(a, b);
  var max = Math.max(a, b);
  min = Math.ceil(min / increment) * increment;
  max = Math.floor(max / increment) * increment;

  var _num = min + Math.floor(Math.random() * ((max - min + increment) / increment)) / (1 / increment);

  return _num;
}
/**
		@memberOf MathUtils
		@method randomBoolean
		@param {number} weight
				change the outcome probabilty. Greater than .5 more likely true. Defaults to .5
		@desc
				Randomly returns a true or false;
*/


function randomBoolean(weight) {
  weight = weight || 0.5;
  return Math.random() < weight;
}

function randomWeightedKey(obj) {
  var keys = [];
  var vals = [0];

  for (var param in obj) {
    keys.push(param);
    vals.push(obj[param] + (vals[vals.length - 1] || 0));
  } //console.log( keys )
  //console.log( vals )


  var rand = Math.random().toFixed(2) * 100;

  for (var k = 0; k < vals.length - 1; k++) {
    var isIn = inRange(rand, vals[k], vals[k + 1]); //console.log( '\t', k, rand, vals[k], vals[k+1], isIn )

    if (isIn) {
      //  console.log( '\t\t', keys[k])
      return keys[k];
    }
  }
}
/**
		@memberOf MathUtils
		@method rel
		@param {number} a0
				the first value to find between
		@param {number} a1
				the second value to find between
		@param {number} b0
				the first value to use as relative to a0
		@param {number} b1
				the second value to use as relative to a1
		@param {number} bX
				the value between b0 and b1
		@desc
				Calculates a value between two numbers relative to a value between 2 other numbers.
				Returns The proportion between a0 and a1 relative to the bX proportion between b0 and b1
		@example
				MathUtils.rel ( 0, 1, 10, 20, 15 ); // 0.5
				MathUtils.rel ( 100, 300, 3, 5, 3.5 ); // 150
*/


function rel(a0, a1, b0, b1, bX) {
  return (bX - b0) / (b1 - b0) * (a1 - a0) + a0;
}
/**
		@memberOf MathUtils
		@method inRange
		@param {number} val
				the number to check
		@param {number} a
				the first value of the range
		@param {number} b
				the second value of the range
		@returns {boolean}
		@desc
				Checks if a value is in the range of two numbers.
		@example
				MathUtils.inRange ( 5, 1, 10 ); // true
				MathUtils.inRange ( -5, 1, 10 ); // false
*/


function inRange(val, a, b) {
  var min = Math.min(a, b);
  var max = Math.max(a, b);
  return val <= max && val >= min;
}
/**
		@memberOf MathUtils
		@method isNumber
		@param {number} num
				the variable to check
		@desc
				Returns true if the passed var is a number.
*/


function isNumber(num) {
  return !isNaN(num);
}
/**
		@memberOf MathUtils
		@method toNumber
		@param {string} str
				the variable to convert
		@desc
				Takes a numerical string and converts it to number type.
*/


function toNumber(str) {
  return +str;
}
/* --------------------------------------------------------------------------------- */
// DEV

/**
		@memberOf MathUtils
		@method restrict
		@desc
				Restricts a value to with a range.
*/


function restrict(num, min, max) {
  return Math.max(min, Math.min(max, num));
}
/**
		@memberOf MathUtils
		@method getAnglePoint
		@returns {array}
				containing an [xValue, yValue] given x1, y1, distance from that starting coordinate, 
				and angle (in *radians*) which the new point should be from the starting coordinate
		@desc
				Assumes original coordinate rotation is 0 radians
*/


function getAnglePoint(x, y, distance, angle) {
  var x = x + Math.cos(angle) * distance;
  var y = y + Math.sin(angle) * distance;
  return [x, y];
}
/**
		@memberOf MathUtils
		@method getAngle
		@retuns {number}
				The angle (in *radians*) between two points given x1, y1, x2, y2
*/


function getAngle(x1, y1, x2, y2) {
  x2 = x2 || 0;
  y2 = y2 || 0;
  return Math.atan2(y2 - y1, x2 - x1);
}
/**
		@memberOf MathUtils
		@method getDistance
		@returns {number}
				The distance between two points given x1, y1, x2, y2
*/


function getDistance(x1, y1, x2, y2) {
  x2 = x2 || 0;
  y2 = y2 || 0;
  return Math.sqrt((y2 - y1) * (y2 - y1) + (x2 - x1) * (x2 - x1));
}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.toRgba = toRgba;
exports.toRgbaString = toRgbaString;
exports.saturation = saturation;
exports.contrast = contrast;
exports.tint = tint;
exports.transform = transform;
exports.invert = invert;

/**
	@class ColorUtils
	@desc
		<a href="https://github.com/ff0000-ad-tech/ad-utils">Github repo</a>
		<br><br>
		
		This class contains methods for manipulating color.
*/

/**	
	@memberOf ColorUtils
	@method toRgba
	@param {string|object} color
		the color to convert, represented as a HEX string:"#ff0000", 
		an RGB/A string: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)" ), 
		or an RGB/A object: {r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}.
	@param {number} alpha
		the optional alpha value for the return string: overrides the alpha value of an RGBA color. 
		If undefined, will default to the alpha value of the color.
	@desc
		Returns an object containing r, g, b, a properties 
*/
function toRgba(color, alpha) {
  switch (typeof color) {
    case 'object':
      color = color || {
        r: 0,
        g: 0,
        b: 0,
        a: 1
      };
      break;

    default:
      // convert from rgb() or rgba() string
      if (color.indexOf('rgb') >= 0) {
        color = color.substring(color.indexOf('(') + 1, color.lastIndexOf(')')).split(/,\s*/);
        color = {
          r: color[0],
          g: color[1],
          b: color[2],
          a: Number(color[3])
        };
      } else if (color.indexOf('#') >= 0) {
        // convert from HEX
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(color);
        color = result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
          a: result[4] ? Number(result[4], 16) : 1
        } : null;
      } else {
        // given a color name like 'red' or 'green'
        console.log('');
        console.log("ERROR: ColorUtils.toRgba does not accept color names such as '" + color + "'. Use HEX or an RGB/A string or object per documentation");
        console.log("Returning the color '" + color + "' without any alpha");
        console.log('');
        return color;
      }

      break;
  }

  if (!color.a) color.a = 1;
  if (alpha >= 0) color.a = alpha;
  return color;
}
/**	
	@memberOf ColorUtils
	@method toRgbaString
	@param {string|object} color
		the color to convert, represented as a HEX string:"#ff0000", 
		an RGB/A string: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)" ), 
		or an RGB/A object: {r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}.
	@param {number} alpha
		the optional alpha value for the return string: overrides the alpha value of an RGBA color. If undefined, will default to the alpha value of the color.
	@desc
		Returns the rgba() string representing a given color and optional alpha
*/


function toRgbaString(color, alpha) {
  var color = toRgba(color, alpha);
  return 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',' + color.a + ')';
}
/**	
	@memberOf ColorUtils
	@method saturation
	@param {object} obj
		an object with paramaters for overall saturation, see Properties for more info
	@property {string|object} from
		the source color to saturate, represented as a HEX string:"#ff0000", 
		an RGB/A string: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)" ), 
		or an RGB/A object: {r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}.
	@property {string|object} color
		synonymous with the from parameter
	@property {number} amount
		the total saturation of the from. 0 = grayscale, 1 = full, original color
	@property {string} format
		either 'object' or 'string' - which determines whether to return an 'rgba()' string or 
		an {r:, g:, b:, a:} object. If undefined, defaults to 'string'.
	@desc
		Change the color saturation of a given color; returns either an 'rgba()' string or an rgba{} object
	@example
		// convert to full grayscale
		ColorUtils.saturation({
			from: '#99aa33',
			amount: 0,
			format: 'object'
		});
		// returns {r: 86, g: 86, b: 86, a: 1}
*/


function saturation(obj) {
  delete obj.to;
  obj = _convert(obj);
  var returnColors = {};

  for (var val in obj.from) {
    if (val === 'a') {
      returnColors[val] = parseInt(obj.from[val]);
    } else {
      if (val === 'r') {
        var _high = 0;
        var _low = 255;

        for (var sub in obj.from) {
          if (parseInt(obj.from[sub]) > _high) _high = parseInt(obj.from[sub]);
          if (parseInt(obj.from[sub]) < _low) _low = parseInt(obj.from[sub]);
        }
      }

      returnColors[val] = Math.round(parseInt(obj.from[val]) * obj.amount + (1 - obj.amount) * ((_high + _low) / 2));
    }
  }

  return obj.format === 'object' ? returnColors : toRgbaString(returnColors);
}
/**	
	@memberOf ColorUtils
	@method contrast
	@param {object} obj
		an object with paramaters for overall saturation, see Properties for more info
	@property {string|object} from
		the source color to begin with, represented as a HEX string:"#ff0000", an RGB/A string: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)" ), or an RGB/A object: {r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}.,
	@property {string|object} color
		synonymous with the from parameter
	@property {number} amount
		the contrast of the target. 0 = no contrast, 1 = original contrast, >1 = more and more, to infinity and beyond!
	@property {string|object} format
		either 'object' or 'string' - which determines whether to return an 'rgba()' string or 
		an {r:, g:, b:, a:} object. If undefined, defaults to 'string'.
	@desc
		Change the contrast of the target; returns either an 'rgba()' string or an rgba{} object
	@example
		// get your whites whiter and brights brighter
		ColorUtils.contrast({
			from: '#aa0011'
			amount: 1.3,
			format: 'object'
		});
		// returns {r: 221, g: 0, b: 22, a: 1}
*/


function contrast(obj) {
  delete obj.to;
  obj = _convert(obj);
  var returnColors = {};

  for (var val in obj.from) {
    returnColors[val] = val === 'a' ? parseInt(obj.from[val]) : Math.round(parseInt(obj.from[val]) * obj.amount);
  }

  return obj.format === 'object' ? returnColors : toRgbaString(returnColors);
}
/**	
	@memberOf ColorUtils
	@method tint
	@param {object} obj
		an object with paramaters for overall saturation, see Properties for more info
	@property {string|object} from
		the source color to begin with, represented as a HEX string:"#ff0000", 
		an RGB/A string: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)" ), 
		or an RGB/A object: {r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}.
	@property {string|object} color
		synonymous with the from parameter
	@property {string|object} to
		the target color to tint to, represented as a HEX string:"#ff0000", 
		an RGB/A string: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)" ), 
		or an RGB/A object: {r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}.
	@property {number} amount
		the percentage of color to apply to the target. Defaults to 1, which is 100% color tinting
	@property {string|object} format
		either 'object' or 'string' - which determines whether to return an 'rgba()' string, 
		or an {r:, g:, b:, a:} object. If undefined, defaults to 'string'.
	@desc
		Tint a color uniformly to a given color; returns either an 'rgba()' string or an rgba{} object
	@example
		// tint to green
		ColorUtils.tint({
			from: '#ffff00',
			to: '#00ff00',
			amount: 1,
			format: 'object'
		});
		// returns {r: 0, g: 255, b: 0, a: 1 };
		(end)

		(start code)
		// tint 50% to green
		ColorUtils.tint({
			from: '#ffff00',
			to: '#00ff00',
			amount: 0.5
		});
		// returns 'rgba(128, 128, 0, 1)'
*/


function tint(obj) {
  obj = _convert(obj);
  var returnColors = {};

  for (var val in obj.from) {
    returnColors[val] = val === 'a' ? parseInt(obj.from[val]) : Math.round(parseInt(obj.from[val]) + (parseInt(obj.to[val]) - parseInt(obj.from[val])) * obj.amount);
  }

  return obj.format === 'object' ? returnColors : toRgbaString(returnColors);
}
/**	
	@memberOf ColorUtils
	@method transform
	@param {object} obj
		an object with paramaters for overall saturation, see Properties for more info
	@property {string|object} from
		the source color to begin with, represented as a HEX string:"#ff0000", 
		an RGB/A string: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)" ), 
		or an RGB/A object: {r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}.
	@property {string|object} color
		synonymous with the from parameter
	@property {string|object} to
		the target color to transform to, represented as a HEX string:"#ff0000", 
		an RGB/A string: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)" ), 
		or an RGB/A object: {r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}.
	@property {number} amount
		the percentage of color to apply to the target. Defaults to 1, which is 100% color transform
	@property {string} format
		either 'object' or 'string' - which determines whether to return an 'rgba()' string or 
		an {r:, g:, b:, a:} object. If undefined, defaults to 'string'.
	@returns {string|object} 
		either an 'rgba()' string or an rgba{} object
	@desc
		Color Transforms a color to another color by pulling colors out of original source; 
	@example
		// remove all colors but greens
		ColorUtils.transform({
			from: '#ffff00',
			to: '#00ff00',
			amount: 1,
			format: 'object'
		});
		// returns {r: 0, g: 255, b: 0, a: 1 };


		// remove all colors but greens
		ColorUtils.transform({
			from: '#ffff00',
			to: '#00ff00',
			amount: 1
		});
		// returns 'rgba(0, 255, 0, 1)'
*/


function transform(obj) {
  obj = _convert(obj);
  var returnColors = {};

  for (var val in obj.from) {
    returnColors[val] = val === 'a' ? parseInt(obj.from[val]) : Math.round(parseInt(obj.from[val]) - (255 - parseInt(obj.to[val])) * obj.amount);
  }

  return obj.format === 'object' ? returnColors : toRgbaString(returnColors);
}
/**	
	@memberOf ColorUtils
	@method invert
	@param {object} obj
		an object with parameters for overall inversion, see Properties for more info
	@property {string|object} from
		the color to invert, represented as a HEX string:"#ff0000", 
		an RGB/A string: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)" ), 
		or an RGB/A object: {r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}.
	@property {string|object} color
		synonymous with the from parameter
	@property {string} format
		either 'object' or 'string' - which determines whether to return an 'rgba()' string or 
		an {r:, g:, b:, a:} object. If undefined, defaults to 'string'.
	@desc
		Invert the color; returns either an 'rgba()' string or an rgba{} object
	@example
		// invert and return result as object
		ColorUtils.invert({
			color: '#ff0000',
			format: 'object'
		});
		// returns {r: 0, g: 255, b: 255, a: 1 };

		// invert and return result as string
		ColorUtils.invert({
			color: '#ff0000'
		});
		// returns 'rgba(0, 255, 255, 1)'
*/


function invert(obj) {
  delete obj.to;
  delete obj.amount;
  obj = _convert(obj);
  var returnColors = {};

  for (var val in obj.from) {
    returnColors[val] = val === 'a' ? parseInt(obj.from[val]) : 255 - parseInt(obj.from[val]);
  }

  return obj.format === 'object' ? returnColors : toRgbaString(returnColors);
} // PRIVATE FUNCTIONS
// ------------------------------------------------------------------
//


function _convert(obj) {
  // if the provided color information is not already in the {r:, g:, b:, a:} object format, we must convert it to that
  obj.from = obj.from || obj.color;
  if (obj.from && typeof obj.from !== 'object') obj.from = toRgba(obj.from);
  if (obj.to && typeof obj.to !== 'object') obj.to = toRgba(obj.to); //

  obj.amount = obj.amount === undefined ? 1 : obj.amount;
  return obj;
}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.combine = combine;
exports.copy = copy;
exports.insertAt = insertAt;
exports.removeAt = removeAt;
exports.remove = remove;
exports.shuffle = shuffle;
exports.contains = contains;

/**
	@class ArrayUtils
	@desc
		<a href="https://github.com/ff0000-ad-tech/ad-utils">Github repo</a>
		<br><br>
		
		This object contains additional methods for manipulating arrays.
*/

/** 
	@memberOf ArrayUtils
	@method combine
	@param {array} arr1
		first array
	@param {array} arr2
		second array appended to the first
	@desc
		A 'more friendly' concat function.
*/
function combine(arr1, arr2) {
  return arr1.concat(arr2);
}
/** 
	@memberOf ArrayUtils
	@method copy
	@param {array} array
		the array to duplicate
	@desc
		Creates a unique duplicate of the given array.
*/


function copy(array) {
  return array.slice();
}
/** 
	@memberOf ArrayUtils
	@method insertAt
	@param {array} array
		the array to modify
	@param {number} index
		the index to insert elements
	@param {arguments} arguments
		the elements to insert
	@desc
		Adds elements at a provided index. Returns a new array.
*/


function insertAt(array, index) {
  var a = array.slice(0, index);
  var b = array.slice(index, array.length);
  var args = Array.prototype.slice.call(arguments);
  var values = args.slice(2, args.length);
  return a.concat(values).concat(b);
}
/**
	@memberOf ArrayUtils
	@method removeAt
	@param {array} array
		the array to modify
	@param {number} index
		the index of the element to remove
	@desc
		Removes an element at a provided index. Returns a new array.
*/


function removeAt(array, index) {
  var a = copy(array);
  a.splice(index, 1);
  return a;
}
/**
	@memberOf ArrayUtils
	@method remove
	@param {array} array
		the array to modify
	@param {number|string} item
		the item to remove from the array
	@desc
		Removes all instances of an element from the given array. Returns a new array.
*/


function remove(array, item) {
  var _returnArray = array.slice();

  while (_returnArray.indexOf(item) >= 0) {
    _returnArray = removeAt(_returnArray, _returnArray.indexOf(item));
  }

  return _returnArray;
}
/**
	@memberOf ArrayUtils
	@method shuffle
	@param {array} array
		the array to modify
	@desc
		Shuffles the array into a random order.
*/


function shuffle(array) {
  return array.sort(function () {
    return Math.random() < 0.5 ? 1 : -1;
  });
}
/**
	@memberOf ArrayUtils
	@method contains
	@param {array} array
		the array to check
	@param {number|string} item
		the item to check for in the array
	@desc
		Determines if a given array contains a given element. Returns a boolean.
*/


function contains(array, item) {
  return array.indexOf(item) >= 0;
}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.fitImageAtCoordinate = fitImageAtCoordinate;

/**
	@class ImageUtils
	@desc
		<a href="https://github.com/ff0000-ad-tech/ad-utils">Github repo</a>
		<br><br>
		
		This object contains methods necessary for manipulating images.
*/

/**
	@memberOf ImageUtils
	@method fitImageAtCoordinate
	@param {element} source
		The div with a background image
	@param {number} originX
		The x position to center on
	@param {number} originY
		The y position to center on
	@desc
		Positions a background image to fit the div size while centering around a point.  If the point is beyond the size bounds, it will align to that side.
*/
function fitImageAtCoordinate(source, originX, originY) {
  var child = new Image();

  if (originX === undefined && originY === undefined) {
    source.style.backgroundPosition = '50% 50%';
  } else {
    // make sure the image is loaded first
    child.onload = function () {
      var coord = {
        width: originX || 0,
        height: originY || 0
      };
      var parent = {
        width: source.offsetWidth,
        height: source.offsetHeight
      };
      var parentAspectRatio = parent.width / parent.height;
      var childAspectRatio = child.width / child.height;

      if (parentAspectRatio > childAspectRatio) {
        // child max fits in horizontal, move y
        fit('width', 'height');
      } else if (parentAspectRatio < childAspectRatio) {
        //  child max fits in vertical, move x
        fit('height', 'width');
      }

      function fit(a, b) {
        // child width is parent height times ratio of child width over child height
        // child height is parent width times ratio of child height over child width
        var childSize = parent[a] * (child[b] / child[a]); // parent to child scale ratio

        var scalePercent = parent[a] / child[a]; // parent size, halfed then subtract the scaled coordinate point

        var childMove = parent[b] / 2 - coord[b] * scalePercent; // make sure the image doesn't exceed the bounds

        var maxMove = parent[b] - childSize;
        if (childMove > 0) childMove = 0;else if (childMove < maxMove) childMove = maxMove;
        source.style.backgroundPosition = a === 'height' ? childMove + 'px 0px' : '0px ' + childMove + 'px';
      }
    };
  }

  child.src = source.style.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2').split(',')[0];
  source.style.backgroundSize = 'cover';
  source.style.backgroundRepeat = 'no-repeat';
}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

exports.__esModule = true;
exports.hasText = hasText;
exports.numlines = numlines;
exports.addSpaces = addSpaces;
exports.getSpecialCharacter = getSpecialCharacter;
exports.trimStartAndEnd = trimStartAndEnd;
exports.removeSpaces = removeSpaces;
exports.pad = pad;

var _adView = __webpack_require__(10);

/* ----------------------------------------------------------------------------------------------------------------------------------------------------------
	Class: 	TextUtils

	Description:
		This object contains methods necessary for manipulating text.
	---------------------------------------------------------------------------------------------------------------------------------------------------------- */

/* Method: hasText()
		Returns true or false depending on whether a div has anything inside of it.
		
	target 					-	div element */
function hasText(target) {
  var elem = typeof target === 'string' ? _adView.Markup.get(target) : target;
  return elem.innerHTML.length > 0;
}
/* Method: numlines()
		Returns the number of lines that can fit in the element, given its size and line-height.
		
	target 					-	div element */


function numlines(target) {
  var elem = typeof target === 'string' ? _adView.Markup.get(target) : target;
  return _adView.Styles.getCss(target, 'height') / _adView.Styles.getCss(target, 'line-height');
}
/* Method: addSpaces()
		Returns the specified number of '&nbsp;' strings.
		
	numberOfSpaces 			-	number of space entities to return */


function addSpaces(numberOfSpaces) {
  var spacingString = '';

  for (var i = 0; i < numberOfSpaces; i++) {
    spacingString += '&nbsp;';
  }

  return spacingString;
}
/* Method: getSpecialCharacter()
		Returns entity equivilent for specified character.
		
	requestedCharacter 		-	character must match the 'label' key 
	isCapital 				-	flag to return the entity as capital */


function getSpecialCharacter(requestedCharacter, isCapital) {
  requestedCharacter = global.proxyStringToLowerCase.apply(requestedCharacter);

  for (var i = 0; i < specialCharacters.length; i++) {
    var currentLabel = global.proxyStringToLowerCase.apply(specialCharacters[i].label);
    if (currentLabel === requestedCharacter) return isCapital ? specialCharacters[i].upperCase : specialCharacters[i].lowerCase;
  }

  return false;
}

var specialCharacters = [{
  label: 'iexcl',
  upperCase: '&#161;',
  lowerCase: '&#161;'
}, {
  label: 'trademark',
  upperCase: '&#153;',
  lowerCase: '&#153;'
}, {
  label: 'copyright',
  upperCase: '&#169;',
  lowerCase: '&#169;'
}, {
  label: 'registered',
  upperCase: '&#174;',
  lowerCase: '&#174;'
}, {
  label: 'nTilde',
  upperCase: '&#209;',
  lowerCase: '&#241;'
}, {
  label: 'aAccent',
  upperCase: '&#193;',
  lowerCase: '&#225;'
}, {
  label: 'eAccent',
  upperCase: '&#201;',
  lowerCase: '&#233;'
}, {
  label: 'iAccent',
  upperCase: '&#205;',
  lowerCase: '&#237;'
}, {
  label: 'oAccent',
  upperCase: '&#211;',
  lowerCase: '&#243;'
}, {
  label: 'uAccent',
  upperCase: '&#218;',
  lowerCase: '&#250;'
}];
/* Method: trimStartAndEnd()
		Removes white space from the start and end of a string.
		
	target -	string to affect */

function trimStartAndEnd(target) {
  return target ? target.replace(/^\s\s*/, '').replace(/\s\s*$/, '') : '';
}
/* Method: removeSpaces()
		Removes all white space from the string.
		
	str 					-	string from which to remove spaces */


function removeSpaces(str) {
  return str.split(' ').join('');
}
/*	Method: pad()

	Pads a number with zeros up to the specified number of places.

	_target				- number to be padded
	_count				- expected result length of the numerical string */


function pad(_target, _count) {
  var _sign = '';
  if (_target < 0) _sign = '-';
  _target = _target.toString().replace(/\-/, '', _target);

  while (_target.length < _count) {
    _target = '0' + _target;
  }

  return _sign + _target;
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var FullScreen = new function () {
  var F = this;

  F.isFullScreen = function () {
    return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
  };

  F.enter = function (elem) {
    if (F.isFullScreen()) return;

    if (elem.requestFullscreen) {
      console.log(' -> requestFullscreen');
      elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
      console.log(' -> msRequestFullscreen');
      elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      console.log(' -> mozRequestFullScreen');
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      console.log(' -> webkitRequestFullscreen');
      elem.webkitRequestFullscreen();
    }
  };

  F.exit = function () {
    if (!F.isFullScreen()) return;

    if (document.exitFullscreen) {
      console.log(' -> exitFullscreen');
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      console.log(' -> msExitFullscreen');
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      console.log(' -> mozCancelFullScreen');
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      console.log(' -> webkitExitFullscreen');
      document.webkitExitFullscreen();
    }
  };
}();
var _default = FullScreen;
exports.default = _default;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.resize = resize;
exports.STRETCH = exports.FIT = exports.FILL = exports.EXACT = void 0;

/**
	@class Ratio
	@desc
		<a href="https://github.com/ff0000-ad-tech/ad-view">Github repo</a>
		<br><br>
		
		Utilities for different ratio layouts; used by {@link UIImage} and deprecated Flipbook.
*/

/**
	@memberof Ratio
	@const {string} EXACT
		'auto' ~ Images display at the exact height and width of the source 
*/
var EXACT = 'auto';
/**
	@memberof Ratio
	@const {string} FILL
		'cover' ~ Scales the image to fill the target without distortion while maintaining aspect ratio, may cause a crop. 
*/

exports.EXACT = EXACT;
var FILL = 'cover';
/**
	@memberof Ratio
	@const {string} FIT
		'contain' ~ Scales to fit the full image without distortion while maintaining aspect ratio, may cause negative borders. 
*/

exports.FILL = FILL;
var FIT = 'contain';
/**
	@memberof Ratio
	@const {string} STRETCH
		'100% 100%' ~ Images stretches to fill the target, may cause aspect ratio distortion. 
*/

exports.FIT = FIT;
var STRETCH = '100% 100%';
exports.STRETCH = STRETCH;

function resize(mode, source, target, returnObj) {
  mode = mode || EXACT;
  returnObj || (returnObj = {
    width: 0,
    height: 0
  });

  if (mode == EXACT) {
    returnObj.width = source.width;
    returnObj.height = source.height;
  } else if (mode == STRETCH) {
    returnObj.width = target.width;
    returnObj.height = target.height;
  } else {
    var s = source.width / source.height;
    var t = target.width / target.height;
    var a = mode == FILL ? s : t;
    var b = mode == FILL ? t : s;

    if (a < b) {
      returnObj.height = source.height / (source.width / target.width);
      returnObj.width = target.width;
    } else {
      returnObj.width = source.width / (source.height / target.height);
      returnObj.height = target.height;
    }
  }

  return returnObj;
}

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.blur = blur;
exports.dropShadow = dropShadow;
exports.textDropShadow = textDropShadow;
exports.glow = glow;
exports.linearGradient = linearGradient;
exports.radialGradient = radialGradient;

var _adUtils = __webpack_require__(0);

var Styles = _interopRequireWildcard(__webpack_require__(11));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/**
	@class Effects
	@desc
		<a href="https://github.com/ff0000-ad-tech/ad-view">Github repo</a>
		<br><br>

		Utilities for adding effects to elements
*/

/* --------------------------------------------------------------------------------- */
// PUBLIC METHODS

/**
	@memberof Effects
	@method blur
	@param {object} obj
		object containing blur arguments, see Properties for more info:

		@property {element} obj.target
			dom element
		@property {number} obj.amount
			the level of blurriness
	@desc
		Blurs a dom element.
	
	
	@example
		//
		Effects.blur({
			target: _myDiv,
			amount: 10
		});
*/
function blur(obj) {
  if (obj.amount >= 0) Styles.setCss(obj.target, {
    filter: 'blur(' + obj.amount + 'px)'
  });
}
/**
	@memberof Effects
	@method dropShadow
	@param {object} obj
		object containing drop shadow arguments, see Properties for more info:
		@property {element} obj.target
			dom element
		@property {number} obj.angle
			optional NUMBER IN DEGREES for the angle at which the shadow will project. Defaults to 0.
		@property {number} obj.distance
			optional NUMBER for how far away the shadow will offset. Defaults to 0.
		@property {number} obj.size
			optional NUMBER for shadow radius. Defaults to 0.
		@property {number} obj.spread
			optional NUMBER for how much extra the shadow will increase before it begins its gradient fade. Defaults to 0.
		@property {string|object} obj.color
			optional color of shadow as a HEX STRING :"#ff0000", 
			RGB/A STRING: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)", 
			or an RGB/A OBJECT:{r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}. Defaults to "#000000".
		@property {number} obj.alpha
			optional NUMBER of shadow opacity, if set will overwrite color.a. Defaults to 1.
		@property {boolean} obj.inner
			optional BOOLEAN to set the shadow as inset. Defaults to false.

	@desc
		Adds a drop shadow to a dom element. Follows the same use specs as Photoshop.
		
	@example
		//
		Effects.dropShadow({
			target:_myDiv,
			angle: 135,
			distance: 50,
			size: 20, 
			spread: 10,
			color: 'rgb(90, 0, 0)',
			alpha: 0.1,
			inner: true
		});
*/


function dropShadow(obj) {
  Styles.setCss(obj.target, {
    boxShadow: createShadow(obj.angle || 0, obj.distance || 0, obj.size || 0, obj.spread || 0, obj.color || '#000000', obj.alpha, obj.inner)
  });
}
/**
	@memberof Effects
	@method textDropShadow
	@param {object} obj
		object containing drop shadow arguments, see Properties for more info:
		@property {element} obj.target
			dom element
		@property {number} obj.angle
			optional NUMBER IN DEGREES for the angle at which the shadow will project. Defaults to 0.
		@property {number} obj.distance
			optional NUMBER for how far away the shadow will offset. Defaults to 0.
		@property {number} obj.size
			optional NUMBER for shadow radius. Defaults to 0.
		@property {string|object} obj.color
			optional color of shadow as a HEX STRING :"#ff0000", 
			RGB/A STRING: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)", 
			or an RGB/A OBJECT:{r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}. Defaults to "#000000".
		@property {number} obj.alpha
			optional NUMBER of shadow opacity, if set will overwrite color.a. Defaults to 1.

	@desc
		Adds a drop shadow to text within a dom element. Follows the same use specs as Photoshop.
		
	@example
		//
		Effects.textDropShadow({
			target:_myText, 
			angle: 45, 
			distance: 15, 
			size: 1, 
			color: '#ff0000', 
			alpha: 0.5
		});
*/


function textDropShadow(obj) {
  Styles.setCss(obj.target, {
    textShadow: createShadow(obj.angle || 0, obj.distance || 0, obj.size || 0, null, obj.color || '#000000', obj.alpha)
  });
}
/**
	@memberof Effects
	@method glow
	@param {object} obj
		object containing glow arguments, see Properties for more info:
		@property {element} obj.target
			dom element
		@property {number} obj.size
			optional NUMBER for glow radius. Defaults to 0.
		@property {number} obj.spread
			optional NUMBER for how much extra the glow will increase before it begins its gradient fade. Defaults to 0.
		@property {string|object} obj.color
			optional color of glow as a HEX STRING :"#ff0000", 
			RGB/A STRING: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)", 
			or an RGB/A OBJECT:{r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}. Defaults to "#000000".
		@property {number} obj.alpha
			optional NUMBER of glow opacity, if set will overwrite color.a. Defaults to 1.
		@property {boolean} obj.inner
			optional BOOLEAN to set the glow as inset. Defaults to false.

	@desc
		Adds a glow to a dom element. Follows the same use specs as Photoshop.
		
	@example
		//
		Effects.glow({
			target: _myDiv,
			size: 20, 
			spread: 0,
			color: 'rgb(90, 0, 0)',
			alpha: 0.5,
			inner: true
		});
*/


function glow(obj) {
  obj.angle = 0;
  obj.distance = 0;
  dropShadow(obj);
}
/**
	@memberof Effects
	@method linearGradient
	@param {object} obj
		object containing gradient arguments, see Properties for more info:
		@property {element} obj.target
			dom element
		@property {array} obj.colors
			ARRAY of colors as either a HEX STRING :"#ff0000" or an RGB/A STRING: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)".
		@property {number} obj.angle
			NUMBER IN DEGREES of angle to draw linear-gradient at. Defaults to 0.
	@desc
		Changes the background of a given dom element to be a linear gradient.
		<br><br>

		<b>Example</b><br>
		Adding a horizontal gradient from red, to blue, fading to a transparent yellow.
		<codeblock>
			Effects.linearGradient({
				target: _myDiv, 
				colors: ['red', 'blue', 'rgba(255, 255, 0, 0.5)'], 
				angle: 90
			});
		</codeblock>
*/


function linearGradient(obj) {
  Styles.setCss(obj.target, {
    background: 'linear-gradient(' + (obj.angle || 0) + 'deg, ' + obj.colors.toString() + ')'
  });
}
/**
	@memberof Effects
	@method radialGradient
	@param {object} obj
		object containing gradient arguments, see Properties for more info:
		@property {element} obj.target
			dom element
		@property {array} obj.colors
			ARRAY of colors as either a HEX STRING :"#ff0000" 
			or an RGB/A STRING: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)". 
			<br><br>

			To add stops, append a % value to the color string: ["#ff0000 50%, "#00ff00 90%"].
		@property {number} obj.angle
			NUMBER IN DEGREES of angle to draw linear-gradient at. Defaults to 0.
	@desc
		Changes the background of a given dom element to be a radial gradient.
		<br><br>

		<b>Example</b><br>
		Adding a gradient from red to blue, with a very large choke on the blue.
		<codeblock>
			Effects.radialGradient({
				target: _myDiv, 
				colors: ['#ff0000', '#0000ff 10%']
			});
		</codeblock>
*/


function radialGradient(obj) {
  Styles.setCss(obj.target, {
    background: 'radial-gradient(' + obj.colors.toString() + ')'
  });
}
/* --------------------------------------------------------------------------------- */
// PRIVATE METHODS


function createShadow(angle, distance, size, spread, color, alpha, inner) {
  var val = '';
  var deg = angle * -1 + 180;

  var rad = _adUtils.MathUtils.toRadians(deg);

  val += (Math.cos(rad) * distance).toFixed(8) + 'px ';
  val += (Math.sin(rad) * distance).toFixed(8) + 'px ';
  val += size + 'px';
  if (spread) val += ' ' + spread + 'px';
  val += ' ' + _adUtils.ColorUtils.toRgbaString(color, alpha);
  inner = !!inner;
  if (inner) val += ' inset';
  return val;
}

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.set = set;
exports.XY = exports.Y = exports.X = void 0;

var Styles = _interopRequireWildcard(__webpack_require__(11));

var Markup = _interopRequireWildcard(__webpack_require__(12));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/**
	@class Clamp
	@desc
		<a href="https://github.com/ff0000-ad-tech/ad-view">Github repo</a>
		<br><br>

		Utility for resizing a DOM element to the size of all its content, sort of like shrink wrapping.
		<br><br>
		
		This will clamp the bounds and potentially move the x and y so that visually the content stays where it is. There is the option to clamp 
		both horizontally and vertically, or you can just do one. Additionally there is a optional object to add some buffer space on any of the sides.

	@example
		// clamp both directions
		Clamp.set( View.main.myDiv, Clamp.XY );
		
		// clamp both directions while adding some buffer padding on each side
		Clamp.set( View.main.myDiv, Clamp.XY, {
			top : 5,
			left : 10,
			bottom : 5,
			right : 10
		});

		// clamp only horizontally and add a buffer padding on the left
		Clamp.set( View.main.myDiv, Clamp.X, {
			left : 10
		});
*/
var _rect = {
  x: ['offsetWidth', 'width', 'left', 'right'],
  y: ['offsetHeight', 'height', 'top', 'bottom']
  /**
  		@memberof Clamp
  		@const {string} X
  			Synonymous with "clampX" - clamp on the horizontal direction only 
  	*/

};
var X = 'clampX';
/**
	@memberof Clamp
	@const {string} Y
		Synonymous with "clampY" - clamp on the vertical direction only 
*/

exports.X = X;
var Y = 'clampY';
/**
	@memberof Clamp
	@const {string} XY
		Synonymous with "clampXY" - clamp on all sides 
*/

exports.Y = Y;
var XY = 'clampXY';
/* ------------------------------------------------------------------------------------------------------------------------------- */
// PUBLIC METHODS

/**
			@memberof Clamp
			@method set
			@param {element} source
				The DOM element to resize and move.
			@param {string} type
				A String/Constant representing what directions to clamp on.
			@param {object} buffer
				(optional) An Object that has the values to add buffer padding to each side. See properties for more info:
		
				@property {number} buffer.left
					Amount of left padding
				@property {number} buffer.right
					Amount of right padding
				@property {number} buffer.top
					Amount of top padding
				@property {number} buffer.bottom
					Amount of bottom padding
			@desc
				Resizes and moves the source element horizontally and/or vertically, relative to all its children. 
		*/

exports.XY = XY;

function set(source, type, buffer, move) {
  var elem = Markup.get(source);
  move = move !== false;
  var children = elem.childNodes;
  var childCoordinates = [];
  var direction = {};
  if (/(x)/gi.exec(type)) direction.x = {};
  if (/(y)/gi.exec(type)) direction.y = {};

  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    childCoordinates[i] = {};

    for (var xy in direction) {
      var xyValue = Styles.getCss(child, xy);
      var whValue = child[_rect[xy][0]];
      var add = xyValue + whValue;
      var xyDirection = direction[xy];

      if (i == 0) {
        xyDirection.min = xyValue;
        xyDirection.max = add;
      }

      if (xyValue < xyDirection.min) xyDirection.min = xyValue;
      if (xyDirection.max < add) xyDirection.max = add;
      childCoordinates[i][xy] = xyValue;
    }
  } // process the optional buffer


  var _buffer = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  };

  if (buffer) {
    for (var prop in _buffer) {
      _buffer[prop] = isNaN(buffer) ? buffer[prop] || 0 : buffer;
    }
  } // resize and move the container


  var css = {};

  for (var xy in direction) {
    var d = direction[xy];
    if (move) css[xy] = d.min + Styles.getCss(elem, xy) - _buffer[_rect[xy][2]];
    css[_rect[xy][1]] = d.max - d.min + _buffer[_rect[xy][2]] + _buffer[_rect[xy][3]];
  }

  Styles.setCss(elem, css); // move all the children

  for (i = 0; i < children.length; i++) {
    var child = children[i];
    var css = {};

    for (var xy in direction) {
      css[xy] = childCoordinates[i][xy] - direction[xy].min + _buffer[_rect[xy][2]];
    }

    Styles.setCss(child, css);
  }
}
/* ------------------------------------------------------------------------------------------------------------------------------- */

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.get = get;
exports.set = set;
exports.calculate = calculate;
exports.TOP_RIGHT = exports.TOP_LEFT = exports.BOTTOM_RIGHT = exports.BOTTOM_LEFT = exports.TOP = exports.RIGHT = exports.LEFT = exports.CENTER = exports.BOTTOM = void 0;

var Markup = _interopRequireWildcard(__webpack_require__(12));

var Styles = _interopRequireWildcard(__webpack_require__(11));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/**
	@class Align
	@desc
		<a href="https://github.com/ff0000-ad-tech/ad-view">Github repo</a>
		<br><br>

		Utility for aligning objects, which works for DOM elements and {@link CanvasDrawer} elements.  The x and y alignments are split up
		into separate assignemnts in one call. There are extra parameters that can be passed into the object to handle more complex logic.
		<br><br>

		<b>Notes:</b>
			<br>
			Align, by default, snaps to a full pixel. To change this, see <b>Sample 3</b> ( snap: false )
			<br><br>

		<b>Sample 1</b>
		<codeblock>
			// simple classic usage
			Align.set( myDiv, Align.LEFT ); // only align left
			Align.set( myDiv, Align.BOTTOM ); // only align bottom
			Align.set( myDiv, Align.CENTER ); // align both x and y to the center
		</codeblock>
		<br><br>
		
		<b>Sample 2</b>
		<codeblock>
			// simply align the x and y seperately
			Align.set( myDiv, {
				x: Align.RIGHT,
				y: Align.BOTTOM
			});
		</codeblock>
		<br><br>

		<b>Sample 3</b>
		<br>
		<b>'against'</b> is an object to which we align our given object, like making myDiv perfectly centered against myOtherDiv
		<br>
		<b>'against'</b> could also be a number, as in align myDiv centered against adParams.adWidth / 2
		<br>
		<br>
		<b>'outer'</b> is an optional complex parameter which determines how we align to the 'against' object; default to false
		<br>
		If <b>'against'</b> is a number, then <b>'outer'</b> will have no affect.
		<br>
		<br>
		<img src="../docs_images/align/align_c.jpg" />
		<br><br>
		<codeblock>
			// complex alignment, align in relation to another div with an offset shift of 10 pixels, without snapping to a whole pixel
			Align.set( myDiv, {
				x: {
					type: Align.RIGHT,
					against: myOtherDiv
					offset: 10,
					outer: true
				},
				y: {
					type: Align.BOTTOM,
					offset: 14
				},
				snap: false
			});
		</codeblock>
		<br><br>

		<b>Sample 4</b>
		<codeblock>
			// complex alignment, align in relation to a fixed number with an offset shift of 10 pixels
			Align.set( myDiv, {
				x: {
					type: Align.RIGHT,
					against: 200
					offset: 10,
				},
				y: {
					type: Align.BOTTOM,
					against: 30
					offset: 14
				},
			});
		</codeblock>
		<br><br>
*/
var _rect = [{
  x: 'offsetWidth',
  y: 'offsetHeight',
  parent: 'parentNode'
}, {
  x: 'width',
  y: 'height',
  parent: 'stage'
}];
/**
		@memberof Align
		@const {string} BOTTOM
			Synonymous with "alignBottom" 
	*/

var BOTTOM = 'alignBottom';
/**
	@memberof Align
	@const {string} CENTER
		Synonymous with "alignCenter" 
*/

exports.BOTTOM = BOTTOM;
var CENTER = 'alignCenter';
/**
	@memberof Align
	@const {string} LEFT
		Synonymous with "alignLeft" 
*/

exports.CENTER = CENTER;
var LEFT = 'alignLeft';
/**
	@memberof Align
	@const {string} RIGHT
		Synonymous with "alignRight" 
*/

exports.LEFT = LEFT;
var RIGHT = 'alignRight';
/**
	@memberof Align
	@const {string} TOP
		Synonymous with "alignTop" 
*/

exports.RIGHT = RIGHT;
var TOP = 'alignTop';
/**
	@memberof Align
	@const {string} BOTTOM_LEFT
		Synonymous with "alignBottomLeft", used for {@link UITextField.alignText} 
*/

exports.TOP = TOP;
var BOTTOM_LEFT = 'alignBottomLeft';
/**
	@memberof Align
	@const {string} BOTTOM_RIGHT
		Synonymous with "alignBottomRight" used for {@link UITextField.alignText} 
*/

exports.BOTTOM_LEFT = BOTTOM_LEFT;
var BOTTOM_RIGHT = 'alignBottomRight';
/**
	@memberof Align
	@const {string} TOP_LEFT
		Synonymous with "alignTopLeft" used for {@link UITextField.alignText} 
*/

exports.BOTTOM_RIGHT = BOTTOM_RIGHT;
var TOP_LEFT = 'alignTopLeft';
/**
	@memberof Align
	@const {string} TOP_RIGHT
		Synonymous with "alignTopRight" used for {@link UITextField.alignText} 
*/

exports.TOP_LEFT = TOP_LEFT;
var TOP_RIGHT = 'alignTopRight';
/* ------------------------------------------------------------------------------------------------------------------------------- */
// PUBLIC METHODS

/**
		@memberof Align
		@method get
		@desc
			Calculates but does not apply the amount the source element will move horizontally and/or vertically, relative to its parent 
			according to provided mode. The constants allow for picking which coordinate to apply.  
	*/

exports.TOP_RIGHT = TOP_RIGHT;

function get(source, arg) {
  var elem = source.canvas || Markup.get(source);
  var obj = {};
  var snap = arg.snap !== false;
  var sourceRect = isDomElement(source) ? 0 : 1;
  if (typeof arg == 'string') arg = calculate(arg);

  for (var xy in arg) {
    if (xy == 'x' || xy == 'y') {
      var params = arg[xy]; // the x or y is null or undefined, so skip this pass of the loop

      if (!params) continue;
      if (typeof params == 'string') params = {
        type: params
      };
      var against;
      var againstDimension;
      var againstX = 0;
      var againstNumber = false;
      var offset = params.offset || 0;

      var _givenAgainst;

      if (params.against !== undefined) {
        _givenAgainst = true;
        against = params.against;
        var againstRect = 0;

        if (isDomElement(against)) {
          if (against.canvas) againstRect = 1;else againstX = Styles.getCss(against, xy);
        } else if (typeof against === 'number') {
          againstNumber = true;
          againstX = against;
        } else {
          againstX = against[xy];
          againstRect = 1;
        }

        againstDimension = _rect[againstRect][xy];
        if (params.type === CENTER) arg[xy].outer = false;
      } else {
        against = elem[_rect[sourceRect].parent];
        againstDimension = _rect[sourceRect][xy];
      }

      var widthOrHeight = elem[_rect[sourceRect][xy]];

      switch (source._type) {
        case 'arc':
        case 'path':
          switch (params.type) {
            case CENTER:
              widthOrHeight = 0;
              break;

            default:
              offset += widthOrHeight / 2;
              break;
          }

          break;

        case 'text':
          if (xy === 'x') {
            switch (source.alignText) {
              case 'center':
                widthOrHeight = 0;

              case 'right':
                widthOrHeight *= -1;
            }
          }

          break;
      } // checks if qualityScale is available which means it is a CanvasDrawer or CanvasDrawer's canvas,
      // without checking if it is the module directly


      widthOrHeight /= source.qualityScale || 1;
      var pos = calculate(params.type, widthOrHeight, againstNumber ? 0 : against[againstDimension] / (against.qualityScale || 1), !againstNumber && !!arg[xy].outer);

      if (pos != null) {
        pos += againstX + offset;
        obj[xy] = snap ? Math.round(pos) : pos;
      }
    }
  }

  return obj;
}
/**
		@memberof Align
		@method set
		@desc
			Moves the source element horizontally and/or vertically, relative to its parent according to provided mode. The constants 
			allow for picking which coordinate to apply.  
	*/


function set(source, arg) {
  var obj = get(source, arg);

  if (isDomElement(source)) {
    var elem = source.canvas || Markup.get(source);
    Styles.setCss(elem, obj);
  } else {
    for (var prop in obj) {
      source[prop] = obj[prop];
    }
  }

  return obj;
}
/* ------------------------------------------------------------------------------------------------------------------------------- */
// PRIVATE METHODS
// used internally by Flipbook


function calculate(mode, source, target, outer) {
  //console.log( 'calculate()', mode, source, target, outer )
  // when only passing a string, this will create {x/y} from string
  var isConvert = arguments.length == 1; // Kenny Version 1.0

  /*switch ( mode ){
  	case 'alignBottom' :
  		if ( outer ) 
  			source = 0
  		if ( !isConvert )
  			return target - source;
  	
  	case 'alignTop' :
  		return isConvert ? { y:mode } : outer ? -source : 0 ;
  					
  		case 'alignRight' :
  		if ( outer ) 
  			target = 0
  		if ( !isConvert )
  			return target - source;
  				
  	case 'alignLeft' :
  		return isConvert ? { x:mode } : outer ? target : 0 ;
  		case 'alignCenter' :
  		if ( outer ) 
  			target = 0
  		return isConvert ? { x:mode, y:mode } : ( target - source ) / 2;
  	
  	default :
  		return null;
  }*/
  // Andrew Version 1.0

  /*switch ( mode ) {
  	case 'alignBottom':
  		if ( outer )
  			source = target + source
  		if ( !isConvert )
  			return target - source;
  		case 'alignTop':
  		return isConvert ? {
  			y: mode
  		} : outer ? target : 0;
  
  	case 'alignRight':
  		if ( outer )
  			target = 0
  		if ( !isConvert )
  			return target - source;
  		case 'alignLeft':
  		return isConvert ? {
  			x: mode
  		} : outer ? target : 0;
  		case 'alignCenter':
  		if ( outer )
  			target = 0
  		return isConvert ? {
  			x: mode,
  			y: mode
  		} : ( target - source ) / 2;
  		default:
  		return null;
  }*/
  // Andrew Version 2.0

  switch (mode) {
    case 'alignBottom':
      if (outer) source = 0;
      if (!isConvert) return target - source;

    case 'alignTop':
      return isConvert ? {
        y: mode
      } : outer ? -source : 0;

    case 'alignRight':
      if (outer) target += source;
      if (!isConvert) return target - source;

    case 'alignLeft':
      return isConvert ? {
        x: mode
      } : outer ? -source : 0;

    case 'alignCenter':
      if (outer) target = 0;
      return isConvert ? {
        x: mode,
        y: mode
      } : (target - source) / 2;

    default:
      return null;
  }
}
/* ------------------------------------------------------------------------------------------------------------------------------- */
// PRIVATE METHODS


function isDomElement(elem) {
  return elem instanceof HTMLElement || elem.canvas != undefined;
}
/* ------------------------------------------------------------------------------------------------------------------------------- */

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

exports.__esModule = true;
exports.getQueryParameterBy = getQueryParameterBy;

/** 
	@class NetUtils
	@desc
		<a href="https://github.com/ff0000-ad-tech/ad-utils">Github repo</a>
		<br><br>
		
		Utility functions that are common in making network requests.
*/

/**
	@memberOf NetUtils
	@method getQueryParameterBy
	@param {string} name
		the query string variable name
	@desc
		Analyses the URI query string and search for a key-value pair matching the requested var. 
*/
function getQueryParameterBy(name) {
  return global.queryParams[name];
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var _default = {
  'english': {
    MONTHS_FULL: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    MONTHS_ABRV: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
    MONTHS_EXCP: ['', '', '', '', '', '', '', '', 'sept', '', '', ''],
    WEEKDAYS_FULL: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    WEEKDAYS_ABRV: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
    WEEKDAYS_EXCP1: ['', '', 'tues', 'wednes', 'thur', '', ''],
    WEEKDAYS_EXCP2: ['', '', '', '', 'thurs', '', ''],
    ST: 'st',
    ND: 'nd',
    RD: 'rd',
    TH: 'th',
    OF: 'of',
    TOMORROW: 'Tomorrow',
    TODAY: 'Today',
    TONIGHT: 'Tonight',
    NOW: 'Live Now',
    PAST: 'Past'
  }
};
exports.default = _default;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var DateManager = _interopRequireWildcard(__webpack_require__(14));

var DateFormatter = _interopRequireWildcard(__webpack_require__(6));

var DateUtils = _interopRequireWildcard(__webpack_require__(13));

var _TzDate = _interopRequireDefault(__webpack_require__(5));

var _DateSchedule = _interopRequireDefault(__webpack_require__(26));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/**
	@class RecurringSchedule
	@desc
		<a href="https://github.com/ff0000-ad-tech/ad-dates">Github repo</a>
		<br><br>
		
		This class is for determining the next showtime for events that repeat on a weekly basis. For example, you have a tune-in that
		is every Friday at 6pm, and you want your date messaging to update dynamically.
		
		<codeblock>
			var schedule = new RecurringSchedule({	
				tuneins: [
					{	
						days: ['Friday'],
						startTime: '18:00',
						eventDuration : 60
					}
				]
			});			
		</codeblock>
		<br>

		For more complex schedules( like sports tournaments ), a more complex model might look like this
		<codeblock>
			var schedule = new RecurringSchedule({	
				tuneins: [
					{	
						days: ['Friday','Saturday','Sunday'],
						startTime: '21:00',
						eventDuration : 60,
						timezone: Timezone.EST
					},
					{	
						days: ['Monday','Tuesday','Wednesday','Thursday'],
						startTime: '18:00',
						eventDuration : 75,
						timezone: Timezone.EST
					}
				]
			});
		</codeblock>
		<br>
		
		Just like DateSchedule, this uses the standard schedule to create the date messaging, which is accessed with
		the same methods.
		<codeblock>
			schedule.print();
			schedule.currentSchedule.print();
			schedule.currentSchedule.target.print();
			console.log( schedule.current );
			schedule.currentDate.print();
			console.log( schedule.currentLabel );
		</codeblock>
*/
var RecurringSchedule = function RecurringSchedule(dateModel) {
  var R = this;

  var _schedule; // ---------------------------------------------------------------------------------------------------------------
  // PUBLIC METHODS


  Object.defineProperties(R, {
    /**
    	@memberOf RecurringSchedule
    	@var {object} currentSchedule
    		Getter : A DateSchedule is created for the current date, allowing for the standard messaging to be created
    	@example
    		mySchedule.currentSchedule.print();
    */
    currentSchedule: {
      get: function get() {
        var curStart = _schedule.current.date;
        var current = new _DateSchedule.default({
          target: curStart,
          isStandard: true,
          eventDuration: curStart.eventDuration,
          callback: curStart.callback
        });

        if (current.isComplete) {
          var nextStart = _schedule.next.date;
          current = new _DateSchedule.default({
            target: nextStart,
            isStandard: true,
            eventDuration: nextStart.eventDuration,
            callback: nextStart.callback
          });
        }

        return current;
      }
    },

    /**
    	@memberOf RecurringSchedule
    	@var {object} current
    		Getter : An object of the current date, label and optional callback
    	@example
    		mySchedule.current.date;
    		mySchedule.current.label;
    		mySchedule.current.callback();
    */
    current: {
      get: function get() {
        return R.currentSchedule.current;
      }
    },

    /**
    	@memberOf RecurringSchedule
    	@var {TzDate} currentDate
    		Getter : Is direct access to the current date, same as mySchedule.current.date
    	@example
    		mySchedule.currentDate;
    */
    currentDate: {
      get: function get() {
        return R.current.date;
      }
    },

    /**
    	@memberOf RecurringSchedule
    	@var {String} currentLabel
    		Getter : Is direct access to the current label, same as mySchedule.current.label
    	@example
    		mySchedule.currentLabel;
    */
    currentLabel: {
      get: function get() {
        return R.current.label;
      }
    }
  }); // ---------------------------------------------------------------------------------------------------------------
  // PUBLIC METHODS

  /**
  	@memberOf RecurringSchedule
  	@method print
  	@desc
  		Traces out all dates in order 
  	
  	<codeblock>
  		// called on Thursday 2017-06-01 14:08:00-07:00
  		mySchedule.print();
  			// DateSchedule.print(), length: 8
  		//  - 0 Sat Jan 01 2000 00:00:00 UTC label: 1/1 12:00 am
  		//  - 1 Thu Jun 01 2017 18:00:00 US/Eastern label: undefined
  		//  - 2 Fri Jun 02 2017 21:00:00 US/Eastern label: undefined
  		//  - 3 Sat Jun 03 2017 21:00:00 US/Eastern label: undefined
  		//  - 4 Sun Jun 04 2017 21:00:00 US/Eastern label: undefined
  		//  - 5 Mon Jun 05 2017 18:00:00 US/Eastern label: undefined
  		//  - 6 Tue Jun 06 2017 18:00:00 US/Eastern label: undefined
  		//  - 7 Wed Jun 07 2017 18:00:00 US/Eastern label: undefined
  	</codeblock>
  */

  R.print = function () {
    _schedule.print();
  }; // ---------------------------------------------------------------------------------------------------------------
  // PRIVATE METHODS
  // loop all the events and create actual date objects representing the next show


  function parseModel() {
    var now = DateManager.getNow();
    var labels = DateFormatter.getLabels().WEEKDAYS_FULL;
    _schedule = new _DateSchedule.default(); // tuneins array of objects

    var tuneins = dateModel.tuneins;

    for (var k = 0; k < tuneins.length; k++) {
      var tuneinObj = tuneins[k];
      var days = tuneinObj.days;
      var dayOfWeek = now.getDay(); // days array of strings

      for (var q = 0; q < days.length; q++) {
        var dayLabel = days[q];
        var labelIndex = labels.indexOf(dayLabel);
        var dayShift = labelIndex - dayOfWeek;
        var date = new _TzDate.default({
          datetime: [now.toDateTimeISO().split('T')[0] + 'T' + tuneinObj.startTime + ':00', tuneinObj.timezone]
        });
        date = DateUtils.adjust(date, {
          day: dayShift
        });

        if (DateUtils.isPast(date, now)) {
          // now check if it is past the duration
          var temp = DateUtils.adjust(date, {
            minute: tuneinObj.eventDuration
          });

          if (DateUtils.isPast(temp, now)) {
            // if so, add a week to it
            date = DateUtils.adjust(date, {
              day: 7
            });
          }
        }

        date.eventDuration = tuneinObj.eventDuration;
        date.callback = tuneinObj.callback;
        console.log('\t', date.print());

        _schedule.addDate(date); //, '', tuneinObj.callback );

      }
    }
  } // ---------------------------------------------------------------------------------------------------------------
  // INIT


  parseModel();
};

var _default = RecurringSchedule;
exports.default = _default;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var _default = {
  'spanish': {
    MONTHS_FULL: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
    MONTHS_ABRV: ['enero', 'feb', 'marzo', 'abr', 'mayo', 'jun', 'jul', 'agosto', 'sept', 'oct', 'nov', 'dic'],
    MONTHS_EXCP: ['', '', '', '', '', '', '', '', 'sep', '', '', ''],
    WEEKDAYS_FULL: ['domingo', 'lunes', 'martes', 'mi&#201;rcoles', 'jueves', 'viernes', 's&#193;bado'],
    WEEKDAYS_ABRV: ['dom', 'lun', 'mar', 'mi&#201;r', 'jue', 'vier', 's&#193;b'],
    WEEKDAYS_EXCP1: ['', '', 'tues', 'wednes', 'thur', '', ''],
    WEEKDAYS_EXCP2: ['', '', '', '', 'thurs', '', ''],
    ST: 'ro',
    ND: 'ndo',
    RD: 'rd',
    TH: 'th',
    OF: 'de',
    TOMORROW: 'ma&#209;ana',
    TODAY: 'hoy',
    TONIGHT: 'esta noche',
    NOW: 'en vivo',
    PAST: 'past'
  }
};
exports.default = _default;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addSchedule = addSchedule;
exports.addCustomData = addCustomData;
exports.dispatchData = dispatchData;
exports.dispatchSnapshot = dispatchSnapshot;

/** ----------------------------------------------------------------------------------------------------------------------------------------------------------
	Class: 	StaticGenerator

	Description:
		This class controls the communication with the backend to enable static snap shots of the ad's endframe,
		including the ability to take a shot of every date for a unit with a DateSchedule determining its messaging.
	
	Adding a Schedule:
		(start code)
			// within AdData.js
			import { StaticGenerator } from 'ad-external'

			// create a schedule
			var schedule = new DateSchedule({
				target: new TzDate({
					datetime: Velvet.get('tune_in.datetime'),
					outputTimezone: Velvet.get('tune_in.timezone')
				}),
				isStandard: true
			});

			// add the schedule to StaticGenerator
			StaticGenerator.addSchedule(schedule);
			// make a call that will be heard by Velvet
			StaticGenerator.dispatchData();
		(end code)

	Adding custom data to be passed into the ad:
		(start code)
			// within AdData.js
			import { StaticGenerator } from 'ad-external'

			StaticGenerator.addCustomData({ type:'yellow' });
			StaticGenerator.dispatchData();
		(end code)

	Calling the snap shot at the end of the ad:
		(start code)
			// within Control
			this.animationComplete = function() {
				console.log( 'Control.animationComplete()' );
				StaticGenerator.dispatchSnapshot();
			}

			// then from the end of the animation, call 
			Control.animationComplete()

		(end code)
		
	Notes:
		Some notes forthcoming.

	---------------------------------------------------------------------------------------------------------------------------------------------------------- */
var _collection = [];
/**
	@memberOf StaticGenerator
	@method schedule
	@param {DateSchedule} schedule
		A DateSchedule instance that determines different endframe messaging/layout
	@desc
		Add a DateSchedule to the class to be dispatched back to the server.  A screen snap shot will be generated for each 
		date in the schedule. This method can be called as many times as necessary such as with an ESPN double header. However, 
		this should correspond to any DateSchedule that affects the endframe's layout/messaging only. 
*/

function addSchedule(schedule) {
  var dates = schedule.getDates(true);
  var tz = schedule.target.outputTimezone.abbr.toUpperCase();

  for (var i = 0; i < dates.length; i++) {
    var item = dates[i];
    var date = item.date;
    var obj = {
      date: date.toISO(),
      tz: tz,
      ltz: adParams.defaultTimezone,
      label: item.standardKey // console.log('\t', date.toFullDateTime(), '\t', item.standardKey, '\t', obj)

    };

    _collection.push(obj);
  }
}
/**
	@memberOf StaticGenerator
	@method addCustomData
	@param {Object} obj
		An object with key/value pairs
	@desc
		Add an Object to the class to be dispatched back to the server.  A screen snap shot will be generated for each 
		data object. This method can be called as many times as necessary. 
*/


function addCustomData(obj) {
  trace('StaticGenerator.addCustomData()');

  if (typeof obj !== 'object') {
    throw new Error('Cannot use a primative as data, must be an Object passed to .addCustomData()');
  }

  _collection.push(obj);
}
/**
	@memberOf StaticGenerator
	@method dispatchData
	@desc
		Passes all schedule dates or data objets back to the server.  If it is dates, this is the list of dates that the ad will 
		be set to inorder to get each different end frame messaging. If it is other data, it will be passed through the query string 
		and can be consumed by the ad to indicate which state to shoot inThis should be called from AdData after all DateSchedules 
		are defined and passed in.
*/


function dispatchData() {
  if (_collection.length === 0) {
    _collection.push({
      'foo': 'bar'
    });
  }

  console.log('StaticGenerator.dispatchSchedule()\n\t', _collection);
  dispatch('setParameters', _collection);
}
/**
	@memberOf StaticGenerator
	@method dispatchSchedule
	@desc
		Calls back to the server to take a screen snap shot. This must be called after all animation is complete. 
*/


function dispatchSnapshot() {
  console.log('StaticGenerator.dispatchSnapshot()');
  dispatch('snapshot', {});
}

function dispatch(event, data) {
  if (typeof window.callExternal === 'function') {
    window.callExternal({
      event: event,
      data: data
    });
  }
}

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

/**
	@class Matrix3D
	@desc
		<a href="https://github.com/ff0000-ad-tech/ad-geom">Github repo</a>
		<br><br>
*/
var Matrix3D = function Matrix3D() {
  var M = this; // initial set identity base matrix array to data

  M.identity = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
  M.data = new Float32Array(M.identity);
};

Matrix3D.prototype = {
  clear: function clear() {
    var M = this;
    M.data.set(M.identity);
  },
  rotateX: function rotateX(radians) {
    var M = this;
    var c = Math.cos(radians).toFixed(15);
    var s = Math.sin(radians).toFixed(15); // copy the identity to be modified

    var _m = new Float32Array(M.identity);

    _m[5] = c;
    _m[6] = s;
    _m[9] = -s;
    _m[10] = c; //  1, 0,        0,         0,
    //  0, cos(rad), sin(rad), 0,
    //  0, -sin(rad), cos(rad),  0,
    //  0, 0,        0,         1

    M.multiply(_m);
    return M;
  },
  rotateY: function rotateY(radians) {
    var M = this;
    var c = Math.cos(radians).toFixed(15);
    var s = Math.sin(radians).toFixed(15); // copy the identity to be modified

    var _m = new Float32Array(M.identity);

    _m[0] = c;
    _m[2] = -s;
    _m[8] = s;
    _m[10] = c; //  cos(rad),  0, -sin(rad), 0,
    //  0,         1, 0,        0,
    //  sin(rad), 0, cos(rad), 0,
    //  0,         0, 0,        1

    M.multiply(_m);
    return M;
  },
  rotateZ: function rotateZ(radians) {
    var M = this;
    var c = Math.cos(radians).toFixed(15);
    var s = Math.sin(radians).toFixed(15); // copy the identity to be modified

    var _m = new Float32Array(M.identity);

    _m[0] = c;
    _m[1] = s;
    _m[4] = -s;
    _m[5] = c; //  cos(rad),  sin(rad), 0, 0,
    //  -sin(rad), cos(rad), 0, 0,
    //  0,         0,        1, 0,
    //  0,         0,        0, 1

    M.multiply(_m);
    return M;
  },
  scale: function scale(x, y) {
    var M = this; // copy the identity to be modified

    var _m = new Float32Array(M.identity);

    _m[0] = x;
    _m[5] = y; //  x, 0, 0, 0,
    //  0, y, 0, 0,
    //  0, 0, 1, 0,
    //  0, 0, 0, 1

    M.multiply(_m);
    return M;
  },
  skew: function skew(ax, ay) {
    var M = this; // copy the identity to be modified

    var _m = new Float32Array(M.identity);

    _m[1] = Math.tan(ay) || 0;
    _m[4] = Math.tan(ax) || 0; //  1,       tan(ay), 0, 0,
    //  tan(ax), 1,       0, 0,
    //  0,       0,       1, 0,
    //  0,       0,       0, 1

    console.log(_m[1], _m[4]);
    M.multiply(_m);
    return M;
  },
  translate: function translate(x, y, z) {
    var M = this; // copy the identity to be modified

    var _m = new Float32Array(M.identity);

    _m[12] = x || 0;
    _m[13] = y || 0;
    _m[14] = z || 0; //  1, 0, 0, 0,
    //  0, 1, 0, 0,
    //  0, 0, 1, 0,
    //  x, y, z, 1

    M.multiply(_m);
    return this;
  },
  multiply: function multiply(m) {
    var M = this; // copy the current matrix data into '_c'

    var _c = new Float32Array(M.data);

    M.data[0] = _c[0] * m[0] + _c[1] * m[4] + _c[2] * m[8];
    M.data[1] = _c[0] * m[1] + _c[1] * m[5] + _c[2] * m[9];
    M.data[2] = _c[0] * m[2] + _c[1] * m[6] + _c[2] * m[10];
    M.data[3] = 0;
    M.data[4] = _c[4] * m[0] + _c[5] * m[4] + _c[6] * m[8];
    M.data[5] = _c[4] * m[1] + _c[5] * m[5] + _c[6] * m[9];
    M.data[6] = _c[4] * m[2] + _c[5] * m[6] + _c[6] * m[10];
    M.data[7] = 0;
    M.data[8] = _c[8] * m[0] + _c[9] * m[4] + _c[10] * m[8];
    M.data[9] = _c[8] * m[1] + _c[9] * m[5] + _c[10] * m[9];
    M.data[10] = _c[8] * m[2] + _c[9] * m[6] + _c[10] * m[10];
    M.data[11] = 0;
    M.data[12] = _c[12] * m[0] + _c[13] * m[4] + _c[14] * m[8] + m[12];
    M.data[13] = _c[12] * m[1] + _c[13] * m[5] + _c[14] * m[9] + m[13];
    M.data[14] = _c[12] * m[2] + _c[13] * m[6] + _c[14] * m[10] + m[14];
    M.data[15] = 1;
  },
  getCss: function getCss() {
    var M = this;
    return 'matrix3d(' + M.data[0] + ',' + M.data[1] + ',' + M.data[2] + ', 0,' + M.data[4] + ',' + M.data[5] + ',' + M.data[6] + ', 0,' + M.data[8] + ',' + M.data[9] + ',' + M.data[10] + ', 0,' + M.data[12] + ',' + M.data[13] + ',' + M.data[14] + ', 1)';
  }
};

Matrix3D.cssToData = function (matrixString) {
  return matrixString.match(/\(([^\)]+)\)/)[1].replace(/\s/g, '').split(',').map(Number);
};

var _default = Matrix3D;
exports.default = _default;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _Matrix2D = _interopRequireDefault(__webpack_require__(27));

var _adUtils = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
	@class ParentTransform
	@desc
		<a href="https://github.com/ff0000-ad-tech/ad-geom">Github repo</a>
		<br><br>
*/
// pseudo?
// TODO - change order of translations, possible seperate methods that have indexes which can be a re-orderable aray
//		- convert to prototype pattern for multiple instances?
var ParentTransform = function ParentTransform(arg) {
  var self = this;
  arg = arg || {}
  /* --------------------------------------------------------------------------- */
  // PUBLIC / PASSED-IN VARIABLES
  ;
  self.rotation = arg.rotation || 0, // in degrees, gets converted to radians before passing to Matrix2D
  self.x = arg.x || 0, self.y = arg.y || 0, self.scaleX = arg.scaleX || 1, self.scaleY = arg.scaleY || 1, self.originX = arg.originX || 0, self.originY = arg.originY || 0;
  self.points = arg.points || [];
  /* --------------------------------------------------------------------------- */
  // PUBLIC

  self.calculatedPoints = [];
  /* --------------------------------------------------------------------------- */
  // PRIVATE VARIABLES

  var _matrix = new _Matrix2D.default();

  console.log(_matrix);
  /* --------------------------------------------------------------------------- */
  // PUBLIC METHODS

  self.addPoint = function (toAdd) {
    self.points.push(toAdd);
  };

  self.addPoints = function (toAdd) {
    self.points = self.points.concate(toAdd);
  };

  self.update = function (callback) {
    _matrix.clear();

    _matrix.translate(self.x, self.y);

    _matrix.scale(self.scaleX, self.scaleY);

    _matrix.rotate(_adUtils.MathUtils.toRadians(self.rotation));

    self.calculatedPoints = [];

    for (var i = 0; i < this.points.length; i++) {
      var newPt = transformPoint(self.points[i]);
      self.calculatedPoints.push(newPt);
    }

    if (callback) callback(self.calculatedPoints);
    return self.calculatedPoints;
  };
  /* --------------------------------------------------------------------------- */
  // PRIVATE METHODS


  function transformPoint(point) {
    /*console.log( "x:", x, "y:", y )
    console.log( "------------------------")
    console.log( mtx[0], mtx[1], mtx[2] );
    console.log( mtx[3], mtx[4], mtx[5] );
    console.log( 0, 0, 1 );
    console.log( "------------------------")
    */
    var _offSetX = point[0] - self.originX;

    var _offSetY = point[1] - self.originY;

    var _newX = _offSetX * _matrix.data[0] + _offSetY * _matrix.data[3] + _matrix.data[2];

    var _newY = _offSetX * _matrix.data[1] + _offSetY * _matrix.data[4] + _matrix.data[5];

    _newX += self.originX;
    _newY += self.originY;
    return [_newX, _newY];
  }
};

var _default = ParentTransform;
exports.default = _default;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _Vector2D = _interopRequireDefault(__webpack_require__(28));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
    @class SimpleNoise2D
	@desc
		<a href="https://github.com/ff0000-ad-tech/ad-geom">Github repo</a>
        <br><br>
        
        SimpleNoise2D is a workaround for creating 2D noise with lightweight code. 
        It returns a {@link Vector2D} with x and y values between -0.5 - 0.5.
        For a more sophisticated purpose, please use Perline Noise https://github.com/josephg/noisejs
*/
var SimpleNoise2D = function SimpleNoise2D() {};

Object.defineProperty(SimpleNoise2D, "rx", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: []
});
Object.defineProperty(SimpleNoise2D, "ry", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: []
});
Object.defineProperty(SimpleNoise2D, "MAX_VERTICES", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: 256
});
Object.defineProperty(SimpleNoise2D, "MAX_VERTICES_MASK", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: 255
});
Object.defineProperty(SimpleNoise2D, "get", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value(x, y) {
    return new _Vector2D.default(SimpleNoise2D._getVal('x', x), SimpleNoise2D._getVal('y', y));
  }
});
Object.defineProperty(SimpleNoise2D, "_init", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value() {
    for (var i = 0; i < SimpleNoise2D.MAX_VERTICES; ++i) {
      if (i === SimpleNoise2D.MAX_VERTICES - 1) {
        SimpleNoise2D.rx.push(SimpleNoise2D.rx[0]);
        SimpleNoise2D.ry.push(SimpleNoise2D.ry[0]);
      }

      SimpleNoise2D.rx.push(Math.random() - 0.5);
      SimpleNoise2D.ry.push(Math.random() - 0.5);
    }
  }
});
Object.defineProperty(SimpleNoise2D, "_lerp", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value(a, b, t) {
    return a * (1 - t) + b * t;
  }
});
Object.defineProperty(SimpleNoise2D, "_getVal", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value(axis, index) {
    if (SimpleNoise2D.rx.length == 0) SimpleNoise2D._init();
    var vals = axis === 'x' ? SimpleNoise2D.rx : SimpleNoise2D.ry;
    index = index % SimpleNoise2D.MAX_VERTICES;
    var t = index - ~~index;
    var step = t * t * (3 - 2 * t);
    var min = ~~index & SimpleNoise2D.MAX_VERTICES_MASK;
    var max = min + 1 & SimpleNoise2D.MAX_VERTICES_MASK;
    return SimpleNoise2D._lerp(vals[min], vals[max], step);
  }
});
var _default = SimpleNoise2D;
exports.default = _default;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

/**
	@class ExpandableDcs
	@description
		<a href="https://github.com/ff0000-ad-tech/ad-control">Github repo</a>
		<br><br>
		
		This is and extension of {@link Expandable} when units are used in DoubleClick. The only difference in the 
		init() method is to pass in this class to the Expandable.init()
		<codeblock>
			Expandable.init ({
				target : View.expanded,
				expandStart: Control.handleExpandStart,
				expandComplete: Control.handleExpandComplete,
				collapseStart: Control.handleCollapseStart,
				collapseComplete: Control.handleCollapseFinish,

				extend: ExpandableDcs
			});
		</codeblock>
 */
var _default = {
  init: function init(handle) {
    Enabler.addEventListener(studio.events.StudioEvent.EXPAND_START, handle.expandStart);
    Enabler.addEventListener(studio.events.StudioEvent.EXPAND_FINISH, handle.expandComplete);
    Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_START, handle.collapseStart);
    Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_FINISH, handle.collapseComplete);

    if (adParams.expandable.expanded) {
      Enabler.setStartExpanded(true);
    }
  },
  collapse: function collapse(gestureEvent) {
    console.log('DCS > collapse()');
    Enabler.requestCollapse();
    if (gestureEvent) Enabler.reportManualClose();
  },
  expand: function expand(gestureEvent) {
    console.log('DCS > expand()');
    Enabler.requestExpand();
  },
  collapseComplete: function collapseComplete() {
    console.log('DCS > collapseComplete()');
    Enabler.finishCollapse();
  },
  expandComplete: function expandComplete() {
    console.log('DCS > expandComplete()');
    Enabler.finishExpand();
  }
};
exports.default = _default;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

exports.__esModule = true;
exports.init = init;
exports.loadDynamic = loadDynamic;

var _adExternal = __webpack_require__(17);

var _CssManager = _interopRequireDefault(__webpack_require__(24));

var ImageManager = _interopRequireWildcard(__webpack_require__(29));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
	@class Core
	@desc
		<a href="https://github.com/ff0000-ad-tech/ad-control">Github repo</a>
		<br><br>
		
		Boilerplate logic that is attempted for all ad templates happens here. The build of an ad should not need to affect this scope. 
*/

/** 
	@memberOf Core
	@method init
	@param {Loader} fbaLoader
		Optionally passed in Loader when compiled
	@desc
		This is the first step in the build file. The init() returns a Promise, which allows for chaining of .then() methods.
		For synchronous actions, such as declaring AdData or FtData, simply wrap it in an anonymous function. For asynchronous
		actions, such a inititalizing something with a created callback, this will need to be wrapped in a returned callback.
		This will ensure that the chain will wait for the previous .then() to be fulfilled before moving on. 

	@example
		Core.init(fbaContent)
			.then(function() {
				global.adData = new AdData();
			})
			.then(function() {
				return new Promise((resolve, reject) => {
					// pass the resolve as the completed callback
					SomeCustomClass.init(resolve)
				})
			})
			.then(Core.loadDynamic)
			.then(Control.prepareBuild)
*/
function init(fbaContent) {
  console.log('Core.init()');
  return new Promise(function (resolve, reject) {
    var promises = []; // device

    _adExternal.Device.init(); // css


    _CssManager.default.init(); // fba payload


    ImageManager.addFbaImages(fbaContent); // async

    Promise.all(promises).then(function () {
      resolve();
    }).catch(function (err) {
      reject(err);
    });
  });
}
/** 
	@memberOf Core
	@method loadDynamic
	@desc
		This is the last step before preparing the build. The loadDynamic() loads all of the images that have been added
		to the ImageLoader. After this method is called from the .then() promise chain, Control.prepareBuild can be 
		called as the entire prepare process is now complete when its Promise is fulfilled.

	@example
		Core.init(fbaContent)
			.then(function() {
				global.adData = new AdData();
			})
			.then(Core.loadDynamic)
			.then(Control.prepareBuild)
*/


function loadDynamic() {
  console.log('Core.loadDynamic()');
  return new Promise(function (resolve, reject) {
    console.log('\t Core load Image Queue');
    ImageManager.load(resolve, global.failAd);
  });
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.init = init;
exports.collapse = collapse;
exports.expand = expand;
exports.hasUserInteracted = hasUserInteracted;

var _adEvents = __webpack_require__(30);

/**
	@class Expandable
	@description
		<a href="https://github.com/ff0000-ad-tech/ad-control">Github repo</a>
		<br><br>
		
		This class controls the expanding and collapsing of expandable units. The animation relys on the properties
		set in the index. Therefore, the animation has be removed from the build file and handled internally. 
		This class can be extended with {@link ExpandableDcs} when units are used in DoubleClick.
 */
var _arg;

var _afterInitExpanded = true;
var _hasUserInteracted = false;
var extend = {
  init: function init() {},
  collapse: function collapse(gestureEvent) {
    handle.collapseStart();
  },
  expand: function expand(gestureEvent) {
    handle.expandStart();
  },
  collapseComplete: function collapseComplete() {
    handle.collapseComplete();
  },
  expandComplete: function expandComplete() {
    handle.expandComplete();
  }
};
var handle = {
  expandStart: function expandStart(event) {
    fireCallback('expandStart');
    animateExpand();
  },
  expandComplete: function expandComplete(event) {
    fireCallback('expandComplete');
    _hasUserInteracted = _afterInitExpanded;
    _afterInitExpanded = true;
  },
  collapseStart: function collapseStart(event) {
    animateCollapse();
    fireCallback('collapseStart');
    _hasUserInteracted = true;
  },
  collapseComplete: function collapseComplete(event) {
    fireCallback('collapseComplete');
    _hasUserInteracted = true;
  }
  /**
  	@memberOf Expandable
  	@method init
  	@desc
  		This method initializes the class, linking all callbacks and the target being set. This should 
  		be called Control.postMarkup
  	@example
  		Expandable.init ({
  
  			// required
  			target: View.expanded,
  
  			// optional methods called when that event happens
  			expandStart: Control.handleExpandStart,
  			expandComplete: Control.handleExpandComplete,
  			collapseStart: Control.handleCollapseStart,
  			collapseComplete: Control.handleCollapseFinish,
  
  			// optionally you can add time values for expanding/collapsing
  			expandTime: 0.3,
  			collapseTime: 0.3
  		});
  */

};

function init(arg) {
  _arg = arg || {};
  _arg.expandTime = _arg.expandTime || 0.5;
  _arg.collapseTime = _arg.collapseTime || 0.5;

  if (_arg.extend) {
    extend = _arg.extend;
    extend.init(handle);
  }

  if (adParams.expandable.expanded) {
    _afterInitExpanded = false;
    expand();
  } else {
    animateCollapse(true);
  }
}
/**
	@memberOf Expandable
	@method collapse
	@desc
		Collapses the View.expand container.
	@example
		Expandable.collapse();
*/


function collapse(gestureEvent) {
  _adEvents.GestureEvent.stop(gestureEvent);

  extend.collapse(gestureEvent);
}
/**
	@memberOf Expandable
	@method expand
	@desc
		Expands the View.expand container.
	@example
		Expandable.expand();
*/


function expand(gestureEvent) {
  _adEvents.GestureEvent.stop(gestureEvent);

  console.log('extend:', extend);
  extend.expand(gestureEvent);
}
/**
	@memberOf Expandable
	@method {boolean} hasUserInteracted
		Indicates if the ad has been interacted by the user
	@example
		console.log( Expandable.hasUserInteracted() )
*/


function hasUserInteracted() {
  return _hasUserInteracted;
}

function animateExpand() {
  var param = adParams.expandable;
  TweenLite.to(_arg.target, _arg.expandTime, {
    x: param.expandedX,
    y: param.expandedY,
    width: adParams.adWidth,
    height: adParams.adHeight,
    onComplete: extend.expandComplete
  });
}

function animateCollapse(isInit) {
  var time = isInit ? 0 : _arg.collapseTime;
  var param = adParams.expandable;
  TweenLite.to(_arg.target, time, {
    x: param.collapsedX,
    y: param.collapsedY,
    width: param.collapsedWidth,
    height: param.collapsedHeight,
    onComplete: isInit ? undefined : extend.collapseComplete
  });
}

function fireCallback(name) {
  ;
  (_arg[name] || function () {}).call();
}

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _GestureBase = _interopRequireDefault(__webpack_require__(31));

var _adView = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO - ? remove gestureBase if no events added
// 		- ? total distance

/**
	@class Gesture
	@desc
		<a href="https://github.com/ff0000-ad-tech/ad-events">Github repo</a>
		<br><br>
		
		This module is used for seamless use of Mouse / Touch Events, such as click vs tap, mousedown vs touch down, etc.  
		This class figures which to use and reports custom events.<br><br>
	
		See {@link GestureEvent} for available events.
*/
var Gesture = new function () {
  var G = this;
  var _targets = [];
  var _disableList = [];

  var _eventPass = document.createEventObject != undefined;

  var _eventLooping = false;
  G._kills = {};
  /* ------------------------------------------------------------------------------------------------------------- */
  // PUBLIC METHODS

  /**
  	@memberOf Gesture
  	@method add | addEventListener
  	@param {element} target
  		The DOM element
  	@param {string} name
  		The event's name as a String or GestureEvent constant
  	@param {function} handler
  		The function to be called on event trigger
  	@desc
  		Registers an event so that the listener receives notification of an event.
  		
  	@example
  		Gesture.addEventListener( myDiv, GestureEvent.CLICK, handleClick );
  		function handleClick( event ) {
  			console.log( 'Click heard' );
  		}					
  */

  G.add = G.addEventListener = function (target, name, handler) {
    var _gestureBase = getGestureBase(target);

    _gestureBase.register(name, handler);

    _adView.Styles.setCss(target, 'cursor', 'pointer'); // OVERWRITES mouseChildren(false) of parent


    _adView.Styles.setCss(target, 'pointer-events', 'auto');
  };
  /**
  	@memberOf Gesture
  	@method remove | removeEventListener
  	@param {element} target
  		The DOM element
  	@param {string} name
  		The event's name as a String or GestureEvent constant
  	@param {function} handler
  		The function registered for call on event trigger
  	@desc
  		Unregisters an event of notifications.
  		@example
  		Gesture.removeEventListener ( myDiv, GestureEvent.CLICK, handleClick );					
  */


  G.remove = G.removeEventListener = function (target, name, handler) {
    var _gestureBase = getGestureBase(target);

    if (_gestureBase) {
      _gestureBase.unregister(name, handler);

      if (_gestureBase.eventList.length <= 0) {
        _adView.Styles.setCss(target, 'cursor', 'auto');
      }
    }
  };
  /**
  	@memberOf Gesture
  	@method disable
  	@param {element} target
  		The DOM element
  	@desc
  		Disables a DOM element from responding the mouse/touch/gesture events. For bubbling events, such as click, this will disable its children as well.
  	
  	@example	
  		Gesture.disable( myDiv );
  */


  G.disable = function (target) {
    var gestureBase = getGestureBase(target);

    _disableList.push(gestureBase);

    if (_eventPass) {
      gestureBase.register(GestureEvent.CLICK, handlePassThroughClick);

      _adView.Styles.setCss(target, 'cursor', 'auto');
    } else {
      _adView.Styles.setCss(target, 'pointer-events', 'none');
    }
  };
  /**
  	@memberOf Gesture
  	@method disableChildren
  	@param {element} target
  		The DOM element
  	@desc
  		Disables all child DOM elements from responding the mouse/touch/gesture events. For bubbling events, such as click, this is unnecessary
  		@example
  		Gesture.disableChildren ( myDiv );
  */


  G.disableChildren = function (target) {
    setActiveChildren(target, false);
  };
  /**
  	@memberOf Gesture
  	@method enable
  	@param {element} target
  		The DOM element
  	@desc
  		Enables all a DOM element to responding the mouse/touch/gesture events. For bubbling events, such as click, this will enable its children as well.
  		@example
  		Gesture.disable ( myDiv );
  */


  G.enable = function (target) {
    var gestureBase = getGestureBase(target);

    for (var i = 0; i < _disableList.length; i++) {
      if (gestureBase == _disableList[i]) {
        if (_eventPass) {
          gestureBase.unregister(GestureEvent.CLICK, handlePassThroughClick);
        } else {
          _adView.Styles.setCss(target, 'pointer-events', 'auto');

          _adView.Styles.setCss(target, 'cursor', 'pointer');
        }

        break;
      }
    }
  };
  /**
  	@memberOf Gesture
  	@method enableChildren
  	@param {element} target
  		The DOM element
  	@desc
  		Enables all child DOM elements to responding the mouse/touch/gesture events. For bubbling events, such as click, this is unnecessary
  		@example
  		Gesture.enableChildren ( myDiv );
  */


  G.enableChildren = function (target) {
    setActiveChildren(target, true);
  };
  /* ------------------------------------------------------------------------------------------------------------- */
  // PRIVATE METHODS


  function getGestureBase(target) {
    var _gestureBase = null;

    for (var i = 0; i < _targets.length; i++) {
      if (_targets[i].elem === target) {
        _gestureBase = _targets[i];
        break;
      }
    }

    if (!_gestureBase) {
      _gestureBase = createGestureBase(target);
    }

    return _gestureBase;
  }

  function createGestureBase(target) {
    var _gestureBase = new _GestureBase.default(target);

    _targets.push(_gestureBase);

    return _gestureBase;
  }

  function setActiveChildren(target, active) {
    var gestureBase = getGestureBase(target);

    if (gestureBase.hasActiveChildren != active) {
      gestureBase.hasActiveChildren = active;
      var children = gestureBase.elem.getElementsByTagName('*');

      for (var i = 0; i < children.length; i++) {
        //console.log( typeof children[i], ' ; ', children[i].id )
        // gets only the children, not grand-children
        if (children[i].parentNode == target) {
          active ? G.enable(children[i]) : G.disable(children[i]);
        }
      }
    }
  }

  function getNextLayerElement(target, x, y, list) {
    target.style.visibility = 'hidden';
    list.push(target);
    var elem = document.elementFromPoint(x, y); //console.log( 'elementFromPoint() : ', elem.id );

    for (var i = 0; i < _disableList.length; i++) {
      //console.log( ' => disable list: ', i, ' : ', _disableList[i].elem.id )
      if (_disableList[i].elem == elem) {
        //console.log( '  -^ match so go again')
        return getNextLayerElement(elem, x, y, list);
      }
    }

    return elem;
  }

  function getForwardedTarget(event) {
    var hiddenList = [];
    var el = getNextLayerElement(event.target, event.clientX, event.clientY, hiddenList); //console.log( ' returned element: (', event.clientX, ', ', event.clientY, ') ', el.id )
    //console.log( 'hidden list:')

    for (var i = 0; i < hiddenList.length; i++) {
      //console.log( '  -> ', i, ' ', hiddenList[i].id )
      hiddenList[i].style.visibility = 'visible';
    }

    hiddenList = [];
    event.stopImmediatePropagation(); //console.log( ' - STOP - ')

    return el;
  }
  /* ------------------------------------------------------------------------------------------------------------- */
  // EVENT HANDLERS
  // IE 9 & 10 needs to have events captured and passed to the next layer dom element


  function handlePassThroughClick(event) {
    //console.log( 'pass through:', event )
    var el = getForwardedTarget(event); // IE 9+

    var evt = document.createEvent('HTMLEvents');
    evt.initEvent(event.type, true, false); //console.log( '     # ', el.id, ' is dispatching ' )

    el.dispatchEvent(evt);
  }
}();
var _default = Gesture;
exports.default = _default;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

/**
	@class UIEvent
	@desc
		<a href="https://github.com/ff0000-ad-tech/ad-events">Github repo</a>
		<br><br>
		
		This module has custom events to be used with the <UIComponents>
*/
var _componentEnabled, _sliderUpdate;

var UIEvent = {
  /**	
  	@memberOf UIEvent	
  	@const {string} ENABLED
  	@desc
  		Represents an 'uiComponentEnabled', fired when the enabled state of a <UIComponent> changes; useful when extending a component.
  	@example
  		UIEvent.ENABLED
  */
  ENABLED: 'uiComponentEnabled',

  /**	
  	@memberOf UIEvent	
  	@const {string} RESIZE
  	@desc
  		Description needed_________.
  	@example
  		UIEvent.RESIZE
  */
  RESIZE: 'uiResize',

  /**	
  	@memberOf UIEvent	
  	@const {string} SLIDER_UPDATE
  	@desc
  		Represents an 'uiSliderUpdate', fired when a <UISlider> changes its value.
  	@example
  		UIEvent.SLIDER_UPDATE
  */
  SLIDER_UPDATE: 'uiSliderUpdate',

  get componentEnabled() {
    if (!_componentEnabled) {
      _componentEnabled = new CustomEvent('uiComponentEnabled');
    }

    return _componentEnabled;
  },

  get sliderUpdate() {
    if (!_sliderUpdate) {
      _sliderUpdate = new CustomEvent('uiSliderUpdate');
    }

    return _sliderUpdate;
  }

};
var _default = UIEvent;
exports.default = _default;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _FrameRateBase = _interopRequireDefault(__webpack_require__(33));

__webpack_require__(79);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
	@class FrameRate
	@desc
		<a href="https://github.com/ff0000-ad-tech/ad-events">Github repo</a>
		<br><br>
		
		This module is used for constant consistent updates, akin to ENTER_FRAME in AS3, utilizing requestAnimationFrame at its core. Register a function
		and it will be called on every tick. Optionally, you can register a function with a frame rate value for specific frequency calls.  This is useful
		when working with multiple animation sequences at once.	
	
	@example
		// have any methods			
		function myFunctionA () {
			console.log( 'myFunctionA' );
		}

		function myFunctionB() {
			console.log( 'myFunctionB' );
		}

		function myFunctionC() {
			console.log( 'myFunctionC' );
		}

		// Register any method, anywhere
		FrameRate.register ( this, myFunctionA );
		FrameRate.register ( this, myFunctionB );

		// Register with custom time, say only 7 calls per second
		FrameRate.register ( this, myFunctionC, 7 );

		// Pause the whole engine so no methods are called
		FrameRate.pause();

		// Then start is back up
		FrameRate.resume();

		// or remove a method later
		FrameRate.unregister ( this, myFunctionA );

		// or pause all methods at a specific frame rate
		FrameRate.pause ( 7 ) // this pauses only myFunctionC, but myFunctionB will continue to be called
*/
var FrameRate = function FrameRate() {};

Object.defineProperty(FrameRate, "_isPaused", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: true
});
Object.defineProperty(FrameRate, "_isActive", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: true
});
Object.defineProperty(FrameRate, "_sets", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {}
});
Object.defineProperty(FrameRate, "_RAF", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: undefined
});
Object.defineProperty(FrameRate, "register", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value(from, handler, fps) {
    var F = FrameRate;
    fps = fps || 30;

    if (!F._sets[fps]) {
      F._sets[fps] = new _FrameRateBase.default(fps);
    }

    var pool = F._sets[fps].pool;

    for (var i = 0; i < pool.length; i++) {
      if (pool[i].from === from && pool[i].handler === handler) {
        return;
      }
    }

    pool.push({
      handler: handler,
      from: from
    });
    console.log('pool is now:', pool);
    if (F._isActive) F.resume();
  }
});
Object.defineProperty(FrameRate, "unregister", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value(from, handler, fps) {
    var F = FrameRate; //var handlerString = handler.toString();

    for (var key in F._sets) {
      // if fps is provided, only look in that FrameRateBase for handlers
      if (fps && key != fps) {
        continue;
      } // otherwise, remove all references to that handler


      var pool = F._sets[key].pool;

      for (var i = 0; i < pool.length; i++) {
        //if ( h[i].toString() === handlerString ){
        if (pool[i].from === from && pool[i].handler === handler) {
          pool.splice(i, 1);
          break;
        }
      } // removes the FrameRateBase object with no handlers


      if (pool.length == 0) {
        delete F._sets[key];
      }
    }

    if (Object.keys(F._sets).length === 0) {
      F.pause();
      F._isActive = true;
    }
  }
});
Object.defineProperty(FrameRate, "pause", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value() {
    var F = FrameRate;

    if (arguments.length > 0) {
      for (var i = 0; i < arguments.length; i++) {
        var fpsTarget = i < 0 || arguments.length <= i ? undefined : arguments[i];

        if (F._sets[fpsTarget]) {
          F._sets[fpsTarget]._paused = true;
          F._isPaused = true;
        }
      }

      for (var d in F._sets) {
        if (!F._sets[d]._paused) {
          F._isPaused = false;
          break;
        }
      }
    } else {
      for (var d in F._sets) {
        F._sets[d]._paused = true;
      }

      F._isPaused = true;
    }

    if (F._isPaused) {
      F._isActive = false;
      window.cancelAnimationFrame(F._RAF);
    }
  }
});
Object.defineProperty(FrameRate, "resume", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value() {
    var F = FrameRate;

    var _currentlyRunning = !F._isPaused;

    if (arguments.length > 0) {
      for (var i = 0; i < arguments.length; i++) {
        var fpsTarget = i < 0 || arguments.length <= i ? undefined : arguments[i];

        if (F._sets[fpsTarget]) {
          F._sets[fpsTarget]._paused = false;
          F._isPaused = false;
        }
      }
    } else {
      for (var d in F._sets) {
        F._sets[d]._paused = false;
      }

      F._isPaused = false;
    }

    if (!_currentlyRunning) {
      F._isActive = true;
      F._RAF = window.requestAnimationFrame(F.tick);
    }
  }
});
Object.defineProperty(FrameRate, "secondsAsFrames", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value(sec) {
    return 1 / sec;
  }
});
Object.defineProperty(FrameRate, "tick", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value() {
    var F = FrameRate; //console.log( 'tick' )

    if (!F._isPaused) {
      for (var h in F._sets) {
        F._sets[h].tick();
      } // call tick again


      window.requestAnimationFrame(F.tick);
    }
  }
});
var _default = FrameRate;
exports.default = _default;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// POLYFILL : check for and/or replace window.requestAnimationFrame
// there is a bug in iOS6 for RAF, so just detect being on it and fall back
var _isiOS6 = /iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent);

var _prefix = ['webkit', 'moz'];

for (var i = 0; !window.requestAnimationFrame && i < _prefix.length; i++) {
  window.requestAnimationFrame = window[_prefix[i] + 'RequestAnimationFrame'];
  window.cancelAnimationFrame = window[_prefix[i] + 'CancelAnimationFrame'] || window[_prefix[i] + 'CancelRequestAnimationFrame'];
}

if (!window.requestAnimationFrame || !window.cancelAnimationFrame || _isiOS6) {
  console.log('PolyFill -> FrameRate');

  window.requestAnimationFrame = function (callback) {
    return setTimeout(callback, 17);
  };

  window.cancelAnimationFrame = clearTimeout;
}

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.createGlobalNode = createGlobalNode;
exports.addClass = addClass;
exports.removeClass = removeClass;

var _adView = __webpack_require__(10);

/**
	@class SheetManager
	@desc
		<a href="https://github.com/ff0000-ad-tech/ad-control">Github repo</a>
		<br><br>
		
		Class manages the creation of &lt;style> tags and the addition/removal of classes.
*/

/**
	@memberOf SheetManager
	@method createGlobalNode
	@param {string} nodeId
		the id of the &lt;style> node written to the &lt;head>
	@param {string} styles
		selector/CSS string pair as separate parameters, following 'selector', 'css string' pattern,
		or a self-contained CSS style string including selectors, like '.myClass{ color: blue; }'
	@desc
		Create a new CSS node (class, tag, etc) DEFINITION with submitted styles with selector/CSS string
		pair or a self-contained CSS string including selectors. 

	@example
		// selector/CSS string pair
		SheetManager.createGlobalNode ( 'myFirstStyle', 
			'.class-a', 'position:absolute; width:inherit;'
		)

		// or add multiple class declarations to the same node
		SheetManager.createGlobalNode ( 'mySecondStyle', 
			'.class-b', 'position:absolute;',
			'.class-b-top', 'width:inherit; height:inherit;'
		)

		// or have mulitple classes share the same logic
		SheetManager.createGlobalNode ( 'myThirdStyle', 
			'.class-c, .class-d', 'position:absolute;'
		)

		// add style to a tag globally
		SheetManager.createGlobalNode ( 'myFourthStyle', 
			'h1', 'position:absolute;'
		)
		
		// self-contained CSS string
		var myCssString = '.myClass, h1 { color: blue; margin: 10px; }';
		SheetManager.createGlobalNode( 'myFifthStyle', myCssString );
*/
function createGlobalNode(nodeId, styles) {
  if (document.getElementById(nodeId)) {
    return;
  }

  var style = document.createElement('style');
  style.type = 'text/css';
  style.id = nodeId; // if only two parameters, assuming styles is CSS string
  // else process as selector/style pair

  var str = arguments.length === 2 ? styles : '';

  if (arguments.length > 2) {
    for (var i = 0; i < arguments.length - 1; i += 2) {
      // strip out all the white space
      var names = arguments[i + 1].replace(/\s*/g, '');
      str += names;
      str += ' { ' + (arguments[i + 2] || '') + ' }\n';
    }
  }

  style.innerHTML = str;
  document.getElementsByTagName('head')[0].appendChild(style);
}
/**
	@memberOf SheetManager
	@method addClass
	@param {string|element} target
		id or element to which css style should be added
	@param {string} className
		css class association to be added to this target
	@desc
		Add a CSS class ASSOCIATION to the targeted element.
*/


function addClass(target, className) {
  var element = _adView.Markup.getElement(target); // IE does not support multiple classes being added as arguments, so must loop


  for (var i = 0; i < arguments.length - 1; i++) {
    element.classList.add(arguments[i + 1]);
  }
}
/**
	@memberOf SheetManager
	@method removeClass
	@param {string|element} target
		id or element from which css style should be removed
	@param {string} className
		css class association to be removed from this target
	@desc
		Removes a CSS class ASSOCIATION from the targeted element.
*/


function removeClass(target, className) {
  var element = _adView.Markup.getElement(target);

  element.classList.remove(className);
}

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _superagent = _interopRequireDefault(__webpack_require__(22));

var _adParticles = __webpack_require__(82);

var _adGeom = __webpack_require__(2);

var _adUtils = __webpack_require__(0);

var _globalSetting = __webpack_require__(15);

var _index = _interopRequireDefault(__webpack_require__(84));

var _Dom = _interopRequireDefault(__webpack_require__(35));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import data from './debug/EmitterData'
// TODO: fully migrate all the syntax to ES6
var Interface =
/*#__PURE__*/
function () {
  function Interface() {
    var _this = this;

    Object.defineProperty(this, "buildInterface", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.createPS();

        _this.guiInterfaces = []; //generate Emitting, Physics property interface

        _this.psControl = _this.generateControl(_this.data.emitterPhysics);

        _this.genertateInterface(_this.data.emitterPhysics, _this.psControl); //generate Style, Animation property interface


        _this.styleControl = _this.generateControl(_this.data.styleAnimation);

        _this.genertateInterface(_this.data.styleAnimation, _this.styleControl); //generate Add Model interface


        _this.activeModels = [];

        var modelData = _this.generateParticleModelData();

        _this.modelControl = _this.generateControl(modelData);
        _this.modelGui = _this.genertateInterface(modelData, _this.modelControl); //generate Action interface

        _this.actionControl = _this.generateControl(_this.data.actions);

        _this.genertateInterface(_this.data.actions, _this.actionControl); //get the elements to use later


        _this.interfaceContainer = _Dom.default.getBy('.ac')[0];
        _this.blockGuide = _Dom.default.getBy('#block-guide');
        _this.codeDisplay = _Dom.default.getBy('#code-display');
        _this.codeDisplayText = _Dom.default.getBy('#code-display-text');
        _this.codeClose = _Dom.default.getBy('#code-close');
        _this.saveFile = _Dom.default.getBy('#save');
        _this.velGuide = _Dom.default.getBy('#velocity-guide');
        _this.velGuideCtx = _this.velGuide.getContext('2d');
        _this.forceGuide = _Dom.default.getBy('#force-guide');
        _this.forceGuideCtx = _this.forceGuide.getContext('2d'); //create, style, add events to additional UI elements

        _Dom.default.setGroupStyle([_this.velGuide, _this.forceGuide], {
          left: _this.adWidth / 2 - 60 + 'px',
          top: _this.adHeight / 2 - 60 + 'px'
        });

        _this.saveFile.addEventListener('click', _this.writeCode, false);

        _this.codeClose.addEventListener('click', function () {
          _this.codeDisplay.classList.remove('show', 'show-message');
        }, false);

        _this.createMoveBtn();

        _this.createHelpBtn();
      }
    });
    Object.defineProperty(this, "createMoveBtn", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.interfaceOffset = new _adGeom.Vector2D(0, 0);
        _this.moveBtn = document.createElement('div');
        _this.moveBtn.id = 'move-btn';

        _this.interfaceContainer.appendChild(_this.moveBtn);

        _this.moveBtn.addEventListener('mousedown', function (evt) {
          _this.dragging = true;
          _this.draggingStart = new _adGeom.Vector2D(evt.clientX, evt.clientY);
        });

        document.body.addEventListener('mousemove', function (evt) {
          if (!_this.dragging) {
            return;
          }

          _this.draggingOffset = new _adGeom.Vector2D(evt.clientX, evt.clientY).sub(_this.draggingStart);

          _this.interfaceOffset.add(_this.draggingOffset);

          var top = _this.interfaceOffset.y + 'px';
          var right = _this.interfaceOffset.x * -1 + 'px';
          _this.interfaceContainer.style.top = top;
          _this.interfaceContainer.style.right = right;
          _this.draggingStart = new _adGeom.Vector2D(evt.clientX, evt.clientY);
        });
        document.body.addEventListener('mouseup', function (evt) {
          _this.dragging = false;
        });
      }
    });
    Object.defineProperty(this, "createHelpBtn", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var helpBtn = document.createElement('a');
        helpBtn.id = 'help-btn';
        helpBtn.href = 'https://confluence.ff0000.com/display/AT/PARTICLES';
        helpBtn.target = '_blank';

        _this.interfaceContainer.appendChild(helpBtn);
      }
    });
    Object.defineProperty(this, "createPS", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        //canvas element
        _this.canvasEl = _Dom.default.getBy('#canvas-el');
        _this.canvasEl.style.width = _this.adWidth + 'px';
        _this.canvasEl.style.height = _this.adHeight + 'px';
        _this.canvasEl.width = _this.adWidth;
        _this.canvasEl.height = _this.adHeight; //particle system instance

        var setting = {
          emitterData: window.selectedEmitterData,
          fps: _this.fps
        };
        _this.PS = new _adParticles.Emitter();

        _this.PS.init(_this.canvasEl, setting);

        _this.PS.emit();
      }
    });
    Object.defineProperty(this, "getPSProp", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(key, type) {
        if (type === 'action') {
          return _this.PS[key] || null;
        }

        var val = _this.PS.get(key);

        return val === undefined ? null : val;
      }
    });
    Object.defineProperty(this, "publishCode", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var data = _this.PS.properties;
        var tab = '&nbsp;&nbsp;';
        var str = 'export default ';
        str += JSON.stringify(data, null, 2);
        _this.codeDisplayText.value = str;

        _this.codeDisplay.classList.add('show');
      }
    });
    Object.defineProperty(this, "writeCode", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var data = "export default " + JSON.stringify(_this.PS.properties, null, 2);
        var size = (0, _globalSetting.get)('adWidth') + "x" + (0, _globalSetting.get)('adHeight');

        _superagent.default.post("../api/").send({
          action: 'writeData',
          size: size,
          data: data,
          fileName: _this.selectedEmitterDataName
        }).end(function (err, res) {
          if (err) {
            alert('Erro with API. Unable to save the fil');
            return;
          }

          var data = JSON.parse(res.text);

          var msgEl = _Dom.default.getBy('#saved-message');

          msgEl.innerHTML = data.stdout;

          _this.codeDisplay.classList.add('show-message');
        });
      }
    });
    Object.defineProperty(this, "showDataSelector", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(opts) {
        if (opts === void 0) {
          opts = [];
        }

        // construct the options
        var el = _Dom.default.getBy('#data-options');

        opts.forEach(function (item, index) {
          var li = document.createElement('li');
          li.innerHTML = item.name;
          li.classList.add('btn');
          el.appendChild(li);
          li.addEventListener('click', function () {
            _this.selectData(index);
          });
        });

        _this.dataSelector.classList.add('show');
      }
    });
    Object.defineProperty(this, "selectData", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(index) {
        // set the emitter data under global scope
        var data = _this.emitterDataFiles[index];
        _this.selectedEmitterDataName = data.name;
        eval("window.selectedEmitterData=" + data.content);

        _this.buildInterface();

        _this.dataSelector.classList.remove('show');
      }
    });
    Object.defineProperty(this, "addParticleModel", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var self = _this;
        var name = 'model' + _this.modelIndex;
        var obj = {
          name: name,
          type: 'folder',
          children: _this.data.getDefaultNewParticleModelData(name)
        };

        _this.activeModels.push(name);

        _this.modelIndex++;
        obj.children.forEach(function (item) {
          if (typeof item.defaultVal == 'object') {
            item.defaultVal = JSON.stringify(item.defaultVal, null, 1);
          }

          self.modelControl[item.name] = item.defaultVal;
        });

        _this.processData(_this.modelControl, _this.modelGui, obj);

        _this.updateEmitterModels();
      }
    });
    Object.defineProperty(this, "deleteParticleModel", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(name) {
        //TODO: remove it from dat gui
        var el = _Dom.default.getBy('#' + name);

        el.parentNode.removeChild(el);
        var i;

        for (i = 0; i < _this.activeModels.length; i++) {
          if (_this.activeModels[i] === name) {
            _this.activeModels.splice(i, 1);

            break;
          }
        }

        _this.updateEmitterModels();
      }
    });
    Object.defineProperty(this, "generateControl", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(data) {
        var result = {};
        var i;

        for (i = 0; i < data.length; i++) {
          var obj = data[i];

          if (obj.type === 'folder') {
            var k;

            for (k = 0; k < obj.children.length; k++) {
              var child = obj.children[k];

              var val = _this.syncWithCurrentData(child);

              result[child.name] = val === null ? child.defaultVal : val;

              if (obj.type === 'action') {
                result[obj.name] = result[obj.name].bind(_this.PS);
              }
            }
          } else {
            var val = _this.syncWithCurrentData(obj);

            result[obj.name] = val === null ? obj.defaultVal : val;

            if (obj.type === 'action') {
              result[obj.name] = result[obj.name].bind(_this.PS);
            }
          }
        }

        return result;
      }
    });
    Object.defineProperty(this, "generateParticleModelData", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.modelIndex = 0; //check the present model

        var data = _this.data.particleModel;

        var models = _this.getPSProp('particleModels');

        var i;

        for (i = 0; i < models.length; i++) {
          var name = 'model' + _this.modelIndex;
          var m = models[i];
          var obj = {
            name: name,
            type: 'folder',
            children: _this.data.getDefaultNewParticleModelData(name)
          };
          obj.children.forEach(function (item) {
            //use existing value if availabe
            if (m[item.modelKey]) {
              item.defaultVal = m[item.modelKey];
            } //stringfy the object


            if (typeof item.defaultVal == 'object') {
              item.defaultVal = JSON.stringify(item.defaultVal, null, 1);
            } //this can be organized better~~


            if (item.name.indexOf('Delete') > -1) {
              item.defaultVal = function (n) {
                return function () {
                  this.deleteParticleModel(n);
                };
              }(name);
            }
          });
          data.push(obj);

          _this.activeModels.push(name);

          _this.modelIndex++;
        }

        return data;
      }
    });
    Object.defineProperty(this, "genertateInterface", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(data, target) {
        var gui = new dat.GUI();
        var i;

        for (i = 0; i < data.length; i++) {
          var obj = data[i];
          this.processData(target, gui, obj);
        }

        return gui;
      }
    });
    Object.defineProperty(this, "processData", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(control, targetGui, obj, parentObj) {
        if (parentObj === void 0) {
          parentObj = {};
        }

        var singleController;

        switch (obj.type) {
          case 'text':
          case 'boolean':
          case 'action':
            if (obj.type === 'text') {
              if (typeof obj.defaultVal === 'object') {
                obj.defaultVal = JSON.stringify(obj.defaultVal, null, 1);
              }
            }

            singleController = targetGui.add(control, obj.name);

            if (obj.min !== undefined) {
              singleController.min(obj.min);
            }

            singleController.onFinishChange(function (val) {
              window.Interface.setEmitterProperty(obj, val, parentObj);

              if (parentObj.name === 'world') {
                _this.hideGuide(true);
              }
            });
            break;

          case 'color':
            singleController = targetGui.addColor(control, obj.name);
            singleController.onChange(function (val) {
              window.Interface.setEmitterProperty(obj, val, parentObj);
            });
            break;

          case 'slider':
            singleController = targetGui.add(control, obj.name, obj.range[0], obj.range[1]);

            if (obj.step !== undefined) {
              singleController.step(obj.step);
            }

            singleController.onChange(function (val) {
              window.Interface.setEmitterProperty(obj, val, parentObj);
            });
            singleController.onFinishChange(function (val) {
              switch (parentObj.name) {
                case 'world':
                case 'origin':
                  _this.hideGuide();

                  break;

                case 'velocityAngle':
                  _this.hideVelocityGuide();

                  break;

                case 'globalForce':
                  _this.hideForceGuide();

                  break;
              }
            });
            break;

          case 'dropdown':
            singleController = targetGui.add(control, obj.name, obj.options);
            singleController.onFinishChange(function (val) {
              window.Interface.setEmitterProperty(obj, val, parentObj);

              if (parentObj.name === 'origin') {
                _this.hideGuide(true);
              }
            });
            break;

          case 'folder':
            var f = targetGui.addFolder(obj.name);
            var k;

            for (k = 0; k < obj.children.length; k++) {
              _this.processData(control, f, obj.children[k], obj);
            }

            break;
        }
      }
    });
    Object.defineProperty(this, "setEmitterProperty", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(obj, val, parentObj) {
        if (obj.type === 'action') {
          return;
        }

        parentObj = parentObj || {};
        var key = obj.map || obj.name;
        var p = _this.psControl; //show guides for world and origin

        switch (parentObj.name) {
          case 'world':
            if (!(obj.name === 'worldActive' && !val)) {
              _this.showGuide(p.left, p.top, p.right - p.left, p.bottom - p.top);
            }

            break;

          case 'origin':
            var rx = p.originXRange / 2;
            var ry = p.originYRange / 2;
            var ox = p.originX - rx;
            var oy = p.originY - ry;

            _this.showGuide(ox, oy, p.originX + rx - ox, p.originY + ry - oy, p.originShape);

            break;

          case 'velocityAngle':
            var r = p.angleRange / 2;

            _this.showVelocityGuide(p.angleValue - r, p.angleValue + r);

            break;

          case 'globalForce':
            _this.showForceGuide(p.forceAngle);

            break;
        } //array string


        if (typeof val === 'string') {
          var str = val.replace(/\s+/g, '');

          if (str[0] === '[' && str[str.length - 1] === ']') {
            str = str.substr(1);
            str = str.slice(0, str.length - 1);
            var arr = str.split(',{');
            var result = [];
            var i;

            for (i = 0; i < arr.length; i++) {
              var item = arr[i];

              if (i !== 0) {
                item = '{' + item;
              }

              if (item.trim().length !== 0) {
                try {
                  result.push(JSON.parse(item));
                } catch (e) {
                  alert('This is not a valid input.');
                  return;
                }
              }
            }

            val = result;
          }
        }

        var str = parentObj.name || '';

        if (str.indexOf('model') === 0) {
          _this.updateEmitterModels();
        } else {
          _this.PS.set(key, val);
        }
      }
    });
    Object.defineProperty(this, "syncWithCurrentData", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(obj) {
        var key = obj.map || obj.name;
        var val = null;

        switch (obj.name) {
          case 'bgImage':
            val = _this.getPSProp('background.image') || _this.images[0] || '';

            _this.PS.set('background.image', val);

            break;

          default:
            val = _this.getPSProp(key, obj.type);
        }

        if (typeof val === 'object' && val !== null) {
          var str = '[\n';
          var i;

          for (i = 0; i < val.length; i++) {
            str += ' ';
            str += JSON.stringify(val[i]);

            if (i < val.length - 1) {
              str += ', ';
              str += '\n';
            }
          }

          str += '\n]';
          val = str;
        }

        if (val === undefined) {
          val = null;
        }

        return val;
      }
    });
    Object.defineProperty(this, "showGuide", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(x, y, w, h, shape) {
        var style = {
          left: x + 'px',
          top: y + 'px',
          width: w + 'px',
          height: h + 'px'
        };

        _Dom.default.setStyle(_this.blockGuide, style);

        _Dom.default.addClass(_this.blockGuide, 'show');

        if (shape === 'oval') {
          _Dom.default.addClass(_this.blockGuide, 'oval');
        }
      }
    });
    this.adWidth = (0, _globalSetting.get)('adWidth');
    this.adHeight = (0, _globalSetting.get)('adHeight');
    this.emitterData = '';
    this.fps = (0, _globalSetting.get)('fps');
    this.emitterDataFiles = (0, _globalSetting.get)('emitterDataFiles');
    this.images = (0, _globalSetting.get)('loadedImageNames');
    this.data = (0, _index.default)(this);

    if (this.emitterDataFiles.length > 1) {
      this.dataSelector = _Dom.default.getBy('#data-selector');
      this.showDataSelector(this.emitterDataFiles);
    } else {
      // this.emitterData = this.emitterDataFiles[0].content
      this.emitterData = data;
      this.buildInterface();
    }
  }

  var _proto = Interface.prototype;

  _proto.updateEmitterModels = function updateEmitterModels() {
    var models = [];
    var mc = this.modelControl;
    var i;

    for (i = 0; i < this.activeModels.length; i++) {
      var name = this.activeModels[i];
      var obj = {};
      obj.type = mc[name + 'Type'];
      obj.id = mc[name + 'Id'];
      obj.width = mc[name + 'Width'];

      if (obj.type === 'Image') {
        obj.image = mc[name + 'ImageName'];
      }

      if (obj.type === 'Sprite') {
        obj.image = mc[name + 'ImageName'];
        obj.spriteSetting = JSON.parse(mc[name + 'SpriteSetting']);
      }

      if (obj.type === 'Rect') {
        obj.height = mc[name + 'Height'];
      }

      obj.probability = mc[name + 'Probability'];
      obj.properties = JSON.parse(mc[name + 'Props']);
      models.push(obj);
    }

    this.PS.set('particleModels', models);
  };
  /*
  	Initial Sync with Emitter
  */


  _proto.hideGuide = function hideGuide(delay) {
    var _this2 = this;

    var delayTime = delay ? 500 : 0;
    setTimeout(function () {
      _Dom.default.removeClass(_this2.blockGuide, 'show');

      _Dom.default.removeClass(_this2.blockGuide, 'oval');
    }, delayTime);
  };

  _proto.showVelocityGuide = function showVelocityGuide(startAngle, endAngle) {
    _Dom.default.addClass(this.velGuide, 'show');

    var ctx = this.velGuideCtx;
    var center = new _adGeom.Vector2D(60, 60);

    var dir1 = _adGeom.Vector2D.degreeToVector(startAngle);

    var dir2 = _adGeom.Vector2D.degreeToVector(endAngle);

    ctx.clearRect(0, 0, 120, 120);
    ctx.beginPath();
    ctx.moveTo(center.x, center.y);
    ctx.arc(center.x, center.y, 60, 0, Math.PI * 2);
    ctx.lineTo(center.x, center.y);
    ctx.fillStyle = 'rgba( 255, 255, 255, .4 )';
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.moveTo(center.x, center.y);
    ctx.arc(center.x, center.y, 58, _adUtils.MathUtils.toRadians(startAngle), _adUtils.MathUtils.toRadians(endAngle));
    ctx.lineTo(center.x, center.y);
    ctx.strokeStyle = 'rgba( 0, 0, 0, .5 )';
    ctx.fillStyle = 'rgba( 0, 200, 255, .4 )';
    ctx.lineWidth = 2;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  };

  _proto.showForceGuide = function showForceGuide(angle) {
    _Dom.default.addClass(this.forceGuide, 'show');

    var radius = 60;
    var ctx = this.forceGuideCtx;
    var center = new _adGeom.Vector2D(radius, radius);

    var dir = _adGeom.Vector2D.degreeToVector(angle);

    dir.mult(radius);
    dir.add(center);
    ctx.clearRect(0, 0, radius * 2, radius * 2);
    ctx.beginPath();
    ctx.arc(center.x, center.y, radius, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba( 0, 0, 0, 0)';
    ctx.fillStyle = 'rgba( 255, 255, 255, 0.3 )';
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(center.x, center.y, 5, 0, Math.PI * 2);
    ctx.moveTo(center.x, center.y);
    ctx.lineTo(dir.x, dir.y);
    ctx.strokeStyle = 'rgba( 0, 0, 0, 1 )';
    ctx.fillStyle = 'rgba( 255, 255, 255, .4 )';
    ctx.lineWidth = 2;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  };

  _proto.hideVelocityGuide = function hideVelocityGuide() {
    _Dom.default.removeClass(this.velGuide, 'show');
  };

  _proto.hideForceGuide = function hideForceGuide() {
    _Dom.default.removeClass(this.forceGuide, 'show');
  };

  return Interface;
}();

var _default = Interface;
exports.default = _default;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.ParticlesUtils = exports.ParticleModel = exports.Particle = exports.Graphic = exports.Emitter = void 0;

var _Emitter = _interopRequireDefault(__webpack_require__(83));

exports.Emitter = _Emitter.default;

var _Graphic = _interopRequireDefault(__webpack_require__(21));

exports.Graphic = _Graphic.default;

var _Particle = _interopRequireDefault(__webpack_require__(34));

exports.Particle = _Particle.default;

var _ParticleModel = _interopRequireDefault(__webpack_require__(19));

exports.ParticleModel = _ParticleModel.default;

var _ParticlesUtils = _interopRequireDefault(__webpack_require__(20));

exports.ParticlesUtils = _ParticlesUtils.default;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _adGeom = __webpack_require__(2);

var _adEvents = __webpack_require__(30);

var _adUtils = __webpack_require__(0);

var _adControl = __webpack_require__(16);

var _Particle = _interopRequireDefault(__webpack_require__(34));

var _ParticleModel = _interopRequireDefault(__webpack_require__(19));

var _Graphic = _interopRequireDefault(__webpack_require__(21));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** 
	@class Emitter
	@desc
		<a href="https://github.com/ff0000-ad-tech/ad-particles">Github repo</a>
		<br><br>

		( v1.1 )
		<br><br>

		Emitter is a particle system that emits and controls particles and renders on a canvas element.
		It comes with some basic physic features such as gravity, force, bounce and world boundary. 
		<br><br>

		The default setting is in <code>js/EmitterData.js</code> that comes with standard-particles template. 
		To tweak the default data, launch particle simulator in AdApp and work with the interface. When you have 
		reached your desired effect, copy the genrated code back to <code>js/EmitterData.js</code>.
		<br><br>

		For more info about the simulator, visit
		{@link https://confluence.ff0000.com/display/AT/PARTICLES }
	
	@example
		//create a canvas element
		adData.elements.particleCanvas = new UICanvas({
			id: 'particle-canvas',
			target: adData.elements.redAdContainer,
			css: {
				width: adParams.adWidth,
				height: adParams.adHeight
			}
		});
		
		//create an instance of Emitter
		adData.particleSystem = new Emitter();

		//initiate the emitter with the target canvas element
		adData.particleSystem.init( adData.elements.particleCanvas );
		
		//start emitting
		adData.particleSystem.emit();
		
		//stop emitting
		adData.particleSystem.stopEmitting();

*/
// EmitterData comes from global scope w/ ad that has Particles option
var Emitter = function Emitter() {
  var self = this;
  self.G = new _adGeom.Vector2D(0, 0.1);
  self.customBehaiver = {
    emitter: [],
    particle: []
    /**
    	@memberof Emitter
    	@method init
    	@param {CanvasElement} canvasElement
    		a canvas element
    	@param {object} setting
    		optional, contains fps and emitterData as properties to overide the frame rate and EmitterData, see Properties for more info:
    	@property {EmitterData}  emitterData
    	@property {number} fps
    		default fps(60)
    		@desc
    		Initiates the Emitter.
    		@example
    		var myEmitter = new Emitter();
    			//init emitter with default setting
    		myEmitter.init( canvasElement );
    
    		//init emitter with custom setting
    		var customSetting = {
    			fps: 30,
    			emitterData: myCustomEmitterData
    		};
    		myEmitter.init( canvasElement, customSetting );
       */

  };

  self.init = function (canvasElement, setting) {
    setting = setting || {};
    var data = setting.emitterData;
    self.fps = setting.fps || 60; //canvas

    self.canvas = canvasElement;
    self.ctx = canvasElement.getContext('2d');
    self.ctxWidth = canvasElement.width;
    self.ctxHeight = canvasElement.height;
    self.active = false;
    self.frameCount = 0;
    self.startEmitFrame = 0;
    self.frameEmittedCount = 0;
    self.liveParticles = [];
    self.particles = [];
    self.models = [];
    self.properties = {};
    self.setProperties(data);

    self._drawBackground();

    _adEvents.FrameRate.register(self, self._run, self.fps);
  };
  /**
  	@memberof Emitter
  	@method set
  	@param {string} key
  		the name of the property (supports nested object key)
  	@param {number|string|object|array} val
  		the value of the property
  	@param {boolean} triggerChange
  		optional, it is for internal use
  	@desc
  		Sets a sinlge property of emitter properties. To set multiple properties at once, please use setProperties.
  
  	@example
  		myEmitter.set( 'emitRate', 0.1 );
  			myEmitter.set( 'origin.value.x', 0 );
     */


  self.set = function (key, val, triggerChange) {
    triggerChange = triggerChange === undefined ? true : triggerChange;

    _adUtils.ObjectUtils.objectifier.set(key, val, self.properties);

    if (triggerChange) {
      self._afterPropertyChanged([key.split('.')[0]]);
    }
  };
  /**
  	@memberof Emitter
  	@method get
  	@param {string} key
  		the name of the property (supports nested object key)
  	@returns {number|string|object|array}
  		The value of the property
  	@desc
  		Gets a sinlge property of emitter properties.
  		@example
  		var rate = myEmitter.get( 'emitRate' );
  		var lifeSpanValue = myEmitter.get( 'lifeSpan.value' );
     */


  self.get = function (key) {
    return _adUtils.ObjectUtils.objectifier.get(key, self.properties); // return ParticlesUtils.objectifier( key.split( '.' ), false, self.properties );
  };
  /**
  	@memberof Emitter
  	@method setProperties
  	@param {object} obj
  		an object containing properties and values
  	@desc
  		Sets a group of properties of emitter properties (supports nested object key)
  		@example
  		myEmitter.setProperties({
  			'emitRate': 0.1,
  			'background.type': 'none',
  			'origin.value.x': 100
  		});
     */


  self.setProperties = function (obj) {
    var keyArr = [];

    for (var key in obj) {
      self.set(key, obj[key], false);
      keyArr.push(key.split('.')[0]);
    }

    self._afterPropertyChanged(keyArr);
  };
  /**
  	@memberof Emitter
  	@method addCustomBehavier
  	@param {string} type
  		'particle' or 'emitter'
  	@param {function} func
  		function to add
  	@desc
  		Adds on custom behavier in the run loop. If the type is 'particle' function, it will be called in each particle iteration in the run loop
  		with the iterated particle as the first parameter and an array of all particles as the second. If the type is 'emitter', it will be called
  		in each run loop with the emitter as a parameter. 
  		@example
          	function customParticleBehavier1 ( particle, particleGroup ) {
  			var particleLocation = particle.properties.location;
  			var i;
  			//if there is another particle in the range of 60, set the color to red
  			//otherwise set it to yellow
  		    for( i=0; i<particleGroup.length; i++ ) {
  		        var particle2 = particleGroup[ i ];
  		        var dist = particleLocation.dist( particle2.properties.location );
  		        if( dist < 60 ) {
  		            particle.properties.style.color = [ 255, 0, 0 ];
  		        } else {
  		            particle.properties.style.color = [ 255, 255, 0 ];
  		        }
  		    }
         		}
          		function customParticleBehavier2 ( particle, particleGroup ) {
  			particle.properties.style.scale = particle.properties.location.y * 0.1;
         		} 
  	        	function customEmitterBehavier ( emitter ) {
      			//animate the gravityAmount using frameCount
  			emitter.set( 'gravityAmount', Math.sin( emitter.frameCount * 0.1 ));
  		};
  			myEmitter.addCustomBehavier( 'particle', customParticleBehavier1 );
  		myEmitter.addCustomBehavier( 'particle', customParticleBehavier2 );
  		myEmitter.addCustomBehavier( 'emitter', customEmitterBehavier );
     */


  self.addCustomBehavier = function (type, func) {
    this.customBehaiver[type].push(func);
  };
  /**
  	@memberof Emitter
  	@method removeCustomBehavier
  	@param {string} type
  		'particle' or 'emitter'
  	@param {function} func
  		function to remove
  	@desc
  		Removes the custom behavier added.
  		@example
  		myEmitter.removeCustomBehavier( 'particle', customParticleBehavier1 );
  		myEmitter.removeCustomBehavier( 'emitter', customEmitterBehavier );
     */


  this.removeCustomBehavier = function (type, func) {
    var arr = this.customBehaiver[type];
    var i;

    for (i = 0; i < arr.length; i++) {
      if (arr[i] === func) {
        this.customBehaiver[type].splice(i, 1);
      }
    }
  };
  /**
  	@memberof Emitter
  	@method emit
  	@desc
  		Starts emitting particles.
  		@example
  		myEmitter.emit();
     */


  self.emit = function () {
    self.active = true;
    self.startEmitFrame = self.frameCount;

    if (self.properties.emitRate === 0) {
      //emit once
      self.createParticles(self.properties.emitAmount);
    }
  };
  /**
  	@memberof Emitter
  	@method stopEmitting
  	@desc
  		Stops emitting particles.
  		@example
  		myEmitter.stopEmitting();
     */


  self.stopEmitting = function () {
    self.active = false;
  };
  /**
  	@memberof Emitter
  	@method empty
  	@desc
  		Emptys all particles.
  		@example
  		myEmitter.empty();
     */


  self.empty = function () {
    self.particles.forEach(function (a) {
      a = null;
    });
    self.particles = [];
  };
  /**
  	@memberof Emitter
  	@method pause
  	@desc
  		Pause the run loop ( freeze it! ).
  	@example
  		myEmitter.pause();
     */


  self.pause = function () {
    _adEvents.FrameRate.unregister(self, self._run);
  };
  /**
  	@memberof Emitter
  	@method resume
  	@desc
  		Resume the run loop after pause.
  	@example
  		myEmitter.resume();
     */


  self.resume = function () {
    _adEvents.FrameRate.register(self, self._run, self.fps);
  };
  /**
  	@memberof Emitter
  	@name tween
  	@property {function} tween.to
  		{@link Emitter.to}
  	@desc
  		Creates a object to hold tween functions:
  	*/


  self.tween = {};
  /**
  	@memberof Emitter
  	@method to
  	@param {number} duration
  		duration of the tween in seconds
  	@param {object} props
  		properties to use
  	@desc
  		It creates a TweenLite animation for tweening emitter properties.
  		( The purpose of this is to tween multiple nested keys in property object, since TweenLite doesn't support nested keys. )
  		<br><br>
  		<b>NOTE!!!</b>
  		This method is on the {@link Emitter.tween} object!
  		@example
          	myEmitter.tween.to( 0.3, {
  			'emitRate': 1,
  			'velocity.value.angle': 45,
  			'origin.value.x': 100,
  			'origin.value.y': 350,
  			delay: 1,
  			onComplete: function () {
  				console.log( 'Done!' );
  			}
      	   	});
     */

  self.tween.to = function (duration, props) {
    props = props || {}; // var self = self;

    var onUpdate = props.onUpdate || null;
    var delay = props.delay || 0;
    delete props.delay;
    return TweenLite.delayedCall(delay, function () {
      //strip out emitter properties
      var emitterProps = {};

      for (var k in props) {
        if (self.get(k) !== undefined) {
          emitterProps[k] = self.get(k);
        }
      }

      props.onUpdate = function () {
        if (onUpdate) {
          onUpdate();
        }

        self.setProperties(emitterProps);
      };

      TweenLite.to(emitterProps, duration, props);
    });
  };
  /**
  	@memberof Emitter
  	@method createParticles
  	@param {number} amount
  		the amount of particles to create
  	@desc
  		Creates particles from the particle models of the emitter. 
     */


  self.createParticles = function (amount) {
    self.frameEmittedCount++;

    if (self.models.length <= 0) {
      return;
    }

    var p = self.properties;
    var map = self.probabilityMap;
    var i;

    for (i = 0; i < amount; i++) {
      var ms = self.models;
      var index;

      if (self.particles.length >= p.maxParticleAmount) {
        return;
      }

      if (p.pickRandomModel) {
        //select model base on probability
        var num = _adUtils.MathUtils.random(0, self.totalProbability, 0.01);

        var j;

        for (j = 0; j < map.length - 1; j++) {
          if (_adUtils.MathUtils.inRange(num, map[j], map[j + 1])) {
            index = j;
            break;
          }
        }
      } else {
        index = (self.frameEmittedCount - 1) % ms.length;
      }

      self.particles.push(new _Particle.default(self.ctx, ms[index], self.fps));
    }
  };
  /**
  	@memberof Emitter
  	@method addModel
  	@param {object} modelObj
  		the object of the particle model to be added
  	@desc
  		Add a particle model
  	@example
          	var modelObj = {
  				type: "Circle",
  	            width: 12,
  	            properties: {},
  	            id: 'model5'
          	};
          	myEmitter.addModel( modelObj );
  */


  self.addModel = function (modelObj) {
    self.properties.particleModels.push(modelObj);

    self._afterPropertyChanged(['particleModels']);
  };
  /**
  	@memberof Emitter
  	@method removeModel
  	@param {string} id
  		the id of the particle model to be removed
  	@desc
  		Remove a particle model by its id
  	@example
          	myEmitter.removeModel( 'model5' );
  */


  self.removeModel = function (id) {
    var i;
    var index = null;
    var pm = self.properties.particleModels;

    for (i = 0; i < pm.length; i++) {
      if (id === pm[i].id) {
        index = i;
        break;
      }
    }

    if (index !== null) {
      pm.splice(index, 1);

      self._afterPropertyChanged(['particleModels']);
    }
  };

  self._drawBackground = function () {
    var p = self.properties;
    var bg = p.background;

    if (p.clearCanvas) {
      if (self.frameCount > 0) {
        self.ctx.globalAlpha = bg.alpha;
      }

      switch (bg.type) {
        case 'color':
          self.ctx.beginPath();
          self.ctx.rect(0, 0, self.ctxWidth, self.ctxHeight);
          self.ctx.fillStyle = bg.color;
          self.ctx.fill();
          self.ctx.closePath();
          break;

        case 'image':
          self.ctx.drawImage(_adControl.ImageManager.get(bg.image), 0, 0, self.ctxWidth, self.ctxHeight);
          break;

        default:
          self.ctx.clearRect(0, 0, self.ctxWidth, self.ctxHeight);
      }

      self.ctx.globalAlpha = 1;
    }
  };

  self._afterPropertyChanged = function (keys) {
    if (keys === void 0) {
      keys = [];
    }

    //convert globalForce to vector
    if (keys.indexOf('globalForce') > -1) {
      var force = self.properties.globalForce;
      self._globalForce = _adGeom.Vector2D.degreeToVector(force.angle).mult(force.amount);
    } //create models if it's changed


    if (keys.indexOf('particleModels') > -1) {
      self.models = [];
      self.totalProbability = 0;
      var map = [];
      var pm = self.properties.particleModels;

      for (var i = 0; i < pm.length; i++) {
        var pmi = pm[i];
        var g;
        var m;

        switch (pmi.type) {
          case 'Image':
            g = new _Graphic.default[pmi.type](_adControl.ImageManager.get(pmi.image), pmi.width, pmi.style);
            break;

          case 'Sprite':
            g = new _Graphic.default[pmi.type](_adControl.ImageManager.get(pmi.image), pmi.width, pmi.style, pmi.spriteSetting);
            break;

          case 'Circle':
            g = new _Graphic.default[pmi.type](pmi.width, pmi.style);
            break;

          case 'Rect':
            g = new _Graphic.default[pmi.type](pmi.width, pmi.height, pmi.style);
            break;
        }

        m = new _ParticleModel.default(g, pmi.properties);
        m.setDefaultProperties(self.properties);
        self.models.push(m);
        map.push(self.totalProbability);
        var p = pmi.probability === undefined ? 1 : pmi.probability;
        self.totalProbability += p;
      }

      map.push(self.totalProbability);
      self.probabilityMap = map;
    } else {
      var prop = self.properties;
      self.models.forEach(function (a) {
        a.setDefaultProperties(prop);
      });
    }
  }.bind(self);

  self._run = function () {
    var p = self.properties;

    self._drawBackground();

    var i;

    for (i = 0; i < self.particles.length; i++) {
      var a = this.particles[i];

      if (!a.isDead(self.ctxWidth, self.ctxHeight, p.killIfOutOfCanvas)) {
        self.liveParticles.push(a);
        a.update();
        a.applyForce(self._globalForce);

        if (p.gravityAmount !== 0) {
          var gravity = self.G.clone();
          gravity.mult(p.gravityAmount);
          a.applyForce(gravity);
        }

        if (p.world.active) {
          a.checkWorld(p.world.value);
        }

        if (self.customBehaiver.particle !== 0) {
          var m;

          for (m = 0; m < self.customBehaiver.particle.length; m++) {
            var func = self.customBehaiver.particle[m].call(func, a, self.particles);
          }
        }

        a.render();
      } else {
        a = null;
      }
    } //discard dead particles


    self.particles = self.liveParticles;
    self.liveParticles = [];

    if (self.customBehaiver.emitter !== 0) {
      var m;

      for (m = 0; m < self.customBehaiver.emitter.length; m++) {
        var func = self.customBehaiver.emitter[m].call(func, self);
      }
    } //emit if active


    if (self.active) {
      //emit if on frame
      var f = self.frameCount - self.startEmitFrame;

      if (f % ~~(1 / p.emitRate) === 0) {
        self.createParticles(p.emitAmount);
      }
    }

    self.frameCount++;
  };
};

var _default = Emitter;
exports.default = _default;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _getActions = _interopRequireDefault(__webpack_require__(85));

var _emitterPhysics = _interopRequireDefault(__webpack_require__(86));

var _styleAnimation = _interopRequireDefault(__webpack_require__(87));

var _particleModel = __webpack_require__(88);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getInterfaceData = function getInterfaceData(Interface) {
  return {
    actions: (0, _getActions.default)(Interface),
    emitterPhysics: _emitterPhysics.default,
    styleAnimation: (0, _styleAnimation.default)(Interface),
    particleModel: (0, _particleModel.getParticleModelAction)(Interface),
    getDefaultNewParticleModelData: (0, _particleModel.getDefaultNewParticleModelData)(Interface)
  };
};

var _default = getInterfaceData;
exports.default = _default;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var getActions = function getActions(Interface) {
  return [{
    name: 'emit',
    type: 'action',
    //integer
    defaultVal: function defaultVal() {
      Interface.PS.emit();
    }
  }, {
    name: 'stopEmitting',
    type: 'action',
    defaultVal: function defaultVal() {
      Interface.PS.stopEmitting();
    }
  }, {
    name: 'pause',
    type: 'action',
    defaultVal: function defaultVal() {
      Interface.PS.pause();
    }
  }, {
    name: 'resume',
    type: 'action',
    defaultVal: function defaultVal() {
      Interface.PS.resume();
    }
  }, {
    name: 'empty',
    type: 'action',
    defaultVal: function defaultVal() {
      Interface.PS.empty();
    }
  }, {
    name: 'publishCode',
    type: 'action',
    defaultVal: function defaultVal() {
      Interface.publishCode();
    }
  }];
};

var _default = getActions;
exports.default = _default;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var _default = [{
  name: 'pickRandomModel',
  type: 'boolean',
  defaultVal: true
}, {
  name: 'maxParticleAmount',
  type: 'slider',
  range: [0, 1500],
  defaultVal: 300,
  step: 1
}, {
  name: 'emitRate',
  type: 'slider',
  //0 - 1
  range: [0, 1],
  defaultVal: 0.1,
  step: 0.01
}, {
  name: 'emitAmount',
  type: 'slider',
  //integer
  range: [0, 50],
  defaultVal: 1,
  step: 1
}, {
  name: 'killIfOutOfCanvas',
  type: 'boolean',
  defaultVal: false
}, //physics
{
  name: 'world',
  type: 'folder',
  children: [{
    name: 'worldActive',
    type: 'boolean',
    map: 'world.active',
    defaultVal: false,
    step: 1
  }, {
    name: 'left',
    type: 'slider',
    map: 'world.value.0',
    defaultVal: 0,
    range: [-200, 1500],
    step: 1
  }, {
    name: 'right',
    type: 'slider',
    map: 'world.value.1',
    defaultVal: 300,
    range: [-200, 1500],
    step: 1
  }, {
    name: 'top',
    type: 'slider',
    map: 'world.value.2',
    defaultVal: 0,
    range: [-200, 1500],
    step: 1
  }, {
    name: 'bottom',
    type: 'slider',
    map: 'world.value.3',
    defaultVal: 300,
    range: [-500, 1500],
    step: 1
  }]
}, {
  name: 'gravityAmount',
  type: 'slider',
  //integer
  range: [-5, 5],
  defaultVal: 0.1,
  step: 0.01
}, {
  name: 'bounceAmount',
  type: 'slider',
  //integer
  range: [0, 0.9],
  defaultVal: 0.1,
  step: 0.01
}, {
  name: 'globalForce',
  type: 'folder',
  map: 'globalForce',
  children: [{
    name: 'forceAngle',
    type: 'slider',
    map: 'globalForce.angle',
    defaultVal: 0,
    range: [0, 359],
    step: 1
  }, {
    name: 'forceAmount',
    type: 'slider',
    map: 'globalForce.amount',
    defaultVal: 0.05,
    range: [0, 0.5],
    step: 0.01
  }]
}, //particles
{
  name: 'origin',
  type: 'folder',
  children: [{
    name: 'originShape',
    type: 'dropdown',
    map: 'origin.shape',
    options: ['rect', 'oval']
  }, {
    name: 'originX',
    type: 'slider',
    map: 'origin.value.x',
    defaultVal: 200,
    range: [-1000, 1000]
  }, {
    name: 'originY',
    type: 'slider',
    map: 'origin.value.y',
    defaultVal: 200,
    range: [-1000, 1000]
  }, {
    name: 'originXRange',
    type: 'slider',
    map: 'origin.range.x',
    defaultVal: 0,
    range: [0, 1000]
  }, {
    name: 'originYRange',
    type: 'slider',
    map: 'origin.range.y',
    defaultVal: 0,
    range: [0, 1000]
  }]
}, {
  name: 'life span',
  type: 'folder',
  children: [{
    name: 'lifeSpanValue',
    type: 'slider',
    map: 'lifeSpan.value',
    defaultVal: 2,
    range: [0.1, 60]
  }, {
    name: 'lifeSpanRange',
    type: 'slider',
    map: 'lifeSpan.range',
    defaultVal: 0,
    range: [0, 50]
  }]
}, {
  name: 'velocityAngle',
  type: 'folder',
  children: [{
    name: 'angleValue',
    type: 'slider',
    map: 'velocityAngle.value',
    defaultVal: 0.1,
    range: [0, 359],
    step: 1
  }, {
    name: 'angleRange',
    type: 'slider',
    map: 'velocityAngle.range',
    defaultVal: 0.1,
    range: [0, 359],
    step: 1
  }]
}, {
  name: 'speed',
  type: 'folder',
  children: [{
    name: 'speedValue',
    type: 'slider',
    map: 'speed.value',
    defaultVal: 1,
    range: [0, 20],
    step: 0.1
  }, {
    name: 'speedRange',
    type: 'slider',
    map: 'speed.range',
    defaultVal: 0,
    range: [0, 20],
    step: 0.1
  }]
}, {
  name: 'acceleration',
  type: 'slider',
  range: [-0.1, 0.1],
  defaultVal: 0.001,
  step: 0.01
}, {
  name: 'maxSpeed',
  type: 'slider',
  range: [0, 50],
  defaultVal: 30,
  step: 0.1
}, {
  name: 'turbulence',
  type: 'folder',
  children: [{
    name: 'tRate',
    type: 'slider',
    map: 'turbulence.rate',
    defaultVal: 0.05,
    range: [0, 0.2],
    step: 0.01
  }, {
    name: 'xAmplitude',
    type: 'slider',
    map: 'turbulence.xAmplitude',
    defaultVal: 0.1,
    range: [0, 10],
    step: 0.01
  }, {
    name: 'yAmplitude',
    type: 'slider',
    map: 'turbulence.yAmplitude',
    defaultVal: 0.1,
    range: [0, 10],
    step: 0.01
  }]
}];
exports.default = _default;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _globalSetting = __webpack_require__(15);

var getStyleAnimationData = function getStyleAnimationData() {
  var images = (0, _globalSetting.get)('loadedImageDict');
  return [// {
  // 	name: 'blendMode',
  // 	type: 'dropdown',
  // 	defaultVal: 'normal',
  // 	options: [ 'normal', 'multiply', 'lighten', 'darken', 'lineardodge', 'linearburn', 'linearlight', 'vividlight', 'pinlight', 'hardmix', 'lightercolor', 'darkercolor', 'difference', 'screen', 'exclusion', 'overlay', 'softlight', 'hardlight', 'colordodge', 'colorburn' ]
  // },
  {
    name: 'background',
    type: 'folder',
    children: [{
      name: 'bgType',
      type: 'dropdown',
      map: 'background.type',
      defaultVal: 'none',
      options: ['none', 'color', 'image']
    }, {
      name: 'bgColor',
      type: 'color',
      map: 'background.color',
      defaultVal: '#ff0000'
    }, {
      name: 'bgImage',
      type: 'dropdown',
      map: 'background.image',
      defaultVal: '',
      options: images
    }, {
      name: 'bgAlpha',
      type: 'slider',
      map: 'background.alpha',
      range: [0, 1],
      defaultVal: 1
    }]
  }, {
    name: 'clearCanvas',
    type: 'boolean',
    defaultVal: true
  }, {
    name: 'alpha',
    type: 'folder',
    children: [{
      name: 'alphaValue',
      type: 'slider',
      map: 'alpha.value',
      defaultVal: 0.95,
      range: [0, 1],
      step: 0.01
    }, {
      name: 'alphaRange',
      type: 'slider',
      map: 'alpha.range',
      defaultVal: 0.15,
      range: [0, 1],
      step: 0.01
    }]
  }, {
    name: 'transformOrigin',
    type: 'folder',
    children: [{
      name: 'originX',
      type: 'slider',
      map: 'transformOrigin.x',
      defaultVal: 0.5,
      range: [-1, 2],
      step: 0.01
    }, {
      name: 'originY',
      type: 'slider',
      map: 'transformOrigin.y',
      defaultVal: 0.5,
      range: [-1, 2],
      step: 0.01
    }]
  }, {
    name: 'scale',
    type: 'folder',
    children: [{
      name: 'scaleValue',
      type: 'slider',
      map: 'scale.value',
      defaultVal: 1.5,
      range: [0, 10],
      step: 0.01
    }, {
      name: 'scaleRange',
      type: 'slider',
      map: 'scale.range',
      defaultVal: 0.15,
      range: [0, 10],
      step: 0.01
    }]
  }, {
    name: 'rotation',
    type: 'folder',
    children: [{
      name: 'rotationValue',
      type: 'slider',
      map: 'rotation.value',
      defaultVal: 0,
      range: [-360, 360],
      step: 1
    }, {
      name: 'rotationRange',
      type: 'slider',
      map: 'rotation.range',
      defaultVal: 0,
      range: [0, 360],
      step: 1
    }]
  }, {
    name: 'color',
    type: 'folder',
    children: [{
      name: 'colorValueR',
      type: 'slider',
      map: 'color.value.0',
      defaultVal: 255,
      range: [0, 255],
      step: 1
    }, {
      name: 'colorValueG',
      type: 'slider',
      map: 'color.value.1',
      defaultVal: 100,
      range: [0, 255],
      step: 1
    }, {
      name: 'colorValueB',
      type: 'slider',
      map: 'color.value.2',
      defaultVal: 100,
      range: [0, 255],
      step: 1
    }, {
      name: 'colorRangeR',
      type: 'slider',
      map: 'color.range.0',
      defaultVal: 255,
      range: [0, 255],
      step: 1
    }, {
      name: 'colorRangeG',
      type: 'slider',
      map: 'color.range.1',
      defaultVal: 100,
      range: [0, 255],
      step: 1
    }, {
      name: 'colorRangeB',
      type: 'slider',
      map: 'color.range.2',
      defaultVal: 100,
      range: [0, 255],
      step: 1
    }]
  }, {
    name: 'alphaAnimation',
    type: 'folder',
    children: [{
      name: 'alphaLoop',
      type: 'boolean',
      map: 'animations.alpha.loop',
      defaultVal: true
    }, {
      name: 'alphaDuration',
      type: 'text',
      map: 'animations.alpha.duration',
      defaultVal: 'max'
    }, {
      name: 'alphaSteps',
      type: 'text',
      map: 'animations.alpha.steps',
      defaultVal: ''
    }]
  }, {
    name: 'scaleAnimation',
    type: 'folder',
    children: [{
      name: 'scaleLoop',
      type: 'boolean',
      map: 'animations.scale.loop',
      defaultVal: true
    }, {
      name: 'scaleDuration',
      type: 'text',
      map: 'animations.scale.duration',
      defaultVal: 'max'
    }, {
      name: 'scaleSteps',
      type: 'text',
      map: 'animations.scale.steps',
      defaultVal: '{ r: 0, v: -1 },{ r: 0.1, v: 0 },{ r: 0.9, v: 0 },{ r: 1, v: -1 }'
    }]
  }, {
    name: 'rotationAnimation',
    type: 'folder',
    children: [{
      name: 'rotationLoop',
      type: 'boolean',
      map: 'animations.rotation.loop',
      defaultVal: true
    }, {
      name: 'rotationDuration',
      type: 'text',
      map: 'animations.rotation.duration',
      defaultVal: 'max'
    }, {
      name: 'rotationSteps',
      type: 'text',
      map: 'animations.rotation.steps',
      defaultVal: '{ r: 0, v: -1 },{ r: 0.1, v: 0 },{ r: 0.9, v: 0 },{ r: 1, v: -1 }'
    }]
  }];
};

var _default = getStyleAnimationData;
exports.default = _default;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDefaultNewParticleModelData = exports.getParticleModelAction = void 0;

var _globalSetting = __webpack_require__(15);

var getParticleModelAction = function getParticleModelAction(Interface) {
  return [{
    name: 'addParticleModel',
    type: 'action',
    defaultVal: function defaultVal() {
      Interface.addParticleModel();
    }
  }];
};

exports.getParticleModelAction = getParticleModelAction;

var getDefaultNewParticleModelData = function getDefaultNewParticleModelData(Interface) {
  var images = Interface.images;
  return function (name) {
    return [{
      name: name + 'Type',
      type: 'dropdown',
      defaultVal: 'Circle',
      options: ['Image', 'Circle', 'Rect', 'Sprite'],
      modelKey: 'type'
    }, {
      name: name + 'ImageName',
      type: 'dropdown',
      defaultVal: images[0] || '',
      options: images,
      modelKey: 'image'
    }, {
      name: name + 'Width',
      type: 'text',
      defaultVal: 10,
      min: 0,
      modelKey: 'width'
    }, {
      name: name + 'Height',
      type: 'text',
      defaultVal: 10,
      min: 0,
      modelKey: 'height'
    }, {
      name: name + 'Probability',
      type: 'slider',
      range: [0.1, 50],
      defaultVal: 1,
      min: 0.1,
      modelKey: 'probability'
    }, {
      name: name + 'Props',
      type: 'text',
      defaultVal: '{}',
      modelKey: 'properties'
    }, {
      name: name + 'SpriteSetting',
      type: 'text',
      defaultVal: {
        frameWidth: 0,
        frameHeight: 0,
        frameNumber: 1,
        speed: 0.2,
        loop: true
      },
      modelKey: 'spriteSetting'
    }, {
      name: name + 'Id',
      type: 'text',
      defaultVal: name,
      modelKey: 'id'
    }, {
      name: name + 'Delete',
      type: 'action',
      modelKey: null,
      defaultVal: function defaultVal() {
        Interface.deleteParticleModel(name);
      }
    }];
  };
};

exports.getDefaultNewParticleModelData = getDefaultNewParticleModelData;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.mergePath = exports.parseAdSize = exports.getAdPathFromUrl = exports.getParamInQueryString = void 0;

var getParamInQueryString = function getParamInQueryString(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  var results = regex.exec(location.search);
  return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

exports.getParamInQueryString = getParamInQueryString;

var getAdPathFromUrl = function getAdPathFromUrl() {
  var _window$location = window.location,
      origin = _window$location.origin,
      pathname = _window$location.pathname;
  var adPath = mergePath(origin, '1-build', pathname);
  return adPath;
};

exports.getAdPathFromUrl = getAdPathFromUrl;

var parseAdSize = function parseAdSize(path) {
  var sizeReg = /(\d+)x(\d+)/;

  if (sizeReg.test(path)) {
    var result = sizeReg.exec(path);
    return {
      width: result[1],
      height: result[2]
    };
  }

  return null;
};

exports.parseAdSize = parseAdSize;

var mergePath = function mergePath() {
  var path = '';
  var endSlash = /\/+$/g;
  var startEndSlash = /^\/+|\/+$/g;

  for (var i = 0; i < arguments.length; i++) {
    var item = arguments[i];
    var name = '';

    if (i === 0) {
      name = item.replace(endSlash, '');
    } else {
      name = item.replace(startEndSlash, '');
    }

    path += name + "/";
  }

  path = path.replace(endSlash, '');
  return path;
};

exports.mergePath = mergePath;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map