package com.codeclan.restaurantbookingserver.restaurantserver.components;

import com.codeclan.restaurantbookingserver.restaurantserver.models.*;
import com.codeclan.restaurantbookingserver.restaurantserver.repositories.bookingRepository.BookingRepository;
import com.codeclan.restaurantbookingserver.restaurantserver.repositories.customerRepository.CustomerRepository;
import com.codeclan.restaurantbookingserver.restaurantserver.repositories.orderedItemRepository.OrderedItemRepository;
import com.codeclan.restaurantbookingserver.restaurantserver.repositories.receiptItemRepository.ReceiptItemRepository;
import com.codeclan.restaurantbookingserver.restaurantserver.repositories.stockItemRepository.StockItemRepository;
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

        @Autowired
        OrderedItemRepository orderedItemRepository;

        @Autowired
        ReceiptItemRepository receiptItemRepository;

        @Autowired
        StockItemRepository stockItemRepository;


        public DataLoader() {

        }

        public void run(ApplicationArguments args){

            DateFormat sfd = new SimpleDateFormat("dd-MM-yyyy");

            String newDate = "07-02-2019";
            String newDateB = "14-02-2019";

            String newTimeC = "21:00:00";
            String newTime = "20:00:00";
            String newTimeB = "14:00:00";

            Date date1 = null;
            try {
                date1 = sfd.parse(newDate);
            } catch (ParseException e) {
                e.printStackTrace();
            }

            Date date2 = null;
            try {
                date2 = sfd.parse(newDateB);
            } catch (ParseException e) {
                e.printStackTrace();
            }



            Customer borna = new Customer("Borna", "Maticic", 0, "078745678");
            customerRepository.save(borna);

            Customer lorna = new Customer("Lorna", "Dickson", 0,"078745679" );
            customerRepository.save(lorna);

            Customer ross = new Customer("Ross", "Hancock", 50, "07713254673");
            customerRepository.save(ross);

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

            Booking b1 = new Booking(date1, newTime, borna, 2, table1);
            bookingRepository.save(b1);

            Booking b2 = new Booking(date1, newTime, lorna, 5, table2);

            bookingRepository.save(b2);

            Booking b3 = new Booking(date1, newTimeB, borna, 3,table3);
            bookingRepository.save(b3);

            Booking b4 = new Booking(date1, newTimeB, lorna, 4, table4);
            bookingRepository.save(b4);

            Booking b5 = new Booking(date1, newTimeC, lorna, 4, table5);
            bookingRepository.save(b5);

            Booking b6 = new Booking(date2, newTime, ross, 1, table3);
            bookingRepository.save(b6);

            StockItem stockItem1 = new StockItem("Merlot", 14.99);
            stockItemRepository.save(stockItem1);

            StockItem stockItem2 = new StockItem("Shiraz", 17.99);
            stockItemRepository.save(stockItem2);

            StockItem stockItem3 = new StockItem("Cheese", 5.50);
            stockItemRepository.save(stockItem3);

            StockItem stockItem4 = new StockItem("Cabarnet Savuignon", 20.99);
            stockItemRepository.save(stockItem4);

            OrderedItem orderedItem1 = new OrderedItem(b1, stockItem1);
            orderedItemRepository.save(orderedItem1);

            OrderedItem orderedItem2 = new OrderedItem(b1, stockItem2);
            orderedItemRepository.save(orderedItem2);

            OrderedItem orderedItem3 = new OrderedItem(b1, stockItem3);
            orderedItemRepository.save(orderedItem3);

            ReceiptItem receiptItem1 = new ReceiptItem("Merlot", 14.99, b2);
            receiptItemRepository.save(receiptItem1);

            ReceiptItem receiptItem2 = new ReceiptItem("Cabarnet Sauignon", 20.99, b2);
            receiptItemRepository.save(receiptItem2);


//            table1.addBookings(b1);
//            tableRepository.save(table1);


        }

}
