import { Component, OnInit, ViewChild } from '@angular/core';
import { Tienda } from './../models/tienda.model';
import { Producto } from './../interfaces/producto';
import { AlertaConfirmacionComponent } from './../alerta-confirmacion/alerta-confirmacion.component';

@Component({
  selector: 'app-con-estado',
  templateUrl: './con-estado.component.html',
  styleUrls: ['./con-estado.component.css'],
})
export class ConEstadoComponent implements OnInit {
  modeloTienda: Tienda = new Tienda();
  itemsComprados: Array<Producto>;
  precioTotal: any;

  @ViewChild(AlertaConfirmacionComponent, { static: false })
  alertChild!: AlertaConfirmacionComponent;

  constructor() {
    this.itemsComprados = new Array<Producto>();
  }

  ngOnInit(): void {
    /* this.tiendaSuscription = this.http
      .get('http://localhost:4200/assets/data/data.json')
      .subscribe((res) => {
        this.modeloTienda = res;
      }); */
  }

  seleccionarItem(item: Producto) {
    this.itemsComprados.push(item);
  }

  onProductoSeleccionado(_evento: any) {
    this.updateItemByID(_evento.id, 'activar');
    this.precioTotal = this.getPrecioTotal();
  }
  onProductoDesSeleccionado(_evento: any) {
    this.updateItemByID(_evento.id, 'desactivar');
    this.precioTotal = this.getPrecioTotal();
  }

  updateItemByID(_id: number, modo: string) {
    const index = this.modeloTienda.tiendaItems.findIndex(
      (producto: Producto) => producto.id === _id
    );
    this.modeloTienda.tiendaItems[index].status =
      modo === 'activar' ? 'active' : 'unactive';
  }

  getPrecioTotal(): any {
    return this.modeloTienda.tiendaItems.reduce(
      (prev: number, item: Producto) => {
        if (item.status == "active") {
          return prev + (item.precio??0);
        } else {
          return prev;
        }
      },
      0
    );
  }

  realizarPago() {
    this.alertChild.mostrar();
  }

  onPagar() {
    this.realizarPago();
  }
}
