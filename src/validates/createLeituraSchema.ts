import { z } from "zod";

export const createLeituraSchema = z.object({
  umidade: z.number().optional(),
  temperatura: z.number().optional(),
  dataHora: z.coerce.date(),
});
