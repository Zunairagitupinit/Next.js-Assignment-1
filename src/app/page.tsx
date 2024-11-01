import Link from "next/link";

const HomePage = () => {
  return(
    <div>
      <ul>
        <h1>
        <li><Link href="/"><button>Home</button></Link ></li>
        <li><Link href="/about"><button>About</button></Link></li>
        <li><Link href="/contact"><button>Contact</button></Link></li>
        <li><Link href="/service"><button>Services</button></Link></li>
        </h1>
      </ul>
    </div>
  )
}
export default HomePage;