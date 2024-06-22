export class Vector2 {
  readonly x: number;
  readonly y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public length(): number {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }

  public normalize(): Vector2 {
    let norm = this.length();
    return new Vector2(this.x / norm, this.y / norm);
  }

  public static dot(v1: Vector2, v2: Vector2): number {
    return v1.x * v2.x + v1.y * v2.y;
  }

  public static cross(v1: Vector2, v2: Vector2): number {
    return v1.x * v2.y - v1.y * v2.x;
  }

  public static add(v1: Vector2, v2: Vector2): Vector2 {
    return new Vector2(v1.x + v2.x, v1.y + v2.y);
  }

  public static subtract(v1: Vector2, v2: Vector2): Vector2 {
    return new Vector2(v1.x - v2.x, v1.y - v2.y);
  }

  public times(val: number): Vector2 {
    return new Vector2(this.x * val, this.y * val);
  }

  // Positive angle is counter clockwise rotation
  public rotate(radians: number): Vector2 {
    return new Vector2(
      this.x * Math.cos(radians) - this.y * Math.sin(radians),
      this.x * Math.sin(radians) + this.y * Math.cos(radians),
    );
  }

  // Positive angle is counter clockwise rotation
  public rotateDegrees(degrees: number): Vector2 {
    return this.rotate((degrees / 180) * Math.PI);
  }

  public rotate90Clockwise(): Vector2 {
    return new Vector2(this.y, -this.x);
  }
}

