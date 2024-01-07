import { useRouter } from "next/navigation";
import { useEffect, ReactNode } from "react";
import { useAuth } from "@/context/auth";
interface AuthGuardProps {
  children: ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!user && !loading) {
      router.replace("/"); // Redirect to login page if not authenticated
    }
  }, [user, loading, router]);

  if (loading) {
    // Show a loading spinner or skeleton screen while checking authentication status
    return <p>Loading...</p>;
  }

  return <>{children}</>;
};

export default AuthGuard;
