// pages/api/cart.js

import { setCookie, getCookie } from 'cookies-next';

export default function handler(req, res) {
  const options = {
    maxAge: 60 * 60 * 24 * 7, // Expires in 7 days
    secure: true, // Only send the cookie over HTTPS
    path: '/', // Set the cookie for the entire domain
    sameSite: 'strict', // Restrict the cookie to same-site requests
  };

  if (req.method === 'GET') {
    // Retrieve cart data from cookies
    const CartItems = getCookie('CartItems', { req, res});
    const TotalPrice = getCookie('TotalPrice', { req, res });
    const TotalQuantities = getCookie('TotalQuantities', { req, res });

    const CartData = {
      CartItems: CartItems ? JSON.parse(CartItems) : [],
      TotalPrice: TotalPrice ? parseFloat(TotalPrice) : 0,
      TotalQuantities: TotalQuantities ? parseInt(TotalQuantities) : 0,
    };
    // console.log(CartData)

    res.status(200).json(CartData);
  } else if (req.method === 'POST') {
    // Save cart data to cookies
    const { CartItems, TotalPrice, TotalQuantities } = req.body;

    setCookie('CartItems', JSON.stringify(CartItems), { req, res, options });
    setCookie('TotalPrice', TotalPrice.toString(), { req, res, options });
    setCookie('TotalQuantities', TotalQuantities.toString(), { req, res, options });

    res.status(200).json({ message: 'Cart data saved successfully' });
  } else {
    // Handle other HTTP methods if needed
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
