import { Client } from "@/Utilities/Client";

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const { UserID } = req.query;
        try {
            const Orders = await Client.fetch(`*[_type == "Order" && User._ref == '${UserID}']`);
            res.send(Orders);
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}