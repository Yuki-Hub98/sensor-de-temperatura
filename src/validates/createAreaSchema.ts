import { z } from "zod";

export const createAreaSchema = z.object({
  nome: z.string().min(1),
  descricao: z.string().optional(),
  bioma: z.string().optional(),
  latitude: z.number().optional(),
  longidade: z.number().optional(),
  largura: z.number().optional(),
  comprimento: z.number().optional(),
  relevo: z.string().optional(),
});