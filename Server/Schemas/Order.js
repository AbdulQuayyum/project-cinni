export default {
    title: 'Order',
    name: 'Order',
    type: 'document',
    fields: [
        {
            title: 'User',
            name: 'User',
            type: 'reference',
            to: [{ type: 'User' }],
            options: {
                disableNew: true,
            },
        },
        {
            name: 'UserName',
            title: 'UserName',
            type: 'string',
        },
        {
            name: 'Charges',
            title: 'Charges',
            type: 'number',
        },
        {
            name: 'TotalPrice',
            title: 'TotalPrice',
            type: 'number',
        },
        {
            name: 'PaymentMethod',
            title: 'PaymentMethod',
            type: 'string',
        },
        {
            title: 'ShippingAddress',
            name: 'ShippingAddress',
            type: 'ShippingAddress',
        },
        {
            title: 'PaymentResult',
            name: 'PaymentResult',
            type: 'PaymentResult',
        },
        {
            title: 'Order Items',
            name: 'OrderItems',
            type: 'array',
            of: [
                {
                    title: 'Order Item',
                    type: 'OrderItem',
                },
            ],
        },
        {
            title: 'IsPaid',
            name: 'IsPaid',
            type: 'boolean',
        },
        {
            title: 'Paid Date',
            name: 'PaidAt',
            type: 'datetime',
        },
        {
            title: 'IsDelivered',
            name: 'IsDelivered',
            type: 'boolean',
        },
        {
            title: 'DeliveredAt',
            name: 'DeliveredAt',
            type: 'datetime',
        },
        {
            title: 'CreatedAt',
            name: 'CreatedAt',
            type: 'datetime',
        },
    ],
}
