var browserBlast=function(e){"use strict";function r(){var e=document.createElement("div");e.id="browserblast",e.style.zIndex="2147483647",e.innerHTML=s,document.body.appendChild(e),document.documentElement.className+=" unsupported-browser"}function t(){var e=-1;if("Microsoft Internet Explorer"===navigator.appName){var r=navigator.userAgent,t=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");null!==t.exec(r)&&(e=parseFloat(RegExp.$1))}return e}var n=e||{},a=n.devMode||!1,o=n.supportedIE||"8",s=n.message||"Hey! Your browser is unsupported. Please <a href='http://browsehappy.com' target='_blank'>upgrade</a> for the best experience.",p=t();(p>-1&&o+".0">p||a===!0)&&r()};