"use client"

import {useState} from "react";
import CarForm from "@/app/carform/page";
import Link from "next/link";


export default function Home() {
  const [cars, setCars] = useState([])

  function buttonHandler() {
    fetch("http://localhost:8080/cars")
      .then(response => response.json())
      .then(data => setCars(data))
  }

  function selectHandler(event) {
    const selection = event.target.value;
    switch (selection) {
      case "brandAsc":
        setCars([... cars.sort((c1, c2) => c1.brand.localeCompare(c2.brand))])
        break;
      case "brandDesc":
        setCars([... cars.sort((c1, c2) => c2.brand.localeCompare(c1.brand))])
        break;
      case "modelAsc":
        setCars([... cars.sort((c1, c2) => c1.model.localeCompare(c2.model))])
        break;
      case "modelDesc":
        setCars([... cars.sort((c1, c2) => c2.model.localeCompare(c1.model))])
        break;
      case "powerAsc":
        setCars([... cars.sort((c1, c2) => c1.horsePower - c2.horsePower)])
        break;
      case "powerDesc":
        setCars([... cars.sort((c1, c2) => c2.horsePower - c1.horsePower)])
        break;
      default:
        buttonHandler();
    }
  }

  return (
    <div className="App">
      <h1>My Frontend - The very beginning</h1>
        <button onClick={buttonHandler}>load cars</button>
        <br/>
        <table>
          <thead>
            <tr>
              <th>
                Brand
                <select onChange={(event) => selectHandler(event)}>
                  <option value="empty"></option>
                  <option value="brandAsc">Aufsteigend</option>
                  <option value="brandDesc">Absteigend</option>
                </select>
              </th>
              <th>
                Model
                <select onChange={(event) => selectHandler(event)}>
                  <option value="empty"></option>
                  <option value="modelAsc">Aufsteigend</option>
                  <option value="modelDesc">Absteigend</option>
                </select>
              </th>
              <th>
                Horsepower
                <select onChange={(event) => selectHandler(event)}>
                  <option value="empty"></option>
                  <option value="powerAsc">Aufsteigend</option>
                  <option value="powerDesc">Absteigend</option>
                </select>
              </th>
            </tr>
          </thead>
          <tbody>
            {cars.map(car =>
                <tr>
                  <td>{car.brand}</td>
                  <td>{car.model}</td>
                  <td>{car.horsePower}</td>
                </tr>
            )}
          </tbody>
        </table>
      <Link href="/carform">add a new car</Link>
    </div>
  )
}
