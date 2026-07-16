import { type ReactNode } from "react";

import { Button } from "@/components/ui/button.tsx";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog.tsx";
import { Field, FieldGroup } from "@/components/ui/field.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";

type Props = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  LoginButton: ReactNode;
  ResetButton: ReactNode;
};

export const Register = ({
  isOpen,
  onOpenChange,
  ResetButton,
  LoginButton,
}: Props): ReactNode => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <form>
        <DialogTrigger />
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Create Account</DialogTitle>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                defaultValue=""
                aria-label="username"
              />
            </Field>
            <Field>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" aria-label="email" />
            </Field>
            <Field>
              <Label htmlFor="password">Password</Label>
              <Input
                id="passwrod"
                name="passwrod"
                type="password"
                aria-label="password"
              />
            </Field>
            <Field orientation="vertical">
              {LoginButton}
              {ResetButton}
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose>Close</DialogClose>
            <Button type="submit">Register</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};
