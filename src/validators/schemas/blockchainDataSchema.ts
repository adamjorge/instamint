import { z } from "zod"

/* eslint-disable camelcase */
const quoteSchema = z.object({
  USD: z.object({
    price: z.number(),
    percent_change_24h: z.number()
  })
})
const cryptoSchema = z.object({
  id: z.number(),
  name: z.string(),
  symbol: z.string(),
  last_updated: z.string(),
  quote: quoteSchema
})
const statusSchema = z.object({
  timestamp: z.string(),
  error_code: z.number(),
  error_message: z.string().nullable(),
  elapsed: z.number(),
  credit_count: z.number(),
  notice: z.string().nullable()
})
const dataSchema = z.record(z.string(), z.array(cryptoSchema))

export const blockchainDataSchema = z.object({
  status: statusSchema,
  data: dataSchema
})
/* eslint-enable camelcase */
