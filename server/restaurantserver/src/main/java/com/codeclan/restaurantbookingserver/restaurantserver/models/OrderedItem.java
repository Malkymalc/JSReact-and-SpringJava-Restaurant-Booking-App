package com.codeclan.restaurantbookingserver.restaurantserver.models;

import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import javax.persistence.Table;

@Entity
@Table(name = "ordereditem")
public class OrderedItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @ManyToOne
    @JoinColumn(name = "booking_id", nullable = false)
    @Cascade(org.hibernate.annotations.CascadeType.REMOVE)
    private Booking booking;

    @ManyToOne
    @JoinColumn(name = "stockitem_id", nullable = false)
    private StockItem stockItem;

    public OrderedItem(Booking booking, StockItem stockItem) {
        this.stockItem = stockItem;
        this.booking = booking;
    }

    public OrderedItem() {
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        this.Id = id;
    }

    public StockItem getStockItem() {
        return stockItem;
    }

    public void setStockItem(StockItem stockItem) {
        this.stockItem = stockItem;
    }

    public Booking getBooking() {
        return booking;
    }

    public void setBooking(Booking booking) {
        this.booking = booking;
    }
}
