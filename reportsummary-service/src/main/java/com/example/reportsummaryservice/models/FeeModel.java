package com.example.reportsummaryservice.models;

import lombok.Data;

@Data
public class FeeModel {
    private String rut;
    private String max_date_payment;
    private String state;
    private String payment_date;
    private double price;
    private Integer number_of_fee;
}
