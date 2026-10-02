import { useLocation } from "react-router"

export default function Weather() {
    const location  = useLocation();
    console.log(location.state.location)
  return (
    <div>
      This is weather page.
    </div>
  )
}
