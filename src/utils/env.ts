import { z } from "zod"

const envSchema = z.object({
    VITE_API_BASE_URL: z.url(),
    VITE_AUTHORIZATION_SERVER_BASE_URL: z.url(),
    VITE_CLIENT_ID: z.string(),
})

export const env = envSchema.parse(import.meta.env)