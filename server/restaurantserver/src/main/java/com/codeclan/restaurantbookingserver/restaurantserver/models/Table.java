package com.codeclan.restaurantbookingserver.restaurantserver.models;

import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;


@Entity
@javax.persistence.Table(name = "tables")
public class Table implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "tableNumber")
    private String tableNumber;

    @Column(name = "seatCount")
    private int seatCount;

//    @JsonIgnoreProperties("tables")
//    @ManyToMany
//    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
//    @JoinTable(
//            joinColumns = {@JoinColumn(name = "table_id", nullable = false, updatable = false)},
//            inverseJoinColumns = {@JoinColumn(name = "booking_id", nullable = false, updatable = false)}
//    )

    @OneToMany(mappedBy = "table")
    @Cascade(org.hibernate.annotations.CascadeType.REMOVE)
    private List<Booking> bookings;

    public Table(String tableNumber, int seatCount) {
        this.tableNumber = tableNumber;
        this.seatCount = seatCount;
        this.bookings = new ArrayList<>();
    }

    public Table() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTableNumber() {
        return tableNumber;
    }

    public void setTableNumber(String tableNumber) {
        this.tableNumber = tableNumber;
    }

    public int getSeatCount() {
        return seatCount;
    }

    public void setSeatCount(int seatCount) {
        this.seatCount = seatCount;
    }

    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> bookings) {
        this.bookings = bookings;
    }

    public void addBookings(Booking booking){
        this.bookings.add(booking);
    }
}
