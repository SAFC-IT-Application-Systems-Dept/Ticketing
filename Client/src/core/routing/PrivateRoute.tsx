import React from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context";

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (!isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return <div>Loading.... is Authenticated</div>;
  }

  return <>{children}</>;
};

export default PrivateRoute;
