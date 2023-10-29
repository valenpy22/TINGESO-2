package com.example.feeservice.services;

import com.example.feeservice.entity.FeeEntity;
import com.example.feeservice.models.StudentModel;
import com.example.feeservice.repositories.FeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDate;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;

@Service
public class FeeService {
    @Autowired
    FeeRepository feeRepository;

    @Autowired
    RestTemplate restTemplate;

    public List<FeeEntity> getFeesByRut(String rut){
        return feeRepository.getFeesByRut(rut);
    }

    public void saveFee(FeeEntity fee){
        feeRepository.save(fee);
    }

    public List<FeeEntity> getAllFees(){
        return feeRepository.findAll();
    }

    public void deleteAllFees(){
        feeRepository.deleteAll();
    }

    public Integer countPaidFeesByRut(String rut){
        return feeRepository.countPaidFeesByRut(rut);
    }

    public List<FeeEntity> getPaidFeesByRut(String rut){
        return feeRepository.getPaidFeesByRut(rut);
    }

    public FeeEntity getFeeByRutOrderByPaymentDateDesc(String rut){
        return feeRepository.getFeeByRutOrderByPaymentDateDesc(rut);
    }

    public FeeEntity getByRutAndNumber_of_fee(String rut, Integer number_of_fee){
        return feeRepository.getByRutAndNumber_of_fee(rut, number_of_fee);
    }

    public void payFee(String rut, int number_of_fee, String payment_date){
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        String date_now = LocalDate.now().format(formatter);
        int month = LocalDate.now().getMonthValue();
        int year = LocalDate.now().getYear();
        LocalDate max_date;
        LocalDate min_date;

        if(month < 10){
            max_date = LocalDate.parse("10/0"+month+"/"+year, formatter);
            min_date = LocalDate.parse("04/0"+month+"/"+year, formatter);
        }else{
            max_date = LocalDate.parse("10/"+month+"/"+year, formatter);
            min_date = LocalDate.parse("04/"+month+"/"+year, formatter);
        }

        LocalDate datenow = LocalDate.parse(date_now, formatter);
        FeeEntity fee = feeRepository.getByRutAndNumber_of_fee(rut, number_of_fee);

        if(datenow.isBefore(max_date) && datenow.isAfter(min_date)){
            fee.setState("PAID");
            fee.setPayment_date(payment_date);
        }else{
            fee.setState("PENDING");
        }
        feeRepository.save(fee);
    }

    public void generateFees(String rut, int number_of_fees){
        int month = getMonth();
        int fee_count = 1;

        for(int i = month; i < number_of_fees + month; i++){
            int currentMonth = (i%12) + 1;
            int currentYear = getYear() + (i / 12);

            FeeEntity fee = new FeeEntity();
            fee.setRut(rut);
            fee.setState("PENDING");
            fee.setNumber_of_fee(fee_count);

            if(currentMonth < 10){
                fee.setMax_date_payment("10/0" + currentMonth + "/" + currentYear);
            }else{
                fee.setMax_date_payment("10/" + currentMonth + "/" + currentYear);
            }
            calculateEachFeePriceByPrincipalDiscounts(rut);
            saveFee(fee);
            fee_count++;
        }
    }

    public Integer getMonth(){
        Date date = new Date();
        ZoneId timeZone = ZoneId.systemDefault();

        return date.toInstant().atZone(timeZone).getMonthValue();
    }

    public Integer getYear(){
        Date date = new Date();
        ZoneId timeZone = ZoneId.systemDefault();

        return date.toInstant().atZone(timeZone).getYear();
    }

    public Boolean areAnyFeesPaid(String rut){
        List<FeeEntity> feeEntities = feeRepository.getFeesByRut(rut);

        for(FeeEntity fee : feeEntities){
            if(fee.getState().equals("PAID")){
                return true;
            }
        }
        return false;
    }

    public Double calculateTotalDebt(String rut){
        List<FeeEntity> fees = feeRepository.getFeesByRut(rut);
        double total_debt = 0;

        for(FeeEntity fee : fees){
            if(!fee.getState().equals("PAID")){
                total_debt = total_debt + fee.getPrice();
            }
        }

        return total_debt;
    }

    public Double calculateTotalPaid(String rut){
        List<FeeEntity> paid_fees = feeRepository.getPaidFeesByRut(rut);

        double total_paid = 0;
        for(FeeEntity fee : paid_fees){
            total_paid += fee.getPrice();
        }

        return total_paid;
    }

    public String getLastPaymentDate(String rut){
        FeeEntity fee = feeRepository.getFeeByRutOrderByPaymentDateDesc(rut);
        return fee.getPayment_date();
    }

