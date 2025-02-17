import { Link } from "react-router-dom";
import "./index.scss"

export default function Page() {
  return (
    <div className="Back back">
      <Link to="/reserve" className="icon">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" fill="#495E57"/>
          <path d="M18.12 17.46C18.52 17.04 18.68 16.66 18.68 16.36C18.68 15.74 18.1 15.36 17.5 15.36C17.16 15.36 16.82 15.48 16.54 15.78L13.56 18.8C13.16 19.2 12.96 19.74 12.96 20.24C12.96 20.76 13.16 21.26 13.54 21.66L16.5 24.64C16.78 24.92 17.14 25.04 17.46 25.04C18.06 25.04 18.64 24.66 18.64 24.06C18.64 23.74 18.5 23.36 18.1 22.94L16.7 21.52H27.02C27.68 21.52 28.22 20.98 28.22 20.28C28.22 19.62 27.68 19.08 27.02 19.08H16.54L18.12 17.46Z" fill="white"/>
        </svg>
      </Link>
      <span>Back</span>
    </div>
  )
}