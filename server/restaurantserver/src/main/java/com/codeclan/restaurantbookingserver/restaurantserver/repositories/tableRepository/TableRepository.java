package com.codeclan.restaurantbookingserver.restaurantserver.repositories.tableRepository;

import com.codeclan.restaurantbookingserver.restaurantserver.models.Table;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TableRepository extends JpaRepository<Table, Long > {
}
