package com.codeclan.restaurantbookingserver.restaurantserver.projections;

import com.codeclan.restaurantbookingserver.restaurantserver.models.Booking;
import com.codeclan.restaurantbookingserver.restaurantserver.models.Customer;
import org.springframework.data.rest.core.config.Projection;

@Projection(name= "embedCustomer", types = Booking.class)

public interface EmbedCustomer {
    Customer getCustomer();
}
