import { LightningElement,track } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


export default class CustomLead extends LightningElement {
  @track selectedValue;
  @track name;  
  @track order;
  @track dates;
  @track Ammount;
  handleName(event){
    this.name=event.target.value;
  }  
  handleOrder(event){
    this.order=event.target.value;
  }
  get options(){
    return [
      {label:'Prospecting',value:'Prospecting'},
      {label:'Qualification',value:'Qualification'},
      {label:'Needs Analysis',value:'Needs Analysis'},
      {label:'Value Proposition',value:'Value Proposition'},
      {label:'Id. Decision Makers',value:'Id. Decision Makers'},
      {label:'Perception Analysis',value:'Perception Analysis'},
      {label:'Proposal/Price Quote',value:'Proposal/Price Quote'},
      {label:'Negotiation/Review',value:'Negotiation/Review'},
      {label:'Closed Won',value:'Closed Won'},
      {label:'Closed Won',value:'Closed Won'},
      {label:'Closed Lost',value:'Closed Lost'},
      
    ];
    
  }
  handlechange(event){
    this.selectedValue=event.target.value;
  }
  handleDate(event){
    this.dates=event.target.value;
  }
  handleAmmount(event){
    this.Ammount=event.target.value;
  }
  saveRecord(){
    const fields={"Name":this.name,
                  "CloseDate":this.dates,
                  "StageName":this.selectedValue,
                    "Amount":this.Ammount
  };
  console.log("name"+fields.Name);
  console.log("closeDate"+fields.CloseDate);
  console.log("stagename"+fields.StageName);
  console.log(" amount"+fields.Amount);  
  
  
  const input={apiName:"Opportunity",fields};
  createRecord(input).then(result=>{    
      this.dispatchEvent(new ShowToastEvent({
        title:'Success',
        message:'Record saved successfully',
        variant:'success',
        mode:'dismissible'
      }                         
      ));
      console.log('Record id is:'+result.id);     
      
  })
  .catch(error =>{
    this.dispatchEvent(new ShowToastEvent({
      Title:'Error',
      message:'Error occoured',
      variant:'error',
      mode:'dismissible'
    }                         
    ));
    console.log('Error is'+error.body.message);
    

  });

  }
}











