import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Icon } from "semantic-ui-react";
import BasicModal from "../Modal/BasicModal";
import Auth from "../Auth/Auth";
import useAuth from "../../hooks/useAuth";
import { getMeApi } from "../../api/users";
import { getTypeUseApi } from "../../api/typeUse";

export default function Header() {
  const [typeUse, setTypeUse] = useState([]);
  const [user, setUser] = useState(undefined);
  const [showModal, setshowModal] = useState(false);
  const [size, setSize] = useState("tiny");
  const { auth, logout } = useAuth();

  useEffect(() => {
    (async () => {
      const response = await getMeApi(logout);
      setUser(response);
    })();
  }, [auth]);

  const onShowModal = () => setshowModal(true);
  const onCloseModal = () => setshowModal(false);
  const [titleModal, setTitleModal] = useState("Inicia sesión");

  return (
    <header className="flex justify-between p-5 lg:py-5 lg:px-0">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <h3 className="text-xl font-bold font-sans text-green-600 cursor-pointer">
            FRONTERA INMOBILIARIA
          </h3>
        </Link>
        <div className="hidden md:inline-flex items-center space-x-5 font-bold ">
          <h3 className="cursor-pointer">Servicios</h3>
          <h3 className="cursor-pointer">Contacto</h3>
        </div>
      </div>
      <div className="flex items-center space-x-5 text-green-600">
        <div className="relative">
          <input
            type="search"
            name="serch"
            placeholder="Search"
            className="bg-white border border-green-600 h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
          />
          <button type="submit" className="absolute right-0 top-0 mt-2 mr-4">
            <Icon name="search" />
          </button>
        </div>
        {user !== undefined && (
          <MenuOptions logout={logout} onShowModal={onShowModal} user={user} />
        )}
      </div>
      <BasicModal
        show={showModal}
        setShow={setshowModal}
        title={titleModal}
        size={size}
      >
        <Auth
          onCloseModal={onCloseModal}
          setTitleModal={setTitleModal}
          setSize={setSize}
        />
      </BasicModal>
    </header>
  );
}

function MenuOptions(props) {
  const { logout, onShowModal, user } = props;

  return (
    <>
      {user ? (
        <>
          <div className="flex items-baseline cursor-pointer">
            <Icon name="user" />
            <h3 className="capitalize">{user.username}</h3>
          </div>

          <Logout logout={logout} />
        </>
      ) : (
        <Signin onShowModal={onShowModal} />
      )}
    </>
  );
}

function Signin(props) {
  const { onShowModal } = props;

  return (
    <h3
      onClick={onShowModal}
      className="text-white bg-green-600 px-4 py-1 hover:bg-green-500 rounded-full cursor-pointer"
    >
      Ingresa
    </h3>
  );
}

function Logout(props) {
  const { logout } = props;
  return (
    <h3 className="cursor-pointer" onClick={logout}>
      Cerrar sesión
    </h3>
  );
}
