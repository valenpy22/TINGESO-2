import axios from "axios";

class StudentService{
    getStudents(){
        return axios.get(`http://localhost:8080/students`);
    }

    saveStudent(student){
        return axios.post(`http://localhost:8080/students/new-student`, student);
    }
}

export default new StudentService();