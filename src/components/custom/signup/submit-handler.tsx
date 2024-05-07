import { findUserByEmail } from "@/lib/utils/db"
import { signUp } from "@/lib/utils/signUpAuth"
import { toast } from "sonner"

export interface SignUpFormData {
  email: string
  password: string
  name: string
}

export async function handleSubmit(values: SignUpFormData) {
  try {
    const isEmailExists = await findUserByEmail(values.email)

    if (isEmailExists) {
      toast.error("Oops! email already exist")
    } else {
      await signUp(values)
    }
  } catch (e) {
    toast.error("Oops! something went wrong")
  }
}
