package com.codeclan.restaurantbookingserver.restaurantserver.components;

import com.codeclan.restaurantbookingserver.restaurantserver.models.Customer;
import com.codeclan.restaurantbookingserver.restaurantserver.models.Table;
import com.codeclan.restaurantbookingserver.restaurantserver.repositories.customerRepository.CustomerRepository;
import com.codeclan.restaurantbookingserver.restaurantserver.repositories.tableRepository.TableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

    @Component
    public class DataLoader implements ApplicationRunner {

        @Autowired
        CustomerRepository customerRepository;

        @Autowired
        TableRepository tableRepository;



        public DataLoader() {

        }

        public void run(ApplicationArguments args){
            Customer borna = new Customer("Borna", "Maticic", 0, "078745678");
            customerRepository.save(borna);

            Customer lorna = new Customer("Lorna", "Dickson", 0,"078745679" );
            customerRepository.save(lorna);

            Table table1 = new Table("1", 4);
            tableRepository.save(table1);
        }

}
