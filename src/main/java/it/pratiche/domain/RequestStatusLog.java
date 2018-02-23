package it.pratiche.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.time.ZonedDateTime;
import java.util.Objects;

/**
 * A RequestStatusLog.
 */
@Entity
@Table(name = "request_status_log")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class RequestStatusLog implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "note")
    private String note;

    @NotNull
    @Column(name = "status_from_date", nullable = false)
    private ZonedDateTime statusFromDate;

    @NotNull
    @Column(name = "status_change_date", nullable = false)
    private ZonedDateTime statusChangeDate;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNote() {
        return note;
    }

    public RequestStatusLog note(String note) {
        this.note = note;
        return this;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public ZonedDateTime getStatusFromDate() {
        return statusFromDate;
    }

    public RequestStatusLog statusFromDate(ZonedDateTime statusFromDate) {
        this.statusFromDate = statusFromDate;
        return this;
    }

    public void setStatusFromDate(ZonedDateTime statusFromDate) {
        this.statusFromDate = statusFromDate;
    }

    public ZonedDateTime getStatusChangeDate() {
        return statusChangeDate;
    }

    public RequestStatusLog statusChangeDate(ZonedDateTime statusChangeDate) {
        this.statusChangeDate = statusChangeDate;
        return this;
    }

    public void setStatusChangeDate(ZonedDateTime statusChangeDate) {
        this.statusChangeDate = statusChangeDate;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        RequestStatusLog requestStatusLog = (RequestStatusLog) o;
        if (requestStatusLog.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), requestStatusLog.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "RequestStatusLog{" +
            "id=" + getId() +
            ", note='" + getNote() + "'" +
            ", statusFromDate='" + getStatusFromDate() + "'" +
            ", statusChangeDate='" + getStatusChangeDate() + "'" +
            "}";
    }
}
