const query = require('../DB/database');

async function allStudents(args) {
    const orderBy = args.orderBy;
    const sql = `
        select * from student
        order by fio ${orderBy}
    `;
    try {
        const result = await query(sql);
        return result.rows;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

async function getStudentById(args) {
    const id = args.id_student;
    const sql = `
        select * from student
        where id_student=${id}
    `;
    try {
        const result = await query(sql);
        return result.rows[0];
    } catch (err) {
        console.log(err);
        throw err;
    }
}

module.exports = { allStudents, getStudentById }