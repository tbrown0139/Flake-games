"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _videoJs = require('video.js');

var _videoJs2 = _interopRequireDefault(_videoJs);

// Default options for the plugin.
var defaults = {
  image: "/logo-example.png",
  title: "Logo Title",
  destination: "http://www.google.com",
  destinationTarget: "_blank"
};

/**
 * Function to invoke when the player is ready.
 *
 * This is a great place for your plugin to initialize itself. When this
 * function is called, the player will have its DOM and child components
 * in place.
 *
 * @function onPlayerReady
 * @param    {Player} player
 * @param    {Object} [options={}]
 */
var onPlayerReady = function onPlayerReady(player, options) {
  var containerElement = document.createElement("div");
  containerElement.className = "vjs-brand-container";

  var linkElement = document.createElement("a");
  linkElement.className = "vjs-brand-container-link";
  linkElement.setAttribute("href", options.destination || defaults.destination);
  linkElement.setAttribute("title", options.title || defaults.title);
  linkElement.setAttribute("target", options.destinationTarget || defaults.destinationTarget);

  var imageElement = document.createElement("img");
  imageElement.src = options.image || defaults.image;

  linkElement.appendChild(imageElement);
  containerElement.appendChild(linkElement);

  player.controlBar.el().insertBefore(containerElement, player.controlBar.fullscreenToggle.el());
  player.addClass('vjs-brand');
};

/**
 * A video.js plugin.
 *
 * In the plugin function, the value of `this` is a video.js `Player`
 * instance. You cannot rely on the player being in a "ready" state here,
 * depending on how the plugin is invoked. This may or may not be important
 * to you; if not, remove the wait for "ready"!
 *
 * @function brand
 * @param    {Object} [options={}]
 *           An object of options left to the plugin author to define.
 */
var brand = function brand(options) {
  var _this = this;

  this.ready(function () {
    onPlayerReady(_this, _videoJs2["default"].mergeOptions(defaults, options));
  });
};

// Register the plugin with video.js.
_videoJs2["default"].plugin('brand', brand);

// Include the version number.
brand.VERSION = '__VERSION__';

exports["default"] = brand;
module.exports = exports["default"];