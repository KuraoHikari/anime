"use client";

import { Input } from "@/app/components/Inputs";
import { FieldValues, useForm } from "react-hook-form";

const AuthForm = () => {
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
 return (
  <div>
   <Input id="name" label="Name" register={register} errors={errors} disabled={false} />
  </div>
 );
};

export default AuthForm;
