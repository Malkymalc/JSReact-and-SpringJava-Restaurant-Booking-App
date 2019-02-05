package com.codeclan.restaurantbookingserver.restaurantserver.components;

import com.codeclan.restaurantbookingserver.restaurantserver.models.Booking;
import com.codeclan.restaurantbookingserver.restaurantserver.models.Customer;
import com.codeclan.restaurantbookingserver.restaurantserver.models.Table;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;
import org.springframework.stereotype.Component;

@Component
public class ConfigureAdapter extends RepositoryRestConfigurerAdapter {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config){
        config.exposeIdsFor(Booking.class);
        config.exposeIdsFor(Customer.class);
        config.exposeIdsFor(Table.class);
    }
}
