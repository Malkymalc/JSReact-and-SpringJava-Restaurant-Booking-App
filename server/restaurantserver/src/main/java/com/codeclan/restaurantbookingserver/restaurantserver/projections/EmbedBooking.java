package com.codeclan.restaurantbookingserver.restaurantserver.projections;


import com.codeclan.restaurantbookingserver.restaurantserver.models.Customer;
import org.springframework.data.rest.core.config.Projection;

@Projection(name= "embedBooking", types = Customer.class)

public interface EmbedBooking {
    long getid();
    String getFirstName();
    String getLastName();
    int getDiscount();
    String getPhoneNumber();
}
