export default `
type TAttr {
    name: String
    height: String
    mass: String
    gender: String
    homeworld: String
  }

type TPeople {
    count: Int
    next: String 
    previous: String, 
    results: [TAttr]
  }


  type Query {
    person(id: Int!): TAttr,
    people(limit: Int, page: String, search: String): TPeople
  }`