import { useState } from 'react'

import { MdLocationOn } from 'react-icons/md'
import { GrGithub } from 'react-icons/gr'
import { BiSearch } from 'react-icons/bi'
import { api } from './utils/api';


import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, toast } from 'react-toastify';




interface User {
  name: string;
  avatar_url: string;
  login: string;
  public_repos: string;
  location: string;
  bio: string;
}

function App() {

  const [user, setUser] = useState<User>()
  const [username, setUsername] = useState('');

  const handleSearch = () => {
    api.get(`/users/${username}`)
      .then((response) => {
        setUser(response.data)

        toast.success('Usuário encontrado!')

      }).catch((response) => {
        toast.error('Usuário não encontrado!')

      })
  }



  return (
    <>
      <ToastContainer />
      <div className="flex flex-col items-center mt-20">
        <div className='flex flex-row justify-center text-white gap-2'>
          <div>
            <label className='font-semibold'>Usuário</label>
            <div className='flex flex-row gap-2'>
              <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" placeholder='ex: rocketseat' className='w-96 h-12 bg-gray-800 px-3 rounded-md outline-none hover:bg-gray-700 focus:bg-gray-700 duration-200' />
              <button onClick={handleSearch} className='w-14 h-12 bg-indigo-500 rounded-md hover:bg-indigo-600 duration-150 flex items-center justify-center'><BiSearch size={24} color='#fff' /></button>
            </div>

          </div>

        </div>

        <div className="flex flex-col bg-slate-800 rounded-md mt-10 w-[28rem] divide-y divide-gray-600">
          <header className='flex flex-col items-center justify-center mt-4 py-2'>
            <img src={user?.avatar_url} className='w-28 h-28 border-2 border-indigo-500 rounded-full' alt="" />
            <div className='flex flex-row items-end text-white font-semibold gap-2 mt-3'>
              <MdLocationOn size={24} color='#fff' />
              <p>{user?.location}</p>
            </div>
          </header>

          <div className='px-8 py-10 flex flex-col gap-3'>
            <div className='flex flex-col'>
              <label className='text-gray-600 text-sm'>Nome</label>
              <p className='text-white font-semibold'>{user?.name}</p>
            </div>

            <div className='flex flex-col'>
              <label className='text-gray-600 text-sm'>Usuário</label>
              <p className='text-indigo-500 font-semibold'>{user?.login}</p>
            </div>

            <div className='flex flex-col'>
              <label className='text-gray-600 text-sm'>Biografia</label>
              <p className='text-indigo-400 font-semibold'>"{user?.bio}"</p>
            </div>

            <div className='flex flex-col'>
              <label className='text-gray-600 text-sm'>Repositórios Publicados</label>
              <p className='text-white font-semibold'>{user?.public_repos}</p>
            </div>

            <div className='flex justify-end'>
              <a href={`http://github.com/${username}`} target='_blank'><button className='text-white bg-indigo-500 rounded-md px-3 py-3 flex flex-row gap-2 text-sm font-semibold items-center justify-center hover:bg-indigo-600 duration-200'><GrGithub size={24} color='white' /> Visitar GitHub</button></a>
            </div>
          </div>


        </div>

        <div className='flex flex-row items-center justify-center mt-12 gap-3'>
          <a href='http://github.com/gabrielst03' target='_blank'><div className='w-14 h-14 rounded-md bg-slate-800 hover:bg-slate-700 duration-150 cursor-pointer flex items-center justify-center'>
            <GrGithub size={24} color='white' />
          </div></a>
          <p className='text-white text-lg font-semibold'>Gabriel Santana</p>
        </div>
      </div>
    </>
  )
}

export default App
