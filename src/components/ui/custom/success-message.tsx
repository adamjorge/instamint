export default function SuccessMessage({ message }: SuccessMessageProps) {
  return <div className="text-green-500">{message}</div>
}

type SuccessMessageProps = {
  message: string
}
