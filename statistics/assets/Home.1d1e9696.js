import{T as i,B as r}from"./Button.1b851225.js";import{_ as s}from"./index.964072da.js";import{r as n,o as c,c as u,b as t,a as o,F as m}from"./vendor.1423df4c.js";const d={name:"Home",data(){return{}},components:{Title:i,Button:r},methods:{Random(){this.$router.push("Random")},Uniform(){this.$router.push("Uniform")},Normal(){this.$router.push("Normal")},NormalSimulation(){this.$router.push("NormalSimulation")},StandardNormal(){this.$router.push("StandardNormal")},Coin(){this.$router.push("Coin")},NegativeBinomial(){this.$router.push("NegativeBinomial")},NBSimulation(){this.$router.push("NBSimulation")}}},_={class:"w-full h-[calc(100%-90px)] flex justify-center items-center flex-col"},p={class:"flex flex-col md:flex-row"};function h(C,y,f,k,b,l){const a=n("Title"),e=n("Button");return c(),u(m,null,[t(a,{title:"Welcome"}),o("div",_,[o("div",p,[o("div",null,[t(e,{type:"button",class:"btn my-2",onClick:l.Random,title:"\u62BD\u53D6\u4E00\u500B\u96A8\u6A5F\u6578"},null,8,["onClick"]),t(e,{type:"button",class:"btn my-2",onClick:l.StandardNormal,title:"\u6A19\u6E96\u5E38\u614B"},null,8,["onClick"]),t(e,{type:"button",class:"btn my-2",onClick:l.Normal,title:"\u4E00\u822C\u5E38\u614B"},null,8,["onClick"]),t(e,{type:"button",class:"btn my-2",onClick:l.NormalSimulation,title:"\u4E00\u822C\u5E38\u614B\u6A21\u64EC"},null,8,["onClick"])]),o("div",null,[t(e,{type:"button",class:"btn my-2",onClick:l.Uniform,title:"\u5747\u52FB\u5206\u5E03"},null,8,["onClick"]),t(e,{type:"button",class:"btn my-2",onClick:l.Coin,title:"\u64F2\u786C\u5E63"},null,8,["onClick"]),t(e,{type:"button",class:"btn my-2",onClick:l.NegativeBinomial,title:"\u8CA0\u4E8C\u9805\u5206\u4F48"},null,8,["onClick"]),t(e,{type:"button",class:"btn my-2",onClick:l.NBSimulation,title:"\u8CA0\u4E8C\u9805\u5206\u4F48\u6A21\u64EC"},null,8,["onClick"])])])])],64)}var x=s(d,[["render",h],["__scopeId","data-v-c6de70ce"]]);export{x as default};
