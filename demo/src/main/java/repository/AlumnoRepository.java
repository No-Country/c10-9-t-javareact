package repository;


import model.entity.Alumno;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.awt.*;

@Repository
public interface AlumnoRepository extends JpaRepository<Alumno, Long> {
}
