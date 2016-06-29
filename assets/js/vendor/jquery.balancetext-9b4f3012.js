/*
 * Copyright (c) 2012 Adobe Systems Incorporated. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License. *
 */
/*
 * Copyright (c) 2007-2009 unscriptable.com and John M. Hann
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the “Software”), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *
 * Except as contained in this notice, the name(s) of the above
 * copyright holders (unscriptable.com and John M. Hann) shall not be
 * used in advertising or otherwise to promote the sale, use or other
 * dealings in this Software without prior written authorization.
 *
 * http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
 *
 */
!function(t,e){"use strict";var n=function(t,e,n){var i;return function(){function r(){n||t.apply(a,s),i=null}var a=this,s=arguments;i?clearTimeout(i):n&&t.apply(a,s),i=setTimeout(r,e||100)}};jQuery.fn[e]=function(t){return t?this.bind("resize",n(t)):this.trigger(e)}}(jQuery,"smartresize"),function(t){"use strict";function e(){this.reset()}function n(){t(".balance-text").balanceText()}var i=document.documentElement.style,r=i.textWrap||i.WebkitTextWrap||i.MozTextWrap||i.MsTextWrap||i.OTextWrap;e.prototype.reset=function(){this.index=0,this.width=0};var a=function(t){return Boolean(t.match(/^\s$/))},s=function(e){e.find('br[data-owner="balance-text"]').replaceWith(" ");var n=e.find('span[data-owner="balance-text"]');if(n.length>0){var i="";n.each(function(){i+=t(this).text(),t(this).remove()}),e.html(i)}},h=function(t){return i=t.get(0).currentStyle||window.getComputedStyle(t.get(0),null),"justify"===i.textAlign},o=function(e,n,i){n=t.trim(n);var r=n.split(" ").length;if(n+=" ",2>r)return n;var a=t("<span></span>").html(n);e.append(a);var s=a.width();a.remove();var h=Math.floor((i-s)/(r-1));return a.css("word-spacing",h+"px").attr("data-owner","balance-text"),t("<div></div>").append(a).html()},c=function(t,e){return 0===e||e===t.length||a(t.charAt(e-1))&&!a(t.charAt(e))},l=function(t,e,n,i,r,a,s){for(var h;;){for(;!c(e,a);)a+=r;if(t.text(e.substr(0,a)),h=t.width(),0>r?i>=h||0>=h||0===a:h>=i||h>=n||a===e.length)break;a+=r}s.index=a,s.width=h};t.fn.balanceText=function(){return r?this:this.each(function(){var n=t(this),i=5e3;s(n);var r="";n.attr("style")&&n.attr("style").indexOf("line-height")>=0&&(r=n.css("line-height")),n.css("line-height","normal");var a=n.width(),c=n.height(),d=n.css("white-space"),u=n.css("float"),p=n.css("display"),f=n.css("position");n.css({"white-space":"nowrap","float":"none",display:"inline",position:"static"});var x=n.width(),w=n.height(),v="pre-wrap"===d?0:w/4;if(a>0&&x>a&&i>x){for(var g=n.text(),m="",b="",y=h(n),M=Math.round(c/w),T=M;T>1;){var W=Math.round((x+v)/T-v),j=Math.round((g.length+1)/T)-1,z=new e;l(n,g,a,W,-1,j,z);var A=new e;j=z.index,l(n,g,a,W,1,j,A),z.reset(),j=A.index,l(n,g,a,W,-1,j,z);var Q;Q=0===z.index?A.index:a<A.width||z.index===A.index?z.index:Math.abs(W-z.width)<Math.abs(A.width-W)?z.index:A.index,b=g.substr(0,Q),y?m+=o(n,b,a):(m+=b.replace(/\s+$/,""),m+='<br data-owner="balance-text" />'),g=g.substr(Q),T--,n.text(g),x=n.width()}y?n.html(m+o(n,g,a)):n.html(m+g)}n.css({position:f,display:p,"float":u,"white-space":d,"line-height":r})})},t(window).ready(n),t(window).smartresize(n)}(jQuery);