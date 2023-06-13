export default {
    title: 'Category',
    name: 'Category',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'Title',
            type: 'string',
            // validation: Rule => Rule.required().max(50)
        },
        {
            name: 'Image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true,
            }
        },
    ]
}
