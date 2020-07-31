import * as React from "react";
import { 
  List, 
  Datagrid, 
  TextField, 
  ReferenceField, 
  EditButton, 
  Edit,
  SimpleForm,
  TextInput, 
  ReferenceInput, 
  SelectInput, 
  Create
} from 'react-admin';

export const PostCreate = props => (
  <Create {...props}>
      <SimpleForm>
          <ReferenceInput source="userId" reference="users">
              <SelectInput optionText="name" />
          </ReferenceInput>
          <TextInput source="title" />
          <TextInput multiline source="body" />
      </SimpleForm>
  </Create>
);

export const PostEdit = props => (
  <Edit {...props}>
      <SimpleForm>
          <ReferenceInput source="userId" reference="users">
            <SelectInput optionText="name" />
          </ReferenceInput>
          <TextInput source="title" />
          <TextInput multiline source="body" />
      </SimpleForm>
  </Edit>
);

export const PostList = props => (
    <List {...props}>
        <Datagrid>
          <TextField source="id" />
          <ReferenceField source="userId" reference="users">
            <TextField source="name" />
          </ReferenceField>
          <TextField source="title" />
          <TextField source="body" />
          <EditButton />
        </Datagrid>
    </List>
);