import { LightningElement } from 'lwc';

export default class Childevent extends LightningElement {
  btnHandler(event){
    var fname="Debankar";
    var lname="Roul";

    this.dispatchEvent(new CustomEvent('uploadevent',{detail:{first :fname,last:lname}}));
  }
}