import { setCookie, getCookie } from 'cookies-next';

export default function handler(req, res) {

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
