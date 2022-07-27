"use strict";(self.webpackChunkfeedback_app=self.webpackChunkfeedback_app||[]).push([[216],{1185:function(e,n,r){r.d(n,{F:function(){return c}});r(2791);var t=r(6355),a=r(6871),o=r(4075),i=r(184),c=function(){var e=(0,a.TH)(),n="/";e&&e.state&&(n=e.state.from||"/");return(0,i.jsxs)(o.i,{to:n,children:[(0,i.jsx)("span",{className:"icon-wrapper",children:(0,i.jsx)(t._HU,{color:"#647196"})}),"Go Back"]})}},4075:function(e,n,r){r.d(n,{i:function(){return c}});var t,a=r(168),o=r(6031),i=r(3504),c=(0,o.ZP)(i.rU)(t||(t=(0,a.Z)(["\n  display: flex;\n  align-items: center;\n  color: white;\n  font-weight: 700;\n  font-size: 1.3rem;\n  line-height: 1.9rem;\n  gap: 1rem;\n  cursor: pointer;\n  text-decoration: none;\n  color: var(--dark-charlie);\n"])))},5216:function(e,n,r){r.r(n),r.d(n,{Roadmap:function(){return Ke}});var t,a,o,i,c=r(2791),l=r(6871),d=r(8617),s=r(8516),u=r(1185),f=r(168),m=r(6031),h=r(4200),v=m.ZP.header(t||(t=(0,f.Z)(["\n  height: 10rem;\n  background: var(--dark-alpha);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 2.6rem 2.4rem;\n\n  ","\n"])),h.ZP.greaterThan("small")(a||(a=(0,f.Z)(["\n  border-radius: 1rem;\n"])))),p=m.ZP.div(o||(o=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n"]))),x=m.ZP.h1(i||(i=(0,f.Z)(["\n  color: var(--light-alpha);\n  font-weight: 700;\n  font-size: 1.8rem;\n  line-height: 2.6rem;\n  letter-spacing: -0.025rem;\n  order: 2;\n"]))),b=r(184),g=function(){var e=(0,l.TH)().pathname;return(0,b.jsxs)(v,{children:[(0,b.jsxs)(p,{children:[(0,b.jsx)(x,{children:"Roadmap"}),(0,b.jsx)(u.F,{})]}),(0,b.jsxs)(s.U,{variant:"primary",to:"/create",state:{from:e},children:[(0,b.jsx)(d.b9W,{}),"Add Feedback"]})]})},Z=r(9439),j=r(763),y=r.n(j),k=r(9510),w=r(2120);function P(e,n){var r;return(null==(r=function(e){var n=(0,w.k)(e);return n?n.getComputedStyle(e,null):null}(e))?void 0:r.getPropertyValue(n))||null}var R=r(7262),C=r(7689),I=r(786),E=r(9433),T=r(1266),D=r(5429),z=r(9473),M=r(2672);var S=r(7380),A=r(4623);function B(){return B=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},B.apply(this,arguments)}function F(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}var O,q,H=["as","children","defaultIndex","orientation","index","keyboardActivation","onChange","readOnly"],K=["children","as","onKeyDown"],_=["isSelected","children","as","index","disabled","onBlur","onFocus"],U=["children","as"],G=["children","aria-label","as","index"],L=(0,k.nm)("TabsDescendantsContext"),N=(0,k.nm)("TabPanelDescendantsContext"),V=(0,I.o)("TabsContext",{});!function(e){e.Auto="auto",e.Manual="manual"}(O||(O={})),function(e){e.Horizontal="horizontal",e.Vertical="vertical"}(q||(q={}));var W=(0,c.forwardRef)((function(e,n){var r,t=e.as,a=void 0===t?"div":t,o=e.children,i=e.defaultIndex,l=e.orientation,d=void 0===l?q.Horizontal:l,s=e.index,u=void 0===s?void 0:s,f=e.keyboardActivation,m=void 0===f?O.Auto:f,h=e.onChange,v=e.readOnly,p=void 0!==v&&v,x=F(e,H),b=(0,c.useRef)(null!=u);(0,z.cO)(u,"index","Tabs");var g=(0,A.M)(x.id),Z=null!=(r=x.id)?r:(0,T.q)("tabs",g),j=(0,c.useRef)(!1),y=(0,c.useRef)(null),w=(0,c.useRef)(!1),P=function(e,n){var r=(0,c.useRef)(null!=e),t=(0,c.useState)(n),a=t[0],o=t[1],i=(0,c.useCallback)((function(e){r.current||o(e)}),[]);return[r.current?e:a,i]}(u,null!=i?i:0),R=P[0],C=P[1],I=(0,c.useState)(-1),M=I[0],S=I[1],K=(0,k.f5)(),_=K[0],U=K[1],G=(0,c.useMemo)((function(){return{focusedIndex:M,id:Z,isControlled:b.current,isRTL:w,keyboardActivation:m,onFocusPanel:function(){y.current&&(0,E.mf)(y.current.focus)&&y.current.focus()},onSelectTab:p?D.Z:function(e){j.current=!0,h&&h(e),C(e)},onSelectTabWithKeyboard:p?D.Z:function(e){var n;switch(j.current=!0,m){case O.Manual:var r=null==(n=_[e])?void 0:n.element;return void(r&&(0,E.mf)(r.focus)&&r.focus());case O.Auto:default:return h&&h(e),void C(e)}},orientation:d,selectedIndex:R,selectedPanelRef:y,setFocusedIndex:S,setSelectedIndex:C,userInteractedRef:j}}),[M,Z,m,h,d,p,R,C,_]);return(0,z.kG)("tabs"),(0,c.createElement)(k.w_,{context:L,items:_,set:U},(0,c.createElement)(V.Provider,{value:G},(0,c.createElement)(a,B({},x,{ref:n,"data-reach-tabs":"","data-orientation":d,id:x.id}),(0,E.mf)(o)?o({focusedIndex:M,id:Z,selectedIndex:R}):o)))}));var Y=(0,c.forwardRef)((function(e,n){var r=e.children,t=e.as,a=void 0===t?"div":t,o=e.onKeyDown,i=F(e,K),l=(0,c.useContext)(V),d=l.focusedIndex,s=l.isControlled,u=l.isRTL,f=l.keyboardActivation,m=l.onSelectTabWithKeyboard,h=l.orientation,v=l.selectedIndex,p=l.setSelectedIndex,x=(0,k.Ak)(L),b=(0,c.useRef)(null),g=(0,M.e)(n,b);(0,c.useEffect)((function(){b.current&&(b.current.ownerDocument&&"rtl"===b.current.ownerDocument.dir||"rtl"===P(b.current,"direction"))&&(u.current=!0)}),[u]);var Z=(0,S.M)(o,(0,k.Dv)(L,{currentIndex:f===O.Manual?d:v,orientation:h,rotate:!0,callback:m,filter:function(e){return!e.disabled},rtl:u.current}));return(0,C.L)((function(){var e,n;if(!s&&("true"===(n=null==(e=x[v])?void 0:e.disabled)||(0,E.jn)(n)&&n)){var r=x.find((function(e){return!e.disabled}));r&&p(r.index)}}),[x,s,v,p]),(0,c.createElement)(a,B({role:"tablist","aria-orientation":h},i,{"data-reach-tab-list":"",ref:g,onKeyDown:Z}),c.Children.map(r,(function(e,n){return function(e,n){for(var r=arguments.length,t=new Array(r>2?r-2:0),a=2;a<r;a++)t[a-2]=arguments[a];return(0,c.isValidElement)(e)?c.cloneElement.apply(void 0,[e,n].concat(t)):e}(e,{isSelected:n===v})})))}));var $=(0,c.memo)(Y);var J=(0,c.forwardRef)((function(e,n){e.isSelected;var r=e.children,t=e.as,a=void 0===t?"button":t,o=e.index,i=e.disabled,l=e.onBlur,d=e.onFocus,s=F(e,_),u=(0,c.useContext)(V),f=u.id,m=u.onSelectTab,h=u.orientation,v=u.selectedIndex,p=u.userInteractedRef,x=u.setFocusedIndex,b=(0,c.useRef)(null),g=(0,R.B)(b,null),Z=g[0],j=g[1],y=(0,M.e)(n,j),w=(0,c.useMemo)((function(){return{element:Z,disabled:!!i}}),[i,Z]),P=(0,k.Yf)(w,L,o),C="button"===a&&null==s.type?"button":s.type,I=P===v;return function(e,n){var r=(0,c.useRef)(!1);(0,c.useEffect)((function(){r.current?e():r.current=!0}),n)}((function(){I&&b.current&&p.current&&(p.current=!1,(0,E.mf)(b.current.focus)&&b.current.focus())}),[I,p]),(0,c.createElement)(a,B({"aria-controls":(0,T.q)(f,"panel",P),"aria-disabled":i,"aria-selected":I,role:"tab",tabIndex:I?0:-1},s,{ref:y,"data-reach-tab":"","data-orientation":h,"data-selected":I?"":void 0,disabled:i,id:(0,T.q)(f,"tab",P),onClick:function(){m(P)},onFocus:(0,S.M)(d,(function(){x(P)})),onBlur:(0,S.M)(l,(function(){x(-1)})),type:C}),r)}));var Q=(0,c.forwardRef)((function(e,n){var r=e.children,t=e.as,a=void 0===t?"div":t,o=F(e,U),i=(0,c.useRef)(),l=(0,M.e)(i,n),d=(0,k.f5)(),s=d[0],u=d[1];return(0,c.createElement)(k.w_,{context:N,items:s,set:u},(0,c.createElement)(a,B({},o,{ref:l,"data-reach-tab-panels":""}),r))}));var X=(0,c.memo)(Q);var ee=(0,c.forwardRef)((function(e,n){var r=e.children;e["aria-label"];var t=e.as,a=void 0===t?"div":t,o=e.index,i=F(e,G),l=(0,c.useContext)(V),d=l.selectedPanelRef,s=l.selectedIndex,u=l.id,f=(0,c.useRef)(null),m=(0,R.B)(f,null),h=m[0],v=m[1],p=(0,c.useMemo)((function(){return{element:h}}),[h]),x=(0,k.Yf)(p,N,o),b=(0,T.q)(u,"panel",x),g=x===s,Z=(0,c.useRef)(!1),j=!!Z.current&&!g;(0,c.useEffect)((function(){Z.current=!0}),[]);var y=(0,M.e)(n,v,g?d:null);return(0,c.createElement)(a,B({"aria-labelledby":(0,T.q)(u,"tab",x),hidden:j,role:"tabpanel",tabIndex:g?0:-1},i,{ref:y,"data-reach-tab-panel":"",id:b}),r)}));var ne,re,te,ae,oe,ie,ce,le,de,se,ue,fe,me,he,ve,pe,xe,be=r(5373),ge=r(6355),Ze=function(e){e.color;return(0,b.jsx)("div",{})},je=r(3504),ye=(0,m.ZP)(je.rU)(ne||(ne=(0,f.Z)(["\n  cursor: pointer;\n  text-decoration: none;\n"]))),ke=m.ZP.div(re||(re=(0,f.Z)(["\n  background: var(--light-alpha);\n  border-radius: 1rem;\n  padding: 2.4rem;\n  gap: 1.6rem;\n  grid-template-rows: 1fr;\n  align-items: center;\n  cursor: pointer;\n  text-decoration: none;\n  border-top: ",";\n\n  &:hover {\n    h2 {\n      color: var(--primary-bravo);\n    }\n  }\n"])),(function(e){var n=e.colorBorder;return".8rem solid ".concat(n)})),we=m.ZP.header(te||(te=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  text-align: left;\n"]))),Pe=m.ZP.h2(ae||(ae=(0,f.Z)(["\n  font-weight: bold;\n  font-size: 1.3rem;\n  line-height: 1.9rem;\n  letter-spacing: -0.0180556rem;\n  color: var(--dark-bravo);\n"]))),Re=m.ZP.p(oe||(oe=(0,f.Z)(["\n  font-size: 1.3rem;\n  line-height: 1.9rem;\n  color: var(--dark-charlie);\n"]))),Ce=m.ZP.span(ie||(ie=(0,f.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-width: 11.1rem;\n  height: 3rem;\n  background: var(--light-bravo);\n  border-radius: 1rem;\n  padding: 1.6rem;\n  color: var(--primary-bravo);\n  font-weight: 600;\n  font-size: 1.3rem;\n  line-height: 1.9rem;\n"]))),Ie=m.ZP.button(ce||(ce=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  font-weight: bold;\n  font-size: 1.3rem;\n  line-height: 1.9rem;\n  letter-spacing: -0.0180556rem;\n  width: 6.9rem;\n  height: 3.2rem;\n  background: var(--light-bravo);\n  border-radius: 10px;\n  cursor: pointer;\n  color: var(--dark-bravo);\n  &:hover {\n    background: #cfd7ff;\n  }\n"]))),Ee=m.ZP.div(le||(le=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-weight: bold;\n  font-size: 1.3rem;\n  line-height: 1.9rem;\n  letter-spacing: -0.0180556rem;\n  grid-row: 2/3;\n  grid-column: 3/4;\n  color: var(--dark-bravo);\n"]))),Te=m.ZP.footer(de||(de=(0,f.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 1.6rem;\n"]))),De=function(e){var n=e.data,r=e.colorBorder,t=n.title,a=n.category,o=n.upvotes,i=n.description,c=n.comments,l=c?c.length:"0";return(0,b.jsx)(ye,{to:"/feedback/".concat(n.id),children:(0,b.jsxs)(ke,{colorBorder:r,children:[(0,b.jsx)(Ze,{color:r}),(0,b.jsxs)(we,{children:[(0,b.jsx)(Pe,{children:t}),(0,b.jsx)(Re,{children:i}),(0,b.jsx)(Ce,{children:y().capitalize(a)})]}),(0,b.jsxs)(Te,{children:[(0,b.jsxs)(Ie,{onClick:function(e){e.preventDefault(),e.stopPropagation()},children:[(0,b.jsx)(ge.s$2,{color:"var(--primary-bravo)"}),o]}),(0,b.jsxs)(Ee,{children:[(0,b.jsx)(ge.DCG,{color:"#CDD2EE"}),l]})]})]})})},ze=m.ZP.div(se||(se=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 2.4rem;\n"]))),Me=m.ZP.h2(ue||(ue=(0,f.Z)(["\n  font-size: 1.4rem;\n  line-height: 2rem;\n  letter-spacing: -0.0194444rem;\n  color: var(--dark-bravo);\n"]))),Se=m.ZP.p(fe||(fe=(0,f.Z)(["\n  font-size: 1.4rem;\n  line-height: 2rem;\n  color: var(--dark-charlie);\n"]))),Ae=m.ZP.div(me||(me=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 2rem;\n  gap: 1.6rem;\n"]))),Be=function(e){var n=e.data,r=n.panelName,t=n.requests,a=n.color,o=n.title,i="".concat(r," (").concat(t.length,")");return console.log(r,n),(0,b.jsxs)(ze,{children:[(0,b.jsx)(Me,{children:i}),(0,b.jsx)(Se,{children:o}),(0,b.jsx)(Ae,{children:t.map((function(e){return(0,b.jsx)(De,{data:e,colorBorder:a},e.id)}))})]})},Fe=function(){var e=(0,be.g0)(),n=(0,Z.Z)(e,1)[0],r=n.roadMapData,t=n.keys;return(0,b.jsxs)(W,{children:[(0,b.jsx)($,{children:t.map((function(e){return(0,b.jsxs)(J,{className:"tab-".concat(e),children:[y().startCase(e)," (".concat(r[e].requests.length,")")]},e)}))}),(0,b.jsx)(X,{children:t.map((function(e){return(0,b.jsx)(ee,{children:(0,b.jsx)(Be,{data:r[e]})},e)}))})]})},Oe=m.ZP.div(he||(he=(0,f.Z)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n"]))),qe=function(){var e=(0,be.g0)(),n=(0,Z.Z)(e,1)[0],r=n.roadMapData,t=n.keys;return(0,b.jsx)(Oe,{children:t.map((function(e){return(0,b.jsx)(Be,{data:r[e]},e)}))})},He=m.ZP.div(ve||(ve=(0,f.Z)(["\n  ","\n  ","\n"])),h.ZP.greaterThan("small")(pe||(pe=(0,f.Z)(["\n    width: 68.9rem;\n    margin: 2.8em auto 0 auto;\n  "]))),h.ZP.greaterThan("large")(xe||(xe=(0,f.Z)(["\n    width: 111rem;\n"])))),Ke=function(){var e=(0,be.Fy)();return(0,b.jsxs)(He,{children:[(0,b.jsx)(g,{}),"mobile"===e?(0,b.jsx)(Fe,{}):(0,b.jsx)(qe,{})]})}}}]);
//# sourceMappingURL=216.8f2fbe51.chunk.js.map