import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("leituras")
export class Leitura {

  @PrimaryGeneratedColumn("uuid")
  id: string; 

  @Column({ type: "number", nullable: true })
  umidade: number

  @Column({ type: "number", nullable: true })
  temperatura: number;

  @Column({ type: "date", nullable: true })
  dataHora: Date;

}