package com.example.feeservice.services;

import com.example.feeservice.entity.FeeEntity;
import com.example.feeservice.repositories.FeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.time.ZoneId;
import java.util.ArrayList;
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
            saveFee(fee);
            fee_count++;
        }
    }

    public void saveFee(FeeEntity fee){
        feeRepository.save(fee);
    }

    public int getMonth(){
        Date date = new Date();
        ZoneId timeZone = ZoneId.systemDefault();

        return date.toInstant().atZone(timeZone).getMonthValue();
    }

    public int getYear(){
        Date date = new Date();
        ZoneId timeZone = ZoneId.systemDefault();

        return date.toInstant().atZone(timeZone).getYear();
    }

    public boolean areAnyFeesPaid(String rut){
        List<FeeEntity> feeEntities = feeRepository.getFeesByRut(rut);

        for(FeeEntity fee : feeEntities){
            if(fee.getState().equals("PAID")){
                return true;
            }
        }
        return false;
    }

    public void deleteAll(){
        feeRepository.deleteAll();
    }


}
