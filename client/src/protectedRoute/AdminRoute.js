import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import MasterLayout from "../layouts/admin/MasterLayout";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

function AdminRoute(props) {
  const [authenticate, setAuthenticate] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/api/checkAuthenticated").then((res) => {
      if (res.status === 200) {
        setAuthenticate(true);
        setLoading(false);
      }
    });
    return () => {
      setAuthenticate(false);
    };
  }, []);

  axios.interceptors.response.use(
    undefined,
    function axiosRetryInterseptor(err) {
      if (err.response.status === 401) {
        swal("Unauthorized", err.response.data.message, "warning");
        navigate("/login");
      }
      return Promise.reject(err);
    }
  );

  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response.status === 403) {
        swal("Forbedden", error.response.data.message, "warning");
        navigate("/");
      } else if (error.response.status === 404) {
        swal("404 Error", error.response.data.message, "warning");
        navigate("/404");
      }
      return Promise.reject(error);
    }
  );

  if (loading) {
    return (
      <div className="text-center py-3">
        <h1>Loading...</h1>
      </div>
    );
  }

  return <>{authenticate ? <MasterLayout {...props} /> : navigate("/login")}</>;
}

export default AdminRoute;
