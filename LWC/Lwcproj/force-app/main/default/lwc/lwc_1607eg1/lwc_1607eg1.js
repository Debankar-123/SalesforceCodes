import { LightningElement } from 'lwc';

export default class Lwc_1607eg1 extends LightningElement { 

  ename;
  eage;
  ephone;
  handlename(event){
    this.ename=event.target.value;
  }
  handleage(event){
    this.eage=event.target.value;
  }
  handlephone(event){
    this.ephone=event.target.value;
  }
  handleevent(event){
   this.dispatchEvent(new CustomEvent('empevent',{detail:{empname:this.ename,empage:this.eage,empphone:this.ephone},bubbles:true,composed:true}));
  }

}