import { Component } from "@angular/core";

@Component({
    selector:'app-register',
    template:`
    <div class='registet-container'>
    <p>Ready to watch enter your email </p> 
    <div>
    <input type='email' class="form-control" placeholder="email">
    <button class="btn btn-danger> 
    Get stated >
    </button>
    </div>
    </div>`,
    styles:["p{color:red; text-align:center}"]
})
export class NetflixRegister{

}