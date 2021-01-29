import { Component, OnInit } from '@angular/core';
import {Mermelada, MermeladaService} from "../../../services/mermelada.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})

export class SearchComponent implements OnInit {

  mermeladasEncontradas!:Mermelada[];
  textoBuscado!:string;

  constructor(
    private _mermeladaService: MermeladaService,
    private _activateRoute: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._activateRoute.params.subscribe(parametros => {
      this.mermeladasEncontradas = this._mermeladaService.buscarMermeladas(parametros["texto"]);
      this.textoBuscado = parametros["texto"];
      console.log(this.mermeladasEncontradas);
    })
  }

  public verMermelada(i:number){
    this._router.navigate(['/mermelada', i]);
  }

}
