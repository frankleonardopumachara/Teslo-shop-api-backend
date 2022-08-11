import { Column, DeleteDateColumn, Entity, Index, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Photo } from "../../photo/entities/photo.entity";

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  email: string;

  @OneToMany(() => Photo, (photo) => photo.user)
  photos: Photo[]

  @DeleteDateColumn({ type: "timestamp" })
  deletedAt: string;
}
