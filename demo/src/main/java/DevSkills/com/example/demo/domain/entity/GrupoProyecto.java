package DevSkills.com.example.demo.domain.entity;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import org.springframework.data.annotation.Id;

public class GrupoProyecto {
    @Column(name = "idGrupoProyecto", nullable = false)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idGrupoProyecto;
    private String nombre;
    private int proyecto_id;
    private int creador_id;

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getProyecto_id() {
        return proyecto_id;
    }

    public void setProyecto_id(int proyecto_id) {
        this.proyecto_id = proyecto_id;
    }

    public int getCreador_id() {
        return creador_id;
    }

    public void setCreador_id(int creador_id) {
        this.creador_id = creador_id;
    }
}
