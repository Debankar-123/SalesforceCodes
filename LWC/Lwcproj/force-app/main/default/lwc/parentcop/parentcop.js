import { LightningElement } from 'lwc';

export default class Parentcop extends LightningElement {

  handleevent(event){
    alert('event from child component');
    alert('first parameter'+event.detail.firstname);
    alert('second parameter'+event.detail.secondname);
  }
}