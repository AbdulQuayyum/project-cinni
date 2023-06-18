import { Client } from "@/Utilities/Client";

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const Order = await Client.fetch(`*[_type == "Order" && _id == $id][0]`, {
            id: req.query.id,
        });
        res.send(Order);
    }
    else {
        res.status(405).json({ message: 'Method Not Allowed' });
        console.error(error)
    }
}