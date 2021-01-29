import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Mermelada, MermeladaService} from "../../../services/mermelada.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: [
  ]
})
export class ProductComponent implements OnInit {

  mermelada!:Mermelada;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _mermeladaService:MermeladaService
  ) {
    this.activatedRoute.params.subscribe(parametros =>{
      this.mermelada = this._mermeladaService.getMermelada(parametros['id']);
    })
  }

  ngOnInit(): void {
  }

}
