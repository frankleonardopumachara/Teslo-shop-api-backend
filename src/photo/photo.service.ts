import { Injectable } from '@nestjs/common';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Photo } from "./entities/photo.entity";
import { User } from "../user/entities/user.entity";

@Injectable()
export class PhotoService {

  constructor(
    @InjectRepository(Photo)
    private readonly photoRepo: Repository<Photo>
  ) {
  }

  create(createPhotoDto: CreatePhotoDto) {
    // const user: User = await this.userService.findOneOrFail()
    // const newPhoto = this.photoRepo.create(createPhotoDto)
    // this.photoRepo.findOne({where: {id: 1}, relations: {user: true}})
    // user.photos.push(newPhoto)
    // // verificar que el usuario exista
    // // si existe crear la photo
  }

  findAll() {
    return `This action returns all photo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} photo`;
  }

  update(id: number, updatePhotoDto: UpdatePhotoDto) {
    return `This action updates a #${id} photo`;
  }

  remove(id: number) {
    return `This action removes a #${id} photo`;
  }
}
