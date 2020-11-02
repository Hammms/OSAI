 
   
   class html{
     SideBar = () => {
        return(
        
         <div className="pure-menu">
            <a className="pure-menu-heading" href="{{ url_for('index') }}">Name</a>
    
             <ul className="pure-menu-list">
                <li className="pure-menu-item"><a href="{{ url_for('logout') }}" className="pure-menu-link">Logout</a></li>
                <li className="pure-menu-item"><a href="{{ url_for('signin') }}" className="pure-menu-link">Sign in</a></li>
                <li className="pure-menu-item"><a href="{{ url_for('about')}}" className="pure-menu-link">About</a></li>
                <li className="pure-menu-item menu-item-divided pure-menu-selected">
                    <a href="#" className="pure-menu-link">Terms</a>
                </li>
    
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Contact</a></li>
              </ul>
         </div>
       
          );
            
    }
   
}
export{html}
