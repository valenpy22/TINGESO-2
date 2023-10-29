package com.example.reportsummaryservice.models;

import lombok.Data;

@Data
public class StudentModel {
    private String rut;
    private String names;
    private String surnames;
    private String birthday;
    private String school_type;
    private String school_name;
    private Integer senior_year;
    private String payment_method;
    private Integer number_of_fees;
    private Double final_price;
}
