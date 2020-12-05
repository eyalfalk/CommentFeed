(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),i=a.n(r),s=a(20),o=a.n(s),l=a(3),p=a(4),m=a(7),c=a(6),d=a(5),h=a(8),u={app:{width:"40vw",margin:"100px",padding:"10px",fontFamily:"sans-serif"},formBox:{width:"450px",margin:"10px",padding:"20px",backgroundColor:"#EFEFEF"},emailInput:{width:"400px",margin:"10px",padding:"0 10px",height:"50px",borderStyle:"solid",borderColor:"#E5E5E5"},messageInput:{width:"400px",margin:"10px",padding:"0 10px",height:"100px",borderStyle:"solid",borderColor:"#E5E5E5"},submitInput:{width:"100px",margin:"10px",height:"40px",backgroundColor:"#66B2E7",color:"#fff",textTransform:"uppercase",borderRadius:"5px",borderWidth:"0px",borderColor:"#66B2E7"},feedBox:{width:"450px",margin:"10px",padding:"20px"},filterInput:{width:"400px",margin:"10px",padding:"0 10px",height:"50px",borderStyle:"solid",borderColor:"#E5E5E5"},commentList:{width:"400px",margin:"10px",padding:"10px",fontSize:".85rem"},comment:{width:"400px",margin:"10px",padding:"10px",fontSize:".85rem"},avatar:{width:"100px",margin:"10px",padding:"10px"},commentEmail:{width:"300px",margin:"10px",padding:"10px",font:"bold 20px sans-serif"},commentMessage:{width:"300px",margin:"10px",padding:"10px",font:"20px sans-serif"}},b=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={email:"",message:""},n.handleChange=n.handleChange.bind(Object(m.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(m.a)(n)),n}return Object(p.a)(a,[{key:"handleSubmit",value:function(e){var t=this.state,a=t.email,n=t.message;if(!a||!n)return alert("Please enter both an email AND a message"),void e.preventDefault();this.props.onCommentSubmit({email:a,message:n})}},{key:"handleChange",value:function(e){this.setState(Object(h.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return Object(n.jsxs)("form",{onSubmit:this.handleSubmit,style:u.formBox,children:[Object(n.jsx)("input",{type:"text",name:"email",placeholder:"Email",value:this.state.email,onChange:this.handleChange,style:u.emailInput}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"text",name:"message",placeholder:"Message",value:this.state.message,onChange:this.handleChange,style:u.messageInput}),Object(n.jsx)("input",{type:"submit",value:"Submit",style:u.submitInput})]})}}]),a}(r.Component),x=a(21),g=a.n(x),j=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props.email.trim().toLowerCase(),t="https://www.gravatar.com/avatar/"+g()(e);return Object(n.jsx)("img",{src:t,alt:"gravatar"})}}]),a}(r.Component),v=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{style:u.comment,children:[Object(n.jsx)(j,{email:this.props.email,style:u.avatar}),Object(n.jsx)("div",{style:u.commentEmail,children:this.props.email}),Object(n.jsx)("div",{style:u.commentMessage,children:this.props.message})]})}}]),a}(r.Component),f=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={filter:""},n.handleChange=n.handleChange.bind(Object(m.a)(n)),n}return Object(p.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(h.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this,t=this.props.data.map((function(t){return t.email.includes(e.state.filter)?Object(n.jsx)(v,{email:t.email,message:t.message},t._id):Object(n.jsx)("div",{})}));return Object(n.jsxs)("div",{style:u.feedBox,children:[Object(n.jsx)("form",{id:"search",children:Object(n.jsx)("input",{type:"text",name:"filter",placeholder:"Filter",value:this.state.filter,onChange:this.handleChange,style:u.filterInput})}),Object(n.jsx)("div",{style:u.commentList,children:t})]})}}]),a}(r.Component),O=a(10),y=a.n(O),C=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={data:[]},n.getCommentsFromServer=n.getCommentsFromServer.bind(Object(m.a)(n)),n.sendCommentsToServer=n.sendCommentsToServer.bind(Object(m.a)(n)),n.pollInterval=null,n}return Object(p.a)(a,[{key:"getCommentsFromServer",value:function(){var e=this;y.a.get(this.props.url).then((function(t){e.setState({data:t.data})}))}},{key:"sendCommentsToServer",value:function(e){var t=this,a=this.state.data;e._id=Date.now();var n=a.concat([e]);this.setState({data:n}),y.a.post(this.props.url,e).catch((function(e){console.error(e),t.setState({data:a})}))}},{key:"componentDidMount",value:function(){this.getCommentsFromServer(),this.pollInterval||(this.pollInterval=setInterval(this.getCommentsFromServer,this.props.pollInterval))}},{key:"componentWillUnmount",value:function(){this.pollInterval&&clearInterval(this.pollInterval),this.pollInterval=null}},{key:"render",value:function(){return Object(n.jsxs)("div",{style:u.app,children:[Object(n.jsx)(b,{onCommentSubmit:this.sendCommentsToServer}),Object(n.jsx)(f,{data:this.state.data})]})}}]),a}(r.Component);o.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(C,{url:"http://localhost:5000/api/comments",pollInterval:500})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.a24b0d88.chunk.js.map