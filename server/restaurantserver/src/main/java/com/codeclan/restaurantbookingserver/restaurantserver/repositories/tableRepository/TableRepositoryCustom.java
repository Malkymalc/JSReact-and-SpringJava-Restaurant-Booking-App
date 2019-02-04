package com.codeclan.restaurantbookingserver.restaurantserver.repositories.tableRepository;

import com.codeclan.restaurantbookingserver.restaurantserver.models.Table;

import java.util.Date;
import java.util.List;

public interface TableRepositoryCustom {
    List<Table>findAllTablesByDate(Date date);
    List<Table>findTableByCustomerId(Long customerId);
    List<Table>findEmptyTablesByDateAndTime(Date date, Date start_time, Date end_time);
//    List<Table> getAllTablesByDate(Date date);
}
