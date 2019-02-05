package com.codeclan.restaurantbookingserver.restaurantserver.models;

import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import javax.persistence.Table;

@Entity
@Table(name = "receiptitem")
public class ReceiptItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column(name = "name")
    private String name;

    @Column(name = "price")
    private double price;

    @ManyToOne
    @JoinColumn(name = "booking_id", nullable = false)
    @Cascade(org.hibernate.annotations.CascadeType.REMOVE)
    private Booking booking;

    public ReceiptItem(String name, double price, Booking booking) {
        this.name = name;
        this.price = price;
        this.booking = booking;
    }

    public ReceiptItem() {
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        this.Id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Booking getBooking() {
        return booking;
    }

    public void setBooking(Booking booking) {
        this.booking = booking;
    }
}
