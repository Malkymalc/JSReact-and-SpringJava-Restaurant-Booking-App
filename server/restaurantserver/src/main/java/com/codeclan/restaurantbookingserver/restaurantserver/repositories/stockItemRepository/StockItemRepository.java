package com.codeclan.restaurantbookingserver.restaurantserver.repositories.stockItemRepository;

import com.codeclan.restaurantbookingserver.restaurantserver.models.StockItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StockItemRepository extends JpaRepository<StockItem, Long> {
}
