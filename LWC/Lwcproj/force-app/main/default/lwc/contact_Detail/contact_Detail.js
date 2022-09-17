import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
//import conObject from '@salesforce/schema/Contact';
//import conFirstName from '@salesforce/schema/Contact.FirstName';
//import conLastName from '@salesforce/schema/Contact.LastName';
//import conemail from '@salesforce/schema/Contact.Email';
//import conphone from '@salesforce/schema/Contact.Phone';
//import CON_NAME from '@salesforce/schema/Contact.Country__c';


export default class Contact_Detail extends LightningElement {
  Fname="";
  Lname="";
  Emails="";
  phone="";
  //value="";
  

  fname(event){
    this.Fname=event.target.value;
  }
  lname(event){
    this.Lname=event.target.value;
  }
  Email(event){
    this.Emails=event.target.value;
  }
  pho(event){
    this.phone=event.target.value;
  }
 
  subme(){
    var fields = {'FirstName' : this.Fname, 'LastName' : this.Lname, 'Email' : this.Emails, 'Phone':this.phone};

    var objRecordInput = {'apiName' : 'Contact', fields};

        createRecord(objRecordInput).then(response => {
         alert('Account created with Id: ' +response.id);
        }).catch(error => {
          console.log('Error is here');
          
        alert('Error: ' +JSON.stringify(error));
  });
  }
  
}