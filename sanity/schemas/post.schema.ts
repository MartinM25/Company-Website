const schema = {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: "In one short sentence, what is the post about?",
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' }
    },
    {
      name: 'poster',
      title: 'Poster',
      type: 'image',
      description: "Upload a post image",
      validation: (Rule: any) => Rule.required(),
      options: {
        hotspot: true,
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array', 
      of: [{type: 'block'}],
      description: "Input the full data about the post",
      rows: 50,
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      options: {
        list: ['news','scholarship','ask', 'other']
      }
    },

    {
      name: 'releaseDate',
      title: 'Release date',
      type: 'date',
      options: {
        dateFormat: "DD-MM-YYYY",
        calendarTodayLabel: "Today"
      }
    },
  ]
}

export default schema;