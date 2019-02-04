package com.codeclan.restaurantbookingserver.restaurantserver.repositories.orderedItemRepository;

import com.codeclan.restaurantbookingserver.restaurantserver.models.OrderedItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderedItemRepository extends JpaRepository<OrderedItem, Long> {
}
