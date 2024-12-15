import React, { useState, useEffect } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    // Display a welcome message when the chatbot is loaded
    setMessages([
      { text: "Welcome to Gov Connect Chatbot!", sender: "bot" },
      { text: "I can assist you with your queries. Please type your message below.", sender: "bot" },
      { text: "For privacy, your messages are kept confidential. How can I help you today?", sender: "bot" },
    ]);
  }, []);

  const handleSendMessage = () => {
    if (userInput.trim()) {
      setMessages([...messages, { text: userInput, sender: "user" }]);
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: generateResponse(userInput), sender: "bot" },
        ]);
      }, 1000); // Simulate bot delay
      setUserInput("");
    }
  };

  const generateResponse = (query) => {
    const severityLevels = [
      {
        level: "Low severity",
        message: "This query is minor and can be addressed at a later time.",
      },
      {
        level: "Medium severity",
        message: "This query is important and needs attention soon.",
      },
      {
        level: "High severity",
        message: "This is a critical issue that requires immediate action.",
      },
      {
        level: "Critical severity",
        message: "This is an emergency! Immediate action is needed to resolve this issue.",
      },
      {
        level: "Informational",
        message: "This is a non-urgent query providing information. No immediate action required.",
      },
      {
        level: "Clarification needed",
        message: "It seems like I need some more details to understand the issue better. Could you clarify?",
      },
      {
        level: "System error",
        message: "There seems to be a technical issue with our system. We're working on it.",
      },
    ];

    // Select a random severity level
    const randomResponse =
      severityLevels[Math.floor(Math.random() * severityLevels.length)];

    return `${randomResponse.message} (Query: ${query})`;
  };

  // Inline Styles
  const styles = {
    chatbotContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "#f5f5f5",
    },
    chatWindow: {
      width: "400px",
      height: "600px",
      background: "#ffffff",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
    },
    chatHeader: {
      background: "#0078d7",
      color: "#ffffff",
      padding: "10px 15px",
      textAlign: "center",
    },
    chatBody: {
      flex: 1,
      padding: "15px",
      overflowY: "auto",
      background: "#f9f9f9",
    },
    chatMessage: {
      margin: "10px 0",
      padding: "10px",
      borderRadius: "10px",
      maxWidth: "70%",
    },
    userMessage: {
      background: "#0078d7",
      color: "#ffffff",
      alignSelf: "flex-end",
    },
    botMessage: {
      background: "#e0e0e0",
      color: "#333333",
      alignSelf: "flex-start",
    },
    chatInput: {
      display: "flex",
      padding: "10px",
      borderTop: "1px solid #dddddd",
    },
    chatInputField: {
      flex: 1,
      padding: "10px",
      border: "1px solid #dddddd",
      borderRadius: "5px",
      marginRight: "10px",
    },
    chatInputButton: {
      padding: "10px 20px",
      background: "#0078d7",
      color: "#ffffff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    chatInputButtonHover: {
      background: "#005bb5",
    },
  };

  return (
    <div style={styles.chatbotContainer}>
      <div style={styles.chatWindow}>
        <div style={styles.chatHeader}>Gov Connect Chatbot</div>
        <div style={styles.chatBody}>
          {messages.map((message, index) => (
            <div
              key={index}
              style={{
                ...styles.chatMessage,
                ...(message.sender === "user"
                  ? styles.userMessage
                  : styles.botMessage),
              }}
            >
              {message.text}
            </div>
          ))}
        </div>
        <div style={styles.chatInput}>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your query..."
            style={styles.chatInputField}
          />
          <button
            onClick={handleSendMessage}
            style={styles.chatInputButton}
            onMouseOver={(e) => (e.target.style.background = styles.chatInputButtonHover.background)}
            onMouseOut={(e) => (e.target.style.background = "#0078d7")}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
