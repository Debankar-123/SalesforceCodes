import { LightningElement } from 'lwc';

export default class CreateContactByApex extends LightningElement {
  get options() {
    return [
             { label: 'India', value: 'India' },
             { label: 'Usa', value: 'Usa' },
             { label: 'Canada', value: 'Canada' },
             { label: 'South africa', value: 'South africa' },
             { label: 'Bangladesh', value: 'Bangladesh' },
             
           ];
          }
          Fname="";
          Lname="";
          Emails="";
          phone="";
          value="";
          
        
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
          handleChange(event){
            this.value = event.detail.value;
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