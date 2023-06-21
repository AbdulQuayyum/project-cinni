import { mailOptions, transporter } from "@/Configuration/Nodemailer";

const handler = async (req, res) => {
    if (req.method === "POST") {
      const data = req.body;
      if (!data || !data.Charges || !data.TotalPrice || !data.PaymentMethod || !data.ShippingAddress || !data.OrderItems || !data.UserName || !data.User) {
        return res.status(400).send({ message: "Bad request" });
      }
  
      try {
        await transporter.sendMail({
          ...mailOptions,
          ...generateEmailContent(data),
          subject: data.subject,
        });
  
        return res.status(200).json({ success: true });
      } catch (err) {
        console.log(err);
        return res.status(400).json({ message: err.message });
      }
    }
    return res.status(400).json({ message: "Bad request" });
  };
  export default handler;