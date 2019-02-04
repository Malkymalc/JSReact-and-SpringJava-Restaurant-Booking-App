package com.codeclan.restaurantbookingserver.restaurantserver.repositories.tableRepository;

import com.codeclan.restaurantbookingserver.restaurantserver.models.Booking;
import com.codeclan.restaurantbookingserver.restaurantserver.models.Customer;
import com.codeclan.restaurantbookingserver.restaurantserver.models.Table;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.Projection;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;

public class TableRepositoryImpl implements TableRepositoryCustom{

    @Autowired
    EntityManager entityManager;

    @Transactional
    public List<Table> findAllTablesByDate(Date date){
        List<Table> tables = null;
        Session session = entityManager.unwrap(Session.class);

        try {
            Criteria cr = session.createCriteria(Table.class);
            cr.createAlias("bookings", "bookingAlias");
            cr.add(Restrictions.eq("bookingAlias.date", date));
            tables = cr.list();
        } catch (HibernateException e) {
            e.printStackTrace();
        } finally {
            session.close();
        }


        return tables;
    }

    @Transactional
    public List<Table> getAllTablesByDate(Date date){
        List<Table> tables = null;
        Session session = entityManager.unwrap(Session.class);

        try {
            Criteria cr = session.createCriteria(Table.class);
            cr.createAlias("bookings", "bookingAlias");
            cr.add(Restrictions.not(Restrictions.eq("bookingAlias.date", date)));
            tables = cr.list();
        } catch (HibernateException e) {
            e.printStackTrace();
        } finally {
            session.close();
        }


        return tables;
    }

    @Transactional
    public List<Table>findTableByCustomerId(Long customerId) {
        List<Table> results = null;

        Session session = entityManager.unwrap(Session.class);
        try {
            Criteria cr = session.createCriteria(Table.class);
            cr.createAlias("bookings", "bookingAlias");
            cr.add(Restrictions.eq("bookingAlias.customer.id", customerId));
            results = cr.list();
        } catch (HibernateException ex) {
            ex.printStackTrace();
        }
        return results;
    }

    @Transactional
    public List<Table>findEmptyTablesByDateAndTime(Date date, Date start_time, Date end_time){
        List<Table> results = null;

        Session session = entityManager.unwrap(Session.class);
        try {
            Criteria cr = session.createCriteria(Table.class);
            Criteria crB = session.createCriteria(Table.class);

            Criterion checkDate = Restrictions.eq("bookingAlias.date", date);
            Criterion checkTime = Restrictions.between("bookingAlias.time", start_time, end_time);

            cr.createAlias("bookings", "bookingAlias");
            cr.add(Restrictions.and(checkDate, checkTime));
            cr.setProjection(Projections.property("id"));

            if (!cr.list().isEmpty()){
            crB.add(Restrictions.not(Restrictions.in("id", cr.list())));}

            results = crB.list();
        } catch (HibernateException ex) {
            ex.printStackTrace();
        }
        return results;
    }
}
