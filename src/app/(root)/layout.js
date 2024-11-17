import "../globals.css";
import Navbar from "../_components/navbar";
import Footer from "../_components/footer";

export const metadata = {
  title: "Event Managment System",
  description:
    "Efficiently manage and RSVP to events with our user-friendly platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
