import { LightningElement, track } from 'lwc';

export default class Parentcmp extends LightningElement {
   @track value="sending value from parent";
   @track   sum;
   params={'a':10,'b':12}; 
    
    handleOnclick(){
      const accesschild = this.template.querySelector('c-childcmp');
      var params={'a':10,'b':12};
      this.sum= accesschild.addition(params);

    }
}