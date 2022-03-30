"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[592],{7838:(h,u,t)=>{t.d(u,{sk:()=>e,wq:()=>n,u5:()=>l,Ui:()=>s});const e={_id:null,userId:null,businessId:null,active:!0,name:null,icon:null,parentId:null,slug:null},n={_id:null,userId:null,active:!0,businessId:null,name:null,contactPersons:[],email:null,phone:null,address:null,city:null,state:null,obs:null,destinations:[]},l={_id:null,userId:null,businessId:null,active:!0,imagesUrl:[null],code:null,name:null,description:null,categoryId:null,onSale:0,stock:0,unit:null,guaranty:null,price:0,cost:0,tax:0,discount:0,currency:null,weight:null,volume:null,dimensions:null},s={_id:null,businessId:null,userId:null,active:null,title:null,subtitle:null,imageUrl:null,productId:null}},1256:(h,u,t)=>{t.d(u,{V:()=>d});var e=t(5e3),n=t(4768),l=t(5094);let d=(()=>{class s{constructor(r,P){this._clientsService=r,this.store=P,this.businessId=null}resolve(r,P){return this._clientsService.getClients()}}return s.\u0275fac=function(r){return new(r||s)(e.LFG(n.a),e.LFG(l.yh))},s.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},4546:(h,u,t)=>{t.d(u,{GZ:()=>d});var e=t(5094);const n=s=>s.clients,d=((0,e.P1)(n,s=>s.client),(0,e.P1)(n,s=>s.clients))},4768:(h,u,t)=>{t.d(u,{a:()=>a});var e=t(591),n=t(2994),l=t(2340),d=t(205),s=t(5e3),_=t(520),r=t(5094);const P=l.N.API_URL;let a=(()=>{class c{constructor(E,C){this._httpClient=E,this.store=C,this._clients=new e.X([]),this._pagination=new e.X(null)}get clients$(){return this._clients.asObservable()}get pagination$(){return this._pagination.asObservable()}getClients(){return this._httpClient.get(`${P}/clients/`).pipe((0,n.b)(E=>{this._clients.next(E.clients),this.store.dispatch((0,d.h_)({clients:E.clients}))}))}}return c.\u0275fac=function(E){return new(E||c)(s.LFG(_.eN),s.LFG(r.yh))},c.\u0275prov=s.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},7934:(h,u,t)=>{t.d(u,{L:()=>_});var e=t(2198),n=t(6203),l=t(5e3),d=t(9672),s=t(5094);let _=(()=>{class r{constructor(a,c){this._ordersService=a,this.store=c,this.businessId=null,this.store.select(n.pR).pipe((0,e.h)(O=>null!==O)).subscribe(O=>this.businessId=O._id)}resolve(a,c){return this._ordersService.getOrdersByBusiness(this.businessId)}}return r.\u0275fac=function(a){return new(a||r)(l.LFG(d.N),l.LFG(s.yh))},r.\u0275prov=l.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},7348:(h,u,t)=>{t.d(u,{ny:()=>d,xY:()=>s});var e=t(5094);const n=_=>_.orders,d=((0,e.P1)(n,_=>_.order),(0,e.P1)(n,_=>_.orders)),s=(0,e.P1)(n,_=>_.ordersByWeekdayStats)},9672:(h,u,t)=>{t.d(u,{N:()=>C});var e=t(591),n=t(2994),l=t(373),d=t(2986),s=t(7545),_=t(4850),r=t(6781),P=t(2340),a=t(5e3),c=t(520),O=t(5094);const E=P.N.API_URL;let C=(()=>{class D{constructor(o,i){this._httpClient=o,this.store=i,this._pagination=new e.X(null),this._order=new e.X(null),this._orders=new e.X([])}get pagination$(){return this._pagination.asObservable()}get order$(){return this._order.asObservable()}get orders$(){return this._orders.asObservable()}getOrders(o=0,i=10,v="orderNo",M="asc",I=""){return this._httpClient.get(`${E}/orders/`,{params:{page:""+o,size:""+i,sort:v,order:M}}).pipe((0,n.b)(p=>(this._pagination.next(p.pagination),this._orders.next(p.orders),this.store.dispatch((0,r.qQ)({orders:p.orders})),p)))}getOrdersByBusiness(o){if(null!==o)return this._httpClient.get(`${E}/orders/business/${o}`).pipe((0,n.b)(i=>{this._orders.next(i.orders),this.store.dispatch((0,r.qQ)({orders:i.orders}))}))}getOrderById(o){if(null!==o)return this._httpClient.get(`${E}/orders/${o}`).pipe((0,l.j)("order"),(0,n.b)(i=>{this.store.dispatch((0,r.OL)({order:i}))}))}updateOrder(o){return this.orders$.pipe((0,d.q)(1),(0,s.w)(i=>this._httpClient.put(`${E}/orders/${o._id}`,o).pipe((0,_.U)(v=>{const M=i.findIndex(I=>I._id===o._id);return i[M]=v.order,this._orders.next(i),this.store.dispatch((0,r.qQ)({orders:i})),v}))))}updateOrderStatus(o){return this.orders$.pipe((0,d.q)(1),(0,s.w)(i=>this._httpClient.put(`${E}/orders/update-state`,o).pipe((0,_.U)(v=>{const M=i.findIndex(I=>I._id===o.orderId);return i[M]=v.updatedOrder,this._orders.next(i),this.store.dispatch((0,r.qQ)({orders:i})),v}))))}}return D.\u0275fac=function(o){return new(o||D)(a.LFG(c.eN),a.LFG(O.yh))},D.\u0275prov=a.Yz7({token:D,factory:D.\u0275fac,providedIn:"root"}),D})()},8441:(h,u,t)=>{t.d(u,{S:()=>_});var e=t(2198),n=t(6203),l=t(5e3),d=t(771),s=t(5094);let _=(()=>{class r{constructor(a,c){this._productsService=a,this.store=c,this.businessId=null,this.store.select(n.pR).pipe((0,e.h)(O=>null!==O)).subscribe(O=>this.businessId=O._id)}resolve(a,c){return this._productsService.getProductsByBusiness(this.businessId)}}return r.\u0275fac=function(a){return new(a||r)(l.LFG(d.s),l.LFG(s.yh))},r.\u0275prov=l.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},4151:(h,u,t)=>{t.d(u,{nR:()=>d});var e=t(5094);const n=s=>s.products,d=((0,e.P1)(n,s=>s.product),(0,e.P1)(n,s=>s.products))}}]);