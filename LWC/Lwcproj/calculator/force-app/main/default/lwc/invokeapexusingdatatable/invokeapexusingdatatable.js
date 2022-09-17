import { LightningElement,api, wire } from 'lwc';
import getdetails from '@salesforce/apex/getAccountDetailsInLwc.getdetails';
const cols=[
      {label:'ID',fieldName:'ID'},
      {label :'Account Name',fieldName:'Name'},
      {label:'Email',fieldName:'Email__c'},
      {label:'Phone',fieldName:'Phone'}
];

export default class Invokeapexusingdatatable extends LightningElement {
  @api getdetailsrec;
  @api columns=cols;
  @wire (getdetails)
  showdetailRecord({data,error}){
    if(data){
      this.getdetailsrec=data;
    }
    else if(error){
      console.log('this is the error'+ error);
      
    }
  }
}