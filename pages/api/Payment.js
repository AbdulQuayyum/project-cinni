import { setCookie, getCookie } from 'cookies-next';

export default function handler(req, res) {

    if (req.method === 'GET') {
        const UserPaymentMethod = getCookie('7890', { req, res });

        const UserPaymentMethodData = {
            UserPaymentMethod: UserPaymentMethod ? JSON.parse(UserPaymentMethod) : []
        }

        res.status(200).json(UserPaymentMethodData)
    } else if (req.method === 'POST') {
        const { UserPaymentMethod } = req.body

        setCookie('7890', JSON.stringify(UserPaymentMethod), { req, res, maxAge: 60 * 60 * 24 * 7 });
        res.status(200).json({ message: 'data saved successfully' });

    } else {
        // Handle other HTTP methods if needed
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}