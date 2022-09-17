import { LightningElement,api} from 'lwc';

export default class Childcomp extends LightningElement {
  @api eventname='event child';
   handleevent(){
    const conevent= new CustomEvent('buttonclick',{
      detail :{
        firstname:'debankar',
        secondname:'Roul'
    }

    });
    this.dispatchEvent(conevent);
  }
}