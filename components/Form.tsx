//@ts-nocheck

"use client";

import React, { useActionState, useEffect, useRef } from "react";
import Button from "./Button";
import { useFormState } from "react-dom";
import { formSubmit } from "@/actions/submitForm.action";
import { error } from "console";
import { nullable } from "zod";

const Form = () => {
  const [state, action] = useFormState(formSubmit, null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!state?.errors) {
      formRef.current?.reset();
    }
  });
  return (
    <>
      {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

          <p className="mt-4 text-gray-500">Please fill in the form</p>
        </div>

        <form
          ref={formRef}
          action={action}
          className="mx-auto mb-0 mt-8 max-w-md space-y-4"
        >
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                id="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-black"
                placeholder="Enter email"
                name="email"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>
          {state?.errors?.email && (
            <div>
              <p className="text-red-400">{state.errors.email}</p>
            </div>
          )}

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>

            <div className="relative">
              <input
                id="password"
                type="password"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-black"
                placeholder="Enter password"
                name="password"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>

          {state?.errors?.pasword && (
            <div>
              password must be the following:
              <ul>
                {state?.errors?.password.map((error) => (
                  <li key={error} className="text-red-400">
                    {" "}
                    {error}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <label
              htmlFor="HeadlineAct"
              className="block text-sm font-medium text-white"
            >
              Hobbies
            </label>

            <select
              name="hobbies"
              id="hobbies"
              className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
            >
              <option value="">Please select</option>
              <option value="chess">Chess</option>
              <option value="draughts">Draughts</option>
              <option value="badminton">Badminton</option>
              <option value="coding">Coding</option>
              <option value="nextjs">NextJs </option>
              <option value="eat">Eat</option>
              <option value="read">Read</option>
            </select>
          </div>
          {state?.errors?.hobbies && (
            <div>
              <p className="text-red-400">{state.errors.hobbies}</p>
            </div>
          )}

          <Button />
        </form>
      </div>
    </>
  );
};

export default Form;
