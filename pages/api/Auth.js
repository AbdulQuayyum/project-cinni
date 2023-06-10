import { Client } from "@/Utilities/Client";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const User = req.body

        Client.createIfNotExists(User).then(() => {
            res.status(200).json('Login successful')
            res.end()
        })
    }
}

export const config = {
    api: {
        externalResolver: true,
    },
}
