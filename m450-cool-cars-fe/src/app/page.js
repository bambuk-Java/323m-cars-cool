"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
    const [cars, setCars] = useState([]);
    const [filteredCars, setFilteredCars] = useState([]); // Zustand für gefilterte Autos
    const [searchField, setSearchField] = useState("");
    const [currentPage, setCurrentPage] = useState(1); // Aktuelle Seite
    const itemsPerPage = 5; // Anzahl der Elemente pro Seite
    const [formOpen, setFormOpen] = useState(false)
    const [refreshFlag, setRefreshFlag] = useState(false)

    // Daten laden
    function buttonHandler() {
        fetch("http://localhost:8080/cars")
            .then((response) => response.json())
            .then((data) => {
                setCars(data);
                setFilteredCars(data); // Gefilterte Liste initialisieren
            });
    }

    // Sortieren
    function selectHandler(event) {
        const selection = event.target.value;
        const sortedCars = [...filteredCars]; // Arbeite mit der gefilterten Liste
        switch (selection) {
            case "brandAsc":
                setFilteredCars(
                    sortedCars.sort((c1, c2) => c1.brand.localeCompare(c2.brand))
                );
                break;
            case "brandDesc":
                setFilteredCars(
                    sortedCars.sort((c1, c2) => c2.brand.localeCompare(c1.brand))
                );
                break;
            case "modelAsc":
                setFilteredCars(
                    sortedCars.sort((c1, c2) => c1.model.localeCompare(c2.model))
                );
                break;
            case "modelDesc":
                setFilteredCars(
                    sortedCars.sort((c1, c2) => c2.model.localeCompare(c1.model))
                );
                break;
            case "powerAsc":
                setFilteredCars(
                    sortedCars.sort((c1, c2) => c1.horsePower - c2.horsePower)
                );
                break;
            case "powerDesc":
                setFilteredCars(
                    sortedCars.sort((c1, c2) => c2.horsePower - c1.horsePower)
                );
                break;
            default:
                setFilteredCars([...cars]); // Zeige die Originaldaten
        }
        setCurrentPage(1); // Zurück zur ersten Seite nach Sortierung
    }

    // ---- Form ----
    const [formData, setFormData] = useState({
        brand: "",
        model: "",
        HorsePower: ""
    });
    const openForm = () => {
        formOpen ? setFormOpen(false) : setFormOpen(true);
    }
    //handle Form change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'diff' ? Number(value) : value,
        });
    };

    //Handle Submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.brand || !formData.model || !formData.horsePower) {
            alert("Bitte alle erforderlichen Felder ausfüllen.");
            return;
        }
        openForm();
        onSubmit();
        setFormData({
            brand: "",
            model: "",
            horsePower: ""
        });
    };

    //submit Form data
    const onSubmit = async () => {
        try {
            const response = await fetch("http://localhost:8080/cars", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData), // Korrekt strukturieren
            });

            if (!response.ok) {
                throw new Error(`Fehler: ${response.status} - ${response.statusText}`);
            }
            console.log("Auto erfolgreich gespeichert.");
            alert("Auto erfolgreich hinzugefügt!");

            // Refresh-Funktion, um die Liste zu aktualisieren
            buttonHandler();
            setFormOpen(false); // Formular schließen
            setFormData({
                brand: "",
                model: "",
                horsePower: "",
            });
        } catch (error) {
            console.error("Fehler beim Speichern des Autos:", error);
            alert("Fehler beim Speichern. Bitte später erneut versuchen.");
        }
    };

    //delete carlos (Spanier ohne Auto)
    const onDelte = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/cars/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`Fehler: ${response.status} - ${response.statusText}`);
            }
            buttonHandler();
            console.log("Auto erfolgreich gelöscht.");
            alert("Auto erfolgreich gelöscht!");
        } catch (error) {
            console.error("Fehler beim Löschen des Autos:", error);
            alert("Fehler beim Löschen. Bitte später erneut versuchen.");
        }
    };




    // Suche anwenden
    useEffect(() => {
        const filtered = cars.filter(
            (car) =>
                car.brand.toLowerCase().includes(searchField.toLowerCase()) ||
                car.model.toLowerCase().includes(searchField.toLowerCase()) ||
                car.horsePower.toString().includes(searchField)
        );
        setFilteredCars(filtered);
        setCurrentPage(1); // Zurück zur ersten Seite nach Suche
    }, [searchField, cars]);

    // Paging-Funktion: Daten in Seiten aufteilen
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredCars.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredCars.length / itemsPerPage);

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    useEffect(() => {
        buttonHandler();
    }, []);

    return (
        <div className="App">
            <h1>My Frontend - The very beginning</h1>
            <br />
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
                    <th>
                        Search
                        <input
                            onChange={(e) => setSearchField(e.target.value)}
                            type="search"
                        />
                    </th>
                </tr>
                </thead>
                <tbody>
                {currentItems.map((car) => (
                    <tr key={car.id}>
                        <td>{car.brand}</td>
                        <td>{car.model}</td>
                        <td>{car.horsePower}</td>
                        <td><button onClick={() => onDelte(car.id)}>delete car</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div>
                <button onClick={goToPreviousPage} disabled={currentPage === 1}>
                    Zurück
                </button>
                <span>
          Seite {currentPage} von {totalPages}
        </span>
                <button
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}
                >
                    Weiter
                </button>
            </div>
            <button onClick={openForm}>add a new car</button>
            { formOpen && (
                <div>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="brand"> Brand</label>
                        <input
                            type={"text"}
                            id="brand"
                            name ="brand"
                            value ={formData.brand}
                            onChange={handleChange}
                        />
                        <label htmlFor="model"> Model</label>
                        <input
                            type={"text"}
                            id="model"
                            name ="model"
                            value ={formData.model}
                            onChange={handleChange}
                        />
                        <label htmlFor="horsePower">Horsepower</label>
                        <input
                            type="number"
                            id="horsePower"
                            name="horsePower"
                            value={formData.horsePower}
                            onChange={handleChange}
                            ></input>
                        <button type={"submit"}>Submit</button>
                    </form>
                </div>
            )}
        </div>
    );
}
