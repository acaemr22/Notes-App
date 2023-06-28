import React from 'react'
import Header from './components/Header'
import AddNote from './components/AddNote'
import NotesList from './components/NotesList'

const App = () => {
  return (
    <main className='px-3 py-10 w-screen pt-10 flex flex-col gap-y-5 sm:px-7 justify-center items-center'>
      <Header />
      <AddNote />
      <NotesList />
    </main>
  )
}

export default App