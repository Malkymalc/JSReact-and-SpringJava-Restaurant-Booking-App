package com.codeclan.restaurantbookingserver.restaurantserver.repositories.customerRepository;


import com.codeclan.restaurantbookingserver.restaurantserver.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


public interface CustomerRepository extends JpaRepository<Customer, Long> {


}
