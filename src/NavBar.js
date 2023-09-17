import { Menubar } from 'primereact/menubar';

function NavBar(props) {

  const items = [];  

  const start = <div onClick={props.onLogoClick} className="nav-logo"><span className="pi pi-bolt" style={{ fontSize: '1.5rem' }}></span><span> Three Pics</span></div>;
  const end = <span onClick={props.onProfileClick} className="pi pi-user" style={{ fontSize: '1.5rem' }}></span>;

  return (
    <div className="card">
      <Menubar model={items} start={start} end={end} />
    </div>
  )
}

export default NavBar;
