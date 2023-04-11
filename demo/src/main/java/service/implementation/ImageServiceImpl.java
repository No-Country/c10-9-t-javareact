package service.implementation;

import model.dto.ImageDto;
import model.entity.Image;
import org.springframework.stereotype.Service;
import repository.ImageRepository;
import service.ImageService;

@Service
public class ImageServiceImpl implements ImageService {

    private final ImageRepository imageRepo;

    public ImageServiceImpl(ImageRepository imageRepo) {
        this.imageRepo = imageRepo;
    }

    @Override
    public Image saveImage(ImageDto request) {
        Image image = new Image();
        image.setPath(request.getPath());
        return imageRepo.save(image);
    }
}
