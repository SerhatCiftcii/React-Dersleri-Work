import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

const BASE_URL = 'http://localhost:3005'

function App() {
  const getallUsers = async () => {
    const response =
      await axios.get(BASE_URL + '/users');
    console.log(response.data)
  }
  /*const getUserById = async (id) => {
    const response = await axios.get(BASE_URL + '/users/' + id);
    console.log(response.data)*/


  const createuser = async (newUser) => {
    //post veri ekleme
    const response = await axios.post(BASE_URL + '/users', newUser);
    console.log("response", response.data);
  }

  const updateUser = async (userId, updateUser) => {
    //Put veri güncellemea userıdsi 2 olan userın yenı değeri updateuser
    await axios.put(BASE_URL + '/users/' + userId, updateUser);
  }

  const DeleteUserById = async (userId) => {
    await axios.delete(BASE_URL + '/users/' + userId);
    console.log("User deleted with ID:", userId);
  }







  // 2. farklı bir apiden yani jsonplaceholder fake apiden bu sefer veri çekcez asenkrom problem mantığı
  //alt gr ; ile betik yapılır yukardakının diğeri yazmıyla yapıyorum aynı işi yapıyorlar

  const getUserById = async (UserId) => {
    const response = await axios.get(`${BASE_URL}/users/${UserId}`);
    return response.data.postId;
  }

  const getPostById = async (postId) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    return response.data;
  }

  const getPost = async () => {
    const postId = await getUserById(1);
    const PostData = await getPostById(postId)
    console.log(PostData)
  }

  useEffect(() => {
    //getallUsers();//component ilk yuklendiğinde çalıştır.
    getUserById(1); //id'si 1 olan kullanıcıyı getir.

    /* const newUser = {
       "username": "newuser",
       "pasword": "newpassword"
     }
     createuser(newUser); //yeni kullanıcı oluşturma*/

    /*updateUser("70fb", {
      "username": "Serhat yeni değer",
      "password": 64564
    })*/

    //delete işlemi
    //  9b43 id'sine sahip kullanıcıyı sil
    /* DeleteUserById("9b43")*/


    getPost(); //post verisini çekme

  }, [])


  return (
    <div>

    </div>
  )
}

export default App
