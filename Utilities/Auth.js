// // import jwtDecode from 'jwt-decode';
// import UseAuthStore from '@/Store/AuthStore';

// const { UserProfile } = UseAuthStore()

// const isAuth = async (req, res, next) => {
//     const tokenFromAnotherComponent = UserProfile.Token;
//     const { authorization } = req.headers;
//     if (authorization) {
//         const token = authorization.slice(7, authorization.length);
//          // BEARER XXX
//         try {
//             if (condition) {
                
//             } else {
                
//             }
//             // const decoded = jwtDecode(token);
//             req.user = decoded;
//             next();
//         } catch (error) {
//             res.status(401).send({ message: 'Token is not valid' });
//         }
//     } else {
//         res.status(401).send({ message: 'Token is not supplied' });
//     }
// };

// // Example usage

// export default isAuth