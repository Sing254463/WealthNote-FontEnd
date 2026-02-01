import type { Metadata } from "next";
import Formlogin from "@/components/Login_Register/Formlogin";
import SocialLogin from "@/components/Login_Register/SocialLogin";
import AuthCard from "@/components/Login_Register/AuthCard";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to Website",
};

const Login = () => {
  return (
      <AuthCard title="Login">
          <Formlogin />
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="text-gray-500 text-sm">OR</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>
        <SocialLogin />
        <hr className="my-6 border-gray-300" />

        <p className="text-center"> Don&apos;t have an account? <a href="/register" className="text-blue-500 hover:underline">Register here</a></p>

      </AuthCard>
  );
};
export default Login;
