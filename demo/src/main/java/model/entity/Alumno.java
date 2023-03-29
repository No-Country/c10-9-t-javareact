package model.entity;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.Id;

@Entity
@NoArgsConstructor @AllArgsConstructor
@Getter @Setter
@Builder
@Table
public class Alumno {
    @Getter(AccessLevel.NONE)
    @Setter(AccessLevel.NONE)
    @jakarta.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private String paisDeOrigen;
    private Integer dni;
    private String nombre;
    private String apellido;
    private Integer telefono;
    private String mail;
    private String plataformaDeEstudio;

}
