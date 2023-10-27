import axios from "axios";

class FeeService{
    async getFees(){
        const response = await axios.get("http://localhost:8080/fees");
        return response.data;
    }
}

export default new FeeService();