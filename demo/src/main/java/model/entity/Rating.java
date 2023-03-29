package model.entity;

import com.fourjuniors.juniors.model.enums.RatingEnum;
import com.fourjuniors.juniors.security.model.entity.User;
import jakarta.persistence.*;
import lombok.*;
import org.apache.catalina.User;
import org.springframework.data.annotation.Id;

import javax.persistence.*;

@Entity
@NoArgsConstructor @AllArgsConstructor
@Getter @Setter
@Builder
@Table(name = "rating")
public class Rating {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(cascade = {CascadeType.MERGE, CascadeType.PERSIST})
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(cascade = {CascadeType.MERGE, CascadeType.PERSIST})
    @JoinColumn(name = "project_id")
    private Project project;

    @Enumerated(value = EnumType.STRING)
    RatingEnum value;

}
