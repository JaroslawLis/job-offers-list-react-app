(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(44)},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(21),i=a.n(r),o=(a(31),a(16)),c=a(6),s=a(7),m=a(9),u=a(8),d=a(10),h=a(13),f=a(5),v=(a(32),a(22)),p=a(12),E=(a(33),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).firmList=JSON.parse(localStorage.getItem("savedFirmList"))||[],a.handleChange=function(e){console.log(e.target.name),e.target.type,a.setState(Object(p.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t=Object(v.a)({},a.state);a.props.writeFirm(t),a.setState({firm:"",address:"",phone:"",email:"",www:"",jobAdvertisement:"",jobAdvertisementLink:"",queryDate:"",CVDate:"",notices:""})},a.state={firm:"",address:"",phone:"",email:"",www:"",jobAdvertisement:"",jobAdvertisementLink:"",queryDate:"",CVDate:"",notices:""},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{"data-aos":"flip-left"},l.a.createElement("form",{className:"add_firm",onSubmit:this.handleSubmit},l.a.createElement("label",null,"Podaj nazw\u0119 firmy"," ",l.a.createElement("input",{name:"firm",value:this.state.firm,onChange:this.handleChange,type:"text",placeholder:"Nazwa Firmy"}))," ",l.a.createElement("label",null,"Podaj adres"," ",l.a.createElement("input",{name:"address",value:this.state.address,onChange:this.handleChange,type:"text",placeholder:"Adres"}))," ",l.a.createElement("label",null,"Podaj telefon"," ",l.a.createElement("input",{name:"phone",value:this.state.phone,onChange:this.handleChange,type:"text",placeholder:"Telefon"}))," ",l.a.createElement("label",null,"Podaj e - mail"," ",l.a.createElement("input",{name:"email",value:this.state.email,onChange:this.handleChange,type:"text",placeholder:"email"}))," ",l.a.createElement("label",null,"Podaj stron\u0119 www"," ",l.a.createElement("input",{name:"www",value:this.state.www,onChange:this.handleChange,type:"text",placeholder:"Strona internetowa"}))," ",l.a.createElement("label",null,"Podaj tre\u015b\u0107 og\u0142oszenia"," ",l.a.createElement("textarea",{name:"jobAdvertisement",value:this.state.jobAdvertisement,onChange:this.handleChange})," ")," ",l.a.createElement("label",null,"Podaj link do og\u0142oszenia"," ",l.a.createElement("input",{name:"jobAdvertisementLink",value:this.state.jobAdvertisementLink,onChange:this.handleChange,type:"text",placeholder:"Strona internetowa"}))," ",l.a.createElement("label",null,"Data wys\u0142ania zapytania"," ",l.a.createElement("input",{name:"queryDate",value:this.state.queryDate,onChange:this.handleChange,type:"Date"}))," ",l.a.createElement("label",null,"Data wys\u0142ania CV"," ",l.a.createElement("input",{name:"CVDate",value:this.state.CVDate,onChange:this.handleChange,type:"Date"}))," ",l.a.createElement("label",null,"Uwagi"," ",l.a.createElement("textarea",{name:"notices",value:this.state.notices,onChange:this.handleChange})," ")," ",l.a.createElement("button",{type:"submit"}," Dodaj firm\u0119 ")," ")," ")}}]),t}(n.Component)),w=(a(34),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={text:e.text},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.data.map(function(t,a){return l.a.createElement("div",{className:"row","data-aos":"flip-left","data-aos-easing":"ease-out-cubic","data-aos-delay":"500","data-aos-once":"true","data-aos-offset":"0",key:a},l.a.createElement("div",null,t.firm),l.a.createElement("div",null,l.a.createElement("a",{href:t.www,target:"_blank"},t.www)),l.a.createElement("div",null,"e-mail"),l.a.createElement("div",null,t.queryDate),l.a.createElement("div",null,t.CVDate),l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){return e.props.handleRemoveButton(a)}},"Usu\u0144")),l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){return e.props.handleEditButton(a)}},"Edytuj")))});return l.a.createElement("div",{className:"mainTable","data-aos":"fade-up"},l.a.createElement("h2",null," Lista ofert ")," ",l.a.createElement("div",{className:"offerList"},l.a.createElement("div",{className:"row title"},l.a.createElement("div",null,"Nazwa Firmy"),l.a.createElement("div",null,"Strona WWW"),l.a.createElement("div",null,"E-mail"),l.a.createElement("div",null,"Zapytanie"),l.a.createElement("div",null,"CV")),t," "))}}]),t}(n.Component)),b=function(){return l.a.createElement("header",null,l.a.createElement("h1",null," Navigacja [cooming soon..]"),l.a.createElement(h.b,{to:"/add"},"Dodaj firm\u0119"))},g=a(25),j=a.n(g),y=(a(43),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={formActive:!1,firmList:JSON.parse(localStorage.getItem("savedFirmList"))||[]},a.handleButton=function(){a.setState({formActive:!a.state.formActive})},a.handleEditButton=function(e){console.log(e)},a.handleRemoveButton=function(e){console.log("it working",e,a.state.firmList);var t=a.state.firmList[e].firm;if(console.log(t),window.confirm("czy usun\u0105\u0107 firm\u0119 \n".concat(t))){var n=Object(o.a)(a.state.firmList);n.splice(e,1),localStorage.setItem("savedFirmList",JSON.stringify(n)),a.setState({firmList:n})}},a.writeFirm=function(e){var t=Object(o.a)(a.state.firmList);t.push(e),localStorage.setItem("savedFirmList",JSON.stringify(t)),a.setState({firmList:t})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){j.a.init({duration:1500})}},{key:"render",value:function(){var e=this;return l.a.createElement(h.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(b,null),l.a.createElement(f.a,{path:"/",exact:!0,render:function(){return l.a.createElement(w,{data:e.state.firmList,handleRemoveButton:e.handleRemoveButton,handleEditButton:e.handleEditButton})}}),l.a.createElement(f.a,{path:"/add",exact:!0,render:function(){return l.a.createElement(E,{writeFirm:e.writeFirm})}})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.f8ff646f.chunk.js.map