import { LightningElement,api } from 'lwc';
import getDetails from '@salesforce/apex/test01.getDetails';

export default class ForWeatherMapIntegration extends LightningElement {
  @api maprec;
  cityName;
  humidityValue(event){
      this.cityName=event.target.value;
  }

  Handleclick(){
          getDetails({cityname:this.cityName})
          .then( => {
          this.maprec=result;  })
    .catch(=>{
     
      
    });
  }
}