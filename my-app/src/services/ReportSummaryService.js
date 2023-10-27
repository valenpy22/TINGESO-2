import axios from "axios";

const API_URL = "http://localhost:8080/report-summary";

class ReportSummaryService {
    async getReportSummary() {
        const response = await axios.get(API_URL);
        return response.data;
    }
}

export default new ReportSummaryService();