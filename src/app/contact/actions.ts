'use server'
import { z } from 'zod'

const Enquiry = z.object({
  name: z.string().min(1, 'Please tell me your name'),
  email: z.string().email('That email doesn’t look right'),
  weddingDate: z.string().optional(),
  venue: z.string().optional(),
  message: z.string().min(10, 'A sentence or two, please'),
  website: z.string().max(0).optional(),   // honeypot
})

export type EnquiryState = {
  ok?: boolean
  error?: string
  fieldErrors?: Record<string, string[]>
}

export async function submitEnquiry(
  _prev: EnquiryState,
  formData: FormData
): Promise<EnquiryState> {
  const parsed = Enquiry.safeParse(Object.fromEntries(formData))
  if (!parsed.success) {
    return {
      fieldErrors: parsed.error.flatten().fieldErrors,
      error: 'Please check the fields and try again.',
    }
  }
  if (parsed.data.website) return { ok: true }   // bot filled the honeypot — pretend success

  // TODO: send via Resend / Nodemailer / etc.
  // const resend = new Resend(process.env.RESEND_API_KEY)
  // await resend.emails.send({ ... })
  console.log('[enquiry]', parsed.data)

  return { ok: true }
}