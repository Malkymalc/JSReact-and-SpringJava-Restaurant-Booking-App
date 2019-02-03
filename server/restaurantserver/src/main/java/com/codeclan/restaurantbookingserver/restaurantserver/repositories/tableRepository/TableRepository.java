package com.codeclan.restaurantbookingserver.restaurantserver.repositories.tableRepository;

import com.codeclan.restaurantbookingserver.restaurantserver.models.Table;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TableRepository extends JpaRepository<Table, Long >, TableRepositoryCustom {
    //List<Table> findAllTables();

}
