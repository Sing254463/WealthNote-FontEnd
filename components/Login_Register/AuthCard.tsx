import { ReactNode } from "react";

interface AuthCardProps {
  title: string;
  children: ReactNode;
}
const AuthCard = ({ title, children }: AuthCardProps) => {
  return (
     <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-1/3">
        <div className="p-6">
          <h5 className="text-3xl text-center font-bold mb-6">{title}</h5>
          {children}
        </div>
      </div>
    </div>
  )
}
export default AuthCard