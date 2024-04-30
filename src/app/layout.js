import { Inter } from "next/font/google";
const mongoose = require('mongoose')

require("dotenv").config()


const connectToMongo = async () => {
  await mongoose.createConnection(`${process.env.mongodbURL}`, (err) => {console.log(err)});
  console.log("Connected to database!")
};

connectToMongo();


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Admin Panel",
  description: "Admin Panel for Discord Bot",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
