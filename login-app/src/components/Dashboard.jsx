import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Dashboard = ({ username, onLogout }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_ncsvabj',    // Replace with your EmailJS service ID
      'template_0c5z1te',   
      form.current,
      'G-5rED5PWpxR3YQMh'     // Replace with your EmailJS public key
    ).then(
      (result) => {
        alert("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        alert("Failed to send message. Please try again.");
      }
    );
  };

  const dummyProducts = [
    {
      id: 1,
      name: "Purple Designer Bag",
      price: "$129.99",
      stock: 10,
      image: "https://via.placeholder.com/150?text=Bag",
    },
    {
      id: 2,
      name: "Smart Watch Pro",
      price: "$249.99",
      stock: 5,
      image: "https://via.placeholder.com/150?text=Watch",
    },
    {
      id: 3,
      name: "Wireless Headphones",
      price: "$99.99",
      stock: 20,
      image: "https://via.placeholder.com/150?text=Headphones",
    },
  ];

  const dummyOrders = [
    { id: 101, product: "Purple Designer Bag", quantity: 1, total: "$129.99" },
    { id: 102, product: "Smart Watch Pro", quantity: 2, total: "$499.98" },
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Navbar */}
      <nav style={{ backgroundColor: "purple", padding: "10px", color: "white", display: "flex", justifyContent: "space-around" }}>
        <a href="#home" style={{ color: "white", textDecoration: "none" }}>Home</a>
        <a href="#about" style={{ color: "white", textDecoration: "none" }}>About Us</a>
        <a href="#contact" style={{ color: "white", textDecoration: "none" }}>Contact Us</a>
        <button onClick={onLogout} style={{ backgroundColor: "white", color: "purple", border: "none", padding: "5px 10px", cursor: "pointer" }}>Logout</button>
      </nav>

      <div style={{ padding: "20px" }}>
        {/* Welcome Message */}
        <h2 id="home" style={{ textAlign: "center", marginBottom: "20px" }}>
          Welcome, {username}!
        </h2>

        {/* Products Section */}
        <div>
          <h3>Products</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
            {dummyProducts.map((product) => (
              <div key={product.id} style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "10px", textAlign: "center", backgroundColor: "#f9f9f9" }}>
                <img src={product.image} alt={product.name} style={{ width: "100%", borderRadius: "8px" }} />
                <h4>{product.name}</h4>
                <p><b>Price:</b> {product.price}</p>
                <p style={{ color: "gray" }}><b>Stock:</b> {product.stock}</p>
                <button style={{ padding: "10px", backgroundColor: "purple", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>

        {/* Orders Section */}
        <div style={{ marginTop: "40px" }}>
          <h3>Orders</h3>
          <table style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "#f9f9f9" }}>
            <thead>
              <tr>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>ID</th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>Product</th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>Quantity</th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>Total</th>
              </tr>
            </thead>
            <tbody>
              {dummyOrders.map((order) => (
                <tr key={order.id}>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>{order.id}</td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>{order.product}</td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>{order.quantity}</td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>{order.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* About Us Section */}
        <div id="about" style={{ marginTop: "60px" }}>
          <h3>About Us</h3>
          <p>Welcome to ShopEase! We offer the best products at unbeatable prices. Quality and customer satisfaction are our top priorities!</p>
        </div>

        {/* Contact Us Form */}
        <div id="contact" style={{ marginTop: "60px" }}>
          <h3>Contact Us</h3>
          <form ref={form} onSubmit={sendEmail} style={{ maxWidth: "500px", margin: "auto" }}>
            <div style={{ marginBottom: "10px" }}>
              <label>Name:</label><br />
              <input type="text" name="user_name" required style={{ width: "100%", padding: "8px" }} />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label>Email:</label><br />
              <input type="email" name="user_email" required style={{ width: "100%", padding: "8px" }} />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label>Message:</label><br />
              <textarea name="message" required style={{ width: "100%", padding: "8px" }}></textarea>
            </div>
            <button type="submit" style={{ padding: "10px 20px", backgroundColor: "purple", color: "white", border: "none", cursor: "pointer" }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
