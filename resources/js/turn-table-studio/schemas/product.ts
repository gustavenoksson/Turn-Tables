export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
          },
          {
            name: 'currency',
            title: 'Currency',
            type: 'string',
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
          },
          {
            name: 'subcategory',
            title: 'Subcategory',
            type: 'reference',
            to: [{type: 'subcategory'}]
          },
    ],
    preview: {
        select: {
            title: 'title',
            image: 'image',
        },
    },
};