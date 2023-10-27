package com.example.studentservice.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PaymentModel {
    private String rut;
    private double discount_school_type;
    private double discount_senior_year;
    private double discount_average_score;
    private double interest_months_late;
    private double total_price;
}
