import { appDataSource } from "../database/appDataSource.js";
import { Leitura } from "../entities/Leitura.js";

export class LeituraService {
  private repo = appDataSource.getRepository(Leitura);

  public async create(data: Partial<Leitura>) {
    return this.repo.save(this.repo.create(data));
  }

  public async findAll() {
    return this.repo.find();
  }

  public async findOne(id: string) {
    return this.repo.findOneBy({ id });
  }

  public async update(id: string, data: Partial<Leitura>) {
    await this.repo.update(id, data);
    return this.findOne(id);
  }

  public async delete(id: string) {
    return this.repo.delete(id);
  }
}
