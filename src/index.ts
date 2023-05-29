import { ApolloServer } from '@apollo/server';
import { makeExecutableSchema } from '@graphql-tools/schema';
import typeDefs from './schema';
import resolvers from './resolvers';
import StarwarsAPI from './dataSources';
import { handlers, startServerAndCreateLambdaHandler } from '@as-integrations/aws-lambda';

interface ContextValue {
  dataSources: {
    starwarsAPI: StarwarsAPI;
  };
}

let peopleSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

const server = new ApolloServer<ContextValue>({
  schema: peopleSchema
});


  export const graphqlHandler = startServerAndCreateLambdaHandler(server, handlers.createAPIGatewayProxyEventV2RequestHandler(), {
    context: async () => {
      const { cache } = server;
     return {
       dataSources: {
        starwarsAPI: new StarwarsAPI({ cache }),
       },
     };
   },
  })

