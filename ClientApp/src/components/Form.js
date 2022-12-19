import { useForm } from 'react-hook-form';

const Form = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        savePerson(data);
    };

    const savePerson = person => {
        fetch('/api/persons', {
            method: 'POST',
            body: JSON.stringify(person),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                // update the persons list
                setPersons([...persons, data]);
            });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="firstName">First Name:</label>
            <input
                name="firstName"
                ref={register({ required: true })}
            />
            {errors.firstName && <span>This field is required</span>}
            <br />
            <label htmlFor="lastName">Last Name:</label>
            <input
                name="lastName"
                ref={register({ required: true })}
            />
            {errors.lastName && <span>This field is required</span>}
            <br />
            <label htmlFor="email">Email:</label>
            <input
                name="email"
                ref={register({
                    required: true,
                    pattern: /^\S+@\S+$/i
                })}
            />
            {errors.email && errors.email.type === 'required' && <span>This field is required</span>}
            {errors.email && errors.email.type === 'pattern' && <span>Invalid email address</span>}
            <br />
            <label htmlFor="title">Title:</label>
            <input
                name="title"
                ref={register({ required: true })}
            />
            {errors.title && <span>This field is required</span>}
            <br />
            <input type="submit" />
        </form>
    );
};

export default Form;
