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
            name: 'Category',
            title: 'Category',
            type: 'string',
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
        },
        {
            name: 'UserID',
            title: 'UserID',
            type: 'string',
        },
        {
            name: 'PostedBy',
            title: 'PostedBy',
            type: 'PostedBy',
        },
        {
            name: 'Comments',
            title: 'Comments',
            type: 'array',
            of: [{ type: 'Comment' }],
        },
    ]
}