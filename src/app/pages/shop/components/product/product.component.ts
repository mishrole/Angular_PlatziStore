import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
  DoCheck,
  OnDestroy,
} from '@angular/core';

import { Product } from '../../../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass'],
})
export class ProductComponent implements OnChanges, OnInit, DoCheck, OnDestroy {
  // @Input y @Output respetan SOLID y el principio de única responsabilidad

  // @Input Otro componente nos envía datos, padre a hijo
  @Input() product: Product = {} as Product;
  // @Output enviamos datos a otro componente, hijo a padre
  // EventEmitter literalmente emite un evento con un argumento que será recibido por el padre
  // EventEmitter tiene por defecto false, si seteamos true será asíncrono
  @Output() addToCartClicked: EventEmitter<any> = new EventEmitter();

  @Output() removeClicked: EventEmitter<any> = new EventEmitter();

  today = new Date()

  constructor() {
    // Se llama n veces en función a la cantidad de productos que tenemos, en nuestro caso 6
    console.log('1. Constructor');
  }

  // ngOnChanges detecta el estado anterior y el nuevo
  // Se ejecuta nuevamente 6 veces
  // Requiere implementar la interface OnChanges y recibe un parámetro de tipo SimpleChanges
  ngOnChanges(changes: SimpleChanges) {
    console.log('2. ngOnChanges');
    console.log(changes);
  }

  // Sólo se ejecuta cuando el componente es puesto en pantalla
  ngOnInit() {
    console.log('3. ngOnInit');
  }

  // Error de colisión con ngOnChanges, ambos detectan cambios
  // ngDoCheck es customizado, mientras que ngOnChanges es nativo
  ngDoCheck() {
    console.log('4. ngDoCheck');
  }

  // Detecta cuando un componente es removido de la interfaz
  ngOnDestroy() {
    console.log('5. ngOnDestroy');
  }

  addToCart() {
    console.log(`Producto ${this.product.id} añadido`);
    this.addToCartClicked.emit(this.product.id);
  }

  removeProduct() {
    console.log(`Producto ${this.product.id} removido`);
    this.removeClicked.emit(this.product.id);
  }
}
