(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{346:function(s,t,e){"use strict";e.r(t);var n=e(9),a=Object(n.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"eslint-comments-no-restricted-disable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#eslint-comments-no-restricted-disable"}},[s._v("#")]),s._v(" eslint-comments/no-restricted-disable")]),s._v(" "),e("blockquote",[e("p",[s._v("disallow "),e("code",[s._v("eslint-disable")]),s._v(" comments about specific rules")])]),s._v(" "),e("p",[s._v("This rule warns "),e("code",[s._v("eslint-disable")]),s._v(" directive-comments if the comment disable specific rules.")]),s._v(" "),e("h2",{attrs:{id:"rule-details"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[s._v("#")]),s._v(" Rule Details")]),s._v(" "),e("p",[s._v("👎 Examples of "),e("strong",[s._v("incorrect")]),s._v(" code for this rule:")]),s._v(" "),e("eslint-playground",{attrs:{type:"bad",code:"/*eslint eslint-comments/no-restricted-disable: [error, no-undef, no-unused-vars]*/\n\n/*eslint-disable no-undef */\nf()\n"}}),s._v(" "),e("eslint-playground",{attrs:{type:"bad",code:"/*eslint eslint-comments/no-restricted-disable: [error, no-undef, no-unused-vars]*/\n\nf() //eslint-disable-line no-undef\n"}}),s._v(" "),e("eslint-playground",{attrs:{type:"bad",code:"/*eslint eslint-comments/no-restricted-disable: [error, no-undef, no-unused-vars]*/\n\nf() //eslint-disable-line\n"}}),s._v(" "),e("p",[s._v("👍 Examples of "),e("strong",[s._v("correct")]),s._v(" code for this rule:")]),s._v(" "),e("eslint-playground",{attrs:{type:"good",code:"/*eslint eslint-comments/no-restricted-disable: [error, no-undef, no-unused-vars]*/\n\nf() //eslint-disable-line another-rule\n"}}),s._v(" "),e("h2",{attrs:{id:"options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[s._v("#")]),s._v(" Options")]),s._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"no-restricted-disable"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"error"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ..."),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),e("p",[s._v("This rule takes a list of strings, where each string is a glob pattern. For example:")]),s._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"eslint-comments/no-restricted-disable"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"error"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"no-undef"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*semi*"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// rules which includes `semi`. E.g. `semi`, `semi-style`, `no-extra-semi`, ...")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"react/*"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// rules of `eslint-plugin-react`")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"no-restricted-disable"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"error"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("          "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// any rules")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"!no-console"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// but except `no-console`.")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])],1)}),[],!1,null,null,null);t.default=a.exports}}]);