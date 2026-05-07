import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");

        setFormData({
          firstName: "",
          lastName: "",
          number: "",
          email: "",
          message: "",
        });
      } else {
        setStatus(data.message || "Failed to send message");
      }
    } catch (error) {
      console.log(error);
      setStatus("Server error");
    }
  };

  return (
    <div className="container" id="contact">
        <div style={styles.container}>
      <h2 style={styles.heading}>Contact Us</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div className="row">
           <div className="col-lg-6" id="input">
             <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
          style={styles.input}
        />
           </div>

        <div className="col-lg-6">
             <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
          style={styles.input}
        />
        </div>

        </div>

        <div className="row">
            <div className="col-lg-6">
                <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
        />
            </div>

              <div className="col-lg-6">
                  <input
        type="number"
        name="number"
        placeholder="Your Number"
        value={formData.number}
        onChange={handleChange}
        required
        style={styles.input} />
         </div>
        </div>
        
       
        


        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          style={styles.textarea}
        />

        <button type="submit" style={styles.button} className="send-btn">
          Send Message
        </button>

        {status && <p style={styles.status}>{status}</p>}
      </form>
    </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "100%",
    margin: "50px auto",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
  },

  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  input: {
    width: "100%",
    marginBottom: "20px",
    padding: "12px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },

  textarea: {
    padding: "12px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    resize: "none",
  },

  button: {
    padding: "12px",
    backgroundColor: "#0d2340",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
 

  status: {
    textAlign: "center",
    marginTop: "10px",
  },
};