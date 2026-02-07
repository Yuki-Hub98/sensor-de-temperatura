import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("pesquisadores")
export class Pesquisador {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", nullable: false })
  nome: string;

  @Column({ type: "varchar", nullable: false })
  senha: string;

  @Column({type: "varchar", nullable: true })
  especialidade?: string;

  @Column({type: "varchar", unique: true })
  email: string;

  @Column({ type: "varchar", nullable: false })
  titulacao: string;

  @Column({type: "varchar", unique: true })
  matricula: string;

  @Column({type: "varchar", nullable: true })
  linhaPesquisa?: string;

  @Column({type: "date", nullable: true })
  dataNascimento: Date;
}
