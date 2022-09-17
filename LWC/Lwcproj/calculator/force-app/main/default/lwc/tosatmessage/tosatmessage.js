import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class Tosatmessage extends LightningElement {
    showsuccesstoast(){
       const showmessage =new ShowToastEvent({
                    title : 'Success',
                    message :'operation is done successfully',
                    variant:'warning',
                    mode:"dismissable"
           });
           this.dispatchEvent(showmessage);
          }
                               

  }
