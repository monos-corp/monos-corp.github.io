import React from "react";
import "./styles/AppDrawer.css";

const AppDrawer = () => {
  const apps = [
    { name: "YouTube", url: "https://youtube.com" },
    { name: "Drive", url: "https://drive.google.com" },
    { name: "Docs", url: "https://docs.google.com" },
  ];

  return (
    <div className="app-drawer">
      {apps.map((app) => (
        <button
          key={app.name}
          onClick={() => window.open(app.url, "_blank")}
          className="app-icon"
        >
          {app.name}
        </button>
      ))}
    </div>
  );
};

export default AppDrawer;
