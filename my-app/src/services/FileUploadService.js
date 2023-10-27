import axios from "axios";

const API_URL = "http://localhost:8080/file-upload";

class FileUploadService {
    saveFile(file) {
        return axios.post(API_URL, file);
    }
}

export default new FileUploadService();