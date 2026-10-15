
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  Fingerprint,
  LockKeyhole,
  Mail,
  Orbit,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import "./AuthPage.css";

function Brand() {
  return (
    <a className="auth-brand" href="/" aria-label="Hybrid Octopus home">
      <span className="auth-brand-icon">
        <Orbit size={23} strokeWidth={1.8} />
      </span>
      <span className="auth-brand-copy">
        <strong>hybrid octopus</strong>
        <small>INTELLIGENCE OPERATING SYSTEM</small>
      </span>
    </a>
  );
}

function AuthIllustration() {
  return (
    <div className="auth-visual" aria-hidden="true">
      <div className="auth-visual-glow" />
      <div className="auth-orbit auth-orbit-a" />
      <div className="auth-orbit auth-orbit-b" />
      <div className="auth-orbit auth-orbit-c" />

      <span className="auth-orbit-node auth-node-a">
        <Sparkles size={17} />
      </span>
      <span className="auth-orbit-node auth-node-b">
        <Fingerprint size={17} />
      </span>
      <span className="auth-orbit-node auth-node-c">
        <ShieldCheck size={17} />
      </span>
      <span className="auth-orbit-node auth-node-d">
        <LockKeyhole size={17} />
      </span>

      <div className="auth-orbit-core">
        <Orbit size={37} strokeWidth={1.5} />
        <span>HYBRID</span>
      </div>
    </div>
  );
}

function AuthForm({ mode, onSwitch, onSubmit }) {
  const isSignup = mode === "signup";
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") || "").trim();
    const password = String(data.get("password") || "");

    if (!email || !password) {
      setError("Please complete all required fields.");
      return;
    }

    if (isSignup && password.length < 8) {
      setError("Your password must contain at least 8 characters.");
      return;
    }

    setError("");
    onSubmit();
  }

  return (
    <div className={`auth-card auth-card-${mode}`}>
      <div className="auth-card-topline">
        <span className="auth-card-icon">
          {isSignup ? <Sparkles size={18} /> : <Fingerprint size={18} />}
        </span>
        <span className="auth-step-label">
          {isSignup ? "YOUR NEXT CHAPTER" : "WELCOME BACK"}
        </span>
        <span className="auth-step-indicator">
          {isSignup ? "02" : "01"} <span>/ 02</span>
        </span>
      </div>

      <div className="auth-heading">
        <h2>{isSignup ? "Create your account." : "Good to see you."}</h2>
        <p>
          {isSignup
            ? "Create your space for connected intelligence."
            : "Sign in and pick up where your intelligence left off."}
        </p>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
        {isSignup && (
          <div className="auth-field">
            <label htmlFor="signup-name">Full name</label>
            <div className="auth-input">
              <input
                id="signup-name"
                name="name"
                type="text"
                placeholder="Your full name"
                autoComplete="name"
                required
              />
            </div>
          </div>
        )}

        <div className="auth-field">
          <label htmlFor={`${mode}-email`}>Email address</label>
          <div className="auth-input">
            <Mail size={17} aria-hidden="true" />
            <input
              id={`${mode}-email`}
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </div>
        </div>

        <div className="auth-field">
          <div className="auth-label-row">
            <label htmlFor={`${mode}-password`}>Password</label>
            {!isSignup && (
              <button
                className="auth-inline-link"
                type="button"
                onClick={() =>
                  setError("Password recovery will be connected with the backend later.")
                }
              >
                Forgot password?
              </button>
            )}
          </div>

          <div className="auth-input">
            <LockKeyhole size={17} aria-hidden="true" />
            <input
              id={`${mode}-password`}
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder={isSignup ? "Create a strong password" : "Enter your password"}
              autoComplete={isSignup ? "new-password" : "current-password"}
              minLength={isSignup ? 8 : undefined}
              required
            />
            <button
              type="button"
              className="auth-eye-button"
              aria-label={showPassword ? "Hide password" : "Show password"}
              onClick={() => setShowPassword((value) => !value)}
            >
              {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
            </button>
          </div>
          {isSignup && (
            <span className="auth-hint">Use at least 8 characters.</span>
          )}
        </div>

        {!isSignup && (
          <label className="auth-remember">
            <input type="checkbox" name="remember" />
            <span>Keep me signed in</span>
          </label>
        )}

        {error && <p className="auth-error" role="alert">{error}</p>}

        <button className="auth-submit" type="submit">
          <span>{isSignup ? "Create account" : "Sign in to workspace"}</span>
          <ArrowRight size={18} />
        </button>

        <div className="auth-security-note">
          <ShieldCheck size={15} />
          <span>Your workspace. Your control. Your intelligence.</span>
        </div>
      </form>

      <div className="auth-card-switch">
        {isSignup ? (
          <>
            <span>Already have an account?</span>
            <button type="button" onClick={() => onSwitch("signin")}>
              Sign in <ArrowRight size={14} />
            </button>
          </>
        ) : (
          <>
            <span>Don&apos;t have an account?</span>
            <button type="button" onClick={() => onSwitch("signup")}>
              Create account <ArrowRight size={14} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("signin");
  const [isFlipping, setIsFlipping] = useState(false);

  function switchMode(nextMode) {
    if (nextMode === mode || isFlipping) return;

    setIsFlipping(true);
    setMode(nextMode);

    window.setTimeout(() => setIsFlipping(false), 750);
  }

  function handleAuthSubmit() {
    // Frontend demo only. Connect real authentication before production.
    navigate("/dashboard");
  }

  return (
    <main className="auth-page">
      <section className="auth-showcase">
        <div className="auth-showcase-glow" />
        <div className="auth-showcase-grid" />

        <Brand />

        <div className="auth-showcase-content">
          <div className="auth-status">
            <span className="auth-status-dot" />
            INTELLIGENCE, CONNECTED
          </div>

          <h1>
            One system.
            <br />
            <span>Infinite</span>
            <br />
            possibilities.
          </h1>

          <p className="auth-description">
            Bring your AI models, memory, workflows, and decisions together
            in one intelligent operating system.
          </p>

          <AuthIllustration />

          <div className="auth-trust-card">
            <span className="auth-trust-icon">
              <ShieldCheck size={18} />
            </span>
            <span>
              <strong>Built for connected intelligence</strong>
              <small>Context, control and clarity in one place.</small>
            </span>
            <span className="auth-trust-check">✓</span>
          </div>
        </div>

        <div className="auth-showcase-footer">
          <span>THINK CLEARER. BUILD SMARTER.</span>
          <span>© 2026 HYBRID OCTOPUS</span>
        </div>
      </section>

      <section className="auth-panel">
        <a href="/" className="auth-back-link">
          <ArrowLeft size={15} />
          Back to website
        </a>

        <div className="auth-panel-content">
          <div className="auth-mobile-brand">
            <Brand />
          </div>

          <div className="auth-card-scene">
            <div
              className={`auth-card-flipper ${
                mode === "signup" ? "is-signup" : ""
              }`}
            >
              <div className="auth-card-face auth-card-front" inert={mode !== "signin"}>
                <AuthForm
                  mode="signin"
                  onSwitch={switchMode}
                  onSubmit={handleAuthSubmit}
                />
              </div>

              <div className="auth-card-face auth-card-back" inert={mode !== "signup"}>
                <AuthForm
                  mode="signup"
                  onSwitch={switchMode}
                  onSubmit={handleAuthSubmit}
                />
              </div>
            </div>
          </div>
        </div>

        <footer className="auth-panel-footer">
          <span>© 2026 Hybrid Octopus OS</span>
          <div>
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
        </footer>
      </section>
    </main>
  );
}
