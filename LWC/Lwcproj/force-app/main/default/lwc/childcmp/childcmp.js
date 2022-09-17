import { LightningElement,api} from 'lwc';

export default class Childcmp extends LightningElement {
  @api getvaluefromparent;

  @api addition(param){
    return param.a+param.b;
  }
}