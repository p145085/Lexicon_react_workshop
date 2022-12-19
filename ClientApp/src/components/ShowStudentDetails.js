import React, { useState, useEffect } from 'react';

const ShowStudentDetails = ({ id }) => {
    const [student, setStudent] = useState({});

    useEffect(() => {
        fetch(`studentList/${id}`)
            .then(res => res.json())
            .then(data => setStudent(data));
    }, [id]);

    return (
        <div>
            <p>ID: {student.id}</p>
            <p>Firstname: {student.firstName}</p>
            <p>Lastname: {student.lastName}</p>
            <p>Age: {student.age}</p>
            <p>Birthdate: {student.birthdate}</p>
            <p>Country: {student.country}</p>
            <p>City: {student.city}</p>
        </div>
    );
};

export default ShowStudentDetails;
