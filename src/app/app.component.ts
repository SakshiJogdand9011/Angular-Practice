import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

// counter app start
//  count=0

//  handleCounter(val:string){
//   if(val=='minus'){
//     this.count=this.count-1;
//   }
//   else if(val=='plus'){
//     this.count=this.count+1;
//   }
//   else{
//      this.count=0;
//   }
//  }
// counter app end


//event 
handleEvent(event:any){
  console.log("function called",event);
  
}

}
