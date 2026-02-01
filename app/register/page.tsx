import AuthCard from "@/components/Login_Register/AuthCard";
import FormRegister from "@/components/Login_Register/FormRegister";
import SocialRegister from "@/components/Login_Register/SocialRegister";

export const Register = () => {
  return (
    <>
      <AuthCard title="Register">
        <FormRegister />
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="text-gray-500 text-sm">OR</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        <SocialRegister />

        <hr className="my-6 border-gray-300" />

        <p className="text-center"> Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login here</a></p>

      </AuthCard>
    </>
  );
};
export default Register;
