import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text", { unique: true })
  title: string;

  @Column("numeric", { default: 0 })
  price: number;

  @Column("text", { nullable: true })
  description: string | null;

  @Column("text", { unique: true })
  slug: string;

  @Column("int", { default: 0 })
  stock: number;

  @Column('text', {
    array: true
  })
  sizes: string[]

  @Column('text')
  gender: string

  @BeforeInsert()
  beforeInsert() {
    console.log('before insert')
  }

  @BeforeUpdate()
  beforeUpdate() {
    console.log('before update')
  }
}
