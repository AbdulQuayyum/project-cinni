import { setCookie, getCookie } from 'cookies-next';

export default function handler(req, res) {
    const options = {
        // secure: true, // Set the Secure flag
        // httpOnly: true,
        maxAge: 60 * 60 * 24 * 7, // Expires in 7 days
        secure: true, // Only send the cookie over HTTPS
        path: '/', // Set the cookie for the entire domain
        sameSite: 'strict', // Restrict the cookie to same-site requests
    };


    if (req.method === 'GET') {
        const UserAddress = getCookie('123456', { req, res })

        const UserAddressData = { UserAddress: UserAddress ? JSON.parse(UserAddress) : [] }

        res.status(200).json(UserAddressData)
    } else if (req.method === 'POST') {
        const { UserAddress } = req.body

        setCookie('123456', JSON.stringify(UserAddress), { req, res, options });
        res.status(200).json({ message: 'data saved successfully' });

    } else {
        // Handle other HTTP methods if needed
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}