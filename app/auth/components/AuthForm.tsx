"use client";

import { useCallback, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { BsGithub, BsGoogle } from "react-icons/bs";

import { useRouter } from "next/navigation";
import { Input } from "@/app/components/Inputs";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
 const [variant, setVariant] = useState<Variant>("LOGIN");
 const [isLoading, setIsLoading] = useState(false);
 const router = useRouter();

 const toggleVariant = useCallback(() => {
  if (variant === "LOGIN") {
   setVariant("REGISTER");
  } else {
   setVariant("LOGIN");
  }
 }, [variant]);

 const {
  register,
  handleSubmit,
  formState: { errors },
 } = useForm<FieldValues>({
  defaultValues: {
   name: "",
   email: "",
   password: "",
  },
 });

 const onSubmit: SubmitHandler<FieldValues> = (data) => {
  setIsLoading(true);
 };
 const socialAction = (action: string) => {};

 return (
  <div
   className="
    mt-8
    sm:mx-auto
    sm:w-full
    sm:max-w-md
 "
  >
   <div
    className="
        bg-gray-50
        bg-opacity-80
        px-4
        py-8
        shadow
        sm:px-10
    "
   >
    <h2
     className="
         mb-6
         text-center
         text-3xl
         font-bold
         tracking-tight
         text-gray-900
     "
    >
     {variant === "LOGIN" ? "LOGIN " : "REGISTER "}
     オタク
    </h2>
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
     {variant === "REGISTER" && (
      <Input id="name" label="Name" register={register} errors={errors} disabled={isLoading} />
     )}

     <Input id="email" label="Email address" type="email" register={register} errors={errors} disabled={isLoading} />
     <Input id="password" label="Password" type="password" register={register} errors={errors} disabled={isLoading} />

     <div>
      {/* <Button disabled={isLoading} fullWidth type="submit">
       {variant === "LOGIN" ? "Sign in" : "Register"}
      </Button> */}
     </div>
    </form>

    <div className="mt-6">
     <div className="relative">
      <div
       className="
            absolute
            inset-0
            flex
            items-center
            "
      >
       <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center text-sm">
       <span className=" px-2 text-gray-500">Or continue with</span>
      </div>
     </div>

     <div className="mt-6 flex gap-2">
      {/* <AuthSocialButton icon={BsGithub} onClick={() => socialAction("github")} />
      <AuthSocialButton icon={BsGoogle} onClick={() => socialAction("google")} />      */}
     </div>
    </div>

    <div
     className="
        flex
        gap-2
        justify-center
        text-sm
        mt-6
        px-2
        text-gray-500
    "
    >
     <div>{variant === "LOGIN" ? "Don't have an Account?" : "Already have an account?"}</div>

     <div onClick={toggleVariant} className="underline cursor-pointer">
      {variant === "LOGIN" ? "Create an account" : "Login"}
     </div>
    </div>
   </div>
  </div>
 );
};

export default AuthForm;
