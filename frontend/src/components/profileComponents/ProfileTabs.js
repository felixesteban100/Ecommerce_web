import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateUserProfile } from "../../Redux/Actions/userActions";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";
import Toast from "./../LoadingError/Toast";

const ProfileTabs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const toastId = React.useRef(null);

  const Toastobject = {
    pauseOnFocusLoss:false,
    draggable:false,
    pauseOnHover:false,
    autoClose:2000,//means 2s
  }

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { loading: updateLoading } = userUpdateProfile;

  useEffect(()=>{
    if (user) {
      setName(user.name)
      setEmail(user.email)
    }
  },[dispatch, user])

  const submitHandler = (e) => {
    e.preventDefault();
    // Password match
    if (password !== confirmPassword) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error("Passwords do not match", Toastobject);
      }
      
    }
    else{
      // UPDATE PROFILE
      dispatch(updateUserProfile({id:user._id,name,email,password}));
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.success("Profile updated", Toastobject);
      }
    }
  }

  return (
    <>
      <Toast />
      {error && <Message variant={"alert-danger"}>{error}</Message>}
      {loading && <Loading/>}
      {updateLoading && <Loading/>}
      <form className="row  form-container" onSubmit={submitHandler}>
        <div className="col-md-6">
          <div className="form">
            <label for="account-fn">Nombre de usuario</label>
            <input 
              className="form-control" 
              type="text" 
              required 
              value={name} 
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form">
            <label for="account-email">E-mail</label>
            <input 
              className="form-control" 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form">
            <label for="account-pass">Nueva contraseña</label>
            <input 
              className="form-control" 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form">
            <label for="account-confirm-pass">Confirmar contraseña</label>
            <input 
              className="form-control" 
              type="password" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>
        <button type="submit">Actualizar Perfil</button>
      </form>
    </>
  );
};

export default ProfileTabs;
