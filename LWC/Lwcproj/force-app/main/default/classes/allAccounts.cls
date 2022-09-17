public with sharing class allAccounts {
    public allAccounts() {

    }
    @AuraEnabled(cacheable=true)
    public static list<account> accRecords(){
        try {
            return [select id,name,email__c from account];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
