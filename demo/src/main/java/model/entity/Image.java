package model.entity;


import jakarta.persistence.*;
import lombok.*;


@Entity
@NoArgsConstructor @AllArgsConstructor
@Getter @Setter
@Builder
@Table(name = "image")
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String path;
    private String keyBucket;

}