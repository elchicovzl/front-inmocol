import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { Icon, Input } from "semantic-ui-react";
import BasicModal from "../Modal/BasicModal";
import Auth from "../Auth/Auth";
import useAuth from "../../hooks/useAuth";
import { getMeApi } from "../../api/users";
import { useRouter } from "next/router";
import { getTypeUseApi } from "../../api/typeUse";

export default function Header() {
  const router = useRouter();
  const [load, setLoad] = useState(false);
  const [typeUse, setTypeUse] = useState([]);
  const [user, setUser] = useState(undefined);
  const [showModal, setshowModal] = useState(false);
  const [size, setSize] = useState("tiny");
  const { auth, logout } = useAuth();
  const onShowModal = () => setshowModal(true);
  const onCloseModal = () => setshowModal(false);
  const [titleModal, setTitleModal] = useState("Inicia sesión");
  const [searchStr, setSearchStr] = useState("");

  const searchRef = useRef(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(false);

  useEffect(() => {
    (async () => {
      window.addEventListener("scroll", function () {
        let header = document.querySelector(".menu-fixed");
        let windowPosition = window.scrollY > 0;

        if (header) {
          header.classList?.toggle("scrolling-active", windowPosition);
          header.classList?.toggle("logo-home", false);
        }
      });

      if (router.pathname == "/") {
        let logo = document.querySelector(".logo");
        logo.classList?.toggle("logo-home", true);
      }
    })();
  }, [query]);

  useEffect(() => {
    (async () => {
      const response = await getMeApi(logout);
      setUser(response);
    })();
  }, [auth]);

  const onChange = useCallback((event) => {
    const query = event.target.value;
    setQuery(query);
    if (query.length) {
    } else {
      setResults([]);
    }
  }, []);

  const onFocus = useCallback(() => {
    setActive(true);
    window.addEventListener("click", onClick);
  }, []);

  const onClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false);
      window.removeEventListener("click", onClick);
    }
  }, []);

  useEffect(() => {
    if (load) {
      router.push(`/busqueda?query=${query}`);
    }
    setLoad(true);
  }, [query]);

  return (
    <header className="menu-fixed">
      <div className="max-w-screen-xl mx-auto flex justify-between p-5 lg:py-5 lg:px-0">
        <div className="flex items-center space-x-5">
          <Link href="/">
            <h3 className="logo">FRONTERA INMOBILIARIA</h3>
          </Link>
          <div className="hidden md:inline-flex items-center space-x-5 font-bold "></div>
        </div>
        <div className="flex items-center space-x-5 text-green-600">
          <div className="relative" ref={searchRef}>
            <input
              type="text"
              id="search-property"
              name="serch"
              placeholder="Search"
              className="bg-white border border-green-600 text-black h-10 px-5 pr-10 rounded-full text-sm focus:outline-none transparent"
              value={router.query.query || query}
              //onChange={(_, data) => setSearchStr(data.value)}
              onFocus={onFocus}
              onChange={onChange}
            />
            <button type="submit" className="absolute right-0 top-0 mt-2 mr-4">
              <Icon name="search" />
            </button>
          </div>
          {user !== undefined && (
            <MenuOptions
              logout={logout}
              onShowModal={onShowModal}
              user={user}
            />
          )}
        </div>
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
    <h3 onClick={onShowModal} className="login-btn">
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
