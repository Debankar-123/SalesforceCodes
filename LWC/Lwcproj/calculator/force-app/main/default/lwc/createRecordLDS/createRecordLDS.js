import { LightningElement,track,wire } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import {ShowToastEvent} from '@salesforce/platformShowToastEvent';
import Account from '@salesforce/schema/Case.Account';

export default class CreateRecordLDS extends LightningElement {
  @track name;
  @track rating;
  @track phone;
  @track email;
  @track annualRevenue;
  @track Department;
  @track fax;
  
  onchangename(event){
    this.name=event.target.value;
  }
  onchangeDept(event){
    this.Department=event.target.value;
  }
  onchangeemail(event){
    this.email=event.target.value;
  }
  onchangefax(event){
    this.fax=event.target.value;
  }
  onchangephone(event){
    this.phone=event.target.value;
  }
  onchangerating(event){
    this.rating=event.target.value;
  }
  onchangerevenue(event){
    this.annualRevenue=event.target.value;
  }
  saverecord(){
    const Fields={
            "Name":this.name,
            "Rating":this.rating,
            "AnnualRevenue":this.annualRevenue,
            "department__c":this.Department,
            "Email__c":this.email,
            "Fax":this.fax,
            "Phone":this.phone,

    };
      const recordapi={apiname :Account,Fields};
  }
 
}