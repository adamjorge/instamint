"use client"

import DeconnectionButton from "@/components/custom/deconnection-button"
import LanguageSelector from "@/components/custom/language-selector"
import { blockchainSymbolsIndex } from "@/constants/blockchainSymbolsIndex"
import { fetchBlockchainData } from "@/lib/query/crypto/fetchBlockchainData"
import { useQuery } from "@tanstack/react-query"
import { clsx } from "clsx"
import Image from "next/image"

export default function Header() {
  const { data, error, isPending } = useQuery({
    queryKey: ["blockchain-data"],
    queryFn: () => fetchBlockchainData(["BTC", "ETH", "XRP"])
  })

  return (
    <header className="flex w-full justify-between items-center bg-gray-800 pb-8 text-white">
      <div className="flex space-x-8">
        <div className="space-y-3 mt-5 ml-5">
          <LanguageSelector />
          <DeconnectionButton />
        </div>
        <div className="flex space-x-5 mt-8">
          <Image src="/instamint.svg" alt="Instamint Logo" width={40} height={15} priority />
          <h1 className="text-2xl mt-6">Instamint</h1>
        </div>
      </div>
      <div className="hidden lg:flex space-x-8 mt-10 mr-10">
        {!isPending &&
          !error &&
          data.map((blockchain, index) => {
            const percentChange =
              blockchain.data[blockchainSymbolsIndex[index]][0].quote.USD.percent_change_24h

            return (
              <div key={blockchainSymbolsIndex[index]} className="space-x-2">
                <span className="text-lg">{blockchainSymbolsIndex[index]}</span>
                <span className={clsx("text-green-500", { "text-red-500": percentChange < 0 })}>
                  {percentChange}
                </span>
              </div>
            )
          })}
      </div>
    </header>
  )
}
