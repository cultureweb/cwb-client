import Api from "./Api";

//import React from "react";

class Auth {
  constructor() {
    this.authenticated = false;
    this.Api = new Api();
  }

  isAuthenticated() {
    const token = localStorage.getItem("token");
    // Api.authFromToken(token).then(res => res && res.isAuthenticated ? this.authenticated = true : this.authenticated = false
    // );
    Api.authFromToken(token).then(res => res && res.isAuthenticated ? this.authenticated = true : null
    );
    return this.authenticated
  }
   

    // if(auth === true){
    //     console.log("this.authenticated", this.authenticated);
    //     this.authenticated = auth;
    //     console.log({ auth })
    // }

    //return this.authenticated
  

  // useEffect(() => {
  //     if (!this.props.authenticated && !localStorage.getItem("token")) {
  //         this.setState(Object.assign({}, this.state, { redirect: "/login" }));
  //         // history.push('/signin');
  //     }
  //     // Your code here
  // }, []);

}
export default new Auth();