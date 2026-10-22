import reactLogo from "../react-logo.png";

export default function Navbar() {
  return (
    <header className="navbar">
      <nav aria-label="Main navigation">
        <img src={reactLogo} alt="React Logo" />
        <span>ReactFacts</span>
      </nav>
    </header>
  );
}
