import{T as c,B as l}from"./Button.8ba13a07.js";import{_ as p}from"./index.96dd7664.js";import{o,c as e,b as n,t as d,g as i,F as _,a as u,r as a}from"./vendor.1423df4c.js";const x={name:"Random",components:{Title:c,Button:l},data(){return{random:""}},methods:{getRandom(){this.random=Math.random().toFixed(4)}}},f=u("p",null,"\u8ACB\u9EDE\u9078\u6309\u9215\u751F\u6210\u96A8\u6A5F\u6578",-1),B={key:0};function h(k,g,C,y,t,r){const s=a("Title"),m=a("Button");return o(),e(_,null,[n(s,{title:"\u62BD\u53D6\u4E00\u500B\u96A8\u6A5F\u6578"}),f,n(m,{type:"button",class:"px-[35px] text-[32px] my-[30px]",onClick:r.getRandom,title:"Click"},null,8,["onClick"]),t.random?(o(),e("p",B,"\u4F60\u7684\u96A8\u6A5F\u6578\u70BA\uFF1A"+d(t.random),1)):i("",!0)],64)}var N=p(x,[["render",h]]);export{N as default};
