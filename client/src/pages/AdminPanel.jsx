import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/contextProvider";
import axios from "axios";
function AdminPanel() {
  const { logout } = useAuth();
  const [loading, setLoading] = useState(true);
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const [allUsers, setAllUsers] = useState([]);
  async function deleteUser(id) {
    try {
      const response = await axios.delete(
        `${API_URL}/admin/delete/user/${id}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      console.log(response);
      if (response.data.success) {
        fetchUsers();
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function fetchUsers() {
    try {
      const response = await axios.get(`${API_URL}/admin/allusers`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      console.log(response);
      if (response.data.success) {
        setAllUsers(response.data.users);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  async function handleLogout() {
    await logout();
    navigate("/");
  }
  useEffect(() => {
    fetchUsers();
  }, []);
  if (loading) return <div>Loading secure session...</div>;
  return (
    <div>
      <Header />
      <div className="mt-20 ml-7 flex gap-60">
        <div className="flex flex-col">
          <button
            onClick={() => navigate("/adminpanel")}
            className="py-4 px-15 text-2xl font-light bg-lightblue/30 rounded cursor-pointer"
          >
            Users
          </button>
          <button
            onClick={() => navigate("/adminpanel/offers")}
            className="py-4 px-15 text-2xl font-light rounded cursor-pointer"
          >
            Offers
          </button>
        </div>
        <div>
          <div className="w-full px-10 py-15 bg-white rounded-lg shadow-md flex flex-col items-center">
            <h2 className="text-5xl font-bold mb-12 text-center">All users</h2>

            <div className="flex flex-col gap-8 text-xl mb-10">
              {allUsers.map((user) => (
                <div className="grid grid-cols-[2fr_1fr] gap-50 items-center">
                  <div>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                  </div>
                  <div>
                    <button onClick={() => deleteUser(user._id)}>
                      <img
                        className="w-7 h-7 cursor-pointer"
                        src="/delete.png"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={handleLogout}
              className="cursor-pointer py-3 px-10 text-xl font-bold text-white bg-red-600/60 w-60 rounded"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
