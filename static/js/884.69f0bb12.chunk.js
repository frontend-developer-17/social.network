"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[884],{9884:function(A,e,g){g.r(e),g.d(e,{default:function(){return l}});var s=g(8687),a=g(7781),B=g(6249),u=g(871),r=g(1413),n=g(9439),d=g(2791),f=g(1087),t={messages:"Dialog_messages__ZMbML",NameMessageEl:"Dialog_NameMessageEl__8CQn7",nameEl:"Dialog_nameEl__Xi7U8",textarea:"Dialog_textarea__rq6qX",active:"Dialog_active__lbcXa",imageBlok:"Dialog_imageBlok__PVkB-",messageBlok:"Dialog_messageBlok__cGwhg",fileInput:"Dialog_fileInput__DLxF0",imageFile:"Dialog_imageFile__O7ujU",fileName:"Dialog_fileName__QfSDP",messageBlokPost:"Dialog_messageBlokPost__Zde2X"},i=g(1134),H=g(184),C=function(A){return(0,H.jsx)("div",{className:"",children:(0,H.jsx)("div",{children:A.message})})},v=function(A){return(0,H.jsx)("div",{className:"",children:(0,H.jsx)(f.OL,{className:function(A){return A.isActive?t.active:""},to:"/dialog/"+A.id,children:A.name})})},D=function(A){var e=(0,i.cI)({mode:"onBlur"}),g=e.register,s=e.handleSubmit,a=e.reset,B=A.dialogsMessages.map((function(A){return(0,H.jsx)(C,{message:A.message},A.id)})),f=A.dialogsName.map((function(A){return(0,H.jsx)(v,{name:A.name,id:A.id},A.id)})),D=(0,d.useState)(""),l=(0,n.Z)(D,2),w=l[0],c=l[1],Q=(0,d.useState)(),x=(0,n.Z)(Q,2),m=x[0],E=x[1],M=(0,d.useState)(),o=(0,n.Z)(M,2),I=o[0],b=o[1],P=(0,d.useReducer)(u.Z,{dialogsMessage:[{message:""}]}),j=(0,n.Z)(P,2),q=j[0],Y=j[1],h=new FileReader;return(0,H.jsx)("form",{onSubmit:s((function(A){Y({type:"UpdateNewMessageBody",text:A.post}),c(""),a(),h.readAsDataURL(m),h.onloadend=function(){b(h.result)}})),children:(0,H.jsxs)("div",{className:t.messages,children:[(0,H.jsx)("div",{className:""}),I?(0,H.jsx)("div",{children:(0,H.jsx)("img",{className:t.imageBlok,src:I||"",alt:""})}):"",q?q.dialogsMessage.map((function(A){return(0,H.jsx)("div",{children:A.message})})):"",(0,H.jsxs)("div",{className:t.NameMessageEl,children:[(0,H.jsxs)("div",{className:"",children:[f," "]}),(0,H.jsxs)("div",{className:t.messageBlokPost,children:[" ",B]})]}),(0,H.jsxs)("label",{for:"fileButton",className:t.fileLabel,children:[(0,H.jsx)("img",{className:t.imageFile,src:"data:image/png;base64,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",alt:""}),(0,H.jsx)("input",(0,r.Z)((0,r.Z)({},g("post")),{},{className:t.textarea,value:w,onChange:function(A){return c(A.target.value)}})),(0,H.jsx)("input",{type:"submit",value:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]}),(0,H.jsx)("input",{id:"fileButton",className:t.fileInput,type:"file",onChange:function(A){var e=A.target.files[0];E(e)},accept:".jpg, .jpeg,.png"}),(0,H.jsxs)("div",{className:t.fileName,children:[m?(0,H.jsxs)("h5",{children:["\u0424\u0430\u0439\u043b \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d: ",m.name]}):""," "]}),(0,H.jsx)("div",{className:""})]})})},l=(0,a.qC)(B.p,(0,s.$j)((function(A){return{dialogsMessages:A.messagePage.dialogsMessages,dialogsName:A.messagePage.dialogsName,arrayDialogMessage:A.messagePage.arrayDialogMessage}}),{}))(D)}}]);
//# sourceMappingURL=884.69f0bb12.chunk.js.map