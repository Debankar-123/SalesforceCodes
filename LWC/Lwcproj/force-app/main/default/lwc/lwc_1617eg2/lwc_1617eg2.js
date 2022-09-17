import { LightningElement } from 'lwc';

export default class Lwc_1617eg2 extends LightningElement {

  Employeename;
  Employeeage;
  Employeephone;
  constructor(){
    super();
    this.template.addEventListener('empevent',this.handleevent);
  }
  handleevent(event){
    alert('Event Heared');
    console.log(event.detail);
    
    this.Employeename=event.detail.empname;
    this.Employeeage=event.detail.empage;
    this.Employeephone=event.detail.empphone;
  }
}