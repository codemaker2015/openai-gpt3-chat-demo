(this.webpackJsonpgpt3chat=this.webpackJsonpgpt3chat||[]).push([[0],{13:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(22),r=n.n(c),i=(n(29),n(30),n(4)),o=n(9),u=n(6),l=n(7),j=(n(31),n(0));function b(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),s=n[0],c=n[1];return Object(j.jsx)("form",{onSubmit:function(t){t.preventDefault(),e.addMessage(s),c("")},className:"compose",children:Object(j.jsx)("input",{type:"text",value:s,className:"compose-input",placeholder:"Aa",onChange:function(e){c(e.target.value)}})})}var m=n(3),h=n.n(m);n(13);function p(e){var t=e.data,n=e.isMine,a=e.startsSequence,s=e.endsSequence,c=e.showTimestamp,r=h()(t.timestamp).format("LLLL");return Object(j.jsxs)("div",{className:["message","".concat(n?"mine":""),"".concat(a?"start":""),"".concat(s?"end":"")].join(" "),children:[c&&Object(j.jsx)("div",{className:"timestamp",children:r}),Object(j.jsx)("div",{className:"bubble-container",children:Object(j.jsx)("div",{className:"bubble",title:r,children:t.message})})]})}n(33),n(34);function d(e){var t=e.title;return Object(j.jsx)("div",{className:"toolbar",children:Object(j.jsx)("h1",{className:"toolbar-title",children:t})})}var f=n(23),v=n.n(f),O=n(24),g=n.n(O);function x(e,t){return function(e,t,n){var a=e;return g.a.takeRightWhile(t,(function(e){return(a+=e.length)<=n}))}(e,t,2e3)}function w(e){var t="The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\n\n",n=e.map((function(e){return"".concat(e.author,": ").concat(e.message,"\n")}));return t+x(t.length+"AI:".length,n).join("")+"AI:"}function N(e){return I.apply(this,arguments)}function I(){return(I=Object(u.a)(Object(i.a)().mark((function e(t){var n,a,s;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.openai.com/v1/engines/davinci/completions",n={"Content-Type":"application/json",Authorization:"Bearer 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"},a={prompt:t,max_tokens:300,temperature:.9,n:1,stop:["AI:","Human:"]},e.next=5,v.a.post("https://api.openai.com/v1/engines/davinci/completions",a,{headers:n});case 5:return s=e.sent,e.abrupt("return",s.data.choices[0].text);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var k={getAIResponse:function(e){return Object(u.a)(Object(i.a)().mark((function t(){var n,a;return Object(i.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=w(e),t.next=3,N(n);case 3:return a=t.sent,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})))()}},A={getMessages:function(e,t){for(var n=0,a=e.length,s=[];n<a;){var c=e[n-1],r=e[n],i=e[n+1],o=r.author===t,u=h()(r.timestamp),l=!0,b=!0,m=!0;if(c){var d=h()(c.timestamp),f=h.a.duration(u.diff(d));c.author===r.author&&f.as("hours")<1&&(l=!1),f.as("hours")<1&&(m=!1)}if(i){var v=h()(i.timestamp),O=h.a.duration(v.diff(u));i.author===r.author&&O.as("hours")<1&&(b=!1)}s.push(Object(j.jsx)(p,{isMine:o,startsSequence:l,endsSequence:b,showTimestamp:m,data:r},n)),n+=1}return s}};n(55);function T(){return Object(j.jsx)("div",{className:"message end",children:Object(j.jsx)("div",{className:"bubble-container",children:Object(j.jsx)("div",{className:"bubble",children:Object(j.jsxs)("div",{className:"typing-indicator",children:[Object(j.jsx)("span",{}),Object(j.jsx)("span",{}),Object(j.jsx)("span",{})]})})})})}var y="Human";function S(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)([{author:"AI",message:"Hi! I'm a chatbot built with GPT-3.\n        What would you like to talk about?",timestamp:(new Date).getTime()}]),r=Object(l.a)(c,2),m=r[0],h=r[1],p=Object(a.useRef)(null);Object(a.useEffect)((function(){var e;p&&(null===(e=p.current)||void 0===e||e.scrollIntoView({behavior:"smooth"}))}));var f=function(){var e=Object(u.a)(Object(i.a)().mark((function e(t){var n,a,c,r;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={author:y,message:t,timestamp:(new Date).getTime()},h((function(e){return[].concat(Object(o.a)(e),[n])})),s(!0),a=[].concat(Object(o.a)(m),[n]),e.next=6,k.getAIResponse(a);case 6:c=e.sent,r={author:"AI",message:c,timestamp:(new Date).getTime()},h((function(e){return[].concat(Object(o.a)(e),[r])})),s(!1);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"message-list",children:[Object(j.jsx)(d,{title:"Chat with OpenAI"}),Object(j.jsxs)("div",{className:"message-list-container",children:[A.getMessages(m,y),n&&Object(j.jsx)(T,{}),Object(j.jsx)("div",{ref:p})]}),Object(j.jsx)(b,{addMessage:f})]})}n(56);function C(){return Object(j.jsx)("div",{className:"messenger",children:Object(j.jsx)("div",{className:"scrollable content",children:Object(j.jsx)(S,{})})})}var B=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(C,{})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,58)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(B,{})}),document.getElementById("root")),M()}},[[57,1,2]]]);
//# sourceMappingURL=main.234c0f2f.chunk.js.map