package com.codeclan.restaurantbookingserver.restaurantserver.repositories.bookingRepository;

import com.codeclan.restaurantbookingserver.restaurantserver.models.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Booking, Long> {
}
