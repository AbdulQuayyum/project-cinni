import { setCookie, getCookie } from 'cookies-next';

export default function handler(req, res) {

    if (req.method === 'GET') {
        const UserAddress = getCookie('123456', { req, res });

        const UserAddressData = {
            UserAddress: UserAddress ? JSON.parse(UserAddress) : []
        }

        // console.log(UserAddressData)
        res.status(200).json(UserAddressData)
    } else if (req.method === 'POST') {
        const { UserAddress } = req.body

        setCookie('123456', JSON.stringify(UserAddress), { req, res, maxAge: 60 * 60 * 24 * 7 });
        // console.log(UserAddress)
        res.status(200).json({ message: 'data saved successfully' });

    } else {
        // Handle other HTTP methods if needed
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}