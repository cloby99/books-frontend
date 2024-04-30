import React from 'react'

function Header({ logoutButton }) {
  return (
    <div>
        <header>
            <nav className='navbar navbar-dark bg-primary' >
              <div className='d-flex justify-content-between align-items-center'>
                <a className="navbar-brand mx-3" href="#">Books Management System</a>
                {React.cloneElement(logoutButton, {
                    className: "btn btn-light",
                })}
              </div>
                
            </nav>

        </header>
    </div>
  )
}

export default Header