package com.codeclan.restaurantbookingserver.restaurantserver.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.io.Serializable;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@javax.persistence.Table(name = "bookings")
public class Booking implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "date", columnDefinition = "Date")
    private Date date;

    @Column(name = "time", columnDefinition = "Time")
    private Date time;

    @Column(name = "headCount")
    private int headCount;

    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    private Customer customer;

    @JsonIgnoreProperties("bookings")
    @ManyToMany
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "tables_bookings",
            joinColumns = {@JoinColumn(name = "booking_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name="table_id", nullable = false, updatable = false)}
    )
    private List<Table> tableList;


    public Booking(Date date, Date time, Customer customer, int headCount) {
        this.time = time;
        this.date = date;
        this.customer = customer;
        this.headCount = headCount;
        this.tableList = new ArrayList<Table>();
    }

    public Booking() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDate() {
        DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
        return df.format(date);
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public int getHeadCount() {
        return headCount;
    }

    public void setHeadCount(int headCount) {
        this.headCount = headCount;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public List<Table> getTableList() {
        return tableList;
    }

    public void setTableList(List<Table> tableList) {
        this.tableList = tableList;
    }

    public void addTable(Table table){
        this.tableList.add(table);
    }

    public String getTime() {
        DateFormat df = new SimpleDateFormat("HH:mm:ss");
        return df.format(time);
    }

    public void setTime(Date time) {
        this.time = time;
    }
}
