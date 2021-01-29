import {Component, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {Mermelada, MermeladaService} from "../../../services/mermelada.service";

@Component({
  selector: 'app-product-tarjeta',
  templateUrl: './product-tarjeta.component.html',
  styles: [
  ]
})
export class ProductTarjetaComponent implements OnInit {

  @Input() mermelada!:Mermelada;
  @Input() ind!:number|undefined;

  constructor(
    private _mermeladasService:MermeladaService,
    private _router:Router
  ) {
  }

  ngOnInit(): void {
  }

  public verMermelada(){
    this._router.navigate(['/mermelada', this.ind]);
  }

}
