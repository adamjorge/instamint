import withPWAInit from "@ducanh2912/next-pwa"
import createNextIntlPlugin from "next-intl/plugin"

const withPWA = withPWAInit({
  dest: "public",
  register: true
})

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "loremflickr.com"
      }
    ]
  }
}

export default withPWA(withNextIntl(nextConfig))
