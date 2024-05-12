import React from "react"

interface SuccessMessageProps {
  message: string
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ message }) => (
  <div className="text-green-500">{message}</div>
)

export default SuccessMessage
