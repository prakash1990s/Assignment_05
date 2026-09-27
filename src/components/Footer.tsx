import React from "react";
import logo from "../assets/logo-text.png";

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <footer
      style={{
        padding: "60px 6% 20px",
        backgroundColor: "#ffffff",
        color: "#94a3b8",
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns:
            "2fr 1fr 1fr 1fr",
          gap: "20px",
        }}
      >
        {/* Brand */}
        <div>
          <img
            src={logo}
            alt="DevStack Logo"
            style={{
              width: "150px",
              marginBottom: "15px",
            }}
          />

          <p
            style={{
              maxWidth: "600px",
              color: "#94a3b8",
              lineHeight: 1.5,
            }}
          >
            Curated tools, technologies and resources for developers building <br/>
            modern software.
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            <button
              style={{
                background: "none",
                border: "none",
                color: "#475569",
                cursor: "pointer",
              }}
            >
              GitHub
            </button>

            <button
              style={{
                background: "none",
                border: "none",
                color: "#475569",
                cursor: "pointer",
              }}
            >
              Twitter
            </button>


              <br/>


            <button
              style={{
                background: "none",
                border: "none",
                color: "#475569",
                cursor: "pointer",
              }}
            >
              LinkedIn
            </button>
          </div>
        </div>

        {/* Products */}
        <div>
          <h3
            style={{
              color: "#0a0f1d",
              marginBottom: "20px",
            }}
          >
            Products
          </h3>

          <p
            onClick={() => scrollToSection("home")}
            style={{
              color: "#cbd5e1",
              cursor: "pointer",
            }}
          >
            Home
          </p>

          <p
            onClick={() =>
              scrollToSection("technologies")
            }
            style={{
              color: "#cbd5e1",
              cursor: "pointer",
            }}
          >
            Technologies
          </p>

          <p
            onClick={() => scrollToSection("projects")}
            style={{
              color: "#cbd5e1",
              cursor: "pointer",
            }}
          >
            Projects
          </p>
        </div>

        {/* Company */}
        <div>
          <h3
            style={{
              color: "#0a0f1d",
              marginBottom: "20px",
            }}
          >
            Company
          </h3>

          <p
            onClick={() => scrollToSection("about")}
            style={{
              color: "#cbd5e1",
              cursor: "pointer",
            }}
          >
            About
          </p>

          <p
            onClick={() => scrollToSection("contact")}
            style={{
              color: "#cbd5e1",
              cursor: "pointer",
            }}
          >
            Contact
          </p>

          <p
            style={{
              color: "#cbd5e1",
            }}
          >
            Career
          </p>
        </div>

        {/* Legal */}
        <div>
          <h3
            style={{
              color: "#0a0f1d",
              marginBottom: "20px",
            }}
          >
            Legal
          </h3>

            <br/>

          <p
            style={{
              color: "#cbd5e1",
              cursor: "pointer",
            }}
          >
            Privacy Policy
          </p>

          <p
            style={{
              color: "#cbd5e1",
              cursor: "pointer",
            }}
          >
            Terms of Service
          </p>
        </div>
      </div>

    <br/>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          color: "#94a3b8",
        }}
      >
        <p>
          © 2026 DevStack, All rights reserved.
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          <span>Privacy</span>
          <span>Terms</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
