import React from 'react'



function Home({handleLogout}) {

    return (
        <div>
            <h1>Home Page</h1>
          <nav>
               <h2>Welcome</h2>
               <button onClick={handleLogout}>Logout</button>
           </nav>
        </div>
    )
}

export default Home



