import React from 'react';
import { useForm } from 'react-hook-form';

import Form from '../Form';
import Field from '../Field';
import Button from '../Button';

const FormNew = () => {
    const { register, handleSubmit} = useForm();
    
    const newUser = (user) => {
        console.log(user);
    }; 

    return (
        <Form onSubmit={handleSubmit(newUser)}>
            <Field.Text name="Nome" label="Nome" type="text" ref={register}/>
            <Field.Text name="email" label="Email" type="email" ref={register}/>
            <Button>ENVIAR</Button>
        </Form>        
    );
};


export default FormNew;