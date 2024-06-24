export default function ErrorMessage({ message }: ErrorMessageProps) {
  return <div className="text-red-500 text-center">{message}</div>
}

type ErrorMessageProps = {
  message: string
}
