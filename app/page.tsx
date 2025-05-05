import Navbar from "@/components/Navbar";
import Image from "next/image";
import Menu from "@/components/Menu";
import CardList from "@/components/CardList";
import CategoryList from "@/components/CategoryList";
import Featured from "@/components/Featured";
export default function Home() {
  return (
    <div className="py-5">
      <Featured />
      <CategoryList />
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-3 lg:col-span-2"> <CardList /></div>
        <div className="col-span-1 hidden lg:block"> <Menu /></div>
      </div>

    </div>
  )
}
