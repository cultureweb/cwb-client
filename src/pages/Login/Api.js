import history from "../../history";
import { cwbServerApiUrl } from "../../configuration/configuration";
const urlApi = cwbServerApiUrl;



//const urlApi ="http://localhost:42001/api"
export default class Api {

  static authFromToken(token) {
    return fetch(`${urlApi}/v1/auth-from-token`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token
      }
    }).then(res => res.json());
  
  }


    static async login(email, password) {
   
      return await fetch(`${urlApi}/v1/authenticate`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
       
      },
        body: JSON.stringify({
            email,
            password
        })
    })
        .then(async res => {
        
          if (res.status === 200) {
           
            const data = await res.json();
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
            console.log("toto")
            history.push("/admin");
          } 
          if (res.status !== 200) {
            return res.text().then(error => {
              return {
                message: error
              };
            });
          }
        });

      
}
}