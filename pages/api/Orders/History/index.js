import { Client } from "@/Utilities/Client";

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const Orders = await Client.fetch(`*[_type == "Order" && User._rev == $UserID]`, {
            UserID: req.User._id,
        });
        res.send(Orders);
    }
    else {
        // res.status(405).json({ message: 'Error fetching data' });
        console.error(error)
    }
}