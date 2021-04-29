import { Create, SimpleForm, TextInput } from 'react-admin';

const UserCreate = (props) => {
    return (
        <Create title='Create a user' {...props}>
            <SimpleForm>
                <TextInput source='name' />
                <TextInput source='email' />
            </SimpleForm>
        </Create>
    );
}
 
export default UserCreate;