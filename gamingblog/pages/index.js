import Loader from "@/components/Loader";
import Link from "next/link";

import toast from "react-hot-toast";

export default function Home() {
  return (
    <div>
      <Loader show={true}/>
      <button onClick={() => toast.success('hello toast!')}>
        Toast Me
      </button>
    </div>
  );
}
