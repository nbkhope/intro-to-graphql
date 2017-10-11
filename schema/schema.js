const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
} = require('graphql');

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: {
      type: GraphQLString
    },
    firstName: {
      type: GraphQLString
    },
    age: {
      type: GraphQLInt
    },
  }
});

const users = [
  {
    id: '1',
    firstName: 'Anderson',
    age: 37
  },
  {
    id: '7',
    firstName: 'Maria',
    age: 28
  },
]

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: {
        id: {
          type: GraphQLString,
        }
      },
      resolve(parentValue, args) {
        return users.find(user => user.id === args.id);
      },
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
});
