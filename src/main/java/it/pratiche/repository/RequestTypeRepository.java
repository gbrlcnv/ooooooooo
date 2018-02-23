package it.pratiche.repository;

import it.pratiche.domain.RequestType;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the RequestType entity.
 */
@SuppressWarnings("unused")
@Repository
public interface RequestTypeRepository extends JpaRepository<RequestType, Long> {

}
