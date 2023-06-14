import { setCookie, getCookie } from 'cookies-next';

export default function handler(req, res) {
  // Calculate the expiration time in milliseconds from the current time
  const expirationTime = new Date().getTime() + (7 * 24 * 60 * 60 * 1000); // 7 days in milliseconds

  // Create a new Date object using the expiration time
  // const expirationDate = new Date(expirationTime);
  const expirationDate = new Date('2023-07-14T01:54:38.188Z')

  const options = {
    // secure: true, // Set the Secure flag
    // httpOnly: true,
    expires: expirationDate,
    // maxAge: 60 * 60 * 24 * 7, // Expires in 7 days
    // secure: true, // Only send the cookie over HTTPS
    path: '/', // Set the cookie for the entire domain
    sameSite: 'strict', // Restrict the cookie to same-site requests
  };


  if (req.method === 'GET') {
    // Retrieve cart data from cookies
    const CartItems = getCookie('QAZWSX', { req, res });
    const Charges = getCookie('UJMIK', { req, res });
    const TotalPrice = getCookie('EDCRFV', { req, res });
    const TotalQuantities = getCookie('TGBYHN', { req, res });

    const CartData = {
      CartItems: CartItems ? JSON.parse(CartItems) : [],
      Charges: Charges ? parseFloat(Charges) : 0,
      TotalPrice: TotalPrice ? parseFloat(TotalPrice) : 0,
      TotalQuantities: TotalQuantities ? parseInt(TotalQuantities) : 0,
    };
    // console.log(CartData)

    res.status(200).json(CartData);
  } else if (req.method === 'POST') {
    // Save cart data to cookies
    const { CartItems, Charges, TotalPrice, TotalQuantities } = req.body;

    setCookie('QAZWSX', JSON.stringify(CartItems), { req, res, maxAge: 60 * 60 * 24 * 7 });
    setCookie('EDCRFV', TotalPrice.toString(), { req, res, maxAge: 60 * 60 * 24 * 7 });
    setCookie('TGBYHN', TotalQuantities.toString(), { req, res, maxAge: 60 * 60 * 24 * 7 });
    setCookie('UJMIK', Charges.toString(), { req, res, maxAge: 60 * 60 * 24 * 7 });

    res.status(200).json({ message: 'Cart data saved successfully' });
  } else {
    // Handle other HTTP methods if needed
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
