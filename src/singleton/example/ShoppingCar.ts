import { Product } from "./Product";

class ShoppingCar {
  private static instance: ShoppingCar;
  private products: Product[];

  private constructor() {
    this.products = [];
  }

  public add(product: Product): void {
    this.products.push(product);
  }

  public deleteById(id: number): void {
    this.products = this.products.filter((product) => product.id !== id);
  }

  public static getInstance(): ShoppingCar {
    if (!ShoppingCar.instance) {
      ShoppingCar.instance = new ShoppingCar();
    }
    return ShoppingCar.instance;
  }
}

function App() {
  const producto1 = new Product(1, "prod1", 1);
  const producto2 = new Product(2, "prod2", 2);
  const producto3 = new Product(3, "prod3", 3);

  const cart = ShoppingCar.getInstance();
  const cart2 = ShoppingCar.getInstance();
  cart.add(producto1);
  cart.add(producto2);
  cart.add(producto3);
  cart2.deleteById(2);

  console.log(cart === cart2);
}

App();
