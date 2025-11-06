import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        Made with 💖 and a little Stardust ✨ by{" "}
        <span style={styles.signature}>OkuhleM</span>
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#000",
    color: "#fff",
    textAlign: "center",
    padding: "20px 0",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
    marginTop: "auto",
    fontFamily: "'Poppins', sans-serif",
  },
  text: {
    fontSize: "0.9rem",
    letterSpacing: "1px",
  },
  signature: {
    color: "#ff69b4", // soft pink for your vibe 💅
    fontWeight: "bold",
    fontStyle: "italic",
  },
};

export default Footer;