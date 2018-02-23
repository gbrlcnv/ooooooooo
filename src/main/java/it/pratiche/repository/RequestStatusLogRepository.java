package it.pratiche.repository;

import it.pratiche.domain.RequestStatusLog;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the RequestStatusLog entity.
 */
@SuppressWarnings("unused")
@Repository
public interface RequestStatusLogRepository extends JpaRepository<RequestStatusLog, Long> {

}
