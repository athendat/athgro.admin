"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[250],{5250:(T,c,o)=>{o.r(c),o.d(c,{AuthSignOutModule:()=>y});var s=o(9516),r=o(7423),l=o(3214),m=o(9886),d=o(8929),g=o(7739),h=o(537),f=o(4290),x=o(7625),v=o(2994),t=o(5e3),p=o(8951),a=o(9808);function A(n,e){if(1&n&&(t.ynx(0),t._uU(1),t.ALo(2,"i18nPlural"),t.BQk()),2&n){const i=t.oxw();t.xp6(1),t.hij(" Redireccionando en ",t.xi3(2,1,i.countdown,i.countdownMapping)," ")}}function Z(n,e){1&n&&(t.ynx(0),t._uU(1," Est\xe1 siendo redireccionado! "),t.BQk())}const S=function(){return["/sign-in"]},O=[{path:"",component:(()=>{class n{constructor(i,u){this._authService=i,this._router=u,this.countdown=5,this.countdownMapping={"=1":"# second",other:"# seconds"},this._unsubscribeAll=new d.xQ}ngOnInit(){this._authService.signOut(),(0,g.H)(1e3,1e3).pipe((0,h.x)(()=>{this._router.navigate(["sign-in"])}),(0,f.o)(()=>this.countdown>0),(0,x.R)(this._unsubscribeAll),(0,v.b)(()=>this.countdown--)).subscribe()}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(p.e),t.Y36(s.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["auth-sign-out"]],decls:15,vars:4,consts:[[1,"flex","flex-col","flex-auto","items-center","sm:justify-center","min-w-0"],[1,"w-full","sm:w-auto","py-8","px-4","sm:p-12","sm:rounded-2xl","sm:shadow","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12","mx-auto"],["src","assets/images/logo/logo.svg"],[1,"mt-8","text-4xl","font-extrabold","leading-tight","tracking-tight","text-center"],[1,"flex","justify-center","mt-0.5","font-medium"],[4,"ngIf"],[1,"mt-8","font-medium","text-center","text-md","text-secondary"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"]],template:function(i,u){1&i&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"div",5),t._uU(6,"Ha cerrado sesi\xf3n correctamente!"),t.qZA(),t.TgZ(7,"div",6),t.YNc(8,A,3,4,"ng-container",7),t.YNc(9,Z,2,0,"ng-container",7),t.qZA(),t.TgZ(10,"div",8),t.TgZ(11,"span"),t._uU(12,"Ir a"),t.qZA(),t.TgZ(13,"a",9),t._uU(14,"Iniciar Sesi\xf3n "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&i&&(t.xp6(8),t.Q6J("ngIf",u.countdown>0),t.xp6(1),t.Q6J("ngIf",0===u.countdown),t.xp6(4),t.Q6J("routerLink",t.DdM(3,S)))},directives:[a.O5,s.yS],pipes:[a.Gx],encapsulation:2}),n})()}];let y=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[s.Bz.forChild(O),r.ot,l.J,m.m]]}),n})()}}]);