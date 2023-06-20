import { Client } from "@/Utilities/Client";

export default async function handler(req, res) {
    const Query = `*[_type == "User"]`;
    const data = await Client.fetch(Query)

    // console.log(data)

    if (data) {
        res.status(200).json(data)
        res.end()
    } else {
        res.json([])
        res.end()
    }
};

export const config = {
    api: {
        externalResolver: true,
    },
};