import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Mermelada, MermeladaService} from "../../../services/mermelada.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  mermeladas!:Mermelada[];

  constructor(
    private _mermeladasService:MermeladaService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.mermeladas = this._mermeladasService.getMermeladas();
  }

  public verMermelada(id:number){
    this.router.navigate(['/mermelada', id]);
  }

}
