import React from 'react'



function SignIn(props) {
    const {email, password, setEmail, setPassword,
        handleLogin, handleSignup, hasAccount, setHasAccount,
        emailError, passwordError, SignInWithGoogle
      }  = props;

 

    return (
        < div className='flex-col shadow-md text-2xl w-11/12 py-20 mt-20 min-w-max max-w-sm max-w-xl w-1200  min-h-700 max-h-full justify-between items-center bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 p-10 rounded-md text-white hover:text-white-200'>
           
           <section className='max-h-full px-10 justify-between'>
            <div className='max-h-full'>
                 <label>Email </label>
                   <input className="p-3 pr-40 w-full rounded-sm mb-4 flex text-gray-600 text-xl shadow-md"
                       type='text'
                        autoFocus required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                   <p className='errorMsg'>{emailError}</p>

                  <label>Password </label> 
                    <input   className="p-3 pr-40 w-full rounded-sm mb-4 flex text-gray-600 text-xl shadow-md"
                       type='password'
                       required
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                     /> <br/>
                    
                   <p className='errorMsg'>{passwordError}</p>

                   <div className='btnContainer'>
                      {hasAccount ? (  // if the user has an account show this
                        <>
                          <button onClick={handleLogin}>Sign in</button>
                          <p class='text-md'>Have an account ? 
                            <span onClick={(e) => setHasAccount(!hasAccount)}>Sign up</span></p>
                        </>
                      ):(  // if user does not have an account then show this
                        <>
                           <button onClick={handleSignup} className='mb-4 bg-green-500 hover:bg-green-700 rounded-md pt-2 pb-3 p-1 w-1/2 flex items-center justify-center shadow-md'>Sign up</button>
                           <p className='text-sm mb-14'>Have an account?
                             <span onClick={(e) => setHasAccount(!hasAccount)} className="p-3 cursor-pointer text-xl shadow-sm hover:shadow-md mx-2 my-4">  Sign in</span></p>
                        </>
                      )
                    }
                   </div>
            </div>
           
         
       </section> 

                <button onClick={SignInWithGoogle} className='min-h-6 px-10 py-4 rounded-md flex ml-10 bg-green-500 hover:bg-green-700 text-white shadow-md'>Sign In With Google</button><br/>
        </div>
        
    )
}

export default SignIn






