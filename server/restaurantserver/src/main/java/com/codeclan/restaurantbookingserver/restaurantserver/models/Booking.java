package com.codeclan.restaurantbookingserver.restaurantserver.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
    private Long Id;

    @Column(name = "date", columnDefinition = "Date")
    private Date date;

    @Column(name = "time")
    private String time;

    @Column(name = "headCount")
    private int headCount;

    @JsonIgnoreProperties("bookings")
    @ManyToOne
    @Cascade(org.hibernate.annotations.CascadeType.DETACH)
    @JoinColumn(name = "customer_id", nullable = false)
    private Customer customer;
    //
//    @JsonIgnoreProperties("bookings")
//    @ManyToMany
//    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
//    @JoinTable(
//            name = "tables_bookings",
//            joinColumns = {@JoinColumn(name = "booking_id", nullable = false, updatable = false)},
//            inverseJoinColumns = {@JoinColumn(name="table_id", nullable = false, updatable = false)}
//    )
    @ManyToOne
    @Cascade(org.hibernate.annotations.CascadeType.DETACH)
    @JoinColumn(name = "table_id", nullable = false)
    private Table table;


//    private List<Table> tableList;

    @OneToMany(mappedBy = "booking")
    @Cascade(org.hibernate.annotations.CascadeType.REMOVE)
    private List<OrderedItem> orderedItems;

    @OneToMany(mappedBy = "booking")
    @Cascade(org.hibernate.annotations.CascadeType.REMOVE)
    private List<ReceiptItem> receiptItems;



    public Booking(Date date, String time, Customer customer, int headCount, Table table) {
        this.time = time;
        this.date = date;
        this.customer = customer;
        this.headCount = headCount;
        this.table = table;
        this.orderedItems = new ArrayList<>();
        this.receiptItems = new ArrayList<>();
    }

    public Booking() {
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        this.Id = id;
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

//    public List<Table> getTableList() {
//        return tableList;
//    }
//
//    public void setTableList(List<Table> tableList) {
//        this.tableList = tableList;
//    }
//
//    public void addTable(Table table){
//        this.tableList.add(table);
//    }


    public Table getTable() {
        return table;
    }

    public void setTable(Table table) {
        this.table = table;
    }

    public String getTime() {
        //DateFormat df = new SimpleDateFormat("HH:mm:ss");
//        return df.format(time);
        return this.time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public List<OrderedItem> getOrderedItems() {
        return orderedItems;
    }

    public void setOrderedItems(List<OrderedItem> orderedItems) {
        this.orderedItems = orderedItems;
    }

    public List<ReceiptItem> getReceiptItems() {
        return receiptItems;
    }

    public void setReceiptItems(List<ReceiptItem> receiptItems) {
        this.receiptItems = receiptItems;
    }
}
