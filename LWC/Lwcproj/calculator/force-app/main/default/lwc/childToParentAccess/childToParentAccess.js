import { LightningElement,api} from 'lwc';

export default class ChildToParentAccess extends LightningElement {
  @api componentvalue='from child component';
  @api showmessage(){
    this.componentvalue='this is form non parameterized method'
  }
  @api showmessages(messagename){

  }

}