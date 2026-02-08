import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("sensores")
export class Sensor {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", unique: true, nullable: false })
  serialNumber: string;

  @Column({ type: "varchar", nullable: false })
  nome: string;

  @Column({ type: "varchar", nullable: true })
  modelo: string;

  @Column({ type: "varchar", nullable: true })
  fabricante: string;

  @Column({ type: "varchar", nullable: true })
  tipo: string;

  @Column({ type: "varchar", nullable: true })
  status: string;

  @Column({ type: "varchar", nullable: true })
  ipFixo: string;

  @Column({ type: "date", nullable: true })
  dataInstalacao: Date;

  @Column({ type: "date", nullable: true })
  dataManutencao: Date;

  @Column({ type: "number", nullable: true })
  cicloLeitura: number;

  @Column({ type: "number", nullable: true })
  latitude: number;

  @Column({ type: "number", nullable: true })
  longidade: number;

  @Column({ type: "varchar", nullable: true })
  finalidade: string;

}