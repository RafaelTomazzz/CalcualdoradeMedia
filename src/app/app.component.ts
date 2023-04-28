import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public nomeCadu : string = "Cadu Maverick"
  public nomeJoao : string = "João Frango"
  public nomeGelado : string = "Gelado"

  n1Cadu : number = 8
  n1Joao : number = 10
  n1Gelado : number = 9

  n2Cadu : number = 5
  n2Joao : number = 10
  n2Gelado : number = 6

  mediaCadu : number = (this.n1Cadu + this.n2Cadu)/2
  mediaJoao : number = (this.n1Joao + this.n2Joao)/2
  mediaGelado : number = (this.n1Gelado + this.n2Gelado)/2


  title = 'projetoCalculadora';
}
