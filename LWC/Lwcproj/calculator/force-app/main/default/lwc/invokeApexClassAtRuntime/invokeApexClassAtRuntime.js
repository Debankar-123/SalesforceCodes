import { LightningElement, api } from 'lwc';
import getContactDetails from '@salesforce/apex/getContactDetailsInLwc.getContactDetails';
export default class InvokeApexClassAtRuntime extends LightningElement {
  @api getdetails;
  @api listcontact;

  onchangeHandle(event){
    this.getdetails=event.target.value;
  }

  onclickHandle(){
    getContactDetails({startingName:this.getdetails}).then(result=>{
                                              this.listcontact=result;
                                            })
                                              .catch(error=>{
                                                console.log('This is the error message'+error);
                                                
                                              });

    
  }

}