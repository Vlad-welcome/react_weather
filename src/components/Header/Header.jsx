// import React from 'react';
// import { Link } from 'react-router-dom';

// import { logout, selectIsAuth } from '../../redux/slices/auth';
// import { useSelector, useDispatch } from "react-redux";

// import { Container, Button } from 'react-bootstrap';

// export const Header = () =>
// {
//   const isAuth = useSelector(selectIsAuth);
//   const dispatch = useDispatch();

//   const onClickLogout = () =>
//   {
//     if (window.confirm('Уверены что хотите выйти?'))
//     {
//       dispatch(logout());
//     }
//   };

//   return (
//     <>
//       <div className='d-flex justify-content-between mb-3'>
//         <div className='d-flex justify-content-center align-items-center'>
//           <Link to="/" className='btn text-decoration-none text-dark'>
//             <div>Home</div>
//           </Link>
//         </div>

//         <div className='d-flex'>
//           {isAuth ? (
//             <>
//               <Link to="/add-post">
//                 <Button variant="primary">Написать статью</Button>
//               </Link>
//               <Button onClick={onClickLogout} variant="primary" className='primary'>
//                 Выйти
//               </Button>
//             </>
//           ) : (
//             <>
//               <Link to="/login">
//                 <Button variant="primary">Войти</Button>
//               </Link>
//               <Link to="/register">
//                 <Button variant="primary">Создать аккаунт</Button>
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };
