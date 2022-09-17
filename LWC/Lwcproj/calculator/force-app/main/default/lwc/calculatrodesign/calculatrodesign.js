import { LightningElement } from 'lwc';

export default class Calculatrodesign extends LightningElement {
  firstNumber;
  secondNumber;
  operationResult;

  handelOnChange(event){
    const elementname=event.target.name;
    const elementvalue=event.target.value;
    if(elementname === "fname" )
    {
        this.firstNumber=elementvalue;
    }else if(elementname==="snum")
    {
      this.secondNumber=elementvalue;
    }
  } 
  
  doAddition()
  {
    this.operationResult=parseInt(this.firstNumber) + parseInt(this.secondNumber);
  }
  domultiplication()
  {
    this.operationResult=parseInt(this.firstNumber) * parseInt(this.secondNumber);
  }
  dodivision()
  {
    this.operationResult=parseInt(this.firstNumber) / parseInt(this.secondNumber);
  }
  domodulous()
  {
    this.operationResult=parseInt(this.firstNumber) %  parseInt(this.secondNumber);
  }
  
}