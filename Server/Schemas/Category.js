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
            title: 'Description',
            name: 'Description',
            type: 'text',
            rows: 3
        },
        {
            title: 'Parent Category',
            name: 'ParentCategory',
            type: 'reference',
            to: [{ type: 'Category' }],
            description: 'Select a parent category (optional)'
        }
    ]
}
