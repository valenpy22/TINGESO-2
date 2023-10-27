package com.example.studentservice.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "students")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class StudentEntity {
    @Id
    @NotNull
    private String rut;
    private String names;
    private String surnames;
    private String birthday;
    private String school_type;
    private String school_name;
    private int senior_year;
}
