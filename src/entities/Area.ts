import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("areas")
export class Area {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", nullable: false })
  nome: string;

  @Column({ type: "varchar", nullable: true })
  descricao?: string;

  @Column({ type: "varchar", nullable: true })
  bioma: string;

  @Column({ type: "number", nullable: true })
  latitude: number;

  @Column({ type: "number", nullable: true })
  longidade: number;

  @Column({ type: "number", nullable: true })
  largura: number;

  @Column({ type: "number", nullable: true })
  comprimento: number;

  @Column({ type: "varchar", nullable: true })
  relevo?: string;

}