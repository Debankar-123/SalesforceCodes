import { LightningElement } from 'lwc';

export default class ParentEvent extends LightningElement {
  Fname;
  Lname;
  handleEvent(event){
    this.Fname=event.details.first;
    this.Lname=event.details.last;
  }
}