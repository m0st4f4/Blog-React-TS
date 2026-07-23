import { type ReactNode, useState } from "react";

import { LoginDialog } from "@/components/UserMenu/components/LoginDialog/LoginDialog.tsx";
import { RegisterDialog } from "@/components/UserMenu/components/RegisterDialog/RegisterDialog.tsx";
import { ResetPassword } from "@/components/UserMenu/components/resetPassword/ResetPassword.tsx";
import { Button } from "@/components/ui/button.tsx";

import MingcuteUser1Line from "@/icons/MingcuteUser1Line.tsx";

export const UserMenu = (): ReactNode => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const handeLoginButtonClick = () => {
    setIsLoginOpen(true);
    setIsRegisterOpen(false);
    setIsResetPassOpen(false);
  };

  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const handeRegisterButtonClick = () => {
    setIsRegisterOpen(true);
    setIsLoginOpen(false);
    setIsResetPassOpen(false);
  };

  const [isResetPassOpen, setIsResetPassOpen] = useState(false);
  const handelResetPassButtonClick = () => {
    setIsResetPassOpen(true);
    setIsRegisterOpen(false);
    setIsLoginOpen(false);
  };

  const LoginButton = (
    <Button
      variant="link"
      className="justify-start"
      onClick={handeLoginButtonClick}
    >
      Login to account
    </Button>
  );
  const RegisterButton = (
    <Button
      variant="link"
      className="justify-start"
      onClick={handeRegisterButtonClick}
    >
      Create new account
    </Button>
  );

  const ResetButton = (
    <Button
      variant="link"
      className="justify-start"
      onClick={handelResetPassButtonClick}
    >
      Reset Password
    </Button>
  );
  return (
    <>
      <Button
        variant="outline"
        size="icon"
        onClick={handeLoginButtonClick}
        aria-label="Login"
      >
        <MingcuteUser1Line />
      </Button>
      <LoginDialog
        isOpen={isLoginOpen}
        onOpenChange={setIsLoginOpen}
        RegisterButton={RegisterButton}
        ResetButton={ResetButton}
      />
      <RegisterDialog
        isOpen={isRegisterOpen}
        onOpenChange={setIsRegisterOpen}
        LoginButton={LoginButton}
        ResetButton={ResetButton}
      />
      <ResetPassword
        isOpen={isResetPassOpen}
        onOpenChange={setIsResetPassOpen}
        LoginButton={LoginButton}
        RegisterButton={RegisterButton}
      />
    </>
  );
};
