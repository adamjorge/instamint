"use client"

import { Button } from "@/components/ui/button"

export default function ProfileChanges({ handleClickOnDelete }: ChangesProps) {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h2>Modifier le profil</h2>
      <Button className="bg-red-500 text-white hover:bg-medium mt-5" onClick={handleClickOnDelete}>
        Delete your account
      </Button>
    </div>
  )
}

type ChangesProps = {
  handleClickOnDelete: () => void
}
