const typeDefs = `
"Type Query is a basic type"
  type Query {
    students(orderBy: ORDER_BY = ASC): [Student]
    student(id_student: Int): Student
  }
  type Student {
        id_student: ID
        fio: String
        tel: String
        id_grupa: Int
  }

  enum ORDER_BY {
    ASC
    DESC
  }
`;

module.exports = typeDefs;