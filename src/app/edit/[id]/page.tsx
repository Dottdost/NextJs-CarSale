"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Car } from "../../../../data";
export default function EditCarPage() {
  const router = useRouter();
  const params = useParams();
  const [form, setForm] = useState<Partial<Car>>({});

  useEffect(() => {
    fetch(`/api/cars/${params.id}`)
      .then((res) => res.json())
      .then(setForm);
  }, [params.id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch(`/api/cars/${params.id}`, {
      method: "PUT",
      body: JSON.stringify({ ...form, year: +form.year!, price: +form.price! }),
      headers: { "Content-Type": "application/json" },
    });
    router.push("/cars");
  };

  return (
    <div>
      <h1>Edit Car</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="brand"
          value={form.brand || ""}
          onChange={handleChange}
          required
        />
        <input
          name="model"
          value={form.model || ""}
          onChange={handleChange}
          required
        />
        <input
          name="year"
          type="number"
          value={form.year || ""}
          onChange={handleChange}
          required
        />
        <input
          name="color"
          value={form.color || ""}
          onChange={handleChange}
          required
        />
        <input
          name="price"
          type="number"
          value={form.price || ""}
          onChange={handleChange}
          required
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
