export interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  color: string;
  price: number;
}

export const cars: Car[] = [
  {
    id: 1,
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "Red",
    price: 20000,
  },
  {
    id: 2,
    brand: "Honda",
    model: "Civic",
    year: 2019,
    color: "Blue",
    price: 18000,
  },
];
