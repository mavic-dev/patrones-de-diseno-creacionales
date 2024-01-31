export class Product {
  private _id: number;
  private _name: string;
  private _cost: number;

  constructor(id: number, name: string, cost: number) {
    this._id = id;
    this._name = name;
    this._cost = cost;
  }

  public get id(): number {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public get cost(): number {
    return this._cost;
  }
}
