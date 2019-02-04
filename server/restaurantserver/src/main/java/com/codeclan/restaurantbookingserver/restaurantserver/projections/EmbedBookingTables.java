package com.codeclan.restaurantbookingserver.restaurantserver.projections;


import com.codeclan.restaurantbookingserver.restaurantserver.models.Booking;
import com.codeclan.restaurantbookingserver.restaurantserver.models.Customer;
import com.codeclan.restaurantbookingserver.restaurantserver.models.Table;
import org.springframework.data.rest.core.config.Projection;

import java.util.Date;
import java.util.List;

@Projection(name = "embedBookingTables", types= Booking.class)
public interface EmbedBookingTables {
    long getId();
    Date getDate();
    Customer getCustomer();
    int getHeadCount();
    List<Table> getTables();

}
