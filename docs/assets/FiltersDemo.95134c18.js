import{g as l,b as d,c as p}from"./vue-datepicker.es.6cc7cc48.js";import{_ as i,f as m,I as c,C as u,j as f,r as _,o as k,c as D,b as v}from"./app.a2240ed3.js";const g=m({components:{Datepicker:l},setup(){const e=c(new Date),t=u();return{filters:f(()=>{const r=new Date;return{months:Array.from(Array(3).keys()).map(a=>d(p(r,a+1)))}}),date:e,dark:t}}}),y={class:"demo-wrap"};function b(e,t,o,r,a,h){const s=_("Datepicker");return k(),D("div",y,[v(s,{modelValue:e.date,"onUpdate:modelValue":t[0]||(t[0]=n=>e.date=n),dark:e.dark,placeholder:"Select Date",filters:e.filters},null,8,["modelValue","dark","filters"])])}var w=i(g,[["render",b],["__file","FiltersDemo.vue"]]);export{w as default};