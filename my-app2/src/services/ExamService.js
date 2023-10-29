import axios from "axios"
const API_URL = "http://localhost:8080/exams/";

class ExamService{
    uploadExam(file){
        return axios.post(`http://localhost:8080/exams/file-upload`, file);
    }

    getExams(){
        return axios.get(`http://localhost:8080/exams/file-information`);
    }
    
    deleteExams(){
        return axios.delete(`http://localhost:8080/exams/delete-all`);
    }
}

export default new ExamService();