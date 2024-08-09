import { useGetProfileQuery } from "@/lib/api/auth/authApi";
import { setUser } from "@/lib/store/slices/user.slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

function App() {
  const { data, isLoading } = useGetProfileQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setUser(data));
    }
  }, [data]);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      <Outlet />
    </>
  );
}

export default App;
