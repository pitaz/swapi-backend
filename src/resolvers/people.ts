export const peopleResolvers = {
  Query: {
   people: async (_: any, {limit, page, search}: IParams, { dataSources }: {dataSources: any}) => {
      return dataSources.starwarsAPI.getPeople(limit, page, search);
    },
  },
};