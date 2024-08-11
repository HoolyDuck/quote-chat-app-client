import { useGetProfileQuery } from "@/lib/api/auth/authApi";
import { setUser } from "@/lib/store/slices/user.slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { data } = useGetProfileQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setUser(data));
    }
  }, [data, dispatch]);

  return (
    <>
      {
        //isLoading && <div>Loading...</div>
      }
      <Outlet />
      <ToastContainer />
    </>
  );
}

export default App;
