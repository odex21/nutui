System.register(["./mobile-legacy.893d1dcd.js","./vendor-legacy.c830061d.js","./index-legacy.bba154b7.js"],(function(a){"use strict";var e,l,n,t,o,u,v,s,c;return{setters:[function(a){e=a.c},function(a){l=a.a,n=a.s,t=a.x,o=a.r,u=a.o,v=a.c,s=a.f,c=a.q},function(){}],execute:function(){const{createDemo:h}=e("input");var g=a("default",h({setup(){const a=l({val0:"",val1:"初始数据",val2:"禁止修改",val3:"readonly 只读",val4:"",val5:"",val6:"",val7:"",val8:"文案"});setTimeout((function(){a.val1="异步数据"}),2e3);return{state:a,change:a=>{console.log("change: ",a)},blur:a=>{console.log("blur:",a)},clear:a=>{console.log("clear:",a)},focus:a=>{console.log("focus:",a)}}}}));const r=c("data-v-e5c295b4");n("data-v-e5c295b4");const d={class:"demo-nopading"},p=s("h2",null,"基础用法",-1),i=s("h2",null,"禁用输入框",-1),C=s("h2",null,"限制输入长度",-1),b=s("h2",null,"自定义类型",-1),y=s("h2",null,"文本域",-1),f=s("h2",null,"显示字数统计",-1);t();const U=r(((a,e,l,n,t,c)=>{const h=o("nut-input");return u(),v("div",d,[p,s(h,{value:a.state.val1,"onUpdate:value":e[1]||(e[1]=e=>a.state.val1=e),onChange:a.change,onFocus:a.focus,onBlur:a.blur,label:"文本"},null,8,["value","onChange","onFocus","onBlur"]),s(h,{placeholder:"请输入文本",onChange:a.change,value:a.state.val0,"onUpdate:value":e[2]||(e[2]=e=>a.state.val0=e),requireShow:!0,label:"文本",onClear:a.clear},null,8,["onChange","value","onClear"]),i,s(h,{value:a.state.val2,"onUpdate:value":e[3]||(e[3]=e=>a.state.val2=e),onChange:a.change,disabled:!0,label:"文本"},null,8,["value","onChange"]),s(h,{value:a.state.val3,"onUpdate:value":e[4]||(e[4]=e=>a.state.val3=e),onChange:a.change,readonly:!0,label:"文本"},null,8,["value","onChange"]),C,s(h,{value:a.state.val4,"onUpdate:value":e[5]||(e[5]=e=>a.state.val4=e),onChange:a.change,maxLength:"7",label:"限制7："},null,8,["value","onChange"]),b,s(h,{value:a.state.val0,"onUpdate:value":e[6]||(e[6]=e=>a.state.val0=e),onChange:a.change,type:"password",label:"密码："},null,8,["value","onChange"]),s(h,{value:a.state.val5,"onUpdate:value":e[7]||(e[7]=e=>a.state.val5=e),onChange:a.change,type:"digit",label:"整数："},null,8,["value","onChange"]),s(h,{value:a.state.val6,"onUpdate:value":e[8]||(e[8]=e=>a.state.val6=e),onChange:a.change,type:"digit",placeholder:"支持小数点的输入",label:"数字："},null,8,["value","onChange"]),y,s(h,{value:a.state.val7,"onUpdate:value":e[9]||(e[9]=e=>a.state.val7=e),onChange:a.change,autosize:!0,type:"textarea",placeholder:"文本域",label:"留言："},null,8,["value","onChange"]),s(h,{value:a.state.val7,"onUpdate:value":e[10]||(e[10]=e=>a.state.val7=e),onChange:a.change,rows:"5",type:"textarea",placeholder:"设置输入五行",label:"留言："},null,8,["value","onChange"]),f,s(h,{value:a.state.val8,"onUpdate:value":e[11]||(e[11]=e=>a.state.val8=e),onChange:a.change,rows:"5",limitShow:!0,maxLength:"20",type:"textarea",placeholder:"设置输入五行",label:"留言："},null,8,["value","onChange"])])}));g.render=U,g.__scopeId="data-v-e5c295b4"}}}));