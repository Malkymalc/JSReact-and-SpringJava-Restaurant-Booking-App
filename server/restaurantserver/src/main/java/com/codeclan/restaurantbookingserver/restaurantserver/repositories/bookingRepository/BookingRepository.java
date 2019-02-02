package com.codeclan.restaurantbookingserver.restaurantserver.repositories.bookingRepository;

import com.codeclan.restaurantbookingserver.restaurantserver.models.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Long> {
    List<Booking> findBookingsByDate(Date date);
    List<Booking> findBookingsByCustomerId(Long customerId);

}
