package com.codeclan.restaurantbookingserver.restaurantserver.controllers;


import com.codeclan.restaurantbookingserver.restaurantserver.models.Booking;
import com.codeclan.restaurantbookingserver.restaurantserver.repositories.bookingRepository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/bookings")
public class BookingController {

    @Autowired
    BookingRepository bookingRepository;

    @GetMapping("date/{date}")
    //@DateTimeFormat(pattern = "dd-MM-yy")
    public List<Booking> getAllBookingsByDate(@PathVariable @DateTimeFormat(pattern="yyyy-MM-dd") Date date){
        return bookingRepository.findBookingsByDate(date);
    }

    @GetMapping("bycustomer/{customerId}")
    public List<Booking> getAllBookingsByCustomerId(@PathVariable Long customerId){
        return bookingRepository.findBookingsByCustomerId(customerId);

    }

}
