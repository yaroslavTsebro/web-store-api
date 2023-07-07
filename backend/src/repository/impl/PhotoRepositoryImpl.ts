import {PhotoRepository} from "../PhotoRepository";
import {CreatePhoto} from "../../model/dto/photo/CreatePhoto";
import {Photo} from "../../model/db/Photo";
import {UpdateType} from "../base/crud/URepository";
import {UpdatePhoto} from "../../model/dto/photo/UpdatePhoto";
import {Optional} from "sequelize";
import {inject, injectable} from "inversify";
import {TYPES} from "../../constant/types";
import {ILogger} from "../../config/ILogger";

@injectable()
export class PhotoRepositoryImpl implements PhotoRepository {

  constructor(@inject(TYPES.Logger) private logger: ILogger) {}

  async create(dto: CreatePhoto): Promise<Photo> {
    try {
      this.logger.info('creating started', dto);
      return Photo.create({
        productId: dto.productId,
        name: dto.name,
      })
    } catch (e) {
      this.logger.error('Error occurred during creating', dto);
      throw e;
    }
  }

  async delete(id: number): Promise<number> {
    try {
      this.logger.info('delete started', id);
      return Photo.destroy({
        where: {id: id}
      })
    } catch (e) {
      this.logger.error('Error occurred during delete', id);
      throw e;
    }
  }

  async findAll(): Promise<Photo[]> {
    try {
      this.logger.info('findAll started');
      return Photo.findAll();
    } catch (e) {
      this.logger.error('Error occurred during findAll');
      throw e;
    }
  }

  async findByPk(id: number): Promise<Photo | null> {
    try {
      this.logger.info('findByPk started', id);
      return Photo.findByPk(id);
    } catch (e) {
      this.logger.error('Error occurred during findByPk', id);
      throw e;
    }
  }

  async update(dto: UpdatePhoto): UpdateType<Photo> {
    try {
      this.logger.info('update started', dto);
      return Photo.update({name: dto.name}, {
        where: {
          id: dto.id,
        },
        returning: true
      })
    } catch (e) {
      this.logger.error('Error occurred during update', dto);
      throw e;
    }
  }

  async bulkCreate(dto: Optional<CreatePhoto, 'productId'>[]): Promise<Photo[]> {
    try {
      this.logger.info('bulkCreate started', dto);
      return Photo.bulkCreate(dto);
    } catch (e) {
      this.logger.error('Error occurred during bulkCreate', dto);
      throw e;
    }
  }

  async findByProductId(id: number): Promise<Photo[]> {
    try {
      this.logger.info('findByProductId started', id);
      return Photo.findAll({where: {productId: id}})
    } catch (e) {
      this.logger.error('Error occurred during findByProductId', id);
      throw e;
    }
  }

  async deleteByProductId(id: number): Promise<number> {
    try {
      this.logger.info('deleteByProductId started', id);
      return Photo.destroy({
        where: {productId: id}
      })
    } catch (e) {
      this.logger.error('Error occurred during deleteByProductId', id);
      throw e;
    }
  }
}