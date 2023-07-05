"use client";

import { useCallback, useState } from "react";
import Modal from "./Modal";
import Input from "./Input";
import useloginModal from "../hook/Login";
import useregisterModal from "../hook/Register";

function RegisterModal() {
  const [isLoading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const useregister = useregisterModal();
  const userlogin = useloginModal();

  //Add toogle for register
  const onToggle = useCallback(() => {
    if (isLoading) {
      return;
    }
    useregister.onClose();
    userlogin.onOpen();
  }, [useregister, userlogin, isLoading]);
  const bodyContainer = (
    <div className="flex flex-col gap-4">
      <Input
        disabled={isLoading}
        placeholder="Email"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        disabled={isLoading}
        placeholder="User Name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <Input
        disabled={isLoading}
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );
  // footer container
  const footerContainer = (
    <div className="text-neutral-400 text-center mt-4">
      <p>
        Already have an Account
        <span className="text-white cursor-poiter hover:underline" onClick={onToggle}>
          Sing in
        </span>
      </p>
    </div>
  );
  return (
    <>
      <div>
        <Modal
          disabled={isLoading}
          title="Register an Account"
          actionLabel="Register"
          body={bodyContainer}
          footer={footerContainer}
          isOpen={useregister.isOpen}
        />
      </div>
    </>
  );
}

export default RegisterModal;
