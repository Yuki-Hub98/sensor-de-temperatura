import { z } from "zod";

export const createPesquisadorSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  senha: z.string().min(8, "Senha deve ter no mínimo 8 caracteres"),
  matricula: z.string().min(1, "Matrícula é obrigatória"),
  titulacao: z.enum([
    "Graduação",
    "Especialização",
    "Mestrado",
    "Doutorado"
  ]),
  dataNascimento: z.coerce.date(),
  especialidade: z.string().optional(),
  linhaPesquisa: z.string().optional()
});
