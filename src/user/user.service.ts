import { ConflictException, Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Photo } from "../photo/entities/photo.entity";

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>
  ) {
  }

  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepo.findOne({ where: { email: createUserDto.email } });
    if (user) throw new ConflictException("Ya existe un ususario con el mismo email");
    const newUser = this.userRepo.create(createUserDto);
    return this.userRepo.save(newUser);
  }

  findAll() {
    return this.userRepo.find({
      relations: {
        photos: true
      }
    });
  }

  findOne(id: number) {
    return this.userRepo.findOneBy({id})
  }

  update(id: number, updateUserDto: UpdateUserDto) {
  }

  remove(id: number) {
    return this.userRepo.softRemove({ id });
  }
}
