import React from 'react';
import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin';

const userEdit = props => {
  return (
    <Edit title="Edit Users" {...props}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="name" />
        <NumberInput source="age" />
        <TextInput source="email" />
      </SimpleForm>
    </Edit>
  );
};

export default userEdit;
