

const SocialLogin = () => {
  return (
    <div className="flex justify-center">
          
          <button
            className="bg-red-500 w-2xl hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Google
          </button>
          <button
            className="bg-blue-800 w-2xl hover:bg-blue-900 text-white font-bold py-2 px-4 ml-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Facebook
          </button>

        </div>
  )
}
export default SocialLogin