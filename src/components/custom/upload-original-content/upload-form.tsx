"use client"

import AgreeToTermsField from "@/components/custom/upload-original-content/form-fields/agree-to-terms"
import FileUploadField from "@/components/custom/upload-original-content/form-fields/file-upload"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { uploadContent } from "@/lib/query/client/minters/uploadContent"
import { formSchema } from "@/validators/schemas/upload-original-content/uploadContentSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslations } from "next-intl"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

export default function ImageUploadForm(props: ImageUploadFormProps) {
  const t = useTranslations()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      agreeToTerms: false
    }
  })
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await uploadContent(values.file, props.minterId)

      if (response.status === 200) {
        toast.success(t("global.successFileUpload"))
        form.reset()
      } else {
        toast.error(t("global.failedFileUpload"))
      }
    } catch (error) {
      toast.error(t("global.errorFileUpload"))
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col justify-center space-y-3"
        >
          <FileUploadField control={form.control} name="file" />
          <AgreeToTermsField control={form.control} name="agreeToTerms" />
          <Button type="submit">{t("uploadOriginalContent.uploadContentButton")}</Button>
        </form>
      </Form>
    </div>
  )
}

type ImageUploadFormProps = {
  minterId: string
}
