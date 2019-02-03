package com.codeclan.restaurantbookingserver.restaurantserver.components;

import com.codeclan.restaurantbookingserver.restaurantserver.models.Booking;
import com.codeclan.restaurantbookingserver.restaurantserver.models.Customer;
import com.codeclan.restaurantbookingserver.restaurantserver.models.Table;
import com.codeclan.restaurantbookingserver.restaurantserver.repositories.bookingRepository.BookingRepository;
import com.codeclan.restaurantbookingserver.restaurantserver.repositories.customerRepository.CustomerRepository;
import com.codeclan.restaurantbookingserver.restaurantserver.repositories.tableRepository.TableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@Component
    public class DataLoader implements ApplicationRunner {

        @Autowired
        CustomerRepository customerRepository;

        @Autowired
        TableRepository tableRepository;

        @Autowired
        BookingRepository bookingRepository;


        public DataLoader() {

        }

        public void run(ApplicationArguments args){

            DateFormat sfd = new SimpleDateFormat("dd-MM-yy");

            String newDate = "07-02-2019";
            Date date1 = null;
            try {
                date1 = sfd.parse(newDate);
            } catch (ParseException e) {
                e.printStackTrace();
            }


            Customer borna = new Customer("Borna", "Maticic", 0, "078745678");
            customerRepository.save(borna);

            Customer lorna = new Customer("Lorna", "Dickson", 0,"078745679" );
            customerRepository.save(lorna);

            Table table1 = new Table("1", 4);
            tableRepository.save(table1);

            Table table2 = new Table("2", 4);
            tableRepository.save(table2);

            Table table3 = new Table("3", 4);
            tableRepository.save(table3);

            Table table4 = new Table("4", 2);
            tableRepository.save(table4);

            Table table5 = new Table("5", 2);
            tableRepository.save(table5);

            Booking b1 = new Booking(date1, borna, 2);
            b1.addTable(table1);
            bookingRepository.save(b1);

            Booking b2 = new Booking(date1, lorna, 5);
            b2.addTable(table2);
            b2.addTable(table4);
            bookingRepository.save(b2);


//            table1.addBookings(b1);
//            tableRepository.save(table1);


        }

}
