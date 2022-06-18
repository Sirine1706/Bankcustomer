const {
getStudent,
createStudent,
getStudents,
deleteStudent,
updateStudent, } = 
require ('../controllers/students.controllers')
const  router = require ("express").Router();

router.get('/',getStudents)
router.get('/:studentId',getStudent) // :studenId is the parameter that will be replaced
router.delete('/:studentId',deleteStudent)
router.put('/:studentId',updateStudent)
router.post('/',createStudent)

module.exports = router