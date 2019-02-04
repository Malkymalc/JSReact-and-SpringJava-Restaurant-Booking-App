package com.codeclan.restaurantbookingserver.restaurantserver.repositories.bookingRepository;

import com.codeclan.restaurantbookingserver.restaurantserver.models.Booking;

import java.util.Date;
import java.util.List;

public interface BookingRepositoryCustom {
    List<Booking>findAllBookingsByCustomerIdAndBeforeDate(Long customerId, Date date);
}
