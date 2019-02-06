package com.codeclan.restaurantbookingserver.restaurantserver.projections;

import com.codeclan.restaurantbookingserver.restaurantserver.models.*;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name= "embedCustomer", types = Booking.class)

public interface EmbedCustomer {
    Long getId();
    String getDate();
    String getTime();
    Customer getCustomer();
    int getHeadCount();
    Table getTable();
    List<ReceiptItem> getReceiptItems();
    List<OrderedItem> getOrderedItems();

}
