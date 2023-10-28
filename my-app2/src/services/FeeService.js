import axios from "axios";

const API_URL = "http://localhost:8080/fees";

class FeeService{
    getFees(){
        return axios.get(API_URL);
    }

    getFeesByRut(rut){
        return axios.get(`http://localhost:8080/fees/by-student/${rut}`);
    }

    payFee(id){
        return axios.put(`http://localhost:8080/fees/pay/${id}`);
    }

    deleteFees(){
        return axios.delete(`http://localhost:8080/fees/delete-all`);
    }

    generateFees(rut, number_of_fees){
        return axios.post(`http://localhost:8080/fees/generate-fees/${rut}/${number_of_fees}`);
    }

}

export default new FeeService();