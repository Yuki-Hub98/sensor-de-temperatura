import { appDataSource } from "../database/appDataSource.js";
import { Area } from "../entities/Area.js";
import type { AreaType } from "../types/Area.js";

export class AreaService {
  private repo = appDataSource.getRepository(Area);

  public async create(data: Partial<AreaType>) {
    return this.repo.save(this.repo.create(data));
  }

  public async findAll() {
    return this.repo.find();
  }

  public async findOne(id: string) {
    return this.repo.findOneBy({ id });
  }

  public async update(id: string, data: Partial<Area>) {
    await this.repo.update(id, data);
    return this.findOne(id);
  }

  public async delete(id: string) {
    return this.repo.delete(id);
  }

  public async existsByName(nome: string): Promise<boolean> {
    const count = await this.repo.count({ where: { nome } });
    return count > 0;
  }
}
