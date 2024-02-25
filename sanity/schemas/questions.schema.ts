const schema = {
  name: 'questions',
  title: 'Common Questions',
  type: 'document',
  fields: [
    {
      name: "question",
      title: "Question",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "answer",
      title: "Answer",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
  ]
}
export default schema 