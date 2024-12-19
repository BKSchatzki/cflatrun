'use client';

import * as React from 'react';
import { useState } from 'react';

import {
  Disc3,
  SendHorizonal,
  ThumbsUp,
} from 'lucide-react';
import {
  Controller,
  FormProvider,
  useForm,
} from 'react-hook-form';
import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  name: z.string().min(1, { message: 'Please enter your name.' }),
  email: z.string().email('Please enter a valid email.'),
  message: z.string().min(70, {
    message: 'Please expand on your message.',
  }),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitIsSuccessful, setSubmitIsSuccessful] = useState(false);
  const [submitIsFailed, setSubmitIsFailed] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const handleFormSubmission = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    setSubmitIsSuccessful(false);
    setSubmitIsFailed(false);
    try {
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...values,
        }).toString(),
      });
      if (res.ok) {
        setSubmitIsSuccessful(true);
        form.reset();
      } else {
        setSubmitIsFailed(true);
        console.error('Form submission failed: ', res.statusText);
      }
    } catch (error) {
      setSubmitIsFailed(true);
      console.error('Form submission error: ', error);
    }
    setIsSubmitting(false);
  };

  return (
    <FormProvider {...form}>
      <form
        name="contact"
        onSubmit={form.handleSubmit(handleFormSubmission)}
        data-netlify="true"
        className="border-zinc relative z-10 col-start-1 flex w-full flex-col gap-9 rounded-md rounded-t-none border-t-2 bg-gradient-to-b from-zinc-950 to-emerald-950 px-6 py-3 pt-9"
      >
        <input
          type="hidden"
          name="form-name"
          value="contact"
        />
        <div className="relative">
          <label
            htmlFor="name"
            className="sr-only"
          >
            Name
          </label>
          <Controller
            name="name"
            control={form.control}
            render={({ field }) => (
              <input
                type="text"
                id="name"
                placeholder="Name"
                {...field}
                className="w-full border-b border-zinc-400 bg-zinc-950/50 px-4 py-1.5 text-zinc-50 placeholder:text-zinc-400 focus:border-zinc-50 focus:outline-none"
              />
            )}
          />
          {form.formState.errors.name && (
            <p className="absolute -bottom-6 left-3 text-red-500">
              {form.formState.errors.name.message}
            </p>
          )}
        </div>
        <div className="relative">
          <label
            htmlFor="email"
            className="sr-only"
          >
            Email
          </label>
          <Controller
            name="email"
            control={form.control}
            render={({ field }) => (
              <input
                type="text"
                id="email"
                placeholder="Email"
                {...field}
                className="w-full border-b border-zinc-400 bg-zinc-950/50 px-3 py-1.5 text-zinc-50 placeholder:text-zinc-400 focus:border-zinc-50 focus:outline-none"
              />
            )}
          />
          {form.formState.errors.email && (
            <p className="absolute -bottom-6 left-3 text-red-500">
              {form.formState.errors.email.message}
            </p>
          )}
        </div>
        <div className="relative">
          <label
            htmlFor="message"
            className="sr-only"
          >
            Message
          </label>
          <Controller
            name="message"
            control={form.control}
            render={({ field }) => (
              <textarea
                id="message"
                placeholder="Message"
                rows={5}
                {...field}
                className="scrollbar-thin scrollbar-thumb-zinc w-full resize-none text-wrap border-b border-zinc-400 bg-zinc-950/50 px-3 py-1.5 text-zinc-50 placeholder:text-zinc-400 focus:border-zinc-50 focus:outline-none"
              />
            )}
          />
          {form.formState.errors.message && (
            <p className="absolute -bottom-5 left-3 text-red-500">
              {form.formState.errors.message.message}
            </p>
          )}
        </div>
        <div className="relative pb-9">
          <button
            type="submit"
            disabled={isSubmitting || submitIsSuccessful}
            className="h-8 w-full rounded-md bg-zinc-50 text-lg font-semibold text-zinc-950 transition-all duration-100 active:scale-95 disabled:opacity-50"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-1.5">
                <span>Submitting</span>
                <Disc3 className="animate-spin" />
              </span>
            ) : submitIsSuccessful ? (
              <span className="flex items-center justify-center gap-1.5">
                <span>Submitted</span>
                <ThumbsUp />
              </span>
            ) : (
              <span className="flex items-center justify-center gap-1.5">
                <span>Submit</span>
                <SendHorizonal />
              </span>
            )}
          </button>
          {submitIsSuccessful && (
            <p className="absolute bottom-3 left-1/2 w-full -translate-x-1/2 text-foreground">
              Thanks! We'll get back to you soon.
            </p>
          )}
          {submitIsFailed && (
            <p className="absolute bottom-3 left-1/2 w-full -translate-x-1/2 text-foreground">
              Something went wrong. Please try again.
            </p>
          )}
        </div>
        <img
          src="/uploads/orchard.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-10 blur-sm"
        />
      </form>
    </FormProvider>
  );
};

export default Contact;
