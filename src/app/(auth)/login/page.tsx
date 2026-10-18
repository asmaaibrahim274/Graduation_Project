"use client"
import { useState } from "react";
import {
  User,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
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
import { LoginData } from '@/services/types/LoginData';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from "@/schema/loginSchema";
import { PiHandWaving } from 'react-icons/pi';


export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  let { handleSubmit, control } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver:zodResolver(loginSchema)
  })
  function submitForm (values:LoginData) {
    console.log(values);
  }

  return <div className='flex'>
    <div className='hidden md:flex md:w-[50%] w-[50%] h-screen'></div>
    
    <div className='w-[95%] md:w-[50%] max-h-screen mx-auto px-8'>
      <div className="min-h-screen flex items-center justify-center p-5">
        <div className="w-full max-w-127.5 rounded-[22px] border border-white/80 bg-[#fffdfa] px-8 py-7 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">

          {/* Heading */}
          <div className="text-center mb-6">
            <div className="flex gap-3 items-center justify-center">
            <h1 className="text-[27px] font-bold text-[#23485a]">
              Welcome Back 
            </h1>
            <span>
              <PiHandWaving className="w-6 h-6 text-yellow-400" />
            </span>
            </div>

            <p className="mt-2 text-sm text-[#91a0a5]">
              Sign in to continue comparing prices
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(submitForm)} className="space-y-3">

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

            {/* Login Button */}
            <Button
              type="submit"
              className="mt-1 h-11 w-full rounded-xl bg-[#58bda8]! text-[15px] font-medium text-white shadow-sm transition hover:bg-[#4eaf9b]! active:scale-[0.99]!"
            >
              Sign In
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
            Don't have an account?{" "}
            <a
              href="/register"
              className="font-medium text-[#58a99d] underline underline-offset-2"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
}

