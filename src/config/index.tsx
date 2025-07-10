import { cookieStorage, createStorage } from '@wagmi/core'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { bscTestnet, bsc } from '@reown/appkit/networks'

// Get projectId from https://cloud.reown.com
export const projectId = "f32cfd3933b254e8a05a3eb8e5e1aadf"

if (!projectId) {
  throw new Error('Project ID is not defined')
}

export const networks = [bscTestnet, bsc]

//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage
  }),
  ssr: true,
  projectId,
  networks
})

export const config = wagmiAdapter.wagmiConfig