import { FiHome, FiSearch, FiHeart, FiUser } from "react-icons/fi"
import { PiFlower } from "react-icons/pi"
import { Drawer, DrawerTrigger } from "../ui/drawer"
import Search from "../search"

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 p-4 bg-gray-800 text-white">
      <nav className="flex justify-around">
        <button>
          <FiHome className="w-6 h-6 text-gray-400 hover:text-green-500" />
        </button>
        <Drawer>
          <DrawerTrigger>
            <FiSearch className="w-6 h-6 text-gray-400 hover:text-green-500" />
          </DrawerTrigger>
          <Search />
        </Drawer>
        <button>
          <PiFlower className="w-6 h-6 text-gray-400 hover:text-green-500" />
        </button>
        <button>
          <FiHeart className="w-6 h-6 text-gray-400 hover:text-green-500" />
        </button>
        <button>
          <FiUser className="w-6 h-6 text-gray-400 hover:text-green-500" />
        </button>
      </nav>
    </footer>
  )
}
