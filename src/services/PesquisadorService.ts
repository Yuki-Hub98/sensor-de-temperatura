import { appDataSource } from "../database/appDataSource.js";
import { Pesquisador } from "../entities/Pesquisador.js";
import type { PesquisadorType } from "../types/Pesquisador.js";
import { randomUUID } from "crypto";

export class PesquisadorService {
  private pesquisadorRepository = appDataSource.getRepository(Pesquisador)

  public async getAllPesquisador(): Promise<Pesquisador[]> {
    return await this.pesquisadorRepository.find();
  }

  public async createPesquisador(data: PesquisadorType): Promise<Pesquisador> {
    const novoPesquisador = this.pesquisadorRepository.create({
      id: randomUUID(),
      ...data,
    });
    await this.pesquisadorRepository.save(novoPesquisador);
    return novoPesquisador;
  }

  public async getPesquisadorById(id: string): Promise<Pesquisador | null> {
    return await this.pesquisadorRepository.findOneBy({ id });  
  }

  public async updatePesquisador(id: string, data: Partial<PesquisadorType>): Promise<Pesquisador | null> {
    const pesquisador = await this.getPesquisadorById(id);
    if (!pesquisador) {
      return null;
    }
    await this.pesquisadorRepository.update(id, data);
    return await this.getPesquisadorById(id);
  }

  public async deletePesquisador(id: string): Promise<boolean> {
    const result = await this.pesquisadorRepository.delete(id);
    return result.affected !== 0;
  }

  public async existsByEmail(email: string): Promise<boolean> {
    const count = await this.pesquisadorRepository.count({ where: { email } });
    return count > 0;
  }

  public async existsByMatricula(matricula: string): Promise<boolean> {
    const count = await this.pesquisadorRepository.count({ where: { matricula } });
    return count > 0;
  }
  
}
