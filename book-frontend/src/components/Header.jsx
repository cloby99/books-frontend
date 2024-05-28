import React from 'react'

function Header({ logoutButton }) {
  return (
    <div>
        <header>
            <nav className='navbar navbar-dark bg-primary' >
              <div className='d-flex justify-content-between align-items-center w-100'>
                <a className="navbar-brand mx-3" href="#">Books Management System</a>
                {React.cloneElement(logoutButton, {
                    className: "btn btn-light mx-3",
                })}
              </div>
                
            </nav>

        </header>
    </div>
  )
}

export default Header