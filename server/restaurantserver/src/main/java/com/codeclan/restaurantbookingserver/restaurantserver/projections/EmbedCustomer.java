package com.codeclan.restaurantbookingserver.restaurantserver.projections;

import com.codeclan.restaurantbookingserver.restaurantserver.models.Booking;
import com.codeclan.restaurantbookingserver.restaurantserver.models.Customer;
import com.codeclan.restaurantbookingserver.restaurantserver.models.Table;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name= "embedCustomer", types = Booking.class)

public interface EmbedCustomer {
    String getDate();
    String getTime();
    Customer getCustomer();
    int getHeadCount();
    List<Table> getTableList();
}
