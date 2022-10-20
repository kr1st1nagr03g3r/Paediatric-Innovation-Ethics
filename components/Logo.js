import Link from 'next/link'

export default function Logo() {
  return (
    <>
      <style jsx>
        {`
          .logo {
            font-size: 80px;
            font-weight: 700;
            letter-spacing: 6px;
            color: white;
          }
          @media only screen and (max-width: 1200px) {
            .logo {
              font-size: 42px;
            }
          }
        `}
      </style>
      <Link passHref href="/">
        <a className="logo">PBT</a>
      </Link>
    </>
  )
}
