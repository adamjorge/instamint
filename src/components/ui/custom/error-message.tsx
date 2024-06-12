import React from "react"

interface ErrorMessageProps {
  message: string
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div className="text-red-500 text-center">{message}</div>
)

export default ErrorMessage
