import axios from 'axios';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
            const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
            const tokenWithWriteAccess = process.env.NEXT_PUBLIC_SANITY_TOKEN;

            const { data } = await axios.post(
                `https://${projectId}.api.sanity.io/v1/data/mutate/${dataset}?returnIds=true`,
                {
                    mutations: [
                        {
                            create: {
                                _type: 'Order',
                                CreatedAt: new Date().toISOString(),
                                ...req.body,
                            },
                        },
                    ],
                },
                {
                    headers: {
                        'Content-type': 'application/json',
                        Authorization: `Bearer ${tokenWithWriteAccess}`,
                    },
                }
            );

            res.status(201).json({ OrderID: data.results[0].id });
        } catch (error) {
            console.error('Error creating order:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}

// handler.post(async (req, res) => {
//     const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
//     const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
//     const tokenWithWriteAccess = process.env.NEXT_PUBLIC_SANITY_TOKEN
//     const { data } = await axios.post(
//         `https://${projectId}.api.sanity.io/v1/data/mutate/${dataset}?returnIds=true`,
//         {
//             mutations: [
//                 {
//                     create: {
//                         _type: 'Order',
//                         createdAt: new Date().toISOString(),
//                         ...req.body,
//                         UserName: req.User.Uame,
//                         User: {
//                             _type: 'reference',
//                             _ref: req.User._id,
//                         },
//                     },
//                 },
//             ],
//         },
//         {
//             headers: {
//                 'Content-type': 'application/json',
//                 Authorization: `Bearer ${tokenWithWriteAccess}`,
//             },
//         }
//     );

//     res.status(201).send(data.results[0].id);

// })

// export default handler