import EditApplication from "./EditApplication";
import Navbar from "./navbar";

export default function QuestionsPage(){
    return(
        <div>
        <Navbar userName="Shivansh" userEmail="shivanshkalra796@gmail.com" userAvatar=""/>
        <main className="container mx-auto ">
        <EditApplication />
      </main>
      </div>
    )
}