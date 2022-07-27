"use strict";(self.webpackChunkfeedback_app=self.webpackChunkfeedback_app||[]).push([[55],{8516:function(e,t,n){n.d(t,{z:function(){return v},U:function(){return d}});var a,r,o=n(1413),i=n(4925),s=(n(2791),n(168)),u=n(6031),l=n(3504),c={primary:{normal:"var(--primary-alpha)",hover:"#C75AF6"},secondary:{normal:"var(--primary-bravo)",hover:"#7C91F9"},tertiary:{normal:"var(--dark-bravo)",hover:"#656EA3"},danger:{normal:"var(--danger-alpha)",hover:"var(--danger-bravo)"},back:{normal:"",hover:""},solidback:{normal:"var(--dark-alpha)",hover:""}},m=u.ZP.button(a||(a=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 100%;\n  height: ",";\n  border-radius: 1rem;\n  font-weight: 700;\n  font-size: 1.4rem;\n  line-height: 2rem;\n  cursor: pointer;\n  color: ",";\n  background-color: ",";\n  &:hover {\n    background-color: ",";\n    text-decoration: ",";\n  }\n  svg {\n    margin-right: 1rem;\n  }\n"])),(function(e){return"solidback"===e.variant?"5.3rem":"4.4rem"}),(function(e){return"back"!==e.variant?"var(--light-bravo)":"var(--dark-charlie)"}),(function(e){var t=e.variant;return"back"!==t?c[t].normal:""}),(function(e){var t=e.variant;return t.includes("back")?"":c[t].hover}),(function(e){return e.variant.includes("back")?"underline":"none"})),d=(0,u.ZP)(l.rU)(r||(r=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 15.8rem;\n  height: ",";\n  border-radius: 1rem;\n  font-weight: 700;\n  font-size: 1.4rem;\n  line-height: 2rem;\n  cursor: pointer;\n  color: ",";\n  background-color: ",";\n  &:hover {\n    background-color: ",";\n    text-decoration: ",";\n  }\n  svg {\n    margin-right: 1rem;\n  }\n  text-decoration: none;\n  cursor: pointer;\n"])),(function(e){return"solidback"===e.variant?"5.3rem":"4.4rem"}),(function(e){return"back"!==e.variant?"var(--light-bravo)":"var(--dark-charlie)"}),(function(e){var t=e.variant;return"back"!==t?c[t].normal:""}),(function(e){var t=e.variant;return t.includes("back")?"":c[t].hover}),(function(e){return e.variant.includes("back")?"underline":"none"})),g=n(6355),h=n(184),p=["variant","children","onClick"],v=function(e){var t=e.variant,n=e.children,a=e.onClick,r=(0,i.Z)(e,p),s=function(e){return"solidback"===e?"#f2f4ff":"#647196"}(t);return(0,h.jsxs)(m,(0,o.Z)((0,o.Z)({variant:t,onClick:a},r),{},{children:[t.includes("back")&&(0,h.jsx)(g._HU,{color:s}),n]}))}},8996:function(e,t,n){n.d(t,{OI:function(){return a},R0:function(){return o},GH:function(){return i},hm:function(){return r}});var a=[{label:"Feature",value:"feature"},{label:"UI",value:"ui"},{label:"UX",value:"ux"},{label:"Enhancement",value:"enhancement"},{label:"Bug",value:"bug"}],r=[{label:"Suggestion",value:"suggestion"},{label:"Planned",value:"planned"},{label:"In-Progress",value:"in-progress"},{label:"Live",value:"live"}],o={emptyText:"Cannot be empty",characterCount:function(e){return"Must be less than ".concat(e," characters")}},i={"in-progress":"var(--primary-alpha)",planned:"var(--primary-charlie)",live:"var(--primary-delta)"}},5373:function(e,t,n){n.d(t,{Fy:function(){return i},Ql:function(){return w},b4:function(){return b},g0:function(){return d},kM:function(){return f}});var a=n(9439),r=n(2791),o=n(8359);function i(){var e=r.useState("mobile"),t=(0,a.Z)(e,2),n=t[0],i=t[1],s=function(e){return!e||e<=450?"mobile":e<=768?"tablet":"desktop"}((0,o.i)().outerWidth);return r.useEffect((function(){return i(s),function(){}}),[s]),n}var s=n(763),u=n.n(s),l=n(8172),c=n(6559),m=n(8996);function d(){var e=(0,l.sJ)(c.e8);return[{roadMapData:e,keys:u().keys(e),roadMapNameColors:m.GH}]}var g=n(4942),h=n(1413),p=n(3433),v=n(5984);function f(e){var t=(0,l.FV)((0,c.GV)(e)),n=(0,a.Z)(t,2),o=n[0],i=n[1],s=(0,l.FV)(c.M),m=(0,a.Z)(s,2),d=m[0],f=m[1],y=o&&Boolean(null===o||void 0===o?void 0:o.comments)&&o.comments||[],w=(0,l.sJ)(c.lY),b=(0,l.sJ)(c.n9),k=(0,l.rb)(c.n9),I=Boolean(e&&(null===d||void 0===d?void 0:d[e])),j=r.useMemo((function(){return{incrementCount:function(){if(e&&o){var t=function(e){var t=(0,h.Z)({},e);return u().set(t,"upvotes",t.upvotes+1),t}(o);i(t),f((function(t){return(0,h.Z)((0,h.Z)({},t),{},(0,g.Z)({},e,!0))}))}},addNewComment:function(t){if(e&&o){var n,a=(n={user:w,content:t},(0,h.Z)({id:(0,v.x0)(),replies:[]},n)),r=function(e){var t=e.requestItem,n=e.newComment,a=(0,h.Z)({},t),r=u().get(a,"comments",[]),o=[].concat((0,p.Z)(r),[n]);return u().set(a,"comments",o),a}({requestItem:o,newComment:a});i(r)}},addNewReply:function(t){var n={content:t,replyingTo:b.username,user:w};if(e&&o){var a=function(e,t,n){var a=u().cloneDeep(e),r=u().get(a,"comments",[]).findIndex((function(e){return e.id===t.commentId})),o=u().get((0,h.Z)({},e),"comments[".concat(r,"].replies"),[]);return u().set(a,"comments[".concat(r,"].replies"),[].concat((0,p.Z)(o),[n])),a}(o,b,n);i(a),k()}}}}),[e,b,o,i,w]);return[{requestItem:o,comments:y,hasUpVoted:I},j]}var y=n(6871);function w(){return[{from:(0,y.TH)().state.from||"/"}]}function b(){var e=(0,l.Zl)(c.n9);return[r.useMemo((function(){return{setReplyingTo:function(t){return e(t)}}}),[e])]}},551:function(e,t,n){n.d(t,{AM:function(){return i},aY:function(){return s}});var a=n(1413),r=n(763),o=n.n(r);function i(e,t){return e.reduce((function(e,n){return e[n]=(0,a.Z)({panelName:o().startCase(n),requests:t[n]},function(e){switch(e){case"in-progress":return{color:"var(--primary-alpha)",title:"Currently being developed"};case"planned":return{color:"var(--primary-charlie)",title:"Ideas prioritized for research"};case"live":return{color:"var(--primary-delta)",title:"Released features"};default:return{color:"transparent",title:""}}}(n)),e}),{})}function s(e){return e?e.reduce((function(e,t){return e+1+(null!==t&&void 0!==t&&t.replies?t.replies.length:0)}),0):0}},6559:function(e,t,n){n.d(t,{eo:function(){return f},lY:function(){return h},M:function(){return j},S7:function(){return v},qO:function(){return y},n9:function(){return I},GV:function(){return b},KP:function(){return g},e8:function(){return p},MI:function(){return w},zZ:function(){return k}});var a=n(8172),r=n(763),o=n.n(r),i=JSON.parse('{"a":{"image":"https://res.cloudinary.com/dhg6csw2w/image/upload/v1645396620/user-images/image-zena.jpg","name":"Zena Kelley","username":"velvetround"},"w":[{"id":"1","title":"Add tags for solutions","category":"enhancement","upvotes":112,"status":"suggestion","description":"Easier to search for solutions based on a specific stack.","comments":[{"id":"1","content":"Awesome idea! Trying to find framework-specific projects within the hubs can be tedious","user":{"image":"https://res.cloudinary.com/dhg6csw2w/image/upload/v1645396620/user-images/image-suzanne.jpg","name":"Suzanne Chang","username":"upbeat1811"}},{"id":"2","content":"Please use fun, color-coded labels to easily identify them at a glance","user":{"image":"https://res.cloudinary.com/dhg6csw2w/image/upload/v1645396620/user-images/image-thomas.jpg","name":"Thomas Hood","username":"brawnybrave"}}]},{"id":"2","title":"Add a dark theme option","category":"feature","upvotes":99,"status":"suggestion","description":"It would help people with light sensitivities and who prefer dark mode.","comments":[{"id":"3","content":"Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device\u2019s dark mode turns on without the bright background it currently has.","user":{"image":"https://res.cloudinary.com/dhg6csw2w/image/upload/v1645396619/user-images/image-elijah.jpg","name":"Elijah Moss","username":"hexagon.bestagon"}},{"id":"4","content":"Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It\u2019s also quite a trend with modern apps and  apparently saves battery life.","user":{"image":"https://res.cloudinary.com/dhg6csw2w/image/upload/v1645396619/user-images/image-james.jpg","name":"James Skinner","username":"hummingbird1"},"replies":[{"content":"While waiting for dark mode, there are browser extensions that will also do the job. Search for \'dark theme\' followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though.","replyingTo":"hummingbird1","user":{"image":"https://res.cloudinary.com/dhg6csw2w/image/upload/v1645396619/user-images/image-anne.jpg","name":"Anne Valentine","username":"annev1990"}},{"content":"Good point! Using any kind of style extension is great and can be highly customizable, like the ability to change contrast and brightness. I\'d prefer not to use one of such extensions, however, for security and privacy reasons.","replyingTo":"annev1990","user":{"image":"https://res.cloudinary.com/dhg6csw2w/image/upload/v1645396620/user-images/image-ryan.jpg","name":"Ryan Welles","username":"voyager.344"}}]}]},{"id":"3","title":"Q&A within the challenge hubs","category":"feature","upvotes":65,"status":"suggestion","description":"Challenge-specific Q&A would make for easy reference.","comments":[{"id":"5","content":"Much easier to get answers from devs who can relate, since they\'ve either finished the challenge themselves or are in the middle of it.","user":{"image":"https://res.cloudinary.com/dhg6csw2w/image/upload/v1645396619/user-images/image-george.jpg","name":"George Partridge","username":"soccerviewer8"}}]},{"id":"4","title":"Add image/video upload to feedback","category":"enhancement","upvotes":51,"status":"suggestion","description":"Images and screencasts can enhance comments on solutions.","comments":[{"id":"6","content":"Right now, there is no ability to add images while giving feedback which isn\'t ideal because I have to use another app to show what I mean","user":{"image":"https://res.cloudinary.com/dhg6csw2w/image/upload/v1645396619/user-images/image-javier.jpg","name":"Javier Pollard","username":"warlikeduke"}},{"id":"7","content":"Yes I\'d like to see this as well. Sometimes I want to add a short video or gif to explain the site\'s behavior..","user":{"image":"https://res.cloudinary.com/dhg6csw2w/image/upload/v1645396620/user-images/image-roxanne.jpg","name":"Roxanne Travis","username":"peppersprime32"}}]},{"id":"5","title":"Ability to follow others","category":"feature","upvotes":42,"status":"suggestion","description":"Stay updated on comments and solutions other people post.","comments":[{"id":"8","content":"I also want to be notified when devs I follow submit projects on FEM. Is in-app notification also in the pipeline?","user":{"image":"https://res.cloudinary.com/dhg6csw2w/image/upload/v1645396620/user-images/image-victoria.jpg","name":"Victoria Mejia","username":"arlen_the_marlin"},"replies":[{"content":"Bumping this. It would be good to have a tab with a feed of people I follow so it\'s easy to see what challenges they\u2019ve done lately. I learn a lot by reading good developers\' code.","replyingTo":"arlen_the_marlin","user":{"image":"https://res.cloudinary.com/dhg6csw2w/image/upload/v1645396620/user-images/image-zena.jpg","name":"Zena Kelley","username":"velvetround"}}]},{"id":"9","content":"I\'ve been saving the profile URLs of a few people and I check what they\u2019ve been doing from time to time. Being able to follow them solves that","user":{"image":"https://res.cloudinary.com/dhg6csw2w/image/upload/v1645396619/user-images/image-jackson.jpg","name":"Jackson Barker","username":"countryspirit"}}]},{"id":"6","title":"Preview images not loading","category":"bug","upvotes":3,"status":"suggestion","description":"Challenge preview images are missing when you apply a filter."},{"id":"7","title":"More comprehensive reports","category":"feature","upvotes":123,"status":"planned","description":"It would be great to see a more detailed breakdown of solutions.","comments":[{"id":"10","content":"This would be awesome! It would be so helpful to see an overview of my code in a way that makes it easy to spot where things could be improved.","user":{"image":"https://res.cloudinary.com/dhg6csw2w/image/upload/v1645396620/user-images/image-victoria.jpg","name":"Victoria Mejia","username":"arlen_the_marlin"}},{"id":"11","content":"Yeah, this would be really good. I\'d love to see deeper insights into my code!","user":{"image":"https://res.cloudinary.com/dhg6csw2w/image/upload/v1645396619/user-images/image-jackson.jpg","name":"Jackson Barker","username":"countryspirit"}}]},{"id":"8","title":"Learning paths","category":"feature","upvotes":28,"status":"planned","description":"Sequenced projects for different goals to help people improve.","comments":[{"id":"12","content":"Having a path through the challenges that I could follow would be brilliant! Sometimes I\'m not sure which challenge would be the best next step to take. So this would help me navigate through them!","user":{"image":"https://res.cloudinary.com/dhg6csw2w/image/upload/v1645396619/user-images/image-george.jpg","name":"George Partridge","username":"soccerviewer8"}}]},{"id":"9","title":"One-click portfolio generation","category":"feature","upvotes":62,"status":"in-progress","description":"Add ability to create professional looking portfolio from profile.","comments":[{"id":"13","content":"I haven\'t built a portfolio site yet, so this would be really helpful. Might it also be possible to choose layout and colour themes?!","user":{"image":"https://res.cloudinary.com/dhg6csw2w/image/upload/v1645396620/user-images/image-ryan.jpg","name":"Ryan Welles","username":"voyager.344"}}]},{"id":"10","title":"Bookmark challenges","category":"feature","upvotes":31,"status":"in-progress","description":"Be able to bookmark challenges to take later on.","comments":[{"id":"14","content":"This would be great! At the moment, I\'m just starting challenges in order to save them. But this means the My Challenges section is overflowing with projects and is hard to manage. Being able to bookmark challenges would be really helpful.","user":{"image":"https://res.cloudinary.com/dhg6csw2w/image/upload/v1645396620/user-images/image-suzanne.jpg","name":"Suzanne Chang","username":"upbeat1811"}}]},{"id":"11","title":"Animated solution screenshots","category":"bug","upvotes":9,"status":"in-progress","description":"Screenshots of solutions with animations don\u2019t display correctly."},{"id":"12","title":"Add micro-interactions","category":"enhancement","upvotes":71,"status":"live","description":"Small animations at specific points can add delight.","comments":[{"id":"15","content":"I\'d love to see this! It always makes me so happy to see little details like these on websites.","user":{"image":"https://res.cloudinary.com/dhg6csw2w/image/upload/v1645396620/user-images/image-victoria.jpg","name":"Victoria Mejia","username":"arlen_the_marlin"},"replies":[{"content":"Me too! I\'d also love to see celebrations at specific points as well. It would help people take a moment to celebrate their achievements!","replyingTo":"arlen_the_marlin","user":{"image":"https://res.cloudinary.com/dhg6csw2w/image/upload/v1645396620/user-images/image-suzanne.jpg","name":"Suzanne Chang","username":"upbeat1811"}}]}]}]}'),s=n(1413),u=n(3433),l=n(551),c=["planned","in-progress","live"];var m=i.a,d=i.w,g=(0,a.cn)({key:"requestsAPI",default:d}),h=(0,a.cn)({key:"currentUser",default:m}),p=(0,a.nZ)({key:"roadMapSelector",get:function(e){return function(e){var t=e.filter((function(e){return c.includes(e.status)})),n=o().groupBy(t,"status"),a=o().keys(n);return(0,l.AM)(a,n)}((0,e.get)(g))}}),v=(0,a.nZ)({key:"filterSelector",get:function(e){return function(e){var t=e.map((function(e){return o().capitalize(e.category)}));return["All"].concat((0,u.Z)(o().uniq(t)))}((0,e.get)(g))}}),f=(0,a.cn)({key:"activeFilters",default:["all"]}),y=(0,a.nZ)({key:"filteredRequests",get:function(e){var t,n=e.get,a=n(g),r=n(f),i=n(w),c=i.value,m=i.orderBy,d="all"===r[0]?a:a.filter((function(e){return r.includes(e.category)})),h=(t=d,(0,u.Z)(t).map((function(e){var t=null!==e&&void 0!==e&&e.comments?(0,l.aY)(e.comments):0;return(0,s.Z)((0,s.Z)({},e),{},{commentCount:t})})));return o().orderBy(h,[c],[m])}}),w=(0,a.cn)({key:"sortBy",default:{label:"Most Upvotes",value:"upvotes",orderBy:"desc"}}),b=(0,a.xu)({key:"requestItem",default:(0,a.CG)({key:"requestItem/Default",get:function(e){return function(t){var n=t.get;return e?n(g).filter((function(t){return t.id===e}))[0]:null}}})}),k=(0,a.cn)({key:"toggleDrawerState",default:!1}),I=(0,a.cn)({key:"replyToState",default:{username:"",commentId:""}}),j=(0,a.cn)({key:"clickedUpvoteState",default:{}})}}]);
//# sourceMappingURL=55.4f889f31.chunk.js.map