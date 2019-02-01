package com.codeclan.restaurantbookingserver.restaurantserver.repositories.customerRepository;


import com.codeclan.restaurantbookingserver.restaurantserver.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {


}
