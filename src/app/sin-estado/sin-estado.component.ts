import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from '../interfaces/producto';

@Component({
  selector: 'app-sin-estado',
  templateUrl: './sin-estado.component.html',
  styleUrls: ['./sin-estado.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SinEstadoComponent implements OnInit {

  @Input()producto!: Producto;
  @Output()productoSeleccionado :EventEmitter<Producto> = new EventEmitter();
  @Output() productoDesSeleccionado: EventEmitter<Producto> = new EventEmitter();

  private disabled: boolean = false;
  public accionCompra:string='';

  constructor() { }

  ngOnInit(): void {
    this.accionCompra=`BUY FOR $${this.producto.precio}`;
  }
  seleccionarItem(){
    this.disabled=true;
    this.accionCompra=`ADDED TO CART`;
    this.productoSeleccionado.emit(this.producto);
  }

  desSeleccionarItem() {
    this.disabled = false;
    this.accionCompra = `BUY FOR $${this.producto.precio}`;
    this.productoDesSeleccionado.emit(this.producto);
  }

  isItemDisabled(){
    return this.disabled;
  }

}
