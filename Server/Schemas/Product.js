export default {
    name: 'Product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'Image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'Name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'Slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'Name',
                maxLength: 90,
            }
        },
        {
            name: 'Price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'Details',
            title: 'Details',
            type: 'string',
        }
    ]
}