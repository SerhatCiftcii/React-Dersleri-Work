import React from 'react'

export const users = [
    {
        username: "serhat",
        password: "12345"
    },
    {
        username: "ahmet",
        password: "54321"
    },
    {
        username: "mehmet",
        password: "11111"

    }
]

function Login() {
    // Fragment <> istersen bunu istersen kapsayıcı div kullan.

    return (
        <>
            <div>
                <p>Kullanıcı Adınız</p>
                <input type="text" />
                <div>
                </div>
                <p>Şifreniz</p>
                <input type="text" />
            </div>
            <br></br>
            <p>Unutmayın, bu bir örnek uygulamadır.</p>
            <button> Giriş Yap</button>


        </>
    )
}

export default Login