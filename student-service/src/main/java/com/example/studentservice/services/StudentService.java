package com.example.studentservice.services;

import com.example.studentservice.entities.StudentEntity;
import com.example.studentservice.models.FeeModel;
import com.example.studentservice.models.DiscountModel;
import com.example.studentservice.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@Service
public class StudentService {
    @Autowired
    StudentRepository studentRepository;

    @Autowired
    RestTemplate restTemplate;

    public ArrayList<StudentEntity> getStudents(){
        return (ArrayList<StudentEntity>) studentRepository.findAll();
    }

    public String getSchoolType(String rut){
        return studentRepository.findSchoolType(rut);
    }

    public int getSeniorYear(String rut){
        return studentRepository.findSeniorYear(rut);
    }

    public StudentEntity findByRut(String rut){
        return studentRepository.findByRut(rut);
    }

    public void saveStudent(StudentEntity student){
        studentRepository.save(student);
    }

    public void deleteStudents(){
        studentRepository.deleteAll();
    }

    public List<FeeModel> getFees(String rut){
        return restTemplate.getForObject("http://fee-service/fees/bystudents/"+rut, List.class);
    }

    public List<DiscountModel> getDiscounts(String rut){
        return restTemplate.getForObject("http://reportsummary-service/discounts/bystudents/"+rut, List.class);
    }

}

