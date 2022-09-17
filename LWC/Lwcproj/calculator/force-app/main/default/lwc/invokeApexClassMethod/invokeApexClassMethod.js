import { LightningElement,track, wire } from 'lwc';
import getdetails from '@salesforce/apex/getAccountDetailsInLwc.getdetails';

export default class InvokeApexClassMethod extends LightningElement {
  @track getaccDetails;

  //@wire (getdetails)  getaccDetails;
 /* @wire (getdetails) 
        showdetails({data,error}){
    if(data){
    this.getaccDetails=data;
    }
    else if(error){
          console.log('this is the error'+error);
    }
  
  }
  */
showDetailsofAccount(){
              getdetails().then(result=>{
                    this.getaccDetails=result;
  }).catch(error=>{
    console.log('this is the error'+error);
    
  })
}
}