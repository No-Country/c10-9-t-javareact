package model.entity;


import jakarta.persistence.*;
import lombok.*;



@Entity
@NoArgsConstructor @AllArgsConstructor
@Getter @Setter
@Builder
@Table(name = "projects")
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String type;

    private String stack;

    private String description;

    private String link;

    @OneToOne(fetch = FetchType.EAGER, cascade = {CascadeType.PERSIST,CascadeType.MERGE})
    @JoinColumn(name = "image_id")
    private Image image;

}
