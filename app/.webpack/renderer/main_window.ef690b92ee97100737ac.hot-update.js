webpackHotUpdate("main_window",{

/***/ "./src/renderer.js":
/*!*************************!*\
  !*** ./src/renderer.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);
/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 */


const sniffer = __webpack_require__(/*! ./modules/sniffer */ "./src/modules/sniffer.js");

var start = document.getElementById('start'),
    stop = document.getElementById('stop');

start.onclick = () => {
    console.log('Sniffer activated 👃🏼');
    sniffer.start_session();
};

// stop.onclick = () => {
//     console.log('Sniffer deactivated 👃🏼');
//     sniffer.stop_session();
// }

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXFCO0FBQ3JCLGdCQUFnQixtQkFBTyxDQUFDLG1EQUFtQjs7QUFFM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJIiwiZmlsZSI6Im1haW5fd2luZG93LmVmNjkwYjkyZWU5NzEwMDczN2FjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgZmlsZSB3aWxsIGF1dG9tYXRpY2FsbHkgYmUgbG9hZGVkIGJ5IHdlYnBhY2sgYW5kIHJ1biBpbiB0aGUgXCJyZW5kZXJlclwiIGNvbnRleHQuXG4gKiBUbyBsZWFybiBtb3JlIGFib3V0IHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIHRoZSBcIm1haW5cIiBhbmQgdGhlIFwicmVuZGVyZXJcIiBjb250ZXh0IGluXG4gKiBFbGVjdHJvbiwgdmlzaXQ6XG4gKlxuICogaHR0cHM6Ly9lbGVjdHJvbmpzLm9yZy9kb2NzL3R1dG9yaWFsL2FwcGxpY2F0aW9uLWFyY2hpdGVjdHVyZSNtYWluLWFuZC1yZW5kZXJlci1wcm9jZXNzZXNcbiAqXG4gKiBCeSBkZWZhdWx0LCBOb2RlLmpzIGludGVncmF0aW9uIGluIHRoaXMgZmlsZSBpcyBkaXNhYmxlZC4gV2hlbiBlbmFibGluZyBOb2RlLmpzIGludGVncmF0aW9uXG4gKiBpbiBhIHJlbmRlcmVyIHByb2Nlc3MsIHBsZWFzZSBiZSBhd2FyZSBvZiBwb3RlbnRpYWwgc2VjdXJpdHkgaW1wbGljYXRpb25zLiBZb3UgY2FuIHJlYWRcbiAqIG1vcmUgYWJvdXQgc2VjdXJpdHkgcmlza3MgaGVyZTpcbiAqXG4gKiBodHRwczovL2VsZWN0cm9uanMub3JnL2RvY3MvdHV0b3JpYWwvc2VjdXJpdHlcbiAqXG4gKi9cblxuaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5jb25zdCBzbmlmZmVyID0gcmVxdWlyZSgnLi9tb2R1bGVzL3NuaWZmZXInKTtcblxudmFyIHN0YXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0JyksXG4gICAgc3RvcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdG9wJyk7XG5cbnN0YXJ0Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ1NuaWZmZXIgYWN0aXZhdGVkIPCfkYPwn4+8Jyk7XG4gICAgc25pZmZlci5zdGFydF9zZXNzaW9uKCk7XG59O1xuXG4vLyBzdG9wLm9uY2xpY2sgPSAoKSA9PiB7XG4vLyAgICAgY29uc29sZS5sb2coJ1NuaWZmZXIgZGVhY3RpdmF0ZWQg8J+Rg/Cfj7wnKTtcbi8vICAgICBzbmlmZmVyLnN0b3Bfc2Vzc2lvbigpO1xuLy8gfSJdLCJzb3VyY2VSb290IjoiIn0=