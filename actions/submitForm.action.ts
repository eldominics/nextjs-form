"use server";

import { signUpFormSchema } from "@/lib/formRules";

export type FormState = {
  error?: {
    email: string[];
    password: string[];
    hobbies: string[];
  };
  message: string;
};

export async function formSubmit(state: FormState, formData: FormData) {
  const validation = signUpFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    hobbies: formData.get("hobbies"),
  });

  if (!validation.success) {
    return {
      errors: validation.error.flatten().fieldErrors,
    };
  }

  console.log("connecting to database");
  //do other things
  //   connect to a database
  // fetch data from an api
  console.log(formData);
}
