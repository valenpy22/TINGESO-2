import axios from "axios"
const API_URL = "http://localhost:8080/exams/";

class ExamService{
    uploadExam(file){
        return axios.post(`http://localhost:8080/exams/file-upload`, file);
    }
}

export default new ExamService();