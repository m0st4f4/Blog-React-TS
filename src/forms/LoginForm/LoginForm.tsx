import { type ComponentProps, type ReactNode } from "react";

import { Controller, type UseFormReturn } from "react-hook-form";

import type { LoginUserType } from "@/services/userService.ts";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field.tsx";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";

type Props = ComponentProps<"form"> & {
  form: UseFormReturn<LoginUserType>;
  isPending: boolean;
};

export const LoginForm = ({
  onSubmit,
  form,
  isPending,
  ...otherProps
}: Props): ReactNode => {
  return (
    <form onSubmit={onSubmit} {...otherProps}>
      <FieldGroup>
        <Controller
          name="username"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Username</FieldLabel>
              <Input
                {...field}
                type="text"
                id={field.name}
                aria-invalid={fieldState.invalid}
                aria-label={field.name}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Password</FieldLabel>
              <Input
                {...field}
                type="password"
                id={field.name}
                aria-invalid={fieldState.invalid}
                aria-label={field.name}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
      <div className="flex gap-2 mt-4 items-center justify-start">
        <Button
          variant="outline"
          type="button"
          onClick={() => {
            form.reset();
          }}
          disabled={isPending}
        >
          Reset
        </Button>
        <Button variant="default" type="submit" disabled={isPending}>
          {isPending ? (
            <>
              <Spinner data-icon="inline-start" />
              Login...
            </>
          ) : (
            "Login"
          )}
        </Button>
      </div>
    </form>
  );
};
