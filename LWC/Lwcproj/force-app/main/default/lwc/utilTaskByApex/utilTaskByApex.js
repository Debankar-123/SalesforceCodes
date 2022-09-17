import { LightningElement ,api} from 'lwc';
import createContact from '@salesforce/apex/UtilCreateContact.createCon';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class UtilTaskByApex extends LightningElement {
  get options() {
    return [
             { label: 'India', value: 'INDIA' },
             { label: 'Usa', value: 'USA' },
             { label: 'Canada', value: 'CANADA' },
             { label: 'UAE', value: 'UAE' },
             { label: 'BANGLADESH', value: 'BANGLADESH' },
             
           ];
          }
          @api Fname="";
          @api Lname="";
          @api Emails="";
          @api phone="";
          @api value="";
          
        
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
         
 subme(event){
  debugger;
  createContact(
              {fname:this.Fname,
              lname:this.Lname,
              email:this.Emails,
              phones:this.phone,
              country:this.value
            })
              .then(result => {
                debugger;
                console.log('in then');
                
                const event = new ShowToastEvent({
                    title: 'Contact created',
                    message: 'New Contact created.',
                    variant: 'success'
                });
                this.dispatchEvent(event);
            })
            .catch(error => {
              debugger;
              console.log('In error'+JSON.stringify(error));
              
              const event = new ShowToastEvent({
                  title : 'Error',
                  message : 'Error creating contact. Please Contact System Admin',
                  variant : 'error'
              });
              this.dispatchEvent(event);
          });
            
          }
}