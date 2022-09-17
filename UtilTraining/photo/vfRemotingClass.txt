public class ContactHandler {
    @RemoteAction
    public static String createContacts(String accName, List<Contact> conList){
        try{
            Account accRec ;
            //List<contactWrapper> conWarpList =( list<contactWrapper>)  JSON.deserialize(jsonString, list<contactWrapper>.class);
            
            list<Contact> conrecList = new list<Contact>();
            
            if(accName != null){
                accRec = new Account(Name=accName);
                insert accRec;
            }
            for(Contact eachElement : conList){
                eachElement.AccountId=accRec.Id;
            }
           /* for(contactWrapper eachElement : conWarpList){
                System.debug('fn'+eachElement.fn);
                System.debug('ln'+eachElement.ln);
                System.debug('ph'+eachElement.ph);
                System.debug('email'+eachElement.email);
              
                
                conrecList.add(new Contact(Firstname = eachElement.fn,LastName=eachElement.ln,Email=eachElement.email,Phone=eachElement.ph,AccountId=accRec.Id));
            }*/
            
            if(!conList.isEmpty()){
                INSERT conList;
            }
            return 'Success';
            
        }Catch(Exception ex){
            return ex.getMessage()+' AT '+ex.getLineNumber();
        }
        
    }
    
    class contactWrapper{
        public string fn;
        public string ln;
        public string email;
        public string ph;
    }

}