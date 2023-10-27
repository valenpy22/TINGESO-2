import axios from "axios";

const API_URL = "http://localhost:8080/new-student";
const API_URL_LIST = "http://localhost:8080/students";

class StudentService {
    saveStudent(student){
        return axios.post(API_URL, student);
    }

    async listStudents(){
        const response = await axios.get(API_URL_LIST);
        return response.data;
    }
}

export default new FileUploadService();