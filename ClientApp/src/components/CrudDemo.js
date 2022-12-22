import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import DataTable from './DataTable';

//Define an onClick event for details button that takes id from props and then route it to the
//PersonDetails component with id. (Note: Add a new Route for PersonDetails with id param)
//1) Define a PersonDetails component.
//2) Define a const person variable into the PersonDetails component using useState.
//3) Define a useEffect Hook function.
//4) Get the id parameter using the useParams Hook function.
//5) Call the API Get by Id and then set the fetched data to the person variable.
//Define an onClick event for delete button that calls Delete API By Id.
//❖ When the selected person's is removed by API, then the person list should be 
//updated if the person was removed.

const CrudDemo = () => {
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        fetch('/api/persons')
            .then(res => res.json())
            .then(data => setPersons(data));
    }, []);

    const Table = () => (
        <table>
            <TableHeader />
            <tbody>
                {persons.map(person => (
                    <TableRow key={person.id} person={person} />
                ))}
            </tbody>
        </table>
    );

    const TableHeader = () => (
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Actions</th>
            </tr>
        </thead>
    );

    const TableRow = ({ person }) => (
        <tr>
            <td>{person.name}</td>
            <td>{person.age}</td>
            <td>
                <TableAction id={person.id} />
            </td>
        </tr>
    );

    const TableAction = ({ id }) => (
        <Link to={`/person/${id}`}>Details</Link>
    );

    return (
        <div>
            <Link to="/crud">CrudDemo</Link>
            <Table />
        </div>
    );
};

const PersonDetails = () => {
    const [person, setPerson] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`/api/persons/${id}`)
            .then(res => res.json())
            .then(data => setPerson(data));
    }, []);

    const handleDelete = () => {
        fetch(`/api/persons/${id}`, {
            method: 'DELETE'
        }).then(() => {
            // update the persons list
            setPersons(persons.filter(p => p.id !== id));
        });
    };

    return (
        <div>
            <h1>{person.name}</h1>
            <p>Age: {person.age}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default CrudDemo;
