package com.codeclan.restaurantbookingserver.restaurantserver.models;

import javax.persistence.*;
import javax.persistence.Table;

@Entity
@Table (name = "stockitem")
public class StockItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "price")
    private double price;

    public StockItem(String name, double price) {
        this.name = name;
        this.price = price;
    }

    public StockItem() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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
}
