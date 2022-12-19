import React, { useState } from 'react';

const DataTable = () => {
    const initialState = [
        {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            age: 25,
            birthdate: '01/01/1997',
            country: 'United States',
            city: 'New York'
        },
        {
            id: 2,
            firstName: 'Jane',
            lastName: 'Doe',
            age: 22,
            birthdate: '01/01/2000',
            country: 'United Kingdom',
            city: 'London'
        },
        {
            id: 3,
            firstName: 'Bob',
            lastName: 'Smith',
            age: 28,
            birthdate: '01/01/1994',
            country: 'Canada',
            city: 'Toronto'
        }
    ];

    const [studentList, setStudentList] = useState(initialState);
    // studentList is the current value of the state, and setStudentList is a function that allows you to update the state.

    function TableHeader() {
        return (
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Birthdate</th>
                    <th>Country</th>
                    <th>City</th>
                    <th>Actions</th>
                </tr>
            </thead>
        );
    }

    function TableAction(props) {
        return (
            <button type="button" {...props}>
                {props.children}
            </button>
        );
    }

    const TableEdit = (props) => {
        const [student, setStudent] = useState({ studentList });

        function handleSubmit(event) {
            event.preventDefault();
            // Update the student using the API here
        }

        return (
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input type="text" name="firstName" value={student.firstName} onChange={event => setStudent({ ...student, firstName: event.target.value })} />
                </label>
                <br />
                <label>
                    Last Name:
                    <input type="text" name="lastName" value={student.lastName} onChange={event => setStudent({ ...student, lastName: event.target.value })} />
                </label>
                <br />
                <label>
                    Age:
                    <input type="number" name="age" value={student.age} onChange={event => setStudent({ ...student, age: event.target.value })} />
                </label>
                <br />
                <input type="submit" value="Save" />
            </form>
        );
    };

    const TableDelete = (props) => {
        function handleDelete() {
            // Delete the student using the API here
        }

        return (
            <button type="button" onClick={handleDelete}>
                Delete
            </button>
        );
    };

    const TableDetails = (props) => {
        const [student, setStudent] = useState({ studentList });

        useEffect(() => {
            fetch(`/api/students/${props.id}`)
                .then(res => res.json())
                .then(data => setStudent(data));
        }, [props.id]);

        return (
            <div>
                <p>ID: {student.id}</p>
                <p>First Name: {student.firstName}</p>
                <p>Last Name: {student.lastName}</p>
                <p>Age: {student.age}</p>
            </div>
        );
    };

    function TableRow(props) {
        return (
            <tbody>
                {props.studentList.map(student => (
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.firstName}</td>
                        <td>{student.lastName}</td>
                        <td>{student.age}</td>
                        <td>{student.birthdate}</td>
                        <td>{student.country}</td>
                        <td>{student.city}</td>
                        <td>
                            <TableAction>Edit</TableAction>
                            <TableAction>Delete</TableAction>
                            <TableAction>Details</TableAction>
                        </td>
                    </tr>
                ))}
            </tbody>
        );
    }

    return (
        <table>
            <TableHeader />
            <TableRow studentList={studentList} />
        </table>
    );
};

export default DataTable;