"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddCarPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    brand: "",
    model: "",
    year: "",
    color: "",
    price: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/cars", {
      method: "POST",
      body: JSON.stringify({ ...form, year: +form.year, price: +form.price }),
      headers: { "Content-Type": "application/json" },
    });
    router.push("/cars");
  };

  return (
    <div>
      <h1>Add New Car</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="brand"
          placeholder="Brand"
          onChange={handleChange}
          required
        />
        <input
          name="model"
          placeholder="Model"
          onChange={handleChange}
          required
        />
        <input
          name="year"
          type="number"
          placeholder="Year"
          onChange={handleChange}
          required
        />
        <input
          name="color"
          placeholder="Color"
          onChange={handleChange}
          required
        />
        <input
          name="price"
          type="number"
          placeholder="Price"
          onChange={handleChange}
          required
        />
        <button type="submit">Add Car</button>
      </form>
    </div>
  );
}
