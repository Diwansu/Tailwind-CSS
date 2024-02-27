

const Navbar = () => {
  return (
    <nav className="flex items-center p-5 bg-red-400 border-t-4 border-blue-800">
      <div className="items-center mr-5">
        <span className="text-white text-2xl font-bold">KALVIUM</span>
      </div>
      <div className="flex flex-1 items-center justify-between">
        <div className="text-sm flex flex-wrap">
          <a href=" " className="mr-4 xl:text-lg font-semibold text-white">
            About us
          </a>
          <a href=" " className="mr-4 xl:text-lg font-semibold text-white">
            Contacts
          </a>
          <a href=" " className="mr-4 xl:text-lg font-semibold text-white">
            Courses
          </a>
        </div>
        <div>
          <button
            href=" "
            className="text-white border-white border rounded p-1 px-5"
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};


const Alert = () => {
  return (
    <div className="p-10 px-40">
      <button className="text-white p-2 bg-blue-600 text-xs font-bold rounded">
        Button one
      </button>
      <div className="bg-red-100 border border-red-600 rounded text-red-700 px-5 py-3 my-5">
        <strong>Alert! </strong>
        <span>This is awesome!</span>
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <div className="p-5 max-w-md mx-auto   rounded-xl shadow-xl flex items-center space-x-10">
      <div>
        <img
          className="h-10 w-25"
          src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png"
          alt=""
        />
      </div>
      <div>
        <div className="text-xl font-medium text-black">Kalvium Store</div>
        <p className="text-slate-500">You have a new Course!</p>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-center py-5">
      <div className=" mx-auto ">
        <p>&copy;2024Copyright:Kalvium</p>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div>
      <Navbar />
      <Alert />
      <Card />
      <Footer />
    </div>
  );
};

export default App;
