public class weathermap {
    public static Map<String,String> getDetails(string cityname){
        
         Map<String,String> maprec =new Map<String,String>();
        
        string endpoints='https://api.openweathermap.org/data/2.5/weather?q=endpnt'+cityname+'&appid=89b74853d6377d3214222bf34b56cee3';
        
        Http htt= new http();
        
        Httprequest hreq=new Httprequest();
        hreq.setEndpoint(endpoints);
        hreq.setMethod('GET');
        
        Httpresponse hrs=new Httpresponse();
        hrs=htt.send(hreq);
         System.debug(hrs.getBody());
        System.JSONParser wparser=System.JSON.createParser(hrs.getBody());
        
         While(wParser.nextToken() != null)
        {
            if(wparser.getCurrentToken() == System.JSONToken.FIELD_NAME && wParser.getText() == 'main')
            {
                wParser.nextToken();
                if(wParser.getCurrentToken() == system.JSONToken.START_OBJECT)
                {
                    wParser.nextToken();
                    
                    if(wParser.getCurrentToken() == jsontoken.FIELD_NAME && wParser.getText() == 'temp')
                    {
                        wparser.nextToken();
                        //temeprature = (wparser.getDecimalValue()-273.15)+ ' C';
                         maprec.put('temeprature',(wparser.getDecimalValue()-273.15)+ ' C');
                    }
                    wParser.NextToken();
                     if(wParser.getCurrentToken() == jsontoken.FIELD_NAME && wParser.getText() == 'feels_like')
                    {
                        wparser.nextToken();
                        //feelslike = (wparser.getDecimalValue()-273.15)+ ' C';
                        maprec.put('feelslike',(wparser.getDecimalValue()-273.15)+ ' C');
                    }
                    wParser.NextToken();
                    if(wParser.getCurrentToken() == jsontoken.FIELD_NAME && wParser.getText() == 'temp_min')
                    {
                        wparser.nextToken();
                        //minimumTemp = (wparser.getDecimalValue()-273.15)+ ' C';
                        maprec.put('minimumTemp',(wparser.getDecimalValue()-273.15)+ ' C');
                    }
                    wParser.NextToken();
                    if(wParser.getCurrentToken() == jsontoken.FIELD_NAME && wParser.getText() == 'temp_max')
                    {
                        wparser.nextToken();
                       // maximumTemp = (wparser.getDecimalValue()-273.15)+ ' C';
                        maprec.put('maximumTemp',(wparser.getDecimalValue()-273.15)+ ' C');
                    }
                    wParser.NextToken();
                    if(wParser.getCurrentToken() == jsontoken.FIELD_NAME && wParser.getText() == 'pressure')
                    {
                        wparser.nextToken();
                        //pressureValue = wparser.getText();
                        maprec.put('pressureValue',wparser.getText());
                    }
                    wParser.NextToken();
                    if(wParser.getCurrentToken() == jsontoken.FIELD_NAME && wParser.getText() == 'humidity')
                    {
                        wparser.nextToken();
                        //humidityValue = wparser.getText();
                         maprec.put('humidityValue',wparser.getText());
                    }
                }
            }
        }
       
        //system.debug(maprec);
       return maprec;
    }   
        
    }