import {PhotoRepository} from "../PhotoRepository";
import {CreatePhoto} from "../../model/dto/photo/CreatePhoto";
import {Photo} from "../../model/db/Photo";
import {UpdateType} from "../base/crud/URepository";
import {UpdatePhoto} from "../../model/dto/photo/UpdatePhoto";
import {Optional} from "sequelize";

export class PhotoRepositoryImpl implements PhotoRepository {

  create(dto: CreatePhoto): Promise<Photo> {
    return Photo.create({
      productId: dto.productId,
      name: dto.name,
    })
  }

  delete(id: number): Promise<number> {
    return Photo.destroy({
      where: {id: id}
    })
  }

  findAll(): Promise<Photo[]> {
    return Photo.findAll();
  }

  findByPk(id: number): Promise<Photo | null> {
    return Photo.findByPk(id);
  }

  update(dto: UpdatePhoto): UpdateType<Photo> {
    return Photo.update({name: dto.name}, {
      where: {
        id: dto.id,
      },
      returning: true
    })
  }

  bulkCreate(dto: Optional<CreatePhoto, 'productId'>[]): Promise<Photo[]> {
    return Photo.bulkCreate(dto);
  }

  findByProductId(id: number): Promise<Photo[]> {
    return Photo.findAll({where: {productId: id}})
  }

  deleteByProductId(id: number): Promise<number> {
    return Photo.destroy({
      where: {productId: id}
    })
  }
}