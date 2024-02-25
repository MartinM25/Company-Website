const schema = {
  name: 'team',
  title: 'Team',
  type: 'document',
  fields: [
    {
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      description: "Provide the first and last name of the team member",
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'profile',
      title: 'Profile Image',
      type: 'image',
      description: "Upload a picture of the team member",
      validation: (Rule: any) => Rule.required(),
      options: {
        hotspot: true,
      }
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      description: "Provide the work position",
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'contact',
      title: 'Contact',
      type: 'number',
      description: "Provide the phone number of the team member",
      validation: (Rule: any) => Rule.required()
    },
  ]
}

export default schema 