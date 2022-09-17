import { LightningElement, track, wire} from 'lwc';
import records from '@salesforce/apex/allContacts.records';
import accrecords from '@salesforce/apex/allAccounts.accRecords';

export default class RepresentAllcontacts extends LightningElement {
@track listofcontacts;
@track sized;
@track usingwire;

contacts(){
  records().then(result=>{
    this.listofcontacts=result;
   // console.log(result);    
  }).catch(error=>{
      console.log('error occoured'+error);
      
    })
  };
  @wire (accrecords) returnAccount(data,error){
    if(data){
      this.usingwire=data;
      console.log(data);
      
    } else if(error){
      console.log('this is the error'+error);
      
    }
  }


}
