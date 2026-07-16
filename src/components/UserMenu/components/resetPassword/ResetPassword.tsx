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
  RegisterButton: ReactNode;
};

export const ResetPassword = ({
  isOpen,
  onOpenChange,
  RegisterButton,
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
              <Label htmlFor="username">Email</Label>
              <Input
                id="email"
                name="email"
                defaultValue=""
                aria-label="email"
                type="email"
              />
            </Field>

            <Field orientation="vertical">
              {LoginButton}
              {RegisterButton}
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose>Close</DialogClose>
            <Button type="submit">Reset password</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};
