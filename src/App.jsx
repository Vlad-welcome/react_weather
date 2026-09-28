import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { useSelector, useDispatch } from "react-redux";

import { Weather } from "./pages/index.js";
// import { Header } from './components';

// import { fetchAuthMe, selectIsAuth } from './redux/slices/auth';

export default function App()
{
  //deploy Vercel

  // const isAuth = useSelector(selectIsAuth);

  // const dispatch = useDispatch();
  // React.useEffect(() =>
  // {
  //   if (isAuth)
  //   {
  //     dispatch(fetchAuthMe());
  //   }
  // }, [dispatch]);

  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Weather />}></Route>
      </Routes>
    </>
  );
}
