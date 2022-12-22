import React, { useState, useEffect } from 'react';
import Form from './Form';
//To-Do: 4. Define an event on the Hide button to hide student details

const DataTable = () => {
    const initialState = [
        {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            age: 25,
            birthdate: '01/01/1997',
            country: 'United States',
            city: 'New York',
            showDetails: false
        },
        {
            id: 2,
            firstName: 'Jane',
            lastName: 'Doe',
            age: 22,
            birthdate: '01/01/2000',
            country: 'United Kingdom',
            city: 'London',
            showDetails: false
        },
        {
            id: 3,
            firstName: 'Bob',
            lastName: 'Smith',
            age: 28,
            birthdate: '01/01/1994',
            country: 'Canada',
            city: 'Toronto',
            showDetails: false
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

    function TableEdit(props) {
        const handleEdit = () => {
            // Add code to open the form for editing the student's information
            alert("Edit");
        }

        return (
            <button type="button" onClick={handleEdit}>
                Edit
            </button>
        );
    };
    function TableDelete(props) {
        const handleDelete = () => {
            // Add code to open the form for deleting the student's information
            alert("Delete");
            console.log("test");
        }

        return (
            <button type="button" onClick={handleDelete}>
                Delete
            </button>
        );
    };
    function ShowStudentDetails(...props) { // TableDetails
        const handleDetails = () => {
            alert("details");
            // Add code to open the form for showing the student's information
            // Formulär för eventuell redigering av datan.
            // Document.GetElementById("detailsDiv"); -> följande data.
            //<tr key={props.student.id}>
            //    <td>{props.student.id}</td>
            //    <td>{props.student.firstName}</td>
            //    <td>{props.student.lastName}</td>
            //    <td>{props.student.age}</td>
            //    <td>{props.student.birthdate}</td>
            //    <td>{props.student.country}</td>
            //    <td>{props.student.city}</td>
            //</tr>
            <Form>
            </Form>
        }

        return (
            <button type="button" onClick={handleDetails}>
                Details
            </button>
        );
    };


    function TableAction(props) {
        return (
            <button type="button" {...props}>
                {props.children}
            </button>
        );
    }

    function TableRow(props) {
        return (
            <tbody>
                {props.studentList.map(student => (
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.firstName}</td>
                        <td>{student.lastName}</td>
                        <td>{student.age}</td>
                        <td>
                            <TableEdit>Edit</TableEdit>
                            <TableDelete>Delete</TableDelete>
                            <ShowStudentDetails>Details</ShowStudentDetails>
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