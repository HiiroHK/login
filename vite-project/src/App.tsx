import './App.css'

function App() {

  return (
    <>
    <div className='bg-indigo-200 h-screen'>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='bg-blue-500 lg:min-h-screen lg:flex lg:itens-center p-8 sm:p-12'>
          <div className='flex-grow'>
            <h1 className='text-white text-center text-2xl sm:text-5xl mb-2'>
              seja bem vindo(a)
            </h1>
            <p className='text-center text-blue-200 sm:text-lg'>
              faça seu login
            </p>
          </div>
        </div>
      </div>
      <div className='lg:min-h-screen lg:flex lg:items-center p-12 lg:p-24 xl:p-48'>
        <div className='flex-grow bg-white shadow-xl rounded-md border border-gray-300 h-4'>

        </div>
      </div>
    </div>
    </>
  )
}

export default App
