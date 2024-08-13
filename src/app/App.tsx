import { Container } from "@/common/components/Container/Container";
import { Loader } from "@/common/components/Loader/Loader";
import { useSocketSetup } from "@/common/hooks/useSocketSetup";
import { useGetProfileQuery } from "@/lib/api/auth/authApi";
import { SocketProvider } from "@/lib/socket/SocketProvider";
import { setUser } from "@/lib/store/slices/user.slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { data, isLoading } = useGetProfileQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setUser(data));
    }
  }, [data, dispatch]);

  useSocketSetup();

  if (isLoading) {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }

  return (
    <>
      <SocketProvider>
        <Outlet />
      </SocketProvider>
      <ToastContainer
        closeOnClick
        autoClose={2000}
      />
    </>
  );
}

export default App;
