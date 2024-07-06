// App.js

import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { FinancialRecordsProvider } from "./contexts/financial-record-context";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";
import { Homepage } from "./pages/Homepage"; 

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="navbar">
          <Link to="/" className="navbar-brand">BudgetBuddy</Link>
          <div className="navbar-links">
            <SignedOut>
              <SignUpButton mode="modal" />
              <SignInButton mode="modal" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
        <div className="homepage-content">
          <SignedOut><Homepage/></SignedOut>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <SignedIn>
                <FinancialRecordsProvider>
                  <Dashboard />
                </FinancialRecordsProvider>
              </SignedIn>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
