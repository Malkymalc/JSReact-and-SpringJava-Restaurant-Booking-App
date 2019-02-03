package com.codeclan.restaurantbookingserver.restaurantserver.controllers;


import com.codeclan.restaurantbookingserver.restaurantserver.models.Table;
import com.codeclan.restaurantbookingserver.restaurantserver.repositories.tableRepository.TableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/tables")
public class TableController {

    @Autowired
    TableRepository tableRepository;

    @GetMapping("bookingdate/{date}")
    public List<Table> getAllTablesByDate(@PathVariable @DateTimeFormat(pattern="yyyy-MM-dd") Date date){
        return tableRepository.findAllTablesByDate(date);
    }

//    @GetMapping("bookingdatefree/{date}")
//    public List<Table> getAllEmptyTablesByDate(@PathVariable @DateTimeFormat(pattern="yyyy-MM-dd") Date date){
//        List<Table>allTables = tableRepository.findAllTables();
//        List<Table>bookedTables =tableRepository.getAllTablesByDate(date);
//        for (Table table : bookedTables){
//            allTables.remove(table);
//        }
//        return allTables;
//    }

    @RequestMapping("customers/{customerId}")
    public List<Table>getTableByCustomerId(@PathVariable Long customerId){
        return tableRepository.findTableByCustomerId(customerId);
    }

    @GetMapping("findfreetables/{date}/{start_time}/{end_time}")
    public List<Table> findEmptyTablesByDateAndTime
            (@PathVariable @DateTimeFormat(pattern="yyyy-MM-dd") Date date,
             @PathVariable @DateTimeFormat(pattern="HH:mm:ss") Date start_time,
             @PathVariable @DateTimeFormat(pattern="HH:mm:ss") Date end_time){
        return tableRepository.findEmptyTablesByDateAndTime(date, start_time, end_time);
    }
}
