import { useUser } from "@clerk/clerk-react"
import { Trash2Icon } from "lucide-react";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "./ui/card";

const JobCard = ({
    job,
    isMyJob = false,
    savedInit = false,
    onJobSaved = () => {},
}) => {

    const { user } = useUser()
  return (
     <Card>
        <CardHeader>
            <CardTitle className="flex justify-between font-bold">
                {job.title}
                {!isMyJob && (
                     <Trash2Icon
                     fill="red"
                     size={18}
                     className="text-red-300 cursor-pointer"
                
                   />
                )}
            </CardTitle>
        </CardHeader>
        <CardContent>

        </CardContent>
        <CardFooter>
            
        </CardFooter>
     </Card> 
  ) 
}

export default JobCard
