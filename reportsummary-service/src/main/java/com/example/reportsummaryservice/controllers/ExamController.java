package com.example.reportsummaryservice.controllers;

import com.example.reportsummaryservice.entities.ExamEntity;
import com.example.reportsummaryservice.services.ExamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;

@RestController
@RequestMapping("")
public class ExamController {
    @Autowired
    private ExamService examService;

    @GetMapping("/exams/file-upload")
    public String main(){
        return "file-upload";
    }

    @PostMapping("/exams/file-upload")
    public String upload(@RequestParam("file") MultipartFile file, RedirectAttributes redirectAttributes){
        examService.save(file);

        redirectAttributes.addFlashAttribute("messageFUS", "File uploaded succesfully");
        examService.readCSV("students_exams.csv");
        return "redirect:/file-upload";
    }

    @GetMapping("/exams/file-information")
    public String getExamList(Model model){
        List<ExamEntity> exams = examService.getExams();
        model.addAttribute("exams", exams);
        return "file-information";
    }

    @GetMapping("/report-summaries")
    public ResponseEntity<List<List<Object>>> getReportSummaries(){
        return ResponseEntity.ok(examService.getReportSummaries());
    }

}
