import axios from 'axios'
import jwt_decode from 'jwt-decode'

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const CreateOrGetUser = async (response, AddUser) => {
    const decoded = jwt_decode(response.credential)

    const { name, picture, sub, jti, email } = decoded

    const User = {
        _id: sub,
        _type: 'User',
        UserName: name,
        Image: picture,
        Email: email,
        token: jti,
    }

    AddUser(User);

    await axios.post(`${BASE_URL}/api/Auth`, User);
};
