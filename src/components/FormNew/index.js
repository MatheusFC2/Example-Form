import React from 'react';
import Field from '../Field';
import Form from '../Form';

const FormNew = () => (
    <Form>
        <Field.Text name="email" label="Email" type="email" />
    </Form>
);


export default FormNew;