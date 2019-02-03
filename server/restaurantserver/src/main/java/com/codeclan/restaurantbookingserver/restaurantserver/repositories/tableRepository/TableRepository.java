package com.codeclan.restaurantbookingserver.restaurantserver.repositories.tableRepository;

import com.codeclan.restaurantbookingserver.restaurantserver.models.Table;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Date;
import java.util.List;

public interface TableRepository extends JpaRepository<Table, Long >, TableRepositoryCustom {
//    @Query(value = "SELECT *" +
//            " FROM tables" +
//            " WHERE tables.id NOT IN (" +
//            " SELECT DISTINCT tables.id" +
//            " FROM ((tables LEFT JOIN tables_bookings ON tables.id = tables_bookings.table_id) LEFT JOIN bookings ON bookings.id = tables_bookings.booking_id)" +
//            " WHERE (bookings.date = ?1 AND bookings.time BETWEEN ?2 AND ?3));",
//    nativeQuery = true)
//    List<Table> findEmptyTablesByDateAndTime(Date date, Date start_time, Date end_time);
    //List<Table> findAllTables();

}
