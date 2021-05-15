import React from 'react';
import { Create, SimpleForm, TextInput, NumberInput } from 'react-admin';

const userCreate = props => {
  return (
    <Create title="Create Users" {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <NumberInput source="age"/>
        <TextInput source="email" />
      </SimpleForm>
    </Create>
  );
};

export default userCreate;
