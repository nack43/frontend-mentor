
const InfoCard = () => {
  return (
    <div className='flex items-center justify-between bg-indigo-50 w-full rounded-xl p-4 m-6'>
      <div className='flex items-center space-x-4'>
        <img src="/static/icon-music.svg" alt="" className='h-12 w-12'/>
        <div className='flex flex-col'>
          <p className='font-bold'>Annual Plan</p>
          <p className='text-gray-500'>$59.99/year</p>
        </div>
      </div>
      <p className='text-purple-700 font-semibold underline cursor-pointer'>Change</p>
    </div>
  )
}

export default InfoCard
