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
  RegisterButton: ReactNode;
  ResetButton: ReactNode;
};

export const Login = ({ isOpen, onOpenChange,ResetButton,RegisterButton }: Props): ReactNode => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <form>
        <DialogContent className="sm:max-w-sm">
          <DialogTrigger />
          <DialogHeader>
            <DialogTitle>Login to Your Account</DialogTitle>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="username">Username or Email</Label>
              <Input
                id="username"
                name="username"
                defaultValue=""
                aria-label="username"
              />
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

              {RegisterButton}
              {ResetButton}
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose>Close</DialogClose>
            <Button type="submit">Login</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};
