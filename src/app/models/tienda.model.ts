import { Producto } from '../interfaces/producto';

export class Tienda {
  tiendaItems: Array<Producto>;

  constructor() {
    this.tiendaItems = [
      {
        id: 1,
        texto:
          "H+ Sport is dedicated to creating eco-friendly, high-quality, nutrient-rich, nutritional products that enhance active lifestyles.",
        titulo: "Orange Mineral Water ",
        imagen: "mineral-water-orange.png",
        precio: 20
      },
      {
        id: 2,
        texto:
          "H+ Sport is dedicated to creating eco-friendly, high-quality, nutrient-rich, nutritional products that enhance active lifestyles.",
        titulo: "Strawberry Mineral Water ",
        imagen: "mineral-water-strawberry.png",
        precio: 33
      },
      {
        id: 3,
        texto:
          "H+ Sport is dedicated to creating eco-friendly, high-quality, nutrient-rich, nutritional products that enhance active lifestyles.",
        titulo: "Chocolate Protein Bar",
        imagen: "chocolate-protein-bar.jpeg",
        precio: 120
      }
    ];
  }
}
