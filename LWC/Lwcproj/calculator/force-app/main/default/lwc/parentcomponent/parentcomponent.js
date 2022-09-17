import { LightningElement,api,track } from 'lwc';

export default class Parentcomponent extends LightningElement {
   //callCustommessage(){
   // var childclassVariable=this.template.queryselector('c-child-To-Parent-Access');
   // childclassVariable.showmessage();
  // }
  @track parentvalue='this is from parent';
    callCustommessage(){
     var childclassVariable=this.template.queryselector('c-child-To-Parent-Access');
     childclassVariable.showmessage();
}
}