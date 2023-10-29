package com.example.feeservice.controllers;

import com.example.feeservice.entity.FeeEntity;
import com.example.feeservice.services.FeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/fees")
public class FeeController {
    @Autowired
    FeeService feeService;

    @GetMapping("/by-student/{rut}")
    public ResponseEntity<List<FeeEntity>> getFeesByRut(@PathVariable("rut") String rut){
        List<FeeEntity> fees = feeService.getFeesByRut(rut);

        if(fees.isEmpty()){
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(fees);

    }

    @GetMapping()
    public ResponseEntity<List<FeeEntity>> getFees(){
        List<FeeEntity> fees = feeService.getAllFees();
        if(fees.isEmpty()){
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(fees);

    }

    @PutMapping("/pay/{id}")
    public ResponseEntity<List<FeeEntity>> payFee(@PathVariable("id") Integer id) {

        feeService.payFee(id);

        List<FeeEntity> fees = feeService.getAllFees();
        if(fees.isEmpty()){
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(fees);
    }

    @DeleteMapping("/delete-all")
    public String deleteAllFees(){
        feeService.deleteAllFees();
        return "delete-all";
    }

    @GetMapping("/months-late/{rut}")
    public ResponseEntity<Integer> countMonthsLateByRut(@PathVariable("rut") String rut){
        return ResponseEntity.ok(feeService.countMonthsLate(rut));
    }

    @PutMapping("/score-discount/{rut}/{average_score}")
    public ResponseEntity<Double> applyAverageScoreDiscountToFees(@PathVariable("rut") String rut, @PathVariable("average_score") double average_score){
        return ResponseEntity.ok(feeService.calculateDiscountOnFeesByAverageScore(rut, average_score));
    }

    @GetMapping("/total-price-by-fees/{rut}")
    public ResponseEntity<Double> calculateTotalPriceByFees(@PathVariable("rut") String rut){
        double total_price = feeService.calculateTotalPriceByFees(rut);
        return ResponseEntity.ok(total_price);
    }

    @GetMapping("/count-fees/{rut}")
    public ResponseEntity<Integer> countTotalFees(@PathVariable("rut") String rut){
        Integer total_fees = feeService.countFeesByRut(rut);
        return ResponseEntity.ok(total_fees);
    }

    @GetMapping("/count-paid-fees/{rut}")
    public ResponseEntity<Integer> countPaidFees(@PathVariable("rut") String rut){
        Integer paid_fees = feeService.countPaidFeesByRut(rut);
        return ResponseEntity.ok(paid_fees);
    }

    @GetMapping("/total-paid/{rut}")
    public ResponseEntity<Double> calculateTotalPaid(@PathVariable("rut") String rut){
        return ResponseEntity.ok(feeService.calculateTotalPaid(rut));
    }

    @GetMapping("/last-payment/{rut}")
    public ResponseEntity<String> calculateLastPaymentDate(@PathVariable("rut") String rut){
        return ResponseEntity.ok(feeService.getLastPaymentDate(rut));
    }

    @GetMapping("/total-debt/{rut}")
    public ResponseEntity<Double> calculateTotalDebt(@PathVariable("rut") String rut){
        return ResponseEntity.ok(feeService.calculateTotalDebt(rut));
    }

    @GetMapping("/count-late-fees/{rut}")
    public ResponseEntity<Integer> countLateFees(@PathVariable("rut") String rut){
        return ResponseEntity.ok(feeService.countLateFees(rut));
    }

    @PutMapping("/generate-fees/{rut}/{number_of_fees}")
    public void generateFees(@PathVariable("rut") String rut, @PathVariable("number_of_fees") int number_of_fees){
        feeService.generateFees(rut, number_of_fees);
    }

    @PutMapping("/interest-months-late/{rut}")
    public ResponseEntity<Double> calculateInterestByMonthsLate(@PathVariable("rut") String rut){
        double interest_months_late = feeService.calculateInterestByMonthsLate(rut);
        return ResponseEntity.ok(interest_months_late);
    }

}
