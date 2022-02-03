import React, { useState } from "react";
import { Input, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { loginApi, resetPasswordApi } from "../../../api/users";
import useAuth from "../../../hooks/useAuth";

export default function LoginForm(props) {
  const { showRegisterForm, onCloseModal } = props;
  const [loading, setloading] = useState(false);
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setloading(true);

      const response = await loginApi(formData);
      if (response?.jwt) {
        login(response.jwt);
        onCloseModal();
      } else {
        toast.error("Usuario o contraseña incorrecto");
      }
      setloading(false);
    },
  });

  const resetPassword = () => {
    formik.setErrors({});
    const validateEmail = Yup.string().email().required();

    if (!validateEmail.isValidSync(formik.values.identifier)) {
      formik.setErrors({ identifier: "El correo es requerido" });
    } else {
      resetPasswordApi(formik.values.identifier);
    }
  };

  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        className="flex justify-center self-center  z-10"
      >
        <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
          <div className="mb-4">
            <p className="text-gray-500">Por favor ingresa en tu cuenta.</p>
          </div>
          <div className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 tracking-wide">
                Correo
              </label>
              <input
                className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                type=""
                placeholder="mail@gmail.com"
                name="identifier"
                onChange={formik.handleChange}
              />
              <span className="block text-xs text-red-600">
                {formik.errors.identifier}
              </span>
            </div>
            <div className="space-y-2">
              <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                Contraseña
              </label>
              <input
                className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                type="password"
                placeholder="Enter your password"
                name="password"
                onChange={formik.handleChange}
              />
              <span className="block text-xs text-red-600">
                {formik.errors.password}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                />
                <label
                  for="remember_me"
                  className="ml-2 block text-sm text-gray-800"
                >
                  Recuerdame
                </label>
              </div>
              <div className="text-sm cursor-pointer">
                <a
                  onClick={resetPassword}
                  className="text-green-400 hover:text-green-500"
                >
                  Olvido su contraseña?
                </a>
              </div>
            </div>
            <div>
              <Button type="submit" className="login-buttom" loading={loading}>
                Iniciar Sesión
              </Button>
            </div>
          </div>
          <div className="text-sm text-center mt-5 cursor-pointer">
            <a
              onClick={showRegisterForm}
              className="text-grey-400 hover:text-green-700"
            >
              Registrate!
            </a>
          </div>
          <div className="pt-5 text-center text-gray-400 text-xs">
            <span>Copyright © 2021-2022</span>
          </div>
        </div>
      </form>
    </div>
  );
}

function initialValues() {
  return {
    identifier: "",
    password: "",
  };
}

function validationSchema() {
  return {
    identifier: Yup.string().email().required("El correo es requerido"),
    password: Yup.string().required("la contraseña es requerida"),
  };
}
