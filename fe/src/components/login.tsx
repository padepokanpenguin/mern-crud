export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input type="text" id="username" name="username" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200" placeholder="Enter your username" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" name="password" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200" placeholder="Enter your password" />
          </div>
          <button type="submit" className="w-full bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600 transition">Login</button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">Don&apos;t have an account? <a href="#" className="text-blue-500">Register</a></p>
      </div>
    </div>
  )
}