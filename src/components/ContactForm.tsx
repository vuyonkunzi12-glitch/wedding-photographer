'use client'
import { useActionState } from 'react'
import { submitEnquiry, type EnquiryState } from '@/app/contact/actions'

const initial: EnquiryState = {}

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitEnquiry, initial)

  if (state.ok) {
    return (
      <div className="rounded-lg bg-jade-50 border border-jade-200 p-6">
        <h2 className="font-display text-2xl text-jade-700">Thank you</h2>
        <p className="mt-2 font-sans text-ink/80">
          I’ve got your enquiry and will reply within two working days.
        </p>
      </div>
    )
  }

  return (
    <form action={formAction} className="space-y-5" noValidate>
      <Field label="Your name" name="name" error={state.fieldErrors?.name} required />
      <Field label="Email" name="email" type="email" error={state.fieldErrors?.email} required />
      <Field label="Wedding date (if you have one)" name="weddingDate" type="date" />
      <Field label="Venue" name="venue" />

      <div>
        <label htmlFor="message" className="block font-sans text-sm text-ink/70 mb-1">
          Tell me a little about the day
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full rounded-md border border-jacaranda-200 px-3 py-2 font-sans focus:outline-none focus:ring-2 focus:ring-jacaranda-400"
          required
        />
        {state.fieldErrors?.message && (
          <p className="mt-1 font-sans text-sm text-red-600">{state.fieldErrors.message[0]}</p>
        )}
      </div>

      {/* honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {state.error && (
        <p className="font-sans text-sm text-red-600">{state.error}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center rounded-full bg-jade-500 px-7 py-3 font-sans font-medium text-white hover:bg-jade-600 disabled:opacity-60 transition"
      >
        {pending ? 'Sending…' : 'Send enquiry'}
      </button>
    </form>
  )
}

function Field({
  label, name, type = 'text', error, required,
}: {
  label: string
  name: string
  type?: string
  error?: string[]
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={name} className="block font-sans text-sm text-ink/70 mb-1">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-md border border-jacaranda-200 px-3 py-2 font-sans focus:outline-none focus:ring-2 focus:ring-jacaranda-400"
      />
      {error && <p className="mt-1 font-sans text-sm text-red-600">{error[0]}</p>}
    </div>
  )
}