import{f as t,_ as r,u as c,r as i,o as a,c as p,b as u}from"./app.37f37379.js";import{N as _}from"./vue3-date-time-picker.esm.0cec9195.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const l=t(()=>r(()=>import("./MonthYearCmp.3c4201f8.js"),["assets/MonthYearCmp.3c4201f8.js","assets/ChevronLeftIcon.c0029ce2.js","assets/app.37f37379.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/ChevronRightIcon.c27acfc7.js"])),k=t(()=>r(()=>import("./TimePickerCmp.47e32305.js"),["assets/TimePickerCmp.47e32305.js","assets/app.37f37379.js","assets/plugin-vue_export-helper.21dcd24c.js"])),C=t(()=>r(()=>import("./ActionRowCmp.77285b66.js"),["assets/ActionRowCmp.77285b66.js","assets/app.37f37379.js","assets/plugin-vue_export-helper.21dcd24c.js"])),f={components:{Datepicker:_},props:["useCustomMonthYear","useCustomTimePicker","useCustomActionRow"],data(){return{date:new Date,dark:!0}},mounted(){this.dark=c()},computed:{monthYearCmp(){return this.useCustomMonthYear?l:null},timePickerCmp(){return this.useCustomTimePicker?k:null},actionRowCmp(){return this.useCustomActionRow?C:null}}},h={class:"demo-wrap"};function w(P,n,v,D,e,o){const m=i("Datepicker");return a(),p("div",h,[u(m,{modelValue:e.date,"onUpdate:modelValue":n[0]||(n[0]=s=>e.date=s),dark:e.dark,"month-year-component":o.monthYearCmp,"time-picker-component":o.timePickerCmp,"action-row-component":o.actionRowCmp},null,8,["modelValue","dark","month-year-component","time-picker-component","action-row-component"])])}var T=d(f,[["render",w]]);export{T as default};