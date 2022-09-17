import { LightningElement, api,wire } from 'lwc';
import{getRecord} from 'lightning/uiRecordApi';

import NAME_FIELD from '@salesforce/schema/Account.Name';
import RATING_FIELD from '@salesforce/schema/Account.Rating';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import FAX_FIELD from '@salesforce/schema/Account.Fax';
import EMAIL_FIELD from '@salesforce/schema/Account.Email__C';


const FIELDS=[NAME_FIELD,RATING_FIELD,PHONE_FIELD,FAX_FIELD,EMAIL_FIELD,'Account.type','Account.AnnualRevenue'];

export default class GetRecordLDS extends LightningElement {
  @api recordId;
  @api accountRecored;

  name;
  Rating;
  phone;
  fax;
  email;
  Type;
  annualrevenue;

  @wire (getRecord,{recordId :'$recordId',fields:FIELDS}) wireRecords({data,error}){
    if(data){
      this.accountRecored=data;
      this.name=this.accountRecored.fields.Name.value;
      this.Rating=this.accountRecored.fields.Rating.value;
      this.phone=this.accountRecored.fields.Phone.value;
      this.fax=this.accountRecored.fields.Fax.value;
      this.email=this.accountRecored.fields.Email__C.value;
      this.Type=this.accountRecored.fields.Type.value;
      this.annualrevenue=this.accountRecored.fields.AnnualRevenue.value;
    }
    else if(error){
      console.log('Error occured due to'+error);
      
    }
  }

}