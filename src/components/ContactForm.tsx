'use client';

import * as React from 'react';
import { useState } from 'react';

import {
  Controller,
  FormProvider,
  useForm,
} from 'react-hook-form';
import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  name: z.string().min(1, { message: 'We need to know who you are!' }),
  email: z.string().email('We need to be able to message you back!'),
  message: z.string().min(70, {
    message: 'Oops! Did you mean to send such a short message?',
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
      >
        <input
          type="hidden"
          name="form-name"
          value="contact"
        />
        <div>
          <label htmlFor="name">Name</label>
          <Controller
            name="name"
            control={form.control}
            render={({ field }) => (
              <input
                type="text"
                id="name"
                {...field}
              />
            )}
          />
          {form.formState.errors.name && (
            <p className="text-red-500">{form.formState.errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Controller
            name="email"
            control={form.control}
            render={({ field }) => (
              <input
                type="email"
                id="email"
                {...field}
              />
            )}
          />
          {form.formState.errors.email && (
            <p className="text-red-500">{form.formState.errors.email.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <Controller
            name="message"
            control={form.control}
            render={({ field }) => (
              <textarea
                id="message"
                {...field}
              />
            )}
          />
          {form.formState.errors.message && (
            <p className="text-red-500">{form.formState.errors.message.message}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
        {submitIsSuccessful && <p>Your message has been sent!</p>}
        {submitIsFailed && <p>There was an error sending your message.</p>}
      </form>
    </FormProvider>
  );
};

export default Contact;
