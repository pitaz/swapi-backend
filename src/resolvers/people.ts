export const peopleResolvers = {
  Query: {
    person: async (_: any, { id }:{id: string}, { dataSources }: {dataSources: any}) => {
      return dataSources.starwarsAPI.getPerson(id);
    },
   people: async (_: any, {limit, page, search}: IParams, { dataSources }: {dataSources: any}) => {
      return dataSources.starwarsAPI.getPeople(limit, page, search);
    },
  },
};