import { NextRequest, NextResponse } from "next/server";
import { Car, cars } from "../../../../data";

export async function GET() {
  return NextResponse.json(cars);
}

export async function POST(req: NextRequest) {
  const body: Omit<Car, "id"> = await req.json();
  const newCar: Car = { id: Date.now(), ...body };
  cars.push(newCar);
  return NextResponse.json(newCar, { status: 201 });
}
