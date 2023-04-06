package DevSkills.com.example.demo.domain.entity;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import org.springframework.data.annotation.Id;

public class Tecnologia {
    @Column(name = "idTecnologia", nullable = false)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idTecnologia;
    private String nombre_tecnologia;

}
