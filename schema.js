const {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, GraphQLList}=require('graphql');
const data = require('./data')
const userType = new GraphQLObjectType({
    name: 'User',
    fields: ()=>( {
        id:{type:GraphQLString},
        first_name:{type:GraphQLString},
        last_name:{type:GraphQLString},
        email:{type:GraphQLString},
        gender:{type:GraphQLString},
        airport:{type:GraphQLString}

    })
  });
  
  // Define the Query type
  const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
      
      users:{type:  new GraphQLList(userType),
      resolve: (parent, args) => {
          return data
        }}
      ,
      user: {
        type: userType,
        // `args` describes the arguments that the `user` query accepts
        args: {
          id: { type: GraphQLString }
        },
        resolve: (parent, args) => {
          return data.find((user)=> user.id===args.id)
        }
      }
    }
    }
  );
  
 

  module.exports=new GraphQLSchema({query: queryType});