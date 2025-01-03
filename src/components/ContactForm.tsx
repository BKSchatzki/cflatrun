'use client';

import {
  useEffect,
  useState,
} from 'react';

import Cookies from 'js-cookie';
import {
  Disc3,
  Mail,
  MessageSquareMore,
  SendHorizonal,
  Signature,
  ThumbsUp,
} from 'lucide-react';
import { Dancing_Script } from 'next/font/google';
import {
  Controller,
  FormProvider,
  useForm,
} from 'react-hook-form';
import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';

const dancingScript = Dancing_Script({
  subsets: ['latin'],
});

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
  const reset = form.reset;

  useEffect(() => {
    const savedData = Cookies.get('cfrFormData');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        reset(parsedData);
      } catch {
        console.warn('Failed to parse form data from cookies');
      }
    }
  }, [reset]);

  let debounceTimer: NodeJS.Timeout | null = null;

  const handleSaveToCookies = () => {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
    debounceTimer = setTimeout(() => {
      const currentData = form.getValues();
      Cookies.set('cfrFormData', JSON.stringify(currentData), { expires: 1 });
    }, 1000);
  };

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
        reset();
        Cookies.remove('cfrFormData');
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
        onChange={handleSaveToCookies}
        onSubmit={form.handleSubmit(handleFormSubmission)}
        data-netlify="true"
        className="relative z-10 col-start-1 flex w-full flex-col gap-8 self-end"
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
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  {...field}
                  className="peer w-full rounded-md bg-slate-950/50 px-4 py-1.5 indent-5 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cflatyellow"
                />
                <Signature className="absolute left-2 top-2 size-5 text-sm text-slate-400 transition-all duration-300 peer-focus:rotate-6 peer-focus:animate-pulse peer-focus:text-cflatyellow" />
              </div>
            )}
          />
          {form.formState.errors.name && (
            <p className="absolute -bottom-5 left-0 text-sm text-red-500">
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
              <div className="relative">
                <input
                  type="text"
                  id="email"
                  placeholder="Email"
                  {...field}
                  className="peer w-full rounded-md bg-slate-950/50 px-4 py-1.5 indent-5 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cflatyellow"
                />
                <Mail className="absolute left-2 top-2 size-5 text-sm text-slate-400 transition-all duration-300 peer-focus:rotate-6 peer-focus:animate-pulse peer-focus:text-cflatyellow" />
              </div>
            )}
          />
          {form.formState.errors.email && (
            <p className="absolute -bottom-5 left-0 text-sm text-red-500">
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
              <div className="relative">
                <textarea
                  id="message"
                  placeholder="Message"
                  rows={5}
                  {...field}
                  className="scrollbar-thin scrollbar-thumb-cflatyellow peer w-full resize-none text-wrap rounded-md bg-slate-950/50 px-4 py-1.5 indent-5 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cflatyellow"
                />
                <MessageSquareMore className="absolute left-2 top-2 size-5 text-sm text-slate-400 transition-all duration-300 peer-focus:rotate-6 peer-focus:animate-pulse peer-focus:text-cflatyellow" />
              </div>
            )}
          />
          {form.formState.errors.message && (
            <p className="absolute -bottom-4 left-0 text-sm text-red-500">
              {form.formState.errors.message.message}
            </p>
          )}
        </div>
        <div className="relative pb-9">
          <button
            type="submit"
            disabled={isSubmitting || submitIsSuccessful}
            className={`h-8 w-full rounded-md bg-gradient-to-r from-cflatyellow to-amber-300 text-xl font-black text-background outline-offset-2 transition-all duration-100 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 ${dancingScript.className}`}
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
            <p className="left-04 absolute bottom-3 w-full bg-gradient-to-r from-cflatyellow to-amber-300 bg-clip-text text-sm text-transparent">
              Thanks! Talk soon.
            </p>
          )}
          {submitIsFailed && (
            <p className="absolute bottom-3 left-0 w-full text-sm text-red-500">
              Please try again.
            </p>
          )}
        </div>
      </form>
    </FormProvider>
  );
};

export default Contact;
