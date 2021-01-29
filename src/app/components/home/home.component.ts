import { Component, OnInit } from '@angular/core';
import {TextService} from '../../services/text.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private service: TextService
  ) { }

  ngOnInit(): void {
  }

   text : string ;
   nbr : any;



  onKey(event: any) { 
    // en cas où on a effacé tout le texte
      if(this.text == "")
      {
      this.nbr= 0;
      }

      else
      {
      this.service.countSymbols(this.text)
      .subscribe(users => (this.nbr = users));
      }
  
  }

}
