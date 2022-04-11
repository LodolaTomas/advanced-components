import { Component, Input, OnInit, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { Producto } from '../interfaces/producto';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit, OnChanges {

  @Input() 
  precio!: number;

  @Input()
  modeloDeTienda!: Array<Producto>;

  @Output() pagar: EventEmitter<null> = new EventEmitter();

  constructor() {}

  realizarPago() {
    this.pagar.emit();
  }

  ngOnInit() {
    console.log(this.modeloDeTienda)
  }

  ngOnChanges(cambios: SimpleChanges) {
    if (cambios['precio'].currentValue < cambios['precio'].previousValue) {
      alert("¿Seguro que deseas sacar items?");
    }
  }

}
