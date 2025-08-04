const UserHeader = () => {
  return (
    <div className="relative">
      {/* Banner Background */}
      <div 
        className="h-48 bg-cover bg-center relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=200&fit=crop')"
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
      </div>

      {/* Profile Content */}
      <div className="px-6 pb-6">
        {/* Profile Picture */}
        <div className="relative -mt-16 mb-4">
          <div className="w-24 h-24 rounded-full border-4 border-black overflow-hidden bg-gray-800">
            <img 
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* User Info */}
        <div className="mb-4">
          <h1 className="text-xl font-bold text-white mb-1">aikoflux</h1>
          <p className="text-gray-400 text-sm mb-3">Last live Just now</p>
        </div>

        {/* Bio */}
        <div className="mb-4">
          <p className="text-white text-sm mb-3">Lets VYBE.</p>
        </div>

        {/* Relationship Status */}
        <div className="mb-4">
          <p className="text-gray-300 text-sm">aikoflux is in your circle.</p>
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-6">
          {/* X (Twitter) */}
          <a href="#" className="text-green-500 hover:text-green-400 transition-colors">
            <div className="flex items-center space-x-1">
              <span className="text-sm font-mono">𝕏</span>
              <span className="text-xs">X</span>
            </div>
          </a>

          {/* YouTube */}
          <a href="#" className="text-green-500 hover:text-green-400 transition-colors">
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span className="text-xs">YouTube</span>
            </div>
          </a>

          {/* Instagram */}
          <a href="#" className="text-green-500 hover:text-green-400 transition-colors">
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="text-xs">Instagram</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserHeader; 