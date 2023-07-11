export class LogService{
    LogChangeStatusMessage(name:string, status:string){
        console.log(`Change status of account ${name} to ${status}`)      
    }
    LogNewAccount(name:string, status:string){
        console.log(`new account has been created with name ${name} & status: ${status}`);
        
    }
}