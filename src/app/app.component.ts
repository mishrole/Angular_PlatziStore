import { Component } from '@angular/core';
import { Course } from './models/course.model';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'platzi-store';

  clickProduct(id : number) {
    alert(`ProductId: ${id}`);
  }

  products : Product[] = [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoodie',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/images/mug.png',
      title: 'Mug',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'assets/images/pin.png',
      title: 'Pin',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/images/stickers1.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/images/stickers2.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    }
  ];

  courses: Course[] = [
    {
      name: 'Curso de Fundamentos de Angular',
      path: 'Angular',
      teacher: 'Nicolas Molina',
    },
    {
      name: 'Clases del Curso de Angular: Componentes y Servicios',
      path: 'Angular',
      teacher: 'Nicolas Molina',
    },
    {
      name: 'Clases del Curso de Consumo de APIs REST con Angular',
      path: 'Angular',
      teacher: 'Nicolas Molina',
    },
  ];

  newCourse = <Course>{};

  validateForm(name: boolean, path: boolean, teacher: boolean) {
    if (name && path && teacher) {
      return false;
    }

    return true;
  }

  addCourse() {
    this.courses.push(this.newCourse);
    this.newCourse = {} as Course;
  }

  removeCourse(_index: number) {
    this.courses.splice(_index, 1);
  }

  items = ['😀','😁','😂','🤣'];

  addItem() {
    this.items.push(this.title);
  }

  removeItem(index : number) {
    this.items.splice(index, 1);
  }

}
