package com.codeclan.restaurantbookingserver.restaurantserver.repositories.receiptItemRepository;

import com.codeclan.restaurantbookingserver.restaurantserver.models.ReceiptItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReceiptItemRepository extends JpaRepository<ReceiptItem, Long> {
}
