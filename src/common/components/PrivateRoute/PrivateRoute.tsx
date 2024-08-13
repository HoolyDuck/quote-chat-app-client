import { useGetProfileQuery } from "@/lib/api/auth/authApi";
import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

type Properties = {
  children?: React.ReactNode;
};

export const PrivateRoute = ({ children }: Properties) => {
  const { data } = useGetProfileQuery();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (!data) {
      navigate("/login");
    }
  }, [data, navigate]);

  return <>{children}</>;
};
