package service;

import model.dto.ImageDto;
import model.entity.Image;

public interface ImageService {

    Image saveImage(ImageDto request);


}
