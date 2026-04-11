const Header = (props) => {

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser('');
  };

  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-indigo-500 to-purple-600 p-5 rounded-xl shadow-lg">
      
      {/* Left Side */}
      <div>
        <h1 className="text-lg text-gray-200">Welcome back,</h1>
        <h2 className="text-3xl font-bold tracking-wide">
          {props.username || "User"} 👋
        </h2>
      </div>

      {/* Right Side */}
      <button
        onClick={logOutUser}
        className="bg-white text-red-600 font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-red-600 hover:text-white transition-all duration-300"
      >
        Logout
      </button>
    </div>
  );
};

export default Header;