const { allStudents, getStudentById } = require('./students');

const resolvers = {
    students: (args) => {
        return allStudents(args);
    },
    student: (args) => {
        return getStudentById(args);
    }
};

module.exports = resolvers;