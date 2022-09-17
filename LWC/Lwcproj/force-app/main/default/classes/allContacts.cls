public  class allContacts {
    public allContacts() {

    }
    @AuraEnabled(cacheable=true)
    public static list<contact> records(){
        return [select id,lastname,email from Contact];
    }
}