    public Double calculateTotalPriceByFees(String rut){
        List<FeeEntity> fees = feeRepository.getFeesByRut(rut);

        double total_price = 0;

        for(FeeEntity fee : fees){
            total_price += fee.getPrice();
        }

        return total_price;
    }

    public Boolean isFeeLate(FeeEntity fee){
        if(fee.getPayment_date() == null){
            String max_date_payment = fee.getMax_date_payment();

            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");

            LocalDate max_date = LocalDate.parse(max_date_payment, formatter);
            LocalDate date_now = LocalDate.now();
            if(max_date.isBefore(date_now) && fee.getState().equals("PENDING")){
                fee.setState("NOTPAID");
                feeRepository.save(fee);
            }

            return max_date.isBefore(date_now);
        }else{
            return !fee.getState().equals("PAID");
        }
    }

    public Integer countMonthsLate(String rut){
        List<FeeEntity> fees = feeRepository.getFeesByRut(rut);
        int months_late = 0;

        for(FeeEntity fee : fees){
            if(isFeeLate(fee)){
                months_late++;
            }
        }

        return months_late;
    }

    public void payFee(Integer feeId){
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        String date_now = LocalDate.now().format(formatter);
        int month = LocalDate.now().getMonthValue();
        int year = LocalDate.now().getYear();
        LocalDate max_date;
        LocalDate min_date;

        if(month < 10){
            max_date = LocalDate.parse("11/0"+month+"/"+year, formatter);
            min_date = LocalDate.parse("04/0"+month+"/"+year, formatter);
        }else{
            max_date = LocalDate.parse("11/"+month+"/"+year, formatter);
            min_date = LocalDate.parse("04/"+month+"/"+year, formatter);
        }

        LocalDate datenow = LocalDate.parse(date_now, formatter);
        FeeEntity fee = feeRepository.findById(feeId);

        if(datenow.isBefore(max_date) && datenow.isAfter(min_date)){
            fee.setState("PAID");
            fee.setPayment_date(date_now);
        }else{
            fee.setState(fee.getState());
        }
        feeRepository.save(fee);
    }

    public Double calculateInterestByMonthsLate(String rut){
        Integer months_late = countMonthsLate(rut);
        List<FeeEntity> fees = feeRepository.getFeesByRut(rut);
        double total_interest = 0.0;

        for(FeeEntity fee : fees){
            if(isFeeLate(fee)){
                if(months_late > 3){
                    total_interest = fee.getPrice()*0.15;
                    fee.setPrice(fee.getPrice()*1.15);
                }else if(months_late == 3){
                    total_interest = fee.getPrice()*0.09;
                    fee.setPrice(fee.getPrice()*1.09);
                }else if(months_late == 2){
                    total_interest = fee.getPrice()*0.06;
                    fee.setPrice(fee.getPrice()*1.06);
                }else if(months_late == 1){
                    total_interest = fee.getPrice()*0.03;
                    fee.setPrice(fee.getPrice()*1.03);
                }
            }
            feeRepository.save(fee);
        }
        return total_interest;
    }

    public Double calculateEachFeePriceByPrincipalDiscounts(String rut){
        StudentModel student = restTemplate.getForObject("http://student-service/students/"+rut, StudentModel.class);
        if(student.getPayment_method().equals("Cuotas")){
            List<FeeEntity> fees = getFeesByRut(rut);
            Double fee_price = student.getFinal_price()/student.getNumber_of_fees();

            for(FeeEntity fee : fees){
                fee.setPrice(fee_price);
                saveFee(fee);
            }
            return fee_price;
        }else{
            return 0.0;
        }
    }

    public Double calculateDiscountOnFeesByAverageScore(String rut, Double average_score){
        List<FeeEntity> fees = getFeesByRut(rut);
        double discount_average_score = 0.0;

        for(FeeEntity fee : fees){
            if(fee.getState().equals("PENDING")){
                if(average_score >= 950 && average_score <= 1000){
                    discount_average_score = fee.getPrice()*0.1;
                    fee.setPrice(fee.getPrice()*0.9);
                }else if(average_score >= 900 && average_score < 950){
                    discount_average_score = fee.getPrice()*0.05;
                    fee.setPrice(fee.getPrice()*0.95);
                }else if(average_score >= 850 && average_score < 900){
                    discount_average_score = fee.getPrice()*0.02;
                    fee.setPrice(fee.getPrice()*0.98);
                }
                saveFee(fee);
            }
        }
        return discount_average_score;
    }

    public Integer countFeesByRut(String rut){
        List<FeeEntity> fees = getFeesByRut(rut);
        return fees.size();
    }

    public Integer countLateFees(String rut){
        int late_fees = 0;
        List<FeeEntity> fees = getFeesByRut(rut);
        for(FeeEntity fee : fees){
            if(isFeeLate(fee)){
                late_fees++;
            }
        }
        return late_fees;
    }

}
