import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "./entities/product.entity";
import { Repository } from "typeorm";

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>
  ) {
  }

  async create(createProductDto: CreateProductDto) {
    const { title, slug } = createProductDto;
    const productDB = await this.productRepo.findOneBy([{ title }, { slug }]);
    if (productDB && productDB.title === title) throw new ConflictException("Ya existe un producto con este titulo");
    if (productDB && productDB.slug === slug) throw new ConflictException("Ya existe un producto con este slug");

    const newProduct = this.productRepo.create(createProductDto);
    return await this.productRepo.save(newProduct);
  }

  findAll() {
    return `This action returns all products`;
  }

  async findOneOrFail(id: number): Promise<Product> {
    const product = await this.productRepo.findOneBy({ id });
    if (!product) throw new NotFoundException("No existe producto");
    return product;
  }

  async findOne(id: number): Promise<Product | null> {
    return await this.productRepo.findOneBy({ id })
  }

  async update(id: number, { stock }: UpdateProductDto): Promise<Product> {
    await this.findOneOrFail(id);
    return await this.productRepo.save({ id, stock });
  }

  async remove(id: number): Promise<boolean> {
    return true
  }
}
