import{g as m,h as n,u as d,r as i,o as p,c as u,a as r,b as l,s as c}from"./app.37f37379.js";import{N as f}from"./vue3-date-time-picker.esm.0cec9195.js";import{_}from"./plugin-vue_export-helper.21dcd24c.js";import{j as b}from"./index.ad9339bc.js";const k=m({components:{Datepicker:f},setup(){const e=n(),o=d();return{submitForm:()=>{alert("Form submitted")},date:e,dark:o,ja:b}}}),v={class:"demo-wrap"},D=r("button",{class:"submit-btn",type:"submit"},"Submit form",-1);function j(e,o,s,F,V,N){const a=i("Datepicker");return p(),u("div",v,[r("form",{onSubmit:o[1]||(o[1]=c((...t)=>e.submitForm&&e.submitForm(...t),["prevent"]))},[l(a,{modelValue:e.date,"onUpdate:modelValue":o[0]||(o[0]=t=>e.date=t),dark:e.dark,placeholder:"Select Date",required:""},null,8,["modelValue","dark"]),D],32)])}var y=_(k,[["render",j]]);export{y as default};