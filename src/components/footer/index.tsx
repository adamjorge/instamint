import { FiHome, FiSearch, FiHeart, FiUser } from "react-icons/fi"
import { PiFlower } from "react-icons/pi"

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 p-4 bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-800">
      <nav className="flex justify-around">
        <button>
          <FiHome className="w-6 h-6 text-gray-400 dark:text-gray-600 hover:text-green-500" />
        </button>
        <button>
          <FiSearch className="w-6 h-6 text-gray-400 dark:text-gray-600 hover:text-green-500" />
        </button>
        <button>
          <PiFlower className="w-6 h-6 text-gray-400 dark:text-gray-600 hover:text-green-500" />
        </button>
        <button>
          <FiHeart className="w-6 h-6 text-gray-400 dark:text-gray-600 hover:text-green-500" />
        </button>
        <button>
          <FiUser className="w-6 h-6 text-gray-400 dark:text-gray-600 hover:text-green-500" />
        </button>
      </nav>
    </footer>
  )
}
