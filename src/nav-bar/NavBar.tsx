import './NavBar.css';

export default function NavBar() {
  return (
    <div className='nav-bar'>
      <a href="/">DOTASTATS</a>
      <nav>
        <a href="/heroes">Heroes</a>
      </nav>
    </div>
  );
}