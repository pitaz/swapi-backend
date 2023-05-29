import { mergeTypeDefs } from '@graphql-tools/merge'
import PeopleType from './people'
 
const types = [PeopleType]

 
export default mergeTypeDefs(types)