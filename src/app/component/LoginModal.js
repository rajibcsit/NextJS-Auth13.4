"use client";
import { useState } from "react";
import Modal from "./Modal";
import Input from "./Input";
import useloginModal from "../hook/Login";

function LoginModal() {
  const [isLoading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const userlogin = useloginModal();

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
        Don Not Have an Account
        <span className="text-white cursor-poiter hover:underline">Sing in</span>
      </p>
    </div>
  );
  return (
    <>
      <div>
        <Modal
          disabled={isLoading}
          title="Login your account"
          actionLabel="Register"
          body={bodyContainer}
          footer={footerContainer}
          isOpen={userlogin.isOpen}
        />
      </div>
    </>
  );
}

export default LoginModal;
