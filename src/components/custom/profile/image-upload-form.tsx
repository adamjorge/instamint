"use client"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { postAvatar } from "@/lib/query/minters/postAvatarAction"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

const formSchema = z.object({
  image: z.instanceof(File).refine((file) => file.size !== 0, "Please upload an image")
})

/* eslint-disable */

export default function ImageUploadForm(props: ImageUploadFormProps) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (data: z.infer<typeof formSchema>) =>
      postAvatar(data.image, props.minterId.toString()),
    onSuccess: () => {
      toast.success("pfp uploaded successfully")
      queryClient.invalidateQueries({ queryKey: ["avatar"] })
    },
    onError: () => {
      toast.error("error uploading pfp")
    }
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      image: new File([""], "filename")
    }
  })
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    mutation.mutate(values)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-center space-y-3"
      >
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Profile picture</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files) {
                      field.onChange(e.target.files[0])
                    }
                  }}
                  onBlur={field.onBlur}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Upload profile picture</Button>
      </form>
    </Form>
  )
}

type ImageUploadFormProps = {
  minterId: number
}
