
function App() {

 const handelSubmit = (e) => {
   e.preventDefault();
 }

  return (
    <div className='bg-neutral-900 h-screen w-full flex justify-center items-center'>

        <form action="submit" onSubmit={handelSubmit} className='flex flex-col gap-4 items-center bg-red-300 p-4 rounded-2xl w-2xl h-auto'>
          <div>
            <h1 className='text-2xl mb-4 text-black'>User Information Form</h1>
          </div>

          <label htmlFor="Name" className='text-xl'>Enter you name here</label>
          <input type="text" id="Name" name="Name"  className="mb-4 p-2 mt-2 outline-2 outline-neutral-950 w-full rounded-xl" />

          <label htmlFor="email" className='text-xl'>Enter your email here</label>
          <input type="email" id="email" name="email" className="mb-4 p-2 mt-2 outline-2 outline-neutral-950 w-full rounded-xl" />

          <label htmlFor="DOB" className='text-xl'>Enter your date of birth here</label>
          <input type="date" id="DOB" name="DOB"  className="mb-4 p-2 mt-2 outline-2 outline-neutral-950 w-full rounded-xl" />

          <button type="submit" className='bg-neutral-300 rounded-2xl px-2 py-4 w-full text-neutral-900 hover:bg-neutral-200 cursor-pointer'>Submit</button>
        </form>
    </div>
    
  )
}

export default App
