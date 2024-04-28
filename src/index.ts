export class Vector2 {
  readonly x: number;
  readonly y: number;

  constructor(x: number, y: number)
  {
    this.x = x;
    this.y = y;
  }

  public length(): number
  {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }

  public normalize(): Vector2
  {
    let norm = this.length();
    return new Vector2(this.x / norm, this.y / norm);
  }

  public dot(v: Vector2): number
  {
    return this.x * v.x + this.y * v.y;
  }

  public add(v: Vector2): Vector2
  {
    return new Vector2(this.x + v.x, this.y + v.y);
  }

  public subtract(v: Vector2): Vector2
  {
    return new Vector2(this.x - v.x, this.y - v.y);
  }

  public multiply(val: number): Vector2
  {
    return new Vector2(this.x * val, this.y * val);
  }
}

