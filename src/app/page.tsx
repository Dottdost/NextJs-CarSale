import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Car Sale App</h1>
      <nav>
        <Link href="/carsPage">Cars List</Link> |{" "}
        <Link href="/add">Add Car</Link>
      </nav>
    </div>
  );
}
