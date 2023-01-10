import Image from 'next/image'
import styles from '../../styles/Form.module.css'
import { signIn } from 'next-auth/react'
import { IProvider } from '../../type'

const ProviderButton = ({providers} : IProvider) => {
  return (
    <div className="grid gap-3 grid-columns">
    {Object.values(providers).map(
      (provider) =>
        provider.name !== "Credentials" && (
          <button
            type="button"
            key={provider.name}
            className={styles.button_custom}
            onClick={() => {
              signIn(provider.id, {
                callbackUrl: `${process.env.NEXT_PUBLIC_URL_CALLBACK}`,
              });
            }}
          >
            <Image
              src={'/assets/google.svg'}
              width={20}
              height={20}
              alt="image"
            />
            <span className="font-semibold">{provider.name}</span>
          </button>
        )
    )}
  </div>
  )
}

export default ProviderButton