import { Component } from "@angular/core";

@Component({
    selector:'app-register',
    template:`
    <div class='registet-container'>
    <p>Ready to watch enter your email </p> 
    <div>
    <input type='email' placeholder="email">
    <button> 
    Get stated >
    </button>
    </div>
    </div>`,
    styles:["p{color:red; text-align:center}"]
})
export class NetflixRegister{

}