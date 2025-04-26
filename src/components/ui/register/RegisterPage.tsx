import React from "react";

const RegisterPage = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="font-main w-full py-10">
      <div className="container">
        <div className="mx-auto space-y-7 lg:w-[600px]">
          <h1 className="text-text-main text-2xl font-bold">{title}</h1>
          <div className="border-stroke space-y-5 rounded-sm border p-4 text-center lg:p-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
