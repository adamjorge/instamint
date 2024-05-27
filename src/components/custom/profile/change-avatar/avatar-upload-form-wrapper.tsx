"use client"

import { postAvatar } from "@/lib/query/minters/postAvatarAction"
import { changeAvatarSchema } from "@/validators/schemas/changeAvatarSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import AvatarUploadForm from "@/components/custom/profile/change-avatar/avatar-upload-form"

export default function ImageUploadForm(props: ImageUploadFormProps) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (data: z.infer<typeof changeAvatarSchema>) =>
      postAvatar(data.image, props.minterId.toString()),
    onSuccess: async () => {
      toast.success("pfp uploaded successfully")
      await queryClient.invalidateQueries({ queryKey: ["avatar"] })
    },
    onError: () => {
      toast.error("error uploading pfp")
    }
  })
  const form = useForm<z.infer<typeof changeAvatarSchema>>({
    resolver: zodResolver(changeAvatarSchema),
    mode: "onBlur",
    defaultValues: {
      image: new File([""], "filename")
    }
  })
  const onSubmit = (values: z.infer<typeof changeAvatarSchema>) => {
    mutation.mutate(values)
  }
  const avatarUploadFormProps = {
    form,
    onSubmit
  }

  return <AvatarUploadForm {...avatarUploadFormProps} />
}

type ImageUploadFormProps = {
  minterId: number
}
