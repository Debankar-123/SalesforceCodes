import { LightningElement } from 'lwc';

export default class CalculateSimpleIntrest extends LightningElement {
  principleAmount;
  time;
  rateOfIntrest;
  SI;
  methodOnChange(event){
    const varname=event.target.name;
    const varvalue=event.target.value;
    if(varname==='Pamount')
        this.principleAmount=varvalue;
    else if(varname==='month')
          this.time=varvalue;
    else if(varname==='rate')
        this.rateOfIntrest=varvalue;
  }
  calculateIntrest(){
    this.SI=(parseInt(this.principleAmount)*parseInt(this.time)*parseInt(this.rateOfIntrest))/100;
  }
  clear(){
    this.principleAmount=0;
    this.time=0;
    this.rateOfIntrest=0;
    this.SI=0;
  }

}