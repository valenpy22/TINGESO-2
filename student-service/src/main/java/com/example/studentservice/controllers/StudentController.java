package com.example.studentservice.controllers;

import com.example.studentservice.entities.StudentEntity;
import com.example.studentservice.models.FeeModel;
import com.example.studentservice.services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/students")
public class StudentController {
    @Autowired
    StudentService studentService;

    @GetMapping
    public ResponseEntity<List<StudentEntity>> getStudents(){
        List<StudentEntity> students = studentService.getStudents();
        if(students.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(students);
    }

    @GetMapping("/{rut}")
    public ResponseEntity<StudentEntity> findByRut(@PathVariable("rut") String rut){
        StudentEntity student = studentService.findByRut(rut);
        if(student == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(student);
    }

    @PostMapping("/new-student")
    public void saveStudent(@RequestBody StudentEntity student){
        studentService.saveStudent(student);
    }

    @DeleteMapping("/delete-all")
    public void deleteStudents(){
        studentService.deleteStudents();
    }

    @GetMapping("/fees/{rut}")
    public ResponseEntity<List<FeeModel>> getFees(@PathVariable("rut") String rut){
        StudentEntity student = studentService.findByRut(rut);
        if(student == null){
            return ResponseEntity.notFound().build();
        }
        List<FeeModel> fees = studentService.getFees(rut);
        return ResponseEntity.ok(fees);
    }

}
