package com.codeclan.restaurantbookingserver.restaurantserver.models;

import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import javax.persistence.Table;
import java.awt.print.Book;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;


@Entity
@Table(name = "customers")

public class Customer implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "firstName")
    private String firstName;

    @Column(name = "lastName")
    private String lastName;

    @Column(name = "discount")
    private int discount;

    @Column(name = "phoneNumber")
    private String phoneNumber;

    @OneToMany(mappedBy = "customer")
    @Cascade(org.hibernate.annotations.CascadeType.REMOVE)
    private List<Booking> bookings;

    public Customer(String firstName, String lastName, int discount, String phoneNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.discount = discount;
        this.phoneNumber = phoneNumber;
        this.bookings = new ArrayList<Booking>() {};
    }

    public Customer() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public int getDiscount() {
        return discount;
    }

    public void setDiscount(int discount) {
        this.discount = discount;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> bookings) {
        this.bookings = bookings;
    }
}
