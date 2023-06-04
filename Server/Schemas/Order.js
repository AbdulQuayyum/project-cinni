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
            // validation: Rule => Rule.required()
        },
        {
            title: 'Products',
            name: 'Products',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'Product' }] }],
            // validation: Rule => Rule.required().min(1)
        },
        {
            title: 'Total Amount',
            name: 'TotalAmount',
            type: 'number',
            // validation: Rule => Rule.required().positive()
        },
        {
            title: 'Order Date',
            name: 'OrderDate',
            type: 'datetime',
            // validation: Rule => Rule.required()
        }
    ]
}
