import { Button } from "../ui/button"
import {
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose
} from "../ui/drawer"
import { Input } from "../ui/input"

export default function Search() {
  return (
    <DrawerContent className="bg-light dark:bg-gray-200 dark:text-gray-800">
      <div className="mx-auto w-full max-w-sm">
        <DrawerHeader>
          <DrawerTitle>Search</DrawerTitle>
          <DrawerDescription>Search an NFT or a minter.</DrawerDescription>
        </DrawerHeader>
        <div className="flex justify-center">
          <Input type="search" placeholder="Search ..." className="mx-5 w-3/4" />
        </div>
        <DrawerFooter>
          <div className="flex flex-col items-center">
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button size="sm" variant="outline" className="w-fit">
                Cancel
              </Button>
            </DrawerClose>
          </div>
        </DrawerFooter>
      </div>
    </DrawerContent>
  )
}
