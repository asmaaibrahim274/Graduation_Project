"use client"
import React from 'react'
import { useState } from "react";
import {
  User,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  Check,
  Apple
} from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Controller, useForm } from 'react-hook-form';
import {
  Field,
  FieldError
} from "@/components/ui/field"
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { registerSchema } from '@/schema/registerSchema';
import { RegisterData } from '@/services/types/RegisterData';
import { zodResolver } from '@hookform/resolvers/zod';


export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  let { handleSubmit, control } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      rePassword: ''
    },
    resolver:zodResolver(registerSchema)
  })
  function submitForm (values:RegisterData) {
    console.log(values);
  }

  return <div className='flex'>
    <div className='hidden md:flex md:w-[50%] w-[50%] h-screen'></div>
    
    <div className='w-[95%] md:w-[50%] max-h-screen mx-auto px-8 py-2'>
      <div className="min-h-screen flex items-center justify-center p-5">
        <div className="w-full max-w-127.5 rounded-[22px] border border-white/80 bg-[#fffdfa] px-8 py-7 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">

          {/* Heading */}
          <div className="text-center mb-6">
            <div className="flex gap-3 items-center justify-center">
            <h1 className="text-[27px] font-bold text-[#23485a]">
              Create Your Account 
            </h1>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 fill-yellow-400 stroke-yellow-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
              </svg>
            </span>
            </div>

            <p className="mt-2 text-sm text-[#91a0a5]">
              Start comparing prices in seconds
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(submitForm)} className="space-y-3">

            {/* Full Name */}
            <div className="relative">
              <User
                size={20}
                strokeWidth={1.8}
                className="absolute left-4 top-[22.5px] -translate-y-1/2 text-[#71909b]"
              />

              <Controller
                name="name"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <Input
                      type="text"
                      placeholder="Full Name"
                      className="h-11.25! rounded-xl! border! border-[#e8e8e5]! bg-white! pl-12 pr-4 text-sm text-[#333] outline-none transition focus:border-[#55bda7]! focus:ring-2! focus:ring-[#55bda7]/10! placeholder:text-[#aeb8bb]"
                      {...field}
                      id={field.name}
                      autoComplete="on"
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />
            </div>

            {/* Email */}
            <div className="relative">
              <Mail
                size={20}
                strokeWidth={1.8}
                className="absolute left-4 top-[22.5px] -translate-y-1/2 text-[#71909b]"
              />

              <Controller
                name="email"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      className="h-11.25! rounded-xl! border! border-[#e8e8e5]! bg-white! pl-12 pr-4 text-sm text-[#333] outline-none transition focus:border-[#55bda7]! focus:ring-2! focus:ring-[#55bda7]/10! placeholder:text-[#aeb8bb]"
                      {...field}
                      id={field.name}
                      autoComplete="on"
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />
            </div>

            {/* Password */}
            <div className="relative">
              <LockKeyhole
                size={20}
                strokeWidth={1.8}
                className="absolute left-4 top-[22.5px] -translate-y-1/2 text-[#71909b]"
              />

              <Controller
                name="password"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="h-11.25! rounded-xl! border! border-[#e8e8e5]! bg-white! pl-12 pr-4 text-sm text-[#333] outline-none transition focus:border-[#55bda7]! focus:ring-2! focus:ring-[#55bda7]/10! placeholder:text-[#aeb8bb]"
                      {...field}
                      id={field.name}
                      autoComplete="on"
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-[22.5px] -translate-y-1/2 text-[#78919a] hover:text-[#3f6975]"
              >
                {showPassword ? (
                  <EyeOff size={19} />
                ) : (
                  <Eye size={19} />
                )}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <LockKeyhole
                size={20}
                strokeWidth={1.8}
                className="absolute left-4 top-[22.5px] -translate-y-1/2 text-[#71909b]"
              />

              <Controller
                name="rePassword"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm Password"
                      className="h-11.25! rounded-xl! border! border-[#e8e8e5]! bg-white! pl-12 pr-4 text-sm text-[#333] outline-none transition focus:border-[#55bda7]! focus:ring-2! focus:ring-[#55bda7]/10! placeholder:text-[#aeb8bb]"
                      {...field}
                      id={field.name}
                      autoComplete="on"
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                className="absolute right-4 top-[22.5px] -translate-y-1/2 text-[#78919a] hover:text-[#3f6975]"
              >
                {showConfirmPassword ? (
                  <EyeOff size={19} />
                ) : (
                  <Eye size={19} />
                )}
              </button>
            </div>

            {/* Terms */}
            <label className="flex cursor-pointer items-center gap-2 pt-1 text-[12px] text-[#7f9297]">
              <input
                type="checkbox"
                required
                className="peer sr-only"
              />
              <span className="flex h-4.25 w-4.25 items-center justify-center rounded-lg border border-[#7f9297] bg-white transition-all peer-checked:bg-[#58bda8] peer-checked:border-[#58bda8] [&>svg]:hidden peer-checked:[&>svg]:block">
                <Check size={12} strokeWidth={3} className="text-white" />
              </span>

              <span>
                I agree to the{" "}
                <a
                  href="#"
                  className="text-[#559a92] underline underline-offset-2"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-[#559a92] underline underline-offset-2"
                >
                  Privacy Policy
                </a>
              </span>
            </label>

            {/* Create Account Button */}
            <Button
              type="submit"
              className="mt-1 h-11 w-full rounded-xl bg-[#58bda8]! text-[15px] font-medium text-white shadow-sm transition hover:bg-[#4eaf9b]! active:scale-[0.99]!"
            >
              Create Account
            </Button>
          </form>

          {/* Divider */}
          <div className="my-5 flex items-center gap-3">
            <div className="h-px flex-1 bg-[#e9e7e2]" />
            <span className="text-[12px] text-[#9ca5a6]">
              or sign up with
            </span>
            <div className="h-px flex-1 bg-[#e9e7e2]" />
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-3 gap-3">

            <button
              type="button"
              className="flex h-10 items-center justify-center gap-2 rounded-full border border-[#ededeb] bg-white text-[12px] text-[#65777c] transition hover:bg-gray-50"
            >
              <FcGoogle size={17} className="text-[#4285f4]" />
              Google
            </button>

            <button
              type="button"
              className="flex h-10 items-center justify-center gap-2 rounded-full border border-[#ededeb] bg-white text-[12px] text-[#65777c] transition hover:bg-gray-50"
            >
              <Apple size={17} fill="black" />
              Apple
            </button>

            <button
              type="button"
              className="flex h-10 items-center justify-center gap-2 rounded-full border border-[#ededed] bg-white text-[12px] text-[#65777c] transition hover:bg-gray-50"
            >
              <FaFacebook
                size={17}
                fill="#1877F2"
                className="text-[#1877F2]"
              />
              Facebook
            </button>
          </div>

          {/* Sign In */}
          <p className="mt-5 text-center text-[12px] text-[#829296]">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-medium text-[#58a99d] underline underline-offset-2"
            >
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
}
