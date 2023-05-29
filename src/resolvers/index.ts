import { mergeResolvers } from '@graphql-tools/merge'
import { peopleResolvers } from './people'

 
const resolvers = [peopleResolvers]
 
export default mergeResolvers(resolvers)