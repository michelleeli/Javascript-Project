/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("const paths = document.querySelectorAll('path');\nconst popup = document.getElementById('popup');\nfunction createPopup(event) {\n  const countryName = event.target.getAttribute('title');\n  const rect = event.target.getBoundingClientRect();\n  let centerX = rect.left + rect.width / 2;\n  let centerY = rect.top + rect.height / 2;\n  popup.innerText = countryName;\n  //  css?\n  popup.style.display = 'block';\n  popup.style.left = centerX + 'px';\n  popup.style.top = centerY + 'px';\n}\npaths.forEach(path => {\n  path.addEventListener('mouseover', createPopup);\n  path.addEventListener('mouseout', function () {\n    popup.style.display = 'none';\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJuYW1lcyI6WyJwYXRocyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInBvcHVwIiwiZ2V0RWxlbWVudEJ5SWQiLCJjcmVhdGVQb3B1cCIsImV2ZW50IiwiY291bnRyeU5hbWUiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2VudGVyWCIsImxlZnQiLCJ3aWR0aCIsImNlbnRlclkiLCJ0b3AiLCJoZWlnaHQiLCJpbm5lclRleHQiLCJzdHlsZSIsImRpc3BsYXkiLCJmb3JFYWNoIiwicGF0aCIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLXByb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwYXRocyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3BhdGgnKTtcbmNvbnN0IHBvcHVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwJyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVBvcHVwKGV2ZW50KSB7XG4gICAgY29uc3QgY291bnRyeU5hbWUgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCd0aXRsZScpO1xuICAgIGNvbnN0IHJlY3QgPSBldmVudC50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgbGV0IGNlbnRlclggPSByZWN0LmxlZnQgKyByZWN0LndpZHRoIC8gMjtcbiAgICBsZXQgY2VudGVyWSA9IHJlY3QudG9wICsgcmVjdC5oZWlnaHQgLyAyO1xuICAgIHBvcHVwLmlubmVyVGV4dCA9IGNvdW50cnlOYW1lO1xuICAgIC8vICBjc3M/XG4gICAgcG9wdXAuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgcG9wdXAuc3R5bGUubGVmdCA9IGNlbnRlclggKyAncHgnO1xuICAgIHBvcHVwLnN0eWxlLnRvcCA9IGNlbnRlclkgKyAncHgnO1xufVxuXG5wYXRocy5mb3JFYWNoKHBhdGggPT4ge1xuICBwYXRoLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGNyZWF0ZVBvcHVwKVxuXG4gIHBhdGguYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBmdW5jdGlvbigpIHtcbiAgICBwb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9KTtcbn0pXG5cblxuXG4iXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7QUFDL0MsTUFBTUMsS0FBSyxHQUFHRixRQUFRLENBQUNHLGNBQWMsQ0FBQyxPQUFPLENBQUM7QUFFOUMsU0FBU0MsV0FBV0EsQ0FBQ0MsS0FBSyxFQUFFO0VBQ3hCLE1BQU1DLFdBQVcsR0FBR0QsS0FBSyxDQUFDRSxNQUFNLENBQUNDLFlBQVksQ0FBQyxPQUFPLENBQUM7RUFDdEQsTUFBTUMsSUFBSSxHQUFHSixLQUFLLENBQUNFLE1BQU0sQ0FBQ0cscUJBQXFCLENBQUMsQ0FBQztFQUNqRCxJQUFJQyxPQUFPLEdBQUdGLElBQUksQ0FBQ0csSUFBSSxHQUFHSCxJQUFJLENBQUNJLEtBQUssR0FBRyxDQUFDO0VBQ3hDLElBQUlDLE9BQU8sR0FBR0wsSUFBSSxDQUFDTSxHQUFHLEdBQUdOLElBQUksQ0FBQ08sTUFBTSxHQUFHLENBQUM7RUFDeENkLEtBQUssQ0FBQ2UsU0FBUyxHQUFHWCxXQUFXO0VBQzdCO0VBQ0FKLEtBQUssQ0FBQ2dCLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE9BQU87RUFDN0JqQixLQUFLLENBQUNnQixLQUFLLENBQUNOLElBQUksR0FBR0QsT0FBTyxHQUFHLElBQUk7RUFDakNULEtBQUssQ0FBQ2dCLEtBQUssQ0FBQ0gsR0FBRyxHQUFHRCxPQUFPLEdBQUcsSUFBSTtBQUNwQztBQUVBZixLQUFLLENBQUNxQixPQUFPLENBQUNDLElBQUksSUFBSTtFQUNwQkEsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUVsQixXQUFXLENBQUM7RUFFL0NpQixJQUFJLENBQUNDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxZQUFXO0lBQzNDcEIsS0FBSyxDQUFDZ0IsS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTtFQUM5QixDQUFDLENBQUM7QUFDSixDQUFDLENBQUMifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;