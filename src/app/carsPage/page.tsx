"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Car } from "../../../data";

export default function CarsPage() {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    fetch("/api/cars")
      .then((res) => res.json())
      .then(setCars);
  }, []);

  const deleteCar = async (id: number) => {
    await fetch(`/api/cars/${id}`, { method: "DELETE" });
    setCars(cars.filter((c) => c.id !== id));
  };

  return (
    <div>
      <h1>Cars List</h1>
      <Link href="/add">Add New Car</Link>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            {car.brand} {car.model} - ${car.price}
            <Link href={`/edit/${car.id}`}> Edit </Link>
            <button onClick={() => deleteCar(car.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
