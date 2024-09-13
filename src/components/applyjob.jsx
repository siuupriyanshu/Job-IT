import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
  import { Button } from "./ui/button"
  import { Input } from "./ui/input";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
  

 export const ApplyJobDrawer = ({ user, job, fetchJob, applied = false }) => {
  return (
    <Drawer open={applied ? false : undefined} >
    <DrawerTrigger asChild>
    <Button
          size="lg"
          variant={job?.isOpen && !applied ? "blue" : "destructive"}
          disabled={!job?.isOpen || applied}
        >
          {job?.isOpen ? (applied ? "Applied" : "Apply") : "Hiring Closed"}
        </Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle> Apply for {job?.title} at {job?.company?.name}</DrawerTitle>
        <DrawerDescription>Please Fill the form below</DrawerDescription>
      </DrawerHeader>
   <form className="flex flex-col gap-4 p-4 pb-0">
   <Input
            type="number"
            placeholder="Years of Experience"
            className="flex-1"
          />
           <Input
            type="text"
            placeholder="Skills (Comma Separated)"
            className="flex-1"
          />
   
   <RadioGroup >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Intermediate" id="intermediate" />
                  <Label htmlFor="intermediate">Intermediate</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Graduate" id="graduate" />
                  <Label htmlFor="graduate">Graduate</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Post Graduate" id="post-graduate" />
                  <Label htmlFor="post-graduate">Post Graduate</Label>
                </div>
              </RadioGroup>

            <Button type="submit" variant="blue" size="lg">
            Apply
          </Button>
   </form>
      <DrawerFooter>
        <DrawerClose>
          <Button variant="outline">Cancel</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
  
  )
}

export default ApplyJobDrawer
