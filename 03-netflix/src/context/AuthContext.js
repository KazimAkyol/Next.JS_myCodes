"use client";

import React, { createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/auth/firebase";
import { useRouter } from "next/navigation";
import { toastErrorNotify, toastSuccessNotify } from "@/helpers/ToastNotify";

//* auth(firebase) islemlerini yapacagimiz context alani actik:
export const YetkiContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const router = useRouter();

  //* yeni bir kullanici olusturmak icin kullanilan firebase metodu:
  const createUser = async (email, password, displayName) => {
    try {
      //* sitede ilk defa kullanıcı adı oluşturmak için kullanılan firebase metodu:
      await createUserWithEmailAndPassword(auth, email, password);
      //* kullanıcı profilini güncellemek için kullanılan firebase metodu:
      await updateProfile(auth.currentUser, {
        displayName,
      });

      toastSuccessNotify("Register basarili");
      router.push("/profile");
    } catch (error) {
      toastErrorNotify(error.message);
    }
  };

  //* Google ile giris:
  const signUpGooglE = () => {
    //* Google hesaplarına ulaşmak için firebase metodu:
    const provider = new GoogleAuthProvider();

    //* açılır pencere ile giriş yapılması için firebase metodu:
    signInWithPopup(auth, provider)
      .then((result) => {
        router.push("/profile");
        toastSuccessNotify("Google ile giris basarili");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //* kayit olduktan sonra giris icin login'den cagirilacak firebase metodu:
  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);

      router.push("/profile");
      toastSuccessNotify("login basarili");
    } catch (error) {
      toastErrorNotify(error.message);
    }
  };

  const logOut = () => {
    signOut(auth);
    toastSuccessNotify("cikis basarili");
  };

  //* Kullanıcının signIn olup/olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu:
  const userTakip = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user);

        const { email, displayName, photoURL } = user;

        setCurrentUser({ email, displayName, photoURL });
      } else {
        setCurrentUser(false);
      }
    });
  };

  return (
    <YetkiContext.Provider
      value={{ createUser, signUpGooglE, login, logOut, currentUser }}
    >
      {children}
    </YetkiContext.Provider>
  );
};

export default AuthContextProvider;
