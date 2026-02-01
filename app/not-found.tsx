import Link from "next/link"

const NotFound = () => {
  return (
    <>
    <div className="text-4xl font-bold text-red-700">
        404 - Page Not Found
    </div>
        <Link href="/" className="text-4xl font-bold text-red-700" >Go Home</Link>
    </>
  )
}
export default NotFound