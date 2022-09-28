import Link from "next/link";

export default function Logo() {
    return (
        <>
            <style jsx>
                {`
        .logo {
            font-size: 80px;
            font-weight: 700;
            letter-spacing: 6px;
           
        }
        `}
            </style>
            <Link passHref href="/"><a className="logo">PBT</a></Link>
        </>
    )
}