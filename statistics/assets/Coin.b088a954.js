import{T as u,B as h}from"./Button.dd4405f7.js";import{a as d}from"./index.15c82977.js";import{o as p,c as _,b as i,a as t,w as f,i as v,t as l,F as x,r as c}from"./vendor.1423df4c.js";import{_ as k}from"./index.e8a4b4d0.js";const y={name:"Coin",components:{Title:u,Button:h},data(){return{p:"",num:1,head:0,tail:0}},mounted(){d.get("https://sheets.googleapis.com/v4/spreadsheets/1wK6sWFSGhrWdpMIFjhSGHoN9l1SSFzaL1ZmxuOb0A-Q/values/1?alt=json&key=AIzaSyBTMYnrj8_S08CTDiUhaEv5hmfGknQmkKc").then(e=>{this.p=e.data.values[6][0]})},methods:{check(){this.num>200&&(this.num=200)},calculate(){this.head=0,this.tail=0;for(let e=1;e<=this.num;e++)Math.random()<=this.p?this.head++:this.tail++}}},B={class:"flex justify-center items-center flex-col"},g={class:"w-[95%] h-[100%] max-w-[650px]"},C={class:"my-[5px] flex justify-center items-center"},S=t("span",null,"\u8ACB\u8F38\u5165\u786C\u5E63\u6578\u91CF\uFF1A",-1),T={class:"my-2"},w={class:"my-2"};function j(e,s,F,M,n,o){const m=c("Title"),r=c("Button");return p(),_(x,null,[i(m,{title:"\u64F2\u786C\u5E63"}),t("div",B,[t("div",g,[t("div",C,[S,f(t("input",{type:"number","onUpdate:modelValue":s[0]||(s[0]=a=>n.num=a),class:"w-16",min:"1",max:"200",onChange:s[1]||(s[1]=(...a)=>o.check&&o.check(...a)),oninput:"value=value.replace(/^(0+)|[^\\d]+/g,'')"},null,544),[[v,n.num]])]),i(r,{title:"\u958B\u59CB",class:"my-[5px]",onClick:o.calculate},null,8,["onClick"]),t("div",T,"\u6B63\u9762\u6B21\u6578\uFF1A"+l(n.head),1),t("div",w,"\u53CD\u9762\u6B21\u6578\uFF1A"+l(n.tail),1)])])],64)}var V=k(y,[["render",j]]);export{V as default};
