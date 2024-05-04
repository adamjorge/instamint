"use client"

import ProfileMenu from "@/components/custom/profile/profile-menu/full-profile-menu"
import React from "react"

export default function ProfileView({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="h-screen flex mt-10">
      <ProfileMenu />
      {children}
    </div>
  )
}
