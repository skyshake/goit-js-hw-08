var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,o=/^0o[0-7]+$/i,i=parseInt,a="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,u=a||f||Function("return this")(),c=Object.prototype.toString,l=Math.max,s=Math.min,d=function(){return u.Date.now()};function m(e,t,n){var r,o,i,a,f,u,c=0,m=!1,b=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function j(e){return c=e,f=setTimeout(O,t),m?y(e):a}function T(e){var n=e-u;return void 0===u||n>=t||n<0||b&&e-c>=i}function O(){var e=d();if(T(e))return h(e);f=setTimeout(O,function(e){var n=t-(e-u);return b?s(n,i-(e-c)):n}(e))}function h(e){return f=void 0,g&&r?y(e):(r=o=void 0,a)}function S(){var e=d(),n=T(e);if(r=arguments,o=this,u=e,n){if(void 0===f)return j(u);if(b)return f=setTimeout(O,t),y(u)}return void 0===f&&(f=setTimeout(O,t)),a}return t=p(t)||0,v(n)&&(m=!!n.leading,i=(b="maxWait"in n)?l(p(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),S.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=o=f=void 0},S.flush=function(){return void 0===f?a:h(d())},S}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(v(e)){var a="function"==typeof e.valueOf?e.valueOf():e;e=v(a)?a+"":a}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var f=r.test(e);return f||o.test(e)?i(e.slice(2),f?2:8):n.test(e)?NaN:+e}const b=document.querySelector(".feedback-form"),g=localStorage.getItem("feedback-form-state");if(null!==g){const e=JSON.parse(g),{email:t,message:n}=b;t.value=e.email,n.value=e.message}b.addEventListener("input",(e=>{const{email:t,message:n}=e.currentTarget,r={email:t.value,message:n.value};localStorage.setItem("feedback-form-state",JSON.stringify(r))})),b.addEventListener("submit",(e=>{e.preventDefault(),localStorage.removeItem("feedback-form-state"),e.currentTarget.reset()}));
//# sourceMappingURL=03-feedback.f3d164ab.js.map