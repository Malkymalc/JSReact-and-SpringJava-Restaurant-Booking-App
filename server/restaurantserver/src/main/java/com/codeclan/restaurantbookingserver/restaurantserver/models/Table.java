package com.codeclan.restaurantbookingserver.restaurantserver.models;

import javax.persistence.*;
import java.io.Serializable;


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

    public Table(String tableNumber, int seatCount) {
        this.tableNumber = tableNumber;
        this.seatCount = seatCount;
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
}
