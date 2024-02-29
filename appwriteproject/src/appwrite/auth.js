import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

// const client = new client()
// .setEndpoint('https://cloud.appwrite.io/v1')
// .setProject=('[project_ID]');


// const account=new account(client)

// const user =await account.create(
//     ID.unique(),
//     'email@example.com',
//     'password  // User ID. Must be unique and a-z. Max length is 
// );

export class AuthService{
    client = new Client();
    account;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);

}
async createAccount({name,email,password}){
    try {
         const useraccount=await this.account.create( ID.unique(),name, email, password);
         if (useraccount) {
            // call another method
            return this.login({email,password});
          } else {
             return useraccount;
            
         }
    } catch (error) {
       throw error; 
    }
}

async login({email,password}){
    try {
         return await this.account.createEmailSession(email,password);
    } catch (error) {
        
    }
}

async getCurrentUser(){
    try {
         return await this.account.get()
    } catch (error) {
       console.log("Appwrite service :: getCurrentUser :: error",error); 
    }
    return null;
}
  

async logout(){
    try {
       await this .account.deleteSessions();
    } catch (error) {
        console.log("Appwrite service :: getCurrentUser :: error",error); 
    }
}
}   

const authService= new AuthService();



export default authService;