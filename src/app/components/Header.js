import Container from "@/app/components/Container";
import Link from "next/link";

const Header = () => {
  return (
    <Container>
      <div className="py-4">
        <Link href="/">
          <div className="text-2xl font-semibold text-indigo-500 hover:text-indigo-700">
            back4app-postgres
          </div>
        </Link>
      </div>
    </Container>
  )
}

export default Header;