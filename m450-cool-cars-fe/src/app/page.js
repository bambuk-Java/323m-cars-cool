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
                <select>
                  <option value="empty"></option>
                  <option value="asc">Aufsteigend</option>
                  <option value="desc">Absteigend</option>
                </select>
              </th>
              <th>
                Model
                <select>
                  <option value="empty"></option>
                  <option value="asc">Aufsteigend</option>
                  <option value="desc">Absteigend</option>
                </select>
              </th>
              <th>
                Horsepower
                <select>
                  <option value="empty"></option>
                  <option value="asc">Aufsteigend</option>
                  <option value="desc">Absteigend</option>
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
