import { Car, cars } from "../../../../../data";
export async function GET(
  req: Request,
  { params }: { params: { carId: number } }
) {
  const car = cars.find((c) => c.id === params.carId);
  if (!car) return Response.json({ message: "Car not found" });
  return Response.json(car);
}

export async function PUT(
  req: Request,
  { params }: { params: { carId: number } }
) {
  const body: Partial<Car> = await req.json();
  const index = cars.findIndex((c) => c.id === params.carId);
  if (index === -1) return Response.json({ message: "Car not found" });
  cars[index] = { ...cars[index], ...body };
  return Response.json(cars[index]);
}

export async function DELETE(
  req: Request,
  { params }: { params: { carId: number } }
) {
  const index = cars.findIndex((c) => c.id === params.carId);
  if (index === -1) return Response.json({ message: "Car not found" });
  const deleted = cars.splice(index, 1);
  return Response.json(deleted[0]);
}
